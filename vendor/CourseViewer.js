(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["CourseViewer"],{

/***/ "./src/apis/google-classroom.ts":
/*!**************************************!*\
  !*** ./src/apis/google-classroom.ts ***!
  \**************************************/
/*! exports provided: GoogleClassroom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleClassroom", function() { return GoogleClassroom; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _google_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-client */ "./src/apis/google-client.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");



var GoogleClassroom = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GoogleClassroom, _super);
    function GoogleClassroom() {
        return _super.call(this, { discoveryDocs: 'https://classroom.googleapis.com/$discovery/rest?version=v1' }) || this;
    }
    GoogleClassroom.prototype.reclaimSubmission = function (submission) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, gapi.client.classroom.courses.courseWork.studentSubmissions
                                .reclaim({
                                courseId: submission.courseId,
                                courseWorkId: submission.courseWorkId,
                                id: submission.id
                            })
                                .then(function (resp) { return resp.result; })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    GoogleClassroom.prototype.handInSubmission = function (submission) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, gapi.client.classroom.courses.courseWork.studentSubmissions
                                .turnIn({
                                courseId: submission.courseId,
                                courseWorkId: submission.courseWorkId,
                                id: submission.id
                            })
                                .then(function (resp) { return resp.result; })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    GoogleClassroom.prototype.returnSubmission = function (submission) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, gapi.client.classroom.courses.courseWork.studentSubmissions
                                .return({
                                courseId: submission.courseId,
                                courseWorkId: submission.courseWorkId,
                                id: submission.id
                            })
                                .then(function (resp) { return resp.result; })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    GoogleClassroom.prototype.getSubmissions = function (courseId, taskId, isTeacher, hasTemplate) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var classrooms, submissions, allSubmissions, updatedSubmissions_1, courseWork, newSubmissions, templateFile;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getClassrooms(courseId)];
                    case 2:
                        classrooms = _a.sent();
                        submissions = [];
                        if (!isTeacher) return [3 /*break*/, 5];
                        return [4 /*yield*/, Promise.all(classrooms.map(function (classroom, i) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var courseWork, students;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.getCourseWork(classroom.id, taskId, false)];
                                        case 1:
                                            courseWork = _a.sent();
                                            return [4 /*yield*/, this.getStudents(classroom.id)];
                                        case 2:
                                            students = _a.sent();
                                            classrooms[i].courseWork = courseWork;
                                            classrooms[i].students = students;
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 3:
                        _a.sent();
                        classrooms = classrooms.filter(function (cr) { return !!cr.courseWork; });
                        return [4 /*yield*/, Promise.all(classrooms.map(function (classroom, i) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.getStudentSubmissions(classroom.id, classroom.courseWork.id, false)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); }))];
                    case 4:
                        allSubmissions = _a.sent();
                        updatedSubmissions_1 = [];
                        allSubmissions.map(function (subs, i) {
                            var group = classrooms[i].room.split("|")[1];
                            var crLink = classrooms[i].courseWork.alternateLink;
                            var students = classrooms[i].students;
                            var newsubs = subs.map(function (sub) {
                                var student = students.filter(function (s) { return s.userId == sub.userId; })[0];
                                console.log(student);
                                if (!student) {
                                    student.name = { firstName: 'Förnamn', lastName: 'Efternamn' };
                                }
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, student), sub), { group: group, crLink: crLink });
                            });
                            updatedSubmissions_1.push.apply(updatedSubmissions_1, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(newsubs));
                        });
                        submissions.push.apply(submissions, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(updatedSubmissions_1));
                        console.table(submissions);
                        return [3 /*break*/, 8];
                    case 5: return [4 /*yield*/, this.getCourseWork(classrooms[0].id, taskId)];
                    case 6:
                        courseWork = _a.sent();
                        return [4 /*yield*/, this.getStudentSubmissions(courseWork.courseId, courseWork.id, true)];
                    case 7:
                        newSubmissions = _a.sent();
                        submissions.push.apply(submissions, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(newSubmissions.map(function (sub) {
                            sub.userEmail = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["env"].currentUser.mail;
                            return sub;
                        })));
                        _a.label = 8;
                    case 8:
                        if (hasTemplate) {
                            templateFile = isTeacher
                                ? classrooms[0].courseWork.materials[0].driveFile.driveFile
                                : submissions[0].assignmentSubmission.attachments[0].driveFile;
                            return [2 /*return*/, {
                                    submissions: submissions,
                                    templateFile: templateFile.alternateLink,
                                    templateThumbnail: templateFile.thumbnailUrl,
                                    templateTitle: templateFile.title
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    submissions: submissions
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GoogleClassroom.prototype.addFilesToSubmission = function (classroomId, courseWorkId, submissionId, files) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, gapi.client.classroom.courses.courseWork.studentSubmissions.modifyAttachments({
                                courseId: classroomId,
                                courseWorkId: courseWorkId,
                                id: submissionId,
                                addAttachments: files.map(function (file) {
                                    return { driveFile: { id: file.fileId } };
                                })
                            }).then(function (resp) { return console.log(resp); })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GoogleClassroom.prototype.getUser = function (userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, gapi.client.classroom.userProfiles
                            .get({
                            userId: userId
                        })
                            .then(function (resp) {
                            var name = resp.result.name;
                            return {
                                name: { firstName: name.givenName, lastName: name.familyName },
                                userEmail: resp.result.emailAddress
                            };
                        })];
                    case 1:
                        result = _a.sent();
                        if (result.name)
                            return [2 /*return*/, result];
                        throw "Användare inte hittad";
                }
            });
        });
    };
    GoogleClassroom.prototype.getClassrooms = function (courseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, gapi.client.classroom.courses
                            .list({
                            fields: "courses.id,courses.room,courses.descriptionHeading",
                            courseStates: "ACTIVE"
                        })
                            .then(function (resp) {
                            return resp.result.courses.filter(function (cr) { return cr.room && cr.room.indexOf(courseId) > -1; });
                        })];
                    case 1:
                        result = _a.sent();
                        if (result.length > 0)
                            return [2 /*return*/, result];
                        throw "Inte registrerad på kurs";
                }
            });
        });
    };
    GoogleClassroom.prototype.getStudents = function (classroomId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, gapi.client.classroom.courses.students.list({
                            courseId: classroomId,
                            fields: "students.userId,students.profile.name,students.profile.emailAddress"
                        }).then(function (resp) { return resp.result.students.map(function (user) {
                            return {
                                userId: user.userId,
                                name: { firstName: user.profile.name.givenName, lastName: user.profile.name.familyName },
                                userEmail: user.profile.emailAddress
                            };
                        }); })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    GoogleClassroom.prototype.getCourseWork = function (classroomId, taskId, throwError) {
        if (throwError === void 0) { throwError = true; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, gapi.client.classroom.courses.courseWork
                            .list({
                            courseId: classroomId,
                            fields: "courseWork.courseId,courseWork.alternateLink,courseWork.id,courseWork.materials,courseWork.description,courseWork.workType,courseWork.dueDate,courseWork.dueTime"
                        })
                            .then(function (resp) { return resp.result.courseWork ? resp.result.courseWork.filter(function (cw) { return cw.description.indexOf(taskId) > -1; }) : []; })];
                    case 1:
                        result = _a.sent();
                        if (result.length == 1)
                            return [2 /*return*/, result[0]];
                        if (throwError)
                            throw "Hittar ingen matchad inlämningsuppgift";
                        return [2 /*return*/];
                }
            });
        });
    };
    GoogleClassroom.prototype.getStudentSubmissions = function (classroomId, courseWorkId, throwError) {
        if (throwError === void 0) { throwError = true; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, gapi.client.classroom.courses.courseWork.studentSubmissions
                            .list({
                            courseId: classroomId,
                            courseWorkId: courseWorkId
                        })
                            .then(function (resp) { return resp.result.studentSubmissions; })];
                    case 1:
                        result = _a.sent();
                        if (result)
                            return [2 /*return*/, result];
                        if (throwError)
                            throw "Hittar ingen matchad inlämning";
                        return [2 /*return*/];
                }
            });
        });
    };
    return GoogleClassroom;
}(_google_client__WEBPACK_IMPORTED_MODULE_1__["GoogleClient"]));



/***/ }),

/***/ "./src/components/course-viewer/course-page/classroom-assignments.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/course-viewer/course-page/classroom-assignments.tsx ***!
  \****************************************************************************/
/*! exports provided: ClassroomAssignments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassroomAssignments", function() { return ClassroomAssignments; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _apis_google_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../apis/google-picker */ "./src/apis/google-picker.ts");
/* harmony import */ var _apis_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../apis/buttons */ "./src/apis/buttons.tsx");
/* harmony import */ var _apis_google_drive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../apis/google-drive */ "./src/apis/google-drive.ts");
/* harmony import */ var _apis_google_classroom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../apis/google-classroom */ "./src/apis/google-classroom.ts");
/* harmony import */ var _subcomponents_classroom_assignments_listing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../subcomponents/classroom-assignments-listing */ "./src/components/course-viewer/subcomponents/classroom-assignments-listing.tsx");
/* harmony import */ var _subcomponents_task_fileview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../subcomponents/task-fileview */ "./src/components/course-viewer/subcomponents/task-fileview.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);














