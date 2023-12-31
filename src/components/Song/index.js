import React, { useContext, useState, useEffect } from "react";
import "./Song.css";
import { ZingContext } from "../../Context/ZingContext";
import { baseUrl } from "../baseUrl";
import axios from "axios";

export default function Song({
  name,
  album,
  image,
  artistsName,
  encodeId,
  index,
}) {
  const [active, setActive] = useState(null);
  const ZingMp3 = useContext(ZingContext);

  const selectSong = async () => {
    if (index !== ZingMp3.currentIndex) {
      // await axios.get(baseUrl + "/mp3/info/source/" + encodeId).then((data) => {
      //   ZingMp3.setCurrentSong((v) => {
      //     if (data.data.data.data) {
      //       return {
      //         ...v,
      //         image: ZingMp3.playerList[index]?.thumbnail,
      //         src: data.data.data.data[128],
      //         index: index,
      //       };
      //     }
      //   });
      // });
      ZingMp3.setCurrentIndex(index);
    }
  };

  return (
    <div
      className={
        ZingMp3.currentIndex == index
          ? "list-song__item active"
          : "list-song__item"
      }
      onClick={selectSong}
    >
      <div className="list-song__item-left">
        <img src={image ? image : "/img/card.png"} alt="" />
        <div className="d-flex-column">
          <p>{name ? name : "Title"}</p>
          <p>{artistsName ? artistsName : "Artists"}</p>
        </div>
      </div>
      {album ? (
        <div className="list-song__item-center">
          <p>{album}</p>
        </div>
      ) : (
        <></>
      )}
      <div className="list-song__item-right">
        <p>04:59</p>
      </div>
    </div>
  );
}
