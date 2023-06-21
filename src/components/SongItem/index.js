import React from "react";
import './SongItem.css'

export default function SongItem({img,title,artists}) {
  return (
    <div className="song-item">
      <div className="song-item__img">
        <img src={img} alt="" />
      </div>
      <div className="song-item__right">
        <div className="song-item__right-info">
          <p>{title}</p>
          <p>{artists}</p>
        </div>
        <div className="song-item__right-wrap">
            17.6M
        </div>
      </div>
    </div>
  );
}
