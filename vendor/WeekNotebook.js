(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["WeekNotebook"],{

/***/ "./src/components/week-notebook/index.ts":
/*!***********************************************!*\
  !*** ./src/components/week-notebook/index.ts ***!
  \***********************************************/
/*! exports provided: WeekNotebook, RootWeekNotebook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _week_notebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./week-notebook */ "./src/components/week-notebook/week-notebook.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeekNotebook", function() { return _week_notebook__WEBPACK_IMPORTED_MODULE_0__["WeekNotebook"]; });

/* harmony import */ var _root_week_notebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root-week-notebook */ "./src/components/week-notebook/root-week-notebook.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RootWeekNotebook", function() { return _root_week_notebook__WEBPACK_IMPORTED_MODULE_1__["RootWeekNotebook"]; });





/***/ }),

/***/ "./src/components/week-notebook/root-week-notebook.tsx":
/*!*************************************************************!*\
  !*** ./src/components/week-notebook/root-week-notebook.tsx ***!
  \*************************************************************/
/*! exports provided: RootWeekNotebook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootWeekNotebook", function() { return RootWeekNotebook; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/components/week-notebook/index.ts");



function RootWeekNotebook(props) {
    var intl = props.intl;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_1__["LanguageContext"].Provider, { value: { intl: intl } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](___WEBPACK_IMPORTED_MODULE_2__["WeekNotebook"], null));
}


/***/ }),

/***/ "./src/components/week-notebook/week-notebook.tsx":
/*!********************************************************!*\
  !*** ./src/components/week-notebook/week-notebook.tsx ***!
  \********************************************************/
/*! exports provided: WeekNotebook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekNotebook", function() { return WeekNotebook; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _repos_week_notes_repo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repos/week-notes-repo */ "./src/repos/week-notes-repo.ts");
/* harmony import */ var _utils_pending_job__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/pending-job */ "./src/utils/pending-job.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility-components/wysiwyg */ "./src/components/utility-components/wysiwyg/index.tsx");
/* harmony import */ var _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility-components/wysiwyg/actions-sv */ "./src/components/utility-components/wysiwyg/actions-sv.ts");
/* harmony import */ var _utility_components_wysiwyg_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utility-components/wysiwyg/actions */ "./src/components/utility-components/wysiwyg/actions.ts");
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _utils_if_takes_time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/if-takes-time */ "./src/utils/if-takes-time.ts");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");













