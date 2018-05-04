(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./demo/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ./demo/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./demo/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./demo/main.ts":
/*!**********************!*\
  !*** ./demo/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _src_demo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/demo.module */ "./demo/src/demo.module.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_src_demo_module__WEBPACK_IMPORTED_MODULE_1__["DemoModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./demo/src/demo.component.html":
/*!**************************************!*\
  !*** ./demo/src/demo.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper -->\r\n<div id=\"wrapper\">\r\n\r\n    <!-- Header -->\r\n    <header id=\"header\">\r\n        <h1>Captcha for Angular 6+</h1>\r\n        <p>Fully dynamic - supports changing language and other properties on the fly (try below)</p>\r\n    </header>\r\n\r\n    <nav id=\"nav\">\r\n        <ul>\r\n            <li>\r\n                <a routerLink=\"/installation\">Installation</a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/recaptcha2\">reCAPTCHA2</a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/invisible\">Invisible reCAPTCHA</a>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n\r\n    <!-- Main -->\r\n    <div id=\"main\">\r\n        <!-- Content -->\r\n        <section id=\"content\" class=\"main\">\r\n\r\n            <div style=\"text-align: center; width: 100; margin-bottom: 15px\">\r\n                <a href=\"https://nodei.co/npm/ngx-captcha/\">\r\n                    <img src=\"https://nodei.co/npm/ngx-captcha.png?downloads=true&downloadRank=true&stars=true\">\r\n                </a>\r\n            </div>\r\n\r\n            <!-- Text -->\r\n            <section>\r\n                <router-outlet></router-outlet>\r\n            </section>\r\n\r\n        </section>\r\n    </div>\r\n\r\n    <!-- Footer -->\r\n    <footer id=\"footer\">\r\n        <section>\r\n            <h2>About</h2>\r\n            <p>Implementation of reCaptcha for Angular 6 and beyond.\r\n            </p>\r\n        </section>\r\n        <section>\r\n            <h2>Contact</h2>\r\n            <ul class=\"icons\">\r\n                <li>\r\n                    <a target=\"_blank\" href=\"https://www.linkedin.com/in/richard-šůstek-8740a9a9/\" class=\"icon fa-linkedin alt\">\r\n                        <span class=\"label\">LinkedIn</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a target=\"_blank\" href=\"https://github.com/Enngage/ngx-captcha\" class=\"icon fa-github alt\">\r\n                        <span class=\"label\">GitHub</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </section>\r\n        <p class=\"copyright\">&copy; {{ year }} Richard Sustek. All rights reserved. Design:\r\n            <a href=\"https://html5up.net\">HTML5 UP</a>.</p>\r\n    </footer>\r\n</div>"

/***/ }),

/***/ "./demo/src/demo.component.ts":
/*!************************************!*\
  !*** ./demo/src/demo.component.ts ***!
  \************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.year = new Date().getFullYear();
    }
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/src/demo.component.html"),
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./demo/src/demo.module.ts":
/*!*********************************!*\
  !*** ./demo/src/demo.module.ts ***!
  \*********************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src */ "./src/index.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo.component */ "./demo/src/demo.component.ts");
/* harmony import */ var _demo_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo.routes */ "./demo/src/demo.routes.ts");
/* harmony import */ var _installation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./installation.component */ "./demo/src/installation.component.ts");
/* harmony import */ var _invisible_recaptcha_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invisible-recaptcha-demo.component */ "./demo/src/invisible-recaptcha-demo.component.ts");
/* harmony import */ var _re_captcha_2_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./re-captcha-2-demo.component */ "./demo/src/re-captcha-2-demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _src__WEBPACK_IMPORTED_MODULE_3__["NgxCaptchaModule"].forRoot({
                    reCaptcha2SiteKey: '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1',
                    invisibleCaptchaSiteKey: '6LckpEgUAAAAACPcjmrg1Es-GnTltKx0MP61FBO8'
                }),
                _demo_routes__WEBPACK_IMPORTED_MODULE_5__["DemoRoutes"]
            ],
            declarations: [
                _demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"],
                _invisible_recaptcha_demo_component__WEBPACK_IMPORTED_MODULE_7__["InvisibleReCaptchaDemoComponent"],
                _re_captcha_2_demo_component__WEBPACK_IMPORTED_MODULE_8__["ReCaptcha2DemoComponent"],
                _installation_component__WEBPACK_IMPORTED_MODULE_6__["InstallationComponent"]
            ],
            bootstrap: [_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"]]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./demo/src/demo.routes.ts":
/*!*********************************!*\
  !*** ./demo/src/demo.routes.ts ***!
  \*********************************/
/*! exports provided: DemoRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoRoutes", function() { return DemoRoutes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _invisible_recaptcha_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invisible-recaptcha-demo.component */ "./demo/src/invisible-recaptcha-demo.component.ts");
/* harmony import */ var _re_captcha_2_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./re-captcha-2-demo.component */ "./demo/src/re-captcha-2-demo.component.ts");
/* harmony import */ var _installation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./installation.component */ "./demo/src/installation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DemoRoutes = /** @class */ (function () {
    function DemoRoutes() {
    }
    DemoRoutes = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    {
                        path: '', component: _re_captcha_2_demo_component__WEBPACK_IMPORTED_MODULE_3__["ReCaptcha2DemoComponent"]
                    },
                    {
                        path: 'installation', component: _installation_component__WEBPACK_IMPORTED_MODULE_4__["InstallationComponent"]
                    },
                    {
                        path: 'invisible', component: _invisible_recaptcha_demo_component__WEBPACK_IMPORTED_MODULE_2__["InvisibleReCaptchaDemoComponent"]
                    },
                    {
                        path: 'recaptcha2', component: _re_captcha_2_demo_component__WEBPACK_IMPORTED_MODULE_3__["ReCaptcha2DemoComponent"]
                    },
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], DemoRoutes);
    return DemoRoutes;
}());



