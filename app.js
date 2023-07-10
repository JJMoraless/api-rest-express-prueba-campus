import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./src/routes/index.js";

const app = express();
app.use(cors());
app.use("/api",router)


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
