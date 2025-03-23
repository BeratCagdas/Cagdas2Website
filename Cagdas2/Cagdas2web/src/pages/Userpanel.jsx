import React, { useEffect, useState } from 'react'; 
import axios from 'axios';

function Userpanel() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("token"); // Token'ı al
    
            if (!token) {
                console.error("Token bulunamadı! Kullanıcı oturumu yok.");
                return;
            }
    
            try {
                const response = await axios.get('http://localhost:5000/api/user', {
                    headers: {
                        'Authorization': `Bearer ${token}`  // Token'ı header olarak ekle
                    }
                });
                setUser(response.data);
            } catch (error) {
                console.error("Kullanıcı bilgileri alınamadı", error.response?.data?.message || error.message);
                setError("Kullanıcı bilgileri alınamadı!");
            }
        };
    
        fetchUserData();
    }, []);

    const token = localStorage.getItem('token');

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        
        if (!oldPassword || !newPassword) {
            setMessage('Eski ve yeni şifreyi girin.');
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:5000/api/user/change-password', {
                oldPassword,
                newPassword
            }, {
                headers: {
                    Authorization: `Bearer ${token}`  // Token'ı header olarak gönderiyoruz
                }
            });
    
            setMessage(response.data.message || 'Şifre başarıyla değiştirildi'); // Başarılı mesaj
            setOldPassword("");
            setNewPassword("");
        } catch (error) {
            // Backend'den gelen hata mesajını al
            setMessage(error.response?.data?.message || 'Şifre değiştirilemedi');
        }
    };

    return (
        <section>
            <div className='container'>
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Hata mesajı göster */}
                
                <div className='box'>
                    <div className='box-left'>
                        <ul className='box-items'>
                            <li>Kullanıcı Adı: {user?.username || "Yükleniyor..."}</li>
                            <li>E-Posta: {user?.email || "Yükleniyor..."}</li>
                            <li>Karakter Silme Kodu: {user?.deleteCode || "Yükleniyor..."}</li>
                            <li>Telefon: {user?.phone || "Yükleniyor..."}</li>
                        </ul>
                    </div>
                    <div className='container'>
                        <div className='box'>
                            <h2>Şifre Değiştir</h2>
                            <form onSubmit={handlePasswordChange}>
                                <div>
                                    <label>Eski Şifre</label>
                                    <input 
                                        type="password" 
                                        value={oldPassword} 
                                        onChange={(e) => setOldPassword(e.target.value)} 
                                    />
                                </div>
                                <div>
                                    <label>Yeni Şifre</label>
                                    <input 
                                        type="password" 
                                        value={newPassword} 
                                        onChange={(e) => setNewPassword(e.target.value)} 
                                    />
                                </div>
                                <button type="submit">Şifreyi Değiştir</button>
                            </form>
                            {message && <p>{message}</p>} {/* Hata veya başarılı mesaj */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Userpanel;

