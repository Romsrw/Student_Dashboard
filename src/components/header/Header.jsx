import React from "react";
import "./Header.scss";
import MessagesIcon from "../../img/MessagesIcon.png";
import MenuNavIcon from "../../img/MenuNavIcon.png";
import ProfileAvatar from "../../img/ProfileAvatar.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="message">
          <button className="message__btn">
            <img src={MessagesIcon} alt="messagesIcon.png" />
          </button>
        </div>
        <div className="profile">
          <div className="profile__avatar">
            <img src={ProfileAvatar} alt="ProfileAvatar" />
          </div>
          <div className="profile__info">
            <span className="profile__info_name">Mia V</span>
            <span className="profile__info_work">Student</span>
          </div>
        </div>
        <div className="menu_nav">
          <button>
            <img src={MenuNavIcon} alt="MenuNavIcon" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
