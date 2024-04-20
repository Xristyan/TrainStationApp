import { Coords } from "./mapTypes";

export type Museum = {
  id: Number;
  coordinates: Coords;
  name: Localization;
  description: Localization;
};

export type Locale = "en" | "de";

export type Localization = {
  en?: String;
  de?: String;
};
