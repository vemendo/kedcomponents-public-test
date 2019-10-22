(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["Calendar"],{

/***/ "./src/components/calendar/calendar-self.tsx":
/*!***************************************************!*\
  !*** ./src/components/calendar/calendar-self.tsx ***!
  \***************************************************/
/*! exports provided: CalendarSelf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarSelf", function() { return CalendarSelf; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./src/components/calendar/index.tsx");





function CalendarSelf(props) {
    var intl = props.intl;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"].Provider, { value: { intl: intl } },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_index__WEBPACK_IMPORTED_MODULE_4__["Calendar"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { env: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"] }))));
}


/***/ })

}]);
//# sourceMappingURL=Calendar.js.map