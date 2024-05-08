import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import data from "../../public/assets/writing/surgery-data/walking_asymmetry.json";

export function WalkingAsymmetryChart() {
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
