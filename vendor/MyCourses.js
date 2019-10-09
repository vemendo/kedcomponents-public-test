(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["MyCourses"],{

/***/ "./src/components/my-courses/my-courses.tsx":
/*!**************************************************!*\
  !*** ./src/components/my-courses/my-courses.tsx ***!
  \**************************************************/
/*! exports provided: MyCourses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCourses", function() { return MyCourses; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _repos_hidden_courses_repo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repos/hidden-courses-repo */ "./src/repos/hidden-courses-repo.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../access-control */ "./src/access-control/index.ts");




var MyCourses = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MyCourses, _super);
    function MyCourses(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            courses: [],
            isLoading: true
        };
        _this.updateHiddenCoursesState = _this.updateHiddenCoursesState.bind(_this);
        return _this;
    }
    MyCourses.prototype.componentDidMount = function () {
        _repos_hidden_courses_repo__WEBPACK_IMPORTED_MODULE_2__["hiddenCoursesRepo"].subscribe(this.updateHiddenCoursesState, { fullCourse: false });
    };
    MyCourses.prototype.updateHiddenCoursesState = function (courses) {
        this.setState({ courses: courses, isLoading: false });
    };
    MyCourses.prototype.componentWillUnmount = function () {
        _repos_hidden_courses_repo__WEBPACK_IMPORTED_MODULE_2__["hiddenCoursesRepo"].unsubscribe(this.updateHiddenCoursesState);
    };
    MyCourses.prototype.getCourseUrl = function (courseId) {
        return Object(_access_control__WEBPACK_IMPORTED_MODULE_3__["preserveImpersonationQuery"])(this.props.viewCourseUrl, { courseId: courseId });
    };
    MyCourses.prototype.render = function () {
        var _this = this;
        var viewCourseUrl = this.props.viewCourseUrl;
        var _a = this.state, isLoading = _a.isLoading, error = _a.error, courses = _a.courses;
        var visibleCourses = this.state.courses.filter(function (c) { return c.visible; });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, isLoading ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: "lvl2 header" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", null, "Laddar..."))) : error ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: "lv12" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", null, "Kunde inte ladda kurser."))) : (visibleCourses.map(function (_a) {
            var name = _a.name, id = _a.id;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: id, className: "lvl2" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: _this.getCourseUrl(id) }, name)));
        }))));
    };
    return MyCourses;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ })

}]);
//# sourceMappingURL=MyCourses.js.map