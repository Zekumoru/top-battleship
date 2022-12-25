import 'normalize.css';
import './style.css';
import {
  renderBoard, renderShips, makeShipsDraggable, makeDroppable, makeShipsRotatable, removeInteracts,
} from './scripts/DOMUtils';
import Game from './scripts/Game';
import Player from './scripts/Player';
import ComputerPlayer from './scripts/ComputerPlayer';

const mainBoardDOM = renderBoard(document.querySelector('#main-game-board'));
const mainLabel = document.querySelector('.main-label');
const tipParagraph = document.querySelector('.tip');

const player = new Player('Player');
const computer = new ComputerPlayer();
let currentOpponent = player;

mainBoardDOM.addEventListener('click', (e) => {
  if (!(e.target.classList.contains('game-cell') || e.target.classList.contains('ship-block'))) return;

  Game.getUserInput({
    player,
    ...e.target.dataset,
  });
});

window.addEventListener('resize', () => {
  renderShips(currentOpponent.board, mainBoardDOM, currentOpponent !== player);
});

Game.populateBoard(player.board);
Game.populateBoard(computer.board);

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

  // start game
  currentOpponent = computer;
  renderShips(computer.board, mainBoardDOM, true);

  Game.start({
    playerOne: player,
    playerTwo: computer,
    async onTurn(player) {
      if (player === computer) await waitMilliseconds(500);
    },
    async onTurnMade(player, opponent) {
      renderShips(opponent.board, mainBoardDOM, opponent === computer);
      if (player === computer) await waitMilliseconds(1000);
    },
    async onNextTurn(player) {
      mainLabel.textContent = (player !== computer) ? 'Wait for computer' : 'Wait for your turn';
      await waitMilliseconds(500);

      renderShips(player.board, mainBoardDOM, player === computer);
      mainLabel.textContent = (player !== computer) ? 'Computer\'s Turn' : 'Your Turn';
      currentOpponent = player;
    },
  }).then((winner) => {
    mainLabel.textContent = `${winner.name} wins!`;
  });

  function waitMilliseconds(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
});
