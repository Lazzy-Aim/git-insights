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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { Octokit  } = __webpack_require__(/*! @octokit/rest */ \"@octokit/rest\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const octokit = new Octokit({\n        auth: \"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\" //GITHUB_AUTH_TOKEN .env\n    });\n    const users = await octokit.request(\"GET /users?10\", {});\n    console.log(res);\n    return res.status(200).json({\n        users\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2l0aHViLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLEVBQUNBLE9BQU8sR0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9DQUFlLENBQUM7QUFFMUMsaUVBQWUsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFFL0IsTUFBTUMsT0FBTyxHQUFHLElBQUlKLE9BQU8sQ0FBQztRQUNwQkssSUFBSSxFQUFFLDBDQUEwQyxDQUFDLHdCQUF3QjtLQUM1RSxDQUFDO0lBRU4sTUFBTUMsS0FBSyxHQUFHLE1BQU1GLE9BQU8sQ0FBQ0csT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7SUFFeERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixHQUFHLENBQUM7SUFDaEIsT0FBT0EsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFDTCxLQUFLO0tBQUMsQ0FBQztDQUN2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdC1pbnNpZ2h0cy8uL3BhZ2VzL2FwaS9naXRodWIuanM/Mjc1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7T2N0b2tpdH0gPSByZXF1aXJlKFwiQG9jdG9raXQvcmVzdFwiKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IG9jdG9raXQgPSBuZXcgT2N0b2tpdCh7XHJcbiAgICAgICAgICAgIGF1dGg6ICdnaHBfYW45QXpPUnZ0dU9BeFI0Q1FySXp2R3hDUGExOUpYMXJGOXpHJyAvL0dJVEhVQl9BVVRIX1RPS0VOIC5lbnZcclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IG9jdG9raXQucmVxdWVzdCgnR0VUIC91c2Vycz8xMCcsIHt9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7dXNlcnN9KVxyXG59Il0sIm5hbWVzIjpbIk9jdG9raXQiLCJyZXF1aXJlIiwicmVxIiwicmVzIiwib2N0b2tpdCIsImF1dGgiLCJ1c2VycyIsInJlcXVlc3QiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/github.js\n");

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