/***/ }),

/***/ "./demo/src/installation.component.html":
/*!**********************************************!*\
  !*** ./demo/src/installation.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Installation</h2>\r\n\r\n\r\nInstall with NPM\r\n\r\n<pre class=\"prettyprint\" [innerText]=\"installCode\"></pre> Import\r\n<strong>NgxCaptchaModule</strong> to your app\r\n<pre class=\"prettyprint\" [innerText]=\"importModuleCode\"></pre>\r\n    Use\r\n    <pre class=\"prettyprint\" [innerText]=\"exampleCode\"></pre>"

/***/ }),

/***/ "./demo/src/installation.component.ts":
/*!********************************************!*\
  !*** ./demo/src/installation.component.ts ***!
  \********************************************/
/*! exports provided: InstallationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationComponent", function() { return InstallationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InstallationComponent = /** @class */ (function () {
    function InstallationComponent() {
        this.installCode = "npm install ngx-captcha";
        this.importModuleCode = "\nimport { NgModule } from '@angular/core';\nimport { NgxCaptchaModule } from 'ngx-captcha';\n\n@NgModule({\n  imports: [\n    NgxCaptchaModule.forRoot({\n      reCaptcha2SiteKey: 'xxxx',\n      invisibleCaptchaSiteKey: 'yyy'\n    }),\n  })\n\nexport class AppModule { }\n\n";
        this.exampleCode = "\n<ngx-invisible-recaptcha\n  [type]=\"type\"\n  [badge]=\"badge\"\n  (load)=\"handleLoad()\"\n  (success)=\"handleSuccess($event)\">\n</ngx-invisible-recaptcha>\n\n";
    }
    InstallationComponent.prototype.ngAfterViewChecked = function () {
        this.prettify();
    };
    InstallationComponent.prototype.prettify = function () {
        if (window['PR']) {
            PR.prettyPrint();
        }
    };
    InstallationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./installation.component.html */ "./demo/src/installation.component.html"),
        })
    ], InstallationComponent);
    return InstallationComponent;
}());



/***/ }),

/***/ "./demo/src/invisible-recaptcha-demo.component.html":
/*!**********************************************************!*\
  !*** ./demo/src/invisible-recaptcha-demo.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Invisible reCAPTCHA</h2>\r\n\r\n<div>\r\n    Code\r\n    <pre class=\"prettyprint\" [innerText]=\"exampleCode\"></pre>\r\n</div>\r\n\r\n<h3>Live example</h3>\r\n<div>\r\n    <ngx-invisible-recaptcha #captchaElem (load)=\"handleLoad()\" (success)=\"handleSuccess($event)\"\r\n        [type]=\"type\" [badge]=\"badge\">\r\n    </ngx-invisible-recaptcha>\r\n</div>\r\n\r\n<h3>Status</h3>\r\n<ul class=\"alt\">\r\n    <li>\r\n        <strong>Loaded:</strong>\r\n        <i *ngIf=\"!captchaIsLoaded\" class=\"fas fa-times color-red\"></i>\r\n        <i *ngIf=\"captchaIsLoaded\" class=\"fas fa-check color-green\"></i>\r\n    </li>\r\n    <li>\r\n        <strong>Captcha success:</strong>\r\n        <i *ngIf=\"!captchaSuccess\" class=\"fas fa-times color-red\"></i>\r\n        <i *ngIf=\"captchaSuccess\" class=\"fas fa-check color-green\"></i>\r\n    </li>\r\n</ul>\r\n\r\n<div>\r\n    <h3>Properties</h3>\r\n    <table>\r\n        <thead>\r\n            <tr>\r\n                <th>Property</th>\r\n                <th>Values</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>Badge</td>\r\n                <td>\r\n                    <a (click)=\"changeBadge('bottomright')\">Bottomright</a> |\r\n                    <a (click)=\"changeBadge('bottomleft')\">Bottomleft</a> |\r\n                    <a (click)=\"changeBadge('inline')\">Inline</a>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>Type</td>\r\n                <td>\r\n                    <a (click)=\"changeType('image')\">Image</a> |\r\n                    <a (click)=\"changeType('audio')\">Audio</a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<div>\r\n    <h4>Methods</h4>\r\n    <table>\r\n        <thead>\r\n            <tr>\r\n                <th>Method</th>\r\n                <th>Description</th>\r\n                <th>Action</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>execute</td>\r\n                <td>Verifies captcha on the backround and returns captcha response</td>\r\n                <td>\r\n                    <button (click)=\"execute()\">Try</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>getCurrentResponse</td>\r\n                <td>Gets the latest submitted response</td>\r\n                <td>\r\n                    <button (click)=\"getCurrentResponse()\">Try</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>getResponse</td>\r\n                <td>Gets captcha response</td>\r\n                <td>\r\n                    <button (click)=\"getResponse()\">Try</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>reset</td>\r\n                <td>Resets captcha (does not reload script)</td>\r\n                <td>\r\n                    <button (click)=\"reset()\">Try</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>reload</td>\r\n                <td>Unsets global script & reloads captcha</td>\r\n                <td>\r\n                    <button (click)=\"reload()\">Try</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>getCaptchaId</td>\r\n                <td>Gets Id of captcha</td>\r\n                <td>\r\n                    <button (click)=\"getCaptchaId()\">Try</button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./demo/src/invisible-recaptcha-demo.component.ts":
/*!********************************************************!*\
  !*** ./demo/src/invisible-recaptcha-demo.component.ts ***!
  \********************************************************/
