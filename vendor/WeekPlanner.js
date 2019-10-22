(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["WeekPlanner"],{

/***/ "./src/components/weekplanner/weekplanner-self.tsx":
/*!*********************************************************!*\
  !*** ./src/components/weekplanner/weekplanner-self.tsx ***!
  \*********************************************************/
/*! exports provided: WeekPlannerSelf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekPlannerSelf", function() { return WeekPlannerSelf; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _weekplanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weekplanner */ "./src/components/weekplanner/weekplanner.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../repos/user-tasks-repo */ "./src/repos/user-tasks-repo.ts");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");






function WeekPlannerSelf(props) {
    var intl = props.intl;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_5__["LanguageContext"].Provider, { value: { intl: intl } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_weekplanner__WEBPACK_IMPORTED_MODULE_1__["WeekPlanner"], { env: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"], viewCourseUrl: _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_3__["default"].KED_COURSE_VIEWER_URL }));
}


/***/ })

}]);
//# sourceMappingURL=WeekPlanner.js.map