import React from "react";
import "./ActivePrograms.scss";
import Brookstone from "../../img/Brookstone.png";
import Dursburg from "../../img/Dursburg.png";

const ActivePrograms = () => {
  return (
    <div className="programs">
      <h3 className="programs__title">Active Programs</h3>

      <section className="program">
        <img src={Brookstone} alt="Brookstone" />
        <div className="info"></div>
        <div className="rating"></div>
      </section>
    </div>
  );
};

export default ActivePrograms;
