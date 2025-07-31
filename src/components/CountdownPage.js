import React, { useState, useEffect, useCallback } from 'react'; // 1. Impor useCallback
import { Link } from 'react-router-dom';
import './CountdownPage.css';

const targetDate = new Date('2025-08-03T00:00:00'); // Jangan lupa ganti tanggal ini jika perlu

function CountdownPage() {
  // --- BAGIAN PENTING UNTUK DIUBAH ---
  // 1. Ganti dengan nomor WhatsApp tujuanmu.
  // Gunakan format internasional tanpa tanda '+' atau spasi. Contoh: 6281234567890
  const whatsAppNumber = '6283180215779'; 

  // 2. Tulis template pesan yang kamu inginkan.
  const templateMessage = 'Haiii ayaaang! jangan lupa aku dah claim tiketnya loh yaa!';
  // --- SELESAI BAGIAN PENTING ---

  const encodedMessage = encodeURIComponent(templateMessage);
  const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;

  const calculateTimeLeft = useCallback(() => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { hari: 0, jam: 0, menit: 0, detik: 0 };
    }
    return timeLeft;
    // TAMBAHKAN 'targetDate' DI SINI
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // 3. Tambahkan calculateTimeLeft sebagai dependency
  }, [calculateTimeLeft]);

  return (
    <div className="countdown-layout">
      <h1 className="countdown-title">Menghitung Hari Spesial...</h1>
      <div className="timer-container">
        <div className="time-box">
          <div className="time-value">{timeLeft.hari || '0'}</div>
          <div className="time-label">Hari</div>
        </div>
        <div className="time-box">
          <div className="time-value">{timeLeft.jam || '0'}</div>
          <div className="time-label">Jam</div>
        </div>
        <div className="time-box">
          <div className="time-value">{timeLeft.menit || '0'}</div>
          <div className="time-label">Menit</div>
        </div>
        <div className="time-box">
          <div className="time-value">{timeLeft.detik || '0'}</div>
          <div className="time-label">Detik</div>
        </div>
      </div>

      {/* 3. Grup tombol diperbarui */}
      <div className="button-container">
        <a href={whatsAppLink} className="whatsapp-button" target="_blank" rel="noopener noreferrer">
          Chat Picil di WhatsApp
        </a>
        <Link to="/" className="home-button">
          Kembali ke Awal
        </Link>
      </div>
    </div>
  );
}

export default CountdownPage;