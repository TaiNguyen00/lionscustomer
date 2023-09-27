import { clsx } from 'clsx';
import styles from './payment.module.scss';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// import momo from '../../../assets/images/momo.png';
import bank from '../../assets/images/bank.png';
import QR from '../../assets/images/7.png'

const Payment = () => {
  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.header)}>

      </div>
      <div className={clsx(styles.detailPayment)}>
        <div className={clsx(styles.row)}>
          <div className={clsx(styles.inforUser)}>
            <h2>Thông tin khách hàng</h2>
            <div className={clsx(styles.ab)}>
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

          </div>
          <div className={clsx(styles.detail)}>
            <h2>Chi tiết thanh toán</h2>
            <table >
              <tr>
                <td>STT</td>
                <td>Số tiền</td>
                <td>Gói</td>

              </tr>
              <tr>
                <td>1</td>
                <td>5.000.000đ</td>
                <td>VIP</td>

              </tr>

            </table>
          </div>
        </div>

        <div className={clsx(styles.inforPayment)}>
          <h2>Thông tin thanh toán</h2>
          <div className={clsx(styles.pay)}>
            <div className={clsx(styles.step1)}>
              <h2>Cách 1: Thanh toán qua chuyển khoản ngân hàng</h2>
              <p>Số tài khoản thanh toán:</p>

              <h1>070119644990<a href="#"><ContentCopyIcon /></a></h1>
              <h4>Hướng dẫn thanh toán</h4>
              <p>
                Bước 1: Khách hàng mở <span>APP EBANK</span> của <span>NGÂN HÀNG BẤT KỲ</span> <br /> <br />

                Chọn ngân hàng thụ hưởng là Sacombank <br /> <br />

                Bước 2: Nhập số tài khoản <span>070119644990</span>  vào mục số tài khoản <br /> người thụ hưởng và số tiền phải trả (được gợi ý ở phần tên tài <br /> khoản) vào mục số tiền chuyển khoản. <br /> <br />

                Bước 3: Điền <span>Mã đơn hàng</span>  và ô ghi chú/ diễn giải <br />
                Chọn “TIẾP TỤC” và nhập mã OTP để chuyển tiền.
              </p>
            </div>

            <div className={clsx(styles.step2)}>
              <h2>Cách 2: Hình thức thanh toán quét mã QR Code</h2>
              <div className={clsx(styles.image)}>
                <img src={bank} alt="Ngân hàng" />
                <img src={QR} alt="QR" />
              </div>
              <div className={clsx(styles.button)}>
                <input type="button" value='Download QR Code' />
              </div>

              <h4>
                Hướng dẫn thanh toán
              </h4>
              <p>
                Bước 1: Khách hàng mở <span>APP EBANK</span>  của <span>NGÂN HÀNG BẤT KỲ</span>. <br /> <br />

                Bước 2: Chọn chức năng quét QR Code của <span>APP EBANK</span>  và quét QR <br /> Code ở trên, kiểm tra số tiền chuyển khoản phải khớp với số tiền gợi <br /> ý trên tên tài khoản. <br /><br />

                Bước 3: Chọn “TIẾP TỤC” và nhập mã OTP để chuyển tiền.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Payment;
