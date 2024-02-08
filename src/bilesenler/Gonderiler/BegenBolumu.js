// 26. satırdaki beğeni sayısına bakın. Şu anda '100' olarak kodlanmış durumda.
// Doğru beğeni sayısını görüntülemek için proplardan gelen bir veri parçasını kullanın.
// Beğeni sayısını artırmak için "gonderiyiBegen" fonksiyonunu kullanan bir onClick işleyicisi de ekleyeceksiniz.
// (Ek görev olarak, kullanıcınızın aynı gönderiyi birden fazla kez "beğenmesini" engelleyin.)

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

const BegenBolumu = (props) => {
  const { gonderiyiBegen, begeniSayisi: propBegeniSayisi } = props;
  const [liked, setLiked] = useState(false);
  const [begeniSayisi, setBegeniSayisi] = useState(propBegeniSayisi);

  useEffect(() => {
    setBegeniSayisi(propBegeniSayisi);
  }, [propBegeniSayisi]);

  const handleBegenClick = () => {
    if (!liked) {
      gonderiyiBegen();
      setLiked(true);
      setBegeniSayisi((oncekiSayi) => oncekiSayi + 1);
    }
  };

  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faHeart} onClick={handleBegenClick} />
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