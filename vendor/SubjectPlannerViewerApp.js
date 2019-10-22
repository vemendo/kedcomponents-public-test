(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["SubjectPlannerViewerApp"],{

/***/ "./src/components/course-builder-ks/common/dialog-content.tsx":
/*!********************************************************************!*\
  !*** ./src/components/course-builder-ks/common/dialog-content.tsx ***!
  \********************************************************************/
/*! exports provided: setupDialogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupDialogs", function() { return setupDialogs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility-components/dialogs */ "./src/components/utility-components/dialogs.tsx");
/* harmony import */ var _dialog_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-context */ "./src/components/course-builder-ks/common/dialog-context.ts");




var setupDialogs = function (Component) {
    return /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DialogContent, _super);
        function DialogContent(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                dialogs: []
            };
            _this.openDialog = _this.openDialog.bind(_this);
            _this.closeDialog = _this.closeDialog.bind(_this);
            return _this;
        }
        DialogContent.prototype.openDialog = function (dialog) {
            this.setState({ dialogs: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.state.dialogs, [dialog]) });
        };
        DialogContent.prototype.closeDialog = function () {
            this.setState({ dialogs: this.state.dialogs.slice(0, this.state.dialogs.length - 1) });
        };
        DialogContent.prototype.render = function () {
            var dialogs = this.state.dialogs;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_dialog_context__WEBPACK_IMPORTED_MODULE_3__["DialogsContext"].Provider, { value: { openDialog: this.openDialog, closeDialog: this.closeDialog } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props)),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_dialogs__WEBPACK_IMPORTED_MODULE_2__["Dialogs"], { dialogs: dialogs, popDialog: this.closeDialog }));
        };
        return DialogContent;
    }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
};


/***/ }),

/***/ "./src/components/course-builder-ks/common/field-limits.ts":
/*!*****************************************************************!*\
  !*** ./src/components/course-builder-ks/common/field-limits.ts ***!
  \*****************************************************************/
/*! exports provided: FieldLimits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldLimits", function() { return FieldLimits; });
var FieldLimits = {
    MAX_CHARS_IN_CONTENTS: 4000,
    MAX_CHARS_TASK_NAMES: 64,
    MAX_CHARS_TASK_INTRO_TEXT: 200
};


/***/ }),

/***/ "./src/components/course-builder-ks/common/future-abilities-box.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/course-builder-ks/common/future-abilities-box.tsx ***!
  \**************************************************************************/
/*! exports provided: FutureAbilitiesBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FutureAbilitiesBox", function() { return FutureAbilitiesBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");


var FutureAbilitiesBox = function (_a) {
    var title = _a.title, selectedFAs = _a.selectedFAs;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_1__["OpenCloseBox"], { title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, title), className: "larger" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "abilityList" }, selectedFAs.map(function (fa) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { key: fa, className: "contentPart" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "contentText" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, fa)));
        })));
};


/***/ }),

/***/ "./src/components/course-builder-ks/common/select-word-bank.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/course-builder-ks/common/select-word-bank.tsx ***!
  \**********************************************************************/
/*! exports provided: SelectWordBank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectWordBank", function() { return SelectWordBank; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _viewer_editor_course_contents_word_bank_content_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewer-editor/course-contents/word-bank-content-settings */ "./src/components/course-builder-ks/viewer-editor/course-contents/word-bank-content-settings.tsx");
/* harmony import */ var _course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../course-builder/sub-components/ellipsis-loader */ "./src/components/course-builder/sub-components/ellipsis-loader.tsx");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");




var SelectWordBank = function (_a) {
    var subject = _a.subject, step = _a.step, onSelect = _a.onSelect;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { minHeight: 400 } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_2__["TimeoutEllipsisLoader"], null) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_viewer_editor_course_contents_word_bank_content_settings__WEBPACK_IMPORTED_MODULE_1__["WordBankContentSettings"], { subjectName: subject, stepNo: step, onChange: function (_a) {
                    var name = _a.name, key = _a.key;
                    var url = _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_3__["cfg"].KED_WORDBANKS_URL + "?subject=" + subject + "&step=" + step + "&list=" + key;
                    onSelect({ name: name, url: url });
                } }))));
};


/***/ }),

/***/ "./src/components/course-builder-ks/logic/compute-task-tags-and-subject.ts":
/*!*********************************************************************************!*\
  !*** ./src/components/course-builder-ks/logic/compute-task-tags-and-subject.ts ***!
  \*********************************************************************************/
/*! exports provided: computeTaskTagsAndSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeTaskTagsAndSubject", function() { return computeTaskTagsAndSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");


function computeTaskTagsAndSubject(course, tab, block) {
    var tags = [course.id];
    if (course.type === 'step-course' && block && tab.type === 'step-course-tab') {
        tags.push("blockStep:" + block.id + ":" + tab.stepNo);
    }
    else if (course.type === 'theme-course') {
        tags.push("tab:" + tab.id);
    }
    if (tab.tabClass === 'mission-tab') {
        // If task belongs to a mission tab,
        // it should be tagged with all the subjects of the course
        var otherSubjectTabs = course.tabs
            .filter(function (tab) { return tab.tabClass === 'subject-tab'; });
        var subjects = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["distinct"])(otherSubjectTabs.map(function (tab) { return tab.subject; }), function (s) { return s.subjectCode; });
        var courseCodeTags = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["distinct"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["flatten"])(otherSubjectTabs.map(function (tab) { return tab.tags.filter(function (tag) { return tag.startsWith("course:"); }); })));
        tags.push.apply(tags, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(subjects.map(function (s) { return "sub:" + s.subjectCode; })));
        tags.push.apply(tags, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(courseCodeTags));
        var subject = subjects.map(function (s) { return s.subjectName; }).join(', ');
        return { tags: tags, subject: subject };
    }
    else {
        tags.push.apply(tags, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((tab || block).tags.filter(function (tag) { return tag.startsWith("course:"); })));
        if (course.type === 'theme-course')
            tags.push.apply(tags, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(tab.tags.filter(function (tag) { return tag.startsWith("sub:"); })));
        else
            tags.push.apply(tags, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(block.tags.filter(function (tag) { return tag.startsWith("sub:"); })));
        var subject = course.type === 'theme-course' ?
            tab.subject.subjectName :
            course.subject.subjectName;
        return { tags: tags, subject: subject };
    }
}


/***/ }),

/***/ "./src/components/course-builder-ks/logic/get-draft-id.ts":
/*!****************************************************************!*\
  !*** ./src/components/course-builder-ks/logic/get-draft-id.ts ***!
  \****************************************************************/
/*! exports provided: getDraftId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDraftId", function() { return getDraftId; });
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../globals/db */ "./src/globals/db.ts");

function getDraftId(school, courseId) {
    return _globals_db__WEBPACK_IMPORTED_MODULE_0__["db"].schools.name(school).cacheOptimized().single() // Get the school Observable
        .switchMap(function (school) {
        return _globals_db__WEBPACK_IMPORTED_MODULE_0__["db"].branches
            .hasEdgesFrom([school.officialBranchId]) // The official draft has edges from the official school branch
            .name("draft") // There might be other personal drafts in future. Requirement of the common draft is that it is named "draft"
            .tags(courseId) // Find the one tagged with the courseId. There are several drafts - one for each course.
            .idsOnly()
            .map(function (_a) {
            var id = _a.id;
            return id;
        })
            .first();
    });
}


/***/ }),

/***/ "./src/components/course-builder-ks/logic/is-ked-staff.ts":
/*!****************************************************************!*\
  !*** ./src/components/course-builder-ks/logic/is-ked-staff.ts ***!
  \****************************************************************/
/*! exports provided: isKedStaff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKedStaff", function() { return isKedStaff; });
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");


function isKedStaff() {
    return Object(_access_control__WEBPACK_IMPORTED_MODULE_1__["isAdminOrTeacherAtSchool"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser, "standard");
}


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/add-content-button.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/add-content-button.tsx ***!
  \*******************************************************************************/
/*! exports provided: AddContentButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContentButton", function() { return AddContentButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logic/is-ked-staff */ "./src/components/course-builder-ks/logic/is-ked-staff.ts");





var CONTENT_TYPES = {
    "rich-text": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Textruta"], ["Textruta"]))),
    "youtube-movie": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Youtube film"], ["Youtube film"]))),
    "learning-goals": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4randem\u00E5l och uppgifter"], ["L\u00E4randem\u00E5l och uppgifter"]))),
    "resource-list": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Resurslista"], ["Resurslista"]))),
    "embedded-html": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Inb\u00E4ddad HTML"], ["Inb\u00E4ddad HTML"]))),
    "word-bank": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ordbank"], ["Ordbank"])))
};
var ADD_TITLES = {
    "rich-text": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till text"], ["L\u00E4gg till text"]))),
    "youtube-movie": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till youtube film"], ["L\u00E4gg till youtube film"]))),
    "learning-goals": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till l\u00E4randem\u00E5l och uppgifter"], ["L\u00E4gg till l\u00E4randem\u00E5l och uppgifter"]))),
    "resource-list": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till resurslista"], ["L\u00E4gg till resurslista"]))),
    "embedded-html": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till inb\u00E4ddad HTML"], ["L\u00E4gg till inb\u00E4ddad HTML"]))),
    "word-bank": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till ordbank"], ["L\u00E4gg till ordbank"])))
};
var AddContentButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AddContentButton, _super);
    function AddContentButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            open: false,
            contentType: 'rich-text'
        };
        return _this;
    }
    AddContentButton.prototype.computeTags = function () {
        var _a = this.props, course = _a.course, tab = _a.tab, courseBlock = _a.courseBlock;
        return [
            course.id,
            tab.type === 'step-course-tab' ?
                "blockStep:" + courseBlock.id + ":" + tab.stepNo :
                "tab:" + tab.id
        ];
    };
    AddContentButton.prototype.createContent = function () {
        var _a = this.props, tab = _a.tab, branch = _a.branch, type = _a.type, schoolName = _a.schoolName;
        var newContent = this.newContent(type || this.state.contentType);
        newContent.acl = ["role:USER:R", "schoolRole:" + schoolName + "/EMPLOYEE:S"];
        branch.courseTabs.addRelated(tab, "contents", newContent);
        this.setState({ open: false });
    };
    AddContentButton.prototype.newContent = function (contentType) {
        switch (contentType) {
            case "rich-text": return this.newRichText();
            case "learning-goals": return this.newLearningGoal();
            case "embedded-html": return this.newEmbeddedHTML();
            case "word-bank": return this.newWordBank();
            case "resource-list": return this.newResourceList();
            default: throw new Error("Not implemented");
        }
    };
    AddContentButton.prototype.newWordBank = function () {
        return {
            type: 'word-bank',
            tags: this.computeTags(),
            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
            order: Date.now(),
            locked: this.props.tab.locked,
            lockDelete: Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_4__["isKedStaff"])(),
            hidden: false,
            selectedWordBank: null
        };
    };
    AddContentButton.prototype.newRichText = function () {
        return {
            type: "rich-text",
            tags: this.computeTags(),
            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
            order: Date.now(),
            locked: this.props.course.type !== "theme-course" && this.props.tab.locked,
            lockDelete: Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_4__["isKedStaff"])(),
            hidden: false,
            html: '',
        };
    };
    AddContentButton.prototype.newEmbeddedHTML = function () {
        return {
            type: "embedded-html",
            tags: this.computeTags(),
            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
            order: Date.now(),
            locked: this.props.tab.locked,
            lockDelete: Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_4__["isKedStaff"])(),
            hidden: false,
            html: ''
        };
    };
    AddContentButton.prototype.newLearningGoal = function () {
        return {
            type: "learning-goals",
            tags: this.computeTags(),
            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
            locked: this.props.course.type !== "theme-course" && this.props.tab.locked,
            lockDelete: Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_4__["isKedStaff"])(),
            hidden: false,
            hasCommonLearningGoals: this.props.course.type === 'theme-course',
            commonLearningGoals: [],
            order: Date.now(),
            hiddenTasks: [],
        };
    };
    AddContentButton.prototype.newResourceList = function () {
        return {
            type: "resource-list",
            tags: this.computeTags(),
            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
            locked: false,
            lockDelete: Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_4__["isKedStaff"])(),
            order: Date.now(),
            hidden: false,
            resources: []
        };
    };
    AddContentButton.prototype.render = function () {
        var _this = this;
        if (this.state.open) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { onChange: function (ev) { return _this.setState({ contentType: ev.target.value }); } }, Object.keys(CONTENT_TYPES).map(function (contentType) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { key: contentType, value: contentType }, CONTENT_TYPES[contentType]);
                })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn pull-right", onClick: function () { return _this.setState({ open: false }); } }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_13 || (templateObject_13 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Avbryt"], ["Avbryt"])))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn btn-default", onClick: function () { return _this.createContent(); } }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_14 || (templateObject_14 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Skapa"], ["Skapa"])))));
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn", onClick: function () {
                    if (_this.props.type) {
                        _this.createContent();
                    }
                    else {
                        _this.setState({ open: true });
                    }
                } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-plus", "aria-hidden": "true" }),
                this.props.type ? ADD_TITLES[this.props.type] : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_15 || (templateObject_15 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till inneh\u00E5ll"], ["L\u00E4gg till inneh\u00E5ll"])))),
            "\u00A0");
    };
    return AddContentButton;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/add-tab-button.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/add-tab-button.tsx ***!
  \***************************************************************************/
/*! exports provided: AddTabButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTabButton", function() { return AddTabButtonWithRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logic/is-ked-staff */ "./src/components/course-builder-ks/logic/is-ked-staff.ts");






var AddTabButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AddTabButton, _super);
    function AddTabButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            editingName: false,
            name: ""
        };
        return _this;
    }
    AddTabButton.prototype.createTab = function (tabName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, type, branch, draftId, course, school, history, block, stepNo, tabTemplate, newTab;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.setState({ editingName: false, name: "" });
                        _a = this.props, type = _a.type, branch = _a.branch, draftId = _a.draftId, course = _a.course, school = _a.school, history = _a.history, block = _a.block, stepNo = _a.stepNo;
                        tabTemplate = {
                            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
                            tabTitle: tabName,
                            name: tabName,
                            order: Date.now(),
                            locked: Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_5__["isKedStaff"])() ? true : false,
                            acl: ["role:USER:R", "schoolRole:" + school + "/EMPLOYEE:S"],
                        };
                        newTab = (type === 'theme-course-tab' ?
                            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: 'theme-course-tab', tabClass: 'content-tab', tags: [
                                    this.props.course.id,
                                    "tab:" + tabTemplate.id
                                ] }, tabTemplate) :
                            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: 'step-course-tab', tabClass: 'content-tab', tags: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(block.tags, [
                                    "blockStep:" + block.id + ":" + stepNo
                                ]) }, tabTemplate), { stepNo: stepNo }));
                        /*const topContent: RichTextContent = {
                          type: 'rich-text',
                          id: createUUID(),
                          tags: [this.props.course.id],
                          html: `<h2>${tabName}</h2`,
                          order: Date.now(),
                          locked: true,
                          hidden: false
                        };*/
                        if (newTab.type === 'step-course-tab') {
                            branch.courseBlocks.addRelated(block, "tabs", newTab);
                        }
                        else {
                            branch.courseInstances.addRelated(course, "tabs", newTab);
                        }
                        //branch.courseTabs.addRelated(newTab.id, "contents", topContent);
                        return [4 /*yield*/, branch.saveNow()];
                    case 1:
                        //branch.courseTabs.addRelated(newTab.id, "contents", topContent);
                        _b.sent();
                        history.push("/" + school + "/courses/" + course.id + "/tabs/" + newTab.id + "/drafts/" + draftId + "/edit");
                        return [2 /*return*/];
                }
            });
        });
    };
    AddTabButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, school = _a.school, course = _a.course, branch = _a.branch;
        var _b = this.state, editingName = _b.editingName, name = _b.name;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { onClick: editingName ? null : function (ev) { return _this.setState({ editingName: true, name: '' }); } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-plus", "aria-hidden": "true" }),
                !editingName ?
                    ' ' + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ny flik"], ["Ny flik"]))) :
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", style: { color: "black" }, autoFocus: true, placeholder: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Fliknamn"], ["Fliknamn"]))), value: name, size: 30, onChange: function (ev) { return _this.setState({ name: ev.target.value }); }, onKeyPress: function (ev) {
                            if (ev.key === 'Enter') {
                                _this.createTab(name);
                            }
                        }, onBlur: function () { return _this.setState({ editingName: false }); } })));
    };
    return AddTabButton;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
var AddTabButtonWithRouter = Object(react_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(AddTabButton);

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/clickable-school-div.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/clickable-school-div.tsx ***!
  \*********************************************************************************/
/*! exports provided: ClickableSchoolDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickableSchoolDiv", function() { return ClickableSchoolDiv; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _logic_get_draft_id__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logic/get-draft-id */ "./src/components/course-builder-ks/logic/get-draft-id.ts");









var ClickableSchoolDivWithRouter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClickableSchoolDivWithRouter, _super);
    function ClickableSchoolDivWithRouter(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            open: false
        };
        return _this;
    }
    ClickableSchoolDivWithRouter.prototype.open = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var schools;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ open: true });
                        if (!!this.state.schools) return [3 /*break*/, 2];
                        return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].schools
                                .tags("primary")
                                .map(function (_a) {
                                var id = _a.id, name = _a.name, displayName = _a.displayName;
                                return ({ id: id, name: name, displayName: displayName || name || "<namnlös>" });
                            })
                                .toValue().load()];
                    case 1:
                        schools = _a.sent();
                        this.setState({ schools: schools });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ClickableSchoolDivWithRouter.prototype.close = function () {
        this.setState({ open: false });
    };
    ClickableSchoolDivWithRouter.prototype.selectSchool = function (school) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            function getRoute() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    var otherDraftId, _a;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = draftId;
                                if (!_a) return [3 /*break*/, 2];
                                return [4 /*yield*/, Object(_logic_get_draft_id__WEBPACK_IMPORTED_MODULE_8__["getDraftId"])(school, courseId).load()];
                            case 1:
                                _a = (_b.sent());
                                _b.label = 2;
                            case 2:
                                otherDraftId = _a;
                                if (taskId && contentId && otherDraftId && (Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["isAdminOrTeacherAtSchool"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["default"].currentUser, school) || canImpersonate)) {
                                    return [2 /*return*/, "/" + school + "/courses/" + courseId + "/tabs/" + (tabId || "$") + "/contents/" + contentId + "/tasks/" + taskId + "/drafts/" + otherDraftId + "/edit"];
                                }
                                else if (taskId) {
                                    return [2 /*return*/, "/" + school + "/courses/" + courseId + "/tabs/" + (tabId || "$") + "/tasks/" + taskId];
                                }
                                else if (otherDraftId && (Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["isAdminOrTeacherAtSchool"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["default"].currentUser, school) || canImpersonate)) {
                                    return [2 /*return*/, "/" + school + "/courses/" + courseId + "/tabs/" + (tabId || "$") + "/drafts/" + otherDraftId + "/edit"];
                                }
                                else {
                                    return [2 /*return*/, "/" + school + "/courses/" + courseId + "/tabs/" + (tabId || "$")];
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            }
            var _a, match, history, _b, courseId, tabId, draftId, contentId, taskId, canImpersonate, route, baseUrl;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, match = _a.match, history = _a.history;
                        _b = match.params, courseId = _b.courseId, tabId = _b.tabId, draftId = _b.draftId, contentId = _b.contentId, taskId = _b.taskId;
                        canImpersonate = _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["default"].currentUser.roles.includes("ADMIN") || // Is admin
                            location.search.includes('role=');
                        if (!(school !== this.props.school)) return [3 /*break*/, 2];
                        return [4 /*yield*/, getRoute()];
                    case 1:
                        route = _c.sent();
                        if (canImpersonate) {
                            baseUrl = Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["preserveImpersonationQuery"])(location.pathname, school === 'standard' ?
                                { role: undefined, school: school } :
                                { role: "EMPLOYEE", school: school });
                            location.href = baseUrl + "#" + route;
                        }
                        else {
                            // Not an admin, just redirect to the route and normal access control will apply
                            history.push(route);
                        }
                        _c.label = 2;
                    case 2:
                        this.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClickableSchoolDivWithRouter.prototype.render = function () {
        var _this = this;
        var _a = this.props, school = _a.school, draftId = _a.draftId, displayName = _a.displayName;
        var _b = this.state, open = _b.open, schools = _b.schools;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { tabIndex: 1, style: { outline: 0 }, onBlur: function () { return _this.close(); } }, !open ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", { onClick: function () { return _this.open(); } }, school !== "standard" ? (displayName || school) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Standard"], ["Standard"])))),
            draftId && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "pageSideText" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Arbetsversion"], ["Arbetsversion"]))))) : !schools ?
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_3__["TimeoutSpinner"], null) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", { onClick: function () { return _this.close(); } }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["V\u00E4xla skola"], ["V\u00E4xla skola"])))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", { onClick: function () { return _this.selectSchool("standard"); } }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Standard"], ["Standard"])))),
                schools.filter(function (_a) {
                    var name = _a.name;
                    return name !== 'standard';
                })
                    .sort(function (a, b) { return a.displayName.localeCompare(b.displayName, ["sv", "en"]); })
                    .map(function (_a) {
                    var id = _a.id, school = _a.name, displayName = _a.displayName;
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", { key: id, onClick: function () { return _this.selectSchool(school); } }, displayName);
                }))));
    };
    return ClickableSchoolDivWithRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
var ClickableSchoolDiv = Object(react_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(ClickableSchoolDivWithRouter);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-area.tsx":
/*!************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-area.tsx ***!
  \************************************************************************/
/*! exports provided: CourseArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseArea", function() { return CourseArea; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _common_two_columns_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/two-columns-page */ "./src/components/course-builder-ks/common/two-columns-page.tsx");
/* harmony import */ var _weekplanner_weekplanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../weekplanner/weekplanner */ "./src/components/weekplanner/weekplanner.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _course_contents_resource_list_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course-contents/resource-list-view */ "./src/components/course-builder-ks/viewer-editor/course-contents/resource-list-view.tsx");
/* harmony import */ var _left_course_area__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./left-course-area */ "./src/components/course-builder-ks/viewer-editor/left-course-area.tsx");
/* harmony import */ var _course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../course-builder/sub-components/ellipsis-loader */ "./src/components/course-builder/sub-components/ellipsis-loader.tsx");
/* harmony import */ var _version_history_draft_delta_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./version-history/draft-delta-view */ "./src/components/course-builder-ks/viewer-editor/version-history/draft-delta-view.tsx");













var CourseArea = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(function (_a) {
    var school = _a.school, courseId = _a.courseId, draftId = _a.draftId, course = _a.course, branch = _a.branch, tabs = _a.tabs, activeTab = _a.activeTab, editMode = _a.editMode, history = _a.history, block = _a.block;
    var tab = tabs.filter(function (tab) { return tab.id === activeTab; })[0] || tabs[0];
    var currentTabResources = tab &&
        branch.courseContents.hasEdgesFrom([tab.id]).filter(function (x) { return x.type === "resource-list"; });
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_two_columns_page__WEBPACK_IMPORTED_MODULE_3__["TwoColumnsPage"], { right: editMode && draftId ?
            // In edit mode, show the draft edits to the right
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, tab && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_10__["TimeoutEllipsisLoader"], null) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_version_history_draft_delta_view__WEBPACK_IMPORTED_MODULE_11__["DraftDeltaView"], { allowCherryPick: school !== 'standard', branchId: draftId, partTagPrefix: course.type === 'step-course' ?
                        "blockStep:" :
                        "tab:", partTag: course.type === 'step-course' ?
                        "blockStep:" + block.id + ":" + tab.stepNo :
                        "tab:" + tab.id, partLabel: course.type === 'step-course' ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["steg ", ""], ["steg ", ""])), tab.stepNo) :
                        tab.name }))) :
            // In view mode, show WeekPlanner to the right
            // In view mode, show Resources to the right
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_weekplanner_weekplanner__WEBPACK_IMPORTED_MODULE_4__["WeekPlanner"], { env: _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"], viewCourseUrl: _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_6__["default"].KED_COURSE_VIEWER_URL }),
                currentTabResources && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_contents_resource_list_view__WEBPACK_IMPORTED_MODULE_8__["ResourceListView"], { resourceListContents: currentTabResources })), rightWidth: 5, left: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_10__["TimeoutEllipsisLoader"], null) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_left_course_area__WEBPACK_IMPORTED_MODULE_9__["LeftCourseArea"], { courseId: courseId, editMode: editMode, school: school, course: course, branch: branch, tab: tab, draftId: draftId, block: block, activeTab: activeTab })) });
});
var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-contents/add-task-button.tsx":
/*!********************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-contents/add-task-button.tsx ***!
  \********************************************************************************************/
/*! exports provided: AddTaskButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskButton", function() { return AddTaskButtonWithRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logic/is-ked-staff */ "./src/components/course-builder-ks/logic/is-ked-staff.ts");
/* harmony import */ var _logic_compute_task_tags_and_subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../logic/compute-task-tags-and-subject */ "./src/components/course-builder-ks/logic/compute-task-tags-and-subject.ts");







var AddTaskButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AddTaskButton, _super);
    function AddTaskButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            editingName: false,
            name: ""
        };
        return _this;
    }
    AddTaskButton.prototype.createTask = function (taskName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, branch, draftId, course, tab, school, content, history, block, learningGoal, _b, tags, subject, newTask;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.setState({ editingName: false, name: "" });
                        _a = this.props, branch = _a.branch, draftId = _a.draftId, course = _a.course, tab = _a.tab, school = _a.school, content = _a.content, history = _a.history, block = _a.block, learningGoal = _a.learningGoal;
                        _b = Object(_logic_compute_task_tags_and_subject__WEBPACK_IMPORTED_MODULE_6__["computeTaskTagsAndSubject"])(course, tab, block), tags = _b.tags, subject = _b.subject;
                        newTask = {
                            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
                            tags: tags,
                            name: taskName,
                            acl: ["role:USER:R", "schoolRole:" + school + "/EMPLOYEE:S"],
                            url: "",
                            taskType: 'task',
                            learningGoal: learningGoal,
                            futureAbilities: [],
                            resources: [],
                            subject: subject
                        };
                        branch.courseContents.addRelated(content, "tasks", newTask);
                        return [4 /*yield*/, branch.saveNow()];
                    case 1:
                        _c.sent();
                        history.push("/" + school + "/courses/" + course.id + "/tabs/" + tab.id + "/contents/" + content.id + "/tasks/" + newTask.id + "/drafts/" + draftId + "/edit");
                        return [2 /*return*/];
                }
            });
        });
    };
    AddTaskButton.prototype.render = function () {
        var _this = this;
        var _a = this.state, editingName = _a.editingName, name = _a.name;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn", onClick: editingName ? null : function (ev) { return _this.setState({ editingName: true, name: '' }); } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-plus", "aria-hidden": "true" }),
                !editingName ?
                    ' ' + (Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_5__["isKedStaff"])() ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till uppgift"], ["L\u00E4gg till uppgift"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till egen uppgift"], ["L\u00E4gg till egen uppgift"])))) :
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", autoFocus: true, placeholder: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppgiftens namn"], ["Uppgiftens namn"]))), value: name, size: 50, onChange: function (ev) { return _this.setState({ name: ev.target.value }); }, onKeyPress: function (ev) {
                            if (ev.key === 'Enter') {
                                _this.createTask(name);
                            }
                        }, onBlur: function () { return _this.setState({ editingName: false }); } })));
    };
    return AddTaskButton;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
var AddTaskButtonWithRouter = Object(react_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(AddTaskButton);

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-contents/content-box.tsx":
/*!****************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-contents/content-box.tsx ***!
  \****************************************************************************************/
/*! exports provided: CourseContentBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseContentBox", function() { return CourseContentBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rich-text */ "./src/components/course-builder-ks/viewer-editor/course-contents/rich-text.tsx");
/* harmony import */ var _learning_tasks_content_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./learning-tasks-content-box */ "./src/components/course-builder-ks/viewer-editor/course-contents/learning-tasks-content-box.tsx");
/* harmony import */ var _embedded_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./embedded-html */ "./src/components/course-builder-ks/viewer-editor/course-contents/embedded-html.tsx");
/* harmony import */ var _word_bank_content_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./word-bank-content-box */ "./src/components/course-builder-ks/viewer-editor/course-contents/word-bank-content-box.tsx");






/*export const ContentBox = ({repo, content}: CourseContentProps)=> (
  <div className={["course-content-box", "ked_boxed"].join(' ')} style={{position: 'relative'}}>
    <ConcreteComponent {...{repo, content}} />
    <div style={{position: 'absolute', top: 0, right: 0}}>
        {moduleOrderedIndex > 0 && <span>
          <i className="fas fa-arrow-circle-up selectable"
            aria-hidden="true"
            onClick={()=>this.props.onReorder(-1)} /> </span>}
        {moduleOrderedIndex < course.modules.length - 1 && <span>
          <i className="fas fa-arrow-circle-down selectable"
            aria-hidden="true"
            onClick={()=>this.props.onReorder(1)} /> </span>}
        <RemoveItem
          title="Ta bort modulen"
          style={{display: 'inline-block'}}
          onClick={()=>confirm(L`Ta bort modul ${module.name}?`) && host.update({modules: {$splice: [[moduleIndex, 1]]}})} />
      </div>
  </div>
)*/
function CourseContentBox(_a) {
    var repo = _a.repo, content = _a.content, siblingContents = _a.siblingContents, editMode = _a.editMode, course = _a.course, draftId = _a.draftId, school = _a.school, courseTab = _a.courseTab, reportNumChars = _a.reportNumChars, maxChars = _a.maxChars, block = _a.block;
    switch (content.type) {
        case "rich-text": return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_rich_text__WEBPACK_IMPORTED_MODULE_2__["RichTextContentBox"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, { repo: repo, content: content, editMode: editMode, reportNumChars: reportNumChars, maxChars: maxChars, course: course }));
        case "learning-goals": return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_learning_tasks_content_box__WEBPACK_IMPORTED_MODULE_3__["LearningTasksContentBox"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, {
            repo: repo,
            content: content,
            editMode: editMode,
            course: course,
            draftId: draftId,
            courseTab: courseTab,
            school: school,
            block: block
        }));
        case "embedded-html": return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_embedded_html__WEBPACK_IMPORTED_MODULE_4__["EmbeddedHTMLContentBox"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, { repo: repo, content: content, editMode: editMode, reportNumChars: reportNumChars, maxChars: maxChars }));
        case "word-bank": return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_word_bank_content_box__WEBPACK_IMPORTED_MODULE_5__["WordBankContentBox"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, {
            repo: repo,
            editMode: editMode,
            content: content,
            siblingWordBanks: siblingContents.filter(function (c) { return c.type === 'word-bank' && c.id !== content.id; }),
            course: course,
            courseTab: courseTab
        }));
        default: return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
            "Ok\u00E4nd inneh\u00E5llstyp: ",
            content.type);
    }
}


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-contents/course-content-types.ts":
/*!************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-contents/course-content-types.ts ***!
  \************************************************************************************************/
/*! exports provided: COURSE_CONTENT_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COURSE_CONTENT_TYPES", function() { return COURSE_CONTENT_TYPES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");


var COURSE_CONTENT_TYPES = {
    "rich-text": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Textruta"], ["Textruta"]))),
    "youtube-movie": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Youtube film"], ["Youtube film"]))),
    "learning-goals": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4randem\u00E5l och uppgifter"], ["L\u00E4randem\u00E5l och uppgifter"]))),
    "resource-list": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Resurslista"], ["Resurslista"]))),
    "embedded-html": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Inb\u00E4ddad HTML"], ["Inb\u00E4ddad HTML"]))),
    "word-bank": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ordbank"], ["Ordbank"])))
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-contents/embedded-html.tsx":
/*!******************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-contents/embedded-html.tsx ***!
  \******************************************************************************************/
/*! exports provided: EmbeddedHTMLContentBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddedHTMLContentBox", function() { return EmbeddedHTMLContentBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/is-ked-staff */ "./src/components/course-builder-ks/logic/is-ked-staff.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");




var EmbeddedHTMLContentBox = function (_a) {
    var content = _a.content, repo = _a.repo, editMode = _a.editMode, reportNumChars = _a.reportNumChars, maxChars = _a.maxChars;
    return editMode && (!content.locked || Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_2__["isKedStaff"])()) ?
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Inb\u00E4ddat material"], ["Inb\u00E4ddat material"])))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Klipp in HTML kod nedan"], ["Klipp in HTML kod nedan"])))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", { style: { width: "100%", height: "100px" }, value: content.html, onChange: function (_a) {
                    var html = _a.target.value;
                    if (html.length > maxChars)
                        return;
                    repo.courseContents.update(content, { html: html });
                    reportNumChars(html.length);
                } })) :
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { dangerouslySetInnerHTML: { __html: content.html } });
};
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-contents/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-contents/index.ts ***!
  \*********************************************************************************/
/*! exports provided: COURSE_CONTENT_TYPES, CourseContentBox, RichTextContentBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _course_content_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-content-types */ "./src/components/course-builder-ks/viewer-editor/course-contents/course-content-types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COURSE_CONTENT_TYPES", function() { return _course_content_types__WEBPACK_IMPORTED_MODULE_0__["COURSE_CONTENT_TYPES"]; });

/* harmony import */ var _content_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-box */ "./src/components/course-builder-ks/viewer-editor/course-contents/content-box.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CourseContentBox", function() { return _content_box__WEBPACK_IMPORTED_MODULE_1__["CourseContentBox"]; });

/* harmony import */ var _rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rich-text */ "./src/components/course-builder-ks/viewer-editor/course-contents/rich-text.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextContentBox", function() { return _rich_text__WEBPACK_IMPORTED_MODULE_2__["RichTextContentBox"]; });






/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-contents/learning-tasks-content-box.tsx":
/*!*******************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-contents/learning-tasks-content-box.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: LearningTasksContentBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningTasksContentBox", function() { return LearningTasksContentBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _learning_tasks_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./learning-tasks-settings */ "./src/components/course-builder-ks/viewer-editor/course-contents/learning-tasks-settings.tsx");
/* harmony import */ var _logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../logic/is-ked-staff */ "./src/components/course-builder-ks/logic/is-ked-staff.ts");
/* harmony import */ var _learning_tasks_with_common_goals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./learning-tasks-with-common-goals */ "./src/components/course-builder-ks/viewer-editor/course-contents/learning-tasks-with-common-goals.tsx");
/* harmony import */ var _learning_tasks_with_separate_goals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./learning-tasks-with-separate-goals */ "./src/components/course-builder-ks/viewer-editor/course-contents/learning-tasks-with-separate-goals.tsx");







var LearningTasksContentBox = function (_a) {
    var content = _a.content, editMode = _a.editMode, repo = _a.repo, course = _a.course, school = _a.school, draftId = _a.draftId, courseTab = _a.courseTab, block = _a.block;
    var hasCommonLearningGoals = content.hasCommonLearningGoals, commonLearningGoals = content.commonLearningGoals, tasks = content.tasks;
    var refinedLearningGoals = commonLearningGoals
        .map(function (goal) { return goal.trim(); })
        .filter(function (goal) { return !!goal; });
    // Requirements from KS to make learning tasks editable:
    // 1. In edit mode, for all theme courses, for teachers, but not for step-courses by default.
    var isLearningGoalsEditable = editMode &&
        courseTab.tabClass !== "mission-tab" &&
        (Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_4__["isKedStaff"])() || course.type === "theme-course");
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "ked_boxed" },
        isLearningGoalsEditable ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_learning_tasks_settings__WEBPACK_IMPORTED_MODULE_3__["LearningTasksSettings"], { course: course, content: content, repo: repo, tab: courseTab })) : courseTab.tabClass === "mission-tab" ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppdrag"], ["Uppdrag"]))))) : course.type === "theme-course" ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppgifter"], ["Uppgifter"]))))) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4randem\u00E5l och uppgifter"], ["L\u00E4randem\u00E5l och uppgifter"]))))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null),
        hasCommonLearningGoals && courseTab.tabClass !== "mission-tab" ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_learning_tasks_with_common_goals__WEBPACK_IMPORTED_MODULE_5__["LearningTasksWithCommonGoals"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, {
            content: content,
            editMode: editMode,
            repo: repo,
            course: course,
            school: school,
            draftId: draftId,
            courseTab: courseTab,
            block: block,
            learningGoals: refinedLearningGoals
        }))) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_learning_tasks_with_separate_goals__WEBPACK_IMPORTED_MODULE_6__["LearningTasksWithSeparateGoals"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, {
            content: content,
            editMode: editMode,
            repo: repo,
            course: course,
            school: school,
            draftId: draftId,
            courseTab: courseTab,
            block: block,
            learningGoals: refinedLearningGoals
        })))));
};
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-contents/learning-tasks-settings.tsx":
/*!****************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-contents/learning-tasks-settings.tsx ***!
  \****************************************************************************************************/
/*! exports provided: LearningTasksSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningTasksSettings", function() { return LearningTasksSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utility-components/align-horizontal */ "./src/components/utility-components/align-horizontal.tsx");
/* harmony import */ var _utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utility-components/horizontal-item */ "./src/components/utility-components/horizontal-item.tsx");





var LearningTasksSettings = function (_a) {
    var tab = _a.tab, content = _a.content, repo = _a.repo;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4randem\u00E5l och uppgifter"], ["L\u00E4randem\u00E5l och uppgifter"])))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_3__["AlignHorizontal"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_4__["HorizontalItem"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: "checkbox", checked: content.hasCommonLearningGoals, onChange: function (ev) { return repo.courseContents.update(content, { hasCommonLearningGoals: !!ev.target.checked }); } })),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_4__["HorizontalItem"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                        "\u00A0", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Specificera gemensamma l\u00E4randem\u00E5l f\u00F6r samtliga uppgifter"], ["Specificera gemensamma l\u00E4randem\u00E5l f\u00F6r samtliga uppgifter"]))))))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, content.hasCommonLearningGoals ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ange de gemensamma l\u00E4randem\u00E5len. Ange ett l\u00E4randem\u00E5l per rad."], ["Ange de gemensamma l\u00E4randem\u00E5len. Ange ett l\u00E4randem\u00E5l per rad."]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ange ett l\u00E4randem\u00E5l per rad."], ["Ange ett l\u00E4randem\u00E5l per rad."])))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", { className: "learning-goal-box", value: content.commonLearningGoals.join('\n'), onChange: function (ev) { return repo.courseContents.update(content, {
                    commonLearningGoals: ev.target.value.split('\n')
                }); } })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-contents/learning-tasks-with-common-goals.tsx":
/*!*************************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-contents/learning-tasks-with-common-goals.tsx ***!
  \*************************************************************************************************************/
/*! exports provided: LearningTasksWithCommonGoals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningTasksWithCommonGoals", function() { return LearningTasksWithCommonGoals; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _course_viewer_subcomponents_task_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../course-viewer/subcomponents/task-list */ "./src/components/course-viewer/subcomponents/task-list.tsx");
/* harmony import */ var _add_task_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-task-button */ "./src/components/course-builder-ks/viewer-editor/course-contents/add-task-button.tsx");
/* harmony import */ var _utility_components_sortable_task_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utility-components/sortable-task-list */ "./src/components/utility-components/sortable-task-list.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _logic_task_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../logic/task-order */ "./src/components/course-builder-ks/logic/task-order.ts");







var LearningTasksWithCommonGoals = function (_a) {
    var school = _a.school, repo = _a.repo, content = _a.content, draftId = _a.draftId, editMode = _a.editMode, course = _a.course, courseTab = _a.courseTab, learningGoals = _a.learningGoals, block = _a.block;
    var tasks = Object(_logic_task_order__WEBPACK_IMPORTED_MODULE_6__["getSortedTasks"])(content);
    var subjectToTasksLookup = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["arrayToLookup"])(tasks, function (t) { return t.subject || ""; });
    var subject = course.type === 'step-course' ?
        course.subject :
        courseTab.subject;
    if (subject && !subjectToTasksLookup[subject.subjectName]) {
        // Make sure we have at least one subject heading if task list is empty:
        subjectToTasksLookup[subject.subjectName] = [];
    }
    // TODO: Kolla här och i learning-tasks-with-separate-goals.
    //  * Behövs subject-lookup?
    //  * Kan vi bryta vy-varianten från edit varianten? (i båda fallen?)
    // Sedan:
    //  * Implementera edit varianterna. Lägg till.
    //  * Implementera sortering funktionalitet i SortableTaskList.
    //  * I all vyer av tasks (subject planner + courseviewer): 
    //    * Gå igenom alla task i den ordningen dom redan är i
    //    * 
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object.keys(subjectToTasksLookup).map(function (subject) {
        var taskList = subjectToTasksLookup[subject];
        var learningModuleTasks = taskList.map(function (task) { return ({
            id: task.id,
            name: task.name,
            url: editMode ?
                "#/" + school + "/courses/" + course.id + "/tabs/" + courseTab.id + "/contents/" + content.id + "/tasks/" + task.id + "/drafts/" + draftId + "/edit" :
                draftId ?
                    "#/" + school + "/courses/" + course.id + "/tabs/" + courseTab.id + "/contents/" + content.id + "/tasks/" + task.id + "/drafts/" + draftId :
                    "#/" + school + "/courses/" + course.id + "/tabs/" + courseTab.id + "/tasks/" + task.id,
            courseName: course.name,
            learningGoal: subject,
            step: courseTab.type === 'step-course-tab' ? courseTab.stepNo : undefined,
            task: task,
            courseInfo: {
                school: school,
                course: course.id,
                tab: courseTab.id
            }
        }); });
        function linkToTask(task) {
            return "/" + school + "/courses/" + course.id + "/tabs/" + courseTab.id + "/contents/" + content.id + "/tasks/" + task.id + "/drafts/" + draftId + "/edit";
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { key: subject },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, subject),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, learningGoals.map(function (lg) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { key: lg }, lg); })),
            !editMode ?
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_course_viewer_subcomponents_task_list__WEBPACK_IMPORTED_MODULE_2__["TaskList"], { learningTasks: learningModuleTasks }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utility_components_sortable_task_list__WEBPACK_IMPORTED_MODULE_4__["SortableTaskList"], { taskMetas: learningModuleTasks.map(function (_a) {
                        var task = _a.task;
                        return ({ task: task, isTaskOwner: true });
                    }), renderEditLink: function (_a) {
                        var task = _a.task;
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { to: linkToTask(task), className: "editItem" }),
                            "\u00A0");
                    }, renderLink: function (_a) {
                        var task = _a.task;
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { to: linkToTask(task) }, task.name);
                    }, onSort: function (source, target, placement) {
                        var updatedOrder = Object(_logic_task_order__WEBPACK_IMPORTED_MODULE_6__["computeUpdatedOrder"])(content.tasks, content.taskOrder, source, target, placement, { appendLeftovers: true });
                        repo.courseContents.update(content, { taskOrder: updatedOrder });
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_add_task_button__WEBPACK_IMPORTED_MODULE_3__["AddTaskButton"], { branch: repo, content: content, course: course, school: school, draftId: draftId, tab: courseTab, block: block, learningGoal: "" }))));
    }));
};


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-contents/learning-tasks-with-separate-goals.tsx":
/*!***************************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-contents/learning-tasks-with-separate-goals.tsx ***!
  \***************************************************************************************************************/
/*! exports provided: LearningTasksWithSeparateGoals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningTasksWithSeparateGoals", function() { return LearningTasksWithSeparateGoals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _course_viewer_subcomponents_task_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../course-viewer/subcomponents/task-list */ "./src/components/course-viewer/subcomponents/task-list.tsx");
/* harmony import */ var _add_task_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-task-button */ "./src/components/course-builder-ks/viewer-editor/course-contents/add-task-button.tsx");
/* harmony import */ var _utility_components_sortable_task_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utility-components/sortable-task-list */ "./src/components/utility-components/sortable-task-list.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _logic_task_order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../logic/task-order */ "./src/components/course-builder-ks/logic/task-order.ts");








var LearningTasksWithSeparateGoals = function (_a) {
    var school = _a.school, repo = _a.repo, content = _a.content, draftId = _a.draftId, editMode = _a.editMode, course = _a.course, courseTab = _a.courseTab, learningGoals = _a.learningGoals, block = _a.block;
    var tasks = Object(_logic_task_order__WEBPACK_IMPORTED_MODULE_7__["getSortedTasks"])(content);
    var cathegorizedTasks = {};
    var goalToTasksLookup = learningGoals.reduce(function (res, goal) {
        res[goal] = tasks.filter(function (task) {
            if (task.learningGoal && task.learningGoal.split('\n')
                .map(function (line) { return line.trim().toLowerCase(); })
                .includes(goal.toLowerCase())) {
                cathegorizedTasks[task.id] = true;
                return true;
            }
        });
        return res;
    }, {});
    var uncathegorizedTasks = tasks.filter(function (t) { return !cathegorizedTasks[t.id]; });
    if (courseTab.tabClass === 'mission-tab' || tasks.length === 0) {
        goalToTasksLookup[''] = uncathegorizedTasks;
    }
    else if (uncathegorizedTasks.length > 0) {
        goalToTasksLookup[Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00D6vergripande"], ["\u00D6vergripande"])))] = uncathegorizedTasks;
    }
    function linkToTask(task) {
        return "/" + school + "/courses/" + course.id + "/tabs/" + courseTab.id + "/contents/" + content.id + "/tasks/" + task.id + "/drafts/" + draftId + "/edit";
    }
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object.keys(goalToTasksLookup).map(function (goal) {
        var taskList = goalToTasksLookup[goal];
        var learningModuleTasks = taskList.map(function (task) { return ({
            id: task.id,
            name: task.name,
            url: editMode ?
                "#/" + school + "/courses/" + course.id + "/tabs/" + courseTab.id + "/contents/" + content.id + "/tasks/" + task.id + "/drafts/" + draftId + "/edit" :
                draftId ?
                    "#/" + school + "/courses/" + course.id + "/tabs/" + courseTab.id + "/contents/" + content.id + "/tasks/" + task.id + "/drafts/" + draftId :
                    "#/" + school + "/courses/" + course.id + "/tabs/" + courseTab.id + "/tasks/" + task.id,
            courseName: course.name,
            learningGoal: courseTab.tabClass === 'mission-tab' ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppdrag"], ["Uppdrag"]))) : goal,
            step: courseTab.type === 'step-course-tab' ? courseTab.stepNo : undefined,
            task: task,
            courseInfo: {
                school: school,
                course: course.id,
                tab: courseTab.id
            }
        }); });
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { key: goal },
            goal && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, goal),
            !editMode ?
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_viewer_subcomponents_task_list__WEBPACK_IMPORTED_MODULE_3__["TaskList"], { learningTasks: learningModuleTasks }) :
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_sortable_task_list__WEBPACK_IMPORTED_MODULE_5__["SortableTaskList"], { taskMetas: learningModuleTasks.map(function (_a) {
                            var task = _a.task;
                            return ({ task: task, isTaskOwner: true });
                        }), renderEditLink: function (_a) {
                            var task = _a.task;
                            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], { to: linkToTask(task), className: "editItem" }),
                                "\u00A0");
                        }, renderLink: function (_a) {
                            var task = _a.task;
                            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], { to: linkToTask(task) }, task.name);
                        }, onSort: function (source, target, placement) {
                            var updatedOrder = Object(_logic_task_order__WEBPACK_IMPORTED_MODULE_7__["computeUpdatedOrder"])(content.tasks, content.taskOrder, source, target, placement, { appendLeftovers: true });
                            repo.courseContents.update(content, { taskOrder: updatedOrder });
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_add_task_button__WEBPACK_IMPORTED_MODULE_4__["AddTaskButton"], { branch: repo, content: content, course: course, school: school, draftId: draftId, tab: courseTab, block: block, learningGoal: goal }))));
    }));
};
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-contents/resource-list-view.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-contents/resource-list-view.tsx ***!
  \***********************************************************************************************/
/*! exports provided: ResourceListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceListView", function() { return ResourceListView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utility-components/live-query-view */ "./src/components/utility-components/live-query-view.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");



var ResourceListView = Object(_utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_1__["liveQueryView"])(function (_a) {
    var resourceListContents = _a.resourceListContents;
    return resourceListContents
        .orderBy("order")
        .toValue()
        .map(function (contents) {
        var resources = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["flatten"])(contents.map(function (content) { return content.resources.map(function (val, index) { val.order = val.order == null ? new Date().setHours(index) : val.order; return val; }) || []; }));
        if (resources.length === 0)
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "ked_boxed" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Resurser"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "taskContainer" }, resources.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareProps"])("order")).map(function (res) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: res.url, target: "_blank" }, res.name)))); })))));
    });
});


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-contents/rich-text.tsx":
/*!**************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-contents/rich-text.tsx ***!
  \**************************************************************************************/
/*! exports provided: RichTextContentBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextContentBox", function() { return RichTextContentBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utility-components/wysiwyg */ "./src/components/utility-components/wysiwyg/index.tsx");
/* harmony import */ var _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility-components/wysiwyg/actions-sv */ "./src/components/utility-components/wysiwyg/actions-sv.ts");
/* harmony import */ var _logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logic/is-ked-staff */ "./src/components/course-builder-ks/logic/is-ked-staff.ts");
/* harmony import */ var _utility_components_wysiwyg_wash_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utility-components/wysiwyg/wash-html */ "./src/components/utility-components/wysiwyg/wash-html.ts");





var RichTextContentBox = function (_a) {
    var content = _a.content, repo = _a.repo, editMode = _a.editMode, reportNumChars = _a.reportNumChars, maxChars = _a.maxChars, course = _a.course;
    return editMode ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_1__["Wysiwyg"], { html: content.html, defaultActions: _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_2__["default"], readOnly: !editMode || (content.locked && !Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_3__["isKedStaff"])() && course.type !== "theme-course"), reportNumChars: reportNumChars, maxChars: maxChars, actions: [
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "heading2",
                "heading3",
                "olist",
                "ulist",
                "outdent",
                "indent",
                "line",
                "link",
                "image",
                "clear"
            ], onChange: editMode && (function (html) { return repo.courseContents.update(content, { html: html }); }) })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "rich-text-readonly", dangerouslySetInnerHTML: { __html: Object(_utility_components_wysiwyg_wash_html__WEBPACK_IMPORTED_MODULE_4__["washHtml"])(content.html) } }));
};


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-contents/word-bank-content-box.tsx":
/*!**************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-contents/word-bank-content-box.tsx ***!
  \**************************************************************************************************/
/*! exports provided: WordBankContentBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordBankContentBox", function() { return WordBankContentBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var _word_bank_content_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./word-bank-content-settings */ "./src/components/course-builder-ks/viewer-editor/course-contents/word-bank-content-settings.tsx");
/* harmony import */ var _course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../course-builder/sub-components/ellipsis-loader */ "./src/components/course-builder/sub-components/ellipsis-loader.tsx");
/* harmony import */ var _logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logic/is-ked-staff */ "./src/components/course-builder-ks/logic/is-ked-staff.ts");






