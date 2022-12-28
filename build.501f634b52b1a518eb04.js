/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: hsl(252, 3%, 10%);\n  --fg-color: #808080;\n  --primary-color: #557a95;\n  --secondary-color: #7395ae;\n  --accent-color: #b1a296;\n  --navy-blue: #0d5fa7;\n  --red: #ff0000;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Courier New\", Courier, monospace;\n  box-sizing: border-box;\n}\n\n@keyframes scaleFromCenter {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\nhtml {\n  background-color: var(--bg-color);\n  color: var(--fg-color);\n  font-size: 22px;\n}\n\n/* LAYOUT */\n\nbody {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 0 16px;\n  margin-bottom: 32px;\n  overflow-x: hidden;\n}\n\n.title {\n  text-align: center;\n  margin: 32px 0 0 0;\n}\n\n.title + p {\n  text-align: center;\n}\n\n.fancy-rounded-box {\n  margin: 16px 0;\n  padding: 10px 12px;\n  border-radius: 4px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: 0.1rem;\n}\n\n.main-label {\n  background-color: var(--navy-blue);\n  color: white;\n}\n\n.tip {\n  font-size: 0.8rem;\n  text-align: center;\n  margin: 8px 0;\n}\n\n.start-game-btn,\n.new-game-btn {\n  width: 100%;\n  background-color: white;\n  color: black;\n  border: none;\n  cursor: pointer;\n}\n\n.start-game-btn:hover,\n.new-game-btn:hover {\n  background-color: hsl(0, 0%, 90%);\n}\n\n/* GAME BOARD */\n\n.game-board {\n  --border-game-cell: 2px solid var(--fg-color);\n  max-width: 720px;\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n  position: relative;\n  margin: 0 auto;\n}\n\n.main-game-board {\n  margin-bottom: 16px;\n}\n\n.cell {\n  position: relative;\n}\n\n.cell::before {\n  content: \"\";\n  height: 0;\n  display: block;\n  padding-top: 100%;\n}\n\n.cell .content {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  place-items: center center;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.game-cell {\n  border-top: var(--border-game-cell);\n  border-left: var(--border-game-cell);\n}\n\n.game-cell:nth-child(11n) {\n  border-right: var(--border-game-cell);\n}\n\n.game-cell:nth-child(n + 111) {\n  border-bottom: var(--border-game-cell);\n}\n\n.game-cell .animation {\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  position: absolute;\n  animation: scaleFromCenter 500ms;\n}\n\n.game-cell.miss,\n.game-cell .miss.animation {\n  background-color: rgb(103, 103, 103);\n}\n\n.game-cell.hit,\n.game-cell .hit.animation {\n  background-color: var(--red);\n}\n\n.game-board .ship {\n  position: absolute;\n  border: 4px solid white;\n  border-radius: 4px;\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.game-board .ship.interactable {\n  touch-action: none;\n  cursor: move;\n}\n\n.game-board .ship.cant-place {\n  border: 4px solid rgb(255, 90, 90);\n  background-color: rgba(195, 60, 60, 0.2);\n}\n\n.game-board .ship.dragging {\n  z-index: 1;\n}\n\n.game-board .ship-blocks {\n  display: flex;\n  position: absolute;\n}\n\n.game-board .ship-block {\n  flex: 1;\n}\n\n.fleet-indicator {\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 8px;\n}\n\n.fleet-indicator .ship {\n  display: flex;\n  border: 2px solid white;\n  border-radius: 4px;\n}\n\n.fleet-indicator .ship.sunk {\n  background-color: var(--red);\n}\n\n.fleet-indicator .ship-block {\n  flex: 1;\n  border-right: 2px solid var(--fg-color);\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.fleet-indicator .ship-block:last-child {\n  border-color: transparent;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,wBAAwB;EACxB,0BAA0B;EAC1B,uBAAuB;EACvB,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,8CAA8C;EAC9C,sBAAsB;AACxB;;AAEA;EACE;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,iCAAiC;EACjC,sBAAsB;EACtB,eAAe;AACjB;;AAEA,WAAW;;AAEX;EACE,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;AACf;;AAEA;;EAEE,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;;AAEA;;EAEE,iCAAiC;AACnC;;AAEA,eAAe;;AAEf;EACE,6CAA6C;EAC7C,gBAAgB;EAChB,aAAa;EACb,sCAAsC;EACtC,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,kBAAkB;EAClB,MAAM;EACN,OAAO;AACT;;AAEA;EACE,mCAAmC;EACnC,oCAAoC;AACtC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,QAAQ;EACR,SAAS;EACT,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;;EAEE,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,kCAAkC;EAClC,wCAAwC;AAC1C;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,UAAU;EACV,cAAc;EACd,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,OAAO;EACP,uCAAuC;EACvC,0CAA0C;AAC5C;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":[":root {\n  --bg-color: hsl(252, 3%, 10%);\n  --fg-color: #808080;\n  --primary-color: #557a95;\n  --secondary-color: #7395ae;\n  --accent-color: #b1a296;\n  --navy-blue: #0d5fa7;\n  --red: #ff0000;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Courier New\", Courier, monospace;\n  box-sizing: border-box;\n}\n\n@keyframes scaleFromCenter {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\nhtml {\n  background-color: var(--bg-color);\n  color: var(--fg-color);\n  font-size: 22px;\n}\n\n/* LAYOUT */\n\nbody {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 0 16px;\n  margin-bottom: 32px;\n  overflow-x: hidden;\n}\n\n.title {\n  text-align: center;\n  margin: 32px 0 0 0;\n}\n\n.title + p {\n  text-align: center;\n}\n\n.fancy-rounded-box {\n  margin: 16px 0;\n  padding: 10px 12px;\n  border-radius: 4px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: 0.1rem;\n}\n\n.main-label {\n  background-color: var(--navy-blue);\n  color: white;\n}\n\n.tip {\n  font-size: 0.8rem;\n  text-align: center;\n  margin: 8px 0;\n}\n\n.start-game-btn,\n.new-game-btn {\n  width: 100%;\n  background-color: white;\n  color: black;\n  border: none;\n  cursor: pointer;\n}\n\n.start-game-btn:hover,\n.new-game-btn:hover {\n  background-color: hsl(0, 0%, 90%);\n}\n\n/* GAME BOARD */\n\n.game-board {\n  --border-game-cell: 2px solid var(--fg-color);\n  max-width: 720px;\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n  position: relative;\n  margin: 0 auto;\n}\n\n.main-game-board {\n  margin-bottom: 16px;\n}\n\n.cell {\n  position: relative;\n}\n\n.cell::before {\n  content: \"\";\n  height: 0;\n  display: block;\n  padding-top: 100%;\n}\n\n.cell .content {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  place-items: center center;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.game-cell {\n  border-top: var(--border-game-cell);\n  border-left: var(--border-game-cell);\n}\n\n.game-cell:nth-child(11n) {\n  border-right: var(--border-game-cell);\n}\n\n.game-cell:nth-child(n + 111) {\n  border-bottom: var(--border-game-cell);\n}\n\n.game-cell .animation {\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  position: absolute;\n  animation: scaleFromCenter 500ms;\n}\n\n.game-cell.miss,\n.game-cell .miss.animation {\n  background-color: rgb(103, 103, 103);\n}\n\n.game-cell.hit,\n.game-cell .hit.animation {\n  background-color: var(--red);\n}\n\n.game-board .ship {\n  position: absolute;\n  border: 4px solid white;\n  border-radius: 4px;\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.game-board .ship.interactable {\n  touch-action: none;\n  cursor: move;\n}\n\n.game-board .ship.cant-place {\n  border: 4px solid rgb(255, 90, 90);\n  background-color: rgba(195, 60, 60, 0.2);\n}\n\n.game-board .ship.dragging {\n  z-index: 1;\n}\n\n.game-board .ship-blocks {\n  display: flex;\n  position: absolute;\n}\n\n.game-board .ship-block {\n  flex: 1;\n}\n\n.fleet-indicator {\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 8px;\n}\n\n.fleet-indicator .ship {\n  display: flex;\n  border: 2px solid white;\n  border-radius: 4px;\n}\n\n.fleet-indicator .ship.sunk {\n  background-color: var(--red);\n}\n\n.fleet-indicator .ship-block {\n  flex: 1;\n  border-right: 2px solid var(--fg-color);\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.fleet-indicator .ship-block:last-child {\n  border-color: transparent;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _scripts_DOMUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/DOMUtils */ "./src/scripts/DOMUtils.js");
/* harmony import */ var _scripts_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/Game */ "./src/scripts/Game.js");
/* harmony import */ var _scripts_Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/Player */ "./src/scripts/Player.js");
/* harmony import */ var _scripts_ComputerPlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/ComputerPlayer */ "./src/scripts/ComputerPlayer.js");







const mainBoardDOM = (0,_scripts_DOMUtils__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(document.querySelector('#main-game-board'));
const mainLabel = document.querySelector('.main-label');
const tipParagraph = document.querySelector('.tip');

let player = new _scripts_Player__WEBPACK_IMPORTED_MODULE_4__["default"]('Player');
let computer = new _scripts_ComputerPlayer__WEBPACK_IMPORTED_MODULE_5__["default"]();
let mainFleetDOM = null;
let currentOpponent = player;

mainBoardDOM.addEventListener('click', (e) => {
  if (!(e.target.classList.contains('game-cell') || e.target.classList.contains('ship-block'))) return;

  _scripts_Game__WEBPACK_IMPORTED_MODULE_3__["default"].getUserInput({
    player,
    ...e.target.dataset,
  });
});

window.addEventListener('resize', () => {
  renderGame(currentOpponent);
});

_scripts_Game__WEBPACK_IMPORTED_MODULE_3__["default"].populateBoard(player.board);
_scripts_Game__WEBPACK_IMPORTED_MODULE_3__["default"].populateBoard(computer.board);

(0,_scripts_DOMUtils__WEBPACK_IMPORTED_MODULE_2__.renderShips)(player.board, mainBoardDOM);

(0,_scripts_DOMUtils__WEBPACK_IMPORTED_MODULE_2__.makeShipsDraggable)(player.board, mainBoardDOM);
(0,_scripts_DOMUtils__WEBPACK_IMPORTED_MODULE_2__.makeShipsRotatable)(player.board, mainBoardDOM);
(0,_scripts_DOMUtils__WEBPACK_IMPORTED_MODULE_2__.makeDroppable)();

const startGameButton = document.querySelector('#start-game-btn');
startGameButton.addEventListener('click', (e) => {
  (0,_scripts_DOMUtils__WEBPACK_IMPORTED_MODULE_2__.removeInteracts)(['ship', 'ship-block', 'game-cell']);

  e.target.remove();
  tipParagraph.remove();
  mainLabel.textContent = 'Your Turn';

  // start game
  currentOpponent = computer;

  document.body.insertAdjacentHTML('beforeend', '<div id="main-board-fleet" class="main-board-fleet fleet-indicator"></div>');
  mainFleetDOM = document.querySelector('#main-board-fleet');

  (0,_scripts_DOMUtils__WEBPACK_IMPORTED_MODULE_2__.renderFleetIndicator)(computer, mainFleetDOM);
  (0,_scripts_DOMUtils__WEBPACK_IMPORTED_MODULE_2__.renderShips)(computer.board, mainBoardDOM, true);

  _scripts_Game__WEBPACK_IMPORTED_MODULE_3__["default"].start({
    playerOne: player,
    playerTwo: computer,
    async onBeforeTurn(player, opponent) {
      mainLabel.textContent = (opponent !== computer) ? 'Computer\'s Turn' : 'Your Turn';
      currentOpponent = opponent;
    },
    async onTurn(player) {
      if (player === computer) await waitMilliseconds(300);
    },
    async onTurnMade(player, opponent, coord) {
      renderGame(opponent, coord);
      await waitMilliseconds(500);
    },
    async onNextTurn(player) {
      mainLabel.textContent = (player !== computer) ? 'Wait for computer' : 'Wait for your turn';
      await waitMilliseconds(300);

      renderGame(player);
    },
  }).then((winner) => {
    mainLabel.textContent = `${winner.name} wins!`;

    mainFleetDOM.remove();
    mainFleetDOM = null;

    document.body.insertAdjacentHTML('beforeend', '<button id="new-game-btn" class="new-game-btn fancy-rounded-box">Start New Game</button>');
    document.querySelector('#new-game-btn').addEventListener('click', (e) => {
      e.target.remove();
      mainLabel.textContent = 'Place your ships';
      document.body.appendChild(tipParagraph);
      document.body.appendChild(startGameButton);

      player = new _scripts_Player__WEBPACK_IMPORTED_MODULE_4__["default"]('Player');
      computer = new _scripts_ComputerPlayer__WEBPACK_IMPORTED_MODULE_5__["default"]();
      currentOpponent = player;

      _scripts_Game__WEBPACK_IMPORTED_MODULE_3__["default"].populateBoard(player.board);
      _scripts_Game__WEBPACK_IMPORTED_MODULE_3__["default"].populateBoard(computer.board);

      (0,_scripts_DOMUtils__WEBPACK_IMPORTED_MODULE_2__.renderShips)(player.board, mainBoardDOM);

      (0,_scripts_DOMUtils__WEBPACK_IMPORTED_MODULE_2__.makeShipsDraggable)(player.board, mainBoardDOM);
      (0,_scripts_DOMUtils__WEBPACK_IMPORTED_MODULE_2__.makeShipsRotatable)(player.board, mainBoardDOM);
      (0,_scripts_DOMUtils__WEBPACK_IMPORTED_MODULE_2__.makeDroppable)();
    });

    renderGame(currentOpponent);
  });
});

function renderGame(opponent, coord = null) {
  if (mainFleetDOM) (0,_scripts_DOMUtils__WEBPACK_IMPORTED_MODULE_2__.renderFleetIndicator)(opponent, mainFleetDOM);
  (0,_scripts_DOMUtils__WEBPACK_IMPORTED_MODULE_2__.renderShips)(opponent.board, mainBoardDOM, opponent !== player, coord);
}

function waitMilliseconds(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


/***/ }),

