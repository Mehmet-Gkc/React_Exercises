import React from 'react'

function MovieList({ movies }) {
    
  return (
    <div>
     {console.log(movies)}

     <ul>
        {
            movies.map((film) => (
                <li key={film.imdbID}>
                    {film.Title} / {film.Year}
                </li>
            ))
        }
     </ul>
    </div>
  )
}

export default MovieList
