var testpage =
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
/******/ 		"testpage": 0
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
/******/ 	deferredModules.push(["./src/test/testpage.tsx","vendors"]);
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
                            if (!options.from &&
                                !options.to &&
                                (!options.include || !options.include.includes("acl")) &&
                                !options.role &&
                                !options.name &&
                                [options.hasEdgesFrom, options.hasEdgesTo, options.ids, options.tags].filter(function (x) { return !!x; }).length === 1) {
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

/***/ "./src/apis/google-calendar.ts":
/*!*************************************!*\
  !*** ./src/apis/google-calendar.ts ***!
  \*************************************/
/*! exports provided: GoogleCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleCalendar", function() { return GoogleCalendar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _google_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-client */ "./src/apis/google-client.ts");


var GoogleCalendar = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GoogleCalendar, _super);
    function GoogleCalendar(googleTokenProvider) {
        var _this = _super.call(this, { discoveryDocs: 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest' }) || this;
        _this.setBearerProvider(googleTokenProvider);
        return _this;
    }
    GoogleCalendar.prototype.listCalendars = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, gapi.client.calendar.calendarList.list({})];
                    case 3:
                        res = _a.sent();
                        // TODO: What is the normal res.status? 200? Throw if not 200?
                        return [2 /*return*/, res.result.items];
                    case 4:
                        err_1 = _a.sent();
                        // TODO: Parse out error from err (which is an object!)
                        throw err_1.error; // Is this correct? Test!
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    GoogleCalendar.prototype.batchEvents = function (_a) {
        var calendarList = _a.calendarList, timeMin = _a.timeMin, timeMax = _a.timeMax;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var batch_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.ensureInited()];
                    case 1:
                        _b.sent();
                        try {
                            batch_1 = gapi.client.newBatch();
                            calendarList.forEach(function (cal) {
                                batch_1.add(gapi.client.calendar.events.list({
                                    'calendarId': cal.id || 'primary',
                                    'timeMin': timeMin && (new Date(timeMin)).toISOString(),
                                    'timeMax': timeMax && (new Date(timeMax)).toISOString(),
                                    'showDeleted': false,
                                    'singleEvents': true,
                                    'fields': 'items/id,items/start,items/end,items/summary,items/location,items/htmlLink,items/description',
                                    'maxResults': 2500,
                                    'orderBy': 'startTime'
                                }), { 'id': cal.id });
                            });
                            return [2 /*return*/, batch_1.then(function (resp) {
                                    var newCals = {};
                                    for (var i in calendarList) {
                                        var calId = calendarList[i].id;
                                        var events = resp.result[calId].result.items;
                                        newCals[calId] = { calendar: calendarList[i], events: events };
                                    }
                                    return newCals;
                                })];
                        }
                        catch (err) {
                            throw err.error;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return GoogleCalendar;
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

/***/ "./src/apis/ked-learninggoals.ts":
/*!***************************************!*\
  !*** ./src/apis/ked-learninggoals.ts ***!
  \***************************************/
/*! exports provided: getLearningGoalsAndTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLearningGoalsAndTasks", function() { return getLearningGoalsAndTasks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function getLearningGoalsAndTasks(apiPath, pageId) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var res, data;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(apiPath + "?nodeID=" + pageId, { credentials: "same-origin" })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}


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

/***/ "./src/components/calendar/crunch-colliding-events.ts":
/*!************************************************************!*\
  !*** ./src/components/calendar/crunch-colliding-events.ts ***!
  \************************************************************/
/*! exports provided: crunchCollidingEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crunchCollidingEvents", function() { return crunchCollidingEvents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");


function crunchCollidingEvents(events, isLastCall) {
    var result = [];
    events.forEach(function (event, eventIndex) {
        var overlaps = result.filter(function (x) { return x.startMoment && x.endMoment &&
            (x.startMoment <= event.startMoment) &&
            (x.endMoment > event.startMoment); });
        var allOverlaps = overlaps.concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["flatten"])(overlaps.map(function (o) { return o.prevOverlaps; })));
        allOverlaps = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["distinct"])(allOverlaps, function (o) { return o.index; });
        allOverlaps.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["compareProp"])("startMoment"));
        var width; // = Math.round(100 / Math.max((allOverlaps.length + 1), 1));
        var pos = 0;
        allOverlaps.forEach(function (overlap, i) {
            if (i % 4 === 0) {
                width = Math.max(25, Math.round(100 / Math.max(allOverlaps.length - i + 1, 1)));
                pos = 0;
            }
            overlap.width = width;
            overlap.className = (overlap.className || "").split(' ')
                .filter(function (cn) { return cn !== 'splitted'; })
                .concat("splitted")
                .join(' '),
                overlap.pos = pos;
            pos += width;
        });
        result.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event, { index: eventIndex, pos: pos, width: width, className: width < 100 ?
                (event.className ? event.className + " splitted" : "splitted") :
                event.className, prevOverlaps: allOverlaps }));
        /*if (isLastCall && moment(event.start).day() === 1) {
          if (/Sve2/.test(event.text)) {
            debugger;
          }
          if (/Franska/.test(event.text)) {
            debugger;
          }
          if (/Tyska/.test(event.text)) {
            debugger;
          }
          if (/spansk/.test(event.text)) debugger;
          if (/Eng6/.test(event.text)) debugger;
        }*/
    });
    return result;
}


/***/ }),

/***/ "./src/components/calendar/day-view-event.tsx":
/*!****************************************************!*\
  !*** ./src/components/calendar/day-view-event.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DayViewEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");





function DayViewEvent(_a) {
    var id = _a.id, dayStart = _a.dayStart, startMoment = _a.startMoment, endMoment = _a.endMoment, text = _a.text, location = _a.location, description = _a.description, width = _a.width, pos = _a.pos, locale = _a.locale, zoom = _a.zoom, htmlLink = _a.htmlLink, className = _a.className;
    var top = (moment__WEBPACK_IMPORTED_MODULE_2___default()(startMoment).diff(dayStart) / _utils_constants__WEBPACK_IMPORTED_MODULE_3__["MINUTE"]) * zoom;
    var height = (moment__WEBPACK_IMPORTED_MODULE_2___default()(endMoment).diff(startMoment) / _utils_constants__WEBPACK_IMPORTED_MODULE_3__["MINUTE"]) * zoom;
    var localeTimeOptions = { hour: 'numeric', minute: '2-digit' };
    var localeStartTime = startMoment.toDate().toLocaleTimeString(locale, localeTimeOptions);
    var localeEndTime = endMoment.toDate().toLocaleTimeString(locale, localeTimeOptions);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "dayviewevent " + className, style: {
            position: 'absolute',
            boxSizing: 'border-box',
            top: top,
            left: (pos || 0) + "%",
            width: (width || 100) + '%',
            height: height,
            maxHeight: height,
            overflow: 'hidden'
        }, title: localeStartTime + " - " + localeEndTime + " " + text +
            (location ?
                "\n" + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Plats: ", ""], ["Plats: ", ""])), location) :
                "") +
            (description ?
                "\n" + description :
                "") },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "event-title", href: htmlLink, target: "calendar-event" }, text),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "event-period" },
            localeStartTime,
            " - ",
            localeEndTime),
        location &&
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "event-location" }, location),
        description &&
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "event-description" }, description));
}
var templateObject_1;


/***/ }),

/***/ "./src/components/calendar/day-view.tsx":
/*!**********************************************!*\
  !*** ./src/components/calendar/day-view.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DayView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _day_view_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./day-view-event */ "./src/components/calendar/day-view-event.tsx");
/* harmony import */ var _time_lines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time-lines */ "./src/components/calendar/time-lines.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _crunch_colliding_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crunch-colliding-events */ "./src/components/calendar/crunch-colliding-events.ts");






function DayView(_a) {
    var dayStart = _a.dayStart, // Milliseconds at start of the day (for example 08:00 the day)
    dayEnd = _a.dayEnd, // Milliseconds at end of the day (for example 17:00 the day)
    events = _a.events, // Events to show
    locale = _a.locale, zoom = _a.zoom, isLastCall = _a.isLastCall;
    var height = (moment__WEBPACK_IMPORTED_MODULE_1___default()(dayEnd).diff(dayStart) / _utils_constants__WEBPACK_IMPORTED_MODULE_4__["MINUTE"]) * zoom;
    var crunchedEvents = Object(_crunch_colliding_events__WEBPACK_IMPORTED_MODULE_5__["crunchCollidingEvents"])(events, isLastCall);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dayview", style: {
            top: 0,
            height: height,
            maxHeight: height,
            position: 'relative',
            overflow: 'hidden'
        } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_time_lines__WEBPACK_IMPORTED_MODULE_3__["default"], { dayStart: dayStart, dayEnd: dayEnd, zoom: zoom }),
        crunchedEvents.map(function (ev) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_day_view_event__WEBPACK_IMPORTED_MODULE_2__["default"], { key: ev.id, id: ev.id, className: ev.className, dayStart: dayStart, startMoment: ev.startMoment, endMoment: ev.endMoment, text: ev.text, location: ev.location, description: ev.description, width: ev.width, pos: ev.pos, locale: locale, zoom: zoom, htmlLink: ev.htmlLink }); })));
}


/***/ }),

/***/ "./src/components/calendar/hour-marker.tsx":
/*!*************************************************!*\
  !*** ./src/components/calendar/hour-marker.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HourMarker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


function HourMarker(_a) {
    var startHour = _a.startHour, endHour = _a.endHour, locale = _a.locale, zoom = _a.zoom;
    var hourPixels = 60 * zoom;
    var hours = [];
    for (var hour = startHour; hour <= endHour; ++hour) {
        hours.push(hour);
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "hourmarker", style: {
            position: 'relative',
            left: 0,
            top: 0,
            overflow: 'visible',
            height: (endHour - startHour) * hourPixels
        } }, hours.map(function (hour, i) {
        var ypos = i * hourPixels;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { key: hour },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: {
                    position: 'absolute',
                    left: 0,
                    top: ypos,
                    marginTop: '-4px',
                    padding: 0
                } }, moment__WEBPACK_IMPORTED_MODULE_1___default()().hour(hour).minute(0).toDate().toLocaleString(locale, { hour: "2-digit", minute: "2-digit" })));
    }));
}


/***/ }),

/***/ "./src/components/calendar/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/calendar/index.tsx ***!
  \*******************************************/
/*! exports provided: Calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _week_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./week-view */ "./src/components/calendar/week-view.tsx");
/* harmony import */ var _apis_google_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apis/google-calendar */ "./src/apis/google-calendar.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _course_name_to_css_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-name-to-css-class */ "./src/components/calendar/course-name-to-css-class.ts");
/* harmony import */ var _should_include_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./should-include-calendar */ "./src/components/calendar/should-include-calendar.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");










var Calendar = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Calendar, _super);
    function Calendar(props) {
        var _this = _super.call(this, props) || this;
        // Props
        var firstDay = props.firstDay;
        if (typeof firstDay === 'string' || typeof firstDay === 'number') {
            firstDay = moment__WEBPACK_IMPORTED_MODULE_4___default()().startOf('week').weekday(firstDay);
        }
        var _a = _this.props, initialStartHour = _a.initialStartHour, initialEndHour = _a.initialEndHour, initialZoom = _a.initialZoom;
        // State
        _this.state = {
            firstDay: firstDay,
            startHour: initialStartHour,
            endHour: initialEndHour,
            zoom: initialZoom,
            calendars: {},
            calendarsBeingLoaded: [],
            status: 'Loading calendars... (authenticating...)',
            error: null
        };
        var googleTokenProvider = (props.env || _globals_KED_env__WEBPACK_IMPORTED_MODULE_8__["default"]).googleTokenProvider;
        _this.gcal = new _apis_google_calendar__WEBPACK_IMPORTED_MODULE_3__["GoogleCalendar"](googleTokenProvider);
        // Start calling on Google API right away. Store promise in property.
        _this.gcal.ensureInited().then(function () {
            return _this.loadData(firstDay);
        }).catch(function (error) {
            _this.handleError(error);
        });
        return _this;
    }
    Calendar.prototype.handleError = function (error) {
        if (!error)
            error = "Unknown error";
        this.setState({ error: error });
        console.error(error.stack || error); // Keep!
    };
    Calendar.prototype.loadData = function (firstDay) {
        var _this = this;
        // Props
        var numDays = this.props.numDays;
        var intl = this.context.intl;
        this.setState({
            firstDay: firstDay,
            calendars: {},
            calendarsBeingLoaded: [],
            error: null,
            status: intl.formatMessage({ id: "calendar.loadingCalendar", defaultMessage: "Loading calendars... (listing...)" })
        });
        // Important to return the Promise so that caller will catch any error.
        return this.gcal.listCalendars().then(function (calendars) {
            // Ignore the "week numbers" calendar as we already include week numbers in our view
            calendars = calendars.filter(function (cal) { return Object(_should_include_calendar__WEBPACK_IMPORTED_MODULE_7__["shouldIncludeCalendar"])(cal); });
            //!/Week Numbers/ig.test(c.summary)
            //console.log(calendars.map(c => ({bgColor: c.backgroundColor, primary: c.primary, summary: c.summary, x: c})));
            // Calendars Successfully listed.
            _this.setState({
                status: intl.formatMessage({ id: "calendar.loadCalendarEvents", defaultMessage: "Load calendar events..." })
            });
            _this.gcal.batchEvents({
                calendarList: calendars,
                timeMin: moment__WEBPACK_IMPORTED_MODULE_4___default()(firstDay).startOf('day'),
                timeMax: moment__WEBPACK_IMPORTED_MODULE_4___default()(firstDay).add(numDays, 'days').endOf('day')
            }).then(function (result) {
                _this.setState({ calendars: result, status: '' });
            });
        });
    };
    Calendar.prototype.navigateToPreviousWeek = function () {
        var _this = this;
        this.loadData(moment__WEBPACK_IMPORTED_MODULE_4___default()(this.state.firstDay).add(-1, "week")).catch(function (error) {
            _this.handleError(error);
        });
    };
    Calendar.prototype.navigateToNextWeek = function () {
        var _this = this;
        this.loadData(moment__WEBPACK_IMPORTED_MODULE_4___default()(this.state.firstDay).add(1, "week")).catch(function (error) {
            _this.handleError(error);
        });
    };
    Calendar.prototype.render = function () {
        var _this = this;
        // Props
        var numDays = this.props.numDays;
        var intl = this.context.intl;
        // State
        var _a = this.state, firstDay = _a.firstDay, startHour = _a.startHour, endHour = _a.endHour, zoom = _a.zoom, calendars = _a.calendars, status = _a.status, error = _a.error;
        var eventSets = Object.keys(calendars)
            .map(function (calendarId) { return calendars[calendarId]; })
            .map(function (_a) {
            var calendar = _a.calendar, events = _a.events;
            var isSchedule = calendar.summary === 'Skolschema' && calendar.description === "Synchronized";
            var isHoliday = /holiday/.test(calendar.id);
            var isClassRoom = /classroom/.test(calendar.id);
            var classNames = [];
            if (calendar.colorId)
                classNames.push("gcal-palette-" + calendar.colorId);
            if (isSchedule)
                classNames.push("course-event");
            if (isHoliday)
                classNames.push("holiday-event");
            // Map Google Calendar events to our own format:
            return events.map(function (event) { return ({
                id: event.id,
                start: event.start,
                end: event.end,
                text: event.summary,
                location: event.location,
                description: event.description,
                //bgColor: calendar.backgroundColor,
                //fgColor: calendar.foregroundColor,
                htmlLink: event.htmlLink,
                className: (isSchedule && event.summary ?
                    classNames.concat(Object(_course_name_to_css_class__WEBPACK_IMPORTED_MODULE_6__["courseNameToCssClass"])('course-event-', event.summary)) :
                    classNames).join(" ")
            }); });
        });
        var events = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["flatten"])(eventSets);
        // Else, render the WeekView now. Any error should be displayed as red status
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { position: 'relative', top: 0, left: 0 } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn-toolbar week-navigation" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn-group" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn", onClick: function () { return _this.navigateToPreviousWeek(); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-angle-left", "aria-hidden": "true" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn", onClick: function () { return _this.navigateToNextWeek(); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-angle-right", "aria-hidden": "true" }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn-group" }, intl.formatMessage({ id: "calendar.currentDate", defaultMessage: "Vecka {week}, {year}" }, { week: moment__WEBPACK_IMPORTED_MODULE_4___default()(firstDay).week(), year: moment__WEBPACK_IMPORTED_MODULE_4___default()(firstDay).year() }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_week_view__WEBPACK_IMPORTED_MODULE_2__["default"], { locale: intl.locale, firstDay: firstDay, startHour: startHour, endHour: endHour, numDays: numDays, zoom: zoom, events: events, status: status, error: error }));
    };
    Calendar.contextType = _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_9__["LanguageContext"];
    return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/calendar/should-include-calendar.ts":
/*!************************************************************!*\
  !*** ./src/components/calendar/should-include-calendar.ts ***!
  \************************************************************/
/*! exports provided: shouldIncludeCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldIncludeCalendar", function() { return shouldIncludeCalendar; });
/* Calendars to show:

    summary: "Matsedel",
    summary: "Skolschema",
    primary: true
    id.includes('classroom')
    id.includes('holiday')
*/
function shouldIncludeCalendar(cal) {
    var summary = cal.summary || "";
    var isOwner = /owner/ig.test(cal.accessRole);
    var isPrimary = !!cal.primary;
    var isClassroomCalendar = /classroom/ig.test(cal.id);
    var isHolidayCalendar = /holiday/ig.test(cal.id);
    return (isPrimary ||
        isClassroomCalendar ||
        isHolidayCalendar ||
        ///matsedel/ig.test(summary) ||
        (/schema/ig.test(summary) && isOwner));
}


/***/ }),

/***/ "./src/components/calendar/status-bar.tsx":
/*!************************************************!*\
  !*** ./src/components/calendar/status-bar.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatusBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function StatusBar(_a) {
    var status = _a.status, error = _a.error;
    if (!status && !error)
        return null;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "statusbar" }, error ?
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "error" }, '' + error) :
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: "status" }, status));
}


/***/ }),

/***/ "./src/components/calendar/time-lines.tsx":
/*!************************************************!*\
  !*** ./src/components/calendar/time-lines.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeLines; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


function TimeLines(_a) {
    var dayStart = _a.dayStart, dayEnd = _a.dayEnd, zoom = _a.zoom;
    var hourPixels = 60 * zoom;
    var startHour = moment__WEBPACK_IMPORTED_MODULE_1___default()(dayStart).hour();
    var endHour = moment__WEBPACK_IMPORTED_MODULE_1___default()(dayEnd).hour();
    var hours = [];
    for (var hour = startHour; hour <= endHour; ++hour) {
        hours.push(hour);
    }
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, hours.map(function (hour) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: hour, className: "timeline", style: {
                width: '100%',
                boxSizing: 'border-box',
                margin: hourPixels / 2 + "px 0 0 0",
                height: hourPixels / 2
            } });
    }));
}


/***/ }),

/***/ "./src/components/calendar/week-view.tsx":
/*!***********************************************!*\
  !*** ./src/components/calendar/week-view.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _day_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./day-view */ "./src/components/calendar/day-view.tsx");
/* harmony import */ var _hour_marker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hour-marker */ "./src/components/calendar/hour-marker.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _status_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status-bar */ "./src/components/calendar/status-bar.tsx");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");








