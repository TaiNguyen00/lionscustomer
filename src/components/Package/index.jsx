import clsx from "clsx";
import style from "./style.module.scss";
import ButtonPackage from "./Button/Button";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CheckIcon from "@mui/icons-material/Check";
// Import Swiper styles
import "swiper/css";
import PackageComponent from "../PackageComponent";

const Package = () => {
  // format number
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const Packager = [
    {
      // title gói
      id: 0,
      title: "Miễn phí",
      imgUrlPakage: "imgsUrl",
      button: "Dùng thử",

      options: [
        {
          id: 0,
          iCon: <CheckIcon fontSize="medium" />,
          titleOption: "Quản lý đơn đặt phòng.",
          descOption: {
            label: "Số lượng phòng quản lý của gói này là",
            quantityRoom: 8,
          },
        },
        {
          id: 1,
          iCon: <CheckIcon fontSize="medium" />,
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
      button: "Mua",
      modesee: "Xem thêm",
      price: 5000000,
      oldPrice: 10500000,
      options: [
        {
          id: 0,
          iCon: <CheckIcon fontSize="medium" />,
          titleOption: "Quản lý đơn đặt phòng.",
          descOption: {
            label: "Số lượng phòng quản lý của gói này là",
            quantityRoom: 8,
          },
        },
        {
          id: 1,
          iCon: <CheckIcon fontSize="medium" />,
          titleOption: "Quản lý nhân sự.",
          descOption: {
            label: "Số lượng phòng quản lý của gói này là",
            quantityRoom: 6,
          },
        },
        {
          id: 3,
          iCon: <CheckIcon fontSize="medium" />,
          titleOption: "Quản lý trạng thái phòng.",
          descOption: {
            label: "Số lượng phòng quản lý của gói này là",
            quantityRoom: 4,
          },
        },
      ],
      isFreeBtn: false, // Đặt giá trị boolean ở đây, ví dụ: true
      // Đặt giá trị boolean ở đây, ví dụ: true
    },
    {
      // title gói
      id: 2,
      title: "Vip 2",
      imgUrlPakage: "imgsUrl",
      button: "Mua",
      modesee: "Xem thêm",
      price: 5000000,
      oldPrice: 10500000,
      options: [
        {
          id: 0,
          iCon: <CheckIcon fontSize="medium" />,
          titleOption: "Quản lý đơn đặt phòng.",
          descOption: {
            label: "Số lượng phòng quản lý của gói này là",
            quantityRoom: 8,
          },
        },
        {
          id: 1,
          iCon: <CheckIcon fontSize="medium" />,
          titleOption: "Quản lý nhân sự.",
          descOption: {
            label: "Số lượng phòng quản lý của gói này là",
            quantityRoom: 6,
          },
        },
        {
          id: 3,
          iCon: <CheckIcon fontSize="medium" />,
          titleOption: "Quản lý trạng thái phòng.",
          descOption: {
            label: "Số lượng phòng quản lý của gói này là",
            quantityRoom: 7,
          },
        },
      ],
      isFreeBtn: false, // Đặt giá trị boolean ở đây, ví dụ: true
      isEdit: true
      // Đặt giá trị boolean ở đây, ví dụ: true
    },
  ];

  return (
    <>
      {/* danh cho pc */}
      <div className={clsx(style.package_wrapper)}>
        <div className={clsx(style.overLay)}>
          <div className={clsx(style.more_option)}>
            <h2>Lựa chọn gói dịch vụ thông minh</h2>
            <button>Thêm lựa chọn</button>
          </div>
          <div className={clsx(style.container)}>
            {Packager.map((pk, inx) => (
              <PackageComponent inx={inx} pk={pk} />
            ))}
          </div>
        </div>
      </div>
      {/* ket thuc */}

      {/* danh cho mobie */}
      <div className={clsx(style.container_mobie)}>
        <div className={clsx(style.more_option)}>
          <h2>Đa Dạng gói dịch vụ</h2>
          <button className={clsx(style.more_opt_button)}>Thêm lựa chọn</button>
        </div>
        <div className={clsx(style.content_swipper)}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {Packager.map((pk, inx) => (
              <SwiperSlide className={clsx(style.swiper)} key={inx}>
                <PackageComponent pk={pk} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* ket thuc */}
    </>
  );
};

export default Package;
