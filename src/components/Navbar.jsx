import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar ">
        <div className="flex-1">
          <a className="normal-case text-xl">Doctors Portal</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="appointment">Appoinment</Link>
            </li>
            <li>
              <a>Reviews</a>
            </li>
            <li>
              <Link to="contact">Contact Us </Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
