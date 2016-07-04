(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ngFiltersMasksBr"] = factory();
	else
		root["ngFiltersMasksBr"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// ###
	// # Module bundler
	// ###

	// Importing main module file
	__webpack_require__(2);

	// Importing all component's scripts
	var components = __webpack_require__(3);
	components.keys().forEach(components);

	var utils = __webpack_require__(6);
	utils.keys().forEach(utils);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	// =============================================
	// Vendors
	// =============================================

	angular.module("ngFiltersMasksBr.vendors", ['ngSanitize']);

	// =============================================
	// Modules
	// =============================================
	angular.module("ngFiltersMasksBr.controllers", ["ngFiltersMasksBr.vendors"]);
	angular.module("ngFiltersMasksBr.filters", ["ngFiltersMasksBr.vendors"]);
	angular.module("ngFiltersMasksBr.factories", ["ngFiltersMasksBr.vendors"]);
	angular.module("ngFiltersMasksBr.constants", ["ngFiltersMasksBr.vendors"]);
	angular.module("ngFiltersMasksBr.services", ["ngFiltersMasksBr.vendors"]);
	angular.module("ngFiltersMasksBr.directives", ["ngFiltersMasksBr.vendors"]);
	angular.module("ngFiltersMasksBr.mocks", ["ngFiltersMasksBr.vendors"]);
	angular.module("ngFiltersMasksBr.configs", ["ngFiltersMasksBr.vendors"]);
	angular.module("ngFiltersMasksBr.providers", ["ngFiltersMasksBr.vendors"]);

	// =============================================
	// Scripts Module
	// =============================================
	angular.module("ngFiltersMasksBr.scripts", ["ngFiltersMasksBr.controllers", "ngFiltersMasksBr.constants", "ngFiltersMasksBr.filters", "ngFiltersMasksBr.factories", "ngFiltersMasksBr.services", "ngFiltersMasksBr.directives", "ngFiltersMasksBr.mocks", "ngFiltersMasksBr.providers", "ngFiltersMasksBr.configs"]);

	// =============================================
	// Main Module
	// =============================================
	angular.module("ngFiltersMasksBr", ["ngFiltersMasksBr.scripts", "ngFiltersMasksBr.vendors"]);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./cep/filter.js": 4,
		"./cep/filter.spec.js": 5
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 3;


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Filter
	 */
	angular.module('ngFiltersMasksBr.filters').filter('cep', cepFilter).filter('brCEP', cepFilter);

	/**
	 * @name cepFilter
	 * @description Traduz valores numéricos para o padrão de CEP brasileiro
	 * @returns {Function} Função de filtro
	 */
	function cepFilter() {

	  /**
	   * @param {String} input Valor a ser traduzido para o padrão de CEP
	   * @returns {String} str
	   */
	  return function (input) {
	    var str = input + '';
	    str = str.replace(/\D/g, '');
	    str = str.replace(/^(\d{2})(\d{3})(\d)/, '$1.$2-$3');
	    return str;
	  };
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	// empty (null-loader)
	"use strict";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./factory.js": 7,
		"./wildcards/emptyInputCharacter.constant.js": 8
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 6;


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Factory
	 */
	ngFMUtils.$inject = ["EMPTY_INPUT_CHARACTER"];
	angular.module('ngFiltersMasksBr.filters').factory('ngFMUtils', ngFMUtils);

	/**
	 * @name ngFMUtils
	 * @description Responsável por processos em comum em diversos componentes
	 * @returns {Object} API
	 */
	function ngFMUtils(EMPTY_INPUT_CHARACTER) {
	  return {

	    /**
	     * @name fillEmptyCharacters
	     * @description Com base no tamanho do padrão (patternLength),
	     * substitui os valores que ainda faltam por um coringa.
	     * @param {String} stringValue Valor atual qual será possívelmente alterado
	     * @param {Number} patternLength Tamanho do padrão
	     * @param {String} wildcard Coringa utilizado para substituir os valores que ainda faltam para completar o padrão
	     * @returns {String} Valor possívelmente alterado contendo os coringas
	     */
	    replaceEmptyValuesWith: function replaceEmptyValuesWith(stringValue, patternLength, wildcard) {
	      wildcard = wildcard || EMPTY_INPUT_CHARACTER;
	      var emptyValuesCount = patternLength - stringValue.length;

	      for (var i = 0; i < emptyValuesCount; i++) {
	        stringValue += wildcard;
	      }

	      return stringValue;
	    }
	  };
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Filter
	 */
	angular.module('ngFiltersMasksBr.constants').constant('EMPTY_INPUT_CHARACTER', '_');

/***/ }
/******/ ])
});
;