import Logo from "../../assets/Logo.png";
import MenuIcon from "../../assets/Menu.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>Jaskaran Singh</h1>
      </div>
      <div className="header-right">
        <div className="menu">
          <a href="/">Home</a>
          <a href="/">Projects</a>
          <a href="/">Skills</a>
          <a href="/">Publications</a>
          <a href="/">Contact</a>
        </div>
        <div className="menu-mobile">
          <img src={MenuIcon} alt="Menu Icon" className="menu-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
