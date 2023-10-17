import {clsx} from "clsx";
import styles from "./paymentfailure.module.scss";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import img_failure from "~/assets/images/failure.png";
import img_failure1 from "~/assets/images/failure1.png";
export default function Paymentfailure() {
  return (
    <div>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.container_filuter)}>
          <span className={clsx(styles.img_failure)}>
            {" "}
            <img src={img_failure} alt="" />
          </span>
          <div className={clsx(styles.box)}>
            <HighlightOffIcon className={clsx(styles.icons)} />
          </div>
          <div className={clsx(styles.box_failure)}>
            <p className={clsx(styles.failure)}>Thanh toán thất bại</p>
            <p className={clsx(styles.letter)}>Vui lòng thử lại hoặc liên hệ</p>
            <p className={clsx(styles.failure)}> HotLine:012345798</p>
          </div>
          <span className={clsx(styles.img_failure1)}>
            {" "}
            <img src={img_failure1} alt="" />
          </span>
        </div>
        <div className={clsx(styles.container_titler)}>
          <div>
            Để biết thông tin vui lòng liên hệ với chúng tôi trong thời gian sớm
            nhất
          </div>
        </div>
      </div>
    </div>
  );
}
