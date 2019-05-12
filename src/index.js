import "d3";
import {bb} from "billboard.js";
import "billboard.js/dist/billboard.css";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {APIKEY} from "./key";

const R = require('ramda');

var data = require('../data/movie.json');
var genres = require('../data/genre.json');

console.log(movies);

let baseURL = 'https://api.themoviedb.org/3/';

// var countLan =
// movies.results.filter
// movies.results = tonArray.filter(x => x.originalLanguage == 'DE');
//var count = movies.results.filter(x => original_language);
//var count = movies.results.filter(x => map(x => x.original_language), map(x.original_language)++);

const movies = data.results

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

console.log(languages)


var chart = bb.generate({
    data: {
        json: {
            //"Language": languages.map(r => r.lang),
            "Count": languages.map(r => r.count),
        },
        columns: [
            //["Original language", languages.map(r => r.lang)]
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

setTimeout(function() {
    chart.load({
        columns: [
            // ["data3", 130, -150, 200, 300, -200, 100]
        ]
    });
}, 1000);




let fetchAll = function () {
    let url = ''.concat(baseURL, 'discover/movie?api_key=', APIKEY);
    fetch(url)
        .then(result=>result.json())
        .then((data)=>{
            console.log(data);

            var vo = map()

            //process the returned data
            document.getElementById('output').innerHTML = JSON.stringify(data, null, 4);
            //work with results array...

        })
}

// fetchAll();

