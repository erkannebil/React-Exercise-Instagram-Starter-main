
import React, { useState } from 'react';
import "./App.css";
import gonderiler from './bilesenler/Gonderiler/Gonderiler.js';
import aramaCubugu from './bilesenler/AramaCubugu/AramaCubugu.js' ;
import sahteVeri from './sahte-veri' ;

const App = () => {
   let [gonderiler, setGonderiler] = useState(sahteVeri);
   let [aramaKriteri, setAramaKriteri] = useState(" ");
  const gonderiyiBegen = (gonderiID) => {
    setGonderiler(gonderiler.map(gonderi => gonderi.id === gonderiID ? {...gonderi, beğeniSayısı: gonderi.beğeniSayısı + 1} : gonderi));

  };

  return (
    <div className="App">
      App Çalışıyor
      {/* Yukarıdaki metni projeye başladığınızda silin*/}
      {/* AramaÇubuğu ve Gönderiler'i render etmesi için buraya ekleyin */}
      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer ihtiyaç varsa ekleyin! */}
    </div>
  );
};

export default App;
