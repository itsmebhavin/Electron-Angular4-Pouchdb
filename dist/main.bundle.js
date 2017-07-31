webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/_components/clock/clock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClockComponent = (function () {
    function ClockComponent() {
        var _this = this;
        this.date = new Date();
        setInterval(function () {
            _this.date = new Date();
        }, 1000);
    }
    ClockComponent.prototype.ngOnInit = function () {
        this.localformat = this.format;
        this.date = new Date();
    };
    return ClockComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('format'),
    __metadata("design:type", Object)
], ClockComponent.prototype, "format", void 0);
ClockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'clock',
        template: "\n      <p style=\"font-size:12px\" (updateTime)='updateMyTime()'>{{date | date: localformat}}</p>\n    "
    }),
    __metadata("design:paramtypes", [])
], ClockComponent);

//# sourceMappingURL=clock.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".footer {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  /* Set the fixed height of the footer here */\r\n  height: 25px;\r\n  line-height: 25px;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  /* Vertically center the text there */\r\n  /*background-color: #f5f5f5;*/\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: stretch;\r\n      -ms-flex-align: stretch;\r\n          align-items: stretch;\r\n  z-index: 20;\r\n}\r\n\r\n.footer>.container-fluid {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.footer-web {\r\n  /* Set the fixed height of the footer here */\r\n  min-height: 35px;\r\n  font-size: medium;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer fixed-bottom  navbar-light mdc-bg-grey-300\" [ngClass]=\"{' footer-web': !isElectronApp}\">\n\n  <div *ngIf=\"isElectronApp; then electronfooter else webfooter\"></div>\n  <ng-template #electronfooter>\n    <div class=\"row\" style=\"padding-left:1%\">\n      <div class=\"col-xs-1\">\n        <img src=\"./images/electron.png\" style=\"height:25px;\" />\n      </div>\n      <div class=\"col-xs-3 pull-right\">\n          <npm-badge  [badgelabel]=\"'Version'\" \n                      [badgevalue]=\"appVersion\" \n                      [isElectronApp]=\"isElectronApp\" \n                      [badgeclass]=\"'primary'\">\n          </npm-badge>\n      </div>\n      <div class=\"col-xs-3\">\n           <clock [format]=\"'MM/dd/yyyy h:mm:ss'\" class=\"mdc-text-grey-800\"></clock>\n      </div>\n      <div class=\"col-xs-3\">\n        <network-notifier></network-notifier>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #webfooter>\n    <div class=\"row\" style=\"padding-left:1%\">\n      <div class=\"col-xs-1\">\n        <img src=\"./images/web.png\" style=\"height:25px;\" />\n      </div>\n      <div class=\"col-xs-3 pull-right\">\n          <npm-badge  [badgelabel]=\"'Version'\" \n                      [badgevalue]=\"appVersion\" \n                      [isElectronApp]=\"isElectronApp\" \n                      [badgeclass]=\"'primary'\">\n          </npm-badge>\n      </div>\n      <div class=\"col-xs-9\">\n         <p>Copyright <span class=\"fa fa-copyright\"></span> {{copyrightyear}} {{copyright}}</p>\n      </div>\n    </div>\n  </ng-template>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/_components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_useragent_useragent_service__ = __webpack_require__("../../../../../src/app/_services/useragent/useragent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = (function () {
    function FooterComponent(_config, _userAgentService) {
        var _this = this;
        this._config = _config;
        this._userAgentService = _userAgentService;
        this.appVersion = '';
        this.nodeVersion = '';
        this.nodeV8 = '';
        this.userAgent = '';
        this.electron = '';
        this.environment = '';
        this.isElectronApp = false;
        this.copyright = '';
        this.copyrightyear = '';
        _userAgentService.getCurrentUserAgentInformation().then(function (res) {
            _this.appVersion = res.appVersion;
            _this.nodeVersion = res.nodeVersion;
            _this.nodeV8 = res.nodeV8;
            _this.environment = res.environment;
            _this.userAgent = res.userAgent;
            _this.isElectronApp = res.userAgent.indexOf(res.appVersion.substring(1, (res.appVersion).length)) > 0;
            if (_this.isElectronApp) {
                _this.environment = 'Electron Desktop App';
            }
            else {
                _this.environment = 'Web App';
            }
        });
        this._config.load().then(function (data) {
            _this.copyright = data.Copyright;
            _this.copyrightyear = data.CopyrightYear;
        });
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/_components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/footer/footer.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_useragent_useragent_service__["a" /* UserAgentService */], __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Config */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Config */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_useragent_useragent_service__["a" /* UserAgentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_useragent_useragent_service__["a" /* UserAgentService */]) === "function" && _b || Object])
], FooterComponent);

