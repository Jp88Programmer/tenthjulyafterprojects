import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../NavBar/Navbar";
import blogCat from "../Data/blogCat";
import "./CompCss/Blog.css";
import BlogsCard from "./HelperCom/BlogsCard";
const Blog = () => {
  
  return (
    <div>
      <Header />
      {/* <h1>this is the blog</h1> */}
      <div className="Category">
        {blogCat.map((data,index) => {
          return (
            <>
              <BlogsCard key={index} blogCard={data}/>
            </>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
