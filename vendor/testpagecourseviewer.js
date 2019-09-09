var testpagecourseviewer =
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
/******/ 		"testpagecourseviewer": 0
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
/******/ 	deferredModules.push(["./src/test/testpage-courseviewer.tsx","vendors"]);
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

module.exports = JSON.parse("{\"accessClaimDefinitions\":{\"email\":\"{http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress}\",\"role\":\"{http://schemas.microsoft.com/ws/2008/06/identity/claims/role}\",\"school\":\"{school}\",\"schoolRole\":\"{school}/{http://schemas.microsoft.com/ws/2008/06/identity/claims/role}\",\"tutorFor\":\"{tutorFor}\"},\"realmClaim\":\"realm\",\"specialRoles\":{\"userRole\":\"USER\",\"adminRole\":\"ADMIN\"},\"defaultAccessClaimTypes\":[\"role\"],\"defaultAcl\":[\"role:USER:R\"],\"tables\":{\"branches\":{\"accessClaimTypes\":[\"role\",\"schoolRole\",\"email\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"*\"],\"schoolRole\":[\"*\"],\"role\":[\"*\"]}},\"relationships\":{\"parents\":\"branches\",\"approvedChildren\":\"branches\"},\"isPublic\":true},\"global\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"relationships\":{\"courseInstances\":\"courseInstances\"},\"isPublic\":true},\"emailTemplates\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"isPublic\":false},\"courseInstances\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"USER\":{\"schoolRole\":[\"*\"],\"role\":[\"*\"]}},\"defaultAcl\":[\"role:USER:R\",\"schoolRole:{school}/EMPLOYEE:S\"],\"relationships\":{\"abilities\":\"abilities\",\"centralContent\":\"central-content\",\"knowledgeRequirements\":\"knowledge-requirements\",\"blocks\":\"courseBlocks\",\"tabs\":\"courseTabs\"},\"isPublic\":true},\"courseBlocks\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"USER\":{\"schoolRole\":[\"*\"],\"role\":[\"*\"]}},\"defaultAcl\":[\"role:USER:R\",\"schoolRole:{school}/EMPLOYEE:S\"],\"relationships\":{\"abilities\":\"abilities\",\"centralContent\":\"central-content\",\"knowledgeRequirements\":\"knowledge-requirements\",\"tabs\":\"courseTabs\",\"tasks\":\"tasks\"},\"isPublic\":true},\"courseTabs\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"USER\":{\"schoolRole\":[\"*\"],\"role\":[\"*\"]}},\"defaultAcl\":[\"role:USER:R\",\"schoolRole:{school}/EMPLOYEE:S\"],\"relationships\":{\"abilities\":\"abilities\",\"centralContent\":\"central-content\",\"knowledgeRequirements\":\"knowledge-requirements\",\"contents\":\"courseContents\"},\"isPublic\":true},\"courseContents\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"USER\":{\"schoolRole\":[\"*\"],\"role\":[\"*\"]}},\"defaultAcl\":[\"role:USER:R\",\"schoolRole:{school}/EMPLOYEE:S\"],\"relationships\":{\"tasks\":\"tasks\"},\"isPublic\":true},\"weekplans\":{\"accessClaimTypes\":[\"email\",\"tutorFor\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\",\"{tutorFor}:*\"],\"tutorFor\":[\"{tutorFor}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"isPublic\":false},\"weekplans-ks\":{\"accessClaimTypes\":[\"email\",\"tutorFor\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\",\"{tutorFor}:*\"],\"tutorFor\":[\"{tutorFor}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"isPublic\":false},\"usertasks\":{\"accessClaimTypes\":[\"email\",\"schoolRole\",\"tutorFor\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\",\"{tutorFor}:*\"],\"schoolRole\":[\"{school}/EMPLOYEE:*\"],\"tutorFor\":[\"{tutorFor}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"relationships\":{\"task\":\"tasks\",\"course\":\"courses\"},\"isPublic\":false},\"userhiddencourses\":{\"accessClaimTypes\":[\"email\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"relationships\":{},\"isPublic\":false},\"usercalendarvisibility\":{\"accessClaimTypes\":[\"email\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"relationships\":{},\"isPublic\":false},\"subjects\":{\"relationships\":{\"courseTemplates\":\"courses\",\"abilities\":\"abilities\"},\"isPublic\":true},\"schools\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"relationships\":{\"courses\":\"courses\",\"activeCourses\":\"courses\"},\"isPublic\":true},\"courses\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"EMPLOYEE\":{\"schoolRole\":[\"{school}/EMPLOYEE:*\"],\"role\":[\"USER:R\"]}},\"defaultAcl\":[\"schoolRole:{school}/EMPLOYEE:*\"],\"relationships\":{\"templateChain\":\"courses\",\"centralContent\":\"central-content\",\"knowledgeRequirements\":\"knowledge-requirements\",\"abilities\":\"abilities\",\"images\":\"images\",\"tasks\":\"tasks\"},\"isPublic\":true},\"tasks\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"EMPLOYEE\":{\"schoolRole\":[\"{school}/EMPLOYEE:*\"],\"role\":[\"USER:R\"]}},\"defaultAcl\":[\"schoolRole:{school}/EMPLOYEE:S\",\"role:USER:R\"],\"relationships\":{\"knowledgeRequirements\":\"knowledge-requirements\",\"centralContent\":\"central-content\",\"abilities\":\"abilities\"},\"isPublic\":true},\"images\":{\"accessClaimTypes\":[\"role\",\"schoolRole\",\"email\"],\"sharingAccessPerRole\":{\"EMPLOYEE\":{\"schoolRole\":[\"{school}/EMPLOYEE:*\"],\"role\":[\"USER:R\"]},\"USER\":{\"email\":[\"{email}:*\"]}},\"isPublic\":true},\"central-content\":{\"accessClaimTypes\":[\"role\"],\"defaultAcl\":[\"role:USER:R\"]},\"knowledge-requirements\":{\"accessClaimTypes\":[\"role\"],\"defaultAcl\":[\"role:USER:R\"],\"isPublic\":true},\"abilities\":{\"accessClaimTypes\":[\"role\"],\"defaultAcl\":[\"role:USER:R\"],\"isPublic\":true},\"seenStudentAssignments\":{\"accessClaimTypes\":[\"email\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"relationships\":{},\"isPublic\":true},\"notes\":{\"accessClaimTypes\":[\"email\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"relationships\":{},\"isPublic\":false}}}");

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
                        if (typeof location === 'undefined' || !location.search.includes('dontUseSP')) {
                            if (!query.from &&
                                !query.to &&
                                (!query.include || !query.include.includes("acl")) &&
                                !query.role &&
                                !query.name &&
                                [query.hasEdgesFrom, query.hasEdgesTo, query.ids, query.tags].filter(function (x) { return !!x; }).length === 1) {
                                query.flags = (query.flags || []).concat(['useSP']);
                            }
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
    KedBackendCollection.prototype.cacheOptimized = function (onOrOff) {
        return onOrOff === undefined || onOrOff === true ?
            this.applyQuery({ cacheBust: _cache_bust__WEBPACK_IMPORTED_MODULE_3__["CacheBust"].getCacheBust(this.table, this.query, this.repo.getUser(), this.includes) }) :
            this.applyQuery({ cacheBust: undefined });
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
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiberContext", function() { return FiberContext; });
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
var _FiberContext = {
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
    Object.defineProperty(_FiberContext, "current", {
        get: providers.reduce(function (p, c) { return function () { return p() || c(); }; }),
        set: function () { throw new Error("Use FiberContext.push() to change current fiber"); }
    });
}
var _global = (typeof self === 'undefined' ? global : self);
if (!_global["KEDFiberContext"]) {
    _global["KEDFiberContext"] = _FiberContext;
}
var FiberContext = _global["KEDFiberContext"];
//# sourceMappingURL=fiber-context.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
    "schoolGrade",
    "schoolgrade",
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GoogleClassroom, _super);
    function GoogleClassroom() {
        return _super.call(this, { discoveryDocs: 'https://classroom.googleapis.com/$discovery/rest?version=v1' }) || this;
    }
    GoogleClassroom.prototype.reclaimSubmission = function (submission) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var classrooms, submissions, allSubmissions, updatedSubmissions_1, newSubmissions, courseWork, newSubmissions, templateFile;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getClassrooms(courseId)];
                    case 2:
                        classrooms = _a.sent();
                        submissions = [];
                        if (!isTeacher) return [3 /*break*/, 6];
                        return [4 /*yield*/, Promise.all(classrooms.map(function (classroom, i) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var courseWork;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.getCourseWork(classroom.id, taskId, false)];
                                        case 1:
                                            courseWork = _a.sent();
                                            classrooms[i].courseWork = courseWork;
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 3:
                        _a.sent();
                        classrooms = classrooms.filter(function (cr) { return !!cr.courseWork; });
                        return [4 /*yield*/, Promise.all(classrooms.map(function (classroom, i) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                            var newsubs = subs.map(function (s) {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, s, { group: group, crLink: crLink });
                            });
                            updatedSubmissions_1.push.apply(updatedSubmissions_1, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](newsubs));
                        });
                        return [4 /*yield*/, Promise.all(updatedSubmissions_1.map(function (sub) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var user;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.getUser(sub.userId)];
                                        case 1:
                                            user = _a.sent();
                                            return [2 /*return*/, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, sub, user)];
                                    }
                                });
                            }); }))];
                    case 5:
                        newSubmissions = _a.sent();
                        submissions.push.apply(submissions, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](newSubmissions));
                        return [3 /*break*/, 9];
                    case 6: return [4 /*yield*/, this.getCourseWork(classrooms[0].id, taskId)];
                    case 7:
                        courseWork = _a.sent();
                        return [4 /*yield*/, this.getStudentSubmissions(courseWork.courseId, courseWork.id, true)];
                    case 8:
                        newSubmissions = _a.sent();
                        submissions.push.apply(submissions, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](newSubmissions.map(function (sub) {
                            sub.userEmail = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["env"].currentUser.mail;
                            return sub;
                        })));
                        _a.label = 9;
                    case 9:
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    GoogleClassroom.prototype.getCourseWork = function (classroomId, taskId, throwError) {
        if (throwError === void 0) { throwError = true; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
 * - mineOnly: if only show files owned by the user
 *
 * We could probably split this into google-picker and google-drive where google-drive
 * handles the explicit calls to the google drive api.
 */
var GooglePicker = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GooglePicker, _super);
    function GooglePicker(options) {
        var _this = _super.call(this, { scopes: ['https://www.googleapis.com/auth/drive'] }) || this;
        _this.options = { upload: false, multiple: false, limitType: false, onlyMine: false };
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
                                if (_this.options.onlyMine) {
                                    pickerbuilder.enableFeature(google.picker.Feature.MINE_ONLY);
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
    },
    {
        schoolName: 'KED',
        teacherFirstName: 'Andrei',
        teacherLastName: 'Spatarelu',
        teacherEmailAddress: 'andrei@kedschools.com'
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
            tuitionGroupName: 'DJUR1_GR3 (180816-190614)',
            studentFirstName: 'Student2',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student2.classroom@kedschools.com'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUR1_GR3 (180816-190614)',
            studentFirstName: 'Carl',
            studentLastName: 'Holmberg',
            studentEmailAddress: 'carl@kedschools.com'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUR1_GR3 (180816-190614)',
            studentFirstName: 'Andrei',
            studentLastName: 'Spatarelu',
            studentEmailAddress: 'andrei.spatarelu@vemendo.se'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUR1_GR3 (180816-190614)',
            studentFirstName: 'Student3',
            studentLastName: 'Classroom',
            studentEmailAddress: 'student3.classroom@kedschools.com'
        }
    ], createStudents('DJUR1_GR3 (180816-190614)', 23, 34)),
    'DJUDJ_Gr1 (180816-190614)': tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUDJ_Gr1 (180816-190614)',
            studentFirstName: 'Carl',
            studentLastName: 'Holmberg',
            studentEmailAddress: 'carl@kedschools.com'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUDJ_Gr1 (180816-190614)',
            studentFirstName: 'Andrei',
            studentLastName: 'Spatarelu',
            studentEmailAddress: 'andrei.spatarelu@vemendo.se'
        },
        {
            schoolName: 'KED',
            tuitionGroupName: 'DJUDJ_Gr1 (180816-190614)',
            studentFirstName: 'David',
            studentLastName: 'Fahlander',
            studentEmailAddress: 'david.fahlander@kedschools.com'
        }
    ], createStudents('DJUDJ_Gr1 (180816-190614)', 151, 160)),
    'DJUDJ_Gr2 (180816-190614)': tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
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
            studentFirstName: 'David',
            studentLastName: 'Fahlander',
            studentEmailAddress: 'david.fahlander@kedschools.com'
        }
    ], createStudents('DJUDJ_Gr2 (180816-190614)', 161, 165)),
    'MAT3b_Gr1 (180816-190614)': createStudents('MAT3b_Gr1 (180816-190614)', 3, 23),
    'MAT3b_Gr3 (180816-190614)': createStudents('MAT3b_Gr3 (180816-190614)', 24, 49),
    'MAT3b_Gr2 (180816-190614)': tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
        {
            schoolName: 'KED',
            tuitionGroupName: 'MAT3b_Gr2 (180816-190614)',
            studentFirstName: 'Andrei',
            studentLastName: 'Spatarelu',
            studentEmailAddress: 'andrei@kedschools.com'
        }
    ], createStudents('MAT3b_Gr2 (180816-190614)', 50, 72)),
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

/***/ "./src/components/calendar/course-name-to-css-class.ts":
/*!*************************************************************!*\
  !*** ./src/components/calendar/course-name-to-css-class.ts ***!
  \*************************************************************/
/*! exports provided: courseNameToCssClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courseNameToCssClass", function() { return courseNameToCssClass; });
function courseNameToCssClass(cssPrefix, courseName) {
    return "" + cssPrefix + courseName.substr(0, 3).toLowerCase();
}


/***/ }),

/***/ "./src/components/charts/charts-utils.ts":
/*!***********************************************!*\
  !*** ./src/components/charts/charts-utils.ts ***!
  \***********************************************/
/*! exports provided: getWeekplannerProgressData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekplannerProgressData", function() { return getWeekplannerProgressData; });
function getWeekplannerProgressData(taskSets) {
    var chartTasks = { completedTasks: 0, totalNumberOfTasks: 0, subjectData: {} };
    taskSets.forEach(function (elem) { return elem.learningGoals.forEach(function (x) {
        var subjectCompletedTasks = x.tasks.filter(function (t) { return t.done; }).length;
        var courseSubjectData = chartTasks.subjectData[elem.courseName];
        if (!courseSubjectData) {
            courseSubjectData = chartTasks.subjectData[elem.courseName] = {
                completedNumberOfTasks: 0,
                numberOfTasks: 0
            };
        }
        courseSubjectData.completedNumberOfTasks += subjectCompletedTasks;
        courseSubjectData.numberOfTasks += x.tasks.length;
        chartTasks.completedTasks += subjectCompletedTasks;
        chartTasks.totalNumberOfTasks += x.tasks.length;
    }); });
    return chartTasks;
}


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

/***/ "./src/components/charts/progress.tsx":
/*!********************************************!*\
  !*** ./src/components/charts/progress.tsx ***!
  \********************************************/
/*! exports provided: Progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Progress = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Progress.prototype.render = function () {
        var _a = this.props, percentage = _a.percentage, backgroundColor = _a.backgroundColor, progressColor = _a.progressColor;
        var roundedPercentage = Math.round(percentage);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("svg", { className: "progress-chart", width: "100%", height: "25" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("rect", { fill: backgroundColor, width: "100%", height: "100%", rx: "4" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("rect", { className: "fill", fill: progressColor, width: roundedPercentage + "%", height: "100%", rx: "4" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("text", { className: "filled-text", textAnchor: "middle", x: "50%", y: "50%", dy: ".3em" }, roundedPercentage + "%")));
    };
    Progress.defaultProps = {
        percentage: 0,
        backgroundColor: "#F1F5F4",
        progressColor: "#3dbca2",
    };
    return Progress;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-builder-ks/logic/is-employee.ts":
/*!***************************************************************!*\
  !*** ./src/components/course-builder-ks/logic/is-employee.ts ***!
  \***************************************************************/
/*! exports provided: isEmployee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmployee", function() { return isEmployee; });
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");


function isEmployee(atSchool) {
    return atSchool ?
        Object(_access_control__WEBPACK_IMPORTED_MODULE_1__["isTeacherAtSchool"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser, atSchool) || _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser.roles.includes("ADMIN") :
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser.roles.some(function (role) { return role === 'EMPLOYEE' || role === 'ADMIN'; });
}


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
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fas fa-spinner fa-spin", "aria-hidden": "true" }),
        "\u00A0",
        label);
};


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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClassroomAssignments, _super);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        var retval = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
            assignment
        ], assignments.filter(function (_a) {
            var user = _a.user, filename = _a.filename;
            return user !== assignment.user || filename !== assignment.filename;
        }));
        return retval;
    };
    ClassroomAssignments.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, taskId, templateFile, _b, courseId, school, teacherAtSchool, res, submissions_1, refreshableAssigments_1, assignments, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
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
                                        for (var submission_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](submission), submission_1_1 = submission_1.next(); !submission_1_1.done; submission_1_1 = submission_1.next()) {
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
                        return [4 /*yield*/, Promise.all(refreshableAssigments_1.map(function (a) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, taskId, sendToUrkund, _b, courseId, school, body, queryParams, res, _c, _d;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
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
                            queryParams = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, queryParams, { driveFileId: driveFile.fileId, driveFileUrl: driveFile.url, driveFileIconUrl: driveFile.iconUrl });
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var assignmentFiles, driveFiles, urkundFiles;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assignmentFiles = submission.assignmentSubmission.attachments.map(function (sub) {
                            return sub.driveFile;
                        });
                        return [4 /*yield*/, Promise.all(assignmentFiles.map(function (file) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var driveFile;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                        return [4 /*yield*/, Promise.all(driveFiles.map(function (file) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var selectedFile, urkundFile;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            selectedFile = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, file, { canExport: file.mimeType.includes("google-apps") });
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
                        return [4 /*yield*/, Promise.all(urkundFiles.map(function (file) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var client, _a, courseId, school, taskId, user, filename, req, _b, _c, resJson_1, e_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        client = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.http;
                        _a = this.props.course, courseId = _a.id, school = _a.school;
                        taskId = this.props.task.id;
                        user = assignment.user, filename = assignment.filename;
                        return [4 /*yield*/, this.setState(function (_a) {
                                var assignments = _a.assignments;
                                return ({
                                    assignments: _this.update(assignments, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, assignment, { isRefreshing: true }))
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
                                    assignments: _this.update(assignments, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, assignment, { isRefreshing: false, metadata: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, assignment.metadata, { urkundResponse: resJson_1 }) }))
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
                                    assignments: _this.update(assignments, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, assignment, { isRefreshing: false, refreshError: e_2 }))
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
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Uppgift inte skapad i Classroom \u00E4nnu. Provaa igen om n\u00E5gra minuter.");
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
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], { label: this.state.loadingMessage });
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseModulePage, _super);
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
    return module.taskCustomizations ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task, module.taskCustomizations[task.id]) :
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











Object(_utils_manual_scroll_restoration__WEBPACK_IMPORTED_MODULE_5__["initManualScrollRestoration"])();
var CoursePage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CoursePage, _super);
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
        var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](split.map(function (part) { return decodeURIComponent(part); }), 2), moduleName = _a[0], taskId = _a[1];
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
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-layout sv-skip-spacer sv-column-7" }, task ?
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RunUpPage, _super);
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

/***/ "./src/components/course-viewer/course-page/task-assignments-table.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/course-viewer/course-page/task-assignments-table.tsx ***!
  \*****************************************************************************/
/*! exports provided: TaskAssignmentsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAssignmentsTable", function() { return TaskAssignmentsTable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../features */ "./src/features/index.ts");
/* harmony import */ var _subcomponents_task_fileview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subcomponents/task-fileview */ "./src/components/course-viewer/subcomponents/task-fileview.tsx");
/* harmony import */ var _task_assignments_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task-assignments-utils */ "./src/components/course-viewer/course-page/task-assignments-utils.tsx");








