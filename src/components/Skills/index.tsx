import {
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "./styles";
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
  return (
    <TabsRoot defaultValue="tab1" orientation="horizontal">
      <TabsList aria-label="tabs example">
        {data.reverse().map((item) => {
          return (
            <TabsTrigger key={item.title} value={`${item.title}`}>
              {item.title}
            </TabsTrigger>
          );
        })}
      </TabsList>

      {data.map((item) => {
        return (
          <TabsContent key={item.title} value={`${item.title}`}>
            <h2>{item.title}</h2>
            <ReactMarkdown>{item.body}</ReactMarkdown>
          </TabsContent>
        );
      })}
    </TabsRoot>
    // <>
    //   <SkillsBox>
    //     <span>minhas habilidades</span>
    //     <i>
    //       <ArrowDownIcon />
    //     </i>
    //   </SkillsBox>

    //   <Container id="skills">
    //     <SkillsList>
    //       <ul>
    //         {data.reverse().map((item) => {
    //           return (
    //             <li
    //               key={item.title}
    //               onClick={() => {
    //                 handleSetCurrentSkill(`${item.title}`, `${item.body}`);
    //               }}
    //             >
    //               {item.title}
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </SkillsList>

    //     <InfoBox>
    //       <h2>{skillCurrent}</h2>
    //       <ReactMarkdown>{skillDescriptionCurrent}</ReactMarkdown>
    //     </InfoBox>
    //   </Container>
    // </>
  );
}
