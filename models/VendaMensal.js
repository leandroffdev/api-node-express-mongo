import mongoose from "mongoose";

const VendaMensalSchema = new mongoose.Schema({
  produto: { 
    type: String, 
    required: true 
},
  quantidade: { 
    type: Number, 
    required: true 
},
  valor: { 
    type: Number, 
    required: true 
},
  data: { 
    type: Date, 
    default: Date.now 
}
});

const VendaMensal = mongoose.model("VendaMensal", VendaMensalSchema);

export default VendaMensal;