var TaskAssignmentsTable = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TaskAssignmentsTable, _super);
    function TaskAssignmentsTable(props) {
        return _super.call(this, props) || this;
    }
    TaskAssignmentsTable.prototype.render = function () {
        var _a = this.props, loading = _a.loading, files = _a.files, usersNotHandedInDocs = _a.usersNotHandedInDocs, taskDeadline = _a.taskDeadline, teacherAtThisSchool = _a.teacherAtThisSchool, refreshAssignment = _a.refreshAssignment, sendToUrkund = _a.sendToUrkund, deleteAssignment = _a.deleteAssignment;
        var hasOwnDocs = files.some(function (file) { return file.user === _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser.mail; });
        return loading ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_3__["Spinner"], { label: "Laddar inl\u00E4mnade filer..." }) : files.length === 0 && !usersNotHandedInDocs ?
            (teacherAtThisSchool ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Ingen elev har l\u00E4mnat in n\u00E5got arbete \u00E4nnu.") : null)
            : (teacherAtThisSchool ? getTeacherView(files, hasOwnDocs, usersNotHandedInDocs, taskDeadline, refreshAssignment, sendToUrkund, deleteAssignment) : getStudentView(files, hasOwnDocs, deleteAssignment));
    };
    return TaskAssignmentsTable;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function getTeacherView(files, hasOwnDocs, usersNotHandedInDocs, taskDeadline, refreshAssignment, sendToUrkund, deleteAssignment) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        files.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            _features__WEBPACK_IMPORTED_MODULE_5__["features"].studyGroups && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Uploaded assignments"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "task-assignments-table" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Elev"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Filnamn"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Inl\u00E4mnat den"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Rapport"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Niv\u00E5"),
                        hasOwnDocs && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, files.map(function (file) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: file.mediaLink, style: file.metadata.$meta ? { opacity: 0.5 } : {} },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "mailto:" + file.user }, file.metadata.userDisplayName || file.user)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, file.metadata.driveFileId ?
                            // The file can be edited on drive. Link to editing it.
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_task_fileview__WEBPACK_IMPORTED_MODULE_6__["FileView"], { thumbnail: file.metadata.driveFileIconUrl, title: file.filename.substr(0, file.filename.lastIndexOf('.')), url: file.metadata.driveFileUrl }) :
                            // The file cannot be edited on drive. Link to downloading it.
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_task_fileview__WEBPACK_IMPORTED_MODULE_6__["FileView"], { customAction: function (ev) {
                                    ev.preventDefault();
                                    ev.stopPropagation();
                                    Object(_task_assignments_utils__WEBPACK_IMPORTED_MODULE_7__["downloadFile"])(file);
                                }, title: file.filename })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "assignment-date-col" }, moment__WEBPACK_IMPORTED_MODULE_2___default()(file.uploadDate).format('YYYY-MM-DD HH:mm')),
                        file.metadata.$meta === 'add' ?
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { colSpan: 2 },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_3__["Spinner"], { label: "Laddar upp..." })) :
                            file.metadata.$meta === 'delete' ?
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { colSpan: 2 },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_3__["Spinner"], null),
                                    " Tar bort...") :
                                Object(_task_assignments_utils__WEBPACK_IMPORTED_MODULE_7__["getUrkundStatus"])(file, refreshAssignment, sendToUrkund)),
                    hasOwnDocs && getDeleteOwnDocsColumn(file, deleteAssignment)); })))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
        usersNotHandedInDocs && usersNotHandedInDocs.length > 0 && getStudentNotHandedInAssignment(usersNotHandedInDocs, taskDeadline));
}
function getStudentView(files, hasOwnDocs, deleteAssignments) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "task-assignments-table" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Filnamn"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Inl\u00E4mnat den"),
                hasOwnDocs && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, files.map(function (file) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: file.mediaLink, style: file.metadata.$meta ? { opacity: 0.5 } : {} },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, file.metadata.driveFileId ?
                    // The file can be edited on drive. Link to editing it.
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_task_fileview__WEBPACK_IMPORTED_MODULE_6__["FileView"], { thumbnail: file.metadata.driveFileIconUrl, title: file.filename.substr(0, file.filename.lastIndexOf('.')), url: file.metadata.driveFileUrl }) :
                    // The file cannot be edited on drive. Link to downloading it.
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_subcomponents_task_fileview__WEBPACK_IMPORTED_MODULE_6__["FileView"], { customAction: function (ev) {
                            ev.preventDefault();
                            ev.stopPropagation();
                            Object(_task_assignments_utils__WEBPACK_IMPORTED_MODULE_7__["downloadFile"])(file);
                        }, title: file.filename })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "assignment-date-col" }, file.metadata.$meta === 'add' ?
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_3__["Spinner"], { label: "Laddar upp..." }) :
                    file.metadata.$meta === 'delete' ?
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_3__["Spinner"], { label: "Tar bort..." }) :
                        moment__WEBPACK_IMPORTED_MODULE_2___default()(file.uploadDate).format('YYYY-MM-DD HH:mm')),
                hasOwnDocs && getDeleteOwnDocsColumn(file, deleteAssignments));
        })));
}
function getDeleteOwnDocsColumn(file, deleteAssignment) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, !file.metadata.$meta && file.user === _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser.mail &&
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "#", onClick: function (ev) {
                ev.stopPropagation();
                ev.preventDefault();
                if (confirm("Radera inl\u00E4mnad fil " + file.filename + "?"))
                    deleteAssignment(file.mediaLink);
            } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-trash-alt" })));
}
function getStudentNotHandedInAssignment(usersNotHandedInDocs, taskDeadline) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        _features__WEBPACK_IMPORTED_MODULE_5__["features"].studyGroups && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Not handed in assignments"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "task-assignments-table" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Elev"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Task deadline"))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, usersNotHandedInDocs.map(function (user) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: user.displayName, style: { opacity: 0.5 } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: "mailto:" + user.email }, user.displayName)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null,
                        " ",
                        taskDeadline,
                        " "));
            }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null));
}


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







function getUrkundStatus(file, refreshAssignment, checkWithUrkund) {
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
                    checkWithUrkund && refreshAssignment(file);
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

/***/ "./src/components/course-viewer/course-page/task-assignments.tsx":
/*!***********************************************************************!*\
  !*** ./src/components/course-viewer/course-page/task-assignments.tsx ***!
  \***********************************************************************/
/*! exports provided: TaskAssignments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAssignments", function() { return TaskAssignments; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _course_builder_ks_logic_is_employee__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../course-builder-ks/logic/is-employee */ "./src/components/course-builder-ks/logic/is-employee.ts");
/* harmony import */ var _apis_google_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../apis/google-picker */ "./src/apis/google-picker.ts");
/* harmony import */ var _apis_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../apis/buttons */ "./src/apis/buttons.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../features */ "./src/features/index.ts");
/* harmony import */ var _apis_google_drive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../apis/google-drive */ "./src/apis/google-drive.ts");
/* harmony import */ var _apis_mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../apis/mock/mock-classroom-data */ "./src/apis/mock/mock-classroom-data.ts");
/* harmony import */ var _task_assignments_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./task-assignments-table */ "./src/components/course-viewer/course-page/task-assignments-table.tsx");
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");
/* harmony import */ var _task_assignments_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./task-assignments-utils */ "./src/components/course-viewer/course-page/task-assignments-utils.tsx");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../globals/db */ "./src/globals/db.ts");

















var MAX_URKUND_FILE_SIZE_MB = 50;
var MAX_NONURKUND_FILE_SIZE_MB = 100;
var ALLOWED_EXTENSIONS = [
    ".pdf",
    ".odt",
    ".docx",
    ".doc",
    ".cad",
    ".wav",
    ".mp3",
    ".mpeg4",
    ".mp4",
    ".zip",
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".txt",
    ".html"
];
var URKUND_EXTENSIONS = [
    ".pdf",
    ".odt",
    ".docx",
    ".doc",
    ".txt",
    ".html"
];
var TaskAssignments = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TaskAssignments, _super);
    function TaskAssignments(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            assignments: [],
            loading: true,
            studyGroupStudents: []
        };
        return _this;
    }
    TaskAssignments.prototype.setStatePromised = function (cb) {
        var _this = this;
        return new Promise(function (resolve) { return _super.prototype.setState.call(_this, cb, resolve); });
    };
    TaskAssignments.prototype.componentDidMount = function () {
        this.load();
    };
    TaskAssignments.prototype.componentWillReceiveProps = function (nextProps) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(nextProps.taskId !== this.props.taskId ||
                            nextProps.courseId !== this.props.courseId)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.setStatePromised(function () { return ({
                                assignments: [],
                                loading: true,
                                studyGroupStudents: []
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
    TaskAssignments.prototype.refreshAssignment = function (assignment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var client, _a, courseId, taskId, school, user, filename, req, _b, _c, resJson_1, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        client = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.http;
                        _a = this.props, courseId = _a.courseId, taskId = _a.taskId, school = _a.school;
                        user = assignment.user, filename = assignment.filename;
                        return [4 /*yield*/, this.setState(function (_a) {
                                var assignments = _a.assignments;
                                return ({
                                    assignments: Object(_task_assignments_utils__WEBPACK_IMPORTED_MODULE_15__["update"])(assignments, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, assignment, { isRefreshing: true }))
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
                                    assignments: Object(_task_assignments_utils__WEBPACK_IMPORTED_MODULE_15__["update"])(assignments, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, assignment, { isRefreshing: false, metadata: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, assignment.metadata, { urkundResponse: resJson_1 }) }))
                                });
                            })];
                    case 7:
                        _d.sent();
                        return [3 /*break*/, 10];
                    case 8:
                        e_1 = _d.sent();
                        return [4 /*yield*/, this.setState(function (_a) {
                                var assignments = _a.assignments;
                                return ({
                                    assignments: Object(_task_assignments_utils__WEBPACK_IMPORTED_MODULE_15__["update"])(assignments, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, assignment, { isRefreshing: false, refreshError: e_1 }))
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
    TaskAssignments.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var client, _a, courseId, taskId, school, courseStudyGroups_1, sendToUrkund, teacherAtSchool, res, _b, _c, assignments, tuitionStudents, schoolObj_1, mockDatasource, emptyOrMock, result, _d, refreshableAssigments, refreshableAssigments_1, refreshableAssigments_1_1, a, e_2_1, error_1;
            var e_2, _e;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _f.trys.push([0, 18, , 19]);
                        client = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.http;
                        _a = this.props, courseId = _a.courseId, taskId = _a.taskId, school = _a.school, courseStudyGroups_1 = _a.courseStudyGroups, sendToUrkund = _a.sendToUrkund;
                        teacherAtSchool = Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["isTeacherAtSchool"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser, school);
                        return [4 /*yield*/, (teacherAtSchool ?
                                client.get("assignments/" + school + "/" + courseId + "/" + taskId) :
                                client.get("assignments/" + school + "/" + courseId + "/" + taskId + "/" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail))];
                    case 1:
                        res = _f.sent();
                        if (!(res.status !== 200)) return [3 /*break*/, 3];
                        _b = kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["HttpError"].bind;
                        _c = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_b.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["HttpError"], _c.concat([_f.sent()])))();
                    case 3: return [4 /*yield*/, res.json()];
                    case 4:
                        assignments = _f.sent();
                        tuitionStudents = [];
                        if (!(courseStudyGroups_1 && courseStudyGroups_1.length > 0)) return [3 /*break*/, 9];
                        return [4 /*yield*/, _globals_db__WEBPACK_IMPORTED_MODULE_16__["db"].schools.name(school).single().load()];
                    case 5:
                        schoolObj_1 = _f.sent();
                        mockDatasource = Object.keys(_apis_mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_12__["mockTuitionStudents"]).filter(function (m) { return courseStudyGroups_1.includes(m); }).map(function (sp) { return _apis_mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_12__["mockTuitionStudents"][sp]; });
                        emptyOrMock = school === 'KED' && mockDatasource ? mockDatasource : [];
                        if (!schoolObj_1.edsSchoolNameGymn) return [3 /*break*/, 7];
                        return [4 /*yield*/, Promise.all(courseStudyGroups_1.map(function (stGroup) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].edsClient.getTuitionGroupStudents({
                                                schoolName: schoolObj_1.edsSchoolNameGymn,
                                                tuitionGroupName: stGroup
                                            })];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); }))];
                    case 6:
                        _d = _f.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        _d = emptyOrMock;
                        _f.label = 8;
                    case 8:
                        result = _d;
                        tuitionStudents = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["flatten"])(result);
                        _f.label = 9;
                    case 9:
                        this.setState({
                            error: null,
                            loading: false,
                            assignments: assignments,
                            studyGroupStudents: tuitionStudents
                        });
                        if (!(teacherAtSchool && sendToUrkund)) return [3 /*break*/, 17];
                        refreshableAssigments = assignments.filter(function (a) {
                            return a.metadata &&
                                a.metadata.urkundExternalId &&
                                a.metadata.urkundExternalId.length > 0 && // Must have metadata.urkundExternalId Otherwise not possible to refresh
                                !a.metadata.urkundUploadError && ( // Not possible to refresh if upload has failed
                            !a.metadata.urkundLastPoll || // Never checked status yet
                                (['Accepted', 'Submitted'].indexOf(JSON.parse(a.metadata.urkundResponse)[0].Status.State) >= 0 &&
                                    parseInt(a.metadata.urkundLastPoll) < moment__WEBPACK_IMPORTED_MODULE_4___default()().add(-15, "seconds").toDate().getTime()));
                        }
                        // Checked status for a long time ago
                        );
                        _f.label = 10;
                    case 10:
                        _f.trys.push([10, 15, 16, 17]);
                        refreshableAssigments_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](refreshableAssigments), refreshableAssigments_1_1 = refreshableAssigments_1.next();
                        _f.label = 11;
                    case 11:
                        if (!!refreshableAssigments_1_1.done) return [3 /*break*/, 14];
                        a = refreshableAssigments_1_1.value;
                        return [4 /*yield*/, this.refreshAssignment(a)];
                    case 12:
                        _f.sent();
                        _f.label = 13;
                    case 13:
                        refreshableAssigments_1_1 = refreshableAssigments_1.next();
                        return [3 /*break*/, 11];
                    case 14: return [3 /*break*/, 17];
                    case 15:
                        e_2_1 = _f.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 17];
                    case 16:
                        try {
                            if (refreshableAssigments_1_1 && !refreshableAssigments_1_1.done && (_e = refreshableAssigments_1.return)) _e.call(refreshableAssigments_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 17: return [3 /*break*/, 19];
                    case 18:
                        error_1 = _f.sent();
                        this.setState({
                            loading: false,
                            error: "Kunde inte ladda inl\u00E4mningsuppgifter",
                            assignments: []
                        });
                        console.error(error_1);
                        return [3 /*break*/, 19];
                    case 19: return [2 /*return*/];
                }
            });
        });
    };
    TaskAssignments.prototype.onDrag = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        ev.dataTransfer.dropEffect = 'copy';
    };
    TaskAssignments.prototype.verifyAndUpload = function (file, driveFile) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!file)
                            return [2 /*return*/];
                        if (this.state.assignments.some(function (a) {
                            return a.user === _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail &&
                                a.filename === file.name;
                        })) {
                            if (!confirm("Ers\u00E4tta befintlig fil (" + file.name + ")?")) {
                                return [2 /*return*/];
                            }
                        }
                        if (this.props.school.toLowerCase() !== _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.school.toLowerCase()) {
                            if (!confirm("Uppgiften tillh\u00F6r en annan skola (" + this.props.school + ").\n" +
                                "Vill du \u00E4nd\u00E5 l\u00E4mna in ditt arbete h\u00E4r?")) {
                                return [2 /*return*/];
                            }
                        }
                        this.setState({ uploadingFile: file });
                        return [4 /*yield*/, this.upload(file, driveFile)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.load()];
                    case 2:
                        _a.sent();
                        this.setState({
                            uploadingFile: null
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.setState({
                            error: "Kunde inte ladda upp filen. " + (error_2.message || error_2),
                            uploadingFile: null
                        });
                        console.error(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskAssignments.prototype.upload = function (file, driveFile) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var client, _a, courseId, taskId, school, sendToUrkund, mail, isUrkundExtension, lowerFilename, body, queryParams, res, _b, _c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        client = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.http;
                        _a = this.props, courseId = _a.courseId, taskId = _a.taskId, school = _a.school, sendToUrkund = _a.sendToUrkund;
                        mail = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail;
                        isUrkundExtension = URKUND_EXTENSIONS
                            .indexOf("." + file.name.split('.').reverse()[0].toLowerCase()) >= 0;
                        if (isUrkundExtension) {
                            if (file.size > MAX_URKUND_FILE_SIZE_MB * 1024 * 1024) {
                                throw new Error("Filer av denna typ f\u00E5r inte vara st\u00F6rre \u00E4n " + MAX_URKUND_FILE_SIZE_MB + " MB");
                            }
                        }
                        else {
                            if (file.size > MAX_NONURKUND_FILE_SIZE_MB * 1024 * 1024) {
                                throw new Error("Filen f\u00E5r inte vara st\u00F6rre \u00E4n " + MAX_NONURKUND_FILE_SIZE_MB + " MB");
                            }
                        }
                        lowerFilename = file.name.toLowerCase();
                        if (!ALLOWED_EXTENSIONS.some(function (ext) { return lowerFilename.endsWith(ext); })) {
                            throw new Error("Filens \u00E4ndelse m\u00E5ste vara " + ALLOWED_EXTENSIONS.join(' / '));
                        }
                        body = new FormData();
                        body.append('files', file);
                        queryParams = {
                            userDisplayName: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.displayName,
                            verifyWithUrkund: sendToUrkund
                        };
                        if (driveFile) {
                            queryParams = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, queryParams, { driveFileId: driveFile.fileId, driveFileUrl: driveFile.url, driveFileIconUrl: driveFile.iconUrl });
                        }
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.http.fetch("assignments/" + school + "/" + courseId + "/" + taskId + "/" + mail, 'put', {}, queryParams, {
                                body: body
                            })];
                    case 1:
                        res = _d.sent();
                        if (!(res.status !== 200)) return [3 /*break*/, 3];
                        _b = kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["HttpError"].bind;
                        _c = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 2: throw new (_b.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["HttpError"], _c.concat([_d.sent()])))();
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TaskAssignments.prototype.delete = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, _a, _b, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.setStatePromised(function (_a) {
                                var assignments = _a.assignments;
                                return ({ assignments: assignments.map(function (a) { return a.mediaLink === url ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, a, { metadata: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, a.metadata, { $meta: 'delete' }) }) : tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, a); }) });
                            })];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.http.fetch(url, 'delete', {})];
                    case 2:
                        res = _c.sent();
                        if (!(res.status >= 400)) return [3 /*break*/, 4];
                        _a = kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["HttpError"].bind;
                        _b = [void 0, res.status];
                        return [4 /*yield*/, res.text()];
                    case 3: throw new (_a.apply(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["HttpError"], _b.concat([_c.sent()])))();
                    case 4: return [4 /*yield*/, this.load()];
                    case 5:
                        _c.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        err_2 = _c.sent();
                        this.setState({ error: "Kunde inte ta bort filen. " + (err_2.message || err_2) });
                        console.error(err_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    TaskAssignments.prototype.render = function () {
        var _this = this;
        var _a = this.props, courseId = _a.courseId, taskId = _a.taskId, school = _a.school, courseStudyGroups = _a.courseStudyGroups, taskDeadline = _a.taskDeadline, sendToUrkund = _a.sendToUrkund;
        var _b = this.state, loading = _b.loading, assignments = _b.assignments, error = _b.error, uploadingFile = _b.uploadingFile, studyGroupStudents = _b.studyGroupStudents;
        var teacherAtThisSchool = Object(_access_control__WEBPACK_IMPORTED_MODULE_6__["isTeacherAtSchool"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser, school);
        var files = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](assignments);
        var showGooglePicker = _features__WEBPACK_IMPORTED_MODULE_10__["features"].picker;
        if (uploadingFile) {
            var virtualFile_1 = {
                school: school,
                courseId: courseId,
                taskId: taskId,
                filename: uploadingFile.name,
                size: uploadingFile.size,
                user: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail,
                contentType: uploadingFile.type,
                uploadDate: Date.now(),
                mediaLink: "assignments/" + school + "/" + courseId + "/" + taskId + "/" + _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail + "/" + uploadingFile.name,
                metadata: {
                    $meta: 'add',
                    userDisplayName: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.displayName
                }
            };
            files = files.filter(function (file) { return file.mediaLink !== virtualFile_1.mediaLink; });
            files = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](files, [virtualFile_1]);
        }
        files = files.map(function (s) {
            var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"]((s.metadata.userDisplayName || s.user).split(' ')), firstName = _a[0], rest = _a.slice(1);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, s, { firstName: firstName, lastName: rest.join(' ') });
        }).sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["compareProps"])([
            "lastName",
            "firstName",
            "filename",
            "uploadDate"
        ], ["sv", "en"], { sensitivity: 'base' }));
        //groupping files by study group
        var filesStudyGroups = {};
        var groupByStudyGroup = courseStudyGroups && courseStudyGroups.length > 0 && _features__WEBPACK_IMPORTED_MODULE_10__["features"].studyGroups && teacherAtThisSchool;
        courseStudyGroups && courseStudyGroups.forEach(function (courseSg) {
            //compute study groups files
            var sgFiles = files.filter(function (file) { return studyGroupStudents.find(function (c) { return c.studentEmailAddress == file.user && courseSg === c.tuitionGroupName; }); });
            // compute users that have not submitted their assignments
            var notSubmittedUsers = studyGroupStudents.filter(function (cs) { return !sgFiles.find(function (f) { return f.user === cs.studentEmailAddress; }) && courseSg === cs.tuitionGroupName; })
                .map(function (ns) { return { displayName: ns.studentFirstName + " " + ns.studentLastName, email: ns.studentEmailAddress }; });
            //sort users
            notSubmittedUsers = notSubmittedUsers.map(function (s) {
                var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](s.displayName.split(' ')), firstName = _a[0], rest = _a.slice(1);
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, s, { firstName: firstName, lastName: rest.join(' ') });
            }).sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["compareProps"])(["lastName", "firstName"]));
            filesStudyGroups[courseSg] = { assignments: sgFiles, notSubmittedUsers: notSubmittedUsers };
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "stopFloats", onDragOver: function (ev) { return _this.onDrag(ev); }, onDrop: function (ev) {
                ev.stopPropagation();
                ev.preventDefault();
                _this.verifyAndUpload(ev.dataTransfer.files[0]);
            } },
            error ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "error" }, error)) : undefined,
            groupByStudyGroup ? Object.keys(filesStudyGroups).map(function (key) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_14__["OpenCloseBox"], { headerOpen: false, title: key, key: key },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_assignments_table__WEBPACK_IMPORTED_MODULE_13__["TaskAssignmentsTable"], { loading: loading, files: filesStudyGroups[key].assignments, usersNotHandedInDocs: filesStudyGroups[key].notSubmittedUsers, school: school, refreshAssignment: _this.refreshAssignment.bind(_this), deleteAssignment: _this.delete.bind(_this), taskDeadline: taskDeadline, teacherAtThisSchool: teacherAtThisSchool, sendToUrkund: sendToUrkund }));
            }) :
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_assignments_table__WEBPACK_IMPORTED_MODULE_13__["TaskAssignmentsTable"], { loading: loading, files: files, school: school, refreshAssignment: this.refreshAssignment.bind(this), deleteAssignment: this.delete.bind(this), teacherAtThisSchool: teacherAtThisSchool, sendToUrkund: sendToUrkund }),
            Object(_course_builder_ks_logic_is_employee__WEBPACK_IMPORTED_MODULE_7__["isEmployee"])() ? undefined : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "drop-zone task-assignment-drop-zone" },
                    "Droppa ditt f\u00E4rdiga arbete h\u00E4r.",
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                    "Det g\u00E5r ocks\u00E5 bra att anv\u00E4nda bl\u00E4ddra-knappen nedan."),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "file", onChange: function (ev) { return _this.verifyAndUpload(ev.target.files[0]); } }),
                showGooglePicker && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_apis_buttons__WEBPACK_IMPORTED_MODULE_9__["DriveButton"], { label: "H\u00E4mta fr\u00E5n Google Drive", action: function () {
                        var picker = new _apis_google_picker__WEBPACK_IMPORTED_MODULE_8__["GooglePicker"]({ upload: true });
                        var drive = new _apis_google_drive__WEBPACK_IMPORTED_MODULE_11__["GoogleDrive"]();
                        picker.show().then(function (files) {
                            var pickedFile = files[0];
                            if (!pickedFile)
                                return;
                            drive.downloadFile({
                                file: pickedFile,
                                mimeType: "text/plain",
                                limitSize: MAX_NONURKUND_FILE_SIZE_MB
                            }).then(function (file) { return _this.verifyAndUpload(file, pickedFile); });
                        });
                    } }))));
    };
    return TaskAssignments;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TaskPage, _super);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var weekDate, userTask, _a, course, task, module, latestTimeStamp, userTask_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
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
            weekPlannerWeek === currentWeek + 1 ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["vald vecka (n\u00E4sta vecka)"], ["vald vecka (n\u00E4sta vecka)"]))) :
                weekPlannerWeek === currentWeek - 1 ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["vald vecka (f\u00F6rra veckan)"], ["vald vecka (f\u00F6rra veckan)"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["vald vecka (v ", ")"], ["vald vecka (v ", ")"])), weekPlannerWeek);
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
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_checkbox__WEBPACK_IMPORTED_MODULE_12__["UIAddbox"], { state: userTask && userTask.$meta !== 'deleting' ? 'checked' : '', label: userTask ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ta bort uppgiften fr\u00E5n ", ""], ["Ta bort uppgiften fr\u00E5n ", ""])), forWeekString) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["L"])(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["L\u00E4gg till uppgiften i ", ""], ["L\u00E4gg till uppgiften i ", ""])), forWeekString), onChange: function () { return !isWorking && _this.toggleTask(); } })),
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









var CourseViewer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseViewer, _super);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var courseId, course, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        courseId = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_7__["parseQueryString"])(location.search)["courseId"];
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
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_5__["Spinner"], null) :
                this.state.course ?
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_page__WEBPACK_IMPORTED_MODULE_6__["CoursePage"], { course: this.state.course, courseBuilderUrl: this.props.courseBuilderUrl }) :
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_list_courses_list_courses_page__WEBPACK_IMPORTED_MODULE_8__["ListCoursesPage"], null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utils_error_success_feedback__WEBPACK_IMPORTED_MODULE_3__["ErrorSuccessFeedback"], null));
    };
    return CourseViewer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-viewer/subcomponents/abilities-box.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/course-viewer/subcomponents/abilities-box.tsx ***!
  \**********************************************************************/
