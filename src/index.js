import "billboard.js";

function api() {

    return fetch('https://api.themoviedb.org/3/movie/550?api_key='.key)
        .then(res => res.json())
        .then(function (data) {
            console.log(data);


        })
        .catch(err => console.error(err));
}

data = api();

console.log(data);
