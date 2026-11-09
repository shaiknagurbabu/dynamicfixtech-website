import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { fileURLToPath } from "node:url";
import dashboardRoutes from "./routes/dashboardRoutes.js";

config({ path: fileURLToPath(new URL("../.env", import.meta.url)) });

const app = express();
const port = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", dashboardRoutes);

app.listen(port, () => {
  console.log(`DynamicFix API listening on http://localhost:${port}`);
});
