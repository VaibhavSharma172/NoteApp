import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
  { 
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "userVerification",
      required: true
    },
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Note = mongoose.model("newNote", noteSchema);
export default Note;
