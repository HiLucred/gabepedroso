import { styled } from "@/styles";

export const Container = styled("section", {
  display: "flex",
  marginTop: "6.5rem",
  gap: '4rem'
});

export const SkillsList = styled("div", {
  ul: {
    borderLeft: "6px solid $pink",
    paddingLeft: "1.25rem",
  },

  li: {
    listStyleType: "none",
    color: "$primary",
    padding: '1rem',

    '&:hover': {
      backgroundColor: '$tertiary'
    }
  },
});

export const InfoBox = styled("div", {
  backgroundColor: "$tertiary",
  borderRadius: 11,
  padding: '1.25rem 2.5rem',

  h2: {
    marginBottom: '2rem',
    fontSize: '2rem',
    color: "$primary"
  },

  p: {
    color: "$secondary"
  }
});
