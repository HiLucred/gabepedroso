import { useState } from "react";
import { Container, InfoBox, SkillsList } from "./styles";

interface SkillsProps {
  data: {
    title: string;
    body: string;
  }[];
}

export function Skills({ data }: SkillsProps) {
  const [skillCurrent, setSkillCurrent] = useState("React");

  return (
    <Container>
      <SkillsList>
        <ul>
          {data.map((item) => {
            return (
              <li onClick={() => setSkillCurrent(`${item.title}`)}>
                {item.title}
              </li>
            );
          })}
          {/* <li onClick={() => setSkillCurrent("Next")}>Next</li>
          <li onClick={() => setSkillCurrent("Typescript")}>Typescript</li>
          <li onClick={() => setSkillCurrent("Stitches")}>Stitches</li>
          <li onClick={() => setSkillCurrent("Design System")}>
            Design System
          </li>
          <li onClick={() => setSkillCurrent("StoryBook")}>StoryBook</li>
          <li onClick={() => setSkillCurrent("Prisma")}>Prisma</li>
          <li onClick={() => setSkillCurrent("Git")}>Git</li>
          <li onClick={() => setSkillCurrent("HTML + CSS")}>HTML + CSS</li>
          <li onClick={() => setSkillCurrent("Figma")}>Figma</li> */}
        </ul>
      </SkillsList>

      <InfoBox>
        <h2>{skillCurrent}</h2>
        <p>
          I'm a UI developer based in Barcelona. I'm interested in dev rel,
          design systems, web3, user/dev experience and under engineering.
          <br></br>
          <br></br>
          I'm currently working at Raycast as a DX Engineer to grow its
          developer community.
          <br></br>
          <br></br>
          Previously, I worked at Rainbow, where I focused on RainbowKit. Before
          that, I co-created Radix, designed the Stitches API and led their
          developer community.
        </p>
      </InfoBox>
    </Container>
  );
}
