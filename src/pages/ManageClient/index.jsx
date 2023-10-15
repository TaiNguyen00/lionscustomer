import { clsx } from 'clsx';
import styles from './manageClient.module.scss'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import avt from '~/assets/images/1.png'
import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { useState } from 'react';
const ManageClient = () => {
    const handleChangePage = (event, newspage) => {
        changePage(newspage)
    }

    const handleRowsPerPage = (event) => {
        changeRowperpage(+event.target.value)
        changePage(0);
    }
    const [page, changePage] = useState(0);
    const [rowperpage, changeRowperpage] = useState(5);
    const columns = [
        {
            id: '1',
            name: 'STT',
        }, {
            id: '2',
            name: 'MKH',
        }, {
            id: '3',
            name: 'Tên khách hàng',
        },
        {
            id: '4',
            name: 'Tên khách sạn',
        }, {
            id: '5',
            name: 'Email',
        }
        , {
            id: '6',
            name: 'SĐT',
        },
        {
            id: '7',
            name: 'Gói',
        }, {
            id: '8',
            name: 'Trạng thái'
        }
        , {
            id: '9',
            name: 'Hành động'
        }
    ]
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
        },
        {
            stt: 3,
            mkh: 2346,
            name: "Nguyễn Văn A",
            nameHotel: "Văn A Hotel",
            email: "nguyenvana@gmail.com",
            phoneNumber: "012345687",
            package: '3tháng',
            status: 'hoạt động',
        },
        {
            stt: 4,
            mkh: 2547,
            name: "Nguyễn Văn A",
            nameHotel: "Văn A Hotel",
            email: "nguyenvana@gmail.com",
            phoneNumber: "012345687",
            package: '3tháng',
            status: 'hoạt động',
        },

    ]
    return (
        <div className={clsx(styles.container)}>
            <nav>

            </nav>
            <aside>
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

                    <Paper className={clsx(styles.paper)}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell padding="checkbox">
                                            <Checkbox />
                                        </TableCell>
                                        {
                                            columns.map((column) => {
                                                return (
                                                    <TableCell key={column.id}>{column.name}</TableCell>
                                                )
                                            })
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        clients.map((user) => {
                                            return (
                                                <TableRow key={user.mkh} className={clsx(styles.tr)}>
                                                    <TableCell padding="checkbox" >
                                                        <Checkbox />
                                                    </TableCell>
                                                    <TableCell>{user.stt}</TableCell>
                                                    <TableCell>{user.mkh}</TableCell>
                                                    <TableCell>{user.name}</TableCell>
                                                    <TableCell>{user.nameHotel}</TableCell>
                                                    <TableCell>{user.email}</TableCell>
                                                    <TableCell>{user.phoneNumber}</TableCell>
                                                    <TableCell>{user.package}</TableCell>
                                                    <TableCell>{user.status}</TableCell>
                                                    <TableCell >
                                                        <EditIcon />
                                                        <DeleteIcon />
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 15]}
                            rowsPerPage={rowperpage}
                            page={page}
                            count={clients.lenght}
                            component="div"
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleRowsPerPage}
                        >

                        </TablePagination>
                        {/* <p>Đang xem 1 đến 3 trong tổng số 3 mục</p>
                        <button>dấu bé</button>
                        <p>1</p>
                        <button>dấu lớn<nav></nav></button> */}
                    </Paper>

                    <div className={clsx(styles.footer)}>
                        <p>2023 © Mazer</p>
                        <p>Crafted with ❤️ by Lions</p>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default ManageClient