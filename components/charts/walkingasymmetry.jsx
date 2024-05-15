import { LineChart } from "@tremor/react";
import data from "../../public/assets/writing/surgery-data/walking_asymmetry.json";

export function WalkingAsymmetryChart() {
  const percentageFormatter = (number) => `${(number * 100).toFixed(1)}%`;
  return (
    <div className="border border-black/10 rounded-md p-6 my-4">
      <h3 className="mt-0 text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Walking Asymmetry
      </h3>
      <span className="mt-2 text-black-lighter text-xs font-sans leading-snug block">
        Percentage of time that asymmetric steps are counted while walking.
        Lower is better.
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
        autoMinValue={true}
        valueFormatter={percentageFormatter}
        showXAxis={false}
      />
      <span className="mt-2 text-black-lighter text-xxs font-sans leading-snug block">
        Date range from May 1, 2023 – April 30, 2024
      </span>
    </div>
  );
}
