import { useState } from "react";
import useForm from "../../hooks/useForm";
import { registerUser, saveUserData } from "../../service/authService";
import PageBanner from "../Shared/PageBanner";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import validateForm from "../../validations/registerValidations";

export default function Register() {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = { username: "", email: "", password: "", rePassword: "" };

  const registerSubmitHandler = async (values) => {
    const validationErrors = validateForm(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const { username, email, password } = values;

      const newUser = await registerUser(email, password);
      await saveUserData(newUser.uid, username, email);

      dispatch(login({ username, email }));

      setErrors({});
      setValues(initialValues);

      alert("Registration successful");
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error.message);
      setErrors({ general: "Failed to register. Please try again." });
    }
  };

  const { values, onChange, onSubmit, setValues } = useForm(registerSubmitHandler, initialValues);

  return (
    <div id="wrapper" className="container">
      <PageBanner pageName="Register" />
      <div className="register-container">
        <div className="register-form">
          <h4 className="title">
            <span className="text">
              <strong>Register</strong> Form
            </span>
          </h4>
          <form onSubmit={onSubmit} className="form-stacked" noValidate>
            <fieldset>
              <div className="control-group">
                <label className="control-label">Username</label>
                <div className="controls">
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="input-xlarge"
                    name="username"
                    onChange={onChange}
                    value={values.username}
                  />
                  {errors.username && <p className="text-danger">{errors.username}</p>}
                </div>
              </div>
              <div className="control-group">
                <label className="control-label">Email address:</label>
                <div className="controls">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input-xlarge"
                    name="email"
                    onChange={onChange}
                    value={values.email}
                  />
                  {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>
              </div>
              <div className="control-group">
                <label className="control-label">Password:</label>
                <div className="controls">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input-xlarge"
                    name="password"
                    onChange={onChange}
                    value={values.password}
                  />
                  {errors.password && <p className="text-danger">{errors.password}</p>}
                </div>
              </div>
              <div className="control-group">
                <label className="control-label">Repeat password:</label>
                <div className="controls">
                  <input
                    type="password"
                    placeholder="Repeat your password"
                    className="input-xlarge"
                    name="rePassword"
                    onChange={onChange}
                    value={values.rePassword}
                  />
                  {errors.rePassword && <p className="text-danger">{errors.rePassword}</p>}
                </div>
              </div>
              {errors.general && (
                <div className="control-group">
                  <p className="text-danger">{errors.general}</p>
                </div>
              )}
              <div className="actions">
                <input
                  tabIndex={9}
                  className="btn btn-inverse large"
                  type="submit"
                  value="Create your account"
                />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
