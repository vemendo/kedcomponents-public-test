(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["KSGoals"],{

/***/ "./src/components/ks-goals/future-abilities-table.tsx":
/*!************************************************************!*\
  !*** ./src/components/ks-goals/future-abilities-table.tsx ***!
  \************************************************************/
/*! exports provided: FutureAbilitiesTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FutureAbilitiesTable", function() { return FutureAbilitiesTable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _future_abilities_viewmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./future-abilities-viewmodel */ "./src/components/ks-goals/future-abilities-viewmodel.ts");




var FutureAbilitiesTable = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FutureAbilitiesTable, _super);
    function FutureAbilitiesTable(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loading: false,
            data: [],
            error: null
        };
        return _this;
    }
    FutureAbilitiesTable.prototype.componentWillMount = function () {
        this.load();
    };
    FutureAbilitiesTable.prototype.load = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ loading: true });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].edsClient.getStudentFutureAbilities()];
                    case 2:
                        data = _a.sent();
                        this.setState({ data: data });
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
    FutureAbilitiesTable.prototype.render = function () {
        var viewModel = new _future_abilities_viewmodel__WEBPACK_IMPORTED_MODULE_3__["FutureAbilitiesViewModel"](this.state.data);
        var columnHeaders = viewModel.columnHeaders, vtHts = viewModel.vtHts, capabRows = viewModel.capabRows;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, "Framtidsf\u00F6rm\u00E5gor"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "partialEditStudyPlanViewMode" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { style: { width: '100%' }, className: "smallFont" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null, columnHeaders.map(function (_a, i) {
                            var name = _a.name, type = _a.type;
                            return type === 'header' ?
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: i, rowSpan: 2 }, name) :
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: i, colSpan: 2 }, name);
                        })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { className: "header" }, vtHts.map(function (vtHt, i) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: i }, vtHt); }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, capabRows.map(function (row, i) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: i, className: (Math.floor(i / 3) % 2) && 'tableOdd' }, row.map(function (col, i) { return col.type === 'ability' ?
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: i, rowSpan: 3, className: "goalsSubject" }, col.name) :
                        col.type === 'capability' ?
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: i, className: "goalsSubject" }, col.name) :
                            col.selected ?
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: i, className: "edsSelected" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "markedItem" })) :
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: i }); })); })))));
    };
    return FutureAbilitiesTable;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/ks-goals/future-abilities-viewmodel.ts":
/*!***************************************************************!*\
  !*** ./src/components/ks-goals/future-abilities-viewmodel.ts ***!
  \***************************************************************/
/*! exports provided: FutureAbilitiesViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FutureAbilitiesViewModel", function() { return FutureAbilitiesViewModel; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");

var FutureAbilitiesViewModel = /** @class */ (function () {
    function FutureAbilitiesViewModel(data) {
        // Will build the total years
        var formNames = {};
        data.forEach(function (a) { return a.capabilities.forEach(function (c) { return formNames[c.formName] = true; }); });
        var years = Object.keys(formNames);
        // columnHeaders
        this.columnHeaders = [{
                name: "Framtidsförmåga",
                type: "header"
            }, {
                name: "Område",
                type: "header"
            }].concat(years.map(function (year) { return ({
            name: year,
            type: 'year'
        }); }));
        // vtHts
        this.vtHts = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["flatten"])(years.map(function (year) { return ["HT", "VT"]; }));
        // cababRows
        var rows = [];
        data.forEach(function (a) {
            var row = [{ type: 'ability', name: a.abilityName }];
            var addedCapabs = {};
            a.capabilities.forEach(function (c) {
                var cells = [
                    { type: 'term', selected: c.htHasValue !== false },
                    { type: 'term', selected: c.vtHasValue !== false }
                ];
                //if (c.htHasValue || c.vtHasValue) debugger;
                if (!addedCapabs[c.capabilityName]) {
                    //if (!isFirstCapability) rows.push(row);
                    if (row.length > 1) {
                        rows.push(row);
                        row = [];
                    }
                    addedCapabs[c.capabilityName] = true;
                    row.push({ type: 'capability', name: c.capabilityName });
                    cells.forEach(function (cell) { return row.push(cell); });
                }
                else if (row) {
                    //addedCapabs[c.capabilityName].concat(cells);
                    cells.forEach(function (cell) { return row.push(cell); });
                }
            });
            if (row)
                rows.push(row);
        });
        this.capabRows = rows;
    }
    return FutureAbilitiesViewModel;
}());



