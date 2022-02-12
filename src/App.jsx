import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="page">
      <Sidebar />
      <div className="container">
        <header className="header">header</header>
        <main className="content">content</main>
      </div>
    </div>
  );
};

export default App;