/*! exports provided: InvisibleReCaptchaDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvisibleReCaptchaDemoComponent", function() { return InvisibleReCaptchaDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src */ "./src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvisibleReCaptchaDemoComponent = /** @class */ (function () {
    function InvisibleReCaptchaDemoComponent(cdr) {
        this.cdr = cdr;
        this.exampleCode = "\n<ngx-invisible-recaptcha #captchaElem\n  [type]=\"type\"\n  [badge]=\"badge\"\n  (load)=\"handleLoad()\"\n  (success)=\"handleSuccess($event)\">\n</ngx-invisible-recaptcha>\n";
        this.captchaIsLoaded = false;
        this.captchaSuccess = false;
        this.badge = 'inline';
    }
    InvisibleReCaptchaDemoComponent.prototype.ngAfterViewChecked = function () {
        this.prettify();
    };
    InvisibleReCaptchaDemoComponent.prototype.execute = function () {
        this.captchaElem.execute();
    };
    InvisibleReCaptchaDemoComponent.prototype.handleSuccess = function (captchaResponse) {
        this.captchaSuccess = true;
        this.captchaResponse = captchaResponse;
        this.cdr.detectChanges();
    };
    InvisibleReCaptchaDemoComponent.prototype.handleLoad = function () {
        this.captchaIsLoaded = true;
        this.cdr.detectChanges();
    };
    InvisibleReCaptchaDemoComponent.prototype.changeBadge = function (badge) {
        if (badge === void 0) { badge = 'bottomright'; }
        this.badge = badge;
    };
    InvisibleReCaptchaDemoComponent.prototype.changeType = function (type) {
        this.type = type;
    };
    InvisibleReCaptchaDemoComponent.prototype.getResponse = function () {
        var response = this.captchaElem.getResponse();
        if (!response) {
            alert("There is no response from grecaptcha script - try using 'getCurrentResponse' method or subscribe to 'success' event");
        }
        else {
            alert(response);
        }
    };
    InvisibleReCaptchaDemoComponent.prototype.reload = function () {
        this.captchaElem.reloadCaptcha();
    };
    InvisibleReCaptchaDemoComponent.prototype.getCaptchaId = function () {
        alert(this.captchaElem.getCaptchaId());
    };
    InvisibleReCaptchaDemoComponent.prototype.reset = function () {
        this.captchaElem.resetCaptcha();
    };
    InvisibleReCaptchaDemoComponent.prototype.getCurrentResponse = function () {
        alert(this.captchaElem.getCurrentResponse());
    };
    InvisibleReCaptchaDemoComponent.prototype.prettify = function () {
        if (window['PR']) {
            PR.prettyPrint();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('captchaElem'),
        __metadata("design:type", _src__WEBPACK_IMPORTED_MODULE_1__["InvisibleReCaptchaComponent"])
    ], InvisibleReCaptchaDemoComponent.prototype, "captchaElem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('langInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], InvisibleReCaptchaDemoComponent.prototype, "langInput", void 0);
    InvisibleReCaptchaDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-invisible-recaptcha-demo',
            template: __webpack_require__(/*! ./invisible-recaptcha-demo.component.html */ "./demo/src/invisible-recaptcha-demo.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], InvisibleReCaptchaDemoComponent);
    return InvisibleReCaptchaDemoComponent;
}());



/***/ }),

