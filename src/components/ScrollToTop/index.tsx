import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Container } from "./styles";

interface ScrollToTopProps {
  scrollToTop: () => void;
}

export function ScrollToTop({ scrollToTop }: ScrollToTopProps) {
  return (
    <Container onClick={scrollToTop}>
      <ArrowUpIcon />
    </Container>
  );
}
