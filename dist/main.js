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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css */\nh3{\n  color: var(--icons);\n}\n\n:root {\n  --body-backgrounscolor: hsla(270, 50%, 40%, 0.4);\n  --sidebar-backgroundcolor: hsl(0, 0%, 97%);\n  --icons: black;\n  --sidebar-hover: hsla(270, 50%, 90%);\n  --button-backgrounscolor: hsla(270, 70%, 58%, 0.4);\n  --button-backgrounscolor2: hsla(270, 55%, 72%, 0.4);\n  --input-feilds: hsla(271, 43%, 77%, 0.4);\n}\n\n.darkmode {\n  --body-backgrounscolor: hsla(270, 50%, 10%);\n  --sidebar-backgroundcolor: rgb(78, 43, 114);\n  --icons: hsl(0, 0%, 83%);\n  --sidebar-hover: hsla(270, 50%, 10%);\n}\n\nbody {\n    background-color: var(--body-backgrounscolor);\n    font-family: \"SUSE\", sans-serif;\n    color: var(--icons);\n  }\n  \n  ::backdrop{\n    \n    background-image: linear-gradient(\n        45deg,\n    hsl(270, 100%, 85%),\n    hsl(270, 37%, 64%),\n    hsl(270, 100%, 56%),\n    hsl(270, 68%, 77%)\n    \n    );\n    opacity: 0.75;\n    \n  }\n \n  #hamburger{\n    fill: var(--icons);\n    height: 38px;\n    width: 38px;\n    margin: 10px;\n    cursor: pointer;\n  }\n\n  #hamburger-close{\n    position: relative;\n    top: 0;\n    right: 0;\n    margin: 10px;\n  }\n  #sidebar{\n    \n      width: 0px;\n      height: 100vh;\n      color: var(--icons);\n      background-color: var(--sidebar-backgroundcolor);\n      position: fixed;\n      top: 0;\n      left: 0;\n      z-index: 2;\n      overflow: hidden;\n      transition: width 0.5s ease;\n      white-space: nowrap;\n    \n  }\n\n  #sidebar a  {\n    text-decoration: none;\n    color: var(--icons);\n  }\n  .sidebar-item {\n    text-decoration: none;\n    display: flex;\n    padding: 1em;\n    align-items: center;\n    cursor: pointer;\n  }\n  #sidebar svg {\n    fill: var(--icons);\n  }\n  .sidebar-item:hover {\n    background-color: var(--sidebar-hover);\n  }\n  \n  .sidebar-item > div {\n    padding: 0 1em;\n  }\n  \n  .sidebar-item svg {\n    flex-shrink: 0;\n  }\n\n  .createTaskBtn {\n    background: linear-gradient(180deg, var(--button-backgrounscolor) 0, var(--button-backgrounscolor2) 100%);\n    height: 44px;\n    width: 60%;\n    max-width: 250px;\n    min-width: 100px;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    text-align: center;\n    color: var(--icons);\n    border-radius: 8px;\n    border: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n   \n  }\n  \n  .createTaskBtn:hover {\n    background: linear-gradient(180deg, #6b4afc 0, var(--button-backgrounscolor) 100%);\n  }\n  #dark-mode-toggle{\n    position: fixed;\n    top: 0;\n    right: 0;\n    margin: 10px;\n    fill: var(--icons);\n   cursor: pointer;\n  }\n\n  form {\n    display: grid;\n    color: var(--icons);\n    grid-template-columns: 2fr;\n    gap: 10px;\n    padding: 10px;\n    border-radius: 30px;\n    \n    \n  }\n\n  #dialog {\n    background-color: var(--body-backgrounscolor);\n    color: var(--icons);\n    border: none;\n    border-radius: 10px;\n    box-shadow: var( --body-backgrounscolor) 0 0, 10px 0 10px var( --body-backgrounscolor) ;\n  }\n\n  #closeBtn {\n    min-width: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--button-backgrounscolor);\n    border: none;\n    border-radius: 5px;\n    color: var(--icons);\n  }\n\n  form > input {\n    background-color: var(--input-feilds);\n    border: 0.1px solid var(--body-backgrounscolor);\n    border-radius: 7px;\n    padding: 5px;\n\n  }\n\n  form > button {\n    background-color: var(--button-backgrounscolor);\n    border: none;\n    border-radius: 5px;\n    padding: 5px 10px;\n    color: var(--icons);\n  }\n\n  #newTaskRow {\n    background-color: var(--button-backgrounscolor);\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/complete-task.js":
/*!******************************!*\
  !*** ./src/complete-task.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   completeT: () => (/* binding */ completeT),\n/* harmony export */   completeTask: () => (/* binding */ completeTask),\n/* harmony export */   deletTaskBtn: () => (/* binding */ deletTaskBtn)\n/* harmony export */ });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\nconst completeTask = \"complete task\";\n\n\n\n\nconst doneButton = _form__WEBPACK_IMPORTED_MODULE_0__.taskComplete;\n\nconst deletTaskBtn = document.createElement('button');\n    deletTaskBtn.id = \"deletTaskBtn\";\n    deletTaskBtn.textContent = 'Delete';\n\nlet completeT = doneButton.addEventListener('click', () => {\n    let child = document.getElementById('child');\n    let child1 = document.getElementById('child1');\n    let child2 = document.getElementById('child2');\n    let child3 = document.getElementById('child3');\n    let child4 = document.getElementById('child4');\n    let child5 = document.getElementById('child5');\n    let child6 = document.getElementById('child6');\n    child1.remove();\n    child2.remove();\n    child3.remove();\n    child4.remove();\n    child5.remove();\n    child6.remove();\n    child.style.textDecoration = \"line-through\";\n    doneButton.remove();\n\n    \n\n    _form__WEBPACK_IMPORTED_MODULE_0__.newTaskRow.appendChild(deletTaskBtn);\n\n    \n});\n\n//# sourceURL=webpack://todo/./src/complete-task.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allTasks: () => (/* binding */ allTasks)\n/* harmony export */ });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\nconst dialog = document.querySelector(\"dialog\");\nconst showButton = document.querySelector(\"dialog + button\");\nconst colseButton = document.querySelector(\"dialog button\");\n\n\n\n//opens the dialog\n\nconst show = showButton.addEventListener(\"click\", () => {\n    dialog.showModal();\n});\n\n\nconst colse =  colseButton.addEventListener(\"click\", () => {\n    dialog.close();\n})\n\n//side bar\nconst hamburger = document.getElementById(\"hamburger\");\nconst hamburgerClose = document.getElementById(\"hamburger-close\");\nconst sidebar = document.getElementById(\"sidebar\");\nconst header = document.querySelector(\"h1\");\nconst sidebarItem = document.getElementsByClassName(\"sidebar-item\");\nconst mainPage = document.getElementById(\"mainpage\");\n\n\n\nlet menuOpen = false;\n\nfunction openMenu(){\n    menuOpen = true;\n    sidebar.style.width = '250px';\n    header.style.marginLeft = '255px';\n    header.style.transition = '0.5s';\n    mainPage.style.marginLeft = '350px'\n    mainPage.style.transition = '0.5s'\n}\n\nfunction closeMenu(){\n    menuOpen = true;\n    sidebar.style.width = '0px';\n    header.style.marginLeft = '5px';\n    header.style.transition = '0.5s';\n    mainPage.style.transition = '0.5s'\n}\n\nhamburger.addEventListener('click', () => {\n    if(!menuOpen) {\n        openMenu();\n    }\n});\n\nhamburgerClose.addEventListener('click', () => {\n    if(menuOpen) {\n        closeMenu();\n    }\n});\n\n\n//dark mode\n\nlet darkMode = localStorage.getItem('darkMode');\n\nconst darkModeToggle = document.querySelector('#dark-mode-toggle');\n\nconst enableDarkMode = () => {\n    document.body.classList.add('darkmode');\n    localStorage.setItem('darkMode', 'enabled');\n    console.log('enabled')\n}\n\nconst disableDarkMode = () => {\n    document.body.classList.remove('darkmode');\n\n    localStorage.setItem('darkMode', null);\n}\n\n\nif (darkMode === 'enabled') {\n    enableDarkMode();\n}\n\ndarkModeToggle.addEventListener('click', () => {\n    darkMode = localStorage.getItem('darkMode');\n\n    if (darkMode !== 'enabled') {\n        enableDarkMode();\n        console.log('enabled')\n    } else {\n        disableDarkMode();\n        console.log('disabled')\n    }\n});\n\n//new task\n\nconst newTask = document.createElement(\"div\");\nnewTask.id = \"newtask\";\nmainPage.appendChild(newTask);\nnewTask.appendChild(_form__WEBPACK_IMPORTED_MODULE_0__.newTaskRow);\n\n// all tasks\nconst allTasks = document.createElement('div');\nallTasks.id = 'allTasks';\n\nconst eachTask = document.createElement('div');\neachTask.id = 'eachTask';\neachTask.textContent = localStorage.getItem('Task');\n\neachTask.appendChild(_form__WEBPACK_IMPORTED_MODULE_0__.taskComplete);\n\nallTasks.appendChild(eachTask);\n\n//# sourceURL=webpack://todo/./src/dom.js?");

