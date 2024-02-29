import './styles/main.css';
import image1 from './images/ju-guan-D-jLxBtEwaA-unsplash.jpg';
import image2 from './images/aperture-vintage-GFKx0wazemc-unsplash.jpg';
import image3 from './images/daniele-colucci-OtXJhYjbKeg-unsplash.jpg'
import image4 from './images/denis-degioanni-9wH624ALFQA-unsplash.jpg'
import image5 from './images/thanh-nguyen-XZj8Z6Elmz4-unsplash.jpg'

const myImages = [image1, image2, image3, image4, image5];

document.querySelector('.image').style.backgroundImage = `url(${myImages[0]})`
