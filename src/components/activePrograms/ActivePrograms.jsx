import React from "react";
import "./ActivePrograms.scss";
import Brookstone from "../../img/Brookstone.png";
import Dursburg from "../../img/Dursburg.png";
import RatingA from "../../img/RatingA.png";
import Ratingnull from "../../img/Ratingnull.png";

const ActivePrograms = () => {
  return (
    <section className="programs">
      <div className="container">
        <h3 className="programs__title">Active Programs</h3>
        <div className="program_wrapper">
          <div className="program">
            <img src={Brookstone} alt="Brookstone" />
            <div className="info_wrapper">
              <div className="info">
                <span className="info__title">Master of Computer Science</span>
                <span className="info__university">University of Upstate</span>
                <span className="info__city">at Brookstone</span>
              </div>
            </div>
          </div>
          <div className="rating">
            <div className="rating__img_wrapper">
              <img src={RatingA} alt="RatingA" className="rating__img" />
            </div>
            <span className="rating__text">
              Academic <br />
              Average
            </span>
          </div>
        </div>
        <div className="program_wrapper">
          <div className="program">
            <img src={Dursburg} alt="Dursburg" />
            <div className="info_wrapper">
              <div className="info">
                <span className="info__title">CERTIFICATE UX/UI design</span>
                <span className="info__university">
                  Academy of Art and Technology
                </span>
                <span className="info__city">at Dursburg</span>
              </div>
            </div>
          </div>
          <div className="rating">
            <div className="rating__img_wrapper">
              <img src={Ratingnull} alt="Ratingnull" className="rating__img" />
            </div>
            <span className="rating__text">
              Academic <br />
              Average
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivePrograms;
