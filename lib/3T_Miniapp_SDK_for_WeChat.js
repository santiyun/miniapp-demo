(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("3T_Miniapp_SDK_for_WeChat", [], factory);
	else if(typeof exports === 'object')
		exports["3T_Miniapp_SDK_for_WeChat"] = factory();
	else
		root["3T_Miniapp_SDK_for_WeChat"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/is-iterable.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/json/stringify.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/map.js":
/*!***************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/map.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/map */ "./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/number/is-nan.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/number/is-nan.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/number/is-nan */ "./node_modules/core-js/library/fn/number/is-nan.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-own-property-names.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-own-property-names.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-names */ "./node_modules/core-js/library/fn/object/get-own-property-names.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-own-property-symbols.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-own-property-symbols.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/promise.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/asyncToGenerator.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/map.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__(/*! ../modules/es7.map.to-json */ "./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__(/*! ../modules/es7.map.of */ "./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__(/*! ../modules/es7.map.from */ "./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/fn/number/is-nan.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/number/is-nan.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.number.is-nan */ "./node_modules/core-js/library/modules/es6.number.is-nan.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Number.isNaN;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-names.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-names.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-names */ "./node_modules/core-js/library/modules/es6.object.get-own-property-names.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.map.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.number.is-nan.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.number.is-nan.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-names.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-names.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js").f;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, module, keywords, engines, scripts, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"miniapp-sdk","version":"2.0.2-Build-11911191","description":"miniapp sdk module","main":"dist/index.js","module":"dist/index.es.js","keywords":["nodejs","browser"],"engines":{"node":">=8.0.0"},"scripts":{"build":"webpack","lint":"eslint -c .eslintrc.js src/utils src/protoo-client src/index.js src/3t-miniapp.js src/config.js src/index.js"},"dependencies":{"babel-runtime":"^6.26.0"},"devDependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.1","babel-plugin-transform-runtime":"^6.23.0","babel-polyfill":"^6.26.0","babel-preset-env":"^1.7.0","babel-preset-es2015":"^6.24.1","eslint":"^5.15.1","webpack":"^4.30.0","webpack-cli":"^3.3.0"}};

/***/ }),

/***/ "./src/3t-miniapp.js":
/*!***************************!*\
  !*** ./src/3t-miniapp.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TTTLog = exports.Client = undefined;

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _map = __webpack_require__(/*! babel-runtime/core-js/map */ "./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var protooClient = __webpack_require__(/*! ./protoo-client/protoo-client.js */ "./src/protoo-client/protoo-client.js");
var Logger = __webpack_require__(/*! ./utils/Logger.js */ "./src/utils/Logger.js");

var _require = __webpack_require__(/*! ./thirdparty/utils.js */ "./src/thirdparty/utils.js"),
    guid = _require.guid,
    isURL = _require.isURL;

var config = __webpack_require__(/*! ./config.js */ "./src/config.js");

var IPLocation = __webpack_require__(/*! ./utils/IPLocation.js */ "./src/utils/IPLocation.js");

// AUTH 重试定时器
var AUTH_INTERVAL = 5000; // 5s

// 心跳定时器
var HB_INTERVAL = 8000; // 8s
// 

// Error code define
// {
var ERR_FAILED = 'failed';
var ERR_DISCONNECTED = 'disconnected';
// }

// User role 定义
var UR_CHAIRMAN = 1; // 主席
var UR_PARTICIPANT = 2; // 普通用户
var UR_AUDIENCE = 3; // 观众
// 

// SDK state (初始化、websocket连接状态)
// {
var C_SDK_STATE_IDLE = 0; // 尚未初始化/已destroy
var C_SDK_STATE_INITING = 1; // 正在初始化中
var C_SDK_STATE_INIT = 2; // 成功初始化 -- 已成功连接到webserver
var C_SDK_STATE_DESTROY = 3; // 已 destroy
// }

// join 状态
// {
var C_JOIN_STATE_IDLE = 0; // 空闲/注销
var C_JOIN_STATE_JOINING = 1; // join 尝试中
var C_JOIN_STATE_ON = 2; // join online
// }

// publish 状态
// {
var C_PUBLISH_STATE_IDLE = 0; // 空闲
var C_PUBLISH_STATE_ING = 1; // 当前已发起 publish 请求，尚未最终确认
var C_PUBLISH_STATE_ON = 2; // 当前处于 publish 状态
// }

// session-status 取值
var C_SS_AUTO_CONNECTING = 3000; // 正在重连
var C_SS_CONNECTED = 200; // 连接成功
var C_SS_JOINED = 210; // join成功
var C_SS_RECONNECTED = 300; // 重连成功
var C_SS_REJOINED = 310; // rejoin成功 -- 在重连后自动 join ，也属于 rejoin
var C_SS_FINAL_FAILED = 1000; // 最终失败

// 默认端口号
var C_IPLOC_PORT = 443;
var C_AU_PORT = 443;

// log -- 将 sdk 内部日志 callback 到 app 层，由 app 层输出
var TTTLog = function () {
	function TTTLog(opts) {
		(0, _classCallCheck3.default)(this, TTTLog);
		var level = opts.level,
		    callback = opts.callback;

		// 

		this._callback = callback;

		this._logLevel = level;
	}

	(0, _createClass3.default)(TTTLog, [{
		key: 'setLogLevel',
		value: function setLogLevel(level) {
			this._logLevel = level;
		}
	}, {
		key: 'onLog',
		set: function set(callback) {
			this._callback = callback;
		}
	}]);
	return TTTLog;
}();

/**
 * TTT Engine core
 * 提供对外接口
 * 
 */
var Client = function () {
	/**
  * @param {String} appId  -- app id
  * @param {String} userId  -- user id
  * @param {String} isTest -- 是否为测试环境 -- 测试环境将使用测试环境IPLocation
  */
	function Client(appId, userId, isTest) {
		(0, _classCallCheck3.default)(this, Client);

		if (!appId || !userId) {
			this._logger.warn('Client constructor() error. invalid parameters');

			return;
		}

		userId = parseInt(userId);

		// 
		this._isTest = Boolean(isTest);

		// 用于日志追踪
		this._logClues = '';

		// 
		this._logger = new Logger('3t-miniapp-sdk');
		this._logger.setParameters({
			appId: appId,
			roomId: '',
			userId: userId,
			logClues: this._logClues
		});

		this._logger.debug('Client constructor() appId: ' + appId + ' userId: ' + userId);
		/* eslint-disable no-console */
		// console.log(`Client constructor() appId: ${appId} userId: ${userId} server: ${server}`);
		/* eslint-enable no-console */

		// connection id
		this._sid = guid();

		// miniapp-au's address -- IP
		// 
		this._auServer = '';

		this._protooUrl = '';

		// 当前系统行为是否处于 挂起/暂停 状态
		// 当 网络off 时，挂起行为；当 网络on 时，恢复行为
		this._suspend = false;

		// auth尝试 计数
		this.attemptAuth = 0;
		// 
		this.authInterval = null;

		// 
		this.authTimeout = null;

		// 是否已完成 appId 认证
		this._authOK = false;

		// SDK 库状态
		this._sdkState = C_SDK_STATE_IDLE;

		// 当前登录状态
		this._joinState = C_JOIN_STATE_IDLE;

		this._publishState = C_PUBLISH_STATE_IDLE;

		// protoo-client Peer instance.
		// @type {protooClient.Peer}
		this._protooPeer = null;

		// 是否自定义 wss 端口
		this._customPort = 0;

		// mediasoup-client Device instance.
		// @type {mediasoupClient.Device}
		this._appId = '';

		this._roomId = 0;

		this._role = UR_PARTICIPANT; // 默认为普通用户

		// IPLocation
		this._iploc = null;

		// IPLocation 是否已完成
		this._iplocFin = false;

		// mediasoup Transport for sending.
		// @type {mediasoupClient.Transport}
		this._userId = 0;

		// event handler
		// map :: event --> observer_func
		// observer_func 被初始化为 {}
		// 在初始化期间，我们已在 _eventObserver 中初始化了所有支持的 event
		// 在整个运行生命周期内，不允许对 _eventObserver 进行增删操作
		this._eventObserver = new _map2.default();

		// connectId 用于描述当前会话
		// 注：由 gateway 统一分配
		this._connectId = '';

		// 心跳包序列号
		this._sequenceNo = 1; // 暂以 1 为起始

		// 定时器句柄
		this._hbTimer = null;

		// 最近一次收到心跳包的时戳
		this._lastHBRecvTick = 0;

		this._mapUsers = new _map2.default();

		// 
		this._subscribes = new _map2.default();
	}

	(0, _createClass3.default)(Client, [{
		key: 'mediaStat',


		/**
   * 从外部将 小程序 live-player，live-pusher 的媒体传输统计信息，通过日志平台记录下来
   * @param {Number} opts.code 
   * @param {String} opts.type -- 类型 player : 拉流媒体状态；pusher : 推流媒体状态
   * @param {String} opts.userId -- 用户ID 
   */
		value: function mediaStat(code, type, userId, message) {
			this._logger.debug('{code:' + code + ', userId:' + userId + ', type:"' + type + '", media-state:' + message + ' }');
		}

		// 
		// 内部私有函数

	}, {
		key: 'resetEventObserver',
		value: function resetEventObserver() {
			if (!this._eventObserver) {
				return;
			}

			// session-status : 会话状态（控制层面）
			this._eventObserver.set('session-status', function () {});
			// media-status : 媒体传输状态
			this._eventObserver.set('media-status', function () {});
			// stream-added : 有流加入 -- publish
			this._eventObserver.set('stream-added', function () {});
			// stream-removed : 有流移除 -- unpublish
			this._eventObserver.set('stream-removed', function () {});
			// disconnected : 已断开 -- 上层在收到 'disconnected' 事件后，应调用 destroy
			this._eventObserver.set('disconnected', function () {});
			// kickout : 被踢出
			this._eventObserver.set('kickout', function () {});
			this._eventObserver.set('update-url', function () {});
			// error : 有错误发生
			this._eventObserver.set('error', function () {});
			// user-online : 有用户上线
			this._eventObserver.set('user-online', function () {});
			// user-offline : 有用户下线
			this._eventObserver.set('user-offline', function () {});
		}

		/**
   * 初始化 Client 库，此接口为使用SDK的第一步
   * 
   * @param {String} appId     -- 
   * @param {String} userId    -- 用户ID -- 外部设定的ID，可以用于日志跟踪
   * @param {String} onSuccess -- onSuccess() init调用成功，回调 onSuccess
   * @param {String} onFailure -- onFailure(event) -- init调用失败，回调 onFailure，event 为错误信息
   * @param {Boolean} disAppAuth -- 
   * @param {Boolean} disIploc --
   * @param {String} auServer --
   */

	}, {
		key: 'init',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(appId, userId, onSuccess, onFailure, disAppAuth, disIploc, auServer) {
				var _this = this;

				var timestamp, randNum, authProcPromise, authTimerPromise;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!(!appId || !userId || typeof onSuccess !== 'function' || typeof onFailure !== 'function')) {
									_context.next = 3;
									break;
								}

								this._logger.warn('Client init() error. invalid parameters');

								return _context.abrupt('return');

							case 3:
								// 
								userId = parseInt(userId);

								timestamp = Date.parse(new Date());
								randNum = Math.round(Math.random() * 1000000000);

								// 

								this._appId = appId;
								this._userId = userId;

								this._logClues = timestamp + '-' + randNum;

								this._logger.debug('Client API init() _logClues: ' + this._logClues + ' parameters -- appId: ' + appId + ' userId: ' + userId + ' disAppAuth: ' + disAppAuth + ' disIploc: ' + disIploc + ' auServer: ' + auServer);
								// 
								try {
									// 获取系统信息
									wx.getSystemInfo({
										success: function success(res) {
											_this._logger.debug('SYS information: \n  version  : ' + res.version + '\n  system   : ' + res.system + '\n  platform : ' + res.platform + '\n  brand    : ' + res.brand + '  model    : ' + res.model);
										},
										fail: function fail() {},
										complete: function complete() {}
									});

									// 
									wx.onNetworkStatusChange(function (res) {
										_this._logger.debug('wx.onNetworkStatusChange isConnected: ' + res.isConnected + ' networkType: ' + res.networkType);
										// 如果网络恢复，则 -- 更新 lastHBRecvTick
										// TODO : reconnect immediately ??
										if (res.isConnected) {
											// 网络 on
											// 
											_this.resumeProcess();
										} else {
											// 网络 off
											// TODO : 挂起所有行为
											_this.suspendProcess();
										}
									});
								} catch (error) {}

								// 
								// 首先判断状态

								if (!(this._sdkState !== C_SDK_STATE_IDLE)) {
									_context.next = 15;
									break;
								}

								this._logger.debug('Client API init() failed. this._sdkState(' + this._sdkState + ') !== C_SDK_STATE_IDLE');

								onFailure({
									code: 400,
									reason: '_sdkState(' + C_SDK_STATE_IDLE + ') is not C_SDK_STATE_IDLE'
								});

								return _context.abrupt('return');

							case 15:
								if (/^\d+$/.test(userId)) {
									_context.next = 19;
									break;
								}

								this._logger.debug('Client API init() failed. userId[' + userId + '] is not number.');

								onFailure({
									code: 400,
									reason: 'userId[' + userId + '] is not number'
								});

								return _context.abrupt('return');

							case 19:

								// appId 验证
								// 
								authProcPromise = new _promise2.default(function (resolve, reject) {
									if (disAppAuth) {
										resolve();
									} else {
										/* eslint-disable no-undef */
										wx.showLoading({
											title: 'appId auth',
											mask: true
										});
										/* eslint-enable no-undef */

										_this.attemptAuth = 0;

										_this.doAppAuth(appId, resolve, reject);

										// 启动 auth 重试
										_this.authInterval = setInterval(function () {
											_this.doAppAuth(appId, resolve, reject);
										}, AUTH_INTERVAL);
									}
								});
								authTimerPromise = new _promise2.default(function (resolve, reject) {
									var tttEngine = _this;

									_this.authTimeout = setTimeout(function () {
										if (!tttEngine._authOK) {
											reject({
												code: 500,
												reason: 'appId auth timeout'
											});
										}
									}, 15000); // 默认超时为 15s
								});


								_promise2.default.race([authProcPromise, authTimerPromise]).then(function () {
									/* eslint-disable no-undef */
									wx.hideLoading();
									/* eslint-enable no-undef */

									// 
									if (Boolean(_this.authInterval)) {
										clearTimeout(_this.authInterval);
									}
									_this.authInterval = null;

									// 停止 竞赛定时器
									if (Boolean(_this.authTimeout)) {
										clearTimeout(_this.authTimeout);
									}
									_this.authTimeout = null;

									// 
									_this._authOK = true;

									// 如果认证成功，则......
									_this._logger.warn('Client API init() appId auth success');

									// TODO : 进一步的业务逻辑
									_this._appId = appId;
									_this._userId = userId;

									// 
									_this.resetEventObserver();

									// 用于测试：外部可以指定是否启用 IPLocation
									if (!disIploc) {
										_this.doIplocation(appId, userId, onSuccess, onFailure);
									} else {
										// TODO : 
										var miniauHost = auServer || config.miniauHost;
										var host = _this._customPort === 0 ? '' + miniauHost : miniauHost + ':' + _this._customPort;

										// 保存 au 地址，用于对外展示（如api获取）
										_this._auServer = host;

										_this._protooUrl = 'wss://' + host + '/miniappau/?appId=' + appId + '&sid=' + _this._sid + '&userId=' + userId;

										return _this.initProtoo(appId, userId, onSuccess, onFailure);
									}
								}).catch(function (event) {
									/* eslint-disable no-undef */
									wx.hideLoading();
									/* eslint-enable no-undef */

									// 
									if (Boolean(_this.authInterval)) {
										clearTimeout(_this.authInterval);
									}
									_this.authInterval = null;

									// 停止 竞赛定时器
									if (Boolean(_this.authTimeout)) {
										clearTimeout(_this.authTimeout);
									}
									_this.authTimeout = null;

									// 
									_this._logger.warn('Client API init() auth failed. event: ' + (0, _stringify2.default)(event));

									_this._authOK = false;

									onFailure({
										code: 500,
										reason: 'appId auth failed -- ' + (0, _stringify2.default)(event)
									});
								});

							case 22:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function init(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
				return _ref.apply(this, arguments);
			}

			return init;
		}()

		// 内部私有函数 -- 执行 appId auth

	}, {
		key: 'doAppAuth',
		value: function doAppAuth(appId, resolve, reject) {
			var _this2 = this;

			/* eslint-disable no-undef */
			wx.hideLoading();
			/* eslint-enable no-undef */

			/* eslint-disable no-undef */
			wx.showLoading({
				title: 'appId auth',
				mask: true
			});
			/* eslint-enable no-undef */

			var authUrl = config.authUrl + '?appkey=' + appId;

			this.attemptAuth++;

			this._logger.warn('Client doAppAuth() appId auth request: ' + authUrl + ' -- attemptAuth: ' + this.attemptAuth);

			var tttEngine = this;

			wx.request({
				url: authUrl,
				method: 'GET',
				success: function success(res) {
					// 
					var authOK = false;

					// 
					if (Boolean(res) && Boolean(res.data)) {
						tttEngine._logger.debug('Client doAppAuth() auth response: ' + (0, _stringify2.default)(res) + ' code: ' + res.data.code);

						authOK = res.data.code == 0;
					}

					if (!authOK) {
						tttEngine._logger.warn('Client doAppAuth() auth failed.');
						reject();

						return;
					} else {
						resolve();
					}
				},
				fail: function fail(e) {

					// 
					if (_this2.attemptAuth >= 3) {
						// 
						tttEngine._logger.warn('Client doAppAuth() auth FINAL FAILED -- wx.request : ' + (0, _stringify2.default)(e));
						reject();
					} else {
						// 
						tttEngine._logger.warn('Client doAppAuth() auth ' + _this2.attemptAuth + ' failed -- wx.request : ' + (0, _stringify2.default)(e));
					}
				}
			});
		}

		// 内部私有函数 -- 

	}, {
		key: 'doIplocation',
		value: function doIplocation(appId, userId, onSuccess, onFailure) {
			var _this3 = this;

			this._iploc = new IPLocation({
				logClues: this._logClues,
				sid: this._sid
			});
			// 

			if (Boolean(this._iploc)) {
				this._iplocFin = false;

				this._iploc.on('auto-reconnecting', function (event) {
					if (event.sid !== _this3._sid) return;

					// Just a notice. Do not have to do anything.

					_this3._logger.debug('Client iplocation auto-reconnecting.');

					// 
					_this3.notifySessionStatus({
						code: C_SS_AUTO_CONNECTING,
						reason: 'iplocation auto-reconnecting'
					});
				});

				// 彻底失败(内部不再自动重连)
				this._iploc.on('failed', function (event) {
					// 
					if (event.sid !== _this3._sid) return;

					if (_this3._iplocFin) return;

					/* eslint-disable no-undef */
					wx.hideLoading();
					/* eslint-enable no-undef */

					_this3._logger.debug('Client iplocation failed.');
					// 
					_this3._sdkState = C_SDK_STATE_IDLE;

					onFailure({
						code: 500,
						reason: 'iplocation failed'
					});
				});

				// 
				this._iploc.on('close', function (event) {
					if (event.sid !== _this3._sid) return;

					if (_this3._iplocFin) return;

					/* eslint-disable no-undef */
					wx.hideLoading();
					/* eslint-enable no-undef */
				});

				// 注：一定要确保 initProtoo 在 this._iploc 'ok' 时才执行
				this._iploc.on('ok', function (event) {
					if (event.sid !== _this3._sid) return;

					_this3._iplocFin = true;

					var auAccess = event.auAccess;

					/* eslint-disable no-undef */

					wx.hideLoading();
					/* eslint-enable no-undef */

					// 
					_this3._iploc.close();

					// 使用 IP location 分配的 miniapp-au
					var host = _this3._customPort === 0 ? '' + auAccess : auAccess + ':' + _this3._customPort;

					// 保存 au 地址，用于对外展示（如api获取）
					_this3._auServer = host;

					_this3._protooUrl = 'wss://' + host + '/miniappau/?appId=' + appId + '&sid=' + _this3._sid + '&userId=' + userId;

					return _this3.initProtoo(appId, userId, onSuccess, onFailure);
				});

				/* eslint-disable no-undef */
				wx.showLoading({
					title: 'iplocation',
					mask: true
				});
				/* eslint-enable no-undef */

				// 
				try {
					var host = this._isTest ? '' + config.ipLocationTest : '' + config.ipLocation;

					this._iploc.init({
						url: this._customPort === 0 ? 'wss://' + host + '/iplocmini/' : 'wss://' + host + ':' + this._customPort + '/iplocmini/',
						appId: this._appId,
						userId: this._userId
					});
				} catch (e) {
					// 
					this._sdkState = C_SDK_STATE_IDLE;

					onFailure({
						code: 500,
						reason: 'iplocation invalid'
					});
				}
			} else {
				// 
				this._sdkState = C_SDK_STATE_IDLE;

				onFailure({
					code: 500,
					reason: 'iplocation invalid'
				});
			}
		}

		// 内部私有函数 -- 
		// 注：一定要确保 initProtoo 在 this._iploc 'ok' 时才执行

	}, {
		key: 'initProtoo',
		value: function initProtoo(appId, userId, onSuccess, onFailure) {
			var _this4 = this;

			if (!appId || !userId || typeof onSuccess !== 'function' || typeof onFailure !== 'function') {
				this._logger.warn('Client initProtoo() error. invalid parameters');

				return;
			}

			// 
			this._logger.debug('Client initProtoo protooUrl: ' + this._protooUrl);

			// 
			this._joinState = C_JOIN_STATE_IDLE;
			this._sdkState = C_SDK_STATE_INITING;

			/* eslint-disable no-undef */
			wx.showLoading({
				title: 'login',
				mask: true
			});
			/* eslint-enable no-undef */

			this._protooPeer = new protooClient.Peer(this._protooUrl, this._logClues, this._logger);

			try {
				this._protooPeer.init();
			} catch (error) {
				this._sdkState = C_SDK_STATE_IDLE;

				onFailure({
					code: 500,
					reason: error.message
				});

				this._logger.debug('Client API init() failed.');

				// eslint-disable no-undef 
				wx.hideLoading();
				// eslint-enable no-undef 

				return;
			}

			// open -- 连接已建立
			this._protooPeer.on('open', function (event) {
				var isRetry = event.isRetry;

				// 
				// 

				var needCB = _this4._sdkState === C_SDK_STATE_INITING;

				// 
				_this4._logger.debug('Client protooClient.Peer event: [open]. isRetry: ' + isRetry + ' this._joinState: ' + _this4._joinState);

				_this4._sdkState = C_SDK_STATE_INIT;

				// 通知上层：当前连接成功
				_this4.notifySessionStatus({
					code: isRetry ? C_SS_RECONNECTED : C_SS_CONNECTED, // 连接成功
					reason: '连接成功'
				});

				// 
				/*
    wx.setStorage({
    	key  : `initProtoo-${new Date().getTime()}`,
    	data : `Client initProtoo() event[open] this._joinState: ${this._joinState}`
    });
    */

				_this4.resumeProcess();

				// 如果本次是重连成功，则若当前已 join ，则应自动 rejoin -- 
				if (isRetry) {
					if (_this4._joinState === C_JOIN_STATE_ON) {
						_this4.rejoin();
					} else {
						_this4._joinState = C_JOIN_STATE_IDLE;

						_this4.join(_this4._roomId, _this4._userId, function () {}, function () {}, true);
					}

					return; // 无需执行后续的动作
				}

				// 回调
				if (needCB) {
					onSuccess({
						logClues: _this4._logClues
					});
				}
			});

			// 通知：内部正在进行自动重连
			this._protooPeer.on('auto-reconnecting', function () {
				// 清空本地暂存用户列表
				if (Boolean(_this4._mapUsers)) {
					_this4._mapUsers.clear();
				}

				// 停止 ping/pong 定时器
				_this4.stopHBTimer();

				// 需要更新 joinState，以免在 重连期间 又执行任何其他请求
				_this4._joinState = C_JOIN_STATE_IDLE;

				// 
				_this4._logger.debug('Client protooClient.Peer event: [auto-reconnecting]');

				// 
				/*
    wx.setStorage({
    	key  : `initProtoo-${new Date().getTime()}`,
    	data : `Client initProtoo() event[auto-reconnecting] this._joinState: ${this._joinState}`
    });
    */

				_this4.notifySessionStatus({
					code: C_SS_AUTO_CONNECTING, // 正在自动重连 -- 当前网络处于未连接状态，上层调用者应根据实际情况做逻辑处理
					reason: 'protoo session [auto-reconnecting] -- 异常离线，正在自动重连'
				});
				// 

				/* eslint-disable no-undef */
				wx.showLoading({
					title: '正在自动重连',
					mask: true
				});
				/* eslint-enable no-undef */
			});

			// 到 服务器 的连接，已彻底失败(内部不再自动重连)
			this._protooPeer.on('failed', function () {
				_this4._logger.warn('Client protooClient.Peer event: [failed]');

				// 
				/*
    wx.setStorage({
    	key  : `initProtoo-${new Date().getTime()}`,
    	data : `Client initProtoo() event[failed] this._joinState: ${this._joinState}`
    });
    */

				// 
				var needCB = _this4._sdkState === C_SDK_STATE_INITING;

				_this4._sdkState = C_SDK_STATE_IDLE;
				_this4._joinState = C_JOIN_STATE_IDLE;

				/* eslint-disable no-undef */
				wx.hideLoading();
				/* eslint-enable no-undef */

				// 
				if (needCB) {
					onFailure({
						code: 503,
						reason: 'websocket connect failed'
					});
				}

				// Notify 
				// 
				// TODO : 
				_this4.notifyDisconnected();
			});

			// 到 服务器 的连接，已彻底断开(内部不再自动重连)
			this._protooPeer.on('disconnected', function () {
				_this4._logger.warn('Client protooClient.Peer event: [disconnected]');

				// 
				/*
    wx.setStorage({
    	key  : `initProtoo-${new Date().getTime()}`,
    	data : `Client initProtoo() event[disconnected] this._joinState: ${this._joinState}`
    });
    */

				// 
				var needCB = _this4._sdkState === C_SDK_STATE_INITING;

				_this4._sdkState = C_SDK_STATE_IDLE;
				_this4._joinState = C_JOIN_STATE_IDLE;

				if (needCB) {
					onFailure({
						code: 503,
						reason: 'websocket disconnected'
					});
				}

				_this4.notifyDisconnected();
			});

			this._protooPeer.on('close', function (e) {
				_this4._logger.warn('Client protooClient.Peer event: [close] code: ' + e.code + ' reason: ' + e.reason);

				// 
				/*
    wx.setStorage({
    	key  : `initProtoo-${new Date().getTime()}`,
    	data : `Client initProtoo() event[close] this._joinState: ${this._joinState}`
    });
    */

				if (_this4._sdkState === C_SDK_STATE_IDLE) {
					return;
				}

				_this4._sdkState = C_SDK_STATE_IDLE;
				_this4._joinState = C_JOIN_STATE_IDLE;
				// 

				if (e.code === 4100) {
					try {
						if (Boolean(_this4._eventObserver) && _this4._eventObserver.has('kickout')) {
							_this4._eventObserver.get('kickout')({
								uid: _this4._userId,
								reason: e.reason
							});
						}
					} catch (err) {
						_this4._logger.warn('Client protooClient.Peer event: [close] -- notify [kickout] EXCEPTION -- ' + (0, _stringify2.default)(err));
					}
				}

				// Notify 
				_this4.notifySessionStatus({
					code: C_SS_FINAL_FAILED, // 已关闭，不再尝试自动重连
					reason: 'protoo session [close]'
				});

				_this4.notifyDisconnected();
				// 
			});

			// eslint-disable-next-line no-unused-vars
			this._protooPeer.on('request', function () {
				var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(request, accept, reject) {
					var _request$data, xxx, yyy, zzz;

					return _regenerator2.default.wrap(function _callee2$(_context2) {
						while (1) {
							switch (_context2.prev = _context2.next) {
								case 0:
									_this4._logger.debug('Client protooClient.Peer event: [request] [method: ', request.method, '] data: ]', request.data);

									_context2.t0 = request.method;
									_context2.next = _context2.t0 === 'xxx' ? 4 : 7;
									break;

								case 4:
									_request$data = request.data, xxx = _request$data.xxx, yyy = _request$data.yyy, zzz = _request$data.zzz;

									// We are ready. Answer the protoo request.

									accept();
									// or
									// reject(403, 'some reason');

									// TODO

									return _context2.abrupt('break', 7);

								case 7:
								case 'end':
									return _context2.stop();
							}
						}
					}, _callee2, _this4);
				}));

				return function (_x8, _x9, _x10) {
					return _ref2.apply(this, arguments);
				};
			}());

			this._protooPeer.on('notification', function (notification) {
				_this4._logger.debug('Client protooClient.Peer event: [notification] [method: ', notification.method, ' data: ', notification.data, ']');

				// 更新 lastHBRecvTick
				_this4._lastHBRecvTick = new Date().getTime();

				switch (notification.method) {
					case 'pong':
						{
							_this4._logger.debug('Client protooClient.Peer [pong]');

							break;
						}
					case 'user-online':
						{
							// TODO -- 是否考虑 对 notification 的 ACK ??
							var userData = notification.data;

							_this4._logger.debug('Client protooClient.Peer [user-online] userData: ' + (0, _stringify2.default)(userData));

							_this4.onUserEnter(userData);

							break;
						}
					case 'user-offline':
						{
							var uid = notification.data.userId;

							_this4._logger.debug('Client protooClient.Peer [user-offline] userId: ' + uid);

							_this4.onUserLeave(uid);
							break;
						}
					case 'publish':
						{
							var cid = notification.data.connectId;
							var _uid = notification.data.userId;
							var url = notification.data.url;

							_this4._logger.debug('Client protooClient.Peer [publish] userId: ' + _uid + ' connectId: ' + cid + ' url: ' + url);

							try {
								if (Boolean(_this4._eventObserver) && _this4._eventObserver.has('stream-added')) {
									_this4._eventObserver.get('stream-added')({
										cid: cid,
										uid: _uid
									});
								}
							} catch (e) {
								_this4._logger.warn('Client protooClient.Peer event: [notification publish] -- notify [stream-added] EXCEPTION -- ' + (0, _stringify2.default)(e));
							}

							break;
						}
					case 'unpublish':
						{
							var _uid2 = notification.data.userId;
							var _cid = notification.data.connectId;

							_this4._logger.debug('Client protooClient.Peer [unpublish] userId: ' + _uid2);

							try {
								if (Boolean(_this4._eventObserver) && _this4._eventObserver.has('stream-removed')) {
									_this4._eventObserver.get('stream-removed')({
										cid: _cid,
										uid: _uid2
									});
								}
							} catch (e) {
								_this4._logger.warn('Client protooClient.Peer event: [notification unpublish] -- notify [stream-removed] EXCEPTION -- ' + (0, _stringify2.default)(e));
							}

							// 自动将该路流 unsubscribe 掉
							if (_this4.isSubscribe(_uid2)) {
								_this4.unsubscribe({
									userId: _uid2,
									onSuccess: function onSuccess() {},
									onFailure: function onFailure() {}
								});
							}

							break;
						}

					case 'kickout':
						{
							var _uid3 = notification.data.userId;
							var reason = notification.data.reason;

							_this4._logger.debug('Client protooClient.Peer [kickout] userId: ' + _uid3 + ' reason: ' + reason);

							try {
								if (Boolean(_this4._eventObserver) && _this4._eventObserver.has('kickout')) {
									_this4._eventObserver.get('kickout')({
										uid: _uid3,
										reason: reason
									});
								}
							} catch (e) {
								_this4._logger.warn('Client protooClient.Peer event: [notification kickout] -- notify [kickout] EXCEPTION -- ' + (0, _stringify2.default)(e));
							}

							break;
						}

					default:
						{
							_this4._logger.warn('Client unknown protoo notification.method [%s]', notification.method);
						}
				}
			});
		}

		// 内部私有函数
		// 恢复所有行为

	}, {
		key: 'resumeProcess',
		value: function resumeProcess() {
			this._lastHBRecvTick = new Date().getTime();

			// TODO : 恢复所有行为

			this._suspend = false;

			// 
			if (Boolean(this._protooPeer)) {
				this._protooPeer.resumeProcess();
			}
		}

		// 内部私有函数
		// 挂起所有行为

	}, {
		key: 'suspendProcess',
		value: function suspendProcess() {
			this._suspend = true;

			// 
			if (Boolean(this._protooPeer)) {
				this._protooPeer.suspendProcess();
			}
		}

		/**
   * TTT Engine 销毁
   */

	}, {
		key: 'destroy',
		value: function destroy() {
			this.resetEventObserver();
			// 
			this._logger.warn('Client API destroy() ' + this._logClues + ' this._sdkState: ' + this._sdkState);

			if (this._joinState !== C_JOIN_STATE_IDLE) {
				this.leave(function () {}, function () {});
			}

			// 停止 heartbeat 定时器
			this.stopHBTimer();

			this._sdkState = C_SDK_STATE_IDLE;

			/* eslint-disable no-undef */
			wx.hideLoading();
			/* eslint-enable no-undef */

			// Close protoo Peer
			if (Boolean(this._protooPeer)) this._protooPeer.close();
			this._protooPeer = null;

			// 
			if (Boolean(this._iploc)) this._iploc.close();
			this._iploc = null;

			this._logger.warn('Client API destroy() success.');
		}

		// 内部私有函数

	}, {
		key: 'notifySessionStatus',
		value: function notifySessionStatus(e) {
			if (!e) {
				return;
			}

			var code = e.code,
			    reason = e.reason;

			// 

			try {
				this._logger.debug('Client notifySessionStatus() -- code: ' + code + ' reason: ' + reason);

				if (Boolean(this._eventObserver) && this._eventObserver.has('session-status')) {
					this._eventObserver.get('session-status')({
						code: code, // 正在重连
						uid: this._userId,
						cid: this._connectId,
						status: reason
					});
				}
			} catch (err) {
				this._logger.warn('Client notifySessionStatus() -- notify [session-status] EXCEPTION -- ' + (0, _stringify2.default)(err));
			}
		}

		// 内部私有函数
		// 向上层通知

	}, {
		key: 'notifyDisconnected',
		value: function notifyDisconnected() {
			var _this5 = this;

			setTimeout(function () {
				try {
					_this5._logger.debug('Client notifyDisconnected() -- event[disconnected]');

					// 向上层调用者通知：disconnected
					if (Boolean(_this5._eventObserver) && _this5._eventObserver.has('disconnected')) {
						_this5._eventObserver.get('disconnected')();
					}
				} catch (e) {
					_this5._logger.warn('Client notifyDisconnected() -- notify [disconnected] EXCEPTION -- ' + (0, _stringify2.default)(e));
				}
			});
		}

		/**
   * 
   * @param {String} logLevel -- 取值范围
   *                             'LOG_NONE','LOG_ERROR','LOG_WARN','LOG_INFO','LOG_DEBUG','LOG_TRACE'
   */

	}, {
		key: 'setLogLevel',
		value: function setLogLevel(logLevel) {
			if (!this._logger) {
				return;
			}

			this._logger.logLevel = logLevel;
		}

		/**
   * 设置wss服务的自定义端口号
   * 需要在调用 init 之前调用
   * @param {Number} port
   * @param {*} callback 
   */

	}, {
		key: 'setPort',
		value: function setPort(port) {
			if (!port) {
				return;
			}

			this._customPort = parseInt(port);

			this._logger.debug('Client API setPort: ' + this._customPort);
		}

		// 
		// 注：要确保 -- on 一定要在 join 之前调用，以免 join 成功后，下层触发的 事件 不能及时投递给上层
		// on bind 事件监听回调函数
		// 
		// 可监听如下事件（以及其所携带参数）：
		// 'session-status' -- { cid: connectId; uid: userId; status: String }
		// 'media-status'   -- { cid: connectId; uid: userId; status: object }
		// 'stream-added'   -- { cid: connectId; uid: userId }
		// 'stream-removed' -- { cid: connectId; uid: userId }
		// 'disconnected'   -- { uid: userId; reason: 说明 }
		// 'kickout'        -- { uid: userId; reason: *** }
		// 'update-url'     -- { cid: connectId; uid: userId; url: 更新后的 url }
		// 'error'          -- { cid: connectId; uid: userId; code: 错误码; reason: 详细说明 }
		// 'user-online'    -- { userId: 用户ID; role: 用户角色; ueType: 终端类型(小程序为9) }
		// 'user-offline'   -- userId: 用户ID
		// 
		/**
   * 
   * @param {String} event      -- 事件名
   * @param {Function} callback -- 响应函数名 
   */

	}, {
		key: 'on',
		value: function on(event, callback) {
			// 
			if (!this._eventObserver || !event || typeof event !== 'string' || !callback || typeof callback !== 'function') {
				this._logger.debug('Client API on() failed. parameters invalid. [event: ' + event + ']');

				return -1;
			}

			// 在初始化期间，我们已在 _eventObserver 中初始化了所有支持的 event
			// 若 _eventObserver MAP 中无此节点，则表明我们不支持，直接返回
			// 
			if (!this._eventObserver.has(event)) {
				this._logger.debug('Client API on() failed. unsupported [event: ' + event + ']');

				return -2;
			}

			this._logger.debug('Client API on() success. [event: ' + event + ']');

			this._eventObserver.set(event, callback);

			return 0;
		}

		/**
   * 停止监控指定事件 -- 该事件再发生时，将不再向应用层通知
   * 
   * @param event -- 事件名
   */

	}, {
		key: 'off',
		value: function off(event) {
			if (!this._eventObserver || !event || typeof event !== 'string') {
				this._logger.debug('Client API off() failed. parameters invalid. [event: ' + event + ']');

				return;
			}

			if (!this._eventObserver.has(event)) {
				this._logger.debug('Client API off() failed. unsupported [event: ' + event + ']');

				return;
			}

			this._logger.debug('Client API off() success. [event: ' + event + ']');

			this._eventObserver.set(event, function () {});

			return;
		}

		// 内部私有函数 -- 启动心跳定时器

	}, {
		key: 'startHBTimer',
		value: function startHBTimer() {
			var _this6 = this;

			this.stopHBTimer();

			// 
			_promise2.default.resolve().then((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								// 
								_this6._lastHBRecvTick = new Date().getTime();

								// Start the timer for heartbeat
								_this6._hbTimer = setInterval(function () {
									// 
									if (_this6._suspend) {
										// 如果已 挂起 ，则 不再执行心跳；也不再执行 超时判断
										return;
									}

									if (_this6._joinState === C_JOIN_STATE_ON) {
										// 
										_this6._protooPeer.notify('ping', {
											sequenceNo: _this6._sequenceNo++
										});
									}

									// 
									var currentTick = new Date().getTime();

									// 
									if (currentTick - _this6._lastHBRecvTick >= HB_INTERVAL * 12) {
										// 
										_this6._logger.warn('Client startHBTimer() no response. currentTick: ' + currentTick + ' this._lastHBRecvTick: ' + _this6._lastHBRecvTick);

										// 
										_this6.stopHBTimer();

										// 
										_this6._sdkState = C_SDK_STATE_IDLE;
										_this6._joinState = C_JOIN_STATE_IDLE;

										/* 不再执行 reconnect
          // TODO : ;
          setTimeout(() =>
          {
          	this._protooPeer.reconnect({
          		reason : 'hb timeout -- reconnect'
          	});
          });
          */

										_this6.notifySessionStatus({
											code: C_SS_FINAL_FAILED,
											reason: '超时未收到任何消息，彻底断开'
										});

										_this6.notifyDisconnected();
									}

									// 
								}, HB_INTERVAL);

							case 2:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, _this6);
			}))).catch(function (error) {
				_this6._logger.warn('Client startHBTimer() failed');
			});
		}

		// 内部私有函数 -- 

	}, {
		key: 'stopHBTimer',
		value: function stopHBTimer() {
			// 如果定时器已经启动，则先关闭
			if (Boolean(this._hbTimer)) {
				clearInterval(this._hbTimer);
				this._hbTimer = null;
			}
		}

		/**
   * 设置用户角色，目前仅支持在 join 前设置用户角色；且在用户已登录系统期间，不可更换
   * 
   * @param {Int} role -- 用户角色
   *                           > 取值范围：
   *                           UR_CHAIRMAN = 1; // 主席
   *                           UR_PARTICIPANT = 2; // 普通用户
   *                           UR_AUDIENCE = 3; // 观众
   * @param {Function} onSuccess -- 成功时回调
   * @param {Function} onFailure -- 失败时回调
   */

	}, {
		key: 'setRole',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(role, onSuccess, onFailure) {
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								if (!(!role || typeof onSuccess !== 'function' || typeof onFailure !== 'function')) {
									_context4.next = 3;
									break;
								}

								this._logger.warn('Client setRole() error. invalid parameters');

								return _context4.abrupt('return');

							case 3:
								if (!this._suspend) {
									_context4.next = 7;
									break;
								}

								this._logger.debug('Client API setRole() system suspend!!!');

								onFailure({
									code: 400,
									reason: 'system suspend'
								});

								return _context4.abrupt('return');

							case 7:
								if (!(role !== UR_CHAIRMAN && role !== UR_PARTICIPANT && role !== UR_AUDIENCE)) {
									_context4.next = 10;
									break;
								}

								onFailure({
									code: 400,
									reason: 'Invalid role: ' + role
								});

								return _context4.abrupt('return');

							case 10:

								// 
								this._role = role;

								this._logger.debug('Client API setRole() userRole: ' + this._role);

								// 
								onSuccess();

								return _context4.abrupt('return');

							case 14:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function setRole(_x11, _x12, _x13) {
				return _ref4.apply(this, arguments);
			}

			return setRole;
		}()

		// 适用场景：本端已 join 期间，断链，重连成功

	}, {
		key: 'rejoin',
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
				var joinRes, code, reason;
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								if (!this._suspend) {
									_context5.next = 3;
									break;
								}

								this._logger.debug('Client API rejoin() system suspend!!!');

								return _context5.abrupt('return');

							case 3:
								if (!(this._joinState !== C_JOIN_STATE_ON)) {
									_context5.next = 5;
									break;
								}

								return _context5.abrupt('return');

							case 5:

								this._logger.debug('Client rejoin [this._appId:' + this._appId + ' this._roomId:' + this._roomId + ' this._userId:' + this._userId + ']');
								// 
								_context5.prev = 6;

								// 状态 : Joining
								// ???
								this._joinState = C_JOIN_STATE_JOINING;
								this._logger.warn('Client rejoin this._joinState: ' + this._joinState);

								// 
								/*
        wx.setStorage({
        	key  : `rejoin-${new Date().getTime()}`,
        	data : `Client rejoin() this._joinState: ${this._joinState}`
        });
        */

								// Join now into the room.
								// NOTE: Don't send our RTP capabilities if we don't want to consume.

								_context5.next = 11;
								return this._protooPeer.request('rejoin', {
									appId: this._appId,
									roomId: this._roomId,
									userId: this._userId,
									connectId: this._connectId,
									role: this._role,
									appData: '',
									logClues: this._logClues
								});

							case 11:
								joinRes = _context5.sent;


								// TODO : 
								// peers
								code = joinRes.code, reason = joinRes.reason;

								if (!(code == 404)) {
									_context5.next = 18;
									break;
								}

								this._joinState = C_JOIN_STATE_IDLE;

								this.join(this._roomId, this._userId, function () {}, function () {}, true);
								_context5.next = 26;
								break;

							case 18:
								if (!(code == 200)) {
									_context5.next = 25;
									break;
								}

								// 状态
								this._joinState = C_JOIN_STATE_ON;

								// 进入 C_JOIN_STATE_ON 状态，向服务器请求 更新当前room内的发布流，以便本端及时订阅
								this._protooPeer.request('update-media', {});

								this.notifySessionStatus({
									code: C_SS_REJOINED, // rejoin 成功
									reason: 'rejoin 成功'
								});

								// 
								this.startHBTimer();
								_context5.next = 26;
								break;

							case 25:
								throw new Error({
									code: code,
									reason: reason
								});

							case 26:
								_context5.next = 36;
								break;

							case 28:
								_context5.prev = 28;
								_context5.t0 = _context5['catch'](6);

								this._logger.warn('Client rejoin failed. error: ', _context5.t0);

								this._sdkState = C_SDK_STATE_IDLE;
								this._joinState = C_JOIN_STATE_IDLE;

								// 
								this.notifySessionStatus({
									code: C_SS_FINAL_FAILED, // 
									reason: 'rejoin \u5931\u8D25 -- ' + (0, _stringify2.default)(_context5.t0.reason)
								});

								// 
								this.notifyDisconnected();

								return _context5.abrupt('return');

							case 36:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this, [[6, 28]]);
			}));

			function rejoin() {
				return _ref5.apply(this, arguments);
			}

			return rejoin;
		}()

		/**
   * 
   * @param {String} roomId      -- 房间号
   * @param {String} userId      -- 用户ID
   * @param {Function} onSuccess -- 成功后回调
   *                                     > onSuccess 函数原型如下：
   *                                     onSuccess(opts){}
   *                                     其中 opts 参数详细如下：
   *                                     opts.connectId -- 该用户对应的 connectId
   *                                     opts.pushUrl   -- 该用户的 rtmp push url
   *                                     opts.peers     -- 房间内的用户列表
   * @param {Function} onFailure -- 失败后回调
   *                                     > onFailure 函数原型如下：
   *                                     onFailure(opts){}
   *                                     其中 opts 参数详细如下：
   *                                     opts.code   -- 错误码
   *                                     opts.reason -- 详细错误信息
   * 
   */

	}, {
		key: 'join',
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(roomId, userId, onSuccess, onFailure, retry) {
				var joinRes, connectId, rtmpHost, peers, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, peer;

				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								if (!(!roomId || !userId || typeof onSuccess !== 'function' || typeof onFailure !== 'function')) {
									_context6.next = 3;
									break;
								}

								this._logger.warn('Client join() error. invalid parameters');

								return _context6.abrupt('return');

							case 3:

								// 
								roomId = parseInt(roomId);
								userId = parseInt(userId);

								if (!this._suspend) {
									_context6.next = 9;
									break;
								}

								this._logger.debug('Client API join() system suspend!!!');

								onFailure({
									code: 400,
									reason: 'system suspend'
								});

								return _context6.abrupt('return');

							case 9:
								if (!(this._sdkState !== C_SDK_STATE_INIT)) {
									_context6.next = 13;
									break;
								}

								this._logger.warn('Client API join() failed. no-init.');

								onFailure({
									code: 400,
									reason: 'Client is no-init'
								});

								return _context6.abrupt('return');

							case 13:
								if (!(!/^\d+$/.test(userId) || !/^\d+$/.test(roomId))) {
									_context6.next = 17;
									break;
								}

								this._logger.debug('Client API join() failed. roomId[' + roomId + '] or userId[' + userId + '] is not number.');

								onFailure({
									code: 400,
									reason: 'roomId[' + roomId + '] or userId[' + userId + '] is not number'
								});

								return _context6.abrupt('return');

							case 17:

								//
								this._roomId = roomId;
								// logger 中需要登记 相关信息，用于日志中携带
								this._logger.setParameters({
									appId: this._appId,
									roomId: this._roomId,
									userId: this._userId,
									logClues: this._logClues
								});

								// 

								if (!(userId !== this._userId)) {
									_context6.next = 23;
									break;
								}

								this._logger.debug('Client API join() failed. parameters un-match: userId(' + userId + ') & this._userId(' + this._userId + ')');

								onFailure({
									code: 400,
									reason: '3t-miniapp join() Parameter mismatch'
								});

								return _context6.abrupt('return');

							case 23:
								//
								this._roomId = roomId;

								if (!(this._joinState !== C_JOIN_STATE_IDLE)) {
									_context6.next = 28;
									break;
								}

								this._logger.debug('Client API join() failed. error-state: this._joinState(' + this._joinState + ')');

								onFailure({
									code: 1009,
									reason: this._joinState === C_JOIN_STATE_ON ? 'User is online.' : 'Join is processing...'
								});

								return _context6.abrupt('return');

							case 28:
								_context6.prev = 28;

								// 状态 : Joining
								this._joinState = C_JOIN_STATE_JOINING;

								// 
								/*
        wx.setStorage({
        	key  : `join-${new Date().getTime()}`,
        	data : `Client join() this._joinState: ${this._joinState}`
        });
        */

								this._logger.debug('Client API join() request. this._joinState: ' + this._joinState);

								// Join now into the room.
								// NOTE: Don't send our RTP capabilities if we don't want to consume.

								_context6.next = 33;
								return this._protooPeer.request('join', {
									appId: this._appId,
									roomId: this._roomId,
									userId: this._userId,
									role: this._role,
									appData: '',
									logClues: this._logClues
								});

							case 33:
								joinRes = _context6.sent;


								/* eslint-disable no-undef */
								wx.hideLoading();
								/* eslint-enable no-undef */

								// 状态
								this._joinState = C_JOIN_STATE_ON;

								// 进入 C_JOIN_STATE_ON 状态，向服务器请求 更新当前room内的发布流，以便本端及时订阅
								this._protooPeer.request('update-media', {});

								this._logger.debug('Client API join() success. joinRes: ', joinRes);
								// 
								// 收到的 response 的 data 内容示例如下：
								// {
								//     "roomId":9876000,
								//     "userId":9876333,
								//     "role":2,
								//     "uetype":6,
								//     "connectId":"3d560c8b-a2d0-4539-96d1-c3d2c62e470d",
								//     "sessionId":"7a617c050c9641f9b66d87c7b2f35c18",
								//     "rtmpHost":{
								//         "pull":"rtmp://pull.3ttech.cn/sdk/3d560c8b-a2d0-4539-96d1-c3d2c62e470d",
								//         "push":"rtmp://push.3ttech.cn/sdk/3d560c8b-a2d0-4539-96d1-c3d2c62e470d"
								//     },
								//     "peers":[
								//         {
								//             "userId":938495,
								//             "roomId":9876000,
								//             "role":1,
								//             "connectId":"BC83A0BA-15B7-4B77-AE61-BFB8656298D2",
								//             "sessionId":"7a617c050c9641f9b66d87c7b2f35c18"
								//         }
								//     ]
								// }

								connectId = joinRes.connectId, rtmpHost = joinRes.rtmpHost, peers = joinRes.peers;

								// connectId 取自 join response.

								this._connectId = connectId;

								// 
								this.startHBTimer();
								// 

								// TODO : with peers ???
								// 
								onSuccess({
									connectId: this._connectId,
									pushUrl: rtmpHost.push,
									peers: peers
									// ...
									// peers
								});

								// 
								this.notifySessionStatus({
									code: !retry ? C_SS_JOINED : C_SS_REJOINED, // 连接成功
									reason: 'join 成功'
								});

								// 
								if (Boolean(this._mapUsers)) {
									this._mapUsers.clear();
								}
								// 
								_iteratorNormalCompletion = true;
								_didIteratorError = false;
								_iteratorError = undefined;
								_context6.prev = 47;
								for (_iterator = (0, _getIterator3.default)(peers); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
									peer = _step.value;

									this.onUserEnter(peer);
								}
								_context6.next = 55;
								break;

							case 51:
								_context6.prev = 51;
								_context6.t0 = _context6['catch'](47);
								_didIteratorError = true;
								_iteratorError = _context6.t0;

							case 55:
								_context6.prev = 55;
								_context6.prev = 56;

								if (!_iteratorNormalCompletion && _iterator.return) {
									_iterator.return();
								}

							case 58:
								_context6.prev = 58;

								if (!_didIteratorError) {
									_context6.next = 61;
									break;
								}

								throw _iteratorError;

							case 61:
								return _context6.finish(58);

							case 62:
								return _context6.finish(55);

							case 63:
								_context6.next = 74;
								break;

							case 65:
								_context6.prev = 65;
								_context6.t1 = _context6['catch'](28);

								this._logger.warn('Client API join() failed. error: ', _context6.t1);

								this._sdkState = C_SDK_STATE_IDLE;
								this._joinState = C_JOIN_STATE_IDLE;

								onFailure({
									code: 500,
									reason: _context6.t1.message
								});

								// 
								this.notifySessionStatus({
									code: C_SS_FINAL_FAILED,
									reason: 'join \u5931\u8D25 -- ' + _context6.t1.message
								});

								// 
								this.notifyDisconnected();

								return _context6.abrupt('return');

							case 74:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this, [[28, 65], [47, 51, 55, 63], [56,, 58, 62]]);
			}));

			function join(_x14, _x15, _x16, _x17, _x18) {
				return _ref6.apply(this, arguments);
			}

			return join;
		}()

		/**
   * 用户从系统中注销/退出
   * 
   * @param {Function} onSuccess -- 成功时调用
   * @param {Function} onFailure -- 失败时调用
   */

	}, {
		key: 'leave',
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(onSuccess, onFailure) {
				return _regenerator2.default.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								if (!(typeof onSuccess !== 'function' || typeof onFailure !== 'function')) {
									_context7.next = 3;
									break;
								}

								this._logger.warn('Client leave() error. invalid parameters');

								return _context7.abrupt('return');

							case 3:
								if (!this._suspend) {
									_context7.next = 7;
									break;
								}

								this._logger.debug('Client API leave() system suspend!!!');

								onFailure({
									code: 400,
									reason: 'system suspend'
								});

								return _context7.abrupt('return');

							case 7:
								// 

								this._logger.debug('Client API leave()');

								// 首先判断状态

								if (!(this._joinState !== C_JOIN_STATE_ON)) {
									_context7.next = 11;
									break;
								}

								// 
								onFailure({
									code: 1009,
									reason: 'User is not online'
								});

								return _context7.abrupt('return');

							case 11:
								_context7.prev = 11;
								_context7.next = 14;
								return this._protooPeer.request('leave', {
									roomId: this._roomId,
									userId: this._userId,
									connectId: this._connectId,
									logClues: this._logClues
								});

							case 14:
								_context7.next = 19;
								break;

							case 16:
								_context7.prev = 16;
								_context7.t0 = _context7['catch'](11);

								this._logger.warn('Client API leave() failed - error: ' + (0, _stringify2.default)(_context7.t0));

							case 19:
								//
								this._joinState = C_JOIN_STATE_IDLE;

								this._logger.warn('Client API leave() success.');

								onSuccess();

							case 22:
							case 'end':
								return _context7.stop();
						}
					}
				}, _callee7, this, [[11, 16]]);
			}));

			function leave(_x19, _x20) {
				return _ref7.apply(this, arguments);
			}

			return leave;
		}()

		/**
   * 用户发布自身流
   * 
   * @param {Function} onSuccess -- 成功时调用
   *                                     > onSuccess 函数原型如下：
   *                                     onSuccess(opts){}
   *                                     其中 opts 参数详细如下：
   *                                     opts.connectId -- 该用户对应的 connectId
   *                                     opts.url       -- 该用户的 rtmp push url
   * @param {Function} onFailure -- 失败时调用
   *                                     > onFailure 函数原型如下：
   *                                     onFailure(opts){}
   *                                     其中 opts 参数详细如下：
   *                                     opts.code   -- 错误码
   *                                     opts.reason -- 详细错误信息
   * @param {Boolen} isUpdate    -- 是否为刷新型publish
   *                                  -- 场景：当前 客户端 publish 状态下断网重连成功，此时可以 isUpdate = true
   */

	}, {
		key: 'publish',
		value: function () {
			var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(onSuccess, onFailure, isUpdate) {
				var publishResp, cid, url;
				return _regenerator2.default.wrap(function _callee8$(_context8) {
					while (1) {
						switch (_context8.prev = _context8.next) {
							case 0:
								if (!(typeof onSuccess !== 'function' || typeof onFailure !== 'function')) {
									_context8.next = 3;
									break;
								}

								this._logger.warn('Client publish() error. invalid parameters');

								return _context8.abrupt('return');

							case 3:
								if (!this._suspend) {
									_context8.next = 7;
									break;
								}

								this._logger.debug('Client API publish() system suspend!!!');

								onFailure({
									code: 400,
									reason: 'system suspend'
								});

								return _context8.abrupt('return');

							case 7:
								if (!(this._joinState !== C_JOIN_STATE_ON)) {
									_context8.next = 11;
									break;
								}

								this._logger.warn('Client API publish() failed. this._joinState(' + this._joinState + ') !== C_JOIN_STATE_ON');
								// 
								onFailure({
									code: 1009,
									reason: 'User is not online'
								});

								return _context8.abrupt('return');

							case 11:

								// TODO : 未来再考虑进行状态判断
								/*
        if (this._publishState !== C_PUBLISH_STATE_IDLE && !isUpdate)
        {
        	onFailure({
        		code   : 400,
        		reason : `当前 publish 状态为 ${this._publishState}`
        	});
        		return;
        }
        */

								// 
								this._publishState = C_PUBLISH_STATE_ING;

								_context8.prev = 12;
								_context8.next = 15;
								return this._protooPeer.request('publish', {
									roomId: this._roomId,
									userId: this._userId,
									isUpdate: !isUpdate ? false : true,
									logClues: this._logClues
								});

							case 15:
								publishResp = _context8.sent;


								// 收到的 response 的 data 的内容示例如下：
								// {
								//     "url":"rtmp://push.3ttech.cn/sdk/9876333"
								// }

								// TODO : check the 'code' field. -- 200 is success
								// 
								// const code = publishResp.code

								cid = this._connectId; // TEMP publishResp.connectId;

								url = publishResp.url;

								// TODO : 未来考虑 isURL 对 url 进行合法判断

								if (!(cid !== this._connectId /* || !isURL(url)*/)) {
									_context8.next = 25;
									break;
								}

								this._logger.debug('Client API publish() failed. Response data invalid: ' + cid + ' ' + this._connectId + ' ' + url);

								onFailure({
									code: 400,
									reason: 'Response data invalid: ' + cid + ' ' + this._connectId + ' ' + url
								});

								this._publishState = C_PUBLISH_STATE_IDLE;

								return _context8.abrupt('return');

							case 25:
								this._publishState = C_PUBLISH_STATE_ON;

								this._logger.debug('Client API publish() success. publishResp: ', publishResp);

								onSuccess({
									connectId: cid,
									url: url
								});

							case 28:
								_context8.next = 36;
								break;

							case 30:
								_context8.prev = 30;
								_context8.t0 = _context8['catch'](12);

								this._logger.warn('Client API publish() failed. error: ', _context8.t0);

								onFailure({
									code: 500,
									reason: _context8.t0.message
								});

								this._publishState = C_PUBLISH_STATE_IDLE;

								return _context8.abrupt('return');

							case 36:
							case 'end':
								return _context8.stop();
						}
					}
				}, _callee8, this, [[12, 30]]);
			}));

			function publish(_x21, _x22, _x23) {
				return _ref8.apply(this, arguments);
			}

			return publish;
		}()
	}, {
		key: 'unpublish',
		value: function () {
			var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(onSuccess, onFailure) {
				return _regenerator2.default.wrap(function _callee9$(_context9) {
					while (1) {
						switch (_context9.prev = _context9.next) {
							case 0:
								if (!(typeof onSuccess !== 'function' || typeof onFailure !== 'function')) {
									_context9.next = 3;
									break;
								}

								this._logger.warn('Client unpublish() error. invalid parameters');

								return _context9.abrupt('return');

							case 3:
								if (!(this._publishState !== C_PUBLISH_STATE_ON)) {
									_context9.next = 6;
									break;
								}

								//
								onFailure({
									code: 400,
									reason: '\u5F53\u524D publish \u72B6\u6001\u4E3A ' + this._publishState
								});

								return _context9.abrupt('return');

							case 6:

								// 
								this._publishState = C_PUBLISH_STATE_IDLE;

								onSuccess();

								// to server
								// 

								if (!(this._joinState !== C_JOIN_STATE_ON)) {
									_context9.next = 11;
									break;
								}

								this._logger.warn('Client API unpublish() failed. this._joinState(' + this._joinState + ') !== C_JOIN_STATE_ON');

								return _context9.abrupt('return');

							case 11:
								_context9.prev = 11;
								_context9.next = 14;
								return this._protooPeer.request('unpublish', {
									roomId: this._roomId,
									userId: this._userId,
									logClues: this._logClues
								});

							case 14:

								this._logger.debug('Client API unpublish() success.');
								_context9.next = 21;
								break;

							case 17:
								_context9.prev = 17;
								_context9.t0 = _context9['catch'](11);

								this._logger.warn('Client API unpublish() failed. error: ', _context9.t0);

								return _context9.abrupt('return');

							case 21:
							case 'end':
								return _context9.stop();
						}
					}
				}, _callee9, this, [[11, 17]]);
			}));

			function unpublish(_x24, _x25) {
				return _ref9.apply(this, arguments);
			}

			return unpublish;
		}()

		/**
   * 用户订阅指定用户流
   * 
   * @param {String} userId      -- 媒体流源用户ID
   * @param {Function} onSuccess -- 成功时调用
   *                                     > onSuccess 函数原型如下：
   *                                     onSuccess(opts){}
   *                                     其中 opts 参数详细如下：
   *                                     opts.userId    -- 该用户的 userId
   *                                     opts.connectId -- 该用户对应的 connectId
   *                                     opts.url       -- 该用户的 rtmp push url
   *                                     opts.rotation  -- 视频旋转角度
   * @param {Function} onFailure -- 失败时调用
   *                                     > onFailure 函数原型如下：
   *                                     onFailure(opts){}
   *                                     其中 opts 参数详细如下：
   *                                     opts.code   -- 错误码
   *                                     opts.reason -- 详细错误信息
   * @param {Boolen} isUpdate    -- 是否为刷新型 subscribe
   *                                  -- 场景：当前 客户端 subscribe 状态下断网重连成功，此时可以 isUpdate = true	 */

	}, {
		key: 'subscribe',
		value: function () {
			var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(userId, onSuccess, onFailure, isUpdate) {
				var subscribeResp, uid, cid, url;
				return _regenerator2.default.wrap(function _callee10$(_context10) {
					while (1) {
						switch (_context10.prev = _context10.next) {
							case 0:
								if (!(!userId || typeof onSuccess !== 'function' || typeof onFailure !== 'function')) {
									_context10.next = 3;
									break;
								}

								this._logger.warn('Client subscribe() error. invalid parameters');

								return _context10.abrupt('return');

							case 3:
								if (!this._suspend) {
									_context10.next = 7;
									break;
								}

								this._logger.debug('Client API subscribe() system suspend!!!');

								onFailure({
									code: 400,
									reason: 'system suspend'
								});

								return _context10.abrupt('return');

							case 7:
								if (!(this._joinState !== C_JOIN_STATE_ON)) {
									_context10.next = 11;
									break;
								}

								this._logger.warn('Client API subscribe() failed. this._joinState(' + this._joinState + ') !== C_JOIN_STATE_ON');

								onFailure({
									code: 1009,
									reason: 'User is not online'
								});

								return _context10.abrupt('return');

							case 11:
								_context10.prev = 11;
								_context10.next = 14;
								return this._protooPeer.request('subscribe', {
									roomId: this._roomId,
									userId: userId,
									isUpdate: !isUpdate ? false : true,
									logClues: this._logClues
								});

							case 14:
								subscribeResp = _context10.sent;
								uid = subscribeResp.userId;
								cid = subscribeResp.connectId;
								url = subscribeResp.url;

								// 
								// local store

								this.onSubscribe(uid, url);

								this._logger.debug('Client API subscribe() success. subscribeResp: ' + subscribeResp + ' uid: ' + uid + ' cid: ' + cid + ' url: ' + url);

								/*
        // TODO : 未来考虑 isURL 对 url 进行合法判断
        if (!isURL(url))
        {
        	onFailure({
        		code   : 400,
        		reason : `Response data invalid: ${url}`
        	});
        		return;
        }
        else 
        */
								onSuccess({
									userId: uid,
									connectId: cid,
									url: url,
									rotation: 0
								});
								_context10.next = 28;
								break;

							case 23:
								_context10.prev = 23;
								_context10.t0 = _context10['catch'](11);

								this._logger.warn('Client API subscribe() failed. error: ', _context10.t0);

								onFailure({
									code: 500,
									reason: _context10.t0.message
								});

								return _context10.abrupt('return');

							case 28:
							case 'end':
								return _context10.stop();
						}
					}
				}, _callee10, this, [[11, 23]]);
			}));

			function subscribe(_x26, _x27, _x28, _x29) {
				return _ref10.apply(this, arguments);
			}

			return subscribe;
		}()

		/**
   * 用户订阅指定用户流
   * 
   * @param {String} userId      -- 媒体流源用户ID
   * @param {Function} onSuccess -- 成功时调用
   *                                     > onSuccess 函数原型如下：
   *                                     onSuccess(){} -- 无参数
   * @param {Function} onFailure -- 失败时调用
   *                                     > onFailure 函数原型如下：
   *                                     onFailure(){} -- 无参数
   */

	}, {
		key: 'unsubscribe',
		value: function () {
			var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(userId, onSuccess, onFailure) {
				return _regenerator2.default.wrap(function _callee11$(_context11) {
					while (1) {
						switch (_context11.prev = _context11.next) {
							case 0:
								if (!(!userId || typeof onSuccess !== 'function' || typeof onFailure !== 'function')) {
									_context11.next = 3;
									break;
								}

								this._logger.warn('Client unsubscribe() error. invalid parameters');

								return _context11.abrupt('return');

							case 3:
								if (!this._suspend) {
									_context11.next = 7;
									break;
								}

								this._logger.debug('Client API unsubscribe() system suspend!!!');

								onFailure({
									code: 400,
									reason: 'system suspend'
								});

								return _context11.abrupt('return');

							case 7:
								// 

								// update local store
								this.onUnsubscribe(userId);

								onSuccess();

								// to server
								// 

								if (!(this._joinState !== C_JOIN_STATE_ON)) {
									_context11.next = 12;
									break;
								}

								this._logger.warn('Client API unsubscribe() failed. this._joinState(' + this._joinState + ') !== C_JOIN_STATE_ON');

								return _context11.abrupt('return');

							case 12:
								_context11.prev = 12;
								_context11.next = 15;
								return this._protooPeer.request('unsubscribe', {
									roomId: this._roomId,
									userId: userId,
									logClues: this._logClues
								});

							case 15:

								this._logger.debug('Client API unsubscribe() success.');
								_context11.next = 22;
								break;

							case 18:
								_context11.prev = 18;
								_context11.t0 = _context11['catch'](12);

								this._logger.warn('Client API unsubscribe() failed. error: ', _context11.t0);

								return _context11.abrupt('return');

							case 22:
							case 'end':
								return _context11.stop();
						}
					}
				}, _callee11, this, [[12, 18]]);
			}));

			function unsubscribe(_x30, _x31, _x32) {
				return _ref11.apply(this, arguments);
			}

			return unsubscribe;
		}()

		// TODO : mute 为本地不再播放指定的远端流 --- 可以采用设置 live-player 标签的方式来处理
		/**
   * 停止接收指定用户的流
   * @param {String} userId   -- 停止接收该用户的流
   */

	}, {
		key: 'mute',
		value: function () {
			var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(userId, onSuccess, onFailure) {
				return _regenerator2.default.wrap(function _callee12$(_context12) {
					while (1) {
						switch (_context12.prev = _context12.next) {
							case 0:
								if (!(!userId || typeof onSuccess !== 'function' || typeof onFailure !== 'function')) {
									_context12.next = 3;
									break;
								}

								this._logger.warn('Client mute() error. invalid parameters');

								return _context12.abrupt('return');

							case 3:
								if (!this._suspend) {
									_context12.next = 7;
									break;
								}

								this._logger.debug('Client API mute() system suspend!!!');

								onFailure({
									code: 400,
									reason: 'system suspend'
								});

								return _context12.abrupt('return');

							case 7:
								if (this.isSubscribe(parseInt(userId))) {
									_context12.next = 10;
									break;
								}

								this._logger.warn('Client API mute() I havent subscribe ' + userId);

								return _context12.abrupt('return');

							case 10:
								// 

								// update local store
								// this.onUnsubscribe(userId);

								onSuccess();

								// to server
								// 

								if (!(this._joinState !== C_JOIN_STATE_ON)) {
									_context12.next = 14;
									break;
								}

								this._logger.warn('Client API mute() failed. this._joinState(' + this._joinState + ') !== C_JOIN_STATE_ON');

								return _context12.abrupt('return');

							case 14:
								_context12.prev = 14;
								_context12.next = 17;
								return this._protooPeer.request('unsubscribe', {
									roomId: this._roomId,
									userId: userId,
									logClues: this._logClues
								});

							case 17:

								this._logger.debug('Client API mute() success.');
								_context12.next = 24;
								break;

							case 20:
								_context12.prev = 20;
								_context12.t0 = _context12['catch'](14);

								this._logger.warn('Client API mute() failed. error: ', _context12.t0);

								return _context12.abrupt('return');

							case 24:
							case 'end':
								return _context12.stop();
						}
					}
				}, _callee12, this, [[14, 20]]);
			}));

			function mute(_x33, _x34, _x35) {
				return _ref12.apply(this, arguments);
			}

			return mute;
		}()
	}, {
		key: 'unmute',
		value: function () {
			var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(userId, onSuccess, onFailure) {
				var subscribeResp;
				return _regenerator2.default.wrap(function _callee13$(_context13) {
					while (1) {
						switch (_context13.prev = _context13.next) {
							case 0:
								if (!(!userId || typeof onSuccess !== 'function' || typeof onFailure !== 'function')) {
									_context13.next = 3;
									break;
								}

								this._logger.warn('Client unmute() error. invalid parameters');

								return _context13.abrupt('return');

							case 3:
								if (!this._suspend) {
									_context13.next = 7;
									break;
								}

								this._logger.debug('Client API unmute() system suspend!!!');

								onFailure({
									code: 400,
									reason: 'system suspend'
								});

								return _context13.abrupt('return');

							case 7:
								if (this.isSubscribe(parseInt(userId))) {
									_context13.next = 10;
									break;
								}

								this._logger.warn('Client API unmute() I havent subscribe ' + userId);

								return _context13.abrupt('return');

							case 10:
								if (!(this._joinState !== C_JOIN_STATE_ON)) {
									_context13.next = 14;
									break;
								}

								this._logger.warn('Client API unmute() failed. this._joinState(' + this._joinState + ') !== C_JOIN_STATE_ON');

								onFailure({
									code: 1009,
									reason: 'User is not online'
								});

								return _context13.abrupt('return');

							case 14:
								_context13.prev = 14;
								_context13.next = 17;
								return this._protooPeer.request('subscribe', {
									roomId: this._roomId,
									userId: userId,
									isUpdate: true,
									logClues: this._logClues
								});

							case 17:
								subscribeResp = _context13.sent;


								this._logger.debug('Client API unmute() success.');

								onSuccess();
								_context13.next = 27;
								break;

							case 22:
								_context13.prev = 22;
								_context13.t0 = _context13['catch'](14);

								this._logger.warn('Client API unmute() failed. error: ', _context13.t0);

								onFailure({
									code: 500,
									reason: _context13.t0.message
								});

								return _context13.abrupt('return');

							case 27:
							case 'end':
								return _context13.stop();
						}
					}
				}, _callee13, this, [[14, 22]]);
			}));

			function unmute(_x36, _x37, _x38) {
				return _ref13.apply(this, arguments);
			}

			return unmute;
		}()

		/**
      * set sei
      * @param {String} userId      -- 被操作的 userId
      * @param {Int} opType         -- 1 : add; 0 : remove
      * @param {Any} sei            -- video layout，有上层定义，需要符合我们的 SEI 格式
   * @param {Function} onSuccess -- 成功时调用
   *                                     > onSuccess 函数原型如下：
   *                                     onSuccess(){} -- 无参数
   * @param {Function} onFailure -- 失败时调用
   *                                     > onFailure 函数原型如下：
   *                                     onFailure(){} -- 无参数
      */

	}, {
		key: 'setSEI',
		value: function () {
			var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16(userId, opType, sei, onSuccess, onFailure) {
				var _this7 = this;

				var mixerUser;
				return _regenerator2.default.wrap(function _callee16$(_context16) {
					while (1) {
						switch (_context16.prev = _context16.next) {
							case 0:
								if (!(!userId || !sei || typeof onSuccess !== 'function' || typeof onFailure !== 'function')) {
									_context16.next = 3;
									break;
								}

								this._logger.warn('Client setSEI() error. invalid parameters');

								return _context16.abrupt('return');

							case 3:
								if (!this._suspend) {
									_context16.next = 7;
									break;
								}

								this._logger.debug('Client API setSEI() system suspend!!!');

								onFailure({
									code: 400,
									reason: 'system suspend'
								});

								return _context16.abrupt('return');

							case 7:
								if (!(this._joinState !== C_JOIN_STATE_ON)) {
									_context16.next = 11;
									break;
								}

								this._logger.warn('Client API setSEI() failed. this._joinState(' + this._joinState + ') !== C_JOIN_STATE_ON');

								onFailure({
									code: 1009,
									reason: 'User is not online'
								});

								return _context16.abrupt('return');

							case 11:
								if (!(this._role !== UR_CHAIRMAN)) {
									_context16.next = 15;
									break;
								}

								this._logger.warn('Client API setSEI() failed. You are not master in the room');

								onFailure({
									code: 403,
									reason: 'Not Master. Forbidden.'
								});

								return _context16.abrupt('return');

							case 15:
								mixerUser = {
									roomId: this._roomId,
									userId: '' + userId,
									devId: '' + userId // 目前对于小程序而言，以 userId 作为 devId
								};


								_promise2.default.resolve().then((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14() {
									return _regenerator2.default.wrap(function _callee14$(_context14) {
										while (1) {
											switch (_context14.prev = _context14.next) {
												case 0:
												case 'end':
													return _context14.stop();
											}
										}
									}, _callee14, _this7);
								}))
								/* TEMP
        let opCode = '';
        	if (opType === 1)
        {
        	// add 
        	this._logger.debug('add-mixer-user', mixerUser);
        	opCode = 'add-mixer-user';
        }
        else if (opType === 0)
        {
        	// remove
        	this._logger.debug('del-mixer-user', mixerUser);
        	opCode = 'del-mixer-user';
        }
        	// 
        try
        {
        	await this._protooPeer.request(opCode, mixerUser);
        }
        catch (error)
        {
        	this._logger.warn('Client API setSEI() request [', opCode, '] failed. error: ', error);
        		Promise.reject(error);
        }
        */
								).then((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15() {
									return _regenerator2.default.wrap(function _callee15$(_context15) {
										while (1) {
											switch (_context15.prev = _context15.next) {
												case 0:
													_this7._logger.debug('set-sei', sei);

													_context15.prev = 1;
													_context15.next = 4;
													return _this7._protooPeer.request('set-sei', {
														roomId: _this7._roomId,
														userId: '' + userId,
														sei: sei,
														logClues: _this7._logClues
													});

												case 4:
													// 

													onSuccess();
													_context15.next = 11;
													break;

												case 7:
													_context15.prev = 7;
													_context15.t0 = _context15['catch'](1);

													_this7._logger.warn('Client API setSEI() request [set-sei] failed. error: ', _context15.t0);

													_promise2.default.reject(_context15.t0);

												case 11:
												case 'end':
													return _context15.stop();
											}
										}
									}, _callee15, _this7, [[1, 7]]);
								}))).catch(function (error) {
									_this7._logger.warn('Client API setSEI() failed. error: ' + (0, _stringify2.default)(error));

									onFailure({
										code: 1009,
										reason: 'setSEI failed'
									});
								});

							case 17:
							case 'end':
								return _context16.stop();
						}
					}
				}, _callee16, this);
			}));

			function setSEI(_x39, _x40, _x41, _x42, _x43) {
				return _ref14.apply(this, arguments);
			}

			return setSEI;
		}()

		/**
      * kickout peer.
      * @param {string} peerName 
      */

	}, {
		key: 'kickout',
		value: function () {
			var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17(userId, onSuccess, onFailure) {
				return _regenerator2.default.wrap(function _callee17$(_context17) {
					while (1) {
						switch (_context17.prev = _context17.next) {
							case 0:
								if (!(!userId || typeof onSuccess !== 'function' || typeof onFailure !== 'function')) {
									_context17.next = 3;
									break;
								}

								this._logger.warn('Client kickout() error. invalid parameters');

								return _context17.abrupt('return');

							case 3:
								if (!this._suspend) {
									_context17.next = 7;
									break;
								}

								this._logger.debug('Client API kickout() system suspend!!!');

								onFailure({
									code: 400,
									reason: 'system suspend'
								});

								return _context17.abrupt('return');

							case 7:
								if (!(this._role !== UR_CHAIRMAN)) {
									_context17.next = 11;
									break;
								}

								this._logger.warn('Client API kickout() failed. Not Master, forbidden.');

								onFailure({
									code: 403,
									reason: 'Not Master. Forbidden.'
								});

								return _context17.abrupt('return');

							case 11:
								if (!(this._joinState !== C_JOIN_STATE_ON)) {
									_context17.next = 15;
									break;
								}

								this._logger.warn('Client API kickout() failed. this._joinState(' + this._joinState + ') !== C_JOIN_STATE_ON');

								onFailure({
									code: 1009,
									reason: 'User is not online'
								});

								return _context17.abrupt('return');

							case 15:
								_context17.prev = 15;
								_context17.next = 18;
								return this._protooPeer.request('kickout', {
									roomId: this._roomId,
									userId: userId,
									reason: 'Master kickout',
									logClues: this._logClues
								});

							case 18:

								onSuccess();

								this._logger.warn('Client API kickout() success.');
								_context17.next = 27;
								break;

							case 22:
								_context17.prev = 22;
								_context17.t0 = _context17['catch'](15);

								this._logger.warn('Client API kickout() failed. error: ', _context17.t0);

								onFailure({
									code: 500,
									reason: _context17.t0.message
								});

								return _context17.abrupt('return');

							case 27:
							case 'end':
								return _context17.stop();
						}
					}
				}, _callee17, this, [[15, 22]]);
			}));

			function kickout(_x44, _x45, _x46) {
				return _ref17.apply(this, arguments);
			}

			return kickout;
		}()

		// 内部私有函数 -- 是否已订阅指定用户(userId)
		/**
   * @param {Number} userId
   */

	}, {
		key: 'isSubscribe',
		value: function isSubscribe(userId) {
			if (Boolean(this._subscribes)) {
				return this._subscribes.has(userId);
			}

			return false;
		}

		// 内部私有函数 -- 用户(userId)已订阅，url

	}, {
		key: 'onSubscribe',
		value: function onSubscribe(userId, url) {
			if (Boolean(this._subscribes)) {
				this._subscribes.set(userId, url);
			}
		}

		// 内部私有函数 -- 用户(userId)已取消订阅

	}, {
		key: 'onUnsubscribe',
		value: function onUnsubscribe(userId) {
			if (Boolean(this._subscribes)) {
				this._subscribes.delete(userId);
			}
		}

		// 内部私有函数 -- 用户已进入房间

	}, {
		key: 'onUserEnter',
		value: function onUserEnter(userdata) {
			if (Boolean(this._mapUsers)) {
				this._mapUsers.set(userdata.userId, userdata);
			}

			//
			try {
				// 向上层调用者通知：disconnected
				if (Boolean(this._eventObserver) && this._eventObserver.has('user-online')) {
					this._eventObserver.get('user-online')(userdata);
				}
			} catch (e) {
				this._logger.warn('Client onUserEnter -- notify [user-online] EXCEPTION -- ' + (0, _stringify2.default)(e));
			}
		}

		// 内部私有函数 -- 用户(uerId)已离开房间

	}, {
		key: 'onUserLeave',
		value: function onUserLeave(userId) {
			if (Boolean(this._mapUsers)) {
				this._mapUsers.delete(userId);
			}

			//
			try {
				// 向上层调用者通知：disconnected
				if (Boolean(this._eventObserver) && this._eventObserver.has('user-offline')) {
					this._eventObserver.get('user-offline')(userId);
				}
			} catch (e) {
				this._logger.warn('Client onUserLeave -- notify [user-offline] EXCEPTION -- ' + (0, _stringify2.default)(e));
			}
		}
	}, {
		key: 'sid',
		get: function get() {
			return this._sid;
		}
	}, {
		key: 'auServer',
		get: function get() {
			return this._auServer;
		}
	}]);
	return Client;
}();

