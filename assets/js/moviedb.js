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
let movieId = null;
let recMovies = [];
let lang = 'en';
let hostMovie = '';

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
        movieId = data.results[0].id;
        movieImageURL = movieImageURL.concat(posterPath);
        console.log(movieImageURL);
        document.getElementById('movieImg').src = movieImageURL;
        document.getElementById('movieImg').alt = keyword;
        document.getElementById('movieOutput').innerHTML = JSON.stringify(data.results[0].overview, null, 1);
        searchById(movieId);
    })

}

let searchById = (id) => {
    let url = ''.concat(baseURL, 'movie/', id, '/recommendations?api_key=', APIKEY, '&language=', lang, '-US&page=1');
    fetch(url)
    .then(result => result.json())
    .then((data) => {
        console.log(data);
        for (var i = 0; i<10; i++) {
            recMovies.push(data.results[i].id);
        }
        console.log(recMovies);
    })
}

let searchPopular = () => {
    let url = ''.concat(baseURL, 'movie/popular?api_key=', APIKEY, '&language=', lang, '-US&page=1');
    fetch(url)
    .then(result => result.json())
    .then((data) => {
        console.log(data);
        for (var i = 0; i<10; i++) {
            recMovies.push(data.results[i].id);
        }
        console.log(recMovies);
    })
}

document.addEventListener('DOMContentLoaded', getConfig); // on page startup - runs getConfig to get image url ready for use

$(document).ready(() => {
    $.get("/api/host_movie").then(data => {
    hostMovie = data;
})

    // grabs movie id and then searches for recommended movies based on that id
    runSearch(hostMovie);


})



// runSearch(user input) to get movie id
// searchById(movie id) to fill 10 movies into the recMovies array
// or searchPopular if !movieId to do the same
// for each value in recMovies array - run getConfig and runSearch to get image and overview