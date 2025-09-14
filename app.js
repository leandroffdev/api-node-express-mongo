import express from "express";
import cors from "cors";
import connectDB from "./database/database.js";
import routes from "./routes/routes.js"

const app = express();
// habilita CORS para qualquer origem (ou configura permitido)
app.use(cors());
// ou para permitir apenas o frontend
// app.use(cors({ origin: "http://localhost:5173" }));

// Middlewares globais
app.use(express.json());

// Conexão com o DB
connectDB();

// Rotas
app.use("/api", routes);

export default app;
