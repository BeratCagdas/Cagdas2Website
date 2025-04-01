import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import '../userpanel.css';


function Userpanel() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showForm, setshowForm] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("token");
    
            if (!token) {
                console.error("Token bulunamadı! Kullanıcı oturumu yok.");
                return;
            }
    
            try {
                const response = await axios.get('http://localhost:5000/api/user', {
                    headers: {
                        'Authorization': `Bearer ${token}` 
                    }
                });
                console.log(response.data)
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
                    Authorization: `Bearer ${token}` 
                }
            });
    
            setMessage(response.data.message || 'Şifre başarıyla değiştirildi'); 
            setOldPassword("");
            setNewPassword("");
            setshowForm(false);
        } catch (error) {
        
            setMessage(error.response?.data?.message || 'Şifre değiştirilemedi');
        }
    };

    return (
        <section className="userpanel-container">

        <div className="user-info">
            <div className='box-bilgi1'>Kullanıcı Menüsü</div>
            
            <div className='box-userpanel'>
                <div className='box-label'>
                    <label>Kullanıcı Adı:</label> 
                    <span>{user?.username || "Yükleniyor..."}</span>          
                </div>
                <div className='box-label'>   
                    <label> E-Posta: </label> 
                    <span>{user?.email || "Yükleniyor..."}</span>
                </div>
                <div className='box-label'>   
                    <label> Karakter Silme Kodu: </label> 
                    <span>{user?.deleteCode || "Yükleniyor..."}</span>    
                </div>
                <div className='box-label'>   
                    <label> Telefon: </label> 
                    <span> {user?.phone || "Yükleniyor..."}</span> 
                </div>
            </div>
    
     
            <div className='box-pass'>
                <button className='pass-change' onClick={() => setshowForm(!showForm)}>
                    Şifremi Unuttum
                </button>
    
                {showForm && (
                    <form onSubmit={handlePasswordChange}>
                        <div className='box-input1'>
                            <label>Eski Şifre</label>
                            <input 
                                type="password" 
                                value={oldPassword} 
                                onChange={(e) => setOldPassword(e.target.value)} 
                            />
                        </div>
                        <div className='box-input1'>
                            <label>Yeni Şifre</label>
                            <input 
                                type="password" 
                                value={newPassword} 
                                onChange={(e) => setNewPassword(e.target.value)} 
                            />
                        </div>
                        <button type="submit">Şifreyi Değiştir</button>
                    </form>
                )}
                {message && <p>{message}</p>}
            </div>
        </div>
    
   
        <div className="character-info1">
            <div className='box-bilgi1'>Karakter Bilgileri</div>
            <div className='account-info'>
                <div className='box-label'>
                    <label>Karakter Adı:</label> 
                    <span>{user?.character?.name || "Yükleniyor..."}</span>          
                </div>
                <div className='box-label'>   
                    <label> Level: </label> 
                    <span>{user?.character?.level || "Yükleniyor..."}</span>
                </div>
                <div className='box-label'>   
                    <label> Krallık: </label> 
                    <span>{user?.character?.religion || "Yükleniyor..."}</span>    
                </div>
                <div className='box-label'>   
                    <label> Karakter Tipi: </label> 
                    <span>{user?.character?.type || "Yükleniyor..."}</span> 
                </div>
            </div>
        </div>
    </section>
    
    
    );
}

export default Userpanel;