/*! exports provided: AbilitiesBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbilitiesBox", function() { return AbilitiesBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var AbilitiesBox = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AbilitiesBox, _super);
    function AbilitiesBox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            headerOpen: props.headerOpen || false
        };
        return _this;
    }
    AbilitiesBox.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, subTitle = _a.subTitle, abilities = _a.abilities, className = _a.className;
        var headerOpen = this.state.headerOpen;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: (className || '') + " openClose" + (headerOpen ? " open" : "") },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openHeader", onClick: function () { return _this.setState({ headerOpen: !_this.state.headerOpen }); } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, title)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openContent" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "abilityList" },
                    subTitle && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "contentHeader" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, subTitle)),
                    abilities.map(function (a) {
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: a.id, className: "contentPart" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "contentText" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { dangerouslySetInnerHTML: { __html: a.name } })));
                    }))));
    };
    return AbilitiesBox;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/course-viewer/subcomponents/central-content-box.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/course-viewer/subcomponents/central-content-box.tsx ***!
  \****************************************************************************/
/*! exports provided: CentralContentBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralContentBox", function() { return CentralContentBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var CentralContentBox = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CentralContentBox, _super);
    function CentralContentBox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            headerOpen: props.headerOpen || false
        };
        return _this;
    }
    CentralContentBox.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, subTitle = _a.subTitle, centralContent = _a.centralContent, className = _a.className;
        var headerOpen = this.state.headerOpen;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: (className || '') + " openClose" + (headerOpen ? " open" : "") },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openHeader", onClick: function () { return _this.setState({ headerOpen: !_this.state.headerOpen }); } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, title)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openContent" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "abilityList" },
                    subTitle && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "contentHeader" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, subTitle)),
                    centralContent.map(function (cc) {
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: cc.id, className: "contentPart" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "contentText" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { dangerouslySetInnerHTML: { __html: cc.name } })));
                    }))));
    };
    return CentralContentBox;
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubmissionTables, _super);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubmissionRow, _super);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var assignments;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                                            assignment.inClassroom = true;
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var req, _a, _b, resJson, files;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ loading: true, loadingMessage: "Returnerar inlämning..." });
                        return [4 /*yield*/, this.classroom.returnSubmission(submission)];
                    case 1:
                        _a.sent();
                        this.setState({ loading: false, submission: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, submission, { state: 'RETURNED' }) });
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
            : false;
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
            (file &&
                files.filter(function (f) { return f.metadata.driveFileId == file.id; }).length == 0);
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

/***/ "./src/components/course-viewer/subcomponents/confirmation.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/course-viewer/subcomponents/confirmation.tsx ***!
  \*********************************************************************/
/*! exports provided: Confirmation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Confirmation", function() { return Confirmation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Confirmation(props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "confirmation-box " + props.className + (props.visible ? " visible" : "") },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, props.text),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: function () { return props.onConfirm(); } }, "OK"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: function () { return props.onCancel(); } }, "Avbryt"));
}


/***/ }),

/***/ "./src/components/course-viewer/subcomponents/knowledge-requirements-table.tsx":
/*!*************************************************************************************!*\
  !*** ./src/components/course-viewer/subcomponents/knowledge-requirements-table.tsx ***!
  \*************************************************************************************/
/*! exports provided: KnowledgeRequirementsBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeRequirementsBox", function() { return KnowledgeRequirementsBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");




var KnowledgeRequirementsBox = function (props) {
    var title = props.title, className = props.className, headerOpen = props.headerOpen, idsToSubjectMap = props.idsToSubjectMap, requirements = props.requirements;
    if (!idsToSubjectMap) {
        // Normal case
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__["OpenCloseBox"], { title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, title), className: className, headerOpen: headerOpen },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](KnowledgeRequirementsTable, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props)))));
    }
    // Special case: Requirements that spans multiple subjects:
    var requirementsPerSubjectLookup = idsToSubjectMap ?
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["arrayToLookup"])(requirements, function (r) { return idsToSubjectMap[r.id] || ""; }) : { "": requirements };
    var reqsPerSubject = Object.keys(requirementsPerSubjectLookup)
        .map(function (subject) { return ({ subject: subject, requirements: requirementsPerSubjectLookup[subject] }); });
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__["OpenCloseBox"], { title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, title), className: className, headerOpen: headerOpen }, reqsPerSubject.map(function (_a) {
        var subject = _a.subject, requirements = _a.requirements;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](KnowledgeRequirementsTable, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props, { key: subject, heading: subject, requirements: requirements })));
    }));
};
var KnowledgeRequirementsTable = function (_a) {
    var requirements = _a.requirements, includedIds = _a.includedIds, explainedRequirements = _a.explainedRequirements, partialRequirments = _a.partialRequirments, heading = _a.heading;
    var columns = ["E", "C", "A"];
    var rows = [];
    var reqs = requirements.slice();
    var row = null;
    while (true) {
        row = columns.map(function (grade) {
            var pNext = reqs.findIndex(function (r) { return r.gradeStep.toUpperCase() === grade; });
            if (pNext < 0)
                return null;
            var rv = reqs[pNext];
            reqs.splice(pNext, 1);
            return includedIds ?
                (includedIds[rv.id] ? rv : undefined) :
                rv;
        });
        if (row.every(function (r) { return r === null; }))
            break;
        if (!row.every(function (r) { return !r; })) {
            rows.push(row);
        }
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        heading && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, heading),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null, columns.map(function (c) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: c }, c); }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, rows.map(function (row, i) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], { key: i },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: i }, row.map(function (column, j) {
                    var columnPartialReq = column && partialRequirments && partialRequirments[column.id];
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: j, dangerouslySetInnerHTML: { __html: columnPartialReq ? columnPartialReq.join(".") : column ? column.name : "" } });
                }
                // <td key={j}>
                // {partialRequirments.map((pr, k) => pr[column.id] ?
                //   <span key={k} dangerouslySetInnerHTML={{}}/>
                // )}
                // </td>
                )),
                explainedRequirements && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null, row.map(function (column, j) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: j, className: "explained-requirement" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, (column && explainedRequirements[column.id]) || ""));
                }))); }))));
};


/***/ }),

/***/ "./src/components/course-viewer/subcomponents/learning-goals-list.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/course-viewer/subcomponents/learning-goals-list.tsx ***!
  \****************************************************************************/
/*! exports provided: LearningGoalsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningGoalsList", function() { return LearningGoalsList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _task_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-list */ "./src/components/course-viewer/subcomponents/task-list.tsx");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");




var LearningGoalsList = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LearningGoalsList, _super);
    function LearningGoalsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LearningGoalsList.prototype.render = function () {
        var _a = this.props, commonTasks = _a.commonTasks, learningGoals = _a.learningGoals;
        var intl = this.context.intl;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            learningGoals.map(function (lg) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: lg.name },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, lg.name),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_list__WEBPACK_IMPORTED_MODULE_2__["TaskList"], { learningTasks: lg.learningTasks })); }),
            commonTasks.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                learningGoals.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, intl.formatMessage({ id: "learningGoalsLost.overall", defaultMessage: "Övergripande" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_list__WEBPACK_IMPORTED_MODULE_2__["TaskList"], { learningTasks: commonTasks })));
    };
    LearningGoalsList.contextType = _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"];
    return LearningGoalsList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ResourceList, _super);
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

/***/ "./src/components/course-viewer/subcomponents/task-list.tsx":
/*!******************************************************************!*\
  !*** ./src/components/course-viewer/subcomponents/task-list.tsx ***!
  \******************************************************************/
/*! exports provided: TaskList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskList", function() { return TaskList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../repos/user-tasks-repo */ "./src/repos/user-tasks-repo.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _confirmation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirmation */ "./src/components/course-viewer/subcomponents/confirmation.tsx");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var _utility_components_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utility-components/checkbox */ "./src/components/utility-components/checkbox.tsx");










var TaskList = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TaskList, _super);
    function TaskList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            userTasks: [],
            weekDate: Date.now(),
            confirmations: []
        };
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    TaskList.prototype.onChange = function (userTasks, persisted) {
        if (persisted.weekDate !== this.state.weekDate) {
            this.setState({
                confirmations: []
            });
        }
        this.setState({
            userTasks: userTasks,
            weekDate: persisted.weekDate
        });
    };
    TaskList.prototype.componentDidMount = function () {
        _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].subscribe(this.onChange);
    };
    TaskList.prototype.componentWillUnmount = function () {
        _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].unsubscribe(this.onChange);
    };
    TaskList.prototype.toggleTask = function (learningTask) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userTasks, weekDate, latestTimeStamp, userTask;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userTasks = this.state.userTasks.filter(function (ut) {
                            return learningTask.task ?
                                ut.task && ut.task.some(function (t) { return t.id === learningTask.id; }) :
                                ut.siteVisionPageId === learningTask.id;
                        });
                        weekDate = this.state.weekDate;
                        if (!(userTasks.length === 0)) return [3 /*break*/, 2];
                        latestTimeStamp = Math.max.apply(Math.max, [weekDate].concat(this.state.userTasks.map(function (t) { return t.dateTime; })));
                        userTask = {
                            id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_4__["createUUID"])(),
                            courseName: learningTask.courseName,
                            dateTime: latestTimeStamp + 2000,
                            learningGoal: learningTask.learningGoal,
                            name: learningTask.name,
                            url: learningTask.url,
                            acl: [
                                // Default ACL: Let user self have full control over this item:
                                new kedbackend_client__WEBPACK_IMPORTED_MODULE_4__["DocumentAccess"]("email", _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail, "S"),
                            ].map(function (ac) { return ac.toString(); })
                        };
                        if (learningTask.task && learningTask.task.deadline) {
                            userTask.deadline = learningTask.task.deadline;
                        }
                        if (learningTask.task) {
                            userTask.task = [learningTask.task];
                            if (learningTask.course) {
                                userTask.course = [learningTask.course];
                            }
                            else if (learningTask.courseInfo) {
                                userTask.courseInfo = learningTask.courseInfo;
                            }
                        }
                        else {
                            userTask.siteVisionPageId = learningTask.id;
                        }
                        if (learningTask.step) {
                            userTask.step = learningTask.step;
                        }
                        return [4 /*yield*/, Promise.all([
                                _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].setWeekPlannerBoxOpen(learningTask.courseName, true),
                                _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].insert([userTask])
                            ])];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: 
                    // Already present in weekplanner. It's time to delete those that matched us.
                    return [4 /*yield*/, _repos_user_tasks_repo__WEBPACK_IMPORTED_MODULE_5__["userTasksRepo"].delete(userTasks.map(function (t) { return t.id; }))];
                    case 3:
                        // Already present in weekplanner. It's time to delete those that matched us.
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskList.prototype.render = function () {
        var _this = this;
        var intl = this.context.intl;
        var learningTasks = this.props.learningTasks;
        var userTasks = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["arrayToMap"])(this.state.userTasks, function (ut) { return ut.task && ut.task.length > 0 ?
            ut.task.map(function (t) { return t.id; })[0] : // course-builder tasks looked up by id
            ut.siteVisionPageId ? ut.siteVisionPageId : // non-course-builder tasks
                ut.url; });
        var confirmations = this.state.confirmations;
        var weekPlannerWeek = moment__WEBPACK_IMPORTED_MODULE_3___default()(this.state.weekDate).week();
        var currentWeek = moment__WEBPACK_IMPORTED_MODULE_3___default()().week();
        var forWeekString = weekPlannerWeek === currentWeek ? "" :
            weekPlannerWeek === currentWeek + 1 ? intl.formatMessage({ id: "taskList.nextWeekTask", defaultMessage: "för nästa vecka (v{week})" }, { week: weekPlannerWeek }) :
                weekPlannerWeek === currentWeek - 1 ? intl.formatMessage({ id: "taskList.lastWeekTask", defaultMessage: "för förra veckan (v{week})" }, { week: weekPlannerWeek }) :
                    intl.formatMessage({ id: "taskList.currentWeekTask", defaultMessage: "för vecka {week}" }, { week: weekPlannerWeek });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, learningTasks.map(function (learningTask, idx) {
            var taskLookupId = learningTask.id;
            var userTask = userTasks[taskLookupId] || { $meta: 'deleted' }; // No exist = $meta: 'deleted'
            var isWorking = userTask.$meta === 'adding' || userTask.$meta === 'deleting';
            var selected = userTask.$meta !== 'deleted' && userTask.$meta !== 'deleting';
            var describedAction = selected ?
                intl.formatMessage({ id: "taskList.removeTaskFromWeeklyPlanning", defaultMessage: "Ta bort uppgiften från egen veckoplanering {week}" }, { week: forWeekString }) :
                intl.formatMessage({ id: "taskList.addTaskToWeeklyPlanning", defaultMessage: "Lägg till uppgiften i egen veckoplanering {week}" }, { week: forWeekString });
            var confirmationVisible = confirmations.some(function (tid) { return taskLookupId === tid; });
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: idx },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_checkbox__WEBPACK_IMPORTED_MODULE_9__["UIAddbox"], { state: selected ? 'checked' : '', onChange: function () { return !isWorking && weekPlannerWeek === currentWeek ?
                        _this.toggleTask(learningTask) :
                        confirmationVisible ?
                            _this.setState({ confirmations: confirmations.filter(function (tid) { return tid !== taskLookupId; }) }) :
                            _this.setState({ confirmations: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](confirmations).concat(taskLookupId) }); }, label: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { title: describedAction, href: learningTask.url }, learningTask.name) }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_confirmation__WEBPACK_IMPORTED_MODULE_7__["Confirmation"], { visible: confirmationVisible, text: describedAction, onConfirm: function () {
                        _this.toggleTask(learningTask);
                        _this.setState({ confirmations: confirmations.filter(function (tid) { return tid !== taskLookupId; }) });
                    }, onCancel: function () {
                        _this.setState({ confirmations: confirmations.filter(function (tid) { return tid !== taskLookupId; }) });
                    } }));
        }));
    };
    TaskList.contextType = _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_8__["LanguageContext"];
    return TaskList;
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ListCourses, _super);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Sparar..."], ["Sparar..."]))));
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showInfo"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Sparar..."], ["Sparar..."]))));
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
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null);
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
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_5__["generateQueryString"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, query, { courseId: course.id })) }, course.name)),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "small" }, course.description)));
                    })))));
    };
    return ListCourses;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2;


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

/***/ "./src/components/utility-components/dialogs.tsx":
/*!*******************************************************!*\
  !*** ./src/components/utility-components/dialogs.tsx ***!
  \*******************************************************/
/*! exports provided: Dialogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialogs", function() { return Dialogs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _course_builder_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../course-builder/sub-components/remove-item */ "./src/components/course-builder/sub-components/remove-item.tsx");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





var Dialogs = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Dialogs, _super);
    function Dialogs(props) {
        return _super.call(this, props) || this;
    }
    Dialogs.prototype.componentDidUpdate = function (prevProps) {
        if (this.lastDiv !== null && prevProps.dialogs.length > this.props.dialogs.length) {
            // A dialog was closed. Now focus the last dialog:
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(this.lastDiv)).find(':input').first().focus();
        }
    };
    Dialogs.prototype.render = function () {
        var _this = this;
        this.lastDiv = null;
        var _a = this.props, dialogs = _a.dialogs, popDialog = _a.popDialog;
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('body').attr('aria-disabled', dialogs.length > 0);
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('body').css('overflow', dialogs.length > 0 ? 'hidden' : 'auto');
        return dialogs.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, dialogs.map(function (dialog, idx) {
            var div;
            function onKeyPress(ev) {
                if (ev.which === 13 && (!ev.target || ev.target.tagName !== 'TEXTAREA')) {
                    jquery__WEBPACK_IMPORTED_MODULE_4___default()(Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(div)).find('.btn-default').click();
                }
                ev.stopPropagation();
            }
            function onKeyDown(ev) {
                if (ev.which === 27) { // Escape
                    popDialog();
                    ev.stopPropagation();
                    return;
                }
                if (ev.which === 83 && (ev.ctrlKey || ev.metaKey)) { // CTRL-S
                    var domNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(div);
                    ev.preventDefault();
                    var defaultButton = jquery__WEBPACK_IMPORTED_MODULE_4___default()(domNode).find('.btn-default');
                    defaultButton.click();
                    ev.stopPropagation();
                }
            }
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: idx },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "darken" }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "modal-page-wrap" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "modal-page", ref: function (elem) {
                            div = elem;
                            if (idx === dialogs.length - 1)
                                _this.lastDiv = elem;
                        }, tabIndex: 0, "aria-disabled": idx < dialogs.length - 1, onKeyPress: onKeyPress, onKeyDown: onKeyDown },
                        dialog,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_remove_item__WEBPACK_IMPORTED_MODULE_2__["RemoveItem"], { onClick: popDialog }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "stopFloats" }))));
        }));
    };
    return Dialogs;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



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

/***/ "./src/components/utility-components/form-field-textarea.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/utility-components/form-field-textarea.tsx ***!
  \*******************************************************************/
/*! exports provided: TextAreaFormField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaFormField", function() { return TextAreaFormField; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-field */ "./src/components/utility-components/form-field.tsx");



var TextAreaFormField = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextAreaFormField, _super);
    function TextAreaFormField(props) {
        return _super.call(this, props) || this;
    }
    TextAreaFormField.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_form_field__WEBPACK_IMPORTED_MODULE_2__["FormField"], { label: this.props.label, id: this.props.id },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { autoFocus: this.props.autoFocus, id: this.props.id, cols: 35, rows: this.props.rows || 5, value: this.props.value, onChange: function (ev) { return _this.props.onChange(ev.target.value); }, placeholder: this.props.placeholder })),
                !!this.props.children && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem" }, this.props.children))));
    };
    return TextAreaFormField;
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

/***/ "./src/components/weekplanner/add-custom-goal.tsx":
/*!********************************************************!*\
  !*** ./src/components/weekplanner/add-custom-goal.tsx ***!
  \********************************************************/
/*! exports provided: AddCustomGoal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomGoal", function() { return AddCustomGoal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");




var AddCustomGoal = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddCustomGoal, _super);
    function AddCustomGoal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            learningGoal: props.learningGoal || ''
        };
        return _this;
    }
    AddCustomGoal.prototype.render = function () {
        var _this = this;
        var learningGoal = this.state.learningGoal;
        var onSave = this.props.onSave;
        var isGymnasiumStudent = ('' + _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["env"].currentUser.schoolType).toLowerCase() === "gymnasium";
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, isGymnasiumStudent ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], { id: "weekplanner.addLearningGoalGymnasiumSchoolTitle", defaultMessage: "L\u00E4gg till rubrik" }) :
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], { id: "weekplanner.addLearningGoalPrimarySchoolTitle", defaultMessage: "L\u00E4gg till eget l\u00E4randem\u00E5l" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" }, isGymnasiumStudent ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], { id: "weekplanner.addLearningGoalGymnasiumSchool", defaultMessage: "Rubrik" }) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], { id: "weekplanner.addLearningGoalPrimarySchool", defaultMessage: "M\u00E5l" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", tabIndex: 1, size: 50, autoFocus: true, value: learningGoal, onChange: function (e) { return _this.setState({ learningGoal: e.target.value }); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top spaced" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { tabIndex: 1, className: "btn btn-large btn-default", onClick: function () { return onSave(learningGoal); } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], { id: "common.save", defaultMessage: "save" }))));
    };
    return AddCustomGoal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/weekplanner/add-custom-task.tsx":
/*!********************************************************!*\
  !*** ./src/components/weekplanner/add-custom-task.tsx ***!
  \********************************************************/
/*! exports provided: AddCustomTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomTask", function() { return AddCustomTask; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility-components/form-field-text-input */ "./src/components/utility-components/form-field-text-input.tsx");
/* harmony import */ var _utility_components_form_field_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility-components/form-field-textarea */ "./src/components/utility-components/form-field-textarea.tsx");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");







var AddCustomTask = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddCustomTask, _super);
    function AddCustomTask(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            name: '',
            description: '',
            url: ''
        };
        return _this;
    }
    AddCustomTask.prototype.render = function () {
        var _this = this;
        var _a = this.state, name = _a.name, description = _a.description, url = _a.url;
        var _b = this.props, isTask = _b.isTask, onSave = _b.onSave;
        var intl = this.context.intl;
        var isGymnasiumStudent = ('' + _globals_KED_env__WEBPACK_IMPORTED_MODULE_6__["env"].currentUser.schoolType).toLowerCase() === "gymnasium";
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, isGymnasiumStudent ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], { id: "customTask.addWorkGoalGymnasiumSchoolTitle", defaultMessage: "L\u00E4gg till uppgift" }) :
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], { id: "customTask.addWorkGoalPrimarySchoolTitle", defaultMessage: "L\u00E4gg till eget arbetsm\u00E5l" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { label: intl.formatMessage({ id: 'common.nameLabel', defaultMessage: 'Namn' }), id: "AddCustomTask:name", placeholder: intl.formatMessage({ id: 'customTask.enterNamePlhd', defaultMessage: 'Ange namn...' }), value: name, autoFocus: true, onChange: function (name) { return _this.setState({ name: name }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_textarea__WEBPACK_IMPORTED_MODULE_3__["TextAreaFormField"], { rows: 7, label: intl.formatMessage({ id: 'common.descriptionLabel', defaultMessage: 'Beskrivning' }), id: "AddCustomTask:description", placeholder: intl.formatMessage({ id: 'common.addDescriptionPlhd', defaultMessage: "Lägg till en beskrivning..." }), value: description, onChange: function (description) { return _this.setState({ description: description }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { label: intl.formatMessage({ id: 'common.linkLabel', defaultMessage: 'Länk' }), id: "AddCustomTask:url", placeholder: "http://www...", value: url, onChange: function (url) { return _this.setState({ url: url }); } })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { tabIndex: 1, className: "btn btn-large btn-default", onClick: function () { return onSave(name, description, url); } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], { id: "common.save", defaultMessage: "Spara" }))));
    };
    AddCustomTask.contextType = _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_4__["LanguageContext"];
    return AddCustomTask;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/weekplanner/add-or-edit-sub-task.tsx":
/*!*************************************************************!*\
  !*** ./src/components/weekplanner/add-or-edit-sub-task.tsx ***!
  \*************************************************************/
/*! exports provided: AddOrEditSubTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrEditSubTask", function() { return AddOrEditSubTask; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility-components/form-field-text-input */ "./src/components/utility-components/form-field-text-input.tsx");
/* harmony import */ var _utility_components_form_field_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility-components/form-field-textarea */ "./src/components/utility-components/form-field-textarea.tsx");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");







