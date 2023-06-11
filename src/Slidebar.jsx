import React from "react";
import "./Slidebar.css";

const Slidebar = ({ btn, notes, deleatebtn, active, setActive }) => {
  return (
    <div className="wrapper">
      <div class="slide-header">
        <h1>ノート</h1>
        <button onClick={btn}>追加</button>
      </div>
      <div className="slide-notes">
        {notes.map((note) => (
          <div className="slide-note" key={note.id}>
            <div className="slide-note-title">
              <h3>{note.title}</h3>
              <button onClick={() => deleatebtn(note.id)}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>
              {new Date(note.data).toLocaleDateString("ja-jp", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slidebar;
