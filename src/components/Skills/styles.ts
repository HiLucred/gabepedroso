import { styled } from "@/styles";

export const Container = styled("section", {
  display: "flex",

  gap: "4rem",
});

export const SkillsBox = styled("div", {
  display: "flex",
  alignItems: "center",
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
});

export const SkillsList = styled("div", {
  ul: {
    borderLeft: "6px solid $pink",
    paddingLeft: "1.25rem",
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
