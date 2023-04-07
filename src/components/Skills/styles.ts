import { styled } from "@/styles";

export const Container = styled("section", {
  display: "flex",
  width: "98%",
  gap: "3rem",

  "@media (max-width: 768px)": {
    flexWrap: "wrap",
  },
});

export const SkillsBox = styled("div", {
  display: "flex",
  width: "100%",
  gap: "0.5rem",

  marginTop: "6.5rem",
  marginBottom: "1rem",
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

  "@media (max-width: 768px)": {
    justifyContent: "center",
    alignItems: "center",
  },
});

export const SkillsList = styled("div", {
  ul: {
    borderLeft: "6px solid $pink",

    "@media (max-width: 768px)": {
      display: "flex",
      flexWrap: "wrap",
      borderLeft: "none",

      justifyContent: "center",
      alignItems: " center",
    },
  },

  li: {
    listStyleType: "none",
    color: "$primary",
    padding: "1rem",
    height: "100%",

    "&:hover": {
      backgroundColor: "$tertiary",
    },
  },
});

export const InfoBox = styled("div", {
  backgroundColor: "$tertiary",
  borderRadius: 11,
  padding: "1.25rem 2.5rem",
  height: "100%",

  h2: {
    marginBottom: "2rem",
    fontSize: "2rem",
    color: "$primary",
  },

  p: {
    marginBottom: "2rem",
    color: "$secondary",
  },
});
