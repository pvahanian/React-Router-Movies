import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom'

import SavedList from './Movies/SavedList';

import { Route, Link, Switch } from 'react-router-dom'
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(res => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(res.data)
        })
        .catch(error => {
          console.error('Server Error', error)
        },[])
    }
    getMovies();
  }, []);



  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Switch>
      
      <Route path='/'>
        <MovieList movies={movieList} />
      </Route>
      <Route path='/Movies/:id'>
        <Movie  />
      </Route>
      </Switch>  
      </div>
  );
}



// * [ ] Inside your App file add two routes.
//   * [ ] one route for `/` that loads the `MovieList` component. This component will need the movies injected into it via props.
//   * [ ] one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component.