exports.Client = Client;
exports.TTTLog = TTTLog;

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	logserverUrl: 'https://log4websdk.3ttech.cn/webSdk/putInfo',
	logserverUrl2: 'https://api3tclass.3ttech.cn/edu/exception',
	// The authorization server address. server support JSONP callback.
	authUrl: 'https://apiusercenter.3ttech.cn/authority.php',
	miniauHost: 'stech.3ttech.cn',
	ipLocationTest: 'stech.3ttech.cn', // 'wss://websdkv2a.3ttech.cn' // 
	ipLocation: 'webdispatch.3ttech.cn' // 'shenzhen1.3ttech.cn'
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TTTLog = exports.Client = exports.getVersion = undefined;

var _package = __webpack_require__(/*! ../package.json */ "./package.json");

var _tMiniapp = __webpack_require__(/*! ./3t-miniapp.js */ "./src/3t-miniapp.js");

function getVersion() {
	return _package.version;
}

exports.getVersion = getVersion;
exports.Client = _tMiniapp.Client;
exports.TTTLog = _tMiniapp.TTTLog;

/***/ }),

/***/ "./src/protoo-client/Message.js":
/*!**************************************!*\
  !*** ./src/protoo-client/Message.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logger = __webpack_require__(/*! ../utils/Logger.js */ "./src/utils/Logger.js");

