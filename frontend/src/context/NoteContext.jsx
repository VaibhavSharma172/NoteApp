import {createContext, useState } from "react";
import BACKEND_URL from "../components/url.js";

export const NoteContext = createContext();

export const NoteProvider = ({children})=> {
const {notes, setNotes} = useState([]);
const {loading, setLoading} = useState(true);

//api ?
const getNotes = async()=> {
    setLoading(true);
    try{
        const response = await BACKEND_URL.get("/getNotes");
        setNotes(response.data);
    }catch(error) {
        console.error("error fetching notes", error);
    } finally {
        setLoading(false);
    }
}

const createNote = async(note)=> {}

const updateNote = async(id, note) => {}

const deleteNote = async(id)=> {}

return(
    <NoteContext.Provider value={{notes, loading, createNote, updateNote, deleteNote}}>
 {Children}   
    </NoteContext.Provider>
)
}
