import { useState } from "react";
import { Container, InfoBox, SkillsBox, SkillsList } from "./styles";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "github-markdown-css";
import { ArrowDownIcon } from "@radix-ui/react-icons";

interface SkillsProps {
  data: {
    title: string;
    body: string;
  }[];
}

export function Skills({ data }: SkillsProps) {
  const [skillCurrent, setSkillCurrent] = useState("React");
  const [skillDescriptionCurrent, setSkillDescriptionCurrent] = useState("");

  function handleSetCurrentSkill(skill: string, skillDescription: string) {
    setSkillCurrent(skill);
    setSkillDescriptionCurrent(skillDescription);
  }

  return (
    <>
      <SkillsBox>
        <span>minhas habilidades</span>
        <i>
          <ArrowDownIcon />
        </i>
      </SkillsBox>

      <Container id="skills">
        <SkillsList>
          <ul>
            {data.reverse().map((item) => {
              return (
                <li
                  key={item.title}
                  onClick={() => {
                    handleSetCurrentSkill(`${item.title}`, `${item.body}`);
                  }}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </SkillsList>

        <InfoBox>
          <h2>{skillCurrent}</h2>
          <ReactMarkdown children={skillDescriptionCurrent} />
        </InfoBox>
      </Container>
    </>
  );
}
