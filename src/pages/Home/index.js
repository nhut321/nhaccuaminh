import { useContext, useState } from "react";
import MusicList from "../../components/MusicList";
import Slider from "../../components/Slider";
import "./Home.css";
import { ZingContext } from "../../Context/ZingContext";

const Home = () => {
  const [musicList, setMusicList] = useState([])
  const ZingMp3 = useContext(ZingContext)
  return (
    <div className="home">
      <div className="container">
        <Slider />
        {
          ZingMp3?.getHome?.data.map((value, index) => {
           return <MusicList key={index} value={value} index={index} />

          })
        }
        {/* <MusicList />
        <MusicList /> */}
      </div>
    </div>
  );
};

export default Home;