function WordBankContentBox(_a) {
    var repo = _a.repo, content = _a.content, siblingWordBanks = _a.siblingWordBanks, editMode = _a.editMode, course = _a.course, courseTab = _a.courseTab;
    var selectedWordBank = content.selectedWordBank;
    var subjectName = course.subject.subjectName;
    var stepNo = courseTab.stepNo;
    var iframeSrc = selectedWordBank && _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_2__["cfg"].KED_WORDBANKS_URL + "?preview=true&subject=" + subjectName + "&step=" + stepNo + "&list=" + selectedWordBank.key;
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(200), 2), iframeHeight = _b[0], setIframeHeight = _b[1];
    var iframeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
    var wordBanksAlreadyAdded = siblingWordBanks.map(function (c) { return c.selectedWordBank && c.selectedWordBank.key; })
        .filter(function (key) { return !!key; });
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return setIframeHeight(200); }, [selectedWordBank && selectedWordBank.key]); // Reset iframe height whenever selected word bank changes and let onload fix it.
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        editMode && (!content.locked || Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_5__["isKedStaff"])()) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_4__["TimeoutEllipsisLoader"], null) },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_word_bank_content_settings__WEBPACK_IMPORTED_MODULE_3__["WordBankContentSettings"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, { subjectName: subjectName, stepNo: stepNo, wordBanksAlreadyAdded: wordBanksAlreadyAdded }, { selectedWordBank: selectedWordBank, onChange: function (_a) {
                    var name = _a.name, key = _a.key;
                    repo.courseContents.update(content, { selectedWordBank: { name: name, key: key } });
                } }))),
        selectedWordBank &&
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", { ref: iframeRef, scrolling: "no", frameBorder: "0", style: {
                    width: "100%",
                    height: iframeHeight,
                    padding: 0,
                    margin: 0
                }, src: iframeSrc, onLoad: function () {
                    setIframeHeight(iframeRef.current.contentWindow.document.body.scrollHeight);
                } }));
}


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-contents/word-bank-content-settings.tsx":
/*!*******************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-contents/word-bank-content-settings.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: WordBankContentSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordBankContentSettings", function() { return WordBankContentSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var fetch_suspense__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fetch-suspense */ "./node_modules/fetch-suspense/fetch-suspense.js");
/* harmony import */ var fetch_suspense__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fetch_suspense__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");






function WordBankContentSettings(_a) {
    var subjectName = _a.subjectName, stepNo = _a.stepNo, selectedWordBank = _a.selectedWordBank, wordBanksAlreadyAdded = _a.wordBanksAlreadyAdded, onChange = _a.onChange;
    var apiUrl = _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_2__["cfg"].KED_ENUM_WORDBANKS_URL + "?sv.contenttype=application/json&subject=" + subjectName + "&step=" + stepNo;
    var availableWordBanks = fetch_suspense__WEBPACK_IMPORTED_MODULE_3___default()(apiUrl);
    // Filter out word banks that was already added to the same tab
    availableWordBanks = availableWordBanks.filter(function (_a) {
        var order = _a.order;
        return (selectedWordBank && order === selectedWordBank.key) ||
            !wordBanksAlreadyAdded ||
            !wordBanksAlreadyAdded.includes(order);
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, selectedWordBank ? selectedWordBank.name : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["V\u00E4lj ordbank"], ["V\u00E4lj ordbank"])))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], { isMulti: false, placeholder: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["V\u00E4lj bland ordbanker f\u00F6r ", ", steg ", ""], ["V\u00E4lj bland ordbanker f\u00F6r ", ", steg ", ""])), subjectName, stepNo), noOptionsMessage: function () { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kunde inte hitta tillg\u00E4ngliga ordbanker f\u00F6r ", ", steg ", ""], ["Kunde inte hitta tillg\u00E4ngliga ordbanker f\u00F6r ", ", steg ", ""])), subjectName, stepNo); }, options: availableWordBanks.map(function (_a) {
                var name = _a.name, id = _a.id, order = _a.order, url = _a.url;
                return ({ label: name, value: order });
            }), value: selectedWordBank && { label: selectedWordBank.name, value: selectedWordBank.key }, onChange: function (option) { return onChange({ name: option.label, key: option.value }); } }));
}
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-tab-area.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-tab-area.tsx ***!
  \****************************************************************************/
/*! exports provided: CourseTabArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseTabArea", function() { return CourseTabArea; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _add_content_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-content-button */ "./src/components/course-builder-ks/viewer-editor/add-content-button.tsx");
/* harmony import */ var _logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logic/is-ked-staff */ "./src/components/course-builder-ks/logic/is-ked-staff.ts");
/* harmony import */ var _tab_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-settings */ "./src/components/course-builder-ks/viewer-editor/tab-settings.tsx");
/* harmony import */ var _course_tab_content_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-tab-content-box */ "./src/components/course-builder-ks/viewer-editor/course-tab-content-box.tsx");
/* harmony import */ var _tab_settings_admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab-settings-admin */ "./src/components/course-builder-ks/viewer-editor/tab-settings-admin.tsx");
/* harmony import */ var _resource_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resource-editor */ "./src/components/course-builder-ks/viewer-editor/resource-editor.tsx");
/* harmony import */ var _utility_components_extra_page_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility-components/extra-page-buttons */ "./src/components/utility-components/extra-page-buttons.tsx");










var CourseTabArea = function (_a) {
    var course = _a.course, branch = _a.branch, block = _a.block, tab = _a.tab, editMode = _a.editMode, contents = _a.contents, school = _a.school, draftId = _a.draftId;
    if (!tab) {
        if (editMode)
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Denna kurs saknar inneh\u00E5ll. Skapa ny flik genom knappen ovan"], ["Denna kurs saknar inneh\u00E5ll. Skapa ny flik genom knappen ovan"]))));
        else
            return Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_4__["isKedStaff"])() ?
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Denna kurs saknar inneh\u00E5ll. V\u00E4lj Redigera knappen f\u00F6r att l\u00E4gga till flikar."], ["Denna kurs saknar inneh\u00E5ll. V\u00E4lj Redigera knappen f\u00F6r att l\u00E4gga till flikar."])))) :
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Denna kurs saknar inneh\u00E5ll."], ["Denna kurs saknar inneh\u00E5ll."]))));
    }
    contents = contents.slice().sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareProp"])("order"));
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
        editMode ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_4__["isKedStaff"])() || !tab.locked ?
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_tab_settings__WEBPACK_IMPORTED_MODULE_5__["TabSettings"], { course: course, tab: tab, repo: branch }) :
                null,
            Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_4__["isKedStaff"])() ?
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_tab_settings_admin__WEBPACK_IMPORTED_MODULE_7__["TabSettingsAdmin"], { course: course, tab: tab, repo: branch, block: block }) :
                null) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_extra_page_buttons__WEBPACK_IMPORTED_MODULE_9__["ExtraPageButtons"], null),
        contents.filter(function (c) { return c.type !== "resource-list"; }).map(function (content, contentOrderIndex) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_tab_content_box__WEBPACK_IMPORTED_MODULE_6__["CourseTabContentBox"], { key: content.id, content: content, branch: branch, contentOrderIndex: contentOrderIndex, contents: contents, course: course, draftId: draftId, editMode: editMode, school: school, block: block, tab: tab }); }),
        !!editMode && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_resource_editor__WEBPACK_IMPORTED_MODULE_8__["ResourceEditor"], { schoolName: school, courseId: course.id, tab: tab, repo: branch, contents: contents, block: block }),
        !!editMode && (Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_4__["isKedStaff"])() || !tab.locked) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            tab.tabClass === 'word-bank-tab' &&
                // [ Add Word Bank ] button
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_add_content_button__WEBPACK_IMPORTED_MODULE_3__["AddContentButton"], { type: "word-bank", tab: tab, branch: branch, course: course, schoolName: school, courseBlock: block }),
            tab.tabClass !== 'word-bank-tab' &&
                (tab.tabClass === 'mission-tab' || tab.tabClass === 'subject-tab' || course.type === 'step-course') &&
                !contents.some(function (c) { return c.type === 'learning-goals'; }) &&
                // [ Add Learning Goals ] button
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_add_content_button__WEBPACK_IMPORTED_MODULE_3__["AddContentButton"], { type: "learning-goals", tab: tab, branch: branch, course: course, schoolName: school, courseBlock: block }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_add_content_button__WEBPACK_IMPORTED_MODULE_3__["AddContentButton"], { type: "rich-text", tab: tab, branch: branch, course: course, schoolName: school, courseBlock: block }),
            tab.tabClass === 'intro-tab' || tab.tabClass === 'run-up-tab' &&
                // [ Add Embedded HTML ] button
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_add_content_button__WEBPACK_IMPORTED_MODULE_3__["AddContentButton"], { type: "embedded-html", tab: tab, branch: branch, course: course, schoolName: school, courseBlock: block })));
};
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-tab-content-box.tsx":
/*!***********************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-tab-content-box.tsx ***!
  \***********************************************************************************/
/*! exports provided: CourseTabContentBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseTabContentBox", function() { return CourseTabContentBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/is-ked-staff */ "./src/components/course-builder-ks/logic/is-ked-staff.ts");
/* harmony import */ var _course_contents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-contents */ "./src/components/course-builder-ks/viewer-editor/course-contents/index.ts");
/* harmony import */ var _utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility-components/align-horizontal */ "./src/components/utility-components/align-horizontal.tsx");
/* harmony import */ var _utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility-components/horizontal-item */ "./src/components/utility-components/horizontal-item.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _course_builder_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../course-builder/sub-components/remove-item */ "./src/components/course-builder/sub-components/remove-item.tsx");
/* harmony import */ var kedbackend_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! kedbackend/observable */ "./kedbackend/observable.js");
/* harmony import */ var _utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility-components/lazy-content */ "./src/components/utility-components/lazy-content.tsx");
/* harmony import */ var _logic_change_sort_order__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../logic/change-sort-order */ "./src/components/course-builder-ks/logic/change-sort-order.ts");
/* harmony import */ var _common_field_limits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/field-limits */ "./src/components/course-builder-ks/common/field-limits.ts");












var MAX_CHARS_IN_CONTENTS = _common_field_limits__WEBPACK_IMPORTED_MODULE_11__["FieldLimits"].MAX_CHARS_IN_CONTENTS;
var CourseTabContentBox = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CourseTabContentBox, _super);
    function CourseTabContentBox(props) {
        var _this = _super.call(this, props) || this;
        _this.numCharsObservable = new kedbackend_observable__WEBPACK_IMPORTED_MODULE_8__["Emitter"](0); // Dedicated state for a sub-part of the generated DOM (avoid infinite loop)
        _this.state = {
        //numChars: 0
        };
        return _this;
    }
    CourseTabContentBox.prototype.render = function () {
        var _a = this.props, editMode = _a.editMode, content = _a.content, branch = _a.branch, course = _a.course, tab = _a.tab, school = _a.school, draftId = _a.draftId, contentOrderIndex = _a.contentOrderIndex, contents = _a.contents, block = _a.block;
        var kedStaff = Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_2__["isKedStaff"])();
        //theme courses learning goals and rich text should be always enabled
        var contentEditAlwaysEnabled = editMode && tab.tabClass !== "mission-tab" && course.type === "theme-course"
            && (content.type === 'learning-goals' || content.type === 'rich-text');
        //step courses learning goals should be always unchecked and disabled
        var stepCourseLearningGoalDisabled = course.type === "step-course" && content.type === 'learning-goals';
        //const { numChars } = this.state;
        var numCharsObservable = this.numCharsObservable;
        return !editMode || (content.locked && !kedStaff) ?
            //
            // Not edit mode:
            //
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_contents__WEBPACK_IMPORTED_MODULE_3__["CourseContentBox"], { key: content.id, repo: branch, content: content, siblingContents: contents, course: course, editMode: editMode, courseTab: tab, school: school, draftId: draftId, block: block }) :
            //
            // Edit mode:
            //
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { key: content.id, className: ["course-content-box", content.type !== 'learning-goals' && "ked_boxed"].filter(function (x) { return !!x; }).join(' '), style: { position: 'relative' } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_4__["AlignHorizontal"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_5__["HorizontalItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "box-mini-label" }, _course_contents__WEBPACK_IMPORTED_MODULE_3__["COURSE_CONTENT_TYPES"][content.type])),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_5__["HorizontalItem"], null, kedStaff ?
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                            "\u00A0",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: "checkbox", checked: !stepCourseLearningGoalDisabled && !content.locked || contentEditAlwaysEnabled, disabled: contentEditAlwaysEnabled || stepCourseLearningGoalDisabled, onChange: function (ev) { return branch.courseContents.update(content, { locked: !ev.target.checked }); } }), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Till\u00E5t redigering"], ["Till\u00E5t redigering"]))),
                            !stepCourseLearningGoalDisabled && !content.locked || contentEditAlwaysEnabled ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                                "\u00A0",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: "checkbox", checked: !content.lockDelete, onChange: function (ev) { return branch.courseContents.update(content, { lockDelete: !ev.target.checked }); } }), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Till\u00E5t d\u00F6lja rutan"], ["Till\u00E5t d\u00F6lja rutan"])))) : null) : null)),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_contents__WEBPACK_IMPORTED_MODULE_3__["CourseContentBox"], { repo: branch, content: content, siblingContents: contents, course: course, editMode: true, school: school, draftId: draftId, courseTab: tab, maxChars: MAX_CHARS_IN_CONTENTS, reportNumChars: function (numChars) {
                        // Avoid setting state because it turns out to be infinite loop.
                        // (setState() leads to re-render of this whole component, leading to
                        // re-render of CourseContentBox, that calls reportNumChars etc...)
                        // Instead we communicate this particular state to a dedicated Observable
                        // that will only update the particular component that is affected by it.
                        numCharsObservable.dispatch(numChars);
                        //this.setState({ numChars });
                    }, block: block }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: { position: 'absolute', top: 0, right: 0 } },
                    (kedStaff || !content.locked) && contentOrderIndex > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-arrow-circle-up selectable", "aria-hidden": "true", onClick: function () {
                                var newOrder = Object(_logic_change_sort_order__WEBPACK_IMPORTED_MODULE_10__["reorder"])(contents, content.id, contents[contentOrderIndex - 1].id, "before");
                                if (newOrder) {
                                    branch.courseContents.update(content, { order: newOrder });
                                }
                            } }),
                        " "),
                    (kedStaff || !content.locked) && contentOrderIndex < contents.length - 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-arrow-circle-down selectable", "aria-hidden": "true", onClick: function () {
                                var newOrder = Object(_logic_change_sort_order__WEBPACK_IMPORTED_MODULE_10__["reorder"])(contents, content.id, contents[contentOrderIndex + 1].id, "after");
                                if (newOrder) {
                                    branch.courseContents.update(content, { order: newOrder });
                                }
                            } }),
                        " "),
                    kedStaff || !content.lockDelete ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_7__["RemoveItem"], { title: school === 'standard' ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ta bort inneh\u00E5llsrutan"], ["Ta bort inneh\u00E5llsrutan"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["D\u00F6lj inneh\u00E5llsrutan"], ["D\u00F6lj inneh\u00E5llsrutan"]))), style: { display: 'inline-block' }, onClick: function () { return confirm(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ta bort inneh\u00E5ll?"], ["Ta bort inneh\u00E5ll?"])))) && branch.courseTabs.removeRelated(tab, "contents", content); } })
                        : null),
                content.type === 'rich-text' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_9__["LazyContent"], null, numCharsObservable.map(function (numChars) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: ["char-counter-bottom"].concat(numChars >= MAX_CHARS_IN_CONTENTS ? "overflowed" : []).join(' ') }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Texten inneh\u00E5ller ", " av max ", " till\u00E5tna tecken"], ["Texten inneh\u00E5ller ", " av max ", " till\u00E5tna tecken"])), numChars, MAX_CHARS_IN_CONTENTS));
                })) :
                    undefined);
    };
    return CourseTabContentBox;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-tab/tab-classes.ts":
/*!**********************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-tab/tab-classes.ts ***!
  \**********************************************************************************/
/*! exports provided: CourseTabClasses, TabTypesPerCourseType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseTabClasses", function() { return CourseTabClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabTypesPerCourseType", function() { return TabTypesPerCourseType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");


var CourseTabClasses = {
    "intro-tab": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Introduktionsflik"], ["Introduktionsflik"]))),
    "run-up-tab": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Upptaktsflik"], ["Upptaktsflik"]))),
    "subject-tab": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4mnesflik"], ["\u00C4mnesflik"]))),
    "mission-tab": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppdragsflik"], ["Uppdragsflik"]))),
    "content-tab": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Generell flik"], ["Generell flik"]))),
    "teacher-tab": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4rarsida"], ["L\u00E4rarsida"]))),
    "word-bank-tab": Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ordbank"], ["Ordbank"])))
};
var TabTypesPerCourseType = {
    "step-course": [
        "content-tab",
        "intro-tab",
        "teacher-tab",
        "word-bank-tab"
    ],
    "theme-course": [
        "content-tab",
        "run-up-tab",
        "subject-tab",
        "mission-tab",
        "teacher-tab"
    ]
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/course-viewer-page.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/course-viewer-page.tsx ***!
  \*******************************************************************************/
/*! exports provided: CourseViewerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewerPage", function() { return CourseViewerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _common_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/banner */ "./src/components/course-builder-ks/common/banner.tsx");
/* harmony import */ var kedbackend_observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kedbackend/observable */ "./kedbackend/observable.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _add_tab_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-tab-button */ "./src/components/course-builder-ks/viewer-editor/add-tab-button.tsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _course_area__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./course-area */ "./src/components/course-builder-ks/viewer-editor/course-area.tsx");
/* harmony import */ var _task_task_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task/task-editor */ "./src/components/course-builder-ks/viewer-editor/task/task-editor.tsx");
/* harmony import */ var _clickable_school_div__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clickable-school-div */ "./src/components/course-builder-ks/viewer-editor/clickable-school-div.tsx");
/* harmony import */ var _logic_is_employee__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../logic/is-employee */ "./src/components/course-builder-ks/logic/is-employee.ts");
/* harmony import */ var _task_viewer_task_viewer_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./task/viewer/task-viewer-page */ "./src/components/course-builder-ks/viewer-editor/task/viewer/task-viewer-page.tsx");
/* harmony import */ var _logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../logic/is-ked-staff */ "./src/components/course-builder-ks/logic/is-ked-staff.ts");
/* harmony import */ var _utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utility-components/lazy-content */ "./src/components/utility-components/lazy-content.tsx");
/* harmony import */ var _logic_change_sort_order__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../logic/change-sort-order */ "./src/components/course-builder-ks/logic/change-sort-order.ts");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../features */ "./src/features/index.ts");




















var CourseViewerPage = Object(react_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])((function (_a) {
    var school = _a.school, courseId = _a.courseId, activeTab = _a.activeTab, draftId = _a.draftId, editMode = _a.editMode, history = _a.history, contentId = _a.contentId, taskId = _a.taskId;
    // Store the current page in local storage when it changes:
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (courseId) {
            localStorage.setItem("subjectPlannerLastCourse", courseId);
            if (activeTab && activeTab !== '$' && activeTab !== 'undefined') {
                localStorage.setItem("subjectPlannerLastTab:" + courseId, activeTab);
            }
            else {
                localStorage.removeItem("subjectPlannerLastTab:" + courseId);
            }
        }
    }, [courseId, activeTab, contentId, taskId]);
    var repo = editMode ?
        _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"] : // In edit mode, do not optimize cache, as it prohibits collaboration
        _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].optimizeCache();
    var schoolObservable = repo.schools.name(school).single();
    var branchObservable = draftId ? // In edit mode, draftId is defined.
        new kedbackend_observable__WEBPACK_IMPORTED_MODULE_4__["Emitter"](repo.branch(draftId)) :
        schoolObservable.map(function (school) { return repo.branch(school.officialBranchId); });
    var courseObservable = branchObservable.switchMap(function (branch) {
        return branch.courseInstances.include("blocks", "tabs").id(courseId);
    });
    var intermediateObservableUnsorted = courseObservable.combineLatest(schoolObservable)
        .switchMap(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), course = _b[0], schoolEntity = _b[1];
        var branch = draftId ?
            repo.branch(draftId) :
            repo.branch(schoolEntity.officialBranchId);
        // Retrieve deltas to point out modified tabs
        var modifiedItemsObservable = (editMode && _features__WEBPACK_IMPORTED_MODULE_18__["features"].KDT592) ?
            branch.deltas.toValue().map(function (deltas) {
                var allTags = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["flatten"])(deltas.map(function (delta) {
                    return delta.type === 'modify' ?
                        (delta.targetTags || []) :
                        (delta.sourceTags || []).concat(delta.targetTags || []);
                }));
                return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["arrayToMap"])(allTags, function (t) { return t; });
            }) :
            new kedbackend_observable__WEBPACK_IMPORTED_MODULE_4__["Emitter"]({});
        if (course.type === 'theme-course') {
            var result_1 = { course: course, tabs: course.tabs, branch: branch, block: null, schoolEntity: schoolEntity };
            // Retrieve deltas to point out modified tabs
            return modifiedItemsObservable.map(function (modifiedItems) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result_1), { modifiedItems: modifiedItems })); });
        }
        if (activeTab && activeTab !== '$')
            return branch.courseBlocks.hasEdgesTo([activeTab]).include("tabs").toValue()
                .combineLatest(modifiedItemsObservable)
                .map(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_b[0], 1), block = _c[0], modifiedItems = _b[1];
                return ({
                    course: course,
                    tabs: block ? block.tabs : [],
                    branch: branch,
                    block: block || course.blocks[0],
                    schoolEntity: schoolEntity,
                    modifiedItems: modifiedItems
                });
            });
        if (course.blocks.length > 0)
            return branch.courseBlocks.include("tabs").id(course.blocks[0].id)
                .combineLatest(modifiedItemsObservable)
                .map(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), block = _b[0], modifiedItems = _b[1];
                return ({
                    course: course,
                    tabs: block.tabs,
                    branch: branch,
                    block: block,
                    schoolEntity: schoolEntity,
                    modifiedItems: modifiedItems
                });
            });
        return new kedbackend_observable__WEBPACK_IMPORTED_MODULE_4__["Emitter"]({ course: course, tabs: [], branch: branch, block: null, schoolEntity: schoolEntity });
    });
    var intermediateObservable = intermediateObservableUnsorted.map(function (vals) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, vals), { tabs: vals.tabs && vals.tabs.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["compareProps"])(["stepNo", "order"])) })); });
    var bannerPropsObservable = intermediateObservable
        .map(function (_a) {
        var course = _a.course, tabs = _a.tabs, branch = _a.branch, block = _a.block, schoolEntity = _a.schoolEntity, modifiedItems = _a.modifiedItems;
        return getCourseBannerProps(tabs, editMode, school, schoolEntity, draftId, course, branch, activeTab, block, modifiedItems);
    });
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_banner__WEBPACK_IMPORTED_MODULE_3__["LazyBanner"], { lazyProps: bannerPropsObservable }),
        taskId ? editMode ?
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_16__["LazyContent"], null, intermediateObservable.map(function (_a) {
                var branch = _a.branch, block = _a.block, course = _a.course, tabs = _a.tabs;
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_task_editor__WEBPACK_IMPORTED_MODULE_11__["TaskEditor"], { school: school, course: course, draftId: draftId, branch: branch, activeTab: activeTab, contentId: contentId, taskId: taskId, blockId: block && block.id, tabs: tabs });
            })) :
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_viewer_task_viewer_page__WEBPACK_IMPORTED_MODULE_14__["TaskViewerPage"], { school: school, courseId: courseId, lazyRepo: branchObservable, activeTab: activeTab, taskId: taskId, contentId: contentId, draftId: draftId }) :
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_16__["LazyContent"], null, intermediateObservable.map(function (_a) {
                var branch = _a.branch, block = _a.block, course = _a.course, tabs = _a.tabs;
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_area__WEBPACK_IMPORTED_MODULE_10__["CourseArea"], { school: school, courseId: courseId, draftId: draftId, course: course, branch: branch, tabs: tabs, activeTab: activeTab, editMode: editMode, block: block });
            })));
}));
function getCourseBannerProps(tabs, editMode, school, schoolEntity, draftId, course, branch, activeTab, block, modifiedItems) {
    var _this = this;
    var kedStaff = Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_15__["isKedStaff"])();
    var courseId = course.id;
    var activeTabObj = tabs.filter(function (tab) { return tab.id === activeTab; })[0] || tabs[0];
    if (course.type === 'step-course' && activeTabObj && activeTabObj.type === 'step-course-tab') {
        tabs = tabs.filter(function (tab) { return tab.type === 'step-course-tab' && tab.stepNo === activeTabObj.stepNo; });
    }
    var bannerTabs = (editMode ? tabs : Object(_logic_is_employee__WEBPACK_IMPORTED_MODULE_13__["isEmployee"])() ? tabs.filter(function (tab) { return !tab.hidden; }) : tabs.filter(function (tab) { return !tab.hidden && tab.tabClass !== 'teacher-tab'; }))
        .map(function (tab) { return ({
        key: tab.id,
        hidden: tab.hidden,
        name: tab.tabTitle,
        draggable: true,
        link: editMode ?
            "/" + school + "/courses/" + courseId + "/tabs/" + tab.id + (draftId ? "/drafts/" + draftId : '') + "/edit" :
            "/" + school + "/courses/" + courseId + "/tabs/" + tab.id + (draftId ? "/drafts/" + draftId : '')
    }); });
    var buttons = [];
    if (editMode && (kedStaff || course.allowAddTabs)) {
        if (course.type === 'theme-course') {
            buttons.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_add_tab_button__WEBPACK_IMPORTED_MODULE_8__["AddTabButton"], { type: "theme-course-tab", key: "$addTab", school: school, course: course, branch: branch, draftId: draftId }));
        }
        else {
            var stepNo = activeTabObj ?
                activeTabObj.stepNo :
                block.stepNumbers[0] || 1;
            buttons.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_add_tab_button__WEBPACK_IMPORTED_MODULE_8__["AddTabButton"], { type: "step-course-tab", key: "$addTab", school: school, course: course, branch: branch, draftId: draftId, block: block, stepNo: stepNo }));
        }
    }
    if (kedStaff) {
        // Remove the "role" attribute from query, as we want to stop impersonating an Employee when using the admin interface
        buttons.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: Object(_access_control__WEBPACK_IMPORTED_MODULE_7__["preserveImpersonationQuery"])(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_6__["default"].KED_SUBJECT_PLANNER_ADMIN_URL, { role: undefined }) +
                ("#/admin/courses/" + courseId + "/settings"), key: "$settings", title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Inst\u00E4llningar"], ["Inst\u00E4llningar"]))) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-cog", "aria-hidden": true }),
            "\u00A0"));
    }
    var bannerProps = {
        title: course.name,
        backgroundImage: null,
        tabs: bannerTabs,
        cornerBox: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_clickable_school_div__WEBPACK_IMPORTED_MODULE_12__["ClickableSchoolDiv"], { school: school, draftId: draftId, displayName: schoolEntity.displayName || school }),
        buttons: buttons,
        activeTab: activeTab || (bannerTabs[0] && bannerTabs[0].key),
        blocks: course.blocks && course.blocks.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["compareProp"])("blockNo")).map(function (_a) {
            var blockId = _a.id, name = _a.name, stepNumbers = _a.stepNumbers;
            return ({
                id: blockId,
                name: name,
                steps: stepNumbers.map(function (stepNo) { return ({
                    isActive: activeTabObj && stepNo === activeTabObj.stepNo,
                    stepNo: stepNo,
                    link: "/" + school + "/courses/" + courseId + "/blocks/" + blockId + "/steps/" + stepNo + (draftId ? "/drafts/" + draftId : '') + (editMode ? '/edit' : '')
                }); })
            });
        }),
        sortableTabs: editMode && (kedStaff || course.allowReorderTabs),
        modifiedItems: modifiedItems,
        onTabDrop: function (source, target, placement) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var newOrder, sourceTab;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                newOrder = Object(_logic_change_sort_order__WEBPACK_IMPORTED_MODULE_17__["reorder"])(tabs, source, target, placement);
                if (newOrder) {
                    sourceTab = tabs.find(function (t) { return t.id === source; });
                    if (sourceTab) {
                        branch.courseTabs.update(sourceTab, { order: newOrder });
                    }
                }
                return [2 /*return*/];
            });
        }); }
    };
    return bannerProps;
}
var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/editor-footer-buttons.tsx":
/*!**********************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/editor-footer-buttons.tsx ***!
  \**********************************************************************************/
