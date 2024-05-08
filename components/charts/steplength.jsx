import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import data from "../../public/assets/writing/surgery-data/step_length.json";

export function StepLengthChart() {
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
