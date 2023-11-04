import React from "react";
import { RiShareCircleLine } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import man1 from "../Images/home/man-1.png";
import man2 from "../Images/home/man-2.png";
import man3 from "../Images/home/man-3.png";
import man4 from "../Images/home/man-4.png";
import man5 from "../Images/home/man-5.png";
import man6 from "../Images/home/man-6.png";
import man7 from "../Images/home/man-7.png";
import man8 from "../Images/home/man-8.png";
import man9 from "../Images/home/man-9.png";

const Employ = () => {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 employ">
        <div class="col">
          <div class="card">
            <img
              src={man1}
              class="card-img-top"
              alt="Hollywood Sign on The Hill"
            />
            <div class="card-body">
              <h4 class="card-title">Azaroddin Pinjar</h4>
              <p class="card-text">Social media executive</p>
              <a href="/" class="btn btn-primary">
                The Multi tasker
              </a>
              <h5>
                <BsLinkedin className="icon1" />{" "}
                <span className="decs">zaroddin Pinjar</span>
                <RiShareCircleLine className="icon2" />
              </h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={man2} class="card-img-top" alt="Palm Springs Road" />
            <div class="card-body">
              <h4 class="card-title">Kashyap Mavadhiya</h4>
              <p class="card-text">Social media executive</p>
               <a href="/" class="btn btn-primary">
                The Multi tasker
              </a>
              <h5>
                <BsLinkedin className="icon1" />{" "}
                <span className="decs">Kashyap Mavadhiya</span>
                <RiShareCircleLine className="icon2" />
              </h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={man3}
              class="card-img-top"
              alt="Los Angeles Skyscrapers"
            />
            <div class="card-body">
              <h4 class="card-title">Arsh Singh</h4>
              <p class="card-text">Social media executive</p>
               <a href="/" class="btn btn-primary">
                The Multi tasker
              </a>
              <h5>
                <BsLinkedin className="icon1" />{" "}
                <span className="decs">Arsh Singh</span>
                <RiShareCircleLine className="icon2" />
              </h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={man4} class="card-img-top" alt="Skyscrapers" />
            <div class="card-body">
              <h4 class="card-title">Tabish khan</h4>
              <p class="card-text">Lead UI UX Designer</p>
               <a href="/" class="btn btn-primary">
                The Multi tasker
              </a>
              <h5>
                <BsLinkedin className="icon1" />{" "}
                <span className="decs">Tabish khan</span>
                <RiShareCircleLine className="icon2" />
              </h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={man5} class="card-img-top" alt="Skyscrapers" />
            <div class="card-body">
              <h4 class="card-title">Smruti Ranjan</h4>
              <p class="card-text">Visual Storyteller</p>
               <a href="/" class="btn btn-primary">
                The Multi tasker
              </a>
              <h5>
                <BsLinkedin className="icon1" />{" "}
                <span className="decs">Smruti Ranjan</span>
                <RiShareCircleLine className="icon2" />
              </h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={man6} class="card-img-top" alt="Skyscrapers" />
            <div class="card-body">
              <h4 class="card-title">Shristi Singh</h4>
              <p class="card-text">HR manager</p>
               <a href="/" class="btn btn-primary">
                The Multi tasker
              </a>
              <h5>
                <BsLinkedin className="icon1" />{" "}
                <span className="decs">Shristi Singh</span>
                <RiShareCircleLine className="icon2" />
              </h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={man7} class="card-img-top" alt="Skyscrapers" />
            <div class="card-body">
              <h4 class="card-title">Banti Kumar Dubey</h4>
              <p class="card-text">Digital marketing Executive</p>
               <a href="/" class="btn btn-primary">
                The Multi tasker
              </a>
              <h5>
                <BsLinkedin className="icon1" />{" "}
                <span className="decs">Banti Kumar Dubey</span>
                <RiShareCircleLine className="icon2" />
              </h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={man8} class="card-img-top" alt="Skyscrapers" />
            <div class="card-body">
              <h4 class="card-title">Gaurav Dipak Lohar</h4>
              <p class="card-text">Full Stack Developer Intern</p>
               <a href="/" class="btn btn-primary">
                The Multi tasker
              </a>
              <h5>
                <BsLinkedin className="icon1" />{" "}
                <span className="decs">Gaurav Dipak Lohar</span>
                <RiShareCircleLine className="icon2" />
              </h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={man9} class="card-img-top" alt="Skyscrapers" />
            <div class="card-body">
              <h4 class="card-title">Shreeyukta Banerjee</h4>
              <p class="card-text">content writing intern</p>
               <a href="/" class="btn btn-primary">
                the Multi tasker
              </a>
              <h5>
                <BsLinkedin className="icon1" />{" "}
                <span className="decs">Shreeyukta Banerjee</span>
                <RiShareCircleLine className="icon2" />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employ;