/*! exports provided: EditorFooterButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorFooterButtons", function() { return EditorFooterButtons; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _logic_publish_course__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logic/publish-course */ "./src/components/course-builder-ks/logic/publish-course.ts");
/* harmony import */ var _utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility-components/horizontal-item */ "./src/components/utility-components/horizontal-item.tsx");
/* harmony import */ var _utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utility-components/align-horizontal */ "./src/components/utility-components/align-horizontal.tsx");
/* harmony import */ var _logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logic/is-ked-staff */ "./src/components/course-builder-ks/logic/is-ked-staff.ts");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../features */ "./src/features/index.ts");










var ToggleHiddenTabButton = function (_a) {
    var _b = _a.repo, repo = _b === void 0 ? null : _b, _c = _a.tab, tab = _c === void 0 ? null : _c;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "btn pull-right", onClick: function (ev) { return repo.courseTabs.update(tab, { hidden: !tab.hidden }); } }, tab.hidden ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Visa fliken"], ["Visa fliken"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["D\u00F6lj fliken"], ["D\u00F6lj fliken"]))));
};
var EditorFooterButtons = Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (_a) {
    var school = _a.school, course = _a.course, tab = _a.tab, activeTab = _a.activeTab, draftId = _a.draftId, history = _a.history, courseType = _a.courseType, block = _a.block;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        tab && (Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_8__["isKedStaff"])() || !tab.locked || course.allowRemoveTabs) && (school !== "standard" ?
            // Toggle hide/show
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ToggleHiddenTabButton, { repo: _globals_db__WEBPACK_IMPORTED_MODULE_4__["db"].branch(draftId), tab: tab }) :
            // Delete button
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "btn btn-warning pull-right", onClick: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
                    var draftRepo, courseTab, contents;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                draftRepo = _globals_db__WEBPACK_IMPORTED_MODULE_4__["db"].branch(draftId);
                                return [4 /*yield*/, draftRepo.courseTabs
                                        .include("contents")
                                        .includeIdsOnly()
                                        .id(activeTab)
                                        .load()];
                            case 1:
                                courseTab = _a.sent();
                                return [4 /*yield*/, draftRepo.courseContents
                                        .include("tasks")
                                        .includeIdsOnly()
                                        .ids(courseTab.contents.map(function (_a) {
                                        var id = _a.id;
                                        return id;
                                    }))
                                        .toValue().load()];
                            case 2:
                                contents = _a.sent();
                                contents.forEach(function (content) {
                                    content.tasks.forEach(function (task) {
                                        draftRepo.courseContents.removeRelated(content, "tasks", task);
                                    });
                                });
                                courseTab.contents.forEach(function (content) {
                                    draftRepo.courseTabs.removeRelated(courseTab, "contents", content);
                                });
                                if (courseType === 'theme-course') {
                                    draftRepo.courseInstances.removeRelated(course, "tabs", courseTab);
                                }
                                else if (block) {
                                    draftRepo.courseBlocks.removeRelated(block, "tabs", courseTab);
                                }
                                return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_4__["db"].saveNow()];
                            case 3:
                                _a.sent();
                                history.push("/" + school + "/courses/" + course.id + "/tabs/$/drafts/" + draftId + "/edit");
                                return [2 /*return*/];
                        }
                    });
                }); } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-trash-alt", "aria-hidden": true }),
                "\u00A0", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ta bort fliken"], ["Ta bort fliken"]))))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_7__["AlignHorizontal"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_6__["HorizontalItem"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "btn", onClick: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                history.push("/" + school + "/courses/" + course.id + "/tabs/" + (activeTab || '$') + "/drafts/" + draftId);
                                return [2 /*return*/];
                            });
                        }); } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-eye", "aria-hidden": true }),
                        "\u00A0", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["F\u00F6rhandsgranska"], ["F\u00F6rhandsgranska"]))))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_6__["HorizontalItem"], null,
                    "\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "btn", onClick: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                history.push("/" + school + "/courses/" + course.id + "/history");
                                return [2 /*return*/];
                            });
                        }); } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-history", "aria-hidden": true }),
                        "\u00A0", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Versionshistorik"], ["Versionshistorik"]))))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_6__["HorizontalItem"], null,
                    "\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "btn btn-warning", onClick: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!_features__WEBPACK_IMPORTED_MODULE_9__["features"].KDT592) return [3 /*break*/, 3];
                                        return [4 /*yield*/, Object(_logic_publish_course__WEBPACK_IMPORTED_MODULE_5__["publishCoursePart"])({
                                                school: school,
                                                course: course,
                                                tab: tab,
                                                draftRepo: _globals_db__WEBPACK_IMPORTED_MODULE_4__["db"].branch(draftId)
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_4__["db"].saveNow()];
                                    case 2:
                                        _a.sent();
                                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["showInfo"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndringarna publicerades."], ["\u00C4ndringarna publicerades."]))));
                                        return [3 /*break*/, 6];
                                    case 3: 
                                    // This code path should be removed after week 44/2019
                                    // It just acts as before KDT592
                                    return [4 /*yield*/, Object(_logic_publish_course__WEBPACK_IMPORTED_MODULE_5__["publishEntireCourse"])({ school: school, course: course, draftRepo: _globals_db__WEBPACK_IMPORTED_MODULE_4__["db"].branch(draftId) })];
                                    case 4:
                                        // This code path should be removed after week 44/2019
                                        // It just acts as before KDT592
                                        _a.sent();
                                        return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_4__["db"].saveNow()];
                                    case 5:
                                        _a.sent();
                                        history.push("/" + school + "/courses/" + course.id + "/tabs/" + (activeTab || '$'));
                                        _a.label = 6;
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-play", "aria-hidden": true }),
                        "\u00A0", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Publicera"], ["Publicera"]))))))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "btn", onClick: function () {
                return history.push("/" + school + "/courses/" + course.id + "/tabs/" + (activeTab || '$'));
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-arrow-left", "aria-hidden": true }),
            "\u00A0", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Avsluta redigering"], ["Avsluta redigering"])))));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/index.tsx":
/*!******************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/index.tsx ***!
  \******************************************************************/
/*! exports provided: SubjectPlannerViewerApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectPlannerViewerApp", function() { return SubjectPlannerViewerApp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utils_error_success_feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/error-success-feedback */ "./src/utils/error-success-feedback.tsx");
/* harmony import */ var _common_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/banner */ "./src/components/course-builder-ks/common/banner.tsx");
/* harmony import */ var _utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility-components/live-query-view */ "./src/components/utility-components/live-query-view.tsx");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _course_viewer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course-viewer-page */ "./src/components/course-builder-ks/viewer-editor/course-viewer-page.tsx");
/* harmony import */ var _common_two_columns_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/two-columns-page */ "./src/components/course-builder-ks/common/two-columns-page.tsx");
/* harmony import */ var _weekplanner_weekplanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../weekplanner/weekplanner */ "./src/components/weekplanner/weekplanner.tsx");
/* harmony import */ var _list_courses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-courses */ "./src/components/course-builder-ks/viewer-editor/list-courses/index.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var _redirect_to_step__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./redirect-to-step */ "./src/components/course-builder-ks/viewer-editor/redirect-to-step.tsx");
/* harmony import */ var _version_history__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./version-history */ "./src/components/course-builder-ks/viewer-editor/version-history/index.tsx");
/* harmony import */ var _utils_keep_session_alive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../utils/keep-session-alive */ "./src/utils/keep-session-alive.ts");
/* harmony import */ var _common_dialog_content__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/dialog-content */ "./src/components/course-builder-ks/common/dialog-content.tsx");
/* harmony import */ var _utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utility-components/lazy-content */ "./src/components/utility-components/lazy-content.tsx");



















// Keep Session Alive
Object(_utils_keep_session_alive__WEBPACK_IMPORTED_MODULE_16__["keepSessionAlive"])();
var GetMySchoolAndResolveCourseId = Object(_utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_5__["liveQueryView"])(function (_a) {
    var render = _a.render, courseIdOrName = _a.courseIdOrName;
    if (courseIdOrName.length === 36 && courseIdOrName[8] === '-' && courseIdOrName[13] === '-' && courseIdOrName[18] === '-' && courseIdOrName[23] === '-') {
        return _globals_db__WEBPACK_IMPORTED_MODULE_6__["Schools"].mySchool.map(function (school) { return render(school, courseIdOrName); });
    }
    else {
        return _globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].courseInstances
            .name(courseIdOrName.replace('+', ' '))
            .idsOnly()
            .single()
            .combineLatest(_globals_db__WEBPACK_IMPORTED_MODULE_6__["Schools"].mySchool)
            .map(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), course = _b[0], school = _b[1];
            return render(school, course.id);
        });
    }
});
var SubjectPlannerViewerApp = Object(_common_dialog_content__WEBPACK_IMPORTED_MODULE_17__["setupDialogs"])(function () { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { onKeyDown: function (ev) {
        if (ev.which === 83 && (ev.ctrlKey || ev.metaKey)) { // CTRL-S
            ev.preventDefault();
            _globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].saveNow().then(function () {
                /*// When saved, exit edit mode so that one can view the result as users see it.
                if (location.hash.endsWith('/edit')) {
                  location.hash = location.hash.substr(0, location.hash.length - '/edit'.length);
                }*/
            });
        }
    } },
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["HashRouter"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/", exact: true, render: function () {
                    var lastCourse = localStorage.getItem("subjectPlannerLastCourse");
                    if (lastCourse) {
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_18__["LazyContent"], null, _globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].courseInstances.ids([lastCourse]).idsOnly().toValue().map(function (_a) {
                            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), course = _b[0];
                            return course ?
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: "/courses/" + lastCourse }) : // Course exists
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: "/courses" });
                        }) // Course does not exist
                        );
                    }
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: "/courses" });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/courses", exact: true, render: function () { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_banner__WEBPACK_IMPORTED_MODULE_4__["Banner"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kurser"], ["Kurser"]))), tabs: [], activeTab: "$" }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_two_columns_page__WEBPACK_IMPORTED_MODULE_8__["TwoColumnsPage"], { left: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_list_courses__WEBPACK_IMPORTED_MODULE_10__["ListCourses"], { showInactive: true }), right: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_weekplanner_weekplanner__WEBPACK_IMPORTED_MODULE_9__["WeekPlanner"], { env: _globals_KED_env__WEBPACK_IMPORTED_MODULE_12__["default"], viewCourseUrl: _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_13__["default"].KED_COURSE_VIEWER_URL }), rightWidth: 5 })); } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/courses/:courseIdOrName", exact: false, render: function (_a) {
                    var match = _a.match;
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](GetMySchoolAndResolveCourseId, { courseIdOrName: match.params.courseIdOrName, render: function (school, courseId) {
                            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: "/" + school.name + "/courses/" + courseId });
                        } });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/:school/courses/:courseId", render: function (_a) {
                    var match = _a.match;
                    var _b = match.params, school = _b.school, courseId = _b.courseId;
                    var lastTab = localStorage.getItem("subjectPlannerLastTab:" + courseId);
                    if (lastTab) {
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: "/" + school + "/courses/" + courseId + "/tabs/" + lastTab });
                    }
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_viewer_page__WEBPACK_IMPORTED_MODULE_7__["CourseViewerPage"], { school: school, courseId: courseId });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/:school/courses/:courseId/tabs/:tabId?", render: function (_a) {
                    var match = _a.match;
                    var _b = match.params, school = _b.school, courseId = _b.courseId, tabId = _b.tabId;
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_viewer_page__WEBPACK_IMPORTED_MODULE_7__["CourseViewerPage"], { school: school, courseId: courseId, activeTab: tabId });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/:school/courses/:courseId/settings/:draftId", render: function (_a) {
                    var match = _a.match;
                    var _b = match.params, school = _b.school, courseId = _b.courseId, draftId = _b.draftId;
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_viewer_page__WEBPACK_IMPORTED_MODULE_7__["CourseViewerPage"], { school: school, courseId: courseId, activeTab: "$settings", draftId: draftId });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/:school/courses/:courseId/tabs/:tabId/drafts/:draftId", render: function (_a) {
                    var match = _a.match;
                    var _b = match.params, school = _b.school, courseId = _b.courseId, tabId = _b.tabId, draftId = _b.draftId;
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_viewer_page__WEBPACK_IMPORTED_MODULE_7__["CourseViewerPage"], { school: school, courseId: courseId, activeTab: tabId, draftId: draftId });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/:school/courses/:courseId/tabs/:tabId/drafts/:draftId/edit", render: function (_a) {
                    var match = _a.match;
                    var _b = match.params, school = _b.school, courseId = _b.courseId, tabId = _b.tabId, draftId = _b.draftId;
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_viewer_page__WEBPACK_IMPORTED_MODULE_7__["CourseViewerPage"], { school: school, courseId: courseId, activeTab: tabId, draftId: draftId, editMode: true });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/:school/courses/:courseId/tabs/:tabId/tasks/:taskId", render: function (_a) {
                    var match = _a.match;
                    var _b = match.params, school = _b.school, courseId = _b.courseId, tabId = _b.tabId, taskId = _b.taskId;
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_viewer_page__WEBPACK_IMPORTED_MODULE_7__["CourseViewerPage"], { school: school, courseId: courseId, activeTab: tabId, taskId: taskId, editMode: false });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/:school/courses/:courseId/tabs/:tabId/contents/:contentId/tasks/:taskId/drafts/:draftId", render: function (_a) {
                    var match = _a.match;
                    var _b = match.params, school = _b.school, courseId = _b.courseId, tabId = _b.tabId, taskId = _b.taskId, draftId = _b.draftId, contentId = _b.contentId;
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_viewer_page__WEBPACK_IMPORTED_MODULE_7__["CourseViewerPage"], { school: school, courseId: courseId, activeTab: tabId, taskId: taskId, contentId: contentId, draftId: draftId, editMode: false });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/:school/courses/:courseId/tabs/:tabId/contents/:contentId/tasks/:taskId/drafts/:draftId/edit", render: function (_a) {
                    var match = _a.match;
                    var _b = match.params, school = _b.school, courseId = _b.courseId, tabId = _b.tabId, contentId = _b.contentId, taskId = _b.taskId, draftId = _b.draftId;
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_viewer_page__WEBPACK_IMPORTED_MODULE_7__["CourseViewerPage"], { school: school, courseId: courseId, activeTab: tabId, contentId: contentId, taskId: taskId, draftId: draftId, editMode: true });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/:school/courses/:courseId/blocks/:blockId/steps/:stepNo", render: function (_a) {
                    var match = _a.match;
                    var _b = match.params, school = _b.school, courseId = _b.courseId, blockId = _b.blockId, stepNo = _b.stepNo;
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_redirect_to_step__WEBPACK_IMPORTED_MODULE_14__["RedirectToStep"], { school: school, courseId: courseId, blockId: blockId, stepNo: stepNo, draftId: null, editMode: false });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/:school/courses/:courseId/blocks/:blockId/steps/:stepNo/drafts/:draftId/edit", render: function (_a) {
                    var match = _a.match;
                    var _b = match.params, school = _b.school, courseId = _b.courseId, blockId = _b.blockId, stepNo = _b.stepNo, draftId = _b.draftId;
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_redirect_to_step__WEBPACK_IMPORTED_MODULE_14__["RedirectToStep"], { school: school, courseId: courseId, blockId: blockId, stepNo: stepNo, draftId: draftId, editMode: true });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/:school/courses/:courseId/blocks/:blockId/steps/:stepNo/drafts/:draftId", render: function (_a) {
                    var match = _a.match;
                    var _b = match.params, school = _b.school, courseId = _b.courseId, blockId = _b.blockId, stepNo = _b.stepNo, draftId = _b.draftId;
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_redirect_to_step__WEBPACK_IMPORTED_MODULE_14__["RedirectToStep"], { school: school, courseId: courseId, blockId: blockId, stepNo: stepNo, draftId: draftId, editMode: false });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/:school/courses/:courseId/history", render: function (_a) {
                    var match = _a.match;
                    var _b = match.params, school = _b.school, courseId = _b.courseId, blockId = _b.blockId, stepNo = _b.stepNo;
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_version_history__WEBPACK_IMPORTED_MODULE_15__["VersionHistoryPage"], { school: school, courseId: courseId });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_error_success_feedback__WEBPACK_IMPORTED_MODULE_3__["ErrorSuccessFeedback"], null)))); });
var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/left-course-area.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/left-course-area.tsx ***!
  \*****************************************************************************/
/*! exports provided: LeftCourseArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftCourseArea", function() { return LeftCourseArea; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_with_observe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility-components/with-observe */ "./src/components/utility-components/with-observe.tsx");
/* harmony import */ var _course_tab_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-tab-area */ "./src/components/course-builder-ks/viewer-editor/course-tab-area.tsx");
/* harmony import */ var _utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility-components/align-horizontal */ "./src/components/utility-components/align-horizontal.tsx");
/* harmony import */ var _utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility-components/horizontal-item */ "./src/components/utility-components/horizontal-item.tsx");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utility-components/lazy-content */ "./src/components/utility-components/lazy-content.tsx");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _editor_footer_buttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./editor-footer-buttons */ "./src/components/course-builder-ks/viewer-editor/editor-footer-buttons.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../features */ "./src/features/index.ts");
/* harmony import */ var _logic_publish_course__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../logic/publish-course */ "./src/components/course-builder-ks/logic/publish-course.ts");
















var LeftCourseArea = Object(react_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Object(_utility_components_with_observe__WEBPACK_IMPORTED_MODULE_2__["withObserve"])((function (_a) {
    var editMode = _a.editMode, school = _a.school, course = _a.course, courseId = _a.courseId, branch = _a.branch, tab = _a.tab, draftId = _a.draftId, block = _a.block, activeTab = _a.activeTab, history = _a.history;
    var contents = tab ? branch.courseContents.include("tasks").hasEdgesFrom([tab.id]).toValue().read() : [];
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_tab_area__WEBPACK_IMPORTED_MODULE_3__["CourseTabArea"], { school: school, course: course, branch: branch, tab: tab, editMode: editMode, draftId: draftId, block: block, contents: contents }),
        !editMode ? _globals_KED_env__WEBPACK_IMPORTED_MODULE_9__["env"].currentUser.roles.includes("ADMIN") || Object(_access_control__WEBPACK_IMPORTED_MODULE_8__["isTeacherAtSchool"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_9__["env"].currentUser, school) ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_4__["AlignHorizontal"], null,
                draftId && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_5__["HorizontalItem"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-large btn-warning", onClick: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!_features__WEBPACK_IMPORTED_MODULE_14__["features"].KDT592) return [3 /*break*/, 3];
                                        return [4 /*yield*/, Object(_logic_publish_course__WEBPACK_IMPORTED_MODULE_15__["publishCoursePart"])({
                                                school: school,
                                                tab: tab,
                                                course: course,
                                                draftRepo: _globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].branch(draftId)
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].saveNow()];
                                    case 2:
                                        _a.sent();
                                        history.push("/" + school + "/courses/" + courseId + "/tabs/" + (tab ? tab.id : '$'));
                                        return [3 /*break*/, 6];
                                    case 3: 
                                    // This code path should be removed after week 44/2019
                                    // It just acts as before KDT592
                                    return [4 /*yield*/, Object(_logic_publish_course__WEBPACK_IMPORTED_MODULE_15__["publishEntireCourse"])({ school: school, course: course, draftRepo: _globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].branch(draftId) })];
                                    case 4:
                                        // This code path should be removed after week 44/2019
                                        // It just acts as before KDT592
                                        _a.sent();
                                        return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].saveNow()];
                                    case 5:
                                        _a.sent();
                                        history.push("/" + school + "/courses/" + course.id + "/tabs/" + (activeTab || '$'));
                                        _a.label = 6;
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-lg fa-play", "aria-hidden": true }),
                        "\u00A0", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Publicera"], ["Publicera"]))))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_11__["LazyContent"], null, _globals_db__WEBPACK_IMPORTED_MODULE_6__["CourseInstances"].getBranchId(_globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].schools.cacheOptimized().name(school).single(), courseId).map(function (existingDraftId) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_5__["HorizontalItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-large", onClick: existingDraftId ?
                                // Navigate to edit existing draft
                                function () { return history.push("/" + school + "/courses/" + courseId + "/tabs/" + (tab ? tab.id : '$') + "/drafts/" + existingDraftId + "/edit"); } :
                                // Create a draft for the branch and then navigate to it
                                function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
                                    var schoolEntity, newDraftId, newDraftBranchDoc, error_1;
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                _a.trys.push([0, 4, , 5]);
                                                return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].schools.name(school).single().load()];
                                            case 1:
                                                schoolEntity = _a.sent();
                                                return [4 /*yield*/, Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_12__["computePredestinatedId"])(schoolEntity.officialBranchId + courseId + "draft")];
                                            case 2:
                                                newDraftId = _a.sent();
                                                newDraftBranchDoc = {
                                                    id: newDraftId,
                                                    acl: [
                                                        "role:USER:R",
                                                        "schoolRole:" + schoolEntity.name + "/EMPLOYEE:S"
                                                    ],
                                                    name: 'draft',
                                                    schoolId: schoolEntity.id,
                                                    treeParentId: schoolEntity.officialBranchId,
                                                    tags: [courseId]
                                                };
                                                _globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].branches.addRelated({ id: schoolEntity.officialBranchId }, "approvedChildren", newDraftBranchDoc);
                                                return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].saveNow()];
                                            case 3:
                                                _a.sent();
                                                history.push("/" + school + "/courses/" + courseId + "/tabs/" + (tab ? tab.id : '$') + "/drafts/" + newDraftId + "/edit");
                                                return [3 /*break*/, 5];
                                            case 4:
                                                error_1 = _a.sent();
                                                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["showError"])(error_1);
                                                return [3 /*break*/, 5];
                                            case 5: return [2 /*return*/];
                                        }
                                    });
                                }); } }, existingDraftId ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-lg fa-pencil-alt" }),
                            " ",
                            draftId ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Forts\u00E4tt redigera"], ["Forts\u00E4tt redigera"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Redigera"], ["Redigera"])))) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-lg fa-plus" }),
                            " ", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Skapa skolans version av kursen"], ["Skapa skolans version av kursen"])))))),
                    draftId || !existingDraftId ? undefined : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_5__["HorizontalItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-large", onClick: function () { return history.push("/" + school + "/courses/" + courseId + "/tabs/" + (tab ? tab.id : '$') + "/drafts/" + existingDraftId); } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-eye" }),
                            " ", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Visa redigerad version"], ["Visa redigerad version"])))))); })),
                draftId && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_5__["HorizontalItem"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-large", onClick: function () {
                            history.push("/" + school + "/courses/" + courseId + "/tabs/" + (tab ? tab.id : '$'));
                        } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-lg fa-arrow-left" }),
                        " ",
                        editMode ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Avsluta redigering"], ["Avsluta redigering"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Avsluta f\u00F6rhandsgranskning"], ["Avsluta f\u00F6rhandsgranskning"]))))))) : undefined :
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editor_footer_buttons__WEBPACK_IMPORTED_MODULE_13__["EditorFooterButtons"], { school: school, course: course, tab: tab, activeTab: activeTab, draftId: draftId, courseType: course.type, block: block })));
})));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/list-courses/index.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/list-courses/index.tsx ***!
  \*******************************************************************************/
/*! exports provided: ListCourses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCourses", function() { return ListCourses; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility-components/live-query-view */ "./src/components/utility-components/live-query-view.tsx");
/* harmony import */ var _logic_list_course_instances__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logic/list-course-instances */ "./src/components/course-builder-ks/logic/list-course-instances.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _student_courses_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-courses-box */ "./src/components/course-builder-ks/viewer-editor/list-courses/student-courses-box.tsx");






var ListCourses = Object(_utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_2__["liveQueryView"])(function (_a) {
    var showInactive = _a.showInactive;
    return (showInactive ?
        Object(_logic_list_course_instances__WEBPACK_IMPORTED_MODULE_3__["listCourseInstances"])() :
        Object(_logic_list_course_instances__WEBPACK_IMPORTED_MODULE_3__["listCourseInstances"])().tags("active")).orderBy("name")
        .map(function (_a) {
        var id = _a.id, name = _a.name, type = _a.type, description = _a.description, tags = _a.tags;
        return ({
            id: id,
            name: name,
            type: type,
            tags: tags,
            description: description,
            url: "/courses/" + id
        });
    })
        .groupBy("type")
        .map(function (arraysByType) { return ({
        themeCourses: arraysByType["theme-course"],
        stepCourses: arraysByType["step-course"]
    }); })
        .map(function (_a) {
        var themeCourses = _a.themeCourses, stepCourses = _a.stepCourses;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            themeCourses && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_student_courses_box__WEBPACK_IMPORTED_MODULE_5__["StudentCoursesBox"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Temakurser"], ["Temakurser"]))), courses: themeCourses }),
            stepCourses && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_student_courses_box__WEBPACK_IMPORTED_MODULE_5__["StudentCoursesBox"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Stegkurser"], ["Stegkurser"]))), courses: stepCourses }));
    });
});
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/list-courses/student-courses-box.tsx":
/*!*********************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/list-courses/student-courses-box.tsx ***!
  \*********************************************************************************************/
/*! exports provided: StudentCoursesBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCoursesBox", function() { return StudentCoursesBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility-components/align-horizontal */ "./src/components/utility-components/align-horizontal.tsx");
/* harmony import */ var _utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utility-components/horizontal-item */ "./src/components/utility-components/horizontal-item.tsx");




