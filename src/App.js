import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Player from "./components/Player";
import DetailPlaylist from "./pages/DetailPlaylist";
import Modal from "./components/Modal";
import "./App.css";
import Search from "./pages/Search";
import { useContext } from "react";
import { ZingContext } from "./Context/ZingContext";

function App() {
  const ZingMp3 = useContext(ZingContext)
  return (
    <div className="App">
        <Modal />
        <Sidebar />
        <div
          style={{
            marginTop: "25px",
            marginLeft: "200px",
            marginRight: ZingMp3.playerList.length <= 0 ? "0" : "320px",
            // marginRight: "320px",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/playlist/:id" element={<DetailPlaylist />} />
            <Route path="/search/" element={<Search />} />
          </Routes>
        </div>
        {
          ZingMp3.playerList.length <= 0 
          ?
          <></>
          :
        <Player />
        }
    </div>
  );
}

export default App;
