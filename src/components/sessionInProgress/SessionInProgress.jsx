import React from "react";
import "./SessionInProgress.scss";
import SessionImg from "../../img/SessionImg.png";
import CheckedImg from "../../img/CheckedImg.png";

const SessionInProgress = () => {
  return (
    <section className="session_progress">
      <div className="session">
        <img src={SessionImg} alt="SessionImg" />
        <div className="checked">
          <img src={CheckedImg} alt="CheckedImg" className="checked__img" width={20} height={20}/>
          <span className="checked__text">Checked In</span>
        </div>
      </div>
    </section>
  );
};

export default SessionInProgress;
