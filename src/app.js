import express from "express";

import userRoutes from "./routes/userRoutes.js"
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
});

app.use(errorHandler)

export default app;