import nodemailer from "nodemailer";

process.loadEnvFile();
const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASSWORD, CLIENT_URL, PORT } =
  process.env as {
    MAIL_HOST: string;
    MAIL_PORT: string;
    MAIL_USER: string;
    MAIL_PASSWORD: string;
    CLIENT_URL: string;
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
      <p>Hola ${name}</p> <br> </br>
      <p>haz click en el siguiente enlace para confirmar tu cuenta:</p> <br> </br>
      <a href="${CLIENT_URL}/confirmacion/${token}">Confirmar cuenta</a>
    `,
  });
};

export const enviarEmailRecuperarContraseña = async (
  email: string,
  token: string
) => {
  await transport.sendMail({
    from: "BienesRaices",
    to: email,
    subject: "Recuperar contraseña en BienesRaices",

    html: `
      <p>haz click en el siguiente enlace para recuperar tu contraseña:</p> <br> </br>
      <a href="${CLIENT_URL}/cambiar_password/${token}">Recuperar contraseña</a>
    `,
  });
};
