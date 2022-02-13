import React from "react";
import "./SessionInProgress.scss";
import SessionImg from "../../img/SessionImg.png";
import CheckedImg from "../../img/CheckedImg.svg";
import APRIL08 from "../../img/APRIL08.svg";

const SessionInProgress = () => {
  return (
    <section className="session_progress">
      <div className="session">
        <img src={SessionImg} alt="SessionImg" />
        <div className="checked">
          <img src={CheckedImg} alt="CheckedImg" className="checked__img" />
          <span className="checked__text">Checked In</span>
        </div>
        <div className="description_wrapper">
          <div className="description">
            <div className="description__info">
              <h3 className="description__title">UX Research - Week 3</h3>
              <span className="description__certificate">
                CERTIFICATE UX/UI design
              </span>
              <img src="" alt="" className="description__img" />
              <span className="description__progress">In Progress</span>
            </div>
            <div className="description__subinfo">
             <img src={APRIL08} alt="APRIL08" />
              <a href="#">Join Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionInProgress;
