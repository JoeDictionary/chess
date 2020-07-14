/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*, *:before, *:after {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tbox-sizing: inherit;\r\n}\r\n\r\n#test {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tborder: solid black 5px;\r\n\t/* display: table-cell; */\r\n}\r\n\r\n.board {\r\n\tdisplay: table;\r\n\tborder: solid 2px black;\r\n\tmargin-top: 5%;\r\n\tmargin-left: 5%;\r\n}\r\n\r\n.row div {\r\n\twidth: 80px;\r\n\tmin-width: 80px;\r\n\theight: 80px;\r\n\tmin-height: 80px;\r\n\tbackground-color: #f0d9b5;\r\n\tdisplay: table-cell;\r\n\r\n\t-moz-user-select: none;\r\n\t-webkit-user-drag: none;\r\n\t-webkit-user-select: none;\r\n\t/* -ms-user-select: none; */\r\n}\r\n\r\n.piece {\r\n\theight: 80px;\r\n\twidth: 80px;\r\n\tdisplay: table-cell;\r\n}\r\n\r\n.square {\r\n\tdisplay: block;\r\n}\r\n\r\n.row:nth-child(even) div:nth-child(odd){\r\n\tbackground-color: #b58863;\r\n}\r\n\r\n.row:nth-child(odd) div:nth-child(even) {\r\n\tbackground-color: #b58863;\r\n}\r\n\r\n.row {\r\n\tdisplay: table-row;\r\n\t/* display: block; */\r\n}\r\n\r\n\r\n/* DRAG AND DROP CLASSES */\r\n.hold {\r\n}\r\n\r\n.hovered {\r\n\tbox-shadow: inset 0 0 3px 3px rgb(82, 107, 40);\r\n}\r\n\r\n.dragHovered {\r\n\tborder: dashed black;\r\n}\r\n\r\n.invisible {\r\n\tdisplay: none;\r\n}\r\n\r\nbutton {\r\n\twidth: 100px;\r\n\theight: 50px;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/chessBoard.ts":
/*!***************************!*\
  !*** ./src/chessBoard.ts ***!
  \***************************/