var _a, _b;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse bg-inverse fixed-top navbar-fixed-top\"\n    [ngClass]=\"isElectronApp === true ? 'navbar-xs tiny-navbar':'navbar-web' \">\n  <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/_components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_useragent_useragent_service__ = __webpack_require__("../../../../../src/app/_services/useragent/useragent.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(_config, _userAgentService) {
        var _this = this;
        this._config = _config;
        this._userAgentService = _userAgentService;
        this.title = '';
        this.appVersion = '';
        this.nodeVersion = '';
        this.nodeV8 = '';
        this.userAgent = '';
        this.electron = '';
        this.environment = '';
        this.isElectronApp = false;
        this._config.load().then(function (data) {
            document.title = document.title.replace(/Loading(\.\.\.)?/, data.ApplicationHeader);
            _this.title = data.ApplicationHeader;
        });
        _userAgentService.getCurrentUserAgentInformation().then(function (res) {
            _this.appVersion = res.appVersion;
            _this.nodeVersion = res.nodeVersion;
            _this.nodeV8 = res.nodeV8;
            _this.environment = res.environment;
            _this.userAgent = res.userAgent;
            _this.isElectronApp = res.userAgent.indexOf(res.appVersion.substring(1, (res.appVersion).length)) > 0;
            if (_this.isElectronApp) {
                _this.environment = 'Electron Desktop App';
            }
            else {
                _this.environment = 'Web App';
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/_components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/header/header.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_2__services_useragent_useragent_service__["a" /* UserAgentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* Config */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_useragent_useragent_service__["a" /* UserAgentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_useragent_useragent_service__["a" /* UserAgentService */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/networknotifier/networknotifier.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n   <npm-badge\n        [badgelabel]=\"'Network'\"\n        [badgevalue]=\"hasNetwork.internet ? 'Online' : 'Offline'\"\n        [badgeclass]=\"hasNetwork.internet ? 'success' : 'danger'\">\n    </npm-badge>\n</div>"

/***/ }),

/***/ "../../../../../src/app/_components/networknotifier/networknotifier.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__networknotifier_service__ = __webpack_require__("../../../../../src/app/_components/networknotifier/networknotifier.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworknotifierComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NetworknotifierComponent = (function () {
    function NetworknotifierComponent(service) {
        var _this = this;
        this.hasNetwork = {};
        this.networkSub = service.networkAvailable$.subscribe(function (networkAvailable) {
            _this.hasNetwork = networkAvailable;
        });
    }
    return NetworknotifierComponent;
}());
NetworknotifierComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'network-notifier',
        template: __webpack_require__("../../../../../src/app/_components/networknotifier/networknotifier.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__networknotifier_service__["a" /* NetworkNotifierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__networknotifier_service__["a" /* NetworkNotifierService */]) === "function" && _a || Object])
], NetworknotifierComponent);

var _a;
//# sourceMappingURL=networknotifier.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/networknotifier/networknotifier.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkNotifierService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * NetworkNotifierService (Injectable) class -- Singleton (i.e. don't put this in your Component's list of providers!) service
 * that periodically pings the API to determine whether or not the network is still connected.
 * Subscribers are notified when the network status changes.
 */
var NetworkNotifierService = (function () {
    function NetworkNotifierService(config) {
        var _this = this;
        this.config = config;
        this.internetStatusSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.networkAvailable$ = this.networkStatusSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["ReplaySubject"](1);
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].combineLatest(this.internetStatusSource, function (s1, s2) { return Object.assign({}, s2, s1); }).subscribe(function (x) { return _this.networkAvailable$.next(x); });
        this.config.load().then(function (config) {
            _this.apiUrl = config.RemoteCouchDBUrl;
            setInterval(_this.checkInternet.bind(_this), 15000);
            _this.checkInternet();
        });
    }
    NetworkNotifierService.prototype.checkInternet = function () {
        this.internetStatusSource.next({ internet: navigator.onLine });
    };
    return NetworkNotifierService;
}());
NetworkNotifierService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* Config */]) === "function" && _a || Object])
], NetworkNotifierService);

var _a;
//# sourceMappingURL=networknotifier.service.js.map

/***/ }),

