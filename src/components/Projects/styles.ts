import { styled } from "@/styles";

export const SwipeBox = styled("div", {
  width: "100%",
  maxWidth: "48rem",
  margin: "0 auto 0.875rem auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "0.5rem",

  span: {
    color: "$link",
    fontSize: "0.875rem",
  },

  i: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "$pink",
  },
});

export const Container = styled("section", {
  width: "100%",
  maxWidth: "48rem",
  margin: "0 auto",
  display: "flex",
});

export const Project = styled("div", {
  img: {
    borderRadius: 8,
  },
});

export const Info = styled("div", {
  boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.1)",

  maxWidth: 375,
  padding: "1rem",
  position: "relative",
  borderRadius: 11,
  backgroundColor: "$tertiary",
  overflow: "hidden",

  h2: {
    color: "$primary",
    fontSize: "1rem",
    fontWeight: 400,
    marginBottom: "0.5rem",
  },

  a: {
    textDecoration: "none",
  },

  p: {
    color: "$secondary",
    fontSize: "1rem",
    fontWeight: 400,
    marginBottom: "1.5rem",
  },

  "@media (max-width: 600px)": {
    height: "4rem",

    p: {
      opacity: 0,
    },
  },
});

export const Links = styled("span", {
  position: "absolute",
  top: "1rem",
  right: "1rem",

  a: {
    marginLeft: "0.5rem",
    color: "$secondary",
    transition: "0.2s",

    "&:hover": {
      color: "$pink",
      transition: "0.2s",
    },
  },
});
