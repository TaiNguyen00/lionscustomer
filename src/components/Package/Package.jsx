import clsx from 'clsx'
import React from 'react'
import style from './style.module.scss'
import ButtonPackage from './ButtonPackage/ButtonPackage'

const Package = () => {
    const Packages = [
        {
            title: 'Dùng thử',
            quantityRoom: 3,
            quantityStaff: 2,
            btn: true,
            limit: [
                'Quan li doanh thu',
                'Quan li doanh thu',
            ],
            button: 'Dùng thử'
        },
        {
            title: 'Vip',
            quantityRoom: 15,
            quantityStaff: 3,
            btn: false,
            limit: [
                'Quan li khách hàng',
                'Hỗ trợ tương tác',
            ],
            button: 'Mua',
            modesee: 'Xem thêm'
        },
        {
            title: 'Vip Pro',
            quantityRoom: 30,
            quantityStaff: 5,
            btn: false,
            limit: [
                'Quan li khách hàng',
                'Hỗ trợ tương tác',
            ],
            button: 'Mua',
            modesee: 'Xem thêm'
        },
    ]
    return (
        <div className={clsx(style.container)}>
            {Packages.map((pk, inx) => (
                <div key={inx} className={clsx(style.package)}>
                    <h1 className={clsx(style.title)}>{pk.title}</h1>
                    <div className={clsx(style.package_info)}>
                        <span>Quản lí đơn đặt phòng</span>
                        <li className={clsx(style.package_info_text)}>
                            Tối đa {pk.quantityRoom} phòng
                        </li>
                        <span>Quản lí nhân viên</span>
                        <li className={clsx(style.package_info_text)}>
                            Tối đa {pk.quantityStaff} nhân viên
                        </li>
                        {pk.limit ? (
                            pk.limit.map((item, index) => (
                                <li className={clsx(style.package_limit)} key={index}>{item}</li>
                            ))
                        ) : null}
                    </div>
                    <ButtonPackage Packages={pk} />
                </div>
            ))}
        </div>
    )
}

export default Package
