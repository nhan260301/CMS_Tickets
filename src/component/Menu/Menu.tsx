import React from "react";
import "./Menu.scss";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import icHome from "../../assets/menu/Home.png";
import icTicket from "../../assets/menu/Ticket.png";
import icCheck from "../../assets/menu/CheckTicket.png";
import icSetting from "../../assets/menu/Setting.png";

import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const returnHome = () => {
    if (navigate) {
      navigate("/");
    }
  };

  return (
    <>
    <div className="menu-container">
      <div className="menu-logo">
        <img src={logo} onClick={() => returnHome()} />
      </div>
      <div className="menu-content">
        <ul>
          <li>
            <NavLink to="/">
              <img src={icHome} className="ic" />
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/ticket-manage">
              <img src={icTicket} className="ic" />
              Quản lý vé
            </NavLink>
          </li>
          <li>
            <NavLink to="/checking-ticket">
              <img src={icCheck} className="ic" />
              Đối soát vé
            </NavLink>
          </li>
          <li>
            <NavLink to="/setting">
              <img src={icSetting} className="ic" />
              Cài đặt
            </NavLink>
            <ul className="sub-menu">
              <li>
                <Link to="/setting/service">Gói dịch vụ</Link>
              </li>
            </ul>
            
          </li>
        </ul>
      </div>
      <div className="menu_footer"><p>Copyright © 2020 Alta Software</p> </div>
    </div>
    
    </>
  );
};

export default Menu;
