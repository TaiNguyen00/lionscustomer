import { clsx } from 'clsx';
import styles from './paymentsc.module.scss'
import transfer from '~/assets/images/18.png';
import money from '~/assets/images/19.png'

const PaymentSC = () => {
    return (
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.imgTF)}>
                <img src={transfer} alt="chuyển tiền" />
            </div>
            <div className={clsx(styles.content)}>
                <div className={clsx(styles.alert)}>
                    <h2>
                        Xin chúc mừng <br /> bạn đã thanh toán thành công
                    </h2>
                    <p>Cảm ơn bạn vì đã chọn Lions</p>
                </div>

            </div>
            <div className={clsx(styles.imgMN)}>
                <img src={money} alt="tiền" />
            </div>

        </div>
    )
}

export default PaymentSC