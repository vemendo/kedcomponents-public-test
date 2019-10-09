(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["CourseBuilder"],{

/***/ "./src/apis/google-classroom-sync.ts":
/*!*******************************************!*\
  !*** ./src/apis/google-classroom-sync.ts ***!
  \*******************************************/
/*! exports provided: ClassroomSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassroomSync", function() { return ClassroomSync; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _google_webclient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-webclient */ "./src/apis/google-webclient.ts");
/* harmony import */ var _mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock/mock-classroom-data */ "./src/apis/mock/mock-classroom-data.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");




/**
*
*/
var ClassroomSync = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClassroomSync, _super);
    function ClassroomSync() {
        return _super.call(this, { scopes: [
                'https://www.googleapis.com/auth/script.external_request'
            ] }) || this;
    }
    /**
    *
    * @param func function name to call in ClassroomService
    * @param params optional parameters to send to function
    *
    * Calls the relevant funciton in ClassroomService
    * The paramaters must be what is expected in the called function
    * in ClassroomService and can only be basic types: string,
    * number, object or boolean.
    *
    */
    ClassroomSync.prototype.callSync = function (func, params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, KEDToken;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _a.sent();
                        data = params ? {
                            'function': func,
                            'parameters': params
                        } : {
                            'function': func
                        };
                        // using dev-mode right now so we only need to run clasp push on ClassroomService
                        // to be able to use devMode the user calling the script needs to be an editor on the
                        // project in GAS
                        data.devMode = false;
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["env"].bearerProvider.getBearer()];
                    case 2:
                        KEDToken = _a.sent();
                        data.parameters.push(KEDToken.token);
                        return [4 /*yield*/, fetch('https://script.googleapis.com/v1/scripts/M1H0BlTkv983PNVTJjDXjNqXLxmQiBgGz:run?alt=json', {
                                method: 'post',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + this.authToken
                                },
                                body: JSON.stringify(data)
                            }).then(function (resp) { return resp.json(); })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    *
    * @param param0
    */
    ClassroomSync.prototype.initSync = function (course, origCourse, fullSyncNeeded) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var emptyOrMock, _a, _b, group, data, edsSchoolNameGymn, studyGroupStudents, _c, _d, group, tuitionGroupStudents, e_1_1, _e, subset, changes;
            var e_2, _f, e_1, _g;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        emptyOrMock = {};
                        if (course.school === 'KED') {
                            try {
                                for (_a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(course.studyGroups), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    group = _b.value;
                                    emptyOrMock[group] = _mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_2__["mockTuitionStudents"][group] ? _mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_2__["mockTuitionStudents"][group].map(function (s) { return s.studentEmailAddress; }) : [];
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["env"].kedBackendClient.http.get('schools', { 'cacheBust': 'static', 'name': course.school }).then(function (resp) { return resp.json(); })];
                    case 1:
                        data = _h.sent();
                        edsSchoolNameGymn = data[0].edsSchoolNameGymn;
                        studyGroupStudents = edsSchoolNameGymn ? {} : emptyOrMock;
                        if (!course.studyGroups) return [3 /*break*/, 9];
                        if (!edsSchoolNameGymn) return [3 /*break*/, 9];
                        _h.label = 2;
                    case 2:
                        _h.trys.push([2, 7, 8, 9]);
                        _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(course.studyGroups), _d = _c.next();
                        _h.label = 3;
                    case 3:
                        if (!!_d.done) return [3 /*break*/, 6];
                        group = _d.value;
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["env"].edsClient.getTuitionGroupStudents({ schoolName: edsSchoolNameGymn, tuitionGroupName: group })];
                    case 4:
                        tuitionGroupStudents = _h.sent();
                        studyGroupStudents[group] = tuitionGroupStudents.map(function (s) { return s.studentEmailAddress; });
                        _h.label = 5;
                    case 5:
                        _d = _c.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _h.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_d && !_d.done && (_g = _c.return)) _g.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        _e = this.diffCourse(course, origCourse), subset = _e.subset, changes = _e.changes;
                        // send the changes to classroom-service with {id, school code} to update classrooms
                        // should we send the users from the groups or should classroom-service get these from EDS?
                        // if we handle users in kedcomponents a check if there are changes should probably be made?
                        return [2 /*return*/, this.updateClassroom({ course: subset, changes: changes, studyGroupStudents: studyGroupStudents })];
                }
            });
        });
    };
    ClassroomSync.prototype.archive = function (course) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                console.log('archiving');
                return [2 /*return*/, this.callSync('archive', [course])];
            });
        });
    };
    ClassroomSync.prototype.delete = function (subset) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                console.log('deleteing');
                return [2 /*return*/, this.callSync('deleteClassrooms', [subset])];
            });
        });
    };
    /**
    *
    * @param course current course state
    * @param origCourse previous course state
    *
    * Creates a subset of course and maakes a diff against previous course state
    * Note: there are probably more we could filter out before sending to ClasasroomService
    */
    ClassroomSync.prototype.diffCourse = function (course, origCourse) {
        // Filter out assignments from tasks and subset to only properties we are interested in
        var subsetAssignments = function (tasks, modules) {
            var skipTasks = [];
            modules.filter(function (m) { return m.inactive; }).map(function (m) {
                skipTasks = skipTasks.concat(m.taskIds);
            });
            var assignments = tasks.filter(function (t) { return t.assignment === true && !skipTasks.includes(t.id); });
            return assignments.map(function (t) {
                var assignment = t.assignment, deadline = t.deadline, id = t.id, name = t.name, resources = t.resources, templateFile = t.templateFile, sendToUrkund = t.sendToUrkund;
                return { assignment: assignment, deadline: deadline, id: id, name: name, resources: resources, templateFile: templateFile, sendToUrkund: sendToUrkund };
            });
        };
        // create the subset of course
        var subset = (function (_a) {
            var id = _a.id, school = _a.school, code = _a.code, name = _a.name, description = _a.description, tasks = _a.tasks, responsibleTeachers = _a.responsibleTeachers, studyGroups = _a.studyGroups;
            return ({
                id: id,
                school: school,
                code: code,
                name: name,
                description: description,
                tasks: tasks,
                responsibleTeachers: responsibleTeachers,
                studyGroups: studyGroups
            });
        })(course);
        // only handle tsaks that are aassignments
        subset.tasks = subsetAssignments(subset.tasks, course.modules);
        var changes = origCourse ? {
            tasks: subsetAssignments(origCourse.tasks, origCourse.modules),
            responsibleTeachers: origCourse.responsibleTeachers,
            studyGroups: origCourse.studyGroups
        } : false;
        return { subset: subset, changes: changes };
    };
    ClassroomSync.prototype.updateClassroom = function (_a) {
        var course = _a.course, changes = _a.changes, studyGroupStudents = _a.studyGroupStudents;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                return [2 /*return*/, this.callSync('updateClassrooms', [course, changes, studyGroupStudents])];
            });
        });
    };
    return ClassroomSync;
}(_google_webclient__WEBPACK_IMPORTED_MODULE_1__["GoogleWebClient"]));



/***/ }),

/***/ "./src/components/course-builder/courses/course-module-list.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/course-builder/courses/course-module-list.tsx ***!
  \**********************************************************************/
/*! exports provided: CourseModuleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleList", function() { return CourseModuleList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _course_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-module */ "./src/components/course-builder/courses/course-module.tsx");





var CourseModuleList = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CourseModuleList, _super);
    function CourseModuleList(props) {
        var _this = _super.call(this, props) || this;
        _this._moduleRefs = {};
        _this.state = {};
        return _this;
    }
    CourseModuleList.prototype.addModule = function () {
        this.props.host.update({ modules: { $push: [{
                        name: "Ny kursmodul",
                        id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
                        resources: [],
                        taskIds: []
                    }
                ] } });
    };
    CourseModuleList.prototype.getOrderedModules = function () {
        var course = this.props.course;
        var moduleOrder = course.moduleOrder || course.modules.map(function (m) { return m.id; });
        return moduleOrder
            // Map ordered id to module
            .map(function (id) { return course.modules.find(function (m) { return m.id === id; }); })
            // Ignore entries that only exists in moduleOrder but not in modules
            .filter(function (m) { return !!m; })
            // Append modules at end that are not listed in moduleOrder
            .concat(course.modules.filter(function (m) { return !moduleOrder.find(function (id) { return m.id === id; }); }));
    };
    CourseModuleList.prototype.reorder = function (moduleId, direction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var course, orderedModules, moduleIndex, newModuleIndex, currentModuleAtPosition, moduleOrder, origScrollPos, elemModule;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        course = this.props.course;
                        orderedModules = this.getOrderedModules();
                        moduleIndex = orderedModules.findIndex(function (m) { return m.id === moduleId; });
                        newModuleIndex = moduleIndex + direction;
                        if (newModuleIndex < 0 || newModuleIndex >= orderedModules.length) {
                            // Cannot order outside limits.
                            return [2 /*return*/];
                        }
                        currentModuleAtPosition = orderedModules[newModuleIndex];
                        moduleOrder = orderedModules.map(function (m) { return m.id; });
                        moduleOrder[newModuleIndex] = moduleId;
                        moduleOrder[moduleIndex] = currentModuleAtPosition.id;
                        origScrollPos = document.documentElement.scrollTop;
                        return [4 /*yield*/, this.props.host.update({
                                moduleOrder: { $set: moduleOrder }
                            })];
                    case 1:
                        _a.sent();
                        elemModule = Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"])(this._moduleRefs[moduleId]);
                        if (elemModule) {
                            try {
                                window.scrollTo({ top: origScrollPos }); // Prohibit default scrolling directly upwards on move up.
                                if (elemModule.getBoundingClientRect().top < 0 || elemModule.getBoundingClientRect().bottom > document.documentElement.scrollHeight) {
                                    elemModule.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }
                            catch (e) {
                                // Only Chrome beta supports the arguments given above. Default for older browsers.
                                window.scrollTo(null, origScrollPos);
                                if (elemModule.getBoundingClientRect().top < 0 || elemModule.getBoundingClientRect().bottom > document.documentElement.scrollHeight) {
                                    elemModule.scrollIntoView(true);
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CourseModuleList.prototype.render = function () {
        var _this = this;
        var _a = this.props, course = _a.course, host = _a.host, idsNotCoveredByAnyTask = _a.idsNotCoveredByAnyTask;
        var moduleOrder = course.moduleOrder || course.modules.map(function (m) { return m.id; });
        var orderedModules = this.getOrderedModules();
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet", ref: function (elem) { return _this._elem = elem; } },
            orderedModules.map(function (module) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_module__WEBPACK_IMPORTED_MODULE_4__["CourseModuleComponent"], { ref: function (elem) { return _this._moduleRefs[module.id] = elem; }, key: module.id, course: course, module: module, onReorder: function (direction) { return _this.reorder(module.id, direction); }, getOrderedModules: function () { return _this.getOrderedModules(); }, host: host, idsNotCoveredByAnyTask: idsNotCoveredByAnyTask }); }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-large", onClick: function () { return _this.addModule(); } }, "L\u00E4gg till kursmodul"));
    };
    return CourseModuleList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/courses/course-module.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/course-builder/courses/course-module.tsx ***!
  \*****************************************************************/
/*! exports provided: CourseModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleComponent", function() { return CourseModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sub_components_editable_resource_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sub-components/editable-resource-list */ "./src/components/course-builder/sub-components/editable-resource-list.tsx");
/* harmony import */ var _sub_components_editable_task_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sub-components/editable-task-list */ "./src/components/course-builder/sub-components/editable-task-list.tsx");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-addons-update */ "./node_modules/react-addons-update/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sub_components_remove_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sub-components/remove-item */ "./src/components/course-builder/sub-components/remove-item.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utility-components/wysiwyg */ "./src/components/utility-components/wysiwyg/index.tsx");
/* harmony import */ var _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utility-components/wysiwyg/actions-sv */ "./src/components/utility-components/wysiwyg/actions-sv.ts");
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");
/* harmony import */ var _utility_components_content_editable_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utility-components/content-editable-field */ "./src/components/utility-components/content-editable-field.tsx");
/* harmony import */ var _course_builder_ks_logic_task_order__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../course-builder-ks/logic/task-order */ "./src/components/course-builder-ks/logic/task-order.ts");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../features */ "./src/features/index.ts");













var DEFAULT_KNOWLEDGE_MATRIX = [{
        abilityIds: [],
        EIds: [],
        CIds: [],
        AIds: []
    }];
var CourseModuleComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CourseModuleComponent, _super);
    function CourseModuleComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            editMandatoryContent: false
        };
        return _this;
    }
    CourseModuleComponent.prototype.getModuleIndex = function () {
        var _a = this.props, course = _a.course, module = _a.module;
        return course.modules.findIndex(function (m) { return m.id === module.id; });
    };
    CourseModuleComponent.prototype.getModuleOrderIndex = function () {
        var _a = this.props, course = _a.course, module = _a.module;
        var orderedModules = this.props.getOrderedModules();
        return orderedModules.findIndex(function (m) { return m.id === module.id; });
    };
    CourseModuleComponent.prototype.updateModule = function (moduleUpdates) {
        var module = this.props.module;
        var updatedModule = react_addons_update__WEBPACK_IMPORTED_MODULE_4___default()(module, moduleUpdates);
        var moduleIndex = this.getModuleIndex();
        this.props.host.update({ modules: { $splice: [[moduleIndex, 1, updatedModule]] } });
    };
    /* This method works for both adding new tasks to the task table
    and adding references to existing tasks. The magic of that has to do with
    whether task.$meta = 'add' or not and is done in EditCourse.save()
    */
    CourseModuleComponent.prototype.onTaskAdded = function (task, taskCustomization) {
        // Add task ID to module taskIds list:
        var courseUpdates = {};
        var taskIds = this.props.module.taskIds.slice();
        taskIds.push(task.id);
        // Add physical Task to Course.tasks.
        if (!this.props.course.tasks.some(function (t) { return t.id === task.id; })) {
            courseUpdates.tasks = { $push: [task] };
        }
        var customizations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (this.props.module.taskCustomizations || {}));
        if (taskCustomization)
            customizations[task.id] = taskCustomization;
        var moduleIndex = this.getModuleIndex();
        courseUpdates.modules = {};
        courseUpdates.modules[moduleIndex] = {
            taskIds: { $set: taskIds },
            taskCustomizations: { $set: customizations }
        };
        // Update module
        this.props.host.update(courseUpdates);
    };
    CourseModuleComponent.prototype.onTaskUpdated = function (task) {
        if (!task.$meta)
            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Hoppsan, blev lite knas. Fel ID: ", ""], ["Hoppsan, blev lite knas. Fel ID: ", ""])), 'Pa7Dq'));
        var taskIndex = this.props.course.tasks.findIndex(function (t) { return t.id === task.id; });
        if (taskIndex >= 0) {
            this.props.host.update({ tasks: { $splice: [[taskIndex, 1, task]] } });
        }
    };
    CourseModuleComponent.prototype.onTaskCustomized = function (taskId, customization) {
        var customizations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (this.props.module.taskCustomizations || {}));
        customizations[taskId] = customization;
        this.updateModule({ taskCustomizations: { $set: customizations } });
    };
    CourseModuleComponent.prototype.onTaskDeleted = function (id) {
        // Remove task ID from module taskIds list.
        // This depends on the fact that EditCourse._setState() maintains
        // removed Task links (which it actually does (or should do at least)).
        this.updateModule({
            taskIds: { $set: this.props.module.taskIds.filter(function (tid) { return tid !== id; }) },
            taskCustomizations: {
                $apply: function (customizations) {
                    var copy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, customizations);
                    delete copy[id];
                    return copy;
                }
            }
        });
    };
    CourseModuleComponent.prototype.onTaskReplaced = function (id, task) {
        var idxTask = this.props.module.taskIds.indexOf(id);
        if (idxTask < 0) {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["showError"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kunde inte spara uppgift. Felkod d72kQ"], ["Kunde inte spara uppgift. Felkod d72kQ"]))));
            return;
        }
        var moduleUpdates = {
            // Replace old id with new id:
            taskIds: { $splice: [[idxTask, 1, task.id]] },
            taskCustomizations: {
                $apply: function (customizations) {
                    var copy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, customizations);
                    delete copy[id];
                    return copy;
                }
            }
        };
        var updatedModule = react_addons_update__WEBPACK_IMPORTED_MODULE_4___default()(this.props.module, moduleUpdates);
        var moduleIndex = this.getModuleIndex();
        this.props.host.update({
            // Apply moduleUpdates from above:
            modules: { $splice: [[moduleIndex, 1, updatedModule]] },
            // Add the new task to Course.tasks.
            // Don't remove the old one! Why? Because it may be referenced
            // by another module in same course! Let EditCourse._setState()
            // do the "garbage collection" instead.
            tasks: { $set: this.props.course.tasks.concat(task) }
        });
    };
    CourseModuleComponent.prototype.onTasksReordered = function (source, target, placement) {
        var newTaskIds = Object(_course_builder_ks_logic_task_order__WEBPACK_IMPORTED_MODULE_11__["computeUpdatedOrder"])(this.props.course.tasks, this.props.module.taskIds, source, target, placement, { appendLeftovers: false });
        this.updateModule({
            taskIds: { $set: newTaskIds }
        });
    };
    CourseModuleComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, course = _a.course, host = _a.host, module = _a.module, idsNotCoveredByAnyTask = _a.idsNotCoveredByAnyTask;
        var moduleIndex = this.getModuleIndex();
        var moduleOrderedIndex = this.getModuleOrderIndex();
        var knowledgeMatrixDiv;
        var updateModule = this.updateModule.bind(this);
        var week = 1;
        var startWeekOptions = ["--"];
        var endWeekOptions = ["--"];
        for (var i = 0; i < 51; ++i) {
            startWeekOptions.push('' + week);
            endWeekOptions.push('' + ++week);
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_9__["OpenCloseBox"], { inactivated: !_features__WEBPACK_IMPORTED_MODULE_12__["features"].cbCollapseBoxes, title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { float: "right" } },
                    moduleOrderedIndex > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-arrow-circle-up selectable", "aria-hidden": "true", onClick: function (e) { e.stopPropagation(); _this.props.onReorder(-1); } }),
                        " "),
                    moduleOrderedIndex < course.modules.length - 1 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-arrow-circle-down selectable", "aria-hidden": "true", onClick: function (e) { e.stopPropagation(); _this.props.onReorder(1); } }),
                        " "),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_5__["RemoveItem"], { title: "Ta bort modulen", style: { display: 'inline-block' }, onClick: function (e) { e.stopPropagation(); confirm(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ta bort modul ", "?"], ["Ta bort modul ", "?"])), module.name)) && host.update({ modules: { $splice: [[moduleIndex, 1]] } }); } })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, module.name)), headerOpen: module.name == 'Ny kursmodul' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "course-module ked_boxed", style: { position: 'relative' } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_content_editable_field__WEBPACK_IMPORTED_MODULE_10__["ContentEditableField"], { text: module.name, tag: 'h3', className: 'renameable-text', maxChars: 100, placeholder: "Namnl\u00F6s modul", onChange: function (newName) { return updateModule({ name: { $set: newName } }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal spaced" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem center" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Startvecka")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem center" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { value: module.startWeek || "--", onChange: function (ev) { return updateModule({ startWeek: {
                                    $set: ev.target.value === '--' ?
                                        undefined :
                                        parseInt(ev.target.value)
                                }
                            }); } }, startWeekOptions.map(function (o) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { key: o, value: o }, o); }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem center" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Slutvecka")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem center" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { value: module.endWeek || "--", onChange: function (ev) { return updateModule({ endWeek: {
                                    $set: ev.target.value === '--' ?
                                        undefined :
                                        parseInt(ev.target.value)
                                }
                            }); } }, endWeekOptions.map(function (o) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { key: o, value: o }, o); })))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, "Kursmodulens introduktion"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_7__["Wysiwyg"], { actions: [
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
                        "image"
                    ], defaultActions: _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_8__["default"], html: module.mandatoryContent, onChange: function (html) {
                        updateModule({ mandatoryContent: { $set: html } });
                    } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, "Uppgifter"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_editable_task_list__WEBPACK_IMPORTED_MODULE_3__["EditableTaskList"], { taskIds: module.taskIds, taskCustomizations: module.taskCustomizations, course: course, module: module, host: host, idsNotCoveredByAnyTask: idsNotCoveredByAnyTask, onTaskAdded: function (task, taskCustomization) { return _this.onTaskAdded(task, taskCustomization); }, onTaskUpdated: function (task) { return _this.onTaskUpdated(task); }, onTaskCustomizationUpdated: function (taskId, customization) {
                        return _this.onTaskCustomized(taskId, customization);
                    }, onTaskDeleted: function (id) { return _this.onTaskDeleted(id); }, onTaskReplaced: function (id, task) { return _this.onTaskReplaced(id, task); }, onTasksReordered: function (source, target, placement) { return _this.onTasksReordered(source, target, placement); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, "Modulresurser"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "subHeader" }, "(Eventuella resuser f\u00F6r redovisning av modulen samt f\u00F6r modulen som helhet)"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_editable_resource_list__WEBPACK_IMPORTED_MODULE_2__["EditableResourceList"], { resources: module.resources, onUpdate: function (resourcesUpdates) { return updateModule({ resources: resourcesUpdates }); }, host: host }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { position: 'absolute', top: 0, right: 0 } },
                    moduleOrderedIndex > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-arrow-circle-up selectable", "aria-hidden": "true", onClick: function () { return _this.props.onReorder(-1); } }),
                        " "),
                    moduleOrderedIndex < course.modules.length - 1 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-arrow-circle-down selectable", "aria-hidden": "true", onClick: function () { return _this.props.onReorder(1); } }),
                        " "),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_5__["RemoveItem"], { title: "Ta bort modulen", style: { display: 'inline-block' }, onClick: function () { return confirm(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ta bort modul ", "?"], ["Ta bort modul ", "?"])), module.name)) && host.update({ modules: { $splice: [[moduleIndex, 1]] } }); } })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontal-align" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontaItem activateCourseModule" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-info" + (module.inactive ? " btn-activate" : " btn-inactivate"), onClick: function () { return updateModule({ inactive: { $set: !module.inactive } }); } }, module.inactive ? 'Aktivera modulen' : 'Inaktivera modulen')))));
    };
    return CourseModuleComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/components/course-builder/courses/create-new.tsx":
