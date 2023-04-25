import { styled } from "@/styles";

export const Container = styled("section", {
  width: "98%",
  // marginTop: "6.5rem",
  marginBottom: "3rem",
  backgroundColor: "$tertiary",
  borderRadius: 11,
  padding: "4.75rem 3.5rem",
  boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.1)",

  h2: {
    fontSize: "1rem",
    color: "$pink",
    fontWeight: 400,
  },

  p: {
    color: "$primary",
    fontWeight: 400,
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },
});

export const InputBox = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",

  label: {
    display: "flex",
    alignItems: "center",

    span: {
      color: "$secondary",
      width: "4rem",
    },

    input: {
      height: "3rem",
    },

    textArea: {
      height: "5rem",

      paddingTop: "1rem",
      fontSize: "0.8rem",
    },

    "input, textarea": {
      flex: 1,
      marginLeft: "2rem",
      paddingLeft: "1rem",

      color: "$secondary",
      borderRadius: 11,
      outline: 0,
      border: "1px solid #131313",
      backgroundColor: "#1B1B1B",

      "&::placeholder": {
        fontSize: "0.8rem",
        fontWeight: 400,
        opacity: 0.5,
      },

      "&:focus": {
        border: "2px solid $pink",
      },
    },
  },
});

export const ErrorMessage = styled("span", {
  fontSize: "0.8rem",
  color: "red",
});

export const Button = styled("button", {
  marginTop: "2rem",

  backgroundColor: "transparent",
  border: "2px solid $pink",
  borderRadius: 11,
  padding: "1rem",
  color: "$primary",

  "&:hover": {
    backgroundColor: "$pink",
    color: "$background",
    cursor: "pointer",
  },
});
