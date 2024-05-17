import { LineChart } from "@tremor/react";
import data from "../../public/assets/writing/surgery-data/double_support.json";

export function DoubleSupportChart() {
  const percentageFormatter = (number) => `${(number * 100).toFixed(1)}%`;

  return (
    <div className="border border-black/10 rounded-md p-6 mt-4 mb-6">
      <h3 className="mt-0 text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Double Support Percentage
      </h3>
      <span className="mt-2 text-black-lighter text-xs font-sans leading-snug block">
        Percentage of gait cycle spent on two feet. Lower is better.
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
