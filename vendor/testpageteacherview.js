var testpageteacherview =
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
/******/ 		"testpageteacherview": 0
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
/******/ 	__webpack_require__.p = "/vendor/";
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
/******/ 	deferredModules.push(["./src/test/testpage-teacherview.tsx","vendors"]);
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

module.exports = JSON.parse("{\"accessClaimDefinitions\":{\"email\":\"{http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress}\",\"role\":\"{http://schemas.microsoft.com/ws/2008/06/identity/claims/role}\",\"school\":\"{school}\",\"schoolRole\":\"{school}/{http://schemas.microsoft.com/ws/2008/06/identity/claims/role}\",\"tutorFor\":\"{tutorFor}\"},\"realmClaim\":\"realm\",\"specialRoles\":{\"userRole\":\"USER\",\"adminRole\":\"ADMIN\"},\"defaultAccessClaimTypes\":[\"role\"],\"defaultAcl\":[\"role:USER:R\"],\"tables\":{\"branches\":{\"accessClaimTypes\":[\"role\",\"schoolRole\",\"email\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"*\"],\"schoolRole\":[\"*\"],\"role\":[\"*\"]}},\"relationships\":{\"parents\":\"branches\",\"approvedChildren\":\"branches\"},\"isPublic\":true},\"global\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"relationships\":{\"courseInstances\":\"courseInstances\"},\"isPublic\":true},\"emailTemplates\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"isPublic\":false},\"courseInstances\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"USER\":{\"schoolRole\":[\"*\"],\"role\":[\"*\"]}},\"defaultAcl\":[\"role:USER:R\",\"schoolRole:{school}/EMPLOYEE:S\"],\"relationships\":{\"abilities\":\"abilities\",\"centralContent\":\"central-content\",\"knowledgeRequirements\":\"knowledge-requirements\",\"blocks\":\"courseBlocks\",\"tabs\":\"courseTabs\"},\"isPublic\":true},\"courseBlocks\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"USER\":{\"schoolRole\":[\"*\"],\"role\":[\"*\"]}},\"defaultAcl\":[\"role:USER:R\",\"schoolRole:{school}/EMPLOYEE:S\"],\"relationships\":{\"abilities\":\"abilities\",\"centralContent\":\"central-content\",\"knowledgeRequirements\":\"knowledge-requirements\",\"tabs\":\"courseTabs\",\"tasks\":\"tasks\"},\"isPublic\":true},\"courseTabs\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"USER\":{\"schoolRole\":[\"*\"],\"role\":[\"*\"]}},\"defaultAcl\":[\"role:USER:R\",\"schoolRole:{school}/EMPLOYEE:S\"],\"relationships\":{\"abilities\":\"abilities\",\"centralContent\":\"central-content\",\"knowledgeRequirements\":\"knowledge-requirements\",\"contents\":\"courseContents\"},\"isPublic\":true},\"courseContents\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"USER\":{\"schoolRole\":[\"*\"],\"role\":[\"*\"]}},\"defaultAcl\":[\"role:USER:R\",\"schoolRole:{school}/EMPLOYEE:S\"],\"relationships\":{\"tasks\":\"tasks\"},\"isPublic\":true},\"weekplans\":{\"accessClaimTypes\":[\"email\",\"tutorFor\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\",\"{tutorFor}:*\"],\"tutorFor\":[\"{tutorFor}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"isPublic\":false},\"weekplans-ks\":{\"accessClaimTypes\":[\"email\",\"tutorFor\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\",\"{tutorFor}:*\"],\"tutorFor\":[\"{tutorFor}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"isPublic\":false},\"usertasks\":{\"accessClaimTypes\":[\"email\",\"schoolRole\",\"tutorFor\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\",\"{tutorFor}:*\"],\"schoolRole\":[\"{school}/EMPLOYEE:*\"],\"tutorFor\":[\"{tutorFor}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"relationships\":{\"task\":\"tasks\",\"course\":\"courses\"},\"isPublic\":false},\"userhiddencourses\":{\"accessClaimTypes\":[\"email\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"relationships\":{},\"isPublic\":false},\"usercalendarvisibility\":{\"accessClaimTypes\":[\"email\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"relationships\":{},\"isPublic\":false},\"subjects\":{\"relationships\":{\"courseTemplates\":\"courses\",\"abilities\":\"abilities\"},\"isPublic\":true},\"schools\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"relationships\":{\"courses\":\"courses\",\"activeCourses\":\"courses\"},\"isPublic\":true},\"courses\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"EMPLOYEE\":{\"schoolRole\":[\"{school}/EMPLOYEE:*\"],\"role\":[\"USER:R\"]}},\"defaultAcl\":[\"schoolRole:{school}/EMPLOYEE:*\"],\"relationships\":{\"templateChain\":\"courses\",\"centralContent\":\"central-content\",\"knowledgeRequirements\":\"knowledge-requirements\",\"abilities\":\"abilities\",\"images\":\"images\",\"tasks\":\"tasks\"},\"isPublic\":true},\"tasks\":{\"accessClaimTypes\":[\"role\",\"schoolRole\"],\"sharingAccessPerRole\":{\"EMPLOYEE\":{\"schoolRole\":[\"{school}/EMPLOYEE:*\"],\"role\":[\"USER:R\"]}},\"defaultAcl\":[\"schoolRole:{school}/EMPLOYEE:S\",\"role:USER:R\"],\"relationships\":{\"knowledgeRequirements\":\"knowledge-requirements\",\"centralContent\":\"central-content\",\"abilities\":\"abilities\"},\"isPublic\":true},\"images\":{\"accessClaimTypes\":[\"role\",\"schoolRole\",\"email\"],\"sharingAccessPerRole\":{\"EMPLOYEE\":{\"schoolRole\":[\"{school}/EMPLOYEE:*\"],\"role\":[\"USER:R\"]},\"USER\":{\"email\":[\"{email}:*\"]}},\"isPublic\":true},\"central-content\":{\"accessClaimTypes\":[\"role\"],\"defaultAcl\":[\"role:USER:R\"],\"isPublic\":true},\"knowledge-requirements\":{\"accessClaimTypes\":[\"role\"],\"defaultAcl\":[\"role:USER:R\"],\"isPublic\":true},\"abilities\":{\"accessClaimTypes\":[\"role\"],\"defaultAcl\":[\"role:USER:R\"],\"isPublic\":true},\"seenStudentAssignments\":{\"accessClaimTypes\":[\"email\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"relationships\":{},\"isPublic\":true},\"notes\":{\"accessClaimTypes\":[\"email\"],\"sharingAccessPerRole\":{\"USER\":{\"email\":[\"{email}:*\"]}},\"defaultAcl\":[\"email:{email}:S\"],\"relationships\":{},\"isPublic\":false}}}");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/* empty/unused harmony star reexport *//* harmony import */ var kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! kedbackend-schema/schema.json */ "./kedbackend/KED.Backend.API/schema.json");
var kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! kedbackend-schema/schema.json */ "./kedbackend/KED.Backend.API/schema.json", 1);










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
            var query, tableSchema_1, includedTables, res, _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        query = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, options);
                        // Allow empty lists in hasEdgesFrom, hasEdgesTo and ids but don't query server.
                        // Sending an empty list in one of those should always result in an empty response.
                        if (query.hasEdgesFrom && query.hasEdgesFrom.length === 0)
                            return [2 /*return*/, []];
                        if (query.hasEdgesTo && query.hasEdgesTo.length === 0)
                            return [2 /*return*/, []];
                        if (query.ids && query.ids.length === 0)
                            return [2 /*return*/, []];
                        if (typeof location === 'undefined' || !location.search.includes('dontUseSP')) {
                            tableSchema_1 = kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_6__["tables"][table];
                            includedTables = null;
                            if (query.include) {
                                if (tableSchema_1)
                                    includedTables = [].concat(query.include)
                                        .filter(function (graph) { return graph !== 'acl'; })
                                        .map(function (graph) { return tableSchema_1.relationships[graph]; });
                            }
                            if (!query.from &&
                                !query.to &&
                                [query.hasEdgesFrom, query.hasEdgesTo, query.ids].filter(function (x) { return !!x; }).length === 1 && // Seems the 'general' SP case DOES NOT perform well currently! Avoid it!
                                (tableSchema_1 && tableSchema_1.isPublic) &&
                                (!includedTables || includedTables.every(function (table) { return kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_6__["tables"][table] && kedbackend_schema_schema_json__WEBPACK_IMPORTED_MODULE_6__["tables"][table].isPublic; }))) {
                                query.flags = (query.flags || []).concat('useSP');
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
    BatchRunner.prototype.merge = function (branchId, targetBranchId, tagToMerge) {
        this.mutationRequests.push({ op: 'merge', branchId: branchId, targetBranchId: targetBranchId, tagToMerge: tagToMerge });
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _delta_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delta-merge */ "./kedbackend/js/dist/js/ked-backend-repo/delta-merge.js");


function applyMutationsOnDeltas(_a, deltas, mutations, optimistic, userDisplayName) {
    var branchId = _a.branchId, tag = _a.tag;
    var _loop_1 = function (m) {
        switch (m.op) {
            case 'add-related':
                //
                // AddRelated RepoMutation
                //
                if (m.branchId === branchId &&
                    (!tag || (m.sourceDoc.tags && (m.sourceDoc.tags.includes(tag) ||
                        m.relatedDoc.tags.includes(tag))))) {
                    deltas = [{
                            type: 'add',
                            sourceId: m.id,
                            sourceName: m.sourceDoc.name,
                            sourceTags: m.sourceDoc.tags,
                            targetTags: m.relatedDoc.tags,
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
                if (m.branchId === branchId && !optimistic) {
                    if (m.tagToMerge) {
                        deltas = deltas.filter(function (d) {
                            return !(('sourceTags' in d) && d.sourceTags.includes(m.tagToMerge) ||
                                ('targetTags' in d) && d.targetTags.includes(m.tagToMerge));
                        });
                    }
                    else {
                        deltas = [];
                    }
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
                if (m.branchId === branchId &&
                    (!tag || (m.sourceDoc.tags && (m.sourceDoc.tags.includes(tag) ||
                        m.relatedDoc.tags.includes(tag))))) {
                    deltas = [{
                            type: 'remove',
                            sourceId: m.id,
                            targetId: m.relatedDoc.id,
                            targetName: m.relatedDoc.name,
                            sourceName: m.sourceDoc.name,
                            sourceTags: m.sourceDoc.tags,
                            targetTags: m.relatedDoc.tags,
                            label: m.graphProp,
                            sourceTable: m.table,
                            contributor: userDisplayName,
                            dateTime: Date.now(),
                            $meta: optimistic ? 'adding' : 'persisted'
                        }].concat(deltas);
                }
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
                    return "continue"; // m applies to other branch
                if (tag && (!m.doc.tags || !m.doc.tags.includes(tag)))
                    return "continue"; // m applies to tags not listened for
                {
                    var idx = deltas.findIndex(function (delta) {
                        return delta.type === 'modify' &&
                            delta.targetId === m.id;
                    });
                    if (idx < 0) {
                        deltas = [{
                                type: 'modify',
                                table: m.table,
                                targetId: m.id,
                                targetName: m.targetName,
                                targetTags: m.doc.tags,
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
                                    targetTags: m.doc.tags,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
                var newValue = Object(_apply_mutations_on_deltas__WEBPACK_IMPORTED_MODULE_2__["applyMutationsOnDeltas"])(cacheEntry.query, cacheEntry.value, mutations, optimistic, this.getUserDisplayName());
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
        var cacheEntry = this.lookup[query.branchId + query.tag];
        if (!cacheEntry) {
            cacheEntry = new DeltaCacheEntry(this.getClient(), query);
            this.lookup[query.branchId + query.tag] = cacheEntry;
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
                            delete _this.lookup[query.branchId + query.tag];
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../observable */ "./kedbackend/js/dist/js/observable/index.js");


var DeltaCollection = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DeltaCollection, _super);
    function DeltaCollection(deltaCache, query) {
        var _this = _super.call(this, function (observer) { return _this.deltaCache.subscribe(query, observer); }) || this;
        _this.deltaCache = deltaCache;
        _this.query = query;
        return _this;
    }
    DeltaCollection.prototype.tag = function (tag) {
        return new DeltaCollection(this.deltaCache, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.query, { tag: tag }));
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
        if (ids.some(function (id) { return !id; }))
            throw new Error("Invalid id list given to Collection.hasEdgesFrom(" + JSON.stringify(ids) + ")");
        var hef = this.addToQueryArrayProp("hasEdgesFrom", ids);
        return hef;
    };
    KedBackendCollection.prototype.hasEdgesTo = function (ids) {
        if (ids.some(function (id) { return !id; }))
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
        if (ids.some(function (id) { return !id; }))
            throw new Error("Invalid id list given to Collection.ids(" + JSON.stringify(ids) + ")");
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
                doc: doc,
                deltaDoc: changes,
                targetName: doc.name
            }], debounce);
    };
    KedBackendCollection.prototype.addRelated = function (_a, label, relatedDoc) {
        var id = _a.id, tags = _a.tags, name = _a.name;
        this.repo.writer.mutate([{
                op: 'add-related',
                table: this.table,
                branchId: this.query.branchId,
                sourceDoc: { tags: tags || [], name: name || "" },
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
    KedBackendCollection.prototype.removeRelated = function (_a, label, relatedDoc) {
        var id = _a.id, tags = _a.tags, name = _a.name;
        this.repo.writer.mutate([{
                op: 'remove-related',
                table: this.table,
                branchId: this.query.branchId,
                id: id,
                sourceDoc: { tags: tags || [], name: name || "" },
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
                                var _b;
                                var label = _a.label;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
    KedBackendRepo.prototype.merge = function (_a) {
        var _b = _a.targetBranchId, targetBranchId = _b === void 0 ? null : _b, _c = _a.tagToMerge, tagToMerge = _c === void 0 ? null : _c;
        if (!this.defaultQueryOptions.branchId)
            throw new Error("Cannot merge from master branch");
        this.writer.mutate([{
                op: 'merge',
                branchId: this.defaultQueryOptions.branchId,
                targetBranchId: targetBranchId,
                tagToMerge: tagToMerge
            }], 0);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
                        etagMutations = Object.keys(res_1.newEtags).map(function (id) {
                            //const mutation = mutations.find(m => 'id' in m && (m.id === id || (('relatedDoc' in m) && m.relatedDoc.id === id)));
                            //const doc = 'relatedDoc' in mutation ? mutation.relatedDoc : ('doc' in mutation && mutation.doc);
                            return {
                                op: 'update',
                                table: null,
                                id: id,
                                doc: {},
                                deltaDoc: { $etag: res_1.newEtags[id] },
                                targetName: null // We don't have the target name. But this mutation won't be visible in a DeltaCollection anyway, so it wont be used.
                            };
                        });
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
                    br.merge(m.branchId, m.targetBranchId, m.tagToMerge);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
var _FiberContext = {
    current: null,
};
var _global = (typeof self === 'undefined' ? global : self);
if (!_global["KEDFiberContext"]) {
    _global["KEDFiberContext"] = _FiberContext;
}
var stack = [];
var currentFiber = null;
var providers = [function () { return currentFiber; }];
/*export function pushFiber(fiber: Fiber) {
  stack.push(currentFiber);
  currentFiber = fiber;
}

export function popFiber(){
  currentFiber = stack.pop();
}*/
/*function setCurrentGetterFromProviders() {
  Object.defineProperty(_FiberContext, "current", {
    get: providers.reduce((p, c) => ()=>p() || c()),
    set: ()=>{throw new Error(`Use FiberContext.push() to change current fiber`)}
  });
}*/
var FiberContext = _global["KEDFiberContext"];
//# sourceMappingURL=fiber-context.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./kedbackend/js/dist/js/observable/index.js":
/*!***************************************************!*\
  !*** ./kedbackend/js/dist/js/observable/index.js ***!
  \***************************************************/
/*! exports provided: Observable, Value, Collection, Emitter, FiberContext, parallel */
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

/* harmony import */ var _parallel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parallel */ "./kedbackend/js/dist/js/observable/parallel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parallel", function() { return _parallel__WEBPACK_IMPORTED_MODULE_5__["parallel"]; });







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

/***/ "./kedbackend/js/dist/js/observable/parallel.js":
/*!******************************************************!*\
  !*** ./kedbackend/js/dist/js/observable/parallel.js ***!
  \******************************************************/
/*! exports provided: parallel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parallel", function() { return parallel; });
/** Promise.all() for suspense calls.
 *
 * Example:
 *   const [courses, tasks] = parallel([
 *     () => db.courses.toValue().read(),
 *     () => db.tasks.toValue().read()
 *   ]);
 * Example with map():
 *   const results = parallel(inputs.map(input => () => someApi.suspenseQuery(input)));
 *
 * It will make sure to call the suspenders in parallell and suspend once against caller
 * until all queries have resolved.
 *
 * @param suspenders Functions that retrieve a result using suspense.
 */
function parallel(suspenders) {
    var allSet = true;
    var result = suspenders.map(function (s) {
        try {
            return s();
        }
        catch (errorOrPromise) {
            if (!errorOrPromise || typeof errorOrPromise.then !== 'function') {
                // Ordinary error (not a suspension)
                throw errorOrPromise;
            }
            // Suspension. We will need to suspend with Promise.all()
            allSet = false;
            return errorOrPromise; // Returns the promise to await
        }
    });
    if (!allSet)
        throw Promise.all(result); // Promise.all() can handle a mix of values and promises.
    return result;
}
//# sourceMappingURL=parallel.js.map

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            var subscriptions = currentFiber.subscriptions, observer = currentFiber.observer, observables = currentFiber.observables; // TODO: Don't use subscriptions or observer (when <Observe> is gone)
            if (observables) {
                subscription.unsubscribe();
                observables.push(this); // New impl
            }
            else {
                // Old impl used by <Observe />
                subscriptions.push(subscription);
                notify = observer;
            }
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
/*! exports provided: Observable, Value, Collection, Emitter, FiberContext, parallel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_dist_js_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dist/js/observable */ "./kedbackend/js/dist/js/observable/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _js_dist_js_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return _js_dist_js_observable__WEBPACK_IMPORTED_MODULE_0__["Value"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return _js_dist_js_observable__WEBPACK_IMPORTED_MODULE_0__["Collection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return _js_dist_js_observable__WEBPACK_IMPORTED_MODULE_0__["Emitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FiberContext", function() { return _js_dist_js_observable__WEBPACK_IMPORTED_MODULE_0__["FiberContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parallel", function() { return _js_dist_js_observable__WEBPACK_IMPORTED_MODULE_0__["parallel"]; });




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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.esm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmurhash2_32_gc);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.esm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e, m).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e, m).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        switch (d.constructor) {
          case Array:
            for (var c = 0, e = d.length; c < e; ++c) {
              T(d[c]);
            }

            break;

          case Function:
            S[A++] = d;
            break;

          case Boolean:
            Y = !!d | 0;
        }

    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/create-emotion/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/create-emotion/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.esm.js");
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.esm.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4__);






var hyphenateRegex = /[A-Z]|^ms/g;
var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (styleName) {
  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
  if (value == null || typeof value === 'boolean') {
    return '';
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
  !isNaN(value) && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    return oldProcessStyleValue(key, value);
  };
}

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'function':
        if (true) {
          console.error('Passing functions to cx is deprecated and will be removed in the next major version of Emotion.\n' + 'Please call the function before passing it to cx.');
        }

        toAdd = classnames([arg()]);
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};
var isBrowser = typeof document !== 'undefined';

/*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side

// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function makeStyleTag(opts) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', opts.key || '');

  if (opts.nonce !== undefined) {
    tag.setAttribute('nonce', opts.nonce);
  }

  tag.appendChild(document.createTextNode('')) // $FlowFixMe
  ;
  (opts.container !== undefined ? opts.container : document.head).appendChild(tag);
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = "development" === 'production'; // the big drawback here is that the css won't be editable in devtools

    this.tags = [];
    this.ctr = 0;
    this.opts = options;
  }

  var _proto = StyleSheet.prototype;

  _proto.inject = function inject() {
    if (this.injected) {
      throw new Error('already injected!');
    }

    this.tags[0] = makeStyleTag(this.opts);
    this.injected = true;
  };

  _proto.speedy = function speedy(bool) {
    if (this.ctr !== 0) {
      // cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})
      throw new Error("cannot change speedy now");
    }

    this.isSpeedy = !!bool;
  };

  _proto.insert = function insert(rule, sourceMap) {
    // this is the ultrafast version, works across browsers
    if (this.isSpeedy) {
      var tag = this.tags[this.tags.length - 1];
      var sheet = sheetForTag(tag);

      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn('illegal rule', rule); // eslint-disable-line no-console
        }
      }
    } else {
      var _tag = makeStyleTag(this.opts);

      this.tags.push(_tag);

      _tag.appendChild(document.createTextNode(rule + (sourceMap || '')));
    }

    this.ctr++;

    if (this.ctr % 65000 === 0) {
      this.tags.push(makeStyleTag(this.opts));
    }
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0; // todo - look for remnants in document.styleSheets

    this.injected = false;
  };

  return StyleSheet;
}();

function createEmotion(context, options) {
  if (context.__SECRET_EMOTION__ !== undefined) {
    return context.__SECRET_EMOTION__;
  }

  if (options === undefined) options = {};
  var key = options.key || 'css';

  if (true) {
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var current;

  function insertRule(rule) {
    current += rule;

    if (isBrowser) {
      sheet.insert(rule, currentSourceMap);
    }
  }

  var insertionPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4___default()(insertRule);
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var caches = {
    registered: {},
    inserted: {},
    nonce: options.nonce,
    key: key
  };
  var sheet = new StyleSheet(options);

  if (isBrowser) {
    // 🚀
    sheet.inject();
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](stylisOptions);
  stylis.use(options.stylisPlugins)(insertionPlugin);
  var currentSourceMap = '';

  function handleInterpolation(interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
      return '';
    }

    switch (typeof interpolation) {
      case 'boolean':
        return '';

      case 'function':
        if (interpolation.__emotion_styles !== undefined) {
          var selector = interpolation.toString();

          if (selector === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          return selector;
        }

        if (this === undefined && "development" !== 'production') {
          console.error('Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        return handleInterpolation.call(this, this === undefined ? interpolation() : // $FlowFixMe
        interpolation(this.mergedProps, this.context), couldBeSelectorInterpolation);

      case 'object':
        return createStringFromObject.call(this, interpolation);

      default:
        var cached = caches.registered[interpolation];
        return couldBeSelectorInterpolation === false && cached !== undefined ? cached : interpolation;
    }
  }

  var objectToStringCache = new WeakMap();

  function createStringFromObject(obj) {
    if (objectToStringCache.has(obj)) {
      // $FlowFixMe
      return objectToStringCache.get(obj);
    }

    var string = '';

    if (Array.isArray(obj)) {
      obj.forEach(function (interpolation) {
        string += handleInterpolation.call(this, interpolation, false);
      }, this);
    } else {
      Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] !== 'object') {
          if (caches.registered[obj[key]] !== undefined) {
            string += key + "{" + caches.registered[obj[key]] + "}";
          } else {
            string += processStyleName(key) + ":" + processStyleValue(key, obj[key]) + ";";
          }
        } else {
          if (key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string' && caches.registered[obj[key][0]] === undefined) {
            obj[key].forEach(function (value) {
              string += processStyleName(key) + ":" + processStyleValue(key, value) + ";";
            });
          } else {
            string += key + "{" + handleInterpolation.call(this, obj[key], false) + "}";
          }
        }
      }, this);
    }

    objectToStringCache.set(obj, string);
    return string;
  }

  var name;
  var stylesWithLabel;
  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;

  var createClassName = function createClassName(styles, identifierName) {
    return Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_2__["default"])(styles + identifierName) + identifierName;
  };

  if (true) {
    var oldCreateClassName = createClassName;
    var sourceMappingUrlPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;

    createClassName = function createClassName(styles, identifierName) {
      return oldCreateClassName(styles.replace(sourceMappingUrlPattern, function (sourceMap) {
        currentSourceMap = sourceMap;
        return '';
      }), identifierName);
    };
  }

  var createStyles = function createStyles(strings) {
    var stringMode = true;
    var styles = '';
    var identifierName = '';

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation.call(this, strings, false);
    } else {
      styles += strings[0];
    }

    for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    interpolations.forEach(function (interpolation, i) {
      styles += handleInterpolation.call(this, interpolation, styles.charCodeAt(styles.length - 1) === 46 // .
      );

      if (stringMode === true && strings[i + 1] !== undefined) {
        styles += strings[i + 1];
      }
    }, this);
    stylesWithLabel = styles;
    styles = styles.replace(labelPattern, function (match, p1) {
      identifierName += "-" + p1;
      return '';
    });
    name = createClassName(styles, identifierName);
    return styles;
  };

  if (true) {
    var oldStylis = stylis;

    stylis = function stylis(selector, styles) {
      oldStylis(selector, styles);
      currentSourceMap = '';
    };
  }

  function insert(scope, styles) {
    if (caches.inserted[name] === undefined) {
      current = '';
      stylis(scope, styles);
      caches.inserted[name] = current;
    }
  }

  var css = function css() {
    var styles = createStyles.apply(this, arguments);
    var selector = key + "-" + name;

    if (caches.registered[selector] === undefined) {
      caches.registered[selector] = stylesWithLabel;
    }

    insert("." + selector, styles);
    return selector;
  };

  var keyframes = function keyframes() {
    var styles = createStyles.apply(this, arguments);
    var animation = "animation-" + name;
    insert('', "@keyframes " + animation + "{" + styles + "}");
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    var styles = createStyles.apply(this, arguments);
    insert('', styles);
  };

  function getRegisteredStyles(registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (caches.registered[className] !== undefined) {
        registeredStyles.push(className);
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }

  function merge(className, sourceMap) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registeredStyles, className);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css(registeredStyles, sourceMap);
  }

  function cx() {
    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classNames[_key2] = arguments[_key2];
    }

    return merge(classnames(classNames));
  }

  function hydrateSingleId(id) {
    caches.inserted[id] = true;
  }

  function hydrate(ids) {
    ids.forEach(hydrateSingleId);
  }

  function flush() {
    if (isBrowser) {
      sheet.flush();
      sheet.inject();
    }

    caches.inserted = {};
    caches.registered = {};
  }

  if (isBrowser) {
    var chunks = document.querySelectorAll("[data-emotion-" + key + "]");
    Array.prototype.forEach.call(chunks, function (node) {
      // $FlowFixMe
      sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]); // $FlowFixMe

      node.getAttribute("data-emotion-" + key).split(' ').forEach(hydrateSingleId);
    });
  }

  var emotion = {
    flush: flush,
    hydrate: hydrate,
    cx: cx,
    merge: merge,
    getRegisteredStyles: getRegisteredStyles,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    css: css,
    sheet: sheet,
    caches: caches
  };
  context.__SECRET_EMOTION__ = emotion;
  return emotion;
}

/* harmony default export */ __webpack_exports__["default"] = (createEmotion);


/***/ }),

/***/ "./node_modules/dom-helpers/class/addClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/addClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/hasClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/hasClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/removeClass.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/class/removeClass.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/downloadjs/download.js":
/*!*********************************************!*\
  !*** ./node_modules/downloadjs/download.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//download.js v4.2, by dandavis; 2008-2016. [MIT] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function () {

	return function download(data, strFileName, strMimeType) {

		var self = window, // this script is only for browsers anyway...
			defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
			mimeType = strMimeType || defaultMime,
			payload = data,
			url = !strFileName && !strMimeType && payload,
			anchor = document.createElement("a"),
			toString = function(a){return String(a);},
			myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
			fileName = strFileName || "download",
			blob,
			reader;
			myBlob= myBlob.call ? myBlob.bind(self) : Blob ;
	  
		if(String(this)==="true"){ //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
			payload=[payload, mimeType];
			mimeType=payload[0];
			payload=payload[1];
		}


		if(url && url.length< 2048){ // if no filename and no mime, assume a url was passed as the only argument
			fileName = url.split("/").pop().split("?")[0];
			anchor.href = url; // assign href prop to temp anchor
		  	if(anchor.href.indexOf(url) !== -1){ // if the browser determines that it's a potentially valid url path:
        		var ajax=new XMLHttpRequest();
        		ajax.open( "GET", url, true);
        		ajax.responseType = 'blob';
        		ajax.onload= function(e){ 
				  download(e.target.response, fileName, defaultMime);
				};
        		setTimeout(function(){ ajax.send();}, 0); // allows setting custom ajax headers using the return:
			    return ajax;
			} // end if valid url?
		} // end if url?


		//go ahead and download dataURLs right away
		if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)){
		
			if(payload.length > (1024*1024*1.999) && myBlob !== toString ){
				payload=dataUrlToBlob(payload);
				mimeType=payload.type || defaultMime;
			}else{			
				return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
					navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
					saver(payload) ; // everyone else can save dataURLs un-processed
			}
			
		}else{//not data url, is it a string with special needs?
			if(/([\x80-\xff])/.test(payload)){			  
				var i=0, tempUiArr= new Uint8Array(payload.length), mx=tempUiArr.length;
				for(i;i<mx;++i) tempUiArr[i]= payload.charCodeAt(i);
			 	payload=new myBlob([tempUiArr], {type: mimeType});
			}		  
		}
		blob = payload instanceof myBlob ?
			payload :
			new myBlob([payload], {type: mimeType}) ;


		function dataUrlToBlob(strUrl) {
			var parts= strUrl.split(/[:;,]/),
			type= parts[1],
			decoder= parts[2] == "base64" ? atob : decodeURIComponent,
			binData= decoder( parts.pop() ),
			mx= binData.length,
			i= 0,
			uiArr= new Uint8Array(mx);

			for(i;i<mx;++i) uiArr[i]= binData.charCodeAt(i);

			return new myBlob([uiArr], {type: type});
		 }

		function saver(url, winMode){

			if ('download' in anchor) { //html5 A[download]
				anchor.href = url;
				anchor.setAttribute("download", fileName);
				anchor.className = "download-js-link";
				anchor.innerHTML = "downloading...";
				anchor.style.display = "none";
				document.body.appendChild(anchor);
				setTimeout(function() {
					anchor.click();
					document.body.removeChild(anchor);
					if(winMode===true){setTimeout(function(){ self.URL.revokeObjectURL(anchor.href);}, 250 );}
				}, 66);
				return true;
			}

			// handle non-a[download] safari as best we can:
			if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
				if(/^data:/.test(url))	url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				if(!window.open(url)){ // popup blocked, offer direct download:
					if(confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")){ location.href=url; }
				}
				return true;
			}

			//do iframe dataURL download (old ch+FF):
			var f = document.createElement("iframe");
			document.body.appendChild(f);

			if(!winMode && /^data:/.test(url)){ // force a mime that will download:
				url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
			}
			f.src=url;
			setTimeout(function(){ document.body.removeChild(f); }, 333);

		}//end saver




		if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
			return navigator.msSaveBlob(blob, fileName);
		}

		if(self.URL){ // simple fast and modern way using Blob and URL:
			saver(self.URL.createObjectURL(blob), true);
		}else{
			// handle non-Blob()+non-URL browsers:
			if(typeof blob === "string" || blob.constructor===toString ){
				try{
					return saver( "data:" +  mimeType   + ";base64,"  +  self.btoa(blob)  );
				}catch(y){
					return saver( "data:" +  mimeType   + "," + encodeURIComponent(blob)  );
				}
			}

			// Blob but not URL support:
			reader=new FileReader();
			reader.onload=function(e){
				saver(this.result);
			};
			reader.readAsDataURL(blob);
		}
		return true;
	}; /* end download() */
}));


/***/ }),

/***/ "./node_modules/emotion/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/emotion/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: flush, hydrate, cx, merge, getRegisteredStyles, injectGlobal, keyframes, css, sheet, caches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return cx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return sheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caches", function() { return caches; });
/* harmony import */ var create_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-emotion */ "./node_modules/create-emotion/dist/index.esm.js");


var context = typeof global !== 'undefined' ? global : {};

var _createEmotion = Object(create_emotion__WEBPACK_IMPORTED_MODULE_0__["default"])(context),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    caches = _createEmotion.caches;



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrowserHistory", function() { return createBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHashHistory", function() { return createHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return locationsAreEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return createPath; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/index.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/index.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(resolve_pathname__WEBPACK_IMPORTED_MODULE_1__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(value_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(prompt == null, 'A history supports only one prompt at a time') : undefined;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : undefined;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Browser history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : undefined;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : undefined;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Hash history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot push state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : undefined;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot replace state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function index (resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


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

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "./node_modules/performance-now/lib/performance-now.js":
/*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/raf/index.js":
/*!***********************************!*\
  !*** ./node_modules/raf/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js")
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-input-autosize/lib/AutosizeInput.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-input-autosize/lib/AutosizeInput.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-router-dom/es/BrowserRouter.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-router-dom/es/BrowserRouter.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/es/Router.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createBrowserHistory"])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_4__["default"], { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

BrowserRouter.propTypes = {
  basename: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  forceRefresh: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  keyLength: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};


/* harmony default export */ __webpack_exports__["default"] = (BrowserRouter);

/***/ }),

/***/ "./node_modules/react-router-dom/es/HashRouter.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-dom/es/HashRouter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/es/Router.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createHashHistory"])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_4__["default"], { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

HashRouter.propTypes = {
  basename: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  hashType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["hashbang", "noslash", "slash"]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};


/* harmony default export */ __webpack_exports__["default"] = (HashRouter);

/***/ }),

/***/ "./node_modules/react-router-dom/es/Link.js":
/*!**************************************************!*\
  !*** ./node_modules/react-router-dom/es/Link.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    invariant__WEBPACK_IMPORTED_MODULE_2___default()(this.context.router, "You should not use <Link> outside a <Router>");

    invariant__WEBPACK_IMPORTED_MODULE_2___default()(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Link.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  replace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]).isRequired,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      replace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      createHref: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./node_modules/react-router-dom/es/MemoryRouter.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-router-dom/es/MemoryRouter.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_MemoryRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/MemoryRouter */ "./node_modules/react-router/es/MemoryRouter.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_MemoryRouter__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/NavLink.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/es/NavLink.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/es/Route.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/es/Link.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = _objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : _typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Route__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: _Link__WEBPACK_IMPORTED_MODULE_3__["default"].propTypes.to,
  exact: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  strict: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  activeStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  "aria-current": prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ }),

/***/ "./node_modules/react-router-dom/es/Prompt.js":
/*!****************************************************!*\
  !*** ./node_modules/react-router-dom/es/Prompt.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_Prompt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/Prompt */ "./node_modules/react-router/es/Prompt.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_Prompt__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/Redirect.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router-dom/es/Redirect.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_Redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/Redirect */ "./node_modules/react-router/es/Redirect.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_Redirect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/Route.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/es/Route.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_Route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/Route */ "./node_modules/react-router/es/Route.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_Route__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/Router.js":
/*!****************************************************!*\
  !*** ./node_modules/react-router-dom/es/Router.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/Router */ "./node_modules/react-router/es/Router.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_Router__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/StaticRouter.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-router-dom/es/StaticRouter.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_StaticRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/StaticRouter */ "./node_modules/react-router/es/StaticRouter.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_StaticRouter__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/Switch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-router-dom/es/Switch.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_Switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/Switch */ "./node_modules/react-router/es/Switch.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_Switch__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/generatePath.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-router-dom/es/generatePath.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_generatePath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/generatePath */ "./node_modules/react-router/es/generatePath.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_generatePath__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/es/index.js ***!
  \***************************************************/
/*! exports provided: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BrowserRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrowserRouter */ "./node_modules/react-router-dom/es/BrowserRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return _BrowserRouter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _HashRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HashRouter */ "./node_modules/react-router-dom/es/HashRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return _HashRouter__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/es/Link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _MemoryRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router-dom/es/MemoryRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return _MemoryRouter__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavLink */ "./node_modules/react-router-dom/es/NavLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return _NavLink__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router-dom/es/Prompt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return _Prompt__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router-dom/es/Redirect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return _Redirect__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/es/Route.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _Route__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/es/Router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _StaticRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router-dom/es/StaticRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return _StaticRouter__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Switch */ "./node_modules/react-router-dom/es/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router-dom/es/generatePath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return _generatePath__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router-dom/es/matchPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return _matchPath__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _withRouter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router-dom/es/withRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return _withRouter__WEBPACK_IMPORTED_MODULE_13__["default"]; });






























