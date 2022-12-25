import 'normalize.css';
import './style.css';
import {
  renderBoard, renderShips, makeShipsDraggable, makeDroppable, makeShipsRotatable, removeInteracts, renderFleetIndicator,
} from './scripts/DOMUtils';
import Game from './scripts/Game';
import Player from './scripts/Player';
import ComputerPlayer from './scripts/ComputerPlayer';

const mainBoardDOM = renderBoard(document.querySelector('#main-game-board'));
const mainFleetDOM = document.querySelector('#main-board-fleet');
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
  renderGame(currentOpponent);
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

  // start game
  currentOpponent = computer;
  renderFleetIndicator(computer, mainFleetDOM);
  renderShips(computer.board, mainBoardDOM, true);

  Game.start({
    playerOne: player,
    playerTwo: computer,
    async onTurn(player) {
      if (player === computer) await waitMilliseconds(300);
    },
    async onTurnMade(player, opponent) {
      renderGame(opponent);
      if (player === computer) await waitMilliseconds(700);
    },
    async onNextTurn(player) {
      mainLabel.textContent = (player !== computer) ? 'Wait for computer' : 'Wait for your turn';
      await waitMilliseconds(300);

      renderGame(opponent);
      mainLabel.textContent = (player !== computer) ? 'Computer\'s Turn' : 'Your Turn';
      currentOpponent = player;
    },
  }).then((winner) => {
    mainLabel.textContent = `${winner.name} wins!`;
  });
});

startGameButton.click();

function renderGame(opponent) {
  renderFleetIndicator(opponent, mainFleetDOM);
  renderShips(opponent.board, mainBoardDOM, opponent !== player);
}

function waitMilliseconds(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
