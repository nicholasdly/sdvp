"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ReferenceLine,
  XAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { crop: "Potato", profit: 203.98 },
  { crop: "Cauliflower", profit: 193.44 },
  { crop: "Green Bean", profit: 182.39 },
  { crop: "Kale", profit: 164.34 },
  { crop: "Garlic", profit: 123.58 },
  { crop: "Parsnip", profit: 91.97 },
  { crop: "Blue Jazz", profit: 61.46 },
  { crop: "Tulip", profit: 41.15 },
  { crop: "Unmilled Rice", profit: -19.14 },
];

const chartConfig = {
  profit: {
    label: "Profit",
  },
} satisfies ChartConfig;

export default function Home() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col p-4">
      <div className="rounded border p-3">
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="crop"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ReferenceLine y={0} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="profit" radius={4}>
              {chartData.map((item) => (
                <Cell
                  key={item.crop}
                  fill={
                    item.profit > 0
                      ? "hsl(var(--chart-green))"
                      : "hsl(var(--chart-red))"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>
    </main>
  );
}
