(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["TeacherViewApp"],{

/***/ "./src/components/teacher-view/assignments-view/course-module.tsx":
/*!************************************************************************!*\
  !*** ./src/components/teacher-view/assignments-view/course-module.tsx ***!
  \************************************************************************/
/*! exports provided: CourseModuleView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleView", function() { return CourseModuleView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _course_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-task */ "./src/components/teacher-view/assignments-view/course-task.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var _shared_notification_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/notification-icon */ "./src/components/teacher-view/shared/notification-icon.tsx");
/* harmony import */ var _digest_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../digest-view */ "./src/components/teacher-view/digest-view.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! . */ "./src/components/teacher-view/assignments-view/index.tsx");










var CourseModuleView = (function (_a) {
    var module = _a.module, tasks = _a.tasks;
    var intl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_5__["LanguageContext"]).intl;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_digest_view__WEBPACK_IMPORTED_MODULE_7__["StateContext"]), notificationdigests = _b.notificationdigests, selectedCourse = _b.selectedCourse;
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(___WEBPACK_IMPORTED_MODULE_8__["AssignmentsContext"]), filterStudyGroups = _c.filterStudyGroups, tuitionStudents = _c.tuitionStudents;
    var getNotSubmittedUsers = function (taskAssignments) {
        var taskNotSubmittedUsers = [];
        // get students from the course study groups who have't uploaded their assignments
        var studyGroups = filterStudyGroups.length > 0 ? selectedCourse.studyGroups.filter(function (sg) { return filterStudyGroups.includes(sg); }) : selectedCourse.studyGroups;
        studyGroups.forEach(function (group) {
            var users = tuitionStudents &&
                tuitionStudents.filter(function (cs) { return cs.tuitionGroupName === group &&
                    !taskAssignments.find(function (_a) {
                        var assignment = _a.assignment;
                        return assignment.user === cs.studentEmailAddress;
                    })
                    && !taskNotSubmittedUsers.find(function (nsu) { return nsu.email === cs.studentEmailAddress; }); })
                    .map(function (ns) { return { displayName: ns.studentFirstName + " " + ns.studentLastName, email: ns.studentEmailAddress }; });
            if (users) {
                taskNotSubmittedUsers.push.apply(taskNotSubmittedUsers, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(users));
            }
        });
        //sort by lastname - firstname
        return taskNotSubmittedUsers.map(function (s) {
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(s.displayName.split(' ')), firstName = _a[0], rest = _a.slice(1);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, s), { firstName: firstName, lastName: rest.join(' ') });
        }).sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["compareProps"])(["lastName", "firstName"]));
    };
    var courseNotifications = notificationdigests[selectedCourse.id];
    return tasks && tasks.length > 0 &&
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_1__["OpenCloseBox"], { title: react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "notification-container" },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", null, module.name),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_shared_notification_icon__WEBPACK_IMPORTED_MODULE_6__["NotificationIcon"], { course: selectedCourse, entity: 'module', moduleId: module.id, notificationdigests: notificationdigests })), headerOpen: false }, courseNotifications && Object.keys(courseNotifications).length > 0 ? react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null, tasks.map(function (task) {
                var taskAssignments = courseNotifications[task.id] ? courseNotifications[task.id].map(function (t) { return t; }) : [];
                var notSubmittedUsers = selectedCourse.studyGroups && selectedCourse.studyGroups.length > 0 && getNotSubmittedUsers(taskAssignments);
                var displayTask = notSubmittedUsers && notSubmittedUsers.length > 0 || taskAssignments && taskAssignments.length > 0;
                return displayTask &&
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_course_task__WEBPACK_IMPORTED_MODULE_3__["CourseTask"], { key: task.id, task: task, module: module, assignments: taskAssignments, notSubmittedUsers: notSubmittedUsers });
            })) :
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null, intl.formatMessage({ id: "teacherView.noUploadedAssignmentsForModule", defaultMessage: "No assignments have been uploaded for this module" }))));
});


/***/ }),

/***/ "./src/components/teacher-view/assignments-view/course-task-not-handed-users.tsx":
/*!***************************************************************************************!*\
  !*** ./src/components/teacher-view/assignments-view/course-task-not-handed-users.tsx ***!
  \***************************************************************************************/
/*! exports provided: CourseTaskNotHandedUserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseTaskNotHandedUserList", function() { return CourseTaskNotHandedUserList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _digest_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../digest-view */ "./src/components/teacher-view/digest-view.tsx");
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _helpers_email_send_hoc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/email-send-hoc */ "./src/components/teacher-view/assignments-view/helpers/email-send-hoc.tsx");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _helpers_assignments_common_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/assignments-common-functions */ "./src/components/teacher-view/assignments-view/helpers/assignments-common-functions.tsx");









var CourseTaskNotHandedUserList = Object(_helpers_email_send_hoc__WEBPACK_IMPORTED_MODULE_5__["setupEmail"])((function (_a) {
    var notSubmittedUsers = _a.notSubmittedUsers, moduleName = _a.moduleName, task = _a.task, setEmailInfo = _a.setEmailInfo, emailInfo = _a.emailInfo, sendReminder = _a.sendReminder;
    var intl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_1__["LanguageContext"]).intl;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_digest_view__WEBPACK_IMPORTED_MODULE_3__["StateContext"]), selectedCourse = _b.selectedCourse, courseViewerUrl = _b.courseViewerUrl;
    var notSubmittedLength = notSubmittedUsers && notSubmittedUsers.length;
    return !notSubmittedUsers || notSubmittedUsers.length === 0 ? null : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "not-submitted-users taskContainer" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, intl.formatMessage({ id: "teacherView.notSubmittedAssignments", defaultMessage: "Ej lämnat in" })),
        notSubmittedUsers.map(function (ns, index) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: "notHandedIn_" + index, className: "align-horizontal student-row" + (notSubmittedLength === index + 1 ? " last" : "") },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "horizontalItem top pull-right", onClick: function () {
                        var baseUrl = Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["preserveImpersonationQuery"])(courseViewerUrl, { courseId: selectedCourse.id, });
                        setEmailInfo({
                            sendTo: { email: ns.email, firstName: ns.firstName, lastName: ns.lastName },
                            courseName: selectedCourse.name,
                            moduleName: moduleName,
                            taskName: task.name,
                            taskId: task.id,
                            taskDeadline: task.deadline,
                            courseTaskUrl: Object(_helpers_assignments_common_functions__WEBPACK_IMPORTED_MODULE_7__["getBaseCourseViewerEmailUrl"])(courseViewerUrl) + "?courseId=" + selectedCourse.id + "&module=" + moduleName + "&taskId=" + task.id
                        });
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "checkBox" + (emailInfo.data.find(function (su) { return su.sendTo.email === ns.email; }) ? " checked" : "") })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "horizontalItem top" }, ns.displayName));
        }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "align-horizontal remind-assignment" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "horizontalItem top pull-right" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn btn-info" + (emailInfo.emailSendInProgress ? " disabled" : ""), disabled: emailInfo.emailSendInProgress, onClick: function () {
                        if (emailInfo.data.length > 0) {
                            sendReminder();
                        }
                        else {
                            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["showError"])(intl.formatMessage({ id: "teacherView.sendEmailAtLeastOneRecipientErr", defaultMessage: "At least one student should be selected" }));
                        }
                    } }, emailInfo.emailSendInProgress ?
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null),
                        intl.formatMessage({ id: "teacherView.emailReminderInProgress", defaultMessage: "Pågående" }))
                    :
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, intl.formatMessage({ id: "teacherView.remindBtn", defaultMessage: "Påminn" }))))));
}));


