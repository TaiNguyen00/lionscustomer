import clsx from 'clsx'
import style from './style.module.scss'
import ButtonPackage from './Button/Button'
import { Swiper, SwiperSlide } from 'swiper/react';
import CheckIcon from '@mui/icons-material/Check';

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
                    titleOption: "Quản lý đơn đặt phòng",
                    propertiesOptions: '3 Phong',
                },
                {
                    id: 0,
                    titleOption: "Quản lý nhân sự ",
                    propertiesOptions: '3 Phong',
                },
            ],
            isFreeBtn: true, // Đặt giá trị boolean ở đây, ví dụ: true
        },
        {
            // title gói
            id: 3,
            title: "VIP",
            imgUrlPakage: "imgsUrl",
            button: 'Mua',
            modesee: 'Xem thêm',
            interest: [
                {
                    id: 0,
                    price: 1000000,
                    sale: 40
                }
            ],
            options: [
                {
                    id: 0,
                    titleOption: "Quản lý đơn đặt phòng",
                    propertiesOptions: '3 Phong',
                },
                {
                    id: 0,
                    titleOption: "Quản lý nhân sự ",
                    propertiesOptions: '3 Phong',
                },
            ],
            isFreeBtn: false, // Đặt giá trị boolean ở đây, ví dụ: true
        },
        {
            // title gói
            id: 4,
            title: "VIP PRO PRO",
            imgUrlPakage: "imgsUrl",
            button: 'Mua',
            modesee: 'Xem thêm',
            interest: [
                {
                    id: 0,
                    price: 50000000,
                    sale: 20
                }
            ],
            options: [
                {
                    id: 0,
                    titleOption: "Quản lý đơn đặt phòng",
                    propertiesOptions: '3 Phong',
                },
                {
                    id: 0,
                    titleOption: "Quản lý nhân sự ",
                    propertiesOptions: '3 Phong',
                },
            ],
            isFreeBtn: false, // Đặt giá trị boolean ở đây, ví dụ: true
        }

        ,
        {
            // title gói
            id: 2,
            title: "VIP PRO",
            imgUrlPakage: "imgsUrl",
            button: 'Mua',
            modesee: 'Xem thêm',
            interest: [
                {
                    id: 0,
                    price: 1000000,
                    sale: 50
                }
            ],
            options: [
                {
                    id: 0,
                    titleOption: "Quản lý đơn đặt phòng",
                    propertiesOptions: '3 Phong',
                },
                {
                    id: 0,
                    titleOption: "Quản lý nhân sự ",
                    propertiesOptions: '3 Phong',
                },
            ],
            isFreeBtn: false, // Đặt giá trị boolean ở đây, ví dụ: true
        }


    ];

    return (
        <>
            {/* danh cho pc */}
            <div className={clsx(style.body)}>
                <div className={clsx(style.container)}>
                    {Packager.map((pk, inx) => (
                        <div key={pk} className={clsx(style.package)}>
                            <h1 className={clsx(style.title)}>{pk.title}</h1>
                            {pk.interest ? (
                                pk.interest.map((inr) => (

                                    <div className={clsx(style.package_interest)} key={inr.id}>

                                        <p className={clsx(style.interest_price)}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(inr.price)}</p>
                                        <p><span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(inr.price - (inr.price * inr.sale / 100))}</span> / tháng</p>
                                        <div className={clsx(style.sale)}>
                                            <h4>Giảm {inr.sale}%</h4>
                                        </div>
                                    </div>
                                ))

                            ) : null}


                            {pk.options ? (
                                pk.options.map((item) => (
                                    <div className={clsx(style.package_info)} key={item.id}>
                                        <div>
                                            <CheckIcon className={clsx(style.package_check)} />
                                        </div>
                                        <div className={clsx(style.package_option)} >
                                            <span>{item.titleOption}:
                                                <span className={clsx(style.option)}>{item.propertiesOptions}</span></span>
                                        </div>
                                    </div>
                                ))
                            ) : null}
                            <ButtonPackage Packager={pk} />
                        </div>
                    ))}
                </div>
            </div>
            {/* ket thuc */}

            {/* danh cho mobie */}
            < div className={clsx(style.container_mobie)}>
                <Swiper className={clsx(style.swiperr)}
                    spaceBetween={50}
                    slidesPerView={1} // Số lượng slide hiển thị trên màn hình
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {Packager.map((pk, inx) => (
                        <SwiperSlide className={clsx(style.swiper)} key={inx}>
                            <div key={pk} className={clsx(style.package)}>
                                <h1 className={clsx(style.title)}>{pk.title}</h1>
                                {pk.interest ? (
                                    pk.interest.map((inr) => (

                                        <div className={clsx(style.package_interest)} key={inr.id}>

                                            <p className={clsx(style.interest_price)}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(inr.price)}</p>
                                            <p><span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(inr.price - (inr.price * inr.sale / 100))}</span> / tháng</p>
                                            <div className={clsx(style.sale)}>
                                                <h4>Giảm {inr.sale}%</h4>
                                            </div>
                                        </div>
                                    ))

                                ) : null}


                                {pk.options ? (
                                    pk.options.map((item) => (
                                        <div className={clsx(style.package_info)} key={item.id}>
                                            <div>
                                                <CheckIcon className={clsx(style.package_check)} />
                                            </div>
                                            <div className={clsx(style.package_option)} >
                                                <span>{item.titleOption}:
                                                    <span className={clsx(style.option)}>{item.propertiesOptions}</span></span>
                                            </div>
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
