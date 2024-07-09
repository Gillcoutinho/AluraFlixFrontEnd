import React from 'react';
import './EditModal.css';

const EditModal = ({ isOpen, onClose }) => {
  const modalClassName = isOpen ? 'modal open' : 'modal';

  return (
    <div className={modalClassName}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>x</button>
        <h2 className='edit'>EDITAR CARD</h2>
        <form>
          <div className="form-group">
            <label>Título</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Categoria</label>
            <select>
              <option>FrontEnd</option>
              <option>BackEnd</option>
              <option>Mobile</option>
            </select>
          </div>
          <div className="form-group">
            <label>Imagem</label>
            <input type="file" accept="image/*" />
          </div>
          <div className="form-group">
            <label>Vídeo</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Descrição</label>
            <textarea></textarea>
          </div>
          <div className="form-actions">
            <button type="submit">SALVAR</button>
            <button type="button">LIMPAR</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
