const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main=document.getElementById('main')

getMovies(API_URL)

async function getMovies(url) {
    const res=await fetch(url);
    const data=await res.json();    
    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = '';
    const limitedMovies = movies.slice(0, 50);
    limitedMovies.forEach(movie => {
        const { poster_path, title, vote_average, overview } = movie;
        const imageEl = document.createElement('div');
        imageEl.classList.add('movie')
        imageEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `;
        main.append(imageEl);
    });
}

function getClassByRate(rating){
    if(rating>8){
        return 'green'
    }
    else{
        return 'red';
    }
}

