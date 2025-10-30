/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_router_routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/router/routes.js */ \"./src/router/routes.js\");\n\nvar app = document.getElementById(\"app\");\napp.innerHTML = \"\";\napp.appendChild(_src_router_routes_js__WEBPACK_IMPORTED_MODULE_0__.routes);\n\n//# sourceURL=webpack://web-client/./index.js?\n}");

/***/ }),

/***/ "./src/components/Board.js":
/*!*********************************!*\
  !*** ./src/components/Board.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Cell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell.js */ \"./src/components/Cell.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Board = function Board(cells, showCell) {\n  console.log(cells);\n  var n = cells.length;\n  var m = cells[0].length;\n  var boardContainer = document.createElement('div');\n  boardContainer.className = 'board';\n  for (var i = 0; i < n; i++) {\n    var rowN = document.createElement('div');\n    rowN.id = '' + i;\n    rowN.className = 'row';\n    for (var j = 0; j < m; j++) {\n      var cell = (0,_Cell_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread(_objectSpread({}, cells[i][j]), {}, {\n        id: i + \"-\" + j,\n        onClick: showCell\n      }));\n      rowN.appendChild(cell);\n    }\n    boardContainer.appendChild(rowN);\n  }\n  return boardContainer;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n//# sourceURL=webpack://web-client/./src/components/Board.js?\n}");

/***/ }),

/***/ "./src/components/Cell.js":
/*!********************************!*\
  !*** ./src/components/Cell.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _excluded = [\"id\", \"value\", \"isMine\", \"hide\", \"onClick\"];\nfunction _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }\nfunction _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }\nvar Cell = function Cell(cell) {\n  var id = cell.id,\n    value = cell.value,\n    isMine = cell.isMine,\n    hide = cell.hide,\n    onClick = cell.onClick,\n    props = _objectWithoutProperties(cell, _excluded);\n  var cellContainer = document.createElement(\"div\");\n  cellContainer.className = \"cell\";\n  cellContainer.classList.add(hide ? \"hide\" : isMine ? \"isMine\" : \"blank\");\n  cellContainer.innerText = !hide ? value : \"\";\n  cellContainer.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    onClick(id);\n  });\n  cellContainer.addEventListener(\"contextmenu\", function (e) {\n    e.preventDefault();\n    console.log(\"Right click on cell: \" + id);\n  });\n  return cellContainer;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell);\n\n//# sourceURL=webpack://web-client/./src/components/Cell.js?\n}");

/***/ }),

/***/ "./src/pages/Game.js":
/*!***************************!*\
  !*** ./src/pages/Game.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Board.js */ \"./src/components/Board.js\");\nfunction _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = \"function\" == typeof Symbol ? Symbol : {}, n = r.iterator || \"@@iterator\", o = r.toStringTag || \"@@toStringTag\"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, \"_invoke\", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError(\"Generator is already running\"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = \"next\"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError(\"iterator result is not an object\"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i[\"return\"]) && t.call(i), c < 2 && (u = TypeError(\"The iterator does not provide a '\" + o + \"' method\"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, \"GeneratorFunction\")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, \"constructor\", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = \"GeneratorFunction\", _regeneratorDefine2(GeneratorFunctionPrototype, o, \"GeneratorFunction\"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, \"Generator\"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, \"toString\", function () { return \"[object Generator]\"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }\nfunction _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, \"\", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o(\"next\", 0), o(\"throw\", 1), o(\"return\", 2)); }, _regeneratorDefine2(e, r, n, t); }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n\n// import axios from \"axios\";\n\nvar getBoard = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {\n    var data;\n    return _regenerator().w(function (_context) {\n      while (1) switch (_context.n) {\n        case 0:\n          _context.n = 1;\n          return fetch('http://localhost:5000/board', {\n            method: 'GET',\n            headers: {\n              'Content-Type': 'application/json'\n            }\n          });\n        case 1:\n          data = _context.v;\n          return _context.a(2, data.json());\n      }\n    }, _callee);\n  }));\n  return function getBoard() {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar _showCell = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(cellId) {\n    var id, i, j, data, container, newMatrix, board;\n    return _regenerator().w(function (_context2) {\n      while (1) switch (_context2.n) {\n        case 0:\n          id = cellId.split('-');\n          i = parseInt(id[0]);\n          j = parseInt(id[1]);\n          _context2.n = 1;\n          return fetch('http://localhost:5000/board', {\n            method: 'PUT',\n            headers: {\n              'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n              i: i,\n              j: j\n            })\n          });\n        case 1:\n          data = _context2.v;\n          container = document.getElementById('home-page');\n          container.removeChild(container.querySelector('.board'));\n          _context2.n = 2;\n          return data.json();\n        case 2:\n          newMatrix = _context2.v;\n          board = (0,_components_Board_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newMatrix.data.board, _showCell);\n          container.appendChild(board);\n        case 3:\n          return _context2.a(2);\n      }\n    }, _callee2);\n  }));\n  return function showCell(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nfunction Game() {\n  var container = document.createElement('div');\n  container.id = 'home-page';\n  // getBoardAxios();\n  var title = document.createElement('h1');\n  title.innerText = 'Land Mines';\n  title.classList = 'title';\n  container.appendChild(title);\n  var cells = getBoard();\n  cells.then(function (data) {\n    var board = (0,_components_Board_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.data.board, _showCell);\n    container.appendChild(board);\n  });\n  return container;\n}\nvar updateBoard = function updateBoard(data) {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://web-client/./src/pages/Game.js?\n}");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Home() {\n  var container = document.createElement('div');\n  container.id = 'home-page';\n  var title = document.createElement(\"h1\");\n  title.innerText = \"Welcome\";\n  title.classList = \"title\";\n  container.appendChild(title);\n  return container;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://web-client/./src/pages/Home.js?\n}");

/***/ }),

/***/ "./src/router/Router.js":
/*!******************************!*\
  !*** ./src/router/Router.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\nvar Router = function Router(paths) {\n  var route = window.location.pathname;\n  var routeComponent = paths[route] || function () {\n    var notFound = document.createElement(\"p\");\n    notFound.innerText = \"404 - Not Found\";\n    return notFound;\n  };\n  return routeComponent();\n};\n\n//# sourceURL=webpack://web-client/./src/router/Router.js?\n}");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   routes: () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _pages_Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Game.js */ \"./src/pages/Game.js\");\n/* harmony import */ var _pages_Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home.js */ \"./src/pages/Home.js\");\n/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Router.js */ \"./src/router/Router.js\");\n\n\n\nvar urls = {\n  \"/\": _pages_Home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  \"/game\": _pages_Game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\nvar routes = (0,_Router_js__WEBPACK_IMPORTED_MODULE_2__.Router)(urls);\n\n//# sourceURL=webpack://web-client/./src/router/routes.js?\n}");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;