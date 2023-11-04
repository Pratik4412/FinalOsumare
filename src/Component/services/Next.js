import React from "react";
import pic2 from "../Images/services/image-cont.png";
import pic3 from "../Images/services/image-cont-1.png";
import pic4 from "../Images/services/image-cont-2.png";
const Next = () => {
  return (
    <div className="next">
      <div className="backs">
        <div class="hero">
          <div className="cild">
            <div class="word2">
              <div className="pic2">
                <img src={pic2} alt="pic2" />
              </div>
            </div>
            <div class="word">
              <div className="word-text">
                <h1>Branding</h1>
                <p>
                  Harness the full potential of your brand with our expert
                  branding services. Our team specializes in crafting compelling
                  brand strategies that resonate with your target audience. From
                  logo design to brand messaging, we create a strong brand
                  identity that sets you apart from the competition.
                </p>
              </div>
              <div className="count-btn">
                <a href="/">
                  <input
                    type="button"
                    name="button"
                    id="button"
                    value="Know More"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="cild">
            <div class="word">
              <div className="word-text">
                <h1>Website Development</h1>
                <p>
                  Experience the difference with our top-notch website
                  development services. Our skilled team of developers creates
                  stunning and user-friendly websites tailored to your business
                  needs. From intuitive navigation to responsive design, we
                  ensure a seamless user experience that leaves a lasting
                  impression. Boost your online presence with our exceptional
                  website development solutions.
                </p>
              </div>
              <div className="count-btn">
                <a href="/">
                  <input
                    type="button"
                    name="button"
                    id="button"
                    value="Know More"
                  />
                </a>
              </div>
            </div>
            <div class="word2">
              <div className="pic2">
                <img src={pic3} alt="pic2" />
              </div>
            </div>
          </div>

          <div className="cild">
            <d  iv class="word2">
              <div className="pic2">
                <img src={pic4} alt="pic2" />
              </div>
            </d>
            <div class="word">
              <div className="word-text">
                <h1>Digital marketing</h1>
                <p>
                  Harness the full potential of digital marketing with our
                  comprehensive solutions. Our expert team crafts data-driven
                  strategies to enhance your online visibility, attract targeted
                  traffic, and drive conversions. From SEO and social media to
                  content marketing and PPC, we deliver measurable results that
                  propel your business forward in the digital age.
                </p>
              </div>
              <div className="count-btn">
                <a href="/">
                  <input
                    type="button"
                    name="button"
                    id="button"
                    value="Know More"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Next;



