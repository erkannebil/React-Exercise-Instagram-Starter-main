
import React, {useState} from "react";
import "./App.css";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import sahteVeri from "./sahte-veri";
import { text } from "@fortawesome/fontawesome-svg-core";

const App = () => {

const [gonderiler, setGonderiler] = useState(sahteVeri);
const [aramaKriteri, setAramaKriteri] = useState("");

  const gonderiyiBegen = (gonderiID) => {
    let begeniData = gonderiler.map(gonderi => {
      (gonderi.id === gonderiID) && gonderi.likes++;
      return gonderi;
    });
    setGonderiler(begeniData);
  };


  const aramaFn= (text) =>{
    setAramaKriteri(text);
    let aramaSonucları = gonderiler.filter(gonderi => gonderi.username.includes(text));
    setGonderiler(aramaSonucları);
  }

  return (
    <div className="App">
      <AramaCubugu  aramaKriteri={aramaKriteri} aramaFn={aramaFn} />
      <Gonderiler gonderiler = {gonderiler} gonderiyiBegen = {gonderiyiBegen}/>
    </div>
  );
};

export default App;