var AddOrEditSubTask = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddOrEditSubTask, _super);
    function AddOrEditSubTask(props) {
        var _this = _super.call(this, props) || this;
        if (props.mode === 'edit') {
            var subTask = props.subTask;
            _this.state = {
                name: subTask.name || '',
                description: subTask.description || '',
                url: subTask.url || ''
            };
        }
        else {
            _this.state = {
                name: '',
                description: '',
                url: ''
            };
        }
        return _this;
    }
    AddOrEditSubTask.prototype.save = function () {
        // Update repo:
        var props = this.props;
        var userTask = props.userTask, closeDialog = props.closeDialog, userTasksRepo = props.userTasksRepo;
        var _a = this.state, name = _a.name, description = _a.description, url = _a.url;
        if (props.mode === 'edit') {
            // Edit existing:
            userTasksRepo.update([userTask], function (ut) {
                var subTasks = ut.subTasks;
                if (subTasks) {
                    ut.subTasks = subTasks.map(function (st) {
                        return st.id === props.subTask.id ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, st, { name: name, description: description, url: url }) : tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, st);
                    });
                }
            });
        }
        else {
            // Create new task
            var newSubTask_1 = {
                id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_4__["createUUID"])(),
                name: name,
                description: description,
                url: url
            };
            // Update repo:
            userTasksRepo.update([userTask], function (ut) {
                if (!ut.subTasks) {
                    ut.subTasks = [];
                }
                ut.subTasks = ut.subTasks.concat(newSubTask_1);
            });
        }
        // Close dialog
        closeDialog();
    };
    AddOrEditSubTask.prototype.delete = function () {
        // Update repo:
        var props = this.props;
        if (props.mode !== 'edit') {
            throw new Error("Can only delete in edit mode");
        }
        props.userTasksRepo.update([props.userTask], function (ut) {
            if (ut.subTasks) {
                ut.subTasks = ut.subTasks.filter(function (t) { return t.id !== props.subTask.id; });
            }
        });
        // Close dialog:
        props.closeDialog();
    };
    AddOrEditSubTask.prototype.render = function () {
        var _this = this;
        var _a = this.state, name = _a.name, description = _a.description, url = _a.url;
        var props = this.props;
        var isEditMode = props.mode === 'edit';
        var intl = this.context.intl;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet sv-skip-spacer" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, isEditMode ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], { id: "addeditsubtask.editSubtask", defaultMessage: 'Redigera underuppgift' }) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], { id: "addeditsubtask.addSubtask", defaultMessage: 'L\u00E4gg till underuppgift' })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { autoFocus: true, label: intl.formatMessage({ id: 'addeditsubtask.nameLabel', defaultMessage: 'Underuppgiftens namn' }), id: "AddUserSubTask:name", placeholder: "", value: this.state.name, onChange: function (name) { return _this.setState({ name: name }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_textarea__WEBPACK_IMPORTED_MODULE_3__["TextAreaFormField"], { label: intl.formatMessage({ id: 'common.descriptionLabel', defaultMessage: 'Beskrivning' }), id: "AddUserSubTask:description", rows: 7, placeholder: "", value: this.state.description, onChange: function (description) { return _this.setState({ description: description }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { label: intl.formatMessage({ id: 'common.linkLabel', defaultMessage: 'Länk' }), id: "AddUserSubTask:url", placeholder: "", value: this.state.url, onChange: function (url) { return _this.setState({ url: url }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "sv-html-portlet sv-portlet" },
                props.mode === 'edit' && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-warning btn-large pull-right", onClick: function (ev) { return _this.delete(); } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], { id: "addeditsubtask.deleteSubtask", defaultMessage: "Ta bort underuppgift" })),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { tabIndex: 1, className: "btn btn-large btn-default", onClick: function () { return _this.save(); } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], { id: "common.save", defaultMessage: "Spara" }))));
    };
    AddOrEditSubTask.contextType = _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_6__["LanguageContext"];
    return AddOrEditSubTask;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/weekplanner/edit-user-task.tsx":
/*!*******************************************************!*\
  !*** ./src/components/weekplanner/edit-user-task.tsx ***!
  \*******************************************************/
/*! exports provided: EditUserTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserTask", function() { return EditUserTask; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_task_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-task-type */ "./src/components/weekplanner/get-task-type.ts");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");
/* harmony import */ var _globals_moment_sv_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../globals/moment-sv-locale */ "./src/globals/moment-sv-locale.ts");
/* harmony import */ var _utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility-components/form-field-text-input */ "./src/components/utility-components/form-field-text-input.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utility_components_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility-components/form-field */ "./src/components/utility-components/form-field.tsx");
/* harmony import */ var _add_or_edit_sub_task__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-or-edit-sub-task */ "./src/components/weekplanner/add-or-edit-sub-task.tsx");
/* harmony import */ var _utility_components_form_field_textarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utility-components/form-field-textarea */ "./src/components/utility-components/form-field-textarea.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");












var EditUserTask = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditUserTask, _super);
    function EditUserTask(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            userTask: props.userTask,
            name: props.userTask.name,
            description: props.userTask.description,
            url: props.userTask.url,
            deadline: props.userTask.deadline,
            subTasks: props.userTask.subTasks
        };
        _this.onUserTasksChanged = _this.onUserTasksChanged.bind(_this);
        return _this;
    }
    EditUserTask.prototype.componentDidMount = function () {
        this.props.userTasksRepo.subscribe(this.onUserTasksChanged);
    };
    EditUserTask.prototype.onUserTasksChanged = function (userTasks) {
        var _this = this;
        var myUserTask = userTasks.find(function (ut) { return ut.id === _this.props.userTask.id; });
        if (!myUserTask) {
            this.props.closeDialog();
            return;
        }
        this.setState({
            userTask: myUserTask,
            subTasks: myUserTask.subTasks
        });
    };
    EditUserTask.prototype.componentWillUnmount = function () {
        this.props.userTasksRepo.unsubscribe(this.onUserTasksChanged);
    };
    EditUserTask.prototype.isModified = function () {
        // Don't count subtask changes! They live their own life and is maintained
        // in add-or-edit-sub-task.tsx. Reason: User would expect added /edited subtasks
        // to be persisted right away. May click away this dialog.
        // Also reason: Can invoke that dialog by itself from other components. From WeekPlanner
        // when clicking the subtask for example!
        var _a = this.state, deadline = _a.deadline, description = _a.description, name = _a.name, url = _a.url, userTask = _a.userTask;
        return (deadline !== userTask.deadline ||
            description !== userTask.description ||
            name !== userTask.name ||
            url !== userTask.url);
    };
    EditUserTask.prototype.addSubTask = function () {
        this.props.openDialog(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_add_or_edit_sub_task__WEBPACK_IMPORTED_MODULE_8__["AddOrEditSubTask"], { mode: "add", userTask: this.state.userTask, closeDialog: this.props.closeDialog, userTasksRepo: this.props.userTasksRepo }));
    };
    EditUserTask.prototype.editSubTask = function (subTask) {
        this.props.openDialog(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_add_or_edit_sub_task__WEBPACK_IMPORTED_MODULE_8__["AddOrEditSubTask"], { mode: "edit", subTask: subTask, userTask: this.state.userTask, closeDialog: this.props.closeDialog, userTasksRepo: this.props.userTasksRepo }));
    };
    EditUserTask.prototype.render = function () {
        var _this = this;
        var _a = this.state, name = _a.name, description = _a.description, url = _a.url, deadline = _a.deadline, subTasks = _a.subTasks, showCalendar = _a.showCalendar, userTask = _a.userTask;
        var id = userTask.id, courseName = userTask.courseName;
        var _b = this.props, onUpdate = _b.onUpdate, onDelete = _b.onDelete;
        var isModified = this.isModified();
        var taskType = Object(_get_task_type__WEBPACK_IMPORTED_MODULE_2__["getTaskType"])(userTask);
        var isCustomTask = taskType === 'customTask';
        var expired = moment__WEBPACK_IMPORTED_MODULE_6___default()(userTask.deadline) < moment__WEBPACK_IMPORTED_MODULE_6___default()();
        var intl = this.context.intl;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "editTaskDialog sv-html-portlet sv-portlet sv-skip-spacer" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, isCustomTask ?
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], { id: "task.editWorkGoals", defaultMessage: 'Redigera arbetsm\u00E5l' }) :
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], { id: "task.editTask", defaultMessage: 'Redigera uppgift' })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_5__["TextInput"], { autoFocus: true, label: isCustomTask ? intl.formatMessage({ id: 'task.targetNameLabel', defaultMessage: 'Arbetsmålets namn' }) : intl.formatMessage({ id: 'task.taskNameLabel', defaultMessage: 'Uppgiftens namn' }), id: "EditUserTask:name", placeholder: isCustomTask ? intl.formatMessage({ id: 'task.whatShouldYouDoPlhd', defaultMessage: 'Vad ska du göra?' }) : intl.formatMessage({ id: 'task.enterTaskNamePlhd', defaultMessage: 'Ange uppgiftens namn...' }), value: name, onChange: function (name) { return _this.setState({ name: name }); } }),
            isCustomTask && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_textarea__WEBPACK_IMPORTED_MODULE_9__["TextAreaFormField"], { rows: 5, label: intl.formatMessage({ id: 'common.descriptionLabel', defaultMessage: 'Beskrivning' }), id: "EditUserTask:description", placeholder: intl.formatMessage({ id: 'common.addDescriptionPlhd', defaultMessage: 'Lägg till en beskrivning...' }), value: description, onChange: function (description) { return _this.setState({ description: description }); } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field_text_input__WEBPACK_IMPORTED_MODULE_5__["TextInput"], { label: intl.formatMessage({ id: 'common.linkLabel', defaultMessage: "Länk" }), id: "EdutUserTask:url", placeholder: "http(s)://...", value: url, onChange: function (url) { return _this.setState({ url: url }); } })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field__WEBPACK_IMPORTED_MODULE_7__["FormField"], { label: intl.formatMessage({ id: 'task.setDeadline', defaultMessage: 'Ange deadline' }) }, (deadline || showCalendar) ?
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"], { ref: function (elem) { return _this.datePicker = elem; }, id: "EditUserTask:deadline", nextMonthButtonLabel: "", previousMonthButtonLabel: "", showWeekNumbers: true, selected: deadline && moment__WEBPACK_IMPORTED_MODULE_6___default()(deadline).toDate(), autoFocus: showCalendar, dateFormat: "yyyy-MM-dd", className: expired ? "expired" : undefined, locale: intl.locale, popperPlacement: isCustomTask ? "top-start" : "bottom-start", onBlur: function () { return _this.setState({ showCalendar: false }); }, onChange: function (value) {
                                _this.setState({
                                    deadline: value && moment__WEBPACK_IMPORTED_MODULE_6___default()(value).format("YYYY-MM-DD"),
                                    showCalendar: false
                                });
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "deleteDate", href: "#", title: intl.formatMessage({ id: 'task.removeDeadline', defaultMessage: 'Ta bort deadline' }), onClick: function (ev) {
                                ev.preventDefault();
                                _this.setState({ deadline: null, showCalendar: false });
                            } }))) :
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "top", ref: function () { _this.datePicker = null; } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "btn", onClick: function (ev) {
                            if (_this.datePicker) {
                                _this.datePicker.setOpen(true);
                            }
                            _this.setState({
                                showCalendar: true
                            });
                        } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-calendar-alt", "aria-hidden": "true" }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], { id: "task.setDeadlineLabel", defaultMessage: "Ange deadline..." })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field__WEBPACK_IMPORTED_MODULE_7__["FormField"], { label: intl.formatMessage({ id: 'task.subTasks', defaultMessage: 'Underuppgifter' }) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "learningGoalTasks" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, subTasks && subTasks.map(function (subTask) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: subTask.id, className: "align-horizontal" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { onClick: function () { return _this.editSubTask(subTask); }, href: "#" }, subTask.name))); }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { id: "EditUserTask:addSubTask", className: "btn", onClick: function () { return _this.addSubTask(); } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-plus", "aria-hidden": "true" }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], { id: "task.addSubtask", defaultMessage: "L\u00E4gg till underuppgift" }))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "divider large" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalButton top" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { tabIndex: 1, className: "btn btn-default", onClick: function () {
                            isModified ? onUpdate(function (userTask) {
                                userTask.name = name;
                                userTask.description = description;
                                userTask.url = url;
                                userTask.deadline = deadline;
                            }) : _this.props.closeDialog();
                        } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], { id: "common.save", defaultMessage: "Spara" }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalButton top" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { tabIndex: 1, className: "btn", onClick: function () {
                            _this.props.closeDialog();
                        } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], { id: "common.cancel", defaultMessage: "Avbryt" }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "confirm top pull-right" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { tabIndex: 1, className: "btn btn-warning", onClick: function () {
                            onDelete(id);
                        } }, isCustomTask ?
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], { id: "task.removeWorkGoals", defaultMessage: "Ta bort arbetsm\u00E5l" }) :
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], { id: "task.removeThisTask", defaultMessage: "Ta bort den h\u00E4r uppgiften" })))));
    };
    EditUserTask.contextType = _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_11__["LanguageContext"];
    return EditUserTask;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/weekplanner/get-task-type.ts":
/*!*****************************************************!*\
  !*** ./src/components/weekplanner/get-task-type.ts ***!
  \*****************************************************/
/*! exports provided: getTaskType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskType", function() { return getTaskType; });
function getTaskType(userTask) {
    return userTask.course && userTask.task && userTask.course.length > 0 && userTask.task.length > 0 ?
        'courseBuilderTask' :
        userTask.siteVisionPageId ?
            'siteVisionTask' :
            userTask.courseInfo ?
                'subjectPlannerTask' :
                'customTask';
}


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




/***/ }),

/***/ "./src/components/weekplanner/refiner.ts":
/*!***********************************************!*\
  !*** ./src/components/weekplanner/refiner.ts ***!
  \***********************************************/
/*! exports provided: refine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refine", function() { return refine; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");


function refine(tasks) {
    var e_1, _a, e_2, _b;
    var result = [];
    var mapper = {};
    var tasksPerCourse = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["arrayToLookup"])(tasks, function (t) { return t.courseName || ''; });
    try {
        for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(tasksPerCourse).sort().filter(function (x) { return x; }).concat(tasksPerCourse[''] ?
            [''] : [])), _d = _c.next(); !_d.done; _d = _c.next()) {
            var courseName = _d.value;
            var courseTasks = tasksPerCourse[courseName] || tasksPerCourse[''];
            var tasksPerLearningGoal = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["arrayToLookup"])(courseTasks, function (t) { return t.learningGoal; });
            var resultLearningGoals = [];
            try {
                for (var _e = (e_2 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(tasksPerLearningGoal))), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var learningGoal = _f.value;
                    var lgTasks = tasksPerLearningGoal[learningGoal].sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["compareProp"])("dateTime"));
                    var learningGoalTask = lgTasks
                        .filter(function (t) { return t.name == null; }) // If name is undefined or null, this represents a learning goal
                    [0];
                    var url = learningGoalTask && learningGoalTask.url;
                    resultLearningGoals.push({
                        name: learningGoal,
                        allTasks: lgTasks,
                        url: url,
                        step: lgTasks.map(function (t) { return t.step; }).filter(function (step) { return step; })[0],
                        tasks: lgTasks.filter(function (t) { return t.name; })
                    });
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
            result.push({
                courseName: courseName,
                learningGoals: resultLearningGoals
            });
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}


/***/ }),

/***/ "./src/components/weekplanner/user-tasks-box.tsx":
/*!*******************************************************!*\
  !*** ./src/components/weekplanner/user-tasks-box.tsx ***!
  \*******************************************************/
/*! exports provided: UserTasksBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTasksBox", function() { return UserTasksBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var _calendar_course_name_to_css_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../calendar/course-name-to-css-class */ "./src/components/calendar/course-name-to-css-class.ts");
/* harmony import */ var _get_task_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-task-type */ "./src/components/weekplanner/get-task-type.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../features */ "./src/features/index.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");












;
var UserTasksBox = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserTasksBox, _super);
    function UserTasksBox(props) {
        return _super.call(this, props) || this;
    }
    UserTasksBox.prototype.render = function () {
        var _this = this;
        var _a = this.props, courseName = _a.courseName, learningGoals = _a.learningGoals, progressData = _a.progressData, displayProgress = _a.displayProgress;
        var isOpen = !!this.props.openCourses[courseName];
        var features = new _features__WEBPACK_IMPORTED_MODULE_7__["Features"]();
        var intl = this.context.intl;
        var isGymnasiumStudent = ('' + _globals_KED_env__WEBPACK_IMPORTED_MODULE_11__["env"].currentUser.schoolType).toLowerCase() === "gymnasium";
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__["OpenCloseBox"], { title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, courseName || (isGymnasiumStudent ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], { id: "userTasks.gymnasiumSchoolGoals", defaultMessage: "\u00D6vriga uppgifter" }) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], { id: "userTasks.primarySchoolGoals", defaultMessage: "Egna l\u00E4randem\u00E5l" }))), headerOpen: isOpen, className: courseName && Object(_calendar_course_name_to_css_class__WEBPACK_IMPORTED_MODULE_4__["courseNameToCssClass"])('wp-course-', courseName), onOpenClose: function (becameOpen) { return _this.props.setIsOpen(courseName, becameOpen); }, displayProgress: displayProgress, progressData: progressData }, learningGoals.map(function (lg) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: lg.name, className: "learningGoalContainer" },
                lg.step && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "stepIndicator" }, lg.step),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "learningGoalText horizontalItem top" }, lg.name),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem" },
                        "\u00A0",
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "trash", href: "#", title: intl.formatMessage({ id: 'userTasks.deleteLearningGoal', defaultMessage: 'Ta bort lärandemålet och dess uppgifter' }), onClick: function (ev) {
                                ev.preventDefault();
                                _this.props.removeLearningGoal(lg);
                            } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-trash-alt" })))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "learningGoalTasks" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, lg.tasks.map(function (userTask) {
                        var isWorking = userTask.$meta === 'adding' || userTask.$meta === 'deleting' || userTask.$meta === 'updating';
                        var taskType = Object(_get_task_type__WEBPACK_IMPORTED_MODULE_5__["getTaskType"])(userTask);
                        var expired = moment__WEBPACK_IMPORTED_MODULE_6___default()(userTask.deadline).startOf('day') < moment__WEBPACK_IMPORTED_MODULE_6___default()().startOf('day');
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: userTask.id, style: isWorking ? { opacity: 0.5 } : {} },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "checkBox" + (userTask.done ? " checked" : ""), onClick: function (ev) { return !isWorking && _this.props.setTaskDone(userTask, !userTask.done); } })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                    taskType === 'courseBuilderTask' ?
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: getTaskUrl(userTask, _this.props.viewCourseUrl) }, userTask.name) :
                                        taskType === 'subjectPlannerTask' ?
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: getSubjectPlannerTaskUrl(userTask) }, userTask.name) :
                                            taskType === 'siteVisionTask' ?
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: userTask.url }, userTask.name) :
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: !userTask.url ? "link-less" : "", href: userTask.url || undefined, target: (userTask.url + '').toLowerCase().startsWith(location.host.toLowerCase()) ?
                                                        "_self" :
                                                        "_blank" }, userTask.name),
                                    userTask.deadline && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "dateSet" + (expired ? ' expired' : '') },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { title: moment__WEBPACK_IMPORTED_MODULE_6___default()(userTask.deadline).format("YYYY-MM-DD"), className: "fas fa-calendar-alt", "aria-hidden": "true", onClick: function () { } }))),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top taskEdit" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "editItem", onClick: function () { return _this.props.editTask(userTask); } }))),
                            userTask.subTasks && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "subtasks" }, userTask.subTasks.map(function (subTask) {
                                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: subTask.id },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "checkBox" + (subTask.done ? " checked" : ""), onClick: function (ev) {
                                                return !isWorking &&
                                                    _this.props.setSubTaskDone(userTask, subTask, !subTask.done);
                                            } })),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: subTask.url || undefined, target: (userTask.url + '').toLowerCase().startsWith(location.host.toLowerCase()) ?
                                                "_self" :
                                                "_blank", className: subTask.url ?
                                                undefined :
                                                'link-less' }, subTask.name)),
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top taskEdit" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "editItem", onClick: function () { return _this.props.editSubTask(userTask, subTask); } })));
                            })));
                    }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "learningGoalTools" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn addOwnGoal", onClick: function () { return _this.props.addOwnTask(_this.props.courseName, lg.name); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-plus", "aria-hidden": "true" }),
                        " ",
                        isGymnasiumStudent ?
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], { id: "weekplanner.learningGoalGymnasium", defaultMessage: "Uppgift" }) :
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], { id: 'userTasks.addLearningGoal', defaultMessage: 'Eget arbetsm\u00E5l' }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null));
        }));
    };
    UserTasksBox.contextType = _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_10__["LanguageContext"];
    return UserTasksBox;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

function getTaskUrl(userTask, viewCourseUrl) {
    if (userTask.course && userTask.course.length > 0 && userTask.task && userTask.task.length > 0) {
        var courseUrl = Object(_access_control__WEBPACK_IMPORTED_MODULE_3__["preserveImpersonationQuery"])(viewCourseUrl, { courseId: userTask.course[0].id });
        return courseUrl + "#/task/" + userTask.task[0].id;
    }
    return userTask.url;
}
function getSubjectPlannerTaskUrl(userTask) {
    if (userTask.courseInfo && userTask.task && userTask.task.length > 0) {
        var _a = userTask.courseInfo, school = _a.school, course = _a.course, tab = _a.tab;
        var courseUrl = Object(_access_control__WEBPACK_IMPORTED_MODULE_3__["preserveImpersonationQuery"])(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_8__["default"].KED_SUBJECT_PLANNER_URL, {});
        return courseUrl + "#/" + school + "/courses/" + course + "/tabs/" + tab + "/tasks/" + userTask.task[0].id;
    }
    return userTask.url;
}


/***/ }),

/***/ "./src/components/weekplanner/weekplanner-persisted-state.ts":
/*!*******************************************************************!*\
  !*** ./src/components/weekplanner/weekplanner-persisted-state.ts ***!
  \*******************************************************************/
