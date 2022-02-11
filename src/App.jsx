import './App.scss';
import Logo from './img/Logo.png';

const App = () => {
  return (
    <div className='page'>
      <div className='sidebar'>
        <div className='sidebar__logo'>
          <img src={Logo} alt='logo'></img>
        </div>
        <nav className='menu_desktop'>
          <ul className='menu__list'>
            <li className='menu__item'>
              <a href='#'>Dashboard</a>
            </li>
            <li className='menu__item'>
              <a href='#'>Courses</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='container'>
        <header className='header'>header</header>
        <main className='content'>content</main>
      </div>
    </div>
  );
};

export default App;
