import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

import photo from "../../images/icons/010 1.png";

import s from "./rechartsPage.module.scss";

class PieRechartComponent extends React.Component {
    COLORS = ["#FF6B01", "#D7D7D7"];
    pieData = [
        {
            name: "One Plus",
            value: 66.14
        },
        {
            name: "Others",
            value: 10.25
        }
    ];
    CustomTooltip = ({ active, payload, label }) => {
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
    render() {
        return (
            <div className={s.rechart}>
                <h2 className={s.title}>Results</h2>
                <span>[ TESTING THEORY_ ]</span>

                <div className={s.line}></div>

                <PieChart width={500} height={300}>
                    <Pie
                        data={this.pieData}
                        color="#000000"
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#FF6B01"
                    >
                        {this.pieData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={this.COLORS[index % this.COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip content={<this.CustomTooltip />} />
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

                <h2><strong>Not bad!</strong></h2>
                <p>But you still need to learn some materials.</p>

            </div>
        );
    }
}
export default PieRechartComponent;