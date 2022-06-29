const refs = {
  searchForm: document.querySelector('.search-form'),
  galleryContainer: document.querySelector('.gallery__container'),
  backdrop: document.querySelector('.backdrop'),
  searchInfo: document.querySelector('.header__info'),
};

API_KEY = 'ed056b717633eb18d85d4433e906e4ce';
API_URL = 'https://api.themoviedb.org/3';

window.addEventListener('DOMContentLoaded', showMovieCollection);

async function showMovieCollection() {
  try {
    await renderMovieCollection(await getMovieCollection());
    refs.galleryContainer.addEventListener('click', showMovieInfo, {
      capture: true,
    });
  } catch (error) {
    console.log(error);
  }
}
// ---- get collection
async function getMovieCollection() {
  try {
    const url = new URL(API_URL + '/trending/movie/day');
    url.searchParams.set('api_key', API_KEY);

    const response = await fetch(url);
    if (!response.ok) {
      const respJson = await response.json();
      throw new Error(respJson.status_message);
    }
    const data = await response.json();
    const collection = data.results;
    // console.log(collection);
    return collection;
  } catch (error) {
    console.log('fail in fetch', error);
    return;
  }
}

async function getGenres() {
  const url = new URL(API_URL + '/genre/movie/list');
  url.searchParams.set('api_key', API_KEY);
  url.searchParams.set('language', 'en-US');
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const respJson = await response.json();
      throw new Error(respJson.status_message);
    }
    const data = await response.json();
    const genresList = data.genres;
    return genresList;
  } catch (error) {
    console.log('fail in genres', error);
  }
}

async function renderMovieCollection(movieCollection) {
  try {
    const genresList = await getGenres();
    if (!genresList) {
      throw new Error("Can't get genres list");
    }
    // console.log(genresList);
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
  } catch (error) {
    console.log('fail in rendering', error);
  }
}
//------ ----------------------
//-----get found movies--------

refs.searchForm.addEventListener('submit', showFoundMovies);

async function showFoundMovies(event) {
  event.preventDefault();

  const searchQuery = event.target.elements.searchQuery.value;
  if (searchQuery) {
    renderFoundMovies(await getFoundMovies(searchQuery));
  } else {
    refs.searchInfo.textContent =
      'Search query cannot be empty. Enter the correct movie name and try again.';
  }

  refs.searchForm.reset();
}

async function getFoundMovies(q) {
  try {
    console.log(q);
    const url = new URL(API_URL + '/search/movie');
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('query', q);

    const response = await fetch(url);
    const data = await response.json();
    const collection = data.results;
    if (collection.length) {
      return collection;
    } else {
      refs.searchInfo.textContent =
        'Search result not successful. Enter the correct movie name and try again.';
      refs.galleryContainer.innerHTML = '';
    }
  } catch (error) {
    console.log('fail in fetch', error);
    return;
  }
}

async function renderFoundMovies(movieSet) {
  // console.log('movieSet', movieSet);
  const genresList = await getGenres();

  if (movieSet) {
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
}
//-------------------
//------- show more info

async function showMovieInfo(event) {
  const card = event.target.closest('.movie-card');
  if (card) {
    const id = card.getAttribute('id');
    await renderMovieInfoCard(await getMovieById(id));
    addListeners();
  }
}

async function getMovieById(id) {
  const url = new URL(API_URL + '/movie/' + id);
  url.searchParams.set('api_key', API_KEY);

  const response = await fetch(url);
  const movieInfo = await response.json();
  // console.log('movieInfo', movieInfo);
  return movieInfo;
}

function renderMovieInfoCard(movieInfo) {
  // console.log('movieInfo2', movieInfo);

  refs.backdrop.classList.remove('hidden');
  document.body.classList.add('is-hidden');

  const genres = movieInfo.genres.map(gen => gen.name).join(', ');

  const markup = `
  <div class="modal">
    <button type="button" class="btn-close"></button>
    <img class="modal__img" srcset="https://image.tmdb.org/t/p/w300${movieInfo.poster_path} 300w, https://image.tmdb.org/t/p/w500${movieInfo.poster_path} 500w" src="https://image.tmdb.org/t/p/w200${movieInfo.poster_path}" sizes="100%" alt="${movieInfo.title}">
    <div class="modal__content">
      <h2 class="modal__title">${movieInfo.title}</h2>
      <div class="modal__rate">
      <p class="modal__descr">Vote / Votes</p>
      <p>
        <span class="accent">${movieInfo.vote_average}</span> /
        ${movieInfo.vote_count}
      </p>
      <p class="modal__descr">Popularity</p>
      <p>${movieInfo.popularity}</p>
      <p class="modal__descr">Original Title</p>
      <p class="modal__orig-title">${movieInfo.original_title}</p>
      <p class="modal__descr">Genre</p>
      <p>${genres}</p>
    </div>
    <h3 class="modal__about">About</h3>
    <p>${movieInfo.overview}</p>
    <div class="modal__buttons">
    <button type="button" class="button modal__btn js-add-to-watched">Add to watced</button>
    <button type="button" class="button modal__btn js-add-to-queue">Add to queue</button>
    </div>
    </div>
  </div>`;
  // console.log(markup);
  refs.backdrop.innerHTML = markup;
}
//-------------------------------

function addListeners() {
  const modalClose = document.querySelector('.btn-close');
  modalClose.addEventListener('click', closeModal);

  window.addEventListener('keydown', closeModalByEsc);

  window.addEventListener('click', closeModalOutside);

  const addToWatchedBtn = document.querySelector('.js-add-to-watched');
  // addToWatchedBtn.addEventListener('click', addToWatchedMovies);
}
function closeModal() {
  refs.backdrop.classList.add('hidden');
  document.body.classList.remove('is-hidden');
  // modalClose.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', closeModalByEsc);
  window.removeEventListener('click', closeModalOutside);
}
function closeModalByEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function closeModalOutside(e) {
  if (!e.target.closest('.modal')) {
    closeModal();
  }
}
// function addToWatchedMovies()

// async function get() {
//   const response = await fetch(
//     'https://api.themoviedb.org/3/search/multi?api_key=ed056b717633eb18d85d4433e906e4ce&language=en-US&query=453395,982987'
//   );
//   const data = await response.json();
//   console.log(data);
//   return data;
// }
// console.log(get());
// 453395,982987
