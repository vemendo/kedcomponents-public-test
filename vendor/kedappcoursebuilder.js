var kedappcoursebuilder =
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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/ 		"kedappcoursebuilder": 0
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
/******/ 	deferredModules.push(["./src/elements/KEDAppCourseBuilder/webpack-entry.ts","vendors"]);
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

module.exports = JSON.parse("{\"accessClaimDefinitions\":{\"email\":\"{http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress}\",\"role\":\"{http://schemas.microsoft.com/ws/2008/06/identity/claims/role}\",\"school\":\"{school}\",\"schoolRole\":\"{school}/{http://schemas.microsoft.com/ws/2008/06/identity/claims/role}\",\"tutorFor\":\"{tutorFor}\"},\"realmClaim\":\"realm\",\"specialRoles\":{\"userRole\":\"USER\",\"adminRole\":\"ADMIN\"},\"defaultAccessClaimTypes\":[\"role\"],\"defaultAcl\":[\"role:USER:R\"],\"tables\":{\"branches\":{\"accessClaimTypes\":[\"role\",\"schoolRole\",\"email\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"*\"],\"schoolRole\":[\"*\"],\"role\":[\"*\"]}},\"relationships\":{\"parents\":\"branches\",\"approvedChildren\":\"branches\"},\"isPublic\":true},\"global\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"relationships\":{\"courseInstances\":\"courseInstances\"},\"isPublic\":true},\"courseInstances\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"USER\":{\"schoolRole\":[\"*\"],\"role\":[\"*\"]}},\"defaultAcl\":[\"role:USER:R\",\"schoolRole:{school}/EMPLOYEE:S\"],\"relationships\":{\"abilities\":\"abilities\",\"centralContent\":\"central-content\",\"knowledgeRequirements\":\"knowledge-requirements\",\"blocks\":\"courseBlocks\",\"tabs\":\"courseTabs\"},\"isPublic\":true},\"courseBlocks\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"USER\":{\"schoolRole\":[\"*\"],\"role\":[\"*\"]}},\"defaultAcl\":[\"role:USER:R\",\"schoolRole:{school}/EMPLOYEE:S\"],\"relationships\":{\"abilities\":\"abilities\",\"centralContent\":\"central-content\",\"knowledgeRequirements\":\"knowledge-requirements\",\"tabs\":\"courseTabs\",\"tasks\":\"tasks\"},\"isPublic\":true},\"courseTabs\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"USER\":{\"schoolRole\":[\"*\"],\"role\":[\"*\"]}},\"defaultAcl\":[\"role:USER:R\",\"schoolRole:{school}/EMPLOYEE:S\"],\"relationships\":{\"abilities\":\"abilities\",\"centralContent\":\"central-content\",\"knowledgeRequirements\":\"knowledge-requirements\",\"contents\":\"courseContents\"},\"isPublic\":true},\"courseContents\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"USER\":{\"schoolRole\":[\"*\"],\"role\":[\"*\"]}},\"defaultAcl\":[\"role:USER:R\",\"schoolRole:{school}/EMPLOYEE:S\"],\"relationships\":{\"tasks\":\"tasks\"},\"isPublic\":true},\"weekplans\":{\"accessClaimTypes\":[\"email\",\"tutorFor\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\",\"{tutorFor}:*\"],\"tutorFor\":[\"{tutorFor}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"isPublic\":false},\"weekplans-ks\":{\"accessClaimTypes\":[\"email\",\"tutorFor\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\",\"{tutorFor}:*\"],\"tutorFor\":[\"{tutorFor}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"isPublic\":false},\"usertasks\":{\"accessClaimTypes\":[\"email\",\"schoolRole\",\"tutorFor\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\",\"{tutorFor}:*\"],\"schoolRole\":[\"{school}/EMPLOYEE:*\"],\"tutorFor\":[\"{tutorFor}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"relationships\":{\"task\":\"tasks\",\"course\":\"courses\"},\"isPublic\":false},\"userhiddencourses\":{\"accessClaimTypes\":[\"email\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"relationships\":{},\"isPublic\":false},\"usercalendarvisibility\":{\"accessClaimTypes\":[\"email\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"relationships\":{},\"isPublic\":false},\"subjects\":{\"relationships\":{\"courseTemplates\":\"courses\",\"abilities\":\"abilities\"},\"isPublic\":true},\"schools\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"relationships\":{\"courses\":\"courses\",\"activeCourses\":\"courses\"},\"isPublic\":true},\"courses\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"EMPLOYEE\":{\"schoolRole\":[\"{school}/EMPLOYEE:*\"],\"role\":[\"USER:R\"]}},\"defaultAcl\":[\"schoolRole:{school}/EMPLOYEE:*\"],\"relationships\":{\"templateChain\":\"courses\",\"centralContent\":\"central-content\",\"knowledgeRequirements\":\"knowledge-requirements\",\"abilities\":\"abilities\",\"images\":\"images\",\"tasks\":\"tasks\"},\"isPublic\":true},\"tasks\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"EMPLOYEE\":{\"schoolRole\":[\"{school}/EMPLOYEE:*\"],\"role\":[\"USER:R\"]}},\"defaultAcl\":[\"schoolRole:{school}/EMPLOYEE:S\",\"role:USER:R\"],\"relationships\":{\"knowledgeRequirements\":\"knowledge-requirements\",\"centralContent\":\"central-content\",\"abilities\":\"abilities\"},\"isPublic\":true},\"images\":{\"accessClaimTypes\":[\"role\",\"schoolRole\",\"email\"],\"sharingAccessPerRole\":{\"EMPLOYEE\":{\"schoolRole\":[\"{school}/EMPLOYEE:*\"],\"role\":[\"USER:R\"]},\"USER\":{\"email\":[\"{email}:*\"]}},\"isPublic\":true},\"central-content\":{\"accessClaimTypes\":[\"role\"],\"defaultAcl\":[\"role:USER:R\"]},\"knowledge-requirements\":{\"accessClaimTypes\":[\"role\"],\"defaultAcl\":[\"role:USER:R\"],\"isPublic\":true},\"abilities\":{\"accessClaimTypes\":[\"role\"],\"defaultAcl\":[\"role:USER:R\"],\"isPublic\":true},\"seenStudentAssignments\":{\"accessClaimTypes\":[\"email\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"relationships\":{},\"isPublic\":true},\"notes\":{\"accessClaimTypes\":[\"email\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"relationships\":{},\"isPublic\":false}}}");

/***/ }),

/***/ "./kedbackend/client.js":
/*!******************************!*\
  !*** ./kedbackend/client.js ***!
  \******************************/
/*! exports provided: KedBearerProvider, RestClient, HttpError, KedBackendClient, BatchRunner, createUUID, avoidSimultanousCalls, getGlobalId, computePredestinatedId, simpleDigest, simpleDigestSuspense, buf2hex, updateArray, DocumentAccess, hasAccess */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simpleDigestSuspense", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["simpleDigestSuspense"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buf2hex", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["buf2hex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateArray", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["updateArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentAccess", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["DocumentAccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAccess", function() { return _js_dist_js_ked_backend_client__WEBPACK_IMPORTED_MODULE_0__["hasAccess"]; });



/***/ }),

/***/ "./kedbackend/clientweb.js":
/*!*********************************!*\
  !*** ./kedbackend/clientweb.js ***!
  \*********************************/
/*! exports provided: storage, WebServerBearerProvider, isomorphic, KedBackendClientWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_dist_js_ked_backend_client_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dist/js/ked-backend-client-web */ "./kedbackend/js/dist/js/ked-backend-client-web/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return _js_dist_js_ked_backend_client_web__WEBPACK_IMPORTED_MODULE_0__["storage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebServerBearerProvider", function() { return _js_dist_js_ked_backend_client_web__WEBPACK_IMPORTED_MODULE_0__["WebServerBearerProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isomorphic", function() { return _js_dist_js_ked_backend_client_web__WEBPACK_IMPORTED_MODULE_0__["isomorphic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KedBackendClientWeb", function() { return _js_dist_js_ked_backend_client_web__WEBPACK_IMPORTED_MODULE_0__["KedBackendClientWeb"]; });



/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-client-web/bearer-storage-sessionstorage.js":
/*!***************************************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-client-web/bearer-storage-sessionstorage.js ***!
  \***************************************************************************************/
/*! exports provided: BearerStorageSessionStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BearerStorageSessionStorage", function() { return BearerStorageSessionStorage; });
var BearerStorageSessionStorage = /** @class */ (function () {
    function BearerStorageSessionStorage() {
    }
    BearerStorageSessionStorage.prototype.save = function (id, tokenInfo) {
        sessionStorage.setItem("bearer-" + id, JSON.stringify(tokenInfo));
    };
    BearerStorageSessionStorage.prototype.load = function (id) {
        try {
            var json = sessionStorage.getItem("bearer-" + id);
            return Promise.resolve(json ? JSON.parse(json) : { token: null, expires: 0 });
        }
        catch (ex) {
            return Promise.resolve({ token: null, expires: 0 });
        }
    };
    return BearerStorageSessionStorage;
}());

//# sourceMappingURL=bearer-storage-sessionstorage.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-client-web/hash-restorer.js":
/*!***********************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-client-web/hash-restorer.js ***!
  \***********************************************************************/
/*! exports provided: rememberHashLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rememberHashLocation", function() { return rememberHashLocation; });
var redirHash = sessionStorage.getItem("redir-hash");
if (redirHash)
    try {
        var _a = JSON.parse(redirHash), time = _a.time, hash = _a.hash;
        if (time && time > Date.now() - 60000) {
            sessionStorage.removeItem("redir-hash");
            location.hash = hash;
        }
    }
    catch (_) { }
function rememberHashLocation() {
    sessionStorage.setItem("redir-hash", JSON.stringify({ time: Date.now(), hash: location.hash }));
}
//# sourceMappingURL=hash-restorer.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-backend-client-web/index.js":
/*!***************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-backend-client-web/index.js ***!
  \***************************************************************/
/*! exports provided: storage, WebServerBearerProvider, isomorphic, KedBackendClientWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebServerBearerProvider", function() { return WebServerBearerProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isomorphic", function() { return isomorphic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KedBackendClientWeb", function() { return KedBackendClientWeb; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./kedbackend/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ked_backend_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ked-backend-client */ "./kedbackend/js/dist/js/ked-backend-client/index.js");
/* harmony import */ var _bearer_storage_sessionstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bearer-storage-sessionstorage */ "./kedbackend/js/dist/js/ked-backend-client-web/bearer-storage-sessionstorage.js");
/* harmony import */ var _ked_backend_client_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ked-backend-client/utils */ "./kedbackend/js/dist/js/ked-backend-client/utils.js");
/* harmony import */ var _ked_model_migrator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ked-model-migrator */ "./kedbackend/js/dist/js/ked-model-migrator/index.js");
/* harmony import */ var _hash_restorer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hash-restorer */ "./kedbackend/js/dist/js/ked-backend-client-web/hash-restorer.js");







Object(_ked_model_migrator__WEBPACK_IMPORTED_MODULE_4__["KedModelMigratorMixin"])(_ked_backend_client__WEBPACK_IMPORTED_MODULE_1__["KedBackendClient"].prototype);
var storage = new _bearer_storage_sessionstorage__WEBPACK_IMPORTED_MODULE_2__["BearerStorageSessionStorage"]();
var timeOfPageLoad = Date.now();
var WebServerBearerProvider = /** @class */ (function () {
    function WebServerBearerProvider(tokenPath, tokenResponseMapper, tokenId) {
        this.tokenPath = tokenPath;
        this.tokenResponseMapper = tokenResponseMapper;
        this.tokenId = tokenId;
        this.tokenInfo = { token: null, expires: 0 };
        this.getBearer = Object(_ked_backend_client_utils__WEBPACK_IMPORTED_MODULE_3__["avoidSimultanousCalls"])(this.getBearer.bind(this));
        this.refreshBearer = Object(_ked_backend_client_utils__WEBPACK_IMPORTED_MODULE_3__["avoidSimultanousCalls"])(this.refreshBearer.bind(this));
    }
    WebServerBearerProvider.prototype.getBearer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.tokenInfo.token) return [3 /*break*/, 2];
                        if (!this.tokenId) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, storage.load(this.tokenId)];
                    case 1:
                        _a.tokenInfo = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!(this.tokenInfo.expires < Date.now())) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.refreshBearer()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, this.tokenInfo];
                }
            });
        });
    };
    WebServerBearerProvider.prototype.refreshBearer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b, _c, _d;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, fetch(this.tokenPath, {
                            headers: { Accept: "text/plain; application/json" },
                            redirect: 'manual',
                            cache: 'no-cache',
                            credentials: "same-origin"
                        })];
                    case 1:
                        res = _e.sent();
                        if (res.status === 302 || (!res.status && res.type === "opaqueredirect")) {
                            // User session timed out and server wants to redirect entire page to login page
                            // Time to reload current page to force a redirect of the entire page instead for
                            // just redirecting to /api/token or whatever.
                            if (Date.now() - timeOfPageLoad > 60000) { // prohibit endless loop of reloading self.
                                this.wantsRedirect = true; // So that listeners to onbeforeunload could show alternate message.
                                console.log("Redirect wanted. Reload page.");
                                Object(_hash_restorer__WEBPACK_IMPORTED_MODULE_5__["rememberHashLocation"])();
                                window.location.reload(true);
                                throw new _ked_backend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"](302, "Redirected");
                            }
                        }
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = Error.bind;
                        _b = "HTTP" + res.status + " ";
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(Error, [void 0, _b + (_e.sent())]))();
                    case 3:
                        _c = this;
                        _d = this.tokenResponseMapper;
                        return [4 /*yield*/, res.text()];
                    case 4:
                        _c.tokenInfo = _d.apply(this, [_e.sent()]);
                        storage.save(this.tokenId, this.tokenInfo);
                        return [2 /*return*/, this.tokenInfo];
                }
            });
        });
    };
    return WebServerBearerProvider;
}());

var isomorphic = { fetch: fetch.bind(self), btoa: btoa.bind(self) };
var KedBackendClientWeb = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](KedBackendClientWeb, _super);
    function KedBackendClientWeb(apiBaseUrl, providerOrTokenPath, options) {
        var _this = this;
        var bearerProvider = typeof providerOrTokenPath !== 'string' ?
            providerOrTokenPath :
            new WebServerBearerProvider(providerOrTokenPath, (options && options.tokenResponseMapper) || (function (x) { return ({ token: x, expires: Date.now() + 59 * 60 * 60 }); }), options && options.tokenId);
        _this = _super.call(this, isomorphic, bearerProvider, apiBaseUrl) || this;
        return _this;
    }
    return KedBackendClientWeb;
}(_ked_backend_client__WEBPACK_IMPORTED_MODULE_1__["KedBackendClient"]));

//# sourceMappingURL=index.js.map

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
/*! exports provided: KedBearerProvider, RestClient, HttpError, KedBackendClient, BatchRunner, createUUID, avoidSimultanousCalls, getGlobalId, computePredestinatedId, simpleDigest, simpleDigestSuspense, buf2hex, updateArray, DocumentAccess, hasAccess */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simpleDigestSuspense", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["simpleDigestSuspense"]; });

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
                        if (typeof location !== 'undefined' && location.search.includes('useSP')) {
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
        this.cache = {}; //, timeout: number}};
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
    RestClient.prototype.suspenseFetch = function (path, method, headers, query, fetchOptions) {
        var _this = this;
        var key = method + " " + path + " " + JSON.stringify(headers) + " " + JSON.stringify(query) + " " + JSON.stringify(fetchOptions);
        var entry = this.cache[key];
        if (entry) {
            // Entry found. Is it still being fetched?
            if ('promise' in entry)
                throw entry.promise; // Still being fetched. Multiple parallell fetches should work on same promise!
            // Promise has resolved. Return result.
            return entry.result;
        }
        else {
            // We are the first to do this request. Start doing it:
            var promise = this.fetch(path, method, headers, query, fetchOptions).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var status, text;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            status = res.status;
                            return [4 /*yield*/, res.text()];
                        case 1:
                            text = _a.sent();
                            this.cache[key] = {
                                result: {
                                    status: status,
                                    text: function () { return text; },
                                    json: function () { return JSON.parse(text); }
                                }
                            };
                            return [2 /*return*/];
                    }
                });
            }); });
            // Immediately put the promise in the cache. Multiple parallell fetches should work on the same promise!
            this.cache[key] = { promise: promise };
            // Suspend until promise is resolved. At that time, the cache will contain an answer!
            throw promise;
        }
    };
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
    RestClient.prototype.suspenseGet = function (path, query, fetchOptions) {
        return this.suspenseFetch(path, "GET", { Accept: "application/json; text/plain" }, query, fetchOptions);
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
/*! exports provided: createUUID, avoidSimultanousCalls, getGlobalId, computePredestinatedId, simpleDigest, simpleDigestSuspense, buf2hex, updateArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUUID", function() { return createUUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avoidSimultanousCalls", function() { return avoidSimultanousCalls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalId", function() { return getGlobalId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computePredestinatedId", function() { return computePredestinatedId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleDigest", function() { return simpleDigest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleDigestSuspense", function() { return simpleDigestSuspense; });
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
var simpleDigestCache = {};
function simpleDigestSuspense(inputs) {
    var results = inputs.map(function (input) { return simpleDigestCache[input]; });
    var unresolvedInputs = [];
    results.forEach(function (result, index) {
        if (!result)
            unresolvedInputs.push(inputs[index]);
    });
    if (unresolvedInputs.length === 0)
        return results;
    throw Promise.all(unresolvedInputs.map(function (input) { return simpleDigest(input).then(function (result) { return simpleDigestCache[input] = result; }); }));
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

/***/ "./kedbackend/js/dist/js/ked-model-migrator/index.js":
/*!***********************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-model-migrator/index.js ***!
  \***********************************************************/
/*! exports provided: KedModelMigratorMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KedModelMigratorMixin", function() { return KedModelMigratorMixin; });
/* harmony import */ var _migrate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./migrate */ "./kedbackend/js/dist/js/ked-model-migrator/migrate.js");

var KedModelMigratorMixin = function (client) {
    if (client.__migrator_mixed_in)
        return;
    client.__migrator_mixed_in = true;
    var get = client.get;
    var list = client.list;
    client.get = function (table, id, options) {
        var include = options && options.include;
        return get.apply(this, arguments).then(function (result) {
            Object(_migrate__WEBPACK_IMPORTED_MODULE_0__["default"])(result, table, include && include.toString().split(','));
            return result;
        });
    };
    client.list = function (table, options) {
        var include = options && options.include;
        return list.apply(this, arguments).then(function (result) {
            result.forEach(function (doc) { return Object(_migrate__WEBPACK_IMPORTED_MODULE_0__["default"])(doc, table, include && include.toString().split(',')); });
            return result;
        });
    };
    return client;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-model-migrator/migrate-course.js":
/*!********************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-model-migrator/migrate-course.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return migrateCourse; });
/* harmony import */ var _migrate_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./migrate-task */ "./kedbackend/js/dist/js/ked-model-migrator/migrate-task.js");

function migrateCourse(course, graphs) {
    if (!course.modules)
        course.modules = [];
    course.modules.forEach(function (module) {
        if (!module.resources) {
            module.resources = [];
        }
        if (!module.taskIds) {
            module.taskIds = [];
        }
    });
    if (!course.responsibleTeachers) {
        course.responsibleTeachers = [];
    }
    // Earlier wrong spelling of resources
    if ('resourses' in course && !('resources' in course)) {
        course.resources = course.resourses;
        delete course.resourses;
    }
    if (!course.resources) {
        course.resources = [];
    }
    if (graphs) {
        graphs.forEach(function (label) {
            switch (label) {
                case 'tasks':
                    course.tasks.forEach(function (task) { return Object(_migrate_task__WEBPACK_IMPORTED_MODULE_0__["default"])(task); });
                    break;
            }
        });
    }
}
//# sourceMappingURL=migrate-course.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-model-migrator/migrate-task.js":
/*!******************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-model-migrator/migrate-task.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return migrateTask; });
function migrateTask(task) {
    if (!task.resources)
        task.resources = [];
}
//# sourceMappingURL=migrate-task.js.map

/***/ }),

/***/ "./kedbackend/js/dist/js/ked-model-migrator/migrate.js":
/*!*************************************************************!*\
  !*** ./kedbackend/js/dist/js/ked-model-migrator/migrate.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return migrate; });
/* harmony import */ var _migrate_course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./migrate-course */ "./kedbackend/js/dist/js/ked-model-migrator/migrate-course.js");
/* harmony import */ var _migrate_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./migrate-task */ "./kedbackend/js/dist/js/ked-model-migrator/migrate-task.js");


function migrate(doc, table, graphs) {
    switch (table) {
        case "courses":
            Object(_migrate_course__WEBPACK_IMPORTED_MODULE_0__["default"])(doc, graphs);
            break;
        case "tasks":
            Object(_migrate_task__WEBPACK_IMPORTED_MODULE_1__["default"])(doc);
            break;
    }
}
//# sourceMappingURL=migrate.js.map

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

/***/ "./src/apis/buttons.tsx":
/*!******************************!*\
  !*** ./src/apis/buttons.tsx ***!
  \******************************/
/*! exports provided: Button, DriveButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriveButton", function() { return DriveButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Button = function (_a) {
    var label = _a.label, addClass = _a.addClass, faIcon = _a.faIcon, action = _a.action, url = _a.url;
    var className = addClass ? "btn " + addClass : 'btn';
    if (!!url && !action)
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { className: className, href: url, target: "_blank" },
            faIcon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: faIcon }),
            " ",
            label);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { className: className, onClick: action },
        faIcon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: faIcon }),
        " ",
        label);
};
var DriveButton = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'Google Drive' : _b, action = _a.action;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, { label: label, faIcon: "fab fa-google-drive", action: action });
};


/***/ }),

/***/ "./src/apis/configs.ts":
/*!*****************************!*\
  !*** ./src/apis/configs.ts ***!
  \*****************************/
/*! exports provided: WebClientId, TemplatesFileId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebClientId", function() { return WebClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesFileId", function() { return TemplatesFileId; });
// Client id for GoogleWebClient
var WebClientId = "421572262269-u68v5lf5o8ss5t68l8gkq3pfarh6dbkv.apps.googleusercontent.com";
// Google Drive File Id to json file with Tamplates for Course Builder (Classroom)
var TemplatesFileId = 'https://docs.google.com/document/d/1V7exG6vN83Sq8kb6uz1B6DaZDVO9eLcJbP7XF0vL4dY/export?format=txt';


/***/ }),

/***/ "./src/apis/edsclient.ts":
/*!*******************************!*\
  !*** ./src/apis/edsclient.ts ***!
  \*******************************/
/*! exports provided: EdsClient, EDSPeriod, parseJsonDate_old */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdsClient", function() { return EdsClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDSPeriod", function() { return EDSPeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseJsonDate_old", function() { return parseJsonDate_old; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _utils_school_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/school-moment */ "./src/utils/school-moment.ts");
/* harmony import */ var _utils_school_term__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/school-term */ "./src/utils/school-term.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _mock_mock_eds_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock/mock-eds-data.json */ "./src/apis/mock/mock-eds-data.json");
var _mock_mock_eds_data_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mock/mock-eds-data.json */ "./src/apis/mock/mock-eds-data.json", 1);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_make_suspense_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/make-suspense-api */ "./src/utils/make-suspense-api.ts");









var EdsClient = /** @class */ (function () {
    function EdsClient(isomorphic, baseUrl, bearerProvider, userEmailGetter) {
        var _this = this;
        this.http = new kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["RestClient"](isomorphic, baseUrl, { bearerProvider: bearerProvider });
        this.userEmailGetter = userEmailGetter;
        var isApiMethod = function (m) {
            return typeof _this[m] === 'function' &&
                m !== 'constructor' && // Since makeSuspenseApi() walks prototype chain
                m !== 'privatizingCacheBust' &&
                m !== 'userEmailGetter';
        } // List non-API methods here...
        ;
        Object.keys(EdsClient.prototype).forEach(function (method) {
            if (isApiMethod(method)) {
                _this[method] = avoidSimultanousCalls(_this[method]);
            }
        });
        this.suspense = Object(_utils_make_suspense_api__WEBPACK_IMPORTED_MODULE_7__["makeSuspenseApi"])(this, { isApiMethod: isApiMethod });
    }
    EdsClient.prototype.privatizingCacheBust = function () {
        return { user: this.userEmailGetter() };
    };
    /**
       * Retrieve active courses for current logged in student.
       *
       * @param courseCode Short-name of the course. Optional.
       */
    EdsClient.prototype.getActiveCourses = function (q) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var query, res, _a, _b, json, ex_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        query = this.privatizingCacheBust();
                        if (q) {
                            if (q.courseCode)
                                query.CourseCode = q.courseCode;
                            if (q.periodName)
                                query.PeriodName = q.periodName;
                        }
                        return [4 /*yield*/, this.http.get("studentactivecourses", query)];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4:
                        json = _c.sent();
                        return [2 /*return*/, json.courses];
                    case 5:
                        ex_1 = _c.sent();
                        console.error("Error from EDS: " + ex_1);
                        throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kunde tyv\u00E4rr inte ladda terminsm\u00E5l eller avklarade steg fr\u00E5n EDS. F\u00F6rs\u00F6k igen senare..."], ["Kunde tyv\u00E4rr inte ladda terminsm\u00E5l eller avklarade steg fr\u00E5n EDS. F\u00F6rs\u00F6k igen senare..."]))));
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieve latest assessments for current logged in user.
     *
     * @param limit Optional limit
     */
    EdsClient.prototype.getLatestAssessments = function (limit) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var query, res, _a, _b, json;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        query = this.privatizingCacheBust();
                        if (!isNaN(limit))
                            query.Count = limit;
                        return [4 /*yield*/, this.http.get("studentassessments", query)];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4:
                        json = _c.sent();
                        return [2 /*return*/, json.assessments];
                }
            });
        });
    };
    /**
     * Retrieve studyplans for current logged-in user
     */
    EdsClient.prototype.getStudentGoals = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b, json;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.get("studentgoals", this.privatizingCacheBust())];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4:
                        json = _c.sent();
                        return [2 /*return*/, json.studentGoals];
                }
            });
        });
    };
    EdsClient.prototype.getStudentFutureAbilities = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b, json;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.get("studentFutureAbilities", this.privatizingCacheBust())];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4:
                        json = _c.sent();
                        return [2 /*return*/, json.studentFutureAbilities];
                }
            });
        });
    };
    EdsClient.prototype.getTeacherTutorStudents = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b, json;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.get("teachertutorstudents", this.privatizingCacheBust())];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4:
                        json = _c.sent();
                        return [2 /*return*/, json.students];
                }
            });
        });
    };
    /**
     * getSchoolTuitionGroups()
     *
     * Return tuitiongroups for school
     *
     * @param schoolName - name of school
     * @param courseCode - Skolverkets code for course
     */
    EdsClient.prototype.getSchoolTuitionGroups = function (q) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b, json;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.get("SchoolTuitionGroups", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.privatizingCacheBust(), q))];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4:
                        json = _c.sent();
                        return [2 /*return*/, json.schoolTuitionGroups];
                }
            });
        });
    };
    /**
     * getTuitionGroupStudents()
     *
     * Return name and mailadresses for tutitiongroups in schools
     *
     * @param schoolName - name of school
     * @param tuitionGroupName - tuition gruop name in EDS
     */
    EdsClient.prototype.getTuitionGroupStudents = function (q) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b, json;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.get("TuitionGroupStudents", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.privatizingCacheBust(), q))];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4:
                        json = _c.sent();
                        return [2 /*return*/, json.tuitionGroupStudents];
                }
            });
        });
    };
    /**
     * getSchoolTeachers()
     *
     * Return name and mailadresses for tutitiongroups in schools
     *
     * @param schoolName - name of school
     */
    EdsClient.prototype.getSchoolTeachers = function (q) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b, json;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.get("SchoolTeachers", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.privatizingCacheBust(), q))];
                    case 1:
                        res = _c.sent();
                        if (!(res.status != 200)) return [3 /*break*/, 3];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["HttpError"], _b.concat([_c.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4:
                        json = _c.sent();
                        return [2 /*return*/, json.schoolTeachers];
                }
            });
        });
    };
    // we assume that the EDS will return the current academic year dates determined by the current date
    EdsClient.prototype.getAcademicYearTerms = function (schoolLocale, date) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var holidays, firstTermMoment, secondTermMoment, startFirstTermDate, startSecondTermDate, endFirstTermDate, endSecondTermDate, firstTerm, secondTerm;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // mock data
                switch (schoolLocale) {
                    case 'en_sin':
                        return [2 /*return*/, _mock_mock_eds_data_json__WEBPACK_IMPORTED_MODULE_5__.SouthIndia.filter(function (f) { return moment__WEBPACK_IMPORTED_MODULE_6___default()(date).isSameOrAfter(f.firstTerm.startDate) && moment__WEBPACK_IMPORTED_MODULE_6___default()(date).isSameOrBefore(f.secondTerm.endDate); })[0]];
                    case 'en_nin':
                        return [2 /*return*/, _mock_mock_eds_data_json__WEBPACK_IMPORTED_MODULE_5__.NorthIndia.filter(function (f) { return moment__WEBPACK_IMPORTED_MODULE_6___default()(date).isSameOrAfter(f.firstTerm.startDate) && moment__WEBPACK_IMPORTED_MODULE_6___default()(date).isSameOrBefore(f.secondTerm.endDate); })[0]];
                    case 'sv':
                        {
                            holidays = [];
                            firstTermMoment = Object(_utils_school_moment__WEBPACK_IMPORTED_MODULE_2__["getTermStarEndDate"])(date, true);
                            secondTermMoment = Object(_utils_school_moment__WEBPACK_IMPORTED_MODULE_2__["getTermStarEndDate"])(date, false);
                            startFirstTermDate = firstTermMoment[0];
                            startSecondTermDate = secondTermMoment[0];
                            endFirstTermDate = firstTermMoment[1];
                            endSecondTermDate = secondTermMoment[1];
                            firstTerm = { startDate: new Date(startFirstTermDate.year(), startFirstTermDate.month(), startFirstTermDate.date()).toDateString(), endDate: new Date(startFirstTermDate.year(), endFirstTermDate.month(), endFirstTermDate.date()).toDateString() };
                            secondTerm = { startDate: new Date(startSecondTermDate.year(), startSecondTermDate.month(), startSecondTermDate.date()).toDateString(), endDate: new Date(startSecondTermDate.year(), endSecondTermDate.month(), endSecondTermDate.date()).toDateString() };
                            return [2 /*return*/, { firstTerm: firstTerm, secondTerm: secondTerm, holidays: holidays }];
                        }
                }
                return [2 /*return*/];
            });
        });
    };
    return EdsClient;
}());

var EDSPeriod = /** @class */ (function () {
    function EDSPeriod(periodStringOrSchoolTerm) {
        if (typeof periodStringOrSchoolTerm === 'string') {
            this.period = periodStringOrSchoolTerm;
            this.term = this.period.startsWith('HT') ? 'AT' : 'ST';
            this.year = parseInt(this.period.substr(2));
            if (isNaN(this.year))
                throw new Error("Invalid period: " + this.period);
        }
        else {
            var schoolTerm = new _utils_school_term__WEBPACK_IMPORTED_MODULE_3__["SchoolTerm"](periodStringOrSchoolTerm);
            this.period = (schoolTerm.term === 'AT' ? "HT" : "VT") + schoolTerm.year;
            this.term = schoolTerm.term;
            this.year = schoolTerm.year;
        }
    }
    Object.defineProperty(EDSPeriod.prototype, "schoolTerm", {
        get: function () {
            return new _utils_school_term__WEBPACK_IMPORTED_MODULE_3__["SchoolTerm"]({
                academicYear: this.term === 'AT' ?
                    this.year + "/" + (this.year + 1) :
                    this.year - 1 + "/" + this.year,
                term: this.term
            });
        },
        enumerable: true,
        configurable: true
    });
    EDSPeriod.prototype.toString = function () {
        return this.period;
    };
    EDSPeriod.prototype.valueOf = function () {
        return this.year + ":" + (this.term === 'ST' ? "1" : "2");
    };
    return EDSPeriod;
}());

function parseJsonDate_old(jsonDateStr) {
    var date = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["dateTimeReviver"])("", jsonDateStr);
    if (!(date instanceof Date))
        throw new Error("Invalid JSON date string: " + jsonDateStr);
    return date;
}
function avoidSimultanousCalls(method) {
    var ongoingPromises = {};
    return function () {
        var argsJson = JSON.stringify([].slice.call(arguments));
        if (!ongoingPromises[argsJson]) {
            ongoingPromises[argsJson] = method.apply(this, arguments).then(function (result) {
                delete ongoingPromises[argsJson];
                return result;
            });
        }
        return ongoingPromises[argsJson];
    };
}
var templateObject_1;


/***/ }),

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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClassroomSync, _super);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                        return [4 /*yield*/, fetch('https://script.googleapis.com/v1/scripts/M1H0BlTkv983PNVTJjDXjNqXLxmQiBgGz:run?alt=json', {
                                method: 'post',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + this.authToken
                                },
                                body: JSON.stringify(data)
                            }).then(function (resp) { return resp.json(); })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
    *
    * @param param0
    */
    ClassroomSync.prototype.initSync = function (course, origCourse, fullSyncNeeded) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var emptyOrMock, _a, _b, group, data, edsSchoolNameGymn, studyGroupStudents, _c, _d, group, tuitionGroupStudents, e_1_1, _e, subset, changes, action;
            var e_2, _f, e_1, _g;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_h) {
                switch (_h.label) {
                    case 0:
                        emptyOrMock = {};
                        if (course.school === 'KED') {
                            try {
                                for (_a = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](course.studyGroups), _b = _a.next(); !_b.done; _b = _a.next()) {
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
                        _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](course.studyGroups), _d = _c.next();
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
                        _e = this.diffCourse(course, origCourse, fullSyncNeeded), subset = _e.subset, changes = _e.changes, action = _e.action;
                        // send the changes to classroom-service with {id, school code} to update classrooms
                        // should we send the users from the groups or should classroom-service get these from EDS?
                        // if we handle users in kedcomponents a check if there are changes should probably be made?
                        if (action == 'full') {
                            return [2 /*return*/, this.createClassroom(subset, studyGroupStudents)];
                        }
                        else if (action == 'update') {
                            return [2 /*return*/, this.updateClassroom({ course: subset, changes: changes, studyGroupStudents: studyGroupStudents })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ClassroomSync.prototype.archive = function (course) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('archiving');
                return [2 /*return*/, this.callSync('archive', [course])];
            });
        });
    };
    ClassroomSync.prototype.delete = function (subset) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    ClassroomSync.prototype.diffCourse = function (course, origCourse, fullSyncNeeded) {
        // Filter out assignments from tasks and subset to only properties we are interested in
        var subsetAssignments = function (tasks, modules) {
            var skipTasks = [];
            modules.filter(function (m) { return m.inactive; }).map(function (m) {
                skipTasks = skipTasks.concat(m.taskIds);
            });
            var assignments = tasks.filter(function (t) { return t.assignment === true && !skipTasks.includes(t.id); });
            return assignments.map(function (t) {
                var assignment = t.assignment, deadline = t.deadline, id = t.id, name = t.name, resources = t.resources, templateFile = t.templateFile;
                return { assignment: assignment, deadline: deadline, id: id, name: name, resources: resources, templateFile: templateFile };
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
        return { subset: subset, changes: changes, action: "update" };
    };
    ClassroomSync.prototype.createClassroom = function (course, studyGroupStudents) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.callSync('createClassrooms', [course, studyGroupStudents])];
            });
        });
    };
    ClassroomSync.prototype.updateClassroom = function (_a) {
        var course = _a.course, changes = _a.changes, studyGroupStudents = _a.studyGroupStudents;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                return [2 /*return*/, this.callSync('updateClassrooms', [course, changes, studyGroupStudents])];
            });
        });
    };
    return ClassroomSync;
}(_google_webclient__WEBPACK_IMPORTED_MODULE_1__["GoogleWebClient"]));



/***/ }),

/***/ "./src/apis/google-client.ts":
/*!***********************************!*\
  !*** ./src/apis/google-client.ts ***!
  \***********************************/
/*! exports provided: GoogleClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleClient", function() { return GoogleClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");


var GoogleClient = /** @class */ (function () {
    function GoogleClient(_a) {
        var discoveryDocs = _a.discoveryDocs;
        this.googleTokenProvider = _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["env"].googleTokenProvider;
        this.discoveryDocs = [];
        this.discoveryDocs.push(discoveryDocs);
    }
    GoogleClient.prototype.setBearerProvider = function (googleTokenProvider) {
        this.googleTokenProvider = googleTokenProvider;
    };
    GoogleClient.prototype.ensureInited = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tokenResult;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof gapi === 'undefined')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadGapi()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(!this.tokenExpiration || this.tokenExpiration < new Date())) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.googleTokenProvider.getBearer()];
                    case 3:
                        tokenResult = _a.sent();
                        this.tokenExpiration = new Date(tokenResult.expires);
                        this.token = tokenResult.token;
                        _a.label = 4;
                    case 4: 
                    // Load all discovyerDocs
                    return [4 /*yield*/, gapi.client.init({
                            discoveryDocs: this.discoveryDocs
                        })];
                    case 5:
                        // Load all discovyerDocs
                        _a.sent();
                        return [4 /*yield*/, gapi.client.setToken({
                                access_token: this.token
                            })];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GoogleClient.prototype.loadGapi = function () {
        return new Promise(function (resolve) {
            if (typeof gapi !== 'undefined')
                return resolve();
            var script = document.createElement('script');
            script.src = "https://apis.google.com/js/client.js?onload=gaapi_loaded";
            document.getElementsByTagName("head")[0].appendChild(script);
            window.gaapi_loaded = resolve;
        });
    };
    return GoogleClient;
}());



/***/ }),

/***/ "./src/apis/google-drive.ts":
/*!**********************************!*\
  !*** ./src/apis/google-drive.ts ***!
  \**********************************/
/*! exports provided: GoogleDrive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleDrive", function() { return GoogleDrive; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _google_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-client */ "./src/apis/google-client.ts");


