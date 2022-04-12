import * as Icons from "@shared/svgs";
import defaultTheme from "../shared/theme/default.theme";
import { palette } from "@shared/theme/config";

export enum Theme {
  DEFAULT = "DEFAULT",
}

export type ThemeType = typeof defaultTheme;
export type ColorType = keyof ThemeType["colors"]["icons"];

export type IconName = keyof typeof Icons;

export type ButtonVariants = "primary" | "secondary" | "teritary";
