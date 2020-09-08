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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/client/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/client/styles.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*, *:before, *:after {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tbox-sizing: inherit;\r\n}\r\n\r\n#test {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tborder: solid black 5px;\r\n\t/* display: table-cell; */\r\n}\r\n\r\n.board {\r\n\tdisplay: table;\r\n\tborder: solid 2px black;\r\n\tmargin-top: 5%;\r\n\tmargin-left: 5%;\r\n}\r\n\r\n.board-row div {\r\n\twidth: 80px;\r\n\tmin-width: 80px;\r\n\theight: 80px;\r\n\tmin-height: 80px;\r\n\tbackground-color: #f0d9b5;\r\n\tdisplay: table-cell;\r\n\r\n\t-moz-user-select: none;\r\n\t-webkit-user-drag: none;\r\n\t-webkit-user-select: none;\r\n\t/* -ms-user-select: none; */\r\n}\r\n\r\n.piece {\r\n\theight: 80px;\r\n\twidth: 80px;\r\n\tdisplay: table-cell;\r\n}\r\n\r\n.board-square {\r\n\tdisplay: block;\r\n}\r\n\r\n.board-row:nth-child(even) div:nth-child(odd){\r\n\tbackground-color: #b58863;\r\n}\r\n\r\n.board-row:nth-child(odd) div:nth-child(even) {\r\n\tbackground-color: #b58863;\r\n}\r\n\r\n.board-row {\r\n\tdisplay: table-row;\r\n}\r\n\r\n\r\n/* DRAG AND DROP CLASSES */\r\n.hold {\r\n}\r\n\r\n.hovered {\r\n\tbox-shadow: inset 0 0 3px 3px rgb(82, 107, 40);\r\n}\r\n\r\n.valid-move {\r\n\tbox-shadow: inset 0 0 3px 3px red;\r\n}\r\n\r\n.dragHovered {\r\n\tborder: dashed black;\r\n}\r\n\r\n.invisible {\r\n\tdisplay: none;\r\n}\r\n\r\nbutton {\r\n\twidth: 100px;\r\n\theight: 50px;\r\n}\r\n\r\n.modal {\r\n\tdisplay: none;\r\n\tposition: fixed;\r\n\tz-index: 1;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\toverflow: auto;\r\n\tbackground-color: rgb(0,0,0); /* Fallback color */\r\n\tbackground-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n.modal-content {\r\n\tbackground-color: #fefefe;\r\n\tmargin: 15% auto;\r\n\tpadding: 20px;\r\n\tborder: 1px solid #888;\r\n\twidth: 80%;\r\n}\r\n\r\n.radio-group {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\tmargin: 40px;\r\n}\r\n\r\n.promotion-radio {\r\n\twidth: 30%;\r\n\tmargin: 10px;\r\n\t/* margin: none; */\r\n}", ""]);
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

/***/ "./src/client/DOMchessBoard.ts":
/*!*************************************!*\
  !*** ./src/client/DOMchessBoard.ts ***!
  \*************************************/
/*! exports provided: ChessBoardDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessBoardDOM", function() { return ChessBoardDOM; });
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ "./src/client/observer.ts");
/* harmony import */ var _declarations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./declarations */ "./src/client/declarations.ts");
/* harmony import */ var _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LOGICchessBoard */ "./src/client/LOGICchessBoard.ts");



