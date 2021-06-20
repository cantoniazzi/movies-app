import axios from "axios";

const BASE_URI = 'https://api.themoviedb.org/3';

const formatUri = path => `${BASE_URI}${path}?api_key=${process.env.REACT_APP_API_KEY}`;

export class MoviesService {
    static getMovies() {
        return axios.get(formatUri('/movie/popular'));
    };

    static getMovieById(id) {
        return axios.get(formatUri(`/movie/${id}`));
    }
};
