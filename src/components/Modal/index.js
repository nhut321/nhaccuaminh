import React from "react";
import "./Modal.css";

export default function Modal() {
  return (
    <div className='wrapper-modal'>
      <div className="modal">
        <div className="modal-header">
          <h1>Title</h1>
          <div className="modal-xmark">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="modal-body">
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Type</button>
          </form>
        </div>
        <div className="modal-footer">
          <p>Bạn chưa có tài khoản?</p>
          <p>Đăng ký ngay</p>
        </div>
      </div>
      <div className="modal-mask"></div>
    </div>
  );
}
