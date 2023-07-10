import { Router } from "express";
import { readdirSync } from "fs";
import { _dirname } from "../utils/vars.js";
const PATH_ROUTERS = _dirname(import.meta.url);
const router = Router();

/**
 * este archivo tiene logica de un cargador de rutas automatico
 * si se crea un archivo sin exportar un router
 *  genera error en toda la app uwu
 */


/**
 * recive un string
 * divide el string por . y devuelve el primer elemento
 */
const filesNames = readdirSync(PATH_ROUTERS);

const cleanFile = (fileName) => {
  const file = fileName.split(".").shift();
  return file;
};

filesNames.forEach(async (fileName) => {
  const cleanName = cleanFile(fileName);
  if (cleanName === "index") return;
  const moduleRouter = await import(`./${fileName}`);
  router.use(`/${cleanName}`, moduleRouter.router);
  console.log(cleanName);
});

export { router };