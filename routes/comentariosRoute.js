import express from "express";
import {
  getComentarios,
  getComentario,
  createComentario,
  updateComentario,
  deleteComentario,
} from "../controllers/comentariosController.js";

const router = express.Router();

router.get("/", getComentarios);
router.get("/:id", getComentario);
router.post("/", createComentario);
router.put("/:id", updateComentario);
router.delete("/:id", deleteComentario);

export default router;