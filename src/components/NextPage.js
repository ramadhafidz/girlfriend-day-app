import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NextPage.css';

function NextPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div className="next-page-layout">
      <div className={`envelope-container ${isOpen ? 'open' : ''}`} onClick={handleClick}>
        <div className="envelope-flap"></div>
        <div className="envelope-body"></div>
        <div className="letter">
          {isOpen ? (
            <div className="letter-content">
              <h2>Untuk Aghnia Akuu,</h2>
              <p>Happy Girlfriend Day sayaaang! Semoga hadiah kecil dari aku ini menambah semangat mood kamuuu. Aku beruntung banget dehh punya kamu di hidup akuuu. Makasih ya ayang untuk semua cinta dan kebahagiaan yang udah kamu berikan.</p>
              <p className="signature">Dengan cinta,</p>
              <p className="signature">Picil</p>
            </div>
          ) : (
            <h3 className="click-me">Klik Aku!</h3>
          )}
        </div>
      </div>

      <div className="button-group">
        {isOpen && (
          // 3. Ubah tujuan Link ke "/ticket-page"
          <Link to="/ticket-page" className="next-page-button">
            Lanjut
          </Link>
        )}
      </div>
    </div>
  );
}

export default NextPage;