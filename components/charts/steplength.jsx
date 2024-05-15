import { LineChart } from "@tremor/react";
import data from "../../public/assets/writing/surgery-data/step_length.json";

export function StepLengthChart() {
  const cmFormatter = (number) => `${number}cm`;

  return (
    <div className="border border-black/10 rounded-md p-6 my-4">
      <h3 className="mt-0 text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Step Length
      </h3>
      <span className="mt-2 text-black-lighter text-xs font-sans leading-snug block">
        Median length of a step, in centimetres. I don’t think higher is
        inherently better but my usual gait would normalize.
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
        valueFormatter={cmFormatter}
        showXAxis={false}
      />
      <span className="mt-2 text-black-lighter text-xxs font-sans leading-snug block">
        Date range from May 1, 2023 – April 30, 2024
      </span>
    </div>
  );
}
