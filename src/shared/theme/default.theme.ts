import { global, palette } from "./config";

const defaultTheme = {
  colors: {
    body: palette.dark_gray,
    button: {
      textPrimary: palette.white,
      border: palette.dynamic,
      bgPrimary: palette.dynamic,
      textSecondary: palette.dynamic,
    },
    text: {
      primary: palette.dark_white,
      secondary: palette.white,
    },
    input: {
      bgPrimary: palette.dark_gray,
      borderPrimary: palette.dynamic,
      textPrimary: palette.dark_white,

      error: palette.red_orange,
    },
    list: {
      markColor: palette.dynamic,
    },
    icons: {
      error: palette.red_orange,
    },
    dynamic: palette.dynamic,

    // This color
  },
  ...global,
};

export default defaultTheme;
