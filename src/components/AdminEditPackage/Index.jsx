import React, { useState } from 'react';
import style from './style.module.scss';
import clsx from 'clsx';
import Modal from '@mui/material/Modal';

const Modals = ({ open, handleClose, inputt }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={clsx(style.box)}>
                <div className={clsx(style.box_container)}>
                    <h2>{inputt.title}</h2>
                    <div className={clsx(style.box_input)}>
                        <input
                            type="text"
                            placeholder={inputt.dis}
                        />
                    </div>


                    <button >{inputt.button}</button>

                </div>
            </div>
        </Modal>
    );
};

const AdminEditPackage = () => {
    const rows = [

        {
            id: 1,
            function: 'Quản lý đơn đặt phòng',
        },
        {
            id: 2,
            function: 'Quản lý đơn đặt phòng',
        }, {
            id: 3,
            function: 'Quản lý đơn đặt phòng',
        }, {
            id: 4,
            function: 'Quản lý đơn đặt phòng',
        }, {
            id: 5,
            function: 'Quản lý đơn đặt phòng',
        }, {
            id: 6,
            function: 'Quản lý đơn đặt phòng',
        }, {
            id: 7,
            function: 'Quản lý đơn đặt phòng',
        }, {
            id: 8,
            function: 'Quản lý đơn đặt phòng',
        }, {
            id: 9,
            function: 'Quản lý đơn đặt phòng',
        },
        {
            id: 10,
            function: 'Quản lý đơn đặt phòng',
        },
    ];

    const [open, setOpen] = useState(false);
    const [inputt, setInputt] = useState('')

    const handleOpen = (editing) => {
        setOpen(true);
        setInputt(editing)
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={clsx(style.body)}>
            <div className={clsx(style.body_container)}>


                <h2 className={clsx(style.h2)}>MIỄN PHÍ</h2>
                <button className={clsx(style.button)} onClick={() => handleOpen({ title: 'Thêm chức năng', dis: 'Vui lòng điền tên chức năng', button: 'Xong' })}>Thêm</button>

                <div className={clsx(style.table_container)}>
                    <Modals
                        open={open}
                        handleClose={handleClose}
                        title="Chức năng"
                        label="Thêm"
                        inputt={inputt}
                    />
                    <table className={clsx(style.table)}>
                        <thead>
                            <tr>
                                <td className={clsx(style.table_child)} colSpan={3}>Tên các chức năng</td>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((rs) => (
                                <tr key={rs.id}>
                                    <td>{rs.function}</td>
                                    <td>
                                        <button className={clsx(style.button_add)} onClick={() => handleOpen({ title: 'Sửa chức năng', dis: 'Vui lòng sửa chức năng', button: 'Xong' })}>Sửa</button>
                                    </td>
                                    <td>
                                        <input type='checkbox' />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={clsx(style.button_group)}>
                    <button className={clsx(style.button_delete)}>Xóa</button>
                </div>
            </div>
        </div>
    );
};

export default AdminEditPackage;