/***/ }),

/***/ "./src/components/teacher-view/assignments-view/course-task.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/teacher-view/assignments-view/course-task.tsx ***!
  \**********************************************************************/
/*! exports provided: CourseTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseTask", function() { return CourseTask; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");
/* harmony import */ var _course_tasks_assignments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-tasks-assignments */ "./src/components/teacher-view/assignments-view/course-tasks-assignments.tsx");
/* harmony import */ var _course_task_not_handed_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-task-not-handed-users */ "./src/components/teacher-view/assignments-view/course-task-not-handed-users.tsx");
/* harmony import */ var _shared_notification_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/notification-icon */ "./src/components/teacher-view/shared/notification-icon.tsx");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _digest_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../digest-view */ "./src/components/teacher-view/digest-view.tsx");










var CourseTask = (function (_a) {
    var task = _a.task, assignments = _a.assignments, notSubmittedUsers = _a.notSubmittedUsers, module = _a.module;
    var _b = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_digest_view__WEBPACK_IMPORTED_MODULE_9__["StateContext"]), notificationdigests = _b.notificationdigests, selectedCourse = _b.selectedCourse, seenDigestsObservable = _b.seenDigestsObservable;
    function onTaskOpened(isOpened) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var tagsDigest_1, seenDigests_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(isOpened && notificationdigests[selectedCourse.id][task.id])) return [3 /*break*/, 2];
                        return [4 /*yield*/, Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["simpleDigest"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_8__["env"].currentUser.mail + selectedCourse.id)];
                    case 1:
                        tagsDigest_1 = _a.sent();
                        seenDigests_1 = seenDigestsObservable;
                        assignments.forEach(function (_a) {
                            var assignment = _a.assignment;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var assignmentDigest;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["simpleDigest"])(assignment.user + //(studen's email address)
                                                assignment.courseId +
                                                assignment.taskId +
                                                assignment.uploadDate +
                                                (assignment.metadata.driveFileId || ""))];
                                        case 1:
                                            assignmentDigest = _b.sent();
                                            if (!(seenDigests_1 && seenDigests_1.find(function (a) { return a.digest === assignmentDigest; }))) {
                                                _globals_db__WEBPACK_IMPORTED_MODULE_7__["db"].seenStudentAssignments.add({
                                                    id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["createUUID"])(),
                                                    tags: [tagsDigest_1],
                                                    digest: assignmentDigest
                                                });
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__["OpenCloseBox"], { onOpenClose: function (becameOpen) { return onTaskOpened(becameOpen); }, className: "task-container", title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "notification-container" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, task.name),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_shared_notification_icon__WEBPACK_IMPORTED_MODULE_5__["NotificationIcon"], { course: selectedCourse, entity: 'task', taskId: task.id, notificationdigests: notificationdigests })), headerOpen: false },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_tasks_assignments__WEBPACK_IMPORTED_MODULE_3__["CourseTaskAssignments"], { task: task, digestAssignments: assignments, checkWithUrkund: task.sendToUrkund === undefined ? true : task.sendToUrkund }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_task_not_handed_users__WEBPACK_IMPORTED_MODULE_4__["CourseTaskNotHandedUserList"], { notSubmittedUsers: notSubmittedUsers, moduleName: module.name, task: task })));
});


/***/ }),

/***/ "./src/components/teacher-view/assignments-view/course-tasks-assignments.tsx":
/*!***********************************************************************************!*\
  !*** ./src/components/teacher-view/assignments-view/course-tasks-assignments.tsx ***!
  \***********************************************************************************/
/*! exports provided: CourseTaskAssignments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseTaskAssignments", function() { return CourseTaskAssignments; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _task_assignment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-assignment */ "./src/components/teacher-view/assignments-view/task-assignment.tsx");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/components/teacher-view/assignments-view/index.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _helpers_assignments_common_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/assignments-common-functions */ "./src/components/teacher-view/assignments-view/helpers/assignments-common-functions.tsx");
/* harmony import */ var _digest_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../digest-view */ "./src/components/teacher-view/digest-view.tsx");