var ClassroomAssignments = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClassroomAssignments, _super);
    function ClassroomAssignments(props) {
        var _this = _super.call(this, props) || this;
        _this.drive = new _apis_google_drive__WEBPACK_IMPORTED_MODULE_9__["GoogleDrive"]();
        _this.classroom = new _apis_google_classroom__WEBPACK_IMPORTED_MODULE_10__["GoogleClassroom"]();
        _this.state = {
            assignment: null,
            assignments: null,
            loading: true,
            loadingMessage: "Laddar inlämning..."
        };
        return _this;
    }
    ClassroomAssignments.prototype.setStatePromised = function (cb) {
        var _this = this;
        return new Promise(function (resolve) { return _super.prototype.setState.call(_this, cb, resolve); });
    };
    ClassroomAssignments.prototype.componentDidMount = function () {
        this.load();
    };
    ClassroomAssignments.prototype.componentWillReceiveProps = function (nextProps) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(nextProps.task.id !== this.props.task.id ||
                            nextProps.course.id !== this.props.course.id)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.setStatePromised(function () { return ({
                                assignment: null,
                                loading: true
                            }); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.load()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ClassroomAssignments.prototype.update = function (assignments, assignment) {
        var retval = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([
            assignment
        ], assignments.filter(function (_a) {
            var user = _a.user, filename = _a.filename;
            return user !== assignment.user || filename !== assignment.filename;
        }));
        return retval;
    };
    ClassroomAssignments.prototype.load = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, taskId, templateFile, _b, courseId, school, teacherAtSchool, res, submissions_1, refreshableAssigments_1, assignments, error_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        _a = this.props.task, taskId = _a.id, templateFile = _a.templateFile;
                        _b = this.props.course, courseId = _b.id, school = _b.school;
                        teacherAtSchool = Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["isTeacherAtSchool"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser, school);
                        return [4 /*yield*/, this.classroom.getSubmissions(courseId, taskId, teacherAtSchool, !!templateFile)];
                    case 1:
                        res = _c.sent();
                        submissions_1 = res.submissions;
                        refreshableAssigments_1 = [];
                        return [4 /*yield*/, (teacherAtSchool
                                ? _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.http.get("assignments/" + school + "/" + courseId + "/" + taskId)
                                : _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.http.get("assignments/" + school + "/" + courseId + "/" + taskId + "/" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail))
                                .then(function (resp) {
                                if (resp.ok)
                                    return resp.json();
                                return [];
                            })
                                .then(function (res) {
                                return res.map(function (assignment) {
                                    var e_1, _a;
                                    if (!assignment.metadata || !assignment.metadata.driveFileId)
                                        return assignment;
                                    var urkundResponse = assignment.metadata.urkundResponse
                                        ? JSON.parse(assignment.metadata.urkundResponse)
                                        : false;
                                    // urkund
                                    if (!assignment.metadata.urkundUploadError && // Not possible to refresh if upload has failed
                                        (!assignment.metadata.urkundLastPoll || // Never checked status yet
                                            (urkundResponse &&
                                                urkundResponse[0].Status.State &&
                                                ["Accepted", "Submitted"].indexOf(urkundResponse[0].Status.State) >= 0 &&
                                                parseInt(assignment.metadata.urkundLastPoll) <
                                                    moment__WEBPACK_IMPORTED_MODULE_13___default()()
                                                        .add(-15, "seconds")
                                                        .toDate()
                                                        .getTime()))
                                    // Checked status for a long time ago
                                    )
                                        refreshableAssigments_1.push(assignment);
                                    // add submission data
                                    var submission = submissions_1.filter(function (sub) { return sub.userEmail == assignment.user; });
                                    var _loop_1 = function (sub) {
                                        if (!sub.assignmentSubmission.attachments)
                                            return "continue";
                                        sub.assignmentSubmission.attachments.forEach(function (attachment) {
                                            if (attachment.driveFile.id == assignment.metadata.driveFileId) {
                                                assignment.inClassroom = true;
                                                assignment.submissionId = sub.id;
                                            }
                                        });
                                    };
                                    try {
                                        for (var submission_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(submission), submission_1_1 = submission_1.next(); !submission_1_1.done; submission_1_1 = submission_1.next()) {
                                            var sub = submission_1_1.value;
                                            _loop_1(sub);
                                        }
                                    }
                                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                    finally {
                                        try {
                                            if (submission_1_1 && !submission_1_1.done && (_a = submission_1.return)) _a.call(submission_1);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                    }
                                    return assignment;
                                });
                            })];
                    case 2:
                        assignments = _c.sent();
                        res.submissions = submissions_1;
                        this.setState({
                            error: null,
                            loading: false,
                            assignments: assignments,
                            assignment: res
                        });
                        if (!teacherAtSchool) return [3 /*break*/, 4];
                        return [4 /*yield*/, Promise.all(refreshableAssigments_1.map(function (a) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.refreshAssignment(a)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); }))];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _c.sent();
                        this.setState({
                            loading: false,
                            error: "Kunde inte ladda inl\u00E4mningsuppgifter",
                            assignment: null
                        });
                        console.error(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ClassroomAssignments.prototype.verifyAndUpload = function (file, driveFile, user, name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!file)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.upload(file, driveFile, user, name)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.load()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ClassroomAssignments.prototype.upload = function (file, driveFile, user, name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, taskId, sendToUrkund, _b, courseId, school, body, queryParams, res, _c, _d;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this.props.task, taskId = _a.id, sendToUrkund = _a.sendToUrkund;
                        _b = this.props.course, courseId = _b.id, school = _b.school;
                        body = new FormData();
                        body.append("files", file);
                        queryParams = {
                            userDisplayName: name,
                            verifyWithUrkund: sendToUrkund === undefined ? true : sendToUrkund
                        };
                        if (driveFile) {
                            queryParams = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, queryParams), { driveFileId: driveFile.fileId, driveFileUrl: driveFile.url, driveFileIconUrl: driveFile.iconUrl });
                        }
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.http.fetch("assignments/" + school + "/" + courseId + "/" + taskId + "/" + user, "put", {}, queryParams, {
                                body: body
                            })];
                    case 1:
                        res = _e.sent();
                        if (!(res.status !== 200)) return [3 /*break*/, 3];
                        _c = kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["HttpError"].bind;
                        _d = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_c.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["HttpError"], _d.concat([_e.sent()])))();
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClassroomAssignments.prototype.reclaimSubmission = function (submission) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!confirm("Är du säker på att du vill återta uppgiften?"))
                            return [2 /*return*/];
                        this.setState({ loading: true, loadingMessage: "Återtar inlämning..." });
                        return [4 /*yield*/, this.classroom.reclaimSubmission(submission)];
                    case 1:
                        _a.sent();
                        // should we check for erorrs etc?
                        return [4 /*yield*/, this.load()];
                    case 2:
                        // should we check for erorrs etc?
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClassroomAssignments.prototype.handInSubmission = function (submission, onlyKedBackend) {
        if (onlyKedBackend === void 0) { onlyKedBackend = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!confirm("Är du säker på att du vill lämna in?"))
                            return [2 /*return*/];
                        this.setState({ loading: true, loadingMessage: "Lämnar in uppgiften..." });
                        // send files to urkund via kedbackend
                        if (this.props.task.sendToUrkund) {
                            this.sendSubmissionToKedBackend(submission, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.displayName);
                        }
                        if (!!onlyKedBackend) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.classroom.handInSubmission(submission)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: 
                    // if additional files these have to be added before handing in
                    // should we check for erorrs etc?
                    return [4 /*yield*/, this.load()];
                    case 3:
                        // if additional files these have to be added before handing in
                        // should we check for erorrs etc?
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClassroomAssignments.prototype.sendSubmissionToKedBackend = function (submission, name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var assignmentFiles, driveFiles, urkundFiles;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assignmentFiles = submission.assignmentSubmission.attachments.map(function (sub) {
                            return sub.driveFile;
                        });
                        return [4 /*yield*/, Promise.all(assignmentFiles.map(function (file) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var driveFile;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.drive.getFile(file.id)];
                                        case 1:
                                            driveFile = _a.sent();
                                            return [2 /*return*/, driveFile];
                                    }
                                });
                            }); }))];
                    case 1:
                        driveFiles = _a.sent();
                        return [4 /*yield*/, Promise.all(driveFiles.map(function (file) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var selectedFile, urkundFile;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            selectedFile = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, file), { canExport: file.mimeType.includes("google-apps") });
                                            return [4 /*yield*/, this.drive.downloadFile({
                                                    file: selectedFile,
                                                    mimeType: "text/plain"
                                                })];
                                        case 1:
                                            urkundFile = _a.sent();
                                            return [2 /*return*/, { file: selectedFile, data: urkundFile }];
                                    }
                                });
                            }); }))];
                    case 2:
                        urkundFiles = _a.sent();
                        // send to kedbackend
                        return [4 /*yield*/, Promise.all(urkundFiles.map(function (file) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.verifyAndUpload(file.data, file.file, submission.userEmail, name)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 3:
                        // send to kedbackend
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClassroomAssignments.prototype.addFilesToSubmission = function (submission, files) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({
                            loading: true,
                            loadingMessage: "Uppdaterar inlämning med nya filer..."
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.classroom.addFilesToSubmission(submission.courseId, submission.courseWorkId, submission.id, files)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        console.log(error_3);
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])("Du försökte lämna in en fil som du inte äger.");
                        return [3 /*break*/, 4];
                    case 4: return [4 /*yield*/, this.load()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClassroomAssignments.prototype.refreshAssignment = function (assignment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var client, _a, courseId, school, taskId, user, filename, req, _b, _c, resJson_1, e_2;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        client = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.http;
                        _a = this.props.course, courseId = _a.id, school = _a.school;
                        taskId = this.props.task.id;
                        user = assignment.user, filename = assignment.filename;
                        return [4 /*yield*/, this.setState(function (_a) {
                                var assignments = _a.assignments;
                                return ({
                                    assignments: _this.update(assignments, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, assignment), { isRefreshing: true }))
                                });
                            })];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 8, , 10]);
                        return [4 /*yield*/, client.get("assignments/urkund/" + school + "/" + courseId + "/" + taskId + "/" + user + "/" + filename)];
                    case 3:
                        req = _d.sent();
                        if (!(req.status >= 400)) return [3 /*break*/, 5];
                        _b = kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["HttpError"].bind;
                        _c = [void 0, req.status];
                        return [4 /*yield*/, req.text()];
                    case 4: throw new (_b.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["HttpError"], _c.concat([_d.sent()])))();
                    case 5: return [4 /*yield*/, req.text()];
                    case 6:
                        resJson_1 = _d.sent();
                        return [4 /*yield*/, this.setState(function (_a) {
                                var assignments = _a.assignments;
                                return ({
                                    assignments: _this.update(assignments, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, assignment), { isRefreshing: false, metadata: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, assignment.metadata), { urkundResponse: resJson_1 }) }))
                                });
                            })];
                    case 7:
                        _d.sent();
                        return [3 /*break*/, 10];
                    case 8:
                        e_2 = _d.sent();
                        return [4 /*yield*/, this.setState(function (_a) {
                                var assignments = _a.assignments;
                                return ({
                                    assignments: _this.update(assignments, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, assignment), { isRefreshing: false, refreshError: e_2 }))
                                });
                            })];
                    case 9:
                        _d.sent();
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ClassroomAssignments.prototype.teacherView = function () {
        var _a = this.state, assignment = _a.assignment, assignments = _a.assignments;
        var _b = this.props.task, sendToUrkund = _b.sendToUrkund, templateFile = _b.templateFile;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "H\u00E4r kan du som l\u00E4rare se inl\u00E4mnade arbeten"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_classroom_assignments_listing__WEBPACK_IMPORTED_MODULE_11__["SubmissionListings"], { sendToKedbackend: this.sendSubmissionToKedBackend.bind(this), assignments: assignments || [], submissions: assignment ? assignment.submissions : [], hasTemplate: !!templateFile, sendToUrkund: sendToUrkund, courseId: this.props.course.id, taskId: this.props.task.id })));
    };
    ClassroomAssignments.prototype.studentView = function () {
        var _this = this;
        var _a = this.props.task, sendToUrkund = _a.sendToUrkund, additionalUploads = _a.additionalUploads, templateFile = _a.templateFile;
        var _b = this.state, assignment = _b.assignment, assignments = _b.assignments, error = _b.error;
        if (assignment == undefined || assignment.submissions == undefined || assignment.submissions.length == 0) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Uppgift inte skapad i Classroom \u00E4nnu. Prova igen om n\u00E5gra minuter.");
        }
        var submission = assignment ? assignment.submissions[0] : null;
        var hasTemplate = !!templateFile;
        var hasAttachments = submission &&
            submission.assignmentSubmission.attachments &&
            submission.assignmentSubmission.attachments.length > 0;
        var turnedIn = submission && submission.state == "TURNED_IN";
        var returned = submission && submission.state == "RETURNED";
        var inKedBackend = turnedIn && hasAttachments
            ? !!assignments.find(function (ass) { return ass.submissionId == submission.id; })
            : false;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            turnedIn ? (!sendToUrkund || (inKedBackend && sendToUrkund) ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Uppgiften \u00E4r inl\u00E4mnad.")) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Uppgiften \u00E4r inl\u00E4mnad men m\u00E5ste \u00E4ven skickas till Urkund"))) : returned ?
                (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Uppgiften \u00E4r \u00E5terl\u00E4mnad av din l\u00E4rare.")) :
                (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                    "Uppgiften \u00E4r inte inl\u00E4mnad",
                    submission && submission.state == "RECLAIMED_BY_STUDENT"
                        ? " (återtagen)"
                        : undefined,
                    ".")),
            hasTemplate ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Dokumentet nedan ska anv\u00E4ndas till inl\u00E4mningen."),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_task_fileview__WEBPACK_IMPORTED_MODULE_12__["FileView"], { size: "large", thumbnail: assignment.templateThumbnail, url: assignment.templateFile, label: assignment.templateTitle, title: assignment.templateTitle }))) : (undefined),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn-group" },
                    hasTemplate || hasAttachments ? (!turnedIn ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_apis_buttons__WEBPACK_IMPORTED_MODULE_8__["Button"], { addClass: "red", action: function () { return _this.handInSubmission(submission); }, faIcon: "fas fa-thumbs-up", label: "L\u00E4mna in" })) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_apis_buttons__WEBPACK_IMPORTED_MODULE_8__["Button"], { action: function () { return _this.reclaimSubmission(submission); }, faIcon: "fas fa-thumbs-down", label: "\u00C5terta" }))) : (undefined),
                    turnedIn && !inKedBackend && sendToUrkund && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_apis_buttons__WEBPACK_IMPORTED_MODULE_8__["Button"], { action: function () { return _this.handInSubmission(submission, true); }, label: "Skicka till urkund" })),
                    (!hasTemplate || additionalUploads) && !turnedIn && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_apis_buttons__WEBPACK_IMPORTED_MODULE_8__["DriveButton"], { label: additionalUploads ? "Bifoga filer" : "Välj filer", action: function () {
                            var picker = new _apis_google_picker__WEBPACK_IMPORTED_MODULE_7__["GooglePicker"]({
                                upload: true,
                                multiple: true,
                                onlyMine: true
                            });
                            picker.show().then(function (files) {
                                _this.addFilesToSubmission(submission, files);
                                picker.close();
                            });
                        } }))),
                sendToUrkund && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                    "Uppgiften ",
                    additionalUploads ? "och alla bifagde filer " : "",
                    "skickas till Urkund.")),
                ((additionalUploads &&
                    submission.assignmentSubmission.attachments.length > 1) ||
                    (!hasTemplate && hasAttachments)) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "task-assignments-table" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Bifogade filer"))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, submission.assignmentSubmission.attachments.map(function (sub, i) {
                            if (hasTemplate && i == 0)
                                return undefined;
                            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: i },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_task_fileview__WEBPACK_IMPORTED_MODULE_12__["FileView"], { size: "small", label: sub.driveFile.title, title: sub.driveFile.title, thumbnail: sub.driveFile.thumbnailUrl, url: sub.driveFile.alternateLink }))));
                        }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("em", null,
                            "De bifogade filerna l\u00E4mnas in samtidigt som uppgiften l\u00E4mnas in. F\u00F6r att ta bort bifogade filer m\u00E5ste du g\u00E5 via\u00A0",
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: submission.alternateLink, target: "_blank" }, "Classroom"),
                            ". Obs! Ta inte bort sj\u00E4lva uppgiftsfilen."))))),
            error && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "error" }, error)));
    };
    ClassroomAssignments.prototype.render = function () {
        if (this.state.loading) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__["TimeoutSpinner"], { label: this.state.loadingMessage });
        }
        var teacherAtThisSchool = Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["isTeacherAtSchool"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser, this.props.course.school);
        return teacherAtThisSchool ? this.teacherView() : this.studentView();
    };
    return ClassroomAssignments;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-viewer/course-page/course-banner.tsx":
