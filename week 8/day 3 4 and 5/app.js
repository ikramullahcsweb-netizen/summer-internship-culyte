import express from "express";
import morgan from "morgan";
import { config } from "./app/config/config.js";
import tasksRoutes from "./app/routes/tasks.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/users", tasksRoutes);

app.listen(config.port, () =>
  console.log(`Server running on http://localhost:${config.port}`)
);