var StudentCoursesBox = function (_a) {
    var title = _a.title, courses = _a.courses;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "ked_boxed" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, title),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "taskContainer odd-even" }, courses.map(function (_a) {
            var id = _a.id, name = _a.name, description = _a.description, tags = _a.tags;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_2__["AlignHorizontal"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_3__["HorizontalItem"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "studentCourse" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/courses/" + id }, name),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "small" }, description))),
                tags.includes("active") ? undefined : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_3__["HorizontalItem"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "pill incomplete" }, "Inaktiv")));
        })));
};


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/redirect-to-step.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/redirect-to-step.tsx ***!
  \*****************************************************************************/
/*! exports provided: RedirectToStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectToStep", function() { return RedirectToStep; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility-components/lazy-content */ "./src/components/utility-components/lazy-content.tsx");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





var RedirectToStep = function (_a) {
    var school = _a.school, courseId = _a.courseId, blockId = _a.blockId, draftId = _a.draftId, editMode = _a.editMode, stepNo = _a.stepNo;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_1__["LazyContent"], null, _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].optimizeCache().schools.name(school).single()
        .map(function (school) { return _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].branch(school.officialBranchId); })
        .switchMap(function (branchRepo) {
        return branchRepo.courseBlocks.include("tabs").id(blockId)
            .map(function (block) {
            var firstTab = block.tabs.filter(function (tab) { return '' + tab.stepNo === '' + stepNo; }).sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["compareProp"])("order"))[0];
            if (firstTab)
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], { to: "/" + school + "/courses/" + courseId + "/tabs/" + firstTab.id + (draftId ? "/drafts/" + draftId : '') + ((draftId && editMode) ? '/edit' : '') });
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], { to: "/" + school + "/courses/" + courseId });
        });
    }));
};


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/resource-editor.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/resource-editor.tsx ***!
  \****************************************************************************/
/*! exports provided: ResourceEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceEditor", function() { return ResourceEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _common_dialog_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dialog-context */ "./src/components/course-builder-ks/common/dialog-context.ts");
/* harmony import */ var _course_builder_modal_pages_edit_resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../course-builder/modal-pages/edit-resource */ "./src/components/course-builder/modal-pages/edit-resource.tsx");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _utility_components_draggable_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility-components/draggable-list */ "./src/components/utility-components/draggable-list.tsx");
/* harmony import */ var _logic_change_sort_order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logic/change-sort-order */ "./src/components/course-builder-ks/logic/change-sort-order.ts");








var ResourceEditor = function (_a) {
    var contents = _a.contents, schoolName = _a.schoolName, courseId = _a.courseId, tab = _a.tab, repo = _a.repo, block = _a.block;
    function editResourceLink(genericResource) {
        var resourceListContent = genericResource.resourceListContent;
        context.openDialog(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_modal_pages_edit_resource__WEBPACK_IMPORTED_MODULE_4__["EditResource"], { title: "Edit resource", resource: genericResource.resource, onSave: function (editedResource) {
                //resources[idx] = res;
                var newResourcesProp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(resourceListContent.resources);
                // idx is normally 0, but can be >0 due to how this used to work before this change.
                newResourcesProp[0] = editedResource;
                repo.courseContents.update(resourceListContent, {
                    resources: newResourcesProp
                });
                context.closeDialog();
            }, onDelete: function () {
                if (resourceListContent.resources.length === 1) {
                    // Normal scenario
                    repo.courseTabs.removeRelated(tab, "contents", resourceListContent);
                }
                else {
                    // Backward compat scenario
                    repo.courseContents.update(resourceListContent, {
                        resources: resourceListContent.resources.filter(function (r, _idx) { return _idx.toString() !== genericResource.id; })
                    });
                }
                context.closeDialog();
            } }));
    }
    var resourceListContents = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["flatten"])(contents
        .filter(function (content) { return content.type === "resource-list"; })
        .map(function (resourceListContent) { return resourceListContent; })
        .map(function (resourceListContent) {
        var resources = resourceListContent.resources;
        return resources.map(function (resource, idx) { return ({
            resource: resource,
            id: resources.length > 1 ? idx.toString() : resourceListContent.id,
            resourceListContent: resourceListContent,
            name: resource.name,
            order: resource.order || new Date().setHours(idx) // We take into account the resource order because we still support the old raw saved resources
        }); });
    })).sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareProps"])("order"));
    function onResourceSort(source, targetId, placement) {
        var newOrder = Object(_logic_change_sort_order__WEBPACK_IMPORTED_MODULE_7__["reorder"])(resourceListContents, source.id, targetId, placement);
        if (newOrder) {
            var resources = source.resourceListContent.resources;
            //resources can have one or mutiple entries for one content document
            var newResourcesProp = resources.length > 1 ? resources.find(function (res, index) { return index.toString() === source.id; }) : resources[0];
            newResourcesProp.order = newOrder;
            repo.courseContents.update(source.resourceListContent, {
                resources: resources
            });
        }
    }
    var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_common_dialog_context__WEBPACK_IMPORTED_MODULE_3__["DialogsContext"]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "ked_boxed" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Resurser"], ["Resurser"])))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            resourceListContents && Object(_utility_components_draggable_list__WEBPACK_IMPORTED_MODULE_6__["DraggableList"])({
                objectList: resourceListContents,
                renderEditLink: function (resourceListContent) { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { className: "editItem", onClick: function () { return editResourceLink(resourceListContent); } }),
                    "\u00A0"); },
                renderLink: function (genericResource) { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { target: "_blank", href: genericResource.resource.url }, genericResource.resource.name); },
                onSort: function (source, target, placement) { return onResourceSort(source, target.id, placement); }
            }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { className: "btn", onClick: function () {
                    return context.openDialog(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_modal_pages_edit_resource__WEBPACK_IMPORTED_MODULE_4__["EditResource"], { title: "Resurs", onSave: function (resourceToAdd) {
                            resourceToAdd.order = Date.now();
                            repo.courseTabs.addRelated(tab, "contents", {
                                type: "resource-list",
                                id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
                                resources: [resourceToAdd],
                                order: Date.now(),
                                locked: false,
                                lockDelete: false,
                                hidden: false,
                                tags: [courseId, block && tab.type === 'step-course-tab' ?
                                        "blockStep:" + block.id + ":" + tab.stepNo :
                                        "tab:" + tab.id],
                                acl: ["role:USER:R", "schoolRole:" + schoolName + "/EMPLOYEE:S"],
                            });
                            context.closeDialog();
                        } }));
                } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-plus", "aria-hidden": "true" }), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till resurs"], ["L\u00E4gg till resurs"])))))));
};
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/tab-settings-admin.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/tab-settings-admin.tsx ***!
  \*******************************************************************************/
/*! exports provided: TabSettingsAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSettingsAdmin", function() { return TabSettingsAdmin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility-components/align-horizontal */ "./src/components/utility-components/align-horizontal.tsx");
/* harmony import */ var _utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility-components/horizontal-item */ "./src/components/utility-components/horizontal-item.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logic/course-instance-tags */ "./src/components/course-builder-ks/logic/course-instance-tags.ts");
/* harmony import */ var _tab_settings_requirements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-settings-requirements */ "./src/components/course-builder-ks/viewer-editor/tab-settings-requirements.tsx");
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");









var TabSettingsAdmin = function (_a) {
    var tab = _a.tab, repo = _a.repo, course = _a.course, block = _a.block;
    var _b = tab.subject ?
        tab.subject :
        course.type === 'theme-course' && course.subjects && course.subjects.length > 0 ?
            { subjectCode: course.subjects[0].code, subjectName: course.subjects[0].name } :
            course.type === 'step-course' ?
                { subjectCode: course.subject.subjectCode, subjectName: course.subject.subjectName } :
                { subjectCode: '', subjectName: '' }, subjectCode = _b.subjectCode, subjectName = _b.subjectName;
    var courseSchoolYears = Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_5__["getSchoolYears"])(course.tags);
    var schoolYear = Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_5__["getSchoolYears"])(tab.tags)[0] || courseSchoolYears[0] || null;
    return (
    //
    // Edit "standard" school: Choose tab type
    //
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "ked_boxed" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "box-mini-label" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Administrativa Inst\u00E4llningar f\u00F6r fliken ", ""], ["Administrativa Inst\u00E4llningar f\u00F6r fliken ", ""])), tab.name || tab.tabTitle)),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_2__["AlignHorizontal"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_3__["HorizontalItem"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: "checkbox", checked: tab.locked, onChange: function (ev) { return repo.courseTabs.update(tab, { locked: !!ev.target.checked }); } })),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_3__["HorizontalItem"], null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E5s fliken fr\u00E5n redigering f\u00F6rutom d\u00E4r det explicit till\u00E5ts"], ["L\u00E5s fliken fr\u00E5n redigering f\u00F6rutom d\u00E4r det explicit till\u00E5ts"]))))),
        course.type === 'step-course' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_7__["OpenCloseBox"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Avancerat..."], ["Avancerat..."]))) },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "btn", onClick: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
                        var schoolYear;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    schoolYear = Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_5__["getSchoolYears"])(block.tags)[0];
                                    return [4 /*yield*/, updateSubjectAndSchoolYears(course, course.subject.subjectName, course.subject.subjectCode, schoolYear)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); } }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["G\u00F6r om kopplingen till \u00E4mne och \u00E5rskursspann"], ["G\u00F6r om kopplingen till \u00E4mne och \u00E5rskursspann"])))))),
        course.type === 'theme-course' && tab.tabClass === 'subject-tab' && !!subjectCode && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
            course.subjects.length > 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_2__["AlignHorizontal"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_3__["HorizontalItem"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "kclabel" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4mne"], ["\u00C4mne"]))))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_3__["HorizontalItem"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", { value: subjectCode, onChange: function (ev) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
                            var subjectCode, subjectName;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        subjectCode = ev.target.value;
                                        subjectName = course.subjects
                                            .filter(function (s) { return s.code === subjectCode; })
                                            .map(function (s) { return s.name; })[0] || subjectCode;
                                        return [4 /*yield*/, updateSubjectAndSchoolYears(course, subjectName, subjectCode, schoolYear)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); } }, course.subjects.map(function (_a) {
                        var name = _a.name, code = _a.code;
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { key: code, value: code }, name);
                    })))),
            courseSchoolYears.length > 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_2__["AlignHorizontal"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_3__["HorizontalItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "kclabel" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["V\u00E4lj \u00E5rskurs"], ["V\u00E4lj \u00E5rskurs"]))))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_3__["HorizontalItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", { value: schoolYear, onChange: function (ev) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
                                var schoolYear, subjectName;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            schoolYear = ev.target.value;
                                            subjectName = course.subjects
                                                .filter(function (s) { return s.code === subjectCode; })
                                                .map(function (s) { return s.name; })[0] || subjectCode;
                                            return [4 /*yield*/, updateSubjectAndSchoolYears(course, subjectName, subjectCode, schoolYear)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); } }, courseSchoolYears.map(function (year) { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { key: year, value: year }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5rskurs ", ""], ["\u00C5rskurs ", ""])), year)); })))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tab_settings_requirements__WEBPACK_IMPORTED_MODULE_6__["TabRequirements"], { repo: repo, tab: tab })),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_7__["OpenCloseBox"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Avancerat..."], ["Avancerat..."]))) },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "btn", onClick: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, updateSubjectAndSchoolYears(course, subjectName, subjectCode, schoolYear)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); } }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["G\u00F6r om kopplingen till \u00E4mne och \u00E5rskursspann"], ["G\u00F6r om kopplingen till \u00E4mne och \u00E5rskursspann"])))))))));
    function updateSubjectAndSchoolYears(course, subjectName, subjectCode, schoolYear) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var tabTags, lgContents, tasks, tasks_1, tasks_1_1, task, tags;
            var e_1, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tabTags = Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_5__["computeCourseInstanceTags"])(tab.tags, [subjectCode], [schoolYear]);
                        repo.courseTabs.update(tab, {
                            subject: {
                                subjectCode: subjectCode,
                                subjectName: subjectName
                            },
                            tags: tabTags
                        });
                        return [4 /*yield*/, repo.courseContents
                                .hasEdgesFrom([tab.id])
                                .include("tasks")
                                .includeIdsAndNamesOnly()
                                .toValue().load()];
                    case 1:
                        lgContents = _b.sent();
                        tasks = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["flatten"])(lgContents.map(function (c) { return c.tasks; }));
                        try {
                            for (tasks_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(tasks), tasks_1_1 = tasks_1.next(); !tasks_1_1.done; tasks_1_1 = tasks_1.next()) {
                                task = tasks_1_1.value;
                                tags = Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_5__["computeCourseInstanceTags"])([course.id], [subjectCode], [schoolYear]);
                                repo.tasks.update(task, { tags: tags, subject: subjectName });
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (tasks_1_1 && !tasks_1_1.done && (_a = tasks_1.return)) _a.call(tasks_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/tab-settings-requirements.tsx":
/*!**************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/tab-settings-requirements.tsx ***!
  \**************************************************************************************/
/*! exports provided: TabRequirements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabRequirements", function() { return TabRequirements; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _course_builder_sub_components_knowledge_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../course-builder/sub-components/knowledge-matrix */ "./src/components/course-builder/sub-components/knowledge-matrix.tsx");
/* harmony import */ var _utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility-components/lazy-content */ "./src/components/utility-components/lazy-content.tsx");
/* harmony import */ var _logic_get_course_codes_from_tags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logic/get-course-codes-from-tags */ "./src/components/course-builder-ks/logic/get-course-codes-from-tags.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _logic_get_standard_courses_with_ordered_requirements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logic/get-standard-courses-with-ordered-requirements */ "./src/components/course-builder-ks/logic/get-standard-courses-with-ordered-requirements.ts");
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");
/* harmony import */ var _course_builder_sub_components_select_related_docs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../course-builder/sub-components/select-related-docs */ "./src/components/course-builder/sub-components/select-related-docs.tsx");









var TabRequirements = function (_a) {
    var repo = _a.repo, tab = _a.tab;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_3__["LazyContent"], null, Object(_logic_get_standard_courses_with_ordered_requirements__WEBPACK_IMPORTED_MODULE_6__["getStandardCoursesWithOrderedRequirements"])(Object(_logic_get_course_codes_from_tags__WEBPACK_IMPORTED_MODULE_4__["getCourseCodesFromTags"])(tab.tags))
        .map(function (courseTemplates) { return courseTemplates.length === 0 ?
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Fliken \u00E4r inte kopplad till n\u00E5got \u00E4mne / \u00E5rskurs"], ["Fliken \u00E4r inte kopplad till n\u00E5got \u00E4mne / \u00E5rskurs"]))))
        :
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, courseTemplates.map(function (_a) {
                var id = _a.id, name = _a.name, abilities = _a.abilities, centralContent = _a.centralContent, knowledgeRequirements = _a.knowledgeRequirements;
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { key: id },
                    courseTemplates.length === 1 ? undefined : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, name),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_7__["OpenCloseBox"], { className: "larger", title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E5s flikens kunskapskrav"], ["L\u00E5s flikens kunskapskrav"])))) },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Markera de kunskapskrav som \u00E4mnesfliken ska t\u00E4cka."], ["Markera de kunskapskrav som \u00E4mnesfliken ska t\u00E4cka."])))),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_3__["LazyContent"], null, repo["knowledge-requirements"].hasEdgesFrom([tab.id]).idsOnly().toValue().map(function (tabsKrs) {
                            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_knowledge_matrix__WEBPACK_IMPORTED_MODULE_2__["KnowledgeMatrix"], { knowledgeRequirements: knowledgeRequirements, markedIds: tabsKrs.map(function (_a) {
                                    var id = _a.id;
                                    return id;
                                }), markMode: true, onMarkChanged: function (markedId, isMarked) {
                                    // Remove invalid knowledge requirements (those that are not part of the standard course)
                                    // Can happen after changing school year / course or subject.
                                    var invalidKrs = tabsKrs.filter(function (kr) { return !knowledgeRequirements.some(function (_a) {
                                        var id = _a.id;
                                        return kr.id === id;
                                    }); });
                                    invalidKrs.forEach(function (invalidKr) {
                                        repo.courseTabs.removeRelated(tab, "knowledgeRequirements", invalidKr);
                                    });
                                    var markedDoc = knowledgeRequirements.filter(function (_a) {
                                        var id = _a.id;
                                        return id === markedId;
                                    })[0];
                                    if (isMarked) {
                                        repo.courseTabs.addRelated(tab, "knowledgeRequirements", markedDoc);
                                    }
                                    else {
                                        repo.courseTabs.removeRelated(tab, "knowledgeRequirements", markedDoc);
                                    }
                                } });
                        }))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_3__["LazyContent"], null, repo.abilities.hasEdgesFrom([tab.id]).idsOnly().toValue().map(function (tabAbilities) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_select_related_docs__WEBPACK_IMPORTED_MODULE_8__["SelectRelatedDocs"], { options: abilities, title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E5s flikens f\u00F6rm\u00E5gor"], ["L\u00E5s flikens f\u00F6rm\u00E5gor"]))), markedIds: tabAbilities.map(function (_a) {
                                var id = _a.id;
                                return id;
                            }), markMode: true, 
                            //migratedIds={task && task.migratedTexts && task.migratedTexts.abilities}
                            onMarkChanged: function (markedId, isMarked) {
                                // Remove invalid abilities (those that are not part of the standard course)
                                // Can happen after changing school year / course or subject.
                                var invalidAbilities = tabAbilities.filter(function (a) { return !abilities.some(function (_a) {
                                    var id = _a.id;
                                    return a.id === id;
                                }); });
                                invalidAbilities.forEach(function (invalidAbility) {
                                    repo.courseTabs.removeRelated(tab, "abilities", invalidAbility);
                                });
                                var markedDoc = abilities.filter(function (_a) {
                                    var id = _a.id;
                                    return id === markedId;
                                })[0];
                                if (isMarked) {
                                    repo.courseTabs.addRelated(tab, "abilities", markedDoc);
                                }
                                else {
                                    repo.courseTabs.removeRelated(tab, "abilities", markedDoc);
                                }
                            } });
                    })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_3__["LazyContent"], null, repo["central-content"].hasEdgesFrom([tab.id]).idsOnly().toValue().map(function (tabsCCs) {
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_select_related_docs__WEBPACK_IMPORTED_MODULE_8__["SelectRelatedDocs"], { options: centralContent, title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E5s flikens centrala inneh\u00E5ll"], ["L\u00E5s flikens centrala inneh\u00E5ll"]))), markedIds: tabsCCs.map(function (cc) { return cc.id; }), markMode: true, 
                            //migratedIds={task && task.migratedTexts && task.migratedTexts.centralContent}
                            onMarkChanged: function (markedId, isMarked) {
                                // Remove invalid central contents (those that are not part of the standard course)
                                // Can happen after changing school year / course or subject.
                                var invalidCentralContents = tabsCCs.filter(function (cc) { return !centralContent.some(function (_a) {
                                    var id = _a.id;
                                    return cc.id === id;
                                }); });
                                invalidCentralContents.forEach(function (invalidCC) {
                                    repo.courseTabs.removeRelated(tab, "centralContent", invalidCC);
                                });
                                var markedDoc = centralContent.filter(function (_a) {
                                    var id = _a.id;
                                    return id === markedId;
                                })[0];
                                if (isMarked) {
                                    repo.courseTabs.addRelated(tab, "centralContent", markedDoc);
                                }
                                else {
                                    repo.courseTabs.removeRelated(tab, "centralContent", markedDoc);
                                }
                            } });
                    })));
            })); }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/tab-settings.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/tab-settings.tsx ***!
  \*************************************************************************/
/*! exports provided: TabSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSettings", function() { return TabSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility-components/align-horizontal */ "./src/components/utility-components/align-horizontal.tsx");
/* harmony import */ var _utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility-components/horizontal-item */ "./src/components/utility-components/horizontal-item.tsx");
/* harmony import */ var _course_tab_tab_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-tab/tab-classes */ "./src/components/course-builder-ks/viewer-editor/course-tab/tab-classes.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logic/course-instance-tags */ "./src/components/course-builder-ks/logic/course-instance-tags.ts");
/* harmony import */ var _utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utility-components/form-field-text-input */ "./src/components/utility-components/form-field-text-input.tsx");








var TabSettings = function (_a) {
    var tab = _a.tab, repo = _a.repo, course = _a.course;
    var _b = tab.subject ?
        tab.subject :
        course.type === 'theme-course' && course.subjects && course.subjects.length > 0 ?
            { subjectCode: course.subjects[0].code, subjectName: course.subjects[0].name } :
            { subjectCode: '', subjectName: '' }, subjectCode = _b.subjectCode, subjectName = _b.subjectName;
    var courseSchoolYears = Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_6__["getSchoolYears"])(course.tags);
    var schoolYear = Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_6__["getSchoolYears"])(tab.tags)[0] || courseSchoolYears[0] || null;
    return (
    //
    // Edit "standard" school: Choose tab type
    //
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "ked_boxed" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "box-mini-label" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Inst\u00E4llningar f\u00F6r fliken ", ""], ["Inst\u00E4llningar f\u00F6r fliken ", ""])), tab.name || tab.tabTitle)),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_2__["AlignHorizontal"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_3__["HorizontalItem"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "kclabel" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Flikens typ"], ["Flikens typ"]))))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_3__["HorizontalItem"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", { value: tab.tabClass, onChange: function (ev) {
                        return repo.courseTabs.update(tab, ev.target.value === 'subject-tab' ? {
                            tabClass: ev.target.value,
                            subject: { subjectCode: subjectCode, subjectName: subjectName },
                            tags: Object(_logic_course_instance_tags__WEBPACK_IMPORTED_MODULE_6__["computeCourseInstanceTags"])(tab.tags, [subjectCode], [schoolYear])
                        } : {
                            tabClass: ev.target.value,
                        });
                    } }, _course_tab_tab_classes__WEBPACK_IMPORTED_MODULE_4__["TabTypesPerCourseType"][course.type].map(function (tabClass) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { key: tabClass, value: tabClass }, _course_tab_tab_classes__WEBPACK_IMPORTED_MODULE_4__["CourseTabClasses"][tabClass]);
                })))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_7__["TextInput"], { label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Flikens namn"], ["Flikens namn"]))), id: "TabSettings:name", value: tab.name || tab.tabTitle, onChange: function (name) {
                return repo.courseTabs.update(tab, {
                    name: name,
                    tabTitle: name // Deprecated. Todo: remove.
                });
            } })));
};
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/task/left-column/edit-requirements.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/task/left-column/edit-requirements.tsx ***!
  \***********************************************************************************************/
/*! exports provided: EditRequirements, EditRequirementsInner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRequirements", function() { return EditRequirements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRequirementsInner", function() { return EditRequirementsInner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _course_builder_sub_components_knowledge_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../course-builder/sub-components/knowledge-matrix */ "./src/components/course-builder/sub-components/knowledge-matrix.tsx");
/* harmony import */ var _utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility-components/lazy-content */ "./src/components/utility-components/lazy-content.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _logic_ordered_requirements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../logic/ordered-requirements */ "./src/components/course-builder-ks/logic/ordered-requirements.ts");
/* harmony import */ var _course_builder_sub_components_select_related_docs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../course-builder/sub-components/select-related-docs */ "./src/components/course-builder/sub-components/select-related-docs.tsx");
/* harmony import */ var _utility_components_checklist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility-components/checklist */ "./src/components/utility-components/checklist.tsx");
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");
/* harmony import */ var _contracts_ked_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../contracts/ked-models */ "./src/contracts/ked-models.ts");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../features */ "./src/features/index.ts");











