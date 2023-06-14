import React from "react";
import './SongItem.css'

export default function SongItem() {
  return (
    <div className="song-item">
      <div className="song-item__img">
        <img src="/img/card.png" alt="" />
      </div>
      <div className="song-item__right">
        <div className="song-item__right-info">
          <p>title</p>
          <p>artists name</p>
        </div>
        <div className="song-item__right-wrap">
            17.6M
        </div>
      </div>
    </div>
  );
}
