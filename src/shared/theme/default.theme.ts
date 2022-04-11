import dynamic from "next/dynamic";
import { global, palette } from "./config";

const defaultTheme = {
  colors: {
    body: palette.dark_gray,
    text: {
      primary: palette.dark_white,
      secondary: palette.white
    },
    input: {
      bgPrimary: palette.dark_gray,
      borderPrimary: palette.dynamic,
      textPrimary: palette.dark_white,
    },
    list: {
      markColor: palette.dynamic,
    },
    additional: {
      text: palette.dark_white,
      error: palette.red_orange,
      success: palette.dynamic,
    },

    dynamic: palette.dynamic,

    // This color 
  },
  ...global,
};

export default defaultTheme;