import "./MovieCard.css";
import React from "react";

function MovieCard({movies}) {
  const {title,year,cast,genres} = movies;
console.log("yep");
  return (
    <div id="moviecard">
      <div>
        <h1>{title}</h1>
        <h3>{cast[0]}</h3>
        <h3>{cast[1]}</h3>
        <h3>{genres[0]}</h3>
        <h4>{year}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
