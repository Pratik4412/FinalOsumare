import React from "react";
import pic from "../Images/services/Frame.png";
import Next from "./Next";
// import Hello from "./Hello";
import Counter from "./Counter";
import Contactm from "../contactMain/Contactm";
import Footer from "../router/Footer";
import Cars from "../services/Cars"
const Our = () => {
  return (
    <>
    <div className="our">
      <div className="back">
        <div class="row mt-2 zero">
          <div class="col-md-6 col-lg-0 col-xl-4 mx-auto mb-4">
            <div className="pic">
              <img src={pic} alt="pic" />
            </div>
          </div>
          <div class="col-md-6 col-lg-0 col-xl-8 mx-auto mb-4 texts">
            <h1>
              Our <span>Services</span>
            </h1>
            <p>
              We break digital marketing boundaries, showcasing out-of-the-box
              skills to make your brand stand out. Fast results, respecting your
              valuable time.We break digital marketing boundaries, showcasing
              out-of-the-box skills to make your brand stand out. Fast results,
              respecting your valuable time.We break digital marketing
              boundaries, showcasing out-of-the-box skills to make your brand
              stand out. Fast results, respecting your valuable time.We break
              digital marketing boundaries, showcasing out-of-the-box skills to
              make your brand stand out. Fast results, respecting your valuable
              time.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Counter/>
    <Next/>
    <Cars/>
    <Contactm/>
    <Footer/>
    </>
  );
};

export default Our;
