
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { bodegasDTO } from "../../DTOController/bodegas.js";

export const validateBodega = (req, res, next) => {
  try {
    const data = plainToClass(bodegasDTO, req.body, { excludeExtraneousValues: true});
    req.body = data;
    console.log(data);
    next();
  } catch (error) {
    res.status(error.status).send({message: "error midleware"});
  }
};
