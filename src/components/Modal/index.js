import React, { useContext, useState } from "react";
import "./Modal.css";
import { HomeContext } from "../../Context/HomeContext";
import { baseUrl } from "../baseUrl";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

export default function Modal() {
  const [switchForm, setSwitchForm] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const authContext = useContext(AuthContext)
  const homeContext = useContext(HomeContext);
  const switchFn = () => {
    setSwitchForm((v) => !v);
  };

  const formReg = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      console.log("khong chay");
    } else {
      console.log("reg chay");
    }
  };

  const formLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(baseUrl + '/auth/login', {
        email: user.email,
        password: user.password
      }).then(data => {
        if(data.data.status == 200) {
          localStorage.setItem('token', data.data.token)
          authContext.setIsLogin(true)
          homeContext.setCheckModal(false)
        }
      })
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeInput = (e) => {
    setUser((v) => {
      return { ...v, [e.target.name]: e.target.value };
    });
  };

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
            <form onSubmit={formReg}>
              <input
                value={user.email}
                name="email"
                type="email"
                placeholder="Email"
                onChange={onChangeInput}
              />
              <input
                value={user.password}
                name="password"
                type="password"
                placeholder="Password"
                onChange={onChangeInput}
              />
              <input
                value={user.confirmPassword}
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                onChange={onChangeInput}
              />
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
            <form onSubmit={formLogin}>
              <input
                value={user.email}
                name="email"
                type="email"
                placeholder="Email"
                onChange={onChangeInput}
              />
              <input
                value={user.password}
                name="password"
                type="password"
                placeholder="Password"
                onChange={onChangeInput}
              />
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
