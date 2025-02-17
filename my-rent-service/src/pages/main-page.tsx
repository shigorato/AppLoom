import { JSX } from "react";
import Header from "../components/header/header";
import PopularGame from "../components/app/popular-game/popular-game";

function MainPage(): JSX.Element {
  return (
    <>
    <Header/>
      {/* Шапка сайта */}
      <section className="promo">
        {/* Header с логотипом и навигацией */}
        {/* Контент поверх фона */}
        <div className="promo-content">
          <h1>Добро пожаловать в AppLoom</h1>
          <p>Откройте для себя лучшие приложения и игры!</p>
          <button className="btn btn-warning">Узнать больше</button>
        </div>
      </section>

      {/* Основной контент */}
      <main>
        {/* Популярные игры */}
        <section className="popular-games">
          <div className="title-popular-games">
            <h2>Самые популярные игры</h2>
          </div>
          <PopularGame/>
          </section>

          <div id="carouselExample" className="carousel slide mx-auto" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="./img/SpongeBob SquarePants Embraces Joyful Freedom Underwater.png"
                  className="d-block w-100"
                  alt="Game 1"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Shadow Quest</h5>
                  <p>
                    Погрузитесь в темные уголки мира, где вам предстоит сражаться с теневыми существами и раскрывать
                    тайны, чтобы остановить древнее зло, угрожающее всему живому.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="./img/Humorous Cartoon Strip Featuring Buttons And Sweaty Man.png"
                  className="d-block w-100"
                  alt="Game 2"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Pixel Racer</h5>
                  <p>
                    Станьте мастером скорости, участвуя в ярких гонках на ретро-автомобилях. Проходите различные трассы,
                    улучшайте машины и соревнуйтесь с лучшими гонщиками мира!
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="./img/Traditional Japanese Landscape Featuring Mount Fuji And Autumn Colors.png"
                  className="d-block w-100"
                  alt="Game 3"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Mystic Haven</h5>
                  <p>
                    Исследуйте загадочный остров, решайте головоломки и сражайтесь с мифическими существами, чтобы
                    раскрыть тайну древней магии и найти путь домой.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Предыдущий</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Следующий</span>
            </button>
          </div>
        

        {/* Колонки с жанрами и играми */}
        <div className="container">
          {/* Левая колонка с жанрами */}
          <div className="game-title">
            <h2>Игры</h2>
          </div>
          <aside className="genre-column">
            <h2>Жанры</h2>
            <ul className="genre-list">
              <li>
                <a href="#">Все</a>
              </li>
              <li>
                <a href="#">Экшен</a>
              </li>
              <li>
                <a href="#">Ролевые</a>
              </li>
              <li>
                <a href="#">Головоломки</a>
              </li>
              <li>
                <a href="#">Спортивные</a>
              </li>
              <li>
                <a href="#">Симуляторы</a>
              </li>
              <li>
                <a href="#">Стратегии</a>
              </li>
              <li>
                <a href="#">Аркады</a>
              </li>
              <li>
                <a href="#">Приключения</a>
              </li>
              <li>
                <a href="#">Настольные и карточные</a>
              </li>
            </ul>
          </aside>

          {/* Правая колонка с играми */}
          <section className="games-grid"></section>

          {/* Нумерация страниц */}
          <div className="pagination-container">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo; Назад</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">Вперёд &raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          {/* Информация о компании */}
          <div className="footer-left">
            <h3>AppLoom</h3>
            <p>Магазин приложений для всех платформ.</p>
            <div className="social-links">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div className="footer-links">
            <h4>О AppLoom</h4>
            <ul>
              <li>
                <a href="#">О AppLoom</a>
              </li>
              <li>
                <a href="#">Карьера в AppLoom</a>
              </li>
              <li>
                <a href="#">AppLoom для TV</a>
              </li>
              <li>
                <a href="#">AppLoom для телефона</a>
              </li>
              <li>
                <a href="#">AppLoom для ОС Аврора</a>
              </li>
              <li>
                <a href="#">Медиа-кит (для СМИ и блогеров)</a>
              </li>
              <li>
                <a href="#">Нашли уязвимость? (программа Bug Bounty)</a>
              </li>
              <li>
                <a href="#">Пользовательское соглашение</a>
              </li>
              <li>
                <a href="#">Конфиденциальность для пользователей</a>
              </li>
            </ul>
          </div>

          {/* Помощь и установка */}
          <div className="footer-contact">
            <h4>Помощь</h4>
            <ul>
              <li>
                <a href="#">Установка AppLoom на TV</a>
              </li>
              <li>
                <a href="#">Установка AppLoom на телефон</a>
              </li>
              <li>
                <a href="#">Помощь пользователям AppLoom</a>
              </li>
              <li>
                <a href="#">Покупки и возвраты</a>
              </li>
              <li>
                <a href="#">Авторизация в AppLoom</a>
              </li>
              <li>
                <a href="#">Сбой обновления приложений</a>
              </li>
              <li>
                <a href="#">Родительский контроль</a>
              </li>
              <li>
                <a href="#">Автообновление приложений</a>
              </li>
              <li>
                <a href="#">Как написать отзыв к приложению</a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom-info">
            <p>&copy; 2024 AppLoom. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MainPage;