var WeekView = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WeekView, _super);
    function WeekView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WeekView.prototype.render = function () {
        // Props:
        var _a = this.props, firstDay = _a.firstDay, // {moment} The day to start with (normally a monday)
        startHour = _a.startHour, // {number} The hour to start on
        endHour = _a.endHour, // {number} The hour to end rendering per day
        numDays = _a.numDays, // {number} Number of days, normally 5.
        events = _a.events, // Array of events to display in the week.
        locale = _a.locale, // Locale to use for showing week days and hour marks.
        zoom = _a.zoom, // {number} Zoom where 1 means that 1 minute = 1 pixel.  
        status = _a.status, error = _a.error;
        var intl = this.context.intl;
        // Prepare DayView datas 
        var dayDatas = [];
        var day = moment__WEBPACK_IMPORTED_MODULE_2___default()(firstDay);
        var _loop_1 = function (i) {
            var dayStart = moment__WEBPACK_IMPORTED_MODULE_2___default()(day).hour(startHour);
            var dayEnd = moment__WEBPACK_IMPORTED_MODULE_2___default()(day).hour(endHour);
            var dayDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(day).format('yyyy-MM-DD');
            var isToday = moment__WEBPACK_IMPORTED_MODULE_2___default()(dayStart).startOf("day").valueOf() === moment__WEBPACK_IMPORTED_MODULE_2___default()().startOf("day").valueOf();
            dayDatas.push({
                name: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["capitalizeFirst"])(dayStart.toDate().toLocaleString(locale, {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'short'
                })),
                dayStart: dayStart,
                dayEnd: dayEnd,
                isToday: isToday,
                events: events.filter(function (event) {
                    return event.start && event.end && event.start.dateTime && event.end.dateTime &&
                        (moment__WEBPACK_IMPORTED_MODULE_2___default()(event.start.dateTime).isBetween(dayStart, dayEnd) ||
                            moment__WEBPACK_IMPORTED_MODULE_2___default()(event.end.dateTime).isBetween(dayStart, dayEnd));
                })
                    // Change start / end to directly point to the dateTime
                    .map(function (event) { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["clone"])(event, { startMoment: moment__WEBPACK_IMPORTED_MODULE_2___default()(event.start.dateTime), endMoment: moment__WEBPACK_IMPORTED_MODULE_2___default()(event.end.dateTime) }); })
                    .sort(function (a, b) { return a.startMoment.valueOf > b.startMoment.valueOf ? 1 : a.startMoment < b.startMoment ? -1 : 0; }),
                fullDayEvents: events.filter(function (event) {
                    // Verify that it is a full-day-event
                    return event.start && event.end && event.start.date && event.end.date &&
                        // Verify it applies to current day
                        (event.start.date <= dayDate && event.end.date > dayDate);
                })
                    // Change start / end to directly point to the date object
                    .map(function (event) { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_5__["clone"])(event, {
                    startDate: event.start.date,
                    endDate: event.end.date
                }); })
            });
            day = moment__WEBPACK_IMPORTED_MODULE_2___default()(day) // clone it
                .add(1, 'days'); // Add another day
        };
        for (var i = 0; i < numDays; ++i) {
            _loop_1(i);
        }
        // Render
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "vemendo-weekview" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { style: { border: 0 } }),
                        dayDatas.map(function (d) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: d.dayStart.toISOString(), className: d.isToday ? "today" : null },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "dayname" }, d.name)); })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { style: { border: 0 } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "week-number" }, intl.formatMessage({ id: "calendar.weekNumber", defaultMessage: "V{weekNumber}" }, { weekNumber: moment__WEBPACK_IMPORTED_MODULE_2___default()(firstDay).week() }))),
                        dayDatas.map(function (day) {
                            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: day.dayStart.toISOString(), className: day.isToday ? "today" : null }, day.fullDayEvents.map(function (_a) {
                                var id = _a.id, text = _a.text, location = _a.location, description = _a.description, htmlLink = _a.htmlLink, className = _a.className;
                                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: id, className: "dayviewevent full-day " + className, title: "" + text + (location ?
                                        "\n" + intl.formatMessage({ id: "calendar.fullDayEventLocation", defaultMessage: "Plats: {location}" }, { location: location }) :
                                        "") +
                                        (description ?
                                            "\n" + description :
                                            "") },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "event-title", href: htmlLink, target: "calendar-event" }, text),
                                    location &&
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "event-location" }, location),
                                    description &&
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "event-description" }, description));
                            }));
                        })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { style: { border: 0 } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_hour_marker__WEBPACK_IMPORTED_MODULE_4__["default"], { startHour: startHour, endHour: endHour, locale: locale, zoom: zoom })),
                        dayDatas.map(function (day) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: day.dayStart.toISOString(), className: day.isToday ? "today" : null },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_day_view__WEBPACK_IMPORTED_MODULE_3__["default"], { key: day.dayStart.toISOString(), dayStart: day.dayStart, dayEnd: day.dayEnd, events: day.events, locale: locale, zoom: zoom, isLastCall: status == '' }),
                            " "); })),
                    (status || error) && (!error || error.name !== "UnauthorizedError") &&
                        //
                        // Show status / error
                        //
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { style: { border: 0 } }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { style: { border: 0 }, colSpan: numDays },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_status_bar__WEBPACK_IMPORTED_MODULE_6__["default"], { status: status, error: error }))))));
    };
    WeekView.contextType = _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_7__["LanguageContext"];
    return WeekView;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (WeekView);


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

/***/ "./src/components/charts/doughnut.tsx":
/*!********************************************!*\
  !*** ./src/components/charts/doughnut.tsx ***!
  \********************************************/
/*! exports provided: Doughnut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doughnut", function() { return Doughnut; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Doughnut = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Doughnut, _super);
    function Doughnut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Doughnut.prototype.render = function () {
        var _a = this.props, percentage = _a.percentage, errorMessage = _a.errorMessage, backgroundColor = _a.backgroundColor, progressColor = _a.progressColor;
        //default values
        var stroke = 2;
        //equals with he circumference/2II
        var radius = 100 / (2 * 3.14);
        //take into account the stroke
        var center = radius + stroke;
        var viewboxW = center * 2;
        var viewvboxH = center * 2;
        var roundedPercentage = Math.round(percentage);
        var startErrorText = 10;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("svg", { className: "doughnut-chart", viewBox: "0 0 " + viewboxW + " " + viewvboxH, width: "100%", height: "100%" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("circle", { className: "circle-chart-background", stroke: backgroundColor, strokeWidth: stroke + 1, fill: "none", cx: center, cy: center, r: radius }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("circle", { className: "circle-chart-circle", stroke: progressColor, ref: "progressCircle", strokeWidth: stroke, style: { strokeDasharray: roundedPercentage + ", 100" }, strokeLinecap: "round", fill: "none", cx: center, cy: center, r: radius }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("g", { className: "circle-chart-info" }, !errorMessage ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("text", { className: "circle-chart-percent", x: center, y: center, alignmentBaseline: "central", textAnchor: "middle" }, roundedPercentage + "%") :
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("text", { className: "circle-chart-percent-error", x: center, y: center, alignmentBaseline: "central", fontSize: "5", textAnchor: "middle" }, errorMessage.split(' ').map(function (element) {
                    var tspan = react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tspan", { key: element, x: center, y: startErrorText }, element);
                    startErrorText += 5;
                    return tspan;
                })))));
    };
    Doughnut.defaultProps = {
        backgroundColor: "#efefef",
        progressColor: "#3dbca2",
        errorMessage: null
    };
    return Doughnut;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



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
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-spinner fa-spin", "aria-hidden": "true" }),
        "\u00A0",
        label);
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
                                // Additional ACL: Let employees on same school have read access to it.
                                // This currently only applies to tasks that refer to course tasks (not custom tasks!)
                                new kedbackend_client__WEBPACK_IMPORTED_MODULE_4__["DocumentAccess"]("schoolRole", _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].currentUser.school + "/EMPLOYEE", "R")
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

/***/ "./src/components/kg-termplanner/kg-termplanner-self.tsx":
/*!***************************************************************!*\
  !*** ./src/components/kg-termplanner/kg-termplanner-self.tsx ***!
  \***************************************************************/
/*! exports provided: KGTermPlannerSelf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KGTermPlannerSelf", function() { return KGTermPlannerSelf; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kg_termplanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kg-termplanner */ "./src/components/kg-termplanner/kg-termplanner.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");



function KGTermPlannerSelf() {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kg_termplanner__WEBPACK_IMPORTED_MODULE_1__["KGTermPlanner"], { env: _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"], tutored: false });
}


/***/ }),

/***/ "./src/components/kg-termplanner/kg-termplanner-tutored.tsx":
/*!******************************************************************!*\
  !*** ./src/components/kg-termplanner/kg-termplanner-tutored.tsx ***!
  \******************************************************************/
/*! exports provided: KGTermPlannerTutored */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KGTermPlannerTutored", function() { return KGTermPlannerTutored; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kg_termplanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kg-termplanner */ "./src/components/kg-termplanner/kg-termplanner.tsx");
/* harmony import */ var _utility_components_tutorable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility-components/tutorable-component */ "./src/components/utility-components/tutorable-component.tsx");



function KGTermPlannerTutored() {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utility_components_tutorable_component__WEBPACK_IMPORTED_MODULE_2__["TutorableComponent"], { tutored: true, createComponent: function (env) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_kg_termplanner__WEBPACK_IMPORTED_MODULE_1__["KGTermPlanner"], { key: env.currentUser.mail, env: env, tutored: true });
        } });
}


/***/ }),

/***/ "./src/components/kg-termplanner/kg-termplanner.tsx":
/*!**********************************************************!*\
  !*** ./src/components/kg-termplanner/kg-termplanner.tsx ***!
  \**********************************************************/
/*! exports provided: KGTermPlanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KGTermPlanner", function() { return KGTermPlanner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apis_edsclient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apis/edsclient */ "./src/apis/edsclient.ts");
/* harmony import */ var _utils_school_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/school-moment */ "./src/utils/school-moment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _utility_components_dialogs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility-components/dialogs */ "./src/components/utility-components/dialogs.tsx");
/* harmony import */ var _week_note_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./week-note-dialog */ "./src/components/kg-termplanner/week-note-dialog.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils_weekutil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/weekutil */ "./src/utils/weekutil.ts");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _ks_termplanner_tutor_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ks-termplanner/tutor-dialog */ "./src/components/ks-termplanner/tutor-dialog.tsx");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../features */ "./src/features/index.ts");













var KGTermPlanner = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](KGTermPlanner, _super);
    function KGTermPlanner(props) {
        var _this = _super.call(this, props) || this;
        var now = new Date();
        _this.state = {
            now: now,
            courses: [],
            weekPlans: [],
            isLoadingCourses: true,
            isLoadingWeekPlans: true,
            dialogs: []
            //goals: []
        };
        _this.updateWeekPlans = _this.updateWeekPlans.bind(_this);
        return _this;
    }
    KGTermPlanner.prototype.componentDidMount = function () {
        this.loadEDSCourses();
        this.props.env.kgTermPlannerRepo.mem.subscribe(this.updateWeekPlans);
    };
    KGTermPlanner.prototype.componentWillUnmount = function () {
        this.props.env.kgTermPlannerRepo.mem.unsubscribe(this.updateWeekPlans);
    };
    KGTermPlanner.prototype.updateWeekPlans = function (weekPlans) {
        this.setState({ weekPlans: weekPlans, isLoadingWeekPlans: false });
    };
    KGTermPlanner.prototype.loadEDSCourses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var schoolMoment, periodName, courses, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, , 2, 3]);
                        schoolMoment = Object(_utils_school_moment__WEBPACK_IMPORTED_MODULE_3__["getSchoolMoment"])(moment__WEBPACK_IMPORTED_MODULE_4___default()(this.state.now));
                        periodName = new _apis_edsclient__WEBPACK_IMPORTED_MODULE_2__["EDSPeriod"](schoolMoment).period;
                        _a = _utils_utils__WEBPACK_IMPORTED_MODULE_8__["distinct"];
                        return [4 /*yield*/, this.props.env.edsClient.getActiveCourses({ periodName: periodName })];
                    case 1:
                        courses = _a.apply(void 0, [_b.sent(), function (course) { return course.name; }]);
                        //console.log("courses:" + JSON.stringify(courses, null, 2));
                        this.setState({ courses: courses });
                        return [3 /*break*/, 3];
                    case 2:
                        this.setState({ isLoadingCourses: false });
                        return [7 /*endfinally*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    KGTermPlanner.prototype.onNoteClick = function (weekNumber, weekDate, courseName, weekPlan, note) {
        var _this = this;
        this.openDialog(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_week_note_dialog__WEBPACK_IMPORTED_MODULE_7__["WeekNoteDialog"], { weekNumber: weekNumber, weekDate: weekDate, courseName: courseName, weekPlan: weekPlan, note: note, env: this.props.env, closeDialog: function () { return _this.closeDialog(); } }));
    };
    /**
   *
   * @param weekNumber
   * @param comment
   *
   * Add a comment from tutor
   */
    KGTermPlanner.prototype.onTutorClick = function (tutorNote, weekNumber) {
        var _this = this;
        this.openDialog(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ks_termplanner_tutor_dialog__WEBPACK_IMPORTED_MODULE_11__["TutorDialog"], { weekNumber: weekNumber, comment: tutorNote.value, updateData: function (newValue) { return _this.updateTutorNoteField(tutorNote, newValue); }, deleteNoteData: function () { return _this.deleteTutorNoteField(tutorNote.id); }, closeDialog: function () { return _this.closeDialog(); } }));
    };
    KGTermPlanner.prototype.deleteTutorNoteField = function (noteId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var showError_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.props.env.kgTermPlannerRepo.delete([noteId])];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        showError_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    KGTermPlanner.prototype.updateTutorNoteField = function (tutorNote, newValue) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var oldValue, showError_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldValue = (tutorNote && tutorNote.value) || "";
                        if (oldValue === newValue)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        tutorNote.value = newValue;
                        //set document ACL
                        tutorNote.acl = [
                            new kedbackend_client__WEBPACK_IMPORTED_MODULE_10__["DocumentAccess"]("tutorFor", this.props.env.currentUser.mail, "S").toString(),
                            new kedbackend_client__WEBPACK_IMPORTED_MODULE_10__["DocumentAccess"]("email", this.props.env.currentUser.mail, "R").toString(),
                        ];
                        return [4 /*yield*/, this.props.env.kgTermPlannerRepo.upsert(tutorNote, function (note) { return note.value = newValue; })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        showError_2 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    KGTermPlanner.prototype.openDialog = function (dialog) {
        this.setState({ dialogs: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.state.dialogs, [dialog]) });
    };
    KGTermPlanner.prototype.closeDialog = function () {
        this.setState({ dialogs: this.state.dialogs.slice(0, this.state.dialogs.length - 1) });
    };
    KGTermPlanner.prototype.render = function () {
        var _this = this;
        var _a = this.state, courses = _a.courses, now = _a.now, isLoadingCourses = _a.isLoadingCourses, isLoadingWeekPlans = _a.isLoadingWeekPlans, weekPlans = _a.weekPlans, dialogs = _a.dialogs;
        var isLoading = isLoadingCourses || isLoadingWeekPlans;
        var weeks = [];
        var tutorNotes = [];
        var schoolMoment = Object(_utils_school_moment__WEBPACK_IMPORTED_MODULE_3__["getSchoolMoment"])(moment__WEBPACK_IMPORTED_MODULE_4___default()(now));
        var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Object(_utils_school_moment__WEBPACK_IMPORTED_MODULE_3__["getTermStarEndDate"])(now, schoolMoment.term === 'AT'), 2), termStart = _b[0], termEnd = _b[1];
        var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Object(_utils_school_moment__WEBPACK_IMPORTED_MODULE_3__["getFirstAndLastWeekOfTerm"])(schoolMoment.term), 2), firstWeek = _c[0], lastWeek = _c[1];
        var showKgTutorCommentField = _features__WEBPACK_IMPORTED_MODULE_12__["features"].kgTutorComment;
        var currentWeekPlans = weekPlans.filter(function (x) { return !x.type; });
        var currentTutorNotes = weekPlans.filter(function (x) { return x.type === 'tutor-note'; });
        var _loop_1 = function (weekMoment) {
            var weekNumber = weekMoment.week();
            var weekYear = weekMoment.year();
            var kedWeek = Object(_utils_weekutil__WEBPACK_IMPORTED_MODULE_9__["KEDWeek"])(weekYear, weekNumber);
            if (weekNumber >= firstWeek && weekNumber <= lastWeek) {
                var weekPlan = currentWeekPlans.filter(function (wp) {
                    return wp.dateTime >= kedWeek.notBefore &&
                        wp.dateTime <= kedWeek.notAfter;
                })[0];
                var tutorNote = currentTutorNotes.filter(function (wp) {
                    return wp.dateTime >= kedWeek.notBefore &&
                        wp.dateTime <= kedWeek.notAfter;
                })[0];
                var startOfWeek = weekMoment.clone().startOf('week').valueOf();
                weeks.push({
                    weekNumber: weekNumber,
                    weekDate: startOfWeek,
                    weekPlan: weekPlan
                });
                tutorNotes.push({
                    weekNumber: weekNumber,
                    tutorValue: tutorNote || { value: '', dateTime: startOfWeek, id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_10__["createUUID"])(), type: 'tutor-note' }
                });
            }
        };
        for (var weekMoment = termStart.clone(); weekMoment.valueOf() < termEnd.valueOf(); weekMoment = weekMoment.clone().add(1, 'week').startOf('week')) {
            _loop_1(weekMoment);
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, "Terminsplanering"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
            isLoading ?
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_5__["Spinner"], null) : courses.length === 0 ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, "Terminsplaneraren aktiveras n\u00E4r du skrivits in p\u00E5 dina kurser") :
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "termplanner-table zebra" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Vecka"),
                            courses.map(function (c, idx) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: idx, className: "kgCourseHeader" }, c.name); }),
                            showKgTutorCommentField && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: "tutorHeader" }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, weeks.map(function (w, idx) {
                        var isCurrentWeek = w.weekNumber === moment__WEBPACK_IMPORTED_MODULE_4___default()().week();
                        var noteValue = tutorNotes && tutorNotes.find(function (tn) { return tn.weekNumber === w.weekNumber; });
                        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: idx, className: isCurrentWeek ? "currentWeek" : "" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, w.weekNumber),
                            courses.map(function (c, idx) {
                                var note = w.weekPlan && w.weekPlan.plans[c.name];
                                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: idx, className: note ? "courseNote note-color-" + note.color : "courseNote", "data-tooltip": note && note.description, title: note && note.description, onClick: function () { return _this.onNoteClick(w.weekNumber, w.weekDate, c.name, w.weekPlan, note); } }, note ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-align-center" }) : '');
                            }),
                            showKgTutorCommentField && (_this.props.tutored ?
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: idx, onClick: function () { return _this.onTutorClick(noteValue.tutorValue, w.weekNumber); }, className: "tutorCell" }, noteValue.tutorValue.value ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: idx, "data-tooltip": noteValue.tutorValue.value },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-comment-dots" })) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: idx },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-comment-medical" })))
                                :
                                    noteValue.tutorValue.value ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "tutorCell" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-tooltip": noteValue.tutorValue.value },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "far fa-comment-dots" }))) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null)));
                    })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tfoot", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: "points" }, "Po\u00E4ng"),
                            courses.map(function (c, idx) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: idx, className: "stepCell" }, c.credits); })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Betygsm\u00E5l"),
                            courses.map(function (c, idx) {
                                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: idx, className: "stepCell" }, c.periodGoalGrade);
                            })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_dialogs__WEBPACK_IMPORTED_MODULE_6__["Dialogs"], { dialogs: dialogs, popDialog: function () { return _this.setState({ dialogs: dialogs.slice(0, dialogs.length - 1) }); } }));
    };
    return KGTermPlanner;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/kg-termplanner/week-note-dialog.tsx":
/*!************************************************************!*\
  !*** ./src/components/kg-termplanner/week-note-dialog.tsx ***!
  \************************************************************/
/*! exports provided: WeekNoteDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekNoteDialog", function() { return WeekNoteDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");



var WeekNoteDialog = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WeekNoteDialog, _super);
    function WeekNoteDialog(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            description: props.note ? props.note.description : '',
            color: props.note ? props.note.color : 'yellow'
        };
        return _this;
    }
    WeekNoteDialog.prototype.delete = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, weekNumber, weekDate, courseName, weekPlan, note, closeDialog, env, _b, description, color;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, weekNumber = _a.weekNumber, weekDate = _a.weekDate, courseName = _a.courseName, weekPlan = _a.weekPlan, note = _a.note, closeDialog = _a.closeDialog, env = _a.env;
                        _b = this.state, description = _b.description, color = _b.color;
                        closeDialog();
                        if (!(Object.keys(weekPlan.plans).length === 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, env.kgTermPlannerRepo.delete([weekPlan.id])];
                    case 1:
                        _c.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, env.kgTermPlannerRepo.update([weekPlan], function (wp) {
                            delete wp.plans[courseName];
                        })];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WeekNoteDialog.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, weekNumber, weekDate, courseName, weekPlan, note, closeDialog, env, _b, description, color, plans;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, weekNumber = _a.weekNumber, weekDate = _a.weekDate, courseName = _a.courseName, weekPlan = _a.weekPlan, note = _a.note, closeDialog = _a.closeDialog, env = _a.env;
                        _b = this.state, description = _b.description, color = _b.color;
                        closeDialog();
                        if (description.length == 0) {
                            return [2 /*return*/];
                        }
                        if (!weekPlan) return [3 /*break*/, 2];
                        return [4 /*yield*/, env.kgTermPlannerRepo.update([weekPlan], function (wp) { return wp.plans[courseName] = { description: description, color: color }; })];
                    case 1:
                        _c.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        plans = {};
                        plans[courseName] = { description: description, color: color };
                        return [4 /*yield*/, env.kgTermPlannerRepo.insert([{
                                    id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_2__["createUUID"])(),
                                    dateTime: weekDate,
                                    plans: plans
                                }])];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WeekNoteDialog.prototype.render = function () {
        var _this = this;
        var _a = this.props, weekNumber = _a.weekNumber, courseName = _a.courseName, weekPlan = _a.weekPlan, note = _a.note, env = _a.env;
        var _b = this.state, description = _b.description, color = _b.color;
        var readOnly = env.tutored;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null,
                    "H\u00E4ndelse f\u00F6r vecka ",
                    weekNumber,
                    " och ",
                    courseName),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-table" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, "Beskrivning:"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "fullWidth" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { autoFocus: true, value: description, disabled: readOnly, onChange: function (ev) { return _this.setState({ description: ev.target.value }); } }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-table" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, "F\u00E4rg:"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { value: color, disabled: readOnly, onChange: function (ev) { return _this.setState({ color: ev.target.value }); } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "yellow" }, "Gul"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "yellowLight" }, "Ljusgul"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "cyan" }, "Gr\u00F6n"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "cyanLight" }, "Ljusgr\u00F6n"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "purple" }, "Lila"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "purpleLight" }, "Ljuslila"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "red" }, "R\u00F6d"),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "redLight" }, "Rosa"))))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, readOnly ?
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { tabIndex: 1, className: "btn btn-large btn-default", onClick: function () { return _this.props.closeDialog(); } }, "Avbryt") :
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { tabIndex: 1, className: "btn btn-large btn-default", onClick: function () { return _this.save(); } }, "Spara"),
                    note && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { tabIndex: 1, className: "btn btn-warning btn-large pull-right", onClick: function () { return _this.delete(); } }, "Ta bort"))));
    };
    return WeekNoteDialog;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/ks-goals/future-abilities-table.tsx":
/*!************************************************************!*\
  !*** ./src/components/ks-goals/future-abilities-table.tsx ***!
  \************************************************************/
/*! exports provided: FutureAbilitiesTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FutureAbilitiesTable", function() { return FutureAbilitiesTable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _future_abilities_viewmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./future-abilities-viewmodel */ "./src/components/ks-goals/future-abilities-viewmodel.ts");