/***/ "./src/scripts/ComputerPlayer.js":
/*!***************************************!*\
  !*** ./src/scripts/ComputerPlayer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComputerPlayer)
/* harmony export */ });
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ "./src/scripts/GameBoard.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/scripts/Player.js");



class ComputerPlayer extends _Player__WEBPACK_IMPORTED_MODULE_1__["default"] {
  #availableMoves;
  #movesPointer;
  #targetShip;
  #firstHitCoord;
  #prevMove;

  constructor() {
    super('Computer');
    this.#initAvailableMoves();
  }

  attack(board = null) {
    if (this.#movesPointer <= 0) return null;

    if (this.#targetShip == null && this.#isLastMoveAHit(board)) {
      this.#targetShip = this.#getShip(this.#prevMove, board);
      this.#firstHitCoord = this.#prevMove;
    }

    if (this.#targetShip?.isSunk()) {
      this.#removeAdjacentMoves(board);
      this.#targetShip = null;
    }

    if (this.#targetShip?.hits === 1) {
      if (this.#isLastMoveAMiss(board)) {
        return this.#getRandomAdjacentMove(this.#firstHitCoord, board, { direction: this.#getShipDirection(this.#targetShip, board) });
      }
      return this.#getRandomAdjacentMove(this.#prevMove, board);
    }

    if (this.#targetShip?.hits > 1) {
      if (this.#isLastMoveAMiss(board)) {
        return this.#getRandomAdjacentMove(this.#firstHitCoord, board, { direction: this.#getShipDirection(this.#targetShip, board) });
      }
      return this.#getRandomAdjacentMove(this.#prevMove, board, { direction: this.#getShipDirection(this.#targetShip, board) });
    }

    return this.#getRandomMove();
  }

  #isLastMoveAHit(board) {
    if (board == null) return false;
    if (this.#prevMove == null) return false;

    const { x, y } = this.#prevMove;
    return board.board[y][x].status === 'hit';
  }

  #isLastMoveAMiss(board) {
    if (this.#prevMove == null) return false;

    const { x, y } = this.#prevMove;
    return board.board[y][x].status === 'miss';
  }

  #getShip(coord, board) {
    const { x, y } = coord;
    return board.board[y][x].ship;
  }

  #getShipDirection(ship, board) {
    let direction = 'none';

    board.board.forEach((row) => {
      row.forEach((col) => {
        if (col.ship === ship) {
          direction = col.direction;
        }
      });
    });

    return direction;
  }

  #getRandomAdjacentMove(fromMove, board, { direction } = { direction: 'none' }) {
    const { x, y } = fromMove;
    let possibleMoves = [];

    if (direction === 'none' || direction === 'horizontal') {
      possibleMoves.push({ x: x - 1, y });
      possibleMoves.push({ x: x + 1, y });
    }

    if (direction === 'none' || direction === 'vertical') {
      possibleMoves.push({ x, y: y - 1 });
      possibleMoves.push({ x, y: y + 1 });
    }

    possibleMoves = possibleMoves.filter((move) => {
      if (move.x < 0 || move.y < 0) return false;
      if (move.x >= _GameBoard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE || move.y >= _GameBoard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE) return false;
      return !this.#alreadyMoved(move.x, move.y);
    });

    if (possibleMoves.length === 0) {
      // this statement accounts for when the ship is touching the border
      return this.#getRandomAdjacentMove(this.#firstHitCoord, board, { direction: this.#getShipDirection(this.#targetShip, board) });
    }

    const index = Math.floor(Math.random() * possibleMoves.length);
    this.#prevMove = this.#getMove(this.#getMoveIndex(possibleMoves[index]));
    return this.#prevMove;
  }

  #alreadyMoved(x, y) {
    for (let i = this.#movesPointer; i < this.#availableMoves.length; i++) {
      const previousMove = this.#availableMoves[i];
      if (previousMove.x === x && previousMove.y === y) return true;
    }
    return false;
  }

  #removeAdjacentMoves(board) {
    let moveInfo = this.#getMoveInfo(this.#prevMove, board);
    while (moveInfo) {
      moveInfo.adjacents.forEach((adjacent) => this.#removeMove(adjacent));
      moveInfo = this.#getMoveInfo(moveInfo.next, board, moveInfo.move);
    }
  }

  #getMoveInfo(move, board, previous = null) {
    if (move == null) return null;

    const { x, y } = move;
    const moveInfo = {
      adjacents: [],
      next: null,
      move,
    };

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue; // don't push the move itself

        const dX = x + j;
        const dY = y + i;
        const cell = board.board[dY]?.[dX];
        if (cell === undefined) continue;

        moveInfo.adjacents.push({ x: dX, y: dY });
        if (cell.status === 'hit' && !(dX === previous?.x && dY === previous?.y)) {
          moveInfo.next = { x: dX, y: dY };
        }
      }
    }

    return moveInfo;
  }

  #removeMove(move) {
    const index = this.#getMoveIndex(move);
    if (index < 0) return false;

    this.#getMove(index);
    return true;
  }

  #getRandomMove() {
    const index = Math.floor(Math.random() * this.#movesPointer);
    this.#prevMove = this.#getMove(index);
    return this.#prevMove;
  }

  #getMoveIndex(coord) {
    for (let i = 0; i < this.#movesPointer; i++) {
      const move = this.#availableMoves[i];
      if (move.x === coord.x && move.y === coord.y) {
        return i;
      }
    }

    return -1;
  }

  #getMove(index) {
    this.#movesPointer--;
    [this.#availableMoves[index], this.#availableMoves[this.#movesPointer]] = [this.#availableMoves[this.#movesPointer], this.#availableMoves[index]];
    return this.#availableMoves[this.#movesPointer];
  }

  #initAvailableMoves() {
    this.#availableMoves = [];

    for (let i = 0; i < _GameBoard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE; i++) {
      for (let j = 0; j < _GameBoard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE; j++) {
        this.#availableMoves.push({
          x: j,
          y: i,
        });
      }
    }

    this.#movesPointer = this.#availableMoves.length;
  }
}


/***/ }),

/***/ "./src/scripts/DOMUtils.js":
/*!*********************************!*\
  !*** ./src/scripts/DOMUtils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "makeDroppable": () => (/* binding */ makeDroppable),
/* harmony export */   "makeShipsDraggable": () => (/* binding */ makeShipsDraggable),
/* harmony export */   "makeShipsRotatable": () => (/* binding */ makeShipsRotatable),
/* harmony export */   "removeInteracts": () => (/* binding */ removeInteracts),
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard),
/* harmony export */   "renderFleetIndicator": () => (/* binding */ renderFleetIndicator),
/* harmony export */   "renderShips": () => (/* binding */ renderShips)
/* harmony export */ });
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! interactjs */ "./node_modules/interactjs/dist/interact.min.js");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ "./src/scripts/GameBoard.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  renderBoard,
  renderShips,
  renderFleetIndicator,
  makeShipsDraggable,
  makeDroppable,
  makeShipsRotatable,
  removeInteracts,
});

const dragInfo = {
  ship: null,
  shipDirection: 'none',
  shipElement: null,
  shipBlock: null,
  board: null,
  boardDOM: null,
  interactEnabled: false,
};

function renderBoard(gameBoard) {
  for (let i = 0; i < (_GameBoard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE + 1); i++) {
    for (let j = 0; j < (_GameBoard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE + 1); j++) {
      const cell = createCell(j, i);
      gameBoard.appendChild(cell);
    }
  }

  return gameBoard;
}

function createCell(x, y) {
  const cell = document.createElement('div');
  cell.classList.add('cell');

  if (!(x === 0 || y === 0)) {
    cell.classList.add('game-cell');
    cell.dataset.x = x - 1;
    cell.dataset.y = y - 1;
  }
  else if (x !== 0 && y === 0) {
    cell.innerHTML = `<div class="content">${String.fromCharCode(x + 64)}</div>`;
    cell.classList.add('alpha-label');
  }
  else if (x === 0 && y !== 0) {
    cell.innerHTML = `<div class="content">${y}</div>`;
    cell.classList.add('numeric-label');
  }

  return cell;
}

function renderShips(playerBoard, boardDOM, hideShips = false, coordToAnimate = null) {
  const start = 12;
  const gameCellSize = boardDOM.children[start].getBoundingClientRect().width;
  const borderSize = gameCellSize - Number(window.getComputedStyle(boardDOM.children[start], '::before').width.slice(0, -2));

  boardDOM.querySelectorAll('.ship').forEach((ship) => ship.remove());
  playerBoard.board.forEach((row, y) => {
    row.forEach((col, x) => {
      const index = start + y * 11 + x;
      const cell = boardDOM.children[index];
      const { ship, status, direction } = col;

      cell.classList.remove('miss');
      cell.classList.remove('hit');

      if (coordToAnimate?.x === x && coordToAnimate?.y === y) {
        if (status === 'hit') cell.innerHTML = '<div class="hit animation"></div>';
        if (status === 'miss') cell.innerHTML = '<div class="miss animation"></div>';

        cell.addEventListener('animationend', () => {
          cell.innerHTML = '';
          if (status === 'miss') cell.classList.add('miss');
          if (status === 'hit') cell.classList.add('hit');
        });
      }
      else {
        if (status === 'miss') cell.classList.add('miss');
        if (status === 'hit') cell.classList.add('hit');
      }

      if (ship === null) return;
      if (hideShips && !ship.isSunk()) return; // for computer's board so it's hidden to the player, shows the ship if it is sunk though

      if (x > 0 && playerBoard.board[y][x - 1].ship === ship) return;
      if (y > 0 && playerBoard.board[y - 1][x].ship === ship) return;

      const top = gameCellSize * (1 + y);
      const left = gameCellSize * (1 + x);

      let width = gameCellSize;
      let height = gameCellSize;

      if (direction === 'horizontal') width *= ship.length;
      else height *= ship.length;

      width += borderSize;
      height += borderSize;

      if ((direction === 'vertical' && (x + 1) === _GameBoard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE)
        || (direction === 'horizontal' && (x + ship.length) === _GameBoard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE)) {
        width -= borderSize;
      }

      const shipElement = document.createElement('div');
      shipElement.className = 'ship';
      shipElement.dataset.x = x;
      shipElement.dataset.y = y;
      shipElement.style.width = `${width}px`;
      shipElement.style.height = `${height}px`;
      shipElement.style.top = `${top}px`;
      shipElement.style.left = `${left}px`;
      shipElement.addEventListener('click', null, true);
      if (dragInfo.interactEnabled) shipElement.classList.add('interactable');

      const shipBlocks = document.createElement('div');
      shipBlocks.className = 'ship-blocks';
      shipBlocks.style.top = `-${borderSize * 2}px`;
      shipBlocks.style.left = `-${borderSize * 2}px`;
      shipBlocks.style.width = `${width}px`;
      shipBlocks.style.height = `${height}px`;

      if (direction === 'vertical') shipBlocks.style.flexDirection = 'column';
      for (let i = 0; i < ship.length; i++) {
        const shipBlock = document.createElement('div');
        shipBlock.className = 'ship-block';
        shipBlock.dataset.x = (direction === 'horizontal') ? x + i : x;
        shipBlock.dataset.y = (direction === 'vertical') ? y + i : y;
        shipBlock.dataset.index = i;
        shipBlocks.appendChild(shipBlock);
      }

      shipElement.appendChild(shipBlocks);
      boardDOM.appendChild(shipElement);
    });
  });
}

