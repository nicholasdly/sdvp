"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import {
  calculateCropProduction,
  calculateGrossIncome,
  calculateNetIncome,
  calculateNumberOfHarvests,
  calculateSeedCost,
  getCrops,
} from "@/data/helpers";
import { Metrics } from "@/data/types";
import { useConfigStore } from "@/hooks/use-config-store";
import { formatNumber } from "@/lib/utils";

import ProfitChartTooltip from "./profit-chart-tooltip";

export default function ProfitChart() {
  const { season, numberOfCrops, currentDay, combineIncomeAndCosts } =
    useConfigStore();

  const crops = getCrops({ season, sources: ["pierre"] });
  const data: Metrics[] = crops
    .map((crop) => ({
      crop: crop.name,
      grossIncome: calculateGrossIncome(crop, numberOfCrops, currentDay),
      netIncome: calculateNetIncome(crop, numberOfCrops, currentDay),
      costOfSeeds: calculateSeedCost(crop, numberOfCrops, currentDay),
      numberOfHarvests: calculateNumberOfHarvests(crop, currentDay),
      quantityProduced:
        calculateCropProduction(crop, numberOfCrops) *
        calculateNumberOfHarvests(crop, currentDay),
    }))
    .sort((a, b) => b.netIncome - a.netIncome);

  if (data.length === 0) {
    return (
      <div className="grid min-h-80 w-full place-items-center">
        <span className="text-muted-foreground">No crops found!</span>
      </div>
    );
  }

  return (
    <ChartContainer
      config={{} satisfies ChartConfig}
      className="min-h-80 w-full"
    >
      <BarChart
        accessibilityLayer
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="crop"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          tickMargin={5}
          axisLine={false}
          width={40}
          tickFormatter={(value) => formatNumber(value)}
        />
        <ReferenceLine y={0} stroke="hsl(var(--muted-foreground))" />
        <ChartTooltip content={<ProfitChartTooltip />} />
        {combineIncomeAndCosts && (
          <Bar dataKey="netIncome" radius={4} fill="hsl(var(--chart-blue))" />
        )}
        {!combineIncomeAndCosts && (
          <Bar
            dataKey="grossIncome"
            radius={4}
            fill="hsl(var(--chart-green))"
          />
        )}
        {!combineIncomeAndCosts && (
          <Bar
            dataKey="costOfSeeds"
            radius={4}
            fill="hsl(var(--chart-yellow))"
          />
        )}
      </BarChart>
    </ChartContainer>
  );
}