var CourseTaskAssignments = (function (_a) {
    var digestAssignments = _a.digestAssignments, checkWithUrkund = _a.checkWithUrkund, task = _a.task;
    var intl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_2__["LanguageContext"]).intl;
    var _b = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](___WEBPACK_IMPORTED_MODULE_3__["AssignmentsContext"]), filterStudyGroups = _b.filterStudyGroups, tuitionStudents = _b.tuitionStudents;
    var cachedAssignments = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_digest_view__WEBPACK_IMPORTED_MODULE_6__["StateContext"]).cachedAssignments;
    var sortedAssignments = digestAssignments ? digestAssignments.map(function (a) { return a.assignment; }).sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["compareProps"])("uploadDate", null, null, true)) : [];
    var filteredAssignments = Object(_helpers_assignments_common_functions__WEBPACK_IMPORTED_MODULE_5__["setupAssignments"])(sortedAssignments, filterStudyGroups, tuitionStudents, checkWithUrkund);
    return filteredAssignments.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "task-assignments-table" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentStudentName", defaultMessage: "Elev" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentFileName", defaultMessage: "Filnamn" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentSubmittedAt", defaultMessage: "Inlamnat" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentReport", defaultMessage: "Rapport" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentGrade", defaultMessage: "Niva" })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, filteredAssignments.map(function (assignment) {
            var digestAssignment = digestAssignments.find(function (a) { return a.assignment === assignment; });
            var isNewAssignment = !cachedAssignments.find(function (d) { return d.digest === digestAssignment.digest; });
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_task_assignment__WEBPACK_IMPORTED_MODULE_1__["TaskAssignment"], { task: task, isNewAssignment: isNewAssignment, key: assignment.uploadDate, assignment: assignment, shouldGetUrkundStatus: assignment.shouldRefresh });
        })))
        :
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, intl.formatMessage({ id: "teacherView.noTaskAssignments", defaultMessage: "Inga uppdrag uppladdade för denna uppgift" }));
});


/***/ }),

/***/ "./src/components/teacher-view/assignments-view/filter-students-view/index.tsx":
/*!*************************************************************************************!*\
  !*** ./src/components/teacher-view/assignments-view/filter-students-view/index.tsx ***!
  \*************************************************************************************/
/*! exports provided: FilteredStudentView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilteredStudentView", function() { return FilteredStudentView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var _digest_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../digest-view */ "./src/components/teacher-view/digest-view.tsx");
/* harmony import */ var _task_assignment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task-assignment */ "./src/components/teacher-view/assignments-view/task-assignment.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .. */ "./src/components/teacher-view/assignments-view/index.tsx");
/* harmony import */ var _helpers_assignments_common_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/assignments-common-functions */ "./src/components/teacher-view/assignments-view/helpers/assignments-common-functions.tsx");
/* harmony import */ var _not_submitted_user_tasks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-submitted-user-tasks */ "./src/components/teacher-view/assignments-view/filter-students-view/not-submitted-user-tasks.tsx");










var FilteredStudentView = ((function (_a) {
    var selectedUser = _a.selectedUser;
    var intl = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_2__["LanguageContext"]).intl;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_digest_view__WEBPACK_IMPORTED_MODULE_3__["StateContext"]), tasks = _b.tasks, selectedCourse = _b.selectedCourse, notificationdigests = _b.notificationdigests, cachedAssignments = _b.cachedAssignments;
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(___WEBPACK_IMPORTED_MODULE_6__["AssignmentsContext"]), filterStudyGroups = _c.filterStudyGroups, tuitionStudents = _c.tuitionStudents;
    var moduleTasks = {};
    //get all tasks for all modules for the current course
    selectedCourse.modules.map(function (m) { return moduleTasks[m.name] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(tasks.filter(function (t) { return m.taskIds.find(function (tId) { return tId === t.id; }); })); });
    var userTasks = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["flatten"])(Object.keys(moduleTasks).map(function (moduleKey) { return moduleTasks[moduleKey]; }));
    //use the initial notification object to retrieve assignments
    var courseNotifications = notificationdigests[selectedCourse.id];
    var notHandedModuleTasks = {};
    Object.keys(moduleTasks).map(function (utm) { return (notHandedModuleTasks[utm] = moduleTasks[utm].filter(function (task) { return !courseNotifications[task.id] || !courseNotifications[task.id].find(function (ct) { return ct.assignment.user === selectedUser; }); })); });
    var filteredAssignments = userTasks.map(function (task) {
        if (courseNotifications[task.id]) {
            //digest assignments is needed to identify if the assignment notification was read
            var taskDigestAssignments = courseNotifications[task.id].filter(function (t) { return t.assignment.user === selectedUser; }).map(function (t) { return t; });
            return { task: task, assignments: Object(_helpers_assignments_common_functions__WEBPACK_IMPORTED_MODULE_7__["setupAssignments"])(taskDigestAssignments.map(function (t) { return t.assignment; }), filterStudyGroups, tuitionStudents, task.sendToUrkund), digestAssignments: taskDigestAssignments };
        }
        return { task: null, assignments: [], digestAssignments: [] };
    });
    var sortedFilteredAssignments = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["flatten"])(filteredAssignments.map(function (t) { return t.assignments; })).sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["compareProps"])("uploadDate", null, null, true));
    var currentUserObj = tuitionStudents.find(function (a) { return a.studentEmailAddress === selectedUser; });
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "filtered-view task-container" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
            filteredAssignments && filteredAssignments.filter(function (obj) { return obj.assignments.length > 0; }).length > 0 &&
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "task-assignments-table" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentTaskName", defaultMessage: "Uppgift" })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentFileName", defaultMessage: "Filnamn" })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentSubmittedAt", defaultMessage: "Inlamnat" })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentReport", defaultMessage: "Rapport" })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentGrade", defaultMessage: "Niva" })))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, sortedFilteredAssignments.map(function (assignment) {
                        var assignmentDetails = filteredAssignments.find(function (a) { return a.assignments.includes(assignment); });
                        var digestAssignment = assignmentDetails.digestAssignments.find(function (a) { return a.assignment === assignment; });
                        var isNewAssignment = !cachedAssignments.find(function (d) { return d.digest === digestAssignment.digest; });
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_assignment__WEBPACK_IMPORTED_MODULE_4__["TaskAssignment"], { studentView: true, isNewAssignment: isNewAssignment, task: assignmentDetails.task, key: assignment.uploadDate, assignment: assignment, shouldGetUrkundStatus: assignment.shouldRefresh });
                    }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_not_submitted_user_tasks__WEBPACK_IMPORTED_MODULE_8__["NotSubmittedUserTasks"], { notHandedInModuleTasks: notHandedModuleTasks, selectedUser: currentUserObj })));
}));


/***/ }),

/***/ "./src/components/teacher-view/assignments-view/filter-students-view/not-submitted-user-tasks.tsx":
/*!********************************************************************************************************!*\
  !*** ./src/components/teacher-view/assignments-view/filter-students-view/not-submitted-user-tasks.tsx ***!
  \********************************************************************************************************/
