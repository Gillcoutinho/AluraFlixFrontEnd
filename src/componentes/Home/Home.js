import React from "react";
import BannerMain from "../BannerMain/BannerMain";
import Card from "../Card/Card";
import CardBack from "../CardBack/CardBack";
import CardMobi from "../CardMobi/CardMobi";
import "./Home.css";


const Home = () => {
  return (
    <div className="home">
      <BannerMain />
      <div className="cards">
        <h2 className="front">FRONTEND</h2>
        <div className="card-group">
          <Card />
        
        </div>
        <h2 className="back">BACKEND</h2>
        <div className="card-group">
        <CardBack />
        </div>
        <h2 className="mobi">MOBILE</h2>
        <div className="card-group">
        <CardMobi />
        </div>
      </div>
    </div>
  );
};

export default Home;
