
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Diagram({ rights, wrongs }) {

    const COLORS = ["#FF6B01", "#D7D7D7"];
    const pieData = [
        {
            name: "Correct",
            // value: { rights },
            value: 20,
        },
        {
            name: "Incorrect",
            value: 37,
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

}

export default Diagram;
