import { Crop } from "./types";

// TODO: Add crop images
// TODO: Add crop processing options

export const crops: Record<string, Crop> = {
  blueJazz: {
    name: "Blue Jazz",
    url: "https://stardewvalleywiki.com/Blue_Jazz",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Jazz_Seeds",
      pierre: 30,
      joja: 37,
    },
    growth: {
      seasons: ["spring"],
      initial: 7,
    },
    produce: {
      price: 50,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  carrot: {
    name: "Carrot",
    url: "https://stardewvalleywiki.com/Carrot",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Carrot_Seeds",
    },
    growth: {
      seasons: ["spring"],
      initial: 3,
    },
    produce: {
      price: 35,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  cauliflower: {
    name: "Cauliflower",
    url: "https://stardewvalleywiki.com/Cauliflower",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Cauliflower_Seeds",
      pierre: 80,
      joja: 100,
    },
    growth: {
      seasons: ["spring"],
      initial: 12,
    },
    produce: {
      price: 175,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  coffeeBean: {
    name: "Coffee Bean",
    url: "https://stardewvalleywiki.com/Coffee_Bean",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Coffee_Bean",
      travelingCart: 2500,
    },
    growth: {
      seasons: ["spring", "summer"],
      initial: 10,
      regrow: 2,
    },
    produce: {
      price: 15,
      count: 4,
      extra: 1,
      extraChance: 0.02,
    },
  },
  garlic: {
    name: "Garlic",
    url: "https://stardewvalleywiki.com/Garlic",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Garlic_Seeds",
      pierre: 40,
    },
    growth: {
      seasons: ["spring"],
      initial: 4,
    },
    produce: {
      price: 60,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  greenBean: {
    name: "Green Bean",
    url: "https://stardewvalleywiki.com/Green_Bean",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Bean_Starter",
      pierre: 60,
      joja: 75,
    },
    growth: {
      seasons: ["spring"],
      initial: 10,
      regrow: 3,
    },
    produce: {
      price: 40,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  kale: {
    name: "Kale",
    url: "https://stardewvalleywiki.com/Kale",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Kale_Seeds",
      pierre: 70,
      joja: 87,
    },
    growth: {
      seasons: ["spring"],
      initial: 6,
    },
    produce: {
      price: 110,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  parsnip: {
    name: "Parsnip",
    url: "https://stardewvalleywiki.com/Parsnip",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Parsnip_Seeds",
      pierre: 20,
      joja: 25,
    },
    growth: {
      seasons: ["spring"],
      initial: 4,
    },
    produce: {
      price: 35,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  potato: {
    name: "Potato",
    url: "https://stardewvalleywiki.com/Potato",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Potato_Seeds",
      pierre: 50,
      joja: 62,
    },
    growth: {
      seasons: ["spring"],
      initial: 6,
    },
    produce: {
      price: 80,
      count: 1,
      extra: 1,
      extraChance: 0.25,
    },
  },
  rhubarb: {
    name: "Rhubarb",
    url: "https://stardewvalleywiki.com/Rhubarb",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Rhubarb_Seeds",
      oasis: 100,
    },
    growth: {
      seasons: ["spring"],
      initial: 13,
    },
    produce: {
      price: 220,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  strawberry: {
    name: "Strawberry",
    url: "https://stardewvalleywiki.com/Strawberry",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Strawberry_Seeds",
      eggFestival: 100,
    },
    growth: {
      seasons: ["spring"],
      initial: 8,
      regrow: 4,
    },
    produce: {
      price: 120,
      count: 1,
      extra: 1,
      extraChance: 0.02,
    },
  },
  tulip: {
    name: "Tulip",
    url: "https://stardewvalleywiki.com/Tulip",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Tulip_Bulb",
      pierre: 20,
      joja: 25,
    },
    growth: {
      seasons: ["spring"],
      initial: 6,
    },
    produce: {
      price: 30,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  unmilledRice: {
    name: "Unmilled Rice",
    url: "https://stardewvalleywiki.com/Unmilled_Rice",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Rice_Shoot",
      pierre: 40,
    },
    growth: {
      seasons: ["spring"],
      initial: 8, // Can be 6 days when irrigated
    },
    produce: {
      price: 30,
      count: 1,
      extra: 1,
      extraChance: 0.1,
    },
  },
  blueberry: {
    name: "Blueberry",
    url: "https://stardewvalleywiki.com/Blueberry",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Blueberry_Seeds",
      pierre: 80,
    },
    growth: {
      seasons: ["summer"],
      initial: 13,
      regrow: 4,
    },
    produce: {
      price: 50,
      count: 3,
      extra: 1,
      extraChance: 0.02,
    },
  },
  corn: {
    name: "Corn",
    url: "https://stardewvalleywiki.com/Corn",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Corn_Seeds",
      pierre: 150,
      joja: 187,
    },
    growth: {
      seasons: ["summer", "fall"],
      initial: 14,
      regrow: 4,
    },
    produce: {
      price: 50,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  hops: {
    name: "Hops",
    url: "https://stardewvalleywiki.com/Hops",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Hops_Starter",
      pierre: 60,
      joja: 75,
    },
    growth: {
      seasons: ["summer"],
      initial: 11,
      regrow: 1,
    },
    produce: {
      price: 25,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  hotPepper: {
    name: "Hot Pepper",
    url: "https://stardewvalleywiki.com/Hot_Pepper",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Pepper_Seeds",
    },
    growth: {
      seasons: ["summer"],
      initial: 5,
      regrow: 3,
    },
    produce: {
      price: 40,
      count: 1,
      extra: 1,
      extraChance: 0.03,
    },
  },
  melon: {
    name: "Melon",
    url: "https://stardewvalleywiki.com/Melon",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Melon_Seeds",
      pierre: 80,
      joja: 100,
    },
    growth: {
      seasons: ["summer"],
      initial: 12,
    },
    produce: {
      price: 250,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  poppy: {
    name: "Poppy",
    url: "https://stardewvalleywiki.com/Poppy",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Poppy_Seeds",
      pierre: 100,
      joja: 125,
    },
    growth: {
      seasons: ["summer"],
      initial: 7,
    },
    produce: {
      price: 140,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  radish: {
    name: "Radish",
    url: "https://stardewvalleywiki.com/Radish",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Radish_Seeds",
      pierre: 40,
      joja: 50,
    },
    growth: {
      seasons: ["summer"],
      initial: 6,
    },
    produce: {
      price: 90,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  redCabbage: {
    name: "Red Cabbage",
    url: "https://stardewvalleywiki.com/Red_Cabbage",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Red_Cabbage_Seeds",
      pierre: 100,
    },
    growth: {
      seasons: ["summer"],
      initial: 9,
    },
    produce: {
      price: 260,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  starfruit: {
    name: "Starfruit",
    url: "https://stardewvalleywiki.com/Starfruit",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Starfruit_Seeds",
      oasis: 400,
    },
    growth: {
      seasons: ["summer"],
      initial: 13,
    },
    produce: {
      price: 750,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  summerSpangle: {
    name: "Summer Spangle",
    url: "https://stardewvalleywiki.com/Summer_Spangle",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Spangle_Seeds",
      pierre: 50,
      joja: 62,
    },
    growth: {
      seasons: ["summer"],
      initial: 8,
    },
    produce: {
      price: 90,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  summerSquash: {
    name: "Summer Squash",
    url: "https://stardewvalleywiki.com/Summer_Squash",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Summer_Squash_Seeds",
    },
    growth: {
      seasons: ["summer"],
      initial: 6,
      regrow: 3,
    },
    produce: {
      price: 45,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  sunflower: {
    name: "Sunflower",
    url: "https://stardewvalleywiki.com/Sunflower",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Sunflower_Seeds",
    },
    growth: {
      seasons: ["summer", "fall"],
      initial: 8,
    },
    produce: {
      price: 80,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  tomato: {
    name: "Tomato",
    url: "https://stardewvalleywiki.com/Tomato",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Tomato_Seeds",
      pierre: 50,
      joja: 62,
    },
    growth: {
      seasons: ["summer"],
      initial: 11,
      regrow: 4,
    },
    produce: {
      price: 60,
      count: 1,
      extra: 1,
      extraChance: 0.05,
    },
  },
  wheat: {
    name: "Wheat",
    url: "https://stardewvalleywiki.com/Wheat",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Wheat_Seeds",
      pierre: 10,
      joja: 12,
    },
    growth: {
      seasons: ["summer", "fall"],
      initial: 4,
    },
    produce: {
      price: 25,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  amaranth: {
    name: "Amaranth",
    url: "https://stardewvalleywiki.com/Amaranth",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Amaranth_Seeds",
      pierre: 70,
      joja: 87,
    },
    growth: {
      seasons: ["fall"],
      initial: 7,
    },
    produce: {
      price: 150,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  artichoke: {
    name: "Artichoke",
    url: "https://stardewvalleywiki.com/Artichoke",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Artichoke_Seeds",
    },
    growth: {
      seasons: ["fall"],
      initial: 8,
    },
    produce: {
      price: 160,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  beet: {
    name: "Beet",
    url: "https://stardewvalleywiki.com/Beet",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Beet_Seeds",
      oasis: 20,
    },
    growth: {
      seasons: ["fall"],
      initial: 6,
    },
    produce: {
      price: 100,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  bokChoy: {
    name: "Bok Choy",
    url: "https://stardewvalleywiki.com/Bok_Choy",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Bok_Choy_Seeds",
      pierre: 50,
      joja: 62,
    },
    growth: {
      seasons: ["fall"],
      initial: 4,
    },
    produce: {
      price: 80,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  broccoli: {
    name: "Broccoli",
    url: "https://stardewvalleywiki.com/Broccoli",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Broccoli_Seeds",
    },
    growth: {
      seasons: ["fall"],
      initial: 8,
      regrow: 4,
    },
    produce: {
      price: 70,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  cranberries: {
    name: "Cranberries",
    url: "https://stardewvalleywiki.com/Cranberries",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Cranberry_Seeds",
      pierre: 240,
      joja: 300,
    },
    growth: {
      seasons: ["fall"],
      initial: 7,
      regrow: 5,
    },
    produce: {
      price: 75,
      count: 2,
      extra: 1,
      extraChance: 0.1,
    },
  },
  eggplant: {
    name: "Eggplant",
    url: "https://stardewvalleywiki.com/Eggplant",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Eggplant_Seeds",
      pierre: 20,
      joja: 25,
    },
    growth: {
      seasons: ["fall"],
      initial: 5,
      regrow: 5,
    },
    produce: {
      price: 60,
      count: 1,
      extra: 1,
      extraChance: 0.002,
    },
  },
  fairyRose: {
    name: "Fairy Rose",
    url: "https://stardewvalleywiki.com/Fairy_Rose",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Fairy_Seeds",
      pierre: 200,
      joja: 250,
    },
    growth: {
      seasons: ["fall"],
      initial: 12,
    },
    produce: {
      price: 290,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  grape: {
    name: "Grape",
    url: "https://stardewvalleywiki.com/Grape",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Grape_Starter",
      pierre: 60,
      joja: 75,
    },
    growth: {
      seasons: ["fall"],
      initial: 10,
      regrow: 3,
    },
    produce: {
      price: 80,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  pumpkin: {
    name: "Pumpkin",
    url: "https://stardewvalleywiki.com/Pumpkin",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Pumpkin_Seeds",
      pierre: 100,
      joja: 125,
    },
    growth: {
      seasons: ["fall"],
      initial: 13,
    },
    produce: {
      price: 320,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  yam: {
    name: "Yam",
    url: "https://stardewvalleywiki.com/Yam",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Yam_Seeds",
      pierre: 60,
      joja: 75,
    },
    growth: {
      seasons: ["fall"],
      initial: 10,
    },
    produce: {
      price: 160,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  powdermelon: {
    name: "Powdermelon",
    url: "https://stardewvalleywiki.com/Powdermelon",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Powdermelon_Seeds",
    },
    growth: {
      seasons: ["winter"],
      initial: 7,
    },
    produce: {
      price: 60,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  ancientFruit: {
    name: "Ancient Fruit",
    url: "https://stardewvalleywiki.com/Ancient_Fruit",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Ancient_Seeds",
    },
    growth: {
      seasons: ["greenhouse"],
      initial: 28,
      regrow: 7,
    },
    produce: {
      price: 550,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  cactusFruit: {
    name: "Cactus Fruit",
    url: "https://stardewvalleywiki.com/Cactus_Fruit",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Cactus_Seeds",
      oasis: 150,
    },
    growth: {
      seasons: ["greenhouse"],
      initial: 12,
      regrow: 3,
    },
    produce: {
      price: 75,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
  sweetGemBerry: {
    name: "Sweet Gem Berry",
    url: "https://stardewvalleywiki.com/Sweet_Gem_Berry",
    image: "",
    seeds: {
      url: "https://stardewvalleywiki.com/Rare_Seed",
      travelingCart: 1000,
    },
    growth: {
      seasons: ["fall"],
      initial: 24,
    },
    produce: {
      price: 3000,
      count: 1,
      extra: 0,
      extraChance: 0,
    },
  },
};

// TODO: Add wild seeds
// TODO: Add pineapple
// TODO: Add taro root