var logger = new Logger('Message');

var Message = function () {
	function Message() {
		(0, _classCallCheck3.default)(this, Message);
	}

	(0, _createClass3.default)(Message, null, [{
		key: 'parse',
		value: function parse(raw) {
			var object = void 0;
			var message = {};

			try {
				object = JSON.parse(raw);
			} catch (error) {
				logger.error('parse() raw: ', raw, ' | invalid JSON: ', error);

				return;
			}

			if ((typeof object === 'undefined' ? 'undefined' : (0, _typeof3.default)(object)) !== 'object' || Array.isArray(object)) {
				logger.error('parse() raw: ', raw, ' | not an object');

				return;
			}

			// Request.
			if (object.request) {
				message.request = true;

				if (typeof object.method !== 'string') {
					logger.error('parse() | missing/invalid method field');

					return;
				}

				if (typeof object.id !== 'number') {
					logger.error('parse() | missing/invalid id field');

					return;
				}

				message.id = object.id;
				message.method = object.method;
				message.data = object.data || {};
			}
			// Response.
			else if (object.response) {
					message.response = true;

					if (typeof object.id !== 'number') {
						logger.error('parse() | missing/invalid id field');

						return;
					}

					message.id = object.id;

					// Success.
					if (object.ok) {
						message.ok = true;
						message.data = object.data || {};
					}
					// Error.
					else {
							message.ok = false;
							message.errorCode = object.errorCode;
							message.errorReason = object.errorReason;
						}
				}
				// Notification.
				else if (object.notification) {
						message.notification = true;

						if (typeof object.method !== 'string') {
							logger.error('parse() | missing/invalid method field');

							return;
						}

						message.method = object.method;
						message.data = object.data || {};
					}
					// Invalid.
					else {
							logger.error('parse() | missing request/response field');

							return;
						}

			return message;
		}
	}, {
		key: 'randomNum',
		value: function randomNum() {
			return Math.round(Math.random() * 10000000);
		}
	}, {
		key: 'createRequest',
		value: function createRequest(method, data) {
			var request = {
				request: true,
				id: Message.randomNum(), // generateRandomNumber(),
				method: method,
				data: data || {}
			};

			return request;
		}
	}, {
		key: 'createSuccessResponse',
		value: function createSuccessResponse(request, data) {
			var response = {
				response: true,
				id: request.id,
				ok: true,
				data: data || {}
			};

			return response;
		}
	}, {
		key: 'createErrorResponse',
		value: function createErrorResponse(request, errorCode, errorReason) {
			var response = {
				response: true,
				id: request.id,
				ok: false,
				errorCode: errorCode,
				errorReason: errorReason
			};

			return response;
		}
	}, {
		key: 'createNotification',
		value: function createNotification(method, data) {
			var notification = {
				notification: true,
				method: method,
				data: data || {}
			};

			return notification;
		}
	}]);
	return Message;
}();

