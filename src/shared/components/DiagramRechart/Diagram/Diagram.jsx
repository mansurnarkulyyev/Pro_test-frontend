
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Diagram({ rights, wrongs }) {
  // const [correct, setCorrect] = useState([]);
  // const [incorrect, setIncorrect] = useState([]);

// import classNames from 'classnames';
import React from 'react'
// import Chart from 'react-apexcharts'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// import s from "./diagram.module.scss";


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
      value: { rights },
    },
    {
      name: "Incorrect",
      value: { wrongs },
    },
  ];
  const CustomTooltip = ({ active, payload, label, value }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };
  return (
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
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend layout="vertical" verticalAlign="middle" align="right" />
    </PieChart>
  );

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




    const radius = "80"

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
                </div>
            );
        }
        return null;
    };
    return (
        <PieChart width={450} height={200}>
            <Pie
                data={pieData}
                color="#000000"
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                stroke="none"
                outerRadius={radius}
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
    )

}

export default Diagram;