/*!**************************************************************!*\
  !*** ./src/components/course-builder/courses/create-new.tsx ***!
  \**************************************************************/
/*! exports provided: CreateNewCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewCourse", function() { return CreateNewCourse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _course_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _sub_components_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _sub_components_school_courses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sub-components/school-courses */ "./src/components/course-builder/sub-components/school-courses.tsx");
/* harmony import */ var _utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utility-components/form-field-text-input */ "./src/components/utility-components/form-field-text-input.tsx");
/* harmony import */ var _utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility-components/align-horizontal */ "./src/components/utility-components/align-horizontal.tsx");
/* harmony import */ var _utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utility-components/horizontal-item */ "./src/components/utility-components/horizontal-item.tsx");











var CreateNewCourse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CreateNewCourse, _super);
    function CreateNewCourse(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            courseOptions: null,
            selectedTemplateId: "--",
            courses: null,
            selectedCourseId: ""
        };
        return _this;
    }
    CreateNewCourse.prototype.componentDidMount = function () {
        this.load().catch(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"]);
    };
    CreateNewCourse.prototype.load = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var subjects, courses, courseOptions;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("Laddar kurser");
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.list("subjects", {
                                tags: ["schoolType:gymnasium"],
                                include: "courseTemplates"
                            })];
                    case 1:
                        subjects = _a.sent();
                        courses = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["flatten"])(subjects.map(function (s) { return s.courseTemplates; }))
                            .sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["compareProps"])(["name", "dateTime"]));
                        // If two courses have the same name, they will be secondary sorted by date imported.
                        // By running the distinct() call below, we will make sure that only the latest imported
                        // course with that name is loaded.
                        // This is the case for "Webbutveckling 1" - a course that used to occur on a subject with
                        // another name in 2018, but in 2019 occurs on a new subject, so it's by definition another
                        // course, but same name.
                        courses = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["distinct"])(courses, function (c) { return c.name; });
                        courseOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([
                            { id: "--", name: "--" }
                        ], courses, [
                            { id: "---", name: "---" },
                            { id: "custom", name: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Egen kurs"], ["Egen kurs"]))) }
                        ]);
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("");
                        this.setState({ courseOptions: courseOptions });
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateNewCourse.prototype.onSelectCourse = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var derivedCourses, courseOptions, kedStandardOptions, teacherMade, courses;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (id === 'custom') {
                            this.setState({
                                selectedTemplateId: id
                            });
                        }
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.list("courses", { hasEdgesTo: [id] })];
                    case 1:
                        derivedCourses = _a.sent();
                        courseOptions = derivedCourses
                            .filter(function (course) { return course.active; })
                            .map(function (_a) {
                            var id = _a.id, school = _a.school, description = _a.description, createdBy = _a.createdBy, modifiedBy = _a.modifiedBy;
                            if (description)
                                description = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(description, 80);
                            var descriptionOrAuthor = description ||
                                (createdBy ? createdBy.name + "s version" :
                                    modifiedBy && modifiedBy.name + "s version");
                            return {
                                id: id,
                                name: school === 'standard' ?
                                    description ? "Standard - " + description : "Standard" :
                                    school + " - " + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(descriptionOrAuthor, 90),
                                school: school
                            };
                        }).sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["compareProp"])("name"));
                        kedStandardOptions = courseOptions.filter(function (option) { return option.school === "standard"; });
                        teacherMade = courseOptions.filter(function (option) { return option.school !== "standard"; });
                        courses = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(kedStandardOptions, [
                            { id: id, name: "Tom" }
                        ], teacherMade);
                        this.setState({
                            courses: courses,
                            selectedTemplateId: id,
                            selectedCourseId: courses[0].id
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateNewCourse.prototype.render = function () {
        var _this = this;
        var _a = this.state, courseOptions = _a.courseOptions, selectedTemplateId = _a.selectedTemplateId, courses = _a.courses, selectedCourseId = _a.selectedCourseId, customCourseName = _a.customCourseName, customCoursePoints = _a.customCoursePoints;
        var customCourseCode = customCourseName && (this.state.customCourseCode || "CUST-" + customCourseName.substr(0, 5).toUpperCase());
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { outline: 0 } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_banner__WEBPACK_IMPORTED_MODULE_2__["CourseBanner"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kursbyggaren"], ["Kursbyggaren"]))), activePage: "courseBuilder", routes: { feedback: this.props.feedbackUrl } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-12" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-spacer-20pxvt sv-vertical sv-layout sv-skip-spacer" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pagecontent sv-layout sv-spacer-20pxvt sv-skip-spacer" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout sv-skip-spacer" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-7" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Skapa ny kurs"),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal spaced" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "V\u00E4lj gymnasiekurs :"))),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal spaced" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, !courseOptions ?
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_6__["Spinner"], null),
                                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { disabled: true, value: "" },
                                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", null, "--"))) :
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { value: selectedTemplateId, onChange: function (ev) { return _this.onSelectCourse(ev.target.value).catch(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"]); } }, courseOptions.map(function (course) {
                                                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { key: course.id, value: course.id }, course.name);
                                                })))),
                                        selectedTemplateId === 'custom' ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_9__["AlignHorizontal"], null,
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_10__["HorizontalItem"], null,
                                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_8__["TextInput"], { id: "customCourseName", autoFocus: true, label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kursens namn"], ["Kursens namn"]))), value: customCourseName || '', onChange: function (value) {
                                                            return _this.setState({ customCourseName: value });
                                                        } })),
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_10__["HorizontalItem"], null,
                                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_8__["TextInput"], { id: "customCourseCode", label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kurskod"], ["Kurskod"]))), size: 12, value: customCourseCode || '', onChange: function (customCourseCode) { return _this.setState({ customCourseCode: customCourseCode }); } }))),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_8__["TextInput"], { id: "customCoursePoints", label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Po\u00E4ng"], ["Po\u00E4ng"]))), size: 3, value: '' + (customCoursePoints || ''), onChange: function (value) {
                                                    var numPoints = value ? parseInt(value) : 0;
                                                    if (!isNaN(numPoints) && numPoints < 1000) {
                                                        _this.setState({ customCoursePoints: numPoints });
                                                    }
                                                } }),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { className: "btn btn-large", to: "/courses/create-custom/" + encodeURIComponent(JSON.stringify({ name: customCourseName, code: customCourseCode, points: customCoursePoints })) }, "Skapa")) : courses && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal spaced" },
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Utg\u00E5 fr\u00E5n version: "))),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal spaced" },
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { value: selectedCourseId, onChange: function (ev) { return _this.setState({
                                                            selectedCourseId: ev.target.value
                                                        }); } }, courses.map(function (course) {
                                                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { key: course.id, value: course.id }, course.name);
                                                    })))),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                                            selectedCourseId && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { to: "/courses/create-from-template/" + this.state.selectedCourseId, className: "btn btn-large" }, "Skapa")))),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-column-5" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_school_courses__WEBPACK_IMPORTED_MODULE_7__["SchoolCourses"], null))))))));
    };
    return CreateNewCourse;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/components/course-builder/courses/edit-course.tsx":
/*!***************************************************************!*\
  !*** ./src/components/course-builder/courses/edit-course.tsx ***!
  \***************************************************************/
/*! exports provided: EditCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCourse", function() { return EditCourse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _course_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _inner_edit_course__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inner-edit-course */ "./src/components/course-builder/courses/inner-edit-course.tsx");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-addons-update */ "./node_modules/react-addons-update/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _sub_components_remove_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sub-components/remove-item */ "./src/components/course-builder/sub-components/remove-item.tsx");
/* harmony import */ var _business_logic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./business-logic */ "./src/components/course-builder/courses/business-logic.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var _sub_components_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _repos_school_courses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../repos/school-courses */ "./src/repos/school-courses.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _globals_current_user__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../globals/current-user */ "./src/globals/current-user.ts");
/* harmony import */ var _features_features__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../features/features */ "./src/features/features.ts");
/* harmony import */ var _apis_google_classroom_sync__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../apis/google-classroom-sync */ "./src/apis/google-classroom-sync.ts");




















var catcher = _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_12__["default"].ENVIRONMENT === 'production' ?
    _utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"] : null;
