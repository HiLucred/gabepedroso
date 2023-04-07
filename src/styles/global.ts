import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$background",
    "-webkit-font-smoothing": "antialiased",
    boxSizing: "border-box",
  },

  "body, input, textarea, button": {
    fontFamily: "Lexend Deca, sans-serif",
  },
});
