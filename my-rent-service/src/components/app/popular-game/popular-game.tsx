import { JSX } from "react";

function PopularGame(): JSX.Element {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="./img/Cartoon Tarot Card Depiction Of The Devil Figure.png"
          alt="Game Thumbnail"
          className="card-img"
        />
        <div className="card-overlay">
          <button className="btn btn-primary">Установить</button>
        </div>
      </div>
      <div className="card">
        <img
          src="./img/Dramatic Poster Showcasing A Giant Superman Statue.png"
          alt="Game Thumbnail"
          className="card-img"
        />
        <div className="card-overlay">
          <button className="btn btn-primary">Установить</button>
        </div>
      </div>
      <div className="card">
        <img
          src="./img/Muscular Surfer Riding Turquoise Wave Against Tropical Sunset.png"
          alt="Game Thumbnail"
          className="card-img"
        />
        <div className="card-overlay">
          <button className="btn btn-primary">Установить</button>
        </div>
      </div>
    </div>
  );
}

export default PopularGame;