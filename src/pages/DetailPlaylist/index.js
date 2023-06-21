import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
import Song from "../../components/Song";
import axios from "axios";
import { baseUrl } from "../../components/baseUrl";
import { ZingContext } from "../../Context/ZingContext";

export default function DetailPlaylist() {
  const { id } = useParams();
  const [detailItem, setDetailItem] = useState(null);
  const [song, setSong] = useState([]);
  const ZingMp3 = useContext(ZingContext);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(baseUrl + "/mp3/detail/" + id).then((data) => {
        const result = data.data.data.song.items.filter(v => !v.streamPrivileges)
        // console.log(result)
        ZingMp3.setPlayerList(result)
        setSong(result);
        setDetailItem(data.data.data);
      });
    };
    fetchData();
  }, []);
  return (
    <div className="detail">
      <div className="container">
        <div className="detail-hero">
          <div className="detail-hero__img">
            <img
              src={
                detailItem?.thumbnailM ? detailItem.thumbnailM : "/img/card.png"
              }
              alt=""
            />
          </div>
          <div className="detail-hero__info">
            <h2>{detailItem?.title}</h2>
            <p>
              <b>{"Nghệ sĩ: "}</b>
              {detailItem?.artistsNames}
            </p>
            <p>{detailItem?.sortDescription}</p>
          </div>
        </div>
        <div className="detail-playlist">
          <h1>Bài hát</h1>
          <div className="detail-playlist__list">
            {song.map((value, index) => {
              return (
                <Song
                  key={index}
                  encodeId={value?.encodeId}
                  artistsName={value?.artistsNames}
                  image={value.thumbnailM}
                  name={value.title}
                  album={value?.album?.title}
                  index={index}
                />
              );
            })}
            {/* <Song />
            <Song />
            <Song /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
