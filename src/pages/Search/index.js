import React from "react";
import "./Search.css";
import SongItem from "../../components/SongItem";
import MusicCard from "../../components/MusicCard";

export default function Search() {
  return (
    <div className="search">
      <div className="container">
        <div className="search-header">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
        <div className="search-body">
          {/* <div className="search-body__history">
            <h1>Lịch sử tìm kiếm</h1>
            <div className="search-body__item">
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="search-body__item">
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="search-body__item">
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="search-body__item">
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div> */}
          <div className="search-result">
            <div className="search-result__top">
              <div className="search-top__heading">
                <h1>Top tìm kiếm</h1>
              </div>
              <div className="search-top__body">
                <div className="search-top__body-img">
                  <img src="/img/card.png" alt="" />
                </div>
                <div className="search-top__body-info">
                  <h1>#1</h1>
                  <p className="name">name</p>
                  <p className="name">nghệ sĩ</p>
                </div>
              </div>
            </div>
            <div className="search-result__song">
              <div className="search-result__song-heading">
                <h1>Bài hát</h1>
              </div>
              <div className="search-result__song-list">
                <SongItem />
                <SongItem />
                <SongItem />
                <SongItem />
                <SongItem />
                <SongItem />
              </div>
            </div>
            <div className="search-result__playlist">
              <div className="search-result__playlist-heading">
                <h1>Playlist</h1>
              </div>
              <div className="search-result__playlist-wrap">
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
