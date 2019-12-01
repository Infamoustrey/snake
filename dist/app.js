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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/Canvas */ "./src/util/Canvas.js");
/* harmony import */ var _classes_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Player */ "./src/classes/Player.js");

 // create 16 x 9 map

var map = new Array(45).fill(new Array(80).fill(0));

for (var y in map) {
  for (var x in map[y]) {
    map[y][x] = Math.random() < 0.3 ? 1 : 0;
  }
}

var player = new _classes_Player__WEBPACK_IMPORTED_MODULE_1__["Player"]();
var previousTick = 0;

var getTime = function getTime() {
  return new Date().getTime();
};

function shouldUpdate() {
  var now = getTime();

  if (now - previousTick > 500 || previousTick == 0) {
    previousTick = now;
    return true;
  }

  return false;
}

function update() {
  player.update();
}

function render() {
  // draw the map
  Object(_util_Canvas__WEBPACK_IMPORTED_MODULE_0__["drawRect"])(0, 0, 1280, 720, "black");

  for (var _y in map) {
    for (var _x in map[_y]) {
      Object(_util_Canvas__WEBPACK_IMPORTED_MODULE_0__["drawRect"])(_x * 16, _y * 16, 16, 16, map[_y][_x] == 1 ? "red" : "black", "white");
    }
  }

  player.render();
}

function loop() {
  if (shouldUpdate()) update();
  render();
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);

/***/ }),

/***/ "./src/classes/Player.js":
/*!*******************************!*\
  !*** ./src/classes/Player.js ***!
  \*******************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _util_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Canvas */ "./src/util/Canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Player =
/*#__PURE__*/
function () {
  function Player() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 25;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;
    var xDir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var yDir = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Player);

    this.x = x;
    this.y = y;
    this.xDir = xDir;
    this.yDir = yDir;
    this.train = [];
    window.addEventListener("keydown", this.handleKeyPress.bind(this));
  }

  _createClass(Player, [{
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      switch (e.key) {
        case "ArrowLeft":
          this.xDir = -1;
          this.yDir = 0;
          break;

        case "ArrowRight":
          this.xDir = 1;
          this.yDir = 0;
          break;

        case "ArrowUp":
          this.xDir = 0;
          this.yDir = -1;
          break;

        case "ArrowDown":
          this.xDir = 0;
          this.yDir = 1;
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      Object(_util_Canvas__WEBPACK_IMPORTED_MODULE_0__["drawRect"])(this.x * 16, this.y * 16, 16, 16, "white", "blue");
    }
  }, {
    key: "move",
    value: function move() {
      if (this.x == 0) {
        if (this.xDir == -1) {
          this.xDir = 0;
          this.yDir = -1;
        }
      } else if (this.x == 80) {
        if (this.xDir == 1) {
          this.xDir = 0;
          this.yDir = 1;
        }
      } else if (this.y == 0) {
        if (this.yDir == -1) {
          this.yDir = 0;
          this.xDir = 1;
        }
      } else if (this.y == 45) {
        if (this.yDir == 1) {
          this.yDir = 0;
          this.xDir = -1;
        }
      }

      this.x += this.xDir;
      this.y += this.yDir;
    }
  }, {
    key: "update",
    value: function update() {
      this.move();
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./src/util/Canvas.js":
/*!****************************!*\
  !*** ./src/util/Canvas.js ***!
  \****************************/
/*! exports provided: drawRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawRect", function() { return drawRect; });
var canvasElement = document.querySelector("canvas");
var ctx = canvasElement.getContext("2d");

var drawRect = function drawRect(x, y, w, h) {
  var fillColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "black";
  var borderColor = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "blue";
  ctx.beginPath();
  ctx.fillStyle = fillColor;
  ctx.fillRect(x, y, w, h);
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = borderColor;
  ctx.strokeRect(x, y, w, h);
};



/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/trey/dev/snake/src/app.js */"./src/app.js");


/***/ })

/******/ });