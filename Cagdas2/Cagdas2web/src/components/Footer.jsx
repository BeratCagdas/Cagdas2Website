import React from 'react'
import '../Home.css';
function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>İletişim</h4>
        <p>Email: contact@website.com</p>
        <p>Telefon: +90 555 555 55 55</p>
      </div>

      <div className="footer-section">
        <h4>Sosyal Medya</h4>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Hakkımızda</h4>
        <p>Bizimle ilgili daha fazla bilgiye ulaşın.</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2025 Tüm Hakları Saklıdır.</p>
    </div>
  </footer>
  )
}

export default Footer