module.exports = Message;

/***/ }),

/***/ "./src/protoo-client/Peer.js":
/*!***********************************!*\
  !*** ./src/protoo-client/Peer.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _map = __webpack_require__(/*! babel-runtime/core-js/map */ "./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _runtime = __webpack_require__(/*! ../thirdparty/runtime.js */ "./src/thirdparty/runtime.js");

var _runtime2 = _interopRequireDefault(_runtime);

var _querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logger = __webpack_require__(/*! ../utils/Logger.js */ "./src/utils/Logger.js");
var EnhancedEventEmitter = __webpack_require__(/*! ../utils/EnhancedEventEmitter.js */ "./src/utils/EnhancedEventEmitter.js");
var Message = __webpack_require__(/*! ./Message.js */ "./src/protoo-client/Message.js");
var WebSocketTransport = __webpack_require__(/*! ./transports/WebSocketTransport.js */ "./src/protoo-client/transports/WebSocketTransport.js");

var Peer = function (_EnhancedEventEmitter) {
	(0, _inherits3.default)(Peer, _EnhancedEventEmitter);

	/**
  * @param {String} protooUrl -- url
  * @param {String} logClues -- 日志追踪用
  *
  * @emits open
  * @emits {currentAttempt: Number} failed
  * @emits disconnected
  * @emits close
  * @emits {request: protoo.Request, accept: Function, reject: Function} request
  * @emits {notification: protoo.Notification} notification
  */
	function Peer(protooUrl, logClues, logger) {
		(0, _classCallCheck3.default)(this, Peer);

		// 
		var _this = (0, _possibleConstructorReturn3.default)(this, (Peer.__proto__ || (0, _getPrototypeOf2.default)(Peer)).call(this, logger));

		_this._logger = logger || new Logger('Peer');
		_this._logger.prefix = '-';

		// 日志追踪用
		_this._logClues = logClues;

		// Closed flag.
		// @type {Boolean}
		_this._closed = false;

		// Transport.
		// @type {protoo.Transport}
		_this._transport = null;

		// Connected flag.
		// @type {Boolean}
		_this._connected = false;

		// Custom data object.
		// @type {Object}
		_this._data = {};

		// Map of pending sent request objects indexed by request id.
		// @type {Map<Number, Object>}
		_this._sents = new _map2.default();

		// 
		_this._protooUrl = protooUrl;
		return _this;
	}

	(0, _createClass3.default)(Peer, [{
		key: 'init',
		value: function init() {
			var _this2 = this;

			this._transport = new WebSocketTransport(this._protooUrl, this._logClues, this._logger, null);

			this._transport.init();

			// ws 已连接
			this._transport.on('open', function (event) {
				if (_this2._closed) return;

				var isRetry = event.isRetry;


				_this2._connected = true;

				_this2.safeEmit('open', {
					isRetry: isRetry
				});
			});

			// 下层正在尝试重连
			this._transport.on('auto-reconnecting', function () {
				if (_this2._closed) return;

				_this2._connected = false;

				_this2.safeEmit('auto-reconnecting');
			});

			// ws 连接已失败/断开 -- 得到该事件，表明N次重连彻底失败了
			this._transport.on('failed', function () {
				if (_this2._closed) return;

				// 无需在此执行 closeTransport -- 在 WebsocketTransport 内部，触发 failed 时，已经执行了close
				// this.closeTransport();
				_this2._connected = false;

				_this2.safeEmit('failed');
			});

			// ws 连接已断开 -- 且内部不再执行自动重连
			this._transport.on('close', function (e) {
				if (_this2._closed) return;

				// 无需在此执行 closeTransport -- 在 WebsocketTransport 内部，触发 failed 时，已经执行了close
				// this.closeTransport();
				_this2._connected = false;

				_this2.safeEmit('close', e);
			});

			// 参数 message 为 Object 类型 -- 已 JSON.parse(raw) 处理
			this._transport.on('message', function (event) {
				var message = event.message;


				if (message.request) {
					_this2._handleRequest(message);
				} else if (message.response) {
					_this2._handleResponse(message);
				} else if (message.notification) {
					_this2._handleNotification(message);
				}
			});
		}

		/**
   * Whether the Peer is closed.
   *
   * @returns {Boolean}
   */

	}, {
		key: 'closeTransport',


		// 内部函数
		value: function closeTransport(e) {
			this._connected = false;

			// Close Transport.
			this._transport.close(e);

			// Close every pending sent.
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = (0, _getIterator3.default)(this._sents.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var sent = _step.value;

					sent.close();
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}

		/**
   * Close this Peer and its Transport.
   */

	}, {
		key: 'close',
		value: function close() {
			this._logger.warn('Peer API close()');

			if (this._closed) return;

			this._closed = true;

			this.closeTransport({
				code: 1000,
				reason: 'client close connection normally.'
			});

			this._logger.warn('Peer API close() OK');
		}

		// 恢复所有行为

	}, {
		key: 'resumeProcess',
		value: function resumeProcess() {
			if (Boolean(this._transport)) {
				this._transport.resumeProcess();
			}
		}

		// 挂起所有行为

	}, {
		key: 'suspendProcess',
		value: function suspendProcess() {
			if (Boolean(this._transport)) {
				this._transport.suspendProcess();
			}
		}

		// 重连请求

	}, {
		key: 'reconnect',
		value: function reconnect(e) {
			if (Boolean(this._transport)) {
				this._transport.reconnect(e);
			}
		}

		/**
   * Send a protoo request to the server-side Room.
   *
   * @param {String} method
   * @param {Object} [data]
   *
   * @async
   * @returns {Object} The response data Object if a success response is received.
   */

	}, {
		key: 'request',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(method) {
				var _this3 = this;

				var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
				var request;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								request = Message.createRequest(method, data);


								this._logger.debug('Peer API request() [method: ' + method + ' request.id: ' + request.id + ']');

								// This may throw.
								this._transport.send(request);

								return _context.abrupt('return', new _promise2.default(function (_resolve, _reject) {
									var timeout = 1500 * (15 + 0.1 * _this3._sents.size);
									var sent = {
										id: request.id,
										method: request.method,
										resolve: function resolve(data2) {
											_this3._logger.debug('Peer API request() request[method: ' + method + ' request.id: ' + request.id + '] <RESOLVE>');

											if (!_this3._sents.delete(request.id)) return;

											clearTimeout(sent.timer);

											_resolve(data2);
										},
										reject: function reject(error) {
											_this3._logger.debug('Peer API request() request[method: ' + method + ' request.id: ' + request.id + '] <REJECT>');

											if (!_this3._sents.delete(request.id)) return;

											clearTimeout(sent.timer);
											_reject(error);
										},
										timer: setTimeout(function () {
											_this3._logger.debug('Peer API request() request[method: ' + method + ' request.id: ' + request.id + '] <TIMEOUT>');

											if (!_this3._sents.delete(request.id)) return;

											_reject(new Error('Request Timeout.'));
										}, timeout),
										close: function close() {
											clearTimeout(sent.timer);
											_reject(new Error('Peer Closed'));
										}
									};

									// Add sent stuff to the map.
									_this3._sents.set(request.id, sent);
								}));

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function request(_x2) {
				return _ref.apply(this, arguments);
			}

			return request;
		}()

		/**
   * Send a protoo notification to the server-side Room.
   *
   * @param {String} method
   * @param {Object} [data]
   *
   * @async
   */

	}, {
		key: 'notify',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(method) {
				var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
				var notification;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								notification = Message.createNotification(method, data);


								this._logger.debug('Peer API notify() [method: ' + method + ']');

								// This may throw.
								this._transport.send(notification);

							case 3:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function notify(_x4) {
				return _ref2.apply(this, arguments);
			}

			return notify;
		}()
	}, {
		key: '_handleRequest',
		value: function _handleRequest(request) {
			var _this4 = this;

			try {
				this.emit('request',
				// Request.
				request,
				// accept() function.
				function (data) {
					var response = Message.createSuccessResponse(request, data);

					_this4._transport.send(response).catch(function () {});
				},
				// reject() function.
				function (errorCode, errorReason) {
					if (errorCode instanceof Error) {
						errorCode = 500;
						errorReason = String(errorCode);
					} else if (typeof errorCode === 'number' && errorReason instanceof Error) {
						errorReason = String(errorReason);
					}

					var response = Message.createErrorResponse(request, errorCode, errorReason);

					_this4._transport.send(response).catch(function () {});
				});
			} catch (error) {
				var response = Message.createErrorResponse(request, 500, String(error));

				this._transport.send(response).catch(function () {});
			}
		}
	}, {
		key: '_handleResponse',
		value: function _handleResponse(response) {
			var sent = this._sents.get(response.id);

			if (!sent) {
				this._logger.error('Peer _handleResponse() response [id: ' + response.id + '] doesnot match any request');

				return;
			}

			if (response.ok) {
				sent.resolve(response.data);
			} else {
				var error = new Error(response.errorReason);

				error.code = response.errorCode;
				sent.reject(error);
			}
		}
	}, {
		key: '_handleNotification',
		value: function _handleNotification(notification) {
			this.safeEmit('notification', notification);
		}
	}, {
		key: 'closed',
		get: function get() {
			return this._closed;
		}

		/**
   * Whether the Peer is connected.
   *
   * @returns {Boolean}
   */

	}, {
		key: 'connected',
		get: function get() {
			return this._connected;
		}

		/**
   * App custom data.
   *
   * @returns {Object}
   */

	}, {
		key: 'data',
		get: function get() {
			return this._data;
		}

		/**
   * Invalid setter.
   */
		,
		set: function set(data) // eslint-disable-line no-unused-vars
		{
			throw new Error('cannot override data object');
		}
	}]);
	return Peer;
}(EnhancedEventEmitter);

module.exports = Peer;

/***/ }),

