import React from "react";
import { useGetSessions } from "./hooks/useGetSessions";
import TableItem from "./TableItem";
import "./UpcomingSessions.scss";

const UpcomingSessions = () => {
  const { isLoading, isLimitDone, fetchSessions } = useGetSessions();
  console.log(isLoading);
  return (
    <section className="session_upcomming">
      <div className="timetable">
        <h3 className="timetable__title">Upcoming Sessions</h3>
        <div className="timetable__info">
          <table className="table">
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
        {!isLimitDone && (
          <button
            disabled={isLoading}
            onClick={fetchSessions}
            className="timetable__btn"
          >
            See All Sessions
          </button>
        )}
      </div>
    </section>
  );
};

export default UpcomingSessions;
