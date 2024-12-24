"use client";

import { create } from "zustand";

import { Season } from "@/data/types";

type ConfigState = {
  season: Season;
  currentDay: number;
  numberOfCrops: number;
  combineIncomeAndCosts: boolean;
};

type ConfigActions = {
  setSeason: (season: Season) => void;
  setCurrentDay: (day: number) => void;
  setNumberOfCrops: (count: number) => void;
  toggleCombineIncomeAndCosts: () => void;
};

type ConfigStore = ConfigState & ConfigActions;

export const useConfigStore = create<ConfigStore>()((set, get) => {
  const defaults: ConfigState = {
    season: "spring",
    currentDay: 1,
    numberOfCrops: 1,
    combineIncomeAndCosts: true,
  };

  const setSeason = (season: Season) => set({ season });
  const setCurrentDay = (day: number) => set({ currentDay: day });
  const setNumberOfCrops = (count: number) => set({ numberOfCrops: count });
  const toggleCombineIncomeAndCosts = () =>
    set({ combineIncomeAndCosts: !get().combineIncomeAndCosts });

  return {
    ...defaults,
    setSeason,
    setCurrentDay,
    setNumberOfCrops,
    toggleCombineIncomeAndCosts,
  };
});