const SQ = 'board-square'; // CSS class of normal square
const HOVERED_SQ = 'hovered'; // CSS class of square hovered by a dragged item
class ChessBoardDOM {
    constructor($boardContaienr) {
        this.$squares = [];
        this.boardState = [];
        this.dropSub = new _observer__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.dragStartSub = new _observer__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.$currDrag = undefined;
        this.dragStart = (e) => {
            const target = e.target;
            this.$currDrag = target;
            if (!this.isPiece(target))
                return;
            this.dragStartSub.notify(this.elCoords(this.$currDrag));
            const { y, x } = this.elCoords(target);
        };
        // TODO Unhighlight valid moves
        this.dragEnd = (e) => {
            const target = e.target;
            if (!this.isPiece(target))
                return; // If not a chess piece, cancel execution
            target.className = 'piece';
        };
        this.dragEnter = (e) => {
            e.preventDefault();
            let target = e.target;
            this.highlightSq(target, HOVERED_SQ);
        };
        this.dragLeave = (e) => {
            let target = e.target;
            this.unHighlightSq(target, ['hovered']);
        };
        this.dragDrop = (e) => {
            const target = e.target;
            const [tgtY, tgtX] = [
                parseInt(target.dataset.y),
                parseInt(target.dataset.x),
            ];
            const droppedPieceCoord = this.elCoords(this.$currDrag);
            this.unhighlightAll();
            this.dropSub.notify({ p: droppedPieceCoord, to: { y: tgtY, x: tgtX } });
            this.$currDrag = undefined;
        };
        this.$container = $boardContaienr;
        this.$board = this.createBoardDiv();
        this.$container.appendChild(this.$board);
        this.$board.addEventListener('dragstart', this.dragStart);
        this.$board.addEventListener('dragend', this.dragEnd);
        this.$board.addEventListener('dragenter', this.dragEnter);
        this.$board.addEventListener('dragleave', this.dragLeave);
        this.$board.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        this.$board.addEventListener('drop', this.dragDrop);
    }
    createSquareDiv() {
        let $square = document.createElement('div');
        $square.className = 'board-square';
        $square.dataset.type = _declarations__WEBPACK_IMPORTED_MODULE_1__["SQUARE"];
        return $square;
    }
    createRowDiv() {
        let $row = document.createElement('div');
        $row.className = 'board-row';
        return $row;
    }
    createBoardDiv() {
        let $board = document.createElement('div');
        this.$squares = new Array(8).fill(0).map((x) => new Array(8));
        for (let y = 0; y < _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_2__["BOARD_SIZE"]; y++) {
            let $row = this.createRowDiv();
            for (let x = 0; x < _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_2__["BOARD_SIZE"]; x++) {
                const $square = this.createSquareDiv();
                $square.dataset.y = y + '';
                $square.dataset.x = x + '';
                this.$squares[y][x] = $square;
                $row.appendChild($square);
            }
            $board.appendChild($row);
        }
        return $board;
    }
    /**
     * Returns true if el or its parent element is a square
     */
    isSquare(el) {
        return el.dataset.type === 'square';
    }
    isPiece(el) {
        return el.dataset.type === _declarations__WEBPACK_IMPORTED_MODULE_1__["PIECE"];
    }
    elCoords(el) {
        return { y: parseInt(el.dataset.y), x: parseInt(el.dataset.x) };
    }
    getPieceImage({ y, x }) {
        const children = this.$squares[y][x].children;
        if (children.length === 1)
            return children[0];
        else
            console.error('Number of elements on square is not 1.');
    }
    emptySquare({ y, x }) {
        if (this.$squares[y][x])
            this.$squares[y][x].innerHTML = '';
    }
    insertPiece(p) {
        let [y, x] = [p.y, p.x];
        this.emptySquare({ y: y, x: x });
        this.$squares[y][x].appendChild(p.domElement);
        p.domElement;
    }
    movePiece({ p, to }) {
        // if (p.y p.x)
        let piece = this.getPieceImage({ y: p.y, x: p.x });
        this.emptySquare({ y: to.y, x: to.x });
        this.$squares[to.y][to.x].appendChild(piece);
        piece.dataset.y = to.y.toString();
        piece.dataset.x = to.x.toString();
        this.unHighlightSq(this.$squares[p.y][p.x]);
        this.unHighlightSq(this.$squares[to.y][to.x]);
    }
    highlightSq(el, cssClass = 'hovered') {
        let elParent = el.parentElement;
        if (this.isSquare(el))
            el.classList.add(cssClass);
        else if (this.isPiece(el) && this.isSquare(elParent))
            elParent.classList.add(cssClass);
    }
    unHighlightSq(el, cssClasses = ['hovered', 'valid-move']) {
        let elParent = el.parentElement;
        let sq;
        if (this.isSquare(el))
            sq = el;
        else if (this.isPiece(el) && this.isSquare(elParent))
            sq = elParent;
        else
            return;
        cssClasses.map((x) => sq.classList.remove(x));
    }
    unhighlightAll() {
        for (let row of this.$squares) {
            for (let sq of row) {
                this.unHighlightSq(sq, ['hovered', 'valid-move']);
            }
        }
    }
    flipBoard() { }
}


/***/ }),

/***/ "./src/client/LOGICchessBoard.ts":
/*!***************************************!*\
  !*** ./src/client/LOGICchessBoard.ts ***!
  \***************************************/
/*! exports provided: BOARD_SIZE, EMPTY, ChessBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_SIZE", function() { return BOARD_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessBoard", function() { return ChessBoard; });
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ "./src/client/observer.ts");
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piece */ "./src/client/piece.ts");


