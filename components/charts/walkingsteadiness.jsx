import { LineChart } from "@tremor/react";
import data from "../../public/assets/writing/surgery-data/walking_steadiness.json";

export function WalkingSteadinessChart() {
  const percentageFormatter = (number) => `${(number * 100).toFixed(1)}%`;
  return (
    <div className="border border-black/10 rounded-md p-6 my-4">
      <h3 className="mt-0 text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Walking Steadiness
      </h3>
      <span className="mt-2 text-black-lighter text-xs font-sans leading-snug block">
        A mix of balance, stability, and coordination while walking. This data
        is provided on weekly cadence. Apple classifies these values as “OK,
        Low, or Very Low,” but here, higher is better.
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
        showXAxis={false}
      />
      <span className="mt-2 text-black-lighter text-xxs font-sans leading-snug block">
        Date range from May 1, 2023 – April 30, 2024
      </span>
    </div>
  );
}
