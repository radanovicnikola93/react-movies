import React from "react";
import { Link } from "react-router-dom";

const Card = ({title, posterImg, releaseDate, voteAverage, voteCount, id}) => {
  return (
    <Link to={`/upcoming/${id}`}>
      <article className="grid__card">
      <div className="card__header">
        <img className="card__img" src={`https://image.tmdb.org/t/p/w1280/${posterImg}`} alt={title}/>
        <span className="card__pin"><strong>{voteAverage.toFixed(1)}</strong> <small>({voteCount})</small></span>
      </div>
      <div className="card__body">
        <h3 className="card__heading">{title}</h3>
        <p className="card__light-text"><strong>{releaseDate}</strong></p>
      </div>
    </article>
    </Link>
  )
}

export default Card;