var CONFIRM_NAVIGATE_MESSAGE = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Du har osparat data. V\u00E4lj avbryt och tryck CTRL+S om du vill spara f\u00F6rst."], ["Du har osparat data. V\u00E4lj avbryt och tryck CTRL+S om du vill spara f\u00F6rst."])));
var DEFAULT_STATE = {
    origCourse: null,
    origTemplate: null,
    course: null,
    dialogContainers: [],
    hasUnsavedData: false,
    view: 'courseBuilder',
    classroomSyncInProgress: false
};
var EditCourse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditCourse, _super);
    function EditCourse(props) {
        var _this = _super.call(this, props) || this;
        _this.state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_STATE);
        _this.update = _this.update.bind(_this);
        _this.refDialog = _this.refDialog.bind(_this);
        _this.contentYPos = 0;
        _this.onKeyDown = _this.onKeyDown.bind(_this);
        _this.beforeUnload = _this.beforeUnload.bind(_this);
        _this.onClickPreventUnload = _this.onClickPreventUnload.bind(_this);
        _this.isSaving = false;
        _this.dialogs = [];
        if (props.view)
            _this.state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.state), { view: props.view });
        return _this;
    }
    EditCourse.prototype.setStatePromised = function (state) {
        return this._setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ hasUnsavedData: true }, state));
    };
    EditCourse.prototype.setNonSaveableDataState = function (state) {
        return this._setState(state);
    };
    EditCourse.prototype._setState = function (state) {
        var _this = this;
        if (state.course) {
            {
                //
                // Maintain course task links (remove links to tasks that are not used
                // by any module)
                //
                var _a = state.course, tasks = _a.tasks, modules = _a.modules;
                var usedTaskIds_1 = {};
                modules.forEach(function (module) { return module.taskIds.forEach(function (id) { return usedTaskIds_1[id] = true; }); });
                var filteredCourseTasks = tasks.filter(function (t) { return usedTaskIds_1[t.id]; });
                var modifiedCourse = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.course);
                modifiedCourse.tasks = filteredCourseTasks;
                state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { course: modifiedCourse });
            }
        }
        // Invoke our course into state property allCourses so that the
        // right-hand side list of courses gets update immediately with
        // the publishable state of this course.
        var allCourses = state.allCourses || this.state.allCourses;
        var course = state.course || this.state.course;
        if (allCourses) {
            var idxOurCourse = allCourses.findIndex(function (c) { return c.id === _this.props.id; });
            allCourses = react_addons_update__WEBPACK_IMPORTED_MODULE_9___default()(allCourses, { $splice: [[idxOurCourse, 1, course]] });
            state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state);
            state.allCourses = allCourses;
        }
        return new Promise(function (resolve) { return _super.prototype.setState.call(_this, function () { return state; }, resolve); });
    };
    EditCourse.prototype.componentWillMount = function () {
        this.load().catch(catcher);
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('beforeunload', this.beforeUnload);
        document.body.addEventListener('click', this.onClickPreventUnload);
    };
    EditCourse.prototype.componentWillUnmount = function () {
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('beforeunload', this.beforeUnload);
        document.body.removeEventListener('click', this.onClickPreventUnload);
        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["updateCourseBuilderStatus"])('');
    };
    EditCourse.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.state && this.state.course) {
            if (nextProps.id !== this.props.id || nextProps.templateId !== this.props.templateId) {
                this.setStatePromised(DEFAULT_STATE);
            }
        }
        if (nextProps.view !== this.props.view) {
            this.setNonSaveableDataState({ view: nextProps.view });
        }
    };
    EditCourse.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.contentDiv) {
            var contentDiv = Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"])(this.contentDiv);
            if (contentDiv) {
                this.contentYPos = contentDiv.getBoundingClientRect().top;
            }
        }
        if (prevState && prevState.course) {
            // This was not the initial update.
            // If props have been updated to point out another course or template, reset component:
            if (this.props.id !== prevProps.id || this.props.templateId !== prevProps.templateId) {
                this.load().catch(catcher);
            }
        }
        if (!prevState.hasUnsavedData && this.state.hasUnsavedData) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_4__["updateCourseBuilderStatus"])('unsaved');
        }
    };
    EditCourse.prototype.loadFromTemplate = function (templateId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var template, course, mySchool;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("Laddar data från mall...");
                        return [4 /*yield*/, Object(_utils__WEBPACK_IMPORTED_MODULE_4__["loadCourse"])(templateId, { includeTemplateChain: true })];
                    case 1:
                        template = _a.sent();
                        course = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["updateCreationStamp"])(Date.now(), template, _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser);
                        course.id = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])();
                        course.parentId = templateId;
                        course.active = false;
                        course.isTemplate = false;
                        course.templateChain = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(course.templateChain);
                        course.templateChain.push({ id: templateId, $meta: 'ref' });
                        mySchool = _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.school;
                        course.school = mySchool;
                        course.description = "";
                        course.responsibleTeachers = [{ name: _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.displayName, email: _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.mail, access: 'full', url: _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.mail }];
                        delete course.studyGroups;
                        course.acl = [
                            "role:USER:R",
                            "schoolRole:" + mySchool + "/EMPLOYEE:S" // Other teachers at same school should be able to modify the course.
                        ];
                        delete course.$etag;
                        delete course.createdBy;
                        delete course.createdDate;
                        delete course.modifiedBy;
                        delete course.modifiedDate;
                        delete course.activatedBy;
                        delete course.activatedDate;
                        delete course.googleClassRoomCode;
                        delete course.googleClassRoomURL;
                        delete course.googleCreateClassrooms;
                        return [4 /*yield*/, this.setStatePromised({ course: course, origCourse: null, origTemplate: template })];
                    case 2:
                        _a.sent();
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("");
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype.loadCustomParams = function (_a) {
        var name = _a.name, code = _a.code, points = _a.points;
        var now = Date.now();
        var mySchool = _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.school;
        var user = _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser;
        var course = {
            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
            name: name,
            code: code,
            points: points,
            dateTime: now,
            createdDate: now,
            createdBy: {
                name: user.displayName,
                url: "mailto:" + user.mail
            },
            subjectId: "custom",
            subjectCode: "custom",
            active: false,
            isTemplate: false,
            templateChain: [],
            school: mySchool,
            description: "",
            responsibleTeachers: [{ name: user.displayName, email: user.mail, access: 'full', url: user.mail }],
            acl: [
                "role:USER:R",
                "schoolRole:" + mySchool + "/EMPLOYEE:S" // Other teachers at same school should be able to modify the course.
            ],
            resources: [],
            modules: [],
            knowledgeRequirementsOrder: [],
            centralContentOrder: [],
            abilitiesOrder: [],
            images: [],
            knowledgeRequirements: [],
            centralContent: [],
            abilities: [],
            tasks: [],
            schoolType: "gymnasium",
            tags: [
                "sub:CUSTOM",
                "course:" + code,
                "schoolType:gymnasium"
            ]
        };
        this.setState({ course: course, origCourse: course, origTemplate: null });
    };
    EditCourse.prototype.load = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["updateCourseBuilderStatus"])('');
                        if (!this.props.id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadExistingCourse(this.props.id)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!this.props.templateId) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.loadFromTemplate(this.props.templateId)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        if (this.props.customParams) {
                            this.loadCustomParams(this.props.customParams);
                        }
                        else {
                            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ogiltig parameter. customParams, id eller templateId m\u00E5ste anges"], ["Ogiltig parameter. customParams, id eller templateId m\u00E5ste anges"]))));
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype.loadExistingCourse = function (courseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var course;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("Laddar kurs");
                        return [4 /*yield*/, Object(_utils__WEBPACK_IMPORTED_MODULE_4__["loadCourse"])(courseId)];
                    case 1:
                        course = _a.sent();
                        if (!course.responsibleTeachers)
                            course.responsibleTeachers = [{ name: _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.displayName, email: _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.mail, access: 'full', url: _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.mail }];
                        return [4 /*yield*/, this.setNonSaveableDataState({ course: course, origCourse: course })];
                    case 2:
                        _a.sent();
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("");
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype.update = function (courseUpdates) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setStatePromised({ course: react_addons_update__WEBPACK_IMPORTED_MODULE_9___default()(this.state.course, courseUpdates) })];
                    case 1:
                        _a.sent();
                        //check classroom changes
                        if (_features_features__WEBPACK_IMPORTED_MODULE_17__["features"].studyGroups) {
                            this._checkClassroomChanges();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype.deleteCourse = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var courseSchool, parentId, courseId, classroomSync, children, br, children_1, children_1_1, childCourse;
            var e_1, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("Raderar kursen...");
                        courseSchool = this.state.course.school;
                        parentId = this.state.course.parentId;
                        courseId = this.props.id;
                        classroomSync = new _apis_google_classroom_sync__WEBPACK_IMPORTED_MODULE_18__["ClassroomSync"]();
                        classroomSync.delete({ responsibleTeachers: this.state.course.responsibleTeachers, id: courseId });
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].kedBackendClient.list("courses", {
                                hasEdgesTo: [this.props.id]
                            })];
                    case 1:
                        children = _b.sent();
                        br = new kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["BatchRunner"]();
                        try {
                            for (children_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                                childCourse = children_1_1.value;
                                /* CANNOT DO THIS. MAY NOT HAVE ACCESS! if (childCourse.parentId === courseId) {
                                  // Reconnect child with my parent instead, as I will be disappearing...
                                  childCourse.parentId = parentId;
                                  br.put("courses", childCourse);
                                }*/
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        br.delete("courses", courseId);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].kedBackendClient.batch(br.mutationRequests)];
                    case 2:
                        _b.sent();
                        if (courseSchool === _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.school) {
                            _repos_school_courses__WEBPACK_IMPORTED_MODULE_14__["mySchoolCoursesRepo"].delete(courseId);
                        }
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("");
                        location.hash = "#/courses/new";
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * In case that the course has changes which should be synced with classroom
     * Ask the user if the sync should be done
     */
    EditCourse.prototype.confirmSaveAndSync = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, course, origCourse, syncWithClassroom;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, course = _a.course, origCourse = _a.origCourse;
                        syncWithClassroom = false;
                        //confirm should not be displayed in case the checkbox was saved and the feature flag is off
                        if (origCourse && course.googleCreateClassrooms && !course.inSyncWithClassroom && _features_features__WEBPACK_IMPORTED_MODULE_17__["features"].studyGroups) {
                            syncWithClassroom = confirm(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Synkronisera kurs kurs med Classroom?"], ["Synkronisera kurs kurs med Classroom?"]))));
                        }
                        return [4 /*yield*/, syncWithClassroom];
                    case 1:
                        (_b.sent()) ? this.syncWithClassroomAndSave() : this.save();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype.save = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, course, origCourse, classroomSync, result, catcher_1, enableTeacherRights, origAccessList, modifiedAccessList, currentUser, err_1, errorMessage;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, course = _a.course, origCourse = _a.origCourse;
                        if (!(_features_features__WEBPACK_IMPORTED_MODULE_17__["features"].studyGroups && origCourse && origCourse.googleCreateClassrooms && !course.googleCreateClassrooms)) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        classroomSync = new _apis_google_classroom_sync__WEBPACK_IMPORTED_MODULE_18__["ClassroomSync"]();
                        return [4 /*yield*/, classroomSync.archive(course)];
                    case 2:
                        result = _b.sent();
                        if (!result.done) {
                            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Classroom course could not be archived"], ["Classroom course could not be archived"]))));
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        catcher_1 = _b.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        enableTeacherRights = _features_features__WEBPACK_IMPORTED_MODULE_17__["features"].teacherRights;
                        origAccessList = this.state.origCourse ? Object(_business_logic__WEBPACK_IMPORTED_MODULE_11__["getSoftAccessList"])(this.state.origCourse) : [];
                        modifiedAccessList = Object(_business_logic__WEBPACK_IMPORTED_MODULE_11__["getSoftAccessList"])(this.state.course);
                        currentUser = Object(_globals_current_user__WEBPACK_IMPORTED_MODULE_16__["getCurrentUser"])();
                        if (enableTeacherRights &&
                            (!currentUser.roles.includes("ADMIN") &&
                                !Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(origAccessList, modifiedAccessList).some(function (_a) {
                                    var email = _a.email, url = _a.url, access = _a.access;
                                    return (email || url) === currentUser.mail && // url is for backward compat! Has been renamed to email.
                                        (!access || // Backward compat. Was not possible to set access before!
                                            access === 'edit' || // Edit is fine
                                            access === 'full');
                                }))) {
                            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kursen kunde inte sparas. L\u00E4gg till dig sj\u00E4lv i listan p\u00E5 ansvariga l\u00E4rare"], ["Kursen kunde inte sparas. L\u00E4gg till dig sj\u00E4lv i listan p\u00E5 ansvariga l\u00E4rare"]))));
                            return [2 /*return*/];
                        }
                        if (this.isSaving)
                            return [2 /*return*/];
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 7, 8, 9]);
                        this.isSaving = true;
                        return [4 /*yield*/, this._save()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        err_1 = _b.sent();
                        errorMessage = err_1 && err_1.message ? err_1.message : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ett ok\u00E4nt fel har intr\u00E4ffat..."], ["Ett ok\u00E4nt fel har intr\u00E4ffat..."])));
                        if (err_1) {
                            if (err_1.name === 'http409' || err_1.name === 'http412' || err_1.name === 'http404') {
                                // Conflict. Show a nicer error message:
                                errorMessage = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kursen har redigerad av annan anv\u00E4ndare. Ladda om sidan och g\u00F6r om \u00E4ndrinarna."], ["Kursen har redigerad av annan anv\u00E4ndare. Ladda om sidan och g\u00F6r om \u00E4ndrinarna."])));
                            }
                            else if (err_1.name === 'http403') {
                                if (this.state.course.isTemplate)
                                    errorMessage = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ingen beh\u00F6righet att spara kursmallen. Endast administrat\u00F6rer kan redigera kursmallar."], ["Ingen beh\u00F6righet att spara kursmallen. Endast administrat\u00F6rer kan redigera kursmallar."])));
                                else if (this.state.course.school)
                                    errorMessage = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ingen beh\u00F6righet att spara kursen ", ". Kursen kan bara redigeras av anst\u00E4llda p\u00E5 ", ""], ["Ingen beh\u00F6righet att spara kursen ", ". Kursen kan bara redigeras av anst\u00E4llda p\u00E5 ", ""])), this.state.course.name, this.state.course.school);
                            }
                        }
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])(errorMessage);
                        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["updateCourseBuilderStatus"])('error');
                        return [3 /*break*/, 9];
                    case 8:
                        this.isSaving = false;
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype.syncInProgress = function () {
        return this.state.classroomSyncInProgress;
    };
    EditCourse.prototype.syncWithClassroomAndSave = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, course, origCourse, classroomSync, fullSyncNeeded, syncResult, err_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, course = _a.course, origCourse = _a.origCourse;
                        return [4 /*yield*/, this.save()];
                    case 1:
                        _b.sent();
                        // if there is still unsaved data it means that an error encountered during save. 
                        // sync with google classroom will be canceled
                        if (this.state.hasUnsavedData) {
                            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Synkronisering med Classroom skulle inte ske"], ["Synkronisering med Classroom skulle inte ske"]))));
                            return [2 /*return*/];
                        }
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, , 8]);
                        this.setState({ classroomSyncInProgress: true });
                        classroomSync = new _apis_google_classroom_sync__WEBPACK_IMPORTED_MODULE_18__["ClassroomSync"]();
                        if (!course.googleCreateClassrooms) return [3 /*break*/, 6];
                        fullSyncNeeded = course.inSyncWithClassroom == null;
                        return [4 /*yield*/, classroomSync.initSync(course, origCourse, fullSyncNeeded)];
                    case 3:
                        syncResult = _b.sent();
                        if (!syncResult.done) return [3 /*break*/, 5];
                        this.update({ inSyncWithClassroom: { $set: true } });
                        this.setState({ classroomSyncInProgress: false });
                        //update inSyncWithClassroom flag
                        return [4 /*yield*/, this._save(true)];
                    case 4:
                        //update inSyncWithClassroom flag
                        _b.sent();
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Synkronisering med framg\u00E5ng"], ["Synkronisering med framg\u00E5ng"]))));
                        return [3 /*break*/, 6];
                    case 5:
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Fel vid synkronisering med Classroom"], ["Fel vid synkronisering med Classroom"]))));
                        this.setState({ classroomSyncInProgress: false });
                        _b.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        err_2 = _b.sent();
                        catcher;
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype._save = function (silentSave) {
        if (silentSave === void 0) { silentSave = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, course, origCourse, origTemplate, doesAllTasksCoverAllRequirements, modifiedCourse, batch, orig, newCourseTasks, tags, isExistingCourse, schoolId, schoolId, schoolId, conflictedCourses, res;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, course = _a.course, origCourse = _a.origCourse, origTemplate = _a.origTemplate;
                        doesAllTasksCoverAllRequirements = Object(_business_logic__WEBPACK_IMPORTED_MODULE_11__["getUncoveredKnowledgeRequirements"])(course).length === 0;
                        !silentSave && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_13 || (templateObject_13 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Sparar..."], ["Sparar..."]))));
                        modifiedCourse = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["updateModificationStamp"])(Date.now(), course, _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser);
                        batch = new kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["BatchRunner"]();
                        orig = origCourse || origTemplate;
                        newCourseTasks = modifiedCourse.tasks.map(function (task) {
                            if (task.$meta === 'add' || task.$meta === 'update') {
                                var origTask = orig.tasks.find(function (t) { return t.id === task.id; });
                                return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["updateDocumentGraphs"])(origTask || {}, task, "tasks", {
                                    knowledgeRequirements: 'knowledge-requirements',
                                    centralContent: 'central-content',
                                    abilities: 'abilities'
                                }, batch);
                            }
                            else {
                                var updatedTask = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, task);
                                delete updatedTask.$meta;
                                return updatedTask;
                            }
                        });
                        modifiedCourse = react_addons_update__WEBPACK_IMPORTED_MODULE_9___default()(modifiedCourse, { tasks: { $set: newCourseTasks } });
                        modifiedCourse = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["updateDocumentGraphs"])(origCourse || {}, modifiedCourse, 'courses', {
                            templateChain: 'courses',
                            centralContent: 'central-content',
                            knowledgeRequirements: 'knowledge-requirements',
                            abilities: 'abilities',
                            images: 'images',
                            tasks: 'tasks'
                        }, batch);
                        modifiedCourse = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, modifiedCourse);
                        modifiedCourse.publishable = doesAllTasksCoverAllRequirements;
                        tags = (modifiedCourse.tags || []).filter(function (tag) { return tag !== 'incomplete'; });
                        modifiedCourse.tags = modifiedCourse.publishable ?
                            tags : tags.concat("incomplete");
                        isExistingCourse = origCourse && !this.props.customParams;
                        if (!!isExistingCourse) return [3 /*break*/, 3];
                        // A new course should be added:
                        batch.add('courses', modifiedCourse);
                        if (!course.school) return [3 /*break*/, 2];
                        return [4 /*yield*/, _repos_school_courses__WEBPACK_IMPORTED_MODULE_14__["mySchoolCoursesRepo"].getSchoolId()];
                    case 1:
                        schoolId = _b.sent();
                        batch.link("schools", schoolId, "courses", course.id, "courses");
                        if (course.active) {
                            batch.link("schools", schoolId, "courses", course.id, "activeCourses");
                        }
                        _b.label = 2;
                    case 2: return [3 /*break*/, 7];
                    case 3:
                        // An existing course should be updated:
                        batch.put('courses', modifiedCourse);
                        if (!(!origCourse.active && course.active)) return [3 /*break*/, 5];
                        return [4 /*yield*/, _repos_school_courses__WEBPACK_IMPORTED_MODULE_14__["mySchoolCoursesRepo"].getSchoolId()];
                    case 4:
                        schoolId = _b.sent();
                        batch.link("schools", schoolId, "courses", course.id, "activeCourses");
                        return [3 /*break*/, 7];
                    case 5:
                        if (!(origCourse.active && !course.active)) return [3 /*break*/, 7];
                        return [4 /*yield*/, _repos_school_courses__WEBPACK_IMPORTED_MODULE_14__["mySchoolCoursesRepo"].getSchoolId()];
                    case 6:
                        schoolId = _b.sent();
                        batch.unlink("schools", schoolId, "courses", course.id, "activeCourses");
                        _b.label = 7;
                    case 7:
                        if (!(modifiedCourse.subjectCode === 'custom')) return [3 /*break*/, 9];
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].kedBackendClient.list("courses", {
                                tags: ["course:" + modifiedCourse.code]
                            })];
                    case 8:
                        conflictedCourses = _b.sent();
                        conflictedCourses = conflictedCourses.filter(function (c) { return c.id !== modifiedCourse.id; });
                        conflictedCourses = conflictedCourses.filter(function (c) { return c.subjectCode !== "custom"; });
                        if (conflictedCourses.length > 0) {
                            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_14 || (templateObject_14 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kursens kurskod f\u00E5r inte vara samma som kurskoder fr\u00E5n skolverket: ", ""], ["Kursens kurskod f\u00E5r inte vara samma som kurskoder fr\u00E5n skolverket: ", ""])), modifiedCourse.code));
                        }
                        _b.label = 9;
                    case 9: return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].kedBackendClient.batch(batch.mutationRequests)];
                    case 10:
                        res = _b.sent();
                        !silentSave && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])(isExistingCourse ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_15 || (templateObject_15 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4ndringarna har sparats"], ["\u00C4ndringarna har sparats"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_16 || (templateObject_16 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kursen har skapats"], ["Kursen har skapats"]))));
                        // Update state to reflect what has been posted:
                        if (res && res.newEtags)
                            modifiedCourse = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["applyEtags"])(modifiedCourse, res.newEtags, ["images", "tasks"]);
                        if (course.school === _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.school) {
                            // Update mySchoolCoursesRepo
                            if (!isExistingCourse) {
                                _repos_school_courses__WEBPACK_IMPORTED_MODULE_14__["mySchoolCoursesRepo"].insert(modifiedCourse);
                            }
                            else {
                                _repos_school_courses__WEBPACK_IMPORTED_MODULE_14__["mySchoolCoursesRepo"].update(modifiedCourse);
                            }
                        }
                        return [4 /*yield*/, this.setNonSaveableDataState({ course: modifiedCourse, origCourse: modifiedCourse, hasUnsavedData: false })];
                    case 11:
                        _b.sent();
                        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["updateCourseBuilderStatus"])('');
                        if (!isExistingCourse) {
                            // This was the creation of a new course. Correct the route now when the user enters an edit state:
                            location.hash = "#/courses/" + modifiedCourse.id + "/edit";
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype._checkClassroomChanges = function () {
        var _a = this.state, course = _a.course, origCourse = _a.origCourse;
        var arr1set = course.tasks.filter(function (x) { return x.assignment; });
        if (!origCourse) {
            course.inSyncWithClassroom = false;
            this.setStatePromised({ course: course });
            return;
        }
        //if (course.inSyncWithClassroom) {
        var arr2set = origCourse.tasks.filter(function (x) { return x.assignment; });
        //check tasks added or removed
        var hasTeacherChanges = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["hasChanges"])(origCourse.responsibleTeachers, course.responsibleTeachers);
        //
        var hasTasksChanges = arr1set.filter(function (x) { return !arr2set.find(function (y) { return y.id == x.id; }); }).length > 0 || arr2set.filter(function (x) { return !arr1set.find(function (y) { return y.id == x.id; }); }).length > 0;
        //check if any task renamed or changed its type
        if (!hasTasksChanges) {
            hasTasksChanges = arr1set.some(function (e1) { return arr2set.find(function (e2) {
                return e2.id === e1.id && e2.name !== e1.name;
            }) != null; });
        }
        var hasStudyGroupsChanges = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["hasChanges"])(origCourse.studyGroups, course.studyGroups);
        //checks are made with the previous object in case that the user will revert the changes
        var prevStatus = course.inSyncWithClassroom;
        course.inSyncWithClassroom = !(hasTeacherChanges || hasTasksChanges || hasStudyGroupsChanges);
        if (prevStatus != course.inSyncWithClassroom) {
            this.setStatePromised({ course: course });
        }
    };
    EditCourse.prototype.activateAndSave = function () {
        var _this = this;
        var course = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state.course);
        if (!course.active) {
            /*const uncoveredRequirements = getUncoveredKnowledgeRequirements(course);
            if (uncoveredRequirements.length > 0)
              return showError (L`Det finns kunskapskrav som inte uppfylls av någon modul. Kan inte aktivera kursen förrän alla kunskapskrav finns med.`);
            */
            course.active = true;
            course.activatedBy = {
                name: _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.displayName,
                url: "mailto:" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.mail
            };
            course.activatedDate = Date.now();
            this.setStatePromised({ course: course })
                .then(function () { return _this.save(); })
                .catch(catcher);
        }
    };
    EditCourse.prototype.inactivateAndSave = function () {
        var _this = this;
        var course = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state.course);
        if (course.active) {
            course.active = false;
            course.inactivatedBy = {
                name: _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.displayName,
                url: "mailto:" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.mail
            };
            course.inactivatedDate = Date.now();
            this.setStatePromised({ course: course })
                .then(function () { return _this.save(); })
                .catch(catcher);
        }
    };
    EditCourse.prototype.openDialog = function (dialogContainer) {
        this.setNonSaveableDataState({ dialogContainers: this.state.dialogContainers.concat(dialogContainer) });
    };
    EditCourse.prototype.closeDialog = function () {
        var dialogContainers = this.state.dialogContainers;
        var length = dialogContainers.length;
        length && this.setNonSaveableDataState({ dialogContainers: dialogContainers.slice(0, length - 1) });
        // Now sync the direct 'dialogs' property with the new state:
        while (this.dialogs.length >= length)
            this.dialogs.pop();
    };
    EditCourse.prototype.refDialog = function (dialog, index) {
        this.dialogs[index] = dialog; // Setting per index instead of push(). Works even if the ref attribute could be invoked multiple times.
    };
    EditCourse.prototype.onKeyDown = function (ev) {
        if (ev.which === 83 && (ev.ctrlKey || ev.metaKey)) { // CTRL-S
            ev.preventDefault();
            if (this.state.dialogContainers.length > 0) {
                this.saveDialog();
                return;
            }
            this.save();
        }
        else if (ev.which === 27 && this.state.dialogContainers.length > 0) {
            this.closeDialog();
            ev.preventDefault();
        }
        else if (ev.which === 13) {
            var targetElem = ev.target;
            if (this.state.dialogContainers.length > 0 &&
                targetElem.tagName !== 'TEXTAREA' &&
                targetElem.tagName !== 'INPUT' &&
                targetElem.tagName !== 'SELECT' &&
                targetElem.tagName !== 'OPTION' &&
                !targetElem.contentEditable) {
                this.saveDialog();
            }
        }
    };
    EditCourse.prototype.beforeUnload = function (ev) {
        if (this.state.dialogContainers.length > 0 || this.state.hasUnsavedData) {
            if (!_globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].kedBackendClient.http.bearerProvider.wantsRedirect) {
                ev.returnValue = CONFIRM_NAVIGATE_MESSAGE;
                return ev.returnValue;
            }
        }
    };
    EditCourse.prototype.onClickPreventUnload = function (ev) {
        if (ev.target && ('' + ev.target.tagName).toLowerCase() === 'a') {
            var a = ev.target;
            if (a.href && a.getAttribute('href') !== '#' && !a.target) {
                if (this.state.dialogContainers.length > 0 || this.state.hasUnsavedData) {
                    if (!confirm(CONFIRM_NAVIGATE_MESSAGE)) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        return false;
                    }
                }
            }
        }
    };
    EditCourse.prototype.saveDialog = function () {
        if (this.state.dialogContainers.length > 0) {
            var dialog = this.dialogs[this.state.dialogContainers.length - 1]; // YES, should reference this.dialogs by length of dialogContainers. Strange yes, but leave it so!
            dialog && dialog.save();
        }
    };
    EditCourse.prototype.render = function () {
        var _this = this;
        var isAdmin = _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.roles.indexOf("ADMIN") >= 0;
        var course = this.state.course;
        return !this.state.course ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { outline: 0 } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_banner__WEBPACK_IMPORTED_MODULE_7__["CourseBanner"], { title: "", activePage: this.state.view, routes: { feedback: this.props.feedbackUrl } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_13__["Spinner"], null),
                "V.g. v\u00E4nta medan kursen laddas...")) :
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { outline: 0 } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_banner__WEBPACK_IMPORTED_MODULE_7__["CourseBanner"], { title: course.name + " - " + course.points + "p", activePage: this.state.view, routes: {
                        studentPage: Object(_access_control__WEBPACK_IMPORTED_MODULE_15__["preserveImpersonationQuery"])(this.props.viewCourseUrl, { courseId: this.props.id }),
                        feedback: this.props.feedbackUrl
                    }, host: this, course: course, origCourse: this.state.origCourse, backgroundImage: course.images.filter(function (img) { return img.id === course.imageId; }).map(function (img) { return img.url; })[0], isTemplate: course.isTemplate }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-12" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-spacer-20pxvt sv-vertical sv-layout sv-skip-spacer" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pagecontent sv-layout sv-spacer-20pxvt sv-skip-spacer", ref: function (div) { return _this.contentDiv = div; } },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_inner_edit_course__WEBPACK_IMPORTED_MODULE_8__["InnerEditCourse"], { course: this.state.course, origCourse: this.state.origCourse, host: this }),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                                this.state.dialogContainers.map(function (_a, i) {
                                    var Component = _a.Component, props = _a.props;
                                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: i },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "darken" }),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "modal-page-wrap" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "modal-page" },
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ ref: function (dialog) { return _this.refDialog(dialog, i); } }, props)),
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_10__["RemoveItem"], { onClick: function () { return _this.closeDialog(); } }))));
                                }))))));
    };
    return EditCourse;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;


