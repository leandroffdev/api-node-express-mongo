import express from "express";
import vendasRoute from "./vendasRoute.js";
import comentariosRoute from "./comentariosRoute.js";

const router = express.Router();

// Centraliza todas as rotas
router.use("/vendas", vendasRoute);
router.use("/comentarios", comentariosRoute);

export default router;