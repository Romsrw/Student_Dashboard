import React from "react";
import ActivePrograms from "../activePrograms/ActivePrograms";
import Chat from "../chat/Chat";
import SessionInProgress from "../sessionInProgress/SessionInProgress";
import UpcomingSessions from "../upcomingSessions/UpcomingSessions";
import "./DashboardContent.scss";

const DashboardContent = () => {
  return (
    <main className="dashboard">
      <h2 className="dashboard__title">Hello, Mia!</h2>
      <main className="dashboard__content">
        <section className="education">
          <ActivePrograms />
          <div className="sessions">
            <SessionInProgress />
            <UpcomingSessions />
          </div>
        </section>
        <section className="messages">
          <Chat />
        </section>
      </main>
    </main>
  );
};

export default DashboardContent;
