"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/github";
exports.ids = ["pages/api/github"];
exports.modules = {

/***/ "@octokit/rest":
/*!********************************!*\
  !*** external "@octokit/rest" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@octokit/rest");

/***/ }),

/***/ "(api)/./pages/api/github.js":
/*!*****************************!*\
  !*** ./pages/api/github.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { Octokit  } = __webpack_require__(/*! @octokit/rest */ \"@octokit/rest\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const octokit = new Octokit({\n        auth: \"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\" //GITHUB_AUTH_TOKEN .env\n    });\n    const users = await octokit.request(\"GET /users?per_page=8\", {});\n    console.log(res);\n    return res.status(200).json({\n        users\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2l0aHViLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLEVBQUNBLE9BQU8sR0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9DQUFlLENBQUM7QUFFMUMsaUVBQWUsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFFL0IsTUFBTUMsT0FBTyxHQUFHLElBQUlKLE9BQU8sQ0FBQztRQUNwQkssSUFBSSxFQUFFLDBDQUEwQyxDQUFDLHdCQUF3QjtLQUM1RSxDQUFDO0lBRU4sTUFBTUMsS0FBSyxHQUFHLE1BQU1GLE9BQU8sQ0FBQ0csT0FBTyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQztJQUVoRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLEdBQUcsQ0FBQztJQUNoQixPQUFPQSxHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUNMLEtBQUs7S0FBQyxDQUFDO0NBQ3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0LWluc2lnaHRzLy4vcGFnZXMvYXBpL2dpdGh1Yi5qcz8yNzVlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtPY3Rva2l0fSA9IHJlcXVpcmUoXCJAb2N0b2tpdC9yZXN0XCIpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qgb2N0b2tpdCA9IG5ldyBPY3Rva2l0KHtcclxuICAgICAgICAgICAgYXV0aDogJ2docF80dTV0bWUzeHV2VGU4YkZpMEowcllTRXlIYmR5WTYzeWh6RDgnIC8vR0lUSFVCX0FVVEhfVE9LRU4gLmVudlxyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KCdHRVQgL3VzZXJzP3Blcl9wYWdlPTgnLCB7fSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe3VzZXJzfSkgXHJcbn0iXSwibmFtZXMiOlsiT2N0b2tpdCIsInJlcXVpcmUiLCJyZXEiLCJyZXMiLCJvY3Rva2l0IiwiYXV0aCIsInVzZXJzIiwicmVxdWVzdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/github.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/github.js"));
module.exports = __webpack_exports__;

})();