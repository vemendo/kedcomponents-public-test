var kedappteacherview =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"kedappteacherview": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/elements/KEDAppTeacherView/webpack-entry.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./kedbackend/KED.Backend.API/schema.json":
/*!************************************************!*\
  !*** ./kedbackend/KED.Backend.API/schema.json ***!
  \************************************************/
/*! exports provided: accessClaimDefinitions, realmClaim, specialRoles, defaultAccessClaimTypes, defaultAcl, tables, default */
/***/ (function(module) {

module.exports = {"accessClaimDefinitions":{"email":"{http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress}","role":"{http://schemas.microsoft.com/ws/2008/06/identity/claims/role}","school":"{school}","schoolRole":"{school}/{http://schemas.microsoft.com/ws/2008/06/identity/claims/role}","tutorFor":"{tutorFor}"},"realmClaim":"realm","specialRoles":{"userRole":"USER","adminRole":"ADMIN"},"defaultAccessClaimTypes":["role"],"defaultAcl":["role:USER:R"],"tables":{"branches":{"accessClaimTypes":["role","schoolRole","email"],"sharingAccessPerRole":{"USER":{"email":["*"],"schoolRole":["*"],"role":["*"]}},"relationships":{"parents":"branches","approvedChildren":"branches"},"isPublic":true},"global":{"accessClaimTypes":["role","schoolRole"],"relationships":{"courseInstances":"courseInstances"},"isPublic":true},"courseInstances":{"accessClaimTypes":["role","schoolRole"],"sharingAccessPerRole":{"USER":{"schoolRole":["*"],"role":["*"]}},"defaultAcl":["role:USER:R","schoolRole:{school}/EMPLOYEE:S"],"relationships":{"abilities":"abilities","centralContent":"central-content","knowledgeRequirements":"knowledge-requirements","blocks":"courseBlocks","tabs":"courseTabs"},"isPublic":true},"courseBlocks":{"accessClaimTypes":["role","schoolRole"],"sharingAccessPerRole":{"USER":{"schoolRole":["*"],"role":["*"]}},"defaultAcl":["role:USER:R","schoolRole:{school}/EMPLOYEE:S"],"relationships":{"abilities":"abilities","centralContent":"central-content","knowledgeRequirements":"knowledge-requirements","tabs":"courseTabs","tasks":"tasks"},"isPublic":true},"courseTabs":{"accessClaimTypes":["role","schoolRole"],"sharingAccessPerRole":{"USER":{"schoolRole":["*"],"role":["*"]}},"defaultAcl":["role:USER:R","schoolRole:{school}/EMPLOYEE:S"],"relationships":{"abilities":"abilities","centralContent":"central-content","knowledgeRequirements":"knowledge-requirements","contents":"courseContents"},"isPublic":true},"courseContents":{"accessClaimTypes":["role","schoolRole"],"sharingAccessPerRole":{"USER":{"schoolRole":["*"],"role":["*"]}},"defaultAcl":["role:USER:R","schoolRole:{school}/EMPLOYEE:S"],"relationships":{"tasks":"tasks"},"isPublic":true},"weekplans":{"accessClaimTypes":["email","tutorFor"],"sharingAccessPerRole":{"USER":{"email":["{email}:*","{tutorFor}:*"],"tutorFor":["{tutorFor}:*"]}},"defaultAcl":["email:{email}:S"],"isPublic":false},"weekplans-ks":{"accessClaimTypes":["email","tutorFor"],"sharingAccessPerRole":{"USER":{"email":["{email}:*","{tutorFor}:*"],"tutorFor":["{tutorFor}:*"]}},"defaultAcl":["email:{email}:S"],"isPublic":false},"usertasks":{"accessClaimTypes":["email","schoolRole","tutorFor"],"sharingAccessPerRole":{"USER":{"email":["{email}:*","{tutorFor}:*"],"schoolRole":["{school}/EMPLOYEE:*"],"tutorFor":["{tutorFor}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{"task":"tasks","course":"courses"},"isPublic":false},"userhiddencourses":{"accessClaimTypes":["email"],"sharingAccessPerRole":{"USER":{"email":["{email}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{},"isPublic":false},"usercalendarvisibility":{"accessClaimTypes":["email"],"sharingAccessPerRole":{"USER":{"email":["{email}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{},"isPublic":false},"subjects":{"relationships":{"courseTemplates":"courses","abilities":"abilities"},"isPublic":true},"schools":{"accessClaimTypes":["role","schoolRole"],"relationships":{"courses":"courses","activeCourses":"courses"},"isPublic":true},"courses":{"accessClaimTypes":["role","schoolRole"],"sharingAccessPerRole":{"EMPLOYEE":{"schoolRole":["{school}/EMPLOYEE:*"],"role":["USER:R"]}},"defaultAcl":["schoolRole:{school}/EMPLOYEE:*"],"relationships":{"templateChain":"courses","centralContent":"central-content","knowledgeRequirements":"knowledge-requirements","abilities":"abilities","images":"images","tasks":"tasks"},"isPublic":true},"tasks":{"accessClaimTypes":["role","schoolRole"],"sharingAccessPerRole":{"EMPLOYEE":{"schoolRole":["{school}/EMPLOYEE:*"],"role":["USER:R"]}},"defaultAcl":["schoolRole:{school}/EMPLOYEE:S","role:USER:R"],"relationships":{"knowledgeRequirements":"knowledge-requirements","centralContent":"central-content","abilities":"abilities"},"isPublic":true},"images":{"accessClaimTypes":["role","schoolRole","email"],"sharingAccessPerRole":{"EMPLOYEE":{"schoolRole":["{school}/EMPLOYEE:*"],"role":["USER:R"]},"USER":{"email":["{email}:*"]}},"isPublic":true},"central-content":{"accessClaimTypes":["role"],"defaultAcl":["role:USER:R"]},"knowledge-requirements":{"accessClaimTypes":["role"],"defaultAcl":["role:USER:R"],"isPublic":true},"abilities":{"accessClaimTypes":["role"],"defaultAcl":["role:USER:R"],"isPublic":true},"seenStudentAssignments":{"accessClaimTypes":["email"],"sharingAccessPerRole":{"USER":{"email":["{email}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{},"isPublic":true},"notes":{"accessClaimTypes":["email"],"sharingAccessPerRole":{"USER":{"email":["{email}:*"]}},"defaultAcl":["email:{email}:S"],"relationships":{},"isPublic":false}}};

/***/ }),

/***/ "./kedbackend/client.js":
/*!******************************!*\
  !*** ./kedbackend/client.js ***!
  \******************************/
/*! exports provided: KedBearerProvider, RestClient, HttpError, KedBackendClient, BatchRunner, createUUID, avoidSimultanousCalls, getGlobalId, computePredestinatedId, simpleDigest, buf2hex, updateArray, DocumentAccess, hasAccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dist/js/ked-backend-client */ "./kedbackend/js/dist/js/ked-backend-client/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBearerProvider", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["KedBearerProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestClient", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["RestClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["HttpError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBackendClient", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["KedBackendClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BatchRunner", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["BatchRunner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUUID", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["createUUID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "avoidSimultanousCalls", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["avoidSimultanousCalls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalId", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["getGlobalId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computePredestinatedId", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["computePredestinatedId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simpleDigest", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["simpleDigest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buf2hex", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["buf2hex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateArray", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["updateArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentAccess", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["DocumentAccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAccess", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["hasAccess"]; });



/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-client/access-control.js":
/*!********************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-client/access-control.js ***!
  \********************************************************************/
/*! exports provided: DocumentAccess, hasAccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentAccess", function() { return DocumentAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAccess", function() { return hasAccess; });
var DocumentAccess = /** @class */ (function () {
    function DocumentAccess(accessClaimType, accessClaimValue, right) {
        this.accessClaimType = accessClaimType;
        this.accessClaimValue = accessClaimValue;
        this.right = right;
    }
    DocumentAccess.fromString = function (ac) {
        if (!ac)
            return null;
        var split = ac.split(':');
        if (split.length < 3)
            throw new Error("Invalid access string: " + ac);
        var claimType = DocumentAccess.unescape(split[0]);
        var claimValue = DocumentAccess.unescape(split[1]);
        var right = split[2];
        if (right !== 'R' && right !== 'W' && right !== 'S')
            throw new Error("Invalid access string: " + ac);
        return new DocumentAccess(claimType, claimValue, right);
    };
    DocumentAccess.escape = function (accessComponent) {
        return accessComponent.replace(/\%/g, "%25").replace(/\:/g, "%3A");
    };
    DocumentAccess.unescape = function (accessComponent) {
        return accessComponent.replace(/\%3A/g, ":").replace(/\%25/g, "%");
    };
    DocumentAccess.prototype.toString = function () {
        return DocumentAccess.escape(this.accessClaimType) + ":" +
            DocumentAccess.escape(this.accessClaimValue) + ":" +
            this.right;
    };
    DocumentAccess.fromStringArray = function (acl) {
        return acl
            .map(function (ac) { return DocumentAccess.fromString(ac); })
            .filter(function (ac) { return ac; });
    };
    DocumentAccess.toStringArray = function (acl) {
        return acl.map(function (ac) { return ac.toString(); });
    };
    return DocumentAccess;
}());

function hasAccess(acl, userClaims, requestedRight) {
    if (userClaims.some(function (claim) { return claim.type === 'role' && claim.value === "ADMIN"; }))
        return true;
    return acl.some(function (a) {
        return userClaims.some(function (c) {
            return a.accessClaimType === c.type &&
                a.accessClaimValue === c.value && ((a.right === 'R' && requestedRight === 'R') ||
                (a.right === 'W' && ['R', 'W'].indexOf(requestedRight) >= 0) ||
                (a.right === 'S'));
        });
    });
}
//# sourceMappingURL=access-control.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-client/http-error.js":
/*!****************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-client/http-error.js ***!
  \****************************************************************/
/*! exports provided: HttpError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return HttpError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");

var HttpError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HttpError, _super);
    function HttpError(code, message) {
        var _this = _super.call(this, "HTTP" + code + " " + message) || this;
        _this.code = code;
        _this.message = message;
        _this.name = "http" + code;
        _this.message = "HTTP" + code + " " + message;
        return _this;
    }
    return HttpError;
}(Error));

//# sourceMappingURL=http-error.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-client/index.js":
/*!***********************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-client/index.js ***!
  \***********************************************************/
/*! exports provided: KedBearerProvider, RestClient, HttpError, KedBackendClient, BatchRunner, createUUID, avoidSimultanousCalls, getGlobalId, computePredestinatedId, simpleDigest, buf2hex, updateArray, DocumentAccess, hasAccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KedBackendClient", function() { return KedBackendClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchRunner", function() { return BatchRunner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _restclient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restclient */ "./kedbackend/js/dist/js/ked-backend-client/restclient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestClient", function() { return _restclient__WEBPACK_IMPORTED_MODULE_1__["RestClient"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./kedbackend/js/dist/js/ked-backend-client/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUUID", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["createUUID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "avoidSimultanousCalls", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["avoidSimultanousCalls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalId", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["getGlobalId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computePredestinatedId", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["computePredestinatedId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simpleDigest", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["simpleDigest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buf2hex", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["buf2hex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateArray", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["updateArray"]; });

/* harmony import */ var _ked_bearer_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ked-bearer-provider */ "./kedbackend/js/dist/js/ked-backend-client/ked-bearer-provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBearerProvider", function() { return _ked_bearer_provider__WEBPACK_IMPORTED_MODULE_3__["KedBearerProvider"]; });

/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./access-control */ "./kedbackend/js/dist/js/ked-backend-client/access-control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentAccess", function() { return _access_control__WEBPACK_IMPORTED_MODULE_4__["DocumentAccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAccess", function() { return _access_control__WEBPACK_IMPORTED_MODULE_4__["hasAccess"]; });

/* harmony import */ var _http_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-error */ "./kedbackend/js/dist/js/ked-backend-client/http-error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return _http_error__WEBPACK_IMPORTED_MODULE_5__["HttpError"]; });

/* empty/unused harmony star reexport */








;
// | 'otherFlag' | 'thirdFlag';...
var KedBackendClient = /** @class */ (function () {
    function KedBackendClient(isomorphic, bearerProvider, baseUrl) {
        this.http = new _restclient__WEBPACK_IMPORTED_MODULE_1__["RestClient"](isomorphic, baseUrl, { bearerProvider: bearerProvider });
    }
    KedBackendClient.prototype.getMyClaims = function (table, fetchOptions) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.get("me/claims/" + (table || ""), null, fetchOptions)];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = _http_error__WEBPACK_IMPORTED_MODULE_5__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(_http_error__WEBPACK_IMPORTED_MODULE_5__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    KedBackendClient.prototype.get = function (table, id, options, fetchOptions) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.get(table + "/" + id, options, fetchOptions)];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = _http_error__WEBPACK_IMPORTED_MODULE_5__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(_http_error__WEBPACK_IMPORTED_MODULE_5__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    KedBackendClient.prototype.list = function (table, options, fetchOptions) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var query, res, _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        query = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, options);
                        if (location.search.includes('useSP')) {
                            query.flags = (query.flags || []).concat(['useSP']);
                        }
                        if (options && options.mutationsOnEmpty)
                            query.mutationsOnEmpty = JSON.stringify(options.mutationsOnEmpty);
                        return [4 /*yield*/, this.http.get("" + table, query, fetchOptions)];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = _http_error__WEBPACK_IMPORTED_MODULE_5__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(_http_error__WEBPACK_IMPORTED_MODULE_5__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    KedBackendClient.prototype.batch = function (reqs, fetchOptions) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // Reorder operations so that 'add's come first and 'delete's come last:
                        reqs = reqs.slice().sort(function (req1, req2) {
                            return req1.op === 'add' ? -1 : req2.op === 'add' ? 1 :
                                req1.op === 'delete' ? 1 : req2.op === 'delete' ? -1 : 0;
                        });
                        return [4 /*yield*/, this.http.post("batch", reqs, fetchOptions)];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = _http_error__WEBPACK_IMPORTED_MODULE_5__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(_http_error__WEBPACK_IMPORTED_MODULE_5__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    KedBackendClient.prototype.do = function (scopeFn) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var runner;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runner = new BatchRunner();
                        scopeFn(runner);
                        return [4 /*yield*/, this.batch(runner.mutationRequests)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KedBackendClient.prototype.deleteRealm = function (realm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.delete("realms/" + realm)];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = _http_error__WEBPACK_IMPORTED_MODULE_5__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(_http_error__WEBPACK_IMPORTED_MODULE_5__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    KedBackendClient.prototype.add = function (table, doc, branchId) {
        return this.do(function (r) { return r.add(table, doc); });
    };
    KedBackendClient.prototype.put = function (table, doc) {
        return this.do(function (r) { return r.put(table, doc); });
    };
    KedBackendClient.prototype.update = function (table, id, deltaDoc, branchId) {
        return this.do(function (r) { return r.update(table, id, deltaDoc, branchId); });
    };
    KedBackendClient.prototype.merge = function (branchId, targetBranchId) {
        return this.do(function (r) { return r.merge(branchId, targetBranchId); });
    };
    KedBackendClient.prototype.clearBranch = function (branchId) {
        return this.do(function (r) { return r.clearBranch(branchId); });
    };
    KedBackendClient.prototype.delete = function (table, id) {
        return this.do(function (r) { return r.delete(table, id); });
    };
    KedBackendClient.prototype.share = function (table, id, acl) {
        return this.do(function (r) { return r.share(table, id, acl); });
    };
    KedBackendClient.prototype.unshare = function (table, id, acl) {
        return this.do(function (r) { return r.unshare(table, id, acl); });
    };
    KedBackendClient.prototype.link = function (sourceTable, sourceId, targetTable, targetId, label) {
        return this.do(function (r) { return r.link(sourceTable, sourceId, targetTable, targetId, label); });
    };
    KedBackendClient.prototype.link2 = function (sourceTable, sourceId, targetId, label, branchId) {
        return this.do(function (r) { return r.link2(sourceTable, sourceId, label, targetId, branchId); });
    };
    KedBackendClient.prototype.unlink = function (sourceTable, sourceId, targetTable, targetId, label) {
        return this.do(function (r) { return r.unlink(sourceTable, sourceId, targetTable, targetId, label); });
    };
    KedBackendClient.prototype.unlink2 = function (sourceTable, sourceId, targetId, label, branchId) {
        return this.do(function (r) { return r.unlink2(sourceTable, sourceId, label, targetId, branchId); });
    };
    KedBackendClient.prototype.undoLink = function (sourceTable, sourceId, targetId, label, branchId) {
        return this.do(function (r) { return r.undoLink(sourceTable, sourceId, label, targetId, branchId); });
    };
    return KedBackendClient;
}());

var BatchRunner = /** @class */ (function () {
    function BatchRunner() {
        this.mutationRequests = [];
    }
    BatchRunner.prototype.add = function (table, doc, branchId) {
        this.mutationRequests.push({ op: 'add', table: table, doc: doc, branchId: branchId });
        return this;
    };
    BatchRunner.prototype.put = function (table, doc) {
        doc = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, doc);
        delete doc.acl; // Forbidden to send acl with put() calls.
        this.mutationRequests.push({ op: 'put', table: table, doc: doc });
        return this;
    };
    BatchRunner.prototype.update = function (table, id, deltaDoc, branchId) {
        deltaDoc = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, deltaDoc);
        this.mutationRequests.push({ op: 'update', table: table, id: id, deltaDoc: deltaDoc, branchId: branchId });
    };
    BatchRunner.prototype.merge = function (branchId, targetBranchId) {
        this.mutationRequests.push({ op: 'merge', branchId: branchId, targetBranchId: targetBranchId });
    };
    BatchRunner.prototype.clearBranch = function (branchId) {
        this.mutationRequests.push({ op: 'clear-branch', branchId: branchId });
    };
    BatchRunner.prototype.delete = function (table, id) {
        this.mutationRequests.push({ op: 'delete', table: table, id: id });
        return this;
    };
    BatchRunner.prototype.share = function (table, id, acl) {
        this.mutationRequests.push({ op: 'share', table: table, id: id, acl: acl });
        return this;
    };
    BatchRunner.prototype.unshare = function (table, id, acl) {
        this.mutationRequests.push({ op: 'unshare', table: table, id: id, acl: acl });
        return this;
    };
    BatchRunner.prototype.link = function (sourceTable, sourceId, targetTable, targetId, label) {
        this.mutationRequests.push({ op: 'link', sourceTable: sourceTable, sourceId: sourceId, targetTable: targetTable, targetId: targetId, label: label });
        return this;
    };
    BatchRunner.prototype.link2 = function (sourceTable, sourceId, label, targetId, branchId) {
        this.mutationRequests.push({ op: 'link', sourceTable: sourceTable, sourceId: sourceId, targetId: targetId, label: label, branchId: branchId });
    };
    BatchRunner.prototype.unlink = function (sourceTable, sourceId, targetTable, targetId, label) {
        this.mutationRequests.push({ op: 'unlink', sourceTable: sourceTable, sourceId: sourceId, targetTable: targetTable, targetId: targetId, label: label });
        return this;
    };
    BatchRunner.prototype.unlink2 = function (sourceTable, sourceId, label, targetId, branchId) {
        this.mutationRequests.push({ op: 'unlink', sourceTable: sourceTable, sourceId: sourceId, targetId: targetId, label: label, branchId: branchId });
        return this;
    };
    BatchRunner.prototype.undoLink = function (sourceTable, sourceId, label, targetId, branchId) {
        this.mutationRequests.push({ op: 'undo-link', sourceTable: sourceTable, sourceId: sourceId, targetId: targetId, label: label, branchId: branchId });
    };
    return BatchRunner;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-client/ked-bearer-provider.js":
/*!*************************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-client/ked-bearer-provider.js ***!
  \*************************************************************************/
/*! exports provided: KedBearerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KedBearerProvider", function() { return KedBearerProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _restclient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restclient */ "./kedbackend/js/dist/js/ked-backend-client/restclient.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./kedbackend/js/dist/js/ked-backend-client/utils.js");



var KedBearerProvider = /** @class */ (function () {
    function KedBearerProvider(isomorphic, storage, tokenId, clientId, clientSecret, tokenUrl, tokenQuery) {
        this.isomorphic = isomorphic;
        this.storage = storage;
        this.tokenId = tokenId;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.tokenUrl = tokenUrl;
        this.tokenQuery = tokenQuery;
        this.tokenInfo = { token: null, expires: 0 };
        this.client = new _restclient__WEBPACK_IMPORTED_MODULE_1__["RestClient"](isomorphic, "", {
            username: this.clientId,
            password: this.clientSecret
        });
        this.getBearer = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["avoidSimultanousCalls"])(this.getBearer.bind(this));
        this.refreshBearer = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["avoidSimultanousCalls"])(this.refreshBearer.bind(this));
    }
    KedBearerProvider.prototype.getBearer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, token, expires, _b, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.tokenInfo, token = _a.token, expires = _a.expires;
                        if (token && expires >= Date.now())
                            return [2 /*return*/, this.tokenInfo];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 6]);
                        _b = this;
                        return [4 /*yield*/, this.storage.load(this.clientId + "/" + this.tokenId)];
                    case 2:
                        _b.tokenInfo = _c.sent();
                        if (this.tokenInfo.token && this.tokenInfo.expires >= Date.now())
                            return [2 /*return*/, this.tokenInfo];
                        return [4 /*yield*/, this.refreshBearer()];
                    case 3:
                        _c.sent();
                        return [2 /*return*/, this.tokenInfo];
                    case 4:
                        e_1 = _c.sent();
                        return [4 /*yield*/, this.refreshBearer()];
                    case 5:
                        _c.sent();
                        return [2 /*return*/, this.tokenInfo];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    KedBearerProvider.prototype.refreshBearer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, retries, _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        retries = 0;
                        _c.label = 1;
                    case 1:
                        if (!(retries < 6)) return [3 /*break*/, 5];
                        console.log("Retrieving token for " + this.tokenId);
                        return [4 /*yield*/, this.client.get(this.tokenUrl, this.tokenQuery, { cache: 'reload' })];
                    case 2:
                        res = _c.sent();
                        if (res.status !== 200) {
                            console.warn("Got " + res.status + " " + res.statusText);
                            return [3 /*break*/, 4];
                        }
                        _a = this;
                        _b = {};
                        return [4 /*yield*/, res.text()];
                    case 3:
                        _a.tokenInfo = (_b.token = _c.sent(), _b.expires = Date.now() + 59 * 60 * 1000, _b);
                        console.log("Got token for " + this.tokenId + ": " + JSON.stringify(this.tokenInfo));
                        this.storage.save(this.clientId + "/" + this.tokenId, this.tokenInfo);
                        return [2 /*return*/, this.tokenInfo];
                    case 4:
                        ++retries;
                        return [3 /*break*/, 1];
                    case 5: throw new Error("Failed to retrieve token for " + JSON.stringify(this.tokenId));
                }
            });
        });
    };
    return KedBearerProvider;
}());

//# sourceMappingURL=ked-bearer-provider.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-client/restclient.js":
/*!****************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-client/restclient.js ***!
  \****************************************************************/
/*! exports provided: RestClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestClient", function() { return RestClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./kedbackend/js/dist/js/ked-backend-client/utils.js");
/* harmony import */ var _observable_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/emitter */ "./kedbackend/js/dist/js/observable/emitter.js");
/*
declare var Buffer; // node built-in


function basicAuthHeader(username, password) {
    return "Basic " + new Buffer(username + ":" + password).toString("base64");
}
*/



var RestClient = /** @class */ (function () {
    function RestClient(isomorphic, baseUrl, options) {
        this.isomorphic = isomorphic;
        this.baseUrl = baseUrl;
        this.options = options;
        this.numOutstandingOperations = 0;
        this._status = new _observable_emitter__WEBPACK_IMPORTED_MODULE_2__["Emitter"](this);
        this.fetchOptions = { mode: 'cors' };
        this.authHeader = options.bearer ?
            "Bearer " + options.bearer :
            options.username ?
                "Basic " + isomorphic.btoa(options.username + ":" + (options.password || "")) :
                null;
        this.bearerProvider = options.bearerProvider || null;
    }
    Object.defineProperty(RestClient.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    RestClient.prototype.fetch = function (path, method, headers, query, fetchOptions) {
        var _this = this;
        ++this.numOutstandingOperations;
        this._status.dispatch(this);
        return this._fetch(path, method, headers, query, fetchOptions)
            .then(function (res) {
            --_this.numOutstandingOperations;
            _this._status.dispatch(_this);
            return res;
        }).catch(function (err) {
            --_this.numOutstandingOperations;
            _this._status.dispatch(_this);
            return Promise.reject(err);
        });
    };
    RestClient.prototype._fetch = function (path, method, headers, query, fetchOptions) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var queryStr, _a, authHeader, tokenInfo, bearerProvider, _b, _c, url, res, wwwauth, _d;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (fetchOptions && fetchOptions.cache === 'no-cache') {
                            // Workaround for back-button not respecting cache control in Chrome/Opera.
                            // Append a query parameter to force a cache entry
                            query = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, query, { nocache: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createUUID"])() });
                        }
                        queryStr = query && Object.keys(query).filter(function (key) { return query[key] !== undefined; }).map(function (key) {
                            return encodeURIComponent(key) +
                                "=" +
                                encodeURIComponent(query[key]);
                        })
                            .join('&');
                        _a = this, authHeader = _a.authHeader, tokenInfo = _a.tokenInfo, bearerProvider = _a.bearerProvider;
                        if (!(!authHeader && !tokenInfo && bearerProvider)) return [3 /*break*/, 2];
                        _b = this;
                        return [4 /*yield*/, bearerProvider.getBearer()];
                    case 1:
                        _b.tokenInfo = tokenInfo = _e.sent();
                        _e.label = 2;
                    case 2:
                        if (!tokenInfo) return [3 /*break*/, 5];
                        if (!(tokenInfo.expires < Date.now())) return [3 /*break*/, 4];
                        console.log("Token expired. Refresh it:");
                        _c = this;
                        return [4 /*yield*/, bearerProvider.refreshBearer()];
                    case 3:
                        _c.tokenInfo = tokenInfo = _e.sent();
                        _e.label = 4;
                    case 4:
                        authHeader = "Bearer " + tokenInfo.token;
                        _e.label = 5;
                    case 5:
                        // In one way or another, we've concluded an Authorization header to use:
                        if (authHeader) {
                            headers.Authorization = authHeader;
                        }
                        url = this.baseUrl + path + (queryStr ? "?" + queryStr : "");
                        return [4 /*yield*/, this.isomorphic.fetch(url, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.fetchOptions, { headers: headers, method: method }, fetchOptions))];
                    case 6:
                        res = _e.sent();
                        if (!(res.status == 401 && this.bearerProvider)) return [3 /*break*/, 9];
                        wwwauth = res.headers.get("www-authenticate");
                        console.log("Got " + res.status + " from " + (this.baseUrl + path));
                        if (!(wwwauth && /Bearer/i.test(wwwauth))) return [3 /*break*/, 9];
                        _d = this;
                        return [4 /*yield*/, this.bearerProvider.refreshBearer()];
                    case 7:
                        _d.tokenInfo = _e.sent();
                        headers.Authorization = "Bearer " + this.tokenInfo.token;
                        return [4 /*yield*/, this.isomorphic.fetch(url, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.fetchOptions, { headers: headers, method: method }, fetchOptions))];
                    case 8:
                        res = _e.sent();
                        _e.label = 9;
                    case 9: return [2 /*return*/, res];
                }
            });
        });
    };
    RestClient.prototype.get = function (path, query, fetchOptions) {
        return this.fetch(path, "GET", { Accept: "application/json; text/plain" }, query, fetchOptions);
    };
    RestClient.prototype.post = function (path, data, fetchOptions) {
        return this.fetch(path, "POST", {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, null, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, fetchOptions, { body: JSON.stringify(data) }));
    };
    RestClient.prototype.delete = function (path, query, body, fetchOptions) {
        return this.fetch(path, "DELETE", { Accept: "application/json; text/plain" }, query, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, fetchOptions, { body: body }));
    };
    return RestClient;
}());

//# sourceMappingURL=restclient.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-client/utils.js":
/*!***********************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-client/utils.js ***!
  \***********************************************************/
/*! exports provided: createUUID, avoidSimultanousCalls, getGlobalId, computePredestinatedId, simpleDigest, buf2hex, updateArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUUID", function() { return createUUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avoidSimultanousCalls", function() { return avoidSimultanousCalls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalId", function() { return getGlobalId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computePredestinatedId", function() { return computePredestinatedId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleDigest", function() { return simpleDigest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buf2hex", function() { return buf2hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateArray", function() { return updateArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");

function createUUID() {
    // Decent solution from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    var d = Date.now();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
    });
    return uuid;
}
function avoidSimultanousCalls(method) {
    var ongoingPromise = null;
    return function () {
        if (!ongoingPromise) {
            ongoingPromise = method.apply(this, arguments).then(function (result) {
                ongoingPromise = null;
                return result;
            });
        }
        return ongoingPromise;
    };
}
function getGlobalId(realm) {
    var prefix = 'ec96b3be-45fc-41d3-b69e-';
    var pad = ['50', '08', 'e1', '40', 'e4', 'e7'];
    if (realm.length > 6)
        throw new Error("Too long realm");
    for (var i = 0; i < realm.length; ++i) {
        var hex = realm.charCodeAt(i).toString(16);
        pad[i] = hex.length === 2 ?
            hex :
            '0' + hex;
    }
    return prefix + pad.join('');
}
function computePredestinatedId(input) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var encoder, data, digest, _a, i;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
            switch (_b.label) {
                case 0:
                    encoder = new TextEncoder();
                    data = encoder.encode(input);
                    _a = Uint8Array.bind;
                    return [4 /*yield*/, crypto.subtle.digest('SHA-256', data)];
                case 1:
                    digest = new (_a.apply(Uint8Array, [void 0, _b.sent()]))();
                    i = 0;
                    return [2 /*return*/, 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                            var nibble = digest[i++] % 16 | 0;
                            var washedNibble = c === 'x' ?
                                nibble :
                                nibble & 0x7 | 0x8;
                            return washedNibble.toString(16);
                        })];
            }
        });
    });
}
function simpleDigest(input) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var encoder, inputBytes, digestBytes, _a;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
            switch (_b.label) {
                case 0:
                    encoder = new TextEncoder();
                    inputBytes = encoder.encode(input);
                    _a = Uint8Array.bind;
                    return [4 /*yield*/, crypto.subtle.digest('SHA-256', inputBytes)];
                case 1:
                    digestBytes = new (_a.apply(Uint8Array, [void 0, _b.sent(), 0, 16]))();
                    return [2 /*return*/, buf2hex(digestBytes)];
            }
        });
    });
}
function buf2hex(buffer) {
    return Array.prototype.map.call(buffer, function (x) { return ('00' + x.toString(16)).slice(-2); }).join('');
}
function updateArray(a, mapper) {
    var retval = a;
    for (var i = 0, l = a.length; i < l; ++i) {
        var t = a[i];
        var mapped = mapper(t);
        if (mapped !== t) {
            if (retval === a)
                retval = a.slice();
            retval[i] = mapped;
        }
    }
    return retval;
}
/*
export function updateArray<T>(a: T[], mapper: (t: T) => T | false): T[] {
  let retval = a;
  let j = 0;
  for (let i=0,l=a.length; i<l; ++i, ++j) {
    const t = a[i];
    const mapped = mapper(t);
    if (mapped === false) {
      // Mapper wants to delete this doc.
      if (retval === a) retval = a.slice();
      retval.splice(j, 1);
      --j; // compensate for ++j
    } else if (mapped !== t) {
      if (retval === a) retval = a.slice();
      retval[j] = mapped;
    }
  }
  return retval;
}
*/ 
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-repo/cache-bust.js":
/*!**************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-repo/cache-bust.js ***!
  \**************************************************************/
/*! exports provided: CacheBust */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheBust", function() { return CacheBust; });
/* harmony import */ var kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kedbackend-schema/schema.json */ "./kedbackend/KED.Backend.API/schema.json");
var kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! kedbackend-schema/schema.json */ "./kedbackend/KED.Backend.API/schema.json", 1);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./kedbackend/js/dist/js/ked-backend-repo/utils.js");


var CacheBust = /** @class */ (function () {
    function CacheBust() {
    }
    CacheBust.getCacheBust = function (table, query, user, includes) {
        var involvedItems = CacheBust.getInvolvedItems(table, query, includes);
        return involvedItems
            .map(function (item) { return localStorage.getItem("cache-bust-" + user + "-" + item); })
            .filter(function (value) { return !!value; })
            .join('/') || 'static';
    };
    CacheBust.invalidateCache = function (reqs, user) {
        for (var _i = 0, _a = CacheBust.getCacheInvalidations(reqs); _i < _a.length; _i++) {
            var item = _a[_i];
            localStorage.setItem("cache-bust-" + user + "-" + item, '' + Date.now());
        }
    };
    CacheBust.getInvolvedItems = function (table, query, includes) {
        var hasEdgesFrom = query.hasEdgesFrom;
        var relatedTables = includes
            .map(function (label) { return kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_0__["tables"][table].relationships[label]; })
            .filter(function (table) { return !!table; });
        if (hasEdgesFrom)
            relatedTables.push("hef" + table);
        return [table, 'master', query.branchId].filter(function (x) { return !!x; }).concat(relatedTables).sort();
    };
    CacheBust.getCacheInvalidations = function (reqs) {
        var invalidationSet = {};
        reqs.forEach(function (req) {
            switch (req.op) {
                case 'add':
                case 'put':
                case 'delete':
                case 'update':
                    invalidationSet[req.table] = true;
                    break;
                case 'link':
                case 'unlink':
                case 'undo-link':
                    invalidationSet[req.sourceTable] = true;
                    invalidationSet["hef-" + Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTableFromLabel"])(req.sourceTable, req.label)] = true;
                    break;
                case 'clear-branch':
                    invalidationSet[req.branchId] = true;
                    break;
                case 'merge':
                    invalidationSet[req.branchId] = true;
                    invalidationSet[req.targetBranchId || "master"] = true;
                    break;
            }
        });
        return Object.keys(invalidationSet);
    };
    return CacheBust;
}());

//# sourceMappingURL=cache-bust.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-repo/delta-collection/apply-mutations-on-deltas.js":
/*!**********************************************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-repo/delta-collection/apply-mutations-on-deltas.js ***!
  \**********************************************************************************************/
/*! exports provided: applyMutationsOnDeltas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMutationsOnDeltas", function() { return applyMutationsOnDeltas; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _delta_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delta-merge */ "./kedbackend/js/dist/js/ked-backend-repo/delta-merge.js");


function applyMutationsOnDeltas(branchId, deltas, mutations, optimistic, userDisplayName, hasAdditionalFilter) {
    var _loop_1 = function (m) {
        switch (m.op) {
            case 'add-related':
                //
                // AddRelated RepoMutation
                //
                if (!hasAdditionalFilter && m.branchId === branchId) {
                    deltas = [{
                            type: 'add',
                            sourceId: m.id,
                            targetId: m.relatedDoc.id,
                            label: m.graphProp,
                            sourceTable: m.table,
                            $meta: optimistic ? 'adding' : 'persisted',
                            dateTime: Date.now(),
                            targetName: m.relatedDoc.name,
                            contributor: userDisplayName
                        }].concat(deltas);
                }
                break;
            case 'clear-branch':
                //
                // ClearBranch RepoMutation
                //
                if (m.branchId === branchId) {
                    deltas = [];
                }
                break;
            case 'delete':
                //
                // Delete RepoMutation
                //
                // This type of mutation can not be performed onto branches. There's no branchId property on m.
                break;
            case 'merge':
                //
                // Merge RepoMutation
                //
                if (m.branchId === branchId) {
                    deltas = [];
                }
                else if (m.targetBranchId === branchId) {
                    // This change will append new deltas to our deltas array but we don't know what would come.
                    // Need to refetch from server.
                    if (!optimistic)
                        return { value: null }; // Caller should check for null and re-fetch data from server.
                }
                break;
            case 'remove-related':
                //
                // Remove-Related RepoMutation
                //
                if (hasAdditionalFilter || m.branchId !== branchId)
                    return "continue";
                deltas = [{
                        type: 'remove',
                        sourceId: m.id,
                        targetId: m.relatedDoc.id,
                        targetName: m.relatedDoc.name,
                        label: m.graphProp,
                        sourceTable: m.table,
                        contributor: userDisplayName,
                        dateTime: Date.now(),
                        $meta: optimistic ? 'adding' : 'persisted'
                    }].concat(deltas);
                break;
            case 'undo-link':
                //
                // Undo-Link RepoMutation
                //
                if (m.branchId !== branchId)
                    return "continue";
                {
                    var idx = deltas.findIndex(function (d) {
                        return (d.type === 'add' || d.type === 'remove' || d.type === 'undo-link') &&
                            d.sourceId === m.id &&
                            d.targetId === m.relatedId;
                    });
                    if (idx < 0)
                        return "continue";
                    // Found an "add" or "remove" delta to change:
                    if (optimistic) {
                        var deltaRelation = deltas[idx];
                        // Mark the existing add/remove delta as currenlty being deleted
                        deltas = deltas.slice(0, idx).concat([
                            tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, deltaRelation, { $meta: optimistic ? 'removing' : 'persisted' })
                        ], deltas.slice(idx + 1));
                    }
                    else {
                        // Persisted. Just remove it:
                        deltas = deltas.slice(0, idx).concat(deltas.slice(idx + 1));
                    }
                }
                break;
            case 'update':
                //
                // Update RepoMutation
                //
                if (m.branchId !== branchId)
                    return "continue";
                {
                    var idx = deltas.findIndex(function (delta) {
                        return delta.type === 'modify' &&
                            delta.targetId === m.id;
                    });
                    if (idx < 0 && !hasAdditionalFilter) {
                        deltas = [{
                                type: 'modify',
                                table: m.table,
                                targetId: m.id,
                                targetName: m.targetName,
                                data: m.deltaDoc,
                                dateTime: Date.now(),
                                contributors: [userDisplayName],
                                $meta: optimistic ? 'adding' : 'persisted',
                            }].concat(deltas);
                    }
                    else {
                        var existingDeltaDoc = deltas[idx];
                        var contributors = existingDeltaDoc.contributors.slice();
                        if (!contributors.includes(userDisplayName)) {
                            contributors.push(userDisplayName);
                        }
                        var newData = Object(_delta_merge__WEBPACK_IMPORTED_MODULE_1__["mergeDeltas"])(existingDeltaDoc.data, m.deltaDoc, { removeUnsetProps: true });
                        if (!optimistic && Object.keys(newData).length === 0) {
                            // Committed mutation that resets a deltaDoc. Remove the deltaDoc entirely:
                            deltas = deltas.slice(0, idx).concat(deltas.slice(idx + 1));
                        }
                        else {
                            // 
                            deltas = [
                                {
                                    type: 'modify',
                                    table: m.table,
                                    targetId: m.id,
                                    targetName: m.targetName,
                                    data: newData,
                                    dateTime: Date.now(),
                                    contributors: contributors,
                                    $meta: optimistic ? 'updating' : 'persisted',
                                }
                            ].concat(deltas.slice(0, idx), deltas.slice(idx + 1));
                        }
                    }
                }
                break;
        }
    };
    for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
        var m = mutations_1[_i];
        var state_1 = _loop_1(m);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return deltas;
}
//# sourceMappingURL=apply-mutations-on-deltas.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-repo/delta-collection/delta-cache.js":
/*!********************************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-repo/delta-collection/delta-cache.js ***!
  \********************************************************************************/
/*! exports provided: DeltaCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeltaCache", function() { return DeltaCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ked_backend_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ked-backend-client */ "./kedbackend/js/dist/js/ked-backend-client/index.js");
/* harmony import */ var _apply_mutations_on_deltas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apply-mutations-on-deltas */ "./kedbackend/js/dist/js/ked-backend-repo/delta-collection/apply-mutations-on-deltas.js");



var DeltaCache = /** @class */ (function () {
    function DeltaCache(getClient, getUser, getUserDisplayName) {
        this.getClient = getClient;
        this.getUser = getUser;
        this.getUserDisplayName = getUserDisplayName;
        this.lookup = {};
    }
    DeltaCache.prototype.applyMutations = function (mutations, _a) {
        var optimistic = (_a === void 0 ? { optimistic: false } : _a).optimistic;
        // Apply mutations locally onto the DeltaCache and notify their subscribers
        for (var _i = 0, _b = Object.keys(this.lookup); _i < _b.length; _i++) {
            var queryKey = _b[_i];
            var cacheEntry = this.lookup[queryKey];
            if (cacheEntry.value) {
                // Instead here: Store the mutations on cacheEntry. No matter if it yet has value or not.
                // Then apply mutation whenever subscribing! (Better handling of mutations that arrives before fetch() is done)
                // (See how I handle this in query-set.ts)
                var newValue = Object(_apply_mutations_on_deltas__WEBPACK_IMPORTED_MODULE_2__["applyMutationsOnDeltas"])(cacheEntry.query.branchId, cacheEntry.value, mutations, optimistic, this.getUserDisplayName(), !!cacheEntry.query.tags);
                if (newValue === null) {
                    // The mutation requires cacheEntry to be refetched from server
                    if (!optimistic) {
                        // Caller has successfully performed the mutations and got success back from server.
                        // It's ok to refetch the deltas from server now:
                        cacheEntry.fetch();
                        // After fetch completes, it will notify the subscribers.
                    }
                }
                if (newValue !== cacheEntry.value) {
                    cacheEntry.optimisticValue = newValue;
                    if (!optimistic)
                        cacheEntry.value = newValue;
                    cacheEntry.notify(newValue);
                }
            }
        }
    };
    DeltaCache.prototype.subscribe = function (query, observer) {
        var _this = this;
        var cacheEntry = this.lookup[query.branchId + query.tags];
        if (!cacheEntry) {
            cacheEntry = new DeltaCacheEntry(this.getClient(), query);
            this.lookup[query.branchId + query.tags] = cacheEntry;
        }
        if (cacheEntry.cleanupTimer) {
            clearTimeout(cacheEntry.cleanupTimer);
            cacheEntry.cleanupTimer = null;
        }
        var subscription = {
            unsubscribe: function () {
                cacheEntry.subscribers = cacheEntry.subscribers.filter(function (_a) {
                    var o = _a.observer;
                    return o !== observer;
                });
                if (cacheEntry.subscribers.length === 0) {
                    cacheEntry.cleanupTimer = setTimeout(function () {
                        if (cacheEntry.subscribers.length === 0) {
                            delete _this.lookup[query.branchId + query.tags];
                        }
                    }, 100);
                }
            }
        };
        cacheEntry.subscribers.push({ observer: observer, subscription: subscription });
        if (cacheEntry.value) {
            // Value has been successfully retrieved already. Pick from cache.
            observer(cacheEntry.optimisticValue || cacheEntry.value, null, subscription);
        }
        else if (cacheEntry.isFetching) {
            // A value is on its way. Sit back and relax. All registered
            // observers (including this one) will be notified when data arrives
            // or fails.
        }
        else if (cacheEntry.error) {
            observer(null, cacheEntry.error, subscription);
        }
        else {
            cacheEntry.fetch();
        }
        return subscription;
    };
    return DeltaCache;
}());

var DeltaCacheEntry = /** @class */ (function () {
    function DeltaCacheEntry(client, query) {
        this.fetchOperationId = 0; // Makes sure a re-fetch will discard the result from any ongoing fetch.
        this.client = client;
        this.query = query;
        this.value = null;
        this.error = null;
        this.optimisticValue = null;
        this.subscribers = [];
        this.isFetching = false;
        this.cleanupTimer = null;
    }
    DeltaCacheEntry.prototype.fetch = function () {
        var _this = this;
        var fetchOperationId = ++this.fetchOperationId;
        this.isFetching = true;
        this.fetchFromServer().then(function (value) {
            // Success
            if (fetchOperationId === _this.fetchOperationId) {
                _this.isFetching = false;
                value.sort(function (a, b) { return b.dateTime - a.dateTime; }); // Latest first
                _this.value = value;
                _this.optimisticValue = value;
                _this.notify(value);
            }
        }).catch(function (error) {
            // Fail
            if (fetchOperationId === _this.fetchOperationId) {
                _this.isFetching = false;
                _this.error = error;
                _this.fail(error);
            }
        });
    };
    DeltaCacheEntry.prototype.fetchFromServer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.query.branchId)
                            throw new Error('Deltas only available on branches');
                        return [4 /*yield*/, this.client.http.get('deltas', this.query)];
                    case 1:
                        res = _c.sent();
                        if (!(res.status >= 300 || res.status < 200)) return [3 /*break*/, 3];
                        _a = _ked_backend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(_ked_backend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    DeltaCacheEntry.prototype.notify = function (value) {
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var _b = _a[_i], observer = _b.observer, subscription = _b.subscription;
            observer(value, null, subscription);
        }
    };
    DeltaCacheEntry.prototype.fail = function (error) {
        var copy = this.subscribers.slice();
        this.subscribers = [];
        for (var _i = 0, copy_1 = copy; _i < copy_1.length; _i++) {
            var _a = copy_1[_i], observer = _a.observer, subscription = _a.subscription;
            observer(null, error, subscription);
        }
    };
    return DeltaCacheEntry;
}());
//# sourceMappingURL=delta-cache.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-repo/delta-collection/delta-collection.js":
/*!*************************************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-repo/delta-collection/delta-collection.js ***!
  \*************************************************************************************/
/*! exports provided: DeltaCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeltaCollection", function() { return DeltaCollection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../observable */ "./kedbackend/js/dist/js/observable/index.js");


var DeltaCollection = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DeltaCollection, _super);
    function DeltaCollection(deltaCache, query) {
        var _this = _super.call(this, function (observer) { return _this.deltaCache.subscribe(query, observer); }) || this;
        _this.deltaCache = deltaCache;
        _this.query = query;
        return _this;
    }
    DeltaCollection.prototype.tags = function () {
        var tags = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tags[_i] = arguments[_i];
        }
        return new DeltaCollection(this.deltaCache, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.query, { tags: tags }));
    };
    return DeltaCollection;
}(_observable__WEBPACK_IMPORTED_MODULE_1__["Collection"]));

//# sourceMappingURL=delta-collection.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-repo/delta-merge.js":
/*!***************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-repo/delta-merge.js ***!
  \***************************************************************/
/*! exports provided: applyDelta, mergeDeltas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyDelta", function() { return applyDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeltas", function() { return mergeDeltas; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");

function applyDelta(doc, delta) {
    var keys = Object.keys(delta);
    var targetDoc = doc;
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (targetDoc === doc)
            targetDoc = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, doc);
        var val = delta[key];
        if (val && typeof val === 'object') {
            var metaInstructions = Object.keys(val)
                .filter(function (key) { return key.startsWith('$'); });
            if (metaInstructions.length > 0) {
                var _loop_1 = function (mi) {
                    var miValue = val[mi];
                    switch (mi) {
                        case "$unset": {
                            // Do nothing on target doc!
                            targetDoc.$wasUnset = true; // Just mark it for re-retrieval after successful posting changes.
                            break;
                        }
                        case "$add": {
                            var valuesToAdd = miValue;
                            if (!Array.isArray(valuesToAdd)) {
                                throw new Error("$add instruction must contain array");
                            }
                            var targetArray = targetDoc[key];
                            if (!Array.isArray(targetArray)) {
                                targetArray = [];
                            }
                            else {
                                targetArray = targetArray.slice(); // On JS side, we must be immutable
                            }
                            targetDoc[key] = targetArray;
                            for (var _i = 0, valuesToAdd_1 = valuesToAdd; _i < valuesToAdd_1.length; _i++) {
                                var v = valuesToAdd_1[_i];
                                if (!targetArray.includes(v)) { // avoid dups
                                    targetArray.push(v);
                                }
                            }
                            break;
                        }
                        case "$remove": {
                            var valuesToRemove_1 = miValue;
                            if (!Array.isArray(valuesToRemove_1)) {
                                throw new Error("$remove instruction must contain array");
                            }
                            var targetArray = targetDoc[key];
                            if (!Array.isArray(targetArray)) {
                                targetArray = [];
                            }
                            targetDoc[key] = targetArray.filter(function (t) { return !valuesToRemove_1.includes(t); });
                            break;
                        }
                    }
                };
                for (var _a = 0, metaInstructions_1 = metaInstructions; _a < metaInstructions_1.length; _a++) {
                    var mi = metaInstructions_1[_a];
                    _loop_1(mi);
                }
                continue;
            }
        }
        targetDoc[key] = val;
    }
    return targetDoc;
}
// {name: "Ulla"}, {name: {$unset:0}
// {tags: {$add: "hej"}}, {tags: {$unset:0}"}
function mergeDeltas(delta1, delta2, _a) {
    var removeUnsetProps = (_a === void 0 ? { removeUnsetProps: false } : _a).removeUnsetProps;
    //return {...delta1, ...delta2};
    var keys = Object.keys(delta2);
    var targetDelta = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, delta1);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        var val = delta2[key];
        if (val && typeof val === 'object') {
            var metaInstructions = Object.keys(val)
                .filter(function (key) { return key.startsWith('$'); });
            if (metaInstructions.length > 0) {
                var _loop_2 = function (mi) {
                    var miValue = val[mi];
                    switch (mi) {
                        case "$unset": {
                            if (removeUnsetProps) {
                                delete targetDelta[key];
                            }
                            else {
                                // No matter if targetDelta is empty or has value. Set it to {$unset:0}
                                // to make sure the very end result will have {$unset:0}
                                targetDelta[key] = { $unset: 0 };
                            }
                            break;
                        }
                        case "$add": {
                            var valuesToAdd_2 = miValue;
                            if (!Array.isArray(valuesToAdd_2)) {
                                throw new Error("$add instruction must contain array");
                            }
                            var targetMetaProp = targetDelta[key];
                            targetMetaProp = targetMetaProp ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, targetMetaProp) : {};
                            targetDelta[key] = targetMetaProp;
                            // First, just check if target metaProp has {$remove: [...items]}
                            // If so, remove any equal items from there before merging the {$add: [...]} arrays.
                            var targetRemoveArray = targetMetaProp.$remove;
                            if (Array.isArray(targetRemoveArray)) {
                                targetMetaProp.$remove =
                                    targetRemoveArray.filter(function (t) { return !valuesToAdd_2.includes(t); });
                                if (targetMetaProp.$remove.length === 0) {
                                    // If $remove array became emtpy. Remove the $remove prop.
                                    delete targetMetaProp.$remove;
                                }
                            }
                            // Now it's time to merge or create target $add array.
                            var targetAddArray = targetMetaProp.$add;
                            targetAddArray = targetAddArray ? targetAddArray.concat(valuesToAdd_2) : valuesToAdd_2.slice();
                            targetMetaProp.$add = targetAddArray;
                            break;
                        }
                        case "$remove": {
                            var valuesToRemove_2 = miValue;
                            if (!Array.isArray(valuesToRemove_2)) {
                                throw new Error("$remove instruction must contain array");
                            }
                            var targetMetaProp = targetDelta[key];
                            targetMetaProp = targetMetaProp ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, targetMetaProp) : {};
                            targetDelta[key] = targetMetaProp;
                            // First, just check if target metaProp has {$add: [...items]}
                            // If so, remove any equal items from there before merging the {$remove: [...]} arrays.
                            var targetAddArray = targetMetaProp.$remove;
                            if (Array.isArray(targetAddArray)) {
                                targetMetaProp.$add =
                                    targetAddArray.filter(function (t) { return !valuesToRemove_2.includes(t); });
                                if (targetMetaProp.$add.length === 0) {
                                    // If $add array became emtpy. Remove the $add prop.
                                    delete targetMetaProp.$add;
                                }
                            }
                            // Now it's time to merge or create target $remove array.
                            var targetRemoveArray = targetMetaProp.$remove;
                            targetRemoveArray = targetRemoveArray ? targetRemoveArray.concat(valuesToRemove_2) : valuesToRemove_2.slice();
                            targetMetaProp.$remove = targetRemoveArray;
                            break;
                        }
                    }
                };
                for (var _b = 0, metaInstructions_2 = metaInstructions; _b < metaInstructions_2.length; _b++) {
                    var mi = metaInstructions_2[_b];
                    _loop_2(mi);
                }
                continue;
            }
        }
        targetDelta[key] = val;
    }
    return targetDelta;
}
//# sourceMappingURL=delta-merge.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-repo/index.js":
/*!*********************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-repo/index.js ***!
  \*********************************************************/
/*! exports provided: KedBackendCollection, KedBackendQuery, KedBackendRepo, KedBackendSubscription, KedBackendWriter, MutationQueue, QuerySet, mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kedbackend_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kedbackend-collection */ "./kedbackend/js/dist/js/ked-backend-repo/kedbackend-collection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBackendCollection", function() { return _kedbackend_collection__WEBPACK_IMPORTED_MODULE_0__["KedBackendCollection"]; });

/* harmony import */ var _kedbackend_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kedbackend-query */ "./kedbackend/js/dist/js/ked-backend-repo/kedbackend-query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBackendQuery", function() { return _kedbackend_query__WEBPACK_IMPORTED_MODULE_1__["KedBackendQuery"]; });

/* harmony import */ var _kedbackend_repo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kedbackend-repo */ "./kedbackend/js/dist/js/ked-backend-repo/kedbackend-repo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBackendRepo", function() { return _kedbackend_repo__WEBPACK_IMPORTED_MODULE_2__["KedBackendRepo"]; });

/* harmony import */ var _kedbackend_subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kedbackend-subscription */ "./kedbackend/js/dist/js/ked-backend-repo/kedbackend-subscription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBackendSubscription", function() { return _kedbackend_subscription__WEBPACK_IMPORTED_MODULE_3__["KedBackendSubscription"]; });

/* harmony import */ var _kedbackend_writer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kedbackend-writer */ "./kedbackend/js/dist/js/ked-backend-repo/kedbackend-writer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBackendWriter", function() { return _kedbackend_writer__WEBPACK_IMPORTED_MODULE_4__["KedBackendWriter"]; });

/* harmony import */ var _mutation_queue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mutation-queue */ "./kedbackend/js/dist/js/ked-backend-repo/mutation-queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MutationQueue", function() { return _mutation_queue__WEBPACK_IMPORTED_MODULE_5__["MutationQueue"]; });

/* harmony import */ var _query_set__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./query-set */ "./kedbackend/js/dist/js/ked-backend-repo/query-set.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuerySet", function() { return _query_set__WEBPACK_IMPORTED_MODULE_6__["QuerySet"]; });

/* harmony import */ var _observable_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../observable/mixin */ "./kedbackend/js/dist/js/observable/mixin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return _observable_mixin__WEBPACK_IMPORTED_MODULE_7__["mixin"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-repo/kedbackend-collection.js":
/*!*************************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-repo/kedbackend-collection.js ***!
  \*************************************************************************/
/*! exports provided: KedBackendCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KedBackendCollection", function() { return KedBackendCollection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ked_backend_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ked-backend-client */ "./kedbackend/js/dist/js/ked-backend-client/index.js");
/* harmony import */ var _kedbackend_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kedbackend-subscription */ "./kedbackend/js/dist/js/ked-backend-repo/kedbackend-subscription.js");
/* harmony import */ var _cache_bust__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache-bust */ "./kedbackend/js/dist/js/ked-backend-repo/cache-bust.js");
/* harmony import */ var _kedbackend_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kedbackend-query */ "./kedbackend/js/dist/js/ked-backend-repo/kedbackend-query.js");
/* harmony import */ var _observable_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observable/collection */ "./kedbackend/js/dist/js/observable/collection.js");






/**
 * Represents a "live" query against a table or filtered table.
 */
var KedBackendCollection = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](KedBackendCollection, _super);
    function KedBackendCollection(repo, table, query) {
        var _this = _super.call(this, function (observer) {
            var subscription = new _kedbackend_subscription__WEBPACK_IMPORTED_MODULE_2__["KedBackendSubscription"](observer, _this);
            _this.repo.querySet.subscribe(subscription);
            return subscription;
        }) || this;
        _this.repo = repo;
        _this.table = table;
        _this.query = query;
        return _this;
    }
    Object.defineProperty(KedBackendCollection.prototype, "queryKey", {
        get: function () {
            return _kedbackend_query__WEBPACK_IMPORTED_MODULE_4__["KedBackendQuery"].queryKey(this.table, this.query);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KedBackendCollection.prototype, "includes", {
        get: function () {
            return this._includes || (this._includes = [].concat(this.query.include || []));
        },
        enumerable: true,
        configurable: true
    });
    KedBackendCollection.prototype.applyQuery = function (query) {
        return new KedBackendCollection(this.repo, this.table, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.query, query));
    };
    KedBackendCollection.prototype.addToQueryArrayProp = function (arrayProp, entries) {
        var _a;
        return this.applyQuery((_a = {}, _a[arrayProp] = (this.query[arrayProp] || []).concat(entries), _a));
    };
    KedBackendCollection.prototype.addFlags = function () {
        var flags = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            flags[_i] = arguments[_i];
        }
        return this.addToQueryArrayProp("flags", flags);
    };
    KedBackendCollection.prototype.debug = function () {
        return this.applyQuery({ debug: true });
    };
    KedBackendCollection.prototype.idsOnly = function () {
        return this.addFlags("idsOnly");
    };
    KedBackendCollection.prototype.idsAndNamesOnly = function () {
        return this.addFlags("idsAndNamesOnly");
    };
    KedBackendCollection.prototype.includeIdsOnly = function () {
        return this.addFlags("includeIdsOnly");
    };
    KedBackendCollection.prototype.includeIdsAndNamesOnly = function () {
        return this.addFlags("includeIdsAndNamesOnly");
    };
    KedBackendCollection.prototype.between = function (from, to) {
        return this.applyQuery({ from: from, to: to });
    };
    KedBackendCollection.prototype.role = function (role) {
        return this.applyQuery({ role: role });
    };
    KedBackendCollection.prototype.hasEdgesFrom = function (ids) {
        if (ids.length === 0 || ids.some(function (id) { return !id; }))
            throw new Error("Invalid id list given to Collection.hasEdgesFrom(" + JSON.stringify(ids) + ")");
        var hef = this.addToQueryArrayProp("hasEdgesFrom", ids);
        return hef;
    };
    KedBackendCollection.prototype.hasEdgesTo = function (ids) {
        if (ids.length === 0 || ids.some(function (id) { return !id; }))
            throw new Error("Invalid id list given to Collection.hasEdgesTo(" + JSON.stringify(ids) + ")");
        var het = this.addToQueryArrayProp("hasEdgesTo", ids);
        return het;
    };
    KedBackendCollection.prototype.id = function (id) {
        var _this = this;
        return this.applyQuery({ ids: [id] }).single({
            onZero: function () { throw new Error("Could not find entity in " + _this.table + " with id " + id); },
            onMany: function () { throw new Error("Multiple entries in " + _this.table + " with id " + id); },
        });
    };
    KedBackendCollection.prototype.ids = function (ids) {
        return this.applyQuery({ ids: ids });
    };
    KedBackendCollection.prototype.name = function (name) {
        return this.applyQuery({ name: name });
    };
    KedBackendCollection.prototype.tags = function () {
        var tags = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tags[_i] = arguments[_i];
        }
        return this.applyQuery({ tags: tags });
    };
    KedBackendCollection.prototype.branchId = function (branchId) {
        return this.applyQuery({ branchId: branchId });
    };
    KedBackendCollection.prototype.include = function () {
        var graphs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            graphs[_i] = arguments[_i];
        }
        return this.addToQueryArrayProp("include", graphs);
    };
    KedBackendCollection.prototype.cacheOptimized = function () {
        return this.applyQuery({ cacheBust: _cache_bust__WEBPACK_IMPORTED_MODULE_3__["CacheBust"].getCacheBust(this.table, this.query, this.repo.getUser(), this.includes) });
    };
    KedBackendCollection.prototype.mutationsOnEmpty = function (mutationFactory) {
        var tx = new _ked_backend_client__WEBPACK_IMPORTED_MODULE_1__["BatchRunner"]();
        mutationFactory(tx);
        return this.applyQuery({ mutationsOnEmpty: tx.mutationRequests });
    };
    KedBackendCollection.prototype.single = function (throwers) {
        var _this = this;
        var _a = throwers || {}, onZero = _a.onZero, onMany = _a.onMany;
        return this.toValue().map(function (items) {
            if (items.length === 0) {
                if (onZero)
                    onZero();
                else
                    throw new Error("Single item of " + _this.table + " expected to be returned by query " + JSON.stringify(_this.query) + " but none was found.");
            }
            if (items.length > 1) {
                debugger;
                if (onMany)
                    onMany();
                else
                    console.log("Single item of " + _this.table + " expected to be returned by query " + JSON.stringify(_this.query) + " but " + items.length + " was found.");
            }
            return items[0];
        });
    };
    /*combineLatest<TOther>(other: QueryObservable<TOther>) {
      return this.render(x => x).combineLatest(other);
    }*/
    KedBackendCollection.prototype.update = function (doc, changes, debounce) {
        if (debounce === void 0) { debounce = 1000; }
        this.repo.writer.mutate([{
                op: 'update',
                table: this.table,
                branchId: this.query.branchId,
                id: doc.id,
                deltaDoc: changes,
                targetName: doc.name
            }], debounce);
    };
    KedBackendCollection.prototype.addRelated = function (id, label, relatedDoc) {
        this.repo.writer.mutate([{
                op: 'add-related',
                table: this.table,
                branchId: this.query.branchId,
                id: id,
                graphProp: label,
                relatedDoc: relatedDoc
            }], 0);
    };
    KedBackendCollection.prototype.add = function (doc) {
        this.repo.writer.mutate([{
                op: 'add',
                id: doc.id,
                table: this.table,
                doc: doc
            }], 0);
    };
    KedBackendCollection.prototype.removeRelated = function (id, label, relatedDoc) {
        this.repo.writer.mutate([{
                op: 'remove-related',
                table: this.table,
                branchId: this.query.branchId,
                id: id,
                graphProp: label,
                relatedDoc: relatedDoc
            }], 0);
    };
    KedBackendCollection.prototype.undoLink = function (id, label, relatedId) {
        if (!this.query.branchId)
            throw new Error("undo links can only be performed on branches");
        this.repo.writer.mutate([{
                op: 'undo-link',
                table: this.table,
                branchId: this.query.branchId,
                id: id,
                graphProp: label,
                relatedId: relatedId
            }], 0);
    };
    KedBackendCollection.prototype.delete = function () {
        var _this = this;
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        this.repo.writer.mutate(ids.map(function (id) { return ({
            op: 'delete',
            table: _this.table,
            id: id
        }); }), 0);
    };
    KedBackendCollection.prototype.unsubscribe = function (subscription) {
        this.repo.querySet.unsubscribe(subscription);
    };
    return KedBackendCollection;
}(_observable_collection__WEBPACK_IMPORTED_MODULE_5__["Collection"]));

/*mixin(
  KedBackendCollection.prototype,
  MappedCollection.prototype,
  "map", "flat", "concat", "render", "load");*/
//# sourceMappingURL=kedbackend-collection.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-repo/kedbackend-query.js":
/*!********************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-repo/kedbackend-query.js ***!
  \********************************************************************/
/*! exports provided: KedBackendQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KedBackendQuery", function() { return KedBackendQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ked_backend_client_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ked-backend-client/utils */ "./kedbackend/js/dist/js/ked-backend-client/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./kedbackend/js/dist/js/ked-backend-repo/utils.js");
/* harmony import */ var _delta_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delta-merge */ "./kedbackend/js/dist/js/ked-backend-repo/delta-merge.js");




var KedBackendQuery = /** @class */ (function () {
    function KedBackendQuery(table, query, user, repo, mutationQueue) {
        this.table = table;
        this.query = query;
        this.user = user;
        this.repo = repo;
        this.mutationQueue = mutationQueue;
        this.subscriptions = [];
        this.data = [];
        this.gotInitialResponse = false;
        this.invalid = false;
        this.loadedVersion = 0;
        this._loadPromise = null;
        this.includes = query.include ?
            typeof query.include === 'string' ?
                [query.include] :
                query.include :
            [];
    }
    KedBackendQuery.queryKey = function (table, query) {
        var mutationsOnEmpty = query.mutationsOnEmpty, comparableProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](query, ["mutationsOnEmpty"]);
        return table + JSON.stringify(comparableProps);
    };
    Object.defineProperty(KedBackendQuery.prototype, "queryKey", {
        get: function () {
            return KedBackendQuery.queryKey(this.table, this.query);
        },
        enumerable: true,
        configurable: true
    });
    KedBackendQuery.prototype.subscribe = function (subscription) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.subscriptions.push(subscription);
                        if (!(this.gotInitialResponse && !this.invalid)) return [3 /*break*/, 1];
                        data = this.getDataWithMutationsApplied(this.mutationQueue.get(), true, this.data);
                        subscription.notifySubscriber(data, this.error);
                        return [3 /*break*/, 4];
                    case 1:
                        data = this.queryLocally();
                        if (!data) return [3 /*break*/, 2];
                        this.data = data;
                        this.error = null;
                        subscription.notifySubscriber(data, this.error);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.load()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    KedBackendQuery.prototype.load = function (version) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loadPromise;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.gotInitialResponse) {
                            // mutationsOnEmpty should never be used twice.
                            delete this.query.mutationsOnEmpty;
                        }
                        if (!(!version && this._loadPromise)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._loadPromise];
                    case 1: 
                    // loading is ongoing, and caller does not require a recent refresh.
                    // wait for the ongoing load to complete
                    return [2 /*return*/, _a.sent()];
                    case 2:
                        version = version || this.repo.writer.persistedVersion.value;
                        loadPromise = this._loadPromise = this._load(version).then(function (data) {
                            if (_this._loadPromise === loadPromise) {
                                _this.data = data;
                                _this.loadedVersion = Math.max(_this.loadedVersion, version);
                            }
                        }).catch(function (error) {
                            if (_this._loadPromise === loadPromise) {
                                // Noone has refreshed our load. The error is the final result. Set it.
                                _this.error = error;
                            }
                        }).then(function () {
                            if (_this._loadPromise === loadPromise) {
                                // Noone has refreshed our load. We're finished. Data or error is already set.
                                // Mark gotInitialResponse to true and notify subscribers.
                                _this._loadPromise = null;
                                _this.gotInitialResponse = true;
                                _this.notifySubscribers(_this.mutationQueue.get());
                            }
                            else {
                                // A more recent call to load() is ongoing, OR was ongoing but responded
                                // before us.
                                // In any case return this._loadPromise. If it's ongoing we'll wait for it
                                // to finish. If it's null, we'll be returning finally here without
                                // any action, because the action was taken by the refresher.
                                return _this._loadPromise; // Wait for the refreshed load to complete
                            }
                        });
                        return [4 /*yield*/, loadPromise];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KedBackendQuery.prototype._load = function (version) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.mutationQueue.affectsQuery(this.table, this.query, this.includes)) return [3 /*break*/, 2];
                        // There are outgoing mutations that affects this query.
                        // Need to wait till they reach server and server responds with OK before querying
                        // the server. Otherwise, we may get inaccurate data from server.
                        return [4 /*yield*/, this.repo.writer.waitForVersionToPersist(version)];
                    case 1:
                        // There are outgoing mutations that affects this query.
                        // Need to wait till they reach server and server responds with OK before querying
                        // the server. Otherwise, we may get inaccurate data from server.
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.queryServer()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KedBackendQuery.prototype.unsubscribe = function (subscription) {
        this.subscriptions = this.subscriptions.filter(function (s) { return s !== subscription; });
    };
    KedBackendQuery.prototype.commitMutations = function (mutations, version) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _i, mutations_1, m, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.data) return [3 /*break*/, 9];
                        _i = 0, mutations_1 = mutations;
                        _a.label = 1;
                    case 1:
                        if (!(_i < mutations_1.length)) return [3 /*break*/, 8];
                        m = mutations_1[_i];
                        if (!(m.op === 'clear-branch' && (m.branchId === this.query.branchId))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.refreshOrInvalidate(version)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        if (!(m.op === 'merge' && (!m.targetBranchId ||
                            m.branchId === this.query.branchId ||
                            m.targetBranchId === this.query.branchId))) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.refreshOrInvalidate(version)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                    case 5:
                        if (!(m.op === 'update' && ((m.deltaDoc.tags && this.query.tags) ||
                            (m.deltaDoc.name && this.query.name)))) return [3 /*break*/, 7];
                        // A tag may have been added, or renamed, and
                        // the query is dependent on the same property.
                        // The query must be refreshed from server as we cannot
                        // commit the mutations locally as we don't have all info.
                        return [4 /*yield*/, this.refreshOrInvalidate(version)];
                    case 6:
                        // A tag may have been added, or renamed, and
                        // the query is dependent on the same property.
                        // The query must be refreshed from server as we cannot
                        // commit the mutations locally as we don't have all info.
                        _a.sent();
                        return [2 /*return*/];
                    case 7:
                        _i++;
                        return [3 /*break*/, 1];
                    case 8:
                        data = this.getDataWithMutationsApplied(mutations, false, this.data);
                        this.data = data;
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    KedBackendQuery.prototype.refreshOrInvalidate = function (version) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.subscriptions.length === 0)) return [3 /*break*/, 1];
                        this.invalid = true;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.load(version)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    KedBackendQuery.prototype.notifySubscribers = function (optimisticMutations) {
        var _this = this;
        if (this.data && this.gotInitialResponse) {
            var data_1 = this.getDataWithMutationsApplied(optimisticMutations, true, this.data);
            this.subscriptions.forEach(function (s) {
                s.notifySubscriber(data_1, _this.error);
            });
        }
    };
    KedBackendQuery.prototype.queryLocally = function () {
        return this.repo.querySet.queryLocally(this.table, this.query, this.includes);
    };
    KedBackendQuery.prototype.queryServer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repo.getClient().list(this.table, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.query))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    KedBackendQuery.prototype.getDataWithMutationsApplied = function (mutations, optimistic, data) {
        var _this = this;
        mutations.forEach(function (mutation) {
            data = _this.applyMutationsOnData(data, mutation, optimistic);
        });
        return data;
    };
    KedBackendQuery.prototype.applyMutationsOnData = function (data, m, optimistic) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["branchSensitive"])(m) && m.branchId != this.query.branchId)
            return data;
        var _a = this, table = _a.table, includes = _a.includes, listOptions = _a.query;
        var sourceIds = listOptions.hasEdgesFrom ? [].concat(listOptions.hasEdgesFrom || []) : [];
        var requestedTags = listOptions.tags ? [].concat(listOptions.tags || []) : [];
        switch (m.op) {
            case 'update': {
                return Object(_ked_backend_client_utils__WEBPACK_IMPORTED_MODULE_1__["updateArray"])(data, function (doc) {
                    if (doc.id === m.id) {
                        // Apply delta on updated document
                        var updatedDoc = Object(_delta_merge__WEBPACK_IMPORTED_MODULE_3__["applyDelta"])(doc, m.deltaDoc);
                        if (optimistic)
                            updatedDoc.$meta = 'updating';
                        return updatedDoc;
                    }
                    // If id does not apply to this doc, search in graphs the id is found
                    // among graph included docs, and if so, update that one:
                    includes.forEach(function (label) {
                        var _a;
                        var includedDocs = doc[label];
                        if (includedDocs) {
                            var updatedArray = Object(_ked_backend_client_utils__WEBPACK_IMPORTED_MODULE_1__["updateArray"])(includedDocs, function (related) {
                                if (related.id !== m.id)
                                    return related;
                                var updatedRelated = Object(_delta_merge__WEBPACK_IMPORTED_MODULE_3__["applyDelta"])(related, m.deltaDoc);
                                if (optimistic)
                                    updatedRelated.$meta = 'updating';
                                return updatedRelated;
                            });
                            if (updatedArray !== includedDocs) {
                                doc = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, doc, (_a = {}, _a[label] = updatedArray, _a));
                            }
                        }
                    });
                    return doc;
                });
            }
            case 'add':
                if (table === m.table) {
                    if (listOptions.tags) {
                        var queriedTags_1 = [].concat(listOptions.tags); // tag can be either string or string[]. Make is string[] always.
                        if (m.doc.tags && m.doc.tags.some(function (tag) { return queriedTags_1.includes(tag); })) {
                            return data.concat([m.doc]); // Make the added doc appear in the result (optimistic mutation)
                        }
                    }
                    // Todo, apply also for other list options, like ids:
                    // The above code for 'add' was only written to cover the use case of teachers-page notifications!
                }
                return data; // fallback case - query was not affected.
            case 'add-related':
                if (table === m.table && includes.indexOf(m.graphProp) !== -1) {
                    // If expression is `db.courseBlocks....whatever.. .include("abilities")`, detect: db.courseBlocks.addRelated(blockId, 'abilities', ...)
                    // ...because table = 'courseBlocks' and includes has "abilities".
                    return Object(_ked_backend_client_utils__WEBPACK_IMPORTED_MODULE_1__["updateArray"])(data, function (doc) {
                        var _a;
                        if (doc.id !== m.id)
                            return doc;
                        var relatedDoc = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, m.relatedDoc);
                        if (optimistic)
                            relatedDoc.$meta = 'adding';
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, doc, (_a = {}, _a[m.graphProp] = doc[m.graphProp].concat([relatedDoc]), _a));
                    });
                }
                if (listOptions.hasEdgesFrom) {
                    if (sourceIds.includes(m.id)) {
                        // If expression is:
                        //   `db.courseBlocks.hasEdgesFrom([courseId])`  (meaning table='courseBlocks' and sourceIds includes courseId)
                        // , detect: db.courseInstances.addRelated(courseId, 'courseBlocks', ....) // m.graphProp === 'blocks'--> getTableFromLabel --> 'courseBlocks'
                        if (table === Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getTableFromLabel"])(m.table, m.graphProp)) {
                            if (!listOptions.tags)
                                return data.concat(this.setGraphProps(m.relatedDoc));
                            if (m.relatedDoc.tags && requestedTags.some(function (tag) { return m.relatedDoc.tags.includes(tag); })) {
                                return data.concat(this.setGraphProps(m.relatedDoc));
                            }
                        }
                    }
                }
                if (listOptions.ids && listOptions.ids.some(function (id) { return id === m.relatedDoc.id; })) {
                    // A certain ID is observed. A doc with this id is being added.
                    // Add the doc to the result. Exactly this WILL happen in the following typical scenario:
                    // 1. User adds a related document to a list.
                    // 2. Document remains within the MutationQueue while batch-request is being processed by server.
                    // 3. User clicks the added item to edit or view it (or our component redirects to its editor)
                    // 4. A new query of that particular ID is subscribed to {ids=[theId]}
                    //    KedBackendQuery.subscribe then does this:
                    //      1. Call queryLocally() before querying server
                    //      2. queryLocally() inspects mutations and finds a match, returning an empty list
                    //         (assumes as we are adding it, it can't exist on the server anyway)
                    //      3. KedBackendQUery applies mutations onto the empty list, and ends up here to add
                    //         it optimistically.
                    //      4. When server responds with 200 OK, calls us here again with optimistic=false
                    //         to "persist" it in the query's data array.
                    //      4B: If not 200 OK, mutation may be gone and the subscriber will se an error page
                    //         "Could not find entity with id X." along with a red error message on the screen
                    //         about that it failed to save on server.
                    return data.concat(this.setGraphProps(m.relatedDoc));
                }
                return data;
            case 'remove-related':
                if (table === m.table && includes.indexOf(m.graphProp) !== -1) {
                    return Object(_ked_backend_client_utils__WEBPACK_IMPORTED_MODULE_1__["updateArray"])(data, function (doc) {
                        var _a;
                        var includedDocs = doc[m.graphProp];
                        if (!includedDocs)
                            return doc;
                        if (doc.id !== m.id)
                            return doc;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, doc, (_a = {}, _a[m.graphProp] = optimistic ?
                            // Mark related-doc-to-remove with $meta: 'deleting'
                            includedDocs.map(function (d) { return d.id !== m.relatedDoc.id ?
                                d : tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, d, { $meta: 'deleting' }); }) :
                            // Delete related-doc-to-remove from doc[grapProp]:
                            includedDocs.filter(function (d) { return d.id !== m.relatedDoc.id; }), _a));
                    });
                }
                if (listOptions.hasEdgesFrom) {
                    if (sourceIds.includes(m.id))
                        return optimistic ?
                            data.map(function (d) { return d.id === m.relatedDoc.id ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, d, { $meta: 'deleting' }) : d; }) :
                            data.filter(function (d) { return d.id !== m.relatedDoc.id; });
                }
                return data;
            case 'delete':
                if (table === m.table) {
                    return data.filter(function (d) { return d.id !== m.id; });
                }
                else if (listOptions.include) {
                    var includedTables = includes
                        .map(function (label) { return ({ label: label, table: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getTableFromLabel"])(table, label) }); });
                    var labels_1 = includedTables.filter(function (_a) {
                        var table = _a.table;
                        return table === m.table;
                    });
                    if (labels_1.length > 0) {
                        return Object(_ked_backend_client_utils__WEBPACK_IMPORTED_MODULE_1__["updateArray"])(data, function (doc) {
                            labels_1.forEach(function (_a) {
                                var label = _a.label;
                                var _b;
                                var relatedDocs = doc[label];
                                if (relatedDocs) {
                                    doc = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, doc, (_b = {}, _b[label] = optimistic ?
                                        relatedDocs.map(function (d) { return d.id === m.id ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, d, { $meta: 'deleting' }) : d; }) :
                                        relatedDocs.filter(function (_a) {
                                            var id = _a.id;
                                            return id !== m.id;
                                        }), _b));
                                }
                            });
                            return doc;
                        });
                    }
                }
                return data;
            default:
                return data;
        }
    };
    KedBackendQuery.prototype.setGraphProps = function (doc) {
        var copy = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, doc);
        this.includes.forEach(function (label) { return copy[label] = copy[label] || []; });
        return copy;
    };
    return KedBackendQuery;
}());

//# sourceMappingURL=kedbackend-query.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-repo/kedbackend-repo.js":
/*!*******************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-repo/kedbackend-repo.js ***!
  \*******************************************************************/
/*! exports provided: KedBackendRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KedBackendRepo", function() { return KedBackendRepo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");
/* harmony import */ var kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kedbackend-schema/schema.json */ "./kedbackend/KED.Backend.API/schema.json");
var kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! kedbackend-schema/schema.json */ "./kedbackend/KED.Backend.API/schema.json", 1);
/* harmony import */ var _kedbackend_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kedbackend-collection */ "./kedbackend/js/dist/js/ked-backend-repo/kedbackend-collection.js");
/* harmony import */ var _query_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query-set */ "./kedbackend/js/dist/js/ked-backend-repo/query-set.js");
/* harmony import */ var _mutation_queue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mutation-queue */ "./kedbackend/js/dist/js/ked-backend-repo/mutation-queue.js");
/* harmony import */ var _kedbackend_writer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kedbackend-writer */ "./kedbackend/js/dist/js/ked-backend-repo/kedbackend-writer.js");
/* harmony import */ var _delta_collection_delta_collection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delta-collection/delta-collection */ "./kedbackend/js/dist/js/ked-backend-repo/delta-collection/delta-collection.js");







var KedBackendRepo = /** @class */ (function () {
    function KedBackendRepo(getClient, getUser, getUserDisplayName, defaultQueryOptions, mutationQueue, querySet, writer, cacheOptimized) {
        var _this = this;
        this.getClient = getClient;
        this.getUser = getUser;
        this.getUserDisplayName = getUserDisplayName;
        this.defaultQueryOptions = defaultQueryOptions;
        this.mutationQueue = mutationQueue;
        this.querySet = querySet;
        this.writer = writer;
        this.cacheOptimized = cacheOptimized;
        if (!defaultQueryOptions)
            this.defaultQueryOptions = {};
        if (!mutationQueue)
            this.mutationQueue = new _mutation_queue__WEBPACK_IMPORTED_MODULE_4__["MutationQueue"]();
        if (!querySet)
            this.querySet = new _query_set__WEBPACK_IMPORTED_MODULE_3__["QuerySet"](this.mutationQueue);
        if (!writer)
            this.writer = new _kedbackend_writer__WEBPACK_IMPORTED_MODULE_5__["KedBackendWriter"](this.mutationQueue, this.querySet, getClient, getUser, getUserDisplayName);
        Object.keys(kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_1__["tables"]).forEach(function (table) {
            var collection = new _kedbackend_collection__WEBPACK_IMPORTED_MODULE_2__["KedBackendCollection"](_this, table, defaultQueryOptions || {});
            if (cacheOptimized) {
                collection = collection.cacheOptimized();
            }
            _this[table] = collection;
        });
        this.deltas = new _delta_collection_delta_collection__WEBPACK_IMPORTED_MODULE_6__["DeltaCollection"](this.writer.deltaCache, {
            branchId: this.defaultQueryOptions.branchId // If branchId is undefined. DeltaCollection will respond with Error on subscribe()
        });
    }
    KedBackendRepo.prototype.table = function (tableName) {
        var collection = new _kedbackend_collection__WEBPACK_IMPORTED_MODULE_2__["KedBackendCollection"](this, tableName, this.defaultQueryOptions);
        if (this.cacheOptimized)
            collection = collection.cacheOptimized();
        return collection;
    };
    KedBackendRepo.prototype._clone = function (queryOptions, cacheOptimized) {
        var clone = new KedBackendRepo(this.getClient, this.getUser, this.getUserDisplayName, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.defaultQueryOptions, queryOptions), this.mutationQueue, this.querySet, this.writer, cacheOptimized === undefined ? this.cacheOptimized : cacheOptimized);
        return clone;
    };
    KedBackendRepo.prototype.branch = function (branchId) {
        return this._clone({ branchId: branchId });
    };
    KedBackendRepo.prototype.role = function (role) {
        return this._clone({ role: role });
    };
    KedBackendRepo.prototype.optimizeCache = function () {
        return this._clone({}, true);
    };
    KedBackendRepo.prototype.clearBranch = function () {
        if (!this.defaultQueryOptions.branchId)
            throw new Error("Cannot clear master branch");
        this.writer.mutate([{ op: 'clear-branch', branchId: this.defaultQueryOptions.branchId }], 0);
    };
    KedBackendRepo.prototype.merge = function (targetBranchId) {
        if (!this.defaultQueryOptions.branchId)
            throw new Error("Cannot merge from master branch");
        this.writer.mutate([{ op: 'merge', branchId: this.defaultQueryOptions.branchId, targetBranchId: targetBranchId }], 0);
    };
    KedBackendRepo.prototype.saveNow = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.writer.waitForVersionToPersist(this.writer.currentVersion)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return KedBackendRepo;
}());

//# sourceMappingURL=kedbackend-repo.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-repo/kedbackend-subscription.js":
/*!***************************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-repo/kedbackend-subscription.js ***!
  \***************************************************************************/
/*! exports provided: KedBackendSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KedBackendSubscription", function() { return KedBackendSubscription; });
var KedBackendSubscription = /** @class */ (function () {
    function KedBackendSubscription(subscriber, collection) {
        this.subscriber = subscriber;
        this.collection = collection;
    }
    KedBackendSubscription.prototype.notifySubscriber = function (data, error) {
        try {
            if (error)
                this.subscriber([], error, this);
            else if (data !== this.lastNotifiedData) { // Will in-fact be equal by reference if data is same as last notification (as we use an immutable approach on data)
                this.lastNotifiedData = data;
                this.subscriber(data, error, this);
            }
        }
        catch (ex) {
            try {
                this.subscriber([], ex, this);
            }
            catch (ex2) {
                console.error("Error while notifying KedBackendSubscriber:", ex2, 'originally notified error:', ex);
            }
        }
    };
    KedBackendSubscription.prototype.unsubscribe = function () {
        this.collection.unsubscribe(this);
    };
    return KedBackendSubscription;
}());

//# sourceMappingURL=kedbackend-subscription.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-repo/kedbackend-writer.js":
/*!*********************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-repo/kedbackend-writer.js ***!
  \*********************************************************************/
/*! exports provided: KedBackendWriter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KedBackendWriter", function() { return KedBackendWriter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mutation_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutation-queue */ "./kedbackend/js/dist/js/ked-backend-repo/mutation-queue.js");
/* harmony import */ var _ked_backend_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ked-backend-client */ "./kedbackend/js/dist/js/ked-backend-client/index.js");
/* harmony import */ var kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kedbackend-schema/schema.json */ "./kedbackend/KED.Backend.API/schema.json");
var kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! kedbackend-schema/schema.json */ "./kedbackend/KED.Backend.API/schema.json", 1);
/* harmony import */ var _cache_bust__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cache-bust */ "./kedbackend/js/dist/js/ked-backend-repo/cache-bust.js");
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observable */ "./kedbackend/js/dist/js/observable/index.js");
/* harmony import */ var _delta_collection_delta_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delta-collection/delta-cache */ "./kedbackend/js/dist/js/ked-backend-repo/delta-collection/delta-cache.js");







var KedBackendWriter = /** @class */ (function () {
    function KedBackendWriter(mutationQueue, querySet, getClient, getUser, getUserDisplayName) {
        this.mutationQueue = mutationQueue;
        this.querySet = querySet;
        this.getClient = getClient;
        this.getUser = getUser;
        this.getUserDisplayName = getUserDisplayName;
        this._timeoutId = null;
        this._isSavingPromise = null;
        this.currentVersion = 0;
        this.persistedVersion = new _observable__WEBPACK_IMPORTED_MODULE_5__["Emitter"](0);
        this.errorSubscribers = [];
        this.stateSubscribers = [];
        this.deltaCache = new _delta_collection_delta_cache__WEBPACK_IMPORTED_MODULE_6__["DeltaCache"](getClient, getUser, getUserDisplayName);
    }
    Object.defineProperty(KedBackendWriter.prototype, "isSaving", {
        get: function () { return !!this._isSavingPromise; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KedBackendWriter.prototype, "isEdited", {
        get: function () { return this.mutationQueue.get().length > 0; },
        enumerable: true,
        configurable: true
    });
    KedBackendWriter.prototype.onError = function (callback) {
        this.errorSubscribers.push(callback);
    };
    KedBackendWriter.prototype.onStateChange = function (callback) {
        this.stateSubscribers.push(callback);
    };
    KedBackendWriter.prototype.off = function (callback) {
        this.errorSubscribers = this.errorSubscribers.filter(function (s) { return s !== callback; });
        this.stateSubscribers = this.stateSubscribers.filter(function (s) { return s !== callback; });
    };
    KedBackendWriter.prototype.dispatchError = function (error, retryable) {
        var _this = this;
        this.errorSubscribers.forEach(function (callback) {
            try {
                callback(error, retryable, _this);
            }
            catch (_) { }
        });
    };
    KedBackendWriter.prototype.dispatchStateChange = function () {
        var _this = this;
        this.stateSubscribers.forEach(function (callback) {
            try {
                callback(_this);
            }
            catch (_) { }
        });
    };
    KedBackendWriter.prototype.mutate = function (mutations, debounce) {
        this.mutationQueue.add(mutations);
        ++this.currentVersion;
        this.dispatchStateChange();
        this.querySet.notifySubscribers();
        this.deltaCache.applyMutations(this.mutationQueue.get(), { optimistic: true });
        if (!this._isSavingPromise) {
            if (this._timeoutId)
                clearTimeout(this._timeoutId);
            this._timeoutId = setTimeout(this.save.bind(this), debounce);
        }
        // If isSaving, we don't need to do anything, becase it will re-check if additional
        // mutations have come, when saving is done.
    };
    KedBackendWriter.prototype.retrySave = function () {
        return this.save();
    };
    KedBackendWriter.prototype.waitForVersionToPersist = function (version) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var persistedVersion;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.persistedVersion.load()];
                    case 1:
                        persistedVersion = _a.sent();
                        if (!(persistedVersion < version)) return [3 /*break*/, 3];
                        this.save(); // Be more eager to save
                        return [4 /*yield*/, this.persistedVersion.filter(function (persistedVersion) { return persistedVersion >= version; }).load()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    KedBackendWriter.prototype.save = function () {
        var _this = this;
        if (this._timeoutId)
            clearTimeout(this._timeoutId);
        if (this._isSavingPromise)
            return this._isSavingPromise;
        if (!this.isEdited)
            return Promise.resolve();
        this._timeoutId = null;
        this._isSavingPromise = this._save();
        this._isSavingPromise.catch(function () { }).then(function () { return _this._isSavingPromise = null; });
        return this._isSavingPromise;
    };
    KedBackendWriter.prototype._save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mutations, version, mutationRequests, res_1, etagMutations, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dispatchStateChange();
                        mutations = this.mutationQueue.get();
                        version = this.currentVersion;
                        this.mutationQueue.moveToSavingQueue();
                        mutationRequests = this.mapMutations(mutations);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, 11, 12]);
                        return [4 /*yield*/, this.getClient().batch(mutationRequests)];
                    case 2:
                        res_1 = _a.sent();
                        etagMutations = Object.keys(res_1.newEtags).map(function (id) { return ({
                            op: 'update',
                            table: null,
                            id: id,
                            deltaDoc: { $etag: res_1.newEtags[id] },
                            targetName: null // We don't have the target name. But this mutation won't be visible in a DeltaCollection anyway, so it wont be used.
                        }); });
                        // Invalidate cache
                        _cache_bust__WEBPACK_IMPORTED_MODULE_4__["CacheBust"].invalidateCache(mutationRequests, this.getUser());
                        // Commmit mutations along with etagMutations into queries cached data
                        this.persistedVersion.dispatch(version);
                        this.deltaCache.applyMutations(mutations, { optimistic: false });
                        return [4 /*yield*/, this.querySet.commitMutations(_mutation_queue__WEBPACK_IMPORTED_MODULE_1__["MutationQueue"].merge(mutations, etagMutations), version)];
                    case 3:
                        _a.sent();
                        // On success, clear saving queue as the mutations will now be committed to all query's data instead.
                        this.mutationQueue.clearSavingQueue();
                        this.dispatchStateChange(); // isEdited may have turned to false
                        // Finally, notify subscribers so that views get updated with committed results
                        this.querySet.notifySubscribers();
                        if (!(this.mutationQueue.get().length > 0)) return [3 /*break*/, 5];
                        // Additional mutations happend while we were saving. Handle them as well.
                        return [4 /*yield*/, this._save()];
                    case 4:
                        // Additional mutations happend while we were saving. Handle them as well.
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        error_1 = _a.sent();
                        this.persistedVersion.dispatchError(error_1);
                        if (!(error_1 && error_1.name && error_1.name.startsWith("http4"))) return [3 /*break*/, 9];
                        // Access Control denied, bad request or similar. Throw mutations away.
                        this.dispatchError(error_1, false);
                        this.mutationQueue.clearSavingQueue();
                        this.dispatchStateChange(); // isEdited may have turned to false
                        this.querySet.notifySubscribers();
                        if (!(this.mutationQueue.get().length > 0)) return [3 /*break*/, 8];
                        // Ho ho! Additional mutations happend while we were saving. Handle them alone. THey might be more lucky.
                        return [4 /*yield*/, this._save()];
                    case 7:
                        // Ho ho! Additional mutations happend while we were saving. Handle them alone. THey might be more lucky.
                        _a.sent();
                        _a.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        this.dispatchError(error_1, true);
                        _a.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        this.dispatchStateChange();
                        return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    KedBackendWriter.prototype.mapMutations = function (mutations) {
        var br = new _ked_backend_client__WEBPACK_IMPORTED_MODULE_2__["BatchRunner"]();
        mutations.forEach(function (m) {
            switch (m.op) {
                case 'update':
                    br.update(m.table, m.id, m.deltaDoc, m.branchId);
                    break;
                case 'add':
                    br.add(m.table, m.doc);
                    break;
                case 'add-related':
                    if (!m.relatedDoc.$etag) {
                        // No $etag means this is a new document. Add it before linking to it:
                        br.add(kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_3__["tables"][m.table].relationships[m.graphProp], m.relatedDoc, m.branchId);
                    }
                    br.link2(m.table, m.id, m.graphProp, m.relatedDoc.id, m.branchId);
                    break;
                case 'remove-related':
                    br.unlink2(m.table, m.id, m.graphProp, m.relatedDoc.id, m.branchId);
                    break;
                case 'undo-link':
                    br.undoLink(m.table, m.id, m.graphProp, m.relatedId, m.branchId);
                    break;
                case 'delete':
                    br.delete(m.table, m.id);
                    break;
                case 'clear-branch':
                    br.clearBranch(m.branchId);
                    break;
                case 'merge':
                    br.merge(m.branchId, m.targetBranchId);
                    break;
            }
        });
        return br.mutationRequests;
    };
    return KedBackendWriter;
}());

//# sourceMappingURL=kedbackend-writer.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-repo/mutation-queue.js":
/*!******************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-repo/mutation-queue.js ***!
  \******************************************************************/
/*! exports provided: MutationQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationQueue", function() { return MutationQueue; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./kedbackend/js/dist/js/ked-backend-repo/utils.js");
/* harmony import */ var _delta_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delta-merge */ "./kedbackend/js/dist/js/ked-backend-repo/delta-merge.js");



var MutationQueue = /** @class */ (function () {
    function MutationQueue() {
        this.queue = [];
        this.savingQueue = [];
    }
    MutationQueue.prototype.add = function (mutations) {
        this.queue = MutationQueue.merge(this.queue, mutations);
    };
    MutationQueue.prototype.moveToSavingQueue = function () {
        this.savingQueue = MutationQueue.merge(this.savingQueue, this.queue);
        this.queue = [];
    };
    MutationQueue.prototype.clearSavingQueue = function () {
        this.savingQueue = [];
    };
    MutationQueue.prototype.get = function () {
        return this.savingQueue.concat(this.queue);
    };
    MutationQueue.prototype.affectsQuery = function (table, query, includes) {
        var mutations = this.get();
        if (mutations.some(function (m) { return m.op === 'merge' || m.op === 'clear-branch'; }))
            return true;
        if (query.ids) {
            // A query with "ids" filter will be easy to detect a no-match on:
            return mutations.some(function (m) { return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["globalOp"])(m) || (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__["branchSensitive"])(m) || m.branchId === query.branchId) &&
                query.ids.includes(m.id); });
        }
        // Otherwise, check if mutations affect same branch and table. Could be done more fine grained,
        // but that would only be a suboptimization.
        return mutations.some(function (m) {
            return m.op === 'add' ?
                m.table === table :
                m.op === 'delete' ?
                    m.table === table || (includes.some(function (label) { return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTableFromLabel"])(table, label) === m.table; })) :
                    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["globalOp"])(m) ? true :
                        m.branchId == query.branchId &&
                            (m.table === table || (m.op !== 'update' && ([table].concat(includes.map(function (label) { return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTableFromLabel"])(table, label); })).some(function (table) { return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getTableFromLabel"])(m.table, m.graphProp) === table; }))));
        });
    };
    MutationQueue.merge = function (queue1, queue2) {
        var mutableQueue1 = queue1.slice();
        var mutableQueue2 = queue2.slice();
        //if (mutableQueue1.length > 0) debugger;
        var len = queue1.length;
        var _loop_1 = function (i) {
            var m = queue1[i];
            if (m.op === 'update') {
                var overlappingIdOpIdx = mutableQueue2.findIndex(function (newMut) {
                    return newMut.op === 'update' &&
                        newMut.branchId === m.branchId &&
                        newMut.id === m.id;
                });
                if (overlappingIdOpIdx >= 0) {
                    mutableQueue1[i] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, m, { deltaDoc: Object(_delta_merge__WEBPACK_IMPORTED_MODULE_2__["mergeDeltas"])(m.deltaDoc, mutableQueue2[overlappingIdOpIdx].deltaDoc) });
                    mutableQueue2.splice(overlappingIdOpIdx, 1);
                }
            }
        };
        for (var i = 0; i < len; ++i) {
            _loop_1(i);
        }
        return mutableQueue1.concat(mutableQueue2);
    };
    return MutationQueue;
}());

//# sourceMappingURL=mutation-queue.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-repo/query-set.js":
/*!*************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-repo/query-set.js ***!
  \*************************************************************/
/*! exports provided: QuerySet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuerySet", function() { return QuerySet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _kedbackend_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kedbackend-query */ "./kedbackend/js/dist/js/ked-backend-repo/kedbackend-query.js");
/* harmony import */ var kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend-schema/schema.json */ "./kedbackend/KED.Backend.API/schema.json");
var kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! kedbackend-schema/schema.json */ "./kedbackend/KED.Backend.API/schema.json", 1);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./kedbackend/js/dist/js/ked-backend-repo/utils.js");




var QuerySet = /** @class */ (function () {
    function QuerySet(mutationQueue) {
        this.mutationQueue = mutationQueue;
        this.queries = [];
    }
    QuerySet.prototype.commitMutations = function (mutations, version) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(this.queries.map(function (q) { return q.commitMutations(mutations, version); }))];
                    case 1:
                        _a.sent();
                        this.cleanupInvalidQueries();
                        return [2 /*return*/];
                }
            });
        });
    };
    QuerySet.prototype.cleanupInvalidQueries = function () {
        this.queries = this.queries.filter(function (q) {
            if (q.invalid) {
                if (q.timeoutHandle) {
                    clearTimeout(q.timeoutHandle);
                    q.timeoutHandle = null;
                }
                return false;
            }
            return true;
        });
    };
    QuerySet.prototype.notifySubscribers = function () {
        var optimisticMutations = this.mutationQueue.get();
        this.queries.forEach(function (q) {
            q.notifySubscribers(optimisticMutations);
        });
    };
    QuerySet.prototype.findQuery = function (table, query) {
        return this.queries.find(function (q) { return q.queryKey === _kedbackend_query__WEBPACK_IMPORTED_MODULE_1__["KedBackendQuery"].queryKey(table, query); });
    };
    QuerySet.prototype.queryLocally = function (table, query, includes) {
        // For now, only handle this very common and special case (which
        // will save a lot of unnescessary network traffic if I am thinking right...)
        var mutations = this.mutationQueue.get();
        // Check if the query wants to get a single entity by its ID:
        if (query.ids && query.ids.length === 1) {
            // And if so, if we have an outgoing mutation to create that entity:
            if (mutations.some(function (m) { return m.op === 'add-related' && m.relatedDoc.id === query.ids[0]; })) {
                // Then return an EMPTY response, signalling that we can resolve this locally,
                // but let the optistic feature of KedBackendQuery apply the mutation before
                // notifying subscribers (we don't want it to be persistent before the server
                // has accepted the mutation)
                return [];
            }
        }
        // OK, another quite common case is when we ask for a certain ID and that ID replies
        // within another query
        if (query.hasEdgesFrom || query.hasEdgesTo)
            return null; // Not possible to handle
        if (!query.ids)
            return null; // For now, just take hight for this particular and most common case!
        var _loop_1 = function (q) {
            if (!q.gotInitialResponse)
                return "continue";
            if (q.query.branchId !== query.branchId)
                return "continue";
            if (q.query.flags)
                return "continue"; // It would be complex to support various flags. Query's data may include ids only. Can't rely on the query.
            var qIncludes = q.includes;
            if (qIncludes.length > 0 && (!query.include || query.include.length === 0)) {
                // We don't include, but this query does. Check if we can find our result within it.
                var label = qIncludes.find(function (l) { return kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_2__["tables"][q.table]["relationships"][l] === table; });
                if (label) {
                    var res_1 = {};
                    for (var _i = 0, _a = q.data; _i < _a.length; _i++) {
                        var entity = _a[_i];
                        var subData = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["queryArray"])(query, entity[label]);
                        subData.forEach(function (r) { return res_1[r.id] = r; });
                    }
                    var result_1 = Object.keys(res_1).map(function (id) { return res_1[id]; });
                    // Only return result if we could look up every requested ID:
                    if (!query.ids.every(function (id) { return result_1.some(function (x) { return x.id === id; }); }))
                        return "continue";
                    return { value: result_1 };
                }
            }
            if (!includes.every(function (label) { return qIncludes.includes(label); }))
                return "continue";
            // Lastly, if the query includes all graphs that we do, pick the subset from that query.
            // Concrete example: We observe a certain Task by ID and want its knowledgeRequirements along with it,
            // and there's another query of all tasks that also includes knowledgeRequirements. Use it. 
            if (q.table === table) {
                var result_2 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["queryArray"])(query, q.data);
                // Only return result if we could look up every requested ID:
                if (!query.ids.every(function (id) { return result_2.some(function (x) { return x.id === id; }); }))
                    return "continue";
                return { value: result_2 };
            }
        };
        for (var _i = 0, _a = this.queries; _i < _a.length; _i++) {
            var q = _a[_i];
            var state_1 = _loop_1(q);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    QuerySet.prototype.subscribe = function (subscription) {
        var _a = subscription.collection, table = _a.table, query = _a.query, repo = _a.repo;
        var kbQuery = this.findQuery(table, query);
        if (!kbQuery) {
            kbQuery = new _kedbackend_query__WEBPACK_IMPORTED_MODULE_1__["KedBackendQuery"](table, query, repo.getUser(), repo, this.mutationQueue);
            this.queries.push(kbQuery);
        }
        else {
            if (kbQuery.timeoutHandle) {
                clearTimeout(kbQuery.timeoutHandle);
                kbQuery.timeoutHandle = null;
            }
        }
        kbQuery.subscribe(subscription);
    };
    QuerySet.prototype.unsubscribe = function (subscription) {
        var _this = this;
        var _a = subscription.collection, table = _a.table, query = _a.query, repo = _a.repo;
        var kbQuery = this.findQuery(table, query);
        if (kbQuery) {
            // Prohibit further notifications to this subscription:
            kbQuery.unsubscribe(subscription);
            // Release unnescessary memory when there are no more subscriptions of this query, by removing the query itself
            // To that in a delayed manner, so that an unsubscribe() followed by an immediate subscribe() don't have to re-query the server:
            if (kbQuery.subscriptions.length === 0) {
                // Schedule for garbage collection in 5 minutes:
                kbQuery.timeoutHandle = setTimeout(function () {
                    // Check if kbQuery still has no subscriptions (not certain! A new subscriber may have come along...)
                    if (kbQuery.subscriptions.length === 0) {
                        // Still no subscriptions on it, time to release some memory and forget the in-memory cache of the query result
                        _this.queries = _this.queries.filter(function (q) { return q !== kbQuery; });
                    }
                }, this.queries.length > 50 ?
                    500 : // Don't host too many queries. Garbage collect this within 500 ms
                    5 * 60000); // Allow query in memory for another 5 minutes
            }
        }
    };
    return QuerySet;
}());

//# sourceMappingURL=query-set.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-repo/utils.js":
/*!*********************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-repo/utils.js ***!
  \*********************************************************/
/*! exports provided: getTableFromLabel, queryArray, AND, getFilterFromQuery, branchSensitive, globalOp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTableFromLabel", function() { return getTableFromLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryArray", function() { return queryArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AND", function() { return AND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterFromQuery", function() { return getFilterFromQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "branchSensitive", function() { return branchSensitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalOp", function() { return globalOp; });
/* harmony import */ var kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kedbackend-schema/schema.json */ "./kedbackend/KED.Backend.API/schema.json");
var kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! kedbackend-schema/schema.json */ "./kedbackend/KED.Backend.API/schema.json", 1);

function getTableFromLabel(table, label) {
    return kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_0__["tables"][table].relationships[label];
}
function queryArray(query, data) {
    var filter = getFilterFromQuery(query);
    return data.filter(filter);
}
function AND(filter1, filter2) {
    return function (x) { return filter1(x) && filter2(x); };
}
function getFilterFromQuery(query) {
    var filter = function (x) { return true; };
    if (query.from)
        return AND(filter, function (x) { return x.dateTime >= query.from; });
    if (query.to)
        return AND(filter, function (x) { return x.dateTime < query.to; });
    if (query.ids)
        return AND(filter, function (x) { return query.ids.includes(x.id); });
    if (query.name)
        return AND(filter, function (x) { return x.name === query.name; });
    if (query.tags)
        return AND(filter, function (x) { return x.tags && [].concat(query.tags || []).some(function (tag) { return x.tags.includes(tag); }); });
    // query.hasEdgesFrom and query.hasEdgesTo cannot by filtered here
    return filter;
}
function branchSensitive(m) {
    return m.op !== 'delete';
}
function globalOp(m) {
    return m.op === 'clear-branch' || m.op === 'merge';
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/observable/collection.js":
/*!********************************************************!*\
  !*** ./kedbackend/js/dist/js/observable/collection.js ***!
  \********************************************************/
/*! exports provided: Collection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable */ "./kedbackend/js/dist/js/observable/observable.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./kedbackend/js/dist/js/observable/map.js");
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./value */ "./kedbackend/js/dist/js/observable/value.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emitter */ "./kedbackend/js/dist/js/observable/emitter.js");





var Collection = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Collection, _super);
    function Collection(subscribe) {
        return _super.call(this, subscribe) || this;
    }
    Collection.prototype._map = function (mapper) {
        throw "mixedin";
    };
    Collection.from = function (x) {
        if (x.subscribe)
            return new Collection(function (s) { return x.subscribe(s); });
        if (Array.isArray(x)) {
            var emitter_1 = new _emitter__WEBPACK_IMPORTED_MODULE_4__["Emitter"](x);
            return new Collection(function (s) { return emitter_1.subscribe(s); });
        }
        throw new Error("ObservableCollection.from() can only take arrays or observables");
    };
    Collection.prototype.map = function (mapper) {
        return this._map(function (items) { return items.map(function (item) { return mapper(item); }); });
    };
    Collection.prototype.flat = function () {
        return this._map(function (items) { return [].concat.apply([], items); });
    };
    Collection.prototype.filter = function (filter) {
        return this._map(function (items) { return items.filter(filter); });
    };
    Collection.prototype.concat = function (other) {
        return Collection.from(this.toValue().combineLatest(other).map(function (_a) {
            var me = _a[0], other = _a[1];
            return me.concat(other);
        }));
    };
    Collection.prototype.orderBy = function (prop) {
        return this.toValue().map(function (array) { return array.slice().sort(function (a, b) {
            var aProp = a && a[prop];
            var bProp = b && b[prop];
            return aProp > bProp ? 1 : aProp < bProp ? -1 : 0;
        }); }).toCollection(function (x) { return x; });
    };
    Collection.prototype.toValue = function () {
        var _this = this;
        return new _value__WEBPACK_IMPORTED_MODULE_3__["Value"](function (s) { return _this.subscribe(s); });
    };
    Collection.prototype.groupBy = function (prop) {
        return this.toValue().map(function (items) {
            var rv = {};
            items.forEach(function (item) {
                var list = rv[item[prop]] || (rv[item[prop]] = []);
                list.push(item);
            });
            return rv;
        });
    };
    Collection.prototype.first = function () {
        return this.toValue().map(function (arr) { return arr[0]; });
    };
    return Collection;
}(_observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]));

Collection.prototype._map = Object(_map__WEBPACK_IMPORTED_MODULE_2__["initMapMethod"])(Collection);
//# sourceMappingURL=collection.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/observable/emitter.js":
/*!*****************************************************!*\
  !*** ./kedbackend/js/dist/js/observable/emitter.js ***!
  \*****************************************************/
/*! exports provided: Emitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return Emitter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./value */ "./kedbackend/js/dist/js/observable/value.js");


var Emitter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Emitter, _super);
    function Emitter(initialValue) {
        var _this = _super.call(this, function (observer) {
            var subscription = {
                unsubscribe: function () { return _this.subscribers = _this.subscribers.filter(function (_a) {
                    var s = _a[0];
                    return s !== observer;
                }); },
            };
            _this.subscribers.push([observer, subscription]);
            if (_this.error)
                observer(null, _this.error, subscription);
            else
                observer(_this.value, undefined, subscription);
            return subscription;
        }) || this;
        _this.subscribers = [];
        _this.value = initialValue;
        return _this;
    }
    Emitter.prototype.dispatch = function (value) {
        this.value = value;
        this.error = undefined;
        this._dispatch();
    };
    Emitter.prototype.dispatchError = function (error) {
        this.error = error;
        this._dispatch();
    };
    Emitter.prototype._dispatch = function () {
        var _this = this;
        this.subscribers.forEach(function (_a) {
            var observer = _a[0], subscription = _a[1];
            try {
                observer(_this.value, _this.error, subscription);
            }
            catch (err) {
                observer(null, err, subscription);
            }
        });
    };
    return Emitter;
}(_value__WEBPACK_IMPORTED_MODULE_1__["Value"]));

//# sourceMappingURL=emitter.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/observable/fiber-context.js":
/*!***********************************************************!*\
  !*** ./kedbackend/js/dist/js/observable/fiber-context.js ***!
  \***********************************************************/
/*! exports provided: FiberContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiberContext", function() { return FiberContext; });
var stack = [];
var currentFiber = null;
var providers = [function () { return currentFiber; }];
function pushFiber(fiber) {
    stack.push(currentFiber);
    currentFiber = fiber;
}
function popFiber() {
    currentFiber = stack.pop();
}
var FiberContext = {
    get current() { return currentFiber; },
    /*run: function rerun<R>(fiber: Fiber, fn: ()=>R): R | Promise<R> {
      pushFiber(fiber);
      try {
        return Promise.resolve(fn());
      } catch (p) {
        if (p && typeof p.then === 'function') {
          return p.then(()=>rerun(fiber, fn));
        } else {
          return Promise.reject(p);
        }
      } finally {
        popFiber();
      }
    },*/
    addProvider: function (getCurrentFiber) {
        providers.push(getCurrentFiber);
        setCurrentGetterFromProviders();
    },
    removeProvider: function (getCurrentFiber) {
        providers = providers.filter(function (p) { return p !== getCurrentFiber; });
        setCurrentGetterFromProviders();
    }
};
function setCurrentGetterFromProviders() {
    Object.defineProperty(FiberContext, "current", {
        get: providers.reduce(function (p, c) { return function () { return p() || c(); }; }),
        set: function () { throw new Error("Use FiberContext.push() to change current fiber"); }
    });
}
//# sourceMappingURL=fiber-context.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/observable/index.js":
/*!***************************************************!*\
  !*** ./kedbackend/js/dist/js/observable/index.js ***!
  \***************************************************/
/*! exports provided: Observable, Value, Collection, Emitter, FiberContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable */ "./kedbackend/js/dist/js/observable/observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });

/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./value */ "./kedbackend/js/dist/js/observable/value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return _value__WEBPACK_IMPORTED_MODULE_1__["Value"]; });

/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ "./kedbackend/js/dist/js/observable/collection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return _collection__WEBPACK_IMPORTED_MODULE_2__["Collection"]; });

/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emitter */ "./kedbackend/js/dist/js/observable/emitter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return _emitter__WEBPACK_IMPORTED_MODULE_3__["Emitter"]; });

/* harmony import */ var _fiber_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fiber-context */ "./kedbackend/js/dist/js/observable/fiber-context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FiberContext", function() { return _fiber_context__WEBPACK_IMPORTED_MODULE_4__["FiberContext"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/observable/map.js":
/*!*************************************************!*\
  !*** ./kedbackend/js/dist/js/observable/map.js ***!
  \*************************************************/
/*! exports provided: initMapMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMapMethod", function() { return initMapMethod; });
function initMapMethod(ctor) {
    return function (mapper) {
        var _this = this;
        return new ctor(function (observer) { return _this.subscribe(function (value, error, subscription) {
            if (error)
                observer(null, error, subscription);
            else
                try {
                    observer(mapper(value), error, subscription);
                }
                catch (err) {
                    observer(null, err, subscription);
                }
        }); });
    };
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/observable/mixin.js":
/*!***************************************************!*\
  !*** ./kedbackend/js/dist/js/observable/mixin.js ***!
  \***************************************************/
/*! exports provided: mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return mixin; });
function mixin(targetProto, mixinProto) {
    var props = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        props[_i - 2] = arguments[_i];
    }
    props.forEach(function (prop) { return targetProto[prop] = mixinProto[prop]; });
}
//# sourceMappingURL=mixin.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/observable/observable.js":
/*!********************************************************!*\
  !*** ./kedbackend/js/dist/js/observable/observable.js ***!
  \********************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
var Observable = /** @class */ (function () {
    //static get [Symbol.species]() { return this; }
    function Observable(_subscribe) {
        this._subscribe = _subscribe;
    }
    Observable.prototype.subscribe = function (observer) {
        try {
            return this._subscribe(function (items, error, subscription) {
                try {
                    observer(items, error, subscription);
                }
                catch (err) {
                    observer(null, err, subscription);
                }
            });
        }
        catch (error) {
            observer(null, error, { unsubscribe: function () { } });
        }
    };
    return Observable;
}());

//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/observable/value.js":
/*!***************************************************!*\
  !*** ./kedbackend/js/dist/js/observable/value.js ***!
  \***************************************************/
/*! exports provided: Value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return Value; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable */ "./kedbackend/js/dist/js/observable/observable.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./kedbackend/js/dist/js/observable/map.js");
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collection */ "./kedbackend/js/dist/js/observable/collection.js");
/* harmony import */ var _fiber_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fiber-context */ "./kedbackend/js/dist/js/observable/fiber-context.js");





var Value = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Value, _super);
    function Value(subscribe) {
        return _super.call(this, subscribe) || this;
    }
    Value.from = function (x) {
        if (x.subscribe)
            return new Value(function (s) { return x.subscribe(s); });
        throw new Error("Value.from() can only take observables");
    };
    Value.prototype.read = function () {
        var resolved = false, result, err, notify;
        var subscription = this.subscribe(function (value, error, subsciption) {
            resolved = true;
            result = value;
            err = error;
            if (error && notify)
                notify(null, error, subsciption);
            else if (notify)
                notify(value, null, subsciption);
        });
        if (resolved) {
            var currentFiber = _fiber_context__WEBPACK_IMPORTED_MODULE_4__["FiberContext"].current;
            if (!currentFiber) {
                subscription.unsubscribe();
                throw new Error("Invalid Fiber Context");
            }
            if (err) {
                subscription.unsubscribe();
                throw err;
            }
            var subscriptions = currentFiber.subscriptions, observer = currentFiber.observer;
            subscriptions.push(subscription);
            notify = observer;
            return result;
        }
        throw new Promise(function (resolve, reject) {
            notify = function (value, error, subscription) {
                subscription.unsubscribe();
                if (error)
                    reject(error);
                else
                    resolve(value);
            };
        });
    };
    Value.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.subscribe(function (value, error, subsciption) {
                if (error)
                    reject(error);
                else
                    resolve(value);
                subsciption.unsubscribe();
            });
        });
    };
    Value.prototype.filter = function (fn) {
        var _this = this;
        return new Value(function (observer) { return _this.subscribe(function (value, error, subscription) {
            if (error)
                observer(null, error, subscription);
            else if (fn(value))
                observer(value, error, subscription);
        }); });
    };
    Value.prototype.log = function (prefix) {
        return this.map(function (x) {
            console.log(prefix, x);
            return x;
        });
    };
    Value.prototype.toCollection = function (mapper) {
        var _this = this;
        return new _collection__WEBPACK_IMPORTED_MODULE_3__["Collection"](function (s) { return _this.map(mapper).subscribe(s); });
    };
    Value.prototype.combineLatest = function (other) {
        var _this = this;
        return new Value(function (observer) {
            var values = [null, null];
            var mySubscription, otherSubscription;
            var subscription = {
                unsubscribe: function () {
                    mySubscription.unsubscribe();
                    otherSubscription.unsubscribe();
                }
            };
            mySubscription = _this.subscribe(function (items, error, s) {
                if (error) {
                    s.unsubscribe();
                    observer(null, error, subscription);
                }
                values[0] = items;
                if (values[1] !== null)
                    observer(values, null, subscription);
            });
            otherSubscription = other.subscribe(function (value, error, s) {
                if (error) {
                    s.unsubscribe();
                    observer(null, error, subscription);
                }
                values[1] = value;
                if (values[0] !== null)
                    observer(values, null, subscription);
            });
            return subscription;
        });
    };
    Value.prototype.switchMap = function (mapper) {
        var _this = this;
        return new Value(function (observer) {
            var mappedSubscription = null;
            var subscription = null;
            var returnedSubscription = {
                unsubscribe: function () {
                    subscription.unsubscribe();
                    if (mappedSubscription) {
                        mappedSubscription.unsubscribe();
                        mappedSubscription = null;
                    }
                }
            };
            subscription = _this.subscribe(function (item, error, s) {
                subscription = s;
                if (mappedSubscription) {
                    mappedSubscription.unsubscribe();
                    mappedSubscription = null;
                }
                if (error)
                    observer(null, error, returnedSubscription);
                else {
                    try {
                        var observableOrValue = mapper(item);
                        if (observableOrValue && typeof observableOrValue.subscribe === 'function') {
                            mappedSubscription = observableOrValue.subscribe(function (value, error, s) {
                                mappedSubscription = s;
                                observer(value, error, returnedSubscription);
                            });
                        }
                        else {
                            observer(observableOrValue, null, subscription);
                        }
                    }
                    catch (error) {
                        observer(null, error, subscription);
                    }
                }
            });
            return returnedSubscription;
        });
    };
    return Value;
}(_observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]));

Value.prototype.map = Object(_map__WEBPACK_IMPORTED_MODULE_2__["initMapMethod"])(Value);
//# sourceMappingURL=value.js.map

/***/ }),

/***/ "./kedbackend/observable.js":
/*!**********************************!*\
  !*** ./kedbackend/observable.js ***!
  \**********************************/
/*! exports provided: Observable, Value, Collection, Emitter, FiberContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_dist_js_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dist/js/observable */ "./kedbackend/js/dist/js/observable/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _js_dist_js_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return _js_dist_js_observable__WEBPACK_IMPORTED_MODULE_0__["Value"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return _js_dist_js_observable__WEBPACK_IMPORTED_MODULE_0__["Collection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return _js_dist_js_observable__WEBPACK_IMPORTED_MODULE_0__["Emitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FiberContext", function() { return _js_dist_js_observable__WEBPACK_IMPORTED_MODULE_0__["FiberContext"]; });




/***/ }),

/***/ "./kedbackend/repo.js":
/*!****************************!*\
  !*** ./kedbackend/repo.js ***!
  \****************************/
/*! exports provided: KedBackendCollection, KedBackendQuery, KedBackendRepo, KedBackendSubscription, KedBackendWriter, MutationQueue, QuerySet, mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_dist_js_ked_backend_repo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dist/js/ked-backend-repo */ "./kedbackend/js/dist/js/ked-backend-repo/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBackendCollection", function() { return _js_dist_js_ked_backend_repo__WEBPACK_IMPORTED_MODULE_0__["KedBackendCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBackendQuery", function() { return _js_dist_js_ked_backend_repo__WEBPACK_IMPORTED_MODULE_0__["KedBackendQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBackendRepo", function() { return _js_dist_js_ked_backend_repo__WEBPACK_IMPORTED_MODULE_0__["KedBackendRepo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBackendSubscription", function() { return _js_dist_js_ked_backend_repo__WEBPACK_IMPORTED_MODULE_0__["KedBackendSubscription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBackendWriter", function() { return _js_dist_js_ked_backend_repo__WEBPACK_IMPORTED_MODULE_0__["KedBackendWriter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MutationQueue", function() { return _js_dist_js_ked_backend_repo__WEBPACK_IMPORTED_MODULE_0__["MutationQueue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuerySet", function() { return _js_dist_js_ked_backend_repo__WEBPACK_IMPORTED_MODULE_0__["QuerySet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return _js_dist_js_ked_backend_repo__WEBPACK_IMPORTED_MODULE_0__["mixin"]; });




/***/ }),

/***/ "./node_modules/moment/locale sync recursive sv|en":
/*!***********************************************!*\
  !*** ./node_modules/moment/locale sync sv|en ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive sv|en";

/***/ }),

/***/ "./src/access-control/get-user-claims.ts":
/*!***********************************************!*\
  !*** ./src/access-control/get-user-claims.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUserClaims; });
function getUserClaims(user) {
    return [{
            type: "email",
            value: user.mail
        }, {
            type: "school",
            value: user.school
        }].concat(user.roles.map(function (role) { return ({
        type: "role",
        value: role
    }); })).concat(user.roles.map(function (role) { return ({
        type: "schoolRole",
        value: user.school + "/" + role
    }); }));
}


/***/ }),

/***/ "./src/access-control/index.ts":
/*!*************************************!*\
  !*** ./src/access-control/index.ts ***!
  \*************************************/
/*! exports provided: getUserClaims, IMPERSONATION_QUERY_PARAMS, hasAccess, hasReadAccess, hasWriteAccess, hasShareAccess, isTeacherAtSchool, isAdminOrTeacherAtSchool, impersonationEnv, actAs, preserveImpersonationQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMPERSONATION_QUERY_PARAMS", function() { return IMPERSONATION_QUERY_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAccess", function() { return hasAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasReadAccess", function() { return hasReadAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasWriteAccess", function() { return hasWriteAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasShareAccess", function() { return hasShareAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTeacherAtSchool", function() { return isTeacherAtSchool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdminOrTeacherAtSchool", function() { return isAdminOrTeacherAtSchool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impersonationEnv", function() { return impersonationEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actAs", function() { return actAs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preserveImpersonationQuery", function() { return preserveImpersonationQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _get_user_claims__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-user-claims */ "./src/access-control/get-user-claims.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserClaims", function() { return _get_user_claims__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _utils_query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/query-string */ "./src/utils/query-string.ts");





var IMPERSONATION_QUERY_PARAMS = [
    "user",
    "role",
    "school",
    "debug",
    "testVersion",
    "testversion",
    "features",
    "schoolType",
    "schooltype"
];
function hasAccess(user, doc, requestedRight) {
    var claims = Object(_get_user_claims__WEBPACK_IMPORTED_MODULE_2__["default"])(user);
    if (requestedRight !== 'R' && user.tutorFor) {
        claims = claims.filter(function (claim) { return claim.type !== 'email'; });
    }
    var result = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["hasAccess"])(kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["DocumentAccess"].fromStringArray(doc.acl || []), claims, requestedRight);
    //console.log(`Has ${requestedRight} access to ${doc.name}/${doc.id}: ${result}`);
    return result;
}
function hasReadAccess(user, doc) {
    return hasAccess(user, doc, 'R');
}
function hasWriteAccess(user, doc) {
    return hasAccess(user, doc, 'W');
}
function hasShareAccess(user, doc) {
    return hasAccess(user, doc, 'S');
}
function isTeacherAtSchool(user, school) {
    var isTeacher = user.roles.some(function (role) { return role === 'EMPLOYEE' || role === 'ADMIN'; });
    var belongsToSchool = (school || "").toLowerCase() === user.school.toLowerCase();
    return (isTeacher && belongsToSchool);
}
function isAdminOrTeacherAtSchool(user, school) {
    return user.roles.includes("ADMIN") || isTeacherAtSchool(user, school);
}
var impersonationEnv = {
    actAs: function (options) {
        var role = options.role, school = options.school, url = options.url;
        var currentQuery = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_3__["parseQueryString"])(location.search);
        var newQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, currentQuery, { role: role, school: school });
        var newQueryString = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_3__["generateQueryString"])(newQuery);
        if (url) {
            location.href = "" + url + newQueryString;
        }
        else {
            location.hash = "#";
            location.search = newQueryString;
        }
    }
};
function actAs(options) {
    impersonationEnv.actAs(options);
}
function preserveImpersonationQuery(url, query) {
    var e_1, _a;
    var currentQuery = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_3__["parseQueryString"])(location.search);
    var preservedQuery = {};
    try {
        for (var IMPERSONATION_QUERY_PARAMS_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](IMPERSONATION_QUERY_PARAMS), IMPERSONATION_QUERY_PARAMS_1_1 = IMPERSONATION_QUERY_PARAMS_1.next(); !IMPERSONATION_QUERY_PARAMS_1_1.done; IMPERSONATION_QUERY_PARAMS_1_1 = IMPERSONATION_QUERY_PARAMS_1.next()) {
            var param = IMPERSONATION_QUERY_PARAMS_1_1.value;
            if (currentQuery[param])
                preservedQuery[param] = currentQuery[param];
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (IMPERSONATION_QUERY_PARAMS_1_1 && !IMPERSONATION_QUERY_PARAMS_1_1.done && (_a = IMPERSONATION_QUERY_PARAMS_1.return)) _a.call(IMPERSONATION_QUERY_PARAMS_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var newQueryString = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_3__["generateQueryString"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, preservedQuery, query));
    var pHash = url.indexOf('#');
    return pHash >= 0 ?
        "" + url.substr(0, pHash) + newQueryString + url.substr(pHash) :
        "" + url + newQueryString;
}


/***/ }),

/***/ "./src/apis/mock/mock-classroom-data.ts":
/*!**********************************************!*\
  !*** ./src/apis/mock/mock-classroom-data.ts ***!
  \**********************************************/
/*! exports provided: mockTeachers, mockTuitionGroups, mockTuitionStudents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockTeachers", function() { return mockTeachers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockTuitionGroups", function() { return mockTuitionGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockTuitionStudents", function() { return mockTuitionStudents; });
var createStudents = function (group, n, m) {
    var students = [];
    for (var i = n; i <= m; i++) {
        students.push({
            schoolName: 'KED',
            tuitionGroupName: group,
            studentFirstName: 'Student ' + i,
            studentLastName: 'Classroom',
            studentEmailAddress: 'student' + i + '.classroom@kedschools.com'
        });
    }
    students.push({
        schoolName: 'KED',
        tuitionGroupName: group,
        studentFirstName: 'Andrei',
        studentLastName: 'Spatarelu',
        studentEmailAddress: 'andrei.spatarelu@vemendo.se'
    });
    return students;
};
var mockTeachers = [
    {
        schoolName: 'KED',
        teacherFirstName: 'Teacher 1',
        teacherLastName: 'Classroom',
        teacherEmailAddress: 'teacher1.classroom@kedschools.com'
    },
    {
        schoolName: 'KED',
        teacherFirstName: 'Teacher 2',
        teacherLastName: 'Classroom',
        teacherEmailAddress: 'teacher2.classroom@kedschools.com'
    },
    {
        schoolName: 'KED',
        teacherFirstName: 'Teacher 3',
        teacherLastName: 'Classroom',
        teacherEmailAddress: 'teacher3.classroom@kedschools.com'
    },
    {
        schoolName: 'KED',
        teacherFirstName: 'Carl',
        teacherLastName: 'Holmberg',
        teacherEmailAddress: 'carl@kedschools.com'
    },
    {
        schoolName: 'KED',
        teacherFirstName: 'David',
        teacherLastName: 'Fahlander',
        teacherEmailAddress: 'david.fahlander@kedschools.com'
    }
];
var mockTuitionGroups = {
    'DJUSÄL01': [
        {
            schoolName: 'KED',
            tuitionGroupName: 'IDR1_Gr1 (180816-190614)',
            courseCode: 'DJUSÄL01'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'IDR1_Gr2 (180816-190614)',
            courseCode: 'DJUSÄL01'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'IDR1_Gr3 (180816-190614)',
            courseCode: 'DJUSÄL01'
        }
    ],
    'DJUDJI0': [
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUDJ_Gr1 (180816-190614)',
            courseCode: 'DJUDJI0'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUDJ_Gr2 (180816-190614)',
            courseCode: 'DJUDJI0'
        },
    ],
    'KEMKEM01': [
        {
            schoolName: 'KED',
            tuitionGroupName: 'KEM1_Gr1 (180816-190614)',
            courseCode: 'KEMKEM01'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'KEM1_Gr2 (180816-190614)',
            courseCode: 'KEMKEM01'
        }
    ],
    'BIOBIO01': [
        {
            schoolName: 'KED',
            tuitionGroupName: 'BIO1_Gr1 (180816-190614)',
            courseCode: 'BIOBIO01'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'BIO1_Gr2 (180816-190614)',
            courseCode: 'BIOBIO01'
        }
    ],
    'SVESVE03': [
        {
            schoolName: 'KED',
            tuitionGroupName: 'SVE3_Gr1 (180816-190614)',
            courseCode: 'SVESVE03'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'SVE3_Gr2 (180816-190614)',
            courseCode: 'SVESVE03'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'SVE3_Gr3 (180816-190614)',
            courseCode: 'SVESVE03'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'SVE3_Gr4 (180816-190614)',
            courseCode: 'SVESVE03'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'SVE3_Gr5 (180816-190614)',
            courseCode: 'SVESVE03'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'SVE3_Gr6 (180816-190614)',
            courseCode: 'SVESVE03'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'SVE3_Gr7 (180816-190614)',
            courseCode: 'SVESVE03'
        }
    ]
};
var mockTuitionStudents = {
    'IDR1_Gr1 (180816-190614)': createStudents('IDR1_Gr1 (180816-190614)', 1, 12),
    'IDR1_Gr2 (180816-190614)': createStudents('IDR1_Gr2 (180816-190614)', 13, 22),
    'IDR1_Gr3 (180816-190614)': createStudents('IDR1_Gr3 (180816-190614)', 23, 34),
    'DJUDJ_Gr1 (180816-190614)': [
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUDJ_Gr1 (180816-190614)',
            studentFirstName: 'Andrei',
            studentLastName: 'Spatarelu',
            studentEmailAddress: 'andrei.spatarelu@vemendo.se'
        },
    ],
    'DJUDJ_Gr2 (180816-190614)': [
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUDJ_Gr2 (180816-190614)',
            studentFirstName: 'Student2',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student2.classroom@kedschools.com'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUDJ_Gr2 (180816-190614)',
            studentFirstName: 'Carl',
            studentLastName: 'Holmberg',
            studentEmailAddress: 'carl@kedschools.com'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUDJ_Gr2 (180816-190614)',
            studentFirstName: 'Student3',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student3.classroom@kedschools.com'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUDJ_Gr2 (180816-190614)',
            studentFirstName: 'David',
            studentLastName: 'Fahlander',
            studentEmailAddress: 'david.fahlander@vemendo.se'
        }
    ],
    'KEM1_Gr1 (180816-190614)': [
        {
            schoolName: 'KED',
            tuitionGroupName: 'KEM1_Gr1 (180816-190614)',
            studentFirstName: 'Student 2',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student2.classroom@kedschools.com'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'KEM1_Gr1 (180816-190614)',
            studentFirstName: 'David',
            studentLastName: '',
            studentEmailAddress: 'david.fahlander@vemendo.se'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'KEM1_Gr1 (180816-190614)',
            studentFirstName: 'Student 3',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student3.classroom@kedschools.com'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'KEM1_Gr1 (180816-190614)',
            studentFirstName: 'Student 8',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student8.classroom@kedschools.com'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'KEM1_Gr1 (180816-190614)',
            studentFirstName: 'Student 9',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student9.classroom@kedschools.com'
        }
    ],
    'KEM1_Gr2 (180816-190614)': [
        {
            schoolName: 'KED',
            tuitionGroupName: 'KEM1_Gr2 (180816-190614)',
            studentFirstName: 'Student 1',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student1.classroom@kedschools.com'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'KEM1_Gr2 (180816-190614)',
            studentFirstName: 'Student 5',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student5.classroom@kedschools.com'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'KEM1_Gr2 (180816-190614)',
            studentFirstName: 'Student 6',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student6.classroom@kedschools.com'
        }
    ],
    'BIO1_Gr1 (180816-190614)': [
        {
            schoolName: 'KED',
            tuitionGroupName: 'BIO1_Gr1 (180816-190614)',
            studentFirstName: 'Student 1',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student1.classroom@kedschools.com'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'BIO1_Gr1 (180816-190614)',
            studentFirstName: 'Student 4',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student4.classroom@kedschools.com'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'BIO1_Gr1 (180816-190614)',
            studentFirstName: 'Student 6',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student6.classroom@kedschools.com'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'BIO1_Gr1 (180816-190614)',
            studentFirstName: 'Student 10',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student10.classroom@kedschools.com'
        }
    ],
    'BIO1_Gr2 (180816-190614)': [
        {
            schoolName: 'KED',
            tuitionGroupName: 'BIO1_Gr2 (180816-190614)',
            studentFirstName: 'Student 2',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student2.classroom@kedschools.com'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'BIO1_Gr2 (180816-190614)',
            studentFirstName: 'Student 7',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student7.classroom@kedschools.com'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'BIO1_Gr2 (180816-190614)',
            studentFirstName: 'Student 8',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student8.classroom@kedschools.com'
        },
    ],
    'SVE3_Gr1 (180816-190614)': createStudents('SVE3_Gr1 (180816-190614)', 1, 21),
    'SVE3_Gr2 (180816-190614)': createStudents('SVE3_Gr2 (180816-190614)', 22, 44),
    'SVE3_Gr3 (180816-190614)': createStudents('SVE3_Gr3 (180816-190614)', 45, 61),
    'SVE3_Gr4 (180816-190614)': createStudents('SVE3_Gr4 (180816-190614)', 62, 78),
    'SVE3_Gr5 (180816-190614)': createStudents('SVE3_Gr5 (180816-190614)', 83, 107),
    'SVE3_Gr6 (180816-190614)': createStudents('SVE3_Gr6 (180816-190614)', 108, 124),
    'SVE3_Gr7 (180816-190614)': createStudents('SVE3_Gr7 (180816-190614)', 125, 150)
};


/***/ }),

/***/ "./src/components/charts/goal-progress.tsx":
/*!*************************************************!*\
  !*** ./src/components/charts/goal-progress.tsx ***!
  \*************************************************/
/*! exports provided: GoalProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalProgress", function() { return GoalProgress; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var GoalProgress = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GoalProgress, _super);
    function GoalProgress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createProgress = function () {
            var _a = _this.props, numberOfTasks = _a.numberOfTasks, completedNumberOfTasks = _a.completedNumberOfTasks, maximumTasksDisplayed = _a.maximumTasksDisplayed, backgroundColor = _a.backgroundColor, progressColor = _a.progressColor;
            var progress = [];
            if (numberOfTasks > maximumTasksDisplayed) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "progress-overview" },
                    " ",
                    completedNumberOfTasks,
                    " / ",
                    numberOfTasks,
                    " ");
            }
            for (var taskNo = 1; taskNo <= numberOfTasks; taskNo++) {
                progress.push(react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("svg", { key: taskNo },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("circle", { className: "circle-chart-background", fill: taskNo > completedNumberOfTasks ? backgroundColor : progressColor, cx: "8", cy: "8", r: "8" })));
            }
            return progress;
        };
        return _this;
    }
    GoalProgress.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "goals-progress" }, this.createProgress());
    };
    GoalProgress.defaultProps = {
        numberofTasks: 0,
        completedNumberOfTasks: 0,
        maximumTasksDisplayed: 10,
        backgroundColor: "lightgrey",
        progressColor: "#3dbca2",
    };
    return GoalProgress;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder-ks/common/two-columns-page.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/course-builder-ks/common/two-columns-page.tsx ***!
  \**********************************************************************/
/*! exports provided: TwoColumnsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoColumnsPage", function() { return TwoColumnsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TwoColumnsPage = function (_a) {
    var left = _a.left, right = _a.right, rightWidth = _a.rightWidth;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-row sv-layout" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-12" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-spacer-20pxvt sv-vertical sv-layout sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "pagecontent sv-layout sv-spacer-20pxvt sv-skip-spacer" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-row sv-layout sv-skip-spacer" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-" + (12 - rightWidth) }, left),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-layout sv-column-" + rightWidth }, right)))))));
};


/***/ }),

/***/ "./src/components/course-builder/sub-components/ellipsis-loader.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/ellipsis-loader.tsx ***!
  \**************************************************************************/
/*! exports provided: EllipsisLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisLoader", function() { return EllipsisLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var EllipsisLoader = function () {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { style: { border: 0, margin: 0, padding: 0 }, className: "ellipsis-loader" });
};


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







function SelectStudyGroups(_a) {
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
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], { isMulti: true, options: options, value: selectedStudyGroups.map(function (group) { return ({ label: group, value: group }); }), placeholder: placeholder, noOptionsMessage: function () { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kunde inte hitta studiegrupper f\u00F6r denna kurs"], ["Kunde inte hitta studiegrupper f\u00F6r denna kurs"]))); }, onChange: function (options) {
            onUpdate(options.map(function (_a) {
                var value = _a.value;
                return value;
            }));
        } });
}
var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/sub-components/spinner.tsx":
/*!******************************************************************!*\
  !*** ./src/components/course-builder/sub-components/spinner.tsx ***!
  \******************************************************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Spinner = function () { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-spinner fa-spin", "aria-hidden": "true" }),
    "\u00A0"); };


/***/ }),

/***/ "./src/components/course-viewer/course-page/task-assignments-utils.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/course-viewer/course-page/task-assignments-utils.tsx ***!
  \*****************************************************************************/
/*! exports provided: getUrkundStatus, update, downloadFile, DriveFileListing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrkundStatus", function() { return getUrkundStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriveFileListing", function() { return DriveFileListing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! downloadjs */ "./node_modules/downloadjs/download.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _urkund_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./urkund-utils */ "./src/components/course-viewer/course-page/urkund-utils.ts");







function getUrkundStatus(file, refreshAssignment) {
    var metadata = file.metadata;
    var urkundResponses;
    try {
        urkundResponses = metadata.urkundResponse && JSON.parse(metadata.urkundResponse);
    }
    catch (err) {
        urkundResponses = null;
    }
    var urkundResponse = urkundResponses && urkundResponses[0];
    if (!urkundResponse && file.metadata.urkundUploadError) {
        urkundResponse = {
            Status: {
                ErrorCode: -1,
                Message: file.metadata.urkundUploadError,
                State: 'Error'
            },
            ExternalId: file.metadata.urkundExternalId
        };
    }
    if (file.isRefreshing)
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { colSpan: 2 },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_5__["Spinner"], null),
            " Uppdaterar...");
    return urkundResponse ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "urkund-status-col" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: urkundResponse.Report && urkundResponse.Report.ReportUrl, onClick: function (ev) {
                    if (['Accepted', 'Submitted'].indexOf(urkundResponse.Status.State) === -1)
                        return; // Follow HREF instead.
                    ev.preventDefault();
                    ev.stopPropagation();
                    refreshAssignment(file);
                }, target: "_blank", title: Object(_urkund_utils__WEBPACK_IMPORTED_MODULE_6__["getUrkundHoverText"])(urkundResponse) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_urkund_utils__WEBPACK_IMPORTED_MODULE_6__["getUrkundStatusClass"])(urkundResponse) }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "urkund-status-col" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_urkund_utils__WEBPACK_IMPORTED_MODULE_6__["getUrkundSignificanceClass"])(urkundResponse) }, urkundResponse.Report && typeof urkundResponse.Report.Significance === 'number' ?
                urkundResponse.Report.Significance.toFixed() + "%" : ' '))) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { colSpan: 2 });
}
function update(assignments, assignment) {
    var retval = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
        assignment
    ], assignments.filter(function (_a) {
        var user = _a.user, filename = _a.filename;
        return user !== assignment.user ||
            filename !== assignment.filename;
    }));
    return retval;
}
function downloadFile(file) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var res, _a, _b, blob, err_1;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["env"].kedBackendClient.http.fetch(file.mediaLink, 'get', {})];
                case 1:
                    res = _c.sent();
                    if (!(res.status >= 400)) return [3 /*break*/, 3];
                    _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["HttpError"].bind;
                    _b = [void 0, res.status];
                    return [4 /*yield*/, res.text()];
                case 2: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["HttpError"], _b.concat([_c.sent()])))();
                case 3: return [4 /*yield*/, res.blob()];
                case 4:
                    blob = _c.sent();
                    downloadjs__WEBPACK_IMPORTED_MODULE_4___default()(blob, file.filename, file.contentType);
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _c.sent();
                    this.setState({ error: "Kunde inte ladda ned filen. " + (err_1.message || err_1) });
                    console.error(err_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function DriveFileListing(_a) {
    var file = _a.file;
    var _b = file.metadata, driveFileIconUrl = _b.driveFileIconUrl, driveFileUrl = _b.driveFileUrl;
    var filename = file.filename.substr(0, file.filename.lastIndexOf('.'));
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal spaced" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { className: "file-icon", src: driveFileIconUrl })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { target: "_blank", href: driveFileUrl }, filename)))));
}


/***/ }),

/***/ "./src/components/course-viewer/course-page/urkund-utils.ts":
/*!******************************************************************!*\
  !*** ./src/components/course-viewer/course-page/urkund-utils.ts ***!
  \******************************************************************/
/*! exports provided: getUrkundStatusClass, getUrkundHoverText, getUrkundSignificanceClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrkundStatusClass", function() { return getUrkundStatusClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrkundHoverText", function() { return getUrkundHoverText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrkundSignificanceClass", function() { return getUrkundSignificanceClass; });
function getUrkundStatusClass(res) {
    if (!res || !res.Status) {
        return null;
    }
    else
        switch (res.Status.State) {
            case 'Error':
                return "urkund-status urkund-status-error";
            case 'Submitted':
                return "urkund-status urkund-status-submitted";
            case 'Accepted':
                return "urkund-status urkund-status-accepted";
            case 'Analyzed':
                return "urkund-status urkund-status-analyzed";
        }
}
function getUrkundHoverText(res) {
    if (!res || !res.Status)
        return null;
    switch (res.Status.State) {
        case 'Error':
            return res.ExternalId ?
                "Kunde inte tas emot av urkund. Felkod: " + res.Status.ErrorCode + "\n" +
                    ("External ID: " + res.ExternalId + "\nFelmeddelande: " + res.Status.Message)
                :
                    res.Status.Message;
        case 'Submitted':
            return "Filen \u00E4r uppladdad till Urkund. Klicka f\u00F6r att uppdatera status.";
        case 'Accepted':
            return "Filen analyseras fortfarande av Urkund. Klicka f\u00F6r att uppdatera status.";
        case 'Analyzed':
            return "Rapport skapad. Klicka f\u00F6r att \u00F6ppna rapporten i nytt f\u00F6nster";
    }
}
function getUrkundSignificanceClass(res) {
    if (!res || !res.Status)
        return '';
    switch (res.Status.State) {
        case 'Error': return 'urkund-significance-error';
        case 'Submitted': return 'urkund-significance-submitted';
        case 'Accepted': return 'urkund-significance-accepted';
    }
    var report = res.Report;
    if (!report) {
        return "";
    }
    if (report.Significance < 1)
        //return `${cdn}/images/urkund/0.gif`;
        return "urkund-significance urkund-significance-0";
    if (report.Significance < 10)
        //return `${cdn}/images/urkund/1.gif`;
        return "urkund-significance urkund-significance-1";
    if (report.Significance < 25)
        return "urkund-significance urkund-significance-2";
    //return `${cdn}/images/urkund/2.gif`;
    if (report.Significance < 40)
        return "urkund-significance urkund-significance-3";
    //return `${cdn}/images/urkund/3.gif`;
    if (report.Significance < 55)
        return "urkund-significance urkund-significance-4";
    //return `${cdn}/images/urkund/4.gif`;
    if (report.Significance < 70)
        return "urkund-significance urkund-significance-5";
    //return `${cdn}/images/urkund/5.gif`;
    if (report.Significance < 85)
        return "urkund-significance urkund-significance-6";
    //return `${cdn}/images/urkund/6.gif`;
    if (report.Significance < 99.9)
        return "urkund-significance urkund-significance-7";
    //return `${cdn}/images/urkund/7.gif`;
    if (report.Significance >= 99.9)
        return "urkund-significance urkund-significance-8";
    //return `${cdn}/images/urkund/8.gif`;
    return "";
}


/***/ }),

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
/* harmony import */ var _apis_mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../apis/mock/mock-classroom-data */ "./src/apis/mock/mock-classroom-data.ts");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var _shared_notification_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/notification-icon */ "./src/components/teacher-view/shared/notification-icon.tsx");
/* harmony import */ var _digest_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../digest-view */ "./src/components/teacher-view/digest-view.tsx");










var CourseModuleView = (function (_a) {
    var module = _a.module, tasks = _a.tasks;
    var intl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_6__["LanguageContext"]).intl;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_digest_view__WEBPACK_IMPORTED_MODULE_8__["StateContext"]), notificationdigests = _b.notificationdigests, selectedCourse = _b.selectedCourse;
    var getNotSubmittedUsers = function (taskAssignments) {
        var taskNotSubmittedUsers = [];
        // get students from the course study groups who have't uploaded their assignments
        selectedCourse.studyGroups.forEach(function (group) {
            var users = _apis_mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_5__["mockTuitionStudents"][group].filter(function (cs) { return !taskAssignments.find(function (f) { return f.user === cs.studentEmailAddress; }); })
                .map(function (ns) { return { displayName: ns.studentFirstName + " " + ns.studentLastName, email: ns.studentEmailAddress }; });
            if (users) {
                taskNotSubmittedUsers.push.apply(taskNotSubmittedUsers, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](users));
            }
        });
        //sort by lastname - firstname
        return taskNotSubmittedUsers.map(function (s) {
            var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](s.displayName.split(' ')), firstName = _a[0], rest = _a.slice(1);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, s, { firstName: firstName, lastName: rest.join(' ') });
        }).sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["compareProps"])(["lastName", "firstName"]));
    };
    var courseNotifications = notificationdigests[selectedCourse.id];
    return tasks && tasks.length > 0 &&
        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_1__["OpenCloseBox"], { title: react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "notification-container" },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", null, module.name),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_shared_notification_icon__WEBPACK_IMPORTED_MODULE_7__["NotificationIcon"], { course: selectedCourse, entity: 'module', moduleId: module.id, notificationdigests: notificationdigests })), headerOpen: false }, courseNotifications && Object.keys(courseNotifications).length > 0 ? react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null, tasks.map(function (task) {
                var taskAssignments = courseNotifications[task.id] ? courseNotifications[task.id].map(function (t) { return t.assignment; }) : [];
                var notSubmittedUsers = selectedCourse.studyGroups && selectedCourse.studyGroups.length > 0 && getNotSubmittedUsers(taskAssignments);
                var displayTask = notSubmittedUsers.length > 0 || taskAssignments.length > 0;
                return displayTask &&
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_course_task__WEBPACK_IMPORTED_MODULE_3__["CourseTask"], { key: task.id, task: task, assignments: taskAssignments, notSubmittedUsers: notSubmittedUsers });
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");




var CourseTaskNotHandedUserList = (function (_a) {
    var notSubmittedUsers = _a.notSubmittedUsers;
    var intl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_2__["LanguageContext"]).intl;
    var notSubmittedLength = notSubmittedUsers.length;
    var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]), 2), selectedUsers = _b[0], selectUser = _b[1];
    return notSubmittedUsers && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "not-submitted-users taskContainer" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, intl.formatMessage({ id: "teacherView.notSubmittedAssignments", defaultMessage: "Ej lämnat in" })),
        notSubmittedUsers.map(function (ns, index) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal student-row" + (notSubmittedLength === index + 1 ? " last" : "") },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top pull-right", onClick: function () {
                        selectUser(selectedUsers.indexOf(ns.email) > -1 ? selectedUsers.filter(function (u) { return u != ns.email; }) : tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](selectedUsers, [ns.email]));
                    } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "checkBox" + (selectedUsers.indexOf(ns.email) > -1 ? " checked" : "") })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, ns.displayName));
        }),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal remind-assignment" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top pull-right" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn" }, intl.formatMessage({ id: "teacherView.remindBtn", defaultMessage: "Påminn" })))));
});


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
    var task = _a.task, assignments = _a.assignments, notSubmittedUsers = _a.notSubmittedUsers;
    var _b = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_digest_view__WEBPACK_IMPORTED_MODULE_9__["StateContext"]), notificationdigests = _b.notificationdigests, selectedCourse = _b.selectedCourse, seenDigests = _b.seenDigests;
    function onTaskOpened(isOpened) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tagsDigest_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(isOpened && notificationdigests[selectedCourse.id][task.id])) return [3 /*break*/, 2];
                        return [4 /*yield*/, Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["simpleDigest"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_8__["env"].currentUser.mail + selectedCourse.id)];
                    case 1:
                        tagsDigest_1 = _a.sent();
                        //check if not already marked as seen
                        console.log(seenDigests);
                        assignments.forEach(function (assignment) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var assignmentDigest;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["simpleDigest"])(assignment.user + //(studen's email address)
                                            assignment.courseId +
                                            assignment.taskId +
                                            assignment.uploadDate +
                                            (assignment.metadata.driveFileId || ""))];
                                    case 1:
                                        assignmentDigest = _a.sent();
                                        if (!(seenDigests && seenDigests.find(function (a) { return a.digest === assignmentDigest; }))) {
                                            _globals_db__WEBPACK_IMPORTED_MODULE_7__["db"].seenStudentAssignments.add({
                                                id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["createUUID"])(),
                                                tags: [tagsDigest_1],
                                                digest: assignmentDigest
                                            });
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); });
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
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_tasks_assignments__WEBPACK_IMPORTED_MODULE_3__["CourseTaskAssignments"], { assignments: assignments }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_task_not_handed_users__WEBPACK_IMPORTED_MODULE_4__["CourseTaskNotHandedUserList"], { notSubmittedUsers: notSubmittedUsers })));
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _task_assignment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-assignment */ "./src/components/teacher-view/assignments-view/task-assignment.tsx");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");





var CourseTaskAssignments = (function (_a) {
    var assignments = _a.assignments;
    var intl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"]).intl;
    var refreshableAssigments = Object.assign([], assignments);
    //determine which assinments should get data from urkund
    refreshableAssigments.length > 0 && refreshableAssigments.forEach(function (a) {
        a.shouldRefresh = false;
        if (a.metadata &&
            !a.metadata.urkundUploadError && ( // Not possible to refresh if upload has failed
        !a.metadata.urkundLastPoll || // Never checked status yet
            (['Accepted', 'Submitted'].indexOf(JSON.parse(a.metadata.urkundResponse)[0].Status.State) >= 0 &&
                parseInt(a.metadata.urkundLastPoll) < moment__WEBPACK_IMPORTED_MODULE_1___default()().add(-15, "seconds").toDate().getTime()))) {
            a.shouldRefresh = true;
        }
    });
    return assignments.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "task-assignments-table" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentStudentName", defaultMessage: "Elev" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentFileName", defaultMessage: "Filnamn" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentSubmittedAt", defaultMessage: "Inlamnat" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentReport", defaultMessage: "Rapport" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentGrade", defaultMessage: "Niva" })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, refreshableAssigments.map(function (assignment) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_task_assignment__WEBPACK_IMPORTED_MODULE_2__["TaskAssignment"], { assignment: assignment, shouldGetUrkundStatus: assignment.shouldRefresh });
        })))
        :
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, intl.formatMessage({ id: "teacherView.noTaskAssignments", defaultMessage: "Inga uppdrag uppladdade för denna uppgift" }));
});


/***/ }),

/***/ "./src/components/teacher-view/assignments-view/index.tsx":
/*!****************************************************************!*\
  !*** ./src/components/teacher-view/assignments-view/index.tsx ***!
  \****************************************************************/
/*! exports provided: AssignmentsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsView", function() { return AssignmentsView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _course_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-module */ "./src/components/teacher-view/assignments-view/course-module.tsx");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var _digest_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../digest-view */ "./src/components/teacher-view/digest-view.tsx");
/* harmony import */ var _course_builder_sub_components_select_study_groups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../course-builder/sub-components/select-study-groups */ "./src/components/course-builder/sub-components/select-study-groups.tsx");







var AssignmentsView = (function () {
    var intl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"]).intl;
    var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]), 2), selectedStudyGroups = _a[0], setFilterStudyGroup = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_digest_view__WEBPACK_IMPORTED_MODULE_4__["StateContext"]), tasks = _b.tasks, selectedCourse = _b.selectedCourse, school = _b.school;
    var defaultDescriptionMessage = "Här listas samtliga inlämningsuppgifter i din/dina kurser du handleder."
        + "Klicka till höger för att välja kurs. Kursens uppgifter syns nedan. Du kan öppna/dölja varje modul.";
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        " ",
        selectedCourse ?
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, intl.formatMessage({ id: "teacherView.assignmentsViewTitle", defaultMessage: "Inlämningsuppgifter" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, intl.formatMessage({ id: "teacherView.assignmentsViewDescription", defaultMessage: { defaultDescriptionMessage: defaultDescriptionMessage } })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null,
                    selectedCourse.name,
                    "-",
                    selectedCourse.description),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout sv-skip-spacer" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top pull-right study-group-filter" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_select_study_groups__WEBPACK_IMPORTED_MODULE_5__["SelectStudyGroups"], { school: school, courseCode: selectedCourse.code, selectedStudyGroups: selectedStudyGroups, onUpdate: function (studyGroups) { setFilterStudyGroup(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](studyGroups)); }, placeholder: intl.formatMessage({ id: "teacherView.filterByStudygroupsPlaceholder", defaultMessage: "Välj studiegrupp" }) }))),
                selectedCourse.modules.map(function (module) {
                    var moduleTasks = tasks.filter(function (t) { return module.taskIds.find(function (tId) { return tId === t.id; }); });
                    return moduleTasks.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_module__WEBPACK_IMPORTED_MODULE_2__["CourseModuleView"], { tasks: moduleTasks, key: module.id, module: module }) : null;
                }))
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








var TaskAssignment = (function (_a) {
    var assignment = _a.assignment, shouldGetUrkundStatus = _a.shouldGetUrkundStatus;
    var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(assignment), 2), assignmentsWithStatus = _b[0], setAssignmentStatus = _b[1];
    function refreshAssignment(assignment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var client, _a, courseId, taskId, school, user, filename, req, _b, _c, resJson, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        client = _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["env"].kedBackendClient.http;
                        _a = this.props, courseId = _a.courseId, taskId = _a.taskId, school = _a.school;
                        user = assignment.user, filename = assignment.filename;
                        return [4 /*yield*/, setAssignmentStatus(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, assignment, { isRefreshing: true }))];
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
                        resJson = _d.sent();
                        return [4 /*yield*/, setAssignmentStatus(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, assignment, { isRefreshing: false, metadata: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, assignment.metadata, { urkundResponse: resJson }) }))];
                    case 7:
                        _d.sent();
                        return [3 /*break*/, 10];
                    case 8:
                        e_1 = _d.sent();
                        return [4 /*yield*/, setAssignmentStatus(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, assignment, { isRefreshing: false, refreshError: e_1 }))];
                    case 9:
                        _d.sent();
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    }
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (shouldGetUrkundStatus) {
            setAssignmentStatus(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, assignment, { isRefreshing: true }));
        }
    }, [shouldGetUrkundStatus, assignment]);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: assignmentsWithStatus.mediaLink, style: assignmentsWithStatus.metadata.$meta ? { opacity: 0.5 } : {} },
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
        Object(_course_viewer_course_page_task_assignments_utils__WEBPACK_IMPORTED_MODULE_3__["getUrkundStatus"])(assignmentsWithStatus, refreshAssignment));
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






var CoursesView = (function (_a) {
    var courseBuilderUrl = _a.courseBuilderUrl;
    var intl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_2__["LanguageContext"]).intl;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_digest_view__WEBPACK_IMPORTED_MODULE_5__["StateContext"]), notificationdigests = _b.notificationdigests, teacherCourses = _b.teacherCourses, selectedCourse = _b.selectedCourse;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "ked_boxed" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, intl.formatMessage({ id: "teacherView.coursesViewTitle", defaultMessage: "Mina kurser/ uppgifter" })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "taskContainer odd-even" }, teacherCourses.map(function (course) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { key: course.description, className: "align-horizontal" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "teacherSchoolCourse" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "horizontalItem top pull-right" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { target: "_blank", href: Object(_access_control__WEBPACK_IMPORTED_MODULE_3__["preserveImpersonationQuery"])(courseBuilderUrl, {}) + "#/courses/" + course.id + "/edit", className: "editItem" })),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "horizontalItem top" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification-container" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: selectedCourse && selectedCourse.id === course.id ? "selected" : "", to: "/overview/course/" + course.id + "/assignments" },
                                        course.name,
                                        " - ",
                                        course.description),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_notification_icon__WEBPACK_IMPORTED_MODULE_4__["NotificationIcon"], { notificationdigests: notificationdigests, entity: 'course', course: course }))))));
            }))));
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











var contextInitialValue = { notificationdigests: {}, selectedCourse: null, teacherCourses: [], seenDigests: [], school: "", tasks: [] };
var StateContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(contextInitialValue);
var DigestView = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])((function (_a) {
    var _b;
    var match = _a.match, courseBuilderUrl = _a.courseBuilderUrl;
    var courseId = match ? match.params.courseId : null;
    var courseId = courseId ? courseId : null;
    var myCourses = [];
    var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({ assignments: {}, digestIds: [] }), 2), notificationdigests = _c[0], setAssignments = _c[1];
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
    //retrieving the digestIds with useEffect causes a second time loading state
    //changing seenStudentAssignments does not re-render the page.
    var seenDigests = (_b = _globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].seenStudentAssignments).tags.apply(_b, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](notificationdigests.digestIds)).toValue().read();
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        function getNotificationDigest(school, courseIds) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var client, res, _a, _b, assignments, digestArray, err_1;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            client = _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["env"].kedBackendClient.http;
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 7, , 8]);
                            return [4 /*yield*/, client.get("assignments/notificationdigests", { school: school, courseIds: courseIds })];
                        case 2:
                            res = _c.sent();
                            if (!(res.status !== 200)) return [3 /*break*/, 4];
                            _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_8__["HttpError"].bind;
                            _b = [void 0, res.status];
                            return [4 /*yield*/, res.text()];
                        case 3: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_8__["HttpError"], _b.concat([_c.sent()])))();
                        case 4: return [4 /*yield*/, res.json()];
                        case 5:
                            assignments = _c.sent();
                            return [4 /*yield*/, Promise.all(myCourses.map(function (course) { return Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_8__["simpleDigest"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["env"].currentUser.mail + course.id); }))];
                        case 6:
                            digestArray = _c.sent();
                            setAssignments({ digestIds: digestArray, assignments: assignments });
                            return [3 /*break*/, 8];
                        case 7:
                            err_1 = _c.sent();
                            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["showError"])(err_1);
                            return [3 /*break*/, 8];
                        case 8: return [2 /*return*/];
                    }
                });
            });
        }
        if (courseIds && schoolName) {
            getNotificationDigest(schoolName, courseIds);
        }
    }, [schoolName, courseIds, selectedCourse]);
    var contextValue = {
        notificationdigests: notificationdigests.assignments,
        selectedCourse: selectedCourse,
        teacherCourses: myCourses,
        seenDigests: seenDigests,
        school: schoolName,
        tasks: taskAssignments
    };
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StateContext.Provider, { value: contextValue },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_ks_common_two_columns_page__WEBPACK_IMPORTED_MODULE_3__["TwoColumnsPage"], { left: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_assignments_view__WEBPACK_IMPORTED_MODULE_4__["AssignmentsView"], null), right: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_view__WEBPACK_IMPORTED_MODULE_5__["CoursesView"], { courseBuilderUrl: courseBuilderUrl }), rightWidth: 5 }));
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
/* harmony import */ var _utility_components_observe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility-components/observe */ "./src/components/utility-components/observe.tsx");
/* harmony import */ var _course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course-builder/sub-components/ellipsis-loader */ "./src/components/course-builder/sub-components/ellipsis-loader.tsx");
/* harmony import */ var _digest_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./digest-view */ "./src/components/teacher-view/digest-view.tsx");
/* harmony import */ var _utility_components_SetupLanguageIntl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility-components/SetupLanguageIntl */ "./src/components/utility-components/SetupLanguageIntl.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");







var TeacherViewApp = Object(_utility_components_SetupLanguageIntl__WEBPACK_IMPORTED_MODULE_5__["setupIntl"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["injectIntl"])(function (_a) {
    var courseBuilderUrl = _a.courseBuilderUrl;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "teacher-view" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/", exact: true, render: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: "/overview" }); } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: false, path: "/overview/course/:courseId/assignments" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utility_components_observe__WEBPACK_IMPORTED_MODULE_2__["Observe"], { fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_3__["EllipsisLoader"], null) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_digest_view__WEBPACK_IMPORTED_MODULE_4__["DigestView"], { courseBuilderUrl: courseBuilderUrl })))));
}));


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


var NotificationIcon = (function (_a) {
    var course = _a.course, entity = _a.entity, moduleId = _a.moduleId, taskId = _a.taskId, notificationdigests = _a.notificationdigests;
    var seenDigests = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_digest_view__WEBPACK_IMPORTED_MODULE_1__["StateContext"]).seenDigests;
    var notifications = 0;
    //let seenDigests = db.seenStudentAssignments.tags(courseNotificationDigest).toValue().read() as SeenStudentAssignment[];
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
            return taskAssignments.filter(function (t) { return !seenDigests.find(function (d) { return d.digest === t.digest; }); }).length;
        }
        return 0;
    }
    //A more efficient way is to retrieve all digest ids from the root component (digest-view component) and pass those to the children
    //In both cases a flicker is happening while the initial load because of the computation using the simple digest
    //Another way is to compute this on the server side, in the GetNotificationDigests method
    // useEffect(() => {
    //     async function getCoursesNotifications(courseId: string) {
    //         try {
    //             const courseDigest = await simpleDigest(env.currentUser.mail + courseId) as string;
    //             setCourseNotificationDigest(courseDigest);
    //         } catch (err) {
    //             showError(err);
    //         }
    //     };
    //     if(course){
    //         getCoursesNotifications(course.id);
    //     }
    // }, [course])
    return notifications > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "notification-icon" }, notifications);
});


/***/ }),

/***/ "./src/components/utility-components/LanguageContext.tsx":
/*!***************************************************************!*\
  !*** ./src/components/utility-components/LanguageContext.tsx ***!
  \***************************************************************/
/*! exports provided: LanguageContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageContext", function() { return LanguageContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var LanguageContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({ intl: null });


/***/ }),

/***/ "./src/components/utility-components/SetupLanguageIntl.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/utility-components/SetupLanguageIntl.tsx ***!
  \*****************************************************************/
/*! exports provided: setupIntl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupIntl", function() { return setupIntl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl/locale-data/en */ "./node_modules/react-intl/locale-data/en.js");
/* harmony import */ var react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl_locale_data_sv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl/locale-data/sv */ "./node_modules/react-intl/locale-data/sv.js");
/* harmony import */ var react_intl_locale_data_sv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_sv__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _translations_sv_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../translations/sv.json */ "./src/translations/sv.json");
var _translations_sv_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../translations/sv.json */ "./src/translations/sv.json", 1);
/* harmony import */ var _translations_en_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../translations/en.json */ "./src/translations/en.json");
var _translations_en_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../translations/en.json */ "./src/translations/en.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









var setupIntl = function (Component) {
    return /** @class */ (function (_super) {
        tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](_SetupLanguageIntl, _super);
        function _SetupLanguageIntl(props) {
            var _this = _super.call(this, props) || this;
            Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["addLocaleData"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_2___default.a, react_intl_locale_data_sv__WEBPACK_IMPORTED_MODULE_3___default.a));
            _this.messages = {
                'sv': _translations_sv_json__WEBPACK_IMPORTED_MODULE_4__,
                'en': _translations_en_json__WEBPACK_IMPORTED_MODULE_5__
            };
            moment__WEBPACK_IMPORTED_MODULE_8___default()().locale(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_7__["default"].KED_LOCALE);
            return _this;
        }
        _SetupLanguageIntl.prototype.render = function () {
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["IntlProvider"], { locale: _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_7__["default"].KED_LOCALE, messages: this.messages[_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_7__["default"].KED_LOCALE] },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](Component, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props)));
        };
        return _SetupLanguageIntl;
    }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]));
};


/***/ }),

/***/ "./src/components/utility-components/observe.tsx":
/*!*******************************************************!*\
  !*** ./src/components/utility-components/observe.tsx ***!
  \*******************************************************/
/*! exports provided: Observe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observe", function() { return Observe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var kedbackend_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kedbackend/observable */ "./kedbackend/observable.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");




var FiberContextReact = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext(null);
kedbackend_observable__WEBPACK_IMPORTED_MODULE_1__["FiberContext"].addProvider(function () {
    // Here we actuall do useHook(FiberContext) but without logging to internal debug logs
    // Normally, react hooks are sensitive in which order they are called (useState(), etc)
    // but useContext() is not sensitive about that at all.
    // Still, the debug version of react will log calls to useHook() and throw if a render
    // doesn't use the same number of hooks every time. This check should not apply
    // to useHook() since it is not sensitive to the order in which it was called.
    // And we need to be able to call it from within contitional expressions / statements,
    // so we must bypass this debug logging here by accessing the _currentValue directly.
    return FiberContextReact._currentValue;
});
var Observe = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Observe, _super);
    function Observe(props) {
        var _this = _super.call(this, props) || this;
        _this.subscriptions = [];
        _this.outerSubscription = {
            unsubscribe: function () {
                _this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
                _this.subscriptions = [];
            }
        };
        _this.observer = function (value, error, subscription) {
            if (error) {
                _this.setState({ error: error });
            }
            else {
                _this.setState(function (_a) {
                    var counter = _a.counter;
                    return ({ counter: counter + 1, error: error });
                });
            }
        };
        _this.state = {
            counter: 0,
            error: null
        };
        return _this;
    }
    Observe.prototype.componentDidCatch = function (error, info) {
        if (!error || !error.name)
            error = new Error('' + error);
        this.setState({ error: error, info: info });
        console.log(error, info);
    };
    Observe.prototype.componentWillMount = function () {
        this.outerSubscription.unsubscribe();
    };
    Observe.prototype.render = function () {
        if (this.state.error) {
            return this.props.errorFallback || react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kunde inte ladda inneh\u00E5llet"], ["Kunde inte ladda inneh\u00E5llet"]))));
        }
        this.outerSubscription.unsubscribe();
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Suspense"], { fallback: this.props.fallback || null },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FiberContextReact.Provider, { value: this }, this.props.children));
    };
    return Observe;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component));

var templateObject_1;


/***/ }),

/***/ "./src/components/utility-components/open-close-box.tsx":
/*!**************************************************************!*\
  !*** ./src/components/utility-components/open-close-box.tsx ***!
  \**************************************************************/
/*! exports provided: OpenCloseBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCloseBox", function() { return OpenCloseBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _charts_goal_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../charts/goal-progress */ "./src/components/charts/goal-progress.tsx");
/* REFACTOR: Move this component outside coursebuilder!
   This is a general-purpose component
*/



var OpenCloseBox = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OpenCloseBox, _super);
    function OpenCloseBox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            headerOpen: props.headerOpen || false
        };
        return _this;
    }
    OpenCloseBox.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.headerOpen !== this.props.headerOpen) {
            this.setState({ headerOpen: nextProps.headerOpen });
        }
    };
    OpenCloseBox.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, className = _a.className, children = _a.children, headerClassName = _a.headerClassName, contentClassName = _a.contentClassName, displayProgress = _a.displayProgress, progressData = _a.progressData, inactivated = _a.inactivated, inactivatedRender = _a.inactivatedRender;
        var headerOpen = this.state.headerOpen;
        if (inactivated)
            return inactivatedRender === 'titleAndChildren' ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, title),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, children)) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, children);
        //var currentProgressData = //progressData();
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: (className || '') + " openClose" + (headerOpen ? " open" : "") },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openHeader" + (headerClassName ? " " + headerClassName : ""), onClick: function () {
                    if (_this.props.onOpenClose)
                        _this.props.onOpenClose(!_this.state.headerOpen);
                    _this.setState({ headerOpen: !_this.state.headerOpen });
                } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openHeaderContainer" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, title),
                    displayProgress && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_charts_goal_progress__WEBPACK_IMPORTED_MODULE_2__["GoalProgress"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, progressData)))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openContent" + (contentClassName ? " " + contentClassName : "") }, children));
    };
    return OpenCloseBox;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/elements/KEDAppTeacherView/app.teacherview.client.tsx":
/*!*******************************************************************!*\
  !*** ./src/elements/KEDAppTeacherView/app.teacherview.client.tsx ***!
  \*******************************************************************/
/*! exports provided: KEDAppTeacherView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEDAppTeacherView", function() { return KEDAppTeacherView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_utility_components_SetupLanguageIntl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/utility-components/SetupLanguageIntl */ "./src/components/utility-components/SetupLanguageIntl.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _components_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var _components_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _components_teacher_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/teacher-view */ "./src/components/teacher-view/index.tsx");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");










var bearerPromise = _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].bearerProvider.getBearer(); // Start getting bearer as soon as possible.
var _KEDAppTeacherView = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](_KEDAppTeacherView, _super);
    function _KEDAppTeacherView(props) {
        return _super.call(this, props) || this;
    }
    _KEDAppTeacherView.prototype.componentWillMount = function () {
        var _this = this;
        bearerPromise.then(function () {
            _this.setState({ isTokenLoaded: true });
        }).catch(function (err) {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["showError"])(err);
        });
    };
    _KEDAppTeacherView.prototype.render = function () {
        var intl = this.props.intl;
        return this.state.isTokenLoaded ?
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_6__["LanguageContext"].Provider, { value: { intl: intl } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_teacher_view__WEBPACK_IMPORTED_MODULE_8__["TeacherViewApp"], { courseBuilderUrl: _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_9__["cfg"].KED_COURSE_BUILDER_URL })) :
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_7__["Spinner"], null),
                "V.g. v\u00E4nta... autenticerar...");
    };
    return _KEDAppTeacherView;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
var KEDAppTeacherView = Object(_components_utility_components_SetupLanguageIntl__WEBPACK_IMPORTED_MODULE_3__["setupIntl"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(_KEDAppTeacherView));


/***/ }),

/***/ "./src/elements/KEDAppTeacherView/webpack-entry.ts":
/*!*********************************************************!*\
  !*** ./src/elements/KEDAppTeacherView/webpack-entry.ts ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _globals_KED__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals/KED */ "./src/globals/KED.ts");
/* harmony import */ var _app_teacherview_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.teacherview.client */ "./src/elements/KEDAppTeacherView/app.teacherview.client.tsx");



// Add KEDAppTeacherView to the set of components in KED.components
_globals_KED__WEBPACK_IMPORTED_MODULE_1__["default"].components = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _globals_KED__WEBPACK_IMPORTED_MODULE_1__["default"].components, { KEDAppTeacherView: _app_teacherview_client__WEBPACK_IMPORTED_MODULE_2__["KEDAppTeacherView"] });


/***/ }),

/***/ "./src/globals/KED.cfg.ts":
/*!********************************!*\
  !*** ./src/globals/KED.cfg.ts ***!
  \********************************/
/*! exports provided: default, cfg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cfg", function() { return cfg; });
/* harmony import */ var _KED__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KED */ "./src/globals/KED.ts");

;
if (!_KED__WEBPACK_IMPORTED_MODULE_0__["default"].cfg)
    _KED__WEBPACK_IMPORTED_MODULE_0__["default"].cfg = {};
/* harmony default export */ __webpack_exports__["default"] = (_KED__WEBPACK_IMPORTED_MODULE_0__["default"].cfg);
var cfg = _KED__WEBPACK_IMPORTED_MODULE_0__["default"].cfg;


/***/ }),

/***/ "./src/globals/KED.env.ts":
/*!********************************!*\
  !*** ./src/globals/KED.env.ts ***!
  \********************************/
/*! exports provided: default, env */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
/* harmony import */ var _ked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ked */ "./src/globals/ked.ts");

if (!_ked__WEBPACK_IMPORTED_MODULE_0__["default"].env)
    _ked__WEBPACK_IMPORTED_MODULE_0__["default"].env = {};
/* harmony default export */ __webpack_exports__["default"] = (_ked__WEBPACK_IMPORTED_MODULE_0__["default"].env);
var env = _ked__WEBPACK_IMPORTED_MODULE_0__["default"].env;


/***/ }),

/***/ "./src/globals/KED.ts":
/*!****************************!*\
  !*** ./src/globals/KED.ts ***!
  \****************************/
/*! exports provided: KED_NAMESPACE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KED_NAMESPACE", function() { return KED_NAMESPACE; });
var KED_NAMESPACE = "KED";
var result = typeof KED === 'undefined' ? {} : KED;
if (typeof window !== 'undefined' && typeof KED === 'undefined') {
    window[KED_NAMESPACE] = result;
}
/* harmony default export */ __webpack_exports__["default"] = (result);


/***/ }),

/***/ "./src/globals/db.ts":
/*!***************************!*\
  !*** ./src/globals/db.ts ***!
  \***************************/
/*! exports provided: db, globalId, Schools, CourseInstances */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalId", function() { return globalId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schools", function() { return Schools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseInstances", function() { return CourseInstances; });
/* harmony import */ var _KED_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var kedbackend_repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kedbackend/repo */ "./kedbackend/repo.js");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _KED_cfg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KED.cfg */ "./src/globals/KED.cfg.ts");




var db = new kedbackend_repo__WEBPACK_IMPORTED_MODULE_1__["KedBackendRepo"](function () { return _KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].kedBackendClient; }, function () { return _KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser ?
    _KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser.mail :
    ""; }, function () { return _KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser ?
    _KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser.displayName || _KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser.mail :
    ""; });
var globalId = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["getGlobalId"])(_KED_cfg__WEBPACK_IMPORTED_MODULE_3__["default"].KED_REALM);
var Schools = {
    standardSchool: db.schools.name("standard").cacheOptimized().single(),
    get mySchool() { return db.schools.name(_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser.school).cacheOptimized().single(); }
};
var CourseInstances = {
    getBranchId: function (school, courseId) {
        return school.switchMap(function (school) {
            return db.branches
                .hasEdgesFrom([school.officialBranchId])
                .name("draft")
                .tags(courseId)
                .idsOnly()
                .map(function (_a) {
                var id = _a.id;
                return id;
            })
                .toValue()
                .map(function (ids) { return ids.length > 0 ? ids[0] : undefined; });
        });
    },
    /** Get a DRAFT branch for given course ID and given school.
     * If there is not yet such a branch, create it using mutationsOnEmpty() which will
     * lead to the C# code DocumentRepository.ReadOrMutate() via DocumentController.
     */
    getOrCreateBranchId: function (school, courseId) {
        return db.courseInstances.idsOnly().id(courseId).switchMap(function () {
            return school.switchMap(function (school) {
                return db.branches
                    .hasEdgesFrom([school.officialBranchId])
                    .name("draft")
                    .tags(courseId)
                    .idsOnly()
                    .mutationsOnEmpty(function (tx) {
                    // These 2 mutations will occur server side, atomically.
                    // Will be sent on each request in the query, but will only execute if query results in zero items.
                    //console.log("School:", school);
                    var id = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["createUUID"])();
                    tx.add("branches", {
                        id: id,
                        acl: [
                            "role:USER:R",
                            "schoolRole:" + school.name + "/EMPLOYEE:S"
                        ],
                        name: 'draft',
                        schoolId: school.id,
                        treeParentId: school.officialBranchId,
                        tags: [courseId]
                    });
                    // Approving the branch makes sure that it was created by an EMPLOYEE on given school.
                    tx.link2("branches", school.officialBranchId, "approvedChildren", id);
                })
                    .single()
                    .map(function (_a) {
                    var id = _a.id;
                    return id;
                });
            });
        });
    },
    getAllDescendantIds: function (courseId) {
        return db.courseBlocks.tags(courseId).idsOnly().concat(db.courseContents.tags(courseId).idsOnly()).concat(db.courseTabs.tags(courseId).idsOnly()).concat(db.tasks.tags(courseId).idsOnly())
            .map(function (x) { return x.id; });
    }
};


/***/ }),

/***/ "./src/globals/ked.ts":
/*!****************************!*\
  !*** ./src/globals/ked.ts ***!
  \****************************/
/*! exports provided: KED_NAMESPACE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KED_NAMESPACE", function() { return KED_NAMESPACE; });
var KED_NAMESPACE = "KED";
var result = typeof KED === 'undefined' ? {} : KED;
if (typeof window !== 'undefined' && typeof KED === 'undefined') {
    window[KED_NAMESPACE] = result;
}
/* harmony default export */ __webpack_exports__["default"] = (result);


/***/ }),

/***/ "./src/translations/en.json":
/*!**********************************!*\
  !*** ./src/translations/en.json ***!
  \**********************************/
/*! exports provided: addeditsubtask.deleteSubtask, addeditsubtask.editSubtask, addeditsubtask.nameLabel, addeditsubtask.addSubtask, calendar.currentDate, calendar.fullDayEventLocation, calendar.loadCalendarEvents, calendar.loadingCalendar, calendar.weekNumber, common.addDescriptionPlhd, common.cancel, common.changesNotSavedErrorOccured, common.changesNotSavedUnauthorized, common.descriptionLabel, common.errorSavingData, common.linkLabel, common.loading, common.nameLabel, common.save, common.saved, common.saving, common.remove, customTask.addWorkGoalTitle, customTask.enterNamePlhd, learningGoalsLost.overall, task.addSubtask, task.editTask, task.editWorkGoals, task.enterTaskNamePlhd, task.removeDeadline, task.removeThisTask, task.removeWorkGoals, task.setDeadline, task.setDeadlineLabel, task.subTasks, task.targetNameLabel, task.taskNameLabel, task.whatShouldYouDoPlhd, taskList.nextWeekTask, taskList.lastWeekTask, taskList.currentWeekTask, taskList.removeTaskFromWeeklyPlanning, taskList.addTaskToWeeklyPlanning, termplanner.comments, termplanner.course, termplanner.edsGoalGrades, termplanner.englishLanguage, termplanner.finalStep, termplanner.firstTerm, termplanner.hindiLanguage, termplanner.ict, termplanner.loadingTermplanner, termplanner.maths, termplanner.modernLanguage, termplanner.noFinalStepAvailable, termplanner.secondTerm, termplanner.termPlanning, termplanner.weekNumber, termplanner.chartsBoxTitle, termplanner.yoga, tutorNoteDialog.weekComment, test.chooseComponentLabel, test.pageDescription, userTasks.addLearningGoal, userTasks.deleteLearningGoal, userTasks.goals, weekNotebook.title, weekplanner.addLearningGoal, weekplanner.addLearningGoalTitle, weekplanner.confirmRemoveLearningObjectives, weekplanner.copyPreviousWeekTaks, weekplanner.emptyLearningGoalErr, weekplanner.evaluation, weekplanner.evaluationDescription, weekplanner.learningGoal, weekplanner.logBook, weekplanner.nameCannotBeEmpty, weekplanner.nameMustNotBeEmpty, weekplanner.strategy, weekplanner.strategyAndEvaluation, weekplanner.strategyDescription, weekplanner.weekNumber, wysiwyg.bold, wysiwyg.code, wysiwyg.heading1, wysiwyg.heading2, wysiwyg.heading3, wysiwyg.image, wysiwyg.imagePromptMsg, wysiwyg.italic, wysiwyg.line, wysiwyg.link, wysiwyg.olist, wysiwyg.paragraph, wysiwyg.quote, wysiwyg.strikethrough, wysiwyg.ulist, wysiwyg.underline, teacherView.coursesViewTitle, teacherView.assignmentsViewTitle, teacherView.assignmentsViewDescription, teacherView.noUploadedAssignmentsForModule, teacherView.assignmentStudentName, teacherView.assignmentFileName, teacherView.assignmentSubmittedAt, teacherView.assignmentReport, teacherView.assignmentGrade, teacherView.noTaskAssignments, teacherView.notSubmittedAssignments, teacherView.remindBtn, teacherView.filterByStudygroupsPlaceholder, default */
/***/ (function(module) {

module.exports = {"addeditsubtask.deleteSubtask":"Delete subtask","addeditsubtask.editSubtask":"Edit subtask","addeditsubtask.nameLabel":"Name of subtask","addeditsubtask.addSubtask":"Add sub-task","calendar.currentDate":"Week {week}, {year}","calendar.fullDayEventLocation":"Place: {location}","calendar.loadCalendarEvents":"Load calendar events...","calendar.loadingCalendar":"Loading calendars... (listing...)","calendar.weekNumber":"W{weekNumber}","common.addDescriptionPlhd":"Add description...","common.cancel":"Cancel","common.changesNotSavedErrorOccured":"An error occured while saving data. Your changes were not saved.","common.changesNotSavedUnauthorized":"The changes were not saved due to insufficient authority","common.descriptionLabel":"Description","common.errorSavingData":"An error occured while saving data.","common.linkLabel":"Link","common.loading":"Loading...","common.nameLabel":"Name","common.save":" Save","common.saved":" Saved","common.saving":"Saving","common.remove":"Delete","customTask.addWorkGoalTitle":"Add own working goal","customTask.enterNamePlhd":"Enter Name...","learningGoalsLost.overall":"Overall","task.addSubtask":"Add subtask","task.editTask":"Edit task","task.editWorkGoals":"Edit working goal","task.enterTaskNamePlhd":"Enter the name of task...","task.removeDeadline":"Delete deadline","task.removeThisTask":"Delete this task","task.removeWorkGoals":"Delete working goal","task.setDeadline":"Set deadline","task.setDeadlineLabel":"Set deadline...","task.subTasks":"Subtasks","task.targetNameLabel":"Name of working goal","task.taskNameLabel":"Name of task","task.whatShouldYouDoPlhd":"What should you do?","taskList.nextWeekTask":"for next week (w{week})","taskList.lastWeekTask":"for last week (w{week})","taskList.currentWeekTask":"for week {week}","taskList.removeTaskFromWeeklyPlanning":"Delete task from your weekly planning {week}","taskList.addTaskToWeeklyPlanning":"Add task to your weekly planning {week}","termplanner.comments":"Comments","termplanner.course":"Theme course","termplanner.edsGoalGrades":"Intermediate goals","termplanner.englishLanguage":"Eng","termplanner.finalStep":"Final Step","termplanner.firstTerm":"FT {year}","termplanner.hindiLanguage":"Hindi","termplanner.ict":"ICT","termplanner.loadingTermplanner":"Loading Termplanner","termplanner.maths":"Maths","termplanner.modernLanguage":"MFL","termplanner.noFinalStepAvailable":"No final step available","termplanner.secondTerm":"ST {year}","termplanner.termPlanning":"Term planner","termplanner.weekNumber":"Week","termplanner.chartsBoxTitle":"Progress Charts","termplanner.yoga":"Yoga","tutorNoteDialog.weekComment":"Note for week {weekNumber}","test.chooseComponentLabel":"Component","test.pageDescription":"Test page for the components on the starting page","userTasks.addLearningGoal":"Own working goal","userTasks.deleteLearningGoal":"Delete learning goal and its tasks","userTasks.goals":"Own learning goal","weekNotebook.title":"Notepad","weekplanner.addLearningGoal":"Goal:","weekplanner.addLearningGoalTitle":"Add own learning goal","weekplanner.confirmRemoveLearningObjectives":"Delete learning goal and {learningGoalsNumber} tasks?","weekplanner.copyPreviousWeekTaks":"Copy from previous week","weekplanner.emptyLearningGoalErr":"The learning goal cannot be empty","weekplanner.evaluation":"Evaluation","weekplanner.evaluationDescription":"Reflection on your work effort and your chosen strategies during the week. Evaluate in relation to your goals.","weekplanner.learningGoal":"Own learning goal","weekplanner.logBook":"Logbook","weekplanner.nameCannotBeEmpty":"Name cannot be empty","weekplanner.nameMustNotBeEmpty":"Name must not be empty","weekplanner.strategy":"Strategy","weekplanner.strategyAndEvaluation":"Strategy & Evaluation","weekplanner.strategyDescription":"What I should do to learn","weekplanner.weekNumber":"Week {weekNumber}","wysiwyg.bold":"Bold","wysiwyg.code":"Code","wysiwyg.heading1":"Heading 1","wysiwyg.heading2":"Heading 2","wysiwyg.heading3":"Heading 3","wysiwyg.image":"Insert image","wysiwyg.imagePromptMsg":"Enter the URL of the image","wysiwyg.italic":"Italics","wysiwyg.line":"Horizontal line","wysiwyg.link":"Insert link","wysiwyg.olist":"Ordered list","wysiwyg.paragraph":"Paragraph","wysiwyg.quote":"Quote","wysiwyg.strikethrough":"Strikethrough","wysiwyg.ulist":"Bullet list","wysiwyg.underline":"Underline","teacherView.coursesViewTitle":"My Courses","teacherView.assignmentsViewTitle":"Assignments","teacherView.assignmentsViewDescription":"Here you cand find all the assignments you supervise. Click on the right menu to select course. The details are displayed below. You can open/hide each module.","teacherView.noUploadedAssignmentsForModule":"No assignments have been uploaded for this module","teacherView.assignmentStudentName":"Pupil","teacherView.assignmentFileName":"Filename","teacherView.assignmentSubmittedAt":"Submitted","teacherView.assignmentReport":"Report","teacherView.assignmentGrade":"Grade","teacherView.noTaskAssignments":"No assignments uploaded for this task","teacherView.notSubmittedAssignments":"Not submitted","teacherView.remindBtn":"Remind","teacherView.filterByStudygroupsPlaceholder":"Select study groups"};

/***/ }),

/***/ "./src/translations/sv.json":
/*!**********************************!*\
  !*** ./src/translations/sv.json ***!
  \**********************************/
/*! exports provided: addeditsubtask.addSubtask, addeditsubtask.deleteSubtask, addeditsubtask.editSubtask, addeditsubtask.nameLabel, calendar.currentDate, calendar.fullDayEventLocation, calendar.loadCalendarEvents, calendar.loadingCalendar, calendar.weekNumber, common.addDescriptionPlhd, common.cancel, common.changesNotSavedErrorOccured, common.changesNotSavedUnauthorized, common.descriptionLabel, common.errorSavingData, common.linkLabel, common.loading, common.nameLabel, common.save, common.saved, common.saving, common.remove, customTask.addWorkGoalTitle, customTask.enterNamePlhd, learningGoalsLost.overall, task.addSubtask, task.editTask, task.editWorkGoals, task.enterTaskNamePlhd, task.removeDeadline, task.removeThisTask, task.removeWorkGoals, task.setDeadline, task.setDeadlineLabel, task.subTasks, task.targetNameLabel, task.taskNameLabel, task.whatShouldYouDoPlhd, taskList.nextWeekTask, taskList.lastWeekTask, taskList.currentWeekTask, taskList.removeTaskFromWeeklyPlanning, taskList.addTaskToWeeklyPlanning, termplanner.comments, termplanner.course, termplanner.edsGoalGrades, termplanner.englishLanguage, termplanner.swedishLanguage, termplanner.finalStep, termplanner.firstTerm, termplanner.hindiLanguage, termplanner.loadingTermplanner, termplanner.modernLanguageFullname, termplanner.mathsFullname, termplanner.noFinalStepAvailable, termplanner.swedishLanguageFullName, termplanner.englishLanguageFullName, termplanner.maths, termplanner.modernLanguage, termplanner.secondTerm, termplanner.termPlanning, termplanner.weekNumber, termplanner.chartsBoxTitle, tutorNoteDialog.weekComment, test.chooseComponentLabel, test.pageDescription, userTasks.addLearningGoal, userTasks.deleteLearningGoal, userTasks.goals, weekNotebook.title, weekplanner.addLearningGoal, weekplanner.addLearningGoalTitle, weekplanner.confirmRemoveLearningObjectives, weekplanner.copyPreviousWeekTaks, weekplanner.emptyLearningGoalErr, weekplanner.evaluation, weekplanner.evaluationDescription, weekplanner.learningGoal, weekplanner.logBook, weekplanner.nameCannotBeEmpty, weekplanner.nameMustNotBeEmpty, weekplanner.strategy, weekplanner.strategyAndEvaluation, weekplanner.strategyDescription, weekplanner.weekNumber, wysiwyg.bold, wysiwyg.code, wysiwyg.heading1, wysiwyg.heading2, wysiwyg.heading3, wysiwyg.image, wysiwyg.imagePromptMsg, wysiwyg.italic, wysiwyg.line, wysiwyg.link, wysiwyg.olist, wysiwyg.paragraph, wysiwyg.quote, wysiwyg.strikethrough, wysiwyg.ulist, wysiwyg.underline, teacherView.coursesViewTitle, teacherView.assignmentsViewTitle, teacherView.assignmentsViewDescription, teacherView.noUploadedAssignmentsForModule, teacherView.assignmentStudentName, teacherView.assignmentFileName, teacherView.assignmentSubmittedAt, teacherView.assignmentReport, teacherView.assignmentGrade, teacherView.noTaskAssignments, teacherView.notSubmittedAssignments, teacherView.remindBtn, teacherView.filterByStudygroupsPlaceholder, default */
/***/ (function(module) {

module.exports = {"addeditsubtask.addSubtask":"Lägg till underuppgift","addeditsubtask.deleteSubtask":"Ta bort underuppgift","addeditsubtask.editSubtask":"Redigera underuppgift","addeditsubtask.nameLabel":"Underuppgiftens namn","calendar.currentDate":"Vecka {week}, {year}","calendar.fullDayEventLocation":"Plats: {location}","calendar.loadCalendarEvents":"Load calendar events...","calendar.loadingCalendar":"Loading calendars... (listing...)","calendar.weekNumber":"V{weekNumber}","common.addDescriptionPlhd":"Lägg till en beskrivning...","common.cancel":"Avbryt","common.changesNotSavedErrorOccured":"För tillfället problem att spara data. Dina ändringar sparades inte.","common.changesNotSavedUnauthorized":"Ändringarna sparades inte p.g.a. otillräcklig behörighet.","common.descriptionLabel":"Beskrivning","common.errorSavingData":"Kunde inte spara.","common.linkLabel":"Länk","common.loading":"Laddar...","common.nameLabel":"Namn","common.save":" Spara","common.saved":" Sparad","common.saving":"Sparar...","common.remove":"Ta bort","customTask.addWorkGoalTitle":"Lägg till eget arbetsmål","customTask.enterNamePlhd":"Ange namn...","learningGoalsLost.overall":"Övergripande","task.addSubtask":"Lägg till underuppgift","task.editTask":"Redigera uppgift","task.editWorkGoals":"Redigera arbetsmål","task.enterTaskNamePlhd":"Ange uppgiftens namn...","task.removeDeadline":"Ta bort deadline","task.removeThisTask":"Ta bort den här uppgiften","task.removeWorkGoals":"Ta bort arbetsmål","task.setDeadline":"Set deadline","task.setDeadlineLabel":"Ange deadline...","task.subTasks":"Underuppgifter","task.targetNameLabel":"Arbetsmålets namn","task.taskNameLabel":"Uppgiftens namn","task.whatShouldYouDoPlhd":"Vad ska du göra?","taskList.nextWeekTask":"för nästa vecka (v{week})","taskList.lastWeekTask":"för förra veckan (v{week})","taskList.currentWeekTask":"för vecka {week}","taskList.removeTaskFromWeeklyPlanning":"Ta bort uppgiften från egen veckoplanering {week}","taskList.addTaskToWeeklyPlanning":"Lägg till uppgiften i egen veckoplanering {week}","termplanner.comments":"Kommentar","termplanner.course":"Kurs","termplanner.edsGoalGrades":"Terminsmål","termplanner.englishLanguage":"Eng","termplanner.swedishLanguage":"Sv/SvA","termplanner.finalStep":"Slutsteg","termplanner.firstTerm":"HT {year}","termplanner.hindiLanguage":"","termplanner.loadingTermplanner":"V.g. vänta medan terminsplaner laddas...","termplanner.modernLanguageFullname":"M.språk","termplanner.mathsFullname":"Matematik","termplanner.noFinalStepAvailable":"Inget slutsteg tillgängligt","termplanner.swedishLanguageFullName":"Svenska","termplanner.englishLanguageFullName":"Engelska","termplanner.maths":"Ma","termplanner.modernLanguage":"M.spr","termplanner.secondTerm":"VT {year}","termplanner.termPlanning":"Terminsplanering","termplanner.weekNumber":"Vecka","termplanner.chartsBoxTitle":"Min progression","tutorNoteDialog.weekComment":"Kommentar för vecka {weekNumber}","test.chooseComponentLabel":"Komponent","test.pageDescription":"Testsida för komponenter till nya startsidan","userTasks.addLearningGoal":"Eget arbetsmål","userTasks.deleteLearningGoal":"Ta bort lärandemålet och dess uppgifter","userTasks.goals":"Egna lärandemål","weekNotebook.title":"Anteckningar","weekplanner.addLearningGoal":"Mål:","weekplanner.addLearningGoalTitle":"Lägg till eget lärandemål","weekplanner.confirmRemoveLearningObjectives":"Ta bort lärandemål samt {learningGoalsNumber} uppgifter?","weekplanner.copyPreviousWeekTaks":"Kopiera ej klara från föregående vecka","weekplanner.emptyLearningGoalErr":"Lärandemålet kan inte vara tomt","weekplanner.evaluation":"Utvärdering","weekplanner.evaluationDescription":"Reflektion kring din arbetsinsats och dina valda strategier under veckan.Utvärdera i förhållande till dina mål.","weekplanner.learningGoal":"Eget lärandemål","weekplanner.logBook":"Loggbok","weekplanner.nameCannotBeEmpty":"Namnet kan inte vara tomt","weekplanner.nameMustNotBeEmpty":"Namnet får inte vara tomt","weekplanner.strategy":"Strategi","weekplanner.strategyAndEvaluation":"Strategi & Utvärdering","weekplanner.strategyDescription":"Hur jag ska göra för att lära mig.","weekplanner.weekNumber":"Vecka {weekNumber}","wysiwyg.bold":"Fetstil","wysiwyg.code":"Programkod","wysiwyg.heading1":"Rubrik 1","wysiwyg.heading2":"Rubrik 2","wysiwyg.heading3":"Rubrik 3","wysiwyg.image":"Infoga bild","wysiwyg.imagePromptMsg":"Ange bildens URL","wysiwyg.italic":"Kursiv","wysiwyg.line":"Vågrät linje","wysiwyg.link":"Infoga länk","wysiwyg.olist":"Ordnad lista","wysiwyg.paragraph":"Paragraf","wysiwyg.quote":"Citat","wysiwyg.strikethrough":"Struken","wysiwyg.ulist":"Punktlista","wysiwyg.underline":"Understruken","teacherView.coursesViewTitle":"Mina kurser/ uppgifter","teacherView.assignmentsViewTitle":"Inlämningsuppgifter","teacherView.assignmentsViewDescription":"Här listas samtliga inlämningsuppgifter i din/dina kurser du handleder. Klicka till höger för att välja kurs. Kursens uppgifter syns nedan. Du kan öppna/dölja varje modul.","teacherView.noUploadedAssignmentsForModule":"No assignments have been uploaded for this module","teacherView.assignmentStudentName":"Elev","teacherView.assignmentFileName":"Filnamn","teacherView.assignmentSubmittedAt":"Inlamnat","teacherView.assignmentReport":"Rapport","teacherView.assignmentGrade":"Niva","teacherView.noTaskAssignments":"Inga uppdrag uppladdade för denna uppgift","teacherView.notSubmittedAssignments":"Ej lämnat in","teacherView.remindBtn":"Påminn","teacherView.filterByStudygroupsPlaceholder":"Välj studiegrupp"};

/***/ }),

/***/ "./src/utils/query-string.ts":
/*!***********************************!*\
  !*** ./src/utils/query-string.ts ***!
  \***********************************/
/*! exports provided: parseQueryString, generateQueryString, parseHashQueryString, generateHashQueryString, splitUrlAndQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQueryString", function() { return parseQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateQueryString", function() { return generateQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseHashQueryString", function() { return parseHashQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateHashQueryString", function() { return generateHashQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitUrlAndQuery", function() { return splitUrlAndQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function parseQueryString(locationSearch, options) {
    var toLower = (options || {}).toLower;
    var result = {};
    if (locationSearch && locationSearch.length > 1)
        locationSearch.substr(1)
            .split('&')
            .map(function (part) { return part.split('=').map(function (s) { return decodeURIComponent(s.trim()); }); })
            .forEach(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), key = _b[0], value = _b[1];
            return result[toLower ? key.toLowerCase() : key] = value;
        });
    return result;
}
function encodeParams(params) {
    return Object.keys(params).filter(function (key) { return params[key] !== undefined; }).map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]); }).join('&');
}
function generateQueryString(params) {
    return "?" + encodeParams(params);
}
function parseHashQueryString(locationHash, options) {
    return parseQueryString(locationHash, options);
}
function generateHashQueryString(params) {
    return "#" + encodeParams(params);
}
function splitUrlAndQuery(urlWithPossibleQuery) {
    var pQuery = urlWithPossibleQuery.indexOf('?');
    return pQuery >= 0 ?
        [urlWithPossibleQuery.substr(0, pQuery), urlWithPossibleQuery.substr(pQuery)] :
        [urlWithPossibleQuery, ""];
}


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/*! exports provided: capitalizeFirst, extend, clone, flatten, compareProp, compareProps, L, TC, dateTimeReviver, showInfo, showError, maxLength, arrayToLookup, arrayToMap, cherryPickProps, distinct, shallowEquals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirst", function() { return capitalizeFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareProp", function() { return compareProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareProps", function() { return compareProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TC", function() { return TC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateTimeReviver", function() { return dateTimeReviver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showInfo", function() { return showInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showError", function() { return showError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return maxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayToLookup", function() { return arrayToLookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayToMap", function() { return arrayToMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cherryPickProps", function() { return cherryPickProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return distinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEquals", function() { return shallowEquals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function capitalizeFirst(str) {
    for (var i = 0, l = str.length; i < l; ++i) {
        if (str.charCodeAt(i) < 0x2000) {
            return str.substr(0, i) + str[i].toLocaleUpperCase() + str.substr(i + 1);
        }
    }
    return str;
}
function extend(obj, extension) {
    if (typeof extension !== 'object')
        return obj;
    Object.keys(extension).forEach(function (key) {
        obj[key] = extension[key];
    });
    return obj;
}
function clone(obj, extension) {
    var clone = {};
    Object.getOwnPropertyNames(obj).forEach(function (key) {
        Object.defineProperty(clone, key, Object.getOwnPropertyDescriptor(obj, key));
    });
    if (extension)
        extend(clone, extension);
    return clone;
}
var concat = [].concat;
function flatten(a) {
    return concat.apply([], a);
}
function compareProp(prop) {
    return function (a, b) {
        var aProp = a[prop], bProp = b[prop];
        return aProp > bProp ? 1 : aProp < bProp ? -1 : 0;
    };
}
function compareProps(props, locales, options) {
    props = Array.isArray(props) ? props : [props];
    var localeCompare = function (a, b) {
        return typeof a === 'string' ?
            a.localeCompare(b, locales, options) :
            a < b ? -1 : a > b ? 1 : 0;
    };
    function cmpPart(a, b, firstPart, rest) {
        var firstA = a[firstPart];
        var firstB = b[firstPart];
        if (firstA === firstB)
            return 0;
        if (firstA == null)
            return -1;
        if (firstB == null)
            return 1;
        return rest.length === 0 ?
            localeCompare(firstA, firstB) :
            cmpPart(firstA, firstB, rest[0], rest.slice(1));
    }
    return props
        .map(function (prop) { return prop.split('.'); })
        .map(function (_a) {
        var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a), firstPart = _b[0], rest = _b.slice(1);
        return function (a, b) { return cmpPart(a, b, firstPart, rest); };
    })
        .reduce(function (cmp1, cmp2) {
        return function (a, b) { return cmp1(a, b) || cmp2(a, b); };
    });
}
function L(text) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var first = text[0];
    return buildMessage(text, args);
}
function buildMessage(text, args) {
    var rv = text[0];
    for (var i = 1, l = text.length; i < l; ++i) {
        rv += args[i - 1] + text[i];
    }
    return rv;
}
var TC = /** @class */ (function () {
    function TC(template) {
        extend(this, template);
    }
    return TC;
}());

function dateTimeReviver(key, value) {
    var a;
    if (typeof value === 'string') {
        a = /\/Date\((\d*)\)\//.exec(value);
        if (a) {
            return new Date(+a[1]);
        }
    }
    return value;
}
//let infoSerial = 1;
function showInfo(msg) {
    var event = new CustomEvent('info', { 'detail': msg });
    window.dispatchEvent(event);
}
function showError(errMsg) {
    var msg = typeof errMsg === 'string' ? errMsg : errMsg.message;
    var event = new CustomEvent('customerror', { 'detail': msg });
    console.error(errMsg);
    window.dispatchEvent(event);
}
function maxLength(str, maxLen) {
    return str.length > maxLen ?
        str.substr(0, maxLen - 3) + "..." :
        str;
}
function arrayToLookup(a, keyAccessor) {
    var result = {};
    for (var i = 0, l = a.length; i < l; ++i) {
        var item = a[i];
        var key = keyAccessor(item);
        var array = result[key];
        if (array)
            array.push(item);
        else
            result[key] = [item];
    }
    return result;
}
function arrayToMap(a, keyAccessor) {
    var result = {};
    for (var i = 0, l = a.length; i < l; ++i) {
        var item = a[i];
        var key = keyAccessor(item);
        result[key] = item;
    }
    return result;
}
function cherryPickProps(obj, propsToPick) {
    var e_1, _a;
    var result = {};
    try {
        for (var propsToPick_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](propsToPick), propsToPick_1_1 = propsToPick_1.next(); !propsToPick_1_1.done; propsToPick_1_1 = propsToPick_1.next()) {
            var param = propsToPick_1_1.value;
            if (param in obj)
                result[param] = obj[param];
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (propsToPick_1_1 && !propsToPick_1_1.done && (_a = propsToPick_1.return)) _a.call(propsToPick_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
function distinct(a, keyAccessor) {
    var map = arrayToMap(a, keyAccessor || (function (x) { return x; }));
    return Object.keys(map).map(function (key) { return map[key]; });
}
function shallowEquals(a, b) {
    if (a === b)
        return true;
    if (!a || !b)
        return false;
    if (typeof a !== 'object' || typeof b !== 'object')
        return false;
    var keysA = Object.keys(a);
    var keysB = Object.keys(b);
    if (keysA.length !== keysB.length)
        return false;
    for (var i = 0, l = keysA.length; i < l; ++i) {
        var key = keysA[i];
        if (keysB[i] !== key)
            return false;
        if (a[key] !== b[key])
            return false;
    }
    return true;
}


/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** ../locale-data/index.js (ignored) ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLWNsaWVudC9hY2Nlc3MtY29udHJvbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtY2xpZW50L2h0dHAtZXJyb3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLWNsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtY2xpZW50L2tlZC1iZWFyZXItcHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLWNsaWVudC9yZXN0Y2xpZW50LmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvanMvZGlzdC9qcy9rZWQtYmFja2VuZC1jbGllbnQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLXJlcG8vY2FjaGUtYnVzdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtcmVwby9kZWx0YS1jb2xsZWN0aW9uL2FwcGx5LW11dGF0aW9ucy1vbi1kZWx0YXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLXJlcG8vZGVsdGEtY29sbGVjdGlvbi9kZWx0YS1jYWNoZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtcmVwby9kZWx0YS1jb2xsZWN0aW9uL2RlbHRhLWNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLXJlcG8vZGVsdGEtbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLXJlcG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLXJlcG8va2VkYmFja2VuZC1jb2xsZWN0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvanMvZGlzdC9qcy9rZWQtYmFja2VuZC1yZXBvL2tlZGJhY2tlbmQtcXVlcnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLXJlcG8va2VkYmFja2VuZC1yZXBvLmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvanMvZGlzdC9qcy9rZWQtYmFja2VuZC1yZXBvL2tlZGJhY2tlbmQtc3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvanMvZGlzdC9qcy9rZWQtYmFja2VuZC1yZXBvL2tlZGJhY2tlbmQtd3JpdGVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvanMvZGlzdC9qcy9rZWQtYmFja2VuZC1yZXBvL211dGF0aW9uLXF1ZXVlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvanMvZGlzdC9qcy9rZWQtYmFja2VuZC1yZXBvL3F1ZXJ5LXNldC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtcmVwby91dGlscy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMvb2JzZXJ2YWJsZS9jb2xsZWN0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvanMvZGlzdC9qcy9vYnNlcnZhYmxlL2VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL29ic2VydmFibGUvZmliZXItY29udGV4dC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMvb2JzZXJ2YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMvb2JzZXJ2YWJsZS9tYXAuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL29ic2VydmFibGUvbWl4aW4uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL29ic2VydmFibGUvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMvb2JzZXJ2YWJsZS92YWx1ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL29ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9yZXBvLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgc3Z8ZW4iLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2FjY2Vzcy1jb250cm9sL2dldC11c2VyLWNsYWltcy50cyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvYWNjZXNzLWNvbnRyb2wvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2FwaXMvbW9jay9tb2NrLWNsYXNzcm9vbS1kYXRhLnRzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL2NoYXJ0cy9nb2FsLXByb2dyZXNzLnRzeCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy9jb3Vyc2UtYnVpbGRlci1rcy9jb21tb24vdHdvLWNvbHVtbnMtcGFnZS50c3giLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvY291cnNlLWJ1aWxkZXIvc3ViLWNvbXBvbmVudHMvZWxsaXBzaXMtbG9hZGVyLnRzeCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy9jb3Vyc2UtYnVpbGRlci9zdWItY29tcG9uZW50cy9zZWxlY3Qtc3R1ZHktZ3JvdXBzLnRzeCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy9jb3Vyc2UtYnVpbGRlci9zdWItY29tcG9uZW50cy9zcGlubmVyLnRzeCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy9jb3Vyc2Utdmlld2VyL2NvdXJzZS1wYWdlL3Rhc2stYXNzaWdubWVudHMtdXRpbHMudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL2NvdXJzZS12aWV3ZXIvY291cnNlLXBhZ2UvdXJrdW5kLXV0aWxzLnRzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL3RlYWNoZXItdmlldy9hc3NpZ25tZW50cy12aWV3L2NvdXJzZS1tb2R1bGUudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL3RlYWNoZXItdmlldy9hc3NpZ25tZW50cy12aWV3L2NvdXJzZS10YXNrLW5vdC1oYW5kZWQtdXNlcnMudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL3RlYWNoZXItdmlldy9hc3NpZ25tZW50cy12aWV3L2NvdXJzZS10YXNrLnRzeCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy90ZWFjaGVyLXZpZXcvYXNzaWdubWVudHMtdmlldy9jb3Vyc2UtdGFza3MtYXNzaWdubWVudHMudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL3RlYWNoZXItdmlldy9hc3NpZ25tZW50cy12aWV3L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy90ZWFjaGVyLXZpZXcvYXNzaWdubWVudHMtdmlldy90YXNrLWFzc2lnbm1lbnQudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL3RlYWNoZXItdmlldy9jb3Vyc2VzLXZpZXcvaW5kZXgudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL3RlYWNoZXItdmlldy9kaWdlc3Qtdmlldy50c3giLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvdGVhY2hlci12aWV3L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy90ZWFjaGVyLXZpZXcvc2hhcmVkL25vdGlmaWNhdGlvbi1pY29uLnRzeCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy91dGlsaXR5LWNvbXBvbmVudHMvTGFuZ3VhZ2VDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy91dGlsaXR5LWNvbXBvbmVudHMvU2V0dXBMYW5ndWFnZUludGwudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL3V0aWxpdHktY29tcG9uZW50cy9vYnNlcnZlLnRzeCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy91dGlsaXR5LWNvbXBvbmVudHMvb3Blbi1jbG9zZS1ib3gudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9lbGVtZW50cy9LRURBcHBUZWFjaGVyVmlldy9hcHAudGVhY2hlcnZpZXcuY2xpZW50LnRzeCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZWxlbWVudHMvS0VEQXBwVGVhY2hlclZpZXcvd2VicGFjay1lbnRyeS50cyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZ2xvYmFscy9LRUQuY2ZnLnRzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9nbG9iYWxzL0tFRC5lbnYudHMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2dsb2JhbHMvS0VELnRzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9nbG9iYWxzL2RiLnRzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9nbG9iYWxzL2tlZC50cyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvdXRpbHMvcXVlcnktc3RyaW5nLnRzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy91dGlscy91dGlscy50cyIsIndlYnBhY2s6Ly9bbmFtZV0vLi4vbG9jYWxlLWRhdGEvaW5kZXguanMgKGlnbm9yZWQpIiwid2VicGFjazovL1tuYW1lXS8uL2xpYi9sb2NhbGVzIChpZ25vcmVkKSIsIndlYnBhY2s6Ly9bbmFtZV0vLi9saWIvbG9jYWxlcyAoaWdub3JlZCk/OTBkMCIsIndlYnBhY2s6Ly9bbmFtZV0vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovL1tuYW1lXS9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0NBQXNDLEVBQUU7QUFDeEUsbUNBQW1DLFdBQVcsRUFBRTtBQUNoRDtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQixFQUFFO0FBQzlEO0FBQ0E7QUFDQSxDQUFDO0FBQ3lCO0FBQ25CO0FBQ1AsMENBQTBDLHlEQUF5RCxFQUFFO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLDBDOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQWlDO0FBQ2pDO0FBQ0EsSUFBSSwrQ0FBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNvQjtBQUNyQixzQzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBQWlDO0FBQ1M7QUFDbEI7QUFDa0M7QUFDekI7QUFDWDtBQUNtQjtBQUNwQjtBQUNRO0FBQzdCO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQVUsdUJBQXVCLGlDQUFpQztBQUMxRjtBQUNBO0FBQ0EsZUFBZSwrQ0FBaUI7QUFDaEM7QUFDQSxtQkFBbUIsaURBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscURBQVM7QUFDdEM7QUFDQTtBQUNBLGdEQUFnRCxxREFBUztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxlQUFlLCtDQUFpQjtBQUNoQztBQUNBLG1CQUFtQixpREFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixxREFBUztBQUN0QztBQUNBO0FBQ0EsZ0RBQWdELHFEQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLGVBQWUsK0NBQWlCO0FBQ2hDO0FBQ0EsbUJBQW1CLGlEQUFtQjtBQUN0QztBQUNBO0FBQ0EsZ0NBQWdDLDhDQUFnQixHQUFHO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixxREFBUztBQUN0QztBQUNBO0FBQ0EsZ0RBQWdELHFEQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLGVBQWUsK0NBQWlCO0FBQ2hDO0FBQ0EsbUJBQW1CLGlEQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscURBQVM7QUFDdEM7QUFDQTtBQUNBLGdEQUFnRCxxREFBUztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxlQUFlLCtDQUFpQjtBQUNoQztBQUNBLG1CQUFtQixpREFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxlQUFlLCtDQUFpQjtBQUNoQztBQUNBLG1CQUFtQixpREFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixxREFBUztBQUN0QztBQUNBO0FBQ0EsZ0RBQWdELHFEQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLHFDQUFxQywwQkFBMEIsRUFBRTtBQUNqRTtBQUNBO0FBQ0EscUNBQXFDLDBCQUEwQixFQUFFO0FBQ2pFO0FBQ0E7QUFDQSxxQ0FBcUMsZ0RBQWdELEVBQUU7QUFDdkY7QUFDQTtBQUNBLHFDQUFxQywwQ0FBMEMsRUFBRTtBQUNqRjtBQUNBO0FBQ0EscUNBQXFDLGdDQUFnQyxFQUFFO0FBQ3ZFO0FBQ0E7QUFDQSxxQ0FBcUMsNEJBQTRCLEVBQUU7QUFDbkU7QUFDQTtBQUNBLHFDQUFxQyxnQ0FBZ0MsRUFBRTtBQUN2RTtBQUNBO0FBQ0EscUNBQXFDLGtDQUFrQyxFQUFFO0FBQ3pFO0FBQ0E7QUFDQSxxQ0FBcUMsb0VBQW9FLEVBQUU7QUFDM0c7QUFDQTtBQUNBLHFDQUFxQyxrRUFBa0UsRUFBRTtBQUN6RztBQUNBO0FBQ0EscUNBQXFDLHNFQUFzRSxFQUFFO0FBQzdHO0FBQ0E7QUFDQSxxQ0FBcUMsb0VBQW9FLEVBQUU7QUFDM0c7QUFDQTtBQUNBLHFDQUFxQyxxRUFBcUUsRUFBRTtBQUM1RztBQUNBO0FBQ0EsQ0FBQztBQUMyQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHdEQUF3RDtBQUM1RjtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhDQUFnQixHQUFHO0FBQ2pDLHVCQUF1QjtBQUN2QixvQ0FBb0Msb0NBQW9DO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBZ0IsR0FBRztBQUN0QyxvQ0FBb0MsNkVBQTZFO0FBQ2pIO0FBQ0E7QUFDQSxvQ0FBb0Msa0VBQWtFO0FBQ3RHO0FBQ0E7QUFDQSxvQ0FBb0MseUNBQXlDO0FBQzdFO0FBQ0E7QUFDQSxvQ0FBb0MscUNBQXFDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw4Q0FBOEM7QUFDbEY7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdEQUFnRDtBQUNwRjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsdUhBQXVIO0FBQzNKO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpSEFBaUg7QUFDcko7QUFDQTtBQUNBLG9DQUFvQyx5SEFBeUg7QUFDN0o7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1IQUFtSDtBQUN2SjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msc0hBQXNIO0FBQzFKO0FBQ0E7QUFDQSxDQUFDO0FBQ3NCO0FBQ3ZCLGlDOzs7Ozs7Ozs7Ozs7QUM1T0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUNTO0FBQ007QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLDBCQUEwQixzREFBVTtBQUNwQztBQUNBO0FBQ0EsU0FBUztBQUNULHlCQUF5QixvRUFBcUI7QUFDOUMsNkJBQTZCLG9FQUFxQjtBQUNsRDtBQUNBO0FBQ0EsZUFBZSwrQ0FBaUI7QUFDaEM7QUFDQSxtQkFBbUIsaURBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxlQUFlLCtDQUFpQjtBQUNoQztBQUNBLG1CQUFtQixpREFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RkFBOEYsa0JBQWtCO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUM0QjtBQUM3QiwrQzs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG1CQUFtQjs7O0FBR25CO0FBQ0E7QUFDQTtBQUNBO0FBQ2lDO0FBQ0k7QUFDVztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkRBQU87QUFDbEMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZUFBZSwrQ0FBaUI7QUFDaEM7QUFDQSxtQkFBbUIsaURBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsOENBQWdCLEdBQUcsVUFBVSxVQUFVLHlEQUFVLElBQUk7QUFDekY7QUFDQSxzRkFBc0YsaUNBQWlDLEVBQUU7QUFDekg7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsOENBQWdCLEdBQUcsc0JBQXNCLG1DQUFtQztBQUNwSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLDhDQUFnQixHQUFHLHNCQUFzQixtQ0FBbUM7QUFDcEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLHdDQUF3QywyQkFBMkIsY0FBYztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxRQUFRLDhDQUFnQixHQUFHLGlCQUFpQiw2QkFBNkI7QUFDbEY7QUFDQTtBQUNBLDJDQUEyQywyQkFBMkIsY0FBYyxTQUFTLDhDQUFnQixHQUFHLGlCQUFpQixhQUFhO0FBQzlJO0FBQ0E7QUFDQSxDQUFDO0FBQ3FCO0FBQ3RCLHNDOzs7Ozs7Ozs7Ozs7QUM5SEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlDO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxXQUFXLCtDQUFpQjtBQUM1QjtBQUNBLGVBQWUsaURBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDTztBQUNQLFdBQVcsK0NBQWlCO0FBQzVCO0FBQ0EsZUFBZSxpREFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ087QUFDUCwwREFBMEQsMENBQTBDLEVBQUU7QUFDdEc7QUFDTztBQUNQO0FBQ0EsaUNBQWlDLE9BQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7O0FDakhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEQ7QUFDaEI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdFQUFnRSxFQUFFO0FBQ3BHLHNDQUFzQyxnQkFBZ0IsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsZ0JBQWdCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFFBQVEsb0VBQWlCLDZCQUE2QixFQUFFO0FBQzNGLHNDQUFzQyxnQkFBZ0IsRUFBRTtBQUN4RDtBQUNBO0FBQ0Esc0VBQXNFLFlBQVksRUFBRTtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0VBQWlCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ29CO0FBQ3JCLHNDOzs7Ozs7Ozs7Ozs7QUN6REE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDWTtBQUN0QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw4Q0FBZ0IsR0FBRyxrQkFBa0IsK0NBQStDO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnRUFBVyxxQ0FBcUMseUJBQXlCO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx5QkFBeUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRDs7Ozs7Ozs7Ozs7O0FDL0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDb0I7QUFDZ0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxvQkFBb0I7QUFDL0Q7QUFDQSx1REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix5RkFBc0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsaURBQWlEO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDcUI7QUFDdEI7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGdDQUFnQyxFQUFFLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxlQUFlLCtDQUFpQjtBQUNoQztBQUNBLG1CQUFtQixpREFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2REFBUztBQUN0QztBQUNBO0FBQ0EsZ0RBQWdELDZEQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLCtDQUErQyxnQkFBZ0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsb0JBQW9CO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsdUM7Ozs7Ozs7Ozs7OztBQzlKQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUNhO0FBQzlDO0FBQ0EsSUFBSSwrQ0FBaUI7QUFDckI7QUFDQSwyREFBMkQsb0RBQW9ELEVBQUU7QUFDakg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0Esb0RBQW9ELDhDQUFnQixHQUFHLGVBQWUsYUFBYTtBQUNuRztBQUNBO0FBQ0EsQ0FBQyxDQUFDLHNEQUFVO0FBQ2U7QUFDM0IsNEM7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUMxQjtBQUNQO0FBQ0E7QUFDQSxtQ0FBbUMsb0JBQW9CO0FBQ3ZEO0FBQ0E7QUFDQSx3QkFBd0IsOENBQWdCLEdBQUc7QUFDM0M7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDRCQUE0QixFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBLHlFQUF5RSwyQkFBMkI7QUFDcEc7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSxzQ0FBc0MsRUFBRTtBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxnQ0FBZ0M7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxPQUFPO0FBQzNCLElBQUksT0FBTyxhQUFhLEdBQUcsT0FBTyxTQUFTO0FBQ3BDO0FBQ1AsNkNBQTZDLDBCQUEwQjtBQUN2RSxjQUFjO0FBQ2Q7QUFDQSxzQkFBc0IsOENBQWdCLEdBQUc7QUFDekMsbUNBQW1DLG9CQUFvQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw0QkFBNEIsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RkFBOEY7QUFDOUYsK0VBQStFO0FBQy9FLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsOENBQWdCLEdBQUc7QUFDakY7QUFDQSx5RUFBeUU7QUFDekUsNEZBQTRGLFlBQVk7QUFDeEc7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLG1DQUFtQyxFQUFFO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsOENBQWdCLEdBQUc7QUFDakY7QUFDQSx5RUFBeUU7QUFDekUsNEZBQTRGLGVBQWU7QUFDM0c7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLHNDQUFzQyxFQUFFO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLGdDQUFnQztBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDOzs7Ozs7Ozs7Ozs7QUM5SkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFDTDtBQUNEO0FBQ1E7QUFDTjtBQUNIO0FBQ0w7QUFDUTtBQUNwQyxpQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUNtQjtBQUNlO0FBQzFCO0FBQ1k7QUFDQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQWlCO0FBQ3JCO0FBQ0E7QUFDQSxtQ0FBbUMsK0VBQXNCO0FBQ3pEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUVBQWU7QUFDbEMsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwrREFBK0QsOENBQWdCLEdBQUc7QUFDbEY7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxjQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JEO0FBQ0E7QUFDQSxnQ0FBZ0MsYUFBYTtBQUM3QztBQUNBO0FBQ0Esd0RBQXdELFlBQVksRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELFlBQVksRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QyxpQ0FBaUMsK0VBQStFLEVBQUU7QUFDbEgsaUNBQWlDLDBFQUEwRSxFQUFFO0FBQzdHLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZ0NBQWdDLFdBQVc7QUFDM0M7QUFDQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxZQUFZLHFEQUFTLDJFQUEyRTtBQUNoSTtBQUNBO0FBQ0EscUJBQXFCLCtEQUFXO0FBQ2hDO0FBQ0EsZ0NBQWdDLHdDQUF3QztBQUN4RTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRUFBRSxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyxpRUFBVTtBQUNvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsaUQ7Ozs7Ozs7Ozs7OztBQ3pOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDeUI7QUFDRztBQUNsQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLDRDQUFjO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsK0NBQWlCO0FBQ2hDO0FBQ0EsbUJBQW1CLGlEQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZUFBZSwrQ0FBaUI7QUFDaEM7QUFDQTtBQUNBLG1CQUFtQixpREFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLGVBQWUsK0NBQWlCO0FBQ2hDLG1CQUFtQixpREFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxxRUFBcUUsMkJBQTJCLEVBQUU7QUFDbEc7QUFDQTtBQUNBLGVBQWUsK0NBQWlCO0FBQ2hDO0FBQ0EsbUJBQW1CLGlEQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxlQUFlLCtDQUFpQjtBQUNoQyxtQkFBbUIsaURBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0NBQWlCO0FBQ2hDO0FBQ0EsbUJBQW1CLGlEQUFtQjtBQUN0QztBQUNBLHdGQUF3Riw4Q0FBZ0IsR0FBRztBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2RUFBVztBQUNsQztBQUNBO0FBQ0EseUNBQXlDLCtEQUFVO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDZFQUFXO0FBQzFEO0FBQ0E7QUFDQSxxREFBcUQsK0RBQVU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0Esc0NBQXNDLDhDQUFnQixHQUFHLGVBQWU7QUFDeEU7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RSwwRUFBMEUsb0NBQW9DLEVBQUU7QUFDaEgsd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkVBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDhDQUFnQixHQUFHO0FBQzVEO0FBQ0E7QUFDQSwrQkFBK0IsOENBQWdCLEdBQUcsZUFBZTtBQUNqRSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGdFQUFpQjtBQUN2RDtBQUNBO0FBQ0Esd0ZBQXdGLHdDQUF3QyxFQUFFO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsK0JBQStCLEVBQUU7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2RUFBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsOENBQWdCLEdBQUcsZUFBZTtBQUNqRTtBQUNBLDJEQUEyRDtBQUMzRCxvQ0FBb0MsOENBQWdCLEdBQUcsTUFBTSxvQkFBb0IsRUFBRSxFQUFFO0FBQ3JGO0FBQ0EsOERBQThELGlDQUFpQyxFQUFFO0FBQ2pHLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxtQ0FBbUMsOENBQWdCLEdBQUcsTUFBTSxvQkFBb0IsTUFBTSxFQUFFO0FBQzNJLHNEQUFzRCxpQ0FBaUMsRUFBRTtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxzQkFBc0IsRUFBRTtBQUM3RTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsVUFBVSxzQkFBc0IsZ0VBQWlCLGdCQUFnQixFQUFFLEVBQUU7QUFDcEg7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsK0JBQStCLDZFQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsOENBQWdCLEdBQUcsZUFBZTtBQUM1RSxzRUFBc0Usd0JBQXdCLDhDQUFnQixHQUFHLE1BQU0sb0JBQW9CLE1BQU0sRUFBRTtBQUNuSjtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBZ0IsR0FBRztBQUN0QyxnREFBZ0Qsd0NBQXdDLEVBQUU7QUFDMUY7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUMwQjtBQUMzQiw0Qzs7Ozs7Ozs7Ozs7O0FDdlpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlDO0FBQ3NCO0FBQ1E7QUFDeEI7QUFDVTtBQUNNO0FBQ2U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw2REFBYTtBQUNsRDtBQUNBLGdDQUFnQyxtREFBUTtBQUN4QztBQUNBLDhCQUE4QixtRUFBZ0I7QUFDOUMsb0JBQW9CLG9FQUFNO0FBQzFCLGlDQUFpQywyRUFBb0Isd0NBQXdDO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDBCQUEwQixrRkFBZTtBQUN6QztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNkJBQTZCLDJFQUFvQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGLDhDQUFnQixHQUFHO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBLDRCQUE0QixhQUFhO0FBQ3pDO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0VBQWtFO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDJGQUEyRjtBQUN4SDtBQUNBO0FBQ0EsZUFBZSwrQ0FBaUI7QUFDaEMsbUJBQW1CLGlEQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ3lCO0FBQzFCLDJDOzs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNpQztBQUNsQyxtRDs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlDO0FBQ2dCO0FBQ0c7QUFDRztBQUNkO0FBQ0Q7QUFDb0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbURBQU87QUFDM0M7QUFDQTtBQUNBLDhCQUE4Qix3RUFBVTtBQUN4QztBQUNBO0FBQ0EsMEJBQTBCLGdDQUFnQyxFQUFFO0FBQzVEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsNENBQTRDLEVBQUU7QUFDeEU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSx1QkFBdUIsRUFBRTtBQUNwRywyRUFBMkUsdUJBQXVCLEVBQUU7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsbUJBQW1CO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0NBQWlCO0FBQ2hDO0FBQ0EsbUJBQW1CLGlEQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLHVHQUF1RyxvQ0FBb0MsRUFBRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEVBQUUsb0JBQW9CLHNDQUFzQyxFQUFFO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0NBQWlCO0FBQ2hDO0FBQ0EsbUJBQW1CLGlEQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsNEJBQTRCO0FBQ25FO0FBQ0EseUJBQXlCLEVBQUUsRUFBRTtBQUM3QjtBQUNBLHdCQUF3QixxREFBUztBQUNqQztBQUNBO0FBQ0EsbUVBQW1FLG9CQUFvQjtBQUN2RiwyRUFBMkUsNkRBQWE7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsK0RBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvRUFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQzJCO0FBQzVCLDZDOzs7Ozs7Ozs7Ozs7QUM5TkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUNzQztBQUMzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLG9EQUFvRCxFQUFFO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxRQUFRLHVEQUFRLFNBQVMsOERBQWU7QUFDeEYseUNBQXlDLEVBQUU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsUUFBUSxnRUFBaUIsMkJBQTJCLEVBQUU7QUFDaEksb0JBQW9CLHVEQUFRO0FBQzVCO0FBQ0EsdUhBQXVILFFBQVEsZ0VBQWlCLGVBQWUsRUFBRSwwQkFBMEIsUUFBUSxnRUFBaUIsaUNBQWlDLEVBQUU7QUFDdlAsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsdUNBQXVDLDhDQUFnQixHQUFHLE1BQU0sV0FBVyxnRUFBVywwREFBMEQ7QUFDaEo7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUN3QjtBQUN6QiwwQzs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlDO0FBQ29CO0FBQ087QUFDdkI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrQ0FBaUI7QUFDaEMsbUJBQW1CLGlEQUFtQjtBQUN0QztBQUNBLDRGQUE0Riw4Q0FBOEMsRUFBRTtBQUM1STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLCtDQUErQyx1QkFBdUIsaUVBQWUsd0JBQXdCLEVBQUU7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxtRUFBbUUsRUFBRTtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0EseURBQXlELFFBQVEsb0VBQWlCLHdDQUF3QyxFQUFFO0FBQzVIO0FBQ0E7QUFDQSxpREFBaUQsZ0JBQWdCO0FBQ2pFO0FBQ0Esc0NBQXNDLHlEQUFVO0FBQ2hELHNEQUFzRCx3QkFBd0IsRUFBRTtBQUNoRjtBQUNBLHlFQUF5RSxrQkFBa0IsRUFBRTtBQUM3RjtBQUNBLHdEQUF3RCxvQ0FBb0Msb0JBQW9CLEVBQUUsRUFBRSxFQUFFO0FBQ3RIO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxrREFBa0Qsa0NBQWtDLEVBQUU7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix5REFBVTtBQUN6QztBQUNBLG9EQUFvRCxvQ0FBb0Msb0JBQW9CLEVBQUUsRUFBRSxFQUFFO0FBQ2xIO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlFQUFlO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLHNCQUFzQixFQUFFO0FBQ25HO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNtQjtBQUNwQixxQzs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RDtBQUNoRDtBQUNQLFdBQVcsb0VBQU07QUFDakI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1AseUJBQXlCLGlDQUFpQztBQUMxRDtBQUNPO0FBQ1AsK0JBQStCLGFBQWE7QUFDNUM7QUFDQSx5Q0FBeUMsaUNBQWlDLEVBQUU7QUFDNUU7QUFDQSx5Q0FBeUMsOEJBQThCLEVBQUU7QUFDekU7QUFDQSx5Q0FBeUMsaUNBQWlDLEVBQUU7QUFDNUU7QUFDQSx5Q0FBeUMsOEJBQThCLEVBQUU7QUFDekU7QUFDQSx5Q0FBeUMsbUVBQW1FLDZCQUE2QixFQUFFLEVBQUUsRUFBRTtBQUMvSTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlDO0FBQ1M7QUFDSjtBQUNOO0FBQ0k7QUFDcEM7QUFDQSxJQUFJLCtDQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHVCQUF1QixFQUFFO0FBQ3pFO0FBQ0EsZ0NBQWdDLGdEQUFPO0FBQ3ZDLGdEQUFnRCwrQkFBK0IsRUFBRTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtQ0FBbUMscUJBQXFCLEVBQUUsRUFBRSxFQUFFO0FBQ3pHO0FBQ0E7QUFDQSwyQ0FBMkMsbUNBQW1DLEVBQUU7QUFDaEY7QUFDQTtBQUNBLDJDQUEyQyw2QkFBNkIsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFLEVBQUUsNkJBQTZCLFVBQVUsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNENBQUssZUFBZSwyQkFBMkIsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0RBQWtELGVBQWUsRUFBRTtBQUNuRTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLHNEQUFVO0FBQ1U7QUFDdEIsNEJBQTRCLDBEQUFhO0FBQ3pDLHNDOzs7Ozs7Ozs7Ozs7QUNqRUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFDRDtBQUNoQztBQUNBLElBQUksK0NBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsaUJBQWlCLEVBQUUsRUFBRTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDLENBQUMsNENBQUs7QUFDWTtBQUNuQixtQzs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsOEJBQThCLHFCQUFxQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxtQkFBbUIscUJBQXFCLEVBQUU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbURBQW1ELDhCQUE4QixFQUFFO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MscUJBQXFCLG1CQUFtQixHQUFHLEVBQUU7QUFDNUYsMEJBQTBCLG9FQUFvRTtBQUM5RixLQUFLO0FBQ0w7QUFDQSx5Qzs7Ozs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZCO0FBQ0w7QUFDSztBQUNIO0FBQ007QUFDaEMsaUM7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFLEVBQUU7QUFDYjtBQUNBO0FBQ0EsK0I7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQU87QUFDUDtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBLG1DQUFtQyw2Q0FBNkMsRUFBRTtBQUNsRjtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFDQSxxQ0FBcUMsYUFBYTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLG1DQUFtQywyQkFBMkIsRUFBRSxFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDcUI7QUFDdEIsc0M7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUNTO0FBQ0o7QUFDSTtBQUNLO0FBQy9DO0FBQ0EsSUFBSSwrQ0FBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1QkFBdUIsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwrQkFBK0IsMkRBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUUsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFVLGVBQWUsdUNBQXVDLEVBQUU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUMsQ0FBQyxzREFBVTtBQUNLO0FBQ2pCLHNCQUFzQiwwREFBYTtBQUNuQyxpQzs7Ozs7Ozs7Ozs7O0FDaktBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3Qzs7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEM7Ozs7Ozs7Ozs7OztBQ0E5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBZSxTQUFTLGFBQWEsQ0FBRSxJQUFVO0lBQy9DLE9BQU8sQ0FBQztZQUNOLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2pCLEVBQUM7WUFDQSxJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNuQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQUksSUFBSSxRQUFDO1FBQ2hDLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDLEVBSCtCLENBRy9CLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFJLElBQUksUUFBQztRQUNsQyxJQUFJLEVBQUUsWUFBWTtRQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSTtLQUNoQyxDQUFDLEVBSGlDLENBR2pDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCcUc7QUFFeEQ7QUFDZ0M7QUFFckQ7QUFFbEIsSUFBTSwwQkFBMEIsR0FBRztJQUN4QyxNQUFNO0lBQ04sTUFBTTtJQUNOLFFBQVE7SUFDUixPQUFPO0lBQ1AsYUFBYTtJQUNiLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7Q0FBQyxDQUFDO0FBRVQsU0FBUyxTQUFTLENBQUMsSUFBVSxFQUFFLEdBQWEsRUFBRSxjQUEyQjtJQUM5RSxJQUFJLE1BQU0sR0FBRyxnRUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLElBQUksY0FBYyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQzNDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQUssSUFBSSxZQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0tBQ3pEO0lBQ0QsSUFBSSxNQUFNLEdBQUcsbUVBQVUsQ0FBQyxnRUFBYyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUMvRixrRkFBa0Y7SUFDbEYsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVNLFNBQVMsYUFBYSxDQUFDLElBQVUsRUFBRSxHQUFhO0lBQ3JELE9BQU8sU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVNLFNBQVMsY0FBYyxDQUFDLElBQVUsRUFBRSxHQUFhO0lBQ3RELE9BQU8sU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVNLFNBQVMsY0FBYyxDQUFDLElBQVUsRUFBRSxHQUFhO0lBQ3RELE9BQU8sU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVNLFNBQVMsaUJBQWlCLENBQUMsSUFBVSxFQUFFLE1BQWM7SUFDMUQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBSSxJQUFJLFdBQUksS0FBSyxVQUFVLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDO0lBQ25GLElBQU0sZUFBZSxHQUFHLENBQUMsTUFBTSxJQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakYsT0FBTyxDQUFDLFNBQVMsSUFBSSxlQUFlLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRU0sU0FBUyx3QkFBd0IsQ0FBQyxJQUFVLEVBQUUsTUFBYztJQUNqRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBRU0sSUFBTSxnQkFBZ0IsR0FBRztJQUM5QixLQUFLLEVBQUwsVUFBTyxPQUE2QjtRQUMzQix1QkFBSSxFQUFFLHVCQUFNLEVBQUUsaUJBQUcsQ0FBWTtRQUNwQyxJQUFNLFlBQVksR0FBRyw0RUFBZ0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBTSxRQUFRLEdBQUcsbURBQUksWUFBWSxJQUFFLElBQUksUUFBRSxNQUFNLFdBQUMsQ0FBQztRQUNqRCxJQUFNLGNBQWMsR0FBRywrRUFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLEdBQUcsRUFBRTtZQUNQLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBRyxHQUFHLEdBQUcsY0FBZ0IsQ0FBQztTQUMzQzthQUFNO1lBQ0wsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDcEIsUUFBUSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7U0FDbEM7SUFDSCxDQUFDO0NBQ0Y7QUFFTSxTQUFTLEtBQUssQ0FBQyxPQUE2QjtJQUNqRCxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVNLFNBQVMsMEJBQTBCLENBQUUsR0FBVyxFQUFFLEtBQWdDOztJQUN2RixJQUFNLFlBQVksR0FBRyw0RUFBZ0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkQsSUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDOztRQUMxQixLQUFvQiw0R0FBMEIscUxBQUU7WUFBM0MsSUFBTSxLQUFLO1lBQ2QsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEU7Ozs7Ozs7OztJQUNELElBQU0sY0FBYyxHQUFHLCtFQUFtQixDQUFDLG1EQUFJLGNBQWMsRUFBSyxLQUFLLEVBQUUsQ0FBQztJQUMxRSxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLEtBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEdBQUcsY0FBYyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFHLENBQUMsQ0FBQztRQUMvRCxLQUFHLEdBQUcsR0FBRyxjQUFnQixDQUFDO0FBQzlCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3RUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFNLGNBQWMsR0FBRyxVQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNqQyxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1osVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsS0FBSztZQUN2QixnQkFBZ0IsRUFBRSxVQUFVLEdBQUcsQ0FBQztZQUNoQyxlQUFlLEVBQUUsV0FBVztZQUM1QixtQkFBbUIsRUFBRSxTQUFTLEdBQUcsQ0FBQyxHQUFHLDJCQUEyQjtTQUVqRSxDQUFDLENBQUM7S0FDSjtJQUNELFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDWixVQUFVLEVBQUUsS0FBSztRQUNmLGdCQUFnQixFQUFFLEtBQUs7UUFDdkIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixlQUFlLEVBQUUsV0FBVztRQUM1QixtQkFBbUIsRUFBRSw2QkFBNkI7S0FDckQsQ0FBQztJQUNGLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFFTSxJQUFNLFlBQVksR0FBaUI7SUFDeEM7UUFDRSxVQUFVLEVBQUUsS0FBSztRQUNqQixnQkFBZ0IsRUFBRSxXQUFXO1FBQzdCLGVBQWUsRUFBRSxXQUFXO1FBQzVCLG1CQUFtQixFQUFFLG1DQUFtQztLQUN6RDtJQUNEO1FBQ0UsVUFBVSxFQUFFLEtBQUs7UUFDakIsZ0JBQWdCLEVBQUUsV0FBVztRQUM3QixlQUFlLEVBQUUsV0FBVztRQUM1QixtQkFBbUIsRUFBRSxtQ0FBbUM7S0FDekQ7SUFDRDtRQUNFLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGdCQUFnQixFQUFFLFdBQVc7UUFDN0IsZUFBZSxFQUFFLFdBQVc7UUFDNUIsbUJBQW1CLEVBQUUsbUNBQW1DO0tBQ3pEO0lBQ0Q7UUFDRSxVQUFVLEVBQUUsS0FBSztRQUNqQixnQkFBZ0IsRUFBRSxNQUFNO1FBQ3hCLGVBQWUsRUFBRSxVQUFVO1FBQzNCLG1CQUFtQixFQUFFLHFCQUFxQjtLQUMzQztJQUNEO1FBQ0UsVUFBVSxFQUFFLEtBQUs7UUFDakIsZ0JBQWdCLEVBQUUsT0FBTztRQUN6QixlQUFlLEVBQUUsV0FBVztRQUM1QixtQkFBbUIsRUFBRSxnQ0FBZ0M7S0FDdEQ7Q0FDRixDQUFDO0FBRUssSUFBTSxpQkFBaUIsR0FBRztJQUMvQixVQUFVLEVBQUU7UUFDVjtZQUNFLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLDBCQUEwQjtZQUM1QyxVQUFVLEVBQUUsVUFBVTtTQUN2QjtRQUNEO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsMEJBQTBCO1lBQzVDLFVBQVUsRUFBRSxVQUFVO1NBQ3ZCO1FBQ0Q7WUFDRSxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSwwQkFBMEI7WUFDNUMsVUFBVSxFQUFFLFVBQVU7U0FDdkI7S0FDRjtJQUNELFNBQVMsRUFBQztRQUNSO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsMkJBQTJCO1lBQzdDLFVBQVUsRUFBRSxTQUFTO1NBQ3RCO1FBQ0Q7WUFDRSxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSwyQkFBMkI7WUFDN0MsVUFBVSxFQUFFLFNBQVM7U0FDdEI7S0FBSTtJQUNQLFVBQVUsRUFBRTtRQUNWO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsMEJBQTBCO1lBQzVDLFVBQVUsRUFBRSxVQUFVO1NBQ3ZCO1FBQ0Q7WUFDRSxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSwwQkFBMEI7WUFDNUMsVUFBVSxFQUFFLFVBQVU7U0FDdkI7S0FDRjtJQUNELFVBQVUsRUFBRTtRQUNWO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsMEJBQTBCO1lBQzVDLFVBQVUsRUFBRSxVQUFVO1NBQ3ZCO1FBQ0Q7WUFDRSxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSwwQkFBMEI7WUFDNUMsVUFBVSxFQUFFLFVBQVU7U0FDdkI7S0FDRjtJQUNELFVBQVUsRUFBRTtRQUNWO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsMEJBQTBCO1lBQzVDLFVBQVUsRUFBRSxVQUFVO1NBQ3ZCO1FBQ0Q7WUFDRSxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSwwQkFBMEI7WUFDNUMsVUFBVSxFQUFFLFVBQVU7U0FDdkI7UUFDRDtZQUNFLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLDBCQUEwQjtZQUM1QyxVQUFVLEVBQUUsVUFBVTtTQUN2QjtRQUNEO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsMEJBQTBCO1lBQzVDLFVBQVUsRUFBRSxVQUFVO1NBQ3ZCO1FBQ0Q7WUFDRSxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSwwQkFBMEI7WUFDNUMsVUFBVSxFQUFFLFVBQVU7U0FDdkI7UUFDRDtZQUNFLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLDBCQUEwQjtZQUM1QyxVQUFVLEVBQUUsVUFBVTtTQUN2QjtRQUNEO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsMEJBQTBCO1lBQzVDLFVBQVUsRUFBRSxVQUFVO1NBQ3ZCO0tBQ0Y7Q0FDRjtBQUVNLElBQU0sbUJBQW1CLEdBQUc7SUFDakMsMEJBQTBCLEVBQUcsY0FBYyxDQUFDLDBCQUEwQixFQUFHLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDL0UsMEJBQTBCLEVBQUcsY0FBYyxDQUFDLDBCQUEwQixFQUFHLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDaEYsMEJBQTBCLEVBQUcsY0FBYyxDQUFDLDBCQUEwQixFQUFHLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDaEYsMkJBQTJCLEVBQUU7UUFDM0I7WUFDRSxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSwyQkFBMkI7WUFDN0MsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixlQUFlLEVBQUUsV0FBVztZQUM1QixtQkFBbUIsRUFBRSw2QkFBNkI7U0FDbkQ7S0FFRjtJQUNELDJCQUEyQixFQUFDO1FBQzFCO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsMkJBQTJCO1lBQzdDLGdCQUFnQixFQUFFLFVBQVU7WUFDNUIsZUFBZSxFQUFFLFdBQVc7WUFDNUIsbUJBQW1CLEVBQUUsbUNBQW1DO1NBQ3pEO1FBQ0Q7WUFDRSxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSwyQkFBMkI7WUFDN0MsZ0JBQWdCLEVBQUUsTUFBTTtZQUN4QixlQUFlLEVBQUUsVUFBVTtZQUMzQixtQkFBbUIsRUFBRSxxQkFBcUI7U0FDM0M7UUFDRDtZQUNFLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLDJCQUEyQjtZQUM3QyxnQkFBZ0IsRUFBRSxVQUFVO1lBQzVCLGVBQWUsRUFBRSxXQUFXO1lBQzVCLG1CQUFtQixFQUFFLG1DQUFtQztTQUN6RDtRQUNEO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsMkJBQTJCO1lBQzdDLGdCQUFnQixFQUFFLE9BQU87WUFDekIsZUFBZSxFQUFFLFdBQVc7WUFDNUIsbUJBQW1CLEVBQUUsNEJBQTRCO1NBQ2xEO0tBQ0Y7SUFDRCwwQkFBMEIsRUFBRztRQUMzQjtZQUNFLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLDBCQUEwQjtZQUM1QyxnQkFBZ0IsRUFBRSxXQUFXO1lBQzdCLGVBQWUsRUFBRSxXQUFXO1lBQzVCLG1CQUFtQixFQUFFLG1DQUFtQztTQUN6RDtRQUNEO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsMEJBQTBCO1lBQzVDLGdCQUFnQixFQUFFLE9BQU87WUFDekIsZUFBZSxFQUFFLEVBQUU7WUFDbkIsbUJBQW1CLEVBQUUsNEJBQTRCO1NBQ2xEO1FBQ0Q7WUFDRSxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSwwQkFBMEI7WUFDNUMsZ0JBQWdCLEVBQUUsV0FBVztZQUM3QixlQUFlLEVBQUUsV0FBVztZQUM1QixtQkFBbUIsRUFBRSxtQ0FBbUM7U0FDekQ7UUFDRDtZQUNFLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLDBCQUEwQjtZQUM1QyxnQkFBZ0IsRUFBRSxXQUFXO1lBQzdCLGVBQWUsRUFBRSxXQUFXO1lBQzVCLG1CQUFtQixFQUFFLG1DQUFtQztTQUN6RDtRQUNEO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsMEJBQTBCO1lBQzVDLGdCQUFnQixFQUFFLFdBQVc7WUFDN0IsZUFBZSxFQUFFLFdBQVc7WUFDNUIsbUJBQW1CLEVBQUUsbUNBQW1DO1NBQ3pEO0tBQ0Y7SUFDRCwwQkFBMEIsRUFBRztRQUMzQjtZQUNFLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLDBCQUEwQjtZQUM1QyxnQkFBZ0IsRUFBRSxXQUFXO1lBQzdCLGVBQWUsRUFBRSxXQUFXO1lBQzVCLG1CQUFtQixFQUFFLG1DQUFtQztTQUN6RDtRQUNEO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsMEJBQTBCO1lBQzVDLGdCQUFnQixFQUFFLFdBQVc7WUFDN0IsZUFBZSxFQUFFLFdBQVc7WUFDNUIsbUJBQW1CLEVBQUUsbUNBQW1DO1NBQ3pEO1FBQ0Q7WUFDRSxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSwwQkFBMEI7WUFDNUMsZ0JBQWdCLEVBQUUsV0FBVztZQUM3QixlQUFlLEVBQUUsV0FBVztZQUM1QixtQkFBbUIsRUFBRSxtQ0FBbUM7U0FDekQ7S0FDRjtJQUNELDBCQUEwQixFQUFHO1FBQzNCO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsMEJBQTBCO1lBQzVDLGdCQUFnQixFQUFFLFdBQVc7WUFDN0IsZUFBZSxFQUFFLFdBQVc7WUFDNUIsbUJBQW1CLEVBQUUsbUNBQW1DO1NBQ3pEO1FBQ0Q7WUFDRSxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSwwQkFBMEI7WUFDNUMsZ0JBQWdCLEVBQUUsV0FBVztZQUM3QixlQUFlLEVBQUUsV0FBVztZQUM1QixtQkFBbUIsRUFBRSxtQ0FBbUM7U0FDekQ7UUFDRDtZQUNFLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLDBCQUEwQjtZQUM1QyxnQkFBZ0IsRUFBRSxXQUFXO1lBQzdCLGVBQWUsRUFBRSxXQUFXO1lBQzVCLG1CQUFtQixFQUFFLG1DQUFtQztTQUN6RDtRQUNEO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsMEJBQTBCO1lBQzVDLGdCQUFnQixFQUFFLFlBQVk7WUFDOUIsZUFBZSxFQUFFLFdBQVc7WUFDNUIsbUJBQW1CLEVBQUUsb0NBQW9DO1NBQzFEO0tBQ0Y7SUFDRCwwQkFBMEIsRUFBRztRQUMzQjtZQUNFLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLDBCQUEwQjtZQUM1QyxnQkFBZ0IsRUFBRSxXQUFXO1lBQzdCLGVBQWUsRUFBRSxXQUFXO1lBQzVCLG1CQUFtQixFQUFFLG1DQUFtQztTQUN6RDtRQUNEO1lBQ0UsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsMEJBQTBCO1lBQzVDLGdCQUFnQixFQUFFLFdBQVc7WUFDN0IsZUFBZSxFQUFFLFdBQVc7WUFDNUIsbUJBQW1CLEVBQUUsbUNBQW1DO1NBQ3pEO1FBQ0Q7WUFDRSxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSwwQkFBMEI7WUFDNUMsZ0JBQWdCLEVBQUUsV0FBVztZQUM3QixlQUFlLEVBQUUsV0FBVztZQUM1QixtQkFBbUIsRUFBRSxtQ0FBbUM7U0FDekQ7S0FDRjtJQUNELDBCQUEwQixFQUFHLGNBQWMsQ0FBQywwQkFBMEIsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQzlFLDBCQUEwQixFQUFHLGNBQWMsQ0FBQywwQkFBMEIsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQy9FLDBCQUEwQixFQUFHLGNBQWMsQ0FBQywwQkFBMEIsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQy9FLDBCQUEwQixFQUFHLGNBQWMsQ0FBQywwQkFBMEIsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQy9FLDBCQUEwQixFQUFHLGNBQWMsQ0FBQywwQkFBMEIsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO0lBQ2hGLDBCQUEwQixFQUFHLGNBQWMsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ2pGLDBCQUEwQixFQUFHLGNBQWMsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ2xGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVQ4QjtBQVUvQjtJQUFrQyxzRUFBc0I7SUFBeEQ7UUFBQSxxRUE2QkM7UUFwQkcsb0JBQWMsR0FBRztZQUNQLG9CQUE2RyxFQUEzRyxnQ0FBYSxFQUFFLGtEQUFzQixFQUFFLGdEQUFxQixFQUFFLG9DQUFlLEVBQUUsZ0NBQTRCLENBQUM7WUFDcEgsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUcsYUFBYSxHQUFHLHFCQUFxQixFQUFDO2dCQUN0QyxPQUFPLDZEQUFLLFNBQVMsRUFBQyxtQkFBbUI7O29CQUFHLHNCQUFzQjs7b0JBQUssYUFBYTt3QkFBUSxDQUFDO2FBQy9GO1lBRUQsS0FBSyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxJQUFJLGFBQWEsRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDcEQsUUFBUSxDQUFDLElBQUksQ0FDYiw2REFBSyxHQUFHLEVBQUUsTUFBTTtvQkFDWixnRUFBUSxTQUFTLEVBQUMseUJBQXlCLEVBQUMsSUFBSSxFQUFFLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEdBQUcsQ0FDekksQ0FDTCxDQUFDO2FBQ0w7WUFDRCxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDOztJQUtMLENBQUM7SUFIRyw2QkFBTSxHQUFOO1FBQ0ksT0FBTyw2REFBSyxTQUFTLEVBQUMsZ0JBQWdCLElBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFPO0lBQ3hFLENBQUM7SUEzQmEseUJBQVksR0FBRztRQUN6QixhQUFhLEVBQUUsQ0FBQztRQUNoQixzQkFBc0IsRUFBRSxDQUFDO1FBQ3pCLHFCQUFxQixFQUFFLEVBQUU7UUFDekIsZUFBZSxFQUFFLFdBQVc7UUFDNUIsYUFBYSxFQUFFLFNBQVM7S0FDM0IsQ0FBQztJQXNCTixtQkFBQztDQUFBLENBN0JpQywrQ0FBZSxHQTZCaEQ7QUE3QndCOzs7Ozs7Ozs7Ozs7O0FDVnpCO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBUXhCLElBQU0sY0FBYyxHQUFHLFVBQUMsRUFBa0M7UUFBaEMsY0FBSSxFQUFFLGdCQUFLLEVBQUUsMEJBQVU7SUFBYyxRQUNwRSw2REFBSyxTQUFTLEVBQUMsa0JBQWtCO1FBQy9CLDZEQUFLLFNBQVMsRUFBQyx1Q0FBdUM7WUFDcEQsNkRBQUssU0FBUyxFQUFDLHVEQUF1RDtnQkFDcEUsNkRBQUssU0FBUyxFQUFDLHVEQUF1RDtvQkFDcEUsNkRBQUssU0FBUyxFQUFDLGlDQUFpQzt3QkFDOUMsNkRBQUssU0FBUyxFQUFFLHlDQUFzQyxFQUFFLEdBQUMsVUFBVSxDQUFFLElBQ2xFLElBQUksQ0FDRDt3QkFDTiw2REFBSyxTQUFTLEVBQUUseUJBQXVCLFVBQVksSUFDaEQsS0FBSyxDQUNGLENBQ0YsQ0FDRixDQUNGLENBQ0YsQ0FDRixDQUNQO0FBakJxRSxDQWlCckUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pCRjtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUV4QixJQUFNLGNBQWMsR0FBRztJQUM1QixvRUFDRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxFQUN6QyxTQUFTLEVBQUMsaUJBQWlCLEdBQUc7QUFGaEMsQ0FFZ0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFQ7QUFDZTtBQUNQO0FBQ2E7QUFDTjtBQUNrQztBQVVwRSxTQUFTLGlCQUFpQixDQUFFLEVBQXVFO1FBQXRFLGtCQUFNLEVBQUUsMEJBQVUsRUFBRSw0Q0FBbUIsRUFBRSw0QkFBVyxFQUFFLHNCQUFRO0lBRWhHLG9CQUFvQjtJQUNwQixJQUFNLFdBQVcsR0FBRyxNQUFNLEtBQUssS0FBSyxJQUFJLGdGQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFDLENBQUMsZ0ZBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUcxRyx5Q0FBeUM7SUFDbEM7OztpQ0FBaUIsQ0FHZCxDQUFDLDhEQUE4RDtJQUV6RSxxREFBcUQ7SUFDckQsSUFBTSxXQUFXLEdBQUcsaUJBQWlCLEVBQUMsQ0FBQyxvREFBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUM7UUFDbkYsVUFBVSxFQUFFLGlCQUFpQjtRQUM3QixVQUFVO0tBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFFakIsd0RBQXdEO0lBQ3hELElBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsWUFBRSxJQUFJLFFBQUM7UUFDckMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0I7UUFDMUIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0I7S0FDM0IsQ0FBQyxFQUhvQyxDQUdwQyxDQUFDLENBQUM7SUFFSiwyQkFBMkI7SUFDM0IsT0FBTywyREFBQyxvREFBTSxJQUNWLE9BQU8sRUFBRSxJQUFJLEVBQ2IsT0FBTyxFQUFFLE9BQU8sRUFDaEIsS0FBSyxFQUFFLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxlQUFLLElBQUksUUFBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQTlCLENBQThCLENBQUMsRUFDdkUsV0FBVyxFQUFHLFdBQVcsRUFDekIsZ0JBQWdCLEVBQUUsY0FBSSw2REFBQyxpTkFBK0MsTUFBaEQsQ0FBZ0QsRUFDdEUsUUFBUSxFQUFFLFVBQUMsT0FBOEM7WUFDdkQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFPO29CQUFOLGdCQUFLO2dCQUFNLFlBQUs7WUFBTCxDQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsR0FBSTtBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDakREO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBRXhCLElBQU0sT0FBTyxHQUFHLGNBQUs7SUFBTSwyREFBRyxTQUFTLEVBQUMsdUJBQXVCLGlCQUFhLE1BQU0sR0FBSzthQUFhLEVBQS9FLENBQStFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGN0U7QUFFZTtBQUNDO0FBQ2I7QUFDb0M7QUFDZ0M7QUFFL0YsU0FBUyxlQUFlLENBQUMsSUFBZ0IsRUFBRSxpQkFBMkM7SUFDbkYsNEJBQVEsQ0FBVTtJQUMxQixJQUFJLGVBQWlDLENBQUM7SUFDdEMsSUFBSTtRQUNGLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ2xGO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixlQUFlLEdBQUcsSUFBSSxDQUFDO0tBQ3hCO0lBQ0QsSUFBSSxjQUFjLEdBQUcsZUFBZSxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7UUFDdEQsY0FBYyxHQUFHO1lBQ2YsTUFBTSxFQUFFO2dCQUNOLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCO2dCQUN4QyxLQUFLLEVBQUUsT0FBTzthQUNmO1lBQ0QsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCO1NBQ3pCLENBQUM7S0FDckI7SUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZO1FBQUUsT0FBTyw0REFBSSxPQUFPLEVBQUUsQ0FBQztZQUFFLG9EQUFDLDhFQUFPLE9BQUc7NkJBQW1CO0lBQzVFLE9BQU8sY0FBYyxDQUFDLENBQUMsQ0FBQztRQUN0Qiw0REFBSSxTQUFTLEVBQUMsbUJBQW1CO1lBQy9CLDJEQUNFLElBQUksRUFBRSxjQUFjLENBQUMsTUFBTSxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUM5RCxPQUFPLEVBQUUsWUFBRTtvQkFDVCxJQUFJLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDdkUsT0FBTyxDQUFDLHVCQUF1QjtvQkFDakMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNwQixFQUFFLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3JCLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQixDQUFDLEVBQ0QsTUFBTSxFQUFDLFFBQVEsRUFDZixLQUFLLEVBQUUsd0VBQWtCLENBQUMsY0FBYyxDQUFDO2dCQUN6Qyw2REFBSyxTQUFTLEVBQUUsMEVBQW9CLENBQUMsY0FBYyxDQUFDLEdBQUksQ0FDdEQsQ0FDRDtRQUNMLDREQUFJLFNBQVMsRUFBQyxtQkFBbUI7WUFDL0IsNkRBQUssU0FBUyxFQUFFLGdGQUEwQixDQUFDLGNBQWMsQ0FBQyxJQUN2RCxjQUFjLENBQUMsTUFBTSxJQUFJLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssUUFBUSxDQUFDLENBQUM7Z0JBQzdFLGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FDdEQsQ0FDSCxDQUNKLENBQUMsQ0FBQyxDQUFDLDREQUFJLE9BQU8sRUFBRSxDQUFDLEdBQUk7QUFDMUIsQ0FBQztBQUVNLFNBQVMsTUFBTSxDQUFDLFdBQXlCLEVBQUUsVUFBc0I7SUFDdEUsSUFBTSxNQUFNLEdBQUc7UUFDYixVQUFVO09BQ1AsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQWdCO1lBQWYsY0FBSSxFQUFFLHNCQUFRO1FBQ3BDLFdBQUksS0FBSyxVQUFVLENBQUMsSUFBSTtZQUN4QixRQUFRLEtBQUssVUFBVSxDQUFDLFFBQVE7SUFEaEMsQ0FDZ0MsQ0FBQyxDQUFDLENBQUM7SUFDdkMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVNLFNBQWUsWUFBWSxDQUFDLElBQWdCOzs7Ozs7O29CQUVuQyxxQkFBTSxvREFBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDOztvQkFBdEUsR0FBRyxHQUFHLFNBQWdFO3lCQUN4RSxJQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsR0FBakIsd0JBQWlCO3lCQUNULDJEQUFTO2tDQUFDLEdBQUcsQ0FBQyxNQUFNO29CQUFFLHFCQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUU7d0JBQWhELE1BQU0sY0FBSSwyREFBUyxhQUFhLFNBQWdCLE1BQUMsQ0FBQzt3QkFFdkMscUJBQU0sR0FBRyxDQUFDLElBQUksRUFBRTs7b0JBQXZCLElBQUksR0FBRyxTQUFnQjtvQkFDN0IsaURBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Ozs7b0JBRWhELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsOEJBQThCLEdBQUcsQ0FBQyxLQUFHLENBQUMsT0FBTyxJQUFJLEtBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDaEYsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFHLENBQUMsQ0FBQzs7Ozs7O0NBRXRCO0FBRU0sU0FBUyxnQkFBZ0IsQ0FBQyxFQUE4QjtRQUE1QixjQUFJO0lBQy9CLHNCQUFrRCxFQUFoRCxzQ0FBZ0IsRUFBRSw4QkFBOEIsQ0FBQztJQUN6RCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6RSxPQUFPLENBQ0wsNkRBQUssU0FBUyxFQUFDLHlCQUF5QjtRQUN0Qyw2REFBSyxTQUFTLEVBQUMsb0JBQW9CO1lBQ2pDLDZEQUFLLFNBQVMsRUFBQyxXQUFXLEVBQUMsR0FBRyxFQUFFLGdCQUFnQixHQUFJLENBQ2hEO1FBQ04sNkRBQUssU0FBUyxFQUFDLG9CQUFvQjtZQUNqQztnQkFBTSwyREFBRyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBRSxZQUFZLElBQUcsUUFBUSxDQUFLLENBQU8sQ0FDOUQsQ0FDRixDQUNQLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7O0FDdkZEO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBUyxvQkFBb0IsQ0FBRSxHQUFtQjtJQUN2RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtRQUN2QixPQUFPLElBQUksQ0FBQztLQUNiOztRQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDL0IsS0FBSyxPQUFPO2dCQUNWLE9BQU8sbUNBQW1DLENBQUM7WUFDN0MsS0FBSyxXQUFXO2dCQUNkLE9BQU8sdUNBQXVDLENBQUM7WUFDakQsS0FBSyxVQUFVO2dCQUNiLE9BQU8sc0NBQXNDLENBQUM7WUFDaEQsS0FBSyxVQUFVO2dCQUNiLE9BQU8sc0NBQXNDLENBQUM7U0FDakQ7QUFDSCxDQUFDO0FBRU0sU0FBUyxrQkFBa0IsQ0FBRSxHQUFtQjtJQUNyRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU07UUFBRSxPQUFPLElBQUksQ0FBQztJQUNyQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1FBQ3hCLEtBQUssT0FBTztZQUNWLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNyQiw0Q0FBMEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLE9BQUk7cUJBQ2xFLGtCQUFnQixHQUFHLENBQUMsVUFBVSx5QkFBb0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFTO2dCQUN0RSxDQUFDO29CQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3ZCLEtBQUssV0FBVztZQUNkLE9BQU8sNEVBQWtFLENBQUM7UUFDNUUsS0FBSyxVQUFVO1lBQ2IsT0FBTywrRUFBMEUsQ0FBQztRQUNwRixLQUFLLFVBQVU7WUFDYixPQUFPLDhFQUErRCxDQUFDO0tBQzFFO0FBQ0gsQ0FBQztBQUVNLFNBQVMsMEJBQTBCLENBQUUsR0FBbUI7SUFDN0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFFbkMsUUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtRQUN4QixLQUFLLE9BQU8sQ0FBQyxDQUFDLE9BQU8sMkJBQTJCLENBQUM7UUFDakQsS0FBSyxXQUFXLENBQUMsQ0FBQyxPQUFPLCtCQUErQixDQUFDO1FBQ3pELEtBQUssVUFBVSxDQUFDLENBQUMsT0FBTyw4QkFBOEIsQ0FBQztLQUN4RDtJQUNELElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQztRQUN6QixzQ0FBc0M7UUFDdEMsT0FBTywyQ0FBMkMsQ0FBQztJQUNyRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEdBQUcsRUFBRTtRQUMxQixzQ0FBc0M7UUFDdEMsT0FBTywyQ0FBMkMsQ0FBQztJQUNyRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEdBQUcsRUFBRTtRQUMxQixPQUFPLDJDQUEyQyxDQUFDO0lBQ25ELHNDQUFzQztJQUN4QyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEdBQUcsRUFBRTtRQUMxQixPQUFPLDJDQUEyQyxDQUFDO0lBQ25ELHNDQUFzQztJQUN4QyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEdBQUcsRUFBRTtRQUMxQixPQUFPLDJDQUEyQyxDQUFDO0lBQ25ELHNDQUFzQztJQUN4QyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEdBQUcsRUFBRTtRQUMxQixPQUFPLDJDQUEyQyxDQUFDO0lBQ25ELHNDQUFzQztJQUN4QyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEdBQUcsRUFBRTtRQUMxQixPQUFPLDJDQUEyQyxDQUFDO0lBQ25ELHNDQUFzQztJQUN4QyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSTtRQUM1QixPQUFPLDJDQUEyQyxDQUFDO0lBQ25ELHNDQUFzQztJQUN4QyxJQUFJLE1BQU0sQ0FBQyxZQUFZLElBQUksSUFBSTtRQUM3QixPQUFPLDJDQUEyQyxDQUFDO0lBQ25ELHNDQUFzQztJQUN4QyxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVzRTtBQUN4QztBQUNZO0FBQ1I7QUFDaUI7QUFDeUI7QUFDRjtBQUNaO0FBQ2pCO0FBUXZDLElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxVQUFDLEVBQXdCO1FBQXRCLGtCQUFNLEVBQUUsZ0JBQUs7SUFDckMsNkpBQUksQ0FBaUM7SUFDdkMsNEhBQWdFLEVBQS9ELDRDQUFtQixFQUFFLGtDQUEwQyxDQUFDO0lBRXZFLElBQUksb0JBQW9CLEdBQUcsVUFBUyxlQUE2QjtRQUMvRCxJQUFJLHFCQUFxQixHQUEyQyxFQUFFLENBQUM7UUFDdkUsa0ZBQWtGO1FBQ2xGLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGVBQUs7WUFDdEMsSUFBSSxLQUFLLEdBQUcsa0ZBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQUUsSUFBSSxRQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLG1CQUFtQixFQUFqQyxDQUFpQyxDQUFDLEVBQTdELENBQTZELENBQUM7aUJBQ2pILEdBQUcsQ0FBQyxZQUFFLElBQUssT0FBTyxFQUFFLFdBQVcsRUFBSyxFQUFFLENBQUMsZ0JBQWdCLFNBQUksRUFBRSxDQUFDLGVBQWlCLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxtQkFBbUIsRUFBQyxHQUFDLENBQUMsQ0FBQztZQUNuSCxJQUFHLEtBQUssRUFBQztnQkFDUCxxQkFBcUIsQ0FBQyxJQUFJLE9BQTFCLHFCQUFxQixpREFBUyxLQUFLLEdBQUU7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILDhCQUE4QjtRQUM5QixPQUFPLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxXQUFDO1lBQzFCLCtFQUErQyxFQUE5QyxpQkFBUyxFQUFFLGtCQUFtQyxDQUFDO1lBQ3RELE9BQU8sbURBQ0YsQ0FBQyxJQUNKLFNBQVMsYUFDVCxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFDeEI7UUFDSixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUVBQVksQ0FBQyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELElBQUksbUJBQW1CLEdBQUcsbUJBQW1CLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRWpFLE9BQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUM5QjtZQUNFLG9EQUFDLCtFQUFZLElBQ1osS0FBSyxFQUNMLDZEQUFLLFNBQVMsRUFBQyx3QkFBd0I7b0JBQ3hDLGtFQUFPLE1BQU0sQ0FBQyxJQUFJLENBQVE7b0JBQzFCLG9EQUFDLDBFQUFnQixJQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsR0FBRyxDQUN0SCxFQUVOLFVBQVUsRUFBRSxLQUFLLElBRWIsbUJBQW1CLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlFQUNsRSxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQUk7Z0JBQ2IsSUFBSSxlQUFlLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBRyxRQUFDLENBQUMsVUFBVSxFQUFaLENBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQzdHLElBQUksaUJBQWlCLEdBQUcsY0FBYyxDQUFDLFdBQVcsSUFBSSxjQUFjLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksb0JBQW9CLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBRXJJLElBQUksV0FBVyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQzdFLE9BQU8sV0FBVztvQkFDaEIsb0RBQUMsdURBQVUsSUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFDdEIsSUFBSSxFQUFFLElBQUksRUFDVixXQUFXLEVBQUUsZUFBZSxFQUM1QixpQkFBaUIsRUFBRSxpQkFBaUIsR0FDcEM7WUFDTixDQUFDLENBQUMsQ0FFRSxDQUFDLENBQUM7Z0JBQ1IsaUVBQ0csSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFDLEVBQUUsRUFBRSw0Q0FBNEMsRUFBRSxjQUFjLEVBQUUsbURBQW1ELEVBQUMsQ0FBQyxDQUN4SSxDQUVLLENBQ2Q7QUFDVCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0U2QjtBQUNjO0FBQzhCO0FBT3BFLElBQU0sMkJBQTJCLEdBQUcsQ0FBQyxVQUFDLEVBQTRCO1FBQTFCLHdDQUFpQjtJQUNwRCw2SkFBSSxDQUFpQztJQUM3QyxJQUFNLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztJQUM5QyxvSEFBMEMsRUFBekMscUJBQWEsRUFBRSxrQkFBMEIsQ0FBQztJQUVqRCxPQUFPLGlCQUFpQixJQUFJLDZEQUFLLFNBQVMsRUFBQyxtQ0FBbUM7UUFDMUUsZ0VBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFDLEVBQUUsRUFBQyxxQ0FBcUMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFDLENBQUMsQ0FBTTtRQUN4RyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFFLEVBQUUsS0FBSztZQUM3QixvRUFBSyxTQUFTLEVBQUUsOEJBQThCLEdBQUcsQ0FBQyxrQkFBa0IsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDOUYsNkRBQUssU0FBUyxFQUFDLCtCQUErQixFQUFDLE9BQU8sRUFBRTt3QkFDcEQsVUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFdBQUMsSUFBSSxRQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBYixDQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsK0NBQUksYUFBYSxHQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUMsQ0FBQztvQkFDOUgsQ0FBQztvQkFDRyw2REFBSyxTQUFTLEVBQUUsVUFBVSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQVEsQ0FDM0Y7Z0JBQ04sNkRBQUssU0FBUyxFQUFDLG9CQUFvQixJQUFFLEVBQUUsQ0FBQyxXQUFXLENBQU8sQ0FDeEQ7UUFQTixDQU9NLENBQ1Q7UUFDRCw2REFBSyxTQUFTLEVBQUMsb0NBQW9DO1lBQy9DLDZEQUFLLFNBQVMsRUFBQywrQkFBK0I7Z0JBQzFDLGdFQUFRLFNBQVMsRUFBQyxLQUFLLElBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFDLEVBQUUsRUFBQyx1QkFBdUIsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBVSxDQUMzRyxDQUNKLENBQ0o7QUFDVixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDNkI7QUFFd0M7QUFFSjtBQUNVO0FBQ2Q7QUFDRjtBQUNwQjtBQUNNO0FBQ0Q7QUFRdkMsSUFBTSxVQUFVLEdBQUcsQ0FBQyxVQUFDLEVBQStDO1FBQTdDLGNBQUksRUFBRSw0QkFBVyxFQUFFLHdDQUFpQjtJQUMxRCxvSEFBb0YsRUFBbkYsNENBQW1CLEVBQUcsa0NBQWMsRUFBRSw0QkFBNkMsQ0FBQztJQUUzRixTQUFlLFlBQVksQ0FBQyxRQUFROzs7Ozs7OzZCQUM5QixTQUFRLElBQUksbUJBQW1CLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBM0Qsd0JBQTJEO3dCQUUxQyxxQkFBTSxzRUFBWSxDQUFDLG9EQUFHLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxjQUFjLENBQUMsRUFBRSxDQUFDOzt3QkFBekUsZUFBYSxTQUE0RDt3QkFDL0UscUNBQXFDO3dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUN6QixXQUFXLENBQUMsT0FBTyxDQUFDLFVBQU8sVUFBVTs7Ozs0Q0FDVixxQkFBTSxzRUFBWSxDQUN6QyxVQUFVLENBQUMsSUFBSSxHQUFHLDBCQUEwQjs0Q0FDNUMsVUFBVSxDQUFDLFFBQVE7NENBQ25CLFVBQVUsQ0FBQyxNQUFNOzRDQUNqQixVQUFVLENBQUMsVUFBVTs0Q0FDckIsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQzs7d0NBTHBDLGdCQUFnQixHQUFHLFNBS2lCO3dDQUUxQyxJQUFJLENBQUMsQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLE1BQU0sS0FBSyxnQkFBZ0IsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDLEVBQUU7NENBQzFFLDhDQUFFLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDO2dEQUM1QixFQUFFLEVBQUUsb0VBQVUsRUFBRTtnREFDaEIsSUFBSSxFQUFFLENBQUMsWUFBVSxDQUFDO2dEQUNsQixNQUFNLEVBQUUsZ0JBQWdCOzZDQUN6QixDQUFDLENBQUM7eUNBQ0o7Ozs7NkJBQ0YsQ0FBQyxDQUFDOzs7Ozs7S0FFTjtJQUVELE9BQU8sb0RBQUMsK0VBQVksSUFDbEIsV0FBVyxFQUFFLFVBQUMsVUFBVSxJQUFLLG1CQUFZLENBQUMsVUFBVSxDQUFDLEVBQXhCLENBQXdCLEVBQ3JELFNBQVMsRUFBQyxnQkFBZ0IsRUFDMUIsS0FBSyxFQUFFLDZEQUFLLFNBQVMsRUFBQyx3QkFBd0I7WUFDNUMsa0VBQU8sSUFBSSxDQUFDLElBQUksQ0FBUTtZQUN4QixvREFBQywwRUFBZ0IsSUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEdBQUksQ0FDbkgsRUFDTixVQUFVLEVBQUUsS0FBSztRQUNqQiw2REFBSyxTQUFTLEVBQUMsV0FBVztZQUN4QixvREFBQywrRUFBcUIsSUFBQyxXQUFXLEVBQUUsV0FBVyxHQUFJO1lBQ25ELCtEQUFNO1lBQ04sb0RBQUMseUZBQTJCLElBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEdBQUksQ0FDakUsQ0FDTztBQUNqQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM1REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUVIO0FBQ3VCO0FBQ3dCO0FBQ3hDO0FBTTVCLElBQU0scUJBQXFCLEdBQUcsQ0FBQyxVQUFDLEVBQXNCO1FBQXBCLDRCQUFXO0lBQ3hDLDZKQUFJLENBQWlDO0lBQzdDLElBQU0scUJBQXFCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFRLENBQUM7SUFDcEUsd0RBQXdEO0lBQ3hELHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUkscUJBQXFCLENBQUMsT0FBTyxDQUFDLFdBQUM7UUFDL0QsQ0FBQyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLENBQUMsUUFBUTtZQUNWLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLCtDQUErQztRQUM5RSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxJQUFJLDJCQUEyQjtZQUN6RCxDQUNJLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNqSCxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyw2Q0FBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFDakc7WUFDRSxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMxQjtJQUNMLENBQUMsQ0FDQSxDQUFDO0lBRUYsT0FBTyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsK0RBQU8sU0FBUyxFQUFDLHdCQUF3QjtRQUNyRTtZQUNJO2dCQUNJLGdFQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBQyxFQUFFLEVBQUMsbUNBQW1DLEVBQUUsY0FBYyxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQU07Z0JBQzlGLGdFQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBQyxFQUFFLEVBQUMsZ0NBQWdDLEVBQUUsY0FBYyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQU07Z0JBQzlGLGdFQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBQyxFQUFFLEVBQUMsbUNBQW1DLEVBQUUsY0FBYyxFQUFDLFVBQVUsRUFBQyxDQUFDLENBQU07Z0JBQ2xHLGdFQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBQyxFQUFFLEVBQUMsOEJBQThCLEVBQUUsY0FBYyxFQUFDLFNBQVMsRUFBQyxDQUFDLENBQU07Z0JBQzVGLGdFQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBQyxFQUFFLEVBQUMsNkJBQTZCLEVBQUUsY0FBYyxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQU0sQ0FDdkYsQ0FDRDtRQUNSLG1FQUNLLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxvQkFBVTtZQUNqQyxPQUFPLG9EQUFDLCtEQUFjLElBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxxQkFBcUIsRUFBSSxVQUFVLENBQUMsYUFBYSxHQUFJO1FBQ3hHLENBQUMsQ0FBQyxDQUVFLENBQ0o7UUFDSixDQUFDO1lBQ0QsaUVBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFDLEVBQUUsRUFBQywrQkFBK0IsRUFBRSxjQUFjLEVBQUMsMkNBQTJDLEVBQUMsQ0FBQyxDQUFPO0FBR3pJLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRDZCO0FBQ29CO0FBQ047QUFDOEI7QUFDN0I7QUFDOEM7QUFHckYsSUFBTSxlQUFlLEdBQUcsQ0FBQztJQUNwQiw2SkFBSSxDQUFpQztJQUN2QyxvSEFBeUQsRUFBeEQsMkJBQW1CLEVBQUUsMkJBQW1DLENBQUM7SUFDMUQsNEhBQTRELEVBQTFELGdCQUFLLEVBQUUsa0NBQWMsRUFBRSxrQkFBbUMsQ0FBQztJQUVuRSxJQUFNLHlCQUF5QixHQUFHLHlFQUF5RTtVQUNyRyxxR0FBcUcsQ0FBQztJQUU1RyxPQUFPOztRQUFJLGNBQWMsQ0FBQyxDQUFDO1lBQ3ZCLDZEQUFLLFNBQVMsRUFBQyxpQ0FBaUM7Z0JBQzVDLGdFQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsa0NBQWtDLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQUFFLENBQUMsQ0FBTTtnQkFDaEgsK0RBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSx3Q0FBd0MsRUFBRSxjQUFjLEVBQUUsRUFBRSx5QkFBeUIsNkJBQUUsRUFBRSxDQUFDLENBQUs7Z0JBQzVIO29CQUFLLGNBQWMsQ0FBQyxJQUFJOztvQkFBRyxjQUFjLENBQUMsV0FBVyxDQUFNO2dCQUMzRCw2REFBSyxTQUFTLEVBQUMsaUNBQWlDO29CQUM1Qyw2REFBSyxTQUFTLEVBQUMsa0RBQWtEO3dCQUM3RCxvREFBQyxvR0FBaUIsSUFDZCxNQUFNLEVBQUUsTUFBTSxFQUNkLFVBQVUsRUFBRSxjQUFjLENBQUMsSUFBSSxFQUMvQixtQkFBbUIsRUFBRSxtQkFBbUIsRUFDeEMsUUFBUSxFQUFFLHFCQUFXLElBQU0sbUJBQW1CLENBQUMsK0NBQUksV0FBVyxFQUFFLEVBQUMsQ0FBQyxFQUNsRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFDLEVBQUUsRUFBQyw0Q0FBNEMsRUFBRSxjQUFjLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxHQUN2SCxDQUNBLENBQ0o7Z0JBQ0wsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQU07b0JBQzlCLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLGFBQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQUcsSUFBSSxVQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBWixDQUFZLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDO29CQUNoRixPQUFPLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvREFBQywrREFBZ0IsSUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEdBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNwSCxDQUFDLENBQUMsQ0FDQTtZQUNOLENBQUMsQ0FBQyxJQUFJLENBQUk7QUFDbEIsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QzRCO0FBQ0g7QUFDNkY7QUFFMUU7QUFDRDtBQUNGO0FBQ0s7QUFRMUMsSUFBTSxjQUFjLEdBQUcsQ0FBQyxVQUFDLEVBQTRDO1FBQTFDLDBCQUFVLEVBQUUsZ0RBQXFCO0lBQ3pELDRIQUFtRSxFQUFsRSw2QkFBcUIsRUFBRSwyQkFBMkMsQ0FBQztJQUUxRSxTQUFlLGlCQUFpQixDQUFDLFVBQXNCOzs7Ozs7d0JBQzdDLE1BQU0sR0FBRyxvREFBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQzt3QkFDbkMsS0FBK0IsSUFBSSxDQUFDLEtBQUssRUFBdkMsUUFBUSxnQkFBRSxNQUFNLGNBQUUsTUFBTSxhQUFnQjt3QkFDeEMsSUFBSSxHQUFlLFVBQVUsS0FBekIsRUFBRSxRQUFRLEdBQUssVUFBVSxTQUFmLENBQWdCO3dCQUN0QyxxQkFBTSxtQkFBbUIsQ0FBQyxtREFBSyxVQUFVLElBQUUsWUFBWSxFQUFFLElBQUksSUFBRzs7d0JBQWhFLFNBQWdFLENBQUM7Ozs7d0JBRWpELHFCQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsd0JBQXNCLE1BQU0sU0FBSSxRQUFRLFNBQUksTUFBTSxTQUFJLElBQUksU0FBSSxRQUFVLENBQUM7O3dCQUFoRyxHQUFHLEdBQUcsU0FBMEY7NkJBQ2xHLElBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxHQUFqQix3QkFBaUI7NkJBQVksMkRBQVM7c0NBQUMsR0FBRyxDQUFDLE1BQU07d0JBQUUscUJBQU0sR0FBRyxDQUFDLElBQUksRUFBRTs0QkFBaEQsTUFBTSxjQUFJLDJEQUFTLGFBQWEsU0FBZ0IsTUFBQyxDQUFDOzRCQUN6RCxxQkFBTSxHQUFHLENBQUMsSUFBSSxFQUFFOzt3QkFBMUIsT0FBTyxHQUFHLFNBQWdCO3dCQUNoQyxxQkFBTSxtQkFBbUIsQ0FBQyxtREFDbkIsVUFBVSxJQUFFLFlBQVksRUFBRSxLQUFLLEVBQ2xDLFFBQVEsRUFBRSxtREFDSCxVQUFVLENBQUMsUUFBUSxJQUN0QixjQUFjLEVBQUUsT0FBTyxPQUU3Qjs7d0JBTkYsU0FNRSxDQUFDOzs7O3dCQUVILHFCQUFNLG1CQUFtQixDQUFDLG1EQUFLLFVBQVUsSUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxHQUFDLElBQUc7O3dCQUFsRixTQUFrRixDQUFDOzs7Ozs7S0FFMUY7SUFFRCx1REFBUyxDQUFDO1FBQ04sSUFBSSxxQkFBcUIsRUFBRTtZQUN2QixtQkFBbUIsQ0FBQyxtREFBSyxVQUFVLElBQUUsWUFBWSxFQUFFLElBQUksSUFBRyxDQUFDO1NBQzlEO0lBQ0wsQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFdkMsT0FBTyw0REFBSSxHQUFHLEVBQUUscUJBQXFCLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNoSDtZQUNJLDJEQUFHLElBQUksRUFBRSxZQUFVLHFCQUFxQixDQUFDLElBQU0sSUFDMUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLGVBQWUsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQzdFLENBQ0g7UUFDTCxnRUFDSyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekMsdURBQXVEO1lBQ3ZELG9EQUFDLGtHQUFnQixJQUFDLElBQUksRUFBRSxxQkFBcUIsR0FBSSxDQUFDLENBQUM7WUFDbkQsMkRBQUcsSUFBSSxFQUFDLEdBQUcsRUFDUCxPQUFPLEVBQUUsWUFBRTtvQkFDUCxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3BCLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDckIsc0dBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLElBQUcsOERBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUssQ0FFN0Q7UUFDTCw0REFBSSxTQUFTLEVBQUMscUJBQXFCLElBQUUsNkNBQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBTTtRQUM3Ryx5R0FBZSxDQUFDLHFCQUFxQixFQUFFLGlCQUFpQixDQUFDLENBQ3pEO0FBQ1QsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDaEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNGO0FBQ21DO0FBQ047QUFDTjtBQUNqQjtBQU12QyxJQUFNLFdBQVcsR0FBRyxDQUFDLFVBQUMsRUFBMkI7UUFBekIsc0NBQWdCO0lBQ25DLDZKQUFJLENBQWlDO0lBQ3ZDLDRIQUFnRixFQUEvRSw0Q0FBbUIsRUFBRSxrQ0FBYyxFQUFFLGtDQUEwQyxDQUFDO0lBRXZGLE9BQU8sb0VBQUssU0FBUyxFQUFDLDJDQUEyQztRQUM3RCxvRUFBSyxTQUFTLEVBQUMsV0FBVztZQUN0Qix1RUFBSyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLDhCQUE4QixFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBRSxDQUFDLENBQU07WUFDL0csb0VBQUssU0FBUyxFQUFDLHdCQUF3QixJQUNsQyxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTTtnQkFDdkIsT0FBTztvQkFDSCxvRUFBSyxHQUFHLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUMsa0JBQWtCO3dCQUN0RCxvRUFBSyxTQUFTLEVBQUMscUJBQXFCOzRCQUNoQyxvRUFBSyxTQUFTLEVBQUMsK0JBQStCO2dDQUMxQyxrRUFBRyxNQUFNLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBSyxrRkFBMEIsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsa0JBQWEsTUFBTSxDQUFDLEVBQUUsVUFBTyxFQUFFLFNBQVMsRUFBQyxVQUFVLEdBQUcsQ0FDaEk7NEJBQ04sb0VBQUssU0FBUyxFQUFDLG9CQUFvQjtnQ0FDL0Isb0VBQUssU0FBUyxFQUFDLHdCQUF3QjtvQ0FDbkMsMkRBQUMscURBQUksSUFBQyxTQUFTLEVBQUUsY0FBYyxJQUFJLGNBQWMsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLHNCQUFvQixNQUFNLENBQUMsRUFBRSxpQkFBYzt3Q0FBRyxNQUFNLENBQUMsSUFBSTs7d0NBQUssTUFBTSxDQUFDLFdBQVcsQ0FBUTtvQ0FDakwsMkRBQUMsMEVBQWdCLElBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxHQUFJLENBQy9GLENBQ0osQ0FDSixDQUNKLENBQ1A7WUFDUCxDQUFDLENBQ0EsQ0FDQyxDQUNKLENBQ0o7QUFDVixDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDNEI7QUFDZ0M7QUFDZTtBQUN6QjtBQUNSO0FBQ1A7QUFDTTtBQUVlO0FBQ0E7QUFDQztBQWU1RCxJQUFJLG1CQUFtQixHQUFhLEVBQUMsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBQyxDQUFDO0FBQ3pJLElBQU0sWUFBWSxHQUFHLDJEQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUd4RCxJQUFNLFVBQVUsR0FBRywrREFBVSxDQUFDLENBQUMsVUFBQyxFQUFrQzs7UUFBaEMsZ0JBQUssRUFBRSxzQ0FBZ0I7SUFDNUQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BELElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDMUMsSUFBSSxTQUFTLEdBQWMsRUFBRSxDQUFDO0lBQ3hCLG9KQUFtRixFQUFsRiwyQkFBbUIsRUFBRSxzQkFBNkQsQ0FBQztJQUcxRixJQUFNLE1BQU0sR0FBRyw4Q0FBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLG9EQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUU1RyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqRCxJQUFJLGFBQWEsRUFBRTtRQUNmLElBQU0sSUFBRSxHQUFHLG9EQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUVoQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBYztZQUNqQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxNQUFNLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLElBQUUsRUFBRTtvQkFDcEQsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDMUI7cUJBQU0sSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsR0FBRyxJQUFJLElBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN2RSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMxQjthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7S0FDTjtJQUVELFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLGlFQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsOENBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLEVBQUosQ0FBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2hHLElBQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFFdkUsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMvQixJQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkUsSUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUc5RCw0RUFBNEU7SUFDNUUsOERBQThEO0lBQzlELElBQUksV0FBVyxHQUFHLG9EQUFFLENBQUMsc0JBQXNCLEVBQUMsSUFBSSwwREFBSSxtQkFBbUIsQ0FBQyxTQUFTLEdBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUE2QixDQUFDO0lBRS9ILHVEQUFTLENBQUM7UUFDTixTQUFlLHFCQUFxQixDQUFDLE1BQWMsRUFBRSxTQUFpQjs7Ozs7OzRCQUM1RCxNQUFNLEdBQUcsb0RBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Ozs7NEJBR3pCLHFCQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsRUFBRSxNQUFNLFVBQUUsU0FBUyxhQUFFLENBQUM7OzRCQUFoRixHQUFHLEdBQUcsU0FBMEU7aUNBQ2xGLElBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxHQUFsQix3QkFBa0I7aUNBQ1IsMkRBQVM7MENBQUMsR0FBRyxDQUFDLE1BQU07NEJBQUUscUJBQU0sR0FBRyxDQUFDLElBQUksRUFBRTtnQ0FBaEQsTUFBTSxjQUFJLDJEQUFTLGFBQWEsU0FBZ0IsTUFBQyxDQUFDO2dDQUVwQyxxQkFBTyxHQUFHLENBQUMsSUFBSSxFQUFVOzs0QkFBdkMsV0FBVyxHQUFHLFNBQXdFOzRCQUN4RSxxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sSUFBSSw2RUFBWSxDQUFDLG9EQUFHLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQzs7NEJBQXhHLFdBQVcsR0FBRyxTQUFzRzs0QkFDeEgsY0FBYyxDQUFDLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXLGVBQUMsQ0FBQyxDQUFDOzs7OzRCQUV0RCw4REFBUyxDQUFDLEtBQUcsQ0FBQyxDQUFDOzs7Ozs7U0FFdEI7UUFFRCxJQUFHLFNBQVMsSUFBSSxVQUFVLEVBQUM7WUFDeEIscUJBQXFCLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0wsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRTVDLElBQUksWUFBWSxHQUFHO1FBQ2YsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsV0FBVztRQUNwRCxjQUFjO1FBQ2QsY0FBYyxFQUFHLFNBQVM7UUFDMUIsV0FBVztRQUNYLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLEtBQUssRUFBRSxlQUFlO0tBQ3pCO0lBRUQsT0FBUSxvREFBQyxZQUFZLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxZQUFZO1FBQUUsb0RBQUMseUZBQWMsSUFDbkUsSUFBSSxFQUFFLG9EQUFDLGlFQUFlLE9BQUcsRUFDekIsS0FBSyxFQUFFLG9EQUFDLHlEQUFXLElBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEdBQUcsRUFDekQsVUFBVSxFQUFFLENBQUMsR0FBSSxDQUF3QjtBQUM3QyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDckdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQzhDO0FBQ2hCO0FBQzBCO0FBQ3ZDO0FBQ3lCO0FBQzVCO0FBTWpDLElBQU0sY0FBYyxHQUFHLHVGQUFTLENBQUMsNkRBQVUsQ0FBQyxVQUFDLEVBQXlCO1FBQXhCLHNDQUFnQjtJQUNqRSxPQUFPLDJEQUFDLDJEQUFNO1FBQ1Ysb0VBQUssU0FBUyxFQUFDLGNBQWM7WUFDekIsMkRBQUMsc0RBQUssSUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLEtBQUssUUFBQyxNQUFNLEVBQUUsY0FBTSxrRUFBQyx5REFBUSxJQUFDLEVBQUUsRUFBRSxXQUFXLEdBQUksRUFBN0IsQ0FBNkIsR0FBSTtZQUNyRSwyREFBQyxzREFBSyxJQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLHdDQUF3QztnQkFDOUQsMkRBQUMsbUVBQU8sSUFBQyxRQUFRLEVBQUUsMkRBQUMsNkZBQWMsT0FBRztvQkFDakMsMkRBQUMsdURBQVUsSUFBQyxnQkFBZ0IsRUFBRyxnQkFBZ0IsR0FBRyxDQUM1QyxDQUNOLENBQ04sQ0FDRDtBQUNiLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdkJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUQ7QUFNTDtBQVV2QyxJQUFNLGdCQUFnQixHQUFHLENBQUMsVUFBQyxFQUFnRTtRQUE5RCxrQkFBTSxFQUFFLGtCQUFNLEVBQUUsc0JBQVEsRUFBRSxrQkFBTSxFQUFFLDRDQUFtQjtJQUM3RSxnSkFBVyxDQUFvQztJQUN2RCxJQUFJLGFBQWEsR0FBVyxDQUFDLENBQUM7SUFFOUIseUhBQXlIO0lBQ3pILElBQUksbUJBQW1CLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELElBQUksbUJBQW1CLEVBQUU7UUFDckIsSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQUk7Z0JBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLG9CQUFVO29CQUMzQixhQUFhLElBQUksb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDM0UsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDO1NBQ0w7YUFBTSxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLElBQUksUUFBUSxFQUFoQixDQUFnQixDQUFDLENBQUM7WUFDL0QsYUFBYSxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLG9CQUFVO2dCQUNyRCxhQUFhLElBQUksb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMzRSxDQUFDLENBQUM7U0FDTDthQUFNLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUMxQixhQUFhLElBQUksb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN0RTtLQUNKO0lBRUQsU0FBUyxvQkFBb0IsQ0FBQyxlQUFzQjtRQUNoRCxJQUFHLGVBQWUsRUFBQztZQUNmLE9BQU8sZUFBZSxDQUFDLE1BQU0sQ0FBQyxXQUFDLElBQUcsUUFBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUMzRjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELG1JQUFtSTtJQUNuSSxnSEFBZ0g7SUFDaEgseUZBQXlGO0lBQ3pGLG9CQUFvQjtJQUNwQixpRUFBaUU7SUFDakUsZ0JBQWdCO0lBQ2hCLGtHQUFrRztJQUNsRyx5REFBeUQ7SUFDekQsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osU0FBUztJQUNULGtCQUFrQjtJQUNsQiw4Q0FBOEM7SUFDOUMsUUFBUTtJQUNSLGVBQWU7SUFFZixPQUFPLGFBQWEsR0FBRyxDQUFDLElBQUksb0VBQUssU0FBUyxFQUFDLG1CQUFtQixJQUFFLGFBQWEsQ0FBTztBQUN4RixDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2hFSDtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUN4QixJQUFNLGVBQWUsR0FBRyxtREFBbUIsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRFY7QUFDTDtBQUNBO0FBQ0c7QUFDQTtBQUN0QjtBQUNTO0FBQ1o7QUFFckIsSUFBTSxTQUFTLEdBQUcsVUFBbUIsU0FBaUM7SUFDekU7UUFBaUMsNEVBQWtCO1FBRy9DLDRCQUFZLEtBQUs7WUFBakIsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FPZjtZQU5HLGdFQUFhLENBQUMsK0NBQUksZ0VBQVMsRUFBSSxnRUFBUyxFQUFFLENBQUM7WUFDM0MsS0FBSSxDQUFDLFFBQVEsR0FBRztnQkFDaEIsSUFBSSxFQUFFLGtEQUFXO2dCQUNqQixJQUFJLEVBQUUsa0RBQVc7YUFDaEIsQ0FBQztZQUNGLDZDQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsd0RBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7UUFDcEMsQ0FBQztRQUVELG1DQUFNLEdBQU47WUFDSSxPQUFPLG9EQUFDLHVEQUFZLElBQUMsTUFBTSxFQUFFLHdEQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLHdEQUFHLENBQUMsVUFBVSxDQUFDO2dCQUNoRixvREFBQyxTQUFTLHFEQUFLLElBQUksQ0FBQyxLQUFVLEVBQUksQ0FDdkI7UUFDbkIsQ0FBQztRQUNMLHlCQUFDO0lBQUQsQ0FBQyxDQWxCZ0MsK0NBQWU7QUFBaEQsQ0FrQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCcUU7QUFDdkI7QUFDYjtBQUV0QyxJQUFNLGlCQUFpQixHQUFHLDRDQUFLLENBQUMsYUFBYSxDQUFlLElBQUksQ0FBQyxDQUFDO0FBRWxFLGtFQUFZLENBQUMsV0FBVyxDQUFDO0lBQ3ZCLHNGQUFzRjtJQUN0Rix1RkFBdUY7SUFDdkYsdURBQXVEO0lBQ3ZELHNGQUFzRjtJQUN0RiwrRUFBK0U7SUFDL0UsOEVBQThFO0lBQzlFLHNGQUFzRjtJQUN0RixxRkFBcUY7SUFDckYsT0FBQyxpQkFBeUIsQ0FBQyxhQUFhO0FBQXhDLENBQXdDLENBQUMsQ0FBQztBQVE1QztJQUE2QixpRUFBNkU7SUFDeEcsaUJBQVksS0FBWTtRQUF4QixZQUNFLGtCQUFNLEtBQUssQ0FBQyxTQUtiO1FBUUQsbUJBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRW5DLHVCQUFpQixHQUFpQjtZQUNoQyxXQUFXLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztnQkFDakQsS0FBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDMUIsQ0FBQztTQUNGO1FBRUQsY0FBUSxHQUFHLFVBQUMsS0FBVSxFQUFFLEtBQVUsRUFBRSxZQUEwQjtZQUM1RCxJQUFJLEtBQUssRUFBRTtnQkFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsS0FBSyxTQUFDLENBQUMsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQUMsRUFBUzt3QkFBUixvQkFBTztvQkFBTSxRQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsS0FBSyxTQUFDLENBQUM7Z0JBQS9CLENBQStCLENBQUMsQ0FBQzthQUMvRDtRQUNILENBQUM7UUEzQkMsS0FBSSxDQUFDLEtBQUssR0FBRztZQUNYLE9BQU8sRUFBRSxDQUFDO1lBQ1YsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDOztJQUNKLENBQUM7SUFFRCxtQ0FBaUIsR0FBakIsVUFBa0IsS0FBVSxFQUFFLElBQVM7UUFDckMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQUUsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsR0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsS0FBSyxTQUFFLElBQUksUUFBQyxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQW1CRCxvQ0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELHdCQUFNLEdBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksc0VBQUksc0RBQUMsNktBQTZCLEtBQUssQ0FBQztTQUM1RTtRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQyxPQUFPLDJEQUFDLDhDQUFRLElBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUk7WUFDcEQsMkRBQUMsaUJBQWlCLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxJQUFJLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQThCLENBQ2xGLENBQUM7SUFDZCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQ0E3QzRCLDRDQUFLLENBQUMsU0FBUyxHQTZDM0M7Ozs7Ozs7Ozs7Ozs7OztBQ3BFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7RUFFRTs7QUFFNkI7QUFDd0I7QUFvQnZEO0lBQWtDLHNFQUE0QjtJQUM1RCxzQkFBWSxLQUFZO1FBQXhCLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBSWI7UUFIQyxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSztTQUN0QyxDQUFDOztJQUNKLENBQUM7SUFFRCxnREFBeUIsR0FBekIsVUFBMkIsU0FBZ0I7UUFDekMsSUFBSSxTQUFTLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUFBLGlCQTRCQztRQTNCTyxtQkFDeUMsRUFEdkMsZ0JBQUssRUFBRSx3QkFBUyxFQUFFLHNCQUFRLEVBQUUsb0NBQWUsRUFBRSxzQ0FBZ0IsRUFBRSxvQ0FBZSxFQUFFLDhCQUFZLEVBQ2xHLDRCQUFXLEVBQUUsd0NBQWdDLENBQUM7UUFDeEMsc0NBQVUsQ0FBZ0I7UUFFbEMsSUFBSSxXQUFXO1lBQUUsT0FBTyxpQkFBaUIsS0FBSyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLDBHQUFHLEtBQUssQ0FBSTtnQkFDWiwwR0FBRyxRQUFRLENBQUksQ0FDZCxDQUFDLENBQUMsQ0FBQywwR0FDSCxRQUFRLENBQ1IsQ0FBQztRQUVKLDZDQUE2QztRQUM3QyxPQUFPLDZEQUFLLFNBQVMsRUFBRSxDQUFDLFNBQVMsSUFBRSxFQUFFLENBQUMsR0FBRyxZQUFZLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pGLDZEQUFLLFNBQVMsRUFBRSxZQUFZLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUMzRSxPQUFPLEVBQUU7b0JBQ1AsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7d0JBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUMzRSxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO2dCQUNELDZEQUFLLFNBQVMsRUFBQyxxQkFBcUI7b0JBQ2xDLGlFQUFNLEtBQUssQ0FBTztvQkFDakIsZUFBZSxJQUFJLG9EQUFDLGtFQUFZLHFEQUFLLFlBQVksRUFBRyxDQUNqRCxDQUNGO1lBQ04sNkRBQUssU0FBUyxFQUFFLGFBQWEsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUM3RSxRQUFRLENBQ0wsQ0FDRixDQUFDO0lBQ1QsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxDQTNDaUMsK0NBQWUsR0EyQ2hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEU4QjtBQUM0QjtBQUN1QjtBQUMxQztBQUNNO0FBQ3dDO0FBQ0w7QUFDbEI7QUFDbkI7QUFDNUMsSUFBTSxhQUFhLEdBQUcsd0RBQUcsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyw0Q0FBNEM7QUFXbEc7SUFBaUMsNEVBQTRCO0lBQ3pELDRCQUFZLEtBQVk7ZUFDcEIsa0JBQU0sS0FBSyxDQUFDO0lBQ2hCLENBQUM7SUFFRCwrQ0FBa0IsR0FBbEI7UUFBQSxpQkFNRztRQUxDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFHO1lBQ1YsOERBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ1MsMEJBQUksQ0FBZTtRQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDL0Isb0RBQUMsOEZBQWUsQ0FBQyxRQUFRLElBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxRQUFFO2dCQUN2QyxvREFBQyx1RUFBYyxJQUFDLGdCQUFnQixFQUFFLG9EQUFHLENBQUMsc0JBQXNCLEdBQUcsQ0FDdEMsQ0FBQyxDQUFDO1lBQzdCO2dCQUFHLG9EQUFDLHlGQUFPLE9BQUc7cURBQWlDO0lBQ25ELENBQUM7SUFDUCx5QkFBQztBQUFELENBQUMsQ0FyQmdDLCtDQUFlLEdBcUIvQztBQUVNLElBQU0saUJBQWlCLEdBQUcsa0dBQVMsQ0FBQyw2REFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0N2QztBQUN1QjtBQUUzRCxtRUFBbUU7QUFDbkUsb0RBQUcsQ0FBQyxVQUFVLEdBQUcsbURBQUksb0RBQUcsQ0FBQyxVQUFVLElBQUUsaUJBQWlCLDhFQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNKeEQ7QUFBQTtBQUFBO0FBQXdCO0FBc0N2QixDQUFDO0FBRUYsSUFBSSxDQUFDLDRDQUFHLENBQUMsR0FBRztJQUFFLDRDQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUVaLDJHQUFHLENBQUMsR0FBd0IsRUFBQztBQUNyQyxJQUFNLEdBQUcsR0FBc0IsNENBQUcsQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN0QzlDO0FBQUE7QUFBQTtBQUF3QjtBQW1CeEIsSUFBSSxDQUFDLDRDQUFHLENBQUMsR0FBRztJQUFFLDRDQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUVaLDJHQUFHLENBQUMsR0FBVSxFQUFDO0FBQ3ZCLElBQU0sR0FBRyxHQUFRLDRDQUFHLENBQUMsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMUJoQztBQUFBO0FBQU8sSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBSW5DLElBQUksTUFBTSxHQUFHLE9BQU8sR0FBRyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFFbkQsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxHQUFHLEtBQUssV0FBVyxFQUFFO0lBQzdELE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxNQUFNLENBQUM7Q0FDbEM7QUFFYyxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDWHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUNxQjtBQUNXO0FBQ2hDO0FBSXJCLElBQU0sRUFBRSxHQUFHLElBQUksOERBQWMsQ0FDbEMsY0FBSSx1REFBRyxDQUFDLGdCQUFnQixFQUFwQixDQUFvQixFQUN4QixjQUFJLHVEQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkIsZ0RBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsRUFBRSxFQUZBLENBRUEsRUFDSixjQUFJLHVEQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkIsZ0RBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxJQUFJLGdEQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELEVBQUUsRUFGQSxDQUVBLENBQUMsQ0FBQztBQUVELElBQU0sUUFBUSxHQUFHLHFFQUFXLENBQUMsZ0RBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxJQUFNLE9BQU8sR0FBRztJQUNyQixjQUFjLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQ3JFLElBQUksUUFBUSxLQUFNLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0RBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQzlGLENBQUM7QUFDSyxJQUFNLGVBQWUsR0FBRztJQUM3QixXQUFXLEVBQVgsVUFBWSxNQUFxQixFQUFFLFFBQWdCO1FBQ2pELE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBTTtZQUM1QixTQUFFLENBQUMsUUFBUTtpQkFDUixZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDYixJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNkLE9BQU8sRUFBRTtpQkFDVCxHQUFHLENBQUMsVUFBQyxFQUFJO29CQUFILFVBQUU7Z0JBQU0sU0FBRTtZQUFGLENBQUUsQ0FBQztpQkFDakIsT0FBTyxFQUFFO2lCQUNULEdBQUcsQ0FBQyxhQUFHLElBQUksVUFBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFuQyxDQUFtQyxDQUFDO1FBUGxELENBT2tELENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsbUJBQW1CLEVBQW5CLFVBQW9CLE1BQXFCLEVBQUUsUUFBZ0I7UUFDekQsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDekQsYUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBTTtnQkFDdkIsU0FBRSxDQUFDLFFBQVE7cUJBQ1IsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUJBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUM7cUJBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQztxQkFDZCxPQUFPLEVBQUU7cUJBQ1QsZ0JBQWdCLENBQUMsWUFBRTtvQkFDbEIsd0RBQXdEO29CQUN4RCxtR0FBbUc7b0JBQ25HLGlDQUFpQztvQkFDakMsSUFBTSxFQUFFLEdBQUcsb0VBQVUsRUFBRSxDQUFDO29CQUN4QixFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTt3QkFDakIsRUFBRTt3QkFDRixHQUFHLEVBQUU7NEJBQ0gsYUFBYTs0QkFDYixnQkFBYyxNQUFNLENBQUMsSUFBSSxnQkFBYTt5QkFDdkM7d0JBQ0QsSUFBSSxFQUFFLE9BQU87d0JBQ2IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO3dCQUNuQixZQUFZLEVBQUUsTUFBTSxDQUFDLGdCQUFnQjt3QkFDckMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQUNQLENBQUMsQ0FBQztvQkFDYixzRkFBc0Y7b0JBQ3RGLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDeEUsQ0FBQyxDQUFDO3FCQUNELE1BQU0sRUFBRTtxQkFDUixHQUFHLENBQUMsVUFBQyxFQUFJO3dCQUFILFVBQUU7b0JBQU0sU0FBRTtnQkFBRixDQUFFLENBQUM7WUF6QnBCLENBeUJvQixDQUFDO1FBMUJyQixDQTBCcUIsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxtQkFBbUIsRUFBbkIsVUFBb0IsUUFBZ0I7UUFDbEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQ3BELEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUNsRCxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FDOUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDakMsR0FBRyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsRUFBRSxFQUFKLENBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7OztBQzNFRDtBQUFBO0FBQU8sSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBSW5DLElBQUksTUFBTSxHQUFHLE9BQU8sR0FBRyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFFbkQsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxHQUFHLEtBQUssV0FBVyxFQUFFO0lBQzdELE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxNQUFNLENBQUM7Q0FDbEM7QUFFYyxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGYsU0FBUyxnQkFBZ0IsQ0FBQyxjQUFzQixFQUFFLE9BQWlDO0lBQ2pGLHFDQUFPLENBQStDO0lBQzdELElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixJQUFJLGNBQWMsSUFBSSxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDN0MsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDckIsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLEdBQUcsQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLHlCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE1QixDQUE0QixDQUFDLEVBQXRELENBQXNELENBQUM7YUFDbkUsT0FBTyxDQUFDLFVBQUMsRUFBWTtnQkFBWix3REFBWSxFQUFYLFdBQUcsRUFBRSxhQUFLO1lBQU0sYUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLO1FBQWpELENBQWlELENBQUMsQ0FBQztJQUNsRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsTUFBOEI7SUFDbEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFHLElBQUksYUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFHLElBQUksT0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsU0FBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUcsRUFBL0QsQ0FBK0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1SixDQUFDO0FBRU0sU0FBUyxtQkFBbUIsQ0FBQyxNQUE4QjtJQUNoRSxPQUFPLEdBQUcsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVNLFNBQVMsb0JBQW9CLENBQUMsWUFBb0IsRUFBRSxPQUFpQztJQUMxRixPQUFPLGdCQUFnQixDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRU0sU0FBUyx1QkFBdUIsQ0FBQyxNQUE4QjtJQUNwRSxPQUFPLEdBQUcsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVNLFNBQVMsZ0JBQWdCLENBQUUsb0JBQTRCO0lBQzVELElBQU0sTUFBTSxHQUFHLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRCxPQUFPLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DTSxTQUFTLGVBQWUsQ0FBRSxHQUFHO0lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDbEMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRTtZQUM1QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVFO0tBQ0o7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUUsU0FBUztJQUNqQyxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVE7UUFBRSxPQUFPLEdBQUcsQ0FBQztJQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFHO1FBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFFTSxTQUFTLEtBQUssQ0FBTyxHQUFPLEVBQUUsU0FBYTtJQUM5QyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDZixNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQUc7UUFDdkMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDLENBQUMsQ0FBQztJQUNILElBQUksU0FBUztRQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDeEMsT0FBTyxLQUFnQixDQUFDO0FBQzVCLENBQUM7QUFFRCxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0FBQ2xCLFNBQVMsT0FBTyxDQUFLLENBQWU7SUFDdkMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQVEsQ0FBQztBQUN0QyxDQUFDO0FBRU0sU0FBUyxXQUFXLENBQUksSUFBWTtJQUN2QyxPQUFPLFVBQUMsQ0FBSSxFQUFDLENBQUk7UUFDYixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxPQUFPLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0FBQ0wsQ0FBQztBQUVNLFNBQVMsWUFBWSxDQUN4QixLQUF3QixFQUN4QixPQUEyQixFQUMzQixPQUE4QjtJQUU5QixLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRS9DLElBQU0sYUFBYSxHQUFHLFVBQUMsQ0FBQyxFQUFDLENBQUM7UUFDdEIsY0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUY5QixDQUU4QixDQUFDO0lBRW5DLFNBQVMsT0FBTyxDQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsU0FBaUIsRUFBQyxJQUFjO1FBQ2xELElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsSUFBSSxNQUFNLEtBQUssTUFBTTtZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksTUFBTSxJQUFJLElBQUk7WUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksTUFBTSxJQUFJLElBQUk7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsYUFBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELE9BQU8sS0FBSztTQUNQLEdBQUcsQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBZixDQUFlLENBQUM7U0FDNUIsR0FBRyxDQUFDLFVBQUMsRUFBb0I7WUFBcEIscURBQW9CLEVBQW5CLGlCQUFTLEVBQUUsa0JBQU87UUFBTSxpQkFBQyxDQUFDLEVBQUMsQ0FBQyxJQUFLLGNBQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBN0IsQ0FBNkI7SUFBdEMsQ0FBc0MsQ0FBQztTQUNyRSxNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUUsSUFBSTtRQUNmLGlCQUFDLENBQUMsRUFBQyxDQUFDLElBQUssV0FBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUF0QixDQUFzQjtJQUEvQixDQUErQixDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUVNLFNBQVMsQ0FBQyxDQUFDLElBQUk7SUFBRSxjQUFPO1NBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztRQUFQLDZCQUFPOztJQUMzQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsT0FBTyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBRSxJQUFJLEVBQUUsSUFBSTtJQUM3QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNuQyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDN0I7SUFDRCxPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFFRDtJQUNJLFlBQVksUUFBVztRQUNuQixNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDTCxTQUFDO0FBQUQsQ0FBQzs7QUFFTSxTQUFTLGVBQWUsQ0FBRSxHQUFHLEVBQUUsS0FBSztJQUN2QyxJQUFJLENBQUMsQ0FBQztJQUNOLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzNCLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEVBQUU7WUFDSCxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7S0FDSjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxxQkFBcUI7QUFDZCxTQUFTLFFBQVEsQ0FBRSxHQUFHO0lBQ3pCLElBQUksS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVNLFNBQVMsU0FBUyxDQUFFLE1BQXNCO0lBQzdDLElBQU0sR0FBRyxHQUFHLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pFLElBQUksS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLGFBQWEsRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzlELE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRU0sU0FBUyxTQUFTLENBQUMsR0FBVyxFQUFFLE1BQWM7SUFDakQsT0FBTyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuQyxHQUFHLENBQUM7QUFDWixDQUFDO0FBRU0sU0FBUyxhQUFhLENBQUksQ0FBTSxFQUFFLFdBQXlDO0lBQzlFLElBQU0sTUFBTSxHQUEyQixFQUFFLENBQUM7SUFDMUMsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNoQyxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLEtBQUs7WUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3QjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFTSxTQUFTLFVBQVUsQ0FBSSxDQUFNLEVBQUUsV0FBeUM7SUFDM0UsSUFBTSxNQUFNLEdBQXlCLEVBQUUsQ0FBQztJQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ2hDLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztLQUN0QjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFTSxTQUFTLGVBQWUsQ0FBSyxHQUFNLEVBQUUsV0FBcUI7O0lBQzdELElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQzs7UUFDbEIsS0FBb0IsOEVBQVcsMEdBQUU7WUFBNUIsSUFBTSxLQUFLO1lBQ2QsSUFBSSxLQUFLLElBQUksR0FBRztnQkFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlDOzs7Ozs7Ozs7SUFDRCxPQUFPLE1BQW9CLENBQUM7QUFDaEMsQ0FBQztBQUVNLFNBQVMsUUFBUSxDQUFLLENBQU0sRUFBRSxXQUE4QjtJQUMvRCxJQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxFQUFFLFdBQVcsSUFBSSxDQUFDLFdBQUMsSUFBSSxRQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUcsSUFBSSxVQUFHLENBQUMsR0FBRyxDQUFDLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUVNLFNBQVMsYUFBYSxDQUFDLENBQU0sRUFBRSxDQUFNO0lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUN6QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzNCLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVE7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNqRSxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDaEQsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNwQyxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztLQUN2QztJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7OztBQ3RLRCxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSx1Qjs7Ozs7Ozs7Ozs7QUNBQSwwQiIsImZpbGUiOiJrZWRhcHB0ZWFjaGVydmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJrZWRhcHB0ZWFjaGVydmlld1wiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2VsZW1lbnRzL0tFREFwcFRlYWNoZXJWaWV3L3dlYnBhY2stZW50cnkudHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtY2xpZW50JzsiLCJ2YXIgRG9jdW1lbnRBY2Nlc3MgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnRBY2Nlc3MoYWNjZXNzQ2xhaW1UeXBlLCBhY2Nlc3NDbGFpbVZhbHVlLCByaWdodCkge1xuICAgICAgICB0aGlzLmFjY2Vzc0NsYWltVHlwZSA9IGFjY2Vzc0NsYWltVHlwZTtcbiAgICAgICAgdGhpcy5hY2Nlc3NDbGFpbVZhbHVlID0gYWNjZXNzQ2xhaW1WYWx1ZTtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIH1cbiAgICBEb2N1bWVudEFjY2Vzcy5mcm9tU3RyaW5nID0gZnVuY3Rpb24gKGFjKSB7XG4gICAgICAgIGlmICghYWMpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHNwbGl0ID0gYWMuc3BsaXQoJzonKTtcbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA8IDMpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFjY2VzcyBzdHJpbmc6IFwiICsgYWMpO1xuICAgICAgICB2YXIgY2xhaW1UeXBlID0gRG9jdW1lbnRBY2Nlc3MudW5lc2NhcGUoc3BsaXRbMF0pO1xuICAgICAgICB2YXIgY2xhaW1WYWx1ZSA9IERvY3VtZW50QWNjZXNzLnVuZXNjYXBlKHNwbGl0WzFdKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gc3BsaXRbMl07XG4gICAgICAgIGlmIChyaWdodCAhPT0gJ1InICYmIHJpZ2h0ICE9PSAnVycgJiYgcmlnaHQgIT09ICdTJylcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYWNjZXNzIHN0cmluZzogXCIgKyBhYyk7XG4gICAgICAgIHJldHVybiBuZXcgRG9jdW1lbnRBY2Nlc3MoY2xhaW1UeXBlLCBjbGFpbVZhbHVlLCByaWdodCk7XG4gICAgfTtcbiAgICBEb2N1bWVudEFjY2Vzcy5lc2NhcGUgPSBmdW5jdGlvbiAoYWNjZXNzQ29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBhY2Nlc3NDb21wb25lbnQucmVwbGFjZSgvXFwlL2csIFwiJTI1XCIpLnJlcGxhY2UoL1xcOi9nLCBcIiUzQVwiKTtcbiAgICB9O1xuICAgIERvY3VtZW50QWNjZXNzLnVuZXNjYXBlID0gZnVuY3Rpb24gKGFjY2Vzc0NvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gYWNjZXNzQ29tcG9uZW50LnJlcGxhY2UoL1xcJTNBL2csIFwiOlwiKS5yZXBsYWNlKC9cXCUyNS9nLCBcIiVcIik7XG4gICAgfTtcbiAgICBEb2N1bWVudEFjY2Vzcy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBEb2N1bWVudEFjY2Vzcy5lc2NhcGUodGhpcy5hY2Nlc3NDbGFpbVR5cGUpICsgXCI6XCIgK1xuICAgICAgICAgICAgRG9jdW1lbnRBY2Nlc3MuZXNjYXBlKHRoaXMuYWNjZXNzQ2xhaW1WYWx1ZSkgKyBcIjpcIiArXG4gICAgICAgICAgICB0aGlzLnJpZ2h0O1xuICAgIH07XG4gICAgRG9jdW1lbnRBY2Nlc3MuZnJvbVN0cmluZ0FycmF5ID0gZnVuY3Rpb24gKGFjbCkge1xuICAgICAgICByZXR1cm4gYWNsXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChhYykgeyByZXR1cm4gRG9jdW1lbnRBY2Nlc3MuZnJvbVN0cmluZyhhYyk7IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChhYykgeyByZXR1cm4gYWM7IH0pO1xuICAgIH07XG4gICAgRG9jdW1lbnRBY2Nlc3MudG9TdHJpbmdBcnJheSA9IGZ1bmN0aW9uIChhY2wpIHtcbiAgICAgICAgcmV0dXJuIGFjbC5tYXAoZnVuY3Rpb24gKGFjKSB7IHJldHVybiBhYy50b1N0cmluZygpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBEb2N1bWVudEFjY2Vzcztcbn0oKSk7XG5leHBvcnQgeyBEb2N1bWVudEFjY2VzcyB9O1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0FjY2VzcyhhY2wsIHVzZXJDbGFpbXMsIHJlcXVlc3RlZFJpZ2h0KSB7XG4gICAgaWYgKHVzZXJDbGFpbXMuc29tZShmdW5jdGlvbiAoY2xhaW0pIHsgcmV0dXJuIGNsYWltLnR5cGUgPT09ICdyb2xlJyAmJiBjbGFpbS52YWx1ZSA9PT0gXCJBRE1JTlwiOyB9KSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGFjbC5zb21lKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiB1c2VyQ2xhaW1zLnNvbWUoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBhLmFjY2Vzc0NsYWltVHlwZSA9PT0gYy50eXBlICYmXG4gICAgICAgICAgICAgICAgYS5hY2Nlc3NDbGFpbVZhbHVlID09PSBjLnZhbHVlICYmICgoYS5yaWdodCA9PT0gJ1InICYmIHJlcXVlc3RlZFJpZ2h0ID09PSAnUicpIHx8XG4gICAgICAgICAgICAgICAgKGEucmlnaHQgPT09ICdXJyAmJiBbJ1InLCAnVyddLmluZGV4T2YocmVxdWVzdGVkUmlnaHQpID49IDApIHx8XG4gICAgICAgICAgICAgICAgKGEucmlnaHQgPT09ICdTJykpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFjY2Vzcy1jb250cm9sLmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG52YXIgSHR0cEVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEh0dHBFcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIdHRwRXJyb3IoY29kZSwgbWVzc2FnZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBcIkhUVFBcIiArIGNvZGUgKyBcIiBcIiArIG1lc3NhZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICBfdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgX3RoaXMubmFtZSA9IFwiaHR0cFwiICsgY29kZTtcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IFwiSFRUUFwiICsgY29kZSArIFwiIFwiICsgbWVzc2FnZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSHR0cEVycm9yO1xufShFcnJvcikpO1xuZXhwb3J0IHsgSHR0cEVycm9yIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwLWVycm9yLmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBSZXN0Q2xpZW50IH0gZnJvbSAnLi9yZXN0Y2xpZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IHsgS2VkQmVhcmVyUHJvdmlkZXIgfSBmcm9tICcuL2tlZC1iZWFyZXItcHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9hY2Nlc3MtY29udHJvbCc7XG5leHBvcnQgeyBSZXN0Q2xpZW50IH07XG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICcuL2h0dHAtZXJyb3InO1xuZXhwb3J0IHsgSHR0cEVycm9yIH07XG5leHBvcnQgKiBmcm9tICcuL3Jlc3RjbGllbnQnO1xuO1xuLy8gfCAnb3RoZXJGbGFnJyB8ICd0aGlyZEZsYWcnOy4uLlxudmFyIEtlZEJhY2tlbmRDbGllbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gS2VkQmFja2VuZENsaWVudChpc29tb3JwaGljLCBiZWFyZXJQcm92aWRlciwgYmFzZVVybCkge1xuICAgICAgICB0aGlzLmh0dHAgPSBuZXcgUmVzdENsaWVudChpc29tb3JwaGljLCBiYXNlVXJsLCB7IGJlYXJlclByb3ZpZGVyOiBiZWFyZXJQcm92aWRlciB9KTtcbiAgICB9XG4gICAgS2VkQmFja2VuZENsaWVudC5wcm90b3R5cGUuZ2V0TXlDbGFpbXMgPSBmdW5jdGlvbiAodGFibGUsIGZldGNoT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXMsIF9hLCBfYjtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmh0dHAuZ2V0KFwibWUvY2xhaW1zL1wiICsgKHRhYmxlIHx8IFwiXCIpLCBudWxsLCBmZXRjaE9wdGlvbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocmVzLnN0YXR1cyAhPSAyMDApKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gSHR0cEVycm9yLmJpbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IFt2b2lkIDAsIHJlcy5zdGF0dXNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLnRleHQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IChfYS5hcHBseShIdHRwRXJyb3IsIF9iLmNvbmNhdChbX2Muc2VudCgpXSkpKSgpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy5qc29uKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovLCBfYy5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh0YWJsZSwgaWQsIG9wdGlvbnMsIGZldGNoT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXMsIF9hLCBfYjtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmh0dHAuZ2V0KHRhYmxlICsgXCIvXCIgKyBpZCwgb3B0aW9ucywgZmV0Y2hPcHRpb25zKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHJlcy5zdGF0dXMgIT0gMjAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IEh0dHBFcnJvci5iaW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSBbdm9pZCAwLCByZXMuc3RhdHVzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy50ZXh0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyAoX2EuYXBwbHkoSHR0cEVycm9yLCBfYi5jb25jYXQoW19jLnNlbnQoKV0pKSkoKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMuanNvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Muc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ2xpZW50LnByb3RvdHlwZS5saXN0ID0gZnVuY3Rpb24gKHRhYmxlLCBvcHRpb25zLCBmZXRjaE9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcXVlcnksIHJlcywgX2EsIF9iO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSA9IHRzbGliXzEuX19hc3NpZ24oe30sIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygndXNlU1AnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LmZsYWdzID0gKHF1ZXJ5LmZsYWdzIHx8IFtdKS5jb25jYXQoWyd1c2VTUCddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubXV0YXRpb25zT25FbXB0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5tdXRhdGlvbnNPbkVtcHR5ID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5tdXRhdGlvbnNPbkVtcHR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuaHR0cC5nZXQoXCJcIiArIHRhYmxlLCBxdWVyeSwgZmV0Y2hPcHRpb25zKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHJlcy5zdGF0dXMgIT0gMjAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IEh0dHBFcnJvci5iaW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSBbdm9pZCAwLCByZXMuc3RhdHVzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy50ZXh0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyAoX2EuYXBwbHkoSHR0cEVycm9yLCBfYi5jb25jYXQoW19jLnNlbnQoKV0pKSkoKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMuanNvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Muc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ2xpZW50LnByb3RvdHlwZS5iYXRjaCA9IGZ1bmN0aW9uIChyZXFzLCBmZXRjaE9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzLCBfYSwgX2I7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlb3JkZXIgb3BlcmF0aW9ucyBzbyB0aGF0ICdhZGQncyBjb21lIGZpcnN0IGFuZCAnZGVsZXRlJ3MgY29tZSBsYXN0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxcyA9IHJlcXMuc2xpY2UoKS5zb3J0KGZ1bmN0aW9uIChyZXExLCByZXEyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcTEub3AgPT09ICdhZGQnID8gLTEgOiByZXEyLm9wID09PSAnYWRkJyA/IDEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXExLm9wID09PSAnZGVsZXRlJyA/IDEgOiByZXEyLm9wID09PSAnZGVsZXRlJyA/IC0xIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5odHRwLnBvc3QoXCJiYXRjaFwiLCByZXFzLCBmZXRjaE9wdGlvbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocmVzLnN0YXR1cyAhPSAyMDApKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gSHR0cEVycm9yLmJpbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IFt2b2lkIDAsIHJlcy5zdGF0dXNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLnRleHQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IChfYS5hcHBseShIdHRwRXJyb3IsIF9iLmNvbmNhdChbX2Muc2VudCgpXSkpKSgpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy5qc29uKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovLCBfYy5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLmRvID0gZnVuY3Rpb24gKHNjb3BlRm4pIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcnVubmVyO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5uZXIgPSBuZXcgQmF0Y2hSdW5uZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlRm4ocnVubmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuYmF0Y2gocnVubmVyLm11dGF0aW9uUmVxdWVzdHMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ2xpZW50LnByb3RvdHlwZS5kZWxldGVSZWFsbSA9IGZ1bmN0aW9uIChyZWFsbSkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXMsIF9hLCBfYjtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmh0dHAuZGVsZXRlKFwicmVhbG1zL1wiICsgcmVhbG0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocmVzLnN0YXR1cyAhPSAyMDApKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gSHR0cEVycm9yLmJpbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IFt2b2lkIDAsIHJlcy5zdGF0dXNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLnRleHQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IChfYS5hcHBseShIdHRwRXJyb3IsIF9iLmNvbmNhdChbX2Muc2VudCgpXSkpKSgpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy5qc29uKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovLCBfYy5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0YWJsZSwgZG9jLCBicmFuY2hJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kbyhmdW5jdGlvbiAocikgeyByZXR1cm4gci5hZGQodGFibGUsIGRvYyk7IH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENsaWVudC5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKHRhYmxlLCBkb2MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG8oZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIucHV0KHRhYmxlLCBkb2MpOyB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICh0YWJsZSwgaWQsIGRlbHRhRG9jLCBicmFuY2hJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kbyhmdW5jdGlvbiAocikgeyByZXR1cm4gci51cGRhdGUodGFibGUsIGlkLCBkZWx0YURvYywgYnJhbmNoSWQpOyB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKGJyYW5jaElkLCB0YXJnZXRCcmFuY2hJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kbyhmdW5jdGlvbiAocikgeyByZXR1cm4gci5tZXJnZShicmFuY2hJZCwgdGFyZ2V0QnJhbmNoSWQpOyB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLmNsZWFyQnJhbmNoID0gZnVuY3Rpb24gKGJyYW5jaElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLmNsZWFyQnJhbmNoKGJyYW5jaElkKTsgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ2xpZW50LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodGFibGUsIGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLmRlbGV0ZSh0YWJsZSwgaWQpOyB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLnNoYXJlID0gZnVuY3Rpb24gKHRhYmxlLCBpZCwgYWNsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLnNoYXJlKHRhYmxlLCBpZCwgYWNsKTsgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ2xpZW50LnByb3RvdHlwZS51bnNoYXJlID0gZnVuY3Rpb24gKHRhYmxlLCBpZCwgYWNsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLnVuc2hhcmUodGFibGUsIGlkLCBhY2wpOyB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLmxpbmsgPSBmdW5jdGlvbiAoc291cmNlVGFibGUsIHNvdXJjZUlkLCB0YXJnZXRUYWJsZSwgdGFyZ2V0SWQsIGxhYmVsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLmxpbmsoc291cmNlVGFibGUsIHNvdXJjZUlkLCB0YXJnZXRUYWJsZSwgdGFyZ2V0SWQsIGxhYmVsKTsgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ2xpZW50LnByb3RvdHlwZS5saW5rMiA9IGZ1bmN0aW9uIChzb3VyY2VUYWJsZSwgc291cmNlSWQsIHRhcmdldElkLCBsYWJlbCwgYnJhbmNoSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG8oZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIubGluazIoc291cmNlVGFibGUsIHNvdXJjZUlkLCBsYWJlbCwgdGFyZ2V0SWQsIGJyYW5jaElkKTsgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ2xpZW50LnByb3RvdHlwZS51bmxpbmsgPSBmdW5jdGlvbiAoc291cmNlVGFibGUsIHNvdXJjZUlkLCB0YXJnZXRUYWJsZSwgdGFyZ2V0SWQsIGxhYmVsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLnVubGluayhzb3VyY2VUYWJsZSwgc291cmNlSWQsIHRhcmdldFRhYmxlLCB0YXJnZXRJZCwgbGFiZWwpOyB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLnVubGluazIgPSBmdW5jdGlvbiAoc291cmNlVGFibGUsIHNvdXJjZUlkLCB0YXJnZXRJZCwgbGFiZWwsIGJyYW5jaElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLnVubGluazIoc291cmNlVGFibGUsIHNvdXJjZUlkLCBsYWJlbCwgdGFyZ2V0SWQsIGJyYW5jaElkKTsgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ2xpZW50LnByb3RvdHlwZS51bmRvTGluayA9IGZ1bmN0aW9uIChzb3VyY2VUYWJsZSwgc291cmNlSWQsIHRhcmdldElkLCBsYWJlbCwgYnJhbmNoSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG8oZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIudW5kb0xpbmsoc291cmNlVGFibGUsIHNvdXJjZUlkLCBsYWJlbCwgdGFyZ2V0SWQsIGJyYW5jaElkKTsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gS2VkQmFja2VuZENsaWVudDtcbn0oKSk7XG5leHBvcnQgeyBLZWRCYWNrZW5kQ2xpZW50IH07XG52YXIgQmF0Y2hSdW5uZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmF0Y2hSdW5uZXIoKSB7XG4gICAgICAgIHRoaXMubXV0YXRpb25SZXF1ZXN0cyA9IFtdO1xuICAgIH1cbiAgICBCYXRjaFJ1bm5lci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRhYmxlLCBkb2MsIGJyYW5jaElkKSB7XG4gICAgICAgIHRoaXMubXV0YXRpb25SZXF1ZXN0cy5wdXNoKHsgb3A6ICdhZGQnLCB0YWJsZTogdGFibGUsIGRvYzogZG9jLCBicmFuY2hJZDogYnJhbmNoSWQgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQmF0Y2hSdW5uZXIucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uICh0YWJsZSwgZG9jKSB7XG4gICAgICAgIGRvYyA9IHRzbGliXzEuX19hc3NpZ24oe30sIGRvYyk7XG4gICAgICAgIGRlbGV0ZSBkb2MuYWNsOyAvLyBGb3JiaWRkZW4gdG8gc2VuZCBhY2wgd2l0aCBwdXQoKSBjYWxscy5cbiAgICAgICAgdGhpcy5tdXRhdGlvblJlcXVlc3RzLnB1c2goeyBvcDogJ3B1dCcsIHRhYmxlOiB0YWJsZSwgZG9jOiBkb2MgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQmF0Y2hSdW5uZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICh0YWJsZSwgaWQsIGRlbHRhRG9jLCBicmFuY2hJZCkge1xuICAgICAgICBkZWx0YURvYyA9IHRzbGliXzEuX19hc3NpZ24oe30sIGRlbHRhRG9jKTtcbiAgICAgICAgdGhpcy5tdXRhdGlvblJlcXVlc3RzLnB1c2goeyBvcDogJ3VwZGF0ZScsIHRhYmxlOiB0YWJsZSwgaWQ6IGlkLCBkZWx0YURvYzogZGVsdGFEb2MsIGJyYW5jaElkOiBicmFuY2hJZCB9KTtcbiAgICB9O1xuICAgIEJhdGNoUnVubmVyLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIChicmFuY2hJZCwgdGFyZ2V0QnJhbmNoSWQpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvblJlcXVlc3RzLnB1c2goeyBvcDogJ21lcmdlJywgYnJhbmNoSWQ6IGJyYW5jaElkLCB0YXJnZXRCcmFuY2hJZDogdGFyZ2V0QnJhbmNoSWQgfSk7XG4gICAgfTtcbiAgICBCYXRjaFJ1bm5lci5wcm90b3R5cGUuY2xlYXJCcmFuY2ggPSBmdW5jdGlvbiAoYnJhbmNoSWQpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvblJlcXVlc3RzLnB1c2goeyBvcDogJ2NsZWFyLWJyYW5jaCcsIGJyYW5jaElkOiBicmFuY2hJZCB9KTtcbiAgICB9O1xuICAgIEJhdGNoUnVubmVyLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodGFibGUsIGlkKSB7XG4gICAgICAgIHRoaXMubXV0YXRpb25SZXF1ZXN0cy5wdXNoKHsgb3A6ICdkZWxldGUnLCB0YWJsZTogdGFibGUsIGlkOiBpZCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBCYXRjaFJ1bm5lci5wcm90b3R5cGUuc2hhcmUgPSBmdW5jdGlvbiAodGFibGUsIGlkLCBhY2wpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvblJlcXVlc3RzLnB1c2goeyBvcDogJ3NoYXJlJywgdGFibGU6IHRhYmxlLCBpZDogaWQsIGFjbDogYWNsIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEJhdGNoUnVubmVyLnByb3RvdHlwZS51bnNoYXJlID0gZnVuY3Rpb24gKHRhYmxlLCBpZCwgYWNsKSB7XG4gICAgICAgIHRoaXMubXV0YXRpb25SZXF1ZXN0cy5wdXNoKHsgb3A6ICd1bnNoYXJlJywgdGFibGU6IHRhYmxlLCBpZDogaWQsIGFjbDogYWNsIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEJhdGNoUnVubmVyLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24gKHNvdXJjZVRhYmxlLCBzb3VyY2VJZCwgdGFyZ2V0VGFibGUsIHRhcmdldElkLCBsYWJlbCkge1xuICAgICAgICB0aGlzLm11dGF0aW9uUmVxdWVzdHMucHVzaCh7IG9wOiAnbGluaycsIHNvdXJjZVRhYmxlOiBzb3VyY2VUYWJsZSwgc291cmNlSWQ6IHNvdXJjZUlkLCB0YXJnZXRUYWJsZTogdGFyZ2V0VGFibGUsIHRhcmdldElkOiB0YXJnZXRJZCwgbGFiZWw6IGxhYmVsIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEJhdGNoUnVubmVyLnByb3RvdHlwZS5saW5rMiA9IGZ1bmN0aW9uIChzb3VyY2VUYWJsZSwgc291cmNlSWQsIGxhYmVsLCB0YXJnZXRJZCwgYnJhbmNoSWQpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvblJlcXVlc3RzLnB1c2goeyBvcDogJ2xpbmsnLCBzb3VyY2VUYWJsZTogc291cmNlVGFibGUsIHNvdXJjZUlkOiBzb3VyY2VJZCwgdGFyZ2V0SWQ6IHRhcmdldElkLCBsYWJlbDogbGFiZWwsIGJyYW5jaElkOiBicmFuY2hJZCB9KTtcbiAgICB9O1xuICAgIEJhdGNoUnVubmVyLnByb3RvdHlwZS51bmxpbmsgPSBmdW5jdGlvbiAoc291cmNlVGFibGUsIHNvdXJjZUlkLCB0YXJnZXRUYWJsZSwgdGFyZ2V0SWQsIGxhYmVsKSB7XG4gICAgICAgIHRoaXMubXV0YXRpb25SZXF1ZXN0cy5wdXNoKHsgb3A6ICd1bmxpbmsnLCBzb3VyY2VUYWJsZTogc291cmNlVGFibGUsIHNvdXJjZUlkOiBzb3VyY2VJZCwgdGFyZ2V0VGFibGU6IHRhcmdldFRhYmxlLCB0YXJnZXRJZDogdGFyZ2V0SWQsIGxhYmVsOiBsYWJlbCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBCYXRjaFJ1bm5lci5wcm90b3R5cGUudW5saW5rMiA9IGZ1bmN0aW9uIChzb3VyY2VUYWJsZSwgc291cmNlSWQsIGxhYmVsLCB0YXJnZXRJZCwgYnJhbmNoSWQpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvblJlcXVlc3RzLnB1c2goeyBvcDogJ3VubGluaycsIHNvdXJjZVRhYmxlOiBzb3VyY2VUYWJsZSwgc291cmNlSWQ6IHNvdXJjZUlkLCB0YXJnZXRJZDogdGFyZ2V0SWQsIGxhYmVsOiBsYWJlbCwgYnJhbmNoSWQ6IGJyYW5jaElkIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEJhdGNoUnVubmVyLnByb3RvdHlwZS51bmRvTGluayA9IGZ1bmN0aW9uIChzb3VyY2VUYWJsZSwgc291cmNlSWQsIGxhYmVsLCB0YXJnZXRJZCwgYnJhbmNoSWQpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvblJlcXVlc3RzLnB1c2goeyBvcDogJ3VuZG8tbGluaycsIHNvdXJjZVRhYmxlOiBzb3VyY2VUYWJsZSwgc291cmNlSWQ6IHNvdXJjZUlkLCB0YXJnZXRJZDogdGFyZ2V0SWQsIGxhYmVsOiBsYWJlbCwgYnJhbmNoSWQ6IGJyYW5jaElkIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEJhdGNoUnVubmVyO1xufSgpKTtcbmV4cG9ydCB7IEJhdGNoUnVubmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgUmVzdENsaWVudCB9IGZyb20gJy4vcmVzdGNsaWVudCc7XG5pbXBvcnQgeyBhdm9pZFNpbXVsdGFub3VzQ2FsbHMgfSBmcm9tICcuL3V0aWxzJztcbnZhciBLZWRCZWFyZXJQcm92aWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLZWRCZWFyZXJQcm92aWRlcihpc29tb3JwaGljLCBzdG9yYWdlLCB0b2tlbklkLCBjbGllbnRJZCwgY2xpZW50U2VjcmV0LCB0b2tlblVybCwgdG9rZW5RdWVyeSkge1xuICAgICAgICB0aGlzLmlzb21vcnBoaWMgPSBpc29tb3JwaGljO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xuICAgICAgICB0aGlzLnRva2VuSWQgPSB0b2tlbklkO1xuICAgICAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XG4gICAgICAgIHRoaXMuY2xpZW50U2VjcmV0ID0gY2xpZW50U2VjcmV0O1xuICAgICAgICB0aGlzLnRva2VuVXJsID0gdG9rZW5Vcmw7XG4gICAgICAgIHRoaXMudG9rZW5RdWVyeSA9IHRva2VuUXVlcnk7XG4gICAgICAgIHRoaXMudG9rZW5JbmZvID0geyB0b2tlbjogbnVsbCwgZXhwaXJlczogMCB9O1xuICAgICAgICB0aGlzLmNsaWVudCA9IG5ldyBSZXN0Q2xpZW50KGlzb21vcnBoaWMsIFwiXCIsIHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLmNsaWVudElkLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuY2xpZW50U2VjcmV0XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdldEJlYXJlciA9IGF2b2lkU2ltdWx0YW5vdXNDYWxscyh0aGlzLmdldEJlYXJlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoQmVhcmVyID0gYXZvaWRTaW11bHRhbm91c0NhbGxzKHRoaXMucmVmcmVzaEJlYXJlci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgS2VkQmVhcmVyUHJvdmlkZXIucHJvdG90eXBlLmdldEJlYXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIHRva2VuLCBleHBpcmVzLCBfYiwgZV8xO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXMudG9rZW5JbmZvLCB0b2tlbiA9IF9hLnRva2VuLCBleHBpcmVzID0gX2EuZXhwaXJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbiAmJiBleHBpcmVzID49IERhdGUubm93KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMudG9rZW5JbmZvXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFsxLCA0LCAsIDZdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc3RvcmFnZS5sb2FkKHRoaXMuY2xpZW50SWQgKyBcIi9cIiArIHRoaXMudG9rZW5JZCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50b2tlbkluZm8gPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b2tlbkluZm8udG9rZW4gJiYgdGhpcy50b2tlbkluZm8uZXhwaXJlcyA+PSBEYXRlLm5vdygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnRva2VuSW5mb107XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlZnJlc2hCZWFyZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnRva2VuSW5mb107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVmcmVzaEJlYXJlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMudG9rZW5JbmZvXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgS2VkQmVhcmVyUHJvdmlkZXIucHJvdG90eXBlLnJlZnJlc2hCZWFyZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlcywgcmV0cmllcywgX2EsIF9iO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXRyaWVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocmV0cmllcyA8IDYpKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmV0cmlldmluZyB0b2tlbiBmb3IgXCIgKyB0aGlzLnRva2VuSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jbGllbnQuZ2V0KHRoaXMudG9rZW5VcmwsIHRoaXMudG9rZW5RdWVyeSwgeyBjYWNoZTogJ3JlbG9hZCcgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiR290IFwiICsgcmVzLnN0YXR1cyArIFwiIFwiICsgcmVzLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy50ZXh0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50b2tlbkluZm8gPSAoX2IudG9rZW4gPSBfYy5zZW50KCksIF9iLmV4cGlyZXMgPSBEYXRlLm5vdygpICsgNTkgKiA2MCAqIDEwMDAsIF9iKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR290IHRva2VuIGZvciBcIiArIHRoaXMudG9rZW5JZCArIFwiOiBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMudG9rZW5JbmZvKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2F2ZSh0aGlzLmNsaWVudElkICsgXCIvXCIgKyB0aGlzLnRva2VuSWQsIHRoaXMudG9rZW5JbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnRva2VuSW5mb107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICsrcmV0cmllcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byByZXRyaWV2ZSB0b2tlbiBmb3IgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnRva2VuSWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gS2VkQmVhcmVyUHJvdmlkZXI7XG59KCkpO1xuZXhwb3J0IHsgS2VkQmVhcmVyUHJvdmlkZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWtlZC1iZWFyZXItcHJvdmlkZXIuanMubWFwIiwiLypcbmRlY2xhcmUgdmFyIEJ1ZmZlcjsgLy8gbm9kZSBidWlsdC1pblxuXG5cbmZ1bmN0aW9uIGJhc2ljQXV0aEhlYWRlcih1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gXCJCYXNpYyBcIiArIG5ldyBCdWZmZXIodXNlcm5hbWUgKyBcIjpcIiArIHBhc3N3b3JkKS50b1N0cmluZyhcImJhc2U2NFwiKTtcbn1cbiovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgY3JlYXRlVVVJRCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBFbWl0dGVyIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9lbWl0dGVyJztcbnZhciBSZXN0Q2xpZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc3RDbGllbnQoaXNvbW9ycGhpYywgYmFzZVVybCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmlzb21vcnBoaWMgPSBpc29tb3JwaGljO1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLm51bU91dHN0YW5kaW5nT3BlcmF0aW9ucyA9IDA7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IG5ldyBFbWl0dGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmZldGNoT3B0aW9ucyA9IHsgbW9kZTogJ2NvcnMnIH07XG4gICAgICAgIHRoaXMuYXV0aEhlYWRlciA9IG9wdGlvbnMuYmVhcmVyID9cbiAgICAgICAgICAgIFwiQmVhcmVyIFwiICsgb3B0aW9ucy5iZWFyZXIgOlxuICAgICAgICAgICAgb3B0aW9ucy51c2VybmFtZSA/XG4gICAgICAgICAgICAgICAgXCJCYXNpYyBcIiArIGlzb21vcnBoaWMuYnRvYShvcHRpb25zLnVzZXJuYW1lICsgXCI6XCIgKyAob3B0aW9ucy5wYXNzd29yZCB8fCBcIlwiKSkgOlxuICAgICAgICAgICAgICAgIG51bGw7XG4gICAgICAgIHRoaXMuYmVhcmVyUHJvdmlkZXIgPSBvcHRpb25zLmJlYXJlclByb3ZpZGVyIHx8IG51bGw7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXN0Q2xpZW50LnByb3RvdHlwZSwgXCJzdGF0dXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFJlc3RDbGllbnQucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24gKHBhdGgsIG1ldGhvZCwgaGVhZGVycywgcXVlcnksIGZldGNoT3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICArK3RoaXMubnVtT3V0c3RhbmRpbmdPcGVyYXRpb25zO1xuICAgICAgICB0aGlzLl9zdGF0dXMuZGlzcGF0Y2godGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9mZXRjaChwYXRoLCBtZXRob2QsIGhlYWRlcnMsIHF1ZXJ5LCBmZXRjaE9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAtLV90aGlzLm51bU91dHN0YW5kaW5nT3BlcmF0aW9ucztcbiAgICAgICAgICAgIF90aGlzLl9zdGF0dXMuZGlzcGF0Y2goX3RoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgLS1fdGhpcy5udW1PdXRzdGFuZGluZ09wZXJhdGlvbnM7XG4gICAgICAgICAgICBfdGhpcy5fc3RhdHVzLmRpc3BhdGNoKF90aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFJlc3RDbGllbnQucHJvdG90eXBlLl9mZXRjaCA9IGZ1bmN0aW9uIChwYXRoLCBtZXRob2QsIGhlYWRlcnMsIHF1ZXJ5LCBmZXRjaE9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcXVlcnlTdHIsIF9hLCBhdXRoSGVhZGVyLCB0b2tlbkluZm8sIGJlYXJlclByb3ZpZGVyLCBfYiwgX2MsIHVybCwgcmVzLCB3d3dhdXRoLCBfZDtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2UubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZldGNoT3B0aW9ucyAmJiBmZXRjaE9wdGlvbnMuY2FjaGUgPT09ICduby1jYWNoZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBiYWNrLWJ1dHRvbiBub3QgcmVzcGVjdGluZyBjYWNoZSBjb250cm9sIGluIENocm9tZS9PcGVyYS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHBlbmQgYSBxdWVyeSBwYXJhbWV0ZXIgdG8gZm9yY2UgYSBjYWNoZSBlbnRyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgcXVlcnksIHsgbm9jYWNoZTogY3JlYXRlVVVJRCgpIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlTdHIgPSBxdWVyeSAmJiBPYmplY3Qua2V5cyhxdWVyeSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHF1ZXJ5W2tleV0gIT09IHVuZGVmaW5lZDsgfSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIj1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChxdWVyeVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJyYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcywgYXV0aEhlYWRlciA9IF9hLmF1dGhIZWFkZXIsIHRva2VuSW5mbyA9IF9hLnRva2VuSW5mbywgYmVhcmVyUHJvdmlkZXIgPSBfYS5iZWFyZXJQcm92aWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKCFhdXRoSGVhZGVyICYmICF0b2tlbkluZm8gJiYgYmVhcmVyUHJvdmlkZXIpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGJlYXJlclByb3ZpZGVyLmdldEJlYXJlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudG9rZW5JbmZvID0gdG9rZW5JbmZvID0gX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRva2VuSW5mbykgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0b2tlbkluZm8uZXhwaXJlcyA8IERhdGUubm93KCkpKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVG9rZW4gZXhwaXJlZC4gUmVmcmVzaCBpdDpcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBiZWFyZXJQcm92aWRlci5yZWZyZXNoQmVhcmVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy50b2tlbkluZm8gPSB0b2tlbkluZm8gPSBfZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZS5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhIZWFkZXIgPSBcIkJlYXJlciBcIiArIHRva2VuSW5mby50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW4gb25lIHdheSBvciBhbm90aGVyLCB3ZSd2ZSBjb25jbHVkZWQgYW4gQXV0aG9yaXphdGlvbiBoZWFkZXIgdG8gdXNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF1dGhIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzLkF1dGhvcml6YXRpb24gPSBhdXRoSGVhZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdGhpcy5iYXNlVXJsICsgcGF0aCArIChxdWVyeVN0ciA/IFwiP1wiICsgcXVlcnlTdHIgOiBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuaXNvbW9ycGhpYy5mZXRjaCh1cmwsIHRzbGliXzEuX19hc3NpZ24oe30sIHRoaXMuZmV0Y2hPcHRpb25zLCB7IGhlYWRlcnM6IGhlYWRlcnMsIG1ldGhvZDogbWV0aG9kIH0sIGZldGNoT3B0aW9ucykpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocmVzLnN0YXR1cyA9PSA0MDEgJiYgdGhpcy5iZWFyZXJQcm92aWRlcikpIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3d3YXV0aCA9IHJlcy5oZWFkZXJzLmdldChcInd3dy1hdXRoZW50aWNhdGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdvdCBcIiArIHJlcy5zdGF0dXMgKyBcIiBmcm9tIFwiICsgKHRoaXMuYmFzZVVybCArIHBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHd3d2F1dGggJiYgL0JlYXJlci9pLnRlc3Qod3d3YXV0aCkpKSByZXR1cm4gWzMgLypicmVhayovLCA5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuYmVhcmVyUHJvdmlkZXIucmVmcmVzaEJlYXJlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2QudG9rZW5JbmZvID0gX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gXCJCZWFyZXIgXCIgKyB0aGlzLnRva2VuSW5mby50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuaXNvbW9ycGhpYy5mZXRjaCh1cmwsIHRzbGliXzEuX19hc3NpZ24oe30sIHRoaXMuZmV0Y2hPcHRpb25zLCB7IGhlYWRlcnM6IGhlYWRlcnMsIG1ldGhvZDogbWV0aG9kIH0sIGZldGNoT3B0aW9ucykpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSA5O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFJlc3RDbGllbnQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChwYXRoLCBxdWVyeSwgZmV0Y2hPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoKHBhdGgsIFwiR0VUXCIsIHsgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb247IHRleHQvcGxhaW5cIiB9LCBxdWVyeSwgZmV0Y2hPcHRpb25zKTtcbiAgICB9O1xuICAgIFJlc3RDbGllbnQucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiAocGF0aCwgZGF0YSwgZmV0Y2hPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoKHBhdGgsIFwiUE9TVFwiLCB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0sIG51bGwsIHRzbGliXzEuX19hc3NpZ24oe30sIGZldGNoT3B0aW9ucywgeyBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSB9KSk7XG4gICAgfTtcbiAgICBSZXN0Q2xpZW50LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAocGF0aCwgcXVlcnksIGJvZHksIGZldGNoT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaChwYXRoLCBcIkRFTEVURVwiLCB7IEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uOyB0ZXh0L3BsYWluXCIgfSwgcXVlcnksIHRzbGliXzEuX19hc3NpZ24oe30sIGZldGNoT3B0aW9ucywgeyBib2R5OiBib2R5IH0pKTtcbiAgICB9O1xuICAgIHJldHVybiBSZXN0Q2xpZW50O1xufSgpKTtcbmV4cG9ydCB7IFJlc3RDbGllbnQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlc3RjbGllbnQuanMubWFwIiwiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVVUlEKCkge1xuICAgIC8vIERlY2VudCBzb2x1dGlvbiBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2hvdy10by1jcmVhdGUtYS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxuICAgIHZhciBkID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG4gICAgICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7XG4gICAgICAgIHJldHVybiAoYyA9PT0gJ3gnID8gciA6IChyICYgMHg3IHwgMHg4KSkudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGF2b2lkU2ltdWx0YW5vdXNDYWxscyhtZXRob2QpIHtcbiAgICB2YXIgb25nb2luZ1Byb21pc2UgPSBudWxsO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghb25nb2luZ1Byb21pc2UpIHtcbiAgICAgICAgICAgIG9uZ29pbmdQcm9taXNlID0gbWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgb25nb2luZ1Byb21pc2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb25nb2luZ1Byb21pc2U7XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWxJZChyZWFsbSkge1xuICAgIHZhciBwcmVmaXggPSAnZWM5NmIzYmUtNDVmYy00MWQzLWI2OWUtJztcbiAgICB2YXIgcGFkID0gWyc1MCcsICcwOCcsICdlMScsICc0MCcsICdlNCcsICdlNyddO1xuICAgIGlmIChyZWFsbS5sZW5ndGggPiA2KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUb28gbG9uZyByZWFsbVwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlYWxtLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBoZXggPSByZWFsbS5jaGFyQ29kZUF0KGkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcGFkW2ldID0gaGV4Lmxlbmd0aCA9PT0gMiA/XG4gICAgICAgICAgICBoZXggOlxuICAgICAgICAgICAgJzAnICsgaGV4O1xuICAgIH1cbiAgICByZXR1cm4gcHJlZml4ICsgcGFkLmpvaW4oJycpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVQcmVkZXN0aW5hdGVkSWQoaW5wdXQpIHtcbiAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVuY29kZXIsIGRhdGEsIGRpZ2VzdCwgX2EsIGk7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gZW5jb2Rlci5lbmNvZGUoaW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICBfYSA9IFVpbnQ4QXJyYXkuYmluZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY3J5cHRvLnN1YnRsZS5kaWdlc3QoJ1NIQS0yNTYnLCBkYXRhKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBkaWdlc3QgPSBuZXcgKF9hLmFwcGx5KFVpbnQ4QXJyYXksIFt2b2lkIDAsIF9iLnNlbnQoKV0pKSgpO1xuICAgICAgICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmliYmxlID0gZGlnZXN0W2krK10gJSAxNiB8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdhc2hlZE5pYmJsZSA9IGMgPT09ICd4JyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pYmJsZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pYmJsZSAmIDB4NyB8IDB4ODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2FzaGVkTmliYmxlLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2ltcGxlRGlnZXN0KGlucHV0KSB7XG4gICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbmNvZGVyLCBpbnB1dEJ5dGVzLCBkaWdlc3RCeXRlcywgX2E7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dEJ5dGVzID0gZW5jb2Rlci5lbmNvZGUoaW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICBfYSA9IFVpbnQ4QXJyYXkuYmluZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY3J5cHRvLnN1YnRsZS5kaWdlc3QoJ1NIQS0yNTYnLCBpbnB1dEJ5dGVzKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBkaWdlc3RCeXRlcyA9IG5ldyAoX2EuYXBwbHkoVWludDhBcnJheSwgW3ZvaWQgMCwgX2Iuc2VudCgpLCAwLCAxNl0pKSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgYnVmMmhleChkaWdlc3RCeXRlcyldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBidWYyaGV4KGJ1ZmZlcikge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYnVmZmVyLCBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKCcwMCcgKyB4LnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpOyB9KS5qb2luKCcnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBcnJheShhLCBtYXBwZXIpIHtcbiAgICB2YXIgcmV0dmFsID0gYTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGEubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgIHZhciB0ID0gYVtpXTtcbiAgICAgICAgdmFyIG1hcHBlZCA9IG1hcHBlcih0KTtcbiAgICAgICAgaWYgKG1hcHBlZCAhPT0gdCkge1xuICAgICAgICAgICAgaWYgKHJldHZhbCA9PT0gYSlcbiAgICAgICAgICAgICAgICByZXR2YWwgPSBhLnNsaWNlKCk7XG4gICAgICAgICAgICByZXR2YWxbaV0gPSBtYXBwZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldHZhbDtcbn1cbi8qXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQXJyYXk8VD4oYTogVFtdLCBtYXBwZXI6ICh0OiBUKSA9PiBUIHwgZmFsc2UpOiBUW10ge1xuICBsZXQgcmV0dmFsID0gYTtcbiAgbGV0IGogPSAwO1xuICBmb3IgKGxldCBpPTAsbD1hLmxlbmd0aDsgaTxsOyArK2ksICsraikge1xuICAgIGNvbnN0IHQgPSBhW2ldO1xuICAgIGNvbnN0IG1hcHBlZCA9IG1hcHBlcih0KTtcbiAgICBpZiAobWFwcGVkID09PSBmYWxzZSkge1xuICAgICAgLy8gTWFwcGVyIHdhbnRzIHRvIGRlbGV0ZSB0aGlzIGRvYy5cbiAgICAgIGlmIChyZXR2YWwgPT09IGEpIHJldHZhbCA9IGEuc2xpY2UoKTtcbiAgICAgIHJldHZhbC5zcGxpY2UoaiwgMSk7XG4gICAgICAtLWo7IC8vIGNvbXBlbnNhdGUgZm9yICsralxuICAgIH0gZWxzZSBpZiAobWFwcGVkICE9PSB0KSB7XG4gICAgICBpZiAocmV0dmFsID09PSBhKSByZXR2YWwgPSBhLnNsaWNlKCk7XG4gICAgICByZXR2YWxbal0gPSBtYXBwZWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXR2YWw7XG59XG4qLyBcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsImltcG9ydCAqIGFzIEpzb25TY2hlbWEgZnJvbSBcImtlZGJhY2tlbmQtc2NoZW1hL3NjaGVtYS5qc29uXCI7XG5pbXBvcnQgeyBnZXRUYWJsZUZyb21MYWJlbCB9IGZyb20gXCIuL3V0aWxzXCI7XG52YXIgQ2FjaGVCdXN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhY2hlQnVzdCgpIHtcbiAgICB9XG4gICAgQ2FjaGVCdXN0LmdldENhY2hlQnVzdCA9IGZ1bmN0aW9uICh0YWJsZSwgcXVlcnksIHVzZXIsIGluY2x1ZGVzKSB7XG4gICAgICAgIHZhciBpbnZvbHZlZEl0ZW1zID0gQ2FjaGVCdXN0LmdldEludm9sdmVkSXRlbXModGFibGUsIHF1ZXJ5LCBpbmNsdWRlcyk7XG4gICAgICAgIHJldHVybiBpbnZvbHZlZEl0ZW1zXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhY2hlLWJ1c3QtXCIgKyB1c2VyICsgXCItXCIgKyBpdGVtKTsgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiAhIXZhbHVlOyB9KVxuICAgICAgICAgICAgLmpvaW4oJy8nKSB8fCAnc3RhdGljJztcbiAgICB9O1xuICAgIENhY2hlQnVzdC5pbnZhbGlkYXRlQ2FjaGUgPSBmdW5jdGlvbiAocmVxcywgdXNlcikge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gQ2FjaGVCdXN0LmdldENhY2hlSW52YWxpZGF0aW9ucyhyZXFzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gX2FbX2ldO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYWNoZS1idXN0LVwiICsgdXNlciArIFwiLVwiICsgaXRlbSwgJycgKyBEYXRlLm5vdygpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2FjaGVCdXN0LmdldEludm9sdmVkSXRlbXMgPSBmdW5jdGlvbiAodGFibGUsIHF1ZXJ5LCBpbmNsdWRlcykge1xuICAgICAgICB2YXIgaGFzRWRnZXNGcm9tID0gcXVlcnkuaGFzRWRnZXNGcm9tO1xuICAgICAgICB2YXIgcmVsYXRlZFRhYmxlcyA9IGluY2x1ZGVzXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChsYWJlbCkgeyByZXR1cm4gSnNvblNjaGVtYS50YWJsZXNbdGFibGVdLnJlbGF0aW9uc2hpcHNbbGFiZWxdOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAodGFibGUpIHsgcmV0dXJuICEhdGFibGU7IH0pO1xuICAgICAgICBpZiAoaGFzRWRnZXNGcm9tKVxuICAgICAgICAgICAgcmVsYXRlZFRhYmxlcy5wdXNoKFwiaGVmXCIgKyB0YWJsZSk7XG4gICAgICAgIHJldHVybiBbdGFibGUsICdtYXN0ZXInLCBxdWVyeS5icmFuY2hJZF0uZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiAhIXg7IH0pLmNvbmNhdChyZWxhdGVkVGFibGVzKS5zb3J0KCk7XG4gICAgfTtcbiAgICBDYWNoZUJ1c3QuZ2V0Q2FjaGVJbnZhbGlkYXRpb25zID0gZnVuY3Rpb24gKHJlcXMpIHtcbiAgICAgICAgdmFyIGludmFsaWRhdGlvblNldCA9IHt9O1xuICAgICAgICByZXFzLmZvckVhY2goZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICAgICAgc3dpdGNoIChyZXEub3ApIHtcbiAgICAgICAgICAgICAgICBjYXNlICdhZGQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3B1dCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgICBjYXNlICd1cGRhdGUnOlxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkYXRpb25TZXRbcmVxLnRhYmxlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xpbmsnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3VubGluayc6XG4gICAgICAgICAgICAgICAgY2FzZSAndW5kby1saW5rJzpcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZGF0aW9uU2V0W3JlcS5zb3VyY2VUYWJsZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkYXRpb25TZXRbXCJoZWYtXCIgKyBnZXRUYWJsZUZyb21MYWJlbChyZXEuc291cmNlVGFibGUsIHJlcS5sYWJlbCldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2xlYXItYnJhbmNoJzpcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZGF0aW9uU2V0W3JlcS5icmFuY2hJZF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtZXJnZSc6XG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRhdGlvblNldFtyZXEuYnJhbmNoSWRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZGF0aW9uU2V0W3JlcS50YXJnZXRCcmFuY2hJZCB8fCBcIm1hc3RlclwiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGludmFsaWRhdGlvblNldCk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2FjaGVCdXN0O1xufSgpKTtcbmV4cG9ydCB7IENhY2hlQnVzdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FjaGUtYnVzdC5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgbWVyZ2VEZWx0YXMgfSBmcm9tICcuLi9kZWx0YS1tZXJnZSc7XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlNdXRhdGlvbnNPbkRlbHRhcyhicmFuY2hJZCwgZGVsdGFzLCBtdXRhdGlvbnMsIG9wdGltaXN0aWMsIHVzZXJEaXNwbGF5TmFtZSwgaGFzQWRkaXRpb25hbEZpbHRlcikge1xuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgc3dpdGNoIChtLm9wKSB7XG4gICAgICAgICAgICBjYXNlICdhZGQtcmVsYXRlZCc6XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBBZGRSZWxhdGVkIFJlcG9NdXRhdGlvblxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNBZGRpdGlvbmFsRmlsdGVyICYmIG0uYnJhbmNoSWQgPT09IGJyYW5jaElkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhcyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FkZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlSWQ6IG0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQ6IG0ucmVsYXRlZERvYy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogbS5ncmFwaFByb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVGFibGU6IG0udGFibGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1ldGE6IG9wdGltaXN0aWMgPyAnYWRkaW5nJyA6ICdwZXJzaXN0ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5hbWU6IG0ucmVsYXRlZERvYy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyaWJ1dG9yOiB1c2VyRGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dLmNvbmNhdChkZWx0YXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NsZWFyLWJyYW5jaCc6XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBDbGVhckJyYW5jaCBSZXBvTXV0YXRpb25cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGlmIChtLmJyYW5jaElkID09PSBicmFuY2hJZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWx0YXMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIFJlcG9NdXRhdGlvblxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gVGhpcyB0eXBlIG9mIG11dGF0aW9uIGNhbiBub3QgYmUgcGVyZm9ybWVkIG9udG8gYnJhbmNoZXMuIFRoZXJlJ3Mgbm8gYnJhbmNoSWQgcHJvcGVydHkgb24gbS5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21lcmdlJzpcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIFJlcG9NdXRhdGlvblxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgaWYgKG0uYnJhbmNoSWQgPT09IGJyYW5jaElkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhcyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtLnRhcmdldEJyYW5jaElkID09PSBicmFuY2hJZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGNoYW5nZSB3aWxsIGFwcGVuZCBuZXcgZGVsdGFzIHRvIG91ciBkZWx0YXMgYXJyYXkgYnV0IHdlIGRvbid0IGtub3cgd2hhdCB3b3VsZCBjb21lLlxuICAgICAgICAgICAgICAgICAgICAvLyBOZWVkIHRvIHJlZmV0Y2ggZnJvbSBzZXJ2ZXIuXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW1pc3RpYylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBudWxsIH07IC8vIENhbGxlciBzaG91bGQgY2hlY2sgZm9yIG51bGwgYW5kIHJlLWZldGNoIGRhdGEgZnJvbSBzZXJ2ZXIuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlLXJlbGF0ZWQnOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlLVJlbGF0ZWQgUmVwb011dGF0aW9uXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBpZiAoaGFzQWRkaXRpb25hbEZpbHRlciB8fCBtLmJyYW5jaElkICE9PSBicmFuY2hJZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgICAgICBkZWx0YXMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JlbW92ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZDogbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldElkOiBtLnJlbGF0ZWREb2MuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXROYW1lOiBtLnJlbGF0ZWREb2MubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBtLmdyYXBoUHJvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVRhYmxlOiBtLnRhYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJpYnV0b3I6IHVzZXJEaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJG1ldGE6IG9wdGltaXN0aWMgPyAnYWRkaW5nJyA6ICdwZXJzaXN0ZWQnXG4gICAgICAgICAgICAgICAgICAgIH1dLmNvbmNhdChkZWx0YXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndW5kby1saW5rJzpcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIFVuZG8tTGluayBSZXBvTXV0YXRpb25cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGlmIChtLmJyYW5jaElkICE9PSBicmFuY2hJZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpZHggPSBkZWx0YXMuZmluZEluZGV4KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGQudHlwZSA9PT0gJ2FkZCcgfHwgZC50eXBlID09PSAncmVtb3ZlJyB8fCBkLnR5cGUgPT09ICd1bmRvLWxpbmsnKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuc291cmNlSWQgPT09IG0uaWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnRhcmdldElkID09PSBtLnJlbGF0ZWRJZDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm91bmQgYW4gXCJhZGRcIiBvciBcInJlbW92ZVwiIGRlbHRhIHRvIGNoYW5nZTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGltaXN0aWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YVJlbGF0aW9uID0gZGVsdGFzW2lkeF07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNYXJrIHRoZSBleGlzdGluZyBhZGQvcmVtb3ZlIGRlbHRhIGFzIGN1cnJlbmx0eSBiZWluZyBkZWxldGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YXMgPSBkZWx0YXMuc2xpY2UoMCwgaWR4KS5jb25jYXQoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRzbGliXzEuX19hc3NpZ24oe30sIGRlbHRhUmVsYXRpb24sIHsgJG1ldGE6IG9wdGltaXN0aWMgPyAncmVtb3ZpbmcnIDogJ3BlcnNpc3RlZCcgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sIGRlbHRhcy5zbGljZShpZHggKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQZXJzaXN0ZWQuIEp1c3QgcmVtb3ZlIGl0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzID0gZGVsdGFzLnNsaWNlKDAsIGlkeCkuY29uY2F0KGRlbHRhcy5zbGljZShpZHggKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1cGRhdGUnOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIFJlcG9NdXRhdGlvblxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgaWYgKG0uYnJhbmNoSWQgIT09IGJyYW5jaElkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IGRlbHRhcy5maW5kSW5kZXgoZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVsdGEudHlwZSA9PT0gJ21vZGlmeScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YS50YXJnZXRJZCA9PT0gbS5pZDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPCAwICYmICFoYXNBZGRpdGlvbmFsRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YXMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbW9kaWZ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGU6IG0udGFibGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldElkOiBtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXROYW1lOiBtLnRhcmdldE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG0uZGVsdGFEb2MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmlidXRvcnM6IFt1c2VyRGlzcGxheU5hbWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbWV0YTogb3B0aW1pc3RpYyA/ICdhZGRpbmcnIDogJ3BlcnNpc3RlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV0uY29uY2F0KGRlbHRhcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdEZWx0YURvYyA9IGRlbHRhc1tpZHhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRyaWJ1dG9ycyA9IGV4aXN0aW5nRGVsdGFEb2MuY29udHJpYnV0b3JzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRyaWJ1dG9ycy5pbmNsdWRlcyh1c2VyRGlzcGxheU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJpYnV0b3JzLnB1c2godXNlckRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdEYXRhID0gbWVyZ2VEZWx0YXMoZXhpc3RpbmdEZWx0YURvYy5kYXRhLCBtLmRlbHRhRG9jLCB7IHJlbW92ZVVuc2V0UHJvcHM6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGltaXN0aWMgJiYgT2JqZWN0LmtleXMobmV3RGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tbWl0dGVkIG11dGF0aW9uIHRoYXQgcmVzZXRzIGEgZGVsdGFEb2MuIFJlbW92ZSB0aGUgZGVsdGFEb2MgZW50aXJlbHk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzID0gZGVsdGFzLnNsaWNlKDAsIGlkeCkuY29uY2F0KGRlbHRhcy5zbGljZShpZHggKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtb2RpZnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGU6IG0udGFibGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRJZDogbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5hbWU6IG0udGFyZ2V0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG5ld0RhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyaWJ1dG9yczogY29udHJpYnV0b3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJG1ldGE6IG9wdGltaXN0aWMgPyAndXBkYXRpbmcnIDogJ3BlcnNpc3RlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmNvbmNhdChkZWx0YXMuc2xpY2UoMCwgaWR4KSwgZGVsdGFzLnNsaWNlKGlkeCArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgZm9yICh2YXIgX2kgPSAwLCBtdXRhdGlvbnNfMSA9IG11dGF0aW9uczsgX2kgPCBtdXRhdGlvbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIG0gPSBtdXRhdGlvbnNfMVtfaV07XG4gICAgICAgIHZhciBzdGF0ZV8xID0gX2xvb3BfMShtKTtcbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZV8xID09PSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXzEudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBkZWx0YXM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHBseS1tdXRhdGlvbnMtb24tZGVsdGFzLmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICcuLi8uLi9rZWQtYmFja2VuZC1jbGllbnQnO1xuaW1wb3J0IHsgYXBwbHlNdXRhdGlvbnNPbkRlbHRhcyB9IGZyb20gJy4vYXBwbHktbXV0YXRpb25zLW9uLWRlbHRhcyc7XG52YXIgRGVsdGFDYWNoZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWx0YUNhY2hlKGdldENsaWVudCwgZ2V0VXNlciwgZ2V0VXNlckRpc3BsYXlOYW1lKSB7XG4gICAgICAgIHRoaXMuZ2V0Q2xpZW50ID0gZ2V0Q2xpZW50O1xuICAgICAgICB0aGlzLmdldFVzZXIgPSBnZXRVc2VyO1xuICAgICAgICB0aGlzLmdldFVzZXJEaXNwbGF5TmFtZSA9IGdldFVzZXJEaXNwbGF5TmFtZTtcbiAgICAgICAgdGhpcy5sb29rdXAgPSB7fTtcbiAgICB9XG4gICAgRGVsdGFDYWNoZS5wcm90b3R5cGUuYXBwbHlNdXRhdGlvbnMgPSBmdW5jdGlvbiAobXV0YXRpb25zLCBfYSkge1xuICAgICAgICB2YXIgb3B0aW1pc3RpYyA9IChfYSA9PT0gdm9pZCAwID8geyBvcHRpbWlzdGljOiBmYWxzZSB9IDogX2EpLm9wdGltaXN0aWM7XG4gICAgICAgIC8vIEFwcGx5IG11dGF0aW9ucyBsb2NhbGx5IG9udG8gdGhlIERlbHRhQ2FjaGUgYW5kIG5vdGlmeSB0aGVpciBzdWJzY3JpYmVyc1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9iID0gT2JqZWN0LmtleXModGhpcy5sb29rdXApOyBfaSA8IF9iLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHF1ZXJ5S2V5ID0gX2JbX2ldO1xuICAgICAgICAgICAgdmFyIGNhY2hlRW50cnkgPSB0aGlzLmxvb2t1cFtxdWVyeUtleV07XG4gICAgICAgICAgICBpZiAoY2FjaGVFbnRyeS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIEluc3RlYWQgaGVyZTogU3RvcmUgdGhlIG11dGF0aW9ucyBvbiBjYWNoZUVudHJ5LiBObyBtYXR0ZXIgaWYgaXQgeWV0IGhhcyB2YWx1ZSBvciBub3QuXG4gICAgICAgICAgICAgICAgLy8gVGhlbiBhcHBseSBtdXRhdGlvbiB3aGVuZXZlciBzdWJzY3JpYmluZyEgKEJldHRlciBoYW5kbGluZyBvZiBtdXRhdGlvbnMgdGhhdCBhcnJpdmVzIGJlZm9yZSBmZXRjaCgpIGlzIGRvbmUpXG4gICAgICAgICAgICAgICAgLy8gKFNlZSBob3cgSSBoYW5kbGUgdGhpcyBpbiBxdWVyeS1zZXQudHMpXG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gYXBwbHlNdXRhdGlvbnNPbkRlbHRhcyhjYWNoZUVudHJ5LnF1ZXJ5LmJyYW5jaElkLCBjYWNoZUVudHJ5LnZhbHVlLCBtdXRhdGlvbnMsIG9wdGltaXN0aWMsIHRoaXMuZ2V0VXNlckRpc3BsYXlOYW1lKCksICEhY2FjaGVFbnRyeS5xdWVyeS50YWdzKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG11dGF0aW9uIHJlcXVpcmVzIGNhY2hlRW50cnkgdG8gYmUgcmVmZXRjaGVkIGZyb20gc2VydmVyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW1pc3RpYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbGVyIGhhcyBzdWNjZXNzZnVsbHkgcGVyZm9ybWVkIHRoZSBtdXRhdGlvbnMgYW5kIGdvdCBzdWNjZXNzIGJhY2sgZnJvbSBzZXJ2ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIG9rIHRvIHJlZmV0Y2ggdGhlIGRlbHRhcyBmcm9tIHNlcnZlciBub3c6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZUVudHJ5LmZldGNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZnRlciBmZXRjaCBjb21wbGV0ZXMsIGl0IHdpbGwgbm90aWZ5IHRoZSBzdWJzY3JpYmVycy5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IGNhY2hlRW50cnkudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVFbnRyeS5vcHRpbWlzdGljVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpbWlzdGljKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVFbnRyeS52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjYWNoZUVudHJ5Lm5vdGlmeShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBEZWx0YUNhY2hlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAocXVlcnksIG9ic2VydmVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjYWNoZUVudHJ5ID0gdGhpcy5sb29rdXBbcXVlcnkuYnJhbmNoSWQgKyBxdWVyeS50YWdzXTtcbiAgICAgICAgaWYgKCFjYWNoZUVudHJ5KSB7XG4gICAgICAgICAgICBjYWNoZUVudHJ5ID0gbmV3IERlbHRhQ2FjaGVFbnRyeSh0aGlzLmdldENsaWVudCgpLCBxdWVyeSk7XG4gICAgICAgICAgICB0aGlzLmxvb2t1cFtxdWVyeS5icmFuY2hJZCArIHF1ZXJ5LnRhZ3NdID0gY2FjaGVFbnRyeTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FjaGVFbnRyeS5jbGVhbnVwVGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChjYWNoZUVudHJ5LmNsZWFudXBUaW1lcik7XG4gICAgICAgICAgICBjYWNoZUVudHJ5LmNsZWFudXBUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVFbnRyeS5zdWJzY3JpYmVycyA9IGNhY2hlRW50cnkuc3Vic2NyaWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IF9hLm9ic2VydmVyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbyAhPT0gb2JzZXJ2ZXI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlRW50cnkuc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlRW50cnkuY2xlYW51cFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FjaGVFbnRyeS5zdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMubG9va3VwW3F1ZXJ5LmJyYW5jaElkICsgcXVlcnkudGFnc107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjYWNoZUVudHJ5LnN1YnNjcmliZXJzLnB1c2goeyBvYnNlcnZlcjogb2JzZXJ2ZXIsIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uIH0pO1xuICAgICAgICBpZiAoY2FjaGVFbnRyeS52YWx1ZSkge1xuICAgICAgICAgICAgLy8gVmFsdWUgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHJldHJpZXZlZCBhbHJlYWR5LiBQaWNrIGZyb20gY2FjaGUuXG4gICAgICAgICAgICBvYnNlcnZlcihjYWNoZUVudHJ5Lm9wdGltaXN0aWNWYWx1ZSB8fCBjYWNoZUVudHJ5LnZhbHVlLCBudWxsLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNhY2hlRW50cnkuaXNGZXRjaGluZykge1xuICAgICAgICAgICAgLy8gQSB2YWx1ZSBpcyBvbiBpdHMgd2F5LiBTaXQgYmFjayBhbmQgcmVsYXguIEFsbCByZWdpc3RlcmVkXG4gICAgICAgICAgICAvLyBvYnNlcnZlcnMgKGluY2x1ZGluZyB0aGlzIG9uZSkgd2lsbCBiZSBub3RpZmllZCB3aGVuIGRhdGEgYXJyaXZlc1xuICAgICAgICAgICAgLy8gb3IgZmFpbHMuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2FjaGVFbnRyeS5lcnJvcikge1xuICAgICAgICAgICAgb2JzZXJ2ZXIobnVsbCwgY2FjaGVFbnRyeS5lcnJvciwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlRW50cnkuZmV0Y2goKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG4gICAgcmV0dXJuIERlbHRhQ2FjaGU7XG59KCkpO1xuZXhwb3J0IHsgRGVsdGFDYWNoZSB9O1xudmFyIERlbHRhQ2FjaGVFbnRyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWx0YUNhY2hlRW50cnkoY2xpZW50LCBxdWVyeSkge1xuICAgICAgICB0aGlzLmZldGNoT3BlcmF0aW9uSWQgPSAwOyAvLyBNYWtlcyBzdXJlIGEgcmUtZmV0Y2ggd2lsbCBkaXNjYXJkIHRoZSByZXN1bHQgZnJvbSBhbnkgb25nb2luZyBmZXRjaC5cbiAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICB0aGlzLm9wdGltaXN0aWNWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5pc0ZldGNoaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xlYW51cFRpbWVyID0gbnVsbDtcbiAgICB9XG4gICAgRGVsdGFDYWNoZUVudHJ5LnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGZldGNoT3BlcmF0aW9uSWQgPSArK3RoaXMuZmV0Y2hPcGVyYXRpb25JZDtcbiAgICAgICAgdGhpcy5pc0ZldGNoaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mZXRjaEZyb21TZXJ2ZXIoKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgLy8gU3VjY2Vzc1xuICAgICAgICAgICAgaWYgKGZldGNoT3BlcmF0aW9uSWQgPT09IF90aGlzLmZldGNoT3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5pc0ZldGNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFsdWUuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYi5kYXRlVGltZSAtIGEuZGF0ZVRpbWU7IH0pOyAvLyBMYXRlc3QgZmlyc3RcbiAgICAgICAgICAgICAgICBfdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIF90aGlzLm9wdGltaXN0aWNWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIF90aGlzLm5vdGlmeSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgLy8gRmFpbFxuICAgICAgICAgICAgaWYgKGZldGNoT3BlcmF0aW9uSWQgPT09IF90aGlzLmZldGNoT3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5pc0ZldGNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX3RoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICBfdGhpcy5mYWlsKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEZWx0YUNhY2hlRW50cnkucHJvdG90eXBlLmZldGNoRnJvbVNlcnZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzLCBfYSwgX2I7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5xdWVyeS5icmFuY2hJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RlbHRhcyBvbmx5IGF2YWlsYWJsZSBvbiBicmFuY2hlcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jbGllbnQuaHR0cC5nZXQoJ2RlbHRhcycsIHRoaXMucXVlcnkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocmVzLnN0YXR1cyA+PSAzMDAgfHwgcmVzLnN0YXR1cyA8IDIwMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBIdHRwRXJyb3IuYmluZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gW3ZvaWQgMCwgcmVzLnN0YXR1c107XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMudGV4dCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiB0aHJvdyBuZXcgKF9hLmFwcGx5KEh0dHBFcnJvciwgX2IuY29uY2F0KFtfYy5zZW50KCldKSkpKCk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLmpzb24oKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9jLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGVsdGFDYWNoZUVudHJ5LnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuc3Vic2NyaWJlcnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIG9ic2VydmVyID0gX2Iub2JzZXJ2ZXIsIHN1YnNjcmlwdGlvbiA9IF9iLnN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgIG9ic2VydmVyKHZhbHVlLCBudWxsLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEZWx0YUNhY2hlRW50cnkucHJvdG90eXBlLmZhaWwgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdmFyIGNvcHkgPSB0aGlzLnN1YnNjcmliZXJzLnNsaWNlKCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjb3B5XzEgPSBjb3B5OyBfaSA8IGNvcHlfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBfYSA9IGNvcHlfMVtfaV0sIG9ic2VydmVyID0gX2Eub2JzZXJ2ZXIsIHN1YnNjcmlwdGlvbiA9IF9hLnN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgIG9ic2VydmVyKG51bGwsIGVycm9yLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRGVsdGFDYWNoZUVudHJ5O1xufSgpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbHRhLWNhY2hlLmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vb2JzZXJ2YWJsZSc7XG52YXIgRGVsdGFDb2xsZWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKERlbHRhQ29sbGVjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEZWx0YUNvbGxlY3Rpb24oZGVsdGFDYWNoZSwgcXVlcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKG9ic2VydmVyKSB7IHJldHVybiBfdGhpcy5kZWx0YUNhY2hlLnN1YnNjcmliZShxdWVyeSwgb2JzZXJ2ZXIpOyB9KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kZWx0YUNhY2hlID0gZGVsdGFDYWNoZTtcbiAgICAgICAgX3RoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBEZWx0YUNvbGxlY3Rpb24ucHJvdG90eXBlLnRhZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0YWdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB0YWdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBEZWx0YUNvbGxlY3Rpb24odGhpcy5kZWx0YUNhY2hlLCB0c2xpYl8xLl9fYXNzaWduKHt9LCB0aGlzLnF1ZXJ5LCB7IHRhZ3M6IHRhZ3MgfSkpO1xuICAgIH07XG4gICAgcmV0dXJuIERlbHRhQ29sbGVjdGlvbjtcbn0oQ29sbGVjdGlvbikpO1xuZXhwb3J0IHsgRGVsdGFDb2xsZWN0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWx0YS1jb2xsZWN0aW9uLmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlEZWx0YShkb2MsIGRlbHRhKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkZWx0YSk7XG4gICAgdmFyIHRhcmdldERvYyA9IGRvYztcbiAgICBmb3IgKHZhciBfaSA9IDAsIGtleXNfMSA9IGtleXM7IF9pIDwga2V5c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c18xW19pXTtcbiAgICAgICAgaWYgKHRhcmdldERvYyA9PT0gZG9jKVxuICAgICAgICAgICAgdGFyZ2V0RG9jID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgZG9jKTtcbiAgICAgICAgdmFyIHZhbCA9IGRlbHRhW2tleV07XG4gICAgICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhciBtZXRhSW5zdHJ1Y3Rpb25zID0gT2JqZWN0LmtleXModmFsKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5LnN0YXJ0c1dpdGgoJyQnKTsgfSk7XG4gICAgICAgICAgICBpZiAobWV0YUluc3RydWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAobWkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pVmFsdWUgPSB2YWxbbWldO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiJHVuc2V0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nIG9uIHRhcmdldCBkb2MhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RG9jLiR3YXNVbnNldCA9IHRydWU7IC8vIEp1c3QgbWFyayBpdCBmb3IgcmUtcmV0cmlldmFsIGFmdGVyIHN1Y2Nlc3NmdWwgcG9zdGluZyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiRhZGRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZXNUb0FkZCA9IG1pVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlc1RvQWRkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIkYWRkIGluc3RydWN0aW9uIG11c3QgY29udGFpbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldEFycmF5ID0gdGFyZ2V0RG9jW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRhcmdldEFycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QXJyYXkgPSB0YXJnZXRBcnJheS5zbGljZSgpOyAvLyBPbiBKUyBzaWRlLCB3ZSBtdXN0IGJlIGltbXV0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXREb2Nba2V5XSA9IHRhcmdldEFycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgdmFsdWVzVG9BZGRfMSA9IHZhbHVlc1RvQWRkOyBfaSA8IHZhbHVlc1RvQWRkXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ID0gdmFsdWVzVG9BZGRfMVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0QXJyYXkuaW5jbHVkZXModikpIHsgLy8gYXZvaWQgZHVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QXJyYXkucHVzaCh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIkcmVtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVzVG9SZW1vdmVfMSA9IG1pVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlc1RvUmVtb3ZlXzEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIiRyZW1vdmUgaW5zdHJ1Y3Rpb24gbXVzdCBjb250YWluIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0QXJyYXkgPSB0YXJnZXREb2Nba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGFyZ2V0QXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldERvY1trZXldID0gdGFyZ2V0QXJyYXkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7IHJldHVybiAhdmFsdWVzVG9SZW1vdmVfMS5pbmNsdWRlcyh0KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9hID0gMCwgbWV0YUluc3RydWN0aW9uc18xID0gbWV0YUluc3RydWN0aW9uczsgX2EgPCBtZXRhSW5zdHJ1Y3Rpb25zXzEubGVuZ3RoOyBfYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaSA9IG1ldGFJbnN0cnVjdGlvbnNfMVtfYV07XG4gICAgICAgICAgICAgICAgICAgIF9sb29wXzEobWkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0YXJnZXREb2Nba2V5XSA9IHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldERvYztcbn1cbi8vIHtuYW1lOiBcIlVsbGFcIn0sIHtuYW1lOiB7JHVuc2V0OjB9XG4vLyB7dGFnczogeyRhZGQ6IFwiaGVqXCJ9fSwge3RhZ3M6IHskdW5zZXQ6MH1cIn1cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlbHRhcyhkZWx0YTEsIGRlbHRhMiwgX2EpIHtcbiAgICB2YXIgcmVtb3ZlVW5zZXRQcm9wcyA9IChfYSA9PT0gdm9pZCAwID8geyByZW1vdmVVbnNldFByb3BzOiBmYWxzZSB9IDogX2EpLnJlbW92ZVVuc2V0UHJvcHM7XG4gICAgLy9yZXR1cm4gey4uLmRlbHRhMSwgLi4uZGVsdGEyfTtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRlbHRhMik7XG4gICAgdmFyIHRhcmdldERlbHRhID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgZGVsdGExKTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIGtleXNfMiA9IGtleXM7IF9pIDwga2V5c18yLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c18yW19pXTtcbiAgICAgICAgdmFyIHZhbCA9IGRlbHRhMltrZXldO1xuICAgICAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB2YXIgbWV0YUluc3RydWN0aW9ucyA9IE9iamVjdC5rZXlzKHZhbClcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleS5zdGFydHNXaXRoKCckJyk7IH0pO1xuICAgICAgICAgICAgaWYgKG1ldGFJbnN0cnVjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKG1pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaVZhbHVlID0gdmFsW21pXTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiR1bnNldFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZVVuc2V0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRhcmdldERlbHRhW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBObyBtYXR0ZXIgaWYgdGFyZ2V0RGVsdGEgaXMgZW1wdHkgb3IgaGFzIHZhbHVlLiBTZXQgaXQgdG8geyR1bnNldDowfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBtYWtlIHN1cmUgdGhlIHZlcnkgZW5kIHJlc3VsdCB3aWxsIGhhdmUgeyR1bnNldDowfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXREZWx0YVtrZXldID0geyAkdW5zZXQ6IDAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiJGFkZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlc1RvQWRkXzIgPSBtaVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXNUb0FkZF8yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIkYWRkIGluc3RydWN0aW9uIG11c3QgY29udGFpbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldE1ldGFQcm9wID0gdGFyZ2V0RGVsdGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRNZXRhUHJvcCA9IHRhcmdldE1ldGFQcm9wID8gdHNsaWJfMS5fX2Fzc2lnbih7fSwgdGFyZ2V0TWV0YVByb3ApIDoge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RGVsdGFba2V5XSA9IHRhcmdldE1ldGFQcm9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcnN0LCBqdXN0IGNoZWNrIGlmIHRhcmdldCBtZXRhUHJvcCBoYXMgeyRyZW1vdmU6IFsuLi5pdGVtc119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgc28sIHJlbW92ZSBhbnkgZXF1YWwgaXRlbXMgZnJvbSB0aGVyZSBiZWZvcmUgbWVyZ2luZyB0aGUgeyRhZGQ6IFsuLi5dfSBhcnJheXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldFJlbW92ZUFycmF5ID0gdGFyZ2V0TWV0YVByb3AuJHJlbW92ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXRSZW1vdmVBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TWV0YVByb3AuJHJlbW92ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRSZW1vdmVBcnJheS5maWx0ZXIoZnVuY3Rpb24gKHQpIHsgcmV0dXJuICF2YWx1ZXNUb0FkZF8yLmluY2x1ZGVzKHQpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldE1ldGFQcm9wLiRyZW1vdmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiAkcmVtb3ZlIGFycmF5IGJlY2FtZSBlbXRweS4gUmVtb3ZlIHRoZSAkcmVtb3ZlIHByb3AuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0TWV0YVByb3AuJHJlbW92ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3cgaXQncyB0aW1lIHRvIG1lcmdlIG9yIGNyZWF0ZSB0YXJnZXQgJGFkZCBhcnJheS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0QWRkQXJyYXkgPSB0YXJnZXRNZXRhUHJvcC4kYWRkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEFkZEFycmF5ID0gdGFyZ2V0QWRkQXJyYXkgPyB0YXJnZXRBZGRBcnJheS5jb25jYXQodmFsdWVzVG9BZGRfMikgOiB2YWx1ZXNUb0FkZF8yLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TWV0YVByb3AuJGFkZCA9IHRhcmdldEFkZEFycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiRyZW1vdmVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZXNUb1JlbW92ZV8yID0gbWlWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzVG9SZW1vdmVfMikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJHJlbW92ZSBpbnN0cnVjdGlvbiBtdXN0IGNvbnRhaW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRNZXRhUHJvcCA9IHRhcmdldERlbHRhW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TWV0YVByb3AgPSB0YXJnZXRNZXRhUHJvcCA/IHRzbGliXzEuX19hc3NpZ24oe30sIHRhcmdldE1ldGFQcm9wKSA6IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldERlbHRhW2tleV0gPSB0YXJnZXRNZXRhUHJvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJzdCwganVzdCBjaGVjayBpZiB0YXJnZXQgbWV0YVByb3AgaGFzIHskYWRkOiBbLi4uaXRlbXNdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHNvLCByZW1vdmUgYW55IGVxdWFsIGl0ZW1zIGZyb20gdGhlcmUgYmVmb3JlIG1lcmdpbmcgdGhlIHskcmVtb3ZlOiBbLi4uXX0gYXJyYXlzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRBZGRBcnJheSA9IHRhcmdldE1ldGFQcm9wLiRyZW1vdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0QWRkQXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE1ldGFQcm9wLiRhZGQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QWRkQXJyYXkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7IHJldHVybiAhdmFsdWVzVG9SZW1vdmVfMi5pbmNsdWRlcyh0KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRNZXRhUHJvcC4kYWRkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgJGFkZCBhcnJheSBiZWNhbWUgZW10cHkuIFJlbW92ZSB0aGUgJGFkZCBwcm9wLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRhcmdldE1ldGFQcm9wLiRhZGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm93IGl0J3MgdGltZSB0byBtZXJnZSBvciBjcmVhdGUgdGFyZ2V0ICRyZW1vdmUgYXJyYXkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldFJlbW92ZUFycmF5ID0gdGFyZ2V0TWV0YVByb3AuJHJlbW92ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRSZW1vdmVBcnJheSA9IHRhcmdldFJlbW92ZUFycmF5ID8gdGFyZ2V0UmVtb3ZlQXJyYXkuY29uY2F0KHZhbHVlc1RvUmVtb3ZlXzIpIDogdmFsdWVzVG9SZW1vdmVfMi5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE1ldGFQcm9wLiRyZW1vdmUgPSB0YXJnZXRSZW1vdmVBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBtZXRhSW5zdHJ1Y3Rpb25zXzIgPSBtZXRhSW5zdHJ1Y3Rpb25zOyBfYiA8IG1ldGFJbnN0cnVjdGlvbnNfMi5sZW5ndGg7IF9iKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pID0gbWV0YUluc3RydWN0aW9uc18yW19iXTtcbiAgICAgICAgICAgICAgICAgICAgX2xvb3BfMihtaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRhcmdldERlbHRhW2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXREZWx0YTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbHRhLW1lcmdlLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4va2VkYmFja2VuZC1jb2xsZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4va2VkYmFja2VuZC1xdWVyeSc7XG5leHBvcnQgKiBmcm9tICcuL2tlZGJhY2tlbmQtcmVwbyc7XG5leHBvcnQgKiBmcm9tICcuL2tlZGJhY2tlbmQtc3Vic2NyaXB0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4va2VkYmFja2VuZC13cml0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9tdXRhdGlvbi1xdWV1ZSc7XG5leHBvcnQgKiBmcm9tICcuL3F1ZXJ5LXNldCc7XG5leHBvcnQgKiBmcm9tICcuLi9vYnNlcnZhYmxlL21peGluJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBCYXRjaFJ1bm5lciB9IGZyb20gJy4uL2tlZC1iYWNrZW5kLWNsaWVudCc7XG5pbXBvcnQgeyBLZWRCYWNrZW5kU3Vic2NyaXB0aW9uIH0gZnJvbSBcIi4va2VkYmFja2VuZC1zdWJzY3JpcHRpb25cIjtcbmltcG9ydCB7IENhY2hlQnVzdCB9IGZyb20gJy4vY2FjaGUtYnVzdCc7XG5pbXBvcnQgeyBLZWRCYWNrZW5kUXVlcnkgfSBmcm9tICcuL2tlZGJhY2tlbmQtcXVlcnknO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL29ic2VydmFibGUvY29sbGVjdGlvbic7XG4vKipcbiAqIFJlcHJlc2VudHMgYSBcImxpdmVcIiBxdWVyeSBhZ2FpbnN0IGEgdGFibGUgb3IgZmlsdGVyZWQgdGFibGUuXG4gKi9cbnZhciBLZWRCYWNrZW5kQ29sbGVjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhLZWRCYWNrZW5kQ29sbGVjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBLZWRCYWNrZW5kQ29sbGVjdGlvbihyZXBvLCB0YWJsZSwgcXVlcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gbmV3IEtlZEJhY2tlbmRTdWJzY3JpcHRpb24ob2JzZXJ2ZXIsIF90aGlzKTtcbiAgICAgICAgICAgIF90aGlzLnJlcG8ucXVlcnlTZXQuc3Vic2NyaWJlKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICB9KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5yZXBvID0gcmVwbztcbiAgICAgICAgX3RoaXMudGFibGUgPSB0YWJsZTtcbiAgICAgICAgX3RoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLCBcInF1ZXJ5S2V5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gS2VkQmFja2VuZFF1ZXJ5LnF1ZXJ5S2V5KHRoaXMudGFibGUsIHRoaXMucXVlcnkpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLCBcImluY2x1ZGVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5jbHVkZXMgfHwgKHRoaXMuX2luY2x1ZGVzID0gW10uY29uY2F0KHRoaXMucXVlcnkuaW5jbHVkZSB8fCBbXSkpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUuYXBwbHlRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICByZXR1cm4gbmV3IEtlZEJhY2tlbmRDb2xsZWN0aW9uKHRoaXMucmVwbywgdGhpcy50YWJsZSwgdHNsaWJfMS5fX2Fzc2lnbih7fSwgdGhpcy5xdWVyeSwgcXVlcnkpKTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5hZGRUb1F1ZXJ5QXJyYXlQcm9wID0gZnVuY3Rpb24gKGFycmF5UHJvcCwgZW50cmllcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5UXVlcnkoKF9hID0ge30sIF9hW2FycmF5UHJvcF0gPSAodGhpcy5xdWVyeVthcnJheVByb3BdIHx8IFtdKS5jb25jYXQoZW50cmllcyksIF9hKSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUuYWRkRmxhZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmbGFncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgZmxhZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hZGRUb1F1ZXJ5QXJyYXlQcm9wKFwiZmxhZ3NcIiwgZmxhZ3MpO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBseVF1ZXJ5KHsgZGVidWc6IHRydWUgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUuaWRzT25seSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRmxhZ3MoXCJpZHNPbmx5XCIpO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLmlkc0FuZE5hbWVzT25seSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRmxhZ3MoXCJpZHNBbmROYW1lc09ubHlcIik7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUuaW5jbHVkZUlkc09ubHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEZsYWdzKFwiaW5jbHVkZUlkc09ubHlcIik7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUuaW5jbHVkZUlkc0FuZE5hbWVzT25seSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRmxhZ3MoXCJpbmNsdWRlSWRzQW5kTmFtZXNPbmx5XCIpO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLmJldHdlZW4gPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHlRdWVyeSh7IGZyb206IGZyb20sIHRvOiB0byB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5yb2xlID0gZnVuY3Rpb24gKHJvbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHlRdWVyeSh7IHJvbGU6IHJvbGUgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUuaGFzRWRnZXNGcm9tID0gZnVuY3Rpb24gKGlkcykge1xuICAgICAgICBpZiAoaWRzLmxlbmd0aCA9PT0gMCB8fCBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHsgcmV0dXJuICFpZDsgfSkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlkIGxpc3QgZ2l2ZW4gdG8gQ29sbGVjdGlvbi5oYXNFZGdlc0Zyb20oXCIgKyBKU09OLnN0cmluZ2lmeShpZHMpICsgXCIpXCIpO1xuICAgICAgICB2YXIgaGVmID0gdGhpcy5hZGRUb1F1ZXJ5QXJyYXlQcm9wKFwiaGFzRWRnZXNGcm9tXCIsIGlkcyk7XG4gICAgICAgIHJldHVybiBoZWY7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUuaGFzRWRnZXNUbyA9IGZ1bmN0aW9uIChpZHMpIHtcbiAgICAgICAgaWYgKGlkcy5sZW5ndGggPT09IDAgfHwgaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7IHJldHVybiAhaWQ7IH0pKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpZCBsaXN0IGdpdmVuIHRvIENvbGxlY3Rpb24uaGFzRWRnZXNUbyhcIiArIEpTT04uc3RyaW5naWZ5KGlkcykgKyBcIilcIik7XG4gICAgICAgIHZhciBoZXQgPSB0aGlzLmFkZFRvUXVlcnlBcnJheVByb3AoXCJoYXNFZGdlc1RvXCIsIGlkcyk7XG4gICAgICAgIHJldHVybiBoZXQ7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUuaWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHlRdWVyeSh7IGlkczogW2lkXSB9KS5zaW5nbGUoe1xuICAgICAgICAgICAgb25aZXJvOiBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGVudGl0eSBpbiBcIiArIF90aGlzLnRhYmxlICsgXCIgd2l0aCBpZCBcIiArIGlkKTsgfSxcbiAgICAgICAgICAgIG9uTWFueTogZnVuY3Rpb24gKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJNdWx0aXBsZSBlbnRyaWVzIGluIFwiICsgX3RoaXMudGFibGUgKyBcIiB3aXRoIGlkIFwiICsgaWQpOyB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5pZHMgPSBmdW5jdGlvbiAoaWRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5UXVlcnkoeyBpZHM6IGlkcyB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5uYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHlRdWVyeSh7IG5hbWU6IG5hbWUgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUudGFncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRhZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHRhZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hcHBseVF1ZXJ5KHsgdGFnczogdGFncyB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5icmFuY2hJZCA9IGZ1bmN0aW9uIChicmFuY2hJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBseVF1ZXJ5KHsgYnJhbmNoSWQ6IGJyYW5jaElkIH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLmluY2x1ZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBncmFwaHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGdyYXBoc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFRvUXVlcnlBcnJheVByb3AoXCJpbmNsdWRlXCIsIGdyYXBocyk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUuY2FjaGVPcHRpbWl6ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5UXVlcnkoeyBjYWNoZUJ1c3Q6IENhY2hlQnVzdC5nZXRDYWNoZUJ1c3QodGhpcy50YWJsZSwgdGhpcy5xdWVyeSwgdGhpcy5yZXBvLmdldFVzZXIoKSwgdGhpcy5pbmNsdWRlcykgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUubXV0YXRpb25zT25FbXB0eSA9IGZ1bmN0aW9uIChtdXRhdGlvbkZhY3RvcnkpIHtcbiAgICAgICAgdmFyIHR4ID0gbmV3IEJhdGNoUnVubmVyKCk7XG4gICAgICAgIG11dGF0aW9uRmFjdG9yeSh0eCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5UXVlcnkoeyBtdXRhdGlvbnNPbkVtcHR5OiB0eC5tdXRhdGlvblJlcXVlc3RzIH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLnNpbmdsZSA9IGZ1bmN0aW9uICh0aHJvd2Vycykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSB0aHJvd2VycyB8fCB7fSwgb25aZXJvID0gX2Eub25aZXJvLCBvbk1hbnkgPSBfYS5vbk1hbnk7XG4gICAgICAgIHJldHVybiB0aGlzLnRvVmFsdWUoKS5tYXAoZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9uWmVybylcbiAgICAgICAgICAgICAgICAgICAgb25aZXJvKCk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaW5nbGUgaXRlbSBvZiBcIiArIF90aGlzLnRhYmxlICsgXCIgZXhwZWN0ZWQgdG8gYmUgcmV0dXJuZWQgYnkgcXVlcnkgXCIgKyBKU09OLnN0cmluZ2lmeShfdGhpcy5xdWVyeSkgKyBcIiBidXQgbm9uZSB3YXMgZm91bmQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICBpZiAob25NYW55KVxuICAgICAgICAgICAgICAgICAgICBvbk1hbnkoKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2luZ2xlIGl0ZW0gb2YgXCIgKyBfdGhpcy50YWJsZSArIFwiIGV4cGVjdGVkIHRvIGJlIHJldHVybmVkIGJ5IHF1ZXJ5IFwiICsgSlNPTi5zdHJpbmdpZnkoX3RoaXMucXVlcnkpICsgXCIgYnV0IFwiICsgaXRlbXMubGVuZ3RoICsgXCIgd2FzIGZvdW5kLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtc1swXTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKmNvbWJpbmVMYXRlc3Q8VE90aGVyPihvdGhlcjogUXVlcnlPYnNlcnZhYmxlPFRPdGhlcj4pIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcih4ID0+IHgpLmNvbWJpbmVMYXRlc3Qob3RoZXIpO1xuICAgIH0qL1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZG9jLCBjaGFuZ2VzLCBkZWJvdW5jZSkge1xuICAgICAgICBpZiAoZGVib3VuY2UgPT09IHZvaWQgMCkgeyBkZWJvdW5jZSA9IDEwMDA7IH1cbiAgICAgICAgdGhpcy5yZXBvLndyaXRlci5tdXRhdGUoW3tcbiAgICAgICAgICAgICAgICBvcDogJ3VwZGF0ZScsXG4gICAgICAgICAgICAgICAgdGFibGU6IHRoaXMudGFibGUsXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IHRoaXMucXVlcnkuYnJhbmNoSWQsXG4gICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcbiAgICAgICAgICAgICAgICBkZWx0YURvYzogY2hhbmdlcyxcbiAgICAgICAgICAgICAgICB0YXJnZXROYW1lOiBkb2MubmFtZVxuICAgICAgICAgICAgfV0sIGRlYm91bmNlKTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5hZGRSZWxhdGVkID0gZnVuY3Rpb24gKGlkLCBsYWJlbCwgcmVsYXRlZERvYykge1xuICAgICAgICB0aGlzLnJlcG8ud3JpdGVyLm11dGF0ZShbe1xuICAgICAgICAgICAgICAgIG9wOiAnYWRkLXJlbGF0ZWQnLFxuICAgICAgICAgICAgICAgIHRhYmxlOiB0aGlzLnRhYmxlLFxuICAgICAgICAgICAgICAgIGJyYW5jaElkOiB0aGlzLnF1ZXJ5LmJyYW5jaElkLFxuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBncmFwaFByb3A6IGxhYmVsLFxuICAgICAgICAgICAgICAgIHJlbGF0ZWREb2M6IHJlbGF0ZWREb2NcbiAgICAgICAgICAgIH1dLCAwKTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgIHRoaXMucmVwby53cml0ZXIubXV0YXRlKFt7XG4gICAgICAgICAgICAgICAgb3A6ICdhZGQnLFxuICAgICAgICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICAgICAgICAgdGFibGU6IHRoaXMudGFibGUsXG4gICAgICAgICAgICAgICAgZG9jOiBkb2NcbiAgICAgICAgICAgIH1dLCAwKTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVSZWxhdGVkID0gZnVuY3Rpb24gKGlkLCBsYWJlbCwgcmVsYXRlZERvYykge1xuICAgICAgICB0aGlzLnJlcG8ud3JpdGVyLm11dGF0ZShbe1xuICAgICAgICAgICAgICAgIG9wOiAncmVtb3ZlLXJlbGF0ZWQnLFxuICAgICAgICAgICAgICAgIHRhYmxlOiB0aGlzLnRhYmxlLFxuICAgICAgICAgICAgICAgIGJyYW5jaElkOiB0aGlzLnF1ZXJ5LmJyYW5jaElkLFxuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBncmFwaFByb3A6IGxhYmVsLFxuICAgICAgICAgICAgICAgIHJlbGF0ZWREb2M6IHJlbGF0ZWREb2NcbiAgICAgICAgICAgIH1dLCAwKTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS51bmRvTGluayA9IGZ1bmN0aW9uIChpZCwgbGFiZWwsIHJlbGF0ZWRJZCkge1xuICAgICAgICBpZiAoIXRoaXMucXVlcnkuYnJhbmNoSWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmRvIGxpbmtzIGNhbiBvbmx5IGJlIHBlcmZvcm1lZCBvbiBicmFuY2hlc1wiKTtcbiAgICAgICAgdGhpcy5yZXBvLndyaXRlci5tdXRhdGUoW3tcbiAgICAgICAgICAgICAgICBvcDogJ3VuZG8tbGluaycsXG4gICAgICAgICAgICAgICAgdGFibGU6IHRoaXMudGFibGUsXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IHRoaXMucXVlcnkuYnJhbmNoSWQsXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGdyYXBoUHJvcDogbGFiZWwsXG4gICAgICAgICAgICAgICAgcmVsYXRlZElkOiByZWxhdGVkSWRcbiAgICAgICAgICAgIH1dLCAwKTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBpZHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGlkc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVwby53cml0ZXIubXV0YXRlKGlkcy5tYXAoZnVuY3Rpb24gKGlkKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgb3A6ICdkZWxldGUnLFxuICAgICAgICAgICAgdGFibGU6IF90aGlzLnRhYmxlLFxuICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgIH0pOyB9KSwgMCk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMucmVwby5xdWVyeVNldC51bnN1YnNjcmliZShzdWJzY3JpcHRpb24pO1xuICAgIH07XG4gICAgcmV0dXJuIEtlZEJhY2tlbmRDb2xsZWN0aW9uO1xufShDb2xsZWN0aW9uKSk7XG5leHBvcnQgeyBLZWRCYWNrZW5kQ29sbGVjdGlvbiB9O1xuLyptaXhpbihcbiAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLFxuICBNYXBwZWRDb2xsZWN0aW9uLnByb3RvdHlwZSxcbiAgXCJtYXBcIiwgXCJmbGF0XCIsIFwiY29uY2F0XCIsIFwicmVuZGVyXCIsIFwibG9hZFwiKTsqL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9a2VkYmFja2VuZC1jb2xsZWN0aW9uLmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyB1cGRhdGVBcnJheSB9IGZyb20gJy4uL2tlZC1iYWNrZW5kLWNsaWVudC91dGlscyc7XG5pbXBvcnQgeyBicmFuY2hTZW5zaXRpdmUsIGdldFRhYmxlRnJvbUxhYmVsIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBhcHBseURlbHRhIH0gZnJvbSAnLi9kZWx0YS1tZXJnZSc7XG52YXIgS2VkQmFja2VuZFF1ZXJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEtlZEJhY2tlbmRRdWVyeSh0YWJsZSwgcXVlcnksIHVzZXIsIHJlcG8sIG11dGF0aW9uUXVldWUpIHtcbiAgICAgICAgdGhpcy50YWJsZSA9IHRhYmxlO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIHRoaXMucmVwbyA9IHJlcG87XG4gICAgICAgIHRoaXMubXV0YXRpb25RdWV1ZSA9IG11dGF0aW9uUXVldWU7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5nb3RJbml0aWFsUmVzcG9uc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbnZhbGlkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9hZGVkVmVyc2lvbiA9IDA7XG4gICAgICAgIHRoaXMuX2xvYWRQcm9taXNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbmNsdWRlcyA9IHF1ZXJ5LmluY2x1ZGUgP1xuICAgICAgICAgICAgdHlwZW9mIHF1ZXJ5LmluY2x1ZGUgPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgICAgICBbcXVlcnkuaW5jbHVkZV0gOlxuICAgICAgICAgICAgICAgIHF1ZXJ5LmluY2x1ZGUgOlxuICAgICAgICAgICAgW107XG4gICAgfVxuICAgIEtlZEJhY2tlbmRRdWVyeS5xdWVyeUtleSA9IGZ1bmN0aW9uICh0YWJsZSwgcXVlcnkpIHtcbiAgICAgICAgdmFyIG11dGF0aW9uc09uRW1wdHkgPSBxdWVyeS5tdXRhdGlvbnNPbkVtcHR5LCBjb21wYXJhYmxlUHJvcHMgPSB0c2xpYl8xLl9fcmVzdChxdWVyeSwgW1wibXV0YXRpb25zT25FbXB0eVwiXSk7XG4gICAgICAgIHJldHVybiB0YWJsZSArIEpTT04uc3RyaW5naWZ5KGNvbXBhcmFibGVQcm9wcyk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoS2VkQmFja2VuZFF1ZXJ5LnByb3RvdHlwZSwgXCJxdWVyeUtleVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEtlZEJhY2tlbmRRdWVyeS5xdWVyeUtleSh0aGlzLnRhYmxlLCB0aGlzLnF1ZXJ5KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgS2VkQmFja2VuZFF1ZXJ5LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEsIGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLmdvdEluaXRpYWxSZXNwb25zZSAmJiAhdGhpcy5pbnZhbGlkKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5nZXREYXRhV2l0aE11dGF0aW9uc0FwcGxpZWQodGhpcy5tdXRhdGlvblF1ZXVlLmdldCgpLCB0cnVlLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLm5vdGlmeVN1YnNjcmliZXIoZGF0YSwgdGhpcy5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMucXVlcnlMb2NhbGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLm5vdGlmeVN1YnNjcmliZXIoZGF0YSwgdGhpcy5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmxvYWQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFF1ZXJ5LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKHZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbG9hZFByb21pc2U7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nb3RJbml0aWFsUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtdXRhdGlvbnNPbkVtcHR5IHNob3VsZCBuZXZlciBiZSB1c2VkIHR3aWNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnF1ZXJ5Lm11dGF0aW9uc09uRW1wdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISghdmVyc2lvbiAmJiB0aGlzLl9sb2FkUHJvbWlzZSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fbG9hZFByb21pc2VdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgICAgICAgICAvLyBsb2FkaW5nIGlzIG9uZ29pbmcsIGFuZCBjYWxsZXIgZG9lcyBub3QgcmVxdWlyZSBhIHJlY2VudCByZWZyZXNoLlxuICAgICAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciB0aGUgb25nb2luZyBsb2FkIHRvIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbiB8fCB0aGlzLnJlcG8ud3JpdGVyLnBlcnNpc3RlZFZlcnNpb24udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkUHJvbWlzZSA9IHRoaXMuX2xvYWRQcm9taXNlID0gdGhpcy5fbG9hZCh2ZXJzaW9uKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLl9sb2FkUHJvbWlzZSA9PT0gbG9hZFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxvYWRlZFZlcnNpb24gPSBNYXRoLm1heChfdGhpcy5sb2FkZWRWZXJzaW9uLCB2ZXJzaW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX2xvYWRQcm9taXNlID09PSBsb2FkUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOb29uZSBoYXMgcmVmcmVzaGVkIG91ciBsb2FkLiBUaGUgZXJyb3IgaXMgdGhlIGZpbmFsIHJlc3VsdC4gU2V0IGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fbG9hZFByb21pc2UgPT09IGxvYWRQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vb25lIGhhcyByZWZyZXNoZWQgb3VyIGxvYWQuIFdlJ3JlIGZpbmlzaGVkLiBEYXRhIG9yIGVycm9yIGlzIGFscmVhZHkgc2V0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNYXJrIGdvdEluaXRpYWxSZXNwb25zZSB0byB0cnVlIGFuZCBub3RpZnkgc3Vic2NyaWJlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9sb2FkUHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdvdEluaXRpYWxSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm5vdGlmeVN1YnNjcmliZXJzKF90aGlzLm11dGF0aW9uUXVldWUuZ2V0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQSBtb3JlIHJlY2VudCBjYWxsIHRvIGxvYWQoKSBpcyBvbmdvaW5nLCBPUiB3YXMgb25nb2luZyBidXQgcmVzcG9uZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJlZm9yZSB1cy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW4gYW55IGNhc2UgcmV0dXJuIHRoaXMuX2xvYWRQcm9taXNlLiBJZiBpdCdzIG9uZ29pbmcgd2UnbGwgd2FpdCBmb3IgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gZmluaXNoLiBJZiBpdCdzIG51bGwsIHdlJ2xsIGJlIHJldHVybmluZyBmaW5hbGx5IGhlcmUgd2l0aG91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbnkgYWN0aW9uLCBiZWNhdXNlIHRoZSBhY3Rpb24gd2FzIHRha2VuIGJ5IHRoZSByZWZyZXNoZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5fbG9hZFByb21pc2U7IC8vIFdhaXQgZm9yIHRoZSByZWZyZXNoZWQgbG9hZCB0byBjb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbG9hZFByb21pc2VdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFF1ZXJ5LnByb3RvdHlwZS5fbG9hZCA9IGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubXV0YXRpb25RdWV1ZS5hZmZlY3RzUXVlcnkodGhpcy50YWJsZSwgdGhpcy5xdWVyeSwgdGhpcy5pbmNsdWRlcykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlcmUgYXJlIG91dGdvaW5nIG11dGF0aW9ucyB0aGF0IGFmZmVjdHMgdGhpcyBxdWVyeS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5lZWQgdG8gd2FpdCB0aWxsIHRoZXkgcmVhY2ggc2VydmVyIGFuZCBzZXJ2ZXIgcmVzcG9uZHMgd2l0aCBPSyBiZWZvcmUgcXVlcnlpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzZXJ2ZXIuIE90aGVyd2lzZSwgd2UgbWF5IGdldCBpbmFjY3VyYXRlIGRhdGEgZnJvbSBzZXJ2ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlcG8ud3JpdGVyLndhaXRGb3JWZXJzaW9uVG9QZXJzaXN0KHZlcnNpb24pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlcmUgYXJlIG91dGdvaW5nIG11dGF0aW9ucyB0aGF0IGFmZmVjdHMgdGhpcyBxdWVyeS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5lZWQgdG8gd2FpdCB0aWxsIHRoZXkgcmVhY2ggc2VydmVyIGFuZCBzZXJ2ZXIgcmVzcG9uZHMgd2l0aCBPSyBiZWZvcmUgcXVlcnlpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzZXJ2ZXIuIE90aGVyd2lzZSwgd2UgbWF5IGdldCBpbmFjY3VyYXRlIGRhdGEgZnJvbSBzZXJ2ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5xdWVyeVNlcnZlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kUXVlcnkucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzICE9PSBzdWJzY3JpcHRpb247IH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFF1ZXJ5LnByb3RvdHlwZS5jb21taXRNdXRhdGlvbnMgPSBmdW5jdGlvbiAobXV0YXRpb25zLCB2ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9pLCBtdXRhdGlvbnNfMSwgbSwgZGF0YTtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEpIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2kgPSAwLCBtdXRhdGlvbnNfMSA9IG11dGF0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoX2kgPCBtdXRhdGlvbnNfMS5sZW5ndGgpKSByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0gPSBtdXRhdGlvbnNfMVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShtLm9wID09PSAnY2xlYXItYnJhbmNoJyAmJiAobS5icmFuY2hJZCA9PT0gdGhpcy5xdWVyeS5icmFuY2hJZCkpKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVmcmVzaE9ySW52YWxpZGF0ZSh2ZXJzaW9uKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobS5vcCA9PT0gJ21lcmdlJyAmJiAoIW0udGFyZ2V0QnJhbmNoSWQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLmJyYW5jaElkID09PSB0aGlzLnF1ZXJ5LmJyYW5jaElkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbS50YXJnZXRCcmFuY2hJZCA9PT0gdGhpcy5xdWVyeS5icmFuY2hJZCkpKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVmcmVzaE9ySW52YWxpZGF0ZSh2ZXJzaW9uKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobS5vcCA9PT0gJ3VwZGF0ZScgJiYgKChtLmRlbHRhRG9jLnRhZ3MgJiYgdGhpcy5xdWVyeS50YWdzKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtLmRlbHRhRG9jLm5hbWUgJiYgdGhpcy5xdWVyeS5uYW1lKSkpKSByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEEgdGFnIG1heSBoYXZlIGJlZW4gYWRkZWQsIG9yIHJlbmFtZWQsIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHF1ZXJ5IGlzIGRlcGVuZGVudCBvbiB0aGUgc2FtZSBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBxdWVyeSBtdXN0IGJlIHJlZnJlc2hlZCBmcm9tIHNlcnZlciBhcyB3ZSBjYW5ub3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbW1pdCB0aGUgbXV0YXRpb25zIGxvY2FsbHkgYXMgd2UgZG9uJ3QgaGF2ZSBhbGwgaW5mby5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVmcmVzaE9ySW52YWxpZGF0ZSh2ZXJzaW9uKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEEgdGFnIG1heSBoYXZlIGJlZW4gYWRkZWQsIG9yIHJlbmFtZWQsIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHF1ZXJ5IGlzIGRlcGVuZGVudCBvbiB0aGUgc2FtZSBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBxdWVyeSBtdXN0IGJlIHJlZnJlc2hlZCBmcm9tIHNlcnZlciBhcyB3ZSBjYW5ub3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbW1pdCB0aGUgbXV0YXRpb25zIGxvY2FsbHkgYXMgd2UgZG9uJ3QgaGF2ZSBhbGwgaW5mby5cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2krKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5nZXREYXRhV2l0aE11dGF0aW9uc0FwcGxpZWQobXV0YXRpb25zLCBmYWxzZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRRdWVyeS5wcm90b3R5cGUucmVmcmVzaE9ySW52YWxpZGF0ZSA9IGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLnN1YnNjcmlwdGlvbnMubGVuZ3RoID09PSAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5sb2FkKHZlcnNpb24pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kUXVlcnkucHJvdG90eXBlLm5vdGlmeVN1YnNjcmliZXJzID0gZnVuY3Rpb24gKG9wdGltaXN0aWNNdXRhdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmdvdEluaXRpYWxSZXNwb25zZSkge1xuICAgICAgICAgICAgdmFyIGRhdGFfMSA9IHRoaXMuZ2V0RGF0YVdpdGhNdXRhdGlvbnNBcHBsaWVkKG9wdGltaXN0aWNNdXRhdGlvbnMsIHRydWUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIHMubm90aWZ5U3Vic2NyaWJlcihkYXRhXzEsIF90aGlzLmVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kUXVlcnkucHJvdG90eXBlLnF1ZXJ5TG9jYWxseSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwby5xdWVyeVNldC5xdWVyeUxvY2FsbHkodGhpcy50YWJsZSwgdGhpcy5xdWVyeSwgdGhpcy5pbmNsdWRlcyk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kUXVlcnkucHJvdG90eXBlLnF1ZXJ5U2VydmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVwby5nZXRDbGllbnQoKS5saXN0KHRoaXMudGFibGUsIHRzbGliXzEuX19hc3NpZ24oe30sIHRoaXMucXVlcnkpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZGF0YV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFF1ZXJ5LnByb3RvdHlwZS5nZXREYXRhV2l0aE11dGF0aW9uc0FwcGxpZWQgPSBmdW5jdGlvbiAobXV0YXRpb25zLCBvcHRpbWlzdGljLCBkYXRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgICAgICAgZGF0YSA9IF90aGlzLmFwcGx5TXV0YXRpb25zT25EYXRhKGRhdGEsIG11dGF0aW9uLCBvcHRpbWlzdGljKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFF1ZXJ5LnByb3RvdHlwZS5hcHBseU11dGF0aW9uc09uRGF0YSA9IGZ1bmN0aW9uIChkYXRhLCBtLCBvcHRpbWlzdGljKSB7XG4gICAgICAgIGlmIChicmFuY2hTZW5zaXRpdmUobSkgJiYgbS5icmFuY2hJZCAhPSB0aGlzLnF1ZXJ5LmJyYW5jaElkKVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIHRhYmxlID0gX2EudGFibGUsIGluY2x1ZGVzID0gX2EuaW5jbHVkZXMsIGxpc3RPcHRpb25zID0gX2EucXVlcnk7XG4gICAgICAgIHZhciBzb3VyY2VJZHMgPSBsaXN0T3B0aW9ucy5oYXNFZGdlc0Zyb20gPyBbXS5jb25jYXQobGlzdE9wdGlvbnMuaGFzRWRnZXNGcm9tIHx8IFtdKSA6IFtdO1xuICAgICAgICB2YXIgcmVxdWVzdGVkVGFncyA9IGxpc3RPcHRpb25zLnRhZ3MgPyBbXS5jb25jYXQobGlzdE9wdGlvbnMudGFncyB8fCBbXSkgOiBbXTtcbiAgICAgICAgc3dpdGNoIChtLm9wKSB7XG4gICAgICAgICAgICBjYXNlICd1cGRhdGUnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZUFycmF5KGRhdGEsIGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvYy5pZCA9PT0gbS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgZGVsdGEgb24gdXBkYXRlZCBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZWREb2MgPSBhcHBseURlbHRhKGRvYywgbS5kZWx0YURvYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW1pc3RpYylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkRG9jLiRtZXRhID0gJ3VwZGF0aW5nJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVkRG9jO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGlkIGRvZXMgbm90IGFwcGx5IHRvIHRoaXMgZG9jLCBzZWFyY2ggaW4gZ3JhcGhzIHRoZSBpZCBpcyBmb3VuZFxuICAgICAgICAgICAgICAgICAgICAvLyBhbW9uZyBncmFwaCBpbmNsdWRlZCBkb2NzLCBhbmQgaWYgc28sIHVwZGF0ZSB0aGF0IG9uZTpcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZXMuZm9yRWFjaChmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmNsdWRlZERvY3MgPSBkb2NbbGFiZWxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluY2x1ZGVkRG9jcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGVkQXJyYXkgPSB1cGRhdGVBcnJheShpbmNsdWRlZERvY3MsIGZ1bmN0aW9uIChyZWxhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGVkLmlkICE9PSBtLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbGF0ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGVkUmVsYXRlZCA9IGFwcGx5RGVsdGEocmVsYXRlZCwgbS5kZWx0YURvYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpbWlzdGljKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFJlbGF0ZWQuJG1ldGEgPSAndXBkYXRpbmcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlZFJlbGF0ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRBcnJheSAhPT0gaW5jbHVkZWREb2NzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYyA9IHRzbGliXzEuX19hc3NpZ24oe30sIGRvYywgKF9hID0ge30sIF9hW2xhYmVsXSA9IHVwZGF0ZWRBcnJheSwgX2EpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgICAgICAgICBpZiAodGFibGUgPT09IG0udGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RPcHRpb25zLnRhZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBxdWVyaWVkVGFnc18xID0gW10uY29uY2F0KGxpc3RPcHRpb25zLnRhZ3MpOyAvLyB0YWcgY2FuIGJlIGVpdGhlciBzdHJpbmcgb3Igc3RyaW5nW10uIE1ha2UgaXMgc3RyaW5nW10gYWx3YXlzLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0uZG9jLnRhZ3MgJiYgbS5kb2MudGFncy5zb21lKGZ1bmN0aW9uICh0YWcpIHsgcmV0dXJuIHF1ZXJpZWRUYWdzXzEuaW5jbHVkZXModGFnKTsgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5jb25jYXQoW20uZG9jXSk7IC8vIE1ha2UgdGhlIGFkZGVkIGRvYyBhcHBlYXIgaW4gdGhlIHJlc3VsdCAob3B0aW1pc3RpYyBtdXRhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBUb2RvLCBhcHBseSBhbHNvIGZvciBvdGhlciBsaXN0IG9wdGlvbnMsIGxpa2UgaWRzOlxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgYWJvdmUgY29kZSBmb3IgJ2FkZCcgd2FzIG9ubHkgd3JpdHRlbiB0byBjb3ZlciB0aGUgdXNlIGNhc2Ugb2YgdGVhY2hlcnMtcGFnZSBub3RpZmljYXRpb25zIVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTsgLy8gZmFsbGJhY2sgY2FzZSAtIHF1ZXJ5IHdhcyBub3QgYWZmZWN0ZWQuXG4gICAgICAgICAgICBjYXNlICdhZGQtcmVsYXRlZCc6XG4gICAgICAgICAgICAgICAgaWYgKHRhYmxlID09PSBtLnRhYmxlICYmIGluY2x1ZGVzLmluZGV4T2YobS5ncmFwaFByb3ApICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBleHByZXNzaW9uIGlzIGBkYi5jb3Vyc2VCbG9ja3MuLi4ud2hhdGV2ZXIuLiAuaW5jbHVkZShcImFiaWxpdGllc1wiKWAsIGRldGVjdDogZGIuY291cnNlQmxvY2tzLmFkZFJlbGF0ZWQoYmxvY2tJZCwgJ2FiaWxpdGllcycsIC4uLilcbiAgICAgICAgICAgICAgICAgICAgLy8gLi4uYmVjYXVzZSB0YWJsZSA9ICdjb3Vyc2VCbG9ja3MnIGFuZCBpbmNsdWRlcyBoYXMgXCJhYmlsaXRpZXNcIi5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZUFycmF5KGRhdGEsIGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2MuaWQgIT09IG0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvYztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWxhdGVkRG9jID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgbS5yZWxhdGVkRG9jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpbWlzdGljKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZWREb2MuJG1ldGEgPSAnYWRkaW5nJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXNzaWduKHt9LCBkb2MsIChfYSA9IHt9LCBfYVttLmdyYXBoUHJvcF0gPSBkb2NbbS5ncmFwaFByb3BdLmNvbmNhdChbcmVsYXRlZERvY10pLCBfYSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RPcHRpb25zLmhhc0VkZ2VzRnJvbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlSWRzLmluY2x1ZGVzKG0uaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBleHByZXNzaW9uIGlzOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBgZGIuY291cnNlQmxvY2tzLmhhc0VkZ2VzRnJvbShbY291cnNlSWRdKWAgIChtZWFuaW5nIHRhYmxlPSdjb3Vyc2VCbG9ja3MnIGFuZCBzb3VyY2VJZHMgaW5jbHVkZXMgY291cnNlSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAsIGRldGVjdDogZGIuY291cnNlSW5zdGFuY2VzLmFkZFJlbGF0ZWQoY291cnNlSWQsICdjb3Vyc2VCbG9ja3MnLCAuLi4uKSAvLyBtLmdyYXBoUHJvcCA9PT0gJ2Jsb2NrcyctLT4gZ2V0VGFibGVGcm9tTGFiZWwgLS0+ICdjb3Vyc2VCbG9ja3MnXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFibGUgPT09IGdldFRhYmxlRnJvbUxhYmVsKG0udGFibGUsIG0uZ3JhcGhQcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbGlzdE9wdGlvbnMudGFncylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuY29uY2F0KHRoaXMuc2V0R3JhcGhQcm9wcyhtLnJlbGF0ZWREb2MpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobS5yZWxhdGVkRG9jLnRhZ3MgJiYgcmVxdWVzdGVkVGFncy5zb21lKGZ1bmN0aW9uICh0YWcpIHsgcmV0dXJuIG0ucmVsYXRlZERvYy50YWdzLmluY2x1ZGVzKHRhZyk7IH0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmNvbmNhdCh0aGlzLnNldEdyYXBoUHJvcHMobS5yZWxhdGVkRG9jKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsaXN0T3B0aW9ucy5pZHMgJiYgbGlzdE9wdGlvbnMuaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7IHJldHVybiBpZCA9PT0gbS5yZWxhdGVkRG9jLmlkOyB9KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBIGNlcnRhaW4gSUQgaXMgb2JzZXJ2ZWQuIEEgZG9jIHdpdGggdGhpcyBpZCBpcyBiZWluZyBhZGRlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBkb2MgdG8gdGhlIHJlc3VsdC4gRXhhY3RseSB0aGlzIFdJTEwgaGFwcGVuIGluIHRoZSBmb2xsb3dpbmcgdHlwaWNhbCBzY2VuYXJpbzpcbiAgICAgICAgICAgICAgICAgICAgLy8gMS4gVXNlciBhZGRzIGEgcmVsYXRlZCBkb2N1bWVudCB0byBhIGxpc3QuXG4gICAgICAgICAgICAgICAgICAgIC8vIDIuIERvY3VtZW50IHJlbWFpbnMgd2l0aGluIHRoZSBNdXRhdGlvblF1ZXVlIHdoaWxlIGJhdGNoLXJlcXVlc3QgaXMgYmVpbmcgcHJvY2Vzc2VkIGJ5IHNlcnZlci5cbiAgICAgICAgICAgICAgICAgICAgLy8gMy4gVXNlciBjbGlja3MgdGhlIGFkZGVkIGl0ZW0gdG8gZWRpdCBvciB2aWV3IGl0IChvciBvdXIgY29tcG9uZW50IHJlZGlyZWN0cyB0byBpdHMgZWRpdG9yKVxuICAgICAgICAgICAgICAgICAgICAvLyA0LiBBIG5ldyBxdWVyeSBvZiB0aGF0IHBhcnRpY3VsYXIgSUQgaXMgc3Vic2NyaWJlZCB0byB7aWRzPVt0aGVJZF19XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIEtlZEJhY2tlbmRRdWVyeS5zdWJzY3JpYmUgdGhlbiBkb2VzIHRoaXM6XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgMS4gQ2FsbCBxdWVyeUxvY2FsbHkoKSBiZWZvcmUgcXVlcnlpbmcgc2VydmVyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgMi4gcXVlcnlMb2NhbGx5KCkgaW5zcGVjdHMgbXV0YXRpb25zIGFuZCBmaW5kcyBhIG1hdGNoLCByZXR1cm5pbmcgYW4gZW1wdHkgbGlzdFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIChhc3N1bWVzIGFzIHdlIGFyZSBhZGRpbmcgaXQsIGl0IGNhbid0IGV4aXN0IG9uIHRoZSBzZXJ2ZXIgYW55d2F5KVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIDMuIEtlZEJhY2tlbmRRVWVyeSBhcHBsaWVzIG11dGF0aW9ucyBvbnRvIHRoZSBlbXB0eSBsaXN0LCBhbmQgZW5kcyB1cCBoZXJlIHRvIGFkZFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGl0IG9wdGltaXN0aWNhbGx5LlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIDQuIFdoZW4gc2VydmVyIHJlc3BvbmRzIHdpdGggMjAwIE9LLCBjYWxscyB1cyBoZXJlIGFnYWluIHdpdGggb3B0aW1pc3RpYz1mYWxzZVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRvIFwicGVyc2lzdFwiIGl0IGluIHRoZSBxdWVyeSdzIGRhdGEgYXJyYXkuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgNEI6IElmIG5vdCAyMDAgT0ssIG11dGF0aW9uIG1heSBiZSBnb25lIGFuZCB0aGUgc3Vic2NyaWJlciB3aWxsIHNlIGFuIGVycm9yIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcIkNvdWxkIG5vdCBmaW5kIGVudGl0eSB3aXRoIGlkIFguXCIgYWxvbmcgd2l0aCBhIHJlZCBlcnJvciBtZXNzYWdlIG9uIHRoZSBzY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBhYm91dCB0aGF0IGl0IGZhaWxlZCB0byBzYXZlIG9uIHNlcnZlci5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuY29uY2F0KHRoaXMuc2V0R3JhcGhQcm9wcyhtLnJlbGF0ZWREb2MpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmUtcmVsYXRlZCc6XG4gICAgICAgICAgICAgICAgaWYgKHRhYmxlID09PSBtLnRhYmxlICYmIGluY2x1ZGVzLmluZGV4T2YobS5ncmFwaFByb3ApICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlQXJyYXkoZGF0YSwgZnVuY3Rpb24gKGRvYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluY2x1ZGVkRG9jcyA9IGRvY1ttLmdyYXBoUHJvcF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWluY2x1ZGVkRG9jcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvYy5pZCAhPT0gbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hc3NpZ24oe30sIGRvYywgKF9hID0ge30sIF9hW20uZ3JhcGhQcm9wXSA9IG9wdGltaXN0aWMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hcmsgcmVsYXRlZC1kb2MtdG8tcmVtb3ZlIHdpdGggJG1ldGE6ICdkZWxldGluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZERvY3MubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmlkICE9PSBtLnJlbGF0ZWREb2MuaWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkIDogdHNsaWJfMS5fX2Fzc2lnbih7fSwgZCwgeyAkbWV0YTogJ2RlbGV0aW5nJyB9KTsgfSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSByZWxhdGVkLWRvYy10by1yZW1vdmUgZnJvbSBkb2NbZ3JhcFByb3BdOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVkRG9jcy5maWx0ZXIoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuaWQgIT09IG0ucmVsYXRlZERvYy5pZDsgfSksIF9hKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGlzdE9wdGlvbnMuaGFzRWRnZXNGcm9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VJZHMuaW5jbHVkZXMobS5pZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW1pc3RpYyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuaWQgPT09IG0ucmVsYXRlZERvYy5pZCA/IHRzbGliXzEuX19hc3NpZ24oe30sIGQsIHsgJG1ldGE6ICdkZWxldGluZycgfSkgOiBkOyB9KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuaWQgIT09IG0ucmVsYXRlZERvYy5pZDsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgICBpZiAodGFibGUgPT09IG0udGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmlkICE9PSBtLmlkOyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGlzdE9wdGlvbnMuaW5jbHVkZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5jbHVkZWRUYWJsZXMgPSBpbmNsdWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobGFiZWwpIHsgcmV0dXJuICh7IGxhYmVsOiBsYWJlbCwgdGFibGU6IGdldFRhYmxlRnJvbUxhYmVsKHRhYmxlLCBsYWJlbCkgfSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGFiZWxzXzEgPSBpbmNsdWRlZFRhYmxlcy5maWx0ZXIoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBfYS50YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZSA9PT0gbS50YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbHNfMS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlQXJyYXkoZGF0YSwgZnVuY3Rpb24gKGRvYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsc18xLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9IF9hLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWxhdGVkRG9jcyA9IGRvY1tsYWJlbF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdGVkRG9jcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgZG9jLCAoX2IgPSB7fSwgX2JbbGFiZWxdID0gb3B0aW1pc3RpYyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlZERvY3MubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLmlkID09PSBtLmlkID8gdHNsaWJfMS5fX2Fzc2lnbih7fSwgZCwgeyAkbWV0YTogJ2RlbGV0aW5nJyB9KSA6IGQ7IH0pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdGVkRG9jcy5maWx0ZXIoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IF9hLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWQgIT09IG0uaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIF9iKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kUXVlcnkucHJvdG90eXBlLnNldEdyYXBoUHJvcHMgPSBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgIHZhciBjb3B5ID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgZG9jKTtcbiAgICAgICAgdGhpcy5pbmNsdWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChsYWJlbCkgeyByZXR1cm4gY29weVtsYWJlbF0gPSBjb3B5W2xhYmVsXSB8fCBbXTsgfSk7XG4gICAgICAgIHJldHVybiBjb3B5O1xuICAgIH07XG4gICAgcmV0dXJuIEtlZEJhY2tlbmRRdWVyeTtcbn0oKSk7XG5leHBvcnQgeyBLZWRCYWNrZW5kUXVlcnkgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWtlZGJhY2tlbmQtcXVlcnkuanMubWFwIiwiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHRhYmxlcyB9IGZyb20gJ2tlZGJhY2tlbmQtc2NoZW1hL3NjaGVtYS5qc29uJztcbmltcG9ydCB7IEtlZEJhY2tlbmRDb2xsZWN0aW9uIH0gZnJvbSAnLi9rZWRiYWNrZW5kLWNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgUXVlcnlTZXQgfSBmcm9tICcuL3F1ZXJ5LXNldCc7XG5pbXBvcnQgeyBNdXRhdGlvblF1ZXVlIH0gZnJvbSAnLi9tdXRhdGlvbi1xdWV1ZSc7XG5pbXBvcnQgeyBLZWRCYWNrZW5kV3JpdGVyIH0gZnJvbSAnLi9rZWRiYWNrZW5kLXdyaXRlcic7XG5pbXBvcnQgeyBEZWx0YUNvbGxlY3Rpb24gfSBmcm9tICcuL2RlbHRhLWNvbGxlY3Rpb24vZGVsdGEtY29sbGVjdGlvbic7XG52YXIgS2VkQmFja2VuZFJlcG8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gS2VkQmFja2VuZFJlcG8oZ2V0Q2xpZW50LCBnZXRVc2VyLCBnZXRVc2VyRGlzcGxheU5hbWUsIGRlZmF1bHRRdWVyeU9wdGlvbnMsIG11dGF0aW9uUXVldWUsIHF1ZXJ5U2V0LCB3cml0ZXIsIGNhY2hlT3B0aW1pemVkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZ2V0Q2xpZW50ID0gZ2V0Q2xpZW50O1xuICAgICAgICB0aGlzLmdldFVzZXIgPSBnZXRVc2VyO1xuICAgICAgICB0aGlzLmdldFVzZXJEaXNwbGF5TmFtZSA9IGdldFVzZXJEaXNwbGF5TmFtZTtcbiAgICAgICAgdGhpcy5kZWZhdWx0UXVlcnlPcHRpb25zID0gZGVmYXVsdFF1ZXJ5T3B0aW9ucztcbiAgICAgICAgdGhpcy5tdXRhdGlvblF1ZXVlID0gbXV0YXRpb25RdWV1ZTtcbiAgICAgICAgdGhpcy5xdWVyeVNldCA9IHF1ZXJ5U2V0O1xuICAgICAgICB0aGlzLndyaXRlciA9IHdyaXRlcjtcbiAgICAgICAgdGhpcy5jYWNoZU9wdGltaXplZCA9IGNhY2hlT3B0aW1pemVkO1xuICAgICAgICBpZiAoIWRlZmF1bHRRdWVyeU9wdGlvbnMpXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRRdWVyeU9wdGlvbnMgPSB7fTtcbiAgICAgICAgaWYgKCFtdXRhdGlvblF1ZXVlKVxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvblF1ZXVlID0gbmV3IE11dGF0aW9uUXVldWUoKTtcbiAgICAgICAgaWYgKCFxdWVyeVNldClcbiAgICAgICAgICAgIHRoaXMucXVlcnlTZXQgPSBuZXcgUXVlcnlTZXQodGhpcy5tdXRhdGlvblF1ZXVlKTtcbiAgICAgICAgaWYgKCF3cml0ZXIpXG4gICAgICAgICAgICB0aGlzLndyaXRlciA9IG5ldyBLZWRCYWNrZW5kV3JpdGVyKHRoaXMubXV0YXRpb25RdWV1ZSwgdGhpcy5xdWVyeVNldCwgZ2V0Q2xpZW50LCBnZXRVc2VyLCBnZXRVc2VyRGlzcGxheU5hbWUpO1xuICAgICAgICBPYmplY3Qua2V5cyh0YWJsZXMpLmZvckVhY2goZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IG5ldyBLZWRCYWNrZW5kQ29sbGVjdGlvbihfdGhpcywgdGFibGUsIGRlZmF1bHRRdWVyeU9wdGlvbnMgfHwge30pO1xuICAgICAgICAgICAgaWYgKGNhY2hlT3B0aW1pemVkKSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb24uY2FjaGVPcHRpbWl6ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzW3RhYmxlXSA9IGNvbGxlY3Rpb247XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRlbHRhcyA9IG5ldyBEZWx0YUNvbGxlY3Rpb24odGhpcy53cml0ZXIuZGVsdGFDYWNoZSwge1xuICAgICAgICAgICAgYnJhbmNoSWQ6IHRoaXMuZGVmYXVsdFF1ZXJ5T3B0aW9ucy5icmFuY2hJZCAvLyBJZiBicmFuY2hJZCBpcyB1bmRlZmluZWQuIERlbHRhQ29sbGVjdGlvbiB3aWxsIHJlc3BvbmQgd2l0aCBFcnJvciBvbiBzdWJzY3JpYmUoKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgS2VkQmFja2VuZFJlcG8ucHJvdG90eXBlLnRhYmxlID0gZnVuY3Rpb24gKHRhYmxlTmFtZSkge1xuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IG5ldyBLZWRCYWNrZW5kQ29sbGVjdGlvbih0aGlzLCB0YWJsZU5hbWUsIHRoaXMuZGVmYXVsdFF1ZXJ5T3B0aW9ucyk7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlT3B0aW1pemVkKVxuICAgICAgICAgICAgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb24uY2FjaGVPcHRpbWl6ZWQoKTtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kUmVwby5wcm90b3R5cGUuX2Nsb25lID0gZnVuY3Rpb24gKHF1ZXJ5T3B0aW9ucywgY2FjaGVPcHRpbWl6ZWQpIHtcbiAgICAgICAgdmFyIGNsb25lID0gbmV3IEtlZEJhY2tlbmRSZXBvKHRoaXMuZ2V0Q2xpZW50LCB0aGlzLmdldFVzZXIsIHRoaXMuZ2V0VXNlckRpc3BsYXlOYW1lLCB0c2xpYl8xLl9fYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRRdWVyeU9wdGlvbnMsIHF1ZXJ5T3B0aW9ucyksIHRoaXMubXV0YXRpb25RdWV1ZSwgdGhpcy5xdWVyeVNldCwgdGhpcy53cml0ZXIsIGNhY2hlT3B0aW1pemVkID09PSB1bmRlZmluZWQgPyB0aGlzLmNhY2hlT3B0aW1pemVkIDogY2FjaGVPcHRpbWl6ZWQpO1xuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kUmVwby5wcm90b3R5cGUuYnJhbmNoID0gZnVuY3Rpb24gKGJyYW5jaElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbG9uZSh7IGJyYW5jaElkOiBicmFuY2hJZCB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRSZXBvLnByb3RvdHlwZS5yb2xlID0gZnVuY3Rpb24gKHJvbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb25lKHsgcm9sZTogcm9sZSB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRSZXBvLnByb3RvdHlwZS5vcHRpbWl6ZUNhY2hlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xvbmUoe30sIHRydWUpO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFJlcG8ucHJvdG90eXBlLmNsZWFyQnJhbmNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdFF1ZXJ5T3B0aW9ucy5icmFuY2hJZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBjbGVhciBtYXN0ZXIgYnJhbmNoXCIpO1xuICAgICAgICB0aGlzLndyaXRlci5tdXRhdGUoW3sgb3A6ICdjbGVhci1icmFuY2gnLCBicmFuY2hJZDogdGhpcy5kZWZhdWx0UXVlcnlPcHRpb25zLmJyYW5jaElkIH1dLCAwKTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRSZXBvLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uICh0YXJnZXRCcmFuY2hJZCkge1xuICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdFF1ZXJ5T3B0aW9ucy5icmFuY2hJZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBtZXJnZSBmcm9tIG1hc3RlciBicmFuY2hcIik7XG4gICAgICAgIHRoaXMud3JpdGVyLm11dGF0ZShbeyBvcDogJ21lcmdlJywgYnJhbmNoSWQ6IHRoaXMuZGVmYXVsdFF1ZXJ5T3B0aW9ucy5icmFuY2hJZCwgdGFyZ2V0QnJhbmNoSWQ6IHRhcmdldEJyYW5jaElkIH1dLCAwKTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRSZXBvLnByb3RvdHlwZS5zYXZlTm93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLndyaXRlci53YWl0Rm9yVmVyc2lvblRvUGVyc2lzdCh0aGlzLndyaXRlci5jdXJyZW50VmVyc2lvbildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEtlZEJhY2tlbmRSZXBvO1xufSgpKTtcbmV4cG9ydCB7IEtlZEJhY2tlbmRSZXBvIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1rZWRiYWNrZW5kLXJlcG8uanMubWFwIiwidmFyIEtlZEJhY2tlbmRTdWJzY3JpcHRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gS2VkQmFja2VuZFN1YnNjcmlwdGlvbihzdWJzY3JpYmVyLCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlciA9IHN1YnNjcmliZXI7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgfVxuICAgIEtlZEJhY2tlbmRTdWJzY3JpcHRpb24ucHJvdG90eXBlLm5vdGlmeVN1YnNjcmliZXIgPSBmdW5jdGlvbiAoZGF0YSwgZXJyb3IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZXIoW10sIGVycm9yLCB0aGlzKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEgIT09IHRoaXMubGFzdE5vdGlmaWVkRGF0YSkgeyAvLyBXaWxsIGluLWZhY3QgYmUgZXF1YWwgYnkgcmVmZXJlbmNlIGlmIGRhdGEgaXMgc2FtZSBhcyBsYXN0IG5vdGlmaWNhdGlvbiAoYXMgd2UgdXNlIGFuIGltbXV0YWJsZSBhcHByb2FjaCBvbiBkYXRhKVxuICAgICAgICAgICAgICAgIHRoaXMubGFzdE5vdGlmaWVkRGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyKGRhdGEsIGVycm9yLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyKFtdLCBleCwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXgyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIG5vdGlmeWluZyBLZWRCYWNrZW5kU3Vic2NyaWJlcjpcIiwgZXgyLCAnb3JpZ2luYWxseSBub3RpZmllZCBlcnJvcjonLCBleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEtlZEJhY2tlbmRTdWJzY3JpcHRpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24udW5zdWJzY3JpYmUodGhpcyk7XG4gICAgfTtcbiAgICByZXR1cm4gS2VkQmFja2VuZFN1YnNjcmlwdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBLZWRCYWNrZW5kU3Vic2NyaXB0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1rZWRiYWNrZW5kLXN1YnNjcmlwdGlvbi5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTXV0YXRpb25RdWV1ZSB9IGZyb20gJy4vbXV0YXRpb24tcXVldWUnO1xuaW1wb3J0IHsgQmF0Y2hSdW5uZXIgfSBmcm9tICcuLi9rZWQtYmFja2VuZC1jbGllbnQnO1xuaW1wb3J0IHsgdGFibGVzIH0gZnJvbSAna2VkYmFja2VuZC1zY2hlbWEvc2NoZW1hLmpzb24nO1xuaW1wb3J0IHsgQ2FjaGVCdXN0IH0gZnJvbSAnLi9jYWNoZS1idXN0JztcbmltcG9ydCB7IEVtaXR0ZXIgfSBmcm9tICcuLi9vYnNlcnZhYmxlJztcbmltcG9ydCB7IERlbHRhQ2FjaGUgfSBmcm9tICcuL2RlbHRhLWNvbGxlY3Rpb24vZGVsdGEtY2FjaGUnO1xudmFyIEtlZEJhY2tlbmRXcml0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gS2VkQmFja2VuZFdyaXRlcihtdXRhdGlvblF1ZXVlLCBxdWVyeVNldCwgZ2V0Q2xpZW50LCBnZXRVc2VyLCBnZXRVc2VyRGlzcGxheU5hbWUpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvblF1ZXVlID0gbXV0YXRpb25RdWV1ZTtcbiAgICAgICAgdGhpcy5xdWVyeVNldCA9IHF1ZXJ5U2V0O1xuICAgICAgICB0aGlzLmdldENsaWVudCA9IGdldENsaWVudDtcbiAgICAgICAgdGhpcy5nZXRVc2VyID0gZ2V0VXNlcjtcbiAgICAgICAgdGhpcy5nZXRVc2VyRGlzcGxheU5hbWUgPSBnZXRVc2VyRGlzcGxheU5hbWU7XG4gICAgICAgIHRoaXMuX3RpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2lzU2F2aW5nUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VycmVudFZlcnNpb24gPSAwO1xuICAgICAgICB0aGlzLnBlcnNpc3RlZFZlcnNpb24gPSBuZXcgRW1pdHRlcigwKTtcbiAgICAgICAgdGhpcy5lcnJvclN1YnNjcmliZXJzID0gW107XG4gICAgICAgIHRoaXMuc3RhdGVTdWJzY3JpYmVycyA9IFtdO1xuICAgICAgICB0aGlzLmRlbHRhQ2FjaGUgPSBuZXcgRGVsdGFDYWNoZShnZXRDbGllbnQsIGdldFVzZXIsIGdldFVzZXJEaXNwbGF5TmFtZSk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShLZWRCYWNrZW5kV3JpdGVyLnByb3RvdHlwZSwgXCJpc1NhdmluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gISF0aGlzLl9pc1NhdmluZ1Byb21pc2U7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShLZWRCYWNrZW5kV3JpdGVyLnByb3RvdHlwZSwgXCJpc0VkaXRlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5tdXRhdGlvblF1ZXVlLmdldCgpLmxlbmd0aCA+IDA7IH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEtlZEJhY2tlbmRXcml0ZXIucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5lcnJvclN1YnNjcmliZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFdyaXRlci5wcm90b3R5cGUub25TdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnN0YXRlU3Vic2NyaWJlcnMucHVzaChjYWxsYmFjayk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kV3JpdGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5lcnJvclN1YnNjcmliZXJzID0gdGhpcy5lcnJvclN1YnNjcmliZXJzLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcyAhPT0gY2FsbGJhY2s7IH0pO1xuICAgICAgICB0aGlzLnN0YXRlU3Vic2NyaWJlcnMgPSB0aGlzLnN0YXRlU3Vic2NyaWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzICE9PSBjYWxsYmFjazsgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kV3JpdGVyLnByb3RvdHlwZS5kaXNwYXRjaEVycm9yID0gZnVuY3Rpb24gKGVycm9yLCByZXRyeWFibGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5lcnJvclN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCByZXRyeWFibGUsIF90aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7IH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kV3JpdGVyLnByb3RvdHlwZS5kaXNwYXRjaFN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0YXRlU3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHsgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRXcml0ZXIucHJvdG90eXBlLm11dGF0ZSA9IGZ1bmN0aW9uIChtdXRhdGlvbnMsIGRlYm91bmNlKSB7XG4gICAgICAgIHRoaXMubXV0YXRpb25RdWV1ZS5hZGQobXV0YXRpb25zKTtcbiAgICAgICAgKyt0aGlzLmN1cnJlbnRWZXJzaW9uO1xuICAgICAgICB0aGlzLmRpc3BhdGNoU3RhdGVDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5xdWVyeVNldC5ub3RpZnlTdWJzY3JpYmVycygpO1xuICAgICAgICB0aGlzLmRlbHRhQ2FjaGUuYXBwbHlNdXRhdGlvbnModGhpcy5tdXRhdGlvblF1ZXVlLmdldCgpLCB7IG9wdGltaXN0aWM6IHRydWUgfSk7XG4gICAgICAgIGlmICghdGhpcy5faXNTYXZpbmdQcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fdGltZW91dElkKVxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0SWQpO1xuICAgICAgICAgICAgdGhpcy5fdGltZW91dElkID0gc2V0VGltZW91dCh0aGlzLnNhdmUuYmluZCh0aGlzKSwgZGVib3VuY2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGlzU2F2aW5nLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLCBiZWNhc2UgaXQgd2lsbCByZS1jaGVjayBpZiBhZGRpdGlvbmFsXG4gICAgICAgIC8vIG11dGF0aW9ucyBoYXZlIGNvbWUsIHdoZW4gc2F2aW5nIGlzIGRvbmUuXG4gICAgfTtcbiAgICBLZWRCYWNrZW5kV3JpdGVyLnByb3RvdHlwZS5yZXRyeVNhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhdmUoKTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRXcml0ZXIucHJvdG90eXBlLndhaXRGb3JWZXJzaW9uVG9QZXJzaXN0ID0gZnVuY3Rpb24gKHZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGVyc2lzdGVkVmVyc2lvbjtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBlcnNpc3RlZFZlcnNpb24ubG9hZCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGVkVmVyc2lvbiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHBlcnNpc3RlZFZlcnNpb24gPCB2ZXJzaW9uKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmUoKTsgLy8gQmUgbW9yZSBlYWdlciB0byBzYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBlcnNpc3RlZFZlcnNpb24uZmlsdGVyKGZ1bmN0aW9uIChwZXJzaXN0ZWRWZXJzaW9uKSB7IHJldHVybiBwZXJzaXN0ZWRWZXJzaW9uID49IHZlcnNpb247IH0pLmxvYWQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFdyaXRlci5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVvdXRJZClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0SWQpO1xuICAgICAgICBpZiAodGhpcy5faXNTYXZpbmdQcm9taXNlKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2F2aW5nUHJvbWlzZTtcbiAgICAgICAgaWYgKCF0aGlzLmlzRWRpdGVkKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB0aGlzLl90aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB0aGlzLl9pc1NhdmluZ1Byb21pc2UgPSB0aGlzLl9zYXZlKCk7XG4gICAgICAgIHRoaXMuX2lzU2F2aW5nUHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoKSB7IH0pLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2lzU2F2aW5nUHJvbWlzZSA9IG51bGw7IH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTYXZpbmdQcm9taXNlO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFdyaXRlci5wcm90b3R5cGUuX3NhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG11dGF0aW9ucywgdmVyc2lvbiwgbXV0YXRpb25SZXF1ZXN0cywgcmVzXzEsIGV0YWdNdXRhdGlvbnMsIGVycm9yXzE7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hTdGF0ZUNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25zID0gdGhpcy5tdXRhdGlvblF1ZXVlLmdldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbiA9IHRoaXMuY3VycmVudFZlcnNpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm11dGF0aW9uUXVldWUubW92ZVRvU2F2aW5nUXVldWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uUmVxdWVzdHMgPSB0aGlzLm1hcE11dGF0aW9ucyhtdXRhdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDYsIDExLCAxMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXRDbGllbnQoKS5iYXRjaChtdXRhdGlvblJlcXVlc3RzKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc18xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXRhZ011dGF0aW9ucyA9IE9iamVjdC5rZXlzKHJlc18xLm5ld0V0YWdzKS5tYXAoZnVuY3Rpb24gKGlkKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wOiAndXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFEb2M6IHsgJGV0YWc6IHJlc18xLm5ld0V0YWdzW2lkXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5hbWU6IG51bGwgLy8gV2UgZG9uJ3QgaGF2ZSB0aGUgdGFyZ2V0IG5hbWUuIEJ1dCB0aGlzIG11dGF0aW9uIHdvbid0IGJlIHZpc2libGUgaW4gYSBEZWx0YUNvbGxlY3Rpb24gYW55d2F5LCBzbyBpdCB3b250IGJlIHVzZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnZhbGlkYXRlIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICBDYWNoZUJ1c3QuaW52YWxpZGF0ZUNhY2hlKG11dGF0aW9uUmVxdWVzdHMsIHRoaXMuZ2V0VXNlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbW1taXQgbXV0YXRpb25zIGFsb25nIHdpdGggZXRhZ011dGF0aW9ucyBpbnRvIHF1ZXJpZXMgY2FjaGVkIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc2lzdGVkVmVyc2lvbi5kaXNwYXRjaCh2ZXJzaW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsdGFDYWNoZS5hcHBseU11dGF0aW9ucyhtdXRhdGlvbnMsIHsgb3B0aW1pc3RpYzogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnF1ZXJ5U2V0LmNvbW1pdE11dGF0aW9ucyhNdXRhdGlvblF1ZXVlLm1lcmdlKG11dGF0aW9ucywgZXRhZ011dGF0aW9ucyksIHZlcnNpb24pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT24gc3VjY2VzcywgY2xlYXIgc2F2aW5nIHF1ZXVlIGFzIHRoZSBtdXRhdGlvbnMgd2lsbCBub3cgYmUgY29tbWl0dGVkIHRvIGFsbCBxdWVyeSdzIGRhdGEgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXV0YXRpb25RdWV1ZS5jbGVhclNhdmluZ1F1ZXVlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoU3RhdGVDaGFuZ2UoKTsgLy8gaXNFZGl0ZWQgbWF5IGhhdmUgdHVybmVkIHRvIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5hbGx5LCBub3RpZnkgc3Vic2NyaWJlcnMgc28gdGhhdCB2aWV3cyBnZXQgdXBkYXRlZCB3aXRoIGNvbW1pdHRlZCByZXN1bHRzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5U2V0Lm5vdGlmeVN1YnNjcmliZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLm11dGF0aW9uUXVldWUuZ2V0KCkubGVuZ3RoID4gMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkaXRpb25hbCBtdXRhdGlvbnMgaGFwcGVuZCB3aGlsZSB3ZSB3ZXJlIHNhdmluZy4gSGFuZGxlIHRoZW0gYXMgd2VsbC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3NhdmUoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGl0aW9uYWwgbXV0YXRpb25zIGhhcHBlbmQgd2hpbGUgd2Ugd2VyZSBzYXZpbmcuIEhhbmRsZSB0aGVtIGFzIHdlbGwuXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDU7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFszIC8qYnJlYWsqLywgMTJdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0ZWRWZXJzaW9uLmRpc3BhdGNoRXJyb3IoZXJyb3JfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShlcnJvcl8xICYmIGVycm9yXzEubmFtZSAmJiBlcnJvcl8xLm5hbWUuc3RhcnRzV2l0aChcImh0dHA0XCIpKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBY2Nlc3MgQ29udHJvbCBkZW5pZWQsIGJhZCByZXF1ZXN0IG9yIHNpbWlsYXIuIFRocm93IG11dGF0aW9ucyBhd2F5LlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEVycm9yKGVycm9yXzEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXV0YXRpb25RdWV1ZS5jbGVhclNhdmluZ1F1ZXVlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoU3RhdGVDaGFuZ2UoKTsgLy8gaXNFZGl0ZWQgbWF5IGhhdmUgdHVybmVkIHRvIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5U2V0Lm5vdGlmeVN1YnNjcmliZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLm11dGF0aW9uUXVldWUuZ2V0KCkubGVuZ3RoID4gMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSG8gaG8hIEFkZGl0aW9uYWwgbXV0YXRpb25zIGhhcHBlbmQgd2hpbGUgd2Ugd2VyZSBzYXZpbmcuIEhhbmRsZSB0aGVtIGFsb25lLiBUSGV5IG1pZ2h0IGJlIG1vcmUgbHVja3kuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9zYXZlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIbyBobyEgQWRkaXRpb25hbCBtdXRhdGlvbnMgaGFwcGVuZCB3aGlsZSB3ZSB3ZXJlIHNhdmluZy4gSGFuZGxlIHRoZW0gYWxvbmUuIFRIZXkgbWlnaHQgYmUgbW9yZSBsdWNreS5cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gODtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzMgLypicmVhayovLCAxMF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFcnJvcihlcnJvcl8xLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTA7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEyXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hTdGF0ZUNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRXcml0ZXIucHJvdG90eXBlLm1hcE11dGF0aW9ucyA9IGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgdmFyIGJyID0gbmV3IEJhdGNoUnVubmVyKCk7XG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG0ub3ApIHtcbiAgICAgICAgICAgICAgICBjYXNlICd1cGRhdGUnOlxuICAgICAgICAgICAgICAgICAgICBici51cGRhdGUobS50YWJsZSwgbS5pZCwgbS5kZWx0YURvYywgbS5icmFuY2hJZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgICAgICAgICAgICAgIGJyLmFkZChtLnRhYmxlLCBtLmRvYyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FkZC1yZWxhdGVkJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtLnJlbGF0ZWREb2MuJGV0YWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vICRldGFnIG1lYW5zIHRoaXMgaXMgYSBuZXcgZG9jdW1lbnQuIEFkZCBpdCBiZWZvcmUgbGlua2luZyB0byBpdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyLmFkZCh0YWJsZXNbbS50YWJsZV0ucmVsYXRpb25zaGlwc1ttLmdyYXBoUHJvcF0sIG0ucmVsYXRlZERvYywgbS5icmFuY2hJZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnIubGluazIobS50YWJsZSwgbS5pZCwgbS5ncmFwaFByb3AsIG0ucmVsYXRlZERvYy5pZCwgbS5icmFuY2hJZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JlbW92ZS1yZWxhdGVkJzpcbiAgICAgICAgICAgICAgICAgICAgYnIudW5saW5rMihtLnRhYmxlLCBtLmlkLCBtLmdyYXBoUHJvcCwgbS5yZWxhdGVkRG9jLmlkLCBtLmJyYW5jaElkKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAndW5kby1saW5rJzpcbiAgICAgICAgICAgICAgICAgICAgYnIudW5kb0xpbmsobS50YWJsZSwgbS5pZCwgbS5ncmFwaFByb3AsIG0ucmVsYXRlZElkLCBtLmJyYW5jaElkKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgICAgICAgYnIuZGVsZXRlKG0udGFibGUsIG0uaWQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjbGVhci1icmFuY2gnOlxuICAgICAgICAgICAgICAgICAgICBici5jbGVhckJyYW5jaChtLmJyYW5jaElkKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWVyZ2UnOlxuICAgICAgICAgICAgICAgICAgICBici5tZXJnZShtLmJyYW5jaElkLCBtLnRhcmdldEJyYW5jaElkKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYnIubXV0YXRpb25SZXF1ZXN0cztcbiAgICB9O1xuICAgIHJldHVybiBLZWRCYWNrZW5kV3JpdGVyO1xufSgpKTtcbmV4cG9ydCB7IEtlZEJhY2tlbmRXcml0ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWtlZGJhY2tlbmQtd3JpdGVyLmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBnZXRUYWJsZUZyb21MYWJlbCwgYnJhbmNoU2Vuc2l0aXZlLCBnbG9iYWxPcCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgbWVyZ2VEZWx0YXMgfSBmcm9tICcuL2RlbHRhLW1lcmdlJztcbnZhciBNdXRhdGlvblF1ZXVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE11dGF0aW9uUXVldWUoKSB7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5zYXZpbmdRdWV1ZSA9IFtdO1xuICAgIH1cbiAgICBNdXRhdGlvblF1ZXVlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgIHRoaXMucXVldWUgPSBNdXRhdGlvblF1ZXVlLm1lcmdlKHRoaXMucXVldWUsIG11dGF0aW9ucyk7XG4gICAgfTtcbiAgICBNdXRhdGlvblF1ZXVlLnByb3RvdHlwZS5tb3ZlVG9TYXZpbmdRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zYXZpbmdRdWV1ZSA9IE11dGF0aW9uUXVldWUubWVyZ2UodGhpcy5zYXZpbmdRdWV1ZSwgdGhpcy5xdWV1ZSk7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICB9O1xuICAgIE11dGF0aW9uUXVldWUucHJvdG90eXBlLmNsZWFyU2F2aW5nUXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2F2aW5nUXVldWUgPSBbXTtcbiAgICB9O1xuICAgIE11dGF0aW9uUXVldWUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2F2aW5nUXVldWUuY29uY2F0KHRoaXMucXVldWUpO1xuICAgIH07XG4gICAgTXV0YXRpb25RdWV1ZS5wcm90b3R5cGUuYWZmZWN0c1F1ZXJ5ID0gZnVuY3Rpb24gKHRhYmxlLCBxdWVyeSwgaW5jbHVkZXMpIHtcbiAgICAgICAgdmFyIG11dGF0aW9ucyA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIGlmIChtdXRhdGlvbnMuc29tZShmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5vcCA9PT0gJ21lcmdlJyB8fCBtLm9wID09PSAnY2xlYXItYnJhbmNoJzsgfSkpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHF1ZXJ5Lmlkcykge1xuICAgICAgICAgICAgLy8gQSBxdWVyeSB3aXRoIFwiaWRzXCIgZmlsdGVyIHdpbGwgYmUgZWFzeSB0byBkZXRlY3QgYSBuby1tYXRjaCBvbjpcbiAgICAgICAgICAgIHJldHVybiBtdXRhdGlvbnMuc29tZShmdW5jdGlvbiAobSkgeyByZXR1cm4gZ2xvYmFsT3AobSkgfHwgKCFicmFuY2hTZW5zaXRpdmUobSkgfHwgbS5icmFuY2hJZCA9PT0gcXVlcnkuYnJhbmNoSWQpICYmXG4gICAgICAgICAgICAgICAgcXVlcnkuaWRzLmluY2x1ZGVzKG0uaWQpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIGNoZWNrIGlmIG11dGF0aW9ucyBhZmZlY3Qgc2FtZSBicmFuY2ggYW5kIHRhYmxlLiBDb3VsZCBiZSBkb25lIG1vcmUgZmluZSBncmFpbmVkLFxuICAgICAgICAvLyBidXQgdGhhdCB3b3VsZCBvbmx5IGJlIGEgc3Vib3B0aW1pemF0aW9uLlxuICAgICAgICByZXR1cm4gbXV0YXRpb25zLnNvbWUoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIHJldHVybiBtLm9wID09PSAnYWRkJyA/XG4gICAgICAgICAgICAgICAgbS50YWJsZSA9PT0gdGFibGUgOlxuICAgICAgICAgICAgICAgIG0ub3AgPT09ICdkZWxldGUnID9cbiAgICAgICAgICAgICAgICAgICAgbS50YWJsZSA9PT0gdGFibGUgfHwgKGluY2x1ZGVzLnNvbWUoZnVuY3Rpb24gKGxhYmVsKSB7IHJldHVybiBnZXRUYWJsZUZyb21MYWJlbCh0YWJsZSwgbGFiZWwpID09PSBtLnRhYmxlOyB9KSkgOlxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxPcChtKSA/IHRydWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgbS5icmFuY2hJZCA9PSBxdWVyeS5icmFuY2hJZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtLnRhYmxlID09PSB0YWJsZSB8fCAobS5vcCAhPT0gJ3VwZGF0ZScgJiYgKFt0YWJsZV0uY29uY2F0KGluY2x1ZGVzLm1hcChmdW5jdGlvbiAobGFiZWwpIHsgcmV0dXJuIGdldFRhYmxlRnJvbUxhYmVsKHRhYmxlLCBsYWJlbCk7IH0pKS5zb21lKGZ1bmN0aW9uICh0YWJsZSkgeyByZXR1cm4gZ2V0VGFibGVGcm9tTGFiZWwobS50YWJsZSwgbS5ncmFwaFByb3ApID09PSB0YWJsZTsgfSkpKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTXV0YXRpb25RdWV1ZS5tZXJnZSA9IGZ1bmN0aW9uIChxdWV1ZTEsIHF1ZXVlMikge1xuICAgICAgICB2YXIgbXV0YWJsZVF1ZXVlMSA9IHF1ZXVlMS5zbGljZSgpO1xuICAgICAgICB2YXIgbXV0YWJsZVF1ZXVlMiA9IHF1ZXVlMi5zbGljZSgpO1xuICAgICAgICAvL2lmIChtdXRhYmxlUXVldWUxLmxlbmd0aCA+IDApIGRlYnVnZ2VyO1xuICAgICAgICB2YXIgbGVuID0gcXVldWUxLmxlbmd0aDtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIG0gPSBxdWV1ZTFbaV07XG4gICAgICAgICAgICBpZiAobS5vcCA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcHBpbmdJZE9wSWR4ID0gbXV0YWJsZVF1ZXVlMi5maW5kSW5kZXgoZnVuY3Rpb24gKG5ld011dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3TXV0Lm9wID09PSAndXBkYXRlJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXV0LmJyYW5jaElkID09PSBtLmJyYW5jaElkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNdXQuaWQgPT09IG0uaWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJsYXBwaW5nSWRPcElkeCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG11dGFibGVRdWV1ZTFbaV0gPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBtLCB7IGRlbHRhRG9jOiBtZXJnZURlbHRhcyhtLmRlbHRhRG9jLCBtdXRhYmxlUXVldWUyW292ZXJsYXBwaW5nSWRPcElkeF0uZGVsdGFEb2MpIH0pO1xuICAgICAgICAgICAgICAgICAgICBtdXRhYmxlUXVldWUyLnNwbGljZShvdmVybGFwcGluZ0lkT3BJZHgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbXV0YWJsZVF1ZXVlMS5jb25jYXQobXV0YWJsZVF1ZXVlMik7XG4gICAgfTtcbiAgICByZXR1cm4gTXV0YXRpb25RdWV1ZTtcbn0oKSk7XG5leHBvcnQgeyBNdXRhdGlvblF1ZXVlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tdXRhdGlvbi1xdWV1ZS5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgS2VkQmFja2VuZFF1ZXJ5IH0gZnJvbSAnLi9rZWRiYWNrZW5kLXF1ZXJ5JztcbmltcG9ydCAqIGFzIEpzb25TY2hlbWEgZnJvbSAna2VkYmFja2VuZC1zY2hlbWEvc2NoZW1hLmpzb24nO1xuaW1wb3J0IHsgcXVlcnlBcnJheSB9IGZyb20gJy4vdXRpbHMnO1xudmFyIFF1ZXJ5U2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFF1ZXJ5U2V0KG11dGF0aW9uUXVldWUpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvblF1ZXVlID0gbXV0YXRpb25RdWV1ZTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gW107XG4gICAgfVxuICAgIFF1ZXJ5U2V0LnByb3RvdHlwZS5jb21taXRNdXRhdGlvbnMgPSBmdW5jdGlvbiAobXV0YXRpb25zLCB2ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UuYWxsKHRoaXMucXVlcmllcy5tYXAoZnVuY3Rpb24gKHEpIHsgcmV0dXJuIHEuY29tbWl0TXV0YXRpb25zKG11dGF0aW9ucywgdmVyc2lvbik7IH0pKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYW51cEludmFsaWRRdWVyaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUXVlcnlTZXQucHJvdG90eXBlLmNsZWFudXBJbnZhbGlkUXVlcmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5xdWVyaWVzLmZpbHRlcihmdW5jdGlvbiAocSkge1xuICAgICAgICAgICAgaWYgKHEuaW52YWxpZCkge1xuICAgICAgICAgICAgICAgIGlmIChxLnRpbWVvdXRIYW5kbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHEudGltZW91dEhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHEudGltZW91dEhhbmRsZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5U2V0LnByb3RvdHlwZS5ub3RpZnlTdWJzY3JpYmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wdGltaXN0aWNNdXRhdGlvbnMgPSB0aGlzLm11dGF0aW9uUXVldWUuZ2V0KCk7XG4gICAgICAgIHRoaXMucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChxKSB7XG4gICAgICAgICAgICBxLm5vdGlmeVN1YnNjcmliZXJzKG9wdGltaXN0aWNNdXRhdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5U2V0LnByb3RvdHlwZS5maW5kUXVlcnkgPSBmdW5jdGlvbiAodGFibGUsIHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMuZmluZChmdW5jdGlvbiAocSkgeyByZXR1cm4gcS5xdWVyeUtleSA9PT0gS2VkQmFja2VuZFF1ZXJ5LnF1ZXJ5S2V5KHRhYmxlLCBxdWVyeSk7IH0pO1xuICAgIH07XG4gICAgUXVlcnlTZXQucHJvdG90eXBlLnF1ZXJ5TG9jYWxseSA9IGZ1bmN0aW9uICh0YWJsZSwgcXVlcnksIGluY2x1ZGVzKSB7XG4gICAgICAgIC8vIEZvciBub3csIG9ubHkgaGFuZGxlIHRoaXMgdmVyeSBjb21tb24gYW5kIHNwZWNpYWwgY2FzZSAod2hpY2hcbiAgICAgICAgLy8gd2lsbCBzYXZlIGEgbG90IG9mIHVubmVzY2Vzc2FyeSBuZXR3b3JrIHRyYWZmaWMgaWYgSSBhbSB0aGlua2luZyByaWdodC4uLilcbiAgICAgICAgdmFyIG11dGF0aW9ucyA9IHRoaXMubXV0YXRpb25RdWV1ZS5nZXQoKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHF1ZXJ5IHdhbnRzIHRvIGdldCBhIHNpbmdsZSBlbnRpdHkgYnkgaXRzIElEOlxuICAgICAgICBpZiAocXVlcnkuaWRzICYmIHF1ZXJ5Lmlkcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIC8vIEFuZCBpZiBzbywgaWYgd2UgaGF2ZSBhbiBvdXRnb2luZyBtdXRhdGlvbiB0byBjcmVhdGUgdGhhdCBlbnRpdHk6XG4gICAgICAgICAgICBpZiAobXV0YXRpb25zLnNvbWUoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0ub3AgPT09ICdhZGQtcmVsYXRlZCcgJiYgbS5yZWxhdGVkRG9jLmlkID09PSBxdWVyeS5pZHNbMF07IH0pKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlbiByZXR1cm4gYW4gRU1QVFkgcmVzcG9uc2UsIHNpZ25hbGxpbmcgdGhhdCB3ZSBjYW4gcmVzb2x2ZSB0aGlzIGxvY2FsbHksXG4gICAgICAgICAgICAgICAgLy8gYnV0IGxldCB0aGUgb3B0aXN0aWMgZmVhdHVyZSBvZiBLZWRCYWNrZW5kUXVlcnkgYXBwbHkgdGhlIG11dGF0aW9uIGJlZm9yZVxuICAgICAgICAgICAgICAgIC8vIG5vdGlmeWluZyBzdWJzY3JpYmVycyAod2UgZG9uJ3Qgd2FudCBpdCB0byBiZSBwZXJzaXN0ZW50IGJlZm9yZSB0aGUgc2VydmVyXG4gICAgICAgICAgICAgICAgLy8gaGFzIGFjY2VwdGVkIHRoZSBtdXRhdGlvbilcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gT0ssIGFub3RoZXIgcXVpdGUgY29tbW9uIGNhc2UgaXMgd2hlbiB3ZSBhc2sgZm9yIGEgY2VydGFpbiBJRCBhbmQgdGhhdCBJRCByZXBsaWVzXG4gICAgICAgIC8vIHdpdGhpbiBhbm90aGVyIHF1ZXJ5XG4gICAgICAgIGlmIChxdWVyeS5oYXNFZGdlc0Zyb20gfHwgcXVlcnkuaGFzRWRnZXNUbylcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBOb3QgcG9zc2libGUgdG8gaGFuZGxlXG4gICAgICAgIGlmICghcXVlcnkuaWRzKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIEZvciBub3csIGp1c3QgdGFrZSBoaWdodCBmb3IgdGhpcyBwYXJ0aWN1bGFyIGFuZCBtb3N0IGNvbW1vbiBjYXNlIVxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChxKSB7XG4gICAgICAgICAgICBpZiAoIXEuZ290SW5pdGlhbFJlc3BvbnNlKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICBpZiAocS5xdWVyeS5icmFuY2hJZCAhPT0gcXVlcnkuYnJhbmNoSWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIGlmIChxLnF1ZXJ5LmZsYWdzKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7IC8vIEl0IHdvdWxkIGJlIGNvbXBsZXggdG8gc3VwcG9ydCB2YXJpb3VzIGZsYWdzLiBRdWVyeSdzIGRhdGEgbWF5IGluY2x1ZGUgaWRzIG9ubHkuIENhbid0IHJlbHkgb24gdGhlIHF1ZXJ5LlxuICAgICAgICAgICAgdmFyIHFJbmNsdWRlcyA9IHEuaW5jbHVkZXM7XG4gICAgICAgICAgICBpZiAocUluY2x1ZGVzLmxlbmd0aCA+IDAgJiYgKCFxdWVyeS5pbmNsdWRlIHx8IHF1ZXJ5LmluY2x1ZGUubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IGluY2x1ZGUsIGJ1dCB0aGlzIHF1ZXJ5IGRvZXMuIENoZWNrIGlmIHdlIGNhbiBmaW5kIG91ciByZXN1bHQgd2l0aGluIGl0LlxuICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9IHFJbmNsdWRlcy5maW5kKGZ1bmN0aW9uIChsKSB7IHJldHVybiBKc29uU2NoZW1hLnRhYmxlc1txLnRhYmxlXVtcInJlbGF0aW9uc2hpcHNcIl1bbF0gPT09IHRhYmxlOyB9KTtcbiAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc18xID0ge307XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBxLmRhdGE7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW50aXR5ID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1YkRhdGEgPSBxdWVyeUFycmF5KHF1ZXJ5LCBlbnRpdHlbbGFiZWxdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YkRhdGEuZm9yRWFjaChmdW5jdGlvbiAocikgeyByZXR1cm4gcmVzXzFbci5pZF0gPSByOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0XzEgPSBPYmplY3Qua2V5cyhyZXNfMSkubWFwKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gcmVzXzFbaWRdOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSByZXR1cm4gcmVzdWx0IGlmIHdlIGNvdWxkIGxvb2sgdXAgZXZlcnkgcmVxdWVzdGVkIElEOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXF1ZXJ5Lmlkcy5ldmVyeShmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIHJlc3VsdF8xLnNvbWUoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguaWQgPT09IGlkOyB9KTsgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogcmVzdWx0XzEgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWluY2x1ZGVzLmV2ZXJ5KGZ1bmN0aW9uIChsYWJlbCkgeyByZXR1cm4gcUluY2x1ZGVzLmluY2x1ZGVzKGxhYmVsKTsgfSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIC8vIExhc3RseSwgaWYgdGhlIHF1ZXJ5IGluY2x1ZGVzIGFsbCBncmFwaHMgdGhhdCB3ZSBkbywgcGljayB0aGUgc3Vic2V0IGZyb20gdGhhdCBxdWVyeS5cbiAgICAgICAgICAgIC8vIENvbmNyZXRlIGV4YW1wbGU6IFdlIG9ic2VydmUgYSBjZXJ0YWluIFRhc2sgYnkgSUQgYW5kIHdhbnQgaXRzIGtub3dsZWRnZVJlcXVpcmVtZW50cyBhbG9uZyB3aXRoIGl0LFxuICAgICAgICAgICAgLy8gYW5kIHRoZXJlJ3MgYW5vdGhlciBxdWVyeSBvZiBhbGwgdGFza3MgdGhhdCBhbHNvIGluY2x1ZGVzIGtub3dsZWRnZVJlcXVpcmVtZW50cy4gVXNlIGl0LiBcbiAgICAgICAgICAgIGlmIChxLnRhYmxlID09PSB0YWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHRfMiA9IHF1ZXJ5QXJyYXkocXVlcnksIHEuZGF0YSk7XG4gICAgICAgICAgICAgICAgLy8gT25seSByZXR1cm4gcmVzdWx0IGlmIHdlIGNvdWxkIGxvb2sgdXAgZXZlcnkgcmVxdWVzdGVkIElEOlxuICAgICAgICAgICAgICAgIGlmICghcXVlcnkuaWRzLmV2ZXJ5KGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gcmVzdWx0XzIuc29tZShmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5pZCA9PT0gaWQ7IH0pOyB9KSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogcmVzdWx0XzIgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMucXVlcmllczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBxID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIHN0YXRlXzEgPSBfbG9vcF8xKHEpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZV8xID09PSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZV8xLnZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeVNldC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgICB2YXIgX2EgPSBzdWJzY3JpcHRpb24uY29sbGVjdGlvbiwgdGFibGUgPSBfYS50YWJsZSwgcXVlcnkgPSBfYS5xdWVyeSwgcmVwbyA9IF9hLnJlcG87XG4gICAgICAgIHZhciBrYlF1ZXJ5ID0gdGhpcy5maW5kUXVlcnkodGFibGUsIHF1ZXJ5KTtcbiAgICAgICAgaWYgKCFrYlF1ZXJ5KSB7XG4gICAgICAgICAgICBrYlF1ZXJ5ID0gbmV3IEtlZEJhY2tlbmRRdWVyeSh0YWJsZSwgcXVlcnksIHJlcG8uZ2V0VXNlcigpLCByZXBvLCB0aGlzLm11dGF0aW9uUXVldWUpO1xuICAgICAgICAgICAgdGhpcy5xdWVyaWVzLnB1c2goa2JRdWVyeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoa2JRdWVyeS50aW1lb3V0SGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGtiUXVlcnkudGltZW91dEhhbmRsZSk7XG4gICAgICAgICAgICAgICAga2JRdWVyeS50aW1lb3V0SGFuZGxlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBrYlF1ZXJ5LnN1YnNjcmliZShzdWJzY3JpcHRpb24pO1xuICAgIH07XG4gICAgUXVlcnlTZXQucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSBzdWJzY3JpcHRpb24uY29sbGVjdGlvbiwgdGFibGUgPSBfYS50YWJsZSwgcXVlcnkgPSBfYS5xdWVyeSwgcmVwbyA9IF9hLnJlcG87XG4gICAgICAgIHZhciBrYlF1ZXJ5ID0gdGhpcy5maW5kUXVlcnkodGFibGUsIHF1ZXJ5KTtcbiAgICAgICAgaWYgKGtiUXVlcnkpIHtcbiAgICAgICAgICAgIC8vIFByb2hpYml0IGZ1cnRoZXIgbm90aWZpY2F0aW9ucyB0byB0aGlzIHN1YnNjcmlwdGlvbjpcbiAgICAgICAgICAgIGtiUXVlcnkudW5zdWJzY3JpYmUoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIC8vIFJlbGVhc2UgdW5uZXNjZXNzYXJ5IG1lbW9yeSB3aGVuIHRoZXJlIGFyZSBubyBtb3JlIHN1YnNjcmlwdGlvbnMgb2YgdGhpcyBxdWVyeSwgYnkgcmVtb3ZpbmcgdGhlIHF1ZXJ5IGl0c2VsZlxuICAgICAgICAgICAgLy8gVG8gdGhhdCBpbiBhIGRlbGF5ZWQgbWFubmVyLCBzbyB0aGF0IGFuIHVuc3Vic2NyaWJlKCkgZm9sbG93ZWQgYnkgYW4gaW1tZWRpYXRlIHN1YnNjcmliZSgpIGRvbid0IGhhdmUgdG8gcmUtcXVlcnkgdGhlIHNlcnZlcjpcbiAgICAgICAgICAgIGlmIChrYlF1ZXJ5LnN1YnNjcmlwdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gU2NoZWR1bGUgZm9yIGdhcmJhZ2UgY29sbGVjdGlvbiBpbiA1IG1pbnV0ZXM6XG4gICAgICAgICAgICAgICAga2JRdWVyeS50aW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGtiUXVlcnkgc3RpbGwgaGFzIG5vIHN1YnNjcmlwdGlvbnMgKG5vdCBjZXJ0YWluISBBIG5ldyBzdWJzY3JpYmVyIG1heSBoYXZlIGNvbWUgYWxvbmcuLi4pXG4gICAgICAgICAgICAgICAgICAgIGlmIChrYlF1ZXJ5LnN1YnNjcmlwdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGlsbCBubyBzdWJzY3JpcHRpb25zIG9uIGl0LCB0aW1lIHRvIHJlbGVhc2Ugc29tZSBtZW1vcnkgYW5kIGZvcmdldCB0aGUgaW4tbWVtb3J5IGNhY2hlIG9mIHRoZSBxdWVyeSByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnF1ZXJpZXMgPSBfdGhpcy5xdWVyaWVzLmZpbHRlcihmdW5jdGlvbiAocSkgeyByZXR1cm4gcSAhPT0ga2JRdWVyeTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0aGlzLnF1ZXJpZXMubGVuZ3RoID4gNTAgP1xuICAgICAgICAgICAgICAgICAgICA1MDAgOiAvLyBEb24ndCBob3N0IHRvbyBtYW55IHF1ZXJpZXMuIEdhcmJhZ2UgY29sbGVjdCB0aGlzIHdpdGhpbiA1MDAgbXNcbiAgICAgICAgICAgICAgICAgICAgNSAqIDYwMDAwKTsgLy8gQWxsb3cgcXVlcnkgaW4gbWVtb3J5IGZvciBhbm90aGVyIDUgbWludXRlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gUXVlcnlTZXQ7XG59KCkpO1xuZXhwb3J0IHsgUXVlcnlTZXQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LXNldC5qcy5tYXAiLCJpbXBvcnQgeyB0YWJsZXMgfSBmcm9tICdrZWRiYWNrZW5kLXNjaGVtYS9zY2hlbWEuanNvbic7XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFibGVGcm9tTGFiZWwodGFibGUsIGxhYmVsKSB7XG4gICAgcmV0dXJuIHRhYmxlc1t0YWJsZV0ucmVsYXRpb25zaGlwc1tsYWJlbF07XG59XG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBcnJheShxdWVyeSwgZGF0YSkge1xuICAgIHZhciBmaWx0ZXIgPSBnZXRGaWx0ZXJGcm9tUXVlcnkocXVlcnkpO1xuICAgIHJldHVybiBkYXRhLmZpbHRlcihmaWx0ZXIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEFORChmaWx0ZXIxLCBmaWx0ZXIyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7IHJldHVybiBmaWx0ZXIxKHgpICYmIGZpbHRlcjIoeCk7IH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyRnJvbVF1ZXJ5KHF1ZXJ5KSB7XG4gICAgdmFyIGZpbHRlciA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiB0cnVlOyB9O1xuICAgIGlmIChxdWVyeS5mcm9tKVxuICAgICAgICByZXR1cm4gQU5EKGZpbHRlciwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguZGF0ZVRpbWUgPj0gcXVlcnkuZnJvbTsgfSk7XG4gICAgaWYgKHF1ZXJ5LnRvKVxuICAgICAgICByZXR1cm4gQU5EKGZpbHRlciwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguZGF0ZVRpbWUgPCBxdWVyeS50bzsgfSk7XG4gICAgaWYgKHF1ZXJ5LmlkcylcbiAgICAgICAgcmV0dXJuIEFORChmaWx0ZXIsIGZ1bmN0aW9uICh4KSB7IHJldHVybiBxdWVyeS5pZHMuaW5jbHVkZXMoeC5pZCk7IH0pO1xuICAgIGlmIChxdWVyeS5uYW1lKVxuICAgICAgICByZXR1cm4gQU5EKGZpbHRlciwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgubmFtZSA9PT0gcXVlcnkubmFtZTsgfSk7XG4gICAgaWYgKHF1ZXJ5LnRhZ3MpXG4gICAgICAgIHJldHVybiBBTkQoZmlsdGVyLCBmdW5jdGlvbiAoeCkgeyByZXR1cm4geC50YWdzICYmIFtdLmNvbmNhdChxdWVyeS50YWdzIHx8IFtdKS5zb21lKGZ1bmN0aW9uICh0YWcpIHsgcmV0dXJuIHgudGFncy5pbmNsdWRlcyh0YWcpOyB9KTsgfSk7XG4gICAgLy8gcXVlcnkuaGFzRWRnZXNGcm9tIGFuZCBxdWVyeS5oYXNFZGdlc1RvIGNhbm5vdCBieSBmaWx0ZXJlZCBoZXJlXG4gICAgcmV0dXJuIGZpbHRlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBicmFuY2hTZW5zaXRpdmUobSkge1xuICAgIHJldHVybiBtLm9wICE9PSAnZGVsZXRlJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnbG9iYWxPcChtKSB7XG4gICAgcmV0dXJuIG0ub3AgPT09ICdjbGVhci1icmFuY2gnIHx8IG0ub3AgPT09ICdtZXJnZSc7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuL29ic2VydmFibGVcIjtcbmltcG9ydCB7IGluaXRNYXBNZXRob2QgfSBmcm9tIFwiLi9tYXBcIjtcbmltcG9ydCB7IFZhbHVlIH0gZnJvbSBcIi4vdmFsdWVcIjtcbmltcG9ydCB7IEVtaXR0ZXIgfSBmcm9tIFwiLi9lbWl0dGVyXCI7XG52YXIgQ29sbGVjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhDb2xsZWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbGxlY3Rpb24oc3Vic2NyaWJlKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBzdWJzY3JpYmUpIHx8IHRoaXM7XG4gICAgfVxuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLl9tYXAgPSBmdW5jdGlvbiAobWFwcGVyKSB7XG4gICAgICAgIHRocm93IFwibWl4ZWRpblwiO1xuICAgIH07XG4gICAgQ29sbGVjdGlvbi5mcm9tID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgaWYgKHguc3Vic2NyaWJlKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xsZWN0aW9uKGZ1bmN0aW9uIChzKSB7IHJldHVybiB4LnN1YnNjcmliZShzKTsgfSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgICAgICAgICB2YXIgZW1pdHRlcl8xID0gbmV3IEVtaXR0ZXIoeCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbGxlY3Rpb24oZnVuY3Rpb24gKHMpIHsgcmV0dXJuIGVtaXR0ZXJfMS5zdWJzY3JpYmUocyk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9ic2VydmFibGVDb2xsZWN0aW9uLmZyb20oKSBjYW4gb25seSB0YWtlIGFycmF5cyBvciBvYnNlcnZhYmxlc1wiKTtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChtYXBwZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcChmdW5jdGlvbiAoaXRlbXMpIHsgcmV0dXJuIGl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gbWFwcGVyKGl0ZW0pOyB9KTsgfSk7XG4gICAgfTtcbiAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5mbGF0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwKGZ1bmN0aW9uIChpdGVtcykgeyByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCBpdGVtcyk7IH0pO1xuICAgIH07XG4gICAgQ29sbGVjdGlvbi5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGZpbHRlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwKGZ1bmN0aW9uIChpdGVtcykgeyByZXR1cm4gaXRlbXMuZmlsdGVyKGZpbHRlcik7IH0pO1xuICAgIH07XG4gICAgQ29sbGVjdGlvbi5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHJldHVybiBDb2xsZWN0aW9uLmZyb20odGhpcy50b1ZhbHVlKCkuY29tYmluZUxhdGVzdChvdGhlcikubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG1lID0gX2FbMF0sIG90aGVyID0gX2FbMV07XG4gICAgICAgICAgICByZXR1cm4gbWUuY29uY2F0KG90aGVyKTtcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgQ29sbGVjdGlvbi5wcm90b3R5cGUub3JkZXJCeSA9IGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvVmFsdWUoKS5tYXAoZnVuY3Rpb24gKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHZhciBhUHJvcCA9IGEgJiYgYVtwcm9wXTtcbiAgICAgICAgICAgIHZhciBiUHJvcCA9IGIgJiYgYltwcm9wXTtcbiAgICAgICAgICAgIHJldHVybiBhUHJvcCA+IGJQcm9wID8gMSA6IGFQcm9wIDwgYlByb3AgPyAtMSA6IDA7XG4gICAgICAgIH0pOyB9KS50b0NvbGxlY3Rpb24oZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0pO1xuICAgIH07XG4gICAgQ29sbGVjdGlvbi5wcm90b3R5cGUudG9WYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBWYWx1ZShmdW5jdGlvbiAocykgeyByZXR1cm4gX3RoaXMuc3Vic2NyaWJlKHMpOyB9KTtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmdyb3VwQnkgPSBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b1ZhbHVlKCkubWFwKGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICAgICAgdmFyIHJ2ID0ge307XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3QgPSBydltpdGVtW3Byb3BdXSB8fCAocnZbaXRlbVtwcm9wXV0gPSBbXSk7XG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcnY7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29sbGVjdGlvbi5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvVmFsdWUoKS5tYXAoZnVuY3Rpb24gKGFycikgeyByZXR1cm4gYXJyWzBdOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDb2xsZWN0aW9uO1xufShPYnNlcnZhYmxlKSk7XG5leHBvcnQgeyBDb2xsZWN0aW9uIH07XG5Db2xsZWN0aW9uLnByb3RvdHlwZS5fbWFwID0gaW5pdE1hcE1ldGhvZChDb2xsZWN0aW9uKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxlY3Rpb24uanMubWFwIiwiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFZhbHVlIH0gZnJvbSBcIi4vdmFsdWVcIjtcbnZhciBFbWl0dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEVtaXR0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRW1pdHRlcihpbml0aWFsVmFsdWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zdWJzY3JpYmVycyA9IF90aGlzLnN1YnNjcmliZXJzLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBfYVswXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMgIT09IG9ic2VydmVyO1xuICAgICAgICAgICAgICAgIH0pOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZXJzLnB1c2goW29ic2VydmVyLCBzdWJzY3JpcHRpb25dKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5lcnJvcilcbiAgICAgICAgICAgICAgICBvYnNlcnZlcihudWxsLCBfdGhpcy5lcnJvciwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBvYnNlcnZlcihfdGhpcy52YWx1ZSwgdW5kZWZpbmVkLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3Vic2NyaWJlcnMgPSBbXTtcbiAgICAgICAgX3RoaXMudmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRW1pdHRlci5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaCgpO1xuICAgIH07XG4gICAgRW1pdHRlci5wcm90b3R5cGUuZGlzcGF0Y2hFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoKCk7XG4gICAgfTtcbiAgICBFbWl0dGVyLnByb3RvdHlwZS5fZGlzcGF0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IF9hWzBdLCBzdWJzY3JpcHRpb24gPSBfYVsxXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIoX3RoaXMudmFsdWUsIF90aGlzLmVycm9yLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyKG51bGwsIGVyciwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRW1pdHRlcjtcbn0oVmFsdWUpKTtcbmV4cG9ydCB7IEVtaXR0ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtaXR0ZXIuanMubWFwIiwidmFyIHN0YWNrID0gW107XG52YXIgY3VycmVudEZpYmVyID0gbnVsbDtcbnZhciBwcm92aWRlcnMgPSBbZnVuY3Rpb24gKCkgeyByZXR1cm4gY3VycmVudEZpYmVyOyB9XTtcbmZ1bmN0aW9uIHB1c2hGaWJlcihmaWJlcikge1xuICAgIHN0YWNrLnB1c2goY3VycmVudEZpYmVyKTtcbiAgICBjdXJyZW50RmliZXIgPSBmaWJlcjtcbn1cbmZ1bmN0aW9uIHBvcEZpYmVyKCkge1xuICAgIGN1cnJlbnRGaWJlciA9IHN0YWNrLnBvcCgpO1xufVxuZXhwb3J0IHZhciBGaWJlckNvbnRleHQgPSB7XG4gICAgZ2V0IGN1cnJlbnQoKSB7IHJldHVybiBjdXJyZW50RmliZXI7IH0sXG4gICAgLypydW46IGZ1bmN0aW9uIHJlcnVuPFI+KGZpYmVyOiBGaWJlciwgZm46ICgpPT5SKTogUiB8IFByb21pc2U8Uj4ge1xuICAgICAgcHVzaEZpYmVyKGZpYmVyKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZm4oKSk7XG4gICAgICB9IGNhdGNoIChwKSB7XG4gICAgICAgIGlmIChwICYmIHR5cGVvZiBwLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gcC50aGVuKCgpPT5yZXJ1bihmaWJlciwgZm4pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHBvcEZpYmVyKCk7XG4gICAgICB9XG4gICAgfSwqL1xuICAgIGFkZFByb3ZpZGVyOiBmdW5jdGlvbiAoZ2V0Q3VycmVudEZpYmVyKSB7XG4gICAgICAgIHByb3ZpZGVycy5wdXNoKGdldEN1cnJlbnRGaWJlcik7XG4gICAgICAgIHNldEN1cnJlbnRHZXR0ZXJGcm9tUHJvdmlkZXJzKCk7XG4gICAgfSxcbiAgICByZW1vdmVQcm92aWRlcjogZnVuY3Rpb24gKGdldEN1cnJlbnRGaWJlcikge1xuICAgICAgICBwcm92aWRlcnMgPSBwcm92aWRlcnMuZmlsdGVyKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwICE9PSBnZXRDdXJyZW50RmliZXI7IH0pO1xuICAgICAgICBzZXRDdXJyZW50R2V0dGVyRnJvbVByb3ZpZGVycygpO1xuICAgIH1cbn07XG5mdW5jdGlvbiBzZXRDdXJyZW50R2V0dGVyRnJvbVByb3ZpZGVycygpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmliZXJDb250ZXh0LCBcImN1cnJlbnRcIiwge1xuICAgICAgICBnZXQ6IHByb3ZpZGVycy5yZWR1Y2UoZnVuY3Rpb24gKHAsIGMpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHAoKSB8fCBjKCk7IH07IH0pLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKFwiVXNlIEZpYmVyQ29udGV4dC5wdXNoKCkgdG8gY2hhbmdlIGN1cnJlbnQgZmliZXJcIik7IH1cbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZpYmVyLWNvbnRleHQuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9vYnNlcnZhYmxlJztcbmV4cG9ydCAqIGZyb20gJy4vdmFsdWUnO1xuZXhwb3J0ICogZnJvbSAnLi9jb2xsZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vZW1pdHRlcic7XG5leHBvcnQgKiBmcm9tICcuL2ZpYmVyLWNvbnRleHQnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGluaXRNYXBNZXRob2QoY3Rvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAobWFwcGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgY3RvcihmdW5jdGlvbiAob2JzZXJ2ZXIpIHsgcmV0dXJuIF90aGlzLnN1YnNjcmliZShmdW5jdGlvbiAodmFsdWUsIGVycm9yLCBzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICBvYnNlcnZlcihudWxsLCBlcnJvciwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlcihtYXBwZXIodmFsdWUpLCBlcnJvciwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlcihudWxsLCBlcnIsIHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KTsgfSk7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcC5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gbWl4aW4odGFyZ2V0UHJvdG8sIG1peGluUHJvdG8pIHtcbiAgICB2YXIgcHJvcHMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBwcm9wc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gdGFyZ2V0UHJvdG9bcHJvcF0gPSBtaXhpblByb3RvW3Byb3BdOyB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1peGluLmpzLm1hcCIsInZhciBPYnNlcnZhYmxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8vc3RhdGljIGdldCBbU3ltYm9sLnNwZWNpZXNdKCkgeyByZXR1cm4gdGhpczsgfVxuICAgIGZ1bmN0aW9uIE9ic2VydmFibGUoX3N1YnNjcmliZSkge1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmUgPSBfc3Vic2NyaWJlO1xuICAgIH1cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUoZnVuY3Rpb24gKGl0ZW1zLCBlcnJvciwgc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIoaXRlbXMsIGVycm9yLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyKG51bGwsIGVyciwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIG9ic2VydmVyKG51bGwsIGVycm9yLCB7IHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7IH0gfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlO1xufSgpKTtcbmV4cG9ydCB7IE9ic2VydmFibGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ic2VydmFibGUuanMubWFwIiwiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBpbml0TWFwTWV0aG9kIH0gZnJvbSBcIi4vbWFwXCI7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSBcIi4vY29sbGVjdGlvblwiO1xuaW1wb3J0IHsgRmliZXJDb250ZXh0IH0gZnJvbSAnLi9maWJlci1jb250ZXh0JztcbnZhciBWYWx1ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhWYWx1ZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWYWx1ZShzdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHN1YnNjcmliZSkgfHwgdGhpcztcbiAgICB9XG4gICAgVmFsdWUuZnJvbSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGlmICh4LnN1YnNjcmliZSlcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmFsdWUoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHguc3Vic2NyaWJlKHMpOyB9KTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVmFsdWUuZnJvbSgpIGNhbiBvbmx5IHRha2Ugb2JzZXJ2YWJsZXNcIik7XG4gICAgfTtcbiAgICBWYWx1ZS5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc29sdmVkID0gZmFsc2UsIHJlc3VsdCwgZXJyLCBub3RpZnk7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZShmdW5jdGlvbiAodmFsdWUsIGVycm9yLCBzdWJzY2lwdGlvbikge1xuICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICBlcnIgPSBlcnJvcjtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiBub3RpZnkpXG4gICAgICAgICAgICAgICAgbm90aWZ5KG51bGwsIGVycm9yLCBzdWJzY2lwdGlvbik7XG4gICAgICAgICAgICBlbHNlIGlmIChub3RpZnkpXG4gICAgICAgICAgICAgICAgbm90aWZ5KHZhbHVlLCBudWxsLCBzdWJzY2lwdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50RmliZXIgPSBGaWJlckNvbnRleHQuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghY3VycmVudEZpYmVyKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBGaWJlciBDb250ZXh0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb25zID0gY3VycmVudEZpYmVyLnN1YnNjcmlwdGlvbnMsIG9ic2VydmVyID0gY3VycmVudEZpYmVyLm9ic2VydmVyO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICBub3RpZnkgPSBvYnNlcnZlcjtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbm90aWZ5ID0gZnVuY3Rpb24gKHZhbHVlLCBlcnJvciwgc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFZhbHVlLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uICh2YWx1ZSwgZXJyb3IsIHN1YnNjaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgc3Vic2NpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFZhbHVlLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBWYWx1ZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHsgcmV0dXJuIF90aGlzLnN1YnNjcmliZShmdW5jdGlvbiAodmFsdWUsIGVycm9yLCBzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICBvYnNlcnZlcihudWxsLCBlcnJvciwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGZuKHZhbHVlKSlcbiAgICAgICAgICAgICAgICBvYnNlcnZlcih2YWx1ZSwgZXJyb3IsIHN1YnNjcmlwdGlvbik7XG4gICAgICAgIH0pOyB9KTtcbiAgICB9O1xuICAgIFZhbHVlLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJlZml4LCB4KTtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFZhbHVlLnByb3RvdHlwZS50b0NvbGxlY3Rpb24gPSBmdW5jdGlvbiAobWFwcGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgQ29sbGVjdGlvbihmdW5jdGlvbiAocykgeyByZXR1cm4gX3RoaXMubWFwKG1hcHBlcikuc3Vic2NyaWJlKHMpOyB9KTtcbiAgICB9O1xuICAgIFZhbHVlLnByb3RvdHlwZS5jb21iaW5lTGF0ZXN0ID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgVmFsdWUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gW251bGwsIG51bGxdO1xuICAgICAgICAgICAgdmFyIG15U3Vic2NyaXB0aW9uLCBvdGhlclN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbXlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbXlTdWJzY3JpcHRpb24gPSBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKGl0ZW1zLCBlcnJvciwgcykge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyKG51bGwsIGVycm9yLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZXNbMF0gPSBpdGVtcztcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzWzFdICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlcih2YWx1ZXMsIG51bGwsIHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG90aGVyU3Vic2NyaXB0aW9uID0gb3RoZXIuc3Vic2NyaWJlKGZ1bmN0aW9uICh2YWx1ZSwgZXJyb3IsIHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlcihudWxsLCBlcnJvciwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWVzWzFdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlc1swXSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIodmFsdWVzLCBudWxsLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFZhbHVlLnByb3RvdHlwZS5zd2l0Y2hNYXAgPSBmdW5jdGlvbiAobWFwcGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgVmFsdWUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICB2YXIgbWFwcGVkU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAgICAgdmFyIHJldHVybmVkU3Vic2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWFwcGVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBwZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcHBlZFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChpdGVtLCBlcnJvciwgcykge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IHM7XG4gICAgICAgICAgICAgICAgaWYgKG1hcHBlZFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtYXBwZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgbWFwcGVkU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlcihudWxsLCBlcnJvciwgcmV0dXJuZWRTdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9ic2VydmFibGVPclZhbHVlID0gbWFwcGVyKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ic2VydmFibGVPclZhbHVlICYmIHR5cGVvZiBvYnNlcnZhYmxlT3JWYWx1ZS5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBwZWRTdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlT3JWYWx1ZS5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlLCBlcnJvciwgcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBwZWRTdWJzY3JpcHRpb24gPSBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlcih2YWx1ZSwgZXJyb3IsIHJldHVybmVkU3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyKG9ic2VydmFibGVPclZhbHVlLCBudWxsLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIobnVsbCwgZXJyb3IsIHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXR1cm5lZFN1YnNjcmlwdGlvbjtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gVmFsdWU7XG59KE9ic2VydmFibGUpKTtcbmV4cG9ydCB7IFZhbHVlIH07XG5WYWx1ZS5wcm90b3R5cGUubWFwID0gaW5pdE1hcE1ldGhvZChWYWx1ZSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12YWx1ZS5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2pzL2Rpc3QvanMvb2JzZXJ2YWJsZSc7XG4iLCJleHBvcnQgKiBmcm9tICcuL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtcmVwbyc7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZW4tU0dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgc3Z8ZW5cIjsiLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL2NvbnRyYWN0cy9rZWQtbW9kZWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVzZXJDbGFpbXMgKHVzZXI6IFVzZXIpIHtcbiAgcmV0dXJuIFt7XG4gICAgdHlwZTogXCJlbWFpbFwiLFxuICAgIHZhbHVlOiB1c2VyLm1haWxcbiAgfSx7XG4gICAgdHlwZTogXCJzY2hvb2xcIixcbiAgICB2YWx1ZTogdXNlci5zY2hvb2xcbiAgfV0uY29uY2F0KHVzZXIucm9sZXMubWFwKHJvbGUgPT4gKHtcbiAgICB0eXBlOiBcInJvbGVcIixcbiAgICB2YWx1ZTogcm9sZVxuICB9KSkpLmNvbmNhdCh1c2VyLnJvbGVzLm1hcChyb2xlID0+ICh7XG4gICAgdHlwZTogXCJzY2hvb2xSb2xlXCIsXG4gICAgdmFsdWU6IHVzZXIuc2Nob29sICsgXCIvXCIgKyByb2xlXG4gIH0pKSk7XG59XG4iLCJpbXBvcnQgeyBBY2Nlc3NDbGFpbSwgRG9jdW1lbnRBY2Nlc3MsIGhhc0FjY2VzcyBhcyBfaGFzQWNjZXNzLCBBY2Nlc3NSaWdodCB9IGZyb20gJ2tlZGJhY2tlbmQvY2xpZW50JztcbmltcG9ydCB7IERvY3VtZW50IH0gZnJvbSAna2VkYmFja2VuZC9tb2RlbHMnO1xuaW1wb3J0IGdldFVzZXJDbGFpbXMgZnJvbSAnLi9nZXQtdXNlci1jbGFpbXMnO1xuaW1wb3J0IHsgcGFyc2VRdWVyeVN0cmluZywgZ2VuZXJhdGVRdWVyeVN0cmluZyB9IGZyb20gXCIuLi91dGlscy9xdWVyeS1zdHJpbmdcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9jb250cmFjdHMva2VkLW1vZGVscyc7XG5leHBvcnQgeyBnZXRVc2VyQ2xhaW1zIH07XG5cbmV4cG9ydCBjb25zdCBJTVBFUlNPTkFUSU9OX1FVRVJZX1BBUkFNUyA9IFtcbiAgXCJ1c2VyXCIsXG4gIFwicm9sZVwiLFxuICBcInNjaG9vbFwiLFxuICBcImRlYnVnXCIsXG4gIFwidGVzdFZlcnNpb25cIixcbiAgXCJ0ZXN0dmVyc2lvblwiLFxuICBcImZlYXR1cmVzXCIsXG4gIFwic2Nob29sVHlwZVwiLFxuICBcInNjaG9vbHR5cGVcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNBY2Nlc3ModXNlcjogVXNlciwgZG9jOiBEb2N1bWVudCwgcmVxdWVzdGVkUmlnaHQ6IEFjY2Vzc1JpZ2h0KSB7XG4gIHZhciBjbGFpbXMgPSBnZXRVc2VyQ2xhaW1zKHVzZXIpO1xuICBpZiAocmVxdWVzdGVkUmlnaHQgIT09ICdSJyAmJiB1c2VyLnR1dG9yRm9yKSB7XG4gICAgY2xhaW1zID0gY2xhaW1zLmZpbHRlcihjbGFpbSA9PiBjbGFpbS50eXBlICE9PSAnZW1haWwnKTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gX2hhc0FjY2VzcyhEb2N1bWVudEFjY2Vzcy5mcm9tU3RyaW5nQXJyYXkoZG9jLmFjbCB8fCBbXSksIGNsYWltcywgcmVxdWVzdGVkUmlnaHQpO1xuICAvL2NvbnNvbGUubG9nKGBIYXMgJHtyZXF1ZXN0ZWRSaWdodH0gYWNjZXNzIHRvICR7ZG9jLm5hbWV9LyR7ZG9jLmlkfTogJHtyZXN1bHR9YCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNSZWFkQWNjZXNzKHVzZXI6IFVzZXIsIGRvYzogRG9jdW1lbnQpIHtcbiAgcmV0dXJuIGhhc0FjY2Vzcyh1c2VyLCBkb2MsICdSJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNXcml0ZUFjY2Vzcyh1c2VyOiBVc2VyLCBkb2M6IERvY3VtZW50KSB7XG4gIHJldHVybiBoYXNBY2Nlc3ModXNlciwgZG9jLCAnVycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzU2hhcmVBY2Nlc3ModXNlcjogVXNlciwgZG9jOiBEb2N1bWVudCkge1xuICByZXR1cm4gaGFzQWNjZXNzKHVzZXIsIGRvYywgJ1MnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGVhY2hlckF0U2Nob29sKHVzZXI6IFVzZXIsIHNjaG9vbDogc3RyaW5nKSB7XG4gIGNvbnN0IGlzVGVhY2hlciA9IHVzZXIucm9sZXMuc29tZShyb2xlID0+IHJvbGUgPT09ICdFTVBMT1lFRScgfHwgcm9sZSA9PT0gJ0FETUlOJyk7XG4gIGNvbnN0IGJlbG9uZ3NUb1NjaG9vbCA9IChzY2hvb2x8fFwiXCIpLnRvTG93ZXJDYXNlKCkgPT09IHVzZXIuc2Nob29sLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiAoaXNUZWFjaGVyICYmIGJlbG9uZ3NUb1NjaG9vbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FkbWluT3JUZWFjaGVyQXRTY2hvb2wodXNlcjogVXNlciwgc2Nob29sOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHVzZXIucm9sZXMuaW5jbHVkZXMoXCJBRE1JTlwiKSB8fCBpc1RlYWNoZXJBdFNjaG9vbCh1c2VyLCBzY2hvb2wpO1xufVxuXG5leHBvcnQgY29uc3QgaW1wZXJzb25hdGlvbkVudiA9IHtcbiAgYWN0QXMgKG9wdGlvbnM6IHtyb2xlLCBzY2hvb2wsIHVybD99KSB7XG4gICAgY29uc3Qge3JvbGUsIHNjaG9vbCwgdXJsfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgY3VycmVudFF1ZXJ5ID0gcGFyc2VRdWVyeVN0cmluZyhsb2NhdGlvbi5zZWFyY2gpO1xuICAgIGNvbnN0IG5ld1F1ZXJ5ID0gey4uLmN1cnJlbnRRdWVyeSwgcm9sZSwgc2Nob29sfTtcbiAgICBjb25zdCBuZXdRdWVyeVN0cmluZyA9IGdlbmVyYXRlUXVlcnlTdHJpbmcobmV3UXVlcnkpO1xuICAgIGlmICh1cmwpIHtcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSBgJHt1cmx9JHtuZXdRdWVyeVN0cmluZ31gO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gXCIjXCI7XG4gICAgICBsb2NhdGlvbi5zZWFyY2ggPSBuZXdRdWVyeVN0cmluZztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdEFzKG9wdGlvbnM6IHtyb2xlLCBzY2hvb2wsIHVybD99KSB7XG4gIGltcGVyc29uYXRpb25FbnYuYWN0QXMob3B0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVzZXJ2ZUltcGVyc29uYXRpb25RdWVyeSAodXJsOiBzdHJpbmcsIHF1ZXJ5OiB7W25hbWU6IHN0cmluZ10gOiBzdHJpbmd9KSB7XG4gIGNvbnN0IGN1cnJlbnRRdWVyeSA9IHBhcnNlUXVlcnlTdHJpbmcobG9jYXRpb24uc2VhcmNoKTtcbiAgY29uc3QgcHJlc2VydmVkUXVlcnkgPSB7fTtcbiAgZm9yIChjb25zdCBwYXJhbSBvZiBJTVBFUlNPTkFUSU9OX1FVRVJZX1BBUkFNUykge1xuICAgIGlmIChjdXJyZW50UXVlcnlbcGFyYW1dKSBwcmVzZXJ2ZWRRdWVyeVtwYXJhbV0gPSBjdXJyZW50UXVlcnlbcGFyYW1dO1xuICB9XG4gIGNvbnN0IG5ld1F1ZXJ5U3RyaW5nID0gZ2VuZXJhdGVRdWVyeVN0cmluZyh7Li4ucHJlc2VydmVkUXVlcnksIC4uLnF1ZXJ5fSk7XG4gIGNvbnN0IHBIYXNoID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgcmV0dXJuIHBIYXNoID49IDAgP1xuICAgIGAke3VybC5zdWJzdHIoMCxwSGFzaCl9JHtuZXdRdWVyeVN0cmluZ30ke3VybC5zdWJzdHIocEhhc2gpfWAgOlxuICAgIGAke3VybH0ke25ld1F1ZXJ5U3RyaW5nfWA7XG59XG4iLCJpbXBvcnQgeyBFRFNUZWFjaGVyLCBFRFNUdWl0aW9uR3JvdXAgfSBmcm9tICcuLi8uLi9jb250cmFjdHMvZWRzJztcblxuXG5jb25zdCBjcmVhdGVTdHVkZW50cyA9IChncm91cCwgbiwgbSkgPT4ge1xuICBjb25zdCBzdHVkZW50cyA9IFtdO1xuICBmb3IgKHZhciBpPW47IGkgPD0gbTsgaSsrKSB7XG4gICAgc3R1ZGVudHMucHVzaCh7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6IGdyb3VwLFxuICAgICAgc3R1ZGVudEZpcnN0TmFtZTogJ1N0dWRlbnQgJyArIGksXG4gICAgICBzdHVkZW50TGFzdE5hbWU6ICdDbGFzc3Jvb20nLFxuICAgICAgc3R1ZGVudEVtYWlsQWRkcmVzczogJ3N0dWRlbnQnICsgaSArICcuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tJ1xuXG4gICAgfSk7XG4gIH1cbiAgc3R1ZGVudHMucHVzaCh7XG4gICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiBncm91cCxcbiAgICAgIHN0dWRlbnRGaXJzdE5hbWU6ICdBbmRyZWknLFxuICAgICAgc3R1ZGVudExhc3ROYW1lOiAnU3BhdGFyZWx1JyxcbiAgICAgIHN0dWRlbnRFbWFpbEFkZHJlc3M6ICdhbmRyZWkuc3BhdGFyZWx1QHZlbWVuZG8uc2UnXG4gIH0pXG4gIHJldHVybiBzdHVkZW50cztcbn1cblxuZXhwb3J0IGNvbnN0IG1vY2tUZWFjaGVyczogRURTVGVhY2hlcltdID0gW1xuICB7XG4gICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgdGVhY2hlckZpcnN0TmFtZTogJ1RlYWNoZXIgMScsXG4gICAgdGVhY2hlckxhc3ROYW1lOiAnQ2xhc3Nyb29tJyxcbiAgICB0ZWFjaGVyRW1haWxBZGRyZXNzOiAndGVhY2hlcjEuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tJ1xuICB9LFxuICB7XG4gICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgdGVhY2hlckZpcnN0TmFtZTogJ1RlYWNoZXIgMicsXG4gICAgdGVhY2hlckxhc3ROYW1lOiAnQ2xhc3Nyb29tJyxcbiAgICB0ZWFjaGVyRW1haWxBZGRyZXNzOiAndGVhY2hlcjIuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tJ1xuICB9LFxuICB7XG4gICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgdGVhY2hlckZpcnN0TmFtZTogJ1RlYWNoZXIgMycsXG4gICAgdGVhY2hlckxhc3ROYW1lOiAnQ2xhc3Nyb29tJyxcbiAgICB0ZWFjaGVyRW1haWxBZGRyZXNzOiAndGVhY2hlcjMuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tJ1xuICB9LFxuICB7XG4gICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgdGVhY2hlckZpcnN0TmFtZTogJ0NhcmwnLFxuICAgIHRlYWNoZXJMYXN0TmFtZTogJ0hvbG1iZXJnJyxcbiAgICB0ZWFjaGVyRW1haWxBZGRyZXNzOiAnY2FybEBrZWRzY2hvb2xzLmNvbSdcbiAgfSxcbiAge1xuICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgIHRlYWNoZXJGaXJzdE5hbWU6ICdEYXZpZCcsXG4gICAgdGVhY2hlckxhc3ROYW1lOiAnRmFobGFuZGVyJyxcbiAgICB0ZWFjaGVyRW1haWxBZGRyZXNzOiAnZGF2aWQuZmFobGFuZGVyQGtlZHNjaG9vbHMuY29tJ1xuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgbW9ja1R1aXRpb25Hcm91cHMgPSB7XG4gICdESlVTw4RMMDEnOiBbXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnSURSMV9HcjEgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIGNvdXJzZUNvZGU6ICdESlVTw4RMMDEnXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdJRFIxX0dyMiAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgY291cnNlQ29kZTogJ0RKVVPDhEwwMSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0lEUjFfR3IzICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBjb3Vyc2VDb2RlOiAnREpVU8OETDAxJ1xuICAgIH1cbiAgXSxcbiAgJ0RKVURKSTAnOltcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdESlVESl9HcjEgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIGNvdXJzZUNvZGU6ICdESlVESkkwJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnREpVREpfR3IyICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBjb3Vyc2VDb2RlOiAnREpVREpJMCdcbiAgICB9LCAgXSxcbiAgJ0tFTUtFTTAxJzogW1xuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0tFTTFfR3IxICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBjb3Vyc2VDb2RlOiAnS0VNS0VNMDEnXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdLRU0xX0dyMiAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgY291cnNlQ29kZTogJ0tFTUtFTTAxJ1xuICAgIH1cbiAgXSxcbiAgJ0JJT0JJTzAxJzogW1xuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0JJTzFfR3IxICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBjb3Vyc2VDb2RlOiAnQklPQklPMDEnXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdCSU8xX0dyMiAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgY291cnNlQ29kZTogJ0JJT0JJTzAxJ1xuICAgIH1cbiAgXSxcbiAgJ1NWRVNWRTAzJzogW1xuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ1NWRTNfR3IxICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBjb3Vyc2VDb2RlOiAnU1ZFU1ZFMDMnXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdTVkUzX0dyMiAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgY291cnNlQ29kZTogJ1NWRVNWRTAzJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnU1ZFM19HcjMgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIGNvdXJzZUNvZGU6ICdTVkVTVkUwMydcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ1NWRTNfR3I0ICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBjb3Vyc2VDb2RlOiAnU1ZFU1ZFMDMnXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdTVkUzX0dyNSAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgY291cnNlQ29kZTogJ1NWRVNWRTAzJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnU1ZFM19HcjYgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIGNvdXJzZUNvZGU6ICdTVkVTVkUwMydcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ1NWRTNfR3I3ICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBjb3Vyc2VDb2RlOiAnU1ZFU1ZFMDMnXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBtb2NrVHVpdGlvblN0dWRlbnRzID0ge1xuICAnSURSMV9HcjEgKDE4MDgxNi0xOTA2MTQpJyA6IGNyZWF0ZVN0dWRlbnRzKCdJRFIxX0dyMSAoMTgwODE2LTE5MDYxNCknICwgMSwgMTIpLFxuICAnSURSMV9HcjIgKDE4MDgxNi0xOTA2MTQpJyA6IGNyZWF0ZVN0dWRlbnRzKCdJRFIxX0dyMiAoMTgwODE2LTE5MDYxNCknICwgMTMsIDIyKSxcbiAgJ0lEUjFfR3IzICgxODA4MTYtMTkwNjE0KScgOiBjcmVhdGVTdHVkZW50cygnSURSMV9HcjMgKDE4MDgxNi0xOTA2MTQpJyAsIDIzLCAzNCksXG4gICdESlVESl9HcjEgKDE4MDgxNi0xOTA2MTQpJzogW1xuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0RKVURKX0dyMSAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgc3R1ZGVudEZpcnN0TmFtZTogJ0FuZHJlaScsXG4gICAgICBzdHVkZW50TGFzdE5hbWU6ICdTcGF0YXJlbHUnLFxuICAgICAgc3R1ZGVudEVtYWlsQWRkcmVzczogJ2FuZHJlaS5zcGF0YXJlbHVAdmVtZW5kby5zZSdcbiAgICB9LFxuXG4gIF0sXG4gICdESlVESl9HcjIgKDE4MDgxNi0xOTA2MTQpJzpbXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnREpVREpfR3IyICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBzdHVkZW50Rmlyc3ROYW1lOiAnU3R1ZGVudDInLFxuICAgICAgc3R1ZGVudExhc3ROYW1lOiAnQ2xhc3Nyb29tJyxcbiAgICAgIHN0dWRlbnRFbWFpbEFkZHJlc3M6ICdzdHVkZW50Mi5jbGFzc3Jvb21Aa2Vkc2Nob29scy5jb20nXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdESlVESl9HcjIgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIHN0dWRlbnRGaXJzdE5hbWU6ICdDYXJsJyxcbiAgICAgIHN0dWRlbnRMYXN0TmFtZTogJ0hvbG1iZXJnJyxcbiAgICAgIHN0dWRlbnRFbWFpbEFkZHJlc3M6ICdjYXJsQGtlZHNjaG9vbHMuY29tJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnREpVREpfR3IyICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBzdHVkZW50Rmlyc3ROYW1lOiAnU3R1ZGVudDMnLFxuICAgICAgc3R1ZGVudExhc3ROYW1lOiAnQ2xhc3Nyb29tJyxcbiAgICAgIHN0dWRlbnRFbWFpbEFkZHJlc3M6ICdzdHVkZW50My5jbGFzc3Jvb21Aa2Vkc2Nob29scy5jb20nXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdESlVESl9HcjIgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIHN0dWRlbnRGaXJzdE5hbWU6ICdEYXZpZCcsXG4gICAgICBzdHVkZW50TGFzdE5hbWU6ICdGYWhsYW5kZXInLFxuICAgICAgc3R1ZGVudEVtYWlsQWRkcmVzczogJ2RhdmlkLmZhaGxhbmRlckB2ZW1lbmRvLnNlJ1xuICAgIH1cbiAgXSxcbiAgJ0tFTTFfR3IxICgxODA4MTYtMTkwNjE0KScgOiBbXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnS0VNMV9HcjEgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIHN0dWRlbnRGaXJzdE5hbWU6ICdTdHVkZW50IDInLFxuICAgICAgc3R1ZGVudExhc3ROYW1lOiAnQ2xhc3Nyb29tJyxcbiAgICAgIHN0dWRlbnRFbWFpbEFkZHJlc3M6ICdzdHVkZW50Mi5jbGFzc3Jvb21Aa2Vkc2Nob29scy5jb20nXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdLRU0xX0dyMSAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgc3R1ZGVudEZpcnN0TmFtZTogJ0RhdmlkJyxcbiAgICAgIHN0dWRlbnRMYXN0TmFtZTogJycsXG4gICAgICBzdHVkZW50RW1haWxBZGRyZXNzOiAnZGF2aWQuZmFobGFuZGVyQHZlbWVuZG8uc2UnXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdLRU0xX0dyMSAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgc3R1ZGVudEZpcnN0TmFtZTogJ1N0dWRlbnQgMycsXG4gICAgICBzdHVkZW50TGFzdE5hbWU6ICdDbGFzc3Jvb20nLFxuICAgICAgc3R1ZGVudEVtYWlsQWRkcmVzczogJ3N0dWRlbnQzLmNsYXNzcm9vbUBrZWRzY2hvb2xzLmNvbSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0tFTTFfR3IxICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBzdHVkZW50Rmlyc3ROYW1lOiAnU3R1ZGVudCA4JyxcbiAgICAgIHN0dWRlbnRMYXN0TmFtZTogJ0NsYXNzcm9vbScsXG4gICAgICBzdHVkZW50RW1haWxBZGRyZXNzOiAnc3R1ZGVudDguY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnS0VNMV9HcjEgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIHN0dWRlbnRGaXJzdE5hbWU6ICdTdHVkZW50IDknLFxuICAgICAgc3R1ZGVudExhc3ROYW1lOiAnQ2xhc3Nyb29tJyxcbiAgICAgIHN0dWRlbnRFbWFpbEFkZHJlc3M6ICdzdHVkZW50OS5jbGFzc3Jvb21Aa2Vkc2Nob29scy5jb20nXG4gICAgfVxuICBdLFxuICAnS0VNMV9HcjIgKDE4MDgxNi0xOTA2MTQpJyA6IFtcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdLRU0xX0dyMiAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgc3R1ZGVudEZpcnN0TmFtZTogJ1N0dWRlbnQgMScsXG4gICAgICBzdHVkZW50TGFzdE5hbWU6ICdDbGFzc3Jvb20nLFxuICAgICAgc3R1ZGVudEVtYWlsQWRkcmVzczogJ3N0dWRlbnQxLmNsYXNzcm9vbUBrZWRzY2hvb2xzLmNvbSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0tFTTFfR3IyICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBzdHVkZW50Rmlyc3ROYW1lOiAnU3R1ZGVudCA1JyxcbiAgICAgIHN0dWRlbnRMYXN0TmFtZTogJ0NsYXNzcm9vbScsXG4gICAgICBzdHVkZW50RW1haWxBZGRyZXNzOiAnc3R1ZGVudDUuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnS0VNMV9HcjIgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIHN0dWRlbnRGaXJzdE5hbWU6ICdTdHVkZW50IDYnLFxuICAgICAgc3R1ZGVudExhc3ROYW1lOiAnQ2xhc3Nyb29tJyxcbiAgICAgIHN0dWRlbnRFbWFpbEFkZHJlc3M6ICdzdHVkZW50Ni5jbGFzc3Jvb21Aa2Vkc2Nob29scy5jb20nXG4gICAgfVxuICBdLFxuICAnQklPMV9HcjEgKDE4MDgxNi0xOTA2MTQpJyA6IFtcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdCSU8xX0dyMSAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgc3R1ZGVudEZpcnN0TmFtZTogJ1N0dWRlbnQgMScsXG4gICAgICBzdHVkZW50TGFzdE5hbWU6ICdDbGFzc3Jvb20nLFxuICAgICAgc3R1ZGVudEVtYWlsQWRkcmVzczogJ3N0dWRlbnQxLmNsYXNzcm9vbUBrZWRzY2hvb2xzLmNvbSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0JJTzFfR3IxICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBzdHVkZW50Rmlyc3ROYW1lOiAnU3R1ZGVudCA0JyxcbiAgICAgIHN0dWRlbnRMYXN0TmFtZTogJ0NsYXNzcm9vbScsXG4gICAgICBzdHVkZW50RW1haWxBZGRyZXNzOiAnc3R1ZGVudDQuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnQklPMV9HcjEgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIHN0dWRlbnRGaXJzdE5hbWU6ICdTdHVkZW50IDYnLFxuICAgICAgc3R1ZGVudExhc3ROYW1lOiAnQ2xhc3Nyb29tJyxcbiAgICAgIHN0dWRlbnRFbWFpbEFkZHJlc3M6ICdzdHVkZW50Ni5jbGFzc3Jvb21Aa2Vkc2Nob29scy5jb20nXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdCSU8xX0dyMSAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgc3R1ZGVudEZpcnN0TmFtZTogJ1N0dWRlbnQgMTAnLFxuICAgICAgc3R1ZGVudExhc3ROYW1lOiAnQ2xhc3Nyb29tJyxcbiAgICAgIHN0dWRlbnRFbWFpbEFkZHJlc3M6ICdzdHVkZW50MTAuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tJ1xuICAgIH1cbiAgXSxcbiAgJ0JJTzFfR3IyICgxODA4MTYtMTkwNjE0KScgOiBbXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnQklPMV9HcjIgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIHN0dWRlbnRGaXJzdE5hbWU6ICdTdHVkZW50IDInLFxuICAgICAgc3R1ZGVudExhc3ROYW1lOiAnQ2xhc3Nyb29tJyxcbiAgICAgIHN0dWRlbnRFbWFpbEFkZHJlc3M6ICdzdHVkZW50Mi5jbGFzc3Jvb21Aa2Vkc2Nob29scy5jb20nXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdCSU8xX0dyMiAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgc3R1ZGVudEZpcnN0TmFtZTogJ1N0dWRlbnQgNycsXG4gICAgICBzdHVkZW50TGFzdE5hbWU6ICdDbGFzc3Jvb20nLFxuICAgICAgc3R1ZGVudEVtYWlsQWRkcmVzczogJ3N0dWRlbnQ3LmNsYXNzcm9vbUBrZWRzY2hvb2xzLmNvbSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0JJTzFfR3IyICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBzdHVkZW50Rmlyc3ROYW1lOiAnU3R1ZGVudCA4JyxcbiAgICAgIHN0dWRlbnRMYXN0TmFtZTogJ0NsYXNzcm9vbScsXG4gICAgICBzdHVkZW50RW1haWxBZGRyZXNzOiAnc3R1ZGVudDguY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tJ1xuICAgIH0sXG4gIF0sXG4gICdTVkUzX0dyMSAoMTgwODE2LTE5MDYxNCknIDogY3JlYXRlU3R1ZGVudHMoJ1NWRTNfR3IxICgxODA4MTYtMTkwNjE0KScsIDEsIDIxKSxcbiAgJ1NWRTNfR3IyICgxODA4MTYtMTkwNjE0KScgOiBjcmVhdGVTdHVkZW50cygnU1ZFM19HcjIgKDE4MDgxNi0xOTA2MTQpJywgMjIsIDQ0KSxcbiAgJ1NWRTNfR3IzICgxODA4MTYtMTkwNjE0KScgOiBjcmVhdGVTdHVkZW50cygnU1ZFM19HcjMgKDE4MDgxNi0xOTA2MTQpJywgNDUsIDYxKSxcbiAgJ1NWRTNfR3I0ICgxODA4MTYtMTkwNjE0KScgOiBjcmVhdGVTdHVkZW50cygnU1ZFM19HcjQgKDE4MDgxNi0xOTA2MTQpJywgNjIsIDc4KSxcbiAgJ1NWRTNfR3I1ICgxODA4MTYtMTkwNjE0KScgOiBjcmVhdGVTdHVkZW50cygnU1ZFM19HcjUgKDE4MDgxNi0xOTA2MTQpJywgODMsIDEwNyksXG4gICdTVkUzX0dyNiAoMTgwODE2LTE5MDYxNCknIDogY3JlYXRlU3R1ZGVudHMoJ1NWRTNfR3I2ICgxODA4MTYtMTkwNjE0KScsIDEwOCwgMTI0KSxcbiAgJ1NWRTNfR3I3ICgxODA4MTYtMTkwNjE0KScgOiBjcmVhdGVTdHVkZW50cygnU1ZFM19HcjcgKDE4MDgxNi0xOTA2MTQpJywgMTI1LCAxNTApXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgbnVtYmVyT2ZUYXNrczogbnVtYmVyO1xuICAgIGNvbXBsZXRlZE51bWJlck9mVGFza3M6IG51bWJlcjtcbiAgICBtYXhpbXVtVGFza3NEaXNwbGF5ZWQ/OiBudW1iZXI7XG4gICAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICAgIHByb2dyZXNzQ29sb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBHb2FsUHJvZ3Jlc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgbnVtYmVyb2ZUYXNrczogMCxcbiAgICAgICAgY29tcGxldGVkTnVtYmVyT2ZUYXNrczogMCxcbiAgICAgICAgbWF4aW11bVRhc2tzRGlzcGxheWVkOiAxMCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Z3JleVwiLFxuICAgICAgICBwcm9ncmVzc0NvbG9yOiBcIiMzZGJjYTJcIixcbiAgICB9O1xuXG4gICAgY3JlYXRlUHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbnVtYmVyT2ZUYXNrcywgY29tcGxldGVkTnVtYmVyT2ZUYXNrcywgbWF4aW11bVRhc2tzRGlzcGxheWVkLCBiYWNrZ3JvdW5kQ29sb3IsIHByb2dyZXNzQ29sb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBwcm9ncmVzcyA9IFtdO1xuICAgICAgICBpZihudW1iZXJPZlRhc2tzID4gbWF4aW11bVRhc2tzRGlzcGxheWVkKXtcbiAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3Mtb3ZlcnZpZXdcIj4ge2NvbXBsZXRlZE51bWJlck9mVGFza3N9IC8ge251bWJlck9mVGFza3N9IDwvZGl2PjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHRhc2tObyA9IDE7IHRhc2tObyA8PSBudW1iZXJPZlRhc2tzOyB0YXNrTm8rKykge1xuICAgICAgICAgICAgcHJvZ3Jlc3MucHVzaChcbiAgICAgICAgICAgIDxzdmcga2V5PXt0YXNrTm99PlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3NOYW1lPVwiY2lyY2xlLWNoYXJ0LWJhY2tncm91bmRcIiBmaWxsPXt0YXNrTm8gPiBjb21wbGV0ZWROdW1iZXJPZlRhc2tzID8gYmFja2dyb3VuZENvbG9yIDogcHJvZ3Jlc3NDb2xvcn0gY3g9XCI4XCIgY3k9XCI4XCIgcj1cIjhcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICB9XG5cbiAgICByZW5kZXIoKXsgIFxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJnb2Fscy1wcm9ncmVzc1wiPnt0aGlzLmNyZWF0ZVByb2dyZXNzKCl9PC9kaXY+XG4gICAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbGVmdDogUmVhY3QuUmVhY3ROb2RlO1xuICByaWdodDogUmVhY3QuUmVhY3ROb2RlO1xuICByaWdodFdpZHRoOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8wqA5IHwgMTAgfCAxMTtcbn1cblxuZXhwb3J0IGNvbnN0IFR3b0NvbHVtbnNQYWdlID0gKHsgbGVmdCwgcmlnaHQsIHJpZ2h0V2lkdGggfTogUHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzdi1yb3cgc3YtbGF5b3V0XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdi1sYXlvdXQgc3Ytc2tpcC1zcGFjZXIgc3YtY29sdW1uLTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2LXNwYWNlci0yMHB4dnQgc3YtdmVydGljYWwgc3YtbGF5b3V0IHN2LXNraXAtc3BhY2VyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZWNvbnRlbnQgc3YtbGF5b3V0IHN2LXNwYWNlci0yMHB4dnQgc3Ytc2tpcC1zcGFjZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2LXJvdyBzdi1sYXlvdXQgc3Ytc2tpcC1zcGFjZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc3YtbGF5b3V0IHN2LXNraXAtc3BhY2VyIHN2LWNvbHVtbi0kezEyLXJpZ2h0V2lkdGh9YH0+XG4gICAgICAgICAgICAgIHtsZWZ0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN2LWxheW91dCBzdi1jb2x1bW4tJHtyaWdodFdpZHRofWB9PlxuICAgICAgICAgICAgICB7cmlnaHR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgRWxsaXBzaXNMb2FkZXIgPSAoKSA9PlxuICA8aW1nXG4gICAgc3R5bGU9e3tib3JkZXI6IDAsIG1hcmdpbjogMCwgcGFkZGluZzogMH19XG4gICAgY2xhc3NOYW1lPVwiZWxsaXBzaXMtbG9hZGVyXCIgLz47XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCB7IGVudiB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbHMvS0VELmVudic7XG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbHMvZGInO1xuaW1wb3J0IHsgbW9ja1R1aXRpb25Hcm91cHMgfSBmcm9tICcuLi8uLi8uLi9hcGlzL21vY2svbW9jay1jbGFzc3Jvb20tZGF0YSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNjaG9vbDogc3RyaW5nXG4gIGNvdXJzZUNvZGU6IHN0cmluZ1xuICBzZWxlY3RlZFN0dWR5R3JvdXBzOiBzdHJpbmdbXVxuICBwbGFjZWhvbGRlcjpzdHJpbmc7XG4gIG9uVXBkYXRlOiAoc3R1ZHlHcm91cHM6IHN0cmluZ1tdKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3RTdHVkeUdyb3VwcyAoe3NjaG9vbCwgY291cnNlQ29kZSwgc2VsZWN0ZWRTdHVkeUdyb3VwcywgcGxhY2Vob2xkZXIsIG9uVXBkYXRlfTogUHJvcHMpIHtcblxuICAvLyBNb2NrLWRhdGEgZm9yIEtFRFxuICBjb25zdCBlbXB0eU9yTW9jayA9IHNjaG9vbCA9PT0gJ0tFRCcgJiYgbW9ja1R1aXRpb25Hcm91cHNbY291cnNlQ29kZV0/IG1vY2tUdWl0aW9uR3JvdXBzW2NvdXJzZUNvZGVdIDogW107XG5cblxuICAvLyBNYXAgZ2l2ZW4ge3NjaG9vbH0gdG8gaXRzIG5hbWUgaW4gRURTOlxuICBjb25zdCB7ZWRzU2Nob29sTmFtZUd5bW59ID0gZGIuc2Nob29sc1xuICAgIC5jYWNoZU9wdGltaXplZCgpIC8vIFdpbGwgYWRkIGNhY2hlQnVzdCB0byB0aGUgcXVlcnkgKG1ha2luZyBzZXJ2ZXIgYWRkIGNhY2hlIGhlYWRlcilcbiAgICAubmFtZShzY2hvb2wpLnNpbmdsZSgpIC8vIEdldCB0aGUgc2luZ2xlIHNjaG9vbCBpbnN0YW5jZSB3aXRoIG5hbWU9e3NjaG9vbH1cbiAgICAucmVhZCgpOyAvLyBSZWFkIGl0IHRoZSBzdXNwZW5zZS13YXkgKHRocm93aW5nIFByb21pc2UgaWYgbm90IHRoZXJlLi4uKVxuXG4gIC8vIExpc3Qgc3R1ZHlncm91cHMgZm9yIHRoYXQgc2Nob29sIGFuZCBnaXZlbiBjb3Vyc2U6XG4gIGNvbnN0IHN0dWR5R3JvdXBzID0gZWRzU2Nob29sTmFtZUd5bW4/IGVudi5lZHNDbGllbnQuc3VzcGVuc2UuZ2V0U2Nob29sVHVpdGlvbkdyb3Vwcyh7XG4gICAgc2Nob29sTmFtZTogZWRzU2Nob29sTmFtZUd5bW4sXG4gICAgY291cnNlQ29kZVxuICB9KSA6IGVtcHR5T3JNb2NrO1xuXG4gIC8vIENvbnZlcnQgdG8gb3B0aW9uIG9iamVjdHMgYXMgcmVhY3Qtc2VsZWN0IHdhbnRzIHRoZW06XG4gIGNvbnN0IG9wdGlvbnMgPSBzdHVkeUdyb3Vwcy5tYXAoc2cgPT4gKHtcbiAgICBsYWJlbDogc2cudHVpdGlvbkdyb3VwTmFtZSxcbiAgICB2YWx1ZTogc2cudHVpdGlvbkdyb3VwTmFtZVxuICB9KSk7XG5cbiAgLy8gRGlzcGxheSB0aGUgbXV0bGlzZWxlY3Q6XG4gIHJldHVybiA8U2VsZWN0XG4gICAgICBpc011bHRpPXt0cnVlfVxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgIHZhbHVlPXtzZWxlY3RlZFN0dWR5R3JvdXBzLm1hcChncm91cCA9PiAoe2xhYmVsOiBncm91cCwgdmFsdWU6IGdyb3VwfSkpfVxuICAgICAgcGxhY2Vob2xkZXI9IHtwbGFjZWhvbGRlcn1cbiAgICAgIG5vT3B0aW9uc01lc3NhZ2U9eygpPT5MYEt1bmRlIGludGUgaGl0dGEgc3R1ZGllZ3J1cHBlciBmw7ZyIGRlbm5hIGt1cnNgfVxuICAgICAgb25DaGFuZ2U9eyhvcHRpb25zOiBBcnJheTx7bGFiZWw6IHN0cmluZywgdmFsdWU6IHN0cmluZ30+KSA9PiB7XG4gICAgICAgIG9uVXBkYXRlKG9wdGlvbnMubWFwKCh7dmFsdWV9KSA9PiB2YWx1ZSkpO1xuICAgICAgfX0gLz5cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFNwaW5uZXIgPSAoKT0+IDxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4mbmJzcDs8L3NwYW4+O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXNzaWdubWVudCwgVXJrdW5kUmVzcG9uc2UgfSBmcm9tICdrZWRiYWNrZW5kL21vZGVscyc7XG5pbXBvcnQgeyBIdHRwRXJyb3IgfSBmcm9tICdrZWRiYWNrZW5kL2NsaWVudCc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzL0tFRC5lbnYnO1xuaW1wb3J0IGRvd25sb2FkIGZyb20gJ2Rvd25sb2FkanMnO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uLy4uL2NvdXJzZS1idWlsZGVyL3N1Yi1jb21wb25lbnRzL3NwaW5uZXInO1xuaW1wb3J0IHsgZ2V0VXJrdW5kSG92ZXJUZXh0LCBnZXRVcmt1bmRTdGF0dXNDbGFzcywgZ2V0VXJrdW5kU2lnbmlmaWNhbmNlQ2xhc3MgfSBmcm9tICcuL3Vya3VuZC11dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmt1bmRTdGF0dXMoZmlsZTogQXNzaWdubWVudCwgcmVmcmVzaEFzc2lnbm1lbnQ6IChmaWxlOkFzc2lnbm1lbnQpPT4gdm9pZCkge1xuICBjb25zdCB7IG1ldGFkYXRhIH0gPSBmaWxlO1xuICB2YXIgdXJrdW5kUmVzcG9uc2VzOiBVcmt1bmRSZXNwb25zZVtdO1xuICB0cnkge1xuICAgIHVya3VuZFJlc3BvbnNlcyA9IG1ldGFkYXRhLnVya3VuZFJlc3BvbnNlICYmIEpTT04ucGFyc2UobWV0YWRhdGEudXJrdW5kUmVzcG9uc2UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB1cmt1bmRSZXNwb25zZXMgPSBudWxsO1xuICB9XG4gIGxldCB1cmt1bmRSZXNwb25zZSA9IHVya3VuZFJlc3BvbnNlcyAmJiB1cmt1bmRSZXNwb25zZXNbMF07XG4gIGlmICghdXJrdW5kUmVzcG9uc2UgJiYgZmlsZS5tZXRhZGF0YS51cmt1bmRVcGxvYWRFcnJvcikge1xuICAgIHVya3VuZFJlc3BvbnNlID0ge1xuICAgICAgU3RhdHVzOiB7XG4gICAgICAgIEVycm9yQ29kZTogLTEsXG4gICAgICAgIE1lc3NhZ2U6IGZpbGUubWV0YWRhdGEudXJrdW5kVXBsb2FkRXJyb3IsXG4gICAgICAgIFN0YXRlOiAnRXJyb3InXG4gICAgICB9LFxuICAgICAgRXh0ZXJuYWxJZDogZmlsZS5tZXRhZGF0YS51cmt1bmRFeHRlcm5hbElkXG4gICAgfSBhcyBVcmt1bmRSZXNwb25zZTtcbiAgfVxuICBpZiAoZmlsZS5pc1JlZnJlc2hpbmcpIHJldHVybiA8dGQgY29sU3Bhbj17Mn0+PFNwaW5uZXIgLz4gVXBwZGF0ZXJhci4uLjwvdGQ+XG4gIHJldHVybiB1cmt1bmRSZXNwb25zZSA/IDw+XG4gICAgPHRkIGNsYXNzTmFtZT1cInVya3VuZC1zdGF0dXMtY29sXCI+XG4gICAgICA8YVxuICAgICAgICBocmVmPXt1cmt1bmRSZXNwb25zZS5SZXBvcnQgJiYgdXJrdW5kUmVzcG9uc2UuUmVwb3J0LlJlcG9ydFVybH1cbiAgICAgICAgb25DbGljaz17ZXYgPT4ge1xuICAgICAgICAgIGlmIChbJ0FjY2VwdGVkJywgJ1N1Ym1pdHRlZCddLmluZGV4T2YodXJrdW5kUmVzcG9uc2UuU3RhdHVzLlN0YXRlKSA9PT0gLTEpXG4gICAgICAgICAgICByZXR1cm47IC8vIEZvbGxvdyBIUkVGIGluc3RlYWQuXG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICByZWZyZXNoQXNzaWdubWVudChmaWxlKTtcbiAgICAgICAgfX1cbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgdGl0bGU9e2dldFVya3VuZEhvdmVyVGV4dCh1cmt1bmRSZXNwb25zZSl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0VXJrdW5kU3RhdHVzQ2xhc3ModXJrdW5kUmVzcG9uc2UpfSAvPlxuICAgICAgPC9hPlxuICAgIDwvdGQ+XG4gICAgPHRkIGNsYXNzTmFtZT1cInVya3VuZC1zdGF0dXMtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0VXJrdW5kU2lnbmlmaWNhbmNlQ2xhc3ModXJrdW5kUmVzcG9uc2UpfT5cbiAgICAgICAge3Vya3VuZFJlc3BvbnNlLlJlcG9ydCAmJiB0eXBlb2YgdXJrdW5kUmVzcG9uc2UuUmVwb3J0LlNpZ25pZmljYW5jZSA9PT0gJ251bWJlcicgP1xuICAgICAgICAgIGAke3Vya3VuZFJlc3BvbnNlLlJlcG9ydC5TaWduaWZpY2FuY2UudG9GaXhlZCgpfSVgIDogJyAnfVxuICAgICAgPC9kaXY+XG4gICAgPC90ZD5cbiAgPC8+IDogPHRkIGNvbFNwYW49ezJ9IC8+XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUoYXNzaWdubWVudHM6IEFzc2lnbm1lbnRbXSwgYXNzaWdubWVudDogQXNzaWdubWVudCk6IEFzc2lnbm1lbnRbXSB7XG4gIGNvbnN0IHJldHZhbCA9IFtcbiAgICBhc3NpZ25tZW50LFxuICAgIC4uLmFzc2lnbm1lbnRzLmZpbHRlcigoe3VzZXIsIGZpbGVuYW1lfSkgPT5cbiAgICAgIHVzZXIgIT09IGFzc2lnbm1lbnQudXNlciB8fFxuICAgICAgZmlsZW5hbWUgIT09IGFzc2lnbm1lbnQuZmlsZW5hbWUpXTtcbiAgcmV0dXJuIHJldHZhbDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkRmlsZShmaWxlOiBBc3NpZ25tZW50KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZW52LmtlZEJhY2tlbmRDbGllbnQuaHR0cC5mZXRjaChmaWxlLm1lZGlhTGluaywgJ2dldCcsIHt9KTtcbiAgICBpZiAocmVzLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgIHRocm93IG5ldyBIdHRwRXJyb3IocmVzLnN0YXR1cywgYXdhaXQgcmVzLnRleHQoKSk7XG4gICAgfVxuICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXMuYmxvYigpO1xuICAgIGRvd25sb2FkKGJsb2IsIGZpbGUuZmlsZW5hbWUsIGZpbGUuY29udGVudFR5cGUpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IFwiS3VuZGUgaW50ZSBsYWRkYSBuZWQgZmlsZW4uIFwiICsgKGVyci5tZXNzYWdlIHx8IGVycikgfSk7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEcml2ZUZpbGVMaXN0aW5nKHsgZmlsZSB9OiB7IGZpbGU6IEFzc2lnbm1lbnQgfSkge1xuICBjb25zdCB7IGRyaXZlRmlsZUljb25VcmwsIGRyaXZlRmlsZVVybCB9ID0gZmlsZS5tZXRhZGF0YTtcbiAgY29uc3QgZmlsZW5hbWUgPSBmaWxlLmZpbGVuYW1lLnN1YnN0cigwLCBmaWxlLmZpbGVuYW1lLmxhc3RJbmRleE9mKCcuJykpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24taG9yaXpvbnRhbCBzcGFjZWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbEl0ZW0gdG9wXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmlsZS1pY29uXCIgc3JjPXtkcml2ZUZpbGVJY29uVXJsfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvcml6b250YWxJdGVtIHRvcFwiPlxuICAgICAgICA8c3Bhbj48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtkcml2ZUZpbGVVcmx9PntmaWxlbmFtZX08L2E+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59IiwiaW1wb3J0IHtVcmt1bmRSZXNwb25zZX0gZnJvbSAna2VkYmFja2VuZC9tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXJrdW5kU3RhdHVzQ2xhc3MgKHJlczogVXJrdW5kUmVzcG9uc2UpIHtcbiAgaWYgKCFyZXMgfHwgIXJlcy5TdGF0dXMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHN3aXRjaCAocmVzLlN0YXR1cy5TdGF0ZSkge1xuICAgIGNhc2UgJ0Vycm9yJzpcbiAgICAgIHJldHVybiBgdXJrdW5kLXN0YXR1cyB1cmt1bmQtc3RhdHVzLWVycm9yYDtcbiAgICBjYXNlICdTdWJtaXR0ZWQnOlxuICAgICAgcmV0dXJuIGB1cmt1bmQtc3RhdHVzIHVya3VuZC1zdGF0dXMtc3VibWl0dGVkYDtcbiAgICBjYXNlICdBY2NlcHRlZCc6XG4gICAgICByZXR1cm4gYHVya3VuZC1zdGF0dXMgdXJrdW5kLXN0YXR1cy1hY2NlcHRlZGA7XG4gICAgY2FzZSAnQW5hbHl6ZWQnOlxuICAgICAgcmV0dXJuIGB1cmt1bmQtc3RhdHVzIHVya3VuZC1zdGF0dXMtYW5hbHl6ZWRgO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmt1bmRIb3ZlclRleHQgKHJlczogVXJrdW5kUmVzcG9uc2UpIHtcbiAgaWYgKCFyZXMgfHwgIXJlcy5TdGF0dXMpIHJldHVybiBudWxsO1xuICBzd2l0Y2ggKHJlcy5TdGF0dXMuU3RhdGUpIHtcbiAgICBjYXNlICdFcnJvcic6XG4gICAgICByZXR1cm4gcmVzLkV4dGVybmFsSWQgP1xuICAgICAgICBgS3VuZGUgaW50ZSB0YXMgZW1vdCBhdiB1cmt1bmQuIEZlbGtvZDogJHtyZXMuU3RhdHVzLkVycm9yQ29kZX1cXG5gK1xuICAgICAgICBgRXh0ZXJuYWwgSUQ6ICR7cmVzLkV4dGVybmFsSWR9XFxuRmVsbWVkZGVsYW5kZTogJHtyZXMuU3RhdHVzLk1lc3NhZ2V9YFxuICAgICAgICA6XG4gICAgICAgIHJlcy5TdGF0dXMuTWVzc2FnZTtcbiAgICBjYXNlICdTdWJtaXR0ZWQnOlxuICAgICAgcmV0dXJuIGBGaWxlbiDDpHIgdXBwbGFkZGFkIHRpbGwgVXJrdW5kLiBLbGlja2EgZsO2ciBhdHQgdXBwZGF0ZXJhIHN0YXR1cy5gO1xuICAgIGNhc2UgJ0FjY2VwdGVkJzpcbiAgICAgIHJldHVybiBgRmlsZW4gYW5hbHlzZXJhcyBmb3J0ZmFyYW5kZSBhdiBVcmt1bmQuIEtsaWNrYSBmw7ZyIGF0dCB1cHBkYXRlcmEgc3RhdHVzLmA7XG4gICAgY2FzZSAnQW5hbHl6ZWQnOlxuICAgICAgcmV0dXJuIGBSYXBwb3J0IHNrYXBhZC4gS2xpY2thIGbDtnIgYXR0IMO2cHBuYSByYXBwb3J0ZW4gaSBueXR0IGbDtm5zdGVyYDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXJrdW5kU2lnbmlmaWNhbmNlQ2xhc3MgKHJlczogVXJrdW5kUmVzcG9uc2UpIHtcbiAgaWYgKCFyZXMgfHwgIXJlcy5TdGF0dXMpIHJldHVybiAnJztcblxuICBzd2l0Y2ggKHJlcy5TdGF0dXMuU3RhdGUpIHtcbiAgICBjYXNlICdFcnJvcic6IHJldHVybiAndXJrdW5kLXNpZ25pZmljYW5jZS1lcnJvcic7XG4gICAgY2FzZSAnU3VibWl0dGVkJzogcmV0dXJuICd1cmt1bmQtc2lnbmlmaWNhbmNlLXN1Ym1pdHRlZCc7XG4gICAgY2FzZSAnQWNjZXB0ZWQnOiByZXR1cm4gJ3Vya3VuZC1zaWduaWZpY2FuY2UtYWNjZXB0ZWQnO1xuICB9XG4gIGNvbnN0IHJlcG9ydCA9IHJlcy5SZXBvcnQ7XG4gIGlmICghcmVwb3J0KSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgaWYgKHJlcG9ydC5TaWduaWZpY2FuY2UgPCAxKVxuICAgIC8vcmV0dXJuIGAke2Nkbn0vaW1hZ2VzL3Vya3VuZC8wLmdpZmA7XG4gICAgcmV0dXJuIFwidXJrdW5kLXNpZ25pZmljYW5jZSB1cmt1bmQtc2lnbmlmaWNhbmNlLTBcIjtcbiAgaWYgKHJlcG9ydC5TaWduaWZpY2FuY2UgPCAxMClcbiAgICAvL3JldHVybiBgJHtjZG59L2ltYWdlcy91cmt1bmQvMS5naWZgO1xuICAgIHJldHVybiBcInVya3VuZC1zaWduaWZpY2FuY2UgdXJrdW5kLXNpZ25pZmljYW5jZS0xXCI7XG4gIGlmIChyZXBvcnQuU2lnbmlmaWNhbmNlIDwgMjUpXG4gICAgcmV0dXJuIFwidXJrdW5kLXNpZ25pZmljYW5jZSB1cmt1bmQtc2lnbmlmaWNhbmNlLTJcIjtcbiAgICAvL3JldHVybiBgJHtjZG59L2ltYWdlcy91cmt1bmQvMi5naWZgO1xuICBpZiAocmVwb3J0LlNpZ25pZmljYW5jZSA8IDQwKVxuICAgIHJldHVybiBcInVya3VuZC1zaWduaWZpY2FuY2UgdXJrdW5kLXNpZ25pZmljYW5jZS0zXCI7XG4gICAgLy9yZXR1cm4gYCR7Y2RufS9pbWFnZXMvdXJrdW5kLzMuZ2lmYDtcbiAgaWYgKHJlcG9ydC5TaWduaWZpY2FuY2UgPCA1NSlcbiAgICByZXR1cm4gXCJ1cmt1bmQtc2lnbmlmaWNhbmNlIHVya3VuZC1zaWduaWZpY2FuY2UtNFwiO1xuICAgIC8vcmV0dXJuIGAke2Nkbn0vaW1hZ2VzL3Vya3VuZC80LmdpZmA7XG4gIGlmIChyZXBvcnQuU2lnbmlmaWNhbmNlIDwgNzApXG4gICAgcmV0dXJuIFwidXJrdW5kLXNpZ25pZmljYW5jZSB1cmt1bmQtc2lnbmlmaWNhbmNlLTVcIjtcbiAgICAvL3JldHVybiBgJHtjZG59L2ltYWdlcy91cmt1bmQvNS5naWZgO1xuICBpZiAocmVwb3J0LlNpZ25pZmljYW5jZSA8IDg1KVxuICAgIHJldHVybiBcInVya3VuZC1zaWduaWZpY2FuY2UgdXJrdW5kLXNpZ25pZmljYW5jZS02XCI7XG4gICAgLy9yZXR1cm4gYCR7Y2RufS9pbWFnZXMvdXJrdW5kLzYuZ2lmYDtcbiAgaWYgKHJlcG9ydC5TaWduaWZpY2FuY2UgPCA5OS45KVxuICAgIHJldHVybiBcInVya3VuZC1zaWduaWZpY2FuY2UgdXJrdW5kLXNpZ25pZmljYW5jZS03XCI7XG4gICAgLy9yZXR1cm4gYCR7Y2RufS9pbWFnZXMvdXJrdW5kLzcuZ2lmYDtcbiAgaWYgKHJlcG9ydC5TaWduaWZpY2FuY2UgPj0gOTkuOSlcbiAgICByZXR1cm4gXCJ1cmt1bmQtc2lnbmlmaWNhbmNlIHVya3VuZC1zaWduaWZpY2FuY2UtOFwiO1xuICAgIC8vcmV0dXJuIGAke2Nkbn0vaW1hZ2VzL3Vya3VuZC84LmdpZmA7XG4gIHJldHVybiBcIlwiO1xufVxuIiwiaW1wb3J0IHsgQ291cnNlTW9kdWxlLCBUYXNrLCBDb3Vyc2UsIEFzc2lnbm1lbnQgfSBmcm9tICdrZWRiYWNrZW5kL21vZGVscyc7XG5pbXBvcnQgeyBPcGVuQ2xvc2VCb3ggfSBmcm9tICcuLi8uLi91dGlsaXR5LWNvbXBvbmVudHMvb3Blbi1jbG9zZS1ib3gnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ291cnNlVGFzayB9IGZyb20gJy4vY291cnNlLXRhc2snO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBhcmVQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IG1vY2tUdWl0aW9uU3R1ZGVudHMgfSBmcm9tICcuLi8uLi8uLi9hcGlzL21vY2svbW9jay1jbGFzc3Jvb20tZGF0YSc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi91dGlsaXR5LWNvbXBvbmVudHMvTGFuZ3VhZ2VDb250ZXh0JztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkljb24gfSBmcm9tICcuLi9zaGFyZWQvbm90aWZpY2F0aW9uLWljb24nO1xuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vZGlnZXN0LXZpZXcnO1xuXG5pbnRlcmZhY2UgUHJvcHN7XG4gICAgbW9kdWxlOiBDb3Vyc2VNb2R1bGU7XG4gICAgdGFza3M6IFRhc2tbXTtcbn1cblxuXG5leHBvcnQgY29uc3QgQ291cnNlTW9kdWxlVmlldyA9ICgoeyBtb2R1bGUsIHRhc2tzIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBpbnRsIH0gPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XG4gICAgY29uc3Qge25vdGlmaWNhdGlvbmRpZ2VzdHMsIHNlbGVjdGVkQ291cnNlfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcblxuICAgIGxldCBnZXROb3RTdWJtaXR0ZWRVc2VycyA9IGZ1bmN0aW9uKHRhc2tBc3NpZ25tZW50czogQXNzaWdubWVudFtdKSB7IFxuICAgICAgdmFyIHRhc2tOb3RTdWJtaXR0ZWRVc2VycyA6IHtkaXNwbGF5TmFtZTpzdHJpbmcsIGVtYWlsOiBzdHJpbmd9W10gPSBbXTtcbiAgICAgIC8vIGdldCBzdHVkZW50cyBmcm9tIHRoZSBjb3Vyc2Ugc3R1ZHkgZ3JvdXBzIHdobyBoYXZlJ3QgdXBsb2FkZWQgdGhlaXIgYXNzaWdubWVudHNcbiAgICAgIHNlbGVjdGVkQ291cnNlLnN0dWR5R3JvdXBzLmZvckVhY2goZ3JvdXAgPT57XG4gICAgICAgIHZhciB1c2VycyA9IG1vY2tUdWl0aW9uU3R1ZGVudHNbZ3JvdXBdLmZpbHRlcihjcyA9PiAhdGFza0Fzc2lnbm1lbnRzLmZpbmQoZiA9PiBmLnVzZXIgPT09IGNzLnN0dWRlbnRFbWFpbEFkZHJlc3MpKVxuICAgICAgICAubWFwKG5zID0+IHtyZXR1cm4geyBkaXNwbGF5TmFtZTogYCR7bnMuc3R1ZGVudEZpcnN0TmFtZX0gJHtucy5zdHVkZW50TGFzdE5hbWV9YCwgZW1haWw6IG5zLnN0dWRlbnRFbWFpbEFkZHJlc3N9fSk7XG4gICAgICAgIGlmKHVzZXJzKXtcbiAgICAgICAgICB0YXNrTm90U3VibWl0dGVkVXNlcnMucHVzaCguLi51c2Vycyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvL3NvcnQgYnkgbGFzdG5hbWUgLSBmaXJzdG5hbWVcbiAgICAgIHJldHVybiB0YXNrTm90U3VibWl0dGVkVXNlcnMubWFwKHMgPT4ge1xuICAgICAgICBjb25zdCBbZmlyc3ROYW1lLCAuLi5yZXN0XSA9IHMuZGlzcGxheU5hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zLFxuICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICBsYXN0TmFtZTogcmVzdC5qb2luKCcgJylcbiAgICAgICAgfTtcbiAgICAgIH0pLnNvcnQoY29tcGFyZVByb3BzKFtcImxhc3ROYW1lXCIsIFwiZmlyc3ROYW1lXCJdKSk7XG4gICAgfVxuXG4gICAgbGV0IGNvdXJzZU5vdGlmaWNhdGlvbnMgPSBub3RpZmljYXRpb25kaWdlc3RzW3NlbGVjdGVkQ291cnNlLmlkXTtcblxuICAgIHJldHVybiB0YXNrcyAmJiB0YXNrcy5sZW5ndGggPiAwICYmXG4gICAgICA8PlxuICAgICAgICA8T3BlbkNsb3NlQm94IFxuICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24tY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuPnttb2R1bGUubmFtZX08L3NwYW4+XG4gICAgICAgIDxOb3RpZmljYXRpb25JY29uIGNvdXJzZT17c2VsZWN0ZWRDb3Vyc2V9IGVudGl0eT17J21vZHVsZSd9IG1vZHVsZUlkPXttb2R1bGUuaWR9IG5vdGlmaWNhdGlvbmRpZ2VzdHM9e25vdGlmaWNhdGlvbmRpZ2VzdHN9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9IFxuICAgICAgICBoZWFkZXJPcGVuPXtmYWxzZX0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY291cnNlTm90aWZpY2F0aW9ucyAmJiBPYmplY3Qua2V5cyhjb3Vyc2VOb3RpZmljYXRpb25zKS5sZW5ndGggPiAwID8gPGRpdj5cbiAgICAgICAgICAgICAge3Rhc2tzLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGFza0Fzc2lnbm1lbnRzID0gY291cnNlTm90aWZpY2F0aW9uc1t0YXNrLmlkXSA/IGNvdXJzZU5vdGlmaWNhdGlvbnNbdGFzay5pZF0ubWFwKHQ9PiB0LmFzc2lnbm1lbnQpIDogW107XG4gICAgICAgICAgICAgICAgbGV0IG5vdFN1Ym1pdHRlZFVzZXJzID0gc2VsZWN0ZWRDb3Vyc2Uuc3R1ZHlHcm91cHMgJiYgc2VsZWN0ZWRDb3Vyc2Uuc3R1ZHlHcm91cHMubGVuZ3RoID4gMCAmJiBnZXROb3RTdWJtaXR0ZWRVc2Vycyh0YXNrQXNzaWdubWVudHMpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRpc3BsYXlUYXNrID0gbm90U3VibWl0dGVkVXNlcnMubGVuZ3RoID4gMCB8fCB0YXNrQXNzaWdubWVudHMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGxheVRhc2sgJiZcbiAgICAgICAgICAgICAgICAgIDxDb3Vyc2VUYXNrIGtleT17dGFzay5pZH1cbiAgICAgICAgICAgICAgICAgICAgdGFzaz17dGFza31cbiAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudHM9e3Rhc2tBc3NpZ25tZW50c31cbiAgICAgICAgICAgICAgICAgICAgbm90U3VibWl0dGVkVXNlcnM9e25vdFN1Ym1pdHRlZFVzZXJzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+IDogXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogXCJ0ZWFjaGVyVmlldy5ub1VwbG9hZGVkQXNzaWdubWVudHNGb3JNb2R1bGVcIiwgZGVmYXVsdE1lc3NhZ2U6IFwiTm8gYXNzaWdubWVudHMgaGF2ZSBiZWVuIHVwbG9hZGVkIGZvciB0aGlzIG1vZHVsZVwifSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvT3BlbkNsb3NlQm94PiAgICBcbiAgICAgIDwvPlxufSkiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3V0aWxpdHktY29tcG9uZW50cy9MYW5ndWFnZUNvbnRleHQnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIG5vdFN1Ym1pdHRlZFVzZXJzOiB7IGRpc3BsYXlOYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcgfVtdO1xufVxuXG5cbmV4cG9ydCBjb25zdCBDb3Vyc2VUYXNrTm90SGFuZGVkVXNlckxpc3QgPSAoKHsgbm90U3VibWl0dGVkVXNlcnMgfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGludGwgfSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KTtcbiAgICBjb25zdCBub3RTdWJtaXR0ZWRMZW5ndGggPSBub3RTdWJtaXR0ZWRVc2Vycy5sZW5ndGg7XG4gICAgY29uc3QgW3NlbGVjdGVkVXNlcnMsIHNlbGVjdFVzZXJdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgcmV0dXJuIG5vdFN1Ym1pdHRlZFVzZXJzICYmIDxkaXYgY2xhc3NOYW1lPVwibm90LXN1Ym1pdHRlZC11c2VycyB0YXNrQ29udGFpbmVyXCI+XG4gICAgICAgIDxoND57aW50bC5mb3JtYXRNZXNzYWdlKHtpZDpcInRlYWNoZXJWaWV3Lm5vdFN1Ym1pdHRlZEFzc2lnbm1lbnRzXCIsIGRlZmF1bHRNZXNzYWdlOiBcIkVqIGzDpG1uYXQgaW5cIn0pfTwvaDQ+XG4gICAgICAgIHtub3RTdWJtaXR0ZWRVc2Vycy5tYXAoKG5zLCBpbmRleCkgPT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImFsaWduLWhvcml6b250YWwgc3R1ZGVudC1yb3dcIiArIChub3RTdWJtaXR0ZWRMZW5ndGggPT09IGluZGV4ICsgMSA/IFwiIGxhc3RcIiA6IFwiXCIpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvcml6b250YWxJdGVtIHRvcCBwdWxsLXJpZ2h0XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RVc2VyKHNlbGVjdGVkVXNlcnMuaW5kZXhPZihucy5lbWFpbCkgPiAtMSA/IHNlbGVjdGVkVXNlcnMuZmlsdGVyKHUgPT4gdSAhPSBucy5lbWFpbCkgOiBbLi4uc2VsZWN0ZWRVc2VycywgbnMuZW1haWxdKVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjaGVja0JveFwiICsgKHNlbGVjdGVkVXNlcnMuaW5kZXhPZihucy5lbWFpbCkgPiAtMSA/IFwiIGNoZWNrZWRcIiA6IFwiXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvcml6b250YWxJdGVtIHRvcFwiPntucy5kaXNwbGF5TmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLWhvcml6b250YWwgcmVtaW5kLWFzc2lnbm1lbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbEl0ZW0gdG9wIHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPntpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOlwidGVhY2hlclZpZXcucmVtaW5kQnRuXCIsIGRlZmF1bHRNZXNzYWdlOiBcIlDDpW1pbm5cIn0pfTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxufSkiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYXNrLCBBc3NpZ25tZW50LCBDb3Vyc2UgfSBmcm9tICdrZWRiYWNrZW5kL21vZGVscyc7XG5pbXBvcnQgeyBPcGVuQ2xvc2VCb3ggfSBmcm9tICcuLi8uLi91dGlsaXR5LWNvbXBvbmVudHMvb3Blbi1jbG9zZS1ib3gnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgQ291cnNlVGFza0Fzc2lnbm1lbnRzIH0gZnJvbSAnLi9jb3Vyc2UtdGFza3MtYXNzaWdubWVudHMnO1xuaW1wb3J0IHsgQ291cnNlVGFza05vdEhhbmRlZFVzZXJMaXN0IH0gZnJvbSAnLi9jb3Vyc2UtdGFzay1ub3QtaGFuZGVkLXVzZXJzJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkljb24gfSBmcm9tICcuLi9zaGFyZWQvbm90aWZpY2F0aW9uLWljb24nO1xuaW1wb3J0IHsgY3JlYXRlVVVJRCwgc2ltcGxlRGlnZXN0IH0gZnJvbSAna2VkYmFja2VuZC9jbGllbnQnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzL2RiJztcbmltcG9ydCB7IGVudiB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbHMvS0VELmVudic7XG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi9kaWdlc3Qtdmlldyc7XG5cbmludGVyZmFjZSBQcm9wc3tcbiAgICB0YXNrOiBUYXNrO1xuICAgIGFzc2lnbm1lbnRzOiBBc3NpZ25tZW50W107XG4gICAgbm90U3VibWl0dGVkVXNlcnM6IHtkaXNwbGF5TmFtZTpzdHJpbmcsIGVtYWlsOiBzdHJpbmd9W107XG59XG5cbmV4cG9ydCBjb25zdCBDb3Vyc2VUYXNrID0gKCh7IHRhc2ssIGFzc2lnbm1lbnRzLCBub3RTdWJtaXR0ZWRVc2VycyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCB7bm90aWZpY2F0aW9uZGlnZXN0cywgIHNlbGVjdGVkQ291cnNlLCBzZWVuRGlnZXN0c30gPSBSZWFjdC51c2VDb250ZXh0KFN0YXRlQ29udGV4dCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25UYXNrT3BlbmVkKGlzT3BlbmVkKSB7XG4gICAgaWYgKGlzT3BlbmVkICYmIG5vdGlmaWNhdGlvbmRpZ2VzdHNbc2VsZWN0ZWRDb3Vyc2UuaWRdW3Rhc2suaWRdKSB7XG5cbiAgICAgIGNvbnN0IHRhZ3NEaWdlc3QgPSBhd2FpdCBzaW1wbGVEaWdlc3QoZW52LmN1cnJlbnRVc2VyLm1haWwgKyBzZWxlY3RlZENvdXJzZS5pZCk7XG4gICAgICAvL2NoZWNrIGlmIG5vdCBhbHJlYWR5IG1hcmtlZCBhcyBzZWVuXG4gICAgICBjb25zb2xlLmxvZyhzZWVuRGlnZXN0cyk7XG4gICAgICBhc3NpZ25tZW50cy5mb3JFYWNoKGFzeW5jIChhc3NpZ25tZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnREaWdlc3QgPSBhd2FpdCBzaW1wbGVEaWdlc3QoXG4gICAgICAgICAgYXNzaWdubWVudC51c2VyICsgLy8oc3R1ZGVuJ3MgZW1haWwgYWRkcmVzcylcbiAgICAgICAgICBhc3NpZ25tZW50LmNvdXJzZUlkICtcbiAgICAgICAgICBhc3NpZ25tZW50LnRhc2tJZCArXG4gICAgICAgICAgYXNzaWdubWVudC51cGxvYWREYXRlICtcbiAgICAgICAgICAoYXNzaWdubWVudC5tZXRhZGF0YS5kcml2ZUZpbGVJZCB8fCBcIlwiKSk7XG5cbiAgICAgICAgaWYgKCEoc2VlbkRpZ2VzdHMgJiYgc2VlbkRpZ2VzdHMuZmluZChhID0+IGEuZGlnZXN0ID09PSBhc3NpZ25tZW50RGlnZXN0KSkpIHtcbiAgICAgICAgICBkYi5zZWVuU3R1ZGVudEFzc2lnbm1lbnRzLmFkZCh7XG4gICAgICAgICAgICBpZDogY3JlYXRlVVVJRCgpLFxuICAgICAgICAgICAgdGFnczogW3RhZ3NEaWdlc3RdLFxuICAgICAgICAgICAgZGlnZXN0OiBhc3NpZ25tZW50RGlnZXN0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiA8T3BlbkNsb3NlQm94XG4gICAgb25PcGVuQ2xvc2U9eyhiZWNhbWVPcGVuKSA9PiBvblRhc2tPcGVuZWQoYmVjYW1lT3Blbil9XG4gICAgY2xhc3NOYW1lPVwidGFzay1jb250YWluZXJcIlxuICAgIHRpdGxlPXs8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1jb250YWluZXJcIj5cbiAgICAgIDxzcGFuPnt0YXNrLm5hbWV9PC9zcGFuPlxuICAgICAgPE5vdGlmaWNhdGlvbkljb24gY291cnNlPXtzZWxlY3RlZENvdXJzZX0gZW50aXR5PXsndGFzayd9IHRhc2tJZD17dGFzay5pZH0gbm90aWZpY2F0aW9uZGlnZXN0cz17bm90aWZpY2F0aW9uZGlnZXN0c30gLz5cbiAgICA8L2Rpdj59XG4gICAgaGVhZGVyT3Blbj17ZmFsc2V9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwia2VkX2JveGVkXCI+XG4gICAgICA8Q291cnNlVGFza0Fzc2lnbm1lbnRzIGFzc2lnbm1lbnRzPXthc3NpZ25tZW50c30gLz5cbiAgICAgIDxiciAvPlxuICAgICAgPENvdXJzZVRhc2tOb3RIYW5kZWRVc2VyTGlzdCBub3RTdWJtaXR0ZWRVc2Vycz17bm90U3VibWl0dGVkVXNlcnN9IC8+XG4gICAgPC9kaXY+XG4gIDwvT3BlbkNsb3NlQm94PlxufSkiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBc3NpZ25tZW50LCBVcmt1bmRSZXNwb25zZSB9IGZyb20gXCJrZWRiYWNrZW5kL21vZGVsc1wiO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgVGFza0Fzc2lnbm1lbnQgfSBmcm9tICcuL3Rhc2stYXNzaWdubWVudCc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi91dGlsaXR5LWNvbXBvbmVudHMvTGFuZ3VhZ2VDb250ZXh0JztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wc3tcbiAgICBhc3NpZ25tZW50czogQXNzaWdubWVudFtdO1xufVxuXG5leHBvcnQgY29uc3QgQ291cnNlVGFza0Fzc2lnbm1lbnRzID0gKCh7IGFzc2lnbm1lbnRzIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBpbnRsIH0gPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XG4gICAgY29uc3QgcmVmcmVzaGFibGVBc3NpZ21lbnRzID0gT2JqZWN0LmFzc2lnbihbXSwgYXNzaWdubWVudHMpIGFzIGFueTtcbiAgICAvL2RldGVybWluZSB3aGljaCBhc3Npbm1lbnRzIHNob3VsZCBnZXQgZGF0YSBmcm9tIHVya3VuZFxuICAgIHJlZnJlc2hhYmxlQXNzaWdtZW50cy5sZW5ndGggPiAwICYmIHJlZnJlc2hhYmxlQXNzaWdtZW50cy5mb3JFYWNoKGEgPT4ge1xuICAgICAgICBhLnNob3VsZFJlZnJlc2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGEubWV0YWRhdGEgJiZcbiAgICAgICAgICAgICFhLm1ldGFkYXRhLnVya3VuZFVwbG9hZEVycm9yICYmICggLy8gTm90IHBvc3NpYmxlIHRvIHJlZnJlc2ggaWYgdXBsb2FkIGhhcyBmYWlsZWRcbiAgICAgICAgICAgICAgICAhYS5tZXRhZGF0YS51cmt1bmRMYXN0UG9sbCB8fCAvLyBOZXZlciBjaGVja2VkIHN0YXR1cyB5ZXRcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIFsnQWNjZXB0ZWQnLCAnU3VibWl0dGVkJ10uaW5kZXhPZigoSlNPTi5wYXJzZShhLm1ldGFkYXRhLnVya3VuZFJlc3BvbnNlKVswXSBhcyBVcmt1bmRSZXNwb25zZSkuU3RhdHVzLlN0YXRlKSA+PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGEubWV0YWRhdGEudXJrdW5kTGFzdFBvbGwpIDwgbW9tZW50KCkuYWRkKC0xNSwgXCJzZWNvbmRzXCIpLnRvRGF0ZSgpLmdldFRpbWUoKSkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgYS5zaG91bGRSZWZyZXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIGFzc2lnbm1lbnRzLmxlbmd0aCA+IDAgPyA8dGFibGUgY2xhc3NOYW1lPVwidGFzay1hc3NpZ25tZW50cy10YWJsZVwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPntpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOlwidGVhY2hlclZpZXcuYXNzaWdubWVudFN0dWRlbnROYW1lXCIsIGRlZmF1bHRNZXNzYWdlOlwiRWxldlwifSl9PC90aD5cbiAgICAgICAgICAgICAgICA8dGg+e2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6XCJ0ZWFjaGVyVmlldy5hc3NpZ25tZW50RmlsZU5hbWVcIiwgZGVmYXVsdE1lc3NhZ2U6XCJGaWxuYW1uXCJ9KX08L3RoPlxuICAgICAgICAgICAgICAgIDx0aD57aW50bC5mb3JtYXRNZXNzYWdlKHtpZDpcInRlYWNoZXJWaWV3LmFzc2lnbm1lbnRTdWJtaXR0ZWRBdFwiLCBkZWZhdWx0TWVzc2FnZTpcIklubGFtbmF0XCJ9KX08L3RoPlxuICAgICAgICAgICAgICAgIDx0aD57aW50bC5mb3JtYXRNZXNzYWdlKHtpZDpcInRlYWNoZXJWaWV3LmFzc2lnbm1lbnRSZXBvcnRcIiwgZGVmYXVsdE1lc3NhZ2U6XCJSYXBwb3J0XCJ9KX08L3RoPlxuICAgICAgICAgICAgICAgIDx0aD57aW50bC5mb3JtYXRNZXNzYWdlKHtpZDpcInRlYWNoZXJWaWV3LmFzc2lnbm1lbnRHcmFkZVwiLCBkZWZhdWx0TWVzc2FnZTpcIk5pdmFcIn0pfTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7cmVmcmVzaGFibGVBc3NpZ21lbnRzLm1hcChhc3NpZ25tZW50ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPFRhc2tBc3NpZ25tZW50IGFzc2lnbm1lbnQ9e2Fzc2lnbm1lbnR9IHNob3VsZEdldFVya3VuZFN0YXR1cyA9IHthc3NpZ25tZW50LnNob3VsZFJlZnJlc2h9IC8+XG4gICAgICAgICAgICB9KX1cblxuICAgICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgICAgIDpcbiAgICAgICAgPGRpdj57aW50bC5mb3JtYXRNZXNzYWdlKHtpZDpcInRlYWNoZXJWaWV3Lm5vVGFza0Fzc2lnbm1lbnRzXCIsIGRlZmF1bHRNZXNzYWdlOlwiSW5nYSB1cHBkcmFnIHVwcGxhZGRhZGUgZsO2ciBkZW5uYSB1cHBnaWZ0XCJ9KX08L2Rpdj5cblxuICAgICAgICBcbn0pIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ291cnNlTW9kdWxlVmlldyB9IGZyb20gJy4vY291cnNlLW1vZHVsZSc7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3V0aWxpdHktY29tcG9uZW50cy9MYW5ndWFnZUNvbnRleHQnO1xuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vZGlnZXN0LXZpZXcnO1xuaW1wb3J0IHsgU2VsZWN0U3R1ZHlHcm91cHMgfSBmcm9tICcuLi8uLi9jb3Vyc2UtYnVpbGRlci9zdWItY29tcG9uZW50cy9zZWxlY3Qtc3R1ZHktZ3JvdXBzJztcblxuXG5leHBvcnQgY29uc3QgQXNzaWdubWVudHNWaWV3ID0gKCgpID0+IHtcbiAgICBjb25zdCB7IGludGwgfSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KTtcbiAgICBjb25zdCBbc2VsZWN0ZWRTdHVkeUdyb3Vwcywgc2V0RmlsdGVyU3R1ZHlHcm91cF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgeyB0YXNrcywgc2VsZWN0ZWRDb3Vyc2UsIHNjaG9vbCB9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xuXG4gICAgY29uc3QgZGVmYXVsdERlc2NyaXB0aW9uTWVzc2FnZSA9IFwiSMOkciBsaXN0YXMgc2FtdGxpZ2EgaW5sw6RtbmluZ3N1cHBnaWZ0ZXIgaSBkaW4vZGluYSBrdXJzZXIgZHUgaGFuZGxlZGVyLlwiXG4gICAgICAgICsgXCJLbGlja2EgdGlsbCBow7ZnZXIgZsO2ciBhdHQgdsOkbGphIGt1cnMuIEt1cnNlbnMgdXBwZ2lmdGVyIHN5bnMgbmVkYW4uIER1IGthbiDDtnBwbmEvZMO2bGphIHZhcmplIG1vZHVsLlwiO1xuXG4gICAgcmV0dXJuIDw+IHtzZWxlY3RlZENvdXJzZSA/XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Ytcm93IHN2LWxheW91dCBzdi1za2lwLXNwYWNlclwiPlxuICAgICAgICAgICAgPGgyPntpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogXCJ0ZWFjaGVyVmlldy5hc3NpZ25tZW50c1ZpZXdUaXRsZVwiLCBkZWZhdWx0TWVzc2FnZTogXCJJbmzDpG1uaW5nc3VwcGdpZnRlclwiIH0pfTwvaDI+XG4gICAgICAgICAgICA8cD57aW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6IFwidGVhY2hlclZpZXcuYXNzaWdubWVudHNWaWV3RGVzY3JpcHRpb25cIiwgZGVmYXVsdE1lc3NhZ2U6IHsgZGVmYXVsdERlc2NyaXB0aW9uTWVzc2FnZSB9IH0pfTwvcD5cbiAgICAgICAgICAgIDxoMz57c2VsZWN0ZWRDb3Vyc2UubmFtZX0te3NlbGVjdGVkQ291cnNlLmRlc2NyaXB0aW9ufTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2LXJvdyBzdi1sYXlvdXQgc3Ytc2tpcC1zcGFjZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvcml6b250YWxJdGVtIHRvcCBwdWxsLXJpZ2h0IHN0dWR5LWdyb3VwLWZpbHRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0U3R1ZHlHcm91cHNcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaG9vbD17c2Nob29sfVxuICAgICAgICAgICAgICAgICAgICAgICAgY291cnNlQ29kZT17c2VsZWN0ZWRDb3Vyc2UuY29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3R1ZHlHcm91cHM9e3NlbGVjdGVkU3R1ZHlHcm91cHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZT17c3R1ZHlHcm91cHMgPT4geyBzZXRGaWx0ZXJTdHVkeUdyb3VwKFsuLi5zdHVkeUdyb3Vwc10pIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aW50bC5mb3JtYXRNZXNzYWdlKHtpZDpcInRlYWNoZXJWaWV3LmZpbHRlckJ5U3R1ZHlncm91cHNQbGFjZWhvbGRlclwiLCBkZWZhdWx0TWVzc2FnZTpcIlbDpGxqIHN0dWRpZWdydXBwXCJ9KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3NlbGVjdGVkQ291cnNlLm1vZHVsZXMubWFwKG1vZHVsZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlVGFza3MgPSB0YXNrcy5maWx0ZXIodCA9PiBtb2R1bGUudGFza0lkcy5maW5kKHRJZCA9PiB0SWQgPT09IHQuaWQpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kdWxlVGFza3MubGVuZ3RoID4gMCA/IDxDb3Vyc2VNb2R1bGVWaWV3IHRhc2tzPXttb2R1bGVUYXNrc30ga2V5PXttb2R1bGUuaWR9IG1vZHVsZT17bW9kdWxlfSAvPiA6IG51bGw7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDogbnVsbH08Lz5cbn0pOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IERyaXZlRmlsZUxpc3RpbmcsIGRvd25sb2FkRmlsZSwgZ2V0VXJrdW5kU3RhdHVzIH0gZnJvbSAnLi4vLi4vY291cnNlLXZpZXdlci9jb3Vyc2UtcGFnZS90YXNrLWFzc2lnbm1lbnRzLXV0aWxzJztcbmltcG9ydCB7IEFzc2lnbm1lbnQgfSBmcm9tICdrZWRiYWNrZW5kL21vZGVscyc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzL0tFRC5lbnYnO1xuaW1wb3J0IHsgSHR0cEVycm9yIH0gZnJvbSAna2VkYmFja2VuZC9jbGllbnQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBhc3NpZ25tZW50OiBBc3NpZ25tZW50O1xuICAgIHNob3VsZEdldFVya3VuZFN0YXR1czogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY29uc3QgVGFza0Fzc2lnbm1lbnQgPSAoKHsgYXNzaWdubWVudCwgc2hvdWxkR2V0VXJrdW5kU3RhdHVzIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW2Fzc2lnbm1lbnRzV2l0aFN0YXR1cywgc2V0QXNzaWdubWVudFN0YXR1c10gPSB1c2VTdGF0ZShhc3NpZ25tZW50KTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hBc3NpZ25tZW50KGFzc2lnbm1lbnQ6IEFzc2lnbm1lbnQpIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gZW52LmtlZEJhY2tlbmRDbGllbnQuaHR0cDtcbiAgICAgICAgY29uc3QgeyBjb3Vyc2VJZCwgdGFza0lkLCBzY2hvb2wgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdXNlciwgZmlsZW5hbWUgfSA9IGFzc2lnbm1lbnQ7XG4gICAgICAgIGF3YWl0IHNldEFzc2lnbm1lbnRTdGF0dXMoeyAuLi5hc3NpZ25tZW50LCBpc1JlZnJlc2hpbmc6IHRydWUgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBjbGllbnQuZ2V0KGBhc3NpZ25tZW50cy91cmt1bmQvJHtzY2hvb2x9LyR7Y291cnNlSWR9LyR7dGFza0lkfS8ke3VzZXJ9LyR7ZmlsZW5hbWV9YCk7XG4gICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA+PSA0MDApIHRocm93IG5ldyBIdHRwRXJyb3IocmVxLnN0YXR1cywgYXdhaXQgcmVxLnRleHQoKSk7XG4gICAgICAgICAgICBjb25zdCByZXNKc29uID0gYXdhaXQgcmVxLnRleHQoKTtcbiAgICAgICAgICAgIGF3YWl0IHNldEFzc2lnbm1lbnRTdGF0dXMoe1xuICAgICAgICAgICAgICAgIC4uLmFzc2lnbm1lbnQsIGlzUmVmcmVzaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYXNzaWdubWVudC5tZXRhZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgdXJrdW5kUmVzcG9uc2U6IHJlc0pzb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgYXdhaXQgc2V0QXNzaWdubWVudFN0YXR1cyh7IC4uLmFzc2lnbm1lbnQsIGlzUmVmcmVzaGluZzogZmFsc2UsIHJlZnJlc2hFcnJvcjogZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzaG91bGRHZXRVcmt1bmRTdGF0dXMpIHtcbiAgICAgICAgICAgIHNldEFzc2lnbm1lbnRTdGF0dXMoeyAuLi5hc3NpZ25tZW50LCBpc1JlZnJlc2hpbmc6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbc2hvdWxkR2V0VXJrdW5kU3RhdHVzLCBhc3NpZ25tZW50XSlcblxuICAgIHJldHVybiA8dHIga2V5PXthc3NpZ25tZW50c1dpdGhTdGF0dXMubWVkaWFMaW5rfSBzdHlsZT17YXNzaWdubWVudHNXaXRoU3RhdHVzLm1ldGFkYXRhLiRtZXRhID8geyBvcGFjaXR5OiAwLjUgfSA6IHt9fT5cbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke2Fzc2lnbm1lbnRzV2l0aFN0YXR1cy51c2VyfWB9PlxuICAgICAgICAgICAgICAgIHthc3NpZ25tZW50c1dpdGhTdGF0dXMubWV0YWRhdGEudXNlckRpc3BsYXlOYW1lIHx8IGFzc2lnbm1lbnRzV2l0aFN0YXR1cy51c2VyfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICB7YXNzaWdubWVudHNXaXRoU3RhdHVzLm1ldGFkYXRhLmRyaXZlRmlsZUlkID9cbiAgICAgICAgICAgICAgICAvLyBUaGUgZmlsZSBjYW4gYmUgZWRpdGVkIG9uIGRyaXZlLiBMaW5rIHRvIGVkaXRpbmcgaXQuXG4gICAgICAgICAgICAgICAgPERyaXZlRmlsZUxpc3RpbmcgZmlsZT17YXNzaWdubWVudHNXaXRoU3RhdHVzfSAvPiA6XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZEZpbGUoYXNzaWdubWVudHNXaXRoU3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfX0+e21heExlbmd0aChhc3NpZ25tZW50c1dpdGhTdGF0dXMuZmlsZW5hbWUsIDMyKX08L2E+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhc3NpZ25tZW50LWRhdGUtY29sXCI+e21vbWVudChhc3NpZ25tZW50c1dpdGhTdGF0dXMudXBsb2FkRGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tJyl9PC90ZD5cbiAgICAgICAge2dldFVya3VuZFN0YXR1cyhhc3NpZ25tZW50c1dpdGhTdGF0dXMsIHJlZnJlc2hBc3NpZ25tZW50KX1cbiAgICA8L3RyPlxufSkiLCJpbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi91dGlsaXR5LWNvbXBvbmVudHMvTGFuZ3VhZ2VDb250ZXh0JztcbmltcG9ydCB7IHByZXNlcnZlSW1wZXJzb25hdGlvblF1ZXJ5IH0gZnJvbSAnLi4vLi4vLi4vYWNjZXNzLWNvbnRyb2wnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSWNvbiB9IGZyb20gJy4uL3NoYXJlZC9ub3RpZmljYXRpb24taWNvbic7XG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi9kaWdlc3Qtdmlldyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY291cnNlQnVpbGRlclVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQ291cnNlc1ZpZXcgPSAoKHsgY291cnNlQnVpbGRlclVybCB9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgaW50bCB9ID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpO1xuICAgIGNvbnN0IHtub3RpZmljYXRpb25kaWdlc3RzLCB0ZWFjaGVyQ291cnNlcywgc2VsZWN0ZWRDb3Vyc2V9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic3YtaHRtbC1wb3J0bGV0IHN2LXBvcnRsZXQgc3Ytc2tpcC1zcGFjZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZWRfYm94ZWRcIj5cbiAgICAgICAgICAgIDxoMz57aW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6IFwidGVhY2hlclZpZXcuY291cnNlc1ZpZXdUaXRsZVwiLCBkZWZhdWx0TWVzc2FnZTogXCJNaW5hIGt1cnNlci8gdXBwZ2lmdGVyXCIgfSl9PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFza0NvbnRhaW5lciBvZGQtZXZlblwiPlxuICAgICAgICAgICAgICAgIHt0ZWFjaGVyQ291cnNlcy5tYXAoKGNvdXJzZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb3Vyc2UuZGVzY3JpcHRpb259IGNsYXNzTmFtZT1cImFsaWduLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYWNoZXJTY2hvb2xDb3Vyc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3Jpem9udGFsSXRlbSB0b3AgcHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YCR7cHJlc2VydmVJbXBlcnNvbmF0aW9uUXVlcnkoY291cnNlQnVpbGRlclVybCwge30pfSMvY291cnNlcy8ke2NvdXJzZS5pZH0vZWRpdGB9IGNsYXNzTmFtZT1cImVkaXRJdGVtXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbEl0ZW0gdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3NlbGVjdGVkQ291cnNlICYmIHNlbGVjdGVkQ291cnNlLmlkID09PSBjb3Vyc2UuaWQgPyBcInNlbGVjdGVkXCIgOiBcIlwifSB0bz17YC9vdmVydmlldy9jb3Vyc2UvJHtjb3Vyc2UuaWR9L2Fzc2lnbm1lbnRzYH0+e2NvdXJzZS5uYW1lfSAtIHtjb3Vyc2UuZGVzY3JpcHRpb259PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs8Tm90aWZpY2F0aW9uSWNvbiBub3RpZmljYXRpb25kaWdlc3RzPXtub3RpZmljYXRpb25kaWdlc3RzfSBlbnRpdHk9eydjb3Vyc2UnfSBjb3Vyc2U9e2NvdXJzZX0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG59KTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzLCB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHsgVHdvQ29sdW1uc1BhZ2UgfSBmcm9tICcuLi9jb3Vyc2UtYnVpbGRlci1rcy9jb21tb24vdHdvLWNvbHVtbnMtcGFnZSc7XG5pbXBvcnQgeyBBc3NpZ25tZW50c1ZpZXcgfSBmcm9tICcuL2Fzc2lnbm1lbnRzLXZpZXcnO1xuaW1wb3J0IHsgQ291cnNlc1ZpZXcgfSBmcm9tICcuL2NvdXJzZXMtdmlldyc7XG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uL2dsb2JhbHMvZGInO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vLi4vZ2xvYmFscy9LRUQuZW52JztcbmltcG9ydCB7IENvdXJzZSwgU2VlblN0dWRlbnRBc3NpZ25tZW50LCBUYXNrIH0gZnJvbSAna2VkYmFja2VuZC9tb2RlbHMnO1xuaW1wb3J0IHsgSHR0cEVycm9yLCBzaW1wbGVEaWdlc3R9IGZyb20gJ2tlZGJhY2tlbmQvY2xpZW50JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wYXJlUHJvcHMsIHNob3dFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgUm91dGVDb21wb25lbnRQcm9wczxhbnk+IHtcbiAgICBjb3Vyc2VCdWlsZGVyVXJsOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIENvbnRleHQge1xuICAgIG5vdGlmaWNhdGlvbmRpZ2VzdHM6IHsgW2tleTogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBhbnlbXSB9IH07XG4gICAgc2VsZWN0ZWRDb3Vyc2U6IENvdXJzZTtcbiAgICB0ZWFjaGVyQ291cnNlczogQ291cnNlW107XG4gICAgc2VlbkRpZ2VzdHM6IFNlZW5TdHVkZW50QXNzaWdubWVudFtdO1xuICAgIHNjaG9vbDogc3RyaW5nO1xuICAgIHRhc2tzOiBUYXNrW107XG5cbn1cbmxldCBjb250ZXh0SW5pdGlhbFZhbHVlIDogQ29udGV4dCA9IHtub3RpZmljYXRpb25kaWdlc3RzOiB7fSwgc2VsZWN0ZWRDb3Vyc2U6IG51bGwsIHRlYWNoZXJDb3Vyc2VzOiBbXSwgc2VlbkRpZ2VzdHM6IFtdLCBzY2hvb2w6IFwiXCIsIHRhc2tzOiBbXX07XG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dChjb250ZXh0SW5pdGlhbFZhbHVlKTtcblxuXG5leHBvcnQgY29uc3QgRGlnZXN0VmlldyA9IHdpdGhSb3V0ZXIoKCh7IG1hdGNoLCBjb3Vyc2VCdWlsZGVyVXJsIH06IFByb3BzKSA9PiB7XG4gICAgdmFyIGNvdXJzZUlkID0gbWF0Y2ggPyBtYXRjaC5wYXJhbXMuY291cnNlSWQgOiBudWxsO1xuICAgIHZhciBjb3Vyc2VJZCA9IGNvdXJzZUlkID8gY291cnNlSWQgOiBudWxsO1xuICAgIHZhciBteUNvdXJzZXMgOiBDb3Vyc2VbXSA9IFtdO1xuICAgIGNvbnN0IFtub3RpZmljYXRpb25kaWdlc3RzLCBzZXRBc3NpZ25tZW50c10gPSB1c2VTdGF0ZSh7YXNzaWdubWVudHMgOiB7fSwgZGlnZXN0SWRzOiBbXX0pO1xuXG5cbiAgICBjb25zdCBzY2hvb2wgPSBkYi5zY2hvb2xzLnRhZ3MoXCJneW1uYXNpdW1cIikubmFtZShlbnYuY3VycmVudFVzZXIuc2Nob29sKS5pbmNsdWRlKFwiY291cnNlc1wiKS5zaW5nbGUoKS5yZWFkKCk7XG5cbiAgICBsZXQgc2Nob29sQ291cnNlcyA9IHNjaG9vbCA/IHNjaG9vbC5jb3Vyc2VzIDogW107XG4gICAgaWYgKHNjaG9vbENvdXJzZXMpIHtcbiAgICAgICAgY29uc3QgbWUgPSBlbnYuY3VycmVudFVzZXIubWFpbDtcblxuICAgICAgICBzY2hvb2xDb3Vyc2VzLmZvckVhY2goKGNvdXJzZTogQ291cnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoY291cnNlLm1vZHVsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChjb3Vyc2UuYWN0aXZhdGVkQnkgJiYgY291cnNlLmFjdGl2YXRlZEJ5LnVybCA9PSBtZSkge1xuICAgICAgICAgICAgICAgICAgICBteUNvdXJzZXMucHVzaChjb3Vyc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY291cnNlLnJlc3BvbnNpYmxlVGVhY2hlcnMuZmlsdGVyKHQgPT4gdC51cmwgPT0gbWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbXlDb3Vyc2VzLnB1c2goY291cnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG15Q291cnNlcyA9IG15Q291cnNlcy5zb3J0KGNvbXBhcmVQcm9wcyhbXCJuYW1lXCIsIFwiZGF0ZVRpbWVcIl0pKTtcbiAgICBjb25zdCB0YXNrcyA9IG15Q291cnNlcyA/IGRiLnRhc2tzLmhhc0VkZ2VzRnJvbShteUNvdXJzZXMubWFwKGMgPT4gYy5pZCkpLnRvVmFsdWUoKS5yZWFkKCkgOiBbXTtcbiAgICBjb25zdCB0YXNrQXNzaWdubWVudHMgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmFzc2lnbm1lbnQgPT09IHRydWUpO1xuXG4gICAgY29uc3Qgc2Nob29sTmFtZSA9IHNjaG9vbC5uYW1lO1xuICAgIGNvbnN0IGNvdXJzZUlkcyA9IG15Q291cnNlcy5tYXAoZnVuY3Rpb24gKGUpIHtyZXR1cm4gZS5pZDt9KS5qb2luKCcsJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb3Vyc2UgPSBteUNvdXJzZXMuZmluZChjID0+IGMuaWQgPT09IGNvdXJzZUlkKTsgICAgXG5cbiAgICBcbiAgICAvL3JldHJpZXZpbmcgdGhlIGRpZ2VzdElkcyB3aXRoIHVzZUVmZmVjdCBjYXVzZXMgYSBzZWNvbmQgdGltZSBsb2FkaW5nIHN0YXRlXG4gICAgLy9jaGFuZ2luZyBzZWVuU3R1ZGVudEFzc2lnbm1lbnRzIGRvZXMgbm90IHJlLXJlbmRlciB0aGUgcGFnZS5cbiAgICBsZXQgc2VlbkRpZ2VzdHMgPSBkYi5zZWVuU3R1ZGVudEFzc2lnbm1lbnRzLnRhZ3MoLi4ubm90aWZpY2F0aW9uZGlnZXN0cy5kaWdlc3RJZHMpLnRvVmFsdWUoKS5yZWFkKCkgYXMgU2VlblN0dWRlbnRBc3NpZ25tZW50W107XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXROb3RpZmljYXRpb25EaWdlc3Qoc2Nob29sOiBzdHJpbmcsIGNvdXJzZUlkczogc3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSBlbnYua2VkQmFja2VuZENsaWVudC5odHRwO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvL3JldHJpZXZlIGFzc2lnbm1lbnRzXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LmdldChcImFzc2lnbm1lbnRzL25vdGlmaWNhdGlvbmRpZ2VzdHNcIiwgeyBzY2hvb2wsIGNvdXJzZUlkcyB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBIdHRwRXJyb3IocmVzLnN0YXR1cywgYXdhaXQgcmVzLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBhc3NpZ25tZW50cyA9IGF3YWl0IChyZXMuanNvbigpIGFzIGFueSkgYXMgeyBba2V5OiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IGFueVtdIH0gfTsgICAgIFxuICAgICAgICAgICAgICAgIHZhciBkaWdlc3RBcnJheSA9IGF3YWl0IFByb21pc2UuYWxsKG15Q291cnNlcy5tYXAoY291cnNlID0+IHNpbXBsZURpZ2VzdChlbnYuY3VycmVudFVzZXIubWFpbCArIGNvdXJzZS5pZCkpKSBhcyBzdHJpbmdbXTsgICAgICAgXG4gICAgICAgICAgICAgICAgc2V0QXNzaWdubWVudHMoe2RpZ2VzdElkczogZGlnZXN0QXJyYXksIGFzc2lnbm1lbnRzfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGNvdXJzZUlkcyAmJiBzY2hvb2xOYW1lKXtcbiAgICAgICAgICAgZ2V0Tm90aWZpY2F0aW9uRGlnZXN0KHNjaG9vbE5hbWUsIGNvdXJzZUlkcyk7XG4gICAgICAgIH1cbiAgICB9LCBbc2Nob29sTmFtZSwgY291cnNlSWRzLCBzZWxlY3RlZENvdXJzZV0pO1xuXG4gICAgbGV0IGNvbnRleHRWYWx1ZSA9IHtcbiAgICAgICAgbm90aWZpY2F0aW9uZGlnZXN0czogbm90aWZpY2F0aW9uZGlnZXN0cy5hc3NpZ25tZW50cyxcbiAgICAgICAgc2VsZWN0ZWRDb3Vyc2UsIFxuICAgICAgICB0ZWFjaGVyQ291cnNlcyA6IG15Q291cnNlcyxcbiAgICAgICAgc2VlbkRpZ2VzdHMsXG4gICAgICAgIHNjaG9vbDogc2Nob29sTmFtZSxcbiAgICAgICAgdGFza3M6IHRhc2tBc3NpZ25tZW50c1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gIDxTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+PFR3b0NvbHVtbnNQYWdlXG4gICAgbGVmdD17PEFzc2lnbm1lbnRzVmlldyAvPn1cbiAgICByaWdodD17PENvdXJzZXNWaWV3IGNvdXJzZUJ1aWxkZXJVcmw9e2NvdXJzZUJ1aWxkZXJVcmx9Lz59XG4gICAgcmlnaHRXaWR0aD17NX0gLz48L1N0YXRlQ29udGV4dC5Qcm92aWRlcj5cbn0pKTtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgUmVkaXJlY3R9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgT2JzZXJ2ZSB9IGZyb20gJy4uL3V0aWxpdHktY29tcG9uZW50cy9vYnNlcnZlJztcbmltcG9ydCB7IEVsbGlwc2lzTG9hZGVyIH0gZnJvbSAnLi4vY291cnNlLWJ1aWxkZXIvc3ViLWNvbXBvbmVudHMvZWxsaXBzaXMtbG9hZGVyJztcbmltcG9ydCB7IERpZ2VzdFZpZXcgfSBmcm9tICcuL2RpZ2VzdC12aWV3JztcbmltcG9ydCB7IHNldHVwSW50bCB9IGZyb20gJy4uL3V0aWxpdHktY29tcG9uZW50cy9TZXR1cExhbmd1YWdlSW50bCc7XG5pbXBvcnQgeyBpbmplY3RJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY291cnNlQnVpbGRlclVybDogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBUZWFjaGVyVmlld0FwcCA9IHNldHVwSW50bChpbmplY3RJbnRsKCh7Y291cnNlQnVpbGRlclVybH06IFByb3BzKSA9PiB7ICAgIFxuICAgIHJldHVybiA8Um91dGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYWNoZXItdmlld1wiPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgcmVuZGVyPXsoKSA9PiA8UmVkaXJlY3QgdG89e2Avb3ZlcnZpZXdgfSAvPn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdD17ZmFsc2V9IHBhdGg9XCIvb3ZlcnZpZXcvY291cnNlLzpjb3Vyc2VJZC9hc3NpZ25tZW50c1wiPlxuICAgICAgICAgICAgICAgIDxPYnNlcnZlIGZhbGxiYWNrPXs8RWxsaXBzaXNMb2FkZXIgLz59PlxuICAgICAgICAgICAgICAgICAgICA8RGlnZXN0VmlldyBjb3Vyc2VCdWlsZGVyVXJsID17Y291cnNlQnVpbGRlclVybH0vPlxuICAgICAgICAgICAgICAgIDwvT2JzZXJ2ZT5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvUm91dGVyPlxufSkpXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvdXJzZSwgU2VlblN0dWRlbnRBc3NpZ25tZW50IH0gZnJvbSAna2VkYmFja2VuZC9tb2RlbHMnO1xuaW1wb3J0IHsgc2ltcGxlRGlnZXN0IH0gZnJvbSAna2VkYmFja2VuZC9jbGllbnQnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFscy9LRUQuZW52JztcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFscy9kYic7XG5pbXBvcnQgeyBzaG93RXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi9kaWdlc3Qtdmlldyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY291cnNlOiBDb3Vyc2U7XG4gICAgbW9kdWxlSWQ/OiBzdHJpbmc7XG4gICAgdGFza0lkPzogc3RyaW5nO1xuICAgIGVudGl0eTogJ2NvdXJzZScgfCAnbW9kdWxlJyB8ICd0YXNrJztcbiAgICBub3RpZmljYXRpb25kaWdlc3RzOiB7IFtrZXk6IHN0cmluZ106IHsgW2tleTogc3RyaW5nXTogYW55W10gfSB9O1xufVxuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uSWNvbiA9ICgoeyBjb3Vyc2UsIGVudGl0eSwgbW9kdWxlSWQsIHRhc2tJZCwgbm90aWZpY2F0aW9uZGlnZXN0cyB9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgc2VlbkRpZ2VzdHMgfSA9IFJlYWN0LnVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcbiAgICBsZXQgbm90aWZpY2F0aW9uczogbnVtYmVyID0gMDtcbiAgICAgICAgIFxuICAgIC8vbGV0IHNlZW5EaWdlc3RzID0gZGIuc2VlblN0dWRlbnRBc3NpZ25tZW50cy50YWdzKGNvdXJzZU5vdGlmaWNhdGlvbkRpZ2VzdCkudG9WYWx1ZSgpLnJlYWQoKSBhcyBTZWVuU3R1ZGVudEFzc2lnbm1lbnRbXTtcbiAgICBsZXQgY291cnNlTm90aWZpY2F0aW9ucyA9IG5vdGlmaWNhdGlvbmRpZ2VzdHNbY291cnNlLmlkXTtcbiAgICBpZiAoY291cnNlTm90aWZpY2F0aW9ucykge1xuICAgICAgICBpZiAoZW50aXR5ID09PSAnY291cnNlJykge1xuICAgICAgICAgICAgY291cnNlLm1vZHVsZXMuZm9yRWFjaChjbW9kID0+IHtcbiAgICAgICAgICAgICAgICBjbW9kLnRhc2tJZHMuZm9yRWFjaChjb3Vyc2VUYXNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9ucyArPSBnZXRUYXNrTm90aWZpY2F0aW9ucyhjb3Vyc2VOb3RpZmljYXRpb25zW2NvdXJzZVRhc2tdKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChlbnRpdHkgPT09ICdtb2R1bGUnKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudE1vZHVsZSA9IGNvdXJzZS5tb2R1bGVzLmZpbmQobSA9PiBtLmlkID09IG1vZHVsZUlkKTtcbiAgICAgICAgICAgIGN1cnJlbnRNb2R1bGUgJiYgY3VycmVudE1vZHVsZS50YXNrSWRzLmZvckVhY2goY291cnNlVGFzayA9PiB7XG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9ucyArPSBnZXRUYXNrTm90aWZpY2F0aW9ucyhjb3Vyc2VOb3RpZmljYXRpb25zW2NvdXJzZVRhc2tdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoZW50aXR5ID09PSAndGFzaycpIHtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbnMgKz0gZ2V0VGFza05vdGlmaWNhdGlvbnMoY291cnNlTm90aWZpY2F0aW9uc1t0YXNrSWRdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRhc2tOb3RpZmljYXRpb25zKHRhc2tBc3NpZ25tZW50czogYW55W10pIHtcbiAgICAgICAgaWYodGFza0Fzc2lnbm1lbnRzKXtcbiAgICAgICAgICAgIHJldHVybiB0YXNrQXNzaWdubWVudHMuZmlsdGVyKHQ9PiAhc2VlbkRpZ2VzdHMuZmluZChkID0+IGQuZGlnZXN0ID09PSB0LmRpZ2VzdCkpLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvL0EgbW9yZSBlZmZpY2llbnQgd2F5IGlzIHRvIHJldHJpZXZlIGFsbCBkaWdlc3QgaWRzIGZyb20gdGhlIHJvb3QgY29tcG9uZW50IChkaWdlc3QtdmlldyBjb21wb25lbnQpIGFuZCBwYXNzIHRob3NlIHRvIHRoZSBjaGlsZHJlblxuICAgIC8vSW4gYm90aCBjYXNlcyBhIGZsaWNrZXIgaXMgaGFwcGVuaW5nIHdoaWxlIHRoZSBpbml0aWFsIGxvYWQgYmVjYXVzZSBvZiB0aGUgY29tcHV0YXRpb24gdXNpbmcgdGhlIHNpbXBsZSBkaWdlc3RcbiAgICAvL0Fub3RoZXIgd2F5IGlzIHRvIGNvbXB1dGUgdGhpcyBvbiB0aGUgc2VydmVyIHNpZGUsIGluIHRoZSBHZXROb3RpZmljYXRpb25EaWdlc3RzIG1ldGhvZFxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGFzeW5jIGZ1bmN0aW9uIGdldENvdXJzZXNOb3RpZmljYXRpb25zKGNvdXJzZUlkOiBzdHJpbmcpIHtcbiAgICAvLyAgICAgICAgIHRyeSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc3QgY291cnNlRGlnZXN0ID0gYXdhaXQgc2ltcGxlRGlnZXN0KGVudi5jdXJyZW50VXNlci5tYWlsICsgY291cnNlSWQpIGFzIHN0cmluZztcbiAgICAvLyAgICAgICAgICAgICBzZXRDb3Vyc2VOb3RpZmljYXRpb25EaWdlc3QoY291cnNlRGlnZXN0KTtcbiAgICAvLyAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgIC8vICAgICAgICAgICAgIHNob3dFcnJvcihlcnIpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9O1xuICAgIC8vICAgICBpZihjb3Vyc2Upe1xuICAgIC8vICAgICAgICAgZ2V0Q291cnNlc05vdGlmaWNhdGlvbnMoY291cnNlLmlkKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0sIFtjb3Vyc2VdKVxuXG4gICAgcmV0dXJuIG5vdGlmaWNhdGlvbnMgPiAwICYmIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLWljb25cIj57bm90aWZpY2F0aW9uc308L2Rpdj5cbn0pO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IExhbmd1YWdlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe2ludGw6IG51bGx9KTsiLCJpbXBvcnQge0ludGxQcm92aWRlciwgYWRkTG9jYWxlRGF0YX0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgbG9jYWxlX2VuIGZyb20gJ3JlYWN0LWludGwvbG9jYWxlLWRhdGEvZW4nO1xuaW1wb3J0IGxvY2FsZV9zdiBmcm9tICdyZWFjdC1pbnRsL2xvY2FsZS1kYXRhL3N2JztcbmltcG9ydCBtZXNzYWdlc19zdiBmcm9tIFwiLi4vLi4vdHJhbnNsYXRpb25zL3N2Lmpzb25cIjtcbmltcG9ydCBtZXNzYWdlc19lbiBmcm9tIFwiLi4vLi4vdHJhbnNsYXRpb25zL2VuLmpzb25cIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjZmcgZnJvbSAnLi4vLi4vZ2xvYmFscy9LRUQuY2ZnJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGNvbnN0IHNldHVwSW50bCA9IDxQIGV4dGVuZHMgb2JqZWN0PihDb21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8UD4pID0+XG4gICAgY2xhc3MgX1NldHVwTGFuZ3VhZ2VJbnRsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFA+e1xuICAgICAgICBtZXNzYWdlcyA6IG9iamVjdDtcblxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgICAgICBhZGRMb2NhbGVEYXRhKFsuLi5sb2NhbGVfZW4sLi4ubG9jYWxlX3N2XSk7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgJ3N2JzogbWVzc2FnZXNfc3YsXG4gICAgICAgICAgICAnZW4nOiBtZXNzYWdlc19lblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1vbWVudCgpLmxvY2FsZShjZmcuS0VEX0xPQ0FMRSk7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKXtcbiAgICAgICAgICAgIHJldHVybiA8SW50bFByb3ZpZGVyIGxvY2FsZT17Y2ZnLktFRF9MT0NBTEV9IG1lc3NhZ2VzPXt0aGlzLm1lc3NhZ2VzW2NmZy5LRURfTE9DQUxFXX0+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4udGhpcy5wcm9wcyBhcyBQfSAvPlxuICAgICAgICAgICAgPC9JbnRsUHJvdmlkZXI+XG4gICAgICAgIH1cbiAgICB9IiwiaW1wb3J0IHsgRmliZXIsIEZpYmVyQ29udGV4dCwgU3Vic2NyaXB0aW9uIH0gZnJvbSBcImtlZGJhY2tlbmQvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuXG5jb25zdCBGaWJlckNvbnRleHRSZWFjdCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8RmliZXIgfCBudWxsPihudWxsKTtcblxuRmliZXJDb250ZXh0LmFkZFByb3ZpZGVyKCgpPT5cbiAgLy8gSGVyZSB3ZSBhY3R1YWxsIGRvIHVzZUhvb2soRmliZXJDb250ZXh0KSBidXQgd2l0aG91dCBsb2dnaW5nIHRvIGludGVybmFsIGRlYnVnIGxvZ3NcbiAgLy8gTm9ybWFsbHksIHJlYWN0IGhvb2tzIGFyZSBzZW5zaXRpdmUgaW4gd2hpY2ggb3JkZXIgdGhleSBhcmUgY2FsbGVkICh1c2VTdGF0ZSgpLCBldGMpXG4gIC8vIGJ1dCB1c2VDb250ZXh0KCkgaXMgbm90IHNlbnNpdGl2ZSBhYm91dCB0aGF0IGF0IGFsbC5cbiAgLy8gU3RpbGwsIHRoZSBkZWJ1ZyB2ZXJzaW9uIG9mIHJlYWN0IHdpbGwgbG9nIGNhbGxzIHRvIHVzZUhvb2soKSBhbmQgdGhyb3cgaWYgYSByZW5kZXJcbiAgLy8gZG9lc24ndCB1c2UgdGhlIHNhbWUgbnVtYmVyIG9mIGhvb2tzIGV2ZXJ5IHRpbWUuIFRoaXMgY2hlY2sgc2hvdWxkIG5vdCBhcHBseVxuICAvLyB0byB1c2VIb29rKCkgc2luY2UgaXQgaXMgbm90IHNlbnNpdGl2ZSB0byB0aGUgb3JkZXIgaW4gd2hpY2ggaXQgd2FzIGNhbGxlZC5cbiAgLy8gQW5kIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBjYWxsIGl0IGZyb20gd2l0aGluIGNvbnRpdGlvbmFsIGV4cHJlc3Npb25zIC8gc3RhdGVtZW50cyxcbiAgLy8gc28gd2UgbXVzdCBieXBhc3MgdGhpcyBkZWJ1ZyBsb2dnaW5nIGhlcmUgYnkgYWNjZXNzaW5nIHRoZSBfY3VycmVudFZhbHVlIGRpcmVjdGx5LlxuICAoRmliZXJDb250ZXh0UmVhY3QgYXMgYW55KS5fY3VycmVudFZhbHVlKTsgXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGZhbGxiYWNrPzogTm9uTnVsbGFibGU8UmVhY3ROb2RlPnxudWxsO1xuICBlcnJvckZhbGxiYWNrPzogTm9uTnVsbGFibGU8UmVhY3ROb2RlPnxudWxsO1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGNsYXNzIE9ic2VydmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIHtjb3VudGVyOiBudW1iZXIsIGVycm9yOiBudWxsIHwgRXJyb3IsIGluZm8/OiBzdHJpbmd9PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY291bnRlcjogMCxcbiAgICAgIGVycm9yOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBhbnksIGluZm86IGFueSkge1xuICAgIGlmICghZXJyb3IgfHwgIWVycm9yLm5hbWUpIGVycm9yID0gbmV3IEVycm9yKCcnK2Vycm9yKTtcbiAgICB0aGlzLnNldFN0YXRlKHtlcnJvciwgaW5mb30pO1xuICAgIGNvbnNvbGUubG9nKGVycm9yLCBpbmZvKTtcbiAgfVxuXG4gIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgb3V0ZXJTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IHtcbiAgICB1bnN1YnNjcmliZTogKCk9PiB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICB9XG4gIH1cblxuICBvYnNlcnZlciA9ICh2YWx1ZTogYW55LCBlcnJvcjogYW55LCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3J9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoe2NvdW50ZXJ9KSA9PiAoe2NvdW50ZXI6IGNvdW50ZXIgKyAxLCBlcnJvcn0pKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5vdXRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmVycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5lcnJvckZhbGxiYWNrIHx8IDxwPntMYEt1bmRlIGludGUgbGFkZGEgaW5uZWjDpWxsZXRgfTwvcD47XG4gICAgfVxuICAgIHRoaXMub3V0ZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gPFN1c3BlbnNlIGZhbGxiYWNrPXt0aGlzLnByb3BzLmZhbGxiYWNrIHx8IG51bGx9PlxuICAgICAgPEZpYmVyQ29udGV4dFJlYWN0LlByb3ZpZGVyIHZhbHVlPXt0aGlzfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L0ZpYmVyQ29udGV4dFJlYWN0LlByb3ZpZGVyPlxuICAgIDwvU3VzcGVuc2U+O1xuICB9XG59XG4iLCIvKiBSRUZBQ1RPUjogTW92ZSB0aGlzIGNvbXBvbmVudCBvdXRzaWRlIGNvdXJzZWJ1aWxkZXIhXG4gICBUaGlzIGlzIGEgZ2VuZXJhbC1wdXJwb3NlIGNvbXBvbmVudFxuKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR29hbFByb2dyZXNzIH0gZnJvbSAnLi4vY2hhcnRzL2dvYWwtcHJvZ3Jlc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgaGVhZGVyQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBjb250ZW50Q2xhc3NOYW1lPzogc3RyaW5nO1xuICBoZWFkZXJPcGVuPzogYm9vbGVhbjtcbiAgaW5hY3RpdmF0ZWQ/OiBib29sZWFuO1xuICBpbmFjdGl2YXRlZFJlbmRlcj86ICdjaGlsZHJlbicgfCAndGl0bGVBbmRDaGlsZHJlbic7XG4gIG9uT3BlbkNsb3NlPzogKGJlY2FtZU9wZW46IGJvb2xlYW4pID0+IHZvaWQ7XG4gIGRpc3BsYXlQcm9ncmVzcz86IGJvb2xlYW47XG4gIHByb2dyZXNzRGF0YT86IHtjb21wbGV0ZWROdW1iZXJPZlRhc2tzOiBudW1iZXIsIG51bWJlck9mVGFza3M6IG51bWJlcn07XG4gIGNoaWxkcmVuO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBoZWFkZXJPcGVuOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgT3BlbkNsb3NlQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGVhZGVyT3BlbjogcHJvcHMuaGVhZGVyT3BlbiB8fCBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXh0UHJvcHM6IFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5oZWFkZXJPcGVuICE9PSB0aGlzLnByb3BzLmhlYWRlck9wZW4pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2hlYWRlck9wZW46IG5leHRQcm9wcy5oZWFkZXJPcGVufSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIGhlYWRlckNsYXNzTmFtZSwgY29udGVudENsYXNzTmFtZSwgZGlzcGxheVByb2dyZXNzLCBwcm9ncmVzc0RhdGEsXG4gICAgICBpbmFjdGl2YXRlZCwgaW5hY3RpdmF0ZWRSZW5kZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBoZWFkZXJPcGVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGluYWN0aXZhdGVkKSByZXR1cm4gaW5hY3RpdmF0ZWRSZW5kZXIgPT09ICd0aXRsZUFuZENoaWxkcmVuJyA/IDw+XG4gICAgICA8Pnt0aXRsZX08Lz5cbiAgICAgIDw+e2NoaWxkcmVufTwvPlxuICAgIDwvPiA6IDw+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC8+O1xuXG4gICAgLy92YXIgY3VycmVudFByb2dyZXNzRGF0YSA9IC8vcHJvZ3Jlc3NEYXRhKCk7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsoY2xhc3NOYW1lfHwnJykgKyBcIiBvcGVuQ2xvc2VcIiArIChoZWFkZXJPcGVuID8gXCIgb3BlblwiIDogXCJcIil9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wib3BlbkhlYWRlclwiICsgKGhlYWRlckNsYXNzTmFtZSA/IFwiIFwiICsgaGVhZGVyQ2xhc3NOYW1lIDogXCJcIil9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbk9wZW5DbG9zZSkgdGhpcy5wcm9wcy5vbk9wZW5DbG9zZSghdGhpcy5zdGF0ZS5oZWFkZXJPcGVuKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGVhZGVyT3BlbjogIXRoaXMuc3RhdGUuaGVhZGVyT3BlbiB9KTtcbiAgICAgICAgfX0gPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wZW5IZWFkZXJDb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICB7ZGlzcGxheVByb2dyZXNzICYmIDxHb2FsUHJvZ3Jlc3Mgey4uLnByb2dyZXNzRGF0YX0vPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm9wZW5Db250ZW50XCIgKyAoY29udGVudENsYXNzTmFtZSA/IFwiIFwiICsgY29udGVudENsYXNzTmFtZSA6IFwiXCIpfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+O1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbmplY3RlZEludGxQcm9wcywgaW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHsgc2V0dXBJbnRsIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91dGlsaXR5LWNvbXBvbmVudHMvU2V0dXBMYW5ndWFnZUludGwnO1xuaW1wb3J0IGVudiBmcm9tICcuLi8uLi9nbG9iYWxzL0tFRC5lbnYnO1xuaW1wb3J0IHsgc2hvd0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91dGlsaXR5LWNvbXBvbmVudHMvTGFuZ3VhZ2VDb250ZXh0JztcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvdXJzZS1idWlsZGVyL3N1Yi1jb21wb25lbnRzL3NwaW5uZXInO1xuaW1wb3J0IHsgVGVhY2hlclZpZXdBcHAgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RlYWNoZXItdmlldyc7XG5pbXBvcnQgeyBjZmcgfSBmcm9tICcuLi8uLi9nbG9iYWxzL0tFRC5jZmcnO1xuY29uc3QgYmVhcmVyUHJvbWlzZSA9IGVudi5iZWFyZXJQcm92aWRlci5nZXRCZWFyZXIoKTsgLy8gU3RhcnQgZ2V0dGluZyBiZWFyZXIgYXMgc29vbiBhcyBwb3NzaWJsZS5cblxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJbmplY3RlZEludGxQcm9wc3tcbn1cbiAgXG4gIGludGVyZmFjZSBTdGF0ZSB7XG4gICAgaXNUb2tlbkxvYWRlZDogYm9vbGVhbjtcbiAgfVxuICBcblxuY2xhc3MgX0tFREFwcFRlYWNoZXJWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLFN0YXRlPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGJlYXJlclByb21pc2UudGhlbigoKT0+e1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzVG9rZW5Mb2FkZWQ6IHRydWV9KTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBzaG93RXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2ludGx9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNUb2tlbkxvYWRlZCA/XG4gICAgICAgICAgPExhbmd1YWdlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBpbnRsIH19PlxuICAgICAgICAgICAgPFRlYWNoZXJWaWV3QXBwIGNvdXJzZUJ1aWxkZXJVcmw9e2NmZy5LRURfQ09VUlNFX0JVSUxERVJfVVJMfS8+XG4gICAgICAgICAgPC9MYW5ndWFnZUNvbnRleHQuUHJvdmlkZXI+IDpcbiAgICAgICAgICA8cD48U3Bpbm5lciAvPlYuZy4gdsOkbnRhLi4uIGF1dGVudGljZXJhci4uLjwvcD5cbiAgICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEtFREFwcFRlYWNoZXJWaWV3ID0gc2V0dXBJbnRsKGluamVjdEludGwoX0tFREFwcFRlYWNoZXJWaWV3KSk7IiwiaW1wb3J0IEtFRCBmcm9tICcuLi8uLi9nbG9iYWxzL0tFRCc7XG5pbXBvcnQge0tFREFwcFRlYWNoZXJWaWV3fSBmcm9tICcuL2FwcC50ZWFjaGVydmlldy5jbGllbnQnO1xuXG4vLyBBZGQgS0VEQXBwVGVhY2hlclZpZXcgdG8gdGhlIHNldCBvZiBjb21wb25lbnRzIGluIEtFRC5jb21wb25lbnRzXG5LRUQuY29tcG9uZW50cyA9IHsuLi5LRUQuY29tcG9uZW50cywgS0VEQXBwVGVhY2hlclZpZXd9O1xuIiwiaW1wb3J0IEtFRCBmcm9tICcuL0tFRCc7XG5cbi8qIFRoaXMgZGVmYXVsdCBjb25maWd1cmF0aW9uIGlzIHVzZWQgYXMgYSBmYWxsYmFjay5cbk5vcm1hbGx5IGJvdGggdGVzdCBwYWdlcyBhbmQgcHJvZHVjdGlvbiBwYWdlcyB3aWxsIG92ZXJyaWRlIHRoZXNlIGNvbmZpZ3JhdGlvbnNcbiovXG4vKmNvbnN0IGRlZmF1bHRDb25maWd1cmF0aW9uID0ge1xuICAvLyBFbnZpcm9ubWVudFxuICBFTlZJUk9OTUVOVDogJ2RldmVsb3BtZW50JyBhcyAncHJvZHVjdGlvbicgfCAnZGV2ZWxvcG1lbnQnIHwgJ3Rlc3QnLFxuICAvLyBBdXRoZW50aWNhdGlvbiBTZXJ2ZXI6XG4gIEtFRF9UT0tFTl9VUkw6ICdodHRwczovL2tlZGF1dGh0ZXN0LmF6dXJld2Vic2l0ZXMubmV0L3Rva2VuJyxcbiAgS0VEX1RPS0VOX1BBVEg6ICcvYXBpL3Rva2VuLlNrcmlwdC5wb3J0bGV0P3N2LmNvbnRlbnR0eXBlPWFwcGxpY2F0aW9uL2pzb24nLFxuICBLRURfQ0xJRU5UX0lEOiAnZGV2Y2xpZW50JyxcbiAgS0VEX0NMSUVOVF9TRUNSRVQ6ICc0ZlJkZlFwV3RKcWpUV2YnLFxuICAvLyBTZXJ2aWNlczpcbiAgS0VEX0FQSV9VUkw6ICdodHRwczovL2tlZGJhY2tlbmR0ZXN0LmF6dXJld2Vic2l0ZXMubmV0L2FwaS8nLCAgXG4gIEVEU19BUElfVVJMOiAnaHR0cHM6Ly9lZHNwb3J0YWxvd2luYXBpLmF6dXJld2Vic2l0ZXMubmV0L2FwaS8nXG59Ki9cblxuZXhwb3J0IGludGVyZmFjZSBJS2VkQ29uZmlndXJhdGlvbiB7XG4gIEVOVklST05NRU5UOiAncHJvZHVjdGlvbicgfCAnZGV2ZWxvcG1lbnQnIHwgJ3Rlc3QnO1xuICBLRURfUkVBTE06IHN0cmluZztcbiAgS0VEX1RPS0VOX1VSTDogc3RyaW5nO1xuICBLRURfVE9LRU5fUEFUSDogc3RyaW5nO1xuICBLRURfQ0xJRU5UX0lEOiBzdHJpbmc7XG4gIEtFRF9DTElFTlRfU0VDUkVUOiBzdHJpbmc7XG4gIEtFRF9BUElfVVJMOiBzdHJpbmc7XG4gIEVEU19BUElfVVJMOiBzdHJpbmc7XG4gIEtFRF9MT0NBTEU6IHN0cmluZztcbiAgS0VEX1NDSE9PTF9MT0NBTEU6IHN0cmluZztcbiAgS0VEX0NPVVJTRV9CVUlMREVSX1VSTDogc3RyaW5nO1xuICBLRURfQ09VUlNFX1ZJRVdFUl9VUkw6IHN0cmluZztcbiAgS0VEX1NVQkpFQ1RfUExBTk5FUl9BRE1JTl9VUkw6IHN0cmluZztcbiAgS0VEX1NVQkpFQ1RfUExBTk5FUl9VUkw6IHN0cmluZztcbiAgS0VEX0ZFQVRVUkVTOiBzdHJpbmc7XG4gIEtFRF9LRUVQX0FMSVZFX1VSTDogc3RyaW5nO1xuICBLRURfRU5VTV9XT1JEQkFOS1NfVVJMOiBzdHJpbmc7XG4gIEtFRF9XT1JEQkFOS1NfVVJMOiBzdHJpbmc7XG4gIEtFRF9SRVNPVVJDRVNfVVJMOiBzdHJpbmc7XG59O1xuXG5pZiAoIUtFRC5jZmcpIEtFRC5jZmcgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgS0VELmNmZyBhcyBJS2VkQ29uZmlndXJhdGlvbjtcbmV4cG9ydCBjb25zdCBjZmc6IElLZWRDb25maWd1cmF0aW9uID0gS0VELmNmZztcbiIsImltcG9ydCB7VXNlciwgTGVhcm5pbmdNb2R1bGVUYXNrc30gZnJvbSAnLi4vY29udHJhY3RzL2tlZC1tb2RlbHMnO1xuaW1wb3J0IHsgS2VkQmFja2VuZENsaWVudCwgQmVhcmVyUHJvdmlkZXIgfSBmcm9tICdrZWRiYWNrZW5kL2NsaWVudCc7XG5pbXBvcnQge1VzZXJUYXNrfSBmcm9tICdrZWRiYWNrZW5kL21vZGVscyc7XG5pbXBvcnQge0tlZFJlcG99IGZyb20gJy4uL3JlcG9zL2tlZC1yZXBvJztcbmltcG9ydCB7RWRzQ2xpZW50fSBmcm9tICcuLi9hcGlzL2Vkc2NsaWVudCc7XG5pbXBvcnQgS0VEIGZyb20gJy4va2VkJztcbmltcG9ydCB7IEtTVGVybVBsYW5uZXJSZXBvIH0gZnJvbSAnLi4vcmVwb3Mva3MtdGVybXBsYW5uZXItcmVwbyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW52IHtcbiAgICBjdXJyZW50VXNlcj86IFVzZXI7XG4gICAgbGVhcm5pbmdNb2R1bGVUYXNrcz86IExlYXJuaW5nTW9kdWxlVGFza3M7XG4gICAgYmVhcmVyUHJvdmlkZXI/OiBCZWFyZXJQcm92aWRlcjtcbiAgICBnb29nbGVUb2tlblByb3ZpZGVyPzogQmVhcmVyUHJvdmlkZXI7XG4gICAga2VkQmFja2VuZENsaWVudD86IEtlZEJhY2tlbmRDbGllbnQ7XG4gICAgZWRzQ2xpZW50PzogRWRzQ2xpZW50O1xuICAgIHVzZXJUYXNrc1JlcG8/O1xuICAgIGhpZGRlbkNvdXJzZXNSZXBvPztcbiAgICB3ZWVrTm90ZXNSZXBvPztcbiAgICBrZ1Rlcm1QbGFubmVyUmVwbz87XG4gICAga3NUZXJtUGxhbm5lclJlcG8/OiBLU1Rlcm1QbGFubmVyUmVwb1xuICAgIHR1dG9yZWQ6IGJvb2xlYW47XG4gICAgZXJyb3I/OiBFcnJvcjtcbn1cblxuaWYgKCFLRUQuZW52KSBLRUQuZW52ID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEtFRC5lbnYgYXMgRW52O1xuZXhwb3J0IGNvbnN0IGVudjogRW52ID0gS0VELmVudjtcbiIsIlxuZXhwb3J0IGNvbnN0IEtFRF9OQU1FU1BBQ0UgPSBcIktFRFwiO1xuXG5kZWNsYXJlIHZhciBLRUQ6IGFueTtcblxudmFyIHJlc3VsdCA9IHR5cGVvZiBLRUQgPT09ICd1bmRlZmluZWQnID8ge30gOiBLRUQ7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgS0VEID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvd1tLRURfTkFNRVNQQUNFXSA9IHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzdWx0O1xuIiwiaW1wb3J0IGVudiBmcm9tICcuL0tFRC5lbnYnO1xuaW1wb3J0IHsgS2VkQmFja2VuZFJlcG8gfSBmcm9tICdrZWRiYWNrZW5kL3JlcG8nO1xuaW1wb3J0IHsgZ2V0R2xvYmFsSWQsIGNyZWF0ZVVVSUQgfSBmcm9tICdrZWRiYWNrZW5kL2NsaWVudCc7XG5pbXBvcnQgY2ZnIGZyb20gJy4vS0VELmNmZyc7XG5pbXBvcnQgeyBTY2hvb2wsIEJyYW5jaCB9IGZyb20gJ2tlZGJhY2tlbmQvbW9kZWxzJztcbmltcG9ydCB7IFZhbHVlIH0gZnJvbSAna2VkYmFja2VuZC9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGNvbnN0IGRiID0gbmV3IEtlZEJhY2tlbmRSZXBvKFxuICAoKT0+ZW52LmtlZEJhY2tlbmRDbGllbnQsXG4gICgpPT5lbnYuY3VycmVudFVzZXIgP1xuICAgIGVudi5jdXJyZW50VXNlci5tYWlsIDpcbiAgICBcIlwiLFxuICAoKT0+ZW52LmN1cnJlbnRVc2VyID9cbiAgICBlbnYuY3VycmVudFVzZXIuZGlzcGxheU5hbWUgfHwgZW52LmN1cnJlbnRVc2VyLm1haWwgOlxuICAgIFwiXCIpO1xuXG5leHBvcnQgY29uc3QgZ2xvYmFsSWQgPSBnZXRHbG9iYWxJZChjZmcuS0VEX1JFQUxNKTtcbmV4cG9ydCBjb25zdCBTY2hvb2xzID0ge1xuICBzdGFuZGFyZFNjaG9vbDogZGIuc2Nob29scy5uYW1lKFwic3RhbmRhcmRcIikuY2FjaGVPcHRpbWl6ZWQoKS5zaW5nbGUoKSxcbiAgZ2V0IG15U2Nob29sICgpIHsgcmV0dXJuIGRiLnNjaG9vbHMubmFtZShlbnYuY3VycmVudFVzZXIuc2Nob29sKS5jYWNoZU9wdGltaXplZCgpLnNpbmdsZSgpOyB9XG59O1xuZXhwb3J0IGNvbnN0IENvdXJzZUluc3RhbmNlcyA9IHtcbiAgZ2V0QnJhbmNoSWQoc2Nob29sOiBWYWx1ZTxTY2hvb2w+LCBjb3Vyc2VJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHNjaG9vbC5zd2l0Y2hNYXAoc2Nob29sID0+XG4gICAgICBkYi5icmFuY2hlc1xuICAgICAgICAuaGFzRWRnZXNGcm9tKFtzY2hvb2wub2ZmaWNpYWxCcmFuY2hJZF0pXG4gICAgICAgIC5uYW1lKFwiZHJhZnRcIilcbiAgICAgICAgLnRhZ3MoY291cnNlSWQpXG4gICAgICAgIC5pZHNPbmx5KClcbiAgICAgICAgLm1hcCgoe2lkfSkgPT4gaWQpXG4gICAgICAgIC50b1ZhbHVlKClcbiAgICAgICAgLm1hcChpZHMgPT4gaWRzLmxlbmd0aCA+IDAgPyBpZHNbMF0gOiB1bmRlZmluZWQpKTtcbiAgfSxcblxuICAvKiogR2V0IGEgRFJBRlQgYnJhbmNoIGZvciBnaXZlbiBjb3Vyc2UgSUQgYW5kIGdpdmVuIHNjaG9vbC5cbiAgICogSWYgdGhlcmUgaXMgbm90IHlldCBzdWNoIGEgYnJhbmNoLCBjcmVhdGUgaXQgdXNpbmcgbXV0YXRpb25zT25FbXB0eSgpIHdoaWNoIHdpbGxcbiAgICogbGVhZCB0byB0aGUgQyMgY29kZSBEb2N1bWVudFJlcG9zaXRvcnkuUmVhZE9yTXV0YXRlKCkgdmlhIERvY3VtZW50Q29udHJvbGxlci5cbiAgICovXG4gIGdldE9yQ3JlYXRlQnJhbmNoSWQoc2Nob29sOiBWYWx1ZTxTY2hvb2w+LCBjb3Vyc2VJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGRiLmNvdXJzZUluc3RhbmNlcy5pZHNPbmx5KCkuaWQoY291cnNlSWQpLnN3aXRjaE1hcCgoKT0+IC8vIFRIaXMgZmlyc3QgbGluZSB2ZXJpZmllcyBjb3Vyc2UgZXhpc3RzLiBJZiBkZWxldGVkLCBkb24ndCB0cnkgdG8gcmVjcmVhdGUgaXRzIGJyYW5jaCFcbiAgICAgIHNjaG9vbC5zd2l0Y2hNYXAoc2Nob29sID0+IFxuICAgICAgZGIuYnJhbmNoZXNcbiAgICAgICAgLmhhc0VkZ2VzRnJvbShbc2Nob29sLm9mZmljaWFsQnJhbmNoSWRdKVxuICAgICAgICAubmFtZShcImRyYWZ0XCIpXG4gICAgICAgIC50YWdzKGNvdXJzZUlkKVxuICAgICAgICAuaWRzT25seSgpXG4gICAgICAgIC5tdXRhdGlvbnNPbkVtcHR5KHR4ID0+IHtcbiAgICAgICAgICAvLyBUaGVzZSAyIG11dGF0aW9ucyB3aWxsIG9jY3VyIHNlcnZlciBzaWRlLCBhdG9taWNhbGx5LlxuICAgICAgICAgIC8vIFdpbGwgYmUgc2VudCBvbiBlYWNoIHJlcXVlc3QgaW4gdGhlIHF1ZXJ5LCBidXQgd2lsbCBvbmx5IGV4ZWN1dGUgaWYgcXVlcnkgcmVzdWx0cyBpbiB6ZXJvIGl0ZW1zLlxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJTY2hvb2w6XCIsIHNjaG9vbCk7XG4gICAgICAgICAgY29uc3QgaWQgPSBjcmVhdGVVVUlEKCk7XG4gICAgICAgICAgdHguYWRkKFwiYnJhbmNoZXNcIiwge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBhY2w6IFtcbiAgICAgICAgICAgICAgXCJyb2xlOlVTRVI6UlwiLFxuICAgICAgICAgICAgICBgc2Nob29sUm9sZToke3NjaG9vbC5uYW1lfS9FTVBMT1lFRTpTYFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG5hbWU6ICdkcmFmdCcsXG4gICAgICAgICAgICBzY2hvb2xJZDogc2Nob29sLmlkLFxuICAgICAgICAgICAgdHJlZVBhcmVudElkOiBzY2hvb2wub2ZmaWNpYWxCcmFuY2hJZCxcbiAgICAgICAgICAgIHRhZ3M6IFtjb3Vyc2VJZF1cbiAgICAgICAgICB9IGFzIEJyYW5jaCk7XG4gICAgICAgICAgLy8gQXBwcm92aW5nIHRoZSBicmFuY2ggbWFrZXMgc3VyZSB0aGF0IGl0IHdhcyBjcmVhdGVkIGJ5IGFuIEVNUExPWUVFIG9uIGdpdmVuIHNjaG9vbC5cbiAgICAgICAgICB0eC5saW5rMihcImJyYW5jaGVzXCIsIHNjaG9vbC5vZmZpY2lhbEJyYW5jaElkLCBcImFwcHJvdmVkQ2hpbGRyZW5cIiwgaWQpO1xuICAgICAgICB9KVxuICAgICAgICAuc2luZ2xlKClcbiAgICAgICAgLm1hcCgoe2lkfSkgPT4gaWQpKSk7XG4gIH0sXG5cbiAgZ2V0QWxsRGVzY2VuZGFudElkcyhjb3Vyc2VJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGRiLmNvdXJzZUJsb2Nrcy50YWdzKGNvdXJzZUlkKS5pZHNPbmx5KCkuY29uY2F0KFxuICAgICAgZGIuY291cnNlQ29udGVudHMudGFncyhjb3Vyc2VJZCkuaWRzT25seSgpKS5jb25jYXQoXG4gICAgICBkYi5jb3Vyc2VUYWJzLnRhZ3MoY291cnNlSWQpLmlkc09ubHkoKSkuY29uY2F0KFxuICAgICAgZGIudGFza3MudGFncyhjb3Vyc2VJZCkuaWRzT25seSgpKVxuICAgICAgLm1hcCh4ID0+IHguaWQpO1xuICB9XG59XG4iLCJcbmV4cG9ydCBjb25zdCBLRURfTkFNRVNQQUNFID0gXCJLRURcIjtcblxuZGVjbGFyZSB2YXIgS0VEOiBhbnk7XG5cbnZhciByZXN1bHQgPSB0eXBlb2YgS0VEID09PSAndW5kZWZpbmVkJyA/IHt9IDogS0VEO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEtFRCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3dbS0VEX05BTUVTUEFDRV0gPSByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc3VsdDtcbiIsImV4cG9ydCBpbnRlcmZhY2UgUGFyc2VRdWVyeVN0cmluZ09wdGlvbnMge1xuICB0b0xvd2VyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmcobG9jYXRpb25TZWFyY2g6IHN0cmluZywgb3B0aW9ucz86IFBhcnNlUXVlcnlTdHJpbmdPcHRpb25zKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gIGNvbnN0IHt0b0xvd2VyfSA9IChvcHRpb25zIHx8wqB7fSkgYXMgUGFyc2VRdWVyeVN0cmluZ09wdGlvbnM7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBpZiAobG9jYXRpb25TZWFyY2ggJiYgbG9jYXRpb25TZWFyY2gubGVuZ3RoID4gMSlcbiAgICBsb2NhdGlvblNlYXJjaC5zdWJzdHIoMSlcbiAgICAgIC5zcGxpdCgnJicpXG4gICAgICAubWFwKHBhcnQgPT4gcGFydC5zcGxpdCgnPScpLm1hcChzID0+IGRlY29kZVVSSUNvbXBvbmVudChzLnRyaW0oKSkpKVxuICAgICAgLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4gcmVzdWx0W3RvTG93ZXIgPyBrZXkudG9Mb3dlckNhc2UoKSA6IGtleV0gPSB2YWx1ZSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGVuY29kZVBhcmFtcyhwYXJhbXM6IHtba2V5OiBzdHJpbmddOnN0cmluZ30pIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHBhcmFtcykuZmlsdGVyKGtleSA9PiBwYXJhbXNba2V5XSAhPT0gdW5kZWZpbmVkKS5tYXAoa2V5ID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSl9YCkuam9pbignJicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVRdWVyeVN0cmluZyhwYXJhbXM6IHtba2V5OiBzdHJpbmddOnN0cmluZ30pIHtcbiAgcmV0dXJuIFwiP1wiICsgZW5jb2RlUGFyYW1zKHBhcmFtcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUhhc2hRdWVyeVN0cmluZyhsb2NhdGlvbkhhc2g6IHN0cmluZywgb3B0aW9ucz86IFBhcnNlUXVlcnlTdHJpbmdPcHRpb25zKSB7XG4gIHJldHVybiBwYXJzZVF1ZXJ5U3RyaW5nKGxvY2F0aW9uSGFzaCwgb3B0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUhhc2hRdWVyeVN0cmluZyhwYXJhbXM6IHtba2V5OiBzdHJpbmddOnN0cmluZ30pIHtcbiAgcmV0dXJuIFwiI1wiICsgZW5jb2RlUGFyYW1zKHBhcmFtcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdFVybEFuZFF1ZXJ5ICh1cmxXaXRoUG9zc2libGVRdWVyeTogc3RyaW5nKSB7XG4gIGNvbnN0IHBRdWVyeSA9IHVybFdpdGhQb3NzaWJsZVF1ZXJ5LmluZGV4T2YoJz8nKTtcbiAgcmV0dXJuIHBRdWVyeSA+PSAwID9cbiAgICBbdXJsV2l0aFBvc3NpYmxlUXVlcnkuc3Vic3RyKDAsIHBRdWVyeSksIHVybFdpdGhQb3NzaWJsZVF1ZXJ5LnN1YnN0cihwUXVlcnkpXSA6XG4gICAgW3VybFdpdGhQb3NzaWJsZVF1ZXJ5LCBcIlwiXTtcbn1cbiIsIlxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdCAoc3RyKSB7XG4gICAgZm9yIChsZXQgaT0wLCBsPXN0ci5sZW5ndGg7IGk8bDsgKytpKSB7XG4gICAgICAgIGlmIChzdHIuY2hhckNvZGVBdChpKSA8IDB4MjAwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgaSkgKyBzdHJbaV0udG9Mb2NhbGVVcHBlckNhc2UoKSArIHN0ci5zdWJzdHIoaSArIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQob2JqLCBleHRlbnNpb24pIHtcbiAgICBpZiAodHlwZW9mIGV4dGVuc2lvbiAhPT0gJ29iamVjdCcpIHJldHVybiBvYmo7XG4gICAgT2JqZWN0LmtleXMoZXh0ZW5zaW9uKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIG9ialtrZXldID0gZXh0ZW5zaW9uW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lPFQsRT4gKG9iaiA6IFQsIGV4dGVuc2lvbj86IEUpIHtcbiAgICBsZXQgY2xvbmUgPSB7fTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsb25lLCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpKTtcbiAgICB9KTtcbiAgICBpZiAoZXh0ZW5zaW9uKSBleHRlbmQoY2xvbmUsIGV4dGVuc2lvbik7XG4gICAgcmV0dXJuIGNsb25lIGFzIChUICYgRSk7XG59XG5cbmNvbnN0IGNvbmNhdCA9IFtdLmNvbmNhdDtcbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuPFQ+IChhIDogKFQgfCBUW10pW10pIHtcbiAgICByZXR1cm4gY29uY2F0LmFwcGx5KFtdLCBhKSBhcyBUW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlUHJvcDxUPihwcm9wOmtleW9mIFQpIHtcbiAgICByZXR1cm4gKGE6IFQsYjogVCkgPT4ge1xuICAgICAgICBjb25zdCBhUHJvcCA9IGFbcHJvcF0sIGJQcm9wID0gYltwcm9wXTtcbiAgICAgICAgcmV0dXJuIGFQcm9wID4gYlByb3AgPyAxIDogYVByb3AgPCBiUHJvcCA/IC0xIDogMDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlUHJvcHMoXG4gICAgcHJvcHM6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIGxvY2FsZXM/OiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICBvcHRpb25zPzogSW50bC5Db2xsYXRvck9wdGlvbnMpOiAoYTogYW55LCBiOiBhbnkpID0+IG51bWJlclxue1xuICAgIHByb3BzID0gQXJyYXkuaXNBcnJheShwcm9wcykgPyBwcm9wcyA6IFtwcm9wc107XG5cbiAgICBjb25zdCBsb2NhbGVDb21wYXJlID0gKGEsYikgPT5cbiAgICAgICAgdHlwZW9mIGEgPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgIGEubG9jYWxlQ29tcGFyZShiLCBsb2NhbGVzLCBvcHRpb25zKSA6XG4gICAgICAgICAgICBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMDtcblxuICAgIGZ1bmN0aW9uIGNtcFBhcnQgKGEsYixmaXJzdFBhcnQ6IHN0cmluZyxyZXN0OiBzdHJpbmdbXSkge1xuICAgICAgICBjb25zdCBmaXJzdEEgPSBhW2ZpcnN0UGFydF07XG4gICAgICAgIGNvbnN0IGZpcnN0QiA9IGJbZmlyc3RQYXJ0XTtcbiAgICAgICAgaWYgKGZpcnN0QSA9PT0gZmlyc3RCKSByZXR1cm4gMDtcbiAgICAgICAgaWYgKGZpcnN0QSA9PSBudWxsKSByZXR1cm4gLTE7XG4gICAgICAgIGlmIChmaXJzdEIgPT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgICAgIHJldHVybiByZXN0Lmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICAgICBsb2NhbGVDb21wYXJlKGZpcnN0QSwgZmlyc3RCKSA6XG4gICAgICAgICAgICBjbXBQYXJ0KGZpcnN0QSwgZmlyc3RCLCByZXN0WzBdLCByZXN0LnNsaWNlKDEpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHNcbiAgICAgICAgLm1hcChwcm9wID0+IHByb3Auc3BsaXQoJy4nKSlcbiAgICAgICAgLm1hcCgoW2ZpcnN0UGFydCwgLi4ucmVzdF0pID0+IChhLGIpID0+IGNtcFBhcnQoYSxiLCBmaXJzdFBhcnQsIHJlc3QpKVxuICAgICAgICAucmVkdWNlKChjbXAxLCBjbXAyKSA9PlxuICAgICAgICAgICAgKGEsYikgPT4gY21wMShhLGIpIHx8IGNtcDIoYSxiKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMKHRleHQsIC4uLmFyZ3MpIHtcbiAgICBsZXQgZmlyc3QgPSB0ZXh0WzBdO1xuICAgIHJldHVybiBidWlsZE1lc3NhZ2UodGV4dCwgYXJncyk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWVzc2FnZSAodGV4dCwgYXJncykge1xuICAgIGxldCBydiA9IHRleHRbMF07XG4gICAgZm9yIChsZXQgaT0xLCBsPXRleHQubGVuZ3RoOyBpPGw7ICsraSkge1xuICAgICAgICBydiArPSBhcmdzW2ktMV0gKyB0ZXh0W2ldO1xuICAgIH1cbiAgICByZXR1cm4gcnY7XG59XG5cbmV4cG9ydCBjbGFzcyBUQzxUPiB7XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGU6IFQpIHtcbiAgICAgICAgZXh0ZW5kKHRoaXMsIHRlbXBsYXRlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRlVGltZVJldml2ZXIgKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgYTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBhID0gL1xcL0RhdGVcXCgoXFxkKilcXClcXC8vLmV4ZWModmFsdWUpO1xuICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCthWzFdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbi8vbGV0IGluZm9TZXJpYWwgPSAxO1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dJbmZvIChtc2cpIHtcbiAgICB2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2luZm8nLCB7ICdkZXRhaWwnOiBtc2cgfSk7XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Vycm9yIChlcnJNc2c6IHN0cmluZyB8IEVycm9yKSB7XG4gICAgY29uc3QgbXNnID0gdHlwZW9mIGVyck1zZyA9PT0gJ3N0cmluZycgPyBlcnJNc2cgOiBlcnJNc2cubWVzc2FnZTtcbiAgICB2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2N1c3RvbWVycm9yJywgeyAnZGV0YWlsJzogbXNnIH0pO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhMZW5ndGgoc3RyOiBzdHJpbmcsIG1heExlbjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHN0ci5sZW5ndGggPiBtYXhMZW4gP1xuICAgICAgICBzdHIuc3Vic3RyKDAsIG1heExlbiAtIDMpICsgXCIuLi5cIiA6XG4gICAgICAgIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5VG9Mb29rdXA8VD4oYTogVFtdLCBrZXlBY2Nlc3NvcjogKGl0ZW06IFQpID0+IHN0cmluZyB8IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3VsdCA6IHtba2V5OiBzdHJpbmddIDogVFtdfSA9IHt9O1xuICAgIGZvciAobGV0IGk9MCwgbD1hLmxlbmd0aDsgaTxsOyArK2kpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGFbaV07XG4gICAgICAgIGNvbnN0IGtleSA9IGtleUFjY2Vzc29yKGl0ZW0pO1xuICAgICAgICBsZXQgYXJyYXkgPSByZXN1bHRba2V5XTtcbiAgICAgICAgaWYgKGFycmF5KSBhcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICBlbHNlIHJlc3VsdFtrZXldID0gW2l0ZW1dO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlUb01hcDxUPihhOiBUW10sIGtleUFjY2Vzc29yOiAoaXRlbTogVCkgPT4gc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgY29uc3QgcmVzdWx0IDoge1trZXk6IHN0cmluZ10gOiBUfSA9IHt9O1xuICAgIGZvciAobGV0IGk9MCwgbD1hLmxlbmd0aDsgaTxsOyArK2kpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGFbaV07XG4gICAgICAgIGNvbnN0IGtleSA9IGtleUFjY2Vzc29yKGl0ZW0pO1xuICAgICAgICByZXN1bHRba2V5XSA9IGl0ZW07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVycnlQaWNrUHJvcHM8VD4gKG9iajogVCwgcHJvcHNUb1BpY2s6IHN0cmluZ1tdKTogUGFydGlhbDxUPiB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBwYXJhbSBvZiBwcm9wc1RvUGljaykge1xuICAgICAgaWYgKHBhcmFtIGluIG9iaikgcmVzdWx0W3BhcmFtXSA9IG9ialtwYXJhbV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQgYXMgUGFydGlhbDxUPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RpbmN0PFQ+IChhOiBUW10sIGtleUFjY2Vzc29yPzogKGl0ZW06IFQpID0+IGFueSkge1xuICAgIGNvbnN0IG1hcCA9IGFycmF5VG9NYXAoYSwga2V5QWNjZXNzb3IgfHwgKHggPT4geCkpO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhtYXApLm1hcChrZXkgPT4gbWFwW2tleV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hhbGxvd0VxdWFscyhhOiBhbnksIGI6IGFueSkge1xuICAgIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoIWEgfHwgIWIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodHlwZW9mIGEgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBiICE9PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMoYSk7XG4gICAgY29uc3Qga2V5c0IgPSBPYmplY3Qua2V5cyhiKTtcbiAgICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGxldCBpPTAsIGw9a2V5c0EubGVuZ3RoOyBpPGw7ICsraSkge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzQVtpXTtcbiAgICAgICAgaWYgKGtleXNCW2ldICE9PSBrZXkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyJdLCJzb3VyY2VSb290IjoiIn0=