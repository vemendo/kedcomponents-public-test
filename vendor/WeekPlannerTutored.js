(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["WeekPlannerTutored"],{

/***/ "./src/components/weekplanner/weekplanner-tutored.tsx":
/*!************************************************************!*\
  !*** ./src/components/weekplanner/weekplanner-tutored.tsx ***!
  \************************************************************/
/*! exports provided: WeekPlannerTutored */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekPlannerTutored", function() { return WeekPlannerTutored; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _weekplanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weekplanner */ "./src/components/weekplanner/weekplanner.tsx");
/* harmony import */ var _utility_components_tutorable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility-components/tutorable-component */ "./src/components/utility-components/tutorable-component.tsx");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");





function WeekPlannerTutored(props) {
    var intl = props.intl;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"].Provider, { value: { intl: intl } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utility_components_tutorable_component__WEBPACK_IMPORTED_MODULE_2__["TutorableComponent"], { tutored: true, createComponent: function (env) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_weekplanner__WEBPACK_IMPORTED_MODULE_1__["WeekPlanner"], { key: env.currentUser.mail, env: env, viewCourseUrl: _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_COURSE_VIEWER_URL });
            } }));
}


/***/ })

}]);
//# sourceMappingURL=WeekPlannerTutored.js.map