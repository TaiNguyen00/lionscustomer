import { clsx } from 'clsx';
import styles from './paymentsc.module.scss'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from 'react';


const PaymentSC = () => {
    const number = 5000000;
    const formatNumber = () => {
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
        const formattedNumber = formatter.format(number);

        return formattedNumber;
    }
    const users = [
        {
            name: "Nguyễn Văn A",
            clientCode: "A1234",
        }
    ]
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000); // Cập nhật ngày giờ mỗi giây

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    const formattedDate = currentDate.toLocaleDateString();
    return (

        <div className={clsx(styles.container)} >
            <div className={clsx(styles.status)}>
                {/* back */}
                <div className={clsx(styles.back1)}>
                    <ArrowBackIcon />
                    <h1 className={clsx(styles.h1)}>
                        Trạng thái giao dịch
                    </h1>
                </div>
                <p>Ngày: {formattedDate}</p>
                <h2 className={clsx(styles.h2)}>
                    <TaskAltIcon />   Giao dịch thành công
                </h2>
                <p>Cảm ơn vì bạn đã chọn Lions</p>
            </div>

            <div className={clsx(styles.inforPayment)}>
                <h1>Thông tin thánh toán</h1>
                <div className={clsx(styles.row)}>

                    <div className={clsx(styles.inforUser)}>
                        <h2>Thông tin khách hàng</h2>
                        <div className={clsx(styles.inforuser)}>
                            {
                                users.map((user) => {
                                    return (
                                        <div className={clsx(styles.user)} key={user.clientCode}>
                                            <p><b>Tên:</b> {user.name}</p>
                                            <p><b>Mã khách hàng: </b>  {user.clientCode}</p>
                                            <p>
                                                <b>
                                                    Tổng tiền thanh toán:
                                                </b>{formatNumber()}</p>
                                        </div>
                                    );
                                })
                            }

                        </div>

                    </div>
                    <div className={clsx(styles.detail)}>
                        <h2>Chi tiết thanh toán</h2>
                        <table className={clsx(styles.table)} >
                            <tr className={clsx(styles.tr)}>
                                <td className={clsx(styles.td)}>STT</td>
                                <td className={clsx(styles.td)}>Số tiền</td>
                                <td className={clsx(styles.td)}>Gói</td>

                            </tr>
                            <tr>
                                <td className={clsx(styles.td)}>1</td>
                                <td className={clsx(styles.td)}>{formatNumber(


                                )}</td>
                                <td className={clsx(styles.td)}>VIP</td>

                            </tr>

                        </table>
                    </div>
                </div>
                <a href="#"><p><i>Trạng thái gói hàng</i></p></a>
            </div>


        </div>
    )
}

export default PaymentSC