"use client";

import ProfitChart from "@/components/profit-chart";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Season } from "@/data/types";
import { useConfigStore } from "@/hooks/use-config-store";

function SeasonSelector() {
  const { season, setSeason } = useConfigStore();

  return (
    <div className="flex items-center gap-2 text-nowrap">
      <Label htmlFor="season">Season:</Label>
      <Select
        value={season}
        onValueChange={(value) => setSeason(value as Season)}
      >
        <SelectTrigger id="season">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="spring">Spring</SelectItem>
          <SelectItem value="summer">Summer</SelectItem>
          <SelectItem value="fall">Fall</SelectItem>
          <SelectItem value="winter">Winter</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

function CurrentDayInput() {
  const { currentDay, setCurrentDay } = useConfigStore();

  return (
    <div className="flex items-center gap-2 text-nowrap">
      <Label htmlFor="currentDay">Current Day:</Label>
      <Input
        id="currentDay"
        type="number"
        min={1}
        max={28}
        value={currentDay}
        onChange={(event) => {
          let value = Number(event.target.value);
          if (value < 1) value = 1;
          if (value > 28) value = 28;
          setCurrentDay(value);
        }}
      />
    </div>
  );
}

function NumberOfCropsInput() {
  const { numberOfCrops, setNumberOfCrops } = useConfigStore();

  return (
    <div className="flex items-center gap-2 text-nowrap">
      <Label htmlFor="cropCount">Number of Crops:</Label>
      <Input
        id="cropCount"
        type="number"
        min={1}
        max={3427}
        value={numberOfCrops}
        onChange={(event) => {
          let value = Number(event.target.value);
          if (value < 1) value = 1;
          if (value > 3427) value = 3427;
          setNumberOfCrops(value);
        }}
      />
    </div>
  );
}

function CombineIncomeAndCostsToggle() {
  const { combineIncomeAndCosts, toggleCombineIncomeAndCosts } =
    useConfigStore();

  return (
    <div className="my-2 flex w-full items-center justify-center gap-2 text-nowrap">
      <Label htmlFor="includeSeedCost">Combine Income and Costs?</Label>
      <Switch
        id="includeSeedCost"
        checked={combineIncomeAndCosts}
        onCheckedChange={toggleCombineIncomeAndCosts}
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl p-4">
      <header className="mb-4 flex justify-center">
        <h1 className="text-2xl font-semibold">nicholasdly/sdvp</h1>
      </header>
      <main className="flex flex-col gap-4">
        <section className="rounded border p-3">
          <ProfitChart />
        </section>
        <section className="flex flex-col gap-x-8 gap-y-3 rounded border px-5 py-3 sm:flex-row">
          <div className="flex w-full flex-col gap-2">
            <SeasonSelector />
            <CurrentDayInput />
            <NumberOfCropsInput />
          </div>
          <div className="flex w-full flex-col gap-2">
            <CombineIncomeAndCostsToggle />
          </div>
        </section>
      </main>
    </div>
  );
}
