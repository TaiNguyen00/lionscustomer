import clsx from "clsx";
import style from "./headerMain.module.scss";
import { Link } from "react-router-dom";
import { navigationsHome } from "~/config/navigations";
import InnerContent from "~/components/InnerContent";

const HeaderMain = () => {
  return (
    <div>
      <div className={clsx(style.header)}>
        <InnerContent>
          <div className={clsx(style.headerInner)}>
            <img src="" alt="" className={clsx(style.logo)} />
            <ul className={clsx(style.navigations)}>
              {navigationsHome.map((route) => (
                <li key={route.id}>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              ))}
            </ul>
            <div className={clsx(style.userAction)}>
              <div className={clsx(style.userNotLogin)}>
                <Link to="/login">Login</Link>
                <Link to="/register">Regiter</Link>
              </div>
            </div>
          </div>
        </InnerContent>
      </div>
    </div>
  );
};

export default HeaderMain;
