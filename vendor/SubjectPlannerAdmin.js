(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["SubjectPlannerAdmin"],{

/***/ "./src/components/course-builder-ks/admin/courses/create-standard-course.tsx":
/*!***********************************************************************************!*\
  !*** ./src/components/course-builder-ks/admin/courses/create-standard-course.tsx ***!
  \***********************************************************************************/
/*! exports provided: CreateStandardCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStandardCourse", function() { return CreateStandardCourse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utility-components/lazy-content */ "./src/components/utility-components/lazy-content.tsx");
/* harmony import */ var _logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../logic/course-instance-tags */ "./src/components/course-builder-ks/logic/course-instance-tags.ts");








var _CreateStandardCourse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_CreateStandardCourse, _super);
    function _CreateStandardCourse(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            courseName: "",
            courseType: 'theme-course',
            subject: { subjectName: '', subjectCode: '' }
        };
        return _this;
    }
    _CreateStandardCourse.prototype.createCourse = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, type, name, subject, courseId, _b, officialBranchId, schoolId, courseProperties;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.state, type = _a.courseType, name = _a.courseName, subject = _a.subject;
                        courseId = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["createUUID"])();
                        return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_3__["Schools"].standardSchool.load()];
                    case 1:
                        _b = _c.sent(), officialBranchId = _b.officialBranchId, schoolId = _b.id;
                        _globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].branches.addRelated({ id: officialBranchId }, "approvedChildren", {
                            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["createUUID"])(),
                            name: 'draft',
                            acl: [
                                "role:USER:R",
                                "schoolRole:standard/EMPLOYEE:S"
                            ],
                            schoolId: schoolId,
                            treeParentId: officialBranchId,
                            tags: [courseId] // Allow following queries:
                            // List all draft for a certain school: {hasEdgesFrom=schoolBranchId&tags=courseId}
                            // Get official draft for a certain school: {hasEdgesFrom=schoolBranchId&name=draft&tags=courseId}
                        });
                        courseProperties = {
                            id: courseId,
                            acl: [
                                'schoolRole:standard/EMPLOYEE:S',
                                'role:USER:R'
                            ],
                            name: name,
                            //description: type === 'step-course' ? "Stegkurs" : "Teamkurs",
                            tags: type === 'step-course' ?
                                Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_7__["computeTagsFromSubjectCodes"])([], [subject.subjectCode]) :
                                []
                        };
                        _globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].global.addRelated({ id: _globals_db__WEBPACK_IMPORTED_MODULE_3__["globalId"], tags: [] }, "courseInstances", type === 'step-course' ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, courseProperties), { type: type, description: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Stegkurs"], ["Stegkurs"]))), subject: subject }) : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, courseProperties), { type: type, description: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Temakurs"], ["Temakurs"]))), subjects: [] }));
                        this.setState({
                            courseName: ''
                        });
                        return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].saveNow()];
                    case 2:
                        _c.sent();
                        this.props.history.push("/admin/courses/" + courseId + "/settings");
                        return [2 /*return*/];
                }
            });
        });
    };
    _CreateStandardCourse.prototype.isValidState = function (giveMessage) {
        var _a = this.state, courseName = _a.courseName, courseType = _a.courseType, subject = _a.subject;
        var rv = courseName && courseType === 'theme-course' || subject.subjectCode;
        if (!rv && giveMessage) {
            if (!courseName)
                return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kursens namn m\u00E5ste fyllas i"], ["Kursens namn m\u00E5ste fyllas i"])));
            if (!subject.subjectCode)
                return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4mne m\u00E5ste v\u00E4ljas f\u00F6r stegkurser"], ["\u00C4mne m\u00E5ste v\u00E4ljas f\u00F6r stegkurser"])));
        }
        return rv;
    };
    _CreateStandardCourse.prototype.render = function () {
        var _this = this;
        var _a = this.state, courseName = _a.courseName, courseType = _a.courseType, subject = _a.subject;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Skapa ny standardkurs"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                "Namn: ",
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", value: courseName, onChange: function (ev) { return _this.setState({ courseName: ev.target.value }); } })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "radio", name: "course-type", checked: courseType === 'step-course', onChange: function (ev) { return ev.target.checked && _this.setState({ courseType: 'step-course' }); } }),
                " Stegkurs"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "radio", name: "course-type", checked: courseType === 'theme-course', onChange: function (ev) { return ev.target.checked && _this.setState({ courseType: 'theme-course' }); } }),
                " Temakurs"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            courseType === 'step-course' ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "kclabel" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4mne"], ["\u00C4mne"])))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_6__["LazyContent"], null, _globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].subjects.tags("schoolType:primary").toValue().map(function (subjects) {
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { value: subject.subjectCode, onChange: function (ev) { return _this.setState({
                                subject: subjects.filter(function (s) { return s.code === ev.target.value; }).map(function (s) { return ({
                                    subjectCode: s.code,
                                    subjectName: s.name
                                }); })[0]
                            }); } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["V\u00E4lj \u00E4mne"], ["V\u00E4lj \u00E4mne"])))),
                            subjects.map(function (subject) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { key: subject.code, value: subject.code }, subject.name); }));
                    })))) : null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { disabled: !this.isValidState(), className: ["btn", "btn-large", this.isValidState() ? "" : "disabled"].join(' '), onClick: function () { return _this.isValidState() ?
                        _this.createCourse() : alert(_this.isValidState(true)); } }, "Skapa"))));
    };
    return _CreateStandardCourse;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
var CreateStandardCourse = Object(react_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(_CreateStandardCourse);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/components/course-builder-ks/admin/courses/delete-standard-course.tsx":
/*!***********************************************************************************!*\
  !*** ./src/components/course-builder-ks/admin/courses/delete-standard-course.tsx ***!
  \***********************************************************************************/
/*! exports provided: DeleteStandardCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteStandardCourse", function() { return DeleteStandardCourse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility-components/live-query-view */ "./src/components/utility-components/live-query-view.tsx");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");







