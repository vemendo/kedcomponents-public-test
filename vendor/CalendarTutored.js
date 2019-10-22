(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["CalendarTutored"],{

/***/ "./src/components/calendar/calendar-tutored.tsx":
/*!******************************************************!*\
  !*** ./src/components/calendar/calendar-tutored.tsx ***!
  \******************************************************/
/*! exports provided: CalendarTutored */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarTutored", function() { return CalendarTutored; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/components/calendar/index.tsx");
/* harmony import */ var _utility_components_tutorable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility-components/tutorable-component */ "./src/components/utility-components/tutorable-component.tsx");





function CalendarTutored(props) {
    var intl = props.intl;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_2__["LanguageContext"].Provider, { value: { intl: intl } },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_tutorable_component__WEBPACK_IMPORTED_MODULE_4__["TutorableComponent"], { tutored: true, createComponent: function (env) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_index__WEBPACK_IMPORTED_MODULE_3__["Calendar"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: env.currentUser.mail }, props, { env: env }));
            } }));
}


/***/ })

}]);
//# sourceMappingURL=CalendarTutored.js.map