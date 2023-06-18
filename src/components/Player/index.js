import { useContext, useEffect, useRef, useState } from "react";
import MusicCard from "../MusicCard";
import "./Player.css";
import { ZingContext } from "../../Context/ZingContext";
import Playlist from "./Playlist";
import { baseUrl } from "../baseUrl";
import axios from "axios";
const Player = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [vol, setVol] = useState(50);
  const ZingMp3 = useContext(ZingContext);
  const audioRef = useRef();
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [playlistOpen, setPlaylistOpen] = useState(false);
  // const [currentSong, setCurrentSong] = useState({ src: "" });

  const PlayFn = () => {
    setIsPlay((v) => !v);
  };

  const handleVolume = (e) => {
    setVol(e.target.value);
    audioRef.current.volume = vol * 0.01;
  };

  const nextFn = () => {
    setIsPlay(true);
    ZingMp3.setCurrentIndex((v) => {
      if (v >= ZingMp3.playerList.length - 1) {
        return (v = 0);
      } else {
        return v + 1;
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          baseUrl +
            "/mp3/info/source/" +
            ZingMp3.playerList[ZingMp3.currentIndex]?.encodeId
        )
        .then((data) => {
          ZingMp3.setCurrentSong((v) => {
            return { ...v, src: data.data.data.data[128] };
          });
        });
    };

    fetchData();
  }, [ZingMp3.currentIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = vol * 0.01
    }
  }, [vol])

  function openPlaylist() {
    setPlaylistOpen((v) => !v);
  }

  useEffect(() => {
    if (isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlay,ZingMp3.currentSong]);

  return (
    <div className="player">
      <div className="container">
        <Playlist playlistOpen={playlistOpen} fn={openPlaylist} />
        <div className="player-wrapper">
          <MusicCard playerSrc={ZingMp3.playerList[ZingMp3.currentIndex]} />
        </div>
        <div className="controls">
          <div className="controls-top">
            <div className="controls-top__volume">
              <i className="fa-solid fa-volume-high"></i>
              <div className="controls-top__volume-range">
                <input type="range" value={vol} onChange={handleVolume} />
              </div>
            </div>
            <div className="controls-top__playlist" onClick={openPlaylist}>
              <p>Danh sách phát</p>
            </div>
            <div className="controls-top__option">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
          <div className="controls-body">
            <div className="controls-body__range">
              <p>00:00</p>
              <input type="range" value={0} onChange={(e) => e.target.value} />
              <p>
                {(minute < 10 ? "0" + minute : minute) +
                  ":" +
                  (second < 10 ? "0" + second : second)}
              </p>
            </div>
            <div className="controls-body__btn-wrap">
              <div className="controls-btn">
                <i className="fa-solid fa-shuffle"></i>
              </div>
              <div className="controls-btn">
                <i className="fa-solid fa-backward-step"></i>
              </div>
              <div className="controls-btn play" onClick={PlayFn}>
                {isPlay ? (
                  <i className="fa-solid fa-pause"></i>
                ) : (
                  <i className="fa-solid fa-play"></i>
                )}
              </div>
              <div className="controls-btn" onClick={nextFn}>
                <i className="fa-solid fa-forward-step"></i>
              </div>
              <div className="controls-btn">
                <i className="fa-solid fa-repeat"></i>
              </div>
            </div>
            {/* {ZingMp3.currentIndex} */}
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={ZingMp3.currentSong.src}></audio>
    </div>
  );
};

export default Player;