var DeleteStandardCourse = Object(react_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(_utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_2__["liveQueryView"])(function (_a) {
    var courseId = _a.courseId, history = _a.history;
    return _globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].courseInstances.ids([courseId]).toValue()
        .combineLatest(_globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].branches.tags(courseId).idsOnly().map(function (_a) {
        var id = _a.id;
        return id;
    }))
        .combineLatest(_globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].courseBlocks.tags(courseId).idsOnly().map(function (_a) {
        var id = _a.id;
        return id;
    }))
        .combineLatest(_globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].courseContents.tags(courseId).idsOnly().map(function (_a) {
        var id = _a.id;
        return id;
    }))
        .combineLatest(_globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].courseTabs.tags(courseId).idsOnly().map(function (_a) {
        var id = _a.id;
        return id;
    }))
        .combineLatest(_globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].tasks.tags(courseId).idsOnly().map(function (_a) {
        var id = _a.id;
        return id;
    }))
        .map(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), a = _b[0], b = _b[1];
        return ({
            courses: a[0][0][0][0],
            branchIds: a[0][0][0][1],
            courseBlockIds: a[0][0][1],
            courseContentIds: a[0][1],
            courseTabIds: a[1],
            taskIds: b
        });
    })
        .map(function (_a) {
        var courses = _a.courses, branchIds = _a.branchIds, courseBlockIds = _a.courseBlockIds, courseContentIds = _a.courseContentIds, courseTabIds = _a.courseTabIds, taskIds = _a.taskIds;
        if (courses.length === 0)
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Kursen \u00E4r nu borttagen"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { className: "btn btn-large", to: "/admin" }, "Till adminverktygets startsida"));
        var course = courses[0];
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: ["entitymeta-" + course.$meta].join(' ') },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null,
                "Bekr\u00E4fta borttagning av standardkursen ",
                course.name,
                " "),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "F\u00F6ljande relaterade objekt kommer ocks\u00E5 att tas bort"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                "Tempor\u00E4ra utkast: ",
                branchIds.length,
                " st"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                "Kursblock: ",
                courseBlockIds.length,
                " st"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                "Inneh\u00E5llsrutor (totalt inklusive skolors egna varianter): ",
                courseContentIds.length,
                " st"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                "Flikar (totalt inklusive skolors egna varianter): ",
                courseTabIds.length,
                " st"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                "Uppgifter (totalt inklusive skolors egna varianter): ",
                taskIds.length,
                " st"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn btn-large", onClick: function () { return history.go(-1); } }, "Avbryt"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-warning btn-large pull-right", onClick: function () {
                    var _a, _b, _c, _d, _e;
                    // Delete all draft ids.
                    (_a = _globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].branches).delete.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(branchIds));
                    // Delete all descendant ids:
                    (_b = _globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].courseBlocks).delete.apply(_b, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(courseBlockIds));
                    (_c = _globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].courseContents).delete.apply(_c, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(courseContentIds));
                    (_d = _globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].courseTabs).delete.apply(_d, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(courseTabIds));
                    (_e = _globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].tasks).delete.apply(_e, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(taskIds));
                    // Delete the course itself
                    _globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].courseInstances.delete(course.id);
                } }, "Bekr\u00E4fta borttagning av kurs"));
    });
}, {
    spinner: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
        "H\u00E4mtar relaterade objekt... ",
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_6__["Spinner"], null))
}));


/***/ }),

/***/ "./src/components/course-builder-ks/admin/courses/edit-course-block-requirements.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/components/course-builder-ks/admin/courses/edit-course-block-requirements.tsx ***!
  \*******************************************************************************************/
/*! exports provided: CourseBlockRequirements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseBlockRequirements", function() { return CourseBlockRequirements; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _course_builder_sub_components_knowledge_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../course-builder/sub-components/knowledge-matrix */ "./src/components/course-builder/sub-components/knowledge-matrix.tsx");
/* harmony import */ var _utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utility-components/lazy-content */ "./src/components/utility-components/lazy-content.tsx");
/* harmony import */ var _logic_get_course_codes_from_tags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../logic/get-course-codes-from-tags */ "./src/components/course-builder-ks/logic/get-course-codes-from-tags.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _logic_get_standard_courses_with_ordered_requirements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../logic/get-standard-courses-with-ordered-requirements */ "./src/components/course-builder-ks/logic/get-standard-courses-with-ordered-requirements.ts");
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");
/* harmony import */ var _course_builder_sub_components_select_related_docs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../course-builder/sub-components/select-related-docs */ "./src/components/course-builder/sub-components/select-related-docs.tsx");
/* harmony import */ var _utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utility-components/live-query-view */ "./src/components/utility-components/live-query-view.tsx");
/* harmony import */ var _course_builder_courses_business_logic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../course-builder/courses/business-logic */ "./src/components/course-builder/courses/business-logic.ts");