/*! exports provided: NotSubmittedUserTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotSubmittedUserTasks", function() { return NotSubmittedUserTasks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _digest_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../digest-view */ "./src/components/teacher-view/digest-view.tsx");
/* harmony import */ var _helpers_email_send_hoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/email-send-hoc */ "./src/components/teacher-view/assignments-view/helpers/email-send-hoc.tsx");
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _helpers_assignments_common_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/assignments-common-functions */ "./src/components/teacher-view/assignments-view/helpers/assignments-common-functions.tsx");








var NotSubmittedUserTasks = Object(_helpers_email_send_hoc__WEBPACK_IMPORTED_MODULE_4__["setupEmail"])((function (_a) {
    var notHandedInModuleTasks = _a.notHandedInModuleTasks, selectedUser = _a.selectedUser, emailInfo = _a.emailInfo, setEmailInfo = _a.setEmailInfo, sendReminder = _a.sendReminder;
    var intl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_1__["LanguageContext"]).intl;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_digest_view__WEBPACK_IMPORTED_MODULE_3__["StateContext"]), selectedCourse = _b.selectedCourse, courseViewerUrl = _b.courseViewerUrl;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "task-assignments-table not-submitted" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentTaskName", defaultMessage: "Uppgift" })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentTaskDescription", defaultMessage: "Description" })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentTaskDeadline", defaultMessage: "Deadline" })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, Object.keys(notHandedInModuleTasks).map(function (moduleTask) {
                return notHandedInModuleTasks[moduleTask].map(function (task) {
                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: task.name },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, task.name),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, task.content ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(task.content, 32) : ""),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, task.deadline),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { onClick: function () {
                                setEmailInfo({
                                    sendTo: { email: selectedUser.studentEmailAddress, firstName: selectedUser.studentFirstName, lastName: selectedUser.studentLastName },
                                    courseName: selectedCourse.name,
                                    moduleName: moduleTask,
                                    taskName: task.name,
                                    taskId: task.id,
                                    taskDeadline: task.deadline,
                                    courseTaskUrl: Object(_helpers_assignments_common_functions__WEBPACK_IMPORTED_MODULE_6__["getBaseCourseViewerEmailUrl"])(courseViewerUrl) + "?courseId=" + selectedCourse.id + "&module=" + moduleTask + "&taskId=" + task.id
                                });
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "checkBox" + (emailInfo.data.find(function (t) { return t.taskName === task.name; }) ? " checked" : "") })));
                });
            }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "not-submitted-users taskContainer" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "align-horizontal remind-assignment" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "horizontalItem top pull-right" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn", disabled: emailInfo.emailSendInProgress, onClick: function () {
                            if (emailInfo.data.length > 0) {
                                sendReminder();
                            }
                            else {
                                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["showError"])(intl.formatMessage({ id: "teacherView.sendEmailAtLeastOneRecipientErr", defaultMessage: "At least one student should be selected" }));
                            }
                        } }, emailInfo.emailSendInProgress ?
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_5__["Spinner"], null),
                            intl.formatMessage({ id: "teacherView.emailReminderInProgress", defaultMessage: "Pågående" }))
                        :
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, intl.formatMessage({ id: "teacherView.remindBtn", defaultMessage: "Påminn" })))))));
}));


/***/ }),

/***/ "./src/components/teacher-view/assignments-view/helpers/assignments-common-functions.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/components/teacher-view/assignments-view/helpers/assignments-common-functions.tsx ***!
  \***********************************************************************************************/
/*! exports provided: setupAssignments, getBaseCourseViewerEmailUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupAssignments", function() { return setupAssignments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseCourseViewerEmailUrl", function() { return getBaseCourseViewerEmailUrl; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");


var setupAssignments = function (assignments, filterStudyGroups, tuitionStudents, checkWithUrkund) {
    var refreshableAssigments = Object.assign([], assignments);
    var studyGroups = filterStudyGroups.length > 0 && tuitionStudents.filter(function (gr) { return filterStudyGroups.includes(gr.tuitionGroupName); });
    var filteredAssignments = filterStudyGroups.length > 0 ?
        refreshableAssigments.filter(function (r) { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["flatten"])(studyGroups).find(function (sg) { return sg.studentEmailAddress === r.user; }); }) : refreshableAssigments;
    //determine which assignments should get data from urkund
    checkWithUrkund && filteredAssignments.length > 0 && filteredAssignments.forEach(function (a) {
        a.shouldRefresh = false;
        if (a.metadata &&
            a.metadata.urkundExternalId &&
            a.metadata.urkundExternalId.length > 0 && // Must have metadata.urkundExternalId Otherwise not possible to refresh
            !a.metadata.urkundUploadError && ( // Not possible to refresh if upload has failed
        !a.metadata.urkundLastPoll || // Never checked status yet
            (['Accepted', 'Submitted'].indexOf(JSON.parse(a.metadata.urkundResponse)[0].Status.State) >= 0 &&
                parseInt(a.metadata.urkundLastPoll) < moment__WEBPACK_IMPORTED_MODULE_0___default()().add(-15, "seconds").toDate().getTime()))) {
            a.shouldRefresh = true;
        }
    });
    return filteredAssignments;
};
function getBaseCourseViewerEmailUrl(configUrl) {
    var courseViewerUrl;
    try {
        var url = new URL(configUrl);
        courseViewerUrl = url.href;
    }
    catch (_a) {
        courseViewerUrl = window.location.origin + "/" + courseViewerUrl;
    }
    return courseViewerUrl;
}


/***/ }),

/***/ "./src/components/teacher-view/assignments-view/helpers/email-send-hoc.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/teacher-view/assignments-view/helpers/email-send-hoc.tsx ***!
  \*********************************************************************************/
