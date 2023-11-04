import React from "react";
import Navegat from "../navbars/nav2/Navegat";
import small from "../Images/rainbow-app-icon.svg";
import main from "../Images/home/first.png"
import Main from "../about/Main";
import Maintwo from "../about/Maintwo";
import Maintree from "../about/Maintree";
import Owner from "../about/Owner";
import Employ from "../about/Employ";
import Contactm from "../contactMain/Contactm";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navegat />
      <div className="about">
        <div className="content">
          <div className="a">
            <div className="b">
              <h1>The Rainbow <span>Story</span></h1>
              <img src={small} alt="" />
            </div>
            <img src={main} alt="" />
          </div>
        </div>
      </div>
     <Main/>
     <Maintwo/>
     <Maintree/>
     <Owner/>
     <Employ/>
     <Contactm/>
     <Footer/>
    </>
  );
};

export default About;