var CourseBlockRequirements = Object(_utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_9__["liveQueryView"])(function (_a) {
    var _b;
    var repo = _a.repo, course = _a.course, block = _a.block;
    var courseCodes = Object(_logic_get_course_codes_from_tags__WEBPACK_IMPORTED_MODULE_4__["getCourseCodesFromTags"])(block.tags);
    var courseCodeTags = courseCodes.map(function (code) { return "course:" + code; });
    return Object(_logic_get_standard_courses_with_ordered_requirements__WEBPACK_IMPORTED_MODULE_6__["getStandardCoursesWithOrderedRequirements"])(courseCodes)
        .combineLatest((_b = repo.courseBlocks
        .hasEdgesFrom([course.id])) // Same parent give me sibling blocks!
    .tags.apply(_b, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(courseCodeTags)).include("abilities", "centralContent", "knowledgeRequirements")
        .includeIdsOnly()) // So we can detect non-covered requirements
        .map(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), courseTemplates = _b[0], siblingBlocks = _b[1];
        var uncoveredIds = Object(_course_builder_courses_business_logic__WEBPACK_IMPORTED_MODULE_10__["getIdsNotCoveredByReqReferencingDocs"])(courseTemplates, siblingBlocks);
        if (courseTemplates.length === 0)
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Blocket \u00E4r inte kopplad till n\u00E5gon \u00E5rskurs"], ["Blocket \u00E4r inte kopplad till n\u00E5gon \u00E5rskurs"]))));
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, courseTemplates.map(function (_a) {
            var id = _a.id, name = _a.name, abilities = _a.abilities, centralContent = _a.centralContent, knowledgeRequirements = _a.knowledgeRequirements;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { key: id },
                courseTemplates.length === 1 ? undefined : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, name),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_7__["OpenCloseBox"], { className: "larger", title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["V\u00E4lj blockets kunskapskrav"], ["V\u00E4lj blockets kunskapskrav"])))) },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Markera de kunskapskrav som blocket ska t\u00E4cka."], ["Markera de kunskapskrav som blocket ska t\u00E4cka."])))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_3__["LazyContent"], null, repo["knowledge-requirements"].hasEdgesFrom([block.id]).idsOnly().toValue().map(function (blockKrs) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_knowledge_matrix__WEBPACK_IMPORTED_MODULE_2__["KnowledgeMatrix"], { knowledgeRequirements: knowledgeRequirements, markedIds: blockKrs.map(function (_a) {
                                var id = _a.id;
                                return id;
                            }), idsToMarkNotOk: uncoveredIds, markMode: true, onMarkChanged: function (markedId, isMarked) {
                                // Remove invalid knowledge requirements (those that are not part of the standard course)
                                // Can happen after changing school year / course or subject.
                                var invalidKrs = blockKrs.filter(function (kr) { return !knowledgeRequirements.some(function (_a) {
                                    var id = _a.id;
                                    return kr.id === id;
                                }); });
                                invalidKrs.forEach(function (invalidKr) {
                                    repo.courseBlocks.removeRelated(block, "knowledgeRequirements", invalidKr);
                                });
                                var markedDoc = knowledgeRequirements.filter(function (_a) {
                                    var id = _a.id;
                                    return id === markedId;
                                })[0];
                                if (isMarked) {
                                    repo.courseBlocks.addRelated(block, "knowledgeRequirements", markedDoc);
                                }
                                else {
                                    repo.courseBlocks.removeRelated(block, "knowledgeRequirements", markedDoc);
                                }
                            } });
                    }))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_3__["LazyContent"], null, repo.abilities.hasEdgesFrom([block.id]).idsOnly().toValue().map(function (blockAbilities) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_select_related_docs__WEBPACK_IMPORTED_MODULE_8__["SelectRelatedDocs"], { options: abilities, title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["V\u00E4lj blockets f\u00F6rm\u00E5gor"], ["V\u00E4lj blockets f\u00F6rm\u00E5gor"]))), markedIds: blockAbilities.map(function (_a) {
                            var id = _a.id;
                            return id;
                        }), uncoveredIds: uncoveredIds, markMode: true, 
                        //migratedIds={task && task.migratedTexts && task.migratedTexts.abilities}
                        onMarkChanged: function (markedId, isMarked) {
                            // Remove invalid abilities (those that are not part of the standard course)
                            // Can happen after changing school year / course or subject.
                            var invalidAbilities = blockAbilities.filter(function (a) { return !abilities.some(function (_a) {
                                var id = _a.id;
                                return a.id === id;
                            }); });
                            invalidAbilities.forEach(function (invalidAbility) {
                                repo.courseBlocks.removeRelated(block, "abilities", invalidAbility);
                            });
                            var markedDoc = abilities.filter(function (_a) {
                                var id = _a.id;
                                return id === markedId;
                            })[0];
                            if (isMarked) {
                                repo.courseBlocks.addRelated(block, "abilities", markedDoc);
                            }
                            else {
                                repo.courseBlocks.removeRelated(block, "abilities", markedDoc);
                            }
                        } });
                })),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_3__["LazyContent"], null, repo["central-content"].hasEdgesFrom([block.id]).idsOnly().toValue().map(function (blockCCs) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_select_related_docs__WEBPACK_IMPORTED_MODULE_8__["SelectRelatedDocs"], { options: centralContent, title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["V\u00E4lj blockets centrala inneh\u00E5ll"], ["V\u00E4lj blockets centrala inneh\u00E5ll"]))), markedIds: blockCCs.map(function (cc) { return cc.id; }), uncoveredIds: uncoveredIds, markMode: true, 
                        //migratedIds={task && task.migratedTexts && task.migratedTexts.centralContent}
                        onMarkChanged: function (markedId, isMarked) {
                            // Remove invalid central contents (those that are not part of the standard course)
                            // Can happen after changing school year / course or subject.
                            var invalidCentralContents = blockCCs.filter(function (cc) { return !centralContent.some(function (_a) {
                                var id = _a.id;
                                return cc.id === id;
                            }); });
                            invalidCentralContents.forEach(function (invalidCC) {
                                repo.courseBlocks.removeRelated(block, "centralContent", invalidCC);
                            });
                            var markedDoc = centralContent.filter(function (_a) {
                                var id = _a.id;
                                return id === markedId;
                            })[0];
                            if (isMarked) {
                                repo.courseBlocks.addRelated(block, "centralContent", markedDoc);
                            }
                            else {
                                repo.courseBlocks.removeRelated(block, "centralContent", markedDoc);
                            }
                        } });
                })));
        }));
    });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/components/course-builder-ks/admin/courses/edit-standard-course-blocks.tsx":
