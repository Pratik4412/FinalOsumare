import React, { useEffect } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiShareCircleLine } from "react-icons/ri";
// import home from "../Images/Strips.png";

const Homes = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="homes">
      <div className="home-first" data-aos="fade-up-left">
        <div className="home-init" data-aos="fade-up-right">
          <h6>
            <span>$100M+ </span>revenue Generated
          </h6>
          <h1>
            Discover the <br /><span> Power</span> of Data <br /> Driven Marketing
          </h1>
          <p>
            Pushing boundaries of digital marketing to make your brand stand out 
            with our out-of-the-box marketing skills! Since we know every second 
            is valuable, we strive for quick delivery of results.
          </p>

          <div className="home-btn">
            <a href="/">
              {" "}
              <button className="btn1">Get free Consultation</button>
            </a>
            <a href="/">
              {" "}
              <button className="btn2">Explore Services <RiShareCircleLine className="icon3" /></button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homes;
