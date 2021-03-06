import companyLogo from "../Assets/logo.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <li className="navbar-brand">
            <img
              src={companyLogo}
              alt="BigCo Inc. logo"
              width="40"
              className="d-inline-block align-text-top"
            />
            <div className="LogoTitle">Medical Organization</div>
          </li>
          <form className="d-flex">
            <a className="link me-2" href="/">
              Home
            </a>
            <a className="link me-2" href="/Payment">
            Payment
            </a>
            <a className="link me-2" href="https://google-nearby-n2ohmjy09-yousefkamal340.vercel.app/googleNearBy.html">
              Maps NearBy
            </a>
            <a className="link me-2" href="/account">
              Sign in / out
            </a>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
