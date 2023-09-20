import React from 'react'
import clsx from 'clsx'
import style from '../../Login/login.module.scss'
const Inputs = (props) => {
    const { type, className, placeholder, onChan, label, text } = props
    return (
        <>
            <input
                type={type}
                className={clsx(style[className])}
                placeholder={placeholder}
                onChange={onChan}
            />
            <label className={clsx(style[label])}>{text}</label>
        </>
    )
}

export default Inputs