/***/ "./demo/src/re-captcha-2-demo.component.html":
/*!***************************************************!*\
  !*** ./demo/src/re-captcha-2-demo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>reCAPTCHA2</h2>\r\n\r\n<div>\r\n    Code\r\n    <pre class=\"prettyprint\" [innerText]=\"exampleCode\"></pre>\r\n</div>\r\n\r\n<h3>Live example</h3>\r\n<div>\r\n    <ngx-recaptcha2 #captchaElem (expire)=\"handleExpire()\" (load)=\"handleLoad()\" (success)=\"handleSuccess($event)\"\r\n        [size]=\"size\" [hl]=\"lang\" [theme]=\"theme\" [type]=\"type\"></ngx-recaptcha2>\r\n</div>\r\n\r\n<h3>Status</h3>\r\n<ul class=\"alt\">\r\n    <li>\r\n        <strong>Loaded:</strong>\r\n        <i *ngIf=\"!captchaIsLoaded\" class=\"fas fa-times color-red\"></i>\r\n        <i *ngIf=\"captchaIsLoaded\" class=\"fas fa-check color-green\"></i>\r\n    </li>\r\n    <li>\r\n        <strong>Captcha success:</strong>\r\n        <i *ngIf=\"!captchaSuccess\" class=\"fas fa-times color-red\"></i>\r\n        <i *ngIf=\"captchaSuccess\" class=\"fas fa-check color-green\"></i>\r\n    </li>\r\n    <li>\r\n        <strong>Captcha expired:</strong>\r\n        <i *ngIf=\"!captchaIsExpired\" class=\"fas fa-times color-red\"></i>\r\n        <i *ngIf=\"captchaIsExpired\" class=\"fas fa-check color-green\"></i>\r\n    </li>\r\n</ul>\r\n\r\n\r\n<h3>Properties</h3>\r\n<table>\r\n    <thead>\r\n        <tr>\r\n            <th>Property</th>\r\n            <th>Values</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr>\r\n            <td>Theme</td>\r\n            <td>\r\n                <a (click)=\"changeTheme('light')\">Light</a> |\r\n                <a (click)=\"changeTheme('dark')\">Dark</a>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>Language</td>\r\n            <td>\r\n                <input #langInput type=\"text\" [value]=\"lang\">\r\n                <button (click)=\"setLanguage()\">Set</button>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>Size</td>\r\n            <td>\r\n                <a (click)=\"changeSize('compact')\">Compact</a> |\r\n                <a (click)=\"changeSize('normal')\">Normal</a>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>Type</td>\r\n            <td>\r\n                <a (click)=\"changeType('image')\">Image</a> |\r\n                <a (click)=\"changeType('audio')\">Audio</a>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<div>\r\n    <h4>Methods</h4>\r\n    <table>\r\n        <thead>\r\n            <tr>\r\n                <th>Method</th>\r\n                <th>Description</th>\r\n                <th>Action</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>getCurrentResponse</td>\r\n                <td>Gets the latest submitted response</td>\r\n                <td>\r\n                    <button (click)=\"getCurrentResponse()\">Try</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>getResponse</td>\r\n                <td>Gets captcha response</td>\r\n                <td>\r\n                    <button (click)=\"getResponse()\">Try</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>reset</td>\r\n                <td>Resets captcha (does not reload script)</td>\r\n                <td>\r\n                    <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\" (click)=\"reset()\">Try</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>reload</td>\r\n                <td>Unsets global script & reloads captcha</td>\r\n                <td>\r\n                    <button (click)=\"reload()\">Try</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>getCaptchaId</td>\r\n                <td>Gets Id of captcha</td>\r\n                <td>\r\n                    <button (click)=\"getCaptchaId()\">Try</button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./demo/src/re-captcha-2-demo.component.ts":
/*!*************************************************!*\
  !*** ./demo/src/re-captcha-2-demo.component.ts ***!
  \*************************************************/
/*! exports provided: ReCaptcha2DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReCaptcha2DemoComponent", function() { return ReCaptcha2DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src */ "./src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReCaptcha2DemoComponent = /** @class */ (function () {
    function ReCaptcha2DemoComponent(cdr) {
        this.cdr = cdr;
        this.installCode = "\n  npm install ngx-captcha";
        this.importModuleCode = "\nimport { NgModule } from '@angular/core';\nimport { NgxCaptchaModule } from 'ngx-captcha';\n\n@NgModule({\n  imports: [\n    NgxCaptchaModule\n  })\n\n  export class AppModule { }";
        this.exampleCode = "\n<ngx-recaptcha2 #captchaElem\n  [size]=\"size\"\n  [hl]=\"lang\"\n  [theme]=\"theme\"\n  [type]=\"type\"\n  (expire)=\"handleExpire()\"\n  (load)=\"handleLoad()\"\n  (success)=\"handleSuccess($event)\">\n</ngx-recaptcha2>";
        this.captchaIsLoaded = false;
        this.captchaSuccess = false;
        this.captchaIsExpired = false;
        this.theme = 'light';
        this.size = 'normal';
        this.lang = 'en';
    }
    ReCaptcha2DemoComponent.prototype.ngAfterViewChecked = function () {
        this.prettify();
    };
    ReCaptcha2DemoComponent.prototype.handleSuccess = function (captchaResponse) {
        this.captchaSuccess = true;
        this.captchaResponse = captchaResponse;
        this.captchaIsExpired = false;
        this.cdr.detectChanges();
    };
    ReCaptcha2DemoComponent.prototype.handleLoad = function () {
        this.captchaIsLoaded = true;
        this.captchaIsExpired = false;
        this.cdr.detectChanges();
    };
    ReCaptcha2DemoComponent.prototype.handleExpire = function () {
        this.captchaSuccess = false;
        this.captchaIsExpired = true;
        this.cdr.detectChanges();
    };
    ReCaptcha2DemoComponent.prototype.changeTheme = function (theme) {
        this.theme = theme;
    };
    ReCaptcha2DemoComponent.prototype.changeSize = function (size) {
        this.size = size;
    };
    ReCaptcha2DemoComponent.prototype.changeType = function (type) {
        this.type = type;
    };
    ReCaptcha2DemoComponent.prototype.setLanguage = function () {
        this.lang = this.langInput.nativeElement.value;
    };
    ReCaptcha2DemoComponent.prototype.getCurrentResponse = function () {
        alert(this.captchaElem.getCurrentResponse());
    };
    ReCaptcha2DemoComponent.prototype.getResponse = function () {
        var response = this.captchaElem.getResponse();
        if (!response) {
            alert('There is no response - have you submitted captcha?');
        }
        else {
            alert(response);
        }
    };
    ReCaptcha2DemoComponent.prototype.reload = function () {
        this.captchaElem.reloadCaptcha();
    };
    ReCaptcha2DemoComponent.prototype.getCaptchaId = function () {
        alert(this.captchaElem.getCaptchaId());
    };
    ReCaptcha2DemoComponent.prototype.reset = function () {
        this.captchaElem.resetCaptcha();
    };
    ReCaptcha2DemoComponent.prototype.prettify = function () {
        if (window['PR']) {
            PR.prettyPrint();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('captchaElem'),
        __metadata("design:type", _src__WEBPACK_IMPORTED_MODULE_1__["ReCaptcha2Component"])
    ], ReCaptcha2DemoComponent.prototype, "captchaElem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('langInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReCaptcha2DemoComponent.prototype, "langInput", void 0);
    ReCaptcha2DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-recaptcha-2-demo',
            template: __webpack_require__(/*! ./re-captcha-2-demo.component.html */ "./demo/src/re-captcha-2-demo.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ReCaptcha2DemoComponent);
    return ReCaptcha2DemoComponent;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: ReCaptcha2Component, InvisibleReCaptchaComponent, NgxCaptchaConfig, NgxCaptchaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recaptcha_recaptcha_2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recaptcha/recaptcha-2.component */ "./src/recaptcha/recaptcha-2.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReCaptcha2Component", function() { return _recaptcha_recaptcha_2_component__WEBPACK_IMPORTED_MODULE_0__["ReCaptcha2Component"]; });

/* harmony import */ var _recaptcha_invisible_recaptcha_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recaptcha/invisible-recaptcha.component */ "./src/recaptcha/invisible-recaptcha.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvisibleReCaptchaComponent", function() { return _recaptcha_invisible_recaptcha_component__WEBPACK_IMPORTED_MODULE_1__["InvisibleReCaptchaComponent"]; });

