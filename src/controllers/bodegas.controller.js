import { bodega } from "../models/bodega.model.js";

export const getBodegas = async (req, res) => {
  const data = await bodega.getBodegas();
  res.send(data);
};

export const saveBodega = async ({ body }, res) => {
  try {
    const data = await bodega.saveBodega({ body });
    res.send(data);
  } catch (e){
    res.status(404).json(e.message);
  }
};
