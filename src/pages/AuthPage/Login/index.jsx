import React, { useState } from 'react';
import clsx from 'clsx';
import style from './login.module.scss'
import { Button } from 'antd';
import img from '../../../assets/images/Google-Symbol.jpg'
import { useForm } from 'react-hook-form';
import Inputs from './Input/Inputs';

const Login = () => {
  const { register, formState: { errors }, handleSubmit, setError } = useForm();

  // Hàm xử lý sự kiện khi trường email thay đổi
  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    if (emailValue === '') {
      setError('email', null);
    } else if (!emailValue.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i)) {
      setError('email', {
        message: 'Email không hợp lệ'
      });
    } else {
      setError('email', null);
    }
  };

  // Hàm xử lý sự kiện khi trường password thay đổi
  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    if (passwordValue === '') {
      setError('password', null)
    }
    else if (passwordValue.length < 6 || passwordValue.length > 20) {
      setError('password', {
        message: 'Password phải từ 6 đến 20 ký tự'
      });
    } else {
      setError('password', null);
    }
  };

  const onSubmit = (data) => console.log(data);

  return (
    <div className={clsx(style.body)}>
      <div className={clsx(style.children)}>
        <h2 className={clsx(style.text)}>Đăng Nhập </h2>
        <h4 className={clsx(style.h4)}>Xin chào, vui lòng điền vào thông tin đăng nhập</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={clsx(style.from)}>
            {/* Trường nhập email */}
            <div className={clsx(style.box)}>
              <div className={clsx(style.from_div)}>
                <Inputs type='email' className='input' placeholder=' ' onChan={handleEmailChange} label='label' text='Email' />
              </div>
              {/* Thông báo lỗi cho trường email */}
              {errors.email && <h5 className={clsx(style.message)}>{errors.email.message}</h5>}
            </div>

            {/* Trường nhập mật khẩu */}
            <div className={clsx(style.box)}>

              <div className={clsx(style.from_div)}>
                <Inputs type='password' className='input' placeholder=' ' onChan={handlePasswordChange} label='label' text='Password' />
              </div>
              {/* Thông báo lỗi cho trường mật khẩu */}
              {errors.password && <h5 className={clsx(style.message)}>{errors.password.message}</h5>}
            </div>
            {/* Quên mật khẩu */}
            <h5 className={clsx(style.qmk)}><a href="">Quên mật khẩu</a></h5>
          </div>

          <div className={clsx(style.button_ground)}>
            <button className={clsx(style.button)} type="submit">Dang nhâp</button>
          </div>
        </form>

        <h4 style={{ textAlign: 'center', color: ' #5c5555', fontWeight: 400, }}>Hoac</h4>
        <div className={clsx(style.button_ground)}>
          <Button className={clsx(style.button_daf)} >
            <img className={clsx(style.button_daf_img)} src={img} alt="" />
            Đăng nhập bằng Google</Button>
        </div>
        <h5 className={clsx(style.register)}>Chưa có tài khoản Lions? <a href="">Đăng kí ngay</a></h5>

      </div>
    </div>
  );
};

export default Login;

