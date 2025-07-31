import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TicketPage.css';

function TicketPage() {
  const [tornTickets, setTornTickets] = useState({});

  const handleTicketClick = (index) => {
    setTornTickets(prevState => ({
      ...prevState,
      [index]: true, // Hanya membuat sobek, tidak bisa kembali
    }));
  };

  const ticketsData = [
    { logo: '❤️', text: 'Kupon Explore', content: 'Main ski salju bareng aku' },
    { logo: '🎬', text: 'Kupon Nonton', content: 'Nonton bioskop bareng aku' },
    { logo: '🍦', text: 'Kupon Jajan', content: 'Jajan Es Krim/apapun sepuasnya' },
  ];

  return (
    <div className="ticket-page-layout">
      <h1 className="ticket-page-title">Beberapa Tiket Untukmu!</h1>
      <p className="ticket-page-description">Klik tiket!</p>
      <div className="tickets-container">
        {ticketsData.map((ticket, index) => (
          <div
            key={index}
            className={`ticket ${tornTickets[index] ? 'torn' : ''}`}
            onClick={() => handleTicketClick(index)}
          >
            <div className="ticket-stub">
              <div className="stub-logo">{ticket.logo}</div>
              <div className="stub-text">{ticket.text}</div>
            </div>
            <div className="ticket-main">
              <div className="main-content">{ticket.content}</div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/final-page" className="claim-button">
        Lanjutt!
      </Link>
    </div>
  );
}

export default TicketPage;