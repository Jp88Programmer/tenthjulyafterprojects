
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./NavBar/About";
import Contact from "./NavBar/Contact";
import Home from './NavBar/Home'
import Servise from "./NavBar/Servise";
import "./NavBar/index.css";
import User from "./NavBar/User";
import Search from "./RandomImg/Search";
const AppForNavBar = ()=>{

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/servise" element={<Servise />} />
            <Route  path="/user/:fname" element={<User />} />
            <Route  path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default AppForNavBar ;