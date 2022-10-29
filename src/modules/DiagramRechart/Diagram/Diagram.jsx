import { PieChart, Pie, Cell, Legend } from "recharts";
import CustomLegend from "../CustomLegend";
import useBreakpoints from "../../../shared/hooks/useBreakpoints";

function Diagram({ rights, wrongs }) {
  const { less768px, bigger768px, bigger1280px } = useBreakpoints();
  const radius = less768px ? 78 : 143;
  const width = less768px ? 320 : bigger768px ? 550 : 1280;
  const height = radius * 2;
  const iconSize = less768px ? 14 : 25;
  const legendTop = less768px ? 18 : bigger1280px ? 54 : 52;
  const legendLeft = less768px ? 230 : bigger1280px ? 460 : 467;
  const total = rights + wrongs;

  const COLORS = ["#FF6B01", "#D7D7D7"];
  const pieData = [
    {
      name: "Correct",
      value: rights,
      color: COLORS[0],
    },
    {
      name: "Incorrect",
      value: wrongs,
      color: COLORS[1],
    },
  ];

  return (
    <PieChart width={width} height={height}>
      <Pie
        data={pieData}
        color="#000000"
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        stroke="none"
        outerRadius={radius}
      >
        {pieData.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Legend
        content={
          <CustomLegend
            data={pieData}
            total={total}
            iconName="legend"
            iconWidth={iconSize}
            iconHeight={iconSize}
          />
        }
        width={41}
        layout="vertical"
        align="right"
        verticalAlign="top"
        iconSize={iconSize}
        wrapperStyle={{ top: legendTop, left: legendLeft }}
      />
    </PieChart>
  );
}

export default Diagram;