function renderFleetIndicator(player, fleetIndicator) {
  const shipSize = fleetIndicator.clientWidth / 11;
  fleetIndicator.innerHTML = '';

  player.board.ships.forEach((ship) => {
    const shipElement = document.createElement('div');
    shipElement.className = 'ship';
    shipElement.style.width = `${shipSize * ship.length}px`;
    shipElement.style.height = `${shipSize}px`;
    if (ship.isSunk()) shipElement.classList.add('sunk');

    for (let i = 0; i < ship.length; i++) {
      const shipBlock = document.createElement('div');
      shipBlock.className = 'ship-block';

      shipElement.appendChild(shipBlock);
    }

    fleetIndicator.insertAdjacentElement('beforeend', shipElement);

    ship.onSunk = () => {
      shipElement.classList.add('sunk');
    };
  });
}

function makeShipsDraggable(board, boardDOM) {
  const position = { x: 0, y: 0 };
  let clonedShip = null;
  dragInfo.interactEnabled = true;

  interactjs__WEBPACK_IMPORTED_MODULE_1___default()('.ship').draggable({
    listeners: {
      start(event) {
        clonedShip = event.target.cloneNode(true);
        clonedShip.style.opacity = '0.6';
        boardDOM.appendChild(clonedShip);

        event.target.classList.add('dragging');

        position.x = 0;
        position.y = 0;

        const x = Number(event.target.dataset.x);
        const y = Number(event.target.dataset.y);

        dragInfo.ship = board.board[y][x].ship;
        dragInfo.shipDirection = board.board[y][x].direction;
        board.removeShip(dragInfo.ship);

        dragInfo.shipElement = event.target;
        dragInfo.board = board;
        dragInfo.boardDOM = boardDOM;
      },
      move(event) {
        position.x += event.dx;
        position.y += event.dy;

        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      },
      end(event) {
        clonedShip.remove();
        event.target.style.transform = '';
        event.target.classList.remove('dragging');

        const x = Number(event.target.dataset.x);
        const y = Number(event.target.dataset.y);
        const { ship, shipDirection: direction } = dragInfo;
        if (ship !== null) {
          board.placeShip(x, y, ship.length, direction);
        }

        renderShips(board, boardDOM);
      },
    },
  });

  interactjs__WEBPACK_IMPORTED_MODULE_1___default()('.ship-block').on('down', (event) => {
    dragInfo.shipBlock = event.target;
  });
}

function makeDroppable() {
  interactjs__WEBPACK_IMPORTED_MODULE_1___default()('.game-cell').dropzone({
    listeners: {
      dragenter(event) {
        let x = Number(event.target.dataset.x);
        let y = Number(event.target.dataset.y);
        const { board, ship, shipDirection: direction } = dragInfo;
        const draggedShipBlockIndex = Number(dragInfo.shipBlock.dataset.index);

        if (direction === 'horizontal') x -= draggedShipBlockIndex;
        else y -= draggedShipBlockIndex;

        if (!board.canShipBePlaced(x, y, ship.length, direction)) {
          event.relatedTarget.classList.add('cant-place');
        }
        else {
          event.relatedTarget.classList.remove('cant-place');
        }
      },
      drop(event) {
        const origX = Number(dragInfo.shipElement.dataset.x);
        const origY = Number(dragInfo.shipElement.dataset.y);
        const draggedShipBlockX = Number(dragInfo.shipBlock.dataset.x);
        const draggedShipBlockY = Number(dragInfo.shipBlock.dataset.y);
        const offsetX = draggedShipBlockX - origX;
        const offsetY = draggedShipBlockY - origY;

        const newX = Number(event.target.dataset.x);
        const newY = Number(event.target.dataset.y);

        const { ship, board, shipDirection: direction } = dragInfo;

        const placed = board.placeShip(newX - offsetX, newY - offsetY, ship.length, direction);
        if (!placed) {
          board.placeShip(origX, origY, ship.length, direction);
        }

        dragInfo.ship = null;
      },
    },
  });
}

function makeShipsRotatable(board, boardDOM) {
  interactjs__WEBPACK_IMPORTED_MODULE_1___default()('.ship-block').on('doubletap', (event) => {
    const shipElement = event.target.closest('.ship');
    const x = Number(shipElement.dataset.x);
    const y = Number(shipElement.dataset.y);
    const { ship, direction } = board.board[y][x];
    const newDirection = (direction === 'horizontal') ? 'vertical' : 'horizontal';

    board.removeShip(ship);

    const placed = board.placeShip(x, y, ship.length, newDirection);
    if (!placed) {
      board.placeShip(x, y, ship.length, direction);
    }

    renderShips(board, boardDOM);
  });
}

function removeInteracts(classList) {
  dragInfo.interactEnabled = false;

  classList.forEach((className) => {
    interactjs__WEBPACK_IMPORTED_MODULE_1___default()(`.${className}`).unset();
  });
}


/***/ }),

/***/ "./src/scripts/Game.js":
/*!*****************************!*\
  !*** ./src/scripts/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ "./src/scripts/GameBoard.js");
/* harmony import */ var _ComputerPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputerPlayer */ "./src/scripts/ComputerPlayer.js");
/* eslint-disable no-constant-condition, no-loop-func, no-await-in-loop, no-console */



let getUserInput;
const Game = {
  start,
  populateBoard,
  get getUserInput() {
    if (typeof getUserInput !== 'function') return () => {};
    return getUserInput;
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

async function start({
  playerOne, playerTwo, onBeforeTurn, onTurn, onTurnMade, onNextTurn,
}) {
  const listeners = {
    onBeforeTurn, onTurn, onTurnMade, onNextTurn,
  };

  while (true) {
    await handleTurn(playerOne, playerTwo, listeners);
    if (playerTwo.board.hasAllSunk()) break;

    await handleTurn(playerTwo, playerOne, listeners);
    if (playerOne.board.hasAllSunk()) break;
  }

  return playerTwo.board.hasAllSunk() ? playerOne : playerTwo;
}

async function handleTurn(player, opponent, listeners) {
  const isComputer = (player instanceof _ComputerPlayer__WEBPACK_IMPORTED_MODULE_1__["default"]);
  let hit;
  let alreadyHit = true;

  if (typeof listeners.onBeforeTurn === 'function') await listeners.onBeforeTurn(player, opponent);

  do {
    const coord = (isComputer)
      ? player.attack(opponent.board)
      : (await new Promise((resolve) => { getUserInput = resolve; }));

    if (!isComputer && coord.player !== player) continue;
    const { x, y } = coord;
    coord.x = Number(x);
    coord.y = Number(y);

    if (typeof listeners.onTurn === 'function') await listeners.onTurn(player, opponent);

    ({ hit, alreadyHit } = opponent.board.receiveAttack(x, y));
    if (typeof listeners.onTurnMade === 'function') await listeners.onTurnMade(player, opponent, (alreadyHit) ? null : coord);

    if (opponent.board.hasAllSunk()) return;
  } while (hit || alreadyHit);

  if (typeof listeners.onNextTurn === 'function') await listeners.onNextTurn(player, opponent);
}

function populateBoard(board) {
  const shipsLengths = [5, 4, 3, 2, 2, 1, 1];
  shipsLengths.forEach((shipLength) => {
    let x;
    let y;
    let direction;

    do {
      x = generateRandomInt(_GameBoard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE);
      y = generateRandomInt(_GameBoard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE);
      direction = (Math.random() > 0.5) ? 'horizontal' : 'vertical';
    } while (!board.placeShip(x, y, shipLength, direction));
  });
}

function generateRandomInt(num) {
  return Math.floor(Math.random() * num);
}


/***/ }),

/***/ "./src/scripts/GameBoard.js":
/*!**********************************!*\
  !*** ./src/scripts/GameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOARD_SIZE": () => (/* binding */ BOARD_SIZE),
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/scripts/Ship.js");


const BOARD_SIZE = 10;

class GameBoard {
  #board;
  #ships;

  constructor() {
    this.#ships = [];
    this.#initBoard(BOARD_SIZE, BOARD_SIZE);
  }

  get board() {
    return Object.freeze(this.#board);
  }

  get ships() {
    return Object.freeze(this.#ships);
  }

  hasAllSunk() {
    if (!this.#ships.length) return false;

    return this.#ships.reduce((sunk, ship) => {
      if (!ship.isSunk()) return false;
      return sunk;
    }, true);
  }

  placeShip(x, y, length = 1, direction = 'horizontal') {
    if (!this.canShipBePlaced(x, y, length, direction)) return false;

    let ship;
    if (direction === 'vertical') {
      ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);
      for (let i = length - 1; i >= 0; i--) {
        this.#board[y + i][x].ship = ship;
        this.#board[y + i][x].direction = direction;
      }
    }
    else {
      ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);
      for (let i = length - 1; i >= 0; i--) {
        this.#board[y][x + i].ship = ship;
        this.#board[y][x + i].direction = direction;
      }
    }

    this.#ships.push(ship);
    return true;
  }

  canShipBePlaced(x, y, length = 1, direction = 'horizontal') {
    if (x < 0 || x >= BOARD_SIZE) return false;
    if (y < 0 || y >= BOARD_SIZE) return false;

    if (direction === 'vertical') {
      if ((y + length - 1) >= BOARD_SIZE) return false;

      for (let i = length - 1; i >= 0; i--) {
        if (this.#isCoordNearShips(x, y + i)) return false;
      }
    }
    else {
      if ((x + length - 1) >= BOARD_SIZE) return false;

      for (let i = length - 1; i >= 0; i--) {
        if (this.#isCoordNearShips(x + i, y)) return false;
      }
    }

    return true;
  }

  removeShip(ship) {
    const index = this.#ships.indexOf(ship);
    if (index < 0) return false;

    this.#ships.splice(index, 1);
    this.#board.forEach((row) => {
      row.forEach((col) => {
        if (ship === col.ship) {
          col.ship = null;
          col.direction = 'none';
        }
      });
    });

    return true;
  }

  receiveAttack(x, y) {
    const outcome = {
      coords: { x, y },
      hit: false,
    };

    const block = this.#board[y]?.[x];

    if (block === undefined) {
      return {
        error: 'invalid coordinates',
        ...outcome,
      };
    }

    if (block.ship === null && block.status === 'none') {
      this.#board[y][x].status = 'miss';
      return outcome;
    }

    if (block.status === 'hit' || block.status === 'miss') {
      return {
        alreadyHit: true,
        ...outcome,
      };
    }

    block.ship.hit();
    outcome.hit = true;
    this.#board[y][x].status = 'hit';

    return outcome;
  }

  #initBoard(rows, cols) {
    this.#board = [];

    for (let i = 0; i < rows; i++) {
      const row = [];

      for (let j = 0; j < cols; j++) {
        row.push({
          ship: null,
          status: 'none',
          direction: 'none',
        });
      }

      this.#board.push(row);
    }
  }

  #isCoordNearShips(x, y) {
    for (let i = -1; i < 2; i++) {
      const aY = y + i;
      if (aY < 0 || aY >= BOARD_SIZE) continue;

      for (let j = -1; j < 2; j++) {
        const aX = x + j;
        if (aX < 0 || aX >= BOARD_SIZE) continue;

        if (this.#board[aY][aX].ship !== null) return true;
      }
    }

    return false;
  }
}


/***/ }),

/***/ "./src/scripts/Player.js":
/*!*******************************!*\
  !*** ./src/scripts/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ "./src/scripts/GameBoard.js");


class Player {
  #name;
  #board;

  constructor(name) {
    this.#name = name;
    this.#board = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  get name() {
    return this.#name;
  }

  get board() {
    return this.#board;
  }
}


/***/ }),

