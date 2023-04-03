import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).end();
  }

  const { name, email, message } = ContactFormSchema.parse(req.body);

  if (!name || !email || !message) {
    return res.status(400).end();
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const messageFromUser = {
    from: email,
    to: process.env.EMAIL,
    subject: `Nome: ${name} || Email de contato: ${email}`,
    text: message,
  };

  try {
    await transporter.sendMail(messageFromUser);
    res.status(200).send("Mensagem enviada com sucesso!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Ocorreu um erro ao enviar a mensagem.");
  }
}
