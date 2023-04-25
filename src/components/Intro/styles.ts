import { styled } from "@/styles";
import Image from "next/image";

export const Container = styled("header", {
  maxWidth: "16.75rem",
  marginTop: "12rem",
  marginBottom: "6.5rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

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

export const Avatar = styled(Image, {
  borderRadius: 999999,
  marginBottom: "1.125rem",
  
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