/***/ }),

/***/ "./node_modules/react-router-dom/es/matchPath.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/es/matchPath.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_matchPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/matchPath */ "./node_modules/react-router/es/matchPath.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_matchPath__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/withRouter.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-dom/es/withRouter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_withRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/withRouter */ "./node_modules/react-router/es/withRouter.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_withRouter__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router/es/MemoryRouter.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router/es/MemoryRouter.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router/es/Router.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createMemoryHistory"])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.");
  };

  MemoryRouter.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_4__["default"], { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

MemoryRouter.propTypes = {
  initialEntries: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  initialIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  keyLength: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};


/* harmony default export */ __webpack_exports__["default"] = (MemoryRouter);

/***/ }),

/***/ "./node_modules/react-router/es/Prompt.js":
/*!************************************************!*\
  !*** ./node_modules/react-router/es/Prompt.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    invariant__WEBPACK_IMPORTED_MODULE_2___default()(this.context.router, "You should not use <Prompt> outside a <Router>");

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Prompt.propTypes = {
  when: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      block: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Prompt);

/***/ }),

/***/ "./node_modules/react-router/es/Redirect.js":
/*!**************************************************!*\
  !*** ./node_modules/react-router/es/Redirect.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router/es/generatePath.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








/**
 * The public API for updating the location programmatically
 * with a component.
 */

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(this.context.router, "You should not use <Redirect> outside a <Router>");

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = Object(history__WEBPACK_IMPORTED_MODULE_4__["createLocation"])(prevProps.to);
    var nextTo = Object(history__WEBPACK_IMPORTED_MODULE_4__["createLocation"])(this.props.to);

    if (Object(history__WEBPACK_IMPORTED_MODULE_4__["locationsAreEqual"])(prevTo, nextTo)) {
      warning__WEBPACK_IMPORTED_MODULE_2___default()(false, "You tried to redirect to the same route you're currently on: " + ("\"" + nextTo.pathname + nextTo.search + "\""));
      return;
    }

    this.perform();
  };

  Redirect.prototype.computeTo = function computeTo(_ref) {
    var computedMatch = _ref.computedMatch,
        to = _ref.to;

    if (computedMatch) {
      if (typeof to === "string") {
        return Object(_generatePath__WEBPACK_IMPORTED_MODULE_5__["default"])(to, computedMatch.params);
      } else {
        return _extends({}, to, {
          pathname: Object(_generatePath__WEBPACK_IMPORTED_MODULE_5__["default"])(to.pathname, computedMatch.params)
        });
      }
    }

    return to;
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var push = this.props.push;

    var to = this.computeTo(this.props);

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Redirect.propTypes = {
  computedMatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, // private, from <Switch>
  push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  from: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]).isRequired
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      replace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }).isRequired,
    staticContext: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }).isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Redirect);

/***/ }),

/***/ "./node_modules/react-router/es/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router/es/Route.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router/es/matchPath.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var isEmptyChildren = function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    invariant__WEBPACK_IMPORTED_MODULE_1___default()(router, "You should not use <Route> or withRouter() outside a <Router>");

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return Object(_matchPath__WEBPACK_IMPORTED_MODULE_4__["default"])(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");

    warning__WEBPACK_IMPORTED_MODULE_0___default()(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");

    warning__WEBPACK_IMPORTED_MODULE_0___default()(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    warning__WEBPACK_IMPORTED_MODULE_0___default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    if (component) return match ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component, props) : null;

    if (render) return match ? render(props) : null;

    if (typeof children === "function") return children(props);

    if (children && !isEmptyChildren(children)) return react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children);

    return null;
  };

  return Route;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

Route.propTypes = {
  computedMatch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, // private, from <Switch>
  path: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  exact: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  strict: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  sensitive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  render: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node]),
  location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
Route.contextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    history: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
    route: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
    staticContext: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
  })
};
Route.childContextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Route);

/***/ }),

/***/ "./node_modules/react-router/es/Router.js":
/*!************************************************!*\
  !*** ./node_modules/react-router/es/Router.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    invariant__WEBPACK_IMPORTED_MODULE_1___default()(children == null || react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(children) === 1, "A <Router> may have only one child element");

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(this.props.history === nextProps.history, "You cannot change <Router history>");
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children) : null;
  };

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

Router.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};
Router.contextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
Router.childContextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./node_modules/react-router/es/StaticRouter.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router/es/StaticRouter.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router/es/Router.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = addLeadingSlash(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createURL = function createURL(location) {
  return typeof location === "string" ? location : Object(history__WEBPACK_IMPORTED_MODULE_4__["createPath"])(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "You cannot %s with <StaticRouter>", methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return addLeadingSlash(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = "PUSH";
      context.location = addBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_4__["createLocation"])(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = "REPLACE";
      context.location = addBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_4__["createLocation"])(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.");
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ["basename", "context", "location"]);

    var history = {
      createHref: this.createHref,
      action: "POP",
      location: stripBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_4__["createLocation"])(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

StaticRouter.propTypes = {
  basename: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  context: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object])
};
StaticRouter.defaultProps = {
  basename: "",
  location: "/"
};
StaticRouter.childContextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (StaticRouter);

/***/ }),

/***/ "./node_modules/react-router/es/Switch.js":
/*!************************************************!*\
  !*** ./node_modules/react-router/es/Switch.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router/es/matchPath.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(this.context.router, "You should not use <Switch> outside a <Router>");
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning__WEBPACK_IMPORTED_MODULE_2___default()(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    warning__WEBPACK_IMPORTED_MODULE_2___default()(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, function (element) {
      if (match == null && react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(element)) {
        var _element$props = element.props,
            pathProp = _element$props.path,
            exact = _element$props.exact,
            strict = _element$props.strict,
            sensitive = _element$props.sensitive,
            from = _element$props.from;

        var path = pathProp || from;

        child = element;
        match = Object(_matchPath__WEBPACK_IMPORTED_MODULE_4__["default"])(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }, route.match);
      }
    });

    return match ? react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Switch.contextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    route: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};


/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./node_modules/react-router/es/generatePath.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router/es/generatePath.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_0__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compileGenerator = function compileGenerator(pattern) {
  var cacheKey = pattern;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var compiledGenerator = path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default.a.compile(pattern);

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledGenerator;
    cacheCount++;
  }

  return compiledGenerator;
};

/**
 * Public API for generating a URL pathname from a pattern and parameters.
 */
var generatePath = function generatePath() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (pattern === "/") {
    return pattern;
  }
  var generator = compileGenerator(pattern);
  return generator(params, { pretty: true });
};

/* harmony default export */ __webpack_exports__["default"] = (generatePath);

/***/ }),

/***/ "./node_modules/react-router/es/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router/es/index.js ***!
  \***********************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router/es/MemoryRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router/es/Prompt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return _Prompt__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router/es/Redirect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return _Redirect__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Route */ "./node_modules/react-router/es/Route.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _Route__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router/es/Router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _StaticRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router/es/StaticRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return _StaticRouter__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Switch */ "./node_modules/react-router/es/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router/es/generatePath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return _generatePath__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router/es/matchPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return _matchPath__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _withRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router/es/withRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return _withRouter__WEBPACK_IMPORTED_MODULE_9__["default"]; });






















/***/ }),

/***/ "./node_modules/react-router/es/matchPath.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router/es/matchPath.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_0__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default()(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parent = arguments[2];

  if (typeof options === "string") options = { path: options };

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;


  if (path == null) return parent;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ __webpack_exports__["default"] = (matchPath);

/***/ }),

/***/ "./node_modules/react-router/es/withRouter.js":
/*!****************************************************!*\
  !*** ./node_modules/react-router/es/withRouter.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Route */ "./node_modules/react-router/es/Route.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ["wrappedComponentRef"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Route__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: function children(routeComponentProps) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, remainingProps, routeComponentProps, {
          ref: wrappedComponentRef
        }));
      }
    });
  };

  C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  };

  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(C, Component);
};

/* harmony default export */ __webpack_exports__["default"] = (withRouter);

/***/ }),

/***/ "./node_modules/react-select/dist/react-select.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/react-select/dist/react-select.esm.js ***!
  \************************************************************/
