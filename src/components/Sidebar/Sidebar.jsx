import clsx from "clsx";
import style from "./Sidebar.module.scss";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import lions_logo from "~/assets/images/lions_logo.png"

import {sideBarMenu} from "~/config/navigations"

import { Link } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ openMenu, setOpenMenu }) => {

  const [selectedMenu, setSelectedMenu] = useState(null);
  console.log("check selec", sideBarMenu)
  return (
    <div className={clsx(style.overlay)}>
      <div className={clsx(style.sidebar)}>
        <div className={clsx(style.SidebarHeader)}>
          <div
            className={clsx(style.closeSidebar)}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <KeyboardBackspaceIcon fontSize="large"/>
          </div>
          <div className={clsx(style.logo)}>
            <img src={lions_logo} alt="" />
          </div>
        </div>
        <div className={clsx(style.notLogin)}>
            <Link to="/register">Đăng kí</Link>
            <Link to="/login">Đăng nhập</Link>
        </div>
        <div className={clsx(style.list)}>
          <ul className={clsx(style.naviagtionList)}>
            {sideBarMenu.map((router) => (
              <li key={router.id} 
                className={router.id === selectedMenu ? clsx(style.activeMenu) : clsx(style.navItem)}
                onClick={() => setSelectedMenu(router.id)}
              >
                <Link
                to={router.path}
                >{router.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
