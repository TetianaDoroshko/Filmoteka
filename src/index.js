const refs = {
  searchForm: document.querySelector('.search-form'),
  galleryContainer: document.querySelector('.gallery__container'),
  backdrop: document.querySelector('.backdrop'),
};

API_KEY = 'ed056b717633eb18d85d4433e906e4ce';
API_URL = 'https://api.themoviedb.org/3';

window.addEventListener('DOMContentLoaded', showMovieCollection);

async function showMovieCollection() {
  await renderMovieCollection(await getMovieCollection());
  refs.galleryContainer.addEventListener('click', showMovieInfo, {
    capture: true,
  });
}
// ---- get collection
async function getMovieCollection() {
  const url = new URL(API_URL + '/trending/movie/day');
  url.searchParams.set('api_key', API_KEY);

  const response = await fetch(url);
  const data = await response.json();
  const collection = data.results;
  return collection;
}

async function getGenres() {
  const url = new URL(API_URL + '/genre/movie/list');
  url.searchParams.set('api_key', API_KEY);
  url.searchParams.set('language', 'en-US');

  const response = await fetch(url);
  const data = await response.json();
  const genresList = data.genres;
  return genresList;
}

async function renderMovieCollection(movieCollection) {
  const genresList = await getGenres();

  const markup = movieCollection
    .map(movie => {
      const genresInt = movie.genre_ids;
      let genres = genresInt.map(gen => {
        const genre = genresList.find(element => element.id === gen);
        return genre.name;
      });
      genres = genres.join(', ');
      return `
        <article class="movie-card" id="${movie.id}">
        <div class="thumb">
        <img class="movie-card__img" srcset="https://image.tmdb.org/t/p/w300${
          movie.poster_path
        } 300w, https://image.tmdb.org/t/p/w500${
        movie.poster_path
      } 500w" sizes="100%" alt="${movie.title}"/>
        </div>
        <div class="movie-card__description">
            <p class="movie-card__name">${movie.title}</p>
            <p class="movie-card__info">${genres} | ${Number.parseInt(
        movie.release_date
      )}</p>
        </div>
        </article>`;
    })
    .join('');
  refs.galleryContainer.innerHTML = markup;
}
//------ ----------------------
//-----get found movies--------

refs.searchForm.addEventListener('submit', showFoundMovies);

async function showFoundMovies(event) {
  event.preventDefault();

  const searchQuery = event.target.elements.searchQuery.value;
  await renderFoundMovies(await getFoundMovies(searchQuery));

  refs.searchForm.reset(getFoundMovies());
}

async function getFoundMovies(q) {
  console.log(q);
  const url = new URL(API_URL + '/search/movie');
  url.searchParams.set('api_key', API_KEY);
  url.searchParams.set('query', q);

  const response = await fetch(url);
  const data = await response.json();
  const collection = data.results;
  console.log(collection);
  return collection;
}

async function renderFoundMovies(movieSet) {
  console.log(movieSet);
  const genresList = await getGenres();

  const markup = movieSet
    .map(movie => {
      const genresInt = movie.genre_ids;
      let genres = genresInt.map(gen => {
        const genre = genresList.find(element => element.id === gen);
        return genre.name;
      });
      genres = genres.join(', ');
      return `
        <article class="movie-card" id="${movie.id}">
        <div class="thumb">
        <img class="movie-card__img" srcset="https://image.tmdb.org/t/p/w300${
          movie.poster_path
        } 300w, https://image.tmdb.org/t/p/w500${
        movie.poster_path
      } 500w" sizes="100%" alt="${movie.title}"/>
        </div>
        <div class="movie-card__description">
            <p class="movie-card__name">${movie.title}</p>
            <p class="movie-card__info">${genres} | ${Number.parseInt(
        movie.release_date
      )}</p>
        </div>
        </article>`;
    })
    .join('');
  refs.galleryContainer.innerHTML = markup;
}
//-------------------
//------- show more info

function showMovieInfo(event) {
  const card = event.target.closest('.movie-card');
  if (card) {
    const id = card.getAttribute('id');
    renderMovieInfoCard(getMovieById(id));
  }
}

async function getMovieById(id) {
  console.log(id);
  const url = new URL(API_URL + '/movie/' + id);
  url.searchParams.set('api_key', API_KEY);

  const response = await fetch(url);
  const movieInfo = await response.json();
  console.log(movieInfo);
  return movieInfo;
}

function renderMovieInfoCard(movieInfo) {
  refs.backdrop.classList.remove('hidden');
}
// const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate-v2');

// const mySchema = new mongoose.Schema({
//   /* your schema definition */
// });

// mySchema.plugin(mongoosePaginate);

// const myModel = mongoose.model('SampleModel', mySchema);

// myModel.paginate().then({}); // Usage