const BOARD_SIZE = 8;
const EMPTY = undefined;
const BACKLINE = [_piece__WEBPACK_IMPORTED_MODULE_1__["Rook"], _piece__WEBPACK_IMPORTED_MODULE_1__["Knight"], _piece__WEBPACK_IMPORTED_MODULE_1__["Bishop"], _piece__WEBPACK_IMPORTED_MODULE_1__["Queen"], _piece__WEBPACK_IMPORTED_MODULE_1__["King"], _piece__WEBPACK_IMPORTED_MODULE_1__["Bishop"], _piece__WEBPACK_IMPORTED_MODULE_1__["Knight"], _piece__WEBPACK_IMPORTED_MODULE_1__["Rook"]];
// TODO Should data for the piece's image be stored here, in Piece class or somewhere else?
class ChessBoard {
    constructor() {
        this.isWhiteTurn = true;
        this.actionSub = new _observer__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.state = Array(8)
            .fill(0)
            .map(() => new Array(8));
    }
    removePiece({ y, x }) {
        const p = this.state[y][x];
        if (p instanceof _piece__WEBPACK_IMPORTED_MODULE_1__["Piece"]) {
            p.domElement.remove();
            this.state[y][x] = undefined;
        }
    }
    insertPiece(p) {
        const [y, x] = [p.y, p.x];
        this.removePiece({ y: y, x: x });
        this.state[y][x] = p;
    }
    movePiece({ p, to }) {
        let piece = this.state[p.y][p.x];
        this.state[to.y][to.x] = piece;
        this.state[p.y][p.x] = undefined;
        piece.move(to);
    }
    turnMovePiece({ p, to, action }) {
        let move = this.isMoveValid(p, to);
        if (move)
            [p, to, action] = [move.p, move.to, move.action];
        else
            return false;
        // Check if en passant move
        // if (this.enPass && this.enPass[1].y === to.y && this.enPass[1].x === to.x) {
        //   this.removePiece({ y: this.enPass[0].y, x: this.enPass[0].x });
        // }
        this.isWhiteTurn = !this.isWhiteTurn;
        this.enPass = this.getEnPassant(p, to);
        this.movePiece({ p: p, to: to });
        this.actionSub.notify(action);
        return true;
    }
    isMoveValid(p, to) {
        const piece = this.state[p.y][p.x];
        if (!(piece instanceof _piece__WEBPACK_IMPORTED_MODULE_1__["Piece"]) || piece.isWhite !== this.isWhiteTurn)
            return undefined; // False if there is no piece or piece of wrong color
        let validPieceMoves = piece.getValidMoves(this.state, this.enPass);
        for (let m of validPieceMoves) {
            if (m.to.y === to.y && m.to.x === to.x)
                return m;
        }
        return undefined;
    }
    /**
     *
     * @param p
     * @param to
     */
    getEnPassant(p, to) {
        let piece = this.state[p.y][p.x];
        if (!(piece instanceof _piece__WEBPACK_IMPORTED_MODULE_1__["Pawn"]) || piece.hasMoved)
            return undefined;
        const offset = piece.isWhite ? -1 : 1;
        if (Math.abs(p.y - to.y) === 2)
            return [
                { y: to.y, x: to.x },
                { y: p.y + offset, x: p.x },
            ];
        else
            return undefined;
    }
}


/***/ }),

/***/ "./src/client/chessGame.ts":
/*!*********************************!*\
  !*** ./src/client/chessGame.ts ***!
  \*********************************/
/*! exports provided: chessGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chessGame", function() { return chessGame; });
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ "./src/client/observer.ts");
/* harmony import */ var _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LOGICchessBoard */ "./src/client/LOGICchessBoard.ts");
/* harmony import */ var _DOMchessBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMchessBoard */ "./src/client/DOMchessBoard.ts");
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./piece */ "./src/client/piece.ts");




