import '../styles/app.scss';
import HtmlIcon from '../images/html.png';
import { Modal } from 'bootstrap'

const htmlImg = document.querySelector('.title__html-image');
const img = document.createElement('img');
img.src = HtmlIcon;
img.alt = 'HTML'
htmlImg.appendChild(img);
