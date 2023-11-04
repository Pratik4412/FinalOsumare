import React from "react";
import card from "../Images/Frame.png";
import rese1 from "../Images/services/research1.png";
import rese2 from "../Images/services/research2.png";
import rese3 from "../Images/services/research3.png";
import { RiShareBoxLine } from "react-icons/ri";

const Seconds = () => {

  return (
    <>
      <div className="seconds">
        <div className="second-card">
          <div className="second-cards">
            <div className="second-img">
              <img src={card} alt="" />
            </div>
            <h4>Our Services</h4>
            <p>
              Striving for better business with convenience, we create simple
              yet effective and powerful plans tailored for you; We offer:
            </p>
          </div>
          <div className="flips-cards">
            <div className="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={rese1} alt="Avatar" />
                  <h2>Branding services</h2>
                </div>

                <div class="flip-card-back">
                  <div className="flip-back-cards">
                    <h3>Branding services</h3>
                    <p>
                      We help you establish a unique and recognizable identity
                      through captivating logo design, purpose-driven brand
                      strategy, and compelling messaging
                    </p>
                    <a href="/">
                      {" "}
                      View More <RiShareBoxLine className="icon3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={rese2} alt="Avatar" />
                  <h2>Website Development</h2>
                </div>
                <div class="flip-card-back">
                <div className="flip-back-cards">
                  <h3>Website Development</h3>
                  <p>
                    We strive to create a distinct looking brand through the
                    right look and feel to strike the chord in the target
                    audience and thus generate business for you.
                  </p>
                  <a href="/">
                    {" "}
                    View More <RiShareBoxLine className="icon3" />
                  </a>
                </div>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src={rese3} alt="Avatar" />
                  <h2>Digital Marketing</h2>
                </div>
                <div class="flip-card-back">
                <div className="flip-back-cards">
                  <h3>Digital Marketing</h3>
                  <p>
                    We create engaging campaigns, targetted ads and compelling
                    content to captivate your target audience and foster brand
                    loyalty.
                  </p>
                  <a href="/">
                    {" "}
                    View More <RiShareBoxLine className="icon3" />
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seconds;
