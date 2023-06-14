import React from "react";
import MusicCard from "../MusicCard";
import "./MusicList.css";

export default function MusicList({ value, index }) {
  return (
    <div className="music-list" key={index}>
      <div className="music-list__top">
        <h1>{value.title}</h1>
        <a href="#">Xem thêm</a>
      </div>
      <div className="music-list__wrapper">
        {value.items.slice(0, 4).map((item, i) => {
          return <MusicCard key={i} item={item} index={i} />;
        })}
      </div>
    </div>
  );
}
