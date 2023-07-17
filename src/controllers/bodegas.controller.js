import { bodega } from "../models/bodega.model.js";

export const getBodegas = async (req, res) => {
  const data = await bodega.getBodegas();
  res.json(data);
};

export const saveBodega = async ({ body }, res) => {
  try {
    const data = await bodega.saveBodega({ body });
    res.json(data)
  } catch (e) {
    res.status(404).json(e.message);
  }
};
