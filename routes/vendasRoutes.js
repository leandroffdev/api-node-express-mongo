import express from "express";
import {
  getVendas,
  getVendaById,
  createVenda,
  updateVenda,
  deleteVenda
} from "../controllers/vendasController.js";
import VendasMiddleware from "../middlewares/VendasMiddleware.js";

const router = express.Router();

router.get("/", VendasMiddleware, getVendas);
router.get("/:id", VendasMiddleware, getVendaById);
router.post("/", createVenda);
router.put("/:id", updateVenda);
router.delete("/:id", deleteVenda);

export default router;
