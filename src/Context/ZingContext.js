import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../components/baseUrl";
import axios from "axios";

export const ZingContext = createContext();

const ZingContextProvider = ({ children }) => {
  const [getHome, setGetHome] = useState(null);
  const [playerList, setPlayerList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState({src: ''})

  const addSong = async (item) => {
    if (!playerList.some((v) => v.encodeId == item.encodeId)) {
      await axios
        .get(baseUrl + "/mp3/info/source/" + item.encodeId)
        .then((data) => {
          if (data.data.data.data) {
            setPlayerList((v) => [
              ...v,
              {
                image: item.image,
                encodeId: item.encodeId,
                title: item.name,
                artistsName: item.artistsName,
                src: data.data.data.data[128],
                // album:
              },
            ]);
          }
        });
    }
  };

  // const getCurrentSong = async (encodeId) => {
  //   try {
  //     await axios.get(baseUrl + '/mp3/info/source/' + encodeId)
  //       .then(data => console.log(data))
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }
  

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(baseUrl + "/mp3").then((data) => {
        setGetHome(data.data);
      });
    };
    fetchData();
  }, []);

  const data = {
    currentIndex,
    setCurrentIndex,
    getHome,
    playerList,
    setPlayerList,
    addSong,
    currentSong,
    setCurrentSong
  };
  return <ZingContext.Provider value={data}>{children}</ZingContext.Provider>;
};

export default ZingContextProvider;
