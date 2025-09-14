import express from "express";
import {
  getVendas,
  getVendaById,
  createVenda,
  updateVenda,
  updateVendaPatch,
  deleteVenda
} from "../controllers/vendasController.js";
import VendasMiddleware from "../middlewares/VendasMiddleware.js";

const router = express.Router();

router.get("/", VendasMiddleware, getVendas);
router.get("/:id", VendasMiddleware, getVendaById);
router.post("/", VendasMiddleware, createVenda);
router.put("/:id", updateVenda);
router.patch("/:id", updateVendaPatch);
router.delete("/:id", deleteVenda);

export default router;