/*!****************************************************************************************!*\
  !*** ./src/components/course-builder-ks/admin/courses/edit-standard-course-blocks.tsx ***!
  \****************************************************************************************/
/*! exports provided: EditStandardCourseBlocks, CourseBlockSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStandardCourseBlocks", function() { return EditStandardCourseBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseBlockSettings", function() { return CourseBlockSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _course_builder_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../course-builder/sub-components/remove-item */ "./src/components/course-builder/sub-components/remove-item.tsx");
/* harmony import */ var _logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logic/course-instance-tags */ "./src/components/course-builder-ks/logic/course-instance-tags.ts");
/* harmony import */ var _edit_course_block_requirements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-course-block-requirements */ "./src/components/course-builder-ks/admin/courses/edit-course-block-requirements.tsx");







var EditStandardCourseBlocks = function (_a) {
    var repo = _a.repo, course = _a.course;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "kclabel" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kursblock"], ["Kursblock"])))),
        course.blocks.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareProp"])("blockNo")).map(function (block, idx) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CourseBlockSettings, { key: block.id, block: block, course: course, repo: repo, isLastBlock: idx === course.blocks.length - 1 });
        }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "btn", onClick: function () { return addCourseBlock(repo, course); } },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-plus", "aria-hidden": "true" }),
            " ", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till block"], ["L\u00E4gg till block"])))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null));
};
var CourseBlockSettings = function (_a) {
    var block = _a.block, course = _a.course, repo = _a.repo, isLastBlock = _a.isLastBlock;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "ked_boxed", style: { position: "relative" } },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null,
                "Block ",
                block.blockNo), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Steg"], ["Steg"]))),
            " ",
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "btn-group" }, block.stepNumbers.map(function (stepNo) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { key: stepNo, className: "btn btn-small step-button" }, stepNo);
            })),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "kclabel" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5rskurs"], ["\u00C5rskurs"])))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", { value: Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_5__["getSchoolYears"])(block.tags)[0] || "", onChange: function (ev) { return repo.courseBlocks.update(block, {
                        tags: Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_5__["computeTagsFromSchoolYears"])(block.tags, [ev.target.value].filter(function (x) { return !!x; }))
                    }); } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { value: "" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["V\u00E4lj \u00E5rskurser"], ["V\u00E4lj \u00E5rskurser"])))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { value: "1-3" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5rskurs 1-3"], ["\u00C5rskurs 1-3"])))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { value: "4-6" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5rskurs 4-6"], ["\u00C5rskurs 4-6"])))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { value: "7-9" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5rskurs 7-9"], ["\u00C5rskurs 7-9"])))))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
            Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_5__["getSchoolYears"])(block.tags).length > 0 ?
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_edit_course_block_requirements__WEBPACK_IMPORTED_MODULE_6__["CourseBlockRequirements"], { block: block, course: course, repo: repo }) :
                undefined,
            isLastBlock ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_4__["RemoveItem"], { title: "Ta bort blocket", style: { display: 'inline-block', position: "absolute", top: 0, right: 0 }, onClick: function () { return confirm(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ta bort blocket?"], ["Ta bort blocket?"])))) &&
                    repo.courseInstances.removeRelated(course, "blocks", block); } })
                : null),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null));
};
function addCourseBlock(repo, course) {
    var lastBlock = course.blocks.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareProp"])("blockNo")).slice().pop();
    var blockNo = lastBlock ? lastBlock.blockNo + 1 : 1;
    var firstStepNo = lastBlock ?
        lastBlock.stepNumbers[lastBlock.stepNumbers.length - 1] + 1 :
        1;
    var newBlock = {
        id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
        acl: [
            'schoolRole:standard/EMPLOYEE:S',
            'role:USER:R'
        ],
        blockNo: blockNo,
        locked: true,
        name: "Block " + blockNo,
        tags: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([course.id], course.tags.filter(function (tag) { return tag.startsWith("course:") || tag.startsWith("sub:"); })),
        stepNumbers: [firstStepNo, firstStepNo + 1, firstStepNo + 2, firstStepNo + 3, firstStepNo + 4]
    };
    repo.courseInstances.addRelated(course, "blocks", newBlock);
    newBlock.stepNumbers.forEach(function (stepNo) {
        var introductionTab = {
            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
            type: 'step-course-tab',
            tabClass: 'intro-tab',
            tabTitle: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Introduktion"], ["Introduktion"]))),
            name: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Introduktion"], ["Introduktion"]))),
            locked: true,
            acl: [
                'schoolRole:standard/EMPLOYEE:S',
                'role:USER:R'
            ],
            stepNo: stepNo,
            order: 0,
            tags: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([
                course.id,
                "blockStep:" + newBlock.id + ":" + stepNo
            ], course.tags.filter(function (tag) { return tag.startsWith("course:") || tag.startsWith("sub:"); }))
        };
        repo.courseBlocks.addRelated(newBlock, "tabs", introductionTab);
    });
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;


/***/ }),

/***/ "./src/components/course-builder-ks/admin/courses/edit-standard-course.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/course-builder-ks/admin/courses/edit-standard-course.tsx ***!
  \*********************************************************************************/
