import React, { useState } from "react";
import thurd1 from "../Images/thurd/expritse Image.png";
import video from "../Images/thurd/video.mp4";

const Thurd = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [issClicked, setIssClicked] = useState(false);
  const [Clicked, setClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setIssClicked(false);
    setClicked(false);
  };

  const handleClicks = () => {
    setIsClicked(false);
    setIssClicked(true);
    setClicked(false);
  };

  const handleClickes = () => {
    setIsClicked(false);
    setIssClicked(false);
    setClicked(true);
  };

  return (
    <>
      <div className="thurds">
        <div className="thurd-card">
          <div className="h1">
            <h3>
              Know Why Businesses <br /> Trust Osumare
            </h3>
            <div className="thurd-bt">
              <div className="btn-01">
                <button onClick={handleClick}>Awards</button>
              </div>
              <div className="btn-02">
                <button onClick={handleClicks}>process</button>
              </div>
              <div className="btn-03">
                <button onClick={handleClickes}>work</button>
              </div>
            </div>
          </div>
          <div className="bt">
            {isClicked && (
              <div className="thurd-main">
                <div className="thurd-award">
                  <img src={thurd1} alt="" />
                </div>
              </div>
            )}
            {issClicked && (
              <div className="thurd-main">
                <div className="thurd-award">
                  <video autoPlay controls width={756} height={552}>
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              </div>
            )}
            {Clicked && (
              <div className="thurd-main">
                <div className="thurd-award">
                  <img src={thurd1} alt="" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Thurd;
