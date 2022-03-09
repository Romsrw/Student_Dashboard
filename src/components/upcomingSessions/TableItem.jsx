import React from "react";
import dayjs from "dayjs";
import "./TableItem.scss";

const TableItem = ({ session }) => {
  const { createdAt, title, certificate } = session;

  return (
    <tr>
      <td className="td_date">
        <div className="td_date__wrapper">
          <span className="td_date__day">
            {dayjs(createdAt).format("dddd")}
          </span>
          <span className="td_date__number">
            {dayjs(createdAt).format("DD")}
          </span>
          <span className="td_date__month">
            {dayjs(createdAt).format("MMMM")}
          </span>
        </div>
      </td>
      <td className="td_info">
        <div className="td_info__wrapper">
          <span className="td_info__session">{title}</span>
          <span className="td_info__certificate">{certificate}</span>
        </div>
      </td>
      <td className="td_time">
        <span className="td_time__distance">
          {dayjs(createdAt).format("hh:mm a")} -{" "}
          {dayjs(createdAt).format("hh:mm a")}
        </span>
      </td>
    </tr>
  );
};
export default TableItem;
