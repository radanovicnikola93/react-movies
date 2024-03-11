import React from "react";
import { Link} from "react-router-dom";

const JumbotronCard = ({ backgroundImg, title, overview, averageVote, mainImg, classNamePosition, id}) => {
    return (
        <Link to={`/upcoming/${id}`}>
        <div
            className={`jumbotron__wrapper ${classNamePosition}`}
            style={{ backgroundImage: `url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backgroundImg}')`}}
        >
            <header className="jumbotron__header">
                <div className="header__img">
                  <img src={`https://image.tmdb.org/t/p/w1280/${mainImg}`} alt={title} />
                </div>
                <span className="header__vote">{averageVote.toFixed(1)}</span>
                <h1 className="header__heading">{title}</h1>
                <p className="header__description">{overview}</p>
            </header>
        </div>
        </Link>
    );
};

export default JumbotronCard;