/*! exports provided: EditStandardCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStandardCourse", function() { return EditStandardCourse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utility-components/form-field-text-input */ "./src/components/utility-components/form-field-text-input.tsx");
/* harmony import */ var _utility_components_form_field_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utility-components/form-field-textarea */ "./src/components/utility-components/form-field-textarea.tsx");
/* harmony import */ var _utility_components_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utility-components/form-field */ "./src/components/utility-components/form-field.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utility-components/live-query-view */ "./src/components/utility-components/live-query-view.tsx");
/* harmony import */ var _logic_publish_course__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../logic/publish-course */ "./src/components/course-builder-ks/logic/publish-course.ts");
/* harmony import */ var _utility_components_multiselect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utility-components/multiselect */ "./src/components/utility-components/multiselect.tsx");
/* harmony import */ var _utility_components_checklist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utility-components/checklist */ "./src/components/utility-components/checklist.tsx");
/* harmony import */ var _logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../logic/course-instance-tags */ "./src/components/course-builder-ks/logic/course-instance-tags.ts");
/* harmony import */ var _edit_standard_course_blocks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-standard-course-blocks */ "./src/components/course-builder-ks/admin/courses/edit-standard-course-blocks.tsx");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../access-control */ "./src/access-control/index.ts");
















var EditStandardCourse = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Object(_utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_8__["liveQueryView"])(function (_a) {
    var courseId = _a.courseId, history = _a.history;
    return _globals_db__WEBPACK_IMPORTED_MODULE_2__["CourseInstances"].getOrCreateBranchId(_globals_db__WEBPACK_IMPORTED_MODULE_2__["Schools"].standardSchool, courseId)
        .map(function (branchId) { return _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].branch(branchId); })
        .switchMap(function (branch) {
        return branch.courseInstances.include("blocks").id(courseId).map(function (course) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_3__["TextInput"], { autoFocus: true, label: "Namn", id: "CourseInstance:name", placeholder: "", value: course.name, onChange: function (name) { return branch.courseInstances.update(course, { name: name }); } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_textarea__WEBPACK_IMPORTED_MODULE_4__["TextAreaFormField"], { label: "Beskrivning", id: "CourseInstance:description", rows: 7, placeholder: "", value: course.description, onChange: function (description) {
                    branch.courseInstances.update(course, { description: description });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field__WEBPACK_IMPORTED_MODULE_5__["FormField"], { label: "Typ", id: "CourseInstance:type" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { disabled: true, type: "radio", name: "course-type", checked: course.type === 'step-course', id: "CourseInstance:type", onChange: function (ev) { return ev.target.checked && branch.courseInstances.update(course, { type: 'step-course' }); } }),
                        " Stegkurs")),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { disabled: true, type: "radio", name: "course-type", checked: course.type === 'theme-course', id: "CourseInstance:type", onChange: function (ev) { return ev.target.checked && branch.courseInstances.update(course, { type: 'theme-course' }); } }),
                        " Temakurs"))),
            course.type === 'step-course' ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field__WEBPACK_IMPORTED_MODULE_5__["FormField"], { label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4mne"], ["\u00C4mne"]))), id: "CourseInstance:subject" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { id: "CourseInstance:subject" }, course.subject.subjectName))) : null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "kclabel" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndringspolicy"], ["\u00C4ndringspolicy"])))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_checklist__WEBPACK_IMPORTED_MODULE_11__["Checklist"], { available: [
                        { name: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Till\u00E5t skolor skapa egna flikar"], ["Till\u00E5t skolor skapa egna flikar"]))), key: "allowAddTabs" },
                        { name: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Till\u00E5t skolor d\u00F6lja standardflikar"], ["Till\u00E5t skolor d\u00F6lja standardflikar"]))), key: "allowRemoveTabs" },
                        { name: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Till\u00E5t skolor \u00E4ndra ordningen mellan standardflikar"], ["Till\u00E5t skolor \u00E4ndra ordningen mellan standardflikar"]))), key: "allowReorderTabs" },
                    ], selected: [
                        course.allowAddTabs && "allowAddTabs",
                        course.allowRemoveTabs && "allowRemoveTabs",
                        course.allowReorderTabs && "allowReorderTabs"
                    ].filter(function (x) { return !!x; }), onChange: function (selectedPolicy) { return branch.courseInstances.update(course, {
                        allowAddTabs: selectedPolicy.includes("allowAddTabs"),
                        allowRemoveTabs: selectedPolicy.includes("allowRemoveTabs"),
                        allowReorderTabs: selectedPolicy.includes("allowReorderTabs"),
                    }); } })),
            course.type === 'step-course' ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_12__["getSubjectCodes"])(course.tags).length > 0 ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_edit_standard_course_blocks__WEBPACK_IMPORTED_MODULE_13__["EditStandardCourseBlocks"], { repo: branch, course: course }) : undefined) : undefined,
            course.type === 'theme-course' ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "kclabel" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kopplade \u00E4mnen"], ["Kopplade \u00E4mnen"])))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_multiselect__WEBPACK_IMPORTED_MODULE_10__["Multiselect"], { selected: (course.subjects || []).map(function (_a) {
                            var name = _a.name, code = _a.code;
                            return ({ name: name, key: code });
                        }), getOptions: function () { return _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].subjects.tags('schoolType:primary').map(function (s) { return ({ name: s.name, key: s.code }); }).toValue().load(); }, onChange: function (selectedOptions) { return branch.courseInstances.update(course, {
                            tags: Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_12__["computeTagsFromSubjectCodes"])(course.tags, selectedOptions.map(function (o) { return o.key; })),
                            subjects: selectedOptions.map(function (option) { return ({ name: option.name, code: option.key }); })
                        }); } })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "kclabel" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5rskurser som ska ing\u00E5"], ["\u00C5rskurser som ska ing\u00E5"])))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_checklist__WEBPACK_IMPORTED_MODULE_11__["Checklist"], { available: [
                            { name: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5rskurs 1-3"], ["\u00C5rskurs 1-3"]))), key: "1-3" },
                            { name: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5rskurs 4-6"], ["\u00C5rskurs 4-6"]))), key: "4-6" },
                            { name: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5rskurs 7-9"], ["\u00C5rskurs 7-9"]))), key: "7-9" }
                        ], selected: Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_12__["getSchoolYears"])(course.tags), onChange: function (selectedSchoolYears) { return branch.courseInstances.update(course, {
                            tags: Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_12__["computeTagsFromSchoolYears"])(course.tags, selectedSchoolYears)
                        }); } }))) : undefined,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            course.tags.includes('active') ?
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-large pull-right", onClick: function () {
                        var newTags = Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_12__["computeTagsFromActiveState"])(course.tags, false);
                        branch.courseInstances.update(course, { tags: newTags });
                    } }, "Inaktivera") :
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-large pull-right", onClick: function () {
                        var newTags = Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_12__["computeTagsFromActiveState"])(course.tags, true);
                        branch.courseInstances.update(course, { tags: newTags });
                    } }, "Aktivera"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], { className: "btn btn-warning btn-large pull-right", to: "/admin/courses/" + courseId + "/confirm-delete" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Radera ..."], ["Radera ..."])))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-large btn-warning", onClick: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Object(_logic_publish_course__WEBPACK_IMPORTED_MODULE_9__["publishEntireCourse"])({ school: "standard", draftRepo: branch, course: course })];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].saveNow()];
                            case 2:
                                _a.sent();
                                location.href = Object(_access_control__WEBPACK_IMPORTED_MODULE_15__["preserveImpersonationQuery"])(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_14__["default"].KED_SUBJECT_PLANNER_URL + "#/standard/courses/" + courseId, {});
                                return [2 /*return*/];
                        }
                    });
                }); } }, "Publicera")); });
    });
}));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
/*async function deleteCourse(course: CourseInstance) {
  try {
    // Get course's drafts on all schools
    // Get ids of all related entities (search by entities tags with course id)
    const [
      draftBranchIds,
      courseBlockIds,
      courseContentIds,
      couresTabsIds,
      tasksIds] = await Promise.all([
        db.branches.tags(course.id).load(),
        db.courseBlocks.tags(course.id).load(),
        db.courseContents.tags(course.id).load(),
        db.courseTabs.tags(course.id).load(),
        db.tasks.tags(course.id).load()
      ]);

    // Delete all draft ids.
    db.branches.delete(...draftBranchIds);
    // Delete all descendant ids:
    db.courseBlocks.delete(...courseBlockIds);
    db.courseContents.delete(...courseContentIds);
    db.courseTabs.delete(...couresTabsIds);
    db.tasks.delete(...tasksIds);

    // Delete the course itself
    db.courseInstances.delete(course.id);

  } catch (error) {
    showError(error);
  }
}*/


