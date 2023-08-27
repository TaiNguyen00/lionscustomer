import clsx from "clsx";
import style from "./headerMain.module.scss";
const HeaderMain = () => {
  return (
    <div>
      <h1 className={clsx(style.header, style.border)}>Header main</h1>
    </div>
  );
};

export default HeaderMain;
