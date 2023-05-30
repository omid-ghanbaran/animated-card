import "./Card.css";
import { BsHeart, BsClock } from "react-icons/bs";

const Card = () => {
  return (
    <article className="card">
      <div className="card__info--hover">
        <div className="card__like">
          <BsHeart />
        </div>
        <div className="card__clock--info">
          <BsClock />
          <span className="card__time">15 min</span>
        </div>
      </div>
      <div className="card__img" />

      <a className="card__link" href="#">
        <div className="card__img--hover" />
      </a>
      <div className="card__info">
        <span className="card__category">Cars</span>
        <h1 className="card__title">The best supercars cars on sale 2023</h1>
        <span className="card__by">
          by{" "}
          <a className="card__author" href="#" title="omid">
            omid ghanbaran
          </a>
        </span>
      </div>
    </article>
  );
};

export default Card;