var GoogleDrive = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GoogleDrive, _super);
    function GoogleDrive() {
        return _super.call(this, { discoveryDocs: 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest' }) || this;
    }
    GoogleDrive.prototype.getFile = function (fileId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, gapi.client.drive.files.get({
                                fileId: fileId,
                                supportsAllDrives: true,
                                fields: 'id,name,mimeType,webViewLink,iconLink,modifiedTime,thumbnailLink'
                            }).then(function (resp) {
                                if (resp.result.name) {
                                    var file = resp.result;
                                    return { fileId: file.id, url: file.webViewLink, mimeType: file.mimeType, name: file.name, modiifiedTime: file.modifiedTime, iconUrl: file.iconLink, thumbnailUrl: file.thumbnailLink };
                                }
                                return null;
                            })];
                }
            });
        });
    };
    /**
     * updatePermissions()
     *
     * @param fileId
     *
     * Make the file accessible to all in the domain. Should be unnecessary but some
     * teachers have changed their default permissions.
     * We don't care right now if this fails because this is just an extra precaution.
     * If we plan on using this on other domains the domain-attribute needs to be dynamic.
     *
     */
    GoogleDrive.prototype.updatePermissions = function (fileId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log('updating permissions');
                        return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _a.sent();
                        gapi.client.drive.permissions.create({
                            fileId: fileId,
                            sendNotificationEmail: false,
                            role: 'reader',
                            type: 'anyone',
                            // type: 'domain', 
                            // domain: 'kunskapsskolan.se'
                            supportsAllDrives: true
                        }).then(function (resp) { return console.log(resp); });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log('unable to update permissions');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates a folder with given name in a parent folder
     * @param name folder name
     * @param parent parent folders id
     */
    GoogleDrive.prototype.createFolder = function (name, parent) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Creating folder ' + name);
                        return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, gapi.client.drive.files.create({
                                name: name,
                                mimeType: 'application/vnd.google-apps.folder',
                                parents: [parent]
                            }).then(function (resp) { return resp.result; })];
                }
            });
        });
    };
    /**
     * Gets the id for the folder in a path. If folder/path does not exists
     * a new folder at that path is created.
     * @param path the path to the file from root folder as an array
     */
    GoogleDrive.prototype.getIdForFolderPath = function (path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parent, path_1, path_1_1, folder, folderId, newFolder, e_1_1;
            var e_1, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('Getting id for ' + path.join('/'));
                        return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _b.sent();
                        parent = 'root';
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 9, 10, 11]);
                        path_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](path), path_1_1 = path_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!path_1_1.done) return [3 /*break*/, 8];
                        folder = path_1_1.value;
                        return [4 /*yield*/, this.getIdForFolder(folder, parent)];
                    case 4:
                        folderId = _b.sent();
                        if (!folderId) return [3 /*break*/, 5];
                        parent = folderId;
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.createFolder(folder, parent)];
                    case 6:
                        newFolder = _b.sent();
                        parent = newFolder.id;
                        _b.label = 7;
                    case 7:
                        path_1_1 = path_1.next();
                        return [3 /*break*/, 3];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (path_1_1 && !path_1_1.done && (_a = path_1.return)) _a.call(path_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/, parent];
                }
            });
        });
    };
    /**
     * Gets the id for a folder in a given parent folder
     * @param name name of folder
     * @param parent parent folders id
     */
    GoogleDrive.prototype.getIdForFolder = function (name, parent) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Getting id for ' + name);
                        return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, gapi.client.drive.files.list({
                                corpora: 'user',
                                q: "'" + parent + "' in parents and mimeType = 'application/vnd.google-apps.folder' and name = '" + name + "'"
                            }).then(function (resp) {
                                if (resp.result.files.length) {
                                    return resp.result.files[0].id;
                                }
                                else {
                                    return false;
                                }
                            })];
                }
            });
        });
    };
    /**
     * Copies a file to a destination
     * @param file
     * @param destination the destination as an array of folder names
     */
    GoogleDrive.prototype.copyFile = function (file, destination) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parent_1, parent_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Copying file: ' + file.name);
                        return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _a.sent();
                        if (!destination) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getIdForFolderPath(destination)];
                    case 2:
                        parent_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        parent_2 = 'root';
                        _a.label = 4;
                    case 4: return [2 /*return*/, gapi.client.drive.files.copy({
                            fileId: file.id,
                            supportsAllDrives: true,
                            parents: [parent],
                            name: file.name,
                            fields: 'id,name,mimeType,webViewLink,iconLink,modifiedTime,thumbnailLink'
                        }).then(function (resp) { return resp.result; })];
                }
            });
        });
    };
    GoogleDrive.prototype.handInFile = function (fileId, student, newOwner, teachers) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var batch;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // This should:
                        // - add teachers to editors of file
                        // - makes newOwner the owner of the file
                        // - makes the caller a reader of the file
                        // Now it makes teachers editors
                        console.log('handing in file');
                        return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _a.sent();
                        batch = gapi.client.newBatch();
                        return [4 /*yield*/, teachers.forEach(function (teacher) {
                                batch.add(gapi.client.drive.permissions.create({
                                    fileId: fileId,
                                    sendNotificationEmail: false,
                                    role: 'writer',
                                    type: 'user',
                                    emailAddress: teacher
                                }));
                            })];
                    case 2:
                        _a.sent();
                        batch.then(function (resp) { return console.log(resp); });
                        return [2 /*return*/];
                }
            });
        });
    };
    GoogleDrive.prototype.reclaimFile = function (file, student, teachers) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    GoogleDrive.prototype.returnFile = function (file, student) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    GoogleDrive.prototype.updateUrkundProperties = function (file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     * downloadFile()
     * @param file
     *
     * When Classroom has been integrated we will want to handle only the fileId:s
     * so that editing capabilities are peserved on the file (if it is a google-apps file)
     * Right now google-apps files are converted to pdf and passed into the current flow.
     *
     * TODO: error handling
     */
    GoogleDrive.prototype.downloadFile = function (_a) {
        var file = _a.file, limitSize = _a.limitSize, mimeType = _a.mimeType;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var type, xhrDownload_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: 
                    // A file that can be exported to PDF is retreived with
                    // file.export() from Drive, converted to a blob and then
                    // to a File.
                    // A file that can not be exported to PDF is retrieved
                    // through XHR and converted to a File.
                    // If we don't need to handle the physical files on the client
                    // we could save only the fileId:s and display filename and mimeType
                    // for the file in our listings. When/if we use Google Classroom for
                    // our task-handling that would be the preferred approach to keep
                    // the file as an editable Google file
                    // Init the drive-api (only needed for download so not loaded initially)
                    return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        // A file that can be exported to PDF is retreived with
                        // file.export() from Drive, converted to a blob and then
                        // to a File.
                        // A file that can not be exported to PDF is retrieved
                        // through XHR and converted to a File.
                        // If we don't need to handle the physical files on the client
                        // we could save only the fileId:s and display filename and mimeType
                        // for the file in our listings. When/if we use Google Classroom for
                        // our task-handling that would be the preferred approach to keep
                        // the file as an editable Google file
                        // Init the drive-api (only needed for download so not loaded initially)
                        _b.sent();
                        type = mimeType ? mimeType : 'application/pdf';
                        if (file.canExport) {
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    gapi.client.drive.files.export({
                                        fileId: file.fileId,
                                        mimeType: type
                                    }).then(function (resp) {
                                        var len = resp.body.length;
                                        var data = new Uint8Array(new ArrayBuffer(len));
                                        for (var i = 0; i < len; i++) {
                                            data[i] = resp.body.charCodeAt(i);
                                        }
                                        var blob = new Blob([data], { type: type });
                                        var filename = file.name + '.pdf';
                                        resolve(new File([blob], filename, { type: type, lastModified: file.modifiedTime }));
                                    });
                                })];
                        }
                        else {
                            xhrDownload_1 = function (file) {
                                return new Promise(function (resolve, reject) {
                                    var xhr = new XMLHttpRequest();
                                    xhr.open("GET", "https://www.googleapis.com/drive/v3/files/" + file.fileId + '?alt=media', true);
                                    xhr.setRequestHeader('Authorization', 'Bearer ' + _this.token);
                                    xhr.responseType = 'blob';
                                    xhr.onload = function () {
                                        resolve(new File([xhr.response], file.name, { type: file.mimeType, lastModified: file.modifiedTime }));
                                    };
                                    xhr.send();
                                });
                            };
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    if (limitSize !== undefined) {
                                        gapi.client.drive.files.get({
                                            fileId: file.fileId,
                                            fields: 'size'
                                        }).then(function (resp) {
                                            var size = Number(resp.result.size);
                                            if (size > limitSize * 1024 * 1024) {
                                                reject('GooglePickerError: Fildsize is too laarge');
                                            }
                                        }).then(function () {
                                            xhrDownload_1(file).then(function (resp) {
                                                resolve(resp);
                                            });
                                        });
                                    }
                                    else {
                                        xhrDownload_1(file).then(function (resp) {
                                            resolve(resp);
                                        });
                                    }
                                })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return GoogleDrive;
}(_google_client__WEBPACK_IMPORTED_MODULE_1__["GoogleClient"]));



/***/ }),

/***/ "./src/apis/google-picker.ts":
/*!***********************************!*\
  !*** ./src/apis/google-picker.ts ***!
  \***********************************/
/*! exports provided: GooglePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePicker", function() { return GooglePicker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _google_webclient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-webclient */ "./src/apis/google-webclient.ts");
/* harmony import */ var _google_drive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-drive */ "./src/apis/google-drive.ts");



var mimeTypeCollections = {
    'google-apps': 'application/vnd.google-apps.document,application/vnd.google-apps.presentation,application/vnd.google-apps.spreadsheet',
    'pdf': 'application/pdf'
};
/**
 * GooglePicker
 * Includes the initiation of the correct api:s.
 * Certain options can be passed to the constructor
 * and there could be others worth incorporating (i.e. Team Drive-support).
 *
 * Right now two options are handled:
 * - upload: if a user can upload to Drive in the Google Drive Picker
 * - multiple: if a user can select multiple files
 * - limitType: active limits to certain mimeTypesCollections
 *
 * We could probably split this into google-picker and google-drive where google-drive
 * handles the explicit calls to the google drive api.
 */
var GooglePicker = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GooglePicker, _super);
    function GooglePicker(options) {
        var _this = _super.call(this, { scopes: ['https://www.googleapis.com/auth/drive'] }) || this;
        _this.options = { upload: false, multiple: false, limitType: false };
        Object.assign(_this.options, options);
        _this.drive = new _google_drive__WEBPACK_IMPORTED_MODULE_2__["GoogleDrive"]();
        return _this;
    }
    /**
     * show()
     *
     * If a single file is requested from the picker a list of files with one element is returned.
     * It is up to the caller to handle the list in a relevant manner.
     *
     * More data from the file could be extracted if it is deemed necessary.
     *
     */
    GooglePicker.prototype.show = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var callback = function (response) {
                                    if (response['action'] == google.picker.Action.CANCEL) {
                                        reject();
                                    }
                                    else if (response['action'] == google.picker.Action.PICKED) {
                                        var selected_1 = [];
                                        response.docs.map(function (doc) {
                                            var fileId = doc.id, mimeType = doc.mimeType, name = doc.name, modifiedTime = doc.modifiedTime, iconUrl = doc.iconUrl, url = doc.url;
                                            var canExport = mimeType.includes('google-apps');
                                            selected_1.push({ fileId: fileId, mimeType: mimeType, name: name, modifiedTime: modifiedTime, canExport: canExport, iconUrl: iconUrl, url: url });
                                            // update permissions to read by all in domain
                                            _this.drive.updatePermissions(fileId);
                                        });
                                        resolve(selected_1);
                                    }
                                };
                                var pickerbuilder = new google.picker.PickerBuilder()
                                    .enableFeature(google.picker.Feature.SUPPORT_DRIVES)
                                    .enableFeature(google.picker.Feature.SUPPORT_TEAM_DRIVES)
                                    .addView(new google.picker.DocsView()
                                    .setOwnedByMe(true) // should this be an option?
                                    .setIncludeFolders(true))
                                    .addView(new google.picker.DocsView()
                                    .setIncludeFolders(true)
                                    .setEnableTeamDrives(true))
                                    .setLocale("sv") // should this be an option?
                                    .setSize(1051, 650) // should this be an option?
                                    .setOAuthToken(_this.authToken)
                                    .setCallback(callback);
                                if (_this.options.upload) {
                                    pickerbuilder.addView(new google.picker.DocsUploadView().setIncludeFolders(true));
                                }
                                if (_this.options.multiple) {
                                    pickerbuilder.enableFeature(google.picker.Feature.MULTISELECT_ENABLED);
                                }
                                if (_this.options.limitType) {
                                    var mimeTypes = mimeTypeCollections[_this.options.limitType];
                                    console.log(mimeTypes);
                                    pickerbuilder.setSelectableMimeTypes(mimeTypes);
                                }
                                _this.picker = pickerbuilder.build();
                                _this.picker.setVisible(true);
                            })];
                }
            });
        });
    };
    GooglePicker.prototype.close = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.picker.dispose();
                return [2 /*return*/];
            });
        });
    };
    return GooglePicker;
}(_google_webclient__WEBPACK_IMPORTED_MODULE_1__["GoogleWebClient"]));



/***/ }),

/***/ "./src/apis/google-webclient.ts":
/*!**************************************!*\
  !*** ./src/apis/google-webclient.ts ***!
  \**************************************/
/*! exports provided: GoogleWebClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleWebClient", function() { return GoogleWebClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configs */ "./src/apis/configs.ts");



var GoogleWebClient = /** @class */ (function () {
    function GoogleWebClient(_a) {
        var _b;
        var _c = _a.scopes, scopes = _c === void 0 ? [] : _c;
        this.scopes = ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'];
        (_b = this.scopes).push.apply(_b, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](scopes));
    }
    GoogleWebClient.prototype.ensureInited = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var SCOPES;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof gapi === "undefined")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadGapi()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        SCOPES = this.scopes.join(' ');
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                gapi.load("client:auth2", function () {
                                    // Calls authorize without prompting the user. If authorization hasn't been given by
                                    // the user an error is returned and we call authorize again with consent-screen
                                    var reauthorize = false;
                                    return gapi.auth2.authorize({
                                        client_id: _configs__WEBPACK_IMPORTED_MODULE_2__["WebClientId"],
                                        scope: SCOPES,
                                        response_type: 'permission',
                                        login_hint: _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["default"].currentUser.mail,
                                        prompt: 'none'
                                    }, function (resp) {
                                        console.table(resp);
                                        if (resp.error) {
                                            // no consent given so reauthorize
                                            reauthorize = true;
                                        }
                                        else {
                                            // check if we have all the scopes we want
                                            var scopeset_1 = new Set(resp.scope.split(' '));
                                            var missingScopes = _this.scopes.filter(function (x) { return !scopeset_1.has(x); });
                                            if (missingScopes.length > 0) {
                                                console.log('missing scopes');
                                                // scopes are missing from our consent so reauthorize
                                                reauthorize = true;
                                            }
                                            else {
                                                // everything seems to be ok so store our token
                                                _this.authToken = resp.access_token;
                                                resolve();
                                            }
                                        }
                                        if (reauthorize) {
                                            console.log('reauthorize');
                                            return gapi.auth2.authorize({
                                                client_id: _configs__WEBPACK_IMPORTED_MODULE_2__["WebClientId"],
                                                scope: SCOPES,
                                                response_type: 'permission',
                                                login_hint: _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["default"].currentUser.mail,
                                                prompt: 'consent'
                                            }, function (resp) {
                                                console.table(resp);
                                                if (resp.error) {
                                                    // something is still wrong so throw an error
                                                    reject('Google Web Client: No access token');
                                                }
                                                else {
                                                    // we now have a token (hopefully with the right scopes)
                                                    // should we check again?
                                                    _this.authToken = resp.access_token;
                                                    resolve();
                                                }
                                            });
                                        }
                                        if (resp.expires_in < 500) {
                                            return gapi.auth2.authorize({
                                                client_id: _configs__WEBPACK_IMPORTED_MODULE_2__["WebClientId"],
                                                scope: SCOPES,
                                                response_type: 'permission',
                                                login_hint: _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["default"].currentUser.mail,
                                                prompt: 'none'
                                            }, function (resp) {
                                                _this.authToken = resp.access_token;
                                                resolve();
                                            });
                                        }
                                    });
                                });
                            })];
                    case 3:
                        _a.sent();
                        if (!(typeof google === "undefined" || typeof google.picker === "undefined")) return [3 /*break*/, 5];
                        return [4 /*yield*/, new Promise(function (resolve) {
                                gapi.load("picker", function () { resolve(); });
                            })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!(typeof gapi.client === "undefined" || typeof gapi.client.classroom === "undefined")) return [3 /*break*/, 7];
                        return [4 /*yield*/, new Promise(function (resolve) {
                                gapi.client.load("classroom", 'v1', function () { resolve(); });
                            })];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    GoogleWebClient.prototype.loadGapi = function () {
        return new Promise(function (resolve, reject) {
            if (typeof gapi !== "undefined")
                return resolve();
            var script = document.createElement("script");
            script.src = "https://apis.google.com/js/client.js?onload=gaapi_loaded";
            document.getElementsByTagName("head")[0].appendChild(script);
            window.gaapi_loaded = resolve;
        });
    };
    return GoogleWebClient;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
    },
    {
        schoolName: 'KED',
        teacherFirstName: 'Andrei',
        teacherLastName: 'Spatarelu',
        teacherEmailAddress: 'andrei.spatarelu@vemendo.se'
    }
];
var mockTuitionGroups = {
    'DJUSÄL01': [
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUR1_GR1 (180816-190614)',
            courseCode: 'DJUSÄL01'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUR1_GR2 (180816-190614)',
            courseCode: 'DJUSÄL01'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUR1_GR3 (180816-190614)',
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
    "MATMAT03b": [
        {
            schoolName: 'KED',
            tuitionGroupName: 'MAT3b_Gr1 (180816-190614)',
            courseCode: 'MATMAT03b'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'MAT3b_Gr2 (180816-190614)',
            courseCode: 'MATMAT03b'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'MAT3b_Gr3 (180816-190614)',
            courseCode: 'MATMAT03b'
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
    'DJUR1_GR1 (180816-190614)': createStudents('DJUR1_GR1 (180816-190614)', 1, 12),
    'DJUR1_GR2 (180816-190614)': createStudents('DJUR1_GR2 (180816-190614)', 13, 24),
    'DJUR1_GR3 (180816-190614)': tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
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
            studentFirstName: 'Andrei',
            studentLastName: 'Spatarelu',
            studentEmailAddress: 'andrei.spatarelu@vemendo.se'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUDJ_Gr2 (180816-190614)',
            studentFirstName: 'Student3',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student3.classroom@kedschools.com'
        }
    ], createStudents('DJUR1_GR3 (180816-190614)', 23, 34)),
    'MAT3b_Gr1 (180816-190614)': createStudents('MAT3b_Gr1 (180816-190614)', 3, 23),
    'MAT3b_Gr2 (180816-190614)': createStudents('MAT3b_Gr2 (180816-190614)', 24, 49),
    'MAT3b_Gr3 (180816-190614)': createStudents('MAT3b_Gr3 (180816-190614)', 50, 72),
    'IDR1_Gr1 (180816-190614)': createStudents('IDR1_Gr1 (180816-190614)', 1, 12),
    'IDR1_Gr2 (180816-190614)': createStudents('IDR1_Gr2 (180816-190614)', 13, 22),
    'IDR1_Gr3 (180816-190614)': createStudents('IDR1_Gr3 (180816-190614)', 23, 34),
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

/***/ "./src/apis/mock/mock-eds-data.json":
/*!******************************************!*\
  !*** ./src/apis/mock/mock-eds-data.json ***!
  \******************************************/
/*! exports provided: SouthIndia, NorthIndia, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"SouthIndia\":[{\"firstTerm\":{\"startDate\":\"2015-06-01T00:00:00.000Z\",\"endDate\":\"2015-10-31T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2015-11-01T00:00:00.000Z\",\"endDate\":\"2016-03-27T00:00:00.000Z\"},\"holidays\":[]},{\"firstTerm\":{\"startDate\":\"2016-06-23T00:00:00.000Z\",\"endDate\":\"2016-10-31T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2016-11-01T00:00:00.000Z\",\"endDate\":\"2017-03-25T00:00:00.000Z\"},\"holidays\":[]},{\"firstTerm\":{\"startDate\":\"2017-06-05T00:00:00.000Z\",\"endDate\":\"2017-10-31T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2017-11-01T00:00:00.000Z\",\"endDate\":\"2018-03-30T00:00:00.000Z\"},\"holidays\":[]},{\"firstTerm\":{\"startDate\":\"2018-06-04T00:00:00.000Z\",\"endDate\":\"2018-10-31T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2018-11-01T00:00:00.000Z\",\"endDate\":\"2019-04-29T00:00:00.000Z\"},\"holidays\":[]},{\"firstTerm\":{\"startDate\":\"2019-06-03T00:00:00.000Z\",\"endDate\":\"2019-10-31T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2019-11-01T00:00:00.000Z\",\"endDate\":\"2020-03-27T00:00:00.000Z\"},\"holidays\":[]},{\"firstTerm\":{\"startDate\":\"2020-06-01T00:00:00.000Z\",\"endDate\":\"2020-10-31T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2020-11-01T00:00:00.000Z\",\"endDate\":\"2021-03-26T00:00:00.000Z\"},\"holidays\":[]},{\"firstTerm\":{\"startDate\":\"2021-06-06T00:00:00.000Z\",\"endDate\":\"2021-10-31T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2021-11-01T00:00:00.000Z\",\"endDate\":\"2022-03-25T00:00:00.000Z\"},\"holidays\":[]},{\"firstTerm\":{\"startDate\":\"2022-06-05T00:00:00.000Z\",\"endDate\":\"2022-10-31T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2022-11-01T00:00:00.000Z\",\"endDate\":\"2023-03-31T00:00:00.000Z\"},\"holidays\":[]},{\"firstTerm\":{\"startDate\":\"2023-06-04T00:00:00.000Z\",\"endDate\":\"2023-10-31T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2023-11-01T00:00:00.000Z\",\"endDate\":\"2024-03-29T00:00:00.000Z\"},\"holidays\":[]},{\"firstTerm\":{\"startDate\":\"2024-06-03T00:00:00.000Z\",\"endDate\":\"2024-10-31T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2024-11-01T00:00:00.000Z\",\"endDate\":\"2025-03-28T00:00:00.000Z\"},\"holidays\":[]}],\"NorthIndia\":[{\"firstTerm\":{\"startDate\":\"2024-04-03T00:00:00.000Z\",\"endDate\":\"2024-09-30T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2024-10-01T00:00:00.000Z\",\"endDate\":\"2025-04-02T00:00:00.000Z\"},\"holidays\":[]},{\"firstTerm\":{\"startDate\":\"2023-04-05T00:00:00.000Z\",\"endDate\":\"2023-10-01T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2023-10-02T00:00:00.000Z\",\"endDate\":\"2024-04-02T00:00:00.000Z\"},\"holidays\":[]},{\"firstTerm\":{\"startDate\":\"2022-04-06T00:00:00.000Z\",\"endDate\":\"2022-10-03T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2022-10-04T00:00:00.000Z\",\"endDate\":\"2023-04-04T00:00:00.000Z\"},\"holidays\":[]},{\"firstTerm\":{\"startDate\":\"2021-04-01T00:00:00.000Z\",\"endDate\":\"2021-10-04T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2021-10-05T00:00:00.000Z\",\"endDate\":\"2022-04-05T00:00:00.000Z\"},\"holidays\":[]},{\"firstTerm\":{\"startDate\":\"2020-04-01T00:00:00.000Z\",\"endDate\":\"2020-09-28T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2020-09-29T00:00:00.000Z\",\"endDate\":\"2021-03-31T00:00:00.000Z\"},\"holidays\":[{\"startDate\":\"2020-05-17\",\"endDate\":\"2020-06-28\"}]},{\"firstTerm\":{\"startDate\":\"2019-04-04T00:00:00.000Z\",\"endDate\":\"2019-09-30T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2019-10-01T00:00:00.000Z\",\"endDate\":\"2020-03-31T00:00:00.000Z\"},\"holidays\":[{\"startDate\":\"2019-05-19\",\"endDate\":\"2019-06-29\"}]},{\"firstTerm\":{\"startDate\":\"2018-04-04T00:00:00.000Z\",\"endDate\":\"2018-09-30T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2018-10-01T00:00:00.000Z\",\"endDate\":\"2019-04-03T00:00:00.000Z\"},\"holidays\":[]},{\"firstTerm\":{\"startDate\":\"2017-04-05T00:00:00.000Z\",\"endDate\":\"2017-10-02T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2017-10-03T00:00:00.000Z\",\"endDate\":\"2018-04-03T00:00:00.000Z\"},\"holidays\":[]},{\"firstTerm\":{\"startDate\":\"2016-04-06T00:00:00.000Z\",\"endDate\":\"2016-10-03T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2016-10-04T00:00:00.000Z\",\"endDate\":\"2017-04-04T00:00:00.000Z\"},\"holidays\":[]},{\"firstTerm\":{\"startDate\":\"2015-04-01T00:00:00.000Z\",\"endDate\":\"2015-10-05T00:00:00.000Z\"},\"secondTerm\":{\"startDate\":\"2015-10-06T00:00:00.000Z\",\"endDate\":\"2016-04-05T00:00:00.000Z\"},\"holidays\":[]}]}");

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

/***/ "./src/components/course-builder-ks/logic/ordered-requirements.ts":
/*!************************************************************************!*\
  !*** ./src/components/course-builder-ks/logic/ordered-requirements.ts ***!
  \************************************************************************/
/*! exports provided: getOrderedDocs, resolveRequirementOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderedDocs", function() { return getOrderedDocs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveRequirementOrder", function() { return resolveRequirementOrder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var kedbackend_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kedbackend/observable */ "./kedbackend/observable.js");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");




function getOrderedDocs(docs, order, _a) {
    var appendLeftovers = (_a === void 0 ? { appendLeftovers: false } : _a).appendLeftovers;
    // Mark doc IDs that where present in given 'order' array.
    // Will be used to find left-overs that were not present in the 'order' array.
    var markedDocs = {};
    if (!docs || !order) {
        // Special case: no docs or no order. Don't fail. Just return docs as is.
        return docs;
    }
    // Map given 'order' array to corresponding docs. Also mark in markedDocs.
    var result = (docs && order ?
        order.map(function (id) {
            markedDocs[id] = true;
            return docs.find(function (doc) { return doc.id === id; });
        }).filter(function (doc) { return !!doc; }) :
        docs);
    if (appendLeftovers) {
        // If any leftovers are there, concat them at the end:
        var leftOvers = docs.filter(function (doc) { return !markedDocs[doc.id]; });
        return result.concat(leftOvers);
    }
    else {
        return result;
    }
}
function resolveRequirementOrder(obj, orderDefiner) {
    var _a;
    var orderDefiningDocObservable;
    if (orderDefiner) {
        // User provided the orderDefining doc (use case is when obj is a Course or Subject, which contains its order by itself. User then provides the Course or Subject in both args)
        orderDefiningDocObservable = new kedbackend_observable__WEBPACK_IMPORTED_MODULE_1__["Emitter"]([orderDefiner]);
    }
    else {
        var courseCodes = obj.tags.filter(function (tag) { return tag.startsWith("course:"); });
        if (courseCodes.length === 0) {
            return new kedbackend_observable__WEBPACK_IMPORTED_MODULE_1__["Emitter"](obj); // No course tags. Not possible to resolve order.
        }
        orderDefiningDocObservable = (_a = _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].courses).tags.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](courseCodes)).toValue();
    }
    return orderDefiningDocObservable.map(function (orderHolders) {
        var abilitiesOrder = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["flatten"])(orderHolders.map(function (orderHolder) { return orderHolder.abilitiesOrder || []; }));
        var ccOrder = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["flatten"])(orderHolders.map(function (orderHolder) { return orderHolder.centralContentOrder || []; }));
        var krOrder = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["flatten"])(orderHolders.map(function (orderHolder) { return orderHolder.knowledgeRequirementsOrder || []; }));
        var objClone = Object.assign({}, obj);
        if (objClone.abilities)
            objClone.abilities = getOrderedDocs(obj.abilities, abilitiesOrder);
        if (objClone.centralContent)
            objClone.centralContent = getOrderedDocs(obj.centralContent, ccOrder);
        if (objClone.knowledgeRequirements)
            objClone.knowledgeRequirements = getOrderedDocs(obj.knowledgeRequirements, krOrder);
        return objClone;
    });
}


/***/ }),

/***/ "./src/components/course-builder-ks/logic/task-order.ts":
/*!**************************************************************!*\
  !*** ./src/components/course-builder-ks/logic/task-order.ts ***!
  \**************************************************************/
/*! exports provided: getSortedTasks, computeUpdatedOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortedTasks", function() { return getSortedTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeUpdatedOrder", function() { return computeUpdatedOrder; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _ordered_requirements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ordered-requirements */ "./src/components/course-builder-ks/logic/ordered-requirements.ts");


function getSortedTasks(content) {
    return Object(_ordered_requirements__WEBPACK_IMPORTED_MODULE_1__["getOrderedDocs"])(content.tasks, content.taskOrder, { appendLeftovers: true });
}
function computeUpdatedOrder(docs, currentOrder, source, target, placement, _a) {
    var appendLeftovers = (_a === void 0 ? { appendLeftovers: false } : _a).appendLeftovers;
    var orderedIds = Object(_ordered_requirements__WEBPACK_IMPORTED_MODULE_1__["getOrderedDocs"])(docs, currentOrder, { appendLeftovers: true }).map(function (t) { return t.id; });
    var placeBefore = placement === 'before';
    var result = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["flatten"])(orderedIds
        .filter(function (id) { return id !== source.id; }) // Remove source id
        .map(function (id) { return id !== target.id ?
        // We're not on target
        id :
        // We're on target. Place before or after?
        placeBefore ?
            [source.id, id] :
            [id, source.id]; }));
    return result;
}


/***/ }),

/***/ "./src/components/course-builder/courses/business-logic.ts":
/*!*****************************************************************!*\
  !*** ./src/components/course-builder/courses/business-logic.ts ***!
  \*****************************************************************/