var MAX_NOTE_LENGTH = 16384;
var WeekNotebook = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WeekNotebook, _super);
    function WeekNotebook(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = _this.onChange.bind(_this);
        _this.autoSaver = new _utils_pending_job__WEBPACK_IMPORTED_MODULE_3__["PendingJob"](function () { return _this.save(); });
        _this.state = {
            isLoading: true,
            showLoadingProgress: false,
            showSavingProgress: false,
            everEdited: false,
            notes: "",
        };
        return _this;
    }
    WeekNotebook.prototype.componentDidMount = function () {
        this.showProgressIfLoadingTakesTime();
        _repos_week_notes_repo__WEBPACK_IMPORTED_MODULE_2__["weekNotesRepo"].mem.subscribe(this.onChange);
    };
    WeekNotebook.prototype.showProgressIfLoadingTakesTime = function () {
        var _this = this;
        this.timeoutHandle = setTimeout(function () { return _this.state.isLoading && _this.setState({ showLoadingProgress: true }); }, 300);
    };
    WeekNotebook.prototype.componentWillUnmount = function () {
        _repos_week_notes_repo__WEBPACK_IMPORTED_MODULE_2__["weekNotesRepo"].mem.unsubscribe(this.onChange);
        this.autoSaver.stop();
        clearTimeout(this.timeoutHandle);
    };
    WeekNotebook.prototype._save = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var maxIterations;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        maxIterations = 3;
                        _a.label = 1;
                    case 1:
                        if (!(this.isNotesEdited() && maxIterations)) return [3 /*break*/, 4];
                        return [4 /*yield*/, _repos_week_notes_repo__WEBPACK_IMPORTED_MODULE_2__["weekNotesRepo"].upsert(this.state.weekNote, function (wn) {
                                wn.content = _this.state.notes;
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        --maxIterations;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WeekNotebook.prototype.save = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var err_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.state.showSavingProgress && !this.state.isLoading && this.isNotesEdited())) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.setState({ error: undefined })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 6, 8]);
                        return [4 /*yield*/, Object(_utils_if_takes_time__WEBPACK_IMPORTED_MODULE_10__["ifTakesTime"])(300, function () { return _this._save(); }, function () { return _this.setState({ showSavingProgress: true }); })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [4 /*yield*/, this.setState({ error: this.context.intl.formatMessage({ id: "common.errorSavingData", defaultMessage: "Kunde inte spara." }) })];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.setState({ showSavingProgress: false })];
                    case 7:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    WeekNotebook.prototype.isNotesEdited = function () {
        var _a = this.state, weekNote = _a.weekNote, notes = _a.notes;
        return !!weekNote && (notes !== weekNote.content);
    };
    //If the notebook should be used in multiple modules, move this functions into an utility file
    WeekNotebook.prototype.getTranslatedActions = function (intl) {
        //actions might have different icons for each language
        //we keep the same structure of the actions, but we replace the texts with the ones from the translated files
        var localeActions = Object.assign({}, intl.locale === "sv" ? _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_7__["default"] : _utility_components_wysiwyg_actions__WEBPACK_IMPORTED_MODULE_8__["default"]);
        Object.keys(localeActions).forEach(function (elem) {
            var currentTitle = _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_7__["default"][elem].title;
            localeActions[elem].title = intl.formatMessage({ id: "wysiwyg." + elem, defaultMessage: currentTitle });
            //because the image action needs a custom translation, we treat this separately
            if (elem === "image") {
                localeActions[elem].promptMsg = intl.formatMessage({ id: "wysiwyg.imagePromptMsg", defaultMessage: _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_7__["default"][elem].promptMsg });
            }
        });
        return localeActions;
    };
    WeekNotebook.prototype.onChange = function (weekNotes) {
        var weekNote = weekNotes.length > 0 ?
            weekNotes[weekNotes.length - 1] :
            {
                id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_4__["createUUID"])(),
                dateTime: Date.now(),
                //dateTime: weekNotesRepo.getCurrentWeek().toDate().getTime(),
                content: "",
                acl: [
                    // Default ACL: Let user self have full control over this item:
                    new kedbackend_client__WEBPACK_IMPORTED_MODULE_4__["DocumentAccess"]("email", _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser.mail, "S")
                ].map(function (ac) { return ac.toString(); })
            };
        var newState = {
            weekNote: weekNote,
            //week: weekNotesRepo.getCurrentWeek().week(),
            isLoading: false,
            showLoadingProgress: false
        };
        if (!this.state.weekNote || this.state.weekNote.id !== weekNote.id || weekNotes.length === 0) {
            newState.notes = weekNote.content;
        }
        this.setState(newState);
    };
    /*async changeWeek(direction: number) {
      try {
        await this.setState({
          isLoading: true,
          everEdited: false,
          weekNote: null,
          error: undefined
        });
        this.showProgressIfLoadingTakesTime();
        await weekNotesRepo.changeWeek(direction);
      } catch (err) {
        console.error(err);
        await this.setState({error: "Kunde inte ladda data"});
      }
    }
  
    prevWeek() {
      this.changeWeek(-1);
    }
  
    nextWeek() {
      this.changeWeek(1);
    }*/
    WeekNotebook.prototype.render = function () {
        var _this = this;
        var _a = this.state, notes = _a.notes, showLoadingProgress = _a.showLoadingProgress, isLoading = _a.isLoading, showSavingProgress = _a.showSavingProgress, error = _a.error, everEdited = _a.everEdited;
        var intl = this.context.intl;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "ked_boxed kedNotepad" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], { id: "weekNotebook.title", defaultMessage: "Anteckningar" })),
                !isLoading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_6__["Wysiwyg"], { actions: [
                        "bold",
                        "italic",
                        "underline",
                        "strikethrough",
                        "olist",
                        "ulist",
                        "outdent",
                        "indent",
                        "line",
                        "clear"
                    ], defaultActions: this.getTranslatedActions(intl), html: notes.substr(0, MAX_NOTE_LENGTH), onChange: function (html) {
                        _this.setState({
                            notes: html.substr(0, MAX_NOTE_LENGTH),
                            everEdited: true
                        });
                        _this.autoSaver.triggerChange(500);
                    } }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null),
                error ?
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "error" }, error) :
                    showLoadingProgress ?
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], { id: "common.loading", defaultMessage: "Laddar..." }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_9__["TimeoutSpinner"], null)) :
                        showSavingProgress ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], { id: "common.saving", defaultMessage: "Sparar..." }),
                                " \u00A0 "),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_9__["Spinner"], null)) :
                            this.isNotesEdited() ?
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "\u00A0") :
                                everEdited ?
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], { id: "common.saved", defaultMessage: "Sparad" }) :
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "\u00A0"))));
    };
    WeekNotebook.contextType = _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_12__["LanguageContext"];
    return WeekNotebook;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));



