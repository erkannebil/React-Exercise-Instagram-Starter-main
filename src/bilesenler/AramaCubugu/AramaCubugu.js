// MUÜ için bu dosyayı değiştirmenize gerek yok
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCircle,
  faCompass,
} from "@fortawesome/free-regular-svg-icons";
import "./AramaCubugu.css";

const AramaCubugu = (props) => {
  const { aramaKriteri, aramaFn } = props;

  const handleChange = (evt) => {
    const searchText = evt.target.value;
    console.log(searchText);
    aramaFn(searchText);
  };

  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <form className="search-form">
        <input type="text" placeholder="Arama" onChange={handleChange} />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default AramaCubugu;
