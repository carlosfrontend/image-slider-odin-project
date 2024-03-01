import './styles/main.css';
import image1 from './images/ju-guan-D-jLxBtEwaA-unsplash.jpg';
import image2 from './images/aperture-vintage-GFKx0wazemc-unsplash.jpg';
import image3 from './images/daniele-colucci-OtXJhYjbKeg-unsplash.jpg';
import image4 from './images/denis-degioanni-9wH624ALFQA-unsplash.jpg';
import image5 from './images/thanh-nguyen-XZj8Z6Elmz4-unsplash.jpg';

const myImages = [image1, image2, image3, image4, image5];
const myImageContainer = document.querySelector('.image');
const nextButton = document.querySelector('.bi-caret-right');

// Starts with default picture image1
myImageContainer.style.backgroundImage = `url(${myImages[0]})`;
let index = 0;

// Background slide effect
const setBackgroundAnimation = () => {
  myImageContainer.style.backgroundImage = `url(${myImages[index]})`;
  myImageContainer.classList.remove('slide');
  myImageContainer.classList.add('slide');
};

// Function for jump to next picture
const nextPicture = () => {
  index += 1;
  if (index < 5) {
    setBackgroundAnimation();
  } else {
    index = 0;
    setBackgroundAnimation();
  }
};

nextButton.addEventListener('click', nextPicture);
