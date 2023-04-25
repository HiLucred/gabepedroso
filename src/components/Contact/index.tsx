import { useForm } from "react-hook-form";
import { Button, Container, ErrorMessage, InputBox } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SectionTitle } from "../SectionTitle";

const contactFormSchema = z.object({
  name: z.string().min(3, { message: "Insira um nome valido." }),
  email: z.string().min(3, { message: "Insira um e-mail valido." }),
  message: z.string().min(3, { message: "Insira uma mensagem valida." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function handleSubmitContactForm(data: ContactFormData) {
    try {
      await axios.post("/api/contact-form", {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      reset();
      alert("🔔 E-mail enviado com sucesso! 🔔");
      console.log("🔔 E-mail enviado com sucesso! 🔔");
    } catch (err) {
      alert("🔔 Falha ao enviar o e-mail. Tente novamente. 🔔");
      console.log("🔔 Falha ao enviar o e-mail. Tente novamente. 🔔");
    }
  }

  return (
    <>
      <SectionTitle>CONTATO</SectionTitle>
      <Container id="contact">
        <h2>Vamos conversar?</h2>
        <p>
          Desenvolvedor web à disposição! Entre em contato para discutir seu
          projeto ou tirar suas dúvidas. Aguardo sua mensagem!
        </p>

        <InputBox onSubmit={handleSubmit(handleSubmitContactForm)}>
          <label>
            <span>Nome</span>
            <input
              type="text"
              placeholder="digite seu nome"
              {...register("name")}
            />
          </label>
          <ErrorMessage>{errors.name && errors.name.message}</ErrorMessage>

          <label>
            <span>E-mail</span>
            <input
              type="email"
              placeholder="digite seu e-mail"
              {...register("email")}
            />
          </label>
          <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>

          <label>
            <span>Mensagem</span>
            <textarea
              placeholder="digite sua mensagem"
              {...register("message")}
            ></textarea>
          </label>
          <ErrorMessage>
            {errors.message && errors.message.message}
          </ErrorMessage>

          <Button type="submit" disabled={isSubmitting}>
            enviar
          </Button>
        </InputBox>
      </Container>
    </>
  );
}