/***/ }),

/***/ "./src/components/course-builder/courses/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/course-builder/courses/index.tsx ***!
  \*********************************************************/
/*! exports provided: EditCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-course */ "./src/components/course-builder/courses/edit-course.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditCourse", function() { return _edit_course__WEBPACK_IMPORTED_MODULE_0__["EditCourse"]; });




/***/ }),

/***/ "./src/components/course-builder/courses/inner-edit-course.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/course-builder/courses/inner-edit-course.tsx ***!
  \*********************************************************************/
/*! exports provided: InnerEditCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerEditCourse", function() { return InnerEditCourse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sub_components_editable_resource_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sub-components/editable-resource-list */ "./src/components/course-builder/sub-components/editable-resource-list.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _course_module_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-module-list */ "./src/components/course-builder/courses/course-module-list.tsx");
/* harmony import */ var _sub_components_school_courses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sub-components/school-courses */ "./src/components/course-builder/sub-components/school-courses.tsx");
/* harmony import */ var _business_logic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./business-logic */ "./src/components/course-builder/courses/business-logic.ts");
/* harmony import */ var _course_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _sub_components_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _sub_components_editable_teacher_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sub-components/editable-teacher-list */ "./src/components/course-builder/sub-components/editable-teacher-list.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _sub_components_weighted_items_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sub-components/weighted-items-table */ "./src/components/course-builder/sub-components/weighted-items-table.tsx");
/* harmony import */ var _utility_components_wysiwyg_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utility-components/wysiwyg/index */ "./src/components/utility-components/wysiwyg/index.tsx");
/* harmony import */ var _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utility-components/wysiwyg/actions-sv */ "./src/components/utility-components/wysiwyg/actions-sv.ts");
/* harmony import */ var _sub_components_editable_workflow_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../sub-components/editable-workflow-link */ "./src/components/course-builder/sub-components/editable-workflow-link.tsx");
/* harmony import */ var _globals_current_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../globals/current-user */ "./src/globals/current-user.ts");
/* harmony import */ var _sub_components_select_study_groups__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../sub-components/select-study-groups */ "./src/components/course-builder/sub-components/select-study-groups.tsx");
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../features */ "./src/features/index.ts");
/* harmony import */ var _utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utility-components/form-field-text-input */ "./src/components/utility-components/form-field-text-input.tsx");
/* harmony import */ var _utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utility-components/align-horizontal */ "./src/components/utility-components/align-horizontal.tsx");
/* harmony import */ var _utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../utility-components/horizontal-item */ "./src/components/utility-components/horizontal-item.tsx");























;
var InnerEditCourse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InnerEditCourse, _super);
    function InnerEditCourse(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            changeImageUrl: false
        };
        return _this;
    }
    InnerEditCourse.prototype.setImageUrl = function (imageUrl) {
        var course = this.props.course;
        if (!course.imageId) {
        }
    };
    InnerEditCourse.prototype.render = function () {
        var _a = this.props, course = _a.course, origCourse = _a.origCourse, host = _a.host;
        var uncoveredKnowledgeRequirements = Object(_business_logic__WEBPACK_IMPORTED_MODULE_6__["getUncoveredKnowledgeRequirements"])(course);
        var idsNotCoveredByAnyTask = Object(_business_logic__WEBPACK_IMPORTED_MODULE_6__["getIdsNotCoveredByTasks"])(course);
        var sanityCheckWarnings = Object(_business_logic__WEBPACK_IMPORTED_MODULE_6__["sanityCheck"])(course);
        var courseImage = course.images.find(function (img) { return img.id === course.imageId; });
        var courseImageIsDataUrl = courseImage && courseImage.url.startsWith('data:');
        var courseIsUploaded = courseImage && courseImage.url.indexOf('storage.googleapis.com') > 0;
        var softAccessList = Object(_business_logic__WEBPACK_IMPORTED_MODULE_6__["getSoftAccessList"])(course);
        var currentUser = Object(_globals_current_user__WEBPACK_IMPORTED_MODULE_15__["getCurrentUser"])();
        var canDelete = !_features__WEBPACK_IMPORTED_MODULE_18__["features"].teacherRights || softAccessList.some(function (user) { return user.email === currentUser.mail && user.access === 'full'; });
        var displayStudyGroups = _features__WEBPACK_IMPORTED_MODULE_18__["features"].studyGroups;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout sv-skip-spacer" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-7" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                    course.isTemplate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, "Kursmall"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Kurs\u00F6vergripande"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_17__["OpenCloseBox"], { title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Kurs\u00F6vergripande"), headerOpen: true, inactivated: !_features__WEBPACK_IMPORTED_MODULE_18__["features"].cbCollapseBoxes },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                course.subjectId === "custom" && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Kursens namn och po\u00E4ng"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_20__["AlignHorizontal"], null,
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_21__["HorizontalItem"], null,
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_19__["TextInput"], { id: "customCourseName", autoFocus: true, label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kursens namn"], ["Kursens namn"]))), value: course.name, onChange: function (value) { return host.update({ name: { $set: value } }); } })),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_21__["HorizontalItem"], null,
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_19__["TextInput"], { id: "customCourseCode", label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kurskod"], ["Kurskod"]))), size: 12, value: course.code || '', onChange: function (courseCode) { return host.update({ code: { $set: courseCode } }); } }))),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_19__["TextInput"], { id: "customCoursePoints", label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Po\u00E4ng"], ["Po\u00E4ng"]))), size: 3, value: '' + (course.points || ''), onChange: function (value) {
                                            var numPoints = value ? parseInt(value) : 0;
                                            if (!isNaN(numPoints) && numPoints < 1000) {
                                                host.update({ points: { $set: { numPoints: numPoints } } });
                                            }
                                        } }),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Kursens bild"),
                                courseImageIsDataUrl ?
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Kursens bild ligger i databasen. F\u00F6r att \u00E4ndra bild m\u00E5ste du dra och sl\u00E4ppa en ny bild ovanp\u00E5 den gamla h\u00F6gst upp p\u00E5 denna sida. Bilden kan antingen vara fr\u00E5n en annan webbsida. Lokala bildfiler g\u00E5r ocks\u00E5 bra att dra och sl\u00E4ppa.")
                                    : courseIsUploaded ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Kursens bild ligger i Kunskapsskolans Google moln. F\u00F6r att \u00E4ndra bild m\u00E5ste du dra och sl\u00E4ppa en ny bild ovanp\u00E5 den gamla h\u00F6gst upp p\u00E5 denna sida. Bilden kan antingen vara fr\u00E5n en annan webbsida. Lokala bildfiler g\u00E5r ocks\u00E5 bra att dra och sl\u00E4ppa.") : courseImage ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { value: courseImage.url, style: { width: '100%', height: '30px' }, onChange: function (ev) { return Object(_course_banner__WEBPACK_IMPORTED_MODULE_7__["setCourseImage"])(course, origCourse, host, ev.target.value); } }),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Bilden som visas h\u00F6gst upp h\u00E4mtas fr\u00E5n angiven URL. F\u00F6r att \u00E4ndra bild kan du redigera URL ovan. Ett annat s\u00E4tt att \u00E4ndra bild \u00E4r att dra och sl\u00E4ppa en ny bild \u00F6ver den gamla h\u00F6gst upp p\u00E5 sidan.")) :
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Kursen saknar egen bild. L\u00E4gg till en bild genom att dra och sl\u00E4ppa en bild p\u00E5 kurs-bannern h\u00F6gst upp p\u00E5 den h\u00E4r sidan."),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
                            !course.isTemplate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Beskrivning"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "subHeader" }, "(Beskrivning av kursen. F\u00F6r att skilja mellan olika varianter av samma gymnasiekurs)"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { className: "inputTextBox inputTextSmall", value: course.description, onChange: function (ev) { return host.update({ description: { $set: ev.target.value } }); } }),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Upptaktstext"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "subHeader" }, "(texten ska visas p\u00E5 kursens upptaktssektion)"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_wysiwyg_index__WEBPACK_IMPORTED_MODULE_12__["Wysiwyg"], { html: course.runUpText, defaultActions: _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_13__["default"], actions: [
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
                                        "image"
                                    ], onChange: function (newHtml) { return host.update({ runUpText: { $set: newHtml } }); } }),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Kursresurser"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "subHeader" }, "(Resurser f\u00F6r upptakt och kursen som helhet)"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_editable_resource_list__WEBPACK_IMPORTED_MODULE_2__["EditableResourceList"], { resources: course.resources, onUpdate: function (resourcesUpdates) { return host.update({ resources: resourcesUpdates }); }, host: host }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Arbetsg\u00E5ng"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "subHeader" }, "(Eventuell l\u00E4nk till arbetsg\u00E5ng f\u00F6r kursen)"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_editable_workflow_link__WEBPACK_IMPORTED_MODULE_14__["EditableWorkFlowLink"], { url: course.workFlowLink, onUpdate: function (updates) { return host.update({ workFlowLink: updates }); }, host: host }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                            !course.isTemplate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Google Classroom"),
                                displayStudyGroups ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "checkBox" + (course.googleCreateClassrooms ? " checked" : ""), onClick: function () { host.update({ googleCreateClassrooms: { $set: !course.googleCreateClassrooms } }); } })),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                        "Skapa klassrum f\u00F6r kursen ",
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("em", null, "(kursen m\u00E5ste sparas innan du kan synkronisera med Classroom)")))
                                    :
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal spaced" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { placeholder: "Google classroom URL", type: "text", size: 30, value: course.googleClassRoomURL, onChange: function (ev) { return host.update({ googleClassRoomURL: { $set: ev.target.value } }); } })),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { placeholder: "kod", type: "text", size: 8, value: course.googleClassRoomCode, onChange: function (ev) { return host.update({ googleClassRoomCode: { $set: ev.target.value } }); } })))),
                            course.isTemplate ? null : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_editable_teacher_list__WEBPACK_IMPORTED_MODULE_9__["EditableTeacherList"], { school: course.school, teachers: course.responsibleTeachers, onUpdate: function (teachersUpdate) {
                                        host.update({ responsibleTeachers: { $set: teachersUpdate } });
                                    } }),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                                displayStudyGroups && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "select-studygroups" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Undervisningsgrupper"], ["Undervisningsgrupper"])))),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_8__["TimeoutSpinner"], null) },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_select_study_groups__WEBPACK_IMPORTED_MODULE_16__["SelectStudyGroups"], { school: course.school, courseCode: course.code, selectedStudyGroups: course.studyGroups || [], onUpdate: function (studyGroups) { return host.update({ studyGroups: { $set: studyGroups } }); }, placeholder: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Koppla undervisningsgrupper till kursen..."], ["Koppla undervisningsgrupper till kursen..."]))) })))))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: "Kursensmoduler" }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Kursens moduler"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_module_list__WEBPACK_IMPORTED_MODULE_4__["CourseModuleList"], { host: host, course: course, idsNotCoveredByAnyTask: idsNotCoveredByAnyTask }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_weighted_items_table__WEBPACK_IMPORTED_MODULE_11__["WeightedItemsTable"], { course: course })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Kursens status"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                        course.createdBy && course.createdDate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                            "Kursen skapades ",
                            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["dtFormat"])(course.createdDate),
                            " av ",
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, course.createdBy.name),
                            "."),
                        course.modifiedBy && course.modifiedDate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                            "Kursen redigerades senast ",
                            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["dtFormat"])(course.modifiedDate),
                            " av ",
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, course.modifiedBy.name),
                            "."),
                        course.active ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                            "Kursen \u00E4r ",
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, "AKTIV"),
                            " sedan ",
                            Object(_utils__WEBPACK_IMPORTED_MODULE_3__["dtFormat"])(course.activatedDate),
                            " av ",
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, course.activatedBy.name),
                            ".") : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                            "Kursen \u00E4r ",
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, "INAKTIV"),
                            course.inactivatedBy ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                                "sedan ",
                                Object(_utils__WEBPACK_IMPORTED_MODULE_3__["dtFormat"])(course.inactivatedDate),
                                " av ",
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, course.inactivatedBy.name),
                                ".") : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, ".")),
                        (uncoveredKnowledgeRequirements.length === 0 ?
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "markedGreen" }, "Modulernas kunskapskrav t\u00E4cker skolverkets krav f\u00F6r denna kurs") :
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "markedRed warning-box" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "warningFlag" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-exclamation-triangle", "aria-hidden": "true" })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Modulernas kunskapskrav t\u00E4cker inte skolverkets krav f\u00F6r denna kurs."))),
                        sanityCheckWarnings.map(function (warning) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: warning, className: "markedRed warning-box" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "warningFlag" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-exclamation-triangle", "aria-hidden": "true" })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, warning)); }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-large", onClick: function () { return host.confirmSaveAndSync(); } }, "Spara"),
                        course.active ?
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-info btn-large", onClick: function () { return host.inactivateAndSave(); } }, "Inaktivera och spara") :
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-info btn-large", onClick: function () { return host.activateAndSave(); } }, "Aktivera och spara")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                        canDelete && !course.isTemplate && (origCourse ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-warning btn-large pull-right", onClick: function () {
                                if (confirm(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Bekr\u00E4fta borttagning av kursen \"", " - ", "\" f\u00F6r skolan ", "\n\nKursen kommar att raderas helt!\n\n\u00C4r du s\u00E4ker?"], ["Bekr\u00E4fta borttagning av kursen \"", " - ", "\" f\u00F6r skolan ", "\\n\\nKursen kommar att raderas helt!\\n\\n\u00C4r du s\u00E4ker?"])), course.name, course.description, course.school)))
                                    host.deleteCourse().catch(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["showError"]);
                            } }, "Ta bort kurs") : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-warning btn-large pull-right", onClick: function () { return history.go(-1); } }, "Avbryt")),
                        origCourse && course.googleCreateClassrooms && displayStudyGroups &&
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-primary btn-large pull-right", onClick: function () { return host.syncWithClassroomAndSave(); } },
                                host.syncInProgress() ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_8__["Spinner"], null) :
                                    (course.inSyncWithClassroom ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-check", "aria-hidden": "true" })) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-code-branch" }))),
                                "\u00A0Synk med Classroom")))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-column-5" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_school_courses__WEBPACK_IMPORTED_MODULE_5__["SchoolCourses"], null)));
    };
    return InnerEditCourse;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/components/course-builder/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/course-builder/index.tsx ***!
  \*************************************************/
