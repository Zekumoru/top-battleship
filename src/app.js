import '@mdi/font/css/materialdesignicons.css';
import 'normalize.css';
import './style.css';
import { renderBoard } from './scripts/DOMUtils';

renderBoard(document.querySelector('#user-game-board'));
renderBoard(document.querySelector('#enemy-game-board'));
