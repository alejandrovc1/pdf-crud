import { Schema, model } from "mongoose";

const pdfSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true
  }
});

export default model('Pdf', pdfSchema);