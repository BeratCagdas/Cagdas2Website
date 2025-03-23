import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Giris() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(
            'http://localhost:5000/api/login', 
            { username, password },
            { headers: { 'Content-Type': 'application/json' } } // Headers ekleyelim
        );

        console.log("Gelen Yanıt:", response); // Tüm yanıtı log al

        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            
            navigate('/userpanel');
        } else {
            console.error("Token alınamadı! Yanıt:", response);
            setError("Token alınamadı! Sunucu yanıtını kontrol edin.");
        }
    } catch (err) {
        console.error("İstek hatası:", err);
        setError(err.response?.data?.message || 'Giriş sırasında bir hata oluştu');
    }
};

  return (
    <div className='container'>
      <div className="box">
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Hata mesajı göster */}
        
        <div className='box-input'>
          <label>Kullanıcı Adı:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>    

        <div className='box-input'>
          <label>Şifre:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>    

        <button className='submit-btn' onClick={handleSubmit}>Giriş Yap</button>
      </div>
    </div>
  );
}


export default Giris;