/***/ "./src/protoo-client/protoo-client.js":
/*!********************************************!*\
  !*** ./src/protoo-client/protoo-client.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Peer = __webpack_require__(/*! ./Peer.js */ "./src/protoo-client/Peer.js");
var WebSocketTransport = __webpack_require__(/*! ./transports/WebSocketTransport.js */ "./src/protoo-client/transports/WebSocketTransport.js");

/**
 * Expose mediasoup-client version.
 *
 * @type {String}
 */
// exports.version = version;

/**
 * Expose Peer class.
 *
 * @type {Class}
 */
exports.Peer = Peer;

/**
 * Expose WebSocketTransport class.
 *
 * @type {Class}
 */
exports.WebSocketTransport = WebSocketTransport;

/***/ }),

/***/ "./src/protoo-client/transports/WebSocketTransport.js":
/*!************************************************************!*\
  !*** ./src/protoo-client/transports/WebSocketTransport.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _runtime = __webpack_require__(/*! ../../thirdparty/runtime.js */ "./src/thirdparty/runtime.js");

var _runtime2 = _interopRequireDefault(_runtime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WxWebSocket = __webpack_require__(/*! ../../utils/WxWebSocket.js */ "./src/utils/WxWebSocket.js");
var retry = __webpack_require__(/*! ../../retry/retry.js */ "./src/retry/retry.js");
var Logger = __webpack_require__(/*! ../../utils/Logger.js */ "./src/utils/Logger.js");
var EnhancedEventEmitter = __webpack_require__(/*! ../../utils/EnhancedEventEmitter.js */ "./src/utils/EnhancedEventEmitter.js");
var Message = __webpack_require__(/*! ../Message.js */ "./src/protoo-client/Message.js");

//
var WST_FULL_TIMEOUT = 45000; // 45s

// 最大重试次数
var MAX_RETRY = 4;

// 状态
// {
var WST_STATE_IDLE = 0; // 初始/关闭状态
var WST_STATE_TRYING = 1; // 启动中
var WST_STATE_ACT = 2; // 已连接/正常启动
var WST_STATE_RETRYING = 3; // 重试中
var WST_STATE_FINAL_FAIL = 4; // 最终失败
// }

// const WS_SUBPROTOCOL = 'protoo';

// 定义 连接失败/断网 的相关retry参数
var DEFAULT_RETRY_OPTIONS = {
	retries: MAX_RETRY, // 连续重试次数
	factor: 2, // 递增超时放大倍数
	minTimeout: 1 * 1000, // 
	maxTimeout: 4 * 1000
};

var WebSocketTransport = function (_EnhancedEventEmitter) {
	(0, _inherits3.default)(WebSocketTransport, _EnhancedEventEmitter);

	/**
  * @param {String} url       -- WebSocket URL.
  * @param {String} logClues  -- 日志追踪
  * @param {Object} [options] -- Options for WebSocket-Node.W3CWebSocket and retry.
  */
	function WebSocketTransport(url, logClues, logger, options) {
		(0, _classCallCheck3.default)(this, WebSocketTransport);

		// 
		var _this = (0, _possibleConstructorReturn3.default)(this, (WebSocketTransport.__proto__ || (0, _getPrototypeOf2.default)(WebSocketTransport)).call(this, logger));

		_this._logger = logger || new Logger('WebSocketTransport');
		_this._logger.prefix = '-';

		// 日志追踪用
		_this._logClues = logClues;

		// 用来标识是否调用了 close ?
		_this._stopping = false;

		// 初始链接 的 超时定时器
		_this.wstTimer = null;

		// 状态
		_this._wstState = WST_STATE_IDLE;

		// WebSocket URL.
		// @type {String}
		// 在 url 后面追加 '日志追踪标识'
		_this._url = url + '&logClues=' + _this._logClues;

		// Options.
		// @type {Object}
		_this._options = options || {};

		// WebSocket instance.
		// @type {WebSocket}
		_this._ws = null;

		_this._operation = null;

		// 当前是否 挂起/暂停 所有操作
		_this._suspend = false;

		// 
		_this._randomId = 0;
		return _this;
	}

	(0, _createClass3.default)(WebSocketTransport, [{
		key: 'init',
		value: function init() {
			if (this._wstState !== WST_STATE_IDLE) {
				this._logger.error('WebSocketTransport init() -- error: this._wstState(' + this._wstState + ') !== WST_STATE_IDLE. return');

				return;
			}
			try {
				// 
				this._stopping = false;

				this._wstState = WST_STATE_TRYING;

				this.startTransport({
					reason: 'init -- startTransport'
				});
			} catch (error) {
				this._logger.error('WebSocketTransport init() EXCEPTION!!! -- error: ' + (0, _stringify2.default)(error));
				throw new Error(error);
			}
		}
	}, {
		key: 'close',
		value: function close(e) {
			var code = 1000;
			var reason = 'close -- client close connection normally';

			if (Boolean(e)) {
				code = e.code;
				reason = e.reason;
			}

			this._logger.debug('WebSocketTransport close() -- this._randomId: ' + this._randomId);

			if (this.closed) return;

			// 
			this._stopping = true;

			// Don't wait for the WebSocket 'close' event, do it now.

			this.closeTransport({
				code: code,
				reason: reason
			});

			// 
			this._operation.stop();
			// 
			this._wstState = WST_STATE_IDLE;
		}

		// 恢复所有行为

	}, {
		key: 'resumeProcess',
		value: function resumeProcess() {
			this._suspend = false;
		}

		// 挂起所有行为

	}, {
		key: 'suspendProcess',
		value: function suspendProcess() {
			this._suspend = true;
		}

		// 

	}, {
		key: 'startTransport',
		value: function startTransport(e) {
			var _this2 = this;

			// 
			/*
   if (this._suspend)
   {
   	this._logger.debug('WebSocketTransport startTransport() system suspend!!!');
   			return;
   }
   */

			this._logger.debug('WebSocketTransport startTransport()');

			// 
			var wstProc = new _promise2.default(function (resolve, reject) {
				_this2._logger.error('WebSocketTransport startTransport() start WebSocket...');

				_this2._operation = retry.operation(_this2._options.retry || DEFAULT_RETRY_OPTIONS);

				if (!_this2._operation) {
					_this2._logger.error('WebSocketTransport startTransport() Internal error.');

					reject('Internal error');
				} else {
					// 
					_this2.attemptConnect(e);
				}
			});

			var wstTimerPromise = new _promise2.default(function (resolve, reject) {
				var wsTransport = _this2;

				_this2.wstTimer = setTimeout(function () {
					if (wsTransport._wstState !== WST_STATE_ACT) {
						wsTransport._logger.debug('WebSocketTransport wstTimerPromise TIMEOUT -- wsTransport._wstState(' + wsTransport._wstState + ') !== WST_STATE_ACT. reject(WebSocketTransport init timeout)');

						reject({
							code: 500,
							reason: 'WebSocketTransport init timeout'
						});
					} else {
						wsTransport._logger.debug('WebSocketTransport wstTimerPromise TIMEOUT -- ignore');
					}
				}, WST_FULL_TIMEOUT);
			});

			_promise2.default.race([wstProc, wstTimerPromise]).then(function (result) {}).catch(function (event) {
				// 如果当前已 进入 ACT，则直接 return
				if (_this2._wstState === WST_STATE_ACT) {
					return;
				} else {
					// {
					_this2.closeTransport({
						code: 500,
						reason: 'WebSocketTransport FINAL FAILED'
					});

					_this2._operation.stop();
					// 
					_this2._wstState = WST_STATE_FINAL_FAIL;
					// }

					_this2._logger.debug('WebSocketTransport startTransport() -- emit [failed] WebSocketTransport FINAL FAILED');
					// 
					_this2.safeEmit('failed', {
						code: 500,
						reason: 'WebSocketTransport FINAL FAILED'
					});
				}
			});
			// 
		}

		// 内部函数

	}, {
		key: 'closeTransport',
		value: function closeTransport(opts) {
			var code = 1000;
			var reason = 'close connection';

			if (Boolean(opts)) {
				code = opts.code;
				reason = opts.reason;
			}

			if (Boolean(this._ws)) {
				this._logger.warn('WebSocketTransport closeTransport() -- code: ' + code + ' reason: ' + reason);

				try {
					this._ws.close({
						code: code,
						reason: reason
					});
				} catch (error) {
					this._logger.warn('WebSocketTransport closeTransport() -- _ws.close EXCEPTION: ' + error.message);
				}
			}
		}

		// 

	}, {
		key: 'reconnect',
		value: function reconnect(e) {
			this._logger.debug('WebSocketTransport reconnect() -- will reconnect...');
			// 
			this._operation.stop();
			// 
			this._wstState = WST_STATE_RETRYING; // 设定为：当前正在重试

			// 通知上层：当前正在尝试自动重连
			this.safeEmit('auto-reconnecting');

			this.startTransport(e);
		}
	}, {
		key: 'send',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(message) {
				var msg;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!(this._wstState !== WST_STATE_ACT)) {
									_context.next = 3;
									break;
								}

								this._logger.warn('WebSocketTransport send() -- error: transport no-connection');
								throw new Error('transport no-connection');

							case 3:
								_context.prev = 3;
								msg = (0, _stringify2.default)(message);


								this._logger.warn('WebSocketTransport send() <<<<<< ' + msg);

								if (Boolean(this._ws)) {
									this._ws.send({ msg: msg });
								}
								_context.next = 13;
								break;

							case 9:
								_context.prev = 9;
								_context.t0 = _context['catch'](3);

								this._logger.warn('WebSocketTransport send() -- EXCEPTION: ' + _context.t0.message);

								throw _context.t0;

							case 13:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this, [[3, 9]]);
			}));

			function send(_x) {
				return _ref.apply(this, arguments);
			}

			return send;
		}()

		// 网络状况发生变化时，回调函数
		// 

	}, {
		key: 'onWsOpen',
		value: function onWsOpen() {
			if (Boolean(this._operation)) {
				this._operation.stop();
			}

			// 
			// 如果在此之前调用了 close 主动关闭，则直接 return
			if (this._stopping) {
				this._logger.debug('WebSocketTransport onWsOpen() -- this._randomId: ' + this._randomId + ' -- this._stopping is ture, return.');

				return;
			}

			// 
			if (this.wstState === WST_STATE_FINAL_FAIL) {
				this._logger.warn('WebSocketTransport onWsOpen() -- This has been WST_STATE_FINAL_FAIL, so return.');

				return;
			}

			this._logger.debug('WebSocketTransport onWsOpen() -- this._randomId: ' + this._randomId + ' -- will emit [open]');

			// 
			var isRetry = this._wstState === WST_STATE_RETRYING;

			this._wstState = WST_STATE_ACT;

			// 
			if (this.wstTimer !== null) {
				clearTimeout(this.wstTimer);
				this.wstTimer = null;
			}

			// Emit 'open' event.
			this.safeEmit('open', {
				isRetry: isRetry
			});
		}
	}, {
		key: 'onWsMessage',
		value: function onWsMessage(data) {
			if (this._wstState !== WST_STATE_ACT) {
				this._logger.debug('WebSocketTransport onWsMessage() -- message: ' + data + ' -- this._wstState(' + this._wstState + ') !== WST_STATE_ACT, return.');

				return;
			}

			var message = Message.parse(data);

			if (!message) {
				this._logger.debug('WebSocketTransport onWsMessage() -- message is null, return');

				return;
			}

			if (this.listenerCount('message') === 0) {
				this._logger.error('WebSocketTransport onWsMessage() -- no listeners for event [message], ignoring message');

				return;
			}

			this._logger.warn('WebSocketTransport onWsMessage() >>>>>> ' + (0, _stringify2.default)(message));

			// Emit 'message' event.
			this.safeEmit('message', { message: message });
		}

		// 暂不对上报

	}, {
		key: 'onWsError',
		value: function onWsError(event) {
			if (this._wstState === WST_STATE_IDLE) return;

			this._logger.error('WebSocketTransport onWsError() -- this._wstState: ' + this._wstState + ' error: ' + (0, _stringify2.default)(event));
		}

		// 如果当前为非人为主观断开，则会尝试一定次数的重试
		// 若需要重试，则在连续重试N次仍未成功连接，则向上层报 "最终失败"
		// 若无需重试，则直接向上层报 "close"

	}, {
		key: 'onWsClose',
		value: function onWsClose(opts) {
			var _this3 = this;

			var event = opts.event;

			/*
   wx.setStorage({
   	key  : `WebSocketTransport-${new Date().getTime()}`,
   	data : `WebSocketTransport event[onWsClose] currentAttempt: ${currentAttempt} event: ${JSON.stringify(event)}.`
   });
   */

			// 对于 IDEL、FIANL_FAIL 状态， 忽略 onWsClose 事件

			if (this._wstState === WST_STATE_IDLE || this._wstState === WST_STATE_FINAL_FAIL) {
				this._logger.warn('WebSocketTransport onWsClose -- Invalid _wstState(' + this._wstState + '), so return.');

				return;
			}

			// 
			this._logger.debug('WebSocketTransport onWsClose() -- this._wstState: ' + this._wstState + ' ' + (0, _stringify2.default)(event));

			// Don't retry when in the following cases:
			// 4000 : closed by server
			// 4100 : 后替前
			// _stopping : 上层主动关闭，故不再尝试重连，且通知上层
			if (event.code === 4000 || event.code === 4100 || this._stopping) {
				// 
				this._logger.debug('WebSocketTransport onWsClose() -- [event: ' + (0, _stringify2.default)(event) + ']. Normally closed. No more attempt to reconnect!');

				// 
				if (Boolean(this._operation)) {
					this._operation.stop();
				}
				// 
				// 在向上层投递 close 事件前，首先回收内部资源/置内部状态 -- 以免上层处理 close 事件时再次调入 close()
				/* 2019.7.18 在此wxwebsocket已断开，此处无需再执行closeTransport
    this.closeTransport({
    	code   : 1000,
    	reason : `onWsClose[event: ${event.code}] -- close connection`
    });
    */

				this._wstState = WST_STATE_FINAL_FAIL;

				// 此种情况下，才直接向上层触发 'close' 事件
				// Emit 'close' event.
				this.safeEmit('close', {
					code: event.code,
					reason: this._stopping ? '_stopping' : 'Normally closed -- code: ' + (0, _stringify2.default)(event)
				});

				return;
			}
			// 尝试重连
			else {
					// 通知上层：当前正在尝试自动重连
					// 注：对于初始断开，将由此处执行重连；对于连接过程中的连接超时重试，将由 _operation 的超时定时器自动执行 retry
					this.safeEmit('auto-reconnecting');

					// 
					if (this._wstState === WST_STATE_ACT) {
						// 如果之前为 已连接 状态，则说明这是一次 新断开 事件，需要全新开始 attemptConnect
						this._logger.debug('WebSocketTransport onWsClose() -- this._wstState !== WST_STATE_RETRYING, A new beginning...');

						// 一次全新的重试的开始，则重置 operation ，重启 attempt
						if (Boolean(this._operation)) {
							this._operation.reset();
						}

						//
						this._wstState = WST_STATE_RETRYING; // 设定为：当前正在重试

						setTimeout(function () {
							_this3.attemptConnect({
								reason: 'onWsClose -- retrying'
							});
						});

						return;
					}
				}

			/*
   else if (this._wstState === WST_STATE_RETRYING) // 如果之前是 retying 状态，则应继续执行 retry
   {
   	this.operationRetry(event);
   }
   */
		}
	}, {
		key: 'attemptConnect',
		value: function attemptConnect(e) {
			var _this4 = this;

			if (!this._operation) {
				this._logger.error('WebSocketTransport attemptConnect() this._operation is null.');

				return;
			}

			this._operation.attempt(function (currentAttempt) {
				// 
				if (_this4._stopping) {
					if (Boolean(_this4._operation)) {
						_this4._operation.stop();
					}

					_this4.closeTransport({
						code: 1000,
						reason: 'attemptConnect _stopping -- client close connection normally'
					});

					_this4._logger.debug('WebSocketTransport attemptConnect() -- _stopping is true, has closeTransport.');

					return;
				}

				// 
				var commentReason = !e ? '' : e.reason;

				// TODO : ??? 
				// closeTransport 这件事还有没有必要做 ???
				_this4.closeTransport({
					code: 3000,
					reason: 'Will retry later -- ' + commentReason
				});

				// 
				_this4._logger.debug('WebSocketTransport attemptConnect() -- [currentAttempt: ' + currentAttempt + ']');

				// 
				_this4._randomId = Math.round(Math.random() * 10000000);

				_this4._ws = new WxWebSocket(_this4._randomId, _this4._logger);

				if (Boolean(_this4._ws)) {
					// 监听 wx websocket 模块事件
					_this4._ws.on('open', function (event) {
						if (event.randomId !== _this4._randomId) {
							// 
							/*
       wx.setStorage({
       	key  : `WebSocketTransport-${new Date().getTime()}`,
       	data : `WebSocketTransport _ws event[open] randmId un-match ${event.randomId} ${this._randomId}.`
       });
       */
							_this4._logger.warn('WebSocketTransport _ws event[open] randmId un-match ' + event.randomId + ' ' + _this4._randomId + '.');
						} else {
							// 
							_this4.onWsOpen();
						}
					});

					_this4._ws.on('message', function (event) {
						if (event.randomId !== _this4._randomId) {
							_this4._logger.warn('WebSocketTransport _ws event[message] randmId un-match ' + event.randomId + ' ' + _this4._randomId + '.');
						} else {
							_this4.onWsMessage(event.data);
						}
					});

					_this4._ws.on('error', function (event) {
						if (event.randomId !== _this4._randomId) {
							// 
							/*
       wx.setStorage({
       	key  : `WebSocketTransport-${new Date().getTime()}`,
       	data : `WebSocketTransport _ws event[error] randmId un-match ${event.randomId} ${this._randomId}.`
       });
       */

							_this4._logger.warn('WebSocketTransport _ws event[error] randmId un-match ' + event.randomId + ' ' + _this4._randomId + '.');
						} else {
							// 
							_this4.onWsError(event);
						}
					});

					_this4._ws.on('close', function (event) {
						if (event.randomId !== _this4._randomId) {
							// 
							/*
       wx.setStorage({
       	key  : `WebSocketTransport-${new Date().getTime()}`,
       	data : `WebSocketTransport _ws event[close] randmId un-match ${event.randomId} ${this._randomId}.`
       });
       */

							_this4._logger.warn('WebSocketTransport _ws event[close] randmId un-match ' + event.randomId + ' ' + _this4._randomId + '.');
						} else {
							// 
							_this4.onWsClose({ event: event });
						}
					});

					// connect server
					_this4._ws.connect({
						url: _this4._wstState === WST_STATE_RETRYING ? _this4._url + '&retry=true' : _this4._url,
						success: function success(res) {},
						fail: function fail(res) {
							/*
       wx.setStorage({
       	key  : `WebSocketTransport-${new Date().getTime()}`,
       	data : 'WebSocketTransport _ws.connect fail.'
       });
       */

							_this4._logger.error('_ws.connect failed. [currentAttempt: ' + currentAttempt + ']');

							throw new Error('_ws.connect failed');
						}
					});
				} else {
					_this4._logger.error('WebSocket create failed -- _ws is null. [currentAttempt: ' + currentAttempt + ']');

					throw new Error('WebSocket create failed -- _ws is null');
				}
			}, {
				timeout: 10 * 1000, // 8s 超时
				cb: function cb(ctr) {
					_this4._logger.debug('attemptConnect() _operation.attempt timeout!! [retry: ' + ctr + ']. _wstState is ' + _this4._wstState);

					if (_this4._wstState === WST_STATE_ACT) {
						return;
					} else if (_this4._wstState === WST_STATE_TRYING || _this4._wstState === WST_STATE_RETRYING) {
						_this4._logger.error('attemptConnect() _operation.attempt timeout(10s). [retry: ' + ctr + ']. continue to retry...');
						// 
						setTimeout(function () {
							_this4.operationRetry({
								code: 3100
							});
						});
					}
				}
			});
		}
	}, {
		key: 'operationRetry',
		value: function operationRetry(event) {
			if (!this._operation) {
				this._logger.error('WebSocketTransport operationRetry() -- error: this._operation is null.');

				return;
			}
			//

			if (this._operation.retry(true)) {
				/*
    wx.setStorage({
    	key  : `WebSocketTransport-${new Date().getTime()}`,
    	data : `WebSocketTransport operationRetry() ok. event: ${JSON.stringify(event)}.`
    });
    */

				this._logger.debug('WebSocketTransport operationRetry() -- _operation.retrying [retry: ' + this._operation._attempts + '] [event.code: ' + event.code + ']');

				// 通知上层：当前正在尝试自动重连
				this.safeEmit('auto-reconnecting');

				return;
			} else {
				/*
    wx.setStorage({
    	key  : `WebSocketTransport-${new Date().getTime()}`,
    	data : 'WebSocketTransport operationRetry() FINAL FAILED.'
    });
    */

				this._logger.error('WebSocketTransport operationRetry() -- _operation.retry end up [retry: ' + this._operation_attempts + ']. FINAL FAILED');

				// 
				this._operation.stop();
				// 
				this._wstState = WST_STATE_FINAL_FAIL;
				// 当尝试完所有重试，仍未 ok，则向上层触发 failed，携带 event:{code: 500}
				this.safeEmit('failed', {
					code: 500,
					reason: 'WebSocketTransport FINAL FAILED'
				});
			}
		}
	}, {
		key: 'closed',
		get: function get() {
			return this._wstState === WST_STATE_IDLE || this._wstState === WST_STATE_FINAL_FAIL;
		}
	}]);
	return WebSocketTransport;
}(EnhancedEventEmitter);