/*!********************************************************************!*\
  !*** ./src/components/course-viewer/course-page/course-banner.tsx ***!
  \********************************************************************/
/*! exports provided: CourseBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseBanner", function() { return CourseBanner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CourseBanner = function (props) {
    var title = props.title, backgroundImage = props.backgroundImage, tabs = props.tabs, activeTab = props.activeTab;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-row sv-layout sv-skip-spacer" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-12" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-script-portlet sv-portlet sv-skip-spacer" },
                backgroundImage && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", null, "\n        .pageHeader {\n          background-image: url('" + backgroundImage + "') !important;\n        }\n      "),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pageHeader" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, title)),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "buttonsField" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "buttonsContainer" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "align-horizontal" }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'horizontalMenu' },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, tabs.map(function (_a, idx) {
                                    var name = _a.name, key = _a.key, link = _a.link;
                                    var isActive = activeTab === link;
                                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: key || (typeof name === 'string' ? name : idx), className: isActive ? "activePage" : "" },
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: link }, name));
                                })))))))));
};


/***/ }),

/***/ "./src/components/course-viewer/course-page/course-module-page.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/course-viewer/course-page/course-module-page.tsx ***!
  \*************************************************************************/
/*! exports provided: CourseModulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModulePage", function() { return CourseModulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _subcomponents_knowledge_requirements_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subcomponents/knowledge-requirements-table */ "./src/components/course-viewer/subcomponents/knowledge-requirements-table.tsx");
/* harmony import */ var _utils_get_included_ids__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/get-included-ids */ "./src/components/course-viewer/utils/get-included-ids.ts");
/* harmony import */ var _subcomponents_abilities_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../subcomponents/abilities-box */ "./src/components/course-viewer/subcomponents/abilities-box.tsx");
/* harmony import */ var _subcomponents_central_content_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subcomponents/central-content-box */ "./src/components/course-viewer/subcomponents/central-content-box.tsx");
/* harmony import */ var _subcomponents_learning_goals_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subcomponents/learning-goals-list */ "./src/components/course-viewer/subcomponents/learning-goals-list.tsx");
/* harmony import */ var _subcomponents_task_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../subcomponents/task-list */ "./src/components/course-viewer/subcomponents/task-list.tsx");
/* harmony import */ var _get_customized_task__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get-customized-task */ "./src/components/course-viewer/course-page/get-customized-task.ts");










var CourseModulePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CourseModulePage, _super);
    function CourseModulePage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    CourseModulePage.prototype.render = function () {
        var _a = this.props, module = _a.module, course = _a.course;
        var incluedIds = Object(_utils_get_included_ids__WEBPACK_IMPORTED_MODULE_4__["default"])(module, course);
        var learningTasks = module.taskIds
            .map(function (id) { return course.tasks.find(function (t) { return t.id === id; }); })
            .filter(function (task) { return !!task; })
            .map(function (task) { return ({
            id: task.id,
            task: Object(_get_customized_task__WEBPACK_IMPORTED_MODULE_9__["getCustomizedTask"])(module, task),
            course: course,
            name: task.name,
            url: "#" + encodeURIComponent(module.name.trim()) + "/" + task.id,
            courseName: course.name,
            learningGoal: task.learningGoal || module.name,
        }); });
        var assignmentTasks = learningTasks.filter(function (t) { return t.task && t.task.assignment; });
        var nonAssignmentTasks = learningTasks.filter(function (t) { return !t.task || !t.task.assignment; });
        var commonTasks = nonAssignmentTasks.filter(function (t) { return !t.task.learningGoal; });
        var learningGoals = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["arrayToLookup"])(nonAssignmentTasks.filter(function (t) { return !!t.task.learningGoal; }), function (t) { return t.learningGoal; });
        var includedAbilities = course.abilities.filter(function (a) { return incluedIds[a.id]; });
        var includedCentralContent = course.centralContent.filter(function (c) { return incluedIds[c.id]; });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-text-portlet sv-use-margins sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-text-portlet-content" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", { className: "h1" }, module.name))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-vertical sv-layout" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { dangerouslySetInnerHTML: { __html: module.mandatoryContent } })),
            (!!module.startWeek || !!module.endWeek) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Modulens period"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "week-period-div" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, "Startvecka"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, module.startWeek || "--"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, "Slutvecka"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, module.endWeek || "--")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null))),
            Object.keys(incluedIds).length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Modulens kunskapskrav, f\u00F6rm\u00E5gor och centrala inneh\u00E5ll"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                    Object.keys(incluedIds).length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_knowledge_requirements_table__WEBPACK_IMPORTED_MODULE_3__["KnowledgeRequirementsBox"], { title: "I den h\u00E4r modulen bed\u00F6ms f\u00F6ljande kunskapskrav", requirements: course.knowledgeRequirements, includedIds: incluedIds }),
                    includedAbilities.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_abilities_box__WEBPACK_IMPORTED_MODULE_5__["AbilitiesBox"], { title: "Den h\u00E4r modulen behandlar f\u00F6ljande f\u00F6rm\u00E5gor", abilities: includedAbilities }),
                    includedCentralContent.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_central_content_box__WEBPACK_IMPORTED_MODULE_6__["CentralContentBox"], { title: "Den h\u00E4r modulen behandlar f\u00F6ljande centrala inneh\u00E5ll", centralContent: includedCentralContent }))),
            module.taskIds.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-script-portlet sv-portlet" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                    assignmentTasks.length === 0 ? undefined : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Inl\u00E4mningsuppgifter"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_task_list__WEBPACK_IMPORTED_MODULE_8__["TaskList"], { learningTasks: assignmentTasks })),
                    nonAssignmentTasks.length === 0 ? undefined : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Uppgifter"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_learning_goals_list__WEBPACK_IMPORTED_MODULE_7__["LearningGoalsList"], { commonTasks: commonTasks, learningGoals: Object.keys(learningGoals).map(function (learningGoal) { return ({
                                name: learningGoal,
                                learningTasks: learningGoals[learningGoal]
                            }); }) })))),
            module.resources.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Resurser"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, module.resources.map(function (r, idx) {
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal", key: idx },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: r.url }, r.name)));
                    })))));
    };
    return CourseModulePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-viewer/course-page/get-customized-task.ts":
/*!*************************************************************************!*\
  !*** ./src/components/course-viewer/course-page/get-customized-task.ts ***!
  \*************************************************************************/
/*! exports provided: getCustomizedTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomizedTask", function() { return getCustomizedTask; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function getCustomizedTask(module, task) {
    return module.taskCustomizations ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, task), module.taskCustomizations[task.id]) :
        task;
}


/***/ }),

/***/ "./src/components/course-viewer/course-page/index.tsx":
/*!************************************************************!*\
  !*** ./src/components/course-viewer/course-page/index.tsx ***!
  \************************************************************/
/*! exports provided: CoursePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePage", function() { return CoursePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _course_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-banner */ "./src/components/course-viewer/course-page/course-banner.tsx");
/* harmony import */ var _course_module_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-module-page */ "./src/components/course-viewer/course-page/course-module-page.tsx");
/* harmony import */ var _run_up_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./run-up-page */ "./src/components/course-viewer/course-page/run-up-page.tsx");
/* harmony import */ var _utils_manual_scroll_restoration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/manual-scroll-restoration */ "./src/components/course-viewer/utils/manual-scroll-restoration.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _weekplanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../weekplanner */ "./src/components/weekplanner/index.ts");
/* harmony import */ var _task_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-page */ "./src/components/course-viewer/course-page/task-page.tsx");
/* harmony import */ var _get_customized_task__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get-customized-task */ "./src/components/course-viewer/course-page/get-customized-task.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utility_components_extra_page_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utility-components/extra-page-buttons */ "./src/components/utility-components/extra-page-buttons.tsx");












Object(_utils_manual_scroll_restoration__WEBPACK_IMPORTED_MODULE_5__["initManualScrollRestoration"])();
var CoursePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CoursePage, _super);
    function CoursePage(props) {
        var _this = _super.call(this, props) || this;
        _this.onHashChange = _this.onHashChange.bind(_this);
        var _a = _this.getModuleAndTaskFromHash(), module = _a.module, task = _a.task;
        _this.state = {
            module: module,
            task: task
        };
        return _this;
    }
    CoursePage.prototype.getModuleAndTaskFromHash = function () {
        var split = (location.hash.substr(1) || "").split('/');
        if (split.length > 0 && !split[0])
            split = split.slice(1); // Allow leading slash #/module/task
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(split.map(function (part) { return decodeURIComponent(part); }), 2), moduleName = _a[0], taskId = _a[1];
        var module = this.props.course.modules
            .filter(function (m) { return (m.name || "")
            .trim().toLowerCase() === (moduleName || "").trim().toLowerCase(); })[0] || null;
        var task = taskId ?
            this.props.course.tasks.find(function (t) { return t.id === taskId; }) || null :
            null;
        if (task && !module) {
            // Resolve module by finding the module that holds the task:
            module = this.getOrderedModules()
                .filter(function (m) { return m.taskIds
                .some(function (taskId) { return task.id === taskId; }); })[0];
        }
        if (task && module) {
            task = Object(_get_customized_task__WEBPACK_IMPORTED_MODULE_9__["getCustomizedTask"])(module, task);
        }
        return { module: module, task: task };
    };
    CoursePage.prototype.componentDidMount = function () {
        window.addEventListener('hashchange', this.onHashChange);
    };
    CoursePage.prototype.componentWillUnmount = function () {
        window.removeEventListener('hashchange', this.onHashChange);
    };
    CoursePage.prototype.onHashChange = function () {
        var _a = this.getModuleAndTaskFromHash(), module = _a.module, task = _a.task;
        this.setState({
            module: module,
            task: task
        }, function () {
            var fallbackScrollPosition = undefined;
            if (task) {
                var taskAnchor = document.getElementById('ked-task-anchor');
                if (taskAnchor)
                    fallbackScrollPosition = (window.pageYOffset + taskAnchor.getBoundingClientRect().top);
                else
                    fallbackScrollPosition = 0;
            }
            Object(_utils_manual_scroll_restoration__WEBPACK_IMPORTED_MODULE_5__["restoreScrollPosition"])({ fallbackScrollPosition: fallbackScrollPosition });
        });
    };
    CoursePage.prototype.getOrderedModules = function () {
        var course = this.props.course;
        var moduleOrder = course.moduleOrder || course.modules.map(function (m) { return m.id; });
        return moduleOrder
            // Map ordered id to module
            .map(function (id) { return course.modules.find(function (m) { return m.id === id && !m.inactive; }); })
            // Ignore entries that only exists in moduleOrder but not in modules
            .filter(function (m) { return !!m; })
            // Append modules at end that are not listed in moduleOrder
            .concat(course.modules.filter(function (m) { return !moduleOrder.find(function (id) { return m.id === id; }); }));
    };
    CoursePage.prototype.render = function () {
        var _a = this.props, course = _a.course, courseBuilderUrl = _a.courseBuilderUrl;
        var _b = this.state, module = _b.module, task = _b.task;
        var orderedModules = this.getOrderedModules();
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_banner__WEBPACK_IMPORTED_MODULE_2__["CourseBanner"], { title: course.name + " - " + course.points + "p", backgroundImage: (course.images.find(function (img) { return img.id === course.imageId; }) || { url: '' }).url, tabs: [{ name: "Upptakt", link: "#", key: "Upptakt" }]
                    .concat(orderedModules.map(function (_a) {
                    var name = _a.name;
                    return ({ name: name, link: "#" + encodeURIComponent(name), key: name });
                }))
                    .concat(course.workFlowLink ? [{
                        name: "Arbetsgång",
                        key: "workflow",
                        link: course.workFlowLink
                    }] : [])
                    .concat(Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["hasWriteAccess"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_10__["default"].currentUser, course) ? [{
                        name: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-pencil-alt", "aria-hidden": "true" }),
                            " Redigera denna kurs"),
                        key: "edit",
                        link: Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["preserveImpersonationQuery"])(courseBuilderUrl, {}) + "#/courses/" + course.id + "/edit"
                    }] : []), activeTab: module ? "#" + encodeURIComponent(module.name) : "#" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-12" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-spacer-20pxvt sv-vertical sv-layout sv-skip-spacer" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pagecontent sv-layout sv-spacer-20pxvt sv-skip-spacer" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout sv-skip-spacer" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-7" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_extra_page_buttons__WEBPACK_IMPORTED_MODULE_11__["ExtraPageButtons"], null),
                                    task ?
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_page__WEBPACK_IMPORTED_MODULE_8__["TaskPage"], { task: task, course: course }) :
                                        module ?
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_module_page__WEBPACK_IMPORTED_MODULE_3__["CourseModulePage"], { course: course, module: module }) :
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_run_up_page__WEBPACK_IMPORTED_MODULE_4__["RunUpPage"], { course: course })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-column-5" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-vertical sv-layout sv-skip-spacer" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_weekplanner__WEBPACK_IMPORTED_MODULE_7__["WeekPlanner"], { viewCourseUrl: '', env: _globals_KED_env__WEBPACK_IMPORTED_MODULE_10__["default"] }))))))))));
    };
    return CoursePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-viewer/course-page/run-up-page.tsx":
