(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["LearningTasks"],{

/***/ "./src/apis/ked-learninggoals.ts":
/*!***************************************!*\
  !*** ./src/apis/ked-learninggoals.ts ***!
  \***************************************/
/*! exports provided: getLearningGoalsAndTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLearningGoalsAndTasks", function() { return getLearningGoalsAndTasks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function getLearningGoalsAndTasks(apiPath, pageId) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var res, data;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(apiPath + "?nodeID=" + pageId, { credentials: "same-origin" })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}


/***/ }),

/***/ "./src/components/learning-tasks/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/learning-tasks/index.tsx ***!
  \*************************************************/
/*! exports provided: LearningTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningTasks", function() { return LearningTasks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apis_ked_learninggoals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apis/ked-learninggoals */ "./src/apis/ked-learninggoals.ts");
/* harmony import */ var _course_viewer_subcomponents_learning_goals_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course-viewer/subcomponents/learning-goals-list */ "./src/components/course-viewer/subcomponents/learning-goals-list.tsx");
/* harmony import */ var _utility_components_SetupLanguageIntl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility-components/SetupLanguageIntl */ "./src/components/utility-components/SetupLanguageIntl.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");







var _LearningTasks = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_LearningTasks, _super);
    function _LearningTasks(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: null
        };
        return _this;
    }
    _LearningTasks.prototype.componentDidMount = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_apis_ked_learninggoals__WEBPACK_IMPORTED_MODULE_2__["getLearningGoalsAndTasks"])(this.props.apiPath, this.props.pageId)];
                    case 1:
                        data = _a.sent();
                        this.setState({ data: data });
                        return [2 /*return*/];
                }
            });
        });
    };
    _LearningTasks.prototype.render = function () {
        if (!this.state.data)
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null);
        var _a = this.state.data, moduleName = _a.moduleName, subject = _a.subject, commonTasks = _a.commonTasks, learningGoals = _a.learningGoals, step = _a.step;
        var intl = this.props.intl;
        //const step = undefined; // moduleName.toLowerCase().startsWith("steg ") && parseInt(moduleName.substr(5));
        var commonTasksList = commonTasks.map(function (task) { return ({
            id: task.id,
            name: task.name,
            url: task.url,
            courseName: subject.name,
            learningGoal: step && learningGoals.length > 0 ? moduleName + " - \u00F6vergripande" : moduleName
        }); });
        var learningGoalsList = learningGoals.map(function (learningGoal) { return ({
            name: learningGoal.name,
            learningTasks: learningGoal.tasks.map(function (task) { return ({
                id: task.id,
                name: task.name,
                url: task.url,
                courseName: subject.name,
                learningGoal: learningGoal.name
            }); })
        }); });
        if (step) {
            commonTasksList.forEach(function (task) { return task.step = step; });
            learningGoalsList.forEach(function (lg) { return lg.learningTasks.forEach(function (task) { return task.step = step; }); });
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_6__["LanguageContext"].Provider, { value: { intl: intl } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_viewer_subcomponents_learning_goals_list__WEBPACK_IMPORTED_MODULE_3__["LearningGoalsList"], { commonTasks: commonTasksList, learningGoals: learningGoalsList }));
    };
    return _LearningTasks;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
var LearningTasks = Object(_utility_components_SetupLanguageIntl__WEBPACK_IMPORTED_MODULE_4__["setupIntl"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(_LearningTasks));


/***/ })

}]);
//# sourceMappingURL=LearningTasks.js.map