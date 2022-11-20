// const L/
// const {NavLink} from "react-router-dom" ;
import { NavLink , Link} from "react-router-dom";
import './index.css';

const NavBar = () => {
  
  return (
    <>
      <nav className="navBar">
        <ul className="list_group">
          <li className="list">
            <NavLink className="active_class" to="/about">
              About
            </NavLink>
          </li>
          <li className="list">
            <NavLink className="active_class" to="/servise">
              Servise
            </NavLink>
          </li>
          <li className="list">
            <NavLink className="active_class" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="list">
            <NavLink className="active_class" to="/user/jayendra">
              User
            </NavLink>
          </li>
          <li className="list">
            <NavLink className="active_class" to="/search">
              Search
            </NavLink>
          </li>
          <li className="list">
            <NavLink className="active_class" to="/">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* <h1>this is the Home page </h1> */}
    </>
  );
};
export default NavBar;
