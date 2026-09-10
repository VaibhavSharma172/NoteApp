import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Note = mongoose.model("newNote", noteSchema);
export default Note;
