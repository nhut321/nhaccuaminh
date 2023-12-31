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
  let audioRef = useRef();

  const [minuteCurrent, setMinuteCurrent] = useState(0)
  const [secondCurrent, setSecondCurrent] = useState(0)
  const [minuteDuration, setMinuteDuration] = useState(0);
  const [secondDuration, setSecondDuration] = useState(0);

  const [playlistOpen, setPlaylistOpen] = useState(false);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0)

  const PlayFn = () => {
    setIsPlay((v) => !v);
  };

  const handleVolume = (e) => {
    setVol(e.target.value);
    audioRef.current.volume = vol * 0.01;
  };

  const nextFn = async () => {
    await setIsPlay(true);
    ZingMp3.setCurrentIndex((v) => {
      if (v >= ZingMp3.playerList.length - 1) {
        return (v = 0);
      } else {
        return v + 1;
      }
    });
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = vol * 0.01;
    }
  }, [vol]);

  function openPlaylist() {
    setPlaylistOpen((v) => !v);
  }

  useEffect(() => {
    if (isPlay) {
      setTimeout(() => {
        audioRef?.current?.play();
        let min = Math.floor(audioRef.current.duration / 60)
        let sec = Math.floor(audioRef.current.duration - (min * 60))
        setMinuteDuration(min)
        setSecondDuration(sec)
      }, 1000);
    } else {
      audioRef?.current?.pause();
    }
  }, [isPlay, ZingMp3.currentIndex, ZingMp3.currentSong]);
  
  const changeSeekFn = (e) => {
    setAudioCurrentTime(e.target.value)
  }
  
  const updateTime = () => {
    let result
    let min = Math.floor(audioRef?.current?.currentTime / 60)
    let sec = Math.floor(audioRef.current.currentTime - (min * 60))

    setMinuteCurrent(min)
    setSecondCurrent(sec)
    setAudioCurrentTime((audioRef?.current?.currentTime / audioRef?.current?.duration)*100)
  }

//  audioRef?.current?

  return (
    <div className="player">
      <div className="container">
        <Playlist playlistOpen={playlistOpen} fn={openPlaylist} />
        <div className="player-wrapper">
          <MusicCard playerSrc={ZingMp3.currentSong} />
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
            <p>
                {(minuteCurrent < 10 ? "0" + minuteCurrent : minuteCurrent) +
                  ":" +
                  (secondCurrent < 10 ? "0" + secondCurrent : secondCurrent)}
              </p>
              <input type="range" value={audioCurrentTime} onChange={changeSeekFn} />
              <p>
                {(minuteDuration < 10 ? "0" + minuteDuration : minuteDuration) +
                  ":" +
                  (secondDuration < 10 ? "0" + secondDuration : secondDuration)}
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
          </div>
        </div>
      </div>
      <audio onTimeUpdate={updateTime} ref={audioRef} src={ZingMp3.currentSong.src}></audio>
    </div>
  );
};

export default Player;
