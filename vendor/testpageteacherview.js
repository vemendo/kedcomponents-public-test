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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! . */ "./src/components/teacher-view/assignments-view/index.tsx");











var CourseModuleView = (function (_a) {
    var module = _a.module, tasks = _a.tasks;
    var intl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_6__["LanguageContext"]).intl;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_digest_view__WEBPACK_IMPORTED_MODULE_8__["StateContext"]), notificationdigests = _b.notificationdigests, selectedCourse = _b.selectedCourse;
    var filterStudyGroups = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(___WEBPACK_IMPORTED_MODULE_9__["AssignmentsContext"]).filterStudyGroups;
    var getNotSubmittedUsers = function (taskAssignments) {
        var taskNotSubmittedUsers = [];
        // get students from the course study groups who have't uploaded their assignments
        var studyGroups = filterStudyGroups.length > 0 ? selectedCourse.studyGroups.filter(function (sg) { return filterStudyGroups.includes(sg); }) : selectedCourse.studyGroups;
        studyGroups.forEach(function (group) {
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
                var displayTask = notSubmittedUsers && notSubmittedUsers.length > 0 || taskAssignments && taskAssignments.length > 0;
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
    var notSubmittedLength = notSubmittedUsers && notSubmittedUsers.length;
    var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]), 2), selectedUsers = _b[0], selectUser = _b[1];
    return !notSubmittedUsers || notSubmittedUsers.length === 0 ? null : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "not-submitted-users taskContainer" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, intl.formatMessage({ id: "teacherView.notSubmittedAssignments", defaultMessage: "Ej lämnat in" })),
        notSubmittedUsers.map(function (ns, index) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: "notHandedIn_" + index, className: "align-horizontal student-row" + (notSubmittedLength === index + 1 ? " last" : "") },
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
    var _b = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_digest_view__WEBPACK_IMPORTED_MODULE_9__["StateContext"]), notificationdigests = _b.notificationdigests, selectedCourse = _b.selectedCourse, seenDigestsObservable = _b.seenDigestsObservable;
    function onTaskOpened(isOpened) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tagsDigest_1, seenDigests_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(isOpened && notificationdigests[selectedCourse.id][task.id])) return [3 /*break*/, 3];
                        return [4 /*yield*/, Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_6__["simpleDigest"])(_globals_KED_env__WEBPACK_IMPORTED_MODULE_8__["env"].currentUser.mail + selectedCourse.id)];
                    case 1:
                        tagsDigest_1 = _a.sent();
                        return [4 /*yield*/, seenDigestsObservable.load()];
                    case 2:
                        seenDigests_1 = _a.sent();
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
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_tasks_assignments__WEBPACK_IMPORTED_MODULE_3__["CourseTaskAssignments"], { assignments: assignments, checkWithUrkund: task.sendToUrkund }),
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/components/teacher-view/assignments-view/index.tsx");
/* harmony import */ var _apis_mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../apis/mock/mock-classroom-data */ "./src/apis/mock/mock-classroom-data.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.ts");








var CourseTaskAssignments = (function (_a) {
    var assignments = _a.assignments, checkWithUrkund = _a.checkWithUrkund;
    var intl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"]).intl;
    var filterStudyGroups = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](___WEBPACK_IMPORTED_MODULE_4__["AssignmentsContext"]).filterStudyGroups;
    var refreshableAssigments = Object.assign([], assignments);
    var studyGroups = filterStudyGroups.length > 0 && Object.keys(_apis_mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_5__["mockTuitionStudents"]).filter(function (gr) { return filterStudyGroups.includes(gr); }).map(function (st) { return _apis_mock_mock_classroom_data__WEBPACK_IMPORTED_MODULE_5__["mockTuitionStudents"][st]; });
    var filteredAssignments = filterStudyGroups.length > 0 ? refreshableAssigments.filter(function (r) { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["flatten"])(studyGroups).find(function (sg) { return sg.studentEmailAddress === r.user; }); }) : refreshableAssigments;
    //determine which assignments should get data from urkund
    checkWithUrkund && filteredAssignments.length > 0 && filteredAssignments.forEach(function (a) {
        a.shouldRefresh = false;
        if (a.metadata &&
            a.metadata.urkundExternalId &&
            a.metadata.urkundExternalId.length > 0 && // Must have metadata.urkundExternalId Otherwise not possible to refresh
            !a.metadata.urkundUploadError && ( // Not possible to refresh if upload has failed
        !a.metadata.urkundLastPoll || // Never checked status yet
            (['Accepted', 'Submitted'].indexOf(JSON.parse(a.metadata.urkundResponse)[0].Status.State) >= 0 &&
                parseInt(a.metadata.urkundLastPoll) < moment__WEBPACK_IMPORTED_MODULE_1___default()().add(-15, "seconds").toDate().getTime()))) {
            a.shouldRefresh = true;
        }
    });
    return filteredAssignments.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: "task-assignments-table" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentStudentName", defaultMessage: "Elev" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentFileName", defaultMessage: "Filnamn" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentSubmittedAt", defaultMessage: "Inlamnat" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentReport", defaultMessage: "Rapport" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, intl.formatMessage({ id: "teacherView.assignmentGrade", defaultMessage: "Niva" })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, filteredAssignments.map(function (assignment) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_task_assignment__WEBPACK_IMPORTED_MODULE_2__["TaskAssignment"], { key: assignment.uploadDate, assignment: assignment, shouldGetUrkundStatus: assignment.shouldRefresh });
        })))
        :
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, intl.formatMessage({ id: "teacherView.noTaskAssignments", defaultMessage: "Inga uppdrag uppladdade för denna uppgift" }));
});


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







var AssignmentsContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({ filterStudyGroups: [] });
var AssignmentsView = (function () {
    var intl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"]).intl;
    var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]), 2), selectedStudyGroups = _a[0], setFilterStudyGroup = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_digest_view__WEBPACK_IMPORTED_MODULE_4__["StateContext"]), tasks = _b.tasks, selectedCourse = _b.selectedCourse;
    var defaultDescriptionMessage = "Här listas samtliga inlämningsuppgifter i din/dina kurser du handleder."
        + "Klicka till höger för att välja kurs. Kursens uppgifter syns nedan. Du kan öppna/dölja varje modul.";
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        " ",
        selectedCourse ?
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AssignmentsContext.Provider, { value: { filterStudyGroups: selectedStudyGroups } },
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
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_select__WEBPACK_IMPORTED_MODULE_5__["default"], { isMulti: true, options: selectedCourse.studyGroups.map(function (sg) { return ({ label: sg, value: sg }); }), value: selectedStudyGroups.map(function (group) { return ({ label: group, value: group }); }), placeholder: intl.formatMessage({ id: "teacherView.filterByStudygroupsPlaceholder", defaultMessage: "Välj studiegrupp" }), onChange: function (options) {
                                        setFilterStudyGroup(options.map(function (_a) {
                                            var value = _a.value;
                                            return value;
                                        }));
                                    } }))),
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
/* harmony import */ var kedbackend_observable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! kedbackend/observable */ "./kedbackend/observable.js");












var contextInitialValue = { notificationdigests: {}, selectedCourse: null, teacherCourses: [], seenDigestsObservable: new kedbackend_observable__WEBPACK_IMPORTED_MODULE_10__["Emitter"]([]), school: "", tasks: [] };
var StateContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(contextInitialValue);
var DigestView = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])((function (_a) {
    var _b;
    var match = _a.match, courseBuilderUrl = _a.courseBuilderUrl;
    var courseId = match ? match.params.courseId : null;
    var courseId = courseId ? courseId : null;
    var myCourses = [];
    //const [notificationdigests, setAssignments] = useState({assignments : {}, digestIds: []});
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
    var res = _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["env"].kedBackendClient.http.suspenseGet("assignments/notificationdigests", { school: schoolName, courseIds: courseIds });
    if (res.status !== 200) {
        throw new kedbackend_client__WEBPACK_IMPORTED_MODULE_8__["HttpError"](res.status, res.text());
    }
    var assignments = res.json();
    var digestArray = Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_8__["simpleDigestSuspense"])(myCourses.map(function (course) { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_7__["env"].currentUser.mail + course.id; }));
    var seenDigestsObservable = digestArray.length > 0 ?
        (_b = _globals_db__WEBPACK_IMPORTED_MODULE_6__["db"].seenStudentAssignments).tags.apply(_b, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](digestArray)).toValue() :
        new kedbackend_observable__WEBPACK_IMPORTED_MODULE_10__["Emitter"]([]);
    var contextValue = {
        notificationdigests: assignments,
        selectedCourse: selectedCourse,
        teacherCourses: myCourses,
        seenDigestsObservable: seenDigestsObservable,
        school: schoolName,
        tasks: taskAssignments
    };
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StateContext.Provider, { value: contextValue },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_ks_common_two_columns_page__WEBPACK_IMPORTED_MODULE_3__["TwoColumnsPage"], { left: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_assignments_view__WEBPACK_IMPORTED_MODULE_4__["AssignmentsView"], { key: selectedCourse ? selectedCourse.id : "" }), right: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_courses_view__WEBPACK_IMPORTED_MODULE_5__["CoursesView"], { courseBuilderUrl: courseBuilderUrl }), rightWidth: 5 }));
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





var TeacherViewApp = function (_a) {
    var courseBuilderUrl = _a.courseBuilderUrl;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "teacher-view" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/", exact: true, render: function () { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: "/overview" }); } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: false, path: "/overview/course/:courseId/assignments" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utility_components_observe__WEBPACK_IMPORTED_MODULE_2__["Observe"], { fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_3__["EllipsisLoader"], null) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_digest_view__WEBPACK_IMPORTED_MODULE_4__["DigestView"], { courseBuilderUrl: courseBuilderUrl })))));
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
/* harmony import */ var _utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility-components/lazy-content */ "./src/components/utility-components/lazy-content.tsx");



var NotificationIcon = (function (_a) {
    var course = _a.course, entity = _a.entity, moduleId = _a.moduleId, taskId = _a.taskId, notificationdigests = _a.notificationdigests;
    var seenDigestsObserable = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_digest_view__WEBPACK_IMPORTED_MODULE_1__["StateContext"]).seenDigestsObservable;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utility_components_lazy_content__WEBPACK_IMPORTED_MODULE_2__["LazyContent"], null, seenDigestsObserable.map(function (seenDigests) {
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
    }));
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

/***/ "./src/components/utility-components/lazy-content.tsx":
/*!************************************************************!*\
  !*** ./src/components/utility-components/lazy-content.tsx ***!
  \************************************************************/
/*! exports provided: LazyContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyContent", function() { return LazyContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _live_query_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live-query-view */ "./src/components/utility-components/live-query-view.tsx");


function LazyContent(_a) {
    var children = _a.children, spinner = _a.spinner, onError = _a.onError, noError = _a.noError;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_live_query_view__WEBPACK_IMPORTED_MODULE_1__["LiveQueryView"], { props: children, spinner: spinner, noError: noError, onError: onError, fn: function (observable) { return observable; } });
}


/***/ }),

/***/ "./src/components/utility-components/live-query-view.tsx":
/*!***************************************************************!*\
  !*** ./src/components/utility-components/live-query-view.tsx ***!
  \***************************************************************/
/*! exports provided: liveQueryView, LiveQueryView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveQueryView", function() { return liveQueryView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveQueryView", function() { return LiveQueryView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");



function liveQueryView(fn, options) {
    return function (props) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](LiveQueryView, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ props: props, fn: fn }, options));
    };
}
var LiveQueryView = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LiveQueryView, _super);
    function LiveQueryView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            result: null,
            isLoading: true
        };
        return _this;
    }
    LiveQueryView.prototype.componentDidMount = function () {
        this.subscribe();
    };
    LiveQueryView.prototype.componentWillUnmount = function () {
        this.unsubscribe();
    };
    LiveQueryView.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (this.state.error !== nextState.error ||
            this.state.isLoading !== nextState.isLoading ||
            this.state.result !== nextState.result ||
            !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["shallowEquals"])(nextProps.props, this.props.props));
    };
    LiveQueryView.prototype.componentDidUpdate = function (prevProps) {
        if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["shallowEquals"])(prevProps.props, this.props.props)) {
            this.unsubscribe();
            this.subscribe();
        }
    };
    LiveQueryView.prototype.subscribe = function () {
        var _this = this;
        this.setState({ isLoading: true });
        this.subscription = this.props.fn(this.props.props).subscribe(function (result, error) { return _this.setState({
            result: result,
            error: error,
            isLoading: false
        }); });
    };
    LiveQueryView.prototype.unsubscribe = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    };
    LiveQueryView.prototype.render = function () {
        var _a = this.state, result = _a.result, error = _a.error, isLoading = _a.isLoading;
        var _b = this.props, spinner = _b.spinner, onError = _b.onError, noError = _b.noError;
        //if (!isLoading && !result) debugger;
        return error ?
            noError ? "" : onError ? onError(error) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
                "Error: ",
                error.message) :
            isLoading ?
                spinner ? spinner : "" :
                result === undefined ? "" : result;
    };
    return LiveQueryView;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



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
var _a = Object(_utils_query_string__WEBPACK_IMPORTED_MODULE_2__["parseQueryString"])(location.search), role = _a.role, school = _a.school;
if (_globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser) {
    if (role) {
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser.roles = role.split(',');
    }
    if (school) {
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser.school = school;
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](_App, _super);
    function _App(props) {
        return _super.call(this, props) || this;
        //if (!location.hash) location.hash = "#/";
    }
    _App.prototype.render = function () {
        var intl = this.props.intl;
        return _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].currentUser ?
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_8__["LanguageContext"].Provider, { value: { intl: intl } },
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_teacher_view__WEBPACK_IMPORTED_MODULE_11__["TeacherViewApp"], { courseBuilderUrl: "coursebuilder.html" })) :
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9jbGllbnR3ZWIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLWNsaWVudC13ZWIvYmVhcmVyLXN0b3JhZ2Utc2Vzc2lvbnN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLWNsaWVudC13ZWIvaGFzaC1yZXN0b3Jlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtY2xpZW50LXdlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtY2xpZW50L2FjY2Vzcy1jb250cm9sLmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvanMvZGlzdC9qcy9rZWQtYmFja2VuZC1jbGllbnQvaHR0cC1lcnJvci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvanMvZGlzdC9qcy9rZWQtYmFja2VuZC1jbGllbnQva2VkLWJlYXJlci1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtY2xpZW50L3Jlc3RjbGllbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLWNsaWVudC91dGlscy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtcmVwby9jYWNoZS1idXN0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvanMvZGlzdC9qcy9rZWQtYmFja2VuZC1yZXBvL2RlbHRhLWNvbGxlY3Rpb24vYXBwbHktbXV0YXRpb25zLW9uLWRlbHRhcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtcmVwby9kZWx0YS1jb2xsZWN0aW9uL2RlbHRhLWNhY2hlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvanMvZGlzdC9qcy9rZWQtYmFja2VuZC1yZXBvL2RlbHRhLWNvbGxlY3Rpb24vZGVsdGEtY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtcmVwby9kZWx0YS1tZXJnZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtcmVwby9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtcmVwby9rZWRiYWNrZW5kLWNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLXJlcG8va2VkYmFja2VuZC1xdWVyeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtcmVwby9rZWRiYWNrZW5kLXJlcG8uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLXJlcG8va2VkYmFja2VuZC1zdWJzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLXJlcG8va2VkYmFja2VuZC13cml0ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLXJlcG8vbXV0YXRpb24tcXVldWUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLXJlcG8vcXVlcnktc2V0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvanMvZGlzdC9qcy9rZWQtYmFja2VuZC1yZXBvL3V0aWxzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvanMvZGlzdC9qcy9rZWQtbW9kZWwtbWlncmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL2tlZC1tb2RlbC1taWdyYXRvci9taWdyYXRlLWNvdXJzZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLW1vZGVsLW1pZ3JhdG9yL21pZ3JhdGUtdGFzay5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMva2VkLW1vZGVsLW1pZ3JhdG9yL21pZ3JhdGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL29ic2VydmFibGUvY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9rZWRiYWNrZW5kL2pzL2Rpc3QvanMvb2JzZXJ2YWJsZS9lbWl0dGVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvanMvZGlzdC9qcy9vYnNlcnZhYmxlL2ZpYmVyLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL29ic2VydmFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL29ic2VydmFibGUvbWFwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvanMvZGlzdC9qcy9vYnNlcnZhYmxlL21peGluLmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvanMvZGlzdC9qcy9vYnNlcnZhYmxlL29ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9qcy9kaXN0L2pzL29ic2VydmFibGUvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4va2VkYmFja2VuZC9vYnNlcnZhYmxlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL2tlZGJhY2tlbmQvcmVwby5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHN2fGVuIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9hY2Nlc3MtY29udHJvbC9nZXQtdXNlci1jbGFpbXMudHMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2FjY2Vzcy1jb250cm9sL2luZGV4LnRzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9hcGlzL2Vkc2NsaWVudC50cyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvYXBpcy9tb2NrL21vY2stY2xhc3Nyb29tLWRhdGEudHMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2dvYWwtcHJvZ3Jlc3MudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL2NvdXJzZS1idWlsZGVyLWtzL2NvbW1vbi90d28tY29sdW1ucy1wYWdlLnRzeCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy9jb3Vyc2UtYnVpbGRlci9zdWItY29tcG9uZW50cy9lbGxpcHNpcy1sb2FkZXIudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL2NvdXJzZS1idWlsZGVyL3N1Yi1jb21wb25lbnRzL3NwaW5uZXIudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL2NvdXJzZS12aWV3ZXIvY291cnNlLXBhZ2UvdGFzay1hc3NpZ25tZW50cy11dGlscy50c3giLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvY291cnNlLXZpZXdlci9jb3Vyc2UtcGFnZS91cmt1bmQtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvdGVhY2hlci12aWV3L2Fzc2lnbm1lbnRzLXZpZXcvY291cnNlLW1vZHVsZS50c3giLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvdGVhY2hlci12aWV3L2Fzc2lnbm1lbnRzLXZpZXcvY291cnNlLXRhc2stbm90LWhhbmRlZC11c2Vycy50c3giLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvdGVhY2hlci12aWV3L2Fzc2lnbm1lbnRzLXZpZXcvY291cnNlLXRhc2sudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL3RlYWNoZXItdmlldy9hc3NpZ25tZW50cy12aWV3L2NvdXJzZS10YXNrcy1hc3NpZ25tZW50cy50c3giLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvdGVhY2hlci12aWV3L2Fzc2lnbm1lbnRzLXZpZXcvaW5kZXgudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL3RlYWNoZXItdmlldy9hc3NpZ25tZW50cy12aWV3L3Rhc2stYXNzaWdubWVudC50c3giLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvdGVhY2hlci12aWV3L2NvdXJzZXMtdmlldy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvdGVhY2hlci12aWV3L2RpZ2VzdC12aWV3LnRzeCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy90ZWFjaGVyLXZpZXcvaW5kZXgudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL3RlYWNoZXItdmlldy9zaGFyZWQvbm90aWZpY2F0aW9uLWljb24udHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL3V0aWxpdHktY29tcG9uZW50cy9MYW5ndWFnZUNvbnRleHQudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL3V0aWxpdHktY29tcG9uZW50cy9TZXR1cExhbmd1YWdlSW50bC50c3giLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvdXRpbGl0eS1jb21wb25lbnRzL2xhenktY29udGVudC50c3giLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvdXRpbGl0eS1jb21wb25lbnRzL2xpdmUtcXVlcnktdmlldy50c3giLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvdXRpbGl0eS1jb21wb25lbnRzL29ic2VydmUudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL3V0aWxpdHktY29tcG9uZW50cy9vcGVuLWNsb3NlLWJveC50c3giLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2dsb2JhbC1zZXR0ZXJzL2NvbmZpZ3VyZS50cyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZ2xvYmFsLXNldHRlcnMvc2V0LWFsbC50cyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZ2xvYmFsLXNldHRlcnMvc2V0LWJlYXJlci1wcm92aWRlcnMudHMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2dsb2JhbC1zZXR0ZXJzL3NldC1lZHMtY2xpZW50LnRzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9nbG9iYWwtc2V0dGVycy9zZXQta2VkLWJhY2tlbmQtY2xpZW50LnRzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9nbG9iYWxzL0tFRC5jZmcudHMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2dsb2JhbHMvS0VELmVudi50cyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvZ2xvYmFscy9LRUQudHMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2dsb2JhbHMvZGIudHMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2dsb2JhbHMva2VkLnRzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy90ZXN0L2RhdGEvdXNlcnMudHMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3Rlc3Qvc2V0LWN1cnJlbnQtdXNlci50cyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvdGVzdC90ZXN0cGFnZS10ZWFjaGVydmlldy50c3giLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3Rlc3QvdXRpbHMvY2hvb3NlLXVzZXIudHN4Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy90ZXN0L3V0aWxzL2luY2x1ZGUtY3NzLnRzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy91dGlscy9pbmNsdWRlLW9wdGlvbmFsLWNzcy50cyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvdXRpbHMvbWFrZS1zdXNwZW5zZS1hcGkudHMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3V0aWxzL3F1ZXJ5LXN0cmluZy50cyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvdXRpbHMvc2Nob29sLW1vbWVudC50cyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvdXRpbHMvc2Nob29sLXRlcm0udHMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL1tuYW1lXS8uLi9sb2NhbGUtZGF0YS9pbmRleC5qcyAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbGliL2xvY2FsZXMgKGlnbm9yZWQpIiwid2VicGFjazovL1tuYW1lXS8uL2xpYi9sb2NhbGVzIChpZ25vcmVkKT85MGQwIiwid2VicGFjazovL1tuYW1lXS9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vW25hbWVdL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUFDO1FBQ3JCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUc7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7S0FDdkM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7QUN0S0QsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsdUI7Ozs7Ozs7Ozs7O0FDQUEsMEIiLCJmaWxlIjoidGVzdHBhZ2V0ZWFjaGVydmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJ0ZXN0cGFnZXRlYWNoZXJ2aWV3XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvdGVzdC90ZXN0cGFnZS10ZWFjaGVydmlldy50c3hcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnQgKiBmcm9tICcuL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtY2xpZW50JzsiLCJleHBvcnQgKiBmcm9tICcuL2pzL2Rpc3QvanMva2VkLWJhY2tlbmQtY2xpZW50LXdlYic7IiwidmFyIEJlYXJlclN0b3JhZ2VTZXNzaW9uU3RvcmFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCZWFyZXJTdG9yYWdlU2Vzc2lvblN0b3JhZ2UoKSB7XG4gICAgfVxuICAgIEJlYXJlclN0b3JhZ2VTZXNzaW9uU3RvcmFnZS5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uIChpZCwgdG9rZW5JbmZvKSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiZWFyZXItXCIgKyBpZCwgSlNPTi5zdHJpbmdpZnkodG9rZW5JbmZvKSk7XG4gICAgfTtcbiAgICBCZWFyZXJTdG9yYWdlU2Vzc2lvblN0b3JhZ2UucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBqc29uID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJlYXJlci1cIiArIGlkKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoanNvbiA/IEpTT04ucGFyc2UoanNvbikgOiB7IHRva2VuOiBudWxsLCBleHBpcmVzOiAwIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IHRva2VuOiBudWxsLCBleHBpcmVzOiAwIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQmVhcmVyU3RvcmFnZVNlc3Npb25TdG9yYWdlO1xufSgpKTtcbmV4cG9ydCB7IEJlYXJlclN0b3JhZ2VTZXNzaW9uU3RvcmFnZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmVhcmVyLXN0b3JhZ2Utc2Vzc2lvbnN0b3JhZ2UuanMubWFwIiwidmFyIHJlZGlySGFzaCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJyZWRpci1oYXNoXCIpO1xuaWYgKHJlZGlySGFzaClcbiAgICB0cnkge1xuICAgICAgICB2YXIgX2EgPSBKU09OLnBhcnNlKHJlZGlySGFzaCksIHRpbWUgPSBfYS50aW1lLCBoYXNoID0gX2EuaGFzaDtcbiAgICAgICAgaWYgKHRpbWUgJiYgdGltZSA+IERhdGUubm93KCkgLSA2MDAwMCkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInJlZGlyLWhhc2hcIik7XG4gICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoXykgeyB9XG5leHBvcnQgZnVuY3Rpb24gcmVtZW1iZXJIYXNoTG9jYXRpb24oKSB7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInJlZGlyLWhhc2hcIiwgSlNPTi5zdHJpbmdpZnkoeyB0aW1lOiBEYXRlLm5vdygpLCBoYXNoOiBsb2NhdGlvbi5oYXNoIH0pKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhhc2gtcmVzdG9yZXIuanMubWFwIiwiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEtlZEJhY2tlbmRDbGllbnQsIEh0dHBFcnJvciB9IGZyb20gJy4uL2tlZC1iYWNrZW5kLWNsaWVudCc7XG5pbXBvcnQgeyBCZWFyZXJTdG9yYWdlU2Vzc2lvblN0b3JhZ2UgfSBmcm9tIFwiLi9iZWFyZXItc3RvcmFnZS1zZXNzaW9uc3RvcmFnZVwiO1xuaW1wb3J0IHsgYXZvaWRTaW11bHRhbm91c0NhbGxzIH0gZnJvbSAnLi4va2VkLWJhY2tlbmQtY2xpZW50L3V0aWxzJztcbmltcG9ydCB7IEtlZE1vZGVsTWlncmF0b3JNaXhpbiB9IGZyb20gJy4uL2tlZC1tb2RlbC1taWdyYXRvcic7XG5pbXBvcnQgJy4vaGFzaC1yZXN0b3Jlcic7XG5pbXBvcnQgeyByZW1lbWJlckhhc2hMb2NhdGlvbiB9IGZyb20gJy4vaGFzaC1yZXN0b3Jlcic7XG5LZWRNb2RlbE1pZ3JhdG9yTWl4aW4oS2VkQmFja2VuZENsaWVudC5wcm90b3R5cGUpO1xuZXhwb3J0IHZhciBzdG9yYWdlID0gbmV3IEJlYXJlclN0b3JhZ2VTZXNzaW9uU3RvcmFnZSgpO1xudmFyIHRpbWVPZlBhZ2VMb2FkID0gRGF0ZS5ub3coKTtcbnZhciBXZWJTZXJ2ZXJCZWFyZXJQcm92aWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXZWJTZXJ2ZXJCZWFyZXJQcm92aWRlcih0b2tlblBhdGgsIHRva2VuUmVzcG9uc2VNYXBwZXIsIHRva2VuSWQpIHtcbiAgICAgICAgdGhpcy50b2tlblBhdGggPSB0b2tlblBhdGg7XG4gICAgICAgIHRoaXMudG9rZW5SZXNwb25zZU1hcHBlciA9IHRva2VuUmVzcG9uc2VNYXBwZXI7XG4gICAgICAgIHRoaXMudG9rZW5JZCA9IHRva2VuSWQ7XG4gICAgICAgIHRoaXMudG9rZW5JbmZvID0geyB0b2tlbjogbnVsbCwgZXhwaXJlczogMCB9O1xuICAgICAgICB0aGlzLmdldEJlYXJlciA9IGF2b2lkU2ltdWx0YW5vdXNDYWxscyh0aGlzLmdldEJlYXJlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoQmVhcmVyID0gYXZvaWRTaW11bHRhbm91c0NhbGxzKHRoaXMucmVmcmVzaEJlYXJlci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgV2ViU2VydmVyQmVhcmVyUHJvdmlkZXIucHJvdG90eXBlLmdldEJlYXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMudG9rZW5JbmZvLnRva2VuKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy50b2tlbklkKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHN0b3JhZ2UubG9hZCh0aGlzLnRva2VuSWQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudG9rZW5JbmZvID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLnRva2VuSW5mby5leHBpcmVzIDwgRGF0ZS5ub3coKSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZWZyZXNoQmVhcmVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMudG9rZW5JbmZvXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBXZWJTZXJ2ZXJCZWFyZXJQcm92aWRlci5wcm90b3R5cGUucmVmcmVzaEJlYXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzLCBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2UubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCh0aGlzLnRva2VuUGF0aCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgQWNjZXB0OiBcInRleHQvcGxhaW47IGFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0OiAnbWFudWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IF9lLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAzMDIgfHwgKCFyZXMuc3RhdHVzICYmIHJlcy50eXBlID09PSBcIm9wYXF1ZXJlZGlyZWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXNlciBzZXNzaW9uIHRpbWVkIG91dCBhbmQgc2VydmVyIHdhbnRzIHRvIHJlZGlyZWN0IGVudGlyZSBwYWdlIHRvIGxvZ2luIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaW1lIHRvIHJlbG9hZCBjdXJyZW50IHBhZ2UgdG8gZm9yY2UgYSByZWRpcmVjdCBvZiB0aGUgZW50aXJlIHBhZ2UgaW5zdGVhZCBmb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBqdXN0IHJlZGlyZWN0aW5nIHRvIC9hcGkvdG9rZW4gb3Igd2hhdGV2ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSB0aW1lT2ZQYWdlTG9hZCA+IDYwMDAwKSB7IC8vIHByb2hpYml0IGVuZGxlc3MgbG9vcCBvZiByZWxvYWRpbmcgc2VsZi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YW50c1JlZGlyZWN0ID0gdHJ1ZTsgLy8gU28gdGhhdCBsaXN0ZW5lcnMgdG8gb25iZWZvcmV1bmxvYWQgY291bGQgc2hvdyBhbHRlcm5hdGUgbWVzc2FnZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWRpcmVjdCB3YW50ZWQuIFJlbG9hZCBwYWdlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtZW1iZXJIYXNoTG9jYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEh0dHBFcnJvcigzMDIsIFwiUmVkaXJlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShyZXMuc3RhdHVzICE9IDIwMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBFcnJvci5iaW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSBcIkhUVFBcIiArIHJlcy5zdGF0dXMgKyBcIiBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy50ZXh0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyAoX2EuYXBwbHkoRXJyb3IsIFt2b2lkIDAsIF9iICsgKF9lLnNlbnQoKSldKSkoKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2MgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2QgPSB0aGlzLnRva2VuUmVzcG9uc2VNYXBwZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMudGV4dCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2MudG9rZW5JbmZvID0gX2QuYXBwbHkodGhpcywgW19lLnNlbnQoKV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS5zYXZlKHRoaXMudG9rZW5JZCwgdGhpcy50b2tlbkluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMudG9rZW5JbmZvXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gV2ViU2VydmVyQmVhcmVyUHJvdmlkZXI7XG59KCkpO1xuZXhwb3J0IHsgV2ViU2VydmVyQmVhcmVyUHJvdmlkZXIgfTtcbmV4cG9ydCB2YXIgaXNvbW9ycGhpYyA9IHsgZmV0Y2g6IGZldGNoLmJpbmQoc2VsZiksIGJ0b2E6IGJ0b2EuYmluZChzZWxmKSB9O1xudmFyIEtlZEJhY2tlbmRDbGllbnRXZWIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoS2VkQmFja2VuZENsaWVudFdlYiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBLZWRCYWNrZW5kQ2xpZW50V2ViKGFwaUJhc2VVcmwsIHByb3ZpZGVyT3JUb2tlblBhdGgsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGJlYXJlclByb3ZpZGVyID0gdHlwZW9mIHByb3ZpZGVyT3JUb2tlblBhdGggIT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgIHByb3ZpZGVyT3JUb2tlblBhdGggOlxuICAgICAgICAgICAgbmV3IFdlYlNlcnZlckJlYXJlclByb3ZpZGVyKHByb3ZpZGVyT3JUb2tlblBhdGgsIChvcHRpb25zICYmIG9wdGlvbnMudG9rZW5SZXNwb25zZU1hcHBlcikgfHwgKGZ1bmN0aW9uICh4KSB7IHJldHVybiAoeyB0b2tlbjogeCwgZXhwaXJlczogRGF0ZS5ub3coKSArIDU5ICogNjAgKiA2MCB9KTsgfSksIG9wdGlvbnMgJiYgb3B0aW9ucy50b2tlbklkKTtcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBpc29tb3JwaGljLCBiZWFyZXJQcm92aWRlciwgYXBpQmFzZVVybCkgfHwgdGhpcztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gS2VkQmFja2VuZENsaWVudFdlYjtcbn0oS2VkQmFja2VuZENsaWVudCkpO1xuZXhwb3J0IHsgS2VkQmFja2VuZENsaWVudFdlYiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwidmFyIERvY3VtZW50QWNjZXNzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERvY3VtZW50QWNjZXNzKGFjY2Vzc0NsYWltVHlwZSwgYWNjZXNzQ2xhaW1WYWx1ZSwgcmlnaHQpIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NDbGFpbVR5cGUgPSBhY2Nlc3NDbGFpbVR5cGU7XG4gICAgICAgIHRoaXMuYWNjZXNzQ2xhaW1WYWx1ZSA9IGFjY2Vzc0NsYWltVmFsdWU7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG4gICAgRG9jdW1lbnRBY2Nlc3MuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIChhYykge1xuICAgICAgICBpZiAoIWFjKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBzcGxpdCA9IGFjLnNwbGl0KCc6Jyk7XG4gICAgICAgIGlmIChzcGxpdC5sZW5ndGggPCAzKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhY2Nlc3Mgc3RyaW5nOiBcIiArIGFjKTtcbiAgICAgICAgdmFyIGNsYWltVHlwZSA9IERvY3VtZW50QWNjZXNzLnVuZXNjYXBlKHNwbGl0WzBdKTtcbiAgICAgICAgdmFyIGNsYWltVmFsdWUgPSBEb2N1bWVudEFjY2Vzcy51bmVzY2FwZShzcGxpdFsxXSk7XG4gICAgICAgIHZhciByaWdodCA9IHNwbGl0WzJdO1xuICAgICAgICBpZiAocmlnaHQgIT09ICdSJyAmJiByaWdodCAhPT0gJ1cnICYmIHJpZ2h0ICE9PSAnUycpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFjY2VzcyBzdHJpbmc6IFwiICsgYWMpO1xuICAgICAgICByZXR1cm4gbmV3IERvY3VtZW50QWNjZXNzKGNsYWltVHlwZSwgY2xhaW1WYWx1ZSwgcmlnaHQpO1xuICAgIH07XG4gICAgRG9jdW1lbnRBY2Nlc3MuZXNjYXBlID0gZnVuY3Rpb24gKGFjY2Vzc0NvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gYWNjZXNzQ29tcG9uZW50LnJlcGxhY2UoL1xcJS9nLCBcIiUyNVwiKS5yZXBsYWNlKC9cXDovZywgXCIlM0FcIik7XG4gICAgfTtcbiAgICBEb2N1bWVudEFjY2Vzcy51bmVzY2FwZSA9IGZ1bmN0aW9uIChhY2Nlc3NDb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGFjY2Vzc0NvbXBvbmVudC5yZXBsYWNlKC9cXCUzQS9nLCBcIjpcIikucmVwbGFjZSgvXFwlMjUvZywgXCIlXCIpO1xuICAgIH07XG4gICAgRG9jdW1lbnRBY2Nlc3MucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gRG9jdW1lbnRBY2Nlc3MuZXNjYXBlKHRoaXMuYWNjZXNzQ2xhaW1UeXBlKSArIFwiOlwiICtcbiAgICAgICAgICAgIERvY3VtZW50QWNjZXNzLmVzY2FwZSh0aGlzLmFjY2Vzc0NsYWltVmFsdWUpICsgXCI6XCIgK1xuICAgICAgICAgICAgdGhpcy5yaWdodDtcbiAgICB9O1xuICAgIERvY3VtZW50QWNjZXNzLmZyb21TdHJpbmdBcnJheSA9IGZ1bmN0aW9uIChhY2wpIHtcbiAgICAgICAgcmV0dXJuIGFjbFxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYWMpIHsgcmV0dXJuIERvY3VtZW50QWNjZXNzLmZyb21TdHJpbmcoYWMpOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYWMpIHsgcmV0dXJuIGFjOyB9KTtcbiAgICB9O1xuICAgIERvY3VtZW50QWNjZXNzLnRvU3RyaW5nQXJyYXkgPSBmdW5jdGlvbiAoYWNsKSB7XG4gICAgICAgIHJldHVybiBhY2wubWFwKGZ1bmN0aW9uIChhYykgeyByZXR1cm4gYWMudG9TdHJpbmcoKTsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRG9jdW1lbnRBY2Nlc3M7XG59KCkpO1xuZXhwb3J0IHsgRG9jdW1lbnRBY2Nlc3MgfTtcbmV4cG9ydCBmdW5jdGlvbiBoYXNBY2Nlc3MoYWNsLCB1c2VyQ2xhaW1zLCByZXF1ZXN0ZWRSaWdodCkge1xuICAgIGlmICh1c2VyQ2xhaW1zLnNvbWUoZnVuY3Rpb24gKGNsYWltKSB7IHJldHVybiBjbGFpbS50eXBlID09PSAncm9sZScgJiYgY2xhaW0udmFsdWUgPT09IFwiQURNSU5cIjsgfSkpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBhY2wuc29tZShmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gdXNlckNsYWltcy5zb21lKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5hY2Nlc3NDbGFpbVR5cGUgPT09IGMudHlwZSAmJlxuICAgICAgICAgICAgICAgIGEuYWNjZXNzQ2xhaW1WYWx1ZSA9PT0gYy52YWx1ZSAmJiAoKGEucmlnaHQgPT09ICdSJyAmJiByZXF1ZXN0ZWRSaWdodCA9PT0gJ1InKSB8fFxuICAgICAgICAgICAgICAgIChhLnJpZ2h0ID09PSAnVycgJiYgWydSJywgJ1cnXS5pbmRleE9mKHJlcXVlc3RlZFJpZ2h0KSA+PSAwKSB8fFxuICAgICAgICAgICAgICAgIChhLnJpZ2h0ID09PSAnUycpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hY2Nlc3MtY29udHJvbC5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xudmFyIEh0dHBFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhIdHRwRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSHR0cEVycm9yKGNvZGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgXCJIVFRQXCIgKyBjb2RlICsgXCIgXCIgKyBtZXNzYWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIF90aGlzLm5hbWUgPSBcImh0dHBcIiArIGNvZGU7XG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPSBcIkhUVFBcIiArIGNvZGUgKyBcIiBcIiArIG1lc3NhZ2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEh0dHBFcnJvcjtcbn0oRXJyb3IpKTtcbmV4cG9ydCB7IEh0dHBFcnJvciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC1lcnJvci5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgUmVzdENsaWVudCB9IGZyb20gJy4vcmVzdGNsaWVudCc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCB7IEtlZEJlYXJlclByb3ZpZGVyIH0gZnJvbSAnLi9rZWQtYmVhcmVyLXByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vYWNjZXNzLWNvbnRyb2wnO1xuZXhwb3J0IHsgUmVzdENsaWVudCB9O1xuaW1wb3J0IHsgSHR0cEVycm9yIH0gZnJvbSAnLi9odHRwLWVycm9yJztcbmV4cG9ydCB7IEh0dHBFcnJvciB9O1xuZXhwb3J0ICogZnJvbSAnLi9yZXN0Y2xpZW50Jztcbjtcbi8vIHwgJ290aGVyRmxhZycgfCAndGhpcmRGbGFnJzsuLi5cbnZhciBLZWRCYWNrZW5kQ2xpZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEtlZEJhY2tlbmRDbGllbnQoaXNvbW9ycGhpYywgYmVhcmVyUHJvdmlkZXIsIGJhc2VVcmwpIHtcbiAgICAgICAgdGhpcy5odHRwID0gbmV3IFJlc3RDbGllbnQoaXNvbW9ycGhpYywgYmFzZVVybCwgeyBiZWFyZXJQcm92aWRlcjogYmVhcmVyUHJvdmlkZXIgfSk7XG4gICAgfVxuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLmdldE15Q2xhaW1zID0gZnVuY3Rpb24gKHRhYmxlLCBmZXRjaE9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzLCBfYSwgX2I7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5odHRwLmdldChcIm1lL2NsYWltcy9cIiArICh0YWJsZSB8fCBcIlwiKSwgbnVsbCwgZmV0Y2hPcHRpb25zKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHJlcy5zdGF0dXMgIT0gMjAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IEh0dHBFcnJvci5iaW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSBbdm9pZCAwLCByZXMuc3RhdHVzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy50ZXh0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyAoX2EuYXBwbHkoSHR0cEVycm9yLCBfYi5jb25jYXQoW19jLnNlbnQoKV0pKSkoKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMuanNvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Muc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ2xpZW50LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAodGFibGUsIGlkLCBvcHRpb25zLCBmZXRjaE9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzLCBfYSwgX2I7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5odHRwLmdldCh0YWJsZSArIFwiL1wiICsgaWQsIG9wdGlvbnMsIGZldGNoT3B0aW9ucyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShyZXMuc3RhdHVzICE9IDIwMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBIdHRwRXJyb3IuYmluZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gW3ZvaWQgMCwgcmVzLnN0YXR1c107XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMudGV4dCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiB0aHJvdyBuZXcgKF9hLmFwcGx5KEh0dHBFcnJvciwgX2IuY29uY2F0KFtfYy5zZW50KCldKSkpKCk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLmpzb24oKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9jLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENsaWVudC5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uICh0YWJsZSwgb3B0aW9ucywgZmV0Y2hPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHF1ZXJ5LCByZXMsIF9hLCBfYjtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnICYmIGxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygndXNlU1AnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LmZsYWdzID0gKHF1ZXJ5LmZsYWdzIHx8IFtdKS5jb25jYXQoWyd1c2VTUCddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubXV0YXRpb25zT25FbXB0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5tdXRhdGlvbnNPbkVtcHR5ID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5tdXRhdGlvbnNPbkVtcHR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuaHR0cC5nZXQoXCJcIiArIHRhYmxlLCBxdWVyeSwgZmV0Y2hPcHRpb25zKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHJlcy5zdGF0dXMgIT0gMjAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IEh0dHBFcnJvci5iaW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSBbdm9pZCAwLCByZXMuc3RhdHVzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy50ZXh0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyAoX2EuYXBwbHkoSHR0cEVycm9yLCBfYi5jb25jYXQoW19jLnNlbnQoKV0pKSkoKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMuanNvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Muc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ2xpZW50LnByb3RvdHlwZS5iYXRjaCA9IGZ1bmN0aW9uIChyZXFzLCBmZXRjaE9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzLCBfYSwgX2I7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlb3JkZXIgb3BlcmF0aW9ucyBzbyB0aGF0ICdhZGQncyBjb21lIGZpcnN0IGFuZCAnZGVsZXRlJ3MgY29tZSBsYXN0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxcyA9IHJlcXMuc2xpY2UoKS5zb3J0KGZ1bmN0aW9uIChyZXExLCByZXEyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcTEub3AgPT09ICdhZGQnID8gLTEgOiByZXEyLm9wID09PSAnYWRkJyA/IDEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXExLm9wID09PSAnZGVsZXRlJyA/IDEgOiByZXEyLm9wID09PSAnZGVsZXRlJyA/IC0xIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5odHRwLnBvc3QoXCJiYXRjaFwiLCByZXFzLCBmZXRjaE9wdGlvbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocmVzLnN0YXR1cyAhPSAyMDApKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gSHR0cEVycm9yLmJpbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IFt2b2lkIDAsIHJlcy5zdGF0dXNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLnRleHQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IChfYS5hcHBseShIdHRwRXJyb3IsIF9iLmNvbmNhdChbX2Muc2VudCgpXSkpKSgpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy5qc29uKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovLCBfYy5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLmRvID0gZnVuY3Rpb24gKHNjb3BlRm4pIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcnVubmVyO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5uZXIgPSBuZXcgQmF0Y2hSdW5uZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlRm4ocnVubmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuYmF0Y2gocnVubmVyLm11dGF0aW9uUmVxdWVzdHMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ2xpZW50LnByb3RvdHlwZS5kZWxldGVSZWFsbSA9IGZ1bmN0aW9uIChyZWFsbSkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXMsIF9hLCBfYjtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmh0dHAuZGVsZXRlKFwicmVhbG1zL1wiICsgcmVhbG0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocmVzLnN0YXR1cyAhPSAyMDApKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gSHR0cEVycm9yLmJpbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IFt2b2lkIDAsIHJlcy5zdGF0dXNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLnRleHQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogdGhyb3cgbmV3IChfYS5hcHBseShIdHRwRXJyb3IsIF9iLmNvbmNhdChbX2Muc2VudCgpXSkpKSgpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy5qc29uKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovLCBfYy5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0YWJsZSwgZG9jLCBicmFuY2hJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kbyhmdW5jdGlvbiAocikgeyByZXR1cm4gci5hZGQodGFibGUsIGRvYyk7IH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENsaWVudC5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKHRhYmxlLCBkb2MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG8oZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIucHV0KHRhYmxlLCBkb2MpOyB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICh0YWJsZSwgaWQsIGRlbHRhRG9jLCBicmFuY2hJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kbyhmdW5jdGlvbiAocikgeyByZXR1cm4gci51cGRhdGUodGFibGUsIGlkLCBkZWx0YURvYywgYnJhbmNoSWQpOyB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKGJyYW5jaElkLCB0YXJnZXRCcmFuY2hJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kbyhmdW5jdGlvbiAocikgeyByZXR1cm4gci5tZXJnZShicmFuY2hJZCwgdGFyZ2V0QnJhbmNoSWQpOyB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLmNsZWFyQnJhbmNoID0gZnVuY3Rpb24gKGJyYW5jaElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLmNsZWFyQnJhbmNoKGJyYW5jaElkKTsgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ2xpZW50LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodGFibGUsIGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLmRlbGV0ZSh0YWJsZSwgaWQpOyB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLnNoYXJlID0gZnVuY3Rpb24gKHRhYmxlLCBpZCwgYWNsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLnNoYXJlKHRhYmxlLCBpZCwgYWNsKTsgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ2xpZW50LnByb3RvdHlwZS51bnNoYXJlID0gZnVuY3Rpb24gKHRhYmxlLCBpZCwgYWNsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLnVuc2hhcmUodGFibGUsIGlkLCBhY2wpOyB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLmxpbmsgPSBmdW5jdGlvbiAoc291cmNlVGFibGUsIHNvdXJjZUlkLCB0YXJnZXRUYWJsZSwgdGFyZ2V0SWQsIGxhYmVsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLmxpbmsoc291cmNlVGFibGUsIHNvdXJjZUlkLCB0YXJnZXRUYWJsZSwgdGFyZ2V0SWQsIGxhYmVsKTsgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ2xpZW50LnByb3RvdHlwZS5saW5rMiA9IGZ1bmN0aW9uIChzb3VyY2VUYWJsZSwgc291cmNlSWQsIHRhcmdldElkLCBsYWJlbCwgYnJhbmNoSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG8oZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIubGluazIoc291cmNlVGFibGUsIHNvdXJjZUlkLCBsYWJlbCwgdGFyZ2V0SWQsIGJyYW5jaElkKTsgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ2xpZW50LnByb3RvdHlwZS51bmxpbmsgPSBmdW5jdGlvbiAoc291cmNlVGFibGUsIHNvdXJjZUlkLCB0YXJnZXRUYWJsZSwgdGFyZ2V0SWQsIGxhYmVsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLnVubGluayhzb3VyY2VUYWJsZSwgc291cmNlSWQsIHRhcmdldFRhYmxlLCB0YXJnZXRJZCwgbGFiZWwpOyB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDbGllbnQucHJvdG90eXBlLnVubGluazIgPSBmdW5jdGlvbiAoc291cmNlVGFibGUsIHNvdXJjZUlkLCB0YXJnZXRJZCwgbGFiZWwsIGJyYW5jaElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLnVubGluazIoc291cmNlVGFibGUsIHNvdXJjZUlkLCBsYWJlbCwgdGFyZ2V0SWQsIGJyYW5jaElkKTsgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ2xpZW50LnByb3RvdHlwZS51bmRvTGluayA9IGZ1bmN0aW9uIChzb3VyY2VUYWJsZSwgc291cmNlSWQsIHRhcmdldElkLCBsYWJlbCwgYnJhbmNoSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG8oZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIudW5kb0xpbmsoc291cmNlVGFibGUsIHNvdXJjZUlkLCBsYWJlbCwgdGFyZ2V0SWQsIGJyYW5jaElkKTsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gS2VkQmFja2VuZENsaWVudDtcbn0oKSk7XG5leHBvcnQgeyBLZWRCYWNrZW5kQ2xpZW50IH07XG52YXIgQmF0Y2hSdW5uZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmF0Y2hSdW5uZXIoKSB7XG4gICAgICAgIHRoaXMubXV0YXRpb25SZXF1ZXN0cyA9IFtdO1xuICAgIH1cbiAgICBCYXRjaFJ1bm5lci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRhYmxlLCBkb2MsIGJyYW5jaElkKSB7XG4gICAgICAgIHRoaXMubXV0YXRpb25SZXF1ZXN0cy5wdXNoKHsgb3A6ICdhZGQnLCB0YWJsZTogdGFibGUsIGRvYzogZG9jLCBicmFuY2hJZDogYnJhbmNoSWQgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQmF0Y2hSdW5uZXIucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uICh0YWJsZSwgZG9jKSB7XG4gICAgICAgIGRvYyA9IHRzbGliXzEuX19hc3NpZ24oe30sIGRvYyk7XG4gICAgICAgIGRlbGV0ZSBkb2MuYWNsOyAvLyBGb3JiaWRkZW4gdG8gc2VuZCBhY2wgd2l0aCBwdXQoKSBjYWxscy5cbiAgICAgICAgdGhpcy5tdXRhdGlvblJlcXVlc3RzLnB1c2goeyBvcDogJ3B1dCcsIHRhYmxlOiB0YWJsZSwgZG9jOiBkb2MgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQmF0Y2hSdW5uZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICh0YWJsZSwgaWQsIGRlbHRhRG9jLCBicmFuY2hJZCkge1xuICAgICAgICBkZWx0YURvYyA9IHRzbGliXzEuX19hc3NpZ24oe30sIGRlbHRhRG9jKTtcbiAgICAgICAgdGhpcy5tdXRhdGlvblJlcXVlc3RzLnB1c2goeyBvcDogJ3VwZGF0ZScsIHRhYmxlOiB0YWJsZSwgaWQ6IGlkLCBkZWx0YURvYzogZGVsdGFEb2MsIGJyYW5jaElkOiBicmFuY2hJZCB9KTtcbiAgICB9O1xuICAgIEJhdGNoUnVubmVyLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIChicmFuY2hJZCwgdGFyZ2V0QnJhbmNoSWQpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvblJlcXVlc3RzLnB1c2goeyBvcDogJ21lcmdlJywgYnJhbmNoSWQ6IGJyYW5jaElkLCB0YXJnZXRCcmFuY2hJZDogdGFyZ2V0QnJhbmNoSWQgfSk7XG4gICAgfTtcbiAgICBCYXRjaFJ1bm5lci5wcm90b3R5cGUuY2xlYXJCcmFuY2ggPSBmdW5jdGlvbiAoYnJhbmNoSWQpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvblJlcXVlc3RzLnB1c2goeyBvcDogJ2NsZWFyLWJyYW5jaCcsIGJyYW5jaElkOiBicmFuY2hJZCB9KTtcbiAgICB9O1xuICAgIEJhdGNoUnVubmVyLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodGFibGUsIGlkKSB7XG4gICAgICAgIHRoaXMubXV0YXRpb25SZXF1ZXN0cy5wdXNoKHsgb3A6ICdkZWxldGUnLCB0YWJsZTogdGFibGUsIGlkOiBpZCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBCYXRjaFJ1bm5lci5wcm90b3R5cGUuc2hhcmUgPSBmdW5jdGlvbiAodGFibGUsIGlkLCBhY2wpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvblJlcXVlc3RzLnB1c2goeyBvcDogJ3NoYXJlJywgdGFibGU6IHRhYmxlLCBpZDogaWQsIGFjbDogYWNsIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEJhdGNoUnVubmVyLnByb3RvdHlwZS51bnNoYXJlID0gZnVuY3Rpb24gKHRhYmxlLCBpZCwgYWNsKSB7XG4gICAgICAgIHRoaXMubXV0YXRpb25SZXF1ZXN0cy5wdXNoKHsgb3A6ICd1bnNoYXJlJywgdGFibGU6IHRhYmxlLCBpZDogaWQsIGFjbDogYWNsIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEJhdGNoUnVubmVyLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24gKHNvdXJjZVRhYmxlLCBzb3VyY2VJZCwgdGFyZ2V0VGFibGUsIHRhcmdldElkLCBsYWJlbCkge1xuICAgICAgICB0aGlzLm11dGF0aW9uUmVxdWVzdHMucHVzaCh7IG9wOiAnbGluaycsIHNvdXJjZVRhYmxlOiBzb3VyY2VUYWJsZSwgc291cmNlSWQ6IHNvdXJjZUlkLCB0YXJnZXRUYWJsZTogdGFyZ2V0VGFibGUsIHRhcmdldElkOiB0YXJnZXRJZCwgbGFiZWw6IGxhYmVsIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEJhdGNoUnVubmVyLnByb3RvdHlwZS5saW5rMiA9IGZ1bmN0aW9uIChzb3VyY2VUYWJsZSwgc291cmNlSWQsIGxhYmVsLCB0YXJnZXRJZCwgYnJhbmNoSWQpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvblJlcXVlc3RzLnB1c2goeyBvcDogJ2xpbmsnLCBzb3VyY2VUYWJsZTogc291cmNlVGFibGUsIHNvdXJjZUlkOiBzb3VyY2VJZCwgdGFyZ2V0SWQ6IHRhcmdldElkLCBsYWJlbDogbGFiZWwsIGJyYW5jaElkOiBicmFuY2hJZCB9KTtcbiAgICB9O1xuICAgIEJhdGNoUnVubmVyLnByb3RvdHlwZS51bmxpbmsgPSBmdW5jdGlvbiAoc291cmNlVGFibGUsIHNvdXJjZUlkLCB0YXJnZXRUYWJsZSwgdGFyZ2V0SWQsIGxhYmVsKSB7XG4gICAgICAgIHRoaXMubXV0YXRpb25SZXF1ZXN0cy5wdXNoKHsgb3A6ICd1bmxpbmsnLCBzb3VyY2VUYWJsZTogc291cmNlVGFibGUsIHNvdXJjZUlkOiBzb3VyY2VJZCwgdGFyZ2V0VGFibGU6IHRhcmdldFRhYmxlLCB0YXJnZXRJZDogdGFyZ2V0SWQsIGxhYmVsOiBsYWJlbCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBCYXRjaFJ1bm5lci5wcm90b3R5cGUudW5saW5rMiA9IGZ1bmN0aW9uIChzb3VyY2VUYWJsZSwgc291cmNlSWQsIGxhYmVsLCB0YXJnZXRJZCwgYnJhbmNoSWQpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvblJlcXVlc3RzLnB1c2goeyBvcDogJ3VubGluaycsIHNvdXJjZVRhYmxlOiBzb3VyY2VUYWJsZSwgc291cmNlSWQ6IHNvdXJjZUlkLCB0YXJnZXRJZDogdGFyZ2V0SWQsIGxhYmVsOiBsYWJlbCwgYnJhbmNoSWQ6IGJyYW5jaElkIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEJhdGNoUnVubmVyLnByb3RvdHlwZS51bmRvTGluayA9IGZ1bmN0aW9uIChzb3VyY2VUYWJsZSwgc291cmNlSWQsIGxhYmVsLCB0YXJnZXRJZCwgYnJhbmNoSWQpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvblJlcXVlc3RzLnB1c2goeyBvcDogJ3VuZG8tbGluaycsIHNvdXJjZVRhYmxlOiBzb3VyY2VUYWJsZSwgc291cmNlSWQ6IHNvdXJjZUlkLCB0YXJnZXRJZDogdGFyZ2V0SWQsIGxhYmVsOiBsYWJlbCwgYnJhbmNoSWQ6IGJyYW5jaElkIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEJhdGNoUnVubmVyO1xufSgpKTtcbmV4cG9ydCB7IEJhdGNoUnVubmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgUmVzdENsaWVudCB9IGZyb20gJy4vcmVzdGNsaWVudCc7XG5pbXBvcnQgeyBhdm9pZFNpbXVsdGFub3VzQ2FsbHMgfSBmcm9tICcuL3V0aWxzJztcbnZhciBLZWRCZWFyZXJQcm92aWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLZWRCZWFyZXJQcm92aWRlcihpc29tb3JwaGljLCBzdG9yYWdlLCB0b2tlbklkLCBjbGllbnRJZCwgY2xpZW50U2VjcmV0LCB0b2tlblVybCwgdG9rZW5RdWVyeSkge1xuICAgICAgICB0aGlzLmlzb21vcnBoaWMgPSBpc29tb3JwaGljO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xuICAgICAgICB0aGlzLnRva2VuSWQgPSB0b2tlbklkO1xuICAgICAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XG4gICAgICAgIHRoaXMuY2xpZW50U2VjcmV0ID0gY2xpZW50U2VjcmV0O1xuICAgICAgICB0aGlzLnRva2VuVXJsID0gdG9rZW5Vcmw7XG4gICAgICAgIHRoaXMudG9rZW5RdWVyeSA9IHRva2VuUXVlcnk7XG4gICAgICAgIHRoaXMudG9rZW5JbmZvID0geyB0b2tlbjogbnVsbCwgZXhwaXJlczogMCB9O1xuICAgICAgICB0aGlzLmNsaWVudCA9IG5ldyBSZXN0Q2xpZW50KGlzb21vcnBoaWMsIFwiXCIsIHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLmNsaWVudElkLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuY2xpZW50U2VjcmV0XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdldEJlYXJlciA9IGF2b2lkU2ltdWx0YW5vdXNDYWxscyh0aGlzLmdldEJlYXJlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoQmVhcmVyID0gYXZvaWRTaW11bHRhbm91c0NhbGxzKHRoaXMucmVmcmVzaEJlYXJlci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgS2VkQmVhcmVyUHJvdmlkZXIucHJvdG90eXBlLmdldEJlYXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIHRva2VuLCBleHBpcmVzLCBfYiwgZV8xO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXMudG9rZW5JbmZvLCB0b2tlbiA9IF9hLnRva2VuLCBleHBpcmVzID0gX2EuZXhwaXJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbiAmJiBleHBpcmVzID49IERhdGUubm93KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMudG9rZW5JbmZvXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFsxLCA0LCAsIDZdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc3RvcmFnZS5sb2FkKHRoaXMuY2xpZW50SWQgKyBcIi9cIiArIHRoaXMudG9rZW5JZCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50b2tlbkluZm8gPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b2tlbkluZm8udG9rZW4gJiYgdGhpcy50b2tlbkluZm8uZXhwaXJlcyA+PSBEYXRlLm5vdygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnRva2VuSW5mb107XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlZnJlc2hCZWFyZXIoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnRva2VuSW5mb107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVmcmVzaEJlYXJlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMudG9rZW5JbmZvXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgS2VkQmVhcmVyUHJvdmlkZXIucHJvdG90eXBlLnJlZnJlc2hCZWFyZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlcywgcmV0cmllcywgX2EsIF9iO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXRyaWVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocmV0cmllcyA8IDYpKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmV0cmlldmluZyB0b2tlbiBmb3IgXCIgKyB0aGlzLnRva2VuSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jbGllbnQuZ2V0KHRoaXMudG9rZW5VcmwsIHRoaXMudG9rZW5RdWVyeSwgeyBjYWNoZTogJ3JlbG9hZCcgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiR290IFwiICsgcmVzLnN0YXR1cyArIFwiIFwiICsgcmVzLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy50ZXh0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50b2tlbkluZm8gPSAoX2IudG9rZW4gPSBfYy5zZW50KCksIF9iLmV4cGlyZXMgPSBEYXRlLm5vdygpICsgNTkgKiA2MCAqIDEwMDAsIF9iKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR290IHRva2VuIGZvciBcIiArIHRoaXMudG9rZW5JZCArIFwiOiBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMudG9rZW5JbmZvKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2F2ZSh0aGlzLmNsaWVudElkICsgXCIvXCIgKyB0aGlzLnRva2VuSWQsIHRoaXMudG9rZW5JbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnRva2VuSW5mb107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICsrcmV0cmllcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byByZXRyaWV2ZSB0b2tlbiBmb3IgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnRva2VuSWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gS2VkQmVhcmVyUHJvdmlkZXI7XG59KCkpO1xuZXhwb3J0IHsgS2VkQmVhcmVyUHJvdmlkZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWtlZC1iZWFyZXItcHJvdmlkZXIuanMubWFwIiwiLypcbmRlY2xhcmUgdmFyIEJ1ZmZlcjsgLy8gbm9kZSBidWlsdC1pblxuXG5cbmZ1bmN0aW9uIGJhc2ljQXV0aEhlYWRlcih1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gXCJCYXNpYyBcIiArIG5ldyBCdWZmZXIodXNlcm5hbWUgKyBcIjpcIiArIHBhc3N3b3JkKS50b1N0cmluZyhcImJhc2U2NFwiKTtcbn1cbiovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgY3JlYXRlVVVJRCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBFbWl0dGVyIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9lbWl0dGVyJztcbnZhciBSZXN0Q2xpZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc3RDbGllbnQoaXNvbW9ycGhpYywgYmFzZVVybCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmlzb21vcnBoaWMgPSBpc29tb3JwaGljO1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLm51bU91dHN0YW5kaW5nT3BlcmF0aW9ucyA9IDA7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTsgLy8sIHRpbWVvdXQ6IG51bWJlcn19O1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSBuZXcgRW1pdHRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5mZXRjaE9wdGlvbnMgPSB7IG1vZGU6ICdjb3JzJyB9O1xuICAgICAgICB0aGlzLmF1dGhIZWFkZXIgPSBvcHRpb25zLmJlYXJlciA/XG4gICAgICAgICAgICBcIkJlYXJlciBcIiArIG9wdGlvbnMuYmVhcmVyIDpcbiAgICAgICAgICAgIG9wdGlvbnMudXNlcm5hbWUgP1xuICAgICAgICAgICAgICAgIFwiQmFzaWMgXCIgKyBpc29tb3JwaGljLmJ0b2Eob3B0aW9ucy51c2VybmFtZSArIFwiOlwiICsgKG9wdGlvbnMucGFzc3dvcmQgfHwgXCJcIikpIDpcbiAgICAgICAgICAgICAgICBudWxsO1xuICAgICAgICB0aGlzLmJlYXJlclByb3ZpZGVyID0gb3B0aW9ucy5iZWFyZXJQcm92aWRlciB8fCBudWxsO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVzdENsaWVudC5wcm90b3R5cGUsIFwic3RhdHVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBSZXN0Q2xpZW50LnByb3RvdHlwZS5zdXNwZW5zZUZldGNoID0gZnVuY3Rpb24gKHBhdGgsIG1ldGhvZCwgaGVhZGVycywgcXVlcnksIGZldGNoT3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIga2V5ID0gbWV0aG9kICsgXCIgXCIgKyBwYXRoICsgXCIgXCIgKyBKU09OLnN0cmluZ2lmeShoZWFkZXJzKSArIFwiIFwiICsgSlNPTi5zdHJpbmdpZnkocXVlcnkpICsgXCIgXCIgKyBKU09OLnN0cmluZ2lmeShmZXRjaE9wdGlvbnMpO1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLmNhY2hlW2tleV07XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgLy8gRW50cnkgZm91bmQuIElzIGl0IHN0aWxsIGJlaW5nIGZldGNoZWQ/XG4gICAgICAgICAgICBpZiAoJ3Byb21pc2UnIGluIGVudHJ5KVxuICAgICAgICAgICAgICAgIHRocm93IGVudHJ5LnByb21pc2U7IC8vIFN0aWxsIGJlaW5nIGZldGNoZWQuIE11bHRpcGxlIHBhcmFsbGVsbCBmZXRjaGVzIHNob3VsZCB3b3JrIG9uIHNhbWUgcHJvbWlzZSFcbiAgICAgICAgICAgIC8vIFByb21pc2UgaGFzIHJlc29sdmVkLiBSZXR1cm4gcmVzdWx0LlxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlIGFyZSB0aGUgZmlyc3QgdG8gZG8gdGhpcyByZXF1ZXN0LiBTdGFydCBkb2luZyBpdDpcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5mZXRjaChwYXRoLCBtZXRob2QsIGhlYWRlcnMsIHF1ZXJ5LCBmZXRjaE9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXR1cywgdGV4dDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IHJlcy5zdGF0dXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLnRleHQoKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0ZXh0OyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gSlNPTi5wYXJzZSh0ZXh0KTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgIC8vIEltbWVkaWF0ZWx5IHB1dCB0aGUgcHJvbWlzZSBpbiB0aGUgY2FjaGUuIE11bHRpcGxlIHBhcmFsbGVsbCBmZXRjaGVzIHNob3VsZCB3b3JrIG9uIHRoZSBzYW1lIHByb21pc2UhXG4gICAgICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSB7IHByb21pc2U6IHByb21pc2UgfTtcbiAgICAgICAgICAgIC8vIFN1c3BlbmQgdW50aWwgcHJvbWlzZSBpcyByZXNvbHZlZC4gQXQgdGhhdCB0aW1lLCB0aGUgY2FjaGUgd2lsbCBjb250YWluIGFuIGFuc3dlciFcbiAgICAgICAgICAgIHRocm93IHByb21pc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlc3RDbGllbnQucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24gKHBhdGgsIG1ldGhvZCwgaGVhZGVycywgcXVlcnksIGZldGNoT3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICArK3RoaXMubnVtT3V0c3RhbmRpbmdPcGVyYXRpb25zO1xuICAgICAgICB0aGlzLl9zdGF0dXMuZGlzcGF0Y2godGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9mZXRjaChwYXRoLCBtZXRob2QsIGhlYWRlcnMsIHF1ZXJ5LCBmZXRjaE9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAtLV90aGlzLm51bU91dHN0YW5kaW5nT3BlcmF0aW9ucztcbiAgICAgICAgICAgIF90aGlzLl9zdGF0dXMuZGlzcGF0Y2goX3RoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgLS1fdGhpcy5udW1PdXRzdGFuZGluZ09wZXJhdGlvbnM7XG4gICAgICAgICAgICBfdGhpcy5fc3RhdHVzLmRpc3BhdGNoKF90aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFJlc3RDbGllbnQucHJvdG90eXBlLl9mZXRjaCA9IGZ1bmN0aW9uIChwYXRoLCBtZXRob2QsIGhlYWRlcnMsIHF1ZXJ5LCBmZXRjaE9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcXVlcnlTdHIsIF9hLCBhdXRoSGVhZGVyLCB0b2tlbkluZm8sIGJlYXJlclByb3ZpZGVyLCBfYiwgX2MsIHVybCwgcmVzLCB3d3dhdXRoLCBfZDtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2UubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZldGNoT3B0aW9ucyAmJiBmZXRjaE9wdGlvbnMuY2FjaGUgPT09ICduby1jYWNoZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBiYWNrLWJ1dHRvbiBub3QgcmVzcGVjdGluZyBjYWNoZSBjb250cm9sIGluIENocm9tZS9PcGVyYS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHBlbmQgYSBxdWVyeSBwYXJhbWV0ZXIgdG8gZm9yY2UgYSBjYWNoZSBlbnRyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgcXVlcnksIHsgbm9jYWNoZTogY3JlYXRlVVVJRCgpIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlTdHIgPSBxdWVyeSAmJiBPYmplY3Qua2V5cyhxdWVyeSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHF1ZXJ5W2tleV0gIT09IHVuZGVmaW5lZDsgfSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIj1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChxdWVyeVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJyYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdGhpcywgYXV0aEhlYWRlciA9IF9hLmF1dGhIZWFkZXIsIHRva2VuSW5mbyA9IF9hLnRva2VuSW5mbywgYmVhcmVyUHJvdmlkZXIgPSBfYS5iZWFyZXJQcm92aWRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKCFhdXRoSGVhZGVyICYmICF0b2tlbkluZm8gJiYgYmVhcmVyUHJvdmlkZXIpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGJlYXJlclByb3ZpZGVyLmdldEJlYXJlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudG9rZW5JbmZvID0gdG9rZW5JbmZvID0gX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRva2VuSW5mbykgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0b2tlbkluZm8uZXhwaXJlcyA8IERhdGUubm93KCkpKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVG9rZW4gZXhwaXJlZC4gUmVmcmVzaCBpdDpcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBiZWFyZXJQcm92aWRlci5yZWZyZXNoQmVhcmVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy50b2tlbkluZm8gPSB0b2tlbkluZm8gPSBfZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZS5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhIZWFkZXIgPSBcIkJlYXJlciBcIiArIHRva2VuSW5mby50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW4gb25lIHdheSBvciBhbm90aGVyLCB3ZSd2ZSBjb25jbHVkZWQgYW4gQXV0aG9yaXphdGlvbiBoZWFkZXIgdG8gdXNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF1dGhIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzLkF1dGhvcml6YXRpb24gPSBhdXRoSGVhZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdGhpcy5iYXNlVXJsICsgcGF0aCArIChxdWVyeVN0ciA/IFwiP1wiICsgcXVlcnlTdHIgOiBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuaXNvbW9ycGhpYy5mZXRjaCh1cmwsIHRzbGliXzEuX19hc3NpZ24oe30sIHRoaXMuZmV0Y2hPcHRpb25zLCB7IGhlYWRlcnM6IGhlYWRlcnMsIG1ldGhvZDogbWV0aG9kIH0sIGZldGNoT3B0aW9ucykpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocmVzLnN0YXR1cyA9PSA0MDEgJiYgdGhpcy5iZWFyZXJQcm92aWRlcikpIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3d3YXV0aCA9IHJlcy5oZWFkZXJzLmdldChcInd3dy1hdXRoZW50aWNhdGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdvdCBcIiArIHJlcy5zdGF0dXMgKyBcIiBmcm9tIFwiICsgKHRoaXMuYmFzZVVybCArIHBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHd3d2F1dGggJiYgL0JlYXJlci9pLnRlc3Qod3d3YXV0aCkpKSByZXR1cm4gWzMgLypicmVhayovLCA5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuYmVhcmVyUHJvdmlkZXIucmVmcmVzaEJlYXJlcigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2QudG9rZW5JbmZvID0gX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gXCJCZWFyZXIgXCIgKyB0aGlzLnRva2VuSW5mby50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuaXNvbW9ycGhpYy5mZXRjaCh1cmwsIHRzbGliXzEuX19hc3NpZ24oe30sIHRoaXMuZmV0Y2hPcHRpb25zLCB7IGhlYWRlcnM6IGhlYWRlcnMsIG1ldGhvZDogbWV0aG9kIH0sIGZldGNoT3B0aW9ucykpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSA5O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFJlc3RDbGllbnQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChwYXRoLCBxdWVyeSwgZmV0Y2hPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoKHBhdGgsIFwiR0VUXCIsIHsgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb247IHRleHQvcGxhaW5cIiB9LCBxdWVyeSwgZmV0Y2hPcHRpb25zKTtcbiAgICB9O1xuICAgIFJlc3RDbGllbnQucHJvdG90eXBlLnN1c3BlbnNlR2V0ID0gZnVuY3Rpb24gKHBhdGgsIHF1ZXJ5LCBmZXRjaE9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VzcGVuc2VGZXRjaChwYXRoLCBcIkdFVFwiLCB7IEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uOyB0ZXh0L3BsYWluXCIgfSwgcXVlcnksIGZldGNoT3B0aW9ucyk7XG4gICAgfTtcbiAgICBSZXN0Q2xpZW50LnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24gKHBhdGgsIGRhdGEsIGZldGNoT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaChwYXRoLCBcIlBPU1RcIiwge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LCBudWxsLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBmZXRjaE9wdGlvbnMsIHsgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSkgfSkpO1xuICAgIH07XG4gICAgUmVzdENsaWVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHBhdGgsIHF1ZXJ5LCBib2R5LCBmZXRjaE9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2gocGF0aCwgXCJERUxFVEVcIiwgeyBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbjsgdGV4dC9wbGFpblwiIH0sIHF1ZXJ5LCB0c2xpYl8xLl9fYXNzaWduKHt9LCBmZXRjaE9wdGlvbnMsIHsgYm9keTogYm9keSB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzdENsaWVudDtcbn0oKSk7XG5leHBvcnQgeyBSZXN0Q2xpZW50IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXN0Y2xpZW50LmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVVVJRCgpIHtcbiAgICAvLyBEZWNlbnQgc29sdXRpb24gZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNTAzNC9ob3ctdG8tY3JlYXRlLWEtZ3VpZC11dWlkLWluLWphdmFzY3JpcHRcbiAgICB2YXIgZCA9IERhdGUubm93KCk7XG4gICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgICAgICBkID0gTWF0aC5mbG9vcihkIC8gMTYpO1xuICAgICAgICByZXR1cm4gKGMgPT09ICd4JyA/IHIgOiAociAmIDB4NyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdXVpZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhdm9pZFNpbXVsdGFub3VzQ2FsbHMobWV0aG9kKSB7XG4gICAgdmFyIG9uZ29pbmdQcm9taXNlID0gbnVsbDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIW9uZ29pbmdQcm9taXNlKSB7XG4gICAgICAgICAgICBvbmdvaW5nUHJvbWlzZSA9IG1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIG9uZ29pbmdQcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9uZ29pbmdQcm9taXNlO1xuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsSWQocmVhbG0pIHtcbiAgICB2YXIgcHJlZml4ID0gJ2VjOTZiM2JlLTQ1ZmMtNDFkMy1iNjllLSc7XG4gICAgdmFyIHBhZCA9IFsnNTAnLCAnMDgnLCAnZTEnLCAnNDAnLCAnZTQnLCAnZTcnXTtcbiAgICBpZiAocmVhbG0ubGVuZ3RoID4gNilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9vIGxvbmcgcmVhbG1cIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWFsbS5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgaGV4ID0gcmVhbG0uY2hhckNvZGVBdChpKS50b1N0cmluZygxNik7XG4gICAgICAgIHBhZFtpXSA9IGhleC5sZW5ndGggPT09IDIgP1xuICAgICAgICAgICAgaGV4IDpcbiAgICAgICAgICAgICcwJyArIGhleDtcbiAgICB9XG4gICAgcmV0dXJuIHByZWZpeCArIHBhZC5qb2luKCcnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlUHJlZGVzdGluYXRlZElkKGlucHV0KSB7XG4gICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbmNvZGVyLCBkYXRhLCBkaWdlc3QsIF9hLCBpO1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGVuY29kZXIuZW5jb2RlKGlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBVaW50OEFycmF5LmJpbmQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNyeXB0by5zdWJ0bGUuZGlnZXN0KCdTSEEtMjU2JywgZGF0YSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgZGlnZXN0ID0gbmV3IChfYS5hcHBseShVaW50OEFycmF5LCBbdm9pZCAwLCBfYi5zZW50KCldKSkoKTtcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5pYmJsZSA9IGRpZ2VzdFtpKytdICUgMTYgfCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3YXNoZWROaWJibGUgPSBjID09PSAneCcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWJibGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWJibGUgJiAweDcgfCAweDg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdhc2hlZE5pYmJsZS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsZURpZ2VzdChpbnB1dCkge1xuICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZW5jb2RlciwgaW5wdXRCeXRlcywgZGlnZXN0Qnl0ZXMsIF9hO1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRCeXRlcyA9IGVuY29kZXIuZW5jb2RlKGlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBVaW50OEFycmF5LmJpbmQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNyeXB0by5zdWJ0bGUuZGlnZXN0KCdTSEEtMjU2JywgaW5wdXRCeXRlcyldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgZGlnZXN0Qnl0ZXMgPSBuZXcgKF9hLmFwcGx5KFVpbnQ4QXJyYXksIFt2b2lkIDAsIF9iLnNlbnQoKSwgMCwgMTZdKSkoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGJ1ZjJoZXgoZGlnZXN0Qnl0ZXMpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG52YXIgc2ltcGxlRGlnZXN0Q2FjaGUgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBzaW1wbGVEaWdlc3RTdXNwZW5zZShpbnB1dHMpIHtcbiAgICB2YXIgcmVzdWx0cyA9IGlucHV0cy5tYXAoZnVuY3Rpb24gKGlucHV0KSB7IHJldHVybiBzaW1wbGVEaWdlc3RDYWNoZVtpbnB1dF07IH0pO1xuICAgIHZhciB1bnJlc29sdmVkSW5wdXRzID0gW107XG4gICAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQsIGluZGV4KSB7XG4gICAgICAgIGlmICghcmVzdWx0KVxuICAgICAgICAgICAgdW5yZXNvbHZlZElucHV0cy5wdXNoKGlucHV0c1tpbmRleF0pO1xuICAgIH0pO1xuICAgIGlmICh1bnJlc29sdmVkSW5wdXRzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgdGhyb3cgUHJvbWlzZS5hbGwodW5yZXNvbHZlZElucHV0cy5tYXAoZnVuY3Rpb24gKGlucHV0KSB7IHJldHVybiBzaW1wbGVEaWdlc3QoaW5wdXQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gc2ltcGxlRGlnZXN0Q2FjaGVbaW5wdXRdID0gcmVzdWx0OyB9KTsgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJ1ZjJoZXgoYnVmZmVyKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChidWZmZXIsIGZ1bmN0aW9uICh4KSB7IHJldHVybiAoJzAwJyArIHgudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7IH0pLmpvaW4oJycpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFycmF5KGEsIG1hcHBlcikge1xuICAgIHZhciByZXR2YWwgPSBhO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgdmFyIHQgPSBhW2ldO1xuICAgICAgICB2YXIgbWFwcGVkID0gbWFwcGVyKHQpO1xuICAgICAgICBpZiAobWFwcGVkICE9PSB0KSB7XG4gICAgICAgICAgICBpZiAocmV0dmFsID09PSBhKVxuICAgICAgICAgICAgICAgIHJldHZhbCA9IGEuc2xpY2UoKTtcbiAgICAgICAgICAgIHJldHZhbFtpXSA9IG1hcHBlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0dmFsO1xufVxuLypcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBcnJheTxUPihhOiBUW10sIG1hcHBlcjogKHQ6IFQpID0+IFQgfCBmYWxzZSk6IFRbXSB7XG4gIGxldCByZXR2YWwgPSBhO1xuICBsZXQgaiA9IDA7XG4gIGZvciAobGV0IGk9MCxsPWEubGVuZ3RoOyBpPGw7ICsraSwgKytqKSB7XG4gICAgY29uc3QgdCA9IGFbaV07XG4gICAgY29uc3QgbWFwcGVkID0gbWFwcGVyKHQpO1xuICAgIGlmIChtYXBwZWQgPT09IGZhbHNlKSB7XG4gICAgICAvLyBNYXBwZXIgd2FudHMgdG8gZGVsZXRlIHRoaXMgZG9jLlxuICAgICAgaWYgKHJldHZhbCA9PT0gYSkgcmV0dmFsID0gYS5zbGljZSgpO1xuICAgICAgcmV0dmFsLnNwbGljZShqLCAxKTtcbiAgICAgIC0tajsgLy8gY29tcGVuc2F0ZSBmb3IgKytqXG4gICAgfSBlbHNlIGlmIChtYXBwZWQgIT09IHQpIHtcbiAgICAgIGlmIChyZXR2YWwgPT09IGEpIHJldHZhbCA9IGEuc2xpY2UoKTtcbiAgICAgIHJldHZhbFtqXSA9IG1hcHBlZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldHZhbDtcbn1cbiovIFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiaW1wb3J0ICogYXMgSnNvblNjaGVtYSBmcm9tIFwia2VkYmFja2VuZC1zY2hlbWEvc2NoZW1hLmpzb25cIjtcbmltcG9ydCB7IGdldFRhYmxlRnJvbUxhYmVsIH0gZnJvbSBcIi4vdXRpbHNcIjtcbnZhciBDYWNoZUJ1c3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FjaGVCdXN0KCkge1xuICAgIH1cbiAgICBDYWNoZUJ1c3QuZ2V0Q2FjaGVCdXN0ID0gZnVuY3Rpb24gKHRhYmxlLCBxdWVyeSwgdXNlciwgaW5jbHVkZXMpIHtcbiAgICAgICAgdmFyIGludm9sdmVkSXRlbXMgPSBDYWNoZUJ1c3QuZ2V0SW52b2x2ZWRJdGVtcyh0YWJsZSwgcXVlcnksIGluY2x1ZGVzKTtcbiAgICAgICAgcmV0dXJuIGludm9sdmVkSXRlbXNcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FjaGUtYnVzdC1cIiArIHVzZXIgKyBcIi1cIiArIGl0ZW0pOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICEhdmFsdWU7IH0pXG4gICAgICAgICAgICAuam9pbignLycpIHx8ICdzdGF0aWMnO1xuICAgIH07XG4gICAgQ2FjaGVCdXN0LmludmFsaWRhdGVDYWNoZSA9IGZ1bmN0aW9uIChyZXFzLCB1c2VyKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBDYWNoZUJ1c3QuZ2V0Q2FjaGVJbnZhbGlkYXRpb25zKHJlcXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBfYVtfaV07XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhY2hlLWJ1c3QtXCIgKyB1c2VyICsgXCItXCIgKyBpdGVtLCAnJyArIERhdGUubm93KCkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDYWNoZUJ1c3QuZ2V0SW52b2x2ZWRJdGVtcyA9IGZ1bmN0aW9uICh0YWJsZSwgcXVlcnksIGluY2x1ZGVzKSB7XG4gICAgICAgIHZhciBoYXNFZGdlc0Zyb20gPSBxdWVyeS5oYXNFZGdlc0Zyb207XG4gICAgICAgIHZhciByZWxhdGVkVGFibGVzID0gaW5jbHVkZXNcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGxhYmVsKSB7IHJldHVybiBKc29uU2NoZW1hLnRhYmxlc1t0YWJsZV0ucmVsYXRpb25zaGlwc1tsYWJlbF07IH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uICh0YWJsZSkgeyByZXR1cm4gISF0YWJsZTsgfSk7XG4gICAgICAgIGlmIChoYXNFZGdlc0Zyb20pXG4gICAgICAgICAgICByZWxhdGVkVGFibGVzLnB1c2goXCJoZWZcIiArIHRhYmxlKTtcbiAgICAgICAgcmV0dXJuIFt0YWJsZSwgJ21hc3RlcicsIHF1ZXJ5LmJyYW5jaElkXS5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuICEheDsgfSkuY29uY2F0KHJlbGF0ZWRUYWJsZXMpLnNvcnQoKTtcbiAgICB9O1xuICAgIENhY2hlQnVzdC5nZXRDYWNoZUludmFsaWRhdGlvbnMgPSBmdW5jdGlvbiAocmVxcykge1xuICAgICAgICB2YXIgaW52YWxpZGF0aW9uU2V0ID0ge307XG4gICAgICAgIHJlcXMuZm9yRWFjaChmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlcS5vcCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgICAgICAgICAgY2FzZSAncHV0JzpcbiAgICAgICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3VwZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRhdGlvblNldFtyZXEudGFibGVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGluayc6XG4gICAgICAgICAgICAgICAgY2FzZSAndW5saW5rJzpcbiAgICAgICAgICAgICAgICBjYXNlICd1bmRvLWxpbmsnOlxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkYXRpb25TZXRbcmVxLnNvdXJjZVRhYmxlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRhdGlvblNldFtcImhlZi1cIiArIGdldFRhYmxlRnJvbUxhYmVsKHJlcS5zb3VyY2VUYWJsZSwgcmVxLmxhYmVsKV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjbGVhci1icmFuY2gnOlxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkYXRpb25TZXRbcmVxLmJyYW5jaElkXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21lcmdlJzpcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZGF0aW9uU2V0W3JlcS5icmFuY2hJZF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkYXRpb25TZXRbcmVxLnRhcmdldEJyYW5jaElkIHx8IFwibWFzdGVyXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoaW52YWxpZGF0aW9uU2V0KTtcbiAgICB9O1xuICAgIHJldHVybiBDYWNoZUJ1c3Q7XG59KCkpO1xuZXhwb3J0IHsgQ2FjaGVCdXN0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWNoZS1idXN0LmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBtZXJnZURlbHRhcyB9IGZyb20gJy4uL2RlbHRhLW1lcmdlJztcbmV4cG9ydCBmdW5jdGlvbiBhcHBseU11dGF0aW9uc09uRGVsdGFzKGJyYW5jaElkLCBkZWx0YXMsIG11dGF0aW9ucywgb3B0aW1pc3RpYywgdXNlckRpc3BsYXlOYW1lLCBoYXNBZGRpdGlvbmFsRmlsdGVyKSB7XG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAobSkge1xuICAgICAgICBzd2l0Y2ggKG0ub3ApIHtcbiAgICAgICAgICAgIGNhc2UgJ2FkZC1yZWxhdGVkJzpcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEFkZFJlbGF0ZWQgUmVwb011dGF0aW9uXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBpZiAoIWhhc0FkZGl0aW9uYWxGaWx0ZXIgJiYgbS5icmFuY2hJZCA9PT0gYnJhbmNoSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWRkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZDogbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRJZDogbS5yZWxhdGVkRG9jLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBtLmdyYXBoUHJvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VUYWJsZTogbS50YWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbWV0YTogb3B0aW1pc3RpYyA/ICdhZGRpbmcnIDogJ3BlcnNpc3RlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TmFtZTogbS5yZWxhdGVkRG9jLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJpYnV0b3I6IHVzZXJEaXNwbGF5TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfV0uY29uY2F0KGRlbHRhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2xlYXItYnJhbmNoJzpcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIENsZWFyQnJhbmNoIFJlcG9NdXRhdGlvblxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgaWYgKG0uYnJhbmNoSWQgPT09IGJyYW5jaElkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhcyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBEZWxldGUgUmVwb011dGF0aW9uXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBUaGlzIHR5cGUgb2YgbXV0YXRpb24gY2FuIG5vdCBiZSBwZXJmb3JtZWQgb250byBicmFuY2hlcy4gVGhlcmUncyBubyBicmFuY2hJZCBwcm9wZXJ0eSBvbiBtLlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWVyZ2UnOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgUmVwb011dGF0aW9uXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBpZiAobS5icmFuY2hJZCA9PT0gYnJhbmNoSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFzID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG0udGFyZ2V0QnJhbmNoSWQgPT09IGJyYW5jaElkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY2hhbmdlIHdpbGwgYXBwZW5kIG5ldyBkZWx0YXMgdG8gb3VyIGRlbHRhcyBhcnJheSBidXQgd2UgZG9uJ3Qga25vdyB3aGF0IHdvdWxkIGNvbWUuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5lZWQgdG8gcmVmZXRjaCBmcm9tIHNlcnZlci5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpbWlzdGljKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG51bGwgfTsgLy8gQ2FsbGVyIHNob3VsZCBjaGVjayBmb3IgbnVsbCBhbmQgcmUtZmV0Y2ggZGF0YSBmcm9tIHNlcnZlci5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmUtcmVsYXRlZCc6XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUtUmVsYXRlZCBSZXBvTXV0YXRpb25cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGlmIChoYXNBZGRpdGlvbmFsRmlsdGVyIHx8IG0uYnJhbmNoSWQgIT09IGJyYW5jaElkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgICAgIGRlbHRhcyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmVtb3ZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkOiBtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQ6IG0ucmVsYXRlZERvYy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5hbWU6IG0ucmVsYXRlZERvYy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG0uZ3JhcGhQcm9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVGFibGU6IG0udGFibGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cmlidXRvcjogdXNlckRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAkbWV0YTogb3B0aW1pc3RpYyA/ICdhZGRpbmcnIDogJ3BlcnNpc3RlZCdcbiAgICAgICAgICAgICAgICAgICAgfV0uY29uY2F0KGRlbHRhcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1bmRvLWxpbmsnOlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gVW5kby1MaW5rIFJlcG9NdXRhdGlvblxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgaWYgKG0uYnJhbmNoSWQgIT09IGJyYW5jaElkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCA9IGRlbHRhcy5maW5kSW5kZXgoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoZC50eXBlID09PSAnYWRkJyB8fCBkLnR5cGUgPT09ICdyZW1vdmUnIHx8IGQudHlwZSA9PT0gJ3VuZG8tbGluaycpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5zb3VyY2VJZCA9PT0gbS5pZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQudGFyZ2V0SWQgPT09IG0ucmVsYXRlZElkO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA8IDApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3VuZCBhbiBcImFkZFwiIG9yIFwicmVtb3ZlXCIgZGVsdGEgdG8gY2hhbmdlOlxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW1pc3RpYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhUmVsYXRpb24gPSBkZWx0YXNbaWR4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlIGV4aXN0aW5nIGFkZC9yZW1vdmUgZGVsdGEgYXMgY3VycmVubHR5IGJlaW5nIGRlbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhcyA9IGRlbHRhcy5zbGljZSgwLCBpZHgpLmNvbmNhdChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHNsaWJfMS5fX2Fzc2lnbih7fSwgZGVsdGFSZWxhdGlvbiwgeyAkbWV0YTogb3B0aW1pc3RpYyA/ICdyZW1vdmluZycgOiAncGVyc2lzdGVkJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSwgZGVsdGFzLnNsaWNlKGlkeCArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBlcnNpc3RlZC4gSnVzdCByZW1vdmUgaXQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YXMgPSBkZWx0YXMuc2xpY2UoMCwgaWR4KS5jb25jYXQoZGVsdGFzLnNsaWNlKGlkeCArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3VwZGF0ZSc6XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgUmVwb011dGF0aW9uXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICBpZiAobS5icmFuY2hJZCAhPT0gYnJhbmNoSWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWR4ID0gZGVsdGFzLmZpbmRJbmRleChmdW5jdGlvbiAoZGVsdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWx0YS50eXBlID09PSAnbW9kaWZ5JyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhLnRhcmdldElkID09PSBtLmlkO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA8IDAgJiYgIWhhc0FkZGl0aW9uYWxGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhcyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtb2RpZnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZTogbS50YWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQ6IG0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5hbWU6IG0udGFyZ2V0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbS5kZWx0YURvYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyaWJ1dG9yczogW3VzZXJEaXNwbGF5TmFtZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRtZXRhOiBvcHRpbWlzdGljID8gJ2FkZGluZycgOiAncGVyc2lzdGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XS5jb25jYXQoZGVsdGFzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ0RlbHRhRG9jID0gZGVsdGFzW2lkeF07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udHJpYnV0b3JzID0gZXhpc3RpbmdEZWx0YURvYy5jb250cmlidXRvcnMuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29udHJpYnV0b3JzLmluY2x1ZGVzKHVzZXJEaXNwbGF5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmlidXRvcnMucHVzaCh1c2VyRGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0RhdGEgPSBtZXJnZURlbHRhcyhleGlzdGluZ0RlbHRhRG9jLmRhdGEsIG0uZGVsdGFEb2MsIHsgcmVtb3ZlVW5zZXRQcm9wczogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW1pc3RpYyAmJiBPYmplY3Qua2V5cyhuZXdEYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21taXR0ZWQgbXV0YXRpb24gdGhhdCByZXNldHMgYSBkZWx0YURvYy4gUmVtb3ZlIHRoZSBkZWx0YURvYyBlbnRpcmVseTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YXMgPSBkZWx0YXMuc2xpY2UoMCwgaWR4KS5jb25jYXQoZGVsdGFzLnNsaWNlKGlkeCArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ21vZGlmeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZTogbS50YWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldElkOiBtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TmFtZTogbS50YXJnZXROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJpYnV0b3JzOiBjb250cmlidXRvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbWV0YTogb3B0aW1pc3RpYyA/ICd1cGRhdGluZycgOiAncGVyc2lzdGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uY29uY2F0KGRlbHRhcy5zbGljZSgwLCBpZHgpLCBkZWx0YXMuc2xpY2UoaWR4ICsgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIG11dGF0aW9uc18xID0gbXV0YXRpb25zOyBfaSA8IG11dGF0aW9uc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgbSA9IG11dGF0aW9uc18xW19pXTtcbiAgICAgICAgdmFyIHN0YXRlXzEgPSBfbG9vcF8xKG0pO1xuICAgICAgICBpZiAodHlwZW9mIHN0YXRlXzEgPT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVfMS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlbHRhcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcGx5LW11dGF0aW9ucy1vbi1kZWx0YXMuanMubWFwIiwiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEh0dHBFcnJvciB9IGZyb20gJy4uLy4uL2tlZC1iYWNrZW5kLWNsaWVudCc7XG5pbXBvcnQgeyBhcHBseU11dGF0aW9uc09uRGVsdGFzIH0gZnJvbSAnLi9hcHBseS1tdXRhdGlvbnMtb24tZGVsdGFzJztcbnZhciBEZWx0YUNhY2hlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlbHRhQ2FjaGUoZ2V0Q2xpZW50LCBnZXRVc2VyLCBnZXRVc2VyRGlzcGxheU5hbWUpIHtcbiAgICAgICAgdGhpcy5nZXRDbGllbnQgPSBnZXRDbGllbnQ7XG4gICAgICAgIHRoaXMuZ2V0VXNlciA9IGdldFVzZXI7XG4gICAgICAgIHRoaXMuZ2V0VXNlckRpc3BsYXlOYW1lID0gZ2V0VXNlckRpc3BsYXlOYW1lO1xuICAgICAgICB0aGlzLmxvb2t1cCA9IHt9O1xuICAgIH1cbiAgICBEZWx0YUNhY2hlLnByb3RvdHlwZS5hcHBseU11dGF0aW9ucyA9IGZ1bmN0aW9uIChtdXRhdGlvbnMsIF9hKSB7XG4gICAgICAgIHZhciBvcHRpbWlzdGljID0gKF9hID09PSB2b2lkIDAgPyB7IG9wdGltaXN0aWM6IGZhbHNlIH0gOiBfYSkub3B0aW1pc3RpYztcbiAgICAgICAgLy8gQXBwbHkgbXV0YXRpb25zIGxvY2FsbHkgb250byB0aGUgRGVsdGFDYWNoZSBhbmQgbm90aWZ5IHRoZWlyIHN1YnNjcmliZXJzXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2IgPSBPYmplY3Qua2V5cyh0aGlzLmxvb2t1cCk7IF9pIDwgX2IubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgcXVlcnlLZXkgPSBfYltfaV07XG4gICAgICAgICAgICB2YXIgY2FjaGVFbnRyeSA9IHRoaXMubG9va3VwW3F1ZXJ5S2V5XTtcbiAgICAgICAgICAgIGlmIChjYWNoZUVudHJ5LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gSW5zdGVhZCBoZXJlOiBTdG9yZSB0aGUgbXV0YXRpb25zIG9uIGNhY2hlRW50cnkuIE5vIG1hdHRlciBpZiBpdCB5ZXQgaGFzIHZhbHVlIG9yIG5vdC5cbiAgICAgICAgICAgICAgICAvLyBUaGVuIGFwcGx5IG11dGF0aW9uIHdoZW5ldmVyIHN1YnNjcmliaW5nISAoQmV0dGVyIGhhbmRsaW5nIG9mIG11dGF0aW9ucyB0aGF0IGFycml2ZXMgYmVmb3JlIGZldGNoKCkgaXMgZG9uZSlcbiAgICAgICAgICAgICAgICAvLyAoU2VlIGhvdyBJIGhhbmRsZSB0aGlzIGluIHF1ZXJ5LXNldC50cylcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBhcHBseU11dGF0aW9uc09uRGVsdGFzKGNhY2hlRW50cnkucXVlcnkuYnJhbmNoSWQsIGNhY2hlRW50cnkudmFsdWUsIG11dGF0aW9ucywgb3B0aW1pc3RpYywgdGhpcy5nZXRVc2VyRGlzcGxheU5hbWUoKSwgISFjYWNoZUVudHJ5LnF1ZXJ5LnRhZ3MpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgbXV0YXRpb24gcmVxdWlyZXMgY2FjaGVFbnRyeSB0byBiZSByZWZldGNoZWQgZnJvbSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpbWlzdGljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxsZXIgaGFzIHN1Y2Nlc3NmdWxseSBwZXJmb3JtZWQgdGhlIG11dGF0aW9ucyBhbmQgZ290IHN1Y2Nlc3MgYmFjayBmcm9tIHNlcnZlci5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0J3Mgb2sgdG8gcmVmZXRjaCB0aGUgZGVsdGFzIGZyb20gc2VydmVyIG5vdzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlRW50cnkuZmV0Y2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFmdGVyIGZldGNoIGNvbXBsZXRlcywgaXQgd2lsbCBub3RpZnkgdGhlIHN1YnNjcmliZXJzLlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gY2FjaGVFbnRyeS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZUVudHJ5Lm9wdGltaXN0aWNWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGltaXN0aWMpXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZUVudHJ5LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlRW50cnkubm90aWZ5KG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERlbHRhQ2FjaGUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChxdWVyeSwgb2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNhY2hlRW50cnkgPSB0aGlzLmxvb2t1cFtxdWVyeS5icmFuY2hJZCArIHF1ZXJ5LnRhZ3NdO1xuICAgICAgICBpZiAoIWNhY2hlRW50cnkpIHtcbiAgICAgICAgICAgIGNhY2hlRW50cnkgPSBuZXcgRGVsdGFDYWNoZUVudHJ5KHRoaXMuZ2V0Q2xpZW50KCksIHF1ZXJ5KTtcbiAgICAgICAgICAgIHRoaXMubG9va3VwW3F1ZXJ5LmJyYW5jaElkICsgcXVlcnkudGFnc10gPSBjYWNoZUVudHJ5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWNoZUVudHJ5LmNsZWFudXBUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNhY2hlRW50cnkuY2xlYW51cFRpbWVyKTtcbiAgICAgICAgICAgIGNhY2hlRW50cnkuY2xlYW51cFRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYWNoZUVudHJ5LnN1YnNjcmliZXJzID0gY2FjaGVFbnRyeS5zdWJzY3JpYmVycy5maWx0ZXIoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gX2Eub2JzZXJ2ZXI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvICE9PSBvYnNlcnZlcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVFbnRyeS5zdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVFbnRyeS5jbGVhbnVwVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZUVudHJ5LnN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5sb29rdXBbcXVlcnkuYnJhbmNoSWQgKyBxdWVyeS50YWdzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNhY2hlRW50cnkuc3Vic2NyaWJlcnMucHVzaCh7IG9ic2VydmVyOiBvYnNlcnZlciwgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb24gfSk7XG4gICAgICAgIGlmIChjYWNoZUVudHJ5LnZhbHVlKSB7XG4gICAgICAgICAgICAvLyBWYWx1ZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgcmV0cmlldmVkIGFscmVhZHkuIFBpY2sgZnJvbSBjYWNoZS5cbiAgICAgICAgICAgIG9ic2VydmVyKGNhY2hlRW50cnkub3B0aW1pc3RpY1ZhbHVlIHx8IGNhY2hlRW50cnkudmFsdWUsIG51bGwsIHN1YnNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2FjaGVFbnRyeS5pc0ZldGNoaW5nKSB7XG4gICAgICAgICAgICAvLyBBIHZhbHVlIGlzIG9uIGl0cyB3YXkuIFNpdCBiYWNrIGFuZCByZWxheC4gQWxsIHJlZ2lzdGVyZWRcbiAgICAgICAgICAgIC8vIG9ic2VydmVycyAoaW5jbHVkaW5nIHRoaXMgb25lKSB3aWxsIGJlIG5vdGlmaWVkIHdoZW4gZGF0YSBhcnJpdmVzXG4gICAgICAgICAgICAvLyBvciBmYWlscy5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjYWNoZUVudHJ5LmVycm9yKSB7XG4gICAgICAgICAgICBvYnNlcnZlcihudWxsLCBjYWNoZUVudHJ5LmVycm9yLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVFbnRyeS5mZXRjaCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICByZXR1cm4gRGVsdGFDYWNoZTtcbn0oKSk7XG5leHBvcnQgeyBEZWx0YUNhY2hlIH07XG52YXIgRGVsdGFDYWNoZUVudHJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlbHRhQ2FjaGVFbnRyeShjbGllbnQsIHF1ZXJ5KSB7XG4gICAgICAgIHRoaXMuZmV0Y2hPcGVyYXRpb25JZCA9IDA7IC8vIE1ha2VzIHN1cmUgYSByZS1mZXRjaCB3aWxsIGRpc2NhcmQgdGhlIHJlc3VsdCBmcm9tIGFueSBvbmdvaW5nIGZldGNoLlxuICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgIHRoaXMub3B0aW1pc3RpY1ZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycyA9IFtdO1xuICAgICAgICB0aGlzLmlzRmV0Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jbGVhbnVwVGltZXIgPSBudWxsO1xuICAgIH1cbiAgICBEZWx0YUNhY2hlRW50cnkucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZmV0Y2hPcGVyYXRpb25JZCA9ICsrdGhpcy5mZXRjaE9wZXJhdGlvbklkO1xuICAgICAgICB0aGlzLmlzRmV0Y2hpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmZldGNoRnJvbVNlcnZlcigpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBTdWNjZXNzXG4gICAgICAgICAgICBpZiAoZmV0Y2hPcGVyYXRpb25JZCA9PT0gX3RoaXMuZmV0Y2hPcGVyYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmlzRmV0Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBiLmRhdGVUaW1lIC0gYS5kYXRlVGltZTsgfSk7IC8vIExhdGVzdCBmaXJzdFxuICAgICAgICAgICAgICAgIF90aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgX3RoaXMub3B0aW1pc3RpY1ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgX3RoaXMubm90aWZ5KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBGYWlsXG4gICAgICAgICAgICBpZiAoZmV0Y2hPcGVyYXRpb25JZCA9PT0gX3RoaXMuZmV0Y2hPcGVyYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmlzRmV0Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgIF90aGlzLmZhaWwoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERlbHRhQ2FjaGVFbnRyeS5wcm90b3R5cGUuZmV0Y2hGcm9tU2VydmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXMsIF9hLCBfYjtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnF1ZXJ5LmJyYW5jaElkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGVsdGFzIG9ubHkgYXZhaWxhYmxlIG9uIGJyYW5jaGVzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNsaWVudC5odHRwLmdldCgnZGVsdGFzJywgdGhpcy5xdWVyeSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShyZXMuc3RhdHVzID49IDMwMCB8fCByZXMuc3RhdHVzIDwgMjAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IEh0dHBFcnJvci5iaW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSBbdm9pZCAwLCByZXMuc3RhdHVzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy50ZXh0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHRocm93IG5ldyAoX2EuYXBwbHkoSHR0cEVycm9yLCBfYi5jb25jYXQoW19jLnNlbnQoKV0pKSkoKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzQgLyp5aWVsZCovLCByZXMuanNvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Muc2VudCgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEZWx0YUNhY2hlRW50cnkucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5zdWJzY3JpYmVyczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwgb2JzZXJ2ZXIgPSBfYi5vYnNlcnZlciwgc3Vic2NyaXB0aW9uID0gX2Iuc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgb2JzZXJ2ZXIodmFsdWUsIG51bGwsIHN1YnNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERlbHRhQ2FjaGVFbnRyeS5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB2YXIgY29weSA9IHRoaXMuc3Vic2NyaWJlcnMuc2xpY2UoKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNvcHlfMSA9IGNvcHk7IF9pIDwgY29weV8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIF9hID0gY29weV8xW19pXSwgb2JzZXJ2ZXIgPSBfYS5vYnNlcnZlciwgc3Vic2NyaXB0aW9uID0gX2Euc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgb2JzZXJ2ZXIobnVsbCwgZXJyb3IsIHN1YnNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBEZWx0YUNhY2hlRW50cnk7XG59KCkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVsdGEtY2FjaGUuanMubWFwIiwiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9vYnNlcnZhYmxlJztcbnZhciBEZWx0YUNvbGxlY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoRGVsdGFDb2xsZWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERlbHRhQ29sbGVjdGlvbihkZWx0YUNhY2hlLCBxdWVyeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBmdW5jdGlvbiAob2JzZXJ2ZXIpIHsgcmV0dXJuIF90aGlzLmRlbHRhQ2FjaGUuc3Vic2NyaWJlKHF1ZXJ5LCBvYnNlcnZlcik7IH0pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRlbHRhQ2FjaGUgPSBkZWx0YUNhY2hlO1xuICAgICAgICBfdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIERlbHRhQ29sbGVjdGlvbi5wcm90b3R5cGUudGFncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRhZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHRhZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IERlbHRhQ29sbGVjdGlvbih0aGlzLmRlbHRhQ2FjaGUsIHRzbGliXzEuX19hc3NpZ24oe30sIHRoaXMucXVlcnksIHsgdGFnczogdGFncyB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gRGVsdGFDb2xsZWN0aW9uO1xufShDb2xsZWN0aW9uKSk7XG5leHBvcnQgeyBEZWx0YUNvbGxlY3Rpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbHRhLWNvbGxlY3Rpb24uanMubWFwIiwiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmV4cG9ydCBmdW5jdGlvbiBhcHBseURlbHRhKGRvYywgZGVsdGEpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRlbHRhKTtcbiAgICB2YXIgdGFyZ2V0RG9jID0gZG9jO1xuICAgIGZvciAodmFyIF9pID0gMCwga2V5c18xID0ga2V5czsgX2kgPCBrZXlzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzXzFbX2ldO1xuICAgICAgICBpZiAodGFyZ2V0RG9jID09PSBkb2MpXG4gICAgICAgICAgICB0YXJnZXREb2MgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBkb2MpO1xuICAgICAgICB2YXIgdmFsID0gZGVsdGFba2V5XTtcbiAgICAgICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdmFyIG1ldGFJbnN0cnVjdGlvbnMgPSBPYmplY3Qua2V5cyh2YWwpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkuc3RhcnRzV2l0aCgnJCcpOyB9KTtcbiAgICAgICAgICAgIGlmIChtZXRhSW5zdHJ1Y3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChtaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWlWYWx1ZSA9IHZhbFttaV07XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIkdW5zZXRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgb24gdGFyZ2V0IGRvYyFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXREb2MuJHdhc1Vuc2V0ID0gdHJ1ZTsgLy8gSnVzdCBtYXJrIGl0IGZvciByZS1yZXRyaWV2YWwgYWZ0ZXIgc3VjY2Vzc2Z1bCBwb3N0aW5nIGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiJGFkZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlc1RvQWRkID0gbWlWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzVG9BZGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIiRhZGQgaW5zdHJ1Y3Rpb24gbXVzdCBjb250YWluIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0QXJyYXkgPSB0YXJnZXREb2Nba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGFyZ2V0QXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRBcnJheSA9IHRhcmdldEFycmF5LnNsaWNlKCk7IC8vIE9uIEpTIHNpZGUsIHdlIG11c3QgYmUgaW1tdXRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldERvY1trZXldID0gdGFyZ2V0QXJyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB2YWx1ZXNUb0FkZF8xID0gdmFsdWVzVG9BZGQ7IF9pIDwgdmFsdWVzVG9BZGRfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSB2YWx1ZXNUb0FkZF8xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRBcnJheS5pbmNsdWRlcyh2KSkgeyAvLyBhdm9pZCBkdXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIiRyZW1vdmVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZXNUb1JlbW92ZV8xID0gbWlWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzVG9SZW1vdmVfMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJHJlbW92ZSBpbnN0cnVjdGlvbiBtdXN0IGNvbnRhaW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRBcnJheSA9IHRhcmdldERvY1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0YXJnZXRBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RG9jW2tleV0gPSB0YXJnZXRBcnJheS5maWx0ZXIoZnVuY3Rpb24gKHQpIHsgcmV0dXJuICF2YWx1ZXNUb1JlbW92ZV8xLmluY2x1ZGVzKHQpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBtZXRhSW5zdHJ1Y3Rpb25zXzEgPSBtZXRhSW5zdHJ1Y3Rpb25zOyBfYSA8IG1ldGFJbnN0cnVjdGlvbnNfMS5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pID0gbWV0YUluc3RydWN0aW9uc18xW19hXTtcbiAgICAgICAgICAgICAgICAgICAgX2xvb3BfMShtaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRhcmdldERvY1trZXldID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0RG9jO1xufVxuLy8ge25hbWU6IFwiVWxsYVwifSwge25hbWU6IHskdW5zZXQ6MH1cbi8vIHt0YWdzOiB7JGFkZDogXCJoZWpcIn19LCB7dGFnczogeyR1bnNldDowfVwifVxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVsdGFzKGRlbHRhMSwgZGVsdGEyLCBfYSkge1xuICAgIHZhciByZW1vdmVVbnNldFByb3BzID0gKF9hID09PSB2b2lkIDAgPyB7IHJlbW92ZVVuc2V0UHJvcHM6IGZhbHNlIH0gOiBfYSkucmVtb3ZlVW5zZXRQcm9wcztcbiAgICAvL3JldHVybiB7Li4uZGVsdGExLCAuLi5kZWx0YTJ9O1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGVsdGEyKTtcbiAgICB2YXIgdGFyZ2V0RGVsdGEgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBkZWx0YTEpO1xuICAgIGZvciAodmFyIF9pID0gMCwga2V5c18yID0ga2V5czsgX2kgPCBrZXlzXzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzXzJbX2ldO1xuICAgICAgICB2YXIgdmFsID0gZGVsdGEyW2tleV07XG4gICAgICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhciBtZXRhSW5zdHJ1Y3Rpb25zID0gT2JqZWN0LmtleXModmFsKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5LnN0YXJ0c1dpdGgoJyQnKTsgfSk7XG4gICAgICAgICAgICBpZiAobWV0YUluc3RydWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9sb29wXzIgPSBmdW5jdGlvbiAobWkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pVmFsdWUgPSB2YWxbbWldO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiJHVuc2V0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3ZlVW5zZXRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0RGVsdGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIG1hdHRlciBpZiB0YXJnZXREZWx0YSBpcyBlbXB0eSBvciBoYXMgdmFsdWUuIFNldCBpdCB0byB7JHVuc2V0OjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIG1ha2Ugc3VyZSB0aGUgdmVyeSBlbmQgcmVzdWx0IHdpbGwgaGF2ZSB7JHVuc2V0OjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldERlbHRhW2tleV0gPSB7ICR1bnNldDogMCB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIkYWRkXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVzVG9BZGRfMiA9IG1pVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlc1RvQWRkXzIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIiRhZGQgaW5zdHJ1Y3Rpb24gbXVzdCBjb250YWluIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0TWV0YVByb3AgPSB0YXJnZXREZWx0YVtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE1ldGFQcm9wID0gdGFyZ2V0TWV0YVByb3AgPyB0c2xpYl8xLl9fYXNzaWduKHt9LCB0YXJnZXRNZXRhUHJvcCkgOiB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXREZWx0YVtrZXldID0gdGFyZ2V0TWV0YVByb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyc3QsIGp1c3QgY2hlY2sgaWYgdGFyZ2V0IG1ldGFQcm9wIGhhcyB7JHJlbW92ZTogWy4uLml0ZW1zXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBzbywgcmVtb3ZlIGFueSBlcXVhbCBpdGVtcyBmcm9tIHRoZXJlIGJlZm9yZSBtZXJnaW5nIHRoZSB7JGFkZDogWy4uLl19IGFycmF5cy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0UmVtb3ZlQXJyYXkgPSB0YXJnZXRNZXRhUHJvcC4kcmVtb3ZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldFJlbW92ZUFycmF5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRNZXRhUHJvcC4kcmVtb3ZlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFJlbW92ZUFycmF5LmZpbHRlcihmdW5jdGlvbiAodCkgeyByZXR1cm4gIXZhbHVlc1RvQWRkXzIuaW5jbHVkZXModCk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0TWV0YVByb3AuJHJlbW92ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmICRyZW1vdmUgYXJyYXkgYmVjYW1lIGVtdHB5LiBSZW1vdmUgdGhlICRyZW1vdmUgcHJvcC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXJnZXRNZXRhUHJvcC4kcmVtb3ZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdyBpdCdzIHRpbWUgdG8gbWVyZ2Ugb3IgY3JlYXRlIHRhcmdldCAkYWRkIGFycmF5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRBZGRBcnJheSA9IHRhcmdldE1ldGFQcm9wLiRhZGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QWRkQXJyYXkgPSB0YXJnZXRBZGRBcnJheSA/IHRhcmdldEFkZEFycmF5LmNvbmNhdCh2YWx1ZXNUb0FkZF8yKSA6IHZhbHVlc1RvQWRkXzIuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRNZXRhUHJvcC4kYWRkID0gdGFyZ2V0QWRkQXJyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiJHJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlc1RvUmVtb3ZlXzIgPSBtaVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXNUb1JlbW92ZV8yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIkcmVtb3ZlIGluc3RydWN0aW9uIG11c3QgY29udGFpbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldE1ldGFQcm9wID0gdGFyZ2V0RGVsdGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRNZXRhUHJvcCA9IHRhcmdldE1ldGFQcm9wID8gdHNsaWJfMS5fX2Fzc2lnbih7fSwgdGFyZ2V0TWV0YVByb3ApIDoge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RGVsdGFba2V5XSA9IHRhcmdldE1ldGFQcm9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcnN0LCBqdXN0IGNoZWNrIGlmIHRhcmdldCBtZXRhUHJvcCBoYXMgeyRhZGQ6IFsuLi5pdGVtc119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgc28sIHJlbW92ZSBhbnkgZXF1YWwgaXRlbXMgZnJvbSB0aGVyZSBiZWZvcmUgbWVyZ2luZyB0aGUgeyRyZW1vdmU6IFsuLi5dfSBhcnJheXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldEFkZEFycmF5ID0gdGFyZ2V0TWV0YVByb3AuJHJlbW92ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXRBZGRBcnJheSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TWV0YVByb3AuJGFkZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRBZGRBcnJheS5maWx0ZXIoZnVuY3Rpb24gKHQpIHsgcmV0dXJuICF2YWx1ZXNUb1JlbW92ZV8yLmluY2x1ZGVzKHQpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldE1ldGFQcm9wLiRhZGQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiAkYWRkIGFycmF5IGJlY2FtZSBlbXRweS4gUmVtb3ZlIHRoZSAkYWRkIHByb3AuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0TWV0YVByb3AuJGFkZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3cgaXQncyB0aW1lIHRvIG1lcmdlIG9yIGNyZWF0ZSB0YXJnZXQgJHJlbW92ZSBhcnJheS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0UmVtb3ZlQXJyYXkgPSB0YXJnZXRNZXRhUHJvcC4kcmVtb3ZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFJlbW92ZUFycmF5ID0gdGFyZ2V0UmVtb3ZlQXJyYXkgPyB0YXJnZXRSZW1vdmVBcnJheS5jb25jYXQodmFsdWVzVG9SZW1vdmVfMikgOiB2YWx1ZXNUb1JlbW92ZV8yLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TWV0YVByb3AuJHJlbW92ZSA9IHRhcmdldFJlbW92ZUFycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IDAsIG1ldGFJbnN0cnVjdGlvbnNfMiA9IG1ldGFJbnN0cnVjdGlvbnM7IF9iIDwgbWV0YUluc3RydWN0aW9uc18yLmxlbmd0aDsgX2IrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWkgPSBtZXRhSW5zdHJ1Y3Rpb25zXzJbX2JdO1xuICAgICAgICAgICAgICAgICAgICBfbG9vcF8yKG1pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0RGVsdGFba2V5XSA9IHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldERlbHRhO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVsdGEtbWVyZ2UuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9rZWRiYWNrZW5kLWNvbGxlY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9rZWRiYWNrZW5kLXF1ZXJ5JztcbmV4cG9ydCAqIGZyb20gJy4va2VkYmFja2VuZC1yZXBvJztcbmV4cG9ydCAqIGZyb20gJy4va2VkYmFja2VuZC1zdWJzY3JpcHRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9rZWRiYWNrZW5kLXdyaXRlcic7XG5leHBvcnQgKiBmcm9tICcuL211dGF0aW9uLXF1ZXVlJztcbmV4cG9ydCAqIGZyb20gJy4vcXVlcnktc2V0JztcbmV4cG9ydCAqIGZyb20gJy4uL29ic2VydmFibGUvbWl4aW4nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEJhdGNoUnVubmVyIH0gZnJvbSAnLi4va2VkLWJhY2tlbmQtY2xpZW50JztcbmltcG9ydCB7IEtlZEJhY2tlbmRTdWJzY3JpcHRpb24gfSBmcm9tIFwiLi9rZWRiYWNrZW5kLXN1YnNjcmlwdGlvblwiO1xuaW1wb3J0IHsgQ2FjaGVCdXN0IH0gZnJvbSAnLi9jYWNoZS1idXN0JztcbmltcG9ydCB7IEtlZEJhY2tlbmRRdWVyeSB9IGZyb20gJy4va2VkYmFja2VuZC1xdWVyeSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9jb2xsZWN0aW9uJztcbi8qKlxuICogUmVwcmVzZW50cyBhIFwibGl2ZVwiIHF1ZXJ5IGFnYWluc3QgYSB0YWJsZSBvciBmaWx0ZXJlZCB0YWJsZS5cbiAqL1xudmFyIEtlZEJhY2tlbmRDb2xsZWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEtlZEJhY2tlbmRDb2xsZWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEtlZEJhY2tlbmRDb2xsZWN0aW9uKHJlcG8sIHRhYmxlLCBxdWVyeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBuZXcgS2VkQmFja2VuZFN1YnNjcmlwdGlvbihvYnNlcnZlciwgX3RoaXMpO1xuICAgICAgICAgICAgX3RoaXMucmVwby5xdWVyeVNldC5zdWJzY3JpYmUoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgIH0pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJlcG8gPSByZXBvO1xuICAgICAgICBfdGhpcy50YWJsZSA9IHRhYmxlO1xuICAgICAgICBfdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUsIFwicXVlcnlLZXlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBLZWRCYWNrZW5kUXVlcnkucXVlcnlLZXkodGhpcy50YWJsZSwgdGhpcy5xdWVyeSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUsIFwiaW5jbHVkZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbmNsdWRlcyB8fCAodGhpcy5faW5jbHVkZXMgPSBbXS5jb25jYXQodGhpcy5xdWVyeS5pbmNsdWRlIHx8IFtdKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5hcHBseVF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiBuZXcgS2VkQmFja2VuZENvbGxlY3Rpb24odGhpcy5yZXBvLCB0aGlzLnRhYmxlLCB0c2xpYl8xLl9fYXNzaWduKHt9LCB0aGlzLnF1ZXJ5LCBxdWVyeSkpO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLmFkZFRvUXVlcnlBcnJheVByb3AgPSBmdW5jdGlvbiAoYXJyYXlQcm9wLCBlbnRyaWVzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHlRdWVyeSgoX2EgPSB7fSwgX2FbYXJyYXlQcm9wXSA9ICh0aGlzLnF1ZXJ5W2FycmF5UHJvcF0gfHwgW10pLmNvbmNhdChlbnRyaWVzKSwgX2EpKTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5hZGRGbGFncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZsYWdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBmbGFnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFRvUXVlcnlBcnJheVByb3AoXCJmbGFnc1wiLCBmbGFncyk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5UXVlcnkoeyBkZWJ1ZzogdHJ1ZSB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5pZHNPbmx5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRGbGFncyhcImlkc09ubHlcIik7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUuaWRzQW5kTmFtZXNPbmx5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRGbGFncyhcImlkc0FuZE5hbWVzT25seVwiKTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5pbmNsdWRlSWRzT25seSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRmxhZ3MoXCJpbmNsdWRlSWRzT25seVwiKTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5pbmNsdWRlSWRzQW5kTmFtZXNPbmx5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRGbGFncyhcImluY2x1ZGVJZHNBbmROYW1lc09ubHlcIik7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUuYmV0d2VlbiA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBseVF1ZXJ5KHsgZnJvbTogZnJvbSwgdG86IHRvIH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLnJvbGUgPSBmdW5jdGlvbiAocm9sZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBseVF1ZXJ5KHsgcm9sZTogcm9sZSB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5oYXNFZGdlc0Zyb20gPSBmdW5jdGlvbiAoaWRzKSB7XG4gICAgICAgIGlmIChpZHMubGVuZ3RoID09PSAwIHx8IGlkcy5zb21lKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gIWlkOyB9KSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaWQgbGlzdCBnaXZlbiB0byBDb2xsZWN0aW9uLmhhc0VkZ2VzRnJvbShcIiArIEpTT04uc3RyaW5naWZ5KGlkcykgKyBcIilcIik7XG4gICAgICAgIHZhciBoZWYgPSB0aGlzLmFkZFRvUXVlcnlBcnJheVByb3AoXCJoYXNFZGdlc0Zyb21cIiwgaWRzKTtcbiAgICAgICAgcmV0dXJuIGhlZjtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5oYXNFZGdlc1RvID0gZnVuY3Rpb24gKGlkcykge1xuICAgICAgICBpZiAoaWRzLmxlbmd0aCA9PT0gMCB8fCBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHsgcmV0dXJuICFpZDsgfSkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlkIGxpc3QgZ2l2ZW4gdG8gQ29sbGVjdGlvbi5oYXNFZGdlc1RvKFwiICsgSlNPTi5zdHJpbmdpZnkoaWRzKSArIFwiKVwiKTtcbiAgICAgICAgdmFyIGhldCA9IHRoaXMuYWRkVG9RdWVyeUFycmF5UHJvcChcImhhc0VkZ2VzVG9cIiwgaWRzKTtcbiAgICAgICAgcmV0dXJuIGhldDtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5pZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBseVF1ZXJ5KHsgaWRzOiBbaWRdIH0pLnNpbmdsZSh7XG4gICAgICAgICAgICBvblplcm86IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgZW50aXR5IGluIFwiICsgX3RoaXMudGFibGUgKyBcIiB3aXRoIGlkIFwiICsgaWQpOyB9LFxuICAgICAgICAgICAgb25NYW55OiBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBFcnJvcihcIk11bHRpcGxlIGVudHJpZXMgaW4gXCIgKyBfdGhpcy50YWJsZSArIFwiIHdpdGggaWQgXCIgKyBpZCk7IH0sXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLmlkcyA9IGZ1bmN0aW9uIChpZHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHlRdWVyeSh7IGlkczogaWRzIH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLm5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBseVF1ZXJ5KHsgbmFtZTogbmFtZSB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS50YWdzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGFncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdGFnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5UXVlcnkoeyB0YWdzOiB0YWdzIH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLmJyYW5jaElkID0gZnVuY3Rpb24gKGJyYW5jaElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5UXVlcnkoeyBicmFuY2hJZDogYnJhbmNoSWQgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUuaW5jbHVkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdyYXBocyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgZ3JhcGhzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkVG9RdWVyeUFycmF5UHJvcChcImluY2x1ZGVcIiwgZ3JhcGhzKTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5jYWNoZU9wdGltaXplZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHlRdWVyeSh7IGNhY2hlQnVzdDogQ2FjaGVCdXN0LmdldENhY2hlQnVzdCh0aGlzLnRhYmxlLCB0aGlzLnF1ZXJ5LCB0aGlzLnJlcG8uZ2V0VXNlcigpLCB0aGlzLmluY2x1ZGVzKSB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS5tdXRhdGlvbnNPbkVtcHR5ID0gZnVuY3Rpb24gKG11dGF0aW9uRmFjdG9yeSkge1xuICAgICAgICB2YXIgdHggPSBuZXcgQmF0Y2hSdW5uZXIoKTtcbiAgICAgICAgbXV0YXRpb25GYWN0b3J5KHR4KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwbHlRdWVyeSh7IG11dGF0aW9uc09uRW1wdHk6IHR4Lm11dGF0aW9uUmVxdWVzdHMgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUuc2luZ2xlID0gZnVuY3Rpb24gKHRocm93ZXJzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IHRocm93ZXJzIHx8IHt9LCBvblplcm8gPSBfYS5vblplcm8sIG9uTWFueSA9IF9hLm9uTWFueTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9WYWx1ZSgpLm1hcChmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAob25aZXJvKVxuICAgICAgICAgICAgICAgICAgICBvblplcm8oKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNpbmdsZSBpdGVtIG9mIFwiICsgX3RoaXMudGFibGUgKyBcIiBleHBlY3RlZCB0byBiZSByZXR1cm5lZCBieSBxdWVyeSBcIiArIEpTT04uc3RyaW5naWZ5KF90aGlzLnF1ZXJ5KSArIFwiIGJ1dCBub25lIHdhcyBmb3VuZC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGlmIChvbk1hbnkpXG4gICAgICAgICAgICAgICAgICAgIG9uTWFueSgpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaW5nbGUgaXRlbSBvZiBcIiArIF90aGlzLnRhYmxlICsgXCIgZXhwZWN0ZWQgdG8gYmUgcmV0dXJuZWQgYnkgcXVlcnkgXCIgKyBKU09OLnN0cmluZ2lmeShfdGhpcy5xdWVyeSkgKyBcIiBidXQgXCIgKyBpdGVtcy5sZW5ndGggKyBcIiB3YXMgZm91bmQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zWzBdO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qY29tYmluZUxhdGVzdDxUT3RoZXI+KG90aGVyOiBRdWVyeU9ic2VydmFibGU8VE90aGVyPikge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHggPT4geCkuY29tYmluZUxhdGVzdChvdGhlcik7XG4gICAgfSovXG4gICAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkb2MsIGNoYW5nZXMsIGRlYm91bmNlKSB7XG4gICAgICAgIGlmIChkZWJvdW5jZSA9PT0gdm9pZCAwKSB7IGRlYm91bmNlID0gMTAwMDsgfVxuICAgICAgICB0aGlzLnJlcG8ud3JpdGVyLm11dGF0ZShbe1xuICAgICAgICAgICAgICAgIG9wOiAndXBkYXRlJyxcbiAgICAgICAgICAgICAgICB0YWJsZTogdGhpcy50YWJsZSxcbiAgICAgICAgICAgICAgICBicmFuY2hJZDogdGhpcy5xdWVyeS5icmFuY2hJZCxcbiAgICAgICAgICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgICAgICAgIGRlbHRhRG9jOiBjaGFuZ2VzLFxuICAgICAgICAgICAgICAgIHRhcmdldE5hbWU6IGRvYy5uYW1lXG4gICAgICAgICAgICB9XSwgZGVib3VuY2UpO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLmFkZFJlbGF0ZWQgPSBmdW5jdGlvbiAoaWQsIGxhYmVsLCByZWxhdGVkRG9jKSB7XG4gICAgICAgIHRoaXMucmVwby53cml0ZXIubXV0YXRlKFt7XG4gICAgICAgICAgICAgICAgb3A6ICdhZGQtcmVsYXRlZCcsXG4gICAgICAgICAgICAgICAgdGFibGU6IHRoaXMudGFibGUsXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IHRoaXMucXVlcnkuYnJhbmNoSWQsXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGdyYXBoUHJvcDogbGFiZWwsXG4gICAgICAgICAgICAgICAgcmVsYXRlZERvYzogcmVsYXRlZERvY1xuICAgICAgICAgICAgfV0sIDApO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgdGhpcy5yZXBvLndyaXRlci5tdXRhdGUoW3tcbiAgICAgICAgICAgICAgICBvcDogJ2FkZCcsXG4gICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcbiAgICAgICAgICAgICAgICB0YWJsZTogdGhpcy50YWJsZSxcbiAgICAgICAgICAgICAgICBkb2M6IGRvY1xuICAgICAgICAgICAgfV0sIDApO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLnJlbW92ZVJlbGF0ZWQgPSBmdW5jdGlvbiAoaWQsIGxhYmVsLCByZWxhdGVkRG9jKSB7XG4gICAgICAgIHRoaXMucmVwby53cml0ZXIubXV0YXRlKFt7XG4gICAgICAgICAgICAgICAgb3A6ICdyZW1vdmUtcmVsYXRlZCcsXG4gICAgICAgICAgICAgICAgdGFibGU6IHRoaXMudGFibGUsXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IHRoaXMucXVlcnkuYnJhbmNoSWQsXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGdyYXBoUHJvcDogbGFiZWwsXG4gICAgICAgICAgICAgICAgcmVsYXRlZERvYzogcmVsYXRlZERvY1xuICAgICAgICAgICAgfV0sIDApO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLnVuZG9MaW5rID0gZnVuY3Rpb24gKGlkLCBsYWJlbCwgcmVsYXRlZElkKSB7XG4gICAgICAgIGlmICghdGhpcy5xdWVyeS5icmFuY2hJZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuZG8gbGlua3MgY2FuIG9ubHkgYmUgcGVyZm9ybWVkIG9uIGJyYW5jaGVzXCIpO1xuICAgICAgICB0aGlzLnJlcG8ud3JpdGVyLm11dGF0ZShbe1xuICAgICAgICAgICAgICAgIG9wOiAndW5kby1saW5rJyxcbiAgICAgICAgICAgICAgICB0YWJsZTogdGhpcy50YWJsZSxcbiAgICAgICAgICAgICAgICBicmFuY2hJZDogdGhpcy5xdWVyeS5icmFuY2hJZCxcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgZ3JhcGhQcm9wOiBsYWJlbCxcbiAgICAgICAgICAgICAgICByZWxhdGVkSWQ6IHJlbGF0ZWRJZFxuICAgICAgICAgICAgfV0sIDApO1xuICAgIH07XG4gICAgS2VkQmFja2VuZENvbGxlY3Rpb24ucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGlkcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaWRzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXBvLndyaXRlci5tdXRhdGUoaWRzLm1hcChmdW5jdGlvbiAoaWQpIHsgcmV0dXJuICh7XG4gICAgICAgICAgICBvcDogJ2RlbGV0ZScsXG4gICAgICAgICAgICB0YWJsZTogX3RoaXMudGFibGUsXG4gICAgICAgICAgICBpZDogaWRcbiAgICAgICAgfSk7IH0pLCAwKTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRDb2xsZWN0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5yZXBvLnF1ZXJ5U2V0LnVuc3Vic2NyaWJlKHN1YnNjcmlwdGlvbik7XG4gICAgfTtcbiAgICByZXR1cm4gS2VkQmFja2VuZENvbGxlY3Rpb247XG59KENvbGxlY3Rpb24pKTtcbmV4cG9ydCB7IEtlZEJhY2tlbmRDb2xsZWN0aW9uIH07XG4vKm1peGluKFxuICBLZWRCYWNrZW5kQ29sbGVjdGlvbi5wcm90b3R5cGUsXG4gIE1hcHBlZENvbGxlY3Rpb24ucHJvdG90eXBlLFxuICBcIm1hcFwiLCBcImZsYXRcIiwgXCJjb25jYXRcIiwgXCJyZW5kZXJcIiwgXCJsb2FkXCIpOyovXG4vLyMgc291cmNlTWFwcGluZ1VSTD1rZWRiYWNrZW5kLWNvbGxlY3Rpb24uanMubWFwIiwiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHVwZGF0ZUFycmF5IH0gZnJvbSAnLi4va2VkLWJhY2tlbmQtY2xpZW50L3V0aWxzJztcbmltcG9ydCB7IGJyYW5jaFNlbnNpdGl2ZSwgZ2V0VGFibGVGcm9tTGFiZWwgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGFwcGx5RGVsdGEgfSBmcm9tICcuL2RlbHRhLW1lcmdlJztcbnZhciBLZWRCYWNrZW5kUXVlcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gS2VkQmFja2VuZFF1ZXJ5KHRhYmxlLCBxdWVyeSwgdXNlciwgcmVwbywgbXV0YXRpb25RdWV1ZSkge1xuICAgICAgICB0aGlzLnRhYmxlID0gdGFibGU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgdGhpcy5yZXBvID0gcmVwbztcbiAgICAgICAgdGhpcy5tdXRhdGlvblF1ZXVlID0gbXV0YXRpb25RdWV1ZTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICB0aGlzLmdvdEluaXRpYWxSZXNwb25zZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmludmFsaWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkZWRWZXJzaW9uID0gMDtcbiAgICAgICAgdGhpcy5fbG9hZFByb21pc2UgPSBudWxsO1xuICAgICAgICB0aGlzLmluY2x1ZGVzID0gcXVlcnkuaW5jbHVkZSA/XG4gICAgICAgICAgICB0eXBlb2YgcXVlcnkuaW5jbHVkZSA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgICAgICAgIFtxdWVyeS5pbmNsdWRlXSA6XG4gICAgICAgICAgICAgICAgcXVlcnkuaW5jbHVkZSA6XG4gICAgICAgICAgICBbXTtcbiAgICB9XG4gICAgS2VkQmFja2VuZFF1ZXJ5LnF1ZXJ5S2V5ID0gZnVuY3Rpb24gKHRhYmxlLCBxdWVyeSkge1xuICAgICAgICB2YXIgbXV0YXRpb25zT25FbXB0eSA9IHF1ZXJ5Lm11dGF0aW9uc09uRW1wdHksIGNvbXBhcmFibGVQcm9wcyA9IHRzbGliXzEuX19yZXN0KHF1ZXJ5LCBbXCJtdXRhdGlvbnNPbkVtcHR5XCJdKTtcbiAgICAgICAgcmV0dXJuIHRhYmxlICsgSlNPTi5zdHJpbmdpZnkoY29tcGFyYWJsZVByb3BzKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShLZWRCYWNrZW5kUXVlcnkucHJvdG90eXBlLCBcInF1ZXJ5S2V5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gS2VkQmFja2VuZFF1ZXJ5LnF1ZXJ5S2V5KHRoaXMudGFibGUsIHRoaXMucXVlcnkpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBLZWRCYWNrZW5kUXVlcnkucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSwgZGF0YTtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMuZ290SW5pdGlhbFJlc3BvbnNlICYmICF0aGlzLmludmFsaWQpKSByZXR1cm4gWzMgLypicmVhayovLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdldERhdGFXaXRoTXV0YXRpb25zQXBwbGllZCh0aGlzLm11dGF0aW9uUXVldWUuZ2V0KCksIHRydWUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24ubm90aWZ5U3Vic2NyaWJlcihkYXRhLCB0aGlzLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5xdWVyeUxvY2FsbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24ubm90aWZ5U3Vic2NyaWJlcihkYXRhLCB0aGlzLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMubG9hZCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kUXVlcnkucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAodmVyc2lvbikge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsb2FkUHJvbWlzZTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdvdEluaXRpYWxSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG11dGF0aW9uc09uRW1wdHkgc2hvdWxkIG5ldmVyIGJlIHVzZWQgdHdpY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucXVlcnkubXV0YXRpb25zT25FbXB0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKCF2ZXJzaW9uICYmIHRoaXMuX2xvYWRQcm9taXNlKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLl9sb2FkUHJvbWlzZV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvYWRpbmcgaXMgb25nb2luZywgYW5kIGNhbGxlciBkb2VzIG5vdCByZXF1aXJlIGEgcmVjZW50IHJlZnJlc2guXG4gICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIHRoZSBvbmdvaW5nIGxvYWQgdG8gY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSB2ZXJzaW9uIHx8IHRoaXMucmVwby53cml0ZXIucGVyc2lzdGVkVmVyc2lvbi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRQcm9taXNlID0gdGhpcy5fbG9hZFByb21pc2UgPSB0aGlzLl9sb2FkKHZlcnNpb24pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX2xvYWRQcm9taXNlID09PSBsb2FkUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9hZGVkVmVyc2lvbiA9IE1hdGgubWF4KF90aGlzLmxvYWRlZFZlcnNpb24sIHZlcnNpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fbG9hZFByb21pc2UgPT09IGxvYWRQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vb25lIGhhcyByZWZyZXNoZWQgb3VyIGxvYWQuIFRoZSBlcnJvciBpcyB0aGUgZmluYWwgcmVzdWx0LiBTZXQgaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLl9sb2FkUHJvbWlzZSA9PT0gbG9hZFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm9vbmUgaGFzIHJlZnJlc2hlZCBvdXIgbG9hZC4gV2UncmUgZmluaXNoZWQuIERhdGEgb3IgZXJyb3IgaXMgYWxyZWFkeSBzZXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hcmsgZ290SW5pdGlhbFJlc3BvbnNlIHRvIHRydWUgYW5kIG5vdGlmeSBzdWJzY3JpYmVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2xvYWRQcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ290SW5pdGlhbFJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubm90aWZ5U3Vic2NyaWJlcnMoX3RoaXMubXV0YXRpb25RdWV1ZS5nZXQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBIG1vcmUgcmVjZW50IGNhbGwgdG8gbG9hZCgpIGlzIG9uZ29pbmcsIE9SIHdhcyBvbmdvaW5nIGJ1dCByZXNwb25kZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmVmb3JlIHVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbiBhbnkgY2FzZSByZXR1cm4gdGhpcy5fbG9hZFByb21pc2UuIElmIGl0J3Mgb25nb2luZyB3ZSdsbCB3YWl0IGZvciBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBmaW5pc2guIElmIGl0J3MgbnVsbCwgd2UnbGwgYmUgcmV0dXJuaW5nIGZpbmFsbHkgaGVyZSB3aXRob3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFueSBhY3Rpb24sIGJlY2F1c2UgdGhlIGFjdGlvbiB3YXMgdGFrZW4gYnkgdGhlIHJlZnJlc2hlci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9sb2FkUHJvbWlzZTsgLy8gV2FpdCBmb3IgdGhlIHJlZnJlc2hlZCBsb2FkIHRvIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBsb2FkUHJvbWlzZV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kUXVlcnkucHJvdG90eXBlLl9sb2FkID0gZnVuY3Rpb24gKHZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5tdXRhdGlvblF1ZXVlLmFmZmVjdHNRdWVyeSh0aGlzLnRhYmxlLCB0aGlzLnF1ZXJ5LCB0aGlzLmluY2x1ZGVzKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGVyZSBhcmUgb3V0Z29pbmcgbXV0YXRpb25zIHRoYXQgYWZmZWN0cyB0aGlzIHF1ZXJ5LlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmVlZCB0byB3YWl0IHRpbGwgdGhleSByZWFjaCBzZXJ2ZXIgYW5kIHNlcnZlciByZXNwb25kcyB3aXRoIE9LIGJlZm9yZSBxdWVyeWluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHNlcnZlci4gT3RoZXJ3aXNlLCB3ZSBtYXkgZ2V0IGluYWNjdXJhdGUgZGF0YSBmcm9tIHNlcnZlci5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucmVwby53cml0ZXIud2FpdEZvclZlcnNpb25Ub1BlcnNpc3QodmVyc2lvbildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGVyZSBhcmUgb3V0Z29pbmcgbXV0YXRpb25zIHRoYXQgYWZmZWN0cyB0aGlzIHF1ZXJ5LlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmVlZCB0byB3YWl0IHRpbGwgdGhleSByZWFjaCBzZXJ2ZXIgYW5kIHNlcnZlciByZXNwb25kcyB3aXRoIE9LIGJlZm9yZSBxdWVyeWluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHNlcnZlci4gT3RoZXJ3aXNlLCB3ZSBtYXkgZ2V0IGluYWNjdXJhdGUgZGF0YSBmcm9tIHNlcnZlci5cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnF1ZXJ5U2VydmVyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRRdWVyeS5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IHRoaXMuc3Vic2NyaXB0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgIT09IHN1YnNjcmlwdGlvbjsgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kUXVlcnkucHJvdG90eXBlLmNvbW1pdE11dGF0aW9ucyA9IGZ1bmN0aW9uIChtdXRhdGlvbnMsIHZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2ksIG11dGF0aW9uc18xLCBtLCBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGF0YSkgcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XG4gICAgICAgICAgICAgICAgICAgICAgICBfaSA9IDAsIG11dGF0aW9uc18xID0gbXV0YXRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfaSA8IG11dGF0aW9uc18xLmxlbmd0aCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbSA9IG11dGF0aW9uc18xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG0ub3AgPT09ICdjbGVhci1icmFuY2gnICYmIChtLmJyYW5jaElkID09PSB0aGlzLnF1ZXJ5LmJyYW5jaElkKSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZWZyZXNoT3JJbnZhbGlkYXRlKHZlcnNpb24pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShtLm9wID09PSAnbWVyZ2UnICYmICghbS50YXJnZXRCcmFuY2hJZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0uYnJhbmNoSWQgPT09IHRoaXMucXVlcnkuYnJhbmNoSWQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLnRhcmdldEJyYW5jaElkID09PSB0aGlzLnF1ZXJ5LmJyYW5jaElkKSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZWZyZXNoT3JJbnZhbGlkYXRlKHZlcnNpb24pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShtLm9wID09PSAndXBkYXRlJyAmJiAoKG0uZGVsdGFEb2MudGFncyAmJiB0aGlzLnF1ZXJ5LnRhZ3MpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG0uZGVsdGFEb2MubmFtZSAmJiB0aGlzLnF1ZXJ5Lm5hbWUpKSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQSB0YWcgbWF5IGhhdmUgYmVlbiBhZGRlZCwgb3IgcmVuYW1lZCwgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcXVlcnkgaXMgZGVwZW5kZW50IG9uIHRoZSBzYW1lIHByb3BlcnR5LlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHF1ZXJ5IG11c3QgYmUgcmVmcmVzaGVkIGZyb20gc2VydmVyIGFzIHdlIGNhbm5vdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29tbWl0IHRoZSBtdXRhdGlvbnMgbG9jYWxseSBhcyB3ZSBkb24ndCBoYXZlIGFsbCBpbmZvLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZWZyZXNoT3JJbnZhbGlkYXRlKHZlcnNpb24pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQSB0YWcgbWF5IGhhdmUgYmVlbiBhZGRlZCwgb3IgcmVuYW1lZCwgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcXVlcnkgaXMgZGVwZW5kZW50IG9uIHRoZSBzYW1lIHByb3BlcnR5LlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHF1ZXJ5IG11c3QgYmUgcmVmcmVzaGVkIGZyb20gc2VydmVyIGFzIHdlIGNhbm5vdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29tbWl0IHRoZSBtdXRhdGlvbnMgbG9jYWxseSBhcyB3ZSBkb24ndCBoYXZlIGFsbCBpbmZvLlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdldERhdGFXaXRoTXV0YXRpb25zQXBwbGllZChtdXRhdGlvbnMsIGZhbHNlLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gOTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFF1ZXJ5LnByb3RvdHlwZS5yZWZyZXNoT3JJbnZhbGlkYXRlID0gZnVuY3Rpb24gKHZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMuc3Vic2NyaXB0aW9ucy5sZW5ndGggPT09IDApKSByZXR1cm4gWzMgLypicmVhayovLCAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW52YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmxvYWQodmVyc2lvbildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRRdWVyeS5wcm90b3R5cGUubm90aWZ5U3Vic2NyaWJlcnMgPSBmdW5jdGlvbiAob3B0aW1pc3RpY011dGF0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZ290SW5pdGlhbFJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgZGF0YV8xID0gdGhpcy5nZXREYXRhV2l0aE11dGF0aW9uc0FwcGxpZWQob3B0aW1pc3RpY011dGF0aW9ucywgdHJ1ZSwgdGhpcy5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgcy5ub3RpZnlTdWJzY3JpYmVyKGRhdGFfMSwgX3RoaXMuZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEtlZEJhY2tlbmRRdWVyeS5wcm90b3R5cGUucXVlcnlMb2NhbGx5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBvLnF1ZXJ5U2V0LnF1ZXJ5TG9jYWxseSh0aGlzLnRhYmxlLCB0aGlzLnF1ZXJ5LCB0aGlzLmluY2x1ZGVzKTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRRdWVyeS5wcm90b3R5cGUucXVlcnlTZXJ2ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZXBvLmdldENsaWVudCgpLmxpc3QodGhpcy50YWJsZSwgdHNsaWJfMS5fX2Fzc2lnbih7fSwgdGhpcy5xdWVyeSkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBkYXRhXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kUXVlcnkucHJvdG90eXBlLmdldERhdGFXaXRoTXV0YXRpb25zQXBwbGllZCA9IGZ1bmN0aW9uIChtdXRhdGlvbnMsIG9wdGltaXN0aWMsIGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICAgICAgICBkYXRhID0gX3RoaXMuYXBwbHlNdXRhdGlvbnNPbkRhdGEoZGF0YSwgbXV0YXRpb24sIG9wdGltaXN0aWMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kUXVlcnkucHJvdG90eXBlLmFwcGx5TXV0YXRpb25zT25EYXRhID0gZnVuY3Rpb24gKGRhdGEsIG0sIG9wdGltaXN0aWMpIHtcbiAgICAgICAgaWYgKGJyYW5jaFNlbnNpdGl2ZShtKSAmJiBtLmJyYW5jaElkICE9IHRoaXMucXVlcnkuYnJhbmNoSWQpXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgdGFibGUgPSBfYS50YWJsZSwgaW5jbHVkZXMgPSBfYS5pbmNsdWRlcywgbGlzdE9wdGlvbnMgPSBfYS5xdWVyeTtcbiAgICAgICAgdmFyIHNvdXJjZUlkcyA9IGxpc3RPcHRpb25zLmhhc0VkZ2VzRnJvbSA/IFtdLmNvbmNhdChsaXN0T3B0aW9ucy5oYXNFZGdlc0Zyb20gfHwgW10pIDogW107XG4gICAgICAgIHZhciByZXF1ZXN0ZWRUYWdzID0gbGlzdE9wdGlvbnMudGFncyA/IFtdLmNvbmNhdChsaXN0T3B0aW9ucy50YWdzIHx8IFtdKSA6IFtdO1xuICAgICAgICBzd2l0Y2ggKG0ub3ApIHtcbiAgICAgICAgICAgIGNhc2UgJ3VwZGF0ZSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlQXJyYXkoZGF0YSwgZnVuY3Rpb24gKGRvYykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jLmlkID09PSBtLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHBseSBkZWx0YSBvbiB1cGRhdGVkIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlZERvYyA9IGFwcGx5RGVsdGEoZG9jLCBtLmRlbHRhRG9jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpbWlzdGljKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWREb2MuJG1ldGEgPSAndXBkYXRpbmcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWREb2M7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgaWQgZG9lcyBub3QgYXBwbHkgdG8gdGhpcyBkb2MsIHNlYXJjaCBpbiBncmFwaHMgdGhlIGlkIGlzIGZvdW5kXG4gICAgICAgICAgICAgICAgICAgIC8vIGFtb25nIGdyYXBoIGluY2x1ZGVkIGRvY3MsIGFuZCBpZiBzbywgdXBkYXRlIHRoYXQgb25lOlxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluY2x1ZGVkRG9jcyA9IGRvY1tsYWJlbF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZWREb2NzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZWRBcnJheSA9IHVwZGF0ZUFycmF5KGluY2x1ZGVkRG9jcywgZnVuY3Rpb24gKHJlbGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0ZWQuaWQgIT09IG0uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVsYXRlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZWRSZWxhdGVkID0gYXBwbHlEZWx0YShyZWxhdGVkLCBtLmRlbHRhRG9jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGltaXN0aWMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkUmVsYXRlZC4kbWV0YSA9ICd1cGRhdGluZyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVkUmVsYXRlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlZEFycmF5ICE9PSBpbmNsdWRlZERvY3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgZG9jLCAoX2EgPSB7fSwgX2FbbGFiZWxdID0gdXBkYXRlZEFycmF5LCBfYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2M7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdhZGQnOlxuICAgICAgICAgICAgICAgIGlmICh0YWJsZSA9PT0gbS50YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdE9wdGlvbnMudGFncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHF1ZXJpZWRUYWdzXzEgPSBbXS5jb25jYXQobGlzdE9wdGlvbnMudGFncyk7IC8vIHRhZyBjYW4gYmUgZWl0aGVyIHN0cmluZyBvciBzdHJpbmdbXS4gTWFrZSBpcyBzdHJpbmdbXSBhbHdheXMuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobS5kb2MudGFncyAmJiBtLmRvYy50YWdzLnNvbWUoZnVuY3Rpb24gKHRhZykgeyByZXR1cm4gcXVlcmllZFRhZ3NfMS5pbmNsdWRlcyh0YWcpOyB9KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmNvbmNhdChbbS5kb2NdKTsgLy8gTWFrZSB0aGUgYWRkZWQgZG9jIGFwcGVhciBpbiB0aGUgcmVzdWx0IChvcHRpbWlzdGljIG11dGF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFRvZG8sIGFwcGx5IGFsc28gZm9yIG90aGVyIGxpc3Qgb3B0aW9ucywgbGlrZSBpZHM6XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBhYm92ZSBjb2RlIGZvciAnYWRkJyB3YXMgb25seSB3cml0dGVuIHRvIGNvdmVyIHRoZSB1c2UgY2FzZSBvZiB0ZWFjaGVycy1wYWdlIG5vdGlmaWNhdGlvbnMhXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhOyAvLyBmYWxsYmFjayBjYXNlIC0gcXVlcnkgd2FzIG5vdCBhZmZlY3RlZC5cbiAgICAgICAgICAgIGNhc2UgJ2FkZC1yZWxhdGVkJzpcbiAgICAgICAgICAgICAgICBpZiAodGFibGUgPT09IG0udGFibGUgJiYgaW5jbHVkZXMuaW5kZXhPZihtLmdyYXBoUHJvcCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGV4cHJlc3Npb24gaXMgYGRiLmNvdXJzZUJsb2Nrcy4uLi53aGF0ZXZlci4uIC5pbmNsdWRlKFwiYWJpbGl0aWVzXCIpYCwgZGV0ZWN0OiBkYi5jb3Vyc2VCbG9ja3MuYWRkUmVsYXRlZChibG9ja0lkLCAnYWJpbGl0aWVzJywgLi4uKVxuICAgICAgICAgICAgICAgICAgICAvLyAuLi5iZWNhdXNlIHRhYmxlID0gJ2NvdXJzZUJsb2NrcycgYW5kIGluY2x1ZGVzIGhhcyBcImFiaWxpdGllc1wiLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlQXJyYXkoZGF0YSwgZnVuY3Rpb24gKGRvYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvYy5pZCAhPT0gbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbGF0ZWREb2MgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBtLnJlbGF0ZWREb2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGltaXN0aWMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlZERvYy4kbWV0YSA9ICdhZGRpbmcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hc3NpZ24oe30sIGRvYywgKF9hID0ge30sIF9hW20uZ3JhcGhQcm9wXSA9IGRvY1ttLmdyYXBoUHJvcF0uY29uY2F0KFtyZWxhdGVkRG9jXSksIF9hKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGlzdE9wdGlvbnMuaGFzRWRnZXNGcm9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VJZHMuaW5jbHVkZXMobS5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGV4cHJlc3Npb24gaXM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGBkYi5jb3Vyc2VCbG9ja3MuaGFzRWRnZXNGcm9tKFtjb3Vyc2VJZF0pYCAgKG1lYW5pbmcgdGFibGU9J2NvdXJzZUJsb2NrcycgYW5kIHNvdXJjZUlkcyBpbmNsdWRlcyBjb3Vyc2VJZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICwgZGV0ZWN0OiBkYi5jb3Vyc2VJbnN0YW5jZXMuYWRkUmVsYXRlZChjb3Vyc2VJZCwgJ2NvdXJzZUJsb2NrcycsIC4uLi4pIC8vIG0uZ3JhcGhQcm9wID09PSAnYmxvY2tzJy0tPiBnZXRUYWJsZUZyb21MYWJlbCAtLT4gJ2NvdXJzZUJsb2NrcydcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZSA9PT0gZ2V0VGFibGVGcm9tTGFiZWwobS50YWJsZSwgbS5ncmFwaFByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsaXN0T3B0aW9ucy50YWdzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5jb25jYXQodGhpcy5zZXRHcmFwaFByb3BzKG0ucmVsYXRlZERvYykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtLnJlbGF0ZWREb2MudGFncyAmJiByZXF1ZXN0ZWRUYWdzLnNvbWUoZnVuY3Rpb24gKHRhZykgeyByZXR1cm4gbS5yZWxhdGVkRG9jLnRhZ3MuaW5jbHVkZXModGFnKTsgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuY29uY2F0KHRoaXMuc2V0R3JhcGhQcm9wcyhtLnJlbGF0ZWREb2MpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RPcHRpb25zLmlkcyAmJiBsaXN0T3B0aW9ucy5pZHMuc29tZShmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGlkID09PSBtLnJlbGF0ZWREb2MuaWQ7IH0pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEEgY2VydGFpbiBJRCBpcyBvYnNlcnZlZC4gQSBkb2Mgd2l0aCB0aGlzIGlkIGlzIGJlaW5nIGFkZGVkLlxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGRvYyB0byB0aGUgcmVzdWx0LiBFeGFjdGx5IHRoaXMgV0lMTCBoYXBwZW4gaW4gdGhlIGZvbGxvd2luZyB0eXBpY2FsIHNjZW5hcmlvOlxuICAgICAgICAgICAgICAgICAgICAvLyAxLiBVc2VyIGFkZHMgYSByZWxhdGVkIGRvY3VtZW50IHRvIGEgbGlzdC5cbiAgICAgICAgICAgICAgICAgICAgLy8gMi4gRG9jdW1lbnQgcmVtYWlucyB3aXRoaW4gdGhlIE11dGF0aW9uUXVldWUgd2hpbGUgYmF0Y2gtcmVxdWVzdCBpcyBiZWluZyBwcm9jZXNzZWQgYnkgc2VydmVyLlxuICAgICAgICAgICAgICAgICAgICAvLyAzLiBVc2VyIGNsaWNrcyB0aGUgYWRkZWQgaXRlbSB0byBlZGl0IG9yIHZpZXcgaXQgKG9yIG91ciBjb21wb25lbnQgcmVkaXJlY3RzIHRvIGl0cyBlZGl0b3IpXG4gICAgICAgICAgICAgICAgICAgIC8vIDQuIEEgbmV3IHF1ZXJ5IG9mIHRoYXQgcGFydGljdWxhciBJRCBpcyBzdWJzY3JpYmVkIHRvIHtpZHM9W3RoZUlkXX1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgS2VkQmFja2VuZFF1ZXJ5LnN1YnNjcmliZSB0aGVuIGRvZXMgdGhpczpcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAxLiBDYWxsIHF1ZXJ5TG9jYWxseSgpIGJlZm9yZSBxdWVyeWluZyBzZXJ2ZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAyLiBxdWVyeUxvY2FsbHkoKSBpbnNwZWN0cyBtdXRhdGlvbnMgYW5kIGZpbmRzIGEgbWF0Y2gsIHJldHVybmluZyBhbiBlbXB0eSBsaXN0XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgKGFzc3VtZXMgYXMgd2UgYXJlIGFkZGluZyBpdCwgaXQgY2FuJ3QgZXhpc3Qgb24gdGhlIHNlcnZlciBhbnl3YXkpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgMy4gS2VkQmFja2VuZFFVZXJ5IGFwcGxpZXMgbXV0YXRpb25zIG9udG8gdGhlIGVtcHR5IGxpc3QsIGFuZCBlbmRzIHVwIGhlcmUgdG8gYWRkXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaXQgb3B0aW1pc3RpY2FsbHkuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgNC4gV2hlbiBzZXJ2ZXIgcmVzcG9uZHMgd2l0aCAyMDAgT0ssIGNhbGxzIHVzIGhlcmUgYWdhaW4gd2l0aCBvcHRpbWlzdGljPWZhbHNlXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG8gXCJwZXJzaXN0XCIgaXQgaW4gdGhlIHF1ZXJ5J3MgZGF0YSBhcnJheS5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICA0QjogSWYgbm90IDIwMCBPSywgbXV0YXRpb24gbWF5IGJlIGdvbmUgYW5kIHRoZSBzdWJzY3JpYmVyIHdpbGwgc2UgYW4gZXJyb3IgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwiQ291bGQgbm90IGZpbmQgZW50aXR5IHdpdGggaWQgWC5cIiBhbG9uZyB3aXRoIGEgcmVkIGVycm9yIG1lc3NhZ2Ugb24gdGhlIHNjcmVlblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFib3V0IHRoYXQgaXQgZmFpbGVkIHRvIHNhdmUgb24gc2VydmVyLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5jb25jYXQodGhpcy5zZXRHcmFwaFByb3BzKG0ucmVsYXRlZERvYykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZS1yZWxhdGVkJzpcbiAgICAgICAgICAgICAgICBpZiAodGFibGUgPT09IG0udGFibGUgJiYgaW5jbHVkZXMuaW5kZXhPZihtLmdyYXBoUHJvcCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVBcnJheShkYXRhLCBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5jbHVkZWREb2NzID0gZG9jW20uZ3JhcGhQcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5jbHVkZWREb2NzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jLmlkICE9PSBtLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2M7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2Fzc2lnbih7fSwgZG9jLCAoX2EgPSB7fSwgX2FbbS5ncmFwaFByb3BdID0gb3B0aW1pc3RpYyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFyayByZWxhdGVkLWRvYy10by1yZW1vdmUgd2l0aCAkbWV0YTogJ2RlbGV0aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVkRG9jcy5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuaWQgIT09IG0ucmVsYXRlZERvYy5pZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgOiB0c2xpYl8xLl9fYXNzaWduKHt9LCBkLCB7ICRtZXRhOiAnZGVsZXRpbmcnIH0pOyB9KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRlIHJlbGF0ZWQtZG9jLXRvLXJlbW92ZSBmcm9tIGRvY1tncmFwUHJvcF06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZWREb2NzLmZpbHRlcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5pZCAhPT0gbS5yZWxhdGVkRG9jLmlkOyB9KSwgX2EpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsaXN0T3B0aW9ucy5oYXNFZGdlc0Zyb20pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZUlkcy5pbmNsdWRlcyhtLmlkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpbWlzdGljID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5pZCA9PT0gbS5yZWxhdGVkRG9jLmlkID8gdHNsaWJfMS5fX2Fzc2lnbih7fSwgZCwgeyAkbWV0YTogJ2RlbGV0aW5nJyB9KSA6IGQ7IH0pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZpbHRlcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5pZCAhPT0gbS5yZWxhdGVkRG9jLmlkOyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICAgIGlmICh0YWJsZSA9PT0gbS50YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuaWQgIT09IG0uaWQ7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsaXN0T3B0aW9ucy5pbmNsdWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmNsdWRlZFRhYmxlcyA9IGluY2x1ZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChsYWJlbCkgeyByZXR1cm4gKHsgbGFiZWw6IGxhYmVsLCB0YWJsZTogZ2V0VGFibGVGcm9tTGFiZWwodGFibGUsIGxhYmVsKSB9KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYWJlbHNfMSA9IGluY2x1ZGVkVGFibGVzLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IF9hLnRhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlID09PSBtLnRhYmxlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsc18xLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVBcnJheShkYXRhLCBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzXzEuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gX2EubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbGF0ZWREb2NzID0gZG9jW2xhYmVsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0ZWREb2NzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2MgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBkb2MsIChfYiA9IHt9LCBfYltsYWJlbF0gPSBvcHRpbWlzdGljID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdGVkRG9jcy5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuaWQgPT09IG0uaWQgPyB0c2xpYl8xLl9fYXNzaWduKHt9LCBkLCB7ICRtZXRhOiAnZGVsZXRpbmcnIH0pIDogZDsgfSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZWREb2NzLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gX2EuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpZCAhPT0gbS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgX2IpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEtlZEJhY2tlbmRRdWVyeS5wcm90b3R5cGUuc2V0R3JhcGhQcm9wcyA9IGZ1bmN0aW9uIChkb2MpIHtcbiAgICAgICAgdmFyIGNvcHkgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBkb2MpO1xuICAgICAgICB0aGlzLmluY2x1ZGVzLmZvckVhY2goZnVuY3Rpb24gKGxhYmVsKSB7IHJldHVybiBjb3B5W2xhYmVsXSA9IGNvcHlbbGFiZWxdIHx8IFtdOyB9KTtcbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfTtcbiAgICByZXR1cm4gS2VkQmFja2VuZFF1ZXJ5O1xufSgpKTtcbmV4cG9ydCB7IEtlZEJhY2tlbmRRdWVyeSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9a2VkYmFja2VuZC1xdWVyeS5qcy5tYXAiLCJpbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgdGFibGVzIH0gZnJvbSAna2VkYmFja2VuZC1zY2hlbWEvc2NoZW1hLmpzb24nO1xuaW1wb3J0IHsgS2VkQmFja2VuZENvbGxlY3Rpb24gfSBmcm9tICcuL2tlZGJhY2tlbmQtY29sbGVjdGlvbic7XG5pbXBvcnQgeyBRdWVyeVNldCB9IGZyb20gJy4vcXVlcnktc2V0JztcbmltcG9ydCB7IE11dGF0aW9uUXVldWUgfSBmcm9tICcuL211dGF0aW9uLXF1ZXVlJztcbmltcG9ydCB7IEtlZEJhY2tlbmRXcml0ZXIgfSBmcm9tICcuL2tlZGJhY2tlbmQtd3JpdGVyJztcbmltcG9ydCB7IERlbHRhQ29sbGVjdGlvbiB9IGZyb20gJy4vZGVsdGEtY29sbGVjdGlvbi9kZWx0YS1jb2xsZWN0aW9uJztcbnZhciBLZWRCYWNrZW5kUmVwbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLZWRCYWNrZW5kUmVwbyhnZXRDbGllbnQsIGdldFVzZXIsIGdldFVzZXJEaXNwbGF5TmFtZSwgZGVmYXVsdFF1ZXJ5T3B0aW9ucywgbXV0YXRpb25RdWV1ZSwgcXVlcnlTZXQsIHdyaXRlciwgY2FjaGVPcHRpbWl6ZWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5nZXRDbGllbnQgPSBnZXRDbGllbnQ7XG4gICAgICAgIHRoaXMuZ2V0VXNlciA9IGdldFVzZXI7XG4gICAgICAgIHRoaXMuZ2V0VXNlckRpc3BsYXlOYW1lID0gZ2V0VXNlckRpc3BsYXlOYW1lO1xuICAgICAgICB0aGlzLmRlZmF1bHRRdWVyeU9wdGlvbnMgPSBkZWZhdWx0UXVlcnlPcHRpb25zO1xuICAgICAgICB0aGlzLm11dGF0aW9uUXVldWUgPSBtdXRhdGlvblF1ZXVlO1xuICAgICAgICB0aGlzLnF1ZXJ5U2V0ID0gcXVlcnlTZXQ7XG4gICAgICAgIHRoaXMud3JpdGVyID0gd3JpdGVyO1xuICAgICAgICB0aGlzLmNhY2hlT3B0aW1pemVkID0gY2FjaGVPcHRpbWl6ZWQ7XG4gICAgICAgIGlmICghZGVmYXVsdFF1ZXJ5T3B0aW9ucylcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFF1ZXJ5T3B0aW9ucyA9IHt9O1xuICAgICAgICBpZiAoIW11dGF0aW9uUXVldWUpXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uUXVldWUgPSBuZXcgTXV0YXRpb25RdWV1ZSgpO1xuICAgICAgICBpZiAoIXF1ZXJ5U2V0KVxuICAgICAgICAgICAgdGhpcy5xdWVyeVNldCA9IG5ldyBRdWVyeVNldCh0aGlzLm11dGF0aW9uUXVldWUpO1xuICAgICAgICBpZiAoIXdyaXRlcilcbiAgICAgICAgICAgIHRoaXMud3JpdGVyID0gbmV3IEtlZEJhY2tlbmRXcml0ZXIodGhpcy5tdXRhdGlvblF1ZXVlLCB0aGlzLnF1ZXJ5U2V0LCBnZXRDbGllbnQsIGdldFVzZXIsIGdldFVzZXJEaXNwbGF5TmFtZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKHRhYmxlcykuZm9yRWFjaChmdW5jdGlvbiAodGFibGUpIHtcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gbmV3IEtlZEJhY2tlbmRDb2xsZWN0aW9uKF90aGlzLCB0YWJsZSwgZGVmYXVsdFF1ZXJ5T3B0aW9ucyB8fCB7fSk7XG4gICAgICAgICAgICBpZiAoY2FjaGVPcHRpbWl6ZWQpIHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5jYWNoZU9wdGltaXplZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXNbdGFibGVdID0gY29sbGVjdGlvbjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGVsdGFzID0gbmV3IERlbHRhQ29sbGVjdGlvbih0aGlzLndyaXRlci5kZWx0YUNhY2hlLCB7XG4gICAgICAgICAgICBicmFuY2hJZDogdGhpcy5kZWZhdWx0UXVlcnlPcHRpb25zLmJyYW5jaElkIC8vIElmIGJyYW5jaElkIGlzIHVuZGVmaW5lZC4gRGVsdGFDb2xsZWN0aW9uIHdpbGwgcmVzcG9uZCB3aXRoIEVycm9yIG9uIHN1YnNjcmliZSgpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBLZWRCYWNrZW5kUmVwby5wcm90b3R5cGUudGFibGUgPSBmdW5jdGlvbiAodGFibGVOYW1lKSB7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gbmV3IEtlZEJhY2tlbmRDb2xsZWN0aW9uKHRoaXMsIHRhYmxlTmFtZSwgdGhpcy5kZWZhdWx0UXVlcnlPcHRpb25zKTtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGVPcHRpbWl6ZWQpXG4gICAgICAgICAgICBjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5jYWNoZU9wdGltaXplZCgpO1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRSZXBvLnByb3RvdHlwZS5fY2xvbmUgPSBmdW5jdGlvbiAocXVlcnlPcHRpb25zLCBjYWNoZU9wdGltaXplZCkge1xuICAgICAgICB2YXIgY2xvbmUgPSBuZXcgS2VkQmFja2VuZFJlcG8odGhpcy5nZXRDbGllbnQsIHRoaXMuZ2V0VXNlciwgdGhpcy5nZXRVc2VyRGlzcGxheU5hbWUsIHRzbGliXzEuX19hc3NpZ24oe30sIHRoaXMuZGVmYXVsdFF1ZXJ5T3B0aW9ucywgcXVlcnlPcHRpb25zKSwgdGhpcy5tdXRhdGlvblF1ZXVlLCB0aGlzLnF1ZXJ5U2V0LCB0aGlzLndyaXRlciwgY2FjaGVPcHRpbWl6ZWQgPT09IHVuZGVmaW5lZCA/IHRoaXMuY2FjaGVPcHRpbWl6ZWQgOiBjYWNoZU9wdGltaXplZCk7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRSZXBvLnByb3RvdHlwZS5icmFuY2ggPSBmdW5jdGlvbiAoYnJhbmNoSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb25lKHsgYnJhbmNoSWQ6IGJyYW5jaElkIH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFJlcG8ucHJvdG90eXBlLnJvbGUgPSBmdW5jdGlvbiAocm9sZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xvbmUoeyByb2xlOiByb2xlIH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFJlcG8ucHJvdG90eXBlLm9wdGltaXplQ2FjaGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbG9uZSh7fSwgdHJ1ZSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kUmVwby5wcm90b3R5cGUuY2xlYXJCcmFuY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5kZWZhdWx0UXVlcnlPcHRpb25zLmJyYW5jaElkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGNsZWFyIG1hc3RlciBicmFuY2hcIik7XG4gICAgICAgIHRoaXMud3JpdGVyLm11dGF0ZShbeyBvcDogJ2NsZWFyLWJyYW5jaCcsIGJyYW5jaElkOiB0aGlzLmRlZmF1bHRRdWVyeU9wdGlvbnMuYnJhbmNoSWQgfV0sIDApO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFJlcG8ucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKHRhcmdldEJyYW5jaElkKSB7XG4gICAgICAgIGlmICghdGhpcy5kZWZhdWx0UXVlcnlPcHRpb25zLmJyYW5jaElkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IG1lcmdlIGZyb20gbWFzdGVyIGJyYW5jaFwiKTtcbiAgICAgICAgdGhpcy53cml0ZXIubXV0YXRlKFt7IG9wOiAnbWVyZ2UnLCBicmFuY2hJZDogdGhpcy5kZWZhdWx0UXVlcnlPcHRpb25zLmJyYW5jaElkLCB0YXJnZXRCcmFuY2hJZDogdGFyZ2V0QnJhbmNoSWQgfV0sIDApO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFJlcG8ucHJvdG90eXBlLnNhdmVOb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMud3JpdGVyLndhaXRGb3JWZXJzaW9uVG9QZXJzaXN0KHRoaXMud3JpdGVyLmN1cnJlbnRWZXJzaW9uKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gS2VkQmFja2VuZFJlcG87XG59KCkpO1xuZXhwb3J0IHsgS2VkQmFja2VuZFJlcG8gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWtlZGJhY2tlbmQtcmVwby5qcy5tYXAiLCJ2YXIgS2VkQmFja2VuZFN1YnNjcmlwdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLZWRCYWNrZW5kU3Vic2NyaXB0aW9uKHN1YnNjcmliZXIsIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVyID0gc3Vic2NyaWJlcjtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICB9XG4gICAgS2VkQmFja2VuZFN1YnNjcmlwdGlvbi5wcm90b3R5cGUubm90aWZ5U3Vic2NyaWJlciA9IGZ1bmN0aW9uIChkYXRhLCBlcnJvcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcihbXSwgZXJyb3IsIHRoaXMpO1xuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YSAhPT0gdGhpcy5sYXN0Tm90aWZpZWREYXRhKSB7IC8vIFdpbGwgaW4tZmFjdCBiZSBlcXVhbCBieSByZWZlcmVuY2UgaWYgZGF0YSBpcyBzYW1lIGFzIGxhc3Qgbm90aWZpY2F0aW9uIChhcyB3ZSB1c2UgYW4gaW1tdXRhYmxlIGFwcHJvYWNoIG9uIGRhdGEpXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0Tm90aWZpZWREYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZXIoZGF0YSwgZXJyb3IsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZXIoW10sIGV4LCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleDIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgbm90aWZ5aW5nIEtlZEJhY2tlbmRTdWJzY3JpYmVyOlwiLCBleDIsICdvcmlnaW5hbGx5IG5vdGlmaWVkIGVycm9yOicsIGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgS2VkQmFja2VuZFN1YnNjcmlwdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi51bnN1YnNjcmliZSh0aGlzKTtcbiAgICB9O1xuICAgIHJldHVybiBLZWRCYWNrZW5kU3Vic2NyaXB0aW9uO1xufSgpKTtcbmV4cG9ydCB7IEtlZEJhY2tlbmRTdWJzY3JpcHRpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWtlZGJhY2tlbmQtc3Vic2NyaXB0aW9uLmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNdXRhdGlvblF1ZXVlIH0gZnJvbSAnLi9tdXRhdGlvbi1xdWV1ZSc7XG5pbXBvcnQgeyBCYXRjaFJ1bm5lciB9IGZyb20gJy4uL2tlZC1iYWNrZW5kLWNsaWVudCc7XG5pbXBvcnQgeyB0YWJsZXMgfSBmcm9tICdrZWRiYWNrZW5kLXNjaGVtYS9zY2hlbWEuanNvbic7XG5pbXBvcnQgeyBDYWNoZUJ1c3QgfSBmcm9tICcuL2NhY2hlLWJ1c3QnO1xuaW1wb3J0IHsgRW1pdHRlciB9IGZyb20gJy4uL29ic2VydmFibGUnO1xuaW1wb3J0IHsgRGVsdGFDYWNoZSB9IGZyb20gJy4vZGVsdGEtY29sbGVjdGlvbi9kZWx0YS1jYWNoZSc7XG52YXIgS2VkQmFja2VuZFdyaXRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBLZWRCYWNrZW5kV3JpdGVyKG11dGF0aW9uUXVldWUsIHF1ZXJ5U2V0LCBnZXRDbGllbnQsIGdldFVzZXIsIGdldFVzZXJEaXNwbGF5TmFtZSkge1xuICAgICAgICB0aGlzLm11dGF0aW9uUXVldWUgPSBtdXRhdGlvblF1ZXVlO1xuICAgICAgICB0aGlzLnF1ZXJ5U2V0ID0gcXVlcnlTZXQ7XG4gICAgICAgIHRoaXMuZ2V0Q2xpZW50ID0gZ2V0Q2xpZW50O1xuICAgICAgICB0aGlzLmdldFVzZXIgPSBnZXRVc2VyO1xuICAgICAgICB0aGlzLmdldFVzZXJEaXNwbGF5TmFtZSA9IGdldFVzZXJEaXNwbGF5TmFtZTtcbiAgICAgICAgdGhpcy5fdGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5faXNTYXZpbmdQcm9taXNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdXJyZW50VmVyc2lvbiA9IDA7XG4gICAgICAgIHRoaXMucGVyc2lzdGVkVmVyc2lvbiA9IG5ldyBFbWl0dGVyKDApO1xuICAgICAgICB0aGlzLmVycm9yU3Vic2NyaWJlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZVN1YnNjcmliZXJzID0gW107XG4gICAgICAgIHRoaXMuZGVsdGFDYWNoZSA9IG5ldyBEZWx0YUNhY2hlKGdldENsaWVudCwgZ2V0VXNlciwgZ2V0VXNlckRpc3BsYXlOYW1lKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEtlZEJhY2tlbmRXcml0ZXIucHJvdG90eXBlLCBcImlzU2F2aW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAhIXRoaXMuX2lzU2F2aW5nUHJvbWlzZTsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEtlZEJhY2tlbmRXcml0ZXIucHJvdG90eXBlLCBcImlzRWRpdGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLm11dGF0aW9uUXVldWUuZ2V0KCkubGVuZ3RoID4gMDsgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgS2VkQmFja2VuZFdyaXRlci5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmVycm9yU3Vic2NyaWJlcnMucHVzaChjYWxsYmFjayk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kV3JpdGVyLnByb3RvdHlwZS5vblN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc3RhdGVTdWJzY3JpYmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRXcml0ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmVycm9yU3Vic2NyaWJlcnMgPSB0aGlzLmVycm9yU3Vic2NyaWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzICE9PSBjYWxsYmFjazsgfSk7XG4gICAgICAgIHRoaXMuc3RhdGVTdWJzY3JpYmVycyA9IHRoaXMuc3RhdGVTdWJzY3JpYmVycy5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgIT09IGNhbGxiYWNrOyB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRXcml0ZXIucHJvdG90eXBlLmRpc3BhdGNoRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIHJldHJ5YWJsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmVycm9yU3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IsIHJldHJ5YWJsZSwgX3RoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHsgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEtlZEJhY2tlbmRXcml0ZXIucHJvdG90eXBlLmRpc3BhdGNoU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RhdGVTdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykgeyB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFdyaXRlci5wcm90b3R5cGUubXV0YXRlID0gZnVuY3Rpb24gKG11dGF0aW9ucywgZGVib3VuY2UpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvblF1ZXVlLmFkZChtdXRhdGlvbnMpO1xuICAgICAgICArK3RoaXMuY3VycmVudFZlcnNpb247XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hTdGF0ZUNoYW5nZSgpO1xuICAgICAgICB0aGlzLnF1ZXJ5U2V0Lm5vdGlmeVN1YnNjcmliZXJzKCk7XG4gICAgICAgIHRoaXMuZGVsdGFDYWNoZS5hcHBseU11dGF0aW9ucyh0aGlzLm11dGF0aW9uUXVldWUuZ2V0KCksIHsgb3B0aW1pc3RpYzogdHJ1ZSB9KTtcbiAgICAgICAgaWYgKCF0aGlzLl9pc1NhdmluZ1Byb21pc2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl90aW1lb3V0SWQpXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXRJZCk7XG4gICAgICAgICAgICB0aGlzLl90aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHRoaXMuc2F2ZS5iaW5kKHRoaXMpLCBkZWJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgaXNTYXZpbmcsIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcsIGJlY2FzZSBpdCB3aWxsIHJlLWNoZWNrIGlmIGFkZGl0aW9uYWxcbiAgICAgICAgLy8gbXV0YXRpb25zIGhhdmUgY29tZSwgd2hlbiBzYXZpbmcgaXMgZG9uZS5cbiAgICB9O1xuICAgIEtlZEJhY2tlbmRXcml0ZXIucHJvdG90eXBlLnJldHJ5U2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZSgpO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFdyaXRlci5wcm90b3R5cGUud2FpdEZvclZlcnNpb25Ub1BlcnNpc3QgPSBmdW5jdGlvbiAodmVyc2lvbikge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwZXJzaXN0ZWRWZXJzaW9uO1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucGVyc2lzdGVkVmVyc2lvbi5sb2FkKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZWRWZXJzaW9uID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocGVyc2lzdGVkVmVyc2lvbiA8IHZlcnNpb24pKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZSgpOyAvLyBCZSBtb3JlIGVhZ2VyIHRvIHNhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucGVyc2lzdGVkVmVyc2lvbi5maWx0ZXIoZnVuY3Rpb24gKHBlcnNpc3RlZFZlcnNpb24pIHsgcmV0dXJuIHBlcnNpc3RlZFZlcnNpb24gPj0gdmVyc2lvbjsgfSkubG9hZCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kV3JpdGVyLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5fdGltZW91dElkKVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXRJZCk7XG4gICAgICAgIGlmICh0aGlzLl9pc1NhdmluZ1Byb21pc2UpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNTYXZpbmdQcm9taXNlO1xuICAgICAgICBpZiAoIXRoaXMuaXNFZGl0ZWQpXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHRoaXMuX3RpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2lzU2F2aW5nUHJvbWlzZSA9IHRoaXMuX3NhdmUoKTtcbiAgICAgICAgdGhpcy5faXNTYXZpbmdQcm9taXNlLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5faXNTYXZpbmdQcm9taXNlID0gbnVsbDsgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NhdmluZ1Byb21pc2U7XG4gICAgfTtcbiAgICBLZWRCYWNrZW5kV3JpdGVyLnByb3RvdHlwZS5fc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbXV0YXRpb25zLCB2ZXJzaW9uLCBtdXRhdGlvblJlcXVlc3RzLCByZXNfMSwgZXRhZ011dGF0aW9ucywgZXJyb3JfMTtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaFN0YXRlQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbnMgPSB0aGlzLm11dGF0aW9uUXVldWUuZ2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gdGhpcy5jdXJyZW50VmVyc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXV0YXRpb25RdWV1ZS5tb3ZlVG9TYXZpbmdRdWV1ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25SZXF1ZXN0cyA9IHRoaXMubWFwTXV0YXRpb25zKG11dGF0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgNiwgMTEsIDEyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldENsaWVudCgpLmJhdGNoKG11dGF0aW9uUmVxdWVzdHMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldGFnTXV0YXRpb25zID0gT2JqZWN0LmtleXMocmVzXzEubmV3RXRhZ3MpLm1hcChmdW5jdGlvbiAoaWQpIHsgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3A6ICd1cGRhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YURvYzogeyAkZXRhZzogcmVzXzEubmV3RXRhZ3NbaWRdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TmFtZTogbnVsbCAvLyBXZSBkb24ndCBoYXZlIHRoZSB0YXJnZXQgbmFtZS4gQnV0IHRoaXMgbXV0YXRpb24gd29uJ3QgYmUgdmlzaWJsZSBpbiBhIERlbHRhQ29sbGVjdGlvbiBhbnl3YXksIHNvIGl0IHdvbnQgYmUgdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEludmFsaWRhdGUgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgICAgIENhY2hlQnVzdC5pbnZhbGlkYXRlQ2FjaGUobXV0YXRpb25SZXF1ZXN0cywgdGhpcy5nZXRVc2VyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tbW1pdCBtdXRhdGlvbnMgYWxvbmcgd2l0aCBldGFnTXV0YXRpb25zIGludG8gcXVlcmllcyBjYWNoZWQgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0ZWRWZXJzaW9uLmRpc3BhdGNoKHZlcnNpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWx0YUNhY2hlLmFwcGx5TXV0YXRpb25zKG11dGF0aW9ucywgeyBvcHRpbWlzdGljOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucXVlcnlTZXQuY29tbWl0TXV0YXRpb25zKE11dGF0aW9uUXVldWUubWVyZ2UobXV0YXRpb25zLCBldGFnTXV0YXRpb25zKSwgdmVyc2lvbildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPbiBzdWNjZXNzLCBjbGVhciBzYXZpbmcgcXVldWUgYXMgdGhlIG11dGF0aW9ucyB3aWxsIG5vdyBiZSBjb21taXR0ZWQgdG8gYWxsIHF1ZXJ5J3MgZGF0YSBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdXRhdGlvblF1ZXVlLmNsZWFyU2F2aW5nUXVldWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hTdGF0ZUNoYW5nZSgpOyAvLyBpc0VkaXRlZCBtYXkgaGF2ZSB0dXJuZWQgdG8gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbmFsbHksIG5vdGlmeSBzdWJzY3JpYmVycyBzbyB0aGF0IHZpZXdzIGdldCB1cGRhdGVkIHdpdGggY29tbWl0dGVkIHJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlcnlTZXQubm90aWZ5U3Vic2NyaWJlcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMubXV0YXRpb25RdWV1ZS5nZXQoKS5sZW5ndGggPiAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGRpdGlvbmFsIG11dGF0aW9ucyBoYXBwZW5kIHdoaWxlIHdlIHdlcmUgc2F2aW5nLiBIYW5kbGUgdGhlbSBhcyB3ZWxsLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5fc2F2ZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkaXRpb25hbCBtdXRhdGlvbnMgaGFwcGVuZCB3aGlsZSB3ZSB3ZXJlIHNhdmluZy4gSGFuZGxlIHRoZW0gYXMgd2VsbC5cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzMgLypicmVhayovLCAxMl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNpc3RlZFZlcnNpb24uZGlzcGF0Y2hFcnJvcihlcnJvcl8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGVycm9yXzEgJiYgZXJyb3JfMS5uYW1lICYmIGVycm9yXzEubmFtZS5zdGFydHNXaXRoKFwiaHR0cDRcIikpKSByZXR1cm4gWzMgLypicmVhayovLCA5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFjY2VzcyBDb250cm9sIGRlbmllZCwgYmFkIHJlcXVlc3Qgb3Igc2ltaWxhci4gVGhyb3cgbXV0YXRpb25zIGF3YXkuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXJyb3IoZXJyb3JfMSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdXRhdGlvblF1ZXVlLmNsZWFyU2F2aW5nUXVldWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hTdGF0ZUNoYW5nZSgpOyAvLyBpc0VkaXRlZCBtYXkgaGF2ZSB0dXJuZWQgdG8gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlcnlTZXQubm90aWZ5U3Vic2NyaWJlcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMubXV0YXRpb25RdWV1ZS5nZXQoKS5sZW5ndGggPiAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIbyBobyEgQWRkaXRpb25hbCBtdXRhdGlvbnMgaGFwcGVuZCB3aGlsZSB3ZSB3ZXJlIHNhdmluZy4gSGFuZGxlIHRoZW0gYWxvbmUuIFRIZXkgbWlnaHQgYmUgbW9yZSBsdWNreS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuX3NhdmUoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhvIGhvISBBZGRpdGlvbmFsIG11dGF0aW9ucyBoYXBwZW5kIHdoaWxlIHdlIHdlcmUgc2F2aW5nLiBIYW5kbGUgdGhlbSBhbG9uZS4gVEhleSBtaWdodCBiZSBtb3JlIGx1Y2t5LlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA4O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEVycm9yKGVycm9yXzEsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxMDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFszIC8qYnJlYWsqLywgMTJdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaFN0YXRlQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgS2VkQmFja2VuZFdyaXRlci5wcm90b3R5cGUubWFwTXV0YXRpb25zID0gZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICB2YXIgYnIgPSBuZXcgQmF0Y2hSdW5uZXIoKTtcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIHN3aXRjaCAobS5vcCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3VwZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGJyLnVwZGF0ZShtLnRhYmxlLCBtLmlkLCBtLmRlbHRhRG9jLCBtLmJyYW5jaElkKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgICAgICAgICAgICAgYnIuYWRkKG0udGFibGUsIG0uZG9jKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYWRkLXJlbGF0ZWQnOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIW0ucmVsYXRlZERvYy4kZXRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gJGV0YWcgbWVhbnMgdGhpcyBpcyBhIG5ldyBkb2N1bWVudC4gQWRkIGl0IGJlZm9yZSBsaW5raW5nIHRvIGl0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnIuYWRkKHRhYmxlc1ttLnRhYmxlXS5yZWxhdGlvbnNoaXBzW20uZ3JhcGhQcm9wXSwgbS5yZWxhdGVkRG9jLCBtLmJyYW5jaElkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBici5saW5rMihtLnRhYmxlLCBtLmlkLCBtLmdyYXBoUHJvcCwgbS5yZWxhdGVkRG9jLmlkLCBtLmJyYW5jaElkKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncmVtb3ZlLXJlbGF0ZWQnOlxuICAgICAgICAgICAgICAgICAgICBici51bmxpbmsyKG0udGFibGUsIG0uaWQsIG0uZ3JhcGhQcm9wLCBtLnJlbGF0ZWREb2MuaWQsIG0uYnJhbmNoSWQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd1bmRvLWxpbmsnOlxuICAgICAgICAgICAgICAgICAgICBici51bmRvTGluayhtLnRhYmxlLCBtLmlkLCBtLmdyYXBoUHJvcCwgbS5yZWxhdGVkSWQsIG0uYnJhbmNoSWQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICAgICAgICBici5kZWxldGUobS50YWJsZSwgbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NsZWFyLWJyYW5jaCc6XG4gICAgICAgICAgICAgICAgICAgIGJyLmNsZWFyQnJhbmNoKG0uYnJhbmNoSWQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtZXJnZSc6XG4gICAgICAgICAgICAgICAgICAgIGJyLm1lcmdlKG0uYnJhbmNoSWQsIG0udGFyZ2V0QnJhbmNoSWQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBici5tdXRhdGlvblJlcXVlc3RzO1xuICAgIH07XG4gICAgcmV0dXJuIEtlZEJhY2tlbmRXcml0ZXI7XG59KCkpO1xuZXhwb3J0IHsgS2VkQmFja2VuZFdyaXRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9a2VkYmFja2VuZC13cml0ZXIuanMubWFwIiwiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGdldFRhYmxlRnJvbUxhYmVsLCBicmFuY2hTZW5zaXRpdmUsIGdsb2JhbE9wIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBtZXJnZURlbHRhcyB9IGZyb20gJy4vZGVsdGEtbWVyZ2UnO1xudmFyIE11dGF0aW9uUXVldWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTXV0YXRpb25RdWV1ZSgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLnNhdmluZ1F1ZXVlID0gW107XG4gICAgfVxuICAgIE11dGF0aW9uUXVldWUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IE11dGF0aW9uUXVldWUubWVyZ2UodGhpcy5xdWV1ZSwgbXV0YXRpb25zKTtcbiAgICB9O1xuICAgIE11dGF0aW9uUXVldWUucHJvdG90eXBlLm1vdmVUb1NhdmluZ1F1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNhdmluZ1F1ZXVlID0gTXV0YXRpb25RdWV1ZS5tZXJnZSh0aGlzLnNhdmluZ1F1ZXVlLCB0aGlzLnF1ZXVlKTtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgIH07XG4gICAgTXV0YXRpb25RdWV1ZS5wcm90b3R5cGUuY2xlYXJTYXZpbmdRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zYXZpbmdRdWV1ZSA9IFtdO1xuICAgIH07XG4gICAgTXV0YXRpb25RdWV1ZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zYXZpbmdRdWV1ZS5jb25jYXQodGhpcy5xdWV1ZSk7XG4gICAgfTtcbiAgICBNdXRhdGlvblF1ZXVlLnByb3RvdHlwZS5hZmZlY3RzUXVlcnkgPSBmdW5jdGlvbiAodGFibGUsIHF1ZXJ5LCBpbmNsdWRlcykge1xuICAgICAgICB2YXIgbXV0YXRpb25zID0gdGhpcy5nZXQoKTtcbiAgICAgICAgaWYgKG11dGF0aW9ucy5zb21lKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLm9wID09PSAnbWVyZ2UnIHx8IG0ub3AgPT09ICdjbGVhci1icmFuY2gnOyB9KSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAocXVlcnkuaWRzKSB7XG4gICAgICAgICAgICAvLyBBIHF1ZXJ5IHdpdGggXCJpZHNcIiBmaWx0ZXIgd2lsbCBiZSBlYXN5IHRvIGRldGVjdCBhIG5vLW1hdGNoIG9uOlxuICAgICAgICAgICAgcmV0dXJuIG11dGF0aW9ucy5zb21lKGZ1bmN0aW9uIChtKSB7IHJldHVybiBnbG9iYWxPcChtKSB8fCAoIWJyYW5jaFNlbnNpdGl2ZShtKSB8fCBtLmJyYW5jaElkID09PSBxdWVyeS5icmFuY2hJZCkgJiZcbiAgICAgICAgICAgICAgICBxdWVyeS5pZHMuaW5jbHVkZXMobS5pZCk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgY2hlY2sgaWYgbXV0YXRpb25zIGFmZmVjdCBzYW1lIGJyYW5jaCBhbmQgdGFibGUuIENvdWxkIGJlIGRvbmUgbW9yZSBmaW5lIGdyYWluZWQsXG4gICAgICAgIC8vIGJ1dCB0aGF0IHdvdWxkIG9ubHkgYmUgYSBzdWJvcHRpbWl6YXRpb24uXG4gICAgICAgIHJldHVybiBtdXRhdGlvbnMuc29tZShmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIG0ub3AgPT09ICdhZGQnID9cbiAgICAgICAgICAgICAgICBtLnRhYmxlID09PSB0YWJsZSA6XG4gICAgICAgICAgICAgICAgbS5vcCA9PT0gJ2RlbGV0ZScgP1xuICAgICAgICAgICAgICAgICAgICBtLnRhYmxlID09PSB0YWJsZSB8fCAoaW5jbHVkZXMuc29tZShmdW5jdGlvbiAobGFiZWwpIHsgcmV0dXJuIGdldFRhYmxlRnJvbUxhYmVsKHRhYmxlLCBsYWJlbCkgPT09IG0udGFibGU7IH0pKSA6XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbE9wKG0pID8gdHJ1ZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtLmJyYW5jaElkID09IHF1ZXJ5LmJyYW5jaElkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG0udGFibGUgPT09IHRhYmxlIHx8IChtLm9wICE9PSAndXBkYXRlJyAmJiAoW3RhYmxlXS5jb25jYXQoaW5jbHVkZXMubWFwKGZ1bmN0aW9uIChsYWJlbCkgeyByZXR1cm4gZ2V0VGFibGVGcm9tTGFiZWwodGFibGUsIGxhYmVsKTsgfSkpLnNvbWUoZnVuY3Rpb24gKHRhYmxlKSB7IHJldHVybiBnZXRUYWJsZUZyb21MYWJlbChtLnRhYmxlLCBtLmdyYXBoUHJvcCkgPT09IHRhYmxlOyB9KSkpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNdXRhdGlvblF1ZXVlLm1lcmdlID0gZnVuY3Rpb24gKHF1ZXVlMSwgcXVldWUyKSB7XG4gICAgICAgIHZhciBtdXRhYmxlUXVldWUxID0gcXVldWUxLnNsaWNlKCk7XG4gICAgICAgIHZhciBtdXRhYmxlUXVldWUyID0gcXVldWUyLnNsaWNlKCk7XG4gICAgICAgIC8vaWYgKG11dGFibGVRdWV1ZTEubGVuZ3RoID4gMCkgZGVidWdnZXI7XG4gICAgICAgIHZhciBsZW4gPSBxdWV1ZTEubGVuZ3RoO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgbSA9IHF1ZXVlMVtpXTtcbiAgICAgICAgICAgIGlmIChtLm9wID09PSAndXBkYXRlJykge1xuICAgICAgICAgICAgICAgIHZhciBvdmVybGFwcGluZ0lkT3BJZHggPSBtdXRhYmxlUXVldWUyLmZpbmRJbmRleChmdW5jdGlvbiAobmV3TXV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdNdXQub3AgPT09ICd1cGRhdGUnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNdXQuYnJhbmNoSWQgPT09IG0uYnJhbmNoSWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld011dC5pZCA9PT0gbS5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmxhcHBpbmdJZE9wSWR4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0YWJsZVF1ZXVlMVtpXSA9IHRzbGliXzEuX19hc3NpZ24oe30sIG0sIHsgZGVsdGFEb2M6IG1lcmdlRGVsdGFzKG0uZGVsdGFEb2MsIG11dGFibGVRdWV1ZTJbb3ZlcmxhcHBpbmdJZE9wSWR4XS5kZWx0YURvYykgfSk7XG4gICAgICAgICAgICAgICAgICAgIG11dGFibGVRdWV1ZTIuc3BsaWNlKG92ZXJsYXBwaW5nSWRPcElkeCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtdXRhYmxlUXVldWUxLmNvbmNhdChtdXRhYmxlUXVldWUyKTtcbiAgICB9O1xuICAgIHJldHVybiBNdXRhdGlvblF1ZXVlO1xufSgpKTtcbmV4cG9ydCB7IE11dGF0aW9uUXVldWUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW11dGF0aW9uLXF1ZXVlLmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBLZWRCYWNrZW5kUXVlcnkgfSBmcm9tICcuL2tlZGJhY2tlbmQtcXVlcnknO1xuaW1wb3J0ICogYXMgSnNvblNjaGVtYSBmcm9tICdrZWRiYWNrZW5kLXNjaGVtYS9zY2hlbWEuanNvbic7XG5pbXBvcnQgeyBxdWVyeUFycmF5IH0gZnJvbSAnLi91dGlscyc7XG52YXIgUXVlcnlTZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUXVlcnlTZXQobXV0YXRpb25RdWV1ZSkge1xuICAgICAgICB0aGlzLm11dGF0aW9uUXVldWUgPSBtdXRhdGlvblF1ZXVlO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSBbXTtcbiAgICB9XG4gICAgUXVlcnlTZXQucHJvdG90eXBlLmNvbW1pdE11dGF0aW9ucyA9IGZ1bmN0aW9uIChtdXRhdGlvbnMsIHZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwodGhpcy5xdWVyaWVzLm1hcChmdW5jdGlvbiAocSkgeyByZXR1cm4gcS5jb21taXRNdXRhdGlvbnMobXV0YXRpb25zLCB2ZXJzaW9uKTsgfSkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhbnVwSW52YWxpZFF1ZXJpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBRdWVyeVNldC5wcm90b3R5cGUuY2xlYW51cEludmFsaWRRdWVyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLnF1ZXJpZXMuZmlsdGVyKGZ1bmN0aW9uIChxKSB7XG4gICAgICAgICAgICBpZiAocS5pbnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHEudGltZW91dEhhbmRsZSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocS50aW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgcS50aW1lb3V0SGFuZGxlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUXVlcnlTZXQucHJvdG90eXBlLm5vdGlmeVN1YnNjcmliZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3B0aW1pc3RpY011dGF0aW9ucyA9IHRoaXMubXV0YXRpb25RdWV1ZS5nZXQoKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKHEpIHtcbiAgICAgICAgICAgIHEubm90aWZ5U3Vic2NyaWJlcnMob3B0aW1pc3RpY011dGF0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUXVlcnlTZXQucHJvdG90eXBlLmZpbmRRdWVyeSA9IGZ1bmN0aW9uICh0YWJsZSwgcXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcmllcy5maW5kKGZ1bmN0aW9uIChxKSB7IHJldHVybiBxLnF1ZXJ5S2V5ID09PSBLZWRCYWNrZW5kUXVlcnkucXVlcnlLZXkodGFibGUsIHF1ZXJ5KTsgfSk7XG4gICAgfTtcbiAgICBRdWVyeVNldC5wcm90b3R5cGUucXVlcnlMb2NhbGx5ID0gZnVuY3Rpb24gKHRhYmxlLCBxdWVyeSwgaW5jbHVkZXMpIHtcbiAgICAgICAgLy8gRm9yIG5vdywgb25seSBoYW5kbGUgdGhpcyB2ZXJ5IGNvbW1vbiBhbmQgc3BlY2lhbCBjYXNlICh3aGljaFxuICAgICAgICAvLyB3aWxsIHNhdmUgYSBsb3Qgb2YgdW5uZXNjZXNzYXJ5IG5ldHdvcmsgdHJhZmZpYyBpZiBJIGFtIHRoaW5raW5nIHJpZ2h0Li4uKVxuICAgICAgICB2YXIgbXV0YXRpb25zID0gdGhpcy5tdXRhdGlvblF1ZXVlLmdldCgpO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgcXVlcnkgd2FudHMgdG8gZ2V0IGEgc2luZ2xlIGVudGl0eSBieSBpdHMgSUQ6XG4gICAgICAgIGlmIChxdWVyeS5pZHMgJiYgcXVlcnkuaWRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgLy8gQW5kIGlmIHNvLCBpZiB3ZSBoYXZlIGFuIG91dGdvaW5nIG11dGF0aW9uIHRvIGNyZWF0ZSB0aGF0IGVudGl0eTpcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbnMuc29tZShmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5vcCA9PT0gJ2FkZC1yZWxhdGVkJyAmJiBtLnJlbGF0ZWREb2MuaWQgPT09IHF1ZXJ5Lmlkc1swXTsgfSkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVuIHJldHVybiBhbiBFTVBUWSByZXNwb25zZSwgc2lnbmFsbGluZyB0aGF0IHdlIGNhbiByZXNvbHZlIHRoaXMgbG9jYWxseSxcbiAgICAgICAgICAgICAgICAvLyBidXQgbGV0IHRoZSBvcHRpc3RpYyBmZWF0dXJlIG9mIEtlZEJhY2tlbmRRdWVyeSBhcHBseSB0aGUgbXV0YXRpb24gYmVmb3JlXG4gICAgICAgICAgICAgICAgLy8gbm90aWZ5aW5nIHN1YnNjcmliZXJzICh3ZSBkb24ndCB3YW50IGl0IHRvIGJlIHBlcnNpc3RlbnQgYmVmb3JlIHRoZSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICAvLyBoYXMgYWNjZXB0ZWQgdGhlIG11dGF0aW9uKVxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBPSywgYW5vdGhlciBxdWl0ZSBjb21tb24gY2FzZSBpcyB3aGVuIHdlIGFzayBmb3IgYSBjZXJ0YWluIElEIGFuZCB0aGF0IElEIHJlcGxpZXNcbiAgICAgICAgLy8gd2l0aGluIGFub3RoZXIgcXVlcnlcbiAgICAgICAgaWYgKHF1ZXJ5Lmhhc0VkZ2VzRnJvbSB8fCBxdWVyeS5oYXNFZGdlc1RvKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIE5vdCBwb3NzaWJsZSB0byBoYW5kbGVcbiAgICAgICAgaWYgKCFxdWVyeS5pZHMpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gRm9yIG5vdywganVzdCB0YWtlIGhpZ2h0IGZvciB0aGlzIHBhcnRpY3VsYXIgYW5kIG1vc3QgY29tbW9uIGNhc2UhXG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKHEpIHtcbiAgICAgICAgICAgIGlmICghcS5nb3RJbml0aWFsUmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIGlmIChxLnF1ZXJ5LmJyYW5jaElkICE9PSBxdWVyeS5icmFuY2hJZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgaWYgKHEucXVlcnkuZmxhZ3MpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjsgLy8gSXQgd291bGQgYmUgY29tcGxleCB0byBzdXBwb3J0IHZhcmlvdXMgZmxhZ3MuIFF1ZXJ5J3MgZGF0YSBtYXkgaW5jbHVkZSBpZHMgb25seS4gQ2FuJ3QgcmVseSBvbiB0aGUgcXVlcnkuXG4gICAgICAgICAgICB2YXIgcUluY2x1ZGVzID0gcS5pbmNsdWRlcztcbiAgICAgICAgICAgIGlmIChxSW5jbHVkZXMubGVuZ3RoID4gMCAmJiAoIXF1ZXJ5LmluY2x1ZGUgfHwgcXVlcnkuaW5jbHVkZS5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgaW5jbHVkZSwgYnV0IHRoaXMgcXVlcnkgZG9lcy4gQ2hlY2sgaWYgd2UgY2FuIGZpbmQgb3VyIHJlc3VsdCB3aXRoaW4gaXQuXG4gICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gcUluY2x1ZGVzLmZpbmQoZnVuY3Rpb24gKGwpIHsgcmV0dXJuIEpzb25TY2hlbWEudGFibGVzW3EudGFibGVdW1wicmVsYXRpb25zaGlwc1wiXVtsXSA9PT0gdGFibGU7IH0pO1xuICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzXzEgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHEuZGF0YTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbnRpdHkgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ViRGF0YSA9IHF1ZXJ5QXJyYXkocXVlcnksIGVudGl0eVtsYWJlbF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IHJldHVybiByZXNfMVtyLmlkXSA9IHI7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRfMSA9IE9iamVjdC5rZXlzKHJlc18xKS5tYXAoZnVuY3Rpb24gKGlkKSB7IHJldHVybiByZXNfMVtpZF07IH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHJldHVybiByZXN1bHQgaWYgd2UgY291bGQgbG9vayB1cCBldmVyeSByZXF1ZXN0ZWQgSUQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghcXVlcnkuaWRzLmV2ZXJ5KGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gcmVzdWx0XzEuc29tZShmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5pZCA9PT0gaWQ7IH0pOyB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiByZXN1bHRfMSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaW5jbHVkZXMuZXZlcnkoZnVuY3Rpb24gKGxhYmVsKSB7IHJldHVybiBxSW5jbHVkZXMuaW5jbHVkZXMobGFiZWwpOyB9KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgLy8gTGFzdGx5LCBpZiB0aGUgcXVlcnkgaW5jbHVkZXMgYWxsIGdyYXBocyB0aGF0IHdlIGRvLCBwaWNrIHRoZSBzdWJzZXQgZnJvbSB0aGF0IHF1ZXJ5LlxuICAgICAgICAgICAgLy8gQ29uY3JldGUgZXhhbXBsZTogV2Ugb2JzZXJ2ZSBhIGNlcnRhaW4gVGFzayBieSBJRCBhbmQgd2FudCBpdHMga25vd2xlZGdlUmVxdWlyZW1lbnRzIGFsb25nIHdpdGggaXQsXG4gICAgICAgICAgICAvLyBhbmQgdGhlcmUncyBhbm90aGVyIHF1ZXJ5IG9mIGFsbCB0YXNrcyB0aGF0IGFsc28gaW5jbHVkZXMga25vd2xlZGdlUmVxdWlyZW1lbnRzLiBVc2UgaXQuIFxuICAgICAgICAgICAgaWYgKHEudGFibGUgPT09IHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdF8yID0gcXVlcnlBcnJheShxdWVyeSwgcS5kYXRhKTtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHJldHVybiByZXN1bHQgaWYgd2UgY291bGQgbG9vayB1cCBldmVyeSByZXF1ZXN0ZWQgSUQ6XG4gICAgICAgICAgICAgICAgaWYgKCFxdWVyeS5pZHMuZXZlcnkoZnVuY3Rpb24gKGlkKSB7IHJldHVybiByZXN1bHRfMi5zb21lKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LmlkID09PSBpZDsgfSk7IH0pKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiByZXN1bHRfMiB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5xdWVyaWVzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHEgPSBfYVtfaV07XG4gICAgICAgICAgICB2YXIgc3RhdGVfMSA9IF9sb29wXzEocSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXRlXzEgPT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXzEudmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5U2V0LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHZhciBfYSA9IHN1YnNjcmlwdGlvbi5jb2xsZWN0aW9uLCB0YWJsZSA9IF9hLnRhYmxlLCBxdWVyeSA9IF9hLnF1ZXJ5LCByZXBvID0gX2EucmVwbztcbiAgICAgICAgdmFyIGtiUXVlcnkgPSB0aGlzLmZpbmRRdWVyeSh0YWJsZSwgcXVlcnkpO1xuICAgICAgICBpZiAoIWtiUXVlcnkpIHtcbiAgICAgICAgICAgIGtiUXVlcnkgPSBuZXcgS2VkQmFja2VuZFF1ZXJ5KHRhYmxlLCBxdWVyeSwgcmVwby5nZXRVc2VyKCksIHJlcG8sIHRoaXMubXV0YXRpb25RdWV1ZSk7XG4gICAgICAgICAgICB0aGlzLnF1ZXJpZXMucHVzaChrYlF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChrYlF1ZXJ5LnRpbWVvdXRIYW5kbGUpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoa2JRdWVyeS50aW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgICAgICBrYlF1ZXJ5LnRpbWVvdXRIYW5kbGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGtiUXVlcnkuc3Vic2NyaWJlKHN1YnNjcmlwdGlvbik7XG4gICAgfTtcbiAgICBRdWVyeVNldC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IHN1YnNjcmlwdGlvbi5jb2xsZWN0aW9uLCB0YWJsZSA9IF9hLnRhYmxlLCBxdWVyeSA9IF9hLnF1ZXJ5LCByZXBvID0gX2EucmVwbztcbiAgICAgICAgdmFyIGtiUXVlcnkgPSB0aGlzLmZpbmRRdWVyeSh0YWJsZSwgcXVlcnkpO1xuICAgICAgICBpZiAoa2JRdWVyeSkge1xuICAgICAgICAgICAgLy8gUHJvaGliaXQgZnVydGhlciBub3RpZmljYXRpb25zIHRvIHRoaXMgc3Vic2NyaXB0aW9uOlxuICAgICAgICAgICAga2JRdWVyeS51bnN1YnNjcmliZShzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgLy8gUmVsZWFzZSB1bm5lc2Nlc3NhcnkgbWVtb3J5IHdoZW4gdGhlcmUgYXJlIG5vIG1vcmUgc3Vic2NyaXB0aW9ucyBvZiB0aGlzIHF1ZXJ5LCBieSByZW1vdmluZyB0aGUgcXVlcnkgaXRzZWxmXG4gICAgICAgICAgICAvLyBUbyB0aGF0IGluIGEgZGVsYXllZCBtYW5uZXIsIHNvIHRoYXQgYW4gdW5zdWJzY3JpYmUoKSBmb2xsb3dlZCBieSBhbiBpbW1lZGlhdGUgc3Vic2NyaWJlKCkgZG9uJ3QgaGF2ZSB0byByZS1xdWVyeSB0aGUgc2VydmVyOlxuICAgICAgICAgICAgaWYgKGtiUXVlcnkuc3Vic2NyaXB0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBTY2hlZHVsZSBmb3IgZ2FyYmFnZSBjb2xsZWN0aW9uIGluIDUgbWludXRlczpcbiAgICAgICAgICAgICAgICBrYlF1ZXJ5LnRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYga2JRdWVyeSBzdGlsbCBoYXMgbm8gc3Vic2NyaXB0aW9ucyAobm90IGNlcnRhaW4hIEEgbmV3IHN1YnNjcmliZXIgbWF5IGhhdmUgY29tZSBhbG9uZy4uLilcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtiUXVlcnkuc3Vic2NyaXB0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0aWxsIG5vIHN1YnNjcmlwdGlvbnMgb24gaXQsIHRpbWUgdG8gcmVsZWFzZSBzb21lIG1lbW9yeSBhbmQgZm9yZ2V0IHRoZSBpbi1tZW1vcnkgY2FjaGUgb2YgdGhlIHF1ZXJ5IHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucXVlcmllcyA9IF90aGlzLnF1ZXJpZXMuZmlsdGVyKGZ1bmN0aW9uIChxKSB7IHJldHVybiBxICE9PSBrYlF1ZXJ5OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMucXVlcmllcy5sZW5ndGggPiA1MCA/XG4gICAgICAgICAgICAgICAgICAgIDUwMCA6IC8vIERvbid0IGhvc3QgdG9vIG1hbnkgcXVlcmllcy4gR2FyYmFnZSBjb2xsZWN0IHRoaXMgd2l0aGluIDUwMCBtc1xuICAgICAgICAgICAgICAgICAgICA1ICogNjAwMDApOyAvLyBBbGxvdyBxdWVyeSBpbiBtZW1vcnkgZm9yIGFub3RoZXIgNSBtaW51dGVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBRdWVyeVNldDtcbn0oKSk7XG5leHBvcnQgeyBRdWVyeVNldCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktc2V0LmpzLm1hcCIsImltcG9ydCB7IHRhYmxlcyB9IGZyb20gJ2tlZGJhY2tlbmQtc2NoZW1hL3NjaGVtYS5qc29uJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYWJsZUZyb21MYWJlbCh0YWJsZSwgbGFiZWwpIHtcbiAgICByZXR1cm4gdGFibGVzW3RhYmxlXS5yZWxhdGlvbnNoaXBzW2xhYmVsXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFycmF5KHF1ZXJ5LCBkYXRhKSB7XG4gICAgdmFyIGZpbHRlciA9IGdldEZpbHRlckZyb21RdWVyeShxdWVyeSk7XG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKGZpbHRlcik7XG59XG5leHBvcnQgZnVuY3Rpb24gQU5EKGZpbHRlcjEsIGZpbHRlcjIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIGZpbHRlcjEoeCkgJiYgZmlsdGVyMih4KTsgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWx0ZXJGcm9tUXVlcnkocXVlcnkpIHtcbiAgICB2YXIgZmlsdGVyID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHRydWU7IH07XG4gICAgaWYgKHF1ZXJ5LmZyb20pXG4gICAgICAgIHJldHVybiBBTkQoZmlsdGVyLCBmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5kYXRlVGltZSA+PSBxdWVyeS5mcm9tOyB9KTtcbiAgICBpZiAocXVlcnkudG8pXG4gICAgICAgIHJldHVybiBBTkQoZmlsdGVyLCBmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5kYXRlVGltZSA8IHF1ZXJ5LnRvOyB9KTtcbiAgICBpZiAocXVlcnkuaWRzKVxuICAgICAgICByZXR1cm4gQU5EKGZpbHRlciwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHF1ZXJ5Lmlkcy5pbmNsdWRlcyh4LmlkKTsgfSk7XG4gICAgaWYgKHF1ZXJ5Lm5hbWUpXG4gICAgICAgIHJldHVybiBBTkQoZmlsdGVyLCBmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5uYW1lID09PSBxdWVyeS5uYW1lOyB9KTtcbiAgICBpZiAocXVlcnkudGFncylcbiAgICAgICAgcmV0dXJuIEFORChmaWx0ZXIsIGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LnRhZ3MgJiYgW10uY29uY2F0KHF1ZXJ5LnRhZ3MgfHwgW10pLnNvbWUoZnVuY3Rpb24gKHRhZykgeyByZXR1cm4geC50YWdzLmluY2x1ZGVzKHRhZyk7IH0pOyB9KTtcbiAgICAvLyBxdWVyeS5oYXNFZGdlc0Zyb20gYW5kIHF1ZXJ5Lmhhc0VkZ2VzVG8gY2Fubm90IGJ5IGZpbHRlcmVkIGhlcmVcbiAgICByZXR1cm4gZmlsdGVyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJyYW5jaFNlbnNpdGl2ZShtKSB7XG4gICAgcmV0dXJuIG0ub3AgIT09ICdkZWxldGUnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdsb2JhbE9wKG0pIHtcbiAgICByZXR1cm4gbS5vcCA9PT0gJ2NsZWFyLWJyYW5jaCcgfHwgbS5vcCA9PT0gJ21lcmdlJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsImltcG9ydCBtaWdyYXRlIGZyb20gJy4vbWlncmF0ZSc7XG5leHBvcnQgdmFyIEtlZE1vZGVsTWlncmF0b3JNaXhpbiA9IGZ1bmN0aW9uIChjbGllbnQpIHtcbiAgICBpZiAoY2xpZW50Ll9fbWlncmF0b3JfbWl4ZWRfaW4pXG4gICAgICAgIHJldHVybjtcbiAgICBjbGllbnQuX19taWdyYXRvcl9taXhlZF9pbiA9IHRydWU7XG4gICAgdmFyIGdldCA9IGNsaWVudC5nZXQ7XG4gICAgdmFyIGxpc3QgPSBjbGllbnQubGlzdDtcbiAgICBjbGllbnQuZ2V0ID0gZnVuY3Rpb24gKHRhYmxlLCBpZCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgaW5jbHVkZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5pbmNsdWRlO1xuICAgICAgICByZXR1cm4gZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBtaWdyYXRlKHJlc3VsdCwgdGFibGUsIGluY2x1ZGUgJiYgaW5jbHVkZS50b1N0cmluZygpLnNwbGl0KCcsJykpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjbGllbnQubGlzdCA9IGZ1bmN0aW9uICh0YWJsZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgaW5jbHVkZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5pbmNsdWRlO1xuICAgICAgICByZXR1cm4gbGlzdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzdWx0LmZvckVhY2goZnVuY3Rpb24gKGRvYykgeyByZXR1cm4gbWlncmF0ZShkb2MsIHRhYmxlLCBpbmNsdWRlICYmIGluY2x1ZGUudG9TdHJpbmcoKS5zcGxpdCgnLCcpKTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBjbGllbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IG1pZ3JhdGVUYXNrIGZyb20gJy4vbWlncmF0ZS10YXNrJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pZ3JhdGVDb3Vyc2UoY291cnNlLCBncmFwaHMpIHtcbiAgICBpZiAoIWNvdXJzZS5tb2R1bGVzKVxuICAgICAgICBjb3Vyc2UubW9kdWxlcyA9IFtdO1xuICAgIGNvdXJzZS5tb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICBpZiAoIW1vZHVsZS5yZXNvdXJjZXMpIHtcbiAgICAgICAgICAgIG1vZHVsZS5yZXNvdXJjZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1vZHVsZS50YXNrSWRzKSB7XG4gICAgICAgICAgICBtb2R1bGUudGFza0lkcyA9IFtdO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFjb3Vyc2UucmVzcG9uc2libGVUZWFjaGVycykge1xuICAgICAgICBjb3Vyc2UucmVzcG9uc2libGVUZWFjaGVycyA9IFtdO1xuICAgIH1cbiAgICAvLyBFYXJsaWVyIHdyb25nIHNwZWxsaW5nIG9mIHJlc291cmNlc1xuICAgIGlmICgncmVzb3Vyc2VzJyBpbiBjb3Vyc2UgJiYgISgncmVzb3VyY2VzJyBpbiBjb3Vyc2UpKSB7XG4gICAgICAgIGNvdXJzZS5yZXNvdXJjZXMgPSBjb3Vyc2UucmVzb3Vyc2VzO1xuICAgICAgICBkZWxldGUgY291cnNlLnJlc291cnNlcztcbiAgICB9XG4gICAgaWYgKCFjb3Vyc2UucmVzb3VyY2VzKSB7XG4gICAgICAgIGNvdXJzZS5yZXNvdXJjZXMgPSBbXTtcbiAgICB9XG4gICAgaWYgKGdyYXBocykge1xuICAgICAgICBncmFwaHMuZm9yRWFjaChmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgICAgICAgIHN3aXRjaCAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd0YXNrcyc6XG4gICAgICAgICAgICAgICAgICAgIGNvdXJzZS50YXNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0YXNrKSB7IHJldHVybiBtaWdyYXRlVGFzayh0YXNrKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taWdyYXRlLWNvdXJzZS5qcy5tYXAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWdyYXRlVGFzayh0YXNrKSB7XG4gICAgaWYgKCF0YXNrLnJlc291cmNlcylcbiAgICAgICAgdGFzay5yZXNvdXJjZXMgPSBbXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pZ3JhdGUtdGFzay5qcy5tYXAiLCJpbXBvcnQgbWlncmF0ZUNvdXJzZSBmcm9tICcuL21pZ3JhdGUtY291cnNlJztcbmltcG9ydCBtaWdyYXRlVGFzayBmcm9tICcuL21pZ3JhdGUtdGFzayc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWdyYXRlKGRvYywgdGFibGUsIGdyYXBocykge1xuICAgIHN3aXRjaCAodGFibGUpIHtcbiAgICAgICAgY2FzZSBcImNvdXJzZXNcIjpcbiAgICAgICAgICAgIG1pZ3JhdGVDb3Vyc2UoZG9jLCBncmFwaHMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ0YXNrc1wiOlxuICAgICAgICAgICAgbWlncmF0ZVRhc2soZG9jKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pZ3JhdGUuanMubWFwIiwiaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBpbml0TWFwTWV0aG9kIH0gZnJvbSBcIi4vbWFwXCI7XG5pbXBvcnQgeyBWYWx1ZSB9IGZyb20gXCIuL3ZhbHVlXCI7XG5pbXBvcnQgeyBFbWl0dGVyIH0gZnJvbSBcIi4vZW1pdHRlclwiO1xudmFyIENvbGxlY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoQ29sbGVjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb2xsZWN0aW9uKHN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgc3Vic2NyaWJlKSB8fCB0aGlzO1xuICAgIH1cbiAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5fbWFwID0gZnVuY3Rpb24gKG1hcHBlcikge1xuICAgICAgICB0aHJvdyBcIm1peGVkaW5cIjtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24uZnJvbSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGlmICh4LnN1YnNjcmliZSlcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sbGVjdGlvbihmdW5jdGlvbiAocykgeyByZXR1cm4geC5zdWJzY3JpYmUocyk7IH0pO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSkge1xuICAgICAgICAgICAgdmFyIGVtaXR0ZXJfMSA9IG5ldyBFbWl0dGVyKHgpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xsZWN0aW9uKGZ1bmN0aW9uIChzKSB7IHJldHVybiBlbWl0dGVyXzEuc3Vic2NyaWJlKHMpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYnNlcnZhYmxlQ29sbGVjdGlvbi5mcm9tKCkgY2FuIG9ubHkgdGFrZSBhcnJheXMgb3Igb2JzZXJ2YWJsZXNcIik7XG4gICAgfTtcbiAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAobWFwcGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXAoZnVuY3Rpb24gKGl0ZW1zKSB7IHJldHVybiBpdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIG1hcHBlcihpdGVtKTsgfSk7IH0pO1xuICAgIH07XG4gICAgQ29sbGVjdGlvbi5wcm90b3R5cGUuZmxhdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcChmdW5jdGlvbiAoaXRlbXMpIHsgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgaXRlbXMpOyB9KTtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChmaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcChmdW5jdGlvbiAoaXRlbXMpIHsgcmV0dXJuIGl0ZW1zLmZpbHRlcihmaWx0ZXIpOyB9KTtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uIChvdGhlcikge1xuICAgICAgICByZXR1cm4gQ29sbGVjdGlvbi5mcm9tKHRoaXMudG9WYWx1ZSgpLmNvbWJpbmVMYXRlc3Qob3RoZXIpLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBtZSA9IF9hWzBdLCBvdGhlciA9IF9hWzFdO1xuICAgICAgICAgICAgcmV0dXJuIG1lLmNvbmNhdChvdGhlcik7XG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLm9yZGVyQnkgPSBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b1ZhbHVlKCkubWFwKGZ1bmN0aW9uIChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICB2YXIgYVByb3AgPSBhICYmIGFbcHJvcF07XG4gICAgICAgICAgICB2YXIgYlByb3AgPSBiICYmIGJbcHJvcF07XG4gICAgICAgICAgICByZXR1cm4gYVByb3AgPiBiUHJvcCA/IDEgOiBhUHJvcCA8IGJQcm9wID8gLTEgOiAwO1xuICAgICAgICB9KTsgfSkudG9Db2xsZWN0aW9uKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9KTtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLnRvVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgVmFsdWUoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIF90aGlzLnN1YnNjcmliZShzKTsgfSk7XG4gICAgfTtcbiAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5ncm91cEJ5ID0gZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9WYWx1ZSgpLm1hcChmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgICAgIHZhciBydiA9IHt9O1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gcnZbaXRlbVtwcm9wXV0gfHwgKHJ2W2l0ZW1bcHJvcF1dID0gW10pO1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJ2O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b1ZhbHVlKCkubWFwKGZ1bmN0aW9uIChhcnIpIHsgcmV0dXJuIGFyclswXTsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29sbGVjdGlvbjtcbn0oT2JzZXJ2YWJsZSkpO1xuZXhwb3J0IHsgQ29sbGVjdGlvbiB9O1xuQ29sbGVjdGlvbi5wcm90b3R5cGUuX21hcCA9IGluaXRNYXBNZXRob2QoQ29sbGVjdGlvbik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsZWN0aW9uLmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBWYWx1ZSB9IGZyb20gXCIuL3ZhbHVlXCI7XG52YXIgRW1pdHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhFbWl0dGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEVtaXR0ZXIoaW5pdGlhbFZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc3Vic2NyaWJlcnMgPSBfdGhpcy5zdWJzY3JpYmVycy5maWx0ZXIoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gX2FbMF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzICE9PSBvYnNlcnZlcjtcbiAgICAgICAgICAgICAgICB9KTsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmVycy5wdXNoKFtvYnNlcnZlciwgc3Vic2NyaXB0aW9uXSk7XG4gICAgICAgICAgICBpZiAoX3RoaXMuZXJyb3IpXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIobnVsbCwgX3RoaXMuZXJyb3IsIHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIoX3RoaXMudmFsdWUsIHVuZGVmaW5lZCwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgIH0pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN1YnNjcmliZXJzID0gW107XG4gICAgICAgIF90aGlzLnZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEVtaXR0ZXIucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5lcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2goKTtcbiAgICB9O1xuICAgIEVtaXR0ZXIucHJvdG90eXBlLmRpc3BhdGNoRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaCgpO1xuICAgIH07XG4gICAgRW1pdHRlci5wcm90b3R5cGUuX2Rpc3BhdGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBfYVswXSwgc3Vic2NyaXB0aW9uID0gX2FbMV07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyKF90aGlzLnZhbHVlLCBfdGhpcy5lcnJvciwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlcihudWxsLCBlcnIsIHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEVtaXR0ZXI7XG59KFZhbHVlKSk7XG5leHBvcnQgeyBFbWl0dGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbWl0dGVyLmpzLm1hcCIsInZhciBzdGFjayA9IFtdO1xudmFyIGN1cnJlbnRGaWJlciA9IG51bGw7XG52YXIgcHJvdmlkZXJzID0gW2Z1bmN0aW9uICgpIHsgcmV0dXJuIGN1cnJlbnRGaWJlcjsgfV07XG5mdW5jdGlvbiBwdXNoRmliZXIoZmliZXIpIHtcbiAgICBzdGFjay5wdXNoKGN1cnJlbnRGaWJlcik7XG4gICAgY3VycmVudEZpYmVyID0gZmliZXI7XG59XG5mdW5jdGlvbiBwb3BGaWJlcigpIHtcbiAgICBjdXJyZW50RmliZXIgPSBzdGFjay5wb3AoKTtcbn1cbmV4cG9ydCB2YXIgRmliZXJDb250ZXh0ID0ge1xuICAgIGdldCBjdXJyZW50KCkgeyByZXR1cm4gY3VycmVudEZpYmVyOyB9LFxuICAgIC8qcnVuOiBmdW5jdGlvbiByZXJ1bjxSPihmaWJlcjogRmliZXIsIGZuOiAoKT0+Uik6IFIgfCBQcm9taXNlPFI+IHtcbiAgICAgIHB1c2hGaWJlcihmaWJlcik7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZuKCkpO1xuICAgICAgfSBjYXRjaCAocCkge1xuICAgICAgICBpZiAocCAmJiB0eXBlb2YgcC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHAudGhlbigoKT0+cmVydW4oZmliZXIsIGZuKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHApO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBwb3BGaWJlcigpO1xuICAgICAgfVxuICAgIH0sKi9cbiAgICBhZGRQcm92aWRlcjogZnVuY3Rpb24gKGdldEN1cnJlbnRGaWJlcikge1xuICAgICAgICBwcm92aWRlcnMucHVzaChnZXRDdXJyZW50RmliZXIpO1xuICAgICAgICBzZXRDdXJyZW50R2V0dGVyRnJvbVByb3ZpZGVycygpO1xuICAgIH0sXG4gICAgcmVtb3ZlUHJvdmlkZXI6IGZ1bmN0aW9uIChnZXRDdXJyZW50RmliZXIpIHtcbiAgICAgICAgcHJvdmlkZXJzID0gcHJvdmlkZXJzLmZpbHRlcihmdW5jdGlvbiAocCkgeyByZXR1cm4gcCAhPT0gZ2V0Q3VycmVudEZpYmVyOyB9KTtcbiAgICAgICAgc2V0Q3VycmVudEdldHRlckZyb21Qcm92aWRlcnMoKTtcbiAgICB9XG59O1xuZnVuY3Rpb24gc2V0Q3VycmVudEdldHRlckZyb21Qcm92aWRlcnMoKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpYmVyQ29udGV4dCwgXCJjdXJyZW50XCIsIHtcbiAgICAgICAgZ2V0OiBwcm92aWRlcnMucmVkdWNlKGZ1bmN0aW9uIChwLCBjKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBwKCkgfHwgYygpOyB9OyB9KSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBFcnJvcihcIlVzZSBGaWJlckNvbnRleHQucHVzaCgpIHRvIGNoYW5nZSBjdXJyZW50IGZpYmVyXCIpOyB9XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWJlci1jb250ZXh0LmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vb2JzZXJ2YWJsZSc7XG5leHBvcnQgKiBmcm9tICcuL3ZhbHVlJztcbmV4cG9ydCAqIGZyb20gJy4vY29sbGVjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2VtaXR0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9maWJlci1jb250ZXh0Jztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBpbml0TWFwTWV0aG9kKGN0b3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1hcHBlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IGN0b3IoZnVuY3Rpb24gKG9ic2VydmVyKSB7IHJldHVybiBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlLCBlcnJvciwgc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIobnVsbCwgZXJyb3IsIHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIobWFwcGVyKHZhbHVlKSwgZXJyb3IsIHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIobnVsbCwgZXJyLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7IH0pO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXAuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIG1peGluKHRhcmdldFByb3RvLCBtaXhpblByb3RvKSB7XG4gICAgdmFyIHByb3BzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgcHJvcHNbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuIHRhcmdldFByb3RvW3Byb3BdID0gbWl4aW5Qcm90b1twcm9wXTsgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXhpbi5qcy5tYXAiLCJ2YXIgT2JzZXJ2YWJsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvL3N0YXRpYyBnZXQgW1N5bWJvbC5zcGVjaWVzXSgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlKF9zdWJzY3JpYmUpIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlID0gX3N1YnNjcmliZTtcbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlKGZ1bmN0aW9uIChpdGVtcywgZXJyb3IsIHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyKGl0ZW1zLCBlcnJvciwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlcihudWxsLCBlcnIsIHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBvYnNlcnZlcihudWxsLCBlcnJvciwgeyB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkgeyB9IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZTtcbn0oKSk7XG5leHBvcnQgeyBPYnNlcnZhYmxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYnNlcnZhYmxlLmpzLm1hcCIsImltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcIi4vb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgaW5pdE1hcE1ldGhvZCB9IGZyb20gXCIuL21hcFwiO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gXCIuL2NvbGxlY3Rpb25cIjtcbmltcG9ydCB7IEZpYmVyQ29udGV4dCB9IGZyb20gJy4vZmliZXItY29udGV4dCc7XG52YXIgVmFsdWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoVmFsdWUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVmFsdWUoc3Vic2NyaWJlKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBzdWJzY3JpYmUpIHx8IHRoaXM7XG4gICAgfVxuICAgIFZhbHVlLmZyb20gPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICBpZiAoeC5zdWJzY3JpYmUpXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZhbHVlKGZ1bmN0aW9uIChzKSB7IHJldHVybiB4LnN1YnNjcmliZShzKTsgfSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZhbHVlLmZyb20oKSBjYW4gb25seSB0YWtlIG9ic2VydmFibGVzXCIpO1xuICAgIH07XG4gICAgVmFsdWUucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXNvbHZlZCA9IGZhbHNlLCByZXN1bHQsIGVyciwgbm90aWZ5O1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlLCBlcnJvciwgc3Vic2NpcHRpb24pIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgZXJyID0gZXJyb3I7XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgbm90aWZ5KVxuICAgICAgICAgICAgICAgIG5vdGlmeShudWxsLCBlcnJvciwgc3Vic2NpcHRpb24pO1xuICAgICAgICAgICAgZWxzZSBpZiAobm90aWZ5KVxuICAgICAgICAgICAgICAgIG5vdGlmeSh2YWx1ZSwgbnVsbCwgc3Vic2NpcHRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc29sdmVkKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudEZpYmVyID0gRmliZXJDb250ZXh0LmN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRGaWJlcikge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgRmliZXIgQ29udGV4dFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IGN1cnJlbnRGaWJlci5zdWJzY3JpcHRpb25zLCBvYnNlcnZlciA9IGN1cnJlbnRGaWJlci5vYnNlcnZlcjtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgbm90aWZ5ID0gb2JzZXJ2ZXI7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIG5vdGlmeSA9IGZ1bmN0aW9uICh2YWx1ZSwgZXJyb3IsIHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBWYWx1ZS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZShmdW5jdGlvbiAodmFsdWUsIGVycm9yLCBzdWJzY2lwdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIHN1YnNjaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBWYWx1ZS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgVmFsdWUoZnVuY3Rpb24gKG9ic2VydmVyKSB7IHJldHVybiBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlLCBlcnJvciwgc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIobnVsbCwgZXJyb3IsIHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICBlbHNlIGlmIChmbih2YWx1ZSkpXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIodmFsdWUsIGVycm9yLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICB9KTsgfSk7XG4gICAgfTtcbiAgICBWYWx1ZS5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByZWZpeCwgeCk7XG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBWYWx1ZS5wcm90b3R5cGUudG9Db2xsZWN0aW9uID0gZnVuY3Rpb24gKG1hcHBlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IENvbGxlY3Rpb24oZnVuY3Rpb24gKHMpIHsgcmV0dXJuIF90aGlzLm1hcChtYXBwZXIpLnN1YnNjcmliZShzKTsgfSk7XG4gICAgfTtcbiAgICBWYWx1ZS5wcm90b3R5cGUuY29tYmluZUxhdGVzdCA9IGZ1bmN0aW9uIChvdGhlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFZhbHVlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IFtudWxsLCBudWxsXTtcbiAgICAgICAgICAgIHZhciBteVN1YnNjcmlwdGlvbiwgb3RoZXJTdWJzY3JpcHRpb247XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG15U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG15U3Vic2NyaXB0aW9uID0gX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uIChpdGVtcywgZXJyb3IsIHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlcihudWxsLCBlcnJvciwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWVzWzBdID0gaXRlbXM7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlc1sxXSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIodmFsdWVzLCBudWxsLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvdGhlclN1YnNjcmlwdGlvbiA9IG90aGVyLnN1YnNjcmliZShmdW5jdGlvbiAodmFsdWUsIGVycm9yLCBzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIobnVsbCwgZXJyb3IsIHN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlc1sxXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXNbMF0gIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyKHZhbHVlcywgbnVsbCwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBWYWx1ZS5wcm90b3R5cGUuc3dpdGNoTWFwID0gZnVuY3Rpb24gKG1hcHBlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFZhbHVlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgdmFyIG1hcHBlZFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIHZhciByZXR1cm5lZFN1YnNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hcHBlZFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBwZWRTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IF90aGlzLnN1YnNjcmliZShmdW5jdGlvbiAoaXRlbSwgZXJyb3IsIHMpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBzO1xuICAgICAgICAgICAgICAgIGlmIChtYXBwZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwcGVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIG1hcHBlZFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIobnVsbCwgZXJyb3IsIHJldHVybmVkU3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlT3JWYWx1ZSA9IG1hcHBlcihpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYnNlcnZhYmxlT3JWYWx1ZSAmJiB0eXBlb2Ygb2JzZXJ2YWJsZU9yVmFsdWUuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGVkU3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZU9yVmFsdWUuc3Vic2NyaWJlKGZ1bmN0aW9uICh2YWx1ZSwgZXJyb3IsIHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGVkU3Vic2NyaXB0aW9uID0gcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIodmFsdWUsIGVycm9yLCByZXR1cm5lZFN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlcihvYnNlcnZhYmxlT3JWYWx1ZSwgbnVsbCwgc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyKG51bGwsIGVycm9yLCBzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuZWRTdWJzY3JpcHRpb247XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFZhbHVlO1xufShPYnNlcnZhYmxlKSk7XG5leHBvcnQgeyBWYWx1ZSB9O1xuVmFsdWUucHJvdG90eXBlLm1hcCA9IGluaXRNYXBNZXRob2QoVmFsdWUpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmFsdWUuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9qcy9kaXN0L2pzL29ic2VydmFibGUnO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9qcy9kaXN0L2pzL2tlZC1iYWNrZW5kLXJlcG8nO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2VuLVNHXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIHN2fGVuXCI7IiwiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9jb250cmFjdHMva2VkLW1vZGVsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVc2VyQ2xhaW1zICh1c2VyOiBVc2VyKSB7XG4gIHJldHVybiBbe1xuICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICB2YWx1ZTogdXNlci5tYWlsXG4gIH0se1xuICAgIHR5cGU6IFwic2Nob29sXCIsXG4gICAgdmFsdWU6IHVzZXIuc2Nob29sXG4gIH1dLmNvbmNhdCh1c2VyLnJvbGVzLm1hcChyb2xlID0+ICh7XG4gICAgdHlwZTogXCJyb2xlXCIsXG4gICAgdmFsdWU6IHJvbGVcbiAgfSkpKS5jb25jYXQodXNlci5yb2xlcy5tYXAocm9sZSA9PiAoe1xuICAgIHR5cGU6IFwic2Nob29sUm9sZVwiLFxuICAgIHZhbHVlOiB1c2VyLnNjaG9vbCArIFwiL1wiICsgcm9sZVxuICB9KSkpO1xufVxuIiwiaW1wb3J0IHsgQWNjZXNzQ2xhaW0sIERvY3VtZW50QWNjZXNzLCBoYXNBY2Nlc3MgYXMgX2hhc0FjY2VzcywgQWNjZXNzUmlnaHQgfSBmcm9tICdrZWRiYWNrZW5kL2NsaWVudCc7XG5pbXBvcnQgeyBEb2N1bWVudCB9IGZyb20gJ2tlZGJhY2tlbmQvbW9kZWxzJztcbmltcG9ydCBnZXRVc2VyQ2xhaW1zIGZyb20gJy4vZ2V0LXVzZXItY2xhaW1zJztcbmltcG9ydCB7IHBhcnNlUXVlcnlTdHJpbmcsIGdlbmVyYXRlUXVlcnlTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbHMvcXVlcnktc3RyaW5nXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vY29udHJhY3RzL2tlZC1tb2RlbHMnO1xuZXhwb3J0IHsgZ2V0VXNlckNsYWltcyB9O1xuXG5leHBvcnQgY29uc3QgSU1QRVJTT05BVElPTl9RVUVSWV9QQVJBTVMgPSBbXG4gIFwidXNlclwiLFxuICBcInJvbGVcIixcbiAgXCJzY2hvb2xcIixcbiAgXCJkZWJ1Z1wiLFxuICBcInRlc3RWZXJzaW9uXCIsXG4gIFwidGVzdHZlcnNpb25cIixcbiAgXCJmZWF0dXJlc1wiLFxuICBcInNjaG9vbFR5cGVcIixcbiAgXCJzY2hvb2x0eXBlXCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzQWNjZXNzKHVzZXI6IFVzZXIsIGRvYzogRG9jdW1lbnQsIHJlcXVlc3RlZFJpZ2h0OiBBY2Nlc3NSaWdodCkge1xuICB2YXIgY2xhaW1zID0gZ2V0VXNlckNsYWltcyh1c2VyKTtcbiAgaWYgKHJlcXVlc3RlZFJpZ2h0ICE9PSAnUicgJiYgdXNlci50dXRvckZvcikge1xuICAgIGNsYWltcyA9IGNsYWltcy5maWx0ZXIoY2xhaW0gPT4gY2xhaW0udHlwZSAhPT0gJ2VtYWlsJyk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IF9oYXNBY2Nlc3MoRG9jdW1lbnRBY2Nlc3MuZnJvbVN0cmluZ0FycmF5KGRvYy5hY2wgfHwgW10pLCBjbGFpbXMsIHJlcXVlc3RlZFJpZ2h0KTtcbiAgLy9jb25zb2xlLmxvZyhgSGFzICR7cmVxdWVzdGVkUmlnaHR9IGFjY2VzcyB0byAke2RvYy5uYW1lfS8ke2RvYy5pZH06ICR7cmVzdWx0fWApO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzUmVhZEFjY2Vzcyh1c2VyOiBVc2VyLCBkb2M6IERvY3VtZW50KSB7XG4gIHJldHVybiBoYXNBY2Nlc3ModXNlciwgZG9jLCAnUicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzV3JpdGVBY2Nlc3ModXNlcjogVXNlciwgZG9jOiBEb2N1bWVudCkge1xuICByZXR1cm4gaGFzQWNjZXNzKHVzZXIsIGRvYywgJ1cnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1NoYXJlQWNjZXNzKHVzZXI6IFVzZXIsIGRvYzogRG9jdW1lbnQpIHtcbiAgcmV0dXJuIGhhc0FjY2Vzcyh1c2VyLCBkb2MsICdTJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RlYWNoZXJBdFNjaG9vbCh1c2VyOiBVc2VyLCBzY2hvb2w6IHN0cmluZykge1xuICBjb25zdCBpc1RlYWNoZXIgPSB1c2VyLnJvbGVzLnNvbWUocm9sZSA9PiByb2xlID09PSAnRU1QTE9ZRUUnIHx8IHJvbGUgPT09ICdBRE1JTicpO1xuICBjb25zdCBiZWxvbmdzVG9TY2hvb2wgPSAoc2Nob29sfHxcIlwiKS50b0xvd2VyQ2FzZSgpID09PSB1c2VyLnNjaG9vbC50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gKGlzVGVhY2hlciAmJiBiZWxvbmdzVG9TY2hvb2wpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBZG1pbk9yVGVhY2hlckF0U2Nob29sKHVzZXI6IFVzZXIsIHNjaG9vbDogc3RyaW5nKSB7XG4gIHJldHVybiB1c2VyLnJvbGVzLmluY2x1ZGVzKFwiQURNSU5cIikgfHwgaXNUZWFjaGVyQXRTY2hvb2wodXNlciwgc2Nob29sKTtcbn1cblxuZXhwb3J0IGNvbnN0IGltcGVyc29uYXRpb25FbnYgPSB7XG4gIGFjdEFzIChvcHRpb25zOiB7cm9sZSwgc2Nob29sLCB1cmw/fSkge1xuICAgIGNvbnN0IHtyb2xlLCBzY2hvb2wsIHVybH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IGN1cnJlbnRRdWVyeSA9IHBhcnNlUXVlcnlTdHJpbmcobG9jYXRpb24uc2VhcmNoKTtcbiAgICBjb25zdCBuZXdRdWVyeSA9IHsuLi5jdXJyZW50UXVlcnksIHJvbGUsIHNjaG9vbH07XG4gICAgY29uc3QgbmV3UXVlcnlTdHJpbmcgPSBnZW5lcmF0ZVF1ZXJ5U3RyaW5nKG5ld1F1ZXJ5KTtcbiAgICBpZiAodXJsKSB7XG4gICAgICBsb2NhdGlvbi5ocmVmID0gYCR7dXJsfSR7bmV3UXVlcnlTdHJpbmd9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaGFzaCA9IFwiI1wiO1xuICAgICAgbG9jYXRpb24uc2VhcmNoID0gbmV3UXVlcnlTdHJpbmc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RBcyhvcHRpb25zOiB7cm9sZSwgc2Nob29sLCB1cmw/fSkge1xuICBpbXBlcnNvbmF0aW9uRW52LmFjdEFzKG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlc2VydmVJbXBlcnNvbmF0aW9uUXVlcnkgKHVybDogc3RyaW5nLCBxdWVyeToge1tuYW1lOiBzdHJpbmddIDogc3RyaW5nfSkge1xuICBjb25zdCBjdXJyZW50UXVlcnkgPSBwYXJzZVF1ZXJ5U3RyaW5nKGxvY2F0aW9uLnNlYXJjaCk7XG4gIGNvbnN0IHByZXNlcnZlZFF1ZXJ5ID0ge307XG4gIGZvciAoY29uc3QgcGFyYW0gb2YgSU1QRVJTT05BVElPTl9RVUVSWV9QQVJBTVMpIHtcbiAgICBpZiAoY3VycmVudFF1ZXJ5W3BhcmFtXSkgcHJlc2VydmVkUXVlcnlbcGFyYW1dID0gY3VycmVudFF1ZXJ5W3BhcmFtXTtcbiAgfVxuICBjb25zdCBuZXdRdWVyeVN0cmluZyA9IGdlbmVyYXRlUXVlcnlTdHJpbmcoey4uLnByZXNlcnZlZFF1ZXJ5LCAuLi5xdWVyeX0pO1xuICBjb25zdCBwSGFzaCA9IHVybC5pbmRleE9mKCcjJyk7XG4gIHJldHVybiBwSGFzaCA+PSAwID9cbiAgICBgJHt1cmwuc3Vic3RyKDAscEhhc2gpfSR7bmV3UXVlcnlTdHJpbmd9JHt1cmwuc3Vic3RyKHBIYXNoKX1gIDpcbiAgICBgJHt1cmx9JHtuZXdRdWVyeVN0cmluZ31gO1xufVxuIiwiaW1wb3J0IHsgRURTQ291cnNlLCBFRFNBc3Nlc3NtZW50LCBFRFNTdHVkeVBsYW4sIEVEU1N0dWRlbnRGdXR1cmVBYmlsaXR5LCBFRFNTdHVkZW50LCBFRFNUdWl0aW9uR3JvdXAsIEVEU1R1aXRpb25TdHVkZW50LCBFRFNUZWFjaGVyLCBNb2NrRURTQWNhZGVtaWNZZWFyLCBNb2NrRURTRGF0ZVJhbmdlIH0gZnJvbSAnLi4vY29udHJhY3RzL2Vkcyc7XG5pbXBvcnQgeyBSZXN0Q2xpZW50IH0gZnJvbSAna2VkYmFja2VuZC9jbGllbnQnO1xuaW1wb3J0IHsgSXNvbW9ycGhpY0VudiwgQmVhcmVyUHJvdmlkZXIsIEh0dHBFcnJvciB9IGZyb20gJ2tlZGJhY2tlbmQvY2xpZW50JztcbmltcG9ydCB7IFNjaG9vbE1vbWVudCwgZ2V0VGVybVN0YXJFbmREYXRlIH0gZnJvbSAnLi4vdXRpbHMvc2Nob29sLW1vbWVudCc7XG5pbXBvcnQgeyBTY2hvb2xUZXJtIH0gZnJvbSAnLi4vdXRpbHMvc2Nob29sLXRlcm0nO1xuaW1wb3J0IHsgZGF0ZVRpbWVSZXZpdmVyLCBMIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IG1vY2tKc29uRmlsZSBmcm9tICcuL21vY2svbW9jay1lZHMtZGF0YS5qc29uJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFN1c3BlbnNlQmFzZWRBUEksIG1ha2VTdXNwZW5zZUFwaSB9IGZyb20gJy4uL3V0aWxzL21ha2Utc3VzcGVuc2UtYXBpJztcblxuZXhwb3J0IGNsYXNzIEVkc0NsaWVudCB7XG4gIGh0dHA6IFJlc3RDbGllbnQ7XG4gIHVzZXJFbWFpbEdldHRlcjogKCk9PnN0cmluZztcbiAgc3VzcGVuc2U6IFN1c3BlbnNlQmFzZWRBUEk8RWRzQ2xpZW50PjtcblxuICBjb25zdHJ1Y3RvciAoXG4gICAgaXNvbW9ycGhpYzogSXNvbW9ycGhpY0VudixcbiAgICBiYXNlVXJsOiBzdHJpbmcsXG4gICAgYmVhcmVyUHJvdmlkZXI6IEJlYXJlclByb3ZpZGVyLFxuICAgIHVzZXJFbWFpbEdldHRlcjogKCk9PnN0cmluZ1xuICApIHtcbiAgICB0aGlzLmh0dHAgPSBuZXcgUmVzdENsaWVudCAoaXNvbW9ycGhpYywgYmFzZVVybCwge2JlYXJlclByb3ZpZGVyfSk7XG4gICAgdGhpcy51c2VyRW1haWxHZXR0ZXIgPSB1c2VyRW1haWxHZXR0ZXI7XG4gICAgY29uc3QgaXNBcGlNZXRob2QgPSBtID0+XG4gICAgICB0eXBlb2YgdGhpc1ttXSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgbSAhPT0gJ2NvbnN0cnVjdG9yJyAmJiAvLyBTaW5jZSBtYWtlU3VzcGVuc2VBcGkoKSB3YWxrcyBwcm90b3R5cGUgY2hhaW5cbiAgICAgIG0gIT09ICdwcml2YXRpemluZ0NhY2hlQnVzdCcgJiZcbiAgICAgIG0gIT09ICd1c2VyRW1haWxHZXR0ZXInIC8vIExpc3Qgbm9uLUFQSSBtZXRob2RzIGhlcmUuLi5cbiAgICAgIDtcblxuICAgIE9iamVjdC5rZXlzKEVkc0NsaWVudC5wcm90b3R5cGUpLmZvckVhY2gobWV0aG9kID0+IHtcbiAgICAgIGlmIChpc0FwaU1ldGhvZChtZXRob2QpKSB7XG4gICAgICAgIHRoaXNbbWV0aG9kXSA9IGF2b2lkU2ltdWx0YW5vdXNDYWxscyh0aGlzW21ldGhvZF0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc3VzcGVuc2UgPSBtYWtlU3VzcGVuc2VBcGkodGhpcywge2lzQXBpTWV0aG9kfSk7XG4gIH1cblxuICBwcml2YXRlIHByaXZhdGl6aW5nQ2FjaGVCdXN0KCkge1xuICAgIHJldHVybiB7dXNlcjogdGhpcy51c2VyRW1haWxHZXR0ZXIoKX07XG4gIH1cblxuLyoqXG4gICAqIFJldHJpZXZlIGFjdGl2ZSBjb3Vyc2VzIGZvciBjdXJyZW50IGxvZ2dlZCBpbiBzdHVkZW50LlxuICAgKlxuICAgKiBAcGFyYW0gY291cnNlQ29kZSBTaG9ydC1uYW1lIG9mIHRoZSBjb3Vyc2UuIE9wdGlvbmFsLlxuICAgKi9cbiAgYXN5bmMgZ2V0QWN0aXZlQ291cnNlcyhxOiB7Y291cnNlQ29kZT86IHN0cmluZywgcGVyaW9kTmFtZTogc3RyaW5nfSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBxdWVyeTphbnkgPSB0aGlzLnByaXZhdGl6aW5nQ2FjaGVCdXN0KCk7XG4gICAgICBpZiAocSkge1xuICAgICAgICBpZiAocS5jb3Vyc2VDb2RlKSBxdWVyeS5Db3Vyc2VDb2RlID0gcS5jb3Vyc2VDb2RlO1xuICAgICAgICBpZiAocS5wZXJpb2ROYW1lKSBxdWVyeS5QZXJpb2ROYW1lID0gcS5wZXJpb2ROYW1lO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5odHRwLmdldChcInN0dWRlbnRhY3RpdmVjb3Vyc2VzXCIsIHF1ZXJ5KTtcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9IDIwMCkgdGhyb3cgbmV3IEh0dHBFcnJvcihyZXMuc3RhdHVzLCBhd2FpdCByZXMudGV4dCgpKTtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgcmV0dXJuIGpzb24uY291cnNlcyBhcyBFRFNDb3Vyc2VbXTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZyb20gRURTOiBcIiArIGV4KTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihMYEt1bmRlIHR5dsOkcnIgaW50ZSBsYWRkYSB0ZXJtaW5zbcOlbCBlbGxlciBhdmtsYXJhZGUgc3RlZyBmcsOlbiBFRFMuIEbDtnJzw7ZrIGlnZW4gc2VuYXJlLi4uYCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGxhdGVzdCBhc3Nlc3NtZW50cyBmb3IgY3VycmVudCBsb2dnZWQgaW4gdXNlci5cbiAgICogXG4gICAqIEBwYXJhbSBsaW1pdCBPcHRpb25hbCBsaW1pdFxuICAgKi9cbiAgYXN5bmMgZ2V0TGF0ZXN0QXNzZXNzbWVudHMobGltaXQ/OiBudW1iZXIpIHtcbiAgICBjb25zdCBxdWVyeTphbnkgPSB0aGlzLnByaXZhdGl6aW5nQ2FjaGVCdXN0KCk7XG4gICAgaWYgKCFpc05hTihsaW1pdCkpIHF1ZXJ5LkNvdW50ID0gbGltaXQ7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5odHRwLmdldChcInN0dWRlbnRhc3Nlc3NtZW50c1wiLCBxdWVyeSk7XG4gICAgaWYgKHJlcy5zdGF0dXMgIT0gMjAwKSB0aHJvdyBuZXcgSHR0cEVycm9yKHJlcy5zdGF0dXMsIGF3YWl0IHJlcy50ZXh0KCkpO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiBqc29uLmFzc2Vzc21lbnRzIGFzIEVEU0Fzc2Vzc21lbnRbXTsgICAgXG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgc3R1ZHlwbGFucyBmb3IgY3VycmVudCBsb2dnZWQtaW4gdXNlclxuICAgKi9cbiAgYXN5bmMgZ2V0U3R1ZGVudEdvYWxzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoXCJzdHVkZW50Z29hbHNcIiwgdGhpcy5wcml2YXRpemluZ0NhY2hlQnVzdCgpKTtcbiAgICBpZiAocmVzLnN0YXR1cyAhPSAyMDApIHRocm93IG5ldyBIdHRwRXJyb3IocmVzLnN0YXR1cywgYXdhaXQgcmVzLnRleHQoKSk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGpzb24uc3R1ZGVudEdvYWxzIGFzIEVEU1N0dWR5UGxhbltdOyAgICBcbiAgfVxuXG4gIGFzeW5jIGdldFN0dWRlbnRGdXR1cmVBYmlsaXRpZXMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5odHRwLmdldChcInN0dWRlbnRGdXR1cmVBYmlsaXRpZXNcIiwgdGhpcy5wcml2YXRpemluZ0NhY2hlQnVzdCgpKTtcbiAgICBpZiAocmVzLnN0YXR1cyAhPSAyMDApIHRocm93IG5ldyBIdHRwRXJyb3IocmVzLnN0YXR1cywgYXdhaXQgcmVzLnRleHQoKSk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGpzb24uc3R1ZGVudEZ1dHVyZUFiaWxpdGllcyBhcyBFRFNTdHVkZW50RnV0dXJlQWJpbGl0eVtdO1xuICB9XG5cbiAgYXN5bmMgZ2V0VGVhY2hlclR1dG9yU3R1ZGVudHMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5odHRwLmdldChcInRlYWNoZXJ0dXRvcnN0dWRlbnRzXCIsIHRoaXMucHJpdmF0aXppbmdDYWNoZUJ1c3QoKSk7XG4gICAgaWYgKHJlcy5zdGF0dXMgIT0gMjAwKSB0aHJvdyBuZXcgSHR0cEVycm9yKHJlcy5zdGF0dXMsIGF3YWl0IHJlcy50ZXh0KCkpO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiBqc29uLnN0dWRlbnRzIGFzIEVEU1N0dWRlbnRbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRTY2hvb2xUdWl0aW9uR3JvdXBzKClcbiAgICogXG4gICAqIFJldHVybiB0dWl0aW9uZ3JvdXBzIGZvciBzY2hvb2xcbiAgICogXG4gICAqIEBwYXJhbSBzY2hvb2xOYW1lIC0gbmFtZSBvZiBzY2hvb2xcbiAgICogQHBhcmFtIGNvdXJzZUNvZGUgLSBTa29sdmVya2V0cyBjb2RlIGZvciBjb3Vyc2VcbiAgICovXG4gIGFzeW5jIGdldFNjaG9vbFR1aXRpb25Hcm91cHMocToge3NjaG9vbE5hbWU6IHN0cmluZywgY291cnNlQ29kZTogc3RyaW5nfSkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoXCJTY2hvb2xUdWl0aW9uR3JvdXBzXCIsIHsuLi50aGlzLnByaXZhdGl6aW5nQ2FjaGVCdXN0KCksIC4uLnF9KTtcbiAgICBpZiAocmVzLnN0YXR1cyAhPSAyMDApIHRocm93IG5ldyBIdHRwRXJyb3IocmVzLnN0YXR1cywgYXdhaXQgcmVzLnRleHQoKSk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGpzb24uc2Nob29sVHVpdGlvbkdyb3VwcyBhcyBFRFNUdWl0aW9uR3JvdXBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRUdWl0aW9uR3JvdXBTdHVkZW50cygpXG4gICAqIFxuICAgKiBSZXR1cm4gbmFtZSBhbmQgbWFpbGFkcmVzc2VzIGZvciB0dXRpdGlvbmdyb3VwcyBpbiBzY2hvb2xzXG4gICAqIFxuICAgKiBAcGFyYW0gc2Nob29sTmFtZSAtIG5hbWUgb2Ygc2Nob29sXG4gICAqIEBwYXJhbSB0dWl0aW9uR3JvdXBOYW1lIC0gdHVpdGlvbiBncnVvcCBuYW1lIGluIEVEU1xuICAgKi9cbiAgYXN5bmMgZ2V0VHVpdGlvbkdyb3VwU3R1ZGVudHMocToge3NjaG9vbE5hbWU6IHN0cmluZywgdHVpdGlvbkdyb3VwTmFtZTogc3RyaW5nfSkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoXCJUdWl0aW9uR3JvdXBTdHVkZW50c1wiLCB7Li4udGhpcy5wcml2YXRpemluZ0NhY2hlQnVzdCgpLCAuLi5xfSk7XG4gICAgaWYgKHJlcy5zdGF0dXMgIT0gMjAwKSB0aHJvdyBuZXcgSHR0cEVycm9yKHJlcy5zdGF0dXMsIGF3YWl0IHJlcy50ZXh0KCkpO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiBqc29uLnR1aXRpb25Hcm91cFN0dWRlbnRzIGFzIEVEU1R1aXRpb25TdHVkZW50W107XG4gIH1cblxuICAvKipcbiAgICogZ2V0U2Nob29sVGVhY2hlcnMoKVxuICAgKiBcbiAgICogUmV0dXJuIG5hbWUgYW5kIG1haWxhZHJlc3NlcyBmb3IgdHV0aXRpb25ncm91cHMgaW4gc2Nob29sc1xuICAgKiBcbiAgICogQHBhcmFtIHNjaG9vbE5hbWUgLSBuYW1lIG9mIHNjaG9vbFxuICAgKi9cbiAgYXN5bmMgZ2V0U2Nob29sVGVhY2hlcnMocToge3NjaG9vbE5hbWU6IHN0cmluZ30pIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KFwiU2Nob29sVGVhY2hlcnNcIiwgey4uLnRoaXMucHJpdmF0aXppbmdDYWNoZUJ1c3QoKSwgLi4ucX0pO1xuICAgIGlmIChyZXMuc3RhdHVzICE9IDIwMCkgdGhyb3cgbmV3IEh0dHBFcnJvcihyZXMuc3RhdHVzLCBhd2FpdCByZXMudGV4dCgpKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4ganNvbi5zY2hvb2xUZWFjaGVycyBhcyBFRFNUZWFjaGVyW107XG4gIH1cbiAgLy8gd2UgYXNzdW1lIHRoYXQgdGhlIEVEUyB3aWxsIHJldHVybiB0aGUgY3VycmVudCBhY2FkZW1pYyB5ZWFyIGRhdGVzIGRldGVybWluZWQgYnkgdGhlIGN1cnJlbnQgZGF0ZVxuICBhc3luYyBnZXRBY2FkZW1pY1llYXJUZXJtcyhzY2hvb2xMb2NhbGU6IHN0cmluZywgZGF0ZTogRGF0ZSkge1xuICAgIC8vIG1vY2sgZGF0YVxuICAgIHN3aXRjaCAoc2Nob29sTG9jYWxlKSB7XG4gICAgICBjYXNlICdlbl9zaW4nOlxuICAgICAgcmV0dXJuIG1vY2tKc29uRmlsZS5Tb3V0aEluZGlhLmZpbHRlcihmID0+IG1vbWVudChkYXRlKS5pc1NhbWVPckFmdGVyKGYuZmlyc3RUZXJtLnN0YXJ0RGF0ZSkgJiYgbW9tZW50KGRhdGUpLmlzU2FtZU9yQmVmb3JlKGYuc2Vjb25kVGVybS5lbmREYXRlKSlbMF0gYXMgTW9ja0VEU0FjYWRlbWljWWVhcjtcbiAgICAgIGNhc2UgJ2VuX25pbic6XG4gICAgICByZXR1cm4gbW9ja0pzb25GaWxlLk5vcnRoSW5kaWEuZmlsdGVyKGYgPT4gbW9tZW50KGRhdGUpLmlzU2FtZU9yQWZ0ZXIoZi5maXJzdFRlcm0uc3RhcnREYXRlKSAmJiBtb21lbnQoZGF0ZSkuaXNTYW1lT3JCZWZvcmUoZi5zZWNvbmRUZXJtLmVuZERhdGUpKVswXSBhcyBNb2NrRURTQWNhZGVtaWNZZWFyO1xuICAgICAgY2FzZSAnc3YnOlxuICAgICAge1xuICAgICAgdmFyIGhvbGlkYXlzID0gW10gYXMgTW9ja0VEU0RhdGVSYW5nZVtdO1xuICAgICAgdmFyIGZpcnN0VGVybU1vbWVudCA9IGdldFRlcm1TdGFyRW5kRGF0ZShkYXRlLCB0cnVlKTtcbiAgICAgIHZhciBzZWNvbmRUZXJtTW9tZW50ID0gZ2V0VGVybVN0YXJFbmREYXRlKGRhdGUsIGZhbHNlKTtcblxuICAgICAgdmFyIHN0YXJ0Rmlyc3RUZXJtRGF0ZSA9IGZpcnN0VGVybU1vbWVudFswXTtcbiAgICAgIHZhciBzdGFydFNlY29uZFRlcm1EYXRlID0gc2Vjb25kVGVybU1vbWVudFswXTtcbiAgICAgIHZhciBlbmRGaXJzdFRlcm1EYXRlID0gZmlyc3RUZXJtTW9tZW50WzFdO1xuICAgICAgdmFyIGVuZFNlY29uZFRlcm1EYXRlID0gc2Vjb25kVGVybU1vbWVudFsxXTtcblxuICAgICAgY29uc3QgZmlyc3RUZXJtID0ge3N0YXJ0RGF0ZTogbmV3IERhdGUoc3RhcnRGaXJzdFRlcm1EYXRlLnllYXIoKSwgc3RhcnRGaXJzdFRlcm1EYXRlLm1vbnRoKCksIHN0YXJ0Rmlyc3RUZXJtRGF0ZS5kYXRlKCkpLnRvRGF0ZVN0cmluZygpLCBlbmREYXRlOiBuZXcgRGF0ZShzdGFydEZpcnN0VGVybURhdGUueWVhcigpLCBlbmRGaXJzdFRlcm1EYXRlLm1vbnRoKCksIGVuZEZpcnN0VGVybURhdGUuZGF0ZSgpKS50b0RhdGVTdHJpbmcoKX07XG4gICAgICBjb25zdCBzZWNvbmRUZXJtID0ge3N0YXJ0RGF0ZTogbmV3IERhdGUoc3RhcnRTZWNvbmRUZXJtRGF0ZS55ZWFyKCksIHN0YXJ0U2Vjb25kVGVybURhdGUubW9udGgoKSwgc3RhcnRTZWNvbmRUZXJtRGF0ZS5kYXRlKCkpLnRvRGF0ZVN0cmluZygpLCBlbmREYXRlOiBuZXcgRGF0ZShzdGFydFNlY29uZFRlcm1EYXRlLnllYXIoKSwgZW5kU2Vjb25kVGVybURhdGUubW9udGgoKSwgZW5kU2Vjb25kVGVybURhdGUuZGF0ZSgpKS50b0RhdGVTdHJpbmcoKX07XG4gICAgICByZXR1cm4ge2ZpcnN0VGVybSwgc2Vjb25kVGVybSwgaG9saWRheXN9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuZXhwb3J0IGNsYXNzIEVEU1BlcmlvZCB7XG4gIHBlcmlvZDogc3RyaW5nO1xuICB0ZXJtOiAnQVQnIHwgJ1NUJztcbiAgeWVhcjogbnVtYmVyO1xuICBjb25zdHJ1Y3RvciAocGVyaW9kU3RyaW5nT3JTY2hvb2xUZXJtOiBzdHJpbmcgfCBTY2hvb2xNb21lbnQpIHtcbiAgICBpZiAodHlwZW9mIHBlcmlvZFN0cmluZ09yU2Nob29sVGVybSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMucGVyaW9kID0gcGVyaW9kU3RyaW5nT3JTY2hvb2xUZXJtO1xuICAgICAgdGhpcy50ZXJtID0gdGhpcy5wZXJpb2Quc3RhcnRzV2l0aCgnSFQnKSA/ICdBVCcgOiAnU1QnO1xuICAgICAgdGhpcy55ZWFyID0gcGFyc2VJbnQodGhpcy5wZXJpb2Quc3Vic3RyKDIpKTtcbiAgICAgIGlmIChpc05hTih0aGlzLnllYXIpKSB0aHJvdyBuZXcgRXJyb3IgKGBJbnZhbGlkIHBlcmlvZDogJHt0aGlzLnBlcmlvZH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2Nob29sVGVybSA9IG5ldyBTY2hvb2xUZXJtKHBlcmlvZFN0cmluZ09yU2Nob29sVGVybSk7XG4gICAgICB0aGlzLnBlcmlvZCA9IChzY2hvb2xUZXJtLnRlcm0gPT09ICdBVCcgPyBcIkhUXCIgOiBcIlZUXCIpICsgc2Nob29sVGVybS55ZWFyO1xuICAgICAgdGhpcy50ZXJtID0gc2Nob29sVGVybS50ZXJtO1xuICAgICAgdGhpcy55ZWFyID0gc2Nob29sVGVybS55ZWFyO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzY2hvb2xUZXJtICgpIDogU2Nob29sVGVybSB7XG4gICAgcmV0dXJuIG5ldyBTY2hvb2xUZXJtKHtcbiAgICAgIGFjYWRlbWljWWVhcjogdGhpcy50ZXJtID09PSAnQVQnID9cbiAgICAgICAgYCR7dGhpcy55ZWFyfS8ke3RoaXMueWVhciArIDF9YCA6XG4gICAgICAgIGAke3RoaXMueWVhci0xfS8ke3RoaXMueWVhcn1gLFxuICAgICAgdGVybTogdGhpcy50ZXJtXG4gICAgfSk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJpb2Q7XG4gIH1cblxuICB2YWx1ZU9mKCkge1xuICAgIHJldHVybiB0aGlzLnllYXIgKyBcIjpcIiArICh0aGlzLnRlcm0gPT09ICdTVCcgPyBcIjFcIiA6IFwiMlwiKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VKc29uRGF0ZV9vbGQgKGpzb25EYXRlU3RyOiBzdHJpbmcpIDogRGF0ZSB7XG4gIGNvbnN0IGRhdGUgPSBkYXRlVGltZVJldml2ZXIoXCJcIiwganNvbkRhdGVTdHIpO1xuICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgSlNPTiBkYXRlIHN0cmluZzogXCIgKyBqc29uRGF0ZVN0cik7XG4gIHJldHVybiBkYXRlO1xufVxuXG5mdW5jdGlvbiBhdm9pZFNpbXVsdGFub3VzQ2FsbHM8VCxBPihtZXRob2Q6ICguLi5hcmdzOkFbXSk9PlByb21pc2U8VD4pIDogKC4uLmFyZ3M6QVtdKT0+UHJvbWlzZTxUPiB7XG4gIGxldCBvbmdvaW5nUHJvbWlzZXM6IHtbYXJnc0pzb246IHN0cmluZ106IFByb21pc2U8VD59ID0ge307XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzSnNvbiA9IEpTT04uc3RyaW5naWZ5KFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgaWYgKCFvbmdvaW5nUHJvbWlzZXNbYXJnc0pzb25dKSB7XG4gICAgICBvbmdvaW5nUHJvbWlzZXNbYXJnc0pzb25dID0gbWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykudGhlbihyZXN1bHQ9PntcbiAgICAgICAgZGVsZXRlIG9uZ29pbmdQcm9taXNlc1thcmdzSnNvbl07XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9uZ29pbmdQcm9taXNlc1thcmdzSnNvbl07XG4gIH1cbn1cbiIsImltcG9ydCB7IEVEU1RlYWNoZXIsIEVEU1R1aXRpb25Hcm91cCB9IGZyb20gJy4uLy4uL2NvbnRyYWN0cy9lZHMnO1xuXG5cbmNvbnN0IGNyZWF0ZVN0dWRlbnRzID0gKGdyb3VwLCBuLCBtKSA9PiB7XG4gIGNvbnN0IHN0dWRlbnRzID0gW107XG4gIGZvciAodmFyIGk9bjsgaSA8PSBtOyBpKyspIHtcbiAgICBzdHVkZW50cy5wdXNoKHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogZ3JvdXAsXG4gICAgICBzdHVkZW50Rmlyc3ROYW1lOiAnU3R1ZGVudCAnICsgaSxcbiAgICAgIHN0dWRlbnRMYXN0TmFtZTogJ0NsYXNzcm9vbScsXG4gICAgICBzdHVkZW50RW1haWxBZGRyZXNzOiAnc3R1ZGVudCcgKyBpICsgJy5jbGFzc3Jvb21Aa2Vkc2Nob29scy5jb20nXG5cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gc3R1ZGVudHM7XG59XG5cbmV4cG9ydCBjb25zdCBtb2NrVGVhY2hlcnM6IEVEU1RlYWNoZXJbXSA9IFtcbiAge1xuICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgIHRlYWNoZXJGaXJzdE5hbWU6ICdUZWFjaGVyIDEnLFxuICAgIHRlYWNoZXJMYXN0TmFtZTogJ0NsYXNzcm9vbScsXG4gICAgdGVhY2hlckVtYWlsQWRkcmVzczogJ3RlYWNoZXIxLmNsYXNzcm9vbUBrZWRzY2hvb2xzLmNvbSdcbiAgfSxcbiAge1xuICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgIHRlYWNoZXJGaXJzdE5hbWU6ICdUZWFjaGVyIDInLFxuICAgIHRlYWNoZXJMYXN0TmFtZTogJ0NsYXNzcm9vbScsXG4gICAgdGVhY2hlckVtYWlsQWRkcmVzczogJ3RlYWNoZXIyLmNsYXNzcm9vbUBrZWRzY2hvb2xzLmNvbSdcbiAgfSxcbiAge1xuICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgIHRlYWNoZXJGaXJzdE5hbWU6ICdUZWFjaGVyIDMnLFxuICAgIHRlYWNoZXJMYXN0TmFtZTogJ0NsYXNzcm9vbScsXG4gICAgdGVhY2hlckVtYWlsQWRkcmVzczogJ3RlYWNoZXIzLmNsYXNzcm9vbUBrZWRzY2hvb2xzLmNvbSdcbiAgfSxcbiAge1xuICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgIHRlYWNoZXJGaXJzdE5hbWU6ICdDYXJsJyxcbiAgICB0ZWFjaGVyTGFzdE5hbWU6ICdIb2xtYmVyZycsXG4gICAgdGVhY2hlckVtYWlsQWRkcmVzczogJ2NhcmxAa2Vkc2Nob29scy5jb20nXG4gIH0sXG4gIHtcbiAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICB0ZWFjaGVyRmlyc3ROYW1lOiAnRGF2aWQnLFxuICAgIHRlYWNoZXJMYXN0TmFtZTogJ0ZhaGxhbmRlcicsXG4gICAgdGVhY2hlckVtYWlsQWRkcmVzczogJ2RhdmlkLmZhaGxhbmRlckBrZWRzY2hvb2xzLmNvbSdcbiAgfSxcbiAge1xuICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgIHRlYWNoZXJGaXJzdE5hbWU6ICdBbmRyZWknLFxuICAgIHRlYWNoZXJMYXN0TmFtZTogJ1NwYXRhcmVsdScsXG4gICAgdGVhY2hlckVtYWlsQWRkcmVzczogJ2FuZHJlaS5zcGF0YXJlbHVAdmVtZW5kby5zZSdcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IG1vY2tUdWl0aW9uR3JvdXBzID0ge1xuICAnREpVU8OETDAxJzogW1xuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0RKVVIxX0dSMSAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgY291cnNlQ29kZTogJ0RKVVPDhEwwMSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0RKVVIxX0dSMiAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgY291cnNlQ29kZTogJ0RKVVPDhEwwMSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0RKVVIxX0dSMyAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgY291cnNlQ29kZTogJ0RKVVPDhEwwMSdcbiAgICB9XG4gIF0sXG4gICdESlVESkkwJzpbXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnREpVREpfR3IxICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBjb3Vyc2VDb2RlOiAnREpVREpJMCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0RKVURKX0dyMiAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgY291cnNlQ29kZTogJ0RKVURKSTAnXG4gICAgfSwgIF0sXG4gICdLRU1LRU0wMSc6IFtcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdLRU0xX0dyMSAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgY291cnNlQ29kZTogJ0tFTUtFTTAxJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnS0VNMV9HcjIgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIGNvdXJzZUNvZGU6ICdLRU1LRU0wMSdcbiAgICB9XG4gIF0sXG4gIFwiTUFUTUFUMDNiXCI6IFtcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdNQVQzYl9HcjEgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIGNvdXJzZUNvZGU6ICdNQVRNQVQwM2InXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdNQVQzYl9HcjIgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIGNvdXJzZUNvZGU6ICdNQVRNQVQwM2InXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdNQVQzYl9HcjMgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIGNvdXJzZUNvZGU6ICdNQVRNQVQwM2InXG4gICAgfVxuICBdLFxuICAnQklPQklPMDEnOiBbXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnQklPMV9HcjEgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIGNvdXJzZUNvZGU6ICdCSU9CSU8wMSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0JJTzFfR3IyICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBjb3Vyc2VDb2RlOiAnQklPQklPMDEnXG4gICAgfVxuICBdLFxuICAnU1ZFU1ZFMDMnOiBbXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnU1ZFM19HcjEgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIGNvdXJzZUNvZGU6ICdTVkVTVkUwMydcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ1NWRTNfR3IyICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBjb3Vyc2VDb2RlOiAnU1ZFU1ZFMDMnXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdTVkUzX0dyMyAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgY291cnNlQ29kZTogJ1NWRVNWRTAzJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnU1ZFM19HcjQgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIGNvdXJzZUNvZGU6ICdTVkVTVkUwMydcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ1NWRTNfR3I1ICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBjb3Vyc2VDb2RlOiAnU1ZFU1ZFMDMnXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdTVkUzX0dyNiAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgY291cnNlQ29kZTogJ1NWRVNWRTAzJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnU1ZFM19HcjcgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIGNvdXJzZUNvZGU6ICdTVkVTVkUwMydcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IG1vY2tUdWl0aW9uU3R1ZGVudHMgPSB7XG4gICdESlVSMV9HUjEgKDE4MDgxNi0xOTA2MTQpJyA6IGNyZWF0ZVN0dWRlbnRzKCdESlVSMV9HUjEgKDE4MDgxNi0xOTA2MTQpJyAsIDEsIDEyKSxcbiAgJ0RKVVIxX0dSMiAoMTgwODE2LTE5MDYxNCknIDogY3JlYXRlU3R1ZGVudHMoJ0RKVVIxX0dSMiAoMTgwODE2LTE5MDYxNCknICwgMTMsIDI0KSxcbiAgJ0RKVVIxX0dSMyAoMTgwODE2LTE5MDYxNCknIDogW1xuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0RKVURKX0dyMiAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgc3R1ZGVudEZpcnN0TmFtZTogJ1N0dWRlbnQyJyxcbiAgICAgIHN0dWRlbnRMYXN0TmFtZTogJ0NsYXNzcm9vbScsXG4gICAgICBzdHVkZW50RW1haWxBZGRyZXNzOiAnc3R1ZGVudDIuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnREpVREpfR3IyICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBzdHVkZW50Rmlyc3ROYW1lOiAnQ2FybCcsXG4gICAgICBzdHVkZW50TGFzdE5hbWU6ICdIb2xtYmVyZycsXG4gICAgICBzdHVkZW50RW1haWxBZGRyZXNzOiAnY2FybEBrZWRzY2hvb2xzLmNvbSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0RKVURKX0dyMiAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgc3R1ZGVudEZpcnN0TmFtZTogJ0FuZHJlaScsXG4gICAgICBzdHVkZW50TGFzdE5hbWU6ICdTcGF0YXJlbHUnLFxuICAgICAgc3R1ZGVudEVtYWlsQWRkcmVzczogJ2FuZHJlaS5zcGF0YXJlbHVAdmVtZW5kby5zZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0RKVURKX0dyMiAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgc3R1ZGVudEZpcnN0TmFtZTogJ1N0dWRlbnQzJyxcbiAgICAgIHN0dWRlbnRMYXN0TmFtZTogJ0NsYXNzcm9vbScsXG4gICAgICBzdHVkZW50RW1haWxBZGRyZXNzOiAnc3R1ZGVudDMuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tJ1xuICAgIH0sIC4uLmNyZWF0ZVN0dWRlbnRzKCdESlVSMV9HUjMgKDE4MDgxNi0xOTA2MTQpJyAsIDIzLCAzNClcbiAgXSxcbiAgXG4gICdNQVQzYl9HcjEgKDE4MDgxNi0xOTA2MTQpJyA6IGNyZWF0ZVN0dWRlbnRzKCdNQVQzYl9HcjEgKDE4MDgxNi0xOTA2MTQpJywgMywgMjMpLFxuICAnTUFUM2JfR3IyICgxODA4MTYtMTkwNjE0KScgOiBjcmVhdGVTdHVkZW50cygnTUFUM2JfR3IyICgxODA4MTYtMTkwNjE0KScsIDI0LCA0OSksXG4gICdNQVQzYl9HcjMgKDE4MDgxNi0xOTA2MTQpJyA6IGNyZWF0ZVN0dWRlbnRzKCdNQVQzYl9HcjMgKDE4MDgxNi0xOTA2MTQpJywgNTAsIDcyKSxcbiAgXG4gICdJRFIxX0dyMSAoMTgwODE2LTE5MDYxNCknIDogY3JlYXRlU3R1ZGVudHMoJ0lEUjFfR3IxICgxODA4MTYtMTkwNjE0KScgLCAxLCAxMiksXG4gICdJRFIxX0dyMiAoMTgwODE2LTE5MDYxNCknIDogY3JlYXRlU3R1ZGVudHMoJ0lEUjFfR3IyICgxODA4MTYtMTkwNjE0KScgLCAxMywgMjIpLFxuICAnSURSMV9HcjMgKDE4MDgxNi0xOTA2MTQpJyA6IGNyZWF0ZVN0dWRlbnRzKCdJRFIxX0dyMyAoMTgwODE2LTE5MDYxNCknICwgMjMsIDM0KSxcbiAgXG4gICdLRU0xX0dyMSAoMTgwODE2LTE5MDYxNCknIDogW1xuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0tFTTFfR3IxICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBzdHVkZW50Rmlyc3ROYW1lOiAnU3R1ZGVudCAyJyxcbiAgICAgIHN0dWRlbnRMYXN0TmFtZTogJ0NsYXNzcm9vbScsXG4gICAgICBzdHVkZW50RW1haWxBZGRyZXNzOiAnc3R1ZGVudDIuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnS0VNMV9HcjEgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIHN0dWRlbnRGaXJzdE5hbWU6ICdTdHVkZW50IDMnLFxuICAgICAgc3R1ZGVudExhc3ROYW1lOiAnQ2xhc3Nyb29tJyxcbiAgICAgIHN0dWRlbnRFbWFpbEFkZHJlc3M6ICdzdHVkZW50My5jbGFzc3Jvb21Aa2Vkc2Nob29scy5jb20nXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdLRU0xX0dyMSAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgc3R1ZGVudEZpcnN0TmFtZTogJ1N0dWRlbnQgOCcsXG4gICAgICBzdHVkZW50TGFzdE5hbWU6ICdDbGFzc3Jvb20nLFxuICAgICAgc3R1ZGVudEVtYWlsQWRkcmVzczogJ3N0dWRlbnQ4LmNsYXNzcm9vbUBrZWRzY2hvb2xzLmNvbSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0tFTTFfR3IxICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBzdHVkZW50Rmlyc3ROYW1lOiAnU3R1ZGVudCA5JyxcbiAgICAgIHN0dWRlbnRMYXN0TmFtZTogJ0NsYXNzcm9vbScsXG4gICAgICBzdHVkZW50RW1haWxBZGRyZXNzOiAnc3R1ZGVudDkuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tJ1xuICAgIH1cbiAgXSxcbiAgJ0tFTTFfR3IyICgxODA4MTYtMTkwNjE0KScgOiBbXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnS0VNMV9HcjIgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIHN0dWRlbnRGaXJzdE5hbWU6ICdTdHVkZW50IDEnLFxuICAgICAgc3R1ZGVudExhc3ROYW1lOiAnQ2xhc3Nyb29tJyxcbiAgICAgIHN0dWRlbnRFbWFpbEFkZHJlc3M6ICdzdHVkZW50MS5jbGFzc3Jvb21Aa2Vkc2Nob29scy5jb20nXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdLRU0xX0dyMiAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgc3R1ZGVudEZpcnN0TmFtZTogJ1N0dWRlbnQgNScsXG4gICAgICBzdHVkZW50TGFzdE5hbWU6ICdDbGFzc3Jvb20nLFxuICAgICAgc3R1ZGVudEVtYWlsQWRkcmVzczogJ3N0dWRlbnQ1LmNsYXNzcm9vbUBrZWRzY2hvb2xzLmNvbSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0tFTTFfR3IyICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBzdHVkZW50Rmlyc3ROYW1lOiAnU3R1ZGVudCA2JyxcbiAgICAgIHN0dWRlbnRMYXN0TmFtZTogJ0NsYXNzcm9vbScsXG4gICAgICBzdHVkZW50RW1haWxBZGRyZXNzOiAnc3R1ZGVudDYuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tJ1xuICAgIH1cbiAgXSxcbiAgJ0JJTzFfR3IxICgxODA4MTYtMTkwNjE0KScgOiBbXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnQklPMV9HcjEgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIHN0dWRlbnRGaXJzdE5hbWU6ICdTdHVkZW50IDEnLFxuICAgICAgc3R1ZGVudExhc3ROYW1lOiAnQ2xhc3Nyb29tJyxcbiAgICAgIHN0dWRlbnRFbWFpbEFkZHJlc3M6ICdzdHVkZW50MS5jbGFzc3Jvb21Aa2Vkc2Nob29scy5jb20nXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdCSU8xX0dyMSAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgc3R1ZGVudEZpcnN0TmFtZTogJ1N0dWRlbnQgNCcsXG4gICAgICBzdHVkZW50TGFzdE5hbWU6ICdDbGFzc3Jvb20nLFxuICAgICAgc3R1ZGVudEVtYWlsQWRkcmVzczogJ3N0dWRlbnQ0LmNsYXNzcm9vbUBrZWRzY2hvb2xzLmNvbSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0JJTzFfR3IxICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBzdHVkZW50Rmlyc3ROYW1lOiAnU3R1ZGVudCA2JyxcbiAgICAgIHN0dWRlbnRMYXN0TmFtZTogJ0NsYXNzcm9vbScsXG4gICAgICBzdHVkZW50RW1haWxBZGRyZXNzOiAnc3R1ZGVudDYuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnQklPMV9HcjEgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIHN0dWRlbnRGaXJzdE5hbWU6ICdTdHVkZW50IDEwJyxcbiAgICAgIHN0dWRlbnRMYXN0TmFtZTogJ0NsYXNzcm9vbScsXG4gICAgICBzdHVkZW50RW1haWxBZGRyZXNzOiAnc3R1ZGVudDEwLmNsYXNzcm9vbUBrZWRzY2hvb2xzLmNvbSdcbiAgICB9XG4gIF0sXG4gICdCSU8xX0dyMiAoMTgwODE2LTE5MDYxNCknIDogW1xuICAgIHtcbiAgICAgIHNjaG9vbE5hbWU6ICdLRUQnLFxuICAgICAgdHVpdGlvbkdyb3VwTmFtZTogJ0JJTzFfR3IyICgxODA4MTYtMTkwNjE0KScsXG4gICAgICBzdHVkZW50Rmlyc3ROYW1lOiAnU3R1ZGVudCAyJyxcbiAgICAgIHN0dWRlbnRMYXN0TmFtZTogJ0NsYXNzcm9vbScsXG4gICAgICBzdHVkZW50RW1haWxBZGRyZXNzOiAnc3R1ZGVudDIuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2Nob29sTmFtZTogJ0tFRCcsXG4gICAgICB0dWl0aW9uR3JvdXBOYW1lOiAnQklPMV9HcjIgKDE4MDgxNi0xOTA2MTQpJyxcbiAgICAgIHN0dWRlbnRGaXJzdE5hbWU6ICdTdHVkZW50IDcnLFxuICAgICAgc3R1ZGVudExhc3ROYW1lOiAnQ2xhc3Nyb29tJyxcbiAgICAgIHN0dWRlbnRFbWFpbEFkZHJlc3M6ICdzdHVkZW50Ny5jbGFzc3Jvb21Aa2Vkc2Nob29scy5jb20nXG4gICAgfSxcbiAgICB7XG4gICAgICBzY2hvb2xOYW1lOiAnS0VEJyxcbiAgICAgIHR1aXRpb25Hcm91cE5hbWU6ICdCSU8xX0dyMiAoMTgwODE2LTE5MDYxNCknLFxuICAgICAgc3R1ZGVudEZpcnN0TmFtZTogJ1N0dWRlbnQgOCcsXG4gICAgICBzdHVkZW50TGFzdE5hbWU6ICdDbGFzc3Jvb20nLFxuICAgICAgc3R1ZGVudEVtYWlsQWRkcmVzczogJ3N0dWRlbnQ4LmNsYXNzcm9vbUBrZWRzY2hvb2xzLmNvbSdcbiAgICB9LFxuICBdLFxuICAnU1ZFM19HcjEgKDE4MDgxNi0xOTA2MTQpJyA6IGNyZWF0ZVN0dWRlbnRzKCdTVkUzX0dyMSAoMTgwODE2LTE5MDYxNCknLCAxLCAyMSksXG4gICdTVkUzX0dyMiAoMTgwODE2LTE5MDYxNCknIDogY3JlYXRlU3R1ZGVudHMoJ1NWRTNfR3IyICgxODA4MTYtMTkwNjE0KScsIDIyLCA0NCksXG4gICdTVkUzX0dyMyAoMTgwODE2LTE5MDYxNCknIDogY3JlYXRlU3R1ZGVudHMoJ1NWRTNfR3IzICgxODA4MTYtMTkwNjE0KScsIDQ1LCA2MSksXG4gICdTVkUzX0dyNCAoMTgwODE2LTE5MDYxNCknIDogY3JlYXRlU3R1ZGVudHMoJ1NWRTNfR3I0ICgxODA4MTYtMTkwNjE0KScsIDYyLCA3OCksXG4gICdTVkUzX0dyNSAoMTgwODE2LTE5MDYxNCknIDogY3JlYXRlU3R1ZGVudHMoJ1NWRTNfR3I1ICgxODA4MTYtMTkwNjE0KScsIDgzLCAxMDcpLFxuICAnU1ZFM19HcjYgKDE4MDgxNi0xOTA2MTQpJyA6IGNyZWF0ZVN0dWRlbnRzKCdTVkUzX0dyNiAoMTgwODE2LTE5MDYxNCknLCAxMDgsIDEyNCksXG4gICdTVkUzX0dyNyAoMTgwODE2LTE5MDYxNCknIDogY3JlYXRlU3R1ZGVudHMoJ1NWRTNfR3I3ICgxODA4MTYtMTkwNjE0KScsIDEyNSwgMTUwKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIG51bWJlck9mVGFza3M6IG51bWJlcjtcbiAgICBjb21wbGV0ZWROdW1iZXJPZlRhc2tzOiBudW1iZXI7XG4gICAgbWF4aW11bVRhc2tzRGlzcGxheWVkPzogbnVtYmVyO1xuICAgIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbiAgICBwcm9ncmVzc0NvbG9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgR29hbFByb2dyZXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIG51bWJlcm9mVGFza3M6IDAsXG4gICAgICAgIGNvbXBsZXRlZE51bWJlck9mVGFza3M6IDAsXG4gICAgICAgIG1heGltdW1UYXNrc0Rpc3BsYXllZDogMTAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJsaWdodGdyZXlcIixcbiAgICAgICAgcHJvZ3Jlc3NDb2xvcjogXCIjM2RiY2EyXCIsXG4gICAgfTtcblxuICAgIGNyZWF0ZVByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IG51bWJlck9mVGFza3MsIGNvbXBsZXRlZE51bWJlck9mVGFza3MsIG1heGltdW1UYXNrc0Rpc3BsYXllZCwgYmFja2dyb3VuZENvbG9yLCBwcm9ncmVzc0NvbG9yIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBbXTtcbiAgICAgICAgaWYobnVtYmVyT2ZUYXNrcyA+IG1heGltdW1UYXNrc0Rpc3BsYXllZCl7XG4gICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLW92ZXJ2aWV3XCI+IHtjb21wbGV0ZWROdW1iZXJPZlRhc2tzfSAvIHtudW1iZXJPZlRhc2tzfSA8L2Rpdj47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCB0YXNrTm8gPSAxOyB0YXNrTm8gPD0gbnVtYmVyT2ZUYXNrczsgdGFza05vKyspIHtcbiAgICAgICAgICAgIHByb2dyZXNzLnB1c2goXG4gICAgICAgICAgICA8c3ZnIGtleT17dGFza05vfT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGNsYXNzTmFtZT1cImNpcmNsZS1jaGFydC1iYWNrZ3JvdW5kXCIgZmlsbD17dGFza05vID4gY29tcGxldGVkTnVtYmVyT2ZUYXNrcyA/IGJhY2tncm91bmRDb2xvciA6IHByb2dyZXNzQ29sb3J9IGN4PVwiOFwiIGN5PVwiOFwiIHI9XCI4XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7ICBcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZ29hbHMtcHJvZ3Jlc3NcIj57dGhpcy5jcmVhdGVQcm9ncmVzcygpfTwvZGl2PlxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxlZnQ6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgcmlnaHQ6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgcmlnaHRXaWR0aDogMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfMKgOSB8IDEwIHwgMTE7XG59XG5cbmV4cG9ydCBjb25zdCBUd29Db2x1bW5zUGFnZSA9ICh7IGxlZnQsIHJpZ2h0LCByaWdodFdpZHRoIH06IFByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic3Ytcm93IHN2LWxheW91dFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3YtbGF5b3V0IHN2LXNraXAtc3BhY2VyIHN2LWNvbHVtbi0xMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdi1zcGFjZXItMjBweHZ0IHN2LXZlcnRpY2FsIHN2LWxheW91dCBzdi1za2lwLXNwYWNlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Vjb250ZW50IHN2LWxheW91dCBzdi1zcGFjZXItMjBweHZ0IHN2LXNraXAtc3BhY2VyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdi1yb3cgc3YtbGF5b3V0IHN2LXNraXAtc3BhY2VyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN2LWxheW91dCBzdi1za2lwLXNwYWNlciBzdi1jb2x1bW4tJHsxMi1yaWdodFdpZHRofWB9PlxuICAgICAgICAgICAgICB7bGVmdH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bzdi1sYXlvdXQgc3YtY29sdW1uLSR7cmlnaHRXaWR0aH1gfT5cbiAgICAgICAgICAgICAge3JpZ2h0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IEVsbGlwc2lzTG9hZGVyID0gKCkgPT5cbiAgPGltZ1xuICAgIHN0eWxlPXt7Ym9yZGVyOiAwLCBtYXJnaW46IDAsIHBhZGRpbmc6IDB9fVxuICAgIGNsYXNzTmFtZT1cImVsbGlwc2lzLWxvYWRlclwiIC8+O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgU3Bpbm5lciA9ICh7bGFiZWw9XCJcIn06e2xhYmVsPzpzdHJpbmd9KSA9PiA8c3Bhbj48aSBjbGFzc05hbWU9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+Jm5ic3A7e2xhYmVsfTwvc3Bhbj47XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBc3NpZ25tZW50LCBVcmt1bmRSZXNwb25zZSB9IGZyb20gJ2tlZGJhY2tlbmQvbW9kZWxzJztcbmltcG9ydCB7IEh0dHBFcnJvciB9IGZyb20gJ2tlZGJhY2tlbmQvY2xpZW50JztcbmltcG9ydCB7IGVudiB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbHMvS0VELmVudic7XG5pbXBvcnQgZG93bmxvYWQgZnJvbSAnZG93bmxvYWRqcyc7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vLi4vY291cnNlLWJ1aWxkZXIvc3ViLWNvbXBvbmVudHMvc3Bpbm5lcic7XG5pbXBvcnQgeyBnZXRVcmt1bmRIb3ZlclRleHQsIGdldFVya3VuZFN0YXR1c0NsYXNzLCBnZXRVcmt1bmRTaWduaWZpY2FuY2VDbGFzcyB9IGZyb20gJy4vdXJrdW5kLXV0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVya3VuZFN0YXR1cyhmaWxlOiBBc3NpZ25tZW50LCByZWZyZXNoQXNzaWdubWVudDogKGZpbGU6QXNzaWdubWVudCk9PiB2b2lkLCBjaGVja1dpdGhVcmt1bmQ6IGJvb2xlYW4pIHtcbiAgY29uc3QgeyBtZXRhZGF0YSB9ID0gZmlsZTtcbiAgdmFyIHVya3VuZFJlc3BvbnNlczogVXJrdW5kUmVzcG9uc2VbXTtcbiAgdHJ5IHtcbiAgICB1cmt1bmRSZXNwb25zZXMgPSBtZXRhZGF0YS51cmt1bmRSZXNwb25zZSAmJiBKU09OLnBhcnNlKG1ldGFkYXRhLnVya3VuZFJlc3BvbnNlKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdXJrdW5kUmVzcG9uc2VzID0gbnVsbDtcbiAgfVxuICBsZXQgdXJrdW5kUmVzcG9uc2UgPSB1cmt1bmRSZXNwb25zZXMgJiYgdXJrdW5kUmVzcG9uc2VzWzBdO1xuICBpZiAoIXVya3VuZFJlc3BvbnNlICYmIGZpbGUubWV0YWRhdGEudXJrdW5kVXBsb2FkRXJyb3IpIHtcbiAgICB1cmt1bmRSZXNwb25zZSA9IHtcbiAgICAgIFN0YXR1czoge1xuICAgICAgICBFcnJvckNvZGU6IC0xLFxuICAgICAgICBNZXNzYWdlOiBmaWxlLm1ldGFkYXRhLnVya3VuZFVwbG9hZEVycm9yLFxuICAgICAgICBTdGF0ZTogJ0Vycm9yJ1xuICAgICAgfSxcbiAgICAgIEV4dGVybmFsSWQ6IGZpbGUubWV0YWRhdGEudXJrdW5kRXh0ZXJuYWxJZFxuICAgIH0gYXMgVXJrdW5kUmVzcG9uc2U7XG4gIH1cbiAgaWYgKGZpbGUuaXNSZWZyZXNoaW5nKSByZXR1cm4gPHRkIGNvbFNwYW49ezJ9PjxTcGlubmVyIC8+IFVwcGRhdGVyYXIuLi48L3RkPlxuICByZXR1cm4gdXJrdW5kUmVzcG9uc2UgPyA8PlxuICAgIDx0ZCBjbGFzc05hbWU9XCJ1cmt1bmQtc3RhdHVzLWNvbFwiPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj17dXJrdW5kUmVzcG9uc2UuUmVwb3J0ICYmIHVya3VuZFJlc3BvbnNlLlJlcG9ydC5SZXBvcnRVcmx9XG4gICAgICAgIG9uQ2xpY2s9e2V2ID0+IHtcbiAgICAgICAgICBpZiAoWydBY2NlcHRlZCcsICdTdWJtaXR0ZWQnXS5pbmRleE9mKHVya3VuZFJlc3BvbnNlLlN0YXR1cy5TdGF0ZSkgPT09IC0xKVxuICAgICAgICAgICAgcmV0dXJuOyAvLyBGb2xsb3cgSFJFRiBpbnN0ZWFkLlxuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgY2hlY2tXaXRoVXJrdW5kICYmIHJlZnJlc2hBc3NpZ25tZW50KGZpbGUpO1xuICAgICAgICB9fVxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICB0aXRsZT17Z2V0VXJrdW5kSG92ZXJUZXh0KHVya3VuZFJlc3BvbnNlKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRVcmt1bmRTdGF0dXNDbGFzcyh1cmt1bmRSZXNwb25zZSl9IC8+XG4gICAgICA8L2E+XG4gICAgPC90ZD5cbiAgICA8dGQgY2xhc3NOYW1lPVwidXJrdW5kLXN0YXR1cy1jb2xcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRVcmt1bmRTaWduaWZpY2FuY2VDbGFzcyh1cmt1bmRSZXNwb25zZSl9PlxuICAgICAgICB7dXJrdW5kUmVzcG9uc2UuUmVwb3J0ICYmIHR5cGVvZiB1cmt1bmRSZXNwb25zZS5SZXBvcnQuU2lnbmlmaWNhbmNlID09PSAnbnVtYmVyJyA/XG4gICAgICAgICAgYCR7dXJrdW5kUmVzcG9uc2UuUmVwb3J0LlNpZ25pZmljYW5jZS50b0ZpeGVkKCl9JWAgOiAnICd9XG4gICAgICA8L2Rpdj5cbiAgICA8L3RkPlxuICA8Lz4gOiA8dGQgY29sU3Bhbj17Mn0gLz5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZShhc3NpZ25tZW50czogQXNzaWdubWVudFtdLCBhc3NpZ25tZW50OiBBc3NpZ25tZW50KTogQXNzaWdubWVudFtdIHtcbiAgY29uc3QgcmV0dmFsID0gW1xuICAgIGFzc2lnbm1lbnQsXG4gICAgLi4uYXNzaWdubWVudHMuZmlsdGVyKCh7dXNlciwgZmlsZW5hbWV9KSA9PlxuICAgICAgdXNlciAhPT0gYXNzaWdubWVudC51c2VyIHx8XG4gICAgICBmaWxlbmFtZSAhPT0gYXNzaWdubWVudC5maWxlbmFtZSldO1xuICByZXR1cm4gcmV0dmFsO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZG93bmxvYWRGaWxlKGZpbGU6IEFzc2lnbm1lbnQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBlbnYua2VkQmFja2VuZENsaWVudC5odHRwLmZldGNoKGZpbGUubWVkaWFMaW5rLCAnZ2V0Jywge30pO1xuICAgIGlmIChyZXMuc3RhdHVzID49IDQwMCkge1xuICAgICAgdGhyb3cgbmV3IEh0dHBFcnJvcihyZXMuc3RhdHVzLCBhd2FpdCByZXMudGV4dCgpKTtcbiAgICB9XG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKCk7XG4gICAgZG93bmxvYWQoYmxvYiwgZmlsZS5maWxlbmFtZSwgZmlsZS5jb250ZW50VHlwZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogXCJLdW5kZSBpbnRlIGxhZGRhIG5lZCBmaWxlbi4gXCIgKyAoZXJyLm1lc3NhZ2UgfHwgZXJyKSB9KTtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERyaXZlRmlsZUxpc3RpbmcoeyBmaWxlIH06IHsgZmlsZTogQXNzaWdubWVudCB9KSB7XG4gIGNvbnN0IHsgZHJpdmVGaWxlSWNvblVybCwgZHJpdmVGaWxlVXJsIH0gPSBmaWxlLm1ldGFkYXRhO1xuICBjb25zdCBmaWxlbmFtZSA9IGZpbGUuZmlsZW5hbWUuc3Vic3RyKDAsIGZpbGUuZmlsZW5hbWUubGFzdEluZGV4T2YoJy4nKSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1ob3Jpem9udGFsIHNwYWNlZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3Jpem9udGFsSXRlbSB0b3BcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmaWxlLWljb25cIiBzcmM9e2RyaXZlRmlsZUljb25Vcmx9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbEl0ZW0gdG9wXCI+XG4gICAgICAgIDxzcGFuPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2RyaXZlRmlsZVVybH0+e2ZpbGVuYW1lfTwvYT48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iLCJpbXBvcnQge1Vya3VuZFJlc3BvbnNlfSBmcm9tICdrZWRiYWNrZW5kL21vZGVscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmt1bmRTdGF0dXNDbGFzcyAocmVzOiBVcmt1bmRSZXNwb25zZSkge1xuICBpZiAoIXJlcyB8fCAhcmVzLlN0YXR1cykge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Ugc3dpdGNoIChyZXMuU3RhdHVzLlN0YXRlKSB7XG4gICAgY2FzZSAnRXJyb3InOlxuICAgICAgcmV0dXJuIGB1cmt1bmQtc3RhdHVzIHVya3VuZC1zdGF0dXMtZXJyb3JgO1xuICAgIGNhc2UgJ1N1Ym1pdHRlZCc6XG4gICAgICByZXR1cm4gYHVya3VuZC1zdGF0dXMgdXJrdW5kLXN0YXR1cy1zdWJtaXR0ZWRgO1xuICAgIGNhc2UgJ0FjY2VwdGVkJzpcbiAgICAgIHJldHVybiBgdXJrdW5kLXN0YXR1cyB1cmt1bmQtc3RhdHVzLWFjY2VwdGVkYDtcbiAgICBjYXNlICdBbmFseXplZCc6XG4gICAgICByZXR1cm4gYHVya3VuZC1zdGF0dXMgdXJrdW5kLXN0YXR1cy1hbmFseXplZGA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVya3VuZEhvdmVyVGV4dCAocmVzOiBVcmt1bmRSZXNwb25zZSkge1xuICBpZiAoIXJlcyB8fCAhcmVzLlN0YXR1cykgcmV0dXJuIG51bGw7XG4gIHN3aXRjaCAocmVzLlN0YXR1cy5TdGF0ZSkge1xuICAgIGNhc2UgJ0Vycm9yJzpcbiAgICAgIHJldHVybiByZXMuRXh0ZXJuYWxJZCA/XG4gICAgICAgIGBLdW5kZSBpbnRlIHRhcyBlbW90IGF2IHVya3VuZC4gRmVsa29kOiAke3Jlcy5TdGF0dXMuRXJyb3JDb2RlfVxcbmArXG4gICAgICAgIGBFeHRlcm5hbCBJRDogJHtyZXMuRXh0ZXJuYWxJZH1cXG5GZWxtZWRkZWxhbmRlOiAke3Jlcy5TdGF0dXMuTWVzc2FnZX1gXG4gICAgICAgIDpcbiAgICAgICAgcmVzLlN0YXR1cy5NZXNzYWdlO1xuICAgIGNhc2UgJ1N1Ym1pdHRlZCc6XG4gICAgICByZXR1cm4gYEZpbGVuIMOkciB1cHBsYWRkYWQgdGlsbCBVcmt1bmQuIEtsaWNrYSBmw7ZyIGF0dCB1cHBkYXRlcmEgc3RhdHVzLmA7XG4gICAgY2FzZSAnQWNjZXB0ZWQnOlxuICAgICAgcmV0dXJuIGBGaWxlbiBhbmFseXNlcmFzIGZvcnRmYXJhbmRlIGF2IFVya3VuZC4gS2xpY2thIGbDtnIgYXR0IHVwcGRhdGVyYSBzdGF0dXMuYDtcbiAgICBjYXNlICdBbmFseXplZCc6XG4gICAgICByZXR1cm4gYFJhcHBvcnQgc2thcGFkLiBLbGlja2EgZsO2ciBhdHQgw7ZwcG5hIHJhcHBvcnRlbiBpIG55dHQgZsO2bnN0ZXJgO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmt1bmRTaWduaWZpY2FuY2VDbGFzcyAocmVzOiBVcmt1bmRSZXNwb25zZSkge1xuICBpZiAoIXJlcyB8fCAhcmVzLlN0YXR1cykgcmV0dXJuICcnO1xuXG4gIHN3aXRjaCAocmVzLlN0YXR1cy5TdGF0ZSkge1xuICAgIGNhc2UgJ0Vycm9yJzogcmV0dXJuICd1cmt1bmQtc2lnbmlmaWNhbmNlLWVycm9yJztcbiAgICBjYXNlICdTdWJtaXR0ZWQnOiByZXR1cm4gJ3Vya3VuZC1zaWduaWZpY2FuY2Utc3VibWl0dGVkJztcbiAgICBjYXNlICdBY2NlcHRlZCc6IHJldHVybiAndXJrdW5kLXNpZ25pZmljYW5jZS1hY2NlcHRlZCc7XG4gIH1cbiAgY29uc3QgcmVwb3J0ID0gcmVzLlJlcG9ydDtcbiAgaWYgKCFyZXBvcnQpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBpZiAocmVwb3J0LlNpZ25pZmljYW5jZSA8IDEpXG4gICAgLy9yZXR1cm4gYCR7Y2RufS9pbWFnZXMvdXJrdW5kLzAuZ2lmYDtcbiAgICByZXR1cm4gXCJ1cmt1bmQtc2lnbmlmaWNhbmNlIHVya3VuZC1zaWduaWZpY2FuY2UtMFwiO1xuICBpZiAocmVwb3J0LlNpZ25pZmljYW5jZSA8IDEwKVxuICAgIC8vcmV0dXJuIGAke2Nkbn0vaW1hZ2VzL3Vya3VuZC8xLmdpZmA7XG4gICAgcmV0dXJuIFwidXJrdW5kLXNpZ25pZmljYW5jZSB1cmt1bmQtc2lnbmlmaWNhbmNlLTFcIjtcbiAgaWYgKHJlcG9ydC5TaWduaWZpY2FuY2UgPCAyNSlcbiAgICByZXR1cm4gXCJ1cmt1bmQtc2lnbmlmaWNhbmNlIHVya3VuZC1zaWduaWZpY2FuY2UtMlwiO1xuICAgIC8vcmV0dXJuIGAke2Nkbn0vaW1hZ2VzL3Vya3VuZC8yLmdpZmA7XG4gIGlmIChyZXBvcnQuU2lnbmlmaWNhbmNlIDwgNDApXG4gICAgcmV0dXJuIFwidXJrdW5kLXNpZ25pZmljYW5jZSB1cmt1bmQtc2lnbmlmaWNhbmNlLTNcIjtcbiAgICAvL3JldHVybiBgJHtjZG59L2ltYWdlcy91cmt1bmQvMy5naWZgO1xuICBpZiAocmVwb3J0LlNpZ25pZmljYW5jZSA8IDU1KVxuICAgIHJldHVybiBcInVya3VuZC1zaWduaWZpY2FuY2UgdXJrdW5kLXNpZ25pZmljYW5jZS00XCI7XG4gICAgLy9yZXR1cm4gYCR7Y2RufS9pbWFnZXMvdXJrdW5kLzQuZ2lmYDtcbiAgaWYgKHJlcG9ydC5TaWduaWZpY2FuY2UgPCA3MClcbiAgICByZXR1cm4gXCJ1cmt1bmQtc2lnbmlmaWNhbmNlIHVya3VuZC1zaWduaWZpY2FuY2UtNVwiO1xuICAgIC8vcmV0dXJuIGAke2Nkbn0vaW1hZ2VzL3Vya3VuZC81LmdpZmA7XG4gIGlmIChyZXBvcnQuU2lnbmlmaWNhbmNlIDwgODUpXG4gICAgcmV0dXJuIFwidXJrdW5kLXNpZ25pZmljYW5jZSB1cmt1bmQtc2lnbmlmaWNhbmNlLTZcIjtcbiAgICAvL3JldHVybiBgJHtjZG59L2ltYWdlcy91cmt1bmQvNi5naWZgO1xuICBpZiAocmVwb3J0LlNpZ25pZmljYW5jZSA8IDk5LjkpXG4gICAgcmV0dXJuIFwidXJrdW5kLXNpZ25pZmljYW5jZSB1cmt1bmQtc2lnbmlmaWNhbmNlLTdcIjtcbiAgICAvL3JldHVybiBgJHtjZG59L2ltYWdlcy91cmt1bmQvNy5naWZgO1xuICBpZiAocmVwb3J0LlNpZ25pZmljYW5jZSA+PSA5OS45KVxuICAgIHJldHVybiBcInVya3VuZC1zaWduaWZpY2FuY2UgdXJrdW5kLXNpZ25pZmljYW5jZS04XCI7XG4gICAgLy9yZXR1cm4gYCR7Y2RufS9pbWFnZXMvdXJrdW5kLzguZ2lmYDtcbiAgcmV0dXJuIFwiXCI7XG59XG4iLCJpbXBvcnQgeyBDb3Vyc2VNb2R1bGUsIFRhc2ssIENvdXJzZSwgQXNzaWdubWVudCB9IGZyb20gJ2tlZGJhY2tlbmQvbW9kZWxzJztcbmltcG9ydCB7IE9wZW5DbG9zZUJveCB9IGZyb20gJy4uLy4uL3V0aWxpdHktY29tcG9uZW50cy9vcGVuLWNsb3NlLWJveCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb3Vyc2VUYXNrIH0gZnJvbSAnLi9jb3Vyc2UtdGFzayc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcGFyZVByb3BzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgbW9ja1R1aXRpb25TdHVkZW50cyB9IGZyb20gJy4uLy4uLy4uL2FwaXMvbW9jay9tb2NrLWNsYXNzcm9vbS1kYXRhJztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3V0aWxpdHktY29tcG9uZW50cy9MYW5ndWFnZUNvbnRleHQnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSWNvbiB9IGZyb20gJy4uL3NoYXJlZC9ub3RpZmljYXRpb24taWNvbic7XG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi9kaWdlc3Qtdmlldyc7XG5pbXBvcnQgeyBBc3NpZ25tZW50c0NvbnRleHQgfSBmcm9tICcuJztcbmltcG9ydCB7IE9ic2VydmUgfSBmcm9tICcuLi8uLi91dGlsaXR5LWNvbXBvbmVudHMvb2JzZXJ2ZSc7XG5cbmludGVyZmFjZSBQcm9wc3tcbiAgICBtb2R1bGU6IENvdXJzZU1vZHVsZTtcbiAgICB0YXNrczogVGFza1tdO1xufVxuXG5cbmV4cG9ydCBjb25zdCBDb3Vyc2VNb2R1bGVWaWV3ID0gKCh7IG1vZHVsZSwgdGFza3MgfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGludGwgfSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KTtcbiAgICBjb25zdCB7bm90aWZpY2F0aW9uZGlnZXN0cywgc2VsZWN0ZWRDb3Vyc2V9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xuICAgIGNvbnN0IHsgZmlsdGVyU3R1ZHlHcm91cHMgfSA9IHVzZUNvbnRleHQoQXNzaWdubWVudHNDb250ZXh0KTtcblxuICAgIGxldCBnZXROb3RTdWJtaXR0ZWRVc2VycyA9IGZ1bmN0aW9uKHRhc2tBc3NpZ25tZW50czogQXNzaWdubWVudFtdKSB7IFxuICAgICAgdmFyIHRhc2tOb3RTdWJtaXR0ZWRVc2VycyA6IHtkaXNwbGF5TmFtZTpzdHJpbmcsIGVtYWlsOiBzdHJpbmd9W10gPSBbXTtcbiAgICAgIC8vIGdldCBzdHVkZW50cyBmcm9tIHRoZSBjb3Vyc2Ugc3R1ZHkgZ3JvdXBzIHdobyBoYXZlJ3QgdXBsb2FkZWQgdGhlaXIgYXNzaWdubWVudHNcbiAgICAgIGxldCBzdHVkeUdyb3VwcyA9IGZpbHRlclN0dWR5R3JvdXBzLmxlbmd0aCA+IDAgPyBzZWxlY3RlZENvdXJzZS5zdHVkeUdyb3Vwcy5maWx0ZXIoc2cgPT4gZmlsdGVyU3R1ZHlHcm91cHMuaW5jbHVkZXMoc2cpKSA6IHNlbGVjdGVkQ291cnNlLnN0dWR5R3JvdXBzO1xuICAgICAgc3R1ZHlHcm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIHZhciB1c2VycyA9IG1vY2tUdWl0aW9uU3R1ZGVudHNbZ3JvdXBdLmZpbHRlcihjcyA9PiAhdGFza0Fzc2lnbm1lbnRzLmZpbmQoZiA9PiBmLnVzZXIgPT09IGNzLnN0dWRlbnRFbWFpbEFkZHJlc3MpKVxuICAgICAgICAubWFwKG5zID0+IHtyZXR1cm4geyBkaXNwbGF5TmFtZTogYCR7bnMuc3R1ZGVudEZpcnN0TmFtZX0gJHtucy5zdHVkZW50TGFzdE5hbWV9YCwgZW1haWw6IG5zLnN0dWRlbnRFbWFpbEFkZHJlc3N9fSk7XG4gICAgICAgIGlmKHVzZXJzKXtcbiAgICAgICAgICB0YXNrTm90U3VibWl0dGVkVXNlcnMucHVzaCguLi51c2Vycyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvL3NvcnQgYnkgbGFzdG5hbWUgLSBmaXJzdG5hbWVcbiAgICAgIHJldHVybiB0YXNrTm90U3VibWl0dGVkVXNlcnMubWFwKHMgPT4ge1xuICAgICAgICBjb25zdCBbZmlyc3ROYW1lLCAuLi5yZXN0XSA9IHMuZGlzcGxheU5hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zLFxuICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICBsYXN0TmFtZTogcmVzdC5qb2luKCcgJylcbiAgICAgICAgfTtcbiAgICAgIH0pLnNvcnQoY29tcGFyZVByb3BzKFtcImxhc3ROYW1lXCIsIFwiZmlyc3ROYW1lXCJdKSk7XG4gICAgfVxuXG4gICAgbGV0IGNvdXJzZU5vdGlmaWNhdGlvbnMgPSBub3RpZmljYXRpb25kaWdlc3RzW3NlbGVjdGVkQ291cnNlLmlkXTtcblxuICAgIHJldHVybiB0YXNrcyAmJiB0YXNrcy5sZW5ndGggPiAwICYmXG4gICAgICA8PlxuICAgICAgICA8T3BlbkNsb3NlQm94IFxuICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24tY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuPnttb2R1bGUubmFtZX08L3NwYW4+XG4gICAgICAgIDxOb3RpZmljYXRpb25JY29uIGNvdXJzZT17c2VsZWN0ZWRDb3Vyc2V9IGVudGl0eT17J21vZHVsZSd9IG1vZHVsZUlkPXttb2R1bGUuaWR9IG5vdGlmaWNhdGlvbmRpZ2VzdHM9e25vdGlmaWNhdGlvbmRpZ2VzdHN9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9IFxuICAgICAgICBoZWFkZXJPcGVuPXtmYWxzZX0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY291cnNlTm90aWZpY2F0aW9ucyAmJiBPYmplY3Qua2V5cyhjb3Vyc2VOb3RpZmljYXRpb25zKS5sZW5ndGggPiAwID8gPGRpdj5cbiAgICAgICAgICAgICAge3Rhc2tzLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGFza0Fzc2lnbm1lbnRzID0gY291cnNlTm90aWZpY2F0aW9uc1t0YXNrLmlkXSA/IGNvdXJzZU5vdGlmaWNhdGlvbnNbdGFzay5pZF0ubWFwKHQ9PiB0LmFzc2lnbm1lbnQpIDogW107XG4gICAgICAgICAgICAgICAgbGV0IG5vdFN1Ym1pdHRlZFVzZXJzID0gc2VsZWN0ZWRDb3Vyc2Uuc3R1ZHlHcm91cHMgJiYgc2VsZWN0ZWRDb3Vyc2Uuc3R1ZHlHcm91cHMubGVuZ3RoID4gMCAmJiBnZXROb3RTdWJtaXR0ZWRVc2Vycyh0YXNrQXNzaWdubWVudHMpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRpc3BsYXlUYXNrID0gbm90U3VibWl0dGVkVXNlcnMgJiYgbm90U3VibWl0dGVkVXNlcnMubGVuZ3RoID4gMCB8fCB0YXNrQXNzaWdubWVudHMgJiYgdGFza0Fzc2lnbm1lbnRzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BsYXlUYXNrICYmXG4gICAgICAgICAgICAgICAgICA8Q291cnNlVGFzayBrZXk9e3Rhc2suaWR9XG4gICAgICAgICAgICAgICAgICAgIHRhc2s9e3Rhc2t9XG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzPXt0YXNrQXNzaWdubWVudHN9XG4gICAgICAgICAgICAgICAgICAgIG5vdFN1Ym1pdHRlZFVzZXJzPXtub3RTdWJtaXR0ZWRVc2Vyc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PiA6IFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6IFwidGVhY2hlclZpZXcubm9VcGxvYWRlZEFzc2lnbm1lbnRzRm9yTW9kdWxlXCIsIGRlZmF1bHRNZXNzYWdlOiBcIk5vIGFzc2lnbm1lbnRzIGhhdmUgYmVlbiB1cGxvYWRlZCBmb3IgdGhpcyBtb2R1bGVcIn0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L09wZW5DbG9zZUJveD4gICAgXG4gICAgICA8Lz5cbn0pIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi91dGlsaXR5LWNvbXBvbmVudHMvTGFuZ3VhZ2VDb250ZXh0JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBub3RTdWJtaXR0ZWRVc2VyczogeyBkaXNwbGF5TmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nIH1bXTtcbn1cblxuXG5leHBvcnQgY29uc3QgQ291cnNlVGFza05vdEhhbmRlZFVzZXJMaXN0ID0gKCh7IG5vdFN1Ym1pdHRlZFVzZXJzIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBpbnRsIH0gPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XG4gICAgY29uc3Qgbm90U3VibWl0dGVkTGVuZ3RoID0gbm90U3VibWl0dGVkVXNlcnMgJiYgbm90U3VibWl0dGVkVXNlcnMubGVuZ3RoO1xuICAgIGNvbnN0IFtzZWxlY3RlZFVzZXJzLCBzZWxlY3RVc2VyXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHJldHVybiAhbm90U3VibWl0dGVkVXNlcnMgfHwgbm90U3VibWl0dGVkVXNlcnMubGVuZ3RoID09PSAwID8gbnVsbCA6IDxkaXYgY2xhc3NOYW1lPVwibm90LXN1Ym1pdHRlZC11c2VycyB0YXNrQ29udGFpbmVyXCI+XG4gICAgICAgIDxoND57aW50bC5mb3JtYXRNZXNzYWdlKHtpZDpcInRlYWNoZXJWaWV3Lm5vdFN1Ym1pdHRlZEFzc2lnbm1lbnRzXCIsIGRlZmF1bHRNZXNzYWdlOiBcIkVqIGzDpG1uYXQgaW5cIn0pfTwvaDQ+XG4gICAgICAgIHtub3RTdWJtaXR0ZWRVc2Vycy5tYXAoKG5zLCBpbmRleCkgPT5cbiAgICAgICAgICAgIDxkaXYga2V5PXtcIm5vdEhhbmRlZEluX1wiICsgaW5kZXh9IGNsYXNzTmFtZT17XCJhbGlnbi1ob3Jpem9udGFsIHN0dWRlbnQtcm93XCIgKyAobm90U3VibWl0dGVkTGVuZ3RoID09PSBpbmRleCArIDEgPyBcIiBsYXN0XCIgOiBcIlwiKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3Jpem9udGFsSXRlbSB0b3AgcHVsbC1yaWdodFwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0VXNlcihzZWxlY3RlZFVzZXJzLmluZGV4T2YobnMuZW1haWwpID4gLTEgPyBzZWxlY3RlZFVzZXJzLmZpbHRlcih1ID0+IHUgIT0gbnMuZW1haWwpIDogWy4uLnNlbGVjdGVkVXNlcnMsIG5zLmVtYWlsXSlcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2hlY2tCb3hcIiArIChzZWxlY3RlZFVzZXJzLmluZGV4T2YobnMuZW1haWwpID4gLTEgPyBcIiBjaGVja2VkXCIgOiBcIlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3Jpem9udGFsSXRlbSB0b3BcIj57bnMuZGlzcGxheU5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1ob3Jpem9udGFsIHJlbWluZC1hc3NpZ25tZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvcml6b250YWxJdGVtIHRvcCBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj57aW50bC5mb3JtYXRNZXNzYWdlKHtpZDpcInRlYWNoZXJWaWV3LnJlbWluZEJ0blwiLCBkZWZhdWx0TWVzc2FnZTogXCJQw6VtaW5uXCJ9KX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbn0pIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGFzaywgQXNzaWdubWVudCwgQ291cnNlIH0gZnJvbSAna2VkYmFja2VuZC9tb2RlbHMnO1xuaW1wb3J0IHsgT3BlbkNsb3NlQm94IH0gZnJvbSAnLi4vLi4vdXRpbGl0eS1jb21wb25lbnRzL29wZW4tY2xvc2UtYm94JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IENvdXJzZVRhc2tBc3NpZ25tZW50cyB9IGZyb20gJy4vY291cnNlLXRhc2tzLWFzc2lnbm1lbnRzJztcbmltcG9ydCB7IENvdXJzZVRhc2tOb3RIYW5kZWRVc2VyTGlzdCB9IGZyb20gJy4vY291cnNlLXRhc2stbm90LWhhbmRlZC11c2Vycyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25JY29uIH0gZnJvbSAnLi4vc2hhcmVkL25vdGlmaWNhdGlvbi1pY29uJztcbmltcG9ydCB7IGNyZWF0ZVVVSUQsIHNpbXBsZURpZ2VzdCB9IGZyb20gJ2tlZGJhY2tlbmQvY2xpZW50JztcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFscy9kYic7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzL0tFRC5lbnYnO1xuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vZGlnZXN0LXZpZXcnO1xuaW1wb3J0IHsgT2JzZXJ2ZSB9IGZyb20gJy4uLy4uL3V0aWxpdHktY29tcG9uZW50cy9vYnNlcnZlJztcblxuaW50ZXJmYWNlIFByb3Bze1xuICAgIHRhc2s6IFRhc2s7XG4gICAgYXNzaWdubWVudHM6IEFzc2lnbm1lbnRbXTtcbiAgICBub3RTdWJtaXR0ZWRVc2Vyczoge2Rpc3BsYXlOYW1lOnN0cmluZywgZW1haWw6IHN0cmluZ31bXTtcbn1cblxuZXhwb3J0IGNvbnN0IENvdXJzZVRhc2sgPSAoKHsgdGFzaywgYXNzaWdubWVudHMsIG5vdFN1Ym1pdHRlZFVzZXJzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHtub3RpZmljYXRpb25kaWdlc3RzLCAgc2VsZWN0ZWRDb3Vyc2UsIHNlZW5EaWdlc3RzT2JzZXJ2YWJsZX0gPSBSZWFjdC51c2VDb250ZXh0KFN0YXRlQ29udGV4dCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25UYXNrT3BlbmVkKGlzT3BlbmVkKSB7XG4gICAgaWYgKGlzT3BlbmVkICYmIG5vdGlmaWNhdGlvbmRpZ2VzdHNbc2VsZWN0ZWRDb3Vyc2UuaWRdW3Rhc2suaWRdKSB7XG4gICAgICBjb25zdCB0YWdzRGlnZXN0ID0gYXdhaXQgc2ltcGxlRGlnZXN0KGVudi5jdXJyZW50VXNlci5tYWlsICsgc2VsZWN0ZWRDb3Vyc2UuaWQpO1xuICAgICAgY29uc3Qgc2VlbkRpZ2VzdHMgPSBhd2FpdCBzZWVuRGlnZXN0c09ic2VydmFibGUubG9hZCgpO1xuICAgICAgYXNzaWdubWVudHMuZm9yRWFjaChhc3luYyAoYXNzaWdubWVudCkgPT4ge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50RGlnZXN0ID0gYXdhaXQgc2ltcGxlRGlnZXN0KFxuICAgICAgICAgIGFzc2lnbm1lbnQudXNlciArIC8vKHN0dWRlbidzIGVtYWlsIGFkZHJlc3MpXG4gICAgICAgICAgYXNzaWdubWVudC5jb3Vyc2VJZCArXG4gICAgICAgICAgYXNzaWdubWVudC50YXNrSWQgK1xuICAgICAgICAgIGFzc2lnbm1lbnQudXBsb2FkRGF0ZSArXG4gICAgICAgICAgKGFzc2lnbm1lbnQubWV0YWRhdGEuZHJpdmVGaWxlSWQgfHwgXCJcIikpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCEoc2VlbkRpZ2VzdHMgJiYgc2VlbkRpZ2VzdHMuZmluZChhID0+IGEuZGlnZXN0ID09PSBhc3NpZ25tZW50RGlnZXN0KSkpIHtcbiAgICAgICAgICBkYi5zZWVuU3R1ZGVudEFzc2lnbm1lbnRzLmFkZCh7XG4gICAgICAgICAgICBpZDogY3JlYXRlVVVJRCgpLFxuICAgICAgICAgICAgdGFnczogW3RhZ3NEaWdlc3RdLFxuICAgICAgICAgICAgZGlnZXN0OiBhc3NpZ25tZW50RGlnZXN0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiA8T3BlbkNsb3NlQm94XG4gICAgb25PcGVuQ2xvc2U9eyhiZWNhbWVPcGVuKSA9PiBvblRhc2tPcGVuZWQoYmVjYW1lT3Blbil9XG4gICAgY2xhc3NOYW1lPVwidGFzay1jb250YWluZXJcIlxuICAgIHRpdGxlPXs8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1jb250YWluZXJcIj5cbiAgICAgIDxzcGFuPnt0YXNrLm5hbWV9PC9zcGFuPlxuICAgICAgPE5vdGlmaWNhdGlvbkljb24gY291cnNlPXtzZWxlY3RlZENvdXJzZX0gZW50aXR5PXsndGFzayd9IHRhc2tJZD17dGFzay5pZH0gbm90aWZpY2F0aW9uZGlnZXN0cz17bm90aWZpY2F0aW9uZGlnZXN0c30gLz5cbiAgICA8L2Rpdj59XG4gICAgaGVhZGVyT3Blbj17ZmFsc2V9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwia2VkX2JveGVkXCI+XG4gICAgICA8Q291cnNlVGFza0Fzc2lnbm1lbnRzIGFzc2lnbm1lbnRzPXthc3NpZ25tZW50c30gY2hlY2tXaXRoVXJrdW5kPXt0YXNrLnNlbmRUb1Vya3VuZH0vPlxuICAgICAgPGJyIC8+XG4gICAgICA8Q291cnNlVGFza05vdEhhbmRlZFVzZXJMaXN0IG5vdFN1Ym1pdHRlZFVzZXJzPXtub3RTdWJtaXR0ZWRVc2Vyc30gLz5cbiAgICA8L2Rpdj5cbiAgPC9PcGVuQ2xvc2VCb3g+XG59KSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFzc2lnbm1lbnQsIFVya3VuZFJlc3BvbnNlIH0gZnJvbSBcImtlZGJhY2tlbmQvbW9kZWxzXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBUYXNrQXNzaWdubWVudCB9IGZyb20gJy4vdGFzay1hc3NpZ25tZW50JztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3V0aWxpdHktY29tcG9uZW50cy9MYW5ndWFnZUNvbnRleHQnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFzc2lnbm1lbnRzQ29udGV4dCB9IGZyb20gJy4nO1xuaW1wb3J0IHsgbW9ja1R1aXRpb25TdHVkZW50cyB9IGZyb20gJy4uLy4uLy4uL2FwaXMvbW9jay9tb2NrLWNsYXNzcm9vbS1kYXRhJztcbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5cbmludGVyZmFjZSBQcm9wc3tcbiAgICBhc3NpZ25tZW50czogQXNzaWdubWVudFtdO1xuICAgIGNoZWNrV2l0aFVya3VuZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IENvdXJzZVRhc2tBc3NpZ25tZW50cyA9ICgoeyBhc3NpZ25tZW50cywgY2hlY2tXaXRoVXJrdW5kIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBpbnRsIH0gPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XG4gICAgY29uc3QgeyBmaWx0ZXJTdHVkeUdyb3VwcyB9ID0gUmVhY3QudXNlQ29udGV4dChBc3NpZ25tZW50c0NvbnRleHQpO1xuXG4gICAgY29uc3QgcmVmcmVzaGFibGVBc3NpZ21lbnRzID0gT2JqZWN0LmFzc2lnbihbXSwgYXNzaWdubWVudHMpIGFzIGFueTtcbiAgICBsZXQgc3R1ZHlHcm91cHMgPSBmaWx0ZXJTdHVkeUdyb3Vwcy5sZW5ndGggPiAwICYmIE9iamVjdC5rZXlzKG1vY2tUdWl0aW9uU3R1ZGVudHMpLmZpbHRlcihnciA9PiBmaWx0ZXJTdHVkeUdyb3Vwcy5pbmNsdWRlcyhncikpLm1hcChzdCA9PiBtb2NrVHVpdGlvblN0dWRlbnRzW3N0XSk7XG4gICAgbGV0IGZpbHRlcmVkQXNzaWdubWVudHMgPSBmaWx0ZXJTdHVkeUdyb3Vwcy5sZW5ndGggPiAwID8gcmVmcmVzaGFibGVBc3NpZ21lbnRzLmZpbHRlcihyID0+IGZsYXR0ZW4oc3R1ZHlHcm91cHMpLmZpbmQoc2c9PiBzZy5zdHVkZW50RW1haWxBZGRyZXNzID09PSByLnVzZXIpKSA6IHJlZnJlc2hhYmxlQXNzaWdtZW50cztcbiAgICAvL2RldGVybWluZSB3aGljaCBhc3NpZ25tZW50cyBzaG91bGQgZ2V0IGRhdGEgZnJvbSB1cmt1bmRcbiAgICBjaGVja1dpdGhVcmt1bmQgJiYgZmlsdGVyZWRBc3NpZ25tZW50cy5sZW5ndGggPiAwICYmIGZpbHRlcmVkQXNzaWdubWVudHMuZm9yRWFjaChhID0+IHtcbiAgICAgICAgYS5zaG91bGRSZWZyZXNoID0gZmFsc2U7XG4gICAgICAgIGlmIChhLm1ldGFkYXRhICYmXG4gICAgICAgICAgICBhLm1ldGFkYXRhLnVya3VuZEV4dGVybmFsSWQgJiYgXG4gICAgICAgICAgICBhLm1ldGFkYXRhLnVya3VuZEV4dGVybmFsSWQubGVuZ3RoID4gMCAmJi8vIE11c3QgaGF2ZSBtZXRhZGF0YS51cmt1bmRFeHRlcm5hbElkIE90aGVyd2lzZSBub3QgcG9zc2libGUgdG8gcmVmcmVzaFxuICAgICAgICAgICAgIWEubWV0YWRhdGEudXJrdW5kVXBsb2FkRXJyb3IgJiYgKCAvLyBOb3QgcG9zc2libGUgdG8gcmVmcmVzaCBpZiB1cGxvYWQgaGFzIGZhaWxlZFxuICAgICAgICAgICAgICAgICFhLm1ldGFkYXRhLnVya3VuZExhc3RQb2xsIHx8IC8vIE5ldmVyIGNoZWNrZWQgc3RhdHVzIHlldFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgWydBY2NlcHRlZCcsICdTdWJtaXR0ZWQnXS5pbmRleE9mKChKU09OLnBhcnNlKGEubWV0YWRhdGEudXJrdW5kUmVzcG9uc2UpWzBdIGFzIFVya3VuZFJlc3BvbnNlKS5TdGF0dXMuU3RhdGUpID49IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYS5tZXRhZGF0YS51cmt1bmRMYXN0UG9sbCkgPCBtb21lbnQoKS5hZGQoLTE1LCBcInNlY29uZHNcIikudG9EYXRlKCkuZ2V0VGltZSgpKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBhLnNob3VsZFJlZnJlc2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gZmlsdGVyZWRBc3NpZ25tZW50cy5sZW5ndGggPiAwID8gPHRhYmxlIGNsYXNzTmFtZT1cInRhc2stYXNzaWdubWVudHMtdGFibGVcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD57aW50bC5mb3JtYXRNZXNzYWdlKHtpZDpcInRlYWNoZXJWaWV3LmFzc2lnbm1lbnRTdHVkZW50TmFtZVwiLCBkZWZhdWx0TWVzc2FnZTpcIkVsZXZcIn0pfTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPntpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOlwidGVhY2hlclZpZXcuYXNzaWdubWVudEZpbGVOYW1lXCIsIGRlZmF1bHRNZXNzYWdlOlwiRmlsbmFtblwifSl9PC90aD5cbiAgICAgICAgICAgICAgICA8dGg+e2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6XCJ0ZWFjaGVyVmlldy5hc3NpZ25tZW50U3VibWl0dGVkQXRcIiwgZGVmYXVsdE1lc3NhZ2U6XCJJbmxhbW5hdFwifSl9PC90aD5cbiAgICAgICAgICAgICAgICA8dGg+e2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6XCJ0ZWFjaGVyVmlldy5hc3NpZ25tZW50UmVwb3J0XCIsIGRlZmF1bHRNZXNzYWdlOlwiUmFwcG9ydFwifSl9PC90aD5cbiAgICAgICAgICAgICAgICA8dGg+e2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6XCJ0ZWFjaGVyVmlldy5hc3NpZ25tZW50R3JhZGVcIiwgZGVmYXVsdE1lc3NhZ2U6XCJOaXZhXCJ9KX08L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge2ZpbHRlcmVkQXNzaWdubWVudHMubWFwKGFzc2lnbm1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8VGFza0Fzc2lnbm1lbnQga2V5PXthc3NpZ25tZW50LnVwbG9hZERhdGV9IGFzc2lnbm1lbnQ9e2Fzc2lnbm1lbnR9IHNob3VsZEdldFVya3VuZFN0YXR1cyA9IHthc3NpZ25tZW50LnNob3VsZFJlZnJlc2h9IC8+XG4gICAgICAgICAgICB9KX1cblxuICAgICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgICAgIDpcbiAgICAgICAgPGRpdj57aW50bC5mb3JtYXRNZXNzYWdlKHtpZDpcInRlYWNoZXJWaWV3Lm5vVGFza0Fzc2lnbm1lbnRzXCIsIGRlZmF1bHRNZXNzYWdlOlwiSW5nYSB1cHBkcmFnIHVwcGxhZGRhZGUgZsO2ciBkZW5uYSB1cHBnaWZ0XCJ9KX08L2Rpdj5cbiAgXG59KSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvdXJzZU1vZHVsZVZpZXcgfSBmcm9tICcuL2NvdXJzZS1tb2R1bGUnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi91dGlsaXR5LWNvbXBvbmVudHMvTGFuZ3VhZ2VDb250ZXh0JztcbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gJy4uL2RpZ2VzdC12aWV3JztcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcblxuZXhwb3J0IGNvbnN0IEFzc2lnbm1lbnRzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe2ZpbHRlclN0dWR5R3JvdXBzOiBbXX0pO1xuXG5leHBvcnQgY29uc3QgQXNzaWdubWVudHNWaWV3ID0gKCgpID0+IHtcbiAgICBjb25zdCB7IGludGwgfSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KTtcbiAgICBjb25zdCBbc2VsZWN0ZWRTdHVkeUdyb3Vwcywgc2V0RmlsdGVyU3R1ZHlHcm91cF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgeyB0YXNrcywgc2VsZWN0ZWRDb3Vyc2UgfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcblxuICAgIGNvbnN0IGRlZmF1bHREZXNjcmlwdGlvbk1lc3NhZ2UgPSBcIkjDpHIgbGlzdGFzIHNhbXRsaWdhIGlubMOkbW5pbmdzdXBwZ2lmdGVyIGkgZGluL2RpbmEga3Vyc2VyIGR1IGhhbmRsZWRlci5cIlxuICAgICAgICArIFwiS2xpY2thIHRpbGwgaMO2Z2VyIGbDtnIgYXR0IHbDpGxqYSBrdXJzLiBLdXJzZW5zIHVwcGdpZnRlciBzeW5zIG5lZGFuLiBEdSBrYW4gw7ZwcG5hL2TDtmxqYSB2YXJqZSBtb2R1bC5cIjtcblxuICAgIHJldHVybiA8PiB7c2VsZWN0ZWRDb3Vyc2UgP1xuICAgICAgICA8QXNzaWdubWVudHNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7ZmlsdGVyU3R1ZHlHcm91cHM6IHNlbGVjdGVkU3R1ZHlHcm91cHN9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdi1yb3cgc3YtbGF5b3V0IHN2LXNraXAtc3BhY2VyXCI+XG4gICAgICAgICAgICA8aDI+e2ludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiBcInRlYWNoZXJWaWV3LmFzc2lnbm1lbnRzVmlld1RpdGxlXCIsIGRlZmF1bHRNZXNzYWdlOiBcIklubMOkbW5pbmdzdXBwZ2lmdGVyXCIgfSl9PC9oMj5cbiAgICAgICAgICAgIDxwPntpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogXCJ0ZWFjaGVyVmlldy5hc3NpZ25tZW50c1ZpZXdEZXNjcmlwdGlvblwiLCBkZWZhdWx0TWVzc2FnZTogeyBkZWZhdWx0RGVzY3JpcHRpb25NZXNzYWdlIH0gfSl9PC9wPlxuICAgICAgICAgICAgPGgzPntzZWxlY3RlZENvdXJzZS5uYW1lfS17c2VsZWN0ZWRDb3Vyc2UuZGVzY3JpcHRpb259PC9oMz5cbiAgICAgICAgICAgIHtzZWxlY3RlZENvdXJzZS5zdHVkeUdyb3VwcyAmJiBzZWxlY3RlZENvdXJzZS5zdHVkeUdyb3Vwcy5sZW5ndGggPiAwICYmIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdi1yb3cgc3YtbGF5b3V0IHN2LXNraXAtc3BhY2VyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3Jpem9udGFsSXRlbSB0b3AgcHVsbC1yaWdodCBzdHVkeS1ncm91cC1maWx0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNNdWx0aT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3NlbGVjdGVkQ291cnNlLnN0dWR5R3JvdXBzLm1hcChzZyA9PiAoeyBsYWJlbDogc2csIHZhbHVlOiBzZyB9KSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRTdHVkeUdyb3Vwcy5tYXAoZ3JvdXAgPT4gKHsgbGFiZWw6IGdyb3VwLCB2YWx1ZTogZ3JvdXAgfSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2ludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiBcInRlYWNoZXJWaWV3LmZpbHRlckJ5U3R1ZHlncm91cHNQbGFjZWhvbGRlclwiLCBkZWZhdWx0TWVzc2FnZTogXCJWw6RsaiBzdHVkaWVncnVwcFwiIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhvcHRpb25zOiBBcnJheTx7IGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfT4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWx0ZXJTdHVkeUdyb3VwKG9wdGlvbnMubWFwKCh7IHZhbHVlIH0pID0+IHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7c2VsZWN0ZWRDb3Vyc2UubW9kdWxlcy5tYXAobW9kdWxlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGVUYXNrcyA9IHRhc2tzLmZpbHRlcih0ID0+IG1vZHVsZS50YXNrSWRzLmZpbmQodElkID0+IHRJZCA9PT0gdC5pZCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2R1bGVUYXNrcy5sZW5ndGggPiAwID8gPENvdXJzZU1vZHVsZVZpZXcgdGFza3M9e21vZHVsZVRhc2tzfSBrZXk9e21vZHVsZS5pZH0gbW9kdWxlPXttb2R1bGV9IC8+IDogbnVsbDtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Bc3NpZ25tZW50c0NvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDogbnVsbH08Lz5cbn0pOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IERyaXZlRmlsZUxpc3RpbmcsIGRvd25sb2FkRmlsZSwgZ2V0VXJrdW5kU3RhdHVzIH0gZnJvbSAnLi4vLi4vY291cnNlLXZpZXdlci9jb3Vyc2UtcGFnZS90YXNrLWFzc2lnbm1lbnRzLXV0aWxzJztcbmltcG9ydCB7IEFzc2lnbm1lbnQgfSBmcm9tICdrZWRiYWNrZW5kL21vZGVscyc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzL0tFRC5lbnYnO1xuaW1wb3J0IHsgSHR0cEVycm9yIH0gZnJvbSAna2VkYmFja2VuZC9jbGllbnQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1heExlbmd0aCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBhc3NpZ25tZW50OiBBc3NpZ25tZW50O1xuICAgIHNob3VsZEdldFVya3VuZFN0YXR1czogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY29uc3QgVGFza0Fzc2lnbm1lbnQgPSAoKHsgYXNzaWdubWVudCwgc2hvdWxkR2V0VXJrdW5kU3RhdHVzIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW2Fzc2lnbm1lbnRzV2l0aFN0YXR1cywgc2V0QXNzaWdubWVudFN0YXR1c10gPSB1c2VTdGF0ZShhc3NpZ25tZW50KTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hBc3NpZ25tZW50KGFzc2lnbm1lbnQ6IEFzc2lnbm1lbnQpIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gZW52LmtlZEJhY2tlbmRDbGllbnQuaHR0cDtcbiAgICAgICAgY29uc3QgeyBjb3Vyc2VJZCwgdGFza0lkLCBzY2hvb2wgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdXNlciwgZmlsZW5hbWUgfSA9IGFzc2lnbm1lbnQ7XG4gICAgICAgIGF3YWl0IHNldEFzc2lnbm1lbnRTdGF0dXMoeyAuLi5hc3NpZ25tZW50LCBpc1JlZnJlc2hpbmc6IHRydWUgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBjbGllbnQuZ2V0KGBhc3NpZ25tZW50cy91cmt1bmQvJHtzY2hvb2x9LyR7Y291cnNlSWR9LyR7dGFza0lkfS8ke3VzZXJ9LyR7ZmlsZW5hbWV9YCk7XG4gICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA+PSA0MDApIHRocm93IG5ldyBIdHRwRXJyb3IocmVxLnN0YXR1cywgYXdhaXQgcmVxLnRleHQoKSk7XG4gICAgICAgICAgICBjb25zdCByZXNKc29uID0gYXdhaXQgcmVxLnRleHQoKTtcbiAgICAgICAgICAgIGF3YWl0IHNldEFzc2lnbm1lbnRTdGF0dXMoe1xuICAgICAgICAgICAgICAgIC4uLmFzc2lnbm1lbnQsIGlzUmVmcmVzaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYXNzaWdubWVudC5tZXRhZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgdXJrdW5kUmVzcG9uc2U6IHJlc0pzb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgYXdhaXQgc2V0QXNzaWdubWVudFN0YXR1cyh7IC4uLmFzc2lnbm1lbnQsIGlzUmVmcmVzaGluZzogZmFsc2UsIHJlZnJlc2hFcnJvcjogZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzaG91bGRHZXRVcmt1bmRTdGF0dXMpIHtcbiAgICAgICAgICAgIHNldEFzc2lnbm1lbnRTdGF0dXMoeyAuLi5hc3NpZ25tZW50LCBpc1JlZnJlc2hpbmc6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbc2hvdWxkR2V0VXJrdW5kU3RhdHVzLCBhc3NpZ25tZW50XSlcblxuICAgIHJldHVybiA8dHIga2V5PXthc3NpZ25tZW50c1dpdGhTdGF0dXMubWVkaWFMaW5rfSBzdHlsZT17YXNzaWdubWVudHNXaXRoU3RhdHVzLm1ldGFkYXRhLiRtZXRhID8geyBvcGFjaXR5OiAwLjUgfSA6IHt9fT5cbiAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke2Fzc2lnbm1lbnRzV2l0aFN0YXR1cy51c2VyfWB9PlxuICAgICAgICAgICAgICAgIHthc3NpZ25tZW50c1dpdGhTdGF0dXMubWV0YWRhdGEudXNlckRpc3BsYXlOYW1lIHx8IGFzc2lnbm1lbnRzV2l0aFN0YXR1cy51c2VyfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICB7YXNzaWdubWVudHNXaXRoU3RhdHVzLm1ldGFkYXRhLmRyaXZlRmlsZUlkID9cbiAgICAgICAgICAgICAgICAvLyBUaGUgZmlsZSBjYW4gYmUgZWRpdGVkIG9uIGRyaXZlLiBMaW5rIHRvIGVkaXRpbmcgaXQuXG4gICAgICAgICAgICAgICAgPERyaXZlRmlsZUxpc3RpbmcgZmlsZT17YXNzaWdubWVudHNXaXRoU3RhdHVzfSAvPiA6XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZEZpbGUoYXNzaWdubWVudHNXaXRoU3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfX0+e21heExlbmd0aChhc3NpZ25tZW50c1dpdGhTdGF0dXMuZmlsZW5hbWUsIDMyKX08L2E+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhc3NpZ25tZW50LWRhdGUtY29sXCI+e21vbWVudChhc3NpZ25tZW50c1dpdGhTdGF0dXMudXBsb2FkRGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tJyl9PC90ZD5cbiAgICAgICAge2dldFVya3VuZFN0YXR1cyhhc3NpZ25tZW50c1dpdGhTdGF0dXMsIHJlZnJlc2hBc3NpZ25tZW50LCBzaG91bGRHZXRVcmt1bmRTdGF0dXMpfVxuICAgIDwvdHI+XG59KSIsImltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMsIHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IExhbmd1YWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3V0aWxpdHktY29tcG9uZW50cy9MYW5ndWFnZUNvbnRleHQnO1xuaW1wb3J0IHsgcHJlc2VydmVJbXBlcnNvbmF0aW9uUXVlcnkgfSBmcm9tICcuLi8uLi8uLi9hY2Nlc3MtY29udHJvbCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25JY29uIH0gZnJvbSAnLi4vc2hhcmVkL25vdGlmaWNhdGlvbi1pY29uJztcbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gJy4uL2RpZ2VzdC12aWV3JztcbmltcG9ydCB7IE9ic2VydmUgfSBmcm9tICcuLi8uLi91dGlsaXR5LWNvbXBvbmVudHMvb2JzZXJ2ZSc7XG5pbXBvcnQgeyBMYXp5Q29udGVudCB9IGZyb20gJy4uLy4uL3V0aWxpdHktY29tcG9uZW50cy9sYXp5LWNvbnRlbnQnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGNvdXJzZUJ1aWxkZXJVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IENvdXJzZXNWaWV3ID0gKCh7IGNvdXJzZUJ1aWxkZXJVcmwgfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGludGwgfSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KTtcbiAgICBjb25zdCB7bm90aWZpY2F0aW9uZGlnZXN0cywgdGVhY2hlckNvdXJzZXMsIHNlbGVjdGVkQ291cnNlfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInN2LWh0bWwtcG9ydGxldCBzdi1wb3J0bGV0IHN2LXNraXAtc3BhY2VyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2VkX2JveGVkXCI+XG4gICAgICAgICAgICA8aDM+e2ludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiBcInRlYWNoZXJWaWV3LmNvdXJzZXNWaWV3VGl0bGVcIiwgZGVmYXVsdE1lc3NhZ2U6IFwiTWluYSBrdXJzZXIvIHVwcGdpZnRlclwiIH0pfTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhc2tDb250YWluZXIgb2RkLWV2ZW5cIj5cbiAgICAgICAgICAgICAgICB7dGVhY2hlckNvdXJzZXMubWFwKChjb3Vyc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtjb3Vyc2UuaWQgKyBjb3Vyc2UuY29kZX0gY2xhc3NOYW1lPVwiYWxpZ24taG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhY2hlclNjaG9vbENvdXJzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvcml6b250YWxJdGVtIHRvcCBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgJHtwcmVzZXJ2ZUltcGVyc29uYXRpb25RdWVyeShjb3Vyc2VCdWlsZGVyVXJsLCB7fSl9Iy9jb3Vyc2VzLyR7Y291cnNlLmlkfS9lZGl0YH0gY2xhc3NOYW1lPVwiZWRpdEl0ZW1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3Jpem9udGFsSXRlbSB0b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17XCJsaW5rQ291cnNlX1wiICsgY291cnNlLmlkfSBjbGFzc05hbWU9e3NlbGVjdGVkQ291cnNlICYmIHNlbGVjdGVkQ291cnNlLmlkID09PSBjb3Vyc2UuaWQgPyBcInNlbGVjdGVkXCIgOiBcIlwifSB0bz17YC9vdmVydmlldy9jb3Vyc2UvJHtjb3Vyc2UuaWR9L2Fzc2lnbm1lbnRzYH0+e2NvdXJzZS5uYW1lfSAtIHtjb3Vyc2UuZGVzY3JpcHRpb259PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25JY29uIGtleT17XCJub3RpZmljdGlvbmFfXCIgKyBjb3Vyc2UuaWR9IG5vdGlmaWNhdGlvbmRpZ2VzdHM9e25vdGlmaWNhdGlvbmRpZ2VzdHN9IGVudGl0eT17J2NvdXJzZSd9IGNvdXJzZT17Y291cnNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG59KTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzLCB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHsgVHdvQ29sdW1uc1BhZ2UgfSBmcm9tICcuLi9jb3Vyc2UtYnVpbGRlci1rcy9jb21tb24vdHdvLWNvbHVtbnMtcGFnZSc7XG5pbXBvcnQgeyBBc3NpZ25tZW50c1ZpZXcgfSBmcm9tICcuL2Fzc2lnbm1lbnRzLXZpZXcnO1xuaW1wb3J0IHsgQ291cnNlc1ZpZXcgfSBmcm9tICcuL2NvdXJzZXMtdmlldyc7XG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uL2dsb2JhbHMvZGInO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vLi4vZ2xvYmFscy9LRUQuZW52JztcbmltcG9ydCB7IENvdXJzZSwgU2VlblN0dWRlbnRBc3NpZ25tZW50LCBUYXNrIH0gZnJvbSAna2VkYmFja2VuZC9tb2RlbHMnO1xuaW1wb3J0IHsgSHR0cEVycm9yLCBzaW1wbGVEaWdlc3QsIHNpbXBsZURpZ2VzdFN1c3BlbnNlfSBmcm9tICdrZWRiYWNrZW5kL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcGFyZVByb3BzLCBzaG93RXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBPYnNlcnZlIH0gZnJvbSAnLi4vdXRpbGl0eS1jb21wb25lbnRzL29ic2VydmUnO1xuaW1wb3J0IHsgRW1pdHRlciwgVmFsdWUgfSBmcm9tICdrZWRiYWNrZW5kL29ic2VydmFibGUnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBSb3V0ZUNvbXBvbmVudFByb3BzPGFueT4ge1xuICAgIGNvdXJzZUJ1aWxkZXJVcmw6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgQ29udGV4dCB7XG4gICAgbm90aWZpY2F0aW9uZGlnZXN0czogeyBba2V5OiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IGFueVtdIH0gfTtcbiAgICBzZWxlY3RlZENvdXJzZTogQ291cnNlO1xuICAgIHRlYWNoZXJDb3Vyc2VzOiBDb3Vyc2VbXTtcbiAgICBzZWVuRGlnZXN0c09ic2VydmFibGU6IFZhbHVlPFNlZW5TdHVkZW50QXNzaWdubWVudFtdPjtcbiAgICBzY2hvb2w6IHN0cmluZztcbiAgICB0YXNrczogVGFza1tdO1xufVxuXG5sZXQgY29udGV4dEluaXRpYWxWYWx1ZSA6IENvbnRleHQgPSB7bm90aWZpY2F0aW9uZGlnZXN0czoge30sIHNlbGVjdGVkQ291cnNlOiBudWxsLCB0ZWFjaGVyQ291cnNlczogW10sIHNlZW5EaWdlc3RzT2JzZXJ2YWJsZSA6IG5ldyBFbWl0dGVyPFNlZW5TdHVkZW50QXNzaWdubWVudFtdPihbXSksIHNjaG9vbDogXCJcIiwgdGFza3M6IFtdfTtcbmV4cG9ydCBjb25zdCBTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGNvbnRleHRJbml0aWFsVmFsdWUpO1xuXG5cbmV4cG9ydCBjb25zdCBEaWdlc3RWaWV3ID0gd2l0aFJvdXRlcigoKHsgbWF0Y2gsIGNvdXJzZUJ1aWxkZXJVcmwgfTogUHJvcHMpID0+IHtcbiAgICB2YXIgY291cnNlSWQgPSBtYXRjaCA/IG1hdGNoLnBhcmFtcy5jb3Vyc2VJZCA6IG51bGw7XG4gICAgdmFyIGNvdXJzZUlkID0gY291cnNlSWQgPyBjb3Vyc2VJZCA6IG51bGw7XG4gICAgdmFyIG15Q291cnNlcyA6IENvdXJzZVtdID0gW107XG4gICAgLy9jb25zdCBbbm90aWZpY2F0aW9uZGlnZXN0cywgc2V0QXNzaWdubWVudHNdID0gdXNlU3RhdGUoe2Fzc2lnbm1lbnRzIDoge30sIGRpZ2VzdElkczogW119KTtcblxuXG4gICAgY29uc3Qgc2Nob29sID0gZGIuc2Nob29scy50YWdzKFwiZ3ltbmFzaXVtXCIpLm5hbWUoZW52LmN1cnJlbnRVc2VyLnNjaG9vbCkuaW5jbHVkZShcImNvdXJzZXNcIikuc2luZ2xlKCkucmVhZCgpO1xuXG4gICAgbGV0IHNjaG9vbENvdXJzZXMgPSBzY2hvb2wgPyBzY2hvb2wuY291cnNlcyA6IFtdO1xuICAgIGlmIChzY2hvb2xDb3Vyc2VzKSB7XG4gICAgICAgIGNvbnN0IG1lID0gZW52LmN1cnJlbnRVc2VyLm1haWw7XG5cbiAgICAgICAgc2Nob29sQ291cnNlcy5mb3JFYWNoKChjb3Vyc2U6IENvdXJzZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvdXJzZS5tb2R1bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY291cnNlLmFjdGl2YXRlZEJ5ICYmIGNvdXJzZS5hY3RpdmF0ZWRCeS51cmwgPT0gbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbXlDb3Vyc2VzLnB1c2goY291cnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvdXJzZS5yZXNwb25zaWJsZVRlYWNoZXJzLmZpbHRlcih0ID0+IHQudXJsID09IG1lKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG15Q291cnNlcy5wdXNoKGNvdXJzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBteUNvdXJzZXMgPSBteUNvdXJzZXMuc29ydChjb21wYXJlUHJvcHMoW1wibmFtZVwiLCBcImRhdGVUaW1lXCJdKSk7XG4gICAgY29uc3QgdGFza3MgPSBteUNvdXJzZXMgPyBkYi50YXNrcy5oYXNFZGdlc0Zyb20obXlDb3Vyc2VzLm1hcChjID0+IGMuaWQpKS50b1ZhbHVlKCkucmVhZCgpIDogW107XG4gICAgY29uc3QgdGFza0Fzc2lnbm1lbnRzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5hc3NpZ25tZW50ID09PSB0cnVlKTtcblxuICAgIGNvbnN0IHNjaG9vbE5hbWUgPSBzY2hvb2wubmFtZTtcbiAgICBjb25zdCBjb3Vyc2VJZHMgPSBteUNvdXJzZXMubWFwKGZ1bmN0aW9uIChlKSB7cmV0dXJuIGUuaWQ7fSkuam9pbignLCcpO1xuICAgIGNvbnN0IHNlbGVjdGVkQ291cnNlID0gbXlDb3Vyc2VzLmZpbmQoYyA9PiBjLmlkID09PSBjb3Vyc2VJZCk7XG5cbiAgICBjb25zdCByZXMgPSBlbnYua2VkQmFja2VuZENsaWVudC5odHRwLnN1c3BlbnNlR2V0KFwiYXNzaWdubWVudHMvbm90aWZpY2F0aW9uZGlnZXN0c1wiLCB7IHNjaG9vbDogc2Nob29sTmFtZSwgY291cnNlSWRzIH0pO1xuICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEh0dHBFcnJvcihyZXMuc3RhdHVzLCByZXMudGV4dCgpKTtcbiAgICB9XG4gICAgY29uc3QgYXNzaWdubWVudHMgPSByZXMuanNvbigpIGFzIHsgW2tleTogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBhbnlbXSB9IH07XG4gICAgY29uc3QgZGlnZXN0QXJyYXkgPSBzaW1wbGVEaWdlc3RTdXNwZW5zZShteUNvdXJzZXMubWFwKGNvdXJzZSA9PiBlbnYuY3VycmVudFVzZXIubWFpbCArIGNvdXJzZS5pZCkpO1xuXG4gICAgY29uc3Qgc2VlbkRpZ2VzdHNPYnNlcnZhYmxlID0gZGlnZXN0QXJyYXkubGVuZ3RoID4gMCA/XG4gICAgICAgIGRiLnNlZW5TdHVkZW50QXNzaWdubWVudHMudGFncyguLi5kaWdlc3RBcnJheSkudG9WYWx1ZSgpIDpcbiAgICAgICAgbmV3IEVtaXR0ZXI8U2VlblN0dWRlbnRBc3NpZ25tZW50W10+KFtdKTtcblxuICAgIGxldCBjb250ZXh0VmFsdWUgPSB7XG4gICAgICAgIG5vdGlmaWNhdGlvbmRpZ2VzdHM6IGFzc2lnbm1lbnRzLFxuICAgICAgICBzZWxlY3RlZENvdXJzZSwgXG4gICAgICAgIHRlYWNoZXJDb3Vyc2VzIDogbXlDb3Vyc2VzLFxuICAgICAgICBzZWVuRGlnZXN0c09ic2VydmFibGUsXG4gICAgICAgIHNjaG9vbDogc2Nob29sTmFtZSxcbiAgICAgICAgdGFza3M6IHRhc2tBc3NpZ25tZW50c1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gIDxTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+PFR3b0NvbHVtbnNQYWdlXG4gICAgbGVmdD17PEFzc2lnbm1lbnRzVmlldyBrZXk9e3NlbGVjdGVkQ291cnNlID8gc2VsZWN0ZWRDb3Vyc2UuaWQgOiBcIlwifS8+fVxuICAgIHJpZ2h0PXs8Q291cnNlc1ZpZXcgY291cnNlQnVpbGRlclVybD17Y291cnNlQnVpbGRlclVybH0vPn1cbiAgICByaWdodFdpZHRoPXs1fSAvPjwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxufSkpO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGFzaFJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBSZWRpcmVjdH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBPYnNlcnZlIH0gZnJvbSAnLi4vdXRpbGl0eS1jb21wb25lbnRzL29ic2VydmUnO1xuaW1wb3J0IHsgRWxsaXBzaXNMb2FkZXIgfSBmcm9tICcuLi9jb3Vyc2UtYnVpbGRlci9zdWItY29tcG9uZW50cy9lbGxpcHNpcy1sb2FkZXInO1xuaW1wb3J0IHsgRGlnZXN0VmlldyB9IGZyb20gJy4vZGlnZXN0LXZpZXcnO1xuaW1wb3J0IHsgc2V0dXBJbnRsIH0gZnJvbSAnLi4vdXRpbGl0eS1jb21wb25lbnRzL1NldHVwTGFuZ3VhZ2VJbnRsJztcbmltcG9ydCB7IGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBjb3Vyc2VCdWlsZGVyVXJsOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFRlYWNoZXJWaWV3QXBwID0gKHtjb3Vyc2VCdWlsZGVyVXJsfTogUHJvcHMpID0+IHsgICAgXG4gICAgcmV0dXJuIDxSb3V0ZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhY2hlci12aWV3XCI+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBleGFjdCByZW5kZXI9eygpID0+IDxSZWRpcmVjdCB0bz17YC9vdmVydmlld2B9IC8+fSAvPlxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0PXtmYWxzZX0gcGF0aD1cIi9vdmVydmlldy9jb3Vyc2UvOmNvdXJzZUlkL2Fzc2lnbm1lbnRzXCI+XG4gICAgICAgICAgICAgICAgPE9ic2VydmUgZmFsbGJhY2s9ezxFbGxpcHNpc0xvYWRlciAvPn0+XG4gICAgICAgICAgICAgICAgICAgIDxEaWdlc3RWaWV3IGNvdXJzZUJ1aWxkZXJVcmwgPXtjb3Vyc2VCdWlsZGVyVXJsfS8+XG4gICAgICAgICAgICAgICAgPC9PYnNlcnZlPlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9Sb3V0ZXI+XG59O1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvdXJzZSwgU2VlblN0dWRlbnRBc3NpZ25tZW50IH0gZnJvbSAna2VkYmFja2VuZC9tb2RlbHMnO1xuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vZGlnZXN0LXZpZXcnO1xuaW1wb3J0IHsgTGF6eUNvbnRlbnQgfSBmcm9tICcuLi8uLi91dGlsaXR5LWNvbXBvbmVudHMvbGF6eS1jb250ZW50JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBjb3Vyc2U6IENvdXJzZTtcbiAgICBtb2R1bGVJZD86IHN0cmluZztcbiAgICB0YXNrSWQ/OiBzdHJpbmc7XG4gICAgZW50aXR5OiAnY291cnNlJyB8ICdtb2R1bGUnIHwgJ3Rhc2snO1xuICAgIG5vdGlmaWNhdGlvbmRpZ2VzdHM6IHsgW2tleTogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBhbnlbXSB9IH07XG59XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25JY29uID0gKCh7IGNvdXJzZSwgZW50aXR5LCBtb2R1bGVJZCwgdGFza0lkLCBub3RpZmljYXRpb25kaWdlc3RzIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBzZWVuRGlnZXN0c09ic2VydmFibGU6IHNlZW5EaWdlc3RzT2JzZXJhYmxlIH0gPSBSZWFjdC51c2VDb250ZXh0KFN0YXRlQ29udGV4dCk7XG4gICAgcmV0dXJuIDxMYXp5Q29udGVudD5cbiAgICAgICAge3NlZW5EaWdlc3RzT2JzZXJhYmxlLm1hcChzZWVuRGlnZXN0cyA9PiB7XG4gICAgICAgICAgICBsZXQgbm90aWZpY2F0aW9uczogbnVtYmVyID0gMDtcbiAgICAgICAgICAgIGxldCBjb3Vyc2VOb3RpZmljYXRpb25zID0gbm90aWZpY2F0aW9uZGlnZXN0c1tjb3Vyc2UuaWRdO1xuICAgICAgICAgICAgaWYgKGNvdXJzZU5vdGlmaWNhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5ID09PSAnY291cnNlJykge1xuICAgICAgICAgICAgICAgICAgICBjb3Vyc2UubW9kdWxlcy5mb3JFYWNoKGNtb2QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY21vZC50YXNrSWRzLmZvckVhY2goY291cnNlVGFzayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9ucyArPSBnZXRUYXNrTm90aWZpY2F0aW9ucyhjb3Vyc2VOb3RpZmljYXRpb25zW2NvdXJzZVRhc2tdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRpdHkgPT09ICdtb2R1bGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TW9kdWxlID0gY291cnNlLm1vZHVsZXMuZmluZChtID0+IG0uaWQgPT0gbW9kdWxlSWQpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TW9kdWxlICYmIGN1cnJlbnRNb2R1bGUudGFza0lkcy5mb3JFYWNoKGNvdXJzZVRhc2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9ucyArPSBnZXRUYXNrTm90aWZpY2F0aW9ucyhjb3Vyc2VOb3RpZmljYXRpb25zW2NvdXJzZVRhc2tdKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVudGl0eSA9PT0gJ3Rhc2snKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbnMgKz0gZ2V0VGFza05vdGlmaWNhdGlvbnMoY291cnNlTm90aWZpY2F0aW9uc1t0YXNrSWRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRhc2tOb3RpZmljYXRpb25zKHRhc2tBc3NpZ25tZW50czogYW55W10pIHtcbiAgICAgICAgICAgICAgICBpZih0YXNrQXNzaWdubWVudHMpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFza0Fzc2lnbm1lbnRzLmZpbHRlcih0PT4gIXNlZW5EaWdlc3RzLmZpbmQoZCA9PiBkLmRpZ2VzdCA9PT0gdC5kaWdlc3QpKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9ucyA+IDAgJiYgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24taWNvblwiPntub3RpZmljYXRpb25zfTwvZGl2PlxuXG4gICAgICAgIH0pfVxuICAgIDwvTGF6eUNvbnRlbnQ+O1xufSk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7aW50bDogbnVsbH0pOyIsImltcG9ydCB7SW50bFByb3ZpZGVyLCBhZGRMb2NhbGVEYXRhfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBsb2NhbGVfZW4gZnJvbSAncmVhY3QtaW50bC9sb2NhbGUtZGF0YS9lbic7XG5pbXBvcnQgbG9jYWxlX3N2IGZyb20gJ3JlYWN0LWludGwvbG9jYWxlLWRhdGEvc3YnO1xuaW1wb3J0IG1lc3NhZ2VzX3N2IGZyb20gXCIuLi8uLi90cmFuc2xhdGlvbnMvc3YuanNvblwiO1xuaW1wb3J0IG1lc3NhZ2VzX2VuIGZyb20gXCIuLi8uLi90cmFuc2xhdGlvbnMvZW4uanNvblwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNmZyBmcm9tICcuLi8uLi9nbG9iYWxzL0tFRC5jZmcnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgY29uc3Qgc2V0dXBJbnRsID0gPFAgZXh0ZW5kcyBvYmplY3Q+KENvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50VHlwZTxQPikgPT5cbiAgICBjbGFzcyBfU2V0dXBMYW5ndWFnZUludGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UD57XG4gICAgICAgIG1lc3NhZ2VzIDogb2JqZWN0O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgIGFkZExvY2FsZURhdGEoWy4uLmxvY2FsZV9lbiwuLi5sb2NhbGVfc3ZdKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMgPSB7XG4gICAgICAgICAgICAnc3YnOiBtZXNzYWdlc19zdixcbiAgICAgICAgICAgICdlbic6IG1lc3NhZ2VzX2VuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbW9tZW50KCkubG9jYWxlKGNmZy5LRURfTE9DQUxFKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcigpe1xuICAgICAgICAgICAgcmV0dXJuIDxJbnRsUHJvdmlkZXIgbG9jYWxlPXtjZmcuS0VEX0xPQ0FMRX0gbWVzc2FnZXM9e3RoaXMubWVzc2FnZXNbY2ZnLktFRF9MT0NBTEVdfT5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzIGFzIFB9IC8+XG4gICAgICAgICAgICA8L0ludGxQcm92aWRlcj5cbiAgICAgICAgfVxuICAgIH0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAna2VkYmFja2VuZC9vYnNlcnZhYmxlJztcbmltcG9ydCB7IExpdmVRdWVyeVZpZXcgfSBmcm9tICcuL2xpdmUtcXVlcnktdmlldyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBPYnNlcnZhYmxlPEpTWC5FbGVtZW50PjtcbiAgc3Bpbm5lcj86IEpTWC5FbGVtZW50O1xuICBub0Vycm9yPzogYm9vbGVhbjtcbiAgb25FcnJvcj86IChlcnJvcjogRXJyb3IpID0+IEpTWC5FbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTGF6eUNvbnRlbnQoe2NoaWxkcmVuLCBzcGlubmVyLCBvbkVycm9yLCBub0Vycm9yfTogUHJvcHMpIHtcbiAgcmV0dXJuIDxMaXZlUXVlcnlWaWV3XG4gICAgcHJvcHM9e2NoaWxkcmVufVxuICAgIHNwaW5uZXI9e3NwaW5uZXJ9XG4gICAgbm9FcnJvcj17bm9FcnJvcn1cbiAgICBvbkVycm9yPXtvbkVycm9yfVxuICAgIGZuPXtvYnNlcnZhYmxlID0+IG9ic2VydmFibGV9IC8+O1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uL2NvdXJzZS1idWlsZGVyL3N1Yi1jb21wb25lbnRzL3NwaW5uZXInO1xuaW1wb3J0IHsgc2hhbGxvd0VxdWFscyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ2tlZGJhY2tlbmQvb2JzZXJ2YWJsZSc7XG5cbmludGVyZmFjZSBPcHRpb25zIHtcbiAgc3Bpbm5lcj86IEpTWC5FbGVtZW50O1xuICBvbkVycm9yPzogKGVycm9yOiBFcnJvcikgPT4gSlNYLkVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXZlUXVlcnlWaWV3PFRQcm9wcz4oXG4gIGZuOiAocHJvcHM6IFRQcm9wcykgPT4gT2JzZXJ2YWJsZTxKU1guRWxlbWVudD4sXG4gIG9wdGlvbnM/OiBPcHRpb25zKTogKHByb3BzOiBUUHJvcHMpID0+IEpTWC5FbGVtZW50XG57XG4gIHJldHVybiAocHJvcHM6IFRQcm9wcyk9PntcbiAgICByZXR1cm4gPExpdmVRdWVyeVZpZXcgcHJvcHM9e3Byb3BzfSBmbj17Zm59IHsuLi5vcHRpb25zfSAvPjtcbiAgfVxufVxuXG5pbnRlcmZhY2UgUHJvcHM8VFByb3BzPiB7XG4gIHByb3BzOiBUUHJvcHM7XG4gIHNwaW5uZXI/OiBKU1guRWxlbWVudDtcbiAgbm9FcnJvcj86IGJvb2xlYW47XG4gIG9uRXJyb3I/OiAoZXJyb3I6IEVycm9yKSA9PiBKU1guRWxlbWVudDtcbiAgZm46IChwcm9wczogVFByb3BzKSA9PiBPYnNlcnZhYmxlPEpTWC5FbGVtZW50Pjtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgcmVzdWx0OiBKU1guRWxlbWVudDtcbiAgZXJyb3I/OiBFcnJvcjtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgTGl2ZVF1ZXJ5VmlldzxUUHJvcHM+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPFRQcm9wcz4sIFN0YXRlPiB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wczxUUHJvcHM+KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXN1bHQ6IG51bGwsXG4gICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHM6IFByb3BzPFRQcm9wcz4sIG5leHRTdGF0ZTogU3RhdGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5lcnJvciAhPT0gbmV4dFN0YXRlLmVycm9yIHx8XG4gICAgICB0aGlzLnN0YXRlLmlzTG9hZGluZyAhPT0gbmV4dFN0YXRlLmlzTG9hZGluZyB8fFxuICAgICAgdGhpcy5zdGF0ZS5yZXN1bHQgIT09IG5leHRTdGF0ZS5yZXN1bHQgfHxcbiAgICAgICFzaGFsbG93RXF1YWxzKG5leHRQcm9wcy5wcm9wcywgdGhpcy5wcm9wcy5wcm9wcylcbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUHJvcHM8VFByb3BzPikge1xuICAgIGlmICghc2hhbGxvd0VxdWFscyhwcmV2UHJvcHMucHJvcHMsIHRoaXMucHJvcHMucHJvcHMpKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN1YnNjcmliZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtpc0xvYWRpbmc6IHRydWV9IGFzIGFueSk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnByb3BzLmZuKHRoaXMucHJvcHMucHJvcHMpLnN1YnNjcmliZSgocmVzdWx0LCBlcnJvcikgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICByZXN1bHQsXG4gICAgICBlcnJvcixcbiAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICB9KSk7XG4gIH1cblxuICB1bnN1YnNjcmliZSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7cmVzdWx0LCBlcnJvciwgaXNMb2FkaW5nfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge3NwaW5uZXIsIG9uRXJyb3IsIG5vRXJyb3J9ID0gdGhpcy5wcm9wcztcbiAgICAvL2lmICghaXNMb2FkaW5nICYmICFyZXN1bHQpIGRlYnVnZ2VyO1xuICAgIHJldHVybiBlcnJvciA/XG4gICAgICBub0Vycm9yID8gXCJcIiA6IG9uRXJyb3IgPyBvbkVycm9yKGVycm9yKSA6IDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+IDpcbiAgICAgIGlzTG9hZGluZyA/XG4gICAgICAgIHNwaW5uZXIgPyBzcGlubmVyIDogXCJcIiA6XG4gICAgICAgIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHJlc3VsdDtcbiAgfVxufSIsImltcG9ydCB7IEZpYmVyLCBGaWJlckNvbnRleHQsIFN1YnNjcmlwdGlvbiB9IGZyb20gXCJrZWRiYWNrZW5kL29ic2VydmFibGVcIjtcbmltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcblxuY29uc3QgRmliZXJDb250ZXh0UmVhY3QgPSBSZWFjdC5jcmVhdGVDb250ZXh0PEZpYmVyIHwgbnVsbD4obnVsbCk7XG5cbkZpYmVyQ29udGV4dC5hZGRQcm92aWRlcigoKT0+XG4gIC8vIEhlcmUgd2UgYWN0dWFsbCBkbyB1c2VIb29rKEZpYmVyQ29udGV4dCkgYnV0IHdpdGhvdXQgbG9nZ2luZyB0byBpbnRlcm5hbCBkZWJ1ZyBsb2dzXG4gIC8vIE5vcm1hbGx5LCByZWFjdCBob29rcyBhcmUgc2Vuc2l0aXZlIGluIHdoaWNoIG9yZGVyIHRoZXkgYXJlIGNhbGxlZCAodXNlU3RhdGUoKSwgZXRjKVxuICAvLyBidXQgdXNlQ29udGV4dCgpIGlzIG5vdCBzZW5zaXRpdmUgYWJvdXQgdGhhdCBhdCBhbGwuXG4gIC8vIFN0aWxsLCB0aGUgZGVidWcgdmVyc2lvbiBvZiByZWFjdCB3aWxsIGxvZyBjYWxscyB0byB1c2VIb29rKCkgYW5kIHRocm93IGlmIGEgcmVuZGVyXG4gIC8vIGRvZXNuJ3QgdXNlIHRoZSBzYW1lIG51bWJlciBvZiBob29rcyBldmVyeSB0aW1lLiBUaGlzIGNoZWNrIHNob3VsZCBub3QgYXBwbHlcbiAgLy8gdG8gdXNlSG9vaygpIHNpbmNlIGl0IGlzIG5vdCBzZW5zaXRpdmUgdG8gdGhlIG9yZGVyIGluIHdoaWNoIGl0IHdhcyBjYWxsZWQuXG4gIC8vIEFuZCB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gY2FsbCBpdCBmcm9tIHdpdGhpbiBjb250aXRpb25hbCBleHByZXNzaW9ucyAvIHN0YXRlbWVudHMsXG4gIC8vIHNvIHdlIG11c3QgYnlwYXNzIHRoaXMgZGVidWcgbG9nZ2luZyBoZXJlIGJ5IGFjY2Vzc2luZyB0aGUgX2N1cnJlbnRWYWx1ZSBkaXJlY3RseS5cbiAgKEZpYmVyQ29udGV4dFJlYWN0IGFzIGFueSkuX2N1cnJlbnRWYWx1ZSk7IFxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBmYWxsYmFjaz86IE5vbk51bGxhYmxlPFJlYWN0Tm9kZT58bnVsbDtcbiAgZXJyb3JGYWxsYmFjaz86IE5vbk51bGxhYmxlPFJlYWN0Tm9kZT58bnVsbDtcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjbGFzcyBPYnNlcnZlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCB7Y291bnRlcjogbnVtYmVyLCBlcnJvcjogbnVsbCB8IEVycm9yLCBpbmZvPzogc3RyaW5nfT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvdW50ZXI6IDAsXG4gICAgICBlcnJvcjogbnVsbFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogYW55LCBpbmZvOiBhbnkpIHtcbiAgICBpZiAoIWVycm9yIHx8ICFlcnJvci5uYW1lKSBlcnJvciA9IG5ldyBFcnJvcignJytlcnJvcik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3IsIGluZm99KTtcbiAgICBjb25zb2xlLmxvZyhlcnJvciwgaW5mbyk7XG4gIH1cblxuICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIG91dGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSB7XG4gICAgdW5zdWJzY3JpYmU6ICgpPT4ge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gW107XG4gICAgfVxuICB9XG5cbiAgb2JzZXJ2ZXIgPSAodmFsdWU6IGFueSwgZXJyb3I6IGFueSwgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHtjb3VudGVyfSkgPT4gKHtjb3VudGVyOiBjb3VudGVyICsgMSwgZXJyb3J9KSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMub3V0ZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5lcnJvcikge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZXJyb3JGYWxsYmFjayB8fCA8cD57TGBLdW5kZSBpbnRlIGxhZGRhIGlubmVow6VsbGV0YH08L3A+O1xuICAgIH1cbiAgICB0aGlzLm91dGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIDxTdXNwZW5zZSBmYWxsYmFjaz17dGhpcy5wcm9wcy5mYWxsYmFjayB8fCBudWxsfT5cbiAgICAgIDxGaWJlckNvbnRleHRSZWFjdC5Qcm92aWRlciB2YWx1ZT17dGhpc30+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9GaWJlckNvbnRleHRSZWFjdC5Qcm92aWRlcj5cbiAgICA8L1N1c3BlbnNlPjtcbiAgfVxufVxuIiwiLyogUkVGQUNUT1I6IE1vdmUgdGhpcyBjb21wb25lbnQgb3V0c2lkZSBjb3Vyc2VidWlsZGVyIVxuICAgVGhpcyBpcyBhIGdlbmVyYWwtcHVycG9zZSBjb21wb25lbnRcbiovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdvYWxQcm9ncmVzcyB9IGZyb20gJy4uL2NoYXJ0cy9nb2FsLXByb2dyZXNzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZyB8IEpTWC5FbGVtZW50O1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGhlYWRlckNsYXNzTmFtZT86IHN0cmluZztcbiAgY29udGVudENsYXNzTmFtZT86IHN0cmluZztcbiAgaGVhZGVyT3Blbj86IGJvb2xlYW47XG4gIGluYWN0aXZhdGVkPzogYm9vbGVhbjtcbiAgaW5hY3RpdmF0ZWRSZW5kZXI/OiAnY2hpbGRyZW4nIHwgJ3RpdGxlQW5kQ2hpbGRyZW4nO1xuICBvbk9wZW5DbG9zZT86IChiZWNhbWVPcGVuOiBib29sZWFuKSA9PiB2b2lkO1xuICBkaXNwbGF5UHJvZ3Jlc3M/OiBib29sZWFuO1xuICBwcm9ncmVzc0RhdGE/OiB7Y29tcGxldGVkTnVtYmVyT2ZUYXNrczogbnVtYmVyLCBudW1iZXJPZlRhc2tzOiBudW1iZXJ9O1xuICBjaGlsZHJlbjtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgaGVhZGVyT3BlbjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIE9wZW5DbG9zZUJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcyxTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhlYWRlck9wZW46IHByb3BzLmhlYWRlck9wZW4gfHwgZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV4dFByb3BzOiBQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuaGVhZGVyT3BlbiAhPT0gdGhpcy5wcm9wcy5oZWFkZXJPcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtoZWFkZXJPcGVuOiBuZXh0UHJvcHMuaGVhZGVyT3Blbn0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBjbGFzc05hbWUsIGNoaWxkcmVuLCBoZWFkZXJDbGFzc05hbWUsIGNvbnRlbnRDbGFzc05hbWUsIGRpc3BsYXlQcm9ncmVzcywgcHJvZ3Jlc3NEYXRhLFxuICAgICAgaW5hY3RpdmF0ZWQsIGluYWN0aXZhdGVkUmVuZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaGVhZGVyT3BlbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChpbmFjdGl2YXRlZCkgcmV0dXJuIGluYWN0aXZhdGVkUmVuZGVyID09PSAndGl0bGVBbmRDaGlsZHJlbicgPyA8PlxuICAgICAgPD57dGl0bGV9PC8+XG4gICAgICA8PntjaGlsZHJlbn08Lz5cbiAgICA8Lz4gOiA8PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvPjtcblxuICAgIC8vdmFyIGN1cnJlbnRQcm9ncmVzc0RhdGEgPSAvL3Byb2dyZXNzRGF0YSgpO1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17KGNsYXNzTmFtZXx8JycpICsgXCIgb3BlbkNsb3NlXCIgKyAoaGVhZGVyT3BlbiA/IFwiIG9wZW5cIiA6IFwiXCIpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm9wZW5IZWFkZXJcIiArIChoZWFkZXJDbGFzc05hbWUgPyBcIiBcIiArIGhlYWRlckNsYXNzTmFtZSA6IFwiXCIpfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMub25PcGVuQ2xvc2UpIHRoaXMucHJvcHMub25PcGVuQ2xvc2UoIXRoaXMuc3RhdGUuaGVhZGVyT3Blbik7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhlYWRlck9wZW46ICF0aGlzLnN0YXRlLmhlYWRlck9wZW4gfSk7XG4gICAgICAgIH19ID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGVuSGVhZGVyQ29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdj57dGl0bGV9PC9kaXY+XG4gICAgICAgICAge2Rpc3BsYXlQcm9ncmVzcyAmJiA8R29hbFByb2dyZXNzIHsuLi5wcm9ncmVzc0RhdGF9Lz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJvcGVuQ29udGVudFwiICsgKGNvbnRlbnRDbGFzc05hbWUgPyBcIiBcIiArIGNvbnRlbnRDbGFzc05hbWUgOiBcIlwiKX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PjtcbiAgfVxufVxuIiwiaW1wb3J0IGNmZyBmcm9tICcuLi9nbG9iYWxzL0tFRC5jZmcnO1xuXG5kZWNsYXJlIHZhciBwcm9jZXNzOiBhbnk7XG5cbmNmZy5FTlZJUk9OTUVOVCA9IHByb2Nlc3MuZW52LkVOVklST05NRU5UIGFzIFwicHJvZHVjdGlvblwiIHwgXCJkZXZlbG9wbWVudFwiIHwgXCJ0ZXN0XCI7XG5jZmcuS0VEX0FQSV9VUkwgPSBwcm9jZXNzLmVudi5LRURfQVBJX1VSTDsgLy8gXCJodHRwczovL2tlZGJhY2tlbmR0ZXN0LmF6dXJld2Vic2l0ZXMubmV0L2FwaS9cIlxuY2ZnLkVEU19BUElfVVJMID0gcHJvY2Vzcy5lbnYuRURTX0FQSV9VUkw7IC8vIFwiaHR0cHM6Ly9lZHNwb3J0YWxvd2luYXBpLmF6dXJld2Vic2l0ZXMubmV0L2FwaS9cIlxuY2ZnLktFRF9UT0tFTl9VUkwgPSBwcm9jZXNzLmVudi5LRURfVE9LRU5fVVJMOyAvLyBcImh0dHBzOi8va2VkYXV0aHRlc3QuYXp1cmV3ZWJzaXRlcy5uZXQvdG9rZW5cIlxuY2ZnLktFRF9DTElFTlRfSUQgPSBwcm9jZXNzLmVudi5LRURfQ0xJRU5UX0lEOyAvLyBcImRldmNsaWVudFwiLCBcInRlc3RjbGllbnRcIiwgXCIuLi5cIlxuY2ZnLktFRF9DTElFTlRfU0VDUkVUID0gcHJvY2Vzcy5lbnYuS0VEX0NMSUVOVF9TRUNSRVQ7XG5jZmcuS0VEX1JFQUxNID0gcHJvY2Vzcy5lbnYuS0VEX1JFQUxNOyAvLyBcIlNFMVwiXG5jZmcuS0VEX0xPQ0FMRSA9IGNmZy5LRURfTE9DQUxFIHx8IHByb2Nlc3MuZW52LktFRF9MT0NBTEU7IC8vIFwic3ZcIiwgXCJlblwiLiBPbmx5IHNldCBmcm9tIHByb2Nlc3MuZW52IGlmIG5vdCBzZXQgZnJvbSBTaXRlVmlzaW9uIGVsZW1lbnQgY29uZmlnLlxuY2ZnLktFRF9TQ0hPT0xfTE9DQUxFID0gY2ZnLktFRF9TQ0hPT0xfTE9DQUxFIHx8IHByb2Nlc3MuZW52LktFRF9TQ0hPT0xfTE9DQUxFOyAvLyBcInN2XCIsIFwiZW5fc2luXCIsIFwiZW5fbmluXCIuIE9ubHkgc2V0IGZyb20gcHJvY2Vzcy5lbnYgaWYgbm90IHNldCBmcm9tIFNpdGVWaXNpb24gZWxlbWVudCBjb25maWcuXG5jZmcuS0VEX1JFU09VUkNFU19VUkwgPSBjZmcuS0VEX1JFU09VUkNFU19VUkwgfHwgcHJvY2Vzcy5lbnYuS0VEX1JFU09VUkNFU19VUkw7XG4iLCIvKiBUaGVzZSBzY3JpcHRzIGFzc3VtZSBzb21lIG9mIHRoZSBnbG9iYWwgdmFycyBoYXZlIGFscmVhZHkgYmVlbiBzZXQ6XG4gICogS0VELmNmZ1xuICAqIEtFRC5lbnYuY3VycmVudFVzZXJcblxuICBUaGUgcmVzdCB3aWxsIGJlIHNldCBoZXJlIChjbGllbnQgc2lkZSlcbiovXG5pbXBvcnQgJy4vY29uZmlndXJlJztcbmltcG9ydCAnLi9zZXQtYmVhcmVyLXByb3ZpZGVycyc7XG5pbXBvcnQgJy4vc2V0LWtlZC1iYWNrZW5kLWNsaWVudCc7XG5pbXBvcnQgJy4vc2V0LWVkcy1jbGllbnQnO1xuIiwiaW1wb3J0IHsgcGFyc2VRdWVyeVN0cmluZywgZ2VuZXJhdGVRdWVyeVN0cmluZywgc3BsaXRVcmxBbmRRdWVyeSB9IGZyb20gXCIuLi91dGlscy9xdWVyeS1zdHJpbmdcIjtcbmltcG9ydCB7IEtlZEJhY2tlbmRDbGllbnRXZWIsIFdlYlNlcnZlckJlYXJlclByb3ZpZGVyLCBpc29tb3JwaGljLCBzdG9yYWdlIH0gZnJvbSAna2VkYmFja2VuZC9jbGllbnR3ZWInO1xuaW1wb3J0IHsgQmVhcmVyUHJvdmlkZXIsIEtlZEJlYXJlclByb3ZpZGVyIH0gZnJvbSAna2VkYmFja2VuZC9jbGllbnQnO1xuaW1wb3J0IGNmZyBmcm9tICcuLi9nbG9iYWxzL0tFRC5jZmcnO1xuaW1wb3J0IGVudiBmcm9tICcuLi9nbG9iYWxzL0tFRC5lbnYnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9jb250cmFjdHMva2VkLW1vZGVsc1wiO1xuaW1wb3J0IHsgSU1QRVJTT05BVElPTl9RVUVSWV9QQVJBTVMgfSBmcm9tIFwiLi4vYWNjZXNzLWNvbnRyb2wvaW5kZXhcIjtcbmltcG9ydCB7IGNoZXJyeVBpY2tQcm9wcyB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuXG5cbmNvbnN0IGVtcGxveWVlQ2xhc3Nyb29tU2NvcGVzID0gW1xuICBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xhc3Nyb29tLmNvdXJzZXNcIixcbiAgXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NsYXNzcm9vbS5wcm9maWxlLmVtYWlsc1wiLFxuICBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xhc3Nyb29tLnJvc3RlcnNcIixcbiAgXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NsYXNzcm9vbS5jb3Vyc2V3b3JrLnN0dWRlbnRzXCJcbl07XG5jb25zdCBzdHVkZW50Q2xhc3Nyb29tU2NvcGVzID0gW1xuICBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2xhc3Nyb29tLmNvdXJzZXNcIixcbiAgXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NsYXNzcm9vbS5jb3Vyc2V3b3JrLm1lXCJcbl07XG5cblxuZnVuY3Rpb24gZ2V0TWVyZ2VkVG9rZW5QYXRoKHRva2VuUGF0aDogc3RyaW5nLCBsb2NhdGlvblNlYXJjaDogc3RyaW5nLCBzY29wZXM6IHN0cmluZ1tdKSB7XG4gIC8vIE1lcmdlIGNvbmZpZ3VyZWQgcXVlcnkgcGFyYW1zIG9mIHRva2VuIHBhdGggd2l0aCBwYXJhbXMgZ2l2ZW4gdG8gY3VycmVudCBwYWdlXG4gIGNvbnN0IGN1cnJlbnRRdWVyeSA9IHBhcnNlUXVlcnlTdHJpbmcobG9jYXRpb25TZWFyY2gpO1xuICBjb25zdCBpbXBlcnNvbmF0aW9uUHJvcHMgPSBjaGVycnlQaWNrUHJvcHMoY3VycmVudFF1ZXJ5LCBJTVBFUlNPTkFUSU9OX1FVRVJZX1BBUkFNUyk7XG4gIGNvbnN0IFt0b2tlblBhdGhXaXRob3V0UXVlcnksIHRva2VuUXVlcnlTdHJpbmddID0gc3BsaXRVcmxBbmRRdWVyeSh0b2tlblBhdGgpO1xuICBjb25zdCB0b2tlblBhdGhRdWVyeSA9IHBhcnNlUXVlcnlTdHJpbmcodG9rZW5RdWVyeVN0cmluZyk7XG4gIHJldHVybiB0b2tlblBhdGhXaXRob3V0UXVlcnkgKyBnZW5lcmF0ZVF1ZXJ5U3RyaW5nKHtcbiAgICAuLi50b2tlblBhdGhRdWVyeSxcbiAgICAuLi5pbXBlcnNvbmF0aW9uUHJvcHMsXG4gICAgc2NvcGVzOiBzY29wZXMuam9pbignLCcpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRUb2tlbklkKG1lcmdlZFRva2VuUGF0aDogc3RyaW5nLCB1c2VyRW1haWw6IHN0cmluZykge1xuICByZXR1cm4gbWVyZ2VkVG9rZW5QYXRoICsgXCIvXCIgKyB1c2VyRW1haWw7XG59XG5cbmZ1bmN0aW9uIHNhdmVVc2VySW5mbyh1c2VyOiBVc2VyLCB0b2tlbklkOiBzdHJpbmcpIHtcbiAgZW52LmN1cnJlbnRVc2VyID0gdXNlcjtcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJbmZvXCIgKyB0b2tlbklkLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRVc2VySW5mbyh0b2tlbklkOiBzdHJpbmcpIHtcbiAgY29uc3Qgc3RvcmVkU2Vzc2lvblVzZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlckluZm9cIiArIHRva2VuSWQpO1xuICBpZiAoc3RvcmVkU2Vzc2lvblVzZXIpIHtcbiAgICBlbnYuY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKHN0b3JlZFNlc3Npb25Vc2VyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVCZWFyZXJQcm92aWRlcihtZXJnZWRUb2tlblBhdGg6IHN0cmluZywgdXNlckVtYWlsOiBzdHJpbmcpIHtcbiAgY29uc3QgdG9rZW5JZCA9IGdldFRva2VuSWQobWVyZ2VkVG9rZW5QYXRoLCB1c2VyRW1haWwpO1xuICByZXR1cm4gbmV3IFdlYlNlcnZlckJlYXJlclByb3ZpZGVyKG1lcmdlZFRva2VuUGF0aCwgcmVzcG9uc2VUZXh0ID0+IHtcbiAgICBjb25zdCByZXMgPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCkgYXMgeyBvazogYm9vbGVhbiwgZXJyb3I/OiBzdHJpbmcsIHRva2VuPzogc3RyaW5nLCB1c2VyPzogVXNlciB9O1xuICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IocmVzLmVycm9yKTtcbiAgICBpZiAocmVzLnVzZXIpIHtcbiAgICAgIHNhdmVVc2VySW5mbyhyZXMudXNlciwgdG9rZW5JZCk7XG4gICAgfVxuICAgIHJldHVybiB7IHRva2VuOiByZXMudG9rZW4sIGV4cGlyZXM6IERhdGUubm93KCkgKyA1OSAqIDYwICogMTAwMCB9O1xuICB9LCB0b2tlbklkKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR29vZ2xlVG9rZW5Qcm92aWRlcihtZXJnZWRUb2tlblBhdGg6IHN0cmluZywgdXNlckVtYWlsOiBzdHJpbmcpIHtcbiAgY29uc3QgdG9rZW5JZCA9IGdldFRva2VuSWQobWVyZ2VkVG9rZW5QYXRoLCB1c2VyRW1haWwpO1xuICByZXR1cm4gbmV3IFdlYlNlcnZlckJlYXJlclByb3ZpZGVyKG1lcmdlZFRva2VuUGF0aCwgcmVzcG9uc2VUZXh0ID0+IHtcbiAgICBjb25zdCByZXMgPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCkgYXMgeyBvazogYm9vbGVhbiwgZXJyb3I/OiBzdHJpbmcsIHRva2VuPzogc3RyaW5nLCB1c2VyPzogVXNlciB9O1xuICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IocmVzLmVycm9yKTtcbiAgICByZXR1cm4geyB0b2tlbjogcmVzLnRva2VuLCBleHBpcmVzOiBEYXRlLm5vdygpICsgNTkgKiA2MCAqIDEwMDAgfTtcbiAgfSwgdG9rZW5JZCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRlc3RUb2tlblByb3ZpZGVyKHRva2VuVXJsOiBzdHJpbmcsIHVzZXI6IFVzZXIsIHNjb3Blczogc3RyaW5nW10pIHtcbiAgcmV0dXJuIG5ldyBLZWRCZWFyZXJQcm92aWRlcihcbiAgICBpc29tb3JwaGljLFxuICAgIHN0b3JhZ2UsXG4gICAgdG9rZW5VcmwgKyB1c2VyLm1haWwgKyBsb2NhdGlvbi5zZWFyY2gsXG4gICAgY2ZnLktFRF9DTElFTlRfSUQsXG4gICAgY2ZnLktFRF9DTElFTlRfU0VDUkVULFxuICAgIHRva2VuVXJsLCB7XG4gICAgICBlbWFpbDogdXNlci5tYWlsLnRvTG93ZXJDYXNlKCksXG4gICAgICByb2xlczogdXNlci5yb2xlcyxcbiAgICAgIHNjaG9vbDogdXNlci5zY2hvb2wsXG4gICAgICBzY2hvb2xUeXBlOiB1c2VyLnNjaG9vbFR5cGUsXG4gICAgICBzY29wZXNcbiAgICB9KTtcbn1cblxuLy8gZW52LmN1cnJlbnRVc2VyLm1haWwgaXMgc2V0IGJ5IFNpdGVWaXNpb24gc2VydmVyIGluaXRpYWxseS5cbi8vIEEgcmVzcG9uc2UgZnJvbSAvYXBpL3Rva2VuIG1heSBjaGFuZ2UgdGhlIG1haWwgYXR0cmlidXRlIG9mIHRoZSBjdXJyZW50XG4vLyB1c2VyLCBzbyBlbnYuY3VycmVudFVzZXIubWFpbCBtYXkgYmUgZGlmZmVyZW50IGFmdGVyIGdldHRpbmcgYSByZXNwb25zZS5cbi8vIEhvd2V2ZXIsIHRoZSBpbml0aWFsIHZhbHVlIGlzIHZhbHVhYmxlIGFsd2F5cyBpbiBvcmRlciB0byBkaXN0aW5ndWlzaCB0aGUgY2FzZVxuLy8gd2hlbiBvbmUgbm9ybWFsIHVzZXIgbG9ncyBvdXQgYW5kIGFub3RoZXIgdXNlciBsb2dzIGluLlxuY29uc3QgaW5pdGlhbFVzZXJFbWFpbCA9IGVudi5jdXJyZW50VXNlciAmJiBlbnYuY3VycmVudFVzZXIubWFpbDsgLy8gSW5pdGlhbCB2YWx1ZSBvZiBtYWlsLiBNYXkgY2hhbmdlLlxuaWYgKGluaXRpYWxVc2VyRW1haWwpIHtcbiAgLy8gS0VEXG4gIGlmIChjZmcuS0VEX1RPS0VOX1BBVEgpIHtcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gUHJvZHVjdGlvbiAvIFNpdGVWaXNpb24gcHJveGllZCAvYXBpL3Rva2VuIHRvIHJlcXVlc3QgdG9rZW5zIGZyb206XG4gICAgLy9cbiAgICAvL1xuICAgIGNvbnN0IG1lcmdlZFRva2VuUGF0aCA9IGdldE1lcmdlZFRva2VuUGF0aChcbiAgICAgIGNmZy5LRURfVE9LRU5fUEFUSCxcbiAgICAgIGxvY2F0aW9uLnNlYXJjaCwgW1xuICAgICAgICBcImtlZGJhY2tlbmRcIixcbiAgICAgICAgXCJFRFNcIixcbiAgICAgIF0pO1xuICAgIGVudi5iZWFyZXJQcm92aWRlciA9IGNyZWF0ZUJlYXJlclByb3ZpZGVyKG1lcmdlZFRva2VuUGF0aCwgaW5pdGlhbFVzZXJFbWFpbCk7XG4gICAgbG9hZFVzZXJJbmZvKGdldFRva2VuSWQobWVyZ2VkVG9rZW5QYXRoLCBpbml0aWFsVXNlckVtYWlsKSk7XG5cbiAgICBjb25zdCBzY29wZXMgPSBbXG4gICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2FsZW5kYXIucmVhZG9ubHlcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kcml2ZVwiXG4gICAgXS5jb25jYXQoXG4gICAgICBlbnYuY3VycmVudFVzZXIucm9sZXMuaW5jbHVkZXMoXCJFTVBMT1lFRVwiKVxuICAgICAgICA/IGVtcGxveWVlQ2xhc3Nyb29tU2NvcGVzXG4gICAgICAgIDogc3R1ZGVudENsYXNzcm9vbVNjb3Blc1xuICAgICk7XG5cbiAgICAvLyBHb29nbGVcbiAgICBjb25zdCBnb29nbGVNZXJnZWRQYXRoID0gZ2V0TWVyZ2VkVG9rZW5QYXRoKFxuICAgICAgY2ZnLktFRF9UT0tFTl9QQVRILFxuICAgICAgbG9jYXRpb24uc2VhcmNoLCBzY29wZXMpO1xuICAgIGVudi5nb29nbGVUb2tlblByb3ZpZGVyID0gY3JlYXRlR29vZ2xlVG9rZW5Qcm92aWRlcihnb29nbGVNZXJnZWRQYXRoLCBpbml0aWFsVXNlckVtYWlsKTtcbiAgfSBlbHNlIGlmIChjZmcuS0VEX1RPS0VOX1VSTCAmJiBjZmcuS0VEX0NMSUVOVF9JRCAmJiBjZmcuS0VEX0NMSUVOVF9TRUNSRVQpIHtcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gVGVzdCAtIGdvIGRpcmVjdGx5IHRvIEtFREFVVEggc2VydmVyIHRvIHJldHJpZXZlIHRva2Vuc1xuICAgIC8vXG4gICAgLy9cbiAgICBlbnYuYmVhcmVyUHJvdmlkZXIgPSBjcmVhdGVUZXN0VG9rZW5Qcm92aWRlcihjZmcuS0VEX1RPS0VOX1VSTCwgZW52LmN1cnJlbnRVc2VyLCBbXG4gICAgICBcImtlZGJhY2tlbmRcIixcbiAgICAgIFwiRURTXCIsXG4gICAgXSk7XG5cbiAgICBjb25zdCBzY29wZXMgPSBbXG4gICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY2FsZW5kYXIucmVhZG9ubHlcIixcbiAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kcml2ZVwiXG4gICAgXS5jb25jYXQoXG4gICAgICBlbnYuY3VycmVudFVzZXIucm9sZXMuaW5jbHVkZXMoXCJFTVBMT1lFRVwiKVxuICAgICAgICA/IGVtcGxveWVlQ2xhc3Nyb29tU2NvcGVzXG4gICAgICAgIDogc3R1ZGVudENsYXNzcm9vbVNjb3Blc1xuICAgICk7XG5cbiAgICBlbnYuZ29vZ2xlVG9rZW5Qcm92aWRlciA9IGNyZWF0ZVRlc3RUb2tlblByb3ZpZGVyKGNmZy5LRURfVE9LRU5fVVJMICsgXCIvZ29vZ2xlXCIsIGVudi5jdXJyZW50VXNlciwgc2NvcGVzKTtcblxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBjb25maWd1cmF0aW9uIHBhcmFtZXRlciBLRURfVE9LRU5fUEFUSGApO1xuICB9XG59XG4iLCJpbXBvcnQgZW52IGZyb20gJy4uL2dsb2JhbHMvS0VELmVudic7XG5pbXBvcnQgY2ZnIGZyb20gJy4uL2dsb2JhbHMvS0VELmNmZyc7XG5pbXBvcnQgeyBpc29tb3JwaGljIH0gZnJvbSAna2VkYmFja2VuZC9jbGllbnR3ZWInO1xuaW1wb3J0IHsgRWRzQ2xpZW50IH0gZnJvbSAnLi4vYXBpcy9lZHNjbGllbnQnO1xuXG5lbnYuZWRzQ2xpZW50ID0gbmV3IEVkc0NsaWVudCAoXG4gIGlzb21vcnBoaWMsXG4gIGNmZy5FRFNfQVBJX1VSTCxcbiAgZW52LmJlYXJlclByb3ZpZGVyLFxuICAoKT0+ZW52LmN1cnJlbnRVc2VyLm1haWwpO1xuXG4iLCJpbXBvcnQgZW52IGZyb20gJy4uL2dsb2JhbHMvS0VELmVudic7XG5pbXBvcnQgY2ZnIGZyb20gJy4uL2dsb2JhbHMvS0VELmNmZyc7XG5pbXBvcnQgeyBLZWRCYWNrZW5kQ2xpZW50V2ViIH0gZnJvbSAna2VkYmFja2VuZC9jbGllbnR3ZWInO1xuXG5lbnYua2VkQmFja2VuZENsaWVudCA9IG5ldyBLZWRCYWNrZW5kQ2xpZW50V2ViIChcbiAgY2ZnLktFRF9BUElfVVJMLFxuICBlbnYuYmVhcmVyUHJvdmlkZXIpO1xuXG4iLCJpbXBvcnQgS0VEIGZyb20gJy4vS0VEJztcblxuLyogVGhpcyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gaXMgdXNlZCBhcyBhIGZhbGxiYWNrLlxuTm9ybWFsbHkgYm90aCB0ZXN0IHBhZ2VzIGFuZCBwcm9kdWN0aW9uIHBhZ2VzIHdpbGwgb3ZlcnJpZGUgdGhlc2UgY29uZmlncmF0aW9uc1xuKi9cbi8qY29uc3QgZGVmYXVsdENvbmZpZ3VyYXRpb24gPSB7XG4gIC8vIEVudmlyb25tZW50XG4gIEVOVklST05NRU5UOiAnZGV2ZWxvcG1lbnQnIGFzICdwcm9kdWN0aW9uJyB8ICdkZXZlbG9wbWVudCcgfCAndGVzdCcsXG4gIC8vIEF1dGhlbnRpY2F0aW9uIFNlcnZlcjpcbiAgS0VEX1RPS0VOX1VSTDogJ2h0dHBzOi8va2VkYXV0aHRlc3QuYXp1cmV3ZWJzaXRlcy5uZXQvdG9rZW4nLFxuICBLRURfVE9LRU5fUEFUSDogJy9hcGkvdG9rZW4uU2tyaXB0LnBvcnRsZXQ/c3YuY29udGVudHR5cGU9YXBwbGljYXRpb24vanNvbicsXG4gIEtFRF9DTElFTlRfSUQ6ICdkZXZjbGllbnQnLFxuICBLRURfQ0xJRU5UX1NFQ1JFVDogJzRmUmRmUXBXdEpxalRXZicsXG4gIC8vIFNlcnZpY2VzOlxuICBLRURfQVBJX1VSTDogJ2h0dHBzOi8va2VkYmFja2VuZHRlc3QuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpLycsICBcbiAgRURTX0FQSV9VUkw6ICdodHRwczovL2Vkc3BvcnRhbG93aW5hcGkuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpLydcbn0qL1xuXG5leHBvcnQgaW50ZXJmYWNlIElLZWRDb25maWd1cmF0aW9uIHtcbiAgRU5WSVJPTk1FTlQ6ICdwcm9kdWN0aW9uJyB8ICdkZXZlbG9wbWVudCcgfCAndGVzdCc7XG4gIEtFRF9SRUFMTTogc3RyaW5nO1xuICBLRURfVE9LRU5fVVJMOiBzdHJpbmc7XG4gIEtFRF9UT0tFTl9QQVRIOiBzdHJpbmc7XG4gIEtFRF9DTElFTlRfSUQ6IHN0cmluZztcbiAgS0VEX0NMSUVOVF9TRUNSRVQ6IHN0cmluZztcbiAgS0VEX0FQSV9VUkw6IHN0cmluZztcbiAgRURTX0FQSV9VUkw6IHN0cmluZztcbiAgS0VEX0xPQ0FMRTogc3RyaW5nO1xuICBLRURfU0NIT09MX0xPQ0FMRTogc3RyaW5nO1xuICBLRURfQ09VUlNFX0JVSUxERVJfVVJMOiBzdHJpbmc7XG4gIEtFRF9DT1VSU0VfVklFV0VSX1VSTDogc3RyaW5nO1xuICBLRURfU1VCSkVDVF9QTEFOTkVSX0FETUlOX1VSTDogc3RyaW5nO1xuICBLRURfU1VCSkVDVF9QTEFOTkVSX1VSTDogc3RyaW5nO1xuICBLRURfRkVBVFVSRVM6IHN0cmluZztcbiAgS0VEX0tFRVBfQUxJVkVfVVJMOiBzdHJpbmc7XG4gIEtFRF9FTlVNX1dPUkRCQU5LU19VUkw6IHN0cmluZztcbiAgS0VEX1dPUkRCQU5LU19VUkw6IHN0cmluZztcbiAgS0VEX1JFU09VUkNFU19VUkw6IHN0cmluZztcbn07XG5cbmlmICghS0VELmNmZykgS0VELmNmZyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBLRUQuY2ZnIGFzIElLZWRDb25maWd1cmF0aW9uO1xuZXhwb3J0IGNvbnN0IGNmZzogSUtlZENvbmZpZ3VyYXRpb24gPSBLRUQuY2ZnO1xuIiwiaW1wb3J0IHtVc2VyLCBMZWFybmluZ01vZHVsZVRhc2tzfSBmcm9tICcuLi9jb250cmFjdHMva2VkLW1vZGVscyc7XG5pbXBvcnQgeyBLZWRCYWNrZW5kQ2xpZW50LCBCZWFyZXJQcm92aWRlciB9IGZyb20gJ2tlZGJhY2tlbmQvY2xpZW50JztcbmltcG9ydCB7VXNlclRhc2t9IGZyb20gJ2tlZGJhY2tlbmQvbW9kZWxzJztcbmltcG9ydCB7S2VkUmVwb30gZnJvbSAnLi4vcmVwb3Mva2VkLXJlcG8nO1xuaW1wb3J0IHtFZHNDbGllbnR9IGZyb20gJy4uL2FwaXMvZWRzY2xpZW50JztcbmltcG9ydCBLRUQgZnJvbSAnLi9rZWQnO1xuaW1wb3J0IHsgS1NUZXJtUGxhbm5lclJlcG8gfSBmcm9tICcuLi9yZXBvcy9rcy10ZXJtcGxhbm5lci1yZXBvJztcblxuZXhwb3J0IGludGVyZmFjZSBFbnYge1xuICAgIGN1cnJlbnRVc2VyPzogVXNlcjtcbiAgICBsZWFybmluZ01vZHVsZVRhc2tzPzogTGVhcm5pbmdNb2R1bGVUYXNrcztcbiAgICBiZWFyZXJQcm92aWRlcj86IEJlYXJlclByb3ZpZGVyO1xuICAgIGdvb2dsZVRva2VuUHJvdmlkZXI/OiBCZWFyZXJQcm92aWRlcjtcbiAgICBrZWRCYWNrZW5kQ2xpZW50PzogS2VkQmFja2VuZENsaWVudDtcbiAgICBlZHNDbGllbnQ/OiBFZHNDbGllbnQ7XG4gICAgdXNlclRhc2tzUmVwbz87XG4gICAgaGlkZGVuQ291cnNlc1JlcG8/O1xuICAgIHdlZWtOb3Rlc1JlcG8/O1xuICAgIGtnVGVybVBsYW5uZXJSZXBvPztcbiAgICBrc1Rlcm1QbGFubmVyUmVwbz86IEtTVGVybVBsYW5uZXJSZXBvXG4gICAgdHV0b3JlZDogYm9vbGVhbjtcbiAgICBlcnJvcj86IEVycm9yO1xufVxuXG5pZiAoIUtFRC5lbnYpIEtFRC5lbnYgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgS0VELmVudiBhcyBFbnY7XG5leHBvcnQgY29uc3QgZW52OiBFbnYgPSBLRUQuZW52O1xuIiwiXG5leHBvcnQgY29uc3QgS0VEX05BTUVTUEFDRSA9IFwiS0VEXCI7XG5cbmRlY2xhcmUgdmFyIEtFRDogYW55O1xuXG52YXIgcmVzdWx0ID0gdHlwZW9mIEtFRCA9PT0gJ3VuZGVmaW5lZCcgPyB7fSA6IEtFRDtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBLRUQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93W0tFRF9OQU1FU1BBQ0VdID0gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCByZXN1bHQ7XG4iLCJpbXBvcnQgZW52IGZyb20gJy4vS0VELmVudic7XG5pbXBvcnQgeyBLZWRCYWNrZW5kUmVwbyB9IGZyb20gJ2tlZGJhY2tlbmQvcmVwbyc7XG5pbXBvcnQgeyBnZXRHbG9iYWxJZCwgY3JlYXRlVVVJRCB9IGZyb20gJ2tlZGJhY2tlbmQvY2xpZW50JztcbmltcG9ydCBjZmcgZnJvbSAnLi9LRUQuY2ZnJztcbmltcG9ydCB7IFNjaG9vbCwgQnJhbmNoIH0gZnJvbSAna2VkYmFja2VuZC9tb2RlbHMnO1xuaW1wb3J0IHsgVmFsdWUgfSBmcm9tICdrZWRiYWNrZW5kL29ic2VydmFibGUnO1xuXG5leHBvcnQgY29uc3QgZGIgPSBuZXcgS2VkQmFja2VuZFJlcG8oXG4gICgpPT5lbnYua2VkQmFja2VuZENsaWVudCxcbiAgKCk9PmVudi5jdXJyZW50VXNlciA/XG4gICAgZW52LmN1cnJlbnRVc2VyLm1haWwgOlxuICAgIFwiXCIsXG4gICgpPT5lbnYuY3VycmVudFVzZXIgP1xuICAgIGVudi5jdXJyZW50VXNlci5kaXNwbGF5TmFtZSB8fCBlbnYuY3VycmVudFVzZXIubWFpbCA6XG4gICAgXCJcIik7XG5cbmV4cG9ydCBjb25zdCBnbG9iYWxJZCA9IGdldEdsb2JhbElkKGNmZy5LRURfUkVBTE0pO1xuZXhwb3J0IGNvbnN0IFNjaG9vbHMgPSB7XG4gIHN0YW5kYXJkU2Nob29sOiBkYi5zY2hvb2xzLm5hbWUoXCJzdGFuZGFyZFwiKS5jYWNoZU9wdGltaXplZCgpLnNpbmdsZSgpLFxuICBnZXQgbXlTY2hvb2wgKCkgeyByZXR1cm4gZGIuc2Nob29scy5uYW1lKGVudi5jdXJyZW50VXNlci5zY2hvb2wpLmNhY2hlT3B0aW1pemVkKCkuc2luZ2xlKCk7IH1cbn07XG5leHBvcnQgY29uc3QgQ291cnNlSW5zdGFuY2VzID0ge1xuICBnZXRCcmFuY2hJZChzY2hvb2w6IFZhbHVlPFNjaG9vbD4sIGNvdXJzZUlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc2Nob29sLnN3aXRjaE1hcChzY2hvb2wgPT5cbiAgICAgIGRiLmJyYW5jaGVzXG4gICAgICAgIC5oYXNFZGdlc0Zyb20oW3NjaG9vbC5vZmZpY2lhbEJyYW5jaElkXSlcbiAgICAgICAgLm5hbWUoXCJkcmFmdFwiKVxuICAgICAgICAudGFncyhjb3Vyc2VJZClcbiAgICAgICAgLmlkc09ubHkoKVxuICAgICAgICAubWFwKCh7aWR9KSA9PiBpZClcbiAgICAgICAgLnRvVmFsdWUoKVxuICAgICAgICAubWFwKGlkcyA9PiBpZHMubGVuZ3RoID4gMCA/IGlkc1swXSA6IHVuZGVmaW5lZCkpO1xuICB9LFxuXG4gIC8qKiBHZXQgYSBEUkFGVCBicmFuY2ggZm9yIGdpdmVuIGNvdXJzZSBJRCBhbmQgZ2l2ZW4gc2Nob29sLlxuICAgKiBJZiB0aGVyZSBpcyBub3QgeWV0IHN1Y2ggYSBicmFuY2gsIGNyZWF0ZSBpdCB1c2luZyBtdXRhdGlvbnNPbkVtcHR5KCkgd2hpY2ggd2lsbFxuICAgKiBsZWFkIHRvIHRoZSBDIyBjb2RlIERvY3VtZW50UmVwb3NpdG9yeS5SZWFkT3JNdXRhdGUoKSB2aWEgRG9jdW1lbnRDb250cm9sbGVyLlxuICAgKi9cbiAgZ2V0T3JDcmVhdGVCcmFuY2hJZChzY2hvb2w6IFZhbHVlPFNjaG9vbD4sIGNvdXJzZUlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZGIuY291cnNlSW5zdGFuY2VzLmlkc09ubHkoKS5pZChjb3Vyc2VJZCkuc3dpdGNoTWFwKCgpPT4gLy8gVEhpcyBmaXJzdCBsaW5lIHZlcmlmaWVzIGNvdXJzZSBleGlzdHMuIElmIGRlbGV0ZWQsIGRvbid0IHRyeSB0byByZWNyZWF0ZSBpdHMgYnJhbmNoIVxuICAgICAgc2Nob29sLnN3aXRjaE1hcChzY2hvb2wgPT4gXG4gICAgICBkYi5icmFuY2hlc1xuICAgICAgICAuaGFzRWRnZXNGcm9tKFtzY2hvb2wub2ZmaWNpYWxCcmFuY2hJZF0pXG4gICAgICAgIC5uYW1lKFwiZHJhZnRcIilcbiAgICAgICAgLnRhZ3MoY291cnNlSWQpXG4gICAgICAgIC5pZHNPbmx5KClcbiAgICAgICAgLm11dGF0aW9uc09uRW1wdHkodHggPT4ge1xuICAgICAgICAgIC8vIFRoZXNlIDIgbXV0YXRpb25zIHdpbGwgb2NjdXIgc2VydmVyIHNpZGUsIGF0b21pY2FsbHkuXG4gICAgICAgICAgLy8gV2lsbCBiZSBzZW50IG9uIGVhY2ggcmVxdWVzdCBpbiB0aGUgcXVlcnksIGJ1dCB3aWxsIG9ubHkgZXhlY3V0ZSBpZiBxdWVyeSByZXN1bHRzIGluIHplcm8gaXRlbXMuXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlNjaG9vbDpcIiwgc2Nob29sKTtcbiAgICAgICAgICBjb25zdCBpZCA9IGNyZWF0ZVVVSUQoKTtcbiAgICAgICAgICB0eC5hZGQoXCJicmFuY2hlc1wiLCB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGFjbDogW1xuICAgICAgICAgICAgICBcInJvbGU6VVNFUjpSXCIsXG4gICAgICAgICAgICAgIGBzY2hvb2xSb2xlOiR7c2Nob29sLm5hbWV9L0VNUExPWUVFOlNgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbmFtZTogJ2RyYWZ0JyxcbiAgICAgICAgICAgIHNjaG9vbElkOiBzY2hvb2wuaWQsXG4gICAgICAgICAgICB0cmVlUGFyZW50SWQ6IHNjaG9vbC5vZmZpY2lhbEJyYW5jaElkLFxuICAgICAgICAgICAgdGFnczogW2NvdXJzZUlkXVxuICAgICAgICAgIH0gYXMgQnJhbmNoKTtcbiAgICAgICAgICAvLyBBcHByb3ZpbmcgdGhlIGJyYW5jaCBtYWtlcyBzdXJlIHRoYXQgaXQgd2FzIGNyZWF0ZWQgYnkgYW4gRU1QTE9ZRUUgb24gZ2l2ZW4gc2Nob29sLlxuICAgICAgICAgIHR4LmxpbmsyKFwiYnJhbmNoZXNcIiwgc2Nob29sLm9mZmljaWFsQnJhbmNoSWQsIFwiYXBwcm92ZWRDaGlsZHJlblwiLCBpZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zaW5nbGUoKVxuICAgICAgICAubWFwKCh7aWR9KSA9PiBpZCkpKTtcbiAgfSxcblxuICBnZXRBbGxEZXNjZW5kYW50SWRzKGNvdXJzZUlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZGIuY291cnNlQmxvY2tzLnRhZ3MoY291cnNlSWQpLmlkc09ubHkoKS5jb25jYXQoXG4gICAgICBkYi5jb3Vyc2VDb250ZW50cy50YWdzKGNvdXJzZUlkKS5pZHNPbmx5KCkpLmNvbmNhdChcbiAgICAgIGRiLmNvdXJzZVRhYnMudGFncyhjb3Vyc2VJZCkuaWRzT25seSgpKS5jb25jYXQoXG4gICAgICBkYi50YXNrcy50YWdzKGNvdXJzZUlkKS5pZHNPbmx5KCkpXG4gICAgICAubWFwKHggPT4geC5pZCk7XG4gIH1cbn1cbiIsIlxuZXhwb3J0IGNvbnN0IEtFRF9OQU1FU1BBQ0UgPSBcIktFRFwiO1xuXG5kZWNsYXJlIHZhciBLRUQ6IGFueTtcblxudmFyIHJlc3VsdCA9IHR5cGVvZiBLRUQgPT09ICd1bmRlZmluZWQnID8ge30gOiBLRUQ7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgS0VEID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvd1tLRURfTkFNRVNQQUNFXSA9IHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzdWx0O1xuIiwiaW1wb3J0IHtVc2VyfSBmcm9tICcuLi8uLi9jb250cmFjdHMva2VkLW1vZGVscyc7XG5cbmV4cG9ydCBjb25zdCB1c2VycyA6IFVzZXJbXSA9IFt7XG4gICAgZGlzcGxheU5hbWU6IFwiQWRtaW5pc3RyYXTDtnJcIixcbiAgICBtYWlsOiBcInZlbWVuZG9Aa2Vkc2Nob29scy5jb21cIixcbiAgICByb2xlczogWydBRE1JTicsJ0VNUExPWUVFJ10sXG4gICAgc2Nob29sOiAnS0VEJyxcbiAgICB1c2VybmFtZTogXCJhZG1pblwiXG59LHtcbiAgICBkaXNwbGF5TmFtZTogXCJEYXZpZFwiLFxuICAgIG1haWw6IFwiZGF2aWQuZmFobGFuZGVyQHZlbWVuZG8uc2VcIixcbiAgICByb2xlczogWydBRE1JTicsJ0VNUExPWUVFJ10sXG4gICAgc2Nob29sOiAnS0VEJyxcbiAgICB1c2VybmFtZTogXCJkYXZpZFwiLFxuICAgIHNjaG9vbEdyYWRlOiAyXG59LFxue1xuICAgIGRpc3BsYXlOYW1lOiBcIkFuZHJlaVwiLFxuICAgIG1haWw6IFwiYW5kcmVpLnNwYXRhcmVsdUB2ZW1lbmRvLnNlXCIsXG4gICAgcm9sZXM6IFsnQURNSU4nLCdFTVBMT1lFRScsJ1NUVURFTlQnXSxcbiAgICBzY2hvb2w6ICdLRUQnLFxuICAgIHVzZXJuYW1lOiBcImFuZHJlaVwiLFxuICAgIHNjaG9vbEdyYWRlOiA3XG59LHtcbiAgICBkaXNwbGF5TmFtZTogXCJDYXJsIEhvbG1iZXJnXCIsXG4gICAgbWFpbDogXCJjYXJsLmhvbG1iZXJnQGt1bnNrYXBzZ3ltbmFzaWV0LnNlXCIsXG4gICAgcm9sZXM6IFsnQURNSU4nLCdFTVBMT1lFRSddLFxuICAgIHNjaG9vbDogJ05vcnJrw7ZwaW5nJyxcbiAgICB1c2VybmFtZTogXCJjYXJsLmhvbG1iZXJnQGt1bnNrYXBzZ3ltbmFzaWV0LnNlXCJcbn0seyBcbiAgICBkaXNwbGF5TmFtZTogXCJDYXJsXCIsXG4gICAgbWFpbDogXCJjYXJsQGtlZHNjaG9vbHMuY29tXCIsXG4gICAgcm9sZXM6IFsnQURNSU4nLCdFTVBMT1lFRScsJ1NUVURFTlQnXSxcbiAgICBzY2hvb2w6ICdLRUQnLFxuICAgIHVzZXJuYW1lOiBcImNhcmxcIlxufSx7XG4gICAgZGlzcGxheU5hbWU6IFwiZGF2aWQuZmFobGFuZGVyQGtlZHNjaG9vbHMuY29tXCIsXG4gICAgbWFpbDogXCJkYXZpZC5mYWhsYW5kZXJAa2Vkc2Nob29scy5jb21cIixcbiAgICByb2xlczogW1wiQURNSU5cIiwgXCJFTVBMT1lFRVwiLCBcIlNUVURFTlRcIl0sXG4gICAgc2Nob29sOiBcIktFRFwiLFxuICAgIHVzZXJuYW1lOiBcImRhdmlkLmZhaGxhbmRlckBrZWRzY2hvb2xzLmNvbVwiXG59LHtcbiAgICBkaXNwbGF5TmFtZTogXCJUZWFjaGVyIDFcIixcbiAgICBtYWlsOiBcInRlYWNoZXIxLmNsYXNzcm9vbUBrZWRzY2hvb2xzLmNvbVwiLFxuICAgIHJvbGVzOiBbJ0VNUExPWUVFJ10sXG4gICAgc2Nob29sOiAnS0VEJyxcbiAgICB1c2VybmFtZTogXCJ0ZWFjaGVyMS5jbGFzc3Jvb21Aa2Vkc2Nob29scy5jb21cIlxufSx7IFxuICAgIGRpc3BsYXlOYW1lOiBcIlN0dWRlbnQgM1wiLFxuICAgIG1haWw6IFwic3R1ZGVudDMuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tXCIsXG4gICAgcm9sZXM6IFsnU1RVREVOVCddLFxuICAgIHNjaG9vbDogJ0tFRCcsXG4gICAgdXNlcm5hbWU6IFwic3R1ZGVudDMuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tXCJcbn0seyBcbiAgICBkaXNwbGF5TmFtZTogXCJTdHVkZW50IDEzXCIsXG4gICAgbWFpbDogXCJzdHVkZW50MTMuY2xhc3Nyb29tQGtlZHNjaG9vbHMuY29tXCIsXG4gICAgcm9sZXM6IFsnU1RVREVOVCddLFxuICAgIHNjaG9vbDogJ0tFRCcsXG4gICAgdXNlcm5hbWU6IFwic3R1ZGVudDEzLmNsYXNzcm9vbUBrZWRzY2hvb2xzLmNvbVwiXG59LHsgXG4gICAgZGlzcGxheU5hbWU6IFwiU3R1ZGVudCAyNFwiLFxuICAgIG1haWw6IFwic3R1ZGVudDI0LmNsYXNzcm9vbUBrZWRzY2hvb2xzLmNvbVwiLFxuICAgIHJvbGVzOiBbJ1NUVURFTlQnXSxcbiAgICBzY2hvb2w6ICdLRUQnLFxuICAgIHVzZXJuYW1lOiBcInN0dWRlbnQyNC5jbGFzc3Jvb21Aa2Vkc2Nob29scy5jb21cIlxufSx7IFxuICAgIGRpc3BsYXlOYW1lOiBcIlRlc3QtTGl2ZS1FbGV2MVwiLFxuICAgIG1haWw6IFwidWJ3Njc1N0BlZHUua3Vuc2thcHNneW1uYXNpZXQuc2VcIixcbiAgICByb2xlczogWydTVFVERU5UJ10sXG4gICAgc2Nob29sOiAnVXBwc2FsYScsXG4gICAgdXNlcm5hbWU6IFwidWJ3Njc1N0BlZHUua3Vuc2thcHNneW1uYXNpZXQuc2VcIlxufSx7XG4gICAgZGlzcGxheU5hbWU6IFwiVGVzdC1MaXZlLUVsZXYyXCIsXG4gICAgbWFpbDogXCJ1bXM0MzAyQGVkdS5rdW5za2Fwc2d5bW5hc2lldC5zZVwiLFxuICAgIHJvbGVzOiBbJ1NUVURFTlQnXSxcbiAgICBzY2hvb2w6ICdVcHBzYWxhJyxcbiAgICB1c2VybmFtZTogXCJ1bXM0MzAyQGVkdS5rdW5za2Fwc2d5bW5hc2lldC5zZVwiXG59LHtcbiAgICBkaXNwbGF5TmFtZTogXCJUZXN0LUxpdmUtRWxldjNcIixcbiAgICBtYWlsOiBcInVoaDM0NjBAZWR1Lmt1bnNrYXBzZ3ltbmFzaWV0LnNlXCIsXG4gICAgcm9sZXM6IFsnU1RVREVOVCddLFxuICAgIHNjaG9vbDogJ1VwcHNhbGEnLFxuICAgIHVzZXJuYW1lOiBcInVoaDM0NjBAZWR1Lmt1bnNrYXBzZ3ltbmFzaWV0LnNlXCJcbn0se1xuICAgIGRpc3BsYXlOYW1lOiBcIlRlc3QtTGl2ZS1FbGV2NChmZWwgZ29hbHMgaXNzdWUpXCIsXG4gICAgbWFpbDogXCJ1bXQ2ODI2QGVkdS5rdW5za2Fwc3Nrb2xhbi5zZVwiLFxuICAgIHJvbGVzOiBbXCJTVFVERU5UXCJdLFxuICAgIHNjaG9vbDogXCJVcHBzYWxhXCIsXG4gICAgdXNlcm5hbWU6IFwidW10NjgyNkBlZHUua3Vuc2thcHNza29sYW4uc2VcIlxufSx7XG4gICAgZGlzcGxheU5hbWU6IFwiVGVzdC1MaXZlLUVsZXY1KGZ1dHVyZSBhYmlsaXRpZXMpXCIsXG4gICAgbWFpbDogXCJ1amczODMzQGVkdS5rdW5za2Fwc3Nrb2xhbi5zZVwiLFxuICAgIHJvbGVzOiBbXCJTVFVERU5UXCJdLFxuICAgIHNjaG9vbDogXCJVcHBzYWxhXCIsXG4gICAgdXNlcm5hbWU6IFwidWpnMzgzM0BlZHUua3Vuc2thcHNza29sYW4uc2VcIlxufSx7XG4gICAgZGlzcGxheU5hbWU6IFwiVGVzdC1MaXZlLUVsZXY2KGZ1dHVyZSBhYmlsaXRpZXMpXCIsXG4gICAgbWFpbDogXCJ1anQxMzYzQGVkdS5rdW5za2Fwc3Nrb2xhbi5zZVwiLFxuICAgIHJvbGVzOiBbXCJTVFVERU5UXCJdLFxuICAgIHNjaG9vbDogXCJVcHBzYWxhXCIsXG4gICAgdXNlcm5hbWU6IFwidWp0MTM2M0BlZHUua3Vuc2thcHNza29sYW4uc2VcIlxufSx7XG4gICAgZGlzcGxheU5hbWU6IFwiVGVzdC1MaXZlLUzDpHJhcmUxXCIsXG4gICAgbWFpbDogXCJyaWNrYXJkLmFsYmVydHNzb25Aa3Vuc2thcHNneW1uYXNpZXQuc2VcIixcbiAgICByb2xlczogWydFTVBMT1lFRSddLFxuICAgIHNjaG9vbDogJ1VwcHNhbGEnLFxuICAgIHVzZXJuYW1lOiBcInJpY2thcmQuYWxiZXJ0c3NvbkBrdW5za2Fwc2d5bW5hc2lldC5zZVwiXG59LHtcbiAgICBkaXNwbGF5TmFtZTogXCJFRFNUZXN0VXNlckd5bW5hc2l1bVwiLFxuICAgIG1haWw6IFwidWhoMzIwMEBlZHUua3Vuc2thcHNneW1uYXNpZXQuc2VcIixcbiAgICAvL21haWw6IFwiVUhIMzIwMEBFRFUuS1VOU0tBUFNHWU1OQVNJRVQuU0VcIixcbiAgICByb2xlczogW1wiU1RVREVOVFwiXSxcbiAgICB1c2VybmFtZTogXCJFRFNUZXN0VXNlcjFcIixcbiAgICBzY2hvb2w6IFwiS0VEXCIsXG4gICAgc2Nob29sVHlwZTogXCJHeW1uYXNpdW1cIlxufSx7XG4gICAgZGlzcGxheU5hbWU6IFwidmVtZW5kby5lbGV2QGtlZHNjaG9vbHMuY29tXCIsXG4gICAgbWFpbDogXCJ2ZW1lbmRvLmVsZXZAa2Vkc2Nob29scy5jb21cIixcbiAgICByb2xlczogW1wiU1RVREVOVFwiXSxcbiAgICB1c2VybmFtZTogXCJ2ZW1lbmRvLmVsZXZAa2Vkc2Nob29scy5jb21cIixcbiAgICBzY2hvb2w6IFwiS0VEXCIsXG4gICAgc2Nob29sVHlwZTogXCJHeW1uYXNpdW1cIlxufSx7XG4gICAgZGlzcGxheU5hbWU6IFwiTWVkYXJiZXRhcmUgTmFja2FcIixcbiAgICBtYWlsOiBcIm1lZGFyYmV0YXJlLm5hY2thQGt1bnNrYXBzc2tvbGFuLnNlXCIsXG4gICAgcm9sZXM6IFtcIkVNUExPWUVFXCJdLFxuICAgIHVzZXJuYW1lOiBcIm1lZGFyYmV0YXJlLm5hY2thL0tTXCIsXG4gICAgc2Nob29sOiBcIk5hY2thXCIsXG4gICAgc2Nob29sVHlwZTogXCJHcnVuZHNrb2xvclwiXG59LHtcbiAgICBkaXNwbGF5TmFtZTogXCJNZWRhcmJldGFyZSBHbG9iZW5cIixcbiAgICBtYWlsOiBcIm1lZGFyYmV0YXJlLmdsb2JlbkBrdW5za2Fwc2d5bW5hc2lldC5zZVwiLFxuICAgIHJvbGVzOiBbXCJFTVBMT1lFRVwiXSxcbiAgICB1c2VybmFtZTogXCJtZWRhcmJldGFyZS5nbG9iZW4vS1NcIixcbiAgICBzY2hvb2w6IFwiR2xvYmVuXCIsXG4gICAgc2Nob29sVHlwZTogXCJHeW1uYXNpdW1cIlxufSx7XG4gICAgZGlzcGxheU5hbWU6IFwiRWxldiBHbG9iZW5cIixcbiAgICBtYWlsOiBcImVsZXYuZ2xvYmVuQGVkdS5rdW5za2Fwc2d5bW5hc2lldC5zZVwiLFxuICAgIHNjaG9vbEdyYWRlOiAyLFxuICAgIHJvbGVzOiBbJ1NUVURFTlQnXSxcbiAgICB1c2VybmFtZTogXCJlbGV2Lmdsb2JlblwiLFxuICAgIHNjaG9vbDogXCJHbG9iZW5cIixcbiAgICBzY2hvb2xUeXBlOiBcIkd5bW5hc2l1bVwiXG59LHtcbiAgICBkaXNwbGF5TmFtZTogXCJFbGV2IEJvcsOlc1wiLFxuICAgIG1haWw6IFwiZWxldi5ib3Jhc0BlZHUua3Vuc2thcHNza29sYW4uc2VcIixcbiAgICBzY2hvb2xHcmFkZTogNyxcbiAgICByb2xlczogWydTVFVERU5UJ10sXG4gICAgdXNlcm5hbWU6IFwiZWxldi5ib3Jhc1wiLFxuICAgIHNjaG9vbDogXCJCb3LDpXNcIixcbiAgICBzY2hvb2xUeXBlOiBcIkdydW5kc2tvbG9yXCJcbn0se1xuICAgIGRpc3BsYXlOYW1lOiBcIkVsZXYgQm9ybMOkbmdlXCIsXG4gICAgbWFpbDogXCJlbGV2LmJvcmxhbmdlQGVkdS5rdW5za2Fwc3Nrb2xhbi5zZVwiLFxuICAgIHNjaG9vbEdyYWRlOiA5LFxuICAgIHJvbGVzOiBbJ1NUVURFTlQnXSxcbiAgICB1c2VybmFtZTogJ2VsZXYuYm9ybGFuZ2UvS1MnLFxuICAgIHNjaG9vbDogJ0JvcmzDpG5nZScsXG4gICAgc2Nob29sVHlwZTogXCJHeW1uYXNpdW1cIlxufSx7XG4gICAgZGlzcGxheU5hbWU6IFwiUm9sbC1sw7ZzXCIsXG4gICAgbWFpbDogXCJub25lQGt1bnNrYXBzc2tvbGFuLnNlXCIsXG4gICAgdXNlcm5hbWU6IFwibm9uZVwiLFxuICAgIHJvbGVzOiBbXVxufV07XG5cbiIsImltcG9ydCBlbnYgZnJvbSAnLi4vZ2xvYmFscy9LRUQuZW52JztcbmltcG9ydCB7IHVzZXJzIH0gZnJvbSAnLi9kYXRhL3VzZXJzJztcbmltcG9ydCB7IHBhcnNlUXVlcnlTdHJpbmcgfSBmcm9tICcuLi91dGlscy9xdWVyeS1zdHJpbmcnO1xuXG5jb25zdCB1c2VybmFtZSA9IHBhcnNlUXVlcnlTdHJpbmcgKGxvY2F0aW9uLnNlYXJjaCkudXNlcjtcbmlmICh1c2VybmFtZSkge1xuICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh1ID0+IHUudXNlcm5hbWUgPT09IHVzZXJuYW1lKTtcbiAgaWYgKHVzZXIpIHtcbiAgICBlbnYuY3VycmVudFVzZXIgPSB1c2VyO1xuICB9XG59XG5cbmNvbnN0IHsgcm9sZSwgc2Nob29sIH0gPSBwYXJzZVF1ZXJ5U3RyaW5nKGxvY2F0aW9uLnNlYXJjaCk7XG5pZiAoZW52LmN1cnJlbnRVc2VyKSB7XG4gIGlmIChyb2xlKSB7XG4gICAgZW52LmN1cnJlbnRVc2VyLnJvbGVzID0gcm9sZS5zcGxpdCgnLCcpO1xuICB9XG4gIGlmIChzY2hvb2wpIHtcbiAgICBlbnYuY3VycmVudFVzZXIuc2Nob29sID0gc2Nob29sO1xuICB9XG59XG4iLCIvLyA8SW5pdGlhbGl6YXRpb24+XG5pbXBvcnQgJy4vc2V0LWN1cnJlbnQtdXNlcic7IC8vIEVtdWxhdGUgc2VydmVyLXNpZGUgc2NyaXB0IHRvIHNldCBjdXJyZW50IHVzZXJcbmltcG9ydCAnLi4vZ2xvYmFsLXNldHRlcnMvc2V0LWFsbCc7IC8vIENsaWVudC1zaWRlIGluaXRpYWxpemF0aW9uXG4vLyA8L0luaXRpYWxpemF0aW9uPlxuXG5pbXBvcnQgZW52IGZyb20gJy4uL2dsb2JhbHMvS0VELmVudic7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaG9vc2VVc2VyIH0gZnJvbSAnLi91dGlscy9jaG9vc2UtdXNlcic7XG5pbXBvcnQgeyBpbmNsdWRlQ1NTIH0gZnJvbSAnLi91dGlscy9pbmNsdWRlLWNzcyc7XG5pbXBvcnQgeyBpbmNsdWRlT3B0aW9uYWxDU1MgfSBmcm9tICcuLi91dGlscy9pbmNsdWRlLW9wdGlvbmFsLWNzcyc7XG5pbXBvcnQgeyBMYW5ndWFnZUNvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxpdHktY29tcG9uZW50cy9MYW5ndWFnZUNvbnRleHQnO1xuaW1wb3J0IHsgSW5qZWN0ZWRJbnRsUHJvcHMsIGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7IHNldHVwSW50bCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbGl0eS1jb21wb25lbnRzL1NldHVwTGFuZ3VhZ2VJbnRsJztcbmltcG9ydCB7IFRlYWNoZXJWaWV3QXBwIH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZWFjaGVyLXZpZXcnO1xuXG5pbmNsdWRlT3B0aW9uYWxDU1Moe1xuICB2MTogW1xuICAgICdjc3MvZGlhbG9nLmNzcycsXG4gICAgJ2Nzcy9ncmlkLWNzcy1wYXRjaC5jc3MnXG4gIF0sXG4gIGluY2x1ZGVDU1MsXG4gIHZlcnNpb246IDcsXG4gIHZlcnNpb25Gb2xkZXI6ICdjc3MvZGVsdGEtY3NzL2NvdXJzZXZpZXdlcidcbn0pO1xuXG5jbGFzcyBfQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEluamVjdGVkSW50bFByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy9pZiAoIWxvY2F0aW9uLmhhc2gpIGxvY2F0aW9uLmhhc2ggPSBcIiMvXCI7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2ludGx9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gZW52LmN1cnJlbnRVc2VyID9cbiAgICA8TGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGludGwgfX0+XG4gICAgICB7LyogPFN1YmplY3RQbGFubmVyQWRtaW5BcHAgLz4gICovfVxuICAgICAgPFRlYWNoZXJWaWV3QXBwIGNvdXJzZUJ1aWxkZXJVcmw9XCJjb3Vyc2VidWlsZGVyLmh0bWxcIi8+XG4gICAgPC9MYW5ndWFnZUNvbnRleHQuUHJvdmlkZXI+OlxuICAgICAgPENob29zZVVzZXIgLz5cbiAgfVxufVxuXG5jb25zdCBBcHAgPSBzZXR1cEludGwoaW5qZWN0SW50bChfQXBwKSk7XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VycyB9IGZyb20gJy4uL2RhdGEvdXNlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hvb3NlVXNlcigpIHtcbiAgbGV0IHNlbGVjdDtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic3YtbGF5b3V0XCI+XG4gICAgPGgyPlbDpGxqIGFudsOkbmRhcmU8L2gyPlxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJsb2dpbi10YWJsZVwiPjx0aGVhZD48dHI+XG4gICAgICA8dGg+TmFtbjwvdGg+XG4gICAgICA8dGg+Um9sbGVyPC90aD5cbiAgICAgIDx0aD5FLXBvc3Q8L3RoPlxuICAgICAgPHRoPlNrb2xhPC90aD5cbiAgICA8L3RyPjwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHt1c2Vycy5tYXAoKHsgdXNlcm5hbWUsIGRpc3BsYXlOYW1lLCBtYWlsLCBzY2hvb2wsIHJvbGVzIH0pID0+XG4gICAgICAgICAgPHRyIGtleT17bWFpbH0gb25DbGljaz17KCkgPT4gbG9jYXRpb24uc2VhcmNoID0gYD91c2VyPSR7dXNlcm5hbWV9YH0+XG4gICAgICAgICAgICA8dGQ+e2Rpc3BsYXlOYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQgc3R5bGU9e3JvbGVzLmxlbmd0aCA9PT0gMCA/IHsgZm9udFN0eWxlOiAnaXRhbGljJyB9IDoge319Pntyb2xlcy5sZW5ndGggPT09IDAgPyBcInNha25hciByb2xsZXJcIiA6IHJvbGVzLmpvaW4oJywgJyl9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bWFpbH08L3RkPlxuICAgICAgICAgICAgPHRkIHN0eWxlPXtzY2hvb2wgPyB7fSA6IHsgZm9udFN0eWxlOiAnaXRhbGljJyB9fT57c2Nob29sIHx8IFwic2FrbmFyIHNrb2xhXCJ9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICApfVxuICAgICAgPC90Ym9keT48L3RhYmxlPlxuICA8L2Rpdj5cbn07XG4iLCJmdW5jdGlvbiByZXNvbHZlKHVyaTogc3RyaW5nKSB7XG4gIHZhciBocmVmID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0ICsgbG9jYXRpb24ucGF0aG5hbWU7XG4gIHZhciBwTGFzdFNsYXNoID0gaHJlZi5sYXN0SW5kZXhPZignLycpO1xuICByZXR1cm4gaHJlZi5zdWJzdHIoMCwgcExhc3RTbGFzaCArIDEpICsgdXJpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZUNTUyhjc3NGaWxlOiBzdHJpbmcpIHtcbiAgZG9jdW1lbnQud3JpdGUoJzxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiJytyZXNvbHZlKGNzc0ZpbGUpKydcIiAvPicpOyAgXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaW5jbHVkZU9wdGlvbmFsQ1NTICh7XG4gIHYxLFxuICB2ZXJzaW9uRm9sZGVyLFxuICB2ZXJzaW9uLFxuICBpbmNsdWRlQ1NTLFxuICBOT0NTU1xufToge3YxPzogc3RyaW5nW10sIHZlcnNpb25Gb2xkZXI/OiBzdHJpbmcsIHZlcnNpb246IG51bWJlciwgaW5jbHVkZUNTUzogKGZpbGU6IHN0cmluZykgPT4gdm9pZCwgTk9DU1M/OiBzdHJpbmd9KSB7XG4gIGlmICghTk9DU1MpIHtcbiAgICBpZiAodjEpIHYxLmZvckVhY2goY3NzRmlsZSA9PiBpbmNsdWRlQ1NTKGNzc0ZpbGUpKTtcbiAgfVxuICBsZXQgY3NzVmVyID0gcGFyc2VJbnQoTk9DU1MpO1xuICBpZiAoaXNOYU4oY3NzVmVyKSkgY3NzVmVyID0gMTtcbiAgZm9yIChsZXQgdmVyID0gY3NzVmVyICsgMTsgdmVyIDw9IHZlcnNpb247ICsrdmVyKSB7XG4gICAgaW5jbHVkZUNTUyhgJHt2ZXJzaW9uRm9sZGVyfS92JHt2ZXJ9LmNzc2ApO1xuICB9XG59XG4iLCJjb25zdCBERUZBVUxUX0NBQ0hFX0VYUElSQVRJT04gPSAzMCAqIDYwICogMTAwMDsgLy8gMzAgbWludXRlcy5cblxudHlwZSBQcm9taXNlUmV0dXJuaW5nTWV0aG9kTmFtZXM8QVBJPiA9IHtcbiAgW01FVEhPRCBpbiBrZXlvZiBBUEldOiBBUElbTUVUSE9EXSBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUHJvbWlzZTxhbnk+ID8gTUVUSE9EIDogbmV2ZXJcbn1cblxudHlwZSBDb252ZXJ0TWV0aG9kVG9TdXNwZW5zZTxGPiA9IEYgZXh0ZW5kcyAoLi4uYXJnczogaW5mZXIgQSkgPT4gUHJvbWlzZTxpbmZlciBSPiA/XG4gICguLi5hcmdzOiBBKSA9PiBSIDpcbiAgRjtcblxuZXhwb3J0IHR5cGUgU3VzcGVuc2VCYXNlZEFQSTxBUEk+ID0ge1xuICBbTUVUSE9EIGluIGtleW9mIFByb21pc2VSZXR1cm5pbmdNZXRob2ROYW1lczxBUEk+XTogQ29udmVydE1ldGhvZFRvU3VzcGVuc2U8QVBJW01FVEhPRF0+XG59XG5cbnR5cGUgT3B0aW9ucyA9IHtcbiAgaXNBcGlNZXRob2Q/OiAocHJvcDogc3RyaW5nKT0+Ym9vbGVhbixcbiAgY2FjaGVFeHBpcmF0aW9uPzogbnVtYmVyXG59XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zOiBPcHRpb25zID0ge1xuICBpc0FwaU1ldGhvZDogZiA9PiB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJyxcbiAgY2FjaGVFeHBpcmF0aW9uOiBERUZBVUxUX0NBQ0hFX0VYUElSQVRJT05cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3VzcGVuc2VBcGk8QVBJPihhcGk6IEFQSSwgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zKTogU3VzcGVuc2VCYXNlZEFQSTxBUEk+XG57XG4gIG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICBjb25zdCB7aXNBcGlNZXRob2QsIGNhY2hlRXhwaXJhdGlvbn0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHJ2OiBTdXNwZW5zZUJhc2VkQVBJPEFQST4gPSBPYmplY3QuY3JlYXRlKGFwaSBhcyBhbnkpIGFzIFN1c3BlbnNlQmFzZWRBUEk8QVBJPjtcbiAgY29uc3QgY2FjaGU6IHtba2V5OiBzdHJpbmddOiB7dGltZW91dDogbnVtYmVyLCB2YWx1ZT86IGFueSwgZXJyb3I/OiBhbnksIHByb21pc2U/OiBQcm9taXNlPGFueT59fSA9IHt9O1xuXG4gIC8vIFdhbGsgdGhlIGluc3RhbmNlICsgcHJvdG90eXBlIGNoYWluIHRvIGdlbmVyYXRlIHN1c3BlbnNlIHZlcnNpb24gb2YgZWFjaCBwcm9taXNlIHJldHVybmluZyBtZXRob2RcbiAgZm9yIChsZXQgcHJvdG8gPSBhcGk7IHByb3RvICYmIHByb3RvICE9PSBPYmplY3QucHJvdG90eXBlOyBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bykpIHtcbiAgICBzdXNwZW5kaWZ5KHByb3RvKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1c3BlbmRpZnkocHJvdG8pIHtcbiAgICBPYmplY3Qua2V5cyhwcm90bykuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgIGlmICghcnYuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgaXNBcGlNZXRob2QocHJvcCkpIHtcbiAgICAgICAgcnZbcHJvcF0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtwcm9wLCAuLi5hcmdzXSk7XG4gICAgICAgICAgY29uc3QgY2FjaGVkRW50cnkgPSBjYWNoZVtrZXldO1xuICAgICAgICAgIGlmIChjYWNoZWRFbnRyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkRW50cnkucHJvbWlzZSkgdGhyb3cgY2FjaGVkRW50cnkucHJvbWlzZTtcbiAgICAgICAgICAgIGlmIChjYWNoZWRFbnRyeS5lcnJvcikgdGhyb3cgY2FjaGVkRW50cnkuZXJyb3I7XG4gICAgICAgICAgICBpZiAoY2FjaGVkRW50cnkudGltZW91dCA+IERhdGUubm93KCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlZEVudHJ5LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHByb3RvW3Byb3BdLmFwcGx5KGFwaSwgYXJncykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICBjYWNoZVtrZXldID0ge3RpbWVvdXQ6IERhdGUubm93KCkgKyBjYWNoZUV4cGlyYXRpb24sIHZhbHVlOiByZXN1bHR9O1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBjYWNoZVtrZXldID0ge3RpbWVvdXQ6IERhdGUubm93KCkgKyBjYWNoZUV4cGlyYXRpb24sIGVycm9yfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FjaGVba2V5XSA9IHt0aW1lb3V0OiBEYXRlLm5vdygpICsgY2FjaGVFeHBpcmF0aW9uLCBwcm9taXNlfTtcbiAgICAgICAgICAgIHRocm93IHByb21pc2U7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvci50aGVuKSB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIGNhY2hlW2tleV0gPSB7dGltZW91dDogRGF0ZS5ub3coKSArIGNhY2hlRXhwaXJhdGlvbiwgZXJyb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBhbnk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcnY7XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFBhcnNlUXVlcnlTdHJpbmdPcHRpb25zIHtcbiAgdG9Mb3dlcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nKGxvY2F0aW9uU2VhcmNoOiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJzZVF1ZXJ5U3RyaW5nT3B0aW9ucyk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICBjb25zdCB7dG9Mb3dlcn0gPSAob3B0aW9ucyB8fMKge30pIGFzIFBhcnNlUXVlcnlTdHJpbmdPcHRpb25zO1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgaWYgKGxvY2F0aW9uU2VhcmNoICYmIGxvY2F0aW9uU2VhcmNoLmxlbmd0aCA+IDEpXG4gICAgbG9jYXRpb25TZWFyY2guc3Vic3RyKDEpXG4gICAgICAuc3BsaXQoJyYnKVxuICAgICAgLm1hcChwYXJ0ID0+IHBhcnQuc3BsaXQoJz0nKS5tYXAocyA9PiBkZWNvZGVVUklDb21wb25lbnQocy50cmltKCkpKSlcbiAgICAgIC5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHJlc3VsdFt0b0xvd2VyID8ga2V5LnRvTG93ZXJDYXNlKCkgOiBrZXldID0gdmFsdWUpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBlbmNvZGVQYXJhbXMocGFyYW1zOiB7W2tleTogc3RyaW5nXTpzdHJpbmd9KSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhwYXJhbXMpLmZpbHRlcihrZXkgPT4gcGFyYW1zW2tleV0gIT09IHVuZGVmaW5lZCkubWFwKGtleSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pfWApLmpvaW4oJyYnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUXVlcnlTdHJpbmcocGFyYW1zOiB7W2tleTogc3RyaW5nXTpzdHJpbmd9KSB7XG4gIHJldHVybiBcIj9cIiArIGVuY29kZVBhcmFtcyhwYXJhbXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VIYXNoUXVlcnlTdHJpbmcobG9jYXRpb25IYXNoOiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJzZVF1ZXJ5U3RyaW5nT3B0aW9ucykge1xuICByZXR1cm4gcGFyc2VRdWVyeVN0cmluZyhsb2NhdGlvbkhhc2gsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVIYXNoUXVlcnlTdHJpbmcocGFyYW1zOiB7W2tleTogc3RyaW5nXTpzdHJpbmd9KSB7XG4gIHJldHVybiBcIiNcIiArIGVuY29kZVBhcmFtcyhwYXJhbXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRVcmxBbmRRdWVyeSAodXJsV2l0aFBvc3NpYmxlUXVlcnk6IHN0cmluZykge1xuICBjb25zdCBwUXVlcnkgPSB1cmxXaXRoUG9zc2libGVRdWVyeS5pbmRleE9mKCc/Jyk7XG4gIHJldHVybiBwUXVlcnkgPj0gMCA/XG4gICAgW3VybFdpdGhQb3NzaWJsZVF1ZXJ5LnN1YnN0cigwLCBwUXVlcnkpLCB1cmxXaXRoUG9zc2libGVRdWVyeS5zdWJzdHIocFF1ZXJ5KV0gOlxuICAgIFt1cmxXaXRoUG9zc2libGVRdWVyeSwgXCJcIl07XG59XG4iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBUZXJtLCBBY2FkZW1pY1llYXIgfSBmcm9tICcuLi9jb250cmFjdHMva2VkLW1vZGVscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nob29sTW9tZW50IHtcbiAgYWNhZGVtaWNZZWFyOiBBY2FkZW1pY1llYXI7XG4gIHRlcm06IFRlcm07XG4gIHdlZWs/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdEFuZExhc3RXZWVrT2ZUZXJtKHRlcm06IFRlcm0pIHtcbiAgcmV0dXJuIHRlcm0gPT09ICdBVCcgP1xuICAgIFszMiwgNTFdIDpcbiAgICBbMSwgMjVdO1xufVxuXG4vL05vdCB1c2VkIGFueW1vcmVcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRUZXJtU3RhcnRBbmRFbmQobm93OiBtb21lbnQuTW9tZW50KSA6IG1vbWVudC5Nb21lbnRbXSB7XG4vLyAgICAgcmV0dXJuIG5vdy5tb250aCgpID49IDYgPyAvLyA2ID0gSnVseSBpbiBKUyBEYXRlcyBhbmQgaW4gbW9tZW50IGFzIHdlbGwhXG4vLyAgICAgW21vbWVudChuZXcgRGF0ZShub3cueWVhcigpLCA3LCAxKSksIG1vbWVudChuZXcgRGF0ZShub3cueWVhcigpLCAxMSwgMzEpKV0gOiAvLyBhdWcxIC0gZGVjMzFcbi8vICAgICBbbW9tZW50KG5ldyBEYXRlKG5vdy55ZWFyKCksIDAsIDEpKSwgbW9tZW50KG5ldyBEYXRlKG5vdy55ZWFyKCksIDYsIDMxKSldOyAvLyBqYW4xIC0ganVseTMxXG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXJtU3RhckVuZERhdGUoZGF0ZTogRGF0ZSwgaXNGaXJzdFRlcm06IGJvb2xlYW4pOiBtb21lbnQuTW9tZW50W10ge1xuICB2YXIgYWRkWWVhciA9IGRhdGUuZ2V0TW9udGgoKSA+PSA3O1xuICB2YXIgdGVybVllYXIgPSBudWxsO1xuXG4gIGlmIChhZGRZZWFyKSB7XG4gICAgdGVybVllYXIgPSBpc0ZpcnN0VGVybSA/IGRhdGUuZ2V0RnVsbFllYXIoKSA6IGRhdGUuZ2V0RnVsbFllYXIoKSArIDE7XG4gIH0gZWxzZSB7XG4gICAgdGVybVllYXIgPSBpc0ZpcnN0VGVybSA/IGRhdGUuZ2V0RnVsbFllYXIoKSAtIDEgOiBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIH1cblxuICB2YXIgdGVybVllYXJNb21lbnQgPSBtb21lbnQodGVybVllYXIudG9TdHJpbmcoKSwgXCJZWVlZXCIpO1xuXG4gIGlmICh0ZXJtWWVhck1vbWVudC53ZWVrKCkgIT0gMSkge1xuICAgIHRlcm1ZZWFyTW9tZW50ID0gdGVybVllYXJNb21lbnQuY2xvbmUoKS5hZGQoMSwgJ3dlZWsnKTtcbiAgfVxuXG4gIHJldHVybiBpc0ZpcnN0VGVybSA/IFttb21lbnQodGVybVllYXJNb21lbnQuY2xvbmUoKSkud2VlaygzMikuc3RhcnRPZignd2VlaycpLCBtb21lbnQodGVybVllYXJNb21lbnQuY2xvbmUoKSkud2Vlayg1MSkuZW5kT2YoJ3dlZWsnKV0gOlxuICAgIFttb21lbnQodGVybVllYXJNb21lbnQuY2xvbmUoKSksIG1vbWVudCh0ZXJtWWVhck1vbWVudC5jbG9uZSgpKS53ZWVrKDI1KS5lbmRPZignd2VlaycpXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjaG9vbE1vbWVudChtOiBtb21lbnQuTW9tZW50KTogU2Nob29sTW9tZW50IHtcbiAgY29uc3QgdGhpc1llYXIgPSBtLnllYXIoKTtcbiAgY29uc3QgaXNBdXR1bW4gPSBtLm1vbnRoKCkgPj0gNjsgLy8gZGV0ZXJtaW5lIFxuICBjb25zdCBbYXV0dW1uWWVhciwgc3ByaW5nWWVhcl0gPSBpc0F1dHVtbiA/XG4gICAgW3RoaXNZZWFyLCB0aGlzWWVhciArIDFdIDpcbiAgICBbdGhpc1llYXIgLSAxLCB0aGlzWWVhcl07XG4gIGNvbnN0IGFjYWRlbWljWWVhciA9ICcnICsgYXV0dW1uWWVhciArICcvJyArIHNwcmluZ1llYXI7XG4gIGNvbnN0IHRlcm0gPSBpc0F1dHVtbiA/ICdBVCcgOiAnU1QnO1xuICBjb25zdCB3ZWVrID0gbS53ZWVrKCk7XG4gIHJldHVybiB7IGFjYWRlbWljWWVhciwgdGVybSwgd2VlayB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkWWVhcihhWWVhcjogQWNhZGVtaWNZZWFyLCBudW1ZZWFyc1RvQWRkOiBudW1iZXIpOiBBY2FkZW1pY1llYXIge1xuICByZXR1cm4gYVllYXIuc3BsaXQoJy8nKVxuICAgIC5tYXAoeWVhclN0ciA9PiBwYXJzZUludCh5ZWFyU3RyKSArIG51bVllYXJzVG9BZGQpXG4gICAgLm1hcCh5ZWFyID0+ICcnICsgeWVhcilcbiAgICAuam9pbignLycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV4dEFjYWRlbWljWWVhcihhWWVhcjogQWNhZGVtaWNZZWFyKTogQWNhZGVtaWNZZWFyIHtcbiAgcmV0dXJuIGFkZFllYXIoYVllYXIsIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJldkFjYWRlbWljWWVhcihhWWVhcjogQWNhZGVtaWNZZWFyKTogQWNhZGVtaWNZZWFyIHtcbiAgcmV0dXJuIGFkZFllYXIoYVllYXIsIC0xKTtcbn1cbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFNjaG9vbE1vbWVudCwgZ2V0U2Nob29sTW9tZW50LCBhZGRZZWFyIH0gZnJvbSAnLi9zY2hvb2wtbW9tZW50JztcbmltcG9ydCB7IEFjYWRlbWljWWVhciwgVGVybSB9IGZyb20gJy4uL2NvbnRyYWN0cy9rZWQtbW9kZWxzJztcbmltcG9ydCB7SW5qZWN0ZWRJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcblxudHlwZSBNb21lbnQgPSBtb21lbnQuTW9tZW50O1xuXG5mdW5jdGlvbiBpc1NjaG9vbE1vbWVudChvYmo6IERhdGUgfCBTY2hvb2xNb21lbnQpOiBvYmogaXMgU2Nob29sTW9tZW50IHtcbiAgcmV0dXJuICdhY2FkZW1pY1llYXInIGluIG9iajtcbn1cblxuZXhwb3J0IGNsYXNzIFNjaG9vbFRlcm0ge1xuICBhY2FkZW1pY1llYXI6IEFjYWRlbWljWWVhcjtcbiAgdGVybTogVGVybTtcblxuICBjb25zdHJ1Y3RvcihkYXRlT3JTY2hvb2xNb21lbnQ6IERhdGUgfCBTY2hvb2xNb21lbnQpIHtcbiAgICBjb25zdCBzY2hvb2xNb21lbnQgPSBpc1NjaG9vbE1vbWVudChkYXRlT3JTY2hvb2xNb21lbnQpID9cbiAgICAgIGRhdGVPclNjaG9vbE1vbWVudCA6IGdldFNjaG9vbE1vbWVudChtb21lbnQoZGF0ZU9yU2Nob29sTW9tZW50KSk7XG4gICAgdGhpcy5hY2FkZW1pY1llYXIgPSBzY2hvb2xNb21lbnQuYWNhZGVtaWNZZWFyO1xuICAgIHRoaXMudGVybSA9IHNjaG9vbE1vbWVudC50ZXJtO1xuICB9XG5cbiAgZ2V0IHllYXIoKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuYWNhZGVtaWNZZWFyXG4gICAgICAgIC5zcGxpdCgnLycpW3RoaXMudGVybSA9PT0gJ0FUJyA/IDAgOiAxXSk7XG4gIH1cblxuICBuZXh0VGVybSgpIHtcbiAgICByZXR1cm4gbmV3IFNjaG9vbFRlcm0odGhpcy50ZXJtID09PSAnQVQnID9cbiAgICAgIHtcbiAgICAgICAgdGVybTogJ1NUJyxcbiAgICAgICAgYWNhZGVtaWNZZWFyOiB0aGlzLmFjYWRlbWljWWVhclxuICAgICAgfSA6XG4gICAgICB7XG4gICAgICAgIHRlcm06ICdBVCcsXG4gICAgICAgIGFjYWRlbWljWWVhcjogYWRkWWVhcih0aGlzLmFjYWRlbWljWWVhciwgMSlcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJldlRlcm0oKSB7XG4gICAgcmV0dXJuIG5ldyBTY2hvb2xUZXJtKHRoaXMudGVybSA9PT0gJ0FUJyA/XG4gICAgICB7XG4gICAgICAgIHRlcm06ICdTVCcsXG4gICAgICAgIGFjYWRlbWljWWVhcjogYWRkWWVhcih0aGlzLmFjYWRlbWljWWVhciwgLTEpXG4gICAgICB9IDpcbiAgICAgIHtcbiAgICAgICAgdGVybTogJ0FUJyxcbiAgICAgICAgYWNhZGVtaWNZZWFyOiB0aGlzLmFjYWRlbWljWWVhclxuICAgICAgfSk7XG4gICAgXG4gIH1cblxuICB0b0xvY2FsZVN0cmluZyhpbnRsOiBJbmplY3RlZEludGwsIHNob3J0WWVhcj86IGJvb2xlYW4pIHtcbiAgICBsZXQgeWVhciA9IHRoaXMudGVybSA9PT0gJ0FUJyA/XG4gICAgICB0aGlzLmFjYWRlbWljWWVhci5zcGxpdCgnLycpWzBdOlxuICAgICAgdGhpcy5hY2FkZW1pY1llYXIuc3BsaXQoJy8nKVsxXTtcblxuICAgIGlmIChzaG9ydFllYXIpXG4gICAgICB5ZWFyID0geWVhci5zdWJzdHIoMik7XG5cbiAgICByZXR1cm4gdGhpcy50ZXJtID09PSAnQVQnID8gaW50bC5mb3JtYXRNZXNzYWdlKHtpZDondGVybXBsYW5uZXIuc2Vjb25kVGVybScsIGRlZmF1bHRNZXNzYWdlOidIVCB7eWVhcn0nfSwge3llYXI6IHllYXJ9KSA6IFxuICAgIGludGwuZm9ybWF0TWVzc2FnZSh7aWQ6J3Rlcm1wbGFubmVyLmZpcnN0VGVybScsIGRlZmF1bHRNZXNzYWdlOidWVCB7eWVhcn0nfSwge3llYXI6IHllYXJ9KTtcbiAgfVxufVxuIiwiXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0IChzdHIpIHtcbiAgICBmb3IgKGxldCBpPTAsIGw9c3RyLmxlbmd0aDsgaTxsOyArK2kpIHtcbiAgICAgICAgaWYgKHN0ci5jaGFyQ29kZUF0KGkpIDwgMHgyMDAwKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnN1YnN0cigwLCBpKSArIHN0cltpXS50b0xvY2FsZVVwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cihpICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZChvYmosIGV4dGVuc2lvbikge1xuICAgIGlmICh0eXBlb2YgZXh0ZW5zaW9uICE9PSAnb2JqZWN0JykgcmV0dXJuIG9iajtcbiAgICBPYmplY3Qua2V5cyhleHRlbnNpb24pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgb2JqW2tleV0gPSBleHRlbnNpb25ba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmU8VCxFPiAob2JqIDogVCwgZXh0ZW5zaW9uPzogRSkge1xuICAgIGxldCBjbG9uZSA9IHt9O1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xvbmUsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkpO1xuICAgIH0pO1xuICAgIGlmIChleHRlbnNpb24pIGV4dGVuZChjbG9uZSwgZXh0ZW5zaW9uKTtcbiAgICByZXR1cm4gY2xvbmUgYXMgKFQgJiBFKTtcbn1cblxuY29uc3QgY29uY2F0ID0gW10uY29uY2F0O1xuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW48VD4gKGEgOiAoVCB8IFRbXSlbXSkge1xuICAgIHJldHVybiBjb25jYXQuYXBwbHkoW10sIGEpIGFzIFRbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVQcm9wPFQ+KHByb3A6a2V5b2YgVCkge1xuICAgIHJldHVybiAoYTogVCxiOiBUKSA9PiB7XG4gICAgICAgIGNvbnN0IGFQcm9wID0gYVtwcm9wXSwgYlByb3AgPSBiW3Byb3BdO1xuICAgICAgICByZXR1cm4gYVByb3AgPiBiUHJvcCA/IDEgOiBhUHJvcCA8IGJQcm9wID8gLTEgOiAwO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVQcm9wcyhcbiAgICBwcm9wczogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgbG9jYWxlcz86IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIG9wdGlvbnM/OiBJbnRsLkNvbGxhdG9yT3B0aW9ucyk6IChhOiBhbnksIGI6IGFueSkgPT4gbnVtYmVyXG57XG4gICAgcHJvcHMgPSBBcnJheS5pc0FycmF5KHByb3BzKSA/IHByb3BzIDogW3Byb3BzXTtcblxuICAgIGNvbnN0IGxvY2FsZUNvbXBhcmUgPSAoYSxiKSA9PlxuICAgICAgICB0eXBlb2YgYSA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgICAgYS5sb2NhbGVDb21wYXJlKGIsIGxvY2FsZXMsIG9wdGlvbnMpIDpcbiAgICAgICAgICAgIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiAwO1xuXG4gICAgZnVuY3Rpb24gY21wUGFydCAoYSxiLGZpcnN0UGFydDogc3RyaW5nLHJlc3Q6IHN0cmluZ1tdKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0QSA9IGFbZmlyc3RQYXJ0XTtcbiAgICAgICAgY29uc3QgZmlyc3RCID0gYltmaXJzdFBhcnRdO1xuICAgICAgICBpZiAoZmlyc3RBID09PSBmaXJzdEIpIHJldHVybiAwO1xuICAgICAgICBpZiAoZmlyc3RBID09IG51bGwpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGZpcnN0QiA9PSBudWxsKSByZXR1cm4gMTtcbiAgICAgICAgcmV0dXJuIHJlc3QubGVuZ3RoID09PSAwID9cbiAgICAgICAgICAgIGxvY2FsZUNvbXBhcmUoZmlyc3RBLCBmaXJzdEIpIDpcbiAgICAgICAgICAgIGNtcFBhcnQoZmlyc3RBLCBmaXJzdEIsIHJlc3RbMF0sIHJlc3Quc2xpY2UoMSkpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wc1xuICAgICAgICAubWFwKHByb3AgPT4gcHJvcC5zcGxpdCgnLicpKVxuICAgICAgICAubWFwKChbZmlyc3RQYXJ0LCAuLi5yZXN0XSkgPT4gKGEsYikgPT4gY21wUGFydChhLGIsIGZpcnN0UGFydCwgcmVzdCkpXG4gICAgICAgIC5yZWR1Y2UoKGNtcDEsIGNtcDIpID0+XG4gICAgICAgICAgICAoYSxiKSA9PiBjbXAxKGEsYikgfHwgY21wMihhLGIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEwodGV4dCwgLi4uYXJncykge1xuICAgIGxldCBmaXJzdCA9IHRleHRbMF07XG4gICAgcmV0dXJuIGJ1aWxkTWVzc2FnZSh0ZXh0LCBhcmdzKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRNZXNzYWdlICh0ZXh0LCBhcmdzKSB7XG4gICAgbGV0IHJ2ID0gdGV4dFswXTtcbiAgICBmb3IgKGxldCBpPTEsIGw9dGV4dC5sZW5ndGg7IGk8bDsgKytpKSB7XG4gICAgICAgIHJ2ICs9IGFyZ3NbaS0xXSArIHRleHRbaV07XG4gICAgfVxuICAgIHJldHVybiBydjtcbn1cblxuZXhwb3J0IGNsYXNzIFRDPFQ+IHtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZTogVCkge1xuICAgICAgICBleHRlbmQodGhpcywgdGVtcGxhdGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVUaW1lUmV2aXZlciAoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBhO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGEgPSAvXFwvRGF0ZVxcKChcXGQqKVxcKVxcLy8uZXhlYyh2YWx1ZSk7XG4gICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoK2FbMV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuLy9sZXQgaW5mb1NlcmlhbCA9IDE7XG5leHBvcnQgZnVuY3Rpb24gc2hvd0luZm8gKG1zZykge1xuICAgIHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnaW5mbycsIHsgJ2RldGFpbCc6IG1zZyB9KTtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93RXJyb3IgKGVyck1zZzogc3RyaW5nIHwgRXJyb3IpIHtcbiAgICBjb25zdCBtc2cgPSB0eXBlb2YgZXJyTXNnID09PSAnc3RyaW5nJyA/IGVyck1zZyA6IGVyck1zZy5tZXNzYWdlO1xuICAgIHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY3VzdG9tZXJyb3InLCB7ICdkZXRhaWwnOiBtc2cgfSk7XG4gICAgY29uc29sZS5lcnJvcihlcnJNc2cpO1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1heExlbmd0aChzdHI6IHN0cmluZywgbWF4TGVuOiBudW1iZXIpIHtcbiAgICByZXR1cm4gc3RyLmxlbmd0aCA+IG1heExlbiA/XG4gICAgICAgIHN0ci5zdWJzdHIoMCwgbWF4TGVuIC0gMykgKyBcIi4uLlwiIDpcbiAgICAgICAgc3RyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlUb0xvb2t1cDxUPihhOiBUW10sIGtleUFjY2Vzc29yOiAoaXRlbTogVCkgPT4gc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgY29uc3QgcmVzdWx0IDoge1trZXk6IHN0cmluZ10gOiBUW119ID0ge307XG4gICAgZm9yIChsZXQgaT0wLCBsPWEubGVuZ3RoOyBpPGw7ICsraSkge1xuICAgICAgICBjb25zdCBpdGVtID0gYVtpXTtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5QWNjZXNzb3IoaXRlbSk7XG4gICAgICAgIGxldCBhcnJheSA9IHJlc3VsdFtrZXldO1xuICAgICAgICBpZiAoYXJyYXkpIGFycmF5LnB1c2goaXRlbSk7XG4gICAgICAgIGVsc2UgcmVzdWx0W2tleV0gPSBbaXRlbV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVRvTWFwPFQ+KGE6IFRbXSwga2V5QWNjZXNzb3I6IChpdGVtOiBUKSA9PiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBjb25zdCByZXN1bHQgOiB7W2tleTogc3RyaW5nXSA6IFR9ID0ge307XG4gICAgZm9yIChsZXQgaT0wLCBsPWEubGVuZ3RoOyBpPGw7ICsraSkge1xuICAgICAgICBjb25zdCBpdGVtID0gYVtpXTtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5QWNjZXNzb3IoaXRlbSk7XG4gICAgICAgIHJlc3VsdFtrZXldID0gaXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZXJyeVBpY2tQcm9wczxUPiAob2JqOiBULCBwcm9wc1RvUGljazogc3RyaW5nW10pOiBQYXJ0aWFsPFQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHBhcmFtIG9mIHByb3BzVG9QaWNrKSB7XG4gICAgICBpZiAocGFyYW0gaW4gb2JqKSByZXN1bHRbcGFyYW1dID0gb2JqW3BhcmFtXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdCBhcyBQYXJ0aWFsPFQ+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzdGluY3Q8VD4gKGE6IFRbXSwga2V5QWNjZXNzb3I/OiAoaXRlbTogVCkgPT4gYW55KSB7XG4gICAgY29uc3QgbWFwID0gYXJyYXlUb01hcChhLCBrZXlBY2Nlc3NvciB8fCAoeCA9PiB4KSk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcCkubWFwKGtleSA9PiBtYXBba2V5XSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFsbG93RXF1YWxzKGE6IGFueSwgYjogYW55KSB7XG4gICAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuICAgIGlmICghYSB8fCAhYikgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0eXBlb2YgYSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIGIgIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3Qga2V5c0EgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBjb25zdCBrZXlzQiA9IE9iamVjdC5rZXlzKGIpO1xuICAgIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAobGV0IGk9MCwgbD1rZXlzQS5sZW5ndGg7IGk8bDsgKytpKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNBW2ldO1xuICAgICAgICBpZiAoa2V5c0JbaV0gIT09IGtleSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==