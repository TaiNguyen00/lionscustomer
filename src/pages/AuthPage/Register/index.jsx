import {useState} from "react";
import {useForm} from "react-hook-form";
import clsx from "clsx";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import styles from "./Register.module.scss";
import {Link} from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible_repeat, setPasswordVisible_repeat] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordVisibility_repeat = () => {
    setPasswordVisible_repeat(!passwordVisible_repeat);
  };
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <div className={clsx(styles.register_form)}>
      <h2 className={clsx(styles.h2)}>Đăng Ký tài khoản</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={clsx(styles.form_group)}>
          <div className={clsx(styles.form_control)}>
            <input
              type="text"
              name="firstName"
              placeholder="Họ"
              {...register("firstName", {
                required: "* Họ không được trống",
              })}
            />
          </div>
          <div className={clsx(styles.register_error)}>
            {errors.firstName && (
              <span className={clsx(styles.error)}>
                {errors.firstName.message}
              </span>
            )}
          </div>
        </div>
        <div className={clsx(styles.form_group)}>
          <div className={clsx(styles.form_control)}>
            <input
              type="text"
              name="lastName"
              placeholder="Tên"
              {...register("lastName", {
                required: "* Tên không được trống",
              })}
            />
          </div>
          <div className={clsx(styles.register_error)}>
            {errors.lastName && (
              <span className={clsx(styles.error)}>
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>
        <div className={clsx(styles.form_group)}>
          <div className={clsx(styles.form_control)}>
            <input
              type="text"
              name="userName"
              placeholder="Username"
              {...register("userName", {
                required: "* Username không được trống",
              })}
            />
          </div>
          <div className={clsx(styles.register_error)}>
            {errors.userName && (
              <span className={clsx(styles.error)}>
                {errors.userName.message}
              </span>
            )}
          </div>
        </div>
        <div className={clsx(styles.form_group)}>
          <div className={clsx(styles.form_control)}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: "* Vui lòng diền Email hợp lệ (Vd: lions@gmail.com)",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "* Email không hợp lệ",
                },
              })}
            />
          </div>
          <div className={clsx(styles.register_error)}>
            {errors.email && (
              <span className={clsx(styles.error)}>{errors.email.message}</span>
            )}
          </div>
        </div>
        <div className={clsx(styles.form_group)}>
          <div className={clsx(styles.form_control)}>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Mật khẩu"
              {...register("password", {
                required: "* Vui lòng điện mật khẩu",
                minLength: {
                  value: 6,
                  message: "* Mật khẩu phải có ít nhất 6 ký tự",
                },
              })}
            />
            <span
              className={clsx(styles.toggle_password)}
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>
          <div className={clsx(styles.register_error)}>
            {errors.password && (
              <span className={clsx(styles.error)}>
                {errors.password.message}
              </span>
            )}
          </div>
        </div>
        <div className={clsx(styles.form_group)}>
          <div className={clsx(styles.form_control)}>
            <input
              type={passwordVisible_repeat ? "text" : "password"}
              name="repeat_password"
              placeholder=" Nhập lại Mật khẩu"
              {...register("repeat_password", {
                required: "* Vui lòng nhập lại Mật khẩu ",
                minLength: {
                  value: 6,
                  message: "* Mật khẩu phải có ít nhất 6 ký tự",
                },
                validate: (value) =>
                  value === getValues("password") ||
                  "* Mật khẩu không trùng khớp",
              })}
            />
            <span
              className={clsx(styles.toggle_password)}
              onClick={togglePasswordVisibility_repeat}
            >
              {passwordVisible_repeat ? (
                <VisibilityOffIcon />
              ) : (
                <VisibilityIcon />
              )}
            </span>
          </div>
          <div className={clsx(styles.register_error)}>
            {errors.repeat_password && (
              <span className={clsx(styles.error)}>
                {errors.repeat_password.message}
              </span>
            )}
          </div>
        </div>
        <div className={clsx(styles.form_group)}>
          <div className={clsx(styles.form_control)}>
            {/* <input
            className="submit_register"
            type="submit"
            name="submit"
            value="Tạo tài khoản"
          /> */}
            <button className={clsx(styles.button)}>tạo tài khoản</button>
          </div>
        </div>
        <p className={clsx(styles.fuilt_register)}>
          Chưa có tài khoản Lions? <Link to="">Đăng Nhập ngay</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
