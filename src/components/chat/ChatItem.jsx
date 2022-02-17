import React from "react";
import "./ChatItem.scss";
import ChatAvatar from "../../img/ChatAvatar.svg";
import classNames from "classnames";

const ChatItem = ({ chat, ReadMessage }) => {
  const {
    id,
    avatar,
    firstName,
    lastName,
    lastMessage,
    createdAt,
    unReadMessagesCount,
  } = chat;

  return (
    <li className="chat" onClick={ReadMessage}>
      <div className="chat__container">
        <img src={ChatAvatar} alt="avatar" className="chat__avatar" />
        <div className="chat__info">
          <span className="chat__autor">
            {firstName} {lastName}
          </span>
          <span
            className={classNames(
              "chat__message",
              !!unReadMessagesCount && "unread"
            )}
          >
            {lastMessage}
          </span>
        </div>
      </div>
      <div className="chat__time_wrapper">
        <span className="chat__time">3 min</span>
        {!!unReadMessagesCount && (
          <span className="chat__count_msg">{unReadMessagesCount}</span>
        )}
      </div>
    </li>
  );
};

export default ChatItem;