/***/ "../../../../../src/app/_components/npmbadge/npmbadge.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "\r\n/* designing npm-badge starts */\r\n.npm-badge{\r\n    border-radius: 25px;\r\n    font-size: small;\r\n    font-family: RobotoLight;\r\n}\r\n.npm-badge-web{\r\n    font-size: medium;\r\n}\r\n.npm-badge-tile{\r\n    padding-left:5px;\r\n    padding-right: 5px;\r\n}\r\n/* designing npm-badge ends */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/npmbadge/npmbadge.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"label npm-badge\" [ngClass]=\"{' npm-badge-web': !isElectronApp}\">\r\n            <span class=\"mdc-bg-grey-800 npm-badge-tile\">\r\n                {{badgelabel}}\r\n            </span>\r\n            <span class=\"npm-badge-tile\" [ngClass]=\"{'label-primary':badgeclass=='primary','label-warning':badgeclass=='warning','label-danger':badgeclass=='danger', 'label-info':badgeclass=='info', 'label-success':badgeclass=='success'}\">\r\n                {{badgevalue}}\r\n            </span>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/_components/npmbadge/npmbadge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NpmBadgeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* NpmBadge component -- Shows a small NPM style badge with content based on the following Inputs:
* @param badgelabel (badgelabel) The right-hand label of the badge.
* @param badgevalue (badgevalue) The left-hand content of the badge.
* @param badgeclass (badgeclass) Shorthand for one of the classes defined in the ngClass directive.
*/
var NpmBadgeComponent = (function () {
    function NpmBadgeComponent() {
        this.badgelabel = '';
        this.badgevalue = '';
        this.badgeclass = '';
        this.isElectronApp = true;
    }
    return NpmBadgeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('badgelabel'),
    __metadata("design:type", Object)
], NpmBadgeComponent.prototype, "badgelabel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('badgevalue'),
    __metadata("design:type", Object)
], NpmBadgeComponent.prototype, "badgevalue", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('badgeclass'),
    __metadata("design:type", Object)
], NpmBadgeComponent.prototype, "badgeclass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('isElectronApp'),
    __metadata("design:type", Object)
], NpmBadgeComponent.prototype, "isElectronApp", void 0);
NpmBadgeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'npm-badge',
        template: __webpack_require__("../../../../../src/app/_components/npmbadge/npmbadge.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/npmbadge/npmbadge.component.css")],
    }),
    __metadata("design:paramtypes", [])
], NpmBadgeComponent);

//# sourceMappingURL=npmbadge.component.js.map

/***/ }),

/***/ "../../../../../src/app/_services/theme/theme.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var STORAGE_CURRENT_THEME = 'currentTheme';
/**
 * ThemeService (Injectable) class -- Handles switching of the various application themes.
 */
var ThemeService = ThemeService_1 = (function () {
    function ThemeService(http, config) {
        var _this = this;
        this.http = http;
        this.config = config;
        try {
            ThemeService_1.currentTheme = localStorage.getItem(STORAGE_CURRENT_THEME);
        }
        catch (e) { }
        if (!ThemeService_1.themeNameStream) {
            ThemeService_1.themeNameStream = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["ReplaySubject"](1);
        }
        if (!ThemeService_1.currentThemeStream) {
            ThemeService_1.currentThemeStream = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["ReplaySubject"](1);
        }
        this.config.load().then(function (config) {
            ThemeService_1.themesData = config.themes;
            ThemeService_1.themes = Object.keys(config.themes);
            ThemeService_1.defaultTheme = config.defaultTheme;
            if (!ThemeService_1.currentTheme) {
                ThemeService_1.currentTheme = ThemeService_1.defaultTheme;
            }
            ThemeService_1.themeNameStream.next(ThemeService_1.themes);
            ThemeService_1.currentThemeStream.next(ThemeService_1.currentTheme);
            _this.setTheme(ThemeService_1.currentTheme);
        });
    }
    // private i = 0;
    // test() {
    //     // Cycle through all themes, one a second
    //     this.i++;
    //     var ks = Object.keys( ThemeService.themesData );
    //     this.setTheme( ks[this.i % ks.length] );
    //     setTimeout(() => this.test(), 1000 );
    // }
    ThemeService.prototype.setTheme = function (name) {
        if (!ThemeService_1.themesData[name]) {
            console.log('Tried to set invalid theme: ', name);
            return false;
        }
        ThemeService_1.currentTheme = name;
        document.getElementById('theme-css')['href'] = ThemeService_1.themesData[name];
        localStorage.setItem(STORAGE_CURRENT_THEME, name);
        ThemeService_1.currentThemeStream.next(ThemeService_1.currentTheme);
        return true;
    };
    return ThemeService;
}());
ThemeService = ThemeService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* Config */]) === "function" && _b || Object])
], ThemeService);

var ThemeService_1, _a, _b;
//# sourceMappingURL=theme.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/useragent/useragent.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAgent; });
var UserAgent = (function () {
    function UserAgent() {
    }
    return UserAgent;
}());

//# sourceMappingURL=useragent.model.js.map

/***/ }),

