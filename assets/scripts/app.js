const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal');

const startAddMovieButton = document.querySelector('header button');

const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');


// console.log(addMovieModal);

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};


const toggleMovieModal = () => {
  // addMovieModal.className = 'modal card';
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const cancelAddMovie = () => {
  toggleMovieModal();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};


startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovie)

















// nothing interesting here

const someClickLink = document.getElementById('linkHere');

// const colorCycler = () => {
//   const randomColor = Math.floor(Math.random()*16777215).toString(16);
//   someClickLink.style.backgroundColor = "#" + randomColor;
// };

// someClickLink.addEventListener('click', colorCycler);


someClickLink.addEventListener('click', () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  someClickLink.style.backgroundColor = "#" + randomColor;
});