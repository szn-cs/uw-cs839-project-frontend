"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/main.js":
/*!***************************!*\
  !*** ./src/pages/main.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Table */ \"./node_modules/@mui/material/Table/index.js\");\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TableBody */ \"./node_modules/@mui/material/TableBody/index.js\");\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TableCell */ \"./node_modules/@mui/material/TableCell/index.js\");\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TableContainer */ \"./node_modules/@mui/material/TableContainer/index.js\");\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TableHead */ \"./node_modules/@mui/material/TableHead/index.js\");\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/TableRow */ \"./node_modules/@mui/material/TableRow/index.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/dist/web3.min.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dao_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dao.js */ \"./src/pages/dao.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp() {\n    const ROWLIMIT = 10;\n    const compareByValue = (a, b)=>{\n        if (a.value > b.value) {\n            return -1;\n        } else if (a.value < b.value) {\n            return 1;\n        } else {\n            return 0;\n        }\n    };\n    console.log((0,_dao_js__WEBPACK_IMPORTED_MODULE_3__.Dao)());\n    console.log((0,_dao_js__WEBPACK_IMPORTED_MODULE_3__.Dao2)());\n    //    console.log(getSampleUsers())\n    let leaders = [\n        {\n            \"name\": \"Matthew\",\n            \"message\": \"I'm the best\",\n            \"value\": 25\n        },\n        {\n            \"name\": \"Joe\",\n            \"message\": \"I'm the best\",\n            \"value\": 55\n        },\n        {\n            \"name\": \"Bob\",\n            \"message\": \"I'm the best\",\n            \"value\": 1\n        }\n    ];\n    leaders.sort(compareByValue);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    sx: {\n                        minWidth: 650\n                    },\n                    \"aria-label\": \"simple table\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mmbay\\\\School\\\\cs864\\\\FInalProject\\\\uw-cs839-project\\\\leaderboard_react\\\\src\\\\pages\\\\main.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        children: \"Message\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mmbay\\\\School\\\\cs864\\\\FInalProject\\\\uw-cs839-project\\\\leaderboard_react\\\\src\\\\pages\\\\main.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        align: \"right\",\n                                        children: \"Total Tokens Bought\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mmbay\\\\School\\\\cs864\\\\FInalProject\\\\uw-cs839-project\\\\leaderboard_react\\\\src\\\\pages\\\\main.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mmbay\\\\School\\\\cs864\\\\FInalProject\\\\uw-cs839-project\\\\leaderboard_react\\\\src\\\\pages\\\\main.js\",\n                                lineNumber: 40,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mmbay\\\\School\\\\cs864\\\\FInalProject\\\\uw-cs839-project\\\\leaderboard_react\\\\src\\\\pages\\\\main.js\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            children: leaders.map((row)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    sx: {\n                                        \"&:last-child td, &:last-child th\": {\n                                            border: 0\n                                        }\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            component: \"th\",\n                                            scope: \"row\",\n                                            children: row.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mmbay\\\\School\\\\cs864\\\\FInalProject\\\\uw-cs839-project\\\\leaderboard_react\\\\src\\\\pages\\\\main.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            component: \"th\",\n                                            scope: \"row\",\n                                            children: row.message\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mmbay\\\\School\\\\cs864\\\\FInalProject\\\\uw-cs839-project\\\\leaderboard_react\\\\src\\\\pages\\\\main.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            align: \"right\",\n                                            children: row.value\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mmbay\\\\School\\\\cs864\\\\FInalProject\\\\uw-cs839-project\\\\leaderboard_react\\\\src\\\\pages\\\\main.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 23\n                                        }, this)\n                                    ]\n                                }, row.name, true, {\n                                    fileName: \"C:\\\\Users\\\\mmbay\\\\School\\\\cs864\\\\FInalProject\\\\uw-cs839-project\\\\leaderboard_react\\\\src\\\\pages\\\\main.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 21\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mmbay\\\\School\\\\cs864\\\\FInalProject\\\\uw-cs839-project\\\\leaderboard_react\\\\src\\\\pages\\\\main.js\",\n                            lineNumber: 47,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\mmbay\\\\School\\\\cs864\\\\FInalProject\\\\uw-cs839-project\\\\leaderboard_react\\\\src\\\\pages\\\\main.js\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mmbay\\\\School\\\\cs864\\\\FInalProject\\\\uw-cs839-project\\\\leaderboard_react\\\\src\\\\pages\\\\main.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                variant: \"contained\",\n                children: \"Refresh\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mmbay\\\\School\\\\cs864\\\\FInalProject\\\\uw-cs839-project\\\\leaderboard_react\\\\src\\\\pages\\\\main.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mmbay\\\\School\\\\cs864\\\\FInalProject\\\\uw-cs839-project\\\\leaderboard_react\\\\src\\\\pages\\\\main.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNXO0FBQ0Y7QUFDUTtBQUNBO0FBQ1U7QUFDVjtBQUNGO0FBQ047QUFDaEI7QUFDVztBQUVwQixTQUFTWSxRQUFRO0lBQzVCLE1BQU1DLFdBQVc7SUFHakIsTUFBTUMsaUJBQWlCLENBQUNDLEdBQUdDLElBQU07UUFDL0IsSUFBSUQsRUFBRUUsS0FBSyxHQUFHRCxFQUFFQyxLQUFLLEVBQUU7WUFDckIsT0FBTyxDQUFDO1FBQ1YsT0FBTyxJQUFJRixFQUFFRSxLQUFLLEdBQUdELEVBQUVDLEtBQUssRUFBRTtZQUM1QixPQUFPO1FBQ1QsT0FBTztZQUNMLE9BQU87UUFDVCxDQUFDO0lBQ0g7SUFDQUMsUUFBUUMsR0FBRyxDQUFDVCw0Q0FBR0E7SUFDZlEsUUFBUUMsR0FBRyxDQUFDUiw2Q0FBSUE7SUFDcEIsbUNBQW1DO0lBQzlCLElBQUlTLFVBQVU7UUFBQztZQUFDLFFBQU87WUFBVSxXQUFVO1lBQWdCLFNBQVE7UUFBRTtRQUNsRTtZQUFDLFFBQU87WUFBTSxXQUFVO1lBQWUsU0FBUTtRQUFFO1FBQ2pEO1lBQUMsUUFBTztZQUFNLFdBQVU7WUFBZSxTQUFRO1FBQUM7S0FBRTtJQUN0REEsUUFBUUMsSUFBSSxDQUFDUDtJQUNiLHFCQUNJLDhEQUFDUTs7MEJBR0QsOERBQUNqQixvRUFBY0E7Z0JBQUNrQixXQUFXZiwyREFBS0E7MEJBQzVCLDRFQUFDTiwyREFBS0E7b0JBQUNzQixJQUFJO3dCQUFFQyxVQUFVO29CQUFJO29CQUFHQyxjQUFXOztzQ0FDckMsOERBQUNwQiwrREFBU0E7c0NBQ1IsNEVBQUNDLDhEQUFRQTs7a0RBQ1AsOERBQUNILCtEQUFTQTtrREFBQzs7Ozs7O2tEQUNYLDhEQUFDQSwrREFBU0E7a0RBQUU7Ozs7OztrREFDWiw4REFBQ0EsK0RBQVNBO3dDQUFDdUIsT0FBTTtrREFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSTdCLDhEQUFDeEIsZ0VBQVNBO3NDQUNQaUIsUUFBUVEsR0FBRyxDQUFDLENBQUNDLG9CQUNaLDhEQUFDdEIsOERBQVFBO29DQUVQaUIsSUFBSTt3Q0FBRSxvQ0FBb0M7NENBQUVNLFFBQVE7d0NBQUU7b0NBQUU7O3NEQUV4RCw4REFBQzFCLCtEQUFTQTs0Q0FBQ21CLFdBQVU7NENBQUtRLE9BQU07c0RBQzdCRixJQUFJRyxJQUFJOzs7Ozs7c0RBRVgsOERBQUM1QiwrREFBU0E7NENBQUNtQixXQUFVOzRDQUFLUSxPQUFNO3NEQUM3QkYsSUFBSUksT0FBTzs7Ozs7O3NEQUVkLDhEQUFDN0IsK0RBQVNBOzRDQUFDdUIsT0FBTTtzREFBU0UsSUFBSVosS0FBSzs7Ozs7OzttQ0FUOUJZLElBQUlHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFnQjNCLDhEQUFDL0IsNkRBQU1BO2dCQUFDaUMsU0FBUTswQkFBWTs7Ozs7Ozs7Ozs7O0FBR3BDLENBQUM7S0F4RHVCdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21haW4uanM/NjRhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUNvbnRhaW5lcic7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlUm93JztcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IHtEYW8sIERhbzJ9IGZyb20gXCIuL2Rhby5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCgpIHtcbiAgICBjb25zdCBST1dMSU1JVCA9IDEwXG5cblxuICAgIGNvbnN0IGNvbXBhcmVCeVZhbHVlID0gKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLnZhbHVlID4gYi52YWx1ZSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2UgaWYgKGEudmFsdWUgPCBiLnZhbHVlKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhEYW8oKSlcbiAgICBjb25zb2xlLmxvZyhEYW8yKCkpXG4vLyAgICBjb25zb2xlLmxvZyhnZXRTYW1wbGVVc2VycygpKVxuICAgICBsZXQgbGVhZGVycyA9IFt7XCJuYW1lXCI6XCJNYXR0aGV3XCIsXCJtZXNzYWdlXCI6XCJJJ20gdGhlIGJlc3RcIiwgXCJ2YWx1ZVwiOjI1fSxcbiAgICAgICAge1wibmFtZVwiOlwiSm9lXCIsXCJtZXNzYWdlXCI6XCJJJ20gdGhlIGJlc3RcIixcInZhbHVlXCI6NTV9LFxuICAgICAgICB7XCJuYW1lXCI6XCJCb2JcIixcIm1lc3NhZ2VcIjpcIkknbSB0aGUgYmVzdFwiLFwidmFsdWVcIjoxfV1cbiAgICBsZWFkZXJzLnNvcnQoY29tcGFyZUJ5VmFsdWUpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG5cblxuICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICAgICAgICA8VGFibGUgc3g9e3sgbWluV2lkdGg6IDY1MCB9fSBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5OYW1lPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgPk1lc3NhZ2U8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+VG90YWwgVG9rZW5zIEJvdWdodDwvVGFibGVDZWxsPlxuXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICB7bGVhZGVycy5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3dcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Jvdy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7ICcmOmxhc3QtY2hpbGQgdGQsICY6bGFzdC1jaGlsZCB0aCc6IHsgYm9yZGVyOiAwIH0gfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cudmFsdWV9PC9UYWJsZUNlbGw+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+UmVmcmVzaDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVDb250YWluZXIiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlBhcGVyIiwiV2ViMyIsIkRhbyIsIkRhbzIiLCJNeUFwcCIsIlJPV0xJTUlUIiwiY29tcGFyZUJ5VmFsdWUiLCJhIiwiYiIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImxlYWRlcnMiLCJzb3J0IiwiZGl2IiwiY29tcG9uZW50Iiwic3giLCJtaW5XaWR0aCIsImFyaWEtbGFiZWwiLCJhbGlnbiIsIm1hcCIsInJvdyIsImJvcmRlciIsInNjb3BlIiwibmFtZSIsIm1lc3NhZ2UiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/main.js\n"));

/***/ })

});