/***/ }),

/***/ "./src/edit-task.js":
/*!**************************!*\
  !*** ./src/edit-task.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editTask: () => (/* binding */ editTask)\n/* harmony export */ });\n/* harmony import */ var _complete_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete-task */ \"./src/complete-task.js\");\nconst editTask = \"edit task\";\n\n\n//delete task\n\n//const deletButton = deletTaskBtn;\n\n//export deleteTask = deletButton.addEventListener('click', () => {\n    \n//})\n\n//# sourceURL=webpack://todo/./src/edit-task.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formFun: () => (/* binding */ formFun),\n/* harmony export */   newTaskRow: () => (/* binding */ newTaskRow),\n/* harmony export */   taskComplete: () => (/* binding */ taskComplete)\n/* harmony export */ });\n//convert form data to JSON\nlocalStorage.getItem('theTask');\nlocalStorage.getItem('Title');\nlocalStorage.getItem('description');\nlocalStorage.getItem('project');\nlocalStorage.getItem('start');\nlocalStorage.getItem('finish');\nlocalStorage.getItem('notes');\nlocalStorage.getItem('prioroty');\n\nconst Form = document.getElementById(\"createtask\");\nlet project ;\nlet title ;\nlet description ;\nlet startT ;\nlet finishT ;\nlet prioroty ;\nlet notes ;\n\nconst newTaskRow = document.createElement('div');\n    newTaskRow.id = \"newTaskRow\";\n\n const taskComplete = document.createElement('button');\n    taskComplete.id = 'taskComplete';\n    taskComplete.textContent = 'Done'\n    \n\n function formFun(){Form.addEventListener('submit', (e) => {\n    e.preventDefault();\n\n    const formData = new FormData(Form);\n\n\n    \n    const data = Object.fromEntries(formData);\n\n\n    const dataSerialized = JSON.stringify(data)\n\n    localStorage.setItem('Task', dataSerialized);\n    \n\n    const dataDeserialized = JSON.parse(localStorage.getItem('Task'));\n\n    project = dataDeserialized.project;\n    title = dataDeserialized.tasktitle;\n    description = dataDeserialized.description;\n    startT = dataDeserialized.starttime;\n    finishT = dataDeserialized.finishtime;\n    prioroty = dataDeserialized.prioroty;\n    notes = dataDeserialized.notes;\n\n    localStorage.setItem('Title', title);\n    localStorage.setItem('description', description);\n    localStorage.setItem('project', project);\n    localStorage.setItem('start', startT);\n    localStorage.setItem('finish', finishT);\n    localStorage.setItem('notes', notes);\n    localStorage.setItem('prioroty',prioroty);\n    \n\n\n\n    console.log(project);\nconsole.log(title);\nconsole.log(description);\nconsole.log(startT);\nconsole.log(finishT);\nconsole.log(prioroty);\nconsole.log(notes);\n\n\n    \n\n    const Title = document.createElement('h3');\n    Title.textContent = localStorage.getItem('Title');\n    Title.id = 'child';\n    newTaskRow.appendChild(Title);\n\n    const descriptionF = document.createElement('p');\n    descriptionF.textContent = description;\n    descriptionF.id = 'child1';\n    newTaskRow.appendChild(descriptionF);\n\n    const startTF = document.createElement('p');\n    startTF.textContent = startT;\n    startTF.id = 'child2';\n    newTaskRow.appendChild(startTF);\n\n    const finishTF = document.createElement('p');\n    finishTF.textContent = finishT;\n    finishTF.id = 'child3';\n    newTaskRow.appendChild(finishTF);\n\n    const priorotyF = document.createElement('p');\n    priorotyF.textContent = prioroty;\n    priorotyF.id = 'child4';\n    newTaskRow.appendChild(priorotyF);\n\n    const notesF = document.createElement('p');\n    notesF.textContent = notes;\n    notesF.id = 'child5';\n    newTaskRow.appendChild(notesF);\n\n\n    const ProjectF = document.createElement('p');\n    ProjectF.textContent = project;\n    ProjectF.id = 'child6';\n    newTaskRow.appendChild(ProjectF);\n\n    newTaskRow.appendChild(taskComplete);\n\n    \n    \n});\n}\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _complete_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete-task */ \"./src/complete-task.js\");\n/* harmony import */ var _edit_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-task */ \"./src/edit-task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form.js */ \"./src/form.js\");\n//the main file\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconsole.log(_complete_task__WEBPACK_IMPORTED_MODULE_1__.completeTask);\nconsole.log(_edit_task__WEBPACK_IMPORTED_MODULE_2__.editTask);\nconsole.log((0,_form_js__WEBPACK_IMPORTED_MODULE_5__.formFun)());\nconsole.log(localStorage.getItem('Task'));\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project)\n/* harmony export */ });\nconst project = \"project\";\n\n//# sourceURL=webpack://todo/./src/project.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;