var EditRequirements = function (_a) {
    var repo = _a.repo, task = _a.task, tabIds = _a.tabIds, blockId = _a.blockId, themeCoveredSentences = _a.themeCoveredSentences, tabContentIds = _a.tabContentIds;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_3__["LazyContent"], null, blockId ?
        repo.courseBlocks
            .include("tabs", "abilities", "centralContent", "knowledgeRequirements")
            .id(blockId)
            .combineLatest(repo.tasks.hasEdgesFrom(tabContentIds).include("knowledgeRequirements").includeIdsOnly())
            .switchMap(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), block = _b[0], tasks = _b[1];
            //for step subjects we take into account all tasks from all the steps from the current block
            var blockCoveredSentences = tasks && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["flatten"])(tasks.filter(function (req) { return req.partialRequirments != null; }).map(function (_a) {
                var partialRequirments = _a.partialRequirments;
                return partialRequirments;
            }));
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EditRequirementsInner, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, { repo: repo, task: task, tabOrBlock: block, allCoveredSentences: blockCoveredSentences })));
        }) :
        repo.courseTabs
            .include("abilities", "centralContent", "knowledgeRequirements")
            .ids(tabIds)
            .toValue()
            .map(function (tabs) { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, tabs.length === 1 ?
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EditRequirementsInner, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, { repo: repo, task: task, tabOrBlock: tabs[0], allCoveredSentences: themeCoveredSentences })) :
            tabs.map(function (tab) { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_8__["OpenCloseBox"], { key: tab.id, title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null,
                    tab.name || tab.tabTitle,
                    tab.subject && tab.subject.subjectName && tab.subject.subjectName !== (tab.name || tab.tabTitle) ?
                        " (" + tab.subject.subjectName + ")" : '') },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EditRequirementsInner, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, { repo: repo, task: task, tabOrBlock: tab, hasMultipleSubjects: true, allCoveredSentences: themeCoveredSentences }))); })); }));
};
var EditRequirementsInner = function (_a) {
    var tabOrBlock = _a.tabOrBlock, repo = _a.repo, task = _a.task, hasMultipleSubjects = _a.hasMultipleSubjects, allCoveredSentences = _a.allCoveredSentences;
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2), markBySentenceViewActive = _b[0], setActive = _b[1];
    var markPartialKRs = _features__WEBPACK_IMPORTED_MODULE_10__["features"].markPartialKRs;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_3__["LazyContent"], null, Object(_logic_ordered_requirements__WEBPACK_IMPORTED_MODULE_5__["resolveRequirementOrder"])(tabOrBlock).map(function (tab) {
        var subjectName = 'type' in tab && tab.subject && tab.subject.subjectName;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            task.taskType !== 'exercise' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "ked_boxed" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["V\u00E4lj kunskapskrav"], ["V\u00E4lj kunskapskrav"])))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "matrix-knowledge-title" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Markera de kunskapskrav som din uppgift t\u00E4cker."], ["Markera de kunskapskrav som din uppgift t\u00E4cker."])))),
                    markPartialKRs && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fab fa-creative-commons-nd " + (markBySentenceViewActive ? "activePartialView" : ""), onClick: function () { return setActive(!markBySentenceViewActive); } }))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_knowledge_matrix__WEBPACK_IMPORTED_MODULE_2__["KnowledgeMatrix"], { knowledgeRequirements: tab.knowledgeRequirements, markedIds: task.knowledgeRequirements.map(function (req) { return req.id; }), explainedRequirements: task.explainedRequirements || {}, 
                    //idsToMarkNotOk={uncoveredIds}
                    markMode: true, markBySentenceView: markBySentenceViewActive, migratedIds: task && task.migratedTexts && task.migratedTexts.knowledgeRequirements, partialRequirments: task.partialRequirments || {}, coveredPartialRequirments: allCoveredSentences, markPartialFeatureEnabled: markPartialKRs, onExplainedRequirementsChanged: function (requirementId, text) {
                        var _a;
                        return repo.tasks.update(task, {
                            explainedRequirements: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, task.explainedRequirements), (_a = {}, _a[requirementId] = text, _a))
                        });
                    }, onUpdatePartialKnowledge: function (requirementId, partialContents) {
                        //it might be the case that the feature flag is active, the requirment is set as marked and no partial data is saved
                        //when unselecting the requirment, we should do nothing as no partial data is saved
                        var _a;
                        // var result = shouldRemove && task.partialRequirments.filter(pr => partialContents.filter(pc => !pr[requirementId].includes(pc)));
                        //var existingRequirements = task.partialRequirments[requirementId] || [];
                        repo.tasks.update(task, {
                            partialRequirments: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, task.partialRequirments), (_a = {}, _a[requirementId] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(partialContents), _a))
                        });
                        var markedDoc = tab.knowledgeRequirements.filter(function (_a) {
                            var id = _a.id;
                            return id === requirementId;
                        })[0];
                        if (partialContents.length === 0) {
                            repo.tasks.removeRelated(task, "knowledgeRequirements", markedDoc);
                        }
                        else if (!task.partialRequirments || !task.partialRequirments[requirementId] || task.partialRequirments[requirementId].length === 0) {
                            repo.tasks.addRelated(task, "knowledgeRequirements", markedDoc);
                        }
                    }, onMarkChanged: function (markedId, isMarked) {
                        var _a, _b;
                        var markedDoc = tab.knowledgeRequirements.filter(function (_a) {
                            var id = _a.id;
                            return id === markedId;
                        })[0];
                        if (isMarked) {
                            if (hasMultipleSubjects) {
                                // Mission tabs needs to store the subject name connected to each knowledge requirement:
                                repo.tasks.update(task, { idsToSubjectMap: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, task.idsToSubjectMap), (_a = {}, _a[markedId] = subjectName, _a)) });
                            }
                            else {
                                repo.tasks.update(task, { idsToSubjectMap: undefined });
                            }
                            repo.tasks.addRelated(task, "knowledgeRequirements", markedDoc);
                        }
                        else {
                            if (hasMultipleSubjects) {
                                // Mission tabs needs to delete the subject name connected to each knowledge requirement:
                                repo.tasks.update(task, { idsToSubjectMap: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, task.idsToSubjectMap), (_b = {}, _b[markedId] = undefined, _b)) });
                            }
                            else {
                                repo.tasks.update(task, { idsToSubjectMap: undefined });
                            }
                            repo.tasks.removeRelated(task, "knowledgeRequirements", markedDoc);
                        }
                    } })),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "sv-html-portlet sv-portlet" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_select_related_docs__WEBPACK_IMPORTED_MODULE_6__["SelectRelatedDocs"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["V\u00E4lj f\u00F6rm\u00E5gor"], ["V\u00E4lj f\u00F6rm\u00E5gor"]))), options: tab.abilities, markedIds: task.abilities.map(function (a) { return a.id; }), markMode: true, migratedIds: task && task.migratedTexts && task.migratedTexts.abilities, onMarkChanged: function (markedId, isMarked) {
                        var markedDoc = tab.abilities.filter(function (a) { return a.id === markedId; })[0];
                        if (isMarked) {
                            repo.tasks.addRelated(task, "abilities", markedDoc);
                        }
                        else {
                            repo.tasks.removeRelated(task, "abilities", markedDoc);
                        }
                    } })),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "sv-html-portlet sv-portlet" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_select_related_docs__WEBPACK_IMPORTED_MODULE_6__["SelectRelatedDocs"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["V\u00E4lj centralt inneh\u00E5ll"], ["V\u00E4lj centralt inneh\u00E5ll"]))), options: tab.centralContent, markedIds: task.centralContent.map(function (cc) { return cc.id; }), markMode: true, migratedIds: task && task.migratedTexts && task.migratedTexts.centralContent, onMarkChanged: function (markedId, isMarked) {
                        var markedDoc = tab.centralContent.filter(function (a) { return a.id === markedId; })[0];
                        if (isMarked) {
                            repo.tasks.addRelated(task, "centralContent", markedDoc);
                        }
                        else {
                            repo.tasks.removeRelated(task, "centralContent", markedDoc);
                        }
                    } })),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "sv-html-portlet sv-portlet" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_8__["OpenCloseBox"], { className: "larger", title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["V\u00E4lj framtidsf\u00F6rm\u00E5gor"], ["V\u00E4lj framtidsf\u00F6rm\u00E5gor"])))) },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_checklist__WEBPACK_IMPORTED_MODULE_7__["Checklist"], { available: _contracts_ked_models__WEBPACK_IMPORTED_MODULE_9__["futureAbilities"].map(function (fa) { return ({ name: fa, key: fa }); }), selected: task.futureAbilities, onChange: function (selectedFas) { return repo.tasks.update(task, { futureAbilities: selectedFas }); } }))));
    }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/task/right-column/basic-editable-task-fields.tsx":
/*!*********************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/task/right-column/basic-editable-task-fields.tsx ***!
  \*********************************************************************************************************/
/*! exports provided: BasicEditableTaskFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicEditableTaskFields", function() { return BasicEditableTaskFields; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _course_builder_modal_pages_edit_task_task_migration_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../course-builder/modal-pages/edit-task/task-migration-box */ "./src/components/course-builder/modal-pages/edit-task/task-migration-box.tsx");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utility_components_checklist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility-components/checklist */ "./src/components/utility-components/checklist.tsx");
/* harmony import */ var _utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility-components/lazy-content */ "./src/components/utility-components/lazy-content.tsx");
/* harmony import */ var _common_field_limits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/field-limits */ "./src/components/course-builder-ks/common/field-limits.ts");









var BasicEditableTaskFields = function (_a) {
    var task = _a.task, writeAccess = _a.writeAccess, repo = _a.repo, contentId = _a.contentId, tab = _a.tab;
    var tabClass = tab ? tab.tabClass : null; // tab is undefined on step courses. But there are no mission tabs on step courses.
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "align-horizontal spaced" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "horizontalItem top" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, tabClass === 'mission-tab' ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppdragets namn:"], ["Uppdragets namn:"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppgiftens namn:"], ["Uppgiftens namn:"]))))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "horizontalItem top" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { autoFocus: true, type: "text", size: 35, value: task.name, disabled: !writeAccess, readOnly: !writeAccess, onChange: function (ev) {
                        repo.tasks.update(task, { name: ev.target.value.substr(0, _common_field_limits__WEBPACK_IMPORTED_MODULE_8__["FieldLimits"].MAX_CHARS_TASK_NAMES) });
                    } }))),
        task.migratedTexts && writeAccess && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_modal_pages_edit_task_task_migration_box__WEBPACK_IMPORTED_MODULE_2__["TaskMigrationBox"], { task: task, course: null, updateLink: function (id, linkOrUnlink) { throw new Error("Not implemented yet"); } }),
        tabClass !== 'mission-tab' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "align-horizontal spaced" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "horizontalItem top" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4randem\u00E5l:"], ["L\u00E4randem\u00E5l:"]))))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "horizontalItem top" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_7__["LazyContent"], null, repo.courseContents.id(contentId).map(function (content) {
                    if (content.type !== 'learning-goals')
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ej valbart"], ["Ej valbart"]))));
                    var hasCommonLearningGoals = content.hasCommonLearningGoals;
                    var learningGoals = content.commonLearningGoals;
                    var availableGoals = learningGoals.map(function (lg) { return lg.trim(); }).filter(function (lg) { return lg; })
                        .map(function (lg) { return ({
                        name: lg,
                        key: lg
                    }); });
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_checklist__WEBPACK_IMPORTED_MODULE_6__["Checklist"], { available: availableGoals, selected: task.learningGoal.length > 0 ? task.learningGoal.split('\n') : [], onChange: function (goals, goal) {
                            if (hasCommonLearningGoals) {
                                repo.tasks.update(task, { learningGoal: goals.join('\n') });
                            }
                            else {
                                repo.tasks.update(task, { learningGoal: goal });
                            }
                        } });
                })))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, tabClass === 'mission-tab' ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppdragstyp"], ["Uppdragstyp"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppgiftstyp"], ["Uppgiftstyp"])))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_checklist__WEBPACK_IMPORTED_MODULE_6__["Checklist"], { available: [
                    tabClass !== 'mission-tab' && { name: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00D6vningsuppgift"], ["\u00D6vningsuppgift"]))), key: 'exercise' },
                    { name: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppgift"], ["Uppgift"]))), key: "task" },
                    { name: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["L"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Inl\u00E4mningsuppgift"], ["Inl\u00E4mningsuppgift"]))), key: 'assignment' },
                ].filter(function (x) { return x; }), selected: [task.taskType], onChange: function (_, clickedKey) { return repo.tasks.update(task, { taskType: clickedKey }); } }),
            task.taskType === 'assignment' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Inl\u00E4mningsdatum"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"], { nextMonthButtonLabel: "", showWeekNumbers: true, previousMonthButtonLabel: "", selected: task.deadline && moment__WEBPACK_IMPORTED_MODULE_4___default()(task.deadline).toDate(), dateFormat: "yyyy-MM-dd", locale: "sv", popperPlacement: "bottom-start", onChange: function (value) {
                                repo.tasks.update(task, { deadline: moment__WEBPACK_IMPORTED_MODULE_4___default()(value).format("YYYY-MM-DD") });
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "horizontalItem top" }, task.deadline && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { className: "deleteDate", href: "#", title: "Ta bort inl\u00E4mningsdatum", onClick: function (ev) {
                            ev.preventDefault();
                            repo.tasks.update(task, { deadline: null });
                        } }))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "taskContainer" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "align-horizontal" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "horizontalItem top", onClick: function () {
                                return repo.tasks.update(task, { sendToUrkund: task.sendToUrkund == null ? false : !task.sendToUrkund });
                            } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "checkBox" + ((task.sendToUrkund == null ? true : task.sendToUrkund) ? " checked" : "") })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "horizontalItem top" }, "Verify assignments with Urkund"))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/task/right-column/edit-task-form.tsx":
/*!*********************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/task/right-column/edit-task-form.tsx ***!
  \*********************************************************************************************/
/*! exports provided: EditTaskForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskForm", function() { return EditTaskForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _basic_editable_task_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-editable-task-fields */ "./src/components/course-builder-ks/viewer-editor/task/right-column/basic-editable-task-fields.tsx");
/* harmony import */ var _task_footer_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-footer-buttons */ "./src/components/course-builder-ks/viewer-editor/task/right-column/task-footer-buttons.tsx");
/* harmony import */ var _introduction_text_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introduction-text-editor */ "./src/components/course-builder-ks/viewer-editor/task/right-column/introduction-text-editor.tsx");
/* harmony import */ var _task_description_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-description-editor */ "./src/components/course-builder-ks/viewer-editor/task/right-column/task-description-editor.tsx");
/* harmony import */ var _task_working_procedure_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-working-procedure-editor */ "./src/components/course-builder-ks/viewer-editor/task/right-column/task-working-procedure-editor.tsx");
/* harmony import */ var _task_embedded_html_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-embedded-html-editor */ "./src/components/course-builder-ks/viewer-editor/task/right-column/task-embedded-html-editor.tsx");







var EditTaskForm = function (_a) {
    var repo = _a.repo, course = _a.course, draftId = _a.draftId, tabId = _a.tabId, tab = _a.tab, contentId = _a.contentId, writeAccess = _a.writeAccess, task = _a.task, school = _a.school;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_basic_editable_task_fields__WEBPACK_IMPORTED_MODULE_1__["BasicEditableTaskFields"], { repo: repo, task: task, writeAccess: writeAccess, contentId: contentId, tab: tab }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_introduction_text_editor__WEBPACK_IMPORTED_MODULE_3__["IntroductionTextEditor"], { repo: repo, task: task, writeAccess: writeAccess }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_task_description_editor__WEBPACK_IMPORTED_MODULE_4__["TaskDescriptionEditor"], { writeAccess: writeAccess, task: task, repo: repo }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_task_working_procedure_editor__WEBPACK_IMPORTED_MODULE_5__["TaskWorkingProcedureEditor"], { writeAccess: writeAccess, task: task, repo: repo, step: tab && tab.type === 'step-course-tab' && tab.stepNo }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_task_embedded_html_editor__WEBPACK_IMPORTED_MODULE_6__["TaskEmbeddedHTMLEditor"], { writeAccess: writeAccess, task: task, repo: repo }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_task_footer_buttons__WEBPACK_IMPORTED_MODULE_2__["TaskFooterButtons"], { repo: repo, task: task, courseId: course.id, draftId: draftId, tabId: tabId, contentId: contentId, school: school }));
};
/*

  * Inte kunna ändra ordning på låsta rutor om inte isKedStaff().
  * Ingen lägg till uppgifts-knapp om inte editMode.
  *
  * Redigera uppgiftsinnehåll
  * Lås lärandemålen till admin alltid
  * Kunna klicka in sig på uppgiften
  * Kunna ta bort uppgift
  * Kunna nollställa ändringar för skolan

*/ 


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/task/right-column/introduction-text-editor.tsx":
/*!*******************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/task/right-column/introduction-text-editor.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: IntroductionTextEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionTextEditor", function() { return IntroductionTextEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility-components/wysiwyg */ "./src/components/utility-components/wysiwyg/index.tsx");
/* harmony import */ var _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility-components/wysiwyg/actions-sv */ "./src/components/utility-components/wysiwyg/actions-sv.ts");





var IntroductionTextEditor = function (_a) {
    var repo = _a.repo, task = _a.task, writeAccess = _a.writeAccess;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Introtext"], ["Introtext"])))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "subHeader" }, "(Skriv en introduktion till uppgiften)"),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_3__["Wysiwyg"], { actions: [
                "bold",
                "italic",
                "underline",
                "link",
                "image",
                "clear"
            ], defaultActions: _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_4__["default"], readOnly: !writeAccess, html: task.content || "", onChange: function (html) { return repo.tasks.update(task, { content: html }); } }));
};
var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/task/right-column/task-description-editor.tsx":
/*!******************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/task/right-column/task-description-editor.tsx ***!
  \******************************************************************************************************/
/*! exports provided: TaskDescriptionEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDescriptionEditor", function() { return TaskDescriptionEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility-components/wysiwyg */ "./src/components/utility-components/wysiwyg/index.tsx");
/* harmony import */ var _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility-components/wysiwyg/actions-sv */ "./src/components/utility-components/wysiwyg/actions-sv.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _texts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../texts */ "./src/components/course-builder-ks/viewer-editor/task/texts.ts");
/* harmony import */ var _common_field_limits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/field-limits */ "./src/components/course-builder-ks/common/field-limits.ts");








function TaskDescriptionEditor(_a) {
    var writeAccess = _a.writeAccess, task = _a.task, repo = _a.repo;
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0), 2), numChars = _b[0], setNumChars = _b[1];
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, _texts__WEBPACK_IMPORTED_MODULE_5__["taskTypeHeadings"][task.taskType] || Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppgift"], ["Uppgift"])))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "subHeader" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["(Skriv in en kort f\u00F6rklaring, max ", " tecken, vad uppgiften g\u00E5r ut p\u00E5.)"], ["(Skriv in en kort f\u00F6rklaring, max ", " tecken, vad uppgiften g\u00E5r ut p\u00E5.)"])), _common_field_limits__WEBPACK_IMPORTED_MODULE_6__["FieldLimits"].MAX_CHARS_TASK_INTRO_TEXT)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_2__["Wysiwyg"], { actions: [
                "bold", "clear"
            ], defaultActions: _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_3__["default"], readOnly: !writeAccess, html: task.description || "", maxChars: _common_field_limits__WEBPACK_IMPORTED_MODULE_6__["FieldLimits"].MAX_CHARS_TASK_INTRO_TEXT, reportNumChars: function (numChars) { return setNumChars(numChars); }, onChange: function (html) {
                repo.tasks.update(task, { description: html });
            } }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { textAlign: 'right', opacity: 0.7, fontSize: '8pt' } }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["", " av ", ""], ["", " av ", ""])), numChars, _common_field_limits__WEBPACK_IMPORTED_MODULE_6__["FieldLimits"].MAX_CHARS_TASK_INTRO_TEXT)));
}
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/task/right-column/task-embedded-html-editor.tsx":
/*!********************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/task/right-column/task-embedded-html-editor.tsx ***!
  \********************************************************************************************************/
/*! exports provided: TaskEmbeddedHTMLEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEmbeddedHTMLEditor", function() { return TaskEmbeddedHTMLEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../logic/is-ked-staff */ "./src/components/course-builder-ks/logic/is-ked-staff.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/utils */ "./src/utils/utils.ts");




var TaskEmbeddedHTMLEditor = function (_a) {
    var task = _a.task, repo = _a.repo;
    return Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_2__["isKedStaff"])() ? task.embeddedHtml ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Inb\u00E4ddat material"], ["Inb\u00E4ddat material"])))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Klipp in HTML kod nedan"], ["Klipp in HTML kod nedan"])))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", { style: { width: "100%", height: "100px" }, value: task.embeddedHtml, onChange: function (ev) { return repo.tasks.update(task, { embeddedHtml: ev.target.value }); } })) :
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "btn", onClick: function () { return repo.tasks.update(task, { embeddedHtml: " " }); } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-code", "aria-hidden": true }),
                "\u00A0", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till inb\u00E4ddat material"], ["L\u00E4gg till inb\u00E4ddat material"])))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)) :
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
};
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/task/right-column/task-footer-buttons.tsx":
/*!**************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/task/right-column/task-footer-buttons.tsx ***!
  \**************************************************************************************************/
/*! exports provided: TaskFooterButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFooterButtons", function() { return TaskFooterButtons; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility-components/horizontal-item */ "./src/components/utility-components/horizontal-item.tsx");
/* harmony import */ var _utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility-components/align-horizontal */ "./src/components/utility-components/align-horizontal.tsx");







var TaskFooterButtons = Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (_a) {
    var school = _a.school, courseId = _a.courseId, tabId = _a.tabId, contentId = _a.contentId, draftId = _a.draftId, task = _a.task, repo = _a.repo, history = _a.history;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "btn btn-warning pull-right", onClick: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                // Here we don't supply the tags from the courseContents.
                                // Would only affect optimistic updates but since the relatedDoc
                                // (the task) has the tags, the delta viewer will still be able
                                // to categorize it within the correct view.
                                repo.courseContents.removeRelated({ id: contentId }, "tasks", task);
                                return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_4__["db"].saveNow()];
                            case 1:
                                _a.sent();
                                history.push("/" + school + "/courses/" + courseId + "/tabs/" + tabId + "/drafts/" + draftId + "/edit");
                                return [2 /*return*/];
                        }
                    });
                }); } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-trash-alt", "aria-hidden": true }),
                "\u00A0",
                school === 'standard' ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ta bort uppgiften"], ["Ta bort uppgiften"]))) : 'Dölj uppgiften'),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_6__["AlignHorizontal"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_5__["HorizontalItem"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "btn", onClick: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, repo.saveNow()];
                                    case 1:
                                        _a.sent();
                                        history.push("/" + school + "/courses/" + courseId + "/tabs/" + (tabId || '$') + "/contents/" + contentId + "/tasks/" + task.id + "/drafts/" + draftId);
                                        return [2 /*return*/];
                                }
                            });
                        }); } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-eye", "aria-hidden": true }),
                        "\u00A0", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["F\u00F6rhandsgranska"], ["F\u00F6rhandsgranska"]))))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_5__["HorizontalItem"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "btn", onClick: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                history.push("/" + school + "/courses/" + courseId + "/tabs/" + (tabId || '$') + "/drafts/" + draftId + "/edit");
                                return [2 /*return*/];
                            });
                        }); } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-arrow-left", "aria-hidden": true }),
                        "\u00A0", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5terg\u00E5 till fliken"], ["\u00C5terg\u00E5 till fliken"]))))))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null));
});
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/task/right-column/task-working-procedure-editor.tsx":
/*!************************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/task/right-column/task-working-procedure-editor.tsx ***!
  \************************************************************************************************************/
/*! exports provided: TaskWorkingProcedureEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskWorkingProcedureEditor", function() { return TaskWorkingProcedureEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility-components/wysiwyg */ "./src/components/utility-components/wysiwyg/index.tsx");
/* harmony import */ var _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utility-components/wysiwyg/actions-sv */ "./src/components/utility-components/wysiwyg/actions-sv.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _common_dialog_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/dialog-context */ "./src/components/course-builder-ks/common/dialog-context.ts");
/* harmony import */ var _logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../logic/is-ked-staff */ "./src/components/course-builder-ks/logic/is-ked-staff.ts");
/* harmony import */ var _common_select_word_bank__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/select-word-bank */ "./src/components/course-builder-ks/common/select-word-bank.tsx");
/* harmony import */ var _utility_components_wysiwyg_restore_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility-components/wysiwyg/restore-selection */ "./src/components/utility-components/wysiwyg/restore-selection.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");











function TaskWorkingProcedureEditor(_a) {
    var writeAccess = _a.writeAccess, task = _a.task, repo = _a.repo, step = _a.step;
    var dialogCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_common_dialog_context__WEBPACK_IMPORTED_MODULE_5__["DialogsContext"]);
    var actions = [
        "bold",
        "italic",
        "underline",
        "olist",
        "outdent",
        "indent",
        "link",
        "image",
        "clear"
    ];
    if (writeAccess) {
        if (step) {
            // This task is put on a step. We could link to a word bank:
            actions.push({
                name: "listWordBank",
                icon: '<i class="fas fa-book" aria-hidden="true"></i>',
                title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4nka till ordbank"], ["L\u00E4nka till ordbank"]))),
                result: function (ev, wysiwyg) {
                    var selection = Object(_utility_components_wysiwyg_restore_selection__WEBPACK_IMPORTED_MODULE_8__["saveSelection"])();
                    dialogCtx.openDialog(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_select_word_bank__WEBPACK_IMPORTED_MODULE_7__["SelectWordBank"], { subject: task.subject, step: step, onSelect: function (_a) {
                            var name = _a.name, url = _a.url;
                            dialogCtx.closeDialog();
                            Object(_utility_components_wysiwyg_restore_selection__WEBPACK_IMPORTED_MODULE_8__["restoreSelection"])(selection);
                            var elem = document.createElement('a');
                            elem.href = url;
                            elem.target = "_blank";
                            elem.appendChild(document.createTextNode(name));
                            document.execCommand('insertHTML', false, elem.outerHTML);
                        } }));
                }
            });
        }
        if (Object(_logic_is_ked_staff__WEBPACK_IMPORTED_MODULE_6__["isKedStaff"])()) {
            actions.push({
                icon: '<i class="fas fa-link" style="color:var(--col-accent)" aria-hidden="true"></i>',
                title: 'Resurs länk',
                result: function () {
                    var url = window.prompt('Ange länkens URL för resursen');
                    if (url) {
                        //check that the entered URL is the same with the current one
                        var urlObj = new URL('', url);
                        if (urlObj.host !== window.location.host) {
                            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["showError"])("Ogiltig resursadress");
                            return;
                        }
                        //match the resourceId
                        var regex = new RegExp("([^\.|/]+).([^\.]+)(?=\.html)");
                        var urlResults = regex.exec(urlObj.pathname);
                        if (!_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_9__["cfg"].KED_RESOURCES_URL) {
                            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["showError"])("Resurser URL är inte konfigurerad");
                            return;
                        }
                        //replace cfg value with the one from the provided url
                        var valueFromConfig = _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_9__["cfg"].KED_RESOURCES_URL.replace("{value}", urlResults[0]);
                        var elem = document.createElement('a');
                        var seletectedText = window.getSelection().toString();
                        elem.href = valueFromConfig;
                        elem.target = "_blank";
                        elem.appendChild(document.createTextNode(seletectedText));
                        valueFromConfig && seletectedText && document.execCommand('insertHTML', false, elem.outerHTML);
                    }
                }
            });
        }
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Arbetsprocess"], ["Arbetsprocess"])))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_2__["Wysiwyg"], { actions: actions, defaultActions: _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_3__["default"], readOnly: !writeAccess, html: task.workingProcedure || "", onChange: function (html) {
                repo.tasks.update(task, { workingProcedure: html });
            } }));
}
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/task/task-editor.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/task/task-editor.tsx ***!
  \*****************************************************************************/
