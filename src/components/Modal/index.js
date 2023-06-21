import React, { useContext, useState } from "react";
import "./Modal.css";
import { HomeContext } from "../../Context/HomeContext";

export default function Modal() {
  const [switchForm, setSwitchForm] = useState(false);
  const homeContext = useContext(HomeContext);
  const switchFn = () => {
    setSwitchForm(v => !v)
  }
  return (
    <div
      className="wrapper-modal"
      style={
        homeContext.checkModal ? { display: "block" } : { display: "none" }
      }
    >
      {switchForm ? (
        /* Register */
        <div className="modal">
          <div className="modal-header">
            <h1>Đăng ký</h1>
            <div
              className="modal-xmark"
              onClick={() => homeContext.setCheckModal((v) => !v)}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="modal-body">
            <form>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm password" />
              <button>Đăng ký</button>
            </form>
          </div>
          <div className="modal-footer">
            <p>Chuyển sang trang </p>
            <p onClick={switchFn}>Đăng nhập</p>
          </div>
        </div>
      ) : (
        /* Login */
        <div className="modal">
          <div className="modal-header">
            <h1>Đăng nhập</h1>
            <div
              className="modal-xmark"
              onClick={() => homeContext.setCheckModal((v) => !v)}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="modal-body">
            <form>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Đăng nhập</button>
            </form>
          </div>
          <div className="modal-footer">
            <p>Bạn chưa có tài khoản?</p>
            <p onClick={switchFn}>Đăng ký ngay</p>
          </div>
        </div>
      )}

      <div className="modal-mask"></div>
    </div>
  );
}
