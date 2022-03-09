import React from "react";
import "./TableItem.scss";

const TableItem = ({ session }) => {
  const {createdAt, title, certificate} = session;

  return (
    <tr>
      <td className="td_date">
        <div className="td_date__wrapper">
          <span className="td_date__day">Tomorrow</span>
          <span className="td_date__number">09</span>
          <span className="td_date__month">April</span>
        </div>
      </td>
      <td className="td_info">
        <div className="td_info__wrapper">
          <span className="td_info__session">
            {title}
          </span>
          <span className="td_info__certificate">
            {certificate}
          </span>
        </div>
      </td>
      <td className="td_time">
        <span className="td_time__distance">8:30am-1:00pm</span>
      </td>
    </tr>
  );
};
export default TableItem;
