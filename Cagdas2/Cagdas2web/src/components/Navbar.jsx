import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as jwt_decode from 'jwt-decode';  

import '../Navbars.css';
import logo from '../images/logo2.png';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwt_decode.default(token);
        setUsername(decodedToken?.username);
      } catch (err) {
        console.error('Token çözülürken hata:', err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUsername(null);
    navigate('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwt_decode.default(token);
        setUsername(decodedToken?.username);
      } catch (err) {
        console.error('Token çözülürken hata:', err);
      }
    } else {
      setUsername(null);
    }
  }, [localStorage.getItem('token')]);

  return (
    <nav className="navbar-custom">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
        </div>

       
        <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

       
        <ul className={isMobile ? "nav-links active" : "nav-links"}>
          <li><Link to="/">Anasayfa</Link></li>
         
          <li><Link to="/kayit">Kayıt</Link></li>
          <li><Link to="/siralama">Sıralama</Link></li>
      

        
          {isMobile && (
            <li className="nav-user">
              {username ? (
                <div className="navbar-mobile-user">
                  <span>{username}</span>
                  <button onClick={() => navigate('/userpanel')}>Profil</button>
                  <button onClick={handleLogout}>Çıkış Yap</button>
                </div>
              ) : (
                <Link className='giris-yap' to="/giris">Giriş Yap</Link>
              )}
            </li>
          )}
        </ul>

      
        {!isMobile && (
          <div className="navbar-right">
            {username ? (
              <div className='navbar-right-section'>
                <span>{username}</span>
                <button onClick={() => navigate('/userpanel')}>Profil</button>
                <button onClick={handleLogout}>Çıkış Yap</button>
              </div>
            ) : (
               <Link to="/giris">Giriş Yap</Link> 
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
