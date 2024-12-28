import nodemailer from "nodemailer";

process.loadEnvFile();
const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASSWORD, SERVER_URL, PORT } =
  process.env as {
    MAIL_HOST: string;
    MAIL_PORT: string;
    MAIL_USER: string;
    MAIL_PASSWORD: string;
    SERVER_URL: string;
    PORT: string;
  };

const transport = nodemailer.createTransport({
  host: MAIL_HOST,
  port: Number(MAIL_PORT),
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  },
});

export const enviarEmail = async (
  email: string,
  name: string,
  token: string
) => {
  await transport.sendMail({
    from: "BienesRaices",
    to: email,
    subject: "Confirma tu cuenta en BienesRaices",

    html: `
      <p>Hola ${name}</p>
      <p>haz click en el siguiente enlace para confirmar tu cuenta:</p>
      <a href="${SERVER_URL}:${PORT}/auth/token/${token}">Confirmar cuenta</a>
    `,
  });
};

// CAMBIAR LA URL DEL BACKEND POR LA URL DEL FRONTEND