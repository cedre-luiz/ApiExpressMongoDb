import mongoose from "mongoose"

mongoose.connect("mongodb+srv://aluracesar:12345@alura.s5g39n4.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;