/*! exports provided: setupEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupEmail", function() { return setupEmail; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");







function setupEmail(WrappedComponent) {
    return function (props) {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({ emailSendInProgress: false, data: [] }), 2), emailInfo = _a[0], setEmailInfo = _a[1];
        var intl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_4__["LanguageContext"]).intl;
        var setRecipients = function (recipient) { return setEmailInfo(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, emailInfo), { data: emailInfo.data.find(function (su) { return su.sendTo.email === recipient.sendTo.email && recipient.taskId === su.taskId; }) ?
                emailInfo.data.filter(function (u) { return u.sendTo.email !== recipient.sendTo.email || recipient.taskId !== u.taskId; }) : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(emailInfo.data, [recipient]) })); };
        function sendReminder() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                var client, res, _a, _b, err_1;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 4, , 5]);
                            client = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["env"].kedBackendClient.http;
                            setEmailInfo(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, emailInfo), { emailSendInProgress: true }));
                            return [4 /*yield*/, client.post("email/reminder", emailInfo.data)];
                        case 1:
                            res = _c.sent();
                            if (!(res.status !== 200)) return [3 /*break*/, 3];
                            setEmailInfo(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, emailInfo), { emailSendInProgress: false }));
                            _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["HttpError"].bind;
                            _b = [void 0, res.status];
                            return [4 /*yield*/, res.text()];
                        case 2: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["HttpError"], _b.concat([_c.sent()])))();
                        case 3:
                            setEmailInfo(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, emailInfo), { emailSendInProgress: false }));
                            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["showInfo"])(intl.formatMessage({ id: "teacherView.emailRemindersSentMsg", defaultMessage: "Reminders successfully sent" }));
                            return [3 /*break*/, 5];
                        case 4:
                            err_1 = _c.sent();
                            setEmailInfo(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, emailInfo), { emailSendInProgress: false }));
                            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["showError"])(err_1);
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { emailInfo: emailInfo, setEmailInfo: setRecipients, sendReminder: sendReminder }));
    };
}


/***/ }),

/***/ "./src/components/teacher-view/assignments-view/index.tsx":
/*!****************************************************************!*\
  !*** ./src/components/teacher-view/assignments-view/index.tsx ***!
  \****************************************************************/
/*! exports provided: AssignmentsContext, AssignmentsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsContext", function() { return AssignmentsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsView", function() { return AssignmentsView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _course_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-module */ "./src/components/teacher-view/assignments-view/course-module.tsx");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var _digest_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../digest-view */ "./src/components/teacher-view/digest-view.tsx");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _utility_components_extra_page_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility-components/extra-page-buttons */ "./src/components/utility-components/extra-page-buttons.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var kedbackend_observable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! kedbackend/observable */ "./kedbackend/observable.js");
/* harmony import */ var _filter_students_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter-students-view */ "./src/components/teacher-view/assignments-view/filter-students-view/index.tsx");












var AssignmentsContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({ filterStudyGroups: [], tuitionStudents: [] });
var AssignmentsView = (function () {
    var intl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"]).intl;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_digest_view__WEBPACK_IMPORTED_MODULE_4__["StateContext"]), tasks = _a.tasks, selectedCourse = _a.selectedCourse, edsSchool = _a.edsSchool, school = _a.school;
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({ selectedStudent: { label: null, value: null }, selectedStudyGroups: [] }), 2), filterData = _b[0], setFilteringData = _b[1];
    var defaultDescriptionMessage = "Här listas samtliga inlämningsuppgifter i din/dina kurser du handleder."
        + "Klicka till höger för att välja kurs. Kursens uppgifter syns nedan. Du kan öppna/dölja varje modul.";
    var tuitionStudents = selectedCourse && selectedCourse.studyGroups && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["flatten"])(Object(kedbackend_observable__WEBPACK_IMPORTED_MODULE_9__["parallel"])(selectedCourse.studyGroups.map(function (stGroup) { return function () { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_8__["env"].edsClient.suspense.getTuitionGroupStudents({
        schoolName: edsSchool,
        tuitionGroupName: stGroup
    }); }; })));
    var uniqueTuitionSelectDatasource = tuitionStudents ? Array.from(new Set(tuitionStudents.map(function (a) { return a.studentEmailAddress; })))
        .map(function (emailAddress) {
        var student = tuitionStudents.find(function (a) { return a.studentEmailAddress === emailAddress; });
        return { label: student.studentFirstName + " " + student.studentLastName, value: student.studentEmailAddress };
    }) : [];
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        " ",
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_extra_page_buttons__WEBPACK_IMPORTED_MODULE_6__["ExtraPageButtons"], null),
        selectedCourse ?
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AssignmentsContext.Provider, { value: { filterStudyGroups: filterData.selectedStudyGroups, tuitionStudents: tuitionStudents } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout sv-skip-spacer" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, intl.formatMessage({ id: "teacherView.assignmentsViewTitle", defaultMessage: "Inlämningsuppgifter" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, intl.formatMessage({ id: "teacherView.assignmentsViewDescription", defaultMessage: { defaultDescriptionMessage: defaultDescriptionMessage } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null,
                        selectedCourse.name,
                        "-",
                        selectedCourse.description),
                    selectedCourse.studyGroups && selectedCourse.studyGroups.length > 0 &&
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout sv-skip-spacer" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top pull-right study-group-filter" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_select__WEBPACK_IMPORTED_MODULE_5__["default"], { isDisabled: filterData.selectedStudent.value, isMulti: true, options: selectedCourse.studyGroups.map(function (sg) { return ({ label: sg, value: sg }); }), value: filterData.selectedStudyGroups.map(function (group) { return ({ label: group, value: group }); }), placeholder: intl.formatMessage({ id: "teacherView.filterByStudygroupsPlaceholder", defaultMessage: "Välj undervisningsgrupp" }), onChange: function (options) {
                                        setFilteringData(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, filterData), { selectedStudyGroups: options.map(function (_a) {
                                                var value = _a.value;
                                                return value;
                                            }) }));
                                    } })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top pull-right study-group-filter" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_select__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "basic-single", classNamePrefix: "select", options: uniqueTuitionSelectDatasource, value: filterData.selectedStudent.value ? { label: filterData.selectedStudent.label, value: filterData.selectedStudent.value } : null, isClearable: true, placeholder: intl.formatMessage({ id: "teacherView.filterByStudent", defaultMessage: "Välj student" }), onChange: function (options) {
                                        setFilteringData({ selectedStudyGroups: [], selectedStudent: options ? options : { label: null, value: null } });
                                    } }))),
                    filterData.selectedStudent.value ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_filter_students_view__WEBPACK_IMPORTED_MODULE_10__["FilteredStudentView"], { selectedUser: filterData.selectedStudent.value }) :
                        selectedCourse.modules.map(function (module) {
                            var moduleTasks = tasks.filter(function (t) { return module.taskIds.find(function (tId) { return tId === t.id; }); });
                            return moduleTasks.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_module__WEBPACK_IMPORTED_MODULE_2__["CourseModuleView"], { tasks: moduleTasks, key: module.id, module: module }) : null;
                        })))
            : null);
});


