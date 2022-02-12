import React from "react";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import DashboardContent from "./components/dashboard/DashboardContent";

const App = () => {
  return (
    <div className="page">
      <Sidebar />
      <div className="main_container">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
};

export default App;
