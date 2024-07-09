import React, { useState } from 'react';
import back1 from "../../assets/back1.png";
import back2 from "../../assets/back2.png";
import back3 from "../../assets/back3.png";
import './CardBack.css';
import EditModal from '../EditModal/EditModal'; // Importe o EditModal

const CardBack = () => {
  const [cardsVisible, setCardsVisible] = useState([true, true, true]);
  const [editIndex, setEditIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (index) => {
    const newVisibility = [...cardsVisible];
    newVisibility[index] = false;
    setCardsVisible(newVisibility);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditIndex(null);
  };

  return (
    <div className="card-container">
      {cardsVisible.map((isVisible, index) => (
        isVisible && (
          <div className="card-item" key={index}>
            <div className="card-content">
              <a href="https://youtu.be/GEljZeWTVec?si=0oaewotZSwKTbQ10" target="_blank" rel="noopener noreferrer">
                <div className="thumbnail-container">
                  <img src={index === 0 ? back1 : index === 1 ? back2 : back3} alt="Thumbnail do vídeo" className="youtube-thumbnail" />
                </div>
              </a>
            </div>
            <div className="card-actions">
              <button className="btn-delete" onClick={() => handleDelete(index)}>🗑️Deletar</button>
              <button className="btn-edit" onClick={() => handleEdit(index)}>✍🏽Editar</button>
            </div>
          </div>
        )
      ))}

      <EditModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default CardBack;