var FutureAbilitiesTable = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FutureAbilitiesTable, _super);
    function FutureAbilitiesTable(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loading: false,
            data: [],
            error: null
        };
        return _this;
    }
    FutureAbilitiesTable.prototype.componentWillMount = function () {
        this.load();
    };
    FutureAbilitiesTable.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ loading: true });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"].edsClient.getStudentFutureAbilities()];
                    case 2:
                        data = _a.sent();
                        this.setState({ data: data });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.setState({ error: error_1 });
                        return [3 /*break*/, 4];
                    case 4:
                        this.setState({ loading: false });
                        return [2 /*return*/];
                }
            });
        });
    };
    FutureAbilitiesTable.prototype.render = function () {
        var viewModel = new _future_abilities_viewmodel__WEBPACK_IMPORTED_MODULE_3__["FutureAbilitiesViewModel"](this.state.data);
        var columnHeaders = viewModel.columnHeaders, vtHts = viewModel.vtHts, capabRows = viewModel.capabRows;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null, "Framtidsf\u00F6rm\u00E5gor"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "partialEditStudyPlanViewMode" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { style: { width: '100%' }, className: "smallFont" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null, columnHeaders.map(function (_a, i) {
                            var name = _a.name, type = _a.type;
                            return type === 'header' ?
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: i, rowSpan: 2 }, name) :
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: i, colSpan: 2 }, name);
                        })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { className: "header" }, vtHts.map(function (vtHt, i) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: i }, vtHt); }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, capabRows.map(function (row, i) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: i, className: (Math.floor(i / 3) % 2) && 'tableOdd' }, row.map(function (col, i) { return col.type === 'ability' ?
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: i, rowSpan: 3, className: "goalsSubject" }, col.name) :
                        col.type === 'capability' ?
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: i, className: "goalsSubject" }, col.name) :
                            col.selected ?
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: i, className: "edsSelected" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "markedItem" })) :
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: i }); })); })))));
    };
    return FutureAbilitiesTable;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/ks-goals/future-abilities-viewmodel.ts":
/*!***************************************************************!*\
  !*** ./src/components/ks-goals/future-abilities-viewmodel.ts ***!
  \***************************************************************/
/*! exports provided: FutureAbilitiesViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FutureAbilitiesViewModel", function() { return FutureAbilitiesViewModel; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");

var FutureAbilitiesViewModel = /** @class */ (function () {
    function FutureAbilitiesViewModel(data) {
        // Will build the total years
        var formNames = {};
        data.forEach(function (a) { return a.capabilities.forEach(function (c) { return formNames[c.formName] = true; }); });
        var years = Object.keys(formNames);
        // columnHeaders
        this.columnHeaders = [{
                name: "Framtidsförmåga",
                type: "header"
            }, {
                name: "Område",
                type: "header"
            }].concat(years.map(function (year) { return ({
            name: year,
            type: 'year'
        }); }));
        // vtHts
        this.vtHts = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["flatten"])(years.map(function (year) { return ["HT", "VT"]; }));
        // cababRows
        var rows = [];
        data.forEach(function (a) {
            var row = [{ type: 'ability', name: a.abilityName }];
            var addedCapabs = {};
            a.capabilities.forEach(function (c) {
                var cells = [
                    { type: 'term', selected: c.htHasValue !== false },
                    { type: 'term', selected: c.vtHasValue !== false }
                ];
                //if (c.htHasValue || c.vtHasValue) debugger;
                if (!addedCapabs[c.capabilityName]) {
                    //if (!isFirstCapability) rows.push(row);
                    if (row.length > 1) {
                        rows.push(row);
                        row = [];
                    }
                    addedCapabs[c.capabilityName] = true;
                    row.push({ type: 'capability', name: c.capabilityName });
                    cells.forEach(function (cell) { return row.push(cell); });
                }
                else if (row) {
                    //addedCapabs[c.capabilityName].concat(cells);
                    cells.forEach(function (cell) { return row.push(cell); });
                }
            });
            if (row)
                rows.push(row);
        });
        this.capabRows = rows;
    }
    return FutureAbilitiesViewModel;
}());



/***/ }),

/***/ "./src/components/ks-goals/goals-viewmodel.ts":
/*!****************************************************!*\
  !*** ./src/components/ks-goals/goals-viewmodel.ts ***!
  \****************************************************/
/*! exports provided: ViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModel", function() { return ViewModel; });
/* harmony import */ var _apis_edsclient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/edsclient */ "./src/apis/edsclient.ts");

var ViewModel = /** @class */ (function () {
    function ViewModel(studyPlans) {
        this.subjects = studyPlans.map(function (sp) {
            var periodGoals = sp.periodGoals
                .map(function (g) { return ({ period: new _apis_edsclient__WEBPACK_IMPORTED_MODULE_0__["EDSPeriod"](g.periodName), goal: g.gradeName }); });
            return {
                name: sp.courseUnitName,
                atGoal: periodGoals.filter(function (_a) {
                    var period = _a.period;
                    return period.term === 'AT';
                }).map(function (_a) {
                    var goal = _a.goal;
                    return goal;
                })[0],
                stGoal: periodGoals.filter(function (_a) {
                    var period = _a.period;
                    return period.term === 'ST';
                }).map(function (_a) {
                    var goal = _a.goal;
                    return goal;
                })[0],
                finalGoal: sp.finalGoalGrade,
                strategies: sp.strategyText
            };
        });
    }
    return ViewModel;
}());



/***/ }),

/***/ "./src/components/ks-goals/goals.tsx":
/*!*******************************************!*\
  !*** ./src/components/ks-goals/goals.tsx ***!
  \*******************************************/
/*! exports provided: KSGoals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSGoals", function() { return KSGoals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _goals_viewmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goals-viewmodel */ "./src/components/ks-goals/goals-viewmodel.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _future_abilities_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./future-abilities-table */ "./src/components/ks-goals/future-abilities-table.tsx");






var KSGoals = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](KSGoals, _super);
    function KSGoals(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loadingStudyPlans: false,
            studyPlans: [],
            error: null
        };
        return _this;
    }
    KSGoals.prototype.componentWillMount = function () {
        this.load();
    };
    KSGoals.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var studyPlans, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ loadingStudyPlans: true });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].edsClient.getStudentGoals()];
                    case 2:
                        studyPlans = _a.sent();
                        this.setState({ studyPlans: studyPlans });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.setState({ error: error_1 });
                        return [3 /*break*/, 4];
                    case 4:
                        this.setState({ loadingStudyPlans: false });
                        return [2 /*return*/];
                }
            });
        });
    };
    KSGoals.prototype.render = function () {
        var viewModel = new _goals_viewmodel__WEBPACK_IMPORTED_MODULE_3__["ViewModel"](this.state.studyPlans);
        var showTermGoals = ('' + _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser.schoolType).toLowerCase() !== "gymnasium";
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["M\u00E5l"], ["M\u00E5l"])))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "smallFont" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\u00C4mne"], ["\u00C4mne"])))),
                        showTermGoals && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["HT"], ["HT"])))),
                        showTermGoals && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["VT"], ["VT"])))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Slutm\u00E5l"], ["Slutm\u00E5l"])))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_6 || (templateObject_6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Strategier"], ["Strategier"])))))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, viewModel.subjects.map(function (s, i) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: s.name, className: i % 2 && "tableOdd" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "goalsSubject" }, s.name),
                        showTermGoals && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "goalsTerm" }, s.atGoal),
                        showTermGoals && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "goalsTerm" }, s.stGoal),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { className: "goalsEnd" }, s.finalGoal),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, s.strategies));
                }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "divider" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_future_abilities_table__WEBPACK_IMPORTED_MODULE_5__["FutureAbilitiesTable"], null));
    };
    return KSGoals;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/components/ks-termplanner/ks-termplanner-tutored.tsx":
/*!******************************************************************!*\
  !*** ./src/components/ks-termplanner/ks-termplanner-tutored.tsx ***!
  \******************************************************************/
/*! exports provided: KSTermPlannerTutored */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSTermPlannerTutored", function() { return KSTermPlannerTutored; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _termplanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termplanner */ "./src/components/ks-termplanner/termplanner.tsx");
/* harmony import */ var _utility_components_tutorable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility-components/tutorable-component */ "./src/components/utility-components/tutorable-component.tsx");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");




function KSTermPlannerTutored(props) {
    var intl = props.intl;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_3__["LanguageContext"].Provider, { value: { intl: intl } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utility_components_tutorable_component__WEBPACK_IMPORTED_MODULE_2__["TutorableComponent"], { tutored: true, createComponent: function (env) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_termplanner__WEBPACK_IMPORTED_MODULE_1__["KSTermPlanner"], { key: env.currentUser.mail, env: env, tutored: true, initialDate: new Date() });
            } }));
}


/***/ }),

/***/ "./src/components/ks-termplanner/termplanner-utils.ts":
/*!************************************************************!*\
  !*** ./src/components/ks-termplanner/termplanner-utils.ts ***!
  \************************************************************/
/*! exports provided: getFirstAndLastWeek, LAST_STEP_SPRING, LAST_STEP_AUTUMN, findCourseFromColumnHeader, getColumnsHeader, getColumnHeaderFromCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstAndLastWeek", function() { return getFirstAndLastWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_STEP_SPRING", function() { return LAST_STEP_SPRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_STEP_AUTUMN", function() { return LAST_STEP_AUTUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findCourseFromColumnHeader", function() { return findCourseFromColumnHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColumnsHeader", function() { return getColumnsHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColumnHeaderFromCourse", function() { return getColumnHeaderFromCourse; });
function getFirstAndLastWeek(term) {
    return term === 'AT' ?
        [33, 50] : // This is a guess! Need data! Should be possible to get from skola24?
        [2, 23]; // This is a guess! Need data!
}
var LAST_STEP_SPRING = 28; // Week 28 is in summer. Use it as placeholder for "last step"
var LAST_STEP_AUTUMN = 52; // Week must be valid. Use it as placeholder for "last step"
/**
 * Note that this function is tightly coupled to the swedish school.
 */
function findCourseFromColumnHeader(courses, columnHeader) {
    switch (columnHeader) {
        case 'M.spr': return courses
            .filter(function (course) { return course.shortName !== 'MA' && course.shortName.startsWith('M'); })[0] || null;
        case 'Ma': return courses.filter(function (c) { return c.shortName === "MA"; })[0] || null;
        case 'Sv/SvA': return courses.filter(function (c) { return c.shortName.startsWith("SV"); })[0] || null;
        case 'Eng': return courses.filter(function (c) { return c.shortName === "EN"; })[0] || null;
    }
    return null;
}
function getColumnsHeader(locale) {
    switch (locale) {
        case 'sv':
            return ['M.spr', 'Ma', 'Sv/SvA', 'Eng'];
        case 'en_sin':
            return ['MFL', 'Ma', 'Hi', 'Eng', 'Yoga', 'ICT'];
        case 'en_nin':
            return ['MFL', 'Ma', 'Hi', 'Eng', 'Yoga', 'ICT'];
    }
}
/**
 * Note that this function is tightly coupled to the swedish school.
 */
function getColumnHeaderFromCourse(course) {
    var shortName = course.shortName;
    if (shortName === "MA")
        return 'Ma';
    if (shortName === "EN")
        return 'Eng';
    if (shortName.startsWith("SV"))
        return 'Sv/SvA';
    if (shortName.startsWith("M2"))
        return 'M.spr';
    return null;
}


/***/ }),

/***/ "./src/components/ks-termplanner/termplanner.tsx":
/*!*******************************************************!*\
  !*** ./src/components/ks-termplanner/termplanner.tsx ***!
  \*******************************************************/
/*! exports provided: KSTermPlanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSTermPlanner", function() { return KSTermPlanner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_generic_school_term__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/generic-school-term */ "./src/utils/generic-school-term.ts");
/* harmony import */ var _viewmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewmodel */ "./src/components/ks-termplanner/viewmodel.ts");
/* harmony import */ var _utility_components_content_editable_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility-components/content-editable-field */ "./src/components/utility-components/content-editable-field.tsx");
/* harmony import */ var _repos_ks_termplanner_repo_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../repos/ks-termplanner-repo-instance */ "./src/repos/ks-termplanner-repo-instance.ts");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var _course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../course-builder/sub-components/spinner */ "./src/components/course-builder/sub-components/spinner.tsx");
/* harmony import */ var _charts_doughnut__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../charts/doughnut */ "./src/components/charts/doughnut.tsx");
/* harmony import */ var _utils_generic_school_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/generic-school-utils */ "./src/utils/generic-school-utils.ts");
/* harmony import */ var _utility_components_dialogs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utility-components/dialogs */ "./src/components/utility-components/dialogs.tsx");
/* harmony import */ var _tutor_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tutor-dialog */ "./src/components/ks-termplanner/tutor-dialog.tsx");
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../features */ "./src/features/index.ts");
/* harmony import */ var _utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utility-components/open-close-box */ "./src/components/utility-components/open-close-box.tsx");

















