import clsx from 'clsx'
import React from 'react'
import style from '../style.module.scss'
import { Button } from 'antd'

const ButtonPackage = ({ Packages }) => {
    return (
        <div className={clsx(style.button_package)}>
            {Packages.btn ? (
                <Button className={clsx(style.button_free)}>{Packages.button}</Button>
            ) : (
                <div className={clsx(style.button_group)}>
                    <Button className={clsx(style.button_buy)}>{Packages.button}</Button>
                    <Button className={clsx(style.button_seemode)}>{Packages.modesee}</Button>
                </div>
            )}
        </div>
    )
}

export default ButtonPackage