/*!******************************************************************!*\
  !*** ./src/components/course-viewer/course-page/run-up-page.tsx ***!
  \******************************************************************/
/*! exports provided: RunUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunUpPage", function() { return RunUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subcomponents_abilities_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subcomponents/abilities-box */ "./src/components/course-viewer/subcomponents/abilities-box.tsx");
/* harmony import */ var _subcomponents_central_content_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subcomponents/central-content-box */ "./src/components/course-viewer/subcomponents/central-content-box.tsx");
/* harmony import */ var _subcomponents_knowledge_requirements_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subcomponents/knowledge-requirements-table */ "./src/components/course-viewer/subcomponents/knowledge-requirements-table.tsx");
/* harmony import */ var _subcomponents_resource_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../subcomponents/resource-list */ "./src/components/course-viewer/subcomponents/resource-list.tsx");


// Views




var RunUpPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RunUpPage, _super);
    function RunUpPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    RunUpPage.prototype.render = function () {
        var course = this.props.course;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                course.runUpText && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, "Upptakt"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "normal", dangerouslySetInnerHTML: { __html: course.runUpText } })),
                course.responsibleTeachers && course.responsibleTeachers.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "L\u00E4rare"),
                    course.responsibleTeachers.map(function (teacher, i) {
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { key: i },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: interpretTeacherUrl(teacher.email || teacher.url || '') }, teacher.name));
                    })),
                course.workFlowLink && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn", href: course.workFlowLink }, "Arbetsg\u00E5ng"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                course.abilities.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_abilities_box__WEBPACK_IMPORTED_MODULE_2__["AbilitiesBox"], { title: "\u00C4mnets f\u00F6rm\u00E5gor", subTitle: "F\u00F6rm\u00E5gor", abilities: course.abilities, className: "larger" }),
                course.centralContent.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_central_content_box__WEBPACK_IMPORTED_MODULE_3__["CentralContentBox"], { title: "Kursens centrala inneh\u00E5ll", subTitle: "Centralt inneh\u00E5ll", centralContent: course.centralContent, className: "larger" }),
                course.knowledgeRequirements.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_knowledge_requirements_table__WEBPACK_IMPORTED_MODULE_4__["KnowledgeRequirementsBox"], { title: "Kursens kunskapskrav", requirements: course.knowledgeRequirements, className: "larger" })),
            course.resources.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Resurser"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_resource_list__WEBPACK_IMPORTED_MODULE_5__["ResourceList"], { resources: course.resources }))));
    };
    return RunUpPage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function interpretTeacherUrl(url) {
    if (url.indexOf(':') === -1 && url.indexOf('@') >= 0)
        return "mailto:" + url;
    return url;
}


/***/ }),

/***/ "./src/components/course-viewer/course-page/task-page.tsx":
/*!****************************************************************!*\
  !*** ./src/components/course-viewer/course-page/task-page.tsx ***!
  \****************************************************************/
/*! exports provided: TaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPage", function() { return TaskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subcomponents_abilities_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subcomponents/abilities-box */ "./src/components/course-viewer/subcomponents/abilities-box.tsx");
/* harmony import */ var _subcomponents_central_content_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subcomponents/central-content-box */ "./src/components/course-viewer/subcomponents/central-content-box.tsx");
/* harmony import */ var _subcomponents_knowledge_requirements_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subcomponents/knowledge-requirements-table */ "./src/components/course-viewer/subcomponents/knowledge-requirements-table.tsx");
/* harmony import */ var _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../repos/user-tasks-repo */ "./src/repos/user-tasks-repo.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _task_assignments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task-assignments */ "./src/components/course-viewer/course-page/task-assignments.tsx");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _utility_components_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utility-components/checkbox */ "./src/components/utility-components/checkbox.tsx");
/* harmony import */ var _classroom_assignments__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./classroom-assignments */ "./src/components/course-viewer/course-page/classroom-assignments.tsx");
/* harmony import */ var _subcomponents_task_fileview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../subcomponents/task-fileview */ "./src/components/course-viewer/subcomponents/task-fileview.tsx");















var TaskPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TaskPage, _super);
    function TaskPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            userTask: undefined,
            weekPlannerWeek: moment__WEBPACK_IMPORTED_MODULE_9___default()().week()
        };
        _this.onUserTasksChanged = _this.onUserTasksChanged.bind(_this);
        return _this;
    }
    TaskPage.prototype.componentDidMount = function () {
        _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].subscribe(this.onUserTasksChanged);
    };
    TaskPage.prototype.componentWillUnmount = function () {
        _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].unsubscribe(this.onUserTasksChanged);
    };
    TaskPage.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.task.id !== this.props.task.id) {
            var userTask = _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].mem.items.find(function (ut) { return ut.task && ut.task.length > 0 && ut.task[0].id === nextProps.task.id; }) || null;
            this.setState({
                userTask: userTask,
                weekPlannerWeek: moment__WEBPACK_IMPORTED_MODULE_9___default()(_repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].persistedState.weekDate).week()
            });
        }
    };
    TaskPage.prototype.onUserTasksChanged = function (userTasks) {
        var _this = this;
        var userTask = userTasks.find(function (ut) { return ut.task && ut.task.length > 0 && ut.task[0].id === _this.props.task.id; }) || null;
        this.setState({
            userTask: userTask,
            weekPlannerWeek: moment__WEBPACK_IMPORTED_MODULE_9___default()(_repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].persistedState.weekDate).week()
        });
    };
    TaskPage.prototype.toggleTask = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var weekDate, userTask, _a, course, task, module, latestTimeStamp, userTask_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        weekDate = _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].persistedState.weekDate;
                        userTask = this.state.userTask;
                        _a = this.props, course = _a.course, task = _a.task;
                        module = course.modules.find(function (m) { return m.taskIds.some(function (id) { return id === task.id; }); });
                        if (!module)
                            return [2 /*return*/]; // Oh uh!
                        if (userTask === undefined)
                            return [2 /*return*/]; // Not yet loaded.
                        if (!!userTask) return [3 /*break*/, 2];
                        latestTimeStamp = Math.max.apply(Math.max, [weekDate].concat(_repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].mem.items.map(function (t) { return t.dateTime; })));
                        userTask_1 = {
                            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_7__["createUUID"])(),
                            courseName: course.name,
                            dateTime: latestTimeStamp + 2000,
                            learningGoal: task.learningGoal || module.name,
                            name: task.name,
                            url: task.url,
                            task: [task],
                            course: [course],
                            acl: [
                                // Default ACL: Let user self have full control over this item:
                                new kedbackend_client__WEBPACK_IMPORTED_MODULE_7__["DocumentAccess"]("email", _globals_KED_env__WEBPACK_IMPORTED_MODULE_8__["default"].currentUser.mail, "S"),
                            ].map(function (ac) { return ac.toString(); })
                        };
                        if (task.deadline) {
                            userTask_1.deadline = task.deadline;
                        }
                        return [4 /*yield*/, Promise.all([
                                _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].setWeekPlannerBoxOpen(this.props.course.name, true),
                                _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].insert([userTask_1])
                            ])];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].delete([userTask.id])];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskPage.prototype.render = function () {
        var _this = this;
        var _a = this.props, task = _a.task, course = _a.course;
        var _b = this.state, userTask = _b.userTask, weekPlannerWeek = _b.weekPlannerWeek;
        var abilities = task.abilities.map(function (a) { return course.abilities.find(function (ab) { return ab.id === a.id; }); }).filter(function (a) { return !!a; });
        var centralContent = task.centralContent.map(function (c) { return course.centralContent.find(function (cc) { return cc.id == c.id; }); }).filter(function (c) { return !!c; });
        var requirements = task.knowledgeRequirements.map(function (k) { return course.knowledgeRequirements.find(function (kr) { return kr.id === k.id; }); }).filter(function (k) { return !!k; });
        var isWorking = userTask && (userTask.$meta === 'adding' || userTask.$meta === 'deleting');
        var currentWeek = moment__WEBPACK_IMPORTED_MODULE_9___default()().week();
        var forWeekString = weekPlannerWeek === currentWeek ? "loggboken" :
            weekPlannerWeek === currentWeek + 1 ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["vald vecka (n\u00E4sta vecka)"], ["vald vecka (n\u00E4sta vecka)"]))) :
                weekPlannerWeek === currentWeek - 1 ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["vald vecka (f\u00F6rra veckan)"], ["vald vecka (f\u00F6rra veckan)"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["vald vecka (v ", ")"], ["vald vecka (v ", ")"])), weekPlannerWeek);
        var deadlineTooLate = task.deadline && moment__WEBPACK_IMPORTED_MODULE_9___default()(task.deadline).endOf('day') < moment__WEBPACK_IMPORTED_MODULE_9___default()();
        if (course.googleCreateClassrooms) {
            // we have google classroom active
            if (task.templateFile && task.templateFile.mimeType.includes('google-apps')) {
                // we have a google apps file so this should be in classroom
            }
            else {
                // we have a template file that is not a google apps file -- should never happen
            }
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, task.name),
            task.content && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { dangerouslySetInnerHTML: { __html: task.content } })),
            task.learningGoal && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Uppgiftens l\u00E4randem\u00E5l"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, task.learningGoal)),
            task.url && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: task.url, className: "btn btn-large" }, "G\u00E5 till uppgiften"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            task.assignment &&
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "card" + (deadlineTooLate ? " warning" : "") },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "card-icon" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-file-alt" }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "card-icon-info" }, task.deadline ? task.deadline : 'Ingen deadline')),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Inl\u00E4mningsuppgift"),
                    course.googleCreateClassrooms ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_classroom_assignments__WEBPACK_IMPORTED_MODULE_13__["ClassroomAssignments"], { course: course, task: task })) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        Object(_access_control__WEBPACK_IMPORTED_MODULE_11__["isTeacherAtSchool"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_8__["default"].currentUser, course.school) ?
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "H\u00E4r kan du som l\u00E4rare se elevernas inl\u00E4mnade arbeten.") : task.templateFile ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Till den h\u00E4r uppgiften ska du anv\u00E4dna f\u00F6ljande mall:"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_task_fileview__WEBPACK_IMPORTED_MODULE_14__["FileView"], { thumbnail: task.templateFile.iconUrl, title: task.templateFile.name, url: task.templateFile.url.substr(0, task.templateFile.url.lastIndexOf('/')) + '/copy' })) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Det h\u00E4r \u00E4r en inl\u00E4mningsuppgift. L\u00E4mna in ditt arbete som en pdf, doc eller odt fil genom att dra det till f\u00E4ltet under. Du kan \u00E4ven ladda up en fil eller v\u00E4lja en fil fr\u00E5n din Google Drive."),
                            task.deadline ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("b", null,
                                    "Den h\u00E4r uppgiften ",
                                    deadlineTooLate ? 'skulle ha lämnats in ' : 'ska vara inlämnad ',
                                    moment__WEBPACK_IMPORTED_MODULE_9___default()(task.deadline).format('YYYY-MM-DD'))) : undefined),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_assignments__WEBPACK_IMPORTED_MODULE_10__["TaskAssignments"], { courseId: course.id, taskId: task.id, school: course.school, sendToUrkund: task.sendToUrkund === undefined ? true : task.sendToUrkund, courseStudyGroups: course.studyGroups, taskDeadline: task.deadline }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null))),
            abilities.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_abilities_box__WEBPACK_IMPORTED_MODULE_2__["AbilitiesBox"], { title: "Den h\u00E4r uppgiften behandlar f\u00F6ljande f\u00F6rm\u00E5gor", className: "larger", headerOpen: false, abilities: abilities }),
            centralContent.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_central_content_box__WEBPACK_IMPORTED_MODULE_3__["CentralContentBox"], { title: "Den h\u00E4r uppgiften behandlar f\u00F6ljande centrala inneh\u00E5ll", className: "larger", headerOpen: false, centralContent: centralContent }),
            requirements.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_knowledge_requirements_table__WEBPACK_IMPORTED_MODULE_4__["KnowledgeRequirementsBox"], { title: "I den h\u00E4r uppgiften bed\u00F6ms f\u00F6ljande kunskapskrav", className: "larger", headerOpen: false, requirements: requirements }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
            userTask !== undefined && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer", style: isWorking ? { opacity: 0.5 } : {} },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_checkbox__WEBPACK_IMPORTED_MODULE_12__["UIAddbox"], { state: userTask && userTask.$meta !== 'deleting' ? 'checked' : '', label: userTask ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ta bort uppgiften fr\u00E5n ", ""], ["Ta bort uppgiften fr\u00E5n ", ""])), forWeekString) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["L\u00E4gg till uppgiften i ", ""], ["L\u00E4gg till uppgiften i ", ""])), forWeekString), onChange: function () { return !isWorking && _this.toggleTask(); } })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
            task.resources && task.resources.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Resurser kopplade till uppgiften"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, task.resources.map(function (r, idx) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: idx, className: "align-horizontal" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: r.url }, r.name)));
                })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null));
    };
    return TaskPage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/components/course-viewer/index.tsx":