/***/ }),

/***/ "./src/components/course-builder-ks/admin/index.tsx":
/*!**********************************************************!*\
  !*** ./src/components/course-builder-ks/admin/index.tsx ***!
  \**********************************************************/
/*! exports provided: SubjectPlannerAdminApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectPlannerAdminApp", function() { return SubjectPlannerAdminApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utils_error_success_feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/error-success-feedback */ "./src/utils/error-success-feedback.tsx");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/components/course-builder-ks/admin/routes.tsx");
/* harmony import */ var _common_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/banner */ "./src/components/course-builder-ks/common/banner.tsx");





var SubjectPlannerAdminApp = function () {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            _routes__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].map(function (_a, index) {
                var exact = _a.exact, path = _a.path, tabId = _a.tabId, title = _a.title, content = _a.content;
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { key: index, path: path, exact: exact, component: function (routeProps) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_banner__WEBPACK_IMPORTED_MODULE_4__["Banner"], { activeTab: tabId || "$", tabs: _routes__WEBPACK_IMPORTED_MODULE_3__["TABS_ARRAY"], title: title || "", backgroundImage: "https://ks.kunskapsporten.se/images/18.6323bc4d15f4831f9c82dedf/theme.jpg" }),
                        content(routeProps)); } });
            }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utils_error_success_feedback__WEBPACK_IMPORTED_MODULE_2__["ErrorSuccessFeedback"], null)));
};


/***/ }),

/***/ "./src/components/course-builder-ks/admin/routes.tsx":
/*!***********************************************************!*\
  !*** ./src/components/course-builder-ks/admin/routes.tsx ***!
  \***********************************************************/
/*! exports provided: TABS, ROUTES, TABS_ARRAY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABS", function() { return TABS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABS_ARRAY", function() { return TABS_ARRAY; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _courses_create_standard_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses/create-standard-course */ "./src/components/course-builder-ks/admin/courses/create-standard-course.tsx");
/* harmony import */ var _common_two_columns_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/two-columns-page */ "./src/components/course-builder-ks/common/two-columns-page.tsx");
/* harmony import */ var _common_standard_course_instance_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/standard-course-instance-list */ "./src/components/course-builder-ks/common/standard-course-instance-list.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var _courses_edit_standard_course__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./courses/edit-standard-course */ "./src/components/course-builder-ks/admin/courses/edit-standard-course.tsx");
/* harmony import */ var _courses_delete_standard_course__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./courses/delete-standard-course */ "./src/components/course-builder-ks/admin/courses/delete-standard-course.tsx");
/* harmony import */ var _course_builder_subjects_subjects_inner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../course-builder/subjects/subjects-inner */ "./src/components/course-builder/subjects/subjects-inner.tsx");
/* harmony import */ var _course_builder_subjects_show_subject_inner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../course-builder/subjects/show-subject-inner */ "./src/components/course-builder/subjects/show-subject-inner.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _course_builder_schools__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../course-builder/schools */ "./src/components/course-builder/schools/index.tsx");
/* harmony import */ var _course_builder_schools_edit_school__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../course-builder/schools/edit-school */ "./src/components/course-builder/schools/edit-school.tsx");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
















