import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Intro } from "@/components/Intro";
import { NavBar } from "@/components/NavBar";
import { Projects } from "@/components/Projects";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Skills } from "@/components/Skills";
import { gitHub } from "@/lib/axios";
import { Content } from "@/styles/pages/home/styles";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Head from "next/head";

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
  function handleScrollToTop() {
    scroll.scrollToTop();
  }

  useEffect(() => {
    handleScrollToTop();
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextSeo
        title="Desenvolvedor Front-end | Gabriel Pedroso"
        description="Desenvolvedor front-end apaixonado por criar interfaces incríveis e interativas. "
      />

      <NavBar />
      <Content>
        <Intro data={user} />

        <main>
          <About />
          <Projects data={projects} />
          <Skills data={issues} />
          <Contact />
        </main>

        <ScrollToTop scrollToTop={handleScrollToTop} />
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
