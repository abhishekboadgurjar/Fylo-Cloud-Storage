import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="header">
        <a href="">Features</a>
        <a href="">Team</a>
        <a href="">Sign In</a>
      </div>
    </div>
  );
};

export default Navbar;
