import 'normalize.css/normalize.css';
import '../styles/index.css';
import HtmlIcon from '../images/html.png';

const htmlImg = document.querySelector('.html-image');
const img = document.createElement('img');
img.src = HtmlIcon;
htmlImg.appendChild(img);

console.log('Hello world!');
