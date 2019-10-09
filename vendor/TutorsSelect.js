(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["TutorsSelect"],{

/***/ "./src/components/tutors-select/tutors-select.tsx":
/*!********************************************************!*\
  !*** ./src/components/tutors-select/tutors-select.tsx ***!
  \********************************************************/
/*! exports provided: TutorsSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorsSelect", function() { return TutorsSelect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _globals_KED_tutorEnv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globals/KED.tutorEnv */ "./src/globals/KED.tutorEnv.ts");
/* harmony import */ var _utils_request_tutored_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/request-tutored-tokens */ "./src/utils/request-tutored-tokens.ts");







var TutorsSelect = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TutorsSelect, _super);
    function TutorsSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isLoading: true,
            students: []
        };
        return _this;
    }
    TutorsSelect.prototype.componentDidMount = function () {
        this.load();
    };
    TutorsSelect.prototype.load = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var edsStudents, students, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 5, 6]);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["default"].edsClient.getTeacherTutorStudents()];
                    case 1:
                        edsStudents = _a.sent();
                        edsStudents.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["compareProps"])(["lastName", "firstName"]));
                        students = edsStudents.length > 0 ?
                            edsStudents.map(function (_a) {
                                var email = _a.email, firstName = _a.firstName, lastName = _a.lastName;
                                return ({
                                    mail: email,
                                    displayName: firstName + " " + lastName
                                });
                            }) :
                            [_globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["default"].currentUser];
                        return [4 /*yield*/, this.setState({ students: students })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        error_1 = _a.sent();
                        console.error("Could not list tutor students", error_1);
                        return [4 /*yield*/, this.setState({ students: [_globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["default"].currentUser] })];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        this.setState({ isLoading: false });
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TutorsSelect.prototype.onSelectUser = function (email) {
        var choosenStudent = this.state.students.filter(function (s) { return s.mail === email; })[0];
        var user = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, choosenStudent), { roles: ["USER"] });
        _globals_KED_tutorEnv__WEBPACK_IMPORTED_MODULE_5__["default"].setNewEnv(user, function () { return Object(_utils_request_tutored_tokens__WEBPACK_IMPORTED_MODULE_6__["requestTutoredTokens"])(email, email); });
    };
    TutorsSelect.prototype.render = function () {
        var _this = this;
        var _a = this.state, isLoading = _a.isLoading, students = _a.students;
        if (isLoading)
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null);
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "tutors-select" },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", { onChange: function (ev) { return ev.target.value && _this.onSelectUser(ev.target.value); } },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", { value: "" }, "V\u00E4lj elev"),
                students.map(function (student) {
                    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", { key: student.mail, value: student.mail },
                        student.displayName,
                        " (",
                        student.mail,
                        ")");
                })));
    };
    return TutorsSelect;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component));



/***/ }),

/***/ "./src/repos/kg-termplanner-repo.ts":
/*!******************************************!*\
  !*** ./src/repos/kg-termplanner-repo.ts ***!
  \******************************************/
/*! exports provided: KGTermPlannerRepo, termPlannerRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KGTermPlannerRepo", function() { return KGTermPlannerRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "termPlannerRepo", function() { return termPlannerRepo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ked_repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ked-repo */ "./src/repos/ked-repo.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utils_school_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/school-moment */ "./src/utils/school-moment.ts");




var KGTermPlannerRepo = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KGTermPlannerRepo, _super);
    function KGTermPlannerRepo(getClient, getCurrentUser) {
        var _this = this;
        var currentUser = getCurrentUser();
        var now = new Date();
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_utils_school_moment__WEBPACK_IMPORTED_MODULE_3__["getTermStarEndDate"])(now, now.getMonth() >= 7), 2), termStart = _a[0], termEnd = _a[1];
        _this = _super.call(this, {
            getClient: getClient,
            optimistic: true,
            table: "weekplans",
            user: currentUser ? currentUser.mail : "",
            getQueryOptions: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    return [2 /*return*/, {
                            from: termStart.startOf('week').add(-2, 'days').toDate().valueOf(),
                            to: termEnd.startOf('week').add(5, 'days').toDate().valueOf(),
                            role: "USER"
                        }];
                });
            }); }
        }) || this;
        return _this;
    }
    return KGTermPlannerRepo;
}(_ked_repo__WEBPACK_IMPORTED_MODULE_1__["KedRepo"]));

