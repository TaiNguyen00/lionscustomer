import clsx from 'clsx'
import React from 'react'
import style from './style.module.scss'
import ButtonPackage from './Button/Button'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Package = () => {

    const Packager = [
        {
            // title gói
            id: 0,
            title: "Dùng thử",
            imgUrlPakage: "imgsUrl",
            button: 'Dùng thử',

            options: [
                {
                    id: 0,
                    titleOption: "Quản lý đơn đặt phòng.",
                    descOption: {
                        label: "Số lượng phòng quản lý của gói này là",
                        quantityRoom: 8,
                    },
                },
                {
                    id: 0,
                    titleOption: "Quản lý nhân sự .",
                    descOption: {
                        label: "Số lượng nhân viên quản lý của gói này là",
                        quantityRoom: 3,
                    },
                },
            ],
            isFreeBtn: true, // Đặt giá trị boolean ở đây, ví dụ: true
        },

        {
            // title gói
            id: 1,
            title: "Vip",
            imgUrlPakage: "imgsUrl",
            button: 'Mua',
            modesee: 'Xem thêm',
            options: [
                {
                    id: 0,
                    titleOption: "Quản lý đơn đặt phòng.",
                    descOption: {
                        label: "Số lượng phòng quản lý của gói này là",
                        quantityRoom: 8,
                    },
                },
            ],
            isFreeBtn: false, // Đặt giá trị boolean ở đây, ví dụ: true

            // Đặt giá trị boolean ở đây, ví dụ: true
        },
    ];

    return (
        <>
            {/* danh cho pc */}
            <div className={clsx(style.container)}>
                {Packager.map((pk, inx) => (
                    <div key={inx} className={clsx(style.package)}>
                        <h1 className={clsx(style.title)}>{pk.title}</h1>
                        {pk.options ? (
                            pk.options.map((item, index) => ( // Thay đổi 'limit' thành 'options'
                                <div className={clsx(style.package_info)} key={index}>
                                    <span>{item.titleOption}</span>
                                    <li className={clsx(style.package_info_text)}>
                                        {item.descOption.label} {item.descOption.quantityRoom}
                                    </li>
                                    {/* Tiếp tục thêm các mục khác ở đây nếu cần */}
                                </div>
                            ))
                        ) : null}
                        <ButtonPackage Packager={pk} />
                    </div>
                ))}
            </div>
            {/* ket thuc */}

            {/* danh cho mobie */}
            <div className={clsx(style.container_mobie)}>
                <Swiper className={clsx(style.swiperr)}
                    spaceBetween={50}
                    slidesPerView={1} // Số lượng slide hiển thị trên màn hình
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {Packager.map((pk, inx) => (
                        <SwiperSlide className={clsx(style.swiper)} key={inx}>
                            <div className={clsx(style.package)}>
                                <h1 className={clsx(style.title)}>{pk.title}</h1>
                                {pk.options ? (
                                    pk.options.map((item, index) => ( // Thay đổi 'limit' thành 'options'
                                        <div className={clsx(style.package_info)} key={index}>
                                            <span>{item.titleOption}</span>
                                            <li className={clsx(style.package_info_text)}>
                                                {item.descOption.label} {item.descOption.quantityRoom}
                                            </li>
                                            {/* Tiếp tục thêm các mục khác ở đây nếu cần */}
                                        </div>
                                    ))
                                ) : null}
                                <ButtonPackage Packager={pk} />
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