/*! exports provided: WeekPlannerPersistedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekPlannerPersistedState", function() { return WeekPlannerPersistedState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_moment_sv_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals/moment-sv-locale */ "./src/globals/moment-sv-locale.ts");



var WeekPlannerPersistedState = /** @class */ (function () {
    function WeekPlannerPersistedState(userOrCopy) {
        if (typeof userOrCopy === 'string') {
            this.user = userOrCopy;
            this.lastWrite = Date.now();
            this.weekDate = Object(_globals_moment_sv_locale__WEBPACK_IMPORTED_MODULE_2__["localMoment"])().startOf('week').valueOf();
            this.openCourses = {};
        }
        else {
            Object.assign(this, userOrCopy);
        }
    }
    WeekPlannerPersistedState.load = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cookie, storedData, state;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                cookie = localStorage.getItem('WeekPlannerPersistedState2');
                storedData = cookie && JSON.parse(cookie);
                state = new WeekPlannerPersistedState(user);
                if (storedData)
                    Object.assign(state, storedData);
                return [2 /*return*/, state.user === user && !state.isExpired(moment__WEBPACK_IMPORTED_MODULE_1___default()()) ?
                        state : new WeekPlannerPersistedState(user)];
            });
        });
    };
    WeekPlannerPersistedState.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var json;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.lastWrite = Date.now();
                json = JSON.stringify(this);
                localStorage.setItem('WeekPlannerPersistedState2', json);
                return [2 /*return*/];
            });
        });
    };
    WeekPlannerPersistedState.prototype.isExpired = function (asOf) {
        return moment__WEBPACK_IMPORTED_MODULE_1___default()(this.lastWrite)
            .isBefore(asOf.add(0 - WeekPlannerPersistedState.EXPIRATION_HOURS, 'hours'));
    };
    WeekPlannerPersistedState.EXPIRATION_HOURS = 12;
    WeekPlannerPersistedState.VERSION = 2;
    return WeekPlannerPersistedState;
}());



/***/ }),

/***/ "./src/components/weekplanner/weekplanner.tsx":
/*!****************************************************!*\
  !*** ./src/components/weekplanner/weekplanner.tsx ***!
  \****************************************************/
/*! exports provided: WeekPlanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekPlanner", function() { return WeekPlanner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_tasks_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-tasks-box */ "./src/components/weekplanner/user-tasks-box.tsx");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _refiner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./refiner */ "./src/components/weekplanner/refiner.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utility_components_dialogs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utility-components/dialogs */ "./src/components/utility-components/dialogs.tsx");
/* harmony import */ var _add_custom_goal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-custom-goal */ "./src/components/weekplanner/add-custom-goal.tsx");
/* harmony import */ var _add_custom_task__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-custom-task */ "./src/components/weekplanner/add-custom-task.tsx");
/* harmony import */ var _edit_user_task__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-user-task */ "./src/components/weekplanner/edit-user-task.tsx");
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");
/* harmony import */ var _utils_pending_job__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/pending-job */ "./src/utils/pending-job.ts");
/* harmony import */ var _add_or_edit_sub_task__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-or-edit-sub-task */ "./src/components/weekplanner/add-or-edit-sub-task.tsx");
/* harmony import */ var _utils_weekutil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/weekutil */ "./src/utils/weekutil.ts");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var _charts_progress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../charts/progress */ "./src/components/charts/progress.tsx");
/* harmony import */ var _charts_charts_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../charts/charts-utils */ "./src/components/charts/charts-utils.ts");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../features */ "./src/features/index.ts");






















var MAX_STRATEGY_LENGTH = 16384;
var MAX_ASSESSMENT_LENGTH = 16384;
var WeekPlanner = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WeekPlanner, _super);
    function WeekPlanner(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            userTasks: [],
            weekDate: Date.now(),
            openCourses: {},
            dialogs: [],
            saving: false,
            weekTextsUT: null,
            isLoading: true,
            isCopyingTasks: false
        };
        _this.onChange = _this.onChange.bind(_this);
        _this.weekTextsSavingJob = new _utils_pending_job__WEBPACK_IMPORTED_MODULE_14__["PendingJob"](function () { return _this.saveWeekTexts(); });
        return _this;
    }
    WeekPlanner.prototype.componentDidMount = function () {
        this.props.env.userTasksRepo.subscribe(this.onChange);
    };
    WeekPlanner.prototype.componentWillUnmount = function () {
        this.props.env.userTasksRepo.unsubscribe(this.onChange);
        this.weekTextsSavingJob.stop();
    };
    WeekPlanner.prototype.onChange = function (userTasks, persisted, weekTextsUT) {
        var newState = {
            userTasks: userTasks,
            weekDate: persisted.weekDate,
            openCourses: persisted.openCourses,
            weekTextsUT: weekTextsUT,
            isLoading: false
        };
        if (!this.state.weekTextsUT || (weekTextsUT.dateTime !== this.state.weekTextsUT.dateTime)) {
            // Changing week. Reset to new week's values
            newState.strategy = weekTextsUT.weekTexts.strategy;
            newState.assessment = weekTextsUT.weekTexts.assessment;
        }
        this.setState(newState); // React's use of Pick instead of Partial makes things complex here.
    };
    WeekPlanner.prototype.isWeekTextsEdited = function () {
        var _a = this.state, strategy = _a.strategy, assessment = _a.assessment, weekTextsUT = _a.weekTextsUT;
        return !!weekTextsUT && (strategy !== weekTextsUT.weekTexts.strategy || assessment !== weekTextsUT.weekTexts.assessment);
    };
    WeekPlanner.prototype.saveWeekTexts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, strategy, assessment, weekTextsUT;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("Saving texts...");
                        _a = this.state, strategy = _a.strategy, assessment = _a.assessment, weekTextsUT = _a.weekTextsUT;
                        if (!this.isWeekTextsEdited()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.props.env.userTasksRepo.upsert(weekTextsUT, function (ut) {
                                ut.weekTexts = { strategy: strategy, assessment: assessment };
                            })];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    WeekPlanner.prototype.prevWeek = function () {
        //this.saveWeekTexts(); 
        var prevWeekObj = Object(_utils_weekutil__WEBPACK_IMPORTED_MODULE_16__["getPrevWeekDate"])(moment__WEBPACK_IMPORTED_MODULE_7___default()(this.state.weekDate));
        this.props.env.userTasksRepo.changeWeek(prevWeekObj.nextDate, prevWeekObj.adjusted);
    };
    WeekPlanner.prototype.nextWeek = function () {
        //this.saveWeekTexts();
        var nextWeekObj = Object(_utils_weekutil__WEBPACK_IMPORTED_MODULE_16__["getNextWeekDate"])(moment__WEBPACK_IMPORTED_MODULE_7___default()(this.state.weekDate));
        this.props.env.userTasksRepo.changeWeek(nextWeekObj.nextDate, nextWeekObj.adjusted);
    };
    WeekPlanner.prototype.openDialog = function (dialog) {
        this.setState({ dialogs: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.state.dialogs, [dialog]) });
    };
    WeekPlanner.prototype.openAddGoalDialog = function () {
        var _this = this;
        this.openDialog(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_add_custom_goal__WEBPACK_IMPORTED_MODULE_9__["AddCustomGoal"], { onSave: function (learningGoal) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!learningGoal)
                                throw new Error(this.context.intl.formatMessage({ id: 'weekplanner.emptyLearningGoalErr', defaultMessage: 'Lärandemålet kan inte vara tomt' }));
                            if (!!this.state.saving) return [3 /*break*/, 5];
                            this.setState({ saving: true });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, , 3, 4]);
                            return [4 /*yield*/, this.addCustomGoal(learningGoal)];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            this.setState({ saving: false });
                            return [7 /*endfinally*/];
                        case 4:
                            this.closeDialog();
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            }); } }));
    };
    WeekPlanner.prototype.openAddOwnTaskDialog = function (courseName, learningGoalName) {
        var _this = this;
        this.openDialog(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_add_custom_task__WEBPACK_IMPORTED_MODULE_10__["AddCustomTask"], { isTask: !courseName, onSave: function (name, description, url) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!name)
                                throw new Error(this.context.intl.formatMessage({ id: 'weekplanner.nameCannotBeEmpty', defaultMessage: 'Namnet kan inte vara tomt' }));
                            if (!!this.state.saving) return [3 /*break*/, 5];
                            this.setState({ saving: true });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, , 3, 4]);
                            return [4 /*yield*/, this.addCustomTask(courseName, learningGoalName, name, description, url)];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            this.setState({ saving: false });
                            return [7 /*endfinally*/];
                        case 4:
                            this.closeDialog();
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            }); } }));
    };
    WeekPlanner.prototype.editTask = function (userTask) {
        var _this = this;
        this.openDialog(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_edit_user_task__WEBPACK_IMPORTED_MODULE_11__["EditUserTask"], { userTasksRepo: this.props.env.userTasksRepo, userTask: userTask, onUpdate: function (updater) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var test;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            test = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, userTask);
                            updater(test);
                            if (!test.name)
                                throw new Error(this.context.intl.formatMessage({ id: 'weekplanner.nameMustNotBeEmpty', defaultMessage: 'Namnet får inte vara tomt' }));
                            this.closeDialog();
                            return [4 /*yield*/, this.props.env.userTasksRepo.update([userTask], updater)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }, onDelete: function (id) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.closeDialog();
                            return [4 /*yield*/, this.props.env.userTasksRepo.delete([id])];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }, openDialog: function (dialog) { return _this.openDialog(dialog); }, closeDialog: function () { return _this.closeDialog(); } }));
    };
    WeekPlanner.prototype.editSubTask = function (userTask, subTask) {
        var _this = this;
        this.openDialog(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_add_or_edit_sub_task__WEBPACK_IMPORTED_MODULE_15__["AddOrEditSubTask"], { userTasksRepo: this.props.env.userTasksRepo, mode: "edit", userTask: userTask, subTask: subTask, closeDialog: function () { return _this.closeDialog(); } }));
    };
    WeekPlanner.prototype.closeDialog = function () {
        this.setState({ dialogs: this.state.dialogs.slice(0, this.state.dialogs.length - 1) });
    };
    WeekPlanner.prototype.addCustomGoal = function (learningGoal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var latestTimeStamp;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        latestTimeStamp = Math.max.apply(Math.max, [this.state.weekDate].concat(this.state.userTasks.map(function (t) { return t.dateTime; })));
                        return [4 /*yield*/, this.props.env.userTasksRepo.insert([{
                                    id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
                                    learningGoal: learningGoal,
                                    dateTime: latestTimeStamp + 2000
                                }])];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.props.env.userTasksRepo.setWeekPlannerBoxOpen("", true)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WeekPlanner.prototype.removeLearningGoal = function (learningGoal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (learningGoal.tasks.length > 0) {
                            if (!confirm(this.context.intl.formatMessage({ id: 'weekplanner.confirmRemoveLearningObjectives', defaultMessage: 'Ta bort lärandemål samt {learningGoalsNumber} uppgifter?' }, { learningGoalsNumber: learningGoal.tasks.length }))) {
                                return [2 /*return*/];
                            }
                        }
                        return [4 /*yield*/, this.props.env.userTasksRepo.delete(learningGoal.allTasks.map(function (t) { return t.id; }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WeekPlanner.prototype.addCustomTask = function (courseName, learningGoal, name, description, url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var latestTimeStamp;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        latestTimeStamp = Math.max.apply(Math.max, [this.state.weekDate].concat(this.state.userTasks.map(function (t) { return t.dateTime; })));
                        /*const emptyLearningGoalPlaceholder = this.state.userTasks.find(ut =>
                          ut.name == null &&
                          !ut.courseName &&
                          ut.learningGoal === learningGoal);
                    
                        if (emptyLearningGoalPlaceholder) {
                          // Hijack learning-goal placeholder and make it the real task.
                          // This will make the learning goal disappear once this task
                          // is deleted.
                          await userTasksRepo.update([emptyLearningGoalPlaceholder], ut => {
                            Object.assign(ut, { name, description, url });
                          });
                        } else {*/
                        // Add another task to same learning-goal
                        return [4 /*yield*/, this.props.env.userTasksRepo.insert([{
                                    id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
                                    dateTime: latestTimeStamp + 2000,
                                    courseName: courseName,
                                    learningGoal: learningGoal,
                                    name: name,
                                    description: description,
                                    url: url
                                }])];
                    case 1:
                        /*const emptyLearningGoalPlaceholder = this.state.userTasks.find(ut =>
                          ut.name == null &&
                          !ut.courseName &&
                          ut.learningGoal === learningGoal);
                    
                        if (emptyLearningGoalPlaceholder) {
                          // Hijack learning-goal placeholder and make it the real task.
                          // This will make the learning goal disappear once this task
                          // is deleted.
                          await userTasksRepo.update([emptyLearningGoalPlaceholder], ut => {
                            Object.assign(ut, { name, description, url });
                          });
                        } else {*/
                        // Add another task to same learning-goal
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WeekPlanner.prototype.setIsOpen = function (courseName, isOpen) {
        this.props.env.userTasksRepo.setWeekPlannerBoxOpen(courseName, isOpen);
    };
    WeekPlanner.prototype.setTaskDone = function (task, done) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.env.userTasksRepo.setTaskDoneState(task, done)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WeekPlanner.prototype.setSubTaskDone = function (task, subTask, done) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.env.userTasksRepo.setSubTaskDoneState(task, subTask.id, done)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WeekPlanner.prototype.copyFromPreviousWeek = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, userTasks_1, openCourses, weekDate, prevWeek, prevWeekNo, prevKEDWeek, prevTasks, test, latestTimeStamp_1, copies;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.setState({ isCopyingTasks: true })];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, , 5, 6]);
                        _a = this.state, userTasks_1 = _a.userTasks, openCourses = _a.openCourses, weekDate = _a.weekDate;
                        prevWeek = moment__WEBPACK_IMPORTED_MODULE_7___default()(weekDate).add(-1, 'week');
                        prevWeekNo = Object(_utils_weekutil__WEBPACK_IMPORTED_MODULE_16__["getAdjustedWeek"])(prevWeek);
                        prevKEDWeek = Object(_utils_weekutil__WEBPACK_IMPORTED_MODULE_16__["KEDWeek"])(prevWeek.year(), prevWeekNo);
                        return [4 /*yield*/, this.props.env.kedBackendClient.list("usertasks", {
                                from: prevKEDWeek.notBefore,
                                to: prevKEDWeek.notAfter,
                                role: "USER",
                                include: ["task", "course", "acl"],
                                flags: ["includeIdsOnly"]
                            })];
                    case 3:
                        prevTasks = _b.sent();
                        prevTasks = prevTasks
                            .filter(function (prevTask) { return !prevTask.done; }) // Don't copy done tasks
                            .filter(function (prevTask) { return !!prevTask.name; }) // Don't copy empty learning goals
                            .filter(function (prevTask) { return !userTasks_1.some(function (taskOfCurrentWeek) {
                            return taskOfCurrentWeek.name === prevTask.name &&
                                taskOfCurrentWeek.learningGoal === prevTask.learningGoal &&
                                taskOfCurrentWeek.courseName === prevTask.courseName;
                        }); }); // Ignore identical tasks (already copied)
                        test = [weekDate].concat(userTasks_1.map(function (t) { return t.dateTime; }));
                        latestTimeStamp_1 = Math.max.apply(Math.max, [weekDate].concat(userTasks_1.map(function (t) { return t.dateTime; })));
                        copies = prevTasks.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["compareProp"])("dateTime")).map(function (task) {
                            var copy = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task, { dateTime: latestTimeStamp_1 += 1000 });
                            copy.id = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])();
                            if (copy.subTasks) {
                                copy.subTasks = copy.subTasks.filter(function (st) { return !st.done; });
                            }
                            // Stop sharing these to employees. We have the tutor solution for this instead!
                            copy.acl = task.acl && task.acl.filter(function (ac) { return ac.startsWith("email:"); });
                            delete copy.$etag;
                            return copy;
                        });
                        // Store it
                        return [4 /*yield*/, this.props.env.userTasksRepo.insert(copies)];
                    case 4:
                        // Store it
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        this.setState({ isCopyingTasks: false });
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    WeekPlanner.prototype.getHeaderTitle = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_17__["FormattedMessage"], { id: "weekplanner.logBook", defaultMessage: "Loggbok" }));
    };
    WeekPlanner.prototype.render = function () {
        var _this = this;
        var weekNumber = moment__WEBPACK_IMPORTED_MODULE_7___default()(this.state.weekDate).week();
        var showProgressCharts = _features__WEBPACK_IMPORTED_MODULE_21__["features"].weekplannerCharts;
        //console.log("Weekydate: "  + new Date(this.state.weekDate) + " which is week no " + weekNumber);
        var currentWeek = moment__WEBPACK_IMPORTED_MODULE_7___default()().week();
        var taskSets = Object(_refiner__WEBPACK_IMPORTED_MODULE_4__["refine"])(this.state.userTasks);
        var _a = this.state, dialogs = _a.dialogs, weekTextsUT = _a.weekTextsUT, strategy = _a.strategy, assessment = _a.assessment, isLoading = _a.isLoading, isCopyingTasks = _a.isCopyingTasks;
        var isSaving = weekTextsUT && (weekTextsUT.$meta === 'adding' || weekTextsUT.$meta === 'updating');
        var isStrategyEdited = !!weekTextsUT && (strategy !== weekTextsUT.weekTexts.strategy);
        var isAssessmentEdited = !!weekTextsUT && (assessment !== weekTextsUT.weekTexts.assessment);
        var enableSaveButton = !isSaving && (isStrategyEdited || isAssessmentEdited);
        var isGymnasiumStudent = ('' + _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["env"].currentUser.schoolType).toLowerCase() === "gymnasium";
        var chartTasks = Object(_charts_charts_utils__WEBPACK_IMPORTED_MODULE_20__["getWeekplannerProgressData"])(taskSets);
        var percentage = chartTasks.totalNumberOfTasks > 0 ? chartTasks.completedTasks / chartTasks.totalNumberOfTasks * 100 : 0;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed weekPlanner" + (weekNumber === currentWeek ? " currentWeek" : ""), onKeyDown: function (ev) {
                    if (ev.which === 83 && ev.ctrlKey) {
                        ev.preventDefault();
                        if (!isSaving && _this.isWeekTextsEdited()) {
                            _this.weekTextsSavingJob.triggerChange(0);
                        }
                    }
                } },
                showProgressCharts && chartTasks.totalNumberOfTasks > 0 && this.getHeaderTitle(),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "widgets" },
                    showProgressCharts && chartTasks.totalNumberOfTasks > 0 ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "progressBar" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_charts_progress__WEBPACK_IMPORTED_MODULE_19__["Progress"], { percentage: percentage })) : this.getHeaderTitle(),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "weekSelect" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_17__["FormattedMessage"], { id: "weekplanner.weekNumber", values: { weekNumber: weekNumber }, defaultMessage: "Vecka {weekNumber}" }))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn-group" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn", onClick: function () { return _this.prevWeek(); } },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-angle-left", "aria-hidden": "true" })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn", onClick: function () { return _this.nextWeek(); } },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-angle-right", "aria-hidden": "true" })))))),
                taskSets.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                taskSets.map(function (props) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_user_tasks_box__WEBPACK_IMPORTED_MODULE_2__["UserTasksBox"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: props.courseName }, props, { courseName: props.courseName, learningGoals: props.learningGoals, viewCourseUrl: _this.props.viewCourseUrl, openCourses: _this.state.openCourses, addOwnTask: function (courseName, learningGoalName) { return _this.openAddOwnTaskDialog(courseName, learningGoalName); }, setIsOpen: _this.setIsOpen.bind(_this), setTaskDone: _this.setTaskDone.bind(_this), setSubTaskDone: _this.setSubTaskDone.bind(_this), editTask: function (task) { return _this.editTask(task); }, editSubTask: function (task, subTask) { return _this.editSubTask(task, subTask); }, removeLearningGoal: function (lg) { return _this.removeLearningGoal(lg); }, displayProgress: showProgressCharts, progressData: chartTasks.subjectData[props.courseName] }));
                }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                isLoading ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_12__["Spinner"], null) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn", onClick: function (ev) { return _this.openAddGoalDialog(); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "far fa-list-alt", "aria-hidden": "true" }),
                        isGymnasiumStudent ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_17__["FormattedMessage"], { id: "weekplanner.learningGoalGymnasium", defaultMessage: "Uppgift" }) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_17__["FormattedMessage"], { id: "weekplanner.learningGoalPrimary", defaultMessage: "Eget l\u00E4randem\u00E5l" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn", style: isCopyingTasks ? { opacity: 0.5 } : undefined, onClick: function (ev) { return (!isCopyingTasks) && _this.copyFromPreviousWeek(); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "far fa-clone", "aria-hidden": "true" }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_17__["FormattedMessage"], { id: "weekplanner.copyPreviousWeekTaks", defaultMessage: "Kopiera ej klara fr\u00E5n f\u00F6reg\u00E5ende vecka" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_13__["OpenCloseBox"], { title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_17__["FormattedMessage"], { id: "weekplanner.strategyAndEvaluation", defaultMessage: "Strategi & Utv\u00E4rdering" })), headerOpen: this.state.openCourses["StratUtv"], onOpenClose: function (becameOpen) { return _this.setIsOpen("StratUtv", becameOpen); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_17__["FormattedMessage"], { id: "weekplanner.strategy", defaultMessage: "Strategi" })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_17__["FormattedMessage"], { id: "weekplanner.strategyDescription", defaultMessage: "Hur jag ska g\u00F6ra f\u00F6r att l\u00E4ra mig." })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { className: "weekplanner-textarea", disabled: this.props.env.tutored, value: strategy && strategy.substr(0, MAX_STRATEGY_LENGTH), onChange: function (ev) {
                                _this.setState({ strategy: (ev.target.value || '').substr(0, MAX_STRATEGY_LENGTH) });
                                _this.weekTextsSavingJob.triggerChange(500);
                            } }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h3", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_17__["FormattedMessage"], { id: "weekplanner.evaluation", defaultMessage: "Utv\u00E4rdering" })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_17__["FormattedMessage"], { id: "weekplanner.evaluationDescription", defaultMessage: "Reflektion kring din arbetsinsats och dina valda strategier under veckan.Utv\u00E4rdera i f\u00F6rh\u00E5llande till dina m\u00E5l." })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { className: "weekplanner-textarea", value: assessment && assessment.substr(0, MAX_ASSESSMENT_LENGTH), disabled: this.props.env.tutored, onChange: function (ev) {
                                _this.setState({ assessment: (ev.target.value || '').substr(0, MAX_ASSESSMENT_LENGTH) });
                                _this.weekTextsSavingJob.triggerChange(500);
                            } }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn", tabIndex: 0, style: enableSaveButton ? {} : { opacity: 0.5 }, onClick: function () { return !isSaving && _this.weekTextsSavingJob.triggerChange(0); } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "far fa-save", "aria-hidden": "true" }),
                            enableSaveButton ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_17__["FormattedMessage"], { id: "common.save", defaultMessage: " Spara" }) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_17__["FormattedMessage"], { id: "common.saved", defaultMessage: " Sparad" }))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_dialogs__WEBPACK_IMPORTED_MODULE_8__["Dialogs"], { dialogs: dialogs, popDialog: function () {
                    _this.setState(function (_a) {
                        var dialogs = _a.dialogs;
                        return ({ dialogs: dialogs.slice(0, dialogs.length - 1) });
                    });
                } }));
    };
    WeekPlanner.contextType = _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_18__["LanguageContext"];
    return WeekPlanner;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



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

