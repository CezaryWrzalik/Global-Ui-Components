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
    }

    // This color 
  },
  ...global,
};

export default defaultTheme;