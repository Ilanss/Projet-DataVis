import "d3";
import {bb} from "billboard.js";
import "billboard.js/dist/billboard.css";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const R = require('ramda');

var movies = require('../data/movie.json');
var genresData = require('../data/genre.json');

const movies = movies.results

const byLang = movies.reduce((res, movie) => {
    const lang = movie.original_language
    if (res[lang]) {
        return { ...res, [lang]: res[lang] + 1 }
    } else {
        return { ...res, [lang]: 1 }
    }
}, {})

const languages = Object.keys(byLang)
    .map(lang => ({ lang, count: byLang[lang] }))

//console.log(movies)


var chart = bb.generate({
    data: {
        json: {
            "Number of films by original language": languages.map(r => r.count),
        },
        columns: [
        ],
        type: "bar"
    },
    bar: {
        width: {
            ratio: 0.5
        }
    },
    axis: {
        rotated: true,
        x: {
            label: "Language",
            type: "category",
            categories: languages.map(r => r.lang)
        },
        y: {
            label: "Number of films"
        }
    },
    bindto: "#barChart"
});


const tousLesGenre_ids = R.flatten(movies.map(movie => movie.genre_ids))

const compterLesGenres = tousLesGenre_ids.reduce((res, genre_id) => {
    if (res[genre_id]) {
        return { ...res, [genre_id]: res[genre_id] + 1 }
    } else {
        return { ...res, [genre_id]: 1 }
    }
}, {})


const genres = Object.keys(compterLesGenres)
    .map(genre => ({ genre, count: compterLesGenres[genre] }))

const trouverLeNomDuGenreParId = genre_id => genresData.find(genre => genre.id === genre_id).name

//console.log(trouverLeNomDuGenreParId(12))


var chart2 = bb.generate({
    data: {
        json: {
            "Count": genres.map(r => r.count),
        },
        columns: [
        ],
        type: "bar",
        order: "asc",

    },
    bar: {
        width: {
            ratio: 0.5
        }
    },
    axis: {
        rotated: true,
        x: {
            label: "Genre",
            type: "category",
            categories: genres.map(r => trouverLeNomDuGenreParId(r))
        },
        y: {
            label: "Number of films"
        }
    },
    bindto: "#barChart2"
});

setTimeout(function() {
    chart2.load({
        order: "asc"
    });
}, 1000);