const BACKLINE = [_piece__WEBPACK_IMPORTED_MODULE_3__["Rook"], _piece__WEBPACK_IMPORTED_MODULE_3__["Knight"], _piece__WEBPACK_IMPORTED_MODULE_3__["Bishop"], _piece__WEBPACK_IMPORTED_MODULE_3__["Queen"], _piece__WEBPACK_IMPORTED_MODULE_3__["King"], _piece__WEBPACK_IMPORTED_MODULE_3__["Bishop"], _piece__WEBPACK_IMPORTED_MODULE_3__["Knight"], _piece__WEBPACK_IMPORTED_MODULE_3__["Rook"]];
// TODO Somehow check sync of LOGIC and DOM
class chessGame {
    constructor($boardContainer) {
        var _a;
        this.promoCoord = { y: -1, x: -1 }; // Used in pawn promotion
        this.logic = new _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_1__["ChessBoard"]();
        this.dom = new _DOMchessBoard__WEBPACK_IMPORTED_MODULE_2__["ChessBoardDOM"]($boardContainer);
        this.state = this.logic.state;
        this.isWhiteTurn = this.logic.isWhiteTurn;
        this.promoModal = document.querySelector('#promotion-modal');
        this.pieces = this.initGame();
        let promotionBtn = (_a = document
            .querySelector('#promotion-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            const selected = this.promoModal.querySelector('[name]:checked');
            this.promotionPopup(false);
            this.promote(selected.value);
        });
        let dropObserver = new _observer__WEBPACK_IMPORTED_MODULE_0__["Observer"]((m) => {
            this.turnMovePiece(m);
        });
        let dragStartObserver = new _observer__WEBPACK_IMPORTED_MODULE_0__["Observer"]((p) => {
            this.highlightValidMoves(p);
        });
        let actionObserver = new _observer__WEBPACK_IMPORTED_MODULE_0__["Observer"]((a) => {
            if (!a)
                return;
            console.log(a);
            if (a.move)
                this.movePiece(a.move);
            if (a.remove)
                this.removePiece(a.remove);
            if (a.promote) {
                this.promoCoord = a.promote;
                this.promotionPopup(true);
            }
        });
        this.dom.dropSub.attach(dropObserver);
        this.dom.dragStartSub.attach(dragStartObserver);
        this.logic.actionSub.attach(actionObserver);
    }
    // TODO Try to move most of it to LOGIC
    turnMovePiece({ p, to }) {
        let piece = this.state[p.y][p.x];
        if (!this.logic.turnMovePiece({ p: p, to: to }))
            return;
        // this.logic.movePiece(p, to);
        this.dom.movePiece({ p: p, to: to });
    }
    movePiece(m) {
        this.logic.movePiece(m);
        this.dom.movePiece(m);
    }
    spawnPiece(p, isWhite, { y, x }) {
        let piece = new p(y, x, isWhite);
        this.logic.insertPiece(piece);
        this.dom.insertPiece(piece);
    }
    removePiece(m) {
        this.logic.removePiece(m);
        // this.dom.emptySquare(m);
    }
    initGame() {
        let pieces = [];
        for (let i = 0; i < _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_1__["BOARD_SIZE"]; i++) {
            pieces.push(new BACKLINE[i](0, i, false)); // black
            pieces.push(new BACKLINE[i](7, i, true)); // white
            pieces.push(new _piece__WEBPACK_IMPORTED_MODULE_3__["Pawn"](1, i, false)); // black pawns
            pieces.push(new _piece__WEBPACK_IMPORTED_MODULE_3__["Pawn"](6, i, true)); // white pawns
        }
        for (let p of pieces) {
            this.logic.insertPiece(p);
            this.dom.insertPiece(p);
        }
        return pieces;
    }
    // TODO Implement
    promotionPopup(show) {
        if (show)
            this.promoModal.style.display = 'block';
        else
            this.promoModal.style.display = 'none';
    }
    promote(promTo) {
        let { y, x } = this.promoCoord;
        let isWhite = this.logic.state[y][x].isWhite;
        switch (promTo) {
            case 'Queen':
                this.spawnPiece(_piece__WEBPACK_IMPORTED_MODULE_3__["Queen"], isWhite, this.promoCoord);
                break;
            case 'Bishop':
                this.spawnPiece(_piece__WEBPACK_IMPORTED_MODULE_3__["Bishop"], isWhite, this.promoCoord);
                break;
            case 'Rook':
                this.spawnPiece(_piece__WEBPACK_IMPORTED_MODULE_3__["Rook"], isWhite, this.promoCoord);
                break;
        }
    }
    wipeBoard() {
        for (let y = 0; y < _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_1__["BOARD_SIZE"]; y++) {
            for (let x = 0; x < _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_1__["BOARD_SIZE"]; x++) {
                this.logic.removePiece({ y: y, x: x });
                this.dom.emptySquare({ y: y, x: x });
            }
        }
    }
    highlightValidMoves({ y, x }) {
        const p = this.state[y][x];
        if (p instanceof _piece__WEBPACK_IMPORTED_MODULE_3__["Piece"]) {
            const moves = p.getValidMoves(this.state, this.logic.enPass);
            for (let m of moves) {
                this.dom.highlightSq(this.dom.$squares[m.to.y][m.to.x], 'valid-move');
            }
        }
    }
}