/***/ }),

/***/ "./src/repos/week-notes-repo.ts":
/*!**************************************!*\
  !*** ./src/repos/week-notes-repo.ts ***!
  \**************************************/
/*! exports provided: weekNotesRepo, WeekNotesRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekNotesRepo", function() { return weekNotesRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekNotesRepo", function() { return WeekNotesRepo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ked_repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ked-repo */ "./src/repos/ked-repo.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");



var weekNotesRepo = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].weekNotesRepo;
var WeekNotesRepo = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WeekNotesRepo, _super);
    /*private currentWeek: moment.Moment;
  
    getCurrentWeek() {
      if (!this.currentWeek) {
        const {weekMillis, expire} = JSON.parse(sessionStorage.getItem("week-notes-week") || "{}") as {weekMillis?: number, expire?: number};
        this.currentWeek = weekMillis && expire && expire > Date.now() ?
          moment(new Date(weekMillis)) :
          moment().startOf('week').add(1, 'days');
      }
      return this.currentWeek.clone();
    }
  
    setCurrentWeek(newWeekMoment: moment.Moment) {
      this.currentWeek = newWeekMoment;
      sessionStorage.setItem("week-notes-week", JSON.stringify({
        weekMillis: newWeekMoment.toDate().getTime(),
        expire: moment().add(8, "hours").toDate().getTime()
      }))
    }*/
    function WeekNotesRepo() {
        var _this = _super.call(this, {
            getClient: function () { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient; },
            optimistic: false,
            table: "notes",
            user: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser ? _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail : "",
            getQueryOptions: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    //const userEmail = env.currentUser ? env.currentUser.mail : "";
                    //const currentWeek = this.getCurrentWeek();
                    //const weekNumber = currentWeek.week();
                    //const kedWeek = KEDWeek(currentWeek.year(), weekNumber);
                    return [2 /*return*/, {
                            //from: kedWeek.notBefore,
                            //to: kedWeek.notAfter,
                            role: "USER"
                        }];
                });
            }); }
        }) || this;
        return _this;
        //this.currentWeek = null;
    }
    return WeekNotesRepo;
}(_ked_repo__WEBPACK_IMPORTED_MODULE_1__["KedRepo"]));

if (!weekNotesRepo) {
    weekNotesRepo = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].weekNotesRepo = new WeekNotesRepo();
}


/***/ }),

/***/ "./src/utils/if-takes-time.ts":
/*!************************************!*\
  !*** ./src/utils/if-takes-time.ts ***!
  \************************************/
/*! exports provided: ifTakesTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifTakesTime", function() { return ifTakesTime; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function ifTakesTime(ms, task, action) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var timeoutReached, th, rv;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    timeoutReached = false;
                    th = setTimeout(function () {
                        timeoutReached = true;
                        action();
                    }, ms);
                    return [4 /*yield*/, task()];
                case 1:
                    rv = _a.sent();
                    if (!timeoutReached)
                        clearTimeout(th);
                    return [2 /*return*/, rv];
            }
        });
    });
}


/***/ })

}]);
//# sourceMappingURL=WeekNotebook.js.map