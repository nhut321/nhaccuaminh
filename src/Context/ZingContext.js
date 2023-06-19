import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../components/baseUrl";
import axios from "axios";

export const ZingContext = createContext();

const ZingContextProvider = ({ children }) => {
  const [getHome, setGetHome] = useState(null);
  const [playerList, setPlayerList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentSong, setCurrentSong] = useState({
    src: "",
    image: "",
    index: "",
  });
  const [active, setActive] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(baseUrl + "/mp3").then((data) => {
        setGetHome(data.data);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (playerList.length > 0) {
      const fetchData = async () => {
        await axios
          .get(
            baseUrl + "/mp3/info/source/" + playerList[currentIndex].encodeId
          )
          .then((data) =>
            setCurrentSong((v) => {
              return { ...v,image: playerList[currentIndex].thumbnailM, src: data.data.data.data[128] };
            })
          );
      };
      fetchData();  
    }
  }, [currentIndex]);

  const data = {
    currentIndex,
    setCurrentIndex,
    getHome,
    playerList,
    setPlayerList,
    currentSong,
    setCurrentSong,
    setActive,
    active,
  };
  return <ZingContext.Provider value={data}>{children}</ZingContext.Provider>;
};

export default ZingContextProvider;