var KSTermPlanner = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](KSTermPlanner, _super);
    function KSTermPlanner(props) {
        var _this = _super.call(this, props) || this;
        _this.unmounted = false;
        _this.state = {
            schoolTerm: new _utils_generic_school_term__WEBPACK_IMPORTED_MODULE_2__["GenericSchoolTerm"](props.initialDate),
            activeCourses: [],
            weekPlans: [],
            error: null,
            loadingActiveCourses: false,
            loadingWeekPlans: false,
            initialLoad: true,
            dialogs: []
        };
        _this.flowId = 1;
        _this.updateWeekPlans = _this.updateWeekPlans.bind(_this);
        return _this;
    }
    KSTermPlanner.prototype.componentDidMount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load(this.state.schoolTerm)];
                    case 1:
                        _a.sent();
                        if (!this.unmounted)
                            this.props.env.ksTermPlannerRepo.mem.subscribe(this.updateWeekPlans);
                        return [2 /*return*/];
                }
            });
        });
    };
    KSTermPlanner.prototype.componentWillUnmount = function () {
        this.unmounted = true;
        this.props.env.ksTermPlannerRepo.mem.unsubscribe(this.updateWeekPlans);
    };
    KSTermPlanner.prototype.updateWeekPlans = function (weekPlansOrTutorComm, error) {
        this.setState({ weekPlans: weekPlansOrTutorComm, loadingWeekPlans: false, error: error || null });
    };
    KSTermPlanner.prototype.load = function (schoolTerm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var flowId, ksTermPlannerRepo, term, currentSchoolTerm, activeCourses, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        flowId = ++this.flowId;
                        this.fields = [];
                        this.setState({
                            //loadingWeekPlans: true,
                            loadingActiveCourses: true
                        });
                        ksTermPlannerRepo = this.props.env.ksTermPlannerRepo;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.loadAcademicYearDates(schoolTerm, _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_8__["default"].KED_SCHOOL_LOCALE)];
                    case 2:
                        term = _a.sent();
                        if (this.flowId !== flowId)
                            return [2 /*return*/];
                        currentSchoolTerm = new _utils_generic_school_term__WEBPACK_IMPORTED_MODULE_2__["GenericSchoolTerm"](schoolTerm.selectedDate, this.context.intl.locale, term);
                        //refresh saved data
                        ksTermPlannerRepo.refreshData(currentSchoolTerm.getTermStartAndEnd(true));
                        return [4 /*yield*/, this.loadActiveCourses(currentSchoolTerm)];
                    case 3:
                        activeCourses = _a.sent();
                        if (this.flowId !== flowId)
                            return [2 /*return*/];
                        this.setState({ schoolTerm: currentSchoolTerm, initialLoad: false, activeCourses: activeCourses, loadingActiveCourses: false });
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        if (this.flowId !== flowId)
                            return [2 /*return*/];
                        this.setState({ schoolTerm: currentSchoolTerm, loadingActiveCourses: false, error: error_1 });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    KSTermPlanner.prototype.loadAcademicYearDates = function (schoolTerm, schoolLocale) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var termDates;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.env.edsClient.getAcademicYearTerms(schoolLocale, schoolTerm.selectedDate)];
                    case 1:
                        termDates = _a.sent();
                        return [2 /*return*/, termDates];
                }
            });
        });
    };
    KSTermPlanner.prototype.loadActiveCourses = function (schoolTerm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var periodName, activeCourses;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        periodName = schoolTerm.getEdsPeriodName();
                        return [4 /*yield*/, this.props.env.edsClient.getActiveCourses({ periodName: periodName })];
                    case 1:
                        activeCourses = _a.sent();
                        return [2 /*return*/, activeCourses];
                }
            });
        });
    };
    KSTermPlanner.prototype.updateCell = function (weekPlan, columnName, newValue) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var oldValue, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldValue = (weekPlan && weekPlan.cellValues[columnName]) || "";
                        if (oldValue === newValue)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        weekPlan.cellValues[columnName] = newValue;
                        return [4 /*yield*/, this.props.env.ksTermPlannerRepo.upsert(weekPlan, function (wp) { return wp.cellValues[columnName] = newValue; })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        console.error(error_2.stack || error_2);
                        if (error_2.name === "http403") {
                            this.setState({ error: this.context.intl({ id: "common.changesNotSavedUnauthorized", defaultMessage: "Ändringarna sparades inte p.g.a. otillräcklig behörighet." }) });
                        }
                        else {
                            this.setState({ error: this.context.intl({ id: "common.changesNotSavedErrorOccured", defaultMessage: "För tillfället problem att spara data. Dina ändringar sparades inte." }) });
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param tutorNote
     * @param newValue
     *
     * Update tutor field value
     */
    KSTermPlanner.prototype.updateTutorNoteField = function (tutorNote, newValue) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var oldValue, showError_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldValue = (tutorNote && tutorNote.content) || "";
                        if (oldValue === newValue)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        tutorNote.content = newValue;
                        //set document ACL
                        tutorNote.acl = [
                            new kedbackend_client__WEBPACK_IMPORTED_MODULE_14__["DocumentAccess"]("tutorFor", this.props.env.currentUser.mail, "S").toString(),
                            new kedbackend_client__WEBPACK_IMPORTED_MODULE_14__["DocumentAccess"]("email", this.props.env.currentUser.mail, "R").toString(),
                        ];
                        return [4 /*yield*/, this.props.env.ksTermPlannerRepo.upsert(tutorNote, function (note) { return note.content = newValue; })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        showError_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Delete tutor comment by Id
     * @param noteId
     */
    KSTermPlanner.prototype.deleteTutorNoteField = function (noteId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var showError_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.props.env.ksTermPlannerRepo.delete([noteId])];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        showError_2 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Add a comment from tutor
     * @param weekNumber
     * @param comment
     *
     */
    KSTermPlanner.prototype.onTutorClick = function (note) {
        var _this = this;
        this.openDialog(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_tutor_dialog__WEBPACK_IMPORTED_MODULE_13__["TutorDialog"], { weekNumber: note.weekNumber, comment: note.content, intl: this.context.intl, updateData: function (val) { return _this.updateTutorNoteField(note, val); }, deleteNoteData: function () { return _this.deleteTutorNoteField(note.id); }, closeDialog: function () { return _this.closeDialog(); } }));
    };
    KSTermPlanner.prototype.openDialog = function (dialog) {
        this.setState({ dialogs: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.state.dialogs, [dialog]) });
    };
    KSTermPlanner.prototype.closeDialog = function () {
        this.setState({ dialogs: this.state.dialogs.slice(0, this.state.dialogs.length - 1) });
    };
    /**
     * Navigate to adjacent field depending on direction
     * @param pos current position in field-matrix
     * @param direction direction to take
     */
    KSTermPlanner.prototype.navigate = function (pos, direction) {
        var newpos = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, pos);
        var maxRows = this.fields.length;
        var maxCols = Math.max.apply(Math, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.fields.map(function (row) { return row.length; })));
        switch (direction) {
            case 'up':
                newpos.row = Math.max(pos.row - 1, 0);
                break;
            case 'down':
                newpos.row = Math.min(pos.row + 1, maxRows);
                break;
            case 'left':
                newpos.col = Math.max(pos.col - 1, 0);
                break;
            case 'right':
                newpos.col = Math.min(pos.col + 1, maxCols);
                break;
        }
        if (this.fields[newpos.row] && this.fields[newpos.row][newpos.col])
            this.fields[newpos.row][newpos.col].myself.current.focus();
    };
    /**
     * Adds field to field-matrix to enable navigation in thee table
     * @param field current field
     * @param pos position of field in field-matrix
     */
    KSTermPlanner.prototype.addField = function (field, pos) {
        if (this.fields[pos.row] === undefined) {
            this.fields[pos.row] = [];
        }
        this.fields[pos.row][pos.col] = field;
    };
    /**
     * Creates the cell in the termplanner table
     * @param rowIndex index of row in table
     * @param colIndex index of column in table
     * @param subjectName name field
     * @param model --unused?
     * @param weekPlan current row from weekPlan
     * @param readOnlyCells if cells are readonly
     */
    KSTermPlanner.prototype.getTableCell = function (rowIndex, colIndex, subjectName, model, weekPlan, readOnlyCells, colType) {
        var _this = this;
        var completedSteps = model.completedSteps;
        var pos = { row: rowIndex, col: colIndex };
        var uniqueKey = subjectName + rowIndex;
        if (colType === 'Tutor') {
            var tutoredWeekPlan = weekPlan;
            var content = tutoredWeekPlan.content;
            if (this.props.tutored) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: "tutornote" + uniqueKey, onClick: function () { return _this.onTutorClick(tutoredWeekPlan); }, className: "tutorCell" }, content ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: uniqueKey, "data-tooltip": content },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-comment-dots" })) :
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: uniqueKey },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fas fa-comment-medical" })));
            }
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: "tutornote" + uniqueKey, className: "tutorCell" }, content && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: uniqueKey, "data-tooltip": content },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "far fa-comment-dots" })));
        }
        else {
            var currentWeekPlan = weekPlan;
            var cellValues = currentWeekPlan.cellValues;
            // an outer td cell and inner div is used to regulate the height and allow for ellipses on text-overflow
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", { key: "tutornote" + uniqueKey, className: this.getCellClassName(completedSteps, cellValues, subjectName) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_content_editable_field__WEBPACK_IMPORTED_MODULE_4__["ContentEditableField"], { key: uniqueKey, ref: function (field) { return _this.addField(field, pos); }, text: cellValues[subjectName], tag: 'div', validateValue: colType == 'Step' ? /^\d*$/ : undefined, maxChars: colType == 'Comment' ? 100 : (colType == 'Course' ? 30 : 3), onChange: this.updateCell.bind(this, weekPlan, subjectName), readOnly: readOnlyCells || colType == 'Tutor', allowNavigation: true, onNavigate: this.navigate.bind(this, pos) }));
        }
    };
    /**
     * Get classname for cell
     * @param completedSteps
     * @param cellValues
     * @param subjectName
     */
    KSTermPlanner.prototype.getCellClassName = function (completedSteps, cellValues, subjectName) {
        var colType = this.getColumnType(subjectName);
        if (colType == 'Step' && completedSteps[subjectName + cellValues[subjectName]]) {
            return 'stepCell completedStep';
        }
        return colType.toLowerCase() + 'Cell';
    };
    /**
     * Creates the cell in the termplanner tables footer
     * @param rowIndex index of row in table
     * @param colIndex index of column in table
     * @param subjectName name field
     * @param model
     * @param readOnlyCells if cells are readonly
     */
    KSTermPlanner.prototype.getFooterCell = function (rowIndex, colIndex, subjectName, model, readOnlyCells) {
        var _this = this;
        var pos = { row: rowIndex, col: colIndex };
        var colType = this.getColumnType(subjectName);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: colType + "Footer" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_content_editable_field__WEBPACK_IMPORTED_MODULE_4__["ContentEditableField"], { key: "stepFooterCell" + colIndex, ref: function (field) { return _this.addField(field, pos); }, tag: 'div', text: model.lastSteps.cellValues[subjectName], onChange: this.updateCell.bind(this, model.lastSteps, subjectName), readOnly: readOnlyCells, maxChars: 10, allowNavigation: true, onNavigate: this.navigate.bind(this, pos) }));
    };
    KSTermPlanner.prototype.getStepHeaderColumn = function (index, translatedColumnHeader, colType) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: "stepHeaderCell_" + index, className: colType.toLowerCase() + "Header" }, colType != 'Tutor' ? translatedColumnHeader : '');
    };
    KSTermPlanner.prototype.getColumnType = function (name) {
        var colTypes = { 'Kommentar': 'Comment', 'Kurs': 'Course', 'TutorComment': 'Tutor' };
        return colTypes.hasOwnProperty(name) ? colTypes[name] : 'Step';
    };
    KSTermPlanner.prototype.openCloseProgressCharts = function (value) {
        localStorage.setItem('TermplannerBoxCharts', value);
    };
    KSTermPlanner.prototype.getStepCharts = function (columns, subjectProgress) {
        var _this = this;
        var chartsBoxState = JSON.parse(localStorage.getItem('TermplannerBoxCharts'));
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_open_close_box__WEBPACK_IMPORTED_MODULE_16__["OpenCloseBox"], { headerOpen: chartsBoxState, onOpenClose: this.openCloseProgressCharts, title: this.context.intl.formatMessage({ id: "termplanner.chartsBoxTitle", defaultMessage: "Min progression" }) },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "charts-container" }, columns.map(function (element) {
                if (!element.isFixed) {
                    var percentage = subjectProgress[element.name] ? subjectProgress[element.name].value : 0;
                    var errorMessage = subjectProgress[element.name].finalStepCompleted ? null :
                        _this.context.intl.formatMessage({ id: "termplanner.noFinalStepAvailable", defaultMessage: "Inget slutsteg tillgängligt" });
                    var translatedColumns = Object(_utils_generic_school_utils__WEBPACK_IMPORTED_MODULE_11__["getSchoolTranslatedSubjectFullname"])(_this.context.intl);
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: element.name, className: "chart-box" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, translatedColumns[element.name]),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: element.name, className: "inner-chart-box" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_charts_doughnut__WEBPACK_IMPORTED_MODULE_10__["Doughnut"], { key: element.name, percentage: percentage, errorMessage: errorMessage })));
                }
            })));
    };
    KSTermPlanner.prototype.getWeekTutorNote = function (weekPlansOrTutorNote, weekNumber) {
        return weekPlansOrTutorNote.find(function (x) { return x.type === "tutor-note" && x.weekNumber === weekNumber; });
    };
    KSTermPlanner.prototype.render = function () {
        var _this = this;
        var intl = this.context.intl;
        var showTutorCommentField = _features__WEBPACK_IMPORTED_MODULE_15__["features"].ksTutorComment;
        var showDoughnutCharts = _features__WEBPACK_IMPORTED_MODULE_15__["features"].termplannerCharts;
        var model = new _viewmodel__WEBPACK_IMPORTED_MODULE_3__["ViewModel"](this.state.weekPlans, this.state.activeCourses, this.state.schoolTerm, _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_8__["default"].KED_SCHOOL_LOCALE, intl, showTutorCommentField);
        var termGoals = model.termGoals, columns = model.columns;
        var tutored = this.props.tutored;
        var _a = this.state, loadingWeekPlans = _a.loadingWeekPlans, error = _a.error, dbWeekPlans = _a.weekPlans, dialogs = _a.dialogs;
        var failedInitialLoad = dbWeekPlans.length === 0 && !!error;
        var readOnlyCells = failedInitialLoad || tutored || loadingWeekPlans;
        var rowOffset = 0;
        var filteredWeekplans = model.weekPlansOrTutorNote.filter(function (x) { return !x.type; });
        return this.state.initialLoad ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_9__["Spinner"], null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], { id: "termplanner.loadingTermplanner", defaultMessage: "V.g. v\u00E4nta medan terminsplaner laddas..." })) :
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "termplanner" +
                    (this.state.loadingWeekPlans ? " loading-weekplans" : "") +
                    (this.state.loadingActiveCourses ? " loading-courses" : "") },
                showDoughnutCharts && this.state.activeCourses.length > 0 && this.getStepCharts(columns, model.subjectProgress),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "weekSelect" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, this.state.schoolTerm.toLocaleString(intl, true))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn-group" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn", onClick: function () {
                                        var term = _this.state.schoolTerm.prevTerm();
                                        _this.load(term);
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-angle-left", "aria-hidden": "true" })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn", onClick: function () {
                                        var term = _this.state.schoolTerm.nextTerm();
                                        _this.load(term);
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-angle-right", "aria-hidden": "true" }))))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], { id: "termplanner.termPlanning", defaultMessage: "Terminsplanering", tagName: "h4" }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", { className: "termplanner-table zebra" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { className: "weekColumn" },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], { id: "termplanner.weekNumber", defaultMessage: "Vecka" })),
                                columns.map(function (elem, index) {
                                    var colType = _this.getColumnType(elem.name);
                                    return _this.getStepHeaderColumn(index, elem.translatedName, colType);
                                }))),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, filteredWeekplans.filter(function (wk) { return wk.cellValues; }).map(function (weekPlan, rowIndex) {
                            rowOffset = rowIndex;
                            var weekNumber = weekPlan.weekNumber, academicWeekNumber = weekPlan.academicWeekNumber;
                            var week = weekNumber;
                            var displayWeek = intl.locale === "sv" ? week : academicWeekNumber;
                            var isCurrentWeek = _this.state.schoolTerm.isCurrentWeek(weekPlan.dateTime);
                            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", { key: model.year + ':' + week, className: isCurrentWeek ? "currentWeek" : "" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, displayWeek),
                                columns.map(function (elem, colIndex) {
                                    var colType = _this.getColumnType(elem.name);
                                    var tutorValue = _this.getWeekTutorNote(model.weekPlansOrTutorNote, weekNumber);
                                    return colType === "Tutor" ?
                                        tutorValue && showTutorCommentField && _this.getTableCell(rowIndex, colIndex, elem.name, model, tutorValue, readOnlyCells, colType) :
                                        _this.getTableCell(rowIndex, colIndex, elem.name, model, weekPlan, readOnlyCells, colType);
                                }));
                        })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tfoot", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], { id: "termplanner.finalStep", defaultMessage: "Slutsteg" })),
                                columns.filter(function (c) { return !c.isFixed; }).map(function (elem, index) {
                                    return _this.getFooterCell(rowOffset + 1, index, elem.name, model, readOnlyCells);
                                }),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "-"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null),
                                showTutorCommentField && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null)),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null,
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null,
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], { id: "termplanner.edsGoalGrades", defaultMessage: "Terminsm\u00E5l" })),
                                columns.filter(function (c) { return !c.isFixed; }).map(function (elem, index) {
                                    var colType = _this.getColumnType(elem.name).toLowerCase();
                                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", { key: "grades_" + index, className: colType + "Footer" }, termGoals[elem.name]);
                                }),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "-"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, this.state.error && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "error" }, '' + this.state.error)),
                                showTutorCommentField && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null))))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_dialogs__WEBPACK_IMPORTED_MODULE_12__["Dialogs"], { dialogs: dialogs, popDialog: function () { return _this.setState({ dialogs: dialogs.slice(0, dialogs.length - 1) }); } }));
    };
    KSTermPlanner.contextType = _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_6__["LanguageContext"];
    return KSTermPlanner;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/ks-termplanner/tutor-dialog.tsx":
/*!********************************************************!*\
  !*** ./src/components/ks-termplanner/tutor-dialog.tsx ***!
  \********************************************************/
/*! exports provided: TutorDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorDialog", function() { return TutorDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var TutorDialog = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TutorDialog, _super);
    function TutorDialog(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            comment: props.comment ? props.comment : ''
        };
        return _this;
    }
    TutorDialog.prototype.delete = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var closeDialog;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                closeDialog = this.props.closeDialog;
                closeDialog();
                this.props.deleteNoteData();
                return [2 /*return*/];
            });
        });
    };
    TutorDialog.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var closeDialog, comment;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                closeDialog = this.props.closeDialog;
                comment = this.state.comment;
                closeDialog();
                this.props.updateData(comment);
                return [2 /*return*/];
            });
        });
    };
    TutorDialog.prototype.render = function () {
        var _this = this;
        var _a = this.props, weekNumber = _a.weekNumber, intl = _a.intl;
        var comment = this.state.comment;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, intl ? intl.formatMessage({ id: "tutorNoteDialog.weekComment", defaultMessage: "Kommentar för vecka {weekNumber}" }, { weekNumber: weekNumber }) : "Kommentar f\u00F6r vecka " + weekNumber),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-table" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "fullWidth" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", { autoFocus: true, value: comment, onChange: function (ev) { return _this.setState({ comment: ev.target.value }); } })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { tabIndex: 1, className: "btn btn-large btn-default", onClick: function () { return _this.save(); } },
                    intl ? intl.formatMessage({ id: "common.save", defaultMessage: "Spara" }) : 'Spara',
                    " "),
                comment && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { tabIndex: 1, className: "btn btn-warning btn-large pull-right", onClick: function () { return _this.delete(); } }, intl ? intl.formatMessage({ id: "common.remove", defaultMessage: "Ta bort" }) : "Ta bort"))));
    };
    return TutorDialog;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/ks-termplanner/viewmodel.ts":
/*!****************************************************!*\
  !*** ./src/components/ks-termplanner/viewmodel.ts ***!
  \****************************************************/
/*! exports provided: ViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModel", function() { return ViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _termplanner_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termplanner-utils */ "./src/components/ks-termplanner/termplanner-utils.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var kedbackend_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kedbackend/client */ "./kedbackend/client.js");
/* harmony import */ var _utils_weekutil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/weekutil */ "./src/utils/weekutil.ts");
/* harmony import */ var _utils_generic_school_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/generic-school-utils */ "./src/utils/generic-school-utils.ts");






var ViewModel = /** @class */ (function () {
    function ViewModel(dbWeekPlans, 
    //dbTutorNotes: TermPlannerTutorNote[],
    courses, currentSchoolTerm, currentSchoolLocale, intl, showTutorCommentField) {
        var _a, e_1, _b;
        var _this = this;
        this.subjectProgress = {};
        this.columns = [];
        this.weekPlansOrTutorNote = [];
        if (currentSchoolTerm.schoolMoment) {
            var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](currentSchoolTerm.getTermStartAndEnd(), 2), termStart = _c[0], termEnd = _c[1];
            this.year = termStart.year();
            //init columns
            var columnHeaders = Object(_termplanner_utils__WEBPACK_IMPORTED_MODULE_1__["getColumnsHeader"])(currentSchoolLocale);
            columnHeaders.forEach(function (c) { return _this.columns.push({ name: c }); });
            //define fixed columns - we keep these separated, in case that the other columns will be dynamically retrieved
            var fixedColumns_1 = [{ name: "Kurs", isFixed: true }, { name: "Kommentar", isFixed: true }];
            if (showTutorCommentField) {
                fixedColumns_1.push({ name: "TutorComment", isFixed: true });
            }
            //Add fixed columns names
            (_a = this.columns).push.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](fixedColumns_1));
            //populate translations
            var translatedColumns = Object(_utils_generic_school_utils__WEBPACK_IMPORTED_MODULE_5__["getSchoolTranslatedSubjects"])(currentSchoolLocale, intl);
            this.columns.forEach(function (element) {
                element.translatedName = translatedColumns[element.name];
            });
            var currentTermHolidays = currentSchoolTerm.schoolMoment.academicYearStructure.holidays;
            var currentTerm_1 = currentSchoolTerm.schoolMoment.term;
            //
            // weekPlans
            //
            var weekplanValues = dbWeekPlans.filter(function (x) { return !x.type; });
            var tutorValues = dbWeekPlans.filter(function (w) { return w.type === 'tutor-note'; });
            var startAcademicYearNumber = currentSchoolTerm.schoolMoment.academicYearStructure.academicStartWeek;
            var _loop_1 = function (weekMoment) {
                holidayPeriod = currentTermHolidays.filter(function (h) { return weekMoment.week() >= moment__WEBPACK_IMPORTED_MODULE_2___default()(h.startDate).startOf("week").week() &&
                    weekMoment.week() <= moment__WEBPACK_IMPORTED_MODULE_2___default()(h.endDate).endOf('week').week(); });
                //if the current week is a holiday week, skip it
                if (holidayPeriod.length > 0) {
                    return "continue";
                }
                var weekNumber = weekMoment.week();
                var kedWeek = Object(_utils_weekutil__WEBPACK_IMPORTED_MODULE_4__["KEDWeek"])(weekMoment.year(), weekNumber);
                //A term can end and start on the same week for India
                //in this case we should filter them by the term
                //This is not the case for sv locale and we want to skip this check 
                //because data is already saved in the database
                var weekPlan = weekplanValues.filter(function (wp) {
                    return wp.dateTime >= kedWeek.notBefore &&
                        wp.dateTime <= kedWeek.notAfter &&
                        (!wp.isFinalStep &&
                            wp.term === currentTerm_1 || intl.locale === "sv");
                })[0];
                var tutorNote = tutorValues.filter(function (wp) {
                    return wp.dateTime >= kedWeek.notBefore &&
                        wp.dateTime <= kedWeek.notAfter &&
                        (wp.term === currentTerm_1 || intl.locale === "sv");
                })[0];
                this_1.weekPlansOrTutorNote.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, weekPlan || {}, { id: weekPlan ? weekPlan.id : Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(), dateTime: weekPlan ? weekPlan.dateTime : weekMoment.valueOf(), cellValues: weekPlan ? weekPlan.cellValues : {}, weekNumber: weekNumber, academicWeekNumber: startAcademicYearNumber++, term: currentTerm_1 }));
                this_1.weekPlansOrTutorNote.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, tutorNote || {}, { id: tutorNote ? tutorNote.id : Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(), type: 'tutor-note', dateTime: tutorNote ? tutorNote.dateTime : weekMoment.valueOf(), content: tutorNote ? tutorNote.content : '', weekNumber: weekNumber, term: currentTerm_1 }));
            };
            var this_1 = this, holidayPeriod;
            for (var weekMoment = termStart.clone(); weekMoment.valueOf() < termEnd.valueOf(); weekMoment = weekMoment.clone().add(1, 'week').startOf('week')) {
                _loop_1(weekMoment);
            }
            //
            // lastSteps
            //
            var lastStepWeek = currentSchoolTerm.getLastStepWeek(intl.locale);
            var lastStepKedWeek_1 = Object(_utils_weekutil__WEBPACK_IMPORTED_MODULE_4__["KEDWeek"])(termEnd.year(), lastStepWeek);
            this.lastSteps = weekplanValues.filter(function (wp) {
                return wp.dateTime >= lastStepKedWeek_1.notBefore &&
                    wp.dateTime <= lastStepKedWeek_1.notAfter &&
                    (wp.isFinalStep &&
                        wp.term === currentTerm_1 || intl.locale === "sv");
            })[0] || {
                id: Object(kedbackend_client__WEBPACK_IMPORTED_MODULE_3__["createUUID"])(),
                dateTime: moment__WEBPACK_IMPORTED_MODULE_2___default()(termEnd).clone().week(lastStepWeek).startOf('week').valueOf(),
                cellValues: {},
                weekNumber: lastStepWeek,
                term: currentTerm_1,
                isFinalStep: true
            };
            this.completedSteps = {};
            this.termGoals = {};
            var courseProgress = {};
            var _loop_2 = function (course) {
                var e_2, _a;
                var columnHeader = Object(_termplanner_utils__WEBPACK_IMPORTED_MODULE_1__["getColumnHeaderFromCourse"])(course);
                //
                // Calculate 
                //
                hasNoFinalStepValue = isNaN(parseInt(this_2.lastSteps.cellValues[columnHeader])) || !this_2.lastSteps.cellValues[columnHeader];
                finalStepValue = hasNoFinalStepValue ? 0 : parseInt(this_2.lastSteps.cellValues[columnHeader]);
                courseProgress[columnHeader] = null;
                if (!hasNoFinalStepValue && finalStepValue > 0) {
                    // Find the first step number
                    var firstStep_1 = course.courseSteps.length > 0 && course.courseSteps.reduce(function (prev, curr) {
                        return parseInt(prev.shortName) < parseInt(curr.shortName) ? prev : curr;
                    });
                    // Find the highest completed step number
                    var maxCompletedStep = course.courseSteps.length > 0 && course.courseSteps.filter(function (x) { return x.isCompleted; }).reduce(function (prev, curr) {
                        return parseInt(prev.shortName) < parseInt(curr.shortName) ? curr : prev;
                    });
                    var maxCompletedValue_1 = maxCompletedStep ? parseInt(maxCompletedStep.shortName) : 0;
                    //calculate the number of completed steps lower than the specified Slutsteg Value
                    var rangeItems = course.courseSteps.filter(function (x) { return parseInt(x.shortName) <= finalStepValue && parseInt(x.shortName) >= parseInt(firstStep_1.shortName); });
                    var completedItems = rangeItems.filter(function (x) { return x.isCompleted; }).length;
                    //check if the highest completed step is higher than the "Slutsteg" value
                    if (maxCompletedValue_1 > finalStepValue) {
                        completedItems = course.courseSteps.filter(function (x) { return parseInt(x.shortName) <= maxCompletedValue_1 && parseInt(x.shortName) >= parseInt(firstStep_1.shortName); }).length;
                    }
                    //set the progress for each EDS course
                    courseProgress[columnHeader] = completedItems / rangeItems.length * 100;
                }
                try {
                    //
                    // completedSteps
                    //
                    for (var _b = (e_2 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](course.courseSteps)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var step = _c.value;
                        if (step.isCompleted) {
                            this_2.completedSteps[columnHeader + step.shortName] = true;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                //
                // termGoals
                //
                this_2.termGoals[columnHeader] = course.periodGoalGrade;
            };
            var this_2 = this, hasNoFinalStepValue, finalStepValue;
            try {
                for (var courses_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](courses), courses_1_1 = courses_1.next(); !courses_1_1.done; courses_1_1 = courses_1.next()) {
                    var course = courses_1_1.value;
                    _loop_2(course);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (courses_1_1 && !courses_1_1.done && (_b = courses_1.return)) _b.call(courses_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (courses) {
                //init
                columnHeaders.forEach(function (elem) {
                    _this.subjectProgress[elem] = { finalStepCompleted: false, value: 0 };
                });
                //compute charts by computing  completed goal (saved data from kedbackend is not taken into account)/lastStepValue
                Object.keys(this.lastSteps.cellValues).forEach(function (val) {
                    //exclude the fixed columns. Charts should not be displayed for those
                    if (!fixedColumns_1[val]) {
                        _this.subjectProgress[val] = { finalStepCompleted: courseProgress[val] !== null, value: courseProgress[val] };
                    }
                });
            }
        }
    }
    return ViewModel;
}());

function findWeekPlansByStep(weekPlans, step) {
    return weekPlans.filter(function (wp) { return Object.keys(wp.cellValues).map(function (column) { return wp.cellValues[column] === step; }); });
}


/***/ }),

/***/ "./src/components/latest-assessments/latest-assessments.tsx":
/*!******************************************************************!*\
  !*** ./src/components/latest-assessments/latest-assessments.tsx ***!
  \******************************************************************/