_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].ENVIRONMENT = "production";
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_API_URL = "https://backend.kedschools.com/kedbackend-canary/api/"; // "https://kedbackendtest.azurewebsites.net/api/"
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].EDS_API_URL = "https://api.kedschools.se/studentportal/"; // "https://edsportalowinapi.azurewebsites.net/api/"
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
    var schoolgrade = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_1__["parseQueryString"])(location.search, { toLower: true }).schoolgrade;
    if (schoolgrade) {
        var schoolGradeInt = parseInt(schoolgrade);
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser.schoolGrade = schoolGradeInt;
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_5__["default"].currentUser.schoolType = schoolGradeInt > 9 ? "Gymnasium" : "Grundskolor";
    }
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
        scopes: scopes,
        name: user.displayName
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




if (!_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].db) {
    // Put db on env so that it is shared between subject planner and other components!
    _KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].db = new kedbackend_repo__WEBPACK_IMPORTED_MODULE_1__["KedBackendRepo"](function () { return _KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].kedBackendClient; }, function () { return _KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser ?
        _KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser.mail :
        ""; }, function () { return _KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser ?
        _KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser.displayName || _KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser.mail :
        ""; });
}
var db = _KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].db;
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

/***/ "./src/globals/moment-sv-locale.ts":
/*!*****************************************!*\
  !*** ./src/globals/moment-sv-locale.ts ***!
  \*****************************************/
/*! exports provided: localMoment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localMoment", function() { return localMoment; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/KED.cfg */ "./src/globals/KED.cfg.ts");


if (_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_1__["default"].KED_LOCALE === "sv") {
    moment__WEBPACK_IMPORTED_MODULE_0___default.a.updateLocale('sv', {
        months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
        weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
        weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [kl.] HH:mm',
            LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd D MMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Idag] LT',
            nextDay: '[Imorgon] LT',
            lastDay: '[Igår] LT',
            nextWeek: '[På] dddd LT',
            lastWeek: '[I] dddd[s] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'om %s',
            past: 'för %s sedan',
            s: 'några sekunder',
            ss: '%d sekunder',
            m: 'en minut',
            mm: '%d minuter',
            h: 'en timme',
            hh: '%d timmar',
            d: 'en dag',
            dd: '%d dagar',
            M: 'en månad',
            MM: '%d månader',
            y: 'ett år',
            yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal: function (number) {
            var b = number % 10, output = (~~(number % 100 / 10) === 1) ? 'e' :
                (b === 1) ? 'a' :
                    (b === 2) ? 'a' :
                        (b === 3) ? 'e' : 'e';
            return number + output;
        },
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });
}
var localMoment = function () {
    return moment__WEBPACK_IMPORTED_MODULE_0___default.a.apply(this, arguments).locale(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_1__["default"].KED_LOCALE);
};


/***/ }),

/***/ "./src/repos/hidden-courses-repo.ts":
/*!******************************************!*\
  !*** ./src/repos/hidden-courses-repo.ts ***!
  \******************************************/
/*! exports provided: hiddenCoursesRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenCoursesRepo", function() { return hiddenCoursesRepo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ked_repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ked-repo */ "./src/repos/ked-repo.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _apis_edsclient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apis/edsclient */ "./src/apis/edsclient.ts");
/* harmony import */ var _utils_school_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/school-moment */ "./src/utils/school-moment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








var hiddenCoursesRepo = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].hiddenCoursesRepo;
var HiddenCoursesRepo = /** @class */ (function () {
    function HiddenCoursesRepo() {
        var _this = this;
        this.result = null;
        this.subscribers = [];
        this.fullCourse = false;
        this.notifySubscriber = function (subscriber, options) {
            try {
                subscriber(options.fullCourse ? _this.result : _this.result.filter(function (c) { return c.visible; }));
            }
            catch (err) {
                console.error(err);
            }
        };
        this.kedRepo = new _ked_repo__WEBPACK_IMPORTED_MODULE_1__["KedRepo"]({
            getClient: function () { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient; },
            optimistic: true,
            table: "userhiddencourses",
            user: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser ? _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.mail : "",
            getQueryOptions: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, ({ role: "USER" })];
            }); }); },
        });
        var initPromise = this.init();
        Promise.all([
            initPromise,
            this.kedCoursesPromise,
            this.edsCoursesPromise
        ]).catch(function (err) { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["showError"])(err); });
    }
    HiddenCoursesRepo.prototype.init = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bearerPromise, resolveUserHiddenCoursesPromise, userHiddenCoursesResolved;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bearerPromise = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].bearerProvider ? _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].bearerProvider.getBearer() : Promise.resolve({});
                        // In parallell, we request:
                        //  1) KEDBackend: Schools.activeCourses
                        //  2) EDS.getActiveAcourses()
                        //  3) (via subscription): KEDBackend: userHiddenCourses
                        this.kedCoursesPromise = bearerPromise.then(function () { return _this.listKedCourses(); });
                        this.edsCoursesPromise = bearerPromise.then(function () { return _this.listEDSCourses(); });
                        userHiddenCoursesResolved = false;
                        this.userHiddenCoursesPromise = new Promise(function (resolve) { return resolveUserHiddenCoursesPromise = function (x) {
                            if (userHiddenCoursesResolved) {
                                _this.userHiddenCoursesPromise = Promise.resolve(x);
                            }
                            else {
                                userHiddenCoursesResolved = true;
                                resolve(x);
                            }
                        }; });
                        return [4 /*yield*/, bearerPromise];
                    case 1:
                        _a.sent();
                        this.kedRepo.mem.subscribe(function (userHiddenCourses) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _a, activeCourses, edsActiveCourses, _b;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, Promise.all([
                                            this.kedCoursesPromise,
                                            this.edsCoursesPromise
                                        ])];
                                    case 1:
                                        _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"].apply(void 0, [_c.sent(), 2]), activeCourses = _a[0], edsActiveCourses = _a[1];
                                        // Refine the three results into a single result
                                        _b = this;
                                        return [4 /*yield*/, this.createCoursesList(edsActiveCourses, userHiddenCourses, activeCourses)];
                                    case 2:
                                        // Refine the three results into a single result
                                        _b.result = _c.sent();
                                        // Notify our subscribers:
                                        this.subscribers.forEach(function (subscriber) { return _this.notifySubscriber(subscriber.subscriber, subscriber.options); });
                                        resolveUserHiddenCoursesPromise(userHiddenCourses);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HiddenCoursesRepo.prototype.listKedCourses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fullCourse, schools, activeCourses;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fullCourse = this.fullCourse;
                        console.log("FullCourse: " + fullCourse);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient.list('schools', {
                                role: "USER",
                                name: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.school,
                                include: "activeCourses",
                                flags: fullCourse ? [] : ["includeIdsAndNamesOnly"],
                                cacheBust: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.username
                            })];
                    case 1:
                        schools = _a.sent();
                        activeCourses = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["flatten"])(schools.map(function (school) { return school.activeCourses; })).sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["compareProp"])("name"));
                        return [2 /*return*/, activeCourses];
                }
            });
        });
    };
    HiddenCoursesRepo.prototype.listEDSCourses = function () {
        var periodName = new _apis_edsclient__WEBPACK_IMPORTED_MODULE_5__["EDSPeriod"](Object(_utils_school_moment__WEBPACK_IMPORTED_MODULE_6__["getSchoolMoment"])(moment__WEBPACK_IMPORTED_MODULE_7___default()())).period;
        return _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.roles.indexOf('EMPLOYEE') === -1 ?
            // STUDENTs should, by default, only show courses that is listed in EDS
            _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].edsClient.getActiveCourses({ periodName: periodName }) :
            // EMPLOYEEs should, by default, show all courses on school - no need to query EDS
            null;
    };
    HiddenCoursesRepo.prototype.createCoursesList = function (edsActiveCourses, userHiddenCourses, activeCourses) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var hiddenCoursesMap, visibleCoursesMap, isStudent, edsCourseMap, result;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hiddenCoursesMap = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["arrayToMap"])(userHiddenCourses.filter(function (hc) { return !hc.show; }), function (hc) { return hc.name; });
                        visibleCoursesMap = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["arrayToMap"])(userHiddenCourses.filter(function (hc) { return hc.show; }), function (hc) { return hc.name; });
                        isStudent = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.roles.some(function (role) { return role === 'STUDENT'; });
                        edsCourseMap = edsActiveCourses ?
                            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["arrayToMap"])(edsActiveCourses, function (c) { return c.name; }) :
                            {};
                        return [4 /*yield*/, Promise.all(activeCourses.map(function (_a) {
                                var id = _a.id, name = _a.name, description = _a.description, modifiedBy = _a.modifiedBy;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    var edsCourse, defaultVisible, visible;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                        edsCourse = edsCourseMap[name];
                                        defaultVisible = isStudent ?
                                            edsCourse != null : // Course name also listed in EDS
                                            true;
                                        visible = defaultVisible ?
                                            !hiddenCoursesMap[id] : // Visible unless user has overridden that.
                                            !!visibleCoursesMap[id];
                                        // Resolve description:
                                        if (modifiedBy && modifiedBy.name && !description) {
                                            description = modifiedBy.name + "s version";
                                        }
                                        return [2 /*return*/, {
                                                id: id,
                                                name: name,
                                                description: description,
                                                visible: visible,
                                                defaultVisible: defaultVisible
                                            }];
                                    });
                                });
                            }))];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.sort(function (_a, _b) {
                                var a = _a.name;
                                var b = _b.name;
                                return a < b ? -1 : a > b ? 1 : 0;
                            })];
                }
            });
        });
    };
    HiddenCoursesRepo.prototype.hideCourse = function (c) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var overrides;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        overrides = this.kedRepo.mem.items.filter(function (hc) { return hc.name === c.id; });
                        if (!c.defaultVisible) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.kedRepo.insert([{
                                    id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_4__["createUUID"])(),
                                    name: c.id
                                }])];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.kedRepo.delete(overrides.map(function (ov) { return ov.id; }))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HiddenCoursesRepo.prototype.showCourse = function (c) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var overrides;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        overrides = this.kedRepo.mem.items.filter(function (hc) { return hc.name === c.id; });
                        if (!c.defaultVisible) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.kedRepo.delete(overrides.map(function (ov) { return ov.id; }))];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.kedRepo.insert([{
                                id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_4__["createUUID"])(),
                                name: c.id,
                                show: true
                            }])];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HiddenCoursesRepo.prototype.subscribe = function (subscriber, options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, activeCourses, edsActiveCourses, userHiddenCourses, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(!this.fullCourse && options.fullCourse)) return [3 /*break*/, 3];
                        // The subscriber demands full courses
                        // Need to query that before notifying
                        // Also affect state for future internal notification
                        this.fullCourse = options.fullCourse;
                        this.kedCoursesPromise = this.listKedCourses(); // Redo this call, now loading full courses
                        return [4 /*yield*/, Promise.all([
                                this.kedCoursesPromise,
                                this.edsCoursesPromise,
                                this.userHiddenCoursesPromise
                            ])];
                    case 1:
                        _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"].apply(void 0, [_c.sent(), 3]), activeCourses = _a[0], edsActiveCourses = _a[1], userHiddenCourses = _a[2];
                        // Assemble result:
                        _b = this;
                        return [4 /*yield*/, this.createCoursesList(edsActiveCourses, userHiddenCourses, activeCourses)];
                    case 2:
                        // Assemble result:
                        _b.result = _c.sent();
                        _c.label = 3;
                    case 3: return [4 /*yield*/, this.userHiddenCoursesPromise];
                    case 4:
                        _c.sent(); // So we know that this.result is there.
                        this.notifySubscriber(subscriber, options);
                        this.subscribers.push({ subscriber: subscriber, options: options });
                        return [2 /*return*/];
                }
            });
        });
    };
    HiddenCoursesRepo.prototype.unsubscribe = function (subscriber) {
        this.subscribers = this.subscribers.filter(function (s) { return s.subscriber !== subscriber; });
    };
    return HiddenCoursesRepo;
}());
if (!hiddenCoursesRepo) {
    hiddenCoursesRepo = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].hiddenCoursesRepo = new HiddenCoursesRepo();
}


/***/ }),

/***/ "./src/repos/ked-repo.ts":
/*!*******************************!*\
  !*** ./src/repos/ked-repo.ts ***!
  \*******************************/
/*! exports provided: KedRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KedRepo", function() { return KedRepo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repo */ "./src/repos/repo.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");



var KedRepo = /** @class */ (function () {
    function KedRepo(options) {
        var _this = this;
        var table = options.table, getClient = options.getClient, getQueryOptions = options.getQueryOptions;
        this.mem = new _repo__WEBPACK_IMPORTED_MODULE_1__["Repo"]({ query: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var queryOptions;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getQueryOptions()];
                        case 1:
                            queryOptions = _a.sent();
                            return [4 /*yield*/, getClient().list(table, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, queryOptions, { cacheBust: this.getCacheBust() }))];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            }); } });
        this.options = options;
    }
    KedRepo.prototype.getCacheBust = function () {
        var _a = this.options, table = _a.table, user = _a.user;
        var cacheBust = localStorage.getItem('cache-bust-' + table + '-' + user);
        return cacheBust || this.regenerateCacheBust();
    };
    KedRepo.prototype.regenerateCacheBust = function () {
        var _a = this.options, table = _a.table, user = _a.user;
        var cacheBust = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["createUUID"])();
        localStorage.setItem('cache-bust-' + table + '-' + user, cacheBust);
        return cacheBust;
    };
    KedRepo.prototype.upsert = function (item, updater) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var updatedItem;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!item.$etag) return [3 /*break*/, 2];
                        updatedItem = Object.assign({}, item);
                        updater(updatedItem);
                        return [4 /*yield*/, this.insert([updatedItem])];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: 
                    // We have an $etag, so we can expect it to live on the server.
                    // However, take care of the unlikely situation that it was deleted from server,
                    // and if so, insert it again.
                    return [4 /*yield*/, this.update([item], updater).catch(function (e) {
                            if (e.name === "http404") {
                                var updatedItem = Object.assign({}, item);
                                updater(updatedItem);
                                return _this.insert([updatedItem]);
                            }
                            return Promise.reject(e);
                        })];
                    case 3:
                        // We have an $etag, so we can expect it to live on the server.
                        // However, take care of the unlikely situation that it was deleted from server,
                        // and if so, insert it again.
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    KedRepo.prototype.update = function (items, updater) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, getClient, optimistic, table, client, modifiedItems, res;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.options, getClient = _a.getClient, optimistic = _a.optimistic, table = _a.table;
                        client = getClient();
                        modifiedItems = items.map(function (item) {
                            var memRepoItem = _this.mem.items.find(function (it) { return it.id === item.id; });
                            item = Object.assign({}, memRepoItem || item);
                            updater(item);
                            return item;
                        });
                        if (!optimistic) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.mem.update(modifiedItems.map(function (x) { return Object.assign({}, x, { $meta: 'updating' }); }))];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [4 /*yield*/, client.do(function (br) { return modifiedItems.forEach(function (item) { return br.put(table, item); }); })
                            .catch(function (e) { return e.name === "http409" ? // conflict
                            // Get a fresh version from server:
                            client.list(table, { ids: items.map(function (item) { return item.id; }) }, { cache: 'no-cache' }).then(function (freshItems) {
                                // Update local version:
                                var modifiedItems = freshItems.map(function (freshItem) {
                                    // Clone the fresh item
                                    var modified = Object.assign({}, freshItem);
                                    // Re-run the updater on the clone:
                                    updater(modified);
                                    return modified;
                                });
                                // Re-do the the put operation towards the server.
                                return client.do(function (br) { return modifiedItems.forEach(function (item) { return br.put(table, item); }); });
                            }) :
                            // Other unexpected error:
                            Promise.resolve(optimistic &&
                                _this.mem.update(items)) // Undo optimistic update
                                .then(function () {
                                return Promise.reject(e); // Reject with the error no matter.
                            }); })];
                    case 3:
                        res = _b.sent();
                        this.regenerateCacheBust();
                        modifiedItems.forEach(function (item) {
                            item.$etag = res.newEtags[item.id];
                            item.$meta = undefined;
                        });
                        return [4 /*yield*/, this.mem.update(modifiedItems)];
                    case 4:
                        _b.sent(); // Ensures new etag is is applied on next action.
                        return [2 /*return*/];
                }
            });
        });
    };
    KedRepo.prototype.stripGraphs = function (items, graphs) {
        return items.map(function (item) {
            var clone = Object.assign({}, item);
            graphs.forEach(function (graph) {
                if (item[graph]) {
                    clone[graph] = item[graph].map(function (doc) { return ({ id: doc.id }); });
                }
            });
            return clone;
        });
    };
    KedRepo.prototype.insert = function (items) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, getClient, optimistic, table, getQueryOptions, client, queryOptions, graphs, stripped, br, _loop_1, stripped_1, stripped_1_1, item, res;
            var e_1, _b;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.options, getClient = _a.getClient, optimistic = _a.optimistic, table = _a.table, getQueryOptions = _a.getQueryOptions;
                        client = getClient();
                        return [4 /*yield*/, getQueryOptions()];
                    case 1:
                        queryOptions = _c.sent();
                        graphs = [].concat(queryOptions.include);
                        // Give IDs to each item:
                        items = items.map(function (item) { return item.id ? item : Object.assign({}, item, { id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["createUUID"])() }); });
                        stripped = this.stripGraphs(items, graphs);
                        if (!optimistic) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.mem.insert(stripped.map(function (x) { return Object.assign({}, x, { $meta: 'adding' }); }))];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        br = new kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["BatchRunner"]();
                        _loop_1 = function (item) {
                            var e_2, _a;
                            var _loop_2 = function (graph) {
                                var foreignItems = item[graph];
                                if (foreignItems) {
                                    foreignItems.forEach(function (doc) {
                                        br.link2(table, item.id, graph, doc.id);
                                    });
                                }
                            };
                            try {
                                // Also add links to all foreign related items:
                                for (var graphs_1 = (e_2 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](graphs)), graphs_1_1 = graphs_1.next(); !graphs_1_1.done; graphs_1_1 = graphs_1.next()) {
                                    var graph = graphs_1_1.value;
                                    _loop_2(graph);
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (graphs_1_1 && !graphs_1_1.done && (_a = graphs_1.return)) _a.call(graphs_1);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                            br.add(table, item);
                        };
                        try {
                            for (stripped_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](stripped), stripped_1_1 = stripped_1.next(); !stripped_1_1.done; stripped_1_1 = stripped_1.next()) {
                                item = stripped_1_1.value;
                                _loop_1(item);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (stripped_1_1 && !stripped_1_1.done && (_b = stripped_1.return)) _b.call(stripped_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [4 /*yield*/, client.batch(br.mutationRequests).catch(function (e) {
                                if (optimistic)
                                    _this.mem.delete(items.map(function (item) { return item.id; }));
                                return Promise.reject(e);
                            })];
                    case 4:
                        res = _c.sent();
                        this.regenerateCacheBust();
                        items.forEach(function (item) { return item.$etag = res.newEtags[item.id]; });
                        if (!optimistic) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.mem.update(items)];
                    case 5:
                        _c.sent(); // Update with new $etag.
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.mem.insert(items)];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    KedRepo.prototype.delete = function (ids) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, getClient, optimistic, table, client, res;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.options, getClient = _a.getClient, optimistic = _a.optimistic, table = _a.table;
                        client = getClient();
                        if (!optimistic) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.mem.update(ids
                                .map(function (id) { return _this.mem.items.find(function (x) { return x.id === id; }); })
                                .filter(function (x) { return x; })
                                .map(function (x) { return Object.assign({}, x, { $meta: 'deleting' }); }))];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [4 /*yield*/, client.do(function (br) { return ids.forEach(function (id) { return br.delete(table, id); }); }).catch(function (e) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!optimistic) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.mem.update(ids
                                                .map(function (id) { return _this.mem.items.find(function (x) { return x.id === id; }); })
                                                .filter(function (x) { return x; })
                                                .map(function (x) {
                                                x = Object.assign({}, x);
                                                delete x.$meta;
                                                return x;
                                            }))];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: throw e;
                                }
                            });
                        }); })];
                    case 3:
                        res = _b.sent();
                        this.regenerateCacheBust();
                        return [4 /*yield*/, this.mem.delete(ids)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return KedRepo;
}());



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

/***/ "./src/repos/user-tasks-repo.ts":
/*!**************************************!*\
  !*** ./src/repos/user-tasks-repo.ts ***!
  \**************************************/
/*! exports provided: userTasksRepo, UserTasksRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userTasksRepo", function() { return userTasksRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTasksRepo", function() { return UserTasksRepo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ked_repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ked-repo */ "./src/repos/ked-repo.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _components_weekplanner_weekplanner_persisted_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/weekplanner/weekplanner-persisted-state */ "./src/components/weekplanner/weekplanner-persisted-state.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _utils_weekutil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/weekutil */ "./src/utils/weekutil.ts");