/***/ }),

/***/ "./src/components/teacher-view/assignments-view/task-assignment.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/teacher-view/assignments-view/task-assignment.tsx ***!
  \**************************************************************************/
/*! exports provided: TaskAssignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAssignment", function() { return TaskAssignment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _course_viewer_course_page_task_assignments_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../course-viewer/course-page/task-assignments-utils */ "./src/components/course-viewer/course-page/task-assignments-utils.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _digest_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../digest-view */ "./src/components/teacher-view/digest-view.tsx");









var TaskAssignment = (function (_a) {
    var assignment = _a.assignment, shouldGetUrkundStatus = _a.shouldGetUrkundStatus, task = _a.task, studentView = _a.studentView, isNewAssignment = _a.isNewAssignment;
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(assignment), 2), assignmentsWithStatus = _b[0], setAssignmentStatus = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_digest_view__WEBPACK_IMPORTED_MODULE_7__["StateContext"]), school = _c.school, selectedCourse = _c.selectedCourse;
    function refreshAssignment(assignment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var client, user, filename, req, _a, _b, resJson, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        client = _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["env"].kedBackendClient.http;
                        user = assignment.user, filename = assignment.filename;
                        return [4 /*yield*/, setAssignmentStatus(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, assignment), { isRefreshing: true }))];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 8, , 10]);
                        return [4 /*yield*/, client.get("assignments/urkund/" + school + "/" + selectedCourse.id + "/" + task.id + "/" + user + "/" + filename)];
                    case 3:
                        req = _c.sent();
                        if (!(req.status >= 400)) return [3 /*break*/, 5];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["HttpError"].bind;
                        _b = [void 0, req.status];
                        return [4 /*yield*/, req.text()];
                    case 4: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["HttpError"], _b.concat([_c.sent()])))();
                    case 5: return [4 /*yield*/, req.text()];
                    case 6:
                        resJson = _c.sent();
                        return [4 /*yield*/, setAssignmentStatus(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, assignment), { isRefreshing: false, metadata: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, assignment.metadata), { urkundResponse: resJson }) }))];
                    case 7:
                        _c.sent();
                        return [3 /*break*/, 10];
                    case 8:
                        e_1 = _c.sent();
                        return [4 /*yield*/, setAssignmentStatus(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, assignment), { isRefreshing: false, refreshError: e_1 }))];
                    case 9:
                        _c.sent();
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    }
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (shouldGetUrkundStatus) {
            setAssignmentStatus(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, assignment), { isRefreshing: true }));
            refreshAssignment(assignment);
        }
    }, [shouldGetUrkundStatus, assignment]);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: assignmentsWithStatus.mediaLink, className: isNewAssignment ? "newAssignment" : "", style: assignmentsWithStatus.metadata.$meta ? { opacity: 0.5 } : {} },
        studentView ?
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, task.name)
            :
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "mailto:" + assignmentsWithStatus.user }, assignmentsWithStatus.metadata.userDisplayName || assignmentsWithStatus.user)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, assignmentsWithStatus.metadata.driveFileId ?
            // The file can be edited on drive. Link to editing it.
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_viewer_course_page_task_assignments_utils__WEBPACK_IMPORTED_MODULE_3__["DriveFileListing"], { file: assignmentsWithStatus }) :
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "#", onClick: function (ev) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    Object(_course_viewer_course_page_task_assignments_utils__WEBPACK_IMPORTED_MODULE_3__["downloadFile"])(assignmentsWithStatus);
                } }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["maxLength"])(assignmentsWithStatus.filename, 32))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "assignment-date-col" }, moment__WEBPACK_IMPORTED_MODULE_2___default()(assignmentsWithStatus.uploadDate).format('YYYY-MM-DD HH:mm')),
        Object(_course_viewer_course_page_task_assignments_utils__WEBPACK_IMPORTED_MODULE_3__["getUrkundStatus"])(assignmentsWithStatus, refreshAssignment, shouldGetUrkundStatus));
});


/***/ }),

/***/ "./src/components/teacher-view/courses-view/index.tsx":
/*!************************************************************!*\
  !*** ./src/components/teacher-view/courses-view/index.tsx ***!
  \************************************************************/
/*! exports provided: CoursesView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesView", function() { return CoursesView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _shared_notification_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/notification-icon */ "./src/components/teacher-view/shared/notification-icon.tsx");
/* harmony import */ var _digest_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../digest-view */ "./src/components/teacher-view/digest-view.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");







var CoursesView = (function (_a) {
    var courseBuilderUrl = _a.courseBuilderUrl;
    var intl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_2__["LanguageContext"]).intl;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_digest_view__WEBPACK_IMPORTED_MODULE_5__["StateContext"]), notificationdigests = _b.notificationdigests, teacherCourses = _b.teacherCourses, selectedCourse = _b.selectedCourse;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "ked_boxed" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, intl.formatMessage({ id: "teacherView.coursesViewTitle", defaultMessage: "Mina kurser/ uppgifter" })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "taskContainer odd-even" }, teacherCourses.map(function (course) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { key: course.id + course.code, className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "teacherSchoolCourse" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "horizontalItem top pull-right" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { target: "_blank", href: Object(_access_control__WEBPACK_IMPORTED_MODULE_3__["preserveImpersonationQuery"])(courseBuilderUrl, {}) + "#/courses/" + course.id + "/edit", className: "editItem" })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "horizontalItem top" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification-container" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { key: "linkCourse_" + course.id, className: selectedCourse && selectedCourse.id === course.id ? "selected" : "", to: "/overview/course/" + course.id + "/assignments" },
                                    course.name,
                                    " - ",
                                    course.description),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_notification_icon__WEBPACK_IMPORTED_MODULE_4__["NotificationIcon"], { key: "notifictiona_" + course.id, notificationdigests: notificationdigests, entity: 'course', course: course })))));
            }))),
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["env"].currentUser.roles.includes("ADMIN") && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/admin/emailtemplate" }, "Manage Email Template"));
});


