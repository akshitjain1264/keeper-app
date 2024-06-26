import React, { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
// import notes from "../note";
import CreateNote from "./CreateNote";



function App() {

    const [notes, setNotes] = useState([])

    function addNote(newNote){
        setNotes(prevNotes=>{
            return [...prevNotes, newNote]
        })
    }

    function deleteNote(id){
        setNotes((prevNotes)=>{
            return prevNotes.filter((noteItem, index)=>{
                return index !== id;
            })
        })
    }

    return <div>
        <Header />
        <CreateNote onAdd={addNote} />
        {notes.map((note, index) => {
            return <Note 
                id = {index}
                key = {index}
                title = {note.title}
                content = {note.content}
                onDelete={deleteNote}
            />;
        })}
        <Footer />
    </div>
}

export default App;

//FUNCTIONALITY: 
//1. Implement the add note functionality
// - Create a constant that keeps track of the title and content.
// - Pass the new note back to the App.
// - Add new note to an array.
// - Take array and render separate Note componenets for each item.

//2. Implement the delete note functionality
// - Callback from the Note component  to trigger a delete function.
// - Use the filter function to filter out the item that needs deletion
// - Pass a id over to the Note component, pass it back to the App when deleting.

