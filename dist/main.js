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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/BuildObj.js */ \"./src/scripts/BuildObj.js\");\n/* harmony import */ var _scripts_OptionObj_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/OptionObj.js */ \"./src/scripts/OptionObj.js\");\n\n\n\n\n// import '@fortawesome/fontawesome-free/css/all.min.css';\n\nasync function getData() {\n  const request = await fetch(\"/data/steamData-after2019.json\");\n  const respone = await request.json();\n  // console.log(respone);\n  const array = Object.values(respone);\n  console.log(array);\n  const newObj = array.reduce((obj, item) => Object.assign(obj, {\n    [item.name]: item\n  }), {});\n  console.log(\"string\", newObj[\"Second Sight\"]);\n  // console.log(\"string\",newObj[\"Second Sight\"].price);\n}\n//  getData();\n//pullDownList \nconst operatorHash = {\n  greaterEqual: \"Greater and Equal (>=)\",\n  greater: \"Greater (>)\",\n  samller: \"Samller (<)\"\n};\n\n//frontPage\nconst searchBtnStrBuildObj = new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"\", [\"fa-solid\", \"fa-magnifying-glass\"], \"Search\", \"searchPage\", \"Search and display detail information by different criteria\");\nconst compareBtnStrBuildObj = new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"\", [\"fa-solid\", \"fa-table\"], \"Compare\", \"comparePage\", \"Compare item between 2 games with table or chart\");\nconst statisticsBtnStrBuildObj = new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"\", [\"fa-solid\", \"fa-chart-simple\"], \"Statistics\", \"statistPage\", \"Data statistics for the period\");\nconst homeBtnStrBuildObj = new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"\", [\"fa-solid\", \"fa-house\"], \"Home\", \"frontPage\");\n//searchCriteria\nconst nameInputObj = new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"input\", null, null, \"gameName\", null, \"text\", \"Name:\");\nconst releaseFromInputObj = new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"input\", null, null, \"releaseFrom\", null, \"month\", \"Release From:\");\nconst releaseToInputObj = new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"input\", null, null, \"releaseTo\", null, \"month\", \"Release To:\", \"2023-06\");\nconst ratingInputObj = buildObjHelper({\n  tag: \"select\",\n  id: \"operator\"\n});\nconst numberInputObj = buildObjHelper({\n  tag: \"input\",\n  name: \"rating\",\n  id: \"operator\",\n  inputType: \"number\",\n  attribute: \"0.01\",\n  lableName: \"Rating:\"\n});\nconst searchCriteriaCreateArr = [[nameInputObj, releaseFromInputObj, releaseToInputObj], [[ratingInputObj, numberInputObj]]];\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const navBtn = document.getElementById(\"navBtn\");\n  // const btnScrollUp = document.getElementById(\"scrollUp\");\n  const frontPageBtn = document.querySelector(\".frontPageBtn\");\n  const searchSearchArea = document.querySelector(\"#search-searchArea\");\n  function populateFrontPageBtnArea(buildObj) {\n    const divBtnArea = buildElement(new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"div\", \"btnArea\"));\n    const spanBtnArea = buildElement(new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"span\", [\"icon\", \"icon-circle\"]));\n    const iBtnArea = buildElement(new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"i\", [\"icon-1\", \"icon-1b\"].concat(buildObj.classArr)));\n    const pBtnArea = buildElement(new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"p\", \"text-6\", null, null, buildObj.innerHTML));\n    const h6BtnArea = buildElement(new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"h6\", null, buildObj.name));\n    divBtnArea.addEventListener(\"click\", () => {\n      document.getElementById(buildObj.id).scrollIntoView();\n    });\n    spanBtnArea.appendChild(iBtnArea);\n    divBtnArea.appendChild(spanBtnArea);\n    divBtnArea.appendChild(h6BtnArea);\n    divBtnArea.appendChild(pBtnArea);\n    frontPageBtn.appendChild(divBtnArea);\n  }\n  function populateFrontPageBtn() {\n    populateFrontPageBtnArea(searchBtnStrBuildObj);\n    populateFrontPageBtnArea(compareBtnStrBuildObj);\n    populateFrontPageBtnArea(statisticsBtnStrBuildObj);\n  }\n  function populateNavSubBtn(buildObj) {\n    const buttonNavSub = buildElement(new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"button\", \"navSubBtn\"));\n    const spanNavSub = buildElement(new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"span\", \"text\", buildObj.name));\n    const iNavSub = buildElement(new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"i\", buildObj.classArr));\n    buttonNavSub.addEventListener(\"click\", () => {\n      document.getElementById(buildObj.id).scrollIntoView();\n    });\n    buttonNavSub.appendChild(iNavSub);\n    buttonNavSub.appendChild(spanNavSub);\n    navBtn.appendChild(buttonNavSub);\n  }\n  function populateNavBtn() {\n    populateNavSubBtn(homeBtnStrBuildObj);\n    populateNavSubBtn(searchBtnStrBuildObj);\n    populateNavSubBtn(compareBtnStrBuildObj);\n    populateNavSubBtn(statisticsBtnStrBuildObj);\n  }\n  function populateSearchPage(createStr) {\n    const tableSearchArea = buildElement(new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"table\", \"user-input-table\"));\n    createStr.forEach(row => {\n      let tr = createTableTr(row);\n      tableSearchArea.appendChild(tr);\n    });\n    searchSearchArea.appendChild(tableSearchArea);\n  }\n  populateFrontPageBtn();\n  populateNavBtn();\n  populateSearchPage(searchCriteriaCreateArr);\n});\nfunction buildObjHelper(createHash) {\n  let buildObj = new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  for (const key in createHash) {\n    buildObj[key] = createHash[key];\n  }\n  return buildObj;\n}\nfunction buildElement(buildObj) {\n  let newElement = document.createElement(buildObj.tag);\n  if (buildObj.tag === \"input\") {\n    if (buildObj.inputType != \"text\") newElement.type = buildObj.inputType;\n  }\n  if (Array.isArray(buildObj.classArr)) {\n    buildObj.classArr.forEach(c => {\n      newElement.classList.add(c);\n    });\n  } else if (buildObj.classArr) newElement.classList.add(buildObj.classArr);\n  if (buildObj.name) newElement.innerHTML = buildObj.name;else if (buildObj.value) newElement.value = buildObj.value;else if (buildObj.innerHTML) newElement.innerHTML = buildObj.innerHTML;\n  if (buildObj.tag === 'label' && buildObj.lableName) newElement.setAttribute('for', buildObj.lableName);\n  return newElement;\n}\nfunction createTableTr(trCreateObjArr) {\n  let masterTr = buildElement(new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"tr\"));\n  trCreateObjArr.forEach(tdCreateObj => {\n    let innerTd = createTableTd(tdCreateObj);\n    if (Array.isArray(innerTd)) {\n      innerTd.forEach(td => {\n        masterTr.appendChild(td);\n      });\n    } else masterTr.appendChild(innerTd);\n  });\n  return masterTr;\n}\nfunction createTableTd(tdCreateObjArr) {\n  let returnArr = [];\n  if (Array.isArray(tdCreateObjArr)) {\n    tdCreateObjArr.forEach(tdCreateObj => {\n      returnArr = returnArr.concat(createTableTdHelper(tdCreateObj));\n    });\n  } else returnArr = returnArr.concat(createTableTdHelper(tdCreateObjArr));\n  return returnArr;\n}\nfunction createTableTdHelper(tdCreateObj) {\n  let returnArr = [];\n  if (tdCreateObj.lableName) {\n    let labelmasterTd = buildElement(new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"td\"));\n    let labelObj = new _scripts_BuildObj_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"label\", null, null, null, tdCreateObj.lableName, tdCreateObj.id);\n    let labelTd = buildElement(labelObj);\n    labelmasterTd.appendChild(labelTd);\n    returnArr.push(labelmasterTd);\n  }\n  let innterTd = buildElement(tdCreateObj);\n  if (returnArr.length > 0) {\n    returnArr.push(innterTd);\n    return returnArr;\n  } else return innterTd;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLElBQUksRUFBQyxJQUFJLEVBQUNxRixXQUFXLENBQUNqRCxTQUFTLEVBQUNpRCxXQUFXLENBQUNyRCxFQUFFLENBQUM7SUFDeEYsSUFBSThELE9BQU8sR0FBSTlDLFlBQVksQ0FBQzZDLFFBQVEsQ0FBQztJQUNyQ0QsYUFBYSxDQUFDbkMsV0FBVyxDQUFDcUMsT0FBTyxDQUFDO0lBQ2xDSixTQUFTLENBQUNLLElBQUksQ0FBQ0gsYUFBYSxDQUFDO0VBQ2pDO0VBQ0EsSUFBSUksUUFBUSxHQUFJaEQsWUFBWSxDQUFDcUMsV0FBVyxDQUFDO0VBQ3pDLElBQUlLLFNBQVMsQ0FBQ08sTUFBTSxHQUFHLENBQUMsRUFBRTtJQUN0QlAsU0FBUyxDQUFDSyxJQUFJLENBQUNDLFFBQVEsQ0FBQztJQUN4QixPQUFPTixTQUFTO0VBQ3BCLENBQUMsTUFFRyxPQUFPTSxRQUFRO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RlYW1fZ2FtZXNfc3RhdGlzdGljcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9pbmRleC5zY3NzJztcbmltcG9ydCBCdWlsZE9iaiBmcm9tIFwiLi9zY3JpcHRzL0J1aWxkT2JqLmpzXCJcbmltcG9ydCBPcHRpb25PYmogZnJvbSBcIi4vc2NyaXB0cy9PcHRpb25PYmouanNcIlxuXG4vLyBpbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEgKCl7XG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFwiL2RhdGEvc3RlYW1EYXRhLWFmdGVyMjAxOS5qc29uXCIpXG4gICAgY29uc3QgcmVzcG9uZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbmUpO1xuICAgIGNvbnN0IGFycmF5ID1PYmplY3QudmFsdWVzKHJlc3BvbmUpO1xuICAgIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICBjb25zdCBuZXdPYmogPSBhcnJheS5yZWR1Y2UoKG9iaixpdGVtKT0+T2JqZWN0LmFzc2lnbihvYmose1tpdGVtLm5hbWVdOiBpdGVtfSkse30pXG4gICAgY29uc29sZS5sb2coXCJzdHJpbmdcIixuZXdPYmpbXCJTZWNvbmQgU2lnaHRcIl0pO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic3RyaW5nXCIsbmV3T2JqW1wiU2Vjb25kIFNpZ2h0XCJdLnByaWNlKTtcbn1cbi8vICBnZXREYXRhKCk7XG4vL3B1bGxEb3duTGlzdCBcbmNvbnN0IG9wZXJhdG9ySGFzaCA9IHtncmVhdGVyRXF1YWw6XCJHcmVhdGVyIGFuZCBFcXVhbCAoPj0pXCIsZ3JlYXRlcjpcIkdyZWF0ZXIgKD4pXCIsc2FtbGxlcjpcIlNhbWxsZXIgKDwpXCJ9O1xuXG4vL2Zyb250UGFnZVxuY29uc3Qgc2VhcmNoQnRuU3RyQnVpbGRPYmogPSBuZXcgQnVpbGRPYmooXCJcIixbXCJmYS1zb2xpZFwiLCBcImZhLW1hZ25pZnlpbmctZ2xhc3NcIl0sXCJTZWFyY2hcIixcInNlYXJjaFBhZ2VcIixcIlNlYXJjaCBhbmQgZGlzcGxheSBkZXRhaWwgaW5mb3JtYXRpb24gYnkgZGlmZmVyZW50IGNyaXRlcmlhXCIpO1xuY29uc3QgY29tcGFyZUJ0blN0ckJ1aWxkT2JqID0gbmV3IEJ1aWxkT2JqKFwiXCIsW1wiZmEtc29saWRcIiwgXCJmYS10YWJsZVwiXSxcIkNvbXBhcmVcIixcImNvbXBhcmVQYWdlXCIsXCJDb21wYXJlIGl0ZW0gYmV0d2VlbiAyIGdhbWVzIHdpdGggdGFibGUgb3IgY2hhcnRcIik7XG5jb25zdCBzdGF0aXN0aWNzQnRuU3RyQnVpbGRPYmogPSBuZXcgQnVpbGRPYmooXCJcIixbXCJmYS1zb2xpZFwiLCBcImZhLWNoYXJ0LXNpbXBsZVwiXSxcIlN0YXRpc3RpY3NcIixcInN0YXRpc3RQYWdlXCIsXCJEYXRhIHN0YXRpc3RpY3MgZm9yIHRoZSBwZXJpb2RcIik7XG5jb25zdCBob21lQnRuU3RyQnVpbGRPYmogPSBuZXcgQnVpbGRPYmooXCJcIixbXCJmYS1zb2xpZFwiLCBcImZhLWhvdXNlXCJdLFwiSG9tZVwiLFwiZnJvbnRQYWdlXCIpO1xuLy9zZWFyY2hDcml0ZXJpYVxuY29uc3QgbmFtZUlucHV0T2JqID0gbmV3IEJ1aWxkT2JqKFwiaW5wdXRcIixudWxsLG51bGwsXCJnYW1lTmFtZVwiLG51bGwsXCJ0ZXh0XCIsXCJOYW1lOlwiKTtcbmNvbnN0IHJlbGVhc2VGcm9tSW5wdXRPYmogPSBuZXcgQnVpbGRPYmooXCJpbnB1dFwiLG51bGwsbnVsbCxcInJlbGVhc2VGcm9tXCIsbnVsbCxcIm1vbnRoXCIsXCJSZWxlYXNlIEZyb206XCIpO1xuY29uc3QgcmVsZWFzZVRvSW5wdXRPYmogPSBuZXcgQnVpbGRPYmooXCJpbnB1dFwiLG51bGwsbnVsbCxcInJlbGVhc2VUb1wiLG51bGwsXCJtb250aFwiLFwiUmVsZWFzZSBUbzpcIixcIjIwMjMtMDZcIik7XG5jb25zdCByYXRpbmdJbnB1dE9iaiA9IGJ1aWxkT2JqSGVscGVyKHt0YWc6XCJzZWxlY3RcIixpZDpcIm9wZXJhdG9yXCJ9KTtcbmNvbnN0IG51bWJlcklucHV0T2JqID0gYnVpbGRPYmpIZWxwZXIoe3RhZzpcImlucHV0XCIsbmFtZTpcInJhdGluZ1wiLCBpZDpcIm9wZXJhdG9yXCIsaW5wdXRUeXBlOlwibnVtYmVyXCIsYXR0cmlidXRlOlwiMC4wMVwiLGxhYmxlTmFtZTpcIlJhdGluZzpcIn0pO1xuXG5jb25zdCBzZWFyY2hDcml0ZXJpYUNyZWF0ZUFyciA9IFtbbmFtZUlucHV0T2JqLHJlbGVhc2VGcm9tSW5wdXRPYmoscmVsZWFzZVRvSW5wdXRPYmpdXG4sW1tyYXRpbmdJbnB1dE9iaixudW1iZXJJbnB1dE9ial1dXTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG4gICAgY29uc3QgbmF2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZCdG5cIik7XG4gICAgLy8gY29uc3QgYnRuU2Nyb2xsVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjcm9sbFVwXCIpO1xuICAgIGNvbnN0IGZyb250UGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnJvbnRQYWdlQnRuXCIpO1xuICAgIGNvbnN0IHNlYXJjaFNlYXJjaEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1zZWFyY2hBcmVhXCIpO1xuXG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZUZyb250UGFnZUJ0bkFyZWEoYnVpbGRPYmope1xuICAgICAgICBjb25zdCBkaXZCdG5BcmVhID0gYnVpbGRFbGVtZW50KG5ldyBCdWlsZE9iaihcImRpdlwiLFwiYnRuQXJlYVwiKSk7XG4gICAgICAgIGNvbnN0IHNwYW5CdG5BcmVhID0gYnVpbGRFbGVtZW50KG5ldyBCdWlsZE9iaihcInNwYW5cIixbXCJpY29uXCIsIFwiaWNvbi1jaXJjbGVcIl0pKTtcbiAgICAgICAgY29uc3QgaUJ0bkFyZWEgPSBidWlsZEVsZW1lbnQobmV3IEJ1aWxkT2JqKFwiaVwiLFtcImljb24tMVwiLCBcImljb24tMWJcIl0uY29uY2F0KGJ1aWxkT2JqLmNsYXNzQXJyKSkpO1xuICAgICAgICBjb25zdCBwQnRuQXJlYSA9IGJ1aWxkRWxlbWVudChuZXcgQnVpbGRPYmooXCJwXCIsXCJ0ZXh0LTZcIixudWxsLG51bGwsYnVpbGRPYmouaW5uZXJIVE1MKSk7XG4gICAgICAgIGNvbnN0IGg2QnRuQXJlYSA9IGJ1aWxkRWxlbWVudChuZXcgQnVpbGRPYmooXCJoNlwiLG51bGwsYnVpbGRPYmoubmFtZSkpO1xuXG4gICAgICAgIGRpdkJ0bkFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1aWxkT2JqLmlkKS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHNwYW5CdG5BcmVhLmFwcGVuZENoaWxkKGlCdG5BcmVhKTtcbiAgICAgICAgZGl2QnRuQXJlYS5hcHBlbmRDaGlsZChzcGFuQnRuQXJlYSk7XG4gICAgICAgIGRpdkJ0bkFyZWEuYXBwZW5kQ2hpbGQoaDZCdG5BcmVhKTtcbiAgICAgICAgZGl2QnRuQXJlYS5hcHBlbmRDaGlsZChwQnRuQXJlYSk7XG4gICAgICAgIGZyb250UGFnZUJ0bi5hcHBlbmRDaGlsZChkaXZCdG5BcmVhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZUZyb250UGFnZUJ0bigpIHtcbiAgICAgICAgcG9wdWxhdGVGcm9udFBhZ2VCdG5BcmVhKHNlYXJjaEJ0blN0ckJ1aWxkT2JqKTtcbiAgICAgICAgcG9wdWxhdGVGcm9udFBhZ2VCdG5BcmVhKGNvbXBhcmVCdG5TdHJCdWlsZE9iaik7XG4gICAgICAgIHBvcHVsYXRlRnJvbnRQYWdlQnRuQXJlYShzdGF0aXN0aWNzQnRuU3RyQnVpbGRPYmopO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlTmF2U3ViQnRuKGJ1aWxkT2JqKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbk5hdlN1YiA9ICBidWlsZEVsZW1lbnQobmV3IEJ1aWxkT2JqKFwiYnV0dG9uXCIsXCJuYXZTdWJCdG5cIikpO1xuICAgICAgICBjb25zdCBzcGFuTmF2U3ViID0gIGJ1aWxkRWxlbWVudChuZXcgQnVpbGRPYmooXCJzcGFuXCIsXCJ0ZXh0XCIsYnVpbGRPYmoubmFtZSkpO1xuICAgICAgICBjb25zdCBpTmF2U3ViID0gIGJ1aWxkRWxlbWVudChuZXcgQnVpbGRPYmooXCJpXCIsYnVpbGRPYmouY2xhc3NBcnIpKTtcbiAgICAgICAgXG4gICAgICAgIGJ1dHRvbk5hdlN1Yi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnVpbGRPYmouaWQpLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgYnV0dG9uTmF2U3ViLmFwcGVuZENoaWxkKGlOYXZTdWIpO1xuICAgICAgICBidXR0b25OYXZTdWIuYXBwZW5kQ2hpbGQoc3Bhbk5hdlN1Yik7XG4gICAgICAgIG5hdkJ0bi5hcHBlbmRDaGlsZCggYnV0dG9uTmF2U3ViKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcG9wdWxhdGVOYXZCdG4oKSB7XG4gICAgICAgIHBvcHVsYXRlTmF2U3ViQnRuKGhvbWVCdG5TdHJCdWlsZE9iaik7XG4gICAgICAgIHBvcHVsYXRlTmF2U3ViQnRuKHNlYXJjaEJ0blN0ckJ1aWxkT2JqKTtcbiAgICAgICAgcG9wdWxhdGVOYXZTdWJCdG4oY29tcGFyZUJ0blN0ckJ1aWxkT2JqKTtcbiAgICAgICAgcG9wdWxhdGVOYXZTdWJCdG4oc3RhdGlzdGljc0J0blN0ckJ1aWxkT2JqKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVNlYXJjaFBhZ2UoY3JlYXRlU3RyKSB7XG4gICAgICAgIGNvbnN0IHRhYmxlU2VhcmNoQXJlYSA9ICBidWlsZEVsZW1lbnQobmV3IEJ1aWxkT2JqKFwidGFibGVcIixcInVzZXItaW5wdXQtdGFibGVcIikpO1xuICAgICAgICBjcmVhdGVTdHIuZm9yRWFjaCgocm93KSA9PntcbiAgICAgICAgICAgICBsZXQgdHIgPSBjcmVhdGVUYWJsZVRyKHJvdyk7XG4gICAgICAgICAgICAgdGFibGVTZWFyY2hBcmVhLmFwcGVuZENoaWxkKHRyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlYXJjaFNlYXJjaEFyZWEuYXBwZW5kQ2hpbGQodGFibGVTZWFyY2hBcmVhKTtcbiAgICB9XG4gICAgXG4gICAgcG9wdWxhdGVGcm9udFBhZ2VCdG4oKTtcbiAgICBwb3B1bGF0ZU5hdkJ0bigpOyBcbiAgICBwb3B1bGF0ZVNlYXJjaFBhZ2Uoc2VhcmNoQ3JpdGVyaWFDcmVhdGVBcnIpO1xufSk7XG5cbmZ1bmN0aW9uIGJ1aWxkT2JqSGVscGVyKGNyZWF0ZUhhc2gpIHtcbiAgICBsZXQgYnVpbGRPYmogPSBuZXcgQnVpbGRPYmooKTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGNyZWF0ZUhhc2gpIHtcbiAgICAgICAgYnVpbGRPYmpba2V5XSA9IGNyZWF0ZUhhc2hba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1aWxkT2JqO1xufVxuXG5mdW5jdGlvbiBidWlsZEVsZW1lbnQoYnVpbGRPYmope1xuICAgIGxldCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChidWlsZE9iai50YWcpO1xuICAgIGlmIChidWlsZE9iai50YWcgPT09IFwiaW5wdXRcIil7XG4gICAgICAgIGlmIChidWlsZE9iai5pbnB1dFR5cGUhPVwidGV4dFwiKVxuICAgICAgICAgICAgbmV3RWxlbWVudC50eXBlID0gYnVpbGRPYmouaW5wdXRUeXBlO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGJ1aWxkT2JqLmNsYXNzQXJyKSkge1xuICAgICAgICBidWlsZE9iai5jbGFzc0Fyci5mb3JFYWNoKChjKSA9PntcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGJ1aWxkT2JqLmNsYXNzQXJyKVxuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoYnVpbGRPYmouY2xhc3NBcnIpO1xuICAgIFxuICAgIGlmIChidWlsZE9iai5uYW1lKVxuICAgICAgICBuZXdFbGVtZW50LmlubmVySFRNTCA9IGJ1aWxkT2JqLm5hbWU7XG4gICAgZWxzZSBpZiAoYnVpbGRPYmoudmFsdWUpXG4gICAgICAgIG5ld0VsZW1lbnQudmFsdWUgID0gYnVpbGRPYmoudmFsdWU7XG4gICAgZWxzZSBpZiAoYnVpbGRPYmouaW5uZXJIVE1MKVxuICAgICAgICBuZXdFbGVtZW50LmlubmVySFRNTCA9IGJ1aWxkT2JqLmlubmVySFRNTDtcblxuICAgIGlmIChidWlsZE9iai50YWcgPT09ICdsYWJlbCcgJiYgYnVpbGRPYmoubGFibGVOYW1lKSBcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGJ1aWxkT2JqLmxhYmxlTmFtZSk7XG4gICAgICAgIFxuICAgIFxuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYWJsZVRyKHRyQ3JlYXRlT2JqQXJyKSB7XG4gICAgbGV0IG1hc3RlclRyID0gIGJ1aWxkRWxlbWVudChuZXcgQnVpbGRPYmooXCJ0clwiKSk7XG4gICAgdHJDcmVhdGVPYmpBcnIuZm9yRWFjaCgodGRDcmVhdGVPYmopPT57XG4gICAgICAgIGxldCBpbm5lclRkID0gIGNyZWF0ZVRhYmxlVGQodGRDcmVhdGVPYmopO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGlubmVyVGQpKSB7XG4gICAgICAgICAgICBpbm5lclRkLmZvckVhY2goKHRkKT0+e1xuICAgICAgICAgICAgICAgIG1hc3RlclRyLmFwcGVuZENoaWxkKHRkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIG1hc3RlclRyLmFwcGVuZENoaWxkKGlubmVyVGQpO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXN0ZXJUcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFibGVUZCh0ZENyZWF0ZU9iakFycikge1xuICAgIGxldCByZXR1cm5BcnIgPSBbXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0ZENyZWF0ZU9iakFycikpIHtcbiAgICAgICAgdGRDcmVhdGVPYmpBcnIuZm9yRWFjaCgodGRDcmVhdGVPYmopPT57XG4gICAgICAgICAgICByZXR1cm5BcnIgPSByZXR1cm5BcnIuY29uY2F0KGNyZWF0ZVRhYmxlVGRIZWxwZXIodGRDcmVhdGVPYmopKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuQXJyID0gcmV0dXJuQXJyLmNvbmNhdChjcmVhdGVUYWJsZVRkSGVscGVyKHRkQ3JlYXRlT2JqQXJyKSk7XG4gICAgcmV0dXJuIHJldHVybkFycjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFibGVUZEhlbHBlcih0ZENyZWF0ZU9iaikge1xuICAgIGxldCByZXR1cm5BcnIgPSBbXTtcbiAgICBpZiAodGRDcmVhdGVPYmoubGFibGVOYW1lKXtcbiAgICAgICAgbGV0IGxhYmVsbWFzdGVyVGQgPSAgYnVpbGRFbGVtZW50KG5ldyBCdWlsZE9iaihcInRkXCIpKTtcbiAgICAgICAgbGV0IGxhYmVsT2JqID0gbmV3IEJ1aWxkT2JqKFwibGFiZWxcIixudWxsLG51bGwsbnVsbCx0ZENyZWF0ZU9iai5sYWJsZU5hbWUsdGRDcmVhdGVPYmouaWQpO1xuICAgICAgICBsZXQgbGFiZWxUZCA9ICBidWlsZEVsZW1lbnQobGFiZWxPYmopO1xuICAgICAgICBsYWJlbG1hc3RlclRkLmFwcGVuZENoaWxkKGxhYmVsVGQpO1xuICAgICAgICByZXR1cm5BcnIucHVzaChsYWJlbG1hc3RlclRkKTtcbiAgICB9XG4gICAgbGV0IGlubnRlclRkID0gIGJ1aWxkRWxlbWVudCh0ZENyZWF0ZU9iaik7XG4gICAgaWYgKHJldHVybkFyci5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybkFyci5wdXNoKGlubnRlclRkKTtcbiAgICAgICAgcmV0dXJuIHJldHVybkFycjtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gaW5udGVyVGQ7XG59Il0sIm5hbWVzIjpbIkJ1aWxkT2JqIiwiT3B0aW9uT2JqIiwiZ2V0RGF0YSIsInJlcXVlc3QiLCJmZXRjaCIsInJlc3BvbmUiLCJqc29uIiwiYXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwibmV3T2JqIiwicmVkdWNlIiwib2JqIiwiaXRlbSIsImFzc2lnbiIsIm5hbWUiLCJvcGVyYXRvckhhc2giLCJncmVhdGVyRXF1YWwiLCJncmVhdGVyIiwic2FtbGxlciIsInNlYXJjaEJ0blN0ckJ1aWxkT2JqIiwiY29tcGFyZUJ0blN0ckJ1aWxkT2JqIiwic3RhdGlzdGljc0J0blN0ckJ1aWxkT2JqIiwiaG9tZUJ0blN0ckJ1aWxkT2JqIiwibmFtZUlucHV0T2JqIiwicmVsZWFzZUZyb21JbnB1dE9iaiIsInJlbGVhc2VUb0lucHV0T2JqIiwicmF0aW5nSW5wdXRPYmoiLCJidWlsZE9iakhlbHBlciIsInRhZyIsImlkIiwibnVtYmVySW5wdXRPYmoiLCJpbnB1dFR5cGUiLCJhdHRyaWJ1dGUiLCJsYWJsZU5hbWUiLCJzZWFyY2hDcml0ZXJpYUNyZWF0ZUFyciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hdkJ0biIsImdldEVsZW1lbnRCeUlkIiwiZnJvbnRQYWdlQnRuIiwicXVlcnlTZWxlY3RvciIsInNlYXJjaFNlYXJjaEFyZWEiLCJwb3B1bGF0ZUZyb250UGFnZUJ0bkFyZWEiLCJidWlsZE9iaiIsImRpdkJ0bkFyZWEiLCJidWlsZEVsZW1lbnQiLCJzcGFuQnRuQXJlYSIsImlCdG5BcmVhIiwiY29uY2F0IiwiY2xhc3NBcnIiLCJwQnRuQXJlYSIsImlubmVySFRNTCIsImg2QnRuQXJlYSIsInNjcm9sbEludG9WaWV3IiwiYXBwZW5kQ2hpbGQiLCJwb3B1bGF0ZUZyb250UGFnZUJ0biIsInBvcHVsYXRlTmF2U3ViQnRuIiwiYnV0dG9uTmF2U3ViIiwic3Bhbk5hdlN1YiIsImlOYXZTdWIiLCJwb3B1bGF0ZU5hdkJ0biIsInBvcHVsYXRlU2VhcmNoUGFnZSIsImNyZWF0ZVN0ciIsInRhYmxlU2VhcmNoQXJlYSIsImZvckVhY2giLCJyb3ciLCJ0ciIsImNyZWF0ZVRhYmxlVHIiLCJjcmVhdGVIYXNoIiwia2V5IiwibmV3RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiQXJyYXkiLCJpc0FycmF5IiwiYyIsImNsYXNzTGlzdCIsImFkZCIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwidHJDcmVhdGVPYmpBcnIiLCJtYXN0ZXJUciIsInRkQ3JlYXRlT2JqIiwiaW5uZXJUZCIsImNyZWF0ZVRhYmxlVGQiLCJ0ZCIsInRkQ3JlYXRlT2JqQXJyIiwicmV0dXJuQXJyIiwiY3JlYXRlVGFibGVUZEhlbHBlciIsImxhYmVsbWFzdGVyVGQiLCJsYWJlbE9iaiIsImxhYmVsVGQiLCJwdXNoIiwiaW5udGVyVGQiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/BuildObj.js":
/*!*********************************!*\
  !*** ./src/scripts/BuildObj.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass BuildObj {\n  constructor(tag, classArr, name, id, innerHTML, inputType, lableName, value, attribute, obj) {\n    this.tag = tag;\n    this.classArr = classArr;\n    this.name = name;\n    this.id = id;\n    this.innerHTML = innerHTML;\n    this.lableName = lableName;\n    this.inputType = inputType;\n    this.value = value;\n    this.obj = obj;\n    this.attribute = attribute;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (BuildObj);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9CdWlsZE9iai5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsUUFBUTtFQUNWQyxXQUFXQSxDQUFDQyxHQUFHLEVBQUNDLFFBQVEsRUFBRUMsSUFBSSxFQUFDQyxFQUFFLEVBQUNDLFNBQVMsRUFDdENDLFNBQVMsRUFBQ0MsU0FBUyxFQUFDQyxLQUFLLEVBQUNDLFNBQVMsRUFBQ0MsR0FBRyxFQUFFO0lBQzFDLElBQUksQ0FBQ1QsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUztJQUMxQixJQUFJLENBQUNFLFNBQVMsR0FBR0EsU0FBUztJQUMxQixJQUFJLENBQUNELFNBQVMsR0FBR0EsU0FBUztJQUMxQixJQUFJLENBQUNFLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNFLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0QsU0FBUyxHQUFHQSxTQUFTO0VBQzlCO0FBQ0o7QUFFQSwrREFBZVYsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0ZWFtX2dhbWVzX3N0YXRpc3RpY3MvLi9zcmMvc2NyaXB0cy9CdWlsZE9iai5qcz85N2MzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJ1aWxkT2Jqe1xuICAgIGNvbnN0cnVjdG9yKHRhZyxjbGFzc0FyciwgbmFtZSxpZCxpbm5lckhUTUxcbiAgICAgICAgLGlucHV0VHlwZSxsYWJsZU5hbWUsdmFsdWUsYXR0cmlidXRlLG9iaikge1xuICAgICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgICAgdGhpcy5jbGFzc0FyciA9IGNsYXNzQXJyO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgICAgICB0aGlzLmxhYmxlTmFtZSA9IGxhYmxlTmFtZTtcbiAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSBpbnB1dFR5cGU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vYmogPSBvYmo7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlID0gYXR0cmlidXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVpbGRPYmo7Il0sIm5hbWVzIjpbIkJ1aWxkT2JqIiwiY29uc3RydWN0b3IiLCJ0YWciLCJjbGFzc0FyciIsIm5hbWUiLCJpZCIsImlubmVySFRNTCIsImlucHV0VHlwZSIsImxhYmxlTmFtZSIsInZhbHVlIiwiYXR0cmlidXRlIiwib2JqIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/BuildObj.js\n");

/***/ }),

/***/ "./src/scripts/OptionObj.js":
/*!**********************************!*\
  !*** ./src/scripts/OptionObj.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass OptionObj {\n  constructor(displayText, value) {\n    this.displayText = displayText;\n    this.value = value;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (OptionObj);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9PcHRpb25PYmouanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFNBQVM7RUFDWEMsV0FBV0EsQ0FBQ0MsV0FBVyxFQUFDQyxLQUFLLEVBQUU7SUFDM0IsSUFBSSxDQUFDRCxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7RUFDdEI7QUFDSjtBQUVBLCtEQUFlSCxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RlYW1fZ2FtZXNfc3RhdGlzdGljcy8uL3NyYy9zY3JpcHRzL09wdGlvbk9iai5qcz9mOTE1Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE9wdGlvbk9iantcbiAgICBjb25zdHJ1Y3RvcihkaXNwbGF5VGV4dCx2YWx1ZSkge1xuICAgICAgICB0aGlzLmRpc3BsYXlUZXh0ID0gZGlzcGxheVRleHQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9wdGlvbk9iajsiXSwibmFtZXMiOlsiT3B0aW9uT2JqIiwiY29uc3RydWN0b3IiLCJkaXNwbGF5VGV4dCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/OptionObj.js\n");

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