/*! exports provided: TaskEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEditor", function() { return TaskEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility-components/live-query-view */ "./src/components/utility-components/live-query-view.tsx");
/* harmony import */ var _common_two_columns_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/two-columns-page */ "./src/components/course-builder-ks/common/two-columns-page.tsx");
/* harmony import */ var _right_column_edit_task_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./right-column/edit-task-form */ "./src/components/course-builder-ks/viewer-editor/task/right-column/edit-task-form.tsx");
/* harmony import */ var _logic_ordered_requirements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logic/ordered-requirements */ "./src/components/course-builder-ks/logic/ordered-requirements.ts");
/* harmony import */ var _left_column_edit_requirements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./left-column/edit-requirements */ "./src/components/course-builder-ks/viewer-editor/task/left-column/edit-requirements.tsx");
/* harmony import */ var _logic_is_employee__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../logic/is-employee */ "./src/components/course-builder-ks/logic/is-employee.ts");
/* harmony import */ var _course_builder_courses_business_logic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../course-builder/courses/business-logic */ "./src/components/course-builder/courses/business-logic.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");










var TaskEditor = Object(_utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_2__["liveQueryView"])(function (_a) {
    var school = _a.school, course = _a.course, activeTab = _a.activeTab, draftId = _a.draftId, branch = _a.branch, contentId = _a.contentId, taskId = _a.taskId, blockId = _a.blockId, tabs = _a.tabs;
    var themeCourseTab = course.tabs.find(function (t) { return t.id === activeTab; });
    var involvedTabIds = (themeCourseTab && themeCourseTab.tabClass === 'mission-tab') ?
        course.tabs.filter(function (tab) { return tab.tabClass === 'subject-tab'; }).map(function (tab) { return tab.id; }) :
        themeCourseTab ? [activeTab] : tabs.map(function (t) { return t.id; });
    return branch.tasks
        .include("abilities", "centralContent", "knowledgeRequirements").includeIdsOnly()
        //.debug()
        .hasEdgesFrom([contentId])
        .toValue()
        .combineLatest(branch.courseTabs
        .include("abilities", "contents", "centralContent", "knowledgeRequirements")
        .ids(involvedTabIds))
        .switchMap(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), tasks = _b[0], involvedTabs = _b[1];
        // on theme courses - missing-tabs compute not covered docs using the 'subject-class' tabs ids otherwise use the current active tab values
        // the get getIdsNotCoveredByReqReferencingDocs function result is used only for abilities and central content, not knowledge requirements
        var currentTabs = (themeCourseTab && themeCourseTab.tabClass === 'mission-tab') ? involvedTabs : involvedTabs.filter(function (tId) { return tId.id === activeTab; });
        //the tabContentsIds is used in EditRequirements component for computing the covered requirements for tasks from all steps from current block 
        var tabContentIds = themeCourseTab ? [contentId] : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["flatten"])(involvedTabs.map(function (it) { return it.contents.filter(function (c) { return c.type === "learning-goals"; }).map(function (c) { return c.id; }); }));
        var task = tasks.filter(function (t) { return t.id === taskId; })[0];
        var uncoveredIds = Object(_course_builder_courses_business_logic__WEBPACK_IMPORTED_MODULE_8__["getIdsNotCoveredByReqReferencingDocs"])(currentTabs, tasks);
        //compute uncovered sentences
        var allCoveredSentences = themeCourseTab && tasks && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["flatten"])(tasks.filter(function (req) { return req.partialRequirments != null; }).map(function (_a) {
            var partialRequirments = _a.partialRequirments;
            return partialRequirments;
        }));
        return Object(_logic_ordered_requirements__WEBPACK_IMPORTED_MODULE_5__["resolveRequirementOrder"])(task).map(function (task) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_two_columns_page__WEBPACK_IMPORTED_MODULE_3__["TwoColumnsPage"], { left: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_left_column_edit_requirements__WEBPACK_IMPORTED_MODULE_6__["EditRequirements"], { repo: branch, task: task, tabIds: involvedTabIds, blockId: blockId, tabContentIds: tabContentIds, themeCoveredSentences: allCoveredSentences }), right: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_right_column_edit_task_form__WEBPACK_IMPORTED_MODULE_4__["EditTaskForm"], { repo: branch, school: school, course: course, draftId: draftId, tabId: activeTab, tab: null, contentId: contentId, writeAccess: Object(_logic_is_employee__WEBPACK_IMPORTED_MODULE_7__["isEmployee"])(school), task: task }), rightWidth: 6 });
        });
    });
});


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/task/texts.ts":
/*!**********************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/task/texts.ts ***!
  \**********************************************************************/
/*! exports provided: taskTypeHeadings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskTypeHeadings", function() { return taskTypeHeadings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");


var taskTypeHeadings = {
    exercise: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00D6vningsuppgift"], ["\u00D6vningsuppgift"]))),
    task: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppgift"], ["Uppgift"]))),
    assignment: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Inl\u00E4mningsuppgift"], ["Inl\u00E4mningsuppgift"])))
};
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/task/viewer/task-viewer-page.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/task/viewer/task-viewer-page.tsx ***!
  \*****************************************************************************************/
/*! exports provided: TaskViewerPage, TaskViewerPageInner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewerPage", function() { return TaskViewerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewerPageInner", function() { return TaskViewerPageInner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility-components/live-query-view */ "./src/components/utility-components/live-query-view.tsx");
/* harmony import */ var _common_two_columns_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/two-columns-page */ "./src/components/course-builder-ks/common/two-columns-page.tsx");
/* harmony import */ var _weekplanner_weekplanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../weekplanner/weekplanner */ "./src/components/weekplanner/weekplanner.tsx");
/* harmony import */ var _task_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-viewer */ "./src/components/course-builder-ks/viewer-editor/task/viewer/task-viewer.tsx");
/* harmony import */ var _utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility-components/lazy-content */ "./src/components/utility-components/lazy-content.tsx");
/* harmony import */ var _logic_ordered_requirements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../logic/ordered-requirements */ "./src/components/course-builder-ks/logic/ordered-requirements.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");












var TaskViewerPage = Object(_utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_2__["liveQueryView"])(function (props) {
    return props.lazyRepo.map(function (repo) { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TaskViewerPageInner, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { repo: repo }))); });
});
var TaskViewerPageInner = Object(react_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Object(_utility_components_live_query_view__WEBPACK_IMPORTED_MODULE_2__["liveQueryView"])(function (_a) {
    var school = _a.school, courseId = _a.courseId, activeTab = _a.activeTab, repo = _a.repo, taskId = _a.taskId, draftId = _a.draftId, contentId = _a.contentId, history = _a.history;
    return (repo.tasks
        .include("abilities", "centralContent", "knowledgeRequirements")
        .id(taskId)
        .combineLatest(repo.courseInstances.id(courseId))
        .map(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), task = _b[0], course = _b[1];
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_two_columns_page__WEBPACK_IMPORTED_MODULE_3__["TwoColumnsPage"], { left: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_6__["LazyContent"], null, Object(_logic_ordered_requirements__WEBPACK_IMPORTED_MODULE_7__["resolveRequirementOrder"])(task).map(function (task) { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_task_viewer__WEBPACK_IMPORTED_MODULE_5__["TaskViewer"], { school: school, task: task, courseType: course.type, courseId: course.id, abilities: task.abilities, centralContent: task.centralContent, requirements: task.knowledgeRequirements, futureAbilities: task.futureAbilities, contentId: contentId, lazyRepo: repo }),
                draftId && contentId && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "btn", onClick: function () { return history.push("/" + school + "/courses/" + courseId + "/tabs/" + activeTab + "/contents/" + contentId + "/tasks/" + taskId + "/drafts/" + draftId + "/edit"); } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-lg fa-pencil-alt" }),
                        " ", Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Forts\u00E4tt redigera"], ["Forts\u00E4tt redigera"])))))); })), right: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_weekplanner_weekplanner__WEBPACK_IMPORTED_MODULE_4__["WeekPlanner"], { env: _globals_KED_env__WEBPACK_IMPORTED_MODULE_10__["default"], viewCourseUrl: _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_11__["default"].KED_COURSE_VIEWER_URL }), rightWidth: 5 });
    }));
}));
var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/task/viewer/task-viewer.tsx":
/*!************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/task/viewer/task-viewer.tsx ***!
  \************************************************************************************/
/*! exports provided: TaskViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewer", function() { return TaskViewer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logic_is_employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../logic/is-employee */ "./src/components/course-builder-ks/logic/is-employee.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _course_viewer_course_page_task_assignments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../course-viewer/course-page/task-assignments */ "./src/components/course-viewer/course-page/task-assignments.tsx");
/* harmony import */ var _course_viewer_subcomponents_abilities_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../course-viewer/subcomponents/abilities-box */ "./src/components/course-viewer/subcomponents/abilities-box.tsx");
/* harmony import */ var _course_viewer_subcomponents_central_content_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../course-viewer/subcomponents/central-content-box */ "./src/components/course-viewer/subcomponents/central-content-box.tsx");
/* harmony import */ var _course_viewer_subcomponents_knowledge_requirements_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../course-viewer/subcomponents/knowledge-requirements-table */ "./src/components/course-viewer/subcomponents/knowledge-requirements-table.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _texts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../texts */ "./src/components/course-builder-ks/viewer-editor/task/texts.ts");
/* harmony import */ var _common_future_abilities_box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/future-abilities-box */ "./src/components/course-builder-ks/common/future-abilities-box.tsx");
/* harmony import */ var _utility_components_wysiwyg_wash_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utility-components/wysiwyg/wash-html */ "./src/components/utility-components/wysiwyg/wash-html.ts");
/* harmony import */ var _utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utility-components/lazy-content */ "./src/components/utility-components/lazy-content.tsx");
/* harmony import */ var _utility_components_extra_page_buttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utility-components/extra-page-buttons */ "./src/components/utility-components/extra-page-buttons.tsx");
/* harmony import */ var _utils_get_school_name_from_branch_id__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../utils/get-school-name-from-branch-id */ "./src/utils/get-school-name-from-branch-id.ts");















var TaskViewer = function (_a) {
    var school = _a.school, task = _a.task, courseId = _a.courseId, abilities = _a.abilities, centralContent = _a.centralContent, requirements = _a.requirements, futureAbilities = _a.futureAbilities, contentId = _a.contentId, lazyRepo = _a.lazyRepo, courseType = _a.courseType;
    var deadlineTooLate = task.deadline && moment__WEBPACK_IMPORTED_MODULE_3___default()(task.deadline).endOf('day') < moment__WEBPACK_IMPORTED_MODULE_3___default()();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "sv-text-portlet sv-use-margins sv-skip-spacer" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_extra_page_buttons__WEBPACK_IMPORTED_MODULE_13__["ExtraPageButtons"], null),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "sv-text-portlet-content" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", { className: "h1" }, task.name))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "sv-html-portlet sv-portlet" }, task.content && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { dangerouslySetInnerHTML: { __html: Object(_utility_components_wysiwyg_wash_html__WEBPACK_IMPORTED_MODULE_11__["washHtml"])(task.content) } }))),
        task.description && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "sv-html-portlet sv-portlet" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: ["ked_boxed", "taskBox", task.taskType].join(' '), style: { clear: "both" } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, _texts__WEBPACK_IMPORTED_MODULE_9__["taskTypeHeadings"][task.taskType] || Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppgift"], ["Uppgift"])))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { dangerouslySetInnerHTML: { __html: Object(_utility_components_wysiwyg_wash_html__WEBPACK_IMPORTED_MODULE_11__["washHtml"])(task.description) } }))),
        task.workingProcedure && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", { className: "h3" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Arbetsprocess"], ["Arbetsprocess"])))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "rich-text-readonly", dangerouslySetInnerHTML: { __html: Object(_utility_components_wysiwyg_wash_html__WEBPACK_IMPORTED_MODULE_11__["washHtml"])(task.workingProcedure) } })),
         false && false,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
        task.embeddedHtml && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { dangerouslySetInnerHTML: { __html: task.embeddedHtml } }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
        task.taskType === 'assignment' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Inl\u00E4mningsuppgift"),
            Object(_logic_is_employee__WEBPACK_IMPORTED_MODULE_2__["isEmployee"])(school) ?
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "H\u00E4r kan du som l\u00E4rare se elevernas inl\u00E4mnade arbeten.") : Object(_logic_is_employee__WEBPACK_IMPORTED_MODULE_2__["isEmployee"])() ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Detta \u00E4r en inl\u00E4mningsuppgift med inl\u00E4mningsdatum ", ""], ["Detta \u00E4r en inl\u00E4mningsuppgift med inl\u00E4mningsdatum ", ""])), moment__WEBPACK_IMPORTED_MODULE_3___default()(task.deadline).format('YYYY-MM-DD'))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4mna in ditt arbete som en pdf, doc eller odt fil genom att dra det till f\u00E4ltet under."], ["L\u00E4mna in ditt arbete som en pdf, doc eller odt fil genom att dra det till f\u00E4ltet under."])))),
                task.deadline ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null,
                        "Den h\u00E4r uppgiften ",
                        deadlineTooLate ? 'skulle varit inlämnad ' : 'skall vara inlämnad ',
                        moment__WEBPACK_IMPORTED_MODULE_3___default()(task.deadline).format('YYYY-MM-DD'))) : undefined),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_viewer_course_page_task_assignments__WEBPACK_IMPORTED_MODULE_4__["TaskAssignments"], { courseId: courseId, taskId: task.id, school: school, sendToUrkund: task.sendToUrkund }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)) : undefined,
        futureAbilities.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_future_abilities_box__WEBPACK_IMPORTED_MODULE_10__["FutureAbilitiesBox"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["I den h\u00E4r uppgiften behandlas f\u00F6ljande framtidsf\u00F6rm\u00E5gor"], ["I den h\u00E4r uppgiften behandlas f\u00F6ljande framtidsf\u00F6rm\u00E5gor"]))), selectedFAs: futureAbilities }) : null,
        requirements.length > 0 && task.taskType !== 'exercise' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_viewer_subcomponents_knowledge_requirements_table__WEBPACK_IMPORTED_MODULE_7__["KnowledgeRequirementsBox"], { title: "I den h\u00E4r uppgiften bed\u00F6ms f\u00F6ljande kunskapskrav", className: "larger", headerOpen: false, requirements: requirements, idsToSubjectMap: task.idsToSubjectMap, explainedRequirements: task.explainedRequirements, partialRequirments: task.partialRequirments }) : null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
            abilities.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_viewer_subcomponents_abilities_box__WEBPACK_IMPORTED_MODULE_5__["AbilitiesBox"], { title: "Den h\u00E4r uppgiften behandlar f\u00F6ljande f\u00F6rm\u00E5gor", className: "larger", headerOpen: false, abilities: abilities }) : null,
            centralContent.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_viewer_subcomponents_central_content_box__WEBPACK_IMPORTED_MODULE_6__["CentralContentBox"], { title: "Den h\u00E4r uppgiften behandlar f\u00F6ljande centrala inneh\u00E5ll", className: "larger", headerOpen: false, centralContent: centralContent }) : null),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null),
        task.resources && task.resources.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "sv-html-portlet sv-portlet" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Resurser kopplade till uppgiften"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "taskContainer" }, task.resources.map(function (r, idx) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { key: idx, className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { href: r.url }, r.name)));
            })),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_12__["LazyContent"], null, Object(_utils_get_school_name_from_branch_id__WEBPACK_IMPORTED_MODULE_14__["getSchoolNameFromBranchId"])(task.$ownerBranch).map(function (x) { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Skapad av ", ""], ["Skapad av ", ""])), x)); })),
        task.$editBranch && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_12__["LazyContent"], null, Object(_utils_get_school_name_from_branch_id__WEBPACK_IMPORTED_MODULE_14__["getSchoolNameFromBranchId"])(task.$editBranch).map(function (x) { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Redigerad av ", ""], ["Redigerad av ", ""])), x)); })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/version-history/delta-boxes.tsx":
/*!****************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/version-history/delta-boxes.tsx ***!
  \****************************************************************************************/
/*! exports provided: DeltaBoxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeltaBoxes", function() { return DeltaBoxes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _deltadoc_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deltadoc-box */ "./src/components/course-builder-ks/viewer-editor/version-history/deltadoc-box.tsx");
/* harmony import */ var _deltalink_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deltalink-box */ "./src/components/course-builder-ks/viewer-editor/version-history/deltalink-box.tsx");
/* harmony import */ var _delta_helper_funcs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delta-helper-funcs */ "./src/components/course-builder-ks/viewer-editor/version-history/delta-helper-funcs.tsx");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../globals/db */ "./src/globals/db.ts");






function DeltaBoxes(_a) {
    var _this = this;
    var deltas = _a.deltas, editable = _a.editable, branchId = _a.branchId;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "taskContainer odd-even" }, deltas.map(function (delta) {
            var key = deltaKey(delta);
            return delta.type === "modify" ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_deltadoc_box__WEBPACK_IMPORTED_MODULE_2__["DeltaDocBox"], { delta: delta, editable: editable, key: key, onDelete: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                // Undo DeltaDoc
                                Object(_delta_helper_funcs__WEBPACK_IMPORTED_MODULE_4__["undoDeltaDoc"])(delta, branchId);
                                return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_5__["db"].saveNow()];
                            case 1:
                                _a.sent();
                                location.reload();
                                return [2 /*return*/];
                        }
                    });
                }); } })) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_deltalink_box__WEBPACK_IMPORTED_MODULE_3__["DeltaLinkBox"], { delta: delta, editable: editable, key: key, onDelete: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                // Undo Link
                                Object(_delta_helper_funcs__WEBPACK_IMPORTED_MODULE_4__["undoDeltaRelation"])(delta, branchId);
                                return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_5__["db"].saveNow()];
                            case 1:
                                _a.sent();
                                location.reload();
                                return [2 /*return*/];
                        }
                    });
                }); } }));
        }))));
}
function deltaKey(delta) {
    if (delta.type === "modify")
        return delta.targetId;
    return delta.sourceId + delta.label + delta.targetId;
}


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/version-history/delta-helper-funcs.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/version-history/delta-helper-funcs.tsx ***!
  \***********************************************************************************************/
/*! exports provided: undoDeltas, undoDeltaRelation, undoDeltaDoc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undoDeltas", function() { return undoDeltas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undoDeltaRelation", function() { return undoDeltaRelation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undoDeltaDoc", function() { return undoDeltaDoc; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../globals/db */ "./src/globals/db.ts");


function undoDeltas(deltas, branchId) {
    var e_1, _a;
    try {
        for (var deltas_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(deltas), deltas_1_1 = deltas_1.next(); !deltas_1_1.done; deltas_1_1 = deltas_1.next()) {
            var delta = deltas_1_1.value;
            if (delta.type === "modify") {
                undoDeltaDoc(delta, branchId);
            }
            else {
                undoDeltaRelation(delta, branchId);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (deltas_1_1 && !deltas_1_1.done && (_a = deltas_1.return)) _a.call(deltas_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function undoDeltaRelation(delta, branchId) {
    _globals_db__WEBPACK_IMPORTED_MODULE_1__["db"].branch(branchId)
        .table(delta.sourceTable)
        .undoLink(delta.sourceId, delta.label, delta.targetId);
}
function undoDeltaDoc(delta, branchId) {
    var undoings = {};
    Object.keys(delta.data).forEach(function (key) {
        undoings[key] = { $unset: 0 };
    });
    _globals_db__WEBPACK_IMPORTED_MODULE_1__["db"].branch(branchId)
        .table(delta.table)
        .update({
        id: delta.targetId,
        name: delta.targetName,
        tags: delta.targetTags
    }, undoings);
}


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/version-history/deltadoc-box.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/version-history/deltadoc-box.tsx ***!
  \*****************************************************************************************/
/*! exports provided: DeltaDocBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeltaDocBox", function() { return DeltaDocBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _model_friendly_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model-friendly-names */ "./src/components/course-builder-ks/viewer-editor/version-history/model-friendly-names.ts");
/* harmony import */ var _course_builder_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../course-builder/utils */ "./src/components/course-builder/utils.ts");





function DeltaDocBox(_a) {
    var delta = _a.delta, editable = _a.editable, onDelete = _a.onDelete;
    var entityName = delta.targetName && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(delta.targetName, 80);
    var classNames = ["schoolCourse"];
    if (delta.$meta)
        classNames.push("entitymeta-" + delta.$meta);
    var friendlyEntityType = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["capitalizeFirst"])(_model_friendly_names__WEBPACK_IMPORTED_MODULE_3__["modelNames"].entityTypes[delta.table] || delta.table);
    var friendlyProps = Object.keys(delta.data).map(function (prop) {
        return ({
            propSpec: _model_friendly_names__WEBPACK_IMPORTED_MODULE_3__["modelNames"].propertyNames[prop],
            prop: prop
        });
    });
    var hasUnknownProps = friendlyProps.some(function (fp) { return !fp.propSpec; });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: classNames.join(' ') },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "align-horizontal" },
            editable ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "horizontalItem top pull-right" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { className: "undo", onClick: onDelete },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-undo" }))) : null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "horizontalItem top" }, entityName ?
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null,
                    friendlyEntityType,
                    " \"",
                    entityName,
                    "\"") :
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, friendlyEntityType))),
        friendlyProps.filter(function (_a) {
            var propSpec = _a.propSpec;
            return propSpec;
        }).map(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a.propSpec, 2), type = _b[0], propName = _b[1], prop = _a.prop;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { key: prop }, type === _model_friendly_names__WEBPACK_IMPORTED_MODULE_3__["deltaTypes"].Obscure ?
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, propName) :
                type === _model_friendly_names__WEBPACK_IMPORTED_MODULE_3__["deltaTypes"].HiddenChange ? null :
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                        propName,
                        ": ",
                        _model_friendly_names__WEBPACK_IMPORTED_MODULE_3__["modelNames"].getPropVal(delta.data[prop], type, prop)));
        }),
        hasUnknownProps ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { title: JSON.stringify(delta.data, null, 4) }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndringar i interna egenskaper"], ["\u00C4ndringar i interna egenskaper"]))))) : null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "small" },
                Object(_course_builder_utils__WEBPACK_IMPORTED_MODULE_4__["shortDateFormat"])(delta.dateTime),
                " ",
                delta.contributors.join(', '))));
}
var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/version-history/deltalink-box.tsx":
/*!******************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/version-history/deltalink-box.tsx ***!
  \******************************************************************************************/
/*! exports provided: DeltaLinkBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeltaLinkBox", function() { return DeltaLinkBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _model_friendly_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model-friendly-names */ "./src/components/course-builder-ks/viewer-editor/version-history/model-friendly-names.ts");
/* harmony import */ var _course_builder_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../course-builder/utils */ "./src/components/course-builder/utils.ts");




function DeltaLinkBox(_a) {
    var delta = _a.delta, editable = _a.editable, onDelete = _a.onDelete;
    var entityName = delta.targetName && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(Object(_model_friendly_names__WEBPACK_IMPORTED_MODULE_2__["removeHtmlTags"])(delta.targetName), 80);
    var classNames = ["schoolCourse"];
    if (delta.$meta)
        classNames.push("entitymeta-" + delta.$meta);
    var friendlyOperation = _model_friendly_names__WEBPACK_IMPORTED_MODULE_2__["modelNames"].getModifiedLinkHeading(delta, editable);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classNames.join(' ') },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "align-horizontal" },
            editable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "horizontalItem top pull-right" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { className: "undo", onClick: onDelete },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fas fa-undo" }))) : null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "horizontalItem top" }, entityName ?
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null,
                    friendlyOperation,
                    " \"",
                    entityName,
                    "\"") :
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, friendlyOperation))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "small" },
                Object(_course_builder_utils__WEBPACK_IMPORTED_MODULE_3__["shortDateFormat"])(delta.dateTime),
                " ",
                delta.contributor)));
}


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/version-history/draft-delta-view.tsx":
/*!*********************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/version-history/draft-delta-view.tsx ***!
  \*********************************************************************************************/
/*! exports provided: DraftDeltaView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftDeltaView", function() { return DraftDeltaView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_with_observe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility-components/with-observe */ "./src/components/utility-components/with-observe.tsx");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _undo_deltas_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./undo-deltas-button */ "./src/components/course-builder-ks/viewer-editor/version-history/undo-deltas-button.tsx");
/* harmony import */ var _delta_boxes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delta-boxes */ "./src/components/course-builder-ks/viewer-editor/version-history/delta-boxes.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../features */ "./src/features/index.ts");








