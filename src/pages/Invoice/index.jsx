import { clsx } from 'clsx';
import styles from './invoice.module.scss';
import momo from '../../assets/images/momo.png';
import bank from '../../assets/images/bank.png';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Invoice = () => {
  const [methods, setMethods] = useState("");
  const handleMethods1 = (event) => {
    event.preventDefault();
    setMethods("Bạn đã chọn phương thức thanh toán qua Momo");
  }
  const handleMethods2 = (event) => {
    event.preventDefault();
    setMethods("Bạn đã chọn phương thức thanh toán qua Ngân hàng");
  }
  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.header)}>

      </div>
      <div className={clsx(styles.heading)}>
        <h1 className={clsx(styles.h1)}>
          Thông tin chi tiết
        </h1>
        <h4 className={clsx(styles.h4)}>
          Mã đơn hàng: <span>2L8I102NS</span> <a href="#"><ContentCopyIcon /></a>
        </h4>
      </div>

      <div className={clsx(styles.inforUser)}>
        <div className={clsx(styles.a)}>
          <h3>Tên:</h3>
          <h3>Mã khách hàng:</h3>
          <h3>Tổng tiền thanh toán:</h3>
        </div>
        <div className={clsx(styles.b)}>
          <p>Nguyễn Văn A</p>
          <p>A1234</p>
          <p>5.000.000vnđ</p>
        </div>
      </div>

      <table>
        <tr>
          <td>Gói</td>
          <td>Số tiền</td>
          <td>Chọn</td>

        </tr>
        <tr>
          <td>VIP</td>
          <td>5.000.000đ</td>
          <td><input type="checkbox" /></td>

        </tr>

      </table>

      <div className={clsx(styles.total)}>
        <p>Tổng tiền phải thanh toán:</p>
        <h2>5.000.000 vnđ</h2>
      </div>

      <div className={clsx(styles.pay)}>
        <p>Bước 1: Chọn kênh thanh toán:</p>

        <div className={clsx(styles.step1)}>

          <div className={clsx(styles.pttt)}>
            <a href="" onClick={handleMethods1}>
              <img src={momo} alt="" />
            </a>
            <h3>Momo</h3>
          </div>
          <div className={clsx(styles.pttt)}>
            <a href="" onClick={handleMethods2}>
              <img src={bank} alt="" />
            </a>
            <h3>Ngân hàng</h3>
          </div>
        </div>
        <div className={clsx(styles.click)}>
          <p>Bước 2: Ấn nút thanh toán sau khi đã chọn kênh:</p>
          <p>{methods}</p>
        </div>

        <div className={clsx(styles.step2)}>
          <Link to="/payment">
            <input type="button" value="Thanh toán" />
          </Link>
          <Link to="/">
            <a href="#">Trở về</a>
          </Link>
        </div>

      </div>

    </div>
  )
};

export default Invoice;
