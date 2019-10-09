(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["KSTermPlanner"],{

/***/ "./src/components/ks-termplanner/ks-termplanner-self.tsx":
/*!***************************************************************!*\
  !*** ./src/components/ks-termplanner/ks-termplanner-self.tsx ***!
  \***************************************************************/
/*! exports provided: KSTermPlannerSelf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSTermPlannerSelf", function() { return KSTermPlannerSelf; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _termplanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termplanner */ "./src/components/ks-termplanner/termplanner.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");




function KSTermPlannerSelf(props) {
    var intl = props.intl;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"].Provider, { value: { intl: intl } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_termplanner__WEBPACK_IMPORTED_MODULE_1__["KSTermPlanner"], { env: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"], tutored: false, initialDate: new Date() }));
}


/***/ })

}]);
//# sourceMappingURL=KSTermPlanner.js.map