/*!************************************************!*\
  !*** ./src/components/course-viewer/index.tsx ***!
  \************************************************/
/*! exports provided: CourseViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewer", function() { return CourseViewer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils_error_success_feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/error-success-feedback */ "./src/utils/error-success-feedback.tsx");
/* harmony import */ var _course_builder_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../course-builder/utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _course_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-page */ "./src/components/course-viewer/course-page/index.tsx");
/* harmony import */ var _utils_query_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/query-string */ "./src/utils/query-string.ts");
/* harmony import */ var _list_courses_list_courses_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../list-courses/list-courses-page */ "./src/components/list-courses/list-courses-page.tsx");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../access-control */ "./src/access-control/index.ts");










var CourseViewer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CourseViewer, _super);
    function CourseViewer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            course: null,
            isLoading: true
        };
        return _this;
    }
    CourseViewer.prototype.componentWillMount = function () {
        var _this = this;
        this.load().catch(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["showError"])
            .then(function () { return _this.setState({ isLoading: false }); });
    };
    CourseViewer.prototype.load = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var query, courseId, taskId, moduleName, encModuleName, encTaskId, newUrlWithoutCourseId, newUrlWithCourseId, course, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        query = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_7__["parseQueryString"])(location.search);
                        courseId = query["courseId"];
                        taskId = query["taskId"];
                        moduleName = query["module"];
                        if (taskId && moduleName) {
                            encModuleName = encodeURIComponent(moduleName);
                            encTaskId = encodeURIComponent(taskId);
                            newUrlWithoutCourseId = location.protocol + "//" + location.host + location.pathname + "#" + encModuleName + "/" + encTaskId;
                            newUrlWithCourseId = Object(_access_control__WEBPACK_IMPORTED_MODULE_9__["preserveImpersonationQuery"])(newUrlWithoutCourseId, { courseId: courseId });
                            location.replace(newUrlWithCourseId);
                        }
                        if (!courseId) return [3 /*break*/, 2];
                        return [4 /*yield*/, Object(_course_builder_utils__WEBPACK_IMPORTED_MODULE_4__["loadCourse"])(courseId)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = null;
                        _b.label = 3;
                    case 3:
                        course = _a;
                        this.setState({ course: course });
                        document.title =
                            course ?
                                course.name + " - " + course.points + "p" :
                                "Kurser";
                        return [2 /*return*/];
                }
            });
        });
    };
    CourseViewer.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "course-viewer" },
            this.state.isLoading ?
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_5__["TimeoutSpinner"], null) :
                this.state.course ?
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_page__WEBPACK_IMPORTED_MODULE_6__["CoursePage"], { course: this.state.course, courseBuilderUrl: this.props.courseBuilderUrl }) :
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_list_courses_list_courses_page__WEBPACK_IMPORTED_MODULE_8__["ListCoursesPage"], null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_error_success_feedback__WEBPACK_IMPORTED_MODULE_3__["ErrorSuccessFeedback"], null));
    };
    return CourseViewer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-viewer/subcomponents/classroom-assignments-listing.tsx":
/*!**************************************************************************************!*\
  !*** ./src/components/course-viewer/subcomponents/classroom-assignments-listing.tsx ***!
  \**************************************************************************************/
/*! exports provided: SubmissionListings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionListings", function() { return SubmissionListings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");
/* harmony import */ var _task_fileview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-fileview */ "./src/components/course-viewer/subcomponents/task-fileview.tsx");
/* harmony import */ var _course_page_urkund_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../course-page/urkund-utils */ "./src/components/course-viewer/course-page/urkund-utils.ts");
/* harmony import */ var _apis_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../apis/buttons */ "./src/apis/buttons.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _apis_google_classroom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../apis/google-classroom */ "./src/apis/google-classroom.ts");









