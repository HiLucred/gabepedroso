import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import {
  ArrowRightIcon,
  GitHubLogoIcon,
  Link2Icon,
} from "@radix-ui/react-icons";
import {
  Container,
  Info,
  Links,
  Project,
  SwipeBox,
  TechnologysBox,
} from "./styles";

interface ProjectsProps {
  data: {
    name: string;
    description: string;
    html_url: string;
    topics: string[];
    homepage: string | null;
  }[];
}

export function Projects({ data }: ProjectsProps) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 10,
    },
  });

  const projects = data.filter((item) => {
    return item.description !== null;
  });

  return (
    <>
      <SwipeBox>
        <span>deslize para o lado</span>
        <i>
          <ArrowRightIcon />
        </i>
      </SwipeBox>

      <Container ref={ref} className="keen-slider">
        {projects.map((item) => {
          if (item.topics.length === 0) {
            return;
          }

          return (
            <Project className="keen-slider__slide" key={item.name}>
              <img
                src={`https://raw.githubusercontent.com/hilucred/${item.name}/main/public/cover.jpg`}
                alt=""
              />

              <Info>
                <Links>
                  <Link href={item.html_url} prefetch={false}>
                    <GitHubLogoIcon />
                  </Link>
                  
                  <Link
                    href={item.homepage !== null ? item.homepage : ""}
                    prefetch={false}
                  >
                    <Link2Icon />
                  </Link>
                </Links>

                <h2>{item.name}</h2>
                <p>
                  {item.description.length >= 90
                    ? `${item.description.substring(0, 90)}...`
                    : item.description}
                </p>
              </Info>

              <TechnologysBox>
                {item.topics.map((topic) => {
                  return <span key={topic}>{topic}</span>;
                })}
              </TechnologysBox>
            </Project>
          );
        })}
      </Container>
    </>
  );
}
