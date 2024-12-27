import server from "./app";

process.loadEnvFile();
const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