var stateMap = {
    TURNED_IN: "inlämnad",
    RECLAIMED_BY_STUDENT: "återtagen",
    RETURNED: "återlämnad",
    CREATED: "ej inlämnad",
    NEW: "ej inlämnad"
};
var SubmissionListings = function (_a) {
    var submissions = _a.submissions, assignments = _a.assignments, sendToKedbackend = _a.sendToKedbackend, hasTemplate = _a.hasTemplate, sendToUrkund = _a.sendToUrkund, courseId = _a.courseId, taskId = _a.taskId;
    var subGroups = {};
    var assGroups = {};
    submissions.forEach(function (s) {
        if (subGroups[s.group])
            subGroups[s.group].push(s);
        else
            subGroups[s.group] = [s];
    });
    assignments.forEach(function (a) {
        var submission = submissions.find(function (sub) { return sub.id == a.submissionId; });
        if (submission) {
            if (assGroups[submission.group])
                assGroups[submission.group].push(a);
            else
                assGroups[submission.group] = [a];
        }
    });
    var ClassroomLink = submissions.length > 0 ? submissions[0].crLink.replace('details', 'submissions/by-status/and-sort-last-name/all') : '';
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "stopFloats" }, Object.keys(subGroups)
        .sort()
        .map(function (group, i) {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__["OpenCloseBox"], { key: i, title: group, children: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                ClassroomLink !== '' && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pullRight" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_apis_buttons__WEBPACK_IMPORTED_MODULE_5__["Button"], { url: ClassroomLink, label: 'Visa i Classroom', faIcon: 'fas fa-graduation-cap' })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SubmissionTables, { assignments: assGroups[group] ? assGroups[group] : [], submissions: subGroups[group], hasTemplate: hasTemplate, sendToKedbackend: sendToKedbackend, sendToUrkund: sendToUrkund, courseId: courseId, taskId: taskId })) }));
    })));
};
var SubmissionTables = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SubmissionTables, _super);
    function SubmissionTables(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            submissions: _this.props.submissions,
            assignments: _this.props.assignments
        };
        return _this;
    }
    SubmissionTables.prototype.render = function () {
        var _this = this;
        var namesort = function (a, b) {
            var lnCmp = a.name.lastName.localeCompare(b.name.lastName);
            return lnCmp == 0
                ? a.name.firstName.localeCompare(b.name.firstName)
                : lnCmp;
        };
        var _a = this.state, submissions = _a.submissions, assignments = _a.assignments;
        var complete = submissions
            .filter(function (sub) { return sub.state === "TURNED_IN" || sub.state === 'RETURNED'; })
            .sort(namesort);
        var incomplete = submissions
            .filter(function (sub) { return !(sub.state === "TURNED_IN" || sub.state === 'RETURNED'); })
            .sort(namesort);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            " ",
            complete.length > 0 && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Inl\u00E4mnade uppgifter:"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "task-assignments-table" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Elev"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Inl\u00E4mingsdatum"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Inl\u00E4mning"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: "actions" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-cogs" })))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, complete.map(function (submission, i) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SubmissionRow, { key: i, submission: submission, files: assignments.filter(function (file) { return file.submissionId === submission.id; }), hasTemplate: _this.props.hasTemplate, sendToKedbackend: _this.props.sendToKedbackend, sendToUrkund: _this.props.sendToUrkund, courseId: _this.props.courseId, taskId: _this.props.taskId })); }))))),
            incomplete.length > 0 && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Ej inl\u00E4mnade:"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "task-assignments-table" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Elev"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Status"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Inl\u00E4mning"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: "actions" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-cogs" })))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, incomplete.map(function (submission, i) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SubmissionRow, { key: i, submission: submission, files: assignments.filter(function (file) { return file.submissionId === submission.id; }), hasTemplate: _this.props.hasTemplate, sendToKedbackend: _this.props.sendToKedbackend, sendToUrkund: false })); })))))));
    };
    return SubmissionTables;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
var SubmissionRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SubmissionRow, _super);
    function SubmissionRow(props) {
        var _this = _super.call(this, props) || this;
        _this.classroom = new _apis_google_classroom__WEBPACK_IMPORTED_MODULE_8__["GoogleClassroom"]();
        _this.state = {
            files: _this.props.files,
            submission: _this.props.submission,
            loading: false,
            loadingMessage: 'Laddar inlämning...'
        };
        return _this;
    }
    SubmissionRow.prototype.transformUrl = function (url) {
        // Transforms alternateLink for submission to link to Classroom-interface for correcting submission
        var parts = url.split("/");
        parts.splice(3, 1, "u", "0", "g", "tg");
        parts[8] = parts[9] + "?authuser=0#u=" + parts[12];
        return parts.slice(0, 9).join("/");
    };
    SubmissionRow.prototype.sendToKedbackend = function (submission) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var assignments;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ loading: true, loadingMessage: 'Skickar filer...' });
                        return [4 /*yield*/, this.props.sendToKedbackend(submission)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["env"].kedBackendClient.http.get("assignments/" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["env"].currentUser.school + "/" + this.props.courseId + "/" + this.props.taskId + "/" + submission.userEmail).then(function (resp) {
                                if (resp.ok)
                                    return resp.json();
                                return [];
                            })
                                .then(function (res) {
                                return res.map(function (assignment) {
                                    if (!assignment.metadata || !assignment.metadata.driveFileId)
                                        return assignment;
                                    if (!submission.assignmentSubmission.attachments)
                                        return assignment;
                                    // add submission data
                                    submission.assignmentSubmission.attachments.forEach(function (attachment) {
                                        if (attachment.driveFile.id == assignment.metadata.driveFileId) {
                                            assignment.submissionId = submission.id;
                                        }
                                    });
                                    return assignment;
                                });
                            })];
                    case 2:
                        assignments = _a.sent();
                        this.setState({
                            loading: false, files: assignments
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SubmissionRow.prototype.refreshAssignment = function (assignment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var req, _a, _b, resJson, files;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.setState({ loading: true, loadingMessage: "Väntar på svar..." });
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["env"].kedBackendClient.http.get("assignments/urkund/" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["env"].currentUser.school + "/" + this.props.courseId + "/" + this.props.taskId + "/" + assignment.user + "/" + assignment.filename)];
                    case 1:
                        req = _c.sent();
                        if (!(req.status >= 400)) return [3 /*break*/, 3];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_7__["HttpError"].bind;
                        _b = [void 0, req.status];
                        return [4 /*yield*/, req.text()];
                    case 2: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_7__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, req.text()];
                    case 4:
                        resJson = _c.sent();
                        files = this.state.files.map(function (f) {
                            if (f.metadata.driveFileId == assignment.metadata.driveFileId) {
                                f.metadata.urkundResponse = resJson;
                            }
                            return f;
                        });
                        this.setState({ loading: false, files: files });
                        return [2 /*return*/];
                }
            });
        });
    };
    SubmissionRow.prototype.returnSubmission = function (submission) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var updated;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ loading: true, loadingMessage: "Returnerar inlämning..." });
                        return [4 /*yield*/, this.classroom.returnSubmission(submission)];
                    case 1:
                        updated = _a.sent();
                        this.setState({ loading: false, submission: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, submission), { state: 'RETURNED' }) });
                        return [2 /*return*/];
                }
            });
        });
    };
    SubmissionRow.prototype.render = function () {
        var _this = this;
        var _a = this.props, hasTemplate = _a.hasTemplate, sendToUrkund = _a.sendToUrkund;
        if (this.state.loading) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { colSpan: 4 }, this.state.loadingMessage));
        }
        var _b = this.state, files = _b.files, submission = _b.submission;
        var file = submission.assignmentSubmission.attachments
            ? submission.assignmentSubmission.attachments[0].driveFile
            : undefined;
        var name = submission.name, state = submission.state, userEmail = submission.userEmail, late = submission.late, updateTime = submission.updateTime;
        var turnedIn = state == "TURNED_IN";
        var returned = state == 'RETURNED';
        var crUrl = turnedIn ? this.transformUrl(submission.alternateLink) : "";
        if (file && hasTemplate && crUrl !== "")
            file.alternateLink = crUrl;
        var appendedFiles = file
            ? hasTemplate
                ? submission.assignmentSubmission.attachments.slice(1)
                : submission.assignmentSubmission.attachments
            : [];
        var showUrkundBtn = sendToUrkund &&
            file && (files.length == 0 ||
            files.filter(function (f) { return f.metadata.driveFileId == file.id; }).length == 0);
        // console.table({
        //   showUrkundBtn, sendToUrkund, file, files, filtered: files.filter(f => f.metadata.driveFileId == file.id)
        // });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { className: late && turnedIn ? "late" : undefined },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "mailto:" + userEmail },
                    name.firstName,
                    " ",
                    name.lastName)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                turnedIn || returned
                    ? new Date(updateTime)
                        .toLocaleString()
                        .split(" ")
                        .join(" kl. ")
                    : stateMap[state],
                returned ? ' (återlämnad)' : ''),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, file && (turnedIn || returned)
                ? [
                    !hasTemplate && appendedFiles.length > 1 && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_apis_buttons__WEBPACK_IMPORTED_MODULE_5__["Button"], { label: "Bed\u00F6m i Classroom", url: crUrl, faIcon: "fas fa-highlighter" }))),
                    (hasTemplate ||
                        (!hasTemplate && appendedFiles.length == 1)) && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatusView, { key: 0, file: file, data: files.find(function (f) { return f.metadata.driveFileId === file.id; }), refreshAssignment: this.refreshAssignment.bind(this) })),
                    (!hasTemplate && appendedFiles.length > 1) ||
                        (hasTemplate && appendedFiles.length) ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__["OpenCloseBox"], { key: 1, title: "Bifogade filer (" + appendedFiles.length + ")" }, appendedFiles.map(function (sub, i) {
                        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StatusView, { key: i, file: sub.driveFile, data: files.find(function (f) { return f.metadata.driveFileId === sub.driveFile.id; }), refreshAssignment: _this.refreshAssignment.bind(_this) }));
                    }))) : (undefined)
                ]
                : file && [
                    hasTemplate && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_fileview__WEBPACK_IMPORTED_MODULE_3__["FileView"], { key: 0, thumbnail: file.thumbnailUrl, url: file.alternateLink, title: file.title })),
                    appendedFiles.length ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__["OpenCloseBox"], { key: 1, title: "Bifogade filer (" + appendedFiles.length + ")" }, appendedFiles.map(function (sub, i) {
                        var file = files.find(function (file) { return file.metadata.driveFileId === sub.driveFile.id; });
                        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_fileview__WEBPACK_IMPORTED_MODULE_3__["FileView"], { key: i, thumbnail: sub.driveFile.thumbnailUrl, url: sub.driveFile.alternateLink, title: sub.driveFile.title }));
                    }))) : (undefined)
                ]),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "actions" },
                showUrkundBtn && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_apis_buttons__WEBPACK_IMPORTED_MODULE_5__["Button"], { label: "Skicka till Urkund", action: function () {
                        console.table(submission);
                        _this.sendToKedbackend(submission);
                    } })),
                turnedIn && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_apis_buttons__WEBPACK_IMPORTED_MODULE_5__["Button"], { label: "\u00C5terl\u00E4mna", action: function () {
                        _this.returnSubmission(submission);
                        console.log('return submission');
                    } })))));
    };
    return SubmissionRow;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