var userTasksRepo = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].userTasksRepo;
var UserTasksRepo = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserTasksRepo, _super);
    function UserTasksRepo(getClient, getCurrentUser) {
        var _this = _super.call(this, {
            getClient: getClient,
            optimistic: true,
            table: "usertasks",
            user: getCurrentUser() ? getCurrentUser().mail : "",
            getQueryOptions: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var currentUser, userEmail, _a, weekDate, weekNumber, kedWeek;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            currentUser = getCurrentUser();
                            userEmail = currentUser ? currentUser.mail : "";
                            if (!!this.persistedState) return [3 /*break*/, 2];
                            _a = this;
                            return [4 /*yield*/, _components_weekplanner_weekplanner_persisted_state__WEBPACK_IMPORTED_MODULE_3__["WeekPlannerPersistedState"].load(userEmail)];
                        case 1:
                            _a.persistedState = _b.sent();
                            _b.label = 2;
                        case 2:
                            weekDate = this.persistedState.weekDate;
                            weekNumber = moment__WEBPACK_IMPORTED_MODULE_4___default()(weekDate).week();
                            kedWeek = Object(_utils_weekutil__WEBPACK_IMPORTED_MODULE_6__["KEDWeek"])(moment__WEBPACK_IMPORTED_MODULE_4___default()(weekDate).year(), weekNumber);
                            /*const [from, to] = [moment(weekDate).startOf('week'), moment(weekDate).endOf('week')]
                              .map(m => m.toDate().getTime());*/
                            return [2 /*return*/, {
                                    from: kedWeek.notBefore,
                                    to: kedWeek.notAfter,
                                    role: "USER",
                                    include: ["task", "course"],
                                    flags: ["includeIdsOnly"],
                                }];
                    }
                });
            }); }
        }) || this;
        _this.persistedState = null;
        _this.getCurrentUser = getCurrentUser;
        return _this;
    }
    UserTasksRepo.prototype.updatePersistedState = function (stateChanges) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object.assign(this.persistedState, stateChanges);
                        return [4 /*yield*/, this.persistedState.save()];
                    case 1:
                        _a.sent();
                        this.mem.notifySubscribers();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserTasksRepo.prototype.setTaskDoneState = function (userTask, done) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, getClient, optimistic, table, client, modifiedItem, similarTasks, identicalTasks;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.options, getClient = _a.getClient, optimistic = _a.optimistic, table = _a.table;
                        client = getClient();
                        modifiedItem = Object.assign({}, userTask, { done: done });
                        if (!optimistic) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.mem.update(Object.assign({}, modifiedItem, { $meta: 'updating' }))];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [4 /*yield*/, client.list('usertasks', {
                            name: userTask.name,
                            role: "USER",
                            include: ["task", "course"],
                            flags: ["includeIdsOnly"],
                            from: moment__WEBPACK_IMPORTED_MODULE_4___default()(this.persistedState.weekDate).add(-3, 'weeks').valueOf(),
                            to: moment__WEBPACK_IMPORTED_MODULE_4___default()(this.persistedState.weekDate).add(3, 'weeks').valueOf()
                        }, {
                            cache: 'no-cache'
                        })];
                    case 3:
                        similarTasks = _b.sent();
                        identicalTasks = similarTasks.filter(function (t) {
                            return t.courseName === userTask.courseName &&
                                t.learningGoal === userTask.learningGoal &&
                                (!userTask.task || t.task.map(function (t) { return t.id; }).join('') === userTask.task.map(function (t) { return t.id; }).join('')) &&
                                (!userTask.course || t.course.map(function (c) { return c.id; }).join('') === userTask.course.map(function (c) { return c.id; }).join(''));
                        });
                        if (identicalTasks.length === 0) {
                            // Workaround for issue in SubjectPlanner migration (usertasks with long names is not found)
                            identicalTasks.push(userTask);
                        }
                        return [4 /*yield*/, this.update(identicalTasks, function (t) { return t.done = done; })];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserTasksRepo.prototype.setSubTaskDoneState = function (userTask, subTaskId, done) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, getClient, optimistic, table, client;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.options, getClient = _a.getClient, optimistic = _a.optimistic, table = _a.table;
                        client = getClient();
                        return [4 /*yield*/, this.update([userTask], function (t) { return t.subTasks && t.subTasks.filter(function (st) { return st.id === subTaskId; })
                                .forEach(function (st) { return st.done = done; }); })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserTasksRepo.prototype.setWeekPlannerBoxOpen = function (courseName, isOpen) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var openCourses;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        openCourses = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.persistedState.openCourses);
                        if (isOpen)
                            openCourses[courseName] = true;
                        else
                            delete openCourses[courseName];
                        return [4 /*yield*/, this.updatePersistedState({ openCourses: openCourses })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserTasksRepo.prototype.changeWeek = function (weekDate, keepCurrentDate) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var persistedState, newPersisted;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        persistedState = this.persistedState;
                        if (!!persistedState) return [3 /*break*/, 2];
                        return [4 /*yield*/, _components_weekplanner_weekplanner_persisted_state__WEBPACK_IMPORTED_MODULE_3__["WeekPlannerPersistedState"].load(this.options.user)];
                    case 1:
                        persistedState = _a.sent();
                        _a.label = 2;
                    case 2:
                        newPersisted = new _components_weekplanner_weekplanner_persisted_state__WEBPACK_IMPORTED_MODULE_3__["WeekPlannerPersistedState"](persistedState);
                        newPersisted.weekDate = keepCurrentDate ? moment__WEBPACK_IMPORTED_MODULE_4___default()(weekDate).valueOf() : moment__WEBPACK_IMPORTED_MODULE_4___default()(weekDate).startOf('week').valueOf();
                        newPersisted.save();
                        this.persistedState = newPersisted;
                        return [4 /*yield*/, this.mem.refreshFromServer()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserTasksRepo.prototype.subscribe = function (subscriber) {
        var _this = this;
        var proxySubscriber = function (userTasks) {
            subscriber(userTasks.filter(function (ut) { return !ut.weekTexts; }), _this.persistedState, userTasks.filter(function (ut) { return !!ut.weekTexts; })[0] || {
                id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["createUUID"])(),
                dateTime: _this.persistedState.weekDate,
                weekTexts: { assessment: '', strategy: '' },
                acl: [
                    // Default ACL: Let user self have full control over this item:
                    new kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["DocumentAccess"]("email", _this.getCurrentUser().mail, "S"),
                ].map(function (ac) { return ac.toString(); })
            });
        };
        proxySubscriber["subscriber"] = subscriber;
        this.mem.subscribe(proxySubscriber);
    };
    UserTasksRepo.prototype.unsubscribe = function (subscriber) {
        this.mem.subscribers = this.mem.subscribers.filter(function (s) { return s["subscriber"] !== subscriber; });
    };
    return UserTasksRepo;
}(_ked_repo__WEBPACK_IMPORTED_MODULE_1__["KedRepo"]));

if (!userTasksRepo) {
    userTasksRepo = _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].userTasksRepo = new UserTasksRepo(function () { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].kedBackendClient; }, function () { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser; });
    userTasksRepo.mem.ensureHasData();
}


/***/ }),

/***/ "./src/test/data/users.ts":
/*!********************************!*\
  !*** ./src/test/data/users.ts ***!
  \********************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
var users = [{
        displayName: "Administratör",
        mail: "vemendo@kedschools.com",
        roles: ['ADMIN', 'EMPLOYEE'],
        school: 'KED',
        username: "admin"
    }, {
        displayName: "David",
        mail: "david.fahlander@vemendo.se",
        roles: ['ADMIN', 'EMPLOYEE'],
        school: 'KED',
        username: "david",
        schoolGrade: 2
    },
    {
        displayName: "Andrei",
        mail: "andrei.spatarelu@vemendo.se",
        roles: ['ADMIN', 'EMPLOYEE', 'STUDENT'],
        school: 'KED',
        username: "andrei",
        schoolGrade: 7
    }, {
        displayName: "Carl Holmberg",
        mail: "carl.holmberg@kunskapsgymnasiet.se",
        roles: ['ADMIN', 'EMPLOYEE'],
        school: 'Norrköping',
        username: "carl.holmberg@kunskapsgymnasiet.se"
    }, {
        displayName: "Carl",
        mail: "carl@kedschools.com",
        roles: ['ADMIN', 'EMPLOYEE', 'STUDENT'],
        school: 'KED',
        username: "carl"
    }, {
        displayName: "david.fahlander@kedschools.com",
        mail: "david.fahlander@kedschools.com",
        roles: ["ADMIN", "EMPLOYEE", "STUDENT"],
        school: "KED",
        username: "david.fahlander@kedschools.com"
    }, {
        displayName: "Teacher 1",
        mail: "teacher1.classroom@kedschools.com",
        roles: ['EMPLOYEE'],
        school: 'KED',
        username: "teacher1.classroom@kedschools.com"
    }, {
        displayName: "Student 3",
        mail: "student3.classroom@kedschools.com",
        roles: ['STUDENT'],
        school: 'KED',
        username: "student3.classroom@kedschools.com"
    }, {
        displayName: "Student 13",
        mail: "student13.classroom@kedschools.com",
        roles: ['STUDENT'],
        school: 'KED',
        username: "student13.classroom@kedschools.com"
    }, {
        displayName: "Student 24",
        mail: "student24.classroom@kedschools.com",
        roles: ['STUDENT'],
        school: 'KED',
        username: "student24.classroom@kedschools.com"
    }, {
        displayName: "Test-Live-Elev1",
        mail: "ubw6757@edu.kunskapsgymnasiet.se",
        roles: ['STUDENT'],
        school: 'Uppsala',
        username: "ubw6757@edu.kunskapsgymnasiet.se"
    }, {
        displayName: "Test-Live-Elev2",
        mail: "ums4302@edu.kunskapsgymnasiet.se",
        roles: ['STUDENT'],
        school: 'Uppsala',
        username: "ums4302@edu.kunskapsgymnasiet.se"
    }, {
        displayName: "Test-Live-Elev3",
        mail: "uhh3460@edu.kunskapsgymnasiet.se",
        roles: ['STUDENT'],
        school: 'Uppsala',
        username: "uhh3460@edu.kunskapsgymnasiet.se"
    }, {
        displayName: "Test-Live-Elev4(fel goals issue)",
        mail: "umt6826@edu.kunskapsskolan.se",
        roles: ["STUDENT"],
        school: "Uppsala",
        username: "umt6826@edu.kunskapsskolan.se"
    }, {
        displayName: "Test-Live-Elev5(future abilities)",
        mail: "ujg3833@edu.kunskapsskolan.se",
        roles: ["STUDENT"],
        school: "Uppsala",
        username: "ujg3833@edu.kunskapsskolan.se"
    }, {
        displayName: "Test-Live-Elev6(future abilities)",
        mail: "ujt1363@edu.kunskapsskolan.se",
        roles: ["STUDENT"],
        school: "Uppsala",
        username: "ujt1363@edu.kunskapsskolan.se"
    }, {
        displayName: "Test-Live-Lärare1",
        mail: "rickard.albertsson@kunskapsgymnasiet.se",
        roles: ['EMPLOYEE'],
        school: 'Uppsala',
        username: "rickard.albertsson@kunskapsgymnasiet.se"
    }, {
        displayName: "EDSTestUserGymnasium",
        mail: "uhh3200@edu.kunskapsgymnasiet.se",
        //mail: "UHH3200@EDU.KUNSKAPSGYMNASIET.SE",
        roles: ["STUDENT"],
        username: "EDSTestUser1",
        school: "KED",
        schoolType: "Gymnasium"
    }, {
        displayName: "vemendo.elev@kedschools.com",
        mail: "vemendo.elev@kedschools.com",
        roles: ["STUDENT"],
        username: "vemendo.elev@kedschools.com",
        school: "KED",
        schoolType: "Gymnasium"
    }, {
        displayName: "Medarbetare Nacka",
        mail: "medarbetare.nacka@kunskapsskolan.se",
        roles: ["EMPLOYEE"],
        username: "medarbetare.nacka/KS",
        school: "Nacka",
        schoolType: "Grundskolor"
    }, {
        displayName: "Medarbetare Globen",
        mail: "medarbetare.globen@kunskapsgymnasiet.se",
        roles: ["EMPLOYEE"],
        username: "medarbetare.globen/KS",
        school: "Globen",
        schoolType: "Gymnasium"
    }, {
        displayName: "Elev Globen",
        mail: "elev.globen@edu.kunskapsgymnasiet.se",
        schoolGrade: 2,
        roles: ['STUDENT'],
        username: "elev.globen",
        school: "Globen",
        schoolType: "Gymnasium"
    }, {
        displayName: "Elev Borås",
        mail: "elev.boras@edu.kunskapsskolan.se",
        schoolGrade: 7,
        roles: ['STUDENT'],
        username: "elev.boras",
        school: "Borås",
        schoolType: "Grundskolor"
    }, {
        displayName: "Elev Borlänge",
        mail: "elev.borlange@edu.kunskapsskolan.se",
        schoolGrade: 9,
        roles: ['STUDENT'],
        username: 'elev.borlange/KS',
        school: 'Borlänge',
        schoolType: "Gymnasium"
    }, {
        displayName: "Roll-lös",
        mail: "none@kunskapsskolan.se",
        username: "none",
        roles: []
    }];


/***/ }),

/***/ "./src/test/set-current-user.ts":
/*!**************************************!*\
  !*** ./src/test/set-current-user.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _data_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/users */ "./src/test/data/users.ts");
/* harmony import */ var _utils_query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/query-string */ "./src/utils/query-string.ts");



var username = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_2__["parseQueryString"])(location.search).user;
if (username) {
    var user = _data_users__WEBPACK_IMPORTED_MODULE_1__["users"].find(function (u) { return u.username === username; });
    if (user) {
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser = user;
    }
}
var _a = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_2__["parseQueryString"])(location.search, { toLower: true }), role = _a.role, school = _a.school, schoolgrade = _a.schoolgrade;
if (_globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser) {
    if (role) {
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser.roles = role.split(',');
    }
    if (school) {
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser.school = school;
    }
    if (schoolgrade) {
        var schoolGradeInt = parseInt(schoolgrade);
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser.schoolGrade = schoolGradeInt;
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser.schoolType = schoolGradeInt > 9 ? "Gymnasium" : "Grundskolor";
    }
}


/***/ }),

/***/ "./src/test/test-config.ts":
/*!*********************************!*\
  !*** ./src/test/test-config.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/KED.cfg */ "./src/globals/KED.cfg.ts");

_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_LOCALE = 'sv';
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_SCHOOL_LOCALE = 'sv';


/***/ }),

/***/ "./src/test/testpage-courseviewer.tsx":
/*!********************************************!*\
  !*** ./src/test/testpage-courseviewer.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _set_current_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-current-user */ "./src/test/set-current-user.ts");
/* harmony import */ var _global_setters_set_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-setters/set-all */ "./src/global-setters/set-all.ts");
/* harmony import */ var _test_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-config */ "./src/test/test-config.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_choose_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/choose-user */ "./src/test/utils/choose-user.tsx");
/* harmony import */ var _components_course_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/course-viewer */ "./src/components/course-viewer/index.tsx");
/* harmony import */ var _utils_include_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/include-css */ "./src/test/utils/include-css.ts");
/* harmony import */ var _utils_include_optional_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/include-optional-css */ "./src/utils/include-optional-css.ts");
/* harmony import */ var _components_utility_components_SetupLanguageIntl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utility-components/SetupLanguageIntl */ "./src/components/utility-components/SetupLanguageIntl.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");

// <Initialization>
 // Emulate server-side script to set current user
 // Client-side initialization

// </Initialization>









Object(_utils_include_optional_css__WEBPACK_IMPORTED_MODULE_9__["includeOptionalCSS"])({
    v1: [
        'css/courseviewer.css',
        'css/dialog.css',
        'css/grid-css-patch.css'
    ],
    includeCSS: _utils_include_css__WEBPACK_IMPORTED_MODULE_8__["includeCSS"],
    version: 7,
    NOCSS: '6',
    versionFolder: 'css/delta-css/courseviewer'
});
var _App = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](_App, _super);
    function _App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _App.prototype.render = function () {
        var intl = this.props.intl;
        return _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser ?
            react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_12__["LanguageContext"].Provider, { value: { intl: intl } },
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_course_viewer__WEBPACK_IMPORTED_MODULE_7__["CourseViewer"], { courseBuilderUrl: "coursebuilder.html" })) :
            react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_utils_choose_user__WEBPACK_IMPORTED_MODULE_6__["ChooseUser"], null);
    };
    return _App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]));
var App = Object(_components_utility_components_SetupLanguageIntl__WEBPACK_IMPORTED_MODULE_10__["setupIntl"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_11__["injectIntl"])(_App));
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/test/utils/choose-user.tsx":
/*!****************************************!*\
  !*** ./src/test/utils/choose-user.tsx ***!
  \****************************************/
/*! exports provided: ChooseUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseUser", function() { return ChooseUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/users */ "./src/test/data/users.ts");


function ChooseUser() {
    var select;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "sv-layout" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "V\u00E4lj anv\u00E4ndare"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "login-table" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Namn"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Roller"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "E-post"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Skola"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, _data_users__WEBPACK_IMPORTED_MODULE_1__["users"].map(function (_a) {
                var username = _a.username, displayName = _a.displayName, mail = _a.mail, school = _a.school, roles = _a.roles;
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: mail, onClick: function () { return location.search = "?user=" + username; } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, displayName),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { style: roles.length === 0 ? { fontStyle: 'italic' } : {} }, roles.length === 0 ? "saknar roller" : roles.join(', ')),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, mail),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { style: school ? {} : { fontStyle: 'italic' } }, school || "saknar skola"));
            }))));
}
;


/***/ }),

/***/ "./src/test/utils/include-css.ts":
/*!***************************************!*\
  !*** ./src/test/utils/include-css.ts ***!
  \***************************************/
/*! exports provided: includeCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includeCSS", function() { return includeCSS; });
function resolve(uri) {
    var href = location.protocol + "//" + location.host + location.pathname;
    var pLastSlash = href.lastIndexOf('/');
    return href.substr(0, pLastSlash + 1) + uri;
}
function includeCSS(cssFile) {
    document.write('<link rel="stylesheet" href="' + resolve(cssFile) + '" />');
}


/***/ }),

/***/ "./src/translations/en.json":
/*!**********************************!*\
  !*** ./src/translations/en.json ***!
  \**********************************/
/*! exports provided: addeditsubtask.deleteSubtask, addeditsubtask.editSubtask, addeditsubtask.nameLabel, addeditsubtask.addSubtask, calendar.currentDate, calendar.fullDayEventLocation, calendar.loadCalendarEvents, calendar.loadingCalendar, calendar.weekNumber, common.addDescriptionPlhd, common.cancel, common.changesNotSavedErrorOccured, common.changesNotSavedUnauthorized, common.descriptionLabel, common.errorSavingData, common.linkLabel, common.loading, common.nameLabel, common.save, common.saved, common.saving, common.remove, customTask.addWorkGoalPrimarySchoolTitle, customTask.addWorkGoalGymnasiumSchoolTitle, customTask.enterNamePlhd, learningGoalsLost.overall, task.addSubtask, task.editTask, task.editWorkGoals, task.enterTaskNamePlhd, task.removeDeadline, task.removeThisTask, task.removeWorkGoals, task.setDeadline, task.setDeadlineLabel, task.subTasks, task.targetNameLabel, task.taskNameLabel, task.whatShouldYouDoPlhd, taskList.nextWeekTask, taskList.lastWeekTask, taskList.currentWeekTask, taskList.removeTaskFromWeeklyPlanning, taskList.addTaskToWeeklyPlanning, termplanner.comments, termplanner.course, termplanner.edsGoalGrades, termplanner.englishLanguage, termplanner.finalStep, termplanner.firstTerm, termplanner.hindiLanguage, termplanner.ict, termplanner.loadingTermplanner, termplanner.maths, termplanner.modernLanguage, termplanner.noFinalStepAvailable, termplanner.secondTerm, termplanner.termPlanning, termplanner.weekNumber, termplanner.chartsBoxTitle, termplanner.yoga, tutorNoteDialog.weekComment, test.chooseComponentLabel, test.pageDescription, userTasks.addLearningGoal, userTasks.deleteLearningGoal, userTasks.primarySchoolGoals, userTasks.gymnasiumSchoolGoals, weekNotebook.title, weekplanner.addLearningGoalGymnasiumSchool, weekplanner.addLearningGoalPrimarySchool, weekplanner.addLearningGoalPrimarySchoolTitle, weekplanner.addLearningGoalGymnasiumSchoolTitle, weekplanner.confirmRemoveLearningObjectives, weekplanner.copyPreviousWeekTaks, weekplanner.emptyLearningGoalErr, weekplanner.evaluation, weekplanner.evaluationDescription, weekplanner.learningGoalPrimary, weekplanner.learningGoalGymnasium, weekplanner.logBook, weekplanner.nameCannotBeEmpty, weekplanner.nameMustNotBeEmpty, weekplanner.strategy, weekplanner.strategyAndEvaluation, weekplanner.strategyDescription, weekplanner.weekNumber, wysiwyg.bold, wysiwyg.code, wysiwyg.heading1, wysiwyg.heading2, wysiwyg.heading3, wysiwyg.image, wysiwyg.imagePromptMsg, wysiwyg.italic, wysiwyg.line, wysiwyg.link, wysiwyg.olist, wysiwyg.paragraph, wysiwyg.quote, wysiwyg.strikethrough, wysiwyg.ulist, wysiwyg.underline, teacherView.coursesViewTitle, teacherView.assignmentsViewTitle, teacherView.assignmentsViewDescription, teacherView.noUploadedAssignmentsForModule, teacherView.assignmentStudentName, teacherView.assignmentFileName, teacherView.assignmentSubmittedAt, teacherView.assignmentReport, teacherView.assignmentGrade, teacherView.noTaskAssignments, teacherView.notSubmittedAssignments, teacherView.remindBtn, teacherView.filterByStudygroupsPlaceholder, teacherView.emailRemindersSentMsg, teacherView.sendEmailAtLeastOneRecipientErr, teacherView.emailReminderInProgress, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"addeditsubtask.deleteSubtask\":\"Delete subtask\",\"addeditsubtask.editSubtask\":\"Edit subtask\",\"addeditsubtask.nameLabel\":\"Name of subtask\",\"addeditsubtask.addSubtask\":\"Add sub-task\",\"calendar.currentDate\":\"Week {week}, {year}\",\"calendar.fullDayEventLocation\":\"Place: {location}\",\"calendar.loadCalendarEvents\":\"Load calendar events...\",\"calendar.loadingCalendar\":\"Loading calendars... (listing...)\",\"calendar.weekNumber\":\"W{weekNumber}\",\"common.addDescriptionPlhd\":\"Add description...\",\"common.cancel\":\"Cancel\",\"common.changesNotSavedErrorOccured\":\"An error occured while saving data. Your changes were not saved.\",\"common.changesNotSavedUnauthorized\":\"The changes were not saved due to insufficient authority\",\"common.descriptionLabel\":\"Description\",\"common.errorSavingData\":\"An error occured while saving data.\",\"common.linkLabel\":\"Link\",\"common.loading\":\"Loading...\",\"common.nameLabel\":\"Name\",\"common.save\":\" Save\",\"common.saved\":\" Saved\",\"common.saving\":\"Saving\",\"common.remove\":\"Delete\",\"customTask.addWorkGoalPrimarySchoolTitle\":\"Add own working goal\",\"customTask.addWorkGoalGymnasiumSchoolTitle\":\"Add own working goal\",\"customTask.enterNamePlhd\":\"Enter Name...\",\"learningGoalsLost.overall\":\"Overall\",\"task.addSubtask\":\"Add subtask\",\"task.editTask\":\"Edit task\",\"task.editWorkGoals\":\"Edit working goal\",\"task.enterTaskNamePlhd\":\"Enter the name of task...\",\"task.removeDeadline\":\"Delete deadline\",\"task.removeThisTask\":\"Delete this task\",\"task.removeWorkGoals\":\"Delete working goal\",\"task.setDeadline\":\"Set deadline\",\"task.setDeadlineLabel\":\"Set deadline...\",\"task.subTasks\":\"Subtasks\",\"task.targetNameLabel\":\"Name of working goal\",\"task.taskNameLabel\":\"Name of task\",\"task.whatShouldYouDoPlhd\":\"What should you do?\",\"taskList.nextWeekTask\":\"for next week (w{week})\",\"taskList.lastWeekTask\":\"for last week (w{week})\",\"taskList.currentWeekTask\":\"for week {week}\",\"taskList.removeTaskFromWeeklyPlanning\":\"Delete task from your weekly planning {week}\",\"taskList.addTaskToWeeklyPlanning\":\"Add task to your weekly planning {week}\",\"termplanner.comments\":\"Comments\",\"termplanner.course\":\"Theme course\",\"termplanner.edsGoalGrades\":\"Intermediate goals\",\"termplanner.englishLanguage\":\"Eng\",\"termplanner.finalStep\":\"Final Step\",\"termplanner.firstTerm\":\"FT {year}\",\"termplanner.hindiLanguage\":\"Hindi\",\"termplanner.ict\":\"ICT\",\"termplanner.loadingTermplanner\":\"Loading Termplanner\",\"termplanner.maths\":\"Maths\",\"termplanner.modernLanguage\":\"MFL\",\"termplanner.noFinalStepAvailable\":\"No final step available\",\"termplanner.secondTerm\":\"ST {year}\",\"termplanner.termPlanning\":\"Term planner\",\"termplanner.weekNumber\":\"Week\",\"termplanner.chartsBoxTitle\":\"Progress Charts\",\"termplanner.yoga\":\"Yoga\",\"tutorNoteDialog.weekComment\":\"Note for week {weekNumber}\",\"test.chooseComponentLabel\":\"Component\",\"test.pageDescription\":\"Test page for the components on the starting page\",\"userTasks.addLearningGoal\":\"Own working goal\",\"userTasks.deleteLearningGoal\":\"Delete learning goal and its tasks\",\"userTasks.primarySchoolGoals\":\"Own learning goal\",\"userTasks.gymnasiumSchoolGoals\":\"Own learning goal\",\"weekNotebook.title\":\"Notepad\",\"weekplanner.addLearningGoalGymnasiumSchool\":\"Goal:\",\"weekplanner.addLearningGoalPrimarySchool\":\"Goal:\",\"weekplanner.addLearningGoalPrimarySchoolTitle\":\"Add own learning goal\",\"weekplanner.addLearningGoalGymnasiumSchoolTitle\":\"Add own learning goal\",\"weekplanner.confirmRemoveLearningObjectives\":\"Delete learning goal and {learningGoalsNumber} tasks?\",\"weekplanner.copyPreviousWeekTaks\":\"Copy from previous week\",\"weekplanner.emptyLearningGoalErr\":\"The learning goal cannot be empty\",\"weekplanner.evaluation\":\"Evaluation\",\"weekplanner.evaluationDescription\":\"Reflection on your work effort and your chosen strategies during the week. Evaluate in relation to your goals.\",\"weekplanner.learningGoalPrimary\":\"Own learning goal\",\"weekplanner.learningGoalGymnasium\":\"Own learning goal\",\"weekplanner.logBook\":\"Logbook\",\"weekplanner.nameCannotBeEmpty\":\"Name cannot be empty\",\"weekplanner.nameMustNotBeEmpty\":\"Name must not be empty\",\"weekplanner.strategy\":\"Strategy\",\"weekplanner.strategyAndEvaluation\":\"Strategy & Evaluation\",\"weekplanner.strategyDescription\":\"What I should do to learn\",\"weekplanner.weekNumber\":\"Week {weekNumber}\",\"wysiwyg.bold\":\"Bold\",\"wysiwyg.code\":\"Code\",\"wysiwyg.heading1\":\"Heading 1\",\"wysiwyg.heading2\":\"Heading 2\",\"wysiwyg.heading3\":\"Heading 3\",\"wysiwyg.image\":\"Insert image\",\"wysiwyg.imagePromptMsg\":\"Enter the URL of the image\",\"wysiwyg.italic\":\"Italics\",\"wysiwyg.line\":\"Horizontal line\",\"wysiwyg.link\":\"Insert link\",\"wysiwyg.olist\":\"Ordered list\",\"wysiwyg.paragraph\":\"Paragraph\",\"wysiwyg.quote\":\"Quote\",\"wysiwyg.strikethrough\":\"Strikethrough\",\"wysiwyg.ulist\":\"Bullet list\",\"wysiwyg.underline\":\"Underline\",\"teacherView.coursesViewTitle\":\"My Courses\",\"teacherView.assignmentsViewTitle\":\"Assignments\",\"teacherView.assignmentsViewDescription\":\"Here you cand find all the assignments you supervise. Click on the right menu to select course. The details are displayed below. You can open/hide each module.\",\"teacherView.noUploadedAssignmentsForModule\":\"No assignments have been uploaded for this module\",\"teacherView.assignmentStudentName\":\"Pupil\",\"teacherView.assignmentFileName\":\"Filename\",\"teacherView.assignmentSubmittedAt\":\"Submitted\",\"teacherView.assignmentReport\":\"Report\",\"teacherView.assignmentGrade\":\"Grade\",\"teacherView.noTaskAssignments\":\"No assignments uploaded for this task\",\"teacherView.notSubmittedAssignments\":\"Not submitted\",\"teacherView.remindBtn\":\"Remind\",\"teacherView.filterByStudygroupsPlaceholder\":\"Select study groups\",\"teacherView.emailRemindersSentMsg\":\"Reminders successfully sent\",\"teacherView.sendEmailAtLeastOneRecipientErr\":\"At least one student should be selected\",\"teacherView.emailReminderInProgress\":\"In progress\"}");

/***/ }),

