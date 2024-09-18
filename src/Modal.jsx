import { useState } from "react";
import "./Modal.css";

function Modal({ onSave, onCancel }) {
  const [inputText, setInputText] = useState("");

  const handleSaveClick = () => {
    if (inputText.trim() !== "") {
      onSave(inputText);
      setInputText("");
    }
  };

  const handleCancelClick = () => {
    onCancel();
    setInputText("");
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Agregar Texto</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          autoFocus
        />
        <div className="modal-buttons">
          <button onClick={handleSaveClick}>Guardar</button>
          <button onClick={handleCancelClick}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