/*! exports provided: CourseBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseBuilder", function() { return CourseBuilder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utils_error_success_feedback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/error-success-feedback */ "./src/utils/error-success-feedback.tsx");
/* harmony import */ var _schools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schools */ "./src/components/course-builder/schools/index.tsx");
/* harmony import */ var _schools_new_school__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schools/new-school */ "./src/components/course-builder/schools/new-school.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _subjects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subjects */ "./src/components/course-builder/subjects/index.tsx");
/* harmony import */ var _courses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./courses */ "./src/components/course-builder/courses/index.tsx");
/* harmony import */ var _schools_edit_school__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schools/edit-school */ "./src/components/course-builder/schools/edit-school.tsx");
/* harmony import */ var _courses_course_banner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./courses/course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _courses_create_new__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./courses/create-new */ "./src/components/course-builder/courses/create-new.tsx");
/* harmony import */ var _utils_keep_session_alive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/keep-session-alive */ "./src/utils/keep-session-alive.ts");








// Views





// Keep Session Alive

Object(_utils_keep_session_alive__WEBPACK_IMPORTED_MODULE_13__["keepSessionAlive"])();
var CourseBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CourseBuilder, _super);
    function CourseBuilder(props) {
        return _super.call(this, props) || this;
    }
    CourseBuilder.prototype.render = function () {
        var _this = this;
        var isAuthorized = _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["default"].currentUser.roles.some(function (role) { return role === "ADMIN" || role === "EMPLOYEE"; });
        var isAdmin = _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["default"].currentUser.roles.some(function (role) { return role === "ADMIN"; });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "course-builder" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["HashRouter"], null, isAuthorized ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { exact: true, path: "/", render: function (_a) {
                        var match = _a.match;
                        return isAdmin ?
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_schools__WEBPACK_IMPORTED_MODULE_5__["Schools"], { viewCourseUrl: _this.props.viewCourseUrl, feedbackUrl: _this.props.feedbackUrl }) :
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_create_new__WEBPACK_IMPORTED_MODULE_12__["CreateNewCourse"], { feedbackUrl: _this.props.feedbackUrl });
                    } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { exact: true, path: "/schools", render: function (_a) {
                        var match = _a.match;
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_schools__WEBPACK_IMPORTED_MODULE_5__["Schools"], { viewCourseUrl: _this.props.viewCourseUrl, feedbackUrl: _this.props.feedbackUrl });
                    } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { exact: true, path: "/schools/new/gymnasium", render: function () { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_schools_new_school__WEBPACK_IMPORTED_MODULE_6__["NewSchool"], { type: "gymnasium", feedbackUrl: _this.props.feedbackUrl }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { exact: true, path: "/schools/new/primary", render: function () { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_schools_new_school__WEBPACK_IMPORTED_MODULE_6__["NewSchool"], { type: "primary", feedbackUrl: _this.props.feedbackUrl }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { exact: true, path: "/schools/:id/edit", render: function (_a) {
                        var match = _a.match;
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_schools_edit_school__WEBPACK_IMPORTED_MODULE_10__["EditSchool"], { id: match.params.id, title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Editera skola"], ["Editera skola"]))), feedbackUrl: _this.props.feedbackUrl });
                    } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { exact: true, path: "/subjects", render: function () { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subjects__WEBPACK_IMPORTED_MODULE_8__["Subjects"], { feedbackUrl: _this.props.feedbackUrl }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { path: "/subjects/:id", render: function (_a) {
                        var match = _a.match;
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subjects__WEBPACK_IMPORTED_MODULE_8__["ShowSubject"], { id: match.params.id, feedbackUrl: _this.props.feedbackUrl });
                    } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { exact: true, path: "/courses/new", render: function () { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_create_new__WEBPACK_IMPORTED_MODULE_12__["CreateNewCourse"], { feedbackUrl: _this.props.feedbackUrl }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { path: "/courses/create-from-template/:templateId", render: function (_a) {
                        var match = _a.match;
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses__WEBPACK_IMPORTED_MODULE_9__["EditCourse"], { templateId: match.params.templateId, view: "courseBuilder", viewCourseUrl: _this.props.viewCourseUrl, feedbackUrl: _this.props.feedbackUrl });
                    } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { path: "/courses/create-custom/:customParams", render: function (_a) {
                        var match = _a.match;
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses__WEBPACK_IMPORTED_MODULE_9__["EditCourse"], { customParams: JSON.parse(decodeURIComponent(match.params.customParams)), view: "courseBuilder", viewCourseUrl: _this.props.viewCourseUrl, feedbackUrl: _this.props.feedbackUrl });
                    } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { path: "/courses/:id/edit", render: function (_a) {
                        var match = _a.match;
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses__WEBPACK_IMPORTED_MODULE_9__["EditCourse"], { id: match.params.id, view: "courseBuilder", viewCourseUrl: _this.props.viewCourseUrl, feedbackUrl: _this.props.feedbackUrl });
                    } })) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { path: "/", render: function () { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_course_banner__WEBPACK_IMPORTED_MODULE_11__["CourseBanner"], { title: "Kursbyggaren", activePage: "courseBuilder", routes: { feedback: _this.props.feedbackUrl } }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Beh\u00F6righet saknas"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Detta verktyg \u00E4r endast till f\u00F6r anst\u00E4llda p\u00E5 Kunskapsskolan."),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Anv\u00E4ndarattribut"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "ked_boxed", style: { border: "1px solid #eee" } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Attribut"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "V\u00E4rde"))),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, Object.keys(_globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["default"].currentUser).map(function (attr) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: attr },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, attr),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["default"].currentUser[attr])); })))); } }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_error_success_feedback__WEBPACK_IMPORTED_MODULE_4__["ErrorSuccessFeedback"], null));
    };
    return CourseBuilder;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/modal-pages/edit-task/basic-editable-task-fields.tsx":
/*!********************************************************************************************!*\
  !*** ./src/components/course-builder/modal-pages/edit-task/basic-editable-task-fields.tsx ***!
  \********************************************************************************************/
/*! exports provided: BasicEditableTaskFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicEditableTaskFields", function() { return BasicEditableTaskFields; });
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _task_migration_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-migration-box */ "./src/components/course-builder/modal-pages/edit-task/task-migration-box.tsx");
/* harmony import */ var _apis_google_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../apis/google-picker */ "./src/apis/google-picker.ts");
/* harmony import */ var _apis_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../apis/buttons */ "./src/apis/buttons.tsx");
/* harmony import */ var _task_content_fragment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-content-fragment */ "./src/components/course-builder/modal-pages/edit-task/task-content-fragment.tsx");
/* harmony import */ var _utility_components_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utility-components/checkbox */ "./src/components/utility-components/checkbox.tsx");
/* harmony import */ var _course_viewer_subcomponents_task_fileview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../course-viewer/subcomponents/task-fileview */ "./src/components/course-viewer/subcomponents/task-fileview.tsx");









function BasicEditableTaskFields(_a) {
    var task = _a.task, course = _a.course, writeAccess = _a.writeAccess, features = _a.features, editTask = _a.editTask, templates = _a.templates;
    var showGooglePicker = features.picker;
    if (task.contentType === undefined) {
        task.contentType = task.url != '' ? 'url' : 'desc';
    }
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("h2", null, "Uppgiftens namn och l\u00E4nk"),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "align-horizontal spaced" },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "horizontalItem top" },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("p", null, "Uppgiftens namn:")),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "horizontalItem top" },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("input", { autoFocus: true, type: "text", size: 35, value: task.name, disabled: !writeAccess, readOnly: !writeAccess, onChange: function (ev) {
                        editTask.updateTaskOrCustomization("name", { $set: ev.target.value });
                    } }))),
        task.migratedTexts && writeAccess && react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_task_migration_box__WEBPACK_IMPORTED_MODULE_3__["TaskMigrationBox"], { task: task, course: course, updateLink: function (id, linkOrUnlink) { return editTask.updateLink(id, linkOrUnlink); } }),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("h2", null, "Inneh\u00E5llstyp"),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "align-horizontal spaced" },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "horizontalItem top" },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("p", null, "V\u00E4lj:")),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "horizontalItem top" },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("select", { value: task.contentType, onChange: function (ev) {
                        editTask.updateTaskOrCustomization("contentType", { $set: ev.target.value });
                    } },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "url" }, "L\u00E4nk"),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "desc" }, "Beskrivning")))),
        task.contentType == 'url' ? react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "align-horizontal spaced" },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "horizontalItem top" },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("p", null, "URL:")),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "horizontalItem top align-horizontal" },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "horizontalItem top" },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("input", { className: "horizontalItem", type: "text", size: 35, value: task.url, disabled: !writeAccess, readOnly: !writeAccess, onChange: function (ev) {
                            editTask.updateTaskOrCustomization("url", { $set: ev.target.value });
                        } })),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "horizontalItem top" }, showGooglePicker && react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_apis_buttons__WEBPACK_IMPORTED_MODULE_5__["DriveButton"], { label: "", action: function () {
                        var picker = new _apis_google_picker__WEBPACK_IMPORTED_MODULE_4__["GooglePicker"]({ upload: true });
                        picker.show().then(function (files) {
                            var fileurl = files[0].url;
                            var viewurl = fileurl.substr(0, fileurl.lastIndexOf('/')) + "/view";
                            if (viewurl == task.url)
                                return;
                            editTask.updateTaskOrCustomization("url", { $set: viewurl });
                        });
                    } })))) : react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, (writeAccess || !!task.content) && react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_task_content_fragment__WEBPACK_IMPORTED_MODULE_6__["TaskContentFragment"], { writeAccess: writeAccess, task: task, editTask: editTask })),
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("h2", null, "Inl\u00E4mningsuppgift"),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_utility_components_checkbox__WEBPACK_IMPORTED_MODULE_7__["UICheckbox"], { state: (editTask.getTaskProp("assignment") ? "checked" : ""), onChange: function () {
                    editTask.updateTaskOrCustomization("assignment", { $set: !editTask.getTaskProp("assignment") });
                }, label: "Den h\u00E4r uppgiften \u00E4r en inl\u00E4mningsuppgift" }),
            task.assignment && features.picker && react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "align-horizontal spaced" },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("p", null, "V\u00E4lj mall:")),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("select", { value: task.templateFile ? task.templateFile.fileId : '-', onChange: function (ev) {
                                var newValue = ev.target.value;
                                if (newValue === '-') {
                                    // do not use template
                                    editTask.updateTemplateView(null);
                                }
                                else if (newValue.startsWith('t:')) {
                                    editTask.updateTemplateView({ fileId: newValue });
                                }
                                else {
                                    // Picked file
                                    var picker = new _apis_google_picker__WEBPACK_IMPORTED_MODULE_4__["GooglePicker"]({ limitType: 'google-apps' });
                                    picker.show().then(function (files) { return editTask.updateTemplateView(files[0]); });
                                }
                            } },
                            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "-" }, "Ingen mall"),
                            templates ? templates.map(function (template, idx) {
                                return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { key: idx, value: "t:" + template.fileId },
                                    template.grade ? template.grade + ": " : "",
                                    template.title);
                            }) : null,
                            task.templateFile && !task.templateFile.fileId.startsWith('t:') ?
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: task.templateFile.fileId },
                                    "Egen mall: ",
                                    task.templateFile.name) :
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "4" }, "Egen mall")))),
                task.templateFile && react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "spaced" },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_course_viewer_subcomponents_task_fileview__WEBPACK_IMPORTED_MODULE_8__["FileView"], { size: "large", thumbnail: task.templateFile.iconUrl, title: task.templateFile.name, url: task.templateFile.url }),
                    course.googleCreateClassrooms && react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("p", null,
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("em", null, "Obs! Uppgiften hamnar i kursens Classroom som en inl\u00E4mingsuppgift.")))),
            editTask.getTaskProp("assignment") && react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("p", null, "Inl\u00E4mningsdatum"),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"], { nextMonthButtonLabel: "", previousMonthButtonLabel: "", showWeekNumbers: true, selected: editTask.getTaskProp("deadline") && moment__WEBPACK_IMPORTED_MODULE_1___default()(editTask.getTaskProp("deadline")).toDate(), dateFormat: "yyyy-MM-dd", locale: "sv", popperPlacement: "bottom-start", onChange: function (value) {
                                editTask.updateTaskOrCustomization("deadline", { $set: moment__WEBPACK_IMPORTED_MODULE_1___default()(value).format("YYYY-MM-DD") });
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "horizontalItem top" }, editTask.getTaskProp("deadline") && react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("a", { className: "deleteDate", href: "#", title: "Ta bort inl\u00E4mningsdatum", onClick: function (ev) {
                            ev.preventDefault();
                            editTask.updateTaskOrCustomization("deadline", { $set: null });
                        } }))),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_utility_components_checkbox__WEBPACK_IMPORTED_MODULE_7__["UICheckbox"], { state: ((task.sendToUrkund == null ? true : task.sendToUrkund) ? "checked" : ""), onChange: function () {
                        return editTask.updateTaskOrCustomization("sendToUrkund", { $set: task.sendToUrkund == null ? false : !task.sendToUrkund });
                    }, label: "Skicka inl\u00E4mningar till Urkund" }),
                task.templateFile && react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_utility_components_checkbox__WEBPACK_IMPORTED_MODULE_7__["UICheckbox"], { state: (task.additionalUploads ? "checked" : ""), label: "Till\u00E5t inl\u00E4mning av andra/ytterligare filer", onChange: function () {
                        return editTask.updateTaskOrCustomization("additionalUploads", { $set: task.additionalUploads == null ? true : !task.additionalUploads });
                    } }))));
}


/***/ }),

/***/ "./src/components/course-builder/modal-pages/edit-task/edit-task.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/course-builder/modal-pages/edit-task/edit-task.tsx ***!
  \***************************************************************************/
/*! exports provided: EditTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTask", function() { return EditTask; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _sub_components_knowledge_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sub-components/knowledge-matrix */ "./src/components/course-builder/sub-components/knowledge-matrix.tsx");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-addons-update */ "./node_modules/react-addons-update/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _sub_components_select_related_docs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sub-components/select-related-docs */ "./src/components/course-builder/sub-components/select-related-docs.tsx");
/* harmony import */ var valid_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! valid-url */ "./node_modules/valid-url/index.js");
/* harmony import */ var valid_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(valid_url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils_cached_response__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utils/cached-response */ "./src/utils/cached-response.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _sub_components_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../features */ "./src/features/index.ts");
/* harmony import */ var _search_results__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search-results */ "./src/components/course-builder/modal-pages/edit-task/search-results.tsx");
/* harmony import */ var _basic_editable_task_fields__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./basic-editable-task-fields */ "./src/components/course-builder/modal-pages/edit-task/basic-editable-task-fields.tsx");
/* harmony import */ var _task_status_fragment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./task-status-fragment */ "./src/components/course-builder/modal-pages/edit-task/task-status-fragment.tsx");
/* harmony import */ var _save_or_cancel_buttons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./save-or-cancel-buttons */ "./src/components/course-builder/modal-pages/edit-task/save-or-cancel-buttons.tsx");
/* harmony import */ var _previewable_task_fields__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./previewable-task-fields */ "./src/components/course-builder/modal-pages/edit-task/previewable-task-fields.tsx");
/* harmony import */ var _apis_google_drive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../apis/google-drive */ "./src/apis/google-drive.ts");
/* harmony import */ var _apis_configs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../apis/configs */ "./src/apis/configs.ts");
/* harmony import */ var _utility_components_wysiwyg_wash_html__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../utility-components/wysiwyg/wash-html */ "./src/components/utility-components/wysiwyg/wash-html.ts");





















