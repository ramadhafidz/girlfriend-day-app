import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LotsoCard from './components/LotsoCard';
import NextPage from './components/NextPage';
import TicketPage from './components/TicketPage';
import FinalPage from './components/FinalPage';
import CountdownPage from './components/CountdownPage'; // 1. Impor halaman countdown

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LotsoCard />} />
        <Route path="/next-page" element={<NextPage />} />
        <Route path="/ticket-page" element={<TicketPage />} />
        <Route path="/final-page" element={<FinalPage />} />
        <Route path="/countdown" element={<CountdownPage />} /> {/* 2. Tambahkan rute baru */}
      </Routes>
    </div>
  );
}

export default App;