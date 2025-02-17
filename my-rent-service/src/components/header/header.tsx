import { JSX } from "react";

function Header(): JSX.Element {
  return (
    <header>
      {/* Верхняя навигация с логотипом */}
      <nav className="navbar bg-transparent">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="./img/Surreal Grayscale Illustration Of A Hand Reaching For Saturn.png"
              alt="AppLoom Logo"
              className="logo"
            />
            <span className="ms-3 fs-4 fw-bold text-white">AppLoom</span>
          </a>
        </div>
      </nav>

      {/* Навигационные ссылки */}
      <nav className="nav-links">
        <a className="nav-link" href="#">
          Игры
        </a>
        <a className="nav-link" href="#">
          Приложения
        </a>
        <a className="nav-link" href="#">
          Фильмы
        </a>
        <a className="nav-link" href="#">
          Книги
        </a>

        {/* Выпадающее меню */}
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Меню
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Вход
              </a>
            </li>
            <li>
              <a id="registration" className="dropdown-item" href="./registration.html">
                Зарегистрироваться
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item text-danger" href="#">
                Выйти
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;