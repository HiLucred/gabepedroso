import Image from "next/image";
import { Avatar, Container, Links } from "./styles";
import Link from "next/link";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

interface IntroProps {
  data: {
    name: string;
    bio: string;
    avatar_url: string;
  };
}

export function Intro({ data }: IntroProps) {
  return (
    <Container>
      <Avatar src={data.avatar_url} alt={""} width={156} height={156} />
      {/* <Image src={data.avatar_url} alt={""} width={156} height={156} /> */}
      <h1>{data.name}</h1>
      <p>{data.bio}</p>

      <Links>
        <Link
          target="_blank"
          href={"https://www.instagram.com/luscanoig/"}
          title="Instagram"
        >
          <InstagramLogoIcon />
        </Link>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/gabriel-pedroso-/"}
          title="LinkedIn"
        >
          <LinkedInLogoIcon />
        </Link>
        <Link
          target="_blank"
          href={"https://github.com/HiLucred"}
          title="GitHub"
        >
          <GitHubLogoIcon />
        </Link>
      </Links>
    </Container>
  );
}
