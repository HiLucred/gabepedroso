import { styled } from "@/styles";

export const Container = styled("div", {
  button: {
    background: "transparent",
    border: "none",
    cursor: "pointer",

    "&:hover": {
      opacity: 0.8,
    },
  },
});

export const HamburgerMenu = styled("nav", {
  width: "100%",
  height: "6rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 300,

  borderBottom: "5px solid #1C1C1C",
  backgroundColor: "$tertiary",
});

export const Menu = styled("nav", {
  width: "100%",
  height: "15rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",

  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 100,

  borderBottom: "4px solid #890A3F",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.8)",
  backgroundColor: "$pink",

  ul: {
    listStyleType: "none",
    fontSize: "2rem",
    textAlign: "center",

    li: {
      "&:hover": {
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
  },

  button: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
  },

  variants: {
    isOpen: {
      open: {
        top: 0,
        transition: "0.5s",
        zIndex: 999999,
      },

      close: {
        top: -500,
        transition: "1s",
        zIndex: 0,
      },
    },
  },
});
