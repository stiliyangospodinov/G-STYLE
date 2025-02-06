import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { getUserData, loginUser } from "../../service/authService";
import PageBanner from "../Shared/PageBanner";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import validateForm from "../../validations/loginValidations";

export default function Login() {

  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const initialValues = {email: '', password:''};

  const loginSubmitHandler = async(values) => {
    const validationErrors = validateForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const { email, password } = values;
    try{
      const loggedInUser = await loginUser(email, password);
      const userData = await getUserData(loggedInUser.uid);
      console.log("User logged in: ",loggedInUser);
      dispatch(login({ username: userData.username, email }));
      setErrors({});
      setValues(initialValues);
      alert("Login successful")
      navigate('/');
    }catch(error){
      console.error("Login error:", error.message);
      setErrors({ general: "Failed to login. Please try again." });
    }
  }

  const{values, onChange, onSubmit, setValues} = useForm(loginSubmitHandler, initialValues);

  return (
    <div id="wrapper" className="container">
      <PageBanner pageName="Login" />
    <div className="login-container">
      <div className="login-form">
        <h4 className="title">
          <span className="text">
            <strong>Login</strong> Form
          </span>
        </h4>
        <form onSubmit={onSubmit} noValidate>
          <input type="hidden" name="next" defaultValue="/" />
          <fieldset>
            <div className="control-group">
              <label className="control-label">Email</label>
              <div className="controls">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  id="email"
                  className="input-xlarge"
                  name = "email"
                  onChange={onChange}
                  value={values.email}
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
            </div>
            <div className="control-group">
              <label className="control-label">Password</label>
              <div className="controls">
                <input
                  type="password"
                  placeholder="Enter your password"
                  id="password"
                  className="input-xlarge"
                  name = "password"
                  onChange={onChange}
                  value={values.password}
                />
                {errors.password && <p className="text-danger">{errors.password}</p>}
              </div>
            </div>
            {errors.general && (
                <div className="control-group">
                  <p className="text-danger">{errors.general}</p>
                </div>
              )}
            <div className="control-group">
              <input
                tabIndex={3}
                className="btn btn-inverse large"
                type="submit"
                defaultValue="Sign into your account"
                value="Sign in"
              />
              <hr />
              <p className="reset">
                Recover your{" "}
                <a
                  tabIndex={4}
                  href="#"
                  title="Recover your username or password"
                >
                  username or password
                </a>
              </p>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
</div>
  );
}
