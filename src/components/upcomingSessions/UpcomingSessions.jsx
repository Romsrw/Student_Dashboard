import React from "react";
import TableItem from "./TableItem";
import "./UpcomingSessions.scss";

const UpcomingSessions = () => {
  return (
    <section className="session_upcomming">
      <div className="timetable">
        <h3 className="timetable__title">Upcoming Sessions</h3>
        <div className="timetable__info">
          <table class="table">
            <thead className="table__head">
              <tr>
                <th className="table__date">Date</th>
                <th className="table__class">Class</th>
                <th className="table__time">Time</th>
              </tr>
            </thead>
            <tbody>
              <TableItem />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSessions;
