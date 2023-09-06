import {useState} from "react";
import {useForm} from "react-hook-form";

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
    <div className={styles["register-form"]}>
      <h2 className={styles["h2"]}>Đăng Ký tài khoản</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles["form-group"]}>
          <input
            type="text"
            name="firstName"
            placeholder="Họ"
            {...register("firstName", {
              required: "* Họ không được trống",
            })}
          />
        </div>
        {errors.firstName && (
          <span className={styles["error"]}>{errors.firstName.message}</span>
        )}
        <div className={styles["form-group"]}>
          <input
            type="text"
            name="lastName"
            placeholder="Tên"
            {...register("lastName", {
              required: "* Tên không được trống",
            })}
          />
        </div>
        {errors.lastName && (
          <span className={styles["error"]}>{errors.lastName.message}</span>
        )}
        <div className={styles["form-group"]}>
          <input
            type="text"
            name="userName"
            placeholder="Username"
            {...register("userName", {
              required: "* Username không được trống",
            })}
          />
        </div>
        {errors.userName && (
          <span className={styles["error"]}>{errors.userName.message}</span>
        )}
        <div className={styles["form-group"]}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register("email", {
              required: "* Email không được trống",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "* Email không hợp lệ",
              },
            })}
          />
        </div>
        {errors.email && (
          <span className={styles["error"]}>{errors.email.message}</span>
        )}
        <div className={styles["form-group"]}>
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder="Mật khẩu"
            {...register("password", {
              required: "* Mật khẩu không được trống",
              minLength: {
                value: 6,
                message: "* Mật khẩu phải có ít nhất 6 ký tự",
              },
            })}
          />
          <span
            className={styles["toggle-password"]}
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </span>
        </div>
        {errors.password && (
          <span className={styles["error"]}>{errors.password.message}</span>
        )}
        <div className={styles["form-group"]}>
          <input
            type={passwordVisible_repeat ? "text" : "password"}
            name="repeat_password"
            placeholder=" Nhập lại Mật khẩu"
            {...register("repeat_password", {
              required: "* Nhập lại Mật khẩu không được trống",
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
            className={styles["toggle-password"]}
            onClick={togglePasswordVisibility_repeat}
          >
            {passwordVisible_repeat ? (
              <VisibilityOffIcon />
            ) : (
              <VisibilityIcon />
            )}
          </span>
        </div>
        {errors.repeat_password && (
          <span className={styles["error"]}>
            {errors.repeat_password.message}
          </span>
        )}
        <div className={styles["form-group"]}>
          <input
            className="submit_register"
            type="submit"
            name="submit"
            value="Tạo tài khoản"
          />
        </div>
        <p className={styles["fuilt_register"]}>
          Chưa có tài khoản Lions? <Link to="">Đăng Nhập ngay</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