/*! exports provided: default, SelectBase, Async, makeAsyncSelect, AsyncCreatable, Creatable, makeCreatableSelect, createFilter, makeAnimated, components, mergeStyles, defaultTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBase", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return Async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsyncSelect", function() { return makeAsyncSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncCreatable", function() { return AsyncCreatable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creatable", function() { return Creatable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCreatableSelect", function() { return makeCreatableSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return createFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAnimated", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return mergeStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return defaultTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_7__);









function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, cssKey, state, className) {
  var arr = [cssKey, className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (_typeof(value) === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      raf__WEBPACK_IMPORTED_MODULE_5___default()(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}

function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        scrollTo(scrollParent, scrollDown);
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"".concat(placement, "\"."));
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, _defineProperty(_ref3, alignToControl(placement), '100%'), _defineProperty(_ref3, "backgroundColor", colors.neutral0), _defineProperty(_ref3, "borderRadius", borderRadius), _defineProperty(_ref3, "boxShadow", '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), _defineProperty(_ref3, "marginBottom", spacing.menuGutter), _defineProperty(_ref3, "marginTop", spacing.menuGutter), _defineProperty(_ref3, "position", 'absolute'), _defineProperty(_ref3, "width", '100%'), _defineProperty(_ref3, "zIndex", 1), _ref3;
}; // NOTE: internal only

var MenuPlacer =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuPlacer, _Component);

  function MenuPlacer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MenuPlacer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuPlacer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPlacement", function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getUpdatedProps", function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _objectSpread({}, _this.props, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    });

    return _this;
  }

  _createClass(MenuPlacer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);

  return MenuPlacer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(MenuPlacer, "contextTypes", {
  getPortalPlacement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
});

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  var cn = cx(
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('menu', props)), {
    menu: true
  }, className);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: cn
  }, innerProps, {
    ref: innerRef
  }), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('menuList', props)), {
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('noOptionsMessage', props)), {
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('loadingMessage', props)), {
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal =
/*#__PURE__*/
function (_Component2) {
  _inherits(MenuPortal, _Component2);

  function MenuPortal() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, MenuPortal);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(MenuPortal)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
      placement: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "getPortalPlacement", function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    });

    return _this2;
  }

  _createClass(MenuPortal, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        getPortalPlacement: this.getPortalPlacement
      };
    } // callback for occassions where the menu must "flip"

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          controlElement = _this$props2.controlElement,
          menuPlacement = _this$props2.menuPlacement,
          position = _this$props2.menuPosition,
          getStyles = _this$props2.getStyles;
      var isFixed = position === 'fixed'; // bail early if required elements aren't present

      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset: offset,
        position: position,
        rect: rect
      }; // same wrapper element whether fixed or portalled

      var menuWrapper = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('menuPortal', state))
      }, children);
      return appendTo ? Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["createPortal"])(menuWrapper, appendTo) : menuWrapper;
    }
  }]);

  return MenuPortal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(MenuPortal, "childContextTypes", {
  getPortalPlacement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
});

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    } // end fast-deep-equal
    // Custom handling for React


    for (i = length; i-- !== 0;) {
      key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    } // fast-deep-equal index.js 2.0.1


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
}

var diacritics = [{
  base: 'A',
  letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
}, {
  base: 'AA',
  letters: /[\uA732]/g
}, {
  base: 'AE',
  letters: /[\u00C6\u01FC\u01E2]/g
}, {
  base: 'AO',
  letters: /[\uA734]/g
}, {
  base: 'AU',
  letters: /[\uA736]/g
}, {
  base: 'AV',
  letters: /[\uA738\uA73A]/g
}, {
  base: 'AY',
  letters: /[\uA73C]/g
}, {
  base: 'B',
  letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
}, {
  base: 'C',
  letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
}, {
  base: 'D',
  letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
}, {
  base: 'DZ',
  letters: /[\u01F1\u01C4]/g
}, {
  base: 'Dz',
  letters: /[\u01F2\u01C5]/g
}, {
  base: 'E',
  letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
}, {
  base: 'F',
  letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
}, {
  base: 'G',
  letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
}, {
  base: 'H',
  letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
}, {
  base: 'I',
  letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
}, {
  base: 'J',
  letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
}, {
  base: 'K',
  letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
}, {
  base: 'L',
  letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
}, {
  base: 'LJ',
  letters: /[\u01C7]/g
}, {
  base: 'Lj',
  letters: /[\u01C8]/g
}, {
  base: 'M',
  letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
}, {
  base: 'N',
  letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
}, {
  base: 'NJ',
  letters: /[\u01CA]/g
}, {
  base: 'Nj',
  letters: /[\u01CB]/g
}, {
  base: 'O',
  letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
}, {
  base: 'OI',
  letters: /[\u01A2]/g
}, {
  base: 'OO',
  letters: /[\uA74E]/g
}, {
  base: 'OU',
  letters: /[\u0222]/g
}, {
  base: 'P',
  letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
}, {
  base: 'Q',
  letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
}, {
  base: 'R',
  letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
}, {
  base: 'S',
  letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
}, {
  base: 'T',
  letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
}, {
  base: 'TZ',
  letters: /[\uA728]/g
}, {
  base: 'U',
  letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
}, {
  base: 'V',
  letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
}, {
  base: 'VY',
  letters: /[\uA760]/g
}, {
  base: 'W',
  letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
}, {
  base: 'X',
  letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
}, {
  base: 'Y',
  letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
}, {
  base: 'Z',
  letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
}, {
  base: 'a',
  letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
}, {
  base: 'aa',
  letters: /[\uA733]/g
}, {
  base: 'ae',
  letters: /[\u00E6\u01FD\u01E3]/g
}, {
  base: 'ao',
  letters: /[\uA735]/g
}, {
  base: 'au',
  letters: /[\uA737]/g
}, {
  base: 'av',
  letters: /[\uA739\uA73B]/g
}, {
  base: 'ay',
  letters: /[\uA73D]/g
}, {
  base: 'b',
  letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
}, {
  base: 'c',
  letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
}, {
  base: 'd',
  letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
}, {
  base: 'dz',
  letters: /[\u01F3\u01C6]/g
}, {
  base: 'e',
  letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
}, {
  base: 'f',
  letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
}, {
  base: 'g',
  letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
}, {
  base: 'h',
  letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
}, {
  base: 'hv',
  letters: /[\u0195]/g
}, {
  base: 'i',
  letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
}, {
  base: 'j',
  letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
}, {
  base: 'k',
  letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
}, {
  base: 'l',
  letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
}, {
  base: 'lj',
  letters: /[\u01C9]/g
}, {
  base: 'm',
  letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
}, {
  base: 'n',
  letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
}, {
  base: 'nj',
  letters: /[\u01CC]/g
}, {
  base: 'o',
  letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
}, {
  base: 'oi',
  letters: /[\u01A3]/g
}, {
  base: 'ou',
  letters: /[\u0223]/g
}, {
  base: 'oo',
  letters: /[\uA74F]/g
}, {
  base: 'p',
  letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
}, {
  base: 'q',
  letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
}, {
  base: 'r',
  letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
}, {
  base: 's',
  letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
}, {
  base: 't',
  letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
}, {
  base: 'tz',
  letters: /[\uA729]/g
}, {
  base: 'u',
  letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
}, {
  base: 'v',
  letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
}, {
  base: 'vy',
  letters: /[\uA761]/g
}, {
  base: 'w',
  letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
}, {
  base: 'x',
  letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
}, {
  base: 'y',
  letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
}, {
  base: 'z',
  letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
}];
var stripDiacritics = function stripDiacritics(str) {
  for (var i = 0; i < diacritics.length; i++) {
    str = str.replace(diacritics[i].letters, diacritics[i].base);
  }

  return str;
};

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = _objectSpread({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

var A11yText = function A11yText(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", _extends({
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])({
      label: 'a11yText',
      zIndex: 9999,
      border: 0,
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: 1,
      width: 1,
      position: 'absolute',
      overflow: 'hidden',
      padding: 0,
      whiteSpace: 'nowrap',
      backgroundColor: 'red',
      color: 'blue'
    })
  }, props));
};

var DummyInput =
/*#__PURE__*/
function (_Component) {
  _inherits(DummyInput, _Component);

  function DummyInput() {
    _classCallCheck(this, DummyInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(DummyInput).apply(this, arguments));
  }

  _createClass(DummyInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          inProp = _this$props.in,
          out = _this$props.out,
          onExited = _this$props.onExited,
          appear = _this$props.appear,
          enter = _this$props.enter,
          exit = _this$props.exit,
          innerRef = _this$props.innerRef,
          emotion = _this$props.emotion,
          props = _objectWithoutProperties(_this$props, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
        ref: innerRef
      }, props, {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])({
          label: 'dummyInput',
          // get rid of any default styles
          background: 0,
          border: 0,
          fontSize: 'inherit',
          outline: 0,
          padding: 0,
          // important! without `width` browsers won't allow focus
          width: 1,
          // remove cursor on desktop
          color: 'transparent',
          // remove cursor on mobile whilst maintaining "scroll into view" behaviour
          left: -100,
          opacity: 0,
          position: 'relative',
          transform: 'scale(0)'
        })
      }));
    }
  }]);

  return DummyInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var NodeResolver =
/*#__PURE__*/
function (_Component) {
  _inherits(NodeResolver, _Component);

  function NodeResolver() {
    _classCallCheck(this, NodeResolver);

    return _possibleConstructorReturn(this, _getPrototypeOf(NodeResolver).apply(this, arguments));
  }

  _createClass(NodeResolver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.innerRef(Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.innerRef(null);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return NodeResolver;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var activeScrollLocks = 0;

var ScrollLock =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollLock, _Component);

  function ScrollLock() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScrollLock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScrollLock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "originalStyles", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "listenerOptions", {
      capture: false,
      passive: false
    });

    return _this;
  }

  _createClass(ScrollLock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!canUseDOM) return;
      var _this$props = this.props,
          accountForScrollbars = _this$props.accountForScrollbars,
          touchScrollTarget = _this$props.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style;

      if (accountForScrollbars) {
        // store any styles already applied to the body
        STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          _this2.originalStyles[key] = val;
        });
      } // apply the lock styles and padding if this is the first scroll lock


      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
        Object.keys(LOCK_STYLES).forEach(function (key) {
          var val = LOCK_STYLES[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });

        if (targetStyle) {
          targetStyle.paddingRight = "".concat(adjustedPadding, "px");
        }
      } // account for touch devices


      if (target && isTouchDevice()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', preventTouchMove, this.listenerOptions); // Allow scroll on provided target

        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      } // increment active scroll locks


      activeScrollLocks += 1;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (!canUseDOM) return;
      var _this$props2 = this.props,
          accountForScrollbars = _this$props2.accountForScrollbars,
          touchScrollTarget = _this$props2.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style; // safely decrement active scroll locks

      activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

      if (accountForScrollbars && activeScrollLocks < 1) {
        STYLE_KEYS.forEach(function (key) {
          var val = _this3.originalStyles[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      } // remove touch listeners


      if (target && isTouchDevice()) {
        target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ScrollLock;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(ScrollLock, "defaultProps", {
  accountForScrollbars: true
});

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref
var ScrollBlock =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ScrollBlock, _PureComponent);

  function ScrollBlock() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScrollBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScrollBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      touchScrollTarget: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getScrollTarget", function (ref) {
      if (ref === _this.state.touchScrollTarget) return;

      _this.setState({
        touchScrollTarget: ref
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "blurSelectInput", function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    });

    return _this;
  }

  _createClass(ScrollBlock, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isEnabled = _this$props.isEnabled;
      var touchScrollTarget = this.state.touchScrollTarget; // bail early if not enabled

      if (!isEnabled) return children;
      /*
       * Div
       * ------------------------------
       * blocks scrolling on non-body elements behind the menu
        * NodeResolver
       * ------------------------------
       * we need a reference to the scrollable element to "unlock" scroll on
       * mobile devices
        * ScrollLock
       * ------------------------------
       * actually does the scroll locking
       */

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.blurSelectInput,
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])({
          position: 'fixed',
          left: 0,
          bottom: 0,
          right: 0,
          top: 0
        })
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NodeResolver, {
        innerRef: this.getScrollTarget
      }, children), touchScrollTarget ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollLock, {
        touchScrollTarget: touchScrollTarget
      }) : null);
    }
  }]);

  return ScrollBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var ScrollCaptor =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollCaptor, _Component);

  function ScrollCaptor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScrollCaptor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScrollCaptor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isBottom", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isTop", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollTarget", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "touchStart", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cancelScroll", function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEventDelta", function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;
      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false; // reset bottom/top flags

      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }

      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      } // bottom limit


      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }

        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true; // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }

        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      } // cancel scroll


      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onWheel", function (event) {
      _this.handleEventDelta(event, event.deltaY);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchStart", function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchMove", function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;

      _this.handleEventDelta(event, deltaY);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getScrollTarget", function (ref) {
      _this.scrollTarget = ref;
    });

    return _this;
  }

  _createClass(ScrollCaptor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListening(this.scrollTarget);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListening(this.scrollTarget);
    }
  }, {
    key: "startListening",
    value: function startListening(el) {
      // bail early if no scroll available
      if (!el) return;
      if (el.scrollHeight <= el.clientHeight) return; // all the if statements are to appease Flow 😢

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "stopListening",
    value: function stopListening(el) {
      // bail early if no scroll available
      if (el.scrollHeight <= el.clientHeight) return; // all the if statements are to appease Flow 😢

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NodeResolver, {
        innerRef: this.getScrollTarget
      }, this.props.children);
    }
  }]);

  return ScrollCaptor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var ScrollCaptorSwitch =
/*#__PURE__*/
function (_Component2) {
  _inherits(ScrollCaptorSwitch, _Component2);

  function ScrollCaptorSwitch() {
    _classCallCheck(this, ScrollCaptorSwitch);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScrollCaptorSwitch).apply(this, arguments));
  }

  _createClass(ScrollCaptorSwitch, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isEnabled = _this$props2.isEnabled,
          props = _objectWithoutProperties(_this$props2, ["isEnabled"]);

      return isEnabled ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollCaptor, props) : this.props.children;
    }
  }]);

  return ScrollCaptorSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(ScrollCaptorSwitch, "defaultProps", {
  isEnabled: true
});

var instructionsAriaMessage = function instructionsAriaMessage(event) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isSearchable = context.isSearchable,
      isMulti = context.isMulti,
      label = context.label,
      isDisabled = context.isDisabled;

  switch (event) {
    case 'menu':
      return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu, press Tab to select the option and exit the menu.");

    case 'input':
      return "".concat(label ? label : 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');

    case 'value':
      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
  }
};
var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value,
      isDisabled = context.isDisabled;
  if (!value) return;

  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return "option ".concat(value, ", deselected.");

    case 'select-option':
      return isDisabled ? "option ".concat(value, " is disabled. Select another option.") : "option ".concat(value, ", selected.");
  }
};
var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return "value ".concat(getOptionLabel(focusedValue), " focused, ").concat(selectValue.indexOf(focusedValue) + 1, " of ").concat(selectValue.length, ".");
};
var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return "option ".concat(getOptionLabel(focusedOption), " focused").concat(focusedOption.isDisabled ? ' disabled' : '', ", ").concat(options.indexOf(focusedOption) + 1, " of ").concat(options.length, ".");
};
var resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return "".concat(screenReaderMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('container', props)), {
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(ValueContainer, _Component);

  function ValueContainer() {
    _classCallCheck(this, ValueContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ValueContainer).apply(this, arguments));
  }

  _createClass(ValueContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          cx = _this$props.cx,
          isMulti = _this$props.isMulti,
          getStyles = _this$props.getStyles,
          hasValue = _this$props.hasValue;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: cx(
        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('valueContainer', this.props)), {
          'value-container': true,
          'value-container--is-multi': isMulti,
          'value-container--has-value': hasValue
        }, className)
      }, children);
    }
  }]);

  return ValueContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('indicatorsContainer', props)), {
      'indicators': true
    }, className)
  }, children);
};

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])({
      display: 'inline-block',
      fill: 'currentColor',
      lineHeight: 1,
      stroke: 'currentColor',
      strokeWidth: 0
    })
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Svg, _extends({
    size: 20
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Svg, _extends({
    size: 20
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref2) {
  var isFocused = _ref2.isFocused,
      _ref2$theme = _ref2.theme,
      baseUnit = _ref2$theme.spacing.baseUnit,
      colors = _ref2$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, innerProps, {
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('dropdownIndicator', props)), {
      'indicator': true,
      'dropdown-indicator': true
    }, className)
  }), children || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, innerProps, {
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('clearIndicator', props)), {
      'indicator': true,
      'clear-indicator': true
    }, className)
  }), children || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref3) {
  var isDisabled = _ref3.isDisabled,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", _extends({}, innerProps, {
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('indicatorSeparator', props)), {
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var keyframesName = 'react-select-loading-indicator';
var keyframesInjected = false;
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref4) {
  var isFocused = _ref4.isFocused,
      size = _ref4.size,
      _ref4$theme = _ref4.theme,
      colors = _ref4$theme.colors,
      baseUnit = _ref4$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref5) {
  var color = _ref5.color,
      delay = _ref5.delay,
      offset = _ref5.offset;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])({
      animationDuration: '1s',
      animationDelay: "".concat(delay, "ms"),
      animationIterationCount: 'infinite',
      animationName: keyframesName,
      animationTimingFunction: 'ease-in-out',
      backgroundColor: color,
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    })
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isFocused = props.isFocused,
      isRtl = props.isRtl,
      colors = props.theme.colors;
  var color = isFocused ? colors.neutral80 : colors.neutral20;

  if (!keyframesInjected) {
    // eslint-disable-next-line no-unused-expressions
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["injectGlobal"])("@keyframes ", keyframesName, "{0%,80%,100%{opacity:0;}40%{opacity:1;}};");
    keyframesInjected = true;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, innerProps, {
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('loadingIndicator', props)), {
      'indicator': true,
      'loading-indicator': true
    }, className)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingDot, {
    color: color,
    delay: 0,
    offset: isRtl
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingDot, {
    color: color,
    delay: 160,
    offset: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingDot, {
    color: color,
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

var css$1 = function css$$1(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    ref: innerRef,
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('control', props)), {
      'control': true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('group', props)), {
      'group': true
    }, className)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Heading, _extends({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      theme = props.theme,
      selectProps = props.selectProps,
      cleanProps = _objectWithoutProperties(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('groupHeading', _objectSpread({
      theme: theme
    }, cleanProps))), {
      'group-heading': true
    }, className)
  }, cleanProps));
};

var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      theme = _ref2.theme,
      selectProps = _ref2.selectProps,
      props = _objectWithoutProperties(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('input', _objectSpread({
      theme: theme
    }, props)))
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_input_autosize__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    className: cx(null, {
      'input': true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, props)));
};

var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
var MultiValueRemove =
/*#__PURE__*/
function (_Component) {
  _inherits(MultiValueRemove, _Component);

  function MultiValueRemove() {
    _classCallCheck(this, MultiValueRemove);

    return _possibleConstructorReturn(this, _getPrototypeOf(MultiValueRemove).apply(this, arguments));
  }

  _createClass(MultiValueRemove, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          innerProps = _this$props.innerProps;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", innerProps, children || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CrossIcon, {
        size: 14
      }));
    }
  }]);

  return MultiValueRemove;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var MultiValue =
/*#__PURE__*/
function (_Component2) {
  _inherits(MultiValue, _Component2);

  function MultiValue() {
    _classCallCheck(this, MultiValue);

    return _possibleConstructorReturn(this, _getPrototypeOf(MultiValue).apply(this, arguments));
  }

  _createClass(MultiValue, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          components = _this$props2.components,
          cx = _this$props2.cx,
          data = _this$props2.data,
          getStyles = _this$props2.getStyles,
          innerProps = _this$props2.innerProps,
          isDisabled = _this$props2.isDisabled,
          removeProps = _this$props2.removeProps,
          selectProps = _this$props2.selectProps;
      var Container = components.Container,
          Label = components.Label,
          Remove = components.Remove;

      var containerInnerProps = _objectSpread({
        className: cx(
        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('multiValue', this.props)), {
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className)
      }, innerProps);

      var labelInnerProps = {
        className: cx(
        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('multiValueLabel', this.props)), {
          'multi-value__label': true
        }, className)
      };

      var removeInnerProps = _objectSpread({
        className: cx(
        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('multiValueRemove', this.props)), {
          'multi-value__remove': true
        }, className)
      }, removeProps);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        data: data,
        innerProps: containerInnerProps,
        selectProps: selectProps
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
        data: data,
        innerProps: labelInnerProps,
        selectProps: selectProps
      }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Remove, {
        data: data,
        innerProps: removeInnerProps,
        selectProps: selectProps
      }));
    }
  }]);

  return MultiValue;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(MultiValue, "defaultProps", {
  cropWithEllipsis: true
});

var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    ref: innerRef,
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('option', props)), {
      'option': true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className)
  }, innerProps), children);
};

var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('placeholder', props)), {
      'placeholder': true
    }, className)
  }, innerProps), children);
};

var css$2 = function css$$1(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - ".concat(spacing.baseUnit * 2, "px)"),
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: cx(
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(getStyles('singleValue', props)), {
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _objectSpread({}, components, props.components);
};

var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css$2,
  valueContainer: valueContainerCSS
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // initialize with source styles
  var styles = _objectSpread({}, source); // massage in target styles


  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4;
var baseUnit = 4;
/* Used to calculate consistent margin/padding on elements */

var controlHeight = 38;
/* The minimum height of the control */

var menuGutter = baseUnit * 2;
/* The amount of space between the control and menu */

var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};
var instanceId = 1;

