import LoginForm from "../Shared/LoginForm";
import PageBanner from "../Shared/PageBanner";
export default function Login() {
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
          <LoginForm navigateTo={'/'}/>
      </div>
    </div>
</div>
  );
}