/***/ }),

/***/ "./src/client/chessMoves.ts":
/*!**********************************!*\
  !*** ./src/client/chessMoves.ts ***!
  \**********************************/
/*! exports provided: vertDiagMoves, offsetMoves, bishopMoves, rookMoves, isOutOfBounds, knightMoveOffsets, kingMoveOffsets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vertDiagMoves", function() { return vertDiagMoves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offsetMoves", function() { return offsetMoves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bishopMoves", function() { return bishopMoves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rookMoves", function() { return rookMoves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOutOfBounds", function() { return isOutOfBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "knightMoveOffsets", function() { return knightMoveOffsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kingMoveOffsets", function() { return kingMoveOffsets; });
/* harmony import */ var _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LOGICchessBoard */ "./src/client/LOGICchessBoard.ts");

function vertDiagMoves(loops, boardState) {
    let validMoves = [];
    let y;
    let x;
    for (let loop of loops) {
        y = loop.yStart;
        x = loop.xStart;
        for (; loop.compare(y, x);) {
            const currY = loop.modifyY ? y : loop.yStart;
            const currX = loop.modifyX ? x : loop.xStart;
            const squareState = boardState[currY][currX];
            if (squareState === _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_0__["EMPTY"])
                validMoves.push({ y: currY, x: currX });
            else if (!loop.isWhite === squareState.isWhite) {
                // TODO Consider using the classe's "this"
                validMoves.push({ y: currY, x: currX });
                break;
            }
            else
                break;
            y = loop.yIncrement ? y + 1 : y - 1;
            x = loop.xIncrement ? x + 1 : x - 1;
        }
    }
    return validMoves;
}
function offsetMoves(offsets, boardState, other) {
    let validMoves = [];
    for (let offset of offsets) {
        const to = { y: other.y + offset.y, x: other.x + offset.x };
        // if (other instanceof Pawn) {}
        if (isOutOfBounds(to))
            continue;
        const sq = boardState[to.y][to.x];
        if (other.isWhite === (sq === null || sq === void 0 ? void 0 : sq.isWhite))
            continue; // If sq empty or piece on sq is same color as other continue
        validMoves.push({ p: { y: other.y, x: other.x }, to: to });
    }
    return validMoves;
}
function bishopMoves(other) {
    return [
        {
            // Moves in positive y positive x direction
            yStart: other.y + 1,
            xStart: other.x + 1,
            isWhite: other.isWhite,
            compare: (y, x) => y < _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_0__["BOARD_SIZE"] && x < _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_0__["BOARD_SIZE"],
            modifyY: true,
            modifyX: true,
            yIncrement: true,
            xIncrement: true,
        },
        {
            // Moves in positive y negative x direction
            yStart: other.y + 1,
            xStart: other.x - 1,
            isWhite: other.isWhite,
            compare: (y, x) => y < _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_0__["BOARD_SIZE"] && x > -1,
            modifyY: true,
            modifyX: true,
            yIncrement: true,
            xIncrement: false,
        },
        {
            // Moves in negative y negative x direction
            yStart: other.y - 1,
            xStart: other.x - 1,
            isWhite: other.isWhite,
            compare: (y, x) => y > -1 && x > -1,
            modifyY: true,
            modifyX: true,
            yIncrement: false,
            xIncrement: false,
        },
        {
            // Moves in negative y positive x direction
            yStart: other.y - 1,
            xStart: other.x + 1,
            isWhite: other.isWhite,
            compare: (y, x) => y > -1 && x < _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_0__["BOARD_SIZE"],
            modifyY: true,
            modifyX: true,
            yIncrement: false,
            xIncrement: true,
        },
    ];
}
function rookMoves(other) {
    return [
        {
            yStart: other.y + 1,
            xStart: other.x,
            isWhite: other.isWhite,
            compare: (y, _) => y < _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_0__["BOARD_SIZE"],
            modifyY: true,
            modifyX: false,
            yIncrement: true,
        },
        {
            yStart: other.y - 1,
            xStart: other.x,
            isWhite: other.isWhite,
            compare: (y, x) => y > -1,
            modifyY: true,
            modifyX: false,
            yIncrement: false,
        },
        {
            yStart: other.y,
            xStart: other.x + 1,
            isWhite: other.isWhite,
            compare: (y, x) => x < _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_0__["BOARD_SIZE"],
            modifyY: false,
            modifyX: true,
            xIncrement: true,
        },
        {
            yStart: other.y,
            xStart: other.x - 1,
            isWhite: other.isWhite,
            compare: (y, x) => x > -1,
            modifyY: false,
            modifyX: true,
            xIncrement: false,
        },
    ];
}
function isOutOfBounds({ y, x }) {
    return !(y < _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_0__["BOARD_SIZE"] && y > -1 && x < _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_0__["BOARD_SIZE"] && x > -1);
}
const knightMoveOffsets = [
    { y: -2, x: -1 },
    { y: -2, x: 1 },
    { y: 1, x: 2 },
    { y: -1, x: 2 },
    { y: 2, x: 1 },
    { y: 2, x: -1 },
    { y: 1, x: -2 },
    { y: -1, x: -2 },
];
const kingMoveOffsets = [
    { y: -1, x: -1 },
    { y: -1, x: 0 },
    { y: -1, x: 1 },
    { y: 0, x: -1 },
    { y: 0, x: 1 },
    { y: 1, x: -1 },
    { y: 1, x: 0 },
    { y: 1, x: 1 },
];


