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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { Octokit  } = __webpack_require__(/*! @octokit/rest */ \"@octokit/rest\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const octokit = new Octokit({\n        auth: \"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\" //GITHUB_AUTH_TOKEN .env\n    });\n    const users = await octokit.request(\"GET /users?per_page=8\", {});\n    const followers = await octokit.request(\"/users/user/followers?per_page=100\");\n    const followerCount = followers.data.length;\n    console.log(res);\n    return res.status(200).json({\n        followerCount,\n        users\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2l0aHViLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLEVBQUNBLE9BQU8sR0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9DQUFlLENBQUM7QUFFMUMsaUVBQWUsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFFL0IsTUFBTUMsT0FBTyxHQUFHLElBQUlKLE9BQU8sQ0FBQztRQUNwQkssSUFBSSxFQUFFLDBDQUEwQyxDQUFDLHdCQUF3QjtLQUM1RSxDQUFDO0lBRU4sTUFBTUMsS0FBSyxHQUFHLE1BQU1GLE9BQU8sQ0FBQ0csT0FBTyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQztJQUVoRSxNQUFNQyxTQUFTLEdBQUcsTUFBTUosT0FBTyxDQUFDRyxPQUFPLENBQUMsb0NBQW9DLENBQUM7SUFDN0UsTUFBTUUsYUFBYSxHQUFHRCxTQUFTLENBQUNFLElBQUksQ0FBQ0MsTUFBTTtJQUUzQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNWLEdBQUcsQ0FBQztJQUNoQixPQUFPQSxHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUNOLGFBQWE7UUFBRUgsS0FBSztLQUFDLENBQUM7Q0FDdEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXQtaW5zaWdodHMvLi9wYWdlcy9hcGkvZ2l0aHViLmpzPzI3NWUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge09jdG9raXR9ID0gcmVxdWlyZShcIkBvY3Rva2l0L3Jlc3RcIilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBvY3Rva2l0ID0gbmV3IE9jdG9raXQoe1xyXG4gICAgICAgICAgICBhdXRoOiAnZ2hwX1VrZEtIbzE0Z21UT2t5RjZkQ3BkZERNbGRmZmZ3aTJFMWlXeicgLy9HSVRIVUJfQVVUSF9UT0tFTiAuZW52XHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoJ0dFVCAvdXNlcnM/cGVyX3BhZ2U9OCcsIHt9KVxyXG4gICAgXHJcbiAgICBjb25zdCBmb2xsb3dlcnMgPSBhd2FpdCBvY3Rva2l0LnJlcXVlc3QoJy91c2Vycy91c2VyL2ZvbGxvd2Vycz9wZXJfcGFnZT0xMDAnKVxyXG4gICAgY29uc3QgZm9sbG93ZXJDb3VudCA9IGZvbGxvd2Vycy5kYXRhLmxlbmd0aFxyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7Zm9sbG93ZXJDb3VudCwgdXNlcnN9KVxyXG59Il0sIm5hbWVzIjpbIk9jdG9raXQiLCJyZXF1aXJlIiwicmVxIiwicmVzIiwib2N0b2tpdCIsImF1dGgiLCJ1c2VycyIsInJlcXVlc3QiLCJmb2xsb3dlcnMiLCJmb2xsb3dlckNvdW50IiwiZGF0YSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/github.js\n");

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