/*! exports provided: LatestAssessments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestAssessments", function() { return LatestAssessments; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");




var LatestAssessments = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LatestAssessments, _super);
    function LatestAssessments(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            assessments: [],
            error: null,
            loading: false
        };
        return _this;
    }
    LatestAssessments.prototype.componentWillMount = function () {
        this.load();
    };
    LatestAssessments.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var assessments, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ loading: true });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _globals_KED_env__WEBPACK_IMPORTED_MODULE_3__["default"].edsClient.getLatestAssessments(this.props.limit)];
                    case 2:
                        assessments = _a.sent();
                        this.setState({ assessments: assessments });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.setState({ error: error_1 });
                        return [3 /*break*/, 4];
                    case 4:
                        this.setState({ loading: false });
                        return [2 /*return*/];
                }
            });
        });
    };
    LatestAssessments.prototype.render = function () {
        var hasGrades = this.state.assessments.some(function (a) { return !!a.gradeName; });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "ked_boxed" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h4", null, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Senaste bed\u00F6mningar"], ["Senaste bed\u00F6mningar"])))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "latest-assesments zebra" }, this.state.assessments.map(function (a, i) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: i },
                    (hasGrades && a.gradeName != "") && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "grade pill pull-right" }, a.gradeName),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "date pill pull-left" }, a.publishDateTime.substr(0, 10)),
                    a.courseName == a.courseUnitName ?
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, a.courseName)) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h5", null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", null, a.courseName),
                        " / ",
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("em", null, a.courseUnitName)),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, a.text));
            })));
    };
    return LatestAssessments;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var templateObject_1;


/***/ }),

/***/ "./src/components/learning-tasks/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/learning-tasks/index.tsx ***!
  \*************************************************/
/*! exports provided: LearningTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningTasks", function() { return LearningTasks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apis_ked_learninggoals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apis/ked-learninggoals */ "./src/apis/ked-learninggoals.ts");
/* harmony import */ var _course_viewer_subcomponents_learning_goals_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course-viewer/subcomponents/learning-goals-list */ "./src/components/course-viewer/subcomponents/learning-goals-list.tsx");
/* harmony import */ var _utility_components_SetupLanguageIntl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility-components/SetupLanguageIntl */ "./src/components/utility-components/SetupLanguageIntl.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");







var _LearningTasks = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](_LearningTasks, _super);
    function _LearningTasks(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: null
        };
        return _this;
    }
    _LearningTasks.prototype.componentDidMount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_apis_ked_learninggoals__WEBPACK_IMPORTED_MODULE_2__["getLearningGoalsAndTasks"])(this.props.apiPath, this.props.pageId)];
                    case 1:
                        data = _a.sent();
                        this.setState({ data: data });
                        return [2 /*return*/];
                }
            });
        });
    };
    _LearningTasks.prototype.render = function () {
        if (!this.state.data)
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null);
        var _a = this.state.data, moduleName = _a.moduleName, subject = _a.subject, commonTasks = _a.commonTasks, learningGoals = _a.learningGoals, step = _a.step;
        var intl = this.props.intl;
        //const step = undefined; // moduleName.toLowerCase().startsWith("steg ") && parseInt(moduleName.substr(5));
        var commonTasksList = commonTasks.map(function (task) { return ({
            id: task.id,
            name: task.name,
            url: task.url,
            courseName: subject.name,
            learningGoal: step && learningGoals.length > 0 ? moduleName + " - \u00F6vergripande" : moduleName
        }); });
        var learningGoalsList = learningGoals.map(function (learningGoal) { return ({
            name: learningGoal.name,
            learningTasks: learningGoal.tasks.map(function (task) { return ({
                id: task.id,
                name: task.name,
                url: task.url,
                courseName: subject.name,
                learningGoal: learningGoal.name
            }); })
        }); });
        if (step) {
            commonTasksList.forEach(function (task) { return task.step = step; });
            learningGoalsList.forEach(function (lg) { return lg.learningTasks.forEach(function (task) { return task.step = step; }); });
        }
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_6__["LanguageContext"].Provider, { value: { intl: intl } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_viewer_subcomponents_learning_goals_list__WEBPACK_IMPORTED_MODULE_3__["LearningGoalsList"], { commonTasks: commonTasksList, learningGoals: learningGoalsList }));
    };
    return _LearningTasks;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
var LearningTasks = Object(_utility_components_SetupLanguageIntl__WEBPACK_IMPORTED_MODULE_4__["setupIntl"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(_LearningTasks));


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

/***/ "./src/components/my-courses/my-courses.tsx":
/*!**************************************************!*\
  !*** ./src/components/my-courses/my-courses.tsx ***!
  \**************************************************/
/*! exports provided: MyCourses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCourses", function() { return MyCourses; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _repos_hidden_courses_repo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repos/hidden-courses-repo */ "./src/repos/hidden-courses-repo.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../access-control */ "./src/access-control/index.ts");




var MyCourses = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyCourses, _super);
    function MyCourses(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            courses: [],
            isLoading: true
        };
        _this.updateHiddenCoursesState = _this.updateHiddenCoursesState.bind(_this);
        return _this;
    }
    MyCourses.prototype.componentDidMount = function () {
        _repos_hidden_courses_repo__WEBPACK_IMPORTED_MODULE_2__["hiddenCoursesRepo"].subscribe(this.updateHiddenCoursesState, { fullCourse: false });
    };
    MyCourses.prototype.updateHiddenCoursesState = function (courses) {
        this.setState({ courses: courses, isLoading: false });
    };
    MyCourses.prototype.componentWillUnmount = function () {
        _repos_hidden_courses_repo__WEBPACK_IMPORTED_MODULE_2__["hiddenCoursesRepo"].unsubscribe(this.updateHiddenCoursesState);
    };
    MyCourses.prototype.getCourseUrl = function (courseId) {
        return Object(_access_control__WEBPACK_IMPORTED_MODULE_3__["preserveImpersonationQuery"])(this.props.viewCourseUrl, { courseId: courseId });
    };
    MyCourses.prototype.render = function () {
        var _this = this;
        var viewCourseUrl = this.props.viewCourseUrl;
        var _a = this.state, isLoading = _a.isLoading, error = _a.error, courses = _a.courses;
        var visibleCourses = this.state.courses.filter(function (c) { return c.visible; });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, isLoading ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: "lvl2 header" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", null, "Laddar..."))) : error ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { className: "lv12" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", null, "Kunde inte ladda kurser."))) : (visibleCourses.map(function (_a) {
            var name = _a.name, id = _a.id;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: id, className: "lvl2" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: _this.getCourseUrl(id) }, name)));
        }))));
    };
    return MyCourses;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/components/my-subjects/my-subjects-inner.tsx":
/*!**********************************************************!*\
  !*** ./src/components/my-subjects/my-subjects-inner.tsx ***!
  \**********************************************************/
/*! exports provided: MySubjectsInner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySubjectsInner", function() { return MySubjectsInner; });
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _globals_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals/db */ "./src/globals/db.ts");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../access-control */ "./src/access-control/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../globals/KED.cfg */ "./src/globals/KED.cfg.ts");
/* harmony import */ var kedbackend_observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kedbackend/observable */ "./kedbackend/observable.js");






var STATIC_COURSES = new kedbackend_observable__WEBPACK_IMPORTED_MODULE_5__["Emitter"]([{
        id: "https://ks.kunskapsporten.se/steg/matematik.4.47f6b323168938151ef8161c.html",
        name: "Matematik",
        type: "step-course",
        tags: ["static"],
    }]).toCollection(function (x) { return x; });
function MySubjectsInner(_a) {
    var user = _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["env"].currentUser;
    var schoolGrade = user.schoolGrade;
    var isPrimarySchoolStudent = ("" + user.schoolType).toLowerCase() !== "gymnasium";
    var subjectPlannerURL = _globals_KED_cfg__WEBPACK_IMPORTED_MODULE_4__["cfg"].KED_SUBJECT_PLANNER_URL;
    var schoolName = user.school;
    if (!schoolGrade || !isPrimarySchoolStudent) {
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("li", { className: "lvl2 header" },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("a", null, "Listning endast f\u00F6r grundskolan")));
    }
    var _b = _globals_db__WEBPACK_IMPORTED_MODULE_1__["db"].courseInstances
        .hasEdgesFrom([_globals_db__WEBPACK_IMPORTED_MODULE_1__["globalId"]])
        //.tags("active") // Workaround: Multiple criterias disables the use of useSP
        .cacheOptimized()
        .filter(function (c) { return c.tags.includes("active"); })
        .map(function (_a) {
        var id = _a.id, name = _a.name, type = _a.type, tags = _a.tags;
        return ({
            id: id,
            name: name,
            type: type,
            tags: tags
        });
    })
        .concat(STATIC_COURSES)
        .orderBy("name")
        .groupBy("type")
        .map(function (arraysByType) { return ({
        themeCourses: arraysByType["theme-course"],
        stepCourses: arraysByType["step-course"]
    }); }).read(), themeCourses = _b.themeCourses, stepCourses = _b.stepCourses;
    return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("li", { className: "lvl2 header" },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("a", null, "Stegkurser")),
        stepCourses.map(function (course) { return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("li", { key: course.id, className: "lvl2" },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("a", { href: Object(_access_control__WEBPACK_IMPORTED_MODULE_2__["preserveImpersonationQuery"])(course.tags.includes("static") ?
                    course.id :
                    subjectPlannerURL + "#/" + schoolName + "/courses/" + course.id, {}) }, course.name))); }),
        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("li", { className: "lvl2 header" },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("a", null, "Temakurser")),
        themeCourses
            .filter(function (_a) {
            var tags = _a.tags;
            return tags.includes("grade:" + schoolGrade);
        })
            .map(function (course) { return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("li", { key: course.id, className: "lvl2" },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("a", { href: Object(_access_control__WEBPACK_IMPORTED_MODULE_2__["preserveImpersonationQuery"])(course.tags.includes("static") ?
                    course.id :
                    subjectPlannerURL + "#/" + schoolName + "/courses/" + course.id, {}) }, course.name))); })));
}


/***/ }),

/***/ "./src/components/my-subjects/my-subjects.tsx":
/*!****************************************************!*\
  !*** ./src/components/my-subjects/my-subjects.tsx ***!
  \****************************************************/
/*! exports provided: MySubjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySubjects", function() { return MySubjects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../course-builder/sub-components/ellipsis-loader */ "./src/components/course-builder/sub-components/ellipsis-loader.tsx");
/* harmony import */ var _utility_components_observe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility-components/observe */ "./src/components/utility-components/observe.tsx");
/* harmony import */ var _my_subjects_inner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-subjects-inner */ "./src/components/my-subjects/my-subjects-inner.tsx");




function MySubjects(_a) {
    var viewCourseUrl = _a.viewCourseUrl;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_utility_components_observe__WEBPACK_IMPORTED_MODULE_2__["Observe"], { fallback: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_course_builder_sub_components_ellipsis_loader__WEBPACK_IMPORTED_MODULE_1__["EllipsisLoader"], null) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_my_subjects_inner__WEBPACK_IMPORTED_MODULE_3__["MySubjectsInner"], { viewCourseUrl: viewCourseUrl })));
}


/***/ }),

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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TutorsSelect, _super);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var edsStudents, students, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        var user = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, choosenStudent, { roles: ["USER"] });
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

/***/ "./src/components/tutors-view/index.ts":
/*!*********************************************!*\
  !*** ./src/components/tutors-view/index.ts ***!
  \*********************************************/
/*! exports provided: TutorsViewTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tutors_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutors-view */ "./src/components/tutors-view/tutors-view.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TutorsViewTest", function() { return _tutors_view__WEBPACK_IMPORTED_MODULE_0__["TutorsViewTest"]; });




/***/ }),

/***/ "./src/components/tutors-view/tutors-view.tsx":
/*!****************************************************!*\
  !*** ./src/components/tutors-view/tutors-view.tsx ***!
  \****************************************************/
/*! exports provided: TutorsViewTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorsViewTest", function() { return TutorsViewTest; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tutors_select_tutors_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tutors-select/tutors-select */ "./src/components/tutors-select/tutors-select.tsx");
/* harmony import */ var _ks_termplanner_termplanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ks-termplanner/termplanner */ "./src/components/ks-termplanner/termplanner.tsx");
/* harmony import */ var _kg_termplanner_kg_termplanner_tutored__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kg-termplanner/kg-termplanner-tutored */ "./src/components/kg-termplanner/kg-termplanner-tutored.tsx");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calendar */ "./src/components/calendar/index.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _weekplanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../weekplanner */ "./src/components/weekplanner/index.ts");
/* harmony import */ var _utility_components_tutorable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utility-components/tutorable-component */ "./src/components/utility-components/tutorable-component.tsx");









var TutorsViewTest = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TutorsViewTest, _super);
    function TutorsViewTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TutorsViewTest.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tutors_select_tutors_select__WEBPACK_IMPORTED_MODULE_2__["TutorsSelect"], null),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_tutorable_component__WEBPACK_IMPORTED_MODULE_8__["TutorableComponent"], { tutored: true, createComponent: function (env) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ks_termplanner_termplanner__WEBPACK_IMPORTED_MODULE_3__["KSTermPlanner"], { key: env.currentUser.mail, env: env, tutored: true, initialDate: new Date() });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_kg_termplanner_kg_termplanner_tutored__WEBPACK_IMPORTED_MODULE_4__["KGTermPlannerTutored"], null),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_tutorable_component__WEBPACK_IMPORTED_MODULE_8__["TutorableComponent"], { tutored: true, createComponent: function (env) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_weekplanner__WEBPACK_IMPORTED_MODULE_7__["WeekPlanner"], { key: env.currentUser.mail, env: env, viewCourseUrl: "https://www.svt.se" });
                } }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_tutorable_component__WEBPACK_IMPORTED_MODULE_8__["TutorableComponent"], { tutored: true, createComponent: function (env) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_calendar__WEBPACK_IMPORTED_MODULE_5__["Calendar"], { env: env, firstDay: moment__WEBPACK_IMPORTED_MODULE_6___default()().startOf('week').weekday(1), initialStartHour: 7, initialEndHour: 18, initialZoom: 0.75, numDays: 5 });
                } }));
    };
    return TutorsViewTest;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));



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
var ReactSharedInternals = Object.keys(react__WEBPACK_IMPORTED_MODULE_2___default.a).filter(function (key) { return key.includes("_INTERNALS"); }).map(function (k) { return react__WEBPACK_IMPORTED_MODULE_2___default.a[k]; })[0];
var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
kedbackend_observable__WEBPACK_IMPORTED_MODULE_1__["FiberContext"].addProvider(function () {
    // Here we actuall do useContext(FiberContext) but without logging to internal debug logs
    // Normally, react hooks are sensitive in which order they are called (useState(), etc)
    // but useContext() is not sensitive about that at all.
    // Still, the debug version of react will log calls to useHook() and throw if a render
    // doesn't use the same number of hooks every time. This check should not apply
    // to useHook() since it is not sensitive to the order in which it was called.
    // And we need to be able to call it from within contitional expressions / statements,
    // so we must bypass this debug logging here by accessing readContext() directly.
    return ReactCurrentDispatcher.current && ReactCurrentDispatcher.current.readContext(FiberContextReact);
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

/***/ "./src/components/utility-components/tutorable-component.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/utility-components/tutorable-component.tsx ***!
  \*******************************************************************/
/*! exports provided: TutorableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorableComponent", function() { return TutorableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _globals_KED_tutorEnv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals/KED.tutorEnv */ "./src/globals/KED.tutorEnv.ts");




var TutorableComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TutorableComponent, _super);
    function TutorableComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.onEnvUpdated = _this.onEnvUpdated.bind(_this);
        _this.state = {
            env: props.tutored ? null : _globals_KED_env__WEBPACK_IMPORTED_MODULE_2__["default"]
        };
        return _this;
    }
    TutorableComponent.prototype.componentDidMount = function () {
        if (this.props.tutored) {
            _globals_KED_tutorEnv__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe(this.onEnvUpdated);
        }
    };
    TutorableComponent.prototype.componentWillUnmount = function () {
        if (this.props.tutored) {
            _globals_KED_tutorEnv__WEBPACK_IMPORTED_MODULE_3__["default"].unsubscribe(this.onEnvUpdated);
        }
    };
    TutorableComponent.prototype.onEnvUpdated = function (env) {
        this.setState({ env: env });
    };
    TutorableComponent.prototype.render = function () {
        var env = this.state.env;
        if (!env)
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null);
        if (!env.kedBackendClient) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, "Laddar...");
        }
        //const {currentUser, edsClient, kedBackendClient, kgTermPlannerRepo} = env;
        //const {tutored} = this.props;
        return this.props.createComponent(env);
    };
    return TutorableComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



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
/* harmony import */ var _dialogs_open_link_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs/open-link-dialog */ "./src/components/utility-components/wysiwyg/dialogs/open-link-dialog.tsx");


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
        result: _dialogs_open_link_dialog__WEBPACK_IMPORTED_MODULE_1__["openLinkDialog"] /*() => {
          const url = window.prompt('Ange länkens URL')
          if (url) {
            var selected = document.getSelection();
            const elem = document.createElement('a');
            elem.href = url;
            elem.target="_blank";
            elem.appendChild(document.createTextNode(selected.toString()));
            exec('insertHTML', elem.outerHTML);
          }
        }*/
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
/* harmony import */ var _dialogs_open_link_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs/open-link-dialog */ "./src/components/utility-components/wysiwyg/dialogs/open-link-dialog.tsx");


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
        result: _dialogs_open_link_dialog__WEBPACK_IMPORTED_MODULE_1__["openLinkDialog"]
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

/***/ "./src/components/utility-components/wysiwyg/dialogs/link-dialog.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/dialogs/link-dialog.tsx ***!
  \***************************************************************************/
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
    var onSubmit = _a.onSubmit, onDelete = _a.onDelete, onCancel = _a.onCancel, props = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["onSubmit", "onDelete", "onCancel"]);
    var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.url), 2), url = _b[0], setUrl = _b[1];
    var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("_blank"), 2), target = _c[0], setTarget = _c[1]; //useState(props.target);
    var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.text), 2), text = _d[0], setText = _d[1];
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, props.url ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Redigera l\u00E4nk"], ["Redigera l\u00E4nk"]))) : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Skapa l\u00E4nk"], ["Skapa l\u00E4nk"])))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { style: { fontSize: "8pt" } },
                "F\u00F6lj l\u00E4nken: ",
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { href: url, style: { marginLeft: "12px" }, target: "_blank" }, url)),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_form_field_text_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["URL"], ["URL"]))), id: "LinkDialog:URL", placeholder: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ange URL"], ["Ange URL"]))), value: url, autoFocus: !url, autoSelect: !url, onChange: function (url) { return setUrl(url); } }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_form_field_text_input__WEBPACK_IMPORTED_MODULE_2__["TextInput"], { label: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Text"], ["Text"]))), id: "LinkDialog:Text", placeholder: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["L"])(templateObject_6 || (templateObject_6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["Ange l\u00E4nktext"], ["Ange l\u00E4nktext"]))), value: text, autoFocus: !!url, autoSelect: !!url, onChange: function (text) { return setText(text); } })),
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

/***/ "./src/components/utility-components/wysiwyg/dialogs/open-link-dialog.tsx":
/*!********************************************************************************!*\
  !*** ./src/components/utility-components/wysiwyg/dialogs/open-link-dialog.tsx ***!
  \********************************************************************************/
