import React from 'react'
import RunCrd from './MovieCard'

const Main = ({movies, setMovies}) => {
  return (
    <div className='Cardo'>
    {movies.map((el, i)=><RunCrd movie={el} key={i} />)}
    
    </div>

  )
}

export default Main 