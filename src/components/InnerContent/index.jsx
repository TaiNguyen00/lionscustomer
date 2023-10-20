import clsx from "clsx";
import style from "./InnerContent.module.scss";



const InnerContent = ({ children }) => {
  return <div className={clsx(style.InnerContent)}>{children}</div>;
};

export default InnerContent;
