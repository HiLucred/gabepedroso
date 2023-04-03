import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      'primary': '#B6B6B6',
      'secondary': '#626161',
      'tertiary': '#171717',
      'pink': '#FF066F',
      'link': '#333333',
      'background': '#131313',
      'white': '#FFFFFF'
    }
  }
});