var EditTask = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditTask, _super);
    function EditTask(props) {
        var _this = _super.call(this, props) || this;
        _this.features = new _features__WEBPACK_IMPORTED_MODULE_12__["Features"]();
        var writeAccess = !props.task || Object(_access_control__WEBPACK_IMPORTED_MODULE_5__["hasWriteAccess"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_10__["default"].currentUser, props.task);
        _this.state = {
            title: props.task ?
                writeAccess ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Redigera uppgift till \"", "\""], ["Redigera uppgift till \"", "\""])), props.module.name) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Visa uppgift till \"", "\""], ["Visa uppgift till \"", "\""])), props.module.name) :
                props.searchMode ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["S\u00F6k ny uppgift till \"", "\""], ["S\u00F6k ny uppgift till \"", "\""])), props.module.name) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till egen uppgift till \"", "\""], ["L\u00E4gg till egen uppgift till \"", "\""])), props.module.name),
            futureAbilitiesOpen: false,
            taskCustomization: props.taskCustomization || {},
            task: props.task ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ $meta: props.task.$meta || 'update' }, props.task) : props.searchMode ? null :
                // No task was given. Set $meta = 'add' to inform EditCourse.save()
                // to add the task to the tasks table.
                {
                    id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["createUUID"])(),
                    $meta: 'add',
                    tags: [
                        "sub:" + props.course.subjectCode,
                        "course:" + props.course.code
                    ],
                    school: !props.course.isTemplate && _globals_KED_env__WEBPACK_IMPORTED_MODULE_10__["default"].currentUser.school,
                    resources: [],
                    abilities: [],
                    centralContent: [],
                    futureAbilities: [],
                    knowledgeRequirements: [],
                    name: "",
                    url: "",
                    acl: props.course.isTemplate ? [
                        "role:USER:R" // (OK to keep after kursbygg-changes). Templates (which will be empty!) will not have tasks. If they had, might not tasks should not be possible to modify. (An ADMIN could belong to a school! Other non-admins at that school should not be able to edit it)
                    ] : [
                        "role:USER:R",
                        "schoolRole:" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_10__["default"].currentUser.school + "/EMPLOYEE:S"
                    ]
                },
            searchMarkedIds: props.searchMode && [],
            searchResult: props.searchMode && [],
            isSearching: props.searchMode
        };
        if (props.searchMode) {
            _this.searchResponse = new _utils_cached_response__WEBPACK_IMPORTED_MODULE_9__["CachedResponse"](function () {
                return _globals_KED_env__WEBPACK_IMPORTED_MODULE_10__["default"].kedBackendClient.list("tasks", {
                    tags: "course:" + props.course.code,
                    include: ['knowledgeRequirements', 'abilities', 'centralContent'],
                    flags: ['includeIdsOnly']
                });
            });
        }
        return _this;
    }
    EditTask.prototype.setStatePromised = function (state) {
        var _this = this;
        return new Promise(function (resolve) { return _super.prototype.setState.call(_this, function () { return state; }, resolve); });
    };
    EditTask.prototype.componentDidMount = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var err_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.props.searchMode) return [3 /*break*/, 8];
                        this.setStatePromised({ isSearching: true });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, 6, 8]);
                        return [4 /*yield*/, this.searchResponse.query()];
                    case 2:
                        _a.sent();
                        if (!(this.state.searchMarkedIds && this.state.searchMarkedIds.length === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.updateSearchResult(this.state.searchMarkedIds)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 8];
                    case 5:
                        err_1 = _a.sent();
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["showError"])(err_1);
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.setStatePromised({ isSearching: false })];
                    case 7:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 8:
                        if (!_features__WEBPACK_IMPORTED_MODULE_12__["features"].picker) return [3 /*break*/, 10];
                        return [4 /*yield*/, fetch(_apis_configs__WEBPACK_IMPORTED_MODULE_19__["TemplatesFileId"]).then(function (resp) { return resp.json(); }).then(function (data) {
                                _this.setStatePromised({ templates: data });
                                if (_this.state.task && _this.state.task.templateFile) {
                                    var templateFile = _this.state.task.templateFile;
                                    if (templateFile.fileId) {
                                        _this.updateTemplateView(templateFile);
                                    }
                                }
                            })];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    EditTask.prototype.updateSearchMarkedIds = function (searchMarkedIds) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var setStatePromise;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setStatePromise = this.setStatePromised({ task: null, searchMarkedIds: searchMarkedIds, previewTaskContent: null });
                        if (!!this.searchResponse.result) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.searchResponse.promise];
                    case 1:
                        _a.sent();
                        // Refresh searchMarkedIds now as user might have clicked around while waiting for
                        // tasks to load...
                        return [4 /*yield*/, setStatePromise];
                    case 2:
                        // Refresh searchMarkedIds now as user might have clicked around while waiting for
                        // tasks to load...
                        _a.sent(); // So we know state has been reflected...
                        searchMarkedIds = this.state.searchMarkedIds;
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.updateSearchResult(searchMarkedIds)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditTask.prototype.updateSearchResult = function (searchMarkedIds) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var allTasksForSubject, searchResult;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.searchResponse.query()];
                    case 1:
                        allTasksForSubject = _a.sent();
                        searchResult = allTasksForSubject.filter(function (t) {
                            return searchMarkedIds.every(function (id) {
                                return t.knowledgeRequirements.some(function (kr) { return kr.id === id; }) ||
                                    t.abilities.some(function (a) { return a.id === id; }) ||
                                    t.centralContent.some(function (c) { return c.id === id; });
                            });
                        });
                        this.setStatePromised({
                            searchResult: searchResult
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditTask.prototype.onMarkChanged = function (id, isMarked) {
        var searchMode = this.props.searchMode;
        if (searchMode) {
            var searchMarkedIds = this.state.searchMarkedIds;
            this.updateSearchMarkedIds(isMarked ?
                searchMarkedIds.concat(id) :
                searchMarkedIds.filter(function (x) { return x !== id; })).catch(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["showError"]);
            return;
        }
        this.updateLink(id, isMarked);
    };
    EditTask.prototype.updateLink = function (id, linkOrUnlink) {
        var course = this.props.course;
        var task = this.state.task;
        // One of the following three will be found:
        var ability = course.abilities.find(function (a) { return a.id === id; });
        var knowledgeRequirement = course.knowledgeRequirements.find(function (r) { return r.id === id; });
        var centralContent = course.centralContent.find(function (cc) { return cc.id === id; });
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(ability ?
            ["abilities", ability] :
            knowledgeRequirement ?
                ["knowledgeRequirements", knowledgeRequirement] :
                centralContent ?
                    ["centralContent", centralContent] :
                    [null, null], 2), collectionProp = _a[0], item = _a[1];
        if (!collectionProp) {
            console.error("Could not find marked id " + id);
            return;
        }
        var updatedCollection = task[collectionProp].slice();
        var currentPos = updatedCollection.findIndex(function (doc) { return doc.id === id; });
        if (linkOrUnlink) {
            if (currentPos < 0) {
                updatedCollection.push(item);
            }
        }
        else {
            if (currentPos >= 0) {
                updatedCollection.splice(currentPos, 1);
            }
        }
        var updatedTask = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, task);
        updatedTask[collectionProp] = updatedCollection;
        // Clear migratedTexts from task.
        // First deep clone:
        if (task && task.migratedTexts) {
            updatedTask.migratedTexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, task.migratedTexts);
            if (task.migratedTexts[collectionProp]) {
                updatedTask.migratedTexts[collectionProp] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, task.migratedTexts[collectionProp]);
                // Delete the id within the deep clone:
                delete updatedTask.migratedTexts[collectionProp][id];
            }
        }
        this.setStatePromised({
            task: updatedTask
        });
    };
    EditTask.prototype.updateTemplateView = function (templateFile) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var drive, tFileId_1, file, tFile;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        drive = new _apis_google_drive__WEBPACK_IMPORTED_MODULE_18__["GoogleDrive"]();
                        if (!(templateFile && templateFile.fileId.startsWith('t:'))) return [3 /*break*/, 2];
                        tFileId_1 = templateFile.fileId.replace('t:', '');
                        return [4 /*yield*/, drive.getFile(tFileId_1)];
                    case 1:
                        file = _a.sent();
                        if (file) {
                            file.fileId = 't:' + file.fileId;
                            tFile = this.state.templates.filter(function (tpl) { return tpl.fileId == tFileId_1; })[0];
                            file.name = tFile ? tFile.title : file.name;
                            templateFile = { fileId: file.fileId, name: file.name, mimeType: file.mimeType, modifiedTime: Number(file.modiifiedTime), url: file.url, iconUrl: file.thumbnailUrl };
                        }
                        else {
                            templateFile = null;
                        }
                        _a.label = 2;
                    case 2:
                        this.updateTaskOrCustomization("templateFile", { $set: templateFile });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditTask.prototype.save = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, task, taskCustomization, writeAccess;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, task = _a.task, taskCustomization = _a.taskCustomization;
                        writeAccess = Object(_access_control__WEBPACK_IMPORTED_MODULE_5__["hasWriteAccess"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_10__["default"].currentUser, task);
                        if (!writeAccess) return [3 /*break*/, 5];
                        if (task.sendToUrkund == undefined)
                            task.sendToUrkund = true; // sendToUrkund is default so setting this here, perhaps there is a better place for this!
                        if (!task.url && !task.content)
                            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Uppgiften m\u00E5ste antingen ha en URL eller ett inneh\u00E5ll"], ["Uppgiften m\u00E5ste antingen ha en URL eller ett inneh\u00E5ll"]))));
                        if (task.url && !valid_url__WEBPACK_IMPORTED_MODULE_7___default.a.isUri(task.url))
                            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Angiven URL '", "' \u00E4r ogiltig. Den ska b\u00F6rja med http: eller https:"], ["Angiven URL '", "' \u00E4r ogiltig. Den ska b\u00F6rja med http: eller https:"])), task.url));
                        if (!(this.props.task && this.props.task.id !== task.id)) return [3 /*break*/, 2];
                        // Replace existing task with copy
                        return [4 /*yield*/, this.props.onReplace(this.props.task.id, task)];
                    case 1:
                        // Replace existing task with copy
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 2: 
                    // Update existing task
                    return [4 /*yield*/, this.props.onSave(task, null)];
                    case 3:
                        // Update existing task
                        _b.sent();
                        _b.label = 4;
                    case 4: return [3 /*break*/, 9];
                    case 5:
                        if (!this.props.searchMode) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.props.onSave(task, taskCustomization)];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        if (this.props.course.isTemplate && task.$meta === 'add')
                            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Du saknar beh\u00F6righet f\u00F6r att spara nya versioner av uppgifter i kursmallen"], ["Du saknar beh\u00F6righet f\u00F6r att spara nya versioner av uppgifter i kursmallen"]))));
                        return [4 /*yield*/, this.props.onSaveCustomization(taskCustomization)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    EditTask.prototype.copyTask = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var taskCopy;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskCopy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state.task), (this.state.taskCustomization || {})), { id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["createUUID"])(), acl: this.props.course.isTemplate ? [
                                "role:USER:R" // (OK to keep but this check might become unnescesary if we totally remove the possibility to edit templates) Template tasks should not be possible to modify. (An ADMIN could belong to a school! Other non-admins at that school should not be able to edit it)
                            ] : [
                                "role:USER:R",
                                "schoolRole:" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_10__["default"].currentUser.school + "/EMPLOYEE:S"
                            ], school: this.props.course.school });
                        taskCopy.$meta = 'add';
                        return [4 /*yield*/, this.setStatePromised({
                                task: taskCopy,
                                title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Redigera kopierad uppgift till \"", "\""], ["Redigera kopierad uppgift till \"", "\""])), this.props.module.name),
                                taskCustomization: undefined
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditTask.prototype.getTaskProp = function (taskProp) {
        var _a = this.state, task = _a.task, taskCustomization = _a.taskCustomization;
        var customization = taskCustomization && taskCustomization[taskProp];
        return customization !== undefined ?
            customization :
            task[taskProp];
    };
    EditTask.prototype.updateTaskOrCustomization = function (taskProp, updates) {
        var _a = this.state, task = _a.task, taskCustomization = _a.taskCustomization;
        var writeAccess = task && Object(_access_control__WEBPACK_IMPORTED_MODULE_5__["hasWriteAccess"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_10__["default"].currentUser, task);
        if (writeAccess && (!taskCustomization || taskCustomization[taskProp] === undefined)) {
            var newTask = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, task);
            newTask[taskProp] = react_addons_update__WEBPACK_IMPORTED_MODULE_4___default()(task[taskProp], updates);
            this.setStatePromised({ task: newTask });
        }
        else {
            var newCustomization = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, taskCustomization);
            newCustomization[taskProp] = react_addons_update__WEBPACK_IMPORTED_MODULE_4___default()(newCustomization[taskProp] || task[taskProp], updates);
            this.setStatePromised({ taskCustomization: newCustomization });
        }
    };
    EditTask.prototype.render = function () {
        var _a = this.props, course = _a.course, module = _a.module, onCancel = _a.onCancel, onDelete = _a.onDelete, idsNotCoveredByAnyTask = _a.idsNotCoveredByAnyTask, searchMode = _a.searchMode;
        var _b = this.state, task = _b.task, taskCustomization = _b.taskCustomization, title = _b.title, searchResult = _b.searchResult, searchMarkedIds = _b.searchMarkedIds, isSearching = _b.isSearching, templates = _b.templates;
        var markedIds = searchMode ?
            searchMarkedIds :
            task.centralContent.map(function (x) { return x.id; })
                .concat(task.abilities.map(function (x) { return x.id; }))
                .concat(task.knowledgeRequirements.map(function (x) { return x.id; }));
        var writeAccess = task && Object(_access_control__WEBPACK_IMPORTED_MODULE_5__["hasWriteAccess"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_10__["default"].currentUser, task);
        var taskUrlValid = task && valid_url__WEBPACK_IMPORTED_MODULE_7___default.a.isUri(task.url);
        var features = this.features;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, title),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-6" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, searchMode ?
                            "Filtrera på kunskapskrav" : writeAccess ?
                            "Välj kunskapskrav" :
                            "Kunskapskrav"),
                        searchMode ?
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Markera de kunskapskrav som uppgiften m\u00E5ste t\u00E4cka.") : writeAccess &&
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Markera de kunskapskrav som din uppgift t\u00E4cker."),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_knowledge_matrix__WEBPACK_IMPORTED_MODULE_3__["KnowledgeMatrix"], { knowledgeRequirements: course.knowledgeRequirements, markedIds: markedIds, idsToMarkNotOk: idsNotCoveredByAnyTask, markMode: searchMode || writeAccess, migratedIds: task && task.migratedTexts && task.migratedTexts.knowledgeRequirements, onMarkChanged: this.onMarkChanged.bind(this) }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_select_related_docs__WEBPACK_IMPORTED_MODULE_6__["SelectRelatedDocs"], { options: course.abilities, title: writeAccess || searchMode ? "Välj förmågor" : "Förmågor", markedIds: markedIds, markMode: writeAccess || searchMode, migratedIds: task && task.migratedTexts && task.migratedTexts.abilities, onMarkChanged: this.onMarkChanged.bind(this) })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_select_related_docs__WEBPACK_IMPORTED_MODULE_6__["SelectRelatedDocs"], { options: course.centralContent, title: writeAccess || searchMode ? "Välj centralt innehåll" : "Centralt innehåll", markedIds: markedIds, markMode: writeAccess || searchMode, migratedIds: task && task.migratedTexts && task.migratedTexts.centralContent, onMarkChanged: this.onMarkChanged.bind(this) }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-column-6" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                    isSearching && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_11__["Spinner"], null),
                        " Laddar uppgifter..."),
                    searchResult ?
                        /*
                        *
                        * Search Results Fragent
                        *
                        *
                        */
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_search_results__WEBPACK_IMPORTED_MODULE_13__["SearchResults"], { searchMarkedIds: searchMarkedIds, searchResult: searchResult, task: task, writeAccess: writeAccess, taskCustomization: taskCustomization, editTask: this }),
                            this.state.previewTaskContent ?
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { dangerouslySetInnerHTML: { __html: Object(_utility_components_wysiwyg_wash_html__WEBPACK_IMPORTED_MODULE_20__["washHtml"])(this.state.previewTaskContent) } })
                                : task && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_previewable_task_fields__WEBPACK_IMPORTED_MODULE_17__["PreviewableTaskFields"], { writeAccess: writeAccess, task: task, taskCustomization: taskCustomization, editTask: this }),
                            task && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_status_fragment__WEBPACK_IMPORTED_MODULE_15__["TaskStatusFragment"], { task: task })) :
                        /*
                        *
                        * Edit Tasks Fragment
                        *
                        *
                        */
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            task && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_basic_editable_task_fields__WEBPACK_IMPORTED_MODULE_14__["BasicEditableTaskFields"], { task: task, course: course, writeAccess: writeAccess, features: features, editTask: this, templates: templates }),
                            task && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_previewable_task_fields__WEBPACK_IMPORTED_MODULE_17__["PreviewableTaskFields"], { writeAccess: writeAccess, task: task, taskCustomization: taskCustomization, editTask: this }),
                            task && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_status_fragment__WEBPACK_IMPORTED_MODULE_15__["TaskStatusFragment"], { task: task }))),
                task && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_save_or_cancel_buttons__WEBPACK_IMPORTED_MODULE_16__["SaveOrCancelButtons"], { writeAccess: writeAccess, editTask: this }))));
    };
    return EditTask;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ }),

/***/ "./src/components/course-builder/modal-pages/edit-task/index.ts":
/*!**********************************************************************!*\
  !*** ./src/components/course-builder/modal-pages/edit-task/index.ts ***!
  \**********************************************************************/
/*! exports provided: EditTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-task */ "./src/components/course-builder/modal-pages/edit-task/edit-task.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditTask", function() { return _edit_task__WEBPACK_IMPORTED_MODULE_0__["EditTask"]; });




/***/ }),

/***/ "./src/components/course-builder/modal-pages/edit-task/previewable-task-fields.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/components/course-builder/modal-pages/edit-task/previewable-task-fields.tsx ***!
  \*****************************************************************************************/
/*! exports provided: PreviewableTaskFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewableTaskFields", function() { return PreviewableTaskFields; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sub_components_editable_resource_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sub-components/editable-resource-list */ "./src/components/course-builder/sub-components/editable-resource-list.tsx");



function PreviewableTaskFields(_a) {
    var writeAccess = _a.writeAccess, task = _a.task, taskCustomization = _a.taskCustomization, editTask = _a.editTask;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Uppgiftens l\u00E4randem\u00E5l"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { className: "inputTextBox learning-goal-box", disabled: !writeAccess, value: task.learningGoal, onChange: function (ev) {
                        var newTask = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, task);
                        newTask.learningGoal = ev.target.value;
                        editTask.setStatePromised({ task: newTask });
                    } }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            taskCustomization && taskCustomization.resources ?
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Resurser f\u00F6r uppgiften (modifierad f\u00F6r denna kursinstans)") :
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Resurser kopplade till uppgiften"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_editable_resource_list__WEBPACK_IMPORTED_MODULE_2__["EditableResourceList"], { resources: (taskCustomization && taskCustomization.resources) || task.resources, host: editTask.props.host, onUpdate: function (resourceUpdates) {
                    editTask.updateTaskOrCustomization("resources", resourceUpdates);
                } })));
}


/***/ }),

/***/ "./src/components/course-builder/modal-pages/edit-task/save-or-cancel-buttons.tsx":
/*!****************************************************************************************!*\
  !*** ./src/components/course-builder/modal-pages/edit-task/save-or-cancel-buttons.tsx ***!
  \****************************************************************************************/
/*! exports provided: SaveOrCancelButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveOrCancelButtons", function() { return SaveOrCancelButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");


function SaveOrCancelButtons(_a) {
    var writeAccess = _a.writeAccess, editTask = _a.editTask;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        !!editTask.props.onDelete && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "btn btn-warning btn-large pull-right", onClick: function () { return editTask.props.onDelete(); } }, "Ta bort fr\u00E5n kursmodul"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pull-right" }, "\u00A0"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "btn btn-warning btn-large pull-right", onClick: function () { return editTask.props.onCancel(); } }, "Avbryt"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "btn btn-large", onClick: function () { return editTask.save().catch(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["showError"]); } }, "Spara"),
        !writeAccess && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "btn btn-large", onClick: function () { return editTask.copyTask().catch(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["showError"]); } }, "Skapa kopia av den h\u00E4r uppgiften"));
}


/***/ }),

