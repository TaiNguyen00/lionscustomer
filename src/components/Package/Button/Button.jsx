import clsx from 'clsx'
import React from 'react'
import style from '../style.module.scss'

const ButtonPackage = ({ Packager }) => {
    return (
        <div className={clsx(style.button_package)}>
            {Packager.isFreeBtn ? (
                <button className={clsx(style.button_free)}>{Packager.button}</button>
            ) : (
                <div className={clsx(style.button_group)}>
                    <button className={clsx(style.button_buy)}>{Packager.button}</button>
                    <button className={clsx(style.button_seemode)}>{Packager.modesee}</button>
                </div>
            )}
        </div>
    )
}

export default ButtonPackage
