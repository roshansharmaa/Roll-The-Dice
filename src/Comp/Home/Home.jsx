import React from "react";
import { Link } from "react-router-dom";  
import Dies from "../imgs/dices.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="main">
      <div className="left">
        <img src={Dies} alt="Dices" />
      </div>
      <div className="right">
        <h1>Roll The Dice</h1>
        <Link className="link" to="/play">
          <button>Play Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
