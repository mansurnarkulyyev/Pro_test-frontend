import React from "react";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

import Title from "../../components/Title/Title";

import photo from "../../../images/icons/010 1.png";
import Button from "../../components/Button/Button";

import s from "./diagramRechart.module.scss";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";



function PieRechartComponent() {

    // const [correct, setCorrect] = useState([]);
    // const [incorrect, setIncorrect] = useState([]);

    // useEffect(() => {
    //     const getData = async () => {
    // const correct = [];
    // const incorrect = [];
    //         const reqData = await fetch("https://");
    //         const resData = await reqData.json();
    // console.log(resData);
    //         for (let i = 0; i < resData.length; i += 1) {
    //             correct.push(resData[i].tech)
    //             incorrect.push(resData[i].theory)

    //         }

    // setCorrect(correct);
    // setIncorrect(incorrect);

    //     }
    //     getData();
    // })


    const COLORS = ["#FF6B01", "#D7D7D7"];
    const pieData = [
        {
            name: "Correct",
            value: 66.14
        },
        {
            name: "Incorrect",
            value: 10.35
        }
    ];
    const CustomTooltip = ({ active, payload, label, value }) => {
        if (active) {
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: "#ffff",
                        padding: "5px",
                        border: "1px solid #cccc"
                    }}
                >
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                    {/* <label>{`${[{ value: 'name', type: 'line', id: 'ID01' }]}`}</label> */}
                </div>
            );
        }
        return null;
    };

    const navigate = useNavigate();

    const goToTest = () => {
        navigate("/test");
    };


    return (
        <div className={s.rechart}>
            <Title text="Results" />

            <span className={s.test_th}>[ TESTING THEORY_ ]</span>

            <div className={s.line}></div>

            <PieChart width={500} height={300}>
                <Pie
                    data={pieData}
                    color="#000000"
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    stroke="none"
                    outerRadius={120}
                    fill="#FF6B01"
                >
                    {pieData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend layout="vertical" verticalAlign="middle" align="right" dataKey="value"
                    nameKey="name" />
                {/* <Legend content={<RenderLegend />} layout="vertical" verticalAlign="middle" align="right" /> */}

            </PieChart>

            <div className={s.result}>
                <p>Correct answers - <strong>9</strong></p>
                <div className={s.line2}>&#124;</div>

                <p>Total questions - <strong>12</strong></p>

            </div>
            <img
                src={photo}
                alt="01"
            />

            <Title text="Not bad!" />

            <p className={s.text}>But you still need to learn some materials.</p>

            <Button
                className={classNames("button", "text", "focus", "top")}
                type="submit"
                text="Try again"
                onClick={goToTest}
            />

        </div>
    );
}

export default PieRechartComponent;