/*! exports provided: getUncoveredKnowledgeRequirements, getIdsNotCoveredByTasks, getIdsNotCoveredByReqReferencingDocs, sanityCheck, getTasksPerId, getSoftAccessList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUncoveredKnowledgeRequirements", function() { return getUncoveredKnowledgeRequirements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIdsNotCoveredByTasks", function() { return getIdsNotCoveredByTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIdsNotCoveredByReqReferencingDocs", function() { return getIdsNotCoveredByReqReferencingDocs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanityCheck", function() { return sanityCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasksPerId", function() { return getTasksPerId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSoftAccessList", function() { return getSoftAccessList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");



function getUncoveredKnowledgeRequirements(course) {
    var uncoveredRequirements = course.knowledgeRequirements.reduce(function (result, item) {
        result[item.id] = item;
        return result;
    }, {});
    course.tasks.forEach(function (task) {
        task.knowledgeRequirements.forEach(function (kr) {
            delete uncoveredRequirements[kr.id];
        });
    });
    return Object.keys(uncoveredRequirements).map(function (id) { return uncoveredRequirements[id]; });
}
function getIdsNotCoveredByTasks(course) {
    return getIdsNotCoveredByReqReferencingDocs([course], course.tasks);
}
function getIdsNotCoveredByReqReferencingDocs(templates, docsBeingChecked) {
    var uncoveredIds = {};
    // 1. Mark the ids of all knowledge requirements, abilities and central content for this course:
    templates.forEach(function (course) {
        course.knowledgeRequirements.forEach(function (r) {
            uncoveredIds[r.id] = true;
        });
        course.abilities.forEach(function (a) {
            uncoveredIds[a.id] = true;
        });
        course.centralContent.forEach(function (cc) {
            uncoveredIds[cc.id] = true;
        });
    });
    // 2. List all tasks and unmark all ids that they refer to
    docsBeingChecked.forEach(function (doc) {
        doc.knowledgeRequirements.forEach(function (kr) {
            delete uncoveredIds[kr.id];
        });
        doc.abilities.forEach(function (a) {
            delete uncoveredIds[a.id];
        });
        doc.centralContent.forEach(function (cc) {
            delete uncoveredIds[cc.id];
        });
    });
    return uncoveredIds;
}
function sanityCheck(course) {
    function hasDuplicateTasks(course) {
        var taskIds = {};
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["flatten"])(course.modules.map(function (module) { return module.taskIds.map(function (taskId) {
            if (taskIds[taskId]) {
                var task = course.tasks.find(function (t) { return t.id === taskId; });
                return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Samma uppgift f\u00F6rekommer flera g\u00E5nger: \"", "\""], ["Samma uppgift f\u00F6rekommer flera g\u00E5nger: \"", "\""])), task.name);
            }
            taskIds[taskId] = true;
        }).filter(function (x) { return x; }); }));
    }
    function tasksWithSameUrl(course) {
        var taskUrls = {};
        return course.tasks.map(function (task) {
            if (task.url) {
                if (taskUrls[task.url]) {
                    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Tv\u00E5 uppgifter pekar p\u00E5 samma URL: \"", "\" samt \"", "\""], ["Tv\u00E5 uppgifter pekar p\u00E5 samma URL: \"", "\" samt \"", "\""])), taskUrls[task.url].name, task.name);
                }
                taskUrls[task.url] = task;
            }
        }).filter(function (x) { return x; });
    }
    function hasEmptyModuleNames(course) {
        return course.modules.some(function (module) { return module.name === ""; }) && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Det finns minst en modul utan angivet namn"], ["Det finns minst en modul utan angivet namn"])));
    }
    function hasDuplicateModuleNames(course) {
        var moduleNames = {};
        return course.modules.map(function (module) {
            if (module.name && moduleNames[module.name]) {
                return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Modulen med namn ", " f\u00F6rekommer flera g\u00E5nger"], ["Modulen med namn ", " f\u00F6rekommer flera g\u00E5nger"])), module.name);
            }
            if (module.name)
                moduleNames[module.name] = true;
        });
    }
    var checks = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["flatten"])([
        hasDuplicateTasks(course),
        tasksWithSameUrl(course),
        hasEmptyModuleNames(course),
        hasDuplicateModuleNames(course)
    ]);
    return checks.filter(function (result) { return result; });
}
function getTasksPerId(course) {
    var result = {};
    function add(id, task) {
        var list = result[id] || (result[id] = []);
        list.push(task);
    }
    course.tasks.forEach(function (task) {
        task.abilities.forEach(function (a) { return add(a.id, task); });
        task.centralContent.forEach(function (c) { return add(c.id, task); });
        task.futureAbilities.forEach(function (fa) { return add(fa, task); });
    });
    return result;
}
/** Returns an access list for a course in a backward compatible way */
function getSoftAccessList(course) {
    var responsibleTeachers = course.responsibleTeachers;
    var result = responsibleTeachers.map(function (da) { return ({
        name: da.name,
        email: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getEmailFromDocAccess"])(da),
        access: da.access || 'edit'
    }); });
    return result;
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/components/course-builder/courses/course-banner.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/course-builder/courses/course-banner.tsx ***!
  \*****************************************************************/
/*! exports provided: setCourseImage, CourseBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCourseImage", function() { return setCourseImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseBanner", function() { return CourseBanner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");







var AdminMenuItems = [
    { name: "schools", text: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Skolor"], ["Skolor"]))), route: "/schools" },
    { name: "subjects", text: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\u00C4mnen"], ["\u00C4mnen"]))), route: "/subjects" },
];
var NonAdminMenuItems = [
    { name: "courseBuilder", text: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kursbyggaren"], ["Kursbyggaren"]))), route: "/courses/new" },
    { name: "studentPage", text: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Elevsida"], ["Elevsida"]))), route: "" },
    { name: "feedback", text: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-commenting-o", "aria-hidden": "true" }),
            " Feedback"), route: "https://kg.kunskapsporten.se/kursbyggaren/" }
];
function onDropImage(ev, host, course, origCourse) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var files, url, items, file, form, res, _loop_1, i;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.stopPropagation();
                    ev.preventDefault();
                    files = ev.dataTransfer.files;
                    url = null;
                    items = Array.from(ev.dataTransfer.items);
                    if (!(files.length > 0)) return [3 /*break*/, 3];
                    file = files[0];
                    if (file.size > 2 * 1024 * 1024) {
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["showError"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kan inte ladda upp bilder st\u00F6rre \u00E4n 2 MB"], ["Kan inte ladda upp bilder st\u00F6rre \u00E4n 2 MB"]))));
                        return [2 /*return*/];
                    }
                    form = new FormData();
                    form.append("files", file);
                    return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].kedBackendClient.http.fetch('web-upload', 'put', {}, {}, {
                            body: form
                        })];
                case 1:
                    res = _a.sent();
                    if (res.status !== 200) {
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["showError"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_6 || (templateObject_6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kunde inte ladda upp filen till Google Storage"], ["Kunde inte ladda upp filen till Google Storage"]))));
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, res.text()];
                case 2:
                    url = _a.sent();
                    return [3 /*break*/, 7];
                case 3:
                    _loop_1 = function (i) {
                        var item;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    item = items[i];
                                    if (!item.type.match('^text/uri-list')) return [3 /*break*/, 2];
                                    return [4 /*yield*/, new Promise(function (resolve) { return item.getAsString(resolve); })];
                                case 1:
                                    // URI
                                    url = _a.sent();
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 4;
                case 4:
                    if (!(i < items.length)) return [3 /*break*/, 7];
                    return [5 /*yield**/, _loop_1(i)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    ++i;
                    return [3 /*break*/, 4];
                case 7:
                    if (url == null) {
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["showError"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_7 || (templateObject_7 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kunde inte hitta n\u00E5gon bild i inneh\u00E5llet"], ["Kunde inte hitta n\u00E5gon bild i inneh\u00E5llet"]))));
                        return [2 /*return*/];
                    }
                    setCourseImage(course, origCourse, host, url);
                    return [2 /*return*/];
            }
        });
    });
}
function setCourseImage(course, origCourse, host, url) {
    var imageId = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])();
    host.update({
        imageId: { $set: imageId },
        images: {
            $set: [{
                    id: imageId,
                    url: url,
                    acl: [
                        "role:USER:R",
                        "schoolRole:" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.school + "/EMPLOYEE:S"
                    ],
                    $meta: 'add'
                }]
        }
    });
}
/* This version had the bug that old images were not replaced.
One course at Uppsala contained 12 images.


export function setCourseImageOld(
  course: Course,
  origCourse: Course,
  host: ICourseEditorHost,
  url: string)
{
  if (!origCourse || !origCourse.imageId) {
    const imageId = createUUID();
    host.update({
      imageId: { $set: imageId },
      images: {
        $push: [{
          id: imageId,
          url,
          acl: course.isTemplate ? ["role:USER:R"] : ["role:USER:R", `schoolRole:${env.currentUser.school}/EMPLOYEE:S`],
          $meta: 'add'
        }]
      }
    });
  } else {
    // Update existing image:
    const imgIdx = course.images.findIndex(img => img.id === course.imageId);
    if (imgIdx >= 0) {
      const imageEntity = course.images[imgIdx];
      if (course.isTemplate) {
        // Templates: Update the template image content:
        host.update({
          images: {
            $splice: [[imgIdx, 1, {
              ...imageEntity,
              url,
              $meta: 'update'
            }]]
          }
        })
      } else {
        // Real courses: Replace with a new image
        const imageId = createUUID();
        host.update({
          imageId: { $set: imageId },
          images: {
            $splice: [[imgIdx, 1, {
              id: imageId,
              url,
              acl: [
                `role:USER:R`,
                `schoolRole:${env.currentUser.school}/EMPLOYEE:S`
              ],
              $meta: 'add'
            }]]
          }
        })
      }
    } else {
      showError(L`Kunde inte uppdatera bilden.`);
    }
  }
}
*/
var CourseBanner = function (props) {
    var title = props.title, isTemplate = props.isTemplate, host = props.host, course = props.course, origCourse = props.origCourse, backgroundImage = props.backgroundImage, activePage = props.activePage;
    var isAdmin = _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].currentUser.roles.some(function (role) { return role === "ADMIN"; });
    var menuItems = NonAdminMenuItems;
    if (isAdmin)
        menuItems = AdminMenuItems.concat(menuItems);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout sv-skip-spacer" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-12" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-script-portlet sv-portlet sv-skip-spacer" },
                backgroundImage && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("style", null, "\n        .pageHeader {\n          background-image: url('" + backgroundImage + "') !important;\n        }\n      "),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pageHeader", onDragOver: course && _utils__WEBPACK_IMPORTED_MODULE_3__["allowCopy"], onDrop: course && (function (ev) { return onDropImage(ev, host, course, origCourse); }) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, title)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "buttonsField" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "buttonsContainer" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'horizontalMenu' },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null, menuItems.map(function (item) { return ({
                                    item: item,
                                    isActive: activePage === item.name,
                                    callback: props.callbacks && props.callbacks[item.name],
                                    givenRoute: (props.routes && props.routes[item.name]),
                                    defaultRoute: item.route
                                }); }).filter(function (x) { return x.callback || x.defaultRoute || x.givenRoute; }).map(function (_a) {
                                    var item = _a.item, isActive = _a.isActive, callback = _a.callback, defaultRoute = _a.defaultRoute, givenRoute = _a.givenRoute;
                                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: item.name, className: isActive ? "activePage" : "", onClick: callback }, callback ?
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", null, item.text) :
                                        defaultRoute || givenRoute ?
                                            givenRoute || /^http[s]\:\/\//i.test(defaultRoute) ?
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: givenRoute || defaultRoute }, item.text) :
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: defaultRoute }, item.text) :
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", null, item.text));
                                })))))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseModuleList, _super);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var course, orderedModules, moduleIndex, newModuleIndex, currentModuleAtPosition, moduleOrder, origScrollPos, elemModule;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseModuleComponent, _super);
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
        var customizations = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (this.props.module.taskCustomizations || {}));
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
            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Hoppsan, blev lite knas. Fel ID: ", ""], ["Hoppsan, blev lite knas. Fel ID: ", ""])), 'Pa7Dq'));
        var taskIndex = this.props.course.tasks.findIndex(function (t) { return t.id === task.id; });
        if (taskIndex >= 0) {
            this.props.host.update({ tasks: { $splice: [[taskIndex, 1, task]] } });
        }
    };
    CourseModuleComponent.prototype.onTaskCustomized = function (taskId, customization) {
        var customizations = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (this.props.module.taskCustomizations || {}));
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
                    var copy = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, customizations);
                    delete copy[id];
                    return copy;
                }
            }
        });
    };
    CourseModuleComponent.prototype.onTaskReplaced = function (id, task) {
        var idxTask = this.props.module.taskIds.indexOf(id);
        if (idxTask < 0) {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["showError"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kunde inte spara uppgift. Felkod d72kQ"], ["Kunde inte spara uppgift. Felkod d72kQ"]))));
            return;
        }
        var moduleUpdates = {
            // Replace old id with new id:
            taskIds: { $splice: [[idxTask, 1, task.id]] },
            taskCustomizations: {
                $apply: function (customizations) {
                    var copy = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, customizations);
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
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-arrow-circle-up selectable", "aria-hidden": "true", onClick: function (e) { e.stopPropagation(); _this.props.onReorder(-1); } }),
                        " "),
                    moduleOrderedIndex < course.modules.length - 1 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-arrow-circle-down selectable", "aria-hidden": "true", onClick: function (e) { e.stopPropagation(); _this.props.onReorder(1); } }),
                        " "),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_5__["RemoveItem"], { title: "Ta bort modulen", style: { display: 'inline-block' }, onClick: function (e) { e.stopPropagation(); confirm(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ta bort modul ", "?"], ["Ta bort modul ", "?"])), module.name)) && host.update({ modules: { $splice: [[moduleIndex, 1]] } }); } })),
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
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-arrow-circle-up selectable", "aria-hidden": "true", onClick: function () { return _this.props.onReorder(-1); } }),
                        " "),
                    moduleOrderedIndex < course.modules.length - 1 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-arrow-circle-down selectable", "aria-hidden": "true", onClick: function () { return _this.props.onReorder(1); } }),
                        " "),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_5__["RemoveItem"], { title: "Ta bort modulen", style: { display: 'inline-block' }, onClick: function () { return confirm(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ta bort modul ", "?"], ["Ta bort modul ", "?"])), module.name)) && host.update({ modules: { $splice: [[moduleIndex, 1]] } }); } })),
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CreateNewCourse, _super);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var subjects, courses, courseOptions;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                        courseOptions = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
                            { id: "--", name: "--" }
                        ], courses, [
                            { id: "---", name: "---" },
                            { id: "custom", name: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Egen kurs"], ["Egen kurs"]))) }
                        ]);
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])("");
                        this.setState({ courseOptions: courseOptions });
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateNewCourse.prototype.onSelectCourse = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var derivedCourses, courseOptions, kedStandardOptions, teacherMade, courses;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                        courses = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](kedStandardOptions, [
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
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_banner__WEBPACK_IMPORTED_MODULE_2__["CourseBanner"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kursbyggaren"], ["Kursbyggaren"]))), activePage: "courseBuilder", routes: { feedback: this.props.feedbackUrl } }),
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
                                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_8__["TextInput"], { id: "customCourseName", autoFocus: true, label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kursens namn"], ["Kursens namn"]))), value: customCourseName || '', onChange: function (value) {
                                                            return _this.setState({ customCourseName: value });
                                                        } })),
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_10__["HorizontalItem"], null,
                                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_8__["TextInput"], { id: "customCourseCode", label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kurskod"], ["Kurskod"]))), size: 12, value: customCourseCode || '', onChange: function (customCourseCode) { return _this.setState({ customCourseCode: customCourseCode }); } }))),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_8__["TextInput"], { id: "customCoursePoints", label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Po\u00E4ng"], ["Po\u00E4ng"]))), size: 3, value: '' + (customCoursePoints || ''), onChange: function (value) {
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
var CONFIRM_NAVIGATE_MESSAGE = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Du har osparat data. V\u00E4lj avbryt och tryck CTRL+S om du vill spara f\u00F6rst."], ["Du har osparat data. V\u00E4lj avbryt och tryck CTRL+S om du vill spara f\u00F6rst."])));
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditCourse, _super);
    function EditCourse(props) {
        var _this = _super.call(this, props) || this;
        _this.state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, DEFAULT_STATE);
        _this.update = _this.update.bind(_this);
        _this.refDialog = _this.refDialog.bind(_this);
        _this.contentYPos = 0;
        _this.onKeyDown = _this.onKeyDown.bind(_this);
        _this.beforeUnload = _this.beforeUnload.bind(_this);
        _this.onClickPreventUnload = _this.onClickPreventUnload.bind(_this);
        _this.isSaving = false;
        _this.dialogs = [];
        if (props.view)
            _this.state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.state, { view: props.view });
        return _this;
    }
    EditCourse.prototype.setStatePromised = function (state) {
        return this._setState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ hasUnsavedData: true }, state));
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
                var modifiedCourse = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.course);
                modifiedCourse.tasks = filteredCourseTasks;
                state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { course: modifiedCourse });
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
            state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var template, course, mySchool;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                        course.templateChain = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](course.templateChain);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ogiltig parameter. customParams, id eller templateId m\u00E5ste anges"], ["Ogiltig parameter. customParams, id eller templateId m\u00E5ste anges"]))));
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype.loadExistingCourse = function (courseId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var course;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var courseSchool, parentId, courseId, classroomSync, children, br, children_1, children_1_1, childCourse;
            var e_1, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
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
                            for (children_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var course, syncWithClassroom;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        course = this.state.course;
                        syncWithClassroom = false;
                        //confirm should not be displayed in case the checkbox was saved and the feature flag is off
                        if (course.googleCreateClassrooms && !course.inSyncWithClassroom && _features_features__WEBPACK_IMPORTED_MODULE_17__["features"].studyGroups) {
                            syncWithClassroom = confirm(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Synkronisera kurs kurs med Classroom?"], ["Synkronisera kurs kurs med Classroom?"]))));
                        }
                        return [4 /*yield*/, syncWithClassroom];
                    case 1:
                        (_a.sent()) ? this.syncWithClassroomAndSave() : this.save();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCourse.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, course, origCourse, classroomSync, result, catcher_1, enableTeacherRights, origAccessList, modifiedAccessList, currentUser, err_1, errorMessage;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
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
                            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Classroom course could not be archived"], ["Classroom course could not be archived"]))));
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
                                !tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](origAccessList, modifiedAccessList).some(function (_a) {
                                    var email = _a.email, url = _a.url, access = _a.access;
                                    return (email || url) === currentUser.mail && // url is for backward compat! Has been renamed to email.
                                        (!access || // Backward compat. Was not possible to set access before!
                                            access === 'edit' || // Edit is fine
                                            access === 'full');
                                }))) {
                            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kursen kunde inte sparas. L\u00E4gg till dig sj\u00E4lv i listan p\u00E5 ansvariga l\u00E4rare"], ["Kursen kunde inte sparas. L\u00E4gg till dig sj\u00E4lv i listan p\u00E5 ansvariga l\u00E4rare"]))));
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
                        errorMessage = err_1 && err_1.message ? err_1.message : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_6 || (templateObject_6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ett ok\u00E4nt fel har intr\u00E4ffat..."], ["Ett ok\u00E4nt fel har intr\u00E4ffat..."])));
                        if (err_1) {
                            if (err_1.name === 'http409' || err_1.name === 'http412' || err_1.name === 'http404') {
                                // Conflict. Show a nicer error message:
                                errorMessage = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_7 || (templateObject_7 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kursen har redigerad av annan anv\u00E4ndare. Ladda om sidan och g\u00F6r om \u00E4ndrinarna."], ["Kursen har redigerad av annan anv\u00E4ndare. Ladda om sidan och g\u00F6r om \u00E4ndrinarna."])));
                            }
                            else if (err_1.name === 'http403') {
                                if (this.state.course.isTemplate)
                                    errorMessage = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_8 || (templateObject_8 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ingen beh\u00F6righet att spara kursmallen. Endast administrat\u00F6rer kan redigera kursmallar."], ["Ingen beh\u00F6righet att spara kursmallen. Endast administrat\u00F6rer kan redigera kursmallar."])));
                                else if (this.state.course.school)
                                    errorMessage = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_9 || (templateObject_9 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ingen beh\u00F6righet att spara kursen ", ". Kursen kan bara redigeras av anst\u00E4llda p\u00E5 ", ""], ["Ingen beh\u00F6righet att spara kursen ", ". Kursen kan bara redigeras av anst\u00E4llda p\u00E5 ", ""])), this.state.course.name, this.state.course.school);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, course, origCourse, classroomSync, fullSyncNeeded, syncResult, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, course = _a.course, origCourse = _a.origCourse;
                        return [4 /*yield*/, this.save()];
                    case 1:
                        _b.sent();
                        // if there is still unsaved data it means that an error encountered during save. 
                        // sync with google classroom will be canceled
                        if (this.state.hasUnsavedData) {
                            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_10 || (templateObject_10 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Synkronisering med Classroom skulle inte ske"], ["Synkronisering med Classroom skulle inte ske"]))));
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
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_11 || (templateObject_11 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Synkronisering med framg\u00E5ng"], ["Synkronisering med framg\u00E5ng"]))));
                        return [3 /*break*/, 6];
                    case 5:
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_12 || (templateObject_12 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Fel vid synkronisering med Classroom"], ["Fel vid synkronisering med Classroom"]))));
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, course, origCourse, origTemplate, doesAllTasksCoverAllRequirements, modifiedCourse, batch, orig, newCourseTasks, tags, isExistingCourse, schoolId, schoolId, schoolId, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, course = _a.course, origCourse = _a.origCourse, origTemplate = _a.origTemplate;
                        doesAllTasksCoverAllRequirements = Object(_business_logic__WEBPACK_IMPORTED_MODULE_11__["getUncoveredKnowledgeRequirements"])(course).length === 0;
                        !silentSave && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_13 || (templateObject_13 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Sparar..."], ["Sparar..."]))));
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
                                var updatedTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task);
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
                        modifiedCourse = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, modifiedCourse);
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
                    case 7: return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["default"].kedBackendClient.batch(batch.mutationRequests)];
                    case 8:
                        res = _b.sent();
                        !silentSave && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])(isExistingCourse ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_14 || (templateObject_14 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\u00C4ndringarna har sparats"], ["\u00C4ndringarna har sparats"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_15 || (templateObject_15 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kursen har skapats"], ["Kursen har skapats"]))));
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
                    case 9:
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
        var course = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state.course);
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
        var course = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state.course);
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
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ ref: function (dialog) { return _this.refDialog(dialog, i); } }, props)),
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_10__["RemoveItem"], { onClick: function () { return _this.closeDialog(); } }))));
                                }))))));
    };
    return EditCourse;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;


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
/* harmony import */ var _utility_components_observe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utility-components/observe */ "./src/components/utility-components/observe.tsx");
/* harmony import */ var _sub_components_select_study_groups__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../sub-components/select-study-groups */ "./src/components/course-builder/sub-components/select-study-groups.tsx");
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../features */ "./src/features/index.ts");
/* harmony import */ var _utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utility-components/form-field-text-input */ "./src/components/utility-components/form-field-text-input.tsx");
/* harmony import */ var _utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../utility-components/align-horizontal */ "./src/components/utility-components/align-horizontal.tsx");
/* harmony import */ var _utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../utility-components/horizontal-item */ "./src/components/utility-components/horizontal-item.tsx");























;
var InnerEditCourse = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InnerEditCourse, _super);
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
        var canDelete = !_features__WEBPACK_IMPORTED_MODULE_19__["features"].teacherRights || softAccessList.some(function (user) { return user.email === currentUser.mail && user.access === 'full'; });
        var displayStudyGroups = _features__WEBPACK_IMPORTED_MODULE_19__["features"].studyGroups;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout sv-skip-spacer" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-7" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                    course.isTemplate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, "Kursmall"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Kurs\u00F6vergripande"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_18__["OpenCloseBox"], { title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Kurs\u00F6vergripande"), headerOpen: true, inactivated: !_features__WEBPACK_IMPORTED_MODULE_19__["features"].cbCollapseBoxes },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                course.subjectId === "custom" && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, "Kursens namn och po\u00E4ng"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_align_horizontal__WEBPACK_IMPORTED_MODULE_21__["AlignHorizontal"], null,
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_22__["HorizontalItem"], null,
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_20__["TextInput"], { id: "customCourseName", autoFocus: true, label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kursens namn"], ["Kursens namn"]))), value: course.name, onChange: function (value) { return host.update({ name: { $set: value } }); } })),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_horizontal_item__WEBPACK_IMPORTED_MODULE_22__["HorizontalItem"], null,
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_20__["TextInput"], { id: "customCourseCode", label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kurskod"], ["Kurskod"]))), size: 12, value: course.code || '', onChange: function (courseCode) { return host.update({ code: { $set: courseCode } }); } }))),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_20__["TextInput"], { id: "customCoursePoints", label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Po\u00E4ng"], ["Po\u00E4ng"]))), size: 3, value: '' + (course.points || ''), onChange: function (value) {
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
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, "Skapa klassrum f\u00F6r kursen"))
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
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Studiegrupper"], ["Studiegrupper"])))),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_observe__WEBPACK_IMPORTED_MODULE_16__["Observe"], { fallback: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_8__["Spinner"], null), errorFallback: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kunde inte ladda studiegrupper fr\u00E5n EDS"], ["Kunde inte ladda studiegrupper fr\u00E5n EDS"]))) },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_select_study_groups__WEBPACK_IMPORTED_MODULE_17__["SelectStudyGroups"], { school: course.school, courseCode: course.code, selectedStudyGroups: course.studyGroups || [], onUpdate: function (studyGroups) { return host.update({ studyGroups: { $set: studyGroups } }); }, placeholder: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_6 || (templateObject_6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Koppla studiegrupper till kursen..."], ["Koppla studiegrupper till kursen..."]))) })))))),
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
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-exclamation-triangle", "aria-hidden": "true" })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Modulernas kunskapskrav t\u00E4cker inte skolverkets krav f\u00F6r denna kurs."))),
                        sanityCheckWarnings.map(function (warning) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: warning, className: "markedRed warning-box" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "warningFlag" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-exclamation-triangle", "aria-hidden": "true" })),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, warning)); }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-large", onClick: function () { return host.confirmSaveAndSync(); } }, "Spara"),
                        course.active ?
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-info btn-large", onClick: function () { return host.inactivateAndSave(); } }, "Inaktivera och spara") :
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-info btn-large", onClick: function () { return host.activateAndSave(); } }, "Aktivera och spara")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                        canDelete && !course.isTemplate && (origCourse ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-warning btn-large pull-right", onClick: function () {
                                if (confirm(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["L"])(templateObject_7 || (templateObject_7 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Bekr\u00E4fta borttagning av kursen \"", " - ", "\" f\u00F6r skolan ", "\n\nKursen kommar att raderas helt!\n\n\u00C4r du s\u00E4ker?"], ["Bekr\u00E4fta borttagning av kursen \"", " - ", "\" f\u00F6r skolan ", "\\n\\nKursen kommar att raderas helt!\\n\\n\u00C4r du s\u00E4ker?"])), course.name, course.description, course.school)))
                                    host.deleteCourse().catch(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["showError"]);
                            } }, "Ta bort kurs") : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn btn-warning btn-large pull-right", onClick: function () { return history.go(-1); } }, "Avbryt")),
                        course.googleCreateClassrooms && displayStudyGroups &&
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

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseBuilder, _super);
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
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_schools_edit_school__WEBPACK_IMPORTED_MODULE_10__["EditSchool"], { id: match.params.id, title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Editera skola"], ["Editera skola"]))), feedbackUrl: _this.props.feedbackUrl });
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

/***/ "./src/components/course-builder/knowledge-matrix-partial-utils.ts":
/*!*************************************************************************!*\
  !*** ./src/components/course-builder/knowledge-matrix-partial-utils.ts ***!
  \*************************************************************************/
/*! exports provided: getRequirmentSentences, getSavedSentences, allRequirementSentecesMarked, getPartialContentDefaultView, isPartialCoveredRequirment, getCoveredSenteces, getSortedRequirments, getMigrationTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequirmentSentences", function() { return getRequirmentSentences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedSentences", function() { return getSavedSentences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allRequirementSentecesMarked", function() { return allRequirementSentecesMarked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPartialContentDefaultView", function() { return getPartialContentDefaultView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPartialCoveredRequirment", function() { return isPartialCoveredRequirment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoveredSenteces", function() { return getCoveredSenteces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortedRequirments", function() { return getSortedRequirments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMigrationTitle", function() { return getMigrationTitle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");


//get sentences by requirement
function getRequirmentSentences(requirement) {
    return requirement.split(".").filter(function (e) { return e; });
}
//retrieve sentences
function getSavedSentences(partialRequirments) {
    return partialRequirments.map(function (obj) {
        return obj.trim();
    }) || [];
}
//check all requirements are marked
function allRequirementSentecesMarked(requirementName, partialRequirements) {
    var textSentences = getRequirmentSentences(requirementName);
    return partialRequirements && partialRequirements.length === textSentences.length;
    ;
}
//get the partial saved sentences for the default view
function getPartialContentDefaultView(requirement, partialRequirments, alreadyCoveredPartialRequirments, skipNotMarked) {
    var resultedHtml = requirement.name;
    var textSentences = getRequirmentSentences(requirement.name);
    var rowRequirments = partialRequirments && getSavedSentences(partialRequirments);
    var allReqCoveredSentence = alreadyCoveredPartialRequirments && getCoveredSenteces(alreadyCoveredPartialRequirments, requirement.id);
    var allReqSentencesMarked = allRequirementSentecesMarked(requirement.name, rowRequirments);
    textSentences.forEach(function (sentence) {
        //trimm current sentence
        var trimmedSentence = sentence.trim();
        var fullSentence = sentence + ".";
        if (rowRequirments && rowRequirments.includes(trimmedSentence) && !allReqSentencesMarked) {
            resultedHtml = resultedHtml.replace(fullSentence, "<span class=" + "markedGreen" + ">" + fullSentence + "</span>");
        }
        else {
            var coveredSentece = allReqCoveredSentence && allReqCoveredSentence.includes(trimmedSentence);
            if (coveredSentece) {
                resultedHtml = resultedHtml.replace(fullSentence, "<span>" + fullSentence + "</span>");
            }
            else if (!allReqSentencesMarked && allReqCoveredSentence && allReqCoveredSentence.length > 0) {
                resultedHtml = resultedHtml.replace(fullSentence, "<span class=" + "markedRed" + ">" + fullSentence + "</span>");
            }
        }
    });
    return resultedHtml;
}
//check the current requirement is already covered
function isPartialCoveredRequirment(requirement, alreadyCoveredPartialRequirments) {
    var textSentences = getRequirmentSentences(requirement.name);
    var result = false;
    for (var i = 0; i < textSentences.length; i++) {
        var trimmedSentence = textSentences[i].trim();
        var allCoveredSentenceReq = alreadyCoveredPartialRequirments && getCoveredSenteces(alreadyCoveredPartialRequirments, requirement.id);
        var coveredSentece = allCoveredSentenceReq && allCoveredSentenceReq.includes(trimmedSentence);
        if (coveredSentece) {
            result = true;
            break;
        }
    }
    return result;
}
//compute the covered senteces excluding the current requirement
function getCoveredSenteces(allReq, requirementId) {
    var resultArray = [];
    allReq.forEach(function (obj) {
        var assignedReq = Object.assign([], Object.keys(obj).filter(function (reqId) { return reqId == requirementId; }).map(function (k) { return obj[k].map(function (elem) { return elem.trim(); }); }));
        resultArray.push.apply(resultArray, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](assignedReq));
    });
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["flatten"])(resultArray);
}
//sort the selected sentences by the order of the appearance in the requirement
function getSortedRequirments(textSentences, partialRequirments) {
    var output = [];
    var indexedSentences = textSentences.map(function (e, i) { return { ind: i, val: e }; });
    output = indexedSentences.filter(function (s) { return partialRequirments.includes(s.val); });
    return output ? output.sort(function (x, y) { return x.ind > y.ind ? 1 : -1; }).map(function (s) { return s.val; }) : [];
}
function getMigrationTitle(isMigrated, markMode) {
    return isMigrated ?
        markMode ?
            "Skolverket har uppdaterat textens formulering. Du kan granska \u00E4ndringen genom att f\u00E4lla ut varningsboxen till h\u00F6ger, med titel \"Uppdaterade formuleringar fr\u00E5n Skolverket\"" :
            "Skolverket har uppdaterat textens formulering, men detta har \u00E4nnu inte granskats av uppgiftens redigeringsbeh\u00F6rige" :
        undefined;
}


/***/ }),

/***/ "./src/components/course-builder/modal-pages/edit-resource.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/course-builder/modal-pages/edit-resource.tsx ***!
  \*********************************************************************/
/*! exports provided: EditResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditResource", function() { return EditResource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var valid_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! valid-url */ "./node_modules/valid-url/index.js");
/* harmony import */ var valid_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(valid_url__WEBPACK_IMPORTED_MODULE_4__);





var EditResource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditResource, _super);
    function EditResource(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.props.resource || { name: '', url: '' };
        return _this;
    }
    EditResource.prototype.save = function () {
        var resource = this.state;
        if (!valid_url__WEBPACK_IMPORTED_MODULE_4___default.a.isUri(resource.url))
            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Angiven URL '", "' \u00E4r ogiltig. Ska b\u00F6rja med exempelvis http:, https: eller mailto:"], ["Angiven URL '", "' \u00E4r ogiltig. Ska b\u00F6rja med exempelvis http:, https: eller mailto:"])), resource.url));
        this.props.onSave(resource);
    };
    EditResource.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, onSave = _a.onSave, onDelete = _a.onDelete;
        var resource = this.state;
        var isValidUrl = valid_url__WEBPACK_IMPORTED_MODULE_4___default.a.isUri(this.state.url);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, title),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, "Namn:"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", autoFocus: true, tabIndex: 1, size: 50, value: resource.name, onChange: function (ev) { return _this.setState({ name: ev.target.value }); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, "L\u00E4nk:"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top " },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", tabIndex: 1, size: 50, value: resource.url, onChange: function (ev) { return _this.setState({ url: ev.target.value }); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                (resource.createdDate || resource.modifiedDate) && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    resource.createdDate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                        "Resursen/L\u00E4nken skapades ",
                        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["dtFormat"])(resource.createdDate),
                        " av ",
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, resource.createdBy.name),
                        "."),
                    resource.modifiedDate && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                        "Resursen/L\u00E4nken redigerades senast ",
                        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["dtFormat"])(resource.modifiedDate),
                        " av ",
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, resource.modifiedBy.name),
                        "."),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
                onDelete && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { tabIndex: 2, className: "btn btn-warning btn-large pull-right", onClick: function () { return onDelete(); } }, "Ta bort resurs/l\u00E4nk"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { tabIndex: 1, className: "btn btn-large" + (isValidUrl ? "" : " btn-inactive"), onClick: isValidUrl && (function () { return onSave(resource); }) }, "Spara")));
    };
    return EditResource;
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
                        return editTask.updateTaskOrCustomization("additionalUploads", { $set: task.additionalUploads == null ? false : !task.additionalUploads });
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




















var EditTask = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditTask, _super);
    function EditTask(props) {
        var _this = _super.call(this, props) || this;
        _this.features = new _features__WEBPACK_IMPORTED_MODULE_12__["Features"]();
        var writeAccess = !props.task || Object(_access_control__WEBPACK_IMPORTED_MODULE_5__["hasWriteAccess"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_10__["default"].currentUser, props.task);
        _this.state = {
            title: props.task ?
                writeAccess ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Redigera uppgift till \"", "\""], ["Redigera uppgift till \"", "\""])), props.module.name) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Visa uppgift till \"", "\""], ["Visa uppgift till \"", "\""])), props.module.name) :
                props.searchMode ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["S\u00F6k ny uppgift till \"", "\""], ["S\u00F6k ny uppgift till \"", "\""])), props.module.name) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["L\u00E4gg till egen uppgift till \"", "\""], ["L\u00E4gg till egen uppgift till \"", "\""])), props.module.name),
            futureAbilitiesOpen: false,
            taskCustomization: props.taskCustomization || {},
            task: props.task ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $meta: props.task.$meta || 'update' }, props.task) : props.searchMode ? null :
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var setStatePromise;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var allTasksForSubject, searchResult;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](ability ?
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
        var updatedTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task);
        updatedTask[collectionProp] = updatedCollection;
        // Clear migratedTexts from task.
        // First deep clone:
        if (task && task.migratedTexts) {
            updatedTask.migratedTexts = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task.migratedTexts);
            if (task.migratedTexts[collectionProp]) {
                updatedTask.migratedTexts[collectionProp] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task.migratedTexts[collectionProp]);
                // Delete the id within the deep clone:
                delete updatedTask.migratedTexts[collectionProp][id];
            }
        }
        this.setStatePromised({
            task: updatedTask
        });
    };
    EditTask.prototype.updateTemplateView = function (templateFile) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var drive, tFileId_1, file, tFile;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, task, taskCustomization, writeAccess;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, task = _a.task, taskCustomization = _a.taskCustomization;
                        writeAccess = Object(_access_control__WEBPACK_IMPORTED_MODULE_5__["hasWriteAccess"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_10__["default"].currentUser, task);
                        if (!writeAccess) return [3 /*break*/, 5];
                        if (task.sendToUrkund == undefined)
                            task.sendToUrkund = true; // sendToUrkund is default so setting this here, perhaps there is a better place for this!
                        if (!task.url && !task.content)
                            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Uppgiften m\u00E5ste antingen ha en URL eller ett inneh\u00E5ll"], ["Uppgiften m\u00E5ste antingen ha en URL eller ett inneh\u00E5ll"]))));
                        if (task.url && !valid_url__WEBPACK_IMPORTED_MODULE_7___default.a.isUri(task.url))
                            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_6 || (templateObject_6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Angiven URL '", "' \u00E4r ogiltig. Den ska b\u00F6rja med http: eller https:"], ["Angiven URL '", "' \u00E4r ogiltig. Den ska b\u00F6rja med http: eller https:"])), task.url));
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
                            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_7 || (templateObject_7 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Du saknar beh\u00F6righet f\u00F6r att spara nya versioner av uppgifter i kursmallen"], ["Du saknar beh\u00F6righet f\u00F6r att spara nya versioner av uppgifter i kursmallen"]))));
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var taskCopy;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskCopy = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state.task, (this.state.taskCustomization || {}), { id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["createUUID"])(), acl: this.props.course.isTemplate ? [
                                "role:USER:R" // (OK to keep but this check might become unnescesary if we totally remove the possibility to edit templates) Template tasks should not be possible to modify. (An ADMIN could belong to a school! Other non-admins at that school should not be able to edit it)
                            ] : [
                                "role:USER:R",
                                "schoolRole:" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_10__["default"].currentUser.school + "/EMPLOYEE:S"
                            ], school: this.props.course.school });
                        taskCopy.$meta = 'add';
                        return [4 /*yield*/, this.setStatePromised({
                                task: taskCopy,
                                title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["L"])(templateObject_8 || (templateObject_8 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Redigera kopierad uppgift till \"", "\""], ["Redigera kopierad uppgift till \"", "\""])), this.props.module.name),
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
            var newTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task);
            newTask[taskProp] = react_addons_update__WEBPACK_IMPORTED_MODULE_4___default()(task[taskProp], updates);
            this.setStatePromised({ task: newTask });
        }
        else {
            var newCustomization = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, taskCustomization);
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
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { dangerouslySetInnerHTML: { __html: this.state.previewTaskContent } })
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
                        var newTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task);
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
            var newTask = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task);
            newTask.content = html;
            editTask.setState({ task: newTask });
        } });
}


/***/ }),

/***/ "./src/components/course-builder/modal-pages/edit-task/task-migration-box.tsx":
/*!************************************************************************************!*\
  !*** ./src/components/course-builder/modal-pages/edit-task/task-migration-box.tsx ***!
  \************************************************************************************/
/*! exports provided: TaskMigrationBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskMigrationBox", function() { return TaskMigrationBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");



var TaskMigrationBox = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TaskMigrationBox, _super);
    function TaskMigrationBox(props) {
        return _super.call(this, props) || this;
    }
    TaskMigrationBox.prototype.render = function () {
        var _a = this.props, task = _a.task, course = _a.course, updateLink = _a.updateLink;
        if (!task.migratedTexts)
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, "\u00A0");
        var _b = task.migratedTexts, abilities = _b.abilities, centralContent = _b.centralContent, knowledgeRequirements = _b.knowledgeRequirements;
        var krs = Object.keys(knowledgeRequirements || {}).map(function (id) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, course.knowledgeRequirements.find(function (t) { return t.id === id; }), knowledgeRequirements[id])); }); //.filter(({name}) => !!name);
        var krA = { title: "Uppdaterat kunskapskrav för betyget A", type: "knowledgeRequirements", items: krs.filter(function (kr) { return kr.gradeStep === 'A'; }) };
        var krC = { title: "Uppdaterat Kunskapskrav för betyget C", type: "knowledgeRequirements", items: krs.filter(function (kr) { return kr.gradeStep === 'C'; }) };
        var krE = { title: "Uppdaterat kunskapskrav för betyget E", type: "knowledgeRequirements", items: krs.filter(function (kr) { return kr.gradeStep === 'E'; }) };
        var abs = { title: "Uppdaterade förmågor", type: "abilities", items: Object.keys(abilities || {}).map(function (id) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, course.abilities.find(function (t) { return t.id === id; }), abilities[id])); }) }; //.filter(({name}) => !!name)};
        var ccs = { title: "Uppdaterat centralt innehåll", type: "centralContent", items: Object.keys(centralContent || {}).map(function (id) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, course.centralContent.find(function (cc) { return cc.id == id; }), centralContent[id])); }) }; //.filter(({name}) => !!name)};
        var tablesToShow = [krA, krC, krE, ccs, abs].filter(function (boxInfo) { return boxInfo.items.length > 0; });
        if (tablesToShow.length === 0)
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, "\u00A0");
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__["OpenCloseBox"], { className: "larger", title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "warningFlag" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-exclamation-triangle", "aria-hidden": "true" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Uppdaterade formuleringar fr\u00E5n Skolverket")) }, tablesToShow.map(function (_a) {
            var title = _a.title, type = _a.type, items = _a.items;
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: title },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, title),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { style: { width: "40%" } }, "Ursprunglig formulering"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { style: { width: "40%" } }, "Skolverkets nya formulering"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "T\u00E4cker uppgiften den nya formuleringen?"))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, items.map(function (item) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: item.id },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { dangerouslySetInnerHTML: { __html: item.oldText } }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { dangerouslySetInnerHTML: { __html: item.name } }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: function () { return updateLink(item.id, true); } }, "Ja - beh\u00E5ll kopplingen"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: function () { return updateLink(item.id, false); } }, "Nej - ta bort kopplingen"))); }))));
        })));
    };
    return TaskMigrationBox;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditWorkflowLink, _super);
    function EditWorkflowLink(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { url: _this.props.url || '' };
        return _this;
    }
    EditWorkflowLink.prototype.save = function () {
        var url = this.state.url;
        if (!valid_url__WEBPACK_IMPORTED_MODULE_3___default.a.isUri(url))
            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Angiven URL '", "' \u00E4r ogiltig. Ska b\u00F6rja med http: eller https:"], ["Angiven URL '", "' \u00E4r ogiltig. Ska b\u00F6rja med http: eller https:"])), url));
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

/***/ "./src/components/course-builder/schools/edit-school.tsx":
/*!***************************************************************!*\
  !*** ./src/components/course-builder/schools/edit-school.tsx ***!
  \***************************************************************/
/*! exports provided: EditSchool, EditSchoolNoBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSchool", function() { return EditSchool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSchoolNoBanner", function() { return EditSchoolNoBanner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _courses_course_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses/course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");







var EditSchool = function (props) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { outline: 0 } },
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_course_banner__WEBPACK_IMPORTED_MODULE_2__["CourseBanner"], { title: "Skolor", activePage: "schools", callbacks: { schools: function () { return location.hash = "#/schools"; } }, routes: { feedback: props.feedbackUrl } }),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](EditSchoolNoBanner, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props))); };
var EditSchoolNoBanner = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditSchoolNoBanner, _super);
    function EditSchoolNoBanner(props) {
        var _this = _super.call(this, props) || this;
        _this.state = null;
        return _this;
    }
    EditSchoolNoBanner.prototype.componentDidMount = function () {
        this.load().catch(function (err) { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])(err); });
    };
    EditSchoolNoBanner.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id, school;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.props.id) return [3 /*break*/, 2];
                        id = this.props.id;
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.get("schools", id)];
                    case 1:
                        school = _a.sent();
                        this.origSchool = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, school);
                        this.setState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, school));
                        return [3 /*break*/, 3];
                    case 2:
                        // No id, create new instead.
                        this.setState({
                            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
                            officialBranchId: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
                            isGymnasium: this.props.type === 'gymnasium',
                            isPrimarySchool: this.props.type === 'primary'
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EditSchoolNoBanner.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var r, school;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = new kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["BatchRunner"]();
                        school = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state, { tags: (this.state.tags || [])
                                .filter(function (tag) { return ["primary", "gymnasium"].indexOf(tag) < 0; }) });
                        if (school.isPrimarySchool)
                            school.tags.push("primary");
                        if (school.isGymnasium)
                            school.tags.push("gymnasium");
                        if (!(school.isGymnasium || school.isPrimarySchool)) {
                            throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Skolan m\u00E5ste antingen vara gymnasium eller grundskola"], ["Skolan m\u00E5ste antingen vara gymnasium eller grundskola"]))));
                        }
                        if (!this.origSchool) {
                            school.acl = ["role:USER:R"];
                            school.acl.push(new kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["DocumentAccess"]("schoolRole", school.name + "/EMPLOYEE", "W").toString());
                            r.add("schools", school);
                            this.addSchoolBranch(school, r);
                        }
                        else if (this.origSchool.name !== this.state.name) {
                            throw new Error("Skolans namn får inte ändras. Kontakta Vemendo AB.");
                        }
                        else {
                            if (!school.officialBranchId) {
                                school.officialBranchId = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])();
                                this.addSchoolBranch(school, r);
                            }
                            r.put("schools", school);
                        }
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.batch(r.mutationRequests)];
                    case 1:
                        _a.sent();
                        location.hash = "#/schools";
                        return [2 /*return*/];
                }
            });
        });
    };
    EditSchoolNoBanner.prototype.addSchoolBranch = function (school, r) {
        var branch = {
            id: school.officialBranchId,
            name: school.name,
            schoolId: school.id,
            acl: [
                "role:USER:R",
                new kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["DocumentAccess"]("schoolRole", school.name + "/EMPLOYEE", "W").toString()
            ]
        };
        r.add("branches", branch);
    };
    EditSchoolNoBanner.prototype.deleteSchool = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var schoolBranch, br_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(prompt(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\u00C4r du s\u00E4ker p\u00E5 att ta bort skolan \"", "\"? Skriv skolans exakta namn f\u00F6r att bekr\u00E4fta"], ["\u00C4r du s\u00E4ker p\u00E5 att ta bort skolan \"", "\"? Skriv skolans exakta namn f\u00F6r att bekr\u00E4fta"])), this.state.name)) === this.state.name)) return [3 /*break*/, 3];
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.list("branches", {
                                ids: [this.state.officialBranchId],
                                include: "approvedChildren",
                                flags: ["includeIdsOnly"]
                            })];
                    case 1:
                        schoolBranch = _a.sent();
                        br_1 = new kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["BatchRunner"]();
                        br_1.delete("schools", this.state.id);
                        schoolBranch[0].approvedChildren.forEach(function (_a) {
                            var id = _a.id;
                            br_1.delete("branches", id);
                        });
                        br_1.delete("branches", this.state.officialBranchId);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.batch(br_1.mutationRequests)];
                    case 2:
                        _a.sent();
                        location.hash = "#/schools";
                        return [3 /*break*/, 4];
                    case 3:
                        alert("Skolan togs inte bort eftersom det namn du angav inte stämmer.");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EditSchoolNoBanner.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, id = _a.id;
        var editExisting = !!id;
        var school = this.state;
        var origSchool = this.origSchool;
        var isAdmin = _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser.roles.some(function (role) { return role === "ADMIN"; });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pagecontent sv-layout sv-spacer-20pxvt sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, title),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, "Namn:"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", autoFocus: !school || !school.name, disabled: !isAdmin || editExisting, tabIndex: 1, size: 50, value: school ? school.name : "", onChange: function (ev) { return _this.setState({ name: ev.target.value }); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, "Visningsnamn:"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", autoFocus: school && !school.displayName, disabled: !isAdmin, tabIndex: 1, size: 50, value: school ? school.displayName : "", onChange: function (ev) { return _this.setState({ displayName: ev.target.value }); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" })),
                school && school.isGymnasium ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, "EDS namn (gymnasium):"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", disabled: !isAdmin, tabIndex: 1, size: 50, value: school ? school.edsSchoolNameGymn : "", onChange: function (ev) { return _this.setState({ edsSchoolNameGymn: ev.target.value }); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" })) : null,
                school && school.isPrimarySchool ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, "EDS namn (grundskola):"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", disabled: !isAdmin, tabIndex: 1, size: 50, value: school ? school.edsSchoolNamePrim : "", onChange: function (ev) { return _this.setState({ edsSchoolNamePrim: ev.target.value }); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" })) : null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, "Typ:"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "checkbox", name: "schoolTypePrimary", disabled: !isAdmin, checked: school && school.isPrimarySchool, tabIndex: 1, value: "primary", onChange: function (ev) { return _this.setState({ isPrimarySchool: ev.target.checked }); } }),
                        "\u00A0Grundskola"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "checkbox", name: "schoolTypeGymnasium", disabled: !isAdmin, checked: school && school.isGymnasium, tabIndex: 1, value: "gymnasium", onChange: function (ev) { return _this.setState({ isGymnasium: ev.target.checked }); } }),
                        "\u00A0Gymnasium"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                isAdmin && editExisting && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { tabIndex: 2, className: "btn btn-warning btn-large pull-right", onClick: function () {
                        return _this.deleteSchool().catch(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"]);
                    } }, "Ta bort skola"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pull-right" }, "\u00A0"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], { className: "btn btn-warning btn-large pull-right", to: "/schools" }, "Avbryt"),
                isAdmin && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { tabIndex: 1, className: "btn btn-large", onClick: function () {
                        if (origSchool && origSchool.name !== school.name) {
                            if (!confirm(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\u00C4r du s\u00E4ker p\u00E5 att du vill d\u00F6pa om skolan? Detta p\u00E5verkar portalens funktion f\u00F6r l\u00E4rare och elever som tillh\u00F6r skolan. Namnet m\u00E5ste st\u00E4mma exakt \u00F6verens med namngivningen av skolan p\u00E5 anv\u00E4ndarobjekten.\n\nDet som h\u00E4nder annars \u00E4r att elever och l\u00E4rare p\u00E5 skolan inte l\u00E4ngre hittar n\u00E5gra kurser.\n\nBlir det fel kan du dock alltid bara d\u00F6pa tillbaka skolans namn."], ["\u00C4r du s\u00E4ker p\u00E5 att du vill d\u00F6pa om skolan? Detta p\u00E5verkar portalens funktion f\u00F6r l\u00E4rare och elever som tillh\u00F6r skolan. Namnet m\u00E5ste st\u00E4mma exakt \u00F6verens med namngivningen av skolan p\u00E5 anv\u00E4ndarobjekten.\n\nDet som h\u00E4nder annars \u00E4r att elever och l\u00E4rare p\u00E5 skolan inte l\u00E4ngre hittar n\u00E5gra kurser.\n\nBlir det fel kan du dock alltid bara d\u00F6pa tillbaka skolans namn."]))))) {
                                return;
                            }
                        }
                        _this.save().catch(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"]);
                    } }, "Spara")));
    };
    return EditSchoolNoBanner;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/course-builder/schools/editable-school-list.tsx":
