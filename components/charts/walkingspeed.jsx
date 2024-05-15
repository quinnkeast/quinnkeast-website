import { LineChart } from "@tremor/react";
import data from "../../public/assets/writing/surgery-data/walking_speed.json";

export function WalkingSpeedChart() {
  const speedFormatter = (speed) => `${speed}km/h`;

  return (
    <div className="border border-black/10 rounded-md p-6 my-4">
      <h3 className="mt-0 text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Walking Speed
      </h3>
      <span className="mt-2 text-black-lighter text-xs font-sans leading-snug block">
        Median walking speed per day in km/h. These values are influenced by how
        quickly I’m walking Pepper, but they even out over time.
      </span>
      <LineChart
        className="mt-4 w-full h-60"
        data={data}
        index="startdate"
        categories={["value"]}
        colors={["indigo"]}
        showTooltip={false}
        showAnimation={false}
        showLegend={false}
        valueFormatter={speedFormatter}
        showXAxis={false}
        yAxisWidth={60}
      />
      <span className="mt-2 text-black-lighter text-xxs font-sans leading-snug block">
        Date range from May 1, 2023 – April 30, 2024
      </span>
    </div>
  );
}