var Select =
/*#__PURE__*/
function (_Component) {
  _inherits(Select, _Component);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, _props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      ariaLiveSelection: '',
      ariaLiveContext: '',
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      menuOptions: {
        render: [],
        focusable: []
      },
      selectValue: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "blockOptionHover", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isComposing", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearFocusValueOnUpdate", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "commonProps", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "components", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hasGroups", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initialTouchX", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initialTouchY", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inputIsHiddenAfterUpdate", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "instancePrefix", '');

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openAfterFocus", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToFocusedOptionOnUpdate", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "userIsDragging", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "controlRef", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getControlRef", function (ref) {
      _this.controlRef = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "focusedOptionRef", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getFocusedOptionRef", function (ref) {
      _this.focusedOptionRef = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "menuListRef", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMenuListRef", function (ref) {
      _this.menuListRef = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inputRef", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getInputRef", function (ref) {
      _this.inputRef = ref;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cacheComponents", function (components$$1) {
      _this.components = defaultComponents({
        components: components$$1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "focus", _this.focusInput);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "blur", _this.blurInput);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      onChange(newValue, _objectSpread({}, actionMeta, {
        name: name
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setValue", function (newValue) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
      var option = arguments.length > 2 ? arguments[2] : undefined;
      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.clearFocusValueOnUpdate = true;

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectOption", function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti;
      var selectValue = _this.state.selectValue;

      if (isMulti) {
        if (_this.isOptionSelected(newValue, selectValue)) {
          var candidate = _this.getOptionValue(newValue);

          _this.setValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          }), 'deselect-option', newValue);

          _this.announceAriaLiveSelection({
            event: 'deselect-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue([].concat(_toConsumableArray(selectValue), [newValue]), 'select-option', newValue);

            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            // announce that option is disabled
            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }
      } else {
        if (!_this.isOptionDisabled(newValue, selectValue)) {
          _this.setValue(newValue, 'select-option');

          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          // announce that option is disabled
          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue),
              isDisabled: true
            }
          });
        }
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeValue", function (removedValue) {
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      _this.onChange(selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      }), {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.announceAriaLiveSelection({
        event: 'remove-value',
        context: {
          value: removedValue ? _this.getOptionLabel(removedValue) : ''
        }
      });

      _this.focusInput();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearValue", function () {
      var isMulti = _this.props.isMulti;

      _this.onChange(isMulti ? [] : null, {
        action: 'clear'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popValue", function () {
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];

      _this.announceAriaLiveSelection({
        event: 'pop-value',
        context: {
          value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
        }
      });

      _this.onChange(selectValue.slice(0, selectValue.length - 1), {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOptionLabel", function (data) {
      return _this.props.getOptionLabel(data);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOptionValue", function (data) {
      return _this.props.getOptionValue(data);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getStyles", function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getElementId", function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getActiveDescendentId", function () {
      var menuIsOpen = _this.props.menuIsOpen;
      var _this$state = _this.state,
          menuOptions = _this$state.menuOptions,
          focusedOption = _this$state.focusedOption;
      if (!focusedOption || !menuIsOpen) return undefined;
      var index = menuOptions.focusable.indexOf(focusedOption);
      var option = menuOptions.render[index];
      return option && option.key;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "announceAriaLiveSelection", function (_ref2) {
      var event = _ref2.event,
          context = _ref2.context;

      _this.setState({
        ariaLiveSelection: valueEventAriaMessage(event, context)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "announceAriaLiveContext", function (_ref3) {
      var event = _ref3.event,
          context = _ref3.context;

      _this.setState({
        ariaLiveContext: instructionsAriaMessage(event, _objectSpread({}, context, {
          label: _this.props['aria-label']
        }))
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMenuMouseDown", function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMenuMouseMove", function (event) {
      _this.blockOptionHover = false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onControlMouseDown", function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        //$FlowFixMe
        if (event.target.tagName !== 'INPUT') {
          _this.onMenuClose();
        }
      } //$FlowFixMe


      if (event.target.tagName !== 'INPUT') {
        event.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDropdownIndicatorMouseDown", function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClearIndicatorMouseDown", function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;
      setTimeout(function () {
        return _this.focusInput();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onScroll", function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCompositionStart", function () {
      _this.isComposing = true;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCompositionEnd", function () {
      _this.isComposing = false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchStart", function (_ref4) {
      var touches = _ref4.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchMove", function (_ref5) {
      var touches = _ref5.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchEnd", function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onControlTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClearIndicatorTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDropdownIndicatorTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChange", function (event) {
      var inputValue = event.currentTarget.value;
      _this.inputIsHiddenAfterUpdate = false;

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      _this.onMenuOpen();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputFocus", function (event) {
      var _this$props5 = _this.props,
          isSearchable = _this$props5.isSearchable,
          isMulti = _this$props5.isMulti;

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.inputIsHiddenAfterUpdate = false;

      _this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });

      _this.setState({
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputBlur", function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOptionHover", function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shouldHideSelectedOptions", function () {
      var _this$props6 = _this.props,
          hideSelectedOptions = _this$props6.hideSelectedOptions,
          isMulti = _this$props6.isMulti;
      if (hideSelectedOptions === undefined) return isMulti;
      return hideSelectedOptions;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (event) {
      var _this$props7 = _this.props,
          isMulti = _this$props7.isMulti,
          backspaceRemovesValue = _this$props7.backspaceRemovesValue,
          escapeClearsValue = _this$props7.escapeClearsValue,
          inputValue = _this$props7.inputValue,
          isClearable = _this$props7.isClearable,
          isDisabled = _this$props7.isDisabled,
          menuIsOpen = _this$props7.menuIsOpen,
          onKeyDown = _this$props7.onKeyDown,
          tabSelectsValue = _this$props7.tabSelectsValue,
          openMenuOnFocus = _this$props7.openMenuOnFocus;
      var _this$state2 = _this.state,
          focusedOption = _this$state2.focusedOption,
          focusedValue = _this$state2.focusedValue,
          selectValue = _this$state2.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.inputIsHiddenAfterUpdate = false;

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    });

    var value = _props.value;
    _this.cacheComponents = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.cacheComponents, exportedEqual).bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.cacheComponents(_props.components);

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var _selectValue = cleanValue(value);

    var _menuOptions = _this.buildMenuOptions(_props, _selectValue);

    _this.state.menuOptions = _menuOptions;
    _this.state.selectValue = _selectValue;
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props8 = this.props,
          options = _this$props8.options,
          value = _this$props8.value,
          inputValue = _this$props8.inputValue; // re-cache custom components

      this.cacheComponents(nextProps.components); // rebuild the menu options

      if (nextProps.value !== value || nextProps.options !== options || nextProps.inputValue !== inputValue) {
        var selectValue = cleanValue(nextProps.value);
        var menuOptions = this.buildMenuOptions(nextProps, selectValue);
        var focusedValue = this.getNextFocusedValue(selectValue);
        var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
        this.setState({
          menuOptions: menuOptions,
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue
        });
      } // some updates should toggle the state of the input visibility


      if (this.inputIsHiddenAfterUpdate != null) {
        this.setState({
          inputIsHidden: this.inputIsHiddenAfterUpdate
        });
        delete this.inputIsHiddenAfterUpdate;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props9 = this.props,
          isDisabled = _this$props9.isDisabled,
          menuIsOpen = _this$props9.menuIsOpen;
      var isFocused = this.state.isFocused;

      if ( // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      } // scroll the focused option into view if necessary


      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
      }

      this.scrollToFocusedOptionOnUpdate = false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    }
  }, {
    key: "onMenuOpen",
    // ==============================
    // Consumer Handlers
    // ==============================
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      var _this$props10 = this.props,
          isSearchable = _this$props10.isSearchable,
          isMulti = _this$props10.isMulti;
      this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });
      this.onInputChange('', {
        action: 'menu-close'
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    } // ==============================
    // Methods
    // ==============================

  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    } // aliased for consumers

  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this$state3 = this.state,
          menuOptions = _this$state3.menuOptions,
          selectValue = _this$state3.selectValue,
          isFocused = _this$state3.isFocused;
      var isMulti = this.props.isMulti;
      var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

      if (!isMulti) {
        var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);

        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      } // only scroll if the menu isn't already open


      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.inputIsHiddenAfterUpdate = false;
      this.onMenuOpen();
      this.setState({
        focusedValue: null,
        focusedOption: menuOptions.focusable[openAtIndex]
      });
      this.announceAriaLiveContext({
        event: 'menu'
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$props11 = this.props,
          isMulti = _this$props11.isMulti,
          isSearchable = _this$props11.isSearchable;
      var _this$state4 = this.state,
          selectValue = _this$state4.selectValue,
          focusedValue = _this$state4.focusedValue; // Only multiselects support value focusing

      if (!isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);

      if (!focusedValue) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'value'
        });
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }

          break;

        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }

          break;
      }

      if (nextFocus === -1) {
        this.announceAriaLiveContext({
          event: 'input',
          context: {
            isSearchable: isSearchable,
            isMulti: isMulti
          }
        });
      }

      this.setState({
        inputIsHidden: nextFocus === -1 ? false : true,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var _this$state5 = this.state,
          focusedOption = _this$state5.focusedOption,
          menuOptions = _this$state5.menuOptions;
      var options = menuOptions.focusable;
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'

      var focusedIndex = options.indexOf(focusedOption);

      if (!focusedOption) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'menu'
        });
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
      this.announceAriaLiveContext({
        event: 'menu',
        context: {
          isDisabled: isOptionDisabled(options[nextFocus])
        }
      });
    }
  }, {
    key: "getTheme",
    // ==============================
    // Getters
    // ==============================
    value: function getTheme() {
      // Use the default theme if there are no customizations.
      if (!this.props.theme) {
        return defaultTheme;
      } // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.


      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      } // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.


      return _objectSpread({}, defaultTheme, this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
          getStyles = this.getStyles,
          setValue = this.setValue,
          selectOption = this.selectOption,
          props = this.props;
      var classNamePrefix = props.classNamePrefix,
          isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var selectValue = this.state.selectValue;
      var hasValue = this.hasValue();

      var getValue = function getValue() {
        return selectValue;
      };

      var cx = classNames.bind(null, classNamePrefix);
      return {
        cx: cx,
        clearValue: clearValue,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        setValue: setValue,
        selectProps: props,
        theme: this.getTheme()
      };
    }
  }, {
    key: "getNextFocusedValue",
    value: function getNextFocusedValue(nextSelectValue) {
      if (this.clearFocusValueOnUpdate) {
        this.clearFocusValueOnUpdate = false;
        return null;
      }

      var _this$state6 = this.state,
          focusedValue = _this$state6.focusedValue,
          lastSelectValue = _this$state6.selectValue;
      var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

      if (lastFocusedIndex > -1) {
        var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

        if (nextFocusedIndex > -1) {
          // the focused value is still in the selectValue, return it
          return focusedValue;
        } else if (lastFocusedIndex < nextSelectValue.length) {
          // the focusedValue is not present in the next selectValue array by
          // reference, so return the new value at the same index
          return nextSelectValue[lastFocusedIndex];
        }
      }

      return null;
    }
  }, {
    key: "getNextFocusedOption",
    value: function getNextFocusedOption(options) {
      var lastFocusedOption = this.state.focusedOption;
      return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.state.menuOptions.render.length;
    }
  }, {
    key: "countOptions",
    value: function countOptions() {
      return this.state.menuOptions.focusable.length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props12 = this.props,
          isClearable = _this$props12.isClearable,
          isMulti = _this$props12.isMulti; // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled$$1(option, selectValue) {
      return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      var _this2 = this;

      if (selectValue.indexOf(option) > -1) return true;

      if (typeof this.props.isOptionSelected === 'function') {
        return this.props.isOptionSelected(option, selectValue);
      }

      var candidate = this.getOptionValue(option);
      return selectValue.some(function (i) {
        return _this2.getOptionValue(i) === candidate;
      });
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var inputValue = this.props.inputValue;
        var selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: inputValue,
          selectValue: selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel$$1(data) {
      return this.props.formatGroupLabel(data);
    } // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: "startListeningComposition",
    // ==============================
    // Composition Handlers
    // ==============================
    value: function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    // ==============================
    // Touch Handlers
    // ==============================
    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "buildMenuOptions",
    // ==============================
    // Menu Options
    // ==============================
    value: function buildMenuOptions(props, selectValue) {
      var _this3 = this;

      var _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === void 0 ? '' : _props$inputValue,
          options = props.options;

      var toOption = function toOption(option, id) {
        var isDisabled = _this3.isOptionDisabled(option, selectValue);

        var isSelected = _this3.isOptionSelected(option, selectValue);

        var label = _this3.getOptionLabel(option);

        var value = _this3.getOptionValue(option);

        if (_this3.shouldHideSelectedOptions() && isSelected || !_this3.filterOption({
          label: label,
          value: value,
          data: option
        }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this3.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this3.selectOption(option);
        };
        var optionId = "".concat(_this3.getElementId('option'), "-").concat(id);
        return {
          innerProps: {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this3.hasGroups) _this3.hasGroups = true;
          var items = item.options;
          var children = items.map(function (child, i) {
            var option = toOption(child, "".concat(itemIndex, "-").concat(i));
            if (option) acc.focusable.push(child);
            return option;
          }).filter(Boolean);

          if (children.length) {
            var groupId = "".concat(_this3.getElementId('group'), "-").concat(itemIndex);
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, "".concat(itemIndex));

          if (option) {
            acc.render.push(option);
            acc.focusable.push(item);
          }
        }

        return acc;
      }, {
        render: [],
        focusable: []
      });
    } // ==============================
    // Renderers
    // ==============================

  }, {
    key: "constructAriaLiveMessage",
    value: function constructAriaLiveMessage() {
      var _this$state7 = this.state,
          ariaLiveContext = _this$state7.ariaLiveContext,
          selectValue = _this$state7.selectValue,
          focusedValue = _this$state7.focusedValue,
          focusedOption = _this$state7.focusedOption;
      var _this$props13 = this.props,
          options = _this$props13.options,
          menuIsOpen = _this$props13.menuIsOpen,
          inputValue = _this$props13.inputValue,
          screenReaderStatus = _this$props13.screenReaderStatus; // An aria live message representing the currently focused value in the select.

      var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
        focusedValue: focusedValue,
        getOptionLabel: this.getOptionLabel,
        selectValue: selectValue
      }) : ''; // An aria live message representing the currently focused option in the select.

      var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
        focusedOption: focusedOption,
        getOptionLabel: this.getOptionLabel,
        options: options
      }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

      var resultsMsg = resultsAriaMessage({
        inputValue: inputValue,
        screenReaderMessage: screenReaderStatus({
          count: this.countOptions()
        })
      });
      return "".concat(focusedValueMsg, " ").concat(focusedOptionMsg, " ").concat(resultsMsg, " ").concat(ariaLiveContext);
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props14 = this.props,
          isDisabled = _this$props14.isDisabled,
          isSearchable = _this$props14.isSearchable,
          inputId = _this$props14.inputId,
          inputValue = _this$props14.inputValue,
          tabIndex = _this$props14.tabIndex;
      var Input = this.components.Input;
      var inputIsHidden = this.state.inputIsHidden;
      var id = inputId || this.getElementId('input');

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DummyInput, {
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          readOnly: true,
          disabled: isDisabled,
          tabIndex: tabIndex,
          value: ""
        });
      } // aria attributes makes the JSX "noisy", separated for clarity


      var ariaAttributes = {
        'aria-autocomplete': 'list',
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby']
      };
      var _this$commonProps = this.commonProps,
          cx = _this$commonProps.cx,
          theme = _this$commonProps.theme,
          selectProps = _this$commonProps.selectProps;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, _extends({
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        cx: cx,
        getStyles: this.getStyles,
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        selectProps: selectProps,
        spellCheck: "false",
        tabIndex: tabIndex,
        theme: theme,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this4 = this;

      var _this$components = this.components,
          MultiValue = _this$components.MultiValue,
          MultiValueContainer = _this$components.MultiValueContainer,
          MultiValueLabel = _this$components.MultiValueLabel,
          MultiValueRemove = _this$components.MultiValueRemove,
          SingleValue = _this$components.SingleValue,
          Placeholder = _this$components.Placeholder;
      var commonProps = this.commonProps;
      var _this$props15 = this.props,
          controlShouldRenderValue = _this$props15.controlShouldRenderValue,
          isDisabled = _this$props15.isDisabled,
          isMulti = _this$props15.isMulti,
          inputValue = _this$props15.inputValue,
          placeholder = _this$props15.placeholder;
      var _this$state8 = this.state,
          selectValue = _this$state8.selectValue,
          focusedValue = _this$state8.focusedValue,
          isFocused = _this$state8.isFocused;

      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Placeholder, _extends({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused
        }), placeholder);
      }

      if (isMulti) {
        var selectValues = selectValue.map(function (opt) {
          var isOptionFocused = opt === focusedValue;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MultiValue, _extends({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: _this4.getOptionValue(opt),
            removeProps: {
              onClick: function onClick() {
                return _this4.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this4.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            },
            data: opt
          }), _this4.formatOptionLabel(opt, 'value'));
        });
        return selectValues;
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleValue, _extends({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var ClearIndicator = this.components.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props16 = this.props,
          isDisabled = _this$props16.isDisabled,
          isLoading = _this$props16.isLoading;
      var isFocused = this.state.isFocused;

      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClearIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var LoadingIndicator = this.components.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props17 = this.props,
          isDisabled = _this$props17.isDisabled,
          isLoading = _this$props17.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$components2 = this.components,
          DropdownIndicator = _this$components2.DropdownIndicator,
          IndicatorSeparator = _this$components2.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator

      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndicatorSeparator, _extends({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var DropdownIndicator = this.components.DropdownIndicator;
      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this5 = this;

      var _this$components3 = this.components,
          Group = _this$components3.Group,
          GroupHeading = _this$components3.GroupHeading,
          Menu$$1 = _this$components3.Menu,
          MenuList$$1 = _this$components3.MenuList,
          MenuPortal$$1 = _this$components3.MenuPortal,
          LoadingMessage$$1 = _this$components3.LoadingMessage,
          NoOptionsMessage$$1 = _this$components3.NoOptionsMessage,
          Option = _this$components3.Option;
      var commonProps = this.commonProps;
      var _this$state9 = this.state,
          focusedOption = _this$state9.focusedOption,
          menuOptions = _this$state9.menuOptions;
      var _this$props18 = this.props,
          captureMenuScroll = _this$props18.captureMenuScroll,
          inputValue = _this$props18.inputValue,
          isLoading = _this$props18.isLoading,
          loadingMessage = _this$props18.loadingMessage,
          minMenuHeight = _this$props18.minMenuHeight,
          maxMenuHeight = _this$props18.maxMenuHeight,
          menuIsOpen = _this$props18.menuIsOpen,
          menuPlacement = _this$props18.menuPlacement,
          menuPosition = _this$props18.menuPosition,
          menuPortalTarget = _this$props18.menuPortalTarget,
          menuShouldBlockScroll = _this$props18.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props18.menuShouldScrollIntoView,
          noOptionsMessage = _this$props18.noOptionsMessage,
          onMenuScrollToTop = _this$props18.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props18.onMenuScrollToBottom;
      if (!menuIsOpen) return null; // TODO: Internal Option Type here

      var render = function render(props) {
        // for performance, the menu options in state aren't changed when the
        // focused option changes so we calculate additional props based on that
        var isFocused = focusedOption === props.data;
        props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, _extends({}, commonProps, props, {
          isFocused: isFocused
        }), _this5.formatOptionLabel(props.data, 'menu'));
      };

      var menuUI;

      if (this.hasOptions()) {
        menuUI = menuOptions.render.map(function (item) {
          if (item.type === 'group') {
            var type = item.type,
                group = _objectWithoutProperties(item, ["type"]);

            var headingId = "".concat(item.key, "-heading");
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Group, _extends({}, commonProps, group, {
              Heading: GroupHeading,
              headingProps: {
                id: headingId
              },
              label: _this5.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option);
            }));
          } else if (item.type === 'option') {
            return render(item);
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingMessage$$1, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });

        if (_message === null) return null;
        menuUI = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoOptionsMessage$$1, commonProps, _message);
      }

      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function (_ref6) {
        var ref = _ref6.ref,
            _ref6$placerProps = _ref6.placerProps,
            placement = _ref6$placerProps.placement,
            maxHeight = _ref6$placerProps.maxHeight;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu$$1, _extends({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this5.onMenuMouseDown,
            onMouseMove: _this5.onMenuMouseMove
          },
          isLoading: isLoading,
          placement: placement
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollCaptorSwitch, {
          isEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollBlock, {
          isEnabled: menuShouldBlockScroll
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuList$$1, _extends({}, commonProps, {
          innerRef: _this5.getMenuListRef,
          isLoading: isLoading,
          maxHeight: maxHeight
        }), menuUI))));
      }); // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`

      return menuPortalTarget || menuPosition === 'fixed' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuPortal$$1, _extends({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this6 = this;

      var _this$props19 = this.props,
          delimiter = _this$props19.delimiter,
          isDisabled = _this$props19.isDisabled,
          isMulti = _this$props19.isMulti,
          name = _this$props19.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this6.getOptionValue(opt);
          }).join(delimiter);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this6.getOptionValue(opt)
            });
          }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            name: name,
            type: "hidden"
          });
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          name: name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      if (!this.state.isFocused) return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A11yText, {
        "aria-live": "assertive"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        id: "aria-selection-event"
      }, "\xA0", this.state.ariaLiveSelection), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        id: "aria-context"
      }, "\xA0", this.constructAriaLiveMessage()));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$components4 = this.components,
          Control = _this$components4.Control,
          IndicatorsContainer = _this$components4.IndicatorsContainer,
          SelectContainer = _this$components4.SelectContainer,
          ValueContainer = _this$components4.ValueContainer;
      var _this$props20 = this.props,
          className = _this$props20.className,
          id = _this$props20.id,
          isDisabled = _this$props20.isDisabled,
          menuIsOpen = _this$props20.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectContainer, _extends({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Control, _extends({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ValueContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndicatorsContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Select, "defaultProps", defaultProps);

var defaultProps$1 = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(StateManager, _Component);

    function StateManager() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, StateManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StateManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "select", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputChange", function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMenuOpen", function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMenuClose", function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      });

      return _this;
    }

    _createClass(StateManager, [{
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      } // FIXME: untyped flow code, return any

    }, {
      key: "getProp",
      value: function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      } // FIXME: untyped flow code, return any

    }, {
      key: "callProp",
      value: function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _this$props;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_this$props = this.props)[name].apply(_this$props, args);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            defaultInputValue = _this$props2.defaultInputValue,
            defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
            defaultValue = _this$props2.defaultValue,
            props = _objectWithoutProperties(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectComponent, _extends({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      }
    }]);

    return StateManager;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _defineProperty(_class, "defaultProps", defaultProps$1), _temp;
};

