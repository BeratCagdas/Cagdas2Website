
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Home.css';

function Home () {
  const [events, setEvents] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [character, setCharacter] = useState(null);
  const [top10, setTop10] = useState([]);
  const handletop10click = (char) => {
    setCharacter(char); 
  };


  useEffect(() => {
    console.log("useEffect çalıştı, etkinlikler alınacak...");
    const getEvents = async () => {
      try {
        console.log("API isteği gönderiliyor...");
        const response = await axios.get("http://localhost:5000/api/events");
        console.log("Gelen veri:", response.data);
        setEvents(response.data);
      } catch (error) {
        console.error("Etkinlikler alınırken hata:", error);
      }
    };
    getEvents();
  }, []);

  // Seçilen karakter tipine göre veriyi getir
  const fetchCharacter = async (type) => {
    setSelectedType(type);
    try {
      const response = await axios.get(`http://localhost:5000/top-character/${type}`);
      console.log("Seçilen karakterin verisi:", response.data);
      setCharacter(response.data); // Doğrudan `character` nesnesi geliyor
      console.log(response.data.religion)


    } catch (error) {
      console.error("Karakter bilgisi alınamadı", error);
    }
  };

  // İlk 10 karakteri getir 
  useEffect(() => {
    const fetchTop10 = async () => {
      try {
        const response = await axios.get("http://localhost:5000/top-10");
        console.log("Top 10 karakter listesi:", response.data);
        setTop10(response.data);

        
        const shamanCharacters = response.data.filter((char) => char.type === "Şaman");

      
        if (shamanCharacters.length > 0) {
          const highestLevelShaman = shamanCharacters.reduce((prev, current) =>
            prev.level > current.level ? prev : current
          );
          setCharacter(highestLevelShaman); 
        }
      } catch (error) {
        console.error("Top 10 karakter listesi alınamadı", error);
      }
    };
    fetchTop10();
  }, []); 

  

  return (
    <div>
      <div className='Home-Section'>
        <div className='section-container'>
          <div className='section-parag'>
            <h1>Hoşgeldin Maceracı</h1>
            <h2>Oyun istemcimizi indirerek maceraya başlayabilirsin!</h2>
          </div>
          <div><button className='section-button'>İNDİR</button></div>
        </div>
      </div>

      <div className="character-section">
        <div className='box-duyuru2'> <p>Karakter Sıralaması</p>  </div>
        <div className="character-buttons">
          <button onClick={() => fetchCharacter("Savaşçı")}>SAVAŞÇI</button>
          <button onClick={() => fetchCharacter("Ninja")}>NİNJA</button>
          <button onClick={() => fetchCharacter("Sura")}>SURA</button>
          <button onClick={() => fetchCharacter("Şaman")}>ŞAMAN</button>
        </div>

        <div className="character-info">
   
          <div className="character-religion">
            {character?.religion === "Jinno Krallığı" ? (
              <img src="src/images/mavibayrak.png" alt="Jinno Krallığı" />
            ) : character?.religion === "Shinsoo Krallığı" ? (
              <img src="src/images/kirmizibayrak.png" alt="Shinsoo Krallığı" />
            ) : character?.religion === "Chunjo Krallığı" ? (
              <img src="src/images/saribayrak.png" alt="Chunjo Krallığı" />
            ) : (
              <p>Krallık bilgisi yok</p>
            )}

            <div className="character-details">
              <p><strong>Karakter Adı:</strong> {character?.name}</p>
              <p><strong>Level:</strong> {character?.level}</p>
              <p><strong>Krallık:</strong> {character?.religion}</p>
              <p><strong>Karakter Tipi:</strong> {character?.type}</p>
            </div>
          </div>

         
          <div className="character-image">
            {character?.type === "Savaşçı" && <img src="src/images/savasci4.png" alt="Savaşçı" />}
            {character?.type === "Ninja" && <img src="src/images/ninja.png" alt="Ninja" />}
            {character?.type === "Sura" && <img src="src/images/sura4.png" alt="Sura" />}
            {character?.type === "Şaman" && <img src="src/images/saman.png" alt="Şaman" />}
          </div>

    
          <div className="top-10">
            <p>En İyi 10 Oyuncu</p>
            <ul>
              {top10.length > 0 ? (
                top10.map((char, index) => (
                  <li key={index}>
                  <div onClick={() => handletop10click(char)} style={{ cursor: "pointer" }}> {index + 1}. {char.name} - Level {char.level} </div> 
                  </li>
                ))
              ) : (
                <p>Henüz karakter bulunmamaktadır.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className='box-duyuru'>Oyun İçi Duyurular ve Tanıtım Videosu</div>
      <div className='box-container2'>
  <div className='box-fixed2'>
    <div className='box-head2'>
      {events.length > 0 ? (
        <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {events.map((event, index) => (
              <div key={event._id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img src={event.imageUrl} className="d-block w-100" alt={event.title} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{event.title}</h5>
                  <p>{event.content}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#eventCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#eventCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ) : (
        <p>Henüz etkinlik bulunmamaktadır.</p>
      )}
      <div className="promo-video-container2">
        <video width="100%" height="auto" controls>
          <source src="src/images/metin2tanitimvideosu.mp4" type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Home;
