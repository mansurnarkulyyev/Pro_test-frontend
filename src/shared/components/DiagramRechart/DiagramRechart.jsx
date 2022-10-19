import React from "react";
// import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

import Title from "../../components/Title/Title";

import photo from "../../../images/icons/010 1.png";
// import Button from "../../shared/components/Button";

import s from "./diagramRechart.module.scss";



function PieRechartComponent() {

    // const [correct, setSorrect] = useState([]);
    // const [incorrect, setIncorrect] = useState([]);

    // useEffect(() => {
    //     const getData = async () => {
    //         const correct = [];
    //         const incorrect = [];
    //         const reqData = await fetch("https://");
    //         const resData = await reqData.json();

    //         for (let i = 0; i < resData.length; i += 1) {
    //             correct.push(reqData[i].name)

    //         }

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
    const CustomTooltip = ({ active, payload, label }) => {
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
                </div>
            );
        }
        return null;
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
                <Legend layout="vertical" verticalAlign="middle" align="right" />
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

            {/* <Button
                type="submit"
                text="Sign in"
            /> */}

        </div>
    );
}
export default PieRechartComponent;