module.exports = WebSocketTransport;

/***/ }),

/***/ "./src/retry/retry.js":
/*!****************************!*\
  !*** ./src/retry/retry.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RetryOperation = __webpack_require__(/*! ./retry_operation.js */ "./src/retry/retry_operation.js");

exports.operation = function (options) {
	var timeouts = exports.timeouts(options);

	return new RetryOperation(timeouts, {
		forever: options && options.forever,
		unref: options && options.unref,
		maxRetryTime: options && options.maxRetryTime
	});
};

exports.timeouts = function (options) {
	if (options instanceof Array) {
		return [].concat(options);
	}

	var opts = {
		retries: 4,
		factor: 2,
		minTimeout: 1 * 1000,
		maxTimeout: 4 * 1000, // Infinity,
		randomize: false
	};

	for (var key in options) {
		opts[key] = options[key];
	}

	if (opts.minTimeout > opts.maxTimeout) {
		throw new Error('minTimeout is greater than maxTimeout');
	}

	var timeouts = [];

	for (var _i = 0; _i < opts.retries; _i++) {
		timeouts.push(this.createTimeout(_i, opts));
	}

	if (options && options.forever && !timeouts.length) {
		timeouts.push(this.createTimeout(i, opts));
	}

	// 
	console.warn('retry.js timeouts: ' + timeouts.length);

	// sort the array numerically ascending
	timeouts.sort(function (a, b) {
		return a - b;
	});

	return timeouts;
};

exports.createTimeout = function (attempt, opts) {
	var random = opts.randomize ? Math.random() + 1 : 1;

	var timeout = Math.round(random * opts.minTimeout * Math.pow(opts.factor, attempt));

	timeout = Math.min(timeout, opts.maxTimeout);

	return timeout;
};

exports.wrap = function (obj, options, methods) {
	if (options instanceof Array) {
		methods = options;
		options = null;
	}

	if (!methods) {
		methods = [];
		for (var key in obj) {
			if (typeof obj[key] === 'function') {
				methods.push(key);
			}
		}
	}

	for (var _i2 = 0; _i2 < methods.length; _i2++) {
		var method = methods[_i2];
		var original = obj[method];

		obj[method] = function retryWrapper(original) {
			var op = exports.operation(options);
			var args = Array.prototype.slice.call(arguments, 1);
			var callback = args.pop();

			args.push(function (err) {
				if (op.retry(err)) {
					return;
				}
				if (err) {
					arguments[0] = op.mainError();
				}
				callback.apply(this, arguments);
			});

			op.attempt(function () {
				original.apply(obj, args);
			});
		}.bind(obj, original);
		obj[method].options = options;
	}
};

/***/ }),

/***/ "./src/retry/retry_operation.js":
/*!**************************************!*\
  !*** ./src/retry/retry_operation.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RetryOperation(timeouts, options) {
	// Compatibility for the old (timeouts, retryForever) signature
	if (typeof options === 'boolean') {
		options = { forever: options };
	}

	this._originalTimeouts = JSON.parse((0, _stringify2.default)(timeouts));
	this._timeouts = timeouts;
	this._options = options || {};
	this._maxRetryTime = options ? options.maxRetryTime : Infinity;
	this._fn = null;
	this._errors = [];
	this._attempts = 1;
	this._operationTimeout = 3000; // 默认定时器超时为 3s //null;
	this._operationTimeoutCb = null;
	this._timeout = null;
	this._operationStart = null;

	console.warn('RetryOperation construct() this._timeouts: ' + (0, _stringify2.default)(this._timeouts));

	if (this._options.forever) {
		this._cachedTimeouts = this._timeouts.slice(0);
	}
}
module.exports = RetryOperation;

RetryOperation.prototype.reset = function () {
	this._attempts = 1;
	this._timeouts = JSON.parse((0, _stringify2.default)(this._originalTimeouts));

	console.warn('RetryOperation reset() this._timeouts: ' + (0, _stringify2.default)(this._timeouts));
};

RetryOperation.prototype.stop = function () {
	if (this._timeout) {
		clearTimeout(this._timeout);
	}
	this._timeout = null;

	console.warn('RetryOperation stop() -- clear the timeouts');

	this._timeouts = [];
	this._cachedTimeouts = null;
};

RetryOperation.prototype.retry = function (err) {
	if (this._timeout) {
		clearTimeout(this._timeout);
	}
	this._timeout = null;

	if (!err) {
		return false;
	}

	var currentTime = new Date().getTime();

	if (err && currentTime - this._operationStart >= this._maxRetryTime) {
		this._errors.unshift(new Error('RetryOperation timeout(' + this._maxRetryTime + ') occurred'));

		console.warn('RetryOperation retry() this._maxRetryTime TIMEOUT!!!');

		return false;
	}

	this._errors.push(err);

	var timeout = this._timeouts.shift();

	console.warn('RetryOperation retry() timeout: ' + timeout + ' this._timeouts: ' + (0, _stringify2.default)(this._timeouts));

	if (timeout === undefined) {
		if (this._cachedTimeouts) {
			// retry forever, only keep last error
			this._errors.splice(this._errors.length - 1, this._errors.length);
			this._timeouts = this._cachedTimeouts.slice(0);
			timeout = this._timeouts.shift();
		} else {
			return false;
		}
	}

	var self = this;

	var timer = setTimeout(function () {
		self._attempts++;

		if (self._operationTimeoutCb) {
			self._timeout = setTimeout(function () {
				self._operationTimeoutCb(self._attempts);
			}, self._operationTimeout);

			if (self._options.unref) {
				self._timeout.unref();
			}
		}

		self._fn(self._attempts);
	}, timeout);

	if (this._options.unref) {
		timer.unref();
	}

	return true;
};

RetryOperation.prototype.attempt = function (fn, timeoutOps) {
	this._fn = fn;

	if (timeoutOps) {
		if (timeoutOps.timeout) {
			this._operationTimeout = timeoutOps.timeout;
		}
		if (timeoutOps.cb) {
			this._operationTimeoutCb = timeoutOps.cb;
		}
	}

	var self = this;

	if (this._operationTimeoutCb) {
		this._timeout = setTimeout(function () {
			self._operationTimeoutCb(1);
		}, self._operationTimeout);
	}

	this._operationStart = new Date().getTime();

	this._fn(this._attempts);
};

RetryOperation.prototype.try = function (fn) {
	console.log('Using RetryOperation.try() is deprecated');
	this.attempt(fn);
};

RetryOperation.prototype.start = function (fn) {
	console.log('Using RetryOperation.start() is deprecated');
	this.attempt(fn);
};

RetryOperation.prototype.start = RetryOperation.prototype.try;

RetryOperation.prototype.errors = function () {
	return this._errors;
};

RetryOperation.prototype.attempts = function () {
	return this._attempts;
};

RetryOperation.prototype.mainError = function () {
	if (this._errors.length === 0) {
		return null;
	}

	var counts = {};
	var mainError = null;
	var mainErrorCount = 0;

	for (var i = 0; i < this._errors.length; i++) {
		var error = this._errors[i];
		var message = error.message;
		var count = (counts[message] || 0) + 1;

		counts[message] = count;

		if (count >= mainErrorCount) {
			mainError = error;
			mainErrorCount = count;
		}
	}

	return mainError;
};

/***/ }),

/***/ "./src/thirdparty/debug.js":
/*!*********************************!*\
  !*** ./src/thirdparty/debug.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _iterator = __webpack_require__(/*! babel-runtime/core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _typeof3 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof4 = _interopRequireDefault(_typeof3);

var _symbol = __webpack_require__(/*! babel-runtime/core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _from = __webpack_require__(/*! babel-runtime/core-js/array/from */ "./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

var _isIterable2 = __webpack_require__(/*! babel-runtime/core-js/is-iterable */ "./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if ((0, _isIterable3.default)(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return (0, _from2.default)(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  }
}

function _typeof(obj) {
  if (typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj);
    };
  }return _typeof(obj);
}

(function (f) {
  if (( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var g; }
})(function () {
  var define, module, exports;
  return function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;
            if (!f && c) return require(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }

          var p = n[i] = {
            exports: {}
          };
          e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];
            return o(n || r);
          }, p, p.exports, r, e, n, t);
        }

        return n[i].exports;
      }

      for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
        o(t[i]);
      }

      return o;
    }

    return r;
  }()({
    1: [function (require, module, exports) {
      /**
       * Helpers.
       */
      var s = 1000;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var w = d * 7;
      var y = d * 365.25;
      /**
       * Parse or format the given `val`.
       *
       * Options:
       *
       *  - `long` verbose formatting [false]
       *
       * @param {String|Number} val
       * @param {Object} [options]
       * @throws {Error} throw an error if val is not a non-empty string or a number
       * @return {String|Number}
       * @api public
       */

      module.exports = function (val, options) {
        options = options || {};

        var type = _typeof(val);

        if (type === 'string' && val.length > 0) {
          return parse(val);
        } else if (type === 'number' && isNaN(val) === false) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }

        throw new Error('val is not a non-empty string or a valid number. val=' + (0, _stringify2.default)(val));
      };
      /**
       * Parse the given `str` and return milliseconds.
       *
       * @param {String} str
       * @return {Number}
       * @api private
       */

      function parse(str) {
        str = String(str);

        if (str.length > 100) {
          return;
        }

        var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

        if (!match) {
          return;
        }

        var n = parseFloat(match[1]);
        var type = (match[2] || 'ms').toLowerCase();

        switch (type) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return n * y;

          case 'weeks':
          case 'week':
          case 'w':
            return n * w;

          case 'days':
          case 'day':
          case 'd':
            return n * d;

          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return n * h;

          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return n * m;

          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return n * s;

          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return n;

          default:
            return undefined;
        }
      }
      /**
       * Short format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */

      function fmtShort(ms) {
        var msAbs = Math.abs(ms);

        if (msAbs >= d) {
          return Math.round(ms / d) + 'd';
        }

        if (msAbs >= h) {
          return Math.round(ms / h) + 'h';
        }

        if (msAbs >= m) {
          return Math.round(ms / m) + 'm';
        }

        if (msAbs >= s) {
          return Math.round(ms / s) + 's';
        }

        return ms + 'ms';
      }
      /**
       * Long format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */

      function fmtLong(ms) {
        var msAbs = Math.abs(ms);

        if (msAbs >= d) {
          return plural(ms, msAbs, d, 'day');
        }

        if (msAbs >= h) {
          return plural(ms, msAbs, h, 'hour');
        }

        if (msAbs >= m) {
          return plural(ms, msAbs, m, 'minute');
        }

        if (msAbs >= s) {
          return plural(ms, msAbs, s, 'second');
        }

        return ms + ' ms';
      }
      /**
       * Pluralization helper.
       */

      function plural(ms, msAbs, n, name) {
        var isPlural = msAbs >= n * 1.5;
        return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
      }
    }, {}],
    2: [function (require, module, exports) {
      // shim for using process in browser
      var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }

      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }

      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }

        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();

      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        } // if setTimeout wasn't available but was latter defined


        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }

      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        } // if clearTimeout wasn't available but was latter defined


        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }

      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }

        draining = false;

        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }

        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }

        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;

        while (len) {
          currentQueue = queue;
          queue = [];

          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }

          queueIndex = -1;
          len = queue.length;
        }

        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);

        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }

        queue.push(new Item(fun, args));

        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      }; // v8 likes predictible objects


      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }

      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };

      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues

      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };

      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };

      process.umask = function () {
        return 0;
      };
    }, {}],
    3: [function (require, module, exports) {
      /**
       * This is the common logic for both the Node.js and web browser
       * implementations of `debug()`.
       */
      function setup(env) {
        createDebug.debug = createDebug;
        createDebug.default = createDebug;
        createDebug.coerce = coerce;
        createDebug.disable = disable;
        createDebug.enable = enable;
        createDebug.enabled = enabled;
        createDebug.humanize = require('ms');
        (0, _keys2.default)(env).forEach(function (key) {
          createDebug[key] = env[key];
        });
        /**
        * Active `debug` instances.
        */

        createDebug.instances = [];
        /**
        * The currently active debug mode names, and names to skip.
        */

        createDebug.names = [];
        createDebug.skips = [];
        /**
        * Map of special "%n" handling functions, for the debug "format" argument.
        *
        * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
        */

        createDebug.formatters = {};
        /**
        * Selects a color for a debug namespace
        * @param {String} namespace The namespace string for the for the debug instance to be colored
        * @return {Number|String} An ANSI color code for the given namespace
        * @api private
        */

        function selectColor(namespace) {
          var hash = 0;

          for (var i = 0; i < namespace.length; i++) {
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
          }

          return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
        }

        createDebug.selectColor = selectColor;
        /**
        * Create a debugger with the given `namespace`.
        *
        * @param {String} namespace
        * @return {Function}
        * @api public
        */

        function createDebug(namespace) {
          var prevTime;

          function debug() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            // Disabled?
            if (!debug.enabled) {
              return;
            }

            var self = debug; // Set `diff` timestamp

            var curr = Number(new Date());
            var ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);

            if (typeof args[0] !== 'string') {
              // Anything else let's inspect with %O
              args.unshift('%O');
            } // Apply any `formatters` transformations


            var index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
              // If we encounter an escaped % then don't increase the array index
              if (match === '%%') {
                return match;
              }

              index++;
              var formatter = createDebug.formatters[format];

              if (typeof formatter === 'function') {
                var val = args[index];
                match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

                args.splice(index, 1);
                index--;
              }

              return match;
            }); // Apply env-specific formatting (colors, etc.)

            createDebug.formatArgs.call(self, args);
            var logFn = self.log || createDebug.log;
            logFn.apply(self, args);
          }

          debug.namespace = namespace;
          debug.enabled = createDebug.enabled(namespace);
          debug.useColors = createDebug.useColors();
          debug.color = selectColor(namespace);
          debug.destroy = destroy;
          debug.extend = extend; // Debug.formatArgs = formatArgs;
          // debug.rawLog = rawLog;
          // env-specific initialization logic for debug instances

          if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
          }

          createDebug.instances.push(debug);
          return debug;
        }

        function destroy() {
          var index = createDebug.instances.indexOf(this);

          if (index !== -1) {
            createDebug.instances.splice(index, 1);
            return true;
          }

          return false;
        }

        function extend(namespace, delimiter) {
          var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
          newDebug.log = this.log;
          return newDebug;
        }
        /**
        * Enables a debug mode by namespaces. This can include modes
        * separated by a colon and wildcards.
        *
        * @param {String} namespaces
        * @api public
        */

        function enable(namespaces) {
          createDebug.save(namespaces);
          createDebug.names = [];
          createDebug.skips = [];
          var i;
          var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
          var len = split.length;

          for (i = 0; i < len; i++) {
            if (!split[i]) {
              // ignore empty strings
              continue;
            }

            namespaces = split[i].replace(/\*/g, '.*?');

            if (namespaces[0] === '-') {
              createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
            } else {
              createDebug.names.push(new RegExp('^' + namespaces + '$'));
            }
          }

          for (i = 0; i < createDebug.instances.length; i++) {
            var instance = createDebug.instances[i];
            instance.enabled = createDebug.enabled(instance.namespace);
          }
        }
        /**
        * Disable debug output.
        *
        * @return {String} namespaces
        * @api public
        */

        function disable() {
          var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
            return '-' + namespace;
          }))).join(',');
          createDebug.enable('');
          return namespaces;
        }
        /**
        * Returns true if the given mode name is enabled, false otherwise.
        *
        * @param {String} name
        * @return {Boolean}
        * @api public
        */

        function enabled(name) {
          if (name[name.length - 1] === '*') {
            return true;
          }

          var i;
          var len;

          for (i = 0, len = createDebug.skips.length; i < len; i++) {
            if (createDebug.skips[i].test(name)) {
              return false;
            }
          }

          for (i = 0, len = createDebug.names.length; i < len; i++) {
            if (createDebug.names[i].test(name)) {
              return true;
            }
          }

          return false;
        }
        /**
        * Convert regexp to namespace
        *
        * @param {RegExp} regxep
        * @return {String} namespace
        * @api private
        */

        function toNamespace(regexp) {
          return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
        }
        /**
        * Coerce `val`.
        *
        * @param {Mixed} val
        * @return {Mixed}
        * @api private
        */

        function coerce(val) {
          if (val instanceof Error) {
            return val.stack || val.message;
          }

          return val;
        }

        createDebug.enable(createDebug.load());
        return createDebug;
      }

      module.exports = setup;
    }, {
      "ms": 1
    }],
    4: [function (require, module, exports) {
      (function (process) {
        /* eslint-env browser */

        /**
         * This is the web browser implementation of `debug()`.
         */
        exports.log = log;
        exports.formatArgs = formatArgs;
        exports.save = save;
        exports.load = load;
        exports.useColors = useColors;
        exports.storage = localstorage();
        /**
         * Colors.
         */

        exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
        /**
         * Currently only WebKit-based Web Inspectors, Firefox >= v31,
         * and the Firebug extension (any Firefox version) are known
         * to support "%c" CSS customizations.
         *
         * TODO: add a `localStorage` variable to explicitly enable/disable colors
         */
        // eslint-disable-next-line complexity

        function useColors() {
          // NB: In an Electron preload script, document will be defined but not fully
          // initialized. Since we know we're in Chrome, we'll just detect this case
          // explicitly
          if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
            return true;
          } // Internet Explorer and Edge do not support colors.


          if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
            return false;
          } // Is webkit? http://stackoverflow.com/a/16459606/376773
          // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


          return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
          typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
          // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
          typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
          typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
        }
        /**
         * Colorize log arguments if enabled.
         *
         * @api public
         */

        function formatArgs(args) {
          args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

          if (!this.useColors) {
            return;
          }

          var c = 'color: ' + this.color;
          args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
          // arguments passed either before or after the %c, so we need to
          // figure out the correct index to insert the CSS into

          var index = 0;
          var lastC = 0;
          args[0].replace(/%[a-zA-Z%]/g, function (match) {
            if (match === '%%') {
              return;
            }

            index++;

            if (match === '%c') {
              // We only are interested in the *last* %c
              // (the user may have provided their own)
              lastC = index;
            }
          });
          args.splice(lastC, 0, c);
        }
        /**
         * Invokes `console.log()` when available.
         * No-op when `console.log` is not a "function".
         *
         * @api public
         */

        function log() {
          var _console;

          // This hackery is required for IE8/9, where
          // the `console.log` function doesn't have 'apply'
          return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
        }
        /**
         * Save `namespaces`.
         *
         * @param {String} namespaces
         * @api private
         */

        function save(namespaces) {
          try {
            if (namespaces) {
              exports.storage.setItem('debug', namespaces);
            } else {
              exports.storage.removeItem('debug');
            }
          } catch (error) {// Swallow
            // XXX (@Qix-) should we be logging these?
          }
        }
        /**
         * Load `namespaces`.
         *
         * @return {String} returns the previously persisted debug modes
         * @api private
         */

        function load() {
          var r;

          try {
            r = exports.storage.getItem('debug');
          } catch (error) {} // Swallow
          // XXX (@Qix-) should we be logging these?
          // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


          if (!r && typeof process !== 'undefined' && 'env' in process) {
            r = process.env.DEBUG;
          }

          return r;
        }
        /**
         * Localstorage attempts to return the localstorage.
         *
         * This is necessary because safari throws
         * when a user disables cookies/localstorage
         * and you attempt to access it.
         *
         * @return {LocalStorage}
         * @api private
         */

        function localstorage() {
          try {
            // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
            // The Browser also has localStorage in the global context.
            return localStorage;
          } catch (error) {// Swallow
            // XXX (@Qix-) should we be logging these?
          }
        }

        module.exports = require('./common')(exports);
        var formatters = module.exports.formatters;
        /**
         * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
         */

        formatters.j = function (v) {
          try {
            return (0, _stringify2.default)(v);
          } catch (error) {
            return '[UnexpectedJSONParseError]: ' + error.message;
          }
        };
      }).call(this, require('_process'));
    }, {
      "./common": 3,
      "_process": 2
    }]
  }, {}, [4])(4);
});

