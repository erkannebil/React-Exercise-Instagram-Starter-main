
import React, {useState} from "react";
import "./App.css";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import sahteVeri from "./sahte-veri";

const App = () => {

const [gonderiler, setGonderiler] = useState(sahteVeri);
const [aramaKriteri, setAramaKriteri] = useState("");

  const gonderiyiBegen = (gonderiID) => {
    gonderiler.map(gonderi => (gonderi.id === gonderiID) && gonderi.likes++);
    setGonderiler(gonderiler);
    console.log(gonderiler)
  };

  return (
    <div className="App">
      <AramaCubugu />
      <Gonderiler gonderiler = {gonderiler} gonderiyiBegen = {gonderiyiBegen}/>
    </div>
  );
};

export default App;
