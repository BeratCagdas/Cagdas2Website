import React, { useState } from 'react';
import '../kayit.css';
import axios from 'axios';  // axios'u import ediyoruz
import { useNavigate } from 'react-router-dom';

function Kayit() {
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [deleteCode, setDeleteCode] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => { 
        e.preventDefault();
    
        if (!username)
        { 
            setErrorMessage('Kullanıcı Adı Giriniz');
            return;
        }
        if (username.length > 16) {
            setErrorMessage('Kullanıcı adı en fazla 16 karakter olmalı!');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Şifreler eşleşmiyor!');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('Şifre en az 6 karakter olmalı!');
            return;
        }

        if (!email.includes('@')) {
            setErrorMessage('Geçerli bir e-posta adresi girin!');
            return;
        }

        if (!phone || !/^\d{10}$/.test(phone)) {
            setErrorMessage('Geçerli bir telefon numarası girin!');
            return;
        }
    

        // Backend'e veri gönderme
        try {
            const response = await axios.post('http://localhost:5000/api/register', {
                username,
                password,
                email,
                phone,
                deleteCode
            });
            
            // Backend başarıyla döndüğünde
            alert('Kullanıcı başarıyla kaydedildi');
            setUsername('')
            setPhone('')
            setPassword('')
            setEmail('')
            setDeleteCode('')
            setConfirmPassword('')
        } catch (err) {
            // Hata mesajı alındığında
            if (err.response && err.response.data) {
                // Backend'den gelen hata mesajını al
                alert(err.response.data.message); // Backend mesajını göster
            } else {
                alert('Kayıt sırasında bir hata oluştu'); // Genel hata mesajı
            }
        }
       
    };
    const navigateLogin = () => {
        navigate("/giris")
      }

    return (
        <div className="container">
            <div className="box">
                <div className='box-input'>
                    <label>Kullanıcı Adı:</label>
                    <input type="text"  maxLength="16" required value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>    

                <div className='box-input'>
                    <label>Şifre:</label>
                    <input type="password" minLength="6" maxLength="16" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>    

                <div className='box-input'>
                    <label>Şifre Tekrar:</label>
                    <input type="password" minLength="6" maxLength="16" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <div className='box-input'>
                    <label>E-Posta Adresi:</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='box-input'>
                    <label>Telefon Numarası:</label>
                    <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className='box-input'>
                    <label>Karakter Silme Kodu:</label>
                    <input type="string" maxLength= "7" value={deleteCode} onChange={(e) => setDeleteCode(e.target.value)} />
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button className="submit-btn" onClick={handleSubmit}>Kayıt Ol</button>
                <button className="submit-btn" onClick={navigateLogin}>Zaten Kayıtlı Mısın?</button>
            </div>
        </div>
    );
}

export default Kayit;
