import { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState([]);

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleSave = (text) => {
    setList([...list, text]);
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <h1>Lista de Textos</h1>
      <button onClick={handleAddClick}>Agregar</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {showModal && <Modal onSave={handleSave} onCancel={handleCancel} />}
    </div>
  );
}

export default App;
