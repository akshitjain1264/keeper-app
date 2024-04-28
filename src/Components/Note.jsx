import React from "react";
import "../style.css";

function Note(props)
{
    function handleClick(){
        props.onDelete(props.id);
    }
    return <div className="box">
            <h1 className="note-content">{props.title}</h1>
            <p className="note-content">{props.content}</p>
            <button id="delete" onClick={handleClick}>delete</button>
    </div>
}

export default Note;