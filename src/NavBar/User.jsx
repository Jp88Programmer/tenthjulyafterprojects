import { useLocation, useParams } from "react-router-dom";
import NavBar from "./Navbar";

const User = ()=>{

    const {fname} = useParams();
    const location = useLocation();

    console.log(location);
    return (
      <>
        <NavBar />
        <div className="main_heading">
          <h1>Hello {fname} </h1>
        </div>

        <div className="container">My current Location : { location.pathname }</div>
      </>
    );
}

export default User ;