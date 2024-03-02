import './styles/main.css';
import image1 from './images/ju-guan-D-jLxBtEwaA-unsplash.jpg';
import image2 from './images/aperture-vintage-GFKx0wazemc-unsplash.jpg';
import image3 from './images/daniele-colucci-OtXJhYjbKeg-unsplash.jpg';
import image4 from './images/denis-degioanni-9wH624ALFQA-unsplash.jpg';
import image5 from './images/thanh-nguyen-XZj8Z6Elmz4-unsplash.jpg';

const myImages = [image1, image2, image3, image4, image5];
const myImageContainer = document.querySelector('.image');
const nextButton = document.querySelector('.bi-caret-right');
const previewButton = document.querySelector('.bi-caret-left');
const circles = [...document.querySelectorAll('.circle')];

// Starts with default picture image1
let index = 0;

myImageContainer.style.backgroundImage = `url(${myImages[index]})`;
circles[index].focus();

// Background slide effect function

const setBackgroundAnimation = () => {
  myImageContainer.style.backgroundImage = `url(${myImages[index]})`;
};

// Handler for automatic slider

const automaticSilder = () => {
  if (index < 4) {
    index += 1;
    setBackgroundAnimation();
    circles[index].focus();
  } else {
    index = 0;
    setBackgroundAnimation();
    circles[index].focus();
  }
};

// Timmer

let slider = setInterval(automaticSilder, 5000);

// Click event handlers

circles.forEach((el) => el.addEventListener('click', (e) => {
  clearInterval(slider);
  index = +e.target.getAttribute('tabindex');
  setBackgroundAnimation();
  slider = setInterval(automaticSilder, 5000);
}));

nextButton.addEventListener('click', () => {
  clearInterval(slider);
  if (index === myImages.length - 1) {
    index = 0;
    circles[index].focus();
    setBackgroundAnimation();
  } else {
    index += 1;
    circles[index].focus();
    setBackgroundAnimation();
  }
  slider = setInterval(automaticSilder, 5000);
});

previewButton.addEventListener('click', () => {
  clearInterval(slider);
  if (index === 0) {
    index = myImages.length - 1;
    circles[index].focus();
    setBackgroundAnimation();
  } else {
    index -= 1;
    circles[index].focus();
    setBackgroundAnimation();
  }
  slider = setInterval(automaticSilder, 5000);
});
