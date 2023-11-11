
import '../App.css';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MovieCard from './movieCard';
//potentially needs movie details page



const API_KEY = process.env.REACT_APP_API_KEY

const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;


export default function MainPage() {

const [searchTerm, setSearchTerm ] = useState("");
const [movies, setMovies] = useState([]); //default useState is empty array of movies

const searchMovies = async (title) => {  //async since we need to wait for api
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search); //populate useState array
}

const isEnterPressed = (event) => {
    if(event.key === 'Enter') {
        searchMovies(event.target.value);
    }
}


// could set up initial default showing of movies? 
useEffect(() => {   
  
}, []);






    return (
        <div className=''>
            <div className="title">
                <h1>Movie Menu</h1>
                
            </div>


            <div className="search">
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} //set search term as 'e' or 'event'
                    onKeyDown={isEnterPressed}
                />
                <FontAwesomeIcon
                className="search-icon"
                icon= "search"
                aria-label="Search"
                onClick={() => searchMovies(searchTerm)} //get search term from search bar
                
                />
            </div>

            {

                /* if movies.length > 0, then create container with movie data imported from MovieCard component
                else, display no movies found sub title
                */
                movies ?.length > 0            //if(movie.length > 0) 
                    ? (
                        <div className='container'>
                            {movies.map( (movie) => (    //fetch movies from API, take individual movies 
                                <MovieCard movie = {movie} /> //pass movies to MovieCard as prop dynamically
                            ))}
                        </div>
                    ) : //else
                    (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>
                    )
            }

        </div>
    );

};

