import React from "react";
import "../style.css";
import { useState } from "react";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick(event){
    if(note.title===""){
      alert("Please Enter Title of Note.");
      event.preventDefault();
      return false;
    }
    if(note.content===""){
      alert("Please Enter content of Note.");
      event.preventDefault();
      return false;
    }
    props.onAdd(note);
    setNote({
      title: "",
    content: "",
    })
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Add Title"
          value={note.title}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="content"
          placeholder="Add Content Here"
          value={note.content}
          onChange={handleChange}
        ></textarea>
        <button id="add" onClick={handleClick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