/***/ }),

/***/ "./src/components/teacher-view/digest-view.tsx":
/*!*****************************************************!*\
  !*** ./src/components/teacher-view/digest-view.tsx ***!
  \*****************************************************/
/*! exports provided: StateContext, DigestView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateContext", function() { return StateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigestView", function() { return DigestView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _course_builder_ks_common_two_columns_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course-builder-ks/common/two-columns-page */ "./src/components/course-builder-ks/common/two-columns-page.tsx");
/* harmony import */ var _assignments_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignments-view */ "./src/components/teacher-view/assignments-view/index.tsx");
/* harmony import */ var _courses_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./courses-view */ "./src/components/teacher-view/courses-view/index.tsx");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../course-builder/sub-components/ellipsis-loader */ "./src/components/course-builder/sub-components/ellipsis-loader.tsx");
/* harmony import */ var _utility_components_with_observe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utility-components/with-observe */ "./src/components/utility-components/with-observe.tsx");













var contextInitialValue = { notificationdigests: {}, selectedCourse: null, teacherCourses: [], seenDigestsObservable: [], school: "", edsSchool: "", tasks: [], courseViewerUrl: "", cachedAssignments: [] };
var StateContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(contextInitialValue);
var DigestView = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(_utility_components_with_observe__WEBPACK_IMPORTED_MODULE_11__["withObserve"])((function (_a) {
    var _b;
    var match = _a.match, courseBuilderUrl = _a.courseBuilderUrl, courseViewerUrl = _a.courseViewerUrl;
    var courseId = match ? match.params.courseId : null;
    var courseId = courseId ? courseId : null;
    var myCourses = [];
    var school = _globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].schools.tags("gymnasium").name(_globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["env"].currentUser.school).include("courses").single().read();
    var schoolCourses = school ? school.courses : [];
    if (schoolCourses) {
        var me_1 = _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["env"].currentUser.mail;
        schoolCourses.forEach(function (course) {
            if (course.modules.length > 0) {
                if (course.activatedBy && course.activatedBy.url == me_1) {
                    myCourses.push(course);
                }
                else if (course.responsibleTeachers.filter(function (t) { return t.url == me_1; }).length > 0) {
                    myCourses.push(course);
                }
            }
        });
    }
    myCourses = myCourses.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["compareProps"])(["name", "dateTime"]));
    var tasks = myCourses ? _globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].tasks.hasEdgesFrom(myCourses.map(function (c) { return c.id; })).toValue().read() : [];
    var taskAssignments = tasks.filter(function (task) { return task.assignment === true; });
    var schoolName = school.name;
    var courseIds = myCourses.map(function (e) { return e.id; }).join(',');
    var selectedCourse = myCourses.find(function (c) { return c.id === courseId; });
    var assignments = {};
    if (courseIds.length > 0) {
        var res = _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["env"].kedBackendClient.http.suspenseGet("assignments/notificationdigests", {
            school: schoolName,
            courseIds: courseIds
        });
        if (res.status !== 200) {
            throw new kedbackend_client__WEBPACK_IMPORTED_MODULE_8__["HttpError"](res.status, res.text());
        }
        assignments = res.json();
    }
    var digestArray = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_8__["simpleDigestSuspense"])(myCourses.map(function (course) { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["env"].currentUser.mail + course.id; }));
    var seenDigestsObservable = digestArray.length > 0 ?
        (_b = _globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].seenStudentAssignments).tags.apply(_b, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(digestArray)).toValue().read() : [];
    var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(seenDigestsObservable), 2), newAssignments = _c[0], setNewAssignments = _c[1];
    var contextValue = {
        notificationdigests: assignments,
        selectedCourse: selectedCourse,
        teacherCourses: myCourses,
        seenDigestsObservable: seenDigestsObservable,
        school: schoolName,
        edsSchool: school.edsSchoolNameGymn,
        tasks: taskAssignments,
        courseViewerUrl: courseViewerUrl,
        cachedAssignments: newAssignments
    };
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StateContext.Provider, { value: contextValue },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_ks_common_two_columns_page__WEBPACK_IMPORTED_MODULE_3__["TwoColumnsPage"], { left: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_10__["TimeoutEllipsisLoader"], null) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_assignments_view__WEBPACK_IMPORTED_MODULE_4__["AssignmentsView"], { key: selectedCourse ? selectedCourse.id : "" })), right: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_view__WEBPACK_IMPORTED_MODULE_5__["CoursesView"], { courseBuilderUrl: courseBuilderUrl }), rightWidth: 5 }));
})));


/***/ }),

/***/ "./src/components/teacher-view/email-templates/index.tsx":
/*!***************************************************************!*\
  !*** ./src/components/teacher-view/email-templates/index.tsx ***!
  \***************************************************************/
/*! exports provided: EmailTemplates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplates", function() { return EmailTemplates; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility-components/wysiwyg */ "./src/components/utility-components/wysiwyg/index.tsx");
/* harmony import */ var _globals_current_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globals/current-user */ "./src/globals/current-user.ts");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utility_components_with_observe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utility-components/with-observe */ "./src/components/utility-components/with-observe.tsx");









