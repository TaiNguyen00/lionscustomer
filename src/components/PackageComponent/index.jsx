import React from 'react'
import clsx from 'clsx'
import style from './style.module.scss'
import ButtonPackage from '../Package/Button/Button'
import ModeIcon from '@mui/icons-material/Mode';
const PackageComponent = ({ pk, inx }) => {
    const VND = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });
    return (
        <div className={clsx(style.package)} key={inx}>
            {pk.isEdit ? (
                <div className={clsx(style.package_title)}>
                    <h2 className={clsx(style.title)}>{pk.title}</h2>
                    <button><ModeIcon /></button>
                </div>
            ) :
                <h2 className={clsx(style.title)}>{pk.title}</h2>
            }
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
    )
}

export default PackageComponent
