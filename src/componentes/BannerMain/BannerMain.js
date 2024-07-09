import React from 'react';
import './BannerMain.css';

const BannerMain = () => {
  return (
    <div className="banner-main">
      <div className="card">
        <div className="wrapper-text">
          <div className="titulo-categoria">FRONT END</div>
          <div className="titulo">SEO com React</div>
          <p className="texto">
            Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerMain;
