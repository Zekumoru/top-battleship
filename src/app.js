import 'normalize.css';
import './style.css';
import {
  renderBoard, renderShips, makeShipsDraggable, makeDroppable, makeShipsRotatable, removeInteracts,
} from './scripts/DOMUtils';
import Game from './scripts/Game';
import Player from './scripts/Player';

const mainBoardDOM = renderBoard(document.querySelector('#main-game-board'));
const mainLabel = document.querySelector('.main-label');
const tipParagraph = document.querySelector('.tip');

// enemyBoardDOM.addEventListener('click', (e) => {
//   if (!(e.target.classList.contains('game-cell') || e.target.classList.contains('ship-block'))) return;

//   Game.getUserInput({
//     board: enemyBoardDOM,
//     ...e.target.dataset,
//   });
// });

const player = new Player('Player');

window.addEventListener('resize', () => {
  renderShips(player.board, mainBoardDOM);
});

Game.populateBoard(player.board);

renderShips(player.board, mainBoardDOM);

makeShipsDraggable(player.board, mainBoardDOM);
makeShipsRotatable(player.board, mainBoardDOM);
makeDroppable();

const startGameButton = document.querySelector('#start-game-btn');
startGameButton.addEventListener('click', (e) => {
  removeInteracts(['ship', 'ship-block', 'game-cell']);

  e.target.remove();
  tipParagraph.remove();
  mainLabel.textContent = 'Your Turn';

  // add fleet indicators
  const mainFleetDOM = document.querySelector('#main-board-fleet');
  const shipSize = mainBoardDOM.clientWidth / 11;

  player.board.ships.forEach((ship) => {
    const shipElement = document.createElement('div');
    shipElement.className = 'ship';
    shipElement.style.width = `${shipSize * ship.length}px`;
    shipElement.style.height = `${shipSize}px`;

    for (let i = 0; i < ship.length; i++) {
      const shipBlock = document.createElement('div');
      shipBlock.className = 'ship-block';

      shipElement.appendChild(shipBlock);
    }

    mainFleetDOM.insertAdjacentElement('beforeend', shipElement);
  });

  renderShips(player.board, mainBoardDOM);
});

startGameButton.click();

// Game.start({
//   playerOne: player,
//   playerTwo: computer,
//   playerOneDOM: userBoardDOM,
//   playerTwoDOM: enemyBoardDOM,
// }).then((winner) => {
//   console.log(`${winner.name} wins!`);
// });
