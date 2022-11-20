import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../NavBar/Navbar'
import "./CompCss/Home.css"
const Home = () => {
  return (
    <div className='Home'>
      <Header />
       <div className="HomeContent">
        {/* <h1>this is the home page</h1> */}
       </div>
      <Footer />
    </div>
  );
}

export default Home
