import clsx from 'clsx'
import React from 'react'
import style from '../style.module.scss'
import { Button } from 'antd'

const ButtonPackage = ({ Packager }) => {
    return (
        <div className={clsx(style.button_package)}>
            {Packager.isFreeBtn ? (
                <Button className={clsx(style.button_free)}>{Packager.button}</Button>
            ) : (
                <div className={clsx(style.button_group)}>
                    <Button className={clsx(style.button_buy)}>{Packager.button}</Button>
                    <Button className={clsx(style.button_seemode)}>{Packager.modesee}</Button>
                </div>
            )}
        </div>
    )
}

export default ButtonPackage
