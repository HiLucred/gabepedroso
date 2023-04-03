import { IUser } from "@/pages";
import Image from "next/image";
import { Container, Links } from "./styles";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export function Intro({ name, bio, avatar_url }: IUser) {
  return (
    <Container>
      <Image src={avatar_url} alt={""} width={156} height={156} />
      <h1>{name}</h1>
      <p>{bio}</p>

      <Links>
        <Link target="_blank" href={"https://www.instagram.com/luscanoig/"}>
          <InstagramLogoIcon />
        </Link>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/gabriel-pedroso-/"}
        >
          <LinkedInLogoIcon />
        </Link>
        <Link target="_blank" href={"https://github.com/HiLucred"}>
          <GitHubLogoIcon />
        </Link>
      </Links>
    </Container>
  );
}
