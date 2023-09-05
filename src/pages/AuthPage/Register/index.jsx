import {useState} from "react";
import styles from "./Register.module.scss";
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible_repeat, setPasswordVisible_repeat] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordVisibility_repeat = () => {
    setPasswordVisible_repeat(!passwordVisible_repeat);
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatpassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    repeatpassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };
  // const toggleShowPassword = () => {
  //   setShowPassword((prevShowPassword) => !prevShowPassword);
  // };
  const validateField = (fieldName, value) => {
    let errorMessage = "";

    switch (fieldName) {
      case "name":
        errorMessage =
          value.trim() === "" ? " * Tên người dùng không được trống" : "";
        break;
      case "username":
        errorMessage =
          value.trim() === "" ? " * Tên đăng nhập không được trống" : "";
        break;
      case "firstname":
        errorMessage = value.trim() === "" ? " * Họ tên không được trống" : "";
        break;
      case "email":
        errorMessage = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : " * Email không hợp lệ";
        break;
      case "password":
        errorMessage =
          value.length < 6 ? " * Mật khẩu phải có ít nhất 6 ký tự" : "";
        break;
      case "repeatpassword":
        if (value !== formData.password) {
          errorMessage = " * Mật khẩu không trùng khớp";
        } else if (value.length < 6) {
          errorMessage = " * Mật khẩu phải có ít nhất 6 ký tự";
        } else {
          errorMessage = "";
        }
        break;
      default:
        break;
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMessage,
    }));
  };

  return (
    <div className={styles["Register"]}>
      <form onSubmit={handleSubmit}>
        <h1 className={styles["h1"]}>Đăng ký tài khoản</h1>
        <div className={styles["form-group"]}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Tên:"
            required
          />
          <br />
        </div>
        {formErrors.name && (
          <span className={styles["error"]}>{formErrors.name}</span>
        )}
        <div className={styles["form-group"]}>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            placeholder="Họ:"
            required
          />
          <br />
        </div>
        {formErrors.firstname && (
          <span className={styles["error"]}>{formErrors.firstname}</span>
        )}
        <div className={styles["form-group"]}>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Username:"
            required
          />
          <br />
        </div>
        {formErrors.username && (
          <span className={styles["error"]}>{formErrors.username}</span>
        )}

        <div className={styles["form-group"]}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email:"
            required
          />
          <br />
        </div>

        {formErrors.email && (
          <span className={styles["error"]}>{formErrors.email}</span>
        )}
        <div className={styles["form-group"]}>
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password:"
          />

          <span
            className={styles["toggle-password"]}
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
          </span>
        </div>

        {formErrors.password && (
          <span className={styles["error"]}>{formErrors.password}</span>
        )}
        <div className={styles["form-group"]}>
          <input
            type={passwordVisible_repeat ? "text" : "password"}
            name="repeatpassword"
            value={formData.repeatpassword}
            onChange={handleInputChange}
            placeholder="Repeat password:"
            required
          />
          <span
            className={styles["toggle-password"]}
            onClick={togglePasswordVisibility_repeat}
          >
            <FontAwesomeIcon
              icon={passwordVisible_repeat ? faEyeSlash : faEye}
            />
          </span>
        </div>
        {formErrors.repeatpassword && (
          <span className={styles["error"]}>{formErrors.repeatpassword}</span>
        )}

        <button type="submit">Tạo tài khoản</button>
        <p className={styles["content_login"]}>
          Chưa có tài khoản Lions? <Link to="/login">Đăng Nhập ngay</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
