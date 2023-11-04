import React from "react";
import vision2 from "../Images/home/vision-2.png"
const Maintwo = () => {
  return (
    <div className="maintwo">
      <div className="contents">
        <div className="thurd">
          <div className="overviews">
            <h1>Company Overview</h1>
            <p>
              We provide a broad spectrum of Internet and Digital Marketing
              services. Osumare Marketing Solutions (OMS) is a core marketing
              company dedicated to addressing your marketing needs so that you
              can optimize your marketing goals and attain maximum profit".
              Starting from abstraction and blueprinting to the final stroke of
              execution, we work on your entire digital marketing plan to
              counter-attack challenges posed by your competitors."
            </p>
            <p>
              As our name OSUMARE equates to a Rainbow, we believe to be
              different and unique. We tailor a 360 degree approach and provide
              a complete solution catered to your business needs right from
              Mobile and Web Application development, Social Media Marketing,
              SEO and Mobile Marketing Services. With our team of tech geeks and
              energetic marketing experts, we intend to expedite all your
              marketing related activities. Our resilience towards our goals
              ensures 100% results to our clients.
            </p>
          </div>
          <div className="img">
            <img src={vision2} alt="vision" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintwo;
