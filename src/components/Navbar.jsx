import { Link, useNavigate } from "react-router-dom";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
const Navbar = () => {
  const [LoginUser] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const navigate = useNavigate();
  const logOut = () => {
    signOut();
    navigate("/");
  };
  return (
    <div className="container mx-auto">
      <div className="navbar ">
        <div className="flex-1">
          <Link to="/" className="normal-case text-xl">
            Doctors Portal
          </Link>
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
              {LoginUser ? (
                <Link onClick={logOut} to="/">
                  Log Out
                </Link>
              ) : (
                <Link to="login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
