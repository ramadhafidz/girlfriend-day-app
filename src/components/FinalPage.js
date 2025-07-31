import React from 'react';
import { Link } from 'react-router-dom';
import './FinalPage.css';

function FinalPage() {
  return (
    <div className="final-page-layout">
      <div className="final-content">
        <span className="final-heart">❤️</span>
        <h1>I Love You!</h1>
        <p>Sekali lagi.. Happy Girlfriend Day Sayaaang!</p>
        <Link to="/countdown" className="home-button">
          Satu Kejutan Terakhir...
        </Link>
      </div>
    </div>
  );
}

export default FinalPage;