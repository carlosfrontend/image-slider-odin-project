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
myImageContainer.style.backgroundImage = `url(${myImages[0]})`;
let index = 0;

circles[index].classList.add('fill');

// Background slide effect

const setBackgroundAnimation = () => {
  myImageContainer.style.backgroundImage = `url(${myImages[index]})`;
};

// Function for jump to next picture
const nextPicture = () => {
  index += 1;
  if (index < 5) {
    setBackgroundAnimation();
    circles[index - 1].classList.remove('fill');
    circles[index].classList.add('fill');
  } else {
    index = 0;
    setBackgroundAnimation();
    circles[circles.length - 1].classList.remove('fill');
    circles[index].classList.add('fill');
  }
};

const previewPicture = () => {
  if (index === 0) {
    circles[index].classList.remove('fill');
    index = myImages.length - 1;
    setBackgroundAnimation();
    circles[index].classList.add('fill');
  } else {
    index -= 1;
    setBackgroundAnimation();
    circles[index].classList.add('fill');
    circles[index + 1].classList.remove('fill');
  }
};

nextButton.addEventListener('click', nextPicture);
previewButton.addEventListener('click', previewPicture);
