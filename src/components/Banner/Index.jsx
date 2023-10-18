import React from 'react'
import style from './style.module.scss'
import clsx from 'clsx'

const Banner = () => {
    return (
        <div className={clsx(style.body)}>
            <h2 >Quản lý khách sạn của bạn của bạn một cách dễ dàng</h2>
        </div>
    )
}

export default Banner