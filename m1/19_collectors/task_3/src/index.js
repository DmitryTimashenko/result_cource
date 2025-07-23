import './index.css';
import jsLogo from '../assets/js-logo.png';

const app = document.getElementById('app');

const heading = document.createElement('h1');
heading.textContent = 'I love JavaScript';

const image = document.createElement('img');
image.src = jsLogo;
image.alt = 'JavaScript Logo';

app.appendChild(heading);
app.appendChild(image);