import React from "react";
import { directors } from "../data";

function Directors() {
  const displayDirectors = directors.map(director => {
    return <div key={director.name}>
      {director.name}
      {director.movies.map(movie=>{
        return <li key={movie}>{movie}</li>
      })}
    </div>
  })

  return <div>
      <h1>Directors Page</h1>
      <div>{displayDirectors}</div>
    </div>;
}

export default Directors;
