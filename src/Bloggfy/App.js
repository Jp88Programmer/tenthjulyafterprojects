import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Home from "./Components/Home";
import Service from "./Components/Service";
import "./App.css"
import "./Components/BlogComponets/BlogCss/page.css"
import Education from "./Components/BlogComponets/Education";
import Technology from "./Components/BlogComponets/Technology";
import Arts from "./Components/BlogComponets/Arts";
import Business from "./Components/BlogComponets/Business";
import Finance from "./Components/BlogComponets/Finance";
import Fitness from "./Components/BlogComponets/Fitness";
import Nature from "./Components/BlogComponets/Nature";
import Social from "./Components/BlogComponets/Social";
import Unity from "./Components/BlogComponets/Unity";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route exact path="/blog/education" element={<Education />}></Route>
          <Route path="/blog/technology" element={<Technology />}></Route>
          <Route path="/blog/arts" element={<Arts />}></Route>
          <Route path="/blog/business" element={<Business />}></Route> 
          <Route path="/blog/finance" element={<Finance />}></Route>
          <Route path="/blog/fitness" element={<Fitness />}></Route>
          <Route path="/blog/nature" element={<Nature />}></Route>
          <Route path="/blog/social" element={<Social />}></Route>
          <Route path="/blog/unity" element={<Unity />}></Route> 
        </Routes>
      </BrowserRouter>
      {/* <Navbar /> */}
    </div>
  );
};

export default App;
