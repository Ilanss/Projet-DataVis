const fetch = require('node-fetch')
import {APIKEY} from "./key";

const URL = 'https://api.themoviedb.org/3/discover/movie?api_key='+APIKEY+'page='+page

fetch(URL)
    .then(r => r.json())
    .then(d => JSON.stringify(d, null, 2))
    .then(console.log)