/*! exports provided: openLinkDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLinkDialog", function() { return openLinkDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _restore_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../restore-selection */ "./src/components/utility-components/wysiwyg/restore-selection.ts");
/* harmony import */ var _link_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link-dialog */ "./src/components/utility-components/wysiwyg/dialogs/link-dialog.tsx");



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
            elem.href = url;
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
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WysiwygInner, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props, { openDialog: dialogCtx && dialogCtx.openDialog, closeDialog: dialogCtx && dialogCtx.closeDialog }));
}
var WysiwygInner = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WysiwygInner, _super);
    function WysiwygInner(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { focusRect: null };
        _this.onClick = _this.onClick.bind(_this);
        _this.onFocus = _this.onFocus.bind(_this);
        _this.onBlur = _this.onBlur.bind(_this);
        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        _this.openDialog = props.openDialog;
        _this.closeDialog = props.closeDialog;
        return _this;
    }
    WysiwygInner.prototype.componentDidMount = function () {
        if (!this.props.readOnly) {
            this.contentDiv.onfocus = this.onFocus;
            this.contentDiv.onblur = this.onBlur;
            this.contentDiv.onclick = this.onClick;
            /*Array.from(this.contentDiv.querySelectorAll("img,a")).map(elem => (elem as (HTMLImageElement | HTMLAnchorElement)))
            .forEach(elem => {
              elem.tabIndex = 1;
              if (elem.tagName === 'A') {
                elem.onclick = this.onClick;
              } else {
                elem.onfocus = this.onFocus;
                elem.onblur = this.onBlur as any;
              }
            });*/
        }
        if (this.props.reportNumChars) {
            this.props.reportNumChars((this.contentDiv && this.contentDiv.innerText && this.contentDiv.innerText.length) || 0);
        }
    };
    WysiwygInner.prototype.componentDidUpdate = function () {
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
    WysiwygInner.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        //this.contentDiv.onfocus = this.onFocus;
        //this.contentDiv.onblur = this.onBlur;
        return !this.contentDiv ||
            nextState != this.state ||
            nextProps.readOnly !== this.props.readOnly ||
            Object(_wash_html__WEBPACK_IMPORTED_MODULE_3__["washHtml"])(nextProps.html) !== Object(_wash_html__WEBPACK_IMPORTED_MODULE_3__["washHtml"])(this.contentDiv.innerHTML);
    };
    WysiwygInner.prototype.triggerOnChange = function (html) {
        this.props.onChange && this.props.onChange(Object(_wash_html__WEBPACK_IMPORTED_MODULE_3__["washHtml"])(html));
    };
    WysiwygInner.prototype.onClick = function (ev) {
        var elem = ev.target;
        if (!elem || !elem.tagName)
            return;
        var maxIter = 10;
        while (--maxIter && elem && elem.tagName !== 'DIV' && elem.tagName !== 'A') {
            elem = elem.parentElement;
        }
        if (!elem || elem.tagName !== 'A')
            return;
        // Re-open the link dialog
        var linkAction = this.getActionsToUse().filter(function (a) { return a.name === "link"; })[0];
        if (linkAction) {
            Object(_restore_selection__WEBPACK_IMPORTED_MODULE_6__["selectAllText"])(elem);
            linkAction.result(ev, this);
        }
    };
    WysiwygInner.prototype.onFocus = function (ev) {
        var elem = ev.target;
        if (!elem || !elem.tagName)
            return;
        if (elem.tagName !== 'IMG')
            return;
        switch (elem.tagName) {
            /*case 'A':
              // Re-open the link dialog
              const linkAction = this.getActionsToUse().filter(a => a.name === "link")[0];
              if (linkAction) {
                selectAllText(elem);
                linkAction.result(ev, this);
              }
              break;*/
            case 'IMG':
                var contentParent = this.contentDiv.parentElement;
                var newState = {
                    focusRect: getRelatativeClientRect(contentParent, elem),
                };
                this.setState(newState);
                this.focusElem = elem;
                break;
        }
    };
    WysiwygInner.prototype.onBlur = function (ev) {
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
    WysiwygInner.prototype.makeClickable = function (elem) {
        elem.tabIndex = 1;
    };
    WysiwygInner.prototype.onMouseDown = function (ev) {
        if ((ev.target.className || "").split(' ').indexOf(classes.focuspoint) >= 0) {
            var corner = this.getRectCorner(ev);
            this.corner = corner;
            this.resizeStartX = ev.clientX;
        }
    };
    WysiwygInner.prototype.onMouseMove = function (ev) {
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
    WysiwygInner.prototype.onMouseUp = function (ev) {
        if (this.corner && this.state.focusRect && this.focusElem) {
            this.corner = null;
            this.triggerOnChange(this.contentDiv.innerHTML);
        }
    };
    WysiwygInner.prototype.getRectCorner = function (ev) {
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
    WysiwygInner.prototype.execImageEditAction = function (cmd) {
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
    WysiwygInner.prototype.getActionsToUse = function () {
        var _this = this;
        var defaultActions = this.props.defaultActions || _actions__WEBPACK_IMPORTED_MODULE_5__["default"];
        var actionsToUse = this.props.actions ? this.props.actions.map(function (action) {
            return typeof action === 'string' ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ name: action }, defaultActions[action]) :
                defaultActions[action.name] ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, defaultActions[action.name], action) :
                    action;
        })
            : Object.keys(defaultActions).map(function (action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ name: action }, defaultActions[action])); });
        if (this.state.focusRect) {
            actionsToUse = actionsToUse.concat(Object(_image_edit_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(function (cmd) { return _this.execImageEditAction(cmd); }));
        }
        return actionsToUse;
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
                focusRect && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: function (div) { return _this.focusRectDiv = div; }, className: classes.focusrect, tabIndex: 1, onBlur: function (ev) { return _this.setState({ focusRect: null }); }, style: {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WeekNotebook, _super);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var maxIterations;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utility_components_wysiwyg__WEBPACK_IMPORTED_MODULE_6__["Wysiwyg"], { actions: [
                        "bold",
                        "italic",
                        "underline",
                        "strikethrough",
                        "olist",
                        "ulist",
                        "outdent",
                        "indent",
                        "line"
                    ], defaultActions: this.getTranslatedActions(intl), html: isLoading ? "<div></div>" : notes.substr(0, MAX_NOTE_LENGTH), onChange: !isLoading && (function (html) {
                        _this.setState({
                            notes: html.substr(0, MAX_NOTE_LENGTH),
                            everEdited: true
                        });
                        _this.autoSaver.triggerChange(500);
                    }) }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null),
                error ?
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { className: "error" }, error) :
                    showLoadingProgress ?
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], { id: "common.loading", defaultMessage: "Laddar..." }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_9__["Spinner"], null)) :
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
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-calendar", "aria-hidden": "true" }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], { id: "task.setDeadlineLabel", defaultMessage: "Ange deadline..." })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_utility_components_form_field__WEBPACK_IMPORTED_MODULE_7__["FormField"], { label: intl.formatMessage({ id: 'task.subTasks', defaultMessage: 'Underuppgifter' }) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "learningGoalTasks" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "taskContainer" }, subTasks && subTasks.map(function (subTask) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: subTask.id, className: "align-horizontal" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "horizontalItem top" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { onClick: function () { return _this.editSubTask(subTask); }, href: "#" }, subTask.name))); }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "align-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "top" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { id: "EditUserTask:addSubTask", className: "btn", onClick: function () { return _this.addSubTask(); } },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-plus", "aria-hidden": "true" }),
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
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-trash" })))),
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
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { title: moment__WEBPACK_IMPORTED_MODULE_6___default()(userTask.deadline).format("YYYY-MM-DD"), className: "fa fa-calendar", "aria-hidden": "true", onClick: function () { } }))),
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
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-plus", "aria-hidden": "true" }),
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
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-angle-left", "aria-hidden": "true" })),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn", onClick: function () { return _this.nextWeek(); } },
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-angle-right", "aria-hidden": "true" })))))),
                taskSets.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                taskSets.map(function (props) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_user_tasks_box__WEBPACK_IMPORTED_MODULE_2__["UserTasksBox"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: props.courseName }, props, { courseName: props.courseName, learningGoals: props.learningGoals, viewCourseUrl: _this.props.viewCourseUrl, openCourses: _this.state.openCourses, addOwnTask: function (courseName, learningGoalName) { return _this.openAddOwnTaskDialog(courseName, learningGoalName); }, setIsOpen: _this.setIsOpen.bind(_this), setTaskDone: _this.setTaskDone.bind(_this), setSubTaskDone: _this.setSubTaskDone.bind(_this), editTask: function (task) { return _this.editTask(task); }, editSubTask: function (task, subTask) { return _this.editSubTask(task, subTask); }, removeLearningGoal: function (lg) { return _this.removeLearningGoal(lg); }, displayProgress: showProgressCharts, progressData: chartTasks.subjectData[props.courseName] }));
                }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                isLoading ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_course_builder_sub_components_spinner__WEBPACK_IMPORTED_MODULE_12__["Spinner"], null) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn", onClick: function (ev) { return _this.openAddGoalDialog(); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-list-alt", "aria-hidden": "true" }),
                        isGymnasiumStudent ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_17__["FormattedMessage"], { id: "weekplanner.learningGoalGymnasium", defaultMessage: "Uppgift" }) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_17__["FormattedMessage"], { id: "weekplanner.learningGoalPrimary", defaultMessage: "Eget l\u00E4randem\u00E5l" })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "btn", style: isCopyingTasks ? { opacity: 0.5 } : undefined, onClick: function (ev) { return (!isCopyingTasks) && _this.copyFromPreviousWeek(); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-clone", "aria-hidden": "true" }),
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
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-floppy-o", "aria-hidden": "true" }),
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

/***/ "./src/globals/KED.tutorEnv.ts":
/*!*************************************!*\
  !*** ./src/globals/KED.tutorEnv.ts ***!
  \*************************************/
/*! exports provided: TutorEnv, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorEnv", function() { return TutorEnv; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ked */ "./src/globals/ked.ts");


var TutorEnv = /** @class */ (function () {
    function TutorEnv() {
        this.subscribers = [];
        this.env = null;
        this.version = 1;
    }
    //promise: Promise<Env | null> = Promise.resolve(null);
    TutorEnv.prototype.subscribe = function (subscriber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.subscribers.push(subscriber);
                subscriber(this.env);
                return [2 /*return*/];
            });
        });
    };
    TutorEnv.prototype.unsubscribe = function (subscriber) {
        this.subscribers = this.subscribers.filter(function (s) { return s !== subscriber; });
    };
    TutorEnv.prototype.notifySubscribers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.subscribers.forEach(function (s) { return s(_this.env); });
                return [2 /*return*/];
            });
        });
    };
    TutorEnv.prototype.setNewEnv = function (user, envGetter) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var version, env;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        version = ++this.version;
                        this.env = { currentUser: user, tutored: true };
                        this.notifySubscribers(); // Make subscriber display "Loading... user name"
                        return [4 /*yield*/, envGetter().catch(function (err) { return ({
                                currentUser: user,
                                tutored: true,
                                error: err
                            }); })];
                    case 1:
                        env = _a.sent();
                        if (version === this.version) {
                            // No one else has called setEnv during this call.
                            ++this.version;
                            this.env = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, env, { tutored: true });
                            this.notifySubscribers(); // Make subscribers display the data.
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return TutorEnv;
}());

if (!_ked__WEBPACK_IMPORTED_MODULE_1__["default"].tutorEnv)
    _ked__WEBPACK_IMPORTED_MODULE_1__["default"].tutorEnv = new TutorEnv();
/* harmony default export */ __webpack_exports__["default"] = (_ked__WEBPACK_IMPORTED_MODULE_1__["default"].tutorEnv);


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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](KGTermPlannerRepo, _super);
    function KGTermPlannerRepo(getClient, getCurrentUser) {
        var _this = this;
        var currentUser = getCurrentUser();
        var now = new Date();
        var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Object(_utils_school_moment__WEBPACK_IMPORTED_MODULE_3__["getTermStarEndDate"])(now, now.getMonth() >= 7), 2), termStart = _a[0], termEnd = _a[1];
        _this = _super.call(this, {
            getClient: getClient,
            optimistic: true,
            table: "weekplans",
            user: currentUser ? currentUser.mail : "",
            getQueryOptions: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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

/***/ "./src/repos/ks-termplanner-repo-instance.ts":
/*!***************************************************!*\
  !*** ./src/repos/ks-termplanner-repo-instance.ts ***!
  \***************************************************/
/*! exports provided: termPlannerRepoKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "termPlannerRepoKS", function() { return termPlannerRepoKS; });
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _ks_termplanner_repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ks-termplanner-repo */ "./src/repos/ks-termplanner-repo.ts");


var termPlannerRepoKS = new _ks_termplanner_repo__WEBPACK_IMPORTED_MODULE_1__["KSTermPlannerRepo"](function () { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].kedBackendClient; }, function () { return _globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].currentUser; });
_globals_KED_env__WEBPACK_IMPORTED_MODULE_0__["default"].ksTermPlannerRepo = termPlannerRepoKS;


/***/ }),

/***/ "./src/repos/ks-termplanner-repo.ts":
/*!******************************************!*\
  !*** ./src/repos/ks-termplanner-repo.ts ***!
  \******************************************/
/*! exports provided: KSTermPlannerRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSTermPlannerRepo", function() { return KSTermPlannerRepo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ked_repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ked-repo */ "./src/repos/ked-repo.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



var KSTermPlannerRepo = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](KSTermPlannerRepo, _super);
    function KSTermPlannerRepo(getClient, getCurrentUser) {
        var _this = this;
        var currentUser = getCurrentUser();
        _this = _super.call(this, {
            getClient: getClient,
            optimistic: true,
            table: "weekplans-ks",
            user: currentUser ? currentUser.mail : "",
            getQueryOptions: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var startDateValue, endDateValue;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    startDateValue = (this.startDate && this.startDate.valueOf()) || moment__WEBPACK_IMPORTED_MODULE_2___default()().valueOf();
                    endDateValue = (this.endDate && this.endDate.valueOf()) || moment__WEBPACK_IMPORTED_MODULE_2___default()().valueOf();
                    return [2 /*return*/, {
                            from: startDateValue,
                            to: endDateValue,
                            role: "USER"
                        }];
                });
            }); }
        }) || this;
        return _this;
    }
    KSTermPlannerRepo.prototype.refreshData = function (dateInterval) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](dateInterval, 2), this.startDate = _a[0], this.endDate = _a[1];
                        return [4 /*yield*/, this.mem.refreshFromServer()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return KSTermPlannerRepo;
}(_ked_repo__WEBPACK_IMPORTED_MODULE_1__["KedRepo"]));



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
                    // Additional ACL: Let employees on same school have read access to it.
                    // This currently only applies to tasks that refer to course tasks (not own tasks!)
                    new kedbackend_client__WEBPACK_IMPORTED_MODULE_5__["DocumentAccess"]("schoolRole", _this.getCurrentUser().school + "/EMPLOYEE", "R")
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WeekNotesRepo, _super);
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
            getQueryOptions: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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

/***/ "./src/test/components.ts":
/*!********************************!*\
  !*** ./src/test/components.ts ***!
  \********************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/calendar */ "./src/components/calendar/index.tsx");
/* harmony import */ var _components_ks_goals_goals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ks-goals/goals */ "./src/components/ks-goals/goals.tsx");
/* harmony import */ var _components_latest_assessments_latest_assessments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/latest-assessments/latest-assessments */ "./src/components/latest-assessments/latest-assessments.tsx");
/* harmony import */ var _components_kg_termplanner_kg_termplanner_self__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/kg-termplanner/kg-termplanner-self */ "./src/components/kg-termplanner/kg-termplanner-self.tsx");
/* harmony import */ var _components_kg_termplanner_kg_termplanner_tutored__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/kg-termplanner/kg-termplanner-tutored */ "./src/components/kg-termplanner/kg-termplanner-tutored.tsx");
/* harmony import */ var _components_ks_termplanner_termplanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ks-termplanner/termplanner */ "./src/components/ks-termplanner/termplanner.tsx");
/* harmony import */ var _components_ks_termplanner_ks_termplanner_tutored__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ks-termplanner/ks-termplanner-tutored */ "./src/components/ks-termplanner/ks-termplanner-tutored.tsx");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var _components_weekplanner_weekplanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/weekplanner/weekplanner */ "./src/components/weekplanner/weekplanner.tsx");
/* harmony import */ var _components_learning_tasks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/learning-tasks */ "./src/components/learning-tasks/index.tsx");
/* harmony import */ var _components_my_courses_my_courses__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/my-courses/my-courses */ "./src/components/my-courses/my-courses.tsx");
/* harmony import */ var _components_list_courses_list_courses__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/list-courses/list-courses */ "./src/components/list-courses/list-courses.tsx");
/* harmony import */ var _components_week_notebook__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/week-notebook */ "./src/components/week-notebook/index.ts");
/* harmony import */ var _components_tutors_select_tutors_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/tutors-select/tutors-select */ "./src/components/tutors-select/tutors-select.tsx");
/* harmony import */ var _components_tutors_view__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/tutors-view */ "./src/components/tutors-view/index.ts");
/* harmony import */ var _components_my_subjects_my_subjects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/my-subjects/my-subjects */ "./src/components/my-subjects/my-subjects.tsx");

















var components = {
    LatestAssessments: {
        component: _components_latest_assessments_latest_assessments__WEBPACK_IMPORTED_MODULE_3__["LatestAssessments"],
        props: function () { return ({
            locale: navigator.language,
            limit: 15
        }); }
    },
    KSGoals: {
        component: _components_ks_goals_goals__WEBPACK_IMPORTED_MODULE_2__["KSGoals"],
        props: function () { return ({}); }
    },
    KSTermPlanner: {
        component: _components_ks_termplanner_termplanner__WEBPACK_IMPORTED_MODULE_6__["KSTermPlanner"],
        props: function () { return ({
            env: _globals_KED_env__WEBPACK_IMPORTED_MODULE_8__["default"],
            tutored: false,
            initialDate: new Date(),
        }); }
    },
    KSTermPlannerTutored: {
        component: _components_ks_termplanner_ks_termplanner_tutored__WEBPACK_IMPORTED_MODULE_7__["KSTermPlannerTutored"],
        props: function () { return ({}); }
    },
    KGTermPlanner: {
        component: _components_kg_termplanner_kg_termplanner_self__WEBPACK_IMPORTED_MODULE_4__["KGTermPlannerSelf"],
        props: function () { return ({}); }
    },
    KGTermPlannerTutored: {
        component: _components_kg_termplanner_kg_termplanner_tutored__WEBPACK_IMPORTED_MODULE_5__["KGTermPlannerTutored"],
        props: function () { return ({}); }
    },
    WeekPlanner: {
        component: _components_weekplanner_weekplanner__WEBPACK_IMPORTED_MODULE_9__["WeekPlanner"],
        props: function () { return ({
            viewCourseUrl: 'http://svt.se',
            env: _globals_KED_env__WEBPACK_IMPORTED_MODULE_8__["default"]
        }); }
    },
    TutorsView: {
        component: _components_tutors_view__WEBPACK_IMPORTED_MODULE_15__["TutorsViewTest"],
        props: function () { return ({}); }
    },
    TutorsSelect: {
        component: _components_tutors_select_tutors_select__WEBPACK_IMPORTED_MODULE_14__["TutorsSelect"],
        props: function () { return ({}); }
    },
    Calendar: {
        component: _components_calendar__WEBPACK_IMPORTED_MODULE_1__["Calendar"],
        props: function () { return ({
            firstDay: moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf('week').weekday(1),
            numDays: 5,
            initialStartHour: 7,
            initialEndHour: 18,
            initialZoom: 0.75
        }); }
    },
    /*CourseOverview: {
      component: CourseOverview,
      props: ()=>({
        locale: navigator.language,
      })
    },*/
    LearningTasks: {
        component: _components_learning_tasks__WEBPACK_IMPORTED_MODULE_10__["LearningTasks"],
        props: function () { return ({
            apiPath: localStorage.getItem('selectedLearningModuleUrl'),
            pageId: "dummy"
        }); }
    },
    MyCourses: {
        component: _components_my_courses_my_courses__WEBPACK_IMPORTED_MODULE_11__["MyCourses"],
        props: function () { return ({
            viewCourseUrl: 'https://kg-test.sitevision.se/courseviewer'
        }); }
    },
    MySubjects: {
        component: _components_my_subjects_my_subjects__WEBPACK_IMPORTED_MODULE_16__["MySubjects"],
        props: function () { return ({
            viewCourseUrl: 'https://kg-test.sitevision.se/courseviewer'
        }); }
    },
    ListCourses: {
        component: _components_list_courses_list_courses__WEBPACK_IMPORTED_MODULE_12__["ListCourses"],
        props: function () { return ({
            viewCourseUrl: 'https://kg-test.sitevision.se/courseviewer'
        }); }
    },
    WeekNotes: {
        component: _components_week_notebook__WEBPACK_IMPORTED_MODULE_13__["WeekNotebook"],
        props: function () { return ({}); }
    }
};


/***/ }),

/***/ "./src/test/data/learningModules.ts":
/*!******************************************!*\
  !*** ./src/test/data/learningModules.ts ***!
  \******************************************/
/*! exports provided: learningModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "learningModules", function() { return learningModules; });
var learningModules = [{
        moduleName: "Steg 22",
        subject: {
            name: "Spanska",
            course: {
                name: "Spanska",
                url: "/steg/spanska.4.4ae4e9d2159ef4e0120ad6d3.html"
            }
        },
        commonTasks: [],
        learningGoals: [{
                name: "Aktiviteter i hemmet",
                tasks: [{
                        name: "Aktiviteter i hemmet hos en peruansk familj",
                        url: "/steg/spanska/block5/steg22/uppgifter/aktiviteterihemmet/aktiviteterihemmethosenperuanskfamilj.4.4ae4e9d2159ef4e0120adb40.html"
                    }, {
                        name: "Uppgift till aktiviteter i hemmet",
                        url: "/steg/spanska/block5/steg22/uppgifter/aktiviteterihemmet/uppgifttillaktiviteterihemmet.4.4ae4e9d2159ef4e0120af887.html"
                    }]
            }, {
                name: "Familjeliv",
                tasks: [{
                        name: "Vad pågår i din familj nu?",
                        url: "/steg/spanska/block5/steg22/uppgifter/familjeliv/vadpagaridinfamiljnu.4.4ae4e9d2159ef4e0120b25e9.html"
                    }, {
                        name: "Uppgift familjeliv",
                        url: "/steg/spanska/block5/steg22/uppgifter/familjeliv/uppgiftfamiljeliv.4.4ae4e9d2159ef4e0120af73a.html"
                    }]
            }, {
                name: "Samtal om familjeliv",
                tasks: [{
                        name: "Samtalsdokument familjeliv",
                        url: "/steg/spanska/block5/steg22/uppgifter/samtalomfamiljeliv/samtalsdokumentfamiljeliv.4.4ae4e9d2159ef4e01209fe03.html"
                    }, {
                        name: "Samtalskarta-familjeliv",
                        url: "/steg/spanska/block5/steg22/uppgifter/samtalomfamiljeliv/samtalskartafamiljeliv.4.4ae4e9d2159ef4e0120af6fd.html"
                    }]
            }
        ]
    }, {
        moduleName: "Teknik",
        subject: {
            name: "Teknik",
            course: {
                name: "Tråd 5",
                url: "/kurser/arskurs8/trad5.19.2d4f4005159f895477a15cc.html"
            }
        },
        commonTasks: [{
                name: "Tryck ",
                url: "/kurser/arskurs8/trad5/forberedelse/teknik/uppgifter/tryck.4.4ae4e9d2159ef4e01209dcde.html"
            }, {
                name: "Diskussionsfrågor till industriella revolutionen",
                url: "/kurser/arskurs8/trad5/forberedelse/teknik/uppgifter/diskussionsfragortillindustriellarevolutionen.4.4ae4e9d2159ef4e0120a6fab.html"
            }, {
                name: "Hur fungerar en ångmaskin",
                url: "/kurser/arskurs8/trad5/forberedelse/teknik/uppgifter/hurfungerarenangmaskin.4.4ae4e9d2159ef4e0120a1309.html"
            }, {
                name: "Ångmaskinens betydelse",
                url: "/kurser/arskurs8/trad5/forberedelse/teknik/uppgifter/angmaskinensbetydelse.4.4ae4e9d2159ef4e0120a3deb.html"
            }],
        learningGoals: [{
                name: "Identifiera och analysera ångmaskinen utifrån ändamålsenlighet och funktion,"
            }, {
                name: "använda teknikområdets begrepp och uttrycksform"
            }, {
                name: "värdera konsekvenser av ångmaskinen för individ, samhälle och miljö, och"
            }, {
                name: "analysera drivkrafter bakom teknikutveckling runt ångmaskinen och hur tekniken har förändratsöver tid."
            }]
    }];


/***/ }),

