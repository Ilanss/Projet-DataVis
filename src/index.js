
function api() {


    return fetch('https://api.themoviedb.org/3/movie/550?api_key=d227582077145ec762e4105f563380ac')
        .then(res => res.json())
        .then(function (data) {
            console.log(data);


        })
        .catch(err => console.error(err));
}

data = api();

console.log(data);
