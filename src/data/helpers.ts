import { crops } from "./crops";
import { Crop, Season, Source } from "./types";

export function getCrops(filter?: { season?: Season; sources?: Source[] }) {
  let results = Object.values(crops);

  // Filter crops by season.
  if (filter?.season) {
    results = results.filter((crop) => {
      return crop.growth.seasons.includes(filter.season!);
    });
  }

  // Filter crops by seed source.
  if (filter?.sources && filter.sources.length > 0) {
    results = results.filter((crop) => {
      return filter.sources!.every((source) => {
        return Object.keys(crop.seeds).includes(source);
      });
    });
  }

  return results;
}

export function calculateCropProduction(crop: Crop, cropCount: number) {
  // The number of crops received from a single harvest.
  const produce = crop.produce.count;

  // The number of extra crops received from a single harvest.
  const extra = crop.produce.extra * crop.produce.extraChance;

  return (produce + extra) * cropCount;
}

export function calculateNumberOfHarvests(crop: Crop, day: number) {
  const days = 28 - day; // The number of days until the end of the season.

  // The number of harvests until the end of the season.
  const harvests =
    crop.growth.regrow && crop.growth.initial <= days
      ? 1 + Math.floor((days - crop.growth.initial) / crop.growth.regrow)
      : Math.floor(days / crop.growth.initial);

  return harvests;
}

export function calculateSeedCost(
  crop: Crop,
  count: number,
  currentDay: number,
) {
  let cost = 0; // The total cost of seeds.

  const harvests = calculateNumberOfHarvests(crop, currentDay);

  if (crop.growth.regrow && crop.seeds.pierre) {
    cost = crop.seeds.pierre * count;
  } else if (crop.seeds.pierre) {
    cost = crop.seeds.pierre * count * harvests;
  }

  return cost;
}

export function calculateGrossIncome(
  crop: Crop,
  count: number,
  currentDay: number,
) {
  const produced = calculateCropProduction(crop, count);
  const harvests = calculateNumberOfHarvests(crop, currentDay);

  return harvests * (produced * crop.produce.price);
}

export function calculateNetIncome(
  crop: Crop,
  count: number,
  currentDay: number,
) {
  const grossIncome = calculateGrossIncome(crop, count, currentDay);
  const seedCost = calculateSeedCost(crop, count, currentDay);

  return grossIncome - seedCost;
}
