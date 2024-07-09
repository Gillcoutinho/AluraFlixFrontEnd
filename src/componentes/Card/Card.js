import React, { useState } from 'react';
import front1 from "../../assets/front1.png";
import front2 from "../../assets/front2.png";
import front3 from "../../assets/front3.png";
import './Card.css';
import EditModal from '../EditModal/EditModal'; 

const Card = () => {
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
                  <img src={index === 0 ? front1 : index === 1 ? front2 : front3} alt="Thumbnail do vídeo" className="youtube-thumbnail" />
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

export default Card;