/***/ "./src/translations/sv.json":
/*!**********************************!*\
  !*** ./src/translations/sv.json ***!
  \**********************************/
/*! exports provided: addeditsubtask.addSubtask, addeditsubtask.deleteSubtask, addeditsubtask.editSubtask, addeditsubtask.nameLabel, calendar.currentDate, calendar.fullDayEventLocation, calendar.loadCalendarEvents, calendar.loadingCalendar, calendar.weekNumber, common.addDescriptionPlhd, common.cancel, common.changesNotSavedErrorOccured, common.changesNotSavedUnauthorized, common.descriptionLabel, common.errorSavingData, common.linkLabel, common.loading, common.nameLabel, common.save, common.saved, common.saving, common.remove, customTask.addWorkGoalPrimarySchoolTitle, customTask.addWorkGoalGymnasiumSchoolTitle, customTask.enterNamePlhd, learningGoalsLost.overall, task.addSubtask, task.editTask, task.editWorkGoals, task.enterTaskNamePlhd, task.removeDeadline, task.removeThisTask, task.removeWorkGoals, task.setDeadline, task.setDeadlineLabel, task.subTasks, task.targetNameLabel, task.taskNameLabel, task.whatShouldYouDoPlhd, taskList.nextWeekTask, taskList.lastWeekTask, taskList.currentWeekTask, taskList.removeTaskFromWeeklyPlanning, taskList.addTaskToWeeklyPlanning, termplanner.comments, termplanner.course, termplanner.edsGoalGrades, termplanner.englishLanguage, termplanner.swedishLanguage, termplanner.finalStep, termplanner.firstTerm, termplanner.hindiLanguage, termplanner.loadingTermplanner, termplanner.modernLanguageFullname, termplanner.mathsFullname, termplanner.noFinalStepAvailable, termplanner.swedishLanguageFullName, termplanner.englishLanguageFullName, termplanner.maths, termplanner.modernLanguage, termplanner.secondTerm, termplanner.termPlanning, termplanner.weekNumber, termplanner.chartsBoxTitle, tutorNoteDialog.weekComment, test.chooseComponentLabel, test.pageDescription, userTasks.addLearningGoal, userTasks.deleteLearningGoal, userTasks.primarySchoolGoals, userTasks.gymnasiumSchoolGoals, weekNotebook.title, weekplanner.addLearningGoalGymnasiumSchool, weekplanner.addLearningGoalPrimarySchool, weekplanner.addLearningGoalPrimarySchoolTitle, weekplanner.addLearningGoalGymnasiumSchoolTitle, weekplanner.confirmRemoveLearningObjectives, weekplanner.copyPreviousWeekTaks, weekplanner.emptyLearningGoalErr, weekplanner.evaluation, weekplanner.evaluationDescription, weekplanner.learningGoalPrimary, weekplanner.learningGoalGymnasium, weekplanner.logBook, weekplanner.nameCannotBeEmpty, weekplanner.nameMustNotBeEmpty, weekplanner.strategy, weekplanner.strategyAndEvaluation, weekplanner.strategyDescription, weekplanner.weekNumber, wysiwyg.bold, wysiwyg.code, wysiwyg.heading1, wysiwyg.heading2, wysiwyg.heading3, wysiwyg.image, wysiwyg.imagePromptMsg, wysiwyg.italic, wysiwyg.line, wysiwyg.link, wysiwyg.olist, wysiwyg.paragraph, wysiwyg.quote, wysiwyg.strikethrough, wysiwyg.ulist, wysiwyg.underline, teacherView.coursesViewTitle, teacherView.assignmentsViewTitle, teacherView.assignmentsViewDescription, teacherView.noUploadedAssignmentsForModule, teacherView.assignmentStudentName, teacherView.assignmentFileName, teacherView.assignmentSubmittedAt, teacherView.assignmentReport, teacherView.assignmentGrade, teacherView.noTaskAssignments, teacherView.notSubmittedAssignments, teacherView.remindBtn, teacherView.filterByStudygroupsPlaceholder, teacherView.emailRemindersSentMsg, teacherView.sendEmailAtLeastOneRecipientErr, teacherView.emailReminderInProgress, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"addeditsubtask.addSubtask\":\"Lägg till underuppgift\",\"addeditsubtask.deleteSubtask\":\"Ta bort underuppgift\",\"addeditsubtask.editSubtask\":\"Redigera underuppgift\",\"addeditsubtask.nameLabel\":\"Underuppgiftens namn\",\"calendar.currentDate\":\"Vecka {week}, {year}\",\"calendar.fullDayEventLocation\":\"Plats: {location}\",\"calendar.loadCalendarEvents\":\"Load calendar events...\",\"calendar.loadingCalendar\":\"Loading calendars... (listing...)\",\"calendar.weekNumber\":\"V{weekNumber}\",\"common.addDescriptionPlhd\":\"Lägg till en beskrivning...\",\"common.cancel\":\"Avbryt\",\"common.changesNotSavedErrorOccured\":\"För tillfället problem att spara data. Dina ändringar sparades inte.\",\"common.changesNotSavedUnauthorized\":\"Ändringarna sparades inte p.g.a. otillräcklig behörighet.\",\"common.descriptionLabel\":\"Beskrivning\",\"common.errorSavingData\":\"Kunde inte spara.\",\"common.linkLabel\":\"Länk\",\"common.loading\":\"Laddar...\",\"common.nameLabel\":\"Namn\",\"common.save\":\" Spara\",\"common.saved\":\" Sparad\",\"common.saving\":\"Sparar...\",\"common.remove\":\"Ta bort\",\"customTask.addWorkGoalPrimarySchoolTitle\":\"Lägg till eget arbetsmål\",\"customTask.addWorkGoalGymnasiumSchoolTitle\":\"Lägg till uppgift\",\"customTask.enterNamePlhd\":\"Ange namn...\",\"learningGoalsLost.overall\":\"Övergripande\",\"task.addSubtask\":\"Lägg till underuppgift\",\"task.editTask\":\"Redigera uppgift\",\"task.editWorkGoals\":\"Redigera arbetsmål\",\"task.enterTaskNamePlhd\":\"Ange uppgiftens namn...\",\"task.removeDeadline\":\"Ta bort deadline\",\"task.removeThisTask\":\"Ta bort den här uppgiften\",\"task.removeWorkGoals\":\"Ta bort arbetsmål\",\"task.setDeadline\":\"Set deadline\",\"task.setDeadlineLabel\":\"Ange deadline...\",\"task.subTasks\":\"Underuppgifter\",\"task.targetNameLabel\":\"Arbetsmålets namn\",\"task.taskNameLabel\":\"Uppgiftens namn\",\"task.whatShouldYouDoPlhd\":\"Vad ska du göra?\",\"taskList.nextWeekTask\":\"för nästa vecka (v{week})\",\"taskList.lastWeekTask\":\"för förra veckan (v{week})\",\"taskList.currentWeekTask\":\"för vecka {week}\",\"taskList.removeTaskFromWeeklyPlanning\":\"Ta bort uppgiften från egen veckoplanering {week}\",\"taskList.addTaskToWeeklyPlanning\":\"Lägg till uppgiften i egen veckoplanering {week}\",\"termplanner.comments\":\"Kommentar\",\"termplanner.course\":\"Kurs\",\"termplanner.edsGoalGrades\":\"Terminsmål\",\"termplanner.englishLanguage\":\"Eng\",\"termplanner.swedishLanguage\":\"Sv/SvA\",\"termplanner.finalStep\":\"Slutsteg\",\"termplanner.firstTerm\":\"HT {year}\",\"termplanner.hindiLanguage\":\"\",\"termplanner.loadingTermplanner\":\"V.g. vänta medan terminsplaner laddas...\",\"termplanner.modernLanguageFullname\":\"M.språk\",\"termplanner.mathsFullname\":\"Matematik\",\"termplanner.noFinalStepAvailable\":\"Inget slutsteg tillgängligt\",\"termplanner.swedishLanguageFullName\":\"Svenska\",\"termplanner.englishLanguageFullName\":\"Engelska\",\"termplanner.maths\":\"Ma\",\"termplanner.modernLanguage\":\"M.spr\",\"termplanner.secondTerm\":\"VT {year}\",\"termplanner.termPlanning\":\"Terminsplanering\",\"termplanner.weekNumber\":\"Vecka\",\"termplanner.chartsBoxTitle\":\"Min progression\",\"tutorNoteDialog.weekComment\":\"Kommentar för vecka {weekNumber}\",\"test.chooseComponentLabel\":\"Komponent\",\"test.pageDescription\":\"Testsida för komponenter till nya startsidan\",\"userTasks.addLearningGoal\":\"Eget arbetsmål\",\"userTasks.deleteLearningGoal\":\"Ta bort lärandemålet och dess uppgifter\",\"userTasks.primarySchoolGoals\":\"Egna lärandemål\",\"userTasks.gymnasiumSchoolGoals\":\"Övriga uppgifter\",\"weekNotebook.title\":\"Anteckningar\",\"weekplanner.addLearningGoalGymnasiumSchool\":\"Rubrik:\",\"weekplanner.addLearningGoalPrimarySchool\":\"Mål:\",\"weekplanner.addLearningGoalPrimarySchoolTitle\":\"Lägg till eget lärandemål\",\"weekplanner.addLearningGoalGymnasiumSchoolTitle\":\"Lägg till rubrik\",\"weekplanner.confirmRemoveLearningObjectives\":\"Ta bort lärandemål samt {learningGoalsNumber} uppgifter?\",\"weekplanner.copyPreviousWeekTaks\":\"Kopiera ej klara från föregående vecka\",\"weekplanner.emptyLearningGoalErr\":\"Lärandemålet kan inte vara tomt\",\"weekplanner.evaluation\":\"Utvärdering\",\"weekplanner.evaluationDescription\":\"Reflektion kring din arbetsinsats och dina valda strategier under veckan.Utvärdera i förhållande till dina mål.\",\"weekplanner.learningGoalPrimary\":\"Eget lärandemål\",\"weekplanner.learningGoalGymnasium\":\"Uppgift\",\"weekplanner.logBook\":\"Loggbok\",\"weekplanner.nameCannotBeEmpty\":\"Namnet kan inte vara tomt\",\"weekplanner.nameMustNotBeEmpty\":\"Namnet får inte vara tomt\",\"weekplanner.strategy\":\"Strategi\",\"weekplanner.strategyAndEvaluation\":\"Strategi & Utvärdering\",\"weekplanner.strategyDescription\":\"Hur jag ska göra för att lära mig.\",\"weekplanner.weekNumber\":\"Vecka {weekNumber}\",\"wysiwyg.bold\":\"Fetstil\",\"wysiwyg.code\":\"Programkod\",\"wysiwyg.heading1\":\"Rubrik 1\",\"wysiwyg.heading2\":\"Rubrik 2\",\"wysiwyg.heading3\":\"Rubrik 3\",\"wysiwyg.image\":\"Infoga bild\",\"wysiwyg.imagePromptMsg\":\"Ange bildens URL\",\"wysiwyg.italic\":\"Kursiv\",\"wysiwyg.line\":\"Vågrät linje\",\"wysiwyg.link\":\"Infoga länk\",\"wysiwyg.olist\":\"Ordnad lista\",\"wysiwyg.paragraph\":\"Paragraf\",\"wysiwyg.quote\":\"Citat\",\"wysiwyg.strikethrough\":\"Struken\",\"wysiwyg.ulist\":\"Punktlista\",\"wysiwyg.underline\":\"Understruken\",\"teacherView.coursesViewTitle\":\"Mina kurser/ uppgifter\",\"teacherView.assignmentsViewTitle\":\"Inlämningsuppgifter\",\"teacherView.assignmentsViewDescription\":\"Här listas samtliga inlämningsuppgifter i din/dina kurser du handleder. Klicka till höger för att välja kurs. Kursens uppgifter syns nedan. Du kan öppna/dölja varje modul.\",\"teacherView.noUploadedAssignmentsForModule\":\"No assignments have been uploaded for this module\",\"teacherView.assignmentStudentName\":\"Elev\",\"teacherView.assignmentFileName\":\"Filnamn\",\"teacherView.assignmentSubmittedAt\":\"Inlamnat\",\"teacherView.assignmentReport\":\"Rapport\",\"teacherView.assignmentGrade\":\"Niva\",\"teacherView.noTaskAssignments\":\"Inga uppdrag uppladdade för denna uppgift\",\"teacherView.notSubmittedAssignments\":\"Ej lämnat in\",\"teacherView.remindBtn\":\"Påminn\",\"teacherView.filterByStudygroupsPlaceholder\":\"Välj studiegrupp\",\"teacherView.emailRemindersSentMsg\":\"E-postpåminnelsen har skickats\",\"teacherView.sendEmailAtLeastOneRecipientErr\":\"Minst en student ska väljas\",\"teacherView.emailReminderInProgress\":\"Pågående\"}");

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

/***/ "./src/utils/include-optional-css.ts":
/*!*******************************************!*\
  !*** ./src/utils/include-optional-css.ts ***!
  \*******************************************/
/*! exports provided: includeOptionalCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includeOptionalCSS", function() { return includeOptionalCSS; });
function includeOptionalCSS(_a) {
    var v1 = _a.v1, versionFolder = _a.versionFolder, version = _a.version, includeCSS = _a.includeCSS, NOCSS = _a.NOCSS;
    if (!NOCSS) {
        if (v1)
            v1.forEach(function (cssFile) { return includeCSS(cssFile); });
    }
    var cssVer = parseInt(NOCSS);
    if (isNaN(cssVer))
        cssVer = 1;
    for (var ver = cssVer + 1; ver <= version; ++ver) {
        includeCSS(versionFolder + "/v" + ver + ".css");
    }
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

/***/ "./src/utils/pending-job.ts":
/*!**********************************!*\
  !*** ./src/utils/pending-job.ts ***!
  \**********************************/
/*! exports provided: PendingJob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingJob", function() { return PendingJob; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var PendingJob = /** @class */ (function () {
    function PendingJob(callback) {
        this.timeoutId = null;
        this.cancelled = false;
        this.pending = false;
        this.isJobExecuting = false;
        this.jobCallback = callback;
    }
    PendingJob.prototype.triggerChange = function (throttle) {
        var _this = this;
        if (this.cancelled)
            return;
        this.pending = true;
        if (this.timeoutId !== null)
            clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(function () { return _this.launchJob(); }, throttle);
    };
    PendingJob.prototype.stop = function () {
        if (this.timeoutId !== null)
            clearTimeout(this.timeoutId);
        this.timeoutId = null;
        this.cancelled = true;
    };
    PendingJob.prototype.launchJob = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.cancelled)
                            return [2 /*return*/];
                        if (!this.pending)
                            return [2 /*return*/];
                        if (this.isJobExecuting)
                            return [2 /*return*/];
                        this.timeoutId = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        this.isJobExecuting = true;
                        this.pending = false;
                        return [4 /*yield*/, this.jobCallback()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.isJobExecuting = false;
                        return [7 /*endfinally*/];
                    case 4:
                        if (!this.pending) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.launchJob()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return PendingJob;
}());



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

/***/ "./src/utils/weekutil.ts":
/*!*******************************!*\
  !*** ./src/utils/weekutil.ts ***!
  \*******************************/
/*! exports provided: KEDWeek, getNextWeekDate, getPrevWeekDate, getAdjustedWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEDWeek", function() { return KEDWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextWeekDate", function() { return getNextWeekDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrevWeekDate", function() { return getPrevWeekDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdjustedWeek", function() { return getAdjustedWeek; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

function KEDWeek(year, week) {
    var m = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(year, 1, 1)).week(week);
    var res = {
        year: year,
        week: week,
        notBefore: m.clone().startOf('week').add(-2, 'days').toDate().getTime(),
        notAfter: m.clone().startOf('week').add(5, 'days').toDate().getTime()
    };
    return res;
}
function getNextWeekDate(date) {
    var nextDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(date).add(1, 'week');
    //Set the 01.01 of the next year in case the next week is in the same year 
    //and the previous week is the last week of the year
    if (date.week() === date.weeksInYear() && nextDate.year() === date.year()) {
        return { adjusted: true, nextDate: moment__WEBPACK_IMPORTED_MODULE_0___default()(date.year() + 1 + "-01-01").toDate() };
    }
    return { adjusted: false, nextDate: nextDate.toDate() };
}
function getPrevWeekDate(date) {
    var prevDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(date).add(-1, 'week');
    //Set the 01.01 of the current year in case the prev week is in the previous year
    if (date.week() === 2 && prevDate.year() !== date.year()) {
        return { adjusted: true, nextDate: moment__WEBPACK_IMPORTED_MODULE_0___default()(date.year() + "-01-01").toDate() };
    }
    return { adjusted: false, nextDate: prevDate.toDate() };
}
function getAdjustedWeek(m) {
    var clone = m.clone();
    return m.weekday() >= 5 ? // Lördag 00:00 / Söndag 00:00?
        m.week() + 1 : // Tillhör nästa vecka
        m.week();
}
/*export function getWeekLimits (m: Moment) {
  const clonedSwedish = m.clone().locale('sv');
  const limits = {
    notBefore: clonedSwedish.startOf('week').add(-2, 'days'),
    notAfter: clonedSwedish.startOf('week').add(5, 'days')
  };
}
*/


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
//# sourceMappingURL=testpagecourseviewer.js.map