/***/ "./src/test/data/learningModules2.ts":
/*!*******************************************!*\
  !*** ./src/test/data/learningModules2.ts ***!
  \*******************************************/
/*! exports provided: learningPageUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "learningPageUrls", function() { return learningPageUrls; });
var learningPageUrls = [
    "testdata/learning-tasks/amnesintegrerad.json",
    "testdata/learning-tasks/loopad.json",
    "testdata/learning-tasks/steg-larandemal.json",
    "testdata/learning-tasks/steg-matte.json",
    "testdata/learning-tasks/vanlig-kurs.json"
];


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

/***/ "./src/test/testpage.tsx":
/*!*******************************!*\
  !*** ./src/test/testpage.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _test_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-config */ "./src/test/test-config.ts");
/* harmony import */ var _set_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-current-user */ "./src/test/set-current-user.ts");
/* harmony import */ var _global_setters_set_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global-setters/set-all */ "./src/global-setters/set-all.ts");
/* harmony import */ var _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals/KED.env */ "./src/globals/KED.env.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_learningModules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/learningModules */ "./src/test/data/learningModules.ts");
/* harmony import */ var _data_learningModules2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/learningModules2 */ "./src/test/data/learningModules2.ts");
/* harmony import */ var _components_weekplanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/weekplanner */ "./src/components/weekplanner/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components */ "./src/test/components.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_choose_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/choose-user */ "./src/test/utils/choose-user.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_utility_components_SetupLanguageIntl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/utility-components/SetupLanguageIntl */ "./src/components/utility-components/SetupLanguageIntl.tsx");
/* harmony import */ var _components_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/utility-components/LanguageContext */ "./src/components/utility-components/LanguageContext.tsx");

// <Initialization>

 // Emulate server-side script to set current user
 // Client-side initialization
// </Initialization>











var _TestPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](_TestPage, _super);
    function _TestPage(props) {
        var _this = _super.call(this, props) || this;
        var selectedComp = localStorage.getItem("selectedComponent") || Object.keys(_components__WEBPACK_IMPORTED_MODULE_9__["components"])[0];
        var selectCompProps = _components__WEBPACK_IMPORTED_MODULE_9__["components"][selectedComp].props();
        _this.state = {
            selectedComponent: selectedComp,
            selectedLearningModule: parseInt(localStorage.getItem("selectedLearningModule") || "0"),
            selectedLearningModuleUrl: localStorage.getItem("selectedLearningModuleUrl") || "",
            selectedComponentReal: _components__WEBPACK_IMPORTED_MODULE_9__["components"][selectedComp].component,
            selectedCompProps: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, selectCompProps)
        };
        return _this;
    }
    _TestPage.prototype.componentDidUpdate = function () {
        this.renderTestComponent();
    };
    _TestPage.prototype.componentDidMount = function () {
        //this.renderTestComponent();
    };
    _TestPage.prototype.renderTestComponent = function () {
        _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].learningModuleTasks = _data_learningModules__WEBPACK_IMPORTED_MODULE_6__["learningModules"][this.state.selectedLearningModule];
        jquery__WEBPACK_IMPORTED_MODULE_10___default()(this.componentArea).html("");
        if (_globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser) {
            var selected = _components__WEBPACK_IMPORTED_MODULE_9__["components"][this.state.selectedComponent] ||
                _components__WEBPACK_IMPORTED_MODULE_9__["components"][Object.keys(_components__WEBPACK_IMPORTED_MODULE_9__["components"])[0]];
            this.setState({
                selectedComponentReal: selected.component,
                selectedCompProps: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, selected.props())
            });
        }
    };
    _TestPage.prototype.render = function () {
        var _this = this;
        var SelectedComponent = this.state.selectedComponentReal;
        var intl = this.props.intl;
        return _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"].currentUser ?
            react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_utility_components_LanguageContext__WEBPACK_IMPORTED_MODULE_14__["LanguageContext"].Provider, { value: { intl: intl } },
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: "test-page" },
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: "header" },
                        react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: "test-selects" },
                            react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("form", null,
                                react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("h4", null,
                                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], { id: "test.pageDescription", defaultMessage: "Testsida f\u00F6r komponenter till nya startsidan" })),
                                react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("table", null,
                                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("tbody", null,
                                        react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("tr", null,
                                            react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("td", null,
                                                react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("label", { htmlFor: "testComponent" },
                                                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_12__["FormattedMessage"], { id: "test.chooseComponentLabel", defaultMessage: "Komponent" }))),
                                            react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("td", null,
                                                react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("select", { id: "testComponent", value: this.state.selectedComponent, onChange: function (ev) {
                                                        _this.setState({ selectedComponent: ev.target.value });
                                                        localStorage.setItem("selectedComponent", ev.target.value);
                                                        window.location.reload();
                                                    } }, Object.keys(_components__WEBPACK_IMPORTED_MODULE_9__["components"]).map(function (c) { return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("option", { key: c, value: c }, c); })))),
                                        this.state.selectedComponent === 'LearningGoalsAndTasks' && react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("tr", null,
                                            react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("td", null,
                                                react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("label", { htmlFor: "testLearningModule" }, "Kursmodul")),
                                            react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("td", null,
                                                react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("select", { id: "testLearningModule", value: this.state.selectedLearningModule, onChange: function (ev) {
                                                        localStorage.setItem("selectedLearningModule", ev.target.value);
                                                        window.location.reload();
                                                    } }, _data_learningModules__WEBPACK_IMPORTED_MODULE_6__["learningModules"].map(function (lm, i) {
                                                    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("option", { key: i, value: i }, lm.subject.course.name + "/" +
                                                        lm.subject.name + "/" +
                                                        lm.moduleName);
                                                })))),
                                        this.state.selectedComponent === 'LearningTasks' && react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("tr", null,
                                            react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("td", null,
                                                react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("label", { htmlFor: "testLearningModuleUrl" }, "Kursmodul")),
                                            react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("td", null,
                                                react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("select", { id: "testLearningModuleUrl", value: this.state.selectedLearningModuleUrl, onChange: function (ev) {
                                                        localStorage.setItem("selectedLearningModuleUrl", ev.target.value);
                                                        window.location.reload();
                                                    } }, _data_learningModules2__WEBPACK_IMPORTED_MODULE_7__["learningPageUrls"].map(function (url, i) {
                                                    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("option", { key: i, value: url }, url);
                                                }))))))))),
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("hr", null),
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: "componentRow" },
                        react__WEBPACK_IMPORTED_MODULE_5__["createElement"](SelectedComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state.selectedCompProps)),
                        react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: "componentArea", ref: function (div) { return _this.componentArea = div; } }),
                        react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: "week-planner" }, this.state.selectedComponent === 'LearningTasks' &&
                            react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_components_weekplanner__WEBPACK_IMPORTED_MODULE_8__["WeekPlanner"], { viewCourseUrl: "http://www.svt.se/nyheter", env: _globals_KED_env__WEBPACK_IMPORTED_MODULE_4__["default"] }))))) : react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_utils_choose_user__WEBPACK_IMPORTED_MODULE_11__["ChooseUser"], null);
    };
    return _TestPage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]));
var TestPage = Object(_components_utility_components_SetupLanguageIntl__WEBPACK_IMPORTED_MODULE_13__["setupIntl"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_12__["injectIntl"])(_TestPage));
/* harmony default export */ __webpack_exports__["default"] = (TestPage);


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

/***/ "./src/translations/en.json":
/*!**********************************!*\
  !*** ./src/translations/en.json ***!
  \**********************************/
/*! exports provided: addeditsubtask.deleteSubtask, addeditsubtask.editSubtask, addeditsubtask.nameLabel, addeditsubtask.addSubtask, calendar.currentDate, calendar.fullDayEventLocation, calendar.loadCalendarEvents, calendar.loadingCalendar, calendar.weekNumber, common.addDescriptionPlhd, common.cancel, common.changesNotSavedErrorOccured, common.changesNotSavedUnauthorized, common.descriptionLabel, common.errorSavingData, common.linkLabel, common.loading, common.nameLabel, common.save, common.saved, common.saving, common.remove, customTask.addWorkGoalPrimarySchoolTitle, customTask.addWorkGoalGymnasiumSchoolTitle, customTask.enterNamePlhd, learningGoalsLost.overall, task.addSubtask, task.editTask, task.editWorkGoals, task.enterTaskNamePlhd, task.removeDeadline, task.removeThisTask, task.removeWorkGoals, task.setDeadline, task.setDeadlineLabel, task.subTasks, task.targetNameLabel, task.taskNameLabel, task.whatShouldYouDoPlhd, taskList.nextWeekTask, taskList.lastWeekTask, taskList.currentWeekTask, taskList.removeTaskFromWeeklyPlanning, taskList.addTaskToWeeklyPlanning, termplanner.comments, termplanner.course, termplanner.edsGoalGrades, termplanner.englishLanguage, termplanner.finalStep, termplanner.firstTerm, termplanner.hindiLanguage, termplanner.ict, termplanner.loadingTermplanner, termplanner.maths, termplanner.modernLanguage, termplanner.noFinalStepAvailable, termplanner.secondTerm, termplanner.termPlanning, termplanner.weekNumber, termplanner.chartsBoxTitle, termplanner.yoga, tutorNoteDialog.weekComment, test.chooseComponentLabel, test.pageDescription, url.remove, userTasks.addLearningGoal, userTasks.deleteLearningGoal, userTasks.primarySchoolGoals, userTasks.gymnasiumSchoolGoals, weekNotebook.title, weekplanner.addLearningGoalGymnasiumSchool, weekplanner.addLearningGoalPrimarySchool, weekplanner.addLearningGoalPrimarySchoolTitle, weekplanner.addLearningGoalGymnasiumSchoolTitle, weekplanner.confirmRemoveLearningObjectives, weekplanner.copyPreviousWeekTaks, weekplanner.emptyLearningGoalErr, weekplanner.evaluation, weekplanner.evaluationDescription, weekplanner.learningGoalPrimary, weekplanner.learningGoalGymnasium, weekplanner.logBook, weekplanner.nameCannotBeEmpty, weekplanner.nameMustNotBeEmpty, weekplanner.strategy, weekplanner.strategyAndEvaluation, weekplanner.strategyDescription, weekplanner.weekNumber, wysiwyg.bold, wysiwyg.code, wysiwyg.heading1, wysiwyg.heading2, wysiwyg.heading3, wysiwyg.image, wysiwyg.imagePromptMsg, wysiwyg.italic, wysiwyg.line, wysiwyg.link, wysiwyg.olist, wysiwyg.paragraph, wysiwyg.quote, wysiwyg.strikethrough, wysiwyg.ulist, wysiwyg.underline, teacherView.coursesViewTitle, teacherView.assignmentsViewTitle, teacherView.assignmentsViewDescription, teacherView.noUploadedAssignmentsForModule, teacherView.assignmentStudentName, teacherView.assignmentFileName, teacherView.assignmentSubmittedAt, teacherView.assignmentReport, teacherView.assignmentGrade, teacherView.noTaskAssignments, teacherView.notSubmittedAssignments, teacherView.remindBtn, teacherView.filterByStudygroupsPlaceholder, teacherView.emailRemindersSentMsg, teacherView.sendEmailAtLeastOneRecipientErr, teacherView.emailReminderInProgress, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"addeditsubtask.deleteSubtask\":\"Delete subtask\",\"addeditsubtask.editSubtask\":\"Edit subtask\",\"addeditsubtask.nameLabel\":\"Name of subtask\",\"addeditsubtask.addSubtask\":\"Add sub-task\",\"calendar.currentDate\":\"Week {week}, {year}\",\"calendar.fullDayEventLocation\":\"Place: {location}\",\"calendar.loadCalendarEvents\":\"Load calendar events...\",\"calendar.loadingCalendar\":\"Loading calendars... (listing...)\",\"calendar.weekNumber\":\"W{weekNumber}\",\"common.addDescriptionPlhd\":\"Add description...\",\"common.cancel\":\"Cancel\",\"common.changesNotSavedErrorOccured\":\"An error occured while saving data. Your changes were not saved.\",\"common.changesNotSavedUnauthorized\":\"The changes were not saved due to insufficient authority\",\"common.descriptionLabel\":\"Description\",\"common.errorSavingData\":\"An error occured while saving data.\",\"common.linkLabel\":\"Link\",\"common.loading\":\"Loading...\",\"common.nameLabel\":\"Name\",\"common.save\":\" Save\",\"common.saved\":\" Saved\",\"common.saving\":\"Saving\",\"common.remove\":\"Delete\",\"customTask.addWorkGoalPrimarySchoolTitle\":\"Add own working goal\",\"customTask.addWorkGoalGymnasiumSchoolTitle\":\"Add own working goal\",\"customTask.enterNamePlhd\":\"Enter Name...\",\"learningGoalsLost.overall\":\"Overall\",\"task.addSubtask\":\"Add subtask\",\"task.editTask\":\"Edit task\",\"task.editWorkGoals\":\"Edit working goal\",\"task.enterTaskNamePlhd\":\"Enter the name of task...\",\"task.removeDeadline\":\"Delete deadline\",\"task.removeThisTask\":\"Delete this task\",\"task.removeWorkGoals\":\"Delete working goal\",\"task.setDeadline\":\"Set deadline\",\"task.setDeadlineLabel\":\"Set deadline...\",\"task.subTasks\":\"Subtasks\",\"task.targetNameLabel\":\"Name of working goal\",\"task.taskNameLabel\":\"Name of task\",\"task.whatShouldYouDoPlhd\":\"What should you do?\",\"taskList.nextWeekTask\":\"for next week (w{week})\",\"taskList.lastWeekTask\":\"for last week (w{week})\",\"taskList.currentWeekTask\":\"for week {week}\",\"taskList.removeTaskFromWeeklyPlanning\":\"Delete task from your weekly planning {week}\",\"taskList.addTaskToWeeklyPlanning\":\"Add task to your weekly planning {week}\",\"termplanner.comments\":\"Comments\",\"termplanner.course\":\"Theme course\",\"termplanner.edsGoalGrades\":\"Intermediate goals\",\"termplanner.englishLanguage\":\"Eng\",\"termplanner.finalStep\":\"Final Step\",\"termplanner.firstTerm\":\"FT {year}\",\"termplanner.hindiLanguage\":\"Hindi\",\"termplanner.ict\":\"ICT\",\"termplanner.loadingTermplanner\":\"Loading Termplanner\",\"termplanner.maths\":\"Maths\",\"termplanner.modernLanguage\":\"MFL\",\"termplanner.noFinalStepAvailable\":\"No final step available\",\"termplanner.secondTerm\":\"ST {year}\",\"termplanner.termPlanning\":\"Term planner\",\"termplanner.weekNumber\":\"Week\",\"termplanner.chartsBoxTitle\":\"Progress Charts\",\"termplanner.yoga\":\"Yoga\",\"tutorNoteDialog.weekComment\":\"Note for week {weekNumber}\",\"test.chooseComponentLabel\":\"Component\",\"test.pageDescription\":\"Test page for the components on the starting page\",\"url.remove\":\"Remove link\",\"userTasks.addLearningGoal\":\"Own working goal\",\"userTasks.deleteLearningGoal\":\"Delete learning goal and its tasks\",\"userTasks.primarySchoolGoals\":\"Own learning goal\",\"userTasks.gymnasiumSchoolGoals\":\"Own learning goal\",\"weekNotebook.title\":\"Notepad\",\"weekplanner.addLearningGoalGymnasiumSchool\":\"Goal:\",\"weekplanner.addLearningGoalPrimarySchool\":\"Goal:\",\"weekplanner.addLearningGoalPrimarySchoolTitle\":\"Add own learning goal\",\"weekplanner.addLearningGoalGymnasiumSchoolTitle\":\"Add own learning goal\",\"weekplanner.confirmRemoveLearningObjectives\":\"Delete learning goal and {learningGoalsNumber} tasks?\",\"weekplanner.copyPreviousWeekTaks\":\"Copy from previous week\",\"weekplanner.emptyLearningGoalErr\":\"The learning goal cannot be empty\",\"weekplanner.evaluation\":\"Evaluation\",\"weekplanner.evaluationDescription\":\"Reflection on your work effort and your chosen strategies during the week. Evaluate in relation to your goals.\",\"weekplanner.learningGoalPrimary\":\"Own learning goal\",\"weekplanner.learningGoalGymnasium\":\"Own learning goal\",\"weekplanner.logBook\":\"Logbook\",\"weekplanner.nameCannotBeEmpty\":\"Name cannot be empty\",\"weekplanner.nameMustNotBeEmpty\":\"Name must not be empty\",\"weekplanner.strategy\":\"Strategy\",\"weekplanner.strategyAndEvaluation\":\"Strategy & Evaluation\",\"weekplanner.strategyDescription\":\"What I should do to learn\",\"weekplanner.weekNumber\":\"Week {weekNumber}\",\"wysiwyg.bold\":\"Bold\",\"wysiwyg.code\":\"Code\",\"wysiwyg.heading1\":\"Heading 1\",\"wysiwyg.heading2\":\"Heading 2\",\"wysiwyg.heading3\":\"Heading 3\",\"wysiwyg.image\":\"Insert image\",\"wysiwyg.imagePromptMsg\":\"Enter the URL of the image\",\"wysiwyg.italic\":\"Italics\",\"wysiwyg.line\":\"Horizontal line\",\"wysiwyg.link\":\"Insert link\",\"wysiwyg.olist\":\"Ordered list\",\"wysiwyg.paragraph\":\"Paragraph\",\"wysiwyg.quote\":\"Quote\",\"wysiwyg.strikethrough\":\"Strikethrough\",\"wysiwyg.ulist\":\"Bullet list\",\"wysiwyg.underline\":\"Underline\",\"teacherView.coursesViewTitle\":\"My Courses\",\"teacherView.assignmentsViewTitle\":\"Assignments\",\"teacherView.assignmentsViewDescription\":\"Here you cand find all the assignments you supervise. Click on the right menu to select course. The details are displayed below. You can open/hide each module.\",\"teacherView.noUploadedAssignmentsForModule\":\"No assignments have been uploaded for this module\",\"teacherView.assignmentStudentName\":\"Pupil\",\"teacherView.assignmentFileName\":\"Filename\",\"teacherView.assignmentSubmittedAt\":\"Submitted\",\"teacherView.assignmentReport\":\"Report\",\"teacherView.assignmentGrade\":\"Grade\",\"teacherView.noTaskAssignments\":\"No assignments uploaded for this task\",\"teacherView.notSubmittedAssignments\":\"Not submitted\",\"teacherView.remindBtn\":\"Remind\",\"teacherView.filterByStudygroupsPlaceholder\":\"Select study groups\",\"teacherView.emailRemindersSentMsg\":\"Reminders successfully sent\",\"teacherView.sendEmailAtLeastOneRecipientErr\":\"At least one student should be selected\",\"teacherView.emailReminderInProgress\":\"In progress\"}");

/***/ }),

/***/ "./src/translations/sv.json":
/*!**********************************!*\
  !*** ./src/translations/sv.json ***!
  \**********************************/
