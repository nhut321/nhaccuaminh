import { useContext } from "react";
import Song from "../Song";
import { ZingContext } from "../../Context/ZingContext";

const Playlist = ({ playlistOpen, fn }) => {
  const ZingMp3 = useContext(ZingContext);
  return (
    <div
      className="playlist"
      style={playlistOpen ? { left: 0 } : { left: "calc(100% + 20px)" }}
    >
      {ZingMp3.playerList.map((value, index) => {
        return (
          <Song
            key={index}
            name={value.title}
            image={value.image}
            artistsName={value.artistsName}
            album={value.album}
            index={index}
          />
        );
      })}
      <div onClick={fn} className="btn-pl">
        {">"}
      </div>
    </div>
  );
};

export default Playlist;
