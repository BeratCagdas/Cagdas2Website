import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as jwt_decode from 'jwt-decode';  // jwt-decode'i bu şekilde import ediyoruz

import '../Navbars.css';
import logo from '../images/clogo.png';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate(); // navigate hook'u kullanılarak yönlendirme yapılacak

  // Kullanıcı giriş bilgilerini kontrol etmek için
  useEffect(() => {
    const token = localStorage.getItem('token'); // Token'ı localStorage'dan alıyoruz
    if (token) {
      try {
        const decodedToken = jwt_decode.default(token); // Token'ı decode ediyoruz
        console.log(decodedToken);
        setUsername(decodedToken?.username); // Token'dan kullanıcı adını alıyoruz
      } catch (err) {
        console.error('Token çözülürken hata:', err);
      }
    }
  }, []);

  // Çıkış yapma işlemi
  const handleLogout = () => {
    localStorage.removeItem('token'); // Token'ı localStorage'dan kaldır
    setUsername(null); // Kullanıcı adını sıfırla
    navigate('/'); // Anasayfaya yönlendir
  };

  // Anlık olarak state'i güncel tutabilmek için kullanıcı bilgilerini kontrol et
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwt_decode.default(token); // Token'ı decode ediyoruz
        setUsername(decodedToken?.username); // Token'dan kullanıcı adını alıyoruz
      } catch (err) {
        console.error('Token çözülürken hata:', err);
      }
    } else {
      setUsername(null); // Eğer token yoksa, kullanıcıyı sıfırla
    }
  }, [localStorage.getItem('token')]); // localStorage'daki token değiştiğinde bu useEffect çalışır

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
        </div>

        {/* Hamburger Menü (mobilde) */}
        <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Menüler */}
        <ul className={isMobile ? "nav-links active" : "nav-links"}>
          <li><Link to="/">Anasayfa</Link></li>
          <li><Link to="/indir">İndir</Link></li>
          <li><Link to="/kayit">Kayıt</Link></li>
          <li><Link to="/siralama">Sıralama</Link></li>
          <li><Link to="/tanitim">Tanıtım</Link></li>
        </ul>

        {/* Sağdaki Navbar Kısmı */}
        <div className="navbar-right">
          {username ? (
            <div>
              <span>{username}</span> {/* Kullanıcı adı */}
              <button onClick={() => navigate('/userpanel')}>Profil</button> {/* Userpanel'e yönlendir */}
              <button onClick={handleLogout}>Çıkış Yap</button> {/* Çıkış yap butonu */}
            </div>
          ) : (
            <Link to="/giris">Giriş Yap</Link> // Eğer kullanıcı adı yoksa giriş yap linki göster
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
