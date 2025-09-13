import express from "express";
import connectDB from "./database/database.js";
import vendasRoutes from "./routes/vendasRoutes.js";

const app = express();

// Middlewares globais
app.use(express.json());

// Conexão com o DB
connectDB();

// Rotas
app.use("/vendas", vendasRoutes);

export default app;
