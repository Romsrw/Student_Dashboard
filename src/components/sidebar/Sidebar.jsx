import React from "react";
import "./Sidebar.scss";
import Logo from "../../img/Logo.png";
import DashboardIcon from "../../img/DashboardIcon.png";
import CoursesIcon from "../../img/CoursesIcon.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={Logo} alt="logo"></img>
      </div>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <img src={DashboardIcon} alt="DashboardIcon" />
            <a href="#" className="menu__link link_active">
              Dashboard
            </a>
          </li>
          <li className="menu__item">
            <img src={CoursesIcon} alt="CoursesIcon" />
            <a href="#" className="menu__link">
              Courses
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
