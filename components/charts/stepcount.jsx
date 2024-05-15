import { LineChart } from "@tremor/react";
import data from "../../public/assets/writing/surgery-data/step_count.json";

export function StepCountChart() {
  const thousandFormatter = (number) => {
    if (number === 0) return "0";

    const roundedNumber = (number / 1000).toFixed(1);
    const integerPart = parseInt(roundedNumber, 10);
    const decimalPart = parseFloat(roundedNumber) - integerPart;

    return decimalPart === 0 ? `${integerPart}k` : `${roundedNumber}k`;
  };

  return (
    <div className="border border-black/10 rounded-md py-5 px-6 my-4">
      <h3 className="mt-0 text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Step Count
      </h3>
      <span className="mt-2 text-black-lighter text-xs font-sans leading-snug block">
        Steps per day. I usually try to do at least 10,000. Higher is better.
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
        valueFormatter={thousandFormatter}
        showXAxis={false}
      />
      <span className="mt-2 text-black-lighter text-xxs font-sans leading-snug block">
        Date range from May 1, 2023 – April 30, 2024
      </span>
    </div>
  );
}