/*!************************************************************************!*\
  !*** ./src/components/course-builder/schools/editable-school-list.tsx ***!
  \************************************************************************/
/*! exports provided: EditableSchoolList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableSchoolList", function() { return EditableSchoolList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _sub_components_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");







var EditableSchoolList = function (props) {
    var schools = props.schools, viewCourseUrl = props.viewCourseUrl;
    var isAdmin = _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].currentUser.roles.some(function (role) { return role === "ADMIN"; });
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "editable-school-list" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, schools ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, schools.map(function (school) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { className: "align-horizontal", key: school.id },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], { className: "editItem", to: "/schools/" + school.id + "/edit" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, school.name)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { style: { cursor: 'pointer' }, onClick: function () { return Object(_access_control__WEBPACK_IMPORTED_MODULE_5__["actAs"])({ role: "EMPLOYEE", school: school.name }); } }, "Agera som l\u00E4rare p\u00E5 denna skola"))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { style: { cursor: 'pointer' }, onClick: function () { return Object(_access_control__WEBPACK_IMPORTED_MODULE_5__["actAs"])({ role: "STUDENT", school: school.name, url: viewCourseUrl }); } }, "Agera som elev p\u00E5 denna skola"))));
            }))) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_6__["Spinner"], null),
            "V.g. v\u00E4nta medan skolor laddas")),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
        schools && isAdmin && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], { to: "/schools/new/" + props.type, className: "btn" }, props.type == 'gymnasium' ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["L\u00E4gg till gymnasieskola"], ["L\u00E4gg till gymnasieskola"]))) :
            props.type == 'primary' ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["L\u00E4gg till grundskola"], ["L\u00E4gg till grundskola"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["L\u00E4gg till skola"], ["L\u00E4gg till skola"])))));
};
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/course-builder/schools/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/course-builder/schools/index.tsx ***!
  \*********************************************************/
/*! exports provided: Schools, SchoolsWithoutBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schools", function() { return Schools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsWithoutBanner", function() { return SchoolsWithoutBanner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _courses_course_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses/course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _editable_school_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editable-school-list */ "./src/components/course-builder/schools/editable-school-list.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _sub_components_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");







var Schools = function (props) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { outline: 0 } },
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_course_banner__WEBPACK_IMPORTED_MODULE_2__["CourseBanner"], { title: "Skolor", activePage: "schools", routes: { feedback: props.feedbackUrl } }),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SchoolsWithoutBanner, { viewCourseUrl: props.viewCourseUrl })); };
var SchoolsWithoutBanner = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SchoolsWithoutBanner, _super);
    function SchoolsWithoutBanner(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            schools: null
        };
        return _this;
    }
    SchoolsWithoutBanner.prototype.componentDidMount = function () {
        this.load().catch(function (err) { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["showError"])(err.message || err); });
    };
    SchoolsWithoutBanner.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var schools;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].kedBackendClient.list("schools")];
                    case 1:
                        schools = _a.sent();
                        this.setState({ schools: schools });
                        return [2 /*return*/];
                }
            });
        });
    };
    SchoolsWithoutBanner.prototype.render = function () {
        var schools = this.state.schools;
        schools && schools.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["compareProp"])("name"));
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-row sv-layout" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "pagecontent sv-layout sv-spacer-20pxvt sv-skip-spacer" }, schools ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Gymnasieskolor"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editable_school_list__WEBPACK_IMPORTED_MODULE_4__["EditableSchoolList"], { schools: schools.filter(function (school) { return school.isGymnasium; }), viewCourseUrl: this.props.viewCourseUrl, type: "gymnasium" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "Grundskolor"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_editable_school_list__WEBPACK_IMPORTED_MODULE_4__["EditableSchoolList"], { schools: schools.filter(function (school) { return school.isPrimarySchool; }), viewCourseUrl: this.props.viewCourseUrl, type: "primary" }))) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_6__["Spinner"], null)));
    };
    return SchoolsWithoutBanner;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



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




var NewSchool = function (props) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_edit_school__WEBPACK_IMPORTED_MODULE_2__["EditSchool"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["L\u00E4gg till skola"], ["L\u00E4gg till skola"]))), type: props.type, feedbackUrl: props.feedbackUrl }); };
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_pages_edit_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-pages/edit-resource */ "./src/components/course-builder/modal-pages/edit-resource.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _apis_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../apis/buttons */ "./src/apis/buttons.tsx");
/* harmony import */ var _apis_google_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../apis/google-picker */ "./src/apis/google-picker.ts");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../features */ "./src/features/index.ts");








var EditableResourceList = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditableResourceList, _super);
    function EditableResourceList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    EditableResourceList.prototype.render = function () {
        var _a = this.props, host = _a.host, onUpdate = _a.onUpdate, resources = _a.resources;
        var showGooglePicker = _features__WEBPACK_IMPORTED_MODULE_7__["features"].picker;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, resources.map(function (resource, idx) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal", key: idx },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "editItem", onClick: function () { return host.openDialog({
                                Component: _modal_pages_edit_resource__WEBPACK_IMPORTED_MODULE_2__["EditResource"],
                                props: {
                                    title: "Redigera resurs",
                                    resource: resource,
                                    onSave: function (editedResource) {
                                        var updatedResource = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["updateModificationAndCreationStamps"])(editedResource, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser);
                                        onUpdate({ $splice: [[idx, 1, updatedResource]] });
                                        host.closeDialog();
                                    },
                                    onDelete: function () {
                                        onUpdate({ $splice: [[idx, 1]] });
                                        host.closeDialog();
                                    }
                                }
                            }); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: resource.url, target: "_blank" }, resource.name)));
            })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontal-align spaced" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontaItem top" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn", onClick: function () { return host.openDialog({
                            Component: _modal_pages_edit_resource__WEBPACK_IMPORTED_MODULE_2__["EditResource"],
                            props: {
                                title: "Lägg till resurs",
                                onSave: function (newResource) {
                                    var updatedResource = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["updateModificationAndCreationStamps"])(newResource, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser);
                                    onUpdate({ $push: [updatedResource] });
                                    host.closeDialog();
                                }
                            }
                        }); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-paperclip", "aria-hidden": true }),
                        " L\u00E4gg till resurs")),
                showGooglePicker && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontaItem top" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_apis_buttons__WEBPACK_IMPORTED_MODULE_5__["DriveButton"], { label: "L\u00E4gg till fr\u00E5n Drive", action: function () {
                            var picker = new _apis_google_picker__WEBPACK_IMPORTED_MODULE_6__["GooglePicker"]({ upload: true, multiple: true });
                            picker.show().then(function (files) {
                                files.forEach(function (file) {
                                    var newResource = { url: file.url, name: file.name };
                                    var updatedResource = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["updateModificationAndCreationStamps"])(newResource, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser);
                                    onUpdate({ $push: [updatedResource] });
                                });
                            });
                        } }))));
    };
    return EditableResourceList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditableTaskList, _super);
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
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-search", "aria-hidden": true }),
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
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-plus", "aria-hidden": true }),
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
/* harmony import */ var _utility_components_observe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility-components/observe */ "./src/components/utility-components/observe.tsx");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../features */ "./src/features/index.ts");








function EditableTeacherList(_a) {
    var school = _a.school, teachers = _a.teachers, onUpdate = _a.onUpdate;
    var nameElem = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
    var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2), selectingTeacher = _b[0], setSelectingTeacher = _b[1];
    var displayTeacherRights = _features__WEBPACK_IMPORTED_MODULE_7__["features"].teacherRights;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "teachers-list" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Ansvariga l\u00E4rare"),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", { style: { width: "100%" } },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, teachers.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { style: { width: "15%" } }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Namn"], ["Namn"])))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["E-postadress"], ["E-postadress"])))),
                displayTeacherRights && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { style: { width: "24px" } }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Beh\u00F6righet"], ["Beh\u00F6righet"])))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { style: { width: "24px" } }))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, teachers.map(function (teacher, idx) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: idx },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: "text", ref: nameElem, value: teacher.name, autoFocus: !teacher.name && idx > 0, onChange: function (ev) {
                                if (ev.target.value || teacher.email) {
                                    // Update row
                                    var clone = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](teachers);
                                    clone[idx] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, teacher, { name: ev.target.value });
                                    onUpdate(clone);
                                }
                                else {
                                    // Remove row
                                    onUpdate(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](teachers.slice(0, idx), teachers.slice(idx + 1)));
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
                                var editedTeacher = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, teacher, { url: ev.target.value, email: ev.target.value });
                                if (ev.target.value || teacher.name) {
                                    // Update row
                                    var clone = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](teachers);
                                    clone[idx] = editedTeacher;
                                    onUpdate(clone);
                                }
                                else {
                                    // Remove row
                                    onUpdate(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](teachers.slice(0, idx), teachers.slice(idx + 1)));
                                }
                            } })),
                    displayTeacherRights && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", { disabled: !(teacher.email || teacher.url), value: teacher.access || 'edit', onChange: function (ev) {
                                var clone = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](teachers);
                                clone[idx] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, teacher, { access: ev.target.value });
                                onUpdate(clone);
                            } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { value: "read" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["L\u00E4sa"], ["L\u00E4sa"])))),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { value: "edit" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Redigera"], ["Redigera"])))),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { value: "full" }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_6 || (templateObject_6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Full"], ["Full"])))))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remove_item__WEBPACK_IMPORTED_MODULE_2__["RemoveItem"], { onClick: function () {
                                onUpdate(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](teachers.slice(0, idx), teachers.slice(idx + 1)));
                            } })));
            }))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
        selectingTeacher ?
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_observe__WEBPACK_IMPORTED_MODULE_5__["Observe"], { fallback: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_spinner__WEBPACK_IMPORTED_MODULE_6__["Spinner"], null), errorFallback: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_7 || (templateObject_7 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Kunder inte h\u00E4mta skolans l\u00E4rare fr\u00E5n EDS"], ["Kunder inte h\u00E4mta skolans l\u00E4rare fr\u00E5n EDS"]))) },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_select_teacher__WEBPACK_IMPORTED_MODULE_4__["SelectTeacher"], { school: school, selectedTeachers: teachers, onBlur: function () { return setSelectingTeacher(false); }, onSelect: function (_a) {
                        var name = _a.name, email = _a.email;
                        var newTeacher = {
                            name: name,
                            email: email,
                            url: email,
                            access: 'edit'
                        };
                        var clone = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](teachers);
                        clone.push(newTeacher);
                        onUpdate(clone);
                        setSelectingTeacher(false);
                    } })) :
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { className: "btn", onClick: function () {
                    setSelectingTeacher(true);
                } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fa fa-user-plus", "aria-hidden": true }), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_8 || (templateObject_8 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"]([" L\u00E4gg till ansvarig l\u00E4rare"], [" L\u00E4gg till ansvarig l\u00E4rare"])))));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditableWorkFlowLink, _super);
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
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-paperclip", "aria-hidden": true }),
                " Koppla en arbetsg\u00E5ng till kursen"));
    };
    return EditableWorkFlowLink;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/sub-components/knowledge-matrix.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/knowledge-matrix.tsx ***!
  \***************************************************************************/
/*! exports provided: KnowledgeMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeMatrix", function() { return KnowledgeMatrix; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _knowledge_matrix_partial_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../knowledge-matrix-partial-utils */ "./src/components/course-builder/knowledge-matrix-partial-utils.ts");




var KnowledgeMatrix = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](KnowledgeMatrix, _super);
    function KnowledgeMatrix(props) {
        return _super.call(this, props) || this;
    }
    KnowledgeMatrix.prototype.getKnowledgeSentencesContent = function (requirement, partialRequirments, index, markedOk, isMigrated) {
        var _this = this;
        var _a = this.props, coveredPartialRequirments = _a.coveredPartialRequirments, markMode = _a.markMode;
        //split text in senteces
        var textSentences = Object(_knowledge_matrix_partial_utils__WEBPACK_IMPORTED_MODULE_3__["getRequirmentSentences"])(requirement.name);
        //get saved sencenteces for the current requirement
        var rowRequirments = partialRequirments && Object(_knowledge_matrix_partial_utils__WEBPACK_IMPORTED_MODULE_3__["getSavedSentences"])(partialRequirments);
        //get all saved senteces excluding the current ones
        var allCoveredSentenceReq = coveredPartialRequirments && Object(_knowledge_matrix_partial_utils__WEBPACK_IMPORTED_MODULE_3__["getCoveredSenteces"])(coveredPartialRequirments, requirement.id);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: index, title: Object(_knowledge_matrix_partial_utils__WEBPACK_IMPORTED_MODULE_3__["getMigrationTitle"])(isMigrated, markMode) }, textSentences.map(function (sentence, k) {
            var trimmedSentence = sentence.trim();
            var hasValue = rowRequirments && rowRequirments.includes(trimmedSentence) || markedOk && !rowRequirments;
            var sentenceNotMarked = !allCoveredSentenceReq.includes(trimmedSentence);
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { key: k, dangerouslySetInnerHTML: { __html: sentence ? sentence + "." : "" }, className: "selectable" + (hasValue ? " markedGreen" : (sentenceNotMarked ? " markedRed" : "")), onClick: function () {
                    var updatedRequirments = partialRequirments ? Object.assign([], partialRequirments) : [];
                    var shouldBeRemoved = rowRequirments && rowRequirments.includes(trimmedSentence);
                    //check if no partial data saved, but the requirment is markedOk
                    if (markedOk && (!rowRequirments || rowRequirments.length == 0)) {
                        //save all excepting the one that should be removed
                        updatedRequirments = textSentences.filter(function (x) { return x != sentence; });
                        _this.props.onUpdatePartialKnowledge(requirement.id, Object(_knowledge_matrix_partial_utils__WEBPACK_IMPORTED_MODULE_3__["getSortedRequirments"])(textSentences, updatedRequirments));
                    }
                    else {
                        if (shouldBeRemoved) {
                            updatedRequirments = partialRequirments.filter(function (req) { return req != sentence; });
                        }
                        else {
                            updatedRequirments.push(sentence);
                        }
                        _this.props.onUpdatePartialKnowledge(requirement.id, Object(_knowledge_matrix_partial_utils__WEBPACK_IMPORTED_MODULE_3__["getSortedRequirments"])(textSentences, updatedRequirments));
                    }
                } });
        }));
    };
    KnowledgeMatrix.prototype.onRequirementChanged = function (requirement, value, partialValues, allPartialMarked) {
        if (this.props.onUpdatePartialKnowledge) {
            //remove all saved senteces if the requirement is unchecked
            (value && !partialValues || allPartialMarked) ? this.props.onUpdatePartialKnowledge(requirement.id, []) : this.props.onUpdatePartialKnowledge(requirement.id, Object(_knowledge_matrix_partial_utils__WEBPACK_IMPORTED_MODULE_3__["getRequirmentSentences"])(requirement.name));
        }
        else {
            this.props.onMarkChanged(requirement.id, !value);
        }
    };
    KnowledgeMatrix.prototype.render = function () {
        var _this = this;
        var _a = this.props, knowledgeRequirements = _a.knowledgeRequirements, markedIds = _a.markedIds, migratedIds = _a.migratedIds, explainedRequirements = _a.explainedRequirements, markBySentenceView = _a.markBySentenceView, markPartialFeatureEnabled = _a.markPartialFeatureEnabled;
        var _b = this.props, idsToMarkNotOk = _b.idsToMarkNotOk, markMode = _b.markMode, onExplainedRequirementsChanged = _b.onExplainedRequirementsChanged, partialRequirments = _b.partialRequirments, coveredPartialRequirments = _b.coveredPartialRequirments;
        var columns = ["E", "C", "A"];
        var rows = [];
        var reqs = knowledgeRequirements.slice();
        var row = null;
        while (true) {
            row = columns.map(function (grade) {
                var pNext = reqs.findIndex(function (r) { return r.gradeStep && r.gradeStep.toUpperCase() === grade; });
                if (pNext < 0)
                    return null;
                var rv = reqs[pNext];
                reqs.splice(pNext, 1);
                return rv;
            });
            if (row.every(function (r) { return r === null; }))
                break;
            rows.push(row);
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "knowledge-matrix" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null, columns.map(function (c) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: c }, c); }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, rows.map(function (row, i) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], { key: i },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null, row.map(function (requirement, j) {
                    var isMarkedOK = requirement && markedIds && markedIds.indexOf(requirement.id) >= 0;
                    var isMarkedNotOK = requirement && idsToMarkNotOk && idsToMarkNotOk[requirement.id]; //not used anymore
                    var isMigrated = requirement && migratedIds && !!migratedIds[requirement.id];
                    var rowPartialRequirements = requirement && partialRequirments && partialRequirments[requirement.id];
                    var partialValues = rowPartialRequirements && Object(_knowledge_matrix_partial_utils__WEBPACK_IMPORTED_MODULE_3__["getSavedSentences"])(rowPartialRequirements);
                    var allReqSentencesMarked = requirement && Object(_knowledge_matrix_partial_utils__WEBPACK_IMPORTED_MODULE_3__["allRequirementSentecesMarked"])(requirement.name, partialValues);
                    var hasPartialCovered = requirement && Object(_knowledge_matrix_partial_utils__WEBPACK_IMPORTED_MODULE_3__["isPartialCoveredRequirment"])(requirement, coveredPartialRequirments);
                    var markedRed = !(partialValues && partialValues.length > 0 || hasPartialCovered);
                    return requirement && markBySentenceView && markPartialFeatureEnabled ? _this.getKnowledgeSentencesContent(requirement, rowPartialRequirements, j, isMarkedOK, isMigrated) :
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: j, dangerouslySetInnerHTML: { __html: requirement ? (rowPartialRequirements && rowPartialRequirements.length || hasPartialCovered) ?
                                    Object(_knowledge_matrix_partial_utils__WEBPACK_IMPORTED_MODULE_3__["getPartialContentDefaultView"])(requirement, rowPartialRequirements, coveredPartialRequirments, markedRed) : requirement.name : "" }, className: (markMode ? "selectable" : "") +
                                (isMigrated ? " migrated" : "") +
                                (isMarkedOK && (!rowPartialRequirements || allReqSentencesMarked) ?
                                    " markedGreen" :
                                    markedRed ?
                                        " markedRed" :
                                        ""), onClick: markMode && requirement ?
                                function () { return _this.onRequirementChanged(requirement, isMarkedOK, partialValues, allReqSentencesMarked); } :
                                undefined, title: Object(_knowledge_matrix_partial_utils__WEBPACK_IMPORTED_MODULE_3__["getMigrationTitle"])(isMigrated, markMode) });
                })),
                explainedRequirements && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null, row.map(function (requirement, j) {
                    var partialSentences = requirement && partialRequirments && partialRequirments[requirement.id] && Object(_knowledge_matrix_partial_utils__WEBPACK_IMPORTED_MODULE_3__["getSavedSentences"])(partialRequirments[requirement.id]);
                    var isMarkedOK = requirement && markedIds && markedIds.indexOf(requirement.id) >= 0 || partialSentences && partialSentences.length > 0;
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: j }, isMarkedOK ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { placeholder: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Beskrivning av kravet"], ["Beskrivning av kravet"]))), className: "inputTextBox inputTextLarge", style: { width: "100%" }, readOnly: !markMode, value: (requirement && explainedRequirements[requirement.id]) || "", onChange: requirement && onExplainedRequirementsChanged && (function (ev) { return onExplainedRequirementsChanged(requirement.id, ev.target.value); }) }) : undefined);
                }))); })));
        { /*return <div>
          <table>
            <thead>
              <tr>
                <th>E</th>
                <th>C</th>
                <th>A</th>
              </tr>
            </thead>
            <tbody>
              {tbody.map((row, i) =>
              <tr key={i}>{row.map((cell, j) => {
                const isMarkedOK = props.markedIds && props.markedIds.indexOf(cell.id) >= 0;
                const isMarkedNotOK = props.idsToMarkNotOk && props.idsToMarkNotOk[cell.id];
                return <td
                  key={j}
                  rowSpan={cell.rowSpan}
                  className={(props.markMode ? "selectable" : "") +
                    (isMarkedOK ?
                      " markedGreen" :
                      (isMarkedNotOK ?
                        " markedRed":
                        ""))}
                  onClick={props.markMode && (()=>props.onMarkChanged(cell.id, !isMarkedOK))}>
                  {cell.html && <div style={{position: 'relative'}}>
                    <p
                      className={cell.type === 'ability' ? 'abilityText' : 'criteriaText'}
                      dangerouslySetInnerHTML={{__html: cell.html}} />
                    {props.editMode && <RemoveItem className="upperRight" onClick={()=>
                      this.setCellIds(
                        cell.type,
                        cell.rowIndex,
                        this.getCellIds(
                          cell.type,
                          cell.rowIndex).filter(id => id != cell.id) )} /> }
                  </div>}
                </td>})}
              </tr>)}
            </tbody>
          </table>
        </div>*/
        }
    };
    return KnowledgeMatrix;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/sub-components/remove-item.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/course-builder/sub-components/remove-item.tsx ***!
  \**********************************************************************/
/*! exports provided: RemoveItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveItem", function() { return RemoveItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");



;
var RemoveItem = function (_a) {
    var onClick = _a.onClick, className = _a.className, style = _a.style, title = _a.title;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { title: title || Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Radera"], ["Radera"]))), className: "removeItem " + (className || ""), onClick: onClick, style: style });
};
var templateObject_1;


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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SchoolCourses, _super);
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

/***/ "./src/components/course-builder/sub-components/select-related-docs.tsx":
/*!******************************************************************************!*\
  !*** ./src/components/course-builder/sub-components/select-related-docs.tsx ***!
  \******************************************************************************/
/*! exports provided: SelectRelatedDocs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectRelatedDocs", function() { return SelectRelatedDocs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");




var SelectRelatedDocs = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SelectRelatedDocs, _super);
    function SelectRelatedDocs(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SelectRelatedDocs.prototype.render = function () {
        var _this = this;
        var _a = this.props, options = _a.options, title = _a.title, markedIds = _a.markedIds, markMode = _a.markMode, migratedIds = _a.migratedIds, uncoveredIds = _a.uncoveredIds;
        var groupedOptions = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["arrayToLookup"])(options, function (d) { return d.group || "default"; });
        var groups = Object.keys(groupedOptions);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__["OpenCloseBox"], { title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, title), className: "larger" }, groups.map(function (group) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], { key: group },
            groups.length === 1 ? null : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, group),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null)),
            groupedOptions[group].map(function (option) {
                var isMarked = markedIds.some(function (x) { return x === option.id; });
                var isMigrated = migratedIds && !!migratedIds[option.id];
                var isUncovered = uncoveredIds && uncoveredIds[option.id];
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal", key: option.id, onClick: function () {
                        return markMode && _this.props.onMarkChanged(option.id, !isMarked);
                    } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" +
                            (markMode ? " selectable" : "") +
                            (isMarked ? " markedGreen" : (isUncovered ?
                                " markedRed" :
                                "")) +
                            (isMigrated ? " migrated" : ""), title: isMigrated ?
                            markMode ?
                                "Skolverket har uppdaterat textens formulering. Du kan granska \u00E4ndringen genom att f\u00E4lla ut varningsboxen till h\u00F6ger, med titel \"Uppdaterade formuleringar fr\u00E5n Skolverket\"" :
                                "Skolverket har uppdaterat textens formulering, men detta har \u00E4nnu inte granskats av uppgiftens redigeringsbeh\u00F6rige" :
                            undefined },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { dangerouslySetInnerHTML: { __html: option.name } }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)));
            })); }));
    };
    return SelectRelatedDocs;
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









function SelectTeacher(_a) {
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
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_6__["default"], { isMulti: false, options: teacherList, defaultMenuIsOpen: true, autoFocus: true, onBlur: function () { return onBlur(); }, placeholder: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["V\u00E4lj bland skolans l\u00E4rare..."], ["V\u00E4lj bland skolans l\u00E4rare..."]))), noOptionsMessage: function () { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Det finns inga fler l\u00E4rare att v\u00E4lja fr\u00E5n"], ["Det finns inga fler l\u00E4rare att v\u00E4lja fr\u00E5n"]))); }, onChange: function (option) {
            var _a = option, label = _a.label, value = _a.value;
            onSelect({ name: label, email: value });
        } });
}
var templateObject_1, templateObject_2;


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

var Spinner = function (_a) {
    var _b = _a.label, label = _b === void 0 ? "" : _b;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-spinner fa-spin", "aria-hidden": "true" }),
        "\u00A0",
        label);
};


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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WeightedItemsTable, _super);
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

/***/ "./src/components/course-builder/subjects/diff/diff-xml-with-database.ts":
/*!*******************************************************************************!*\
  !*** ./src/components/course-builder/subjects/diff/diff-xml-with-database.ts ***!
  \*******************************************************************************/
/*! exports provided: diffXmlWithDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffXmlWithDatabase", function() { return diffXmlWithDatabase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _migrate_subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./migrate-subject */ "./src/components/course-builder/subjects/diff/migrate-subject.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/components/course-builder/utils.ts");




function diffXmlWithDatabase(existingSubject, subjectToImport, changes) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var expandedCourseTemplates, courseSets;
        var _this = this;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["default"].kedBackendClient.get('subjects', existingSubject.id, { include: ["courseTemplates", "abilities"] })];
                case 1:
                    // Expand graphs of existing Subject
                    existingSubject = _a.sent();
                    return [4 /*yield*/, Promise.all(existingSubject.courseTemplates.map(function (ct) { return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["loadCourse"])(ct.id, {
                            include: [
                                'centralContent',
                                'knowledgeRequirements'
                            ]
                        }); }))];
                case 2:
                    expandedCourseTemplates = _a.sent();
                    console.log("Subject: " + existingSubject.name + ". Courses: " + expandedCourseTemplates.map(function (_a) {
                        var name = _a.name;
                        return name;
                    }));
                    return [4 /*yield*/, Promise.all(expandedCourseTemplates.map(function (courseTemplate) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _a;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = {
                                            template: courseTemplate
                                        };
                                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_1__["default"].kedBackendClient.list("courses", { name: courseTemplate.name, include: ['abilities'], flags: ['includeIdsOnly'] })];
                                    case 1: return [2 /*return*/, (_a.instances = _b.sent(),
                                            _a)];
                                }
                            });
                        }); }))];
                case 3:
                    courseSets = _a.sent();
                    /*if (expandedCourseTemplates.some (course => !course.centralContentOrder || !course.knowledgeRequirementsOrder || !course.abilitiesOrder)) {
                      migrateOrderListsOfCourseInstances(courseSets, subjectToImport, changes);
                      // In future, as abilities may be added or removed, we will have to maintain the order of abilities on the course instances,
                      // the same way we do it with central content and knowledge requirements. TODO respect abilities order on every place abilities are enumerated,
                      // such as on course viewer, course builder, etc.
                      migrateAbilitiesOrderOnSubject(existingSubject, courseSets, changes);
                    } else {*/
                    return [4 /*yield*/, Object(_migrate_subject__WEBPACK_IMPORTED_MODULE_2__["migrateSubject"])(existingSubject, courseSets, subjectToImport, changes)];
                case 4:
                    /*if (expandedCourseTemplates.some (course => !course.centralContentOrder || !course.knowledgeRequirementsOrder || !course.abilitiesOrder)) {
                      migrateOrderListsOfCourseInstances(courseSets, subjectToImport, changes);
                      // In future, as abilities may be added or removed, we will have to maintain the order of abilities on the course instances,
                      // the same way we do it with central content and knowledge requirements. TODO respect abilities order on every place abilities are enumerated,
                      // such as on course viewer, course builder, etc.
                      migrateAbilitiesOrderOnSubject(existingSubject, courseSets, changes);
                    } else {*/
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./src/components/course-builder/subjects/diff/migrate-subject.ts":
/*!************************************************************************!*\
  !*** ./src/components/course-builder/subjects/diff/migrate-subject.ts ***!
  \************************************************************************/
/*! exports provided: migrateSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "migrateSubject", function() { return migrateSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../globals/KED.env */ "./src/globals/KED.env.ts");




function diffSubjectGlobalTexts(dbTextMap, xmlTexts) {
    var e_1, _a;
    var removedIds = new Set();
    var newTexts = new Map();
    var idsToAdd = new Set();
    xmlTexts.forEach(function (newText) {
        newText = newText.trim();
        if (!dbTextMap.has(newText)) {
            var id = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_1__["createUUID"])();
            console.log("New id: " + id + ". Text: " + newText);
            newTexts.set(newText, id);
            idsToAdd.add(id);
        }
        else {
            newTexts.set(newText, dbTextMap.get(newText));
        }
    });
    try {
        for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](dbTextMap.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c.value, 2), oldText = _d[0], oldId = _d[1];
            if (xmlTexts.indexOf(oldText) === -1) {
                removedIds.add(oldId);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return {
        removedIds: removedIds,
        newTexts: newTexts,
        idsToAdd: idsToAdd
    };
}
var _fictiveOldId = 1;
function fictiveOldId() {
    return "fictiveOldId" + (++_fictiveOldId);
}
var stopWords = new Set(
// From https://github.com/MihaiValentin/lunr-languages/blob/master/lunr.sv.js#L252
('alla allt att av blev bli blir blivit de dem den denna deras dess dessa det detta dig din dina ditt du där då efter ej eller en er era ert ett från för ha hade han hans har henne hennes hon honom hur här i icke ingen inom inte jag ju kan kunde man med mellan men mig min mina mitt mot mycket ni nu när någon något några och om oss på samma sedan sig sin sina sitta själv skulle som så sådan sådana sådant till under upp ut utan vad var vara varför varit varje vars vart vem vi vid vilka vilkas vilken vilket vår våra vårt än är åt över' +
    ' kring') // This line contains additional stop-words missing in lunr.sv.
    .split(' '));