/***/ }),

/***/ "./src/thirdparty/events.js":
/*!**********************************!*\
  !*** ./src/thirdparty/events.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _create = __webpack_require__(/*! babel-runtime/core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _isNan = __webpack_require__(/*! babel-runtime/core-js/number/is-nan */ "./node_modules/babel-runtime/core-js/number/is-nan.js");

var _isNan2 = _interopRequireDefault(_isNan);

var _getOwnPropertyNames = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-names */ "./node_modules/babel-runtime/core-js/object/get-own-property-names.js");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _getOwnPropertySymbols = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-symbols */ "./node_modules/babel-runtime/core-js/object/get-own-property-symbols.js");

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var R = (typeof Reflect === 'undefined' ? 'undefined' : (0, _typeof3.default)(Reflect)) === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};

var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (_getOwnPropertySymbols2.default) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return (0, _getOwnPropertyNames2.default)(target).concat((0, _getOwnPropertySymbols2.default)(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return (0, _getOwnPropertyNames2.default)(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = _isNan2.default || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function get() {
    return defaultMaxListeners;
  },
  set: function set(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {

  if (this._events === undefined || this._events === (0, _getPrototypeOf2.default)(this)._events) {
    this._events = (0, _create2.default)(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }var doError = type === 'error';

  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0) er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) {
      ReflectApply(listeners[i], this, args);
    }
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof listener === 'undefined' ? 'undefined' : (0, _typeof3.default)(listener)));
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = (0, _create2.default)(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof listener === 'undefined' ? 'undefined' : (0, _typeof3.default)(listener)));
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof listener === 'undefined' ? 'undefined' : (0, _typeof3.default)(listener)));
  }
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
};

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof listener === 'undefined' ? 'undefined' : (0, _typeof3.default)(listener)));
  }

  events = this._events;
  if (events === undefined) return this;

  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = (0, _create2.default)(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }

    if (list.length === 1) events[type] = list[0];

    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;

  events = this._events;
  if (events === undefined) return this;

  // not listening for removeListener, no need to emit
  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = (0, _create2.default)(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = (0, _create2.default)(null);else delete events[type];
    }
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    var keys = (0, _keys2.default)(events);
    var key;
    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = (0, _create2.default)(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined) return [];

  var evlistener = events[type];
  if (evlistener === undefined) return [];

  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i) {
    copy[i] = arr[i];
  }return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) {
    list[index] = list[index + 1];
  }list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

/***/ }),

/***/ "./src/thirdparty/runtime.js":
/*!***********************************!*\
  !*** ./src/thirdparty/runtime.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _setPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/set-prototype-of */ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _create = __webpack_require__(/*! babel-runtime/core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _symbol = __webpack_require__(/*! babel-runtime/core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var regeneratorRuntime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof _symbol2.default === "function" ? _symbol2.default : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = (0, _create2.default)(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = _getPrototypeOf2.default;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = (0, _create2.default)(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (_setPrototypeOf2.default) {
      (0, _setPrototypeOf2.default)(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = (0, _create2.default)(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && (typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === "object" && hasOwn.call(value, "__await")) {
          return _promise2.default.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return _promise2.default.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new _promise2.default(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;
}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : (0, _typeof3.default)(module)) === "object" ? module.exports : {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/thirdparty/utils.js":
/*!*********************************!*\
  !*** ./src/thirdparty/utils.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Generates a random positive integer.
 *
 * @returns {Number}
 */
exports.generateRandomNumber = function () {
	return Math.round(Math.random() * 10000000);
};

exports.guid = function () {
	function S4() {
		return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
	}

	var s1 = S4();
	var s2 = S4();
	var s3 = S4();
	var s4 = S4();
	var s5 = S4();
	var s6 = S4();
	var s7 = S4();
	var s8 = S4();

	return '' + s1 + s2 + '-' + s3 + '-' + s4 + '-' + s5 + '-' + s1 + s1 + s1;
	//	return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};

// ^((https|http|ftp|rtmp|rtsp|mms)?://)?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*\'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$
exports.isURL = function (url) {
	var strRegex = '^((https|http|ftp|rtmp|rtsp|mms)?://)' + '?(([0-9a-zA-Z_!~*\'().&=+$%-]+: )?[0-9a-zA-Z_!~*\'().&=+$%-]+@)?' //ftp的user@ 
	+ '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184 
	+ '|' // 允许IP和DOMAIN（域名） 
	+ '([0-9a-zA-Z_!~*\'()-]+.)*' // 域名- www. 
	+ '([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].' // 二级域名 
	+ '[a-zA-Z]{2,6})' // first level domain- .com or .museum 
	+ '(:[0-9]{1,4})?' // 端口- :80 
	+ '((/?)|' // a slash isn't required if there is no file name 
	+ '(/[0-9a-zA-Z_!~*\'().;?:@&=+$,%#-]+)+/?)$';
	var re = new RegExp(strRegex);

	if (re.test(url)) {
		return true;
	} else {
		return false;
	}
};

/***/ }),

/***/ "./src/utils/EnhancedEventEmitter.js":
/*!*******************************************!*\
  !*** ./src/utils/EnhancedEventEmitter.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _runtime = __webpack_require__(/*! ../thirdparty/runtime.js */ "./src/thirdparty/runtime.js");

var _runtime2 = _interopRequireDefault(_runtime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(/*! ../thirdparty/events.js */ "./src/thirdparty/events.js"),
    EventEmitter = _require.EventEmitter;

var Logger = __webpack_require__(/*! ./Logger */ "./src/utils/Logger.js");

var EnhancedEventEmitter = function (_EventEmitter) {
	(0, _inherits3.default)(EnhancedEventEmitter, _EventEmitter);

	function EnhancedEventEmitter(logger) {
		(0, _classCallCheck3.default)(this, EnhancedEventEmitter);

		var _this = (0, _possibleConstructorReturn3.default)(this, (EnhancedEventEmitter.__proto__ || (0, _getPrototypeOf2.default)(EnhancedEventEmitter)).call(this));

		_this.setMaxListeners(Infinity);

		_this._logger = logger || new Logger('EnhancedEventEmitter');
		_this._logger.prefix = '-';
		return _this;
	}

	(0, _createClass3.default)(EnhancedEventEmitter, [{
		key: 'safeEmit',
		value: function safeEmit(event) {
			try {
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				this.emit.apply(this, [event].concat(args));
			} catch (error) {
				this._logger.error('safeEmit() | event listener threw an error. event: ', event, ' error: ', error);
			}
		}
	}, {
		key: 'safeEmitAsPromise',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var _this2 = this;

				for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
					args[_key2 - 1] = arguments[_key2];
				}

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
									_this2.safeEmit.apply(_this2, [event].concat((0, _toConsumableArray3.default)(args), [resolve, reject]));
								}));

							case 1:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function safeEmitAsPromise(_x) {
				return _ref.apply(this, arguments);
			}

			return safeEmitAsPromise;
		}()
	}]);
	return EnhancedEventEmitter;
}(EventEmitter);

module.exports = EnhancedEventEmitter;

/***/ }),

/***/ "./src/utils/IPLocation.js":
/*!*********************************!*\
  !*** ./src/utils/IPLocation.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _map = __webpack_require__(/*! babel-runtime/core-js/map */ "./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WxWebSocket = __webpack_require__(/*! ./WxWebSocket.js */ "./src/utils/WxWebSocket.js");
var Logger = __webpack_require__(/*! ./Logger.js */ "./src/utils/Logger.js");
var EnhancedEventEmitter = __webpack_require__(/*! ./EnhancedEventEmitter.js */ "./src/utils/EnhancedEventEmitter.js");
var config = __webpack_require__(/*! ../config.js */ "./src/config.js");
var retry = __webpack_require__(/*! ../retry/retry.js */ "./src/retry/retry.js");

var logger = new Logger('IPLocation');

// 最大重试次数
var MAX_RETRY = 10;

// IPLocation 总 timeout
var IP_FULL_TIMEOUT = 15000; // 15s

// 状态
// {
var IPL_STATE_IDLE = 0; // 初始/关闭状态
var IPL_STATE_STARTING = 1; // 启动中
var IPL_STATE_ACT = 2; // 已连接/正常启动
var IPL_STATE_RETRYING = 3; // 重试中
// }

// 定义 连接失败/断网 的相关retry参数
var DEFAULT_RETRY_OPTIONS = {
	retries: MAX_RETRY, // 连续重试次数
	factor: 2, // 递增超时放大倍数
	minTimeout: 1 * 1000, // 
	maxTimeout: 8 * 1000
};

// TODO : retry while connect fail or no-response 
// 使用 retry 模块实现失败重试

var IPLocation = function (_EnhancedEventEmitter) {
	(0, _inherits3.default)(IPLocation, _EnhancedEventEmitter);

	/**
  * @param {Object} [options] - Options for WebSocket-Node.W3CWebSocket and retry.
  */
	function IPLocation(options) {
		(0, _classCallCheck3.default)(this, IPLocation);

		// Options.
		// @type {Object}
		var _this = (0, _possibleConstructorReturn3.default)(this, (IPLocation.__proto__ || (0, _getPrototypeOf2.default)(IPLocation)).call(this, logger));

		_this._options = options || {};

		// 日志追踪用
		_this._logClues = options.logClues;

		// 用来标识本次会话
		_this._sid = options.sid;

		// WebSocket instance.
		// @type {WebSocket}
		_this._ws = null;

		_this._operation = null;

		// Map of pending sent request objects indexed by request id.
		// @type {Map<Number, Object>}
		_this._sents = new _map2.default();

		// 用来标识是否调用了 close ?
		_this._stopping = false;

		// 当前状态
		_this._state = IPL_STATE_IDLE;

		_this._iplocTimer = null;
		// 是否已 got
		_this._hasGot = false;

		// 事务是否已正常完成
		_this._isTPFinish = false;

		// 
		_this._randomId = 0;
		return _this;
	}

	(0, _createClass3.default)(IPLocation, [{
		key: 'init',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(opts) {
				var _this2 = this;

				var url, appId, userId, iplocProc, iplocTimerPro;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!(this._state !== IPL_STATE_IDLE)) {
									_context.next = 2;
									break;
								}

								return _context.abrupt('return');

							case 2:
								url = opts.url, appId = opts.appId, userId = opts.userId;


								this._url = url;
								this._appId = appId;
								this._userId = userId;

								_context.prev = 6;

								this._hasGot = false;

								// 
								this._stopping = false;

								this._state = IPL_STATE_STARTING;

								// 
								iplocProc = new _promise2.default(function (resolve, reject) {
									// 
									_this2.runIploc();
								});
								iplocTimerPro = new _promise2.default(function (resolve, reject) {
									_this2._iplocTimer = setTimeout(function () {
										reject({
											code: 500,
											reason: 'iplocation timeout'
										});
									}, IP_FULL_TIMEOUT);
								});


								_promise2.default.race([iplocProc, iplocTimerPro]).then(function (result) {}).catch(function (e) {
									_this2.close();

									_this2.safeEmit('failed', {
										sid: _this2._sid,
										code: 500,
										reason: 'iplocation FIN failed'
									});
								});
								// 
								_context.next = 18;
								break;

							case 15:
								_context.prev = 15;
								_context.t0 = _context['catch'](6);
								throw new Error(_context.t0);

							case 18:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this, [[6, 15]]);
			}));

			function init(_x) {
				return _ref.apply(this, arguments);
			}

			return init;
		}()
	}, {
		key: 'onMessage',
		value: function onMessage(resp) {
			// 标记为已 got，如此则超时定时到后，执行 resolve，否则将执行 reject
			this._hasGot = true;

			// 清除定时器
			clearTimeout(this._iplocTimer);

			// 
			var sent = this._sents.get(1);

			if (!sent) {
				logger.error('IPLocation onMessage received response does not match any sent request [id:%s]', 1);

				return;
			}

			sent.resolve(resp);
		}
	}, {
		key: 'request',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(opts) {
				var _this3 = this;

				var host, appId, userId, sid, iplocationData;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								host = opts.host, appId = opts.appId, userId = opts.userId, sid = opts.sid;

								// 

								_context2.prev = 1;

								if (Boolean(this._ws) && this._state === IPL_STATE_ACT) {
									// 
									iplocationData = {
										eType: 1,
										sSEQID: '111111111',
										mProtocolMsg: {
											sVersion: 'Test_4.2.0.777',
											bLoadBalance: false,
											bReConnect: false,
											bVipUser: false,
											sIDentify: '7B4FCDBC0914E7182B8EC357F07498F1',
											sSecret: 'c052cd055acfabc5',
											sVerifyCode: 'abcd',
											sAppID: appId,
											nUserID: parseInt(userId),
											sClientVer: 'miniapp_1.0',
											sConnectID: sid,
											mIpAddrMsg: {
												bFec: false,
												sIp: host,
												nPort: 0
											}
										}
									};


									logger.debug('IPLocation request() ws.send: ' + (0, _stringify2.default)(iplocationData));

									this._ws.send({ msg: (0, _stringify2.default)(iplocationData) });
								}
								_context2.next = 9;
								break;

							case 5:
								_context2.prev = 5;
								_context2.t0 = _context2['catch'](1);

								logger.error('IPLocation request() ws.send failed. error: ', _context2.t0);

								return _context2.abrupt('return', _promise2.default.reject(new Error('WebSocket send failed')));

							case 9:
								return _context2.abrupt('return', new _promise2.default(function (_resolve, _reject) {
									var requestId = 1;
									var method = 'request';
									var timeout = 1500 * (15 + 0.1 * _this3._sents.size);
									var sent = {
										id: requestId, // 此字段固定为1
										method: method,
										resolve: function resolve(data2) {
											if (!_this3._sents.delete(1)) {
												return;
											}

											clearTimeout(sent.timer);

											logger.debug('IPLocation request[method: ', method, '] resolve. response: ', data2);

											_resolve(data2);
										},
										reject: function reject(error) {
											logger.debug('IPLocation request[method: ' + method + '] reject.');

											if (!_this3._sents.delete(requestId)) return;

											clearTimeout(sent.timer);
											_reject(error);
										},
										timer: setTimeout(function () {
											logger.error('IPLocation request[method: %s] reject.', method);

											if (!_this3._sents.delete(requestId)) return;

											_reject(new Error('Request Timeout.'));
										}, timeout),
										close: function close() {
											logger.error('IPLocation request[method: %s] close.', method);

											clearTimeout(sent.timer);
											_reject(new Error('Peer Closed'));
										}
									};

									// Add sent stuff to the map.
									_this3._sents.set(requestId, sent);
								}));

							case 10:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this, [[1, 5]]);
			}));

			function request(_x2) {
				return _ref2.apply(this, arguments);
			}

			return request;
		}()

		// 如果当前为非人为主观断开，则会尝试一定次数的重试
		// 若需要重试，则在连续重试N次仍未成功连接，则向上层报 "最终失败"
		// 若无需重试，则直接向上层报 "close"

	}, {
		key: 'onWsClose',
		value: function onWsClose(opts) {
			// 
			if (this._hasGot) {
				return;
			}

			// 
			var event = opts.event,
			    currentAttempt = opts.currentAttempt;

			// Don't retry if code is 4000 (closed by the server).
			// 4000 -- closed by server
			// 1000 -- normal closure

			if (event.code !== 4000 && event.code !== 1000) {
				if (this._stopping) // 上层主动关闭，故不再尝试重连，且通知上层
					{
						logger.debug('IPLocation onWsClose() -- [event.code:' + event.code + '] [this._state: ' + this._state + ']');

						// 
						this._operation.stop();

						/* 2019.7.18 在此wxwebsocket已断开，此处无需再执行closeTransport
      this.closeTransport();
      */

						this._state = IPL_STATE_IDLE;

						this.safeEmit('close', {
							sid: this._sid
						});

						return;
					} else if (this._state !== IPL_STATE_ACT) // 尝试重连
					{
						this._state = IPL_STATE_RETRYING; // 设定为：当前正在重试

						if (this._operation.retry(true)) {
							logger.debug('IPLocation onWsClose() -- [event.code: ' + event.code + ']. retrying.');

							// 通知上层：当前正在尝试自动重连
							this.safeEmit('auto-reconnecting', {
								sid: this._sid
							});
						} else {
							logger.error('IPLocation onWsClose() -- [event.code: ' + event.code + ']. FINAL FAILED.');

							// 
							this._operation.stop();
							// 
							this._state = IPL_STATE_IDLE;
							// 当尝试完所有重试，仍未 ok，则向上层触发 failed，携带 event:{code: 500}
							this.safeEmit('failed', {
								sid: this._sid,
								code: 500,
								reason: 'iplocation FIN failed'
							});
						}

						return;
					}
					// 如果当前已连接，则应重新建立连接??
				else if (this._state === IPL_STATE_ACT) {
						logger.debug('IPLocation onWsClose() -- [event.code: ' + event.code + '] [this._wstState: IPL_STATE_ACT]. so FULL-reconnect.');

						// 
						this._operation.stop();
						// 
						this._state = IPL_STATE_RETRYING; // 设定为：当前正在重试

						// 通知上层：当前正在尝试自动重连
						this.safeEmit('auto-reconnecting', {
							sid: this._sid
						});

						this.runIploc();
					} else {
						logger.debug('IPLocation onWsClose() -- [event.code: ' + event.code + '] [this._wstState: IPL_STATE_ACT]. so FULL-reconnect.');
					}
			} else {
				logger.debug('IPLocation onWsClose() -- [event.code: ' + event.code + ']. this._state: ' + this._state + '. stop.');

				// 
				this._operation.stop();

				// 
				/* 2019.7.18 在此wxwebsocket已断开，此处无需再执行closeTransport
    this.closeTransport();
    */

				this._state = IPL_STATE_IDLE;

				// 此种情况下，才直接向上层触发 'close' 事件
				// Emit 'close' event.
				this.safeEmit('close', {
					sid: this._sid
				});
			}
		}
	}, {
		key: 'runIploc',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
				var _this4 = this;

				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								this._operation = retry.operation(this._options.retry || DEFAULT_RETRY_OPTIONS);

								if (this._operation) {
									_context4.next = 4;
									break;
								}

								logger.error('IPLocation runIploc() Internal error.');

								throw new Error('Internal error');

							case 4:

								logger.debug('IPLocation runIploc attempt connect to : ' + this._url);

								this._operation.attempt(function (currentAttempt) {
									// 
									_this4.closeTransport();
									// 

									// 如果上层调用了 close
									if (_this4._stopping) {
										_this4._operation.stop();

										return;
									}

									logger.debug('IPLocation runIploc attempt connect to : ' + _this4._url + ' currentAttempt: ' + currentAttempt);

									// 
									_this4._randomId = Math.round(Math.random() * 10000000);

									// 
									_this4._ws = new WxWebSocket(_this4._randomId, logger);

									if (Boolean(_this4._ws)) {
										// 监听 wx websocket 模块事件
										_this4._ws.on('open', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
											var iplocRes, miniappHome, auAccess;
											return _regenerator2.default.wrap(function _callee3$(_context3) {
												while (1) {
													switch (_context3.prev = _context3.next) {
														case 0:
															if (!_this4._stopping) {
																_context3.next = 3;
																break;
															}

															logger.debug('IPLocation event[open] -- open after stopping.');

															return _context3.abrupt('return');

														case 3:
															// 
															_this4._state = IPL_STATE_ACT;
															// 

															logger.debug('IPLocation ws event[open] -- this._state: ' + _this4._state);

															// 
															_context3.next = 7;
															return _this4.request({
																host: 'stech.3ttech.cn', // 这一参数在 小程序方案中并没有实际意义
																appId: _this4._appId,
																userId: _this4._userId,
																sid: _this4.sid
															});

														case 7:
															iplocRes = _context3.sent;


															// 
															logger.warn('IPLocation -- result: ' + (0, _stringify2.default)(iplocRes));

															// 
															// miniappHome 为本 miniapp 的归属au
															miniappHome = iplocRes.mProtocolMsg.mIpAddrMsg.sDomain;
															auAccess = config.miniauHost;

															// 两种方案：
															// 1. 小程序访问服务器的入口 为 wss://xxx.xxx.xxx/miniappau-${miniappHome} -- 注：其中 miniappHome 要进行转置，确保格式合乎 url 规范
															// xxx.xxx.xxx 上部署有 nginx，根据 url path 中的 ${miniappHome}，执行 proxy
															// 2. 小程序直接访问 miniappHome

															if (miniappHome != null && miniappHome !== '' && typeof miniappHome !== 'undefined') {
																// 1. 方案1 auAccess = `${config.miniauHost}-${miniappHome}`;
																// 
																// 2. 方案2 
																auAccess = '' + miniappHome;
															} else {
																logger.error('IPLocation -- error: miniappHome: ' + miniappHome);

																_this4.safeEmit('failed', {
																	sid: _this4._sid,
																	code: 500,
																	reason: 'miniappHome: ' + miniappHome
																});
															}

															//
															// 事务已完成
															_this4._isTPFinish = true;

															_this4.safeEmit('ok', {
																sid: _this4._sid,
																auAccess: auAccess
															});

														case 14:
														case 'end':
															return _context3.stop();
													}
												}
											}, _callee3, _this4);
										})));

										// 
										_this4._ws.on('message', function (event) {
											var resp = JSON.parse(event.data);

											// 
											_this4.onMessage(resp);
										});

										_this4._ws.on('error', function (event) {
											logger.error('IPLocation ws event[error] -- this._state: ', _this4._state, ' event: ', event);

											//
										});

										_this4._ws.on('close', function (event) {
											_this4.onWsClose({
												event: event,
												currentAttempt: currentAttempt
											});
										});

										logger.debug('IPLocation runIploc() [currentAttempt: ' + currentAttempt + ']. try to connect: ' + _this4._url);

										// connect server
										_this4._ws.connect({
											url: _this4._url,
											success: function success(res) {},
											fail: function fail(res) {
												logger.error('IPLocation ws.connect failed. error: ', res);

												_this4.safeEmit('failed', {
													sid: _this4._sid,
													code: 500,
													reason: 'ws.connect failed'
												});
											}
										});
									} else {
										logger.error('IPLocation WebSocket create failed.');

										_this4.safeEmit('failed', {
											sid: _this4._sid,
											code: 500,
											reason: 'WebSocket create failed'
										});
									}
								});

							case 6:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function runIploc() {
				return _ref3.apply(this, arguments);
			}

			return runIploc;
		}()
	}, {
		key: 'closeTransport',
		value: function closeTransport() {
			// Close every pending sent.
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = (0, _getIterator3.default)(this._sents.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var sent = _step.value;

					sent.close();
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			var code = 1000;
			var reason = 'close connection';

			try {
				if (Boolean(this._ws)) {
					this._ws.close({
						code: code,
						reason: reason
					});
				}
			} catch (error) {
				logger.error('IPLocation closeTransport() failed. Closing the WebSocket error: ' + (0, _stringify2.default)(error));
			}
		}
	}, {
		key: 'close',
		value: function close() {
			// Don't wait for the WebSocket 'close' event, do it now.
			this._stopping = true;

			logger.debug('IPLocation close()');

			if (this._state === IPL_STATE_IDLE) {
				return;
			}

			this.closeTransport();

			// 
			this._operation.stop();
			// 
			this._state = IPL_STATE_IDLE;
		}
	}]);
	return IPLocation;
}(EnhancedEventEmitter);

