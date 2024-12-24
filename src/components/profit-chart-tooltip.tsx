import { forwardRef } from "react";
import * as RechartsPrimitive from "recharts";

import { Metrics } from "@/data/types";
import { cn, formatNumber } from "@/lib/utils";

function TooltipItem({
  className,
  label,
  value,
}: {
  className?: string;
  label: string;
  value: number;
}) {
  return (
    <div className={cn("flex items-center justify-between gap-3", className)}>
      <span className="text-muted-foreground">{label}</span>
      <span className="font-mono font-medium text-foreground">
        {formatNumber(value)}
      </span>
    </div>
  );
}

const ProfitChartTooltip = forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip>
>(({ active, payload, label }, ref) => {
  if (!active || !payload?.length) return null;

  const data = payload[0].payload as Metrics;

  return (
    <div
      ref={ref}
      className="flex flex-col gap-1.5 rounded border bg-background p-2 text-xs shadow-xl"
    >
      <div className="font-medium">{label}</div>
      <div className="flex flex-col gap-1">
        <TooltipItem label="Gross Income" value={data.grossIncome} />
        <TooltipItem label="Net Income" value={data.netIncome} />
        <TooltipItem
          className="mt-1.5"
          label="Cost of Seeds"
          value={data.costOfSeeds}
        />
        <TooltipItem
          className="mt-1.5"
          label="Number of Harvests"
          value={data.numberOfHarvests}
        />
        <TooltipItem label="Quantity Produced" value={data.quantityProduced} />
      </div>
    </div>
  );
});
ProfitChartTooltip.displayName = "ProfitChartTooltip";

export default ProfitChartTooltip;