/*! exports provided: addeditsubtask.addSubtask, addeditsubtask.deleteSubtask, addeditsubtask.editSubtask, addeditsubtask.nameLabel, calendar.currentDate, calendar.fullDayEventLocation, calendar.loadCalendarEvents, calendar.loadingCalendar, calendar.weekNumber, common.addDescriptionPlhd, common.cancel, common.changesNotSavedErrorOccured, common.changesNotSavedUnauthorized, common.descriptionLabel, common.errorSavingData, common.linkLabel, common.loading, common.nameLabel, common.save, common.saved, common.saving, common.remove, customTask.addWorkGoalPrimarySchoolTitle, customTask.addWorkGoalGymnasiumSchoolTitle, customTask.enterNamePlhd, learningGoalsLost.overall, task.addSubtask, task.editTask, task.editWorkGoals, task.enterTaskNamePlhd, task.removeDeadline, task.removeThisTask, task.removeWorkGoals, task.setDeadline, task.setDeadlineLabel, task.subTasks, task.targetNameLabel, task.taskNameLabel, task.whatShouldYouDoPlhd, taskList.nextWeekTask, taskList.lastWeekTask, taskList.currentWeekTask, taskList.removeTaskFromWeeklyPlanning, taskList.addTaskToWeeklyPlanning, termplanner.comments, termplanner.course, termplanner.edsGoalGrades, termplanner.englishLanguage, termplanner.swedishLanguage, termplanner.finalStep, termplanner.firstTerm, termplanner.hindiLanguage, termplanner.loadingTermplanner, termplanner.modernLanguageFullname, termplanner.mathsFullname, termplanner.noFinalStepAvailable, termplanner.swedishLanguageFullName, termplanner.englishLanguageFullName, termplanner.maths, termplanner.modernLanguage, termplanner.secondTerm, termplanner.termPlanning, termplanner.weekNumber, termplanner.chartsBoxTitle, tutorNoteDialog.weekComment, test.chooseComponentLabel, test.pageDescription, url.remove, userTasks.addLearningGoal, userTasks.deleteLearningGoal, userTasks.primarySchoolGoals, userTasks.gymnasiumSchoolGoals, weekNotebook.title, weekplanner.addLearningGoalGymnasiumSchool, weekplanner.addLearningGoalPrimarySchool, weekplanner.addLearningGoalPrimarySchoolTitle, weekplanner.addLearningGoalGymnasiumSchoolTitle, weekplanner.confirmRemoveLearningObjectives, weekplanner.copyPreviousWeekTaks, weekplanner.emptyLearningGoalErr, weekplanner.evaluation, weekplanner.evaluationDescription, weekplanner.learningGoalPrimary, weekplanner.learningGoalGymnasium, weekplanner.logBook, weekplanner.nameCannotBeEmpty, weekplanner.nameMustNotBeEmpty, weekplanner.strategy, weekplanner.strategyAndEvaluation, weekplanner.strategyDescription, weekplanner.weekNumber, wysiwyg.bold, wysiwyg.code, wysiwyg.heading1, wysiwyg.heading2, wysiwyg.heading3, wysiwyg.image, wysiwyg.imagePromptMsg, wysiwyg.italic, wysiwyg.line, wysiwyg.link, wysiwyg.olist, wysiwyg.paragraph, wysiwyg.quote, wysiwyg.strikethrough, wysiwyg.ulist, wysiwyg.underline, teacherView.coursesViewTitle, teacherView.assignmentsViewTitle, teacherView.assignmentsViewDescription, teacherView.noUploadedAssignmentsForModule, teacherView.assignmentStudentName, teacherView.assignmentFileName, teacherView.assignmentSubmittedAt, teacherView.assignmentReport, teacherView.assignmentGrade, teacherView.noTaskAssignments, teacherView.notSubmittedAssignments, teacherView.remindBtn, teacherView.filterByStudygroupsPlaceholder, teacherView.emailRemindersSentMsg, teacherView.sendEmailAtLeastOneRecipientErr, teacherView.emailReminderInProgress, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"addeditsubtask.addSubtask\":\"Lägg till underuppgift\",\"addeditsubtask.deleteSubtask\":\"Ta bort underuppgift\",\"addeditsubtask.editSubtask\":\"Redigera underuppgift\",\"addeditsubtask.nameLabel\":\"Underuppgiftens namn\",\"calendar.currentDate\":\"Vecka {week}, {year}\",\"calendar.fullDayEventLocation\":\"Plats: {location}\",\"calendar.loadCalendarEvents\":\"Load calendar events...\",\"calendar.loadingCalendar\":\"Loading calendars... (listing...)\",\"calendar.weekNumber\":\"V{weekNumber}\",\"common.addDescriptionPlhd\":\"Lägg till en beskrivning...\",\"common.cancel\":\"Avbryt\",\"common.changesNotSavedErrorOccured\":\"För tillfället problem att spara data. Dina ändringar sparades inte.\",\"common.changesNotSavedUnauthorized\":\"Ändringarna sparades inte p.g.a. otillräcklig behörighet.\",\"common.descriptionLabel\":\"Beskrivning\",\"common.errorSavingData\":\"Kunde inte spara.\",\"common.linkLabel\":\"Länk\",\"common.loading\":\"Laddar...\",\"common.nameLabel\":\"Namn\",\"common.save\":\" Spara\",\"common.saved\":\" Sparad\",\"common.saving\":\"Sparar...\",\"common.remove\":\"Ta bort\",\"customTask.addWorkGoalPrimarySchoolTitle\":\"Lägg till eget arbetsmål\",\"customTask.addWorkGoalGymnasiumSchoolTitle\":\"Lägg till uppgift\",\"customTask.enterNamePlhd\":\"Ange namn...\",\"learningGoalsLost.overall\":\"Övergripande\",\"task.addSubtask\":\"Lägg till underuppgift\",\"task.editTask\":\"Redigera uppgift\",\"task.editWorkGoals\":\"Redigera arbetsmål\",\"task.enterTaskNamePlhd\":\"Ange uppgiftens namn...\",\"task.removeDeadline\":\"Ta bort deadline\",\"task.removeThisTask\":\"Ta bort den här uppgiften\",\"task.removeWorkGoals\":\"Ta bort arbetsmål\",\"task.setDeadline\":\"Set deadline\",\"task.setDeadlineLabel\":\"Ange deadline...\",\"task.subTasks\":\"Underuppgifter\",\"task.targetNameLabel\":\"Arbetsmålets namn\",\"task.taskNameLabel\":\"Uppgiftens namn\",\"task.whatShouldYouDoPlhd\":\"Vad ska du göra?\",\"taskList.nextWeekTask\":\"för nästa vecka (v{week})\",\"taskList.lastWeekTask\":\"för förra veckan (v{week})\",\"taskList.currentWeekTask\":\"för vecka {week}\",\"taskList.removeTaskFromWeeklyPlanning\":\"Ta bort uppgiften från egen veckoplanering {week}\",\"taskList.addTaskToWeeklyPlanning\":\"Lägg till uppgiften i egen veckoplanering {week}\",\"termplanner.comments\":\"Kommentar\",\"termplanner.course\":\"Kurs\",\"termplanner.edsGoalGrades\":\"Terminsmål\",\"termplanner.englishLanguage\":\"Eng\",\"termplanner.swedishLanguage\":\"Sv/SvA\",\"termplanner.finalStep\":\"Slutsteg\",\"termplanner.firstTerm\":\"HT {year}\",\"termplanner.hindiLanguage\":\"\",\"termplanner.loadingTermplanner\":\"V.g. vänta medan terminsplaner laddas...\",\"termplanner.modernLanguageFullname\":\"M.språk\",\"termplanner.mathsFullname\":\"Matematik\",\"termplanner.noFinalStepAvailable\":\"Inget slutsteg tillgängligt\",\"termplanner.swedishLanguageFullName\":\"Svenska\",\"termplanner.englishLanguageFullName\":\"Engelska\",\"termplanner.maths\":\"Ma\",\"termplanner.modernLanguage\":\"M.spr\",\"termplanner.secondTerm\":\"VT {year}\",\"termplanner.termPlanning\":\"Terminsplanering\",\"termplanner.weekNumber\":\"Vecka\",\"termplanner.chartsBoxTitle\":\"Min progression\",\"tutorNoteDialog.weekComment\":\"Kommentar för vecka {weekNumber}\",\"test.chooseComponentLabel\":\"Komponent\",\"test.pageDescription\":\"Testsida för komponenter till nya startsidan\",\"url.remove\":\"Ta bort länken\",\"userTasks.addLearningGoal\":\"Eget arbetsmål\",\"userTasks.deleteLearningGoal\":\"Ta bort lärandemålet och dess uppgifter\",\"userTasks.primarySchoolGoals\":\"Egna lärandemål\",\"userTasks.gymnasiumSchoolGoals\":\"Övriga uppgifter\",\"weekNotebook.title\":\"Anteckningar\",\"weekplanner.addLearningGoalGymnasiumSchool\":\"Rubrik:\",\"weekplanner.addLearningGoalPrimarySchool\":\"Mål:\",\"weekplanner.addLearningGoalPrimarySchoolTitle\":\"Lägg till eget lärandemål\",\"weekplanner.addLearningGoalGymnasiumSchoolTitle\":\"Lägg till rubrik\",\"weekplanner.confirmRemoveLearningObjectives\":\"Ta bort lärandemål samt {learningGoalsNumber} uppgifter?\",\"weekplanner.copyPreviousWeekTaks\":\"Kopiera ej klara från föregående vecka\",\"weekplanner.emptyLearningGoalErr\":\"Lärandemålet kan inte vara tomt\",\"weekplanner.evaluation\":\"Utvärdering\",\"weekplanner.evaluationDescription\":\"Reflektion kring din arbetsinsats och dina valda strategier under veckan.Utvärdera i förhållande till dina mål.\",\"weekplanner.learningGoalPrimary\":\"Eget lärandemål\",\"weekplanner.learningGoalGymnasium\":\"Uppgift\",\"weekplanner.logBook\":\"Loggbok\",\"weekplanner.nameCannotBeEmpty\":\"Namnet kan inte vara tomt\",\"weekplanner.nameMustNotBeEmpty\":\"Namnet får inte vara tomt\",\"weekplanner.strategy\":\"Strategi\",\"weekplanner.strategyAndEvaluation\":\"Strategi & Utvärdering\",\"weekplanner.strategyDescription\":\"Hur jag ska göra för att lära mig.\",\"weekplanner.weekNumber\":\"Vecka {weekNumber}\",\"wysiwyg.bold\":\"Fetstil\",\"wysiwyg.code\":\"Programkod\",\"wysiwyg.heading1\":\"Rubrik 1\",\"wysiwyg.heading2\":\"Rubrik 2\",\"wysiwyg.heading3\":\"Rubrik 3\",\"wysiwyg.image\":\"Infoga bild\",\"wysiwyg.imagePromptMsg\":\"Ange bildens URL\",\"wysiwyg.italic\":\"Kursiv\",\"wysiwyg.line\":\"Vågrät linje\",\"wysiwyg.link\":\"Infoga länk\",\"wysiwyg.olist\":\"Ordnad lista\",\"wysiwyg.paragraph\":\"Paragraf\",\"wysiwyg.quote\":\"Citat\",\"wysiwyg.strikethrough\":\"Struken\",\"wysiwyg.ulist\":\"Punktlista\",\"wysiwyg.underline\":\"Understruken\",\"teacherView.coursesViewTitle\":\"Mina kurser/ uppgifter\",\"teacherView.assignmentsViewTitle\":\"Inlämningsuppgifter\",\"teacherView.assignmentsViewDescription\":\"Här listas samtliga inlämningsuppgifter i din/dina kurser du handleder. Klicka till höger för att välja kurs. Kursens uppgifter syns nedan. Du kan öppna/dölja varje modul.\",\"teacherView.noUploadedAssignmentsForModule\":\"No assignments have been uploaded for this module\",\"teacherView.assignmentStudentName\":\"Elev\",\"teacherView.assignmentFileName\":\"Filnamn\",\"teacherView.assignmentSubmittedAt\":\"Inlamnat\",\"teacherView.assignmentReport\":\"Rapport\",\"teacherView.assignmentGrade\":\"Niva\",\"teacherView.noTaskAssignments\":\"Inga uppdrag uppladdade för denna uppgift\",\"teacherView.notSubmittedAssignments\":\"Ej lämnat in\",\"teacherView.remindBtn\":\"Påminn\",\"teacherView.filterByStudygroupsPlaceholder\":\"Välj studiegrupp\",\"teacherView.emailRemindersSentMsg\":\"E-postpåminnelsen har skickats\",\"teacherView.sendEmailAtLeastOneRecipientErr\":\"Minst en student ska väljas\",\"teacherView.emailReminderInProgress\":\"Pågående\"}");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! exports provided: SECOND, MINUTE, HOUR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECOND", function() { return SECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUTE", function() { return MINUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOUR", function() { return HOUR; });

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;



/***/ }),

/***/ "./src/utils/generic-school-term.ts":
/*!******************************************!*\
  !*** ./src/utils/generic-school-term.ts ***!
  \******************************************/
/*! exports provided: GenericSchoolTerm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericSchoolTerm", function() { return GenericSchoolTerm; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generic_school_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic-school-utils */ "./src/utils/generic-school-utils.ts");
/* harmony import */ var _components_ks_termplanner_termplanner_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ks-termplanner/termplanner-utils */ "./src/components/ks-termplanner/termplanner-utils.ts");



var GenericSchoolTerm = /** @class */ (function () {
    function GenericSchoolTerm(currentDate, currentLocale, academicYearStructure) {
        this.locale = currentLocale || "sv";
        this.selectedDate = currentDate;
        this.schoolMoment = academicYearStructure ? Object(_generic_school_utils__WEBPACK_IMPORTED_MODULE_1__["getCurrentAcademicYear"])(moment__WEBPACK_IMPORTED_MODULE_0___default()(currentDate), academicYearStructure) : null;
    }
    GenericSchoolTerm.prototype.getTermStartAndEnd = function (includeExtraWeek) {
        //In case that the week start date is a date from the previous year
        //Consider the start of the week ( start date) as the day of the 01.01.year
        var startOfTermWeek = this.schoolMoment.academicYearStructure.startDate.clone().startOf('week');
        if (startOfTermWeek.year() < this.schoolMoment.academicYearStructure.startDate.year()) {
            startOfTermWeek = this.schoolMoment.academicYearStructure.startDate;
        }
        var endOfTermWeek = this.schoolMoment.academicYearStructure.endDate;
        if (this.locale === "sv" && includeExtraWeek && this.schoolMoment.term === "ST") {
            endOfTermWeek = endOfTermWeek.clone().add(3, 'weeks').endOf('week');
        }
        else if (includeExtraWeek) {
            if (this.locale != "sv") {
                // for india the end date can be in the middle of the week
                endOfTermWeek = this.schoolMoment.academicYearStructure.endDate.clone();
            }
            endOfTermWeek = this.schoolMoment.academicYearStructure.endDate.clone().add(1, 'week').endOf('week');
        }
        return [startOfTermWeek, endOfTermWeek];
    };
    GenericSchoolTerm.prototype.getFirstAndLastWeekOfTerm = function () {
        return [this.schoolMoment.academicYearStructure.startDate.week(), this.schoolMoment.academicYearStructure.endDate.week()];
    };
    GenericSchoolTerm.prototype.isCurrentWeek = function (dateTime) {
        var termDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(dateTime);
        return termDate.year() === moment__WEBPACK_IMPORTED_MODULE_0___default()().year() && termDate.week() === moment__WEBPACK_IMPORTED_MODULE_0___default()().week();
    };
    GenericSchoolTerm.prototype.getLastStepWeek = function (locale) {
        //TODO: this should be refactored. The generic method should be used
        if (locale === "sv") {
            return this.schoolMoment.term === "ST" ? _components_ks_termplanner_termplanner_utils__WEBPACK_IMPORTED_MODULE_2__["LAST_STEP_SPRING"] : _components_ks_termplanner_termplanner_utils__WEBPACK_IMPORTED_MODULE_2__["LAST_STEP_AUTUMN"];
        }
        return this.schoolMoment.academicYearStructure.endDate.clone().add(1, "week").week();
    };
    GenericSchoolTerm.prototype.toLocaleString = function (intl, shortYear) {
        if (this.schoolMoment) {
            var year = this.schoolMoment.academicYearStructure.endDate.year().toString();
            var academicYear = this.schoolMoment.academicYearStructure.academicYear;
            if (shortYear && intl.locale === 'sv') {
                year = year.substr(2);
            }
            else {
                year = academicYear;
            }
            return this.schoolMoment.term === 'AT' ? intl.formatMessage({ id: 'termplanner.firstTerm', defaultMessage: 'HT {year}' }, { year: year }) :
                intl.formatMessage({ id: 'termplanner.secondTerm', defaultMessage: 'VT {year}' }, { year: year });
        }
        return null;
    };
    GenericSchoolTerm.prototype.nextTerm = function () {
        //switch to next semester, we set the current date as adding 3 months to the end of the current semester
        var endDate = this.schoolMoment ? this.schoolMoment.academicYearStructure.endDate.clone() : moment__WEBPACK_IMPORTED_MODULE_0___default()();
        var nextDate = endDate.add(3, 'months');
        return new GenericSchoolTerm(nextDate.toDate(), this.locale);
    };
    GenericSchoolTerm.prototype.prevTerm = function () {
        //to switch to next semester, we set the current date as subtracting 3 months from the start of the current semester
        var startDate = this.schoolMoment ? this.schoolMoment.academicYearStructure.startDate.clone() : moment__WEBPACK_IMPORTED_MODULE_0___default()();
        var prevDate = startDate.subtract(3, 'months');
        return new GenericSchoolTerm(prevDate.toDate(), this.locale);
    };
    GenericSchoolTerm.prototype.getEdsPeriodName = function () {
        return (this.schoolMoment.term === 'AT' ? "HT" : "VT") + this.schoolMoment.academicYearStructure.endDate.year();
    };
    return GenericSchoolTerm;
}());



/***/ }),

/***/ "./src/utils/generic-school-utils.ts":
/*!*******************************************!*\
  !*** ./src/utils/generic-school-utils.ts ***!
  \*******************************************/
/*! exports provided: getCurrentAcademicYear, getSchoolTranslatedSubjects, getSchoolTranslatedSubjectFullname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentAcademicYear", function() { return getCurrentAcademicYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchoolTranslatedSubjects", function() { return getSchoolTranslatedSubjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchoolTranslatedSubjectFullname", function() { return getSchoolTranslatedSubjectFullname; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

function getCurrentAcademicYear(currentDate, academicYear) {
    var firstTermStartDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(academicYear.firstTerm.startDate));
    var firstTermEndDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(academicYear.firstTerm.endDate));
    var secondTermStartDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(academicYear.secondTerm.startDate));
    var secondTermEndDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(academicYear.secondTerm.endDate));
    var academicPeriod = firstTermStartDate.year().toString().substr(2) + "/" + secondTermEndDate.year().toString().substr(2);
    var holidays = _getTermHolidays(academicYear.holidays, firstTermStartDate, firstTermEndDate);
    if (currentDate < firstTermEndDate) {
        //compute academic week numbers
        var academicStartWeek = 1;
        var academicEndWeek = firstTermEndDate.week() - firstTermStartDate.week();
        //get current term holidays
        return { term: 'AT', academicYearStructure: { academicYear: academicPeriod, startDate: firstTermStartDate, endDate: firstTermEndDate, academicStartWeek: academicStartWeek, academicEndWeek: academicEndWeek, holidays: holidays } };
    }
    //compute the number of first term holidays week numbers
    var numberOfHolidayWeeks = _getHolidayWeeksNumber(holidays);
    //compute academic week numbers
    var academicStartWeek = secondTermStartDate.clone().add(1, 'week').week() - firstTermStartDate.week() - numberOfHolidayWeeks;
    var academicEndWeek = secondTermEndDate.clone().add().add(1, 'week').week() - firstTermStartDate.week() - numberOfHolidayWeeks;
    //get current term holidays
    var holidays = _getTermHolidays(academicYear.holidays, secondTermStartDate, secondTermEndDate);
    return { term: 'ST', academicYearStructure: { academicYear: academicPeriod, startDate: secondTermStartDate, endDate: secondTermEndDate, academicStartWeek: academicStartWeek, academicEndWeek: academicEndWeek, holidays: holidays } };
}
function getSchoolTranslatedSubjects(schoolLocale, intl) {
    var translatedColumns = {};
    //these are fixed for all school locales
    translatedColumns["Kurs"] = intl.formatMessage({ id: "termplanner.course", defaultMessage: "Kurs" });
    translatedColumns["Kommentar"] = intl.formatMessage({ id: "termplanner.comments", defaultMessage: "Kommentar" });
    if (schoolLocale === 'sv') {
        translatedColumns["M.spr"] = intl.formatMessage({ id: "termplanner.modernLanguage", defaultMessage: "M.spr" });
        translatedColumns["Ma"] = intl.formatMessage({ id: "termplanner.maths", defaultMessage: "Ma" });
        translatedColumns["Sv/SvA"] = intl.formatMessage({ id: "termplanner.swedishLanguage", defaultMessage: "Sv/SvA" });
        translatedColumns["Eng"] = intl.formatMessage({ id: "termplanner.englishLanguage", defaultMessage: "Eng" });
    }
    else {
        translatedColumns["MFL"] = intl.formatMessage({ id: "termplanner.modernLanguage", defaultMessage: "MFL" });
        translatedColumns["Ma"] = intl.formatMessage({ id: "termplanner.maths", defaultMessage: "Maths" });
        translatedColumns["Hi"] = intl.formatMessage({ id: "termplanner.hindiLanguage", defaultMessage: "Hindi" });
        translatedColumns["Eng"] = intl.formatMessage({ id: "termplanner.englishLanguage", defaultMessage: "English" });
        translatedColumns["Yoga"] = intl.formatMessage({ id: "termplanner.yoga", defaultMessage: "Yoga" });
        translatedColumns["ICT"] = intl.formatMessage({ id: "termplanner.ict", defaultMessage: "ICT" });
    }
    return translatedColumns;
}
//this is related to charts. It is used only for sv locale
function getSchoolTranslatedSubjectFullname(intl) {
    var translatedColumns = {};
    translatedColumns["M.spr"] = intl.formatMessage({ id: "termplanner.modernLanguageFullname", defaultMessage: "M.språk" });
    translatedColumns["Ma"] = intl.formatMessage({ id: "termplanner.mathsFullname", defaultMessage: "Matematik" });
    translatedColumns["Sv/SvA"] = intl.formatMessage({ id: "termplanner.swedishLanguageFullName", defaultMessage: "Svenska" });
    translatedColumns["Eng"] = intl.formatMessage({ id: "termplanner.englishLanguageFullName", defaultMessage: "Engelska" });
    return translatedColumns;
}
function _getTermHolidays(holidays, termStartDate, termEndDate) {
    return holidays.filter(function (elem) {
        return moment__WEBPACK_IMPORTED_MODULE_0___default()(elem.startDate).isBetween(termStartDate, termEndDate);
    });
}
function _getHolidayWeeksNumber(holidays) {
    var numberOfWeeks = 0;
    holidays.forEach(function (elem) {
        //the number of weeks is the difference + 1
        numberOfWeeks += moment__WEBPACK_IMPORTED_MODULE_0___default()(elem.endDate).add(1, 'week').week() - moment__WEBPACK_IMPORTED_MODULE_0___default()(elem.startDate).week();
    });
    return numberOfWeeks;
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
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var timeoutReached, th, rv;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
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
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                    var res, _a, _b, _c;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
//# sourceMappingURL=testpage.js.map