var EmailTemplates = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(_utility_components_with_observe__WEBPACK_IMPORTED_MODULE_8__["withObserve"])(function (_a) {
    var match = _a.match;
    var currentUser = Object(_globals_current_user__WEBPACK_IMPORTED_MODULE_4__["getCurrentUser"])();
    var writeAccess = currentUser.roles.includes("ADMIN");
    var emailParams = ["[FirstName]", "[LastName]", "[CourseName]", "[ModuleName]", "[TaskName]", "[TaskDeadline]", "[TeacherName]", "[TaskUrl]"];
    var emailTemplate = _globals_db__WEBPACK_IMPORTED_MODULE_5__["db"].emailTemplates.tags("email-type: assignment-reminder").single({ onZero: function () { } }).read();
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(emailTemplate ? { content: emailTemplate.content, subject: emailTemplate.subject } : { content: "", subject: "" }), 2), emaiTemplateContent = _b[0], setEmailContent = _b[1];
    function saveTemplate() {
        var regexContentResult = emaiTemplateContent.content.match(/\[(.*?)\]/gm);
        var regexSubjectResult = emaiTemplateContent.subject.match(/\[(.*?)\]/gm);
        var checkContentUsedParamsOk = true;
        var checkSubjectUsedParamsOk = true;
        checkContentUsedParamsOk = regexContentResult != null && regexContentResult.every(function (item) {
            return emailParams.indexOf(item) !== -1;
        });
        checkSubjectUsedParamsOk = regexSubjectResult != null && regexSubjectResult.every(function (item) {
            return emailParams.indexOf(item) !== -1;
        });
        if (checkContentUsedParamsOk && checkSubjectUsedParamsOk) {
            try {
                emailTemplate ?
                    _globals_db__WEBPACK_IMPORTED_MODULE_5__["db"].emailTemplates.update(emailTemplate, { content: emaiTemplateContent.content, subject: emaiTemplateContent.subject })
                    :
                        _globals_db__WEBPACK_IMPORTED_MODULE_5__["db"].emailTemplates.add({
                            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["createUUID"])(),
                            tags: ["email-type: assignment-reminder"],
                            content: emaiTemplateContent.content,
                            subject: emaiTemplateContent.subject
                        });
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["showInfo"])("Template successfully saved");
            }
            catch (err) {
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["showError"])(err);
            }
        }
        else {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["showError"])("Invalid parameters were used in template. Please use only the specified ones and try again.");
        }
    }
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "ked_boxed" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Email reminder template"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "subHeader" }, "(Compose the email template. Possible parameters are: " + emailParams.join(",") + ")"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { placeholder: "Subject", value: emaiTemplateContent.subject, className: "inputTextBox inputTextSmall", onChange: function (ev) { return setEmailContent(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, emaiTemplateContent), { subject: ev.target.value })); } }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_3__["Wysiwyg"], { actions: [
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
                    "image"
                ], readOnly: !writeAccess, html: emaiTemplateContent.content, onChange: function (html) { return setEmailContent(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, emaiTemplateContent), { content: html })); } }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { className: "btn", onClick: function () { saveTemplate(); } }, "Submit")));
}));


/***/ }),

/***/ "./src/components/teacher-view/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/teacher-view/index.tsx ***!
  \***********************************************/
/*! exports provided: TeacherViewApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherViewApp", function() { return TeacherViewApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../course-builder/sub-components/ellipsis-loader */ "./src/components/course-builder/sub-components/ellipsis-loader.tsx");
/* harmony import */ var _digest_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./digest-view */ "./src/components/teacher-view/digest-view.tsx");
/* harmony import */ var _email_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-templates */ "./src/components/teacher-view/email-templates/index.tsx");
/* harmony import */ var _utils_error_success_feedback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/error-success-feedback */ "./src/utils/error-success-feedback.tsx");
/* harmony import */ var _utility_components_with_observe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility-components/with-observe */ "./src/components/utility-components/with-observe.tsx");







var TeacherViewApp = Object(_utility_components_with_observe__WEBPACK_IMPORTED_MODULE_6__["withObserve"])(function (_a) {
    var courseBuilderUrl = _a.courseBuilderUrl, viewCourseUrl = _a.viewCourseUrl;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "teacher-view" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/", exact: true, render: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: "/overview" }); } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/overview/(course)?/:courseId?/(assignments)?", render: function () {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_2__["TimeoutEllipsisLoader"], null) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_digest_view__WEBPACK_IMPORTED_MODULE_3__["DigestView"], { courseBuilderUrl: courseBuilderUrl, courseViewerUrl: viewCourseUrl }));
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/admin/emailtemplate", render: function () {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_2__["TimeoutEllipsisLoader"], null) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_email_templates__WEBPACK_IMPORTED_MODULE_4__["EmailTemplates"], null));
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_error_success_feedback__WEBPACK_IMPORTED_MODULE_5__["ErrorSuccessFeedback"], null)));
});


/***/ }),

/***/ "./src/components/teacher-view/shared/notification-icon.tsx":
/*!******************************************************************!*\
  !*** ./src/components/teacher-view/shared/notification-icon.tsx ***!
  \******************************************************************/
/*! exports provided: NotificationIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationIcon", function() { return NotificationIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _digest_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../digest-view */ "./src/components/teacher-view/digest-view.tsx");
/* harmony import */ var _utility_components_with_observe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility-components/with-observe */ "./src/components/utility-components/with-observe.tsx");



var NotificationIcon = Object(_utility_components_with_observe__WEBPACK_IMPORTED_MODULE_2__["withObserve"])(function (_a) {
    var course = _a.course, entity = _a.entity, moduleId = _a.moduleId, taskId = _a.taskId, notificationdigests = _a.notificationdigests;
    var seenDigestsObservable = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_digest_view__WEBPACK_IMPORTED_MODULE_1__["StateContext"]).seenDigestsObservable;
    var notifications = 0;
    var courseNotifications = notificationdigests[course.id];
    if (courseNotifications) {
        if (entity === 'course') {
            course.modules.forEach(function (cmod) {
                cmod.taskIds.forEach(function (courseTask) {
                    notifications += getTaskNotifications(courseNotifications[courseTask]);
                });
            });
        }
        else if (entity === 'module') {
            var currentModule = course.modules.find(function (m) { return m.id == moduleId; });
            currentModule && currentModule.taskIds.forEach(function (courseTask) {
                notifications += getTaskNotifications(courseNotifications[courseTask]);
            });
        }
        else if (entity === 'task') {
            notifications += getTaskNotifications(courseNotifications[taskId]);
        }
    }
    function getTaskNotifications(taskAssignments) {
        if (taskAssignments) {
            return taskAssignments.filter(function (t) { return !seenDigestsObservable.find(function (d) { return d.digest === t.digest; }); }).length;
        }
        return 0;
    }
    return notifications > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification-icon" }, notifications);
});


/***/ })

}]);
//# sourceMappingURL=TeacherViewApp.js.map