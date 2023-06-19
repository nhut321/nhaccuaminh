import { Link } from "react-router-dom";
import "./MusicCard.css";
export default function MusicCard({ item, index, playerSrc }) {
  return (
    <div className="card" key={index}>
      <div className="card-img">
        <Link to={"/detail/playlist/" + item?.encodeId}>
          <img
            src={
              // item?.thumbnail ? item.thumbnail : "/img/card.png"
              item?.thumbnail ? item?.thumbnail : playerSrc ? playerSrc.image : '/img/card.png'
            }
            alt=""
          />
        </Link>
        {/* <div className="mask"></div> */}
      </div>
      {/* <div className="card-info">
        <Link to="/detail/">
          <p className="card-info__title">{item?.title}</p>
        </Link>
        <Link to="/detail/">
          <p className="card-info__artists">{123}</p>
        </Link>
      </div> */}
    </div>
  );
}