function getLexemes(html) {
    return new Set(removeTags(html).replace(/[^\w\såäö]/gi, '').toLowerCase().split(/\s/)
        .map(function (lexeme) { return lexeme.trim(); })
        .filter(function (lexeme) { return !!lexeme; })
        .filter(function (lexeme) { return !stopWords.has(lexeme); }));
}
function removeTags(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return '' + div.innerText;
}
function getIdsToMigrate(dbTexts, xmlTexts, newTexts, textType, course) {
    var idsToMigrate = new Map();
    dbTexts = dbTexts.map(function (entity) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, entity, { name: entity.name.trim() })); }).filter(function (_a) {
        var name = _a.name;
        return !!name;
    });
    var xmlSet = new Map();
    xmlTexts.forEach(function (item) { return xmlSet.set(item.html, item); });
    var dbSet = new Map();
    dbTexts.forEach(function (entity) { return dbSet.set(entity.name, entity); });
    // Remove those who already exists identically
    dbTexts = dbTexts.filter(function (entity) { return !xmlSet.has(entity.name); });
    xmlTexts = xmlTexts.filter(function (item) { return !dbSet.has(item.html); });
    // Now, for the remainder, try the best to map old texts to new texts, and when done, check if there are new texts that never got mapped.
    // Start by putting all dbText into the result, without a paired xml text yet:
    dbTexts.forEach(function (dbText) { return idsToMigrate.set(dbText.id, {
        gradeStep: dbText.gradeStep,
        oldText: dbText.name,
        lexemes: getLexemes(dbText.name),
        matchLevel: 0
    }); });
    // Then try to pair each xmlText to an item in idsToMigrate
    var xmlSpinsters = [];
    while (xmlTexts.length > 0) {
        var xmlText = xmlTexts[0];
        var bestMatch = findBestMatch(xmlText);
        if (!bestMatch) {
            xmlSpinsters.push(xmlText);
        }
        else {
            if (bestMatch.newText) {
                // Throw out existing match
                xmlTexts.push({ html: bestMatch.newText, gradeStep: bestMatch.gradeStep });
            }
            var pair = idsToMigrate.get(bestMatch.id);
            // Pair myself with this match:
            pair.newText = xmlText.html;
            pair.matchLevel = bestMatch.myMatchLevel;
            pair.newId = newTexts.get(xmlText.html);
        }
        xmlTexts.shift();
    }
    // For each spinster (new texts that couldn't find any match in old texts),
    // Add them with an fictive old ID but omit oldText to mark it as a newcomer
    xmlSpinsters.forEach(function (spinster) {
        idsToMigrate.set(fictiveOldId(), {
            newId: newTexts.get(spinster.html),
            newText: spinster.html,
            gradeStep: spinster.gradeStep,
            matchLevel: 0,
            lexemes: new Set()
        });
    });
    // Mark typo-fixes
    idsToMigrate.forEach(function (match) {
        var oldText = match.oldText, newText = match.newText;
        if (oldText && newText) {
            if (tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](getLexemes(oldText)).join(' ') === tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](getLexemes(newText)).join(' ')) {
                match.isTypoFix = true;
            }
        }
    });
    console.log("IdsToMigrate", tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](idsToMigrate.values()).map(function (_a) {
        var oldText = _a.oldText, lexemes = _a.lexemes;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](lexemes).join(' ') + ": " + oldText;
    }));
    return idsToMigrate;
    function findBestMatch(xmlText) {
        var xmlLexemes = getLexemes(xmlText.html);
        var possiblePartners = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](idsToMigrate.entries()).filter(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), id = _b[0], x = _b[1];
            return x.gradeStep === xmlText.gradeStep;
        })
            .map(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), id = _b[0], _c = _b[1], gradeStep = _c.gradeStep, matchLevel = _c.matchLevel, newText = _c.newText, lexemes = _c.lexemes;
            return ({
                id: id,
                gradeStep: gradeStep,
                matchLevel: matchLevel,
                newText: newText,
                myMatchLevel: getMatchLevel(xmlLexemes, lexemes)
            });
        }).filter(function (pp) { return pp.myMatchLevel >= 50 && (!pp.matchLevel || pp.matchLevel < pp.myMatchLevel); });
        return possiblePartners.sort(function (a, b) { return b.myMatchLevel - a.myMatchLevel; })[0]; // highest first.
    }
    function getMatchLevel(lexemes1, lexemes2) {
        if (lexemes1.size === 0 || lexemes2.size === 0)
            return 0;
        var points1 = 0;
        var points2 = 0;
        lexemes1.forEach(function (word) {
            if (lexemes2.has(word))
                ++points1;
        });
        lexemes2.forEach(function (word) {
            if (lexemes1.has(word))
                ++points2;
        });
        return Math.round(100 * Math.max(points1 / lexemes1.size, points2 / lexemes2.size));
    }
    /*if (dbTexts.length !== xmlTexts.length) {
      // We can no longer assume that the changed texts refer to different formulations of the same meaning.
      // We not map old formulations to new ones.
      // In future, we could handle this case by assuming all old texts not occurring in new data, have been removed and all new have been added.
      throw new Error("Number of " + textType + (course ? ` on course ${course}` : "") + " differs. Cannot migrate.");
    }
    dbTexts.forEach(({name: oldText, id: oldId, gradeStep}, i) => {
      const xmlText = xmlTexts[i].trim();
      if (oldText.trim() !== xmlText) {
        idsToMigrate.set(oldId, {newText: xmlText, newId: newTexts.get(xmlText), oldText, gradeStep});
      }
    });
    return idsToMigrate;*/
}
function migrateSubject(existingSubject, courseSets, subjectToImport, changes) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        function migrateCourseInstance(course, courseToImport, idsToMigrate) {
            var showChanges = !shownChanges.has(course.name);
            shownChanges.add(course.name);
            abilityIdsToMigrate.forEach(function (_a, oldId) {
                var newId = _a.newId, oldText = _a.oldText;
                // Relink the course instance with abilities. This change does not need to be visible in GUI.
                changes.push({
                    mutations: function (br) {
                        if (oldText)
                            br.unlink2("courses", course.id, "abilities", oldId);
                        if (newId)
                            br.link2("courses", course.id, "abilities", newId);
                    }
                });
            });
            course.abilitiesOrder = subjectToImport.abilities.map(function (html) { return newAbilityTexts.get(html); });
            var ccsToMigrate = idsToMigrate.ccsToMigrate, krsToMigrate = idsToMigrate.krsToMigrate;
            // Central Content
            ccsToMigrate.forEach(function (_a, oldId) {
                var newId = _a.newId, newText = _a.newText, oldText = _a.oldText, isTypoFix = _a.isTypoFix;
                changes.push({
                    change: showChanges && (oldText ?
                        newText ?
                            isTypoFix ?
                                "Tryckfelsr\u00E4ttning Centralt Inneh\u00E5ll" :
                                "Uppdaterat Centralt Inneh\u00E5ll" :
                            "Borttaget Centralt Inneh\u00E5ll" :
                        "Nytt Centralt Inneh\u00E5ll"),
                    content: "<h4>" + course.name + "</h4><strike>" + (oldText || '') + "</strike><br/>" + (newText || ''),
                    mutations: function (br) {
                        if (newId && ccsToAdd.has(newId) && !createdIds.has(newId)) {
                            var cc = {
                                id: newId,
                                name: newText,
                                acl: ["role:USER:R"],
                                dateTime: Date.now()
                            };
                            br.add("central-content", cc);
                            createdIds.add(newId);
                        }
                        if (oldText)
                            br.unlink2("courses", course.id, "centralContent", oldId);
                        if (newId)
                            br.link2("courses", course.id, "centralContent", newId);
                    }
                });
            });
            course.centralContentOrder = courseToImport.centralContent.map(function (_a) {
                var html = _a.html;
                return newCCTexts.get(html);
            });
            // Knowledge Requirements
            krsToMigrate.forEach(function (_a, oldId) {
                var newId = _a.newId, newText = _a.newText, gradeStep = _a.gradeStep, oldText = _a.oldText, isTypoFix = _a.isTypoFix;
                changes.push({
                    change: showChanges && (oldText ?
                        newText ?
                            isTypoFix ?
                                "Tryckfelsr\u00E4ttning Kunskapskrav" :
                                "Uppdaterat Kunskapskrav" :
                            "Borttaget Kunskapskrav" :
                        "Nytt Kunskapskrav"),
                    content: "<h4>" + course.name + "</h4><strike>" + (oldText || '') + "</strike><br/>" + (newText || ''),
                    mutations: function (br) {
                        if (newId && krsToAdd.has(newId) && !createdIds.has(newId)) {
                            var kr = {
                                id: newId,
                                name: newText,
                                gradeStep: gradeStep,
                                acl: ["role:USER:R"],
                                dateTime: Date.now()
                            };
                            console.log("Adding Knowledge-Requirement " + newId + ": " + newText);
                            br.add("knowledge-requirements", kr);
                            createdIds.add(newId);
                        }
                        if (oldText)
                            br.unlink2("courses", course.id, "knowledgeRequirements", oldId);
                        if (newId)
                            br.link2("courses", course.id, "knowledgeRequirements", newId);
                    }
                });
            });
            course.knowledgeRequirementsOrder =
                courseToImport.knowledgeRequirements.map(function (kr) { return newKRTexts.get(kr.html); });
            // Updates the course properties centralContentOrder and knowledgeRequirementsOrder
            if (abilityIdsToMigrate.size > 0 || ccsToMigrate.size > 0 || krsToMigrate.size > 0) {
                changes.push({
                    change: !course.isTemplate ? "Uppdaterad Kursinstans" : "Uppdaterad Kursmall",
                    content: !course.isTemplate ?
                        course.name + ". Skola: " + (course.school || "ej angiven") + ". Beskrivning: " + (course.description || '') :
                        "" + course.name,
                    mutations: function (br) { return br.put("courses", course); }
                });
            }
        }
        // Tasks:
        // 1. ASYNC OPERATION: Go through all tasks that has edges to any of the old ids.
        // 2. For each found task, do:
        //    A: Iterate tags starting with "course:". Pick the course code.
        //    B: Populate the new property migrationTasks: {
        //         abilities: {[newId: string]: {oldText: string, oldId: string, importDate: number}}, // Be able to create a chain in the GUI !
        //         centralContent: {[newId: string]: {oldText: string, ..."...}},
        //         knowledgeRequirements: {[newId: string]: {oldText: string, ..."...}},
        //       }
        //       OBS1! Mergea abilities, centralCondent och knowledgeRequirements med ev tidigare värden (så man kan importera om och om igen!)
        //       OBS2! oldId kan förekomma på flera newId om task används av flera kurser. 
        //    C: Create sets for unlinks and link operations per type.
        //    D: For all courseCodes that the task is taggen on,
        //         * register ccsToMigrate.keys() in the unlink set of central contents
        //         * register ccsToMigrate.values() in the link set of central contents
        //         * --"-- for knowledgeRequirements
        //    E: unlink and link with regards to abilityIdsToMigrate (keys() and values() respectively).
        //    F: unlink and link according to the created sets of link / unlink operations.
        //    Note: Unlike course instances, there's no order property to take care of here!
        //
        function migrateTasks() {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                function fetchTasksInChunksWithEdgesTo(ids, options) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var result;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    // This function should make work around the case when given "ids" contains too many items, by
                                    // dividing the requests into several and merge the result using a Map.
                                    if (ids.length === 0)
                                        return [2 /*return*/, []]; // Otherwise we'll request every task in the system.
                                    result = new Map();
                                    console.log("Number of ids: " + ids.length);
                                    return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].kedBackendClient.list("tasks", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, options, { hasEdgesTo: ids }))];
                                case 1: 
                                //return result.values();
                                return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                }
                var oldIds, importDate, tasks, _loop_2, tasks_1, tasks_1_1, task;
                var e_7, _a;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            oldIds = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](abilityIdsToMigrate.keys(), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["flatten"])(idsToMigratePerCourse.map(function (c) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](c.ccsToMigrate.keys(), c.krsToMigrate.keys()); }))).filter(function (id) { return !id.startsWith('fictiveOldId'); });
                            importDate = Date.now();
                            return [4 /*yield*/, fetchTasksInChunksWithEdgesTo(oldIds, {
                                    include: ["abilities", "knowledgeRequirements", "centralContent"],
                                    flags: ["includeIdsOnly"]
                                })];
                        case 1:
                            tasks = _b.sent();
                            _loop_2 = function (task) {
                                var e_8, _a, e_9, _b, e_10, _c, e_11, _d;
                                var oldMT = task.migratedTexts || {
                                    abilities: {},
                                    centralContent: {},
                                    knowledgeRequirements: {}
                                };
                                task.migratedTexts = {
                                    abilities: {},
                                    centralContent: {},
                                    knowledgeRequirements: {}
                                };
                                var mutations = [];
                                var changeDescriptions = [];
                                var _loop_3 = function (id) {
                                    var migrationInfo = abilityIdsToMigrate.get(id);
                                    if (migrationInfo) {
                                        var newId_1 = migrationInfo.newId, newText = migrationInfo.newText, isTypoFix = migrationInfo.isTypoFix;
                                        var oldText = migrationInfo.oldText;
                                        var oldId = id;
                                        if (oldMT.abilities[id]) {
                                            // If migrating stuff that was never acknowledges by a teacher,
                                            // We should point out the very old id and text instead of the never-acknowledged one.
                                            oldText = oldMT.abilities[id].oldText;
                                            oldId = oldMT.abilities[id].oldId;
                                        }
                                        if (newId_1 && oldText !== newText) {
                                            // Special case: If oldText === newText, then this is a reimport new XML that reverts back to origin text. Don't require acknowledgement from teacher!
                                            if (!isTypoFix) {
                                                // If this wasn't just a typo fix (changes in stop words, casing or special characters)
                                                task.migratedTexts.abilities[newId_1] = { oldId: oldId, oldText: oldText, importDate: importDate };
                                            }
                                        }
                                        mutations.push(function (br) {
                                            br.unlink2("tasks", task.id, "abilities", id);
                                            if (newId_1)
                                                br.link2("tasks", task.id, "abilities", newId_1);
                                        });
                                        changeDescriptions.push("<strike>" + oldText + "</strike>");
                                        if (newId_1) {
                                            changeDescriptions.push(newText);
                                        }
                                    }
                                };
                                try {
                                    for (var _e = (e_8 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](task.abilities)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                        var id = _f.value.id;
                                        _loop_3(id);
                                    }
                                }
                                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                                finally {
                                    try {
                                        if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                                    }
                                    finally { if (e_8) throw e_8.error; }
                                }
                                var taskCourseCodes = new Set(task.tags ?
                                    task.tags.filter(function (t) { return t.startsWith('course:'); }).map(function (t) { return t.substr("course:".length); }) :
                                    []);
                                // We need to keep track of linkedIds (for this particular task) for the following reason:
                                // Let's say the task was referred to by two different courses (possible in old versions),
                                // and in old Central Content, the two courses did have slightly different formulations of central content,
                                // so the task was mapped to both of them. Then, in new XML, the same central content was formulated
                                // in a new way that is identical this time between the two courses. Then both old IDs will be replaced
                                // by a single new ID. It would then be unnescessary to link to the new ID twice.
                                var linkedIds = new Set();
                                try {
                                    for (var idsToMigratePerCourse_1 = (e_9 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](idsToMigratePerCourse)), idsToMigratePerCourse_1_1 = idsToMigratePerCourse_1.next(); !idsToMigratePerCourse_1_1.done; idsToMigratePerCourse_1_1 = idsToMigratePerCourse_1.next()) {
                                        var _g = idsToMigratePerCourse_1_1.value, krsToMigrate = _g.krsToMigrate, ccsToMigrate = _g.ccsToMigrate, courseCode = _g.courseCode;
                                        if (taskCourseCodes.size === 0 || taskCourseCodes.has(courseCode)) {
                                            var _loop_4 = function (id) {
                                                var migrationInfo = ccsToMigrate.get(id);
                                                if (migrationInfo) {
                                                    var newId_2 = migrationInfo.newId, newText = migrationInfo.newText, oldText = migrationInfo.oldText, isTypoFix = migrationInfo.isTypoFix;
                                                    var oldId = id;
                                                    if (oldMT.centralContent[id]) {
                                                        // If migrating stuff that was never acknowledges by a teacher,
                                                        // We should point out the very old id and text instead of the never-acknowledged one.
                                                        oldText = oldMT.centralContent[id].oldText;
                                                        oldId = oldMT.centralContent[id].oldId;
                                                    }
                                                    if (newId_2 && oldText !== newText) {
                                                        // Special case: If oldText === newText, then this is a reimport new XML that reverts back to origin text. Don't require acknowledgement from teacher!
                                                        if (!isTypoFix) {
                                                            // If this wasn't just a typo fix (changes in stop words, casing or special characters)
                                                            task.migratedTexts.centralContent[newId_2] = { oldId: oldId, oldText: oldText, importDate: importDate };
                                                        }
                                                    }
                                                    if (!newId_2 || !linkedIds.has(newId_2)) {
                                                        mutations.push(function (br) {
                                                            br.unlink2("tasks", task.id, "centralContent", id);
                                                            if (newId_2)
                                                                br.link2("tasks", task.id, "centralContent", newId_2);
                                                        });
                                                        changeDescriptions.push("<strike>" + oldText + "</strike>");
                                                        if (newId_2) {
                                                            changeDescriptions.push(newText);
                                                            linkedIds.add(newId_2);
                                                        }
                                                    }
                                                }
                                            };
                                            try {
                                                for (var _h = (e_10 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](task.centralContent)), _j = _h.next(); !_j.done; _j = _h.next()) {
                                                    var id = _j.value.id;
                                                    _loop_4(id);
                                                }
                                            }
                                            catch (e_10_1) { e_10 = { error: e_10_1 }; }
                                            finally {
                                                try {
                                                    if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                                                }
                                                finally { if (e_10) throw e_10.error; }
                                            }
                                            var _loop_5 = function (id) {
                                                var migrationInfo = krsToMigrate.get(id);
                                                if (migrationInfo) {
                                                    var newId_3 = migrationInfo.newId, newText = migrationInfo.newText, oldText = migrationInfo.oldText, isTypoFix = migrationInfo.isTypoFix;
                                                    var oldId = id;
                                                    if (oldMT.knowledgeRequirements[id]) {
                                                        // If migrating stuff that was never acknowledges by a teacher,
                                                        // We should point out the very old id and text instead of the never-acknowledged one.
                                                        oldText = oldMT.knowledgeRequirements[id].oldText;
                                                        oldId = oldMT.knowledgeRequirements[id].oldId;
                                                    }
                                                    if (newId_3 && oldText !== newText) {
                                                        // Special case: If oldText === newText, then this is a reimport new XML that reverts back to origin text. Don't require acknowledgement from teacher!
                                                        if (!isTypoFix) {
                                                            // If this wasn't just a typo fix (changes in stop words, casing or special characters)
                                                            task.migratedTexts.knowledgeRequirements[newId_3] = { oldId: oldId, oldText: oldText, importDate: importDate };
                                                        }
                                                    }
                                                    if (!newId_3 || !linkedIds.has(newId_3)) {
                                                        mutations.push(function (br) {
                                                            br.unlink2("tasks", task.id, "knowledgeRequirements", id);
                                                            if (newId_3)
                                                                br.link2("tasks", task.id, "knowledgeRequirements", newId_3);
                                                        });
                                                        changeDescriptions.push("<strike>" + oldText + "</strike>");
                                                        if (newId_3) {
                                                            changeDescriptions.push(newText);
                                                            linkedIds.add(newId_3);
                                                        }
                                                    }
                                                }
                                            };
                                            try {
                                                for (var _k = (e_11 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](task.knowledgeRequirements)), _l = _k.next(); !_l.done; _l = _k.next()) {
                                                    var id = _l.value.id;
                                                    _loop_5(id);
                                                }
                                            }
                                            catch (e_11_1) { e_11 = { error: e_11_1 }; }
                                            finally {
                                                try {
                                                    if (_l && !_l.done && (_d = _k.return)) _d.call(_k);
                                                }
                                                finally { if (e_11) throw e_11.error; }
                                            }
                                        }
                                    }
                                }
                                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                                finally {
                                    try {
                                        if (idsToMigratePerCourse_1_1 && !idsToMigratePerCourse_1_1.done && (_b = idsToMigratePerCourse_1.return)) _b.call(idsToMigratePerCourse_1);
                                    }
                                    finally { if (e_9) throw e_9.error; }
                                }
                                changes.push({
                                    change: "Migrerad Uppgift",
                                    content: "<h4>" + task.name + " " + (task.school ? "(" + task.school + ") " : '(skola ej angiven)') + "</h4>\n          <p>Kurskod: " + tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](taskCourseCodes).join(',') + "</p>\n          " + changeDescriptions.map(function (txt) { return "<p>" + txt + "</p>"; }).join(''),
                                    mutations: function (br) {
                                        br.put("tasks", task);
                                        mutations.forEach(function (m) { return m(br); });
                                    }
                                });
                            };
                            try {
                                /*const tasks = await env.kedBackendClient.list<Task>("tasks", {
                                  hasEdgesTo: oldIds,
                                  include: ["abilities", "knowledgeRequirements", "centralContent"],
                                  flags: ["includeIdsOnly"]
                                });*/
                                for (tasks_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](tasks), tasks_1_1 = tasks_1.next(); !tasks_1_1.done; tasks_1_1 = tasks_1.next()) {
                                    task = tasks_1_1.value;
                                    _loop_2(task);
                                }
                            }
                            catch (e_7_1) { e_7 = { error: e_7_1 }; }
                            finally {
                                try {
                                    if (tasks_1_1 && !tasks_1_1.done && (_a = tasks_1.return)) _a.call(tasks_1);
                                }
                                finally { if (e_7) throw e_7.error; }
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        var dbTextMap, orderedAbilities, orderedAbilities_1, orderedAbilities_1_1, a, courseSets_1, courseSets_1_1, template, _a, _b, cc, _c, _d, kr, _e, newAbilityTexts, abilitiesToAdd, _f, newCCTexts, ccsToAdd, _g, newKRTexts, krsToAdd, abilityIdsToMigrate, idsToMigratePerCourse, createdIds, shownChanges, _loop_1, courseSets_2, courseSets_2_1, _h, template, instances;
        var e_2, _j, e_3, _k, e_4, _l, e_5, _m, e_6, _o;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_p) {
            switch (_p.label) {
                case 0:
                    dbTextMap = new Map();
                    orderedAbilities = existingSubject.abilitiesOrder ?
                        existingSubject.abilitiesOrder.map(function (id) { return existingSubject.abilities.find(function (a) { return a.id === id; }); }) :
                        existingSubject.abilities;
                    try {
                        for (orderedAbilities_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](orderedAbilities), orderedAbilities_1_1 = orderedAbilities_1.next(); !orderedAbilities_1_1.done; orderedAbilities_1_1 = orderedAbilities_1.next()) {
                            a = orderedAbilities_1_1.value;
                            dbTextMap.set(a.name.trim(), a.id);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (orderedAbilities_1_1 && !orderedAbilities_1_1.done && (_j = orderedAbilities_1.return)) _j.call(orderedAbilities_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    try {
                        for (courseSets_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](courseSets), courseSets_1_1 = courseSets_1.next(); !courseSets_1_1.done; courseSets_1_1 = courseSets_1.next()) {
                            template = courseSets_1_1.value.template;
                            try {
                                for (_a = (e_4 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](template.centralContent)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    cc = _b.value;
                                    dbTextMap.set(cc.name.trim(), cc.id);
                                }
                            }
                            catch (e_4_1) { e_4 = { error: e_4_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_l = _a.return)) _l.call(_a);
                                }
                                finally { if (e_4) throw e_4.error; }
                            }
                            try {
                                for (_c = (e_5 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](template.knowledgeRequirements)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                    kr = _d.value;
                                    dbTextMap.set(kr.name.trim(), kr.id);
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (_d && !_d.done && (_m = _c.return)) _m.call(_c);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (courseSets_1_1 && !courseSets_1_1.done && (_k = courseSets_1.return)) _k.call(courseSets_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    _e = diffSubjectGlobalTexts(dbTextMap, subjectToImport.abilities), newAbilityTexts = _e.newTexts, abilitiesToAdd = _e.idsToAdd;
                    _f = diffSubjectGlobalTexts(dbTextMap, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["flatten"])(subjectToImport.courses.map(function (c) { return c.centralContent.map(function (cc) { return cc.html; }); }))), newCCTexts = _f.newTexts, ccsToAdd = _f.idsToAdd;
                    _g = diffSubjectGlobalTexts(dbTextMap, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["flatten"])(subjectToImport.courses.map(function (c) { return c.knowledgeRequirements.map(function (kr) { return kr.html; }); }))), newKRTexts = _g.newTexts, krsToAdd = _g.idsToAdd;
                    console.log("Abilities to add: " + abilitiesToAdd.size);
                    console.log("CCs to add: " + ccsToAdd.size);
                    console.log("KRs to add: " + krsToAdd.size);
                    abilityIdsToMigrate = getIdsToMigrate(orderedAbilities, subjectToImport.abilities.map(function (html) { return ({ html: html }); }), newAbilityTexts, "abilities");
                    idsToMigratePerCourse = courseSets.map(function (_a, i) {
                        var template = _a.template;
                        console.log("Course: " + template.name);
                        var xmlCourse = subjectToImport.courses.find(function (c) { return c.name === template.name; }) ||
                            subjectToImport.courses.find(function (c) { return c.code === template.code; });
                        return {
                            courseCode: template.code,
                            ccsToMigrate: xmlCourse ?
                                getIdsToMigrate(template.centralContent, // Has already been sorted when retrieved via loadCourse()
                                xmlCourse.centralContent.map(function (_a) {
                                    var html = _a.html;
                                    return ({ html: html });
                                }), newCCTexts, "central content", template.name) :
                                new Map(),
                            krsToMigrate: xmlCourse ?
                                getIdsToMigrate(template.knowledgeRequirements, // Has already been sorted when retrieved via loadCourse()
                                xmlCourse.knowledgeRequirements, newKRTexts, "knowledge requirements", template.name) :
                                new Map()
                        };
                    });
                    // OK so now we have all info.
                    // Now, we need to:
                    // Subject:
                    // 1. Remove links from subjects to abilities
                    // 2. Add links from subjects to abilities
                    abilityIdsToMigrate.forEach(function (_a, oldId) {
                        var newText = _a.newText, newId = _a.newId, oldText = _a.oldText, isTypoFix = _a.isTypoFix;
                        //const oldText = existingSubject.abilities.find(a => a.id === oldId).name;
                        changes.push({
                            change: (oldText ?
                                newText ?
                                    isTypoFix ?
                                        "Tryckfelsr\u00E4ttning F\u00F6rm\u00E5ga" :
                                        "Uppdaterad F\u00F6rm\u00E5ga" :
                                    "Borttagen F\u00F6rm\u00E5ga" :
                                "Ny F\u00F6rm\u00E5ga"),
                            content: "<strike>" + (oldText || '') + "</strike><br/>" + (newText || ''),
                            mutations: function (br) {
                                if (newId && abilitiesToAdd.has(newId)) {
                                    var a = {
                                        id: newId,
                                        name: newText,
                                        acl: ["role:USER:R"],
                                        dateTime: Date.now()
                                    };
                                    br.add("abilities", a);
                                }
                                if (oldText)
                                    br.unlink2("subjects", existingSubject.id, "abilities", oldId);
                                if (newId)
                                    br.link2("subjects", existingSubject.id, "abilities", newId);
                            }
                        });
                    });
                    // 3. Update abilitiesOrder on Subject based on subjectToImport.abilities (mapped to ids in newTexts)
                    if (!existingSubject.abilitiesOrder || abilityIdsToMigrate.size > 0) {
                        existingSubject.abilitiesOrder = subjectToImport.abilities.map(function (xml) { return newAbilityTexts.get(xml); });
                        changes.push({
                            mutations: function (br) { return br.put("subjects", existingSubject); },
                            change: existingSubject.abilitiesOrder ?
                                null : // Ändringen redan visuell som "Uppdaterad för förmåga", etc, ovan
                                "Inf\u00F6r en ordnad lista p\u00E5 f\u00F6rm\u00E5gor i databasen",
                        });
                    }
                    createdIds = new Set();
                    changes.push({ mutations: function () { return createdIds.clear(); } }); // In case mutations run twice (which it doesn't as of current impl.)
                    shownChanges = new Set();
                    changes.push({ mutations: function () { return shownChanges.clear(); } });
                    _loop_1 = function (template, instances) {
                        var e_12, _a;
                        // Find courseToImport
                        var courseToImport = (subjectToImport.courses.find(function (c) { return c.name === template.name; }) ||
                            subjectToImport.courses.find(function (c) { return c.code === template.code; }));
                        // Find Central Content and Knowledge Requirements to migrate
                        var _b = idsToMigratePerCourse.find(function (x) { return x.courseCode === template.code; }), ccsToMigrate = _b.ccsToMigrate, krsToMigrate = _b.krsToMigrate;
                        try {
                            // Loop through all course instances (instances also contains templates)
                            // and migrate them. This will include creating missing entities in the DB.
                            for (var instances_1 = (e_12 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](instances)), instances_1_1 = instances_1.next(); !instances_1_1.done; instances_1_1 = instances_1.next()) {
                                var course = instances_1_1.value;
                                migrateCourseInstance(course, courseToImport, { ccsToMigrate: ccsToMigrate, krsToMigrate: krsToMigrate });
                            }
                        }
                        catch (e_12_1) { e_12 = { error: e_12_1 }; }
                        finally {
                            try {
                                if (instances_1_1 && !instances_1_1.done && (_a = instances_1.return)) _a.call(instances_1);
                            }
                            finally { if (e_12) throw e_12.error; }
                        }
                    };
                    try {
                        // Courses:
                        // 1. Go through all course instances and:
                        //      A: Remove links from courses to abilities listed in abilityIdsToMigrate.keys()
                        //      B: Add links from courses to abilities abiltitiesToMigrate.values()
                        //      C: Update abilitiesOrder on course instances based on subjectToImport (mapped to ids in newTexts)
                        // 2, 3: Do the same for central-content and knowledge-requirementes:
                        //    Find ccs and krs to migrate based on courseInstance.code
                        //    For both ccs and krs, do:
                        //      A: Unlink ccsToMigrate.keys()
                        //      B: Link ccsToMigrate.values()
                        //      C: Update centralContentOrder based on subjectToImport.centralContent mapped to newTexts ids
                        //      (same for krsToMigrate, with knowledgeRequirementsOrder instead)
                        for (courseSets_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](courseSets), courseSets_2_1 = courseSets_2.next(); !courseSets_2_1.done; courseSets_2_1 = courseSets_2.next()) {
                            _h = courseSets_2_1.value, template = _h.template, instances = _h.instances;
                            _loop_1(template, instances);
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (courseSets_2_1 && !courseSets_2_1.done && (_o = courseSets_2.return)) _o.call(courseSets_2);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                    return [4 /*yield*/, migrateTasks()];
                case 1:
                    _p.sent();
                    return [2 /*return*/];
            }
        });
    });
}


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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Subjects, _super);
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
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_course_banner__WEBPACK_IMPORTED_MODULE_4__["CourseBanner"], { title: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\u00C4mnen"], ["\u00C4mnen"]))), activePage: "subjects", routes: { feedback: this.props.feedbackUrl } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subjects_inner__WEBPACK_IMPORTED_MODULE_5__["SubjectsInner"], { linkPrefix: "/subjects/" }));
    };
    return Subjects;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/subjects/show-subject-inner.tsx":
/*!***********************************************************************!*\
  !*** ./src/components/course-builder/subjects/show-subject-inner.tsx ***!
  \***********************************************************************/
/*! exports provided: ShowSubjectInner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSubjectInner", function() { return ShowSubjectInner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _sub_components_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");




var ShowSubjectInner = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowSubjectInner, _super);
    function ShowSubjectInner(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { subject: null };
        return _this;
    }
    ShowSubjectInner.prototype.componentWillMount = function () {
        this.load();
    };
    ShowSubjectInner.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var subject;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.get('subjects', this.props.id, { include: 'courseTemplates' })];
                    case 1:
                        subject = _a.sent();
                        this.setState({ subject: subject });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShowSubjectInner.prototype.render = function () {
        if (!this.state.subject)
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_3__["Spinner"], null));
        var _a = this.state.subject, name = _a.name, code = _a.code, courseTemplates = _a.courseTemplates, schoolType = _a.schoolType;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, schoolType === 'primary' ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null,
                "Grundskole\u00E4mnet ",
                name,
                " (",
                code,
                ")"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "entity-list" }, courseTemplates.map(function (_a) {
                var id = _a.id, code = _a.code, publishable = _a.publishable, points = _a.points, schoolGrade = _a.schoolGrade;
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: id, className: "complete" },
                    name,
                    " f\u00F6r \u00E5rskurs ",
                    schoolGrade);
            }))) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null,
                "Kurser f\u00F6r \u00E4mnet ",
                name,
                " (",
                code,
                ")"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "entity-list" }, courseTemplates.map(function (_a) {
                var id = _a.id, name = _a.name, code = _a.code, publishable = _a.publishable, points = _a.points;
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: id, className: "complete" },
                    name,
                    " - ",
                    points,
                    "p");
            }))));
    };
    return ShowSubjectInner;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/subjects/show-subject.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/course-builder/subjects/show-subject.tsx ***!
  \*****************************************************************/
/*! exports provided: ShowSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSubject", function() { return ShowSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _courses_course_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../courses/course-banner */ "./src/components/course-builder/courses/course-banner.tsx");
/* harmony import */ var _sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _show_subject_inner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-subject-inner */ "./src/components/course-builder/subjects/show-subject-inner.tsx");






var ShowSubject = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowSubject, _super);
    function ShowSubject(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { subject: null };
        return _this;
    }
    ShowSubject.prototype.componentWillMount = function () {
        this.load();
    };
    ShowSubject.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var subject;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.get('subjects', this.props.id, { include: 'courseTemplates' })];
                    case 1:
                        subject = _a.sent();
                        this.setState({ subject: subject });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShowSubject.prototype.render = function () {
        if (!this.state.subject)
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null));
        var _a = this.state.subject, name = _a.name, code = _a.code, courseTemplates = _a.courseTemplates, schoolType = _a.schoolType;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_course_banner__WEBPACK_IMPORTED_MODULE_3__["CourseBanner"], { title: name, activePage: "subjects", routes: { feedback: this.props.feedbackUrl } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_show_subject_inner__WEBPACK_IMPORTED_MODULE_5__["ShowSubjectInner"], { id: this.props.id }));
    };
    return ShowSubject;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder/subjects/skolverket-subject.ts":
/*!**********************************************************************!*\
  !*** ./src/components/course-builder/subjects/skolverket-subject.ts ***!
  \**********************************************************************/
/*! exports provided: parseSkolverketYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSkolverketYears", function() { return parseSkolverketYears; });
function parseSkolverketYears(inYear) {
    switch (inYear.trim()) {
        case '3':
        case '1-3':
            return ['1-3'];
        case '6':
        case '4-6':
            return ['4-6'];
        case '7-9':
        case '9':
            return ['7-9'];
        // Specials
        case '1': return ["1-3"]; // Förekommer i ämnena "Svenska" och "Svenska som andraspråk"
        case '1s': return ["1-3"]; // Förekommer i ämnena "Svenska" och "Svenska som andraspråk"
        case '1-6': return ["1-3", "4-6"]; // Förekommer i ämnet "Hem- och konsumentkunskap"
        case '4-9': return ["4-6", "7-9"]; // Förekommer i ämnet "Moderna språk"
        default: {
            throw new Error("Unexpected year in Skolverket XML: " + inYear + ". Expecting 3,6,9 or 1-3, 4-6, 7-9");
        }
    }
}


/***/ }),

/***/ "./src/components/course-builder/subjects/subjects-inner.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/course-builder/subjects/subjects-inner.tsx ***!
  \*******************************************************************/
/*! exports provided: ShowSubject, SubjectsInner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectsInner", function() { return SubjectsInner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _skolverket_subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skolverket-subject */ "./src/components/course-builder/subjects/skolverket-subject.ts");
/* harmony import */ var _uploaded_subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uploaded-subject */ "./src/components/course-builder/subjects/uploaded-subject.tsx");
/* harmony import */ var _show_subject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show-subject */ "./src/components/course-builder/subjects/show-subject.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowSubject", function() { return _show_subject__WEBPACK_IMPORTED_MODULE_7__["ShowSubject"]; });

/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/components/course-builder/utils.ts");
/* harmony import */ var _sub_components_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");











var SubjectsInner = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectsInner, _super);
    function SubjectsInner(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isListingSubjects: true,
            gymnasiumSubjects: [],
            primarySchoolSubjects: [],
            uploadedSubject: null
        };
        return _this;
    }
    SubjectsInner.prototype.componentWillMount = function () {
        this.load();
    };
    SubjectsInner.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var subjects, gymnasiumSubjects, primarySchoolSubjects;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].kedBackendClient.list("subjects")];
                    case 1:
                        subjects = _a.sent();
                        subjects.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["compareProp"])("name"));
                        gymnasiumSubjects = subjects.filter(function (s) { return s.schoolType !== 'primary'; });
                        primarySchoolSubjects = subjects.filter(function (s) { return s.schoolType === 'primary'; });
                        this.setState({ gymnasiumSubjects: gymnasiumSubjects, primarySchoolSubjects: primarySchoolSubjects, isListingSubjects: false });
                        return [2 /*return*/];
                }
            });
        });
    };
    SubjectsInner.prototype.handleFileSelect = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var files, xml, doc, typeOfSchooling, schoolType, model, courses, i, course, knownledgeRequirements, centralContents, knowledgeRequirements, centralContentsByStadium_1, knowledgeRequirementsByStadium_1, subjectName_1, subjectCode_1, subjectPurpose, coursesByStadium, model;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ev.stopPropagation();
                        ev.preventDefault();
                        files = ev.dataTransfer.files;
                        return [4 /*yield*/, Object(_utils__WEBPACK_IMPORTED_MODULE_9__["readBlobAsText"])(files[0])];
                    case 1:
                        xml = _a.sent();
                        doc = jquery__WEBPACK_IMPORTED_MODULE_4___default()(jquery__WEBPACK_IMPORTED_MODULE_4___default.a.parseXML(xml));
                        typeOfSchooling = doc.find("subject>originatorTypeOfSchooling").text().trim() ||
                            doc.find("subject>typeOfSchooling").text().trim();
                        schoolType = typeOfSchooling === "COMPULSORY_SCHOOL" ?
                            'primary' :
                            typeOfSchooling === "UPPER_SECONDARY_EDUCATION" ?
                                'gymnasium' :
                                null;
                        if (schoolType === 'gymnasium') {
                            model = {
                                name: doc.find("subject>name").text().trim(),
                                code: doc.find("subject>code").text().trim(),
                                purpose: doc.find("subject>purpose").text().trim(),
                                courses: [],
                                schoolType: 'gymnasium'
                            };
                            courses = doc.find("subject>courses");
                            for (i = 0; i < courses.length; ++i) {
                                course = jquery__WEBPACK_IMPORTED_MODULE_4___default()(courses[i]);
                                knownledgeRequirements = [].slice.call(course.find("knowledgeRequirements"))
                                    .map(function (r) { return ({
                                    gradeStep: jquery__WEBPACK_IMPORTED_MODULE_4___default()(r).find('gradeStep').text().trim(),
                                    text: jquery__WEBPACK_IMPORTED_MODULE_4___default()(r).find('text').text().trim()
                                }); });
                                model.courses.push({
                                    name: course.find("name").text().trim(),
                                    code: course.find("code").text().trim(),
                                    centralContent: course.find("centralContent").text().trim(),
                                    points: parseInt(course.find("point").text().trim()),
                                    knownledgeRequirements: knownledgeRequirements,
                                });
                            }
                            this.setState({ uploadedSubject: model });
                        }
                        else {
                            centralContents = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["flatten"])(Array.from(doc.find("subject>centralContent"))
                                .map(function (cc) {
                                var year = jquery__WEBPACK_IMPORTED_MODULE_4___default()(cc).find('year').text().trim();
                                var typeOfCentralContent = jquery__WEBPACK_IMPORTED_MODULE_4___default()(cc).find('typeOfCentralContent').text().trim();
                                if (typeOfCentralContent) {
                                    // Do not yet support multiple types of central content.
                                    throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\u00C4mnet inneh\u00E5ller flera parallella typer av centralt inneh\u00E5ll. Detta st\u00F6ds \u00E4nnu inte."], ["\u00C4mnet inneh\u00E5ller flera parallella typer av centralt inneh\u00E5ll. Detta st\u00F6ds \u00E4nnu inte."]))));
                                }
                                var stadiums = Object(_skolverket_subject__WEBPACK_IMPORTED_MODULE_5__["parseSkolverketYears"])(year);
                                var centralContentsForEachStadium = stadiums.map(function (stadium) { return ({
                                    year: stadium,
                                    text: jquery__WEBPACK_IMPORTED_MODULE_4___default()(cc).find('text').text().trim()
                                }); });
                                return centralContentsForEachStadium;
                            }));
                            knowledgeRequirements = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["flatten"])(Array.from(doc.find("subject>knowledgeRequirement"))
                                .map(function (kr) {
                                var year = jquery__WEBPACK_IMPORTED_MODULE_4___default()(kr).find('year').text().trim();
                                var typeOfRequirement = jquery__WEBPACK_IMPORTED_MODULE_4___default()(kr).find('typeOfRequirement').text().trim();
                                if (typeOfRequirement) {
                                    // Do not yet support multiple types of knowledge requirement.
                                    throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\u00C4mnet inneh\u00E5ller flera parallella typer av kunskapskrav. Detta st\u00F6ds \u00E4nnu inte."], ["\u00C4mnet inneh\u00E5ller flera parallella typer av kunskapskrav. Detta st\u00F6ds \u00E4nnu inte."]))));
                                }
                                return Object(_skolverket_subject__WEBPACK_IMPORTED_MODULE_5__["parseSkolverketYears"])(year).map(function (stadium) { return ({
                                    year: stadium,
                                    text: jquery__WEBPACK_IMPORTED_MODULE_4___default()(kr).find('text').text().trim(),
                                    gradeStep: jquery__WEBPACK_IMPORTED_MODULE_4___default()(kr).find('gradeStep').text().trim()
                                }); });
                            }));
                            centralContentsByStadium_1 = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["arrayToLookup"])(centralContents, function (cc) { return cc.year; });
                            knowledgeRequirementsByStadium_1 = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["arrayToLookup"])(knowledgeRequirements, function (kr) { return kr.year; });
                            subjectName_1 = doc.find("subject>name").text().trim();
                            subjectCode_1 = doc.find("subject>code").text().trim();
                            subjectPurpose = doc.find("subject>purpose").text().trim();
                            coursesByStadium = ['1-3', '4-6', '7-9']
                                .map(function (stadium) { return ({
                                name: subjectName_1 + ' ' + stadium,
                                code: subjectCode_1 + '|' + stadium,
                                points: 0,
                                year: stadium,
                                centralContent: (centralContentsByStadium_1[stadium] || []).map(function (cc) { return cc.text; }).join('\n'),
                                knownledgeRequirements: (knowledgeRequirementsByStadium_1[stadium] || []).map(function (_a) {
                                    var gradeStep = _a.gradeStep, text = _a.text;
                                    return ({ gradeStep: gradeStep, text: text });
                                })
                            }); });
                            model = {
                                name: subjectName_1,
                                code: subjectCode_1,
                                purpose: subjectPurpose,
                                schoolType: 'primary',
                                courses: coursesByStadium
                            };
                            this.setState({ uploadedSubject: model });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SubjectsInner.prototype.onImportSuccess = function (subject) {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["showInfo"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Importen av ", " lyckades"], ["Importen av ", " lyckades"])), subject));
        this.setState({ uploadedSubject: null });
        this.load();
    };
    SubjectsInner.prototype.render = function () {
        var _this = this;
        var linkPrefix = this.props.linkPrefix;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, this.state.uploadedSubject ?
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_uploaded_subject__WEBPACK_IMPORTED_MODULE_6__["UploadedSubject"], { onCancel: function () { return _this.setState({ uploadedSubject: null }); }, onImportSuccess: function (subject) { return _this.onImportSuccess(subject); }, subject: this.state.uploadedSubject })
            : this.state.isListingSubjects ?
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_sub_components_spinner__WEBPACK_IMPORTED_MODULE_10__["Spinner"], null),
                        "Var god v\u00E4nta medan \u00E4mnen h\u00E4mtas...")) :
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Gymnasie\u00E4mnen"], ["Gymnasie\u00E4mnen"])))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null, this.state.gymnasiumSubjects.map(function (s) {
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: s.id, className: s.publishable ? "complete" : "incomplete" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], { to: linkPrefix + s.id }, s.name));
                    })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Grundskole\u00E4mnen"], ["Grundskole\u00E4mnen"])))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null, this.state.primarySchoolSubjects.map(function (s) {
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: s.id, className: s.publishable ? "complete" : "incomplete" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], { to: linkPrefix + s.id }, s.name));
                    })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "drop-zone", onDragOver: _utils__WEBPACK_IMPORTED_MODULE_9__["allowCopy"], onDrop: function (ev) { return _this.handleFileSelect(ev); } },
                        "Droppa Subject-fil h\u00E4r fr\u00E5n skolverket (H\u00E4mtas fr\u00E5n ",
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "http://opendata.skolverket.se", target: "skolverket" }, "opendata.skolverket.se"),
                        ")")));
    };
    return SubjectsInner;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/components/course-builder/subjects/uploaded-subject.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/course-builder/subjects/uploaded-subject.tsx ***!
  \*********************************************************************/
/*! exports provided: UploadedSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadedSubject", function() { return UploadedSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _diff_diff_xml_with_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./diff/diff-xml-with-database */ "./src/components/course-builder/subjects/diff/diff-xml-with-database.ts");







