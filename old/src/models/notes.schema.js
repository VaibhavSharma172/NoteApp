import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
  // uid: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
});

const Note = mongoose.model("Note", noteSchema);  
export default Note;