var defaultProps$2 = {
  cacheOptions: false,
  defaultOptions: false,
  filterOption: null
};
var makeAsyncSelect = function makeAsyncSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Async, _Component);

    function Async(props) {
      var _this;

      _classCallCheck(this, Async);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Async).call(this));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "select", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lastRequest", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mounted", false);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "optionsCache", {});

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChange", function (newValue, actionMeta) {
        var _this$props = _this.props,
            cacheOptions = _this$props.cacheOptions,
            onInputChange = _this$props.onInputChange; // TODO

        var inputValue = handleInputChange(newValue, actionMeta, onInputChange);

        if (!inputValue) {
          delete _this.lastRequest;

          _this.setState({
            inputValue: '',
            loadedInputValue: '',
            loadedOptions: [],
            isLoading: false,
            passEmptyOptions: false
          });

          return;
        }

        if (cacheOptions && _this.optionsCache[inputValue]) {
          _this.setState({
            inputValue: inputValue,
            loadedInputValue: inputValue,
            loadedOptions: _this.optionsCache[inputValue],
            isLoading: false,
            passEmptyOptions: false
          });
        } else {
          var request = _this.lastRequest = {};

          _this.setState({
            inputValue: inputValue,
            isLoading: true,
            passEmptyOptions: !_this.state.loadedInputValue
          }, function () {
            _this.loadOptions(inputValue, function (options) {
              if (!_this.mounted) return;

              if (options) {
                _this.optionsCache[inputValue] = options;
              }

              if (request !== _this.lastRequest) return;
              delete _this.lastRequest;

              _this.setState({
                isLoading: false,
                loadedInputValue: inputValue,
                loadedOptions: options || [],
                passEmptyOptions: false
              });
            });
          });
        }

        return inputValue;
      });

      _this.state = {
        defaultOptions: Array.isArray(props.defaultOptions) ? props.defaultOptions : undefined,
        inputValue: typeof props.inputValue !== 'undefined' ? props.inputValue : '',
        isLoading: props.defaultOptions === true ? true : false,
        loadedOptions: [],
        passEmptyOptions: false
      };
      return _this;
    }

    _createClass(Async, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.mounted = true;
        var defaultOptions = this.props.defaultOptions;
        var inputValue = this.state.inputValue;

        if (defaultOptions === true) {
          this.loadOptions(inputValue, function (options) {
            if (!_this2.mounted) return;
            var isLoading = !!_this2.lastRequest;

            _this2.setState({
              defaultOptions: options || [],
              isLoading: isLoading
            });
          });
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        // if the cacheOptions prop changes, clear the cache
        if (nextProps.cacheOptions !== this.props.cacheOptions) {
          this.optionsCache = {};
        }

        if (nextProps.defaultOptions !== this.props.defaultOptions) {
          this.setState({
            defaultOptions: Array.isArray(nextProps.defaultOptions) ? nextProps.defaultOptions : undefined
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "loadOptions",
      value: function loadOptions(inputValue, callback) {
        var loadOptions = this.props.loadOptions;
        if (!loadOptions) return callback();
        var loader = loadOptions(inputValue, callback);

        if (loader && typeof loader.then === 'function') {
          loader.then(callback, function () {
            return callback();
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props2 = this.props,
            loadOptions = _this$props2.loadOptions,
            props = _objectWithoutProperties(_this$props2, ["loadOptions"]);

        var _this$state = this.state,
            defaultOptions = _this$state.defaultOptions,
            inputValue = _this$state.inputValue,
            isLoading = _this$state.isLoading,
            loadedInputValue = _this$state.loadedInputValue,
            loadedOptions = _this$state.loadedOptions,
            passEmptyOptions = _this$state.passEmptyOptions;
        var options = passEmptyOptions ? [] : inputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectComponent, _extends({}, props, {
          ref: function ref(_ref) {
            _this3.select = _ref;
          },
          options: options,
          isLoading: isLoading,
          onInputChange: this.handleInputChange
        }));
      }
    }]);

    return Async;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _defineProperty(_class, "defaultProps", defaultProps$2), _temp;
};
var SelectState = manageState(Select);
var Async = makeAsyncSelect(SelectState);

var compareOption = function compareOption() {
  var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var option = arguments.length > 1 ? arguments[1] : undefined;
  var candidate = String(inputValue).toLowerCase();
  var optionValue = String(option.value).toLowerCase();
  var optionLabel = String(option.label).toLowerCase();
  return optionValue === candidate || optionLabel === candidate;
};

var builtins = {
  formatCreateLabel: function formatCreateLabel(inputValue) {
    return "Create \"".concat(inputValue, "\"");
  },
  isValidNewOption: function isValidNewOption(inputValue, selectValue, selectOptions) {
    return !(!inputValue || selectValue.some(function (option) {
      return compareOption(inputValue, option);
    }) || selectOptions.some(function (option) {
      return compareOption(inputValue, option);
    }));
  },
  getNewOptionData: function getNewOptionData(inputValue, optionLabel) {
    return {
      label: optionLabel,
      value: inputValue,
      __isNew__: true
    };
  }
};
var defaultProps$3 = _objectSpread({
  allowCreateWhileLoading: false,
  createOptionPosition: 'last'
}, builtins);
var makeCreatableSelect = function makeCreatableSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Creatable, _Component);

    function Creatable(props) {
      var _this;

      _classCallCheck(this, Creatable);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Creatable).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "select", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (newValue, actionMeta) {
        var _this$props = _this.props,
            getNewOptionData = _this$props.getNewOptionData,
            inputValue = _this$props.inputValue,
            isMulti = _this$props.isMulti,
            onChange = _this$props.onChange,
            onCreateOption = _this$props.onCreateOption,
            value = _this$props.value;

        if (actionMeta.action !== 'select-option') {
          return onChange(newValue, actionMeta);
        }

        var newOption = _this.state.newOption;
        var valueArray = Array.isArray(newValue) ? newValue : [newValue];

        if (valueArray[valueArray.length - 1] === newOption) {
          if (onCreateOption) onCreateOption(inputValue);else {
            var newOptionData = getNewOptionData(inputValue, inputValue);
            var newActionMeta = {
              action: 'create-option'
            };

            if (isMulti) {
              onChange([].concat(_toConsumableArray(cleanValue(value)), [newOptionData]), newActionMeta);
            } else {
              onChange(newOptionData, newActionMeta);
            }
          }
          return;
        }

        onChange(newValue, actionMeta);
      });

      var options = props.options || [];
      _this.state = {
        newOption: undefined,
        options: options
      };
      return _this;
    }

    _createClass(Creatable, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var allowCreateWhileLoading = nextProps.allowCreateWhileLoading,
            createOptionPosition = nextProps.createOptionPosition,
            formatCreateLabel = nextProps.formatCreateLabel,
            getNewOptionData = nextProps.getNewOptionData,
            inputValue = nextProps.inputValue,
            isLoading = nextProps.isLoading,
            isValidNewOption = nextProps.isValidNewOption,
            value = nextProps.value;
        var options = nextProps.options || [];
        var newOption = this.state.newOption;

        if (isValidNewOption(inputValue, cleanValue(value), options)) {
          newOption = getNewOptionData(inputValue, formatCreateLabel(inputValue));
        } else {
          newOption = undefined;
        }

        this.setState({
          newOption: newOption,
          options: (allowCreateWhileLoading || !isLoading) && newOption ? createOptionPosition === 'first' ? [newOption].concat(_toConsumableArray(options)) : [].concat(_toConsumableArray(options), [newOption]) : options
        });
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var props = _extends({}, this.props);

        var options = this.state.options;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectComponent, _extends({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          options: options,
          onChange: this.onChange
        }));
      }
    }]);

    return Creatable;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _defineProperty(_class, "defaultProps", defaultProps$3), _temp;
}; // TODO: do this in package entrypoint

var SelectCreatable = makeCreatableSelect(Select);
var Creatable = manageState(SelectCreatable);

var SelectCreatable$1 = makeCreatableSelect(Select);
var SelectCreatableState = manageState(SelectCreatable$1);
var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

// strip transition props off before spreading onto select component
// note we need to be explicit about innerRef for flow
var AnimatedInput = function AnimatedInput(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
        onExited = _ref.onExited,
        appear = _ref.appear,
        enter = _ref.enter,
        exit = _ref.exit,
        props = _objectWithoutProperties(_ref, ["in", "onExited", "appear", "enter", "exit"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, props);
  };
};

var Fade = function Fade(_ref) {
  var Tag = _ref.component,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1 : _ref$duration,
      inProp = _ref.in,
      onExited = _ref.onExited,
      props = _objectWithoutProperties(_ref, ["component", "duration", "in", "onExited"]);

  var transition = {
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 1,
      transition: "opacity ".concat(duration, "ms")
    },
    exiting: {
      opacity: 0
    },
    exited: {
      opacity: 0
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["Transition"], {
    mountOnEnter: true,
    unmountOnExit: true,
    in: inProp,
    timeout: duration
  }, function (state) {
    var innerProps = {
      style: _objectSpread({}, transition[state])
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
      innerProps: innerProps
    }, props));
  });
}; // ==============================
// Collapse Transition
// ==============================

var collapseDuration = 260;
// wrap each MultiValue with a collapse transition; decreases width until
// finally removing from DOM
var Collapse =
/*#__PURE__*/
function (_Component) {
  _inherits(Collapse, _Component);

  function Collapse() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Collapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Collapse)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "duration", collapseDuration);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rafID", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      width: 'auto'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "transition", {
      exiting: {
        width: 0,
        transition: "width ".concat(_this.duration, "ms ease-out")
      },
      exited: {
        width: 0
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getWidth", function (ref) {
      if (ref && isNaN(_this.state.width)) {
        /*
          Here we're invoking requestAnimationFrame with a callback invoking our
          call to getBoundingClientRect and setState in order to resolve an edge case
          around portalling. Certain portalling solutions briefly remove children from the DOM
          before appending them to the target node. This is to avoid us trying to call getBoundingClientrect
          while the Select component is in this state.
        */
        // cannot use `offsetWidth` because it is rounded
        _this.rafID = window.requestAnimationFrame(function () {
          var _ref$getBoundingClien = ref.getBoundingClientRect(),
              width = _ref$getBoundingClien.width;

          _this.setState({
            width: width
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getStyle", function (width) {
      return {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: width
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTransition", function (state) {
      return _this.transition[state];
    });

    return _this;
  }

  _createClass(Collapse, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rafID) {
        window.cancelAnimationFrame(this.rafID);
      }
    } // width must be calculated; cannot transition from `undefined` to `number`

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          inProp = _this$props.in;
      var width = this.state.width;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["Transition"], {
        enter: false,
        mountOnEnter: true,
        unmountOnExit: true,
        in: inProp,
        timeout: this.duration
      }, function (state) {
        var style = _objectSpread({}, _this2.getStyle(width), _this2.getTransition(state));

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          ref: _this2.getWidth,
          style: style
        }, children);
      });
    }
  }]);

  return Collapse;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var AnimatedMultiValue = function AnimatedMultiValue(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
        onExited = _ref.onExited,
        props = _objectWithoutProperties(_ref, ["in", "onExited"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Collapse, {
      in: inProp,
      onExited: onExited
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
      cropWithEllipsis: inProp
    }, props)));
  };
};

var AnimatedPlaceholder = function AnimatedPlaceholder(WrappedComponent) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fade, _extends({
      component: WrappedComponent,
      duration: props.isMulti ? collapseDuration : 1
    }, props));
  };
};

var AnimatedSingleValue = function AnimatedSingleValue(WrappedComponent) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fade, _extends({
      component: WrappedComponent
    }, props));
  };
};

// make ValueContainer a transition group
var AnimatedValueContainer = function AnimatedValueContainer(WrappedComponent) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["TransitionGroup"], _extends({
      component: WrappedComponent
    }, props));
  };
};

var makeAnimated = function makeAnimated() {
  var externalComponents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var components$$1 = defaultComponents({
    components: externalComponents
  });

  var Input = components$$1.Input,
      MultiValue = components$$1.MultiValue,
      Placeholder = components$$1.Placeholder,
      SingleValue = components$$1.SingleValue,
      ValueContainer = components$$1.ValueContainer,
      rest = _objectWithoutProperties(components$$1, ["Input", "MultiValue", "Placeholder", "SingleValue", "ValueContainer"]);

  return _objectSpread({
    Input: AnimatedInput(Input),
    MultiValue: AnimatedMultiValue(MultiValue),
    Placeholder: AnimatedPlaceholder(Placeholder),
    SingleValue: AnimatedSingleValue(SingleValue),
    ValueContainer: AnimatedValueContainer(ValueContainer)
  }, rest);
};

var AnimatedComponents = makeAnimated();
var Input$1 = AnimatedComponents.Input;
var MultiValue$1 = AnimatedComponents.MultiValue;
var Placeholder$1 = AnimatedComponents.Placeholder;
var SingleValue$1 = AnimatedComponents.SingleValue;
var ValueContainer$1 = AnimatedComponents.ValueContainer;
var index = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(makeAnimated, exportedEqual);

var index$1 = manageState(Select);

/* harmony default export */ __webpack_exports__["default"] = (index$1);



/***/ }),

/***/ "./node_modules/react-transition-group/CSSTransition.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-transition-group/CSSTransition.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _addClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/addClass */ "./node_modules/dom-helpers/class/addClass.js"));

var _removeClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/removeClass */ "./node_modules/dom-helpers/class/removeClass.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity: 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or
   * has finished the transition. A single name can be provided and it will be
   * suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
   * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
   * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : undefined;
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/ReplaceTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/ReplaceTransition.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  true ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/Transition.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/Transition.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : undefined;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/TransitionGroup.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-transition-group/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/CSSTransition.js"));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/ReplaceTransition.js"));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/ChildMapping.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(/*! react */ "react");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/PropTypes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  true ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : undefined;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  true ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : undefined;
exports.classNamesShape = classNamesShape;

/***/ }),

/***/ "./node_modules/resolve-pathname/index.js":
/*!************************************************!*\
  !*** ./node_modules/resolve-pathname/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./node_modules/value-equal/index.js":
/*!*******************************************!*\
  !*** ./node_modules/value-equal/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


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
        var newQuery = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, currentQuery), { role: role, school: school });
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
        for (var IMPERSONATION_QUERY_PARAMS_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(IMPERSONATION_QUERY_PARAMS), IMPERSONATION_QUERY_PARAMS_1_1 = IMPERSONATION_QUERY_PARAMS_1.next(); !IMPERSONATION_QUERY_PARAMS_1_1.done; IMPERSONATION_QUERY_PARAMS_1_1 = IMPERSONATION_QUERY_PARAMS_1.next()) {
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
    var newQueryString = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_3__["generateQueryString"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, preservedQuery), query));
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
     *
     */
    EdsClient.prototype.getBasegroupStudents = function (query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res, _a, _b, json, ex_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.http.get("BaseGroupStudents", query)];
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
                        return [2 /*return*/, json.baseGroupStudents];
                    case 5:
                        ex_1 = _c.sent();
                        console.error("Error from EDS: " + ex_1);
                        throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kunde inte ladda elever per basgrupp fr\u00E5n EDS. F\u00F6rs\u00F6k igen senare..."], ["Kunde inte ladda elever per basgrupp fr\u00E5n EDS. F\u00F6rs\u00F6k igen senare..."]))));
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    EdsClient.prototype.getSchoolBaseGroups = function (query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res, _a, _b, json, ex_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.http.get("SchoolBaseGroups", query)];
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
                        return [2 /*return*/, json.schoolBaseGroups];
                    case 5:
                        ex_2 = _c.sent();
                        console.error("Error from EDS: " + ex_2);
                        throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kunde tyv\u00E4rr inte ladda basgrupper fr\u00E5n EDS. F\u00F6rs\u00F6k igen senare..."], ["Kunde tyv\u00E4rr inte ladda basgrupper fr\u00E5n EDS. F\u00F6rs\u00F6k igen senare..."]))));
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
       * Retrieve active courses for current logged in student.
       *
       * @param courseCode Short-name of the course. Optional.
       */
    EdsClient.prototype.getActiveCourses = function (q) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var query, res, _a, _b, json, ex_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
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
                        ex_3 = _c.sent();
                        console.error("Error from EDS: " + ex_3);
                        throw new Error(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Kunde tyv\u00E4rr inte ladda terminsm\u00E5l eller avklarade steg fr\u00E5n EDS. F\u00F6rs\u00F6k igen senare..."], ["Kunde tyv\u00E4rr inte ladda terminsm\u00E5l eller avklarade steg fr\u00E5n EDS. F\u00F6rs\u00F6k igen senare..."]))));
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var query, res, _a, _b, json;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res, _a, _b, json;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res, _a, _b, json;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res, _a, _b, json;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res, _a, _b, json;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.get("SchoolTuitionGroups", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.privatizingCacheBust()), q))];
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res, _a, _b, json;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.get("TuitionGroupStudents", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.privatizingCacheBust()), q))];
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res, _a, _b, json;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.http.get("SchoolTeachers", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.privatizingCacheBust()), q))];
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var holidays, firstTermMoment, secondTermMoment, startFirstTermDate, startSecondTermDate, endFirstTermDate, endSecondTermDate, firstTerm, secondTerm;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
var templateObject_1, templateObject_2, templateObject_3;


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
    'DJUR1_GR3 (180816-190614)': Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([
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
    'DJUDJ_Gr1 (180816-190614)': Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([
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
    'DJUDJ_Gr2 (180816-190614)': Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([
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
    'MAT3b_Gr2 (180816-190614)': Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GoalProgress, _super);
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

/***/ "./src/components/course-builder-ks/common/dialog-context.ts":
/*!*******************************************************************!*\
  !*** ./src/components/course-builder-ks/common/dialog-context.ts ***!
  \*******************************************************************/
/*! exports provided: DialogsContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsContext", function() { return DialogsContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DialogsContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({ openDialog: null, closeDialog: null });


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
/*! exports provided: EllipsisLoader, TimeoutEllipsisLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisLoader", function() { return EllipsisLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutEllipsisLoader", function() { return TimeoutEllipsisLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_components_timeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility-components/timeout */ "./src/components/utility-components/timeout.tsx");



var EllipsisLoader = function () { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { style: { border: 0, margin: 0, padding: 0 }, className: "ellipsis-loader" })); };
var TimeoutEllipsisLoader = function (props) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_timeout__WEBPACK_IMPORTED_MODULE_2__["Timeout"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props),
    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](EllipsisLoader, null))); };


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
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { title: title || Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Radera"], ["Radera"]))), className: "removeItem " + (className || ""), onClick: onClick, style: style });
};
var templateObject_1;


/***/ }),

/***/ "./src/components/course-builder/sub-components/spinner.tsx":
/*!******************************************************************!*\
  !*** ./src/components/course-builder/sub-components/spinner.tsx ***!
  \******************************************************************/
/*! exports provided: Spinner, TimeoutSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutSpinner", function() { return TimeoutSpinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utility_components_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility-components/timeout */ "./src/components/utility-components/timeout.tsx");


var Spinner = function (_a) {
    var _b = _a.label, label = _b === void 0 ? "" : _b;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fas fa-spinner fa-spin", "aria-hidden": "true" }),
        "\u00A0",
        label);
};
var TimeoutSpinner = function (_a) {
    var _b = _a.label, label = _b === void 0 ? "" : _b, _c = _a.timeoutms, timeoutms = _c === void 0 ? _utility_components_timeout__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_TIMEOUT_MS"] : _c;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utility_components_timeout__WEBPACK_IMPORTED_MODULE_1__["Timeout"], { timeoutms: timeoutms },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Spinner, { label: label })));
};


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
    var retval = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([
        assignment
    ], assignments.filter(function (_a) {
        var user = _a.user, filename = _a.filename;
        return user !== assignment.user ||
            filename !== assignment.filename;
    }));
    return retval;
}
function downloadFile(file) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var res, _a, _b, blob, err_1;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
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
                    !taskAssignments.find(function (f) { return f.user === cs.studentEmailAddress; })
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
                var taskAssignments = courseNotifications[task.id] ? courseNotifications[task.id].map(function (t) { return t.assignment; }) : [];
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
                        if (!(isOpened && notificationdigests[selectedCourse.id][task.id])) return [3 /*break*/, 3];
                        return [4 /*yield*/, Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["simpleDigest"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_8__["env"].currentUser.mail + selectedCourse.id)];
                    case 1:
                        tagsDigest_1 = _a.sent();
                        return [4 /*yield*/, seenDigestsObservable.load()];
                    case 2:
                        seenDigests_1 = _a.sent();
                        assignments.forEach(function (assignment) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var assignmentDigest;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["simpleDigest"])(assignment.user + //(studen's email address)
                                            assignment.courseId +
                                            assignment.taskId +
                                            assignment.uploadDate +
                                            (assignment.metadata.driveFileId || ""))];
                                    case 1:
                                        assignmentDigest = _a.sent();
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
                        }); });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_2__["OpenCloseBox"], { onOpenClose: function (becameOpen) { return onTaskOpened(becameOpen); }, className: "task-container", title: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "notification-container" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, task.name),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_shared_notification_icon__WEBPACK_IMPORTED_MODULE_5__["NotificationIcon"], { course: selectedCourse, entity: 'task', taskId: task.id, notificationdigests: notificationdigests })), headerOpen: false },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_tasks_assignments__WEBPACK_IMPORTED_MODULE_3__["CourseTaskAssignments"], { task: task, assignments: assignments, checkWithUrkund: task.sendToUrkund === undefined ? true : task.sendToUrkund }),
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
/* harmony import */ var _helpers_assignments_common_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/assignments-common-functions */ "./src/components/teacher-view/assignments-view/helpers/assignments-common-functions.tsx");






var CourseTaskAssignments = (function (_a) {
    var assignments = _a.assignments, checkWithUrkund = _a.checkWithUrkund, task = _a.task;
    var intl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_2__["LanguageContext"]).intl;
    var _b = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](___WEBPACK_IMPORTED_MODULE_3__["AssignmentsContext"]), filterStudyGroups = _b.filterStudyGroups, tuitionStudents = _b.tuitionStudents;
    var filteredAssignments = Object(_helpers_assignments_common_functions__WEBPACK_IMPORTED_MODULE_4__["setupAssignments"])(assignments, filterStudyGroups, tuitionStudents, checkWithUrkund);
    return filteredAssignments.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "task-assignments-table" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentStudentName", defaultMessage: "Elev" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentFileName", defaultMessage: "Filnamn" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentSubmittedAt", defaultMessage: "Inlamnat" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentReport", defaultMessage: "Rapport" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentGrade", defaultMessage: "Niva" })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, filteredAssignments.map(function (assignment) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_task_assignment__WEBPACK_IMPORTED_MODULE_1__["TaskAssignment"], { task: task, key: assignment.uploadDate, assignment: assignment, shouldGetUrkundStatus: assignment.shouldRefresh });
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
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_digest_view__WEBPACK_IMPORTED_MODULE_3__["StateContext"]), tasks = _b.tasks, selectedCourse = _b.selectedCourse, notificationdigests = _b.notificationdigests;
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
            var taskAssignments = courseNotifications[task.id].filter(function (t) { return t.assignment.user === selectedUser; }).map(function (t) { return t.assignment; });
            return { task: task, assignments: Object(_helpers_assignments_common_functions__WEBPACK_IMPORTED_MODULE_7__["setupAssignments"])(taskAssignments, filterStudyGroups, tuitionStudents, task.sendToUrkund) };
        }
        return { task: null, assignments: [] };
    });
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
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, filteredAssignments.map(function (obj) {
                        return obj.assignments && obj.assignments.map(function (assignment) {
                            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_task_assignment__WEBPACK_IMPORTED_MODULE_4__["TaskAssignment"], { studentView: true, task: obj.task, key: assignment.uploadDate, assignment: assignment, shouldGetUrkundStatus: assignment.shouldRefresh });
                        });
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
/* harmony import */ var _apis_mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../apis/mock/mock-classroom-data */ "./src/apis/mock/mock-classroom-data.ts");













var AssignmentsContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({ filterStudyGroups: [], tuitionStudents: [] });
var AssignmentsView = (function () {
    var intl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"]).intl;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_digest_view__WEBPACK_IMPORTED_MODULE_4__["StateContext"]), tasks = _a.tasks, selectedCourse = _a.selectedCourse, edsSchool = _a.edsSchool, school = _a.school;
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({ selectedStudent: { label: null, value: null }, selectedStudyGroups: [] }), 2), filterData = _b[0], setFilteringData = _b[1];
    var defaultDescriptionMessage = "Här listas samtliga inlämningsuppgifter i din/dina kurser du handleder."
        + "Klicka till höger för att välja kurs. Kursens uppgifter syns nedan. Du kan öppna/dölja varje modul.";
    var emptyOrMock = school === 'KED' && selectedCourse && selectedCourse.studyGroups &&
        Object.keys(_apis_mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_11__["mockTuitionStudents"]).filter(function (m) { return selectedCourse.studyGroups.includes(m); }).map(function (sp) { return _apis_mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_11__["mockTuitionStudents"][sp]; });
    var tuitionStudents = selectedCourse && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_7__["flatten"])(edsSchool ? Object(kedbackend_observable__WEBPACK_IMPORTED_MODULE_9__["parallel"])(selectedCourse.studyGroups.map(function (stGroup) { return function () { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_8__["env"].edsClient.suspense.getTuitionGroupStudents({
        schoolName: edsSchool,
        tuitionGroupName: stGroup
    }); }; }))
        : emptyOrMock);
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
    var assignment = _a.assignment, shouldGetUrkundStatus = _a.shouldGetUrkundStatus, task = _a.task, studentView = _a.studentView;
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
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: assignmentsWithStatus.mediaLink, style: assignmentsWithStatus.metadata.$meta ? { opacity: 0.5 } : {} },
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
/* harmony import */ var kedbackend_observable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! kedbackend/observable */ "./kedbackend/observable.js");
/* harmony import */ var _course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../course-builder/sub-components/ellipsis-loader */ "./src/components/course-builder/sub-components/ellipsis-loader.tsx");
/* harmony import */ var _utility_components_with_observe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utility-components/with-observe */ "./src/components/utility-components/with-observe.tsx");














var contextInitialValue = { notificationdigests: {}, selectedCourse: null, teacherCourses: [], seenDigestsObservable: new kedbackend_observable__WEBPACK_IMPORTED_MODULE_10__["Emitter"]([]), school: "", edsSchool: "", tasks: [], courseViewerUrl: "" };
var StateContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(contextInitialValue);
var DigestView = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(_utility_components_with_observe__WEBPACK_IMPORTED_MODULE_12__["withObserve"])((function (_a) {
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
        (_b = _globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].seenStudentAssignments).tags.apply(_b, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(digestArray)).toValue() :
        new kedbackend_observable__WEBPACK_IMPORTED_MODULE_10__["Emitter"]([]);
    var contextValue = {
        notificationdigests: assignments,
        selectedCourse: selectedCourse,
        teacherCourses: myCourses,
        seenDigestsObservable: seenDigestsObservable,
        school: schoolName,
        edsSchool: school.edsSchoolNameGymn,
        tasks: taskAssignments,
        courseViewerUrl: courseViewerUrl
    };
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StateContext.Provider, { value: contextValue },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_ks_common_two_columns_page__WEBPACK_IMPORTED_MODULE_3__["TwoColumnsPage"], { left: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_11__["TimeoutEllipsisLoader"], null) },
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






var TeacherViewApp = function (_a) {
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
};


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
    var seenDigestsObserable = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_digest_view__WEBPACK_IMPORTED_MODULE_1__["StateContext"]).seenDigestsObservable;
    var seenDigests = seenDigestsObserable.read();
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
            return taskAssignments.filter(function (t) { return !seenDigests.find(function (d) { return d.digest === t.digest; }); }).length;
        }
        return 0;
    }
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
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_SetupLanguageIntl, _super);
        function _SetupLanguageIntl(props) {
            var _this = _super.call(this, props) || this;
            Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["addLocaleData"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_2___default.a, react_intl_locale_data_sv__WEBPACK_IMPORTED_MODULE_3___default.a));
            _this.messages = {
                'sv': _translations_sv_json__WEBPACK_IMPORTED_MODULE_4__,
                'en': _translations_en_json__WEBPACK_IMPORTED_MODULE_5__
            };
            moment__WEBPACK_IMPORTED_MODULE_8___default()().locale(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_7__["default"].KED_LOCALE);
            return _this;
        }
        _SetupLanguageIntl.prototype.render = function () {
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["IntlProvider"], { locale: _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_7__["default"].KED_LOCALE, messages: this.messages[_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_7__["default"].KED_LOCALE] },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props)));
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
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((classNames || []), (className ? [className] : []), ["align-horizontal"]).join(' ') }, children));
};


/***/ }),

/***/ "./src/components/utility-components/extra-page-buttons.tsx":
/*!******************************************************************!*\
  !*** ./src/components/utility-components/extra-page-buttons.tsx ***!
  \******************************************************************/
/*! exports provided: ExtraPageButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraPageButtons", function() { return ExtraPageButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apis_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apis/buttons */ "./src/apis/buttons.tsx");



var ExtraPageButtons = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apis_buttons__WEBPACK_IMPORTED_MODULE_2__["Button"], { action: function (e) {
            e.preventDefault();
            sessionStorage.setItem("supportUrl", window.location.href);
            window.location.href = "/4.2a395e4132f14296eb80002043.html";
        }, addClass: "btn-small", faIcon: "fas fa-exclamation-triangle", label: "Felanm\u00E4l" }),
    "\u00A0",
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apis_buttons__WEBPACK_IMPORTED_MODULE_2__["Button"], { action: function (e) {
            e.preventDefault();
            e.stopPropagation();
            var ruler = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#flytta");
            if (ruler.data("uiDraggable") === undefined) {
                ruler.draggable({
                    axis: "y",
                    cursorAt: { top: 1 }
                });
            }
            ruler.stop().slideToggle(600);
        }, faIcon: "fas fa-minus", label: "L\u00E4slinjal", addClass: "btn-small" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { id: "flytta", className: "ui-draggable ui-draggable-handle" }))); };


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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TextInput, _super);
    function TextInput(props) {
        return _super.call(this, props) || this;
    }
    TextInput.prototype.componentDidMount = function () {
        var _this = this;
        if (this.props.autoSelect) {
            setTimeout(function () {
                try {
                    _this.input.select();
                    _this.input.focus();
                }
                catch (e) { }
            }, 50);
        }
    };
    TextInput.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_form_field__WEBPACK_IMPORTED_MODULE_2__["FormField"], { label: this.props.label },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", autoFocus: this.props.autoFocus, id: this.props.id, size: this.props.size || 35, value: this.props.value, onChange: this.props.onChange && (function (ev) { return _this.props.onChange(ev.target.value); }), disabled: this.props.disabled, placeholder: this.props.placeholder, ref: function (elem) { return _this.input = elem; } }),
                this.props.additionalJsx)));
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormField, _super);
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
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((classNames || []), (className ? [className] : []), ["horizontalItem"]).join(' ') }, children));
};


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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OpenCloseBox, _super);
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
                    displayProgress && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_charts_goal_progress__WEBPACK_IMPORTED_MODULE_2__["GoalProgress"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, progressData)))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "openContent" + (contentClassName ? " " + contentClassName : "") }, children));
    };
    return OpenCloseBox;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/utility-components/timeout.tsx":
/*!*******************************************************!*\
  !*** ./src/components/utility-components/timeout.tsx ***!
  \*******************************************************/
/*! exports provided: DEFAULT_TIMEOUT_MS, Timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TIMEOUT_MS", function() { return DEFAULT_TIMEOUT_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeout", function() { return Timeout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var DEFAULT_TIMEOUT_MS = 1000;
function Timeout(_a) {
    var children = _a.children, _b = _a.timeoutms, timeoutms = _b === void 0 ? DEFAULT_TIMEOUT_MS : _b;
    var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2), isTimedout = _c[0], setIsTimedout = _c[1];
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var timer = setTimeout(function () { return setIsTimedout(true); }, timeoutms);
        return function () { return clearTimeout(timer); };
    }, []);
    return isTimedout ? children : null;
}


/***/ }),

/***/ "./src/components/utility-components/use-error.tsx":
/*!*********************************************************!*\
  !*** ./src/components/utility-components/use-error.tsx ***!
  \*********************************************************/
/*! exports provided: setCurrentErrorRenderer, useErrorRender, getCurrentErrorRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentErrorRenderer", function() { return setCurrentErrorRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useErrorRender", function() { return useErrorRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentErrorRenderer", function() { return getCurrentErrorRenderer; });
function setCurrentErrorRenderer(render) {
    window["currentErrorRender"] = render;
}
var useErrorRender = setCurrentErrorRenderer;
function getCurrentErrorRenderer() {
    return window["currentErrorRender"];
}


/***/ }),

/***/ "./src/components/utility-components/with-observe.tsx":
/*!************************************************************!*\
  !*** ./src/components/utility-components/with-observe.tsx ***!
  \************************************************************/
/*! exports provided: withObserve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withObserve", function() { return withObserve; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kedbackend_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/observable */ "./kedbackend/observable.js");
/* harmony import */ var _use_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-error */ "./src/components/utility-components/use-error.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");





function withObserve(Component) {
    return function (props) {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}), 2), _ = _a[0], setState = _a[1]; // This state is a force-update state.
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null), 2), error = _b[0], setError = _b[1];
        var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({ renderer: null }), 1), errorRenderer = _c[0];
        var observables = [];
        if (error) {
            if (!errorRenderer.renderer)
                return null; // Or should we throw and let an upper component catch it with componentDidCatch()
            return errorRenderer.renderer(error);
        }
        function observer(value, error, subscription) {
            if (error) {
                setError(error);
                if (!errorRenderer.renderer)
                    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["showError"])(error);
            }
            else {
                setError(null);
                setState({}); // Force update
            }
        }
        // Make sure to unsubscribe all subscriptions before every re-render, and when component is unmounted:
        Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
            var subscriptions = observables.map(subscribeButNotSync(observer));
            return function () { return subscriptions.forEach(function (s) { return s.unsubscribe(); }); };
        });
        var prevCtx = kedbackend_observable__WEBPACK_IMPORTED_MODULE_2__["FiberContext"].current;
        try {
            kedbackend_observable__WEBPACK_IMPORTED_MODULE_2__["FiberContext"].current = { observables: observables };
            Object(_use_error__WEBPACK_IMPORTED_MODULE_3__["setCurrentErrorRenderer"])(null);
            return Component(props);
        }
        catch (anything) {
            errorRenderer.renderer = Object(_use_error__WEBPACK_IMPORTED_MODULE_3__["getCurrentErrorRenderer"])();
            if (anything && typeof anything.then === 'function') {
                throw anything; // Component suspended. Forward thenable.
            }
            if (errorRenderer.renderer) {
                return errorRenderer.renderer(anything);
            }
            else {
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["showError"])(anything);
                return null;
            }
        }
        finally {
            kedbackend_observable__WEBPACK_IMPORTED_MODULE_2__["FiberContext"].current = prevCtx;
            errorRenderer.renderer = Object(_use_error__WEBPACK_IMPORTED_MODULE_3__["getCurrentErrorRenderer"])();
            Object(_use_error__WEBPACK_IMPORTED_MODULE_3__["setCurrentErrorRenderer"])(null);
        }
    };
}
function subscribeButNotSync(observer) {
    return function (observable) {
        var lastValue = "sync";
        try {
            return observable.subscribe(function (value, error, subscription) {
                if (error)
                    return observer(value, error, subscription);
                if (lastValue === "sync") {
                    lastValue = value;
                    // Don't forward to observer. In an optimal world, should compare this value with the initial value got in Value.read()
                    // In theory, it could have changed between render and effect. But for now, assume it does not change that fast.
                }
                else if (value !== lastValue) {
                    // Value has changed. Call observer:
                    observer(value, error, subscription);
                    lastValue = value;
                }
            });
        }
        finally {
            if (lastValue === "sync")
                lastValue = null;
        }
    };
}


/***/ }),

/***/ "./src/components/utility-components/wysiwyg/action-helpers/federation.ts":
/*!********************************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/action-helpers/federation.ts ***!
  \********************************************************************************/
/*! exports provided: addFederation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFederation", function() { return addFederation; });
var addFederation = function (url) {
    return url.replace(
    // Handle Liber
    /(onlinebok\.liber\.se\/web-reader)\/#\/(.*?)/, '$1/?cidp=http%3A%2F%2Fsts.kunskapsskolan.se%2Fadfs%2Fservices%2Ftrust#$2/').replace(
    // Handle Diglär
    /(app\.digilar\.se\/[^?]*?)$/, '$1?provider=skolfederation&idp=kunskapsskolan');
};


/***/ }),

/***/ "./src/components/utility-components/wysiwyg/action-helpers/insert-element.ts":
/*!************************************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/action-helpers/insert-element.ts ***!
  \************************************************************************************/
/*! exports provided: insertElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertElement", function() { return insertElement; });
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

/***/ "./src/components/utility-components/wysiwyg/action-helpers/insert-image.ts":
/*!**********************************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/action-helpers/insert-image.ts ***!
  \**********************************************************************************/
/*! exports provided: insertImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertImage", function() { return insertImage; });
/* harmony import */ var _insert_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insert-element */ "./src/components/utility-components/wysiwyg/action-helpers/insert-element.ts");

function insertImage(promptMsg, editor) {
    var url = window.prompt(promptMsg);
    if (url) {
        var img = document.createElement("img");
        img.src = url;
        img.tabIndex = 1;
        img.onblur = editor.onBlur;
        Object(_insert_element__WEBPACK_IMPORTED_MODULE_0__["insertElement"])(img);
        editor.triggerOnChange();
    }
}


/***/ }),

/***/ "./src/components/utility-components/wysiwyg/action-helpers/link-dialog.tsx":
/*!**********************************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/action-helpers/link-dialog.tsx ***!
  \**********************************************************************************/
/*! exports provided: LinkDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkDialog", function() { return LinkDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_field_text_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form-field-text-input */ "./src/components/utility-components/form-field-text-input.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _align_horizontal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../align-horizontal */ "./src/components/utility-components/align-horizontal.tsx");
/* harmony import */ var _horizontal_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../horizontal-item */ "./src/components/utility-components/horizontal-item.tsx");








function LinkDialog(_a) {
    var onSubmit = _a.onSubmit, onDelete = _a.onDelete, onCancel = _a.onCancel, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["onSubmit", "onDelete", "onCancel"]);
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.url), 2), url = _b[0], setUrl = _b[1];
    var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("_blank"), 2), target = _c[0], setTarget = _c[1]; //useState(props.target);
    var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.text), 2), text = _d[0], setText = _d[1];
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, props.url ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Redigera l\u00E4nk"], ["Redigera l\u00E4nk"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Skapa l\u00E4nk"], ["Skapa l\u00E4nk"])))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { style: { fontSize: "8pt" } },
                "F\u00F6lj l\u00E4nken: ",
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { href: url, style: { marginLeft: "12px" }, target: "_blank" }, url)),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_form_field_text_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["URL"], ["URL"]))), id: "LinkDialog:URL", placeholder: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ange URL"], ["Ange URL"]))), value: url, autoFocus: !url, autoSelect: !url, onChange: function (url) { return setUrl(url); } }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_form_field_text_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Text"], ["Text"]))), id: "LinkDialog:Text", placeholder: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["Ange l\u00E4nktext"], ["Ange l\u00E4nktext"]))), value: text, autoFocus: !!url, autoSelect: !!url, onChange: function (text) { return setText(text); } })),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_align_horizontal__WEBPACK_IMPORTED_MODULE_6__["AlignHorizontal"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_horizontal_item__WEBPACK_IMPORTED_MODULE_7__["HorizontalItem"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { tabIndex: 1, className: "btn btn-large btn-default", onClick: function () {
                        return url
                            ? onSubmit({ url: url, target: target, text: text })
                            : props.url
                                ? onDelete()
                                : onCancel();
                    } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], { id: "common.save", defaultMessage: "Spara" }))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_horizontal_item__WEBPACK_IMPORTED_MODULE_7__["HorizontalItem"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { tabIndex: 1, className: "btn btn-large btn-warning", onClick: function () { return onDelete(); } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], { id: "url.remove", defaultMessage: "Ta bort l\u00E4nken" }))))));
}
// TODO: Move to some logic in common lib so that migration scripts and washHtml can also use this logic:
function urlDefaultTarget(url) {
    return url.startsWith(location.protocol + "//" + location.host)
        ? null
        : url.startsWith("/content")
            ? "_blank"
            : url.startsWith(_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["cfg"].KED_WORDBANKS_URL)
                ? "_blank"
                : url.startsWith("/")
                    ? null
                    : "_blank";
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/components/utility-components/wysiwyg/action-helpers/open-link-dialog.tsx":
/*!***************************************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/action-helpers/open-link-dialog.tsx ***!
  \***************************************************************************************/
/*! exports provided: openLinkDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLinkDialog", function() { return openLinkDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _restore_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../restore-selection */ "./src/components/utility-components/wysiwyg/restore-selection.ts");
/* harmony import */ var _link_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link-dialog */ "./src/components/utility-components/wysiwyg/action-helpers/link-dialog.tsx");
/* harmony import */ var _federation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./federation */ "./src/components/utility-components/wysiwyg/action-helpers/federation.ts");




function openLinkDialog(ev, _a) {
    var openDialog = _a.openDialog, closeDialog = _a.closeDialog;
    var currentSelection = Object(_restore_selection__WEBPACK_IMPORTED_MODULE_1__["saveSelection"])();
    var selection = document.getSelection();
    var currentText = selection.toString();
    var node = selection.anchorNode;
    var currentHTML = node["innerHTML"];
    var url = "";
    var target = null;
    if (node.nodeType === 1) {
        var element = node;
        if (element.tagName === "A") {
            url = element.getAttribute("href");
            target = element.getAttribute("target");
        }
    }
    openDialog(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_link_dialog__WEBPACK_IMPORTED_MODULE_2__["LinkDialog"], { url: url, text: currentText, target: target, onSubmit: function (_a) {
            var url = _a.url, target = _a.target, text = _a.text;
            closeDialog();
            Object(_restore_selection__WEBPACK_IMPORTED_MODULE_1__["restoreSelection"])(currentSelection);
            var elem = document.createElement("a");
            elem.href = Object(_federation__WEBPACK_IMPORTED_MODULE_3__["addFederation"])(url);
            if (target)
                elem.target = target;
            elem.appendChild(document.createTextNode(text));
            document.execCommand("insertHTML", false, elem.outerHTML);
        }, onDelete: function () {
            closeDialog();
            Object(_restore_selection__WEBPACK_IMPORTED_MODULE_1__["restoreSelection"])(currentSelection);
            document.execCommand("delete");
            document.execCommand("insertHTML", false, currentHTML);
        }, onCancel: function () {
            closeDialog();
            Object(_restore_selection__WEBPACK_IMPORTED_MODULE_1__["restoreSelection"])(currentSelection);
        } }));
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
/* harmony import */ var _action_helpers_open_link_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-helpers/open-link-dialog */ "./src/components/utility-components/wysiwyg/action-helpers/open-link-dialog.tsx");
/* harmony import */ var _action_helpers_insert_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-helpers/insert-image */ "./src/components/utility-components/wysiwyg/action-helpers/insert-image.ts");



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
        title: 'Heading 1', result: function () {
            if (document.getSelection().focusNode.parentElement.nodeName == "H1") {
                Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<P>');
            }
            else {
                Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<H1>');
            }
        }
    },
    heading2: {
        icon: '<b>H<sub>2</sub></b>',
        title: 'Heading 2',
        result: function () {
            if (document.getSelection().focusNode.parentElement.nodeName == "H2") {
                Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<P>');
            }
            else {
                Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<H2>');
            }
        }
    },
    heading3: {
        icon: '<b>H<sub>3</sub></b>',
        title: 'Heading 3',
        result: function () {
            if (document.getSelection().focusNode.parentElement.nodeName == "H3") {
                Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<P>');
            }
            else {
                Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('formatBlock', '<H3>');
            }
        }
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
        icon: '<i class="fas fa-outdent" aria-hidden="true"></i>',
        title: 'Outdent',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])("outdent"); }
    },
    indent: {
        icon: '<i class="fas fa-indent" aria-hidden="true"></i>',
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
        result: _action_helpers_open_link_dialog__WEBPACK_IMPORTED_MODULE_1__["openLinkDialog"]
    },
    image: {
        icon: '&#128247;',
        title: 'Image',
        promptMsg: 'Enter the URL of the image',
        result: function (ev, editor) {
            Object(_action_helpers_insert_image__WEBPACK_IMPORTED_MODULE_2__["insertImage"])(this.promptMsg, editor);
        }
    },
    clear: {
        icon: "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1000 1000\"><g><g><path d=\"M25.3,867.5h551.3V990H25.3V867.5z M882.8,132.5H593.3L417.4,806.3H290.8l175.9-673.8H209.1V10h673.8V132.5z M915.1,990L790.9,865.8L666.7,990l-59.6-59.6l124.2-124.2L607.2,682.1l59.6-59.6l124.2,124.2l124.2-124.2l59.6,59.6L850.5,806.3l124.2,124.2L915.1,990z\"/></g></g></svg>",
        title: 'Clear formatting',
        result: function () { return Object(_exec__WEBPACK_IMPORTED_MODULE_0__["default"])('removeformat'); }
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

/***/ "./src/components/utility-components/wysiwyg/html-patch-policy.ts":
/*!************************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/html-patch-policy.ts ***!
  \************************************************************************/
/*! exports provided: patchElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchElement", function() { return patchElement; });
function patchElement(element) {
    var modified = false;
    if (element.tagName === "A") {
        var href = element.getAttribute("href");
        var target = element.getAttribute("target");
        if (href) {
            if (href.startsWith("javascript:")) {
                // Fix "javascript:window.open('...')" URLS
                var url = href;
                var windowOpen = "window.open('";
                var pWindowOpen = url.indexOf(windowOpen);
                if (pWindowOpen >= 0) {
                    var urlEnd = url.substr(pWindowOpen + windowOpen.length);
                    var pUrlEnd = urlEnd.indexOf("'");
                    if (pUrlEnd >= 0) {
                        var newUrl = urlEnd.substr(0, pUrlEnd);
                        element.setAttribute("href", newUrl);
                        element.setAttribute("target", "_blank"); // The reason they use JS links is for opening in new tab
                        modified = true;
                    }
                }
            }
            else if (href.startsWith("https://") || href.startsWith("http://")) {
                try {
                    var url = new URL(href);
                    // Fix digilär URLs:
                    if (url.host === "xn--digilr-fua.se") {
                        if (url.search[0] === '?') {
                            var pSecondQ = url.search.indexOf('?', 1);
                            if (pSecondQ > 0) {
                                url.search = url.search.substr(0, pSecondQ) + "&" + url.search.substr(pSecondQ + 1);
                                element.setAttribute("href", url.href);
                                modified = true;
                            }
                        }
                    }
                    // Fix so that external URLS are opened in separate tabs
                    if (location.hostname !== 'localhost') {
                        if (url.host !== location.host) {
                            if (!element.getAttribute("target")) {
                                element.setAttribute("target", "_blank");
                                modified = true;
                            }
                        }
                    }
                }
                catch (error) {
                    element.removeAttribute("a");
                    modified = true;
                }
            }
            else if (href.startsWith("/content?")) { // Should maybe use KED.cfg.KED_RESOURCES_URL instead of hardcoding "/content?".
                if (!element.getAttribute("target")) {
                    element.setAttribute("target", "_blank");
                    modified = true;
                }
            }
            else if (href.startsWith("ks.kunskapsporten.se/content?")) {
                // Rewriting the effect of earlier bug. This if-statement can be removed some time or
                // replaced by a script  to make sure there are no such links there anymore
                var pSlash = href.indexOf('/');
                element.setAttribute("href", href.substr(pSlash));
                element.setAttribute("target", "_blank");
                modified = true;
            }
        }
    }
    return modified;
}


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
            icon: "<div style=\"position:relative\">\n      <i class=\"fas fa-align-right\" aria-hidden=\"true\"></i>\n      <div style=\"position:absolute; left:-4px;top:0; transform: scale(0.5); transform-origin: left top\">\n        <i class=\"far fa-image\" aria-hidden=\"true\"></i>\n      </div>\n    </div>",
            title: 'Låt bilden flyta vänster om text',
            result: function () { return cb('float-left'); }
        }, {
            name: 'float-right',
            icon: "<div style=\"position:relative\">\n      <i class=\"fas fa-align-left\" aria-hidden=\"true\"></i>\n      <div style=\"position:absolute; right:-4px;top:0; transform: scale(0.5); transform-origin: right top\">\n        <i class=\"far fa-image\" aria-hidden=\"true\"></i>\n      </div>\n    </div>",
            title: 'Låt bilden flyta höger om text',
            result: function () { return cb('float-right'); }
        }, {
            name: 'unfloat',
            icon: "<div style=\"position:relative;\" aria-hidden=\"true\">\n      <div style=\"position:absolute;top:0;left:0\">&#8254;</div>\n      <div style=\"position:absolute;top:0:left:0;transform: scale(0.5); transform-origin: left bottom\">\n        <i class=\"far fa-image\" aria-hidden=\"true\"></i>\n      </div>\n      <div style=\"position:absolute;top:0;left:0\">_</div>\n    </div>",
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
/* harmony import */ var _restore_selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restore-selection */ "./src/components/utility-components/wysiwyg/restore-selection.ts");
/* harmony import */ var _course_builder_ks_common_dialog_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../course-builder-ks/common/dialog-context */ "./src/components/course-builder-ks/common/dialog-context.ts");








