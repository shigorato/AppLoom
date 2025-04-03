import { JSX, useEffect, useState } from "react";

function Header(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  // Закрываем меню при увеличении экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Оверлей */}
      <div
        className={`menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <header className="custom-header">
        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container-fluid d-flex align-items-center">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img
                src="./img/Surreal Grayscale Illustration Of A Hand Reaching For Saturn.png"
                alt="AppLoom Logo"
                className="logo"
              />
              <span className="ms-3 fs-4 fw-bold text-white">AppLoom</span>
            </a>

            {/* Бургер-кнопка */}
            <button
              className={`navbar-toggler ${menuOpen ? "active" : ""}`}
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Меню */}
            <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
              <li className="nav-item">
                <a className="nav-link" href="#">Игры</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Приложения</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Фильмы</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Книги</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button">
                  Меню
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Вход</a></li>
                  <li><a id="registration" className="dropdown-item" href="./registration.html">Зарегистрироваться</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item text-danger" href="#">Выйти</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