/***/ "./src/scripts/Ship.js":
/*!*****************************!*\
  !*** ./src/scripts/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  onHit;
  onSunk;
  #length;
  #hits;
  #sunk;

  constructor(length) {
    if (length <= 0) throw new RangeError('invalid ship length');

    this.#hits = 0;
    this.#sunk = false;
    this.#length = length;
  }

  get length() {
    return this.#length;
  }

  get hits() {
    return this.#hits;
  }

  hit() {
    this.#hits++;
    if (typeof this.onHit === 'function') this.onHit(this.#hits);

    if (this.#hits >= this.#length) {
      this.#sunk = true;
      if (typeof this.onSunk === 'function') this.onSunk();
    }
  }

  isSunk() {
    return this.#sunk;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"build": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktop_battleship"] = self["webpackChunktop_battleship"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_interactjs_dist_interact_min_js-node_modules_normalize_css_normalize_css"], () => (__webpack_require__("./src/app.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL0NvbXB1dGVyUGxheWVyLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvRE9NVXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9HYW1lLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvUGxheWVyLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvU2hpcC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmctY29sb3I6IGhzbCgyNTIsIDMlLCAxMCUpO1xcbiAgLS1mZy1jb2xvcjogIzgwODA4MDtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzU1N2E5NTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjNzM5NWFlO1xcbiAgLS1hY2NlbnQtY29sb3I6ICNiMWEyOTY7XFxuICAtLW5hdnktYmx1ZTogIzBkNWZhNztcXG4gIC0tcmVkOiAjZmYwMDAwO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGtleWZyYW1lcyBzY2FsZUZyb21DZW50ZXIge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZnLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLyogTEFZT1VUICovXFxuXFxuYm9keSB7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAzMnB4IDAgMCAwO1xcbn1cXG5cXG4udGl0bGUgKyBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZhbmN5LXJvdW5kZWQtYm94IHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbiAgcGFkZGluZzogMTBweCAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxufVxcblxcbi5tYWluLWxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnktYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50aXAge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDhweCAwO1xcbn1cXG5cXG4uc3RhcnQtZ2FtZS1idG4sXFxuLm5ldy1nYW1lLWJ0biB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3RhcnQtZ2FtZS1idG46aG92ZXIsXFxuLm5ldy1nYW1lLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDkwJSk7XFxufVxcblxcbi8qIEdBTUUgQk9BUkQgKi9cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICAtLWJvcmRlci1nYW1lLWNlbGw6IDJweCBzb2xpZCB2YXIoLS1mZy1jb2xvcik7XFxuICBtYXgtd2lkdGg6IDcyMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5tYWluLWdhbWUtYm9hcmQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2VsbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nLXRvcDogMTAwJTtcXG59XFxuXFxuLmNlbGwgLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4uZ2FtZS1jZWxsIHtcXG4gIGJvcmRlci10b3A6IHZhcigtLWJvcmRlci1nYW1lLWNlbGwpO1xcbiAgYm9yZGVyLWxlZnQ6IHZhcigtLWJvcmRlci1nYW1lLWNlbGwpO1xcbn1cXG5cXG4uZ2FtZS1jZWxsOm50aC1jaGlsZCgxMW4pIHtcXG4gIGJvcmRlci1yaWdodDogdmFyKC0tYm9yZGVyLWdhbWUtY2VsbCk7XFxufVxcblxcbi5nYW1lLWNlbGw6bnRoLWNoaWxkKG4gKyAxMTEpIHtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlci1nYW1lLWNlbGwpO1xcbn1cXG5cXG4uZ2FtZS1jZWxsIC5hbmltYXRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFuaW1hdGlvbjogc2NhbGVGcm9tQ2VudGVyIDUwMG1zO1xcbn1cXG5cXG4uZ2FtZS1jZWxsLm1pc3MsXFxuLmdhbWUtY2VsbCAubWlzcy5hbmltYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMywgMTAzLCAxMDMpO1xcbn1cXG5cXG4uZ2FtZS1jZWxsLmhpdCxcXG4uZ2FtZS1jZWxsIC5oaXQuYW5pbWF0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi5nYW1lLWJvYXJkIC5zaGlwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCAuc2hpcC5pbnRlcmFjdGFibGUge1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCAuc2hpcC5jYW50LXBsYWNlIHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYigyNTUsIDkwLCA5MCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NSwgNjAsIDYwLCAwLjIpO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCAuc2hpcC5kcmFnZ2luZyB7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCAuc2hpcC1ibG9ja3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmdhbWUtYm9hcmQgLnNoaXAtYmxvY2sge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmZsZWV0LWluZGljYXRvciB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmZsZWV0LWluZGljYXRvciAuc2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5mbGVldC1pbmRpY2F0b3IgLnNoaXAuc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4uZmxlZXQtaW5kaWNhdG9yIC5zaGlwLWJsb2NrIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1mZy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbi5mbGVldC1pbmRpY2F0b3IgLnNoaXAtYmxvY2s6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsOENBQThDO0VBQzlDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBOztFQUVFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGlDQUFpQztBQUNuQzs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsNkNBQTZDO0VBQzdDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztBQUNUOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDOztBQUVBOztFQUVFLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsT0FBTztFQUNQLHVDQUF1QztFQUN2QywwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogaHNsKDI1MiwgMyUsIDEwJSk7XFxuICAtLWZnLWNvbG9yOiAjODA4MDgwO1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjNTU3YTk1O1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICM3Mzk1YWU7XFxuICAtLWFjY2VudC1jb2xvcjogI2IxYTI5NjtcXG4gIC0tbmF2eS1ibHVlOiAjMGQ1ZmE3O1xcbiAgLS1yZWQ6ICNmZjAwMDA7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNjYWxlRnJvbUNlbnRlciB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZmctY29sb3IpO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4vKiBMQVlPVVQgKi9cXG5cXG5ib2R5IHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi50aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDMycHggMCAwIDA7XFxufVxcblxcbi50aXRsZSArIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmFuY3ktcm91bmRlZC1ib3gge1xcbiAgbWFyZ2luOiAxNnB4IDA7XFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG59XFxuXFxuLm1haW4tbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRpcCB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogOHB4IDA7XFxufVxcblxcbi5zdGFydC1nYW1lLWJ0bixcXG4ubmV3LWdhbWUtYnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdGFydC1nYW1lLWJ0bjpob3ZlcixcXG4ubmV3LWdhbWUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTAlKTtcXG59XFxuXFxuLyogR0FNRSBCT0FSRCAqL1xcblxcbi5nYW1lLWJvYXJkIHtcXG4gIC0tYm9yZGVyLWdhbWUtY2VsbDogMnB4IHNvbGlkIHZhcigtLWZnLWNvbG9yKTtcXG4gIG1heC13aWR0aDogNzIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1haW4tZ2FtZS1ib2FyZCB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jZWxsOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmctdG9wOiAxMDAlO1xcbn1cXG5cXG4uY2VsbCAuY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5nYW1lLWNlbGwge1xcbiAgYm9yZGVyLXRvcDogdmFyKC0tYm9yZGVyLWdhbWUtY2VsbCk7XFxuICBib3JkZXItbGVmdDogdmFyKC0tYm9yZGVyLWdhbWUtY2VsbCk7XFxufVxcblxcbi5nYW1lLWNlbGw6bnRoLWNoaWxkKDExbikge1xcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ib3JkZXItZ2FtZS1jZWxsKTtcXG59XFxuXFxuLmdhbWUtY2VsbDpudGgtY2hpbGQobiArIDExMSkge1xcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyLWdhbWUtY2VsbCk7XFxufVxcblxcbi5nYW1lLWNlbGwgLmFuaW1hdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYW5pbWF0aW9uOiBzY2FsZUZyb21DZW50ZXIgNTAwbXM7XFxufVxcblxcbi5nYW1lLWNlbGwubWlzcyxcXG4uZ2FtZS1jZWxsIC5taXNzLmFuaW1hdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLCAxMDMsIDEwMyk7XFxufVxcblxcbi5nYW1lLWNlbGwuaGl0LFxcbi5nYW1lLWNlbGwgLmhpdC5hbmltYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLmdhbWUtYm9hcmQgLnNoaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbi5nYW1lLWJvYXJkIC5zaGlwLmludGVyYWN0YWJsZSB7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5nYW1lLWJvYXJkIC5zaGlwLmNhbnQtcGxhY2Uge1xcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiKDI1NSwgOTAsIDkwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk1LCA2MCwgNjAsIDAuMik7XFxufVxcblxcbi5nYW1lLWJvYXJkIC5zaGlwLmRyYWdnaW5nIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5nYW1lLWJvYXJkIC5zaGlwLWJsb2NrcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCAuc2hpcC1ibG9jayB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uZmxlZXQtaW5kaWNhdG9yIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uZmxlZXQtaW5kaWNhdG9yIC5zaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmZsZWV0LWluZGljYXRvciAuc2hpcC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi5mbGVldC1pbmRpY2F0b3IgLnNoaXAtYmxvY2sge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWZnLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG59XFxuXFxuLmZsZWV0LWluZGljYXRvciAuc2hpcC1ibG9jazpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICByZW5kZXJCb2FyZCwgcmVuZGVyU2hpcHMsIG1ha2VTaGlwc0RyYWdnYWJsZSwgbWFrZURyb3BwYWJsZSwgbWFrZVNoaXBzUm90YXRhYmxlLCByZW1vdmVJbnRlcmFjdHMsIHJlbmRlckZsZWV0SW5kaWNhdG9yLFxufSBmcm9tICcuL3NjcmlwdHMvRE9NVXRpbHMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL0dhbWUnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3NjcmlwdHMvUGxheWVyJztcbmltcG9ydCBDb21wdXRlclBsYXllciBmcm9tICcuL3NjcmlwdHMvQ29tcHV0ZXJQbGF5ZXInO1xuXG5jb25zdCBtYWluQm9hcmRET00gPSByZW5kZXJCb2FyZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1nYW1lLWJvYXJkJykpO1xuY29uc3QgbWFpbkxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbGFiZWwnKTtcbmNvbnN0IHRpcFBhcmFncmFwaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXAnKTtcblxubGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoJ1BsYXllcicpO1xubGV0IGNvbXB1dGVyID0gbmV3IENvbXB1dGVyUGxheWVyKCk7XG5sZXQgbWFpbkZsZWV0RE9NID0gbnVsbDtcbmxldCBjdXJyZW50T3Bwb25lbnQgPSBwbGF5ZXI7XG5cbm1haW5Cb2FyZERPTS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmICghKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ2FtZS1jZWxsJykgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLWJsb2NrJykpKSByZXR1cm47XG5cbiAgR2FtZS5nZXRVc2VySW5wdXQoe1xuICAgIHBsYXllcixcbiAgICAuLi5lLnRhcmdldC5kYXRhc2V0LFxuICB9KTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICByZW5kZXJHYW1lKGN1cnJlbnRPcHBvbmVudCk7XG59KTtcblxuR2FtZS5wb3B1bGF0ZUJvYXJkKHBsYXllci5ib2FyZCk7XG5HYW1lLnBvcHVsYXRlQm9hcmQoY29tcHV0ZXIuYm9hcmQpO1xuXG5yZW5kZXJTaGlwcyhwbGF5ZXIuYm9hcmQsIG1haW5Cb2FyZERPTSk7XG5cbm1ha2VTaGlwc0RyYWdnYWJsZShwbGF5ZXIuYm9hcmQsIG1haW5Cb2FyZERPTSk7XG5tYWtlU2hpcHNSb3RhdGFibGUocGxheWVyLmJvYXJkLCBtYWluQm9hcmRET00pO1xubWFrZURyb3BwYWJsZSgpO1xuXG5jb25zdCBzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtZ2FtZS1idG4nKTtcbnN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIHJlbW92ZUludGVyYWN0cyhbJ3NoaXAnLCAnc2hpcC1ibG9jaycsICdnYW1lLWNlbGwnXSk7XG5cbiAgZS50YXJnZXQucmVtb3ZlKCk7XG4gIHRpcFBhcmFncmFwaC5yZW1vdmUoKTtcbiAgbWFpbkxhYmVsLnRleHRDb250ZW50ID0gJ1lvdXIgVHVybic7XG5cbiAgLy8gc3RhcnQgZ2FtZVxuICBjdXJyZW50T3Bwb25lbnQgPSBjb21wdXRlcjtcblxuICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJzxkaXYgaWQ9XCJtYWluLWJvYXJkLWZsZWV0XCIgY2xhc3M9XCJtYWluLWJvYXJkLWZsZWV0IGZsZWV0LWluZGljYXRvclwiPjwvZGl2PicpO1xuICBtYWluRmxlZXRET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1ib2FyZC1mbGVldCcpO1xuXG4gIHJlbmRlckZsZWV0SW5kaWNhdG9yKGNvbXB1dGVyLCBtYWluRmxlZXRET00pO1xuICByZW5kZXJTaGlwcyhjb21wdXRlci5ib2FyZCwgbWFpbkJvYXJkRE9NLCB0cnVlKTtcblxuICBHYW1lLnN0YXJ0KHtcbiAgICBwbGF5ZXJPbmU6IHBsYXllcixcbiAgICBwbGF5ZXJUd286IGNvbXB1dGVyLFxuICAgIGFzeW5jIG9uQmVmb3JlVHVybihwbGF5ZXIsIG9wcG9uZW50KSB7XG4gICAgICBtYWluTGFiZWwudGV4dENvbnRlbnQgPSAob3Bwb25lbnQgIT09IGNvbXB1dGVyKSA/ICdDb21wdXRlclxcJ3MgVHVybicgOiAnWW91ciBUdXJuJztcbiAgICAgIGN1cnJlbnRPcHBvbmVudCA9IG9wcG9uZW50O1xuICAgIH0sXG4gICAgYXN5bmMgb25UdXJuKHBsYXllcikge1xuICAgICAgaWYgKHBsYXllciA9PT0gY29tcHV0ZXIpIGF3YWl0IHdhaXRNaWxsaXNlY29uZHMoMzAwKTtcbiAgICB9LFxuICAgIGFzeW5jIG9uVHVybk1hZGUocGxheWVyLCBvcHBvbmVudCwgY29vcmQpIHtcbiAgICAgIHJlbmRlckdhbWUob3Bwb25lbnQsIGNvb3JkKTtcbiAgICAgIGF3YWl0IHdhaXRNaWxsaXNlY29uZHMoNTAwKTtcbiAgICB9LFxuICAgIGFzeW5jIG9uTmV4dFR1cm4ocGxheWVyKSB7XG4gICAgICBtYWluTGFiZWwudGV4dENvbnRlbnQgPSAocGxheWVyICE9PSBjb21wdXRlcikgPyAnV2FpdCBmb3IgY29tcHV0ZXInIDogJ1dhaXQgZm9yIHlvdXIgdHVybic7XG4gICAgICBhd2FpdCB3YWl0TWlsbGlzZWNvbmRzKDMwMCk7XG5cbiAgICAgIHJlbmRlckdhbWUocGxheWVyKTtcbiAgICB9LFxuICB9KS50aGVuKCh3aW5uZXIpID0+IHtcbiAgICBtYWluTGFiZWwudGV4dENvbnRlbnQgPSBgJHt3aW5uZXIubmFtZX0gd2lucyFgO1xuXG4gICAgbWFpbkZsZWV0RE9NLnJlbW92ZSgpO1xuICAgIG1haW5GbGVldERPTSA9IG51bGw7XG5cbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJzxidXR0b24gaWQ9XCJuZXctZ2FtZS1idG5cIiBjbGFzcz1cIm5ldy1nYW1lLWJ0biBmYW5jeS1yb3VuZGVkLWJveFwiPlN0YXJ0IE5ldyBHYW1lPC9idXR0b24+Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1nYW1lLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgbWFpbkxhYmVsLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgc2hpcHMnO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aXBQYXJhZ3JhcGgpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGFydEdhbWVCdXR0b24pO1xuXG4gICAgICBwbGF5ZXIgPSBuZXcgUGxheWVyKCdQbGF5ZXInKTtcbiAgICAgIGNvbXB1dGVyID0gbmV3IENvbXB1dGVyUGxheWVyKCk7XG4gICAgICBjdXJyZW50T3Bwb25lbnQgPSBwbGF5ZXI7XG5cbiAgICAgIEdhbWUucG9wdWxhdGVCb2FyZChwbGF5ZXIuYm9hcmQpO1xuICAgICAgR2FtZS5wb3B1bGF0ZUJvYXJkKGNvbXB1dGVyLmJvYXJkKTtcblxuICAgICAgcmVuZGVyU2hpcHMocGxheWVyLmJvYXJkLCBtYWluQm9hcmRET00pO1xuXG4gICAgICBtYWtlU2hpcHNEcmFnZ2FibGUocGxheWVyLmJvYXJkLCBtYWluQm9hcmRET00pO1xuICAgICAgbWFrZVNoaXBzUm90YXRhYmxlKHBsYXllci5ib2FyZCwgbWFpbkJvYXJkRE9NKTtcbiAgICAgIG1ha2VEcm9wcGFibGUoKTtcbiAgICB9KTtcblxuICAgIHJlbmRlckdhbWUoY3VycmVudE9wcG9uZW50KTtcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gcmVuZGVyR2FtZShvcHBvbmVudCwgY29vcmQgPSBudWxsKSB7XG4gIGlmIChtYWluRmxlZXRET00pIHJlbmRlckZsZWV0SW5kaWNhdG9yKG9wcG9uZW50LCBtYWluRmxlZXRET00pO1xuICByZW5kZXJTaGlwcyhvcHBvbmVudC5ib2FyZCwgbWFpbkJvYXJkRE9NLCBvcHBvbmVudCAhPT0gcGxheWVyLCBjb29yZCk7XG59XG5cbmZ1bmN0aW9uIHdhaXRNaWxsaXNlY29uZHMobXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgQk9BUkRfU0laRSB9IGZyb20gJy4vR2FtZUJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wdXRlclBsYXllciBleHRlbmRzIFBsYXllciB7XG4gICNhdmFpbGFibGVNb3ZlcztcbiAgI21vdmVzUG9pbnRlcjtcbiAgI3RhcmdldFNoaXA7XG4gICNmaXJzdEhpdENvb3JkO1xuICAjcHJldk1vdmU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ0NvbXB1dGVyJyk7XG4gICAgdGhpcy4jaW5pdEF2YWlsYWJsZU1vdmVzKCk7XG4gIH1cblxuICBhdHRhY2soYm9hcmQgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuI21vdmVzUG9pbnRlciA8PSAwKSByZXR1cm4gbnVsbDtcblxuICAgIGlmICh0aGlzLiN0YXJnZXRTaGlwID09IG51bGwgJiYgdGhpcy4jaXNMYXN0TW92ZUFIaXQoYm9hcmQpKSB7XG4gICAgICB0aGlzLiN0YXJnZXRTaGlwID0gdGhpcy4jZ2V0U2hpcCh0aGlzLiNwcmV2TW92ZSwgYm9hcmQpO1xuICAgICAgdGhpcy4jZmlyc3RIaXRDb29yZCA9IHRoaXMuI3ByZXZNb3ZlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiN0YXJnZXRTaGlwPy5pc1N1bmsoKSkge1xuICAgICAgdGhpcy4jcmVtb3ZlQWRqYWNlbnRNb3Zlcyhib2FyZCk7XG4gICAgICB0aGlzLiN0YXJnZXRTaGlwID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jdGFyZ2V0U2hpcD8uaGl0cyA9PT0gMSkge1xuICAgICAgaWYgKHRoaXMuI2lzTGFzdE1vdmVBTWlzcyhib2FyZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2dldFJhbmRvbUFkamFjZW50TW92ZSh0aGlzLiNmaXJzdEhpdENvb3JkLCBib2FyZCwgeyBkaXJlY3Rpb246IHRoaXMuI2dldFNoaXBEaXJlY3Rpb24odGhpcy4jdGFyZ2V0U2hpcCwgYm9hcmQpIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuI2dldFJhbmRvbUFkamFjZW50TW92ZSh0aGlzLiNwcmV2TW92ZSwgYm9hcmQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiN0YXJnZXRTaGlwPy5oaXRzID4gMSkge1xuICAgICAgaWYgKHRoaXMuI2lzTGFzdE1vdmVBTWlzcyhib2FyZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2dldFJhbmRvbUFkamFjZW50TW92ZSh0aGlzLiNmaXJzdEhpdENvb3JkLCBib2FyZCwgeyBkaXJlY3Rpb246IHRoaXMuI2dldFNoaXBEaXJlY3Rpb24odGhpcy4jdGFyZ2V0U2hpcCwgYm9hcmQpIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuI2dldFJhbmRvbUFkamFjZW50TW92ZSh0aGlzLiNwcmV2TW92ZSwgYm9hcmQsIHsgZGlyZWN0aW9uOiB0aGlzLiNnZXRTaGlwRGlyZWN0aW9uKHRoaXMuI3RhcmdldFNoaXAsIGJvYXJkKSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy4jZ2V0UmFuZG9tTW92ZSgpO1xuICB9XG5cbiAgI2lzTGFzdE1vdmVBSGl0KGJvYXJkKSB7XG4gICAgaWYgKGJvYXJkID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodGhpcy4jcHJldk1vdmUgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLiNwcmV2TW92ZTtcbiAgICByZXR1cm4gYm9hcmQuYm9hcmRbeV1beF0uc3RhdHVzID09PSAnaGl0JztcbiAgfVxuXG4gICNpc0xhc3RNb3ZlQU1pc3MoYm9hcmQpIHtcbiAgICBpZiAodGhpcy4jcHJldk1vdmUgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLiNwcmV2TW92ZTtcbiAgICByZXR1cm4gYm9hcmQuYm9hcmRbeV1beF0uc3RhdHVzID09PSAnbWlzcyc7XG4gIH1cblxuICAjZ2V0U2hpcChjb29yZCwgYm9hcmQpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGNvb3JkO1xuICAgIHJldHVybiBib2FyZC5ib2FyZFt5XVt4XS5zaGlwO1xuICB9XG5cbiAgI2dldFNoaXBEaXJlY3Rpb24oc2hpcCwgYm9hcmQpIHtcbiAgICBsZXQgZGlyZWN0aW9uID0gJ25vbmUnO1xuXG4gICAgYm9hcmQuYm9hcmQuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY29sKSA9PiB7XG4gICAgICAgIGlmIChjb2wuc2hpcCA9PT0gc2hpcCkge1xuICAgICAgICAgIGRpcmVjdGlvbiA9IGNvbC5kaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gICNnZXRSYW5kb21BZGphY2VudE1vdmUoZnJvbU1vdmUsIGJvYXJkLCB7IGRpcmVjdGlvbiB9ID0geyBkaXJlY3Rpb246ICdub25lJyB9KSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBmcm9tTW92ZTtcbiAgICBsZXQgcG9zc2libGVNb3ZlcyA9IFtdO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25vbmUnIHx8IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBwb3NzaWJsZU1vdmVzLnB1c2goeyB4OiB4IC0gMSwgeSB9KTtcbiAgICAgIHBvc3NpYmxlTW92ZXMucHVzaCh7IHg6IHggKyAxLCB5IH0pO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdub25lJyB8fCBkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHBvc3NpYmxlTW92ZXMucHVzaCh7IHgsIHk6IHkgLSAxIH0pO1xuICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHsgeCwgeTogeSArIDEgfSk7XG4gICAgfVxuXG4gICAgcG9zc2libGVNb3ZlcyA9IHBvc3NpYmxlTW92ZXMuZmlsdGVyKChtb3ZlKSA9PiB7XG4gICAgICBpZiAobW92ZS54IDwgMCB8fCBtb3ZlLnkgPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAobW92ZS54ID49IEJPQVJEX1NJWkUgfHwgbW92ZS55ID49IEJPQVJEX1NJWkUpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiAhdGhpcy4jYWxyZWFkeU1vdmVkKG1vdmUueCwgbW92ZS55KTtcbiAgICB9KTtcblxuICAgIGlmIChwb3NzaWJsZU1vdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gdGhpcyBzdGF0ZW1lbnQgYWNjb3VudHMgZm9yIHdoZW4gdGhlIHNoaXAgaXMgdG91Y2hpbmcgdGhlIGJvcmRlclxuICAgICAgcmV0dXJuIHRoaXMuI2dldFJhbmRvbUFkamFjZW50TW92ZSh0aGlzLiNmaXJzdEhpdENvb3JkLCBib2FyZCwgeyBkaXJlY3Rpb246IHRoaXMuI2dldFNoaXBEaXJlY3Rpb24odGhpcy4jdGFyZ2V0U2hpcCwgYm9hcmQpIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVNb3Zlcy5sZW5ndGgpO1xuICAgIHRoaXMuI3ByZXZNb3ZlID0gdGhpcy4jZ2V0TW92ZSh0aGlzLiNnZXRNb3ZlSW5kZXgocG9zc2libGVNb3Zlc1tpbmRleF0pKTtcbiAgICByZXR1cm4gdGhpcy4jcHJldk1vdmU7XG4gIH1cblxuICAjYWxyZWFkeU1vdmVkKHgsIHkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy4jbW92ZXNQb2ludGVyOyBpIDwgdGhpcy4jYXZhaWxhYmxlTW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzTW92ZSA9IHRoaXMuI2F2YWlsYWJsZU1vdmVzW2ldO1xuICAgICAgaWYgKHByZXZpb3VzTW92ZS54ID09PSB4ICYmIHByZXZpb3VzTW92ZS55ID09PSB5KSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgI3JlbW92ZUFkamFjZW50TW92ZXMoYm9hcmQpIHtcbiAgICBsZXQgbW92ZUluZm8gPSB0aGlzLiNnZXRNb3ZlSW5mbyh0aGlzLiNwcmV2TW92ZSwgYm9hcmQpO1xuICAgIHdoaWxlIChtb3ZlSW5mbykge1xuICAgICAgbW92ZUluZm8uYWRqYWNlbnRzLmZvckVhY2goKGFkamFjZW50KSA9PiB0aGlzLiNyZW1vdmVNb3ZlKGFkamFjZW50KSk7XG4gICAgICBtb3ZlSW5mbyA9IHRoaXMuI2dldE1vdmVJbmZvKG1vdmVJbmZvLm5leHQsIGJvYXJkLCBtb3ZlSW5mby5tb3ZlKTtcbiAgICB9XG4gIH1cblxuICAjZ2V0TW92ZUluZm8obW92ZSwgYm9hcmQsIHByZXZpb3VzID0gbnVsbCkge1xuICAgIGlmIChtb3ZlID09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgeyB4LCB5IH0gPSBtb3ZlO1xuICAgIGNvbnN0IG1vdmVJbmZvID0ge1xuICAgICAgYWRqYWNlbnRzOiBbXSxcbiAgICAgIG5leHQ6IG51bGwsXG4gICAgICBtb3ZlLFxuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gLTE7IGkgPD0gMTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gLTE7IGogPD0gMTsgaisrKSB7XG4gICAgICAgIGlmIChpID09PSAwICYmIGogPT09IDApIGNvbnRpbnVlOyAvLyBkb24ndCBwdXNoIHRoZSBtb3ZlIGl0c2VsZlxuXG4gICAgICAgIGNvbnN0IGRYID0geCArIGo7XG4gICAgICAgIGNvbnN0IGRZID0geSArIGk7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBib2FyZC5ib2FyZFtkWV0/LltkWF07XG4gICAgICAgIGlmIChjZWxsID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuXG4gICAgICAgIG1vdmVJbmZvLmFkamFjZW50cy5wdXNoKHsgeDogZFgsIHk6IGRZIH0pO1xuICAgICAgICBpZiAoY2VsbC5zdGF0dXMgPT09ICdoaXQnICYmICEoZFggPT09IHByZXZpb3VzPy54ICYmIGRZID09PSBwcmV2aW91cz8ueSkpIHtcbiAgICAgICAgICBtb3ZlSW5mby5uZXh0ID0geyB4OiBkWCwgeTogZFkgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb3ZlSW5mbztcbiAgfVxuXG4gICNyZW1vdmVNb3ZlKG1vdmUpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuI2dldE1vdmVJbmRleChtb3ZlKTtcbiAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLiNnZXRNb3ZlKGluZGV4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gICNnZXRSYW5kb21Nb3ZlKCkge1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy4jbW92ZXNQb2ludGVyKTtcbiAgICB0aGlzLiNwcmV2TW92ZSA9IHRoaXMuI2dldE1vdmUoaW5kZXgpO1xuICAgIHJldHVybiB0aGlzLiNwcmV2TW92ZTtcbiAgfVxuXG4gICNnZXRNb3ZlSW5kZXgoY29vcmQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI21vdmVzUG9pbnRlcjsgaSsrKSB7XG4gICAgICBjb25zdCBtb3ZlID0gdGhpcy4jYXZhaWxhYmxlTW92ZXNbaV07XG4gICAgICBpZiAobW92ZS54ID09PSBjb29yZC54ICYmIG1vdmUueSA9PT0gY29vcmQueSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAjZ2V0TW92ZShpbmRleCkge1xuICAgIHRoaXMuI21vdmVzUG9pbnRlci0tO1xuICAgIFt0aGlzLiNhdmFpbGFibGVNb3Zlc1tpbmRleF0sIHRoaXMuI2F2YWlsYWJsZU1vdmVzW3RoaXMuI21vdmVzUG9pbnRlcl1dID0gW3RoaXMuI2F2YWlsYWJsZU1vdmVzW3RoaXMuI21vdmVzUG9pbnRlcl0sIHRoaXMuI2F2YWlsYWJsZU1vdmVzW2luZGV4XV07XG4gICAgcmV0dXJuIHRoaXMuI2F2YWlsYWJsZU1vdmVzW3RoaXMuI21vdmVzUG9pbnRlcl07XG4gIH1cblxuICAjaW5pdEF2YWlsYWJsZU1vdmVzKCkge1xuICAgIHRoaXMuI2F2YWlsYWJsZU1vdmVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJPQVJEX1NJWkU7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBCT0FSRF9TSVpFOyBqKyspIHtcbiAgICAgICAgdGhpcy4jYXZhaWxhYmxlTW92ZXMucHVzaCh7XG4gICAgICAgICAgeDogaixcbiAgICAgICAgICB5OiBpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiNtb3Zlc1BvaW50ZXIgPSB0aGlzLiNhdmFpbGFibGVNb3Zlcy5sZW5ndGg7XG4gIH1cbn1cbiIsImltcG9ydCBpbnRlcmFjdCBmcm9tICdpbnRlcmFjdGpzJztcbmltcG9ydCB7IEJPQVJEX1NJWkUgfSBmcm9tICcuL0dhbWVCb2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVuZGVyQm9hcmQsXG4gIHJlbmRlclNoaXBzLFxuICByZW5kZXJGbGVldEluZGljYXRvcixcbiAgbWFrZVNoaXBzRHJhZ2dhYmxlLFxuICBtYWtlRHJvcHBhYmxlLFxuICBtYWtlU2hpcHNSb3RhdGFibGUsXG4gIHJlbW92ZUludGVyYWN0cyxcbn07XG5cbmNvbnN0IGRyYWdJbmZvID0ge1xuICBzaGlwOiBudWxsLFxuICBzaGlwRGlyZWN0aW9uOiAnbm9uZScsXG4gIHNoaXBFbGVtZW50OiBudWxsLFxuICBzaGlwQmxvY2s6IG51bGwsXG4gIGJvYXJkOiBudWxsLFxuICBib2FyZERPTTogbnVsbCxcbiAgaW50ZXJhY3RFbmFibGVkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZChnYW1lQm9hcmQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAoQk9BUkRfU0laRSArIDEpOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IChCT0FSRF9TSVpFICsgMSk7IGorKykge1xuICAgICAgY29uc3QgY2VsbCA9IGNyZWF0ZUNlbGwoaiwgaSk7XG4gICAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdhbWVCb2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2VsbCh4LCB5KSB7XG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG5cbiAgaWYgKCEoeCA9PT0gMCB8fCB5ID09PSAwKSkge1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZ2FtZS1jZWxsJyk7XG4gICAgY2VsbC5kYXRhc2V0LnggPSB4IC0gMTtcbiAgICBjZWxsLmRhdGFzZXQueSA9IHkgLSAxO1xuICB9XG4gIGVsc2UgaWYgKHggIT09IDAgJiYgeSA9PT0gMCkge1xuICAgIGNlbGwuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtTdHJpbmcuZnJvbUNoYXJDb2RlKHggKyA2NCl9PC9kaXY+YDtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2FscGhhLWxhYmVsJyk7XG4gIH1cbiAgZWxzZSBpZiAoeCA9PT0gMCAmJiB5ICE9PSAwKSB7XG4gICAgY2VsbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj4ke3l9PC9kaXY+YDtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ251bWVyaWMtbGFiZWwnKTtcbiAgfVxuXG4gIHJldHVybiBjZWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2hpcHMocGxheWVyQm9hcmQsIGJvYXJkRE9NLCBoaWRlU2hpcHMgPSBmYWxzZSwgY29vcmRUb0FuaW1hdGUgPSBudWxsKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMTI7XG4gIGNvbnN0IGdhbWVDZWxsU2l6ZSA9IGJvYXJkRE9NLmNoaWxkcmVuW3N0YXJ0XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgY29uc3QgYm9yZGVyU2l6ZSA9IGdhbWVDZWxsU2l6ZSAtIE51bWJlcih3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib2FyZERPTS5jaGlsZHJlbltzdGFydF0sICc6OmJlZm9yZScpLndpZHRoLnNsaWNlKDAsIC0yKSk7XG5cbiAgYm9hcmRET00ucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKS5mb3JFYWNoKChzaGlwKSA9PiBzaGlwLnJlbW92ZSgpKTtcbiAgcGxheWVyQm9hcmQuYm9hcmQuZm9yRWFjaCgocm93LCB5KSA9PiB7XG4gICAgcm93LmZvckVhY2goKGNvbCwgeCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGFydCArIHkgKiAxMSArIHg7XG4gICAgICBjb25zdCBjZWxsID0gYm9hcmRET00uY2hpbGRyZW5baW5kZXhdO1xuICAgICAgY29uc3QgeyBzaGlwLCBzdGF0dXMsIGRpcmVjdGlvbiB9ID0gY29sO1xuXG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ21pc3MnKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGl0Jyk7XG5cbiAgICAgIGlmIChjb29yZFRvQW5pbWF0ZT8ueCA9PT0geCAmJiBjb29yZFRvQW5pbWF0ZT8ueSA9PT0geSkge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAnaGl0JykgY2VsbC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImhpdCBhbmltYXRpb25cIj48L2Rpdj4nO1xuICAgICAgICBpZiAoc3RhdHVzID09PSAnbWlzcycpIGNlbGwuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJtaXNzIGFuaW1hdGlvblwiPjwvZGl2Pic7XG5cbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSAnbWlzcycpIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdoaXQnKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAnbWlzcycpIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICBpZiAoc3RhdHVzID09PSAnaGl0JykgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXAgPT09IG51bGwpIHJldHVybjtcbiAgICAgIGlmIChoaWRlU2hpcHMgJiYgIXNoaXAuaXNTdW5rKCkpIHJldHVybjsgLy8gZm9yIGNvbXB1dGVyJ3MgYm9hcmQgc28gaXQncyBoaWRkZW4gdG8gdGhlIHBsYXllciwgc2hvd3MgdGhlIHNoaXAgaWYgaXQgaXMgc3VuayB0aG91Z2hcblxuICAgICAgaWYgKHggPiAwICYmIHBsYXllckJvYXJkLmJvYXJkW3ldW3ggLSAxXS5zaGlwID09PSBzaGlwKSByZXR1cm47XG4gICAgICBpZiAoeSA+IDAgJiYgcGxheWVyQm9hcmQuYm9hcmRbeSAtIDFdW3hdLnNoaXAgPT09IHNoaXApIHJldHVybjtcblxuICAgICAgY29uc3QgdG9wID0gZ2FtZUNlbGxTaXplICogKDEgKyB5KTtcbiAgICAgIGNvbnN0IGxlZnQgPSBnYW1lQ2VsbFNpemUgKiAoMSArIHgpO1xuXG4gICAgICBsZXQgd2lkdGggPSBnYW1lQ2VsbFNpemU7XG4gICAgICBsZXQgaGVpZ2h0ID0gZ2FtZUNlbGxTaXplO1xuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHdpZHRoICo9IHNoaXAubGVuZ3RoO1xuICAgICAgZWxzZSBoZWlnaHQgKj0gc2hpcC5sZW5ndGg7XG5cbiAgICAgIHdpZHRoICs9IGJvcmRlclNpemU7XG4gICAgICBoZWlnaHQgKz0gYm9yZGVyU2l6ZTtcblxuICAgICAgaWYgKChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcgJiYgKHggKyAxKSA9PT0gQk9BUkRfU0laRSlcbiAgICAgICAgfHwgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmICh4ICsgc2hpcC5sZW5ndGgpID09PSBCT0FSRF9TSVpFKSkge1xuICAgICAgICB3aWR0aCAtPSBib3JkZXJTaXplO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzaGlwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc2hpcEVsZW1lbnQuY2xhc3NOYW1lID0gJ3NoaXAnO1xuICAgICAgc2hpcEVsZW1lbnQuZGF0YXNldC54ID0geDtcbiAgICAgIHNoaXBFbGVtZW50LmRhdGFzZXQueSA9IHk7XG4gICAgICBzaGlwRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgIHNoaXBFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICBzaGlwRWxlbWVudC5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xuICAgICAgc2hpcEVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICAgICAgc2hpcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBudWxsLCB0cnVlKTtcbiAgICAgIGlmIChkcmFnSW5mby5pbnRlcmFjdEVuYWJsZWQpIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ludGVyYWN0YWJsZScpO1xuXG4gICAgICBjb25zdCBzaGlwQmxvY2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzaGlwQmxvY2tzLmNsYXNzTmFtZSA9ICdzaGlwLWJsb2Nrcyc7XG4gICAgICBzaGlwQmxvY2tzLnN0eWxlLnRvcCA9IGAtJHtib3JkZXJTaXplICogMn1weGA7XG4gICAgICBzaGlwQmxvY2tzLnN0eWxlLmxlZnQgPSBgLSR7Ym9yZGVyU2l6ZSAqIDJ9cHhgO1xuICAgICAgc2hpcEJsb2Nrcy5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgIHNoaXBCbG9ja3Muc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykgc2hpcEJsb2Nrcy5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc2hpcEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBCbG9jay5jbGFzc05hbWUgPSAnc2hpcC1ibG9jayc7XG4gICAgICAgIHNoaXBCbG9jay5kYXRhc2V0LnggPSAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpID8geCArIGkgOiB4O1xuICAgICAgICBzaGlwQmxvY2suZGF0YXNldC55ID0gKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykgPyB5ICsgaSA6IHk7XG4gICAgICAgIHNoaXBCbG9jay5kYXRhc2V0LmluZGV4ID0gaTtcbiAgICAgICAgc2hpcEJsb2Nrcy5hcHBlbmRDaGlsZChzaGlwQmxvY2spO1xuICAgICAgfVxuXG4gICAgICBzaGlwRWxlbWVudC5hcHBlbmRDaGlsZChzaGlwQmxvY2tzKTtcbiAgICAgIGJvYXJkRE9NLmFwcGVuZENoaWxkKHNoaXBFbGVtZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJGbGVldEluZGljYXRvcihwbGF5ZXIsIGZsZWV0SW5kaWNhdG9yKSB7XG4gIGNvbnN0IHNoaXBTaXplID0gZmxlZXRJbmRpY2F0b3IuY2xpZW50V2lkdGggLyAxMTtcbiAgZmxlZXRJbmRpY2F0b3IuaW5uZXJIVE1MID0gJyc7XG5cbiAgcGxheWVyLmJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb25zdCBzaGlwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBFbGVtZW50LmNsYXNzTmFtZSA9ICdzaGlwJztcbiAgICBzaGlwRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3NoaXBTaXplICogc2hpcC5sZW5ndGh9cHhgO1xuICAgIHNoaXBFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke3NoaXBTaXplfXB4YDtcbiAgICBpZiAoc2hpcC5pc1N1bmsoKSkgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzaGlwQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNoaXBCbG9jay5jbGFzc05hbWUgPSAnc2hpcC1ibG9jayc7XG5cbiAgICAgIHNoaXBFbGVtZW50LmFwcGVuZENoaWxkKHNoaXBCbG9jayk7XG4gICAgfVxuXG4gICAgZmxlZXRJbmRpY2F0b3IuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBzaGlwRWxlbWVudCk7XG5cbiAgICBzaGlwLm9uU3VuayA9ICgpID0+IHtcbiAgICAgIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTaGlwc0RyYWdnYWJsZShib2FyZCwgYm9hcmRET00pIHtcbiAgY29uc3QgcG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcbiAgbGV0IGNsb25lZFNoaXAgPSBudWxsO1xuICBkcmFnSW5mby5pbnRlcmFjdEVuYWJsZWQgPSB0cnVlO1xuXG4gIGludGVyYWN0KCcuc2hpcCcpLmRyYWdnYWJsZSh7XG4gICAgbGlzdGVuZXJzOiB7XG4gICAgICBzdGFydChldmVudCkge1xuICAgICAgICBjbG9uZWRTaGlwID0gZXZlbnQudGFyZ2V0LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY2xvbmVkU2hpcC5zdHlsZS5vcGFjaXR5ID0gJzAuNic7XG4gICAgICAgIGJvYXJkRE9NLmFwcGVuZENoaWxkKGNsb25lZFNoaXApO1xuXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuXG4gICAgICAgIHBvc2l0aW9uLnggPSAwO1xuICAgICAgICBwb3NpdGlvbi55ID0gMDtcblxuICAgICAgICBjb25zdCB4ID0gTnVtYmVyKGV2ZW50LnRhcmdldC5kYXRhc2V0LngpO1xuICAgICAgICBjb25zdCB5ID0gTnVtYmVyKGV2ZW50LnRhcmdldC5kYXRhc2V0LnkpO1xuXG4gICAgICAgIGRyYWdJbmZvLnNoaXAgPSBib2FyZC5ib2FyZFt5XVt4XS5zaGlwO1xuICAgICAgICBkcmFnSW5mby5zaGlwRGlyZWN0aW9uID0gYm9hcmQuYm9hcmRbeV1beF0uZGlyZWN0aW9uO1xuICAgICAgICBib2FyZC5yZW1vdmVTaGlwKGRyYWdJbmZvLnNoaXApO1xuXG4gICAgICAgIGRyYWdJbmZvLnNoaXBFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBkcmFnSW5mby5ib2FyZCA9IGJvYXJkO1xuICAgICAgICBkcmFnSW5mby5ib2FyZERPTSA9IGJvYXJkRE9NO1xuICAgICAgfSxcbiAgICAgIG1vdmUoZXZlbnQpIHtcbiAgICAgICAgcG9zaXRpb24ueCArPSBldmVudC5keDtcbiAgICAgICAgcG9zaXRpb24ueSArPSBldmVudC5keTtcblxuICAgICAgICBldmVudC50YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weClgO1xuICAgICAgfSxcbiAgICAgIGVuZChldmVudCkge1xuICAgICAgICBjbG9uZWRTaGlwLnJlbW92ZSgpO1xuICAgICAgICBldmVudC50YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuXG4gICAgICAgIGNvbnN0IHggPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmRhdGFzZXQueCk7XG4gICAgICAgIGNvbnN0IHkgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmRhdGFzZXQueSk7XG4gICAgICAgIGNvbnN0IHsgc2hpcCwgc2hpcERpcmVjdGlvbjogZGlyZWN0aW9uIH0gPSBkcmFnSW5mbztcbiAgICAgICAgaWYgKHNoaXAgIT09IG51bGwpIHtcbiAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoeCwgeSwgc2hpcC5sZW5ndGgsIGRpcmVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXJTaGlwcyhib2FyZCwgYm9hcmRET00pO1xuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICBpbnRlcmFjdCgnLnNoaXAtYmxvY2snKS5vbignZG93bicsIChldmVudCkgPT4ge1xuICAgIGRyYWdJbmZvLnNoaXBCbG9jayA9IGV2ZW50LnRhcmdldDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRHJvcHBhYmxlKCkge1xuICBpbnRlcmFjdCgnLmdhbWUtY2VsbCcpLmRyb3B6b25lKHtcbiAgICBsaXN0ZW5lcnM6IHtcbiAgICAgIGRyYWdlbnRlcihldmVudCkge1xuICAgICAgICBsZXQgeCA9IE51bWJlcihldmVudC50YXJnZXQuZGF0YXNldC54KTtcbiAgICAgICAgbGV0IHkgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmRhdGFzZXQueSk7XG4gICAgICAgIGNvbnN0IHsgYm9hcmQsIHNoaXAsIHNoaXBEaXJlY3Rpb246IGRpcmVjdGlvbiB9ID0gZHJhZ0luZm87XG4gICAgICAgIGNvbnN0IGRyYWdnZWRTaGlwQmxvY2tJbmRleCA9IE51bWJlcihkcmFnSW5mby5zaGlwQmxvY2suZGF0YXNldC5pbmRleCk7XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB4IC09IGRyYWdnZWRTaGlwQmxvY2tJbmRleDtcbiAgICAgICAgZWxzZSB5IC09IGRyYWdnZWRTaGlwQmxvY2tJbmRleDtcblxuICAgICAgICBpZiAoIWJvYXJkLmNhblNoaXBCZVBsYWNlZCh4LCB5LCBzaGlwLmxlbmd0aCwgZGlyZWN0aW9uKSkge1xuICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnY2FudC1wbGFjZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2FudC1wbGFjZScpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZHJvcChldmVudCkge1xuICAgICAgICBjb25zdCBvcmlnWCA9IE51bWJlcihkcmFnSW5mby5zaGlwRWxlbWVudC5kYXRhc2V0LngpO1xuICAgICAgICBjb25zdCBvcmlnWSA9IE51bWJlcihkcmFnSW5mby5zaGlwRWxlbWVudC5kYXRhc2V0LnkpO1xuICAgICAgICBjb25zdCBkcmFnZ2VkU2hpcEJsb2NrWCA9IE51bWJlcihkcmFnSW5mby5zaGlwQmxvY2suZGF0YXNldC54KTtcbiAgICAgICAgY29uc3QgZHJhZ2dlZFNoaXBCbG9ja1kgPSBOdW1iZXIoZHJhZ0luZm8uc2hpcEJsb2NrLmRhdGFzZXQueSk7XG4gICAgICAgIGNvbnN0IG9mZnNldFggPSBkcmFnZ2VkU2hpcEJsb2NrWCAtIG9yaWdYO1xuICAgICAgICBjb25zdCBvZmZzZXRZID0gZHJhZ2dlZFNoaXBCbG9ja1kgLSBvcmlnWTtcblxuICAgICAgICBjb25zdCBuZXdYID0gTnVtYmVyKGV2ZW50LnRhcmdldC5kYXRhc2V0LngpO1xuICAgICAgICBjb25zdCBuZXdZID0gTnVtYmVyKGV2ZW50LnRhcmdldC5kYXRhc2V0LnkpO1xuXG4gICAgICAgIGNvbnN0IHsgc2hpcCwgYm9hcmQsIHNoaXBEaXJlY3Rpb246IGRpcmVjdGlvbiB9ID0gZHJhZ0luZm87XG5cbiAgICAgICAgY29uc3QgcGxhY2VkID0gYm9hcmQucGxhY2VTaGlwKG5ld1ggLSBvZmZzZXRYLCBuZXdZIC0gb2Zmc2V0WSwgc2hpcC5sZW5ndGgsIGRpcmVjdGlvbik7XG4gICAgICAgIGlmICghcGxhY2VkKSB7XG4gICAgICAgICAgYm9hcmQucGxhY2VTaGlwKG9yaWdYLCBvcmlnWSwgc2hpcC5sZW5ndGgsIGRpcmVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBkcmFnSW5mby5zaGlwID0gbnVsbDtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU2hpcHNSb3RhdGFibGUoYm9hcmQsIGJvYXJkRE9NKSB7XG4gIGludGVyYWN0KCcuc2hpcC1ibG9jaycpLm9uKCdkb3VibGV0YXAnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzaGlwRWxlbWVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2hpcCcpO1xuICAgIGNvbnN0IHggPSBOdW1iZXIoc2hpcEVsZW1lbnQuZGF0YXNldC54KTtcbiAgICBjb25zdCB5ID0gTnVtYmVyKHNoaXBFbGVtZW50LmRhdGFzZXQueSk7XG4gICAgY29uc3QgeyBzaGlwLCBkaXJlY3Rpb24gfSA9IGJvYXJkLmJvYXJkW3ldW3hdO1xuICAgIGNvbnN0IG5ld0RpcmVjdGlvbiA9IChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuXG4gICAgYm9hcmQucmVtb3ZlU2hpcChzaGlwKTtcblxuICAgIGNvbnN0IHBsYWNlZCA9IGJvYXJkLnBsYWNlU2hpcCh4LCB5LCBzaGlwLmxlbmd0aCwgbmV3RGlyZWN0aW9uKTtcbiAgICBpZiAoIXBsYWNlZCkge1xuICAgICAgYm9hcmQucGxhY2VTaGlwKHgsIHksIHNoaXAubGVuZ3RoLCBkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIHJlbmRlclNoaXBzKGJvYXJkLCBib2FyZERPTSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSW50ZXJhY3RzKGNsYXNzTGlzdCkge1xuICBkcmFnSW5mby5pbnRlcmFjdEVuYWJsZWQgPSBmYWxzZTtcblxuICBjbGFzc0xpc3QuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgaW50ZXJhY3QoYC4ke2NsYXNzTmFtZX1gKS51bnNldCgpO1xuICB9KTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnN0YW50LWNvbmRpdGlvbiwgbm8tbG9vcC1mdW5jLCBuby1hd2FpdC1pbi1sb29wLCBuby1jb25zb2xlICovXG5pbXBvcnQgeyBCT0FSRF9TSVpFIH0gZnJvbSAnLi9HYW1lQm9hcmQnO1xuaW1wb3J0IENvbXB1dGVyUGxheWVyIGZyb20gJy4vQ29tcHV0ZXJQbGF5ZXInO1xuXG5sZXQgZ2V0VXNlcklucHV0O1xuY29uc3QgR2FtZSA9IHtcbiAgc3RhcnQsXG4gIHBvcHVsYXRlQm9hcmQsXG4gIGdldCBnZXRVc2VySW5wdXQoKSB7XG4gICAgaWYgKHR5cGVvZiBnZXRVc2VySW5wdXQgIT09ICdmdW5jdGlvbicpIHJldHVybiAoKSA9PiB7fTtcbiAgICByZXR1cm4gZ2V0VXNlcklucHV0O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcblxuYXN5bmMgZnVuY3Rpb24gc3RhcnQoe1xuICBwbGF5ZXJPbmUsIHBsYXllclR3bywgb25CZWZvcmVUdXJuLCBvblR1cm4sIG9uVHVybk1hZGUsIG9uTmV4dFR1cm4sXG59KSB7XG4gIGNvbnN0IGxpc3RlbmVycyA9IHtcbiAgICBvbkJlZm9yZVR1cm4sIG9uVHVybiwgb25UdXJuTWFkZSwgb25OZXh0VHVybixcbiAgfTtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGF3YWl0IGhhbmRsZVR1cm4ocGxheWVyT25lLCBwbGF5ZXJUd28sIGxpc3RlbmVycyk7XG4gICAgaWYgKHBsYXllclR3by5ib2FyZC5oYXNBbGxTdW5rKCkpIGJyZWFrO1xuXG4gICAgYXdhaXQgaGFuZGxlVHVybihwbGF5ZXJUd28sIHBsYXllck9uZSwgbGlzdGVuZXJzKTtcbiAgICBpZiAocGxheWVyT25lLmJvYXJkLmhhc0FsbFN1bmsoKSkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcGxheWVyVHdvLmJvYXJkLmhhc0FsbFN1bmsoKSA/IHBsYXllck9uZSA6IHBsYXllclR3bztcbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlVHVybihwbGF5ZXIsIG9wcG9uZW50LCBsaXN0ZW5lcnMpIHtcbiAgY29uc3QgaXNDb21wdXRlciA9IChwbGF5ZXIgaW5zdGFuY2VvZiBDb21wdXRlclBsYXllcik7XG4gIGxldCBoaXQ7XG4gIGxldCBhbHJlYWR5SGl0ID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGxpc3RlbmVycy5vbkJlZm9yZVR1cm4gPT09ICdmdW5jdGlvbicpIGF3YWl0IGxpc3RlbmVycy5vbkJlZm9yZVR1cm4ocGxheWVyLCBvcHBvbmVudCk7XG5cbiAgZG8ge1xuICAgIGNvbnN0IGNvb3JkID0gKGlzQ29tcHV0ZXIpXG4gICAgICA/IHBsYXllci5hdHRhY2sob3Bwb25lbnQuYm9hcmQpXG4gICAgICA6IChhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4geyBnZXRVc2VySW5wdXQgPSByZXNvbHZlOyB9KSk7XG5cbiAgICBpZiAoIWlzQ29tcHV0ZXIgJiYgY29vcmQucGxheWVyICE9PSBwbGF5ZXIpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gY29vcmQ7XG4gICAgY29vcmQueCA9IE51bWJlcih4KTtcbiAgICBjb29yZC55ID0gTnVtYmVyKHkpO1xuXG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMub25UdXJuID09PSAnZnVuY3Rpb24nKSBhd2FpdCBsaXN0ZW5lcnMub25UdXJuKHBsYXllciwgb3Bwb25lbnQpO1xuXG4gICAgKHsgaGl0LCBhbHJlYWR5SGl0IH0gPSBvcHBvbmVudC5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpKTtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVycy5vblR1cm5NYWRlID09PSAnZnVuY3Rpb24nKSBhd2FpdCBsaXN0ZW5lcnMub25UdXJuTWFkZShwbGF5ZXIsIG9wcG9uZW50LCAoYWxyZWFkeUhpdCkgPyBudWxsIDogY29vcmQpO1xuXG4gICAgaWYgKG9wcG9uZW50LmJvYXJkLmhhc0FsbFN1bmsoKSkgcmV0dXJuO1xuICB9IHdoaWxlIChoaXQgfHwgYWxyZWFkeUhpdCk7XG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMub25OZXh0VHVybiA9PT0gJ2Z1bmN0aW9uJykgYXdhaXQgbGlzdGVuZXJzLm9uTmV4dFR1cm4ocGxheWVyLCBvcHBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQm9hcmQoYm9hcmQpIHtcbiAgY29uc3Qgc2hpcHNMZW5ndGhzID0gWzUsIDQsIDMsIDIsIDIsIDEsIDFdO1xuICBzaGlwc0xlbmd0aHMuZm9yRWFjaCgoc2hpcExlbmd0aCkgPT4ge1xuICAgIGxldCB4O1xuICAgIGxldCB5O1xuICAgIGxldCBkaXJlY3Rpb247XG5cbiAgICBkbyB7XG4gICAgICB4ID0gZ2VuZXJhdGVSYW5kb21JbnQoQk9BUkRfU0laRSk7XG4gICAgICB5ID0gZ2VuZXJhdGVSYW5kb21JbnQoQk9BUkRfU0laRSk7XG4gICAgICBkaXJlY3Rpb24gPSAoTWF0aC5yYW5kb20oKSA+IDAuNSkgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgIH0gd2hpbGUgKCFib2FyZC5wbGFjZVNoaXAoeCwgeSwgc2hpcExlbmd0aCwgZGlyZWN0aW9uKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUludChudW0pIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bSk7XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuXG5leHBvcnQgY29uc3QgQk9BUkRfU0laRSA9IDEwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICAjYm9hcmQ7XG4gICNzaGlwcztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNzaGlwcyA9IFtdO1xuICAgIHRoaXMuI2luaXRCb2FyZChCT0FSRF9TSVpFLCBCT0FSRF9TSVpFKTtcbiAgfVxuXG4gIGdldCBib2FyZCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh0aGlzLiNib2FyZCk7XG4gIH1cblxuICBnZXQgc2hpcHMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUodGhpcy4jc2hpcHMpO1xuICB9XG5cbiAgaGFzQWxsU3VuaygpIHtcbiAgICBpZiAoIXRoaXMuI3NoaXBzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXMuI3NoaXBzLnJlZHVjZSgoc3Vuaywgc2hpcCkgPT4ge1xuICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gc3VuaztcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIHBsYWNlU2hpcCh4LCB5LCBsZW5ndGggPSAxLCBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCcpIHtcbiAgICBpZiAoIXRoaXMuY2FuU2hpcEJlUGxhY2VkKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IHNoaXA7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG4gICAgICBmb3IgKGxldCBpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdGhpcy4jYm9hcmRbeSArIGldW3hdLnNoaXAgPSBzaGlwO1xuICAgICAgICB0aGlzLiNib2FyZFt5ICsgaV1beF0uZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuICAgICAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHRoaXMuI2JvYXJkW3ldW3ggKyBpXS5zaGlwID0gc2hpcDtcbiAgICAgICAgdGhpcy4jYm9hcmRbeV1beCArIGldLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiNzaGlwcy5wdXNoKHNoaXApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2FuU2hpcEJlUGxhY2VkKHgsIHksIGxlbmd0aCA9IDEsIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJykge1xuICAgIGlmICh4IDwgMCB8fCB4ID49IEJPQVJEX1NJWkUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoeSA8IDAgfHwgeSA+PSBCT0FSRF9TSVpFKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZiAoKHkgKyBsZW5ndGggLSAxKSA+PSBCT0FSRF9TSVpFKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGkgPSBsZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAodGhpcy4jaXNDb29yZE5lYXJTaGlwcyh4LCB5ICsgaSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoKHggKyBsZW5ndGggLSAxKSA+PSBCT0FSRF9TSVpFKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGkgPSBsZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAodGhpcy4jaXNDb29yZE5lYXJTaGlwcyh4ICsgaSwgeSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZVNoaXAoc2hpcCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy4jc2hpcHMuaW5kZXhPZihzaGlwKTtcbiAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLiNzaGlwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuI2JvYXJkLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgICBpZiAoc2hpcCA9PT0gY29sLnNoaXApIHtcbiAgICAgICAgICBjb2wuc2hpcCA9IG51bGw7XG4gICAgICAgICAgY29sLmRpcmVjdGlvbiA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGNvbnN0IG91dGNvbWUgPSB7XG4gICAgICBjb29yZHM6IHsgeCwgeSB9LFxuICAgICAgaGl0OiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY29uc3QgYmxvY2sgPSB0aGlzLiNib2FyZFt5XT8uW3hdO1xuXG4gICAgaWYgKGJsb2NrID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiAnaW52YWxpZCBjb29yZGluYXRlcycsXG4gICAgICAgIC4uLm91dGNvbWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChibG9jay5zaGlwID09PSBudWxsICYmIGJsb2NrLnN0YXR1cyA9PT0gJ25vbmUnKSB7XG4gICAgICB0aGlzLiNib2FyZFt5XVt4XS5zdGF0dXMgPSAnbWlzcyc7XG4gICAgICByZXR1cm4gb3V0Y29tZTtcbiAgICB9XG5cbiAgICBpZiAoYmxvY2suc3RhdHVzID09PSAnaGl0JyB8fCBibG9jay5zdGF0dXMgPT09ICdtaXNzJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWxyZWFkeUhpdDogdHJ1ZSxcbiAgICAgICAgLi4ub3V0Y29tZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgYmxvY2suc2hpcC5oaXQoKTtcbiAgICBvdXRjb21lLmhpdCA9IHRydWU7XG4gICAgdGhpcy4jYm9hcmRbeV1beF0uc3RhdHVzID0gJ2hpdCc7XG5cbiAgICByZXR1cm4gb3V0Y29tZTtcbiAgfVxuXG4gICNpbml0Qm9hcmQocm93cywgY29scykge1xuICAgIHRoaXMuI2JvYXJkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gW107XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sczsgaisrKSB7XG4gICAgICAgIHJvdy5wdXNoKHtcbiAgICAgICAgICBzaGlwOiBudWxsLFxuICAgICAgICAgIHN0YXR1czogJ25vbmUnLFxuICAgICAgICAgIGRpcmVjdGlvbjogJ25vbmUnLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4jYm9hcmQucHVzaChyb3cpO1xuICAgIH1cbiAgfVxuXG4gICNpc0Nvb3JkTmVhclNoaXBzKHgsIHkpIHtcbiAgICBmb3IgKGxldCBpID0gLTE7IGkgPCAyOyBpKyspIHtcbiAgICAgIGNvbnN0IGFZID0geSArIGk7XG4gICAgICBpZiAoYVkgPCAwIHx8IGFZID49IEJPQVJEX1NJWkUpIGNvbnRpbnVlO1xuXG4gICAgICBmb3IgKGxldCBqID0gLTE7IGogPCAyOyBqKyspIHtcbiAgICAgICAgY29uc3QgYVggPSB4ICsgajtcbiAgICAgICAgaWYgKGFYIDwgMCB8fCBhWCA+PSBCT0FSRF9TSVpFKSBjb250aW51ZTtcblxuICAgICAgICBpZiAodGhpcy4jYm9hcmRbYVldW2FYXS5zaGlwICE9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9HYW1lQm9hcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAjbmFtZTtcbiAgI2JvYXJkO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLiNuYW1lID0gbmFtZTtcbiAgICB0aGlzLiNib2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNuYW1lO1xuICB9XG5cbiAgZ2V0IGJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLiNib2FyZDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIG9uSGl0O1xuICBvblN1bms7XG4gICNsZW5ndGg7XG4gICNoaXRzO1xuICAjc3VuaztcblxuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICBpZiAobGVuZ3RoIDw9IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdpbnZhbGlkIHNoaXAgbGVuZ3RoJyk7XG5cbiAgICB0aGlzLiNoaXRzID0gMDtcbiAgICB0aGlzLiNzdW5rID0gZmFsc2U7XG4gICAgdGhpcy4jbGVuZ3RoID0gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jbGVuZ3RoO1xuICB9XG5cbiAgZ2V0IGhpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2hpdHM7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy4jaGl0cysrO1xuICAgIGlmICh0eXBlb2YgdGhpcy5vbkhpdCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5vbkhpdCh0aGlzLiNoaXRzKTtcblxuICAgIGlmICh0aGlzLiNoaXRzID49IHRoaXMuI2xlbmd0aCkge1xuICAgICAgdGhpcy4jc3VuayA9IHRydWU7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub25TdW5rID09PSAnZnVuY3Rpb24nKSB0aGlzLm9uU3VuaygpO1xuICAgIH1cbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy4jc3VuaztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJidWlsZFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b3BfYmF0dGxlc2hpcFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b3BfYmF0dGxlc2hpcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19pbnRlcmFjdGpzX2Rpc3RfaW50ZXJhY3RfbWluX2pzLW5vZGVfbW9kdWxlc19ub3JtYWxpemVfY3NzX25vcm1hbGl6ZV9jc3NcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=