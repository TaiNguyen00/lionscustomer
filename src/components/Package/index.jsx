import clsx from 'clsx'
import React from 'react'
import style from './style.module.scss'
import ButtonPackage from './Button/Button'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Package = () => {
    const Packages = [
        {
            title: 'Dùng thử',
            quantityRoom: 8,
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
        <>
            {/* danh cho pc  */}
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
            {/* ket thuc */}

            {/* danh cho mobie  */}
            <div className={clsx(style.container_mobie)}>
                <Swiper className={clsx(style.swiperr)}
                    spaceBetween={50}
                    slidesPerView={1} // Số lượng slide hiển thị trên màn hình
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {Packages.map((pk, inx) => (
                        <SwiperSlide className={clsx(style.swiper)} key={inx}>
                            <div className={clsx(style.package)}>
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
                                            <li className={clsx(style.package_limit)} key={index}>
                                                {item}
                                            </li>
                                        ))
                                    ) : null}
                                </div>
                                <ButtonPackage Packages={pk} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* ket thuc */}
        </>

    )
}

export default Package