/* harmony import */ var _recaptcha_recaptcha_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recaptcha/recaptcha.config */ "./src/recaptcha/recaptcha.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxCaptchaConfig", function() { return _recaptcha_recaptcha_config__WEBPACK_IMPORTED_MODULE_2__["NgxCaptchaConfig"]; });

/* harmony import */ var _ngx_captcha_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-captcha.module */ "./src/ngx-captcha.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxCaptchaModule", function() { return _ngx_captcha_module__WEBPACK_IMPORTED_MODULE_3__["NgxCaptchaModule"]; });

/** Public API */






/***/ }),

/***/ "./src/ngx-captcha.module.ts":
/*!***********************************!*\
  !*** ./src/ngx-captcha.module.ts ***!
  \***********************************/
/*! exports provided: NgxCaptchaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCaptchaModule", function() { return NgxCaptchaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recaptcha_invisible_recaptcha_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recaptcha/invisible-recaptcha.component */ "./src/recaptcha/invisible-recaptcha.component.ts");
/* harmony import */ var _recaptcha_recaptcha_2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recaptcha/recaptcha-2.component */ "./src/recaptcha/recaptcha-2.component.ts");
/* harmony import */ var _recaptcha_recaptcha_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recaptcha/recaptcha.config */ "./src/recaptcha/recaptcha.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NgxCaptchaModule = /** @class */ (function () {
    function NgxCaptchaModule() {
    }
    NgxCaptchaModule_1 = NgxCaptchaModule;
    NgxCaptchaModule.forRoot = function (config) {
        return {
            ngModule: NgxCaptchaModule_1,
            providers: [
                {
                    provide: _recaptcha_recaptcha_config__WEBPACK_IMPORTED_MODULE_4__["NgxCaptchaConfig"],
                    useValue: config,
                }
            ]
        };
    };
    NgxCaptchaModule = NgxCaptchaModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
            ],
            declarations: [
                _recaptcha_recaptcha_2_component__WEBPACK_IMPORTED_MODULE_3__["ReCaptcha2Component"],
                _recaptcha_invisible_recaptcha_component__WEBPACK_IMPORTED_MODULE_2__["InvisibleReCaptchaComponent"]
            ],
            exports: [
                _recaptcha_recaptcha_2_component__WEBPACK_IMPORTED_MODULE_3__["ReCaptcha2Component"],
                _recaptcha_invisible_recaptcha_component__WEBPACK_IMPORTED_MODULE_2__["InvisibleReCaptchaComponent"]
            ]
        })
    ], NgxCaptchaModule);
    return NgxCaptchaModule;
    var NgxCaptchaModule_1;
}());



/***/ }),

/***/ "./src/recaptcha/base-recaptcha.component.ts":
/*!***************************************************!*\
  !*** ./src/recaptcha/base-recaptcha.component.ts ***!
  \***************************************************/
