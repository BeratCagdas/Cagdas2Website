import React from 'react'
import { useNavigate } from "react-router-dom";

import '../Home.css';
function home() {
    const navigate = useNavigate(); // Yönlendirme hook'u
    const handleNavigation = () => {
        navigate("/kayit"); // "/kayit" sayfasına git
      };
    const navigationLogin = () =>{

        navigate("/giris");
    }
    const navigationDownload = () =>{

      navigate("/giris");
  }


  return (
    <div className='Home-Section'>
    <div className='box'>
        <div className='box-head'>
        <h1 className="animated-text">Hoş Geldiniz!</h1>
        <p className="animated-text">Cagdas2 1-105 Oyun yapısıyla 6 Mayıs Tarihinde Aktif</p>
        <p className="animated-text">Erken Kayıt fırsatlarından yararlanmak için oyuna kayıt olabilir ve istemciyi indirebilirsin.</p>
        </div>
        <div className='box-bottom'>
            <div className='box-sign'><button className='btn'  onClick={handleNavigation}>Kayıt Ol</button></div>
            <div className='box-download'><button className='btn'>İndir</button></div>
            <div className='box-sign'><button className='btn'  onClick={navigationLogin}>Giriş Yap</button></div>
        </div>
    </div>
    </div>
    
  )
}

export default home
