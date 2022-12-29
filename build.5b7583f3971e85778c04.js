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

        cell.addEventListener('animationend', (e) => {
          cell.innerHTML = '';
          if (e.target.classList.contains('miss')) cell.classList.add('miss');
          if (e.target.classList.contains('hit')) cell.classList.add('hit');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuNWI3NTgzZjM5NzFlODU3NzhjMDQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGlEQUFpRCxrQ0FBa0Msd0JBQXdCLDZCQUE2QiwrQkFBK0IsNEJBQTRCLHlCQUF5QixtQkFBbUIsR0FBRyxPQUFPLGNBQWMsZUFBZSxxREFBcUQsMkJBQTJCLEdBQUcsZ0NBQWdDLFVBQVUsMEJBQTBCLEtBQUssUUFBUSwwQkFBMEIsS0FBSyxHQUFHLFVBQVUsc0NBQXNDLDJCQUEyQixvQkFBb0IsR0FBRywwQkFBMEIscUJBQXFCLG1CQUFtQixvQkFBb0Isd0JBQXdCLHVCQUF1QixHQUFHLFlBQVksdUJBQXVCLHVCQUF1QixHQUFHLGdCQUFnQix1QkFBdUIsR0FBRyx3QkFBd0IsbUJBQW1CLHVCQUF1Qix1QkFBdUIsdUJBQXVCLDhCQUE4QixzQkFBc0IscUJBQXFCLDJCQUEyQixHQUFHLGlCQUFpQix1Q0FBdUMsaUJBQWlCLEdBQUcsVUFBVSxzQkFBc0IsdUJBQXVCLGtCQUFrQixHQUFHLHFDQUFxQyxnQkFBZ0IsNEJBQTRCLGlCQUFpQixpQkFBaUIsb0JBQW9CLEdBQUcsaURBQWlELHNDQUFzQyxHQUFHLHFDQUFxQyxrREFBa0QscUJBQXFCLGtCQUFrQiwyQ0FBMkMsdUJBQXVCLG1CQUFtQixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxXQUFXLHVCQUF1QixHQUFHLG1CQUFtQixrQkFBa0IsY0FBYyxtQkFBbUIsc0JBQXNCLEdBQUcsb0JBQW9CLGdCQUFnQixpQkFBaUIsa0JBQWtCLCtCQUErQix1QkFBdUIsV0FBVyxZQUFZLEdBQUcsZ0JBQWdCLHdDQUF3Qyx5Q0FBeUMsR0FBRywrQkFBK0IsMENBQTBDLEdBQUcsbUNBQW1DLDJDQUEyQyxHQUFHLDJCQUEyQixnQkFBZ0IsaUJBQWlCLGFBQWEsY0FBYyx1QkFBdUIscUNBQXFDLEdBQUcsa0RBQWtELHlDQUF5QyxHQUFHLGdEQUFnRCxpQ0FBaUMsR0FBRyx1QkFBdUIsdUJBQXVCLDRCQUE0Qix1QkFBdUIsK0NBQStDLEdBQUcsb0NBQW9DLHVCQUF1QixpQkFBaUIsR0FBRyxrQ0FBa0MsdUNBQXVDLDZDQUE2QyxHQUFHLGdDQUFnQyxlQUFlLEdBQUcsOEJBQThCLGtCQUFrQix1QkFBdUIsR0FBRyw2QkFBNkIsWUFBWSxHQUFHLHNCQUFzQixlQUFlLG1CQUFtQixrQkFBa0Isb0JBQW9CLDRCQUE0QixhQUFhLEdBQUcsNEJBQTRCLGtCQUFrQiw0QkFBNEIsdUJBQXVCLEdBQUcsaUNBQWlDLGlDQUFpQyxHQUFHLGtDQUFrQyxZQUFZLDRDQUE0QywrQ0FBK0MsR0FBRyw2Q0FBNkMsOEJBQThCLEdBQUcsU0FBUyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxpQ0FBaUMsa0NBQWtDLHdCQUF3Qiw2QkFBNkIsK0JBQStCLDRCQUE0Qix5QkFBeUIsbUJBQW1CLEdBQUcsT0FBTyxjQUFjLGVBQWUscURBQXFELDJCQUEyQixHQUFHLGdDQUFnQyxVQUFVLDBCQUEwQixLQUFLLFFBQVEsMEJBQTBCLEtBQUssR0FBRyxVQUFVLHNDQUFzQywyQkFBMkIsb0JBQW9CLEdBQUcsMEJBQTBCLHFCQUFxQixtQkFBbUIsb0JBQW9CLHdCQUF3Qix1QkFBdUIsR0FBRyxZQUFZLHVCQUF1Qix1QkFBdUIsR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsd0JBQXdCLG1CQUFtQix1QkFBdUIsdUJBQXVCLHVCQUF1Qiw4QkFBOEIsc0JBQXNCLHFCQUFxQiwyQkFBMkIsR0FBRyxpQkFBaUIsdUNBQXVDLGlCQUFpQixHQUFHLFVBQVUsc0JBQXNCLHVCQUF1QixrQkFBa0IsR0FBRyxxQ0FBcUMsZ0JBQWdCLDRCQUE0QixpQkFBaUIsaUJBQWlCLG9CQUFvQixHQUFHLGlEQUFpRCxzQ0FBc0MsR0FBRyxxQ0FBcUMsa0RBQWtELHFCQUFxQixrQkFBa0IsMkNBQTJDLHVCQUF1QixtQkFBbUIsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsV0FBVyx1QkFBdUIsR0FBRyxtQkFBbUIsa0JBQWtCLGNBQWMsbUJBQW1CLHNCQUFzQixHQUFHLG9CQUFvQixnQkFBZ0IsaUJBQWlCLGtCQUFrQiwrQkFBK0IsdUJBQXVCLFdBQVcsWUFBWSxHQUFHLGdCQUFnQix3Q0FBd0MseUNBQXlDLEdBQUcsK0JBQStCLDBDQUEwQyxHQUFHLG1DQUFtQywyQ0FBMkMsR0FBRywyQkFBMkIsZ0JBQWdCLGlCQUFpQixhQUFhLGNBQWMsdUJBQXVCLHFDQUFxQyxHQUFHLGtEQUFrRCx5Q0FBeUMsR0FBRyxnREFBZ0QsaUNBQWlDLEdBQUcsdUJBQXVCLHVCQUF1Qiw0QkFBNEIsdUJBQXVCLCtDQUErQyxHQUFHLG9DQUFvQyx1QkFBdUIsaUJBQWlCLEdBQUcsa0NBQWtDLHVDQUF1Qyw2Q0FBNkMsR0FBRyxnQ0FBZ0MsZUFBZSxHQUFHLDhCQUE4QixrQkFBa0IsdUJBQXVCLEdBQUcsNkJBQTZCLFlBQVksR0FBRyxzQkFBc0IsZUFBZSxtQkFBbUIsa0JBQWtCLG9CQUFvQiw0QkFBNEIsYUFBYSxHQUFHLDRCQUE0QixrQkFBa0IsNEJBQTRCLHVCQUF1QixHQUFHLGlDQUFpQyxpQ0FBaUMsR0FBRyxrQ0FBa0MsWUFBWSw0Q0FBNEMsK0NBQStDLEdBQUcsNkNBQTZDLDhCQUE4QixHQUFHLHFCQUFxQjtBQUNscFI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdkMsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCdEQ7QUFDRjtBQUdPO0FBQ007QUFDSTtBQUNnQjs7QUFFdEQscUJBQXFCLDhEQUFXO0FBQ2hDO0FBQ0E7O0FBRUEsaUJBQWlCLHVEQUFNO0FBQ3ZCLG1CQUFtQiwrREFBYztBQUNqQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSxrRUFBaUI7QUFDbkI7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1FQUFrQjtBQUNsQixtRUFBa0I7O0FBRWxCLDhEQUFXOztBQUVYLHFFQUFrQjtBQUNsQixxRUFBa0I7QUFDbEIsZ0VBQWE7O0FBRWI7QUFDQTtBQUNBLEVBQUUsa0VBQWU7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSx1RUFBb0I7QUFDdEIsRUFBRSw4REFBVzs7QUFFYixFQUFFLDJEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILCtCQUErQixhQUFhOztBQUU1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsdURBQU07QUFDekIscUJBQXFCLCtEQUFjO0FBQ25DOztBQUVBLE1BQU0sbUVBQWtCO0FBQ3hCLE1BQU0sbUVBQWtCOztBQUV4QixNQUFNLDhEQUFXOztBQUVqQixNQUFNLHFFQUFrQjtBQUN4QixNQUFNLHFFQUFrQjtBQUN4QixNQUFNLGdFQUFhO0FBQ25CLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBLG9CQUFvQix1RUFBb0I7QUFDeEMsRUFBRSw4REFBVztBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySHlDO0FBQ1g7O0FBRWYsNkJBQTZCLCtDQUFNO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUVBQXlFLDREQUE0RDtBQUNySTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlFQUF5RSw0REFBNEQ7QUFDckk7QUFDQSxrRUFBa0UsNERBQTREO0FBQzlIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBLDRDQUE0QyxZQUFZLElBQUksbUJBQW1CO0FBQy9FLFlBQVksT0FBTztBQUNuQjs7QUFFQTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDLDJCQUEyQixhQUFhO0FBQ3hDOztBQUVBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEMsMkJBQTJCLGFBQWE7QUFDeEM7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixrREFBVSxjQUFjLGtEQUFVO0FBQ3REO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsdUVBQXVFLDREQUE0RDtBQUNuSTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxpQ0FBaUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixRQUFRO0FBQzdCLHVCQUF1QixRQUFRO0FBQy9CLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLGNBQWM7QUFDaEQ7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixJQUFJLGtEQUFVLEVBQUU7QUFDcEMsc0JBQXNCLElBQUksa0RBQVUsRUFBRTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TWtDO0FBQ087O0FBRXpDLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1Asa0JBQWtCLEtBQUssa0RBQVUsT0FBTztBQUN4QyxvQkFBb0IsS0FBSyxrREFBVSxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyw0QkFBNEI7QUFDekU7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLEVBQUU7QUFDL0M7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDBCQUEwQjs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQzs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1EQUFtRCxrREFBVTtBQUM3RCxnRUFBZ0Usa0RBQVU7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNO0FBQ3pDLG9DQUFvQyxPQUFPO0FBQzNDLGlDQUFpQyxJQUFJO0FBQ3JDLGtDQUFrQyxLQUFLO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxlQUFlO0FBQ2hELGtDQUFrQyxlQUFlO0FBQ2pELGtDQUFrQyxNQUFNO0FBQ3hDLG1DQUFtQyxPQUFPOztBQUUxQztBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1QkFBdUI7QUFDeEQsa0NBQWtDLFNBQVM7QUFDM0M7O0FBRUEsb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1AscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUEsRUFBRSxpREFBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLG9EQUFvRCxXQUFXLE1BQU0sV0FBVztBQUNoRixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixpQ0FBaUM7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHOztBQUVILEVBQUUsaURBQVE7QUFDVjtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQLEVBQUUsaURBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3Q0FBd0M7QUFDeEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0Isd0NBQXdDOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVPO0FBQ1AsRUFBRSxpREFBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0JBQWtCO0FBQzlCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7O0FBRUE7QUFDQSxJQUFJLGlEQUFRLEtBQUssVUFBVTtBQUMzQixHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFNBO0FBQ3lDO0FBQ0s7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLElBQUksRUFBQzs7QUFFcEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLHVEQUFjO0FBQ3REO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHlCQUF5Qjs7QUFFbkU7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTs7QUFFQSxPQUFPLGtCQUFrQjtBQUN6Qjs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsa0RBQVU7QUFDdEMsNEJBQTRCLGtEQUFVO0FBQ3RDO0FBQ0EsTUFBTTtBQUNOLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0UwQjs7QUFFbkI7O0FBRVE7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDZDQUFJO0FBQ3JCLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkNBQUk7QUFDckIsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFVBQVU7QUFDOUI7O0FBRUEsc0JBQXNCLFVBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTs7QUFFQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSm9DOztBQUVyQjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixrREFBUztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ2hEQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL0NvbXB1dGVyUGxheWVyLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvRE9NVXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9HYW1lLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvUGxheWVyLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvU2hpcC5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmctY29sb3I6IGhzbCgyNTIsIDMlLCAxMCUpO1xcbiAgLS1mZy1jb2xvcjogIzgwODA4MDtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzU1N2E5NTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjNzM5NWFlO1xcbiAgLS1hY2NlbnQtY29sb3I6ICNiMWEyOTY7XFxuICAtLW5hdnktYmx1ZTogIzBkNWZhNztcXG4gIC0tcmVkOiAjZmYwMDAwO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGtleWZyYW1lcyBzY2FsZUZyb21DZW50ZXIge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZnLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLyogTEFZT1VUICovXFxuXFxuYm9keSB7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAzMnB4IDAgMCAwO1xcbn1cXG5cXG4udGl0bGUgKyBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZhbmN5LXJvdW5kZWQtYm94IHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbiAgcGFkZGluZzogMTBweCAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxufVxcblxcbi5tYWluLWxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnktYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50aXAge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDhweCAwO1xcbn1cXG5cXG4uc3RhcnQtZ2FtZS1idG4sXFxuLm5ldy1nYW1lLWJ0biB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3RhcnQtZ2FtZS1idG46aG92ZXIsXFxuLm5ldy1nYW1lLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDkwJSk7XFxufVxcblxcbi8qIEdBTUUgQk9BUkQgKi9cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICAtLWJvcmRlci1nYW1lLWNlbGw6IDJweCBzb2xpZCB2YXIoLS1mZy1jb2xvcik7XFxuICBtYXgtd2lkdGg6IDcyMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5tYWluLWdhbWUtYm9hcmQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2VsbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nLXRvcDogMTAwJTtcXG59XFxuXFxuLmNlbGwgLmNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4uZ2FtZS1jZWxsIHtcXG4gIGJvcmRlci10b3A6IHZhcigtLWJvcmRlci1nYW1lLWNlbGwpO1xcbiAgYm9yZGVyLWxlZnQ6IHZhcigtLWJvcmRlci1nYW1lLWNlbGwpO1xcbn1cXG5cXG4uZ2FtZS1jZWxsOm50aC1jaGlsZCgxMW4pIHtcXG4gIGJvcmRlci1yaWdodDogdmFyKC0tYm9yZGVyLWdhbWUtY2VsbCk7XFxufVxcblxcbi5nYW1lLWNlbGw6bnRoLWNoaWxkKG4gKyAxMTEpIHtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlci1nYW1lLWNlbGwpO1xcbn1cXG5cXG4uZ2FtZS1jZWxsIC5hbmltYXRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFuaW1hdGlvbjogc2NhbGVGcm9tQ2VudGVyIDUwMG1zO1xcbn1cXG5cXG4uZ2FtZS1jZWxsLm1pc3MsXFxuLmdhbWUtY2VsbCAubWlzcy5hbmltYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMywgMTAzLCAxMDMpO1xcbn1cXG5cXG4uZ2FtZS1jZWxsLmhpdCxcXG4uZ2FtZS1jZWxsIC5oaXQuYW5pbWF0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi5nYW1lLWJvYXJkIC5zaGlwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCAuc2hpcC5pbnRlcmFjdGFibGUge1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCAuc2hpcC5jYW50LXBsYWNlIHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYigyNTUsIDkwLCA5MCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NSwgNjAsIDYwLCAwLjIpO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCAuc2hpcC5kcmFnZ2luZyB7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCAuc2hpcC1ibG9ja3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmdhbWUtYm9hcmQgLnNoaXAtYmxvY2sge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmZsZWV0LWluZGljYXRvciB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmZsZWV0LWluZGljYXRvciAuc2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5mbGVldC1pbmRpY2F0b3IgLnNoaXAuc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4uZmxlZXQtaW5kaWNhdG9yIC5zaGlwLWJsb2NrIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1mZy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbi5mbGVldC1pbmRpY2F0b3IgLnNoaXAtYmxvY2s6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsOENBQThDO0VBQzlDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBOztFQUVFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGlDQUFpQztBQUNuQzs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsNkNBQTZDO0VBQzdDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztBQUNUOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDOztBQUVBOztFQUVFLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsT0FBTztFQUNQLHVDQUF1QztFQUN2QywwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogaHNsKDI1MiwgMyUsIDEwJSk7XFxuICAtLWZnLWNvbG9yOiAjODA4MDgwO1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjNTU3YTk1O1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICM3Mzk1YWU7XFxuICAtLWFjY2VudC1jb2xvcjogI2IxYTI5NjtcXG4gIC0tbmF2eS1ibHVlOiAjMGQ1ZmE3O1xcbiAgLS1yZWQ6ICNmZjAwMDA7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNjYWxlRnJvbUNlbnRlciB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZmctY29sb3IpO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4vKiBMQVlPVVQgKi9cXG5cXG5ib2R5IHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi50aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDMycHggMCAwIDA7XFxufVxcblxcbi50aXRsZSArIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmFuY3ktcm91bmRlZC1ib3gge1xcbiAgbWFyZ2luOiAxNnB4IDA7XFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG59XFxuXFxuLm1haW4tbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRpcCB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogOHB4IDA7XFxufVxcblxcbi5zdGFydC1nYW1lLWJ0bixcXG4ubmV3LWdhbWUtYnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdGFydC1nYW1lLWJ0bjpob3ZlcixcXG4ubmV3LWdhbWUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTAlKTtcXG59XFxuXFxuLyogR0FNRSBCT0FSRCAqL1xcblxcbi5nYW1lLWJvYXJkIHtcXG4gIC0tYm9yZGVyLWdhbWUtY2VsbDogMnB4IHNvbGlkIHZhcigtLWZnLWNvbG9yKTtcXG4gIG1heC13aWR0aDogNzIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1haW4tZ2FtZS1ib2FyZCB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jZWxsOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmctdG9wOiAxMDAlO1xcbn1cXG5cXG4uY2VsbCAuY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5nYW1lLWNlbGwge1xcbiAgYm9yZGVyLXRvcDogdmFyKC0tYm9yZGVyLWdhbWUtY2VsbCk7XFxuICBib3JkZXItbGVmdDogdmFyKC0tYm9yZGVyLWdhbWUtY2VsbCk7XFxufVxcblxcbi5nYW1lLWNlbGw6bnRoLWNoaWxkKDExbikge1xcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ib3JkZXItZ2FtZS1jZWxsKTtcXG59XFxuXFxuLmdhbWUtY2VsbDpudGgtY2hpbGQobiArIDExMSkge1xcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyLWdhbWUtY2VsbCk7XFxufVxcblxcbi5nYW1lLWNlbGwgLmFuaW1hdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYW5pbWF0aW9uOiBzY2FsZUZyb21DZW50ZXIgNTAwbXM7XFxufVxcblxcbi5nYW1lLWNlbGwubWlzcyxcXG4uZ2FtZS1jZWxsIC5taXNzLmFuaW1hdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLCAxMDMsIDEwMyk7XFxufVxcblxcbi5nYW1lLWNlbGwuaGl0LFxcbi5nYW1lLWNlbGwgLmhpdC5hbmltYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLmdhbWUtYm9hcmQgLnNoaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbi5nYW1lLWJvYXJkIC5zaGlwLmludGVyYWN0YWJsZSB7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5nYW1lLWJvYXJkIC5zaGlwLmNhbnQtcGxhY2Uge1xcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiKDI1NSwgOTAsIDkwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk1LCA2MCwgNjAsIDAuMik7XFxufVxcblxcbi5nYW1lLWJvYXJkIC5zaGlwLmRyYWdnaW5nIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5nYW1lLWJvYXJkIC5zaGlwLWJsb2NrcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCAuc2hpcC1ibG9jayB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uZmxlZXQtaW5kaWNhdG9yIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uZmxlZXQtaW5kaWNhdG9yIC5zaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmZsZWV0LWluZGljYXRvciAuc2hpcC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi5mbGVldC1pbmRpY2F0b3IgLnNoaXAtYmxvY2sge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWZnLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG59XFxuXFxuLmZsZWV0LWluZGljYXRvciAuc2hpcC1ibG9jazpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICByZW5kZXJCb2FyZCwgcmVuZGVyU2hpcHMsIG1ha2VTaGlwc0RyYWdnYWJsZSwgbWFrZURyb3BwYWJsZSwgbWFrZVNoaXBzUm90YXRhYmxlLCByZW1vdmVJbnRlcmFjdHMsIHJlbmRlckZsZWV0SW5kaWNhdG9yLFxufSBmcm9tICcuL3NjcmlwdHMvRE9NVXRpbHMnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL0dhbWUnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3NjcmlwdHMvUGxheWVyJztcbmltcG9ydCBDb21wdXRlclBsYXllciBmcm9tICcuL3NjcmlwdHMvQ29tcHV0ZXJQbGF5ZXInO1xuXG5jb25zdCBtYWluQm9hcmRET00gPSByZW5kZXJCb2FyZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1nYW1lLWJvYXJkJykpO1xuY29uc3QgbWFpbkxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbGFiZWwnKTtcbmNvbnN0IHRpcFBhcmFncmFwaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXAnKTtcblxubGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoJ1BsYXllcicpO1xubGV0IGNvbXB1dGVyID0gbmV3IENvbXB1dGVyUGxheWVyKCk7XG5sZXQgbWFpbkZsZWV0RE9NID0gbnVsbDtcbmxldCBjdXJyZW50T3Bwb25lbnQgPSBwbGF5ZXI7XG5cbm1haW5Cb2FyZERPTS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmICghKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ2FtZS1jZWxsJykgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLWJsb2NrJykpKSByZXR1cm47XG5cbiAgR2FtZS5nZXRVc2VySW5wdXQoe1xuICAgIHBsYXllcixcbiAgICAuLi5lLnRhcmdldC5kYXRhc2V0LFxuICB9KTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICByZW5kZXJHYW1lKGN1cnJlbnRPcHBvbmVudCk7XG59KTtcblxuR2FtZS5wb3B1bGF0ZUJvYXJkKHBsYXllci5ib2FyZCk7XG5HYW1lLnBvcHVsYXRlQm9hcmQoY29tcHV0ZXIuYm9hcmQpO1xuXG5yZW5kZXJTaGlwcyhwbGF5ZXIuYm9hcmQsIG1haW5Cb2FyZERPTSk7XG5cbm1ha2VTaGlwc0RyYWdnYWJsZShwbGF5ZXIuYm9hcmQsIG1haW5Cb2FyZERPTSk7XG5tYWtlU2hpcHNSb3RhdGFibGUocGxheWVyLmJvYXJkLCBtYWluQm9hcmRET00pO1xubWFrZURyb3BwYWJsZSgpO1xuXG5jb25zdCBzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtZ2FtZS1idG4nKTtcbnN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIHJlbW92ZUludGVyYWN0cyhbJ3NoaXAnLCAnc2hpcC1ibG9jaycsICdnYW1lLWNlbGwnXSk7XG5cbiAgZS50YXJnZXQucmVtb3ZlKCk7XG4gIHRpcFBhcmFncmFwaC5yZW1vdmUoKTtcbiAgbWFpbkxhYmVsLnRleHRDb250ZW50ID0gJ1lvdXIgVHVybic7XG5cbiAgLy8gc3RhcnQgZ2FtZVxuICBjdXJyZW50T3Bwb25lbnQgPSBjb21wdXRlcjtcblxuICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJzxkaXYgaWQ9XCJtYWluLWJvYXJkLWZsZWV0XCIgY2xhc3M9XCJtYWluLWJvYXJkLWZsZWV0IGZsZWV0LWluZGljYXRvclwiPjwvZGl2PicpO1xuICBtYWluRmxlZXRET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1ib2FyZC1mbGVldCcpO1xuXG4gIHJlbmRlckZsZWV0SW5kaWNhdG9yKGNvbXB1dGVyLCBtYWluRmxlZXRET00pO1xuICByZW5kZXJTaGlwcyhjb21wdXRlci5ib2FyZCwgbWFpbkJvYXJkRE9NLCB0cnVlKTtcblxuICBHYW1lLnN0YXJ0KHtcbiAgICBwbGF5ZXJPbmU6IHBsYXllcixcbiAgICBwbGF5ZXJUd286IGNvbXB1dGVyLFxuICAgIGFzeW5jIG9uQmVmb3JlVHVybihwbGF5ZXIsIG9wcG9uZW50KSB7XG4gICAgICBtYWluTGFiZWwudGV4dENvbnRlbnQgPSAob3Bwb25lbnQgIT09IGNvbXB1dGVyKSA/ICdDb21wdXRlclxcJ3MgVHVybicgOiAnWW91ciBUdXJuJztcbiAgICAgIGN1cnJlbnRPcHBvbmVudCA9IG9wcG9uZW50O1xuICAgIH0sXG4gICAgYXN5bmMgb25UdXJuKHBsYXllcikge1xuICAgICAgaWYgKHBsYXllciA9PT0gY29tcHV0ZXIpIGF3YWl0IHdhaXRNaWxsaXNlY29uZHMoMzAwKTtcbiAgICB9LFxuICAgIGFzeW5jIG9uVHVybk1hZGUocGxheWVyLCBvcHBvbmVudCwgY29vcmQpIHtcbiAgICAgIHJlbmRlckdhbWUob3Bwb25lbnQsIGNvb3JkKTtcbiAgICAgIGF3YWl0IHdhaXRNaWxsaXNlY29uZHMoNTAwKTtcbiAgICB9LFxuICAgIGFzeW5jIG9uTmV4dFR1cm4ocGxheWVyKSB7XG4gICAgICBtYWluTGFiZWwudGV4dENvbnRlbnQgPSAocGxheWVyICE9PSBjb21wdXRlcikgPyAnV2FpdCBmb3IgY29tcHV0ZXInIDogJ1dhaXQgZm9yIHlvdXIgdHVybic7XG4gICAgICBhd2FpdCB3YWl0TWlsbGlzZWNvbmRzKDMwMCk7XG5cbiAgICAgIHJlbmRlckdhbWUocGxheWVyKTtcbiAgICB9LFxuICB9KS50aGVuKCh3aW5uZXIpID0+IHtcbiAgICBtYWluTGFiZWwudGV4dENvbnRlbnQgPSBgJHt3aW5uZXIubmFtZX0gd2lucyFgO1xuXG4gICAgbWFpbkZsZWV0RE9NLnJlbW92ZSgpO1xuICAgIG1haW5GbGVldERPTSA9IG51bGw7XG5cbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJzxidXR0b24gaWQ9XCJuZXctZ2FtZS1idG5cIiBjbGFzcz1cIm5ldy1nYW1lLWJ0biBmYW5jeS1yb3VuZGVkLWJveFwiPlN0YXJ0IE5ldyBHYW1lPC9idXR0b24+Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1nYW1lLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgbWFpbkxhYmVsLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgc2hpcHMnO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aXBQYXJhZ3JhcGgpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGFydEdhbWVCdXR0b24pO1xuXG4gICAgICBwbGF5ZXIgPSBuZXcgUGxheWVyKCdQbGF5ZXInKTtcbiAgICAgIGNvbXB1dGVyID0gbmV3IENvbXB1dGVyUGxheWVyKCk7XG4gICAgICBjdXJyZW50T3Bwb25lbnQgPSBwbGF5ZXI7XG5cbiAgICAgIEdhbWUucG9wdWxhdGVCb2FyZChwbGF5ZXIuYm9hcmQpO1xuICAgICAgR2FtZS5wb3B1bGF0ZUJvYXJkKGNvbXB1dGVyLmJvYXJkKTtcblxuICAgICAgcmVuZGVyU2hpcHMocGxheWVyLmJvYXJkLCBtYWluQm9hcmRET00pO1xuXG4gICAgICBtYWtlU2hpcHNEcmFnZ2FibGUocGxheWVyLmJvYXJkLCBtYWluQm9hcmRET00pO1xuICAgICAgbWFrZVNoaXBzUm90YXRhYmxlKHBsYXllci5ib2FyZCwgbWFpbkJvYXJkRE9NKTtcbiAgICAgIG1ha2VEcm9wcGFibGUoKTtcbiAgICB9KTtcblxuICAgIHJlbmRlckdhbWUoY3VycmVudE9wcG9uZW50KTtcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gcmVuZGVyR2FtZShvcHBvbmVudCwgY29vcmQgPSBudWxsKSB7XG4gIGlmIChtYWluRmxlZXRET00pIHJlbmRlckZsZWV0SW5kaWNhdG9yKG9wcG9uZW50LCBtYWluRmxlZXRET00pO1xuICByZW5kZXJTaGlwcyhvcHBvbmVudC5ib2FyZCwgbWFpbkJvYXJkRE9NLCBvcHBvbmVudCAhPT0gcGxheWVyLCBjb29yZCk7XG59XG5cbmZ1bmN0aW9uIHdhaXRNaWxsaXNlY29uZHMobXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgQk9BUkRfU0laRSB9IGZyb20gJy4vR2FtZUJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wdXRlclBsYXllciBleHRlbmRzIFBsYXllciB7XG4gICNhdmFpbGFibGVNb3ZlcztcbiAgI21vdmVzUG9pbnRlcjtcbiAgI3RhcmdldFNoaXA7XG4gICNmaXJzdEhpdENvb3JkO1xuICAjcHJldk1vdmU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ0NvbXB1dGVyJyk7XG4gICAgdGhpcy4jaW5pdEF2YWlsYWJsZU1vdmVzKCk7XG4gIH1cblxuICBhdHRhY2soYm9hcmQgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuI21vdmVzUG9pbnRlciA8PSAwKSByZXR1cm4gbnVsbDtcblxuICAgIGlmICh0aGlzLiN0YXJnZXRTaGlwID09IG51bGwgJiYgdGhpcy4jaXNMYXN0TW92ZUFIaXQoYm9hcmQpKSB7XG4gICAgICB0aGlzLiN0YXJnZXRTaGlwID0gdGhpcy4jZ2V0U2hpcCh0aGlzLiNwcmV2TW92ZSwgYm9hcmQpO1xuICAgICAgdGhpcy4jZmlyc3RIaXRDb29yZCA9IHRoaXMuI3ByZXZNb3ZlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiN0YXJnZXRTaGlwPy5pc1N1bmsoKSkge1xuICAgICAgdGhpcy4jcmVtb3ZlQWRqYWNlbnRNb3Zlcyhib2FyZCk7XG4gICAgICB0aGlzLiN0YXJnZXRTaGlwID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jdGFyZ2V0U2hpcD8uaGl0cyA9PT0gMSkge1xuICAgICAgaWYgKHRoaXMuI2lzTGFzdE1vdmVBTWlzcyhib2FyZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2dldFJhbmRvbUFkamFjZW50TW92ZSh0aGlzLiNmaXJzdEhpdENvb3JkLCBib2FyZCwgeyBkaXJlY3Rpb246IHRoaXMuI2dldFNoaXBEaXJlY3Rpb24odGhpcy4jdGFyZ2V0U2hpcCwgYm9hcmQpIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuI2dldFJhbmRvbUFkamFjZW50TW92ZSh0aGlzLiNwcmV2TW92ZSwgYm9hcmQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiN0YXJnZXRTaGlwPy5oaXRzID4gMSkge1xuICAgICAgaWYgKHRoaXMuI2lzTGFzdE1vdmVBTWlzcyhib2FyZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2dldFJhbmRvbUFkamFjZW50TW92ZSh0aGlzLiNmaXJzdEhpdENvb3JkLCBib2FyZCwgeyBkaXJlY3Rpb246IHRoaXMuI2dldFNoaXBEaXJlY3Rpb24odGhpcy4jdGFyZ2V0U2hpcCwgYm9hcmQpIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuI2dldFJhbmRvbUFkamFjZW50TW92ZSh0aGlzLiNwcmV2TW92ZSwgYm9hcmQsIHsgZGlyZWN0aW9uOiB0aGlzLiNnZXRTaGlwRGlyZWN0aW9uKHRoaXMuI3RhcmdldFNoaXAsIGJvYXJkKSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy4jZ2V0UmFuZG9tTW92ZSgpO1xuICB9XG5cbiAgI2lzTGFzdE1vdmVBSGl0KGJvYXJkKSB7XG4gICAgaWYgKGJvYXJkID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodGhpcy4jcHJldk1vdmUgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLiNwcmV2TW92ZTtcbiAgICByZXR1cm4gYm9hcmQuYm9hcmRbeV1beF0uc3RhdHVzID09PSAnaGl0JztcbiAgfVxuXG4gICNpc0xhc3RNb3ZlQU1pc3MoYm9hcmQpIHtcbiAgICBpZiAodGhpcy4jcHJldk1vdmUgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLiNwcmV2TW92ZTtcbiAgICByZXR1cm4gYm9hcmQuYm9hcmRbeV1beF0uc3RhdHVzID09PSAnbWlzcyc7XG4gIH1cblxuICAjZ2V0U2hpcChjb29yZCwgYm9hcmQpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGNvb3JkO1xuICAgIHJldHVybiBib2FyZC5ib2FyZFt5XVt4XS5zaGlwO1xuICB9XG5cbiAgI2dldFNoaXBEaXJlY3Rpb24oc2hpcCwgYm9hcmQpIHtcbiAgICBsZXQgZGlyZWN0aW9uID0gJ25vbmUnO1xuXG4gICAgYm9hcmQuYm9hcmQuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY29sKSA9PiB7XG4gICAgICAgIGlmIChjb2wuc2hpcCA9PT0gc2hpcCkge1xuICAgICAgICAgIGRpcmVjdGlvbiA9IGNvbC5kaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gICNnZXRSYW5kb21BZGphY2VudE1vdmUoZnJvbU1vdmUsIGJvYXJkLCB7IGRpcmVjdGlvbiB9ID0geyBkaXJlY3Rpb246ICdub25lJyB9KSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBmcm9tTW92ZTtcbiAgICBsZXQgcG9zc2libGVNb3ZlcyA9IFtdO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25vbmUnIHx8IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBwb3NzaWJsZU1vdmVzLnB1c2goeyB4OiB4IC0gMSwgeSB9KTtcbiAgICAgIHBvc3NpYmxlTW92ZXMucHVzaCh7IHg6IHggKyAxLCB5IH0pO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdub25lJyB8fCBkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHBvc3NpYmxlTW92ZXMucHVzaCh7IHgsIHk6IHkgLSAxIH0pO1xuICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHsgeCwgeTogeSArIDEgfSk7XG4gICAgfVxuXG4gICAgcG9zc2libGVNb3ZlcyA9IHBvc3NpYmxlTW92ZXMuZmlsdGVyKChtb3ZlKSA9PiB7XG4gICAgICBpZiAobW92ZS54IDwgMCB8fCBtb3ZlLnkgPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAobW92ZS54ID49IEJPQVJEX1NJWkUgfHwgbW92ZS55ID49IEJPQVJEX1NJWkUpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiAhdGhpcy4jYWxyZWFkeU1vdmVkKG1vdmUueCwgbW92ZS55KTtcbiAgICB9KTtcblxuICAgIGlmIChwb3NzaWJsZU1vdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gdGhpcyBzdGF0ZW1lbnQgYWNjb3VudHMgZm9yIHdoZW4gdGhlIHNoaXAgaXMgdG91Y2hpbmcgdGhlIGJvcmRlclxuICAgICAgcmV0dXJuIHRoaXMuI2dldFJhbmRvbUFkamFjZW50TW92ZSh0aGlzLiNmaXJzdEhpdENvb3JkLCBib2FyZCwgeyBkaXJlY3Rpb246IHRoaXMuI2dldFNoaXBEaXJlY3Rpb24odGhpcy4jdGFyZ2V0U2hpcCwgYm9hcmQpIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVNb3Zlcy5sZW5ndGgpO1xuICAgIHRoaXMuI3ByZXZNb3ZlID0gdGhpcy4jZ2V0TW92ZSh0aGlzLiNnZXRNb3ZlSW5kZXgocG9zc2libGVNb3Zlc1tpbmRleF0pKTtcbiAgICByZXR1cm4gdGhpcy4jcHJldk1vdmU7XG4gIH1cblxuICAjYWxyZWFkeU1vdmVkKHgsIHkpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy4jbW92ZXNQb2ludGVyOyBpIDwgdGhpcy4jYXZhaWxhYmxlTW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzTW92ZSA9IHRoaXMuI2F2YWlsYWJsZU1vdmVzW2ldO1xuICAgICAgaWYgKHByZXZpb3VzTW92ZS54ID09PSB4ICYmIHByZXZpb3VzTW92ZS55ID09PSB5KSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgI3JlbW92ZUFkamFjZW50TW92ZXMoYm9hcmQpIHtcbiAgICBsZXQgbW92ZUluZm8gPSB0aGlzLiNnZXRNb3ZlSW5mbyh0aGlzLiNwcmV2TW92ZSwgYm9hcmQpO1xuICAgIHdoaWxlIChtb3ZlSW5mbykge1xuICAgICAgbW92ZUluZm8uYWRqYWNlbnRzLmZvckVhY2goKGFkamFjZW50KSA9PiB0aGlzLiNyZW1vdmVNb3ZlKGFkamFjZW50KSk7XG4gICAgICBtb3ZlSW5mbyA9IHRoaXMuI2dldE1vdmVJbmZvKG1vdmVJbmZvLm5leHQsIGJvYXJkLCBtb3ZlSW5mby5tb3ZlKTtcbiAgICB9XG4gIH1cblxuICAjZ2V0TW92ZUluZm8obW92ZSwgYm9hcmQsIHByZXZpb3VzID0gbnVsbCkge1xuICAgIGlmIChtb3ZlID09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgeyB4LCB5IH0gPSBtb3ZlO1xuICAgIGNvbnN0IG1vdmVJbmZvID0ge1xuICAgICAgYWRqYWNlbnRzOiBbXSxcbiAgICAgIG5leHQ6IG51bGwsXG4gICAgICBtb3ZlLFxuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gLTE7IGkgPD0gMTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gLTE7IGogPD0gMTsgaisrKSB7XG4gICAgICAgIGlmIChpID09PSAwICYmIGogPT09IDApIGNvbnRpbnVlOyAvLyBkb24ndCBwdXNoIHRoZSBtb3ZlIGl0c2VsZlxuXG4gICAgICAgIGNvbnN0IGRYID0geCArIGo7XG4gICAgICAgIGNvbnN0IGRZID0geSArIGk7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBib2FyZC5ib2FyZFtkWV0/LltkWF07XG4gICAgICAgIGlmIChjZWxsID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuXG4gICAgICAgIG1vdmVJbmZvLmFkamFjZW50cy5wdXNoKHsgeDogZFgsIHk6IGRZIH0pO1xuICAgICAgICBpZiAoY2VsbC5zdGF0dXMgPT09ICdoaXQnICYmICEoZFggPT09IHByZXZpb3VzPy54ICYmIGRZID09PSBwcmV2aW91cz8ueSkpIHtcbiAgICAgICAgICBtb3ZlSW5mby5uZXh0ID0geyB4OiBkWCwgeTogZFkgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb3ZlSW5mbztcbiAgfVxuXG4gICNyZW1vdmVNb3ZlKG1vdmUpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuI2dldE1vdmVJbmRleChtb3ZlKTtcbiAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLiNnZXRNb3ZlKGluZGV4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gICNnZXRSYW5kb21Nb3ZlKCkge1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy4jbW92ZXNQb2ludGVyKTtcbiAgICB0aGlzLiNwcmV2TW92ZSA9IHRoaXMuI2dldE1vdmUoaW5kZXgpO1xuICAgIHJldHVybiB0aGlzLiNwcmV2TW92ZTtcbiAgfVxuXG4gICNnZXRNb3ZlSW5kZXgoY29vcmQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI21vdmVzUG9pbnRlcjsgaSsrKSB7XG4gICAgICBjb25zdCBtb3ZlID0gdGhpcy4jYXZhaWxhYmxlTW92ZXNbaV07XG4gICAgICBpZiAobW92ZS54ID09PSBjb29yZC54ICYmIG1vdmUueSA9PT0gY29vcmQueSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAjZ2V0TW92ZShpbmRleCkge1xuICAgIHRoaXMuI21vdmVzUG9pbnRlci0tO1xuICAgIFt0aGlzLiNhdmFpbGFibGVNb3Zlc1tpbmRleF0sIHRoaXMuI2F2YWlsYWJsZU1vdmVzW3RoaXMuI21vdmVzUG9pbnRlcl1dID0gW3RoaXMuI2F2YWlsYWJsZU1vdmVzW3RoaXMuI21vdmVzUG9pbnRlcl0sIHRoaXMuI2F2YWlsYWJsZU1vdmVzW2luZGV4XV07XG4gICAgcmV0dXJuIHRoaXMuI2F2YWlsYWJsZU1vdmVzW3RoaXMuI21vdmVzUG9pbnRlcl07XG4gIH1cblxuICAjaW5pdEF2YWlsYWJsZU1vdmVzKCkge1xuICAgIHRoaXMuI2F2YWlsYWJsZU1vdmVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJPQVJEX1NJWkU7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBCT0FSRF9TSVpFOyBqKyspIHtcbiAgICAgICAgdGhpcy4jYXZhaWxhYmxlTW92ZXMucHVzaCh7XG4gICAgICAgICAgeDogaixcbiAgICAgICAgICB5OiBpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiNtb3Zlc1BvaW50ZXIgPSB0aGlzLiNhdmFpbGFibGVNb3Zlcy5sZW5ndGg7XG4gIH1cbn1cbiIsImltcG9ydCBpbnRlcmFjdCBmcm9tICdpbnRlcmFjdGpzJztcbmltcG9ydCB7IEJPQVJEX1NJWkUgfSBmcm9tICcuL0dhbWVCb2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVuZGVyQm9hcmQsXG4gIHJlbmRlclNoaXBzLFxuICByZW5kZXJGbGVldEluZGljYXRvcixcbiAgbWFrZVNoaXBzRHJhZ2dhYmxlLFxuICBtYWtlRHJvcHBhYmxlLFxuICBtYWtlU2hpcHNSb3RhdGFibGUsXG4gIHJlbW92ZUludGVyYWN0cyxcbn07XG5cbmNvbnN0IGRyYWdJbmZvID0ge1xuICBzaGlwOiBudWxsLFxuICBzaGlwRGlyZWN0aW9uOiAnbm9uZScsXG4gIHNoaXBFbGVtZW50OiBudWxsLFxuICBzaGlwQmxvY2s6IG51bGwsXG4gIGJvYXJkOiBudWxsLFxuICBib2FyZERPTTogbnVsbCxcbiAgaW50ZXJhY3RFbmFibGVkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZChnYW1lQm9hcmQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAoQk9BUkRfU0laRSArIDEpOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IChCT0FSRF9TSVpFICsgMSk7IGorKykge1xuICAgICAgY29uc3QgY2VsbCA9IGNyZWF0ZUNlbGwoaiwgaSk7XG4gICAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdhbWVCb2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2VsbCh4LCB5KSB7XG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG5cbiAgaWYgKCEoeCA9PT0gMCB8fCB5ID09PSAwKSkge1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZ2FtZS1jZWxsJyk7XG4gICAgY2VsbC5kYXRhc2V0LnggPSB4IC0gMTtcbiAgICBjZWxsLmRhdGFzZXQueSA9IHkgLSAxO1xuICB9XG4gIGVsc2UgaWYgKHggIT09IDAgJiYgeSA9PT0gMCkge1xuICAgIGNlbGwuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtTdHJpbmcuZnJvbUNoYXJDb2RlKHggKyA2NCl9PC9kaXY+YDtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2FscGhhLWxhYmVsJyk7XG4gIH1cbiAgZWxzZSBpZiAoeCA9PT0gMCAmJiB5ICE9PSAwKSB7XG4gICAgY2VsbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj4ke3l9PC9kaXY+YDtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ251bWVyaWMtbGFiZWwnKTtcbiAgfVxuXG4gIHJldHVybiBjZWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2hpcHMocGxheWVyQm9hcmQsIGJvYXJkRE9NLCBoaWRlU2hpcHMgPSBmYWxzZSwgY29vcmRUb0FuaW1hdGUgPSBudWxsKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMTI7XG4gIGNvbnN0IGdhbWVDZWxsU2l6ZSA9IGJvYXJkRE9NLmNoaWxkcmVuW3N0YXJ0XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgY29uc3QgYm9yZGVyU2l6ZSA9IGdhbWVDZWxsU2l6ZSAtIE51bWJlcih3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib2FyZERPTS5jaGlsZHJlbltzdGFydF0sICc6OmJlZm9yZScpLndpZHRoLnNsaWNlKDAsIC0yKSk7XG5cbiAgYm9hcmRET00ucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKS5mb3JFYWNoKChzaGlwKSA9PiBzaGlwLnJlbW92ZSgpKTtcbiAgcGxheWVyQm9hcmQuYm9hcmQuZm9yRWFjaCgocm93LCB5KSA9PiB7XG4gICAgcm93LmZvckVhY2goKGNvbCwgeCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGFydCArIHkgKiAxMSArIHg7XG4gICAgICBjb25zdCBjZWxsID0gYm9hcmRET00uY2hpbGRyZW5baW5kZXhdO1xuICAgICAgY29uc3QgeyBzaGlwLCBzdGF0dXMsIGRpcmVjdGlvbiB9ID0gY29sO1xuXG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ21pc3MnKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGl0Jyk7XG5cbiAgICAgIGlmIChjb29yZFRvQW5pbWF0ZT8ueCA9PT0geCAmJiBjb29yZFRvQW5pbWF0ZT8ueSA9PT0geSkge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAnaGl0JykgY2VsbC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImhpdCBhbmltYXRpb25cIj48L2Rpdj4nO1xuICAgICAgICBpZiAoc3RhdHVzID09PSAnbWlzcycpIGNlbGwuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJtaXNzIGFuaW1hdGlvblwiPjwvZGl2Pic7XG5cbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoZSkgPT4ge1xuICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSkgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ21pc3MnKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ2hpdCcpIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwID09PSBudWxsKSByZXR1cm47XG4gICAgICBpZiAoaGlkZVNoaXBzICYmICFzaGlwLmlzU3VuaygpKSByZXR1cm47IC8vIGZvciBjb21wdXRlcidzIGJvYXJkIHNvIGl0J3MgaGlkZGVuIHRvIHRoZSBwbGF5ZXIsIHNob3dzIHRoZSBzaGlwIGlmIGl0IGlzIHN1bmsgdGhvdWdoXG5cbiAgICAgIGlmICh4ID4gMCAmJiBwbGF5ZXJCb2FyZC5ib2FyZFt5XVt4IC0gMV0uc2hpcCA9PT0gc2hpcCkgcmV0dXJuO1xuICAgICAgaWYgKHkgPiAwICYmIHBsYXllckJvYXJkLmJvYXJkW3kgLSAxXVt4XS5zaGlwID09PSBzaGlwKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHRvcCA9IGdhbWVDZWxsU2l6ZSAqICgxICsgeSk7XG4gICAgICBjb25zdCBsZWZ0ID0gZ2FtZUNlbGxTaXplICogKDEgKyB4KTtcblxuICAgICAgbGV0IHdpZHRoID0gZ2FtZUNlbGxTaXplO1xuICAgICAgbGV0IGhlaWdodCA9IGdhbWVDZWxsU2l6ZTtcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB3aWR0aCAqPSBzaGlwLmxlbmd0aDtcbiAgICAgIGVsc2UgaGVpZ2h0ICo9IHNoaXAubGVuZ3RoO1xuXG4gICAgICB3aWR0aCArPSBib3JkZXJTaXplO1xuICAgICAgaGVpZ2h0ICs9IGJvcmRlclNpemU7XG5cbiAgICAgIGlmICgoZGlyZWN0aW9uID09PSAndmVydGljYWwnICYmICh4ICsgMSkgPT09IEJPQVJEX1NJWkUpXG4gICAgICAgIHx8IChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiAoeCArIHNoaXAubGVuZ3RoKSA9PT0gQk9BUkRfU0laRSkpIHtcbiAgICAgICAgd2lkdGggLT0gYm9yZGVyU2l6ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNoaXBFbGVtZW50LmNsYXNzTmFtZSA9ICdzaGlwJztcbiAgICAgIHNoaXBFbGVtZW50LmRhdGFzZXQueCA9IHg7XG4gICAgICBzaGlwRWxlbWVudC5kYXRhc2V0LnkgPSB5O1xuICAgICAgc2hpcEVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICBzaGlwRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICAgICAgc2hpcEVsZW1lbnQuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgICAgIHNoaXBFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgIHNoaXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbnVsbCwgdHJ1ZSk7XG4gICAgICBpZiAoZHJhZ0luZm8uaW50ZXJhY3RFbmFibGVkKSBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnRlcmFjdGFibGUnKTtcblxuICAgICAgY29uc3Qgc2hpcEJsb2NrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc2hpcEJsb2Nrcy5jbGFzc05hbWUgPSAnc2hpcC1ibG9ja3MnO1xuICAgICAgc2hpcEJsb2Nrcy5zdHlsZS50b3AgPSBgLSR7Ym9yZGVyU2l6ZSAqIDJ9cHhgO1xuICAgICAgc2hpcEJsb2Nrcy5zdHlsZS5sZWZ0ID0gYC0ke2JvcmRlclNpemUgKiAyfXB4YDtcbiAgICAgIHNoaXBCbG9ja3Muc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICBzaGlwQmxvY2tzLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHNoaXBCbG9ja3Muc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNoaXBCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwQmxvY2suY2xhc3NOYW1lID0gJ3NoaXAtYmxvY2snO1xuICAgICAgICBzaGlwQmxvY2suZGF0YXNldC54ID0gKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSA/IHggKyBpIDogeDtcbiAgICAgICAgc2hpcEJsb2NrLmRhdGFzZXQueSA9IChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpID8geSArIGkgOiB5O1xuICAgICAgICBzaGlwQmxvY2suZGF0YXNldC5pbmRleCA9IGk7XG4gICAgICAgIHNoaXBCbG9ja3MuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKTtcbiAgICAgIH1cblxuICAgICAgc2hpcEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2hpcEJsb2Nrcyk7XG4gICAgICBib2FyZERPTS5hcHBlbmRDaGlsZChzaGlwRWxlbWVudCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRmxlZXRJbmRpY2F0b3IocGxheWVyLCBmbGVldEluZGljYXRvcikge1xuICBjb25zdCBzaGlwU2l6ZSA9IGZsZWV0SW5kaWNhdG9yLmNsaWVudFdpZHRoIC8gMTE7XG4gIGZsZWV0SW5kaWNhdG9yLmlubmVySFRNTCA9ICcnO1xuXG4gIHBsYXllci5ib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwRWxlbWVudC5jbGFzc05hbWUgPSAnc2hpcCc7XG4gICAgc2hpcEVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtzaGlwU2l6ZSAqIHNoaXAubGVuZ3RofXB4YDtcbiAgICBzaGlwRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtzaGlwU2l6ZX1weGA7XG4gICAgaWYgKHNoaXAuaXNTdW5rKCkpIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2hpcEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzaGlwQmxvY2suY2xhc3NOYW1lID0gJ3NoaXAtYmxvY2snO1xuXG4gICAgICBzaGlwRWxlbWVudC5hcHBlbmRDaGlsZChzaGlwQmxvY2spO1xuICAgIH1cblxuICAgIGZsZWV0SW5kaWNhdG9yLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgc2hpcEVsZW1lbnQpO1xuXG4gICAgc2hpcC5vblN1bmsgPSAoKSA9PiB7XG4gICAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU2hpcHNEcmFnZ2FibGUoYm9hcmQsIGJvYXJkRE9NKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG4gIGxldCBjbG9uZWRTaGlwID0gbnVsbDtcbiAgZHJhZ0luZm8uaW50ZXJhY3RFbmFibGVkID0gdHJ1ZTtcblxuICBpbnRlcmFjdCgnLnNoaXAnKS5kcmFnZ2FibGUoe1xuICAgIGxpc3RlbmVyczoge1xuICAgICAgc3RhcnQoZXZlbnQpIHtcbiAgICAgICAgY2xvbmVkU2hpcCA9IGV2ZW50LnRhcmdldC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNsb25lZFNoaXAuc3R5bGUub3BhY2l0eSA9ICcwLjYnO1xuICAgICAgICBib2FyZERPTS5hcHBlbmRDaGlsZChjbG9uZWRTaGlwKTtcblxuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcblxuICAgICAgICBwb3NpdGlvbi54ID0gMDtcbiAgICAgICAgcG9zaXRpb24ueSA9IDA7XG5cbiAgICAgICAgY29uc3QgeCA9IE51bWJlcihldmVudC50YXJnZXQuZGF0YXNldC54KTtcbiAgICAgICAgY29uc3QgeSA9IE51bWJlcihldmVudC50YXJnZXQuZGF0YXNldC55KTtcblxuICAgICAgICBkcmFnSW5mby5zaGlwID0gYm9hcmQuYm9hcmRbeV1beF0uc2hpcDtcbiAgICAgICAgZHJhZ0luZm8uc2hpcERpcmVjdGlvbiA9IGJvYXJkLmJvYXJkW3ldW3hdLmRpcmVjdGlvbjtcbiAgICAgICAgYm9hcmQucmVtb3ZlU2hpcChkcmFnSW5mby5zaGlwKTtcblxuICAgICAgICBkcmFnSW5mby5zaGlwRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgZHJhZ0luZm8uYm9hcmQgPSBib2FyZDtcbiAgICAgICAgZHJhZ0luZm8uYm9hcmRET00gPSBib2FyZERPTTtcbiAgICAgIH0sXG4gICAgICBtb3ZlKGV2ZW50KSB7XG4gICAgICAgIHBvc2l0aW9uLnggKz0gZXZlbnQuZHg7XG4gICAgICAgIHBvc2l0aW9uLnkgKz0gZXZlbnQuZHk7XG5cbiAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtwb3NpdGlvbi54fXB4LCAke3Bvc2l0aW9uLnl9cHgpYDtcbiAgICAgIH0sXG4gICAgICBlbmQoZXZlbnQpIHtcbiAgICAgICAgY2xvbmVkU2hpcC5yZW1vdmUoKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcblxuICAgICAgICBjb25zdCB4ID0gTnVtYmVyKGV2ZW50LnRhcmdldC5kYXRhc2V0LngpO1xuICAgICAgICBjb25zdCB5ID0gTnVtYmVyKGV2ZW50LnRhcmdldC5kYXRhc2V0LnkpO1xuICAgICAgICBjb25zdCB7IHNoaXAsIHNoaXBEaXJlY3Rpb246IGRpcmVjdGlvbiB9ID0gZHJhZ0luZm87XG4gICAgICAgIGlmIChzaGlwICE9PSBudWxsKSB7XG4gICAgICAgICAgYm9hcmQucGxhY2VTaGlwKHgsIHksIHNoaXAubGVuZ3RoLCBkaXJlY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyU2hpcHMoYm9hcmQsIGJvYXJkRE9NKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgaW50ZXJhY3QoJy5zaGlwLWJsb2NrJykub24oJ2Rvd24nLCAoZXZlbnQpID0+IHtcbiAgICBkcmFnSW5mby5zaGlwQmxvY2sgPSBldmVudC50YXJnZXQ7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZURyb3BwYWJsZSgpIHtcbiAgaW50ZXJhY3QoJy5nYW1lLWNlbGwnKS5kcm9wem9uZSh7XG4gICAgbGlzdGVuZXJzOiB7XG4gICAgICBkcmFnZW50ZXIoZXZlbnQpIHtcbiAgICAgICAgbGV0IHggPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmRhdGFzZXQueCk7XG4gICAgICAgIGxldCB5ID0gTnVtYmVyKGV2ZW50LnRhcmdldC5kYXRhc2V0LnkpO1xuICAgICAgICBjb25zdCB7IGJvYXJkLCBzaGlwLCBzaGlwRGlyZWN0aW9uOiBkaXJlY3Rpb24gfSA9IGRyYWdJbmZvO1xuICAgICAgICBjb25zdCBkcmFnZ2VkU2hpcEJsb2NrSW5kZXggPSBOdW1iZXIoZHJhZ0luZm8uc2hpcEJsb2NrLmRhdGFzZXQuaW5kZXgpO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykgeCAtPSBkcmFnZ2VkU2hpcEJsb2NrSW5kZXg7XG4gICAgICAgIGVsc2UgeSAtPSBkcmFnZ2VkU2hpcEJsb2NrSW5kZXg7XG5cbiAgICAgICAgaWYgKCFib2FyZC5jYW5TaGlwQmVQbGFjZWQoeCwgeSwgc2hpcC5sZW5ndGgsIGRpcmVjdGlvbikpIHtcbiAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NhbnQtcGxhY2UnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2NhbnQtcGxhY2UnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRyb3AoZXZlbnQpIHtcbiAgICAgICAgY29uc3Qgb3JpZ1ggPSBOdW1iZXIoZHJhZ0luZm8uc2hpcEVsZW1lbnQuZGF0YXNldC54KTtcbiAgICAgICAgY29uc3Qgb3JpZ1kgPSBOdW1iZXIoZHJhZ0luZm8uc2hpcEVsZW1lbnQuZGF0YXNldC55KTtcbiAgICAgICAgY29uc3QgZHJhZ2dlZFNoaXBCbG9ja1ggPSBOdW1iZXIoZHJhZ0luZm8uc2hpcEJsb2NrLmRhdGFzZXQueCk7XG4gICAgICAgIGNvbnN0IGRyYWdnZWRTaGlwQmxvY2tZID0gTnVtYmVyKGRyYWdJbmZvLnNoaXBCbG9jay5kYXRhc2V0LnkpO1xuICAgICAgICBjb25zdCBvZmZzZXRYID0gZHJhZ2dlZFNoaXBCbG9ja1ggLSBvcmlnWDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IGRyYWdnZWRTaGlwQmxvY2tZIC0gb3JpZ1k7XG5cbiAgICAgICAgY29uc3QgbmV3WCA9IE51bWJlcihldmVudC50YXJnZXQuZGF0YXNldC54KTtcbiAgICAgICAgY29uc3QgbmV3WSA9IE51bWJlcihldmVudC50YXJnZXQuZGF0YXNldC55KTtcblxuICAgICAgICBjb25zdCB7IHNoaXAsIGJvYXJkLCBzaGlwRGlyZWN0aW9uOiBkaXJlY3Rpb24gfSA9IGRyYWdJbmZvO1xuXG4gICAgICAgIGNvbnN0IHBsYWNlZCA9IGJvYXJkLnBsYWNlU2hpcChuZXdYIC0gb2Zmc2V0WCwgbmV3WSAtIG9mZnNldFksIHNoaXAubGVuZ3RoLCBkaXJlY3Rpb24pO1xuICAgICAgICBpZiAoIXBsYWNlZCkge1xuICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChvcmlnWCwgb3JpZ1ksIHNoaXAubGVuZ3RoLCBkaXJlY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJhZ0luZm8uc2hpcCA9IG51bGw7XG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNoaXBzUm90YXRhYmxlKGJvYXJkLCBib2FyZERPTSkge1xuICBpbnRlcmFjdCgnLnNoaXAtYmxvY2snKS5vbignZG91YmxldGFwJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNoaXAnKTtcbiAgICBjb25zdCB4ID0gTnVtYmVyKHNoaXBFbGVtZW50LmRhdGFzZXQueCk7XG4gICAgY29uc3QgeSA9IE51bWJlcihzaGlwRWxlbWVudC5kYXRhc2V0LnkpO1xuICAgIGNvbnN0IHsgc2hpcCwgZGlyZWN0aW9uIH0gPSBib2FyZC5ib2FyZFt5XVt4XTtcbiAgICBjb25zdCBuZXdEaXJlY3Rpb24gPSAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcblxuICAgIGJvYXJkLnJlbW92ZVNoaXAoc2hpcCk7XG5cbiAgICBjb25zdCBwbGFjZWQgPSBib2FyZC5wbGFjZVNoaXAoeCwgeSwgc2hpcC5sZW5ndGgsIG5ld0RpcmVjdGlvbik7XG4gICAgaWYgKCFwbGFjZWQpIHtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcCh4LCB5LCBzaGlwLmxlbmd0aCwgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZW5kZXJTaGlwcyhib2FyZCwgYm9hcmRET00pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUludGVyYWN0cyhjbGFzc0xpc3QpIHtcbiAgZHJhZ0luZm8uaW50ZXJhY3RFbmFibGVkID0gZmFsc2U7XG5cbiAgY2xhc3NMaXN0LmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgIGludGVyYWN0KGAuJHtjbGFzc05hbWV9YCkudW5zZXQoKTtcbiAgfSk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zdGFudC1jb25kaXRpb24sIG5vLWxvb3AtZnVuYywgbm8tYXdhaXQtaW4tbG9vcCwgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgQk9BUkRfU0laRSB9IGZyb20gJy4vR2FtZUJvYXJkJztcbmltcG9ydCBDb21wdXRlclBsYXllciBmcm9tICcuL0NvbXB1dGVyUGxheWVyJztcblxubGV0IGdldFVzZXJJbnB1dDtcbmNvbnN0IEdhbWUgPSB7XG4gIHN0YXJ0LFxuICBwb3B1bGF0ZUJvYXJkLFxuICBnZXQgZ2V0VXNlcklucHV0KCkge1xuICAgIGlmICh0eXBlb2YgZ2V0VXNlcklucHV0ICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gKCkgPT4ge307XG4gICAgcmV0dXJuIGdldFVzZXJJbnB1dDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0KHtcbiAgcGxheWVyT25lLCBwbGF5ZXJUd28sIG9uQmVmb3JlVHVybiwgb25UdXJuLCBvblR1cm5NYWRlLCBvbk5leHRUdXJuLFxufSkge1xuICBjb25zdCBsaXN0ZW5lcnMgPSB7XG4gICAgb25CZWZvcmVUdXJuLCBvblR1cm4sIG9uVHVybk1hZGUsIG9uTmV4dFR1cm4sXG4gIH07XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBhd2FpdCBoYW5kbGVUdXJuKHBsYXllck9uZSwgcGxheWVyVHdvLCBsaXN0ZW5lcnMpO1xuICAgIGlmIChwbGF5ZXJUd28uYm9hcmQuaGFzQWxsU3VuaygpKSBicmVhaztcblxuICAgIGF3YWl0IGhhbmRsZVR1cm4ocGxheWVyVHdvLCBwbGF5ZXJPbmUsIGxpc3RlbmVycyk7XG4gICAgaWYgKHBsYXllck9uZS5ib2FyZC5oYXNBbGxTdW5rKCkpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHBsYXllclR3by5ib2FyZC5oYXNBbGxTdW5rKCkgPyBwbGF5ZXJPbmUgOiBwbGF5ZXJUd287XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVR1cm4ocGxheWVyLCBvcHBvbmVudCwgbGlzdGVuZXJzKSB7XG4gIGNvbnN0IGlzQ29tcHV0ZXIgPSAocGxheWVyIGluc3RhbmNlb2YgQ29tcHV0ZXJQbGF5ZXIpO1xuICBsZXQgaGl0O1xuICBsZXQgYWxyZWFkeUhpdCA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMub25CZWZvcmVUdXJuID09PSAnZnVuY3Rpb24nKSBhd2FpdCBsaXN0ZW5lcnMub25CZWZvcmVUdXJuKHBsYXllciwgb3Bwb25lbnQpO1xuXG4gIGRvIHtcbiAgICBjb25zdCBjb29yZCA9IChpc0NvbXB1dGVyKVxuICAgICAgPyBwbGF5ZXIuYXR0YWNrKG9wcG9uZW50LmJvYXJkKVxuICAgICAgOiAoYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHsgZ2V0VXNlcklucHV0ID0gcmVzb2x2ZTsgfSkpO1xuXG4gICAgaWYgKCFpc0NvbXB1dGVyICYmIGNvb3JkLnBsYXllciAhPT0gcGxheWVyKSBjb250aW51ZTtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGNvb3JkO1xuICAgIGNvb3JkLnggPSBOdW1iZXIoeCk7XG4gICAgY29vcmQueSA9IE51bWJlcih5KTtcblxuICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzLm9uVHVybiA9PT0gJ2Z1bmN0aW9uJykgYXdhaXQgbGlzdGVuZXJzLm9uVHVybihwbGF5ZXIsIG9wcG9uZW50KTtcblxuICAgICh7IGhpdCwgYWxyZWFkeUhpdCB9ID0gb3Bwb25lbnQuYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KSk7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMub25UdXJuTWFkZSA9PT0gJ2Z1bmN0aW9uJykgYXdhaXQgbGlzdGVuZXJzLm9uVHVybk1hZGUocGxheWVyLCBvcHBvbmVudCwgKGFscmVhZHlIaXQpID8gbnVsbCA6IGNvb3JkKTtcblxuICAgIGlmIChvcHBvbmVudC5ib2FyZC5oYXNBbGxTdW5rKCkpIHJldHVybjtcbiAgfSB3aGlsZSAoaGl0IHx8IGFscmVhZHlIaXQpO1xuXG4gIGlmICh0eXBlb2YgbGlzdGVuZXJzLm9uTmV4dFR1cm4gPT09ICdmdW5jdGlvbicpIGF3YWl0IGxpc3RlbmVycy5vbk5leHRUdXJuKHBsYXllciwgb3Bwb25lbnQpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUJvYXJkKGJvYXJkKSB7XG4gIGNvbnN0IHNoaXBzTGVuZ3RocyA9IFs1LCA0LCAzLCAyLCAyLCAxLCAxXTtcbiAgc2hpcHNMZW5ndGhzLmZvckVhY2goKHNoaXBMZW5ndGgpID0+IHtcbiAgICBsZXQgeDtcbiAgICBsZXQgeTtcbiAgICBsZXQgZGlyZWN0aW9uO1xuXG4gICAgZG8ge1xuICAgICAgeCA9IGdlbmVyYXRlUmFuZG9tSW50KEJPQVJEX1NJWkUpO1xuICAgICAgeSA9IGdlbmVyYXRlUmFuZG9tSW50KEJPQVJEX1NJWkUpO1xuICAgICAgZGlyZWN0aW9uID0gKE1hdGgucmFuZG9tKCkgPiAwLjUpID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICB9IHdoaWxlICghYm9hcmQucGxhY2VTaGlwKHgsIHksIHNoaXBMZW5ndGgsIGRpcmVjdGlvbikpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21JbnQobnVtKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW0pO1xufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcblxuZXhwb3J0IGNvbnN0IEJPQVJEX1NJWkUgPSAxMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgI2JvYXJkO1xuICAjc2hpcHM7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4jc2hpcHMgPSBbXTtcbiAgICB0aGlzLiNpbml0Qm9hcmQoQk9BUkRfU0laRSwgQk9BUkRfU0laRSk7XG4gIH1cblxuICBnZXQgYm9hcmQoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUodGhpcy4jYm9hcmQpO1xuICB9XG5cbiAgZ2V0IHNoaXBzKCkge1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKHRoaXMuI3NoaXBzKTtcbiAgfVxuXG4gIGhhc0FsbFN1bmsoKSB7XG4gICAgaWYgKCF0aGlzLiNzaGlwcy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIHJldHVybiB0aGlzLiNzaGlwcy5yZWR1Y2UoKHN1bmssIHNoaXApID0+IHtcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHN1bms7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICBwbGFjZVNoaXAoeCwgeSwgbGVuZ3RoID0gMSwgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnKSB7XG4gICAgaWYgKCF0aGlzLmNhblNoaXBCZVBsYWNlZCh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbikpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCBzaGlwO1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuICAgICAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHRoaXMuI2JvYXJkW3kgKyBpXVt4XS5zaGlwID0gc2hpcDtcbiAgICAgICAgdGhpcy4jYm9hcmRbeSArIGldW3hdLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICAgIGZvciAobGV0IGkgPSBsZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB0aGlzLiNib2FyZFt5XVt4ICsgaV0uc2hpcCA9IHNoaXA7XG4gICAgICAgIHRoaXMuI2JvYXJkW3ldW3ggKyBpXS5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy4jc2hpcHMucHVzaChzaGlwKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNhblNoaXBCZVBsYWNlZCh4LCB5LCBsZW5ndGggPSAxLCBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCcpIHtcbiAgICBpZiAoeCA8IDAgfHwgeCA+PSBCT0FSRF9TSVpFKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHkgPCAwIHx8IHkgPj0gQk9BUkRfU0laRSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKCh5ICsgbGVuZ3RoIC0gMSkgPj0gQk9BUkRfU0laRSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKHRoaXMuI2lzQ29vcmROZWFyU2hpcHMoeCwgeSArIGkpKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKCh4ICsgbGVuZ3RoIC0gMSkgPj0gQk9BUkRfU0laRSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKHRoaXMuI2lzQ29vcmROZWFyU2hpcHMoeCArIGksIHkpKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmVTaGlwKHNoaXApIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuI3NoaXBzLmluZGV4T2Yoc2hpcCk7XG4gICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy4jc2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLiNib2FyZC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChjb2wpID0+IHtcbiAgICAgICAgaWYgKHNoaXAgPT09IGNvbC5zaGlwKSB7XG4gICAgICAgICAgY29sLnNoaXAgPSBudWxsO1xuICAgICAgICAgIGNvbC5kaXJlY3Rpb24gPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBjb25zdCBvdXRjb21lID0ge1xuICAgICAgY29vcmRzOiB7IHgsIHkgfSxcbiAgICAgIGhpdDogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnN0IGJsb2NrID0gdGhpcy4jYm9hcmRbeV0/Llt4XTtcblxuICAgIGlmIChibG9jayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcjogJ2ludmFsaWQgY29vcmRpbmF0ZXMnLFxuICAgICAgICAuLi5vdXRjb21lLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoYmxvY2suc2hpcCA9PT0gbnVsbCAmJiBibG9jay5zdGF0dXMgPT09ICdub25lJykge1xuICAgICAgdGhpcy4jYm9hcmRbeV1beF0uc3RhdHVzID0gJ21pc3MnO1xuICAgICAgcmV0dXJuIG91dGNvbWU7XG4gICAgfVxuXG4gICAgaWYgKGJsb2NrLnN0YXR1cyA9PT0gJ2hpdCcgfHwgYmxvY2suc3RhdHVzID09PSAnbWlzcycpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFscmVhZHlIaXQ6IHRydWUsXG4gICAgICAgIC4uLm91dGNvbWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGJsb2NrLnNoaXAuaGl0KCk7XG4gICAgb3V0Y29tZS5oaXQgPSB0cnVlO1xuICAgIHRoaXMuI2JvYXJkW3ldW3hdLnN0YXR1cyA9ICdoaXQnO1xuXG4gICAgcmV0dXJuIG91dGNvbWU7XG4gIH1cblxuICAjaW5pdEJvYXJkKHJvd3MsIGNvbHMpIHtcbiAgICB0aGlzLiNib2FyZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xuICAgICAgICByb3cucHVzaCh7XG4gICAgICAgICAgc2hpcDogbnVsbCxcbiAgICAgICAgICBzdGF0dXM6ICdub25lJyxcbiAgICAgICAgICBkaXJlY3Rpb246ICdub25lJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuI2JvYXJkLnB1c2gocm93KTtcbiAgICB9XG4gIH1cblxuICAjaXNDb29yZE5lYXJTaGlwcyh4LCB5KSB7XG4gICAgZm9yIChsZXQgaSA9IC0xOyBpIDwgMjsgaSsrKSB7XG4gICAgICBjb25zdCBhWSA9IHkgKyBpO1xuICAgICAgaWYgKGFZIDwgMCB8fCBhWSA+PSBCT0FSRF9TSVpFKSBjb250aW51ZTtcblxuICAgICAgZm9yIChsZXQgaiA9IC0xOyBqIDwgMjsgaisrKSB7XG4gICAgICAgIGNvbnN0IGFYID0geCArIGo7XG4gICAgICAgIGlmIChhWCA8IDAgfHwgYVggPj0gQk9BUkRfU0laRSkgY29udGludWU7XG5cbiAgICAgICAgaWYgKHRoaXMuI2JvYXJkW2FZXVthWF0uc2hpcCAhPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vR2FtZUJvYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgI25hbWU7XG4gICNib2FyZDtcblxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy4jbmFtZSA9IG5hbWU7XG4gICAgdGhpcy4jYm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbmFtZTtcbiAgfVxuXG4gIGdldCBib2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jYm9hcmQ7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBvbkhpdDtcbiAgb25TdW5rO1xuICAjbGVuZ3RoO1xuICAjaGl0cztcbiAgI3N1bms7XG5cbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgaWYgKGxlbmd0aCA8PSAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignaW52YWxpZCBzaGlwIGxlbmd0aCcpO1xuXG4gICAgdGhpcy4jaGl0cyA9IDA7XG4gICAgdGhpcy4jc3VuayA9IGZhbHNlO1xuICAgIHRoaXMuI2xlbmd0aCA9IGxlbmd0aDtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xlbmd0aDtcbiAgfVxuXG4gIGdldCBoaXRzKCkge1xuICAgIHJldHVybiB0aGlzLiNoaXRzO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuI2hpdHMrKztcbiAgICBpZiAodHlwZW9mIHRoaXMub25IaXQgPT09ICdmdW5jdGlvbicpIHRoaXMub25IaXQodGhpcy4jaGl0cyk7XG5cbiAgICBpZiAodGhpcy4jaGl0cyA+PSB0aGlzLiNsZW5ndGgpIHtcbiAgICAgIHRoaXMuI3N1bmsgPSB0cnVlO1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9uU3VuayA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5vblN1bmsoKTtcbiAgICB9XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3N1bms7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYnVpbGRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdG9wX2JhdHRsZXNoaXBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdG9wX2JhdHRsZXNoaXBcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfaW50ZXJhY3Rqc19kaXN0X2ludGVyYWN0X21pbl9qcy1ub2RlX21vZHVsZXNfbm9ybWFsaXplX2Nzc19ub3JtYWxpemVfY3NzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9