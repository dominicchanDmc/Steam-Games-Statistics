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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n\n\nasync function getData() {\n  const request = await fetch(\"/data/steamData-after2019.json\");\n  const respone = await request.json();\n  // console.log(respone);\n  const array = Object.values(respone);\n  console.log(array);\n  const newObj = array.reduce((obj, item) => Object.assign(obj, {\n    [item.name]: item\n  }), {});\n  console.log(\"string\", newObj[\"Second Sight\"]);\n  // console.log(\"string\",newObj[\"Second Sight\"].price);\n}\n//  getData();\nconst createSearchBtnStr = [\"fa-solid\", \"fa-magnifying-glass\", \"Search\", \"Search and display detail information by different criteria\"];\nconst createCompareBtnStr = [\"fa-solid\", \"fa-table\", \"Compare\", \"Compare item between 2 games with table or chart\"];\nconst createStatisticsBtnStr = [\"fa-solid\", \"fa-chart-simple\", \"Statistics\", \"Data statistics for the period\"];\nconst createHomeBtnStr = [\"fa-solid\", \"fa-house\", \"Home\"];\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const navBtn = document.getElementById(\"navBtn\");\n  const btnScrollUp = document.getElementById(\"scrollUp\");\n  const frontPageBtn = document.querySelector(\".frontPageBtn\");\n  function populateFrontPageBtnArea(createStr) {\n    const divBtnArea = document.createElement(\"div\");\n    const spanBtnArea = document.createElement(\"span\");\n    const iBtnArea = document.createElement(\"i\");\n    const pBtnArea = document.createElement(\"p\");\n    const h6BtnArea = document.createElement(\"h6\");\n    divBtnArea.classList.add(\"btnArea\");\n    spanBtnArea.classList.add(\"icon\", \"icon-circle\");\n    iBtnArea.classList.add(createStr[0], createStr[1], \"icon-1\", \"icon-1b\");\n    h6BtnArea.innerHTML = createStr[2];\n    pBtnArea.classList.add(\"text-6\");\n    pBtnArea.innerHTML = createStr[3];\n    spanBtnArea.appendChild(iBtnArea);\n    divBtnArea.appendChild(spanBtnArea);\n    divBtnArea.appendChild(h6BtnArea);\n    divBtnArea.appendChild(pBtnArea);\n    frontPageBtn.appendChild(divBtnArea);\n  }\n  function populateFrontPageBtn() {\n    populateFrontPageBtnArea(createSearchBtnStr);\n    populateFrontPageBtnArea(createCompareBtnStr);\n    populateFrontPageBtnArea(createStatisticsBtnStr);\n  }\n  function populateNavSubBtn(createStr) {\n    const buttonNavSub = document.createElement(\"button\");\n    const spanNavSub = document.createElement(\"span\");\n    const iNavSub = document.createElement(\"i\");\n    buttonNavSub.classList.add(\"navSubBtn\");\n    spanNavSub.classList.add(\"text\");\n    spanNavSub.innerHTML = createStr[2];\n    iNavSub.classList.add(createStr[0], createStr[1]);\n    buttonNavSub.appendChild(iNavSub);\n    buttonNavSub.appendChild(spanNavSub);\n    navBtn.appendChild(buttonNavSub);\n  }\n  function populateNavBtn() {\n    populateNavSubBtn(createHomeBtnStr);\n    populateNavSubBtn(createSearchBtnStr);\n    populateNavSubBtn(createCompareBtnStr);\n    populateNavSubBtn(createStatisticsBtnStr);\n  }\n  populateFrontPageBtn();\n  populateNavBtn();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFpQixDQUFDdkIsbUJBQW1CLENBQUM7SUFDdEN1QixpQkFBaUIsQ0FBQ3RCLHNCQUFzQixDQUFDO0VBQzdDO0VBRUFxQixvQkFBb0IsQ0FBQyxDQUFDO0VBQ3RCSyxjQUFjLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGVhbV9nYW1lc19zdGF0aXN0aWNzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhICgpe1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcIi9kYXRhL3N0ZWFtRGF0YS1hZnRlcjIwMTkuanNvblwiKVxuICAgIGNvbnN0IHJlc3BvbmUgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25lKTtcbiAgICBjb25zdCBhcnJheSA9T2JqZWN0LnZhbHVlcyhyZXNwb25lKTtcbiAgICBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgY29uc3QgbmV3T2JqID0gYXJyYXkucmVkdWNlKChvYmosaXRlbSk9Pk9iamVjdC5hc3NpZ24ob2JqLHtbaXRlbS5uYW1lXTogaXRlbX0pLHt9KVxuICAgIGNvbnNvbGUubG9nKFwic3RyaW5nXCIsbmV3T2JqW1wiU2Vjb25kIFNpZ2h0XCJdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInN0cmluZ1wiLG5ld09ialtcIlNlY29uZCBTaWdodFwiXS5wcmljZSk7XG59XG4vLyAgZ2V0RGF0YSgpO1xuY29uc3QgY3JlYXRlU2VhcmNoQnRuU3RyID0gW1wiZmEtc29saWRcIiwgXCJmYS1tYWduaWZ5aW5nLWdsYXNzXCIsXCJTZWFyY2hcIixcIlNlYXJjaCBhbmQgZGlzcGxheSBkZXRhaWwgaW5mb3JtYXRpb24gYnkgZGlmZmVyZW50IGNyaXRlcmlhXCJdO1xuY29uc3QgY3JlYXRlQ29tcGFyZUJ0blN0ciA9IFtcImZhLXNvbGlkXCIsIFwiZmEtdGFibGVcIixcIkNvbXBhcmVcIixcIkNvbXBhcmUgaXRlbSBiZXR3ZWVuIDIgZ2FtZXMgd2l0aCB0YWJsZSBvciBjaGFydFwiXTtcbmNvbnN0IGNyZWF0ZVN0YXRpc3RpY3NCdG5TdHIgPSBbXCJmYS1zb2xpZFwiLCBcImZhLWNoYXJ0LXNpbXBsZVwiLFwiU3RhdGlzdGljc1wiLFwiRGF0YSBzdGF0aXN0aWNzIGZvciB0aGUgcGVyaW9kXCJdO1xuY29uc3QgY3JlYXRlSG9tZUJ0blN0ciA9IFtcImZhLXNvbGlkXCIsIFwiZmEtaG91c2VcIixcIkhvbWVcIl07XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG4gICAgY29uc3QgbmF2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZCdG5cIik7XG4gICAgY29uc3QgYnRuU2Nyb2xsVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjcm9sbFVwXCIpO1xuICAgIGNvbnN0IGZyb250UGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnJvbnRQYWdlQnRuXCIpO1xuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVGcm9udFBhZ2VCdG5BcmVhKGNyZWF0ZVN0cil7XG4gICAgICAgIGNvbnN0IGRpdkJ0bkFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBzcGFuQnRuQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBjb25zdCBpQnRuQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICBjb25zdCBwQnRuQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBoNkJ0bkFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG4gICAgXG4gICAgXG4gICAgICAgIGRpdkJ0bkFyZWEuY2xhc3NMaXN0LmFkZChcImJ0bkFyZWFcIik7XG4gICAgICAgIHNwYW5CdG5BcmVhLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsIFwiaWNvbi1jaXJjbGVcIik7XG4gICAgICAgIGlCdG5BcmVhLmNsYXNzTGlzdC5hZGQoY3JlYXRlU3RyWzBdLGNyZWF0ZVN0clsxXSxcImljb24tMVwiLCBcImljb24tMWJcIik7XG4gICAgICAgIGg2QnRuQXJlYS5pbm5lckhUTUwgPSBjcmVhdGVTdHJbMl07XG4gICAgICAgIHBCdG5BcmVhLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LTZcIik7XG4gICAgICAgIHBCdG5BcmVhLmlubmVySFRNTCA9IGNyZWF0ZVN0clszXTtcbiAgICAgICAgXG4gICAgICAgIHNwYW5CdG5BcmVhLmFwcGVuZENoaWxkKGlCdG5BcmVhKTtcbiAgICAgICAgZGl2QnRuQXJlYS5hcHBlbmRDaGlsZChzcGFuQnRuQXJlYSk7XG4gICAgICAgIGRpdkJ0bkFyZWEuYXBwZW5kQ2hpbGQoaDZCdG5BcmVhKTtcbiAgICAgICAgZGl2QnRuQXJlYS5hcHBlbmRDaGlsZChwQnRuQXJlYSk7XG4gICAgICAgIGZyb250UGFnZUJ0bi5hcHBlbmRDaGlsZChkaXZCdG5BcmVhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZUZyb250UGFnZUJ0bigpIHtcbiAgICAgICAgcG9wdWxhdGVGcm9udFBhZ2VCdG5BcmVhKGNyZWF0ZVNlYXJjaEJ0blN0cik7XG4gICAgICAgIHBvcHVsYXRlRnJvbnRQYWdlQnRuQXJlYShjcmVhdGVDb21wYXJlQnRuU3RyKTtcbiAgICAgICAgcG9wdWxhdGVGcm9udFBhZ2VCdG5BcmVhKGNyZWF0ZVN0YXRpc3RpY3NCdG5TdHIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlTmF2U3ViQnRuKGNyZWF0ZVN0cikge1xuICAgICAgICBjb25zdCBidXR0b25OYXZTdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBzcGFuTmF2U3ViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGNvbnN0IGlOYXZTdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcblxuICAgICAgICBidXR0b25OYXZTdWIuY2xhc3NMaXN0LmFkZChcIm5hdlN1YkJ0blwiKTtcbiAgICAgICAgc3Bhbk5hdlN1Yi5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgICAgICAgc3Bhbk5hdlN1Yi5pbm5lckhUTUwgPSBjcmVhdGVTdHJbMl07XG4gICAgICAgIGlOYXZTdWIuY2xhc3NMaXN0LmFkZChjcmVhdGVTdHJbMF0sY3JlYXRlU3RyWzFdKTtcblxuICAgICAgICBidXR0b25OYXZTdWIuYXBwZW5kQ2hpbGQoaU5hdlN1Yik7XG4gICAgICAgIGJ1dHRvbk5hdlN1Yi5hcHBlbmRDaGlsZChzcGFuTmF2U3ViKTtcbiAgICAgICAgbmF2QnRuLmFwcGVuZENoaWxkKCBidXR0b25OYXZTdWIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZU5hdkJ0bigpIHtcbiAgICAgICAgcG9wdWxhdGVOYXZTdWJCdG4oY3JlYXRlSG9tZUJ0blN0cik7XG4gICAgICAgIHBvcHVsYXRlTmF2U3ViQnRuKGNyZWF0ZVNlYXJjaEJ0blN0cik7XG4gICAgICAgIHBvcHVsYXRlTmF2U3ViQnRuKGNyZWF0ZUNvbXBhcmVCdG5TdHIpO1xuICAgICAgICBwb3B1bGF0ZU5hdlN1YkJ0bihjcmVhdGVTdGF0aXN0aWNzQnRuU3RyKTtcbiAgICB9XG4gICAgXG4gICAgcG9wdWxhdGVGcm9udFBhZ2VCdG4oKTtcbiAgICBwb3B1bGF0ZU5hdkJ0bigpO1xufSk7XG4iXSwibmFtZXMiOlsiZ2V0RGF0YSIsInJlcXVlc3QiLCJmZXRjaCIsInJlc3BvbmUiLCJqc29uIiwiYXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwibmV3T2JqIiwicmVkdWNlIiwib2JqIiwiaXRlbSIsImFzc2lnbiIsIm5hbWUiLCJjcmVhdGVTZWFyY2hCdG5TdHIiLCJjcmVhdGVDb21wYXJlQnRuU3RyIiwiY3JlYXRlU3RhdGlzdGljc0J0blN0ciIsImNyZWF0ZUhvbWVCdG5TdHIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYXZCdG4iLCJnZXRFbGVtZW50QnlJZCIsImJ0blNjcm9sbFVwIiwiZnJvbnRQYWdlQnRuIiwicXVlcnlTZWxlY3RvciIsInBvcHVsYXRlRnJvbnRQYWdlQnRuQXJlYSIsImNyZWF0ZVN0ciIsImRpdkJ0bkFyZWEiLCJjcmVhdGVFbGVtZW50Iiwic3BhbkJ0bkFyZWEiLCJpQnRuQXJlYSIsInBCdG5BcmVhIiwiaDZCdG5BcmVhIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJwb3B1bGF0ZUZyb250UGFnZUJ0biIsInBvcHVsYXRlTmF2U3ViQnRuIiwiYnV0dG9uTmF2U3ViIiwic3Bhbk5hdlN1YiIsImlOYXZTdWIiLCJwb3B1bGF0ZU5hdkJ0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0ZWFtX2dhbWVzX3N0YXRpc3RpY3MvLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzP2YzOWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@fortawesome/fontawesome-free/css/all.min.css\n");

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