var UploadedSubject = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UploadedSubject, _super);
    function UploadedSubject(props) {
        var _this = _super.call(this, props) || this;
        _this.coursesElems = {};
        _this.centralContentElems = [];
        _this.knowledgeRequirementElems = [];
        _this.state = {
            showFullText: false,
            changes: [],
            isWorking: true,
            isImporting: false
        };
        return _this;
    }
    UploadedSubject.prototype.componentDidMount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, changes, subjectToImport, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.addClassesForCherryPickedElements();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, this.diffWithExisting()];
                    case 2:
                        _a = _b.sent(), changes = _a.changes, subjectToImport = _a.subjectToImport;
                        this.setState({ changes: changes, subjectToImport: subjectToImport });
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _b.sent();
                        this.setState({ error: '' + error_1 });
                        return [3 /*break*/, 5];
                    case 4:
                        this.setState({ isWorking: false });
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UploadedSubject.prototype.addClassesForCherryPickedElements = function () {
        var abilities = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.purposeElem).find('li').first().parent().children('li');
        abilities.addClass('ability');
        var centralContents = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.centralContentElems).find('li');
        centralContents.addClass('central-content');
        var knowledgeRequirements = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.knowledgeRequirementElems).find('p');
        knowledgeRequirements.addClass('knowledge-requirement');
        var all = jquery__WEBPACK_IMPORTED_MODULE_3___default()([abilities, centralContents, knowledgeRequirements]);
        all.addClass('marked-area');
    };
    UploadedSubject.prototype.cherryPickData = function () {
        var _this = this;
        //
        // Reads elements (tagged by classes in addClassesForCherryPickedElements()) and converts their inner HTML to the corresponding
        // model SubjectToImport. Note that if we need to adjust how to pick the right LI or P elements, we
        // will only need to change the code in addClassesForCherryPickedElements(), not this code.
        //
        var skolSubject = this.props.subject;
        var abilitiesLis = Array.from(jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.purposeElem).find('li').first().parent().children('li'));
        var abilities = abilitiesLis.map(function (a, i) { return (i + 1 + ". " + jquery__WEBPACK_IMPORTED_MODULE_3___default()(a).html()).trim(); }).filter(function (html) { return !!html; });
        var result = {
            name: skolSubject.name,
            code: skolSubject.code,
            schoolType: skolSubject.schoolType,
            abilities: abilities,
            courses: Object.keys(this.coursesElems)
                .map(function (courseCode) { return _this.coursesElems[courseCode]; })
                .map(function (_a) {
                var course = _a.course, elem = _a.elem;
                return ({
                    name: course.name,
                    year: course.year,
                    code: course.code,
                    points: course.points,
                    centralContent: Array.from(jquery__WEBPACK_IMPORTED_MODULE_3___default()(elem).find('.central-content')).map(function (c) { return ({
                        html: jquery__WEBPACK_IMPORTED_MODULE_3___default()(c).html().trim(),
                        group: jquery__WEBPACK_IMPORTED_MODULE_3___default()(c).parent('ul').prev('h4').text().trim()
                    }); }).filter(function (_a) {
                        var html = _a.html;
                        return !!html;
                    }),
                    knowledgeRequirements: Array.from(jquery__WEBPACK_IMPORTED_MODULE_3___default()(elem).find('.grade-step-none .knowledge-requirement')).map(function (r) { return jquery__WEBPACK_IMPORTED_MODULE_3___default()(r).html().trim(); })
                        .filter(function (html) { return !!html; })
                        .map(function (html) { return ({ gradeStep: null, html: html }); })
                        .concat(Array.from(jquery__WEBPACK_IMPORTED_MODULE_3___default()(elem).find('.grade-step-E .knowledge-requirement')).map(function (r) { return jquery__WEBPACK_IMPORTED_MODULE_3___default()(r).html().trim(); })
                        .filter(function (html) { return !!html; })
                        .map(function (html) { return ({ gradeStep: "E", html: html }); })
                        .concat(Array.from(jquery__WEBPACK_IMPORTED_MODULE_3___default()(elem).find('.grade-step-C .knowledge-requirement')).map(function (r) { return jquery__WEBPACK_IMPORTED_MODULE_3___default()(r).html().trim(); })
                        .filter(function (html) { return !!html; })
                        .map(function (html) { return ({ gradeStep: "C", html: html }); }))
                        .concat(Array.from(jquery__WEBPACK_IMPORTED_MODULE_3___default()(elem).find('.grade-step-A .knowledge-requirement')).map(function (r) { return jquery__WEBPACK_IMPORTED_MODULE_3___default()(r).html().trim(); })
                        .filter(function (html) { return !!html; })
                        .map(function (html) { return ({ gradeStep: "A", html: html }); })))
                });
            })
        };
        return result;
    };
    UploadedSubject.prototype.diffWithExisting = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            function ct() {
                var rv = createTime;
                createTime += 2;
                return rv;
            }
            var subjectToImport, changes, existingSubjects, existingSubject, centralContent, knowledgeRequirements, createTime, newSubject_1, subjectAbilities, _loop_1, _a, _b, a, _loop_2, _c, _d, c;
            var e_1, _e, e_2, _f;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_g) {
                switch (_g.label) {
                    case 0:
                        subjectToImport = this.cherryPickData();
                        changes = [];
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.list("subjects")];
                    case 1:
                        existingSubjects = _g.sent();
                        existingSubject = existingSubjects.filter(function (s) { return s.code === _this.props.subject.code; })[0];
                        centralContent = [], knowledgeRequirements = [];
                        createTime = Date.now();
                        if (!existingSubject) return [3 /*break*/, 3];
                        // Include abilities and standardCourses with the found Subject:
                        return [4 /*yield*/, Object(_diff_diff_xml_with_database__WEBPACK_IMPORTED_MODULE_6__["diffXmlWithDatabase"])(existingSubject, subjectToImport, changes)];
                    case 2:
                        // Include abilities and standardCourses with the found Subject:
                        _g.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        newSubject_1 = existingSubject = {
                            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
                            schoolType: subjectToImport.schoolType,
                            tags: ["schoolType:" + subjectToImport.schoolType],
                            acl: ["role:USER:R"],
                            code: subjectToImport.code,
                            name: subjectToImport.name,
                            abilitiesOrder: [],
                            publishable: false,
                            dateTime: ct()
                        };
                        changes.push({
                            change: "Nytt ämne",
                            content: subjectToImport.name + " (" + subjectToImport.code + ")",
                            mutations: function (r) { return r.add("subjects", newSubject_1); }
                        });
                        subjectAbilities = [];
                        _loop_1 = function (a) {
                            var newAbility = {
                                id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
                                name: a,
                                acl: ["role:USER:R"],
                                dateTime: ct()
                            };
                            subjectAbilities.push(newAbility); // To refer from in courses later on!
                            changes.push({
                                change: "Ny förmåga",
                                content: a,
                                mutations: function (r) {
                                    r.add("abilities", newAbility);
                                    r.link("subjects", newSubject_1.id, "abilities", newAbility.id, "abilities");
                                }
                            });
                        };
                        try {
                            for (_a = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](subjectToImport.abilities), _b = _a.next(); !_b.done; _b = _a.next()) {
                                a = _b.value;
                                _loop_1(a);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        // Update now when we have abilities order:
                        newSubject_1.abilitiesOrder = subjectAbilities.map(function (_a) {
                            var id = _a.id;
                            return id;
                        });
                        _loop_2 = function (c) {
                            var e_3, _a, e_4, _b, e_5, _c;
                            var newCourse = {
                                id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
                                subjectCode: newSubject_1.code,
                                schoolType: newSubject_1.schoolType,
                                tags: [
                                    "sub:" + newSubject_1.code,
                                    "course:" + c.code,
                                    "schoolType:" + newSubject_1.schoolType
                                ],
                                dateTime: ct(),
                                isTemplate: true,
                                acl: ["role:EMPLOYEE:R"],
                                name: c.name,
                                code: c.code,
                                points: c.points,
                                modules: [],
                                subjectId: newSubject_1.id,
                                resources: [],
                                createdBy: { name: _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser.displayName, url: "mailto:" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser.mail },
                                createdDate: Date.now(),
                                knowledgeRequirementsOrder: [],
                                centralContentOrder: [],
                                abilitiesOrder: subjectAbilities.map(function (_a) {
                                    var id = _a.id;
                                    return id;
                                })
                            };
                            if (c.year)
                                newCourse.schoolGrade = c.year;
                            changes.push({
                                change: "Ny kurs",
                                content: c.name,
                                mutations: function (r) {
                                    r.add("courses", newCourse);
                                    r.link("subjects", newSubject_1.id, "courses", newCourse.id, "courseTemplates");
                                }
                            });
                            var _loop_3 = function (ccGroup, html) {
                                // Check if there exists an identical central content on previous course first
                                var newCentralContent = centralContent.filter(function (cc) { return cc.name === html; })[0];
                                if (!newCentralContent) {
                                    newCentralContent = {
                                        id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
                                        dateTime: ct(),
                                        name: html,
                                        acl: ["role:USER:R"]
                                    };
                                    if (ccGroup)
                                        newCentralContent.group = ccGroup;
                                    centralContent.push(newCentralContent);
                                    changes.push({
                                        change: "Nytt centralt innehåll",
                                        content: "<h4>" + ccGroup + "</h4>" + html,
                                        mutations: function (r) {
                                            r.add("central-content", newCentralContent);
                                            r.link("courses", newCourse.id, "central-content", newCentralContent.id, "centralContent");
                                        }
                                    });
                                }
                                else {
                                    changes.push({
                                        mutations: function (r) {
                                            r.link("courses", newCourse.id, "central-content", newCentralContent.id, "centralContent");
                                        }
                                    });
                                }
                                // Register the order in which this central content appeared in the XML:
                                newCourse.centralContentOrder.push(newCentralContent.id);
                            };
                            try {
                                for (var _d = (e_3 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](c.centralContent)), _e = _d.next(); !_e.done; _e = _d.next()) {
                                    var _f = _e.value, ccGroup = _f.group, html = _f.html;
                                    _loop_3(ccGroup, html);
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                            var _loop_4 = function (cr) {
                                var newKnowledgeRequirement = knowledgeRequirements.filter(function (kr) { return kr.name === cr.html && kr.gradeStep === cr.gradeStep; })[0];
                                if (!newKnowledgeRequirement) {
                                    newKnowledgeRequirement = {
                                        id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
                                        dateTime: ct(),
                                        name: cr.html,
                                        gradeStep: cr.gradeStep,
                                        acl: ["role:USER:R"]
                                    };
                                    knowledgeRequirements.push(newKnowledgeRequirement);
                                    changes.push({
                                        change: "Nytt kunskapskrav för betyget " + cr.gradeStep,
                                        content: cr.html,
                                        mutations: function (r) {
                                            r.add("knowledge-requirements", newKnowledgeRequirement);
                                            r.link("courses", newCourse.id, "knowledge-requirements", newKnowledgeRequirement.id, "knowledgeRequirements");
                                        }
                                    });
                                }
                                else {
                                    changes.push({
                                        mutations: function (r) {
                                            r.link("courses", newCourse.id, "knowledge-requirements", newKnowledgeRequirement.id, "knowledgeRequirements");
                                        }
                                    });
                                }
                                // Register the order in which this knowledge requirement appeared in the XML:
                                newCourse.knowledgeRequirementsOrder.push(newKnowledgeRequirement.id);
                            };
                            try {
                                for (var _g = (e_4 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](c.knowledgeRequirements)), _h = _g.next(); !_h.done; _h = _g.next()) {
                                    var cr = _h.value;
                                    _loop_4(cr);
                                }
                            }
                            catch (e_4_1) { e_4 = { error: e_4_1 }; }
                            finally {
                                try {
                                    if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
                                }
                                finally { if (e_4) throw e_4.error; }
                            }
                            var _loop_5 = function (a) {
                                changes.push({
                                    mutations: function (r) {
                                        r.link("courses", newCourse.id, "abilities", a.id, "abilities");
                                    }
                                });
                            };
                            try {
                                // Build knowledge matrix
                                // Link directly from course template to all abilities that the subject has:
                                for (var subjectAbilities_1 = (e_5 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](subjectAbilities)), subjectAbilities_1_1 = subjectAbilities_1.next(); !subjectAbilities_1_1.done; subjectAbilities_1_1 = subjectAbilities_1.next()) {
                                    var a = subjectAbilities_1_1.value;
                                    _loop_5(a);
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (subjectAbilities_1_1 && !subjectAbilities_1_1.done && (_c = subjectAbilities_1.return)) _c.call(subjectAbilities_1);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                        };
                        try {
                            for (_c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](subjectToImport.courses), _d = _c.next(); !_d.done; _d = _c.next()) {
                                c = _d.value;
                                _loop_2(c);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        _g.label = 4;
                    case 4: return [2 /*return*/, { changes: changes, subjectToImport: subjectToImport }];
                }
            });
        });
    };
    UploadedSubject.prototype.cancel = function () {
        this.props.onCancel();
    };
    UploadedSubject.prototype.import = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var allMutations;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ isWorking: true, isImporting: true });
                        allMutations = this.state.changes.map(function (change) { return change.mutations; });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].kedBackendClient.do(function (r) {
                                allMutations.forEach(function (mut) { return mut(r); });
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.setState({ isWorking: false, isImporting: false });
                        return [7 /*endfinally*/];
                    case 4:
                        this.props.onImportSuccess(this.props.subject.name);
                        return [2 /*return*/];
                }
            });
        });
    };
    UploadedSubject.prototype.fixL = function (html) {
        return html; //.replace('<l fromat="OL">')
    };
    UploadedSubject.prototype.render = function () {
        var _this = this;
        var subjectToImport = this.state.subjectToImport;
        var subject = this.props.subject;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Uppladdat \u00C4mne ", ""], ["Uppladdat \u00C4mne ", ""])), subjectToImport ? subjectToImport.name : '')),
            this.state.error ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                "Fel: ",
                this.state.error) :
                this.state.isWorking ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Arbetar...") :
                    this.state.isImporting ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Importerar...") :
                        this.state.changes.every(function (c) { return !c.change; }) ? // Inga ändringar att visa (bara pseudo-ändringar)
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Kunde inte finna n\u00E5gra f\u00F6r\u00E4ndringar fr\u00E5n befintligt data. Klicka OK f\u00F6r att avbryta och \u00E5terg\u00E5."),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: function () { return _this.cancel(); } }, " OK ")) :
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { style: { border: "1px solid gray", padding: "2px" } },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { colSpan: 2 }, "Granskning av \u00E4ndringar i grund-data")),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "\u00C4ndring"),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Inneh\u00E5ll"))),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, this.state.changes.filter(function (change) { return change.change; }).map(function (change, i) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: i },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { style: { padding: "2px" } }, change.change),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { style: { padding: "2px" }, dangerouslySetInnerHTML: { __html: change.content } })); }))),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: function () { return _this.cancel(); }, disabled: this.state.isImporting }, "Avbryt"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: function () { return _this.import(); }, disabled: this.state.isImporting }, "Importera"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: function () { return _this.setState({ showFullText: !_this.state.showFullText }); } }, this.state.showFullText ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["D\u00F6lj nedan"], ["D\u00F6lj nedan"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Visa hela texten fr\u00E5n Skolverket"], ["Visa hela texten fr\u00E5n Skolverket"])))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { style: { display: this.state.showFullText ? '' : 'none' } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Namn"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, subject.name)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "\u00C4mneskod"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, subject.code)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Syfte"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { ref: function (elem) { return _this.purposeElem = elem; }, dangerouslySetInnerHTML: { __html: this.fixL(subject.purpose) } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Kurser"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, subject.courses.map(function (course) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { key: course.code, ref: function (elem) { return _this.coursesElems[course.code] = { course: course, elem: elem }; } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Kursens namn"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, course.name)),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Kurskod"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, course.code)),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Po\u00E4ng"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, course.points)),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Centralt inneh\u00E5ll"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { ref: function (elem) { return _this.centralContentElems.push(elem); }, dangerouslySetInnerHTML: { __html: _this.fixL(course.centralContent) } })),
                                course.knownledgeRequirements.some(function (kr) { return !kr.gradeStep; }) ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Kunskapskrav utan betygs\u00E4ttning"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "grade-step-none", ref: function (elem) { return _this.knowledgeRequirementElems.push(elem); }, dangerouslySetInnerHTML: { __html: _this.fixL(course.knownledgeRequirements.filter(function (r) { return !r.gradeStep; }).map(function (kr) { return kr.text; }).join('')) } })) : undefined,
                                course.knownledgeRequirements.some(function (kr) { return kr.gradeStep === 'E'; }) ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Kunskapskrav Betyg E"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "grade-step-E", ref: function (elem) { return _this.knowledgeRequirementElems.push(elem); }, dangerouslySetInnerHTML: { __html: _this.fixL(course.knownledgeRequirements.filter(function (r) { return r.gradeStep === 'E'; }).map(function (kr) { return kr.text; }).join('')) } })) : undefined,
                                course.knownledgeRequirements.some(function (kr) { return kr.gradeStep === 'C'; }) ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Kunskapskrav Betyg C"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "grade-step-C", ref: function (elem) { return _this.knowledgeRequirementElems.push(elem); }, dangerouslySetInnerHTML: { __html: _this.fixL(course.knownledgeRequirements.filter(function (r) { return r.gradeStep === 'C'; }).map(function (kr) { return kr.text; }).join('')) } })) : undefined,
                                course.knownledgeRequirements.some(function (kr) { return kr.gradeStep === 'A'; }) ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Kunskapskrav Betyg A"),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "grade-step-A", ref: function (elem) { return _this.knowledgeRequirementElems.push(elem); }, dangerouslySetInnerHTML: { __html: _this.fixL(course.knownledgeRequirements.filter(function (r) { return r.gradeStep === 'A'; }).map(function (kr) { return kr.text; }).join('')) } })) : undefined)); }))))));
    };
    return UploadedSubject;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/course-builder/utils.ts":
/*!************************************************!*\
  !*** ./src/components/course-builder/utils.ts ***!
  \************************************************/
/*! exports provided: updateDocumentGraphs, dtFormat, shortDateFormat, shortPersonNameFormat, updateModificationStamp, updateCreationStamp, getEmailFromDocAccess, updateModificationAndCreationStamps, applyEtags, readBlob, readBlobAsText, readBlobAsDataUrl, allowCopy, updateCourseBuilderStatus, loadCourse, hasChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDocumentGraphs", function() { return updateDocumentGraphs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dtFormat", function() { return dtFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortDateFormat", function() { return shortDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortPersonNameFormat", function() { return shortPersonNameFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateModificationStamp", function() { return updateModificationStamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCreationStamp", function() { return updateCreationStamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmailFromDocAccess", function() { return getEmailFromDocAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateModificationAndCreationStamps", function() { return updateModificationAndCreationStamps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyEtags", function() { return applyEtags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBlob", function() { return readBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBlobAsText", function() { return readBlobAsText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBlobAsDataUrl", function() { return readBlobAsDataUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowCopy", function() { return allowCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCourseBuilderStatus", function() { return updateCourseBuilderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCourse", function() { return loadCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasChanges", function() { return hasChanges; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-addons-update */ "./node_modules/react-addons-update/index.js");
/* harmony import */ var react_addons_update__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_addons_update__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");






function updateDocumentGraphs(oldDoc, newDoc, table, graphs, batch) {
    var e_1, _a;
    var docUpdates = {};
    var docId = newDoc.id;
    var _loop_1 = function (navProp) {
        var e_2, _a, e_3, _b, e_4, _c;
        var foreignTable = graphs[navProp];
        var oldList = oldDoc[navProp] || [];
        var newList = newDoc[navProp];
        if (!newList)
            return "continue";
        var tuples = newList
            .map(function (doc, idx) { return ({ doc: doc, idx: idx }); }); // Create tubles of {doc, array-index} so we can update result
        var added = tuples.filter(function (tuple) { return !oldList.some(function (o) { return o.id === tuple.doc.id; }); }); // Find added items
        try {
            for (var added_1 = (e_2 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](added)), added_1_1 = added_1.next(); !added_1_1.done; added_1_1 = added_1.next()) {
                var a = added_1_1.value;
                var mutatedSubDoc = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, a.doc);
                var meta = mutatedSubDoc.$meta;
                delete mutatedSubDoc.$meta; // Delete $meta so that "add" or "update" does not persiste to next state.
                if (meta === 'add') {
                    if (!mutatedSubDoc.id)
                        mutatedSubDoc.id = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["createUUID"])(); // Generate ID if not done yet.
                    // Now put an 'add' mutation in the batch queue.
                    batch.add(foreignTable, mutatedSubDoc);
                }
                else if (meta === 'update') {
                    batch.put(foreignTable, mutatedSubDoc);
                }
                batch.link(table, docId, foreignTable, mutatedSubDoc.id, navProp);
                // Update result so that state is reflected after succesful POST to server.
                if (!docUpdates[navProp])
                    docUpdates[navProp] = {};
                docUpdates[navProp][a.idx] = { $set: mutatedSubDoc };
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (added_1_1 && !added_1_1.done && (_a = added_1.return)) _a.call(added_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var removed = oldList.filter(function (o) { return !newList.some(function (n) { return n.id === o.id; }); });
        try {
            for (var removed_1 = (e_3 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](removed)), removed_1_1 = removed_1.next(); !removed_1_1.done; removed_1_1 = removed_1.next()) {
                var r = removed_1_1.value;
                batch.unlink(table, docId, foreignTable, r.id, navProp);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (removed_1_1 && !removed_1_1.done && (_b = removed_1.return)) _b.call(removed_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var updated = tuples.filter(function (tuple) { return oldList.some(function (o) { return o.id === tuple.doc.id && tuple.doc.$meta === 'update'; }); });
        try {
            for (var updated_1 = (e_4 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](updated)), updated_1_1 = updated_1.next(); !updated_1_1.done; updated_1_1 = updated_1.next()) {
                var u = updated_1_1.value;
                var mutatedSubDoc = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, u.doc);
                delete mutatedSubDoc.$meta;
                batch.put(foreignTable, mutatedSubDoc);
                // Update result so that $meta is removed from navigation prop after successful POST to server.
                if (!docUpdates[navProp])
                    docUpdates[navProp] = {};
                docUpdates[navProp][u.idx] = { $set: mutatedSubDoc };
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (updated_1_1 && !updated_1_1.done && (_c = updated_1.return)) _c.call(updated_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    try {
        for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(graphs)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var navProp = _c.value;
            _loop_1(navProp);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return react_addons_update__WEBPACK_IMPORTED_MODULE_3___default()(newDoc, docUpdates);
}
function dtFormat(dateTime) {
    return moment__WEBPACK_IMPORTED_MODULE_1___default()(dateTime).format('YYMMDD HH:mm');
}
function shortDateFormat(dateTime) {
    return moment__WEBPACK_IMPORTED_MODULE_1___default()(dateTime).format('YYMMDD');
}
function shortPersonNameFormat(name) {
    if (!name)
        return "";
    var names = name.split(' ').filter(function (n) { return !!n; });
    var lastName = names.pop();
    return names.map(function (name) { return name[0] + "."; }).concat(lastName).join(' ');
}
function updateModificationStamp(now, obj, user) {
    return react_addons_update__WEBPACK_IMPORTED_MODULE_3___default()(obj, {
        dateTime: { $set: now },
        modifiedDate: { $set: now },
        modifiedBy: {
            $set: {
                name: user.displayName,
                url: "mailto:" + user.mail
            }
        }
    });
}
function updateCreationStamp(now, obj, user) {
    return react_addons_update__WEBPACK_IMPORTED_MODULE_3___default()(obj, {
        createdDate: { $set: now },
        createdBy: {
            $set: {
                name: user.displayName,
                url: "mailto:" + user.mail
            }
        }
    });
}
function getEmailFromDocAccess(resource) {
    if (resource.email)
        return resource.email;
    return resource.url ?
        resource.url.startsWith('mailto:') ?
            resource.url.substring('mailto:'.length) :
            resource.url :
        resource.url;
}
function updateModificationAndCreationStamps(obj, user) {
    var now = Date.now();
    obj = updateModificationStamp(now, obj, user);
    if (!obj.createdBy)
        obj = updateCreationStamp(now, obj, user);
    return obj;
}
function applyEtags(doc, newEtags, graphs) {
    var e_5, _a;
    var res = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, doc);
    var etag = newEtags[doc.id];
    if (etag)
        res.$etag = etag;
    try {
        for (var graphs_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](graphs), graphs_1_1 = graphs_1.next(); !graphs_1_1.done; graphs_1_1 = graphs_1.next()) {
            var label = graphs_1_1.value;
            var newList = doc[label].map(function (d) { return applyEtags(d, newEtags, []); });
            res[label] = newList;
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (graphs_1_1 && !graphs_1_1.done && (_a = graphs_1.return)) _a.call(graphs_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return res;
}
function readBlob(blob, m) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function (ev) { return resolve(ev.target.result); };
        reader.onabort = function (ev) { return reject(new Error("file read aborted")); };
        reader.onerror = function (ev) { return reject(ev.target.error); };
        m(reader);
    });
}
function readBlobAsText(blob) {
    return readBlob(blob, function (r) { return r.readAsText(blob); });
}
function readBlobAsDataUrl(blob) {
    return readBlob(blob, function (r) { return r.readAsDataURL(blob); });
}
function allowCopy(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
}
function updateCourseBuilderStatus(status) {
    var div = jquery__WEBPACK_IMPORTED_MODULE_4___default()('div.course-builder')[0];
    if (div)
        div.className = "course-builder" + (status ? " status " + status : "");
}
function loadCourse(id, options) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var client, includeTemplateChain, includeTasks, _a, course, courseTasks, templateChain;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
            switch (_b.label) {
                case 0:
                    client = _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].kedBackendClient;
                    includeTemplateChain = options && options.includeTemplateChain;
                    includeTasks = !options || !options.include || options.include.indexOf("tasks") !== -1;
                    return [4 /*yield*/, Promise.all([
                            client.get("courses", id, {
                                include: options && options.include ? options.include.filter(function (i) { return i !== "tasks"; }) : [
                                    "centralContent",
                                    "knowledgeRequirements",
                                    "abilities",
                                    "images",
                                    "acl" // Don't include tasks here...
                                ]
                            }),
                            // ... but include tasks here instead so that we can load the graphs for the
                            // tasks as well!
                            includeTasks && client.list("tasks", {
                                hasEdgesFrom: id,
                                include: ['knowledgeRequirements', 'centralContent', 'abilities', 'acl'],
                                flags: ['includeIdsOnly'] // Don't need redundant info that's already on course
                            }),
                            includeTemplateChain && client.list("courses", {
                                hasEdgesFrom: id,
                                flags: ['idsOnly']
                            })
                        ])];
                case 1:
                    _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"].apply(void 0, [(_b.sent()), 3]), course = _a[0], courseTasks = _a[1], templateChain = _a[2];
                    course.tasks = courseTasks;
                    // Correct the order of Abilities
                    if (course.abilities && course.abilitiesOrder) {
                        course.abilities = course.abilitiesOrder.map(function (id) {
                            return course.abilities.find(function (a) { return a.id === id; });
                        });
                    }
                    // Correct the order of KnowledgeRequirements
                    if (course.knowledgeRequirements && course.knowledgeRequirementsOrder) {
                        course.knowledgeRequirements = course.knowledgeRequirementsOrder.map(function (id) {
                            return course.knowledgeRequirements.find(function (c) { return c.id === id; });
                        });
                    }
                    // Correct the order of CentralContent
                    if (course.centralContent && course.centralContentOrder) {
                        course.centralContent = course.centralContentOrder.map(function (id) {
                            return course.centralContent.find(function (cc) { return cc.id === id; });
                        }); //.filter(x => !!x);// Debugging somthin' . Normally the last .filter()... part should not be nescessary...
                    }
                    // Include template chain if requested.
                    if (includeTemplateChain)
                        course.templateChain = templateChain;
                    return [2 /*return*/, course];
            }
        });
    });
}
// Check differences between two array of type T
function hasChanges(originalValues, currentValues) {
    return originalValues === undefined || currentValues.filter(function (x) { return !originalValues.includes(x); }).length > 0 || originalValues.filter(function (x) { return !currentValues.includes(x); }).length > 0;
}


/***/ }),

/***/ "./src/components/course-viewer/subcomponents/task-fileview.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/course-viewer/subcomponents/task-fileview.tsx ***!
  \**********************************************************************/
/*! exports provided: FileView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileView", function() { return FileView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FileView = function (_a) {
    var thumbnail = _a.thumbnail, url = _a.url, title = _a.title, label = _a.label, icon = _a.icon, _b = _a.size, size = _b === void 0 ? "small" : _b, customAction = _a.customAction;
    var myLabel = !!label ? label : title;
    var myIcon = !!thumbnail ? thumbnail : icon;
    var hasIcon = !!myIcon;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "file-view " + size },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: customAction ? "#" : url, target: customAction ? undefined : "_blank", title: title }, hasIcon ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: "file-" + (thumbnail ? "thumbnail" : "icon"), src: myIcon, alt: title })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fas fa-file" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: customAction ? "#" : url, target: customAction ? undefined : "_blank", title: title, onClick: customAction }, myLabel)));
};


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

/***/ "./src/components/utility-components/align-horizontal.tsx":
/*!****************************************************************!*\
  !*** ./src/components/utility-components/align-horizontal.tsx ***!
  \****************************************************************/
/*! exports provided: AlignHorizontal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignHorizontal", function() { return AlignHorizontal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var AlignHorizontal = function (_a) {
    var className = _a.className, classNames = _a.classNames, children = _a.children;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]((classNames || []), (className ? [className] : []), ["align-horizontal"]).join(' ') }, children));
};


/***/ }),

/***/ "./src/components/utility-components/checkbox.tsx":
/*!********************************************************!*\
  !*** ./src/components/utility-components/checkbox.tsx ***!
  \********************************************************/
/*! exports provided: UICheckbox, UIAddbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UICheckbox", function() { return UICheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIAddbox", function() { return UIAddbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var UICheckbox = function (_a) {
    var state = _a.state, label = _a.label, onChange = _a.onChange;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: 'ui-checkbox' },
        label,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "checkbox", checked: state == "checked", onChange: onChange }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "custom-element" }));
};
var UIAddbox = function (_a) {
    var state = _a.state, label = _a.label, _b = _a.onChange, onChange = _b === void 0 ? function () { return null; } : _b;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: 'ui-addbox' },
        label,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "checkbox", checked: state == "checked", onChange: onChange }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "custom-element" }));
};


/***/ }),

/***/ "./src/components/utility-components/content-editable-field.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/utility-components/content-editable-field.tsx ***!
  \**********************************************************************/
/*! exports provided: ContentEditableField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentEditableField", function() { return ContentEditableField; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var ContentEditableField = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContentEditableField, _super);
    function ContentEditableField(props) {
        var _this = _super.call(this, props) || this;
        _this.myself = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        _this.state = {
            text: props.text || ''
        };
        return _this;
    }
    ContentEditableField.prototype.render = function () {
        var _a = this.props, tag = _a.tag, text = _a.text, readOnly = _a.readOnly;
        var TagType = tag;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](TagType, { contentEditable: !readOnly, "data-placeholder": this.props.placeholder, ref: this.myself, className: this.props.className, onChange: this.onChange.bind(this), onKeyDown: this.onKeyDown.bind(this), onKeyUp: this.onKeyUp.bind(this), onBlur: this.onBlur.bind(this), onPaste: this.onPaste.bind(this), dangerouslySetInnerHTML: { __html: text } });
    };
    ContentEditableField.prototype.onChange = function (e) {
        this.setState({ text: this.myself.current.innerText });
    };
    /**
     * Take action depending on key-event
     * @param e event from field
     *
     * If allowNavigation then listen to arrow-keys
     * Limits to maxChars
     */
    ContentEditableField.prototype.onKeyDown = function (e) {
        var text = this.myself.current.innerText;
        if (e.key === 'Escape') {
            this.myself.current.innerText = this.props.text || "";
            this.myself.current.blur();
            e.stopPropagation();
        }
        else if (e.key === 'Enter') {
            e.preventDefault();
            this.navigate(text, 'down');
        }
        else if (e.key === 'Tab') {
            this.propagateOnChange(text);
        }
        else if (text.length >= this.props.maxChars && (/^[\d\w\s]$/.test(e.key) && !(e.metaKey || e.ctrlKey))) {
            e.preventDefault();
        }
        if (this.props.allowNavigation === true) {
            var navDir = e.key.startsWith('Arrow') ? e.key.replace('Arrow', '').toLowerCase() : false;
            var caret = document.getSelection().getRangeAt(0).endOffset; // only works for plaintext
            if (navDir && text.length == 0) {
                this.navigate(text, navDir);
            }
            else if (navDir && (navDir == 'up' || navDir == 'down')) {
                this.navigate(text, navDir);
            }
            else if (navDir && ((navDir == 'left' && caret == 0) ||
                (navDir == 'right' && caret == text.length))) {
                this.navigate(text, navDir);
            }
        }
    };
    /**
     *
     * @param e event from field
     * Solely used to hande validations-issues
     */
    ContentEditableField.prototype.onKeyUp = function (e) {
        var text = this.myself.current.innerText;
        if (this.props.validateValue !== undefined && !this.props.validateValue.test(text)) {
            this.myself.current.innerText = this.props.text || "";
            this.myself.current.blur();
            e.preventDefault();
        }
    };
    /**
     * Update value and pass to parents navigate-funciton
     * @param text
     * @param direction
     */
    ContentEditableField.prototype.navigate = function (text, direction) {
        // first update cell
        this.propagateOnChange(text);
        this.setState({ text: text });
        // then navigate away
        this.props.onNavigate(direction);
    };
    /**
     * Make sure pasted text is pure text
     * @param e the paset event
     */
    ContentEditableField.prototype.onPaste = function (e) {
        e.preventDefault();
        var text = (e.clipboardData && e.clipboardData.getData) ? e.clipboardData.getData("text/plain") : '';
        document.execCommand("insertHTML", false, text);
    };
    /**
     * Update value on exit from field
     * @param e
     */
    ContentEditableField.prototype.onBlur = function (e) {
        var text = this.myself.current.innerText;
        this.propagateOnChange(text);
        this.setState({ text: text });
    };
    /**
     * Only update value if it has changed
     * @param newValue
     */
    ContentEditableField.prototype.propagateOnChange = function (newValue) {
        if (this.propagatedOnChange != newValue) {
            this.propagatedOnChange = newValue;
            this.props.onChange(newValue);
        }
    };
    return ContentEditableField;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));



/***/ }),

/***/ "./src/components/utility-components/form-field-text-input.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/utility-components/form-field-text-input.tsx ***!
  \*********************************************************************/
/*! exports provided: TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-field */ "./src/components/utility-components/form-field.tsx");



var TextInput = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextInput, _super);
    function TextInput(props) {
        return _super.call(this, props) || this;
    }
    TextInput.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_form_field__WEBPACK_IMPORTED_MODULE_2__["FormField"], { label: this.props.label },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", autoFocus: this.props.autoFocus, id: this.props.id, size: this.props.size || 35, value: this.props.value, onChange: this.props.onChange && (function (ev) { return _this.props.onChange(ev.target.value); }), disabled: this.props.disabled, placeholder: this.props.placeholder }))));
    };
    return TextInput;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/utility-components/form-field.tsx":
/*!**********************************************************!*\
  !*** ./src/components/utility-components/form-field.tsx ***!
  \**********************************************************/
/*! exports provided: FormField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormField", function() { return FormField; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function findId(node) {
    var recucheck = new Set();
    return (function findId(node) {
        if (typeof node === 'string')
            return null;
        if (recucheck.has(node)) {
            return;
        }
        recucheck.add(node);
        if (node.props) {
            if (node.props.id)
                return node.props.id;
            if (node.props.children) {
                return findId(node.props.children);
            }
            return;
        }
        if (node.length) {
            for (var i = 0; i < node.length; ++i) {
                var child = node[i];
                if (child) {
                    var childId = findId(child);
                    if (childId)
                        return childId;
                    //console.log(child);
                }
            }
        }
    })(node);
}
var FormField = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FormField, _super);
    function FormField(props) {
        return _super.call(this, props) || this;
    }
    FormField.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "kclabel", htmlFor: this.props.id || findId(this.props.children) }, this.props.label),
            this.props.children);
    };
    return FormField;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/utility-components/horizontal-item.tsx":
/*!***************************************************************!*\
  !*** ./src/components/utility-components/horizontal-item.tsx ***!
  \***************************************************************/
/*! exports provided: HorizontalItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalItem", function() { return HorizontalItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var HorizontalItem = function (_a) {
    var className = _a.className, classNames = _a.classNames, children = _a.children;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]((classNames || []), (className ? [className] : []), ["horizontalItem"]).join(' ') }, children));
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

/***/ "./src/components/utility-components/sortable-task-list.tsx":
/*!******************************************************************!*\
  !*** ./src/components/utility-components/sortable-task-list.tsx ***!
  \******************************************************************/
/*! exports provided: taskHasMigratedTexts, SortableTaskList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskHasMigratedTexts", function() { return taskHasMigratedTexts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableTaskList", function() { return SortableTaskList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function taskHasMigratedTexts(task) {
    return task.migratedTexts && Object.keys(task.migratedTexts).some(function (type) {
        return Object.keys(task.migratedTexts[type]).length > 0;
    });
}
function SortableTaskList(_a) {
    var taskMetas = _a.taskMetas, renderEditLink = _a.renderEditLink, renderLink = _a.renderLink, onSort = _a.onSort;
    var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
        taskBeingDragged: null,
        taskBeingHovered: null,
        insertBefore: false,
        originClientY: -1
    }), 2), dragState = _b[0], setDragState = _b[1];
    var taskBeingDragged = dragState.taskBeingDragged, taskBeingHovered = dragState.taskBeingHovered, insertBefore = dragState.insertBefore, originClientY = dragState.originClientY;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "taskContainer sortable", onDrop: function (ev) {
            if (taskBeingHovered && taskBeingDragged) {
                onSort(taskBeingDragged, taskBeingHovered, insertBefore ? 'before' : 'after');
            }
            setDragState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, dragState, { taskBeingHovered: null, taskBeingDragged: null }));
        } }, taskMetas.map(function (taskMeta) {
        var task = taskMeta.task, isTaskOwner = taskMeta.isTaskOwner;
        var hasMigratedTexts = taskHasMigratedTexts(task);
        var taskId = task.id;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, { key: taskId },
            insertBefore && taskBeingHovered === task ?
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "drop-target", onDragOver: function (ev) { return ev.preventDefault(); } }, "\u00A0") :
                null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: ["align-horizontal", "draggable", task === taskBeingDragged && "drag-source"].filter(function (x) { return x; }).join(' '), draggable: true, onDragStart: function (ev) {
                    ev.dataTransfer.effectAllowed = "move";
                    setDragState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, dragState, { originClientY: ev.clientY, taskBeingDragged: task }));
                }, onDragOver: function (ev) {
                    if (!taskBeingDragged)
                        return;
                    if (taskBeingDragged === task) {
                        setDragState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, dragState, { taskBeingHovered: null }));
                        return;
                    }
                    ev.preventDefault();
                    ev.dataTransfer.dropEffect = "move";
                    setDragState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, dragState, { taskBeingHovered: task, insertBefore: originClientY > ev.clientY }));
                }, onDragEnd: function (ev) {
                    setDragState(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, dragState, { taskBeingHovered: null, taskBeingDragged: null }));
                } },
                isTaskOwner && hasMigratedTexts && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "horizontalItem top" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: { position: 'relative', top: '0.2em', left: '-0.7em' } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fa fa-pagelines", style: { position: 'absolute', top: 0, left: 0, color: '#49c35a' } }))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "horizontalItem top" }, renderEditLink(taskMeta)),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "horizontalItem top" }, renderLink(taskMeta))),
            !insertBefore && taskBeingHovered === task ?
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "drop-target", onDragOver: function (ev) { return ev.preventDefault(); } }, "\u00A0") :
                null);
    }));
}


/***/ }),

/***/ "./src/components/utility-components/wysiwyg/actions-sv.ts":
/*!*****************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/actions-sv.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exec */ "./src/components/utility-components/wysiwyg/exec.ts");

