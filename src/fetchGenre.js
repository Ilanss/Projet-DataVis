import {APIKEY} from "./key";

const films = require('../data/films.json')
const R = require('ramda')


const genres = R.uniq(
    R.flatten(
        films.results.map(d => d.genre_ids)
    ))

const getGenre = id =>
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key='+APIKEY) // URL
        .then(r => r.json())

Promise.all(genres.map(getGenre))
    .then(JSON.stringify)
    .then(console.log)