var classes = {
    actionbar: 'wysiwyg-actionbar',
    button: 'wysiwyg-button',
    content: 'wysiwyg-content',
    focusrect: 'wysiwyg-focusrect',
    focuspoint: 'wysiwyg-focuspoint',
    readonlyContent: 'wysiwyg-content readonly'
};
function Wysiwyg(props) {
    var dialogCtx = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_course_builder_ks_common_dialog_context__WEBPACK_IMPORTED_MODULE_7__["DialogsContext"]);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WysiwygInner, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { openDialog: dialogCtx && dialogCtx.openDialog, closeDialog: dialogCtx && dialogCtx.closeDialog }));
}
var WysiwygInner = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WysiwygInner, _super);
    function WysiwygInner(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { focusRect: null };
        _this.onClick = _this.onClick.bind(_this);
        //this.onFocus = this.onFocus.bind(this);
        _this.onBlur = _this.onBlur.bind(_this);
        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        _this.openDialog = props.openDialog;
        _this.closeDialog = props.closeDialog;
        return _this;
    }
    Object.defineProperty(WysiwygInner.prototype, "focusElem", {
        get: function () {
            return this.contentDiv && this.contentDiv.querySelector(".focusElem");
        },
        enumerable: true,
        configurable: true
    });
    WysiwygInner.prototype.componentDidMount = function () {
        var _this = this;
        this.contentDiv.innerHTML = Object(_wash_html__WEBPACK_IMPORTED_MODULE_3__["washHtml"])(this.props.html);
        if (!this.props.readOnly) {
            //this.contentDiv.onfocus = this.onFocus;
            this.contentDiv.onblur = this.onBlur;
            this.contentDiv.onclick = this.onClick;
            Array.from(this.contentDiv.querySelectorAll("img")).map(function (elem) { return elem; })
                .forEach(function (elem) {
                elem.tabIndex = 1; // Need onBlur event to trigger removal of focusRect.
                // and for onBlur event to occur on img elements, they must explicitely have a tabIndex
                elem.onblur = _this.onBlur;
            });
        }
        if (this.props.reportNumChars) {
            this.props.reportNumChars((this.contentDiv && this.contentDiv.innerText && this.contentDiv.innerText.length) || 0);
        }
    };
    WysiwygInner.prototype.triggerOnChangeInternal = function (html) {
        this.props.onChange && this.props.onChange(Object(_wash_html__WEBPACK_IMPORTED_MODULE_3__["washHtml"])(html));
    };
    WysiwygInner.prototype.triggerOnChange = function () {
        this.triggerOnChangeInternal(this.contentDiv.innerHTML);
    };
    WysiwygInner.prototype.onClick = function (ev) {
        var elem = closest(ev.target, ".editor A,.editor IMG");
        if (!elem)
            return;
        switch (elem.tagName) {
            case "A":
                // Re-open the link dialog
                var linkAction = this.getActionsToUse().filter(function (a) { return a.name === "link"; })[0];
                if (linkAction) {
                    Object(_restore_selection__WEBPACK_IMPORTED_MODULE_6__["selectAllText"])(elem);
                    linkAction.result(ev, this);
                    ev.stopPropagation();
                    ev.preventDefault();
                }
                break;
            case "IMG":
                var contentParent = this.contentDiv.parentElement;
                var newState = {
                    focusRect: getRelatativeClientRect(contentParent, elem),
                };
                this.setState(newState);
                // Add the .focusElem class so we can find focusElem
                // This DOM could be replaced so we cannot store a reference to the
                // focusElem itself. 
                // Before, we did that but strange bugs occurred when trying to
                // drag the focusRect corners on a newly inserted image.
                this.removeAllFocusElemClasses();
                elem.className = (elem.className || "") + " focusElem";
                break;
        }
    };
    WysiwygInner.prototype.onBlur = function (ev) {
        var focusElem = this.focusElem;
        if (!focusElem || (ev.target === focusElem && ev.relatedTarget !== this.focusRectDiv) ||
            ev.target === this.focusRectDiv) {
            this.removeFocusRect();
        }
    };
    WysiwygInner.prototype.onMouseDown = function (ev) {
        if ((ev.target.className || "").split(' ').indexOf(classes.focuspoint) >= 0) {
            var corner = this.getRectCorner(ev);
            this.corner = corner;
            this.resizeStartX = ev.clientX;
        }
    };
    WysiwygInner.prototype.onMouseMove = function (ev) {
        var focusElem = this.focusElem;
        if (this.corner && this.state.focusRect && focusElem) {
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
            focusElem.style.width = newWidth + "px";
            focusElem.style.height = newHeight + "px";
            this.setState({
                focusRect: getRelatativeClientRect(this.contentDiv.parentElement, focusElem)
            });
        }
    };
    WysiwygInner.prototype.onMouseUp = function (ev) {
        if (this.corner && this.state.focusRect && this.focusElem) {
            this.corner = null;
            this.triggerOnChange();
        }
    };
    WysiwygInner.prototype.getRectCorner = function (ev) {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])((ev.target.className || '').split(' ')), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    WysiwygInner.prototype.execImageEditAction = function (cmd) {
        //console.log(cmd);
        var focusElem = this.focusElem;
        if (!focusElem)
            return;
        //console.log("doing it");
        switch (cmd) {
            case 'float-left':
                focusElem.style.cssFloat = 'left';
                break;
            case 'float-right':
                focusElem.style.cssFloat = 'right';
                break;
            case 'unfloat':
                focusElem.style.cssFloat = '';
                break;
        }
        this.triggerOnChange();
        this.setState({ focusRect: getRelatativeClientRect(this.contentDiv.parentElement, focusElem) });
    };
    WysiwygInner.prototype.getActionsToUse = function () {
        var _this = this;
        var defaultActions = this.props.defaultActions || _actions__WEBPACK_IMPORTED_MODULE_5__["default"];
        var actionsToUse = this.props.actions ? this.props.actions.map(function (action) {
            return typeof action === 'string' ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ name: action }, defaultActions[action]) :
                defaultActions[action.name] ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultActions[action.name]), action) :
                    action;
        })
            : Object.keys(defaultActions).map(function (action) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ name: action }, defaultActions[action])); });
        if (this.state.focusRect) {
            actionsToUse = actionsToUse.concat(Object(_image_edit_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(function (cmd) { return _this.execImageEditAction(cmd); }));
        }
        return actionsToUse;
    };
    WysiwygInner.prototype.removeAllFocusElemClasses = function () {
        this.contentDiv && this.contentDiv.querySelectorAll(".focusElem").forEach(function (elem) {
            elem.className = elem.className.split(' ').filter(function (cn) { return cn !== "focusElem"; }).join(' ');
        });
    };
    WysiwygInner.prototype.removeFocusRect = function () {
        this.removeAllFocusElemClasses();
        this.setState({ focusRect: null });
    };
    WysiwygInner.prototype.render = function () {
        var _this = this;
        var actionsToUse = this.getActionsToUse();
        var focusRect = this.state.focusRect;
        var _a = this.props, readOnly = _a.readOnly, reportNumChars = _a.reportNumChars, maxChars = _a.maxChars;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this.props.className },
            !readOnly && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classes.actionbar }, actionsToUse.map(function (action, idx) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { key: idx, className: classes.button, dangerouslySetInnerHTML: { __html: action.icon }, title: action.title, onMouseDown: function (ev) { action.result(ev, _this); }, onMouseUp: function (ev) { return setTimeout(function () { return _this.contentDiv.focus(); }, 10); } });
            })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: readOnly ? classes.readonlyContent : classes.content, style: { position: 'relative', top: 0, left: 0 }, onMouseMove: this.onMouseMove, onMouseDown: this.onMouseDown, onMouseUp: this.onMouseUp },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "editor", ref: function (div) { return _this.contentDiv = div; }, dangerouslySetInnerHTML: readOnly ? { __html: Object(_wash_html__WEBPACK_IMPORTED_MODULE_3__["washHtml"])(this.props.html) } : null, contentEditable: !readOnly, onPaste: function (ev) {
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
                    } : null, onInput: function (ev) { return _this.triggerOnChangeInternal(ev.target.innerHTML); }, onKeyDown: function (ev) {
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
                        var focusElem = _this.focusElem;
                        if ((ev.keyCode === 8 || ev.keyCode === 46) && // Delete or Back buttons
                            focusElem && _this.state.focusRect) {
                            if (focusElem && focusElem.parentElement) {
                                focusElem.parentElement.removeChild(focusElem); // Remove marked image
                            }
                            _this.removeFocusRect();
                            _this.triggerOnChange();
                        }
                    } }),
                focusRect && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: function (div) { return _this.focusRectDiv = div; }, className: classes.focusrect, tabIndex: 1, onBlur: function (ev) { return _this.removeFocusRect(); }, style: {
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
    return WysiwygInner;
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
function closest(target, selector) {
    if (target && target["nodeType"] === 1) {
        var element = target;
        return element.closest(selector);
    }
    return null;
}


/***/ }),

/***/ "./src/components/utility-components/wysiwyg/restore-selection.ts":
/*!************************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/restore-selection.ts ***!
  \************************************************************************/
/*! exports provided: saveSelection, restoreSelection, selectAllText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSelection", function() { return saveSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreSelection", function() { return restoreSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllText", function() { return selectAllText; });
function saveSelection() {
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            return sel.getRangeAt(0);
        }
    }
    else if (document["selection"] && document["selection"].createRange) {
        return document["selection"].createRange();
    }
    return null;
}
function restoreSelection(range) {
    if (range) {
        if (window.getSelection) {
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
        else if (document["selection"] && range.select) {
            range.select();
        }
    }
}
function selectAllText(elem) {
    var range, selection;
    // A jQuery selector should pass through too
    //elem = (elem.jquery && elem.length) ? elem[0] : elem;
    if (!elem) {
        return;
    }
    else if (elem.nodeName.match(/^(INPUT|TEXTAREA)$/i)) {
        elem.focus();
        elem.select();
    }
    else if (typeof window.getSelection === "function") {
        selection = window.getSelection();
        if (typeof selection.setBaseAndExtent === "function") {
            // Safari
            selection.setBaseAndExtent(elem, 0, elem, 1);
        }
        else if (typeof selection.addRange === "function"
            && typeof selection.removeAllRanges === "function"
            && typeof document.createRange === "function") {
            // Mozilla or Opera 10.5+
            range = document.createRange();
            range.selectNodeContents(elem);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
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
/* harmony import */ var _html_patch_policy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-patch-policy */ "./src/components/utility-components/wysiwyg/html-patch-policy.ts");

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
    span: { style: true },
    // table tags:
    table: { border: true },
    tbody: {},
    thead: {},
    tfoot: {},
    tr: {},
    td: { headers: true, colspan: true, rowspan: true },
    th: { abbr: true, headers: true, scope: true, sorted: true, colspan: true, rowspan: true },
    blockquote: { style: true },
};
function washHtml(html) {
    if (!html)
        return "";
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
    var modified = Object(_html_patch_policy__WEBPACK_IMPORTED_MODULE_0__["patchElement"])(element);
    var policy = element.tagName && HTML_WASH_POLICY[element.tagName.toLowerCase()];
    if (!policy) {
        console.warn("Wysiwyg: not allowed tag", element.tagName);
        washChildNodes(element);
        removeMiddleElement(element);
        return true;
    }
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
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_API_URL = "https://backend.kedschools.com/kedbackend-canary/api/"; // "https://kedbackendtest.azurewebsites.net/api/"
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].EDS_API_URL = "https://api.kedschools.se/studentportal/"; // "https://edsportalowinapi.azurewebsites.net/api/"
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_TOKEN_URL = ""; // "https://kedauthtest.azurewebsites.net/token"
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_CLIENT_ID = ""; // "devclient", "testclient", "..."
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_CDN = "";
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_CLIENT_SECRET = "";
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_REALM = "SE1"; // "SE1"
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_LOCALE = _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_LOCALE || "sv"; // "sv", "en". Only set from process.env if not set from SiteVision element config.
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_SCHOOL_LOCALE = _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_SCHOOL_LOCALE || "sv"; // "sv", "en_sin", "en_nin". Only set from process.env if not set from SiteVision element config.
_globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_RESOURCES_URL = _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_0__["default"].KED_RESOURCES_URL || process.env.KED_RESOURCES_URL;
__webpack_require__.p = "" + "/vendor/";

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
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_1__["splitUrlAndQuery"])(tokenPath), 2), tokenPathWithoutQuery = _a[0], tokenQueryString = _a[1];
    var tokenPathQuery = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_1__["parseQueryString"])(tokenQueryString);
    return tokenPathWithoutQuery + Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_1__["generateQueryString"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, tokenPathQuery), impersonationProps), { scopes: scopes.join(',') }));
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
    getBranchIdSuspense: function (school, courseId) {
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
            .map(function (ids) { return ids.length > 0 ? ids[0] : undefined; })
            .read();
    },
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
        displayName: "Test Student",
        mail: "test-student@kedschools.com",
        roles: ["STUDENT"],
        school: "KED",
        username: "test-student@kedschools.com"
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

/***/ "./src/test/testpage-teacherview.tsx":
/*!*******************************************!*\
  !*** ./src/test/testpage-teacherview.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _set_current_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-current-user */ "./src/test/set-current-user.ts");
/* harmony import */ var _global_setters_set_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-setters/set-all */ "./src/global-setters/set-all.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_choose_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/choose-user */ "./src/test/utils/choose-user.tsx");
/* harmony import */ var _utils_include_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/include-css */ "./src/test/utils/include-css.ts");
/* harmony import */ var _utils_include_optional_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/include-optional-css */ "./src/utils/include-optional-css.ts");
/* harmony import */ var _components_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_utility_components_SetupLanguageIntl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utility-components/SetupLanguageIntl */ "./src/components/utility-components/SetupLanguageIntl.tsx");
/* harmony import */ var _components_teacher_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/teacher-view */ "./src/components/teacher-view/index.tsx");

// <Initialization>
 // Emulate server-side script to set current user
 // Client-side initialization
// </Initialization>









Object(_utils_include_optional_css__WEBPACK_IMPORTED_MODULE_7__["includeOptionalCSS"])({
    v1: [
        'css/dialog.css',
        'css/grid-css-patch.css'
    ],
    includeCSS: _utils_include_css__WEBPACK_IMPORTED_MODULE_6__["includeCSS"],
    version: 7,
    versionFolder: 'css/delta-css/courseviewer'
});
var _App = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_App, _super);
    function _App(props) {
        return _super.call(this, props) || this;
        //if (!location.hash) location.hash = "#/";
    }
    _App.prototype.render = function () {
        var intl = this.props.intl;
        return _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].currentUser ?
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_8__["LanguageContext"].Provider, { value: { intl: intl } },
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_teacher_view__WEBPACK_IMPORTED_MODULE_11__["TeacherViewApp"], { courseBuilderUrl: "coursebuilder.html", viewCourseUrl: "http://localhost:8082/courseviewer.html" })) :
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_utils_choose_user__WEBPACK_IMPORTED_MODULE_5__["ChooseUser"], null);
    };
    return _App;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]));
