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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/polygon/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/polygon/canvas.js":
/*!*******************************!*\
  !*** ./src/polygon/canvas.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Canvas = function () {\n  function Canvas(width, height, bgColor) {\n    _classCallCheck(this, Canvas);\n\n    this.canvas = document.createElement('canvas');\n    this.canvas.innerText = '您的浏览器版本太低，请使用最新版本的 chrome、Firefox 或 edge 浏览器';\n    this.canvas.style.display = 'block';\n    this.canvas.style.margin = '0 auto';\n    this.canvas.style.background = bgColor;\n    this.canvas.width = width;\n    this.canvas.height = height;\n    document.body.appendChild(this.canvas);\n    this.canvas.context = this.canvas.getContext('2d');\n  }\n\n  /**\r\n   * 传入canvas 和 x y 相对页面的坐标点转换成相对 canvas的坐标点\r\n   * @param {HTMLCanvasElement} canvas\r\n   * @param {int} x\r\n   * @param {int} y\r\n   */\n\n\n  _createClass(Canvas, null, [{\n    key: 'windowToCanvas',\n    value: function windowToCanvas(canvas, x, y) {\n      var box = canvas.getBoundingClientRect();\n      return {\n        x: x - box.left * (canvas.width / box.width),\n        y: y - box.top * (canvas.height / box.height)\n      };\n    }\n  }]);\n\n  return Canvas;\n}();\n\nexports.default = Canvas;\n\n//# sourceURL=webpack:///./src/polygon/canvas.js?");

/***/ }),

/***/ "./src/polygon/index.js":
/*!******************************!*\
  !*** ./src/polygon/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _canvas = __webpack_require__(/*! ./canvas */ \"./src/polygon/canvas.js\");\n\nvar _canvas2 = _interopRequireDefault(_canvas);\n\nvar _polygon = __webpack_require__(/*! ./polygon */ \"./src/polygon/polygon.js\");\n\nvar _polygon2 = _interopRequireDefault(_polygon);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.onload = function () {\n  var canvas = new _canvas2.default(500, 500, '#eee').canvas;\n  var context = canvas.context;\n\n  var colors = ['#69d2e7', '#a7dbdb', '#3e0e4cc', '#f38630', '#fa6900', '#ff4e50', '#f9d423']; // 设置一组比较好看的颜色\n\n  canvas.onmousedown = function (e) {\n    var n = Math.floor(Math.random() * 10);\n    var angle = Math.floor(Math.random() * 360); // 随机角度\n    var index = Math.floor(Math.random() * 7); // 随机取颜色\n\n    var _Canvas$windowToCanva = _canvas2.default.windowToCanvas(canvas, e.clientX, e.clientY),\n        x = _Canvas$windowToCanva.x,\n        y = _Canvas$windowToCanva.y;\n\n    context.clearRect(0, 0, canvas.width, canvas.height);\n    var polygon = new _polygon2.default(x, y, canvas.width / 5, n, angle, colors[index], colors[index], true);\n\n    polygon.createPath(context);\n\n    if (polygon.filled && n > 2) {\n      polygon.fill(context);\n    } else {\n      polygon.stroke(context);\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/polygon/index.js?");

/***/ }),

/***/ "./src/polygon/polygon.js":
/*!********************************!*\
  !*** ./src/polygon/polygon.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Point = function Point(x, y) {\n  _classCallCheck(this, Point);\n\n  this.x = x;\n  this.y = y;\n};\n\nvar Polygon = function () {\n  function Polygon(centerX, centerY, radius, sides, startAngle, strokeStyle, fillStyle, filled) {\n    _classCallCheck(this, Polygon);\n\n    this.x = centerX;\n    this.y = centerY;\n    this.radius = radius;\n    this.sides = sides < 2 ? 2 : sides;\n    this.startAngle = startAngle;\n    this.strokeStyle = strokeStyle;\n    this.fillStyle = fillStyle;\n    this.filled = filled;\n  }\n\n  _createClass(Polygon, [{\n    key: \"getPoints\",\n    value: function getPoints() {\n      var points = [];\n      var angle = this.startAngle || 0;\n\n      for (var i = 0; i < this.sides; i++) {\n        points.push(new Point(this.x + this.radius * Math.sin(angle), this.y - this.radius * Math.cos(angle)));\n        angle += Math.PI * 2 / this.sides;\n      }\n      return points;\n    }\n  }, {\n    key: \"createPath\",\n    value: function createPath(context) {\n      var points = this.getPoints();\n      context.beginPath();\n      context.moveTo(points[0].x, points[0].y);\n\n      for (var i = 1; i < this.sides; i++) {\n        context.lineTo(points[i].x, points[i].y);\n      }\n      context.closePath();\n    }\n  }, {\n    key: \"stroke\",\n    value: function stroke(context) {\n      context.save();\n      this.createPath(context);\n      context.strokeStyle = this.strokeStyle;\n      context.stroke();\n      context.restore();\n    }\n  }, {\n    key: \"fill\",\n    value: function fill(context) {\n      context.save();\n      this.createPath(context);\n      context.fillStyle = this.fillStyle;\n      context.fill();\n      context.restore();\n    }\n  }]);\n\n  return Polygon;\n}();\n\nexports.default = Polygon;\n\n//# sourceURL=webpack:///./src/polygon/polygon.js?");

/***/ })

/******/ });