/***/ "./src/components/course-builder/modal-pages/edit-task/search-results.tsx":
/*!********************************************************************************!*\
  !*** ./src/components/course-builder/modal-pages/edit-task/search-results.tsx ***!
  \********************************************************************************/
/*! exports provided: SearchResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResults", function() { return SearchResults; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/components/course-builder/utils.ts");



function SearchResults(_a) {
    var searchMarkedIds = _a.searchMarkedIds, searchResult = _a.searchResult, task = _a.task, editTask = _a.editTask, writeAccess = _a.writeAccess, taskCustomization = _a.taskCustomization;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "task-search-result" + (!editTask.state.task && !editTask.state.previewTaskContent ? " fixed" : "") },
        searchMarkedIds.length === 0 ?
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Samtliga uppgifter f\u00F6r kursen") :
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Uppgifter som t\u00E4cker valda filter"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, searchResult
                .filter(task ?
                function (foundTask) { return foundTask.id === task.id; } :
                function () { return true; })
                .map(function (foundTask) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: foundTask.id },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { tabIndex: 1, className: "checkBox" + (task && task.id === foundTask.id ? " checked" : ""), onClick: function () { return toggleChooseTask(foundTask); } })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, foundTask.content ?
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#", onClick: function (ev) {
                                toggleChooseTask(foundTask);
                                ev.preventDefault();
                                ev.stopPropagation();
                            } }, foundTask.name) :
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: foundTask.url, target: "_blank" }, foundTask.name)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["shortPersonNameFormat"])(foundTask.modifiedBy.name)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, foundTask.school || "Standard"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["shortDateFormat"])(foundTask.modifiedDate)))); }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null));
    function toggleChooseTask(foundTask) {
        if (task && task.id === foundTask.id) {
            editTask.updateSearchMarkedIds(searchMarkedIds);
        }
        else {
            Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(editTask).parentElement.scrollTop = 0;
            editTask.setStatePromised({ task: foundTask, previewTaskContent: null });
        }
    }
}


/***/ }),

/***/ "./src/components/course-builder/modal-pages/edit-task/task-content-fragment.tsx":
/*!***************************************************************************************!*\
  !*** ./src/components/course-builder/modal-pages/edit-task/task-content-fragment.tsx ***!
  \***************************************************************************************/
/*! exports provided: TaskContentFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskContentFragment", function() { return TaskContentFragment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility-components/wysiwyg */ "./src/components/utility-components/wysiwyg/index.tsx");
/* harmony import */ var _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utility-components/wysiwyg/actions-sv */ "./src/components/utility-components/wysiwyg/actions-sv.ts");




function TaskContentFragment(_a) {
    var writeAccess = _a.writeAccess, task = _a.task, editTask = _a.editTask;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_2__["Wysiwyg"], { actions: [
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
            "image"
        ], defaultActions: _utility_components_wysiwyg_actions_sv__WEBPACK_IMPORTED_MODULE_3__["default"], readOnly: !writeAccess, html: task.content, onChange: function (html) {
            var newTask = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, task);
            newTask.content = html;
            editTask.setState({ task: newTask });
        } });
}


/***/ }),

/***/ "./src/components/course-builder/modal-pages/edit-task/task-status-fragment.tsx":
/*!**************************************************************************************!*\
  !*** ./src/components/course-builder/modal-pages/edit-task/task-status-fragment.tsx ***!
  \**************************************************************************************/
/*! exports provided: TaskStatusFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatusFragment", function() { return TaskStatusFragment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/components/course-builder/utils.ts");


function TaskStatusFragment(_a) {
    var task = _a.task;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "Uppgiftens status"),
        task.createdBy && task.createdDate && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
            "Uppgiften skapades ",
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dtFormat"])(task.createdDate),
            " av ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, task.createdBy.name),
            "."),
        task.modifiedBy && task.modifiedDate && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null,
            "Uppgiften redigerades senast ",
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dtFormat"])(task.modifiedDate),
            " av ",
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, task.modifiedBy.name),
            "."));
}


/***/ }),

/***/ "./src/components/course-builder/modal-pages/edit-workflow-link.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/course-builder/modal-pages/edit-workflow-link.tsx ***!
  \**************************************************************************/
/*! exports provided: EditWorkflowLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWorkflowLink", function() { return EditWorkflowLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var valid_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! valid-url */ "./node_modules/valid-url/index.js");
/* harmony import */ var valid_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(valid_url__WEBPACK_IMPORTED_MODULE_3__);




var EditWorkflowLink = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditWorkflowLink, _super);
    function EditWorkflowLink(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { url: _this.props.url || '' };
        return _this;
    }
    EditWorkflowLink.prototype.save = function () {
        var url = this.state.url;
        if (!valid_url__WEBPACK_IMPORTED_MODULE_3___default.a.isUri(url))
            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Angiven URL '", "' \u00E4r ogiltig. Ska b\u00F6rja med http: eller https:"], ["Angiven URL '", "' \u00E4r ogiltig. Ska b\u00F6rja med http: eller https:"])), url));
        this.props.onSave(url);
    };
    EditWorkflowLink.prototype.render = function () {
        var _this = this;
        var _a = this.props, onSave = _a.onSave, onDelete = _a.onDelete;
        var state = this.state;
        var isValidUrl = valid_url__WEBPACK_IMPORTED_MODULE_3___default.a.isUri(this.state.url);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Koppla en arbetsg\u00E5ng till kursen"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Det g\u00E5r bara att l\u00E4gga in en arbetsg\u00E5ng per kurs."),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, "L\u00E4nk:"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top " },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", tabIndex: 1, size: 50, value: state.url, onChange: function (ev) { return _this.setState({ url: ev.target.value }); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet", id: "svid12_492422d515badf36646e4ff1" },
                onDelete && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { tabIndex: 2, className: "btn btn-warning btn-large pull-right", onClick: function () { return onDelete(); } }, "Ta bort arbetsg\u00E5ng"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { tabIndex: 1, className: "btn btn-large" + (isValidUrl ? "" : " btn-inactive"), onClick: isValidUrl && (function () { return onSave(state.url); }) }, "Spara")));
    };
    return EditWorkflowLink;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/schools/new-school.tsx":
/*!**************************************************************!*\
  !*** ./src/components/course-builder/schools/new-school.tsx ***!
  \**************************************************************/
/*! exports provided: NewSchool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSchool", function() { return NewSchool; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit_school__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-school */ "./src/components/course-builder/schools/edit-school.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");




var NewSchool = function (props) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_edit_school__WEBPACK_IMPORTED_MODULE_2__["EditSchool"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till skola"], ["L\u00E4gg till skola"]))), type: props.type, feedbackUrl: props.feedbackUrl }); };
var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/sub-components/editable-resource-list.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/editable-resource-list.tsx ***!
  \*********************************************************************************/
/*! exports provided: EditableResourceList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableResourceList", function() { return EditableResourceList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal_pages_edit_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-pages/edit-resource */ "./src/components/course-builder/modal-pages/edit-resource.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _apis_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../apis/buttons */ "./src/apis/buttons.tsx");
/* harmony import */ var _apis_google_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../apis/google-picker */ "./src/apis/google-picker.ts");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../features */ "./src/features/index.ts");
/* harmony import */ var _utility_components_draggable_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utility-components/draggable-list */ "./src/components/utility-components/draggable-list.tsx");
/* harmony import */ var _course_builder_ks_logic_change_sort_order__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../course-builder-ks/logic/change-sort-order */ "./src/components/course-builder-ks/logic/change-sort-order.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");










var EditableResourceList = function (_a) {
    var resources = _a.resources, onUpdate = _a.onUpdate, host = _a.host;
    var sortedDatasource = resources.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["compareProps"])("order"));
    function getEditLink(resource) {
        var idx = sortedDatasource.indexOf(resource);
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "editItem", onClick: function () { return host.openDialog({
                Component: _modal_pages_edit_resource__WEBPACK_IMPORTED_MODULE_1__["EditResource"],
                props: {
                    title: "Redigera resurs",
                    resource: resource,
                    onSave: function (editedResource) {
                        var updatedResource = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["updateModificationAndCreationStamps"])(editedResource, _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].currentUser);
                        onUpdate({ $splice: [[idx, 1, updatedResource]] });
                        host.closeDialog();
                    },
                    onDelete: function () {
                        onUpdate({ $splice: [[idx, 1]] });
                        host.closeDialog();
                    }
                }
            }); } });
    }
    function onResourceSort(source, target, placement) {
        var orderedDocuments = sortedDatasource.map(function (resource, index) { return { id: index.toString(), order: resource.order || Date.now() }; });
        var sourceIndex = sortedDatasource.indexOf(source).toString();
        var newOrder = Object(_course_builder_ks_logic_change_sort_order__WEBPACK_IMPORTED_MODULE_8__["reorder"])(orderedDocuments, sourceIndex, sortedDatasource.indexOf(target).toString(), placement);
        source.order = newOrder;
        var updatedResource = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["updateModificationAndCreationStamps"])(source, _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].currentUser);
        onUpdate({ $splice: [[sourceIndex, 1, updatedResource]] });
    }
    var showGooglePicker = _features__WEBPACK_IMPORTED_MODULE_6__["features"].picker;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        Object(_utility_components_draggable_list__WEBPACK_IMPORTED_MODULE_7__["DraggableList"])({
            objectList: sortedDatasource,
            renderEditLink: getEditLink,
            renderLink: (function (resource) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: resource.url, target: "_blank" }, resource.name); }),
            onSort: onResourceSort
        }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "horizontal-align spaced" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "horizontaItem top" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "btn", onClick: function () { return host.openDialog({
                        Component: _modal_pages_edit_resource__WEBPACK_IMPORTED_MODULE_1__["EditResource"],
                        props: {
                            title: "Lägg till resurs",
                            onSave: function (newResource) {
                                newResource.order = Date.now();
                                var updatedResource = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["updateModificationAndCreationStamps"])(newResource, _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].currentUser);
                                onUpdate({ $push: [updatedResource] });
                                host.closeDialog();
                            }
                        }
                    }); } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fas fa-paperclip", "aria-hidden": true }),
                    " L\u00E4gg till resurs")),
            showGooglePicker && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "horizontaItem top" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_apis_buttons__WEBPACK_IMPORTED_MODULE_4__["DriveButton"], { label: "L\u00E4gg till fr\u00E5n Drive", action: function () {
                        var picker = new _apis_google_picker__WEBPACK_IMPORTED_MODULE_5__["GooglePicker"]({ upload: true, multiple: true });
                        picker.show().then(function (files) {
                            files.forEach(function (file) {
                                var newResource = { url: file.url, name: file.name };
                                var updatedResource = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["updateModificationAndCreationStamps"])(newResource, _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].currentUser);
                                onUpdate({ $push: [updatedResource] });
                            });
                        });
                    } }))));
};


/***/ }),

/***/ "./src/components/course-builder/sub-components/editable-task-list.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/editable-task-list.tsx ***!
  \*****************************************************************************/
/*! exports provided: EditableTaskList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableTaskList", function() { return EditableTaskList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_pages_edit_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-pages/edit-task */ "./src/components/course-builder/modal-pages/edit-task/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _utility_components_sortable_task_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility-components/sortable-task-list */ "./src/components/utility-components/sortable-task-list.tsx");
/* harmony import */ var _course_builder_ks_logic_ordered_requirements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../course-builder-ks/logic/ordered-requirements */ "./src/components/course-builder-ks/logic/ordered-requirements.ts");








var EditableTaskList = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditableTaskList, _super);
    function EditableTaskList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    EditableTaskList.prototype.openTaskDialog = function (task) {
        var _a = this.props, taskCustomizations = _a.taskCustomizations, course = _a.course, host = _a.host, module = _a.module, taskIds = _a.taskIds, onTaskAdded = _a.onTaskAdded, onTaskUpdated = _a.onTaskUpdated, onTaskCustomizationUpdated = _a.onTaskCustomizationUpdated, onTaskDeleted = _a.onTaskDeleted, idsNotCoveredByAnyTask = _a.idsNotCoveredByAnyTask, onTaskReplaced = _a.onTaskReplaced;
        host.openDialog({
            Component: _modal_pages_edit_task__WEBPACK_IMPORTED_MODULE_2__["EditTask"],
            props: {
                task: task,
                taskCustomization: taskCustomizations && taskCustomizations[task.id],
                module: module,
                course: course,
                host: host,
                idsNotCoveredByAnyTask: idsNotCoveredByAnyTask,
                onSave: function (task) {
                    var updatedTask = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["updateModificationAndCreationStamps"])(task, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser);
                    onTaskUpdated(updatedTask);
                    host.closeDialog();
                },
                onSaveCustomization: function (customization) {
                    onTaskCustomizationUpdated(task.id, customization);
                    host.closeDialog();
                },
                onDelete: function () {
                    onTaskDeleted(task.id);
                    host.closeDialog();
                },
                onReplace: function (taskId, newTask) {
                    onTaskReplaced(taskId, newTask);
                    host.closeDialog();
                },
                onCancel: function () { return host.closeDialog(); }
            }
        });
    };
    EditableTaskList.prototype.render = function () {
        var _this = this;
        var props = this.props;
        var tasks = Object(_course_builder_ks_logic_ordered_requirements__WEBPACK_IMPORTED_MODULE_7__["getOrderedDocs"])(props.course.tasks, props.taskIds, { appendLeftovers: false });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_sortable_task_list__WEBPACK_IMPORTED_MODULE_6__["SortableTaskList"], { taskMetas: tasks.map(function (task) { return ({ task: task, isTaskOwner: Object(_access_control__WEBPACK_IMPORTED_MODULE_5__["hasWriteAccess"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser, task) }); }), renderEditLink: function (_a) {
                    var task = _a.task, isTaskOwner = _a.isTaskOwner;
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: isTaskOwner ?
                            "editItem" :
                            "viewItem", onClick: function () { return _this.openTaskDialog(task); } });
                }, renderLink: function (_a) {
                    var task = _a.task;
                    return task.content ?
                        // Rather than linking to url, show the task's content (by opening
                        // the task dialog)
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "#", onClick: function (ev) {
                                ev.preventDefault();
                                _this.openTaskDialog(task);
                            } }, task.name) :
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: task.url, target: "_blank" }, task.name);
                }, onSort: function (source, target, placement) {
                    _this.props.onTasksReordered(source, target, placement);
                } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn", onClick: function () {
                    var _a = _this.props, course = _a.course, host = _a.host, idsNotCoveredByAnyTask = _a.idsNotCoveredByAnyTask, module = _a.module, onTaskAdded = _a.onTaskAdded, onTaskCustomizationUpdated = _a.onTaskCustomizationUpdated;
                    props.host.openDialog({
                        Component: _modal_pages_edit_task__WEBPACK_IMPORTED_MODULE_2__["EditTask"],
                        props: {
                            searchMode: true,
                            module: module,
                            course: course,
                            host: host,
                            idsNotCoveredByAnyTask: idsNotCoveredByAnyTask,
                            onSave: function (choosenTask, taskCustomization) {
                                choosenTask = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["updateModificationAndCreationStamps"])(choosenTask, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser);
                                onTaskAdded(choosenTask, taskCustomization);
                                host.closeDialog();
                            },
                            onCancel: function () { return host.closeDialog(); }
                        }
                    });
                } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-search", "aria-hidden": true }),
                " S\u00F6k uppgift"),
            "\u00A0",
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { onClick: function () {
                    var _a = _this.props, course = _a.course, host = _a.host, module = _a.module, taskIds = _a.taskIds, onTaskAdded = _a.onTaskAdded, onTaskUpdated = _a.onTaskUpdated, onTaskDeleted = _a.onTaskDeleted, idsNotCoveredByAnyTask = _a.idsNotCoveredByAnyTask;
                    host.openDialog({
                        Component: _modal_pages_edit_task__WEBPACK_IMPORTED_MODULE_2__["EditTask"],
                        props: {
                            module: module,
                            course: course,
                            host: host,
                            idsNotCoveredByAnyTask: idsNotCoveredByAnyTask,
                            onSave: function (newTask) {
                                newTask = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["updateModificationAndCreationStamps"])(newTask, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser);
                                onTaskAdded(newTask);
                                host.closeDialog();
                            },
                            onCancel: function () { return host.closeDialog(); }
                        }
                    });
                }, className: "btn" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-plus", "aria-hidden": true }),
                " L\u00E4gg till egen uppgift"));
    };
    return EditableTaskList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/sub-components/editable-teacher-list.tsx":
/*!********************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/editable-teacher-list.tsx ***!
  \********************************************************************************/
/*! exports provided: EditableTeacherList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableTeacherList", function() { return EditableTeacherList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _remove_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-item */ "./src/components/course-builder/sub-components/remove-item.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _select_teacher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-teacher */ "./src/components/course-builder/sub-components/select-teacher.tsx");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../features */ "./src/features/index.ts");







