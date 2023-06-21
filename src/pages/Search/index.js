import React, { useState } from "react";
import "./Search.css";
import SongItem from "../../components/SongItem";
import MusicCard from "../../components/MusicCard";
import axios from "axios";
import { baseUrl } from "../../components/baseUrl";

export default function Search() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState({})
  const [isSearch, setIsSearch] = useState(false)

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const submitForm = async e => {
    e.preventDefault()
    setIsSearch(true)
    await axios.get(baseUrl + '/mp3/search/' + input)
      .then(data => {
        console.log(data.data.data)
        setResult(data.data.data)
      })
  }
  return (
    <div className="search">
      <div className="container">
        <div className="search-header">
          <i className="fa-solid fa-magnifying-glass"></i>
          <form onSubmit={submitForm}>
            <input
              value={input}
              onChange={changeInput}
              type="text"
              placeholder="Tìm kiếm..."
            />
          </form>
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

          {
            isSearch 
            ?
          <div className="search-result">
            <div className="search-result__top">
              <div className="search-top__heading">
                <h1>Top tìm kiếm</h1>
              </div>
              <div className="search-top__body">
                <div className="search-top__body-img">
                  <img src={result?.top?.thumbnail} alt="" />
                </div>
                <div className="search-top__body-info">
                  <h1>#1</h1>
                  <p className="name">{result?.top?.name}</p>
                  <p className="name">{result?.top?.objectType}</p>
                </div>
              </div>
            </div>
            <div className="search-result__song">
              <div className="search-result__song-heading">
                <h1>Bài hát</h1>
              </div>
              <div className="search-result__song-list">
                {
                  result?.songs?.map((v,i) => {
                    // console.log(v)
                    return (
                      <SongItem key={i}  img={v.thumbnailM} title={v.title} artists={v.artistsName}/>
                    )
                  })
                }
              </div>
            </div>
            <div className="search-result__playlist">
              <div className="search-result__playlist-heading">
                <h1>Playlist</h1>
              </div>
              <div className="search-result__playlist-wrap">
                {
                  result?.playlists?.map((v,i) => {
                    return (
                      <MusicCard item={v} index={i} playerSrc />

                    )
                  })
                }
              </div>
            </div>
          </div>
            :
            <></>
          }


        </div>
      </div>
    </div>
  );
}
