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

      // Đặt giá trị boolean ở đây, ví dụ: true
    },
  ];

  return (
    <>
      {/* danh cho pc */}
      <div className={clsx(style.container)}>
        {Packager.map((pk, inx) => (
          <div className={clsx(style.package)} key={inx}>
            <h2 className={clsx(style.title)}>{pk.title}</h2>
            {pk.oldPrice ? (
              <h3 className={clsx(style.oldPrice)}>
                {VND.format(pk.oldPrice)}
              </h3>
            ) : (
              ""
            )}
            {pk.price ? (
              <h3 className={clsx(style.newPrice)}>
                {VND.format(pk.price)}{" "}
                <span style={{ color: "#000", fontSize: "1rem" }}>/ Tháng</span>
              </h3>
            ) : (
              ""
            )}
            {pk.price ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className={clsx(style.discount)}>Giảm 50%</span>
              </div>
            ) : (
              ""
            )}
            {pk.options
              ? pk.options.map(
                  (
                    item,
                    index // Thay đổi 'limit' thành 'options'
                  ) => (
                    <div className={clsx(style.package_info)} key={index}>
                      <span>
                        {item.iCon}
                        {item.titleOption}
                      </span>
                      <li className={clsx(style.package_info_text)}>
                        {item.descOption.label} {item.descOption.quantityRoom}
                      </li>
                      {/* Tiếp tục thêm các mục khác ở đây nếu cần */}
                    </div>
                  )
                )
              : null}
            <ButtonPackage Packager={pk} />
          </div>
        ))}
      </div>
      {/* ket thuc */}

      {/* danh cho mobie */}
      <div className={clsx(style.container_mobie)}>
        <div className={clsx(style.more_option)}>
          <h2>Đa Dạng gói dịch vụ</h2>
          <button>Thêm lựa chọn</button>
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
                <div className={clsx(style.package)}>
                  <h2 className={clsx(style.title)}>{pk.title}</h2>
                  {pk.oldPrice ? (
                    <h3 className={clsx(style.oldPrice)}>
                      {VND.format(pk.oldPrice)}
                    </h3>
                  ) : (
                    ""
                  )}
                  {pk.price ? (
                    <h3 className={clsx(style.newPrice)}>
                      {VND.format(pk.price)}{" "}
                      <span style={{ color: "#000", fontSize: "1rem" }}>
                        / Tháng
                      </span>
                    </h3>
                  ) : (
                    ""
                  )}
                  {pk.price ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span className={clsx(style.discount)}>Giảm 50%</span>
                    </div>
                  ) : (
                    ""
                  )}
                  {pk.options
                    ? pk.options.map(
                        (
                          item,
                          index // Thay đổi 'limit' thành 'options'
                        ) => (
                          <div className={clsx(style.package_info)} key={index}>
                            <span>
                              {item.iCon}
                              {item.titleOption}
                            </span>
                            <li className={clsx(style.package_info_text)}>
                              {item.descOption.label}{" "}
                              {item.descOption.quantityRoom}
                            </li>
                            {/* Tiếp tục thêm các mục khác ở đây nếu cần */}
                          </div>
                        )
                      )
                    : null}
                  <ButtonPackage Packager={pk} />
                </div>
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
