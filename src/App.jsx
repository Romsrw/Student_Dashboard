import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="page">
      <Sidebar />
      <div className="container">
        <Header />
        <main className="content">content</main>
      </div>
    </div>
  );
};

export default App;
