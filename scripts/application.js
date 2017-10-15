/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** ./application.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// Libraries
	
	var _navbar = __webpack_require__(/*! ./navbar */ 1);
	
	// Application
	
	// ever page has a navbar... just create one on load
	__webpack_require__(/*! jquery */ 2);
	
	new _navbar.Navbar();

/***/ }),
/* 1 */
/*!*************************!*\
  !*** ./navbar/index.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var $ = __webpack_require__(/*! jquery */ 2);
	
	var SEL_BTN = '#ddv-menu-btn';
	var SEL_MENU = '.navmenu';
	var SEL_MENU_CLOSE = '.navmenu__close-btn';
	
	var Navbar = (function () {
	    function Navbar() {
	        _classCallCheck(this, Navbar);
	
	        if (!this.hasNavbar()) {
	            return;
	        }
	
	        console.log('Initializing navbar...');
	
	        $(SEL_BTN).click(function () {
	            $(SEL_MENU).toggleClass('open');
	        });
	
	        $(SEL_MENU_CLOSE).click(function () {
	            $(SEL_MENU).toggleClass('open');
	        });
	    }
	
	    _createClass(Navbar, [{
	        key: 'hasNavbar',
	        value: function hasNavbar() {
	            return $(SEL_BTN).length > 0;
	        }
	    }]);
	
	    return Navbar;
	})();
	
	exports.Navbar = Navbar;

/***/ }),
/* 2 */
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module, exports) {

	module.exports = jQuery;

/***/ })
/******/ ]);
//# sourceMappingURL=application.js.map