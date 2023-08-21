import 'normalize.css/normalize.css';
import '../styles/index.css';
import HtmlIcon from '../images/html.png';

const htmlImg = document.querySelector('.title__html-image');
const img = document.createElement('img');
img.src = HtmlIcon;
img.alt = 'HTML'
htmlImg.appendChild(img);

console.log('Hello world!');