module.exports = IPLocation;

/***/ }),

/***/ "./src/utils/Logger.js":
/*!*****************************!*\
  !*** ./src/utils/Logger.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = __webpack_require__(/*! ../thirdparty/debug.js */ "./src/thirdparty/debug.js");

var APP_NAME = 'tttminiappsdk';

var LOG_NONE = 0;
var LOG_ERROR = 1;
var LOG_WARN = 2;
var LOG_INFO = 3;
var LOG_DEBUG = 4;
var LOG_TRACE = 5;

var Logger = function () {
	function Logger(prefix) {
		(0, _classCallCheck3.default)(this, Logger);

		// 
		this._appId = '';
		this._roomId = '';
		this._userId = '';
		this._logClues = '';
		this._prefix = '';

		this._logLevel = LOG_DEBUG;

		// 
		if (prefix) {
			this._debug = debug(APP_NAME + ':' + prefix);
			this._warn = debug(APP_NAME + ':WARN:' + prefix);
			this._error = debug(APP_NAME + ':ERROR:' + prefix);

			// 
			this._prefix = prefix;
		} else {
			this._debug = debug(APP_NAME);
			this._warn = debug(APP_NAME + ':WARN');
			this._error = debug(APP_NAME + ':ERROR');
		}

		/* eslint-disable no-console */
		// this._debug.log = console.info.bind(console);
		// this._warn.log = console.warn.bind(console);
		// this._error.log = console.error.bind(console);
		/* eslint-enable no-console */
		// 
		this._debug = this._logDebug;
		this._warn = this._logWarn;
		this._error = this._logError;
	}

	(0, _createClass3.default)(Logger, [{
		key: 'setParameters',
		value: function setParameters(opts) {
			var appId = opts.appId,
			    roomId = opts.roomId,
			    userId = opts.userId,
			    logClues = opts.logClues;

			// 

			this._appId = appId;
			this._roomId = roomId;
			this._userId = userId;
			this._logClues = logClues;
		}

		// 

	}, {
		key: '_logDebug',
		value: function _logDebug() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			this.postLog.apply(this, [LOG_DEBUG].concat(args));
		}
	}, {
		key: '_logWarn',
		value: function _logWarn() {
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			this.postLog.apply(this, [LOG_WARN].concat(args));
		}
	}, {
		key: '_logError',
		value: function _logError() {
			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			this.postLog.apply(this, [LOG_ERROR].concat(args));
		}
	}, {
		key: 'postLog',
		value: function postLog(logLevel) {
			// 
			var appId = this._appId;
			var roomId = this._roomId;
			var userId = this._userId;

			var preMsg = 'appid=' + appId + ', roomid=' + roomId + ', userid=' + userId + ' time=' + new Date() + ' logClues=' + this._logClues + ' <' + this._prefix + '>';
			var msg = '';

			for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
				args[_key4 - 1] = arguments[_key4];
			}

			[].slice.apply(args).forEach(function (element) {
				if ((typeof element === 'undefined' ? 'undefined' : (0, _typeof3.default)(element)) === 'object') {
					var s = (0, _stringify2.default)(element);

					msg = msg + ' ' + s;
				} else {
					msg = msg + ' ' + element;
				}
			});

			wx.request({
				url: 'https://log.wushuangtech.com:15100',
				method: 'POST',
				data: 'event=' + APP_NAME + ' ' + preMsg + ' ' + msg,
				header: {
					'Content-Type': 'text/plain; charset=utf-8'
				},
				success: function success(res) {}
			});

			// to logurl2
			// TODO : 

			/*
   wx.request({
   	url    : 'https://api3tclass.3ttech.cn/edu/exception',
   	method : 'POST',
   	data   : {
   		message : msg,
   		type    : 'miniappsdk',
   		level   : logLevel,
   		classId : roomId,
   		UID     : userId
   	},
   	header : {
   		'content-type' : 'application/x-www-form-urlencoded;charset=UTF-8'
   	},
   	success(res)
   	{
   	}
   });
   */

			// 同时，输出到控制台
			/* eslint-disable no-console */
			if (logLevel < this._logLevel) {
				console.log('time=' + new Date() + ' ' + msg);
			}
			/* eslint-enable no-console */
		}
	}, {
		key: 'logLevel',
		set: function set(logLevel) {
			switch (logLevel) {
				case 'LOG_NONE':
					this._logLevel = LOG_NONE;
					break;
				case 'LOG_ERROR':
					this._logLevel = LOG_ERROR;
					break;
				case 'LOG_WARN':
					this._logLevel = LOG_WARN;
					break;
				case 'LOG_INFO':
					this._logLevel = LOG_INFO;
					break;
				case 'LOG_DEBUG':
					this._logLevel = LOG_DEBUG;
					break;
				case 'LOG_TRACE':
					this._logLevel = LOG_TRACE;
					break;
				default:
					this._logLevel = LOG_DEBUG;
			}
		}
	}, {
		key: 'debug',
		get: function get() {
			return this._debug;
		}
	}, {
		key: 'warn',
		get: function get() {
			return this._warn;
		}
	}, {
		key: 'error',
		get: function get() {
			return this._error;
		}
	}, {
		key: 'prefix',
		set: function set(prefix) {
			if (!prefix) {
				return;
			}

			this._prefix = prefix;
		}
	}]);
	return Logger;
}();

module.exports = Logger;

/***/ }),

/***/ "./src/utils/WxWebSocket.js":
/*!**********************************!*\
  !*** ./src/utils/WxWebSocket.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logger = __webpack_require__(/*! ./Logger.js */ "./src/utils/Logger.js");
var EnhancedEventEmitter = __webpack_require__(/*! ./EnhancedEventEmitter.js */ "./src/utils/EnhancedEventEmitter.js");

// 状态
// {
var WX_STATE_IDLE = 0; // 初始/关闭状态
var WX_STATE_STARTING = 1; // 启动中
var WX_STATE_ACT = 2; // 已连接/正常启动
var WX_STATE_STOPING = 3; // 停止中
// }

var WxWebSocket = function (_EnhancedEventEmitter) {
	(0, _inherits3.default)(WxWebSocket, _EnhancedEventEmitter);

	function WxWebSocket(randomId, logger) {
		(0, _classCallCheck3.default)(this, WxWebSocket);

		// 
		var _this = (0, _possibleConstructorReturn3.default)(this, (WxWebSocket.__proto__ || (0, _getPrototypeOf2.default)(WxWebSocket)).call(this, logger));

		_this._logger = logger || new Logger('WxWebSocket');
		_this._logger.prefix = '-';

		// 连接状态
		_this._connState = WX_STATE_IDLE;

		// 是否主动 close ??
		_this._stopping = false;

		// socket发送的消息队列
		/* 暂不启用该缓存队列
  this._msgQueue = [];
  */

		// 重连定时器 -- 不再此处执行重连（外部已处理）
		// this._connectSocketTimeOut = null;

		_this._socketTask = null;
		// 

		// 
		_this._randomId = randomId;
		return _this;
	}

	/**
  * 创建一个 WebSocket 连接
  * @param {options} 
  *   url          String    是    开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名
  *   header        Object    否    HTTP Header , header 中不能设置 Referer
  *   method        String    否    默认是GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  *   protocols    StringArray    否    子协议数组    1.4.0
  *   success      Function    否    接口调用成功的回调函数
  *   fail         Function    否    接口调用失败的回调函数
  *   complete      Function    否    接口调用结束的回调函数（调用成功、失败都会执行）
  */


	(0, _createClass3.default)(WxWebSocket, [{
		key: 'connect',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(options) {
				var _this2 = this;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								this._stopping = false;

								//
								this._connState = WX_STATE_STARTING;

								/* 暂不启用该缓存队列
        this._msgQueue = [];
        */

								_context.prev = 2;

								this._logger.debug('WxWebSocket connect() -- wx.connectSocket url: ' + options.url);

								/* eslint-disable no-undef */
								this._socketTask = wx.connectSocket({
									/* eslint-enable no-undef */
									url: options.url,
									header: {
										'content-type': 'application/json'
									},
									method: 'GET',
									success: function success(res) {
										if (options) {
											// 成功回调
											options.success && options.success(res);
										}

										_this2._logger.debug('WxWebSocket connect() -- wx.connectSocket call OK.');
									},
									fail: function fail(res) {
										if (options) {
											// 失败回调
											options.fail && options.fail(res);
										}

										_this2._connState = WX_STATE_IDLE;

										_this2._logger.warn('WxWebSocket connect() -- wx.connectSocket call FAIL.');
									},
									complete: function complete(res) {}
								});
								_context.next = 13;
								break;

							case 7:
								_context.prev = 7;
								_context.t0 = _context['catch'](2);

								options.fail && options.fail('EXCEPTION');

								this._connState = WX_STATE_IDLE;

								this._logger.warn('WxWebSocket connect() -- wx.connectSocket call EXCEPTION.');

								return _context.abrupt('return');

							case 13:
								_context.prev = 13;
								return _context.finish(13);

							case 15:

								// 
								if (Boolean(this._socketTask)) {
									this._socketTask.onClose(function (r) {
										return _this2.onSocketClose(r);
									});
									this._socketTask.onMessage(function (r) {
										return _this2.onSocketMessage(r);
									});
									this._socketTask.onError(function (r) {
										return _this2.onSocketError(r);
									});
									this._socketTask.onOpen(function (r) {
										return _this2.onSocketOpen(r);
									});
								}

							case 16:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this, [[2, 7, 13, 15]]);
			}));

			function connect(_x) {
				return _ref.apply(this, arguments);
			}

			return connect;
		}()

		/**
   * 通过 WebSocket 连接发送数据
   * @param {options} 
   *   data    String / ArrayBuffer    是    需要发送的内容
   *   success    Function    否    接口调用成功的回调函数
   *   fail    Function    否    接口调用失败的回调函数
   *   complete    Function    否    接口调用结束的回调函数（调用成功、失败都会执行）
   */

	}, {
		key: 'send',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(options) {
				var _this3 = this;

				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								if (options) {
									_context2.next = 3;
									break;
								}

								this._logger.debug('WxWebSocket send() invalid parameters -- options');

								return _context2.abrupt('return');

							case 3:

								this._logger.debug('WxWebSocket send() <<<<<< ' + options.msg);

								if (Boolean(this._socketTask) && this._connState === WX_STATE_ACT) {
									this._socketTask.send({
										data: options.msg,
										success: function success(res) {
											_this3._logger.debug('WxWebSocket send() -- call wx socketTask.send OK.');

											if (options) {
												options.success && options.success(res);
											}
										},
										fail: function fail(res) {
											_this3._logger.debug('WxWebSocket send() -- call wx socketTask.send FAIL.');

											if (options) {
												options.fail && options.fail(res);
											}
										}
									});
								} else {
									this._logger.debug('WxWebSocket send() error -- this._connState: ' + this._connState);

									/* 暂不启用该缓存队列
         this._msgQueue.push(options.msg);
         */
								}

							case 5:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function send(_x2) {
				return _ref2.apply(this, arguments);
			}

			return send;
		}()

		/**
   * 关闭 WebSocket 连接。
   * @param {opts} 
   *   code    Number    否    一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）
   *   reason    String    否    一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的UTF-8 文本（不是字符）
   *   fail    Function    否    接口调用失败的回调函数
   *   complete    Function    否    接口调用结束的回调函数（调用成功、失败都会执行）
   */

	}, {
		key: 'close',
		value: function close(opts) {
			this._logger.warn('WxWebSocket close() -- will call closeInner().');

			this._stopping = true;

			this._connState = WX_STATE_STOPING;

			this.closeInner(opts);
		}
	}, {
		key: 'closeInner',
		value: function closeInner(opts) {
			/*
   if (this._connectSocketTimeOut)
   {
   	clearTimeout(this._connectSocketTimeOut);
   	this._connectSocketTimeOut = null;
   }
   */
			var code = opts.code,
			    reason = opts.reason,
			    success = opts.success,
			    fail = opts.fail;


			if (Boolean(this._socketTask) && this._connState !== WX_STATE_IDLE) {
				this._logger.warn('WxWebSocket closeInner() -- call wx socketTask.close.');

				this._socketTask.close({
					code: code,
					reason: reason,
					success: success,
					fail: fail

					/*
     success : (res) =>
     {
     	this._logger.debug('WxWebSocket socket closed.');
     	if (opts)
     	{
     		opts.success && opts.success(res);
     	}
     },
     fail : (res) =>
     {
     	if (opts)
     	{
     		opts.fail && opts.fail(res);
     	}
     }
     */
				});
			}

			this._socketTask = null;
			this._connState = WX_STATE_IDLE;
		}

		// 
		// 监听WebSocket连接打开事件

	}, {
		key: 'onSocketOpen',
		value: function onSocketOpen(res) {
			// 在尝试连接期间，外部调用了关闭function
			if (this._stopping) {
				this._logger.debug('WxWebSocket onSocketOpen() -- this._stopping is ture, will call closeInner().');
				this.closeInner({});
			} else {
				this._logger.debug('WxWebSocket onSocketOpen() -- will emit [open].');

				this._connState = WX_STATE_ACT;
				// 
				/* 暂不启用该缓存队列
    for (let i = 0; i < this._msgQueue.length; i++)
    {
    	this.send({ msg: this._msgQueue[i] });
    }
    this._msgQueue = [];
    */

				this.safeEmit('open', {
					randomId: this._randomId
				});
			}
		}

		// 监听WebSocket错误

	}, {
		key: 'onSocketError',
		value: function onSocketError(res) {
			this._logger.debug('WxWebSocket onSocketError() -- this._stopping: ' + this._stopping);

			this._connState = WX_STATE_IDLE;

			// 在此期间，上层调用了 停止，则不再发送 close 事件
			if (this._stopping) {
				/*
    // code : 1000 对于上层意味着不再尝试重连
    const evt = { wasClean: 'true', code: 1000, reason: res.errMsg };
    		this.safeEmit('close', evt);
    */
			} else {
				this.safeEmit('error', {
					randomId: this._randomId,
					res: res
				});
			}
		}

		// 监听WebSocket接受到服务器的消息事件

	}, {
		key: 'onSocketMessage',
		value: function onSocketMessage(event) {
			this._logger.debug('WxWebSocket onSocketMessage() >>>>>> message: ' + event.data);

			this.safeEmit('message', {
				randomId: this._randomId,
				data: event.data
			});
		}

		// 监听WebSocket关闭

	}, {
		key: 'onSocketClose',
		value: function onSocketClose(res) {
			/*
   if (this._connState !== WX_STATE_STOPING)
   {
   	clearTimeout(this._connectSocketTimeOut);
   	this._connectSocketTimeOut = setTimeout(() =>
   	{
   		this.connect();
   	}, 3000);
   }
   */

			this._logger.warn('WxWebSocket onSocketClose() -- this._stopping: ' + this._stopping);

			this._connState = WX_STATE_IDLE;

			if (this._stopping) {
				return;
			}

			this.safeEmit('close', {
				randomId: this._randomId,
				wasClean: 'true',
				code: res.code,
				reason: res.reason
			});
		}
	}]);
	return WxWebSocket;
}(EnhancedEventEmitter);

module.exports = WxWebSocket;

/***/ })

/******/ });
});
//# sourceMappingURL=3T_Miniapp_SDK_for_WeChat.js.map