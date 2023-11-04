import React from "react";
import owner from "../Images/home/owner.png";
import { RiShareCircleLine } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

const Owner = () => {
  return (
    <div className="owner">
      <div className="contentse">
        <h1>
          Our<span>Team</span>
        </h1>
        <div className="teams">
          <div className="owners">
            <h2>Umesh Ahrirro</h2>
            <h6>Managing Director</h6>
            <p>
              Established Osumare with the goal of transforming marketing from
              institution based, to data driven. He has vast experience inn
              collaborating with Fortune 500 companies in the US an dalso
              Co-founded the Mortgage Data Systems before relocating to India.
            </p>
            <h5>
              <BsLinkedin className="icon1"/> <span>Umesh Ahrirro</span> <RiShareCircleLine className="icon2"/>
              <i class="ri-share-circle-line"></i>
            </h5>
          </div>
          <div className="img">
            <img src={owner} alt="vision" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
