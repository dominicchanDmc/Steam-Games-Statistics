/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n\nasync function getData() {\n  const request = await fetch(\"/data/steamData-after2019.json\");\n  const respone = await request.json();\n  const array = Object.values(respone);\n  const newObj = array.reduce((obj, item) => Object.assign(obj, {\n    [item.name]: item\n  }), {});\n  // console.log(\"string\",respone[\"1313\"]);\n  console.log(\"string\", newObj[\"Second Sight\"]);\n  console.log(\"string\", newObj[\"Second Sight\"].price);\n}\ngetData();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBc0I7QUFDdEIsZUFBZUEsT0FBT0EsQ0FBQSxFQUFHO0VBQ3JCLE1BQU1DLE9BQU8sR0FBRyxNQUFNQyxLQUFLLENBQUMsZ0NBQWdDLENBQUM7RUFDN0QsTUFBTUMsT0FBTyxHQUFHLE1BQU1GLE9BQU8sQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFDcEMsTUFBTUMsS0FBSyxHQUFFQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0osT0FBTyxDQUFDO0VBQ25DLE1BQU1LLE1BQU0sR0FBR0gsS0FBSyxDQUFDSSxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFDQyxJQUFJLEtBQUdMLE1BQU0sQ0FBQ00sTUFBTSxDQUFDRixHQUFHLEVBQUM7SUFBQyxDQUFDQyxJQUFJLENBQUNFLElBQUksR0FBR0Y7RUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztFQUNsRjtFQUNBRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUNQLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztFQUM1Q00sT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFDUCxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUNRLEtBQUssQ0FBQztBQUN0RDtBQUdBaEIsT0FBTyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGVhbV9nYW1lc19zdGF0aXN0aWNzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSAoKXtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXCIvZGF0YS9zdGVhbURhdGEtYWZ0ZXIyMDE5Lmpzb25cIilcbiAgICBjb25zdCByZXNwb25lID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgY29uc3QgYXJyYXkgPU9iamVjdC52YWx1ZXMocmVzcG9uZSk7XG4gICAgY29uc3QgbmV3T2JqID0gYXJyYXkucmVkdWNlKChvYmosaXRlbSk9Pk9iamVjdC5hc3NpZ24ob2JqLHtbaXRlbS5uYW1lXTogaXRlbX0pLHt9KVxuICAgIC8vIGNvbnNvbGUubG9nKFwic3RyaW5nXCIscmVzcG9uZVtcIjEzMTNcIl0pO1xuICAgIGNvbnNvbGUubG9nKFwic3RyaW5nXCIsbmV3T2JqW1wiU2Vjb25kIFNpZ2h0XCJdKTtcbiAgICBjb25zb2xlLmxvZyhcInN0cmluZ1wiLG5ld09ialtcIlNlY29uZCBTaWdodFwiXS5wcmljZSk7XG59XG5cblxuZ2V0RGF0YSgpOyJdLCJuYW1lcyI6WyJnZXREYXRhIiwicmVxdWVzdCIsImZldGNoIiwicmVzcG9uZSIsImpzb24iLCJhcnJheSIsIk9iamVjdCIsInZhbHVlcyIsIm5ld09iaiIsInJlZHVjZSIsIm9iaiIsIml0ZW0iLCJhc3NpZ24iLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGVhbV9nYW1lc19zdGF0aXN0aWNzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;