/***/ }),

/***/ "./src/client/declarations.ts":
/*!************************************!*\
  !*** ./src/client/declarations.ts ***!
  \************************************/
/*! exports provided: SQUARE, PIECE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQUARE", function() { return SQUARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIECE", function() { return PIECE; });
const SQUARE = 'square';
const PIECE = 'piece';


/***/ }),

/***/ "./src/client/index.ts":
/*!*****************************!*\
  !*** ./src/client/index.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LOGICchessBoard */ "./src/client/LOGICchessBoard.ts");
/* harmony import */ var _chessGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chessGame */ "./src/client/chessGame.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/client/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);



let debugBtn = document.querySelector('#debug');
let debugBtn2 = document.querySelector('#debug2');
let boardContainer = document.querySelector('.board-container');
// let $board = new ChessBoardDOM(boardContainer as HTMLElement);
// let board = new ChessBoard();
// debugBtn.addEventListener('click', () => console.log($board.$squares))
let game = new _chessGame__WEBPACK_IMPORTED_MODULE_1__["chessGame"](boardContainer);
let logic = new _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_0__["ChessBoard"]();
for (let c of [{ y: 1, x: 3 }, { y: 6, x: 3 }, { y: 7, x: 3 }, { y: 7, x: 2 }, { y: 7, x: 1 }, { y: 1, x: 1 }, { y: 0, x: 1 }]) {
    game.removePiece(c);
}
debugBtn.addEventListener('click', () => {
    // console.log((game.state[7][4] as King).isInCheck({y: 7, x: 3}, game.state))
});
debugBtn2.addEventListener('click', () => {
    console.table(game.state);
});


/***/ }),

/***/ "./src/client/observer.ts":
/*!********************************!*\
  !*** ./src/client/observer.ts ***!
  \********************************/
/*! exports provided: Subject, Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
class Subject {
    constructor() {
        this.observers = [];
    }
    attach(o) {
        this.observers.push(o);
    }
    ;
    detach(o) {
        const i = this.observers.indexOf(o);
        this.observers.splice(i, 1);
    }
    ;
    notify(value) {
        for (let o of this.observers) {
            o.update(value);
        }
    }
}
class Observer {
    constructor(f) {
        this.fun = f;
    }
    update(value) {
        this.fun(value);
    }
}


/***/ }),

/***/ "./src/client/piece.ts":
/*!*****************************!*\
  !*** ./src/client/piece.ts ***!
  \*****************************/
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
/* harmony import */ var _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LOGICchessBoard */ "./src/client/LOGICchessBoard.ts");
/* harmony import */ var _declarations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./declarations */ "./src/client/declarations.ts");
/* harmony import */ var _chessMoves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chessMoves */ "./src/client/chessMoves.ts");



