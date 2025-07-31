import React from 'react';
import {Link} from 'react-router-dom'; // 1. Impor Link
import './LotsoCard.css';
import lotsoImage from './lotso.png';

function LotsoCard() {
  return (
    // Container kartu dihilangkan, kita gunakan <main> sebagai pembungkus utama
    <main className="lotso-fullscreen-layout">
      <div className="title-section">
        <h1 className="title-lotso">HAPPY</h1>
        <h2 className="subtitle">Girlfriend Day</h2>
        <div className="heart-icon top-right-heart">❤️</div>
      </div>

      <div className="character-section">
        <img
          src={lotsoImage}
          alt="Lotso with a heart balloon"
          className="lotso-image"
        />
        <div className="heart-icon bottom-left-heart">❤️</div>
      </div>

      <Link to="/next-page" className="nav-button">
        Klik di sini!
      </Link>
    </main>
  );
}

export default LotsoCard;
