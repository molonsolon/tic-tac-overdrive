/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (max-width: 600px) {\n  #player-two-container > .player-select {\n    display: grid;\n    grid-template-rows: 5vh 20vh 10vh 5vh;\n    grid-row-gap: 5vh;\n    margin-top: -10vh;\n  }\n\n  #player-one-container > .player-select {\n    display: grid;\n    grid-template-rows: 5vh 10vh 10vh 5vh;\n    grid-row-gap: 5vh;\n  }\n\n  .player-select > img {\n    width: 180px;\n  }\n}\nhtml {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  font-size: 10px;\n}\n\ncss-doodle {\n  z-index: -100;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n#app-container {\n  display: grid;\n  grid-template-columns: 100vw 100vw 100vw;\n  grid-template-rows: 100vh;\n  gap: 50vw;\n  height: 100vh;\n  width: auto;\n  justify-content: center;\n  align-items: center;\n  margin-left: 200vw;\n}\n\n#intro-screen {\n  display: flex;\n  position: absolute;\n  width: 100vw;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 15vh;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.g-h1 {\n  font-size: 0.2rem;\n  color: rgba(255, 255, 255, 0.85);\n  font-family: \"Exo 2\", sans-serif;\n}\n\n.g-h2 {\n  font-size: 1rem;\n}\n\n.g-btn_label {\n  height: 7vh;\n  min-width: 15vw;\n  font-size: 2.8rem;\n  font-family: \"Kanit\", sans-serif;\n  color: white;\n  border-radius: 2%;\n  border-style: solid;\n  border-color: white;\n  border-width: 1px;\n  background-color: rgba(89, 0, 255, 0.363);\n  text-align: center;\n}\n\n.g-btn_label:hover {\n  background-color: rgba(89, 0, 255, 0.5);\n}\n\n.g-btn_container label {\n  padding-top: 1.5vh;\n}\n\n.g-btn_container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.g-btn_container input:checked ~ .g-btn_label {\n  background-color: rgba(89, 0, 255, 0.9);\n}\n\n#player-select-form {\n  display: grid;\n  z-index: 1;\n  width: 100%;\n  grid-template-areas: \"one submit two\";\n  grid-template-rows: 100vh;\n  grid-template-columns: repeat(3, 33.3%);\n  justify-items: center;\n  align-items: center;\n}\n\n#player-one-container {\n  display: grid;\n  grid-area: one;\n}\n#player-one-container .player-select .p1-x {\n  grid-row: 4;\n  grid-column: 1;\n}\n#player-one-container .player-select .p1-o {\n  grid-row: 4;\n  grid-column: 2;\n}\n\n#player-two-container {\n  display: grid;\n  grid-area: two;\n}\n\n#start-game-container {\n  display: grid;\n  grid-area: submit;\n  margin-top: 75vh;\n  height: 7vh;\n  width: 10vw;\n  justify-content: center;\n}\n\n.player-select {\n  display: grid;\n  grid-template-rows: 5vh 40vh 10vh 5vh;\n  grid-template-columns: 15vw 15vw;\n  align-items: center;\n  row-gap: 3vh;\n  column-gap: 0.8vw;\n}\n\n.player-select > img {\n  display: grid;\n  grid-column: 1/span 2;\n  grid-row: 2;\n  max-width: 380px;\n  height: auto;\n  opacity: 90%;\n  justify-self: left;\n  align-self: flex-end;\n  border: 3px solid black;\n  border-radius: 3px;\n  margin-top: -8vh;\n}\n\n#player-two-container img {\n  justify-self: right;\n}\n\n#player-one-name,\n#player-two-name {\n  display: grid;\n  grid-column: 1/span 2;\n  grid-row: 3;\n  height: 7vh;\n  font-size: 2.8rem;\n  width: 25vw;\n  background-color: rgba(65, 153, 6, 0.61);\n  color: white;\n  border: 3px greenyellow solid;\n  border-radius: 3px;\n}\n\n#player-two-name {\n  justify-self: right;\n}\n\n#difficulty-selector {\n  width: 20vw;\n  height: 7vh;\n  margin-top: -8vh;\n}\n\n#start-btn {\n  justify-self: center;\n}\n\n.selector-label {\n  color: white;\n  font-size: 2rem;\n  margin-top: -11vh;\n  font-family: \"Kanit\", sans-serif;\n  visibility: hidden;\n  justify-self: center;\n}\n\n#difficulty-selector {\n  font-size: 2rem;\n  color: white;\n  justify-self: center;\n  background-color: rgba(65, 153, 6, 0.61);\n  color: white;\n  border: 3px greenyellow solid;\n  border-radius: 3px;\n  font-family: \"Exo 2\", sans-serif;\n  visibility: hidden;\n}\n\n.player-toggle label {\n  padding-top: 1vh;\n}\n\n#time-mode-btn {\n  margin-top: -80vh;\n  width: 30vw;\n  height: 7vh;\n}\n\n#mode-selector {\n  margin-top: -73vh;\n  display: grid;\n  grid-template-rows: repeat(5, 7vh);\n  grid-template-columns: 15vw 15vw;\n  align-items: center;\n}\n\n.time-toggle {\n  grid-column: 1/span 2;\n}\n\n.time-label {\n  width: 30vw;\n}\n\n.countdown-timer {\n  z-index: 10;\n  position: fixed;\n  margin-top: 1000px;\n  font-size: 5rem;\n  color: white;\n  font-family: \"Exo 2\", sans-serif;\n}\n\n#timer {\n  z-index: 10;\n  position: fixed;\n  margin-top: 800px;\n  font-size: 5rem;\n  color: white;\n  font-family: \"Exo 2\", sans-serif;\n  visibility: hidden;\n}\n\n#game-container {\n  display: flex;\n  justify-content: center;\n  z-index: 0;\n}\n\n#restart-btn {\n  z-index: 10;\n  position: fixed;\n  margin-top: 1600px;\n  visibility: hidden;\n}\n\n#gameboard-container {\n  height: 100%;\n  display: grid;\n  grid-template-rows: repeat(3, 150px);\n  grid-template-columns: repeat(3, 150px);\n  margin-top: 1000px;\n  z-index: 0;\n  visibility: hidden;\n  box-shadow: rgba(126, 255, 46, 0.85) 10px 0px;\n}\n\n.board-space {\n  height: 150px;\n  width: 150px;\n  border: solid rgba(0, 0, 0, 0.85) 3px;\n  background: rgba(126, 255, 46, 0.85);\n  font-size: 5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#player-one-score {\n  margin-left: -60vw;\n}\n\n#player-two-score {\n  margin-left: 60vw;\n}\n\n#result-announce {\n  position: absolute;\n  color: white;\n  margin-top: 100vh;\n}\n\n.score-containers {\n  display: flex;\n  gap: 5px;\n  border: solid white 3px;\n  position: fixed;\n  height: 100px;\n  width: 30vw;\n  margin-top: 1600px;\n}\n\n.player-point {\n  height: 80px;\n  width: 4vw;\n  background-color: green;\n}\n\n.win-announce {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}", "",{"version":3,"sources":["webpack://./src/css/style.scss"],"names":[],"mappings":"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","sourcesContent":["$xs: \"480px\";\n$sm: \"600px\";\n$md: \"799px\";\n$lg: \"1010px\";\n$xl: \"1280px\";\n\n$media-expressions: (\n  screen: \"screen\",\n  handheld: \"handheld\",\n  retina2x: (\n    \"(-webkit-min-device-pixel-ratio: 2)\",\n    \"(min-resolution: 192dpi)\",\n  ),\n) !default;\n\n@mixin media-min($size) {\n  @media (min-width: $size) {\n    @content;\n  }\n}\n@mixin media-max($size) {\n  @media (max-width: $size) {\n    @content;\n  }\n}\n\n@include media-max($sm) {\n  #player-two-container > .player-select {\n    display: grid;\n    grid-template-rows: 5vh 20vh 10vh 5vh;\n    grid-row-gap: 5vh;\n    margin-top: -10vh;\n  }\n\n  #player-one-container > .player-select {\n    display: grid;\n    grid-template-rows: 5vh 10vh 10vh 5vh;\n    grid-row-gap: 5vh;\n  }\n\n  .player-select > img {\n    width: 180px;\n  }\n}\n\nhtml {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  font-size: 10px;\n}\n\ncss-doodle {\n  z-index: -100;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n#app-container {\n  display: grid;\n  grid-template-columns: 100vw 100vw 100vw;\n  grid-template-rows: 100vh;\n  gap: 50vw;\n  height: 100vh;\n  width: auto;\n  justify-content: center;\n  align-items: center;\n  margin-left: 200vw;\n}\n\n#intro-screen {\n  display: flex;\n  position: absolute;\n  width: 100vw;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 15vh;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.g-h1 {\n  font-size: 0.2rem;\n  color: rgba(255, 255, 255, 0.85);\n  font-family: \"Exo 2\", sans-serif;\n}\n\n.g-h2 {\n  font-size: 1rem;\n  \n}\n\n.g-btn_label {\n  height: 7vh;\n  min-width: 15vw;\n  // max-width: 14%;\n  font-size: 2.8rem;\n  font-family: \"Kanit\", sans-serif;\n  color: white;\n  border-radius: 2%;\n  border-style: solid;\n  border-color: white;\n  border-width: 1px;\n  background-color: rgba(89, 0, 255, 0.363);\n  text-align: center;\n}\n\n.g-btn_label:hover {\n  background-color: rgba(89, 0, 255, 0.5);\n}\n\n.g-btn_container label {\n  padding-top: 1.5vh;\n}\n.g-btn_container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.g-btn_container input:checked ~ .g-btn_label {\n  background-color: rgba(89, 0, 255, 0.9);\n}\n\n#player-select-form {\n  display: grid;\n  z-index: 1;\n  width: 100%;\n  grid-template-areas: \"one submit two\";\n  grid-template-rows: 100vh;\n  grid-template-columns: repeat(3, 33.3%);\n  justify-items: center;\n  align-items: center;\n}\n\n#player-one-container {\n  display: grid;\n  grid-area: one;\n  .player-select {\n    .p1-x {\n      grid-row: 4;\n      grid-column: 1;\n    }\n    .p1-o {\n      grid-row: 4;\n      grid-column: 2;\n    }\n  }\n}\n\n#player-two-container {\n  display: grid;\n  grid-area: two;\n}\n\n#start-game-container {\n  display: grid;\n  grid-area: submit;\n  margin-top: 75vh;\n  height: 7vh;\n  width: 10vw;\n  justify-content: center;\n}\n\n.player-select {\n  display: grid;\n  grid-template-rows: 5vh 40vh 10vh 5vh;\n  grid-template-columns: 15vw 15vw;\n  align-items: center;\n  row-gap: 3vh;\n  column-gap: 0.8vw;\n}\n\n.player-select > img {\n  display: grid;\n  grid-column: 1 / span 2;\n  grid-row: 2;\n  max-width: 380px;\n  height: auto;\n  opacity: 90%;\n  justify-self: left;\n  align-self: flex-end;\n  border: 3px solid black;\n  border-radius: 3px;\n  margin-top: -8vh;\n}\n\n#player-two-container img {\n  justify-self: right;\n}\n\n#player-one-name,\n#player-two-name {\n  display: grid;\n  grid-column: 1 / span 2;\n  grid-row: 3;\n  height: 7vh;\n  font-size: 2.8rem;\n  width: 25vw;\n  background-color: rgba(65, 153, 6, 0.61);\n  color: white;\n  border: 3px greenyellow solid;\n  border-radius: 3px;\n}\n\n#player-two-name {\n  justify-self: right;\n}\n\n#difficulty-selector {\n  width: 20vw;\n  height: 7vh;\n  margin-top: -8vh;\n}\n\n#start-btn {\n  justify-self: center;\n}\n\n.selector-label {\n  color: white;\n  font-size: 2rem;\n  margin-top: -11vh;\n  font-family: \"Kanit\", sans-serif;\n  visibility: hidden;\n  justify-self: center;\n}\n\n#difficulty-selector {\n  font-size: 2rem;\n  color: white;\n  justify-self: center;\n  background-color: rgba(65, 153, 6, 0.61);\n  color: white;\n  border: 3px greenyellow solid;\n  border-radius: 3px;\n  font-family: \"Exo 2\", sans-serif;\n  visibility: hidden;\n}\n\n.player-toggle label {\n  padding-top: 1vh;\n}\n\n#time-mode-btn {\n  margin-top: -80vh;\n  width: 30vw;\n  height: 7vh;\n}\n\n#mode-selector {\n  margin-top: -73vh;\n  display: grid;\n  grid-template-rows: repeat(5, 7vh);\n  grid-template-columns: 15vw 15vw;\n  align-items: center;\n}\n\n.time-toggle {\n  grid-column: 1 / span 2;\n}\n\n.time-label {\n  width: 30vw;\n}\n\n.countdown-timer {\n  z-index: 10;\n  position: fixed;\n  margin-top: 1000px;\n  font-size: 5rem;\n  color: white;\n  font-family: \"Exo 2\", sans-serif;\n}\n\n#timer {\n  z-index: 10;\n  position: fixed;\n  margin-top: 800px;\n  font-size: 5rem;\n  color: white;\n  font-family: \"Exo 2\", sans-serif;\n  visibility: hidden;\n}\n\n#game-container {\n  display: flex;\n  justify-content: center;\n  z-index: 0;\n}\n\n#restart-btn {\n  z-index: 10;\n  position: fixed;\n  margin-top: 1600px;\n  visibility: hidden;\n}\n\n#gameboard-container {\n  height: 100%;\n  display: grid;\n  grid-template-rows: repeat(3, 150px);\n  grid-template-columns: repeat(3, 150px);\n  margin-top: 1000px;\n  z-index: 0;\n  visibility: hidden;\n  box-shadow: hsla(97, 100%, 59%, 0.85) 10px 0px;\n}\n\n.board-space {\n  height: 150px;\n  width: 150px;\n  border: solid rgba(0, 0, 0, 0.85) 3px;\n  background: hsla(97, 100%, 59%, 0.85);\n  font-size: 5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#player-one-score {\n  margin-left: -60vw;\n}\n\n#player-two-score {\n  margin-left: 60vw;\n}\n\n#result-announce {\n  position: absolute;\n  color: white;\n  margin-top: 100vh;\n}\n\n.score-containers {\n  display: flex;\n  gap: 5px;\n  border: solid white 3px;\n  position: fixed;\n  height: 100px;\n  width: 30vw;\n  margin-top: 1600px;\n}\n\n.player-point {\n  height: 80px;\n  width: 4vw;\n  background-color: green;\n}\n\n.win-announce {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSPlugin": () => (/* binding */ CSSPlugin),
/* harmony export */   "default": () => (/* binding */ CSSPlugin),
/* harmony export */   "_getBBox": () => (/* binding */ _getBBox),
/* harmony export */   "_createElement": () => (/* binding */ _createElement),
/* harmony export */   "checkPrefix": () => (/* binding */ _checkPropPrefix)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.8.0
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(?:left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _pluginInitted = 1;
  }
},
    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;

  _docElement.appendChild(svg);

  svg.appendChild(this);
  this.style.display = "block";

  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox; //store the original

      this.getBBox = _getBBoxHack;
    } catch (e) {}
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }

  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }

  _docElement.removeChild(svg);

  this.style.cssText = oldCSS;
  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }

  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time) {
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
  } else {
    (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
    parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

    parent.appendChild(_tempDiv);
    px = _tempDiv[measureProperty];
    parent.removeChild(_tempDiv);
    style.position = "absolute";

    if (horizontal && toPercent) {
      cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
      cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
      cache.width = parent[measureProperty];
    }
  }

  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  //note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      relative,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (end === "auto") {
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    target.style[prop] = start;
  }

  a = [start, end];

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
  endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

        if (relative) {
          endValue = endValue.substr(2);
        }

        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: relative ? relative * endNum : endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
      addedToDOM = 1; //flag

      nextSibling = target.nextSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));
  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin"); // if origin is 0,0 and cache.uncache is true, let the recorded data-svg-origin stay. Otherwise, whenever we set cache.uncache to true, we'd need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
      scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
  cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
  cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
  cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
  cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
    a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
    a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
    a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
  var cap = 360,
      isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = relative ? endNum * relative : endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
      endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority;
    _pluginInitted || _initCore();

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;

        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue) && (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p]); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? relative * endNum : endNum - cache.scaleY) || 0);
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, endValue, relative);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], endValue, index, targets);
          } else {
            (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, endValue);
        }

        props.push(p);
      }
    }

    hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;

(function (positionAndScale, rotation, others, aliases) {
  var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
});

_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);


/***/ }),

/***/ "./node_modules/gsap/TextPlugin.js":
/*!*****************************************!*\
  !*** ./node_modules/gsap/TextPlugin.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextPlugin": () => (/* binding */ TextPlugin),
/* harmony export */   "default": () => (/* binding */ TextPlugin)
/* harmony export */ });
/* harmony import */ var _utils_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/strings.js */ "./node_modules/gsap/utils/strings.js");
/*!
 * TextPlugin 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var gsap,
    _tempDiv,
    _getGSAP = function _getGSAP() {
  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
};

var TextPlugin = {
  version: "3.8.0",
  name: "text",
  init: function init(target, value, tween) {
    var i = target.nodeName.toUpperCase(),
        data = this,
        _short,
        text,
        original,
        j,
        condensedText,
        condensedOriginal,
        aggregate,
        s;

    data.svg = target.getBBox && (i === "TEXT" || i === "TSPAN");

    if (!("innerHTML" in target) && !data.svg) {
      return false;
    }

    data.target = target;

    if (typeof value !== "object") {
      value = {
        value: value
      };
    }

    if (!("value" in value)) {
      data.text = data.original = [""];
      return;
    }

    data.delimiter = value.delimiter || "";
    original = (0,_utils_strings_js__WEBPACK_IMPORTED_MODULE_0__.splitInnerHTML)(target, data.delimiter, false, value.preserveSpaces);

    if (!_tempDiv) {
      _tempDiv = document.createElement("div");
    }

    _tempDiv.innerHTML = value.value;
    text = (0,_utils_strings_js__WEBPACK_IMPORTED_MODULE_0__.splitInnerHTML)(_tempDiv, data.delimiter);
    data.from = tween._from;

    if (data.from) {
      i = original;
      original = text;
      text = i;
    }

    data.hasClass = !!(value.newClass || value.oldClass);
    data.newClass = value.newClass;
    data.oldClass = value.oldClass;
    i = original.length - text.length;
    _short = i < 0 ? original : text;
    data.fillChar = value.fillChar || (value.padSpace ? "&nbsp;" : "");

    if (i < 0) {
      i = -i;
    }

    while (--i > -1) {
      _short.push(data.fillChar);
    }

    if (value.type === "diff") {
      j = 0;
      condensedText = [];
      condensedOriginal = [];
      aggregate = "";

      for (i = 0; i < text.length; i++) {
        s = text[i];

        if (s === original[i]) {
          aggregate += s;
        } else {
          condensedText[j] = aggregate + s;
          condensedOriginal[j++] = aggregate + original[i];
          aggregate = "";
        }
      }

      text = condensedText;
      original = condensedOriginal;

      if (aggregate) {
        text.push(aggregate);
        original.push(aggregate);
      }
    }

    if (value.speed) {
      tween.duration(Math.min(0.05 / value.speed * _short.length, value.maxDuration || 9999));
    }

    this.original = original;
    this.text = text;

    this._props.push("text");
  },
  render: function render(ratio, data) {
    if (ratio > 1) {
      ratio = 1;
    } else if (ratio < 0) {
      ratio = 0;
    }

    if (data.from) {
      ratio = 1 - ratio;
    }

    var text = data.text,
        hasClass = data.hasClass,
        newClass = data.newClass,
        oldClass = data.oldClass,
        delimiter = data.delimiter,
        target = data.target,
        fillChar = data.fillChar,
        original = data.original,
        l = text.length,
        i = ratio * l + 0.5 | 0,
        applyNew,
        applyOld,
        str;

    if (hasClass) {
      applyNew = newClass && i;
      applyOld = oldClass && i !== l;
      str = (applyNew ? "<span class='" + newClass + "'>" : "") + text.slice(0, i).join(delimiter) + (applyNew ? "</span>" : "") + (applyOld ? "<span class='" + oldClass + "'>" : "") + delimiter + original.slice(i).join(delimiter) + (applyOld ? "</span>" : "");
    } else {
      str = text.slice(0, i).join(delimiter) + delimiter + original.slice(i).join(delimiter);
    }

    if (data.svg) {
      //SVG text elements don't have an "innerHTML" in Microsoft browsers.
      target.textContent = str;
    } else {
      target.innerHTML = fillChar === "&nbsp;" && ~str.indexOf("  ") ? str.split("  ").join("&nbsp;&nbsp;") : str;
    }
  }
};
TextPlugin.splitInnerHTML = _utils_strings_js__WEBPACK_IMPORTED_MODULE_0__.splitInnerHTML;
TextPlugin.emojiSafeSplit = _utils_strings_js__WEBPACK_IMPORTED_MODULE_0__.emojiSafeSplit;
TextPlugin.getText = _utils_strings_js__WEBPACK_IMPORTED_MODULE_0__.getText;
_getGSAP() && gsap.registerPlugin(TextPlugin);


/***/ }),

/***/ "./node_modules/gsap/gsap-core.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GSCache": () => (/* binding */ GSCache),
/* harmony export */   "Animation": () => (/* binding */ Animation),
/* harmony export */   "Timeline": () => (/* binding */ Timeline),
/* harmony export */   "Tween": () => (/* binding */ Tween),
/* harmony export */   "PropTween": () => (/* binding */ PropTween),
/* harmony export */   "gsap": () => (/* binding */ gsap),
/* harmony export */   "Power0": () => (/* binding */ Power0),
/* harmony export */   "Power1": () => (/* binding */ Power1),
/* harmony export */   "Power2": () => (/* binding */ Power2),
/* harmony export */   "Power3": () => (/* binding */ Power3),
/* harmony export */   "Power4": () => (/* binding */ Power4),
/* harmony export */   "Linear": () => (/* binding */ Linear),
/* harmony export */   "Quad": () => (/* binding */ Quad),
/* harmony export */   "Cubic": () => (/* binding */ Cubic),
/* harmony export */   "Quart": () => (/* binding */ Quart),
/* harmony export */   "Quint": () => (/* binding */ Quint),
/* harmony export */   "Strong": () => (/* binding */ Strong),
/* harmony export */   "Elastic": () => (/* binding */ Elastic),
/* harmony export */   "Back": () => (/* binding */ Back),
/* harmony export */   "SteppedEase": () => (/* binding */ SteppedEase),
/* harmony export */   "Bounce": () => (/* binding */ Bounce),
/* harmony export */   "Sine": () => (/* binding */ Sine),
/* harmony export */   "Expo": () => (/* binding */ Expo),
/* harmony export */   "Circ": () => (/* binding */ Circ),
/* harmony export */   "TweenMax": () => (/* binding */ Tween),
/* harmony export */   "TweenLite": () => (/* binding */ Tween),
/* harmony export */   "TimelineMax": () => (/* binding */ Timeline),
/* harmony export */   "TimelineLite": () => (/* binding */ Timeline),
/* harmony export */   "default": () => (/* binding */ gsap),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapYoyo": () => (/* binding */ wrapYoyo),
/* harmony export */   "distribute": () => (/* binding */ distribute),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "snap": () => (/* binding */ snap),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "getUnit": () => (/* binding */ getUnit),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "splitColor": () => (/* binding */ splitColor),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "selector": () => (/* binding */ selector),
/* harmony export */   "mapRange": () => (/* binding */ mapRange),
/* harmony export */   "pipe": () => (/* binding */ pipe),
/* harmony export */   "unitize": () => (/* binding */ unitize),
/* harmony export */   "interpolate": () => (/* binding */ interpolate),
/* harmony export */   "shuffle": () => (/* binding */ shuffle),
/* harmony export */   "_getProperty": () => (/* binding */ _getProperty),
/* harmony export */   "_numExp": () => (/* binding */ _numExp),
/* harmony export */   "_numWithUnitExp": () => (/* binding */ _numWithUnitExp),
/* harmony export */   "_isString": () => (/* binding */ _isString),
/* harmony export */   "_isUndefined": () => (/* binding */ _isUndefined),
/* harmony export */   "_renderComplexString": () => (/* binding */ _renderComplexString),
/* harmony export */   "_relExp": () => (/* binding */ _relExp),
/* harmony export */   "_setDefaults": () => (/* binding */ _setDefaults),
/* harmony export */   "_removeLinkedListItem": () => (/* binding */ _removeLinkedListItem),
/* harmony export */   "_forEachName": () => (/* binding */ _forEachName),
/* harmony export */   "_sortPropTweensByPriority": () => (/* binding */ _sortPropTweensByPriority),
/* harmony export */   "_colorStringFilter": () => (/* binding */ _colorStringFilter),
/* harmony export */   "_replaceRandom": () => (/* binding */ _replaceRandom),
/* harmony export */   "_checkPlugin": () => (/* binding */ _checkPlugin),
/* harmony export */   "_plugins": () => (/* binding */ _plugins),
/* harmony export */   "_ticker": () => (/* binding */ _ticker),
/* harmony export */   "_config": () => (/* binding */ _config),
/* harmony export */   "_roundModifier": () => (/* binding */ _roundModifier),
/* harmony export */   "_round": () => (/* binding */ _round),
/* harmony export */   "_missingPlugin": () => (/* binding */ _missingPlugin),
/* harmony export */   "_getSetter": () => (/* binding */ _getSetter),
/* harmony export */   "_getCache": () => (/* binding */ _getCache),
/* harmony export */   "_colorExp": () => (/* binding */ _colorExp)
/* harmony export */ });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && _lazyRender();
  animation.render(time, suppressEvents, force);
  _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
  }
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || child._initted && !child._dur) {
    //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
  _initTween(tween, totalTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [totalTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    prevIteration = _animationCycle(tween._tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== prevIteration) {
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (!child._dur && child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (!child._dur && child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value) {
  if (typeof value !== "string") {
    return "";
  }

  var v = _unitExp.exec(value);

  return v ? value.substr(v.index + v[0].length) : "";
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = Math.round(parseFloat(raw) / v) * v * p;
    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      params,
      scope;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  return params ? callback.apply(scope, params) : callback.call(scope);
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(false);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _createPlugin = function _createPlugin(config) {
  config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  var name = config.name,
      isFunc = _isFunction(config),
      Plugin = name && !isFunc && config.init ? function () {
    this._props = [];
  } : config,
      //in case someone passes in an object that's not a plugin, like CustomEase
  instanceDefaults = {
    init: _emptyFunc,
    render: _renderPropTweens,
    add: _addPropTween,
    kill: _killPropTweensOf,
    modifier: _addPluginModifier,
    rawVars: 0
  },
      statics = {
    targetTest: 0,
    get: 0,
    getSetter: _getSetter,
    aliases: {},
    register: 0
  };

  _wake();

  if (config !== Plugin) {
    if (_plugins[name]) {
      return;
    }

    _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


    _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


    _plugins[Plugin.prop = name] = Plugin;

    if (config.targetTest) {
      _harnessPlugins.push(Plugin);

      _reservedProps[name] = 1;
    }

    name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
  }

  _addGlobal(name, Plugin);

  config.register && config.register(gsap, Plugin, PropTween);
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    _hue = function _hue(h, m1, m2) {
  h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _raf = _win.requestAnimationFrame;
        }

        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback) {
      _listeners.indexOf(callback) < 0 && _listeners.push(callback);

      _wake();
    },
    remove: function remove(callback) {
      var i;
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});

_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;
    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return this;
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }

    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }

    return time;
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : dur;
          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate() {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate();
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (parsedStart !== end) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_initTween = function _initTween(tween, time) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      onUpdateParams = vars.onUpdateParams,
      callbackScope = vars.callbackScope,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);
    prevStartAt && prevStartAt.render(-1, true).kill();

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate,
        onUpdateParams: onUpdateParams,
        callbackScope: callbackScope,
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        time > 0 && !autoRevert && (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.

        if (dur && time <= 0) {
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        } // if (time > 0) {
        // 	autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
        // } else if (dur && !(time < 0 && prevStartAt)) {
        // 	time && (tween._zTime = time);
        // 	return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        // }

      } else if (autoRevert === false) {
        tween._startAt = 0;
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (prevStartAt) {
        !autoRevert && (tween._startAt = 0);
      } else {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        time < 0 && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted from() tween.

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {}
      });
      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        stagger ? parsedTargets.forEach(function (t, i) {
          return keyframes.forEach(function (frame, j) {
            return tl.to(t, frame, j ? ">" : i * stagger);
          });
        }) : keyframes.forEach(function (frame) {
          return tl.to(parsedTargets, frame, ">");
        });
      } else {
        l = parsedTargets.length;
        staggerFunc = stagger ? distribute(stagger) : _emptyFunc;

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = {};

          for (p in vars) {
            if (_staggerPropsToSkip.indexOf(p) < 0) {
              copy[p] = vars[p];
            }
          }

          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay)); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (time && !prevTime && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate() {
    this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate();
    return _Animation2.prototype.invalidate.call(this);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */

var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt;

    for (p in vars) {
      pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
      pt && (pt.op = p);

      this._props.push(p);
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i]);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.8.0";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gsap": () => (/* binding */ gsapWithCSS),
/* harmony export */   "default": () => (/* binding */ gsapWithCSS),
/* harmony export */   "CSSPlugin": () => (/* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin),
/* harmony export */   "TweenMax": () => (/* binding */ TweenMaxWithCSS),
/* harmony export */   "TweenLite": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite),
/* harmony export */   "TimelineMax": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax),
/* harmony export */   "TimelineLite": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite),
/* harmony export */   "Power0": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0),
/* harmony export */   "Power1": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1),
/* harmony export */   "Power2": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2),
/* harmony export */   "Power3": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3),
/* harmony export */   "Power4": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4),
/* harmony export */   "Linear": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear),
/* harmony export */   "Quad": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad),
/* harmony export */   "Cubic": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic),
/* harmony export */   "Quart": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart),
/* harmony export */   "Quint": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint),
/* harmony export */   "Strong": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong),
/* harmony export */   "Elastic": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic),
/* harmony export */   "Back": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back),
/* harmony export */   "SteppedEase": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase),
/* harmony export */   "Bounce": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce),
/* harmony export */   "Sine": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine),
/* harmony export */   "Expo": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo),
/* harmony export */   "Circ": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");


var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./node_modules/gsap/utils/strings.js":
/*!********************************************!*\
  !*** ./node_modules/gsap/utils/strings.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emojiExp": () => (/* binding */ emojiExp),
/* harmony export */   "getText": () => (/* binding */ getText),
/* harmony export */   "splitInnerHTML": () => (/* binding */ splitInnerHTML),
/* harmony export */   "emojiSafeSplit": () => (/* binding */ emojiSafeSplit)
/* harmony export */ });
/*!
 * strings: 3.8.0
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _trimExp = /(^\s+|\s+$)/g;
var emojiExp = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function getText(e) {
  var type = e.nodeType,
      result = "";

  if (type === 1 || type === 9 || type === 11) {
    if (typeof e.textContent === "string") {
      return e.textContent;
    } else {
      for (e = e.firstChild; e; e = e.nextSibling) {
        result += getText(e);
      }
    }
  } else if (type === 3 || type === 4) {
    return e.nodeValue;
  }

  return result;
}
function splitInnerHTML(element, delimiter, trim, preserveSpaces) {
  var node = element.firstChild,
      result = [],
      s;

  while (node) {
    if (node.nodeType === 3) {
      s = (node.nodeValue + "").replace(/^\n+/g, "");

      if (!preserveSpaces) {
        s = s.replace(/\s+/g, " ");
      }

      result.push.apply(result, emojiSafeSplit(s, delimiter, trim, preserveSpaces));
    } else if ((node.nodeName + "").toLowerCase() === "br") {
      result[result.length - 1] += "<br>";
    } else {
      result.push(node.outerHTML);
    }

    node = node.nextSibling;
  }

  return result;
}
/*
//smaller kb version that only handles the simpler emoji's, which is often perfectly adequate.

let _emoji = "[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D]|[\uD800-\uDBFF][\uDC00-\uDFFF]",
	_emojiExp = new RegExp(_emoji),
	_emojiAndCharsExp = new RegExp(_emoji + "|.", "g"),
	_emojiSafeSplit = (text, delimiter, trim) => {
		if (trim) {
			text = text.replace(_trimExp, "");
		}
		return ((delimiter === "" || !delimiter) && _emojiExp.test(text)) ? text.match(_emojiAndCharsExp) : text.split(delimiter || "");
	};
 */

function emojiSafeSplit(text, delimiter, trim, preserveSpaces) {
  text += ""; // make sure it's cast as a string. Someone may pass in a number.

  if (trim) {
    text = text.replace(_trimExp, "");
  }

  if (delimiter && delimiter !== "") {
    return text.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(delimiter);
  }

  var result = [],
      l = text.length,
      i = 0,
      j,
      character;

  for (; i < l; i++) {
    character = text.charAt(i);

    if (character.charCodeAt(0) >= 0xD800 && character.charCodeAt(0) <= 0xDBFF || text.charCodeAt(i + 1) >= 0xFE00 && text.charCodeAt(i + 1) <= 0xFE0F) {
      //special emoji characters use 2 or 4 unicode characters that we must keep together.
      j = ((text.substr(i, 12).split(emojiExp) || [])[1] || "").length || 2;
      character = text.substr(i, j);
      result.emoji = 1;
      i += j - 1;
    }

    result.push(character === ">" ? "&gt;" : character === "<" ? "&lt;" : preserveSpaces && character === " " && (text.charAt(i - 1) === " " || text.charAt(i + 1) === " ") ? "&nbsp;" : character);
  }

  return result;
}

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DisplayController.js":
/*!**********************************!*\
  !*** ./src/DisplayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showRestartBtn": () => (/* binding */ showRestartBtn),
/* harmony export */   "getDifficulty": () => (/* binding */ getDifficulty),
/* harmony export */   "displayBoard": () => (/* binding */ displayBoard),
/* harmony export */   "setRadioValue": () => (/* binding */ setRadioValue),
/* harmony export */   "menuController": () => (/* binding */ menuController)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_TextPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/TextPlugin */ "./node_modules/gsap/TextPlugin.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/Game.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/Player.js");






gsap__WEBPACK_IMPORTED_MODULE_3__["default"].registerPlugin(gsap_TextPlugin__WEBPACK_IMPORTED_MODULE_4__["default"]);

const boardSpaceArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const gameboardContainer = document.querySelector("#gameboard-container");
const enterBtn = document.querySelector("#enter-btn");
const startGameBtn = document.querySelector("#start-btn");
const playerSelectForm = document.querySelector("#player-select-form");
const computerSwitch = document.querySelectorAll(".switch-radio");
const playerTwoIcon = document.querySelector("#player-two-icon");
const playerOneName = document.querySelector("#player-one-name");
const playerTwoName = document.querySelector("#player-two-name");
let difficulty;
let playerOne;
let playerTwo;
const restartBtn = document.querySelector("#restart-btn");
const timeModeBtn = document.querySelector("#time-mode-btn");
const timeModeSelector = document.querySelector("#mode-selector");
timeModeSelector.style.visibility = "hidden";
const timerDiv = document.querySelector("#timer");
const difficultySelectorLabel = document.querySelector(".selector-label");
const difficultySelector = document.querySelector("#difficulty-selector");
const playerOneScoreContainer = document.querySelector("#player-one-score");
const playerTwoScoreContainer = document.querySelector("#player-two-score");
const gameContainer = document.querySelector("#game-container");

const showRestartBtn = () => {
  restartBtn.style.visibility = "visible";
};

const getDifficulty = () => difficulty;

const resultAnnounce = (string) => {
  const resultText = document.createElement("h2");
  resultText.classList.add("g-h2");
  resultText.setAttribute("id", "result-announce");
  resultText.textContent = string;
  gameContainer.appendChild(resultText);

  const resultAnimation = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline();
  resultAnimation
    .to("#result-announce", {
      duration: 0.75,
      scale: 7,
      ease: "back.out",
    })
    .to("#result-announce", {
      duration: 0.75,
      opacity: 0,
      // eslint-disable-next-line func-names
      onComplete() {
        gameContainer.removeChild(resultText);
      },
    });
};

function playerTurn(player, scoreContainer, playerTitle) {
  const turnResult = player.roundWinCheck();
  const matchResult = player.matchWinCheck();
  console.log(matchResult)
  if (turnResult !== false && matchResult !== true) {
    if (turnResult === true) {
      scoreDisplay(scoreContainer);
      resultAnnounce(`${playerTitle} wins!`);
    }
    if (turnResult === "tie") {
      resultAnnounce("It's a tie!")
    }
  }
  if (matchResult === true) {
    scoreDisplay(scoreContainer);
    resultAnnounce(`${playerTitle} wins the match!`);
  }
  showRestartBtn();
  
}

function displayBoard() {
  boardSpaceArray.forEach((index) => {
    const boardSpace = document.createElement("div");
    boardSpace.classList.add("board-space");
    boardSpace.setAttribute("id", `sector-${index}`);
    gameboardContainer.appendChild(boardSpace);

    boardSpace.addEventListener("click", () => {
      if (
        boardSpace.textContent !== "x" &&
        boardSpace.textContent !== "o" &&
        playerOne.roundWinCheck() !== true &&
        playerTwo.roundWinCheck() !== true
      ) {
        if ((0,_Game__WEBPACK_IMPORTED_MODULE_0__.getTurn)() % 2 === 0 && playerTwo.getName() === "computer") {
          playerOne.playTurn(boardSpace, index);
          playerTurn(playerOne, playerOneScoreContainer, "Player One")

          if ((0,_Game__WEBPACK_IMPORTED_MODULE_0__.checkResults)(playerOne.getMarker()) !== true) {
            playerTwo.computerTurn();
            playerTurn(playerTwo, playerTwoScoreContainer, "Player Two")

          }
        } else if ((0,_Game__WEBPACK_IMPORTED_MODULE_0__.getTurn)() % 2 === 0) {
          playerOne.playTurn(boardSpace, index);
          playerTurn(playerOne, playerOneScoreContainer, "Player One")

          
        } else {
          playerTwo.playTurn(boardSpace, index);
          playerTurn(playerTwo, playerTwoScoreContainer, "Player Two")

        }
      }
      //  CHECK IF THIS IS NECESSARY! I don't think it is, don't remember seeing this console log
      // ever and the roundWinCheck functions already use checkResults
      else if (
        (0,_Game__WEBPACK_IMPORTED_MODULE_0__.checkResults)(playerOne.getMarker()) ||
        (0,_Game__WEBPACK_IMPORTED_MODULE_0__.checkResults)(playerTwo.getMarker())
      ) {
        console.log("round over");
      }
    });
  });
}

function scoreDisplay(container) {
  const playerPoint = document.createElement("div");
  playerPoint.classList.add("player-point");
  container.appendChild(playerPoint);
}
function clearScoreboard() {
  while (playerOneScoreContainer.firstChild) {
    playerOneScoreContainer.removeChild(playerOneScoreContainer.lastChild);
  }
  while (playerTwoScoreContainer.firstChild) {
    playerTwoScoreContainer.removeChild(playerTwoScoreContainer.lastChild);
  }
}

function setRadioValue(radioGroup) {
  const element = document.getElementsByClassName(radioGroup);
  const array = [...element].filter((x) => x.checked);

  return array[0].value;
}

function menuController() {
  const showElement = (element) => {
    // eslint-disable-next-line no-param-reassign
    element.style.visibility = "visible";
  };

  enterBtn.addEventListener("click", () => {
    const introToPlayerSelect = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline();

    introToPlayerSelect
      .to("#enter-btn", { duration: 1, xPercent: -150 }, 0)
      .to("#intro-screen", { duration: 0.8, xPercent: -150 }, 0.3)
      .to(
        "#player-select-form",
        { duration: 1, xPercent: -150.2, yPercent: 0 },
        1
      )
      .to("#intro-container", { autoAlpha: 0, delay: 3 });
  });

  // form control
  const introAnimation = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline();
  introAnimation
    .to("#intro-title", {
      duration: 1.5,
      rotate: 720,
      perspective: 500,
      scale: 50,
      ease: "back.out",
    })
    .from("#enter-btn", { duration: 1, x: 1000 });

  const playerToggle = () => {
    const nodeListArray = [...computerSwitch].filter((x) => x.checked);

    if (nodeListArray[0].value === "player") {
      difficultySelector.style.visibility = "hidden";
      difficultySelectorLabel.style.visibility = "hidden";
      playerTwoIcon.src = "/images/player-two-icon.png";
      playerTwoName.value = "";
      playerTwoName.disabled = false;
    } else if (nodeListArray[0].value === "computer") {
      playerTwoIcon.src = "/images/ai-icon.png";
      playerTwoName.value = "computer";
      playerTwoName.disabled = true;
      difficultySelector.textContent = "new on the job";
      difficultySelector.style.visibility = "visible";
      difficultySelectorLabel.style.visibility = "visible";
      let count = 0;

      difficultySelector.addEventListener("click", () => {
        const difficulties = [
          "new on the job",
          "in training",
          "highly skilled",
          "unstoppable",
        ];
        if (count < 3) {
          count += 1;
          difficulty = difficulties[count];
          difficultySelector.textContent = difficulty;
        } else {
          count = 0;
          difficulty = difficulties[count];
          difficultySelector.textContent = difficulty;
        }
        (0,_Game__WEBPACK_IMPORTED_MODULE_0__.setCompDifficulty)(difficulty);
      });
    }
  };

  computerSwitch.forEach((element) => {
    element.addEventListener("change", () => playerToggle());
    console.log(element);
  });

  restartBtn.addEventListener("click", () => {
    if (playerOne.getScore() === 5 || playerTwo.getScore() === 5) {
      clearScoreboard();
      (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__.clearBoard)();
      playerOne.resetScore();
      playerTwo.resetScore();
      (0,_Game__WEBPACK_IMPORTED_MODULE_0__.resetTurns)();
      restartBtn.style.visibility = "hidden";
      (0,_Game__WEBPACK_IMPORTED_MODULE_0__.startTimer)(".seconds", (0,_Game__WEBPACK_IMPORTED_MODULE_0__.getTimer)());
    } else {
      (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__.clearBoard)();
      (0,_Game__WEBPACK_IMPORTED_MODULE_0__.resetTurns)();
      restartBtn.style.visibility = "hidden";
    }
  });

  playerSelectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    playerOne = (0,_Player__WEBPACK_IMPORTED_MODULE_2__.createPlayer)(
      1,
      playerOneName.value,
      setRadioValue("player-one-radio")
    );
    console.log(playerOne);
    playerTwo = (0,_Player__WEBPACK_IMPORTED_MODULE_2__.createPlayer)(
      2,
      playerTwoName.value,
      setRadioValue("player-two-radio")
    );

    (0,_Game__WEBPACK_IMPORTED_MODULE_0__.setPlayer)(playerOne);

    (0,_Game__WEBPACK_IMPORTED_MODULE_0__.setPlayer)(playerTwo);
  });

  startGameBtn.addEventListener("click", () => {
    const timerSet = setRadioValue("time-radio");
    console.log(timerSet);
    const modeSet = setRadioValue("extreme-radio");
    console.log(modeSet);
    console.log(`${timerSet} on click`);

    function playGameTheme() {
      const gameTheme = new Audio("../audio/lightwave-game-theme.mp3");
      if (typeof gameTheme.loop === "boolean") {
        gameTheme.loop = true;
        gameTheme.play();
      } else {
        gameTheme.addEventListener(
          "ended",
          // eslint-disable-next-line func-names
          function () {
            this.currentTime = 0;
            this.play();
          },
          false
        );
      }
    }
    const playerSelectExit = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline();
    const boardEnter = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline();
    const countdownAnimation = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline();
    const boardSpaceAnimation = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      repeat: -1,
      repeatDelay: 0,
      defaults: {
        ease: "power4",
      },
    });
    const boardScaleAnimation = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      repeat: -1,
      repeatDelay: 0,
      defaults: {
        ease: "power1.out",
      },
    });

    const boardSpinAnimation = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      repeat: -1,
      repeatDelay: 0,
      defaults: {
        ease: "power1.out",
      },
    });

    const beatDuration = 60 / 130;

    const timerDisplay = (value) => {
      if (value === "endless") {
        boardEnter
          .to("#gameboard-container", { duration: 0, delay: 3, autoAlpha: 1 })
          .call(playGameTheme, null, 3 + beatDuration / 4);
      } else if (value !== "endless") {
        console.log("timer initialized");
        boardEnter
          .to("#gameboard-container", { duration: 0, delay: 3, autoAlpha: 1 })
          .call(playGameTheme, null, 3 + beatDuration / 4)
          .call(_Game__WEBPACK_IMPORTED_MODULE_0__.startTimer, [".seconds", value], null, 3 + beatDuration / 4)
          .call(showElement, [timerDiv], null, 3 + beatDuration / 4);
      }
    };

    timerDiv.addEventListener("update", () => {
      if (timerDiv.textContent === 1) showRestartBtn();
    });

    timerDisplay(timerSet);

    playerSelectExit
      .to("#player-select-form", { duration: 1, xPercent: -300 })
      .to("#player-select-form", { autoAlpha: 0 });

    countdownAnimation
      .to("#game-container", { duration: 1, xPercent: -300, yPercent: -35 })
      .to(".countdown-timer", {
        duration: 2,
        text: {
          value: "3 2 1 Begin",
          delimiter: " ",
        },
      })
      .to(".countdown-timer", { duration: 0, autoAlpha: 0 });

    boardSpaceAnimation
      .to(".board-space", { background: "hsla(82, 100%, 55%, .85)" }, 0.61538)
      .to(".board-space", { background: "hsla(43, 100%, 53%, .85)" })
      .to(".board-space", { background: "hsla(30, 100%, 54%, .85)" })
      .to(".board-space", { background: "hsla(20, 100%, 55%, .85)" })
      .to(".board-space", { background: "hsla(13, 100%, 55%, .85)" })
      .totalDuration(beatDuration * 8);

    boardScaleAnimation
      .to("#gameboard-container", { scale: 1.1 })
      .totalDuration(beatDuration);

    boardSpinAnimation

      .to(
        "#gameboard-container",
        { rotation: 90, boxShadow: "hsla(82, 100%, 55%, .85) -10px 5px" },
        2
      )
      .to(
        "#gameboard-container",
        { rotation: 180, boxShadow: "hsla(43, 100%, 53%, .85) -10px 5px" },
        4
      )
      .to(
        "#gameboard-container",
        { rotation: 270, boxShadow: "hsla(30, 100%, 54%, .85) 10px 5px" },
        6
      )
      .to(
        "#gameboard-container",
        { rotation: 360, boxShadow: "hsla(13, 100%, 55%, .85) 10px 5px" },
        8
      )
      .totalDuration(beatDuration * 16);
  });
}

timeModeBtn.addEventListener("click", () => {
  if (timeModeSelector.style.visibility === "hidden") {
    console.log(timeModeSelector);
    timeModeSelector.style.visibility = "visible";
    console.log(timeModeSelector);
  } else {
    console.log("err!");
    timeModeSelector.style.visibility = "hidden";
  }
});


/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTimer": () => (/* binding */ getTimer),
/* harmony export */   "setCompDifficulty": () => (/* binding */ setCompDifficulty),
/* harmony export */   "setPlayer": () => (/* binding */ setPlayer),
/* harmony export */   "startTimer": () => (/* binding */ startTimer),
/* harmony export */   "getTurn": () => (/* binding */ getTurn),
/* harmony export */   "setTurn": () => (/* binding */ setTurn),
/* harmony export */   "resetTurns": () => (/* binding */ resetTurns),
/* harmony export */   "compChoiceLogic": () => (/* binding */ compChoiceLogic),
/* harmony export */   "checkResults": () => (/* binding */ checkResults)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");


let whoseTurn = 0;

const result = null; // eslint-disable-line no-unused-vars
let compDifficulty = "new on the job";
let setTimer;
let playerOne;
let playerTwo;

const getTimer = () => setTimer;

// eslint-disable-next-line no-unused-vars
const getCompDifficulty = () => compDifficulty;

const setCompDifficulty = (value) => {
  compDifficulty = value;
  console.log(compDifficulty);
};

function setPlayer(player) {
  if (player.getNumber() === 1) {
    playerOne = player;
    console.log(playerOne.getName());
    return playerOne;
  }
  if (player.getNumber() === 2) {
    playerTwo = player;
    console.log(playerTwo);
    return playerTwo;
  }
  return undefined;
}

const startTimer = (id, countdown) => {
  const timerSpan = document.querySelector(id);
  setTimer = countdown;

  function updateTimer() {
    timerSpan.textContent = countdown;
    countdown -= 1.0; // eslint-disable-line no-param-reassign
    console.log(countdown);

    if (countdown === 0) {
      clearInterval(timerInterval);
      console.log("interval cleared");
      alert(`time's up!`);
      // DisplayController.showRestartBtn();
    } else if (playerOne.getScore() === 5 || playerTwo.getScore() === 5) {
      clearInterval(timerInterval);
      console.log("interval cleared");
    }
  }
  updateTimer();
  let timerInterval = setInterval(updateTimer, 1000);
};

const getTurn = () => whoseTurn;
const setTurn = () => {
  whoseTurn += 1;
};
const resetTurns = () => {
  whoseTurn = 0;
};

const compMM = () => minimax((0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__.getBoard)(), playerTwo.getMarker()).index;

const compR = () =>
  (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__.getRemainingSectors)((0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__.getBoard)())[
    Math.floor(Math.random() * (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__.getRemainingSectors)((0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__.getBoard)()).length)
  ];

const compChoiceLogic = () => {
  console.log(compDifficulty);

  if (compDifficulty === "unstoppable") {
    return compMM();
  }
  if (compDifficulty !== "unstoppable") {
    const rNum = Math.random() * 100;

    if (compDifficulty === "highly skilled") {
      if (rNum < 75) {
        return compMM();
      }

      return compR();
    }
    if (compDifficulty === "in training") {
      if (rNum < 50) {
        return compMM();
      }

      return compR();
    }
    if (compDifficulty === "new on the job") {
      if (rNum < 25) {
        return compMM();
      }

      return compR();
    }
  }
  return undefined;
};

function checkResults(playerMarker) {
  const resultArray = Object.values((0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__.getResultCheckSectors)());

  const playerResult = resultArray.some(
    (element) =>
      element().join(",") === `${playerMarker},${playerMarker},${playerMarker}`
  );

  return playerResult;
}

function minimax(boardState, playerMarker) {
  const getEmptySectors = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__.getRemainingSectors)(boardState);
  // eslint-disable-next-line no-unused-vars
  let score;

  if (checkResults(playerOne.getMarker())) {
    return { score: -1 };
  }
  if (checkResults(playerTwo.getMarker())) {
    return { score: 1 };
  }
  if (getEmptySectors.length === 0) {
    return { score: 0 };
  }

  const testHistory = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < getEmptySectors.length; i++) {
    const currentTest = [];
    currentTest.index = boardState[getEmptySectors[i]];
    // eslint-disable-next-line no-param-reassign
    boardState[getEmptySectors[i]] = playerMarker;

    if (playerMarker === playerTwo.getMarker()) {
      // eslint-disable-next-line no-shadow
      const result = minimax(boardState, playerOne.getMarker());
      currentTest.score = result.score;
    } else {
      // eslint-disable-next-line no-shadow
      const result = minimax(boardState, playerTwo.getMarker());
      currentTest.score = result.score;
    }

    // eslint-disable-next-line no-param-reassign
    boardState[getEmptySectors[i]] = currentTest.index;
    testHistory.push(currentTest);
  }

  let bestNextMove;

  if (playerMarker === playerTwo.getMarker()) {
    let bestScore = -Infinity;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < testHistory.length; i++) {
      if (testHistory[i].score > bestScore) {
        bestScore = testHistory[i].score;
        bestNextMove = i;
      }
    }
  } else {
    let bestScore = Infinity;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < testHistory.length; i++) {
      if (testHistory[i].score < bestScore) {
        bestScore = testHistory[i].score;
        bestNextMove = i;
      }
    }
  }
  return testHistory[bestNextMove];
}


/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBoard": () => (/* binding */ getBoard),
/* harmony export */   "getResultCheckSectors": () => (/* binding */ getResultCheckSectors),
/* harmony export */   "getRemainingSectors": () => (/* binding */ getRemainingSectors),
/* harmony export */   "setBoard": () => (/* binding */ setBoard),
/* harmony export */   "clearBoard": () => (/* binding */ clearBoard)
/* harmony export */ });
let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const resultCheckSectors = {
  row1: () => [0, 1, 2].map((x) => board[x]),
  row2: () => [3, 4, 5].map((x) => board[x]),
  row3: () => [6, 7, 8].map((x) => board[x]),
  column1: () => [0, 3, 6].map((x) => board[x]),
  column2: () => [1, 4, 7].map((x) => board[x]),
  column3: () => [2, 5, 8].map((x) => board[x]),
  diagonal1: () => [0, 4, 8].map((x) => board[x]),
  diagonal2: () => [2, 4, 6].map((x) => board[x]),
};

const getBoard = () => board;

const getResultCheckSectors = () => resultCheckSectors;

function getRemainingSectors(boardState) {
  return boardState.filter((i) => i !== "o" && i !== "x");
}

function setBoard(index, marker) {
  board.splice(index, 1, marker);
}

const clearBoard = () => {
  board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const boardSpaces = document.querySelectorAll(".board-space");
  boardSpaces.forEach((index) => {
    // eslint-disable-next-line no-param-reassign
    index.textContent = "";
  });
};


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPlayer": () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/Game.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");



const playerActions = {
  getNumber() {
    return this.number;
  },
  getName() {
    return this.name;
  },
  resetScore() {
    this.score = 0;
  },
  getScore() {
    return this.score;
  },
  getMarker() {
    return this.marker;
  },
  roundWinCheck() {
    if ((0,_Game__WEBPACK_IMPORTED_MODULE_0__.checkResults)(this.marker)) {
      console.log(`${this.name} wins`);
      this.score += 1;
      console.log(`${this.name} score: ${this.score}`);
      return true;
    }
    if ((0,_Game__WEBPACK_IMPORTED_MODULE_0__.getTurn)() === 9) {
      return "tie";
    }
    return false;
  },
  matchWinCheck() {
    if ((0,_Game__WEBPACK_IMPORTED_MODULE_0__.getTurn)() === 0) {
      return false;
    }
    if (this.score === 5) {
      return true;
    }
    return false;
  },
  computerTurn() {
    const compChoice = (0,_Game__WEBPACK_IMPORTED_MODULE_0__.compChoiceLogic)();
    const compSpace = document.querySelector(`#sector-${compChoice}`);
    compSpace.textContent = this.marker;
    (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__.setBoard)(compChoice, this.marker);
    (0,_Game__WEBPACK_IMPORTED_MODULE_0__.setTurn)();
  },
  playTurn: function playTurn(space, index) {
    space.textContent = this.marker; // eslint-disable-line no-param-reassign
    (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__.setBoard)(index, this.marker);

    (0,_Game__WEBPACK_IMPORTED_MODULE_0__.setTurn)();
  },
};

// eslint-disable-next-line import/prefer-default-export
function createPlayer(number, name, marker) {
  const player = Object.create(playerActions);
  player.name = name;
  player.number = number;
  player.marker = marker;
  player.score = 0;
  return player;
}


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _DisplayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayController */ "./src/DisplayController.js");
/* eslint-disable no-alert */
/* eslint-disable no-console */
/*

  TO - DOs

    Optimization: 
    [x] Code-splitting
        [x] Figure out how to make a factory function with ES6 modules... research seems to
            say that you can use factory functions as normal but i'm not sure how to get this working
    Features:
    [ ] score keeping UI
        [x] basic layout and functionality
        [ ] add labels, animations, make pretty
    [x] game win / lose / draw announcements (render animated announcements on true checkwin
        function call)
        [x] work out draw logic as it's not written into check results yet.
    [ ] play again / main menu button under results announcement;
    [ ] form validation + lock other radio buttons when choice is made.
    [ ] Purely aesthetic UI completion (backgrounds, animations, music, sound effects)
        [x] animate background of gameboard to cycle through each color of my Hyperdrive
            pallete on coolors.co (fast loop), adjust opacity!
        [ ] change font + UI to have more sharp angles

    Bugs:
    [ ] Timer start is called when endless mode is selected, disable this
    [x] Computer win check is triggering twice, where is this happening?
    [x] win match check is being called twice on winning turn completion, once on restart after.
    [x] webpack is calling functions twice, messing with time mode dropdown
    [x] index.js is not able to locate audio source
    [x] playerOne + Two are not getting defined on form submit
    Completed:

    [x] Try switching row/column/diagonal functions into game module.
    [x] Figure out object of row/column/diagonal functions, loop through for results check.
    [x] Make game.checkResults() return finalResult, have displayController check when this value
        equals something other than undefined then display that result via a div toggle with
        win message in body.
        --- returning finalResult from game module gets a
        referenceError: finalResult is not defined..
            figure this out!!!
    [x] game.checkResult function isn't detecting correctly after creating successful minimax ai
        figure out WHY this is happening before throwing solutions @ it all slap-dash.
    [x] minimax function isn't working, only returning first possible value instead of using
        recursion
    [x] game difficulty selector
    [x] Put get player info functions in Player factory possibly?

*/




(0,_DisplayController__WEBPACK_IMPORTED_MODULE_1__.displayBoard)();
(0,_DisplayController__WEBPACK_IMPORTED_MODULE_1__.menuController)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBaUU7O0FBRWpFLHNFQUFzRTs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFQUE2RTtBQUM3RTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkZBQTJGOzs7QUFHM0YseUZBQXlGOzs7QUFHekY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdHQUFnRztBQUNoRzs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtB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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnR0FBZ0c7O0FBRWhHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVk7OztBQUdaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFxRCw2TkFBNk4sT0FBTyxXQUFXLEtBQUs7QUFDL1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSw2REFBNkQ7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0Y7O0FBRXBGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUM7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUhBQXlIOztBQUV6SDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQSwwRUFBMEU7QUFDMUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRUFBZ0U7QUFDaEU7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qjs7QUFFNUIsK0NBQStDOztBQUUvQzs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSw2REFBNkQ7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFOztBQUVyRTs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxpQkFBaUI7O0FBRWpCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0VBQWtFOztBQUVsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDZOQUE2Tjs7QUFFOVE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sY0FBYyxtRkFBbUYsSUFBSSxVQUFVLFFBQVE7OztBQUc5SCxzRkFBc0Y7O0FBRXRGO0FBQ0EseURBQXlEOztBQUV6RDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixnREFBZ0Q7QUFDaEQsYUFBYTtBQUNiO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUiwyQ0FBMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLG9YQUFvWCx5Q0FBeUM7QUFDN1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5SEFBeUgsOEJBQThCOztBQUV2SixTQUFTO0FBQ1Qsd0RBQXdELG1EQUFtRCxPQUFPOztBQUVsSDs7QUFFQSxxREFBcUQ7O0FBRXJEO0FBQ0EsZ0RBQWdEOztBQUVoRCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRTs7QUFFckU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZ0ZBQWdGOzs7QUFHaEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQSw4REFBOEQ7QUFDOUQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvRUFBb0U7QUFDcEU7O0FBRUE7QUFDQSxNQUFNO0FBQ04sMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDOztBQUVqQywwQ0FBMEM7O0FBRTFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkVBQTJFOztBQUUzRTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdGQUF3Rjs7QUFFeEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsK0hBQStIOztBQUUvSDtBQUNBLDRIQUE0SCxZQUFZO0FBQ3hJOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNElBQTRJOztBQUU1SSxpSUFBaUk7O0FBRWpJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtEQUErRDs7QUFFL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEdBQUc7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSw2R0FBNkc7O0FBRTdHO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0k7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTs7QUFFQTtBQUNBLENBQUMsSUFBSTs7QUFFTDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkVBQTJFLGVBQWU7QUFDMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx3REFBd0Q7O0FBRXhELHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsR0FBRztBQUNIO0FBQ0EsMENBQTBDO0FBQzFDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDZEQUE2RDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsZ0dBQWdHO0FBQ2hHO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQSxDQUFDLEdBQUc7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsR0FBRzs7O0FBR2Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0k7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHVJQUF1STs7QUFFeEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21KO0FBQ3FILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RUFBWTtBQUNaLGtFQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvZ3NhcC9DU1NQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvZ3NhcC9UZXh0UGx1Z2luLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2dzYXAvZ3NhcC1jb3JlLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2dzYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvZ3NhcC91dGlscy9zdHJpbmdzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2Nzcy9zdHlsZS5zY3NzPzNmZjAiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9EaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9HYW1lLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgI3BsYXllci10d28tY29udGFpbmVyID4gLnBsYXllci1zZWxlY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDV2aCAyMHZoIDEwdmggNXZoO1xcbiAgICBncmlkLXJvdy1nYXA6IDV2aDtcXG4gICAgbWFyZ2luLXRvcDogLTEwdmg7XFxuICB9XFxuXFxuICAjcGxheWVyLW9uZS1jb250YWluZXIgPiAucGxheWVyLXNlbGVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNXZoIDEwdmggMTB2aCA1dmg7XFxuICAgIGdyaWQtcm93LWdhcDogNXZoO1xcbiAgfVxcblxcbiAgLnBsYXllci1zZWxlY3QgPiBpbWcge1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICB9XFxufVxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbmNzcy1kb29kbGUge1xcbiAgei1pbmRleDogLTEwMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2FwcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwdncgMTAwdncgMTAwdnc7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHZoO1xcbiAgZ2FwOiA1MHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDIwMHZ3O1xcbn1cXG5cXG4jaW50cm8tc2NyZWVuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxNXZoO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5nLWgxIHtcXG4gIGZvbnQtc2l6ZTogMC4ycmVtO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XFxuICBmb250LWZhbWlseTogXFxcIkV4byAyXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmctaDIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZy1idG5fbGFiZWwge1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBtaW4td2lkdGg6IDE1dnc7XFxuICBmb250LXNpemU6IDIuOHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FuaXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OSwgMCwgMjU1LCAwLjM2Myk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nLWJ0bl9sYWJlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg5LCAwLCAyNTUsIDAuNSk7XFxufVxcblxcbi5nLWJ0bl9jb250YWluZXIgbGFiZWwge1xcbiAgcGFkZGluZy10b3A6IDEuNXZoO1xcbn1cXG5cXG4uZy1idG5fY29udGFpbmVyIGlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLmctYnRuX2NvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmctYnRuX2xhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODksIDAsIDI1NSwgMC45KTtcXG59XFxuXFxuI3BsYXllci1zZWxlY3QtZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm9uZSBzdWJtaXQgdHdvXFxcIjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwdmg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMy4zJSk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyLW9uZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogb25lO1xcbn1cXG4jcGxheWVyLW9uZS1jb250YWluZXIgLnBsYXllci1zZWxlY3QgLnAxLXgge1xcbiAgZ3JpZC1yb3c6IDQ7XFxuICBncmlkLWNvbHVtbjogMTtcXG59XFxuI3BsYXllci1vbmUtY29udGFpbmVyIC5wbGF5ZXItc2VsZWN0IC5wMS1vIHtcXG4gIGdyaWQtcm93OiA0O1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbiNwbGF5ZXItdHdvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiB0d287XFxufVxcblxcbiNzdGFydC1nYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBzdWJtaXQ7XFxuICBtYXJnaW4tdG9wOiA3NXZoO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICB3aWR0aDogMTB2dztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLXNlbGVjdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1dmggNDB2aCAxMHZoIDV2aDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTV2dyAxNXZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHJvdy1nYXA6IDN2aDtcXG4gIGNvbHVtbi1nYXA6IDAuOHZ3O1xcbn1cXG5cXG4ucGxheWVyLXNlbGVjdCA+IGltZyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBtYXgtd2lkdGg6IDM4MHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgb3BhY2l0eTogOTAlO1xcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG1hcmdpbi10b3A6IC04dmg7XFxufVxcblxcbiNwbGF5ZXItdHdvLWNvbnRhaW5lciBpbWcge1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG59XFxuXFxuI3BsYXllci1vbmUtbmFtZSxcXG4jcGxheWVyLXR3by1uYW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDI7XFxuICBncmlkLXJvdzogMztcXG4gIGhlaWdodDogN3ZoO1xcbiAgZm9udC1zaXplOiAyLjhyZW07XFxuICB3aWR0aDogMjV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjUsIDE1MywgNiwgMC42MSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDNweCBncmVlbnllbGxvdyBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuI3BsYXllci10d28tbmFtZSB7XFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cXG5cXG4jZGlmZmljdWx0eS1zZWxlY3RvciB7XFxuICB3aWR0aDogMjB2dztcXG4gIGhlaWdodDogN3ZoO1xcbiAgbWFyZ2luLXRvcDogLTh2aDtcXG59XFxuXFxuI3N0YXJ0LWJ0biB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNlbGVjdG9yLWxhYmVsIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbi10b3A6IC0xMXZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLYW5pdFxcXCIsIHNhbnMtc2VyaWY7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2RpZmZpY3VsdHktc2VsZWN0b3Ige1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY1LCAxNTMsIDYsIDAuNjEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAzcHggZ3JlZW55ZWxsb3cgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LWZhbWlseTogXFxcIkV4byAyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnBsYXllci10b2dnbGUgbGFiZWwge1xcbiAgcGFkZGluZy10b3A6IDF2aDtcXG59XFxuXFxuI3RpbWUtbW9kZS1idG4ge1xcbiAgbWFyZ2luLXRvcDogLTgwdmg7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogN3ZoO1xcbn1cXG5cXG4jbW9kZS1zZWxlY3RvciB7XFxuICBtYXJnaW4tdG9wOiAtNzN2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCA3dmgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXZ3IDE1dnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGltZS10b2dnbGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xcbn1cXG5cXG4udGltZS1sYWJlbCB7XFxuICB3aWR0aDogMzB2dztcXG59XFxuXFxuLmNvdW50ZG93bi10aW1lciB7XFxuICB6LWluZGV4OiAxMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG1hcmdpbi10b3A6IDEwMDBweDtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRXhvIDJcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jdGltZXIge1xcbiAgei1pbmRleDogMTA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBtYXJnaW4tdG9wOiA4MDBweDtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRXhvIDJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jZ2FtZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuI3Jlc3RhcnQtYnRuIHtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbWFyZ2luLXRvcDogMTYwMHB4O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMTUwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTUwcHgpO1xcbiAgbWFyZ2luLXRvcDogMTAwMHB4O1xcbiAgei1pbmRleDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTI2LCAyNTUsIDQ2LCAwLjg1KSAxMHB4IDBweDtcXG59XFxuXFxuLmJvYXJkLXNwYWNlIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBib3JkZXI6IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44NSkgM3B4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMjYsIDI1NSwgNDYsIDAuODUpO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllci1vbmUtc2NvcmUge1xcbiAgbWFyZ2luLWxlZnQ6IC02MHZ3O1xcbn1cXG5cXG4jcGxheWVyLXR3by1zY29yZSB7XFxuICBtYXJnaW4tbGVmdDogNjB2dztcXG59XFxuXFxuI3Jlc3VsdC1hbm5vdW5jZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tdG9wOiAxMDB2aDtcXG59XFxuXFxuLnNjb3JlLWNvbnRhaW5lcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDMwdnc7XFxuICBtYXJnaW4tdG9wOiAxNjAwcHg7XFxufVxcblxcbi5wbGF5ZXItcG9pbnQge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDR2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ud2luLWFubm91bmNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFxQkU7RUFNQTtJQUNFLGFBQUE7SUFDQSxxQ0FBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUF6QkY7O0VBNEJBO0lBQ0UsYUFBQTtJQUNBLHFDQUFBO0lBQ0EsaUJBQUE7RUF6QkY7O0VBNEJBO0lBQ0UsWUFBQTtFQXpCRjtBQUNGO0FBNEJBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUExQkY7O0FBNkJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBMUJGOztBQTZCQTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBMUJGOztBQTZCQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBMUJGOztBQTZCQTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtBQTFCRjs7QUE2QkE7RUFDRSxlQUFBO0FBMUJGOztBQThCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBRUEsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7QUE1QkY7O0FBK0JBO0VB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LGFBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQTdCRjs7QUFnQ0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBN0JGOztBQWdDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBN0JGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiR4czogXFxcIjQ4MHB4XFxcIjtcXG4kc206IFxcXCI2MDBweFxcXCI7XFxuJG1kOiBcXFwiNzk5cHhcXFwiO1xcbiRsZzogXFxcIjEwMTBweFxcXCI7XFxuJHhsOiBcXFwiMTI4MHB4XFxcIjtcXG5cXG4kbWVkaWEtZXhwcmVzc2lvbnM6IChcXG4gIHNjcmVlbjogXFxcInNjcmVlblxcXCIsXFxuICBoYW5kaGVsZDogXFxcImhhbmRoZWxkXFxcIixcXG4gIHJldGluYTJ4OiAoXFxuICAgIFxcXCIoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxcXCIsXFxuICAgIFxcXCIobWluLXJlc29sdXRpb246IDE5MmRwaSlcXFwiLFxcbiAgKSxcXG4pICFkZWZhdWx0O1xcblxcbkBtaXhpbiBtZWRpYS1taW4oJHNpemUpIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2l6ZSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuQG1peGluIG1lZGlhLW1heCgkc2l6ZSkge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzaXplKSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AaW5jbHVkZSBtZWRpYS1tYXgoJHNtKSB7XFxuICAjcGxheWVyLXR3by1jb250YWluZXIgPiAucGxheWVyLXNlbGVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNXZoIDIwdmggMTB2aCA1dmg7XFxuICAgIGdyaWQtcm93LWdhcDogNXZoO1xcbiAgICBtYXJnaW4tdG9wOiAtMTB2aDtcXG4gIH1cXG5cXG4gICNwbGF5ZXItb25lLWNvbnRhaW5lciA+IC5wbGF5ZXItc2VsZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1dmggMTB2aCAxMHZoIDV2aDtcXG4gICAgZ3JpZC1yb3ctZ2FwOiA1dmg7XFxuICB9XFxuXFxuICAucGxheWVyLXNlbGVjdCA+IGltZyB7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gIH1cXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuY3NzLWRvb2RsZSB7XFxuICB6LWluZGV4OiAtMTAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYXBwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDB2dyAxMDB2dyAxMDB2dztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwdmg7XFxuICBnYXA6IDUwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMjAwdnc7XFxufVxcblxcbiNpbnRyby1zY3JlZW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDE1dmg7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmctaDEge1xcbiAgZm9udC1zaXplOiAwLjJyZW07XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRXhvIDJcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZy1oMiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBcXG59XFxuXFxuLmctYnRuX2xhYmVsIHtcXG4gIGhlaWdodDogN3ZoO1xcbiAgbWluLXdpZHRoOiAxNXZ3O1xcbiAgLy8gbWF4LXdpZHRoOiAxNCU7XFxuICBmb250LXNpemU6IDIuOHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FuaXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OSwgMCwgMjU1LCAwLjM2Myk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nLWJ0bl9sYWJlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg5LCAwLCAyNTUsIDAuNSk7XFxufVxcblxcbi5nLWJ0bl9jb250YWluZXIgbGFiZWwge1xcbiAgcGFkZGluZy10b3A6IDEuNXZoO1xcbn1cXG4uZy1idG5fY29udGFpbmVyIGlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLmctYnRuX2NvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmctYnRuX2xhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODksIDAsIDI1NSwgMC45KTtcXG59XFxuXFxuI3BsYXllci1zZWxlY3QtZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm9uZSBzdWJtaXQgdHdvXFxcIjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwdmg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMy4zJSk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyLW9uZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogb25lO1xcbiAgLnBsYXllci1zZWxlY3Qge1xcbiAgICAucDEteCB7XFxuICAgICAgZ3JpZC1yb3c6IDQ7XFxuICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIH1cXG4gICAgLnAxLW8ge1xcbiAgICAgIGdyaWQtcm93OiA0O1xcbiAgICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICB9XFxuICB9XFxufVxcblxcbiNwbGF5ZXItdHdvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiB0d287XFxufVxcblxcbiNzdGFydC1nYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBzdWJtaXQ7XFxuICBtYXJnaW4tdG9wOiA3NXZoO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICB3aWR0aDogMTB2dztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLXNlbGVjdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1dmggNDB2aCAxMHZoIDV2aDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTV2dyAxNXZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHJvdy1nYXA6IDN2aDtcXG4gIGNvbHVtbi1nYXA6IDAuOHZ3O1xcbn1cXG5cXG4ucGxheWVyLXNlbGVjdCA+IGltZyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxuICBncmlkLXJvdzogMjtcXG4gIG1heC13aWR0aDogMzgwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvcGFjaXR5OiA5MCU7XFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbWFyZ2luLXRvcDogLTh2aDtcXG59XFxuXFxuI3BsYXllci10d28tY29udGFpbmVyIGltZyB7XFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cXG5cXG4jcGxheWVyLW9uZS1uYW1lLFxcbiNwbGF5ZXItdHdvLW5hbWUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcbiAgZ3JpZC1yb3c6IDM7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgd2lkdGg6IDI1dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY1LCAxNTMsIDYsIDAuNjEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAzcHggZ3JlZW55ZWxsb3cgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbiNwbGF5ZXItdHdvLW5hbWUge1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG59XFxuXFxuI2RpZmZpY3VsdHktc2VsZWN0b3Ige1xcbiAgd2lkdGg6IDIwdnc7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIG1hcmdpbi10b3A6IC04dmg7XFxufVxcblxcbiNzdGFydC1idG4ge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zZWxlY3Rvci1sYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tdG9wOiAtMTF2aDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FuaXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNkaWZmaWN1bHR5LXNlbGVjdG9yIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NSwgMTUzLCA2LCAwLjYxKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogM3B4IGdyZWVueWVsbG93IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFeG8gMlxcXCIsIHNhbnMtc2VyaWY7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5wbGF5ZXItdG9nZ2xlIGxhYmVsIHtcXG4gIHBhZGRpbmctdG9wOiAxdmg7XFxufVxcblxcbiN0aW1lLW1vZGUtYnRuIHtcXG4gIG1hcmdpbi10b3A6IC04MHZoO1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDd2aDtcXG59XFxuXFxuI21vZGUtc2VsZWN0b3Ige1xcbiAgbWFyZ2luLXRvcDogLTczdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgN3ZoKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTV2dyAxNXZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpbWUtdG9nZ2xlIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcbn1cXG5cXG4udGltZS1sYWJlbCB7XFxuICB3aWR0aDogMzB2dztcXG59XFxuXFxuLmNvdW50ZG93bi10aW1lciB7XFxuICB6LWluZGV4OiAxMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG1hcmdpbi10b3A6IDEwMDBweDtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRXhvIDJcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jdGltZXIge1xcbiAgei1pbmRleDogMTA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBtYXJnaW4tdG9wOiA4MDBweDtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRXhvIDJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jZ2FtZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuI3Jlc3RhcnQtYnRuIHtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbWFyZ2luLXRvcDogMTYwMHB4O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jZ2FtZWJvYXJkLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMTUwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTUwcHgpO1xcbiAgbWFyZ2luLXRvcDogMTAwMHB4O1xcbiAgei1pbmRleDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IGhzbGEoOTcsIDEwMCUsIDU5JSwgMC44NSkgMTBweCAwcHg7XFxufVxcblxcbi5ib2FyZC1zcGFjZSB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYm9yZGVyOiBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuODUpIDNweDtcXG4gIGJhY2tncm91bmQ6IGhzbGEoOTcsIDEwMCUsIDU5JSwgMC44NSk7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyLW9uZS1zY29yZSB7XFxuICBtYXJnaW4tbGVmdDogLTYwdnc7XFxufVxcblxcbiNwbGF5ZXItdHdvLXNjb3JlIHtcXG4gIG1hcmdpbi1sZWZ0OiA2MHZ3O1xcbn1cXG5cXG4jcmVzdWx0LWFubm91bmNlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDEwMHZoO1xcbn1cXG5cXG4uc2NvcmUtY29udGFpbmVycyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBib3JkZXI6IHNvbGlkIHdoaXRlIDNweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB3aWR0aDogMzB2dztcXG4gIG1hcmdpbi10b3A6IDE2MDBweDtcXG59XFxuXFxuLnBsYXllci1wb2ludCB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogNHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi53aW4tYW5ub3VuY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qIVxuICogQ1NTUGx1Z2luIDMuOC4wXG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAwOC0yMDIxLCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4qL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgZ3NhcCwgX2dldFByb3BlcnR5LCBfbnVtRXhwLCBfbnVtV2l0aFVuaXRFeHAsIGdldFVuaXQsIF9pc1N0cmluZywgX2lzVW5kZWZpbmVkLCBfcmVuZGVyQ29tcGxleFN0cmluZywgX3JlbEV4cCwgX2ZvckVhY2hOYW1lLCBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5LCBfY29sb3JTdHJpbmdGaWx0ZXIsIF9jaGVja1BsdWdpbiwgX3JlcGxhY2VSYW5kb20sIF9wbHVnaW5zLCBHU0NhY2hlLCBQcm9wVHdlZW4sIF9jb25maWcsIF90aWNrZXIsIF9yb3VuZCwgX21pc3NpbmdQbHVnaW4sIF9nZXRTZXR0ZXIsIF9nZXRDYWNoZSwgX2NvbG9yRXhwLCBfc2V0RGVmYXVsdHMsIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSAvL2ZvciB0aGUgY29tbWVudGVkLW91dCBjbGFzc05hbWUgZmVhdHVyZS5cbn0gZnJvbSBcIi4vZ3NhcC1jb3JlLmpzXCI7XG5cbnZhciBfd2luLFxuICAgIF9kb2MsXG4gICAgX2RvY0VsZW1lbnQsXG4gICAgX3BsdWdpbkluaXR0ZWQsXG4gICAgX3RlbXBEaXYsXG4gICAgX3RlbXBEaXZTdHlsZXIsXG4gICAgX3JlY2VudFNldHRlclBsdWdpbixcbiAgICBfd2luZG93RXhpc3RzID0gZnVuY3Rpb24gX3dpbmRvd0V4aXN0cygpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG59LFxuICAgIF90cmFuc2Zvcm1Qcm9wcyA9IHt9LFxuICAgIF9SQUQyREVHID0gMTgwIC8gTWF0aC5QSSxcbiAgICBfREVHMlJBRCA9IE1hdGguUEkgLyAxODAsXG4gICAgX2F0YW4yID0gTWF0aC5hdGFuMixcbiAgICBfYmlnTnVtID0gMWU4LFxuICAgIF9jYXBzRXhwID0gLyhbQS1aXSkvZyxcbiAgICBfaG9yaXpvbnRhbEV4cCA9IC8oPzpsZWZ0fHJpZ2h0fHdpZHRofG1hcmdpbnxwYWRkaW5nfHgpL2ksXG4gICAgX2NvbXBsZXhFeHAgPSAvW1xccyxcXChdXFxTLyxcbiAgICBfcHJvcGVydHlBbGlhc2VzID0ge1xuICBhdXRvQWxwaGE6IFwib3BhY2l0eSx2aXNpYmlsaXR5XCIsXG4gIHNjYWxlOiBcInNjYWxlWCxzY2FsZVlcIixcbiAgYWxwaGE6IFwib3BhY2l0eVwiXG59LFxuICAgIF9yZW5kZXJDU1NQcm9wID0gZnVuY3Rpb24gX3JlbmRlckNTU1Byb3AocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCArIGRhdGEudSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJQcm9wV2l0aEVuZCA9IGZ1bmN0aW9uIF9yZW5kZXJQcm9wV2l0aEVuZChyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvID09PSAxID8gZGF0YS5lIDogTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAgKyBkYXRhLnUsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmcgPSBmdW5jdGlvbiBfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmcocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA/IE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwICsgZGF0YS51IDogZGF0YS5iLCBkYXRhKTtcbn0sXG4gICAgLy9pZiB1bml0cyBjaGFuZ2UsIHdlIG5lZWQgYSB3YXkgdG8gcmVuZGVyIHRoZSBvcmlnaW5hbCB1bml0L3ZhbHVlIHdoZW4gdGhlIHR3ZWVuIGdvZXMgYWxsIHRoZSB3YXkgYmFjayB0byB0aGUgYmVnaW5uaW5nIChyYXRpbzowKVxuX3JlbmRlclJvdW5kZWRDU1NQcm9wID0gZnVuY3Rpb24gX3JlbmRlclJvdW5kZWRDU1NQcm9wKHJhdGlvLCBkYXRhKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGEucyArIGRhdGEuYyAqIHJhdGlvO1xuICBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgfn4odmFsdWUgKyAodmFsdWUgPCAwID8gLS41IDogLjUpKSArIGRhdGEudSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlID0gZnVuY3Rpb24gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWUocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA/IGRhdGEuZSA6IGRhdGEuYiwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kID0gZnVuY3Rpb24gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyAhPT0gMSA/IGRhdGEuYiA6IGRhdGEuZSwgZGF0YSk7XG59LFxuICAgIF9zZXR0ZXJDU1NTdHlsZSA9IGZ1bmN0aW9uIF9zZXR0ZXJDU1NTdHlsZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyQ1NTUHJvcCA9IGZ1bmN0aW9uIF9zZXR0ZXJDU1NQcm9wKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcbn0sXG4gICAgX3NldHRlclRyYW5zZm9ybSA9IGZ1bmN0aW9uIF9zZXR0ZXJUcmFuc2Zvcm0odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5fZ3NhcFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlclNjYWxlID0gZnVuY3Rpb24gX3NldHRlclNjYWxlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuX2dzYXAuc2NhbGVYID0gdGFyZ2V0Ll9nc2FwLnNjYWxlWSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyID0gZnVuY3Rpb24gX3NldHRlclNjYWxlV2l0aFJlbmRlcih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSwgcmF0aW8pIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwO1xuICBjYWNoZS5zY2FsZVggPSBjYWNoZS5zY2FsZVkgPSB2YWx1ZTtcbiAgY2FjaGUucmVuZGVyVHJhbnNmb3JtKHJhdGlvLCBjYWNoZSk7XG59LFxuICAgIF9zZXR0ZXJUcmFuc2Zvcm1XaXRoUmVuZGVyID0gZnVuY3Rpb24gX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEsIHJhdGlvKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcDtcbiAgY2FjaGVbcHJvcGVydHldID0gdmFsdWU7XG4gIGNhY2hlLnJlbmRlclRyYW5zZm9ybShyYXRpbywgY2FjaGUpO1xufSxcbiAgICBfdHJhbnNmb3JtUHJvcCA9IFwidHJhbnNmb3JtXCIsXG4gICAgX3RyYW5zZm9ybU9yaWdpblByb3AgPSBfdHJhbnNmb3JtUHJvcCArIFwiT3JpZ2luXCIsXG4gICAgX3N1cHBvcnRzM0QsXG4gICAgX2NyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiBfY3JlYXRlRWxlbWVudCh0eXBlLCBucykge1xuICB2YXIgZSA9IF9kb2MuY3JlYXRlRWxlbWVudE5TID8gX2RvYy5jcmVhdGVFbGVtZW50TlMoKG5zIHx8IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKS5yZXBsYWNlKC9eaHR0cHMvLCBcImh0dHBcIiksIHR5cGUpIDogX2RvYy5jcmVhdGVFbGVtZW50KHR5cGUpOyAvL3NvbWUgc2VydmVycyBzd2FwIGluIGh0dHBzIGZvciBodHRwIGluIHRoZSBuYW1lc3BhY2Ugd2hpY2ggY2FuIGJyZWFrIHRoaW5ncywgbWFraW5nIFwic3R5bGVcIiBpbmFjY2Vzc2libGUuXG5cbiAgcmV0dXJuIGUuc3R5bGUgPyBlIDogX2RvYy5jcmVhdGVFbGVtZW50KHR5cGUpOyAvL3NvbWUgZW52aXJvbm1lbnRzIHdvbid0IGFsbG93IGFjY2VzcyB0byB0aGUgZWxlbWVudCdzIHN0eWxlIHdoZW4gY3JlYXRlZCB3aXRoIGEgbmFtZXNwYWNlIGluIHdoaWNoIGNhc2Ugd2UgZGVmYXVsdCB0byB0aGUgc3RhbmRhcmQgY3JlYXRlRWxlbWVudCgpIHRvIHdvcmsgYXJvdW5kIHRoZSBpc3N1ZS4gQWxzbyBub3RlIHRoYXQgd2hlbiBHU0FQIGlzIGVtYmVkZGVkIGRpcmVjdGx5IGluc2lkZSBhbiBTVkcgZmlsZSwgY3JlYXRlRWxlbWVudCgpIHdvbid0IGFsbG93IGFjY2VzcyB0byB0aGUgc3R5bGUgb2JqZWN0IGluIEZpcmVmb3ggKHNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIwMjE1LXByb2JsZW0tdXNpbmctdHdlZW5tYXgtaW4tc3RhbmRhbG9uZS1zZWxmLWNvbnRhaW5pbmctc3ZnLWZpbGUtZXJyLWNhbm5vdC1zZXQtcHJvcGVydHktY3NzdGV4dC1vZi11bmRlZmluZWQvKS5cbn0sXG4gICAgX2dldENvbXB1dGVkUHJvcGVydHkgPSBmdW5jdGlvbiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBza2lwUHJlZml4RmFsbGJhY2spIHtcbiAgdmFyIGNzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpO1xuICByZXR1cm4gY3NbcHJvcGVydHldIHx8IGNzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSkgfHwgY3MuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkgfHwgIXNraXBQcmVmaXhGYWxsYmFjayAmJiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF9jaGVja1Byb3BQcmVmaXgocHJvcGVydHkpIHx8IHByb3BlcnR5LCAxKSB8fCBcIlwiOyAvL2NzcyB2YXJpYWJsZXMgbWF5IG5vdCBuZWVkIGNhcHMgc3dhcHBlZCBvdXQgZm9yIGRhc2hlcyBhbmQgbG93ZXJjYXNlLlxufSxcbiAgICBfcHJlZml4ZXMgPSBcIk8sTW96LG1zLE1zLFdlYmtpdFwiLnNwbGl0KFwiLFwiKSxcbiAgICBfY2hlY2tQcm9wUHJlZml4ID0gZnVuY3Rpb24gX2NoZWNrUHJvcFByZWZpeChwcm9wZXJ0eSwgZWxlbWVudCwgcHJlZmVyUHJlZml4KSB7XG4gIHZhciBlID0gZWxlbWVudCB8fCBfdGVtcERpdixcbiAgICAgIHMgPSBlLnN0eWxlLFxuICAgICAgaSA9IDU7XG5cbiAgaWYgKHByb3BlcnR5IGluIHMgJiYgIXByZWZlclByZWZpeCkge1xuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHByb3BlcnR5ID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zdWJzdHIoMSk7XG5cbiAgd2hpbGUgKGktLSAmJiAhKF9wcmVmaXhlc1tpXSArIHByb3BlcnR5IGluIHMpKSB7fVxuXG4gIHJldHVybiBpIDwgMCA/IG51bGwgOiAoaSA9PT0gMyA/IFwibXNcIiA6IGkgPj0gMCA/IF9wcmVmaXhlc1tpXSA6IFwiXCIpICsgcHJvcGVydHk7XG59LFxuICAgIF9pbml0Q29yZSA9IGZ1bmN0aW9uIF9pbml0Q29yZSgpIHtcbiAgaWYgKF93aW5kb3dFeGlzdHMoKSAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICBfd2luID0gd2luZG93O1xuICAgIF9kb2MgPSBfd2luLmRvY3VtZW50O1xuICAgIF9kb2NFbGVtZW50ID0gX2RvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgX3RlbXBEaXYgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiKSB8fCB7XG4gICAgICBzdHlsZToge31cbiAgICB9O1xuICAgIF90ZW1wRGl2U3R5bGVyID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgX3RyYW5zZm9ybVByb3AgPSBfY2hlY2tQcm9wUHJlZml4KF90cmFuc2Zvcm1Qcm9wKTtcbiAgICBfdHJhbnNmb3JtT3JpZ2luUHJvcCA9IF90cmFuc2Zvcm1Qcm9wICsgXCJPcmlnaW5cIjtcbiAgICBfdGVtcERpdi5zdHlsZS5jc3NUZXh0ID0gXCJib3JkZXItd2lkdGg6MDtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO3BhZGRpbmc6MFwiOyAvL21ha2Ugc3VyZSB0byBvdmVycmlkZSBjZXJ0YWluIHByb3BlcnRpZXMgdGhhdCBtYXkgY29udGFtaW5hdGUgbWVhc3VyZW1lbnRzLCBpbiBjYXNlIHRoZSB1c2VyIGhhcyBvdmVycmVhY2hpbmcgc3R5bGUgc2hlZXRzLlxuXG4gICAgX3N1cHBvcnRzM0QgPSAhIV9jaGVja1Byb3BQcmVmaXgoXCJwZXJzcGVjdGl2ZVwiKTtcbiAgICBfcGx1Z2luSW5pdHRlZCA9IDE7XG4gIH1cbn0sXG4gICAgX2dldEJCb3hIYWNrID0gZnVuY3Rpb24gX2dldEJCb3hIYWNrKHN3YXBJZlBvc3NpYmxlKSB7XG4gIC8vd29ya3MgYXJvdW5kIGlzc3VlcyBpbiBzb21lIGJyb3dzZXJzIChsaWtlIEZpcmVmb3gpIHRoYXQgZG9uJ3QgY29ycmVjdGx5IHJlcG9ydCBnZXRCQm94KCkgb24gU1ZHIGVsZW1lbnRzIGluc2lkZSBhIDxkZWZzPiBlbGVtZW50IGFuZC9vciA8bWFzaz4uIFdlIHRyeSBjcmVhdGluZyBhbiBTVkcsIGFkZGluZyBpdCB0byB0aGUgZG9jdW1lbnRFbGVtZW50IGFuZCB0b3NzIHRoZSBlbGVtZW50IGluIHRoZXJlIHNvIHRoYXQgaXQncyBkZWZpbml0ZWx5IHBhcnQgb2YgdGhlIHJlbmRlcmluZyB0cmVlLCB0aGVuIGdyYWIgdGhlIGJib3ggYW5kIGlmIGl0IHdvcmtzLCB3ZSBhY3R1YWxseSBzd2FwIG91dCB0aGUgb3JpZ2luYWwgZ2V0QkJveCgpIG1ldGhvZCBmb3Igb3VyIG93biB0aGF0IGRvZXMgdGhlc2UgZXh0cmEgc3RlcHMgd2hlbmV2ZXIgZ2V0QkJveCBpcyBuZWVkZWQuIFRoaXMgaGVscHMgZW5zdXJlIHRoYXQgcGVyZm9ybWFuY2UgaXMgb3B0aW1hbCAob25seSBkbyBhbGwgdGhlc2UgZXh0cmEgc3RlcHMgd2hlbiBhYnNvbHV0ZWx5IG5lY2Vzc2FyeS4uLm1vc3QgZWxlbWVudHMgZG9uJ3QgbmVlZCBpdCkuXG4gIHZhciBzdmcgPSBfY3JlYXRlRWxlbWVudChcInN2Z1wiLCB0aGlzLm93bmVyU1ZHRWxlbWVudCAmJiB0aGlzLm93bmVyU1ZHRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiKSB8fCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpLFxuICAgICAgb2xkUGFyZW50ID0gdGhpcy5wYXJlbnROb2RlLFxuICAgICAgb2xkU2libGluZyA9IHRoaXMubmV4dFNpYmxpbmcsXG4gICAgICBvbGRDU1MgPSB0aGlzLnN0eWxlLmNzc1RleHQsXG4gICAgICBiYm94O1xuXG4gIF9kb2NFbGVtZW50LmFwcGVuZENoaWxkKHN2Zyk7XG5cbiAgc3ZnLmFwcGVuZENoaWxkKHRoaXMpO1xuICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgaWYgKHN3YXBJZlBvc3NpYmxlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGJib3ggPSB0aGlzLmdldEJCb3goKTtcbiAgICAgIHRoaXMuX2dzYXBCQm94ID0gdGhpcy5nZXRCQm94OyAvL3N0b3JlIHRoZSBvcmlnaW5hbFxuXG4gICAgICB0aGlzLmdldEJCb3ggPSBfZ2V0QkJveEhhY2s7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfSBlbHNlIGlmICh0aGlzLl9nc2FwQkJveCkge1xuICAgIGJib3ggPSB0aGlzLl9nc2FwQkJveCgpO1xuICB9XG5cbiAgaWYgKG9sZFBhcmVudCkge1xuICAgIGlmIChvbGRTaWJsaW5nKSB7XG4gICAgICBvbGRQYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMsIG9sZFNpYmxpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbGRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgX2RvY0VsZW1lbnQucmVtb3ZlQ2hpbGQoc3ZnKTtcblxuICB0aGlzLnN0eWxlLmNzc1RleHQgPSBvbGRDU1M7XG4gIHJldHVybiBiYm94O1xufSxcbiAgICBfZ2V0QXR0cmlidXRlRmFsbGJhY2tzID0gZnVuY3Rpb24gX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIGF0dHJpYnV0ZXNBcnJheSkge1xuICB2YXIgaSA9IGF0dHJpYnV0ZXNBcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZXNBcnJheVtpXSkpIHtcbiAgICAgIHJldHVybiB0YXJnZXQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXNBcnJheVtpXSk7XG4gICAgfVxuICB9XG59LFxuICAgIF9nZXRCQm94ID0gZnVuY3Rpb24gX2dldEJCb3godGFyZ2V0KSB7XG4gIHZhciBib3VuZHM7XG5cbiAgdHJ5IHtcbiAgICBib3VuZHMgPSB0YXJnZXQuZ2V0QkJveCgpOyAvL0ZpcmVmb3ggdGhyb3dzIGVycm9ycyBpZiB5b3UgdHJ5IGNhbGxpbmcgZ2V0QkJveCgpIG9uIGFuIFNWRyBlbGVtZW50IHRoYXQncyBub3QgcmVuZGVyZWQgKGxpa2UgaW4gYSA8c3ltYm9sPiBvciA8ZGVmcz4pLiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02MTIxMThcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBib3VuZHMgPSBfZ2V0QkJveEhhY2suY2FsbCh0YXJnZXQsIHRydWUpO1xuICB9XG5cbiAgYm91bmRzICYmIChib3VuZHMud2lkdGggfHwgYm91bmRzLmhlaWdodCkgfHwgdGFyZ2V0LmdldEJCb3ggPT09IF9nZXRCQm94SGFjayB8fCAoYm91bmRzID0gX2dldEJCb3hIYWNrLmNhbGwodGFyZ2V0LCB0cnVlKSk7IC8vc29tZSBicm93c2VycyAobGlrZSBGaXJlZm94KSBtaXNyZXBvcnQgdGhlIGJvdW5kcyBpZiB0aGUgZWxlbWVudCBoYXMgemVybyB3aWR0aCBhbmQgaGVpZ2h0IChpdCBqdXN0IGFzc3VtZXMgaXQncyBhdCB4OjAsIHk6MCksIHRodXMgd2UgbmVlZCB0byBtYW51YWxseSBncmFiIHRoZSBwb3NpdGlvbiBpbiB0aGF0IGNhc2UuXG5cbiAgcmV0dXJuIGJvdW5kcyAmJiAhYm91bmRzLndpZHRoICYmICFib3VuZHMueCAmJiAhYm91bmRzLnkgPyB7XG4gICAgeDogK19nZXRBdHRyaWJ1dGVGYWxsYmFja3ModGFyZ2V0LCBbXCJ4XCIsIFwiY3hcIiwgXCJ4MVwiXSkgfHwgMCxcbiAgICB5OiArX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIFtcInlcIiwgXCJjeVwiLCBcInkxXCJdKSB8fCAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9IDogYm91bmRzO1xufSxcbiAgICBfaXNTVkcgPSBmdW5jdGlvbiBfaXNTVkcoZSkge1xuICByZXR1cm4gISEoZS5nZXRDVE0gJiYgKCFlLnBhcmVudE5vZGUgfHwgZS5vd25lclNWR0VsZW1lbnQpICYmIF9nZXRCQm94KGUpKTtcbn0sXG4gICAgLy9yZXBvcnRzIGlmIHRoZSBlbGVtZW50IGlzIGFuIFNWRyBvbiB3aGljaCBnZXRCQm94KCkgYWN0dWFsbHkgd29ya3Ncbl9yZW1vdmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB7XG4gIGlmIChwcm9wZXJ0eSkge1xuICAgIHZhciBzdHlsZSA9IHRhcmdldC5zdHlsZTtcblxuICAgIGlmIChwcm9wZXJ0eSBpbiBfdHJhbnNmb3JtUHJvcHMgJiYgcHJvcGVydHkgIT09IF90cmFuc2Zvcm1PcmlnaW5Qcm9wKSB7XG4gICAgICBwcm9wZXJ0eSA9IF90cmFuc2Zvcm1Qcm9wO1xuICAgIH1cblxuICAgIGlmIChzdHlsZS5yZW1vdmVQcm9wZXJ0eSkge1xuICAgICAgaWYgKHByb3BlcnR5LnN1YnN0cigwLCAyKSA9PT0gXCJtc1wiIHx8IHByb3BlcnR5LnN1YnN0cigwLCA2KSA9PT0gXCJ3ZWJraXRcIikge1xuICAgICAgICAvL01pY3Jvc29mdCBhbmQgc29tZSBXZWJraXQgYnJvd3NlcnMgZG9uJ3QgY29uZm9ybSB0byB0aGUgc3RhbmRhcmQgb2YgY2FwaXRhbGl6aW5nIHRoZSBmaXJzdCBwcmVmaXggY2hhcmFjdGVyLCBzbyB3ZSBhZGp1c3Qgc28gdGhhdCB3aGVuIHdlIHByZWZpeCB0aGUgY2FwcyB3aXRoIGEgZGFzaCwgaXQncyBjb3JyZWN0IChvdGhlcndpc2UgaXQnZCBiZSBcIm1zLXRyYW5zZm9ybVwiIGluc3RlYWQgb2YgXCItbXMtdHJhbnNmb3JtXCIgZm9yIElFOSwgZm9yIGV4YW1wbGUpXG4gICAgICAgIHByb3BlcnR5ID0gXCItXCIgKyBwcm9wZXJ0eTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vbm90ZTogb2xkIHZlcnNpb25zIG9mIElFIHVzZSBcInJlbW92ZUF0dHJpYnV0ZSgpXCIgaW5zdGVhZCBvZiBcInJlbW92ZVByb3BlcnR5KClcIlxuICAgICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKHByb3BlcnR5KTtcbiAgICB9XG4gIH1cbn0sXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQgPSBmdW5jdGlvbiBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIGJlZ2lubmluZywgZW5kLCBvbmx5U2V0QXRFbmQpIHtcbiAgdmFyIHB0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAxLCBvbmx5U2V0QXRFbmQgPyBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA6IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlKTtcbiAgcGx1Z2luLl9wdCA9IHB0O1xuICBwdC5iID0gYmVnaW5uaW5nO1xuICBwdC5lID0gZW5kO1xuXG4gIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfbm9uQ29udmVydGlibGVVbml0cyA9IHtcbiAgZGVnOiAxLFxuICByYWQ6IDEsXG4gIHR1cm46IDFcbn0sXG4gICAgLy90YWtlcyBhIHNpbmdsZSB2YWx1ZSBsaWtlIDIwcHggYW5kIGNvbnZlcnRzIGl0IHRvIHRoZSB1bml0IHNwZWNpZmllZCwgbGlrZSBcIiVcIiwgcmV0dXJuaW5nIG9ubHkgdGhlIG51bWVyaWMgYW1vdW50LlxuX2NvbnZlcnRUb1VuaXQgPSBmdW5jdGlvbiBfY29udmVydFRvVW5pdCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgdW5pdCkge1xuICB2YXIgY3VyVmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwLFxuICAgICAgY3VyVW5pdCA9ICh2YWx1ZSArIFwiXCIpLnRyaW0oKS5zdWJzdHIoKGN1clZhbHVlICsgXCJcIikubGVuZ3RoKSB8fCBcInB4XCIsXG4gICAgICAvLyBzb21lIGJyb3dzZXJzIGxlYXZlIGV4dHJhIHdoaXRlc3BhY2UgYXQgdGhlIGJlZ2lubmluZyBvZiBDU1MgdmFyaWFibGVzLCBoZW5jZSB0aGUgbmVlZCB0byB0cmltKClcbiAgc3R5bGUgPSBfdGVtcERpdi5zdHlsZSxcbiAgICAgIGhvcml6b250YWwgPSBfaG9yaXpvbnRhbEV4cC50ZXN0KHByb3BlcnR5KSxcbiAgICAgIGlzUm9vdFNWRyA9IHRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwic3ZnXCIsXG4gICAgICBtZWFzdXJlUHJvcGVydHkgPSAoaXNSb290U1ZHID8gXCJjbGllbnRcIiA6IFwib2Zmc2V0XCIpICsgKGhvcml6b250YWwgPyBcIldpZHRoXCIgOiBcIkhlaWdodFwiKSxcbiAgICAgIGFtb3VudCA9IDEwMCxcbiAgICAgIHRvUGl4ZWxzID0gdW5pdCA9PT0gXCJweFwiLFxuICAgICAgdG9QZXJjZW50ID0gdW5pdCA9PT0gXCIlXCIsXG4gICAgICBweCxcbiAgICAgIHBhcmVudCxcbiAgICAgIGNhY2hlLFxuICAgICAgaXNTVkc7XG5cbiAgaWYgKHVuaXQgPT09IGN1clVuaXQgfHwgIWN1clZhbHVlIHx8IF9ub25Db252ZXJ0aWJsZVVuaXRzW3VuaXRdIHx8IF9ub25Db252ZXJ0aWJsZVVuaXRzW2N1clVuaXRdKSB7XG4gICAgcmV0dXJuIGN1clZhbHVlO1xuICB9XG5cbiAgY3VyVW5pdCAhPT0gXCJweFwiICYmICF0b1BpeGVscyAmJiAoY3VyVmFsdWUgPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgXCJweFwiKSk7XG4gIGlzU1ZHID0gdGFyZ2V0LmdldENUTSAmJiBfaXNTVkcodGFyZ2V0KTtcblxuICBpZiAoKHRvUGVyY2VudCB8fCBjdXJVbml0ID09PSBcIiVcIikgJiYgKF90cmFuc2Zvcm1Qcm9wc1twcm9wZXJ0eV0gfHwgfnByb3BlcnR5LmluZGV4T2YoXCJhZGl1c1wiKSkpIHtcbiAgICBweCA9IGlzU1ZHID8gdGFyZ2V0LmdldEJCb3goKVtob3Jpem9udGFsID8gXCJ3aWR0aFwiIDogXCJoZWlnaHRcIl0gOiB0YXJnZXRbbWVhc3VyZVByb3BlcnR5XTtcbiAgICByZXR1cm4gX3JvdW5kKHRvUGVyY2VudCA/IGN1clZhbHVlIC8gcHggKiBhbW91bnQgOiBjdXJWYWx1ZSAvIDEwMCAqIHB4KTtcbiAgfVxuXG4gIHN0eWxlW2hvcml6b250YWwgPyBcIndpZHRoXCIgOiBcImhlaWdodFwiXSA9IGFtb3VudCArICh0b1BpeGVscyA/IGN1clVuaXQgOiB1bml0KTtcbiAgcGFyZW50ID0gfnByb3BlcnR5LmluZGV4T2YoXCJhZGl1c1wiKSB8fCB1bml0ID09PSBcImVtXCIgJiYgdGFyZ2V0LmFwcGVuZENoaWxkICYmICFpc1Jvb3RTVkcgPyB0YXJnZXQgOiB0YXJnZXQucGFyZW50Tm9kZTtcblxuICBpZiAoaXNTVkcpIHtcbiAgICBwYXJlbnQgPSAodGFyZ2V0Lm93bmVyU1ZHRWxlbWVudCB8fCB7fSkucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGlmICghcGFyZW50IHx8IHBhcmVudCA9PT0gX2RvYyB8fCAhcGFyZW50LmFwcGVuZENoaWxkKSB7XG4gICAgcGFyZW50ID0gX2RvYy5ib2R5O1xuICB9XG5cbiAgY2FjaGUgPSBwYXJlbnQuX2dzYXA7XG5cbiAgaWYgKGNhY2hlICYmIHRvUGVyY2VudCAmJiBjYWNoZS53aWR0aCAmJiBob3Jpem9udGFsICYmIGNhY2hlLnRpbWUgPT09IF90aWNrZXIudGltZSkge1xuICAgIHJldHVybiBfcm91bmQoY3VyVmFsdWUgLyBjYWNoZS53aWR0aCAqIGFtb3VudCk7XG4gIH0gZWxzZSB7XG4gICAgKHRvUGVyY2VudCB8fCBjdXJVbml0ID09PSBcIiVcIikgJiYgKHN0eWxlLnBvc2l0aW9uID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBcInBvc2l0aW9uXCIpKTtcbiAgICBwYXJlbnQgPT09IHRhcmdldCAmJiAoc3R5bGUucG9zaXRpb24gPSBcInN0YXRpY1wiKTsgLy8gbGlrZSBmb3IgYm9yZGVyUmFkaXVzLCBpZiBpdCdzIGEgJSB3ZSBtdXN0IGhhdmUgaXQgcmVsYXRpdmUgdG8gdGhlIHRhcmdldCBpdHNlbGYgYnV0IHRoYXQgbWF5IG5vdCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBvciBwb3NpdGlvbjogYWJzb2x1dGUgaW4gd2hpY2ggY2FzZSBpdCdkIGdvIHVwIHRoZSBjaGFpbiB1bnRpbCBpdCBmaW5kcyBpdHMgb2Zmc2V0UGFyZW50IChiYWQpLiBwb3NpdGlvbjogc3RhdGljIHByb3RlY3RzIGFnYWluc3QgdGhhdC5cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChfdGVtcERpdik7XG4gICAgcHggPSBfdGVtcERpdlttZWFzdXJlUHJvcGVydHldO1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChfdGVtcERpdik7XG4gICAgc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cbiAgICBpZiAoaG9yaXpvbnRhbCAmJiB0b1BlcmNlbnQpIHtcbiAgICAgIGNhY2hlID0gX2dldENhY2hlKHBhcmVudCk7XG4gICAgICBjYWNoZS50aW1lID0gX3RpY2tlci50aW1lO1xuICAgICAgY2FjaGUud2lkdGggPSBwYXJlbnRbbWVhc3VyZVByb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX3JvdW5kKHRvUGl4ZWxzID8gcHggKiBjdXJWYWx1ZSAvIGFtb3VudCA6IHB4ICYmIGN1clZhbHVlID8gYW1vdW50IC8gcHggKiBjdXJWYWx1ZSA6IDApO1xufSxcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSB7XG4gIHZhciB2YWx1ZTtcbiAgX3BsdWdpbkluaXR0ZWQgfHwgX2luaXRDb3JlKCk7XG5cbiAgaWYgKHByb3BlcnR5IGluIF9wcm9wZXJ0eUFsaWFzZXMgJiYgcHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICBwcm9wZXJ0eSA9IF9wcm9wZXJ0eUFsaWFzZXNbcHJvcGVydHldO1xuXG4gICAgaWYgKH5wcm9wZXJ0eS5pbmRleE9mKFwiLFwiKSkge1xuICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5zcGxpdChcIixcIilbMF07XG4gICAgfVxuICB9XG5cbiAgaWYgKF90cmFuc2Zvcm1Qcm9wc1twcm9wZXJ0eV0gJiYgcHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICB2YWx1ZSA9IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHVuY2FjaGUpO1xuICAgIHZhbHVlID0gcHJvcGVydHkgIT09IFwidHJhbnNmb3JtT3JpZ2luXCIgPyB2YWx1ZVtwcm9wZXJ0eV0gOiB2YWx1ZS5zdmcgPyB2YWx1ZS5vcmlnaW4gOiBfZmlyc3RUd29Pbmx5KF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybU9yaWdpblByb3ApKSArIFwiIFwiICsgdmFsdWUuek9yaWdpbiArIFwicHhcIjtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IHRhcmdldC5zdHlsZVtwcm9wZXJ0eV07XG5cbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlID09PSBcImF1dG9cIiB8fCB1bmNhY2hlIHx8IH4odmFsdWUgKyBcIlwiKS5pbmRleE9mKFwiY2FsYyhcIikpIHtcbiAgICAgIHZhbHVlID0gX3NwZWNpYWxQcm9wc1twcm9wZXJ0eV0gJiYgX3NwZWNpYWxQcm9wc1twcm9wZXJ0eV0odGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCkgfHwgX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkgfHwgX2dldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHx8IChwcm9wZXJ0eSA9PT0gXCJvcGFjaXR5XCIgPyAxIDogMCk7IC8vIG5vdGU6IHNvbWUgYnJvd3NlcnMsIGxpa2UgRmlyZWZveCwgZG9uJ3QgcmVwb3J0IGJvcmRlclJhZGl1cyBjb3JyZWN0bHkhIEluc3RlYWQsIGl0IG9ubHkgcmVwb3J0cyBldmVyeSBjb3JuZXIgbGlrZSAgYm9yZGVyVG9wTGVmdFJhZGl1c1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bml0ICYmICF+KHZhbHVlICsgXCJcIikudHJpbSgpLmluZGV4T2YoXCIgXCIpID8gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHVuaXQpICsgdW5pdCA6IHZhbHVlO1xufSxcbiAgICBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nID0gZnVuY3Rpb24gX3R3ZWVuQ29tcGxleENTU1N0cmluZyh0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQpIHtcbiAgLy9ub3RlOiB3ZSBjYWxsIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcuY2FsbChwbHVnaW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGEgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0ID09PSBcIm5vbmVcIikge1xuICAgIC8vIHNvbWUgYnJvd3NlcnMgbGlrZSBTYWZhcmkgYWN0dWFsbHkgUFJFRkVSIHRoZSBwcmVmaXhlZCBwcm9wZXJ0eSBhbmQgbWlzLXJlcG9ydCB0aGUgdW5wcmVmaXhlZCB2YWx1ZSBsaWtlIGNsaXBQYXRoIChCVUcpLiBJbiBvdGhlciB3b3JkcywgZXZlbiB0aG91Z2ggY2xpcFBhdGggZXhpc3RzIGluIHRoZSBzdHlsZSAoXCJjbGlwUGF0aFwiIGluIHRhcmdldC5zdHlsZSkgYW5kIGl0J3Mgc2V0IGluIHRoZSBDU1MgcHJvcGVybHkgKGFsb25nIHdpdGggLXdlYmtpdC1jbGlwLXBhdGgpLCBTYWZhcmkgcmVwb3J0cyBjbGlwUGF0aCBhcyBcIm5vbmVcIiB3aGVyZWFzIFdlYmtpdENsaXBQYXRoIHJlcG9ydHMgYWNjdXJhdGVseSBsaWtlIFwiZWxsaXBzZSgxMDAlIDAlIGF0IDUwJSAwJSlcIiwgc28gaW4gdGhpcyBjYXNlIHdlIG11c3QgU1dJVENIIHRvIHVzaW5nIHRoZSBwcmVmaXhlZCBwcm9wZXJ0eSBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8xODMxMC1jbGlwcGF0aC1kb2VzbnQtd29yay1vbi1pb3MvXG4gICAgdmFyIHAgPSBfY2hlY2tQcm9wUHJlZml4KHByb3AsIHRhcmdldCwgMSksXG4gICAgICAgIHMgPSBwICYmIF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcCwgMSk7XG5cbiAgICBpZiAocyAmJiBzICE9PSBzdGFydCkge1xuICAgICAgcHJvcCA9IHA7XG4gICAgICBzdGFydCA9IHM7XG4gICAgfSBlbHNlIGlmIChwcm9wID09PSBcImJvcmRlckNvbG9yXCIpIHtcbiAgICAgIHN0YXJ0ID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBcImJvcmRlclRvcENvbG9yXCIpOyAvLyBGaXJlZm94IGJ1ZzogYWx3YXlzIHJlcG9ydHMgXCJib3JkZXJDb2xvclwiIGFzIFwiXCIsIHNvIHdlIG11c3QgZmFsbCBiYWNrIHRvIGJvcmRlclRvcENvbG9yLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yNDU4My1ob3ctdG8tcmV0dXJuLWNvbG9ycy10aGF0LWktaGFkLWFmdGVyLXJldmVyc2UvXG4gICAgfVxuICB9XG5cbiAgdmFyIHB0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgdGFyZ2V0LnN0eWxlLCBwcm9wLCAwLCAxLCBfcmVuZGVyQ29tcGxleFN0cmluZyksXG4gICAgICBpbmRleCA9IDAsXG4gICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgIGEsXG4gICAgICByZXN1bHQsXG4gICAgICBzdGFydFZhbHVlcyxcbiAgICAgIHN0YXJ0TnVtLFxuICAgICAgY29sb3IsXG4gICAgICBzdGFydFZhbHVlLFxuICAgICAgZW5kVmFsdWUsXG4gICAgICBlbmROdW0sXG4gICAgICBjaHVuayxcbiAgICAgIGVuZFVuaXQsXG4gICAgICBzdGFydFVuaXQsXG4gICAgICByZWxhdGl2ZSxcbiAgICAgIGVuZFZhbHVlcztcbiAgcHQuYiA9IHN0YXJ0O1xuICBwdC5lID0gZW5kO1xuICBzdGFydCArPSBcIlwiOyAvL2Vuc3VyZSB2YWx1ZXMgYXJlIHN0cmluZ3NcblxuICBlbmQgKz0gXCJcIjtcblxuICBpZiAoZW5kID09PSBcImF1dG9cIikge1xuICAgIHRhcmdldC5zdHlsZVtwcm9wXSA9IGVuZDtcbiAgICBlbmQgPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHByb3ApIHx8IGVuZDtcbiAgICB0YXJnZXQuc3R5bGVbcHJvcF0gPSBzdGFydDtcbiAgfVxuXG4gIGEgPSBbc3RhcnQsIGVuZF07XG5cbiAgX2NvbG9yU3RyaW5nRmlsdGVyKGEpOyAvL3Bhc3MgYW4gYXJyYXkgd2l0aCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyB2YWx1ZXMgYW5kIGxldCB0aGUgZmlsdGVyIGRvIHdoYXRldmVyIGl0IG5lZWRzIHRvIHRoZSB2YWx1ZXMuIElmIGNvbG9ycyBhcmUgZm91bmQsIGl0IHJldHVybnMgdHJ1ZSBhbmQgdGhlbiB3ZSBtdXN0IG1hdGNoIHdoZXJlIHRoZSBjb2xvciBzaG93cyB1cCBvcmRlci13aXNlIGJlY2F1c2UgZm9yIHRoaW5ncyBsaWtlIGJveFNoYWRvdywgc29tZXRpbWVzIHRoZSBicm93c2VyIHByb3ZpZGVzIHRoZSBjb21wdXRlZCB2YWx1ZXMgd2l0aCB0aGUgY29sb3IgRklSU1QsIGJ1dCB0aGUgdXNlciBwcm92aWRlcyBpdCB3aXRoIHRoZSBjb2xvciBMQVNULCBzbyBmbGlwIHRoZW0gaWYgbmVjZXNzYXJ5LiBTYW1lIGZvciBkcm9wLXNoYWRvdygpLlxuXG5cbiAgc3RhcnQgPSBhWzBdO1xuICBlbmQgPSBhWzFdO1xuICBzdGFydFZhbHVlcyA9IHN0YXJ0Lm1hdGNoKF9udW1XaXRoVW5pdEV4cCkgfHwgW107XG4gIGVuZFZhbHVlcyA9IGVuZC5tYXRjaChfbnVtV2l0aFVuaXRFeHApIHx8IFtdO1xuXG4gIGlmIChlbmRWYWx1ZXMubGVuZ3RoKSB7XG4gICAgd2hpbGUgKHJlc3VsdCA9IF9udW1XaXRoVW5pdEV4cC5leGVjKGVuZCkpIHtcbiAgICAgIGVuZFZhbHVlID0gcmVzdWx0WzBdO1xuICAgICAgY2h1bmsgPSBlbmQuc3Vic3RyaW5nKGluZGV4LCByZXN1bHQuaW5kZXgpO1xuXG4gICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgY29sb3IgPSAoY29sb3IgKyAxKSAlIDU7XG4gICAgICB9IGVsc2UgaWYgKGNodW5rLnN1YnN0cigtNSkgPT09IFwicmdiYShcIiB8fCBjaHVuay5zdWJzdHIoLTUpID09PSBcImhzbGEoXCIpIHtcbiAgICAgICAgY29sb3IgPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kVmFsdWUgIT09IChzdGFydFZhbHVlID0gc3RhcnRWYWx1ZXNbbWF0Y2hJbmRleCsrXSB8fCBcIlwiKSkge1xuICAgICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSkgfHwgMDtcbiAgICAgICAgc3RhcnRVbml0ID0gc3RhcnRWYWx1ZS5zdWJzdHIoKHN0YXJ0TnVtICsgXCJcIikubGVuZ3RoKTtcbiAgICAgICAgcmVsYXRpdmUgPSBlbmRWYWx1ZS5jaGFyQXQoMSkgPT09IFwiPVwiID8gKyhlbmRWYWx1ZS5jaGFyQXQoMCkgKyBcIjFcIikgOiAwO1xuXG4gICAgICAgIGlmIChyZWxhdGl2ZSkge1xuICAgICAgICAgIGVuZFZhbHVlID0gZW5kVmFsdWUuc3Vic3RyKDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG4gICAgICAgIGVuZFVuaXQgPSBlbmRWYWx1ZS5zdWJzdHIoKGVuZE51bSArIFwiXCIpLmxlbmd0aCk7XG4gICAgICAgIGluZGV4ID0gX251bVdpdGhVbml0RXhwLmxhc3RJbmRleCAtIGVuZFVuaXQubGVuZ3RoO1xuXG4gICAgICAgIGlmICghZW5kVW5pdCkge1xuICAgICAgICAgIC8vaWYgc29tZXRoaW5nIGxpa2UgXCJwZXJzcGVjdGl2ZTozMDBcIiBpcyBwYXNzZWQgaW4gYW5kIHdlIG11c3QgYWRkIGEgdW5pdCB0byB0aGUgZW5kXG4gICAgICAgICAgZW5kVW5pdCA9IGVuZFVuaXQgfHwgX2NvbmZpZy51bml0c1twcm9wXSB8fCBzdGFydFVuaXQ7XG5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IGVuZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVuZCArPSBlbmRVbml0O1xuICAgICAgICAgICAgcHQuZSArPSBlbmRVbml0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydFVuaXQgIT09IGVuZFVuaXQpIHtcbiAgICAgICAgICBzdGFydE51bSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkgfHwgMDtcbiAgICAgICAgfSAvL3RoZXNlIG5lc3RlZCBQcm9wVHdlZW5zIGFyZSBoYW5kbGVkIGluIGEgc3BlY2lhbCB3YXkgLSB3ZSdsbCBuZXZlciBhY3R1YWxseSBjYWxsIGEgcmVuZGVyIG9yIHNldHRlciBtZXRob2Qgb24gdGhlbS4gV2UnbGwganVzdCBsb29wIHRocm91Z2ggdGhlbSBpbiB0aGUgcGFyZW50IGNvbXBsZXggc3RyaW5nIFByb3BUd2VlbidzIHJlbmRlciBtZXRob2QuXG5cblxuICAgICAgICBwdC5fcHQgPSB7XG4gICAgICAgICAgX25leHQ6IHB0Ll9wdCxcbiAgICAgICAgICBwOiBjaHVuayB8fCBtYXRjaEluZGV4ID09PSAxID8gY2h1bmsgOiBcIixcIixcbiAgICAgICAgICAvL25vdGU6IFNWRyBzcGVjIGFsbG93cyBvbWlzc2lvbiBvZiBjb21tYS9zcGFjZSB3aGVuIGEgbmVnYXRpdmUgc2lnbiBpcyB3ZWRnZWQgYmV0d2VlbiB0d28gbnVtYmVycywgbGlrZSAyLjUtNS4zIGluc3RlYWQgb2YgMi41LC01LjMgYnV0IHdoZW4gdHdlZW5pbmcsIHRoZSBuZWdhdGl2ZSB2YWx1ZSBtYXkgc3dpdGNoIHRvIHBvc2l0aXZlLCBzbyB3ZSBpbnNlcnQgdGhlIGNvbW1hIGp1c3QgaW4gY2FzZS5cbiAgICAgICAgICBzOiBzdGFydE51bSxcbiAgICAgICAgICBjOiByZWxhdGl2ZSA/IHJlbGF0aXZlICogZW5kTnVtIDogZW5kTnVtIC0gc3RhcnROdW0sXG4gICAgICAgICAgbTogY29sb3IgJiYgY29sb3IgPCA0IHx8IHByb3AgPT09IFwiekluZGV4XCIgPyBNYXRoLnJvdW5kIDogMFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHB0LmMgPSBpbmRleCA8IGVuZC5sZW5ndGggPyBlbmQuc3Vic3RyaW5nKGluZGV4LCBlbmQubGVuZ3RoKSA6IFwiXCI7IC8vd2UgdXNlIHRoZSBcImNcIiBvZiB0aGUgUHJvcFR3ZWVuIHRvIHN0b3JlIHRoZSBmaW5hbCBwYXJ0IG9mIHRoZSBzdHJpbmcgKGFmdGVyIHRoZSBsYXN0IG51bWJlcilcbiAgfSBlbHNlIHtcbiAgICBwdC5yID0gcHJvcCA9PT0gXCJkaXNwbGF5XCIgJiYgZW5kID09PSBcIm5vbmVcIiA/IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kIDogX3JlbmRlck5vblR3ZWVuaW5nVmFsdWU7XG4gIH1cblxuICBfcmVsRXhwLnRlc3QoZW5kKSAmJiAocHQuZSA9IDApOyAvL2lmIHRoZSBlbmQgc3RyaW5nIGNvbnRhaW5zIHJlbGF0aXZlIHZhbHVlcyBvciBkeW5hbWljIHJhbmRvbSguLi4pIHZhbHVlcywgZGVsZXRlIHRoZSBlbmQgaXQgc28gdGhhdCBvbiB0aGUgZmluYWwgcmVuZGVyIHdlIGRvbid0IGFjdHVhbGx5IHNldCBpdCB0byB0aGUgc3RyaW5nIHdpdGggKz0gb3IgLT0gY2hhcmFjdGVycyAoZm9yY2VzIGl0IHRvIHVzZSB0aGUgY2FsY3VsYXRlZCB2YWx1ZSkuXG5cbiAgdGhpcy5fcHQgPSBwdDsgLy9zdGFydCB0aGUgbGlua2VkIGxpc3Qgd2l0aCB0aGlzIG5ldyBQcm9wVHdlZW4uIFJlbWVtYmVyLCB3ZSBjYWxsIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcuY2FsbChwbHVnaW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGFub3RoZXIgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX2tleXdvcmRUb1BlcmNlbnQgPSB7XG4gIHRvcDogXCIwJVwiLFxuICBib3R0b206IFwiMTAwJVwiLFxuICBsZWZ0OiBcIjAlXCIsXG4gIHJpZ2h0OiBcIjEwMCVcIixcbiAgY2VudGVyOiBcIjUwJVwiXG59LFxuICAgIF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzID0gZnVuY3Rpb24gX2NvbnZlcnRLZXl3b3Jkc1RvUGVyY2VudGFnZXModmFsdWUpIHtcbiAgdmFyIHNwbGl0ID0gdmFsdWUuc3BsaXQoXCIgXCIpLFxuICAgICAgeCA9IHNwbGl0WzBdLFxuICAgICAgeSA9IHNwbGl0WzFdIHx8IFwiNTAlXCI7XG5cbiAgaWYgKHggPT09IFwidG9wXCIgfHwgeCA9PT0gXCJib3R0b21cIiB8fCB5ID09PSBcImxlZnRcIiB8fCB5ID09PSBcInJpZ2h0XCIpIHtcbiAgICAvL3RoZSB1c2VyIHByb3ZpZGVkIHRoZW0gaW4gdGhlIHdyb25nIG9yZGVyLCBzbyBmbGlwIHRoZW1cbiAgICB2YWx1ZSA9IHg7XG4gICAgeCA9IHk7XG4gICAgeSA9IHZhbHVlO1xuICB9XG5cbiAgc3BsaXRbMF0gPSBfa2V5d29yZFRvUGVyY2VudFt4XSB8fCB4O1xuICBzcGxpdFsxXSA9IF9rZXl3b3JkVG9QZXJjZW50W3ldIHx8IHk7XG4gIHJldHVybiBzcGxpdC5qb2luKFwiIFwiKTtcbn0sXG4gICAgX3JlbmRlckNsZWFyUHJvcHMgPSBmdW5jdGlvbiBfcmVuZGVyQ2xlYXJQcm9wcyhyYXRpbywgZGF0YSkge1xuICBpZiAoZGF0YS50d2VlbiAmJiBkYXRhLnR3ZWVuLl90aW1lID09PSBkYXRhLnR3ZWVuLl9kdXIpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZGF0YS50LFxuICAgICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgICAgcHJvcHMgPSBkYXRhLnUsXG4gICAgICAgIGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICAgICAgICBwcm9wLFxuICAgICAgICBjbGVhclRyYW5zZm9ybXMsXG4gICAgICAgIGk7XG5cbiAgICBpZiAocHJvcHMgPT09IFwiYWxsXCIgfHwgcHJvcHMgPT09IHRydWUpIHtcbiAgICAgIHN0eWxlLmNzc1RleHQgPSBcIlwiO1xuICAgICAgY2xlYXJUcmFuc2Zvcm1zID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMgPSBwcm9wcy5zcGxpdChcIixcIik7XG4gICAgICBpID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoLS1pID4gLTEpIHtcbiAgICAgICAgcHJvcCA9IHByb3BzW2ldO1xuXG4gICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHNbcHJvcF0pIHtcbiAgICAgICAgICBjbGVhclRyYW5zZm9ybXMgPSAxO1xuICAgICAgICAgIHByb3AgPSBwcm9wID09PSBcInRyYW5zZm9ybU9yaWdpblwiID8gX3RyYW5zZm9ybU9yaWdpblByb3AgOiBfdHJhbnNmb3JtUHJvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjbGVhclRyYW5zZm9ybXMpIHtcbiAgICAgIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1Qcm9wKTtcblxuICAgICAgaWYgKGNhY2hlKSB7XG4gICAgICAgIGNhY2hlLnN2ZyAmJiB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuXG4gICAgICAgIF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIDEpOyAvLyBmb3JjZSBhbGwgdGhlIGNhY2hlZCB2YWx1ZXMgYmFjayB0byBcIm5vcm1hbFwiL2lkZW50aXR5LCBvdGhlcndpc2UgaWYgdGhlcmUncyBhbm90aGVyIHR3ZWVuIHRoYXQncyBhbHJlYWR5IHNldCB0byByZW5kZXIgdHJhbnNmb3JtcyBvbiB0aGlzIGVsZW1lbnQsIGl0IGNvdWxkIGRpc3BsYXkgdGhlIHdyb25nIHZhbHVlcy5cblxuXG4gICAgICAgIGNhY2hlLnVuY2FjaGUgPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSxcbiAgICAvLyBub3RlOiBzcGVjaWFsUHJvcHMgc2hvdWxkIHJldHVybiAxIGlmIChhbmQgb25seSBpZikgdGhleSBoYXZlIGEgbm9uLXplcm8gcHJpb3JpdHkuIEl0IGluZGljYXRlcyB3ZSBuZWVkIHRvIHNvcnQgdGhlIGxpbmtlZCBsaXN0LlxuX3NwZWNpYWxQcm9wcyA9IHtcbiAgY2xlYXJQcm9wczogZnVuY3Rpb24gY2xlYXJQcm9wcyhwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIGVuZFZhbHVlLCB0d2Vlbikge1xuICAgIGlmICh0d2Vlbi5kYXRhICE9PSBcImlzRnJvbVN0YXJ0XCIpIHtcbiAgICAgIHZhciBwdCA9IHBsdWdpbi5fcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIDAsIDAsIF9yZW5kZXJDbGVhclByb3BzKTtcbiAgICAgIHB0LnUgPSBlbmRWYWx1ZTtcbiAgICAgIHB0LnByID0gLTEwO1xuICAgICAgcHQudHdlZW4gPSB0d2VlbjtcblxuICAgICAgcGx1Z2luLl9wcm9wcy5wdXNoKHByb3BlcnR5KTtcblxuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG4gIC8qIGNsYXNzTmFtZSBmZWF0dXJlIChhYm91dCAwLjRrYiBnemlwcGVkKS5cbiAgLCBjbGFzc05hbWUocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBlbmRWYWx1ZSwgdHdlZW4pIHtcbiAgXHRsZXQgX3JlbmRlckNsYXNzTmFtZSA9IChyYXRpbywgZGF0YSkgPT4ge1xuICBcdFx0XHRkYXRhLmNzcy5yZW5kZXIocmF0aW8sIGRhdGEuY3NzKTtcbiAgXHRcdFx0aWYgKCFyYXRpbyB8fCByYXRpbyA9PT0gMSkge1xuICBcdFx0XHRcdGxldCBpbmxpbmUgPSBkYXRhLnJtdixcbiAgXHRcdFx0XHRcdHRhcmdldCA9IGRhdGEudCxcbiAgXHRcdFx0XHRcdHA7XG4gIFx0XHRcdFx0dGFyZ2V0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHJhdGlvID8gZGF0YS5lIDogZGF0YS5iKTtcbiAgXHRcdFx0XHRmb3IgKHAgaW4gaW5saW5lKSB7XG4gIFx0XHRcdFx0XHRfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH0sXG4gIFx0XHRfZ2V0QWxsU3R5bGVzID0gKHRhcmdldCkgPT4ge1xuICBcdFx0XHRsZXQgc3R5bGVzID0ge30sXG4gIFx0XHRcdFx0Y29tcHV0ZWQgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCksXG4gIFx0XHRcdFx0cDtcbiAgXHRcdFx0Zm9yIChwIGluIGNvbXB1dGVkKSB7XG4gIFx0XHRcdFx0aWYgKGlzTmFOKHApICYmIHAgIT09IFwiY3NzVGV4dFwiICYmIHAgIT09IFwibGVuZ3RoXCIpIHtcbiAgXHRcdFx0XHRcdHN0eWxlc1twXSA9IGNvbXB1dGVkW3BdO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0XHRfc2V0RGVmYXVsdHMoc3R5bGVzLCBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCAxKSk7XG4gIFx0XHRcdHJldHVybiBzdHlsZXM7XG4gIFx0XHR9LFxuICBcdFx0c3RhcnRDbGFzc0xpc3QgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIiksXG4gIFx0XHRzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgXHRcdGNzc1RleHQgPSBzdHlsZS5jc3NUZXh0LFxuICBcdFx0Y2FjaGUgPSB0YXJnZXQuX2dzYXAsXG4gIFx0XHRjbGFzc1BUID0gY2FjaGUuY2xhc3NQVCxcbiAgXHRcdGlubGluZVRvUmVtb3ZlQXRFbmQgPSB7fSxcbiAgXHRcdGRhdGEgPSB7dDp0YXJnZXQsIHBsdWdpbjpwbHVnaW4sIHJtdjppbmxpbmVUb1JlbW92ZUF0RW5kLCBiOnN0YXJ0Q2xhc3NMaXN0LCBlOihlbmRWYWx1ZS5jaGFyQXQoMSkgIT09IFwiPVwiKSA/IGVuZFZhbHVlIDogc3RhcnRDbGFzc0xpc3QucmVwbGFjZShuZXcgUmVnRXhwKFwiKD86XFxcXHN8XilcIiArIGVuZFZhbHVlLnN1YnN0cigyKSArIFwiKD8hW1xcXFx3LV0pXCIpLCBcIlwiKSArICgoZW5kVmFsdWUuY2hhckF0KDApID09PSBcIitcIikgPyBcIiBcIiArIGVuZFZhbHVlLnN1YnN0cigyKSA6IFwiXCIpfSxcbiAgXHRcdGNoYW5naW5nVmFycyA9IHt9LFxuICBcdFx0c3RhcnRWYXJzID0gX2dldEFsbFN0eWxlcyh0YXJnZXQpLFxuICBcdFx0dHJhbnNmb3JtUmVsYXRlZCA9IC8odHJhbnNmb3JtfHBlcnNwZWN0aXZlKS9pLFxuICBcdFx0ZW5kVmFycywgcDtcbiAgXHRpZiAoY2xhc3NQVCkge1xuICBcdFx0Y2xhc3NQVC5yKDEsIGNsYXNzUFQuZCk7XG4gIFx0XHRfcmVtb3ZlTGlua2VkTGlzdEl0ZW0oY2xhc3NQVC5kLnBsdWdpbiwgY2xhc3NQVCwgXCJfcHRcIik7XG4gIFx0fVxuICBcdHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBkYXRhLmUpO1xuICBcdGVuZFZhcnMgPSBfZ2V0QWxsU3R5bGVzKHRhcmdldCwgdHJ1ZSk7XG4gIFx0dGFyZ2V0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHN0YXJ0Q2xhc3NMaXN0KTtcbiAgXHRmb3IgKHAgaW4gZW5kVmFycykge1xuICBcdFx0aWYgKGVuZFZhcnNbcF0gIT09IHN0YXJ0VmFyc1twXSAmJiAhdHJhbnNmb3JtUmVsYXRlZC50ZXN0KHApKSB7XG4gIFx0XHRcdGNoYW5naW5nVmFyc1twXSA9IGVuZFZhcnNbcF07XG4gIFx0XHRcdGlmICghc3R5bGVbcF0gJiYgc3R5bGVbcF0gIT09IFwiMFwiKSB7XG4gIFx0XHRcdFx0aW5saW5lVG9SZW1vdmVBdEVuZFtwXSA9IDE7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9XG4gIFx0Y2FjaGUuY2xhc3NQVCA9IHBsdWdpbi5fcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIHRhcmdldCwgXCJjbGFzc05hbWVcIiwgMCwgMCwgX3JlbmRlckNsYXNzTmFtZSwgZGF0YSwgMCwgLTExKTtcbiAgXHRpZiAoc3R5bGUuY3NzVGV4dCAhPT0gY3NzVGV4dCkgeyAvL29ubHkgYXBwbHkgaWYgdGhpbmdzIGNoYW5nZS4gT3RoZXJ3aXNlLCBpbiBjYXNlcyBsaWtlIGEgYmFja2dyb3VuZC1pbWFnZSB0aGF0J3MgcHVsbGVkIGR5bmFtaWNhbGx5LCBpdCBjb3VsZCBjYXVzZSBhIHJlZnJlc2guIFNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIwMzY4LXBvc3NpYmxlLWdzYXAtYnVnLXN3aXRjaGluZy1jbGFzc25hbWVzLWluLWNocm9tZS8uXG4gIFx0XHRzdHlsZS5jc3NUZXh0ID0gY3NzVGV4dDsgLy93ZSByZWNvcmRlZCBjc3NUZXh0IGJlZm9yZSB3ZSBzd2FwcGVkIGNsYXNzZXMgYW5kIHJhbiBfZ2V0QWxsU3R5bGVzKCkgYmVjYXVzZSBpbiBjYXNlcyB3aGVuIGEgY2xhc3NOYW1lIHR3ZWVuIGlzIG92ZXJ3cml0dGVuLCB3ZSByZW1vdmUgYWxsIHRoZSByZWxhdGVkIHR3ZWVuaW5nIHByb3BlcnRpZXMgZnJvbSB0aGF0IGNsYXNzIGNoYW5nZSAob3RoZXJ3aXNlIGNsYXNzLXNwZWNpZmljIHN0dWZmIGNhbid0IG92ZXJyaWRlIHByb3BlcnRpZXMgd2UndmUgZGlyZWN0bHkgc2V0IG9uIHRoZSB0YXJnZXQncyBzdHlsZSBvYmplY3QgZHVlIHRvIHNwZWNpZmljaXR5KS5cbiAgXHR9XG4gIFx0X3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgdHJ1ZSk7IC8vdG8gY2xlYXIgdGhlIGNhY2hpbmcgb2YgdHJhbnNmb3Jtc1xuICBcdGRhdGEuY3NzID0gbmV3IGdzYXAucGx1Z2lucy5jc3MoKTtcbiAgXHRkYXRhLmNzcy5pbml0KHRhcmdldCwgY2hhbmdpbmdWYXJzLCB0d2Vlbik7XG4gIFx0cGx1Z2luLl9wcm9wcy5wdXNoKC4uLmRhdGEuY3NzLl9wcm9wcyk7XG4gIFx0cmV0dXJuIDE7XG4gIH1cbiAgKi9cblxufSxcblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUUkFOU0ZPUk1TXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5faWRlbnRpdHkyRE1hdHJpeCA9IFsxLCAwLCAwLCAxLCAwLCAwXSxcbiAgICBfcm90YXRpb25hbFByb3BlcnRpZXMgPSB7fSxcbiAgICBfaXNOdWxsVHJhbnNmb3JtID0gZnVuY3Rpb24gX2lzTnVsbFRyYW5zZm9ybSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IFwibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCIgfHwgdmFsdWUgPT09IFwibm9uZVwiIHx8ICF2YWx1ZTtcbn0sXG4gICAgX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSA9IGZ1bmN0aW9uIF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkodGFyZ2V0KSB7XG4gIHZhciBtYXRyaXhTdHJpbmcgPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1Qcm9wKTtcblxuICByZXR1cm4gX2lzTnVsbFRyYW5zZm9ybShtYXRyaXhTdHJpbmcpID8gX2lkZW50aXR5MkRNYXRyaXggOiBtYXRyaXhTdHJpbmcuc3Vic3RyKDcpLm1hdGNoKF9udW1FeHApLm1hcChfcm91bmQpO1xufSxcbiAgICBfZ2V0TWF0cml4ID0gZnVuY3Rpb24gX2dldE1hdHJpeCh0YXJnZXQsIGZvcmNlMkQpIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwIHx8IF9nZXRDYWNoZSh0YXJnZXQpLFxuICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICBtYXRyaXggPSBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5KHRhcmdldCksXG4gICAgICBwYXJlbnQsXG4gICAgICBuZXh0U2libGluZyxcbiAgICAgIHRlbXAsXG4gICAgICBhZGRlZFRvRE9NO1xuXG4gIGlmIChjYWNoZS5zdmcgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKSkge1xuICAgIHRlbXAgPSB0YXJnZXQudHJhbnNmb3JtLmJhc2VWYWwuY29uc29saWRhdGUoKS5tYXRyaXg7IC8vZW5zdXJlcyB0aGF0IGV2ZW4gY29tcGxleCB2YWx1ZXMgbGlrZSBcInRyYW5zbGF0ZSg1MCw2MCkgcm90YXRlKDEzNSwwLDApXCIgYXJlIHBhcnNlZCBiZWNhdXNlIGl0IG1hc2hlcyBpdCBpbnRvIGEgbWF0cml4LlxuXG4gICAgbWF0cml4ID0gW3RlbXAuYSwgdGVtcC5iLCB0ZW1wLmMsIHRlbXAuZCwgdGVtcC5lLCB0ZW1wLmZdO1xuICAgIHJldHVybiBtYXRyaXguam9pbihcIixcIikgPT09IFwiMSwwLDAsMSwwLDBcIiA/IF9pZGVudGl0eTJETWF0cml4IDogbWF0cml4O1xuICB9IGVsc2UgaWYgKG1hdHJpeCA9PT0gX2lkZW50aXR5MkRNYXRyaXggJiYgIXRhcmdldC5vZmZzZXRQYXJlbnQgJiYgdGFyZ2V0ICE9PSBfZG9jRWxlbWVudCAmJiAhY2FjaGUuc3ZnKSB7XG4gICAgLy9ub3RlOiBpZiBvZmZzZXRQYXJlbnQgaXMgbnVsbCwgdGhhdCBtZWFucyB0aGUgZWxlbWVudCBpc24ndCBpbiB0aGUgbm9ybWFsIGRvY3VtZW50IGZsb3csIGxpa2UgaWYgaXQgaGFzIGRpc3BsYXk6bm9uZSBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyBoYXMgZGlzcGxheTpub25lKS4gRmlyZWZveCByZXR1cm5zIG51bGwgZm9yIGdldENvbXB1dGVkU3R5bGUoKSBpZiB0aGUgZWxlbWVudCBpcyBpbiBhbiBpZnJhbWUgdGhhdCBoYXMgZGlzcGxheTpub25lLiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgICAvL2Jyb3dzZXJzIGRvbid0IHJlcG9ydCB0cmFuc2Zvcm1zIGFjY3VyYXRlbHkgdW5sZXNzIHRoZSBlbGVtZW50IGlzIGluIHRoZSBET00gYW5kIGhhcyBhIGRpc3BsYXkgdmFsdWUgdGhhdCdzIG5vdCBcIm5vbmVcIi4gRmlyZWZveCBhbmQgTWljcm9zb2Z0IGJyb3dzZXJzIGhhdmUgYSBwYXJ0aWFsIGJ1ZyB3aGVyZSB0aGV5J2xsIHJlcG9ydCB0cmFuc2Zvcm1zIGV2ZW4gaWYgZGlzcGxheTpub25lIEJVVCBub3QgYW55IHBlcmNlbnRhZ2UtYmFzZWQgdmFsdWVzIGxpa2UgdHJhbnNsYXRlKC01MCUsIDhweCkgd2lsbCBiZSByZXBvcnRlZCBhcyBpZiBpdCdzIHRyYW5zbGF0ZSgwLCA4cHgpLlxuICAgIHRlbXAgPSBzdHlsZS5kaXNwbGF5O1xuICAgIHN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG5cbiAgICBpZiAoIXBhcmVudCB8fCAhdGFyZ2V0Lm9mZnNldFBhcmVudCkge1xuICAgICAgLy8gbm90ZTogaW4gMy4zLjAgd2Ugc3dpdGNoZWQgdGFyZ2V0Lm9mZnNldFBhcmVudCB0byBfZG9jLmJvZHkuY29udGFpbnModGFyZ2V0KSB0byBhdm9pZCBbc29tZXRpbWVzIHVubmVjZXNzYXJ5XSBNdXRhdGlvbk9ic2VydmVyIGNhbGxzIGJ1dCB0aGF0IHdhc24ndCBhZGVxdWF0ZSBiZWNhdXNlIHRoZXJlIGFyZSBlZGdlIGNhc2VzIHdoZXJlIG5lc3RlZCBwb3NpdGlvbjogZml4ZWQgZWxlbWVudHMgbmVlZCB0byBnZXQgcmVwYXJlbnRlZCB0byBhY2N1cmF0ZWx5IHNlbnNlIHRyYW5zZm9ybXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZ3JlZW5zb2NrL0dTQVAvaXNzdWVzLzM4OCBhbmQgaHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQL2lzc3Vlcy8zNzVcbiAgICAgIGFkZGVkVG9ET00gPSAxOyAvL2ZsYWdcblxuICAgICAgbmV4dFNpYmxpbmcgPSB0YXJnZXQubmV4dFNpYmxpbmc7XG5cbiAgICAgIF9kb2NFbGVtZW50LmFwcGVuZENoaWxkKHRhcmdldCk7IC8vd2UgbXVzdCBhZGQgaXQgdG8gdGhlIERPTSBpbiBvcmRlciB0byBnZXQgdmFsdWVzIHByb3Blcmx5XG5cbiAgICB9XG5cbiAgICBtYXRyaXggPSBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5KHRhcmdldCk7XG4gICAgdGVtcCA/IHN0eWxlLmRpc3BsYXkgPSB0ZW1wIDogX3JlbW92ZVByb3BlcnR5KHRhcmdldCwgXCJkaXNwbGF5XCIpO1xuXG4gICAgaWYgKGFkZGVkVG9ET00pIHtcbiAgICAgIG5leHRTaWJsaW5nID8gcGFyZW50Lmluc2VydEJlZm9yZSh0YXJnZXQsIG5leHRTaWJsaW5nKSA6IHBhcmVudCA/IHBhcmVudC5hcHBlbmRDaGlsZCh0YXJnZXQpIDogX2RvY0VsZW1lbnQucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9yY2UyRCAmJiBtYXRyaXgubGVuZ3RoID4gNiA/IFttYXRyaXhbMF0sIG1hdHJpeFsxXSwgbWF0cml4WzRdLCBtYXRyaXhbNV0sIG1hdHJpeFsxMl0sIG1hdHJpeFsxM11dIDogbWF0cml4O1xufSxcbiAgICBfYXBwbHlTVkdPcmlnaW4gPSBmdW5jdGlvbiBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCBvcmlnaW4sIG9yaWdpbklzQWJzb2x1dGUsIHNtb290aCwgbWF0cml4QXJyYXksIHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcCxcbiAgICAgIG1hdHJpeCA9IG1hdHJpeEFycmF5IHx8IF9nZXRNYXRyaXgodGFyZ2V0LCB0cnVlKSxcbiAgICAgIHhPcmlnaW5PbGQgPSBjYWNoZS54T3JpZ2luIHx8IDAsXG4gICAgICB5T3JpZ2luT2xkID0gY2FjaGUueU9yaWdpbiB8fCAwLFxuICAgICAgeE9mZnNldE9sZCA9IGNhY2hlLnhPZmZzZXQgfHwgMCxcbiAgICAgIHlPZmZzZXRPbGQgPSBjYWNoZS55T2Zmc2V0IHx8IDAsXG4gICAgICBhID0gbWF0cml4WzBdLFxuICAgICAgYiA9IG1hdHJpeFsxXSxcbiAgICAgIGMgPSBtYXRyaXhbMl0sXG4gICAgICBkID0gbWF0cml4WzNdLFxuICAgICAgdHggPSBtYXRyaXhbNF0sXG4gICAgICB0eSA9IG1hdHJpeFs1XSxcbiAgICAgIG9yaWdpblNwbGl0ID0gb3JpZ2luLnNwbGl0KFwiIFwiKSxcbiAgICAgIHhPcmlnaW4gPSBwYXJzZUZsb2F0KG9yaWdpblNwbGl0WzBdKSB8fCAwLFxuICAgICAgeU9yaWdpbiA9IHBhcnNlRmxvYXQob3JpZ2luU3BsaXRbMV0pIHx8IDAsXG4gICAgICBib3VuZHMsXG4gICAgICBkZXRlcm1pbmFudCxcbiAgICAgIHgsXG4gICAgICB5O1xuXG4gIGlmICghb3JpZ2luSXNBYnNvbHV0ZSkge1xuICAgIGJvdW5kcyA9IF9nZXRCQm94KHRhcmdldCk7XG4gICAgeE9yaWdpbiA9IGJvdW5kcy54ICsgKH5vcmlnaW5TcGxpdFswXS5pbmRleE9mKFwiJVwiKSA/IHhPcmlnaW4gLyAxMDAgKiBib3VuZHMud2lkdGggOiB4T3JpZ2luKTtcbiAgICB5T3JpZ2luID0gYm91bmRzLnkgKyAofihvcmlnaW5TcGxpdFsxXSB8fCBvcmlnaW5TcGxpdFswXSkuaW5kZXhPZihcIiVcIikgPyB5T3JpZ2luIC8gMTAwICogYm91bmRzLmhlaWdodCA6IHlPcmlnaW4pO1xuICB9IGVsc2UgaWYgKG1hdHJpeCAhPT0gX2lkZW50aXR5MkRNYXRyaXggJiYgKGRldGVybWluYW50ID0gYSAqIGQgLSBiICogYykpIHtcbiAgICAvL2lmIGl0J3MgemVybyAobGlrZSBpZiBzY2FsZVggYW5kIHNjYWxlWSBhcmUgemVybyksIHNraXAgaXQgdG8gYXZvaWQgZXJyb3JzIHdpdGggZGl2aWRpbmcgYnkgemVyby5cbiAgICB4ID0geE9yaWdpbiAqIChkIC8gZGV0ZXJtaW5hbnQpICsgeU9yaWdpbiAqICgtYyAvIGRldGVybWluYW50KSArIChjICogdHkgLSBkICogdHgpIC8gZGV0ZXJtaW5hbnQ7XG4gICAgeSA9IHhPcmlnaW4gKiAoLWIgLyBkZXRlcm1pbmFudCkgKyB5T3JpZ2luICogKGEgLyBkZXRlcm1pbmFudCkgLSAoYSAqIHR5IC0gYiAqIHR4KSAvIGRldGVybWluYW50O1xuICAgIHhPcmlnaW4gPSB4O1xuICAgIHlPcmlnaW4gPSB5O1xuICB9XG5cbiAgaWYgKHNtb290aCB8fCBzbW9vdGggIT09IGZhbHNlICYmIGNhY2hlLnNtb290aCkge1xuICAgIHR4ID0geE9yaWdpbiAtIHhPcmlnaW5PbGQ7XG4gICAgdHkgPSB5T3JpZ2luIC0geU9yaWdpbk9sZDtcbiAgICBjYWNoZS54T2Zmc2V0ID0geE9mZnNldE9sZCArICh0eCAqIGEgKyB0eSAqIGMpIC0gdHg7XG4gICAgY2FjaGUueU9mZnNldCA9IHlPZmZzZXRPbGQgKyAodHggKiBiICsgdHkgKiBkKSAtIHR5O1xuICB9IGVsc2Uge1xuICAgIGNhY2hlLnhPZmZzZXQgPSBjYWNoZS55T2Zmc2V0ID0gMDtcbiAgfVxuXG4gIGNhY2hlLnhPcmlnaW4gPSB4T3JpZ2luO1xuICBjYWNoZS55T3JpZ2luID0geU9yaWdpbjtcbiAgY2FjaGUuc21vb3RoID0gISFzbW9vdGg7XG4gIGNhY2hlLm9yaWdpbiA9IG9yaWdpbjtcbiAgY2FjaGUub3JpZ2luSXNBYnNvbHV0ZSA9ICEhb3JpZ2luSXNBYnNvbHV0ZTtcbiAgdGFyZ2V0LnN0eWxlW190cmFuc2Zvcm1PcmlnaW5Qcm9wXSA9IFwiMHB4IDBweFwiOyAvL290aGVyd2lzZSwgaWYgc29tZW9uZSBzZXRzICBhbiBvcmlnaW4gdmlhIENTUywgaXQgd2lsbCBsaWtlbHkgaW50ZXJmZXJlIHdpdGggdGhlIFNWRyB0cmFuc2Zvcm0gYXR0cmlidXRlIG9uZXMgKGJlY2F1c2UgcmVtZW1iZXIsIHdlJ3JlIGJha2luZyB0aGUgb3JpZ2luIGludG8gdGhlIG1hdHJpeCgpIHZhbHVlKS5cblxuICBpZiAocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8pIHtcbiAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieE9yaWdpblwiLCB4T3JpZ2luT2xkLCB4T3JpZ2luKTtcblxuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ5T3JpZ2luXCIsIHlPcmlnaW5PbGQsIHlPcmlnaW4pO1xuXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8sIGNhY2hlLCBcInhPZmZzZXRcIiwgeE9mZnNldE9sZCwgY2FjaGUueE9mZnNldCk7XG5cbiAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieU9mZnNldFwiLCB5T2Zmc2V0T2xkLCBjYWNoZS55T2Zmc2V0KTtcbiAgfVxuXG4gIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN2Zy1vcmlnaW5cIiwgeE9yaWdpbiArIFwiIFwiICsgeU9yaWdpbik7XG59LFxuICAgIF9wYXJzZVRyYW5zZm9ybSA9IGZ1bmN0aW9uIF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHVuY2FjaGUpIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwIHx8IG5ldyBHU0NhY2hlKHRhcmdldCk7XG5cbiAgaWYgKFwieFwiIGluIGNhY2hlICYmICF1bmNhY2hlICYmICFjYWNoZS51bmNhY2hlKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgaW52ZXJ0ZWRTY2FsZVggPSBjYWNoZS5zY2FsZVggPCAwLFxuICAgICAgcHggPSBcInB4XCIsXG4gICAgICBkZWcgPSBcImRlZ1wiLFxuICAgICAgb3JpZ2luID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtT3JpZ2luUHJvcCkgfHwgXCIwXCIsXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHosXG4gICAgICBzY2FsZVgsXG4gICAgICBzY2FsZVksXG4gICAgICByb3RhdGlvbixcbiAgICAgIHJvdGF0aW9uWCxcbiAgICAgIHJvdGF0aW9uWSxcbiAgICAgIHNrZXdYLFxuICAgICAgc2tld1ksXG4gICAgICBwZXJzcGVjdGl2ZSxcbiAgICAgIHhPcmlnaW4sXG4gICAgICB5T3JpZ2luLFxuICAgICAgbWF0cml4LFxuICAgICAgYW5nbGUsXG4gICAgICBjb3MsXG4gICAgICBzaW4sXG4gICAgICBhLFxuICAgICAgYixcbiAgICAgIGMsXG4gICAgICBkLFxuICAgICAgYTEyLFxuICAgICAgYTIyLFxuICAgICAgdDEsXG4gICAgICB0MixcbiAgICAgIHQzLFxuICAgICAgYTEzLFxuICAgICAgYTIzLFxuICAgICAgYTMzLFxuICAgICAgYTQyLFxuICAgICAgYTQzLFxuICAgICAgYTMyO1xuICB4ID0geSA9IHogPSByb3RhdGlvbiA9IHJvdGF0aW9uWCA9IHJvdGF0aW9uWSA9IHNrZXdYID0gc2tld1kgPSBwZXJzcGVjdGl2ZSA9IDA7XG4gIHNjYWxlWCA9IHNjYWxlWSA9IDE7XG4gIGNhY2hlLnN2ZyA9ICEhKHRhcmdldC5nZXRDVE0gJiYgX2lzU1ZHKHRhcmdldCkpO1xuICBtYXRyaXggPSBfZ2V0TWF0cml4KHRhcmdldCwgY2FjaGUuc3ZnKTtcblxuICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgdDEgPSAoIWNhY2hlLnVuY2FjaGUgfHwgb3JpZ2luID09PSBcIjBweCAwcHhcIikgJiYgIXVuY2FjaGUgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc3ZnLW9yaWdpblwiKTsgLy8gaWYgb3JpZ2luIGlzIDAsMCBhbmQgY2FjaGUudW5jYWNoZSBpcyB0cnVlLCBsZXQgdGhlIHJlY29yZGVkIGRhdGEtc3ZnLW9yaWdpbiBzdGF5LiBPdGhlcndpc2UsIHdoZW5ldmVyIHdlIHNldCBjYWNoZS51bmNhY2hlIHRvIHRydWUsIHdlJ2QgbmVlZCB0byBzZXQgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAoY2FjaGUueE9yaWdpbiAtIGJib3gueCkgKyBcInB4IFwiICsgKGNhY2hlLnlPcmlnaW4gLSBiYm94LnkpICsgXCJweFwiLiBSZW1lbWJlciwgdG8gd29yayBhcm91bmQgYnJvd3NlciBpbmNvbnNpc3RlbmNpZXMgd2UgYWx3YXlzIGZvcmNlIFNWRyBlbGVtZW50cycgdHJhbnNmb3JtT3JpZ2luIHRvIDAsMCBhbmQgb2Zmc2V0IHRoZSB0cmFuc2xhdGlvbiBhY2NvcmRpbmdseS5cblxuICAgIF9hcHBseVNWR09yaWdpbih0YXJnZXQsIHQxIHx8IG9yaWdpbiwgISF0MSB8fCBjYWNoZS5vcmlnaW5Jc0Fic29sdXRlLCBjYWNoZS5zbW9vdGggIT09IGZhbHNlLCBtYXRyaXgpO1xuICB9XG5cbiAgeE9yaWdpbiA9IGNhY2hlLnhPcmlnaW4gfHwgMDtcbiAgeU9yaWdpbiA9IGNhY2hlLnlPcmlnaW4gfHwgMDtcblxuICBpZiAobWF0cml4ICE9PSBfaWRlbnRpdHkyRE1hdHJpeCkge1xuICAgIGEgPSBtYXRyaXhbMF07IC8vYTExXG5cbiAgICBiID0gbWF0cml4WzFdOyAvL2EyMVxuXG4gICAgYyA9IG1hdHJpeFsyXTsgLy9hMzFcblxuICAgIGQgPSBtYXRyaXhbM107IC8vYTQxXG5cbiAgICB4ID0gYTEyID0gbWF0cml4WzRdO1xuICAgIHkgPSBhMjIgPSBtYXRyaXhbNV07IC8vMkQgbWF0cml4XG5cbiAgICBpZiAobWF0cml4Lmxlbmd0aCA9PT0gNikge1xuICAgICAgc2NhbGVYID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuICAgICAgc2NhbGVZID0gTWF0aC5zcXJ0KGQgKiBkICsgYyAqIGMpO1xuICAgICAgcm90YXRpb24gPSBhIHx8IGIgPyBfYXRhbjIoYiwgYSkgKiBfUkFEMkRFRyA6IDA7IC8vbm90ZTogaWYgc2NhbGVYIGlzIDAsIHdlIGNhbm5vdCBhY2N1cmF0ZWx5IG1lYXN1cmUgcm90YXRpb24uIFNhbWUgZm9yIHNrZXdYIHdpdGggYSBzY2FsZVkgb2YgMC4gVGhlcmVmb3JlLCB3ZSBkZWZhdWx0IHRvIHRoZSBwcmV2aW91c2x5IHJlY29yZGVkIHZhbHVlIChvciB6ZXJvIGlmIHRoYXQgZG9lc24ndCBleGlzdCkuXG5cbiAgICAgIHNrZXdYID0gYyB8fCBkID8gX2F0YW4yKGMsIGQpICogX1JBRDJERUcgKyByb3RhdGlvbiA6IDA7XG4gICAgICBza2V3WCAmJiAoc2NhbGVZICo9IE1hdGguYWJzKE1hdGguY29zKHNrZXdYICogX0RFRzJSQUQpKSk7XG5cbiAgICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgICAgeCAtPSB4T3JpZ2luIC0gKHhPcmlnaW4gKiBhICsgeU9yaWdpbiAqIGMpO1xuICAgICAgICB5IC09IHlPcmlnaW4gLSAoeE9yaWdpbiAqIGIgKyB5T3JpZ2luICogZCk7XG4gICAgICB9IC8vM0QgbWF0cml4XG5cbiAgICB9IGVsc2Uge1xuICAgICAgYTMyID0gbWF0cml4WzZdO1xuICAgICAgYTQyID0gbWF0cml4WzddO1xuICAgICAgYTEzID0gbWF0cml4WzhdO1xuICAgICAgYTIzID0gbWF0cml4WzldO1xuICAgICAgYTMzID0gbWF0cml4WzEwXTtcbiAgICAgIGE0MyA9IG1hdHJpeFsxMV07XG4gICAgICB4ID0gbWF0cml4WzEyXTtcbiAgICAgIHkgPSBtYXRyaXhbMTNdO1xuICAgICAgeiA9IG1hdHJpeFsxNF07XG4gICAgICBhbmdsZSA9IF9hdGFuMihhMzIsIGEzMyk7XG4gICAgICByb3RhdGlvblggPSBhbmdsZSAqIF9SQUQyREVHOyAvL3JvdGF0aW9uWFxuXG4gICAgICBpZiAoYW5nbGUpIHtcbiAgICAgICAgY29zID0gTWF0aC5jb3MoLWFuZ2xlKTtcbiAgICAgICAgc2luID0gTWF0aC5zaW4oLWFuZ2xlKTtcbiAgICAgICAgdDEgPSBhMTIgKiBjb3MgKyBhMTMgKiBzaW47XG4gICAgICAgIHQyID0gYTIyICogY29zICsgYTIzICogc2luO1xuICAgICAgICB0MyA9IGEzMiAqIGNvcyArIGEzMyAqIHNpbjtcbiAgICAgICAgYTEzID0gYTEyICogLXNpbiArIGExMyAqIGNvcztcbiAgICAgICAgYTIzID0gYTIyICogLXNpbiArIGEyMyAqIGNvcztcbiAgICAgICAgYTMzID0gYTMyICogLXNpbiArIGEzMyAqIGNvcztcbiAgICAgICAgYTQzID0gYTQyICogLXNpbiArIGE0MyAqIGNvcztcbiAgICAgICAgYTEyID0gdDE7XG4gICAgICAgIGEyMiA9IHQyO1xuICAgICAgICBhMzIgPSB0MztcbiAgICAgIH0gLy9yb3RhdGlvbllcblxuXG4gICAgICBhbmdsZSA9IF9hdGFuMigtYywgYTMzKTtcbiAgICAgIHJvdGF0aW9uWSA9IGFuZ2xlICogX1JBRDJERUc7XG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcygtYW5nbGUpO1xuICAgICAgICBzaW4gPSBNYXRoLnNpbigtYW5nbGUpO1xuICAgICAgICB0MSA9IGEgKiBjb3MgLSBhMTMgKiBzaW47XG4gICAgICAgIHQyID0gYiAqIGNvcyAtIGEyMyAqIHNpbjtcbiAgICAgICAgdDMgPSBjICogY29zIC0gYTMzICogc2luO1xuICAgICAgICBhNDMgPSBkICogc2luICsgYTQzICogY29zO1xuICAgICAgICBhID0gdDE7XG4gICAgICAgIGIgPSB0MjtcbiAgICAgICAgYyA9IHQzO1xuICAgICAgfSAvL3JvdGF0aW9uWlxuXG5cbiAgICAgIGFuZ2xlID0gX2F0YW4yKGIsIGEpO1xuICAgICAgcm90YXRpb24gPSBhbmdsZSAqIF9SQUQyREVHO1xuXG4gICAgICBpZiAoYW5nbGUpIHtcbiAgICAgICAgY29zID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgICAgIHQxID0gYSAqIGNvcyArIGIgKiBzaW47XG4gICAgICAgIHQyID0gYTEyICogY29zICsgYTIyICogc2luO1xuICAgICAgICBiID0gYiAqIGNvcyAtIGEgKiBzaW47XG4gICAgICAgIGEyMiA9IGEyMiAqIGNvcyAtIGExMiAqIHNpbjtcbiAgICAgICAgYSA9IHQxO1xuICAgICAgICBhMTIgPSB0MjtcbiAgICAgIH1cblxuICAgICAgaWYgKHJvdGF0aW9uWCAmJiBNYXRoLmFicyhyb3RhdGlvblgpICsgTWF0aC5hYnMocm90YXRpb24pID4gMzU5LjkpIHtcbiAgICAgICAgLy93aGVuIHJvdGF0aW9uWSBpcyBzZXQsIGl0IHdpbGwgb2Z0ZW4gYmUgcGFyc2VkIGFzIDE4MCBkZWdyZWVzIGRpZmZlcmVudCB0aGFuIGl0IHNob3VsZCBiZSwgYW5kIHJvdGF0aW9uWCBhbmQgcm90YXRpb24gYm90aCBiZWluZyAxODAgKGl0IGxvb2tzIHRoZSBzYW1lKSwgc28gd2UgYWRqdXN0IGZvciB0aGF0IGhlcmUuXG4gICAgICAgIHJvdGF0aW9uWCA9IHJvdGF0aW9uID0gMDtcbiAgICAgICAgcm90YXRpb25ZID0gMTgwIC0gcm90YXRpb25ZO1xuICAgICAgfVxuXG4gICAgICBzY2FsZVggPSBfcm91bmQoTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIgKyBjICogYykpO1xuICAgICAgc2NhbGVZID0gX3JvdW5kKE1hdGguc3FydChhMjIgKiBhMjIgKyBhMzIgKiBhMzIpKTtcbiAgICAgIGFuZ2xlID0gX2F0YW4yKGExMiwgYTIyKTtcbiAgICAgIHNrZXdYID0gTWF0aC5hYnMoYW5nbGUpID4gMC4wMDAyID8gYW5nbGUgKiBfUkFEMkRFRyA6IDA7XG4gICAgICBwZXJzcGVjdGl2ZSA9IGE0MyA/IDEgLyAoYTQzIDwgMCA/IC1hNDMgOiBhNDMpIDogMDtcbiAgICB9XG5cbiAgICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgICAvL3NlbnNlIGlmIHRoZXJlIGFyZSBDU1MgdHJhbnNmb3JtcyBhcHBsaWVkIG9uIGFuIFNWRyBlbGVtZW50IGluIHdoaWNoIGNhc2Ugd2UgbXVzdCBvdmVyd3JpdGUgdGhlbSB3aGVuIHJlbmRlcmluZy4gVGhlIHRyYW5zZm9ybSBhdHRyaWJ1dGUgaXMgbW9yZSByZWxpYWJsZSBjcm9zcy1icm93c2VyLCBidXQgd2UgY2FuJ3QganVzdCByZW1vdmUgdGhlIENTUyBvbmVzIGJlY2F1c2UgdGhleSBtYXkgYmUgYXBwbGllZCBpbiBhIENTUyBydWxlIHNvbWV3aGVyZSAobm90IGp1c3QgaW5saW5lKS5cbiAgICAgIHQxID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcbiAgICAgIGNhY2hlLmZvcmNlQ1NTID0gdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcIlwiKSB8fCAhX2lzTnVsbFRyYW5zZm9ybShfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1Qcm9wKSk7XG4gICAgICB0MSAmJiB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHQxKTtcbiAgICB9XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoc2tld1gpID4gOTAgJiYgTWF0aC5hYnMoc2tld1gpIDwgMjcwKSB7XG4gICAgaWYgKGludmVydGVkU2NhbGVYKSB7XG4gICAgICBzY2FsZVggKj0gLTE7XG4gICAgICBza2V3WCArPSByb3RhdGlvbiA8PSAwID8gMTgwIDogLTE4MDtcbiAgICAgIHJvdGF0aW9uICs9IHJvdGF0aW9uIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2FsZVkgKj0gLTE7XG4gICAgICBza2V3WCArPSBza2V3WCA8PSAwID8gMTgwIDogLTE4MDtcbiAgICB9XG4gIH1cblxuICBjYWNoZS54ID0geCAtICgoY2FjaGUueFBlcmNlbnQgPSB4ICYmIChjYWNoZS54UGVyY2VudCB8fCAoTWF0aC5yb3VuZCh0YXJnZXQub2Zmc2V0V2lkdGggLyAyKSA9PT0gTWF0aC5yb3VuZCgteCkgPyAtNTAgOiAwKSkpID8gdGFyZ2V0Lm9mZnNldFdpZHRoICogY2FjaGUueFBlcmNlbnQgLyAxMDAgOiAwKSArIHB4O1xuICBjYWNoZS55ID0geSAtICgoY2FjaGUueVBlcmNlbnQgPSB5ICYmIChjYWNoZS55UGVyY2VudCB8fCAoTWF0aC5yb3VuZCh0YXJnZXQub2Zmc2V0SGVpZ2h0IC8gMikgPT09IE1hdGgucm91bmQoLXkpID8gLTUwIDogMCkpKSA/IHRhcmdldC5vZmZzZXRIZWlnaHQgKiBjYWNoZS55UGVyY2VudCAvIDEwMCA6IDApICsgcHg7XG4gIGNhY2hlLnogPSB6ICsgcHg7XG4gIGNhY2hlLnNjYWxlWCA9IF9yb3VuZChzY2FsZVgpO1xuICBjYWNoZS5zY2FsZVkgPSBfcm91bmQoc2NhbGVZKTtcbiAgY2FjaGUucm90YXRpb24gPSBfcm91bmQocm90YXRpb24pICsgZGVnO1xuICBjYWNoZS5yb3RhdGlvblggPSBfcm91bmQocm90YXRpb25YKSArIGRlZztcbiAgY2FjaGUucm90YXRpb25ZID0gX3JvdW5kKHJvdGF0aW9uWSkgKyBkZWc7XG4gIGNhY2hlLnNrZXdYID0gc2tld1ggKyBkZWc7XG4gIGNhY2hlLnNrZXdZID0gc2tld1kgKyBkZWc7XG4gIGNhY2hlLnRyYW5zZm9ybVBlcnNwZWN0aXZlID0gcGVyc3BlY3RpdmUgKyBweDtcblxuICBpZiAoY2FjaGUuek9yaWdpbiA9IHBhcnNlRmxvYXQob3JpZ2luLnNwbGl0KFwiIFwiKVsyXSkgfHwgMCkge1xuICAgIHN0eWxlW190cmFuc2Zvcm1PcmlnaW5Qcm9wXSA9IF9maXJzdFR3b09ubHkob3JpZ2luKTtcbiAgfVxuXG4gIGNhY2hlLnhPZmZzZXQgPSBjYWNoZS55T2Zmc2V0ID0gMDtcbiAgY2FjaGUuZm9yY2UzRCA9IF9jb25maWcuZm9yY2UzRDtcbiAgY2FjaGUucmVuZGVyVHJhbnNmb3JtID0gY2FjaGUuc3ZnID8gX3JlbmRlclNWR1RyYW5zZm9ybXMgOiBfc3VwcG9ydHMzRCA/IF9yZW5kZXJDU1NUcmFuc2Zvcm1zIDogX3JlbmRlck5vbjNEVHJhbnNmb3JtcztcbiAgY2FjaGUudW5jYWNoZSA9IDA7XG4gIHJldHVybiBjYWNoZTtcbn0sXG4gICAgX2ZpcnN0VHdvT25seSA9IGZ1bmN0aW9uIF9maXJzdFR3b09ubHkodmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSA9IHZhbHVlLnNwbGl0KFwiIFwiKSlbMF0gKyBcIiBcIiArIHZhbHVlWzFdO1xufSxcbiAgICAvL2ZvciBoYW5kbGluZyB0cmFuc2Zvcm1PcmlnaW4gdmFsdWVzLCBzdHJpcHBpbmcgb3V0IHRoZSAzcmQgZGltZW5zaW9uXG5fYWRkUHhUcmFuc2xhdGUgPSBmdW5jdGlvbiBfYWRkUHhUcmFuc2xhdGUodGFyZ2V0LCBzdGFydCwgdmFsdWUpIHtcbiAgdmFyIHVuaXQgPSBnZXRVbml0KHN0YXJ0KTtcbiAgcmV0dXJuIF9yb3VuZChwYXJzZUZsb2F0KHN0YXJ0KSArIHBhcnNlRmxvYXQoX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBcInhcIiwgdmFsdWUgKyBcInB4XCIsIHVuaXQpKSkgKyB1bml0O1xufSxcbiAgICBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlck5vbjNEVHJhbnNmb3JtcyhyYXRpbywgY2FjaGUpIHtcbiAgY2FjaGUueiA9IFwiMHB4XCI7XG4gIGNhY2hlLnJvdGF0aW9uWSA9IGNhY2hlLnJvdGF0aW9uWCA9IFwiMGRlZ1wiO1xuICBjYWNoZS5mb3JjZTNEID0gMDtcblxuICBfcmVuZGVyQ1NTVHJhbnNmb3JtcyhyYXRpbywgY2FjaGUpO1xufSxcbiAgICBfemVyb0RlZyA9IFwiMGRlZ1wiLFxuICAgIF96ZXJvUHggPSBcIjBweFwiLFxuICAgIF9lbmRQYXJlbnRoZXNpcyA9IFwiKSBcIixcbiAgICBfcmVuZGVyQ1NTVHJhbnNmb3JtcyA9IGZ1bmN0aW9uIF9yZW5kZXJDU1NUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSkge1xuICB2YXIgX3JlZiA9IGNhY2hlIHx8IHRoaXMsXG4gICAgICB4UGVyY2VudCA9IF9yZWYueFBlcmNlbnQsXG4gICAgICB5UGVyY2VudCA9IF9yZWYueVBlcmNlbnQsXG4gICAgICB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueSxcbiAgICAgIHogPSBfcmVmLnosXG4gICAgICByb3RhdGlvbiA9IF9yZWYucm90YXRpb24sXG4gICAgICByb3RhdGlvblkgPSBfcmVmLnJvdGF0aW9uWSxcbiAgICAgIHJvdGF0aW9uWCA9IF9yZWYucm90YXRpb25YLFxuICAgICAgc2tld1ggPSBfcmVmLnNrZXdYLFxuICAgICAgc2tld1kgPSBfcmVmLnNrZXdZLFxuICAgICAgc2NhbGVYID0gX3JlZi5zY2FsZVgsXG4gICAgICBzY2FsZVkgPSBfcmVmLnNjYWxlWSxcbiAgICAgIHRyYW5zZm9ybVBlcnNwZWN0aXZlID0gX3JlZi50cmFuc2Zvcm1QZXJzcGVjdGl2ZSxcbiAgICAgIGZvcmNlM0QgPSBfcmVmLmZvcmNlM0QsXG4gICAgICB0YXJnZXQgPSBfcmVmLnRhcmdldCxcbiAgICAgIHpPcmlnaW4gPSBfcmVmLnpPcmlnaW4sXG4gICAgICB0cmFuc2Zvcm1zID0gXCJcIixcbiAgICAgIHVzZTNEID0gZm9yY2UzRCA9PT0gXCJhdXRvXCIgJiYgcmF0aW8gJiYgcmF0aW8gIT09IDEgfHwgZm9yY2UzRCA9PT0gdHJ1ZTsgLy8gU2FmYXJpIGhhcyBhIGJ1ZyB0aGF0IGNhdXNlcyBpdCBub3QgdG8gcmVuZGVyIDNEIHRyYW5zZm9ybS1vcmlnaW4gdmFsdWVzIHByb3Blcmx5LCBzbyB3ZSBmb3JjZSB0aGUgeiBvcmlnaW4gdG8gMCwgcmVjb3JkIGl0IGluIHRoZSBjYWNoZSwgYW5kIHRoZW4gZG8gdGhlIG1hdGggaGVyZSB0byBvZmZzZXQgdGhlIHRyYW5zbGF0ZSB2YWx1ZXMgYWNjb3JkaW5nbHkgKGJhc2ljYWxseSBkbyB0aGUgM0QgdHJhbnNmb3JtLW9yaWdpbiBwYXJ0IG1hbnVhbGx5KVxuXG5cbiAgaWYgKHpPcmlnaW4gJiYgKHJvdGF0aW9uWCAhPT0gX3plcm9EZWcgfHwgcm90YXRpb25ZICE9PSBfemVyb0RlZykpIHtcbiAgICB2YXIgYW5nbGUgPSBwYXJzZUZsb2F0KHJvdGF0aW9uWSkgKiBfREVHMlJBRCxcbiAgICAgICAgYTEzID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICBhMzMgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgIGNvcztcblxuICAgIGFuZ2xlID0gcGFyc2VGbG9hdChyb3RhdGlvblgpICogX0RFRzJSQUQ7XG4gICAgY29zID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIHggPSBfYWRkUHhUcmFuc2xhdGUodGFyZ2V0LCB4LCBhMTMgKiBjb3MgKiAtek9yaWdpbik7XG4gICAgeSA9IF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHksIC1NYXRoLnNpbihhbmdsZSkgKiAtek9yaWdpbik7XG4gICAgeiA9IF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHosIGEzMyAqIGNvcyAqIC16T3JpZ2luICsgek9yaWdpbik7XG4gIH1cblxuICBpZiAodHJhbnNmb3JtUGVyc3BlY3RpdmUgIT09IF96ZXJvUHgpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwicGVyc3BlY3RpdmUoXCIgKyB0cmFuc2Zvcm1QZXJzcGVjdGl2ZSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmICh4UGVyY2VudCB8fCB5UGVyY2VudCkge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJ0cmFuc2xhdGUoXCIgKyB4UGVyY2VudCArIFwiJSwgXCIgKyB5UGVyY2VudCArIFwiJSkgXCI7XG4gIH1cblxuICBpZiAodXNlM0QgfHwgeCAhPT0gX3plcm9QeCB8fCB5ICE9PSBfemVyb1B4IHx8IHogIT09IF96ZXJvUHgpIHtcbiAgICB0cmFuc2Zvcm1zICs9IHogIT09IF96ZXJvUHggfHwgdXNlM0QgPyBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwiLCBcIiArIHkgKyBcIiwgXCIgKyB6ICsgXCIpIFwiIDogXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsIFwiICsgeSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChyb3RhdGlvbiAhPT0gX3plcm9EZWcpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwicm90YXRlKFwiICsgcm90YXRpb24gKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAocm90YXRpb25ZICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGVZKFwiICsgcm90YXRpb25ZICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uWCAhPT0gX3plcm9EZWcpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwicm90YXRlWChcIiArIHJvdGF0aW9uWCArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChza2V3WCAhPT0gX3plcm9EZWcgfHwgc2tld1kgIT09IF96ZXJvRGVnKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInNrZXcoXCIgKyBza2V3WCArIFwiLCBcIiArIHNrZXdZICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHNjYWxlWCAhPT0gMSB8fCBzY2FsZVkgIT09IDEpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwic2NhbGUoXCIgKyBzY2FsZVggKyBcIiwgXCIgKyBzY2FsZVkgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICB0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtcyB8fCBcInRyYW5zbGF0ZSgwLCAwKVwiO1xufSxcbiAgICBfcmVuZGVyU1ZHVHJhbnNmb3JtcyA9IGZ1bmN0aW9uIF9yZW5kZXJTVkdUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSkge1xuICB2YXIgX3JlZjIgPSBjYWNoZSB8fCB0aGlzLFxuICAgICAgeFBlcmNlbnQgPSBfcmVmMi54UGVyY2VudCxcbiAgICAgIHlQZXJjZW50ID0gX3JlZjIueVBlcmNlbnQsXG4gICAgICB4ID0gX3JlZjIueCxcbiAgICAgIHkgPSBfcmVmMi55LFxuICAgICAgcm90YXRpb24gPSBfcmVmMi5yb3RhdGlvbixcbiAgICAgIHNrZXdYID0gX3JlZjIuc2tld1gsXG4gICAgICBza2V3WSA9IF9yZWYyLnNrZXdZLFxuICAgICAgc2NhbGVYID0gX3JlZjIuc2NhbGVYLFxuICAgICAgc2NhbGVZID0gX3JlZjIuc2NhbGVZLFxuICAgICAgdGFyZ2V0ID0gX3JlZjIudGFyZ2V0LFxuICAgICAgeE9yaWdpbiA9IF9yZWYyLnhPcmlnaW4sXG4gICAgICB5T3JpZ2luID0gX3JlZjIueU9yaWdpbixcbiAgICAgIHhPZmZzZXQgPSBfcmVmMi54T2Zmc2V0LFxuICAgICAgeU9mZnNldCA9IF9yZWYyLnlPZmZzZXQsXG4gICAgICBmb3JjZUNTUyA9IF9yZWYyLmZvcmNlQ1NTLFxuICAgICAgdHggPSBwYXJzZUZsb2F0KHgpLFxuICAgICAgdHkgPSBwYXJzZUZsb2F0KHkpLFxuICAgICAgYTExLFxuICAgICAgYTIxLFxuICAgICAgYTEyLFxuICAgICAgYTIyLFxuICAgICAgdGVtcDtcblxuICByb3RhdGlvbiA9IHBhcnNlRmxvYXQocm90YXRpb24pO1xuICBza2V3WCA9IHBhcnNlRmxvYXQoc2tld1gpO1xuICBza2V3WSA9IHBhcnNlRmxvYXQoc2tld1kpO1xuXG4gIGlmIChza2V3WSkge1xuICAgIC8vZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHdlIGNvbWJpbmUgYWxsIHNrZXdpbmcgaW50byB0aGUgc2tld1ggYW5kIHJvdGF0aW9uIHZhbHVlcy4gUmVtZW1iZXIsIGEgc2tld1kgb2YgMTAgZGVncmVlcyBsb29rcyB0aGUgc2FtZSBhcyBhIHJvdGF0aW9uIG9mIDEwIGRlZ3JlZXMgcGx1cyBhIHNrZXdYIG9mIDEwIGRlZ3JlZXMuXG4gICAgc2tld1kgPSBwYXJzZUZsb2F0KHNrZXdZKTtcbiAgICBza2V3WCArPSBza2V3WTtcbiAgICByb3RhdGlvbiArPSBza2V3WTtcbiAgfVxuXG4gIGlmIChyb3RhdGlvbiB8fCBza2V3WCkge1xuICAgIHJvdGF0aW9uICo9IF9ERUcyUkFEO1xuICAgIHNrZXdYICo9IF9ERUcyUkFEO1xuICAgIGExMSA9IE1hdGguY29zKHJvdGF0aW9uKSAqIHNjYWxlWDtcbiAgICBhMjEgPSBNYXRoLnNpbihyb3RhdGlvbikgKiBzY2FsZVg7XG4gICAgYTEyID0gTWF0aC5zaW4ocm90YXRpb24gLSBza2V3WCkgKiAtc2NhbGVZO1xuICAgIGEyMiA9IE1hdGguY29zKHJvdGF0aW9uIC0gc2tld1gpICogc2NhbGVZO1xuXG4gICAgaWYgKHNrZXdYKSB7XG4gICAgICBza2V3WSAqPSBfREVHMlJBRDtcbiAgICAgIHRlbXAgPSBNYXRoLnRhbihza2V3WCAtIHNrZXdZKTtcbiAgICAgIHRlbXAgPSBNYXRoLnNxcnQoMSArIHRlbXAgKiB0ZW1wKTtcbiAgICAgIGExMiAqPSB0ZW1wO1xuICAgICAgYTIyICo9IHRlbXA7XG5cbiAgICAgIGlmIChza2V3WSkge1xuICAgICAgICB0ZW1wID0gTWF0aC50YW4oc2tld1kpO1xuICAgICAgICB0ZW1wID0gTWF0aC5zcXJ0KDEgKyB0ZW1wICogdGVtcCk7XG4gICAgICAgIGExMSAqPSB0ZW1wO1xuICAgICAgICBhMjEgKj0gdGVtcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhMTEgPSBfcm91bmQoYTExKTtcbiAgICBhMjEgPSBfcm91bmQoYTIxKTtcbiAgICBhMTIgPSBfcm91bmQoYTEyKTtcbiAgICBhMjIgPSBfcm91bmQoYTIyKTtcbiAgfSBlbHNlIHtcbiAgICBhMTEgPSBzY2FsZVg7XG4gICAgYTIyID0gc2NhbGVZO1xuICAgIGEyMSA9IGExMiA9IDA7XG4gIH1cblxuICBpZiAodHggJiYgIX4oeCArIFwiXCIpLmluZGV4T2YoXCJweFwiKSB8fCB0eSAmJiAhfih5ICsgXCJcIikuaW5kZXhPZihcInB4XCIpKSB7XG4gICAgdHggPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieFwiLCB4LCBcInB4XCIpO1xuICAgIHR5ID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBcInlcIiwgeSwgXCJweFwiKTtcbiAgfVxuXG4gIGlmICh4T3JpZ2luIHx8IHlPcmlnaW4gfHwgeE9mZnNldCB8fCB5T2Zmc2V0KSB7XG4gICAgdHggPSBfcm91bmQodHggKyB4T3JpZ2luIC0gKHhPcmlnaW4gKiBhMTEgKyB5T3JpZ2luICogYTEyKSArIHhPZmZzZXQpO1xuICAgIHR5ID0gX3JvdW5kKHR5ICsgeU9yaWdpbiAtICh4T3JpZ2luICogYTIxICsgeU9yaWdpbiAqIGEyMikgKyB5T2Zmc2V0KTtcbiAgfVxuXG4gIGlmICh4UGVyY2VudCB8fCB5UGVyY2VudCkge1xuICAgIC8vVGhlIFNWRyBzcGVjIGRvZXNuJ3Qgc3VwcG9ydCBwZXJjZW50YWdlLWJhc2VkIHRyYW5zbGF0aW9uIGluIHRoZSBcInRyYW5zZm9ybVwiIGF0dHJpYnV0ZSwgc28gd2UgbWVyZ2UgaXQgaW50byB0aGUgdHJhbnNsYXRpb24gdG8gc2ltdWxhdGUgaXQuXG4gICAgdGVtcCA9IHRhcmdldC5nZXRCQm94KCk7XG4gICAgdHggPSBfcm91bmQodHggKyB4UGVyY2VudCAvIDEwMCAqIHRlbXAud2lkdGgpO1xuICAgIHR5ID0gX3JvdW5kKHR5ICsgeVBlcmNlbnQgLyAxMDAgKiB0ZW1wLmhlaWdodCk7XG4gIH1cblxuICB0ZW1wID0gXCJtYXRyaXgoXCIgKyBhMTEgKyBcIixcIiArIGEyMSArIFwiLFwiICsgYTEyICsgXCIsXCIgKyBhMjIgKyBcIixcIiArIHR4ICsgXCIsXCIgKyB0eSArIFwiKVwiO1xuICB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHRlbXApO1xuICBmb3JjZUNTUyAmJiAodGFyZ2V0LnN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRlbXApOyAvL3NvbWUgYnJvd3NlcnMgcHJpb3JpdGl6ZSBDU1MgdHJhbnNmb3JtcyBvdmVyIHRoZSB0cmFuc2Zvcm0gYXR0cmlidXRlLiBXaGVuIHdlIHNlbnNlIHRoYXQgdGhlIHVzZXIgaGFzIENTUyB0cmFuc2Zvcm1zIGFwcGxpZWQsIHdlIG11c3Qgb3ZlcndyaXRlIHRoZW0gdGhpcyB3YXkgKG90aGVyd2lzZSBzb21lIGJyb3dzZXIgc2ltcGx5IHdvbid0IHJlbmRlciB0aGUgIHRyYW5zZm9ybSBhdHRyaWJ1dGUgY2hhbmdlcyEpXG59LFxuICAgIF9hZGRSb3RhdGlvbmFsUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4ocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBzdGFydE51bSwgZW5kVmFsdWUsIHJlbGF0aXZlKSB7XG4gIHZhciBjYXAgPSAzNjAsXG4gICAgICBpc1N0cmluZyA9IF9pc1N0cmluZyhlbmRWYWx1ZSksXG4gICAgICBlbmROdW0gPSBwYXJzZUZsb2F0KGVuZFZhbHVlKSAqIChpc1N0cmluZyAmJiB+ZW5kVmFsdWUuaW5kZXhPZihcInJhZFwiKSA/IF9SQUQyREVHIDogMSksXG4gICAgICBjaGFuZ2UgPSByZWxhdGl2ZSA/IGVuZE51bSAqIHJlbGF0aXZlIDogZW5kTnVtIC0gc3RhcnROdW0sXG4gICAgICBmaW5hbFZhbHVlID0gc3RhcnROdW0gKyBjaGFuZ2UgKyBcImRlZ1wiLFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgcHQ7XG5cbiAgaWYgKGlzU3RyaW5nKSB7XG4gICAgZGlyZWN0aW9uID0gZW5kVmFsdWUuc3BsaXQoXCJfXCIpWzFdO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJzaG9ydFwiKSB7XG4gICAgICBjaGFuZ2UgJT0gY2FwO1xuXG4gICAgICBpZiAoY2hhbmdlICE9PSBjaGFuZ2UgJSAoY2FwIC8gMikpIHtcbiAgICAgICAgY2hhbmdlICs9IGNoYW5nZSA8IDAgPyBjYXAgOiAtY2FwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiY3dcIiAmJiBjaGFuZ2UgPCAwKSB7XG4gICAgICBjaGFuZ2UgPSAoY2hhbmdlICsgY2FwICogX2JpZ051bSkgJSBjYXAgLSB+fihjaGFuZ2UgLyBjYXApICogY2FwO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImNjd1wiICYmIGNoYW5nZSA+IDApIHtcbiAgICAgIGNoYW5nZSA9IChjaGFuZ2UgLSBjYXAgKiBfYmlnTnVtKSAlIGNhcCAtIH5+KGNoYW5nZSAvIGNhcCkgKiBjYXA7XG4gICAgfVxuICB9XG5cbiAgcGx1Z2luLl9wdCA9IHB0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCBzdGFydE51bSwgY2hhbmdlLCBfcmVuZGVyUHJvcFdpdGhFbmQpO1xuICBwdC5lID0gZmluYWxWYWx1ZTtcbiAgcHQudSA9IFwiZGVnXCI7XG5cbiAgcGx1Z2luLl9wcm9wcy5wdXNoKHByb3BlcnR5KTtcblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9hc3NpZ24gPSBmdW5jdGlvbiBfYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG4gIC8vIEludGVybmV0IEV4cGxvcmVyIGRvZXNuJ3QgaGF2ZSBPYmplY3QuYXNzaWduKCksIHNvIHdlIHJlY3JlYXRlIGl0IGhlcmUuXG4gIGZvciAodmFyIHAgaW4gc291cmNlKSB7XG4gICAgdGFyZ2V0W3BdID0gc291cmNlW3BdO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0sXG4gICAgX2FkZFJhd1RyYW5zZm9ybVBUcyA9IGZ1bmN0aW9uIF9hZGRSYXdUcmFuc2Zvcm1QVHMocGx1Z2luLCB0cmFuc2Zvcm1zLCB0YXJnZXQpIHtcbiAgLy9mb3IgaGFuZGxpbmcgY2FzZXMgd2hlcmUgc29tZW9uZSBwYXNzZXMgaW4gYSB3aG9sZSB0cmFuc2Zvcm0gc3RyaW5nLCBsaWtlIHRyYW5zZm9ybTogXCJzY2FsZSgyLCAzKSByb3RhdGUoMjBkZWcpIHRyYW5zbGF0ZVkoMzBlbSlcIlxuICB2YXIgc3RhcnRDYWNoZSA9IF9hc3NpZ24oe30sIHRhcmdldC5fZ3NhcCksXG4gICAgICBleGNsdWRlID0gXCJwZXJzcGVjdGl2ZSxmb3JjZTNELHRyYW5zZm9ybU9yaWdpbixzdmdPcmlnaW5cIixcbiAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgZW5kQ2FjaGUsXG4gICAgICBwLFxuICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgIGVuZFZhbHVlLFxuICAgICAgc3RhcnROdW0sXG4gICAgICBlbmROdW0sXG4gICAgICBzdGFydFVuaXQsXG4gICAgICBlbmRVbml0O1xuXG4gIGlmIChzdGFydENhY2hlLnN2Zykge1xuICAgIHN0YXJ0VmFsdWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJcIik7XG4gICAgc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtcztcbiAgICBlbmRDYWNoZSA9IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIDEpO1xuXG4gICAgX3JlbW92ZVByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApO1xuXG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBzdGFydFZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdGFydFZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpW190cmFuc2Zvcm1Qcm9wXTtcbiAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1zO1xuICAgIGVuZENhY2hlID0gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgMSk7XG4gICAgc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gc3RhcnRWYWx1ZTtcbiAgfVxuXG4gIGZvciAocCBpbiBfdHJhbnNmb3JtUHJvcHMpIHtcbiAgICBzdGFydFZhbHVlID0gc3RhcnRDYWNoZVtwXTtcbiAgICBlbmRWYWx1ZSA9IGVuZENhY2hlW3BdO1xuXG4gICAgaWYgKHN0YXJ0VmFsdWUgIT09IGVuZFZhbHVlICYmIGV4Y2x1ZGUuaW5kZXhPZihwKSA8IDApIHtcbiAgICAgIC8vdHdlZW5pbmcgdG8gbm8gcGVyc3BlY3RpdmUgZ2l2ZXMgdmVyeSB1bmludHVpdGl2ZSByZXN1bHRzIC0ganVzdCBrZWVwIHRoZSBzYW1lIHBlcnNwZWN0aXZlIGluIHRoYXQgY2FzZS5cbiAgICAgIHN0YXJ0VW5pdCA9IGdldFVuaXQoc3RhcnRWYWx1ZSk7XG4gICAgICBlbmRVbml0ID0gZ2V0VW5pdChlbmRWYWx1ZSk7XG4gICAgICBzdGFydE51bSA9IHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCA/IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkgOiBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpO1xuICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG4gICAgICBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCBlbmRDYWNoZSwgcCwgc3RhcnROdW0sIGVuZE51bSAtIHN0YXJ0TnVtLCBfcmVuZGVyQ1NTUHJvcCk7XG4gICAgICBwbHVnaW4uX3B0LnUgPSBlbmRVbml0IHx8IDA7XG5cbiAgICAgIHBsdWdpbi5fcHJvcHMucHVzaChwKTtcbiAgICB9XG4gIH1cblxuICBfYXNzaWduKGVuZENhY2hlLCBzdGFydENhY2hlKTtcbn07IC8vIGhhbmRsZSBzcGxpdHRpbmcgYXBhcnQgcGFkZGluZywgbWFyZ2luLCBib3JkZXJXaWR0aCwgYW5kIGJvcmRlclJhZGl1cyBpbnRvIHRoZWlyIDQgY29tcG9uZW50cy4gRmlyZWZveCwgZm9yIGV4YW1wbGUsIHdvbid0IHJlcG9ydCBib3JkZXJSYWRpdXMgY29ycmVjdGx5IC0gaXQgd2lsbCBvbmx5IGRvIGJvcmRlclRvcExlZnRSYWRpdXMgYW5kIHRoZSBvdGhlciBjb3JuZXJzLiBXZSBhbHNvIHdhbnQgdG8gaGFuZGxlIHBhZGRpbmdUb3AsIG1hcmdpbkxlZnQsIGJvcmRlclJpZ2h0V2lkdGgsIGV0Yy5cblxuXG5fZm9yRWFjaE5hbWUoXCJwYWRkaW5nLG1hcmdpbixXaWR0aCxSYWRpdXNcIiwgZnVuY3Rpb24gKG5hbWUsIGluZGV4KSB7XG4gIHZhciB0ID0gXCJUb3BcIixcbiAgICAgIHIgPSBcIlJpZ2h0XCIsXG4gICAgICBiID0gXCJCb3R0b21cIixcbiAgICAgIGwgPSBcIkxlZnRcIixcbiAgICAgIHByb3BzID0gKGluZGV4IDwgMyA/IFt0LCByLCBiLCBsXSA6IFt0ICsgbCwgdCArIHIsIGIgKyByLCBiICsgbF0pLm1hcChmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBpbmRleCA8IDIgPyBuYW1lICsgc2lkZSA6IFwiYm9yZGVyXCIgKyBzaWRlICsgbmFtZTtcbiAgfSk7XG5cbiAgX3NwZWNpYWxQcm9wc1tpbmRleCA+IDEgPyBcImJvcmRlclwiICsgbmFtZSA6IG5hbWVdID0gZnVuY3Rpb24gKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgZW5kVmFsdWUsIHR3ZWVuKSB7XG4gICAgdmFyIGEsIHZhcnM7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDQpIHtcbiAgICAgIC8vIGdldHRlciwgcGFzc2VkIHRhcmdldCwgcHJvcGVydHksIGFuZCB1bml0IChmcm9tIF9nZXQoKSlcbiAgICAgIGEgPSBwcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIF9nZXQocGx1Z2luLCBwcm9wLCBwcm9wZXJ0eSk7XG4gICAgICB9KTtcbiAgICAgIHZhcnMgPSBhLmpvaW4oXCIgXCIpO1xuICAgICAgcmV0dXJuIHZhcnMuc3BsaXQoYVswXSkubGVuZ3RoID09PSA1ID8gYVswXSA6IHZhcnM7XG4gICAgfVxuXG4gICAgYSA9IChlbmRWYWx1ZSArIFwiXCIpLnNwbGl0KFwiIFwiKTtcbiAgICB2YXJzID0ge307XG4gICAgcHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCwgaSkge1xuICAgICAgcmV0dXJuIHZhcnNbcHJvcF0gPSBhW2ldID0gYVtpXSB8fCBhWyhpIC0gMSkgLyAyIHwgMF07XG4gICAgfSk7XG4gICAgcGx1Z2luLmluaXQodGFyZ2V0LCB2YXJzLCB0d2Vlbik7XG4gIH07XG59KTtcblxuZXhwb3J0IHZhciBDU1NQbHVnaW4gPSB7XG4gIG5hbWU6IFwiY3NzXCIsXG4gIHJlZ2lzdGVyOiBfaW5pdENvcmUsXG4gIHRhcmdldFRlc3Q6IGZ1bmN0aW9uIHRhcmdldFRlc3QodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldC5zdHlsZSAmJiB0YXJnZXQubm9kZVR5cGU7XG4gIH0sXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLl9wcm9wcyxcbiAgICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICAgIHN0YXJ0QXQgPSB0d2Vlbi52YXJzLnN0YXJ0QXQsXG4gICAgICAgIHN0YXJ0VmFsdWUsXG4gICAgICAgIGVuZFZhbHVlLFxuICAgICAgICBlbmROdW0sXG4gICAgICAgIHN0YXJ0TnVtLFxuICAgICAgICB0eXBlLFxuICAgICAgICBzcGVjaWFsUHJvcCxcbiAgICAgICAgcCxcbiAgICAgICAgc3RhcnRVbml0LFxuICAgICAgICBlbmRVbml0LFxuICAgICAgICByZWxhdGl2ZSxcbiAgICAgICAgaXNUcmFuc2Zvcm1SZWxhdGVkLFxuICAgICAgICB0cmFuc2Zvcm1Qcm9wVHdlZW4sXG4gICAgICAgIGNhY2hlLFxuICAgICAgICBzbW9vdGgsXG4gICAgICAgIGhhc1ByaW9yaXR5O1xuICAgIF9wbHVnaW5Jbml0dGVkIHx8IF9pbml0Q29yZSgpO1xuXG4gICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgIGlmIChwID09PSBcImF1dG9Sb3VuZFwiKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBlbmRWYWx1ZSA9IHZhcnNbcF07XG5cbiAgICAgIGlmIChfcGx1Z2luc1twXSAmJiBfY2hlY2tQbHVnaW4ocCwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpKSB7XG4gICAgICAgIC8vIHBsdWdpbnNcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHR5cGUgPSB0eXBlb2YgZW5kVmFsdWU7XG4gICAgICBzcGVjaWFsUHJvcCA9IF9zcGVjaWFsUHJvcHNbcF07XG5cbiAgICAgIGlmICh0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZW5kVmFsdWUgPSBlbmRWYWx1ZS5jYWxsKHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKTtcbiAgICAgICAgdHlwZSA9IHR5cGVvZiBlbmRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIgJiYgfmVuZFZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIpKSB7XG4gICAgICAgIGVuZFZhbHVlID0gX3JlcGxhY2VSYW5kb20oZW5kVmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3BlY2lhbFByb3ApIHtcbiAgICAgICAgc3BlY2lhbFByb3AodGhpcywgdGFyZ2V0LCBwLCBlbmRWYWx1ZSwgdHdlZW4pICYmIChoYXNQcmlvcml0eSA9IDEpO1xuICAgICAgfSBlbHNlIGlmIChwLnN1YnN0cigwLCAyKSA9PT0gXCItLVwiKSB7XG4gICAgICAgIC8vQ1NTIHZhcmlhYmxlXG4gICAgICAgIHN0YXJ0VmFsdWUgPSAoZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmdldFByb3BlcnR5VmFsdWUocCkgKyBcIlwiKS50cmltKCk7XG4gICAgICAgIGVuZFZhbHVlICs9IFwiXCI7XG4gICAgICAgIF9jb2xvckV4cC5sYXN0SW5kZXggPSAwO1xuXG4gICAgICAgIGlmICghX2NvbG9yRXhwLnRlc3Qoc3RhcnRWYWx1ZSkpIHtcbiAgICAgICAgICAvLyBjb2xvcnMgZG9uJ3QgaGF2ZSB1bml0c1xuICAgICAgICAgIHN0YXJ0VW5pdCA9IGdldFVuaXQoc3RhcnRWYWx1ZSk7XG4gICAgICAgICAgZW5kVW5pdCA9IGdldFVuaXQoZW5kVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZW5kVW5pdCA/IHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCAmJiAoc3RhcnRWYWx1ZSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkgKyBlbmRVbml0KSA6IHN0YXJ0VW5pdCAmJiAoZW5kVmFsdWUgKz0gc3RhcnRVbml0KTtcbiAgICAgICAgdGhpcy5hZGQoc3R5bGUsIFwic2V0UHJvcGVydHlcIiwgc3RhcnRWYWx1ZSwgZW5kVmFsdWUsIGluZGV4LCB0YXJnZXRzLCAwLCAwLCBwKTtcbiAgICAgICAgcHJvcHMucHVzaChwKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAoc3RhcnRBdCAmJiBwIGluIHN0YXJ0QXQpIHtcbiAgICAgICAgICAvLyBpbiBjYXNlIHNvbWVvbmUgaGFyZC1jb2RlcyBhIGNvbXBsZXggdmFsdWUgYXMgdGhlIHN0YXJ0LCBsaWtlIHRvcDogXCJjYWxjKDJ2aCAvIDIpXCIuIFdpdGhvdXQgdGhpcywgaXQnZCB1c2UgdGhlIGNvbXB1dGVkIHZhbHVlIChhbHdheXMgaW4gcHgpXG4gICAgICAgICAgc3RhcnRWYWx1ZSA9IHR5cGVvZiBzdGFydEF0W3BdID09PSBcImZ1bmN0aW9uXCIgPyBzdGFydEF0W3BdLmNhbGwodHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpIDogc3RhcnRBdFtwXTtcbiAgICAgICAgICBwIGluIF9jb25maWcudW5pdHMgJiYgIWdldFVuaXQoc3RhcnRWYWx1ZSkgJiYgKHN0YXJ0VmFsdWUgKz0gX2NvbmZpZy51bml0c1twXSk7IC8vIGZvciBjYXNlcyB3aGVuIHNvbWVvbmUgcGFzc2VzIGluIGEgdW5pdGxlc3MgdmFsdWUgbGlrZSB7eDogMTAwfTsgaWYgd2UgdHJ5IHNldHRpbmcgdHJhbnNsYXRlKDEwMCwgMHB4KSBpdCB3b24ndCB3b3JrLlxuXG4gICAgICAgICAgX2lzU3RyaW5nKHN0YXJ0VmFsdWUpICYmIH5zdGFydFZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIpICYmIChzdGFydFZhbHVlID0gX3JlcGxhY2VSYW5kb20oc3RhcnRWYWx1ZSkpO1xuICAgICAgICAgIChzdGFydFZhbHVlICsgXCJcIikuY2hhckF0KDEpID09PSBcIj1cIiAmJiAoc3RhcnRWYWx1ZSA9IF9nZXQodGFyZ2V0LCBwKSk7IC8vIGNhbid0IHdvcmsgd2l0aCByZWxhdGl2ZSB2YWx1ZXNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFydFZhbHVlID0gX2dldCh0YXJnZXQsIHApO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnROdW0gPSBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpO1xuICAgICAgICByZWxhdGl2ZSA9IHR5cGUgPT09IFwic3RyaW5nXCIgJiYgZW5kVmFsdWUuY2hhckF0KDEpID09PSBcIj1cIiA/ICsoZW5kVmFsdWUuY2hhckF0KDApICsgXCIxXCIpIDogMDtcbiAgICAgICAgcmVsYXRpdmUgJiYgKGVuZFZhbHVlID0gZW5kVmFsdWUuc3Vic3RyKDIpKTtcbiAgICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHAgaW4gX3Byb3BlcnR5QWxpYXNlcykge1xuICAgICAgICAgIGlmIChwID09PSBcImF1dG9BbHBoYVwiKSB7XG4gICAgICAgICAgICAvL3NwZWNpYWwgY2FzZSB3aGVyZSB3ZSBjb250cm9sIHRoZSB2aXNpYmlsaXR5IGFsb25nIHdpdGggb3BhY2l0eS4gV2Ugc3RpbGwgYWxsb3cgdGhlIG9wYWNpdHkgdmFsdWUgdG8gcGFzcyB0aHJvdWdoIGFuZCBnZXQgdHdlZW5lZC5cbiAgICAgICAgICAgIGlmIChzdGFydE51bSA9PT0gMSAmJiBfZ2V0KHRhcmdldCwgXCJ2aXNpYmlsaXR5XCIpID09PSBcImhpZGRlblwiICYmIGVuZE51bSkge1xuICAgICAgICAgICAgICAvL2lmIHZpc2liaWxpdHkgaXMgaW5pdGlhbGx5IHNldCB0byBcImhpZGRlblwiLCB3ZSBzaG91bGQgaW50ZXJwcmV0IHRoYXQgYXMgaW50ZW50IHRvIG1ha2Ugb3BhY2l0eSAwIChhIGNvbnZlbmllbmNlKVxuICAgICAgICAgICAgICBzdGFydE51bSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIHN0eWxlLCBcInZpc2liaWxpdHlcIiwgc3RhcnROdW0gPyBcImluaGVyaXRcIiA6IFwiaGlkZGVuXCIsIGVuZE51bSA/IFwiaW5oZXJpdFwiIDogXCJoaWRkZW5cIiwgIWVuZE51bSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHAgIT09IFwic2NhbGVcIiAmJiBwICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBwID0gX3Byb3BlcnR5QWxpYXNlc1twXTtcbiAgICAgICAgICAgIH5wLmluZGV4T2YoXCIsXCIpICYmIChwID0gcC5zcGxpdChcIixcIilbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlzVHJhbnNmb3JtUmVsYXRlZCA9IHAgaW4gX3RyYW5zZm9ybVByb3BzOyAvLy0tLSBUUkFOU0ZPUk0tUkVMQVRFRCAtLS1cblxuICAgICAgICBpZiAoaXNUcmFuc2Zvcm1SZWxhdGVkKSB7XG4gICAgICAgICAgaWYgKCF0cmFuc2Zvcm1Qcm9wVHdlZW4pIHtcbiAgICAgICAgICAgIGNhY2hlID0gdGFyZ2V0Ll9nc2FwO1xuICAgICAgICAgICAgY2FjaGUucmVuZGVyVHJhbnNmb3JtICYmICF2YXJzLnBhcnNlVHJhbnNmb3JtIHx8IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHZhcnMucGFyc2VUcmFuc2Zvcm0pOyAvLyBpZiwgZm9yIGV4YW1wbGUsIGdzYXAuc2V0KC4uLiB7dHJhbnNmb3JtOlwidHJhbnNsYXRlWCg1MHZ3KVwifSksIHRoZSBfZ2V0KCkgY2FsbCBkb2Vzbid0IHBhcnNlIHRoZSB0cmFuc2Zvcm0sIHRodXMgY2FjaGUucmVuZGVyVHJhbnNmb3JtIHdvbid0IGJlIHNldCB5ZXQgc28gZm9yY2UgdGhlIHBhcnNpbmcgb2YgdGhlIHRyYW5zZm9ybSBoZXJlLlxuXG4gICAgICAgICAgICBzbW9vdGggPSB2YXJzLnNtb290aE9yaWdpbiAhPT0gZmFsc2UgJiYgY2FjaGUuc21vb3RoO1xuICAgICAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuID0gdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBzdHlsZSwgX3RyYW5zZm9ybVByb3AsIDAsIDEsIGNhY2hlLnJlbmRlclRyYW5zZm9ybSwgY2FjaGUsIDAsIC0xKTsgLy90aGUgZmlyc3QgdGltZSB0aHJvdWdoLCBjcmVhdGUgdGhlIHJlbmRlcmluZyBQcm9wVHdlZW4gc28gdGhhdCBpdCBydW5zIExBU1QgKGluIHRoZSBsaW5rZWQgbGlzdCwgd2Uga2VlcCBhZGRpbmcgdG8gdGhlIGJlZ2lubmluZylcblxuICAgICAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuLmRlcCA9IDE7IC8vZmxhZyBpdCBhcyBkZXBlbmRlbnQgc28gdGhhdCBpZiB0aGluZ3MgZ2V0IGtpbGxlZC9vdmVyd3JpdHRlbiBhbmQgdGhpcyBpcyB0aGUgb25seSBQcm9wVHdlZW4gbGVmdCwgd2UgY2FuIHNhZmVseSBraWxsIHRoZSB3aG9sZSB0d2Vlbi5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocCA9PT0gXCJzY2FsZVwiKSB7XG4gICAgICAgICAgICB0aGlzLl9wdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIGNhY2hlLCBcInNjYWxlWVwiLCBjYWNoZS5zY2FsZVksIChyZWxhdGl2ZSA/IHJlbGF0aXZlICogZW5kTnVtIDogZW5kTnVtIC0gY2FjaGUuc2NhbGVZKSB8fCAwKTtcbiAgICAgICAgICAgIHByb3BzLnB1c2goXCJzY2FsZVlcIiwgcCk7XG4gICAgICAgICAgICBwICs9IFwiWFwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIikge1xuICAgICAgICAgICAgZW5kVmFsdWUgPSBfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyhlbmRWYWx1ZSk7IC8vaW4gY2FzZSBzb21ldGhpbmcgbGlrZSBcImxlZnQgdG9wXCIgb3IgXCJib3R0b20gcmlnaHRcIiBpcyBwYXNzZWQgaW4uIENvbnZlcnQgdG8gcGVyY2VudGFnZXMuXG5cbiAgICAgICAgICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgICAgICAgICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgZW5kVmFsdWUsIDAsIHNtb290aCwgMCwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbmRVbml0ID0gcGFyc2VGbG9hdChlbmRWYWx1ZS5zcGxpdChcIiBcIilbMl0pIHx8IDA7IC8vaGFuZGxlIHRoZSB6T3JpZ2luIHNlcGFyYXRlbHkhXG5cbiAgICAgICAgICAgICAgZW5kVW5pdCAhPT0gY2FjaGUuek9yaWdpbiAmJiBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBjYWNoZSwgXCJ6T3JpZ2luXCIsIGNhY2hlLnpPcmlnaW4sIGVuZFVuaXQpO1xuXG4gICAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIHN0eWxlLCBwLCBfZmlyc3RUd29Pbmx5KHN0YXJ0VmFsdWUpLCBfZmlyc3RUd29Pbmx5KGVuZFZhbHVlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJzdmdPcmlnaW5cIikge1xuICAgICAgICAgICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgZW5kVmFsdWUsIDEsIHNtb290aCwgMCwgdGhpcyk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCBpbiBfcm90YXRpb25hbFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIF9hZGRSb3RhdGlvbmFsUHJvcFR3ZWVuKHRoaXMsIGNhY2hlLCBwLCBzdGFydE51bSwgZW5kVmFsdWUsIHJlbGF0aXZlKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInNtb290aE9yaWdpblwiKSB7XG4gICAgICAgICAgICBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBjYWNoZSwgXCJzbW9vdGhcIiwgY2FjaGUuc21vb3RoLCBlbmRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJmb3JjZTNEXCIpIHtcbiAgICAgICAgICAgIGNhY2hlW3BdID0gZW5kVmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgICAgICAgIF9hZGRSYXdUcmFuc2Zvcm1QVHModGhpcywgZW5kVmFsdWUsIHRhcmdldCk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghKHAgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgcCA9IF9jaGVja1Byb3BQcmVmaXgocCkgfHwgcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1RyYW5zZm9ybVJlbGF0ZWQgfHwgKGVuZE51bSB8fCBlbmROdW0gPT09IDApICYmIChzdGFydE51bSB8fCBzdGFydE51bSA9PT0gMCkgJiYgIV9jb21wbGV4RXhwLnRlc3QoZW5kVmFsdWUpICYmIHAgaW4gc3R5bGUpIHtcbiAgICAgICAgICBzdGFydFVuaXQgPSAoc3RhcnRWYWx1ZSArIFwiXCIpLnN1YnN0cigoc3RhcnROdW0gKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICAgIGVuZE51bSB8fCAoZW5kTnVtID0gMCk7IC8vIHByb3RlY3QgYWdhaW5zdCBOYU5cblxuICAgICAgICAgIGVuZFVuaXQgPSBnZXRVbml0KGVuZFZhbHVlKSB8fCAocCBpbiBfY29uZmlnLnVuaXRzID8gX2NvbmZpZy51bml0c1twXSA6IHN0YXJ0VW5pdCk7XG4gICAgICAgICAgc3RhcnRVbml0ICE9PSBlbmRVbml0ICYmIChzdGFydE51bSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkpO1xuICAgICAgICAgIHRoaXMuX3B0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgaXNUcmFuc2Zvcm1SZWxhdGVkID8gY2FjaGUgOiBzdHlsZSwgcCwgc3RhcnROdW0sIHJlbGF0aXZlID8gcmVsYXRpdmUgKiBlbmROdW0gOiBlbmROdW0gLSBzdGFydE51bSwgIWlzVHJhbnNmb3JtUmVsYXRlZCAmJiAoZW5kVW5pdCA9PT0gXCJweFwiIHx8IHAgPT09IFwiekluZGV4XCIpICYmIHZhcnMuYXV0b1JvdW5kICE9PSBmYWxzZSA/IF9yZW5kZXJSb3VuZGVkQ1NTUHJvcCA6IF9yZW5kZXJDU1NQcm9wKTtcbiAgICAgICAgICB0aGlzLl9wdC51ID0gZW5kVW5pdCB8fCAwO1xuXG4gICAgICAgICAgaWYgKHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCAmJiBlbmRVbml0ICE9PSBcIiVcIikge1xuICAgICAgICAgICAgLy93aGVuIHRoZSB0d2VlbiBnb2VzIGFsbCB0aGUgd2F5IGJhY2sgdG8gdGhlIGJlZ2lubmluZywgd2UgbmVlZCB0byByZXZlcnQgaXQgdG8gdGhlIE9MRC9PUklHSU5BTCB2YWx1ZSAod2l0aCB0aG9zZSB1bml0cykuIFdlIHJlY29yZCB0aGF0IGFzIGEgXCJiXCIgKGJlZ2lubmluZykgcHJvcGVydHkgYW5kIHBvaW50IHRvIGEgcmVuZGVyIG1ldGhvZCB0aGF0IGhhbmRsZXMgdGhhdC4gKHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbilcbiAgICAgICAgICAgIHRoaXMuX3B0LmIgPSBzdGFydFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fcHQuciA9IF9yZW5kZXJDU1NQcm9wV2l0aEJlZ2lubmluZztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIShwIGluIHN0eWxlKSkge1xuICAgICAgICAgIGlmIChwIGluIHRhcmdldCkge1xuICAgICAgICAgICAgLy9tYXliZSBpdCdzIG5vdCBhIHN0eWxlIC0gaXQgY291bGQgYmUgYSBwcm9wZXJ0eSBhZGRlZCBkaXJlY3RseSB0byBhbiBlbGVtZW50IGluIHdoaWNoIGNhc2Ugd2UnbGwgdHJ5IHRvIGFuaW1hdGUgdGhhdC5cbiAgICAgICAgICAgIHRoaXMuYWRkKHRhcmdldCwgcCwgc3RhcnRWYWx1ZSB8fCB0YXJnZXRbcF0sIGVuZFZhbHVlLCBpbmRleCwgdGFyZ2V0cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9taXNzaW5nUGx1Z2luKHAsIGVuZFZhbHVlKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcuY2FsbCh0aGlzLCB0YXJnZXQsIHAsIHN0YXJ0VmFsdWUsIGVuZFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzLnB1c2gocCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFzUHJpb3JpdHkgJiYgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSh0aGlzKTtcbiAgfSxcbiAgZ2V0OiBfZ2V0LFxuICBhbGlhc2VzOiBfcHJvcGVydHlBbGlhc2VzLFxuICBnZXRTZXR0ZXI6IGZ1bmN0aW9uIGdldFNldHRlcih0YXJnZXQsIHByb3BlcnR5LCBwbHVnaW4pIHtcbiAgICAvL3JldHVybnMgYSBzZXR0ZXIgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIHRhcmdldCwgcHJvcGVydHksIHZhbHVlIGFuZCBhcHBsaWVzIGl0IGFjY29yZGluZ2x5LiBSZW1lbWJlciwgcHJvcGVydGllcyBsaWtlIFwieFwiIGFyZW4ndCBhcyBzaW1wbGUgYXMgdGFyZ2V0LnN0eWxlLnByb3BlcnR5ID0gdmFsdWUgYmVjYXVzZSB0aGV5J3ZlIGdvdCB0byBiZSBhcHBsaWVkIHRvIGEgcHJveHkgb2JqZWN0IGFuZCB0aGVuIG1lcmdlZCBpbnRvIGEgdHJhbnNmb3JtIHN0cmluZyBpbiBhIHJlbmRlcmVyLlxuICAgIHZhciBwID0gX3Byb3BlcnR5QWxpYXNlc1twcm9wZXJ0eV07XG4gICAgcCAmJiBwLmluZGV4T2YoXCIsXCIpIDwgMCAmJiAocHJvcGVydHkgPSBwKTtcbiAgICByZXR1cm4gcHJvcGVydHkgaW4gX3RyYW5zZm9ybVByb3BzICYmIHByb3BlcnR5ICE9PSBfdHJhbnNmb3JtT3JpZ2luUHJvcCAmJiAodGFyZ2V0Ll9nc2FwLnggfHwgX2dldCh0YXJnZXQsIFwieFwiKSkgPyBwbHVnaW4gJiYgX3JlY2VudFNldHRlclBsdWdpbiA9PT0gcGx1Z2luID8gcHJvcGVydHkgPT09IFwic2NhbGVcIiA/IF9zZXR0ZXJTY2FsZSA6IF9zZXR0ZXJUcmFuc2Zvcm0gOiAoX3JlY2VudFNldHRlclBsdWdpbiA9IHBsdWdpbiB8fCB7fSkgJiYgKHByb3BlcnR5ID09PSBcInNjYWxlXCIgPyBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyIDogX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIpIDogdGFyZ2V0LnN0eWxlICYmICFfaXNVbmRlZmluZWQodGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSkgPyBfc2V0dGVyQ1NTU3R5bGUgOiB+cHJvcGVydHkuaW5kZXhPZihcIi1cIikgPyBfc2V0dGVyQ1NTUHJvcCA6IF9nZXRTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gIH0sXG4gIGNvcmU6IHtcbiAgICBfcmVtb3ZlUHJvcGVydHk6IF9yZW1vdmVQcm9wZXJ0eSxcbiAgICBfZ2V0TWF0cml4OiBfZ2V0TWF0cml4XG4gIH1cbn07XG5nc2FwLnV0aWxzLmNoZWNrUHJlZml4ID0gX2NoZWNrUHJvcFByZWZpeDtcblxuKGZ1bmN0aW9uIChwb3NpdGlvbkFuZFNjYWxlLCByb3RhdGlvbiwgb3RoZXJzLCBhbGlhc2VzKSB7XG4gIHZhciBhbGwgPSBfZm9yRWFjaE5hbWUocG9zaXRpb25BbmRTY2FsZSArIFwiLFwiICsgcm90YXRpb24gKyBcIixcIiArIG90aGVycywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBfdHJhbnNmb3JtUHJvcHNbbmFtZV0gPSAxO1xuICB9KTtcblxuICBfZm9yRWFjaE5hbWUocm90YXRpb24sIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgX2NvbmZpZy51bml0c1tuYW1lXSA9IFwiZGVnXCI7XG4gICAgX3JvdGF0aW9uYWxQcm9wZXJ0aWVzW25hbWVdID0gMTtcbiAgfSk7XG5cbiAgX3Byb3BlcnR5QWxpYXNlc1thbGxbMTNdXSA9IHBvc2l0aW9uQW5kU2NhbGUgKyBcIixcIiArIHJvdGF0aW9uO1xuXG4gIF9mb3JFYWNoTmFtZShhbGlhc2VzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzcGxpdCA9IG5hbWUuc3BsaXQoXCI6XCIpO1xuICAgIF9wcm9wZXJ0eUFsaWFzZXNbc3BsaXRbMV1dID0gYWxsW3NwbGl0WzBdXTtcbiAgfSk7XG59KShcIngseSx6LHNjYWxlLHNjYWxlWCxzY2FsZVkseFBlcmNlbnQseVBlcmNlbnRcIiwgXCJyb3RhdGlvbixyb3RhdGlvblgscm90YXRpb25ZLHNrZXdYLHNrZXdZXCIsIFwidHJhbnNmb3JtLHRyYW5zZm9ybU9yaWdpbixzdmdPcmlnaW4sZm9yY2UzRCxzbW9vdGhPcmlnaW4sdHJhbnNmb3JtUGVyc3BlY3RpdmVcIiwgXCIwOnRyYW5zbGF0ZVgsMTp0cmFuc2xhdGVZLDI6dHJhbnNsYXRlWiw4OnJvdGF0ZSw4OnJvdGF0aW9uWiw4OnJvdGF0ZVosOTpyb3RhdGVYLDEwOnJvdGF0ZVlcIik7XG5cbl9mb3JFYWNoTmFtZShcIngseSx6LHRvcCxyaWdodCxib3R0b20sbGVmdCx3aWR0aCxoZWlnaHQsZm9udFNpemUscGFkZGluZyxtYXJnaW4scGVyc3BlY3RpdmVcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgX2NvbmZpZy51bml0c1tuYW1lXSA9IFwicHhcIjtcbn0pO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKENTU1BsdWdpbik7XG5leHBvcnQgeyBDU1NQbHVnaW4gYXMgZGVmYXVsdCwgX2dldEJCb3gsIF9jcmVhdGVFbGVtZW50LCBfY2hlY2tQcm9wUHJlZml4IGFzIGNoZWNrUHJlZml4IH07IiwiLyohXG4gKiBUZXh0UGx1Z2luIDMuOC4wXG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgMjAwOC0yMDIxLCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4qL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgZW1vamlTYWZlU3BsaXQsIGdldFRleHQsIHNwbGl0SW5uZXJIVE1MIH0gZnJvbSBcIi4vdXRpbHMvc3RyaW5ncy5qc1wiO1xuXG52YXIgZ3NhcCxcbiAgICBfdGVtcERpdixcbiAgICBfZ2V0R1NBUCA9IGZ1bmN0aW9uIF9nZXRHU0FQKCkge1xuICByZXR1cm4gZ3NhcCB8fCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIChnc2FwID0gd2luZG93LmdzYXApICYmIGdzYXAucmVnaXN0ZXJQbHVnaW4gJiYgZ3NhcDtcbn07XG5cbmV4cG9ydCB2YXIgVGV4dFBsdWdpbiA9IHtcbiAgdmVyc2lvbjogXCIzLjguMFwiLFxuICBuYW1lOiBcInRleHRcIixcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhbHVlLCB0d2Vlbikge1xuICAgIHZhciBpID0gdGFyZ2V0Lm5vZGVOYW1lLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIGRhdGEgPSB0aGlzLFxuICAgICAgICBfc2hvcnQsXG4gICAgICAgIHRleHQsXG4gICAgICAgIG9yaWdpbmFsLFxuICAgICAgICBqLFxuICAgICAgICBjb25kZW5zZWRUZXh0LFxuICAgICAgICBjb25kZW5zZWRPcmlnaW5hbCxcbiAgICAgICAgYWdncmVnYXRlLFxuICAgICAgICBzO1xuXG4gICAgZGF0YS5zdmcgPSB0YXJnZXQuZ2V0QkJveCAmJiAoaSA9PT0gXCJURVhUXCIgfHwgaSA9PT0gXCJUU1BBTlwiKTtcblxuICAgIGlmICghKFwiaW5uZXJIVE1MXCIgaW4gdGFyZ2V0KSAmJiAhZGF0YS5zdmcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBkYXRhLnRhcmdldCA9IHRhcmdldDtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHZhbHVlID0ge1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCEoXCJ2YWx1ZVwiIGluIHZhbHVlKSkge1xuICAgICAgZGF0YS50ZXh0ID0gZGF0YS5vcmlnaW5hbCA9IFtcIlwiXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkYXRhLmRlbGltaXRlciA9IHZhbHVlLmRlbGltaXRlciB8fCBcIlwiO1xuICAgIG9yaWdpbmFsID0gc3BsaXRJbm5lckhUTUwodGFyZ2V0LCBkYXRhLmRlbGltaXRlciwgZmFsc2UsIHZhbHVlLnByZXNlcnZlU3BhY2VzKTtcblxuICAgIGlmICghX3RlbXBEaXYpIHtcbiAgICAgIF90ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB9XG5cbiAgICBfdGVtcERpdi5pbm5lckhUTUwgPSB2YWx1ZS52YWx1ZTtcbiAgICB0ZXh0ID0gc3BsaXRJbm5lckhUTUwoX3RlbXBEaXYsIGRhdGEuZGVsaW1pdGVyKTtcbiAgICBkYXRhLmZyb20gPSB0d2Vlbi5fZnJvbTtcblxuICAgIGlmIChkYXRhLmZyb20pIHtcbiAgICAgIGkgPSBvcmlnaW5hbDtcbiAgICAgIG9yaWdpbmFsID0gdGV4dDtcbiAgICAgIHRleHQgPSBpO1xuICAgIH1cblxuICAgIGRhdGEuaGFzQ2xhc3MgPSAhISh2YWx1ZS5uZXdDbGFzcyB8fCB2YWx1ZS5vbGRDbGFzcyk7XG4gICAgZGF0YS5uZXdDbGFzcyA9IHZhbHVlLm5ld0NsYXNzO1xuICAgIGRhdGEub2xkQ2xhc3MgPSB2YWx1ZS5vbGRDbGFzcztcbiAgICBpID0gb3JpZ2luYWwubGVuZ3RoIC0gdGV4dC5sZW5ndGg7XG4gICAgX3Nob3J0ID0gaSA8IDAgPyBvcmlnaW5hbCA6IHRleHQ7XG4gICAgZGF0YS5maWxsQ2hhciA9IHZhbHVlLmZpbGxDaGFyIHx8ICh2YWx1ZS5wYWRTcGFjZSA/IFwiJm5ic3A7XCIgOiBcIlwiKTtcblxuICAgIGlmIChpIDwgMCkge1xuICAgICAgaSA9IC1pO1xuICAgIH1cblxuICAgIHdoaWxlICgtLWkgPiAtMSkge1xuICAgICAgX3Nob3J0LnB1c2goZGF0YS5maWxsQ2hhcik7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLnR5cGUgPT09IFwiZGlmZlwiKSB7XG4gICAgICBqID0gMDtcbiAgICAgIGNvbmRlbnNlZFRleHQgPSBbXTtcbiAgICAgIGNvbmRlbnNlZE9yaWdpbmFsID0gW107XG4gICAgICBhZ2dyZWdhdGUgPSBcIlwiO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBzID0gdGV4dFtpXTtcblxuICAgICAgICBpZiAocyA9PT0gb3JpZ2luYWxbaV0pIHtcbiAgICAgICAgICBhZ2dyZWdhdGUgKz0gcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25kZW5zZWRUZXh0W2pdID0gYWdncmVnYXRlICsgcztcbiAgICAgICAgICBjb25kZW5zZWRPcmlnaW5hbFtqKytdID0gYWdncmVnYXRlICsgb3JpZ2luYWxbaV07XG4gICAgICAgICAgYWdncmVnYXRlID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0ZXh0ID0gY29uZGVuc2VkVGV4dDtcbiAgICAgIG9yaWdpbmFsID0gY29uZGVuc2VkT3JpZ2luYWw7XG5cbiAgICAgIGlmIChhZ2dyZWdhdGUpIHtcbiAgICAgICAgdGV4dC5wdXNoKGFnZ3JlZ2F0ZSk7XG4gICAgICAgIG9yaWdpbmFsLnB1c2goYWdncmVnYXRlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsdWUuc3BlZWQpIHtcbiAgICAgIHR3ZWVuLmR1cmF0aW9uKE1hdGgubWluKDAuMDUgLyB2YWx1ZS5zcGVlZCAqIF9zaG9ydC5sZW5ndGgsIHZhbHVlLm1heER1cmF0aW9uIHx8IDk5OTkpKTtcbiAgICB9XG5cbiAgICB0aGlzLm9yaWdpbmFsID0gb3JpZ2luYWw7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcblxuICAgIHRoaXMuX3Byb3BzLnB1c2goXCJ0ZXh0XCIpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihyYXRpbywgZGF0YSkge1xuICAgIGlmIChyYXRpbyA+IDEpIHtcbiAgICAgIHJhdGlvID0gMTtcbiAgICB9IGVsc2UgaWYgKHJhdGlvIDwgMCkge1xuICAgICAgcmF0aW8gPSAwO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmZyb20pIHtcbiAgICAgIHJhdGlvID0gMSAtIHJhdGlvO1xuICAgIH1cblxuICAgIHZhciB0ZXh0ID0gZGF0YS50ZXh0LFxuICAgICAgICBoYXNDbGFzcyA9IGRhdGEuaGFzQ2xhc3MsXG4gICAgICAgIG5ld0NsYXNzID0gZGF0YS5uZXdDbGFzcyxcbiAgICAgICAgb2xkQ2xhc3MgPSBkYXRhLm9sZENsYXNzLFxuICAgICAgICBkZWxpbWl0ZXIgPSBkYXRhLmRlbGltaXRlcixcbiAgICAgICAgdGFyZ2V0ID0gZGF0YS50YXJnZXQsXG4gICAgICAgIGZpbGxDaGFyID0gZGF0YS5maWxsQ2hhcixcbiAgICAgICAgb3JpZ2luYWwgPSBkYXRhLm9yaWdpbmFsLFxuICAgICAgICBsID0gdGV4dC5sZW5ndGgsXG4gICAgICAgIGkgPSByYXRpbyAqIGwgKyAwLjUgfCAwLFxuICAgICAgICBhcHBseU5ldyxcbiAgICAgICAgYXBwbHlPbGQsXG4gICAgICAgIHN0cjtcblxuICAgIGlmIChoYXNDbGFzcykge1xuICAgICAgYXBwbHlOZXcgPSBuZXdDbGFzcyAmJiBpO1xuICAgICAgYXBwbHlPbGQgPSBvbGRDbGFzcyAmJiBpICE9PSBsO1xuICAgICAgc3RyID0gKGFwcGx5TmV3ID8gXCI8c3BhbiBjbGFzcz0nXCIgKyBuZXdDbGFzcyArIFwiJz5cIiA6IFwiXCIpICsgdGV4dC5zbGljZSgwLCBpKS5qb2luKGRlbGltaXRlcikgKyAoYXBwbHlOZXcgPyBcIjwvc3Bhbj5cIiA6IFwiXCIpICsgKGFwcGx5T2xkID8gXCI8c3BhbiBjbGFzcz0nXCIgKyBvbGRDbGFzcyArIFwiJz5cIiA6IFwiXCIpICsgZGVsaW1pdGVyICsgb3JpZ2luYWwuc2xpY2UoaSkuam9pbihkZWxpbWl0ZXIpICsgKGFwcGx5T2xkID8gXCI8L3NwYW4+XCIgOiBcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gdGV4dC5zbGljZSgwLCBpKS5qb2luKGRlbGltaXRlcikgKyBkZWxpbWl0ZXIgKyBvcmlnaW5hbC5zbGljZShpKS5qb2luKGRlbGltaXRlcik7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuc3ZnKSB7XG4gICAgICAvL1NWRyB0ZXh0IGVsZW1lbnRzIGRvbid0IGhhdmUgYW4gXCJpbm5lckhUTUxcIiBpbiBNaWNyb3NvZnQgYnJvd3NlcnMuXG4gICAgICB0YXJnZXQudGV4dENvbnRlbnQgPSBzdHI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5pbm5lckhUTUwgPSBmaWxsQ2hhciA9PT0gXCImbmJzcDtcIiAmJiB+c3RyLmluZGV4T2YoXCIgIFwiKSA/IHN0ci5zcGxpdChcIiAgXCIpLmpvaW4oXCImbmJzcDsmbmJzcDtcIikgOiBzdHI7XG4gICAgfVxuICB9XG59O1xuVGV4dFBsdWdpbi5zcGxpdElubmVySFRNTCA9IHNwbGl0SW5uZXJIVE1MO1xuVGV4dFBsdWdpbi5lbW9qaVNhZmVTcGxpdCA9IGVtb2ppU2FmZVNwbGl0O1xuVGV4dFBsdWdpbi5nZXRUZXh0ID0gZ2V0VGV4dDtcbl9nZXRHU0FQKCkgJiYgZ3NhcC5yZWdpc3RlclBsdWdpbihUZXh0UGx1Z2luKTtcbmV4cG9ydCB7IFRleHRQbHVnaW4gYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyohXG4gKiBHU0FQIDMuOC4wXG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgMjAwOC0yMDIxLCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4qL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xudmFyIF9jb25maWcgPSB7XG4gIGF1dG9TbGVlcDogMTIwLFxuICBmb3JjZTNEOiBcImF1dG9cIixcbiAgbnVsbFRhcmdldFdhcm46IDEsXG4gIHVuaXRzOiB7XG4gICAgbGluZUhlaWdodDogXCJcIlxuICB9XG59LFxuICAgIF9kZWZhdWx0cyA9IHtcbiAgZHVyYXRpb246IC41LFxuICBvdmVyd3JpdGU6IGZhbHNlLFxuICBkZWxheTogMFxufSxcbiAgICBfc3VwcHJlc3NPdmVyd3JpdGVzLFxuICAgIF9iaWdOdW0gPSAxZTgsXG4gICAgX3RpbnlOdW0gPSAxIC8gX2JpZ051bSxcbiAgICBfMlBJID0gTWF0aC5QSSAqIDIsXG4gICAgX0hBTEZfUEkgPSBfMlBJIC8gNCxcbiAgICBfZ3NJRCA9IDAsXG4gICAgX3NxcnQgPSBNYXRoLnNxcnQsXG4gICAgX2NvcyA9IE1hdGguY29zLFxuICAgIF9zaW4gPSBNYXRoLnNpbixcbiAgICBfaXNTdHJpbmcgPSBmdW5jdGlvbiBfaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIjtcbn0sXG4gICAgX2lzRnVuY3Rpb24gPSBmdW5jdGlvbiBfaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG59LFxuICAgIF9pc051bWJlciA9IGZ1bmN0aW9uIF9pc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiO1xufSxcbiAgICBfaXNVbmRlZmluZWQgPSBmdW5jdGlvbiBfaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIjtcbn0sXG4gICAgX2lzT2JqZWN0ID0gZnVuY3Rpb24gX2lzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG59LFxuICAgIF9pc05vdEZhbHNlID0gZnVuY3Rpb24gX2lzTm90RmFsc2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBmYWxzZTtcbn0sXG4gICAgX3dpbmRvd0V4aXN0cyA9IGZ1bmN0aW9uIF93aW5kb3dFeGlzdHMoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfaXNGdW5jT3JTdHJpbmcgPSBmdW5jdGlvbiBfaXNGdW5jT3JTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIF9pc0Z1bmN0aW9uKHZhbHVlKSB8fCBfaXNTdHJpbmcodmFsdWUpO1xufSxcbiAgICBfaXNUeXBlZEFycmF5ID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCIgJiYgQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uICgpIHt9LFxuICAgIC8vIG5vdGU6IElFMTAgaGFzIEFycmF5QnVmZmVyLCBidXQgTk9UIEFycmF5QnVmZmVyLmlzVmlldygpLlxuX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5LFxuICAgIF9zdHJpY3ROdW1FeHAgPSAvKD86LT9cXC4/XFxkfFxcLikrL2dpLFxuICAgIC8vb25seSBudW1iZXJzIChpbmNsdWRpbmcgbmVnYXRpdmVzIGFuZCBkZWNpbWFscykgYnV0IE5PVCByZWxhdGl2ZSB2YWx1ZXMuXG5fbnVtRXhwID0gL1stKz0uXSpcXGQrWy5lXFwtK10qXFxkKltlXFwtK10qXFxkKi9nLFxuICAgIC8vZmluZHMgYW55IG51bWJlcnMsIGluY2x1ZGluZyBvbmVzIHRoYXQgc3RhcnQgd2l0aCArPSBvciAtPSwgbmVnYXRpdmUgbnVtYmVycywgYW5kIG9uZXMgaW4gc2NpZW50aWZpYyBub3RhdGlvbiBsaWtlIDFlLTguXG5fbnVtV2l0aFVuaXRFeHAgPSAvWy0rPS5dKlxcZCtbLmUtXSpcXGQqW2EteiVdKi9nLFxuICAgIF9jb21wbGV4U3RyaW5nTnVtRXhwID0gL1stKz0uXSpcXGQrXFwuP1xcZCooPzplLXxlXFwrKT9cXGQqL2dpLFxuICAgIC8vZHVwbGljYXRlIHNvIHRoYXQgd2hpbGUgd2UncmUgbG9vcGluZyB0aHJvdWdoIG1hdGNoZXMgZnJvbSBleGVjKCksIGl0IGRvZXNuJ3QgY29udGFtaW5hdGUgdGhlIGxhc3RJbmRleCBvZiBfbnVtRXhwIHdoaWNoIHdlIHVzZSB0byBzZWFyY2ggZm9yIGNvbG9ycyB0b28uXG5fcmVsRXhwID0gL1srLV09LT9bLlxcZF0rLyxcbiAgICBfZGVsaW1pdGVkVmFsdWVFeHAgPSAvW14sJ1wiXFxbXFxdXFxzXSsvZ2ksXG4gICAgLy8gcHJldmlvdXNseSAvWyNcXC0rLl0qXFxiW2EtelxcZFxcLT0rJS5dKy9naSBidXQgZGlkbid0IGNhdGNoIHNwZWNpYWwgY2hhcmFjdGVycy5cbl91bml0RXhwID0gL1tcXGQuK1xcLT1dKyg/OmVbLStdXFxkKikqL2ksXG4gICAgX2dsb2JhbFRpbWVsaW5lLFxuICAgIF93aW4sXG4gICAgX2NvcmVJbml0dGVkLFxuICAgIF9kb2MsXG4gICAgX2dsb2JhbHMgPSB7fSxcbiAgICBfaW5zdGFsbFNjb3BlID0ge30sXG4gICAgX2NvcmVSZWFkeSxcbiAgICBfaW5zdGFsbCA9IGZ1bmN0aW9uIF9pbnN0YWxsKHNjb3BlKSB7XG4gIHJldHVybiAoX2luc3RhbGxTY29wZSA9IF9tZXJnZShzY29wZSwgX2dsb2JhbHMpKSAmJiBnc2FwO1xufSxcbiAgICBfbWlzc2luZ1BsdWdpbiA9IGZ1bmN0aW9uIF9taXNzaW5nUGx1Z2luKHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gY29uc29sZS53YXJuKFwiSW52YWxpZCBwcm9wZXJ0eVwiLCBwcm9wZXJ0eSwgXCJzZXQgdG9cIiwgdmFsdWUsIFwiTWlzc2luZyBwbHVnaW4/IGdzYXAucmVnaXN0ZXJQbHVnaW4oKVwiKTtcbn0sXG4gICAgX3dhcm4gPSBmdW5jdGlvbiBfd2FybihtZXNzYWdlLCBzdXBwcmVzcykge1xuICByZXR1cm4gIXN1cHByZXNzICYmIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbn0sXG4gICAgX2FkZEdsb2JhbCA9IGZ1bmN0aW9uIF9hZGRHbG9iYWwobmFtZSwgb2JqKSB7XG4gIHJldHVybiBuYW1lICYmIChfZ2xvYmFsc1tuYW1lXSA9IG9iaikgJiYgX2luc3RhbGxTY29wZSAmJiAoX2luc3RhbGxTY29wZVtuYW1lXSA9IG9iaikgfHwgX2dsb2JhbHM7XG59LFxuICAgIF9lbXB0eUZ1bmMgPSBmdW5jdGlvbiBfZW1wdHlGdW5jKCkge1xuICByZXR1cm4gMDtcbn0sXG4gICAgX3Jlc2VydmVkUHJvcHMgPSB7fSxcbiAgICBfbGF6eVR3ZWVucyA9IFtdLFxuICAgIF9sYXp5TG9va3VwID0ge30sXG4gICAgX2xhc3RSZW5kZXJlZEZyYW1lLFxuICAgIF9wbHVnaW5zID0ge30sXG4gICAgX2VmZmVjdHMgPSB7fSxcbiAgICBfbmV4dEdDRnJhbWUgPSAzMCxcbiAgICBfaGFybmVzc1BsdWdpbnMgPSBbXSxcbiAgICBfY2FsbGJhY2tOYW1lcyA9IFwiXCIsXG4gICAgX2hhcm5lc3MgPSBmdW5jdGlvbiBfaGFybmVzcyh0YXJnZXRzKSB7XG4gIHZhciB0YXJnZXQgPSB0YXJnZXRzWzBdLFxuICAgICAgaGFybmVzc1BsdWdpbixcbiAgICAgIGk7XG4gIF9pc09iamVjdCh0YXJnZXQpIHx8IF9pc0Z1bmN0aW9uKHRhcmdldCkgfHwgKHRhcmdldHMgPSBbdGFyZ2V0c10pO1xuXG4gIGlmICghKGhhcm5lc3NQbHVnaW4gPSAodGFyZ2V0Ll9nc2FwIHx8IHt9KS5oYXJuZXNzKSkge1xuICAgIC8vIGZpbmQgdGhlIGZpcnN0IHRhcmdldCB3aXRoIGEgaGFybmVzcy4gV2UgYXNzdW1lIHRhcmdldHMgcGFzc2VkIGludG8gYW4gYW5pbWF0aW9uIHdpbGwgYmUgb2Ygc2ltaWxhciB0eXBlLCBtZWFuaW5nIHRoZSBzYW1lIGtpbmQgb2YgaGFybmVzcyBjYW4gYmUgdXNlZCBmb3IgdGhlbSBhbGwgKHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbilcbiAgICBpID0gX2hhcm5lc3NQbHVnaW5zLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0gJiYgIV9oYXJuZXNzUGx1Z2luc1tpXS50YXJnZXRUZXN0KHRhcmdldCkpIHt9XG5cbiAgICBoYXJuZXNzUGx1Z2luID0gX2hhcm5lc3NQbHVnaW5zW2ldO1xuICB9XG5cbiAgaSA9IHRhcmdldHMubGVuZ3RoO1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICB0YXJnZXRzW2ldICYmICh0YXJnZXRzW2ldLl9nc2FwIHx8ICh0YXJnZXRzW2ldLl9nc2FwID0gbmV3IEdTQ2FjaGUodGFyZ2V0c1tpXSwgaGFybmVzc1BsdWdpbikpKSB8fCB0YXJnZXRzLnNwbGljZShpLCAxKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXRzO1xufSxcbiAgICBfZ2V0Q2FjaGUgPSBmdW5jdGlvbiBfZ2V0Q2FjaGUodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQuX2dzYXAgfHwgX2hhcm5lc3ModG9BcnJheSh0YXJnZXQpKVswXS5fZ3NhcDtcbn0sXG4gICAgX2dldFByb3BlcnR5ID0gZnVuY3Rpb24gX2dldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHYpIHtcbiAgcmV0dXJuICh2ID0gdGFyZ2V0W3Byb3BlcnR5XSkgJiYgX2lzRnVuY3Rpb24odikgPyB0YXJnZXRbcHJvcGVydHldKCkgOiBfaXNVbmRlZmluZWQodikgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKHByb3BlcnR5KSB8fCB2O1xufSxcbiAgICBfZm9yRWFjaE5hbWUgPSBmdW5jdGlvbiBfZm9yRWFjaE5hbWUobmFtZXMsIGZ1bmMpIHtcbiAgcmV0dXJuIChuYW1lcyA9IG5hbWVzLnNwbGl0KFwiLFwiKSkuZm9yRWFjaChmdW5jKSB8fCBuYW1lcztcbn0sXG4gICAgLy9zcGxpdCBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIG5hbWVzIGludG8gYW4gYXJyYXksIHRoZW4gcnVuIGEgZm9yRWFjaCgpIGZ1bmN0aW9uIGFuZCByZXR1cm4gdGhlIHNwbGl0IGFycmF5ICh0aGlzIGlzIGp1c3QgYSB3YXkgdG8gY29uc29saWRhdGUvc2hvcnRlbiBzb21lIGNvZGUpLlxuX3JvdW5kID0gZnVuY3Rpb24gX3JvdW5kKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMTAwMDAwKSAvIDEwMDAwMCB8fCAwO1xufSxcbiAgICBfcm91bmRQcmVjaXNlID0gZnVuY3Rpb24gX3JvdW5kUHJlY2lzZSh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDAwMDAwKSAvIDEwMDAwMDAwIHx8IDA7XG59LFxuICAgIC8vIGluY3JlYXNlZCBwcmVjaXNpb24gbW9zdGx5IGZvciB0aW1pbmcgdmFsdWVzLlxuX2FycmF5Q29udGFpbnNBbnkgPSBmdW5jdGlvbiBfYXJyYXlDb250YWluc0FueSh0b1NlYXJjaCwgdG9GaW5kKSB7XG4gIC8vc2VhcmNoZXMgb25lIGFycmF5IHRvIGZpbmQgbWF0Y2hlcyBmb3IgYW55IG9mIHRoZSBpdGVtcyBpbiB0aGUgdG9GaW5kIGFycmF5LiBBcyBzb29uIGFzIG9uZSBpcyBmb3VuZCwgaXQgcmV0dXJucyB0cnVlLiBJdCBkb2VzIE5PVCByZXR1cm4gYWxsIHRoZSBtYXRjaGVzOyBpdCdzIHNpbXBseSBhIGJvb2xlYW4gc2VhcmNoLlxuICB2YXIgbCA9IHRvRmluZC5sZW5ndGgsXG4gICAgICBpID0gMDtcblxuICBmb3IgKDsgdG9TZWFyY2guaW5kZXhPZih0b0ZpbmRbaV0pIDwgMCAmJiArK2kgPCBsOykge31cblxuICByZXR1cm4gaSA8IGw7XG59LFxuICAgIF9sYXp5UmVuZGVyID0gZnVuY3Rpb24gX2xhenlSZW5kZXIoKSB7XG4gIHZhciBsID0gX2xhenlUd2VlbnMubGVuZ3RoLFxuICAgICAgYSA9IF9sYXp5VHdlZW5zLnNsaWNlKDApLFxuICAgICAgaSxcbiAgICAgIHR3ZWVuO1xuXG4gIF9sYXp5TG9va3VwID0ge307XG4gIF9sYXp5VHdlZW5zLmxlbmd0aCA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgIHR3ZWVuID0gYVtpXTtcbiAgICB0d2VlbiAmJiB0d2Vlbi5fbGF6eSAmJiAodHdlZW4ucmVuZGVyKHR3ZWVuLl9sYXp5WzBdLCB0d2Vlbi5fbGF6eVsxXSwgdHJ1ZSkuX2xhenkgPSAwKTtcbiAgfVxufSxcbiAgICBfbGF6eVNhZmVSZW5kZXIgPSBmdW5jdGlvbiBfbGF6eVNhZmVSZW5kZXIoYW5pbWF0aW9uLCB0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgX2xhenlUd2VlbnMubGVuZ3RoICYmIF9sYXp5UmVuZGVyKCk7XG4gIGFuaW1hdGlvbi5yZW5kZXIodGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgX2xhenlUd2VlbnMubGVuZ3RoICYmIF9sYXp5UmVuZGVyKCk7IC8vaW4gY2FzZSByZW5kZXJpbmcgY2F1c2VkIGFueSB0d2VlbnMgdG8gbGF6eS1pbml0LCB3ZSBzaG91bGQgcmVuZGVyIHRoZW0gYmVjYXVzZSB0eXBpY2FsbHkgd2hlbiBzb21lb25lIGNhbGxzIHNlZWsoKSBvciB0aW1lKCkgb3IgcHJvZ3Jlc3MoKSwgdGhleSBleHBlY3QgYW4gaW1tZWRpYXRlIHJlbmRlci5cbn0sXG4gICAgX251bWVyaWNJZlBvc3NpYmxlID0gZnVuY3Rpb24gX251bWVyaWNJZlBvc3NpYmxlKHZhbHVlKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIHJldHVybiAobiB8fCBuID09PSAwKSAmJiAodmFsdWUgKyBcIlwiKS5tYXRjaChfZGVsaW1pdGVkVmFsdWVFeHApLmxlbmd0aCA8IDIgPyBuIDogX2lzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnRyaW0oKSA6IHZhbHVlO1xufSxcbiAgICBfcGFzc1Rocm91Z2ggPSBmdW5jdGlvbiBfcGFzc1Rocm91Z2gocCkge1xuICByZXR1cm4gcDtcbn0sXG4gICAgX3NldERlZmF1bHRzID0gZnVuY3Rpb24gX3NldERlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHtcbiAgZm9yICh2YXIgcCBpbiBkZWZhdWx0cykge1xuICAgIHAgaW4gb2JqIHx8IChvYmpbcF0gPSBkZWZhdWx0c1twXSk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSxcbiAgICBfc2V0S2V5ZnJhbWVEZWZhdWx0cyA9IGZ1bmN0aW9uIF9zZXRLZXlmcmFtZURlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHtcbiAgZm9yICh2YXIgcCBpbiBkZWZhdWx0cykge1xuICAgIHAgaW4gb2JqIHx8IHAgPT09IFwiZHVyYXRpb25cIiB8fCBwID09PSBcImVhc2VcIiB8fCAob2JqW3BdID0gZGVmYXVsdHNbcF0pO1xuICB9XG59LFxuICAgIF9tZXJnZSA9IGZ1bmN0aW9uIF9tZXJnZShiYXNlLCB0b01lcmdlKSB7XG4gIGZvciAodmFyIHAgaW4gdG9NZXJnZSkge1xuICAgIGJhc2VbcF0gPSB0b01lcmdlW3BdO1xuICB9XG5cbiAgcmV0dXJuIGJhc2U7XG59LFxuICAgIF9tZXJnZURlZXAgPSBmdW5jdGlvbiBfbWVyZ2VEZWVwKGJhc2UsIHRvTWVyZ2UpIHtcbiAgZm9yICh2YXIgcCBpbiB0b01lcmdlKSB7XG4gICAgcCAhPT0gXCJfX3Byb3RvX19cIiAmJiBwICE9PSBcImNvbnN0cnVjdG9yXCIgJiYgcCAhPT0gXCJwcm90b3R5cGVcIiAmJiAoYmFzZVtwXSA9IF9pc09iamVjdCh0b01lcmdlW3BdKSA/IF9tZXJnZURlZXAoYmFzZVtwXSB8fCAoYmFzZVtwXSA9IHt9KSwgdG9NZXJnZVtwXSkgOiB0b01lcmdlW3BdKTtcbiAgfVxuXG4gIHJldHVybiBiYXNlO1xufSxcbiAgICBfY29weUV4Y2x1ZGluZyA9IGZ1bmN0aW9uIF9jb3B5RXhjbHVkaW5nKG9iaiwgZXhjbHVkaW5nKSB7XG4gIHZhciBjb3B5ID0ge30sXG4gICAgICBwO1xuXG4gIGZvciAocCBpbiBvYmopIHtcbiAgICBwIGluIGV4Y2x1ZGluZyB8fCAoY29weVtwXSA9IG9ialtwXSk7XG4gIH1cblxuICByZXR1cm4gY29weTtcbn0sXG4gICAgX2luaGVyaXREZWZhdWx0cyA9IGZ1bmN0aW9uIF9pbmhlcml0RGVmYXVsdHModmFycykge1xuICB2YXIgcGFyZW50ID0gdmFycy5wYXJlbnQgfHwgX2dsb2JhbFRpbWVsaW5lLFxuICAgICAgZnVuYyA9IHZhcnMua2V5ZnJhbWVzID8gX3NldEtleWZyYW1lRGVmYXVsdHMgOiBfc2V0RGVmYXVsdHM7XG5cbiAgaWYgKF9pc05vdEZhbHNlKHZhcnMuaW5oZXJpdCkpIHtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBmdW5jKHZhcnMsIHBhcmVudC52YXJzLmRlZmF1bHRzKTtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQgfHwgcGFyZW50Ll9kcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFycztcbn0sXG4gICAgX2FycmF5c01hdGNoID0gZnVuY3Rpb24gX2FycmF5c01hdGNoKGExLCBhMikge1xuICB2YXIgaSA9IGExLmxlbmd0aCxcbiAgICAgIG1hdGNoID0gaSA9PT0gYTIubGVuZ3RoO1xuXG4gIHdoaWxlIChtYXRjaCAmJiBpLS0gJiYgYTFbaV0gPT09IGEyW2ldKSB7fVxuXG4gIHJldHVybiBpIDwgMDtcbn0sXG4gICAgX2FkZExpbmtlZExpc3RJdGVtID0gZnVuY3Rpb24gX2FkZExpbmtlZExpc3RJdGVtKHBhcmVudCwgY2hpbGQsIGZpcnN0UHJvcCwgbGFzdFByb3AsIHNvcnRCeSkge1xuICBpZiAoZmlyc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBmaXJzdFByb3AgPSBcIl9maXJzdFwiO1xuICB9XG5cbiAgaWYgKGxhc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBsYXN0UHJvcCA9IFwiX2xhc3RcIjtcbiAgfVxuXG4gIHZhciBwcmV2ID0gcGFyZW50W2xhc3RQcm9wXSxcbiAgICAgIHQ7XG5cbiAgaWYgKHNvcnRCeSkge1xuICAgIHQgPSBjaGlsZFtzb3J0QnldO1xuXG4gICAgd2hpbGUgKHByZXYgJiYgcHJldltzb3J0QnldID4gdCkge1xuICAgICAgcHJldiA9IHByZXYuX3ByZXY7XG4gICAgfVxuICB9XG5cbiAgaWYgKHByZXYpIHtcbiAgICBjaGlsZC5fbmV4dCA9IHByZXYuX25leHQ7XG4gICAgcHJldi5fbmV4dCA9IGNoaWxkO1xuICB9IGVsc2Uge1xuICAgIGNoaWxkLl9uZXh0ID0gcGFyZW50W2ZpcnN0UHJvcF07XG4gICAgcGFyZW50W2ZpcnN0UHJvcF0gPSBjaGlsZDtcbiAgfVxuXG4gIGlmIChjaGlsZC5fbmV4dCkge1xuICAgIGNoaWxkLl9uZXh0Ll9wcmV2ID0gY2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50W2xhc3RQcm9wXSA9IGNoaWxkO1xuICB9XG5cbiAgY2hpbGQuX3ByZXYgPSBwcmV2O1xuICBjaGlsZC5wYXJlbnQgPSBjaGlsZC5fZHAgPSBwYXJlbnQ7XG4gIHJldHVybiBjaGlsZDtcbn0sXG4gICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtID0gZnVuY3Rpb24gX3JlbW92ZUxpbmtlZExpc3RJdGVtKHBhcmVudCwgY2hpbGQsIGZpcnN0UHJvcCwgbGFzdFByb3ApIHtcbiAgaWYgKGZpcnN0UHJvcCA9PT0gdm9pZCAwKSB7XG4gICAgZmlyc3RQcm9wID0gXCJfZmlyc3RcIjtcbiAgfVxuXG4gIGlmIChsYXN0UHJvcCA9PT0gdm9pZCAwKSB7XG4gICAgbGFzdFByb3AgPSBcIl9sYXN0XCI7XG4gIH1cblxuICB2YXIgcHJldiA9IGNoaWxkLl9wcmV2LFxuICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuXG4gIGlmIChwcmV2KSB7XG4gICAgcHJldi5fbmV4dCA9IG5leHQ7XG4gIH0gZWxzZSBpZiAocGFyZW50W2ZpcnN0UHJvcF0gPT09IGNoaWxkKSB7XG4gICAgcGFyZW50W2ZpcnN0UHJvcF0gPSBuZXh0O1xuICB9XG5cbiAgaWYgKG5leHQpIHtcbiAgICBuZXh0Ll9wcmV2ID0gcHJldjtcbiAgfSBlbHNlIGlmIChwYXJlbnRbbGFzdFByb3BdID09PSBjaGlsZCkge1xuICAgIHBhcmVudFtsYXN0UHJvcF0gPSBwcmV2O1xuICB9XG5cbiAgY2hpbGQuX25leHQgPSBjaGlsZC5fcHJldiA9IGNoaWxkLnBhcmVudCA9IG51bGw7IC8vIGRvbid0IGRlbGV0ZSB0aGUgX2RwIGp1c3Qgc28gd2UgY2FuIHJldmVydCBpZiBuZWNlc3NhcnkuIEJ1dCBwYXJlbnQgc2hvdWxkIGJlIG51bGwgdG8gaW5kaWNhdGUgdGhlIGl0ZW0gaXNuJ3QgaW4gYSBsaW5rZWQgbGlzdC5cbn0sXG4gICAgX3JlbW92ZUZyb21QYXJlbnQgPSBmdW5jdGlvbiBfcmVtb3ZlRnJvbVBhcmVudChjaGlsZCwgb25seUlmUGFyZW50SGFzQXV0b1JlbW92ZSkge1xuICBjaGlsZC5wYXJlbnQgJiYgKCFvbmx5SWZQYXJlbnRIYXNBdXRvUmVtb3ZlIHx8IGNoaWxkLnBhcmVudC5hdXRvUmVtb3ZlQ2hpbGRyZW4pICYmIGNoaWxkLnBhcmVudC5yZW1vdmUoY2hpbGQpO1xuICBjaGlsZC5fYWN0ID0gMDtcbn0sXG4gICAgX3VuY2FjaGUgPSBmdW5jdGlvbiBfdW5jYWNoZShhbmltYXRpb24sIGNoaWxkKSB7XG4gIGlmIChhbmltYXRpb24gJiYgKCFjaGlsZCB8fCBjaGlsZC5fZW5kID4gYW5pbWF0aW9uLl9kdXIgfHwgY2hpbGQuX3N0YXJ0IDwgMCkpIHtcbiAgICAvLyBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb246IGlmIGEgY2hpbGQgYW5pbWF0aW9uIGlzIHBhc3NlZCBpbiB3ZSBzaG91bGQgb25seSB1bmNhY2hlIGlmIHRoYXQgY2hpbGQgRVhURU5EUyB0aGUgYW5pbWF0aW9uIChpdHMgZW5kIHRpbWUgaXMgYmV5b25kIHRoZSBlbmQpXG4gICAgdmFyIGEgPSBhbmltYXRpb247XG5cbiAgICB3aGlsZSAoYSkge1xuICAgICAgYS5fZGlydHkgPSAxO1xuICAgICAgYSA9IGEucGFyZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9yZWNhY2hlQW5jZXN0b3JzID0gZnVuY3Rpb24gX3JlY2FjaGVBbmNlc3RvcnMoYW5pbWF0aW9uKSB7XG4gIHZhciBwYXJlbnQgPSBhbmltYXRpb24ucGFyZW50O1xuXG4gIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50LnBhcmVudCkge1xuICAgIC8vc29tZXRpbWVzIHdlIG11c3QgZm9yY2UgYSByZS1zb3J0IG9mIGFsbCBjaGlsZHJlbiBhbmQgdXBkYXRlIHRoZSBkdXJhdGlvbi90b3RhbER1cmF0aW9uIG9mIGFsbCBhbmNlc3RvciB0aW1lbGluZXMgaW1tZWRpYXRlbHkgaW4gY2FzZSwgZm9yIGV4YW1wbGUsIGluIHRoZSBtaWRkbGUgb2YgYSByZW5kZXIgbG9vcCwgb25lIHR3ZWVuIGFsdGVycyBhbm90aGVyIHR3ZWVuJ3MgdGltZVNjYWxlIHdoaWNoIHNob3ZlcyBpdHMgc3RhcnRUaW1lIGJlZm9yZSAwLCBmb3JjaW5nIHRoZSBwYXJlbnQgdGltZWxpbmUgdG8gc2hpZnQgYXJvdW5kIGFuZCBzaGlmdENoaWxkcmVuKCkgd2hpY2ggY291bGQgYWZmZWN0IHRoYXQgbmV4dCB0d2VlbidzIHJlbmRlciAoc3RhcnRUaW1lKS4gRG9lc24ndCBtYXR0ZXIgZm9yIHRoZSByb290IHRpbWVsaW5lIHRob3VnaC5cbiAgICBwYXJlbnQuX2RpcnR5ID0gMTtcbiAgICBwYXJlbnQudG90YWxEdXJhdGlvbigpO1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gIH1cblxuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcbiAgICBfaGFzTm9QYXVzZWRBbmNlc3RvcnMgPSBmdW5jdGlvbiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoYW5pbWF0aW9uKSB7XG4gIHJldHVybiAhYW5pbWF0aW9uIHx8IGFuaW1hdGlvbi5fdHMgJiYgX2hhc05vUGF1c2VkQW5jZXN0b3JzKGFuaW1hdGlvbi5wYXJlbnQpO1xufSxcbiAgICBfZWxhcHNlZEN5Y2xlRHVyYXRpb24gPSBmdW5jdGlvbiBfZWxhcHNlZEN5Y2xlRHVyYXRpb24oYW5pbWF0aW9uKSB7XG4gIHJldHVybiBhbmltYXRpb24uX3JlcGVhdCA/IF9hbmltYXRpb25DeWNsZShhbmltYXRpb24uX3RUaW1lLCBhbmltYXRpb24gPSBhbmltYXRpb24uZHVyYXRpb24oKSArIGFuaW1hdGlvbi5fckRlbGF5KSAqIGFuaW1hdGlvbiA6IDA7XG59LFxuICAgIC8vIGZlZWQgaW4gdGhlIHRvdGFsVGltZSBhbmQgY3ljbGVEdXJhdGlvbiBhbmQgaXQnbGwgcmV0dXJuIHRoZSBjeWNsZSAoaXRlcmF0aW9uIG1pbnVzIDEpIGFuZCBpZiB0aGUgcGxheWhlYWQgaXMgZXhhY3RseSBhdCB0aGUgdmVyeSBFTkQsIGl0IHdpbGwgTk9UIGJ1bXAgdXAgdG8gdGhlIG5leHQgY3ljbGUuXG5fYW5pbWF0aW9uQ3ljbGUgPSBmdW5jdGlvbiBfYW5pbWF0aW9uQ3ljbGUodFRpbWUsIGN5Y2xlRHVyYXRpb24pIHtcbiAgdmFyIHdob2xlID0gTWF0aC5mbG9vcih0VGltZSAvPSBjeWNsZUR1cmF0aW9uKTtcbiAgcmV0dXJuIHRUaW1lICYmIHdob2xlID09PSB0VGltZSA/IHdob2xlIC0gMSA6IHdob2xlO1xufSxcbiAgICBfcGFyZW50VG9DaGlsZFRvdGFsVGltZSA9IGZ1bmN0aW9uIF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHBhcmVudFRpbWUsIGNoaWxkKSB7XG4gIHJldHVybiAocGFyZW50VGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMgKyAoY2hpbGQuX3RzID49IDAgPyAwIDogY2hpbGQuX2RpcnR5ID8gY2hpbGQudG90YWxEdXJhdGlvbigpIDogY2hpbGQuX3REdXIpO1xufSxcbiAgICBfc2V0RW5kID0gZnVuY3Rpb24gX3NldEVuZChhbmltYXRpb24pIHtcbiAgcmV0dXJuIGFuaW1hdGlvbi5fZW5kID0gX3JvdW5kUHJlY2lzZShhbmltYXRpb24uX3N0YXJ0ICsgKGFuaW1hdGlvbi5fdER1ciAvIE1hdGguYWJzKGFuaW1hdGlvbi5fdHMgfHwgYW5pbWF0aW9uLl9ydHMgfHwgX3RpbnlOdW0pIHx8IDApKTtcbn0sXG4gICAgX2FsaWduUGxheWhlYWQgPSBmdW5jdGlvbiBfYWxpZ25QbGF5aGVhZChhbmltYXRpb24sIHRvdGFsVGltZSkge1xuICAvLyBhZGp1c3RzIHRoZSBhbmltYXRpb24ncyBfc3RhcnQgYW5kIF9lbmQgYWNjb3JkaW5nIHRvIHRoZSBwcm92aWRlZCB0b3RhbFRpbWUgKG9ubHkgaWYgdGhlIHBhcmVudCdzIHNtb290aENoaWxkVGltaW5nIGlzIHRydWUgYW5kIHRoZSBhbmltYXRpb24gaXNuJ3QgcGF1c2VkKS4gSXQgZG9lc24ndCBkbyBhbnkgcmVuZGVyaW5nIG9yIGZvcmNpbmcgdGhpbmdzIGJhY2sgaW50byBwYXJlbnQgdGltZWxpbmVzLCBldGMuIC0gdGhhdCdzIHdoYXQgdG90YWxUaW1lKCkgaXMgZm9yLlxuICB2YXIgcGFyZW50ID0gYW5pbWF0aW9uLl9kcDtcblxuICBpZiAocGFyZW50ICYmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyAmJiBhbmltYXRpb24uX3RzKSB7XG4gICAgYW5pbWF0aW9uLl9zdGFydCA9IF9yb3VuZFByZWNpc2UocGFyZW50Ll90aW1lIC0gKGFuaW1hdGlvbi5fdHMgPiAwID8gdG90YWxUaW1lIC8gYW5pbWF0aW9uLl90cyA6ICgoYW5pbWF0aW9uLl9kaXJ0eSA/IGFuaW1hdGlvbi50b3RhbER1cmF0aW9uKCkgOiBhbmltYXRpb24uX3REdXIpIC0gdG90YWxUaW1lKSAvIC1hbmltYXRpb24uX3RzKSk7XG5cbiAgICBfc2V0RW5kKGFuaW1hdGlvbik7XG5cbiAgICBwYXJlbnQuX2RpcnR5IHx8IF91bmNhY2hlKHBhcmVudCwgYW5pbWF0aW9uKTsgLy9mb3IgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnQuIElmIHRoZSBwYXJlbnQncyBjYWNoZSBpcyBhbHJlYWR5IGRpcnR5LCBpdCBhbHJlYWR5IHRvb2sgY2FyZSBvZiBtYXJraW5nIHRoZSBhbmNlc3RvcnMgYXMgZGlydHkgdG9vLCBzbyBza2lwIHRoZSBmdW5jdGlvbiBjYWxsIGhlcmUuXG4gIH1cblxuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcblxuLypcbl90b3RhbFRpbWVUb1RpbWUgPSAoY2xhbXBlZFRvdGFsVGltZSwgZHVyYXRpb24sIHJlcGVhdCwgcmVwZWF0RGVsYXksIHlveW8pID0+IHtcblx0bGV0IGN5Y2xlRHVyYXRpb24gPSBkdXJhdGlvbiArIHJlcGVhdERlbGF5LFxuXHRcdHRpbWUgPSBfcm91bmQoY2xhbXBlZFRvdGFsVGltZSAlIGN5Y2xlRHVyYXRpb24pO1xuXHRpZiAodGltZSA+IGR1cmF0aW9uKSB7XG5cdFx0dGltZSA9IGR1cmF0aW9uO1xuXHR9XG5cdHJldHVybiAoeW95byAmJiAofn4oY2xhbXBlZFRvdGFsVGltZSAvIGN5Y2xlRHVyYXRpb24pICYgMSkpID8gZHVyYXRpb24gLSB0aW1lIDogdGltZTtcbn0sXG4qL1xuX3Bvc3RBZGRDaGVja3MgPSBmdW5jdGlvbiBfcG9zdEFkZENoZWNrcyh0aW1lbGluZSwgY2hpbGQpIHtcbiAgdmFyIHQ7XG5cbiAgaWYgKGNoaWxkLl90aW1lIHx8IGNoaWxkLl9pbml0dGVkICYmICFjaGlsZC5fZHVyKSB7XG4gICAgLy9pbiBjYXNlLCBmb3IgZXhhbXBsZSwgdGhlIF9zdGFydCBpcyBtb3ZlZCBvbiBhIHR3ZWVuIHRoYXQgaGFzIGFscmVhZHkgcmVuZGVyZWQuIEltYWdpbmUgaXQncyBhdCBpdHMgZW5kIHN0YXRlLCB0aGVuIHRoZSBzdGFydFRpbWUgaXMgbW92ZWQgV0FZIGxhdGVyIChhZnRlciB0aGUgZW5kIG9mIHRoaXMgdGltZWxpbmUpLCBpdCBzaG91bGQgcmVuZGVyIGF0IGl0cyBiZWdpbm5pbmcuXG4gICAgdCA9IF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHRpbWVsaW5lLnJhd1RpbWUoKSwgY2hpbGQpO1xuXG4gICAgaWYgKCFjaGlsZC5fZHVyIHx8IF9jbGFtcCgwLCBjaGlsZC50b3RhbER1cmF0aW9uKCksIHQpIC0gY2hpbGQuX3RUaW1lID4gX3RpbnlOdW0pIHtcbiAgICAgIGNoaWxkLnJlbmRlcih0LCB0cnVlKTtcbiAgICB9XG4gIH0gLy9pZiB0aGUgdGltZWxpbmUgaGFzIGFscmVhZHkgZW5kZWQgYnV0IHRoZSBpbnNlcnRlZCB0d2Vlbi90aW1lbGluZSBleHRlbmRzIHRoZSBkdXJhdGlvbiwgd2Ugc2hvdWxkIGVuYWJsZSB0aGlzIHRpbWVsaW5lIGFnYWluIHNvIHRoYXQgaXQgcmVuZGVycyBwcm9wZXJseS4gV2Ugc2hvdWxkIGFsc28gYWxpZ24gdGhlIHBsYXloZWFkIHdpdGggdGhlIHBhcmVudCB0aW1lbGluZSdzIHdoZW4gYXBwcm9wcmlhdGUuXG5cblxuICBpZiAoX3VuY2FjaGUodGltZWxpbmUsIGNoaWxkKS5fZHAgJiYgdGltZWxpbmUuX2luaXR0ZWQgJiYgdGltZWxpbmUuX3RpbWUgPj0gdGltZWxpbmUuX2R1ciAmJiB0aW1lbGluZS5fdHMpIHtcbiAgICAvL2luIGNhc2UgYW55IG9mIHRoZSBhbmNlc3RvcnMgaGFkIGNvbXBsZXRlZCBidXQgc2hvdWxkIG5vdyBiZSBlbmFibGVkLi4uXG4gICAgaWYgKHRpbWVsaW5lLl9kdXIgPCB0aW1lbGluZS5kdXJhdGlvbigpKSB7XG4gICAgICB0ID0gdGltZWxpbmU7XG5cbiAgICAgIHdoaWxlICh0Ll9kcCkge1xuICAgICAgICB0LnJhd1RpbWUoKSA+PSAwICYmIHQudG90YWxUaW1lKHQuX3RUaW1lKTsgLy9tb3ZlcyB0aGUgdGltZWxpbmUgKHNoaWZ0cyBpdHMgc3RhcnRUaW1lKSBpZiBuZWNlc3NhcnksIGFuZCBhbHNvIGVuYWJsZXMgaXQuIElmIGl0J3MgY3VycmVudGx5IHplcm8sIHRob3VnaCwgaXQgbWF5IG5vdCBiZSBzY2hlZHVsZWQgdG8gcmVuZGVyIHVudGlsIGxhdGVyIHNvIHRoZXJlJ3Mgbm8gbmVlZCB0byBmb3JjZSBpdCB0byBhbGlnbiB3aXRoIHRoZSBjdXJyZW50IHBsYXloZWFkIHBvc2l0aW9uLiBPbmx5IG1vdmUgdG8gY2F0Y2ggdXAgd2l0aCB0aGUgcGxheWhlYWQuXG5cbiAgICAgICAgdCA9IHQuX2RwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRpbWVsaW5lLl96VGltZSA9IC1fdGlueU51bTsgLy8gaGVscHMgZW5zdXJlIHRoYXQgdGhlIG5leHQgcmVuZGVyKCkgd2lsbCBiZSBmb3JjZWQgKGNyb3NzaW5nU3RhcnQgPSB0cnVlIGluIHJlbmRlcigpKSwgZXZlbiBpZiB0aGUgZHVyYXRpb24gaGFzbid0IGNoYW5nZWQgKHdlJ3JlIGFkZGluZyBhIGNoaWxkIHdoaWNoIHdvdWxkIG5lZWQgdG8gZ2V0IHJlbmRlcmVkKS4gRGVmaW5pdGVseSBhbiBlZGdlIGNhc2UuIE5vdGU6IHdlIE1VU1QgZG8gdGhpcyBBRlRFUiB0aGUgbG9vcCBhYm92ZSB3aGVyZSB0aGUgdG90YWxUaW1lKCkgbWlnaHQgdHJpZ2dlciBhIHJlbmRlcigpIGJlY2F1c2UgdGhpcyBfYWRkVG9UaW1lbGluZSgpIG1ldGhvZCBnZXRzIGNhbGxlZCBmcm9tIHRoZSBBbmltYXRpb24gY29uc3RydWN0b3IsIEJFRk9SRSB0d2VlbnMgZXZlbiByZWNvcmQgdGhlaXIgdGFyZ2V0cywgZXRjLiBzbyB3ZSB3b3VsZG4ndCB3YW50IHRoaW5ncyB0byBnZXQgdHJpZ2dlcmVkIGluIHRoZSB3cm9uZyBvcmRlci5cbiAgfVxufSxcbiAgICBfYWRkVG9UaW1lbGluZSA9IGZ1bmN0aW9uIF9hZGRUb1RpbWVsaW5lKHRpbWVsaW5lLCBjaGlsZCwgcG9zaXRpb24sIHNraXBDaGVja3MpIHtcbiAgY2hpbGQucGFyZW50ICYmIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkKTtcbiAgY2hpbGQuX3N0YXJ0ID0gX3JvdW5kUHJlY2lzZSgoX2lzTnVtYmVyKHBvc2l0aW9uKSA/IHBvc2l0aW9uIDogcG9zaXRpb24gfHwgdGltZWxpbmUgIT09IF9nbG9iYWxUaW1lbGluZSA/IF9wYXJzZVBvc2l0aW9uKHRpbWVsaW5lLCBwb3NpdGlvbiwgY2hpbGQpIDogdGltZWxpbmUuX3RpbWUpICsgY2hpbGQuX2RlbGF5KTtcbiAgY2hpbGQuX2VuZCA9IF9yb3VuZFByZWNpc2UoY2hpbGQuX3N0YXJ0ICsgKGNoaWxkLnRvdGFsRHVyYXRpb24oKSAvIE1hdGguYWJzKGNoaWxkLnRpbWVTY2FsZSgpKSB8fCAwKSk7XG5cbiAgX2FkZExpbmtlZExpc3RJdGVtKHRpbWVsaW5lLCBjaGlsZCwgXCJfZmlyc3RcIiwgXCJfbGFzdFwiLCB0aW1lbGluZS5fc29ydCA/IFwiX3N0YXJ0XCIgOiAwKTtcblxuICBfaXNGcm9tT3JGcm9tU3RhcnQoY2hpbGQpIHx8ICh0aW1lbGluZS5fcmVjZW50ID0gY2hpbGQpO1xuICBza2lwQ2hlY2tzIHx8IF9wb3N0QWRkQ2hlY2tzKHRpbWVsaW5lLCBjaGlsZCk7XG4gIHJldHVybiB0aW1lbGluZTtcbn0sXG4gICAgX3Njcm9sbFRyaWdnZXIgPSBmdW5jdGlvbiBfc2Nyb2xsVHJpZ2dlcihhbmltYXRpb24sIHRyaWdnZXIpIHtcbiAgcmV0dXJuIChfZ2xvYmFscy5TY3JvbGxUcmlnZ2VyIHx8IF9taXNzaW5nUGx1Z2luKFwic2Nyb2xsVHJpZ2dlclwiLCB0cmlnZ2VyKSkgJiYgX2dsb2JhbHMuU2Nyb2xsVHJpZ2dlci5jcmVhdGUodHJpZ2dlciwgYW5pbWF0aW9uKTtcbn0sXG4gICAgX2F0dGVtcHRJbml0VHdlZW4gPSBmdW5jdGlvbiBfYXR0ZW1wdEluaXRUd2Vlbih0d2VlbiwgdG90YWxUaW1lLCBmb3JjZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgX2luaXRUd2Vlbih0d2VlbiwgdG90YWxUaW1lKTtcblxuICBpZiAoIXR3ZWVuLl9pbml0dGVkKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBpZiAoIWZvcmNlICYmIHR3ZWVuLl9wdCAmJiAodHdlZW4uX2R1ciAmJiB0d2Vlbi52YXJzLmxhenkgIT09IGZhbHNlIHx8ICF0d2Vlbi5fZHVyICYmIHR3ZWVuLnZhcnMubGF6eSkgJiYgX2xhc3RSZW5kZXJlZEZyYW1lICE9PSBfdGlja2VyLmZyYW1lKSB7XG4gICAgX2xhenlUd2VlbnMucHVzaCh0d2Vlbik7XG5cbiAgICB0d2Vlbi5fbGF6eSA9IFt0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzXTtcbiAgICByZXR1cm4gMTtcbiAgfVxufSxcbiAgICBfcGFyZW50UGxheWhlYWRJc0JlZm9yZVN0YXJ0ID0gZnVuY3Rpb24gX3BhcmVudFBsYXloZWFkSXNCZWZvcmVTdGFydChfcmVmKSB7XG4gIHZhciBwYXJlbnQgPSBfcmVmLnBhcmVudDtcbiAgcmV0dXJuIHBhcmVudCAmJiBwYXJlbnQuX3RzICYmIHBhcmVudC5faW5pdHRlZCAmJiAhcGFyZW50Ll9sb2NrICYmIChwYXJlbnQucmF3VGltZSgpIDwgMCB8fCBfcGFyZW50UGxheWhlYWRJc0JlZm9yZVN0YXJ0KHBhcmVudCkpO1xufSxcbiAgICAvLyBjaGVjayBwYXJlbnQncyBfbG9jayBiZWNhdXNlIHdoZW4gYSB0aW1lbGluZSByZXBlYXRzL3lveW9zIGFuZCBkb2VzIGl0cyBhcnRpZmljaWFsIHdyYXBwaW5nLCB3ZSBzaG91bGRuJ3QgZm9yY2UgdGhlIHJhdGlvIGJhY2sgdG8gMFxuX2lzRnJvbU9yRnJvbVN0YXJ0ID0gZnVuY3Rpb24gX2lzRnJvbU9yRnJvbVN0YXJ0KF9yZWYyKSB7XG4gIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcbiAgcmV0dXJuIGRhdGEgPT09IFwiaXNGcm9tU3RhcnRcIiB8fCBkYXRhID09PSBcImlzU3RhcnRcIjtcbn0sXG4gICAgX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuID0gZnVuY3Rpb24gX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuKHR3ZWVuLCB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICB2YXIgcHJldlJhdGlvID0gdHdlZW4ucmF0aW8sXG4gICAgICByYXRpbyA9IHRvdGFsVGltZSA8IDAgfHwgIXRvdGFsVGltZSAmJiAoIXR3ZWVuLl9zdGFydCAmJiBfcGFyZW50UGxheWhlYWRJc0JlZm9yZVN0YXJ0KHR3ZWVuKSAmJiAhKCF0d2Vlbi5faW5pdHRlZCAmJiBfaXNGcm9tT3JGcm9tU3RhcnQodHdlZW4pKSB8fCAodHdlZW4uX3RzIDwgMCB8fCB0d2Vlbi5fZHAuX3RzIDwgMCkgJiYgIV9pc0Zyb21PckZyb21TdGFydCh0d2VlbikpID8gMCA6IDEsXG4gICAgICAvLyBpZiB0aGUgdHdlZW4gb3IgaXRzIHBhcmVudCBpcyByZXZlcnNlZCBhbmQgdGhlIHRvdGFsVGltZSBpcyAwLCB3ZSBzaG91bGQgZ28gdG8gYSByYXRpbyBvZiAwLiBFZGdlIGNhc2U6IGlmIGEgZnJvbSgpIG9yIGZyb21UbygpIHN0YWdnZXIgdHdlZW4gaXMgcGxhY2VkIGxhdGVyIGluIGEgdGltZWxpbmUsIHRoZSBcInN0YXJ0QXRcIiB6ZXJvLWR1cmF0aW9uIHR3ZWVuIGNvdWxkIGluaXRpYWxseSByZW5kZXIgYXQgYSB0aW1lIHdoZW4gdGhlIHBhcmVudCB0aW1lbGluZSdzIHBsYXloZWFkIGlzIHRlY2huaWNhbGx5IEJFRk9SRSB3aGVyZSB0aGlzIHR3ZWVuIGlzLCBzbyBtYWtlIHN1cmUgdGhhdCBhbnkgXCJmcm9tXCIgYW5kIFwiZnJvbVRvXCIgc3RhcnRBdCB0d2VlbnMgYXJlIHJlbmRlcmVkIHRoZSBmaXJzdCB0aW1lIGF0IGEgcmF0aW8gb2YgMS5cbiAgcmVwZWF0RGVsYXkgPSB0d2Vlbi5fckRlbGF5LFxuICAgICAgdFRpbWUgPSAwLFxuICAgICAgcHQsXG4gICAgICBpdGVyYXRpb24sXG4gICAgICBwcmV2SXRlcmF0aW9uO1xuXG4gIGlmIChyZXBlYXREZWxheSAmJiB0d2Vlbi5fcmVwZWF0KSB7XG4gICAgLy8gaW4gY2FzZSB0aGVyZSdzIGEgemVyby1kdXJhdGlvbiB0d2VlbiB0aGF0IGhhcyBhIHJlcGVhdCB3aXRoIGEgcmVwZWF0RGVsYXlcbiAgICB0VGltZSA9IF9jbGFtcCgwLCB0d2Vlbi5fdER1ciwgdG90YWxUaW1lKTtcbiAgICBpdGVyYXRpb24gPSBfYW5pbWF0aW9uQ3ljbGUodFRpbWUsIHJlcGVhdERlbGF5KTtcbiAgICBwcmV2SXRlcmF0aW9uID0gX2FuaW1hdGlvbkN5Y2xlKHR3ZWVuLl90VGltZSwgcmVwZWF0RGVsYXkpO1xuICAgIHR3ZWVuLl95b3lvICYmIGl0ZXJhdGlvbiAmIDEgJiYgKHJhdGlvID0gMSAtIHJhdGlvKTtcblxuICAgIGlmIChpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24pIHtcbiAgICAgIHByZXZSYXRpbyA9IDEgLSByYXRpbztcbiAgICAgIHR3ZWVuLnZhcnMucmVwZWF0UmVmcmVzaCAmJiB0d2Vlbi5faW5pdHRlZCAmJiB0d2Vlbi5pbnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJhdGlvICE9PSBwcmV2UmF0aW8gfHwgZm9yY2UgfHwgdHdlZW4uX3pUaW1lID09PSBfdGlueU51bSB8fCAhdG90YWxUaW1lICYmIHR3ZWVuLl96VGltZSkge1xuICAgIGlmICghdHdlZW4uX2luaXR0ZWQgJiYgX2F0dGVtcHRJbml0VHdlZW4odHdlZW4sIHRvdGFsVGltZSwgZm9yY2UsIHN1cHByZXNzRXZlbnRzKSkge1xuICAgICAgLy8gaWYgd2UgcmVuZGVyIHRoZSB2ZXJ5IGJlZ2lubmluZyAodGltZSA9PSAwKSBvZiBhIGZyb21UbygpLCB3ZSBtdXN0IGZvcmNlIHRoZSByZW5kZXIgKG5vcm1hbCB0d2VlbnMgd291bGRuJ3QgbmVlZCB0byByZW5kZXIgYXQgYSB0aW1lIG9mIDAgd2hlbiB0aGUgcHJldlRpbWUgd2FzIGFsc28gMCkuIFRoaXMgaXMgYWxzbyBtYW5kYXRvcnkgdG8gbWFrZSBzdXJlIG92ZXJ3cml0aW5nIGtpY2tzIGluIGltbWVkaWF0ZWx5LlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByZXZJdGVyYXRpb24gPSB0d2Vlbi5felRpbWU7XG4gICAgdHdlZW4uX3pUaW1lID0gdG90YWxUaW1lIHx8IChzdXBwcmVzc0V2ZW50cyA/IF90aW55TnVtIDogMCk7IC8vIHdoZW4gdGhlIHBsYXloZWFkIGFycml2ZXMgYXQgRVhBQ1RMWSB0aW1lIDAgKHJpZ2h0IG9uIHRvcCkgb2YgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuLCB3ZSBuZWVkIHRvIGRpc2Nlcm4gaWYgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIHNvIHRoYXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgYWdhaW4gKG5leHQgdGltZSksIGl0J2xsIHRyaWdnZXIgdGhlIGNhbGxiYWNrLiBJZiBldmVudHMgYXJlIE5PVCBzdXBwcmVzc2VkLCBvYnZpb3VzbHkgdGhlIGNhbGxiYWNrIHdvdWxkIGJlIHRyaWdnZXJlZCBpbiB0aGlzIHJlbmRlci4gQmFzaWNhbGx5LCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUgZWl0aGVyIHdoZW4gdGhlIHBsYXloZWFkIEFSUklWRVMgb3IgTEVBVkVTIHRoaXMgZXhhY3Qgc3BvdCwgbm90IGJvdGguIEltYWdpbmUgZG9pbmcgYSB0aW1lbGluZS5zZWVrKDApIGFuZCB0aGVyZSdzIGEgY2FsbGJhY2sgdGhhdCBzaXRzIGF0IDAuIFNpbmNlIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBvbiB0aGF0IHNlZWsoKSBieSBkZWZhdWx0LCBub3RoaW5nIHdpbGwgZmlyZSwgYnV0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIG9mZiBvZiB0aGF0IHBvc2l0aW9uLCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUuIFRoaXMgYmVoYXZpb3IgaXMgd2hhdCBwZW9wbGUgaW50dWl0aXZlbHkgZXhwZWN0LlxuXG4gICAgc3VwcHJlc3NFdmVudHMgfHwgKHN1cHByZXNzRXZlbnRzID0gdG90YWxUaW1lICYmICFwcmV2SXRlcmF0aW9uKTsgLy8gaWYgaXQgd2FzIHJlbmRlcmVkIHByZXZpb3VzbHkgYXQgZXhhY3RseSAwIChfelRpbWUpIGFuZCBub3cgdGhlIHBsYXloZWFkIGlzIG1vdmluZyBhd2F5LCBET04nVCBmaXJlIGNhbGxiYWNrcyBvdGhlcndpc2UgdGhleSdsbCBzZWVtIGxpa2UgZHVwbGljYXRlcy5cblxuICAgIHR3ZWVuLnJhdGlvID0gcmF0aW87XG4gICAgdHdlZW4uX2Zyb20gJiYgKHJhdGlvID0gMSAtIHJhdGlvKTtcbiAgICB0d2Vlbi5fdGltZSA9IDA7XG4gICAgdHdlZW4uX3RUaW1lID0gdFRpbWU7XG4gICAgcHQgPSB0d2Vlbi5fcHQ7XG5cbiAgICB3aGlsZSAocHQpIHtcbiAgICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICB9XG5cbiAgICB0d2Vlbi5fc3RhcnRBdCAmJiB0b3RhbFRpbWUgPCAwICYmIHR3ZWVuLl9zdGFydEF0LnJlbmRlcih0b3RhbFRpbWUsIHRydWUsIHRydWUpO1xuICAgIHR3ZWVuLl9vblVwZGF0ZSAmJiAhc3VwcHJlc3NFdmVudHMgJiYgX2NhbGxiYWNrKHR3ZWVuLCBcIm9uVXBkYXRlXCIpO1xuICAgIHRUaW1lICYmIHR3ZWVuLl9yZXBlYXQgJiYgIXN1cHByZXNzRXZlbnRzICYmIHR3ZWVuLnBhcmVudCAmJiBfY2FsbGJhY2sodHdlZW4sIFwib25SZXBlYXRcIik7XG5cbiAgICBpZiAoKHRvdGFsVGltZSA+PSB0d2Vlbi5fdER1ciB8fCB0b3RhbFRpbWUgPCAwKSAmJiB0d2Vlbi5yYXRpbyA9PT0gcmF0aW8pIHtcbiAgICAgIHJhdGlvICYmIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLCAxKTtcblxuICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICBfY2FsbGJhY2sodHdlZW4sIHJhdGlvID8gXCJvbkNvbXBsZXRlXCIgOiBcIm9uUmV2ZXJzZUNvbXBsZXRlXCIsIHRydWUpO1xuXG4gICAgICAgIHR3ZWVuLl9wcm9tICYmIHR3ZWVuLl9wcm9tKCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKCF0d2Vlbi5felRpbWUpIHtcbiAgICB0d2Vlbi5felRpbWUgPSB0b3RhbFRpbWU7XG4gIH1cbn0sXG4gICAgX2ZpbmROZXh0UGF1c2VUd2VlbiA9IGZ1bmN0aW9uIF9maW5kTmV4dFBhdXNlVHdlZW4oYW5pbWF0aW9uLCBwcmV2VGltZSwgdGltZSkge1xuICB2YXIgY2hpbGQ7XG5cbiAgaWYgKHRpbWUgPiBwcmV2VGltZSkge1xuICAgIGNoaWxkID0gYW5pbWF0aW9uLl9maXJzdDtcblxuICAgIHdoaWxlIChjaGlsZCAmJiBjaGlsZC5fc3RhcnQgPD0gdGltZSkge1xuICAgICAgaWYgKCFjaGlsZC5fZHVyICYmIGNoaWxkLmRhdGEgPT09IFwiaXNQYXVzZVwiICYmIGNoaWxkLl9zdGFydCA+IHByZXZUaW1lKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQgPSBhbmltYXRpb24uX2xhc3Q7XG5cbiAgICB3aGlsZSAoY2hpbGQgJiYgY2hpbGQuX3N0YXJ0ID49IHRpbWUpIHtcbiAgICAgIGlmICghY2hpbGQuX2R1ciAmJiBjaGlsZC5kYXRhID09PSBcImlzUGF1c2VcIiAmJiBjaGlsZC5fc3RhcnQgPCBwcmV2VGltZSkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX3ByZXY7XG4gICAgfVxuICB9XG59LFxuICAgIF9zZXREdXJhdGlvbiA9IGZ1bmN0aW9uIF9zZXREdXJhdGlvbihhbmltYXRpb24sIGR1cmF0aW9uLCBza2lwVW5jYWNoZSwgbGVhdmVQbGF5aGVhZCkge1xuICB2YXIgcmVwZWF0ID0gYW5pbWF0aW9uLl9yZXBlYXQsXG4gICAgICBkdXIgPSBfcm91bmRQcmVjaXNlKGR1cmF0aW9uKSB8fCAwLFxuICAgICAgdG90YWxQcm9ncmVzcyA9IGFuaW1hdGlvbi5fdFRpbWUgLyBhbmltYXRpb24uX3REdXI7XG4gIHRvdGFsUHJvZ3Jlc3MgJiYgIWxlYXZlUGxheWhlYWQgJiYgKGFuaW1hdGlvbi5fdGltZSAqPSBkdXIgLyBhbmltYXRpb24uX2R1cik7XG4gIGFuaW1hdGlvbi5fZHVyID0gZHVyO1xuICBhbmltYXRpb24uX3REdXIgPSAhcmVwZWF0ID8gZHVyIDogcmVwZWF0IDwgMCA/IDFlMTAgOiBfcm91bmRQcmVjaXNlKGR1ciAqIChyZXBlYXQgKyAxKSArIGFuaW1hdGlvbi5fckRlbGF5ICogcmVwZWF0KTtcbiAgdG90YWxQcm9ncmVzcyAmJiAhbGVhdmVQbGF5aGVhZCA/IF9hbGlnblBsYXloZWFkKGFuaW1hdGlvbiwgYW5pbWF0aW9uLl90VGltZSA9IGFuaW1hdGlvbi5fdER1ciAqIHRvdGFsUHJvZ3Jlc3MpIDogYW5pbWF0aW9uLnBhcmVudCAmJiBfc2V0RW5kKGFuaW1hdGlvbik7XG4gIHNraXBVbmNhY2hlIHx8IF91bmNhY2hlKGFuaW1hdGlvbi5wYXJlbnQsIGFuaW1hdGlvbik7XG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiBfb25VcGRhdGVUb3RhbER1cmF0aW9uKGFuaW1hdGlvbikge1xuICByZXR1cm4gYW5pbWF0aW9uIGluc3RhbmNlb2YgVGltZWxpbmUgPyBfdW5jYWNoZShhbmltYXRpb24pIDogX3NldER1cmF0aW9uKGFuaW1hdGlvbiwgYW5pbWF0aW9uLl9kdXIpO1xufSxcbiAgICBfemVyb1Bvc2l0aW9uID0ge1xuICBfc3RhcnQ6IDAsXG4gIGVuZFRpbWU6IF9lbXB0eUZ1bmMsXG4gIHRvdGFsRHVyYXRpb246IF9lbXB0eUZ1bmNcbn0sXG4gICAgX3BhcnNlUG9zaXRpb24gPSBmdW5jdGlvbiBfcGFyc2VQb3NpdGlvbihhbmltYXRpb24sIHBvc2l0aW9uLCBwZXJjZW50QW5pbWF0aW9uKSB7XG4gIHZhciBsYWJlbHMgPSBhbmltYXRpb24ubGFiZWxzLFxuICAgICAgcmVjZW50ID0gYW5pbWF0aW9uLl9yZWNlbnQgfHwgX3plcm9Qb3NpdGlvbixcbiAgICAgIGNsaXBwZWREdXJhdGlvbiA9IGFuaW1hdGlvbi5kdXJhdGlvbigpID49IF9iaWdOdW0gPyByZWNlbnQuZW5kVGltZShmYWxzZSkgOiBhbmltYXRpb24uX2R1cixcbiAgICAgIC8vaW4gY2FzZSB0aGVyZSdzIGEgY2hpbGQgdGhhdCBpbmZpbml0ZWx5IHJlcGVhdHMsIHVzZXJzIGFsbW9zdCBuZXZlciBpbnRlbmQgZm9yIHRoZSBpbnNlcnRpb24gcG9pbnQgb2YgYSBuZXcgY2hpbGQgdG8gYmUgYmFzZWQgb24gYSBTVVBFUiBsb25nIHZhbHVlIGxpa2UgdGhhdCBzbyB3ZSBjbGlwIGl0IGFuZCBhc3N1bWUgdGhlIG1vc3QgcmVjZW50bHktYWRkZWQgY2hpbGQncyBlbmRUaW1lIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG4gIGksXG4gICAgICBvZmZzZXQsXG4gICAgICBpc1BlcmNlbnQ7XG5cbiAgaWYgKF9pc1N0cmluZyhwb3NpdGlvbikgJiYgKGlzTmFOKHBvc2l0aW9uKSB8fCBwb3NpdGlvbiBpbiBsYWJlbHMpKSB7XG4gICAgLy9pZiB0aGUgc3RyaW5nIGlzIGEgbnVtYmVyIGxpa2UgXCIxXCIsIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSdzIGEgbGFiZWwgd2l0aCB0aGF0IG5hbWUsIG90aGVyd2lzZSBpbnRlcnByZXQgaXQgYXMgYSBudW1iZXIgKGFic29sdXRlIHZhbHVlKS5cbiAgICBvZmZzZXQgPSBwb3NpdGlvbi5jaGFyQXQoMCk7XG4gICAgaXNQZXJjZW50ID0gcG9zaXRpb24uc3Vic3RyKC0xKSA9PT0gXCIlXCI7XG4gICAgaSA9IHBvc2l0aW9uLmluZGV4T2YoXCI9XCIpO1xuXG4gICAgaWYgKG9mZnNldCA9PT0gXCI8XCIgfHwgb2Zmc2V0ID09PSBcIj5cIikge1xuICAgICAgaSA+PSAwICYmIChwb3NpdGlvbiA9IHBvc2l0aW9uLnJlcGxhY2UoLz0vLCBcIlwiKSk7XG4gICAgICByZXR1cm4gKG9mZnNldCA9PT0gXCI8XCIgPyByZWNlbnQuX3N0YXJ0IDogcmVjZW50LmVuZFRpbWUocmVjZW50Ll9yZXBlYXQgPj0gMCkpICsgKHBhcnNlRmxvYXQocG9zaXRpb24uc3Vic3RyKDEpKSB8fCAwKSAqIChpc1BlcmNlbnQgPyAoaSA8IDAgPyByZWNlbnQgOiBwZXJjZW50QW5pbWF0aW9uKS50b3RhbER1cmF0aW9uKCkgLyAxMDAgOiAxKTtcbiAgICB9XG5cbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHBvc2l0aW9uIGluIGxhYmVscyB8fCAobGFiZWxzW3Bvc2l0aW9uXSA9IGNsaXBwZWREdXJhdGlvbik7XG4gICAgICByZXR1cm4gbGFiZWxzW3Bvc2l0aW9uXTtcbiAgICB9XG5cbiAgICBvZmZzZXQgPSBwYXJzZUZsb2F0KHBvc2l0aW9uLmNoYXJBdChpIC0gMSkgKyBwb3NpdGlvbi5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChpc1BlcmNlbnQgJiYgcGVyY2VudEFuaW1hdGlvbikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IC8gMTAwICogKF9pc0FycmF5KHBlcmNlbnRBbmltYXRpb24pID8gcGVyY2VudEFuaW1hdGlvblswXSA6IHBlcmNlbnRBbmltYXRpb24pLnRvdGFsRHVyYXRpb24oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaSA+IDEgPyBfcGFyc2VQb3NpdGlvbihhbmltYXRpb24sIHBvc2l0aW9uLnN1YnN0cigwLCBpIC0gMSksIHBlcmNlbnRBbmltYXRpb24pICsgb2Zmc2V0IDogY2xpcHBlZER1cmF0aW9uICsgb2Zmc2V0O1xuICB9XG5cbiAgcmV0dXJuIHBvc2l0aW9uID09IG51bGwgPyBjbGlwcGVkRHVyYXRpb24gOiArcG9zaXRpb247XG59LFxuICAgIF9jcmVhdGVUd2VlblR5cGUgPSBmdW5jdGlvbiBfY3JlYXRlVHdlZW5UeXBlKHR5cGUsIHBhcmFtcywgdGltZWxpbmUpIHtcbiAgdmFyIGlzTGVnYWN5ID0gX2lzTnVtYmVyKHBhcmFtc1sxXSksXG4gICAgICB2YXJzSW5kZXggPSAoaXNMZWdhY3kgPyAyIDogMSkgKyAodHlwZSA8IDIgPyAwIDogMSksXG4gICAgICB2YXJzID0gcGFyYW1zW3ZhcnNJbmRleF0sXG4gICAgICBpclZhcnMsXG4gICAgICBwYXJlbnQ7XG5cbiAgaXNMZWdhY3kgJiYgKHZhcnMuZHVyYXRpb24gPSBwYXJhbXNbMV0pO1xuICB2YXJzLnBhcmVudCA9IHRpbWVsaW5lO1xuXG4gIGlmICh0eXBlKSB7XG4gICAgaXJWYXJzID0gdmFycztcbiAgICBwYXJlbnQgPSB0aW1lbGluZTtcblxuICAgIHdoaWxlIChwYXJlbnQgJiYgIShcImltbWVkaWF0ZVJlbmRlclwiIGluIGlyVmFycykpIHtcbiAgICAgIC8vIGluaGVyaXRhbmNlIGhhc24ndCBoYXBwZW5lZCB5ZXQsIGJ1dCBzb21lb25lIG1heSBoYXZlIHNldCBhIGRlZmF1bHQgaW4gYW4gYW5jZXN0b3IgdGltZWxpbmUuIFdlIGNvdWxkIGRvIHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UoX2luaGVyaXREZWZhdWx0cyh2YXJzKS5pbW1lZGlhdGVSZW5kZXIpIGJ1dCB0aGF0J2QgZXhhY3QgYSBzbGlnaHQgcGVyZm9ybWFuY2UgcGVuYWx0eSBiZWNhdXNlIF9pbmhlcml0RGVmYXVsdHMoKSBhbHNvIHJ1bnMgaW4gdGhlIFR3ZWVuIGNvbnN0cnVjdG9yLiBXZSdyZSBwYXlpbmcgYSBzbWFsbCBrYiBwcmljZSBoZXJlIHRvIGdhaW4gc3BlZWQuXG4gICAgICBpclZhcnMgPSBwYXJlbnQudmFycy5kZWZhdWx0cyB8fCB7fTtcbiAgICAgIHBhcmVudCA9IF9pc05vdEZhbHNlKHBhcmVudC52YXJzLmluaGVyaXQpICYmIHBhcmVudC5wYXJlbnQ7XG4gICAgfVxuXG4gICAgdmFycy5pbW1lZGlhdGVSZW5kZXIgPSBfaXNOb3RGYWxzZShpclZhcnMuaW1tZWRpYXRlUmVuZGVyKTtcbiAgICB0eXBlIDwgMiA/IHZhcnMucnVuQmFja3dhcmRzID0gMSA6IHZhcnMuc3RhcnRBdCA9IHBhcmFtc1t2YXJzSW5kZXggLSAxXTsgLy8gXCJmcm9tXCIgdmFyc1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUd2VlbihwYXJhbXNbMF0sIHZhcnMsIHBhcmFtc1t2YXJzSW5kZXggKyAxXSk7XG59LFxuICAgIF9jb25kaXRpb25hbFJldHVybiA9IGZ1bmN0aW9uIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuYykge1xuICByZXR1cm4gdmFsdWUgfHwgdmFsdWUgPT09IDAgPyBmdW5jKHZhbHVlKSA6IGZ1bmM7XG59LFxuICAgIF9jbGFtcCA9IGZ1bmN0aW9uIF9jbGFtcChtaW4sIG1heCwgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZTtcbn0sXG4gICAgZ2V0VW5pdCA9IGZ1bmN0aW9uIGdldFVuaXQodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgdmFyIHYgPSBfdW5pdEV4cC5leGVjKHZhbHVlKTtcblxuICByZXR1cm4gdiA/IHZhbHVlLnN1YnN0cih2LmluZGV4ICsgdlswXS5sZW5ndGgpIDogXCJcIjtcbn0sXG4gICAgLy8gbm90ZTogcHJvdGVjdCBhZ2FpbnN0IHBhZGRlZCBudW1iZXJzIGFzIHN0cmluZ3MsIGxpa2UgXCIxMDAuMTAwXCIuIFRoYXQgc2hvdWxkbid0IHJldHVybiBcIjAwXCIgYXMgdGhlIHVuaXQuIElmIGl0J3MgbnVtZXJpYywgcmV0dXJuIG5vIHVuaXQuXG5jbGFtcCA9IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWx1ZSkge1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBfY2xhbXAobWluLCBtYXgsIHYpO1xuICB9KTtcbn0sXG4gICAgX3NsaWNlID0gW10uc2xpY2UsXG4gICAgX2lzQXJyYXlMaWtlID0gZnVuY3Rpb24gX2lzQXJyYXlMaWtlKHZhbHVlLCBub25FbXB0eSkge1xuICByZXR1cm4gdmFsdWUgJiYgX2lzT2JqZWN0KHZhbHVlKSAmJiBcImxlbmd0aFwiIGluIHZhbHVlICYmICghbm9uRW1wdHkgJiYgIXZhbHVlLmxlbmd0aCB8fCB2YWx1ZS5sZW5ndGggLSAxIGluIHZhbHVlICYmIF9pc09iamVjdCh2YWx1ZVswXSkpICYmICF2YWx1ZS5ub2RlVHlwZSAmJiB2YWx1ZSAhPT0gX3dpbjtcbn0sXG4gICAgX2ZsYXR0ZW4gPSBmdW5jdGlvbiBfZmxhdHRlbihhciwgbGVhdmVTdHJpbmdzLCBhY2N1bXVsYXRvcikge1xuICBpZiAoYWNjdW11bGF0b3IgPT09IHZvaWQgMCkge1xuICAgIGFjY3VtdWxhdG9yID0gW107XG4gIH1cblxuICByZXR1cm4gYXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgX2FjY3VtdWxhdG9yO1xuXG4gICAgcmV0dXJuIF9pc1N0cmluZyh2YWx1ZSkgJiYgIWxlYXZlU3RyaW5ncyB8fCBfaXNBcnJheUxpa2UodmFsdWUsIDEpID8gKF9hY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yKS5wdXNoLmFwcGx5KF9hY2N1bXVsYXRvciwgdG9BcnJheSh2YWx1ZSkpIDogYWNjdW11bGF0b3IucHVzaCh2YWx1ZSk7XG4gIH0pIHx8IGFjY3VtdWxhdG9yO1xufSxcbiAgICAvL3Rha2VzIGFueSB2YWx1ZSBhbmQgcmV0dXJucyBhbiBhcnJheS4gSWYgaXQncyBhIHN0cmluZyAoYW5kIGxlYXZlU3RyaW5ncyBpc24ndCB0cnVlKSwgaXQnbGwgdXNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoKSBhbmQgY29udmVydCB0aGF0IHRvIGFuIGFycmF5LiBJdCdsbCBhbHNvIGFjY2VwdCBpdGVyYWJsZXMgbGlrZSBqUXVlcnkgb2JqZWN0cy5cbnRvQXJyYXkgPSBmdW5jdGlvbiB0b0FycmF5KHZhbHVlLCBzY29wZSwgbGVhdmVTdHJpbmdzKSB7XG4gIHJldHVybiBfaXNTdHJpbmcodmFsdWUpICYmICFsZWF2ZVN0cmluZ3MgJiYgKF9jb3JlSW5pdHRlZCB8fCAhX3dha2UoKSkgPyBfc2xpY2UuY2FsbCgoc2NvcGUgfHwgX2RvYykucXVlcnlTZWxlY3RvckFsbCh2YWx1ZSksIDApIDogX2lzQXJyYXkodmFsdWUpID8gX2ZsYXR0ZW4odmFsdWUsIGxlYXZlU3RyaW5ncykgOiBfaXNBcnJheUxpa2UodmFsdWUpID8gX3NsaWNlLmNhbGwodmFsdWUsIDApIDogdmFsdWUgPyBbdmFsdWVdIDogW107XG59LFxuICAgIHNlbGVjdG9yID0gZnVuY3Rpb24gc2VsZWN0b3IodmFsdWUpIHtcbiAgdmFsdWUgPSB0b0FycmF5KHZhbHVlKVswXSB8fCBfd2FybihcIkludmFsaWQgc2NvcGVcIikgfHwge307XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciBlbCA9IHZhbHVlLmN1cnJlbnQgfHwgdmFsdWUubmF0aXZlRWxlbWVudCB8fCB2YWx1ZTtcbiAgICByZXR1cm4gdG9BcnJheSh2LCBlbC5xdWVyeVNlbGVjdG9yQWxsID8gZWwgOiBlbCA9PT0gdmFsdWUgPyBfd2FybihcIkludmFsaWQgc2NvcGVcIikgfHwgX2RvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIDogdmFsdWUpO1xuICB9O1xufSxcbiAgICBzaHVmZmxlID0gZnVuY3Rpb24gc2h1ZmZsZShhKSB7XG4gIHJldHVybiBhLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAuNSAtIE1hdGgucmFuZG9tKCk7XG4gIH0pO1xufSxcbiAgICAvLyBhbHRlcm5hdGl2ZSB0aGF0J3MgYSBiaXQgZmFzdGVyIGFuZCBtb3JlIHJlbGlhYmx5IGRpdmVyc2UgYnV0IGJpZ2dlcjogICBmb3IgKGxldCBqLCB2LCBpID0gYS5sZW5ndGg7IGk7IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKSwgdiA9IGFbLS1pXSwgYVtpXSA9IGFbal0sIGFbal0gPSB2KTsgcmV0dXJuIGE7XG4vL2ZvciBkaXN0cmlidXRpbmcgdmFsdWVzIGFjcm9zcyBhbiBhcnJheS4gQ2FuIGFjY2VwdCBhIG51bWJlciwgYSBmdW5jdGlvbiBvciAobW9zdCBjb21tb25seSkgYSBmdW5jdGlvbiB3aGljaCBjYW4gY29udGFpbiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6IHtiYXNlLCBhbW91bnQsIGZyb20sIGVhc2UsIGdyaWQsIGF4aXMsIGxlbmd0aCwgZWFjaH0uIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGV4cGVjdHMgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBpbmRleCwgdGFyZ2V0LCBhcnJheS4gUmVjb2duaXplcyB0aGUgZm9sbG93aW5nXG5kaXN0cmlidXRlID0gZnVuY3Rpb24gZGlzdHJpYnV0ZSh2KSB7XG4gIGlmIChfaXNGdW5jdGlvbih2KSkge1xuICAgIHJldHVybiB2O1xuICB9XG5cbiAgdmFyIHZhcnMgPSBfaXNPYmplY3QodikgPyB2IDoge1xuICAgIGVhY2g6IHZcbiAgfSxcbiAgICAgIC8vbjoxIGlzIGp1c3QgdG8gaW5kaWNhdGUgdiB3YXMgYSBudW1iZXI7IHdlIGxldmVyYWdlIHRoYXQgbGF0ZXIgdG8gc2V0IHYgYWNjb3JkaW5nIHRvIHRoZSBsZW5ndGggd2UgZ2V0LiBJZiBhIG51bWJlciBpcyBwYXNzZWQgaW4sIHdlIHRyZWF0IGl0IGxpa2UgdGhlIG9sZCBzdGFnZ2VyIHZhbHVlIHdoZXJlIDAuMSwgZm9yIGV4YW1wbGUsIHdvdWxkIG1lYW4gdGhhdCB0aGluZ3Mgd291bGQgYmUgZGlzdHJpYnV0ZWQgd2l0aCAwLjEgYmV0d2VlbiBlYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5IHJhdGhlciB0aGFuIGEgdG90YWwgXCJhbW91bnRcIiB0aGF0J3MgY2h1bmtlZCBvdXQgYW1vbmcgdGhlbSBhbGwuXG4gIGVhc2UgPSBfcGFyc2VFYXNlKHZhcnMuZWFzZSksXG4gICAgICBmcm9tID0gdmFycy5mcm9tIHx8IDAsXG4gICAgICBiYXNlID0gcGFyc2VGbG9hdCh2YXJzLmJhc2UpIHx8IDAsXG4gICAgICBjYWNoZSA9IHt9LFxuICAgICAgaXNEZWNpbWFsID0gZnJvbSA+IDAgJiYgZnJvbSA8IDEsXG4gICAgICByYXRpb3MgPSBpc05hTihmcm9tKSB8fCBpc0RlY2ltYWwsXG4gICAgICBheGlzID0gdmFycy5heGlzLFxuICAgICAgcmF0aW9YID0gZnJvbSxcbiAgICAgIHJhdGlvWSA9IGZyb207XG5cbiAgaWYgKF9pc1N0cmluZyhmcm9tKSkge1xuICAgIHJhdGlvWCA9IHJhdGlvWSA9IHtcbiAgICAgIGNlbnRlcjogLjUsXG4gICAgICBlZGdlczogLjUsXG4gICAgICBlbmQ6IDFcbiAgICB9W2Zyb21dIHx8IDA7XG4gIH0gZWxzZSBpZiAoIWlzRGVjaW1hbCAmJiByYXRpb3MpIHtcbiAgICByYXRpb1ggPSBmcm9tWzBdO1xuICAgIHJhdGlvWSA9IGZyb21bMV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGksIHRhcmdldCwgYSkge1xuICAgIHZhciBsID0gKGEgfHwgdmFycykubGVuZ3RoLFxuICAgICAgICBkaXN0YW5jZXMgPSBjYWNoZVtsXSxcbiAgICAgICAgb3JpZ2luWCxcbiAgICAgICAgb3JpZ2luWSxcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgZCxcbiAgICAgICAgaixcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW4sXG4gICAgICAgIHdyYXBBdDtcblxuICAgIGlmICghZGlzdGFuY2VzKSB7XG4gICAgICB3cmFwQXQgPSB2YXJzLmdyaWQgPT09IFwiYXV0b1wiID8gMCA6ICh2YXJzLmdyaWQgfHwgWzEsIF9iaWdOdW1dKVsxXTtcblxuICAgICAgaWYgKCF3cmFwQXQpIHtcbiAgICAgICAgbWF4ID0gLV9iaWdOdW07XG5cbiAgICAgICAgd2hpbGUgKG1heCA8IChtYXggPSBhW3dyYXBBdCsrXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSAmJiB3cmFwQXQgPCBsKSB7fVxuXG4gICAgICAgIHdyYXBBdC0tO1xuICAgICAgfVxuXG4gICAgICBkaXN0YW5jZXMgPSBjYWNoZVtsXSA9IFtdO1xuICAgICAgb3JpZ2luWCA9IHJhdGlvcyA/IE1hdGgubWluKHdyYXBBdCwgbCkgKiByYXRpb1ggLSAuNSA6IGZyb20gJSB3cmFwQXQ7XG4gICAgICBvcmlnaW5ZID0gcmF0aW9zID8gbCAqIHJhdGlvWSAvIHdyYXBBdCAtIC41IDogZnJvbSAvIHdyYXBBdCB8IDA7XG4gICAgICBtYXggPSAwO1xuICAgICAgbWluID0gX2JpZ051bTtcblxuICAgICAgZm9yIChqID0gMDsgaiA8IGw7IGorKykge1xuICAgICAgICB4ID0gaiAlIHdyYXBBdCAtIG9yaWdpblg7XG4gICAgICAgIHkgPSBvcmlnaW5ZIC0gKGogLyB3cmFwQXQgfCAwKTtcbiAgICAgICAgZGlzdGFuY2VzW2pdID0gZCA9ICFheGlzID8gX3NxcnQoeCAqIHggKyB5ICogeSkgOiBNYXRoLmFicyhheGlzID09PSBcInlcIiA/IHkgOiB4KTtcbiAgICAgICAgZCA+IG1heCAmJiAobWF4ID0gZCk7XG4gICAgICAgIGQgPCBtaW4gJiYgKG1pbiA9IGQpO1xuICAgICAgfVxuXG4gICAgICBmcm9tID09PSBcInJhbmRvbVwiICYmIHNodWZmbGUoZGlzdGFuY2VzKTtcbiAgICAgIGRpc3RhbmNlcy5tYXggPSBtYXggLSBtaW47XG4gICAgICBkaXN0YW5jZXMubWluID0gbWluO1xuICAgICAgZGlzdGFuY2VzLnYgPSBsID0gKHBhcnNlRmxvYXQodmFycy5hbW91bnQpIHx8IHBhcnNlRmxvYXQodmFycy5lYWNoKSAqICh3cmFwQXQgPiBsID8gbCAtIDEgOiAhYXhpcyA/IE1hdGgubWF4KHdyYXBBdCwgbCAvIHdyYXBBdCkgOiBheGlzID09PSBcInlcIiA/IGwgLyB3cmFwQXQgOiB3cmFwQXQpIHx8IDApICogKGZyb20gPT09IFwiZWRnZXNcIiA/IC0xIDogMSk7XG4gICAgICBkaXN0YW5jZXMuYiA9IGwgPCAwID8gYmFzZSAtIGwgOiBiYXNlO1xuICAgICAgZGlzdGFuY2VzLnUgPSBnZXRVbml0KHZhcnMuYW1vdW50IHx8IHZhcnMuZWFjaCkgfHwgMDsgLy91bml0XG5cbiAgICAgIGVhc2UgPSBlYXNlICYmIGwgPCAwID8gX2ludmVydEVhc2UoZWFzZSkgOiBlYXNlO1xuICAgIH1cblxuICAgIGwgPSAoZGlzdGFuY2VzW2ldIC0gZGlzdGFuY2VzLm1pbikgLyBkaXN0YW5jZXMubWF4IHx8IDA7XG4gICAgcmV0dXJuIF9yb3VuZFByZWNpc2UoZGlzdGFuY2VzLmIgKyAoZWFzZSA/IGVhc2UobCkgOiBsKSAqIGRpc3RhbmNlcy52KSArIGRpc3RhbmNlcy51OyAvL3JvdW5kIGluIG9yZGVyIHRvIHdvcmsgYXJvdW5kIGZsb2F0aW5nIHBvaW50IGVycm9yc1xuICB9O1xufSxcbiAgICBfcm91bmRNb2RpZmllciA9IGZ1bmN0aW9uIF9yb3VuZE1vZGlmaWVyKHYpIHtcbiAgLy9wYXNzIGluIDAuMSBnZXQgYSBmdW5jdGlvbiB0aGF0J2xsIHJvdW5kIHRvIHRoZSBuZWFyZXN0IHRlbnRoLCBvciA1IHRvIHJvdW5kIHRvIHRoZSBjbG9zZXN0IDUsIG9yIDAuMDAxIHRvIHRoZSBjbG9zZXN0IDEwMDB0aCwgZXRjLlxuICB2YXIgcCA9IE1hdGgucG93KDEwLCAoKHYgKyBcIlwiKS5zcGxpdChcIi5cIilbMV0gfHwgXCJcIikubGVuZ3RoKTsgLy90byBhdm9pZCBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyAobGlrZSAyNCAqIDAuMSA9PSAyLjQwMDAwMDAwMDAwMDAwMDQpLCB3ZSBjaG9wIG9mZiBhdCBhIHNwZWNpZmljIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyAobXVjaCBmYXN0ZXIgdGhhbiB0b0ZpeGVkKCkpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChyYXcpIHtcbiAgICB2YXIgbiA9IE1hdGgucm91bmQocGFyc2VGbG9hdChyYXcpIC8gdikgKiB2ICogcDtcbiAgICByZXR1cm4gKG4gLSBuICUgMSkgLyBwICsgKF9pc051bWJlcihyYXcpID8gMCA6IGdldFVuaXQocmF3KSk7IC8vIG4gLSBuICUgMSByZXBsYWNlcyBNYXRoLmZsb29yKCkgaW4gb3JkZXIgdG8gaGFuZGxlIG5lZ2F0aXZlIHZhbHVlcyBwcm9wZXJseS4gRm9yIGV4YW1wbGUsIE1hdGguZmxvb3IoLTE1MC4wMDAwMDAwMDAwMDAwMykgaXMgMTUxIVxuICB9O1xufSxcbiAgICBzbmFwID0gZnVuY3Rpb24gc25hcChzbmFwVG8sIHZhbHVlKSB7XG4gIHZhciBpc0FycmF5ID0gX2lzQXJyYXkoc25hcFRvKSxcbiAgICAgIHJhZGl1cyxcbiAgICAgIGlzMkQ7XG5cbiAgaWYgKCFpc0FycmF5ICYmIF9pc09iamVjdChzbmFwVG8pKSB7XG4gICAgcmFkaXVzID0gaXNBcnJheSA9IHNuYXBUby5yYWRpdXMgfHwgX2JpZ051bTtcblxuICAgIGlmIChzbmFwVG8udmFsdWVzKSB7XG4gICAgICBzbmFwVG8gPSB0b0FycmF5KHNuYXBUby52YWx1ZXMpO1xuXG4gICAgICBpZiAoaXMyRCA9ICFfaXNOdW1iZXIoc25hcFRvWzBdKSkge1xuICAgICAgICByYWRpdXMgKj0gcmFkaXVzOyAvL3BlcmZvcm1hbmNlIG9wdGltaXphdGlvbiBzbyB3ZSBkb24ndCBoYXZlIHRvIE1hdGguc3FydCgpIGluIHRoZSBsb29wLlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzbmFwVG8gPSBfcm91bmRNb2RpZmllcihzbmFwVG8uaW5jcmVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCAhaXNBcnJheSA/IF9yb3VuZE1vZGlmaWVyKHNuYXBUbykgOiBfaXNGdW5jdGlvbihzbmFwVG8pID8gZnVuY3Rpb24gKHJhdykge1xuICAgIGlzMkQgPSBzbmFwVG8ocmF3KTtcbiAgICByZXR1cm4gTWF0aC5hYnMoaXMyRCAtIHJhdykgPD0gcmFkaXVzID8gaXMyRCA6IHJhdztcbiAgfSA6IGZ1bmN0aW9uIChyYXcpIHtcbiAgICB2YXIgeCA9IHBhcnNlRmxvYXQoaXMyRCA/IHJhdy54IDogcmF3KSxcbiAgICAgICAgeSA9IHBhcnNlRmxvYXQoaXMyRCA/IHJhdy55IDogMCksXG4gICAgICAgIG1pbiA9IF9iaWdOdW0sXG4gICAgICAgIGNsb3Nlc3QgPSAwLFxuICAgICAgICBpID0gc25hcFRvLmxlbmd0aCxcbiAgICAgICAgZHgsXG4gICAgICAgIGR5O1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGlzMkQpIHtcbiAgICAgICAgZHggPSBzbmFwVG9baV0ueCAtIHg7XG4gICAgICAgIGR5ID0gc25hcFRvW2ldLnkgLSB5O1xuICAgICAgICBkeCA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHggPSBNYXRoLmFicyhzbmFwVG9baV0gLSB4KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGR4IDwgbWluKSB7XG4gICAgICAgIG1pbiA9IGR4O1xuICAgICAgICBjbG9zZXN0ID0gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZXN0ID0gIXJhZGl1cyB8fCBtaW4gPD0gcmFkaXVzID8gc25hcFRvW2Nsb3Nlc3RdIDogcmF3O1xuICAgIHJldHVybiBpczJEIHx8IGNsb3Nlc3QgPT09IHJhdyB8fCBfaXNOdW1iZXIocmF3KSA/IGNsb3Nlc3QgOiBjbG9zZXN0ICsgZ2V0VW5pdChyYXcpO1xuICB9KTtcbn0sXG4gICAgcmFuZG9tID0gZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4LCByb3VuZGluZ0luY3JlbWVudCwgcmV0dXJuRnVuY3Rpb24pIHtcbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybihfaXNBcnJheShtaW4pID8gIW1heCA6IHJvdW5kaW5nSW5jcmVtZW50ID09PSB0cnVlID8gISEocm91bmRpbmdJbmNyZW1lbnQgPSAwKSA6ICFyZXR1cm5GdW5jdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNBcnJheShtaW4pID8gbWluW35+KE1hdGgucmFuZG9tKCkgKiBtaW4ubGVuZ3RoKV0gOiAocm91bmRpbmdJbmNyZW1lbnQgPSByb3VuZGluZ0luY3JlbWVudCB8fCAxZS01KSAmJiAocmV0dXJuRnVuY3Rpb24gPSByb3VuZGluZ0luY3JlbWVudCA8IDEgPyBNYXRoLnBvdygxMCwgKHJvdW5kaW5nSW5jcmVtZW50ICsgXCJcIikubGVuZ3RoIC0gMikgOiAxKSAmJiBNYXRoLmZsb29yKE1hdGgucm91bmQoKG1pbiAtIHJvdW5kaW5nSW5jcmVtZW50IC8gMiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgcm91bmRpbmdJbmNyZW1lbnQgKiAuOTkpKSAvIHJvdW5kaW5nSW5jcmVtZW50KSAqIHJvdW5kaW5nSW5jcmVtZW50ICogcmV0dXJuRnVuY3Rpb24pIC8gcmV0dXJuRnVuY3Rpb247XG4gIH0pO1xufSxcbiAgICBwaXBlID0gZnVuY3Rpb24gcGlwZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmN0aW9ucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jdGlvbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHYsIGYpIHtcbiAgICAgIHJldHVybiBmKHYpO1xuICAgIH0sIHZhbHVlKTtcbiAgfTtcbn0sXG4gICAgdW5pdGl6ZSA9IGZ1bmN0aW9uIHVuaXRpemUoZnVuYywgdW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmMocGFyc2VGbG9hdCh2YWx1ZSkpICsgKHVuaXQgfHwgZ2V0VW5pdCh2YWx1ZSkpO1xuICB9O1xufSxcbiAgICBub3JtYWxpemUgPSBmdW5jdGlvbiBub3JtYWxpemUobWluLCBtYXgsIHZhbHVlKSB7XG4gIHJldHVybiBtYXBSYW5nZShtaW4sIG1heCwgMCwgMSwgdmFsdWUpO1xufSxcbiAgICBfd3JhcEFycmF5ID0gZnVuY3Rpb24gX3dyYXBBcnJheShhLCB3cmFwcGVyLCB2YWx1ZSkge1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gYVt+fndyYXBwZXIoaW5kZXgpXTtcbiAgfSk7XG59LFxuICAgIHdyYXAgPSBmdW5jdGlvbiB3cmFwKG1pbiwgbWF4LCB2YWx1ZSkge1xuICAvLyBOT1RFOiB3cmFwKCkgQ0FOTk9UIGJlIGFuIGFycm93IGZ1bmN0aW9uISBBIHZlcnkgb2RkIGNvbXBpbGluZyBidWcgY2F1c2VzIHByb2JsZW1zICh1bnJlbGF0ZWQgdG8gR1NBUCkuXG4gIHZhciByYW5nZSA9IG1heCAtIG1pbjtcbiAgcmV0dXJuIF9pc0FycmF5KG1pbikgPyBfd3JhcEFycmF5KG1pbiwgd3JhcCgwLCBtaW4ubGVuZ3RoKSwgbWF4KSA6IF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIChyYW5nZSArICh2YWx1ZSAtIG1pbikgJSByYW5nZSkgJSByYW5nZSArIG1pbjtcbiAgfSk7XG59LFxuICAgIHdyYXBZb3lvID0gZnVuY3Rpb24gd3JhcFlveW8obWluLCBtYXgsIHZhbHVlKSB7XG4gIHZhciByYW5nZSA9IG1heCAtIG1pbixcbiAgICAgIHRvdGFsID0gcmFuZ2UgKiAyO1xuICByZXR1cm4gX2lzQXJyYXkobWluKSA/IF93cmFwQXJyYXkobWluLCB3cmFwWW95bygwLCBtaW4ubGVuZ3RoIC0gMSksIG1heCkgOiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhbHVlID0gKHRvdGFsICsgKHZhbHVlIC0gbWluKSAlIHRvdGFsKSAlIHRvdGFsIHx8IDA7XG4gICAgcmV0dXJuIG1pbiArICh2YWx1ZSA+IHJhbmdlID8gdG90YWwgLSB2YWx1ZSA6IHZhbHVlKTtcbiAgfSk7XG59LFxuICAgIF9yZXBsYWNlUmFuZG9tID0gZnVuY3Rpb24gX3JlcGxhY2VSYW5kb20odmFsdWUpIHtcbiAgLy9yZXBsYWNlcyBhbGwgb2NjdXJyZW5jZXMgb2YgcmFuZG9tKC4uLikgaW4gYSBzdHJpbmcgd2l0aCB0aGUgY2FsY3VsYXRlZCByYW5kb20gdmFsdWUuIGNhbiBiZSBhIHJhbmdlIGxpa2UgcmFuZG9tKC0xMDAsIDEwMCwgNSkgb3IgYW4gYXJyYXkgbGlrZSByYW5kb20oWzAsIDEwMCwgNTAwXSlcbiAgdmFyIHByZXYgPSAwLFxuICAgICAgcyA9IFwiXCIsXG4gICAgICBpLFxuICAgICAgbnVtcyxcbiAgICAgIGVuZCxcbiAgICAgIGlzQXJyYXk7XG5cbiAgd2hpbGUgKH4oaSA9IHZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIsIHByZXYpKSkge1xuICAgIGVuZCA9IHZhbHVlLmluZGV4T2YoXCIpXCIsIGkpO1xuICAgIGlzQXJyYXkgPSB2YWx1ZS5jaGFyQXQoaSArIDcpID09PSBcIltcIjtcbiAgICBudW1zID0gdmFsdWUuc3Vic3RyKGkgKyA3LCBlbmQgLSBpIC0gNykubWF0Y2goaXNBcnJheSA/IF9kZWxpbWl0ZWRWYWx1ZUV4cCA6IF9zdHJpY3ROdW1FeHApO1xuICAgIHMgKz0gdmFsdWUuc3Vic3RyKHByZXYsIGkgLSBwcmV2KSArIHJhbmRvbShpc0FycmF5ID8gbnVtcyA6ICtudW1zWzBdLCBpc0FycmF5ID8gMCA6ICtudW1zWzFdLCArbnVtc1syXSB8fCAxZS01KTtcbiAgICBwcmV2ID0gZW5kICsgMTtcbiAgfVxuXG4gIHJldHVybiBzICsgdmFsdWUuc3Vic3RyKHByZXYsIHZhbHVlLmxlbmd0aCAtIHByZXYpO1xufSxcbiAgICBtYXBSYW5nZSA9IGZ1bmN0aW9uIG1hcFJhbmdlKGluTWluLCBpbk1heCwgb3V0TWluLCBvdXRNYXgsIHZhbHVlKSB7XG4gIHZhciBpblJhbmdlID0gaW5NYXggLSBpbk1pbixcbiAgICAgIG91dFJhbmdlID0gb3V0TWF4IC0gb3V0TWluO1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gb3V0TWluICsgKCh2YWx1ZSAtIGluTWluKSAvIGluUmFuZ2UgKiBvdXRSYW5nZSB8fCAwKTtcbiAgfSk7XG59LFxuICAgIGludGVycG9sYXRlID0gZnVuY3Rpb24gaW50ZXJwb2xhdGUoc3RhcnQsIGVuZCwgcHJvZ3Jlc3MsIG11dGF0ZSkge1xuICB2YXIgZnVuYyA9IGlzTmFOKHN0YXJ0ICsgZW5kKSA/IDAgOiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAoMSAtIHApICogc3RhcnQgKyBwICogZW5kO1xuICB9O1xuXG4gIGlmICghZnVuYykge1xuICAgIHZhciBpc1N0cmluZyA9IF9pc1N0cmluZyhzdGFydCksXG4gICAgICAgIG1hc3RlciA9IHt9LFxuICAgICAgICBwLFxuICAgICAgICBpLFxuICAgICAgICBpbnRlcnBvbGF0b3JzLFxuICAgICAgICBsLFxuICAgICAgICBpbDtcblxuICAgIHByb2dyZXNzID09PSB0cnVlICYmIChtdXRhdGUgPSAxKSAmJiAocHJvZ3Jlc3MgPSBudWxsKTtcblxuICAgIGlmIChpc1N0cmluZykge1xuICAgICAgc3RhcnQgPSB7XG4gICAgICAgIHA6IHN0YXJ0XG4gICAgICB9O1xuICAgICAgZW5kID0ge1xuICAgICAgICBwOiBlbmRcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChfaXNBcnJheShzdGFydCkgJiYgIV9pc0FycmF5KGVuZCkpIHtcbiAgICAgIGludGVycG9sYXRvcnMgPSBbXTtcbiAgICAgIGwgPSBzdGFydC5sZW5ndGg7XG4gICAgICBpbCA9IGwgLSAyO1xuXG4gICAgICBmb3IgKGkgPSAxOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGludGVycG9sYXRvcnMucHVzaChpbnRlcnBvbGF0ZShzdGFydFtpIC0gMV0sIHN0YXJ0W2ldKSk7IC8vYnVpbGQgdGhlIGludGVycG9sYXRvcnMgdXAgZnJvbnQgYXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gc28gdGhhdCB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgbWFueSB0aW1lcywgaXQgY2FuIGp1c3QgcmV1c2UgdGhlbS5cbiAgICAgIH1cblxuICAgICAgbC0tO1xuXG4gICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYyhwKSB7XG4gICAgICAgIHAgKj0gbDtcbiAgICAgICAgdmFyIGkgPSBNYXRoLm1pbihpbCwgfn5wKTtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRvcnNbaV0ocCAtIGkpO1xuICAgICAgfTtcblxuICAgICAgcHJvZ3Jlc3MgPSBlbmQ7XG4gICAgfSBlbHNlIGlmICghbXV0YXRlKSB7XG4gICAgICBzdGFydCA9IF9tZXJnZShfaXNBcnJheShzdGFydCkgPyBbXSA6IHt9LCBzdGFydCk7XG4gICAgfVxuXG4gICAgaWYgKCFpbnRlcnBvbGF0b3JzKSB7XG4gICAgICBmb3IgKHAgaW4gZW5kKSB7XG4gICAgICAgIF9hZGRQcm9wVHdlZW4uY2FsbChtYXN0ZXIsIHN0YXJ0LCBwLCBcImdldFwiLCBlbmRbcF0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYyhwKSB7XG4gICAgICAgIHJldHVybiBfcmVuZGVyUHJvcFR3ZWVucyhwLCBtYXN0ZXIpIHx8IChpc1N0cmluZyA/IHN0YXJ0LnAgOiBzdGFydCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4ocHJvZ3Jlc3MsIGZ1bmMpO1xufSxcbiAgICBfZ2V0TGFiZWxJbkRpcmVjdGlvbiA9IGZ1bmN0aW9uIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRpbWVsaW5lLCBmcm9tVGltZSwgYmFja3dhcmQpIHtcbiAgLy91c2VkIGZvciBuZXh0TGFiZWwoKSBhbmQgcHJldmlvdXNMYWJlbCgpXG4gIHZhciBsYWJlbHMgPSB0aW1lbGluZS5sYWJlbHMsXG4gICAgICBtaW4gPSBfYmlnTnVtLFxuICAgICAgcCxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgbGFiZWw7XG5cbiAgZm9yIChwIGluIGxhYmVscykge1xuICAgIGRpc3RhbmNlID0gbGFiZWxzW3BdIC0gZnJvbVRpbWU7XG5cbiAgICBpZiAoZGlzdGFuY2UgPCAwID09PSAhIWJhY2t3YXJkICYmIGRpc3RhbmNlICYmIG1pbiA+IChkaXN0YW5jZSA9IE1hdGguYWJzKGRpc3RhbmNlKSkpIHtcbiAgICAgIGxhYmVsID0gcDtcbiAgICAgIG1pbiA9IGRpc3RhbmNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsYWJlbDtcbn0sXG4gICAgX2NhbGxiYWNrID0gZnVuY3Rpb24gX2NhbGxiYWNrKGFuaW1hdGlvbiwgdHlwZSwgZXhlY3V0ZUxhenlGaXJzdCkge1xuICB2YXIgdiA9IGFuaW1hdGlvbi52YXJzLFxuICAgICAgY2FsbGJhY2sgPSB2W3R5cGVdLFxuICAgICAgcGFyYW1zLFxuICAgICAgc2NvcGU7XG5cbiAgaWYgKCFjYWxsYmFjaykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHBhcmFtcyA9IHZbdHlwZSArIFwiUGFyYW1zXCJdO1xuICBzY29wZSA9IHYuY2FsbGJhY2tTY29wZSB8fCBhbmltYXRpb247XG4gIGV4ZWN1dGVMYXp5Rmlyc3QgJiYgX2xhenlUd2VlbnMubGVuZ3RoICYmIF9sYXp5UmVuZGVyKCk7IC8vaW4gY2FzZSByZW5kZXJpbmcgY2F1c2VkIGFueSB0d2VlbnMgdG8gbGF6eS1pbml0LCB3ZSBzaG91bGQgcmVuZGVyIHRoZW0gYmVjYXVzZSB0eXBpY2FsbHkgd2hlbiBhIHRpbWVsaW5lIGZpbmlzaGVzLCB1c2VycyBleHBlY3QgdGhpbmdzIHRvIGhhdmUgcmVuZGVyZWQgZnVsbHkuIEltYWdpbmUgYW4gb25VcGRhdGUgb24gYSB0aW1lbGluZSB0aGF0IHJlcG9ydHMvY2hlY2tzIHR3ZWVuZWQgdmFsdWVzLlxuXG4gIHJldHVybiBwYXJhbXMgPyBjYWxsYmFjay5hcHBseShzY29wZSwgcGFyYW1zKSA6IGNhbGxiYWNrLmNhbGwoc2NvcGUpO1xufSxcbiAgICBfaW50ZXJydXB0ID0gZnVuY3Rpb24gX2ludGVycnVwdChhbmltYXRpb24pIHtcbiAgX3JlbW92ZUZyb21QYXJlbnQoYW5pbWF0aW9uKTtcblxuICBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlciAmJiBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlci5raWxsKGZhbHNlKTtcbiAgYW5pbWF0aW9uLnByb2dyZXNzKCkgPCAxICYmIF9jYWxsYmFjayhhbmltYXRpb24sIFwib25JbnRlcnJ1cHRcIik7XG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9xdWlja1R3ZWVuLFxuICAgIF9jcmVhdGVQbHVnaW4gPSBmdW5jdGlvbiBfY3JlYXRlUGx1Z2luKGNvbmZpZykge1xuICBjb25maWcgPSAhY29uZmlnLm5hbWUgJiYgY29uZmlnW1wiZGVmYXVsdFwiXSB8fCBjb25maWc7IC8vVU1EIHBhY2thZ2luZyB3cmFwcyB0aGluZ3Mgb2RkbHksIHNvIGZvciBleGFtcGxlIE1vdGlvblBhdGhIZWxwZXIgYmVjb21lcyB7TW90aW9uUGF0aEhlbHBlcjpNb3Rpb25QYXRoSGVscGVyLCBkZWZhdWx0Ok1vdGlvblBhdGhIZWxwZXJ9LlxuXG4gIHZhciBuYW1lID0gY29uZmlnLm5hbWUsXG4gICAgICBpc0Z1bmMgPSBfaXNGdW5jdGlvbihjb25maWcpLFxuICAgICAgUGx1Z2luID0gbmFtZSAmJiAhaXNGdW5jICYmIGNvbmZpZy5pbml0ID8gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3Byb3BzID0gW107XG4gIH0gOiBjb25maWcsXG4gICAgICAvL2luIGNhc2Ugc29tZW9uZSBwYXNzZXMgaW4gYW4gb2JqZWN0IHRoYXQncyBub3QgYSBwbHVnaW4sIGxpa2UgQ3VzdG9tRWFzZVxuICBpbnN0YW5jZURlZmF1bHRzID0ge1xuICAgIGluaXQ6IF9lbXB0eUZ1bmMsXG4gICAgcmVuZGVyOiBfcmVuZGVyUHJvcFR3ZWVucyxcbiAgICBhZGQ6IF9hZGRQcm9wVHdlZW4sXG4gICAga2lsbDogX2tpbGxQcm9wVHdlZW5zT2YsXG4gICAgbW9kaWZpZXI6IF9hZGRQbHVnaW5Nb2RpZmllcixcbiAgICByYXdWYXJzOiAwXG4gIH0sXG4gICAgICBzdGF0aWNzID0ge1xuICAgIHRhcmdldFRlc3Q6IDAsXG4gICAgZ2V0OiAwLFxuICAgIGdldFNldHRlcjogX2dldFNldHRlcixcbiAgICBhbGlhc2VzOiB7fSxcbiAgICByZWdpc3RlcjogMFxuICB9O1xuXG4gIF93YWtlKCk7XG5cbiAgaWYgKGNvbmZpZyAhPT0gUGx1Z2luKSB7XG4gICAgaWYgKF9wbHVnaW5zW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgX3NldERlZmF1bHRzKFBsdWdpbiwgX3NldERlZmF1bHRzKF9jb3B5RXhjbHVkaW5nKGNvbmZpZywgaW5zdGFuY2VEZWZhdWx0cyksIHN0YXRpY3MpKTsgLy9zdGF0aWMgbWV0aG9kc1xuXG5cbiAgICBfbWVyZ2UoUGx1Z2luLnByb3RvdHlwZSwgX21lcmdlKGluc3RhbmNlRGVmYXVsdHMsIF9jb3B5RXhjbHVkaW5nKGNvbmZpZywgc3RhdGljcykpKTsgLy9pbnN0YW5jZSBtZXRob2RzXG5cblxuICAgIF9wbHVnaW5zW1BsdWdpbi5wcm9wID0gbmFtZV0gPSBQbHVnaW47XG5cbiAgICBpZiAoY29uZmlnLnRhcmdldFRlc3QpIHtcbiAgICAgIF9oYXJuZXNzUGx1Z2lucy5wdXNoKFBsdWdpbik7XG5cbiAgICAgIF9yZXNlcnZlZFByb3BzW25hbWVdID0gMTtcbiAgICB9XG5cbiAgICBuYW1lID0gKG5hbWUgPT09IFwiY3NzXCIgPyBcIkNTU1wiIDogbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyKDEpKSArIFwiUGx1Z2luXCI7IC8vZm9yIHRoZSBnbG9iYWwgbmFtZS4gXCJtb3Rpb25QYXRoXCIgc2hvdWxkIGJlY29tZSBNb3Rpb25QYXRoUGx1Z2luXG4gIH1cblxuICBfYWRkR2xvYmFsKG5hbWUsIFBsdWdpbik7XG5cbiAgY29uZmlnLnJlZ2lzdGVyICYmIGNvbmZpZy5yZWdpc3Rlcihnc2FwLCBQbHVnaW4sIFByb3BUd2Vlbik7XG59LFxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENPTE9SU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXzI1NSA9IDI1NSxcbiAgICBfY29sb3JMb29rdXAgPSB7XG4gIGFxdWE6IFswLCBfMjU1LCBfMjU1XSxcbiAgbGltZTogWzAsIF8yNTUsIDBdLFxuICBzaWx2ZXI6IFsxOTIsIDE5MiwgMTkyXSxcbiAgYmxhY2s6IFswLCAwLCAwXSxcbiAgbWFyb29uOiBbMTI4LCAwLCAwXSxcbiAgdGVhbDogWzAsIDEyOCwgMTI4XSxcbiAgYmx1ZTogWzAsIDAsIF8yNTVdLFxuICBuYXZ5OiBbMCwgMCwgMTI4XSxcbiAgd2hpdGU6IFtfMjU1LCBfMjU1LCBfMjU1XSxcbiAgb2xpdmU6IFsxMjgsIDEyOCwgMF0sXG4gIHllbGxvdzogW18yNTUsIF8yNTUsIDBdLFxuICBvcmFuZ2U6IFtfMjU1LCAxNjUsIDBdLFxuICBncmF5OiBbMTI4LCAxMjgsIDEyOF0sXG4gIHB1cnBsZTogWzEyOCwgMCwgMTI4XSxcbiAgZ3JlZW46IFswLCAxMjgsIDBdLFxuICByZWQ6IFtfMjU1LCAwLCAwXSxcbiAgcGluazogW18yNTUsIDE5MiwgMjAzXSxcbiAgY3lhbjogWzAsIF8yNTUsIF8yNTVdLFxuICB0cmFuc3BhcmVudDogW18yNTUsIF8yNTUsIF8yNTUsIDBdXG59LFxuICAgIF9odWUgPSBmdW5jdGlvbiBfaHVlKGgsIG0xLCBtMikge1xuICBoID0gaCA8IDAgPyBoICsgMSA6IGggPiAxID8gaCAtIDEgOiBoO1xuICByZXR1cm4gKGggKiA2IDwgMSA/IG0xICsgKG0yIC0gbTEpICogaCAqIDYgOiBoIDwgLjUgPyBtMiA6IGggKiAzIDwgMiA/IG0xICsgKG0yIC0gbTEpICogKDIgLyAzIC0gaCkgKiA2IDogbTEpICogXzI1NSArIC41IHwgMDtcbn0sXG4gICAgc3BsaXRDb2xvciA9IGZ1bmN0aW9uIHNwbGl0Q29sb3IodiwgdG9IU0wsIGZvcmNlQWxwaGEpIHtcbiAgdmFyIGEgPSAhdiA/IF9jb2xvckxvb2t1cC5ibGFjayA6IF9pc051bWJlcih2KSA/IFt2ID4+IDE2LCB2ID4+IDggJiBfMjU1LCB2ICYgXzI1NV0gOiAwLFxuICAgICAgcixcbiAgICAgIGcsXG4gICAgICBiLFxuICAgICAgaCxcbiAgICAgIHMsXG4gICAgICBsLFxuICAgICAgbWF4LFxuICAgICAgbWluLFxuICAgICAgZCxcbiAgICAgIHdhc0hTTDtcblxuICBpZiAoIWEpIHtcbiAgICBpZiAodi5zdWJzdHIoLTEpID09PSBcIixcIikge1xuICAgICAgLy9zb21ldGltZXMgYSB0cmFpbGluZyBjb21tYSBpcyBpbmNsdWRlZCBhbmQgd2Ugc2hvdWxkIGNob3AgaXQgb2ZmICh0eXBpY2FsbHkgZnJvbSBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHZhbHVlcyBsaWtlIGEgdGV4dFNoYWRvdzpcIjJweCAycHggMnB4IGJsdWUsIDVweCA1cHggNXB4IHJnYigyNTUsMCwwKVwiIC0gaW4gdGhpcyBleGFtcGxlIFwiYmx1ZSxcIiBoYXMgYSB0cmFpbGluZyBjb21tYS4gV2UgY291bGQgc3RyaXAgaXQgb3V0IGluc2lkZSBwYXJzZUNvbXBsZXgoKSBidXQgd2UnZCBuZWVkIHRvIGRvIGl0IHRvIHRoZSBiZWdpbm5pbmcgYW5kIGVuZGluZyB2YWx1ZXMgcGx1cyBpdCB3b3VsZG4ndCBwcm92aWRlIHByb3RlY3Rpb24gZnJvbSBvdGhlciBwb3RlbnRpYWwgc2NlbmFyaW9zIGxpa2UgaWYgdGhlIHVzZXIgcGFzc2VzIGluIGEgc2ltaWxhciB2YWx1ZS5cbiAgICAgIHYgPSB2LnN1YnN0cigwLCB2Lmxlbmd0aCAtIDEpO1xuICAgIH1cblxuICAgIGlmIChfY29sb3JMb29rdXBbdl0pIHtcbiAgICAgIGEgPSBfY29sb3JMb29rdXBbdl07XG4gICAgfSBlbHNlIGlmICh2LmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICAgIGlmICh2Lmxlbmd0aCA8IDYpIHtcbiAgICAgICAgLy9mb3Igc2hvcnRoYW5kIGxpa2UgIzlGMCBvciAjOUYwRiAoY291bGQgaGF2ZSBhbHBoYSlcbiAgICAgICAgciA9IHYuY2hhckF0KDEpO1xuICAgICAgICBnID0gdi5jaGFyQXQoMik7XG4gICAgICAgIGIgPSB2LmNoYXJBdCgzKTtcbiAgICAgICAgdiA9IFwiI1wiICsgciArIHIgKyBnICsgZyArIGIgKyBiICsgKHYubGVuZ3RoID09PSA1ID8gdi5jaGFyQXQoNCkgKyB2LmNoYXJBdCg0KSA6IFwiXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodi5sZW5ndGggPT09IDkpIHtcbiAgICAgICAgLy8gaGV4IHdpdGggYWxwaGEsIGxpa2UgI2ZkNWU1M2ZmXG4gICAgICAgIGEgPSBwYXJzZUludCh2LnN1YnN0cigxLCA2KSwgMTYpO1xuICAgICAgICByZXR1cm4gW2EgPj4gMTYsIGEgPj4gOCAmIF8yNTUsIGEgJiBfMjU1LCBwYXJzZUludCh2LnN1YnN0cig3KSwgMTYpIC8gMjU1XTtcbiAgICAgIH1cblxuICAgICAgdiA9IHBhcnNlSW50KHYuc3Vic3RyKDEpLCAxNik7XG4gICAgICBhID0gW3YgPj4gMTYsIHYgPj4gOCAmIF8yNTUsIHYgJiBfMjU1XTtcbiAgICB9IGVsc2UgaWYgKHYuc3Vic3RyKDAsIDMpID09PSBcImhzbFwiKSB7XG4gICAgICBhID0gd2FzSFNMID0gdi5tYXRjaChfc3RyaWN0TnVtRXhwKTtcblxuICAgICAgaWYgKCF0b0hTTCkge1xuICAgICAgICBoID0gK2FbMF0gJSAzNjAgLyAzNjA7XG4gICAgICAgIHMgPSArYVsxXSAvIDEwMDtcbiAgICAgICAgbCA9ICthWzJdIC8gMTAwO1xuICAgICAgICBnID0gbCA8PSAuNSA/IGwgKiAocyArIDEpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgciA9IGwgKiAyIC0gZztcbiAgICAgICAgYS5sZW5ndGggPiAzICYmIChhWzNdICo9IDEpOyAvL2Nhc3QgYXMgbnVtYmVyXG5cbiAgICAgICAgYVswXSA9IF9odWUoaCArIDEgLyAzLCByLCBnKTtcbiAgICAgICAgYVsxXSA9IF9odWUoaCwgciwgZyk7XG4gICAgICAgIGFbMl0gPSBfaHVlKGggLSAxIC8gMywgciwgZyk7XG4gICAgICB9IGVsc2UgaWYgKH52LmluZGV4T2YoXCI9XCIpKSB7XG4gICAgICAgIC8vaWYgcmVsYXRpdmUgdmFsdWVzIGFyZSBmb3VuZCwganVzdCByZXR1cm4gdGhlIHJhdyBzdHJpbmdzIHdpdGggdGhlIHJlbGF0aXZlIHByZWZpeGVzIGluIHBsYWNlLlxuICAgICAgICBhID0gdi5tYXRjaChfbnVtRXhwKTtcbiAgICAgICAgZm9yY2VBbHBoYSAmJiBhLmxlbmd0aCA8IDQgJiYgKGFbM10gPSAxKTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGEgPSB2Lm1hdGNoKF9zdHJpY3ROdW1FeHApIHx8IF9jb2xvckxvb2t1cC50cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBhID0gYS5tYXAoTnVtYmVyKTtcbiAgfVxuXG4gIGlmICh0b0hTTCAmJiAhd2FzSFNMKSB7XG4gICAgciA9IGFbMF0gLyBfMjU1O1xuICAgIGcgPSBhWzFdIC8gXzI1NTtcbiAgICBiID0gYVsyXSAvIF8yNTU7XG4gICAgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgbCA9IChtYXggKyBtaW4pIC8gMjtcblxuICAgIGlmIChtYXggPT09IG1pbikge1xuICAgICAgaCA9IHMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBkID0gbWF4IC0gbWluO1xuICAgICAgcyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pO1xuICAgICAgaCA9IG1heCA9PT0gciA/IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApIDogbWF4ID09PSBnID8gKGIgLSByKSAvIGQgKyAyIDogKHIgLSBnKSAvIGQgKyA0O1xuICAgICAgaCAqPSA2MDtcbiAgICB9XG5cbiAgICBhWzBdID0gfn4oaCArIC41KTtcbiAgICBhWzFdID0gfn4ocyAqIDEwMCArIC41KTtcbiAgICBhWzJdID0gfn4obCAqIDEwMCArIC41KTtcbiAgfVxuXG4gIGZvcmNlQWxwaGEgJiYgYS5sZW5ndGggPCA0ICYmIChhWzNdID0gMSk7XG4gIHJldHVybiBhO1xufSxcbiAgICBfY29sb3JPcmRlckRhdGEgPSBmdW5jdGlvbiBfY29sb3JPcmRlckRhdGEodikge1xuICAvLyBzdHJpcHMgb3V0IHRoZSBjb2xvcnMgZnJvbSB0aGUgc3RyaW5nLCBmaW5kcyBhbGwgdGhlIG51bWVyaWMgc2xvdHMgKHdpdGggdW5pdHMpIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIHRob3NlLiBUaGUgQXJyYXkgYWxzbyBoYXMgYSBcImNcIiBwcm9wZXJ0eSB3aGljaCBpcyBhbiBBcnJheSBvZiB0aGUgaW5kZXggdmFsdWVzIHdoZXJlIHRoZSBjb2xvcnMgYmVsb25nLiBUaGlzIGlzIHRvIGhlbHAgd29yayBhcm91bmQgaXNzdWVzIHdoZXJlIHRoZXJlJ3MgYSBtaXMtbWF0Y2hlZCBvcmRlciBvZiBjb2xvci9udW1lcmljIGRhdGEgbGlrZSBkcm9wLXNoYWRvdygjZjAwIDBweCAxcHggMnB4KSBhbmQgZHJvcC1zaGFkb3coMHggMXB4IDJweCAjZjAwKS4gVGhpcyBpcyBiYXNpY2FsbHkgYSBoZWxwZXIgZnVuY3Rpb24gdXNlZCBpbiBfZm9ybWF0Q29sb3JzKClcbiAgdmFyIHZhbHVlcyA9IFtdLFxuICAgICAgYyA9IFtdLFxuICAgICAgaSA9IC0xO1xuICB2LnNwbGl0KF9jb2xvckV4cCkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgIHZhciBhID0gdi5tYXRjaChfbnVtV2l0aFVuaXRFeHApIHx8IFtdO1xuICAgIHZhbHVlcy5wdXNoLmFwcGx5KHZhbHVlcywgYSk7XG4gICAgYy5wdXNoKGkgKz0gYS5sZW5ndGggKyAxKTtcbiAgfSk7XG4gIHZhbHVlcy5jID0gYztcbiAgcmV0dXJuIHZhbHVlcztcbn0sXG4gICAgX2Zvcm1hdENvbG9ycyA9IGZ1bmN0aW9uIF9mb3JtYXRDb2xvcnMocywgdG9IU0wsIG9yZGVyTWF0Y2hEYXRhKSB7XG4gIHZhciByZXN1bHQgPSBcIlwiLFxuICAgICAgY29sb3JzID0gKHMgKyByZXN1bHQpLm1hdGNoKF9jb2xvckV4cCksXG4gICAgICB0eXBlID0gdG9IU0wgPyBcImhzbGEoXCIgOiBcInJnYmEoXCIsXG4gICAgICBpID0gMCxcbiAgICAgIGMsXG4gICAgICBzaGVsbCxcbiAgICAgIGQsXG4gICAgICBsO1xuXG4gIGlmICghY29sb3JzKSB7XG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHJldHVybiAoY29sb3IgPSBzcGxpdENvbG9yKGNvbG9yLCB0b0hTTCwgMSkpICYmIHR5cGUgKyAodG9IU0wgPyBjb2xvclswXSArIFwiLFwiICsgY29sb3JbMV0gKyBcIiUsXCIgKyBjb2xvclsyXSArIFwiJSxcIiArIGNvbG9yWzNdIDogY29sb3Iuam9pbihcIixcIikpICsgXCIpXCI7XG4gIH0pO1xuXG4gIGlmIChvcmRlck1hdGNoRGF0YSkge1xuICAgIGQgPSBfY29sb3JPcmRlckRhdGEocyk7XG4gICAgYyA9IG9yZGVyTWF0Y2hEYXRhLmM7XG5cbiAgICBpZiAoYy5qb2luKHJlc3VsdCkgIT09IGQuYy5qb2luKHJlc3VsdCkpIHtcbiAgICAgIHNoZWxsID0gcy5yZXBsYWNlKF9jb2xvckV4cCwgXCIxXCIpLnNwbGl0KF9udW1XaXRoVW5pdEV4cCk7XG4gICAgICBsID0gc2hlbGwubGVuZ3RoIC0gMTtcblxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ICs9IHNoZWxsW2ldICsgKH5jLmluZGV4T2YoaSkgPyBjb2xvcnMuc2hpZnQoKSB8fCB0eXBlICsgXCIwLDAsMCwwKVwiIDogKGQubGVuZ3RoID8gZCA6IGNvbG9ycy5sZW5ndGggPyBjb2xvcnMgOiBvcmRlck1hdGNoRGF0YSkuc2hpZnQoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFzaGVsbCkge1xuICAgIHNoZWxsID0gcy5zcGxpdChfY29sb3JFeHApO1xuICAgIGwgPSBzaGVsbC5sZW5ndGggLSAxO1xuXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJlc3VsdCArPSBzaGVsbFtpXSArIGNvbG9yc1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0ICsgc2hlbGxbbF07XG59LFxuICAgIF9jb2xvckV4cCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHMgPSBcIig/OlxcXFxiKD86KD86cmdifHJnYmF8aHNsfGhzbGEpXFxcXCguKz9cXFxcKSl8XFxcXEIjKD86WzAtOWEtZl17Myw0fSl7MSwyfVxcXFxiXCIsXG4gICAgICAvL3dlJ2xsIGR5bmFtaWNhbGx5IGJ1aWxkIHRoaXMgUmVndWxhciBFeHByZXNzaW9uIHRvIGNvbnNlcnZlIGZpbGUgc2l6ZS4gQWZ0ZXIgYnVpbGRpbmcgaXQsIGl0IHdpbGwgYmUgYWJsZSB0byBmaW5kIHJnYigpLCByZ2JhKCksICMgKGhleGFkZWNpbWFsKSwgYW5kIG5hbWVkIGNvbG9yIHZhbHVlcyBsaWtlIHJlZCwgYmx1ZSwgcHVycGxlLCBldGMuLFxuICBwO1xuXG4gIGZvciAocCBpbiBfY29sb3JMb29rdXApIHtcbiAgICBzICs9IFwifFwiICsgcCArIFwiXFxcXGJcIjtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKHMgKyBcIilcIiwgXCJnaVwiKTtcbn0oKSxcbiAgICBfaHNsRXhwID0gL2hzbFthXT9cXCgvLFxuICAgIF9jb2xvclN0cmluZ0ZpbHRlciA9IGZ1bmN0aW9uIF9jb2xvclN0cmluZ0ZpbHRlcihhKSB7XG4gIHZhciBjb21iaW5lZCA9IGEuam9pbihcIiBcIiksXG4gICAgICB0b0hTTDtcbiAgX2NvbG9yRXhwLmxhc3RJbmRleCA9IDA7XG5cbiAgaWYgKF9jb2xvckV4cC50ZXN0KGNvbWJpbmVkKSkge1xuICAgIHRvSFNMID0gX2hzbEV4cC50ZXN0KGNvbWJpbmVkKTtcbiAgICBhWzFdID0gX2Zvcm1hdENvbG9ycyhhWzFdLCB0b0hTTCk7XG4gICAgYVswXSA9IF9mb3JtYXRDb2xvcnMoYVswXSwgdG9IU0wsIF9jb2xvck9yZGVyRGF0YShhWzFdKSk7IC8vIG1ha2Ugc3VyZSB0aGUgb3JkZXIgb2YgbnVtYmVycy9jb2xvcnMgbWF0Y2ggd2l0aCB0aGUgRU5EIHZhbHVlLlxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0sXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVElDS0VSXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5fdGlja2VyQWN0aXZlLFxuICAgIF90aWNrZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfZ2V0VGltZSA9IERhdGUubm93LFxuICAgICAgX2xhZ1RocmVzaG9sZCA9IDUwMCxcbiAgICAgIF9hZGp1c3RlZExhZyA9IDMzLFxuICAgICAgX3N0YXJ0VGltZSA9IF9nZXRUaW1lKCksXG4gICAgICBfbGFzdFVwZGF0ZSA9IF9zdGFydFRpbWUsXG4gICAgICBfZ2FwID0gMTAwMCAvIDI0MCxcbiAgICAgIF9uZXh0VGltZSA9IF9nYXAsXG4gICAgICBfbGlzdGVuZXJzID0gW10sXG4gICAgICBfaWQsXG4gICAgICBfcmVxLFxuICAgICAgX3JhZixcbiAgICAgIF9zZWxmLFxuICAgICAgX2RlbHRhLFxuICAgICAgX2ksXG4gICAgICBfdGljayA9IGZ1bmN0aW9uIF90aWNrKHYpIHtcbiAgICB2YXIgZWxhcHNlZCA9IF9nZXRUaW1lKCkgLSBfbGFzdFVwZGF0ZSxcbiAgICAgICAgbWFudWFsID0gdiA9PT0gdHJ1ZSxcbiAgICAgICAgb3ZlcmxhcCxcbiAgICAgICAgZGlzcGF0Y2gsXG4gICAgICAgIHRpbWUsXG4gICAgICAgIGZyYW1lO1xuXG4gICAgZWxhcHNlZCA+IF9sYWdUaHJlc2hvbGQgJiYgKF9zdGFydFRpbWUgKz0gZWxhcHNlZCAtIF9hZGp1c3RlZExhZyk7XG4gICAgX2xhc3RVcGRhdGUgKz0gZWxhcHNlZDtcbiAgICB0aW1lID0gX2xhc3RVcGRhdGUgLSBfc3RhcnRUaW1lO1xuICAgIG92ZXJsYXAgPSB0aW1lIC0gX25leHRUaW1lO1xuXG4gICAgaWYgKG92ZXJsYXAgPiAwIHx8IG1hbnVhbCkge1xuICAgICAgZnJhbWUgPSArK19zZWxmLmZyYW1lO1xuICAgICAgX2RlbHRhID0gdGltZSAtIF9zZWxmLnRpbWUgKiAxMDAwO1xuICAgICAgX3NlbGYudGltZSA9IHRpbWUgPSB0aW1lIC8gMTAwMDtcbiAgICAgIF9uZXh0VGltZSArPSBvdmVybGFwICsgKG92ZXJsYXAgPj0gX2dhcCA/IDQgOiBfZ2FwIC0gb3ZlcmxhcCk7XG4gICAgICBkaXNwYXRjaCA9IDE7XG4gICAgfVxuXG4gICAgbWFudWFsIHx8IChfaWQgPSBfcmVxKF90aWNrKSk7IC8vbWFrZSBzdXJlIHRoZSByZXF1ZXN0IGlzIG1hZGUgYmVmb3JlIHdlIGRpc3BhdGNoIHRoZSBcInRpY2tcIiBldmVudCBzbyB0aGF0IHRpbWluZyBpcyBtYWludGFpbmVkLiBPdGhlcndpc2UsIGlmIHByb2Nlc3NpbmcgdGhlIFwidGlja1wiIHJlcXVpcmVzIGEgYnVuY2ggb2YgdGltZSAobGlrZSAxNW1zKSBhbmQgd2UncmUgdXNpbmcgYSBzZXRUaW1lb3V0KCkgdGhhdCdzIGJhc2VkIG9uIDE2LjdtcywgaXQnZCB0ZWNobmljYWxseSB0YWtlIDMxLjdtcyBiZXR3ZWVuIGZyYW1lcyBvdGhlcndpc2UuXG5cbiAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgIGZvciAoX2kgPSAwOyBfaSA8IF9saXN0ZW5lcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIC8vIHVzZSBfaSBhbmQgY2hlY2sgX2xpc3RlbmVycy5sZW5ndGggaW5zdGVhZCBvZiBhIHZhcmlhYmxlIGJlY2F1c2UgYSBsaXN0ZW5lciBjb3VsZCBnZXQgcmVtb3ZlZCBkdXJpbmcgdGhlIGxvb3AsIGFuZCBpZiB0aGF0IGhhcHBlbnMgdG8gYW4gZWxlbWVudCBsZXNzIHRoYW4gdGhlIGN1cnJlbnQgaW5kZXgsIGl0J2QgdGhyb3cgdGhpbmdzIG9mZiBpbiB0aGUgbG9vcC5cbiAgICAgICAgX2xpc3RlbmVyc1tfaV0odGltZSwgX2RlbHRhLCBmcmFtZSwgdik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9zZWxmID0ge1xuICAgIHRpbWU6IDAsXG4gICAgZnJhbWU6IDAsXG4gICAgdGljazogZnVuY3Rpb24gdGljaygpIHtcbiAgICAgIF90aWNrKHRydWUpO1xuICAgIH0sXG4gICAgZGVsdGFSYXRpbzogZnVuY3Rpb24gZGVsdGFSYXRpbyhmcHMpIHtcbiAgICAgIHJldHVybiBfZGVsdGEgLyAoMTAwMCAvIChmcHMgfHwgNjApKTtcbiAgICB9LFxuICAgIHdha2U6IGZ1bmN0aW9uIHdha2UoKSB7XG4gICAgICBpZiAoX2NvcmVSZWFkeSkge1xuICAgICAgICBpZiAoIV9jb3JlSW5pdHRlZCAmJiBfd2luZG93RXhpc3RzKCkpIHtcbiAgICAgICAgICBfd2luID0gX2NvcmVJbml0dGVkID0gd2luZG93O1xuICAgICAgICAgIF9kb2MgPSBfd2luLmRvY3VtZW50IHx8IHt9O1xuICAgICAgICAgIF9nbG9iYWxzLmdzYXAgPSBnc2FwO1xuICAgICAgICAgIChfd2luLmdzYXBWZXJzaW9ucyB8fCAoX3dpbi5nc2FwVmVyc2lvbnMgPSBbXSkpLnB1c2goZ3NhcC52ZXJzaW9uKTtcblxuICAgICAgICAgIF9pbnN0YWxsKF9pbnN0YWxsU2NvcGUgfHwgX3dpbi5HcmVlblNvY2tHbG9iYWxzIHx8ICFfd2luLmdzYXAgJiYgX3dpbiB8fCB7fSk7XG5cbiAgICAgICAgICBfcmFmID0gX3dpbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgICAgIH1cblxuICAgICAgICBfaWQgJiYgX3NlbGYuc2xlZXAoKTtcblxuICAgICAgICBfcmVxID0gX3JhZiB8fCBmdW5jdGlvbiAoZikge1xuICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGYsIF9uZXh0VGltZSAtIF9zZWxmLnRpbWUgKiAxMDAwICsgMSB8IDApO1xuICAgICAgICB9O1xuXG4gICAgICAgIF90aWNrZXJBY3RpdmUgPSAxO1xuXG4gICAgICAgIF90aWNrKDIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2xlZXA6IGZ1bmN0aW9uIHNsZWVwKCkge1xuICAgICAgKF9yYWYgPyBfd2luLmNhbmNlbEFuaW1hdGlvbkZyYW1lIDogY2xlYXJUaW1lb3V0KShfaWQpO1xuICAgICAgX3RpY2tlckFjdGl2ZSA9IDA7XG4gICAgICBfcmVxID0gX2VtcHR5RnVuYztcbiAgICB9LFxuICAgIGxhZ1Ntb290aGluZzogZnVuY3Rpb24gbGFnU21vb3RoaW5nKHRocmVzaG9sZCwgYWRqdXN0ZWRMYWcpIHtcbiAgICAgIF9sYWdUaHJlc2hvbGQgPSB0aHJlc2hvbGQgfHwgMSAvIF90aW55TnVtOyAvL3plcm8gc2hvdWxkIGJlIGludGVycHJldGVkIGFzIGJhc2ljYWxseSB1bmxpbWl0ZWRcblxuICAgICAgX2FkanVzdGVkTGFnID0gTWF0aC5taW4oYWRqdXN0ZWRMYWcsIF9sYWdUaHJlc2hvbGQsIDApO1xuICAgIH0sXG4gICAgZnBzOiBmdW5jdGlvbiBmcHMoX2Zwcykge1xuICAgICAgX2dhcCA9IDEwMDAgLyAoX2ZwcyB8fCAyNDApO1xuICAgICAgX25leHRUaW1lID0gX3NlbGYudGltZSAqIDEwMDAgKyBfZ2FwO1xuICAgIH0sXG4gICAgYWRkOiBmdW5jdGlvbiBhZGQoY2FsbGJhY2spIHtcbiAgICAgIF9saXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjaykgPCAwICYmIF9saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG5cbiAgICAgIF93YWtlKCk7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShjYWxsYmFjaykge1xuICAgICAgdmFyIGk7XG4gICAgICB+KGkgPSBfbGlzdGVuZXJzLmluZGV4T2YoY2FsbGJhY2spKSAmJiBfbGlzdGVuZXJzLnNwbGljZShpLCAxKSAmJiBfaSA+PSBpICYmIF9pLS07XG4gICAgfSxcbiAgICBfbGlzdGVuZXJzOiBfbGlzdGVuZXJzXG4gIH07XG4gIHJldHVybiBfc2VsZjtcbn0oKSxcbiAgICBfd2FrZSA9IGZ1bmN0aW9uIF93YWtlKCkge1xuICByZXR1cm4gIV90aWNrZXJBY3RpdmUgJiYgX3RpY2tlci53YWtlKCk7XG59LFxuICAgIC8vYWxzbyBlbnN1cmVzIHRoZSBjb3JlIGNsYXNzZXMgYXJlIGluaXRpYWxpemVkLlxuXG4vKlxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qIEVBU0lOR1xuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuX2Vhc2VNYXAgPSB7fSxcbiAgICBfY3VzdG9tRWFzZUV4cCA9IC9eW1xcZC5cXC1NXVtcXGQuXFwtLFxcc10vLFxuICAgIF9xdW90ZXNFeHAgPSAvW1wiJ10vZyxcbiAgICBfcGFyc2VPYmplY3RJblN0cmluZyA9IGZ1bmN0aW9uIF9wYXJzZU9iamVjdEluU3RyaW5nKHZhbHVlKSB7XG4gIC8vdGFrZXMgYSBzdHJpbmcgbGlrZSBcInt3aWdnbGVzOjEwLCB0eXBlOmFudGljaXBhdGV9KVwiIGFuZCB0dXJucyBpdCBpbnRvIGEgcmVhbCBvYmplY3QuIE5vdGljZSBpdCBlbmRzIGluIFwiKVwiIGFuZCBpbmNsdWRlcyB0aGUge30gd3JhcHBlcnMuIFRoaXMgaXMgYmVjYXVzZSB3ZSBvbmx5IHVzZSB0aGlzIGZ1bmN0aW9uIGZvciBwYXJzaW5nIGVhc2UgY29uZmlncyBhbmQgcHJpb3JpdGl6ZWQgb3B0aW1pemF0aW9uIHJhdGhlciB0aGFuIHJldXNhYmlsaXR5LlxuICB2YXIgb2JqID0ge30sXG4gICAgICBzcGxpdCA9IHZhbHVlLnN1YnN0cigxLCB2YWx1ZS5sZW5ndGggLSAzKS5zcGxpdChcIjpcIiksXG4gICAgICBrZXkgPSBzcGxpdFswXSxcbiAgICAgIGkgPSAxLFxuICAgICAgbCA9IHNwbGl0Lmxlbmd0aCxcbiAgICAgIGluZGV4LFxuICAgICAgdmFsLFxuICAgICAgcGFyc2VkVmFsO1xuXG4gIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFsID0gc3BsaXRbaV07XG4gICAgaW5kZXggPSBpICE9PSBsIC0gMSA/IHZhbC5sYXN0SW5kZXhPZihcIixcIikgOiB2YWwubGVuZ3RoO1xuICAgIHBhcnNlZFZhbCA9IHZhbC5zdWJzdHIoMCwgaW5kZXgpO1xuICAgIG9ialtrZXldID0gaXNOYU4ocGFyc2VkVmFsKSA/IHBhcnNlZFZhbC5yZXBsYWNlKF9xdW90ZXNFeHAsIFwiXCIpLnRyaW0oKSA6ICtwYXJzZWRWYWw7XG4gICAga2V5ID0gdmFsLnN1YnN0cihpbmRleCArIDEpLnRyaW0oKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59LFxuICAgIF92YWx1ZUluUGFyZW50aGVzZXMgPSBmdW5jdGlvbiBfdmFsdWVJblBhcmVudGhlc2VzKHZhbHVlKSB7XG4gIHZhciBvcGVuID0gdmFsdWUuaW5kZXhPZihcIihcIikgKyAxLFxuICAgICAgY2xvc2UgPSB2YWx1ZS5pbmRleE9mKFwiKVwiKSxcbiAgICAgIG5lc3RlZCA9IHZhbHVlLmluZGV4T2YoXCIoXCIsIG9wZW4pO1xuICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKG9wZW4sIH5uZXN0ZWQgJiYgbmVzdGVkIDwgY2xvc2UgPyB2YWx1ZS5pbmRleE9mKFwiKVwiLCBjbG9zZSArIDEpIDogY2xvc2UpO1xufSxcbiAgICBfY29uZmlnRWFzZUZyb21TdHJpbmcgPSBmdW5jdGlvbiBfY29uZmlnRWFzZUZyb21TdHJpbmcobmFtZSkge1xuICAvL25hbWUgY2FuIGJlIGEgc3RyaW5nIGxpa2UgXCJlbGFzdGljLm91dCgxLDAuNSlcIiwgYW5kIHBhc3MgaW4gX2Vhc2VNYXAgYXMgb2JqIGFuZCBpdCdsbCBwYXJzZSBpdCBvdXQgYW5kIGNhbGwgdGhlIGFjdHVhbCBmdW5jdGlvbiBsaWtlIF9lYXNlTWFwLkVsYXN0aWMuZWFzZU91dC5jb25maWcoMSwwLjUpLiBJdCB3aWxsIGFsc28gcGFyc2UgY3VzdG9tIGVhc2Ugc3RyaW5ncyBhcyBsb25nIGFzIEN1c3RvbUVhc2UgaXMgbG9hZGVkIGFuZCByZWdpc3RlcmVkIChpbnRlcm5hbGx5IGFzIF9lYXNlTWFwLl9DRSkuXG4gIHZhciBzcGxpdCA9IChuYW1lICsgXCJcIikuc3BsaXQoXCIoXCIpLFxuICAgICAgZWFzZSA9IF9lYXNlTWFwW3NwbGl0WzBdXTtcbiAgcmV0dXJuIGVhc2UgJiYgc3BsaXQubGVuZ3RoID4gMSAmJiBlYXNlLmNvbmZpZyA/IGVhc2UuY29uZmlnLmFwcGx5KG51bGwsIH5uYW1lLmluZGV4T2YoXCJ7XCIpID8gW19wYXJzZU9iamVjdEluU3RyaW5nKHNwbGl0WzFdKV0gOiBfdmFsdWVJblBhcmVudGhlc2VzKG5hbWUpLnNwbGl0KFwiLFwiKS5tYXAoX251bWVyaWNJZlBvc3NpYmxlKSkgOiBfZWFzZU1hcC5fQ0UgJiYgX2N1c3RvbUVhc2VFeHAudGVzdChuYW1lKSA/IF9lYXNlTWFwLl9DRShcIlwiLCBuYW1lKSA6IGVhc2U7XG59LFxuICAgIF9pbnZlcnRFYXNlID0gZnVuY3Rpb24gX2ludmVydEVhc2UoZWFzZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2UoMSAtIHApO1xuICB9O1xufSxcbiAgICAvLyBhbGxvdyB5b3lvRWFzZSB0byBiZSBzZXQgaW4gY2hpbGRyZW4gYW5kIGhhdmUgdGhvc2UgYWZmZWN0ZWQgd2hlbiB0aGUgcGFyZW50L2FuY2VzdG9yIHRpbWVsaW5lIHlveW9zLlxuX3Byb3BhZ2F0ZVlveW9FYXNlID0gZnVuY3Rpb24gX3Byb3BhZ2F0ZVlveW9FYXNlKHRpbWVsaW5lLCBpc1lveW8pIHtcbiAgdmFyIGNoaWxkID0gdGltZWxpbmUuX2ZpcnN0LFxuICAgICAgZWFzZTtcblxuICB3aGlsZSAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUaW1lbGluZSkge1xuICAgICAgX3Byb3BhZ2F0ZVlveW9FYXNlKGNoaWxkLCBpc1lveW8pO1xuICAgIH0gZWxzZSBpZiAoY2hpbGQudmFycy55b3lvRWFzZSAmJiAoIWNoaWxkLl95b3lvIHx8ICFjaGlsZC5fcmVwZWF0KSAmJiBjaGlsZC5feW95byAhPT0gaXNZb3lvKSB7XG4gICAgICBpZiAoY2hpbGQudGltZWxpbmUpIHtcbiAgICAgICAgX3Byb3BhZ2F0ZVlveW9FYXNlKGNoaWxkLnRpbWVsaW5lLCBpc1lveW8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWFzZSA9IGNoaWxkLl9lYXNlO1xuICAgICAgICBjaGlsZC5fZWFzZSA9IGNoaWxkLl95RWFzZTtcbiAgICAgICAgY2hpbGQuX3lFYXNlID0gZWFzZTtcbiAgICAgICAgY2hpbGQuX3lveW8gPSBpc1lveW87XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgfVxufSxcbiAgICBfcGFyc2VFYXNlID0gZnVuY3Rpb24gX3BhcnNlRWFzZShlYXNlLCBkZWZhdWx0RWFzZSkge1xuICByZXR1cm4gIWVhc2UgPyBkZWZhdWx0RWFzZSA6IChfaXNGdW5jdGlvbihlYXNlKSA/IGVhc2UgOiBfZWFzZU1hcFtlYXNlXSB8fCBfY29uZmlnRWFzZUZyb21TdHJpbmcoZWFzZSkpIHx8IGRlZmF1bHRFYXNlO1xufSxcbiAgICBfaW5zZXJ0RWFzZSA9IGZ1bmN0aW9uIF9pbnNlcnRFYXNlKG5hbWVzLCBlYXNlSW4sIGVhc2VPdXQsIGVhc2VJbk91dCkge1xuICBpZiAoZWFzZU91dCA9PT0gdm9pZCAwKSB7XG4gICAgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgICAgcmV0dXJuIDEgLSBlYXNlSW4oMSAtIHApO1xuICAgIH07XG4gIH1cblxuICBpZiAoZWFzZUluT3V0ID09PSB2b2lkIDApIHtcbiAgICBlYXNlSW5PdXQgPSBmdW5jdGlvbiBlYXNlSW5PdXQocCkge1xuICAgICAgcmV0dXJuIHAgPCAuNSA/IGVhc2VJbihwICogMikgLyAyIDogMSAtIGVhc2VJbigoMSAtIHApICogMikgLyAyO1xuICAgIH07XG4gIH1cblxuICB2YXIgZWFzZSA9IHtcbiAgICBlYXNlSW46IGVhc2VJbixcbiAgICBlYXNlT3V0OiBlYXNlT3V0LFxuICAgIGVhc2VJbk91dDogZWFzZUluT3V0XG4gIH0sXG4gICAgICBsb3dlcmNhc2VOYW1lO1xuXG4gIF9mb3JFYWNoTmFtZShuYW1lcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBfZWFzZU1hcFtuYW1lXSA9IF9nbG9iYWxzW25hbWVdID0gZWFzZTtcbiAgICBfZWFzZU1hcFtsb3dlcmNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpXSA9IGVhc2VPdXQ7XG5cbiAgICBmb3IgKHZhciBwIGluIGVhc2UpIHtcbiAgICAgIF9lYXNlTWFwW2xvd2VyY2FzZU5hbWUgKyAocCA9PT0gXCJlYXNlSW5cIiA/IFwiLmluXCIgOiBwID09PSBcImVhc2VPdXRcIiA/IFwiLm91dFwiIDogXCIuaW5PdXRcIildID0gX2Vhc2VNYXBbbmFtZSArIFwiLlwiICsgcF0gPSBlYXNlW3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVhc2U7XG59LFxuICAgIF9lYXNlSW5PdXRGcm9tT3V0ID0gZnVuY3Rpb24gX2Vhc2VJbk91dEZyb21PdXQoZWFzZU91dCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8IC41ID8gKDEgLSBlYXNlT3V0KDEgLSBwICogMikpIC8gMiA6IC41ICsgZWFzZU91dCgocCAtIC41KSAqIDIpIC8gMjtcbiAgfTtcbn0sXG4gICAgX2NvbmZpZ0VsYXN0aWMgPSBmdW5jdGlvbiBfY29uZmlnRWxhc3RpYyh0eXBlLCBhbXBsaXR1ZGUsIHBlcmlvZCkge1xuICB2YXIgcDEgPSBhbXBsaXR1ZGUgPj0gMSA/IGFtcGxpdHVkZSA6IDEsXG4gICAgICAvL25vdGU6IGlmIGFtcGxpdHVkZSBpcyA8IDEsIHdlIHNpbXBseSBhZGp1c3QgdGhlIHBlcmlvZCBmb3IgYSBtb3JlIG5hdHVyYWwgZmVlbC4gT3RoZXJ3aXNlIHRoZSBtYXRoIGRvZXNuJ3Qgd29yayByaWdodCBhbmQgdGhlIGN1cnZlIHN0YXJ0cyBhdCAxLlxuICBwMiA9IChwZXJpb2QgfHwgKHR5cGUgPyAuMyA6IC40NSkpIC8gKGFtcGxpdHVkZSA8IDEgPyBhbXBsaXR1ZGUgOiAxKSxcbiAgICAgIHAzID0gcDIgLyBfMlBJICogKE1hdGguYXNpbigxIC8gcDEpIHx8IDApLFxuICAgICAgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgIHJldHVybiBwID09PSAxID8gMSA6IHAxICogTWF0aC5wb3coMiwgLTEwICogcCkgKiBfc2luKChwIC0gcDMpICogcDIpICsgMTtcbiAgfSxcbiAgICAgIGVhc2UgPSB0eXBlID09PSBcIm91dFwiID8gZWFzZU91dCA6IHR5cGUgPT09IFwiaW5cIiA/IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNlT3V0KDEgLSBwKTtcbiAgfSA6IF9lYXNlSW5PdXRGcm9tT3V0KGVhc2VPdXQpO1xuXG4gIHAyID0gXzJQSSAvIHAyOyAvL3ByZWNhbGN1bGF0ZSB0byBvcHRpbWl6ZVxuXG4gIGVhc2UuY29uZmlnID0gZnVuY3Rpb24gKGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gICAgcmV0dXJuIF9jb25maWdFbGFzdGljKHR5cGUsIGFtcGxpdHVkZSwgcGVyaW9kKTtcbiAgfTtcblxuICByZXR1cm4gZWFzZTtcbn0sXG4gICAgX2NvbmZpZ0JhY2sgPSBmdW5jdGlvbiBfY29uZmlnQmFjayh0eXBlLCBvdmVyc2hvb3QpIHtcbiAgaWYgKG92ZXJzaG9vdCA9PT0gdm9pZCAwKSB7XG4gICAgb3ZlcnNob290ID0gMS43MDE1ODtcbiAgfVxuXG4gIHZhciBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgcmV0dXJuIHAgPyAtLXAgKiBwICogKChvdmVyc2hvb3QgKyAxKSAqIHAgKyBvdmVyc2hvb3QpICsgMSA6IDA7XG4gIH0sXG4gICAgICBlYXNlID0gdHlwZSA9PT0gXCJvdXRcIiA/IGVhc2VPdXQgOiB0eXBlID09PSBcImluXCIgPyBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzZU91dCgxIC0gcCk7XG4gIH0gOiBfZWFzZUluT3V0RnJvbU91dChlYXNlT3V0KTtcblxuICBlYXNlLmNvbmZpZyA9IGZ1bmN0aW9uIChvdmVyc2hvb3QpIHtcbiAgICByZXR1cm4gX2NvbmZpZ0JhY2sodHlwZSwgb3ZlcnNob290KTtcbiAgfTtcblxuICByZXR1cm4gZWFzZTtcbn07IC8vIGEgY2hlYXBlciAoa2IgYW5kIGNwdSkgYnV0IG1vcmUgbWlsZCB3YXkgdG8gZ2V0IGEgcGFyYW1ldGVyaXplZCB3ZWlnaHRlZCBlYXNlIGJ5IGZlZWRpbmcgaW4gYSB2YWx1ZSBiZXR3ZWVuIC0xIChlYXNlSW4pIGFuZCAxIChlYXNlT3V0KSB3aGVyZSAwIGlzIGxpbmVhci5cbi8vIF93ZWlnaHRlZEVhc2UgPSByYXRpbyA9PiB7XG4vLyBcdGxldCB5ID0gMC41ICsgcmF0aW8gLyAyO1xuLy8gXHRyZXR1cm4gcCA9PiAoMiAqICgxIC0gcCkgKiBwICogeSArIHAgKiBwKTtcbi8vIH0sXG4vLyBhIHN0cm9uZ2VyIChidXQgbW9yZSBleHBlbnNpdmUga2IvY3B1KSBwYXJhbWV0ZXJpemVkIHdlaWdodGVkIGVhc2UgdGhhdCBsZXRzIHlvdSBmZWVkIGluIGEgdmFsdWUgYmV0d2VlbiAtMSAoZWFzZUluKSBhbmQgMSAoZWFzZU91dCkgd2hlcmUgMCBpcyBsaW5lYXIuXG4vLyBfd2VpZ2h0ZWRFYXNlU3Ryb25nID0gcmF0aW8gPT4ge1xuLy8gXHRyYXRpbyA9IC41ICsgcmF0aW8gLyAyO1xuLy8gXHRsZXQgbyA9IDEgLyAzICogKHJhdGlvIDwgLjUgPyByYXRpbyA6IDEgLSByYXRpbyksXG4vLyBcdFx0YiA9IHJhdGlvIC0gbyxcbi8vIFx0XHRjID0gcmF0aW8gKyBvO1xuLy8gXHRyZXR1cm4gcCA9PiBwID09PSAxID8gcCA6IDMgKiBiICogKDEgLSBwKSAqICgxIC0gcCkgKiBwICsgMyAqIGMgKiAoMSAtIHApICogcCAqIHAgKyBwICogcCAqIHA7XG4vLyB9O1xuXG5cbl9mb3JFYWNoTmFtZShcIkxpbmVhcixRdWFkLEN1YmljLFF1YXJ0LFF1aW50LFN0cm9uZ1wiLCBmdW5jdGlvbiAobmFtZSwgaSkge1xuICB2YXIgcG93ZXIgPSBpIDwgNSA/IGkgKyAxIDogaTtcblxuICBfaW5zZXJ0RWFzZShuYW1lICsgXCIsUG93ZXJcIiArIChwb3dlciAtIDEpLCBpID8gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gTWF0aC5wb3cocCwgcG93ZXIpO1xuICB9IDogZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcDtcbiAgfSwgZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIE1hdGgucG93KDEgLSBwLCBwb3dlcik7XG4gIH0sIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPCAuNSA/IE1hdGgucG93KHAgKiAyLCBwb3dlcikgLyAyIDogMSAtIE1hdGgucG93KCgxIC0gcCkgKiAyLCBwb3dlcikgLyAyO1xuICB9KTtcbn0pO1xuXG5fZWFzZU1hcC5MaW5lYXIuZWFzZU5vbmUgPSBfZWFzZU1hcC5ub25lID0gX2Vhc2VNYXAuTGluZWFyLmVhc2VJbjtcblxuX2luc2VydEVhc2UoXCJFbGFzdGljXCIsIF9jb25maWdFbGFzdGljKFwiaW5cIiksIF9jb25maWdFbGFzdGljKFwib3V0XCIpLCBfY29uZmlnRWxhc3RpYygpKTtcblxuKGZ1bmN0aW9uIChuLCBjKSB7XG4gIHZhciBuMSA9IDEgLyBjLFxuICAgICAgbjIgPSAyICogbjEsXG4gICAgICBuMyA9IDIuNSAqIG4xLFxuICAgICAgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgIHJldHVybiBwIDwgbjEgPyBuICogcCAqIHAgOiBwIDwgbjIgPyBuICogTWF0aC5wb3cocCAtIDEuNSAvIGMsIDIpICsgLjc1IDogcCA8IG4zID8gbiAqIChwIC09IDIuMjUgLyBjKSAqIHAgKyAuOTM3NSA6IG4gKiBNYXRoLnBvdyhwIC0gMi42MjUgLyBjLCAyKSArIC45ODQzNzU7XG4gIH07XG5cbiAgX2luc2VydEVhc2UoXCJCb3VuY2VcIiwgZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2VPdXQoMSAtIHApO1xuICB9LCBlYXNlT3V0KTtcbn0pKDcuNTYyNSwgMi43NSk7XG5cbl9pbnNlcnRFYXNlKFwiRXhwb1wiLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcCA/IE1hdGgucG93KDIsIDEwICogKHAgLSAxKSkgOiAwO1xufSk7XG5cbl9pbnNlcnRFYXNlKFwiQ2lyY1wiLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gLShfc3FydCgxIC0gcCAqIHApIC0gMSk7XG59KTtcblxuX2luc2VydEVhc2UoXCJTaW5lXCIsIGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwID09PSAxID8gMSA6IC1fY29zKHAgKiBfSEFMRl9QSSkgKyAxO1xufSk7XG5cbl9pbnNlcnRFYXNlKFwiQmFja1wiLCBfY29uZmlnQmFjayhcImluXCIpLCBfY29uZmlnQmFjayhcIm91dFwiKSwgX2NvbmZpZ0JhY2soKSk7XG5cbl9lYXNlTWFwLlN0ZXBwZWRFYXNlID0gX2Vhc2VNYXAuc3RlcHMgPSBfZ2xvYmFscy5TdGVwcGVkRWFzZSA9IHtcbiAgY29uZmlnOiBmdW5jdGlvbiBjb25maWcoc3RlcHMsIGltbWVkaWF0ZVN0YXJ0KSB7XG4gICAgaWYgKHN0ZXBzID09PSB2b2lkIDApIHtcbiAgICAgIHN0ZXBzID0gMTtcbiAgICB9XG5cbiAgICB2YXIgcDEgPSAxIC8gc3RlcHMsXG4gICAgICAgIHAyID0gc3RlcHMgKyAoaW1tZWRpYXRlU3RhcnQgPyAwIDogMSksXG4gICAgICAgIHAzID0gaW1tZWRpYXRlU3RhcnQgPyAxIDogMCxcbiAgICAgICAgbWF4ID0gMSAtIF90aW55TnVtO1xuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuICgocDIgKiBfY2xhbXAoMCwgbWF4LCBwKSB8IDApICsgcDMpICogcDE7XG4gICAgfTtcbiAgfVxufTtcbl9kZWZhdWx0cy5lYXNlID0gX2Vhc2VNYXBbXCJxdWFkLm91dFwiXTtcblxuX2ZvckVhY2hOYW1lKFwib25Db21wbGV0ZSxvblVwZGF0ZSxvblN0YXJ0LG9uUmVwZWF0LG9uUmV2ZXJzZUNvbXBsZXRlLG9uSW50ZXJydXB0XCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBfY2FsbGJhY2tOYW1lcyArPSBuYW1lICsgXCIsXCIgKyBuYW1lICsgXCJQYXJhbXMsXCI7XG59KTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ0FDSEVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG5leHBvcnQgdmFyIEdTQ2FjaGUgPSBmdW5jdGlvbiBHU0NhY2hlKHRhcmdldCwgaGFybmVzcykge1xuICB0aGlzLmlkID0gX2dzSUQrKztcbiAgdGFyZ2V0Ll9nc2FwID0gdGhpcztcbiAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gIHRoaXMuaGFybmVzcyA9IGhhcm5lc3M7XG4gIHRoaXMuZ2V0ID0gaGFybmVzcyA/IGhhcm5lc3MuZ2V0IDogX2dldFByb3BlcnR5O1xuICB0aGlzLnNldCA9IGhhcm5lc3MgPyBoYXJuZXNzLmdldFNldHRlciA6IF9nZXRTZXR0ZXI7XG59O1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBTklNQVRJT05cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZXhwb3J0IHZhciBBbmltYXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBbmltYXRpb24odmFycykge1xuICAgIHRoaXMudmFycyA9IHZhcnM7XG4gICAgdGhpcy5fZGVsYXkgPSArdmFycy5kZWxheSB8fCAwO1xuXG4gICAgaWYgKHRoaXMuX3JlcGVhdCA9IHZhcnMucmVwZWF0ID09PSBJbmZpbml0eSA/IC0yIDogdmFycy5yZXBlYXQgfHwgMCkge1xuICAgICAgLy8gVE9ETzogcmVwZWF0OiBJbmZpbml0eSBvbiBhIHRpbWVsaW5lJ3MgY2hpbGRyZW4gbXVzdCBmbGFnIHRoYXQgdGltZWxpbmUgaW50ZXJuYWxseSBhbmQgYWZmZWN0IGl0cyB0b3RhbER1cmF0aW9uLCBvdGhlcndpc2UgaXQnbGwgc3RvcCBpbiB0aGUgbmVnYXRpdmUgZGlyZWN0aW9uIHdoZW4gcmVhY2hpbmcgdGhlIHN0YXJ0LlxuICAgICAgdGhpcy5fckRlbGF5ID0gdmFycy5yZXBlYXREZWxheSB8fCAwO1xuICAgICAgdGhpcy5feW95byA9ICEhdmFycy55b3lvIHx8ICEhdmFycy55b3lvRWFzZTtcbiAgICB9XG5cbiAgICB0aGlzLl90cyA9IDE7XG5cbiAgICBfc2V0RHVyYXRpb24odGhpcywgK3ZhcnMuZHVyYXRpb24sIDEsIDEpO1xuXG4gICAgdGhpcy5kYXRhID0gdmFycy5kYXRhO1xuICAgIF90aWNrZXJBY3RpdmUgfHwgX3RpY2tlci53YWtlKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQW5pbWF0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZGVsYXkgPSBmdW5jdGlvbiBkZWxheSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCkge1xuICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgJiYgdGhpcy5zdGFydFRpbWUodGhpcy5fc3RhcnQgKyB2YWx1ZSAtIHRoaXMuX2RlbGF5KTtcbiAgICAgIHRoaXMuX2RlbGF5ID0gdmFsdWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZGVsYXk7XG4gIH07XG5cbiAgX3Byb3RvLmR1cmF0aW9uID0gZnVuY3Rpb24gZHVyYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxEdXJhdGlvbih0aGlzLl9yZXBlYXQgPiAwID8gdmFsdWUgKyAodmFsdWUgKyB0aGlzLl9yRGVsYXkpICogdGhpcy5fcmVwZWF0IDogdmFsdWUpIDogdGhpcy50b3RhbER1cmF0aW9uKCkgJiYgdGhpcy5fZHVyO1xuICB9O1xuXG4gIF9wcm90by50b3RhbER1cmF0aW9uID0gZnVuY3Rpb24gdG90YWxEdXJhdGlvbih2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3REdXI7XG4gICAgfVxuXG4gICAgdGhpcy5fZGlydHkgPSAwO1xuICAgIHJldHVybiBfc2V0RHVyYXRpb24odGhpcywgdGhpcy5fcmVwZWF0IDwgMCA/IHZhbHVlIDogKHZhbHVlIC0gdGhpcy5fcmVwZWF0ICogdGhpcy5fckRlbGF5KSAvICh0aGlzLl9yZXBlYXQgKyAxKSk7XG4gIH07XG5cbiAgX3Byb3RvLnRvdGFsVGltZSA9IGZ1bmN0aW9uIHRvdGFsVGltZShfdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIF93YWtlKCk7XG5cbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90VGltZTtcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5fZHA7XG5cbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyAmJiB0aGlzLl90cykge1xuICAgICAgX2FsaWduUGxheWhlYWQodGhpcywgX3RvdGFsVGltZSk7XG5cbiAgICAgICFwYXJlbnQuX2RwIHx8IHBhcmVudC5wYXJlbnQgfHwgX3Bvc3RBZGRDaGVja3MocGFyZW50LCB0aGlzKTsgLy8gZWRnZSBjYXNlOiBpZiB0aGlzIGlzIGEgY2hpbGQgb2YgYSB0aW1lbGluZSB0aGF0IGFscmVhZHkgY29tcGxldGVkLCBmb3IgZXhhbXBsZSwgd2UgbXVzdCByZS1hY3RpdmF0ZSB0aGUgcGFyZW50LlxuICAgICAgLy9pbiBjYXNlIGFueSBvZiB0aGUgYW5jZXN0b3IgdGltZWxpbmVzIGhhZCBjb21wbGV0ZWQgYnV0IHNob3VsZCBub3cgYmUgZW5hYmxlZCwgd2Ugc2hvdWxkIHJlc2V0IHRoZWlyIHRvdGFsVGltZSgpIHdoaWNoIHdpbGwgYWxzbyBlbnN1cmUgdGhhdCB0aGV5J3JlIGxpbmVkIHVwIHByb3Blcmx5IGFuZCBlbmFibGVkLiBTa2lwIGZvciBhbmltYXRpb25zIHRoYXQgYXJlIG9uIHRoZSByb290ICh3YXN0ZWZ1bCkuIEV4YW1wbGU6IGEgVGltZWxpbmVMaXRlLmV4cG9ydFJvb3QoKSBpcyBwZXJmb3JtZWQgd2hlbiB0aGVyZSdzIGEgcGF1c2VkIHR3ZWVuIG9uIHRoZSByb290LCB0aGUgZXhwb3J0IHdpbGwgbm90IGNvbXBsZXRlIHVudGlsIHRoYXQgdHdlZW4gaXMgdW5wYXVzZWQsIGJ1dCBpbWFnaW5lIGEgY2hpbGQgZ2V0cyByZXN0YXJ0ZWQgbGF0ZXIsIGFmdGVyIGFsbCBbdW5wYXVzZWRdIHR3ZWVucyBoYXZlIGNvbXBsZXRlZC4gVGhlIHN0YXJ0IG9mIHRoYXQgY2hpbGQgd291bGQgZ2V0IHB1c2hlZCBvdXQsIGJ1dCBvbmUgb2YgdGhlIGFuY2VzdG9ycyBtYXkgaGF2ZSBjb21wbGV0ZWQuXG5cbiAgICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50LnBhcmVudCkge1xuICAgICAgICBpZiAocGFyZW50LnBhcmVudC5fdGltZSAhPT0gcGFyZW50Ll9zdGFydCArIChwYXJlbnQuX3RzID49IDAgPyBwYXJlbnQuX3RUaW1lIC8gcGFyZW50Ll90cyA6IChwYXJlbnQudG90YWxEdXJhdGlvbigpIC0gcGFyZW50Ll90VGltZSkgLyAtcGFyZW50Ll90cykpIHtcbiAgICAgICAgICBwYXJlbnQudG90YWxUaW1lKHBhcmVudC5fdFRpbWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnBhcmVudCAmJiB0aGlzLl9kcC5hdXRvUmVtb3ZlQ2hpbGRyZW4gJiYgKHRoaXMuX3RzID4gMCAmJiBfdG90YWxUaW1lIDwgdGhpcy5fdER1ciB8fCB0aGlzLl90cyA8IDAgJiYgX3RvdGFsVGltZSA+IDAgfHwgIXRoaXMuX3REdXIgJiYgIV90b3RhbFRpbWUpKSB7XG4gICAgICAgIC8vaWYgdGhlIGFuaW1hdGlvbiBkb2Vzbid0IGhhdmUgYSBwYXJlbnQsIHB1dCBpdCBiYWNrIGludG8gaXRzIGxhc3QgcGFyZW50IChyZWNvcmRlZCBhcyBfZHAgZm9yIGV4YWN0bHkgY2FzZXMgbGlrZSB0aGlzKS4gTGltaXQgdG8gcGFyZW50cyB3aXRoIGF1dG9SZW1vdmVDaGlsZHJlbiAobGlrZSBnbG9iYWxUaW1lbGluZSkgc28gdGhhdCBpZiB0aGUgdXNlciBtYW51YWxseSByZW1vdmVzIGFuIGFuaW1hdGlvbiBmcm9tIGEgdGltZWxpbmUgYW5kIHRoZW4gYWx0ZXJzIGl0cyBwbGF5aGVhZCwgaXQgZG9lc24ndCBnZXQgYWRkZWQgYmFjayBpbi5cbiAgICAgICAgX2FkZFRvVGltZWxpbmUodGhpcy5fZHAsIHRoaXMsIHRoaXMuX3N0YXJ0IC0gdGhpcy5fZGVsYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl90VGltZSAhPT0gX3RvdGFsVGltZSB8fCAhdGhpcy5fZHVyICYmICFzdXBwcmVzc0V2ZW50cyB8fCB0aGlzLl9pbml0dGVkICYmIE1hdGguYWJzKHRoaXMuX3pUaW1lKSA9PT0gX3RpbnlOdW0gfHwgIV90b3RhbFRpbWUgJiYgIXRoaXMuX2luaXR0ZWQgJiYgKHRoaXMuYWRkIHx8IHRoaXMuX3B0TG9va3VwKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIF9wdExvb2t1cCBvbiBhIFR3ZWVuIGluc3RhbmNlIHRvIGVuc3VyZSBpdCBoYXMgYWN0dWFsbHkgZmluaXNoZWQgYmVpbmcgaW5zdGFudGlhdGVkLCBvdGhlcndpc2UgaWYgdGhpcy5yZXZlcnNlKCkgZ2V0cyBjYWxsZWQgaW4gdGhlIEFuaW1hdGlvbiBjb25zdHJ1Y3RvciwgaXQgY291bGQgdHJpZ2dlciBhIHJlbmRlcigpIGhlcmUgZXZlbiB0aG91Z2ggdGhlIF90YXJnZXRzIHdlcmVuJ3QgcG9wdWxhdGVkLCB0aHVzIHdoZW4gX2luaXQoKSBpcyBjYWxsZWQgdGhlcmUgd29uJ3QgYmUgYW55IFByb3BUd2VlbnMgKGl0J2xsIGFjdCBsaWtlIHRoZSB0d2VlbiBpcyBub24tZnVuY3Rpb25hbClcbiAgICAgIHRoaXMuX3RzIHx8ICh0aGlzLl9wVGltZSA9IF90b3RhbFRpbWUpOyAvLyBvdGhlcndpc2UsIGlmIGFuIGFuaW1hdGlvbiBpcyBwYXVzZWQsIHRoZW4gdGhlIHBsYXloZWFkIGlzIG1vdmVkIGJhY2sgdG8gemVybywgdGhlbiByZXN1bWVkLCBpdCdkIHJldmVydCBiYWNrIHRvIHRoZSBvcmlnaW5hbCB0aW1lIGF0IHRoZSBwYXVzZVxuICAgICAgLy9pZiAoIXRoaXMuX2xvY2spIHsgLy8gYXZvaWQgZW5kbGVzcyByZWN1cnNpb24gKG5vdCBzdXJlIHdlIG5lZWQgdGhpcyB5ZXQgb3IgaWYgaXQncyB3b3J0aCB0aGUgcGVyZm9ybWFuY2UgaGl0KVxuICAgICAgLy8gICB0aGlzLl9sb2NrID0gMTtcblxuICAgICAgX2xhenlTYWZlUmVuZGVyKHRoaXMsIF90b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzKTsgLy8gICB0aGlzLl9sb2NrID0gMDtcbiAgICAgIC8vfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnRpbWUgPSBmdW5jdGlvbiB0aW1lKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUoTWF0aC5taW4odGhpcy50b3RhbER1cmF0aW9uKCksIHZhbHVlICsgX2VsYXBzZWRDeWNsZUR1cmF0aW9uKHRoaXMpKSAlICh0aGlzLl9kdXIgKyB0aGlzLl9yRGVsYXkpIHx8ICh2YWx1ZSA/IHRoaXMuX2R1ciA6IDApLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLl90aW1lOyAvLyBub3RlOiBpZiB0aGUgbW9kdWx1cyByZXN1bHRzIGluIDAsIHRoZSBwbGF5aGVhZCBjb3VsZCBiZSBleGFjdGx5IGF0IHRoZSBlbmQgb3IgdGhlIGJlZ2lubmluZywgYW5kIHdlIGFsd2F5cyBkZWZlciB0byB0aGUgRU5EIHdpdGggYSBub24temVybyB2YWx1ZSwgb3RoZXJ3aXNlIGlmIHlvdSBzZXQgdGhlIHRpbWUoKSB0byB0aGUgdmVyeSBlbmQgKGR1cmF0aW9uKCkpLCBpdCB3b3VsZCByZW5kZXIgYXQgdGhlIFNUQVJUIVxuICB9O1xuXG4gIF9wcm90by50b3RhbFByb2dyZXNzID0gZnVuY3Rpb24gdG90YWxQcm9ncmVzcyh2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKHRoaXMudG90YWxEdXJhdGlvbigpICogdmFsdWUsIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMudG90YWxEdXJhdGlvbigpID8gTWF0aC5taW4oMSwgdGhpcy5fdFRpbWUgLyB0aGlzLl90RHVyKSA6IHRoaXMucmF0aW87XG4gIH07XG5cbiAgX3Byb3RvLnByb2dyZXNzID0gZnVuY3Rpb24gcHJvZ3Jlc3ModmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZSh0aGlzLmR1cmF0aW9uKCkgKiAodGhpcy5feW95byAmJiAhKHRoaXMuaXRlcmF0aW9uKCkgJiAxKSA/IDEgLSB2YWx1ZSA6IHZhbHVlKSArIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbih0aGlzKSwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy5kdXJhdGlvbigpID8gTWF0aC5taW4oMSwgdGhpcy5fdGltZSAvIHRoaXMuX2R1cikgOiB0aGlzLnJhdGlvO1xuICB9O1xuXG4gIF9wcm90by5pdGVyYXRpb24gPSBmdW5jdGlvbiBpdGVyYXRpb24odmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgdmFyIGN5Y2xlRHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uKCkgKyB0aGlzLl9yRGVsYXk7XG5cbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKHRoaXMuX3RpbWUgKyAodmFsdWUgLSAxKSAqIGN5Y2xlRHVyYXRpb24sIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMuX3JlcGVhdCA/IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbikgKyAxIDogMTtcbiAgfSAvLyBwb3RlbnRpYWwgZnV0dXJlIGFkZGl0aW9uOlxuICAvLyBpc1BsYXlpbmdCYWNrd2FyZHMoKSB7XG4gIC8vIFx0bGV0IGFuaW1hdGlvbiA9IHRoaXMsXG4gIC8vIFx0XHRvcmllbnRhdGlvbiA9IDE7IC8vIDEgPSBmb3J3YXJkLCAtMSA9IGJhY2t3YXJkXG4gIC8vIFx0d2hpbGUgKGFuaW1hdGlvbikge1xuICAvLyBcdFx0b3JpZW50YXRpb24gKj0gYW5pbWF0aW9uLnJldmVyc2VkKCkgfHwgKGFuaW1hdGlvbi5yZXBlYXQoKSAmJiAhKGFuaW1hdGlvbi5pdGVyYXRpb24oKSAmIDEpKSA/IC0xIDogMTtcbiAgLy8gXHRcdGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5wYXJlbnQ7XG4gIC8vIFx0fVxuICAvLyBcdHJldHVybiBvcmllbnRhdGlvbiA8IDA7XG4gIC8vIH1cbiAgO1xuXG4gIF9wcm90by50aW1lU2NhbGUgPSBmdW5jdGlvbiB0aW1lU2NhbGUodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydHMgPT09IC1fdGlueU51bSA/IDAgOiB0aGlzLl9ydHM7IC8vIHJlY29yZGVkIHRpbWVTY2FsZS4gU3BlY2lhbCBjYXNlOiBpZiBzb21lb25lIGNhbGxzIHJldmVyc2UoKSBvbiBhbiBhbmltYXRpb24gd2l0aCB0aW1lU2NhbGUgb2YgMCwgd2UgYXNzaWduIGl0IC1fdGlueU51bSB0byByZW1lbWJlciBpdCdzIHJldmVyc2VkLlxuICAgIH1cblxuICAgIGlmICh0aGlzLl9ydHMgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgdFRpbWUgPSB0aGlzLnBhcmVudCAmJiB0aGlzLl90cyA/IF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHRoaXMucGFyZW50Ll90aW1lLCB0aGlzKSA6IHRoaXMuX3RUaW1lOyAvLyBtYWtlIHN1cmUgdG8gZG8gdGhlIHBhcmVudFRvQ2hpbGRUb3RhbFRpbWUoKSBCRUZPUkUgc2V0dGluZyB0aGUgbmV3IF90cyBiZWNhdXNlIHRoZSBvbGQgb25lIG11c3QgYmUgdXNlZCBpbiB0aGF0IGNhbGN1bGF0aW9uLlxuICAgIC8vIGZ1dHVyZSBhZGRpdGlvbj8gVXAgc2lkZTogZmFzdCBhbmQgbWluaW1hbCBmaWxlIHNpemUuIERvd24gc2lkZTogb25seSB3b3JrcyBvbiB0aGlzIGFuaW1hdGlvbjsgaWYgYSB0aW1lbGluZSBpcyByZXZlcnNlZCwgZm9yIGV4YW1wbGUsIGl0cyBjaGlsZHJlbnMnIG9uUmV2ZXJzZSB3b3VsZG4ndCBnZXQgY2FsbGVkLlxuICAgIC8vKCt2YWx1ZSA8IDAgJiYgdGhpcy5fcnRzID49IDApICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uUmV2ZXJzZVwiLCB0cnVlKTtcbiAgICAvLyBwcmlvcml0aXplIHJlbmRlcmluZyB3aGVyZSB0aGUgcGFyZW50J3MgcGxheWhlYWQgbGluZXMgdXAgaW5zdGVhZCBvZiB0aGlzLl90VGltZSBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIGEgdHdlZW4gdGhhdCdzIGFuaW1hdGluZyBhbm90aGVyIHR3ZWVuJ3MgdGltZVNjYWxlIGluIHRoZSBzYW1lIHJlbmRlcmluZyBsb29wIChzYW1lIHBhcmVudCksIHRodXMgaWYgdGhlIHRpbWVTY2FsZSB0d2VlbiByZW5kZXJzIGZpcnN0LCBpdCB3b3VsZCBhbHRlciBfc3RhcnQgQkVGT1JFIF90VGltZSB3YXMgc2V0IG9uIHRoYXQgdGljayAoaW4gdGhlIHJlbmRlcmluZyBsb29wKSwgZWZmZWN0aXZlbHkgZnJlZXppbmcgaXQgdW50aWwgdGhlIHRpbWVTY2FsZSB0d2VlbiBmaW5pc2hlcy5cblxuICAgIHRoaXMuX3J0cyA9ICt2YWx1ZSB8fCAwO1xuICAgIHRoaXMuX3RzID0gdGhpcy5fcHMgfHwgdmFsdWUgPT09IC1fdGlueU51bSA/IDAgOiB0aGlzLl9ydHM7IC8vIF90cyBpcyB0aGUgZnVuY3Rpb25hbCB0aW1lU2NhbGUgd2hpY2ggd291bGQgYmUgMCBpZiB0aGUgYW5pbWF0aW9uIGlzIHBhdXNlZC5cblxuICAgIF9yZWNhY2hlQW5jZXN0b3JzKHRoaXMudG90YWxUaW1lKF9jbGFtcCgtdGhpcy5fZGVsYXksIHRoaXMuX3REdXIsIHRUaW1lKSwgdHJ1ZSkpO1xuXG4gICAgX3NldEVuZCh0aGlzKTsgLy8gaWYgcGFyZW50LnNtb290aENoaWxkVGltaW5nIHdhcyBmYWxzZSwgdGhlIGVuZCB0aW1lIGRpZG4ndCBnZXQgdXBkYXRlZCBpbiB0aGUgX2FsaWduUGxheWhlYWQoKSBtZXRob2QsIHNvIGRvIGl0IGhlcmUuXG5cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5wYXVzZWQgPSBmdW5jdGlvbiBwYXVzZWQodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcHMgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9wcyA9IHZhbHVlO1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcFRpbWUgPSB0aGlzLl90VGltZSB8fCBNYXRoLm1heCgtdGhpcy5fZGVsYXksIHRoaXMucmF3VGltZSgpKTsgLy8gaWYgdGhlIHBhdXNlIG9jY3VycyBkdXJpbmcgdGhlIGRlbGF5IHBoYXNlLCBtYWtlIHN1cmUgdGhhdCdzIGZhY3RvcmVkIGluIHdoZW4gcmVzdW1pbmcuXG5cbiAgICAgICAgdGhpcy5fdHMgPSB0aGlzLl9hY3QgPSAwOyAvLyBfdHMgaXMgdGhlIGZ1bmN0aW9uYWwgdGltZVNjYWxlLCBzbyBhIHBhdXNlZCB0d2VlbiB3b3VsZCBlZmZlY3RpdmVseSBoYXZlIGEgdGltZVNjYWxlIG9mIDAuIFdlIHJlY29yZCB0aGUgXCJyZWFsXCIgdGltZVNjYWxlIGFzIF9ydHMgKHJlY29yZGVkIHRpbWUgc2NhbGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfd2FrZSgpO1xuXG4gICAgICAgIHRoaXMuX3RzID0gdGhpcy5fcnRzOyAvL29ubHkgZGVmZXIgdG8gX3BUaW1lIChwYXVzZVRpbWUpIGlmIHRUaW1lIGlzIHplcm8uIFJlbWVtYmVyLCBzb21lb25lIGNvdWxkIHBhdXNlKCkgYW4gYW5pbWF0aW9uLCB0aGVuIHNjcnViIHRoZSBwbGF5aGVhZCBhbmQgcmVzdW1lKCkuIElmIHRoZSBwYXJlbnQgZG9lc24ndCBoYXZlIHNtb290aENoaWxkVGltaW5nLCB3ZSByZW5kZXIgYXQgdGhlIHJhd1RpbWUoKSBiZWNhdXNlIHRoZSBzdGFydFRpbWUgd29uJ3QgZ2V0IHVwZGF0ZWQuXG5cbiAgICAgICAgdGhpcy50b3RhbFRpbWUodGhpcy5wYXJlbnQgJiYgIXRoaXMucGFyZW50LnNtb290aENoaWxkVGltaW5nID8gdGhpcy5yYXdUaW1lKCkgOiB0aGlzLl90VGltZSB8fCB0aGlzLl9wVGltZSwgdGhpcy5wcm9ncmVzcygpID09PSAxICYmIE1hdGguYWJzKHRoaXMuX3pUaW1lKSAhPT0gX3RpbnlOdW0gJiYgKHRoaXMuX3RUaW1lIC09IF90aW55TnVtKSk7IC8vIGVkZ2UgY2FzZTogYW5pbWF0aW9uLnByb2dyZXNzKDEpLnBhdXNlKCkucGxheSgpIHdvdWxkbid0IHJlbmRlciBhZ2FpbiBiZWNhdXNlIHRoZSBwbGF5aGVhZCBpcyBhbHJlYWR5IGF0IHRoZSBlbmQsIGJ1dCB0aGUgY2FsbCB0byB0b3RhbFRpbWUoKSBiZWxvdyB3aWxsIGFkZCBpdCBiYWNrIHRvIGl0cyBwYXJlbnQuLi5hbmQgbm90IHJlbW92ZSBpdCBhZ2FpbiAoc2luY2UgcmVtb3Zpbmcgb25seSBoYXBwZW5zIHVwb24gcmVuZGVyaW5nIGF0IGEgbmV3IHRpbWUpLiBPZmZzZXR0aW5nIHRoZSBfdFRpbWUgc2xpZ2h0bHkgaXMgZG9uZSBzaW1wbHkgdG8gY2F1c2UgdGhlIGZpbmFsIHJlbmRlciBpbiB0b3RhbFRpbWUoKSB0aGF0J2xsIHBvcCBpdCBvZmYgaXRzIHRpbWVsaW5lIChpZiBhdXRvUmVtb3ZlQ2hpbGRyZW4gaXMgdHJ1ZSwgb2YgY291cnNlKS4gQ2hlY2sgdG8gbWFrZSBzdXJlIF96VGltZSBpc24ndCAtX3RpbnlOdW0gdG8gYXZvaWQgYW4gZWRnZSBjYXNlIHdoZXJlIHRoZSBwbGF5aGVhZCBpcyBwdXNoZWQgdG8gdGhlIGVuZCBidXQgSU5TSURFIGEgdHdlZW4vY2FsbGJhY2ssIHRoZSB0aW1lbGluZSBpdHNlbGYgaXMgcGF1c2VkIHRodXMgaGFsdGluZyByZW5kZXJpbmcgYW5kIGxlYXZpbmcgYSBmZXcgdW5yZW5kZXJlZC4gV2hlbiByZXN1bWluZywgaXQgd291bGRuJ3QgcmVuZGVyIHRob3NlIG90aGVyd2lzZS5cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uc3RhcnRUaW1lID0gZnVuY3Rpb24gc3RhcnRUaW1lKHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3N0YXJ0ID0gdmFsdWU7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5fZHA7XG4gICAgICBwYXJlbnQgJiYgKHBhcmVudC5fc29ydCB8fCAhdGhpcy5wYXJlbnQpICYmIF9hZGRUb1RpbWVsaW5lKHBhcmVudCwgdGhpcywgdmFsdWUgLSB0aGlzLl9kZWxheSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc3RhcnQ7XG4gIH07XG5cbiAgX3Byb3RvLmVuZFRpbWUgPSBmdW5jdGlvbiBlbmRUaW1lKGluY2x1ZGVSZXBlYXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0ICsgKF9pc05vdEZhbHNlKGluY2x1ZGVSZXBlYXRzKSA/IHRoaXMudG90YWxEdXJhdGlvbigpIDogdGhpcy5kdXJhdGlvbigpKSAvIE1hdGguYWJzKHRoaXMuX3RzIHx8IDEpO1xuICB9O1xuXG4gIF9wcm90by5yYXdUaW1lID0gZnVuY3Rpb24gcmF3VGltZSh3cmFwUmVwZWF0cykge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLl9kcDsgLy8gX2RwID0gZGV0YWNoZWQgcGFyZW50XG5cbiAgICByZXR1cm4gIXBhcmVudCA/IHRoaXMuX3RUaW1lIDogd3JhcFJlcGVhdHMgJiYgKCF0aGlzLl90cyB8fCB0aGlzLl9yZXBlYXQgJiYgdGhpcy5fdGltZSAmJiB0aGlzLnRvdGFsUHJvZ3Jlc3MoKSA8IDEpID8gdGhpcy5fdFRpbWUgJSAodGhpcy5fZHVyICsgdGhpcy5fckRlbGF5KSA6ICF0aGlzLl90cyA/IHRoaXMuX3RUaW1lIDogX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUocGFyZW50LnJhd1RpbWUod3JhcFJlcGVhdHMpLCB0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8uZ2xvYmFsVGltZSA9IGZ1bmN0aW9uIGdsb2JhbFRpbWUocmF3VGltZSkge1xuICAgIHZhciBhbmltYXRpb24gPSB0aGlzLFxuICAgICAgICB0aW1lID0gYXJndW1lbnRzLmxlbmd0aCA/IHJhd1RpbWUgOiBhbmltYXRpb24ucmF3VGltZSgpO1xuXG4gICAgd2hpbGUgKGFuaW1hdGlvbikge1xuICAgICAgdGltZSA9IGFuaW1hdGlvbi5fc3RhcnQgKyB0aW1lIC8gKGFuaW1hdGlvbi5fdHMgfHwgMSk7XG4gICAgICBhbmltYXRpb24gPSBhbmltYXRpb24uX2RwO1xuICAgIH1cblxuICAgIHJldHVybiB0aW1lO1xuICB9O1xuXG4gIF9wcm90by5yZXBlYXQgPSBmdW5jdGlvbiByZXBlYXQodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcmVwZWF0ID0gdmFsdWUgPT09IEluZmluaXR5ID8gLTIgOiB2YWx1ZTtcbiAgICAgIHJldHVybiBfb25VcGRhdGVUb3RhbER1cmF0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yZXBlYXQgPT09IC0yID8gSW5maW5pdHkgOiB0aGlzLl9yZXBlYXQ7XG4gIH07XG5cbiAgX3Byb3RvLnJlcGVhdERlbGF5ID0gZnVuY3Rpb24gcmVwZWF0RGVsYXkodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdmFyIHRpbWUgPSB0aGlzLl90aW1lO1xuICAgICAgdGhpcy5fckRlbGF5ID0gdmFsdWU7XG5cbiAgICAgIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24odGhpcyk7XG5cbiAgICAgIHJldHVybiB0aW1lID8gdGhpcy50aW1lKHRpbWUpIDogdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fckRlbGF5O1xuICB9O1xuXG4gIF9wcm90by55b3lvID0gZnVuY3Rpb24geW95byh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl95b3lvID0gdmFsdWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5feW95bztcbiAgfTtcblxuICBfcHJvdG8uc2VlayA9IGZ1bmN0aW9uIHNlZWsocG9zaXRpb24sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxUaW1lKF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSwgX2lzTm90RmFsc2Uoc3VwcHJlc3NFdmVudHMpKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzdGFydCA9IGZ1bmN0aW9uIHJlc3RhcnQoaW5jbHVkZURlbGF5LCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiB0aGlzLnBsYXkoKS50b3RhbFRpbWUoaW5jbHVkZURlbGF5ID8gLXRoaXMuX2RlbGF5IDogMCwgX2lzTm90RmFsc2Uoc3VwcHJlc3NFdmVudHMpKTtcbiAgfTtcblxuICBfcHJvdG8ucGxheSA9IGZ1bmN0aW9uIHBsYXkoZnJvbSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBmcm9tICE9IG51bGwgJiYgdGhpcy5zZWVrKGZyb20sIHN1cHByZXNzRXZlbnRzKTtcbiAgICByZXR1cm4gdGhpcy5yZXZlcnNlZChmYWxzZSkucGF1c2VkKGZhbHNlKTtcbiAgfTtcblxuICBfcHJvdG8ucmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2UoZnJvbSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBmcm9tICE9IG51bGwgJiYgdGhpcy5zZWVrKGZyb20gfHwgdGhpcy50b3RhbER1cmF0aW9uKCksIHN1cHByZXNzRXZlbnRzKTtcbiAgICByZXR1cm4gdGhpcy5yZXZlcnNlZCh0cnVlKS5wYXVzZWQoZmFsc2UpO1xuICB9O1xuXG4gIF9wcm90by5wYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKGF0VGltZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBhdFRpbWUgIT0gbnVsbCAmJiB0aGlzLnNlZWsoYXRUaW1lLCBzdXBwcmVzc0V2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXMucGF1c2VkKHRydWUpO1xuICB9O1xuXG4gIF9wcm90by5yZXN1bWUgPSBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF1c2VkKGZhbHNlKTtcbiAgfTtcblxuICBfcHJvdG8ucmV2ZXJzZWQgPSBmdW5jdGlvbiByZXZlcnNlZCh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAhIXZhbHVlICE9PSB0aGlzLnJldmVyc2VkKCkgJiYgdGhpcy50aW1lU2NhbGUoLXRoaXMuX3J0cyB8fCAodmFsdWUgPyAtX3RpbnlOdW0gOiAwKSk7IC8vIGluIGNhc2UgdGltZVNjYWxlIGlzIHplcm8sIHJldmVyc2luZyB3b3VsZCBoYXZlIG5vIGVmZmVjdCBzbyB3ZSB1c2UgX3RpbnlOdW0uXG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ydHMgPCAwO1xuICB9O1xuXG4gIF9wcm90by5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZSgpIHtcbiAgICB0aGlzLl9pbml0dGVkID0gdGhpcy5fYWN0ID0gMDtcbiAgICB0aGlzLl96VGltZSA9IC1fdGlueU51bTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uaXNBY3RpdmUgPSBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5fZHAsXG4gICAgICAgIHN0YXJ0ID0gdGhpcy5fc3RhcnQsXG4gICAgICAgIHJhd1RpbWU7XG4gICAgcmV0dXJuICEhKCFwYXJlbnQgfHwgdGhpcy5fdHMgJiYgdGhpcy5faW5pdHRlZCAmJiBwYXJlbnQuaXNBY3RpdmUoKSAmJiAocmF3VGltZSA9IHBhcmVudC5yYXdUaW1lKHRydWUpKSA+PSBzdGFydCAmJiByYXdUaW1lIDwgdGhpcy5lbmRUaW1lKHRydWUpIC0gX3RpbnlOdW0pO1xuICB9O1xuXG4gIF9wcm90by5ldmVudENhbGxiYWNrID0gZnVuY3Rpb24gZXZlbnRDYWxsYmFjayh0eXBlLCBjYWxsYmFjaywgcGFyYW1zKSB7XG4gICAgdmFyIHZhcnMgPSB0aGlzLnZhcnM7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgZGVsZXRlIHZhcnNbdHlwZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXJzW3R5cGVdID0gY2FsbGJhY2s7XG4gICAgICAgIHBhcmFtcyAmJiAodmFyc1t0eXBlICsgXCJQYXJhbXNcIl0gPSBwYXJhbXMpO1xuICAgICAgICB0eXBlID09PSBcIm9uVXBkYXRlXCIgJiYgKHRoaXMuX29uVXBkYXRlID0gY2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyc1t0eXBlXTtcbiAgfTtcblxuICBfcHJvdG8udGhlbiA9IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICB2YXIgZiA9IF9pc0Z1bmN0aW9uKG9uRnVsZmlsbGVkKSA/IG9uRnVsZmlsbGVkIDogX3Bhc3NUaHJvdWdoLFxuICAgICAgICAgIF9yZXNvbHZlID0gZnVuY3Rpb24gX3Jlc29sdmUoKSB7XG4gICAgICAgIHZhciBfdGhlbiA9IHNlbGYudGhlbjtcbiAgICAgICAgc2VsZi50aGVuID0gbnVsbDsgLy8gdGVtcG9yYXJpbHkgbnVsbCB0aGUgdGhlbigpIG1ldGhvZCB0byBhdm9pZCBhbiBpbmZpbml0ZSBsb29wIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQL2lzc3Vlcy8zMjIpXG5cbiAgICAgICAgX2lzRnVuY3Rpb24oZikgJiYgKGYgPSBmKHNlbGYpKSAmJiAoZi50aGVuIHx8IGYgPT09IHNlbGYpICYmIChzZWxmLnRoZW4gPSBfdGhlbik7XG4gICAgICAgIHJlc29sdmUoZik7XG4gICAgICAgIHNlbGYudGhlbiA9IF90aGVuO1xuICAgICAgfTtcblxuICAgICAgaWYgKHNlbGYuX2luaXR0ZWQgJiYgc2VsZi50b3RhbFByb2dyZXNzKCkgPT09IDEgJiYgc2VsZi5fdHMgPj0gMCB8fCAhc2VsZi5fdFRpbWUgJiYgc2VsZi5fdHMgPCAwKSB7XG4gICAgICAgIF9yZXNvbHZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLl9wcm9tID0gX3Jlc29sdmU7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmtpbGwgPSBmdW5jdGlvbiBraWxsKCkge1xuICAgIF9pbnRlcnJ1cHQodGhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIEFuaW1hdGlvbjtcbn0oKTtcblxuX3NldERlZmF1bHRzKEFuaW1hdGlvbi5wcm90b3R5cGUsIHtcbiAgX3RpbWU6IDAsXG4gIF9zdGFydDogMCxcbiAgX2VuZDogMCxcbiAgX3RUaW1lOiAwLFxuICBfdER1cjogMCxcbiAgX2RpcnR5OiAwLFxuICBfcmVwZWF0OiAwLFxuICBfeW95bzogZmFsc2UsXG4gIHBhcmVudDogbnVsbCxcbiAgX2luaXR0ZWQ6IGZhbHNlLFxuICBfckRlbGF5OiAwLFxuICBfdHM6IDEsXG4gIF9kcDogMCxcbiAgcmF0aW86IDAsXG4gIF96VGltZTogLV90aW55TnVtLFxuICBfcHJvbTogMCxcbiAgX3BzOiBmYWxzZSxcbiAgX3J0czogMVxufSk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVElNRUxJTkVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbmV4cG9ydCB2YXIgVGltZWxpbmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BbmltYXRpb24pIHtcbiAgX2luaGVyaXRzTG9vc2UoVGltZWxpbmUsIF9BbmltYXRpb24pO1xuXG4gIGZ1bmN0aW9uIFRpbWVsaW5lKHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgaWYgKHZhcnMgPT09IHZvaWQgMCkge1xuICAgICAgdmFycyA9IHt9O1xuICAgIH1cblxuICAgIF90aGlzID0gX0FuaW1hdGlvbi5jYWxsKHRoaXMsIHZhcnMpIHx8IHRoaXM7XG4gICAgX3RoaXMubGFiZWxzID0ge307XG4gICAgX3RoaXMuc21vb3RoQ2hpbGRUaW1pbmcgPSAhIXZhcnMuc21vb3RoQ2hpbGRUaW1pbmc7XG4gICAgX3RoaXMuYXV0b1JlbW92ZUNoaWxkcmVuID0gISF2YXJzLmF1dG9SZW1vdmVDaGlsZHJlbjtcbiAgICBfdGhpcy5fc29ydCA9IF9pc05vdEZhbHNlKHZhcnMuc29ydENoaWxkcmVuKTtcbiAgICBfZ2xvYmFsVGltZWxpbmUgJiYgX2FkZFRvVGltZWxpbmUodmFycy5wYXJlbnQgfHwgX2dsb2JhbFRpbWVsaW5lLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgcG9zaXRpb24pO1xuICAgIHZhcnMucmV2ZXJzZWQgJiYgX3RoaXMucmV2ZXJzZSgpO1xuICAgIHZhcnMucGF1c2VkICYmIF90aGlzLnBhdXNlZCh0cnVlKTtcbiAgICB2YXJzLnNjcm9sbFRyaWdnZXIgJiYgX3Njcm9sbFRyaWdnZXIoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHZhcnMuc2Nyb2xsVHJpZ2dlcik7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90bzIgPSBUaW1lbGluZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMi50byA9IGZ1bmN0aW9uIHRvKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgX2NyZWF0ZVR3ZWVuVHlwZSgwLCBhcmd1bWVudHMsIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5mcm9tID0gZnVuY3Rpb24gZnJvbSh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgIF9jcmVhdGVUd2VlblR5cGUoMSwgYXJndW1lbnRzLCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuZnJvbVRvID0gZnVuY3Rpb24gZnJvbVRvKHRhcmdldHMsIGZyb21WYXJzLCB0b1ZhcnMsIHBvc2l0aW9uKSB7XG4gICAgX2NyZWF0ZVR3ZWVuVHlwZSgyLCBhcmd1bWVudHMsIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5zZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0cywgdmFycywgcG9zaXRpb24pIHtcbiAgICB2YXJzLmR1cmF0aW9uID0gMDtcbiAgICB2YXJzLnBhcmVudCA9IHRoaXM7XG4gICAgX2luaGVyaXREZWZhdWx0cyh2YXJzKS5yZXBlYXREZWxheSB8fCAodmFycy5yZXBlYXQgPSAwKTtcbiAgICB2YXJzLmltbWVkaWF0ZVJlbmRlciA9ICEhdmFycy5pbW1lZGlhdGVSZW5kZXI7XG4gICAgbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSwgMSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5jYWxsID0gZnVuY3Rpb24gY2FsbChjYWxsYmFjaywgcGFyYW1zLCBwb3NpdGlvbikge1xuICAgIHJldHVybiBfYWRkVG9UaW1lbGluZSh0aGlzLCBUd2Vlbi5kZWxheWVkQ2FsbCgwLCBjYWxsYmFjaywgcGFyYW1zKSwgcG9zaXRpb24pO1xuICB9IC8vT05MWSBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSEgTWF5YmUgZGVsZXRlP1xuICA7XG5cbiAgX3Byb3RvMi5zdGFnZ2VyVG8gPSBmdW5jdGlvbiBzdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKSB7XG4gICAgdmFycy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIHZhcnMuc3RhZ2dlciA9IHZhcnMuc3RhZ2dlciB8fCBzdGFnZ2VyO1xuICAgIHZhcnMub25Db21wbGV0ZSA9IG9uQ29tcGxldGVBbGw7XG4gICAgdmFycy5vbkNvbXBsZXRlUGFyYW1zID0gb25Db21wbGV0ZUFsbFBhcmFtcztcbiAgICB2YXJzLnBhcmVudCA9IHRoaXM7XG4gICAgbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5zdGFnZ2VyRnJvbSA9IGZ1bmN0aW9uIHN0YWdnZXJGcm9tKHRhcmdldHMsIGR1cmF0aW9uLCB2YXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcykge1xuICAgIHZhcnMucnVuQmFja3dhcmRzID0gMTtcbiAgICBfaW5oZXJpdERlZmF1bHRzKHZhcnMpLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKHZhcnMuaW1tZWRpYXRlUmVuZGVyKTtcbiAgICByZXR1cm4gdGhpcy5zdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKTtcbiAgfTtcblxuICBfcHJvdG8yLnN0YWdnZXJGcm9tVG8gPSBmdW5jdGlvbiBzdGFnZ2VyRnJvbVRvKHRhcmdldHMsIGR1cmF0aW9uLCBmcm9tVmFycywgdG9WYXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcykge1xuICAgIHRvVmFycy5zdGFydEF0ID0gZnJvbVZhcnM7XG4gICAgX2luaGVyaXREZWZhdWx0cyh0b1ZhcnMpLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKHRvVmFycy5pbW1lZGlhdGVSZW5kZXIpO1xuICAgIHJldHVybiB0aGlzLnN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdG9WYXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcyk7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgICB2YXIgcHJldlRpbWUgPSB0aGlzLl90aW1lLFxuICAgICAgICB0RHVyID0gdGhpcy5fZGlydHkgPyB0aGlzLnRvdGFsRHVyYXRpb24oKSA6IHRoaXMuX3REdXIsXG4gICAgICAgIGR1ciA9IHRoaXMuX2R1cixcbiAgICAgICAgdFRpbWUgPSB0b3RhbFRpbWUgPD0gMCA/IDAgOiBfcm91bmRQcmVjaXNlKHRvdGFsVGltZSksXG4gICAgICAgIC8vIGlmIGEgcGF1c2VkIHRpbWVsaW5lIGlzIHJlc3VtZWQgKG9yIGl0cyBfc3RhcnQgaXMgdXBkYXRlZCBmb3IgYW5vdGhlciByZWFzb24uLi53aGljaCByb3VuZHMgaXQpLCB0aGF0IGNvdWxkIHJlc3VsdCBpbiB0aGUgcGxheWhlYWQgc2hpZnRpbmcgYSAqKnRpbnkqKiBhbW91bnQgYW5kIGEgemVyby1kdXJhdGlvbiBjaGlsZCBhdCB0aGF0IHNwb3QgbWF5IGdldCByZW5kZXJlZCBhdCBhIGRpZmZlcmVudCByYXRpbywgbGlrZSBpdHMgdG90YWxUaW1lIGluIHJlbmRlcigpIG1heSBiZSAxZS0xNyBpbnN0ZWFkIG9mIDAsIGZvciBleGFtcGxlLlxuICAgIGNyb3NzaW5nU3RhcnQgPSB0aGlzLl96VGltZSA8IDAgIT09IHRvdGFsVGltZSA8IDAgJiYgKHRoaXMuX2luaXR0ZWQgfHwgIWR1ciksXG4gICAgICAgIHRpbWUsXG4gICAgICAgIGNoaWxkLFxuICAgICAgICBuZXh0LFxuICAgICAgICBpdGVyYXRpb24sXG4gICAgICAgIGN5Y2xlRHVyYXRpb24sXG4gICAgICAgIHByZXZQYXVzZWQsXG4gICAgICAgIHBhdXNlVHdlZW4sXG4gICAgICAgIHRpbWVTY2FsZSxcbiAgICAgICAgcHJldlN0YXJ0LFxuICAgICAgICBwcmV2SXRlcmF0aW9uLFxuICAgICAgICB5b3lvLFxuICAgICAgICBpc1lveW87XG4gICAgdGhpcyAhPT0gX2dsb2JhbFRpbWVsaW5lICYmIHRUaW1lID4gdER1ciAmJiB0b3RhbFRpbWUgPj0gMCAmJiAodFRpbWUgPSB0RHVyKTtcblxuICAgIGlmICh0VGltZSAhPT0gdGhpcy5fdFRpbWUgfHwgZm9yY2UgfHwgY3Jvc3NpbmdTdGFydCkge1xuICAgICAgaWYgKHByZXZUaW1lICE9PSB0aGlzLl90aW1lICYmIGR1cikge1xuICAgICAgICAvL2lmIHRvdGFsRHVyYXRpb24oKSBmaW5kcyBhIGNoaWxkIHdpdGggYSBuZWdhdGl2ZSBzdGFydFRpbWUgYW5kIHNtb290aENoaWxkVGltaW5nIGlzIHRydWUsIHRoaW5ncyBnZXQgc2hpZnRlZCBhcm91bmQgaW50ZXJuYWxseSBzbyB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgdGltZSBhY2NvcmRpbmdseS4gRm9yIGV4YW1wbGUsIGlmIGEgdHdlZW4gc3RhcnRzIGF0IC0zMCB3ZSBtdXN0IHNoaWZ0IEVWRVJZVEhJTkcgZm9yd2FyZCAzMCBzZWNvbmRzIGFuZCBtb3ZlIHRoaXMgdGltZWxpbmUncyBzdGFydFRpbWUgYmFja3dhcmQgYnkgMzAgc2Vjb25kcyBzbyB0aGF0IHRoaW5ncyBhbGlnbiB3aXRoIHRoZSBwbGF5aGVhZCAobm8ganVtcCkuXG4gICAgICAgIHRUaW1lICs9IHRoaXMuX3RpbWUgLSBwcmV2VGltZTtcbiAgICAgICAgdG90YWxUaW1lICs9IHRoaXMuX3RpbWUgLSBwcmV2VGltZTtcbiAgICAgIH1cblxuICAgICAgdGltZSA9IHRUaW1lO1xuICAgICAgcHJldlN0YXJ0ID0gdGhpcy5fc3RhcnQ7XG4gICAgICB0aW1lU2NhbGUgPSB0aGlzLl90cztcbiAgICAgIHByZXZQYXVzZWQgPSAhdGltZVNjYWxlO1xuXG4gICAgICBpZiAoY3Jvc3NpbmdTdGFydCkge1xuICAgICAgICBkdXIgfHwgKHByZXZUaW1lID0gdGhpcy5felRpbWUpOyAvL3doZW4gdGhlIHBsYXloZWFkIGFycml2ZXMgYXQgRVhBQ1RMWSB0aW1lIDAgKHJpZ2h0IG9uIHRvcCkgb2YgYSB6ZXJvLWR1cmF0aW9uIHRpbWVsaW5lLCB3ZSBuZWVkIHRvIGRpc2Nlcm4gaWYgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIHNvIHRoYXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgYWdhaW4gKG5leHQgdGltZSksIGl0J2xsIHRyaWdnZXIgdGhlIGNhbGxiYWNrLiBJZiBldmVudHMgYXJlIE5PVCBzdXBwcmVzc2VkLCBvYnZpb3VzbHkgdGhlIGNhbGxiYWNrIHdvdWxkIGJlIHRyaWdnZXJlZCBpbiB0aGlzIHJlbmRlci4gQmFzaWNhbGx5LCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUgZWl0aGVyIHdoZW4gdGhlIHBsYXloZWFkIEFSUklWRVMgb3IgTEVBVkVTIHRoaXMgZXhhY3Qgc3BvdCwgbm90IGJvdGguIEltYWdpbmUgZG9pbmcgYSB0aW1lbGluZS5zZWVrKDApIGFuZCB0aGVyZSdzIGEgY2FsbGJhY2sgdGhhdCBzaXRzIGF0IDAuIFNpbmNlIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBvbiB0aGF0IHNlZWsoKSBieSBkZWZhdWx0LCBub3RoaW5nIHdpbGwgZmlyZSwgYnV0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIG9mZiBvZiB0aGF0IHBvc2l0aW9uLCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUuIFRoaXMgYmVoYXZpb3IgaXMgd2hhdCBwZW9wbGUgaW50dWl0aXZlbHkgZXhwZWN0LlxuXG4gICAgICAgICh0b3RhbFRpbWUgfHwgIXN1cHByZXNzRXZlbnRzKSAmJiAodGhpcy5felRpbWUgPSB0b3RhbFRpbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcmVwZWF0KSB7XG4gICAgICAgIC8vYWRqdXN0IHRoZSB0aW1lIGZvciByZXBlYXRzIGFuZCB5b3lvc1xuICAgICAgICB5b3lvID0gdGhpcy5feW95bztcbiAgICAgICAgY3ljbGVEdXJhdGlvbiA9IGR1ciArIHRoaXMuX3JEZWxheTtcblxuICAgICAgICBpZiAodGhpcy5fcmVwZWF0IDwgLTEgJiYgdG90YWxUaW1lIDwgMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnRvdGFsVGltZShjeWNsZUR1cmF0aW9uICogMTAwICsgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGltZSA9IF9yb3VuZFByZWNpc2UodFRpbWUgJSBjeWNsZUR1cmF0aW9uKTsgLy9yb3VuZCB0byBhdm9pZCBmbG9hdGluZyBwb2ludCBlcnJvcnMuICg0ICUgMC44IHNob3VsZCBiZSAwIGJ1dCBzb21lIGJyb3dzZXJzIHJlcG9ydCBpdCBhcyAwLjc5OTk5OTk5ISlcblxuICAgICAgICBpZiAodFRpbWUgPT09IHREdXIpIHtcbiAgICAgICAgICAvLyB0aGUgdER1ciA9PT0gdFRpbWUgaXMgZm9yIGVkZ2UgY2FzZXMgd2hlcmUgdGhlcmUncyBhIGxlbmd0aHkgZGVjaW1hbCBvbiB0aGUgZHVyYXRpb24gYW5kIGl0IG1heSByZWFjaCB0aGUgdmVyeSBlbmQgYnV0IHRoZSB0aW1lIGlzIHJlbmRlcmVkIGFzIG5vdC1xdWl0ZS10aGVyZSAocmVtZW1iZXIsIHREdXIgaXMgcm91bmRlZCB0byA0IGRlY2ltYWxzIHdoZXJlYXMgZHVyIGlzbid0KVxuICAgICAgICAgIGl0ZXJhdGlvbiA9IHRoaXMuX3JlcGVhdDtcbiAgICAgICAgICB0aW1lID0gZHVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZXJhdGlvbiA9IH5+KHRUaW1lIC8gY3ljbGVEdXJhdGlvbik7XG5cbiAgICAgICAgICBpZiAoaXRlcmF0aW9uICYmIGl0ZXJhdGlvbiA9PT0gdFRpbWUgLyBjeWNsZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aW1lID0gZHVyO1xuICAgICAgICAgICAgaXRlcmF0aW9uLS07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGltZSA+IGR1ciAmJiAodGltZSA9IGR1cik7XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2SXRlcmF0aW9uID0gX2FuaW1hdGlvbkN5Y2xlKHRoaXMuX3RUaW1lLCBjeWNsZUR1cmF0aW9uKTtcbiAgICAgICAgIXByZXZUaW1lICYmIHRoaXMuX3RUaW1lICYmIHByZXZJdGVyYXRpb24gIT09IGl0ZXJhdGlvbiAmJiAocHJldkl0ZXJhdGlvbiA9IGl0ZXJhdGlvbik7IC8vIGVkZ2UgY2FzZSAtIGlmIHNvbWVvbmUgZG9lcyBhZGRQYXVzZSgpIGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyBvZiBhIHJlcGVhdGluZyB0aW1lbGluZSwgdGhhdCBwYXVzZSBpcyB0ZWNobmljYWxseSBhdCB0aGUgc2FtZSBzcG90IGFzIHRoZSBlbmQgd2hpY2ggY2F1c2VzIHRoaXMuX3RpbWUgdG8gZ2V0IHNldCB0byAwIHdoZW4gdGhlIHRvdGFsVGltZSB3b3VsZCBub3JtYWxseSBwbGFjZSB0aGUgcGxheWhlYWQgYXQgdGhlIGVuZC4gU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMjM4MjMtY2xvc2luZy1uYXYtYW5pbWF0aW9uLW5vdC13b3JraW5nLW9uLWllLWFuZC1pcGhvbmUtNi1tYXliZS1vdGhlci1vbGRlci1icm93c2VyLz90YWI9Y29tbWVudHMjY29tbWVudC0xMTMwMDVcblxuICAgICAgICBpZiAoeW95byAmJiBpdGVyYXRpb24gJiAxKSB7XG4gICAgICAgICAgdGltZSA9IGR1ciAtIHRpbWU7XG4gICAgICAgICAgaXNZb3lvID0gMTtcbiAgICAgICAgfVxuICAgICAgICAvKlxuICAgICAgICBtYWtlIHN1cmUgY2hpbGRyZW4gYXQgdGhlIGVuZC9iZWdpbm5pbmcgb2YgdGhlIHRpbWVsaW5lIGFyZSByZW5kZXJlZCBwcm9wZXJseS4gSWYsIGZvciBleGFtcGxlLFxuICAgICAgICBhIDMtc2Vjb25kIGxvbmcgdGltZWxpbmUgcmVuZGVyZWQgYXQgMi45IHNlY29uZHMgcHJldmlvdXNseSwgYW5kIG5vdyByZW5kZXJzIGF0IDMuMiBzZWNvbmRzICh3aGljaFxuICAgICAgICB3b3VsZCBnZXQgdHJhbnNsYXRlZCB0byAyLjggc2Vjb25kcyBpZiB0aGUgdGltZWxpbmUgeW95b3Mgb3IgMC4yIHNlY29uZHMgaWYgaXQganVzdCByZXBlYXRzKSwgdGhlcmVcbiAgICAgICAgY291bGQgYmUgYSBjYWxsYmFjayBvciBhIHNob3J0IHR3ZWVuIHRoYXQncyBhdCAyLjk1IG9yIDMgc2Vjb25kcyBpbiB3aGljaCB3b3VsZG4ndCByZW5kZXIuIFNvXG4gICAgICAgIHdlIG5lZWQgdG8gcHVzaCB0aGUgdGltZWxpbmUgdG8gdGhlIGVuZCAoYW5kL29yIGJlZ2lubmluZyBkZXBlbmRpbmcgb24gaXRzIHlveW8gdmFsdWUpLiBBbHNvIHdlIG11c3RcbiAgICAgICAgZW5zdXJlIHRoYXQgemVyby1kdXJhdGlvbiB0d2VlbnMgYXQgdGhlIHZlcnkgYmVnaW5uaW5nIG9yIGVuZCBvZiB0aGUgVGltZWxpbmUgd29yay5cbiAgICAgICAgKi9cblxuXG4gICAgICAgIGlmIChpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24gJiYgIXRoaXMuX2xvY2spIHtcbiAgICAgICAgICB2YXIgcmV3aW5kaW5nID0geW95byAmJiBwcmV2SXRlcmF0aW9uICYgMSxcbiAgICAgICAgICAgICAgZG9lc1dyYXAgPSByZXdpbmRpbmcgPT09ICh5b3lvICYmIGl0ZXJhdGlvbiAmIDEpO1xuICAgICAgICAgIGl0ZXJhdGlvbiA8IHByZXZJdGVyYXRpb24gJiYgKHJld2luZGluZyA9ICFyZXdpbmRpbmcpO1xuICAgICAgICAgIHByZXZUaW1lID0gcmV3aW5kaW5nID8gMCA6IGR1cjtcbiAgICAgICAgICB0aGlzLl9sb2NrID0gMTtcbiAgICAgICAgICB0aGlzLnJlbmRlcihwcmV2VGltZSB8fCAoaXNZb3lvID8gMCA6IF9yb3VuZFByZWNpc2UoaXRlcmF0aW9uICogY3ljbGVEdXJhdGlvbikpLCBzdXBwcmVzc0V2ZW50cywgIWR1cikuX2xvY2sgPSAwO1xuICAgICAgICAgIHRoaXMuX3RUaW1lID0gdFRpbWU7IC8vIGlmIGEgdXNlciBnZXRzIHRoZSBpdGVyYXRpb24oKSBpbnNpZGUgdGhlIG9uUmVwZWF0LCBmb3IgZXhhbXBsZSwgaXQgc2hvdWxkIGJlIGFjY3VyYXRlLlxuXG4gICAgICAgICAgIXN1cHByZXNzRXZlbnRzICYmIHRoaXMucGFyZW50ICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uUmVwZWF0XCIpO1xuICAgICAgICAgIHRoaXMudmFycy5yZXBlYXRSZWZyZXNoICYmICFpc1lveW8gJiYgKHRoaXMuaW52YWxpZGF0ZSgpLl9sb2NrID0gMSk7XG5cbiAgICAgICAgICBpZiAocHJldlRpbWUgJiYgcHJldlRpbWUgIT09IHRoaXMuX3RpbWUgfHwgcHJldlBhdXNlZCAhPT0gIXRoaXMuX3RzIHx8IHRoaXMudmFycy5vblJlcGVhdCAmJiAhdGhpcy5wYXJlbnQgJiYgIXRoaXMuX2FjdCkge1xuICAgICAgICAgICAgLy8gaWYgcHJldlRpbWUgaXMgMCBhbmQgd2UgcmVuZGVyIGF0IHRoZSB2ZXJ5IGVuZCwgX3RpbWUgd2lsbCBiZSB0aGUgZW5kLCB0aHVzIHdvbid0IG1hdGNoLiBTbyBpbiB0aGlzIGVkZ2UgY2FzZSwgcHJldlRpbWUgd29uJ3QgbWF0Y2ggX3RpbWUgYnV0IHRoYXQncyBva2F5LiBJZiBpdCBnZXRzIGtpbGxlZCBpbiB0aGUgb25SZXBlYXQsIGVqZWN0IGFzIHdlbGwuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkdXIgPSB0aGlzLl9kdXI7IC8vIGluIGNhc2UgdGhlIGR1cmF0aW9uIGNoYW5nZWQgaW4gdGhlIG9uUmVwZWF0XG5cbiAgICAgICAgICB0RHVyID0gdGhpcy5fdER1cjtcblxuICAgICAgICAgIGlmIChkb2VzV3JhcCkge1xuICAgICAgICAgICAgdGhpcy5fbG9jayA9IDI7XG4gICAgICAgICAgICBwcmV2VGltZSA9IHJld2luZGluZyA/IGR1ciA6IC0wLjAwMDE7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcihwcmV2VGltZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnZhcnMucmVwZWF0UmVmcmVzaCAmJiAhaXNZb3lvICYmIHRoaXMuaW52YWxpZGF0ZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX2xvY2sgPSAwO1xuXG4gICAgICAgICAgaWYgKCF0aGlzLl90cyAmJiAhcHJldlBhdXNlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfSAvL2luIG9yZGVyIGZvciB5b3lvRWFzZSB0byB3b3JrIHByb3Blcmx5IHdoZW4gdGhlcmUncyBhIHN0YWdnZXIsIHdlIG11c3Qgc3dhcCBvdXQgdGhlIGVhc2UgaW4gZWFjaCBzdWItdHdlZW4uXG5cblxuICAgICAgICAgIF9wcm9wYWdhdGVZb3lvRWFzZSh0aGlzLCBpc1lveW8pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9oYXNQYXVzZSAmJiAhdGhpcy5fZm9yY2luZyAmJiB0aGlzLl9sb2NrIDwgMikge1xuICAgICAgICBwYXVzZVR3ZWVuID0gX2ZpbmROZXh0UGF1c2VUd2Vlbih0aGlzLCBfcm91bmRQcmVjaXNlKHByZXZUaW1lKSwgX3JvdW5kUHJlY2lzZSh0aW1lKSk7XG5cbiAgICAgICAgaWYgKHBhdXNlVHdlZW4pIHtcbiAgICAgICAgICB0VGltZSAtPSB0aW1lIC0gKHRpbWUgPSBwYXVzZVR3ZWVuLl9zdGFydCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTtcbiAgICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuICAgICAgdGhpcy5fYWN0ID0gIXRpbWVTY2FsZTsgLy9hcyBsb25nIGFzIGl0J3Mgbm90IHBhdXNlZCwgZm9yY2UgaXQgdG8gYmUgYWN0aXZlIHNvIHRoYXQgaWYgdGhlIHVzZXIgcmVuZGVycyBpbmRlcGVuZGVudCBvZiB0aGUgcGFyZW50IHRpbWVsaW5lLCBpdCdsbCBiZSBmb3JjZWQgdG8gcmUtcmVuZGVyIG9uIHRoZSBuZXh0IHRpY2suXG5cbiAgICAgIGlmICghdGhpcy5faW5pdHRlZCkge1xuICAgICAgICB0aGlzLl9vblVwZGF0ZSA9IHRoaXMudmFycy5vblVwZGF0ZTtcbiAgICAgICAgdGhpcy5faW5pdHRlZCA9IDE7XG4gICAgICAgIHRoaXMuX3pUaW1lID0gdG90YWxUaW1lO1xuICAgICAgICBwcmV2VGltZSA9IDA7IC8vIHVwb24gaW5pdCwgdGhlIHBsYXloZWFkIHNob3VsZCBhbHdheXMgZ28gZm9yd2FyZDsgc29tZW9uZSBjb3VsZCBpbnZhbGlkYXRlKCkgYSBjb21wbGV0ZWQgdGltZWxpbmUgYW5kIHRoZW4gaWYgdGhleSByZXN0YXJ0KCksIHRoYXQgd291bGQgbWFrZSBjaGlsZCB0d2VlbnMgcmVuZGVyIGluIHJldmVyc2Ugb3JkZXIgd2hpY2ggY291bGQgbG9jayBpbiB0aGUgd3Jvbmcgc3RhcnRpbmcgdmFsdWVzIGlmIHRoZXkgYnVpbGQgb24gZWFjaCBvdGhlciwgbGlrZSB0bC50byhvYmosIHt4OiAxMDB9KS50byhvYmosIHt4OiAwfSkuXG4gICAgICB9XG5cbiAgICAgIGlmICghcHJldlRpbWUgJiYgdGltZSAmJiAhc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgX2NhbGxiYWNrKHRoaXMsIFwib25TdGFydFwiKTtcblxuICAgICAgICBpZiAodGhpcy5fdFRpbWUgIT09IHRUaW1lKSB7XG4gICAgICAgICAgLy8gaW4gY2FzZSB0aGUgb25TdGFydCB0cmlnZ2VyZWQgYSByZW5kZXIgYXQgYSBkaWZmZXJlbnQgc3BvdCwgZWplY3QuIExpa2UgaWYgc29tZW9uZSBkaWQgYW5pbWF0aW9uLnBhdXNlKDAuNSkgb3Igc29tZXRoaW5nIGluc2lkZSB0aGUgb25TdGFydC5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGltZSA+PSBwcmV2VGltZSAmJiB0b3RhbFRpbWUgPj0gMCkge1xuICAgICAgICBjaGlsZCA9IHRoaXMuX2ZpcnN0O1xuXG4gICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgIG5leHQgPSBjaGlsZC5fbmV4dDtcblxuICAgICAgICAgIGlmICgoY2hpbGQuX2FjdCB8fCB0aW1lID49IGNoaWxkLl9zdGFydCkgJiYgY2hpbGQuX3RzICYmIHBhdXNlVHdlZW4gIT09IGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQucGFyZW50ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgIC8vIGFuIGV4dHJlbWUgZWRnZSBjYXNlIC0gdGhlIGNoaWxkJ3MgcmVuZGVyIGNvdWxkIGRvIHNvbWV0aGluZyBsaWtlIGtpbGwoKSB0aGUgXCJuZXh0XCIgb25lIGluIHRoZSBsaW5rZWQgbGlzdCwgb3IgcmVwYXJlbnQgaXQuIEluIHRoYXQgY2FzZSB3ZSBtdXN0IHJlLWluaXRpYXRlIHRoZSB3aG9sZSByZW5kZXIgdG8gYmUgc2FmZS5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGQucmVuZGVyKGNoaWxkLl90cyA+IDAgPyAodGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMgOiAoY2hpbGQuX2RpcnR5ID8gY2hpbGQudG90YWxEdXJhdGlvbigpIDogY2hpbGQuX3REdXIpICsgKHRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuXG4gICAgICAgICAgICBpZiAodGltZSAhPT0gdGhpcy5fdGltZSB8fCAhdGhpcy5fdHMgJiYgIXByZXZQYXVzZWQpIHtcbiAgICAgICAgICAgICAgLy9pbiBjYXNlIGEgdHdlZW4gcGF1c2VzIG9yIHNlZWtzIHRoZSB0aW1lbGluZSB3aGVuIHJlbmRlcmluZywgbGlrZSBpbnNpZGUgb2YgYW4gb25VcGRhdGUvb25Db21wbGV0ZVxuICAgICAgICAgICAgICBwYXVzZVR3ZWVuID0gMDtcbiAgICAgICAgICAgICAgbmV4dCAmJiAodFRpbWUgKz0gdGhpcy5felRpbWUgPSAtX3RpbnlOdW0pOyAvLyBpdCBkaWRuJ3QgZmluaXNoIHJlbmRlcmluZywgc28gZmxhZyB6VGltZSBhcyBuZWdhdGl2ZSBzbyB0aGF0IHNvIHRoYXQgdGhlIG5leHQgdGltZSByZW5kZXIoKSBpcyBjYWxsZWQgaXQnbGwgYmUgZm9yY2VkICh0byByZW5kZXIgYW55IHJlbWFpbmluZyBjaGlsZHJlbilcblxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZCA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gdGhpcy5fbGFzdDtcbiAgICAgICAgdmFyIGFkanVzdGVkVGltZSA9IHRvdGFsVGltZSA8IDAgPyB0b3RhbFRpbWUgOiB0aW1lOyAvL3doZW4gdGhlIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgYmV5b25kIHRoZSBzdGFydCBvZiB0aGlzIHRpbWVsaW5lLCB3ZSBtdXN0IHBhc3MgdGhhdCBpbmZvcm1hdGlvbiBkb3duIHRvIHRoZSBjaGlsZCBhbmltYXRpb25zIHNvIHRoYXQgemVyby1kdXJhdGlvbiB0d2VlbnMga25vdyB3aGV0aGVyIHRvIHJlbmRlciB0aGVpciBzdGFydGluZyBvciBlbmRpbmcgdmFsdWVzLlxuXG4gICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgIG5leHQgPSBjaGlsZC5fcHJldjtcblxuICAgICAgICAgIGlmICgoY2hpbGQuX2FjdCB8fCBhZGp1c3RlZFRpbWUgPD0gY2hpbGQuX2VuZCkgJiYgY2hpbGQuX3RzICYmIHBhdXNlVHdlZW4gIT09IGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQucGFyZW50ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgIC8vIGFuIGV4dHJlbWUgZWRnZSBjYXNlIC0gdGhlIGNoaWxkJ3MgcmVuZGVyIGNvdWxkIGRvIHNvbWV0aGluZyBsaWtlIGtpbGwoKSB0aGUgXCJuZXh0XCIgb25lIGluIHRoZSBsaW5rZWQgbGlzdCwgb3IgcmVwYXJlbnQgaXQuIEluIHRoYXQgY2FzZSB3ZSBtdXN0IHJlLWluaXRpYXRlIHRoZSB3aG9sZSByZW5kZXIgdG8gYmUgc2FmZS5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGQucmVuZGVyKGNoaWxkLl90cyA+IDAgPyAoYWRqdXN0ZWRUaW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cyA6IChjaGlsZC5fZGlydHkgPyBjaGlsZC50b3RhbER1cmF0aW9uKCkgOiBjaGlsZC5fdER1cikgKyAoYWRqdXN0ZWRUaW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cywgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblxuICAgICAgICAgICAgaWYgKHRpbWUgIT09IHRoaXMuX3RpbWUgfHwgIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICAgIC8vaW4gY2FzZSBhIHR3ZWVuIHBhdXNlcyBvciBzZWVrcyB0aGUgdGltZWxpbmUgd2hlbiByZW5kZXJpbmcsIGxpa2UgaW5zaWRlIG9mIGFuIG9uVXBkYXRlL29uQ29tcGxldGVcbiAgICAgICAgICAgICAgcGF1c2VUd2VlbiA9IDA7XG4gICAgICAgICAgICAgIG5leHQgJiYgKHRUaW1lICs9IHRoaXMuX3pUaW1lID0gYWRqdXN0ZWRUaW1lID8gLV90aW55TnVtIDogX3RpbnlOdW0pOyAvLyBpdCBkaWRuJ3QgZmluaXNoIHJlbmRlcmluZywgc28gYWRqdXN0IHpUaW1lIHNvIHRoYXQgc28gdGhhdCB0aGUgbmV4dCB0aW1lIHJlbmRlcigpIGlzIGNhbGxlZCBpdCdsbCBiZSBmb3JjZWQgKHRvIHJlbmRlciBhbnkgcmVtYWluaW5nIGNoaWxkcmVuKVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGF1c2VUd2VlbiAmJiAhc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICBwYXVzZVR3ZWVuLnJlbmRlcih0aW1lID49IHByZXZUaW1lID8gMCA6IC1fdGlueU51bSkuX3pUaW1lID0gdGltZSA+PSBwcmV2VGltZSA/IDEgOiAtMTtcblxuICAgICAgICBpZiAodGhpcy5fdHMpIHtcbiAgICAgICAgICAvL3RoZSBjYWxsYmFjayByZXN1bWVkIHBsYXliYWNrISBTbyBzaW5jZSB3ZSBtYXkgaGF2ZSBoZWxkIGJhY2sgdGhlIHBsYXloZWFkIGR1ZSB0byB3aGVyZSB0aGUgcGF1c2UgaXMgcG9zaXRpb25lZCwgZ28gYWhlYWQgYW5kIGp1bXAgdG8gd2hlcmUgaXQncyBTVVBQT1NFRCB0byBiZSAoaWYgbm8gcGF1c2UgaGFwcGVuZWQpLlxuICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gcHJldlN0YXJ0OyAvL2lmIHRoZSBwYXVzZSB3YXMgYXQgYW4gZWFybGllciB0aW1lIGFuZCB0aGUgdXNlciByZXN1bWVkIGluIHRoZSBjYWxsYmFjaywgaXQgY291bGQgcmVwb3NpdGlvbiB0aGUgdGltZWxpbmUgKGNoYW5naW5nIGl0cyBzdGFydFRpbWUpLCB0aHJvd2luZyB0aGluZ3Mgb2ZmIHNsaWdodGx5LCBzbyB3ZSBtYWtlIHN1cmUgdGhlIF9zdGFydCBkb2Vzbid0IHNoaWZ0LlxuXG4gICAgICAgICAgX3NldEVuZCh0aGlzKTtcblxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fb25VcGRhdGUgJiYgIXN1cHByZXNzRXZlbnRzICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uVXBkYXRlXCIsIHRydWUpO1xuICAgICAgaWYgKHRUaW1lID09PSB0RHVyICYmIHREdXIgPj0gdGhpcy50b3RhbER1cmF0aW9uKCkgfHwgIXRUaW1lICYmIHByZXZUaW1lKSBpZiAocHJldlN0YXJ0ID09PSB0aGlzLl9zdGFydCB8fCBNYXRoLmFicyh0aW1lU2NhbGUpICE9PSBNYXRoLmFicyh0aGlzLl90cykpIGlmICghdGhpcy5fbG9jaykge1xuICAgICAgICAodG90YWxUaW1lIHx8ICFkdXIpICYmICh0VGltZSA9PT0gdER1ciAmJiB0aGlzLl90cyA+IDAgfHwgIXRUaW1lICYmIHRoaXMuX3RzIDwgMCkgJiYgX3JlbW92ZUZyb21QYXJlbnQodGhpcywgMSk7IC8vIGRvbid0IHJlbW92ZSBpZiB0aGUgdGltZWxpbmUgaXMgcmV2ZXJzZWQgYW5kIHRoZSBwbGF5aGVhZCBpc24ndCBhdCAwLCBvdGhlcndpc2UgdGwucHJvZ3Jlc3MoMSkucmV2ZXJzZSgpIHdvbid0IHdvcmsuIE9ubHkgcmVtb3ZlIGlmIHRoZSBwbGF5aGVhZCBpcyBhdCB0aGUgZW5kIGFuZCB0aW1lU2NhbGUgaXMgcG9zaXRpdmUsIG9yIGlmIHRoZSBwbGF5aGVhZCBpcyBhdCAwIGFuZCB0aGUgdGltZVNjYWxlIGlzIG5lZ2F0aXZlLlxuXG4gICAgICAgIGlmICghc3VwcHJlc3NFdmVudHMgJiYgISh0b3RhbFRpbWUgPCAwICYmICFwcmV2VGltZSkgJiYgKHRUaW1lIHx8IHByZXZUaW1lIHx8ICF0RHVyKSkge1xuICAgICAgICAgIF9jYWxsYmFjayh0aGlzLCB0VGltZSA9PT0gdER1ciAmJiB0b3RhbFRpbWUgPj0gMCA/IFwib25Db21wbGV0ZVwiIDogXCJvblJldmVyc2VDb21wbGV0ZVwiLCB0cnVlKTtcblxuICAgICAgICAgIHRoaXMuX3Byb20gJiYgISh0VGltZSA8IHREdXIgJiYgdGhpcy50aW1lU2NhbGUoKSA+IDApICYmIHRoaXMuX3Byb20oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuYWRkID0gZnVuY3Rpb24gYWRkKGNoaWxkLCBwb3NpdGlvbikge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgX2lzTnVtYmVyKHBvc2l0aW9uKSB8fCAocG9zaXRpb24gPSBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbiwgY2hpbGQpKTtcblxuICAgIGlmICghKGNoaWxkIGluc3RhbmNlb2YgQW5pbWF0aW9uKSkge1xuICAgICAgaWYgKF9pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICBjaGlsZC5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmFkZChvYmosIHBvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2lzU3RyaW5nKGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRMYWJlbChjaGlsZCwgcG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2lzRnVuY3Rpb24oY2hpbGQpKSB7XG4gICAgICAgIGNoaWxkID0gVHdlZW4uZGVsYXllZENhbGwoMCwgY2hpbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMgIT09IGNoaWxkID8gX2FkZFRvVGltZWxpbmUodGhpcywgY2hpbGQsIHBvc2l0aW9uKSA6IHRoaXM7IC8vZG9uJ3QgYWxsb3cgYSB0aW1lbGluZSB0byBiZSBhZGRlZCB0byBpdHNlbGYgYXMgYSBjaGlsZCFcbiAgfTtcblxuICBfcHJvdG8yLmdldENoaWxkcmVuID0gZnVuY3Rpb24gZ2V0Q2hpbGRyZW4obmVzdGVkLCB0d2VlbnMsIHRpbWVsaW5lcywgaWdub3JlQmVmb3JlVGltZSkge1xuICAgIGlmIChuZXN0ZWQgPT09IHZvaWQgMCkge1xuICAgICAgbmVzdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHdlZW5zID09PSB2b2lkIDApIHtcbiAgICAgIHR3ZWVucyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVsaW5lcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0aW1lbGluZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpZ25vcmVCZWZvcmVUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIGlnbm9yZUJlZm9yZVRpbWUgPSAtX2JpZ051bTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IFtdLFxuICAgICAgICBjaGlsZCA9IHRoaXMuX2ZpcnN0O1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQuX3N0YXJ0ID49IGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVHdlZW4pIHtcbiAgICAgICAgICB0d2VlbnMgJiYgYS5wdXNoKGNoaWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aW1lbGluZXMgJiYgYS5wdXNoKGNoaWxkKTtcbiAgICAgICAgICBuZXN0ZWQgJiYgYS5wdXNoLmFwcGx5KGEsIGNoaWxkLmdldENoaWxkcmVuKHRydWUsIHR3ZWVucywgdGltZWxpbmVzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfTtcblxuICBfcHJvdG8yLmdldEJ5SWQgPSBmdW5jdGlvbiBnZXRCeUlkKGlkKSB7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSB0aGlzLmdldENoaWxkcmVuKDEsIDEsIDEpLFxuICAgICAgICBpID0gYW5pbWF0aW9ucy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAoYW5pbWF0aW9uc1tpXS52YXJzLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gYW5pbWF0aW9uc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMi5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoY2hpbGQpIHtcbiAgICBpZiAoX2lzU3RyaW5nKGNoaWxkKSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlTGFiZWwoY2hpbGQpO1xuICAgIH1cblxuICAgIGlmIChfaXNGdW5jdGlvbihjaGlsZCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmtpbGxUd2VlbnNPZihjaGlsZCk7XG4gICAgfVxuXG4gICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtKHRoaXMsIGNoaWxkKTtcblxuICAgIGlmIChjaGlsZCA9PT0gdGhpcy5fcmVjZW50KSB7XG4gICAgICB0aGlzLl9yZWNlbnQgPSB0aGlzLl9sYXN0O1xuICAgIH1cblxuICAgIHJldHVybiBfdW5jYWNoZSh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8yLnRvdGFsVGltZSA9IGZ1bmN0aW9uIHRvdGFsVGltZShfdG90YWxUaW1lMiwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90VGltZTtcbiAgICB9XG5cbiAgICB0aGlzLl9mb3JjaW5nID0gMTtcblxuICAgIGlmICghdGhpcy5fZHAgJiYgdGhpcy5fdHMpIHtcbiAgICAgIC8vc3BlY2lhbCBjYXNlIGZvciB0aGUgZ2xvYmFsIHRpbWVsaW5lIChvciBhbnkgb3RoZXIgdGhhdCBoYXMgbm8gcGFyZW50IG9yIGRldGFjaGVkIHBhcmVudCkuXG4gICAgICB0aGlzLl9zdGFydCA9IF9yb3VuZFByZWNpc2UoX3RpY2tlci50aW1lIC0gKHRoaXMuX3RzID4gMCA/IF90b3RhbFRpbWUyIC8gdGhpcy5fdHMgOiAodGhpcy50b3RhbER1cmF0aW9uKCkgLSBfdG90YWxUaW1lMikgLyAtdGhpcy5fdHMpKTtcbiAgICB9XG5cbiAgICBfQW5pbWF0aW9uLnByb3RvdHlwZS50b3RhbFRpbWUuY2FsbCh0aGlzLCBfdG90YWxUaW1lMiwgc3VwcHJlc3NFdmVudHMpO1xuXG4gICAgdGhpcy5fZm9yY2luZyA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5hZGRMYWJlbCA9IGZ1bmN0aW9uIGFkZExhYmVsKGxhYmVsLCBwb3NpdGlvbikge1xuICAgIHRoaXMubGFiZWxzW2xhYmVsXSA9IF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLnJlbW92ZUxhYmVsID0gZnVuY3Rpb24gcmVtb3ZlTGFiZWwobGFiZWwpIHtcbiAgICBkZWxldGUgdGhpcy5sYWJlbHNbbGFiZWxdO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuYWRkUGF1c2UgPSBmdW5jdGlvbiBhZGRQYXVzZShwb3NpdGlvbiwgY2FsbGJhY2ssIHBhcmFtcykge1xuICAgIHZhciB0ID0gVHdlZW4uZGVsYXllZENhbGwoMCwgY2FsbGJhY2sgfHwgX2VtcHR5RnVuYywgcGFyYW1zKTtcbiAgICB0LmRhdGEgPSBcImlzUGF1c2VcIjtcbiAgICB0aGlzLl9oYXNQYXVzZSA9IDE7XG4gICAgcmV0dXJuIF9hZGRUb1RpbWVsaW5lKHRoaXMsIHQsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSk7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW1vdmVQYXVzZSA9IGZ1bmN0aW9uIHJlbW92ZVBhdXNlKHBvc2l0aW9uKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG4gICAgcG9zaXRpb24gPSBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbik7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZC5fc3RhcnQgPT09IHBvc2l0aW9uICYmIGNoaWxkLmRhdGEgPT09IFwiaXNQYXVzZVwiKSB7XG4gICAgICAgIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkKTtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMi5raWxsVHdlZW5zT2YgPSBmdW5jdGlvbiBraWxsVHdlZW5zT2YodGFyZ2V0cywgcHJvcHMsIG9ubHlBY3RpdmUpIHtcbiAgICB2YXIgdHdlZW5zID0gdGhpcy5nZXRUd2VlbnNPZih0YXJnZXRzLCBvbmx5QWN0aXZlKSxcbiAgICAgICAgaSA9IHR3ZWVucy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBfb3ZlcndyaXRpbmdUd2VlbiAhPT0gdHdlZW5zW2ldICYmIHR3ZWVuc1tpXS5raWxsKHRhcmdldHMsIHByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmdldFR3ZWVuc09mID0gZnVuY3Rpb24gZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSkge1xuICAgIHZhciBhID0gW10sXG4gICAgICAgIHBhcnNlZFRhcmdldHMgPSB0b0FycmF5KHRhcmdldHMpLFxuICAgICAgICBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICBpc0dsb2JhbFRpbWUgPSBfaXNOdW1iZXIob25seUFjdGl2ZSksXG4gICAgICAgIC8vIGEgbnVtYmVyIGlzIGludGVycHJldGVkIGFzIGEgZ2xvYmFsIHRpbWUuIElmIHRoZSBhbmltYXRpb24gc3BhbnNcbiAgICBjaGlsZHJlbjtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVHdlZW4pIHtcbiAgICAgICAgaWYgKF9hcnJheUNvbnRhaW5zQW55KGNoaWxkLl90YXJnZXRzLCBwYXJzZWRUYXJnZXRzKSAmJiAoaXNHbG9iYWxUaW1lID8gKCFfb3ZlcndyaXRpbmdUd2VlbiB8fCBjaGlsZC5faW5pdHRlZCAmJiBjaGlsZC5fdHMpICYmIGNoaWxkLmdsb2JhbFRpbWUoMCkgPD0gb25seUFjdGl2ZSAmJiBjaGlsZC5nbG9iYWxUaW1lKGNoaWxkLnRvdGFsRHVyYXRpb24oKSkgPiBvbmx5QWN0aXZlIDogIW9ubHlBY3RpdmUgfHwgY2hpbGQuaXNBY3RpdmUoKSkpIHtcbiAgICAgICAgICAvLyBub3RlOiBpZiB0aGlzIGlzIGZvciBvdmVyd3JpdGluZywgaXQgc2hvdWxkIG9ubHkgYmUgZm9yIHR3ZWVucyB0aGF0IGFyZW4ndCBwYXVzZWQgYW5kIGFyZSBpbml0dGVkLlxuICAgICAgICAgIGEucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoKGNoaWxkcmVuID0gY2hpbGQuZ2V0VHdlZW5zT2YocGFyc2VkVGFyZ2V0cywgb25seUFjdGl2ZSkpLmxlbmd0aCkge1xuICAgICAgICBhLnB1c2guYXBwbHkoYSwgY2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9IC8vIHBvdGVudGlhbCBmdXR1cmUgZmVhdHVyZSAtIHRhcmdldHMoKSBvbiB0aW1lbGluZXNcbiAgLy8gdGFyZ2V0cygpIHtcbiAgLy8gXHRsZXQgcmVzdWx0ID0gW107XG4gIC8vIFx0dGhpcy5nZXRDaGlsZHJlbih0cnVlLCB0cnVlLCBmYWxzZSkuZm9yRWFjaCh0ID0+IHJlc3VsdC5wdXNoKC4uLnQudGFyZ2V0cygpKSk7XG4gIC8vIFx0cmV0dXJuIHJlc3VsdC5maWx0ZXIoKHYsIGkpID0+IHJlc3VsdC5pbmRleE9mKHYpID09PSBpKTtcbiAgLy8gfVxuICA7XG5cbiAgX3Byb3RvMi50d2VlblRvID0gZnVuY3Rpb24gdHdlZW5Ubyhwb3NpdGlvbiwgdmFycykge1xuICAgIHZhcnMgPSB2YXJzIHx8IHt9O1xuXG4gICAgdmFyIHRsID0gdGhpcyxcbiAgICAgICAgZW5kVGltZSA9IF9wYXJzZVBvc2l0aW9uKHRsLCBwb3NpdGlvbiksXG4gICAgICAgIF92YXJzID0gdmFycyxcbiAgICAgICAgc3RhcnRBdCA9IF92YXJzLnN0YXJ0QXQsXG4gICAgICAgIF9vblN0YXJ0ID0gX3ZhcnMub25TdGFydCxcbiAgICAgICAgb25TdGFydFBhcmFtcyA9IF92YXJzLm9uU3RhcnRQYXJhbXMsXG4gICAgICAgIGltbWVkaWF0ZVJlbmRlciA9IF92YXJzLmltbWVkaWF0ZVJlbmRlcixcbiAgICAgICAgaW5pdHRlZCxcbiAgICAgICAgdHdlZW4gPSBUd2Vlbi50byh0bCwgX3NldERlZmF1bHRzKHtcbiAgICAgIGVhc2U6IHZhcnMuZWFzZSB8fCBcIm5vbmVcIixcbiAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgaW1tZWRpYXRlUmVuZGVyOiBmYWxzZSxcbiAgICAgIHRpbWU6IGVuZFRpbWUsXG4gICAgICBvdmVyd3JpdGU6IFwiYXV0b1wiLFxuICAgICAgZHVyYXRpb246IHZhcnMuZHVyYXRpb24gfHwgTWF0aC5hYnMoKGVuZFRpbWUgLSAoc3RhcnRBdCAmJiBcInRpbWVcIiBpbiBzdGFydEF0ID8gc3RhcnRBdC50aW1lIDogdGwuX3RpbWUpKSAvIHRsLnRpbWVTY2FsZSgpKSB8fCBfdGlueU51bSxcbiAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgICAgIHRsLnBhdXNlKCk7XG5cbiAgICAgICAgaWYgKCFpbml0dGVkKSB7XG4gICAgICAgICAgdmFyIGR1cmF0aW9uID0gdmFycy5kdXJhdGlvbiB8fCBNYXRoLmFicygoZW5kVGltZSAtIChzdGFydEF0ICYmIFwidGltZVwiIGluIHN0YXJ0QXQgPyBzdGFydEF0LnRpbWUgOiB0bC5fdGltZSkpIC8gdGwudGltZVNjYWxlKCkpO1xuICAgICAgICAgIHR3ZWVuLl9kdXIgIT09IGR1cmF0aW9uICYmIF9zZXREdXJhdGlvbih0d2VlbiwgZHVyYXRpb24sIDAsIDEpLnJlbmRlcih0d2Vlbi5fdGltZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgaW5pdHRlZCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBfb25TdGFydCAmJiBfb25TdGFydC5hcHBseSh0d2Vlbiwgb25TdGFydFBhcmFtcyB8fCBbXSk7IC8vaW4gY2FzZSB0aGUgdXNlciBoYWQgYW4gb25TdGFydCBpbiB0aGUgdmFycyAtIHdlIGRvbid0IHdhbnQgdG8gb3ZlcndyaXRlIGl0LlxuICAgICAgfVxuICAgIH0sIHZhcnMpKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVSZW5kZXIgPyB0d2Vlbi5yZW5kZXIoMCkgOiB0d2VlbjtcbiAgfTtcblxuICBfcHJvdG8yLnR3ZWVuRnJvbVRvID0gZnVuY3Rpb24gdHdlZW5Gcm9tVG8oZnJvbVBvc2l0aW9uLCB0b1Bvc2l0aW9uLCB2YXJzKSB7XG4gICAgcmV0dXJuIHRoaXMudHdlZW5Ubyh0b1Bvc2l0aW9uLCBfc2V0RGVmYXVsdHMoe1xuICAgICAgc3RhcnRBdDoge1xuICAgICAgICB0aW1lOiBfcGFyc2VQb3NpdGlvbih0aGlzLCBmcm9tUG9zaXRpb24pXG4gICAgICB9XG4gICAgfSwgdmFycykpO1xuICB9O1xuXG4gIF9wcm90bzIucmVjZW50ID0gZnVuY3Rpb24gcmVjZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNlbnQ7XG4gIH07XG5cbiAgX3Byb3RvMi5uZXh0TGFiZWwgPSBmdW5jdGlvbiBuZXh0TGFiZWwoYWZ0ZXJUaW1lKSB7XG4gICAgaWYgKGFmdGVyVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBhZnRlclRpbWUgPSB0aGlzLl90aW1lO1xuICAgIH1cblxuICAgIHJldHVybiBfZ2V0TGFiZWxJbkRpcmVjdGlvbih0aGlzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBhZnRlclRpbWUpKTtcbiAgfTtcblxuICBfcHJvdG8yLnByZXZpb3VzTGFiZWwgPSBmdW5jdGlvbiBwcmV2aW91c0xhYmVsKGJlZm9yZVRpbWUpIHtcbiAgICBpZiAoYmVmb3JlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBiZWZvcmVUaW1lID0gdGhpcy5fdGltZTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2dldExhYmVsSW5EaXJlY3Rpb24odGhpcywgX3BhcnNlUG9zaXRpb24odGhpcywgYmVmb3JlVGltZSksIDEpO1xuICB9O1xuXG4gIF9wcm90bzIuY3VycmVudExhYmVsID0gZnVuY3Rpb24gY3VycmVudExhYmVsKHZhbHVlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnNlZWsodmFsdWUsIHRydWUpIDogdGhpcy5wcmV2aW91c0xhYmVsKHRoaXMuX3RpbWUgKyBfdGlueU51bSk7XG4gIH07XG5cbiAgX3Byb3RvMi5zaGlmdENoaWxkcmVuID0gZnVuY3Rpb24gc2hpZnRDaGlsZHJlbihhbW91bnQsIGFkanVzdExhYmVscywgaWdub3JlQmVmb3JlVGltZSkge1xuICAgIGlmIChpZ25vcmVCZWZvcmVUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIGlnbm9yZUJlZm9yZVRpbWUgPSAwO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICBsYWJlbHMgPSB0aGlzLmxhYmVscyxcbiAgICAgICAgcDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkLl9zdGFydCA+PSBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgICAgIGNoaWxkLl9zdGFydCArPSBhbW91bnQ7XG4gICAgICAgIGNoaWxkLl9lbmQgKz0gYW1vdW50O1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIGlmIChhZGp1c3RMYWJlbHMpIHtcbiAgICAgIGZvciAocCBpbiBsYWJlbHMpIHtcbiAgICAgICAgaWYgKGxhYmVsc1twXSA+PSBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgICAgICAgbGFiZWxzW3BdICs9IGFtb3VudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfdW5jYWNoZSh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8yLmludmFsaWRhdGUgPSBmdW5jdGlvbiBpbnZhbGlkYXRlKCkge1xuICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0O1xuICAgIHRoaXMuX2xvY2sgPSAwO1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBjaGlsZC5pbnZhbGlkYXRlKCk7XG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBfQW5pbWF0aW9uLnByb3RvdHlwZS5pbnZhbGlkYXRlLmNhbGwodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMi5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKGluY2x1ZGVMYWJlbHMpIHtcbiAgICBpZiAoaW5jbHVkZUxhYmVscyA9PT0gdm9pZCAwKSB7XG4gICAgICBpbmNsdWRlTGFiZWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdCxcbiAgICAgICAgbmV4dDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuICAgICAgdGhpcy5yZW1vdmUoY2hpbGQpO1xuICAgICAgY2hpbGQgPSBuZXh0O1xuICAgIH1cblxuICAgIHRoaXMuX2RwICYmICh0aGlzLl90aW1lID0gdGhpcy5fdFRpbWUgPSB0aGlzLl9wVGltZSA9IDApO1xuICAgIGluY2x1ZGVMYWJlbHMgJiYgKHRoaXMubGFiZWxzID0ge30pO1xuICAgIHJldHVybiBfdW5jYWNoZSh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8yLnRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiB0b3RhbER1cmF0aW9uKHZhbHVlKSB7XG4gICAgdmFyIG1heCA9IDAsXG4gICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICBjaGlsZCA9IHNlbGYuX2xhc3QsXG4gICAgICAgIHByZXZTdGFydCA9IF9iaWdOdW0sXG4gICAgICAgIHByZXYsXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBwYXJlbnQ7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHNlbGYudGltZVNjYWxlKChzZWxmLl9yZXBlYXQgPCAwID8gc2VsZi5kdXJhdGlvbigpIDogc2VsZi50b3RhbER1cmF0aW9uKCkpIC8gKHNlbGYucmV2ZXJzZWQoKSA/IC12YWx1ZSA6IHZhbHVlKSk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYuX2RpcnR5KSB7XG4gICAgICBwYXJlbnQgPSBzZWxmLnBhcmVudDtcblxuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIHByZXYgPSBjaGlsZC5fcHJldjsgLy9yZWNvcmQgaXQgaGVyZSBpbiBjYXNlIHRoZSB0d2VlbiBjaGFuZ2VzIHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZS4uLlxuXG4gICAgICAgIGNoaWxkLl9kaXJ0eSAmJiBjaGlsZC50b3RhbER1cmF0aW9uKCk7IC8vY291bGQgY2hhbmdlIHRoZSB0d2Vlbi5fc3RhcnRUaW1lLCBzbyBtYWtlIHN1cmUgdGhlIGFuaW1hdGlvbidzIGNhY2hlIGlzIGNsZWFuIGJlZm9yZSBhbmFseXppbmcgaXQuXG5cbiAgICAgICAgc3RhcnQgPSBjaGlsZC5fc3RhcnQ7XG5cbiAgICAgICAgaWYgKHN0YXJ0ID4gcHJldlN0YXJ0ICYmIHNlbGYuX3NvcnQgJiYgY2hpbGQuX3RzICYmICFzZWxmLl9sb2NrKSB7XG4gICAgICAgICAgLy9pbiBjYXNlIG9uZSBvZiB0aGUgdHdlZW5zIHNoaWZ0ZWQgb3V0IG9mIG9yZGVyLCBpdCBuZWVkcyB0byBiZSByZS1pbnNlcnRlZCBpbnRvIHRoZSBjb3JyZWN0IHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZVxuICAgICAgICAgIHNlbGYuX2xvY2sgPSAxOyAvL3ByZXZlbnQgZW5kbGVzcyByZWN1cnNpdmUgY2FsbHMgLSB0aGVyZSBhcmUgbWV0aG9kcyB0aGF0IGdldCB0cmlnZ2VyZWQgdGhhdCBjaGVjayBkdXJhdGlvbi90b3RhbER1cmF0aW9uIHdoZW4gd2UgYWRkKCkuXG5cbiAgICAgICAgICBfYWRkVG9UaW1lbGluZShzZWxmLCBjaGlsZCwgc3RhcnQgLSBjaGlsZC5fZGVsYXksIDEpLl9sb2NrID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2U3RhcnQgPSBzdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydCA8IDAgJiYgY2hpbGQuX3RzKSB7XG4gICAgICAgICAgLy9jaGlsZHJlbiBhcmVuJ3QgYWxsb3dlZCB0byBoYXZlIG5lZ2F0aXZlIHN0YXJ0VGltZXMgdW5sZXNzIHNtb290aENoaWxkVGltaW5nIGlzIHRydWUsIHNvIGFkanVzdCBoZXJlIGlmIG9uZSBpcyBmb3VuZC5cbiAgICAgICAgICBtYXggLT0gc3RhcnQ7XG5cbiAgICAgICAgICBpZiAoIXBhcmVudCAmJiAhc2VsZi5fZHAgfHwgcGFyZW50ICYmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZykge1xuICAgICAgICAgICAgc2VsZi5fc3RhcnQgKz0gc3RhcnQgLyBzZWxmLl90cztcbiAgICAgICAgICAgIHNlbGYuX3RpbWUgLT0gc3RhcnQ7XG4gICAgICAgICAgICBzZWxmLl90VGltZSAtPSBzdGFydDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLnNoaWZ0Q2hpbGRyZW4oLXN0YXJ0LCBmYWxzZSwgLTFlOTk5KTtcbiAgICAgICAgICBwcmV2U3RhcnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuX2VuZCA+IG1heCAmJiBjaGlsZC5fdHMgJiYgKG1heCA9IGNoaWxkLl9lbmQpO1xuICAgICAgICBjaGlsZCA9IHByZXY7XG4gICAgICB9XG5cbiAgICAgIF9zZXREdXJhdGlvbihzZWxmLCBzZWxmID09PSBfZ2xvYmFsVGltZWxpbmUgJiYgc2VsZi5fdGltZSA+IG1heCA/IHNlbGYuX3RpbWUgOiBtYXgsIDEsIDEpO1xuXG4gICAgICBzZWxmLl9kaXJ0eSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGYuX3REdXI7XG4gIH07XG5cbiAgVGltZWxpbmUudXBkYXRlUm9vdCA9IGZ1bmN0aW9uIHVwZGF0ZVJvb3QodGltZSkge1xuICAgIGlmIChfZ2xvYmFsVGltZWxpbmUuX3RzKSB7XG4gICAgICBfbGF6eVNhZmVSZW5kZXIoX2dsb2JhbFRpbWVsaW5lLCBfcGFyZW50VG9DaGlsZFRvdGFsVGltZSh0aW1lLCBfZ2xvYmFsVGltZWxpbmUpKTtcblxuICAgICAgX2xhc3RSZW5kZXJlZEZyYW1lID0gX3RpY2tlci5mcmFtZTtcbiAgICB9XG5cbiAgICBpZiAoX3RpY2tlci5mcmFtZSA+PSBfbmV4dEdDRnJhbWUpIHtcbiAgICAgIF9uZXh0R0NGcmFtZSArPSBfY29uZmlnLmF1dG9TbGVlcCB8fCAxMjA7XG4gICAgICB2YXIgY2hpbGQgPSBfZ2xvYmFsVGltZWxpbmUuX2ZpcnN0O1xuICAgICAgaWYgKCFjaGlsZCB8fCAhY2hpbGQuX3RzKSBpZiAoX2NvbmZpZy5hdXRvU2xlZXAgJiYgX3RpY2tlci5fbGlzdGVuZXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgd2hpbGUgKGNoaWxkICYmICFjaGlsZC5fdHMpIHtcbiAgICAgICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQgfHwgX3RpY2tlci5zbGVlcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVGltZWxpbmU7XG59KEFuaW1hdGlvbik7XG5cbl9zZXREZWZhdWx0cyhUaW1lbGluZS5wcm90b3R5cGUsIHtcbiAgX2xvY2s6IDAsXG4gIF9oYXNQYXVzZTogMCxcbiAgX2ZvcmNpbmc6IDBcbn0pO1xuXG52YXIgX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4gPSBmdW5jdGlvbiBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2Vlbih0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQsIHNldHRlciwgc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0pIHtcbiAgLy9ub3RlOiB3ZSBjYWxsIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuLmNhbGwodHdlZW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGEgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuICB2YXIgcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCB0YXJnZXQsIHByb3AsIDAsIDEsIF9yZW5kZXJDb21wbGV4U3RyaW5nLCBudWxsLCBzZXR0ZXIpLFxuICAgICAgaW5kZXggPSAwLFxuICAgICAgbWF0Y2hJbmRleCA9IDAsXG4gICAgICByZXN1bHQsXG4gICAgICBzdGFydE51bXMsXG4gICAgICBjb2xvcixcbiAgICAgIGVuZE51bSxcbiAgICAgIGNodW5rLFxuICAgICAgc3RhcnROdW0sXG4gICAgICBoYXNSYW5kb20sXG4gICAgICBhO1xuICBwdC5iID0gc3RhcnQ7XG4gIHB0LmUgPSBlbmQ7XG4gIHN0YXJ0ICs9IFwiXCI7IC8vZW5zdXJlIHZhbHVlcyBhcmUgc3RyaW5nc1xuXG4gIGVuZCArPSBcIlwiO1xuXG4gIGlmIChoYXNSYW5kb20gPSB+ZW5kLmluZGV4T2YoXCJyYW5kb20oXCIpKSB7XG4gICAgZW5kID0gX3JlcGxhY2VSYW5kb20oZW5kKTtcbiAgfVxuXG4gIGlmIChzdHJpbmdGaWx0ZXIpIHtcbiAgICBhID0gW3N0YXJ0LCBlbmRdO1xuICAgIHN0cmluZ0ZpbHRlcihhLCB0YXJnZXQsIHByb3ApOyAvL3Bhc3MgYW4gYXJyYXkgd2l0aCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyB2YWx1ZXMgYW5kIGxldCB0aGUgZmlsdGVyIGRvIHdoYXRldmVyIGl0IG5lZWRzIHRvIHRoZSB2YWx1ZXMuXG5cbiAgICBzdGFydCA9IGFbMF07XG4gICAgZW5kID0gYVsxXTtcbiAgfVxuXG4gIHN0YXJ0TnVtcyA9IHN0YXJ0Lm1hdGNoKF9jb21wbGV4U3RyaW5nTnVtRXhwKSB8fCBbXTtcblxuICB3aGlsZSAocmVzdWx0ID0gX2NvbXBsZXhTdHJpbmdOdW1FeHAuZXhlYyhlbmQpKSB7XG4gICAgZW5kTnVtID0gcmVzdWx0WzBdO1xuICAgIGNodW5rID0gZW5kLnN1YnN0cmluZyhpbmRleCwgcmVzdWx0LmluZGV4KTtcblxuICAgIGlmIChjb2xvcikge1xuICAgICAgY29sb3IgPSAoY29sb3IgKyAxKSAlIDU7XG4gICAgfSBlbHNlIGlmIChjaHVuay5zdWJzdHIoLTUpID09PSBcInJnYmEoXCIpIHtcbiAgICAgIGNvbG9yID0gMTtcbiAgICB9XG5cbiAgICBpZiAoZW5kTnVtICE9PSBzdGFydE51bXNbbWF0Y2hJbmRleCsrXSkge1xuICAgICAgc3RhcnROdW0gPSBwYXJzZUZsb2F0KHN0YXJ0TnVtc1ttYXRjaEluZGV4IC0gMV0pIHx8IDA7IC8vdGhlc2UgbmVzdGVkIFByb3BUd2VlbnMgYXJlIGhhbmRsZWQgaW4gYSBzcGVjaWFsIHdheSAtIHdlJ2xsIG5ldmVyIGFjdHVhbGx5IGNhbGwgYSByZW5kZXIgb3Igc2V0dGVyIG1ldGhvZCBvbiB0aGVtLiBXZSdsbCBqdXN0IGxvb3AgdGhyb3VnaCB0aGVtIGluIHRoZSBwYXJlbnQgY29tcGxleCBzdHJpbmcgUHJvcFR3ZWVuJ3MgcmVuZGVyIG1ldGhvZC5cblxuICAgICAgcHQuX3B0ID0ge1xuICAgICAgICBfbmV4dDogcHQuX3B0LFxuICAgICAgICBwOiBjaHVuayB8fCBtYXRjaEluZGV4ID09PSAxID8gY2h1bmsgOiBcIixcIixcbiAgICAgICAgLy9ub3RlOiBTVkcgc3BlYyBhbGxvd3Mgb21pc3Npb24gb2YgY29tbWEvc3BhY2Ugd2hlbiBhIG5lZ2F0aXZlIHNpZ24gaXMgd2VkZ2VkIGJldHdlZW4gdHdvIG51bWJlcnMsIGxpa2UgMi41LTUuMyBpbnN0ZWFkIG9mIDIuNSwtNS4zIGJ1dCB3aGVuIHR3ZWVuaW5nLCB0aGUgbmVnYXRpdmUgdmFsdWUgbWF5IHN3aXRjaCB0byBwb3NpdGl2ZSwgc28gd2UgaW5zZXJ0IHRoZSBjb21tYSBqdXN0IGluIGNhc2UuXG4gICAgICAgIHM6IHN0YXJ0TnVtLFxuICAgICAgICBjOiBlbmROdW0uY2hhckF0KDEpID09PSBcIj1cIiA/IHBhcnNlRmxvYXQoZW5kTnVtLnN1YnN0cigyKSkgKiAoZW5kTnVtLmNoYXJBdCgwKSA9PT0gXCItXCIgPyAtMSA6IDEpIDogcGFyc2VGbG9hdChlbmROdW0pIC0gc3RhcnROdW0sXG4gICAgICAgIG06IGNvbG9yICYmIGNvbG9yIDwgNCA/IE1hdGgucm91bmQgOiAwXG4gICAgICB9O1xuICAgICAgaW5kZXggPSBfY29tcGxleFN0cmluZ051bUV4cC5sYXN0SW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcHQuYyA9IGluZGV4IDwgZW5kLmxlbmd0aCA/IGVuZC5zdWJzdHJpbmcoaW5kZXgsIGVuZC5sZW5ndGgpIDogXCJcIjsgLy93ZSB1c2UgdGhlIFwiY1wiIG9mIHRoZSBQcm9wVHdlZW4gdG8gc3RvcmUgdGhlIGZpbmFsIHBhcnQgb2YgdGhlIHN0cmluZyAoYWZ0ZXIgdGhlIGxhc3QgbnVtYmVyKVxuXG4gIHB0LmZwID0gZnVuY1BhcmFtO1xuXG4gIGlmIChfcmVsRXhwLnRlc3QoZW5kKSB8fCBoYXNSYW5kb20pIHtcbiAgICBwdC5lID0gMDsgLy9pZiB0aGUgZW5kIHN0cmluZyBjb250YWlucyByZWxhdGl2ZSB2YWx1ZXMgb3IgZHluYW1pYyByYW5kb20oLi4uKSB2YWx1ZXMsIGRlbGV0ZSB0aGUgZW5kIGl0IHNvIHRoYXQgb24gdGhlIGZpbmFsIHJlbmRlciB3ZSBkb24ndCBhY3R1YWxseSBzZXQgaXQgdG8gdGhlIHN0cmluZyB3aXRoICs9IG9yIC09IGNoYXJhY3RlcnMgKGZvcmNlcyBpdCB0byB1c2UgdGhlIGNhbGN1bGF0ZWQgdmFsdWUpLlxuICB9XG5cbiAgdGhpcy5fcHQgPSBwdDsgLy9zdGFydCB0aGUgbGlua2VkIGxpc3Qgd2l0aCB0aGlzIG5ldyBQcm9wVHdlZW4uIFJlbWVtYmVyLCB3ZSBjYWxsIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuLmNhbGwodHdlZW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGEgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX2FkZFByb3BUd2VlbiA9IGZ1bmN0aW9uIF9hZGRQcm9wVHdlZW4odGFyZ2V0LCBwcm9wLCBzdGFydCwgZW5kLCBpbmRleCwgdGFyZ2V0cywgbW9kaWZpZXIsIHN0cmluZ0ZpbHRlciwgZnVuY1BhcmFtKSB7XG4gIF9pc0Z1bmN0aW9uKGVuZCkgJiYgKGVuZCA9IGVuZChpbmRleCB8fCAwLCB0YXJnZXQsIHRhcmdldHMpKTtcbiAgdmFyIGN1cnJlbnRWYWx1ZSA9IHRhcmdldFtwcm9wXSxcbiAgICAgIHBhcnNlZFN0YXJ0ID0gc3RhcnQgIT09IFwiZ2V0XCIgPyBzdGFydCA6ICFfaXNGdW5jdGlvbihjdXJyZW50VmFsdWUpID8gY3VycmVudFZhbHVlIDogZnVuY1BhcmFtID8gdGFyZ2V0W3Byb3AuaW5kZXhPZihcInNldFwiKSB8fCAhX2lzRnVuY3Rpb24odGFyZ2V0W1wiZ2V0XCIgKyBwcm9wLnN1YnN0cigzKV0pID8gcHJvcCA6IFwiZ2V0XCIgKyBwcm9wLnN1YnN0cigzKV0oZnVuY1BhcmFtKSA6IHRhcmdldFtwcm9wXSgpLFxuICAgICAgc2V0dGVyID0gIV9pc0Z1bmN0aW9uKGN1cnJlbnRWYWx1ZSkgPyBfc2V0dGVyUGxhaW4gOiBmdW5jUGFyYW0gPyBfc2V0dGVyRnVuY1dpdGhQYXJhbSA6IF9zZXR0ZXJGdW5jLFxuICAgICAgcHQ7XG5cbiAgaWYgKF9pc1N0cmluZyhlbmQpKSB7XG4gICAgaWYgKH5lbmQuaW5kZXhPZihcInJhbmRvbShcIikpIHtcbiAgICAgIGVuZCA9IF9yZXBsYWNlUmFuZG9tKGVuZCk7XG4gICAgfVxuXG4gICAgaWYgKGVuZC5jaGFyQXQoMSkgPT09IFwiPVwiKSB7XG4gICAgICBwdCA9IHBhcnNlRmxvYXQocGFyc2VkU3RhcnQpICsgcGFyc2VGbG9hdChlbmQuc3Vic3RyKDIpKSAqIChlbmQuY2hhckF0KDApID09PSBcIi1cIiA/IC0xIDogMSkgKyAoZ2V0VW5pdChwYXJzZWRTdGFydCkgfHwgMCk7XG5cbiAgICAgIGlmIChwdCB8fCBwdCA9PT0gMCkge1xuICAgICAgICAvLyB0byBhdm9pZCBpc05hTiwgbGlrZSBpZiBzb21lb25lIHBhc3NlcyBpbiBhIHZhbHVlIGxpa2UgXCIhPSB3aGF0ZXZlclwiXG4gICAgICAgIGVuZCA9IHB0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJzZWRTdGFydCAhPT0gZW5kKSB7XG4gICAgaWYgKCFpc05hTihwYXJzZWRTdGFydCAqIGVuZCkgJiYgZW5kICE9PSBcIlwiKSB7XG4gICAgICAvLyBmdW4gZmFjdDogYW55IG51bWJlciBtdWx0aXBsaWVkIGJ5IFwiXCIgaXMgZXZhbHVhdGVkIGFzIHRoZSBudW1iZXIgMCFcbiAgICAgIHB0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgdGFyZ2V0LCBwcm9wLCArcGFyc2VkU3RhcnQgfHwgMCwgZW5kIC0gKHBhcnNlZFN0YXJ0IHx8IDApLCB0eXBlb2YgY3VycmVudFZhbHVlID09PSBcImJvb2xlYW5cIiA/IF9yZW5kZXJCb29sZWFuIDogX3JlbmRlclBsYWluLCAwLCBzZXR0ZXIpO1xuICAgICAgZnVuY1BhcmFtICYmIChwdC5mcCA9IGZ1bmNQYXJhbSk7XG4gICAgICBtb2RpZmllciAmJiBwdC5tb2RpZmllcihtb2RpZmllciwgdGhpcywgdGFyZ2V0KTtcbiAgICAgIHJldHVybiB0aGlzLl9wdCA9IHB0O1xuICAgIH1cblxuICAgICFjdXJyZW50VmFsdWUgJiYgIShwcm9wIGluIHRhcmdldCkgJiYgX21pc3NpbmdQbHVnaW4ocHJvcCwgZW5kKTtcbiAgICByZXR1cm4gX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0aGlzLCB0YXJnZXQsIHByb3AsIHBhcnNlZFN0YXJ0LCBlbmQsIHNldHRlciwgc3RyaW5nRmlsdGVyIHx8IF9jb25maWcuc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0pO1xuICB9XG59LFxuICAgIC8vY3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZhcnMgb2JqZWN0IGFuZCBwcm9jZXNzZXMgYW55IGZ1bmN0aW9uLWJhc2VkIHZhbHVlcyAocHV0dGluZyB0aGUgcmVzdWx0aW5nIHZhbHVlcyBkaXJlY3RseSBpbnRvIHRoZSBjb3B5KSBhcyB3ZWxsIGFzIHN0cmluZ3Mgd2l0aCBcInJhbmRvbSgpXCIgaW4gdGhlbS4gSXQgZG9lcyBOT1QgcHJvY2VzcyByZWxhdGl2ZSB2YWx1ZXMuXG5fcHJvY2Vzc1ZhcnMgPSBmdW5jdGlvbiBfcHJvY2Vzc1ZhcnModmFycywgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cywgdHdlZW4pIHtcbiAgX2lzRnVuY3Rpb24odmFycykgJiYgKHZhcnMgPSBfcGFyc2VGdW5jT3JTdHJpbmcodmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpKTtcblxuICBpZiAoIV9pc09iamVjdCh2YXJzKSB8fCB2YXJzLnN0eWxlICYmIHZhcnMubm9kZVR5cGUgfHwgX2lzQXJyYXkodmFycykgfHwgX2lzVHlwZWRBcnJheSh2YXJzKSkge1xuICAgIHJldHVybiBfaXNTdHJpbmcodmFycykgPyBfcGFyc2VGdW5jT3JTdHJpbmcodmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpIDogdmFycztcbiAgfVxuXG4gIHZhciBjb3B5ID0ge30sXG4gICAgICBwO1xuXG4gIGZvciAocCBpbiB2YXJzKSB7XG4gICAgY29weVtwXSA9IF9wYXJzZUZ1bmNPclN0cmluZyh2YXJzW3BdLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cyk7XG4gIH1cblxuICByZXR1cm4gY29weTtcbn0sXG4gICAgX2NoZWNrUGx1Z2luID0gZnVuY3Rpb24gX2NoZWNrUGx1Z2luKHByb3BlcnR5LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykge1xuICB2YXIgcGx1Z2luLCBwdCwgcHRMb29rdXAsIGk7XG5cbiAgaWYgKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiAocGx1Z2luID0gbmV3IF9wbHVnaW5zW3Byb3BlcnR5XSgpKS5pbml0KHRhcmdldCwgcGx1Z2luLnJhd1ZhcnMgPyB2YXJzW3Byb3BlcnR5XSA6IF9wcm9jZXNzVmFycyh2YXJzW3Byb3BlcnR5XSwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cywgdHdlZW4pLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpICE9PSBmYWxzZSkge1xuICAgIHR3ZWVuLl9wdCA9IHB0ID0gbmV3IFByb3BUd2Vlbih0d2Vlbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIDAsIDEsIHBsdWdpbi5yZW5kZXIsIHBsdWdpbiwgMCwgcGx1Z2luLnByaW9yaXR5KTtcblxuICAgIGlmICh0d2VlbiAhPT0gX3F1aWNrVHdlZW4pIHtcbiAgICAgIHB0TG9va3VwID0gdHdlZW4uX3B0TG9va3VwW3R3ZWVuLl90YXJnZXRzLmluZGV4T2YodGFyZ2V0KV07IC8vbm90ZTogd2UgY2FuJ3QgdXNlIHR3ZWVuLl9wdExvb2t1cFtpbmRleF0gYmVjYXVzZSBmb3Igc3RhZ2dlcmVkIHR3ZWVucywgdGhlIGluZGV4IGZyb20gdGhlIGZ1bGxUYXJnZXRzIGFycmF5IHdvbid0IG1hdGNoIHdoYXQgaXQgaXMgaW4gZWFjaCBpbmRpdmlkdWFsIHR3ZWVuIHRoYXQgc3Bhd25zIGZyb20gdGhlIHN0YWdnZXIuXG5cbiAgICAgIGkgPSBwbHVnaW4uX3Byb3BzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBwdExvb2t1cFtwbHVnaW4uX3Byb3BzW2ldXSA9IHB0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwbHVnaW47XG59LFxuICAgIF9vdmVyd3JpdGluZ1R3ZWVuLFxuICAgIC8vc3RvcmUgYSByZWZlcmVuY2UgdGVtcG9yYXJpbHkgc28gd2UgY2FuIGF2b2lkIG92ZXJ3cml0aW5nIGl0c2VsZi5cbl9pbml0VHdlZW4gPSBmdW5jdGlvbiBfaW5pdFR3ZWVuKHR3ZWVuLCB0aW1lKSB7XG4gIHZhciB2YXJzID0gdHdlZW4udmFycyxcbiAgICAgIGVhc2UgPSB2YXJzLmVhc2UsXG4gICAgICBzdGFydEF0ID0gdmFycy5zdGFydEF0LFxuICAgICAgaW1tZWRpYXRlUmVuZGVyID0gdmFycy5pbW1lZGlhdGVSZW5kZXIsXG4gICAgICBsYXp5ID0gdmFycy5sYXp5LFxuICAgICAgb25VcGRhdGUgPSB2YXJzLm9uVXBkYXRlLFxuICAgICAgb25VcGRhdGVQYXJhbXMgPSB2YXJzLm9uVXBkYXRlUGFyYW1zLFxuICAgICAgY2FsbGJhY2tTY29wZSA9IHZhcnMuY2FsbGJhY2tTY29wZSxcbiAgICAgIHJ1bkJhY2t3YXJkcyA9IHZhcnMucnVuQmFja3dhcmRzLFxuICAgICAgeW95b0Vhc2UgPSB2YXJzLnlveW9FYXNlLFxuICAgICAga2V5ZnJhbWVzID0gdmFycy5rZXlmcmFtZXMsXG4gICAgICBhdXRvUmV2ZXJ0ID0gdmFycy5hdXRvUmV2ZXJ0LFxuICAgICAgZHVyID0gdHdlZW4uX2R1cixcbiAgICAgIHByZXZTdGFydEF0ID0gdHdlZW4uX3N0YXJ0QXQsXG4gICAgICB0YXJnZXRzID0gdHdlZW4uX3RhcmdldHMsXG4gICAgICBwYXJlbnQgPSB0d2Vlbi5wYXJlbnQsXG4gICAgICBmdWxsVGFyZ2V0cyA9IHBhcmVudCAmJiBwYXJlbnQuZGF0YSA9PT0gXCJuZXN0ZWRcIiA/IHBhcmVudC5wYXJlbnQuX3RhcmdldHMgOiB0YXJnZXRzLFxuICAgICAgYXV0b092ZXJ3cml0ZSA9IHR3ZWVuLl9vdmVyd3JpdGUgPT09IFwiYXV0b1wiICYmICFfc3VwcHJlc3NPdmVyd3JpdGVzLFxuICAgICAgdGwgPSB0d2Vlbi50aW1lbGluZSxcbiAgICAgIGNsZWFuVmFycyxcbiAgICAgIGksXG4gICAgICBwLFxuICAgICAgcHQsXG4gICAgICB0YXJnZXQsXG4gICAgICBoYXNQcmlvcml0eSxcbiAgICAgIGdzRGF0YSxcbiAgICAgIGhhcm5lc3MsXG4gICAgICBwbHVnaW4sXG4gICAgICBwdExvb2t1cCxcbiAgICAgIGluZGV4LFxuICAgICAgaGFybmVzc1ZhcnMsXG4gICAgICBvdmVyd3JpdHRlbjtcbiAgdGwgJiYgKCFrZXlmcmFtZXMgfHwgIWVhc2UpICYmIChlYXNlID0gXCJub25lXCIpO1xuICB0d2Vlbi5fZWFzZSA9IF9wYXJzZUVhc2UoZWFzZSwgX2RlZmF1bHRzLmVhc2UpO1xuICB0d2Vlbi5feUVhc2UgPSB5b3lvRWFzZSA/IF9pbnZlcnRFYXNlKF9wYXJzZUVhc2UoeW95b0Vhc2UgPT09IHRydWUgPyBlYXNlIDogeW95b0Vhc2UsIF9kZWZhdWx0cy5lYXNlKSkgOiAwO1xuXG4gIGlmICh5b3lvRWFzZSAmJiB0d2Vlbi5feW95byAmJiAhdHdlZW4uX3JlcGVhdCkge1xuICAgIC8vdGhlcmUgbXVzdCBoYXZlIGJlZW4gYSBwYXJlbnQgdGltZWxpbmUgd2l0aCB5b3lvOnRydWUgdGhhdCBpcyBjdXJyZW50bHkgaW4gaXRzIHlveW8gcGhhc2UsIHNvIGZsaXAgdGhlIGVhc2VzLlxuICAgIHlveW9FYXNlID0gdHdlZW4uX3lFYXNlO1xuICAgIHR3ZWVuLl95RWFzZSA9IHR3ZWVuLl9lYXNlO1xuICAgIHR3ZWVuLl9lYXNlID0geW95b0Vhc2U7XG4gIH1cblxuICB0d2Vlbi5fZnJvbSA9ICF0bCAmJiAhIXZhcnMucnVuQmFja3dhcmRzOyAvL25lc3RlZCB0aW1lbGluZXMgc2hvdWxkIG5ldmVyIHJ1biBiYWNrd2FyZHMgLSB0aGUgYmFja3dhcmRzLW5lc3MgaXMgaW4gdGhlIGNoaWxkIHR3ZWVucy5cblxuICBpZiAoIXRsKSB7XG4gICAgLy9pZiB0aGVyZSdzIGFuIGludGVybmFsIHRpbWVsaW5lLCBza2lwIGFsbCB0aGUgcGFyc2luZyBiZWNhdXNlIHdlIHBhc3NlZCB0aGF0IHRhc2sgZG93biB0aGUgY2hhaW4uXG4gICAgaGFybmVzcyA9IHRhcmdldHNbMF0gPyBfZ2V0Q2FjaGUodGFyZ2V0c1swXSkuaGFybmVzcyA6IDA7XG4gICAgaGFybmVzc1ZhcnMgPSBoYXJuZXNzICYmIHZhcnNbaGFybmVzcy5wcm9wXTsgLy9zb21lb25lIG1heSBuZWVkIHRvIHNwZWNpZnkgQ1NTLXNwZWNpZmljIHZhbHVlcyBBTkQgbm9uLUNTUyB2YWx1ZXMsIGxpa2UgaWYgdGhlIGVsZW1lbnQgaGFzIGFuIFwieFwiIHByb3BlcnR5IHBsdXMgaXQncyBhIHN0YW5kYXJkIERPTSBlbGVtZW50LiBXZSBhbGxvdyBwZW9wbGUgdG8gZGlzdGluZ3Vpc2ggYnkgd3JhcHBpbmcgcGx1Z2luLXNwZWNpZmljIHN0dWZmIGluIGEgY3NzOnt9IG9iamVjdCBmb3IgZXhhbXBsZS5cblxuICAgIGNsZWFuVmFycyA9IF9jb3B5RXhjbHVkaW5nKHZhcnMsIF9yZXNlcnZlZFByb3BzKTtcbiAgICBwcmV2U3RhcnRBdCAmJiBwcmV2U3RhcnRBdC5yZW5kZXIoLTEsIHRydWUpLmtpbGwoKTtcblxuICAgIGlmIChzdGFydEF0KSB7XG4gICAgICBfcmVtb3ZlRnJvbVBhcmVudCh0d2Vlbi5fc3RhcnRBdCA9IFR3ZWVuLnNldCh0YXJnZXRzLCBfc2V0RGVmYXVsdHMoe1xuICAgICAgICBkYXRhOiBcImlzU3RhcnRcIixcbiAgICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgIGltbWVkaWF0ZVJlbmRlcjogdHJ1ZSxcbiAgICAgICAgbGF6eTogX2lzTm90RmFsc2UobGF6eSksXG4gICAgICAgIHN0YXJ0QXQ6IG51bGwsXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBvblVwZGF0ZTogb25VcGRhdGUsXG4gICAgICAgIG9uVXBkYXRlUGFyYW1zOiBvblVwZGF0ZVBhcmFtcyxcbiAgICAgICAgY2FsbGJhY2tTY29wZTogY2FsbGJhY2tTY29wZSxcbiAgICAgICAgc3RhZ2dlcjogMFxuICAgICAgfSwgc3RhcnRBdCkpKTsgLy9jb3B5IHRoZSBwcm9wZXJ0aWVzL3ZhbHVlcyBpbnRvIGEgbmV3IG9iamVjdCB0byBhdm9pZCBjb2xsaXNpb25zLCBsaWtlIHZhciB0byA9IHt4OjB9LCBmcm9tID0ge3g6NTAwfTsgdGltZWxpbmUuZnJvbVRvKGUsIGZyb20sIHRvKS5mcm9tVG8oZSwgdG8sIGZyb20pO1xuXG5cbiAgICAgIHRpbWUgPCAwICYmICFpbW1lZGlhdGVSZW5kZXIgJiYgIWF1dG9SZXZlcnQgJiYgdHdlZW4uX3N0YXJ0QXQucmVuZGVyKC0xLCB0cnVlKTsgLy8gcmFyZSBlZGdlIGNhc2UsIGxpa2UgaWYgYSByZW5kZXIgaXMgZm9yY2VkIGluIHRoZSBuZWdhdGl2ZSBkaXJlY3Rpb24gb2YgYSBub24taW5pdHRlZCB0d2Vlbi5cblxuICAgICAgaWYgKGltbWVkaWF0ZVJlbmRlcikge1xuICAgICAgICB0aW1lID4gMCAmJiAhYXV0b1JldmVydCAmJiAodHdlZW4uX3N0YXJ0QXQgPSAwKTsgLy90d2VlbnMgdGhhdCByZW5kZXIgaW1tZWRpYXRlbHkgKGxpa2UgbW9zdCBmcm9tKCkgYW5kIGZyb21UbygpIHR3ZWVucykgc2hvdWxkbid0IHJldmVydCB3aGVuIHRoZWlyIHBhcmVudCB0aW1lbGluZSdzIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgcGFzdCB0aGUgc3RhcnRUaW1lIGJlY2F1c2UgdGhlIGluaXRpYWwgcmVuZGVyIGNvdWxkIGhhdmUgaGFwcGVuZWQgYW55dGltZSBhbmQgaXQgc2hvdWxkbid0IGJlIGRpcmVjdGx5IGNvcnJlbGF0ZWQgdG8gdGhpcyB0d2VlbidzIHN0YXJ0VGltZS4gSW1hZ2luZSBzZXR0aW5nIHVwIGEgY29tcGxleCBhbmltYXRpb24gd2hlcmUgdGhlIGJlZ2lubmluZyBzdGF0ZXMgb2YgdmFyaW91cyBvYmplY3RzIGFyZSByZW5kZXJlZCBpbW1lZGlhdGVseSBidXQgdGhlIHR3ZWVuIGRvZXNuJ3QgaGFwcGVuIGZvciBxdWl0ZSBzb21lIHRpbWUgLSBpZiB3ZSByZXZlcnQgdG8gdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcyBzb29uIGFzIHRoZSBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIHBhc3QgdGhlIHR3ZWVuJ3Mgc3RhcnRUaW1lLCBpdCB3aWxsIHRocm93IHRoaW5ncyBvZmYgdmlzdWFsbHkuIFJldmVyc2lvbiBzaG91bGQgb25seSBoYXBwZW4gaW4gVGltZWxpbmUgaW5zdGFuY2VzIHdoZXJlIGltbWVkaWF0ZVJlbmRlciB3YXMgZmFsc2Ugb3Igd2hlbiBhdXRvUmV2ZXJ0IGlzIGV4cGxpY2l0bHkgc2V0IHRvIHRydWUuXG5cbiAgICAgICAgaWYgKGR1ciAmJiB0aW1lIDw9IDApIHtcbiAgICAgICAgICB0aW1lICYmICh0d2Vlbi5felRpbWUgPSB0aW1lKTtcbiAgICAgICAgICByZXR1cm47IC8vd2Ugc2tpcCBpbml0aWFsaXphdGlvbiBoZXJlIHNvIHRoYXQgb3ZlcndyaXRpbmcgZG9lc24ndCBvY2N1ciB1bnRpbCB0aGUgdHdlZW4gYWN0dWFsbHkgYmVnaW5zLiBPdGhlcndpc2UsIGlmIHlvdSBjcmVhdGUgc2V2ZXJhbCBpbW1lZGlhdGVSZW5kZXI6dHJ1ZSB0d2VlbnMgb2YgdGhlIHNhbWUgdGFyZ2V0L3Byb3BlcnRpZXMgdG8gZHJvcCBpbnRvIGEgVGltZWxpbmUsIHRoZSBsYXN0IG9uZSBjcmVhdGVkIHdvdWxkIG92ZXJ3cml0ZSB0aGUgZmlyc3Qgb25lcyBiZWNhdXNlIHRoZXkgZGlkbid0IGdldCBwbGFjZWQgaW50byB0aGUgdGltZWxpbmUgeWV0IGJlZm9yZSB0aGUgZmlyc3QgcmVuZGVyIG9jY3VycyBhbmQga2lja3MgaW4gb3ZlcndyaXRpbmcuXG4gICAgICAgIH0gLy8gaWYgKHRpbWUgPiAwKSB7XG4gICAgICAgIC8vIFx0YXV0b1JldmVydCB8fCAodHdlZW4uX3N0YXJ0QXQgPSAwKTsgLy90d2VlbnMgdGhhdCByZW5kZXIgaW1tZWRpYXRlbHkgKGxpa2UgbW9zdCBmcm9tKCkgYW5kIGZyb21UbygpIHR3ZWVucykgc2hvdWxkbid0IHJldmVydCB3aGVuIHRoZWlyIHBhcmVudCB0aW1lbGluZSdzIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgcGFzdCB0aGUgc3RhcnRUaW1lIGJlY2F1c2UgdGhlIGluaXRpYWwgcmVuZGVyIGNvdWxkIGhhdmUgaGFwcGVuZWQgYW55dGltZSBhbmQgaXQgc2hvdWxkbid0IGJlIGRpcmVjdGx5IGNvcnJlbGF0ZWQgdG8gdGhpcyB0d2VlbidzIHN0YXJ0VGltZS4gSW1hZ2luZSBzZXR0aW5nIHVwIGEgY29tcGxleCBhbmltYXRpb24gd2hlcmUgdGhlIGJlZ2lubmluZyBzdGF0ZXMgb2YgdmFyaW91cyBvYmplY3RzIGFyZSByZW5kZXJlZCBpbW1lZGlhdGVseSBidXQgdGhlIHR3ZWVuIGRvZXNuJ3QgaGFwcGVuIGZvciBxdWl0ZSBzb21lIHRpbWUgLSBpZiB3ZSByZXZlcnQgdG8gdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcyBzb29uIGFzIHRoZSBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIHBhc3QgdGhlIHR3ZWVuJ3Mgc3RhcnRUaW1lLCBpdCB3aWxsIHRocm93IHRoaW5ncyBvZmYgdmlzdWFsbHkuIFJldmVyc2lvbiBzaG91bGQgb25seSBoYXBwZW4gaW4gVGltZWxpbmUgaW5zdGFuY2VzIHdoZXJlIGltbWVkaWF0ZVJlbmRlciB3YXMgZmFsc2Ugb3Igd2hlbiBhdXRvUmV2ZXJ0IGlzIGV4cGxpY2l0bHkgc2V0IHRvIHRydWUuXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoZHVyICYmICEodGltZSA8IDAgJiYgcHJldlN0YXJ0QXQpKSB7XG4gICAgICAgIC8vIFx0dGltZSAmJiAodHdlZW4uX3pUaW1lID0gdGltZSk7XG4gICAgICAgIC8vIFx0cmV0dXJuOyAvL3dlIHNraXAgaW5pdGlhbGl6YXRpb24gaGVyZSBzbyB0aGF0IG92ZXJ3cml0aW5nIGRvZXNuJ3Qgb2NjdXIgdW50aWwgdGhlIHR3ZWVuIGFjdHVhbGx5IGJlZ2lucy4gT3RoZXJ3aXNlLCBpZiB5b3UgY3JlYXRlIHNldmVyYWwgaW1tZWRpYXRlUmVuZGVyOnRydWUgdHdlZW5zIG9mIHRoZSBzYW1lIHRhcmdldC9wcm9wZXJ0aWVzIHRvIGRyb3AgaW50byBhIFRpbWVsaW5lLCB0aGUgbGFzdCBvbmUgY3JlYXRlZCB3b3VsZCBvdmVyd3JpdGUgdGhlIGZpcnN0IG9uZXMgYmVjYXVzZSB0aGV5IGRpZG4ndCBnZXQgcGxhY2VkIGludG8gdGhlIHRpbWVsaW5lIHlldCBiZWZvcmUgdGhlIGZpcnN0IHJlbmRlciBvY2N1cnMgYW5kIGtpY2tzIGluIG92ZXJ3cml0aW5nLlxuICAgICAgICAvLyB9XG5cbiAgICAgIH0gZWxzZSBpZiAoYXV0b1JldmVydCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdHdlZW4uX3N0YXJ0QXQgPSAwO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocnVuQmFja3dhcmRzICYmIGR1cikge1xuICAgICAgLy9mcm9tKCkgdHdlZW5zIG11c3QgYmUgaGFuZGxlZCB1bmlxdWVseTogdGhlaXIgYmVnaW5uaW5nIHZhbHVlcyBtdXN0IGJlIHJlbmRlcmVkIGJ1dCB3ZSBkb24ndCB3YW50IG92ZXJ3cml0aW5nIHRvIG9jY3VyIHlldCAod2hlbiB0aW1lIGlzIHN0aWxsIDApLiBXYWl0IHVudGlsIHRoZSB0d2VlbiBhY3R1YWxseSBiZWdpbnMgYmVmb3JlIGRvaW5nIGFsbCB0aGUgcm91dGluZXMgbGlrZSBvdmVyd3JpdGluZy4gQXQgdGhhdCB0aW1lLCB3ZSBzaG91bGQgcmVuZGVyIGF0IHRoZSBFTkQgb2YgdGhlIHR3ZWVuIHRvIGVuc3VyZSB0aGF0IHRoaW5ncyBpbml0aWFsaXplIGNvcnJlY3RseSAocmVtZW1iZXIsIGZyb20oKSB0d2VlbnMgZ28gYmFja3dhcmRzKVxuICAgICAgaWYgKHByZXZTdGFydEF0KSB7XG4gICAgICAgICFhdXRvUmV2ZXJ0ICYmICh0d2Vlbi5fc3RhcnRBdCA9IDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZSAmJiAoaW1tZWRpYXRlUmVuZGVyID0gZmFsc2UpOyAvL2luIHJhcmUgY2FzZXMgKGxpa2UgaWYgYSBmcm9tKCkgdHdlZW4gcnVucyBhbmQgdGhlbiBpcyBpbnZhbGlkYXRlKCktZWQpLCBpbW1lZGlhdGVSZW5kZXIgY291bGQgYmUgdHJ1ZSBidXQgdGhlIGluaXRpYWwgZm9yY2VkLXJlbmRlciBnZXRzIHNraXBwZWQsIHNvIHRoZXJlJ3Mgbm8gbmVlZCB0byBmb3JjZSB0aGUgcmVuZGVyIGluIHRoaXMgY29udGV4dCB3aGVuIHRoZSBfdGltZSBpcyBncmVhdGVyIHRoYW4gMFxuXG4gICAgICAgIHAgPSBfc2V0RGVmYXVsdHMoe1xuICAgICAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXG4gICAgICAgICAgZGF0YTogXCJpc0Zyb21TdGFydFwiLFxuICAgICAgICAgIC8vd2UgdGFnIHRoZSB0d2VlbiB3aXRoIGFzIFwiaXNGcm9tU3RhcnRcIiBzbyB0aGF0IGlmIFtpbnNpZGUgYSBwbHVnaW5dIHdlIG5lZWQgdG8gb25seSBkbyBzb21ldGhpbmcgYXQgdGhlIHZlcnkgRU5EIG9mIGEgdHdlZW4sIHdlIGhhdmUgYSB3YXkgb2YgaWRlbnRpZnlpbmcgdGhpcyB0d2VlbiBhcyBtZXJlbHkgdGhlIG9uZSB0aGF0J3Mgc2V0dGluZyB0aGUgYmVnaW5uaW5nIHZhbHVlcyBmb3IgYSBcImZyb20oKVwiIHR3ZWVuLiBGb3IgZXhhbXBsZSwgY2xlYXJQcm9wcyBpbiBDU1NQbHVnaW4gc2hvdWxkIG9ubHkgZ2V0IGFwcGxpZWQgYXQgdGhlIHZlcnkgRU5EIG9mIGEgdHdlZW4gYW5kIHdpdGhvdXQgdGhpcyB0YWcsIGZyb20oLi4ue2hlaWdodDoxMDAsIGNsZWFyUHJvcHM6XCJoZWlnaHRcIiwgZGVsYXk6MX0pIHdvdWxkIHdpcGUgdGhlIGhlaWdodCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSB0d2VlbiBhbmQgYWZ0ZXIgMSBzZWNvbmQsIGl0J2Qga2ljayBiYWNrIGluLlxuICAgICAgICAgIGxhenk6IGltbWVkaWF0ZVJlbmRlciAmJiBfaXNOb3RGYWxzZShsYXp5KSxcbiAgICAgICAgICBpbW1lZGlhdGVSZW5kZXI6IGltbWVkaWF0ZVJlbmRlcixcbiAgICAgICAgICAvL3plcm8tZHVyYXRpb24gdHdlZW5zIHJlbmRlciBpbW1lZGlhdGVseSBieSBkZWZhdWx0LCBidXQgaWYgd2UncmUgbm90IHNwZWNpZmljYWxseSBpbnN0cnVjdGVkIHRvIHJlbmRlciB0aGlzIHR3ZWVuIGltbWVkaWF0ZWx5LCB3ZSBzaG91bGQgc2tpcCB0aGlzIGFuZCBtZXJlbHkgX2luaXQoKSB0byByZWNvcmQgdGhlIHN0YXJ0aW5nIHZhbHVlcyAocmVuZGVyaW5nIHRoZW0gaW1tZWRpYXRlbHkgd291bGQgcHVzaCB0aGVtIHRvIGNvbXBsZXRpb24gd2hpY2ggaXMgd2FzdGVmdWwgaW4gdGhhdCBjYXNlIC0gd2UnZCBoYXZlIHRvIHJlbmRlcigtMSkgaW1tZWRpYXRlbHkgYWZ0ZXIpXG4gICAgICAgICAgc3RhZ2dlcjogMCxcbiAgICAgICAgICBwYXJlbnQ6IHBhcmVudCAvL2Vuc3VyZXMgdGhhdCBuZXN0ZWQgdHdlZW5zIHRoYXQgaGFkIGEgc3RhZ2dlciBhcmUgaGFuZGxlZCBwcm9wZXJseSwgbGlrZSBnc2FwLmZyb20oXCIuY2xhc3NcIiwge3k6Z3NhcC51dGlscy53cmFwKFstMTAwLDEwMF0pfSlcblxuICAgICAgICB9LCBjbGVhblZhcnMpO1xuICAgICAgICBoYXJuZXNzVmFycyAmJiAocFtoYXJuZXNzLnByb3BdID0gaGFybmVzc1ZhcnMpOyAvLyBpbiBjYXNlIHNvbWVvbmUgZG9lcyBzb21ldGhpbmcgbGlrZSAuZnJvbSguLi4sIHtjc3M6e319KVxuXG4gICAgICAgIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLl9zdGFydEF0ID0gVHdlZW4uc2V0KHRhcmdldHMsIHApKTtcblxuICAgICAgICB0aW1lIDwgMCAmJiB0d2Vlbi5fc3RhcnRBdC5yZW5kZXIoLTEsIHRydWUpOyAvLyByYXJlIGVkZ2UgY2FzZSwgbGlrZSBpZiBhIHJlbmRlciBpcyBmb3JjZWQgaW4gdGhlIG5lZ2F0aXZlIGRpcmVjdGlvbiBvZiBhIG5vbi1pbml0dGVkIGZyb20oKSB0d2Vlbi5cblxuICAgICAgICBpZiAoIWltbWVkaWF0ZVJlbmRlcikge1xuICAgICAgICAgIF9pbml0VHdlZW4odHdlZW4uX3N0YXJ0QXQsIF90aW55TnVtKTsgLy9lbnN1cmVzIHRoYXQgdGhlIGluaXRpYWwgdmFsdWVzIGFyZSByZWNvcmRlZFxuXG4gICAgICAgIH0gZWxzZSBpZiAoIXRpbWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0d2Vlbi5fcHQgPSAwO1xuICAgIGxhenkgPSBkdXIgJiYgX2lzTm90RmFsc2UobGF6eSkgfHwgbGF6eSAmJiAhZHVyO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRhcmdldCA9IHRhcmdldHNbaV07XG4gICAgICBnc0RhdGEgPSB0YXJnZXQuX2dzYXAgfHwgX2hhcm5lc3ModGFyZ2V0cylbaV0uX2dzYXA7XG4gICAgICB0d2Vlbi5fcHRMb29rdXBbaV0gPSBwdExvb2t1cCA9IHt9O1xuICAgICAgX2xhenlMb29rdXBbZ3NEYXRhLmlkXSAmJiBfbGF6eVR3ZWVucy5sZW5ndGggJiYgX2xhenlSZW5kZXIoKTsgLy9pZiBvdGhlciB0d2VlbnMgb2YgdGhlIHNhbWUgdGFyZ2V0IGhhdmUgcmVjZW50bHkgaW5pdHRlZCBidXQgaGF2ZW4ndCByZW5kZXJlZCB5ZXQsIHdlJ3ZlIGdvdCB0byBmb3JjZSB0aGUgcmVuZGVyIHNvIHRoYXQgdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcmUgY29ycmVjdCAoaW1hZ2luZSBwb3B1bGF0aW5nIGEgdGltZWxpbmUgd2l0aCBhIGJ1bmNoIG9mIHNlcXVlbnRpYWwgdHdlZW5zIGFuZCB0aGVuIGp1bXBpbmcgdG8gdGhlIGVuZClcblxuICAgICAgaW5kZXggPSBmdWxsVGFyZ2V0cyA9PT0gdGFyZ2V0cyA/IGkgOiBmdWxsVGFyZ2V0cy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICAgIGlmIChoYXJuZXNzICYmIChwbHVnaW4gPSBuZXcgaGFybmVzcygpKS5pbml0KHRhcmdldCwgaGFybmVzc1ZhcnMgfHwgY2xlYW5WYXJzLCB0d2VlbiwgaW5kZXgsIGZ1bGxUYXJnZXRzKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdHdlZW4uX3B0ID0gcHQgPSBuZXcgUHJvcFR3ZWVuKHR3ZWVuLl9wdCwgdGFyZ2V0LCBwbHVnaW4ubmFtZSwgMCwgMSwgcGx1Z2luLnJlbmRlciwgcGx1Z2luLCAwLCBwbHVnaW4ucHJpb3JpdHkpO1xuXG4gICAgICAgIHBsdWdpbi5fcHJvcHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIHB0TG9va3VwW25hbWVdID0gcHQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBsdWdpbi5wcmlvcml0eSAmJiAoaGFzUHJpb3JpdHkgPSAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFoYXJuZXNzIHx8IGhhcm5lc3NWYXJzKSB7XG4gICAgICAgIGZvciAocCBpbiBjbGVhblZhcnMpIHtcbiAgICAgICAgICBpZiAoX3BsdWdpbnNbcF0gJiYgKHBsdWdpbiA9IF9jaGVja1BsdWdpbihwLCBjbGVhblZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCBmdWxsVGFyZ2V0cykpKSB7XG4gICAgICAgICAgICBwbHVnaW4ucHJpb3JpdHkgJiYgKGhhc1ByaW9yaXR5ID0gMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHB0TG9va3VwW3BdID0gcHQgPSBfYWRkUHJvcFR3ZWVuLmNhbGwodHdlZW4sIHRhcmdldCwgcCwgXCJnZXRcIiwgY2xlYW5WYXJzW3BdLCBpbmRleCwgZnVsbFRhcmdldHMsIDAsIHZhcnMuc3RyaW5nRmlsdGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdHdlZW4uX29wICYmIHR3ZWVuLl9vcFtpXSAmJiB0d2Vlbi5raWxsKHRhcmdldCwgdHdlZW4uX29wW2ldKTtcblxuICAgICAgaWYgKGF1dG9PdmVyd3JpdGUgJiYgdHdlZW4uX3B0KSB7XG4gICAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gdHdlZW47XG5cbiAgICAgICAgX2dsb2JhbFRpbWVsaW5lLmtpbGxUd2VlbnNPZih0YXJnZXQsIHB0TG9va3VwLCB0d2Vlbi5nbG9iYWxUaW1lKHRpbWUpKTsgLy8gbWFrZSBzdXJlIHRoZSBvdmVyd3JpdGluZyBkb2Vzbid0IG92ZXJ3cml0ZSBUSElTIHR3ZWVuISEhXG5cblxuICAgICAgICBvdmVyd3JpdHRlbiA9ICF0d2Vlbi5wYXJlbnQ7XG4gICAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gMDtcbiAgICAgIH1cblxuICAgICAgdHdlZW4uX3B0ICYmIGxhenkgJiYgKF9sYXp5TG9va3VwW2dzRGF0YS5pZF0gPSAxKTtcbiAgICB9XG5cbiAgICBoYXNQcmlvcml0eSAmJiBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5KHR3ZWVuKTtcbiAgICB0d2Vlbi5fb25Jbml0ICYmIHR3ZWVuLl9vbkluaXQodHdlZW4pOyAvL3BsdWdpbnMgbGlrZSBSb3VuZFByb3BzIG11c3Qgd2FpdCB1bnRpbCBBTEwgb2YgdGhlIFByb3BUd2VlbnMgYXJlIGluc3RhbnRpYXRlZC4gSW4gdGhlIHBsdWdpbidzIGluaXQoKSBmdW5jdGlvbiwgaXQgc2V0cyB0aGUgX29uSW5pdCBvbiB0aGUgdHdlZW4gaW5zdGFuY2UuIE1heSBub3QgYmUgcHJldHR5L2ludHVpdGl2ZSwgYnV0IGl0J3MgZmFzdCBhbmQga2VlcHMgZmlsZSBzaXplIGRvd24uXG4gIH1cblxuICB0d2Vlbi5fb25VcGRhdGUgPSBvblVwZGF0ZTtcbiAgdHdlZW4uX2luaXR0ZWQgPSAoIXR3ZWVuLl9vcCB8fCB0d2Vlbi5fcHQpICYmICFvdmVyd3JpdHRlbjsgLy8gaWYgb3ZlcndyaXR0ZW5Qcm9wcyByZXN1bHRlZCBpbiB0aGUgZW50aXJlIHR3ZWVuIGJlaW5nIGtpbGxlZCwgZG8gTk9UIGZsYWcgaXQgYXMgaW5pdHRlZCBvciBlbHNlIGl0IG1heSByZW5kZXIgZm9yIG9uZSB0aWNrLlxufSxcbiAgICBfYWRkQWxpYXNlc1RvVmFycyA9IGZ1bmN0aW9uIF9hZGRBbGlhc2VzVG9WYXJzKHRhcmdldHMsIHZhcnMpIHtcbiAgdmFyIGhhcm5lc3MgPSB0YXJnZXRzWzBdID8gX2dldENhY2hlKHRhcmdldHNbMF0pLmhhcm5lc3MgOiAwLFxuICAgICAgcHJvcGVydHlBbGlhc2VzID0gaGFybmVzcyAmJiBoYXJuZXNzLmFsaWFzZXMsXG4gICAgICBjb3B5LFxuICAgICAgcCxcbiAgICAgIGksXG4gICAgICBhbGlhc2VzO1xuXG4gIGlmICghcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgcmV0dXJuIHZhcnM7XG4gIH1cblxuICBjb3B5ID0gX21lcmdlKHt9LCB2YXJzKTtcblxuICBmb3IgKHAgaW4gcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgaWYgKHAgaW4gY29weSkge1xuICAgICAgYWxpYXNlcyA9IHByb3BlcnR5QWxpYXNlc1twXS5zcGxpdChcIixcIik7XG4gICAgICBpID0gYWxpYXNlcy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29weVthbGlhc2VzW2ldXSA9IGNvcHlbcF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59LFxuICAgIF9wYXJzZUZ1bmNPclN0cmluZyA9IGZ1bmN0aW9uIF9wYXJzZUZ1bmNPclN0cmluZyh2YWx1ZSwgdHdlZW4sIGksIHRhcmdldCwgdGFyZ2V0cykge1xuICByZXR1cm4gX2lzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUuY2FsbCh0d2VlbiwgaSwgdGFyZ2V0LCB0YXJnZXRzKSA6IF9pc1N0cmluZyh2YWx1ZSkgJiYgfnZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIpID8gX3JlcGxhY2VSYW5kb20odmFsdWUpIDogdmFsdWU7XG59LFxuICAgIF9zdGFnZ2VyVHdlZW5Qcm9wcyA9IF9jYWxsYmFja05hbWVzICsgXCJyZXBlYXQscmVwZWF0RGVsYXkseW95byxyZXBlYXRSZWZyZXNoLHlveW9FYXNlXCIsXG4gICAgX3N0YWdnZXJQcm9wc1RvU2tpcCA9IChfc3RhZ2dlclR3ZWVuUHJvcHMgKyBcIixpZCxzdGFnZ2VyLGRlbGF5LGR1cmF0aW9uLHBhdXNlZCxzY3JvbGxUcmlnZ2VyXCIpLnNwbGl0KFwiLFwiKTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVFdFRU5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG5leHBvcnQgdmFyIFR3ZWVuID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQW5pbWF0aW9uMikge1xuICBfaW5oZXJpdHNMb29zZShUd2VlbiwgX0FuaW1hdGlvbjIpO1xuXG4gIGZ1bmN0aW9uIFR3ZWVuKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uLCBza2lwSW5oZXJpdCkge1xuICAgIHZhciBfdGhpczM7XG5cbiAgICBpZiAodHlwZW9mIHZhcnMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHBvc2l0aW9uLmR1cmF0aW9uID0gdmFycztcbiAgICAgIHZhcnMgPSBwb3NpdGlvbjtcbiAgICAgIHBvc2l0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBfdGhpczMgPSBfQW5pbWF0aW9uMi5jYWxsKHRoaXMsIHNraXBJbmhlcml0ID8gdmFycyA6IF9pbmhlcml0RGVmYXVsdHModmFycykpIHx8IHRoaXM7XG4gICAgdmFyIF90aGlzMyR2YXJzID0gX3RoaXMzLnZhcnMsXG4gICAgICAgIGR1cmF0aW9uID0gX3RoaXMzJHZhcnMuZHVyYXRpb24sXG4gICAgICAgIGRlbGF5ID0gX3RoaXMzJHZhcnMuZGVsYXksXG4gICAgICAgIGltbWVkaWF0ZVJlbmRlciA9IF90aGlzMyR2YXJzLmltbWVkaWF0ZVJlbmRlcixcbiAgICAgICAgc3RhZ2dlciA9IF90aGlzMyR2YXJzLnN0YWdnZXIsXG4gICAgICAgIG92ZXJ3cml0ZSA9IF90aGlzMyR2YXJzLm92ZXJ3cml0ZSxcbiAgICAgICAga2V5ZnJhbWVzID0gX3RoaXMzJHZhcnMua2V5ZnJhbWVzLFxuICAgICAgICBkZWZhdWx0cyA9IF90aGlzMyR2YXJzLmRlZmF1bHRzLFxuICAgICAgICBzY3JvbGxUcmlnZ2VyID0gX3RoaXMzJHZhcnMuc2Nyb2xsVHJpZ2dlcixcbiAgICAgICAgeW95b0Vhc2UgPSBfdGhpczMkdmFycy55b3lvRWFzZSxcbiAgICAgICAgcGFyZW50ID0gdmFycy5wYXJlbnQgfHwgX2dsb2JhbFRpbWVsaW5lLFxuICAgICAgICBwYXJzZWRUYXJnZXRzID0gKF9pc0FycmF5KHRhcmdldHMpIHx8IF9pc1R5cGVkQXJyYXkodGFyZ2V0cykgPyBfaXNOdW1iZXIodGFyZ2V0c1swXSkgOiBcImxlbmd0aFwiIGluIHZhcnMpID8gW3RhcmdldHNdIDogdG9BcnJheSh0YXJnZXRzKSxcbiAgICAgICAgdGwsXG4gICAgICAgIGksXG4gICAgICAgIGNvcHksXG4gICAgICAgIGwsXG4gICAgICAgIHAsXG4gICAgICAgIGN1clRhcmdldCxcbiAgICAgICAgc3RhZ2dlckZ1bmMsXG4gICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZTtcbiAgICBfdGhpczMuX3RhcmdldHMgPSBwYXJzZWRUYXJnZXRzLmxlbmd0aCA/IF9oYXJuZXNzKHBhcnNlZFRhcmdldHMpIDogX3dhcm4oXCJHU0FQIHRhcmdldCBcIiArIHRhcmdldHMgKyBcIiBub3QgZm91bmQuIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVwiLCAhX2NvbmZpZy5udWxsVGFyZ2V0V2FybikgfHwgW107XG4gICAgX3RoaXMzLl9wdExvb2t1cCA9IFtdOyAvL1Byb3BUd2VlbiBsb29rdXAuIEFuIGFycmF5IGNvbnRhaW5pbmcgYW4gb2JqZWN0IGZvciBlYWNoIHRhcmdldCwgaGF2aW5nIGtleXMgZm9yIGVhY2ggdHdlZW5pbmcgcHJvcGVydHlcblxuICAgIF90aGlzMy5fb3ZlcndyaXRlID0gb3ZlcndyaXRlO1xuXG4gICAgaWYgKGtleWZyYW1lcyB8fCBzdGFnZ2VyIHx8IF9pc0Z1bmNPclN0cmluZyhkdXJhdGlvbikgfHwgX2lzRnVuY09yU3RyaW5nKGRlbGF5KSkge1xuICAgICAgdmFycyA9IF90aGlzMy52YXJzO1xuICAgICAgdGwgPSBfdGhpczMudGltZWxpbmUgPSBuZXcgVGltZWxpbmUoe1xuICAgICAgICBkYXRhOiBcIm5lc3RlZFwiLFxuICAgICAgICBkZWZhdWx0czogZGVmYXVsdHMgfHwge31cbiAgICAgIH0pO1xuICAgICAgdGwua2lsbCgpO1xuICAgICAgdGwucGFyZW50ID0gdGwuX2RwID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpO1xuICAgICAgdGwuX3N0YXJ0ID0gMDtcblxuICAgICAgaWYgKGtleWZyYW1lcykge1xuICAgICAgICBfaW5oZXJpdERlZmF1bHRzKF9zZXREZWZhdWx0cyh0bC52YXJzLmRlZmF1bHRzLCB7XG4gICAgICAgICAgZWFzZTogXCJub25lXCJcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHN0YWdnZXIgPyBwYXJzZWRUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAgICAgICByZXR1cm4ga2V5ZnJhbWVzLmZvckVhY2goZnVuY3Rpb24gKGZyYW1lLCBqKSB7XG4gICAgICAgICAgICByZXR1cm4gdGwudG8odCwgZnJhbWUsIGogPyBcIj5cIiA6IGkgKiBzdGFnZ2VyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkgOiBrZXlmcmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZnJhbWUpIHtcbiAgICAgICAgICByZXR1cm4gdGwudG8ocGFyc2VkVGFyZ2V0cywgZnJhbWUsIFwiPlwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGg7XG4gICAgICAgIHN0YWdnZXJGdW5jID0gc3RhZ2dlciA/IGRpc3RyaWJ1dGUoc3RhZ2dlcikgOiBfZW1wdHlGdW5jO1xuXG4gICAgICAgIGlmIChfaXNPYmplY3Qoc3RhZ2dlcikpIHtcbiAgICAgICAgICAvL3VzZXJzIGNhbiBwYXNzIGluIGNhbGxiYWNrcyBsaWtlIG9uU3RhcnQvb25Db21wbGV0ZSBpbiB0aGUgc3RhZ2dlciBvYmplY3QuIFRoZXNlIHNob3VsZCBmaXJlIHdpdGggZWFjaCBpbmRpdmlkdWFsIHR3ZWVuLlxuICAgICAgICAgIGZvciAocCBpbiBzdGFnZ2VyKSB7XG4gICAgICAgICAgICBpZiAofl9zdGFnZ2VyVHdlZW5Qcm9wcy5pbmRleE9mKHApKSB7XG4gICAgICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZSB8fCAoc3RhZ2dlclZhcnNUb01lcmdlID0ge30pO1xuICAgICAgICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2VbcF0gPSBzdGFnZ2VyW3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBjb3B5ID0ge307XG5cbiAgICAgICAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgICAgICAgaWYgKF9zdGFnZ2VyUHJvcHNUb1NraXAuaW5kZXhPZihwKSA8IDApIHtcbiAgICAgICAgICAgICAgY29weVtwXSA9IHZhcnNbcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29weS5zdGFnZ2VyID0gMDtcbiAgICAgICAgICB5b3lvRWFzZSAmJiAoY29weS55b3lvRWFzZSA9IHlveW9FYXNlKTtcbiAgICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2UgJiYgX21lcmdlKGNvcHksIHN0YWdnZXJWYXJzVG9NZXJnZSk7XG4gICAgICAgICAgY3VyVGFyZ2V0ID0gcGFyc2VkVGFyZ2V0c1tpXTsgLy9kb24ndCBqdXN0IGNvcHkgZHVyYXRpb24gb3IgZGVsYXkgYmVjYXVzZSBpZiB0aGV5J3JlIGEgc3RyaW5nIG9yIGZ1bmN0aW9uLCB3ZSdkIGVuZCB1cCBpbiBhbiBpbmZpbml0ZSBsb29wIGJlY2F1c2UgX2lzRnVuY09yU3RyaW5nKCkgd291bGQgZXZhbHVhdGUgYXMgdHJ1ZSBpbiB0aGUgY2hpbGQgdHdlZW5zLCBlbnRlcmluZyB0aGlzIGxvb3AsIGV0Yy4gU28gd2UgcGFyc2UgdGhlIHZhbHVlIHN0cmFpZ2h0IGZyb20gdmFycyBhbmQgZGVmYXVsdCB0byAwLlxuXG4gICAgICAgICAgY29weS5kdXJhdGlvbiA9ICtfcGFyc2VGdW5jT3JTdHJpbmcoZHVyYXRpb24sIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgaSwgY3VyVGFyZ2V0LCBwYXJzZWRUYXJnZXRzKTtcbiAgICAgICAgICBjb3B5LmRlbGF5ID0gKCtfcGFyc2VGdW5jT3JTdHJpbmcoZGVsYXksIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgaSwgY3VyVGFyZ2V0LCBwYXJzZWRUYXJnZXRzKSB8fCAwKSAtIF90aGlzMy5fZGVsYXk7XG5cbiAgICAgICAgICBpZiAoIXN0YWdnZXIgJiYgbCA9PT0gMSAmJiBjb3B5LmRlbGF5KSB7XG4gICAgICAgICAgICAvLyBpZiBzb21lb25lIGRvZXMgZGVsYXk6XCJyYW5kb20oMSwgNSlcIiwgcmVwZWF0Oi0xLCBmb3IgZXhhbXBsZSwgdGhlIGRlbGF5IHNob3VsZG4ndCBiZSBpbnNpZGUgdGhlIHJlcGVhdC5cbiAgICAgICAgICAgIF90aGlzMy5fZGVsYXkgPSBkZWxheSA9IGNvcHkuZGVsYXk7XG4gICAgICAgICAgICBfdGhpczMuX3N0YXJ0ICs9IGRlbGF5O1xuICAgICAgICAgICAgY29weS5kZWxheSA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGwudG8oY3VyVGFyZ2V0LCBjb3B5LCBzdGFnZ2VyRnVuYyhpLCBjdXJUYXJnZXQsIHBhcnNlZFRhcmdldHMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRsLmR1cmF0aW9uKCkgPyBkdXJhdGlvbiA9IGRlbGF5ID0gMCA6IF90aGlzMy50aW1lbGluZSA9IDA7IC8vIGlmIHRoZSB0aW1lbGluZSdzIGR1cmF0aW9uIGlzIDAsIHdlIGRvbid0IG5lZWQgYSB0aW1lbGluZSBpbnRlcm5hbGx5IVxuICAgICAgfVxuXG4gICAgICBkdXJhdGlvbiB8fCBfdGhpczMuZHVyYXRpb24oZHVyYXRpb24gPSB0bC5kdXJhdGlvbigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMzLnRpbWVsaW5lID0gMDsgLy9zcGVlZCBvcHRpbWl6YXRpb24sIGZhc3RlciBsb29rdXBzIChubyBnb2luZyB1cCB0aGUgcHJvdG90eXBlIGNoYWluKVxuICAgIH1cblxuICAgIGlmIChvdmVyd3JpdGUgPT09IHRydWUgJiYgIV9zdXBwcmVzc092ZXJ3cml0ZXMpIHtcbiAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpO1xuXG4gICAgICBfZ2xvYmFsVGltZWxpbmUua2lsbFR3ZWVuc09mKHBhcnNlZFRhcmdldHMpO1xuXG4gICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IDA7XG4gICAgfVxuXG4gICAgX2FkZFRvVGltZWxpbmUocGFyZW50LCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIHBvc2l0aW9uKTtcblxuICAgIHZhcnMucmV2ZXJzZWQgJiYgX3RoaXMzLnJldmVyc2UoKTtcbiAgICB2YXJzLnBhdXNlZCAmJiBfdGhpczMucGF1c2VkKHRydWUpO1xuXG4gICAgaWYgKGltbWVkaWF0ZVJlbmRlciB8fCAhZHVyYXRpb24gJiYgIWtleWZyYW1lcyAmJiBfdGhpczMuX3N0YXJ0ID09PSBfcm91bmRQcmVjaXNlKHBhcmVudC5fdGltZSkgJiYgX2lzTm90RmFsc2UoaW1tZWRpYXRlUmVuZGVyKSAmJiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpKSAmJiBwYXJlbnQuZGF0YSAhPT0gXCJuZXN0ZWRcIikge1xuICAgICAgX3RoaXMzLl90VGltZSA9IC1fdGlueU51bTsgLy9mb3JjZXMgYSByZW5kZXIgd2l0aG91dCBoYXZpbmcgdG8gc2V0IHRoZSByZW5kZXIoKSBcImZvcmNlXCIgcGFyYW1ldGVyIHRvIHRydWUgYmVjYXVzZSB3ZSB3YW50IHRvIGFsbG93IGxhenlpbmcgYnkgZGVmYXVsdCAodXNpbmcgdGhlIFwiZm9yY2VcIiBwYXJhbWV0ZXIgYWx3YXlzIGZvcmNlcyBhbiBpbW1lZGlhdGUgZnVsbCByZW5kZXIpXG5cbiAgICAgIF90aGlzMy5yZW5kZXIoTWF0aC5tYXgoMCwgLWRlbGF5KSk7IC8vaW4gY2FzZSBkZWxheSBpcyBuZWdhdGl2ZVxuXG4gICAgfVxuXG4gICAgc2Nyb2xsVHJpZ2dlciAmJiBfc2Nyb2xsVHJpZ2dlcihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIHNjcm9sbFRyaWdnZXIpO1xuICAgIHJldHVybiBfdGhpczM7XG4gIH1cblxuICB2YXIgX3Byb3RvMyA9IFR3ZWVuLnByb3RvdHlwZTtcblxuICBfcHJvdG8zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICAgIHZhciBwcmV2VGltZSA9IHRoaXMuX3RpbWUsXG4gICAgICAgIHREdXIgPSB0aGlzLl90RHVyLFxuICAgICAgICBkdXIgPSB0aGlzLl9kdXIsXG4gICAgICAgIHRUaW1lID0gdG90YWxUaW1lID4gdER1ciAtIF90aW55TnVtICYmIHRvdGFsVGltZSA+PSAwID8gdER1ciA6IHRvdGFsVGltZSA8IF90aW55TnVtID8gMCA6IHRvdGFsVGltZSxcbiAgICAgICAgdGltZSxcbiAgICAgICAgcHQsXG4gICAgICAgIGl0ZXJhdGlvbixcbiAgICAgICAgY3ljbGVEdXJhdGlvbixcbiAgICAgICAgcHJldkl0ZXJhdGlvbixcbiAgICAgICAgaXNZb3lvLFxuICAgICAgICByYXRpbyxcbiAgICAgICAgdGltZWxpbmUsXG4gICAgICAgIHlveW9FYXNlO1xuXG4gICAgaWYgKCFkdXIpIHtcbiAgICAgIF9yZW5kZXJaZXJvRHVyYXRpb25Ud2Vlbih0aGlzLCB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgfSBlbHNlIGlmICh0VGltZSAhPT0gdGhpcy5fdFRpbWUgfHwgIXRvdGFsVGltZSB8fCBmb3JjZSB8fCAhdGhpcy5faW5pdHRlZCAmJiB0aGlzLl90VGltZSB8fCB0aGlzLl9zdGFydEF0ICYmIHRoaXMuX3pUaW1lIDwgMCAhPT0gdG90YWxUaW1lIDwgMCkge1xuICAgICAgLy90aGlzIHNlbnNlcyBpZiB3ZSdyZSBjcm9zc2luZyBvdmVyIHRoZSBzdGFydCB0aW1lLCBpbiB3aGljaCBjYXNlIHdlIG11c3QgcmVjb3JkIF96VGltZSBhbmQgZm9yY2UgdGhlIHJlbmRlciwgYnV0IHdlIGRvIGl0IGluIHRoaXMgbGVuZ3RoeSBjb25kaXRpb25hbCB3YXkgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgKHVzdWFsbHkgd2UgY2FuIHNraXAgdGhlIGNhbGN1bGF0aW9ucyk6IHRoaXMuX2luaXR0ZWQgJiYgKHRoaXMuX3pUaW1lIDwgMCkgIT09ICh0b3RhbFRpbWUgPCAwKVxuICAgICAgdGltZSA9IHRUaW1lO1xuICAgICAgdGltZWxpbmUgPSB0aGlzLnRpbWVsaW5lO1xuXG4gICAgICBpZiAodGhpcy5fcmVwZWF0KSB7XG4gICAgICAgIC8vYWRqdXN0IHRoZSB0aW1lIGZvciByZXBlYXRzIGFuZCB5b3lvc1xuICAgICAgICBjeWNsZUR1cmF0aW9uID0gZHVyICsgdGhpcy5fckRlbGF5O1xuXG4gICAgICAgIGlmICh0aGlzLl9yZXBlYXQgPCAtMSAmJiB0b3RhbFRpbWUgPCAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudG90YWxUaW1lKGN5Y2xlRHVyYXRpb24gKiAxMDAgKyB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lID0gX3JvdW5kUHJlY2lzZSh0VGltZSAlIGN5Y2xlRHVyYXRpb24pOyAvL3JvdW5kIHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IGVycm9ycy4gKDQgJSAwLjggc2hvdWxkIGJlIDAgYnV0IHNvbWUgYnJvd3NlcnMgcmVwb3J0IGl0IGFzIDAuNzk5OTk5OTkhKVxuXG4gICAgICAgIGlmICh0VGltZSA9PT0gdER1cikge1xuICAgICAgICAgIC8vIHRoZSB0RHVyID09PSB0VGltZSBpcyBmb3IgZWRnZSBjYXNlcyB3aGVyZSB0aGVyZSdzIGEgbGVuZ3RoeSBkZWNpbWFsIG9uIHRoZSBkdXJhdGlvbiBhbmQgaXQgbWF5IHJlYWNoIHRoZSB2ZXJ5IGVuZCBidXQgdGhlIHRpbWUgaXMgcmVuZGVyZWQgYXMgbm90LXF1aXRlLXRoZXJlIChyZW1lbWJlciwgdER1ciBpcyByb3VuZGVkIHRvIDQgZGVjaW1hbHMgd2hlcmVhcyBkdXIgaXNuJ3QpXG4gICAgICAgICAgaXRlcmF0aW9uID0gdGhpcy5fcmVwZWF0O1xuICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlcmF0aW9uID0gfn4odFRpbWUgLyBjeWNsZUR1cmF0aW9uKTtcblxuICAgICAgICAgIGlmIChpdGVyYXRpb24gJiYgaXRlcmF0aW9uID09PSB0VGltZSAvIGN5Y2xlRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgICAgICBpdGVyYXRpb24tLTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aW1lID4gZHVyICYmICh0aW1lID0gZHVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzWW95byA9IHRoaXMuX3lveW8gJiYgaXRlcmF0aW9uICYgMTtcblxuICAgICAgICBpZiAoaXNZb3lvKSB7XG4gICAgICAgICAgeW95b0Vhc2UgPSB0aGlzLl95RWFzZTtcbiAgICAgICAgICB0aW1lID0gZHVyIC0gdGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZJdGVyYXRpb24gPSBfYW5pbWF0aW9uQ3ljbGUodGhpcy5fdFRpbWUsIGN5Y2xlRHVyYXRpb24pO1xuXG4gICAgICAgIGlmICh0aW1lID09PSBwcmV2VGltZSAmJiAhZm9yY2UgJiYgdGhpcy5faW5pdHRlZCkge1xuICAgICAgICAgIC8vY291bGQgYmUgZHVyaW5nIHRoZSByZXBlYXREZWxheSBwYXJ0LiBObyBuZWVkIHRvIHJlbmRlciBhbmQgZmlyZSBjYWxsYmFja3MuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlcmF0aW9uICE9PSBwcmV2SXRlcmF0aW9uKSB7XG4gICAgICAgICAgdGltZWxpbmUgJiYgdGhpcy5feUVhc2UgJiYgX3Byb3BhZ2F0ZVlveW9FYXNlKHRpbWVsaW5lLCBpc1lveW8pOyAvL3JlcGVhdFJlZnJlc2ggZnVuY3Rpb25hbGl0eVxuXG4gICAgICAgICAgaWYgKHRoaXMudmFycy5yZXBlYXRSZWZyZXNoICYmICFpc1lveW8gJiYgIXRoaXMuX2xvY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2xvY2sgPSBmb3JjZSA9IDE7IC8vZm9yY2UsIG90aGVyd2lzZSBpZiBsYXp5IGlzIHRydWUsIHRoZSBfYXR0ZW1wdEluaXRUd2VlbigpIHdpbGwgcmV0dXJuIGFuZCB3ZSdsbCBqdW1wIG91dCBhbmQgZ2V0IGNhdWdodCBib3VuY2luZyBvbiBlYWNoIHRpY2suXG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyKF9yb3VuZFByZWNpc2UoY3ljbGVEdXJhdGlvbiAqIGl0ZXJhdGlvbiksIHRydWUpLmludmFsaWRhdGUoKS5fbG9jayA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5faW5pdHRlZCkge1xuICAgICAgICBpZiAoX2F0dGVtcHRJbml0VHdlZW4odGhpcywgdG90YWxUaW1lIDwgMCA/IHRvdGFsVGltZSA6IHRpbWUsIGZvcmNlLCBzdXBwcmVzc0V2ZW50cykpIHtcbiAgICAgICAgICB0aGlzLl90VGltZSA9IDA7IC8vIGluIGNvbnN0cnVjdG9yIGlmIGltbWVkaWF0ZVJlbmRlciBpcyB0cnVlLCB3ZSBzZXQgX3RUaW1lIHRvIC1fdGlueU51bSB0byBoYXZlIHRoZSBwbGF5aGVhZCBjcm9zcyB0aGUgc3RhcnRpbmcgcG9pbnQgYnV0IHdlIGNhbid0IGxlYXZlIF90VGltZSBhcyBhIG5lZ2F0aXZlIG51bWJlci5cblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGR1ciAhPT0gdGhpcy5fZHVyKSB7XG4gICAgICAgICAgLy8gd2hpbGUgaW5pdHRpbmcsIGEgcGx1Z2luIGxpa2UgSW5lcnRpYVBsdWdpbiBtaWdodCBhbHRlciB0aGUgZHVyYXRpb24sIHNvIHJlcnVuIGZyb20gdGhlIHN0YXJ0IHRvIGVuc3VyZSBldmVyeXRoaW5nIHJlbmRlcnMgYXMgaXQgc2hvdWxkLlxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTtcbiAgICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuXG4gICAgICBpZiAoIXRoaXMuX2FjdCAmJiB0aGlzLl90cykge1xuICAgICAgICB0aGlzLl9hY3QgPSAxOyAvL2FzIGxvbmcgYXMgaXQncyBub3QgcGF1c2VkLCBmb3JjZSBpdCB0byBiZSBhY3RpdmUgc28gdGhhdCBpZiB0aGUgdXNlciByZW5kZXJzIGluZGVwZW5kZW50IG9mIHRoZSBwYXJlbnQgdGltZWxpbmUsIGl0J2xsIGJlIGZvcmNlZCB0byByZS1yZW5kZXIgb24gdGhlIG5leHQgdGljay5cblxuICAgICAgICB0aGlzLl9sYXp5ID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvID0gKHlveW9FYXNlIHx8IHRoaXMuX2Vhc2UpKHRpbWUgLyBkdXIpO1xuXG4gICAgICBpZiAodGhpcy5fZnJvbSkge1xuICAgICAgICB0aGlzLnJhdGlvID0gcmF0aW8gPSAxIC0gcmF0aW87XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lICYmICFwcmV2VGltZSAmJiAhc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgX2NhbGxiYWNrKHRoaXMsIFwib25TdGFydFwiKTtcblxuICAgICAgICBpZiAodGhpcy5fdFRpbWUgIT09IHRUaW1lKSB7XG4gICAgICAgICAgLy8gaW4gY2FzZSB0aGUgb25TdGFydCB0cmlnZ2VyZWQgYSByZW5kZXIgYXQgYSBkaWZmZXJlbnQgc3BvdCwgZWplY3QuIExpa2UgaWYgc29tZW9uZSBkaWQgYW5pbWF0aW9uLnBhdXNlKDAuNSkgb3Igc29tZXRoaW5nIGluc2lkZSB0aGUgb25TdGFydC5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwdCA9IHRoaXMuX3B0O1xuXG4gICAgICB3aGlsZSAocHQpIHtcbiAgICAgICAgcHQucihyYXRpbywgcHQuZCk7XG4gICAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgICB9XG5cbiAgICAgIHRpbWVsaW5lICYmIHRpbWVsaW5lLnJlbmRlcih0b3RhbFRpbWUgPCAwID8gdG90YWxUaW1lIDogIXRpbWUgJiYgaXNZb3lvID8gLV90aW55TnVtIDogdGltZWxpbmUuX2R1ciAqIHJhdGlvLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHx8IHRoaXMuX3N0YXJ0QXQgJiYgKHRoaXMuX3pUaW1lID0gdG90YWxUaW1lKTtcblxuICAgICAgaWYgKHRoaXMuX29uVXBkYXRlICYmICFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICB0b3RhbFRpbWUgPCAwICYmIHRoaXMuX3N0YXJ0QXQgJiYgdGhpcy5fc3RhcnRBdC5yZW5kZXIodG90YWxUaW1lLCB0cnVlLCBmb3JjZSk7IC8vbm90ZTogZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHdlIHR1Y2sgdGhpcyBjb25kaXRpb25hbCBsb2dpYyBpbnNpZGUgbGVzcyB0cmF2ZWxlZCBhcmVhcyAobW9zdCB0d2VlbnMgZG9uJ3QgaGF2ZSBhbiBvblVwZGF0ZSkuIFdlJ2QganVzdCBoYXZlIGl0IGF0IHRoZSBlbmQgYmVmb3JlIHRoZSBvbkNvbXBsZXRlLCBidXQgdGhlIHZhbHVlcyBzaG91bGQgYmUgdXBkYXRlZCBiZWZvcmUgYW55IG9uVXBkYXRlIGlzIGNhbGxlZCwgc28gd2UgQUxTTyBwdXQgaXQgaGVyZSBhbmQgdGhlbiBpZiBpdCdzIG5vdCBjYWxsZWQsIHdlIGRvIHNvIGxhdGVyIG5lYXIgdGhlIG9uQ29tcGxldGUuXG5cbiAgICAgICAgX2NhbGxiYWNrKHRoaXMsIFwib25VcGRhdGVcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlcGVhdCAmJiBpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24gJiYgdGhpcy52YXJzLm9uUmVwZWF0ICYmICFzdXBwcmVzc0V2ZW50cyAmJiB0aGlzLnBhcmVudCAmJiBfY2FsbGJhY2sodGhpcywgXCJvblJlcGVhdFwiKTtcblxuICAgICAgaWYgKCh0VGltZSA9PT0gdGhpcy5fdER1ciB8fCAhdFRpbWUpICYmIHRoaXMuX3RUaW1lID09PSB0VGltZSkge1xuICAgICAgICB0b3RhbFRpbWUgPCAwICYmIHRoaXMuX3N0YXJ0QXQgJiYgIXRoaXMuX29uVXBkYXRlICYmIHRoaXMuX3N0YXJ0QXQucmVuZGVyKHRvdGFsVGltZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICh0b3RhbFRpbWUgfHwgIWR1cikgJiYgKHRUaW1lID09PSB0aGlzLl90RHVyICYmIHRoaXMuX3RzID4gMCB8fCAhdFRpbWUgJiYgdGhpcy5fdHMgPCAwKSAmJiBfcmVtb3ZlRnJvbVBhcmVudCh0aGlzLCAxKTsgLy8gZG9uJ3QgcmVtb3ZlIGlmIHdlJ3JlIHJlbmRlcmluZyBhdCBleGFjdGx5IGEgdGltZSBvZiAwLCBhcyB0aGVyZSBjb3VsZCBiZSBhdXRvUmV2ZXJ0IHZhbHVlcyB0aGF0IHNob3VsZCBnZXQgc2V0IG9uIHRoZSBuZXh0IHRpY2sgKGlmIHRoZSBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIGJleW9uZCB0aGUgc3RhcnRUaW1lLCBuZWdhdGl2ZSB0b3RhbFRpbWUpLiBEb24ndCByZW1vdmUgaWYgdGhlIHRpbWVsaW5lIGlzIHJldmVyc2VkIGFuZCB0aGUgcGxheWhlYWQgaXNuJ3QgYXQgMCwgb3RoZXJ3aXNlIHRsLnByb2dyZXNzKDEpLnJldmVyc2UoKSB3b24ndCB3b3JrLiBPbmx5IHJlbW92ZSBpZiB0aGUgcGxheWhlYWQgaXMgYXQgdGhlIGVuZCBhbmQgdGltZVNjYWxlIGlzIHBvc2l0aXZlLCBvciBpZiB0aGUgcGxheWhlYWQgaXMgYXQgMCBhbmQgdGhlIHRpbWVTY2FsZSBpcyBuZWdhdGl2ZS5cblxuICAgICAgICBpZiAoIXN1cHByZXNzRXZlbnRzICYmICEodG90YWxUaW1lIDwgMCAmJiAhcHJldlRpbWUpICYmICh0VGltZSB8fCBwcmV2VGltZSkpIHtcbiAgICAgICAgICAvLyBpZiBwcmV2VGltZSBhbmQgdFRpbWUgYXJlIHplcm8sIHdlIHNob3VsZG4ndCBmaXJlIHRoZSBvblJldmVyc2VDb21wbGV0ZS4gVGhpcyBjb3VsZCBoYXBwZW4gaWYgeW91IGdzYXAudG8oLi4uIHtwYXVzZWQ6dHJ1ZX0pLnBsYXkoKTtcbiAgICAgICAgICBfY2FsbGJhY2sodGhpcywgdFRpbWUgPT09IHREdXIgPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICB0aGlzLl9wcm9tICYmICEodFRpbWUgPCB0RHVyICYmIHRoaXMudGltZVNjYWxlKCkgPiAwKSAmJiB0aGlzLl9wcm9tKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8zLnRhcmdldHMgPSBmdW5jdGlvbiB0YXJnZXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRzO1xuICB9O1xuXG4gIF9wcm90bzMuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgdGhpcy5fcHQgPSB0aGlzLl9vcCA9IHRoaXMuX3N0YXJ0QXQgPSB0aGlzLl9vblVwZGF0ZSA9IHRoaXMuX2xhenkgPSB0aGlzLnJhdGlvID0gMDtcbiAgICB0aGlzLl9wdExvb2t1cCA9IFtdO1xuICAgIHRoaXMudGltZWxpbmUgJiYgdGhpcy50aW1lbGluZS5pbnZhbGlkYXRlKCk7XG4gICAgcmV0dXJuIF9BbmltYXRpb24yLnByb3RvdHlwZS5pbnZhbGlkYXRlLmNhbGwodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMy5raWxsID0gZnVuY3Rpb24ga2lsbCh0YXJnZXRzLCB2YXJzKSB7XG4gICAgaWYgKHZhcnMgPT09IHZvaWQgMCkge1xuICAgICAgdmFycyA9IFwiYWxsXCI7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRzICYmICghdmFycyB8fCB2YXJzID09PSBcImFsbFwiKSkge1xuICAgICAgdGhpcy5fbGF6eSA9IHRoaXMuX3B0ID0gMDtcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudCA/IF9pbnRlcnJ1cHQodGhpcykgOiB0aGlzO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRpbWVsaW5lKSB7XG4gICAgICB2YXIgdER1ciA9IHRoaXMudGltZWxpbmUudG90YWxEdXJhdGlvbigpO1xuICAgICAgdGhpcy50aW1lbGluZS5raWxsVHdlZW5zT2YodGFyZ2V0cywgdmFycywgX292ZXJ3cml0aW5nVHdlZW4gJiYgX292ZXJ3cml0aW5nVHdlZW4udmFycy5vdmVyd3JpdGUgIT09IHRydWUpLl9maXJzdCB8fCBfaW50ZXJydXB0KHRoaXMpOyAvLyBpZiBub3RoaW5nIGlzIGxlZnQgdHdlZW5pbmcsIGludGVycnVwdC5cblxuICAgICAgdGhpcy5wYXJlbnQgJiYgdER1ciAhPT0gdGhpcy50aW1lbGluZS50b3RhbER1cmF0aW9uKCkgJiYgX3NldER1cmF0aW9uKHRoaXMsIHRoaXMuX2R1ciAqIHRoaXMudGltZWxpbmUuX3REdXIgLyB0RHVyLCAwLCAxKTsgLy8gaWYgYSBuZXN0ZWQgdHdlZW4gaXMga2lsbGVkIHRoYXQgY2hhbmdlcyB0aGUgZHVyYXRpb24sIGl0IHNob3VsZCBhZmZlY3QgdGhpcyB0d2VlbidzIGR1cmF0aW9uLiBXZSBtdXN0IHVzZSB0aGUgcmF0aW8sIHRob3VnaCwgYmVjYXVzZSBzb21ldGltZXMgdGhlIGludGVybmFsIHRpbWVsaW5lIGlzIHN0cmV0Y2hlZCBsaWtlIGZvciBrZXlmcmFtZXMgd2hlcmUgdGhleSBkb24ndCBhbGwgYWRkIHVwIHRvIHdoYXRldmVyIHRoZSBwYXJlbnQgdHdlZW4ncyBkdXJhdGlvbiB3YXMgc2V0IHRvLlxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgcGFyc2VkVGFyZ2V0cyA9IHRoaXMuX3RhcmdldHMsXG4gICAgICAgIGtpbGxpbmdUYXJnZXRzID0gdGFyZ2V0cyA/IHRvQXJyYXkodGFyZ2V0cykgOiBwYXJzZWRUYXJnZXRzLFxuICAgICAgICBwcm9wVHdlZW5Mb29rdXAgPSB0aGlzLl9wdExvb2t1cCxcbiAgICAgICAgZmlyc3RQVCA9IHRoaXMuX3B0LFxuICAgICAgICBvdmVyd3JpdHRlblByb3BzLFxuICAgICAgICBjdXJMb29rdXAsXG4gICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzLFxuICAgICAgICBwcm9wcyxcbiAgICAgICAgcCxcbiAgICAgICAgcHQsXG4gICAgICAgIGk7XG5cbiAgICBpZiAoKCF2YXJzIHx8IHZhcnMgPT09IFwiYWxsXCIpICYmIF9hcnJheXNNYXRjaChwYXJzZWRUYXJnZXRzLCBraWxsaW5nVGFyZ2V0cykpIHtcbiAgICAgIHZhcnMgPT09IFwiYWxsXCIgJiYgKHRoaXMuX3B0ID0gMCk7XG4gICAgICByZXR1cm4gX2ludGVycnVwdCh0aGlzKTtcbiAgICB9XG5cbiAgICBvdmVyd3JpdHRlblByb3BzID0gdGhpcy5fb3AgPSB0aGlzLl9vcCB8fCBbXTtcblxuICAgIGlmICh2YXJzICE9PSBcImFsbFwiKSB7XG4gICAgICAvL3NvIHBlb3BsZSBjYW4gcGFzcyBpbiBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHByb3BlcnR5IG5hbWVzXG4gICAgICBpZiAoX2lzU3RyaW5nKHZhcnMpKSB7XG4gICAgICAgIHAgPSB7fTtcblxuICAgICAgICBfZm9yRWFjaE5hbWUodmFycywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gcFtuYW1lXSA9IDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhcnMgPSBwO1xuICAgICAgfVxuXG4gICAgICB2YXJzID0gX2FkZEFsaWFzZXNUb1ZhcnMocGFyc2VkVGFyZ2V0cywgdmFycyk7XG4gICAgfVxuXG4gICAgaSA9IHBhcnNlZFRhcmdldHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKH5raWxsaW5nVGFyZ2V0cy5pbmRleE9mKHBhcnNlZFRhcmdldHNbaV0pKSB7XG4gICAgICAgIGN1ckxvb2t1cCA9IHByb3BUd2Vlbkxvb2t1cFtpXTtcblxuICAgICAgICBpZiAodmFycyA9PT0gXCJhbGxcIikge1xuICAgICAgICAgIG92ZXJ3cml0dGVuUHJvcHNbaV0gPSB2YXJzO1xuICAgICAgICAgIHByb3BzID0gY3VyTG9va3VwO1xuICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzID0ge307XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHMgPSBvdmVyd3JpdHRlblByb3BzW2ldID0gb3ZlcndyaXR0ZW5Qcm9wc1tpXSB8fCB7fTtcbiAgICAgICAgICBwcm9wcyA9IHZhcnM7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHAgaW4gcHJvcHMpIHtcbiAgICAgICAgICBwdCA9IGN1ckxvb2t1cCAmJiBjdXJMb29rdXBbcF07XG5cbiAgICAgICAgICBpZiAocHQpIHtcbiAgICAgICAgICAgIGlmICghKFwia2lsbFwiIGluIHB0LmQpIHx8IHB0LmQua2lsbChwKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0odGhpcywgcHQsIFwiX3B0XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgY3VyTG9va3VwW3BdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjdXJPdmVyd3JpdGVQcm9wcyAhPT0gXCJhbGxcIikge1xuICAgICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHNbcF0gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2luaXR0ZWQgJiYgIXRoaXMuX3B0ICYmIGZpcnN0UFQgJiYgX2ludGVycnVwdCh0aGlzKTsgLy9pZiBhbGwgdHdlZW5pbmcgcHJvcGVydGllcyBhcmUga2lsbGVkLCBraWxsIHRoZSB0d2Vlbi4gV2l0aG91dCB0aGlzIGxpbmUsIGlmIHRoZXJlJ3MgYSB0d2VlbiB3aXRoIG11bHRpcGxlIHRhcmdldHMgYW5kIHRoZW4geW91IGtpbGxUd2VlbnNPZigpIGVhY2ggdGFyZ2V0IGluZGl2aWR1YWxseSwgdGhlIHR3ZWVuIHdvdWxkIHRlY2huaWNhbGx5IHN0aWxsIHJlbWFpbiBhY3RpdmUgYW5kIGZpcmUgaXRzIG9uQ29tcGxldGUgZXZlbiB0aG91Z2ggdGhlcmUgYXJlbid0IGFueSBtb3JlIHByb3BlcnRpZXMgdHdlZW5pbmcuXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBUd2Vlbi50byA9IGZ1bmN0aW9uIHRvKHRhcmdldHMsIHZhcnMpIHtcbiAgICByZXR1cm4gbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIGFyZ3VtZW50c1syXSk7XG4gIH07XG5cbiAgVHdlZW4uZnJvbSA9IGZ1bmN0aW9uIGZyb20odGFyZ2V0cywgdmFycykge1xuICAgIHJldHVybiBfY3JlYXRlVHdlZW5UeXBlKDEsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgVHdlZW4uZGVsYXllZENhbGwgPSBmdW5jdGlvbiBkZWxheWVkQ2FsbChkZWxheSwgY2FsbGJhY2ssIHBhcmFtcywgc2NvcGUpIHtcbiAgICByZXR1cm4gbmV3IFR3ZWVuKGNhbGxiYWNrLCAwLCB7XG4gICAgICBpbW1lZGlhdGVSZW5kZXI6IGZhbHNlLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgb25Db21wbGV0ZTogY2FsbGJhY2ssXG4gICAgICBvblJldmVyc2VDb21wbGV0ZTogY2FsbGJhY2ssXG4gICAgICBvbkNvbXBsZXRlUGFyYW1zOiBwYXJhbXMsXG4gICAgICBvblJldmVyc2VDb21wbGV0ZVBhcmFtczogcGFyYW1zLFxuICAgICAgY2FsbGJhY2tTY29wZTogc2NvcGVcbiAgICB9KTtcbiAgfTtcblxuICBUd2Vlbi5mcm9tVG8gPSBmdW5jdGlvbiBmcm9tVG8odGFyZ2V0cywgZnJvbVZhcnMsIHRvVmFycykge1xuICAgIHJldHVybiBfY3JlYXRlVHdlZW5UeXBlKDIsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgVHdlZW4uc2V0ID0gZnVuY3Rpb24gc2V0KHRhcmdldHMsIHZhcnMpIHtcbiAgICB2YXJzLmR1cmF0aW9uID0gMDtcbiAgICB2YXJzLnJlcGVhdERlbGF5IHx8ICh2YXJzLnJlcGVhdCA9IDApO1xuICAgIHJldHVybiBuZXcgVHdlZW4odGFyZ2V0cywgdmFycyk7XG4gIH07XG5cbiAgVHdlZW4ua2lsbFR3ZWVuc09mID0gZnVuY3Rpb24ga2lsbFR3ZWVuc09mKHRhcmdldHMsIHByb3BzLCBvbmx5QWN0aXZlKSB7XG4gICAgcmV0dXJuIF9nbG9iYWxUaW1lbGluZS5raWxsVHdlZW5zT2YodGFyZ2V0cywgcHJvcHMsIG9ubHlBY3RpdmUpO1xuICB9O1xuXG4gIHJldHVybiBUd2Vlbjtcbn0oQW5pbWF0aW9uKTtcblxuX3NldERlZmF1bHRzKFR3ZWVuLnByb3RvdHlwZSwge1xuICBfdGFyZ2V0czogW10sXG4gIF9sYXp5OiAwLFxuICBfc3RhcnRBdDogMCxcbiAgX29wOiAwLFxuICBfb25Jbml0OiAwXG59KTsgLy9hZGQgdGhlIHBlcnRpbmVudCB0aW1lbGluZSBtZXRob2RzIHRvIFR3ZWVuIGluc3RhbmNlcyBzbyB0aGF0IHVzZXJzIGNhbiBjaGFpbiBjb252ZW5pZW50bHkgYW5kIGNyZWF0ZSBhIHRpbWVsaW5lIGF1dG9tYXRpY2FsbHkuIChyZW1vdmVkIGR1ZSB0byBjb25jZXJucyB0aGF0IGl0J2QgdWx0aW1hdGVseSBhZGQgdG8gbW9yZSBjb25mdXNpb24gZXNwZWNpYWxseSBmb3IgYmVnaW5uZXJzKVxuLy8gX2ZvckVhY2hOYW1lKFwidG8sZnJvbSxmcm9tVG8sc2V0LGNhbGwsYWRkLGFkZExhYmVsLGFkZFBhdXNlXCIsIG5hbWUgPT4ge1xuLy8gXHRUd2Vlbi5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbi8vIFx0XHRsZXQgdGwgPSBuZXcgVGltZWxpbmUoKTtcbi8vIFx0XHRyZXR1cm4gX2FkZFRvVGltZWxpbmUodGwsIHRoaXMpW25hbWVdLmFwcGx5KHRsLCB0b0FycmF5KGFyZ3VtZW50cykpO1xuLy8gXHR9XG4vLyB9KTtcbi8vZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuIExldmVyYWdlIHRoZSB0aW1lbGluZSBjYWxscy5cblxuXG5fZm9yRWFjaE5hbWUoXCJzdGFnZ2VyVG8sc3RhZ2dlckZyb20sc3RhZ2dlckZyb21Ub1wiLCBmdW5jdGlvbiAobmFtZSkge1xuICBUd2VlbltuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmUoKSxcbiAgICAgICAgcGFyYW1zID0gX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICAgIHBhcmFtcy5zcGxpY2UobmFtZSA9PT0gXCJzdGFnZ2VyRnJvbVRvXCIgPyA1IDogNCwgMCwgMCk7XG4gICAgcmV0dXJuIHRsW25hbWVdLmFwcGx5KHRsLCBwYXJhbXMpO1xuICB9O1xufSk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBST1BUV0VFTlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbnZhciBfc2V0dGVyUGxhaW4gPSBmdW5jdGlvbiBfc2V0dGVyUGxhaW4odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlckZ1bmMgPSBmdW5jdGlvbiBfc2V0dGVyRnVuYyh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XSh2YWx1ZSk7XG59LFxuICAgIF9zZXR0ZXJGdW5jV2l0aFBhcmFtID0gZnVuY3Rpb24gX3NldHRlckZ1bmNXaXRoUGFyYW0odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEpIHtcbiAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eV0oZGF0YS5mcCwgdmFsdWUpO1xufSxcbiAgICBfc2V0dGVyQXR0cmlidXRlID0gZnVuY3Rpb24gX3NldHRlckF0dHJpYnV0ZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgdmFsdWUpO1xufSxcbiAgICBfZ2V0U2V0dGVyID0gZnVuY3Rpb24gX2dldFNldHRlcih0YXJnZXQsIHByb3BlcnR5KSB7XG4gIHJldHVybiBfaXNGdW5jdGlvbih0YXJnZXRbcHJvcGVydHldKSA/IF9zZXR0ZXJGdW5jIDogX2lzVW5kZWZpbmVkKHRhcmdldFtwcm9wZXJ0eV0pICYmIHRhcmdldC5zZXRBdHRyaWJ1dGUgPyBfc2V0dGVyQXR0cmlidXRlIDogX3NldHRlclBsYWluO1xufSxcbiAgICBfcmVuZGVyUGxhaW4gPSBmdW5jdGlvbiBfcmVuZGVyUGxhaW4ocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMDAwKSAvIDEwMDAwMDAsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyQm9vbGVhbiA9IGZ1bmN0aW9uIF9yZW5kZXJCb29sZWFuKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgISEoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pLCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlckNvbXBsZXhTdHJpbmcgPSBmdW5jdGlvbiBfcmVuZGVyQ29tcGxleFN0cmluZyhyYXRpbywgZGF0YSkge1xuICB2YXIgcHQgPSBkYXRhLl9wdCxcbiAgICAgIHMgPSBcIlwiO1xuXG4gIGlmICghcmF0aW8gJiYgZGF0YS5iKSB7XG4gICAgLy9iID0gYmVnaW5uaW5nIHN0cmluZ1xuICAgIHMgPSBkYXRhLmI7XG4gIH0gZWxzZSBpZiAocmF0aW8gPT09IDEgJiYgZGF0YS5lKSB7XG4gICAgLy9lID0gZW5kaW5nIHN0cmluZ1xuICAgIHMgPSBkYXRhLmU7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHB0KSB7XG4gICAgICBzID0gcHQucCArIChwdC5tID8gcHQubShwdC5zICsgcHQuYyAqIHJhdGlvKSA6IE1hdGgucm91bmQoKHB0LnMgKyBwdC5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDApICsgczsgLy93ZSB1c2UgdGhlIFwicFwiIHByb3BlcnR5IGZvciB0aGUgdGV4dCBpbmJldHdlZW4gKGxpa2UgYSBzdWZmaXgpLiBBbmQgaW4gdGhlIGNvbnRleHQgb2YgYSBjb21wbGV4IHN0cmluZywgdGhlIG1vZGlmaWVyIChtKSBpcyB0eXBpY2FsbHkganVzdCBNYXRoLnJvdW5kKCksIGxpa2UgZm9yIFJHQiBjb2xvcnMuXG5cbiAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgfVxuXG4gICAgcyArPSBkYXRhLmM7IC8vd2UgdXNlIHRoZSBcImNcIiBvZiB0aGUgUHJvcFR3ZWVuIHRvIHN0b3JlIHRoZSBmaW5hbCBjaHVuayBvZiBub24tbnVtZXJpYyB0ZXh0LlxuICB9XG5cbiAgZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHMsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyUHJvcFR3ZWVucyA9IGZ1bmN0aW9uIF9yZW5kZXJQcm9wVHdlZW5zKHJhdGlvLCBkYXRhKSB7XG4gIHZhciBwdCA9IGRhdGEuX3B0O1xuXG4gIHdoaWxlIChwdCkge1xuICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgIHB0ID0gcHQuX25leHQ7XG4gIH1cbn0sXG4gICAgX2FkZFBsdWdpbk1vZGlmaWVyID0gZnVuY3Rpb24gX2FkZFBsdWdpbk1vZGlmaWVyKG1vZGlmaWVyLCB0d2VlbiwgdGFyZ2V0LCBwcm9wZXJ0eSkge1xuICB2YXIgcHQgPSB0aGlzLl9wdCxcbiAgICAgIG5leHQ7XG5cbiAgd2hpbGUgKHB0KSB7XG4gICAgbmV4dCA9IHB0Ll9uZXh0O1xuICAgIHB0LnAgPT09IHByb3BlcnR5ICYmIHB0Lm1vZGlmaWVyKG1vZGlmaWVyLCB0d2VlbiwgdGFyZ2V0KTtcbiAgICBwdCA9IG5leHQ7XG4gIH1cbn0sXG4gICAgX2tpbGxQcm9wVHdlZW5zT2YgPSBmdW5jdGlvbiBfa2lsbFByb3BUd2VlbnNPZihwcm9wZXJ0eSkge1xuICB2YXIgcHQgPSB0aGlzLl9wdCxcbiAgICAgIGhhc05vbkRlcGVuZGVudFJlbWFpbmluZyxcbiAgICAgIG5leHQ7XG5cbiAgd2hpbGUgKHB0KSB7XG4gICAgbmV4dCA9IHB0Ll9uZXh0O1xuXG4gICAgaWYgKHB0LnAgPT09IHByb3BlcnR5ICYmICFwdC5vcCB8fCBwdC5vcCA9PT0gcHJvcGVydHkpIHtcbiAgICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSh0aGlzLCBwdCwgXCJfcHRcIik7XG4gICAgfSBlbHNlIGlmICghcHQuZGVwKSB7XG4gICAgICBoYXNOb25EZXBlbmRlbnRSZW1haW5pbmcgPSAxO1xuICAgIH1cblxuICAgIHB0ID0gbmV4dDtcbiAgfVxuXG4gIHJldHVybiAhaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nO1xufSxcbiAgICBfc2V0dGVyV2l0aE1vZGlmaWVyID0gZnVuY3Rpb24gX3NldHRlcldpdGhNb2RpZmllcih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSkge1xuICBkYXRhLm1TZXQodGFyZ2V0LCBwcm9wZXJ0eSwgZGF0YS5tLmNhbGwoZGF0YS50d2VlbiwgdmFsdWUsIGRhdGEubXQpLCBkYXRhKTtcbn0sXG4gICAgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSA9IGZ1bmN0aW9uIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkocGFyZW50KSB7XG4gIHZhciBwdCA9IHBhcmVudC5fcHQsXG4gICAgICBuZXh0LFxuICAgICAgcHQyLFxuICAgICAgZmlyc3QsXG4gICAgICBsYXN0OyAvL3NvcnRzIHRoZSBQcm9wVHdlZW4gbGlua2VkIGxpc3QgaW4gb3JkZXIgb2YgcHJpb3JpdHkgYmVjYXVzZSBzb21lIHBsdWdpbnMgbmVlZCB0byBkbyB0aGVpciB3b3JrIGFmdGVyIEFMTCBvZiB0aGUgUHJvcFR3ZWVucyB3ZXJlIGNyZWF0ZWQgKGxpa2UgUm91bmRQcm9wc1BsdWdpbiBhbmQgTW9kaWZpZXJzUGx1Z2luKVxuXG4gIHdoaWxlIChwdCkge1xuICAgIG5leHQgPSBwdC5fbmV4dDtcbiAgICBwdDIgPSBmaXJzdDtcblxuICAgIHdoaWxlIChwdDIgJiYgcHQyLnByID4gcHQucHIpIHtcbiAgICAgIHB0MiA9IHB0Mi5fbmV4dDtcbiAgICB9XG5cbiAgICBpZiAocHQuX3ByZXYgPSBwdDIgPyBwdDIuX3ByZXYgOiBsYXN0KSB7XG4gICAgICBwdC5fcHJldi5fbmV4dCA9IHB0O1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXJzdCA9IHB0O1xuICAgIH1cblxuICAgIGlmIChwdC5fbmV4dCA9IHB0Mikge1xuICAgICAgcHQyLl9wcmV2ID0gcHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3QgPSBwdDtcbiAgICB9XG5cbiAgICBwdCA9IG5leHQ7XG4gIH1cblxuICBwYXJlbnQuX3B0ID0gZmlyc3Q7XG59OyAvL1Byb3BUd2VlbiBrZXk6IHQgPSB0YXJnZXQsIHAgPSBwcm9wLCByID0gcmVuZGVyZXIsIGQgPSBkYXRhLCBzID0gc3RhcnQsIGMgPSBjaGFuZ2UsIG9wID0gb3ZlcndyaXRlUHJvcGVydHkgKE9OTFkgcG9wdWxhdGVkIHdoZW4gaXQncyBkaWZmZXJlbnQgdGhhbiBwKSwgcHIgPSBwcmlvcml0eSwgX25leHQvX3ByZXYgZm9yIHRoZSBsaW5rZWQgbGlzdCBzaWJsaW5ncywgc2V0ID0gc2V0dGVyLCBtID0gbW9kaWZpZXIsIG1TZXQgPSBtb2RpZmllclNldHRlciAodGhlIG9yaWdpbmFsIHNldHRlciwgYmVmb3JlIGEgbW9kaWZpZXIgd2FzIGFkZGVkKVxuXG5cbmV4cG9ydCB2YXIgUHJvcFR3ZWVuID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUHJvcFR3ZWVuKG5leHQsIHRhcmdldCwgcHJvcCwgc3RhcnQsIGNoYW5nZSwgcmVuZGVyZXIsIGRhdGEsIHNldHRlciwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnQgPSB0YXJnZXQ7XG4gICAgdGhpcy5zID0gc3RhcnQ7XG4gICAgdGhpcy5jID0gY2hhbmdlO1xuICAgIHRoaXMucCA9IHByb3A7XG4gICAgdGhpcy5yID0gcmVuZGVyZXIgfHwgX3JlbmRlclBsYWluO1xuICAgIHRoaXMuZCA9IGRhdGEgfHwgdGhpcztcbiAgICB0aGlzLnNldCA9IHNldHRlciB8fCBfc2V0dGVyUGxhaW47XG4gICAgdGhpcy5wciA9IHByaW9yaXR5IHx8IDA7XG4gICAgdGhpcy5fbmV4dCA9IG5leHQ7XG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgbmV4dC5fcHJldiA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9wcm90bzQgPSBQcm9wVHdlZW4ucHJvdG90eXBlO1xuXG4gIF9wcm90bzQubW9kaWZpZXIgPSBmdW5jdGlvbiBtb2RpZmllcihmdW5jLCB0d2VlbiwgdGFyZ2V0KSB7XG4gICAgdGhpcy5tU2V0ID0gdGhpcy5tU2V0IHx8IHRoaXMuc2V0OyAvL2luIGNhc2UgaXQgd2FzIGFscmVhZHkgc2V0IChhIFByb3BUd2VlbiBjYW4gb25seSBoYXZlIG9uZSBtb2RpZmllcilcblxuICAgIHRoaXMuc2V0ID0gX3NldHRlcldpdGhNb2RpZmllcjtcbiAgICB0aGlzLm0gPSBmdW5jO1xuICAgIHRoaXMubXQgPSB0YXJnZXQ7IC8vbW9kaWZpZXIgdGFyZ2V0XG5cbiAgICB0aGlzLnR3ZWVuID0gdHdlZW47XG4gIH07XG5cbiAgcmV0dXJuIFByb3BUd2Vlbjtcbn0oKTsgLy9Jbml0aWFsaXphdGlvbiB0YXNrc1xuXG5fZm9yRWFjaE5hbWUoX2NhbGxiYWNrTmFtZXMgKyBcInBhcmVudCxkdXJhdGlvbixlYXNlLGRlbGF5LG92ZXJ3cml0ZSxydW5CYWNrd2FyZHMsc3RhcnRBdCx5b3lvLGltbWVkaWF0ZVJlbmRlcixyZXBlYXQscmVwZWF0RGVsYXksZGF0YSxwYXVzZWQscmV2ZXJzZWQsbGF6eSxjYWxsYmFja1Njb3BlLHN0cmluZ0ZpbHRlcixpZCx5b3lvRWFzZSxzdGFnZ2VyLGluaGVyaXQscmVwZWF0UmVmcmVzaCxrZXlmcmFtZXMsYXV0b1JldmVydCxzY3JvbGxUcmlnZ2VyXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBfcmVzZXJ2ZWRQcm9wc1tuYW1lXSA9IDE7XG59KTtcblxuX2dsb2JhbHMuVHdlZW5NYXggPSBfZ2xvYmFscy5Ud2VlbkxpdGUgPSBUd2Vlbjtcbl9nbG9iYWxzLlRpbWVsaW5lTGl0ZSA9IF9nbG9iYWxzLlRpbWVsaW5lTWF4ID0gVGltZWxpbmU7XG5fZ2xvYmFsVGltZWxpbmUgPSBuZXcgVGltZWxpbmUoe1xuICBzb3J0Q2hpbGRyZW46IGZhbHNlLFxuICBkZWZhdWx0czogX2RlZmF1bHRzLFxuICBhdXRvUmVtb3ZlQ2hpbGRyZW46IHRydWUsXG4gIGlkOiBcInJvb3RcIixcbiAgc21vb3RoQ2hpbGRUaW1pbmc6IHRydWVcbn0pO1xuX2NvbmZpZy5zdHJpbmdGaWx0ZXIgPSBfY29sb3JTdHJpbmdGaWx0ZXI7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdTQVBcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyIF9nc2FwID0ge1xuICByZWdpc3RlclBsdWdpbjogZnVuY3Rpb24gcmVnaXN0ZXJQbHVnaW4oKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgIHJldHVybiBfY3JlYXRlUGx1Z2luKGNvbmZpZyk7XG4gICAgfSk7XG4gIH0sXG4gIHRpbWVsaW5lOiBmdW5jdGlvbiB0aW1lbGluZSh2YXJzKSB7XG4gICAgcmV0dXJuIG5ldyBUaW1lbGluZSh2YXJzKTtcbiAgfSxcbiAgZ2V0VHdlZW5zT2Y6IGZ1bmN0aW9uIGdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpO1xuICB9LFxuICBnZXRQcm9wZXJ0eTogZnVuY3Rpb24gZ2V0UHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkge1xuICAgIF9pc1N0cmluZyh0YXJnZXQpICYmICh0YXJnZXQgPSB0b0FycmF5KHRhcmdldClbMF0pOyAvL2luIGNhc2Ugc2VsZWN0b3IgdGV4dCBvciBhbiBhcnJheSBpcyBwYXNzZWQgaW5cblxuICAgIHZhciBnZXR0ZXIgPSBfZ2V0Q2FjaGUodGFyZ2V0IHx8IHt9KS5nZXQsXG4gICAgICAgIGZvcm1hdCA9IHVuaXQgPyBfcGFzc1Rocm91Z2ggOiBfbnVtZXJpY0lmUG9zc2libGU7XG5cbiAgICB1bml0ID09PSBcIm5hdGl2ZVwiICYmICh1bml0ID0gXCJcIik7XG4gICAgcmV0dXJuICF0YXJnZXQgPyB0YXJnZXQgOiAhcHJvcGVydHkgPyBmdW5jdGlvbiAocHJvcGVydHksIHVuaXQsIHVuY2FjaGUpIHtcbiAgICAgIHJldHVybiBmb3JtYXQoKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiBfcGx1Z2luc1twcm9wZXJ0eV0uZ2V0IHx8IGdldHRlcikodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkpO1xuICAgIH0gOiBmb3JtYXQoKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiBfcGx1Z2luc1twcm9wZXJ0eV0uZ2V0IHx8IGdldHRlcikodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkpO1xuICB9LFxuICBxdWlja1NldHRlcjogZnVuY3Rpb24gcXVpY2tTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCkge1xuICAgIHRhcmdldCA9IHRvQXJyYXkodGFyZ2V0KTtcblxuICAgIGlmICh0YXJnZXQubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIHNldHRlcnMgPSB0YXJnZXQubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBnc2FwLnF1aWNrU2V0dGVyKHQsIHByb3BlcnR5LCB1bml0KTtcbiAgICAgIH0pLFxuICAgICAgICAgIGwgPSBzZXR0ZXJzLmxlbmd0aDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGkgPSBsO1xuXG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICBzZXR0ZXJzW2ldKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0YXJnZXQgPSB0YXJnZXRbMF0gfHwge307XG5cbiAgICB2YXIgUGx1Z2luID0gX3BsdWdpbnNbcHJvcGVydHldLFxuICAgICAgICBjYWNoZSA9IF9nZXRDYWNoZSh0YXJnZXQpLFxuICAgICAgICBwID0gY2FjaGUuaGFybmVzcyAmJiAoY2FjaGUuaGFybmVzcy5hbGlhc2VzIHx8IHt9KVtwcm9wZXJ0eV0gfHwgcHJvcGVydHksXG4gICAgICAgIC8vIGluIGNhc2UgaXQncyBhbiBhbGlhcywgbGlrZSBcInJvdGF0ZVwiIGZvciBcInJvdGF0aW9uXCIuXG4gICAgc2V0dGVyID0gUGx1Z2luID8gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgcCA9IG5ldyBQbHVnaW4oKTtcbiAgICAgIF9xdWlja1R3ZWVuLl9wdCA9IDA7XG4gICAgICBwLmluaXQodGFyZ2V0LCB1bml0ID8gdmFsdWUgKyB1bml0IDogdmFsdWUsIF9xdWlja1R3ZWVuLCAwLCBbdGFyZ2V0XSk7XG4gICAgICBwLnJlbmRlcigxLCBwKTtcbiAgICAgIF9xdWlja1R3ZWVuLl9wdCAmJiBfcmVuZGVyUHJvcFR3ZWVucygxLCBfcXVpY2tUd2Vlbik7XG4gICAgfSA6IGNhY2hlLnNldCh0YXJnZXQsIHApO1xuXG4gICAgcmV0dXJuIFBsdWdpbiA/IHNldHRlciA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHNldHRlcih0YXJnZXQsIHAsIHVuaXQgPyB2YWx1ZSArIHVuaXQgOiB2YWx1ZSwgY2FjaGUsIDEpO1xuICAgIH07XG4gIH0sXG4gIGlzVHdlZW5pbmc6IGZ1bmN0aW9uIGlzVHdlZW5pbmcodGFyZ2V0cykge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0VHdlZW5zT2YodGFyZ2V0cywgdHJ1ZSkubGVuZ3RoID4gMDtcbiAgfSxcbiAgZGVmYXVsdHM6IGZ1bmN0aW9uIGRlZmF1bHRzKHZhbHVlKSB7XG4gICAgdmFsdWUgJiYgdmFsdWUuZWFzZSAmJiAodmFsdWUuZWFzZSA9IF9wYXJzZUVhc2UodmFsdWUuZWFzZSwgX2RlZmF1bHRzLmVhc2UpKTtcbiAgICByZXR1cm4gX21lcmdlRGVlcChfZGVmYXVsdHMsIHZhbHVlIHx8IHt9KTtcbiAgfSxcbiAgY29uZmlnOiBmdW5jdGlvbiBjb25maWcodmFsdWUpIHtcbiAgICByZXR1cm4gX21lcmdlRGVlcChfY29uZmlnLCB2YWx1ZSB8fCB7fSk7XG4gIH0sXG4gIHJlZ2lzdGVyRWZmZWN0OiBmdW5jdGlvbiByZWdpc3RlckVmZmVjdChfcmVmMykge1xuICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0LFxuICAgICAgICBwbHVnaW5zID0gX3JlZjMucGx1Z2lucyxcbiAgICAgICAgZGVmYXVsdHMgPSBfcmVmMy5kZWZhdWx0cyxcbiAgICAgICAgZXh0ZW5kVGltZWxpbmUgPSBfcmVmMy5leHRlbmRUaW1lbGluZTtcbiAgICAocGx1Z2lucyB8fCBcIlwiKS5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luTmFtZSkge1xuICAgICAgcmV0dXJuIHBsdWdpbk5hbWUgJiYgIV9wbHVnaW5zW3BsdWdpbk5hbWVdICYmICFfZ2xvYmFsc1twbHVnaW5OYW1lXSAmJiBfd2FybihuYW1lICsgXCIgZWZmZWN0IHJlcXVpcmVzIFwiICsgcGx1Z2luTmFtZSArIFwiIHBsdWdpbi5cIik7XG4gICAgfSk7XG5cbiAgICBfZWZmZWN0c1tuYW1lXSA9IGZ1bmN0aW9uICh0YXJnZXRzLCB2YXJzLCB0bCkge1xuICAgICAgcmV0dXJuIGVmZmVjdCh0b0FycmF5KHRhcmdldHMpLCBfc2V0RGVmYXVsdHModmFycyB8fCB7fSwgZGVmYXVsdHMpLCB0bCk7XG4gICAgfTtcblxuICAgIGlmIChleHRlbmRUaW1lbGluZSkge1xuICAgICAgVGltZWxpbmUucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24gKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChfZWZmZWN0c1tuYW1lXSh0YXJnZXRzLCBfaXNPYmplY3QodmFycykgPyB2YXJzIDogKHBvc2l0aW9uID0gdmFycykgJiYge30sIHRoaXMpLCBwb3NpdGlvbik7XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgcmVnaXN0ZXJFYXNlOiBmdW5jdGlvbiByZWdpc3RlckVhc2UobmFtZSwgZWFzZSkge1xuICAgIF9lYXNlTWFwW25hbWVdID0gX3BhcnNlRWFzZShlYXNlKTtcbiAgfSxcbiAgcGFyc2VFYXNlOiBmdW5jdGlvbiBwYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IF9wYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIDogX2Vhc2VNYXA7XG4gIH0sXG4gIGdldEJ5SWQ6IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmdldEJ5SWQoaWQpO1xuICB9LFxuICBleHBvcnRSb290OiBmdW5jdGlvbiBleHBvcnRSb290KHZhcnMsIGluY2x1ZGVEZWxheWVkQ2FsbHMpIHtcbiAgICBpZiAodmFycyA9PT0gdm9pZCAwKSB7XG4gICAgICB2YXJzID0ge307XG4gICAgfVxuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lKHZhcnMpLFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgbmV4dDtcbiAgICB0bC5zbW9vdGhDaGlsZFRpbWluZyA9IF9pc05vdEZhbHNlKHZhcnMuc21vb3RoQ2hpbGRUaW1pbmcpO1xuXG4gICAgX2dsb2JhbFRpbWVsaW5lLnJlbW92ZSh0bCk7XG5cbiAgICB0bC5fZHAgPSAwOyAvL290aGVyd2lzZSBpdCdsbCBnZXQgcmUtYWN0aXZhdGVkIHdoZW4gYWRkaW5nIGNoaWxkcmVuIGFuZCBiZSByZS1pbnRyb2R1Y2VkIGludG8gX2dsb2JhbFRpbWVsaW5lJ3MgbGlua2VkIGxpc3QgKHRoZW4gYWRkZWQgdG8gaXRzZWxmKS5cblxuICAgIHRsLl90aW1lID0gdGwuX3RUaW1lID0gX2dsb2JhbFRpbWVsaW5lLl90aW1lO1xuICAgIGNoaWxkID0gX2dsb2JhbFRpbWVsaW5lLl9maXJzdDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuXG4gICAgICBpZiAoaW5jbHVkZURlbGF5ZWRDYWxscyB8fCAhKCFjaGlsZC5fZHVyICYmIGNoaWxkIGluc3RhbmNlb2YgVHdlZW4gJiYgY2hpbGQudmFycy5vbkNvbXBsZXRlID09PSBjaGlsZC5fdGFyZ2V0c1swXSkpIHtcbiAgICAgICAgX2FkZFRvVGltZWxpbmUodGwsIGNoaWxkLCBjaGlsZC5fc3RhcnQgLSBjaGlsZC5fZGVsYXkpO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IG5leHQ7XG4gICAgfVxuXG4gICAgX2FkZFRvVGltZWxpbmUoX2dsb2JhbFRpbWVsaW5lLCB0bCwgMCk7XG5cbiAgICByZXR1cm4gdGw7XG4gIH0sXG4gIHV0aWxzOiB7XG4gICAgd3JhcDogd3JhcCxcbiAgICB3cmFwWW95bzogd3JhcFlveW8sXG4gICAgZGlzdHJpYnV0ZTogZGlzdHJpYnV0ZSxcbiAgICByYW5kb206IHJhbmRvbSxcbiAgICBzbmFwOiBzbmFwLFxuICAgIG5vcm1hbGl6ZTogbm9ybWFsaXplLFxuICAgIGdldFVuaXQ6IGdldFVuaXQsXG4gICAgY2xhbXA6IGNsYW1wLFxuICAgIHNwbGl0Q29sb3I6IHNwbGl0Q29sb3IsXG4gICAgdG9BcnJheTogdG9BcnJheSxcbiAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgbWFwUmFuZ2U6IG1hcFJhbmdlLFxuICAgIHBpcGU6IHBpcGUsXG4gICAgdW5pdGl6ZTogdW5pdGl6ZSxcbiAgICBpbnRlcnBvbGF0ZTogaW50ZXJwb2xhdGUsXG4gICAgc2h1ZmZsZTogc2h1ZmZsZVxuICB9LFxuICBpbnN0YWxsOiBfaW5zdGFsbCxcbiAgZWZmZWN0czogX2VmZmVjdHMsXG4gIHRpY2tlcjogX3RpY2tlcixcbiAgdXBkYXRlUm9vdDogVGltZWxpbmUudXBkYXRlUm9vdCxcbiAgcGx1Z2luczogX3BsdWdpbnMsXG4gIGdsb2JhbFRpbWVsaW5lOiBfZ2xvYmFsVGltZWxpbmUsXG4gIGNvcmU6IHtcbiAgICBQcm9wVHdlZW46IFByb3BUd2VlbixcbiAgICBnbG9iYWxzOiBfYWRkR2xvYmFsLFxuICAgIFR3ZWVuOiBUd2VlbixcbiAgICBUaW1lbGluZTogVGltZWxpbmUsXG4gICAgQW5pbWF0aW9uOiBBbmltYXRpb24sXG4gICAgZ2V0Q2FjaGU6IF9nZXRDYWNoZSxcbiAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW06IF9yZW1vdmVMaW5rZWRMaXN0SXRlbSxcbiAgICBzdXBwcmVzc092ZXJ3cml0ZXM6IGZ1bmN0aW9uIHN1cHByZXNzT3ZlcndyaXRlcyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIF9zdXBwcmVzc092ZXJ3cml0ZXMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn07XG5cbl9mb3JFYWNoTmFtZShcInRvLGZyb20sZnJvbVRvLGRlbGF5ZWRDYWxsLHNldCxraWxsVHdlZW5zT2ZcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIF9nc2FwW25hbWVdID0gVHdlZW5bbmFtZV07XG59KTtcblxuX3RpY2tlci5hZGQoVGltZWxpbmUudXBkYXRlUm9vdCk7XG5cbl9xdWlja1R3ZWVuID0gX2dzYXAudG8oe30sIHtcbiAgZHVyYXRpb246IDBcbn0pOyAvLyAtLS0tIEVYVFJBIFBMVUdJTlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIF9nZXRQbHVnaW5Qcm9wVHdlZW4gPSBmdW5jdGlvbiBfZ2V0UGx1Z2luUHJvcFR3ZWVuKHBsdWdpbiwgcHJvcCkge1xuICB2YXIgcHQgPSBwbHVnaW4uX3B0O1xuXG4gIHdoaWxlIChwdCAmJiBwdC5wICE9PSBwcm9wICYmIHB0Lm9wICE9PSBwcm9wICYmIHB0LmZwICE9PSBwcm9wKSB7XG4gICAgcHQgPSBwdC5fbmV4dDtcbiAgfVxuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX2FkZE1vZGlmaWVycyA9IGZ1bmN0aW9uIF9hZGRNb2RpZmllcnModHdlZW4sIG1vZGlmaWVycykge1xuICB2YXIgdGFyZ2V0cyA9IHR3ZWVuLl90YXJnZXRzLFxuICAgICAgcCxcbiAgICAgIGksXG4gICAgICBwdDtcblxuICBmb3IgKHAgaW4gbW9kaWZpZXJzKSB7XG4gICAgaSA9IHRhcmdldHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgcHQgPSB0d2Vlbi5fcHRMb29rdXBbaV1bcF07XG5cbiAgICAgIGlmIChwdCAmJiAocHQgPSBwdC5kKSkge1xuICAgICAgICBpZiAocHQuX3B0KSB7XG4gICAgICAgICAgLy8gaXMgYSBwbHVnaW5cbiAgICAgICAgICBwdCA9IF9nZXRQbHVnaW5Qcm9wVHdlZW4ocHQsIHApO1xuICAgICAgICB9XG5cbiAgICAgICAgcHQgJiYgcHQubW9kaWZpZXIgJiYgcHQubW9kaWZpZXIobW9kaWZpZXJzW3BdLCB0d2VlbiwgdGFyZ2V0c1tpXSwgcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59LFxuICAgIF9idWlsZE1vZGlmaWVyUGx1Z2luID0gZnVuY3Rpb24gX2J1aWxkTW9kaWZpZXJQbHVnaW4obmFtZSwgbW9kaWZpZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHJhd1ZhcnM6IDEsXG4gICAgLy9kb24ndCBwcmUtcHJvY2VzcyBmdW5jdGlvbi1iYXNlZCB2YWx1ZXMgb3IgXCJyYW5kb20oKVwiIHN0cmluZ3MuXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhcnMsIHR3ZWVuKSB7XG4gICAgICB0d2Vlbi5fb25Jbml0ID0gZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgICAgIHZhciB0ZW1wLCBwO1xuXG4gICAgICAgIGlmIChfaXNTdHJpbmcodmFycykpIHtcbiAgICAgICAgICB0ZW1wID0ge307XG5cbiAgICAgICAgICBfZm9yRWFjaE5hbWUodmFycywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wW25hbWVdID0gMTtcbiAgICAgICAgICB9KTsgLy9pZiB0aGUgdXNlciBwYXNzZXMgaW4gYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiBwcm9wZXJ0eSBuYW1lcyB0byByb3VuZFByb3BzLCBsaWtlIFwieCx5XCIsIHdlIHJvdW5kIHRvIHdob2xlIG51bWJlcnMuXG5cblxuICAgICAgICAgIHZhcnMgPSB0ZW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGlmaWVyKSB7XG4gICAgICAgICAgdGVtcCA9IHt9O1xuXG4gICAgICAgICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgICAgICAgIHRlbXBbcF0gPSBtb2RpZmllcih2YXJzW3BdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXJzID0gdGVtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIF9hZGRNb2RpZmllcnModHdlZW4sIHZhcnMpO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59OyAvL3JlZ2lzdGVyIGNvcmUgcGx1Z2luc1xuXG5cbmV4cG9ydCB2YXIgZ3NhcCA9IF9nc2FwLnJlZ2lzdGVyUGx1Z2luKHtcbiAgbmFtZTogXCJhdHRyXCIsXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpIHtcbiAgICB2YXIgcCwgcHQ7XG5cbiAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgcHQgPSB0aGlzLmFkZCh0YXJnZXQsIFwic2V0QXR0cmlidXRlXCIsICh0YXJnZXQuZ2V0QXR0cmlidXRlKHApIHx8IDApICsgXCJcIiwgdmFyc1twXSwgaW5kZXgsIHRhcmdldHMsIDAsIDAsIHApO1xuICAgICAgcHQgJiYgKHB0Lm9wID0gcCk7XG5cbiAgICAgIHRoaXMuX3Byb3BzLnB1c2gocCk7XG4gICAgfVxuICB9XG59LCB7XG4gIG5hbWU6IFwiZW5kQXJyYXlcIixcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhbHVlKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmFkZCh0YXJnZXQsIGksIHRhcmdldFtpXSB8fCAwLCB2YWx1ZVtpXSk7XG4gICAgfVxuICB9XG59LCBfYnVpbGRNb2RpZmllclBsdWdpbihcInJvdW5kUHJvcHNcIiwgX3JvdW5kTW9kaWZpZXIpLCBfYnVpbGRNb2RpZmllclBsdWdpbihcIm1vZGlmaWVyc1wiKSwgX2J1aWxkTW9kaWZpZXJQbHVnaW4oXCJzbmFwXCIsIHNuYXApKSB8fCBfZ3NhcDsgLy90byBwcmV2ZW50IHRoZSBjb3JlIHBsdWdpbnMgZnJvbSBiZWluZyBkcm9wcGVkIHZpYSBhZ2dyZXNzaXZlIHRyZWUgc2hha2luZywgd2UgbXVzdCBpbmNsdWRlIHRoZW0gaW4gdGhlIHZhcmlhYmxlIGRlY2xhcmF0aW9uIGluIHRoaXMgd2F5LlxuXG5Ud2Vlbi52ZXJzaW9uID0gVGltZWxpbmUudmVyc2lvbiA9IGdzYXAudmVyc2lvbiA9IFwiMy44LjBcIjtcbl9jb3JlUmVhZHkgPSAxO1xuX3dpbmRvd0V4aXN0cygpICYmIF93YWtlKCk7XG52YXIgUG93ZXIwID0gX2Vhc2VNYXAuUG93ZXIwLFxuICAgIFBvd2VyMSA9IF9lYXNlTWFwLlBvd2VyMSxcbiAgICBQb3dlcjIgPSBfZWFzZU1hcC5Qb3dlcjIsXG4gICAgUG93ZXIzID0gX2Vhc2VNYXAuUG93ZXIzLFxuICAgIFBvd2VyNCA9IF9lYXNlTWFwLlBvd2VyNCxcbiAgICBMaW5lYXIgPSBfZWFzZU1hcC5MaW5lYXIsXG4gICAgUXVhZCA9IF9lYXNlTWFwLlF1YWQsXG4gICAgQ3ViaWMgPSBfZWFzZU1hcC5DdWJpYyxcbiAgICBRdWFydCA9IF9lYXNlTWFwLlF1YXJ0LFxuICAgIFF1aW50ID0gX2Vhc2VNYXAuUXVpbnQsXG4gICAgU3Ryb25nID0gX2Vhc2VNYXAuU3Ryb25nLFxuICAgIEVsYXN0aWMgPSBfZWFzZU1hcC5FbGFzdGljLFxuICAgIEJhY2sgPSBfZWFzZU1hcC5CYWNrLFxuICAgIFN0ZXBwZWRFYXNlID0gX2Vhc2VNYXAuU3RlcHBlZEVhc2UsXG4gICAgQm91bmNlID0gX2Vhc2VNYXAuQm91bmNlLFxuICAgIFNpbmUgPSBfZWFzZU1hcC5TaW5lLFxuICAgIEV4cG8gPSBfZWFzZU1hcC5FeHBvLFxuICAgIENpcmMgPSBfZWFzZU1hcC5DaXJjO1xuZXhwb3J0IHsgUG93ZXIwLCBQb3dlcjEsIFBvd2VyMiwgUG93ZXIzLCBQb3dlcjQsIExpbmVhciwgUXVhZCwgQ3ViaWMsIFF1YXJ0LCBRdWludCwgU3Ryb25nLCBFbGFzdGljLCBCYWNrLCBTdGVwcGVkRWFzZSwgQm91bmNlLCBTaW5lLCBFeHBvLCBDaXJjIH07XG5leHBvcnQgeyBUd2VlbiBhcyBUd2Vlbk1heCwgVHdlZW4gYXMgVHdlZW5MaXRlLCBUaW1lbGluZSBhcyBUaW1lbGluZU1heCwgVGltZWxpbmUgYXMgVGltZWxpbmVMaXRlLCBnc2FwIGFzIGRlZmF1bHQsIHdyYXAsIHdyYXBZb3lvLCBkaXN0cmlidXRlLCByYW5kb20sIHNuYXAsIG5vcm1hbGl6ZSwgZ2V0VW5pdCwgY2xhbXAsIHNwbGl0Q29sb3IsIHRvQXJyYXksIHNlbGVjdG9yLCBtYXBSYW5nZSwgcGlwZSwgdW5pdGl6ZSwgaW50ZXJwb2xhdGUsIHNodWZmbGUgfTsgLy9leHBvcnQgc29tZSBpbnRlcm5hbCBtZXRob2RzL29yb2plY3RzIGZvciB1c2UgaW4gQ1NTUGx1Z2luIHNvIHRoYXQgd2UgY2FuIGV4dGVybmFsaXplIHRoYXQgZmlsZSBhbmQgYWxsb3cgY3VzdG9tIGJ1aWxkcyB0aGF0IGV4Y2x1ZGUgaXQuXG5cbmV4cG9ydCB7IF9nZXRQcm9wZXJ0eSwgX251bUV4cCwgX251bVdpdGhVbml0RXhwLCBfaXNTdHJpbmcsIF9pc1VuZGVmaW5lZCwgX3JlbmRlckNvbXBsZXhTdHJpbmcsIF9yZWxFeHAsIF9zZXREZWZhdWx0cywgX3JlbW92ZUxpbmtlZExpc3RJdGVtLCBfZm9yRWFjaE5hbWUsIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHksIF9jb2xvclN0cmluZ0ZpbHRlciwgX3JlcGxhY2VSYW5kb20sIF9jaGVja1BsdWdpbiwgX3BsdWdpbnMsIF90aWNrZXIsIF9jb25maWcsIF9yb3VuZE1vZGlmaWVyLCBfcm91bmQsIF9taXNzaW5nUGx1Z2luLCBfZ2V0U2V0dGVyLCBfZ2V0Q2FjaGUsIF9jb2xvckV4cCB9OyIsImltcG9ydCB7IGdzYXAsIFBvd2VyMCwgUG93ZXIxLCBQb3dlcjIsIFBvd2VyMywgUG93ZXI0LCBMaW5lYXIsIFF1YWQsIEN1YmljLCBRdWFydCwgUXVpbnQsIFN0cm9uZywgRWxhc3RpYywgQmFjaywgU3RlcHBlZEVhc2UsIEJvdW5jZSwgU2luZSwgRXhwbywgQ2lyYywgVHdlZW5MaXRlLCBUaW1lbGluZUxpdGUsIFRpbWVsaW5lTWF4IH0gZnJvbSBcIi4vZ3NhcC1jb3JlLmpzXCI7XG5pbXBvcnQgeyBDU1NQbHVnaW4gfSBmcm9tIFwiLi9DU1NQbHVnaW4uanNcIjtcbnZhciBnc2FwV2l0aENTUyA9IGdzYXAucmVnaXN0ZXJQbHVnaW4oQ1NTUGx1Z2luKSB8fCBnc2FwLFxuICAgIC8vIHRvIHByb3RlY3QgZnJvbSB0cmVlIHNoYWtpbmdcblR3ZWVuTWF4V2l0aENTUyA9IGdzYXBXaXRoQ1NTLmNvcmUuVHdlZW47XG5leHBvcnQgeyBnc2FwV2l0aENTUyBhcyBnc2FwLCBnc2FwV2l0aENTUyBhcyBkZWZhdWx0LCBDU1NQbHVnaW4sIFR3ZWVuTWF4V2l0aENTUyBhcyBUd2Vlbk1heCwgVHdlZW5MaXRlLCBUaW1lbGluZU1heCwgVGltZWxpbmVMaXRlLCBQb3dlcjAsIFBvd2VyMSwgUG93ZXIyLCBQb3dlcjMsIFBvd2VyNCwgTGluZWFyLCBRdWFkLCBDdWJpYywgUXVhcnQsIFF1aW50LCBTdHJvbmcsIEVsYXN0aWMsIEJhY2ssIFN0ZXBwZWRFYXNlLCBCb3VuY2UsIFNpbmUsIEV4cG8sIENpcmMgfTsiLCIvKiFcbiAqIHN0cmluZ3M6IDMuOC4wXG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAwOC0yMDIxLCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4qL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xudmFyIF90cmltRXhwID0gLyheXFxzK3xcXHMrJCkvZztcbmV4cG9ydCB2YXIgZW1vamlFeHAgPSAvKFtcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl0oPzpbXFx1MjAwRFxcdUZFMEZdW1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXSl7Mix9fFxcdUQ4M0RcXHVEQzY5KD86XFx1MjAwRCg/Oig/OlxcdUQ4M0RcXHVEQzY5XFx1MjAwRCk/XFx1RDgzRFxcdURDNjd8KD86XFx1RDgzRFxcdURDNjlcXHUyMDBEKT9cXHVEODNEXFx1REM2Nil8XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXxcXHVEODNEXFx1REM2OVxcdTIwMEQoPzpcXHVEODNEXFx1REM2OVxcdTIwMEQpP1xcdUQ4M0RcXHVEQzY2XFx1MjAwRFxcdUQ4M0RcXHVEQzY2fFxcdUQ4M0RcXHVEQzY5XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzY5XFx1MjAwRCk/XFx1RDgzRFxcdURDNjdcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pfFxcdUQ4M0NcXHVERkYzXFx1RkUwRlxcdTIwMERcXHVEODNDXFx1REYwOHwoPzpcXHVEODNDW1xcdURGQzNcXHVERkM0XFx1REZDQV18XFx1RDgzRFtcXHVEQzZFXFx1REM3MVxcdURDNzNcXHVEQzc3XFx1REM4MVxcdURDODJcXHVEQzg2XFx1REM4N1xcdURFNDUtXFx1REU0N1xcdURFNEJcXHVERTREXFx1REU0RVxcdURFQTNcXHVERUI0LVxcdURFQjZdfFxcdUQ4M0VbXFx1REQyNlxcdUREMzctXFx1REQzOVxcdUREM0RcXHVERDNFXFx1RERENi1cXHVEREREXSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pXFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGfFxcdUQ4M0RcXHVEQzY5KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKVxcdTIwMEQoPzpcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXSl8KD86XFx1RDgzQ1tcXHVERkMzXFx1REZDNFxcdURGQ0FdfFxcdUQ4M0RbXFx1REM2RVxcdURDNkZcXHVEQzcxXFx1REM3M1xcdURDNzdcXHVEQzgxXFx1REM4MlxcdURDODZcXHVEQzg3XFx1REU0NS1cXHVERTQ3XFx1REU0QlxcdURFNERcXHVERTRFXFx1REVBM1xcdURFQjQtXFx1REVCNl18XFx1RDgzRVtcXHVERDI2XFx1REQzNy1cXHVERDM5XFx1REQzQy1cXHVERDNFXFx1RERENi1cXHVERERGXSlcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEZ8XFx1RDgzQ1xcdURERkRcXHVEODNDXFx1RERGMHxcXHVEODNDXFx1RERGNlxcdUQ4M0NcXHVEREU2fFxcdUQ4M0NcXHVEREY0XFx1RDgzQ1xcdURERjJ8XFx1RDgzQ1xcdURERTkoPzpcXHVEODNDW1xcdURERUFcXHVEREVDXFx1RERFRlxcdURERjBcXHVEREYyXFx1RERGNFxcdURERkZdKXxcXHVEODNDXFx1RERGNyg/OlxcdUQ4M0NbXFx1RERFQVxcdURERjRcXHVEREY4XFx1RERGQVxcdURERkNdKXxcXHVEODNDXFx1RERFOCg/OlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREU5XFx1RERFQi1cXHVEREVFXFx1RERGMC1cXHVEREY1XFx1RERGN1xcdURERkEtXFx1RERGRl0pfCg/OlxcdTI2Rjl8XFx1RDgzQ1tcXHVERkNCXFx1REZDQ118XFx1RDgzRFxcdURENzUpKD86XFx1RkUwRlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdfCg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSlcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXSlcXHVGRTBGfCg/OlxcdUQ4M0RcXHVEQzQxXFx1RkUwRlxcdTIwMERcXHVEODNEXFx1RERFOHxcXHVEODNEXFx1REM2OSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSlcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzRFxcdURDNjlcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF18XFx1RDgzRFxcdURDNjgoPzooPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XSkpXFx1RkUwRnxcXHVEODNDXFx1RERGMig/OlxcdUQ4M0NbXFx1RERFNlxcdURERTgtXFx1RERFRFxcdURERjAtXFx1RERGRl0pfFxcdUQ4M0RcXHVEQzY5XFx1MjAwRCg/OlxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdTI3NjRcXHVGRTBGXFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKXxcXHVEODNEW1xcdURDNjhcXHVEQzY5XSkpfFxcdUQ4M0NcXHVEREYxKD86XFx1RDgzQ1tcXHVEREU2LVxcdURERThcXHVEREVFXFx1RERGMFxcdURERjctXFx1RERGQlxcdURERkVdKXxcXHVEODNDXFx1RERFRig/OlxcdUQ4M0NbXFx1RERFQVxcdURERjJcXHVEREY0XFx1RERGNV0pfFxcdUQ4M0NcXHVEREVEKD86XFx1RDgzQ1tcXHVEREYwXFx1RERGMlxcdURERjNcXHVEREY3XFx1RERGOVxcdURERkFdKXxcXHVEODNDXFx1RERFQig/OlxcdUQ4M0NbXFx1RERFRS1cXHVEREYwXFx1RERGMlxcdURERjRcXHVEREY3XSl8WyNcXCowLTldXFx1RkUwRlxcdTIwRTN8XFx1RDgzQ1xcdURERTcoPzpcXHVEODNDW1xcdURERTZcXHVEREU3XFx1RERFOS1cXHVEREVGXFx1RERGMS1cXHVEREY0XFx1RERGNi1cXHVEREY5XFx1RERGQlxcdURERkNcXHVEREZFXFx1RERGRl0pfFxcdUQ4M0NcXHVEREU2KD86XFx1RDgzQ1tcXHVEREU4LVxcdURERUNcXHVEREVFXFx1RERGMVxcdURERjJcXHVEREY0XFx1RERGNi1cXHVEREZBXFx1RERGQ1xcdURERkRcXHVEREZGXSl8XFx1RDgzQ1xcdURERkYoPzpcXHVEODNDW1xcdURERTZcXHVEREYyXFx1RERGQ10pfFxcdUQ4M0NcXHVEREY1KD86XFx1RDgzQ1tcXHVEREU2XFx1RERFQS1cXHVEREVEXFx1RERGMC1cXHVEREYzXFx1RERGNy1cXHVEREY5XFx1RERGQ1xcdURERkVdKXxcXHVEODNDXFx1RERGQig/OlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBXFx1RERFQ1xcdURERUVcXHVEREYzXFx1RERGQV0pfFxcdUQ4M0NcXHVEREYzKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUEtXFx1RERFQ1xcdURERUVcXHVEREYxXFx1RERGNFxcdURERjVcXHVEREY3XFx1RERGQVxcdURERkZdKXxcXHVEODNDXFx1REZGNFxcdURCNDBcXHVEQzY3XFx1REI0MFxcdURDNjIoPzpcXHVEQjQwXFx1REM3N1xcdURCNDBcXHVEQzZDXFx1REI0MFxcdURDNzN8XFx1REI0MFxcdURDNzNcXHVEQjQwXFx1REM2M1xcdURCNDBcXHVEQzc0fFxcdURCNDBcXHVEQzY1XFx1REI0MFxcdURDNkVcXHVEQjQwXFx1REM2NylcXHVEQjQwXFx1REM3RnxcXHVEODNEXFx1REM2OCg/OlxcdTIwMEQoPzpcXHUyNzY0XFx1RkUwRlxcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0RcXHVEQzY4fCg/Oig/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdTIwMEQpP1xcdUQ4M0RcXHVEQzY2XFx1MjAwRFxcdUQ4M0RcXHVEQzY2fCg/Oig/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdTIwMEQpP1xcdUQ4M0RcXHVEQzY3XFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2NlxcdURDNjddKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXSl8KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKVxcdTIwMEQoPzpcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXSkpfFxcdUQ4M0NcXHVEREY4KD86XFx1RDgzQ1tcXHVEREU2LVxcdURERUFcXHVEREVDLVxcdURERjRcXHVEREY3LVxcdURERjlcXHVEREZCXFx1RERGRC1cXHVEREZGXSl8XFx1RDgzQ1xcdURERjAoPzpcXHVEODNDW1xcdURERUFcXHVEREVDLVxcdURERUVcXHVEREYyXFx1RERGM1xcdURERjVcXHVEREY3XFx1RERGQ1xcdURERkVcXHVEREZGXSl8XFx1RDgzQ1xcdURERkUoPzpcXHVEODNDW1xcdURERUFcXHVEREY5XSl8XFx1RDgzQ1xcdURERUUoPzpcXHVEODNDW1xcdURERTgtXFx1RERFQVxcdURERjEtXFx1RERGNFxcdURERjYtXFx1RERGOV0pfFxcdUQ4M0NcXHVEREY5KD86XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERTlcXHVEREVCLVxcdURERURcXHVEREVGLVxcdURERjRcXHVEREY3XFx1RERGOVxcdURERkJcXHVEREZDXFx1RERGRl0pfFxcdUQ4M0NcXHVEREVDKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFN1xcdURERTktXFx1RERFRVxcdURERjEtXFx1RERGM1xcdURERjUtXFx1RERGQVxcdURERkNcXHVEREZFXSl8XFx1RDgzQ1xcdURERkEoPzpcXHVEODNDW1xcdURERTZcXHVEREVDXFx1RERGMlxcdURERjNcXHVEREY4XFx1RERGRVxcdURERkZdKXxcXHVEODNDXFx1RERFQSg/OlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBXFx1RERFQ1xcdURERURcXHVEREY3LVxcdURERkFdKXxcXHVEODNDXFx1RERGQyg/OlxcdUQ4M0NbXFx1RERFQlxcdURERjhdKXwoPzpcXHUyNkY5fFxcdUQ4M0NbXFx1REZDQlxcdURGQ0NdfFxcdUQ4M0RcXHVERDc1KSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8KD86XFx1RDgzQ1tcXHVERkMzXFx1REZDNFxcdURGQ0FdfFxcdUQ4M0RbXFx1REM2RVxcdURDNzFcXHVEQzczXFx1REM3N1xcdURDODFcXHVEQzgyXFx1REM4NlxcdURDODdcXHVERTQ1LVxcdURFNDdcXHVERTRCXFx1REU0RFxcdURFNEVcXHVERUEzXFx1REVCNC1cXHVERUI2XXxcXHVEODNFW1xcdUREMjZcXHVERDM3LVxcdUREMzlcXHVERDNEXFx1REQzRVxcdURERDYtXFx1RERERF0pKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXwoPzpbXFx1MjYxRFxcdTI3MEEtXFx1MjcwRF18XFx1RDgzQ1tcXHVERjg1XFx1REZDMlxcdURGQzddfFxcdUQ4M0RbXFx1REM0MlxcdURDNDNcXHVEQzQ2LVxcdURDNTBcXHVEQzY2XFx1REM2N1xcdURDNzBcXHVEQzcyXFx1REM3NC1cXHVEQzc2XFx1REM3OFxcdURDN0NcXHVEQzgzXFx1REM4NVxcdURDQUFcXHVERDc0XFx1REQ3QVxcdUREOTBcXHVERDk1XFx1REQ5NlxcdURFNENcXHVERTRGXFx1REVDMFxcdURFQ0NdfFxcdUQ4M0VbXFx1REQxOC1cXHVERDFDXFx1REQxRVxcdUREMUZcXHVERDMwLVxcdUREMzZcXHVEREQxLVxcdURERDVdKSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8XFx1RDgzRFxcdURDNjgoPzpcXHUyMDBEKD86KD86KD86XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1MjAwRCk/XFx1RDgzRFxcdURDNjd8KD86KD86XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1MjAwRCk/XFx1RDgzRFxcdURDNjYpfFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8KD86W1xcdTI2MURcXHUyNkY5XFx1MjcwQS1cXHUyNzBEXXxcXHVEODNDW1xcdURGODVcXHVERkMyLVxcdURGQzRcXHVERkM3XFx1REZDQS1cXHVERkNDXXxcXHVEODNEW1xcdURDNDJcXHVEQzQzXFx1REM0Ni1cXHVEQzUwXFx1REM2Ni1cXHVEQzY5XFx1REM2RVxcdURDNzAtXFx1REM3OFxcdURDN0NcXHVEQzgxLVxcdURDODNcXHVEQzg1LVxcdURDODdcXHVEQ0FBXFx1REQ3NFxcdURENzVcXHVERDdBXFx1REQ5MFxcdUREOTVcXHVERDk2XFx1REU0NS1cXHVERTQ3XFx1REU0Qi1cXHVERTRGXFx1REVBM1xcdURFQjQtXFx1REVCNlxcdURFQzBcXHVERUNDXXxcXHVEODNFW1xcdUREMTgtXFx1REQxQ1xcdUREMUVcXHVERDFGXFx1REQyNlxcdUREMzAtXFx1REQzOVxcdUREM0RcXHVERDNFXFx1REREMS1cXHVEREREXSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3woPzpbXFx1MjMxQVxcdTIzMUJcXHUyM0U5LVxcdTIzRUNcXHUyM0YwXFx1MjNGM1xcdTI1RkRcXHUyNUZFXFx1MjYxNFxcdTI2MTVcXHUyNjQ4LVxcdTI2NTNcXHUyNjdGXFx1MjY5M1xcdTI2QTFcXHUyNkFBXFx1MjZBQlxcdTI2QkRcXHUyNkJFXFx1MjZDNFxcdTI2QzVcXHUyNkNFXFx1MjZENFxcdTI2RUFcXHUyNkYyXFx1MjZGM1xcdTI2RjVcXHUyNkZBXFx1MjZGRFxcdTI3MDVcXHUyNzBBXFx1MjcwQlxcdTI3MjhcXHUyNzRDXFx1Mjc0RVxcdTI3NTMtXFx1Mjc1NVxcdTI3NTdcXHUyNzk1LVxcdTI3OTdcXHUyN0IwXFx1MjdCRlxcdTJCMUJcXHUyQjFDXFx1MkI1MFxcdTJCNTVdfFxcdUQ4M0NbXFx1REMwNFxcdURDQ0ZcXHVERDhFXFx1REQ5MS1cXHVERDlBXFx1RERFNi1cXHVEREZGXFx1REUwMVxcdURFMUFcXHVERTJGXFx1REUzMi1cXHVERTM2XFx1REUzOC1cXHVERTNBXFx1REU1MFxcdURFNTFcXHVERjAwLVxcdURGMjBcXHVERjJELVxcdURGMzVcXHVERjM3LVxcdURGN0NcXHVERjdFLVxcdURGOTNcXHVERkEwLVxcdURGQ0FcXHVERkNGLVxcdURGRDNcXHVERkUwLVxcdURGRjBcXHVERkY0XFx1REZGOC1cXHVERkZGXXxcXHVEODNEW1xcdURDMDAtXFx1REMzRVxcdURDNDBcXHVEQzQyLVxcdURDRkNcXHVEQ0ZGLVxcdUREM0RcXHVERDRCLVxcdURENEVcXHVERDUwLVxcdURENjdcXHVERDdBXFx1REQ5NVxcdUREOTZcXHVEREE0XFx1RERGQi1cXHVERTRGXFx1REU4MC1cXHVERUM1XFx1REVDQ1xcdURFRDAtXFx1REVEMlxcdURFRUJcXHVERUVDXFx1REVGNC1cXHVERUY4XXxcXHVEODNFW1xcdUREMTAtXFx1REQzQVxcdUREM0MtXFx1REQzRVxcdURENDAtXFx1REQ0NVxcdURENDctXFx1REQ0Q1xcdURENTAtXFx1REQ2QlxcdUREODAtXFx1REQ5N1xcdUREQzBcXHVEREQwLVxcdURERTZdKXwoPzpbI1xcKjAtOVxceEE5XFx4QUVcXHUyMDNDXFx1MjA0OVxcdTIxMjJcXHUyMTM5XFx1MjE5NC1cXHUyMTk5XFx1MjFBOVxcdTIxQUFcXHUyMzFBXFx1MjMxQlxcdTIzMjhcXHUyM0NGXFx1MjNFOS1cXHUyM0YzXFx1MjNGOC1cXHUyM0ZBXFx1MjRDMlxcdTI1QUFcXHUyNUFCXFx1MjVCNlxcdTI1QzBcXHUyNUZCLVxcdTI1RkVcXHUyNjAwLVxcdTI2MDRcXHUyNjBFXFx1MjYxMVxcdTI2MTRcXHUyNjE1XFx1MjYxOFxcdTI2MURcXHUyNjIwXFx1MjYyMlxcdTI2MjNcXHUyNjI2XFx1MjYyQVxcdTI2MkVcXHUyNjJGXFx1MjYzOC1cXHUyNjNBXFx1MjY0MFxcdTI2NDJcXHUyNjQ4LVxcdTI2NTNcXHUyNjYwXFx1MjY2M1xcdTI2NjVcXHUyNjY2XFx1MjY2OFxcdTI2N0JcXHUyNjdGXFx1MjY5Mi1cXHUyNjk3XFx1MjY5OVxcdTI2OUJcXHUyNjlDXFx1MjZBMFxcdTI2QTFcXHUyNkFBXFx1MjZBQlxcdTI2QjBcXHUyNkIxXFx1MjZCRFxcdTI2QkVcXHUyNkM0XFx1MjZDNVxcdTI2QzhcXHUyNkNFXFx1MjZDRlxcdTI2RDFcXHUyNkQzXFx1MjZENFxcdTI2RTlcXHUyNkVBXFx1MjZGMC1cXHUyNkY1XFx1MjZGNy1cXHUyNkZBXFx1MjZGRFxcdTI3MDJcXHUyNzA1XFx1MjcwOC1cXHUyNzBEXFx1MjcwRlxcdTI3MTJcXHUyNzE0XFx1MjcxNlxcdTI3MURcXHUyNzIxXFx1MjcyOFxcdTI3MzNcXHUyNzM0XFx1Mjc0NFxcdTI3NDdcXHUyNzRDXFx1Mjc0RVxcdTI3NTMtXFx1Mjc1NVxcdTI3NTdcXHUyNzYzXFx1Mjc2NFxcdTI3OTUtXFx1Mjc5N1xcdTI3QTFcXHUyN0IwXFx1MjdCRlxcdTI5MzRcXHUyOTM1XFx1MkIwNS1cXHUyQjA3XFx1MkIxQlxcdTJCMUNcXHUyQjUwXFx1MkI1NVxcdTMwMzBcXHUzMDNEXFx1MzI5N1xcdTMyOTldfFxcdUQ4M0NbXFx1REMwNFxcdURDQ0ZcXHVERDcwXFx1REQ3MVxcdUREN0VcXHVERDdGXFx1REQ4RVxcdUREOTEtXFx1REQ5QVxcdURERTYtXFx1RERGRlxcdURFMDFcXHVERTAyXFx1REUxQVxcdURFMkZcXHVERTMyLVxcdURFM0FcXHVERTUwXFx1REU1MVxcdURGMDAtXFx1REYyMVxcdURGMjQtXFx1REY5M1xcdURGOTZcXHVERjk3XFx1REY5OS1cXHVERjlCXFx1REY5RS1cXHVERkYwXFx1REZGMy1cXHVERkY1XFx1REZGNy1cXHVERkZGXXxcXHVEODNEW1xcdURDMDAtXFx1RENGRFxcdURDRkYtXFx1REQzRFxcdURENDktXFx1REQ0RVxcdURENTAtXFx1REQ2N1xcdURENkZcXHVERDcwXFx1REQ3My1cXHVERDdBXFx1REQ4N1xcdUREOEEtXFx1REQ4RFxcdUREOTBcXHVERDk1XFx1REQ5NlxcdUREQTRcXHVEREE1XFx1RERBOFxcdUREQjFcXHVEREIyXFx1RERCQ1xcdUREQzItXFx1RERDNFxcdURERDEtXFx1REREM1xcdUREREMtXFx1RERERVxcdURERTFcXHVEREUzXFx1RERFOFxcdURERUZcXHVEREYzXFx1RERGQS1cXHVERTRGXFx1REU4MC1cXHVERUM1XFx1REVDQi1cXHVERUQyXFx1REVFMC1cXHVERUU1XFx1REVFOVxcdURFRUJcXHVERUVDXFx1REVGMFxcdURFRjMtXFx1REVGOF18XFx1RDgzRVtcXHVERDEwLVxcdUREM0FcXHVERDNDLVxcdUREM0VcXHVERDQwLVxcdURENDVcXHVERDQ3LVxcdURENENcXHVERDUwLVxcdURENkJcXHVERDgwLVxcdUREOTdcXHVEREMwXFx1REREMC1cXHVEREU2XSlcXHVGRTBGKS87XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dChlKSB7XG4gIHZhciB0eXBlID0gZS5ub2RlVHlwZSxcbiAgICAgIHJlc3VsdCA9IFwiXCI7XG5cbiAgaWYgKHR5cGUgPT09IDEgfHwgdHlwZSA9PT0gOSB8fCB0eXBlID09PSAxMSkge1xuICAgIGlmICh0eXBlb2YgZS50ZXh0Q29udGVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIGUudGV4dENvbnRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoZSA9IGUuZmlyc3RDaGlsZDsgZTsgZSA9IGUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgcmVzdWx0ICs9IGdldFRleHQoZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09IDMgfHwgdHlwZSA9PT0gNCkge1xuICAgIHJldHVybiBlLm5vZGVWYWx1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gc3BsaXRJbm5lckhUTUwoZWxlbWVudCwgZGVsaW1pdGVyLCB0cmltLCBwcmVzZXJ2ZVNwYWNlcykge1xuICB2YXIgbm9kZSA9IGVsZW1lbnQuZmlyc3RDaGlsZCxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgcztcblxuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICBzID0gKG5vZGUubm9kZVZhbHVlICsgXCJcIikucmVwbGFjZSgvXlxcbisvZywgXCJcIik7XG5cbiAgICAgIGlmICghcHJlc2VydmVTcGFjZXMpIHtcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvXFxzKy9nLCBcIiBcIik7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5wdXNoLmFwcGx5KHJlc3VsdCwgZW1vamlTYWZlU3BsaXQocywgZGVsaW1pdGVyLCB0cmltLCBwcmVzZXJ2ZVNwYWNlcykpO1xuICAgIH0gZWxzZSBpZiAoKG5vZGUubm9kZU5hbWUgKyBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSBcImJyXCIpIHtcbiAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gKz0gXCI8YnI+XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKG5vZGUub3V0ZXJIVE1MKTtcbiAgICB9XG5cbiAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4vKlxuLy9zbWFsbGVyIGtiIHZlcnNpb24gdGhhdCBvbmx5IGhhbmRsZXMgdGhlIHNpbXBsZXIgZW1vamkncywgd2hpY2ggaXMgb2Z0ZW4gcGVyZmVjdGx5IGFkZXF1YXRlLlxuXG5sZXQgX2Vtb2ppID0gXCJbXFx1RTAwMC1cXHVGOEZGXXxcXHVEODNDW1xcdURDMDAtXFx1REZGRl18XFx1RDgzRFtcXHVEQzAwLVxcdURGRkZdfFtcXHUyNjk0LVxcdTI2OTddfFxcdUQ4M0VbXFx1REQxMC1cXHVERDVEXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdXCIsXG5cdF9lbW9qaUV4cCA9IG5ldyBSZWdFeHAoX2Vtb2ppKSxcblx0X2Vtb2ppQW5kQ2hhcnNFeHAgPSBuZXcgUmVnRXhwKF9lbW9qaSArIFwifC5cIiwgXCJnXCIpLFxuXHRfZW1vamlTYWZlU3BsaXQgPSAodGV4dCwgZGVsaW1pdGVyLCB0cmltKSA9PiB7XG5cdFx0aWYgKHRyaW0pIHtcblx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoX3RyaW1FeHAsIFwiXCIpO1xuXHRcdH1cblx0XHRyZXR1cm4gKChkZWxpbWl0ZXIgPT09IFwiXCIgfHwgIWRlbGltaXRlcikgJiYgX2Vtb2ppRXhwLnRlc3QodGV4dCkpID8gdGV4dC5tYXRjaChfZW1vamlBbmRDaGFyc0V4cCkgOiB0ZXh0LnNwbGl0KGRlbGltaXRlciB8fCBcIlwiKTtcblx0fTtcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1vamlTYWZlU3BsaXQodGV4dCwgZGVsaW1pdGVyLCB0cmltLCBwcmVzZXJ2ZVNwYWNlcykge1xuICB0ZXh0ICs9IFwiXCI7IC8vIG1ha2Ugc3VyZSBpdCdzIGNhc3QgYXMgYSBzdHJpbmcuIFNvbWVvbmUgbWF5IHBhc3MgaW4gYSBudW1iZXIuXG5cbiAgaWYgKHRyaW0pIHtcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKF90cmltRXhwLCBcIlwiKTtcbiAgfVxuXG4gIGlmIChkZWxpbWl0ZXIgJiYgZGVsaW1pdGVyICE9PSBcIlwiKSB7XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvPi9nLCBcIiZndDtcIikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIikuc3BsaXQoZGVsaW1pdGVyKTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXSxcbiAgICAgIGwgPSB0ZXh0Lmxlbmd0aCxcbiAgICAgIGkgPSAwLFxuICAgICAgaixcbiAgICAgIGNoYXJhY3RlcjtcblxuICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgIGNoYXJhY3RlciA9IHRleHQuY2hhckF0KGkpO1xuXG4gICAgaWYgKGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApID49IDB4RDgwMCAmJiBjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKSA8PSAweERCRkYgfHwgdGV4dC5jaGFyQ29kZUF0KGkgKyAxKSA+PSAweEZFMDAgJiYgdGV4dC5jaGFyQ29kZUF0KGkgKyAxKSA8PSAweEZFMEYpIHtcbiAgICAgIC8vc3BlY2lhbCBlbW9qaSBjaGFyYWN0ZXJzIHVzZSAyIG9yIDQgdW5pY29kZSBjaGFyYWN0ZXJzIHRoYXQgd2UgbXVzdCBrZWVwIHRvZ2V0aGVyLlxuICAgICAgaiA9ICgodGV4dC5zdWJzdHIoaSwgMTIpLnNwbGl0KGVtb2ppRXhwKSB8fCBbXSlbMV0gfHwgXCJcIikubGVuZ3RoIHx8IDI7XG4gICAgICBjaGFyYWN0ZXIgPSB0ZXh0LnN1YnN0cihpLCBqKTtcbiAgICAgIHJlc3VsdC5lbW9qaSA9IDE7XG4gICAgICBpICs9IGogLSAxO1xuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKGNoYXJhY3RlciA9PT0gXCI+XCIgPyBcIiZndDtcIiA6IGNoYXJhY3RlciA9PT0gXCI8XCIgPyBcIiZsdDtcIiA6IHByZXNlcnZlU3BhY2VzICYmIGNoYXJhY3RlciA9PT0gXCIgXCIgJiYgKHRleHQuY2hhckF0KGkgLSAxKSA9PT0gXCIgXCIgfHwgdGV4dC5jaGFyQXQoaSArIDEpID09PSBcIiBcIikgPyBcIiZuYnNwO1wiIDogY2hhcmFjdGVyKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IFRleHRQbHVnaW4gZnJvbSBcImdzYXAvVGV4dFBsdWdpblwiO1xuaW1wb3J0IHtcbiAgZ2V0VHVybixcbiAgY2hlY2tSZXN1bHRzLFxuICBzZXRDb21wRGlmZmljdWx0eSxcbiAgc3RhcnRUaW1lcixcbiAgZ2V0VGltZXIsXG4gIHJlc2V0VHVybnMsXG4gIHNldFBsYXllcixcbn0gZnJvbSBcIi4vR2FtZVwiO1xuaW1wb3J0IHsgY2xlYXJCb2FyZCB9IGZyb20gXCIuL0dhbWVib2FyZFwiO1xuaW1wb3J0IHsgY3JlYXRlUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oVGV4dFBsdWdpbik7XG5cbmNvbnN0IGJvYXJkU3BhY2VBcnJheSA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XTtcbmNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZWJvYXJkLWNvbnRhaW5lclwiKTtcbmNvbnN0IGVudGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnRlci1idG5cIik7XG5jb25zdCBzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXJ0LWJ0blwiKTtcbmNvbnN0IHBsYXllclNlbGVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllci1zZWxlY3QtZm9ybVwiKTtcbmNvbnN0IGNvbXB1dGVyU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zd2l0Y2gtcmFkaW9cIik7XG5jb25zdCBwbGF5ZXJUd29JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXItdHdvLWljb25cIik7XG5jb25zdCBwbGF5ZXJPbmVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXItb25lLW5hbWVcIik7XG5jb25zdCBwbGF5ZXJUd29OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXItdHdvLW5hbWVcIik7XG5sZXQgZGlmZmljdWx0eTtcbmxldCBwbGF5ZXJPbmU7XG5sZXQgcGxheWVyVHdvO1xuY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdGFydC1idG5cIik7XG5jb25zdCB0aW1lTW9kZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZS1tb2RlLWJ0blwiKTtcbmNvbnN0IHRpbWVNb2RlU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGUtc2VsZWN0b3JcIik7XG50aW1lTW9kZVNlbGVjdG9yLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuY29uc3QgdGltZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVyXCIpO1xuY29uc3QgZGlmZmljdWx0eVNlbGVjdG9yTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdG9yLWxhYmVsXCIpO1xuY29uc3QgZGlmZmljdWx0eVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaWZmaWN1bHR5LXNlbGVjdG9yXCIpO1xuY29uc3QgcGxheWVyT25lU2NvcmVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllci1vbmUtc2NvcmVcIik7XG5jb25zdCBwbGF5ZXJUd29TY29yZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyLXR3by1zY29yZVwiKTtcbmNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbWUtY29udGFpbmVyXCIpO1xuXG5leHBvcnQgY29uc3Qgc2hvd1Jlc3RhcnRCdG4gPSAoKSA9PiB7XG4gIHJlc3RhcnRCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERpZmZpY3VsdHkgPSAoKSA9PiBkaWZmaWN1bHR5O1xuXG5jb25zdCByZXN1bHRBbm5vdW5jZSA9IChzdHJpbmcpID0+IHtcbiAgY29uc3QgcmVzdWx0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgcmVzdWx0VGV4dC5jbGFzc0xpc3QuYWRkKFwiZy1oMlwiKTtcbiAgcmVzdWx0VGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlc3VsdC1hbm5vdW5jZVwiKTtcbiAgcmVzdWx0VGV4dC50ZXh0Q29udGVudCA9IHN0cmluZztcbiAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN1bHRUZXh0KTtcblxuICBjb25zdCByZXN1bHRBbmltYXRpb24gPSBnc2FwLnRpbWVsaW5lKCk7XG4gIHJlc3VsdEFuaW1hdGlvblxuICAgIC50byhcIiNyZXN1bHQtYW5ub3VuY2VcIiwge1xuICAgICAgZHVyYXRpb246IDAuNzUsXG4gICAgICBzY2FsZTogNyxcbiAgICAgIGVhc2U6IFwiYmFjay5vdXRcIixcbiAgICB9KVxuICAgIC50byhcIiNyZXN1bHQtYW5ub3VuY2VcIiwge1xuICAgICAgZHVyYXRpb246IDAuNzUsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgIG9uQ29tcGxldGUoKSB7XG4gICAgICAgIGdhbWVDb250YWluZXIucmVtb3ZlQ2hpbGQocmVzdWx0VGV4dCk7XG4gICAgICB9LFxuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gcGxheWVyVHVybihwbGF5ZXIsIHNjb3JlQ29udGFpbmVyLCBwbGF5ZXJUaXRsZSkge1xuICBjb25zdCB0dXJuUmVzdWx0ID0gcGxheWVyLnJvdW5kV2luQ2hlY2soKTtcbiAgY29uc3QgbWF0Y2hSZXN1bHQgPSBwbGF5ZXIubWF0Y2hXaW5DaGVjaygpO1xuICBjb25zb2xlLmxvZyhtYXRjaFJlc3VsdClcbiAgaWYgKHR1cm5SZXN1bHQgIT09IGZhbHNlICYmIG1hdGNoUmVzdWx0ICE9PSB0cnVlKSB7XG4gICAgaWYgKHR1cm5SZXN1bHQgPT09IHRydWUpIHtcbiAgICAgIHNjb3JlRGlzcGxheShzY29yZUNvbnRhaW5lcik7XG4gICAgICByZXN1bHRBbm5vdW5jZShgJHtwbGF5ZXJUaXRsZX0gd2lucyFgKTtcbiAgICB9XG4gICAgaWYgKHR1cm5SZXN1bHQgPT09IFwidGllXCIpIHtcbiAgICAgIHJlc3VsdEFubm91bmNlKFwiSXQncyBhIHRpZSFcIilcbiAgICB9XG4gIH1cbiAgaWYgKG1hdGNoUmVzdWx0ID09PSB0cnVlKSB7XG4gICAgc2NvcmVEaXNwbGF5KHNjb3JlQ29udGFpbmVyKTtcbiAgICByZXN1bHRBbm5vdW5jZShgJHtwbGF5ZXJUaXRsZX0gd2lucyB0aGUgbWF0Y2ghYCk7XG4gIH1cbiAgc2hvd1Jlc3RhcnRCdG4oKTtcbiAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Qm9hcmQoKSB7XG4gIGJvYXJkU3BhY2VBcnJheS5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkU3BhY2UuY2xhc3NMaXN0LmFkZChcImJvYXJkLXNwYWNlXCIpO1xuICAgIGJvYXJkU3BhY2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHNlY3Rvci0ke2luZGV4fWApO1xuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZFNwYWNlKTtcblxuICAgIGJvYXJkU3BhY2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgYm9hcmRTcGFjZS50ZXh0Q29udGVudCAhPT0gXCJ4XCIgJiZcbiAgICAgICAgYm9hcmRTcGFjZS50ZXh0Q29udGVudCAhPT0gXCJvXCIgJiZcbiAgICAgICAgcGxheWVyT25lLnJvdW5kV2luQ2hlY2soKSAhPT0gdHJ1ZSAmJlxuICAgICAgICBwbGF5ZXJUd28ucm91bmRXaW5DaGVjaygpICE9PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgaWYgKGdldFR1cm4oKSAlIDIgPT09IDAgJiYgcGxheWVyVHdvLmdldE5hbWUoKSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgICAgcGxheWVyT25lLnBsYXlUdXJuKGJvYXJkU3BhY2UsIGluZGV4KTtcbiAgICAgICAgICBwbGF5ZXJUdXJuKHBsYXllck9uZSwgcGxheWVyT25lU2NvcmVDb250YWluZXIsIFwiUGxheWVyIE9uZVwiKVxuXG4gICAgICAgICAgaWYgKGNoZWNrUmVzdWx0cyhwbGF5ZXJPbmUuZ2V0TWFya2VyKCkpICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBwbGF5ZXJUd28uY29tcHV0ZXJUdXJuKCk7XG4gICAgICAgICAgICBwbGF5ZXJUdXJuKHBsYXllclR3bywgcGxheWVyVHdvU2NvcmVDb250YWluZXIsIFwiUGxheWVyIFR3b1wiKVxuXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGdldFR1cm4oKSAlIDIgPT09IDApIHtcbiAgICAgICAgICBwbGF5ZXJPbmUucGxheVR1cm4oYm9hcmRTcGFjZSwgaW5kZXgpO1xuICAgICAgICAgIHBsYXllclR1cm4ocGxheWVyT25lLCBwbGF5ZXJPbmVTY29yZUNvbnRhaW5lciwgXCJQbGF5ZXIgT25lXCIpXG5cbiAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXJUd28ucGxheVR1cm4oYm9hcmRTcGFjZSwgaW5kZXgpO1xuICAgICAgICAgIHBsYXllclR1cm4ocGxheWVyVHdvLCBwbGF5ZXJUd29TY29yZUNvbnRhaW5lciwgXCJQbGF5ZXIgVHdvXCIpXG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gIENIRUNLIElGIFRISVMgSVMgTkVDRVNTQVJZISBJIGRvbid0IHRoaW5rIGl0IGlzLCBkb24ndCByZW1lbWJlciBzZWVpbmcgdGhpcyBjb25zb2xlIGxvZ1xuICAgICAgLy8gZXZlciBhbmQgdGhlIHJvdW5kV2luQ2hlY2sgZnVuY3Rpb25zIGFscmVhZHkgdXNlIGNoZWNrUmVzdWx0c1xuICAgICAgZWxzZSBpZiAoXG4gICAgICAgIGNoZWNrUmVzdWx0cyhwbGF5ZXJPbmUuZ2V0TWFya2VyKCkpIHx8XG4gICAgICAgIGNoZWNrUmVzdWx0cyhwbGF5ZXJUd28uZ2V0TWFya2VyKCkpXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyb3VuZCBvdmVyXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2NvcmVEaXNwbGF5KGNvbnRhaW5lcikge1xuICBjb25zdCBwbGF5ZXJQb2ludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllclBvaW50LmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItcG9pbnRcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJQb2ludCk7XG59XG5mdW5jdGlvbiBjbGVhclNjb3JlYm9hcmQoKSB7XG4gIHdoaWxlIChwbGF5ZXJPbmVTY29yZUNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgcGxheWVyT25lU2NvcmVDb250YWluZXIucmVtb3ZlQ2hpbGQocGxheWVyT25lU2NvcmVDb250YWluZXIubGFzdENoaWxkKTtcbiAgfVxuICB3aGlsZSAocGxheWVyVHdvU2NvcmVDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIHBsYXllclR3b1Njb3JlQ29udGFpbmVyLnJlbW92ZUNoaWxkKHBsYXllclR3b1Njb3JlQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFJhZGlvVmFsdWUocmFkaW9Hcm91cCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShyYWRpb0dyb3VwKTtcbiAgY29uc3QgYXJyYXkgPSBbLi4uZWxlbWVudF0uZmlsdGVyKCh4KSA9PiB4LmNoZWNrZWQpO1xuXG4gIHJldHVybiBhcnJheVswXS52YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVDb250cm9sbGVyKCkge1xuICBjb25zdCBzaG93RWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIH07XG5cbiAgZW50ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBpbnRyb1RvUGxheWVyU2VsZWN0ID0gZ3NhcC50aW1lbGluZSgpO1xuXG4gICAgaW50cm9Ub1BsYXllclNlbGVjdFxuICAgICAgLnRvKFwiI2VudGVyLWJ0blwiLCB7IGR1cmF0aW9uOiAxLCB4UGVyY2VudDogLTE1MCB9LCAwKVxuICAgICAgLnRvKFwiI2ludHJvLXNjcmVlblwiLCB7IGR1cmF0aW9uOiAwLjgsIHhQZXJjZW50OiAtMTUwIH0sIDAuMylcbiAgICAgIC50byhcbiAgICAgICAgXCIjcGxheWVyLXNlbGVjdC1mb3JtXCIsXG4gICAgICAgIHsgZHVyYXRpb246IDEsIHhQZXJjZW50OiAtMTUwLjIsIHlQZXJjZW50OiAwIH0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICAgIC50byhcIiNpbnRyby1jb250YWluZXJcIiwgeyBhdXRvQWxwaGE6IDAsIGRlbGF5OiAzIH0pO1xuICB9KTtcblxuICAvLyBmb3JtIGNvbnRyb2xcbiAgY29uc3QgaW50cm9BbmltYXRpb24gPSBnc2FwLnRpbWVsaW5lKCk7XG4gIGludHJvQW5pbWF0aW9uXG4gICAgLnRvKFwiI2ludHJvLXRpdGxlXCIsIHtcbiAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICByb3RhdGU6IDcyMCxcbiAgICAgIHBlcnNwZWN0aXZlOiA1MDAsXG4gICAgICBzY2FsZTogNTAsXG4gICAgICBlYXNlOiBcImJhY2sub3V0XCIsXG4gICAgfSlcbiAgICAuZnJvbShcIiNlbnRlci1idG5cIiwgeyBkdXJhdGlvbjogMSwgeDogMTAwMCB9KTtcblxuICBjb25zdCBwbGF5ZXJUb2dnbGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm9kZUxpc3RBcnJheSA9IFsuLi5jb21wdXRlclN3aXRjaF0uZmlsdGVyKCh4KSA9PiB4LmNoZWNrZWQpO1xuXG4gICAgaWYgKG5vZGVMaXN0QXJyYXlbMF0udmFsdWUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgIGRpZmZpY3VsdHlTZWxlY3Rvci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIGRpZmZpY3VsdHlTZWxlY3RvckxhYmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgcGxheWVyVHdvSWNvbi5zcmMgPSBcIi9pbWFnZXMvcGxheWVyLXR3by1pY29uLnBuZ1wiO1xuICAgICAgcGxheWVyVHdvTmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICBwbGF5ZXJUd29OYW1lLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChub2RlTGlzdEFycmF5WzBdLnZhbHVlID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgIHBsYXllclR3b0ljb24uc3JjID0gXCIvaW1hZ2VzL2FpLWljb24ucG5nXCI7XG4gICAgICBwbGF5ZXJUd29OYW1lLnZhbHVlID0gXCJjb21wdXRlclwiO1xuICAgICAgcGxheWVyVHdvTmFtZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBkaWZmaWN1bHR5U2VsZWN0b3IudGV4dENvbnRlbnQgPSBcIm5ldyBvbiB0aGUgam9iXCI7XG4gICAgICBkaWZmaWN1bHR5U2VsZWN0b3Iuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgZGlmZmljdWx0eVNlbGVjdG9yTGFiZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgZGlmZmljdWx0eVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpZmZpY3VsdGllcyA9IFtcbiAgICAgICAgICBcIm5ldyBvbiB0aGUgam9iXCIsXG4gICAgICAgICAgXCJpbiB0cmFpbmluZ1wiLFxuICAgICAgICAgIFwiaGlnaGx5IHNraWxsZWRcIixcbiAgICAgICAgICBcInVuc3RvcHBhYmxlXCIsXG4gICAgICAgIF07XG4gICAgICAgIGlmIChjb3VudCA8IDMpIHtcbiAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICAgIGRpZmZpY3VsdHkgPSBkaWZmaWN1bHRpZXNbY291bnRdO1xuICAgICAgICAgIGRpZmZpY3VsdHlTZWxlY3Rvci50ZXh0Q29udGVudCA9IGRpZmZpY3VsdHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgIGRpZmZpY3VsdHkgPSBkaWZmaWN1bHRpZXNbY291bnRdO1xuICAgICAgICAgIGRpZmZpY3VsdHlTZWxlY3Rvci50ZXh0Q29udGVudCA9IGRpZmZpY3VsdHk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0Q29tcERpZmZpY3VsdHkoZGlmZmljdWx0eSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29tcHV0ZXJTd2l0Y2guZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBwbGF5ZXJUb2dnbGUoKSk7XG4gICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gIH0pO1xuXG4gIHJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAocGxheWVyT25lLmdldFNjb3JlKCkgPT09IDUgfHwgcGxheWVyVHdvLmdldFNjb3JlKCkgPT09IDUpIHtcbiAgICAgIGNsZWFyU2NvcmVib2FyZCgpO1xuICAgICAgY2xlYXJCb2FyZCgpO1xuICAgICAgcGxheWVyT25lLnJlc2V0U2NvcmUoKTtcbiAgICAgIHBsYXllclR3by5yZXNldFNjb3JlKCk7XG4gICAgICByZXNldFR1cm5zKCk7XG4gICAgICByZXN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgc3RhcnRUaW1lcihcIi5zZWNvbmRzXCIsIGdldFRpbWVyKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGVhckJvYXJkKCk7XG4gICAgICByZXNldFR1cm5zKCk7XG4gICAgICByZXN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIH1cbiAgfSk7XG5cbiAgcGxheWVyU2VsZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBwbGF5ZXJPbmUgPSBjcmVhdGVQbGF5ZXIoXG4gICAgICAxLFxuICAgICAgcGxheWVyT25lTmFtZS52YWx1ZSxcbiAgICAgIHNldFJhZGlvVmFsdWUoXCJwbGF5ZXItb25lLXJhZGlvXCIpXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXJPbmUpO1xuICAgIHBsYXllclR3byA9IGNyZWF0ZVBsYXllcihcbiAgICAgIDIsXG4gICAgICBwbGF5ZXJUd29OYW1lLnZhbHVlLFxuICAgICAgc2V0UmFkaW9WYWx1ZShcInBsYXllci10d28tcmFkaW9cIilcbiAgICApO1xuXG4gICAgc2V0UGxheWVyKHBsYXllck9uZSk7XG5cbiAgICBzZXRQbGF5ZXIocGxheWVyVHdvKTtcbiAgfSk7XG5cbiAgc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdGltZXJTZXQgPSBzZXRSYWRpb1ZhbHVlKFwidGltZS1yYWRpb1wiKTtcbiAgICBjb25zb2xlLmxvZyh0aW1lclNldCk7XG4gICAgY29uc3QgbW9kZVNldCA9IHNldFJhZGlvVmFsdWUoXCJleHRyZW1lLXJhZGlvXCIpO1xuICAgIGNvbnNvbGUubG9nKG1vZGVTZXQpO1xuICAgIGNvbnNvbGUubG9nKGAke3RpbWVyU2V0fSBvbiBjbGlja2ApO1xuXG4gICAgZnVuY3Rpb24gcGxheUdhbWVUaGVtZSgpIHtcbiAgICAgIGNvbnN0IGdhbWVUaGVtZSA9IG5ldyBBdWRpbyhcIi4uL2F1ZGlvL2xpZ2h0d2F2ZS1nYW1lLXRoZW1lLm1wM1wiKTtcbiAgICAgIGlmICh0eXBlb2YgZ2FtZVRoZW1lLmxvb3AgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIGdhbWVUaGVtZS5sb29wID0gdHJ1ZTtcbiAgICAgICAgZ2FtZVRoZW1lLnBsYXkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdhbWVUaGVtZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiZW5kZWRcIixcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwbGF5ZXJTZWxlY3RFeGl0ID0gZ3NhcC50aW1lbGluZSgpO1xuICAgIGNvbnN0IGJvYXJkRW50ZXIgPSBnc2FwLnRpbWVsaW5lKCk7XG4gICAgY29uc3QgY291bnRkb3duQW5pbWF0aW9uID0gZ3NhcC50aW1lbGluZSgpO1xuICAgIGNvbnN0IGJvYXJkU3BhY2VBbmltYXRpb24gPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHJlcGVhdDogLTEsXG4gICAgICByZXBlYXREZWxheTogMCxcbiAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGVhc2U6IFwicG93ZXI0XCIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGJvYXJkU2NhbGVBbmltYXRpb24gPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHJlcGVhdDogLTEsXG4gICAgICByZXBlYXREZWxheTogMCxcbiAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGVhc2U6IFwicG93ZXIxLm91dFwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGJvYXJkU3BpbkFuaW1hdGlvbiA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgcmVwZWF0OiAtMSxcbiAgICAgIHJlcGVhdERlbGF5OiAwLFxuICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgZWFzZTogXCJwb3dlcjEub3V0XCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgYmVhdER1cmF0aW9uID0gNjAgLyAxMzA7XG5cbiAgICBjb25zdCB0aW1lckRpc3BsYXkgPSAodmFsdWUpID0+IHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gXCJlbmRsZXNzXCIpIHtcbiAgICAgICAgYm9hcmRFbnRlclxuICAgICAgICAgIC50byhcIiNnYW1lYm9hcmQtY29udGFpbmVyXCIsIHsgZHVyYXRpb246IDAsIGRlbGF5OiAzLCBhdXRvQWxwaGE6IDEgfSlcbiAgICAgICAgICAuY2FsbChwbGF5R2FtZVRoZW1lLCBudWxsLCAzICsgYmVhdER1cmF0aW9uIC8gNCk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBcImVuZGxlc3NcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRpbWVyIGluaXRpYWxpemVkXCIpO1xuICAgICAgICBib2FyZEVudGVyXG4gICAgICAgICAgLnRvKFwiI2dhbWVib2FyZC1jb250YWluZXJcIiwgeyBkdXJhdGlvbjogMCwgZGVsYXk6IDMsIGF1dG9BbHBoYTogMSB9KVxuICAgICAgICAgIC5jYWxsKHBsYXlHYW1lVGhlbWUsIG51bGwsIDMgKyBiZWF0RHVyYXRpb24gLyA0KVxuICAgICAgICAgIC5jYWxsKHN0YXJ0VGltZXIsIFtcIi5zZWNvbmRzXCIsIHZhbHVlXSwgbnVsbCwgMyArIGJlYXREdXJhdGlvbiAvIDQpXG4gICAgICAgICAgLmNhbGwoc2hvd0VsZW1lbnQsIFt0aW1lckRpdl0sIG51bGwsIDMgKyBiZWF0RHVyYXRpb24gLyA0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGltZXJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZVwiLCAoKSA9PiB7XG4gICAgICBpZiAodGltZXJEaXYudGV4dENvbnRlbnQgPT09IDEpIHNob3dSZXN0YXJ0QnRuKCk7XG4gICAgfSk7XG5cbiAgICB0aW1lckRpc3BsYXkodGltZXJTZXQpO1xuXG4gICAgcGxheWVyU2VsZWN0RXhpdFxuICAgICAgLnRvKFwiI3BsYXllci1zZWxlY3QtZm9ybVwiLCB7IGR1cmF0aW9uOiAxLCB4UGVyY2VudDogLTMwMCB9KVxuICAgICAgLnRvKFwiI3BsYXllci1zZWxlY3QtZm9ybVwiLCB7IGF1dG9BbHBoYTogMCB9KTtcblxuICAgIGNvdW50ZG93bkFuaW1hdGlvblxuICAgICAgLnRvKFwiI2dhbWUtY29udGFpbmVyXCIsIHsgZHVyYXRpb246IDEsIHhQZXJjZW50OiAtMzAwLCB5UGVyY2VudDogLTM1IH0pXG4gICAgICAudG8oXCIuY291bnRkb3duLXRpbWVyXCIsIHtcbiAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICB2YWx1ZTogXCIzIDIgMSBCZWdpblwiLFxuICAgICAgICAgIGRlbGltaXRlcjogXCIgXCIsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRvKFwiLmNvdW50ZG93bi10aW1lclwiLCB7IGR1cmF0aW9uOiAwLCBhdXRvQWxwaGE6IDAgfSk7XG5cbiAgICBib2FyZFNwYWNlQW5pbWF0aW9uXG4gICAgICAudG8oXCIuYm9hcmQtc3BhY2VcIiwgeyBiYWNrZ3JvdW5kOiBcImhzbGEoODIsIDEwMCUsIDU1JSwgLjg1KVwiIH0sIDAuNjE1MzgpXG4gICAgICAudG8oXCIuYm9hcmQtc3BhY2VcIiwgeyBiYWNrZ3JvdW5kOiBcImhzbGEoNDMsIDEwMCUsIDUzJSwgLjg1KVwiIH0pXG4gICAgICAudG8oXCIuYm9hcmQtc3BhY2VcIiwgeyBiYWNrZ3JvdW5kOiBcImhzbGEoMzAsIDEwMCUsIDU0JSwgLjg1KVwiIH0pXG4gICAgICAudG8oXCIuYm9hcmQtc3BhY2VcIiwgeyBiYWNrZ3JvdW5kOiBcImhzbGEoMjAsIDEwMCUsIDU1JSwgLjg1KVwiIH0pXG4gICAgICAudG8oXCIuYm9hcmQtc3BhY2VcIiwgeyBiYWNrZ3JvdW5kOiBcImhzbGEoMTMsIDEwMCUsIDU1JSwgLjg1KVwiIH0pXG4gICAgICAudG90YWxEdXJhdGlvbihiZWF0RHVyYXRpb24gKiA4KTtcblxuICAgIGJvYXJkU2NhbGVBbmltYXRpb25cbiAgICAgIC50byhcIiNnYW1lYm9hcmQtY29udGFpbmVyXCIsIHsgc2NhbGU6IDEuMSB9KVxuICAgICAgLnRvdGFsRHVyYXRpb24oYmVhdER1cmF0aW9uKTtcblxuICAgIGJvYXJkU3BpbkFuaW1hdGlvblxuXG4gICAgICAudG8oXG4gICAgICAgIFwiI2dhbWVib2FyZC1jb250YWluZXJcIixcbiAgICAgICAgeyByb3RhdGlvbjogOTAsIGJveFNoYWRvdzogXCJoc2xhKDgyLCAxMDAlLCA1NSUsIC44NSkgLTEwcHggNXB4XCIgfSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgICAgLnRvKFxuICAgICAgICBcIiNnYW1lYm9hcmQtY29udGFpbmVyXCIsXG4gICAgICAgIHsgcm90YXRpb246IDE4MCwgYm94U2hhZG93OiBcImhzbGEoNDMsIDEwMCUsIDUzJSwgLjg1KSAtMTBweCA1cHhcIiB9LFxuICAgICAgICA0XG4gICAgICApXG4gICAgICAudG8oXG4gICAgICAgIFwiI2dhbWVib2FyZC1jb250YWluZXJcIixcbiAgICAgICAgeyByb3RhdGlvbjogMjcwLCBib3hTaGFkb3c6IFwiaHNsYSgzMCwgMTAwJSwgNTQlLCAuODUpIDEwcHggNXB4XCIgfSxcbiAgICAgICAgNlxuICAgICAgKVxuICAgICAgLnRvKFxuICAgICAgICBcIiNnYW1lYm9hcmQtY29udGFpbmVyXCIsXG4gICAgICAgIHsgcm90YXRpb246IDM2MCwgYm94U2hhZG93OiBcImhzbGEoMTMsIDEwMCUsIDU1JSwgLjg1KSAxMHB4IDVweFwiIH0sXG4gICAgICAgIDhcbiAgICAgIClcbiAgICAgIC50b3RhbER1cmF0aW9uKGJlYXREdXJhdGlvbiAqIDE2KTtcbiAgfSk7XG59XG5cbnRpbWVNb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmICh0aW1lTW9kZVNlbGVjdG9yLnN0eWxlLnZpc2liaWxpdHkgPT09IFwiaGlkZGVuXCIpIHtcbiAgICBjb25zb2xlLmxvZyh0aW1lTW9kZVNlbGVjdG9yKTtcbiAgICB0aW1lTW9kZVNlbGVjdG9yLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICBjb25zb2xlLmxvZyh0aW1lTW9kZVNlbGVjdG9yKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcImVyciFcIik7XG4gICAgdGltZU1vZGVTZWxlY3Rvci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgfVxufSk7XG4iLCJpbXBvcnQge1xuICBnZXRSZXN1bHRDaGVja1NlY3RvcnMsXG4gIGdldFJlbWFpbmluZ1NlY3RvcnMsXG4gIGdldEJvYXJkLFxufSBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcblxubGV0IHdob3NlVHVybiA9IDA7XG5cbmNvbnN0IHJlc3VsdCA9IG51bGw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbmxldCBjb21wRGlmZmljdWx0eSA9IFwibmV3IG9uIHRoZSBqb2JcIjtcbmxldCBzZXRUaW1lcjtcbmxldCBwbGF5ZXJPbmU7XG5sZXQgcGxheWVyVHdvO1xuXG5leHBvcnQgY29uc3QgZ2V0VGltZXIgPSAoKSA9PiBzZXRUaW1lcjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5jb25zdCBnZXRDb21wRGlmZmljdWx0eSA9ICgpID0+IGNvbXBEaWZmaWN1bHR5O1xuXG5leHBvcnQgY29uc3Qgc2V0Q29tcERpZmZpY3VsdHkgPSAodmFsdWUpID0+IHtcbiAgY29tcERpZmZpY3VsdHkgPSB2YWx1ZTtcbiAgY29uc29sZS5sb2coY29tcERpZmZpY3VsdHkpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFBsYXllcihwbGF5ZXIpIHtcbiAgaWYgKHBsYXllci5nZXROdW1iZXIoKSA9PT0gMSkge1xuICAgIHBsYXllck9uZSA9IHBsYXllcjtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXJPbmUuZ2V0TmFtZSgpKTtcbiAgICByZXR1cm4gcGxheWVyT25lO1xuICB9XG4gIGlmIChwbGF5ZXIuZ2V0TnVtYmVyKCkgPT09IDIpIHtcbiAgICBwbGF5ZXJUd28gPSBwbGF5ZXI7XG4gICAgY29uc29sZS5sb2cocGxheWVyVHdvKTtcbiAgICByZXR1cm4gcGxheWVyVHdvO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBzdGFydFRpbWVyID0gKGlkLCBjb3VudGRvd24pID0+IHtcbiAgY29uc3QgdGltZXJTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4gIHNldFRpbWVyID0gY291bnRkb3duO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xuICAgIHRpbWVyU3Bhbi50ZXh0Q29udGVudCA9IGNvdW50ZG93bjtcbiAgICBjb3VudGRvd24gLT0gMS4wOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgY29uc29sZS5sb2coY291bnRkb3duKTtcblxuICAgIGlmIChjb3VudGRvd24gPT09IDApIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJbnRlcnZhbCk7XG4gICAgICBjb25zb2xlLmxvZyhcImludGVydmFsIGNsZWFyZWRcIik7XG4gICAgICBhbGVydChgdGltZSdzIHVwIWApO1xuICAgICAgLy8gRGlzcGxheUNvbnRyb2xsZXIuc2hvd1Jlc3RhcnRCdG4oKTtcbiAgICB9IGVsc2UgaWYgKHBsYXllck9uZS5nZXRTY29yZSgpID09PSA1IHx8IHBsYXllclR3by5nZXRTY29yZSgpID09PSA1KSB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xuICAgICAgY29uc29sZS5sb2coXCJpbnRlcnZhbCBjbGVhcmVkXCIpO1xuICAgIH1cbiAgfVxuICB1cGRhdGVUaW1lcigpO1xuICBsZXQgdGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCAxMDAwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUdXJuID0gKCkgPT4gd2hvc2VUdXJuO1xuZXhwb3J0IGNvbnN0IHNldFR1cm4gPSAoKSA9PiB7XG4gIHdob3NlVHVybiArPSAxO1xufTtcbmV4cG9ydCBjb25zdCByZXNldFR1cm5zID0gKCkgPT4ge1xuICB3aG9zZVR1cm4gPSAwO1xufTtcblxuY29uc3QgY29tcE1NID0gKCkgPT4gbWluaW1heChnZXRCb2FyZCgpLCBwbGF5ZXJUd28uZ2V0TWFya2VyKCkpLmluZGV4O1xuXG5jb25zdCBjb21wUiA9ICgpID0+XG4gIGdldFJlbWFpbmluZ1NlY3RvcnMoZ2V0Qm9hcmQoKSlbXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2V0UmVtYWluaW5nU2VjdG9ycyhnZXRCb2FyZCgpKS5sZW5ndGgpXG4gIF07XG5cbmV4cG9ydCBjb25zdCBjb21wQ2hvaWNlTG9naWMgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGNvbXBEaWZmaWN1bHR5KTtcblxuICBpZiAoY29tcERpZmZpY3VsdHkgPT09IFwidW5zdG9wcGFibGVcIikge1xuICAgIHJldHVybiBjb21wTU0oKTtcbiAgfVxuICBpZiAoY29tcERpZmZpY3VsdHkgIT09IFwidW5zdG9wcGFibGVcIikge1xuICAgIGNvbnN0IHJOdW0gPSBNYXRoLnJhbmRvbSgpICogMTAwO1xuXG4gICAgaWYgKGNvbXBEaWZmaWN1bHR5ID09PSBcImhpZ2hseSBza2lsbGVkXCIpIHtcbiAgICAgIGlmIChyTnVtIDwgNzUpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBNTSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tcFIoKTtcbiAgICB9XG4gICAgaWYgKGNvbXBEaWZmaWN1bHR5ID09PSBcImluIHRyYWluaW5nXCIpIHtcbiAgICAgIGlmIChyTnVtIDwgNTApIHtcbiAgICAgICAgcmV0dXJuIGNvbXBNTSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tcFIoKTtcbiAgICB9XG4gICAgaWYgKGNvbXBEaWZmaWN1bHR5ID09PSBcIm5ldyBvbiB0aGUgam9iXCIpIHtcbiAgICAgIGlmIChyTnVtIDwgMjUpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBNTSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tcFIoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Jlc3VsdHMocGxheWVyTWFya2VyKSB7XG4gIGNvbnN0IHJlc3VsdEFycmF5ID0gT2JqZWN0LnZhbHVlcyhnZXRSZXN1bHRDaGVja1NlY3RvcnMoKSk7XG5cbiAgY29uc3QgcGxheWVyUmVzdWx0ID0gcmVzdWx0QXJyYXkuc29tZShcbiAgICAoZWxlbWVudCkgPT5cbiAgICAgIGVsZW1lbnQoKS5qb2luKFwiLFwiKSA9PT0gYCR7cGxheWVyTWFya2VyfSwke3BsYXllck1hcmtlcn0sJHtwbGF5ZXJNYXJrZXJ9YFxuICApO1xuXG4gIHJldHVybiBwbGF5ZXJSZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1pbmltYXgoYm9hcmRTdGF0ZSwgcGxheWVyTWFya2VyKSB7XG4gIGNvbnN0IGdldEVtcHR5U2VjdG9ycyA9IGdldFJlbWFpbmluZ1NlY3RvcnMoYm9hcmRTdGF0ZSk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBsZXQgc2NvcmU7XG5cbiAgaWYgKGNoZWNrUmVzdWx0cyhwbGF5ZXJPbmUuZ2V0TWFya2VyKCkpKSB7XG4gICAgcmV0dXJuIHsgc2NvcmU6IC0xIH07XG4gIH1cbiAgaWYgKGNoZWNrUmVzdWx0cyhwbGF5ZXJUd28uZ2V0TWFya2VyKCkpKSB7XG4gICAgcmV0dXJuIHsgc2NvcmU6IDEgfTtcbiAgfVxuICBpZiAoZ2V0RW1wdHlTZWN0b3JzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7IHNjb3JlOiAwIH07XG4gIH1cblxuICBjb25zdCB0ZXN0SGlzdG9yeSA9IFtdO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGdldEVtcHR5U2VjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnRUZXN0ID0gW107XG4gICAgY3VycmVudFRlc3QuaW5kZXggPSBib2FyZFN0YXRlW2dldEVtcHR5U2VjdG9yc1tpXV07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgYm9hcmRTdGF0ZVtnZXRFbXB0eVNlY3RvcnNbaV1dID0gcGxheWVyTWFya2VyO1xuXG4gICAgaWYgKHBsYXllck1hcmtlciA9PT0gcGxheWVyVHdvLmdldE1hcmtlcigpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG4gICAgICBjb25zdCByZXN1bHQgPSBtaW5pbWF4KGJvYXJkU3RhdGUsIHBsYXllck9uZS5nZXRNYXJrZXIoKSk7XG4gICAgICBjdXJyZW50VGVzdC5zY29yZSA9IHJlc3VsdC5zY29yZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICAgICAgY29uc3QgcmVzdWx0ID0gbWluaW1heChib2FyZFN0YXRlLCBwbGF5ZXJUd28uZ2V0TWFya2VyKCkpO1xuICAgICAgY3VycmVudFRlc3Quc2NvcmUgPSByZXN1bHQuc2NvcmU7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgYm9hcmRTdGF0ZVtnZXRFbXB0eVNlY3RvcnNbaV1dID0gY3VycmVudFRlc3QuaW5kZXg7XG4gICAgdGVzdEhpc3RvcnkucHVzaChjdXJyZW50VGVzdCk7XG4gIH1cblxuICBsZXQgYmVzdE5leHRNb3ZlO1xuXG4gIGlmIChwbGF5ZXJNYXJrZXIgPT09IHBsYXllclR3by5nZXRNYXJrZXIoKSkge1xuICAgIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0SGlzdG9yeS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRlc3RIaXN0b3J5W2ldLnNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICAgIGJlc3RTY29yZSA9IHRlc3RIaXN0b3J5W2ldLnNjb3JlO1xuICAgICAgICBiZXN0TmV4dE1vdmUgPSBpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgYmVzdFNjb3JlID0gSW5maW5pdHk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0SGlzdG9yeS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRlc3RIaXN0b3J5W2ldLnNjb3JlIDwgYmVzdFNjb3JlKSB7XG4gICAgICAgIGJlc3RTY29yZSA9IHRlc3RIaXN0b3J5W2ldLnNjb3JlO1xuICAgICAgICBiZXN0TmV4dE1vdmUgPSBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGVzdEhpc3RvcnlbYmVzdE5leHRNb3ZlXTtcbn1cbiIsImxldCBib2FyZCA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XTtcblxuY29uc3QgcmVzdWx0Q2hlY2tTZWN0b3JzID0ge1xuICByb3cxOiAoKSA9PiBbMCwgMSwgMl0ubWFwKCh4KSA9PiBib2FyZFt4XSksXG4gIHJvdzI6ICgpID0+IFszLCA0LCA1XS5tYXAoKHgpID0+IGJvYXJkW3hdKSxcbiAgcm93MzogKCkgPT4gWzYsIDcsIDhdLm1hcCgoeCkgPT4gYm9hcmRbeF0pLFxuICBjb2x1bW4xOiAoKSA9PiBbMCwgMywgNl0ubWFwKCh4KSA9PiBib2FyZFt4XSksXG4gIGNvbHVtbjI6ICgpID0+IFsxLCA0LCA3XS5tYXAoKHgpID0+IGJvYXJkW3hdKSxcbiAgY29sdW1uMzogKCkgPT4gWzIsIDUsIDhdLm1hcCgoeCkgPT4gYm9hcmRbeF0pLFxuICBkaWFnb25hbDE6ICgpID0+IFswLCA0LCA4XS5tYXAoKHgpID0+IGJvYXJkW3hdKSxcbiAgZGlhZ29uYWwyOiAoKSA9PiBbMiwgNCwgNl0ubWFwKCh4KSA9PiBib2FyZFt4XSksXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcblxuZXhwb3J0IGNvbnN0IGdldFJlc3VsdENoZWNrU2VjdG9ycyA9ICgpID0+IHJlc3VsdENoZWNrU2VjdG9ycztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbWFpbmluZ1NlY3RvcnMoYm9hcmRTdGF0ZSkge1xuICByZXR1cm4gYm9hcmRTdGF0ZS5maWx0ZXIoKGkpID0+IGkgIT09IFwib1wiICYmIGkgIT09IFwieFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEJvYXJkKGluZGV4LCBtYXJrZXIpIHtcbiAgYm9hcmQuc3BsaWNlKGluZGV4LCAxLCBtYXJrZXIpO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJCb2FyZCA9ICgpID0+IHtcbiAgYm9hcmQgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOF07XG4gIGNvbnN0IGJvYXJkU3BhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZC1zcGFjZVwiKTtcbiAgYm9hcmRTcGFjZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBpbmRleC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGNoZWNrUmVzdWx0cywgZ2V0VHVybiwgY29tcENob2ljZUxvZ2ljLCBzZXRUdXJuIH0gZnJvbSBcIi4vR2FtZVwiO1xuaW1wb3J0IHsgc2V0Qm9hcmQgfSBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcblxuY29uc3QgcGxheWVyQWN0aW9ucyA9IHtcbiAgZ2V0TnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgfSxcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9LFxuICByZXNldFNjb3JlKCkge1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICB9LFxuICBnZXRTY29yZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zY29yZTtcbiAgfSxcbiAgZ2V0TWFya2VyKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmtlcjtcbiAgfSxcbiAgcm91bmRXaW5DaGVjaygpIHtcbiAgICBpZiAoY2hlY2tSZXN1bHRzKHRoaXMubWFya2VyKSkge1xuICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSB3aW5zYCk7XG4gICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IHNjb3JlOiAke3RoaXMuc2NvcmV9YCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGdldFR1cm4oKSA9PT0gOSkge1xuICAgICAgcmV0dXJuIFwidGllXCI7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgbWF0Y2hXaW5DaGVjaygpIHtcbiAgICBpZiAoZ2V0VHVybigpID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnNjb3JlID09PSA1KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBjb21wdXRlclR1cm4oKSB7XG4gICAgY29uc3QgY29tcENob2ljZSA9IGNvbXBDaG9pY2VMb2dpYygpO1xuICAgIGNvbnN0IGNvbXBTcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZWN0b3ItJHtjb21wQ2hvaWNlfWApO1xuICAgIGNvbXBTcGFjZS50ZXh0Q29udGVudCA9IHRoaXMubWFya2VyO1xuICAgIHNldEJvYXJkKGNvbXBDaG9pY2UsIHRoaXMubWFya2VyKTtcbiAgICBzZXRUdXJuKCk7XG4gIH0sXG4gIHBsYXlUdXJuOiBmdW5jdGlvbiBwbGF5VHVybihzcGFjZSwgaW5kZXgpIHtcbiAgICBzcGFjZS50ZXh0Q29udGVudCA9IHRoaXMubWFya2VyOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgc2V0Qm9hcmQoaW5kZXgsIHRoaXMubWFya2VyKTtcblxuICAgIHNldFR1cm4oKTtcbiAgfSxcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGxheWVyKG51bWJlciwgbmFtZSwgbWFya2VyKSB7XG4gIGNvbnN0IHBsYXllciA9IE9iamVjdC5jcmVhdGUocGxheWVyQWN0aW9ucyk7XG4gIHBsYXllci5uYW1lID0gbmFtZTtcbiAgcGxheWVyLm51bWJlciA9IG51bWJlcjtcbiAgcGxheWVyLm1hcmtlciA9IG1hcmtlcjtcbiAgcGxheWVyLnNjb3JlID0gMDtcbiAgcmV0dXJuIHBsYXllcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLypcblxuICBUTyAtIERPc1xuXG4gICAgT3B0aW1pemF0aW9uOiBcbiAgICBbeF0gQ29kZS1zcGxpdHRpbmdcbiAgICAgICAgW3hdIEZpZ3VyZSBvdXQgaG93IHRvIG1ha2UgYSBmYWN0b3J5IGZ1bmN0aW9uIHdpdGggRVM2IG1vZHVsZXMuLi4gcmVzZWFyY2ggc2VlbXMgdG9cbiAgICAgICAgICAgIHNheSB0aGF0IHlvdSBjYW4gdXNlIGZhY3RvcnkgZnVuY3Rpb25zIGFzIG5vcm1hbCBidXQgaSdtIG5vdCBzdXJlIGhvdyB0byBnZXQgdGhpcyB3b3JraW5nXG4gICAgRmVhdHVyZXM6XG4gICAgWyBdIHNjb3JlIGtlZXBpbmcgVUlcbiAgICAgICAgW3hdIGJhc2ljIGxheW91dCBhbmQgZnVuY3Rpb25hbGl0eVxuICAgICAgICBbIF0gYWRkIGxhYmVscywgYW5pbWF0aW9ucywgbWFrZSBwcmV0dHlcbiAgICBbeF0gZ2FtZSB3aW4gLyBsb3NlIC8gZHJhdyBhbm5vdW5jZW1lbnRzIChyZW5kZXIgYW5pbWF0ZWQgYW5ub3VuY2VtZW50cyBvbiB0cnVlIGNoZWNrd2luXG4gICAgICAgIGZ1bmN0aW9uIGNhbGwpXG4gICAgICAgIFt4XSB3b3JrIG91dCBkcmF3IGxvZ2ljIGFzIGl0J3Mgbm90IHdyaXR0ZW4gaW50byBjaGVjayByZXN1bHRzIHlldC5cbiAgICBbIF0gcGxheSBhZ2FpbiAvIG1haW4gbWVudSBidXR0b24gdW5kZXIgcmVzdWx0cyBhbm5vdW5jZW1lbnQ7XG4gICAgWyBdIGZvcm0gdmFsaWRhdGlvbiArIGxvY2sgb3RoZXIgcmFkaW8gYnV0dG9ucyB3aGVuIGNob2ljZSBpcyBtYWRlLlxuICAgIFsgXSBQdXJlbHkgYWVzdGhldGljIFVJIGNvbXBsZXRpb24gKGJhY2tncm91bmRzLCBhbmltYXRpb25zLCBtdXNpYywgc291bmQgZWZmZWN0cylcbiAgICAgICAgW3hdIGFuaW1hdGUgYmFja2dyb3VuZCBvZiBnYW1lYm9hcmQgdG8gY3ljbGUgdGhyb3VnaCBlYWNoIGNvbG9yIG9mIG15IEh5cGVyZHJpdmVcbiAgICAgICAgICAgIHBhbGxldGUgb24gY29vbG9ycy5jbyAoZmFzdCBsb29wKSwgYWRqdXN0IG9wYWNpdHkhXG4gICAgICAgIFsgXSBjaGFuZ2UgZm9udCArIFVJIHRvIGhhdmUgbW9yZSBzaGFycCBhbmdsZXNcblxuICAgIEJ1Z3M6XG4gICAgWyBdIFRpbWVyIHN0YXJ0IGlzIGNhbGxlZCB3aGVuIGVuZGxlc3MgbW9kZSBpcyBzZWxlY3RlZCwgZGlzYWJsZSB0aGlzXG4gICAgW3hdIENvbXB1dGVyIHdpbiBjaGVjayBpcyB0cmlnZ2VyaW5nIHR3aWNlLCB3aGVyZSBpcyB0aGlzIGhhcHBlbmluZz9cbiAgICBbeF0gd2luIG1hdGNoIGNoZWNrIGlzIGJlaW5nIGNhbGxlZCB0d2ljZSBvbiB3aW5uaW5nIHR1cm4gY29tcGxldGlvbiwgb25jZSBvbiByZXN0YXJ0IGFmdGVyLlxuICAgIFt4XSB3ZWJwYWNrIGlzIGNhbGxpbmcgZnVuY3Rpb25zIHR3aWNlLCBtZXNzaW5nIHdpdGggdGltZSBtb2RlIGRyb3Bkb3duXG4gICAgW3hdIGluZGV4LmpzIGlzIG5vdCBhYmxlIHRvIGxvY2F0ZSBhdWRpbyBzb3VyY2VcbiAgICBbeF0gcGxheWVyT25lICsgVHdvIGFyZSBub3QgZ2V0dGluZyBkZWZpbmVkIG9uIGZvcm0gc3VibWl0XG4gICAgQ29tcGxldGVkOlxuXG4gICAgW3hdIFRyeSBzd2l0Y2hpbmcgcm93L2NvbHVtbi9kaWFnb25hbCBmdW5jdGlvbnMgaW50byBnYW1lIG1vZHVsZS5cbiAgICBbeF0gRmlndXJlIG91dCBvYmplY3Qgb2Ygcm93L2NvbHVtbi9kaWFnb25hbCBmdW5jdGlvbnMsIGxvb3AgdGhyb3VnaCBmb3IgcmVzdWx0cyBjaGVjay5cbiAgICBbeF0gTWFrZSBnYW1lLmNoZWNrUmVzdWx0cygpIHJldHVybiBmaW5hbFJlc3VsdCwgaGF2ZSBkaXNwbGF5Q29udHJvbGxlciBjaGVjayB3aGVuIHRoaXMgdmFsdWVcbiAgICAgICAgZXF1YWxzIHNvbWV0aGluZyBvdGhlciB0aGFuIHVuZGVmaW5lZCB0aGVuIGRpc3BsYXkgdGhhdCByZXN1bHQgdmlhIGEgZGl2IHRvZ2dsZSB3aXRoXG4gICAgICAgIHdpbiBtZXNzYWdlIGluIGJvZHkuXG4gICAgICAgIC0tLSByZXR1cm5pbmcgZmluYWxSZXN1bHQgZnJvbSBnYW1lIG1vZHVsZSBnZXRzIGFcbiAgICAgICAgcmVmZXJlbmNlRXJyb3I6IGZpbmFsUmVzdWx0IGlzIG5vdCBkZWZpbmVkLi5cbiAgICAgICAgICAgIGZpZ3VyZSB0aGlzIG91dCEhIVxuICAgIFt4XSBnYW1lLmNoZWNrUmVzdWx0IGZ1bmN0aW9uIGlzbid0IGRldGVjdGluZyBjb3JyZWN0bHkgYWZ0ZXIgY3JlYXRpbmcgc3VjY2Vzc2Z1bCBtaW5pbWF4IGFpXG4gICAgICAgIGZpZ3VyZSBvdXQgV0hZIHRoaXMgaXMgaGFwcGVuaW5nIGJlZm9yZSB0aHJvd2luZyBzb2x1dGlvbnMgQCBpdCBhbGwgc2xhcC1kYXNoLlxuICAgIFt4XSBtaW5pbWF4IGZ1bmN0aW9uIGlzbid0IHdvcmtpbmcsIG9ubHkgcmV0dXJuaW5nIGZpcnN0IHBvc3NpYmxlIHZhbHVlIGluc3RlYWQgb2YgdXNpbmdcbiAgICAgICAgcmVjdXJzaW9uXG4gICAgW3hdIGdhbWUgZGlmZmljdWx0eSBzZWxlY3RvclxuICAgIFt4XSBQdXQgZ2V0IHBsYXllciBpbmZvIGZ1bmN0aW9ucyBpbiBQbGF5ZXIgZmFjdG9yeSBwb3NzaWJseT9cblxuKi9cblxuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgZGlzcGxheUJvYXJkLCBtZW51Q29udHJvbGxlciB9IGZyb20gXCIuL0Rpc3BsYXlDb250cm9sbGVyXCI7XG5cbmRpc3BsYXlCb2FyZCgpO1xubWVudUNvbnRyb2xsZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==