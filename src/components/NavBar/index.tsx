import { theme } from "@/styles";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Container, HamburgerMenu, Menu } from "./styles";
import { useState } from "react";

export function NavBar() {
  const [isSelected, setIsSelected] = useState(false);

  const {
    colors: { pink },
  } = theme;

  const isOpen = isSelected ? "open" : "close";
  console.log(isOpen);

  return (
    <Container>
      <HamburgerMenu>
        <button onClick={() => setIsSelected(true)}>
          <HamburgerMenuIcon color={`${pink}`} width={"5rem"} height={"5rem"} />
        </button>
      </HamburgerMenu>
      
      <Menu isOpen={isOpen}>
        <ul>
          <li>SOBRE</li>
          <li>PROJETOS</li>
          <li>HABILIDADES</li>
          <li>CONTATO</li>
        </ul>

        <button onClick={() => setIsSelected(false)}>
          <Cross1Icon width={"2rem"} height={"2rem"} />
        </button>
      </Menu>
    </Container>
  );
}
