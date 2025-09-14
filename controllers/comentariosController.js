import comentarioModel from "../models/comentarioModel.js"

//GET ALL
export const getComentarios = async (req, res) => {
    try {
        const comentarios = await comentarioModel.find();
        res.status(200).json(comentarios)
    } catch (error) {
        res.status(400).json({error:error})
    }
}

//GET ONE
export const getComentario = async (req, res) => {
    try {
        const comentario = await comentarioModel.findById(req.params.id)
        res.status(200).json(comentario)
    } catch (error) {
        res.status(400).json({error:error})
    }
}

//CREATE
export const createComentario = async (req, res) => {
    try {
        const newComentario = await comentarioModel.create(req.body)
        res.status(201).json(newComentario)
    } catch (error) {
        res.status(400).json({error:error})
    }
}

//UPDATE
export const updateComentario = async (req, res) => {
    try {
        const comentarioAtualizado = await comentarioModel.findByIdAndUptdate(req.params.id, req.body, { new: true })
        res.status(200).json(comentarioAtualizado)
    } catch (error) {
        res.status(400).json({error:error})
    }
}
//DELETE
export const deleteComentario = async (req, res) => {
    try {
        const comentarioDeletado = await comentarioModel.findByIdAndDelete(req.params.id)
        res.status(200).json(comentarioDeletado)
    } catch (error) {
        res.status(400).json({error:error})
    }
}
