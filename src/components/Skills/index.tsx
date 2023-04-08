import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { theme } from "@/styles";
import {
  Container,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "./styles";

interface SkillsProps {
  data: {
    title: string;
    body: string;
  }[];
}

export function Skills({ data }: SkillsProps) {
  const { colors } = theme;

  return (
    <Container id="skills">
      <span>
        <h3>minhas habilidades</h3> <ArrowDownIcon color={`${colors.pink}`} />
      </span>

      <TabsRoot defaultValue="React" orientation="vertical">
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
    </Container>
  );
}
