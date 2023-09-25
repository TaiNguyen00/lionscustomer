import clsx from 'clsx'
import React from 'react'
import style from '../style.module.scss'
import { Button } from 'antd'

const ButtonPackage = ({ Packages }) => {
    return (
        <div className={clsx(style.button_package)}>
            {Packages.btn ? (
                <Button className={clsx(style.button_free)}>Dùng thử</Button>
            ) : (
                <div className={clsx(style.button_group)}>
                    <Button className={clsx(style.button_buy)}>Mua</Button>
                    <Button className={clsx(style.button_seemode)}>Xem thêm</Button>
                </div>
            )}
        </div>
    )
}

export default ButtonPackage
