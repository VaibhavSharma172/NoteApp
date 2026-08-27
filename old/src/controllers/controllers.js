import Note from "../models/notes.schema.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    if (!notes) {
      res.status(401).json({ message: "No data" });
    }
    res.status(200).json({ message: "data fetched successfully", notes });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id });
    console.log("note", note);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note fetched successfully", note });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addNote = async (req, res) => {
  try {
    const { title, desc } = req.body;
    const newNote = await Note.create({ title, desc });
    res.status(201).json({ message: "Note created successfully", newNote });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const patchNote = async (req, res) => {
  try {
    const updatedNote = await Note.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findOneAndDelete({ _id: req.params.id });
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Note deleted successfully" });
  } catch {
    res.status(500).json({ error: err.message });
  }
};
