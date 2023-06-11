import "./App.css";
import { useState } from "react";
import Slidebar from "./Slidebar";
import Main from "./Main";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [active, setActive] = useState(false);

  const handleclick = () => {
    console.log("追加");
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "内容",
      data: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const deleatebtn = (id) => {
    const filetrnote = notes.filter((note) => note.id !== id);
    setNotes(filetrnote);
  };
  return (
    <div className="App">
      <Slidebar
        btn={handleclick}
        notes={notes}
        deleatebtn={deleatebtn}
        active={active}
        setActive={setActive}
      />
      <Main />
    </div>
  );
}

export default App;
