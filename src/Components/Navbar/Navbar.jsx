import { BiCart, BiUser } from "react-icons/bi";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../ShopContext/ShopContext";
import { useContext } from "react";

const Navbar = ({ isTransparent }) => {
  const { itemAmount } = useContext(ShopContext);
  const navbarStyle = {
    backgroundColor: isTransparent ? "transparent" : "#000",
    color: "#fff",
  };
  return (
    <div>
      <div className="navbar" style={navbarStyle}>
        <div className="logo">
          <Link to="/">
            <h2 style={{ color: "white" }}>Nessy&apos;s Kitchen</h2>
          </Link>
        </div>
        <div className="link">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>About</li>
            <li>Products</li>
          </ul>
        </div>
        <div className="nav_icon_wrapper">
          <Link to="/cart">
            <div className="nav_cart">
              <BiCart className="nav_icon" />
              <p className="nav_cart_amount">{itemAmount}</p>
            </div>
          </Link>
          <BiUser className="nav_icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
