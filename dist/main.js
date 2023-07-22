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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n\n\nasync function getData() {\n  const request = await fetch(\"/data/steamData-after2019.json\");\n  const respone = await request.json();\n  // console.log(respone);\n  const array = Object.values(respone);\n  console.log(array);\n  const newObj = array.reduce((obj, item) => Object.assign(obj, {\n    [item.name]: item\n  }), {});\n  console.log(\"string\", newObj[\"Second Sight\"]);\n  // console.log(\"string\",newObj[\"Second Sight\"].price);\n}\n//  getData();\n\nconst createSearchBtnStr = [\"fa-solid\", \"fa-magnifying-glass\", \"Search\", \"searchPage\", \"Search and display detail information by different criteria\"];\nconst createCompareBtnStr = [\"fa-solid\", \"fa-table\", \"Compare\", \"comparePage\", \"Compare item between 2 games with table or chart\"];\nconst createStatisticsBtnStr = [\"fa-solid\", \"fa-chart-simple\", \"Statistics\", \"statistPage\", \"Data statistics for the period\"];\nconst createHomeBtnStr = [\"fa-solid\", \"fa-house\", \"Home\", \"frontPage\"];\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const navBtn = document.getElementById(\"navBtn\");\n  // const btnScrollUp = document.getElementById(\"scrollUp\");\n  const frontPageBtn = document.querySelector(\".frontPageBtn\");\n  function populateFrontPageBtnArea(createStr) {\n    const divBtnArea = buildElement(\"div\", \"btnArea\", \"\");\n    const spanBtnArea = buildElement(\"span\", [\"icon\", \"icon-circle\"], \"\");\n    const iBtnArea = buildElement(\"i\", [createStr[0], createStr[1], \"icon-1\", \"icon-1b\"], \"\");\n    const pBtnArea = buildElement(\"p\", \"text-6\", createStr[4]);\n    const h6BtnArea = buildElement(\"h6\", \"\", createStr[2]);\n    divBtnArea.addEventListener(\"click\", () => {\n      document.getElementById(createStr[3]).scrollIntoView();\n    });\n    spanBtnArea.appendChild(iBtnArea);\n    divBtnArea.appendChild(spanBtnArea);\n    divBtnArea.appendChild(h6BtnArea);\n    divBtnArea.appendChild(pBtnArea);\n    frontPageBtn.appendChild(divBtnArea);\n  }\n  function populateFrontPageBtn() {\n    populateFrontPageBtnArea(createSearchBtnStr);\n    populateFrontPageBtnArea(createCompareBtnStr);\n    populateFrontPageBtnArea(createStatisticsBtnStr);\n  }\n  function populateNavSubBtn(createStr) {\n    const buttonNavSub = buildElement(\"button\", \"navSubBtn\", \"\");\n    const spanNavSub = buildElement(\"span\", \"text\", createStr[2]);\n    const iNavSub = buildElement(\"i\", [createStr[0], createStr[1]], \"\");\n    buttonNavSub.addEventListener(\"click\", () => {\n      document.getElementById(createStr[3]).scrollIntoView();\n    });\n    buttonNavSub.appendChild(iNavSub);\n    buttonNavSub.appendChild(spanNavSub);\n    navBtn.appendChild(buttonNavSub);\n  }\n  function populateNavBtn() {\n    populateNavSubBtn(createHomeBtnStr);\n    populateNavSubBtn(createSearchBtnStr);\n    populateNavSubBtn(createCompareBtnStr);\n    populateNavSubBtn(createStatisticsBtnStr);\n  }\n  function populateSearchPage(createStr) {}\n  populateFrontPageBtn();\n  populateNavBtn();\n});\nfunction buildElement(type, classList, innerHTML) {\n  let element = document.createElement(type);\n  if (Array.isArray(classList)) {\n    classList.forEach(c => {\n      element.classList.add(c);\n    });\n  } else if (classList != \"\") element.classList.add(classList);\n  if (innerHTML != \"\") element.innerHTML = innerHTML;\n  return element;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFrQkEsQ0FBQ2YsU0FBUyxFQUFFLENBRXZDO0VBRUFTLG9CQUFvQixDQUFDLENBQUM7RUFDdEJLLGNBQWMsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQztBQUVGLFNBQVNaLFlBQVlBLENBQUNjLElBQUksRUFBQ0MsU0FBUyxFQUFDQyxTQUFTLEVBQUM7RUFDM0MsSUFBSUMsT0FBTyxHQUFHMUIsUUFBUSxDQUFDMkIsYUFBYSxDQUFDSixJQUFJLENBQUM7RUFDMUMsSUFBSUssS0FBSyxDQUFDQyxPQUFPLENBQUNMLFNBQVMsQ0FBQyxFQUFFO0lBQzFCQSxTQUFTLENBQUNNLE9BQU8sQ0FBRUMsQ0FBQyxJQUFJO01BQ3BCTCxPQUFPLENBQUNGLFNBQVMsQ0FBQ1EsR0FBRyxDQUFDRCxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxNQUNJLElBQUlQLFNBQVMsSUFBRyxFQUFFLEVBQ25CRSxPQUFPLENBQUNGLFNBQVMsQ0FBQ1EsR0FBRyxDQUFDUixTQUFTLENBQUM7RUFDcEMsSUFBSUMsU0FBUyxJQUFJLEVBQUUsRUFDZkMsT0FBTyxDQUFDRCxTQUFTLEdBQUdBLFNBQVM7RUFDakMsT0FBT0MsT0FBTztBQUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0ZWFtX2dhbWVzX3N0YXRpc3RpY3MvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEgKCl7XG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFwiL2RhdGEvc3RlYW1EYXRhLWFmdGVyMjAxOS5qc29uXCIpXG4gICAgY29uc3QgcmVzcG9uZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbmUpO1xuICAgIGNvbnN0IGFycmF5ID1PYmplY3QudmFsdWVzKHJlc3BvbmUpO1xuICAgIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICBjb25zdCBuZXdPYmogPSBhcnJheS5yZWR1Y2UoKG9iaixpdGVtKT0+T2JqZWN0LmFzc2lnbihvYmose1tpdGVtLm5hbWVdOiBpdGVtfSkse30pXG4gICAgY29uc29sZS5sb2coXCJzdHJpbmdcIixuZXdPYmpbXCJTZWNvbmQgU2lnaHRcIl0pO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic3RyaW5nXCIsbmV3T2JqW1wiU2Vjb25kIFNpZ2h0XCJdLnByaWNlKTtcbn1cbi8vICBnZXREYXRhKCk7XG5cbmNvbnN0IGNyZWF0ZVNlYXJjaEJ0blN0ciA9IFtcImZhLXNvbGlkXCIsIFwiZmEtbWFnbmlmeWluZy1nbGFzc1wiLFwiU2VhcmNoXCIsXCJzZWFyY2hQYWdlXCIsXCJTZWFyY2ggYW5kIGRpc3BsYXkgZGV0YWlsIGluZm9ybWF0aW9uIGJ5IGRpZmZlcmVudCBjcml0ZXJpYVwiXTtcbmNvbnN0IGNyZWF0ZUNvbXBhcmVCdG5TdHIgPSBbXCJmYS1zb2xpZFwiLCBcImZhLXRhYmxlXCIsXCJDb21wYXJlXCIsXCJjb21wYXJlUGFnZVwiLFwiQ29tcGFyZSBpdGVtIGJldHdlZW4gMiBnYW1lcyB3aXRoIHRhYmxlIG9yIGNoYXJ0XCJdO1xuY29uc3QgY3JlYXRlU3RhdGlzdGljc0J0blN0ciA9IFtcImZhLXNvbGlkXCIsIFwiZmEtY2hhcnQtc2ltcGxlXCIsXCJTdGF0aXN0aWNzXCIsXCJzdGF0aXN0UGFnZVwiLFwiRGF0YSBzdGF0aXN0aWNzIGZvciB0aGUgcGVyaW9kXCJdO1xuY29uc3QgY3JlYXRlSG9tZUJ0blN0ciA9IFtcImZhLXNvbGlkXCIsIFwiZmEtaG91c2VcIixcIkhvbWVcIixcImZyb250UGFnZVwiLF07XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG4gICAgY29uc3QgbmF2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZCdG5cIik7XG4gICAgLy8gY29uc3QgYnRuU2Nyb2xsVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjcm9sbFVwXCIpO1xuICAgIGNvbnN0IGZyb250UGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnJvbnRQYWdlQnRuXCIpO1xuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVGcm9udFBhZ2VCdG5BcmVhKGNyZWF0ZVN0cil7XG4gICAgICAgIGNvbnN0IGRpdkJ0bkFyZWEgPSAgYnVpbGRFbGVtZW50KFwiZGl2XCIsXCJidG5BcmVhXCIsXCJcIik7XG4gICAgICAgIGNvbnN0IHNwYW5CdG5BcmVhID0gYnVpbGRFbGVtZW50KFwic3BhblwiLFtcImljb25cIiwgXCJpY29uLWNpcmNsZVwiXSxcIlwiKTtcbiAgICAgICAgY29uc3QgaUJ0bkFyZWEgPSBidWlsZEVsZW1lbnQoXCJpXCIsW2NyZWF0ZVN0clswXSxjcmVhdGVTdHJbMV0sXCJpY29uLTFcIiwgXCJpY29uLTFiXCJdLFwiXCIpO1xuICAgICAgICBjb25zdCBwQnRuQXJlYSA9ICBidWlsZEVsZW1lbnQoXCJwXCIsXCJ0ZXh0LTZcIixjcmVhdGVTdHJbNF0pO1xuICAgICAgICBjb25zdCBoNkJ0bkFyZWEgPSAgYnVpbGRFbGVtZW50KFwiaDZcIixcIlwiLGNyZWF0ZVN0clsyXSk7XG4gICAgICAgIFxuICAgICAgICBkaXZCdG5BcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjcmVhdGVTdHJbM10pLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgc3BhbkJ0bkFyZWEuYXBwZW5kQ2hpbGQoaUJ0bkFyZWEpO1xuICAgICAgICBkaXZCdG5BcmVhLmFwcGVuZENoaWxkKHNwYW5CdG5BcmVhKTtcbiAgICAgICAgZGl2QnRuQXJlYS5hcHBlbmRDaGlsZChoNkJ0bkFyZWEpO1xuICAgICAgICBkaXZCdG5BcmVhLmFwcGVuZENoaWxkKHBCdG5BcmVhKTtcbiAgICAgICAgZnJvbnRQYWdlQnRuLmFwcGVuZENoaWxkKGRpdkJ0bkFyZWEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlRnJvbnRQYWdlQnRuKCkge1xuICAgICAgICBwb3B1bGF0ZUZyb250UGFnZUJ0bkFyZWEoY3JlYXRlU2VhcmNoQnRuU3RyKTtcbiAgICAgICAgcG9wdWxhdGVGcm9udFBhZ2VCdG5BcmVhKGNyZWF0ZUNvbXBhcmVCdG5TdHIpO1xuICAgICAgICBwb3B1bGF0ZUZyb250UGFnZUJ0bkFyZWEoY3JlYXRlU3RhdGlzdGljc0J0blN0cik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVOYXZTdWJCdG4oY3JlYXRlU3RyKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbk5hdlN1YiA9ICBidWlsZEVsZW1lbnQoXCJidXR0b25cIixcIm5hdlN1YkJ0blwiLFwiXCIpO1xuICAgICAgICBjb25zdCBzcGFuTmF2U3ViID0gIGJ1aWxkRWxlbWVudChcInNwYW5cIixcInRleHRcIixjcmVhdGVTdHJbMl0pO1xuICAgICAgICBjb25zdCBpTmF2U3ViID0gIGJ1aWxkRWxlbWVudChcImlcIixbY3JlYXRlU3RyWzBdLGNyZWF0ZVN0clsxXV0sXCJcIik7XG4gICAgICAgIFxuICAgICAgICBidXR0b25OYXZTdWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNyZWF0ZVN0clszXSkuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICBidXR0b25OYXZTdWIuYXBwZW5kQ2hpbGQoaU5hdlN1Yik7XG4gICAgICAgIGJ1dHRvbk5hdlN1Yi5hcHBlbmRDaGlsZChzcGFuTmF2U3ViKTtcbiAgICAgICAgbmF2QnRuLmFwcGVuZENoaWxkKCBidXR0b25OYXZTdWIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZU5hdkJ0bigpIHtcbiAgICAgICAgcG9wdWxhdGVOYXZTdWJCdG4oY3JlYXRlSG9tZUJ0blN0cik7XG4gICAgICAgIHBvcHVsYXRlTmF2U3ViQnRuKGNyZWF0ZVNlYXJjaEJ0blN0cik7XG4gICAgICAgIHBvcHVsYXRlTmF2U3ViQnRuKGNyZWF0ZUNvbXBhcmVCdG5TdHIpO1xuICAgICAgICBwb3B1bGF0ZU5hdlN1YkJ0bihjcmVhdGVTdGF0aXN0aWNzQnRuU3RyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVNlYXJjaFBhZ2UoY3JlYXRlU3RyKSB7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBwb3B1bGF0ZUZyb250UGFnZUJ0bigpO1xuICAgIHBvcHVsYXRlTmF2QnRuKCk7XG59KTtcblxuZnVuY3Rpb24gYnVpbGRFbGVtZW50KHR5cGUsY2xhc3NMaXN0LGlubmVySFRNTCl7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTGlzdCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmZvckVhY2goKGMpID0+e1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2xhc3NMaXN0ICE9XCJcIilcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdCk7XG4gICAgaWYgKGlubmVySFRNTCAhPSBcIlwiKVxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICByZXR1cm4gZWxlbWVudDtcbn0iXSwibmFtZXMiOlsiZ2V0RGF0YSIsInJlcXVlc3QiLCJmZXRjaCIsInJlc3BvbmUiLCJqc29uIiwiYXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwibmV3T2JqIiwicmVkdWNlIiwib2JqIiwiaXRlbSIsImFzc2lnbiIsIm5hbWUiLCJjcmVhdGVTZWFyY2hCdG5TdHIiLCJjcmVhdGVDb21wYXJlQnRuU3RyIiwiY3JlYXRlU3RhdGlzdGljc0J0blN0ciIsImNyZWF0ZUhvbWVCdG5TdHIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYXZCdG4iLCJnZXRFbGVtZW50QnlJZCIsImZyb250UGFnZUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1bGF0ZUZyb250UGFnZUJ0bkFyZWEiLCJjcmVhdGVTdHIiLCJkaXZCdG5BcmVhIiwiYnVpbGRFbGVtZW50Iiwic3BhbkJ0bkFyZWEiLCJpQnRuQXJlYSIsInBCdG5BcmVhIiwiaDZCdG5BcmVhIiwic2Nyb2xsSW50b1ZpZXciLCJhcHBlbmRDaGlsZCIsInBvcHVsYXRlRnJvbnRQYWdlQnRuIiwicG9wdWxhdGVOYXZTdWJCdG4iLCJidXR0b25OYXZTdWIiLCJzcGFuTmF2U3ViIiwiaU5hdlN1YiIsInBvcHVsYXRlTmF2QnRuIiwicG9wdWxhdGVTZWFyY2hQYWdlIiwidHlwZSIsImNsYXNzTGlzdCIsImlubmVySFRNTCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsImMiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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