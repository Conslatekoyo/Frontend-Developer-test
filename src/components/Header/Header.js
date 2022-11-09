import "./Header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img className="header_logo" src={logo} alt="search-icon" />
      <div className="header__icon">Artisto</div>

      <div className="header__links">
        <h4>Events</h4>
        <h4>Museum</h4>
        <h4>Arts</h4>
        <h4>Galleries</h4>
        <button className="header__login">Login</button>
        <button className="header__explore">Explore arts</button>
      </div>
    </nav>
  );
};

export default Header;
