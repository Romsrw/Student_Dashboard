import React from "react";
import ActivePrograms from "../activePrograms/ActivePrograms";
import "./DashboardContent.scss";

const DashboardContent = () => {
  return (
    <main className="dashboard">
      <h2 className="dashboard__title">Hello, Mia!</h2>
      <main className="dashboard__content">
        <div className="education">
          <ActivePrograms />
          <div className="sessions">
            <section className="session_progress"></section>
            <section className="session_upcomming"></section>
          </div>
        </div>
        <div className="messages"></div>
      </main>
    </main>
  );
};

export default DashboardContent;
