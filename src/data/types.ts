export type Season = "spring" | "summer" | "fall" | "winter" | "greenhouse";

export type Source =
  | "pierre"
  | "joja"
  | "travelingCart"
  | "oasis"
  | "eggFestival";

export type Crop = {
  name: string;
  url: string;
  image: string;
  seeds: {
    url: string;
  } & {
    [source in Source]?: number;
  };
  growth: {
    seasons: Season[];
    initial: number;
    regrow?: number;
  };
  produce: {
    price: number;
    count: number;
    extra: number;
    extraChance: number;
  };
};

