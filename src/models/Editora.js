import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    volume: {type: Number}
  }
);

const editoras= mongoose.model('editoras', editoraSchema);

export default editoras;