var RedirectFromRoot = function () {
    var _a = _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser, roles = _a.roles, school = _a.school;
    if (roles.includes("ADMIN") || Object(_access_control__WEBPACK_IMPORTED_MODULE_15__["isTeacherAtSchool"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser, "standard"))
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Redirect"], { to: "/admin" });
    location.href = Object(_access_control__WEBPACK_IMPORTED_MODULE_15__["preserveImpersonationQuery"])(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_7__["default"].KED_SUBJECT_PLANNER_URL, {});
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    /*return roles.includes("ADMIN") ?
      <Redirect to="/admin" /> :
    //roles.includes("EMPLOYEE") ?
    //<Redirect to={`/${school}/courses/edit`} /> :
      <Redirect to={`/admin/courses`} />;*/
};
var TABS = {
    $: ['/admin', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Start")],
    //courses: ['/admin/courses', <>Kurser</>],
    schools: ["/schools", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Skolor")],
    import: ['/admin/import', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Import")],
};
var ROUTES = [
    {
        path: "/",
        exact: true,
        content: function () { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RedirectFromRoot, null); }
    },
    {
        path: "/admin",
        exact: true,
        tabId: "$",
        title: "Ämnesplaneraren Admin",
        content: function () { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Redirect"], { to: "/admin/courses/create" }); }
    },
    {
        path: "/admin/courses/create",
        exact: true,
        tabId: "$",
        title: "Skapa standardkurs",
        content: function () {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_two_columns_page__WEBPACK_IMPORTED_MODULE_3__["TwoColumnsPage"], { left: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_courses_create_standard_course__WEBPACK_IMPORTED_MODULE_2__["CreateStandardCourse"], null), right: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_standard_course_instance_list__WEBPACK_IMPORTED_MODULE_4__["StandardCourseInstanceList"], null), rightWidth: 5 });
        }
    }, {
        path: "/admin/courses/:courseId/settings",
        exact: true,
        tabId: "$",
        title: "Ämnesplaneraren Admin",
        content: function (_a) {
            var match = _a.match;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_two_columns_page__WEBPACK_IMPORTED_MODULE_3__["TwoColumnsPage"], { left: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_courses_edit_standard_course__WEBPACK_IMPORTED_MODULE_8__["EditStandardCourse"], { courseId: match.params.courseId }), right: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_standard_course_instance_list__WEBPACK_IMPORTED_MODULE_4__["StandardCourseInstanceList"], null), rightWidth: 5 });
        }
    }, {
        path: "/admin/courses/:courseId/confirm-delete",
        exact: true,
        tabId: "$",
        title: "Bekräfta radering av standardkurs",
        content: function (_a) {
            var match = _a.match;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_two_columns_page__WEBPACK_IMPORTED_MODULE_3__["TwoColumnsPage"], { left: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_courses_delete_standard_course__WEBPACK_IMPORTED_MODULE_9__["DeleteStandardCourse"], { courseId: match.params.courseId }), right: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_standard_course_instance_list__WEBPACK_IMPORTED_MODULE_4__["StandardCourseInstanceList"], null), rightWidth: 5 });
        }
    }, {
        path: "/admin/import",
        exact: true,
        tabId: 'import',
        title: "Import från Skolverket",
        content: function () { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_subjects_subjects_inner__WEBPACK_IMPORTED_MODULE_10__["SubjectsInner"], { linkPrefix: "/admin/import/" }); }
    }, {
        path: "/admin/import/:subjectId",
        exact: false,
        tabId: "import",
        title: "Import från skolverket",
        content: function (_a) {
            var match = _a.match;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_subjects_show_subject_inner__WEBPACK_IMPORTED_MODULE_11__["ShowSubjectInner"], { id: match.params.subjectId });
        }
    }, {
        path: "/schools",
        exact: true,
        tabId: "schools",
        title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Skolor"], ["Skolor"]))),
        content: function () { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_schools__WEBPACK_IMPORTED_MODULE_13__["SchoolsWithoutBanner"], { viewCourseUrl: _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_7__["default"].KED_SUBJECT_PLANNER_URL }); }
    }, {
        path: "/schools/:schoolId/edit",
        tabId: "schools",
        title: "Skolor",
        content: function (_a) {
            var match = _a.match;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_schools_edit_school__WEBPACK_IMPORTED_MODULE_14__["EditSchoolNoBanner"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Redigera skola"], ["Redigera skola"]))), id: match.params.schoolId });
        }
    }, {
        path: "/schools/new/gymnasium",
        tabId: "schools",
        title: "Skolor",
        content: function (_a) {
            var match = _a.match;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_schools_edit_school__WEBPACK_IMPORTED_MODULE_14__["EditSchoolNoBanner"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till skola"], ["L\u00E4gg till skola"]))), type: "gymnasium" });
        }
    }, {
        path: "/schools/new/primary",
        tabId: "schools",
        title: "Skolor",
        content: function (_a) {
            var match = _a.match;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_schools_edit_school__WEBPACK_IMPORTED_MODULE_14__["EditSchoolNoBanner"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_12__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till skola"], ["L\u00E4gg till skola"]))), type: "primary" });
        }
    }
];
var TABS_ARRAY = Object.keys(TABS).map(function (key) { return ({
    key: key,
    name: TABS[key][1],
    link: TABS[key][0]
}); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/components/course-builder-ks/common/side-list.tsx":
/*!***************************************************************!*\
  !*** ./src/components/course-builder-ks/common/side-list.tsx ***!
  \***************************************************************/
/*! exports provided: SideList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideList", function() { return SideList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");


var SideList = function (_a) {
    var items = _a.items, caption = _a.caption;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ked_boxed" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, caption),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "taskContainer odd-even" }, items.map(function (item) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "schoolCourse", key: item.id },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: ["align-horizontal", item.$meta && "entitymeta-" + item.$meta].join(' ') },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "horizontalItem top pull-right" }, item.editLink.startsWith(':') ?
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: item.editLink.substr(1), className: "editItem" }) :
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: item.editLink, className: "editItem" })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "horizontalItem top" }, item.viewLink.startsWith(':') ?
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: item.viewLink.substr(1) }, item.name) :
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: item.viewLink }, item.name)),
                    item.pills.map(function (pill, idx) {
                        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: idx, className: "horizontalItem top" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: ["pill"].concat(pill.className).join(' ') }, pill.name));
                    })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "horizontalItem top" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, item.description)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "horizontalItem top" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "small" }, item.smallText))); })))));
};


/***/ }),

/***/ "./src/components/course-builder-ks/common/standard-course-instance-list.tsx":
/*!***********************************************************************************!*\
  !*** ./src/components/course-builder-ks/common/standard-course-instance-list.tsx ***!
  \***********************************************************************************/
/*! exports provided: StandardCourseInstanceList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardCourseInstanceList", function() { return StandardCourseInstanceList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _side_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-list */ "./src/components/course-builder-ks/common/side-list.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility-components/live-query-view */ "./src/components/utility-components/live-query-view.tsx");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _course_builder_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../course-builder/utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _logic_list_course_instances__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logic/list-course-instances */ "./src/components/course-builder-ks/logic/list-course-instances.ts");









var StandardCourseInstanceList = Object(_utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_4__["liveQueryView"])(function () {
    /*{
      loading: ()=><Spinner />,
      error: error => <p>Ojsan hoppsan fel: {error.message}</p>
    },*/
    return Object(_logic_list_course_instances__WEBPACK_IMPORTED_MODULE_8__["listCourseInstances"])()
        .orderBy("name")
        .map(function (_a) {
        var id = _a.id, $meta = _a.$meta, name = _a.name, description = _a.description, tags = _a.tags, type = _a.type, modifiedBy = _a.modifiedBy, modifiedDate = _a.modifiedDate;
        return ({
            id: id,
            type: type,
            $meta: $meta,
            name: name,
            description: description,
            viewLink: ":" + Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["preserveImpersonationQuery"])(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_5__["default"].KED_SUBJECT_PLANNER_URL, {}) + "#/standard/courses/" + id,
            editLink: "/admin/courses/" + id + "/settings",
            pills: tags.filter(function (tag) { return tag === "active"; })
                .map(function (tag) { return ({
                className: "active",
                name: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Aktiv"], ["Aktiv"])))
            }); }),
            smallText: modifiedBy && modifiedDate && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Senast redigerad av ", " / ", ""], ["Senast redigerad av ", " / ", ""])), modifiedBy.name, Object(_course_builder_utils__WEBPACK_IMPORTED_MODULE_7__["shortDateFormat"])(modifiedDate))
        });
    })
        .toValue()
        .map(function (courseItems) {
        var stepCourseItems = courseItems.filter(function (course) { return course.type === 'step-course'; });
        var themeCourseItems = courseItems.filter(function (course) { return course.type === 'theme-course'; });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_side_list__WEBPACK_IMPORTED_MODULE_2__["SideList"], { caption: "Stegkurser", items: stepCourseItems }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_side_list__WEBPACK_IMPORTED_MODULE_2__["SideList"], { caption: "Temakurser", items: themeCourseItems }));
    });
});
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/utility-components/multiselect.tsx":
/*!***********************************************************!*\
  !*** ./src/components/utility-components/multiselect.tsx ***!
  \***********************************************************/
