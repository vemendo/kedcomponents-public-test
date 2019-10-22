(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["KSTermPlannerTutored"],{

/***/ "./src/components/ks-termplanner/ks-termplanner-tutored.tsx":
/*!******************************************************************!*\
  !*** ./src/components/ks-termplanner/ks-termplanner-tutored.tsx ***!
  \******************************************************************/
/*! exports provided: KSTermPlannerTutored */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSTermPlannerTutored", function() { return KSTermPlannerTutored; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _termplanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termplanner */ "./src/components/ks-termplanner/termplanner.tsx");
/* harmony import */ var _utility_components_tutorable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility-components/tutorable-component */ "./src/components/utility-components/tutorable-component.tsx");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");




function KSTermPlannerTutored(props) {
    var intl = props.intl;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"].Provider, { value: { intl: intl } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utility_components_tutorable_component__WEBPACK_IMPORTED_MODULE_2__["TutorableComponent"], { tutored: true, createComponent: function (env) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_termplanner__WEBPACK_IMPORTED_MODULE_1__["KSTermPlanner"], { key: env.currentUser.mail, env: env, tutored: true, initialDate: new Date() });
            } }));
}


/***/ })

}]);
//# sourceMappingURL=KSTermPlannerTutored.js.map