import { clsx } from 'clsx';
import styles from './manageClient.module.scss'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import avt from '~/assets/images/1.png'
const ManageClient = () => {
    const clients = [
        {
            stt: 1,
            mkh: 2345,
            name: "Nguyễn Văn A",
            nameHotel: "Văn A Hotel",
            email: "nguyenvana@gmail.com",
            phoneNumber: "012345687",
            package: '3tháng',
            status: 'hoạt động',
        },
        {
            stt: 2,
            mkh: 2545,
            name: "Nguyễn Văn A",
            nameHotel: "Văn A Hotel",
            email: "nguyenvana@gmail.com",
            phoneNumber: "012345687",
            package: '3tháng',
            status: 'hoạt động',
        }
    ]
    return (
        <div className={clsx(styles.container)}>
            <header>
                <div className={clsx(styles.alert)}>
                    <NotificationsNoneIcon className={clsx(styles.iconStyles)} />
                </div>
                <div className={clsx(styles.user)}>
                    <div className={clsx(styles.image)}>
                        <img src={avt} alt="" />
                    </div>
                    <div className={clsx(styles.name)}>
                        <p>Ali Tuân</p>
                    </div>
                    <a href="#"><KeyboardArrowDownIcon /></a>

                </div>
            </header>
            <div className={clsx(styles.main)}>
                <div className={clsx(styles.row)}>
                    <h4>
                        Profile Statistics
                    </h4>
                    <div className={clsx(styles.printf)}>
                        <button>Copy</button>
                        <button>PDF</button>
                    </div>
                </div>
                <div className={clsx(styles.data)}>
                    <table className={clsx(styles.tableHead)}>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>STT</th>
                            <th>MKH</th>
                            <th>Tên khách hàng</th>
                            <th>Tên khách sạn</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Gói</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </table>
                    <div id="loading">
                        {
                            clients.map((user) => {
                                return (
                                    <table className={clsx(styles.tableBody)} key={user.mkh}>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>{user.stt}</td>
                                            <td>{user.mkh}</td>
                                            <td>{user.name}</td>
                                            <td>{user.nameHotel}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phoneNumber}</td>
                                            <td>{user.package}</td>
                                            <td>{user.status}</td>
                                            <td>
                                                <button>sửa</button>
                                                <button>xóa</button>
                                            </td>
                                        </tr>
                                    </table>
                                );
                            })
                        }
                    </div>

                    <p>Đang xem 1 đến 3 trong tổng số 3 mục</p>
                    <button>dấu bé</button>
                    <button>1</button>
                    <button>dấu lớ<nav></nav></button>
                </div>
                <p>2023 © Mazer</p>
                <p>Crafted with ❤️ by Lions</p>
            </div>
        </div>
    )
}

export default ManageClient