/* harmony default export */ __webpack_exports__["default"] = ({
    bold: {
        icon: '<b>F</b>',
        title: 'Fetstil',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('bold'); }
    },
    italic: {
        icon: '<i>K</i>',
        title: 'Kursiv',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('italic'); }
    },
    underline: {
        icon: '<u>U</u>',
        title: 'Understruken',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('underline'); }
    },
    strikethrough: {
        icon: '<strike>S</strike>',
        title: 'Struken',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('strikeThrough'); }
    },
    heading1: {
        icon: '<b>H<sub>1</sub></b>',
        title: 'Rubrik 1',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<H1>'); }
    },
    heading2: {
        icon: '<b>H<sub>2</sub></b>',
        title: 'Rubrik 2',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<H2>'); }
    },
    heading3: {
        icon: '<b>H<sub>3</sub></b>',
        title: 'Rubrik 3',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<H3>'); }
    },
    paragraph: {
        icon: '&#182;',
        title: 'Paragraf',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<P>'); }
    },
    quote: {
        icon: '&#8220; &#8221;',
        title: 'Citat',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<BLOCKQUOTE>'); }
    },
    olist: {
        icon: '<i class="fa fa-list-ol" aria-hidden="true"></i>',
        title: 'Ordnad lista',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('insertOrderedList'); }
    },
    ulist: {
        icon: '<i class="fa fa-list" aria-hidden="true"></i>',
        title: 'Punktlista',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('insertUnorderedList'); }
    },
    outdent: {
        icon: '<i class="fa fa-outdent" aria-hidden="true"></i>',
        title: 'Minska indrag',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])("outdent"); }
    },
    indent: {
        icon: '<i class="fa fa-indent" aria-hidden="true"></i>',
        title: 'Öka indrag',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])("indent"); },
    },
    code: {
        icon: '&lt;/&gt;',
        title: 'Programkod',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<PRE>'); }
    },
    line: {
        icon: '&#8213;',
        title: 'Vågrät linje',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('insertHorizontalRule'); }
    },
    link: {
        icon: '<i class="fa fa-link" aria-hidden="true"></i>',
        title: 'Infoga länk',
        result: function () {
            var url = window.prompt('Ange länkens URL');
            if (url) {
                var selected = document.getSelection();
                var elem = document.createElement('a');
                elem.href = url;
                elem.target = "_blank";
                elem.appendChild(document.createTextNode(selected.toString()));
                Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('insertHTML', elem.outerHTML);
            }
        }
    },
    image: {
        icon: '<i class="fa fa-picture-o" aria-hidden="true"></i>',
        title: 'Infoga bild',
        promptMsg: 'Ange bildens URL',
        result: function (ev, component) {
            var url = window.prompt(this.promptMsg);
            if (url) {
                //exec('insertImage', url);
                var img = document.createElement("img");
                img.src = url;
                img.tabIndex = 1;
                insertElement(img);
                img.onfocus = component.onFocus;
                img.onblur = component.onBlur;
                component.props.onChange(component.contentDiv.innerHTML);
            }
        }
    }
});
function insertElement(element) {
    var sel, range;
    if (window.getSelection && (sel = window.getSelection()).rangeCount) {
        range = sel.getRangeAt(0);
        range.collapse(true);
        range.insertNode(element);
        // Move the caret immediately after the inserted span
        range.setStartAfter(element);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    }
}


/***/ }),

/***/ "./src/components/utility-components/wysiwyg/actions.ts":
/*!**************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/actions.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exec */ "./src/components/utility-components/wysiwyg/exec.ts");

/* harmony default export */ __webpack_exports__["default"] = ({
    bold: {
        icon: '<b>B</b>',
        title: 'Bold',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('bold'); }
    },
    italic: {
        icon: '<i>I</i>',
        title: 'Italic',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('italic'); }
    },
    underline: {
        icon: '<u>U</u>',
        title: 'Underline',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('underline'); }
    },
    strikethrough: {
        icon: '<strike>S</strike>',
        title: 'Strike-through',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('strikeThrough'); }
    },
    heading1: {
        icon: '<b>H<sub>1</sub></b>',
        title: 'Heading 1',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<H1>'); }
    },
    heading2: {
        icon: '<b>H<sub>2</sub></b>',
        title: 'Heading 2',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<H2>'); }
    },
    heading3: {
        icon: '<b>H<sub>3</sub></b>',
        title: 'Heading 3',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<H3>'); }
    },
    paragraph: {
        icon: '&#182;',
        title: 'Paragraph',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<P>'); }
    },
    quote: {
        icon: '&#8220; &#8221;',
        title: 'Quote',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<BLOCKQUOTE>'); }
    },
    olist: {
        icon: '&#35;',
        title: 'Ordered List',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('insertOrderedList'); }
    },
    ulist: {
        icon: '&#8226;',
        title: 'Unordered List',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('insertUnorderedList'); }
    },
    outdent: {
        icon: '<i class="fa fa-outdent" aria-hidden="true"></i>',
        title: 'Outdent',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])("outdent"); }
    },
    indent: {
        icon: '<i class="fa fa-indent" aria-hidden="true"></i>',
        title: 'Indent',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])("indent"); },
    },
    code: {
        icon: '&lt;/&gt;',
        title: 'Code',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<PRE>'); }
    },
    line: {
        icon: '&#8213;',
        title: 'Horizontal Line',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('insertHorizontalRule'); }
    },
    link: {
        icon: '&#128279;',
        title: 'Link',
        result: function () {
            var url = window.prompt('Enter the link URL');
            if (url) {
                var selected = document.getSelection();
                var elem = document.createElement('a');
                elem.href = url;
                elem.target = "_blank";
                elem.appendChild(document.createTextNode(selected.toString()));
                Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('insertHTML', elem.outerHTML);
            }
        }
    },
    image: {
        icon: '&#128247;',
        title: 'Image',
        promptMsg: 'Enter the URL of the image',
        result: function () {
            var url = window.prompt(this.promptMsg);
            if (url)
                Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('insertImage', url);
        }
    }
});


/***/ }),

/***/ "./src/components/utility-components/wysiwyg/exec.ts":
/*!***********************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/exec.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (command, value) {
    if (value === void 0) { value = null; }
    document.execCommand(command, false, value);
});


/***/ }),

/***/ "./src/components/utility-components/wysiwyg/image-edit-actions.ts":
/*!*************************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/image-edit-actions.ts ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return imageEditActions; });
function imageEditActions(cb) {
    return [{
            name: 'float-left',
            icon: "<div style=\"position:relative\">\n      <i class=\"fa fa-align-right\" aria-hidden=\"true\"></i>\n      <div style=\"position:absolute; left:-4px;top:0; transform: scale(0.5); transform-origin: left top\">\n        <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n      </div>\n    </div>",
            title: 'Låt bilden flyta vänster om text',
            result: function () { return cb('float-left'); }
        }, {
            name: 'float-right',
            icon: "<div style=\"position:relative\">\n      <i class=\"fa fa-align-left\" aria-hidden=\"true\"></i>\n      <div style=\"position:absolute; right:-4px;top:0; transform: scale(0.5); transform-origin: right top\">\n        <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n      </div>\n    </div>",
            title: 'Låt bilden flyta höger om text',
            result: function () { return cb('float-right'); }
        }, {
            name: 'unfloat',
            icon: "<div style=\"position:relative;\" aria-hidden=\"true\">\n      <div style=\"position:absolute;top:0;left:0\">&#8254;</div>\n      <div style=\"position:absolute;top:0:left:0;transform: scale(0.5); transform-origin: left bottom\">\n        <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n      </div>\n      <div style=\"position:absolute;top:0;left:0\">_</div>\n    </div>",
            title: 'Placera bilden på egen rad',
            result: function () { return cb('unfloat'); }
        }];
}


/***/ }),

/***/ "./src/components/utility-components/wysiwyg/index.tsx":
/*!*************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/index.tsx ***!
  \*************************************************************/
/*! exports provided: Wysiwyg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wysiwyg", function() { return Wysiwyg; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exec */ "./src/components/utility-components/wysiwyg/exec.ts");
/* harmony import */ var _wash_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wash-html */ "./src/components/utility-components/wysiwyg/wash-html.ts");
/* harmony import */ var _image_edit_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-edit-actions */ "./src/components/utility-components/wysiwyg/image-edit-actions.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/components/utility-components/wysiwyg/actions.ts");






var classes = {
    actionbar: 'wysiwyg-actionbar',
    button: 'wysiwyg-button',
    content: 'wysiwyg-content',
    focusrect: 'wysiwyg-focusrect',
    focuspoint: 'wysiwyg-focuspoint',
    readonlyContent: 'wysiwyg-content readonly'
};
var Wysiwyg = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Wysiwyg, _super);
    function Wysiwyg(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { focusRect: null };
        _this.onFocus = _this.onFocus.bind(_this);
        _this.onBlur = _this.onBlur.bind(_this);
        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        return _this;
    }
    Wysiwyg.prototype.componentDidMount = function () {
        var _this = this;
        if (!this.props.readOnly) {
            Array.from(this.contentDiv.querySelectorAll("img,a")).map(function (elem) { return elem; })
                .forEach(function (elem) {
                elem.tabIndex = 1;
                elem.onfocus = _this.onFocus;
                elem.onblur = _this.onBlur;
            });
        }
        if (this.props.reportNumChars) {
            this.props.reportNumChars((this.contentDiv && this.contentDiv.innerText && this.contentDiv.innerText.length) || 0);
        }
    };
    Wysiwyg.prototype.componentDidUpdate = function () {
        var _this = this;
        Array.from(this.contentDiv.querySelectorAll("img,a")).map(function (elem) { return elem; })
            .forEach(function (elem) {
            elem.tabIndex = 1;
            elem.onfocus = _this.onFocus;
            elem.onblur = _this.onBlur;
        });
        if (this.props.reportNumChars) {
            this.props.reportNumChars((this.contentDiv && this.contentDiv.innerText && this.contentDiv.innerText.length) || 0);
        }
    };
    Wysiwyg.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        //this.contentDiv.onfocus = this.onFocus;
        //this.contentDiv.onblur = this.onBlur;
        return !this.contentDiv ||
            nextState != this.state ||
            nextProps.readOnly !== this.props.readOnly ||
            Object(_wash_html__WEBPACK_IMPORTED_MODULE_3__["washHtml"])(nextProps.html) !== Object(_wash_html__WEBPACK_IMPORTED_MODULE_3__["washHtml"])(this.contentDiv.innerHTML);
    };
    Wysiwyg.prototype.triggerOnChange = function (html) {
        this.props.onChange && this.props.onChange(Object(_wash_html__WEBPACK_IMPORTED_MODULE_3__["washHtml"])(html));
    };
    Wysiwyg.prototype.onFocus = function (ev) {
        var elem = ev.target;
        if (!elem || !elem.tagName)
            return;
        if (elem.tagName !== 'IMG' && elem.tagName !== 'A')
            return;
        var contentParent = this.contentDiv.parentElement;
        var newState = {
            focusRect: getRelatativeClientRect(contentParent, elem),
        };
        switch (elem.tagName) {
            case 'A':
            case 'IMG':
            default: break;
        }
        this.setState(newState);
        this.focusElem = elem;
    };
    Wysiwyg.prototype.onBlur = function (ev) {
        /*if (ev.relatedTarget) {
          const relatedTarget = ev.relatedTarget as HTMLElement;
          if (relatedTarget.className && relatedTarget.className.split(' ').indexOf(classes.button) >= 0) {
            // A image action button was pressed
            set
            return;
          }
        }*/
        if ((ev.target === this.focusElem && ev.relatedTarget !== this.focusRectDiv) ||
            ev.target === this.focusRectDiv) {
            this.setState({ focusRect: null });
        }
    };
    Wysiwyg.prototype.makeClickable = function (elem) {
        elem.tabIndex = 1;
    };
    Wysiwyg.prototype.onMouseDown = function (ev) {
        if ((ev.target.className || "").split(' ').indexOf(classes.focuspoint) >= 0) {
            var corner = this.getRectCorner(ev);
            this.corner = corner;
            this.resizeStartX = ev.clientX;
        }
    };
    Wysiwyg.prototype.onMouseMove = function (ev) {
        if (this.corner && this.state.focusRect && this.focusElem) {
            ev.preventDefault();
            // TODO: Räkna ut baserat på this.corner hur bildens storlek borde ändras.
            // Leta upp bilden per ID från this.contentDiv
            // Sätt DIV:ens style attribut width till ny width.
            // Om DIV:en redan hade height, sätt ny height med samma aspect ratio som innan,
            // annars, sätt inte height alls (eller möjligtvis till auto))
            var focusRect = this.focusRectDiv.getBoundingClientRect();
            if (focusRect.width < 32)
                return;
            //const currentWidth = focusRect.width;
            //const currentHeight = focusRect.height;
            //const hasHeightStyle = !this.focusElem.style.height || this.focusElem.style.height === "auto";
            var newWidth = Math.max(32, this.corner.endsWith('l') ?
                focusRect.width + (this.resizeStartX - ev.clientX) :
                //focusRect.right - ev.clientX :
                focusRect.width - (this.resizeStartX - ev.clientX));
            this.resizeStartX = ev.clientX;
            //ev.clientX - focusRect.left;
            var factor = newWidth / focusRect.width;
            var newHeight = focusRect.height * factor;
            this.focusElem.style.width = newWidth + "px";
            this.focusElem.style.height = newHeight + "px";
            this.setState({
                focusRect: getRelatativeClientRect(this.contentDiv.parentElement, this.focusElem),
            });
        }
    };
    Wysiwyg.prototype.onMouseUp = function (ev) {
        if (this.corner && this.state.focusRect && this.focusElem) {
            this.corner = null;
            this.triggerOnChange(this.contentDiv.innerHTML);
        }
    };
    Wysiwyg.prototype.getRectCorner = function (ev) {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"]((ev.target.className || '').split(' ')), _c = _b.next(); !_c.done; _c = _b.next()) {
                var className = _c.value;
                switch (className) {
                    case 'fpul':
                        return 'ul';
                    case 'fpur':
                        return 'fpur';
                    case 'fplr':
                        return 'lr';
                    case 'fpll':
                        return 'll';
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    Wysiwyg.prototype.execImageEditAction = function (cmd) {
        //console.log(cmd);
        if (!this.focusElem)
            return;
        //console.log("doing it");
        switch (cmd) {
            case 'float-left':
                this.focusElem.style.cssFloat = 'left';
                break;
            case 'float-right':
                this.focusElem.style.cssFloat = 'right';
                break;
            case 'unfloat':
                this.focusElem.style.cssFloat = '';
                break;
        }
        this.triggerOnChange(this.contentDiv.innerHTML);
        this.setState({ focusRect: getRelatativeClientRect(this.contentDiv.parentElement, this.focusElem) });
    };
    Wysiwyg.prototype.render = function () {
        var _this = this;
        var defaultActions = this.props.defaultActions || _actions__WEBPACK_IMPORTED_MODULE_5__["default"];
        var actionsToUse = this.props.actions ? this.props.actions.map(function (action) {
            return typeof action === 'string' ?
                defaultActions[action] :
                defaultActions[action.name] ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, defaultActions[action.name], action) :
                    action;
        })
            : Object.keys(defaultActions).map(function (action) { return defaultActions[action]; });
        if (this.state.focusRect) {
            actionsToUse = actionsToUse.concat(Object(_image_edit_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(function (cmd) { return _this.execImageEditAction(cmd); }));
        }
        var focusRect = this.state.focusRect;
        var _a = this.props, readOnly = _a.readOnly, reportNumChars = _a.reportNumChars, maxChars = _a.maxChars;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this.props.className },
            !readOnly && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classes.actionbar }, actionsToUse.map(function (action, idx) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { key: idx, className: classes.button, dangerouslySetInnerHTML: { __html: action.icon }, title: action.title, onMouseDown: function (ev) { action.result(ev, _this); }, onMouseUp: function (ev) { return setTimeout(function () { return _this.contentDiv.focus(); }, 10); } });
            })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: readOnly ? classes.readonlyContent : classes.content, style: { position: 'relative', top: 0, left: 0 }, onMouseMove: this.onMouseMove, onMouseDown: this.onMouseDown, onMouseUp: this.onMouseUp },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "editor", ref: function (div) { return _this.contentDiv = div; }, dangerouslySetInnerHTML: { __html: Object(_wash_html__WEBPACK_IMPORTED_MODULE_3__["washHtml"])(this.props.html) }, contentEditable: !readOnly, onPaste: function (ev) {
                        if (!isNaN(maxChars)) {
                            var target = ev.target, currentTarget = ev.currentTarget;
                            //const textBeingOverwritten = (target as any).innerText || "";
                            var editorText = (currentTarget && currentTarget.innerText) || "";
                            var textBeingPasted = ev.clipboardData.getData("text/plain") || "";
                            if (editorText.length + textBeingPasted.length > maxChars) {
                                ev.preventDefault();
                            }
                        }
                    }, onKeyUp: reportNumChars ? function (ev) {
                        var innerText = ev.target.innerText;
                        reportNumChars(innerText ? innerText.length : 0);
                    } : null, onKeyPress: !isNaN(maxChars) ? function (ev) {
                        var innerText = ev.target.innerText;
                        if (innerText && innerText.length >= maxChars) {
                            ev.preventDefault();
                        }
                    } : null, onInput: function (ev) { return _this.triggerOnChange(ev.target.innerHTML); }, onKeyDown: function (ev) {
                        if (readOnly)
                            return;
                        if (reportNumChars && ev.currentTarget) {
                            reportNumChars((ev.currentTarget.innerText || "").length);
                        }
                        //console.log("Key: " + ev.which);
                        if (ev.which >= 35 && ev.which <= 40) { // home/end/up/down/left/right
                            ev.stopPropagation(); // Prevent entire page from scrolling??
                        }
                        if (ev.which === 9) {
                            ev.preventDefault(); // TAB
                            if (ev.shiftKey) {
                                Object(_exec__WEBPACK_IMPORTED_MODULE_2__["default"])("outdent");
                            }
                            else {
                                Object(_exec__WEBPACK_IMPORTED_MODULE_2__["default"])("indent");
                            }
                        }
                        if ((ev.keyCode === 8 || ev.keyCode === 46) && // Delete or Back buttons
                            _this.focusElem && _this.state.focusRect) {
                            if (_this.focusElem && _this.focusElem.parentElement) {
                                _this.focusElem.parentElement.removeChild(_this.focusElem); // Remove marked image
                            }
                            _this.focusElem = null;
                            _this.setState({ focusRect: null });
                            _this.triggerOnChange(_this.contentDiv.innerHTML);
                        }
                    } }),
                focusRect && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: function (div) { return _this.focusRectDiv = div; }, className: classes.focusrect, onBlur: this.onBlur, tabIndex: 1, style: {
                        outline: 0,
                        position: 'absolute',
                        top: this.state.focusRect.top,
                        left: this.state.focusRect.left,
                        width: this.state.focusRect.width,
                        height: this.state.focusRect.height
                    } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classes.focuspoint + " fpul", style: { position: 'absolute', top: 0, left: 0 } }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classes.focuspoint + " fpur", style: { position: 'absolute', top: 0, right: 0 } }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classes.focuspoint + " fplr", style: { position: 'absolute', bottom: 0, right: 0 } }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classes.focuspoint + " fpll", style: { position: 'absolute', bottom: 0, left: 0 } }))));
    };
    return Wysiwyg;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function getRelatativeClientRect(parent, child) {
    var parentRect = parent.getBoundingClientRect();
    var childRect = child.getBoundingClientRect();
    return {
        top: childRect.top - parentRect.top + parent.scrollTop,
        left: childRect.left - parentRect.left + parent.scrollLeft,
        bottom: childRect.bottom - parentRect.top + parent.scrollTop,
        right: childRect.right - parentRect.left + parent.scrollLeft,
        width: childRect.width,
        height: childRect.height
    };
}


/***/ }),

/***/ "./src/components/utility-components/wysiwyg/wash-html.ts":
/*!****************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/wash-html.ts ***!
  \****************************************************************/
/*! exports provided: washHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "washHtml", function() { return washHtml; });
var parser = new DOMParser();
/** Tags / Attributes Whitelist
 *
 */
var HTML_WASH_POLICY = {
    b: {},
    i: {},
    p: {},
    u: {},
    strike: {},
    pre: {},
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    img: { src: true, class: true, style: true, tabindex: true },
    a: { href: true, target: true, tabindex: true },
    ul: {},
    ol: {},
    li: {},
    hr: {},
    br: {},
    div: {},
    span: {},
    // table tags:
    table: { border: true },
    tbody: {},
    thead: {},
    tfoot: {},
    tr: {},
    td: { headers: true, colspan: true, rowspan: true },
    th: { abbr: true, headers: true, scope: true, sorted: true, colspan: true, rowspan: true }
};
function washHtml(html) {
    var doc = parser.parseFromString(html, "text/html");
    var childNodes = doc.body.childNodes;
    var modified = false;
    for (var i = 0; i < childNodes.length; ++i) {
        if (washNode(childNodes.item(i))) {
            modified = true;
        }
    }
    return modified ?
        doc.body.innerHTML :
        html; // By returning the original HTML string, we spare the user from refreshing the edit area,
    // which would otherwise put the cursor at the top, losing the position where user where.
}
function washNode(node) {
    var modified = false;
    if (isElement(node)) {
        if (washElement(node)) {
            modified = true;
        }
    }
    if (washChildNodes(node)) {
        modified = true;
    }
    return modified;
}
function washChildNodes(node) {
    var modified = false;
    var childNodes = node.childNodes;
    for (var i = 0; i < childNodes.length; ++i) {
        if (washNode(childNodes.item(i))) {
            modified = true;
        }
    }
    return modified;
}
/** Replace an element with its child nodes.
 *
 */
function removeMiddleElement(element) {
    var childNodes = element.childNodes;
    for (var i = 0; i < childNodes.length; ++i) {
        element.parentNode.insertBefore(childNodes.item(i), element);
    }
    element.remove();
}
function washElement(element) {
    var policy = element.tagName && HTML_WASH_POLICY[element.tagName.toLowerCase()];
    if (!policy) {
        console.warn("Wysiwyg: not allowed tag", element.tagName);
        washChildNodes(element);
        removeMiddleElement(element);
        return true;
    }
    var modified = false;
    for (var i = 0; i < element.attributes.length; ++i) {
        var attr = element.attributes.item(i);
        var allowed = attr.name && !!policy[attr.name.toLowerCase()];
        if (!allowed) {
            modified = true;
            console.warn("Wysiwyg: not allowed attribute", attr.name, "Tag: ", element.tagName);
            element.removeAttribute(attr.name);
        }
    }
    return modified;
}
function isElement(node) {
    return !!node.tagName;
}


/***/ }),

/***/ "./src/contracts/ked-models.ts":
/*!*************************************!*\
  !*** ./src/contracts/ked-models.ts ***!
  \*************************************/
/*! exports provided: Course, futureAbilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "futureAbilities", function() { return futureAbilities; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());

var futureAbilities = [
    "Lära att lära",
    "Samarbeta",
    "Agera globalt",
    "Visa handlingskraft",
    "Vara innovativ",
    "Leva digitalt"
];


/***/ }),

/***/ "./src/elements/KEDAppCourseBuilder/app.coursebuilder.client.tsx":
/*!***********************************************************************!*\
  !*** ./src/elements/KEDAppCourseBuilder/app.coursebuilder.client.tsx ***!
  \***********************************************************************/
/*! exports provided: KEDAppCourseBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEDAppCourseBuilder", function() { return KEDAppCourseBuilder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _global_setters_set_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global-setters/set-all */ "./src/global-setters/set-all.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_course_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/course-builder */ "./src/components/course-builder/index.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _components_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _components_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_utility_components_SetupLanguageIntl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/utility-components/SetupLanguageIntl */ "./src/components/utility-components/SetupLanguageIntl.tsx");




var bearerPromise = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].bearerProvider.getBearer(); // Start getting bearer as soon as possible.







var _KEDAppCourseBuilder = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](_KEDAppCourseBuilder, _super);
    function _KEDAppCourseBuilder(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isTokenLoaded: false
        };
        return _this;
    }
    _KEDAppCourseBuilder.prototype.componentWillMount = function () {
        var _this = this;
        bearerPromise.then(function () {
            _this.setState({ isTokenLoaded: true });
        }).catch(function (err) {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["showError"])(err);
        });
    };
    _KEDAppCourseBuilder.prototype.render = function () {
        var intl = this.props.intl;
        return this.state.isTokenLoaded ?
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_8__["LanguageContext"].Provider, { value: { intl: intl } },
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_course_builder__WEBPACK_IMPORTED_MODULE_5__["CourseBuilder"], { viewCourseUrl: _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_3__["default"].KED_COURSE_VIEWER_URL, feedbackUrl: this.props.feedbackUrl })) :
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", null,
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_7__["Spinner"], null),
                "V.g. v\u00E4nta... autenticerar...");
    };
    return _KEDAppCourseBuilder;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]));
var KEDAppCourseBuilder = Object(_components_utility_components_SetupLanguageIntl__WEBPACK_IMPORTED_MODULE_10__["setupIntl"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"])(_KEDAppCourseBuilder));


/***/ }),

/***/ "./src/elements/KEDAppCourseBuilder/webpack-entry.ts":
/*!***********************************************************!*\
  !*** ./src/elements/KEDAppCourseBuilder/webpack-entry.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _globals_KED__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals/KED */ "./src/globals/KED.ts");
/* harmony import */ var _app_coursebuilder_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.coursebuilder.client */ "./src/elements/KEDAppCourseBuilder/app.coursebuilder.client.tsx");



// Add KEDAppCourseBuilder to the set of components in KED.components
_globals_KED__WEBPACK_IMPORTED_MODULE_1__["default"].components = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _globals_KED__WEBPACK_IMPORTED_MODULE_1__["default"].components, { KEDAppCourseBuilder: _app_coursebuilder_client__WEBPACK_IMPORTED_MODULE_2__["KEDAppCourseBuilder"] });


/***/ }),

/***/ "./src/features/feature-flags.json":
/*!*****************************************!*\
  !*** ./src/features/feature-flags.json ***!
  \*****************************************/
/*! exports provided: picker, ksTutorComment, kgTutorComment, termplannerCharts, weekplannerCharts, teacherRights, studyGroups, cbCollapseBoxes, ksAssignments, markPartialKRs, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"picker\":\"Integrate coursebuilder and subjectplanner with Google Picker\",\"ksTutorComment\":\"Integrate KSTermplanner with tutor comments\",\"kgTutorComment\":\"Integrate KSTermplanner  with tutor comments\",\"termplannerCharts\":\"Integrate KSTermplanner with progress charts\",\"weekplannerCharts\":\"Integrate Weekplanner with progress charts\",\"teacherRights\":\"Activate course builder teacher rights\",\"studyGroups\":\"Add study groups and google classroom functionality\",\"cbCollapseBoxes\":\"Course Builder: Collapse modules by default\",\"ksAssignments\":\"KS show hand-in assignments\",\"markPartialKRs\":\"Activate mark partial knowledge requirments functionality\"}");

/***/ }),

/***/ "./src/features/features.ts":
/*!**********************************!*\
  !*** ./src/features/features.ts ***!
  \**********************************/
/*! exports provided: Features, features */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Features", function() { return Features; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "features", function() { return features; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/query-string */ "./src/utils/query-string.ts");
/* harmony import */ var _feature_flags_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature-flags.json */ "./src/features/feature-flags.json");
var _feature_flags_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./feature-flags.json */ "./src/features/feature-flags.json", 1);
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals/KED.cfg */ "./src/globals/KED.cfg.ts");




var Features = /** @class */ (function () {
    function Features() {
        var e_1, _a;
        this._initialized = false;
        var _loop_1 = function (featureName) {
            Object.defineProperty(this_1, featureName, {
                get: function () {
                    if (!this._initialized)
                        this.init();
                    return this._features[featureName];
                },
                set: function (value) {
                    throw new Error('Feature flags cannot be set here');
                }
            });
        };
        var this_1 = this;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(_feature_flags_json__WEBPACK_IMPORTED_MODULE_2__)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var featureName = _c.value;
                _loop_1(featureName);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Features.prototype.init = function () {
        var e_2, _a;
        if (this._initialized)
            return;
        var turnedOnFeatures = (_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_3__["cfg"].KED_FEATURES || "").split(',').map(function (name) { return name.trim().toLowerCase(); });
        var query = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_1__["parseQueryString"])(location.search, { toLower: true });
        if (query.testversion) {
            turnedOnFeatures = ["*"];
        }
        if (query.features) {
            turnedOnFeatures = query.features
                .split(',')
                .map(function (feature) { return feature.trim().toLowerCase(); });
        }
        var turnOnAll = turnedOnFeatures.includes('*');
        this._features = {};
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(_feature_flags_json__WEBPACK_IMPORTED_MODULE_2__)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var featureName = _c.value;
                this._features[featureName] = turnOnAll ||
                    turnedOnFeatures.includes(featureName.toLowerCase());
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this._initialized = true;
    };
    return Features;
}());

var features = new Features();


/***/ }),

/***/ "./src/features/index.ts":
/*!*******************************!*\
  !*** ./src/features/index.ts ***!
  \*******************************/
/*! exports provided: Features, features */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features */ "./src/features/features.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Features", function() { return _features__WEBPACK_IMPORTED_MODULE_0__["Features"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "features", function() { return _features__WEBPACK_IMPORTED_MODULE_0__["features"]; });




/***/ }),

/***/ "./src/global-setters/configure.ts":
/*!*****************************************!*\
  !*** ./src/global-setters/configure.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/KED.cfg */ "./src/globals/KED.cfg.ts");

_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].ENVIRONMENT = "test";
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_API_URL = "https://backend.kedschools.com/kedbackend-next/api/"; // "https://kedbackendtest.azurewebsites.net/api/"
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].EDS_API_URL = "https://edsportalowinapitest.azurewebsites.net/studentportal/"; // "https://edsportalowinapi.azurewebsites.net/api/"
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_TOKEN_URL = ""; // "https://kedauthtest.azurewebsites.net/token"
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_CLIENT_ID = ""; // "devclient", "testclient", "..."
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_CLIENT_SECRET = "";
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_REALM = "SE1"; // "SE1"
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_LOCALE = _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_LOCALE || "sv"; // "sv", "en". Only set from process.env if not set from SiteVision element config.
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_SCHOOL_LOCALE = _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_SCHOOL_LOCALE || "sv"; // "sv", "en_sin", "en_nin". Only set from process.env if not set from SiteVision element config.
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_RESOURCES_URL = _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_RESOURCES_URL || process.env.KED_RESOURCES_URL;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/global-setters/set-all.ts":
/*!***************************************!*\
  !*** ./src/global-setters/set-all.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configure */ "./src/global-setters/configure.ts");
/* harmony import */ var _set_bearer_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-bearer-providers */ "./src/global-setters/set-bearer-providers.ts");
/* harmony import */ var _set_ked_backend_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-ked-backend-client */ "./src/global-setters/set-ked-backend-client.ts");
/* harmony import */ var _set_eds_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set-eds-client */ "./src/global-setters/set-eds-client.ts");
/* These scripts assume some of the global vars have already been set:
  * KED.cfg
  * KED.env.currentUser

  The rest will be set here (client side)
*/






/***/ }),

/***/ "./src/global-setters/set-bearer-providers.ts":
/*!****************************************************!*\
  !*** ./src/global-setters/set-bearer-providers.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/query-string */ "./src/utils/query-string.ts");
/* harmony import */ var kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/clientweb */ "./kedbackend/clientweb.js");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _access_control_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../access-control/index */ "./src/access-control/index.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");








var employeeClassroomScopes = [
    "https://www.googleapis.com/auth/classroom.courses",
    "https://www.googleapis.com/auth/classroom.profile.emails",
    "https://www.googleapis.com/auth/classroom.rosters",
    "https://www.googleapis.com/auth/classroom.coursework.students"
];
var studentClassroomScopes = [
    "https://www.googleapis.com/auth/classroom.courses",
    "https://www.googleapis.com/auth/classroom.coursework.me"
];
function getMergedTokenPath(tokenPath, locationSearch, scopes) {
    // Merge configured query params of token path with params given to current page
    var currentQuery = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_1__["parseQueryString"])(locationSearch);
    var impersonationProps = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["cherryPickProps"])(currentQuery, _access_control_index__WEBPACK_IMPORTED_MODULE_6__["IMPERSONATION_QUERY_PARAMS"]);
    var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_1__["splitUrlAndQuery"])(tokenPath), 2), tokenPathWithoutQuery = _a[0], tokenQueryString = _a[1];
    var tokenPathQuery = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_1__["parseQueryString"])(tokenQueryString);
    return tokenPathWithoutQuery + Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_1__["generateQueryString"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, tokenPathQuery, impersonationProps, { scopes: scopes.join(',') }));
}
function getTokenId(mergedTokenPath, userEmail) {
    return mergedTokenPath + "/" + userEmail;
}
function saveUserInfo(user, tokenId) {
    _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser = user;
    sessionStorage.setItem("userInfo" + tokenId, JSON.stringify(user));
}
function loadUserInfo(tokenId) {
    var storedSessionUser = sessionStorage.getItem("userInfo" + tokenId);
    if (storedSessionUser) {
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser = JSON.parse(storedSessionUser);
    }
}
function createBearerProvider(mergedTokenPath, userEmail) {
    var tokenId = getTokenId(mergedTokenPath, userEmail);
    return new kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__["WebServerBearerProvider"](mergedTokenPath, function (responseText) {
        var res = JSON.parse(responseText);
        if (!res.ok)
            throw new Error(res.error);
        if (res.user) {
            saveUserInfo(res.user, tokenId);
        }
        return { token: res.token, expires: Date.now() + 59 * 60 * 1000 };
    }, tokenId);
}
function createGoogleTokenProvider(mergedTokenPath, userEmail) {
    var tokenId = getTokenId(mergedTokenPath, userEmail);
    return new kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__["WebServerBearerProvider"](mergedTokenPath, function (responseText) {
        var res = JSON.parse(responseText);
        if (!res.ok)
            throw new Error(res.error);
        return { token: res.token, expires: Date.now() + 59 * 60 * 1000 };
    }, tokenId);
}
function createTestTokenProvider(tokenUrl, user, scopes) {
    return new kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["KedBearerProvider"](kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__["isomorphic"], kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__["storage"], tokenUrl + user.mail + location.search, _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_CLIENT_ID, _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_CLIENT_SECRET, tokenUrl, {
        email: user.mail.toLowerCase(),
        roles: user.roles,
        school: user.school,
        schoolType: user.schoolType,
        scopes: scopes
    });
}
// env.currentUser.mail is set by SiteVision server initially.
// A response from /api/token may change the mail attribute of the current
// user, so env.currentUser.mail may be different after getting a response.
// However, the initial value is valuable always in order to distinguish the case
// when one normal user logs out and another user logs in.
var initialUserEmail = _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser && _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser.mail; // Initial value of mail. May change.
if (initialUserEmail) {
    // KED
    if (_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_TOKEN_PATH) {
        //
        //
        // Production / SiteVision proxied /api/token to request tokens from:
        //
        //
        var mergedTokenPath = getMergedTokenPath(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_TOKEN_PATH, location.search, [
            "kedbackend",
            "EDS",
        ]);
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].bearerProvider = createBearerProvider(mergedTokenPath, initialUserEmail);
        loadUserInfo(getTokenId(mergedTokenPath, initialUserEmail));
        var scopes = [
            "https://www.googleapis.com/auth/calendar.readonly",
            "https://www.googleapis.com/auth/drive"
        ].concat(_globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser.roles.includes("EMPLOYEE")
            ? employeeClassroomScopes
            : studentClassroomScopes);
        // Google
        var googleMergedPath = getMergedTokenPath(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_TOKEN_PATH, location.search, scopes);
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].googleTokenProvider = createGoogleTokenProvider(googleMergedPath, initialUserEmail);
    }
    else if (_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_TOKEN_URL && _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_CLIENT_ID && _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_CLIENT_SECRET) {
        //
        //
        // Test - go directly to KEDAUTH server to retrieve tokens
        //
        //
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].bearerProvider = createTestTokenProvider(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_TOKEN_URL, _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser, [
            "kedbackend",
            "EDS",
        ]);
        var scopes = [
            "https://www.googleapis.com/auth/calendar.readonly",
            "https://www.googleapis.com/auth/drive"
        ].concat(_globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser.roles.includes("EMPLOYEE")
            ? employeeClassroomScopes
            : studentClassroomScopes);
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].googleTokenProvider = createTestTokenProvider(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["default"].KED_TOKEN_URL + "/google", _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser, scopes);
    }
    else {
        throw new Error("Missing configuration parameter KED_TOKEN_PATH");
    }
}


/***/ }),

/***/ "./src/global-setters/set-eds-client.ts":
/*!**********************************************!*\
  !*** ./src/global-setters/set-eds-client.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/clientweb */ "./kedbackend/clientweb.js");
/* harmony import */ var _apis_edsclient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/edsclient */ "./src/apis/edsclient.ts");




_globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].edsClient = new _apis_edsclient__WEBPACK_IMPORTED_MODULE_3__["EdsClient"](kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__["isomorphic"], _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_1__["default"].EDS_API_URL, _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].bearerProvider, function () { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser.mail; });


/***/ }),

/***/ "./src/global-setters/set-ked-backend-client.ts":
/*!******************************************************!*\
  !*** ./src/global-setters/set-ked-backend-client.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/clientweb */ "./kedbackend/clientweb.js");



_globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].kedBackendClient = new kedbackend_clientweb__WEBPACK_IMPORTED_MODULE_2__["KedBackendClientWeb"](_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_1__["default"].KED_API_URL, _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].bearerProvider);


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

/***/ "./src/globals/current-user.ts":
/*!*************************************!*\
  !*** ./src/globals/current-user.ts ***!
  \*************************************/
/*! exports provided: getCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony import */ var _KED_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KED.env */ "./src/globals/KED.env.ts");

function getCurrentUser() {
    return _KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser;
}


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

/***/ "./src/repos/repo.ts":
/*!***************************!*\
  !*** ./src/repos/repo.ts ***!
  \***************************/
/*! exports provided: Repo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repo", function() { return Repo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Repo = /** @class */ (function () {
    function Repo(comm) {
        this.comm = comm;
        this.listPromise = null;
        this.items = null;
        this.subscribers = [];
    }
    Repo.prototype.subscribe = function (subscriber) {
        var _this = this;
        return this.ensureHasData().then(function () {
            subscriber(_this.items, _this.error);
            _this.subscribers.push(subscriber);
        });
    };
    Repo.prototype.unsubscribe = function (subscriber) {
        this.subscribers = this.subscribers.filter(function (s) { return s !== subscriber; });
    };
    Repo.prototype.notifySubscribers = function () {
        var _this = this;
        this.subscribers.forEach(function (s) { return s(_this.items, _this.error); });
    };
    Repo.prototype.ensureHasData = function () {
        if (!this.listPromise)
            this.refreshFromServer();
        return this.listPromise;
    };
    Repo.prototype.refreshFromServer = function () {
        var _this = this;
        this.listPromise = this.comm.query().then(function (items) {
            _this.items = items;
            _this.error = null;
            _this.notifySubscribers();
        }).catch(function (error) {
            _this.error = error;
            _this.items = _this.items || [];
            _this.notifySubscribers();
        });
        return this.listPromise;
    };
    Repo.prototype.update = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var updatedItems;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureHasData()];
                    case 1:
                        _a.sent();
                        updatedItems = Array.isArray(item) ? item : [item];
                        this.items = this.items.map(function (it) {
                            var updatedItem = updatedItems.find(function (_a) {
                                var id = _a.id;
                                return it.id === id;
                            });
                            return updatedItem ?
                                Object.assign({}, updatedItem) :
                                it;
                        });
                        this.notifySubscribers();
                        return [2 /*return*/];
                }
            });
        });
    };
    Repo.prototype.insert = function (item) {
        var _this = this;
        return this.ensureHasData().then(function () {
            _this.items = _this.items.concat(item);
            _this.notifySubscribers();
        });
    };
    Repo.prototype.delete = function (id) {
        var _this = this;
        var ids = Array.isArray(id) ? id : [id];
        return this.ensureHasData().then(function () {
            _this.items = _this.items.filter(function (it) { return !ids.some(function (id) { return it.id === id; }); });
            _this.notifySubscribers();
        });
    };
    return Repo;
}());



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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SchoolCoursesRepo, _super);
    function SchoolCoursesRepo(getSchoolName) {
        var _this = _super.call(this, {
            query: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var schoolName, schools;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                                throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Skolan ", " finns inte registrerad i systemet.\n          Kontakta en administrat\u00F6r f\u00F6r Kursbyggarverktyget och be om att l\u00E4gga till skolan med namnet \"", "\""], ["Skolan ", " finns inte registrerad i systemet.\n          Kontakta en administrat\u00F6r f\u00F6r Kursbyggarverktyget och be om att l\u00E4gga till skolan med namnet \"", "\""])), schoolName, schoolName));
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

