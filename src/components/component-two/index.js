import React from "react";
import "./styles.scss";
import img1 from "../../assets/comp2-img1.svg";
import img2 from "../../assets/comp2-img2.svg";
import img3 from "../../assets/comp2-img3.svg";

const ComponentTwo = () => {
  return (
    <>
      <div className="comp-2-container">
        <div className="comp-2-main-div">
          <h1>
            <span>Transform your Ideas</span> into Stunning Products with
            Unico's Expert Team
          </h1>
          <p>
            Build, Launch, and Scale your Products with Unmatched Efficiency
          </p>
          <div>
            <a href="#">GET STARTED</a>
          </div>
          <div className="features">
            <div className="features-inner">
              <div className="features-image">
                <img src={img1} />
              </div>
              <div className="features-text">Top Mobile App Developers</div>
            </div>
            <div className="features-inner">
              <div className="features-image">
                <img src={img2} />
              </div>
              <div className="features-text">
                Expert in No code Web Development
              </div>
            </div>
            <div className="features-inner">
              <div className="features-image">
                <img src={img3} />
              </div>
              <div className="features-text">Top Design Agency</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentTwo;
