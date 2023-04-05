import { styled } from "@/styles";

export const Container = styled("header", {
  maxWidth: "16.75rem",
  marginTop: "12rem",
  marginBottom: "6.5rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  img: {
    borderRadius: 999999,
    marginBottom: "1.125rem",
  },

  h1: {
    color: "$primary",
    fontWeight: 700,
  },

  p: {
    color: "$secondary",
    fontWeight: 400,
    textAlign: "center",
  },
});

export const Links = styled("div", {
  marginTop: "1.125rem",

  display: "flex",
  gap: "0.5rem",

  a: {
    color: "$white",
    transition: "0.2s",

    "&:hover": {
      color: "$pink",
      transition: "0.2s",
    },
  },
});