/***/ "./src/translations/en.json":
/*!**********************************!*\
  !*** ./src/translations/en.json ***!
  \**********************************/
/*! exports provided: addeditsubtask.deleteSubtask, addeditsubtask.editSubtask, addeditsubtask.nameLabel, addeditsubtask.addSubtask, calendar.currentDate, calendar.fullDayEventLocation, calendar.loadCalendarEvents, calendar.loadingCalendar, calendar.weekNumber, common.addDescriptionPlhd, common.cancel, common.changesNotSavedErrorOccured, common.changesNotSavedUnauthorized, common.descriptionLabel, common.errorSavingData, common.linkLabel, common.loading, common.nameLabel, common.save, common.saved, common.saving, common.remove, customTask.addWorkGoalPrimarySchoolTitle, customTask.addWorkGoalGymnasiumSchoolTitle, customTask.enterNamePlhd, learningGoalsLost.overall, task.addSubtask, task.editTask, task.editWorkGoals, task.enterTaskNamePlhd, task.removeDeadline, task.removeThisTask, task.removeWorkGoals, task.setDeadline, task.setDeadlineLabel, task.subTasks, task.targetNameLabel, task.taskNameLabel, task.whatShouldYouDoPlhd, taskList.nextWeekTask, taskList.lastWeekTask, taskList.currentWeekTask, taskList.removeTaskFromWeeklyPlanning, taskList.addTaskToWeeklyPlanning, termplanner.comments, termplanner.course, termplanner.edsGoalGrades, termplanner.englishLanguage, termplanner.finalStep, termplanner.firstTerm, termplanner.hindiLanguage, termplanner.ict, termplanner.loadingTermplanner, termplanner.maths, termplanner.modernLanguage, termplanner.noFinalStepAvailable, termplanner.secondTerm, termplanner.termPlanning, termplanner.weekNumber, termplanner.chartsBoxTitle, termplanner.yoga, tutorNoteDialog.weekComment, test.chooseComponentLabel, test.pageDescription, userTasks.addLearningGoal, userTasks.deleteLearningGoal, userTasks.primarySchoolGoals, userTasks.gymnasiumSchoolGoals, weekNotebook.title, weekplanner.addLearningGoalGymnasiumSchool, weekplanner.addLearningGoalPrimarySchool, weekplanner.addLearningGoalPrimarySchoolTitle, weekplanner.addLearningGoalGymnasiumSchoolTitle, weekplanner.confirmRemoveLearningObjectives, weekplanner.copyPreviousWeekTaks, weekplanner.emptyLearningGoalErr, weekplanner.evaluation, weekplanner.evaluationDescription, weekplanner.learningGoalPrimary, weekplanner.learningGoalGymnasium, weekplanner.logBook, weekplanner.nameCannotBeEmpty, weekplanner.nameMustNotBeEmpty, weekplanner.strategy, weekplanner.strategyAndEvaluation, weekplanner.strategyDescription, weekplanner.weekNumber, wysiwyg.bold, wysiwyg.code, wysiwyg.heading1, wysiwyg.heading2, wysiwyg.heading3, wysiwyg.image, wysiwyg.imagePromptMsg, wysiwyg.italic, wysiwyg.line, wysiwyg.link, wysiwyg.olist, wysiwyg.paragraph, wysiwyg.quote, wysiwyg.strikethrough, wysiwyg.ulist, wysiwyg.underline, teacherView.coursesViewTitle, teacherView.assignmentsViewTitle, teacherView.assignmentsViewDescription, teacherView.noUploadedAssignmentsForModule, teacherView.assignmentStudentName, teacherView.assignmentFileName, teacherView.assignmentSubmittedAt, teacherView.assignmentReport, teacherView.assignmentGrade, teacherView.noTaskAssignments, teacherView.notSubmittedAssignments, teacherView.remindBtn, teacherView.filterByStudygroupsPlaceholder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"addeditsubtask.deleteSubtask\":\"Delete subtask\",\"addeditsubtask.editSubtask\":\"Edit subtask\",\"addeditsubtask.nameLabel\":\"Name of subtask\",\"addeditsubtask.addSubtask\":\"Add sub-task\",\"calendar.currentDate\":\"Week {week}, {year}\",\"calendar.fullDayEventLocation\":\"Place: {location}\",\"calendar.loadCalendarEvents\":\"Load calendar events...\",\"calendar.loadingCalendar\":\"Loading calendars... (listing...)\",\"calendar.weekNumber\":\"W{weekNumber}\",\"common.addDescriptionPlhd\":\"Add description...\",\"common.cancel\":\"Cancel\",\"common.changesNotSavedErrorOccured\":\"An error occured while saving data. Your changes were not saved.\",\"common.changesNotSavedUnauthorized\":\"The changes were not saved due to insufficient authority\",\"common.descriptionLabel\":\"Description\",\"common.errorSavingData\":\"An error occured while saving data.\",\"common.linkLabel\":\"Link\",\"common.loading\":\"Loading...\",\"common.nameLabel\":\"Name\",\"common.save\":\" Save\",\"common.saved\":\" Saved\",\"common.saving\":\"Saving\",\"common.remove\":\"Delete\",\"customTask.addWorkGoalPrimarySchoolTitle\":\"Add own working goal\",\"customTask.addWorkGoalGymnasiumSchoolTitle\":\"Add own working goal\",\"customTask.enterNamePlhd\":\"Enter Name...\",\"learningGoalsLost.overall\":\"Overall\",\"task.addSubtask\":\"Add subtask\",\"task.editTask\":\"Edit task\",\"task.editWorkGoals\":\"Edit working goal\",\"task.enterTaskNamePlhd\":\"Enter the name of task...\",\"task.removeDeadline\":\"Delete deadline\",\"task.removeThisTask\":\"Delete this task\",\"task.removeWorkGoals\":\"Delete working goal\",\"task.setDeadline\":\"Set deadline\",\"task.setDeadlineLabel\":\"Set deadline...\",\"task.subTasks\":\"Subtasks\",\"task.targetNameLabel\":\"Name of working goal\",\"task.taskNameLabel\":\"Name of task\",\"task.whatShouldYouDoPlhd\":\"What should you do?\",\"taskList.nextWeekTask\":\"for next week (w{week})\",\"taskList.lastWeekTask\":\"for last week (w{week})\",\"taskList.currentWeekTask\":\"for week {week}\",\"taskList.removeTaskFromWeeklyPlanning\":\"Delete task from your weekly planning {week}\",\"taskList.addTaskToWeeklyPlanning\":\"Add task to your weekly planning {week}\",\"termplanner.comments\":\"Comments\",\"termplanner.course\":\"Theme course\",\"termplanner.edsGoalGrades\":\"Intermediate goals\",\"termplanner.englishLanguage\":\"Eng\",\"termplanner.finalStep\":\"Final Step\",\"termplanner.firstTerm\":\"FT {year}\",\"termplanner.hindiLanguage\":\"Hindi\",\"termplanner.ict\":\"ICT\",\"termplanner.loadingTermplanner\":\"Loading Termplanner\",\"termplanner.maths\":\"Maths\",\"termplanner.modernLanguage\":\"MFL\",\"termplanner.noFinalStepAvailable\":\"No final step available\",\"termplanner.secondTerm\":\"ST {year}\",\"termplanner.termPlanning\":\"Term planner\",\"termplanner.weekNumber\":\"Week\",\"termplanner.chartsBoxTitle\":\"Progress Charts\",\"termplanner.yoga\":\"Yoga\",\"tutorNoteDialog.weekComment\":\"Note for week {weekNumber}\",\"test.chooseComponentLabel\":\"Component\",\"test.pageDescription\":\"Test page for the components on the starting page\",\"userTasks.addLearningGoal\":\"Own working goal\",\"userTasks.deleteLearningGoal\":\"Delete learning goal and its tasks\",\"userTasks.primarySchoolGoals\":\"Own learning goal\",\"userTasks.gymnasiumSchoolGoals\":\"Own learning goal\",\"weekNotebook.title\":\"Notepad\",\"weekplanner.addLearningGoalGymnasiumSchool\":\"Goal:\",\"weekplanner.addLearningGoalPrimarySchool\":\"Goal:\",\"weekplanner.addLearningGoalPrimarySchoolTitle\":\"Add own learning goal\",\"weekplanner.addLearningGoalGymnasiumSchoolTitle\":\"Add own learning goal\",\"weekplanner.confirmRemoveLearningObjectives\":\"Delete learning goal and {learningGoalsNumber} tasks?\",\"weekplanner.copyPreviousWeekTaks\":\"Copy from previous week\",\"weekplanner.emptyLearningGoalErr\":\"The learning goal cannot be empty\",\"weekplanner.evaluation\":\"Evaluation\",\"weekplanner.evaluationDescription\":\"Reflection on your work effort and your chosen strategies during the week. Evaluate in relation to your goals.\",\"weekplanner.learningGoalPrimary\":\"Own learning goal\",\"weekplanner.learningGoalGymnasium\":\"Own learning goal\",\"weekplanner.logBook\":\"Logbook\",\"weekplanner.nameCannotBeEmpty\":\"Name cannot be empty\",\"weekplanner.nameMustNotBeEmpty\":\"Name must not be empty\",\"weekplanner.strategy\":\"Strategy\",\"weekplanner.strategyAndEvaluation\":\"Strategy & Evaluation\",\"weekplanner.strategyDescription\":\"What I should do to learn\",\"weekplanner.weekNumber\":\"Week {weekNumber}\",\"wysiwyg.bold\":\"Bold\",\"wysiwyg.code\":\"Code\",\"wysiwyg.heading1\":\"Heading 1\",\"wysiwyg.heading2\":\"Heading 2\",\"wysiwyg.heading3\":\"Heading 3\",\"wysiwyg.image\":\"Insert image\",\"wysiwyg.imagePromptMsg\":\"Enter the URL of the image\",\"wysiwyg.italic\":\"Italics\",\"wysiwyg.line\":\"Horizontal line\",\"wysiwyg.link\":\"Insert link\",\"wysiwyg.olist\":\"Ordered list\",\"wysiwyg.paragraph\":\"Paragraph\",\"wysiwyg.quote\":\"Quote\",\"wysiwyg.strikethrough\":\"Strikethrough\",\"wysiwyg.ulist\":\"Bullet list\",\"wysiwyg.underline\":\"Underline\",\"teacherView.coursesViewTitle\":\"My Courses\",\"teacherView.assignmentsViewTitle\":\"Assignments\",\"teacherView.assignmentsViewDescription\":\"Here you cand find all the assignments you supervise. Click on the right menu to select course. The details are displayed below. You can open/hide each module.\",\"teacherView.noUploadedAssignmentsForModule\":\"No assignments have been uploaded for this module\",\"teacherView.assignmentStudentName\":\"Pupil\",\"teacherView.assignmentFileName\":\"Filename\",\"teacherView.assignmentSubmittedAt\":\"Submitted\",\"teacherView.assignmentReport\":\"Report\",\"teacherView.assignmentGrade\":\"Grade\",\"teacherView.noTaskAssignments\":\"No assignments uploaded for this task\",\"teacherView.notSubmittedAssignments\":\"Not submitted\",\"teacherView.remindBtn\":\"Remind\",\"teacherView.filterByStudygroupsPlaceholder\":\"Select study groups\"}");

/***/ }),

/***/ "./src/translations/sv.json":
/*!**********************************!*\
  !*** ./src/translations/sv.json ***!
  \**********************************/
/*! exports provided: addeditsubtask.addSubtask, addeditsubtask.deleteSubtask, addeditsubtask.editSubtask, addeditsubtask.nameLabel, calendar.currentDate, calendar.fullDayEventLocation, calendar.loadCalendarEvents, calendar.loadingCalendar, calendar.weekNumber, common.addDescriptionPlhd, common.cancel, common.changesNotSavedErrorOccured, common.changesNotSavedUnauthorized, common.descriptionLabel, common.errorSavingData, common.linkLabel, common.loading, common.nameLabel, common.save, common.saved, common.saving, common.remove, customTask.addWorkGoalPrimarySchoolTitle, customTask.addWorkGoalGymnasiumSchoolTitle, customTask.enterNamePlhd, learningGoalsLost.overall, task.addSubtask, task.editTask, task.editWorkGoals, task.enterTaskNamePlhd, task.removeDeadline, task.removeThisTask, task.removeWorkGoals, task.setDeadline, task.setDeadlineLabel, task.subTasks, task.targetNameLabel, task.taskNameLabel, task.whatShouldYouDoPlhd, taskList.nextWeekTask, taskList.lastWeekTask, taskList.currentWeekTask, taskList.removeTaskFromWeeklyPlanning, taskList.addTaskToWeeklyPlanning, termplanner.comments, termplanner.course, termplanner.edsGoalGrades, termplanner.englishLanguage, termplanner.swedishLanguage, termplanner.finalStep, termplanner.firstTerm, termplanner.hindiLanguage, termplanner.loadingTermplanner, termplanner.modernLanguageFullname, termplanner.mathsFullname, termplanner.noFinalStepAvailable, termplanner.swedishLanguageFullName, termplanner.englishLanguageFullName, termplanner.maths, termplanner.modernLanguage, termplanner.secondTerm, termplanner.termPlanning, termplanner.weekNumber, termplanner.chartsBoxTitle, tutorNoteDialog.weekComment, test.chooseComponentLabel, test.pageDescription, userTasks.addLearningGoal, userTasks.deleteLearningGoal, userTasks.primarySchoolGoals, userTasks.gymnasiumSchoolGoals, weekNotebook.title, weekplanner.addLearningGoalGymnasiumSchool, weekplanner.addLearningGoalPrimarySchool, weekplanner.addLearningGoalPrimarySchoolTitle, weekplanner.addLearningGoalGymnasiumSchoolTitle, weekplanner.confirmRemoveLearningObjectives, weekplanner.copyPreviousWeekTaks, weekplanner.emptyLearningGoalErr, weekplanner.evaluation, weekplanner.evaluationDescription, weekplanner.learningGoalPrimary, weekplanner.learningGoalGymnasium, weekplanner.logBook, weekplanner.nameCannotBeEmpty, weekplanner.nameMustNotBeEmpty, weekplanner.strategy, weekplanner.strategyAndEvaluation, weekplanner.strategyDescription, weekplanner.weekNumber, wysiwyg.bold, wysiwyg.code, wysiwyg.heading1, wysiwyg.heading2, wysiwyg.heading3, wysiwyg.image, wysiwyg.imagePromptMsg, wysiwyg.italic, wysiwyg.line, wysiwyg.link, wysiwyg.olist, wysiwyg.paragraph, wysiwyg.quote, wysiwyg.strikethrough, wysiwyg.ulist, wysiwyg.underline, teacherView.coursesViewTitle, teacherView.assignmentsViewTitle, teacherView.assignmentsViewDescription, teacherView.noUploadedAssignmentsForModule, teacherView.assignmentStudentName, teacherView.assignmentFileName, teacherView.assignmentSubmittedAt, teacherView.assignmentReport, teacherView.assignmentGrade, teacherView.noTaskAssignments, teacherView.notSubmittedAssignments, teacherView.remindBtn, teacherView.filterByStudygroupsPlaceholder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"addeditsubtask.addSubtask\":\"Lägg till underuppgift\",\"addeditsubtask.deleteSubtask\":\"Ta bort underuppgift\",\"addeditsubtask.editSubtask\":\"Redigera underuppgift\",\"addeditsubtask.nameLabel\":\"Underuppgiftens namn\",\"calendar.currentDate\":\"Vecka {week}, {year}\",\"calendar.fullDayEventLocation\":\"Plats: {location}\",\"calendar.loadCalendarEvents\":\"Load calendar events...\",\"calendar.loadingCalendar\":\"Loading calendars... (listing...)\",\"calendar.weekNumber\":\"V{weekNumber}\",\"common.addDescriptionPlhd\":\"Lägg till en beskrivning...\",\"common.cancel\":\"Avbryt\",\"common.changesNotSavedErrorOccured\":\"För tillfället problem att spara data. Dina ändringar sparades inte.\",\"common.changesNotSavedUnauthorized\":\"Ändringarna sparades inte p.g.a. otillräcklig behörighet.\",\"common.descriptionLabel\":\"Beskrivning\",\"common.errorSavingData\":\"Kunde inte spara.\",\"common.linkLabel\":\"Länk\",\"common.loading\":\"Laddar...\",\"common.nameLabel\":\"Namn\",\"common.save\":\" Spara\",\"common.saved\":\" Sparad\",\"common.saving\":\"Sparar...\",\"common.remove\":\"Ta bort\",\"customTask.addWorkGoalPrimarySchoolTitle\":\"Lägg till eget arbetsmål\",\"customTask.addWorkGoalGymnasiumSchoolTitle\":\"Lägg till uppgift\",\"customTask.enterNamePlhd\":\"Ange namn...\",\"learningGoalsLost.overall\":\"Övergripande\",\"task.addSubtask\":\"Lägg till underuppgift\",\"task.editTask\":\"Redigera uppgift\",\"task.editWorkGoals\":\"Redigera arbetsmål\",\"task.enterTaskNamePlhd\":\"Ange uppgiftens namn...\",\"task.removeDeadline\":\"Ta bort deadline\",\"task.removeThisTask\":\"Ta bort den här uppgiften\",\"task.removeWorkGoals\":\"Ta bort arbetsmål\",\"task.setDeadline\":\"Set deadline\",\"task.setDeadlineLabel\":\"Ange deadline...\",\"task.subTasks\":\"Underuppgifter\",\"task.targetNameLabel\":\"Arbetsmålets namn\",\"task.taskNameLabel\":\"Uppgiftens namn\",\"task.whatShouldYouDoPlhd\":\"Vad ska du göra?\",\"taskList.nextWeekTask\":\"för nästa vecka (v{week})\",\"taskList.lastWeekTask\":\"för förra veckan (v{week})\",\"taskList.currentWeekTask\":\"för vecka {week}\",\"taskList.removeTaskFromWeeklyPlanning\":\"Ta bort uppgiften från egen veckoplanering {week}\",\"taskList.addTaskToWeeklyPlanning\":\"Lägg till uppgiften i egen veckoplanering {week}\",\"termplanner.comments\":\"Kommentar\",\"termplanner.course\":\"Kurs\",\"termplanner.edsGoalGrades\":\"Terminsmål\",\"termplanner.englishLanguage\":\"Eng\",\"termplanner.swedishLanguage\":\"Sv/SvA\",\"termplanner.finalStep\":\"Slutsteg\",\"termplanner.firstTerm\":\"HT {year}\",\"termplanner.hindiLanguage\":\"\",\"termplanner.loadingTermplanner\":\"V.g. vänta medan terminsplaner laddas...\",\"termplanner.modernLanguageFullname\":\"M.språk\",\"termplanner.mathsFullname\":\"Matematik\",\"termplanner.noFinalStepAvailable\":\"Inget slutsteg tillgängligt\",\"termplanner.swedishLanguageFullName\":\"Svenska\",\"termplanner.englishLanguageFullName\":\"Engelska\",\"termplanner.maths\":\"Ma\",\"termplanner.modernLanguage\":\"M.spr\",\"termplanner.secondTerm\":\"VT {year}\",\"termplanner.termPlanning\":\"Terminsplanering\",\"termplanner.weekNumber\":\"Vecka\",\"termplanner.chartsBoxTitle\":\"Min progression\",\"tutorNoteDialog.weekComment\":\"Kommentar för vecka {weekNumber}\",\"test.chooseComponentLabel\":\"Komponent\",\"test.pageDescription\":\"Testsida för komponenter till nya startsidan\",\"userTasks.addLearningGoal\":\"Eget arbetsmål\",\"userTasks.deleteLearningGoal\":\"Ta bort lärandemålet och dess uppgifter\",\"userTasks.primarySchoolGoals\":\"Egna lärandemål\",\"userTasks.gymnasiumSchoolGoals\":\"Övriga uppgifter\",\"weekNotebook.title\":\"Anteckningar\",\"weekplanner.addLearningGoalGymnasiumSchool\":\"Rubrik:\",\"weekplanner.addLearningGoalPrimarySchool\":\"Mål:\",\"weekplanner.addLearningGoalPrimarySchoolTitle\":\"Lägg till eget lärandemål\",\"weekplanner.addLearningGoalGymnasiumSchoolTitle\":\"Lägg till rubrik\",\"weekplanner.confirmRemoveLearningObjectives\":\"Ta bort lärandemål samt {learningGoalsNumber} uppgifter?\",\"weekplanner.copyPreviousWeekTaks\":\"Kopiera ej klara från föregående vecka\",\"weekplanner.emptyLearningGoalErr\":\"Lärandemålet kan inte vara tomt\",\"weekplanner.evaluation\":\"Utvärdering\",\"weekplanner.evaluationDescription\":\"Reflektion kring din arbetsinsats och dina valda strategier under veckan.Utvärdera i förhållande till dina mål.\",\"weekplanner.learningGoalPrimary\":\"Eget lärandemål\",\"weekplanner.learningGoalGymnasium\":\"Uppgift\",\"weekplanner.logBook\":\"Loggbok\",\"weekplanner.nameCannotBeEmpty\":\"Namnet kan inte vara tomt\",\"weekplanner.nameMustNotBeEmpty\":\"Namnet får inte vara tomt\",\"weekplanner.strategy\":\"Strategi\",\"weekplanner.strategyAndEvaluation\":\"Strategi & Utvärdering\",\"weekplanner.strategyDescription\":\"Hur jag ska göra för att lära mig.\",\"weekplanner.weekNumber\":\"Vecka {weekNumber}\",\"wysiwyg.bold\":\"Fetstil\",\"wysiwyg.code\":\"Programkod\",\"wysiwyg.heading1\":\"Rubrik 1\",\"wysiwyg.heading2\":\"Rubrik 2\",\"wysiwyg.heading3\":\"Rubrik 3\",\"wysiwyg.image\":\"Infoga bild\",\"wysiwyg.imagePromptMsg\":\"Ange bildens URL\",\"wysiwyg.italic\":\"Kursiv\",\"wysiwyg.line\":\"Vågrät linje\",\"wysiwyg.link\":\"Infoga länk\",\"wysiwyg.olist\":\"Ordnad lista\",\"wysiwyg.paragraph\":\"Paragraf\",\"wysiwyg.quote\":\"Citat\",\"wysiwyg.strikethrough\":\"Struken\",\"wysiwyg.ulist\":\"Punktlista\",\"wysiwyg.underline\":\"Understruken\",\"teacherView.coursesViewTitle\":\"Mina kurser/ uppgifter\",\"teacherView.assignmentsViewTitle\":\"Inlämningsuppgifter\",\"teacherView.assignmentsViewDescription\":\"Här listas samtliga inlämningsuppgifter i din/dina kurser du handleder. Klicka till höger för att välja kurs. Kursens uppgifter syns nedan. Du kan öppna/dölja varje modul.\",\"teacherView.noUploadedAssignmentsForModule\":\"No assignments have been uploaded for this module\",\"teacherView.assignmentStudentName\":\"Elev\",\"teacherView.assignmentFileName\":\"Filnamn\",\"teacherView.assignmentSubmittedAt\":\"Inlamnat\",\"teacherView.assignmentReport\":\"Rapport\",\"teacherView.assignmentGrade\":\"Niva\",\"teacherView.noTaskAssignments\":\"Inga uppdrag uppladdade för denna uppgift\",\"teacherView.notSubmittedAssignments\":\"Ej lämnat in\",\"teacherView.remindBtn\":\"Påminn\",\"teacherView.filterByStudygroupsPlaceholder\":\"Välj studiegrupp\"}");

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



/***/ }),

/***/ "./src/utils/error-success-feedback.tsx":
/*!**********************************************!*\
  !*** ./src/utils/error-success-feedback.tsx ***!
  \**********************************************/
/*! exports provided: ErrorSuccessFeedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorSuccessFeedback", function() { return ErrorSuccessFeedback; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _components_course_builder_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/course-builder/sub-components/remove-item */ "./src/components/course-builder/sub-components/remove-item.tsx");




var ErrorSuccessFeedback = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ErrorSuccessFeedback, _super);
    function ErrorSuccessFeedback(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            errors: [],
            infos: []
        };
        _this._unhandledRejection = _this._unhandledRejection.bind(_this);
        _this._error = _this._error.bind(_this);
        _this._customError = _this._customError.bind(_this);
        _this._onInfo = _this._onInfo.bind(_this);
        _this._dbWriterError = _this._dbWriterError.bind(_this);
        _this._dbWriterStateChanged = _this._dbWriterStateChanged.bind(_this);
        return _this;
    }
    ErrorSuccessFeedback.prototype._addError = function (message, details, retryable) {
        var _this = this;
        //console.error(message, {retryable: !!retryable, details});
        this.setState(function (_a) {
            var errors = _a.errors;
            if (errors.some(function (e) { return e.message === message; }))
                return { errors: errors };
            if (errors.length > 2)
                errors = errors.slice(1);
            return {
                errors: errors.concat([{ message: message, details: details, retryable: retryable }])
            };
        });
        // Remove non-retryable errors after 30 seconds:
        if (!retryable)
            setTimeout(function () {
                _this.setState(function (_a) {
                    var errors = _a.errors;
                    return ({
                        errors: errors.filter(function (e) { return e.message !== message; })
                    });
                });
            }, 30000);
    };
    ErrorSuccessFeedback.prototype._addInfo = function (message) {
        var _this = this;
        if (message === "") {
            // Turn off current info messages
            this.setState({ infos: [] });
            return;
        }
        this.setState(function (_a) {
            var infos = _a.infos;
            if (infos.some(function (info) { return info === message; }))
                return { infos: infos };
            if (infos.length > 1)
                infos = infos.slice(1);
            return {
                infos: [message] // was: infos.concat(message). But it sucks!
            };
        });
        // Remove info message after 10 seconds:
        setTimeout(function () {
            _this.setState(function (_a) {
                var infos = _a.infos;
                return ({
                    infos: infos.filter(function (msg) { return msg !== message; })
                });
            });
        }, 10000);
    };
    ErrorSuccessFeedback.prototype._dbWriterError = function (error, retryable) {
        this._addError("Det g\u00E5r inte att spara till servern", error, retryable);
    };
    ErrorSuccessFeedback.prototype._dbWriterStateChanged = function (_a) {
        var isEdited = _a.isEdited, isSaving = _a.isSaving;
        if (!isEdited) {
            // If isEdited is false, a successful write must have happened, and
            // there cannot be any retryable error anymore
            this.setState(function (_a) {
                var errors = _a.errors;
                errors = errors.filter(function (e) { return !e.retryable; });
                return { errors: errors };
            });
        }
        this.setState({
            dbWriterIsEdited: isEdited,
            dbWriterIsSaving: isSaving
        });
    };
    ErrorSuccessFeedback.prototype.componentDidMount = function () {
        window.addEventListener('unhandledrejection', this._unhandledRejection);
        window.addEventListener('error', this._error);
        window.addEventListener('customerror', this._customError);
        window.addEventListener('info', this._onInfo);
        _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].writer.onError(this._dbWriterError);
        _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].writer.onStateChange(this._dbWriterStateChanged);
    };
    ErrorSuccessFeedback.prototype.componentWillUnmount = function () {
        window.removeEventListener('unhandledrejection', this._unhandledRejection);
        window.removeEventListener('error', this._error);
        window.removeEventListener('customerror', this._customError);
        window.removeEventListener('info', this._onInfo);
        _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].writer.off(this._dbWriterError);
        _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].writer.off(this._dbWriterStateChanged);
    };
    ErrorSuccessFeedback.prototype._unhandledRejection = function (ev) {
        this._addError("Ett ok\u00E4nt fel intr\u00E4ffade...", ev.reason);
    };
    ErrorSuccessFeedback.prototype._error = function (ev) {
        this._addError(ev.error ? ev.error.message : "Ett ok\u00E4nt fel intr\u00E4ffade...", ev.error);
    };
    ErrorSuccessFeedback.prototype._customError = function (ev) {
        this._addError(ev.detail);
    };
    ErrorSuccessFeedback.prototype._onInfo = function (ev) {
        this._addInfo(ev.detail);
    };
    ErrorSuccessFeedback.prototype.render = function () {
        var _this = this;
        var _a = this.state, errors = _a.errors, infos = _a.infos, dbWriterIsSaving = _a.dbWriterIsSaving;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "error-success-feedback", style: {
                position: "fixed",
                left: 0,
                top: 0,
                width: "100%",
                pointerEvents: 'none'
            } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { display: 'table', margin: "0 auto" } },
                errors.filter(function (e) { return !e.retryable || !dbWriterIsSaving; })
                    .map(function (_a) {
                    var message = _a.message, details = _a.details, retryable = _a.retryable, showDetails = _a.showDetails;
                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: message, className: "error" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { float: 'left' } }, message),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { pointerEvents: 'auto' } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_course_builder_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_3__["RemoveItem"], { onClick: function () { return _this.removeError(message); } })),
                        details || retryable ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { pointerEvents: 'auto' } },
                            details ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn", onClick: function () { return _this.toggleDetails(message); } }, showDetails ? "Dölj detailer" : "Visa detailjer"),
                                "\u00A0") : undefined,
                            showDetails ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, '' + details) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, "\u00A0"),
                            retryable ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn", onClick: function () { return _this.retrySave(); } }, "F\u00F6rs\u00F6k spara nu") : undefined) : undefined));
                }),
                infos.map(function (message) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { key: message, className: "info" }, message);
                })));
    };
    ErrorSuccessFeedback.prototype.removeError = function (message) {
        this.setState(function (_a) {
            var errors = _a.errors;
            return ({
                errors: errors.filter(function (e) { return e.message !== message; })
            });
        });
    };
    ErrorSuccessFeedback.prototype.retrySave = function () {
        _globals_db__WEBPACK_IMPORTED_MODULE_2__["db"].writer.retrySave();
    };
    ErrorSuccessFeedback.prototype.toggleDetails = function (message) {
        this.setState(function (_a) {
            var errors = _a.errors;
            return ({ errors: errors.map(function (error) { return error.message === message ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, error, { showDetails: !error.showDetails }) :
                    error; })
            });
        });
    };
    return ErrorSuccessFeedback;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/utils/keep-session-alive.ts":
/*!*****************************************!*\
  !*** ./src/utils/keep-session-alive.ts ***!
  \*****************************************/
/*! exports provided: keepSessionAlive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keepSessionAlive", function() { return keepSessionAlive; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/KED.cfg */ "./src/globals/KED.cfg.ts");



var HEARTBEAT_INTERVAL = 5 * 60 * 1000; // 5 minutes.
var HEARTBEAT_URL = _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_2__["cfg"].KED_KEEP_ALIVE_URL;
var lastActivity = Date.now();
function keepSessionAlive() {
    setInterval(onTimeout, HEARTBEAT_INTERVAL);
    setTimeout(function () { return jquery__WEBPACK_IMPORTED_MODULE_1___default()('body')
        .mousemove(onUserActive)
        .keypress(onUserActive)
        .scroll(onUserActive); }, 100);
}
function onUserActive() {
    lastActivity = Date.now();
}
function onTimeout() {
    var inactivityTime = Date.now() - lastActivity;
    if (inactivityTime < HEARTBEAT_INTERVAL) {
        heartbeat();
    }
}
function heartbeat() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var res, err_1;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Sending heartbeat request to " + HEARTBEAT_URL);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch(HEARTBEAT_URL, {
                            cache: 'no-cache',
                            credentials: 'same-origin'
                        })];
                case 2:
                    res = _a.sent();
                    console.log("Response from " + HEARTBEAT_URL + ": " + res.status + " " + res.statusText);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.warn("Request to " + HEARTBEAT_URL + " failed: " + err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./src/utils/make-suspense-api.ts":
/*!****************************************!*\
  !*** ./src/utils/make-suspense-api.ts ***!
  \****************************************/
/*! exports provided: makeSuspenseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSuspenseApi", function() { return makeSuspenseApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var DEFAULT_CACHE_EXPIRATION = 30 * 60 * 1000; // 30 minutes.
var defaultOptions = {
    isApiMethod: function (f) { return typeof f === 'function'; },
    cacheExpiration: DEFAULT_CACHE_EXPIRATION
};
function makeSuspenseApi(api, options) {
    if (options === void 0) { options = defaultOptions; }
    options = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, defaultOptions, options);
    var isApiMethod = options.isApiMethod, cacheExpiration = options.cacheExpiration;
    var rv = Object.create(api);
    var cache = {};
    // Walk the instance + prototype chain to generate suspense version of each promise returning method
    for (var proto = api; proto && proto !== Object.prototype; proto = Object.getPrototypeOf(proto)) {
        suspendify(proto);
    }
    function suspendify(proto) {
        Object.keys(proto).forEach(function (prop) {
            if (!rv.hasOwnProperty(prop) && isApiMethod(prop)) {
                rv[prop] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var key = JSON.stringify(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([prop], args));
                    var cachedEntry = cache[key];
                    if (cachedEntry !== undefined) {
                        if (cachedEntry.promise)
                            throw cachedEntry.promise;
                        if (cachedEntry.error)
                            throw cachedEntry.error;
                        if (cachedEntry.timeout > Date.now()) {
                            return cachedEntry.value;
                        }
                    }
                    try {
                        var promise = proto[prop].apply(api, args).then(function (result) {
                            cache[key] = { timeout: Date.now() + cacheExpiration, value: result };
                        }).catch(function (error) {
                            cache[key] = { timeout: Date.now() + cacheExpiration, error: error };
                        });
                        cache[key] = { timeout: Date.now() + cacheExpiration, promise: promise };
                        throw promise;
                    }
                    catch (error) {
                        if (error.then)
                            throw error;
                        cache[key] = { timeout: Date.now() + cacheExpiration, error: error };
                    }
                };
            }
        });
    }
    return rv;
}


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

/***/ "./src/utils/school-moment.ts":
/*!************************************!*\
  !*** ./src/utils/school-moment.ts ***!
  \************************************/
/*! exports provided: getFirstAndLastWeekOfTerm, getTermStarEndDate, getSchoolMoment, addYear, nextAcademicYear, prevAcademicYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstAndLastWeekOfTerm", function() { return getFirstAndLastWeekOfTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTermStarEndDate", function() { return getTermStarEndDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchoolMoment", function() { return getSchoolMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addYear", function() { return addYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextAcademicYear", function() { return nextAcademicYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevAcademicYear", function() { return prevAcademicYear; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


function getFirstAndLastWeekOfTerm(term) {
    return term === 'AT' ?
        [32, 51] :
        [1, 25];
}
//Not used anymore
// export function getTermStartAndEnd(now: moment.Moment) : moment.Moment[] {
//     return now.month() >= 6 ? // 6 = July in JS Dates and in moment as well!
//     [moment(new Date(now.year(), 7, 1)), moment(new Date(now.year(), 11, 31))] : // aug1 - dec31
//     [moment(new Date(now.year(), 0, 1)), moment(new Date(now.year(), 6, 31))]; // jan1 - july31
// }
function getTermStarEndDate(date, isFirstTerm) {
    var addYear = date.getMonth() >= 7;
    var termYear = null;
    if (addYear) {
        termYear = isFirstTerm ? date.getFullYear() : date.getFullYear() + 1;
    }
    else {
        termYear = isFirstTerm ? date.getFullYear() - 1 : date.getFullYear();
    }
    var termYearMoment = moment__WEBPACK_IMPORTED_MODULE_1___default()(termYear.toString(), "YYYY");
    if (termYearMoment.week() != 1) {
        termYearMoment = termYearMoment.clone().add(1, 'week');
    }
    return isFirstTerm ? [moment__WEBPACK_IMPORTED_MODULE_1___default()(termYearMoment.clone()).week(32).startOf('week'), moment__WEBPACK_IMPORTED_MODULE_1___default()(termYearMoment.clone()).week(51).endOf('week')] :
        [moment__WEBPACK_IMPORTED_MODULE_1___default()(termYearMoment.clone()), moment__WEBPACK_IMPORTED_MODULE_1___default()(termYearMoment.clone()).week(25).endOf('week')];
}
function getSchoolMoment(m) {
    var thisYear = m.year();
    var isAutumn = m.month() >= 6; // determine 
    var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](isAutumn ?
        [thisYear, thisYear + 1] :
        [thisYear - 1, thisYear], 2), autumnYear = _a[0], springYear = _a[1];
    var academicYear = '' + autumnYear + '/' + springYear;
    var term = isAutumn ? 'AT' : 'ST';
    var week = m.week();
    return { academicYear: academicYear, term: term, week: week };
}
function addYear(aYear, numYearsToAdd) {
    return aYear.split('/')
        .map(function (yearStr) { return parseInt(yearStr) + numYearsToAdd; })
        .map(function (year) { return '' + year; })
        .join('/');
}
function nextAcademicYear(aYear) {
    return addYear(aYear, 1);
}
function prevAcademicYear(aYear) {
    return addYear(aYear, -1);
}


/***/ }),

/***/ "./src/utils/school-term.ts":
/*!**********************************!*\
  !*** ./src/utils/school-term.ts ***!
  \**********************************/
/*! exports provided: SchoolTerm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolTerm", function() { return SchoolTerm; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _school_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school-moment */ "./src/utils/school-moment.ts");


function isSchoolMoment(obj) {
    return 'academicYear' in obj;
}
var SchoolTerm = /** @class */ (function () {
    function SchoolTerm(dateOrSchoolMoment) {
        var schoolMoment = isSchoolMoment(dateOrSchoolMoment) ?
            dateOrSchoolMoment : Object(_school_moment__WEBPACK_IMPORTED_MODULE_1__["getSchoolMoment"])(moment__WEBPACK_IMPORTED_MODULE_0___default()(dateOrSchoolMoment));
        this.academicYear = schoolMoment.academicYear;
        this.term = schoolMoment.term;
    }
    Object.defineProperty(SchoolTerm.prototype, "year", {
        get: function () {
            return parseInt(this.academicYear
                .split('/')[this.term === 'AT' ? 0 : 1]);
        },
        enumerable: true,
        configurable: true
    });
    SchoolTerm.prototype.nextTerm = function () {
        return new SchoolTerm(this.term === 'AT' ?
            {
                term: 'ST',
                academicYear: this.academicYear
            } :
            {
                term: 'AT',
                academicYear: Object(_school_moment__WEBPACK_IMPORTED_MODULE_1__["addYear"])(this.academicYear, 1)
            });
    };
    SchoolTerm.prototype.prevTerm = function () {
        return new SchoolTerm(this.term === 'AT' ?
            {
                term: 'ST',
                academicYear: Object(_school_moment__WEBPACK_IMPORTED_MODULE_1__["addYear"])(this.academicYear, -1)
            } :
            {
                term: 'AT',
                academicYear: this.academicYear
            });
    };
    SchoolTerm.prototype.toLocaleString = function (intl, shortYear) {
        var year = this.term === 'AT' ?
            this.academicYear.split('/')[0] :
            this.academicYear.split('/')[1];
        if (shortYear)
            year = year.substr(2);
        return this.term === 'AT' ? intl.formatMessage({ id: 'termplanner.secondTerm', defaultMessage: 'HT {year}' }, { year: year }) :
            intl.formatMessage({ id: 'termplanner.firstTerm', defaultMessage: 'VT {year}' }, { year: year });
    };
    return SchoolTerm;
}());



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

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

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
//# sourceMappingURL=kedappcoursebuilder.js.map