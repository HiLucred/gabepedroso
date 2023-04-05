import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Intro } from "@/components/Intro";
import { NavBar } from "@/components/NavBar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { gitHub } from "@/lib/axios";
import { Content } from "@/styles/pages/home/styles";
import { GetStaticProps } from "next";

export interface IUser {
  name: string;
  bio: string;
  avatar_url: string;
}

export interface IProjects {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  homepage: string | null;
}

export interface IIssues {
  title: string;
  body: string;
}

interface HomeProps {
  user: IUser;
  projects: IProjects[];
  issues: IIssues[];
}

export default function Home({ user, projects, issues }: HomeProps) {
  return (
    <>
      <NavBar />
      <Content>
        <Intro data={user} />

        <main>
          <About />
          <Projects data={projects} />
          <Skills data={issues} />
          <Contact />
        </main>
      </Content>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const username = "hilucred";

  const user = await gitHub.get(`/users/${username}`);
  const projects = await gitHub.get(`/users/${username}/repos`);
  const issues = await gitHub.get(`repos/${username}/gabepedroso/issues`);

  return {
    props: {
      user: user.data,
      projects: projects.data,
      issues: issues.data,
    },
    revalidate: 60 * 60 * 24 * 7, // 7 Days
  };
};
