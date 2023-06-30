import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useContext } from "react";
import { HomeContext } from "../../Context/HomeContext";
const Sidebar = () => {
  const homeContext = useContext(HomeContext)
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Link to="/">
          <img src="/img/NCN.png" alt="" />
        </Link>
      </div>
      <div className="sidebar-account">
        <div className="sidebar-account__left">
          <div className="sidebar-account__btn" onClick={() => {homeContext.setCheckModal(v => !v)}}>Đăng nhập</div>
          <div style={{ margin: "0 5px" }}>|</div>
          <div className="sidebar-account__btn" onClick={() => {homeContext.setCheckModal(v => !v)}}>Đăng ký</div>
        </div>
        <div className="sidebar-account__right">
          <i className="fa-solid fa-gear"></i>
        </div>
      </div>
      <div className="sidebar__list">
        <div className="sidebar__item">
          <Link to="/search">
            <div className="sidebar__item-parent">
              <i className="fa-solid fa-magnifying-glass green"></i>
              <p>Tìm kiếm</p>
            </div>
          </Link>
        </div>
        <div className="sidebar__item active">
          <div className="sidebar__item-parent">
            <i className="fa-solid fa-house blue"></i>
            <p>Trang chủ</p>
          </div>
        </div>
        <div className="sidebar__item">
          <div className="sidebar__item-parent">
            <i className="fa-solid fa-compass yellow"></i>
            <p>Khám phá</p>
            <div className="arrow"></div>
          </div>
          <div className="sidebar-sub__list">
            <div className="sidebar-sub__item">
              <p>Playlist</p>
            </div>
            <div className="sidebar-sub__item">
              <p>Playlist Playlist</p>
            </div>
            <div className="sidebar-sub__item">
              <p>Playlist</p>
            </div>
            <div className="sidebar-sub__item">
              <p>Playlist</p>
            </div>
          </div>
        </div>
        <div className="sidebar__item">
          <div className="sidebar__item-parent">
            <i className="fa-solid fa-headphones purple"></i>
            <p>Nghe gì hôm nay</p>
          </div>
        </div>
        <div className="sidebar__item">
          <div className="sidebar__item-parent">
            <i className="fa-solid fa-chart-simple orange"></i>
            <p>BXH NCN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
