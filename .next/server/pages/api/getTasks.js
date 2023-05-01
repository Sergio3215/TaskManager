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
exports.id = "pages/api/getTasks";
exports.ids = ["pages/api/getTasks"];
exports.modules = {

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ "(api)/./db/firebase.js":
/*!************************!*\
  !*** ./db/firebase.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAFOuyRXtO8j8qCelZQhzvCiXB-OZz924Q\",\n    authDomain: \"tarea-de-prueba.firebaseapp.com\",\n    databaseURL: \"https://tarea-de-prueba-default-rtdb.firebaseio.com\",\n    projectId: \"tarea-de-prueba\",\n    storageBucket: \"tarea-de-prueba.appspot.com\",\n    messagingSenderId: \"699751530395\",\n    appId: \"1:699751530395:web:b167933755959bf6006b3e\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1RDtBQUNQO0FBQ2hELE1BQU1HLGlCQUFpQjtJQUNuQkMsUUFBUTtJQUNSQyxZQUFZO0lBQ1pDLGFBQWE7SUFDYkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztBQUNYO0FBRUEsc0JBQXNCO0FBQ2YsTUFBTUMsTUFBTVYsMkRBQWFBLENBQUNFLGdCQUFnQjtBQUV6QyxNQUFNUyxLQUFLVixnRUFBWUEsQ0FBQ1MsS0FBSztBQUVyQyxpRUFBZVgsb0RBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9kYi9maXJlYmFzZS5qcz80OGI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSwgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQge2dldEZpcmVzdG9yZX0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5QUZPdXlSWHRPOGo4cUNlbFpRaHp2Q2lYQi1PWno5MjRRXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcInRhcmVhLWRlLXBydWViYS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vdGFyZWEtZGUtcHJ1ZWJhLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcInRhcmVhLWRlLXBydWViYVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJ0YXJlYS1kZS1wcnVlYmEuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjY5OTc1MTUzMDM5NVwiLFxyXG4gICAgYXBwSWQ6IFwiMTo2OTk3NTE1MzAzOTU6d2ViOmIxNjc5MzM3NTU5NTliZjYwMDZiM2VcIlxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5leHBvcnQgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG5leHBvcnQgIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZSJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImluaXRpYWxpemVBcHAiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/firebase.js\n");

/***/ }),

/***/ "(api)/./pages/api/getTasks.js":
/*!*******************************!*\
  !*** ./pages/api/getTasks.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/firebase */ \"(api)/./db/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_db_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_db_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nasync function handler(req, res) {\n    const taskCol = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_db_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"Task\");\n    const taskSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(taskCol);\n    const taskList = taskSnapshot.docs.map((doc)=>doc.data());\n    res.status(200).json(taskList);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VGFza3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNDO0FBQ21CO0FBRTFDLGVBQWVHLFFBQVFDLEdBQUcsRUFBQ0MsR0FBRyxFQUFDO0lBQzFDLE1BQU1DLFVBQVVKLDhEQUFVQSxDQUFDRiw0Q0FBRUEsRUFBRTtJQUNqQyxNQUFNTyxlQUFlLE1BQU1OLDJEQUFPQSxDQUFDSztJQUNuQyxNQUFNRSxXQUFXRCxhQUFhRSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSTtJQUN0RFAsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ047QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2stbWFuYWdlci8uL3BhZ2VzL2FwaS9nZXRUYXNrcy5qcz8yYThkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vZGIvZmlyZWJhc2UnXHJcbmltcG9ydCB7IGdldERvY3MsIGNvbGxlY3Rpb24gfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcclxuICAgIGNvbnN0IHRhc2tDb2wgPSBjb2xsZWN0aW9uKGRiLCAnVGFzaycpO1xyXG4gIGNvbnN0IHRhc2tTbmFwc2hvdCA9IGF3YWl0IGdldERvY3ModGFza0NvbCk7XHJcbiAgY29uc3QgdGFza0xpc3QgPSB0YXNrU25hcHNob3QuZG9jcy5tYXAoZG9jID0+IGRvYy5kYXRhKCkpO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRhc2tMaXN0KVxyXG59Il0sIm5hbWVzIjpbImRiIiwiZ2V0RG9jcyIsImNvbGxlY3Rpb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidGFza0NvbCIsInRhc2tTbmFwc2hvdCIsInRhc2tMaXN0IiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getTasks.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getTasks.js"));
module.exports = __webpack_exports__;

})();