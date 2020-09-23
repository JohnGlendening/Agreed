// to get config data (image base urls)
// https://api.themoviedb.org/3/configuration?api_key=<APIKEY>

// to fetch list of movies based on a keyword (USE RECOMMENDED MOVIES, NOT SIMILAR)
// https://api.themoviedb.org/3/search/movie?api_key=<APIKEY>&query=<keyword>

// to fetch more details about movie
// https://api.themoviedb.org/3/movie/<movie-id>?api_key=<APIKEY>

const APIKEY = '796e8da5d74f8ec25ef8bf819f34b682';
let baseURL = 'https://api.themoviedb.org/3/';
let baseImageURL = null;
let configData = null;
let movieImageURL = '';

let getConfig = () => {
    let url = "".concat(baseURL, 'configuration?api_key=', APIKEY);
    fetch(url)
    .then(result => result.json())
    .then((data) => {
        baseImageURL = data.images.secure_base_url;
        configData = data.images;
        movieImageURL = movieImageURL.concat(baseImageURL, 'w154');
        console.log(movieImageURL);
        console.log('config:', data);
        console.log('config fetched');
        runSearch('Jaws');
    })
    .catch(function(err) {
        alert(err);
    });
}

let runSearch = (keyword) => {
    let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
    fetch(url)
    .then(result => result.json())
    .then((data) => {
        console.log(data);
        let posterPath = data.results[0].poster_path;
        movieImageURL = movieImageURL.concat(posterPath);
        console.log(movieImageURL);
        document.getElementById('movieImg').src = movieImageURL;
        document.getElementById('movieImg').alt = keyword;
        document.getElementById('movieOutput').innerHTML = JSON.stringify(data, null, 4);
    })

}

document.addEventListener('DOMContentLoaded', getConfig);

