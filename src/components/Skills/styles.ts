import { styled } from "@/styles";
import * as Tabs from "@radix-ui/react-tabs";

export const Container = styled("section", {
  marginTop: "5rem",
  marginBottom: '5rem',

  "@media(max-Width=822px)": {
    span: {
      justifyContent: "center",
    },
  },

  span: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    marginBottom: "1rem",

    h3: {
      color: "$link",
      fontSize: "0.875rem",
      fontWeight: 400,
    },
  },
});

export const TabsRoot = styled(Tabs.Root, {
  display: "flex",

  gap: "2rem",

  "@media(max-Width=822px)": {
    flexWrap: "wrap",
  },
});

export const TabsList = styled(Tabs.List, {
  display: "flex",
  flexDirection: "column",
  borderLeft: "2px solid $pink",

  "@media(max-Width=822px)": {
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    borderTop: "2px solid $pink",
    borderBottom: "2px solid $pink",
    borderLeft: "none",
  },
});

export const TabsTrigger = styled(Tabs.Trigger, {
  background: "transparent",
  color: "$primary",
  border: "none",
  padding: "1rem",
  width: "8rem",

  '&[data-state="active"]': {
    backgroundColor: "$tertiary",
    color: "$pink",
  },
});

export const TabsContent = styled(Tabs.TabsContent, {
  backgroundColor: "$tertiary",
  borderRadius: 11,
  padding: "1.25rem 2.5rem",
  height: "100%",
  color: "$secondary",
  fontSize: "0.875rem",
  boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.1)",

  h2: {
    marginBottom: "2rem",
    color: "$primary",
  },
});
