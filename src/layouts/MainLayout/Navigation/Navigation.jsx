import clsx from "clsx";
import style from "./Navigation.module.scss";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import lions_logo from "~/assets/images/LOGO-LIONS.png";
import img_avatar from "~/assets/images/img_avatar.png";
import Sidebar from "../Sidebar/Sidebar";

import { navigationsHome } from "~/config/navigations";

import { Link } from "react-router-dom";

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  console.log("check active", activeMenu);
  return (
    <div className={clsx(style.navigation_wrapper)}>
      <div className={clsx(style.content)}>
        <div className={clsx(style.menu)}>
          <MenuIcon
            className={clsx(style.menuIcon)}
            onClick={() => setActiveMenu(true)}
          />
          {activeMenu && (
            <Sidebar openMenu={activeMenu} setOpenMenu={setActiveMenu} />
          )}
        </div>
        <div className={clsx(style.logo)}>
          <img src={lions_logo} alt="logo" />
        </div>
        <div className={clsx(style.menuContent)}>
          <ul className={clsx(style.menuList)}>
            {navigationsHome.map((router) => (
              <li key={router.id}>
                <Link to={router.path}>{router.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={clsx(style.user_info)}>
          <div className={clsx(style.user_infoOption)}>
            <img src={img_avatar} alt="" />
            <h2 className={clsx(style.nameUser)}>Hi,Trung</h2>
            <div className={clsx(style.dropDown)}>
              <ExpandMoreIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
