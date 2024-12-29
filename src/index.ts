import server from "./app";
import database from "./database/db";

process.loadEnvFile();
const { PORT } = process.env;

database
  .sync({ alter: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("Base de datos sincronizada correctamente");
      console.log(`Servidor escuchando en el puerto: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error al sincronizar la base de datos");
    throw Error(error.message);
  });