var termPlannerRepo = new KGTermPlannerRepo(function () { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient; }, function () { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser; });
_globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kgTermPlannerRepo = termPlannerRepo;


/***/ }),

/***/ "./src/utils/request-tutored-tokens.ts":
/*!*********************************************!*\
  !*** ./src/utils/request-tutored-tokens.ts ***!
  \*********************************************/
/*! exports provided: requestTutoredTokens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestTutoredTokens", function() { return requestTutoredTokens; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _apis_edsclient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apis/edsclient */ "./src/apis/edsclient.ts");
/* harmony import */ var kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/clientweb */ "./kedbackend/clientweb.js");
/* harmony import */ var _repos_ks_termplanner_repo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../repos/ks-termplanner-repo */ "./src/repos/ks-termplanner-repo.ts");
/* harmony import */ var _repos_kg_termplanner_repo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../repos/kg-termplanner-repo */ "./src/repos/kg-termplanner-repo.ts");
/* harmony import */ var _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../repos/user-tasks-repo */ "./src/repos/user-tasks-repo.ts");









function requestTutoredTokens(userEmail, displayName) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        function createBearerProvider(client, tokenUrl, query) {
            var bearerPromise = null;
            return {
                getBearer: function () {
                    return bearerPromise || this.refreshBearer();
                },
                refreshBearer: function () {
                    return (bearerPromise = retrieveToken());
                },
            };
            function retrieveToken() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                    var res, _a, _b, _c;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                        switch (_d.label) {
                            case 0: return [4 /*yield*/, client.get(tokenUrl, query)];
                            case 1:
                                res = _d.sent();
                                if (!(res.status === 200)) return [3 /*break*/, 3];
                                return [4 /*yield*/, res.json()];
                            case 2: return [2 /*return*/, (_d.sent())];
                            case 3:
                                _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["HttpError"].bind;
                                _b = [void 0, res.status];
                                _c = "Could not retrieve tutor token for " +
                                    userEmail +
                                    ". Error Message: ";
                                return [4 /*yield*/, res.text()];
                            case 4: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["HttpError"], _b.concat([_c + (_d.sent())])))();
                        }
                    });
                });
            }
        }
        var currentUser, bearerProvider, tutoredKedBackendClient, googleTokenProvider, edsClient, tutorEnv;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currentUser = {
                        mail: userEmail,
                        displayName: displayName,
                        roles: ["USER"],
                        school: _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["default"].currentUser.school,
                        tutorFor: userEmail
                    };
                    bearerProvider = createBearerProvider(_globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["default"].kedBackendClient.http, "tutor/token", { userEmail: userEmail });
                    tutoredKedBackendClient = new kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["KedBackendClient"](kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_5__["isomorphic"], bearerProvider, _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_2__["default"].KED_API_URL);
                    googleTokenProvider = createBearerProvider(tutoredKedBackendClient.http, "tutor/convert-token/google");
                    edsClient = new _apis_edsclient__WEBPACK_IMPORTED_MODULE_4__["EdsClient"](kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_5__["isomorphic"], _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_2__["default"].EDS_API_URL, bearerProvider, function () { return userEmail; });
                    tutorEnv = {
                        currentUser: currentUser,
                        bearerProvider: bearerProvider,
                        edsClient: edsClient,
                        googleTokenProvider: googleTokenProvider,
                        kedBackendClient: tutoredKedBackendClient,
                        tutored: true
                    };
                    tutorEnv.ksTermPlannerRepo = new _repos_ks_termplanner_repo__WEBPACK_IMPORTED_MODULE_6__["KSTermPlannerRepo"](function () { return tutoredKedBackendClient; }, function () { return currentUser; });
                    tutorEnv.kgTermPlannerRepo = new _repos_kg_termplanner_repo__WEBPACK_IMPORTED_MODULE_7__["KGTermPlannerRepo"](function () { return tutoredKedBackendClient; }, function () { return currentUser; });
                    tutorEnv.userTasksRepo = new _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_8__["UserTasksRepo"](function () { return tutoredKedBackendClient; }, function () { return currentUser; });
                    return [4 /*yield*/, bearerProvider.getBearer().catch(function (error) {
                            console.error(error);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, tutorEnv];
            }
        });
    });
}


/***/ })

}]);
//# sourceMappingURL=TutorsSelect.js.map