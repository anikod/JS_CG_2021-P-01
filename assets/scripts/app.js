const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal');

const startAddMovieButton = document.querySelector('header button');

const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const deleteMovieModal = document.getElementById('delete-modal');
// old-fashioned way to select elements, but works fine also
// const userInputs = addMovieModal.getElementsByTagName('input');

// console.log(addMovieModal);

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};


const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
  // addMovieModal.className = 'modal card';
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  //toggleMovieModal();
  closeMovieModal();
  toggleBackdrop();
  clearMovieInputs();
};

const backdropClickHandler = () => {
  closeMovieModal();
  cancelMovieDeletionModal();
};

const clearMovieInputs = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};

const addMovieHandler = () => {
  // что за value??? метод коллекции? выяснить.
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    // в переменной ratingValue содержится строковое значение,
    // можно сделать перевод в тип int, использовав либо parseInt,
    // либо добавив плюс перед ratingValue:
    // +ratingValue < 1
    // надо иметь в виду такой способ
    +ratingValue < 1 ||
    +ratingValue > 5

  ) {
    alert('some of the values are incorrect');
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);

  closeMovieModal();
  toggleBackdrop();
  clearMovieInputs();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  updateUI();

};

const entryTextSection = document.getElementById('entry-text');

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  // устаревшее написание
  //listRoot.removeChild(listRoot.children[movieIndex]);

  cancelMovieDeletionModal();

  updateUI();
};


const cancelMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};


const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();

  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
  let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  cancelDeletionButton.removeEventListener('click', cancelMovieDeletionModal);
  confirmDeletionButton.removeEventListener('click', deleteMovieHandler.bind(null, movieId));

  cancelDeletionButton.addEventListener('click', cancelMovieDeletionModal);
  confirmDeletionButton.addEventListener('click', deleteMovieHandler.bind(null, movieId));
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  // обратить внимание на использование здесь бэктиков
  // (не знаю как по-русски эти значки)
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);


};




startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler)
confirmAddMovieButton.addEventListener('click', addMovieHandler);
















// nothing interesting here

const someClickLink = document.getElementById('linkHere');

// const colorCycler = () => {
//   const randomColor = Math.floor(Math.random()*16777215).toString(16);
//   someClickLink.style.backgroundColor = "#" + randomColor;
// };

// someClickLink.addEventListener('click', colorCycler);


someClickLink.addEventListener('click', () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  someClickLink.style.backgroundColor = "#" + randomColor;
});