var App = Object(_components_utility_components_SetupLanguageIntl__WEBPACK_IMPORTED_MODULE_10__["setupIntl"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_9__["injectIntl"])(_App));
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
/*! exports provided: addeditsubtask.deleteSubtask, addeditsubtask.editSubtask, addeditsubtask.nameLabel, addeditsubtask.addSubtask, calendar.currentDate, calendar.fullDayEventLocation, calendar.loadCalendarEvents, calendar.loadingCalendar, calendar.weekNumber, common.addDescriptionPlhd, common.cancel, common.changesNotSavedErrorOccured, common.changesNotSavedUnauthorized, common.descriptionLabel, common.errorSavingData, common.linkLabel, common.loading, common.nameLabel, common.save, common.saved, common.saving, common.remove, customTask.addWorkGoalPrimarySchoolTitle, customTask.addWorkGoalGymnasiumSchoolTitle, customTask.enterNamePlhd, learningGoalsLost.overall, task.addSubtask, task.editTask, task.editWorkGoals, task.enterTaskNamePlhd, task.removeDeadline, task.removeThisTask, task.removeWorkGoals, task.setDeadline, task.setDeadlineLabel, task.subTasks, task.targetNameLabel, task.taskNameLabel, task.whatShouldYouDoPlhd, taskList.nextWeekTask, taskList.lastWeekTask, taskList.currentWeekTask, taskList.removeTaskFromWeeklyPlanning, taskList.addTaskToWeeklyPlanning, termplanner.comments, termplanner.course, termplanner.edsGoalGrades, termplanner.englishLanguage, termplanner.finalStep, termplanner.firstTerm, termplanner.hindiLanguage, termplanner.ict, termplanner.loadingTermplanner, termplanner.maths, termplanner.modernLanguage, termplanner.noFinalStepAvailable, termplanner.secondTerm, termplanner.termPlanning, termplanner.weekNumber, termplanner.chartsBoxTitle, termplanner.yoga, tutorNoteDialog.weekComment, test.chooseComponentLabel, test.pageDescription, url.remove, userTasks.addLearningGoal, userTasks.deleteLearningGoal, userTasks.primarySchoolGoals, userTasks.gymnasiumSchoolGoals, weekNotebook.title, weekplanner.addLearningGoalGymnasiumSchool, weekplanner.addLearningGoalPrimarySchool, weekplanner.addLearningGoalPrimarySchoolTitle, weekplanner.addLearningGoalGymnasiumSchoolTitle, weekplanner.confirmRemoveLearningObjectives, weekplanner.copyPreviousWeekTaks, weekplanner.emptyLearningGoalErr, weekplanner.evaluation, weekplanner.evaluationDescription, weekplanner.learningGoalPrimary, weekplanner.learningGoalGymnasium, weekplanner.logBook, weekplanner.nameCannotBeEmpty, weekplanner.nameMustNotBeEmpty, weekplanner.strategy, weekplanner.strategyAndEvaluation, weekplanner.strategyDescription, weekplanner.weekNumber, wysiwyg.bold, wysiwyg.code, wysiwyg.heading1, wysiwyg.heading2, wysiwyg.heading3, wysiwyg.image, wysiwyg.imagePromptMsg, wysiwyg.italic, wysiwyg.line, wysiwyg.link, wysiwyg.olist, wysiwyg.paragraph, wysiwyg.quote, wysiwyg.strikethrough, wysiwyg.ulist, wysiwyg.underline, teacherView.coursesViewTitle, teacherView.assignmentsViewTitle, teacherView.assignmentsViewDescription, teacherView.noUploadedAssignmentsForModule, teacherView.assignmentStudentName, teacherView.assignmentFileName, teacherView.assignmentSubmittedAt, teacherView.assignmentReport, teacherView.assignmentGrade, teacherView.noTaskAssignments, teacherView.notSubmittedAssignments, teacherView.remindBtn, teacherView.filterByStudygroupsPlaceholder, teacherView.emailRemindersSentMsg, teacherView.sendEmailAtLeastOneRecipientErr, teacherView.emailReminderInProgress, teacherView.filterByStudent, teacherView.assignmentTaskName, teacherView.assignmentTaskDescription, teacherView.assignmentTaskDeadline, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"addeditsubtask.deleteSubtask\":\"Delete subtask\",\"addeditsubtask.editSubtask\":\"Edit subtask\",\"addeditsubtask.nameLabel\":\"Name of subtask\",\"addeditsubtask.addSubtask\":\"Add sub-task\",\"calendar.currentDate\":\"Week {week}, {year}\",\"calendar.fullDayEventLocation\":\"Place: {location}\",\"calendar.loadCalendarEvents\":\"Load calendar events...\",\"calendar.loadingCalendar\":\"Loading calendars... (listing...)\",\"calendar.weekNumber\":\"W{weekNumber}\",\"common.addDescriptionPlhd\":\"Add description...\",\"common.cancel\":\"Cancel\",\"common.changesNotSavedErrorOccured\":\"An error occured while saving data. Your changes were not saved.\",\"common.changesNotSavedUnauthorized\":\"The changes were not saved due to insufficient authority\",\"common.descriptionLabel\":\"Description\",\"common.errorSavingData\":\"An error occured while saving data.\",\"common.linkLabel\":\"Link\",\"common.loading\":\"Loading...\",\"common.nameLabel\":\"Name\",\"common.save\":\" Save\",\"common.saved\":\" Saved\",\"common.saving\":\"Saving\",\"common.remove\":\"Delete\",\"customTask.addWorkGoalPrimarySchoolTitle\":\"Add own working goal\",\"customTask.addWorkGoalGymnasiumSchoolTitle\":\"Add own working goal\",\"customTask.enterNamePlhd\":\"Enter Name...\",\"learningGoalsLost.overall\":\"Overall\",\"task.addSubtask\":\"Add subtask\",\"task.editTask\":\"Edit task\",\"task.editWorkGoals\":\"Edit working goal\",\"task.enterTaskNamePlhd\":\"Enter the name of task...\",\"task.removeDeadline\":\"Delete deadline\",\"task.removeThisTask\":\"Delete this task\",\"task.removeWorkGoals\":\"Delete working goal\",\"task.setDeadline\":\"Set deadline\",\"task.setDeadlineLabel\":\"Set deadline...\",\"task.subTasks\":\"Subtasks\",\"task.targetNameLabel\":\"Name of working goal\",\"task.taskNameLabel\":\"Name of task\",\"task.whatShouldYouDoPlhd\":\"What should you do?\",\"taskList.nextWeekTask\":\"for next week (w{week})\",\"taskList.lastWeekTask\":\"for last week (w{week})\",\"taskList.currentWeekTask\":\"for week {week}\",\"taskList.removeTaskFromWeeklyPlanning\":\"Delete task from your weekly planning {week}\",\"taskList.addTaskToWeeklyPlanning\":\"Add task to your weekly planning {week}\",\"termplanner.comments\":\"Comments\",\"termplanner.course\":\"Theme course\",\"termplanner.edsGoalGrades\":\"Intermediate goals\",\"termplanner.englishLanguage\":\"Eng\",\"termplanner.finalStep\":\"Final Step\",\"termplanner.firstTerm\":\"FT {year}\",\"termplanner.hindiLanguage\":\"Hindi\",\"termplanner.ict\":\"ICT\",\"termplanner.loadingTermplanner\":\"Loading Termplanner\",\"termplanner.maths\":\"Maths\",\"termplanner.modernLanguage\":\"MFL\",\"termplanner.noFinalStepAvailable\":\"No final step available\",\"termplanner.secondTerm\":\"ST {year}\",\"termplanner.termPlanning\":\"Term planner\",\"termplanner.weekNumber\":\"Week\",\"termplanner.chartsBoxTitle\":\"Progress Charts\",\"termplanner.yoga\":\"Yoga\",\"tutorNoteDialog.weekComment\":\"Note for week {weekNumber}\",\"test.chooseComponentLabel\":\"Component\",\"test.pageDescription\":\"Test page for the components on the starting page\",\"url.remove\":\"Remove link\",\"userTasks.addLearningGoal\":\"Own working goal\",\"userTasks.deleteLearningGoal\":\"Delete learning goal and its tasks\",\"userTasks.primarySchoolGoals\":\"Own learning goal\",\"userTasks.gymnasiumSchoolGoals\":\"Own learning goal\",\"weekNotebook.title\":\"Notepad\",\"weekplanner.addLearningGoalGymnasiumSchool\":\"Goal:\",\"weekplanner.addLearningGoalPrimarySchool\":\"Goal:\",\"weekplanner.addLearningGoalPrimarySchoolTitle\":\"Add own learning goal\",\"weekplanner.addLearningGoalGymnasiumSchoolTitle\":\"Add own learning goal\",\"weekplanner.confirmRemoveLearningObjectives\":\"Delete learning goal and {learningGoalsNumber} tasks?\",\"weekplanner.copyPreviousWeekTaks\":\"Copy from previous week\",\"weekplanner.emptyLearningGoalErr\":\"The learning goal cannot be empty\",\"weekplanner.evaluation\":\"Evaluation\",\"weekplanner.evaluationDescription\":\"Reflection on your work effort and your chosen strategies during the week. Evaluate in relation to your goals.\",\"weekplanner.learningGoalPrimary\":\"Own learning goal\",\"weekplanner.learningGoalGymnasium\":\"Own learning goal\",\"weekplanner.logBook\":\"Logbook\",\"weekplanner.nameCannotBeEmpty\":\"Name cannot be empty\",\"weekplanner.nameMustNotBeEmpty\":\"Name must not be empty\",\"weekplanner.strategy\":\"Strategy\",\"weekplanner.strategyAndEvaluation\":\"Strategy & Evaluation\",\"weekplanner.strategyDescription\":\"What I should do to learn\",\"weekplanner.weekNumber\":\"Week {weekNumber}\",\"wysiwyg.bold\":\"Bold\",\"wysiwyg.code\":\"Code\",\"wysiwyg.heading1\":\"Heading 1\",\"wysiwyg.heading2\":\"Heading 2\",\"wysiwyg.heading3\":\"Heading 3\",\"wysiwyg.image\":\"Insert image\",\"wysiwyg.imagePromptMsg\":\"Enter the URL of the image\",\"wysiwyg.italic\":\"Italics\",\"wysiwyg.line\":\"Horizontal line\",\"wysiwyg.link\":\"Insert link\",\"wysiwyg.olist\":\"Ordered list\",\"wysiwyg.paragraph\":\"Paragraph\",\"wysiwyg.quote\":\"Quote\",\"wysiwyg.strikethrough\":\"Strikethrough\",\"wysiwyg.ulist\":\"Bullet list\",\"wysiwyg.underline\":\"Underline\",\"teacherView.coursesViewTitle\":\"My Courses\",\"teacherView.assignmentsViewTitle\":\"Assignments\",\"teacherView.assignmentsViewDescription\":\"Here you cand find all the assignments you supervise. Click on the right menu to select course. The details are displayed below. You can open/hide each module.\",\"teacherView.noUploadedAssignmentsForModule\":\"No assignments have been uploaded for this module\",\"teacherView.assignmentStudentName\":\"Pupil\",\"teacherView.assignmentFileName\":\"Filename\",\"teacherView.assignmentSubmittedAt\":\"Submitted\",\"teacherView.assignmentReport\":\"Report\",\"teacherView.assignmentGrade\":\"Grade\",\"teacherView.noTaskAssignments\":\"No assignments uploaded for this task\",\"teacherView.notSubmittedAssignments\":\"Not submitted\",\"teacherView.remindBtn\":\"Remind\",\"teacherView.filterByStudygroupsPlaceholder\":\"Select study groups\",\"teacherView.emailRemindersSentMsg\":\"Reminders successfully sent\",\"teacherView.sendEmailAtLeastOneRecipientErr\":\"At least one student should be selected\",\"teacherView.emailReminderInProgress\":\"In progress\",\"teacherView.filterByStudent\":\"Choose student\",\"teacherView.assignmentTaskName\":\"Task\",\"teacherView.assignmentTaskDescription\":\"Description\",\"teacherView.assignmentTaskDeadline\":\"Deadline\"}");

/***/ }),

/***/ "./src/translations/sv.json":
/*!**********************************!*\
  !*** ./src/translations/sv.json ***!
  \**********************************/
/*! exports provided: addeditsubtask.addSubtask, addeditsubtask.deleteSubtask, addeditsubtask.editSubtask, addeditsubtask.nameLabel, calendar.currentDate, calendar.fullDayEventLocation, calendar.loadCalendarEvents, calendar.loadingCalendar, calendar.weekNumber, common.addDescriptionPlhd, common.cancel, common.changesNotSavedErrorOccured, common.changesNotSavedUnauthorized, common.descriptionLabel, common.errorSavingData, common.linkLabel, common.loading, common.nameLabel, common.save, common.saved, common.saving, common.remove, customTask.addWorkGoalPrimarySchoolTitle, customTask.addWorkGoalGymnasiumSchoolTitle, customTask.enterNamePlhd, learningGoalsLost.overall, task.addSubtask, task.editTask, task.editWorkGoals, task.enterTaskNamePlhd, task.removeDeadline, task.removeThisTask, task.removeWorkGoals, task.setDeadline, task.setDeadlineLabel, task.subTasks, task.targetNameLabel, task.taskNameLabel, task.whatShouldYouDoPlhd, taskList.nextWeekTask, taskList.lastWeekTask, taskList.currentWeekTask, taskList.removeTaskFromWeeklyPlanning, taskList.addTaskToWeeklyPlanning, termplanner.comments, termplanner.course, termplanner.edsGoalGrades, termplanner.englishLanguage, termplanner.swedishLanguage, termplanner.finalStep, termplanner.firstTerm, termplanner.hindiLanguage, termplanner.loadingTermplanner, termplanner.modernLanguageFullname, termplanner.mathsFullname, termplanner.noFinalStepAvailable, termplanner.swedishLanguageFullName, termplanner.englishLanguageFullName, termplanner.maths, termplanner.modernLanguage, termplanner.secondTerm, termplanner.termPlanning, termplanner.weekNumber, termplanner.chartsBoxTitle, tutorNoteDialog.weekComment, test.chooseComponentLabel, test.pageDescription, url.remove, userTasks.addLearningGoal, userTasks.deleteLearningGoal, userTasks.primarySchoolGoals, userTasks.gymnasiumSchoolGoals, weekNotebook.title, weekplanner.addLearningGoalGymnasiumSchool, weekplanner.addLearningGoalPrimarySchool, weekplanner.addLearningGoalPrimarySchoolTitle, weekplanner.addLearningGoalGymnasiumSchoolTitle, weekplanner.confirmRemoveLearningObjectives, weekplanner.copyPreviousWeekTaks, weekplanner.emptyLearningGoalErr, weekplanner.evaluation, weekplanner.evaluationDescription, weekplanner.learningGoalPrimary, weekplanner.learningGoalGymnasium, weekplanner.logBook, weekplanner.nameCannotBeEmpty, weekplanner.nameMustNotBeEmpty, weekplanner.strategy, weekplanner.strategyAndEvaluation, weekplanner.strategyDescription, weekplanner.weekNumber, wysiwyg.bold, wysiwyg.code, wysiwyg.heading1, wysiwyg.heading2, wysiwyg.heading3, wysiwyg.image, wysiwyg.imagePromptMsg, wysiwyg.italic, wysiwyg.line, wysiwyg.link, wysiwyg.olist, wysiwyg.paragraph, wysiwyg.quote, wysiwyg.strikethrough, wysiwyg.ulist, wysiwyg.underline, teacherView.coursesViewTitle, teacherView.assignmentsViewTitle, teacherView.assignmentsViewDescription, teacherView.noUploadedAssignmentsForModule, teacherView.assignmentStudentName, teacherView.assignmentFileName, teacherView.assignmentSubmittedAt, teacherView.assignmentReport, teacherView.assignmentGrade, teacherView.noTaskAssignments, teacherView.notSubmittedAssignments, teacherView.remindBtn, teacherView.filterByStudygroupsPlaceholder, teacherView.emailRemindersSentMsg, teacherView.sendEmailAtLeastOneRecipientErr, teacherView.emailReminderInProgress, teacherView.filterByStudent, teacherView.assignmentTaskName, teacherView.assignmentTaskDescription, teacherView.assignmentTaskDeadline, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"addeditsubtask.addSubtask\":\"Lägg till underuppgift\",\"addeditsubtask.deleteSubtask\":\"Ta bort underuppgift\",\"addeditsubtask.editSubtask\":\"Redigera underuppgift\",\"addeditsubtask.nameLabel\":\"Underuppgiftens namn\",\"calendar.currentDate\":\"Vecka {week}, {year}\",\"calendar.fullDayEventLocation\":\"Plats: {location}\",\"calendar.loadCalendarEvents\":\"Load calendar events...\",\"calendar.loadingCalendar\":\"Loading calendars... (listing...)\",\"calendar.weekNumber\":\"V{weekNumber}\",\"common.addDescriptionPlhd\":\"Lägg till en beskrivning...\",\"common.cancel\":\"Avbryt\",\"common.changesNotSavedErrorOccured\":\"För tillfället problem att spara data. Dina ändringar sparades inte.\",\"common.changesNotSavedUnauthorized\":\"Ändringarna sparades inte p.g.a. otillräcklig behörighet.\",\"common.descriptionLabel\":\"Beskrivning\",\"common.errorSavingData\":\"Kunde inte spara.\",\"common.linkLabel\":\"Länk\",\"common.loading\":\"Laddar...\",\"common.nameLabel\":\"Namn\",\"common.save\":\" Spara\",\"common.saved\":\" Sparad\",\"common.saving\":\"Sparar...\",\"common.remove\":\"Ta bort\",\"customTask.addWorkGoalPrimarySchoolTitle\":\"Lägg till eget arbetsmål\",\"customTask.addWorkGoalGymnasiumSchoolTitle\":\"Lägg till uppgift\",\"customTask.enterNamePlhd\":\"Ange namn...\",\"learningGoalsLost.overall\":\"Övergripande\",\"task.addSubtask\":\"Lägg till underuppgift\",\"task.editTask\":\"Redigera uppgift\",\"task.editWorkGoals\":\"Redigera arbetsmål\",\"task.enterTaskNamePlhd\":\"Ange uppgiftens namn...\",\"task.removeDeadline\":\"Ta bort deadline\",\"task.removeThisTask\":\"Ta bort den här uppgiften\",\"task.removeWorkGoals\":\"Ta bort arbetsmål\",\"task.setDeadline\":\"Set deadline\",\"task.setDeadlineLabel\":\"Ange deadline...\",\"task.subTasks\":\"Underuppgifter\",\"task.targetNameLabel\":\"Arbetsmålets namn\",\"task.taskNameLabel\":\"Uppgiftens namn\",\"task.whatShouldYouDoPlhd\":\"Vad ska du göra?\",\"taskList.nextWeekTask\":\"för nästa vecka (v{week})\",\"taskList.lastWeekTask\":\"för förra veckan (v{week})\",\"taskList.currentWeekTask\":\"för vecka {week}\",\"taskList.removeTaskFromWeeklyPlanning\":\"Ta bort uppgiften från egen veckoplanering {week}\",\"taskList.addTaskToWeeklyPlanning\":\"Lägg till uppgiften i egen veckoplanering {week}\",\"termplanner.comments\":\"Kommentar\",\"termplanner.course\":\"Kurs\",\"termplanner.edsGoalGrades\":\"Terminsmål\",\"termplanner.englishLanguage\":\"Eng\",\"termplanner.swedishLanguage\":\"Sv/SvA\",\"termplanner.finalStep\":\"Slutsteg\",\"termplanner.firstTerm\":\"HT {year}\",\"termplanner.hindiLanguage\":\"\",\"termplanner.loadingTermplanner\":\"V.g. vänta medan terminsplaner laddas...\",\"termplanner.modernLanguageFullname\":\"M.språk\",\"termplanner.mathsFullname\":\"Matematik\",\"termplanner.noFinalStepAvailable\":\"Inget slutsteg tillgängligt\",\"termplanner.swedishLanguageFullName\":\"Svenska\",\"termplanner.englishLanguageFullName\":\"Engelska\",\"termplanner.maths\":\"Ma\",\"termplanner.modernLanguage\":\"M.spr\",\"termplanner.secondTerm\":\"VT {year}\",\"termplanner.termPlanning\":\"Terminsplanering\",\"termplanner.weekNumber\":\"Vecka\",\"termplanner.chartsBoxTitle\":\"Min progression\",\"tutorNoteDialog.weekComment\":\"Kommentar för vecka {weekNumber}\",\"test.chooseComponentLabel\":\"Komponent\",\"test.pageDescription\":\"Testsida för komponenter till nya startsidan\",\"url.remove\":\"Ta bort länken\",\"userTasks.addLearningGoal\":\"Eget arbetsmål\",\"userTasks.deleteLearningGoal\":\"Ta bort lärandemålet och dess uppgifter\",\"userTasks.primarySchoolGoals\":\"Egna lärandemål\",\"userTasks.gymnasiumSchoolGoals\":\"Övriga uppgifter\",\"weekNotebook.title\":\"Anteckningar\",\"weekplanner.addLearningGoalGymnasiumSchool\":\"Rubrik:\",\"weekplanner.addLearningGoalPrimarySchool\":\"Mål:\",\"weekplanner.addLearningGoalPrimarySchoolTitle\":\"Lägg till eget lärandemål\",\"weekplanner.addLearningGoalGymnasiumSchoolTitle\":\"Lägg till rubrik\",\"weekplanner.confirmRemoveLearningObjectives\":\"Ta bort lärandemål samt {learningGoalsNumber} uppgifter?\",\"weekplanner.copyPreviousWeekTaks\":\"Kopiera ej klara från föregående vecka\",\"weekplanner.emptyLearningGoalErr\":\"Lärandemålet kan inte vara tomt\",\"weekplanner.evaluation\":\"Utvärdering\",\"weekplanner.evaluationDescription\":\"Reflektion kring din arbetsinsats och dina valda strategier under veckan.Utvärdera i förhållande till dina mål.\",\"weekplanner.learningGoalPrimary\":\"Eget lärandemål\",\"weekplanner.learningGoalGymnasium\":\"Uppgift\",\"weekplanner.logBook\":\"Loggbok\",\"weekplanner.nameCannotBeEmpty\":\"Namnet kan inte vara tomt\",\"weekplanner.nameMustNotBeEmpty\":\"Namnet får inte vara tomt\",\"weekplanner.strategy\":\"Strategi\",\"weekplanner.strategyAndEvaluation\":\"Strategi & Utvärdering\",\"weekplanner.strategyDescription\":\"Hur jag ska göra för att lära mig.\",\"weekplanner.weekNumber\":\"Vecka {weekNumber}\",\"wysiwyg.bold\":\"Fetstil\",\"wysiwyg.code\":\"Programkod\",\"wysiwyg.heading1\":\"Rubrik 1\",\"wysiwyg.heading2\":\"Rubrik 2\",\"wysiwyg.heading3\":\"Rubrik 3\",\"wysiwyg.image\":\"Infoga bild\",\"wysiwyg.imagePromptMsg\":\"Ange bildens URL\",\"wysiwyg.italic\":\"Kursiv\",\"wysiwyg.line\":\"Vågrät linje\",\"wysiwyg.link\":\"Infoga länk\",\"wysiwyg.olist\":\"Ordnad lista\",\"wysiwyg.paragraph\":\"Paragraf\",\"wysiwyg.quote\":\"Citat\",\"wysiwyg.strikethrough\":\"Struken\",\"wysiwyg.ulist\":\"Punktlista\",\"wysiwyg.underline\":\"Understruken\",\"teacherView.coursesViewTitle\":\"Mina kurser/ uppgifter\",\"teacherView.assignmentsViewTitle\":\"Inlämningsuppgifter\",\"teacherView.assignmentsViewDescription\":\"Här listas samtliga inlämningsuppgifter i din/dina kurser du handleder. Klicka till höger för att välja kurs. Kursens uppgifter syns nedan. Du kan öppna/dölja varje modul.\",\"teacherView.noUploadedAssignmentsForModule\":\"No assignments have been uploaded for this module\",\"teacherView.assignmentStudentName\":\"Elev\",\"teacherView.assignmentFileName\":\"Filnamn\",\"teacherView.assignmentSubmittedAt\":\"Inlamnat\",\"teacherView.assignmentReport\":\"Rapport\",\"teacherView.assignmentGrade\":\"Niva\",\"teacherView.noTaskAssignments\":\"Inga uppdrag uppladdade för denna uppgift\",\"teacherView.notSubmittedAssignments\":\"Ej lämnat in\",\"teacherView.remindBtn\":\"Påminn\",\"teacherView.filterByStudygroupsPlaceholder\":\"Välj studiegrupp\",\"teacherView.emailRemindersSentMsg\":\"E-postpåminnelsen har skickats\",\"teacherView.sendEmailAtLeastOneRecipientErr\":\"Minst en student ska väljas\",\"teacherView.emailReminderInProgress\":\"Pågående\",\"teacherView.filterByStudent\":\"Välj student\",\"teacherView.assignmentTaskName\":\"Uppgift\",\"teacherView.assignmentTaskDescription\":\"Beskrivning\",\"teacherView.assignmentTaskDeadline\":\"Tidsfrist\"}");

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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ErrorSuccessFeedback, _super);
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
            return ({ errors: errors.map(function (error) { return error.message === message ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, error), { showDetails: !error.showDetails }) :
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
    options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultOptions), options);
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
                    var key = JSON.stringify(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([prop], args));
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
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), key = _b[0], value = _b[1];
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
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(isAutumn ?
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
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a), firstPart = _b[0], rest = _b.slice(1);
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
        for (var propsToPick_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(propsToPick), propsToPick_1_1 = propsToPick_1.next(); !propsToPick_1_1.done; propsToPick_1_1 = propsToPick_1.next()) {
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
//# sourceMappingURL=testpageteacherview.js.map