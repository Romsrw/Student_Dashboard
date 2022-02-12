import React from "react";
import ActivePrograms from "../activePrograms/ActivePrograms";
import Chat from "../chat/Chat";
import "./DashboardContent.scss";

const DashboardContent = () => {
  return (
    <main className="dashboard">
      <h2 className="dashboard__title">Hello, Mia!</h2>
      <main className="dashboard__content">
        <section className="education">
          <ActivePrograms />
          <div className="sessions">
            <section className="session_progress"></section>
            <section className="session_upcomming"></section>
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
