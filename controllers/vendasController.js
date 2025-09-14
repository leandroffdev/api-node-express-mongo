import VendaMensal from "../models/VendaMensal.js";

// GET ALL
export const getVendas = async (req, res) => {
  try {
    const vendas = await VendaMensal.find();
    res.status(200).json(vendas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET BY ID
export const getVendaById = async (req, res) => {
  try {
    const venda = await VendaMensal.findById(req.params.id);
    res.status(200).json(venda);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE
export const createVenda = async (req, res) => {
  try {
    const novaVenda = await VendaMensal.create(req.body);
    res.status(201).json(novaVenda);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE
export const updateVenda = async (req, res) => {
  try {
    const vendaAtualizada = await VendaMensal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(vendaAtualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE PATCH
export const updateVendaPatch = async (req, res) => {
  try {
    const vendaAtualizada = await VendaMensal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(vendaAtualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteVenda = async (req, res) => {
  try {
    const vendaDeletada = await VendaMensal.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensagem: "Venda deletada", vendaDeletada });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
