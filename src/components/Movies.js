import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies)
  const displayMovies=movies.map(movie=>{
    return <div key={movie.title}>{movie.title}, {movie.time}
      <ul>
        {movie.genres.map(genre=>{
          return <li key={genre}>{genre}</li>
        })}
      </ul>
    </div>
    
  })

  return <div>
    <h1>Movies Page</h1>
    <div>{displayMovies}</div>
  </div>;
}

export default Movies;
