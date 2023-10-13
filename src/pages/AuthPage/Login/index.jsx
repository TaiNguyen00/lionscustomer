import React, { useState } from 'react';
import clsx from 'clsx';
import style from './login.module.scss'
import img from '~/assets/images/Google-Symbol.jpg'
import logo from '~/assets/images/LOGO-LIONS 1.png'
import { useForm } from 'react-hook-form';


const Login = () => {
  const [isSubmit, setIsSubmit] = useState(false)
  const { register, formState: { errors }, handleSubmit, setError } = useForm();
  const user = [
    {
      emaill: 'trunghuu@gmail.com',
      passwordd: "12322222"
    }
  ]


  const onSubmit = (data) => {
    const { email, password } = data;
    const { emaill, passwordd } = user[0];
    const userMatch = user.find((user) => user.emaill === email && user.passwordd === password);
    if (email === '' || password === '') {
      setError('email', { message: 'Vui long khong de trong ' });
    }
    if (userMatch) {
      // Đăng nhập thành công
      alert("Đăng nhập thành công");
    } else {
      // Hiển thị thông báo lỗi
      setError('email', { message: 'Email hoặc mật khẩu không đúng' });
    }
  }

  // Hàm xử lý sự kiện khi trường email thay đổi
  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    if (emailValue === '') {
      setIsSubmit(false)
      setError('email',
        { message: '* Vui lòng điền thông tin' }
      );
    } else if (!emailValue.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i)) {
      setIsSubmit(true)

      setError('email', {
        message: '* Vui lòng điền Email(Vd: lions@gmail.com )'
      });
    } else {
      setIsSubmit(true)
      setError('email'),
        null
    }
  };

  // Hàm xử lý sự kiện khi trường password thay đổi
  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    if (passwordValue === '') {
      setIsSubmit(true)
      setError('password',
        { message: '* Vui lòng điền thông tin' })
    }
    else if (passwordValue.length < 6 || passwordValue.length > 20) {
      setIsSubmit(false)

      setError('password', {
        message: '* Mật khẩu phải từ 6 đến 20 ký tự'
      });
    } else {
      setIsSubmit(true)
      setError('password', null);
    }
  };


  return (
    <div className={clsx(style.body)}>
      <div className={clsx(style.children)}>
        <div className={clsx(style.logo)}>
          <img src={logo} alt="" />
        </div>
        <h2 className={clsx(style.text)}>Đăng nhập </h2>
        <h4 className={clsx(style.h4)}>Xin chào, vui lòng điền thông tin đăng nhập</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={clsx(style.from)}>
            {/* Trường nhập email */}
            <div className={clsx(style.box)}>
              <div className={clsx(style.from_div)}>

                <input type='email'{...register("email")} className={clsx(style.input)} placeholder=' ' onChange={handleEmailChange} />
                <label className={clsx(style.label)}>Email:</label>


              </div>
              {errors.email && <h5 className={clsx(style.message)}>{errors.email.message}</h5>}
            </div>

            {/* Trường nhập mật khẩu */}
            <div className={clsx(style.box)}>
              <div className={clsx(style.from_div)}>

                <input type='password'{...register("password")} className={clsx(style.input)} placeholder=' ' onChange={handlePasswordChange} />
                <label className={clsx(style.label)}>Mật khẩu:</label>


              </div>
              {errors.password && <h5 className={clsx(style.message)}>{errors.password.message}</h5>}
            </div>

            <h5 className={clsx(style.qmk)}><a href="">Quên mật khẩu</a></h5>
          </div>

          <div className={clsx(style.button_ground)}>
            <button className={clsx(style.button)} type="submit" disabled={!isSubmit} >Đăng nhập</button>
          </div>
        </form>

        <h4 className={clsx(style.or)} >Hoặc</h4>
        <div className={clsx(style.button_ground)}>
          <button className={clsx(style.button_daf)} >
            <img className={clsx(style.button_daf_img)} src={img} alt="" />
            Đăng nhập bằng Google</button>
        </div>
        <h5 className={clsx(style.register)}>Chưa có tài khoản Lions? <a href="">Đăng kí ngay</a></h5>

      </div>
    </div>
  );
};

export default Login;

