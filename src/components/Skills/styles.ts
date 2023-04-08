import { styled } from "@/styles";
import * as Tabs from "@radix-ui/react-tabs";

export const TabsRoot = styled(Tabs.Root, {
  display: "flex",
  gap: '2rem',
  marginTop: "5rem",
});

export const TabsList = styled(Tabs.List, {
  display: "flex",
  flexDirection: "column",
  borderLeft: "2px solid $pink",
});

export const TabsTrigger = styled(Tabs.Trigger, {
  background: "transparent",
  color: "$primary",
  border: "none",
  padding: "1rem",

  '&[data-state="active"]': {
    backgroundColor: "$tertiary",
  },
});

export const TabsContent = styled(Tabs.TabsContent, {
  backgroundColor: "$tertiary",
  borderRadius: 11,
  padding: "1.25rem 2.5rem",
  height: "100%",
  color: "$secondary",

  h2: {
    marginBottom: "2rem",
    color: "$primary",
  },
});
