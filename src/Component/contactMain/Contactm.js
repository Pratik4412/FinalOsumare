import React from "react";
import social1 from "../Images/home/google.png";
import social2 from "../Images/home/Yahoo.png";
import social3 from "../Images/home/bing.png";
import { RiShareCircleLine } from "react-icons/ri";
const Contactm = () => {
  return (
    <div className="contactm">
      <div className="contactm-flut">
        <div className="infor">
          <h1>
            We Work with the <br /> Best partners
          </h1>
          <p>We are proud to be powered by them</p>
          <div className="photo">
            <img src={social1} alt="social1" />
            <img src={social2} alt="social2" />
            <img src={social3} alt="social3" />
          </div>
          <div className="input-btn">
            <a href="/" className="contact-btn">
              Explore Services
              <RiShareCircleLine className="icon3" />
            </a>
          </div>
        </div>
        <div className="conta">
          <h3>Contac-Us</h3>
          <div className="s">
          <form action="/" className="form">
            <div>
              <label htmlFor="name">Name</label><br />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label><br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label><br />
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter Your Number"
              />
            </div>
            <div>
              <label htmlFor="mss">Message</label><br />
              <textarea
                name="mss"
                id="mss"
                placeholder="Enter Your message"
              ></textarea>
            </div>
            <br />



              <a href="//"> Get response</a>



          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactm;