/***/ }),

/***/ "./src/components/ks-goals/goals-viewmodel.ts":
/*!****************************************************!*\
  !*** ./src/components/ks-goals/goals-viewmodel.ts ***!
  \****************************************************/
/*! exports provided: ViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModel", function() { return ViewModel; });
/* harmony import */ var _apis_edsclient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/edsclient */ "./src/apis/edsclient.ts");

var ViewModel = /** @class */ (function () {
    function ViewModel(studyPlans) {
        this.subjects = studyPlans.map(function (sp) {
            var periodGoals = sp.periodGoals
                .map(function (g) { return ({ period: new _apis_edsclient__WEBPACK_IMPORTED_MODULE_0__["EDSPeriod"](g.periodName), goal: g.gradeName }); });
            return {
                name: sp.courseUnitName,
                atGoal: periodGoals.filter(function (_a) {
                    var period = _a.period;
                    return period.term === 'AT';
                }).map(function (_a) {
                    var goal = _a.goal;
                    return goal;
                })[0],
                stGoal: periodGoals.filter(function (_a) {
                    var period = _a.period;
                    return period.term === 'ST';
                }).map(function (_a) {
                    var goal = _a.goal;
                    return goal;
                })[0],
                finalGoal: sp.finalGoalGrade,
                strategies: sp.strategyText
            };
        });
    }
    return ViewModel;
}());



/***/ }),

/***/ "./src/components/ks-goals/goals.tsx":
/*!*******************************************!*\
  !*** ./src/components/ks-goals/goals.tsx ***!
  \*******************************************/
/*! exports provided: KSGoals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSGoals", function() { return KSGoals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _goals_viewmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goals-viewmodel */ "./src/components/ks-goals/goals-viewmodel.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _future_abilities_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./future-abilities-table */ "./src/components/ks-goals/future-abilities-table.tsx");






var KSGoals = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KSGoals, _super);
    function KSGoals(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loadingStudyPlans: false,
            studyPlans: [],
            error: null
        };
        return _this;
    }
    KSGoals.prototype.componentWillMount = function () {
        this.load();
    };
    KSGoals.prototype.load = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var studyPlans, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ loadingStudyPlans: true });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].edsClient.getStudentGoals()];
                    case 2:
                        studyPlans = _a.sent();
                        this.setState({ studyPlans: studyPlans });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.setState({ error: error_1 });
                        return [3 /*break*/, 4];
                    case 4:
                        this.setState({ loadingStudyPlans: false });
                        return [2 /*return*/];
                }
            });
        });
    };
    KSGoals.prototype.render = function () {
        var viewModel = new _goals_viewmodel__WEBPACK_IMPORTED_MODULE_3__["ViewModel"](this.state.studyPlans);
        var showTermGoals = ('' + _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser.schoolType).toLowerCase() !== "gymnasium";
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["M\u00E5l"], ["M\u00E5l"])))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "smallFont" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4mne"], ["\u00C4mne"])))),
                        showTermGoals && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["HT"], ["HT"])))),
                        showTermGoals && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["VT"], ["VT"])))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Slutm\u00E5l"], ["Slutm\u00E5l"])))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Strategier"], ["Strategier"])))))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, viewModel.subjects.map(function (s, i) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: s.name, className: i % 2 && "tableOdd" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "goalsSubject" }, s.name),
                        showTermGoals && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "goalsTerm" }, s.atGoal),
                        showTermGoals && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "goalsTerm" }, s.stGoal),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "goalsEnd" }, s.finalGoal),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, s.strategies));
                }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "divider" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_future_abilities_table__WEBPACK_IMPORTED_MODULE_5__["FutureAbilitiesTable"], null));
    };
    return KSGoals;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ })

}]);
//# sourceMappingURL=KSGoals.js.map