/*! exports provided: Multiselect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multiselect", function() { return Multiselect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");




var Multiselect = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Multiselect, _super);
    function Multiselect(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            optionsVisible: false
        };
        return _this;
    }
    Multiselect.prototype.render = function () {
        var _this = this;
        var _a = this.props, selected = _a.selected, onChange = _a.onChange, getOptions = _a.getOptions;
        var _b = this.state, optionsVisible = _b.optionsVisible, options = _b.options;
        var filteredOptions = options && options.filter(function (o) { return !selected.some(function (s) { return s.key === o.key; }); });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "taskContainer" }, selected.map(function (_a) {
                var key = _a.key, name = _a.name;
                //const checked = selected.includes(key);
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { key: key, className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-times hoverable", onClick: function () { return onChange(selected.filter(function (option) { return option.key !== key; })); } }),
                        name));
            })),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { style: { outline: 'none' }, tabIndex: 0, onBlur: function (ev) { return setTimeout(function () { return _this.setState({ optionsVisible: false }); }, 100); } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { className: "btn", onClick: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var options_1, err_1;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (optionsVisible)
                                        return [2 /*return*/, this.setState({ optionsVisible: false })];
                                    this.setState({ optionsVisible: true });
                                    if (!!this.state.options) return [3 /*break*/, 4];
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, getOptions()];
                                case 2:
                                    options_1 = _a.sent();
                                    this.setState({ options: options_1 });
                                    return [3 /*break*/, 4];
                                case 3:
                                    err_1 = _a.sent();
                                    this.setState({ options: [{ key: null, name: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ett fel har intr\u00E4ffat"], ["Ett fel har intr\u00E4ffat"]))) }] });
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-plus", "aria-hidden": true }),
                    " ", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till"], ["L\u00E4gg till"])))),
                optionsVisible ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                    filteredOptions ?
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", { size: filteredOptions.length === 1 ? 2 : filteredOptions.length, defaultValue: '', onChange: function (ev) {
                                var selectedKey = ev.target.value;
                                onChange(selected.concat({ key: selectedKey, name: options.filter(function (o) { return o.key === selectedKey; }).map(function (o) { return o.name; })[0] }));
                                _this.setState({ optionsVisible: false });
                            } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { style: { display: 'none' }, disabled: true, key: '', value: '' }),
                            filteredOptions.map(function (_a) {
                                var key = _a.key, name = _a.name;
                                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { key: key, value: key }, name);
                            })) :
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_2__["Spinner"], null)) :
                    undefined));
    };
    return Multiselect;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=SubjectPlannerAdmin.js.map