var DraftDeltaView = Object(_utility_components_with_observe__WEBPACK_IMPORTED_MODULE_2__["withObserve"])(function (_a) {
    var branchId = _a.branchId, allowCherryPick = _a.allowCherryPick, partTagPrefix = _a.partTagPrefix, partTag = _a.partTag, partLabel = _a.partLabel;
    // Create a query for all deltas in given branchId:
    var query = _globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].branch(branchId).deltas;
    // Execute query using suspense-reading (will be observed also for changes so this component rerenders)
    var deltas = query.toValue().read();
    if (!_features__WEBPACK_IMPORTED_MODULE_7__["features"].KDT592) { // Remove this code after week 44!
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "ked_boxed" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Opublicerade \u00E4ndringar"),
            deltas.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { style: { opacity: 0.5, fontStyle: "italic" } }, "Det finns inga \u00E4ndringar att publicera."))) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "taskContainer odd-even" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_delta_boxes__WEBPACK_IMPORTED_MODULE_6__["DeltaBoxes"], { branchId: branchId, deltas: deltas, editable: allowCherryPick })),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_undo_deltas_button__WEBPACK_IMPORTED_MODULE_5__["UndoDeltasButton"], { label: "Radera alla opublicerade \u00E4ndringar", confirmMsg: "Åtgärden raderar samtliga ändringar som ännu inte är publicerade.\n\nVill du fortsätta?", branchId: branchId, deltas: deltas })))));
    }
    // Certain changes bound to step / tab:
    var taggedDeltas = deltas.filter(function (d) {
        return getMergedDeltaTags(d).includes(partTag);
    });
    // Course-global changes (such as course name, course description or added/removed blocks):
    var globalDeltas = deltas.filter(function (d) { return !getMergedDeltaTags(d).some(function (tag) { return tag.startsWith(partTagPrefix); }); });
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        globalDeltas.length > 0 && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "ked_boxed" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Opublicerade kurs\u00F6vergripande \u00E4ndringar"], ["Opublicerade kurs\u00F6vergripande \u00E4ndringar"])))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_delta_boxes__WEBPACK_IMPORTED_MODULE_6__["DeltaBoxes"], { branchId: branchId, deltas: globalDeltas, editable: allowCherryPick }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_undo_deltas_button__WEBPACK_IMPORTED_MODULE_5__["UndoDeltasButton"], { branchId: branchId, deltas: globalDeltas, label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5ngra kurs\u00F6vergripande inst\u00E4llningar"], ["\u00C5ngra kurs\u00F6vergripande inst\u00E4llningar"]))) }))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "ked_boxed" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Opublicerade \u00E4ndringar i ", ""], ["Opublicerade \u00E4ndringar i ", ""])), partLabel)),
            taggedDeltas.length > 0 ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_delta_boxes__WEBPACK_IMPORTED_MODULE_6__["DeltaBoxes"], { branchId: branchId, deltas: taggedDeltas, editable: allowCherryPick }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_undo_deltas_button__WEBPACK_IMPORTED_MODULE_5__["UndoDeltasButton"], { branchId: branchId, deltas: taggedDeltas, label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5ngra \u00E4ndringarna i ", ""], ["\u00C5ngra \u00E4ndringarna i ", ""])), partLabel) }))) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { style: { opacity: 0.5, fontStyle: "italic" } }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Det finns inga \u00E4ndringar att publicera."], ["Det finns inga \u00E4ndringar att publicera."])))))))));
});
// Helper function that merges sourceTags and targetTags into a single array:
function getMergedDeltaTags(delta) {
    return (delta.targetTags ? delta.targetTags : []).concat("sourceTags" in delta && delta.sourceTags ? delta.sourceTags : []);
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/version-history/index.tsx":
/*!**********************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/version-history/index.tsx ***!
  \**********************************************************************************/
/*! exports provided: VersionHistoryPage, DraftDeltaView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version-history-page */ "./src/components/course-builder-ks/viewer-editor/version-history/version-history-page.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VersionHistoryPage", function() { return _version_history_page__WEBPACK_IMPORTED_MODULE_0__["VersionHistoryPage"]; });

/* harmony import */ var _draft_delta_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draft-delta-view */ "./src/components/course-builder-ks/viewer-editor/version-history/draft-delta-view.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraftDeltaView", function() { return _draft_delta_view__WEBPACK_IMPORTED_MODULE_1__["DraftDeltaView"]; });





/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/version-history/model-friendly-names.ts":
/*!************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/version-history/model-friendly-names.ts ***!
  \************************************************************************************************/
/*! exports provided: deltaTypes, modelNames, removeHtmlTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deltaTypes", function() { return deltaTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelNames", function() { return modelNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeHtmlTags", function() { return removeHtmlTags; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");


var Text = Symbol("TypeText");
var Checkbox = Symbol("TypeCheckbox");
var Obscure = Symbol("TypeObsure");
var HiddenChange = Symbol("TypeHiddenChange");
var Html = Symbol("TypeHtml");
var deltaTypes = {
    Text: Text,
    Html: Html,
    Checkbox: Checkbox,
    Obscure: Obscure,
    HiddenChange: HiddenChange
};
var modelNames = {
    entityTypes: {
        courseBlocks: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["kursblock"], ["kursblock"]))),
        courseContents: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["inneh\u00E5llsruta"], ["inneh\u00E5llsruta"]))),
        courseInstances: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["kurs"], ["kurs"]))),
        courseTabs: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["flik"], ["flik"]))),
        schools: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["skola"], ["skola"]))),
        tasks: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["uppgift"], ["uppgift"]))),
    },
    modifiedLinks: {
        tabs: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Tillagd flik"], ["Tillagd flik"]))), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Borttagen flik"], ["Borttagen flik"]))), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Dold flik"], ["Dold flik"])))],
        blocks: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Tillagt block"], ["Tillagt block"]))), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Borttaget block"], ["Borttaget block"]))), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Dold block"], ["Dold block"])))],
        abilities: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_13 || (templateObject_13 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Tillagd f\u00F6rm\u00E5ga"], ["Tillagd f\u00F6rm\u00E5ga"]))), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_14 || (templateObject_14 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Borttagen f\u00F6rm\u00E5ga"], ["Borttagen f\u00F6rm\u00E5ga"]))), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_15 || (templateObject_15 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Dold f\u00F6rm\u00E5ga"], ["Dold f\u00F6rm\u00E5ga"])))],
        centralContent: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_16 || (templateObject_16 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Tillagt centralt inneh\u00E5ll"], ["Tillagt centralt inneh\u00E5ll"]))), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_17 || (templateObject_17 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Borttaget centralt inneh\u00E5ll"], ["Borttaget centralt inneh\u00E5ll"]))), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_18 || (templateObject_18 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Dold centralt inneh\u00E5ll"], ["Dold centralt inneh\u00E5ll"])))],
        knowledgeRequirements: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_19 || (templateObject_19 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Tillagt kunskapskrav"], ["Tillagt kunskapskrav"]))), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_20 || (templateObject_20 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Borttaget kunskapskrav"], ["Borttaget kunskapskrav"]))), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_21 || (templateObject_21 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Dold kunskapskrav"], ["Dold kunskapskrav"])))],
        tasks: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_22 || (templateObject_22 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Tillagd uppgift"], ["Tillagd uppgift"]))), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_23 || (templateObject_23 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Borttagen uppgift"], ["Borttagen uppgift"]))), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_24 || (templateObject_24 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Dold uppgift"], ["Dold uppgift"])))],
        contents: [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_25 || (templateObject_25 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Tillagd inneh\u00E5llsruta"], ["Tillagd inneh\u00E5llsruta"]))), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_26 || (templateObject_26 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Borttagen inneh\u00E5llsruta"], ["Borttagen inneh\u00E5llsruta"]))), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_27 || (templateObject_27 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Dold inneh\u00E5llsruta"], ["Dold inneh\u00E5llsruta"])))]
    },
    propertyNames: {
        allowAddTabs: [Checkbox, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_28 || (templateObject_28 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrat om till\u00E4gg av flik ska vara till\u00E5tet"], ["\u00C4ndrat om till\u00E4gg av flik ska vara till\u00E5tet"])))],
        allowRemoveTabs: [Checkbox, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_29 || (templateObject_29 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrat om borttagning av flik ska vara till\u00E5tet"], ["\u00C4ndrat om borttagning av flik ska vara till\u00E5tet"])))],
        allowReorderTabs: [Checkbox, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_30 || (templateObject_30 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrat om det ska va till\u00E5tet att \u00E4ndra ordning p\u00E5 flik"], ["\u00C4ndrat om det ska va till\u00E5tet att \u00E4ndra ordning p\u00E5 flik"])))],
        assignment: [Checkbox, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_31 || (templateObject_31 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrad flagga f\u00F6r inl\u00E4mningsuppgift"], ["\u00C4ndrad flagga f\u00F6r inl\u00E4mningsuppgift"])))],
        commonLearningGoals: [Text, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_32 || (templateObject_32 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrade gemensamma l\u00E4randem\u00E5l"], ["\u00C4ndrade gemensamma l\u00E4randem\u00E5l"])))],
        content: [Html, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_33 || (templateObject_33 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrad inneh\u00E5llstext"], ["\u00C4ndrad inneh\u00E5llstext"])))],
        createdBy: [HiddenChange, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_34 || (templateObject_34 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Skapad av"], ["Skapad av"])))],
        createdDate: [HiddenChange, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_35 || (templateObject_35 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Skapad datum"], ["Skapad datum"])))],
        dateTime: [Obscure, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_36 || (templateObject_36 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndat datum / tid"], ["\u00C4ndat datum / tid"])))],
        deadline: [Text, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_37 || (templateObject_37 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrat inl\u00E4mningsdatum"], ["\u00C4ndrat inl\u00E4mningsdatum"])))],
        description: [Html, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_38 || (templateObject_38 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrad beskrivning"], ["\u00C4ndrad beskrivning"])))],
        embeddedHtml: [Obscure, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_39 || (templateObject_39 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Lagt till inb\u00E4ddad HTML"], ["Lagt till inb\u00E4ddad HTML"])))],
        explainedRequirements: [Obscure, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_40 || (templateObject_40 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Lagt till egna f\u00F6rklaringar av kunskapskrav"], ["Lagt till egna f\u00F6rklaringar av kunskapskrav"])))],
        futureAbilities: [Text, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_41 || (templateObject_41 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrade framtidsf\u00F6rm\u00E5gor"], ["\u00C4ndrade framtidsf\u00F6rm\u00E5gor"])))],
        hasCommonLearningGoals: [Checkbox, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_42 || (templateObject_42 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrad inst\u00E4llning f\u00F6r gemensamma l\u00E4randem\u00E5l"], ["\u00C4ndrad inst\u00E4llning f\u00F6r gemensamma l\u00E4randem\u00E5l"])))],
        hidden: [Checkbox, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_43 || (templateObject_43 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrad flagga \"g\u00F6md\""], ["\u00C4ndrad flagga \"g\u00F6md\""])))],
        hiddenTasks: [Obscure, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_44 || (templateObject_44 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrat listan p\u00E5 g\u00F6mda uppgifter"], ["\u00C4ndrat listan p\u00E5 g\u00F6mda uppgifter"])))],
        html: [Obscure, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_45 || (templateObject_45 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrat inneh\u00E5ll"], ["\u00C4ndrat inneh\u00E5ll"])))],
        learningGoal: [Text, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_46 || (templateObject_46 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4randem\u00E5l"], ["L\u00E4randem\u00E5l"])))],
        lockDelete: [Checkbox, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_47 || (templateObject_47 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrat flagga: \"l\u00E5s fr\u00E5n borttagning\""], ["\u00C4ndrat flagga: \"l\u00E5s fr\u00E5n borttagning\""])))],
        locked: [Checkbox, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_48 || (templateObject_48 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrad flagga: \"f\u00F6rbjud \u00E4ndring av flikar\""], ["\u00C4ndrad flagga: \"f\u00F6rbjud \u00E4ndring av flikar\""])))],
        migratedTexts: [Obscure, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_49 || (templateObject_49 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndringar i migrerade texter fr\u00E5n skolverket"], ["\u00C4ndringar i migrerade texter fr\u00E5n skolverket"])))],
        modifiedBy: [HiddenChange, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_50 || (templateObject_50 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrad av"], ["\u00C4ndrad av"])))],
        modifiedDate: [HiddenChange, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_51 || (templateObject_51 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndringsdatum"], ["\u00C4ndringsdatum"])))],
        taskOrder: [Obscure, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_52 || (templateObject_52 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrad ordning p\u00E5 uppgifter"], ["\u00C4ndrad ordning p\u00E5 uppgifter"])))],
        name: [Text, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_53 || (templateObject_53 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrat namn"], ["\u00C4ndrat namn"])))],
        order: [Obscure, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_54 || (templateObject_54 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrad ordning"], ["\u00C4ndrad ordning"])))],
        resources: [Obscure, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_55 || (templateObject_55 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndrade i resurser"], ["\u00C4ndrade i resurser"])))],
        school: [Text, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_56 || (templateObject_56 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Skola"], ["Skola"])))],
        stepNo: [Text, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_57 || (templateObject_57 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Stegnummer"], ["Stegnummer"])))],
        stepNumbers: [Text, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_58 || (templateObject_58 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Stegnummer"], ["Stegnummer"])))],
        subject: [Text, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_59 || (templateObject_59 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4mne"], ["\u00C4mne"])))],
        subjects: [Obscure, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_60 || (templateObject_60 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4mnen"], ["\u00C4mnen"])))],
        tabClass: [Text, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_61 || (templateObject_61 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Typ av flik"], ["Typ av flik"])))],
        tabTitle: [HiddenChange, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_62 || (templateObject_62 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Fliknamn"], ["Fliknamn"])))],
        taskType: [Text, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_63 || (templateObject_63 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppgiftstyp"], ["Uppgiftstyp"])))],
        url: [Text, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_64 || (templateObject_64 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Url"], ["Url"])))],
        workingProcedure: [Html, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_65 || (templateObject_65 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Arbetsprocess"], ["Arbetsprocess"])))],
        youtubeId: [Obscure, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_66 || (templateObject_66 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Youtube ID"], ["Youtube ID"])))]
    },
    getModifiedLinkHeading: function (delta, notStandardSchool) {
        var headingSpec = modelNames.modifiedLinks[delta.label];
        // Problem: When delta.label == "contents", the headingSpec here is too
        // generic: "Tillagd innehållsruta" ("Added context box") is not very expressive when a resource
        // was added for example. What we could do (at a higher level) would be
        // request the entity of the added ID (lazily/suspensish) and display more
        // details about what was added.
        if (!headingSpec) {
            return delta.type === 'add' ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_67 || (templateObject_67 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Tillagt objekt"], ["Tillagt objekt"]))) :
                delta.type === 'remove' ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_68 || (templateObject_68 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Borttaget objekt"], ["Borttaget objekt"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_69 || (templateObject_69 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5ngrad l\u00E4nkning"], ["\u00C5ngrad l\u00E4nkning"]))); // Should never be
        }
        return delta.type === 'add' ?
            headingSpec[0] : delta.type === 'remove' ?
            notStandardSchool ?
                headingSpec[2] : headingSpec[1]
            : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_70 || (templateObject_70 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5ngrad l\u00E4nkning"], ["\u00C5ngrad l\u00E4nkning"]))); // Should never be
    },
    getPropVal: function (p, type, prop) {
        switch (p) {
            case true: return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_71 || (templateObject_71 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["P\u00E5slaget"], ["P\u00E5slaget"])));
            case false: return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_72 || (templateObject_72 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Avslaget"], ["Avslaget"])));
            case 'primary': return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_73 || (templateObject_73 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Grundskola"], ["Grundskola"])));
            case 'gymnasium': return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_74 || (templateObject_74 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Gymnasieskola"], ["Gymnasieskola"])));
            case 'exercise': return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_75 || (templateObject_75 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00D6vningsuppgift"], ["\u00D6vningsuppgift"])));
            case 'task': return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_76 || (templateObject_76 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppgift"], ["Uppgift"])));
            case 'assignment': return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_77 || (templateObject_77 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Inl\u00E4mningsuppgift"], ["Inl\u00E4mningsuppgift"])));
            case 'theme-course': return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_78 || (templateObject_78 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Temakurs"], ["Temakurs"])));
            case 'step-course': return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_79 || (templateObject_79 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Stegkurs"], ["Stegkurs"])));
            case 'intro-tab': return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_80 || (templateObject_80 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Introduktionsflik"], ["Introduktionsflik"])));
            case 'run-up-tab': return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_81 || (templateObject_81 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Upptakt"], ["Upptakt"])));
            case 'subject-tab': return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_82 || (templateObject_82 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4mnesflik"], ["\u00C4mnesflik"])));
            case 'mission-tab': return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_83 || (templateObject_83 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppdragsflik"], ["Uppdragsflik"])));
            case 'content-tab': return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_84 || (templateObject_84 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Inneh\u00E5llsflik"], ["Inneh\u00E5llsflik"])));
            case 'teacher-tab': return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_85 || (templateObject_85 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4rarsida"], ["L\u00E4rarsida"])));
            case 'word-bank-tab': return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_86 || (templateObject_86 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ordbank"], ["Ordbank"])));
            default: {
                if (p == null)
                    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_87 || (templateObject_87 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Nollst\u00E4llt"], ["Nollst\u00E4llt"])));
                if (p === "")
                    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_88 || (templateObject_88 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["(tomt)"], ["(tomt)"])));
                if (type === Html)
                    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(removeHtmlTags(p), 300);
                if (typeof p === 'string')
                    return p;
                if (p.subjectName)
                    return p.subjectName;
                return JSON.stringify(p, null, 2);
            }
        }
    }
};
function removeHtmlTags(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.innerText;
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41, templateObject_42, templateObject_43, templateObject_44, templateObject_45, templateObject_46, templateObject_47, templateObject_48, templateObject_49, templateObject_50, templateObject_51, templateObject_52, templateObject_53, templateObject_54, templateObject_55, templateObject_56, templateObject_57, templateObject_58, templateObject_59, templateObject_60, templateObject_61, templateObject_62, templateObject_63, templateObject_64, templateObject_65, templateObject_66, templateObject_67, templateObject_68, templateObject_69, templateObject_70, templateObject_71, templateObject_72, templateObject_73, templateObject_74, templateObject_75, templateObject_76, templateObject_77, templateObject_78, templateObject_79, templateObject_80, templateObject_81, templateObject_82, templateObject_83, templateObject_84, templateObject_85, templateObject_86, templateObject_87, templateObject_88;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/version-history/reset-course-button.tsx":
/*!************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/version-history/reset-course-button.tsx ***!
  \************************************************************************************************/
/*! exports provided: ResetCourseButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetCourseButton", function() { return ResetCourseButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _delta_helper_funcs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delta-helper-funcs */ "./src/components/course-builder-ks/viewer-editor/version-history/delta-helper-funcs.tsx");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../globals/db */ "./src/globals/db.ts");





function ResetCourseButton(_a) {
    var _this = this;
    var courseId = _a.courseId, branchId = _a.branchId;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "btn btn-large btn-warning", onClick: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var deltas;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!confirm(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5tg\u00E4rden \u00E5terst\u00E4llet kursen till standard.\n\nVill du forts\u00E4tta?"], ["\u00C5tg\u00E4rden \u00E5terst\u00E4llet kursen till standard.\\n\\nVill du forts\u00E4tta?"]))))) return [3 /*break*/, 3];
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["showInfo"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5terst\u00E4ller kursen till orginal..."], ["\u00C5terst\u00E4ller kursen till orginal..."]))));
                        return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_4__["db"]
                                .branch(branchId)
                                .deltas.tag(courseId)
                                .toValue()
                                .load()];
                    case 1:
                        deltas = _a.sent();
                        Object(_delta_helper_funcs__WEBPACK_IMPORTED_MODULE_3__["undoDeltas"])(deltas, branchId);
                        return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_4__["db"].saveNow()];
                    case 2:
                        _a.sent();
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["showInfo"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kursen \u00E4r \u00E5terst\u00E4lld. Sidan laddas nu om..."], ["Kursen \u00E4r \u00E5terst\u00E4lld. Sidan laddas nu om..."]))));
                        location.reload();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); } }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C5terst\u00E4ll till orginalet"], ["\u00C5terst\u00E4ll till orginalet"])))));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/version-history/undo-deltas-button.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/version-history/undo-deltas-button.tsx ***!
  \***********************************************************************************************/
/*! exports provided: UndoDeltasButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndoDeltasButton", function() { return UndoDeltasButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _delta_helper_funcs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delta-helper-funcs */ "./src/components/course-builder-ks/viewer-editor/version-history/delta-helper-funcs.tsx");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../globals/db */ "./src/globals/db.ts");




function UndoDeltasButton(_a) {
    var _this = this;
    var deltas = _a.deltas, label = _a.label, confirmMsg = _a.confirmMsg, branchId = _a.branchId;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "btn btn-large btn-warning", onClick: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!confirmMsg || confirm(confirmMsg))) return [3 /*break*/, 2];
                        Object(_delta_helper_funcs__WEBPACK_IMPORTED_MODULE_2__["undoDeltas"])(deltas, branchId);
                        return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_3__["db"].saveNow()];
                    case 1:
                        _a.sent();
                        location.reload();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); } }, label));
}


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/version-history/version-history-page.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/version-history/version-history-page.tsx ***!
  \*************************************************************************************************/
/*! exports provided: VersionHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionHistoryPage", function() { return VersionHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _common_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/banner */ "./src/components/course-builder-ks/common/banner.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _version_history_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./version-history-view */ "./src/components/course-builder-ks/viewer-editor/version-history/version-history-view.tsx");
/* harmony import */ var _utility_components_with_observe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utility-components/with-observe */ "./src/components/utility-components/with-observe.tsx");
/* harmony import */ var _course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../course-builder/sub-components/ellipsis-loader */ "./src/components/course-builder/sub-components/ellipsis-loader.tsx");









var VersionHistoryPage = function (props) { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_8__["TimeoutEllipsisLoader"], null) },
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VersionHistoryPage_, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props))); };
var VersionHistoryPage_ = Object(_utility_components_with_observe__WEBPACK_IMPORTED_MODULE_7__["withObserve"])(function (_a) {
    var school = _a.school, courseId = _a.courseId;
    var schoolEntity = _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].schools.cacheOptimized().name(school).single().read();
    var draftId = _globals_db__WEBPACK_IMPORTED_MODULE_2__["CourseInstances"].getBranchIdSuspense(schoolEntity, courseId);
    var repo = _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].branch(draftId);
    var course = repo.courseInstances.id(courseId).read();
    var bannerProps = {
        title: course.name,
        activeTab: "versionhistory",
        tabs: [{ name: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Versionshistorik"], ["Versionshistorik"]))), key: "versionhistory" }],
        buttons: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { to: "/" + school + "/courses/" + courseId, key: "$settings", title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Visa kursen"], ["Visa kursen"]))) },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-eye", "aria-hidden": true }),
                "\u00A0")]
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_banner__WEBPACK_IMPORTED_MODULE_3__["Banner"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, bannerProps)),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_version_history_view__WEBPACK_IMPORTED_MODULE_6__["VersionHistoryView"], { allowCherryPick: true, branchId: schoolEntity.officialBranchId, courseId: courseId }));
});
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/course-builder-ks/viewer-editor/version-history/version-history-view.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/components/course-builder-ks/viewer-editor/version-history/version-history-view.tsx ***!
  \*************************************************************************************************/
/*! exports provided: VersionHistoryView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionHistoryView", function() { return VersionHistoryView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _delta_boxes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delta-boxes */ "./src/components/course-builder-ks/viewer-editor/version-history/delta-boxes.tsx");
/* harmony import */ var _utility_components_with_observe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utility-components/with-observe */ "./src/components/utility-components/with-observe.tsx");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _reset_course_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-course-button */ "./src/components/course-builder-ks/viewer-editor/version-history/reset-course-button.tsx");







var VersionHistoryView = Object(_utility_components_with_observe__WEBPACK_IMPORTED_MODULE_4__["withObserve"])(function (_a) {
    var courseId = _a.courseId, branchId = _a.branchId, allowCherryPick = _a.allowCherryPick;
    var query = _globals_db__WEBPACK_IMPORTED_MODULE_5__["db"].branch(branchId).deltas.tag(courseId);
    // Suspense-read the query into array of deltas
    var deltas = query.toValue().read();
    if (deltas.length === 0)
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { style: { opacity: 0.5, fontStyle: "italic" } }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Skolans version \u00E4r identisk med orginalet"], ["Skolans version \u00E4r identisk med orginalet"]))))));
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Skolans \u00E4ndringar"], ["Skolans \u00E4ndringar"])))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_delta_boxes__WEBPACK_IMPORTED_MODULE_3__["DeltaBoxes"], { branchId: branchId, deltas: deltas, editable: allowCherryPick }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reset_course_button__WEBPACK_IMPORTED_MODULE_6__["ResetCourseButton"], { courseId: courseId, branchId: branchId })));
});
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/utils/get-school-name-from-branch-id.ts":
/*!*****************************************************!*\
  !*** ./src/utils/get-school-name-from-branch-id.ts ***!
  \*****************************************************/
/*! exports provided: getSchoolNameFromBranchId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchoolNameFromBranchId", function() { return getSchoolNameFromBranchId; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var kedbackend_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kedbackend/observable */ "./kedbackend/observable.js");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.ts");




var DEFAULT_SCHOOL = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kunskapsskolan i Sverige"], ["Kunskapsskolan i Sverige"])));
var UNKNOWN_SCHOOL = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ok\u00E4nd skola"], ["Ok\u00E4nd skola"])));
function getSchoolNameFromBranchId(branchId, defaultGymn // false for subject planner. true for coursebuilder
) {
    if (!branchId)
        return new kedbackend_observable__WEBPACK_IMPORTED_MODULE_1__["Emitter"](DEFAULT_SCHOOL);
    return _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].branches
        .ids([branchId])
        .toValue()
        .switchMap(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), branch = _b[0];
        return branch
            ? branch.schoolId
                ? _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].schools
                    .ids([branch.schoolId])
                    .toValue()
                    .map(function (_a) {
                    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), school = _b[0];
                    return school
                        ? school.name === "standard" ? DEFAULT_SCHOOL :
                            defaultGymn
                                ? // Most specific school name is in the EDS names
                                    // Example: "Kunskapsgymnasiet Uppsala"
                                    school.edsSchoolNameGymn ||
                                        // Example: "Kunskapsskolan Uppsala"
                                        school.edsSchoolNamePrim ||
                                        // Fallback to displayName:
                                        // displayName example: "Uppsala"
                                        school.displayName ||
                                        // name example: "Uppsala"
                                        school.name
                                : // If not defaultGymn, prefer the secondary school name in EDS
                                    school.edsSchoolNamePrim ||
                                        // ... fallback to gymn school
                                        school.edsSchoolNameGymn ||
                                        // ...fallback to displayName
                                        school.displayName ||
                                        // ...fallback to name
                                        school.name
                        : UNKNOWN_SCHOOL;
                })
                : new kedbackend_observable__WEBPACK_IMPORTED_MODULE_1__["Emitter"](DEFAULT_SCHOOL) // Branch did not have a schoolId. Must be the standard draft branch.
            : new kedbackend_observable__WEBPACK_IMPORTED_MODULE_1__["Emitter"](UNKNOWN_SCHOOL);
    } // Branch was not found. Maybe an old school that was deleted
    );
}
var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=SubjectPlannerViewerApp.js.map