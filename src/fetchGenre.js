const films = require('../data/films.json')
const R = require('ramda')


const genres = R.uniq(
    R.flatten(
        films.results.map(d => d.genre_ids)
    ))

const getGenre = id =>
    fetch() // URL
        .then(r => r.json())

Promise.all(genres.map(getGenre))
    .then(JSON.stringify)
    .then(console.log)