/*! exports provided: BOARD_SIZE, EMPTY, Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_SIZE", function() { return BOARD_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/piece.ts");

// import { Piece } from "./piece"
const BOARD_SIZE = 8;
const EMPTY = undefined;
const PAWN = 'P';
const HORSE = 'H';
const BISHOP = 'B';
const ROOK = 'R';
const QUEEN = 'Q';
const KING = 'K';
const BACKLINE = [_piece__WEBPACK_IMPORTED_MODULE_0__["Rook"], _piece__WEBPACK_IMPORTED_MODULE_0__["Knight"], _piece__WEBPACK_IMPORTED_MODULE_0__["Bishop"], _piece__WEBPACK_IMPORTED_MODULE_0__["Queen"], _piece__WEBPACK_IMPORTED_MODULE_0__["King"], _piece__WEBPACK_IMPORTED_MODULE_0__["Bishop"], _piece__WEBPACK_IMPORTED_MODULE_0__["Knight"], _piece__WEBPACK_IMPORTED_MODULE_0__["Rook"]];
class Board {
    /**
     * @param boardContainer  HTMLElement to which the chessboard will be appended.
     *
     */
    constructor(boardContainer) {
        // TODO Make squares have coordinate-IDSs instead of data attributes
        // TODO What does e.preventDefault() exactly do?
        this.dragDrop = (e) => {
            var _a;
            const target = e.target;
            const droppedEl = document.getElementById((_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('text'));
            // Drop target coords
            let trgtY;
            let trgtX;
            if (target.className.includes('piece')) {
                [trgtY, trgtX] = target.id.split(',').map((x) => parseInt(x));
            }
            else if (target.className.includes('square')) {
                target.className = 'square';
                // Retrieve coords of target square from data-attributes.
                trgtY = parseInt(target.dataset.y);
                trgtX = parseInt(target.dataset.x);
            }
            if (droppedEl === null || droppedEl === void 0 ? void 0 : droppedEl.className.includes('piece')) {
                // Retrieve coords of dropped element from id.
                const [drpY, drpX] = droppedEl.id.split(',').map((x) => parseInt(x));
                const trgtState = this.state[trgtY][trgtX];
                const drpState = this.state[drpY][drpX];
                // Cancel DnD action if target is an allied piece
                if (trgtState && !drpState.isEnemy(trgtState)) {
                    return;
                }
                this.movePiece(drpY, drpX, trgtY, trgtX);
            }
        };
        this.boardContainer = boardContainer;
        // Holds each div that makes up a single square on the chessboard for later reference
        this.squareElements = Array(8)
            .fill(0)
            .map(() => new Array(8));
        this.state = Array(8)
            .fill(0)
            .map(() => new Array(8));
        // Holds the DOM-Elements making up the board. Gets appended to 'boardContainer'.
        this.board = document.createElement('div');
        let row = document.createElement('div');
        let square = document.createElement('div');
        this.board.className = 'board';
        row.className = 'row';
        square.className = 'square';
        for (let y = 0; y < 8; y++) {
            let rowDiv = row.cloneNode();
            for (let x = 0; x < 8; x++) {
                let squareDiv = square.cloneNode();
                squareDiv.className = 'square';
                squareDiv.dataset.x = x.toString();
                squareDiv.dataset.y = y.toString();
                squareDiv.addEventListener('dragenter', this.dragEnter);
                squareDiv.addEventListener('dragleave', this.dragLeave);
                squareDiv.addEventListener('dragover', (e) => {
                    e.preventDefault();
                });
                squareDiv.addEventListener('drop', this.dragDrop);
                rowDiv.appendChild(squareDiv);
                this.squareElements[y][x] = squareDiv;
            }
            this.board.appendChild(rowDiv);
        }
        boardContainer.appendChild(this.board);
    }
    removePiece(y, x) {
        // If not undefined in state array, remove dom element of that piece and destroy the instance by setting to indefined
        if (this.state[y][x]) {
            this.state[y][x].domElement.remove();
            this.state[y][x] = undefined;
        }
    }
    insertPiece(piece) {
        let x = piece.x;
        let y = piece.y;
        if (this.state[y][x] !== EMPTY) {
            this.removePiece(y, x);
        }
        this.squareElements[y][x].appendChild(piece.domElement);
        this.state[y][x] = piece;
    }
    movePiece(fromY, fromX, toY, toX) {
        var _a, _b;
        // Removes piece on target square.
        this.removePiece(toY, toX);
        // Change moved piece's internal state.
        (_a = this.state[fromY][fromX]) === null || _a === void 0 ? void 0 : _a.move(toY, toX);
        // Move piece in state array to new location by first copying piece to new location and deleting it in the old location.
        this.state[toY][toX] = this.state[fromY][fromX];
        this.state[fromY][fromX] = undefined;
        // Append domElement of moved piece to target square.
        this.squareElements[toY][toX].appendChild((_b = this.state[toY][toX]) === null || _b === void 0 ? void 0 : _b.domElement);
    }
    initPieces() {
        // TODO Can i even do this?
        // this.constructor(this.boardContainer)
        for (let x = 0; x < 8; x++) {
            const backY = 0;
            const frontY = 1;
            let nonPawn = new BACKLINE[x](backY, x, false);
            let pawn = new _piece__WEBPACK_IMPORTED_MODULE_0__["Pawn"](frontY, x, false);
            this.state[backY][x] = nonPawn;
            this.state[frontY][x] = pawn;
            this.squareElements[backY][x].appendChild(nonPawn.domElement);
            this.squareElements[frontY][x].appendChild(pawn.domElement);
        }
        for (let x = 0; x < 8; x++) {
            const backY = 7;
            const frontY = 6;
            let nonPawn = new BACKLINE[x](backY, x);
            let pawn = new _piece__WEBPACK_IMPORTED_MODULE_0__["Pawn"](frontY, x);
            this.state[backY][x] = nonPawn;
            this.state[frontY][x] = pawn;
            this.squareElements[backY][x].appendChild(nonPawn.domElement);
            this.squareElements[frontY][x].appendChild(pawn.domElement);
        }
    }
    dragEnter(e) {
        e.preventDefault();
        let targetClass = e.target.className;
        if (targetClass === 'square') {
            e.target.className += ' hovered';
        }
    }
    dragLeave(e) {
        let target = e.target;
        if (target.className.includes('square')) {
            e.target.className = 'square';
        }
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chessBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chessBoard */ "./src/chessBoard.ts");
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piece */ "./src/piece.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);



let debugBtn = document.querySelector('#debug');
let boardContainer = document.querySelector('.board-container');
let chessBoard = new _chessBoard__WEBPACK_IMPORTED_MODULE_0__["Board"](boardContainer);
let rookie = new _piece__WEBPACK_IMPORTED_MODULE_1__["Rook"](3, 0, true);
chessBoard.initPieces();
chessBoard.insertPiece(rookie);
debugBtn === null || debugBtn === void 0 ? void 0 : debugBtn.addEventListener('click', (e) => {
    // console.log(rookie.domElement.id);
    console.log(chessBoard.state);
    console.log(rookie.validMoves(chessBoard.state));
});
/*
let board = document.querySelector('.board')!;
let row = document.createElement('div');
let square = document.createElement('div');
row.className = 'row';
square.className = 'square empty';

for (let i = 0; i < 8; i++) {
  row.appendChild(square.cloneNode());
}
for (let i = 0; i < 8; i++) {
  board.appendChild(row.cloneNode(true));
}
*/
/*
let bishop = document.querySelector('.piece')!;
bishop.addEventListener('dragstart', dragStart);
bishop.addEventListener('dragend', dragEnd);

function dragStart(e: Event) {
  console.log(e.target);
  (e.target as HTMLElement).className += ' hold';
  setTimeout(() => ((e.target as HTMLElement).className = 'invisible'), 0);
}

function dragEnd(e: Event) {
  console.log(e);
  (e.target as HTMLElement).className = 'piece';
} */
/*
let empties = document.querySelectorAll('.empty')!;

for (const empty of empties) {
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragEnter(e: Event) {
  e.preventDefault();
  this.className += ' hovered';
  // console.log('enter');
}
function dragLeave(e: Event) {
  this.className = 'empty';
  // console.log('leave');
}
function dragDrop(e: Event) {
  console.log(e);
    this.appendChild(bishop);
    this.className = 'empty'
  // console.log('drop');
}
 */
function monthDiff(d1, d2 = new Date()) {
    let months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}


/***/ }),

