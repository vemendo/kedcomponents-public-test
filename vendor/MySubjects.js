(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["MySubjects"],{

/***/ "./src/components/my-subjects/my-subjects-inner.tsx":
/*!**********************************************************!*\
  !*** ./src/components/my-subjects/my-subjects-inner.tsx ***!
  \**********************************************************/
/*! exports provided: MySubjectsInner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySubjectsInner", function() { return MySubjectsInner; });
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var kedbackend_observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/observable */ "./kedbackend/observable.js");
/* harmony import */ var _utility_components_with_observe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility-components/with-observe */ "./src/components/utility-components/with-observe.tsx");







var STATIC_COURSES = new kedbackend_observable__WEBPACK_IMPORTED_MODULE_5__["Emitter"]([{
        id: "https://ks.kunskapsporten.se/steg/matematik.4.47f6b323168938151ef8161c.html",
        name: "Matematik",
        type: "step-course",
        tags: ["static"],
    }]).toCollection(function (x) { return x; });
var MySubjectsInner = Object(_utility_components_with_observe__WEBPACK_IMPORTED_MODULE_6__["withObserve"])(function (_a) {
    var user = _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["env"].currentUser;
    var schoolGrade = user.schoolGrade;
    var isPrimarySchoolStudent = ("" + user.schoolType).toLowerCase() !== "gymnasium";
    var subjectPlannerURL = _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["cfg"].KED_SUBJECT_PLANNER_URL;
    var schoolName = user.school;
    if (!schoolGrade || !isPrimarySchoolStudent) {
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("li", { className: "lvl2 header" },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("a", null, "Listning endast f\u00F6r grundskolan")));
    }
    var _b = _globals_db__WEBPACK_IMPORTED_MODULE_1__["db"].courseInstances
        .hasEdgesFrom([_globals_db__WEBPACK_IMPORTED_MODULE_1__["globalId"]])
        //.tags("active") // Workaround: Multiple criterias disables the use of useSP
        .cacheOptimized()
        .filter(function (c) { return c.tags.includes("active"); })
        .map(function (_a) {
        var id = _a.id, name = _a.name, type = _a.type, tags = _a.tags;
        return ({
            id: id,
            name: name,
            type: type,
            tags: tags
        });
    })
        .concat(STATIC_COURSES)
        .orderBy("name")
        .groupBy("type")
        .map(function (arraysByType) { return ({
        themeCourses: arraysByType["theme-course"],
        stepCourses: arraysByType["step-course"]
    }); }).read(), themeCourses = _b.themeCourses, stepCourses = _b.stepCourses;
    return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("li", { className: "lvl2 header" },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("a", null, "Stegkurser")),
        stepCourses.map(function (course) { return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("li", { key: course.id, className: "lvl2" },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("a", { href: Object(_access_control__WEBPACK_IMPORTED_MODULE_2__["preserveImpersonationQuery"])(course.tags.includes("static") ?
                    course.id :
                    subjectPlannerURL + "#/" + schoolName + "/courses/" + course.id, {}) }, course.name))); }),
        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("li", { className: "lvl2 header" },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("a", null, "Temakurser")),
        themeCourses
            .filter(function (_a) {
            var tags = _a.tags;
            return tags.includes("grade:" + schoolGrade);
        })
            .map(function (course) { return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("li", { key: course.id, className: "lvl2" },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("a", { href: Object(_access_control__WEBPACK_IMPORTED_MODULE_2__["preserveImpersonationQuery"])(course.tags.includes("static") ?
                    course.id :
                    subjectPlannerURL + "#/" + schoolName + "/courses/" + course.id, {}) }, course.name))); })));
});


/***/ }),

/***/ "./src/components/my-subjects/my-subjects.tsx":
/*!****************************************************!*\
  !*** ./src/components/my-subjects/my-subjects.tsx ***!
  \****************************************************/
/*! exports provided: MySubjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySubjects", function() { return MySubjects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../course-builder/sub-components/ellipsis-loader */ "./src/components/course-builder/sub-components/ellipsis-loader.tsx");
/* harmony import */ var _my_subjects_inner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-subjects-inner */ "./src/components/my-subjects/my-subjects-inner.tsx");




function MySubjects(_a) {
    var viewCourseUrl = _a.viewCourseUrl;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_1__["TimeoutEllipsisLoader"], null) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_my_subjects_inner__WEBPACK_IMPORTED_MODULE_2__["MySubjectsInner"], { viewCourseUrl: viewCourseUrl })));
}


/***/ })

}]);
//# sourceMappingURL=MySubjects.js.map