import { useContext, useEffect, useRef, useState } from "react";
import MusicCard from "../MusicCard";
import "./Player.css";
import { ZingContext } from "../../Context/ZingContext";
const Player = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [vol, setVol] = useState(50);
  const ZingMp3 = useContext(ZingContext);
  const audioRef = useRef();
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)

  const PlayFn = () => {
    setIsPlay((v) => !v);

  };

  const handleVolume = (e) => {
    setVol(e.target.value);
    audioRef.current.volume = vol * 0.01
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

  // const setVolume = (e) => {
  //   console.log(e.target.value);
  //   // audioRef.current.valume(0.1)
  // };

  useEffect(() => {
    if (audioRef.current) {
      console.log(audioRef.current.duration)
      // setMinute(Math.floor(audioRef.current.duration))
      // setSecond(Math.floor(audioRef.current.duration - (minute * 60)))
    }
  }, [])

  useEffect(() => {
    if (isPlay) {
      audioRef?.current.play();
    } else {
      audioRef?.current.pause();
    }
  }, [isPlay, ZingMp3.currentIndex]);

  return (
    <div className="player">
      <div className="container">
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
            <div className="controls-top__playlist">
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
              <p>{(minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second)}</p>
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
      <audio
        ref={audioRef}
        src={ZingMp3?.playerList[ZingMp3?.currentIndex]?.src}
      ></audio>
    </div>
  );
};

export default Player;
