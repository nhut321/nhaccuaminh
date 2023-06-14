import React, { useContext } from "react";
import "./Song.css";
import { ZingContext } from "../../Context/ZingContext";

export default function Song({ name, album, image, artistsName, encodeId }) {
  const ZingMp3 = useContext(ZingContext)
  const item = {
    image,
    encodeId,
    name,
    artistsName
  }
  // ZingMp3.addSong(item)
  // console.log(encodeId)
  return (
    <div className="list-song__item" onClick={() => ZingMp3.addSong(item)}>
      <div className="list-song__item-left">
        <img src={image} alt="" />
        <div className="d-flex-column">
          <p>{name}</p>
          <p>{artistsName}</p>
        </div>
      </div>
      <div className="list-song__item-center">
        <p>{album}</p>
      </div>
      <div className="list-song__item-right">
        <p>04:59</p>
      </div>
    </div>
  );
}