/*! exports provided: BaseReCaptchaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseReCaptchaComponent", function() { return BaseReCaptchaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recaptcha_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recaptcha-type.enum */ "./src/recaptcha/recaptcha-type.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseReCaptchaComponent = /** @class */ (function () {
    function BaseReCaptchaComponent(renderer, recaptchaType, config) {
        this.renderer = renderer;
        this.recaptchaType = recaptchaType;
        this.config = config;
        /**
        * Name of the global callback
        */
        this.windowOnLoadCallbackProperty = 'ngx_onload_callback';
        /**
         * Name of the global reCaptcha property
         */
        this.globalReCaptchaProperty = 'grecaptcha';
        /**
         * Name of the global property holding captcha element
         */
        this.globalCaptchaElemName = 'ngx_onload_captcha_elem';
        /**
         * Type
         */
        this.type = 'image';
        /**
        * Tab index
        */
        this.tabIndex = 0;
        /**
         * Called when captcha receives successful response.
         * Captcha response token is passed to event.
         */
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
        * Called when captcha is loaded. Event receives id of the captcha
        */
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * If enabled, captcha will reset after receiving success response. This is useful
         * when invisible captcha need to be resolved multiple times on same page
         */
        this.resetCaptchaAfterSuccess = false;
        /**
         * Indicates if captcha is loaded
         */
        this.isLoaded = false;
    }
    BaseReCaptchaComponent.prototype.ngOnInit = function () {
        if (!this.config) {
            throw Error("Config was not provided");
        }
        if (this.recaptchaType === _recaptcha_type_enum__WEBPACK_IMPORTED_MODULE_1__["ReCaptchaType"].InvisibleReCaptcha) {
            if (!this.config.invisibleCaptchaSiteKey) {
                throw Error("SiteKey for invisible reCaptcha is not set!");
            }
            this.siteKey = this.config.invisibleCaptchaSiteKey;
        }
        else if (this.recaptchaType === _recaptcha_type_enum__WEBPACK_IMPORTED_MODULE_1__["ReCaptchaType"].ReCaptcha2) {
            if (!this.config.reCaptcha2SiteKey) {
                throw Error("SiteKey for reCaptcha2 is not set!");
            }
            this.siteKey = this.config.reCaptcha2SiteKey;
        }
        else {
            throw Error("Unsupported captcha type '" + this.recaptchaType + "'!");
        }
        this.setupComponent();
    };
    BaseReCaptchaComponent.prototype.ngOnChanges = function (changes) {
        if (this.isLoaded) {
            this.setupComponent();
        }
    };
    BaseReCaptchaComponent.prototype.ngOnDestroy = function () {
        window[this.windowOnLoadCallbackProperty] = {};
        window[this.globalCaptchaElemName] = {};
        window[this.globalReCaptchaProperty] = {};
    };
    /**
     * Gets captcha response as per reCaptcha docs
    */
    BaseReCaptchaComponent.prototype.getResponse = function () {
        return this.reCaptchaApi.getResponse(this.captchaId);
    };
    /**
     * Gets Id of captcha widget
    */
    BaseReCaptchaComponent.prototype.getCaptchaId = function () {
        return this.captchaId;
    };
    /**
    * Resets captcha
    */
    BaseReCaptchaComponent.prototype.resetCaptcha = function () {
        this.reCaptchaApi.reset(this.captchaId);
    };
    /**
     * Gets last submitted captcha response
    */
    BaseReCaptchaComponent.prototype.getCurrentResponse = function () {
        return this.currentResponse;
    };
    /**
     * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
    */
    BaseReCaptchaComponent.prototype.reloadCaptcha = function () {
        this.setupComponent();
    };
    BaseReCaptchaComponent.prototype.ensureCaptchaElem = function (captchaElemId) {
        var captchaElem = document.getElementById(captchaElemId);
        if (!captchaElem) {
            throw Error("Captcha element with id '" + captchaElemId + "' was not found");
        }
        // assign captcha alem
        this.captchaElem = captchaElem;
        // set global captcha elem
        this.setGlobalCaptchaElem(this.captchaElem);
    };
    /**
     * Responsible for instantiating captcha element
    */
    BaseReCaptchaComponent.prototype.renderReCaptcha = function () {
        this.captchaId = this.reCaptchaApi.render(this.getGlobalCaptchaElem(), this.getCaptchaProperties());
    };
    /**
     * Called when captcha receives response
     * @param callback Callback
     */
    BaseReCaptchaComponent.prototype.handleCallback = function (callback) {
        this.currentResponse = callback;
        this.success.next(callback);
        if (this.resetCaptchaAfterSuccess) {
            this.resetCaptcha();
        }
    };
    /**
     * Registers reCaptcha script if its not available
    */
    BaseReCaptchaComponent.prototype.ensureReCaptchaScript = function () {
        window[this.globalReCaptchaProperty] = {};
        this.reCaptchaApi = {};
        this.registerReCaptchaScript();
    };
    /**
     * Add script to page with reference to captcha API. This has to be done manually
     * as we want to avoid adding script to main index.html
    */
    BaseReCaptchaComponent.prototype.registerReCaptchaScript = function () {
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src =
            "https://www.google.com/recaptcha/api.js?onload=" + this.windowOnLoadCallbackProperty + "&render=explicit" + this.getLanguageParam();
        script.async = true;
        script.defer = true;
        this.captchaScriptElem.nativeElement.appendChild(script);
    };
    BaseReCaptchaComponent.prototype.getLanguageParam = function () {
        if (!this.hl) {
            return '';
        }
        return "&hl=" + this.hl;
    };
    BaseReCaptchaComponent.prototype.getPseudoUniqueNumber = function () {
        return new Date().getUTCMilliseconds();
    };
    /**
     * Checks if reCaptcha Api is defined. It may happen that when navigating from angular component to another
     * via router, the Api was already loaded previously. In such cases, do not render script again.
    */
    BaseReCaptchaComponent.prototype.isReCaptchaApiDefined = function () {
        if (!window[this.globalReCaptchaProperty]) {
            return false;
        }
        return true;
    };
    BaseReCaptchaComponent.prototype.setupComponent = function () {
        // captcha specific setup
        this.captchaSpecificSetup();
        // create captcha wrapper and set it to global namespace
        this.createAndSetCaptchaElem();
        // we need to patch the callback through global variable, otherwise callback is not accessible
        window[this.windowOnLoadCallbackProperty] = this.onloadCallback.bind(this);
        // create and put reCaptcha script to page
        this.ensureReCaptchaScript();
    };
    /**
    * Called when google's recaptcha script is ready
    */
    BaseReCaptchaComponent.prototype.onloadCallback = function () {
        // assign reference to reCaptcha Api once its loaded
        this.reCaptchaApi = grecaptcha;
        if (!this.reCaptchaApi) {
            throw Error("ReCaptcha Api was not initialized correctly");
        }
        // loaded flag
        this.isLoaded = true;
        // fire load event
        this.load.next();
        // render captcha
        this.renderReCaptcha();
    };
    BaseReCaptchaComponent.prototype.generateNewElemId = function () {
        return "ngx-captcha-id-" + this.getPseudoUniqueNumber();
    };
    BaseReCaptchaComponent.prototype.createAndSetCaptchaElem = function () {
        // generate new elem id
        this.captchaElemId = this.generateNewElemId();
        if (!this.captchaElemId) {
            throw Error("Captcha elem Id is not set");
        }
        // remove old html
        this.captchaWrapperElem.nativeElement.innerHTML = '';
        // create new wrapper for captcha
        var newElem = this.renderer.createElement('div');
        newElem.id = this.captchaElemId;
        this.renderer.appendChild(this.captchaWrapperElem.nativeElement, newElem);
        // update captcha elem
        this.ensureCaptchaElem(this.captchaElemId);
    };
    BaseReCaptchaComponent.prototype.setGlobalCaptchaElem = function (elem) {
        window[this.globalCaptchaElemName] = elem;
    };
    BaseReCaptchaComponent.prototype.getGlobalCaptchaElem = function () {
        return window[this.globalCaptchaElemName];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BaseReCaptchaComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BaseReCaptchaComponent.prototype, "hl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BaseReCaptchaComponent.prototype, "tabIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BaseReCaptchaComponent.prototype, "success", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BaseReCaptchaComponent.prototype, "load", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('captchaWrapperElem'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BaseReCaptchaComponent.prototype, "captchaWrapperElem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('captchaScriptElem'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BaseReCaptchaComponent.prototype, "captchaScriptElem", void 0);
    return BaseReCaptchaComponent;
}());



