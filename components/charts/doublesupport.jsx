import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import data from "../../public/assets/writing/surgery-data/double_support.json";

export function DoubleSupportChart() {
  return (
    <VictoryChart>
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc" },
        }}
        data={data}
        x="startdate"
        y="value"
      />
    </VictoryChart>
  );
}
