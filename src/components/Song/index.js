import React, { useContext } from "react";
import "./Song.css";
import { ZingContext } from "../../Context/ZingContext";

export default function Song({
  name,
  album,
  image,
  artistsName,
  encodeId,
  index
}) {
  const ZingMp3 = useContext(ZingContext);
  const item = {
    image,
    encodeId,
    name,
    artistsName,
  };
  return (
    <div className="list-song__item" onClick={() => ZingMp3.addSong(item)}>
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