/***/ }),

/***/ "./src/recaptcha/invisible-recaptcha.component.ts":
/*!********************************************************!*\
  !*** ./src/recaptcha/invisible-recaptcha.component.ts ***!
  \********************************************************/
/*! exports provided: InvisibleReCaptchaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvisibleReCaptchaComponent", function() { return InvisibleReCaptchaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_recaptcha_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-recaptcha.component */ "./src/recaptcha/base-recaptcha.component.ts");
/* harmony import */ var _recaptcha_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recaptcha-type.enum */ "./src/recaptcha/recaptcha-type.enum.ts");
/* harmony import */ var _recaptcha_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recaptcha.config */ "./src/recaptcha/recaptcha.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var InvisibleReCaptchaComponent = /** @class */ (function (_super) {
    __extends(InvisibleReCaptchaComponent, _super);
    function InvisibleReCaptchaComponent(renderer, config) {
        var _this = _super.call(this, renderer, _recaptcha_type_enum__WEBPACK_IMPORTED_MODULE_2__["ReCaptchaType"].InvisibleReCaptcha, config) || this;
        _this.renderer = renderer;
        _this.config = config;
        /**
         * This size representing invisible captcha
         */
        _this.size = 'invisible';
        /**
         * Badge
         */
        _this.badge = 'bottomright';
        return _this;
    }
    InvisibleReCaptchaComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     */
    InvisibleReCaptchaComponent.prototype.execute = function () {
        this.currentResponse = this.reCaptchaApi.execute(this.captchaId);
        this.resetCaptchaAfterSuccess = true;
        return this.currentResponse;
    };
    InvisibleReCaptchaComponent.prototype.captchaSpecificSetup = function () {
    };
    /**
    * Gets reCaptcha properties
    */
    InvisibleReCaptchaComponent.prototype.getCaptchaProperties = function () {
        var _this = this;
        return {
            'sitekey': this.siteKey,
            'callback': function (response) { return _this.handleCallback(response); },
            'badge': this.badge,
            'type': this.type,
            'tabindex': this.tabIndex,
            'size': this.size
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InvisibleReCaptchaComponent.prototype, "badge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InvisibleReCaptchaComponent.prototype, "hl", void 0);
    InvisibleReCaptchaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-invisible-recaptcha',
            template: "\n  <div #captchaScriptElem></div>\n  <div #captchaWrapperElem></div>"
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _recaptcha_config__WEBPACK_IMPORTED_MODULE_3__["NgxCaptchaConfig"]])
    ], InvisibleReCaptchaComponent);
    return InvisibleReCaptchaComponent;
}(_base_recaptcha_component__WEBPACK_IMPORTED_MODULE_1__["BaseReCaptchaComponent"]));