const IMG_SIZE = '80px';
class Piece {
    constructor(y, x, isWhite = true, image) {
        this.y = y;
        this.x = x;
        this.isWhite = isWhite;
        this.hasMoved = false;
        this.validMoveCache = [];
        this.imgPath = this.isWhite
            ? `./chess_img/w${image}`
            : `./chess_img/b${image}`;
        this.domElement = document.createElement('img');
        this.domElement.className = 'piece';
        this.domElement.src = this.imgPath;
        this.domElement.dataset.y = this.y.toString();
        this.domElement.dataset.x = this.x.toString();
        this.domElement.dataset.type = _declarations__WEBPACK_IMPORTED_MODULE_1__["PIECE"];
    }
    move({ y, x }) {
        this.y = y;
        this.x = x;
        // this.domElement.id = ` ${y},${x}`;
        this.domElement.dataset.y = this.y.toString();
        this.domElement.dataset.x = this.x.toString();
        this.hasMoved = true;
        this.resetCache();
    }
    resetCache() {
        this.validMoveCache = undefined;
        Piece.enemyMoveCache = undefined;
    }
    isEnemy(p) {
        return p ? !(p.isWhite === this.isWhite) : false;
    }
    enemyValidMoves(bStat) {
        let moves = [];
        for (let row of bStat) {
            for (let p of row) {
                if (p instanceof Piece && this.isEnemy(p)) {
                    moves = moves.concat(p.getValidMoves(bStat, undefined, false));
                }
            }
        }
        return moves.map((x) => x.to);
    }
    isOcc(sq, bStat) {
        return !!bStat[sq.y][sq.x];
    }
}
Piece.enemyMoveCache = undefined;
class Rook extends Piece {
    constructor(y, x, isWhite = true, image = '_rook.svg') {
        super(y, x, isWhite, image);
    }
    getValidMoves(boardState) {
        let validMoves = [];
        validMoves = Object(_chessMoves__WEBPACK_IMPORTED_MODULE_2__["vertDiagMoves"])(Object(_chessMoves__WEBPACK_IMPORTED_MODULE_2__["rookMoves"])(this), boardState);
        this.validMoveCache = validMoves;
        return validMoves.map((x) => {
            return { p: { y: this.y, x: this.x }, to: x };
        });
    }
}
class Bishop extends Piece {
    constructor(row, column, isWhite = true, image = '_bishop.svg') {
        super(row, column, isWhite, image);
    }
    getValidMoves(boardState) {
        let validMoves = [];
        validMoves = Object(_chessMoves__WEBPACK_IMPORTED_MODULE_2__["vertDiagMoves"])(Object(_chessMoves__WEBPACK_IMPORTED_MODULE_2__["bishopMoves"])(this), boardState);
        this.validMoveCache = validMoves;
        return validMoves.map((x) => {
            return { p: { y: this.y, x: this.x }, to: x };
        });
    }
}
class Knight extends Piece {
    constructor(row, column, isWhite = true, image = '_knight.svg') {
        super(row, column, isWhite, image);
    }
    getValidMoves(boardState) {
        let validMoves = [];
        validMoves = Object(_chessMoves__WEBPACK_IMPORTED_MODULE_2__["offsetMoves"])(_chessMoves__WEBPACK_IMPORTED_MODULE_2__["knightMoveOffsets"], boardState, this);
        return validMoves;
    }
}
class King extends Piece {
    constructor(row, column, isWhite = true, image = '_king.svg') {
        super(row, column, isWhite, image);
    }
    getValidMoves(bStat, enPassant, includeCastl = true) {
        let validMoves = Object(_chessMoves__WEBPACK_IMPORTED_MODULE_2__["offsetMoves"])(_chessMoves__WEBPACK_IMPORTED_MODULE_2__["kingMoveOffsets"], bStat, this);
        if (includeCastl) {
            // Prevent infinte recursive calls when checking enemy king's moves
            validMoves = validMoves.filter((x) => !this.isInCheck(x.to, bStat));
            validMoves = validMoves.concat(this.getCastling(bStat));
        }
        return validMoves;
    }
    getCastling(bStat) {
        let validMoves = [];
        // TODO Check if king is in check
        if (!this.hasMoved && !this.isInCheck({ y: this.y, x: this.x }, bStat)) {
            let y = this.isWhite ? 7 : 0;
            let [lRook, rRook] = [bStat[y][0], bStat[y][7]];
            let lCastl = {
                rook: lRook,
                fst: { y: y, x: 3 },
                snd: { y: y, x: 2 },
                trd: { y: y, x: 1 },
            };
            let rCastl = {
                rook: rRook,
                fst: { y: y, x: 5 },
                snd: { y: y, x: 6 },
            };
            // Check whether left castle or right castle are valid
            let castlValid = [lCastl, rCastl].map((c) => {
                if (c.rook.hasMoved)
                    return false;
                for (let m of [c.fst, c.snd]) {
                    // Check if squares which would be traversed by king are occupied or in check
                    if (this.isOcc(m, bStat) || this.isInCheck(m, bStat)) {
                        return false;
                    }
                }
                return true;
            });
            // Check if third left-castle square is occupied (this square is not crossed by the king so it is not checked for being in check)
            if (this.isOcc(lCastl.trd, bStat))
                castlValid[0] = false;
            if (castlValid[0])
                validMoves.push({
                    p: { y: this.y, x: this.x },
                    to: { y: this.y, x: 2 },
                    action: { move: { p: { y: this.y, x: 0 }, to: { y: this.y, x: 3 } } },
                });
            if (castlValid[1])
                validMoves.push({
                    p: { y: this.y, x: this.x },
                    to: { y: 7, x: 6 },
                    action: { move: { p: { y: this.y, x: 7 }, to: { y: this.y, x: 5 } } },
                });
            return validMoves;
        }
        else
            return [];
    }
    isInCheck(sq = { y: this.y, x: this.x }, boardState) {
        if (!Piece.enemyMoveCache) {
            console.log('new enemyMoves');
            Piece.enemyMoveCache = this.enemyValidMoves(boardState);
        }
        for (let m of Piece.enemyMoveCache) {
            // console.log(m, m.y === sq.y, m.x === sq.x);
            if (m.y === sq.y && m.x === sq.x) {
                return true;
            }
        }
        return false;
    }
}
class Queen extends Piece {
    constructor(row, column, isWhite = true, image = '_queen.svg') {
        super(row, column, isWhite, image);
    }
    getValidMoves(boardState) {
        let validMoves = [];
        validMoves = validMoves.concat(Object(_chessMoves__WEBPACK_IMPORTED_MODULE_2__["vertDiagMoves"])(Object(_chessMoves__WEBPACK_IMPORTED_MODULE_2__["bishopMoves"])(this), boardState));
        validMoves = validMoves.concat(Object(_chessMoves__WEBPACK_IMPORTED_MODULE_2__["vertDiagMoves"])(Object(_chessMoves__WEBPACK_IMPORTED_MODULE_2__["rookMoves"])(this), boardState));
        this.validMoveCache = validMoves;
        return validMoves.map((x) => {
            return { p: { y: this.y, x: this.x }, to: x };
        });
    }
}
class Pawn extends Piece {
    constructor(row, column, isWhite = true, image = '_pawn.svg') {
        super(row, column, isWhite, image);
    }
    getValidMoves(boardState, enPass) {
        let enSq;
        let enPiece;
        let validMoves = [];
        const yOffset = this.isWhite ? -1 : 1;
        let basicMoves = [{ y: this.y + yOffset, x: this.x }];
        let beatMoves = [
            { y: this.y + yOffset, x: this.x + 1 },
            { y: this.y + yOffset, x: this.x - 1 },
        ];
        if (!this.hasMoved)
            basicMoves.push({ y: this.y + 2 * yOffset, x: this.x });
        for (let m of basicMoves) {
            if (Object(_chessMoves__WEBPACK_IMPORTED_MODULE_2__["isOutOfBounds"])(m) || boardState[m.y][m.x] !== _LOGICchessBoard__WEBPACK_IMPORTED_MODULE_0__["EMPTY"])
                break;
            validMoves.push({ p: { y: this.y, x: this.x }, to: m });
        }
        for (let m of beatMoves) {
            if (Object(_chessMoves__WEBPACK_IMPORTED_MODULE_2__["isOutOfBounds"])(m) || !this.isEnemy(boardState[m.y][m.x]))
                continue;
            validMoves.push({ p: { y: this.y, x: this.x }, to: m });
        }
        // enPassant
        if (enPass) {
            enPiece = boardState[enPass[0].y][enPass[0].x];
            enSq = enPass[1];
            for (let m of beatMoves) {
                if (this.isEnemy(enPiece) && m.y === enSq.y && m.x === enSq.x) {
                    let action = {
                        remove: { y: this.isWhite ? m.y + 1 : m.y - 1, x: m.x },
                    };
                    validMoves.push({
                        p: { y: this.y, x: this.x },
                        to: m,
                        action: action,
                    });
                }
            }
        }
        validMoves = validMoves.map((m) => {
            if (this.isWhite && m.to.y === 0)
                return Object.assign(Object.assign({}, m), { action: { promote: { y: m.to.y, x: m.to.x } } });
            else if (!this.isWhite && m.to.y === 7)
                return Object.assign(Object.assign({}, m), { action: { promote: { y: m.to.y, x: m.to.x } } });
            return m;
        });
        console.log(validMoves);
        return validMoves;
    }
}


/***/ }),

/***/ "./src/client/styles.css":
/*!*******************************!*\
  !*** ./src/client/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/client/styles.css");

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