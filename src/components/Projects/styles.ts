import { styled } from "@/styles";

export const SwipeBox = styled("div", {
  width: "100%",
  maxWidth: "48rem",
  margin: "3.8rem auto 0.875rem auto",

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
  height: "6.5rem",
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

export const TechnologysBox = styled("div", {
  width: "100%",
  marginTop: "0.700rem",

  display: "flex",
  gap: "0.5rem",
  flexWrap: "wrap",

  span: {
    color: "$link",
    fontSize: "0.875rem",
    fontWeight: 400,
  },
});
