import React from "react";
import "../home/home.css";
import Navbar from "../navbars/nav1/Navbar";
import Homes from "../home/Homes";
import Seconds from "../home/Seconds";
import Thurd from "../home/Thurd";
// import Thurd from "../home/Thurd";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="complex">
      <Homes/>
      <Seconds/>  
      <Thurd/>
      </div>
       
    
    </>
  );
};

export default Home;
