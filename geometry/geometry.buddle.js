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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/geometry/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/geometry/index.js":
/*!*******************************!*\
  !*** ./src/geometry/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  function o(w, v, i) {\n    return w.getAttribute(v) || i;\n  }\n  function j(i) {\n    return document.getElementsByTagName(i);\n  }\n  function l() {\n    var i = j('script'),\n        w = i.length,\n        v = i[w - 1];\n    return {\n      l: w,\n      z: o(v, 'zIndex', -1), // 这里作为背景设置index:-1\n      o: o(v, 'opacity', 0.5),\n      c: o(v, 'color', '15,136,235'), // 两点之间连线的颜色\n      n: o(v, 'count', 299) // 整个屏幕里面散点的数量\n    };\n  }\n  function k() {\n    // 这里设置了canvas的宽和高为屏幕的宽和高\n    r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;\n  }\n\n  function b() {\n    e.clearRect(0, 0, r, n);\n    var w = [f].concat(t);\n    var x, v, A, B, z, y;\n    t.forEach(function (i) {\n      i.x += i.xa, i.y += i.ya, i.xa *= i.x > r || i.x < 0 ? -1 : 1, i.ya *= i.y > n || i.y < 0 ? -1 : 1, e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);\n      for (v = 0; v < w.length; v++) {\n        x = w[v];\n        if (i !== x && x.x !== null && x.y !== null) {\n          B = i.x - x.x, z = i.y - x.y, y = B * B + z * z;\n          y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(), e.lineWidth = A / 2, e.strokeStyle = 'rgba(' + s.c + ',' + (A + 0.2) + ')', e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke());\n        }\n      }\n      w.splice(w.indexOf(i), 1);\n    }), m(b);\n  }\n  var u = document.createElement('canvas'),\n      s = l(),\n      c = 'c_n' + s.l,\n      e = u.getContext('2d'),\n      r,\n      n,\n      m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (i) {\n    window.setTimeout(i, 1000 / 45);\n  },\n      a = Math.random,\n      f = {\n    x: null,\n    y: null,\n    max: 20000\n  };\n  u.id = c;\n  u.style.cssText = 'position:fixed;top:0;left:0;z-index:' + s.z + ';opacity:' + s.o;\n  j('body')[0].appendChild(u); //将canvas元素插入的body里\n  k(), window.onresize = k;\n  window.onmousemove = function (i) {\n    i = i || window.event, f.x = i.clientX, f.y = i.clientY;\n  }, window.onmouseout = function () {\n    f.x = null, f.y = null;\n  };\n  for (var t = [], p = 0; s.n > p; p++) {\n    var h = a() * r,\n        g = a() * n,\n        q = 2 * a() - 1,\n        d = 2 * a() - 1;\n    t.push({\n      x: h,\n      y: g,\n      xa: q,\n      ya: d,\n      max: 6000\n    });\n  }\n  setTimeout(function () {\n    b();\n  }, 100);\n})();\n\n/// ////////////////////////////////////////////////////\n// (function () {\n//   var canvasEl = document.getElementById('canvas');\n//   var ctx = canvasEl.getContext('2d');\n//   var mousePos = [0, 0];\n\n//   var easingFactor = 5.0;\n//   var backgroundColor = '#000';\n//   var nodeColor = '#fff';\n//   var edgeColor = '#fff';\n\n//   var nodes = [];\n//   var edges = [];\n\n//   function constructNodes() {\n//     for (var i = 0; i < 100; i++) {\n//       var node = {\n//         drivenByMouse: i == 0,\n//         x: Math.random() * canvasEl.width,\n//         y: Math.random() * canvasEl.height,\n//         vx: Math.random() * 1 - 0.5,\n//         vy: Math.random() * 1 - 0.5,\n//         radius: Math.random() > 0.9 ? 3 + Math.random() * 3 : 1 + Math.random() * 3\n//       };\n\n//       nodes.push(node);\n//     }\n\n//     nodes.forEach(function (e) {\n//       nodes.forEach(function (e2) {\n//         if (e == e2) {\n//           return;\n//         }\n\n//         var edge = {\n//           from: e,\n//           to: e2\n//         }\n\n//         addEdge(edge);\n//       });\n//     });\n//   }\n\n//   function addEdge(edge) {\n//     var ignore = false;\n\n//     edges.forEach(function (e) {\n//       if (e.from == edge.from && e.to == edge.to) {\n//         ignore = true;\n//       }\n\n//       if (e.to == edge.from && e.from == edge.to) {\n//         ignore = true;\n//       }\n//     });\n\n//     if (!ignore) {\n//       edges.push(edge);\n//     }\n//   }\n\n//   function step() {\n//     nodes.forEach(function (e) {\n//       if (e.drivenByMouse) {\n//         return;\n//       }\n\n//       e.x += e.vx;\n//       e.y += e.vy;\n\n//       function clamp(min, max, value) {\n//         if (value > max) {\n//           return max;\n//         } else if (value < min) {\n//           return min;\n//         } else {\n//           return value;\n//         }\n//       }\n\n//       if (e.x <= 0 || e.x >= canvasEl.width) {\n//         e.vx *= -1;\n//         e.x = clamp(0, canvasEl.width, e.x)\n//       }\n\n//       if (e.y <= 0 || e.y >= canvasEl.height) {\n//         e.vy *= -1;\n//         e.y = clamp(0, canvasEl.height, e.y)\n//       }\n//     });\n\n//     adjustNodeDrivenByMouse();\n//     render();\n//     window.requestAnimationFrame(step);\n//   }\n\n//   function adjustNodeDrivenByMouse() {\n//     nodes[0].x += (mousePos[0] - nodes[0].x) / easingFactor;\n//     nodes[0].y += (mousePos[1] - nodes[0].y) / easingFactor;\n//   }\n\n//   function lengthOfEdge(edge) {\n//     return Math.sqrt(Math.pow((edge.from.x - edge.to.x), 2) + Math.pow((edge.from.y - edge.to.y), 2));\n//   }\n\n//   function render() {\n//     ctx.fillStyle = backgroundColor;\n//     ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);\n\n//     edges.forEach(function (e) {\n//       var l = lengthOfEdge(e);\n//       var threshold = canvasEl.width / 8;\n\n//       if (l > threshold) {\n//         return;\n//       }\n\n//       ctx.strokeStyle = edgeColor;\n//       ctx.lineWidth = (1.0 - l / threshold) * 2.5;\n//       ctx.globalAlpha = 1.0 - l / threshold;\n//       ctx.beginPath();\n//       ctx.moveTo(e.from.x, e.from.y);\n//       ctx.lineTo(e.to.x, e.to.y);\n//       ctx.stroke();\n//     });\n//     ctx.globalAlpha = 1.0;\n\n//     nodes.forEach(function (e) {\n//       if (e.drivenByMouse) {\n//         return;\n//       }\n\n//       ctx.fillStyle = nodeColor;\n//       ctx.beginPath();\n//       ctx.arc(e.x, e.y, e.radius, 0, 2 * Math.PI);\n//       ctx.fill();\n//     });\n//   }\n\n//   window.onresize = function () {\n//     canvasEl.width = document.body.clientWidth;\n//     canvasEl.height = canvasEl.clientHeight;\n\n//     if (nodes.length == 0) {\n//       constructNodes();\n//     }\n\n//     render();\n//   };\n\n//   window.onmousemove = function (e) {\n//     mousePos[0] = e.clientX;\n//     mousePos[1] = e.clientY;\n//   }\n\n//   window.onresize(); // trigger the event manually.\n//   window.requestAnimationFrame(step);\n// }).call(this);\n\n//# sourceURL=webpack:///./src/geometry/index.js?");

/***/ })

/******/ });