import React from 'react'
import style from './style.module.scss'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const Functional = () => {
    const Functionals = [
        {
            id: 0,
            title: "Quản lý đơn đặt phòng",
            text_funcional: `Cung cấp chức năng quản 
            lý đặt phòng trực tuyến cho nhà quản lý khách sạn,
             bao gồm thông tin phòng trống, giá cả, quản lý đặt phòng,
              xác nhận đặt phòng và gửi thông báo cho khách hàng.`
        },
        {
            id: 1,
            title: "Quản lý khách hàng",
            text_funcional: `Cho phép nhà quản lý khách sạn quản lý thông tin khách hàng,
             bao gồm danh sách khách hàng, 
             lịch sử đặt phòng, thông tin liên lạc, vv...`
        },
        {
            id: 2,
            title: "Quản lý nhân viên",
            text_funcional: `Cung cấp chức năng quản lý nhân viên cho nhà quản lý khách sạn, bao gồm việc tạo và quản lý thông tin nhân viên, lịch làm việc, quyền hạn, vv...`
        },
        {
            id: 3,
            title: "Báo cáo thống kê",
            text_funcional: `Cung cấp báo cáo và thống kê chi tiết về hoạt động khách sạn, bao gồm doanh thu, tỷ lệ đầy phòng, đánh giá của khách hàng, vv...`
        },
        {
            id: 4,
            title: "Hỗ trợ và tương tác",
            text_funcional: `Cung cấp chức năng hỗ trợ và tương tác trực tuyến, cho phép nhà quản lý khách sạn giao tiếp với nhân viên hỗ trợ để giải quyết các vấn đề hoặc yêu cầu.`
        },
        {
            id: 5,
            title: "Hệ thống đánh giá",
            text_funcional: `Cung cấp hệ thống đánh giá và nhận xét cho khách hàng để nhà quản lý khách sạn có thể thu thập phản hồi và cải thiện chất lượng dịch vụ.`
        },

    ];


    return (
        <>
            {/* danh cho pc */}
            <div className={clsx(style.body)}>
                <h1 className={clsx(style.title_body)}>Các chức năng chính có trong các gói</h1>
                <div className={clsx(style.container)}>
                    {Functionals.map((ft) => (
                        <div className={clsx(style.functional)}>
                            <h1 className={clsx(style.title)}>{ft.title}</h1>
                            <div className={clsx(style.functional_text)}>
                                <p className={clsx(style.text)}>{ft.text_funcional}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* ket thuc */}


            {/* danh cho mobie */}
            <div className={clsx(style.body_mobie)}>
                <h1 className={clsx(style.title_body)}>Các chức năng chính </h1>
                <div className={clsx(style.container_mobie)}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1} // Số lượng slide hiển thị trên màn hình
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {Functionals.map((ft) => (
                            <SwiperSlide className={clsx(style.swiper)} >
                                <div className={clsx(style.functional)}>
                                    <h1 className={clsx(style.title)}>{ft.title}</h1>
                                    <div className={clsx(style.functional_text)}>
                                        <p className={clsx(style.text)}>{ft.text_funcional}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            {/* ket thuc */}
        </>
    )
}

export default Functional