function EditableTeacherList(_a) {
    var school = _a.school, teachers = _a.teachers, onUpdate = _a.onUpdate;
    var nameElem = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2), selectingTeacher = _b[0], setSelectingTeacher = _b[1];
    var displayTeacherRights = _features__WEBPACK_IMPORTED_MODULE_6__["features"].teacherRights;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "teachers-list" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Ansvariga l\u00E4rare"),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", { style: { width: "100%" } },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, teachers.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { style: { width: "15%" } }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Namn"], ["Namn"])))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["E-postadress"], ["E-postadress"])))),
                displayTeacherRights && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { style: { width: "24px" } }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Beh\u00F6righet"], ["Beh\u00F6righet"])))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { style: { width: "24px" } }))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, teachers.map(function (teacher, idx) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: idx },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: "text", ref: nameElem, value: teacher.name, autoFocus: !teacher.name && idx > 0, onChange: function (ev) {
                                if (ev.target.value || teacher.email) {
                                    // Update row
                                    var clone = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(teachers);
                                    clone[idx] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, teacher), { name: ev.target.value });
                                    onUpdate(clone);
                                }
                                else {
                                    // Remove row
                                    onUpdate(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(teachers.slice(0, idx), teachers.slice(idx + 1)));
                                }
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: "text", style: { width: "100%" }, value: teacher.email || teacher.url, onKeyDown: function (ev) {
                                if (ev.which === 9 &&
                                    !ev.shiftKey &&
                                    idx === teachers.length - 1 &&
                                    (teachers.length < 1 || !!teachers[teachers.length - 1].name)) {
                                    setSelectingTeacher(true);
                                    ev.preventDefault();
                                }
                            }, onChange: function (ev) {
                                var editedTeacher = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, teacher), { url: ev.target.value, email: ev.target.value });
                                if (ev.target.value || teacher.name) {
                                    // Update row
                                    var clone = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(teachers);
                                    clone[idx] = editedTeacher;
                                    onUpdate(clone);
                                }
                                else {
                                    // Remove row
                                    onUpdate(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(teachers.slice(0, idx), teachers.slice(idx + 1)));
                                }
                            } })),
                    displayTeacherRights && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", { disabled: !(teacher.email || teacher.url), value: teacher.access || 'edit', onChange: function (ev) {
                                var clone = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(teachers);
                                clone[idx] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, teacher), { access: ev.target.value });
                                onUpdate(clone);
                            } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { value: "read" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4sa"], ["L\u00E4sa"])))),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { value: "edit" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Redigera"], ["Redigera"])))),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { value: "full" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Full"], ["Full"])))))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remove_item__WEBPACK_IMPORTED_MODULE_2__["RemoveItem"], { onClick: function () {
                                onUpdate(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(teachers.slice(0, idx), teachers.slice(idx + 1)));
                            } })));
            }))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
        selectingTeacher ?
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_spinner__WEBPACK_IMPORTED_MODULE_5__["TimeoutSpinner"], null) },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_select_teacher__WEBPACK_IMPORTED_MODULE_4__["SelectTeacher"], { school: school, selectedTeachers: teachers, onBlur: function () { return setSelectingTeacher(false); }, onSelect: function (_a) {
                        var name = _a.name, email = _a.email;
                        var newTeacher = {
                            name: name,
                            email: email,
                            url: email,
                            access: 'edit'
                        };
                        var clone = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(teachers);
                        clone.push(newTeacher);
                        onUpdate(clone);
                        setSelectingTeacher(false);
                    } })) :
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { className: "btn", onClick: function () {
                    setSelectingTeacher(true);
                } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fas fa-user-plus", "aria-hidden": true }), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([" L\u00E4gg till ansvarig l\u00E4rare"], [" L\u00E4gg till ansvarig l\u00E4rare"])))));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./src/components/course-builder/sub-components/editable-workflow-link.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/editable-workflow-link.tsx ***!
  \*********************************************************************************/
/*! exports provided: EditableWorkFlowLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableWorkFlowLink", function() { return EditableWorkFlowLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_pages_edit_workflow_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-pages/edit-workflow-link */ "./src/components/course-builder/modal-pages/edit-workflow-link.tsx");



var EditableWorkFlowLink = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditableWorkFlowLink, _super);
    function EditableWorkFlowLink(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    EditableWorkFlowLink.prototype.render = function () {
        var _a = this.props, host = _a.host, onUpdate = _a.onUpdate, url = _a.url;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, url &&
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "editItem", onClick: function () { return host.openDialog({
                                Component: _modal_pages_edit_workflow_link__WEBPACK_IMPORTED_MODULE_2__["EditWorkflowLink"],
                                props: {
                                    url: url,
                                    onSave: function (newUrl) {
                                        onUpdate({ $set: newUrl });
                                        host.closeDialog();
                                    },
                                    onDelete: function () {
                                        onUpdate({ $set: undefined });
                                        host.closeDialog();
                                    }
                                }
                            }); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: url, target: "_blank" }, "Nuvarande arbetsg\u00E5ng")))),
            !url && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn", onClick: function () { return host.openDialog({
                    Component: _modal_pages_edit_workflow_link__WEBPACK_IMPORTED_MODULE_2__["EditWorkflowLink"],
                    props: {
                        onSave: function (newUrl) {
                            onUpdate({ $set: newUrl });
                            host.closeDialog();
                        }
                    }
                }); } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-paperclip", "aria-hidden": true }),
                " Koppla en arbetsg\u00E5ng till kursen"));
    };
    return EditableWorkFlowLink;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/sub-components/school-courses.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/school-courses.tsx ***!
  \*************************************************************************/
/*! exports provided: SchoolCourses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolCourses", function() { return SchoolCourses; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _repos_school_courses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../repos/school-courses */ "./src/repos/school-courses.ts");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");









var SchoolCourses = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SchoolCourses, _super);
    function SchoolCourses(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            schoolCourses: null
        };
        _this.onSchoolCoursesUpdated = _this.onSchoolCoursesUpdated.bind(_this);
        return _this;
    }
    SchoolCourses.prototype.componentDidMount = function () {
        _repos_school_courses__WEBPACK_IMPORTED_MODULE_3__["mySchoolCoursesRepo"].subscribe(this.onSchoolCoursesUpdated).catch(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["showError"]);
    };
    SchoolCourses.prototype.componentWillUnmount = function () {
        _repos_school_courses__WEBPACK_IMPORTED_MODULE_3__["mySchoolCoursesRepo"].unsubscribe(this.onSchoolCoursesUpdated);
    };
    SchoolCourses.prototype.onSchoolCoursesUpdated = function (schoolCourses) {
        var compareName = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareProp"])("name");
        var compareCreatedDate = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareProp"])("createdDate");
        schoolCourses.sort(function (a, b) { return compareName(a, b) || compareCreatedDate(a, b); });
        this.setState({ schoolCourses: schoolCourses });
    };
    SchoolCourses.prototype.outputCourses = function (courses, header, open) {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_8__["OpenCloseBox"], { title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, header), headerOpen: open, contentClassName: "odd-even" }, courses.map(function (course) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "schoolCourse", key: course.id },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top pull-right" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { to: "/courses/" + course.id + "/edit", className: "editItem" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { to: "/courses/" + course.id + "/edit" }, course.name)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, course.active && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pill active" }, "Aktiv")),
                    course.active && !course.publishable && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pill incomplete" }, "Inkomplett"))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, course.description)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, course.modifiedBy ?
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "small" },
                        "Redigerad av ",
                        course.modifiedBy.name,
                        " / ",
                        Object(_utils__WEBPACK_IMPORTED_MODULE_6__["shortDateFormat"])(course.modifiedDate)) :
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "small", style: { fontStyle: 'italic' } }, " ")));
        })));
    };
    SchoolCourses.prototype.render = function () {
        var schoolCourses = this.state.schoolCourses;
        var myCourses = [];
        var othersCourses = [];
        if (schoolCourses) {
            var me_1 = _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["default"].currentUser.mail;
            schoolCourses.forEach(function (course) {
                if (course.activatedBy && course.activatedBy.url == me_1) {
                    myCourses.push(course);
                }
                else if (course.responsibleTeachers.filter(function (t) { return t.url == me_1; }).length > 0) {
                    myCourses.push(course);
                }
                else {
                    othersCourses.push(course);
                }
            });
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Skolans kurser"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer odd-even" }, !schoolCourses ?
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null),
                        " Laddar skolans kurser") :
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        this.outputCourses(myCourses, 'Mina kurser', true),
                        this.outputCourses(othersCourses, 'Andra kurser', false))),
                location.hash !== "#/courses/new" && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { className: "btn", to: "/courses/new", onClick: function () { return window.scroll(0, 0); } }, "Skapa ny kurs")));
    };
    return SchoolCourses;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/sub-components/select-study-groups.tsx":
/*!******************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/select-study-groups.tsx ***!
  \******************************************************************************/
/*! exports provided: SelectStudyGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectStudyGroups", function() { return SelectStudyGroups; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _apis_mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../apis/mock/mock-classroom-data */ "./src/apis/mock/mock-classroom-data.ts");
/* harmony import */ var _utility_components_with_observe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utility-components/with-observe */ "./src/components/utility-components/with-observe.tsx");








var SelectStudyGroups = Object(_utility_components_with_observe__WEBPACK_IMPORTED_MODULE_7__["withObserve"])(function (_a) {
    var school = _a.school, courseCode = _a.courseCode, selectedStudyGroups = _a.selectedStudyGroups, placeholder = _a.placeholder, onUpdate = _a.onUpdate;
    // Mock-data for KED
    var emptyOrMock = school === 'KED' && _apis_mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_6__["mockTuitionGroups"][courseCode] ? _apis_mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_6__["mockTuitionGroups"][courseCode] : [];
    // Map given {school} to its name in EDS:
    var edsSchoolNameGymn = _globals_db__WEBPACK_IMPORTED_MODULE_5__["db"].schools
        .cacheOptimized() // Will add cacheBust to the query (making server add cache header)
        .name(school).single() // Get the single school instance with name={school}
        .read().edsSchoolNameGymn; // Read it the suspense-way (throwing Promise if not there...)
    // List studygroups for that school and given course:
    var studyGroups = edsSchoolNameGymn ? _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["env"].edsClient.suspense.getSchoolTuitionGroups({
        schoolName: edsSchoolNameGymn,
        courseCode: courseCode
    }) : emptyOrMock;
    // Convert to option objects as react-select wants them:
    var options = studyGroups.map(function (sg) { return ({
        label: sg.tuitionGroupName,
        value: sg.tuitionGroupName
    }); });
    // Display the mutliselect:
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], { isMulti: true, options: options, value: selectedStudyGroups.map(function (group) { return ({ label: group, value: group }); }), placeholder: placeholder, noOptionsMessage: function () { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kunde inte hitta undervisningsgrupper f\u00F6r denna kurs"], ["Kunde inte hitta undervisningsgrupper f\u00F6r denna kurs"]))); }, onChange: function (options) {
            onUpdate(options.map(function (_a) {
                var value = _a.value;
                return value;
            }));
        } });
});
var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/sub-components/select-teacher.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/select-teacher.tsx ***!
  \*************************************************************************/
/*! exports provided: SelectTeacher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTeacher", function() { return SelectTeacher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _apis_mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../apis/mock/mock-classroom-data */ "./src/apis/mock/mock-classroom-data.ts");
/* harmony import */ var _utility_components_with_observe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility-components/with-observe */ "./src/components/utility-components/with-observe.tsx");










var SelectTeacher = Object(_utility_components_with_observe__WEBPACK_IMPORTED_MODULE_9__["withObserve"])(function (_a) {
    //
    // Load the teacher list asynchronically (using suspense)
    //
    var school = _a.school, selectedTeachers = _a.selectedTeachers, onSelect = _a.onSelect, onBlur = _a.onBlur;
    // Mock-data for KED
    var emptyOrMock = school === 'KED' ? _apis_mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_8__["mockTeachers"] : [];
    // Suspense-read from KedBackend:
    var edsSchoolNameGymn = _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].schools.cacheOptimized().name(school).single().read().edsSchoolNameGymn;
    // Suspense-read from EDS:
    var edsTeachers = edsSchoolNameGymn ?
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["env"].edsClient.suspense.getSchoolTeachers({ schoolName: edsSchoolNameGymn }) :
        emptyOrMock;
    var teacherList = edsTeachers.map(function (_a) {
        var teacherFirstName = _a.teacherFirstName, teacherLastName = _a.teacherLastName, teacherEmailAddress = _a.teacherEmailAddress;
        return ({
            label: teacherFirstName + " " + teacherLastName,
            value: teacherEmailAddress
        });
    });
    // Add current user to the list (in case current user is ADMIN or EMPLOYEE at the school)
    var addCurrentUser = Object(_access_control__WEBPACK_IMPORTED_MODULE_7__["isAdminOrTeacherAtSchool"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["env"].currentUser, school);
    if (addCurrentUser && !teacherList.some(function (t) { return t.value === _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["env"].currentUser.mail; })) {
        teacherList.push({ label: _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["env"].currentUser.displayName, value: _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["env"].currentUser.mail });
    }
    // Filter out already selected teachers:
    var teacherSet = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["arrayToLookup"])(selectedTeachers, function (t) { return t.email; });
    teacherList = teacherList
        .filter(function (t) { return !teacherSet[t.value]; }) // Remove already added ones
        .sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["compareProps"])(["label"], _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_5__["cfg"].KED_LOCALE)); // Sort by name
    // Show the select:
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_6__["default"], { isMulti: false, options: teacherList, defaultMenuIsOpen: true, autoFocus: true, onBlur: function () { return onBlur(); }, placeholder: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["V\u00E4lj bland skolans l\u00E4rare..."], ["V\u00E4lj bland skolans l\u00E4rare..."]))), noOptionsMessage: function () { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Det finns inga fler l\u00E4rare att v\u00E4lja fr\u00E5n"], ["Det finns inga fler l\u00E4rare att v\u00E4lja fr\u00E5n"]))); }, onChange: function (option) {
            var _a = option, label = _a.label, value = _a.value;
            onSelect({ name: label, email: value });
        } });
});
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/course-builder/sub-components/weighted-items-table.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/weighted-items-table.tsx ***!
  \*******************************************************************************/
/*! exports provided: WeightedItemsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightedItemsTable", function() { return WeightedItemsTable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _courses_business_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses/business-logic */ "./src/components/course-builder/courses/business-logic.ts");
/* harmony import */ var _contracts_ked_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contracts/ked-models */ "./src/contracts/ked-models.ts");
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");





var WeightedItemsTable = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WeightedItemsTable, _super);
    function WeightedItemsTable(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    WeightedItemsTable.prototype.render = function () {
        var course = this.props.course;
        var isOpen = this.state.isOpen;
        var rows = [];
        var tasksPerId = Object(_courses_business_logic__WEBPACK_IMPORTED_MODULE_2__["getTasksPerId"])(course);
        rows.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: "centralContent", className: "covered-item-label" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { colSpan: 2 }, "Centralt inneh\u00E5ll")));
        course.centralContent.forEach(function (cc, idx) { return rows.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: cc.id, className: idx % 2 ? "tableOdd" : "" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "criteriaText", dangerouslySetInnerHTML: { __html: cc.name } })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, (tasksPerId[cc.id] || []).length)))); });
        rows.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: "abilities", className: "covered-item-label" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { colSpan: 2 }, "F\u00F6rm\u00E5gor")));
        course.abilities.forEach(function (ability, idx) { return rows.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: ability.id, className: idx % 2 ? "tableOdd" : "" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "abilityText", dangerouslySetInnerHTML: { __html: ability.name } })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, (tasksPerId[ability.id] || []).length)))); });
        rows.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: "futureAbilities", className: "covered-item-label" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { colSpan: 2 }, "Framtidsf\u00F6rm\u00E5gor")));
        _contracts_ked_models__WEBPACK_IMPORTED_MODULE_3__["futureAbilities"].forEach(function (futureAbilityText, idx) { return rows.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: futureAbilityText, className: idx % 2 ? "tableOdd" : "" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "abilityText" }, futureAbilityText)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, (tasksPerId[futureAbilityText] || []).length)))); });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_4__["OpenCloseBox"], { className: "larger", title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Kursens t\u00E4ckningstabell"), contentClassName: "weighted-items-table" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Tabellen anger hur m\u00E5nga uppgifter som ber\u00F6r varje del."),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, rows)));
    };
    return WeightedItemsTable;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/subjects/index.tsx":
/*!**********************************************************!*\
  !*** ./src/components/course-builder/subjects/index.tsx ***!
  \**********************************************************/
/*! exports provided: ShowSubject, Subjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subjects", function() { return Subjects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _show_subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-subject */ "./src/components/course-builder/subjects/show-subject.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowSubject", function() { return _show_subject__WEBPACK_IMPORTED_MODULE_3__["ShowSubject"]; });

/* harmony import */ var _courses_course_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../courses/course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _subjects_inner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subjects-inner */ "./src/components/course-builder/subjects/subjects-inner.tsx");






var Subjects = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Subjects, _super);
    function Subjects(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isListingSubjects: true,
            primarySchoolSubjects: [],
            uploadedSubject: null
        };
        return _this;
    }
    Subjects.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_course_banner__WEBPACK_IMPORTED_MODULE_4__["CourseBanner"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\u00C4mnen"], ["\u00C4mnen"]))), activePage: "subjects", routes: { feedback: this.props.feedbackUrl } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subjects_inner__WEBPACK_IMPORTED_MODULE_5__["SubjectsInner"], { linkPrefix: "/subjects/" }));
    };
    return Subjects;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1;


/***/ }),

/***/ "./src/repos/school-courses.ts":
/*!*************************************!*\
  !*** ./src/repos/school-courses.ts ***!
  \*************************************/
/*! exports provided: mySchoolCoursesRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mySchoolCoursesRepo", function() { return mySchoolCoursesRepo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repo */ "./src/repos/repo.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");




var SchoolCoursesRepo = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SchoolCoursesRepo, _super);
    function SchoolCoursesRepo(getSchoolName) {
        var _this = _super.call(this, {
            query: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var schoolName, schools;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            schoolName = getSchoolName();
                            return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.list("schools", {
                                    name: schoolName,
                                    include: ["courses"]
                                })];
                        case 1:
                            schools = _a.sent();
                            this._schoolId = schools.length > 0 && schools[0].id;
                            if (!this._schoolId)
                                throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Skolan ", " finns inte registrerad i systemet.\n          Kontakta en administrat\u00F6r f\u00F6r Kursbyggarverktyget och be om att l\u00E4gga till skolan med namnet \"", "\""], ["Skolan ", " finns inte registrerad i systemet.\n          Kontakta en administrat\u00F6r f\u00F6r Kursbyggarverktyget och be om att l\u00E4gga till skolan med namnet \"", "\""])), schoolName, schoolName));
                            return [2 /*return*/, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["flatten"])(schools.map(function (school) { return school.courses; }))];
                    }
                });
            }); }
        }) || this;
        return _this;
    }
    SchoolCoursesRepo.prototype.getSchoolId = function () {
        var _this = this;
        return this.ensureHasData().then(function () { return _this._schoolId; });
    };
    return SchoolCoursesRepo;
}(_repo__WEBPACK_IMPORTED_MODULE_1__["Repo"]));
var mySchoolCoursesRepo = new SchoolCoursesRepo(function () { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.school; });
var templateObject_1;


/***/ }),

/***/ "./src/utils/cached-response.ts":
/*!**************************************!*\
  !*** ./src/utils/cached-response.ts ***!
  \**************************************/
/*! exports provided: CachedResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachedResponse", function() { return CachedResponse; });
var CachedResponse = /** @class */ (function () {
    function CachedResponse(queryer) {
        this.queryer = queryer;
        this.promise = null;
        this.result = null;
    }
    CachedResponse.prototype.query = function () {
        var _this = this;
        return this.promise ?
            this.promise :
            (this.promise = this.queryer().then(function (x) { return _this.result = x; }));
    };
    CachedResponse.prototype.reset = function () {
        this.promise = null;
    };
    return CachedResponse;
}());



/***/ })

}]);
//# sourceMappingURL=CourseBuilder.js.map