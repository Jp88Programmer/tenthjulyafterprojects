// const L/
// const {Link} from "react-router-dom" ;
import { NavLink } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <>
      <nav>
        <ul className="list_group">
          <li className="list">
            <NavLink className="active_class" to="/about">
              About
            </NavLink>
          </li>
          <li className="list">
            <NavLink className="active_class" to="/servise">
              servise
            </NavLink>
          </li>
          <li className="list">
            <NavLink className="active_class" to="/contact">
              contact
            </NavLink>
          </li>
          <li className="list">
            <NavLink className="active_class" to="/user/jayendra">
              User
            </NavLink>
          </li>
          <li className="list">
            <NavLink className="active_class" to="/">
              Home
            </NavLink>
          </li>
          {/* <li>
          <Link to="/">home</Link>
        </li> */}
        </ul>
      </nav>
      <div className="main_heading">
        <h1>this is the Home page </h1>
      </div>
    </>
  );
};
export default Home;
