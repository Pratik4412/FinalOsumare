import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { BiSolidUser } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { FaServer } from "react-icons/fa6";
const Counter = () => {
  const [counterOn, setcounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setcounterOn(true)}
      onExit={() => setcounterOn(false)}
    >
      <div className="counter">
        <div className="count">
          <div className="headings">
            <div className="users">
              <BiSolidUser className="user" />
            </div>
            <div className="head">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={450} duration={3} delay={0} />
                )}
                +
              </h1>
              <p>Clients</p>
            </div>
          </div>

          <div className="headings">
            <div className="locations">
              <ImLocation className="location" />
            </div>
            <div className="head">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={30} duration={5} delay={0.1} />
                )}
                +
              </h1>
              <p>Countries</p>
            </div>
          </div>
          <div className="headings">
            <div className="servers">
              <FaServer className="server" />
            </div>
            <div className="head">
              <h1>
                {counterOn && (
                  <CountUp start={0} end={1000} duration={2} delay={0} />
                )}
                +
              </h1>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
