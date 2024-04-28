import React from "react";
import "../style.css";

const year = new Date().getFullYear();

function footer(){
    return <div>
        <footer>
            <p>Copyright &copy; {year}</p>
        </footer>
    </div>
}

export default footer;