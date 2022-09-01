import "./Movies.css";
import {useContext} from "react";
import MoviesCard from '../../featurs/MovieCard/MovieCard'
import {movieContext} from '../../../context/movies-context/movies.context'

function Movies() {
  const {movies,setMovies} = useContext(movieContext);
  return (
    <div id="movies">
      {movies?.map( movieItem => <MoviesCard movies ={movieItem}/>
      )
      }
    </div>
  );
};

export default Movies;