var StatusView = function (_a) {
    var file = _a.file, data = _a.data, refreshAssignment = _a.refreshAssignment;
    var sentToUrkund = !!data && data.metadata.urkundExternalId;
    var urkundResponse = !!data && data.metadata.urkundResponse
        ? JSON.parse(data.metadata.urkundResponse)[0]
        : false;
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "stats-view" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_fileview__WEBPACK_IMPORTED_MODULE_3__["FileView"], { thumbnail: file.thumbnailUrl, url: file.alternateLink, title: file.title }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "urkund-stats urkund-status-col" }, urkundResponse ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Urkund"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: urkundResponse.Report && urkundResponse.Report.ReportUrl, onClick: function (ev) {
                    if (["Accepted", "Submitted"].indexOf(urkundResponse.Status.State) === -1)
                        return; // Follow HREF instead.
                    ev.preventDefault();
                    ev.stopPropagation();
                    refreshAssignment(data);
                }, target: "_blank", title: Object(_course_page_urkund_utils__WEBPACK_IMPORTED_MODULE_4__["getUrkundHoverText"])(urkundResponse) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_course_page_urkund_utils__WEBPACK_IMPORTED_MODULE_4__["getUrkundStatusClass"])(urkundResponse) })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_course_page_urkund_utils__WEBPACK_IMPORTED_MODULE_4__["getUrkundSignificanceClass"])(urkundResponse) }, urkundResponse.Report &&
                typeof urkundResponse.Report.Significance === "number"
                ? urkundResponse.Report.Significance.toFixed() + "%"
                : " "))) : sentToUrkund ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Urkund"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "#", onClick: function (ev) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    refreshAssignment(data);
                }, target: "_blank", title: 'Filen \u00E4r uppladdad till Urkund. Klicka f\u00F6r att uppdatera status.' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'urkund-status urkund-status-submitted' })))) : (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Ej skickad till Urkund")))));
};


/***/ }),

/***/ "./src/components/course-viewer/subcomponents/resource-list.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/course-viewer/subcomponents/resource-list.tsx ***!
  \**********************************************************************/
/*! exports provided: ResourceList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceList", function() { return ResourceList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var ResourceList = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ResourceList, _super);
    function ResourceList(props) {
        return _super.call(this, props) || this;
    }
    ResourceList.prototype.render = function () {
        var resources = this.props.resources;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, resources.map(function (resource, idx) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal", key: idx },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: resource.url }, resource.name)));
            })));
    };
    return ResourceList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-viewer/utils/get-included-ids.ts":
/*!****************************************************************!*\
  !*** ./src/components/course-viewer/utils/get-included-ids.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getIncludedIds; });
function getIncludedIds(module, course) {
    var result = {};
    course.tasks.filter(function (t) { return module.taskIds.indexOf(t.id) !== -1; }).forEach(function (task) {
        task.abilities.forEach(function (_a) {
            var id = _a.id;
            return result[id] = true;
        });
        task.centralContent.forEach(function (_a) {
            var id = _a.id;
            return result[id] = true;
        });
        task.knowledgeRequirements.forEach(function (_a) {
            var id = _a.id;
            return result[id] = true;
        });
    });
    return result;
}


/***/ }),

/***/ "./src/components/course-viewer/utils/manual-scroll-restoration.ts":
/*!*************************************************************************!*\
  !*** ./src/components/course-viewer/utils/manual-scroll-restoration.ts ***!
  \*************************************************************************/
/*! exports provided: initManualScrollRestoration, restoreScrollPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initManualScrollRestoration", function() { return initManualScrollRestoration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreScrollPosition", function() { return restoreScrollPosition; });
var initialized = false;
function initManualScrollRestoration() {
    if (!initialized) {
        initialized = true;
        document.documentElement.addEventListener('click', function (ev) {
            var target = ev.target;
            if (target && target.tagName === 'A') {
                history.replaceState({ pageYOffset: window.pageYOffset }, null, null);
            }
        });
        if (history.scrollRestoration)
            history.scrollRestoration = 'manual';
    }
}
function restoreScrollPosition(_a) {
    var fallbackScrollPosition = _a.fallbackScrollPosition;
    if (history.state && history.state.pageYOffset !== undefined) {
        window.scrollTo(0, history.state.pageYOffset);
    }
    else if (fallbackScrollPosition !== undefined) {
        window.scrollTo(0, fallbackScrollPosition);
    }
}


/***/ }),

/***/ "./src/components/list-courses/list-courses-page.tsx":
/*!***********************************************************!*\
  !*** ./src/components/list-courses/list-courses-page.tsx ***!
  \***********************************************************/
/*! exports provided: ListCoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCoursesPage", function() { return ListCoursesPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _course_viewer_course_page_course_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../course-viewer/course-page/course-banner */ "./src/components/course-viewer/course-page/course-banner.tsx");
/* harmony import */ var _list_courses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-courses */ "./src/components/list-courses/list-courses.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");




function ListCoursesPage() {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_course_viewer_course_page_course_banner__WEBPACK_IMPORTED_MODULE_1__["CourseBanner"], { title: _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].currentUser.school, backgroundImage: "", tabs: [{ name: "Skolans kurser", link: "#" }], activeTab: "#" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-row sv-layout" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-12" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-spacer-20pxvt sv-vertical sv-layout sv-skip-spacer" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_list_courses__WEBPACK_IMPORTED_MODULE_2__["ListCourses"], null)))));
}


/***/ }),

/***/ "./src/components/list-courses/list-courses.tsx":
/*!******************************************************!*\
  !*** ./src/components/list-courses/list-courses.tsx ***!
  \******************************************************/
/*! exports provided: ListCourses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCourses", function() { return ListCourses; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _utils_query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/query-string */ "./src/utils/query-string.ts");
/* harmony import */ var _access_control_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../access-control/index */ "./src/access-control/index.ts");
/* harmony import */ var _repos_hidden_courses_repo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../repos/hidden-courses-repo */ "./src/repos/hidden-courses-repo.ts");








var ListCourses = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ListCourses, _super);
    function ListCourses(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isLoading: true,
            courses: [],
            headerOpen: false
        };
        _this.updateHiddenCourses = _this.updateHiddenCourses.bind(_this);
        return _this;
    }
    ListCourses.prototype.componentWillMount = function () {
        _repos_hidden_courses_repo__WEBPACK_IMPORTED_MODULE_7__["hiddenCoursesRepo"].subscribe(this.updateHiddenCourses, { fullCourse: true });
    };
    ListCourses.prototype.componentWillUnmount = function () {
        _repos_hidden_courses_repo__WEBPACK_IMPORTED_MODULE_7__["hiddenCoursesRepo"].unsubscribe(this.updateHiddenCourses);
    };
    ListCourses.prototype.updateHiddenCourses = function (courses) {
        this.setState({ courses: courses, isLoading: false });
    };
    ListCourses.prototype.hideCourse = function (course) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Sparar..."], ["Sparar..."]))));
                        return [4 /*yield*/, _repos_hidden_courses_repo__WEBPACK_IMPORTED_MODULE_7__["hiddenCoursesRepo"].hideCourse(course)];
                    case 1:
                        _a.sent();
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("");
                        return [2 /*return*/];
                }
            });
        });
    };
    ListCourses.prototype.showCourse = function (course) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Sparar..."], ["Sparar..."]))));
                        return [4 /*yield*/, _repos_hidden_courses_repo__WEBPACK_IMPORTED_MODULE_7__["hiddenCoursesRepo"].showCourse(course)];
                    case 1:
                        _a.sent();
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("");
                        return [2 /*return*/];
                }
            });
        });
    };
    ListCourses.prototype.render = function () {
        var _this = this;
        if (this.state.isLoading)
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__["TimeoutSpinner"], null);
        var courses = this.state.courses;
        var visibleCourses = courses.filter(function (course) { return course.visible; });
        var hiddenCourses = courses.filter(function (course) { return !course.visible; });
        var query = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_5__["parseQueryString"])(location.search);
        var viewCourseUrl = _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_2__["default"].KED_COURSE_VIEWER_URL;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Skolans kurser"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer odd-even" }, visibleCourses.map(function (course) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "studentCourse", key: course.id },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top pull-right" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "hideItem", onClick: function () { return _this.hideCourse(course); } })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: Object(_access_control_index__WEBPACK_IMPORTED_MODULE_6__["preserveImpersonationQuery"])(viewCourseUrl, { courseId: course.id }) }, course.name))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "small" }, course.description)));
            })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openClose" + (this.state.headerOpen ? " open" : "") },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openHeader", onClick: function () { return _this.setState({ headerOpen: !_this.state.headerOpen }); } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, "Dolda kurser")),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openContent" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer odd-even" }, hiddenCourses.map(function (course) {
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "studentCourse", key: course.id },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top pull-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "showItem", onClick: function () { return _this.showCourse(course); } })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_5__["generateQueryString"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), { courseId: course.id })) }, course.name)),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "small" }, course.description)));
                    })))));
    };
    return ListCourses;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/weekplanner/index.ts":
/*!*********************************************!*\
  !*** ./src/components/weekplanner/index.ts ***!
  \*********************************************/
/*! exports provided: WeekPlanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weekplanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weekplanner */ "./src/components/weekplanner/weekplanner.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeekPlanner", function() { return _weekplanner__WEBPACK_IMPORTED_MODULE_0__["WeekPlanner"]; });




/***/ })

}]);
//# sourceMappingURL=CourseViewer.js.map