/***/ "./src/piece.ts":
/*!**********************!*\
  !*** ./src/piece.ts ***!
  \**********************/
/*! exports provided: Piece, Rook, Bishop, Knight, King, Queen, Pawn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Piece", function() { return Piece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rook", function() { return Rook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bishop", function() { return Bishop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Knight", function() { return Knight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "King", function() { return King; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queen", function() { return Queen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pawn", function() { return Pawn; });
/* harmony import */ var _chessBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chessBoard */ "./src/chessBoard.ts");

const IMG_SIZE = '80px';
class Piece {
    constructor(y, x, isWhite = true, image) {
        // TODO Prevent ghost image on dragging.
        this.dragStart = (e) => {
            let target = e.target;
            target.className += ' hold';
            setTimeout(() => (target.className += ' invisible'), 0);
            e.dataTransfer.setData('text', this.domElement.id);
        };
        this.dragEnd = (e) => {
            e.target.className = 'piece';
        };
        this.y = y;
        this.x = x;
        this.isWhite = isWhite;
        this.hasMoved = false;
        this.imgPath = this.isWhite
            ? `./chess_img/w${image}`
            : `./chess_img/b${image}`;
        this.domElement = document.createElement('img');
        this.domElement.className = 'piece';
        this.domElement.src = this.imgPath;
        this.domElement.id = `${this.y},${this.x}`;
        this.domElement.addEventListener('dragstart', this.dragStart);
        this.domElement.addEventListener('dragend', this.dragEnd);
    }
    move(y, x) {
        this.y = y;
        this.x = x;
        this.domElement.id = ` ${y},${x}`;
    }
    /**
     * @param p Piece for which to check if it is of the opposite color.
     * If undefined is passed, meaning the square is empty, returns false.
     */
    isEnemy(p) {
        return p ? !(p.isWhite === this.isWhite) : false;
    }
    changePos(pos) {
        this.x, (this.y = pos[0]), pos[1];
    }
}
class Rook extends Piece {
    constructor(y, x, isWhite = true, image = '_rook.svg') {
        super(y, x, isWhite, image);
    }
    validMoves(boardState) {
        let validMoves = [];
        // Moves in positive y
        for (let y = this.y + 1; y < _chessBoard__WEBPACK_IMPORTED_MODULE_0__["BOARD_SIZE"]; y++) {
            const squareState = boardState[y][this.x];
            if (squareState === _chessBoard__WEBPACK_IMPORTED_MODULE_0__["EMPTY"])
                validMoves.push({ y: y, x: this.x });
            else if (this.isEnemy(squareState)) {
                validMoves.push({ y: y, x: this.x });
                break;
            }
            else
                break;
        }
        // Moves in negative y
        for (let y = this.y - 1; y > -1; y--) {
            const squareState = boardState[y][this.x];
            if (squareState === _chessBoard__WEBPACK_IMPORTED_MODULE_0__["EMPTY"])
                validMoves.push({ y: y, x: this.x });
            else if (this.isEnemy(squareState)) {
                validMoves.push({ y: y, x: this.x });
                break;
            }
            else
                break;
        }
        // Moves in positive x
        for (let x = this.x + 1; x < _chessBoard__WEBPACK_IMPORTED_MODULE_0__["BOARD_SIZE"]; x++) {
            console.log(x);
            const squareState = boardState[this.y][x];
            if (squareState === _chessBoard__WEBPACK_IMPORTED_MODULE_0__["EMPTY"])
                validMoves.push({ y: this.y, x: x });
            else if (this.isEnemy(squareState)) {
                validMoves.push({ y: this.y, x: x });
                break;
            }
            else
                break;
        }
        // Moves in negative x
        for (let x = this.x - 1; x > -1; x--) {
            // console.log(x)
            const squareState = boardState[this.y][x];
            if (squareState === _chessBoard__WEBPACK_IMPORTED_MODULE_0__["EMPTY"])
                validMoves.push({ y: this.y, x: x });
            else if (this.isEnemy(squareState)) {
                validMoves.push({ y: this.y, x: x });
                break;
            }
            else
                break;
        }
        return validMoves;
        // const yRanges = [
        //   { from: this.y + 1, to: BOARD_SIZE, fn: (y: number) => ++y },
        //   // { from: this.y - 1, to: -1, fn: (y: number) => --y },
        // ];
        // for (let r of yRanges) {
        //   for (let y = r.from; y < r.to; r.fn(y)) {
        //     const squareState = boardState[y][this.x];
        //     if (squareState === EMPTY) validMoves.push({ y: y, x: this.x });
        //     else if ((squareState as Piece).isWhite) {
        //       validMoves.push({ y: y, x: this.x });
        //       break;
        //     } else break;
        //   }
        // }
        // const xRanges = [
        //   { from: this.x + 1, to: BOARD_SIZE, fn: (x: number) => ++x },
        //   { from: this.x - 1, to: -1, fn: (x: number) => --x },
        // ];
    }
}
class Bishop extends Piece {
    constructor(row, column, isWhite = true, image = '_bishop.svg') {
        super(row, column, isWhite, image);
    }
    validMoves(boardState) { }
}
class Knight extends Piece {
    constructor(row, column, isWhite = true, image = '_knight.svg') {
        super(row, column, isWhite, image);
    }
    validMoves(boardState) { }
}
class King extends Piece {
    constructor(row, column, isWhite = true, image = '_king.svg') {
        super(row, column, isWhite, image);
    }
    validMoves(boardState) { }
}
class Queen extends Piece {
    constructor(row, column, isWhite = true, image = '_queen.svg') {
        super(row, column, isWhite, image);
    }
    validMoves(boardState) { }
}
class Pawn extends Piece {
    constructor(row, column, isWhite = true, image = '_pawn.svg') {
        super(row, column, isWhite, image);
    }
    validMoves(boardState) { }
}


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map