import 'normalize.css';
import './style.css';
import {
  renderBoard, renderShips, makeShipsDraggable, makeDroppable, makeShipsRotatable,
} from './scripts/DOMUtils';
import Game from './scripts/Game';
import Player from './scripts/Player';

const userBoardDOM = renderBoard(document.querySelector('#user-game-board'));

// enemyBoardDOM.addEventListener('click', (e) => {
//   if (!(e.target.classList.contains('game-cell') || e.target.classList.contains('ship-block'))) return;

//   Game.getUserInput({
//     board: enemyBoardDOM,
//     ...e.target.dataset,
//   });
// });

const player = new Player('Player');

window.addEventListener('resize', () => {
  renderShips(player.board, userBoardDOM);
});

Game.populateBoard(player.board);

renderShips(player.board, userBoardDOM);

makeShipsDraggable(player.board, userBoardDOM);
makeShipsRotatable(player.board, userBoardDOM);
makeDroppable();

// Game.start({
//   playerOne: player,
//   playerTwo: computer,
//   playerOneDOM: userBoardDOM,
//   playerTwoDOM: enemyBoardDOM,
// }).then((winner) => {
//   console.log(`${winner.name} wins!`);
// });
