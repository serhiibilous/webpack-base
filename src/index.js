import {Test} from './test'
import logo from './webpack.svg'

import './style.scss'

const message = Test.test('Webpack', 'Base');

const h1 = document.createElement('h1');
h1.classList.add('title');
h1.textContent = message;

const image = document.createElement('img');
image.src = logo;
image.width = 300;
image.height = 300;
image.className = 'image';

const app = document.getElementById('app');
app.append(image);
app.append(h1);