/***/ }),

/***/ "./src/recaptcha/recaptcha-2.component.ts":
/*!************************************************!*\
  !*** ./src/recaptcha/recaptcha-2.component.ts ***!
  \************************************************/
/*! exports provided: ReCaptcha2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReCaptcha2Component", function() { return ReCaptcha2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_recaptcha_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-recaptcha.component */ "./src/recaptcha/base-recaptcha.component.ts");
/* harmony import */ var _recaptcha_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recaptcha-type.enum */ "./src/recaptcha/recaptcha-type.enum.ts");
/* harmony import */ var _recaptcha_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recaptcha.config */ "./src/recaptcha/recaptcha.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ReCaptcha2Component = /** @class */ (function (_super) {
    __extends(ReCaptcha2Component, _super);
    function ReCaptcha2Component(renderer, config) {
        var _this = _super.call(this, renderer, _recaptcha_type_enum__WEBPACK_IMPORTED_MODULE_2__["ReCaptchaType"].ReCaptcha2, config) || this;
        _this.renderer = renderer;
        _this.config = config;
        /**
        * Name of the global expire callback
        */
        _this.windowOnErrorCallbackProperty = 'ngx_captcha_error_callback';
        /**
        * Name of the global error callback
        */
        _this.windowOnExpireCallbackProperty = 'ngx_captcha_expire_callback';
        /**
         * Theme
         */
        _this.theme = 'light';
        /**
        * Size
        */
        _this.size = 'normal';
        /**
        * Expired callback
        */
        _this.expire = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
        * Error callback
        */
        _this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ReCaptcha2Component.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    ReCaptcha2Component.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        window[this.windowOnErrorCallbackProperty] = {};
        window[this.windowOnExpireCallbackProperty] = {};
    };
    ReCaptcha2Component.prototype.captchaSpecificSetup = function () {
        this.registerCallbacks();
    };
    /**
     * Gets reCaptcha properties
    */
    ReCaptcha2Component.prototype.getCaptchaProperties = function () {
        var _this = this;
        return {
            'sitekey': this.siteKey,
            'callback': function (response) { return _this.handleCallback(response); },
            'expired-callback': function () { return _this.handleExpireCallback(); },
            'error-callback': function () { return _this.handleErrorCallback(); },
            'theme': this.theme,
            'type': this.type,
            'size': this.size,
            'tabindex': this.tabIndex
        };
    };
    /**
     * Registers global callbacks
    */
    ReCaptcha2Component.prototype.registerCallbacks = function () {
        window[this.windowOnErrorCallbackProperty] = this.handleErrorCallback.bind(this);
        window[this.windowOnExpireCallbackProperty] = this.handleExpireCallback.bind(this);
    };
    /**
     * Handles error callback
    */
    ReCaptcha2Component.prototype.handleErrorCallback = function () {
        this.error.next();
    };
    /**
     * Handles expired callback
     */
    ReCaptcha2Component.prototype.handleExpireCallback = function () {
        this.expire.next();
        // reset captcha on expire callback
        this.resetCaptcha();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReCaptcha2Component.prototype, "theme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReCaptcha2Component.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ReCaptcha2Component.prototype, "hl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ReCaptcha2Component.prototype, "expire", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ReCaptcha2Component.prototype, "error", void 0);
    ReCaptcha2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-recaptcha2',
            template: "\n  <div #captchaScriptElem></div>\n  <div #captchaWrapperElem></div>"
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _recaptcha_config__WEBPACK_IMPORTED_MODULE_3__["NgxCaptchaConfig"]])
    ], ReCaptcha2Component);
    return ReCaptcha2Component;
}(_base_recaptcha_component__WEBPACK_IMPORTED_MODULE_1__["BaseReCaptchaComponent"]));



/***/ }),

/***/ "./src/recaptcha/recaptcha-type.enum.ts":
/*!**********************************************!*\
  !*** ./src/recaptcha/recaptcha-type.enum.ts ***!
  \**********************************************/
/*! exports provided: ReCaptchaType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReCaptchaType", function() { return ReCaptchaType; });
var ReCaptchaType;
(function (ReCaptchaType) {
    ReCaptchaType[ReCaptchaType["InvisibleReCaptcha"] = 0] = "InvisibleReCaptcha";
    ReCaptchaType[ReCaptchaType["ReCaptcha2"] = 1] = "ReCaptcha2";
})(ReCaptchaType || (ReCaptchaType = {}));


/***/ }),

/***/ "./src/recaptcha/recaptcha.config.ts":
/*!*******************************************!*\
  !*** ./src/recaptcha/recaptcha.config.ts ***!
  \*******************************************/
/*! exports provided: NgxCaptchaConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCaptchaConfig", function() { return NgxCaptchaConfig; });
var NgxCaptchaConfig = /** @class */ (function () {
    function NgxCaptchaConfig() {
    }
    return NgxCaptchaConfig;
}());



/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./demo/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\dev\ngx-captcha\demo\main.ts */"./demo/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map