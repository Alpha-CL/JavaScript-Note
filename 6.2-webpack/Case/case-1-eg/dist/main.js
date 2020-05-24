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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/event */ \"./src/page/event.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/page/appendNumber.js":
/*!**********************************!*\
  !*** ./src/page/appendNumber.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_radColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/radColor */ \"./src/util/radColor.js\");\n\n\n\nlet container = document.querySelector('.container'),\n    oCenter = document.querySelector('.center');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (n, isPrime) {\n\n    let span = document.createElement('span');\n\n    span.innerText = n;\n\n    if (isPrime) {\n\n        span.style.color = Object(_util_radColor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n        createCenterPrimeNumber(n, isPrime, Object(_util_radColor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    }\n\n    container.appendChild(span);\n\n    createCenterNumber(n);\n\n});;\n\nfunction createCenterNumber(n) {\n\n    oCenter.innerText = n;\n}\n\nfunction createCenterPrimeNumber(n, isPrime, color) {\n\n    let oDiv = document.createElement('div');\n\n    oDiv.innerText = n;\n    oDiv.className = 'center';\n    oDiv.style.color = color;\n\n    document.body.appendChild(oDiv);\n\n    getComputedStyle(oDiv).left;\n\n    oDiv.style.transform = `translate(${Object(_util_radColor__WEBPACK_IMPORTED_MODULE_0__[\"getRandom\"])(-200, 200)}px, ${Object(_util_radColor__WEBPACK_IMPORTED_MODULE_0__[\"getRandom\"])(-200, 200)}px)`;\n    oDiv.style.opacity = '0';\n}\n\n//# sourceURL=webpack:///./src/page/appendNumber.js?");

/***/ }),

/***/ "./src/page/event.js":
/*!***************************!*\
  !*** ./src/page/event.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_productionFigures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/productionFigures */ \"./src/util/productionFigures.js\");\n/* harmony import */ var _appendNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendNumber */ \"./src/page/appendNumber.js\");\n\n\n\nconst n = new _util_productionFigures__WEBPACK_IMPORTED_MODULE_0__[\"default\"](50);\n\nn.numberIsPrime = function (n, isPrime) {\n\n    Object(_appendNumber__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(n, isPrime);\n};\n\nlet isStart = false;\n\nwindow.onclick = () => {\n\n    if (isStart) {\n\n        n.stop();\n\n        isStart = false;\n\n    } else {\n\n        n.start();\n\n        isStart = true;\n    }\n};\n\n\n\n\n//# sourceURL=webpack:///./src/page/event.js?");

/***/ }),

/***/ "./src/util/isPrime.js":
/*!*****************************!*\
  !*** ./src/util/isPrime.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (n) {\n\n    if (n < 2) return false;\n\n    for (let i = 2; i <= n - 1; i++) {\n\n        if (n % i === 0) return false;\n    }\n\n    return true;\n});\n\n//# sourceURL=webpack:///./src/util/isPrime.js?");

/***/ }),

/***/ "./src/util/productionFigures.js":
/*!***************************************!*\
  !*** ./src/util/productionFigures.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return productionFigures; });\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime */ \"./src/util/isPrime.js\");\n\n\nclass productionFigures {\n\n    constructor(duration = 500) {\n\n        this.duration = duration;\n        this.timer = null;\n        this.number = 1;\n        this.numberIsPrime = null;\n    }\n\n    start() {\n\n        if (this.timer) return;\n\n        this.timer = setInterval(() => {\n\n            this.numberIsPrime && this.numberIsPrime(this.number, Object(_isPrime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.number));\n\n            this.number++;\n\n        }, this.duration);\n    }\n\n    stop() {\n\n        clearInterval(this.timer);\n\n        this.timer = null;\n    }\n};\n\n//# sourceURL=webpack:///./src/util/productionFigures.js?");

/***/ }),

/***/ "./src/util/radColor.js":
/*!******************************!*\
  !*** ./src/util/radColor.js ***!
  \******************************/
/*! exports provided: getRandom, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandom\", function() { return getRandom; });\nlet colors = ['#f26395', '#62efab', '#ffe868', '#80e3f7', '#d781f9'];\n\nfunction getRandom(min, max) {\n\n    return Math.floor(Math.random() * (max - min) + min);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n\n    let i = getRandom(0, colors.length);\n\n    return colors[i];\n});\n\n\n//# sourceURL=webpack:///./src/util/radColor.js?");

/***/ })

/******/ });