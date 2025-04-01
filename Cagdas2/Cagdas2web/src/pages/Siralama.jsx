import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../Home.css';
function Siralama() {


  const[get100 , setget100] = useState();


  useEffect(() => {
    const fetchTop100 = async () => {
      try {
        const response = await axios.get("http://localhost:5000/get-100");
        console.log("Top 100 karakter listesi:", response.data);
        setget100(response.data);   
      
      } catch (error) {
        console.error("Top 100 karakter listesi alınamadı", error);
      }
    };
    fetchTop100();
  }, []); 


  return (
    <div className='siralama-container'>
      
    <div className="top-100">
            <p>Tüm Oyuncular</p>
            <ul>
              {get100? (
                get100.map((char, index) => (
                  <li key={index}>
                  <div className='index'> {index + 1} </div>
                  <div className='character-type'>
               {char?.type === "Savaşçı" ? (
            <img src="src/images/savascimini.png" alt="Savaşçı" />
               ) : char?.type === "Sura" ? (
            <img src="src/images/suramini.png" alt="Sura" />
              ) : char?.type === "Ninja" ? (
            <img src="src/images/ninjamini.png" alt="Ninja" />
              ) : char?.type === "Şaman" ? (
              <img src="src/images/samanmini.png" alt="Şaman" />
       ) : null}
                 </div>
                   <div className='religion'>
                  {char?.religion === "Jinno Krallığı" ? (
              <img src="src/images/mavibayrak.png" alt="Jinno Krallığı" />
            ) : char?.religion === "Shinsoo Krallığı" ? (
              <img src="src/images/kirmizibayrak.png" alt="Shinsoo Krallığı" />
            ) : char?.religion === "Chunjo Krallığı" ? (
              <img src="src/images/saribayrak.png" alt="Chunjo Krallığı" />
            ) : (
              <p>Krallık bilgisi yok</p>
            )}
                  </div>
                   <div className='name'> {char.name}</div> <div className='level'> {char.level} </div> 
                  </li>
                ))
              ) : (
                <p>Henüz karakter bulunmamaktadır.</p>
              )}
            </ul>
      </div>
    </div>
  )
}

export default Siralama