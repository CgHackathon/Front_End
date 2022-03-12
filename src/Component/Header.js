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
            <div className="LogoTitle">Banking Suit</div>
          </li>
          <form className="d-flex">
            <a className="link me-2" href="/">
              Home
            </a>
            {/* <a className="link" href="Users/youss/Desktop/Cegedim/Front_End/src/googleNearBy.html"> 
              NearBy Pharmacies
            </a> */}
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
