import React from 'react';
import './NovoVideo.css';

const NovoVideo = () => {
  return (
    <div className="novo-video">
      <h1>NOVO VIDEO</h1>
      <p>Complete o formulário para criar um novo card de vídeo.</p>
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
          <label>Link da Imagem</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Link do Vídeo</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Descrição</label>
          <textarea></textarea>
        </div>
        <button type="submit">Salvar</button>
        <button type="submit">Limpar</button>
      </form>
    </div>
  );
}

export default NovoVideo;
