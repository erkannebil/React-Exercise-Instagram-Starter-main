import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

const BegenBolumu = (props) => {
  const { gonderiyiBegen, begeniSayisi } = props;
  const [liked, setLiked] = useState(false);

  const handleBegenClick = () => {
    if (!liked) {
      gonderiyiBegen();
      setLiked(true);
    }
  };

  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <FontAwesomeIcon
            icon={faHeart}
            onClick={handleBegenClick}
            style={{ color: liked ? "red" : "black" }}
          />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{begeniSayisi}</p>
    </div>
  );
};

export default BegenBolumu;
