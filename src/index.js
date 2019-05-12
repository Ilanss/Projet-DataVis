import * as d3 from "d3";
import "billboard.js";
import movies from "../data/movie"
import "bootstrap";
import {APIKEY} from "./key";

console.log(movies);

let baseURL = 'https://api.themoviedb.org/3/';

var chart = bb.generate({
    data: {
        columns: [
            ["data1", 30, 200, 100, 400, 150, 250],
            ["data2", 130, 100, 140, 200, 150, 50]
        ],
        type: "bar"
    },
    bar: {
        width: {
            ratio: 0.5
        }
    },
    bindto: "#barChart"
});

setTimeout(function() {
    chart.load({
        columns: [
            ["data3", 130, -150, 200, 300, -200, 100]
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

