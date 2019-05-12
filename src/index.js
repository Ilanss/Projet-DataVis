import "d3";
import {bb} from "billboard.js";
import "billboard.js/dist/billboard.css";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const R = require('ramda');

var movies = require('../data/movie.json');
var genres = require('../data/genre.json');

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

//console.log(languages)


var chart = bb.generate({
    data: {
        json: {
            "Count": languages.map(r => r.count),
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



const countGenres = Object.keys(genres.results)
    .map(lang => ({ lang, count: byLang[lang] }))

console.log(genres.results)


var chart2 = bb.generate({
    data: {
        json: {
            "Count": languages.map(r => r.count),
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
    bindto: "#barChart2"
});

setTimeout(function() {
    chart.load({
        columns: [
            // ["data3", 130, -150, 200, 300, -200, 100]
        ]
    });
}, 1000);