import { theme } from "@/styles";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Container, HamburgerMenu, Menu } from "./styles";
import { useState } from "react";
import { Link, animateScroll as scroll, scroller } from "react-scroll";

export function NavBar() {
  const [isSelected, setIsSelected] = useState(false);

  const {
    colors: { pink },
  } = theme;

  const isOpen = isSelected ? "open" : "close";

  function handleCloseMenu() {
    setIsSelected(false);
  }

  return (
    <Container id="nav-bar">
      <HamburgerMenu>
        <button onClick={() => setIsSelected(true)}>
          <HamburgerMenuIcon color={`${pink}`} width={"5rem"} height={"5rem"} />
        </button>
      </HamburgerMenu>

      <Menu isOpen={isOpen}>
        <ul>
          <Link
            to="about"
            smooth={true}
            duration={800}
            offset={-500}
            onClick={() => handleCloseMenu()}
          >
            <li>SOBRE</li>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={800}
            offset={-300}
            onClick={() => handleCloseMenu()}
          >
            <li>PROJETOS</li>
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={800}
            offset={-300}
            onClick={() => handleCloseMenu()}
          >
            <li>HABILIDADES</li>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            onClick={() => handleCloseMenu()}
          >
            <li>CONTATO</li>
          </Link>
        </ul>

        <button onClick={() => setIsSelected(false)}>
          <Cross1Icon width={"2rem"} height={"2rem"} />
        </button>
      </Menu>
    </Container>
  );
}
