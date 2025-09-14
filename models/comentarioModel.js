import mongoose from "mongoose"

//Model Schema
const comentarioSchema = mongoose.Schema({
    comentario: {
        type: String,
        required: true
    },
    data: { 
        type: Date, 
        default: Date.now 
    }
})

const comentarioModel = mongoose.model("comentarioModel", comentarioSchema);
export default comentarioModel;