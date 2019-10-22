(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["LatestAssessments"],{

/***/ "./src/components/latest-assessments/latest-assessments.tsx":
/*!******************************************************************!*\
  !*** ./src/components/latest-assessments/latest-assessments.tsx ***!
  \******************************************************************/
/*! exports provided: LatestAssessments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestAssessments", function() { return LatestAssessments; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");




var LatestAssessments = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LatestAssessments, _super);
    function LatestAssessments(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            assessments: [],
            error: null,
            loading: false
        };
        return _this;
    }
    LatestAssessments.prototype.componentWillMount = function () {
        this.load();
    };
    LatestAssessments.prototype.load = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var assessments, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ loading: true });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].edsClient.getLatestAssessments(this.props.limit)];
                    case 2:
                        assessments = _a.sent();
                        this.setState({ assessments: assessments });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.setState({ error: error_1 });
                        return [3 /*break*/, 4];
                    case 4:
                        this.setState({ loading: false });
                        return [2 /*return*/];
                }
            });
        });
    };
    LatestAssessments.prototype.render = function () {
        var hasGrades = this.state.assessments.some(function (a) { return !!a.gradeName; });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Senaste bed\u00F6mningar"], ["Senaste bed\u00F6mningar"])))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "latest-assesments zebra" }, this.state.assessments.map(function (a, i) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: i },
                    (hasGrades && a.gradeName != "") && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "grade pill pull-right" }, a.gradeName),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "date pill pull-left" }, a.publishDateTime.substr(0, 10)),
                    a.courseName == a.courseUnitName ?
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, a.courseName)) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, a.courseName),
                        " / ",
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("em", null, a.courseUnitName)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, a.text));
            })));
    };
    return LatestAssessments;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=LatestAssessments.js.map