import React, { useEffect } from "react";
import { useGetSessions } from "./hooks/useGetSessions";
import TableItem from "./TableItem";
import "./UpcomingSessions.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSessionsAction } from "../../store/actions/sessionsActions";

const UpcomingSessions = () => {
  const { isLoading, isLimitDone, fetchSessions } = useGetSessions();
  const dispatch = useDispatch();
  const { sessions } = useSelector((state) => state.sessionState);

  const handleGetSessions = () => {
    fetchSessions().then((data) => dispatch(setSessionsAction(data)));
  };

  useEffect(() => {
    handleGetSessions();
  }, []);

  const sortedSessions = sessions.sort((a, b) => a.createdAt - b.createdAt);
  console.log(sortedSessions);

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
              {sortedSessions.map((session) => (
                <TableItem session={session} key={session.id} />
              ))}
            </tbody>
          </table>
        </div>
        {!isLimitDone && (
          <button
            disabled={isLoading}
            onClick={handleGetSessions}
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
