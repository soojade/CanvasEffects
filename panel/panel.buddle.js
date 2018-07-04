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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/panel/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/panel/canvas.js":
/*!*****************************!*\
  !*** ./src/panel/canvas.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Canvas = function Canvas() {\n  _classCallCheck(this, Canvas);\n\n  this.canvas = document.createElement('canvas');\n  this.canvas.innerText = '您的浏览器版本太低，请使用最新版本的 chrome、Firefox 或 edge 浏览器';\n  this.canvas.style.display = 'block';\n  this.canvas.style.background = '#ccc';\n  document.body.appendChild(this.canvas);\n  this.context = this.canvas.getContext('2d');\n  this.canvas.width = 500;\n  this.canvas.height = 500;\n};\n\nexports.default = Canvas;\n\n//# sourceURL=webpack:///./src/panel/canvas.js?");

/***/ }),

/***/ "./src/panel/index.js":
/*!****************************!*\
  !*** ./src/panel/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _canvas = __webpack_require__(/*! ./canvas */ \"./src/panel/canvas.js\");\n\nvar _canvas2 = _interopRequireDefault(_canvas);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.onload = function () {\n  var canvas = new _canvas2.default();\n  var context = canvas.context;\n  canvas.width = 500;\n  canvas.height = 500;\n  var CENTROID_RADIUS = 10,\n      CENTROID_STROKE_STYLE = 'rgba(0,0,0,0.5)',\n      CENTROID_FILL_STYLE = 'rgba(80,190,240,0.6)',\n      RING_INNER_RADIUS = 35,\n      RING_OUTER_RADIUS = 55,\n      ANNOTATIONS_FILL_STYLE = 'rgba(0,0,230,0.9)',\n      ANNOTATIONS_TEXT_SIZE = 12,\n      TICK_WIDTH = 10,\n      TICK_LONG_STROKE_STYLE = 'rgba(100,140,230,0.9)',\n      TICK_SHORT_STROKE_STYLE = 'rgba(100,140,230,0.7)',\n      TRACKING_DIAL_STROKING_STYLE = 'rgba(100,140,230,0.5)',\n      GUIDEWIRE_STROKE_STYLE = 'goldenrod',\n      GUIDEWIRE_FILL_STYLE = 'rgba(250,250,0,0.8)',\n      circle = {\n    x: canvas.width / 2,\n    y: canvas.height / 2,\n    radius: 150\n  };\n\n  function drawGrid(color, x, y) {\n    context.save();\n    context.shadowColor = undefined;\n    context.shadowOffsetX = 0;\n    context.shadowOffsetY = 0;\n    context.strokeStyle = color;\n    context.fillStyle = '#fff';\n    context.lineWidth = 0.5;\n    context.fillRect(0, 0, canvas.width, canvas.height);\n\n    for (var i = x + 0.5; i < canvas.width; i += x) {\n      context.beginPath();\n      context.moveTo(i, 0);\n      context.lineTo(i, canvas.height);\n      context.stroke();\n    }\n\n    for (var _i = y + 0.5; _i < canvas.height; _i += y) {\n      context.beginPath();\n      context.moveTo(0, _i);\n      context.lineTo(canvas.width, _i);\n      context.stroke();\n    }\n    context.restore();\n  }\n\n  function draw() {\n    var loc = { x: circle.x, y: circle.y };\n    drawCentroid();\n    drawCentroidGuidewire(loc);\n    drawRing();\n    drawTickInnerCircle();\n    drawTicks();\n    drawAnnotations();\n  }\n\n  function drawCentroid() {\n    context.beginPath();\n    context.save();\n    context.strokeStyle = CENTROID_STROKE_STYLE;\n    context.fillStyle = CENTROID_FILL_STYLE;\n    context.arc(circle.x, circle.y, CENTROID_RADIUS, 0, Math.PI * 2, false);\n    context.stroke();\n    context.fill();\n    context.restore();\n  }\n\n  function drawCentroidGuidewire(loc) {\n    var angle = -Math.PI / 4,\n        radius = void 0,\n        endpt = void 0;\n    radius = circle.radius + RING_OUTER_RADIUS;\n    if (loc.x >= circle.x) {\n      endpt = {\n        x: circle.x + radius * Math.cos(angle),\n        y: circle.y + radius * Math.sign(angle)\n      };\n    } else {\n      endpt = {\n        x: circle.x - radius * Math.cos(angle),\n        y: circle.y - radius * Math.sin(angle)\n      };\n    }\n    context.save();\n    context.strokeStyle = GUIDEWIRE_STROKE_STYLE;\n    context.fillStyle = GUIDEWIRE_FILL_STYLE;\n    context.beginPath();\n    context.moveTo(circle.x, circle.y);\n    context.lineTo(endpt.x, endpt.y);\n    context.stroke();\n    context.beginPath();\n    context.strokeStyle = TICK_LONG_STROKE_STYLE;\n    context.arc(endpt.x, endpt.y, 5, 0, Math.PI * 2, false);\n    context.fill();\n    context.stroke();\n    context.restore();\n  }\n\n  function drawRing() {\n    drawRingOuterCircle();\n    context.strokeStyle = 'rgba(0,0,0,0.1)';\n    context.arc(circle.x, circle.y, circle.radius + RING_INNER_RADIUS, 0, Math.PI * 2, false);\n    context.fillStyle = 'rgba(100,140,230,0.1)';\n    context.fill();\n    context.stroke();\n  }\n\n  function drawRingOuterCircle() {\n    context.shadowColor = 'rgba(0,0,0,0.7)';\n    context.shadowOffsetX = 3;\n    context.shadowOffsetY = 3;\n    context.shadowBlur = 6;\n    context.strokeStyle = TRACKING_DIAL_STROKING_STYLE;\n    context.beginPath();\n    context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, true);\n    context.stroke();\n  }\n\n  function drawTickInnerCircle() {\n    context.save();\n    context.beginPath();\n    context.strokeStyle = 'rgba(0,0,0,0.3)';\n    context.arc(circle.x, circle.y, circle.radius + RING_INNER_RADIUS - TICK_WIDTH, 0, Math.PI * 2, false);\n    context.stroke();\n    context.restore();\n  }\n\n  function drawTick(angle, radius, cnt) {\n    var tickWidth = cnt % 4 === 0 ? TICK_WIDTH : TICK_WIDTH / 2;\n\n    context.beginPath();\n    context.moveTo(circle.x + Math.cos(angle) * (radius - tickWidth), circle.y + Math.sin(angle) * (radius - tickWidth));\n    context.lineTo(circle.x + Math.cos(angle) * radius, circle.y + Math.sin(angle) * radius);\n    context.strokeStyle = TICK_SHORT_STROKE_STYLE;\n    context.stroke();\n  }\n  function drawTicks() {\n    var radius = circle.radius + RING_INNER_RADIUS,\n        ANGLE_MAX = 2 * Math.PI,\n        ANGLE_DELTA = Math.PI / 64,\n        tickWidth = void 0;\n    context.save();\n\n    for (var angle = 0, cnt = 0; angle < ANGLE_MAX; angle += ANGLE_DELTA, cnt++) {\n      drawTick(angle, radius, cnt++);\n    }\n    context.restore();\n  }\n\n  function drawAnnotations() {\n    var radius = circle.radius + RING_INNER_RADIUS;\n    context.save();\n    context.fillStyle = ANNOTATIONS_FILL_STYLE;\n    context.font = ANNOTATIONS_TEXT_SIZE + 'px sans-serif';\n    for (var angle = 0; angle < 2 * Math.PI; angle += Math.PI / 8) {\n      context.beginPath();\n      context.fillText((angle * 180 / Math.PI).toFixed(0), circle.x + Math.cos(angle) * (radius - TICK_WIDTH * 2), circle.y - Math.sin(angle) * (radius - TICK_WIDTH * 2));\n    }\n    context.restore();\n  }\n\n  context.shadowColor = 'rgba(0,0,0,0.4)';\n  context.shadowOffsetX = 2;\n  context.shadowOffsetY = 2;\n  context.shadowBlur = 4;\n  context.textAlign = 'center';\n  context.textBaseline = 'middle';\n  drawGrid('lightgray', 10, 10);\n  draw();\n};\n\n//# sourceURL=webpack:///./src/panel/index.js?");

/***/ })

/******/ });