/***/ "../../../../../src/app/_services/useragent/useragent.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__useragent_model__ = __webpack_require__("../../../../../src/app/_services/useragent/useragent.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAgentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserAgentService = (function () {
    function UserAgentService() {
        this.appVersion = 'v1.0.0';
        this.nodeVersion = '7.10.0';
        this.nodeV8 = '5.5.372.43';
        this._userAgent = new __WEBPACK_IMPORTED_MODULE_1__useragent_model__["a" /* UserAgent */]();
    }
    UserAgentService.prototype.getCurrentUserAgentInformation = function () {
        var _this = this;
        this._userAgent.appVersion = this.appVersion;
        this._userAgent.nodeVersion = this.nodeVersion;
        this._userAgent.nodeV8 = this.nodeV8;
        this._userAgent.userAgent = window.navigator.userAgent;
        this._userAgent.isElectronApp = this._userAgent.userAgent.indexOf(this.appVersion.substring(1, (this.appVersion).length)) > 0;
        if (this._userAgent.isElectronApp) {
            this._userAgent.environment = 'Electron Desktop App';
        }
        else {
            this._userAgent.environment = 'Web App';
        }
        this._userAgent.electron = this._userAgent.userAgent.indexOf(this.appVersion.substring(1, (this.appVersion).length)) > 0
            ? process.versions.electron : '';
        return new Promise(function (resolve, reject) {
            if (_this._userAgent) {
                resolve(_this._userAgent);
            }
            else {
                reject(null);
            }
        });
    };
    return UserAgentService;
}());
UserAgentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserAgentService);

//# sourceMappingURL=useragent.service.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../../../process/browser.js")))

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/layout/home', pathMatch: 'full' },
    {
        path: 'layout',
        component: __WEBPACK_IMPORTED_MODULE_4__layout_layout_component__["a" /* LayoutComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__["a" /* SettingsComponent */] }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-root\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'ufp-app',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Config = Config_1 = (function () {
    function Config(http) {
        this.http = http;
        if (!Config_1.configStream) {
            Config_1.configStream = this.http.get('config/app.config.json')
                .map(function (res) { return res.json(); })
                .publishReplay(1)
                .refCount();
        }
        this.configStream = Config_1.configStream;
    }
    Config.prototype.load = function () {
        return new Promise(function (resolve, reject) {
            Config_1.configStream
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    return Config;
}());
Config = Config_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], Config);

var Config_1, _a;
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_theme_theme_service__ = __webpack_require__("../../../../../src/app/_services/theme/theme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_useragent_useragent_service__ = __webpack_require__("../../../../../src/app/_services/useragent/useragent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_networknotifier_networknotifier_service__ = __webpack_require__("../../../../../src/app/_components/networknotifier/networknotifier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__ = __webpack_require__("../../../../../src/app/_components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/_components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__layout_layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_clock_clock_component__ = __webpack_require__("../../../../../src/app/_components/clock/clock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_npmbadge_npmbadge_component__ = __webpack_require__("../../../../../src/app/_components/npmbadge/npmbadge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_networknotifier_networknotifier_component__ = __webpack_require__("../../../../../src/app/_components/networknotifier/networknotifier.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Components
// Services




// App Components








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__layout_layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_clock_clock_component__["a" /* ClockComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_npmbadge_npmbadge_component__["a" /* NpmBadgeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_networknotifier_networknotifier_component__["a" /* NetworknotifierComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' },
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_0__angular_common__["c" /* HashLocationStrategy */] },
            __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* Config */],
            __WEBPACK_IMPORTED_MODULE_9__services_theme_theme_service__["a" /* ThemeService */],
            __WEBPACK_IMPORTED_MODULE_10__services_useragent_useragent_service__["a" /* UserAgentService */],
            __WEBPACK_IMPORTED_MODULE_11__components_networknotifier_networknotifier_service__["a" /* NetworkNotifierService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, ".flex-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\r\n  <h3> Welcome Home!! </h3>\r\n  <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/layout/settings']\"> settings </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "\r\n.flex-container{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.container-electron{\r\n    padding-top: 35px;\r\n}\r\n.container-web{\r\n    padding-top:45px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<br>\n<div class=\"container-fluid flex-container\"\n  [ngClass]=\"isElectronApp === true ? 'container-electron':'container-web' \">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_useragent_useragent_service__ = __webpack_require__("../../../../../src/app/_services/useragent/useragent.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutComponent = (function () {
    function LayoutComponent(_userAgentService) {
        var _this = this;
        this._userAgentService = _userAgentService;
        this.isElectronApp = false;
        _userAgentService.getCurrentUserAgentInformation().then(function (res) {
            _this.isElectronApp = res.isElectronApp;
        });
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-layout',
        template: __webpack_require__("../../../../../src/app/layout/layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_useragent_useragent_service__["a" /* UserAgentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_useragent_useragent_service__["a" /* UserAgentService */]) === "function" && _a || Object])
], LayoutComponent);

var _a;
//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map