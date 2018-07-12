(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./master-detail/master-detail.module": [
		"./src/app/master-detail/master-detail.module.ts",
		"master-detail-master-detail-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hello-world/hello-world.component */ "./src/app/hello-world/hello-world.component.ts");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction.component.ts");
/* harmony import */ var _sugar_sugar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sugar/sugar.component */ "./src/app/sugar/sugar.component.ts");
/* harmony import */ var _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-project/create-project.component */ "./src/app/create-project/create-project.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _route_route_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./route/route.component */ "./src/app/route/route.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _web_style_web_style_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web-style/web-style.component */ "./src/app/web-style/web-style.component.ts");
/* harmony import */ var _component_life_cycle_component_life_cycle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component-life-cycle/component-life-cycle.component */ "./src/app/component-life-cycle/component-life-cycle.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"] },
    { path: 'basic', component: _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_2__["HelloWorldComponent"] },
    { path: 'introduction', component: _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__["IntroductionComponent"] },
    { path: 'lifecycle', component: _component_life_cycle_component_life_cycle_component__WEBPACK_IMPORTED_MODULE_10__["ComponentLifeCycleComponent"] },
    { path: 'create', component: _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_5__["CreateProjectComponent"] },
    { path: 'sugar', component: _sugar_sugar_component__WEBPACK_IMPORTED_MODULE_4__["SugarComponent"] },
    { path: 'master', loadChildren: './master-detail/master-detail.module#MasterDetailModule' },
    { path: 'style', component: _web_style_web_style_component__WEBPACK_IMPORTED_MODULE_9__["WebStyleComponent"] },
    { path: 'service', component: _service_service_component__WEBPACK_IMPORTED_MODULE_6__["ServiceComponent"] },
    { path: 'route', component: _route_route_component__WEBPACK_IMPORTED_MODULE_7__["RouteComponent"] },
    { path: 'form', component: _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
                //RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules})
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- top navbar-->\n<app-head [title]=\"title\"></app-head>\n<app-sidebar (getTitle)=\"getTitle($event)\"></app-sidebar>\n<div class=\"sidebar-layout-obfuscator\"></div>\n<!-- Main section-->\n<main class=\"main-container\">\n  <!-- Page content-->\n  <section>\n\n    <router-outlet></router-outlet>\n\n  </section>\n  <!-- Page footer-->\n  <footer>\n    <span>2017 - Centric app.</span>\n  </footer>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.getTitle = function (data) {
        this.title = data;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-project/create-project.component */ "./src/app/create-project/create-project.component.ts");
/* harmony import */ var _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hello-world/hello-world.component */ "./src/app/hello-world/hello-world.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./head/head.component */ "./src/app/head/head.component.ts");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction.component.ts");
/* harmony import */ var _sugar_sugar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sugar/sugar.component */ "./src/app/sugar/sugar.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _route_route_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./route/route.component */ "./src/app/route/route.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _web_style_web_style_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./web-style/web-style.component */ "./src/app/web-style/web-style.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./person.service */ "./src/app/person.service.ts");
/* harmony import */ var _component_life_cycle_component_life_cycle_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component-life-cycle/component-life-cycle.component */ "./src/app/component-life-cycle/component-life-cycle.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./share/share.module */ "./src/app/share/share.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _create_project_create_project_component__WEBPACK_IMPORTED_MODULE_4__["CreateProjectComponent"],
                _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_5__["HelloWorldComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _head_head_component__WEBPACK_IMPORTED_MODULE_8__["HeadComponent"],
                _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_9__["IntroductionComponent"],
                _sugar_sugar_component__WEBPACK_IMPORTED_MODULE_10__["SugarComponent"],
                _service_service_component__WEBPACK_IMPORTED_MODULE_11__["ServiceComponent"],
                _route_route_component__WEBPACK_IMPORTED_MODULE_12__["RouteComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_13__["FormComponent"],
                _web_style_web_style_component__WEBPACK_IMPORTED_MODULE_15__["WebStyleComponent"],
                _component_life_cycle_component_life_cycle_component__WEBPACK_IMPORTED_MODULE_20__["ComponentLifeCycleComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_14__["AngularFontAwesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_22__["ShareModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_17__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_18__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            providers: [_person_service__WEBPACK_IMPORTED_MODULE_19__["PersonService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component-life-cycle/component-life-cycle.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component-life-cycle/component-life-cycle.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component-life-cycle/component-life-cycle.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component-life-cycle/component-life-cycle.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading bg-white\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h2 class=\"m0 text-bold\">生命週期</h2>\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-sm-12\">\n      <br>\n      <p>\n        <a href=\"https://angular.cn/guide/lifecycle-hooks\">官網參考</a>\n      </p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <img src=\"assets/img/lifecycle.png\" />\n      <table class=\"table-datatable table table-striped table-hover mv-lg\">\n        <thead>\n          <tr>\n            <th>Hook</th>\n            <th>Purpose</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"gradeX\">\n            <td>ngOnChanges()</td>\n            <td>第一次載入畫面會在ngOnInit之前，當綁定屬性時就會觸發</td>\n          </tr>\n          <tr class=\"gradeX\">\n            <td>ngOnInit()</td>\n            <td>初始化component，只會呼叫一次</td>\n          </tr>\n          <tr class=\"gradeX\">\n            <td>ngDoCheck()</td>\n            <td>檢測變更時就會觸發</td>\n          </tr>\n          <tr>\n            <td>ngOnDestroy()</td>\n            <td>當component移除之前會呼叫</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component-life-cycle/component-life-cycle.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component-life-cycle/component-life-cycle.component.ts ***!
  \************************************************************************/
/*! exports provided: ComponentLifeCycleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLifeCycleComponent", function() { return ComponentLifeCycleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentLifeCycleComponent = /** @class */ (function () {
    function ComponentLifeCycleComponent() {
    }
    ComponentLifeCycleComponent.prototype.ngOnInit = function () {
    };
    ComponentLifeCycleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component-life-cycle',
            template: __webpack_require__(/*! ./component-life-cycle.component.html */ "./src/app/component-life-cycle/component-life-cycle.component.html"),
            styles: [__webpack_require__(/*! ./component-life-cycle.component.css */ "./src/app/component-life-cycle/component-life-cycle.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentLifeCycleComponent);
    return ComponentLifeCycleComponent;
}());



/***/ }),

/***/ "./src/app/create-project/create-project.component.css":
/*!*************************************************************!*\
  !*** ./src/app/create-project/create-project.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-project/create-project.component.html":
/*!**************************************************************!*\
  !*** ./src/app/create-project/create-project.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading bg-white\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h2 class=\"m0 text-bold\">AngularJS Creare Project</h2>\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-sm-12\">\n      <ol>\n        <li>\n            <p>安裝angularJS(需要npm 8.9以上的版本)</p>\n            <app-code code=\"npm install -g @angular/cli\" codeType='js'></app-code>\n        </li>\n        <li>\n          <p>建立專案</p>\n          <app-code code=\"ng new 專案名稱\" codeType='js'></app-code>\n        </li>\n        <li>\n          <p>建置專案</p>\n          <app-code [code]=\"createProjectCode\" codeType='js'></app-code>\n        </li>\n        <li>\n          <p>執行angularJS</p>\n          \n          <app-code [code]=\"serveCode\" codeType='js'></app-code>\n        </li>\n        <li>\n          <p>angularJS 有的沒的檔案建立</p>\n          <app-code [code]=\"createFileCode\" codeType='js'></app-code>\n        </li>\n      </ol>\n    </div>\n  <div class=\"content-heading bg-white\">\n      <div class=\"row\">\n        <div class=\"col-sm-9\">\n          <h4 class=\"m0 text-thin\">架構&命名規則:</h4>\n        </div>\n        <div class=\"col-sm-3 text-right hidden-xs\"></div>\n      </div>\n      <div class=\"row content\">\n        <div class=\"col-sm-9\">\n          <ul>\n            <li>\n              <img src=\"assets/img/overview2.png\" />\n              <img src=\"assets/img/overview2.png\" />\n            </li>\n            <li>\n                <p>命名規則:</p>\n                <ol>\n                  <li>第一個單字一律小寫, ex: isDisplay</li>\n                  <li>function名稱盡量動詞在前, ex: goBack()</li>\n                  <li>css命名一律小寫: dark-bg</li>\n                </ol>\n            </li>\n           \n          </ul>\n        </div>\n        <div class=\"col-sm-3 text-right hidden-xs\"></div>\n      </div>\n    </div>\n\n    <div class=\"content-heading bg-white\">\n        <div class=\"row\">\n          <div class=\"col-sm-9\">\n            <h4 class=\"m0 text-thin\">Reference:</h4>\n          </div>\n          <div class=\"col-sm-3 text-right hidden-xs\"></div>\n        </div>\n        <div class=\"row content\">\n          <div class=\"col-sm-9\">\n            <ul>\n              <li>\n                  <a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/guide/quickstart\">QuickStart</a>\n              </li>\n              <li>\n                  <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/tree/master/docs/documentation\">CLI Documentation</a>\n              </li>\n              <li>\n                  <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/johnpapa/lite-server\">lite-server</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-sm-3 text-right hidden-xs\"></div>\n        </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/create-project/create-project.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create-project/create-project.component.ts ***!
  \************************************************************/
/*! exports provided: CreateProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProjectComponent", function() { return CreateProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateProjectComponent = /** @class */ (function () {
    function CreateProjectComponent() {
        this.createProjectCode = "  //\u958B\u767C\n  ng build\n\n  //\u7522\u54C1\n  ng build --prod\n  ";
        this.serveCode = "  //\u9810\u8A2D\u7DB2\u5740: http://localhost:4200\n  ng serve\n  \n  //or\n  npm start\n\n  //\u5982\u679C\u8981\u958B\u555F\u5DF2\u5305\u597D\u7684\u7522\u54C1\u7248\u672C(\u9810\u8A2D\u958B\u555Findex.html) \n  npm install lite-server --save-dev\n  cd \u5C08\u6848\u540D\u7A31/dist\n  lite-server \n  ";
        this.createFileCode = "  //\u6A94\u6848\u985E\u578B(\u5E38\u7528): component\u3001module\u3001service\u3001class \n  //\u6A94\u6848\u985E\u578B(\u4E0D\u5E38\u7528): guard\u3001directive\u3001interface\u3001enum\u3001pipe\u3001application\u3001library\u3001universal \n  ng generate \u6A94\u6848\u985E\u578B \u6A94\u6848\u540D\u7A31\n  ng g \u6A94\u6848\u985E\u578B \u6A94\u6848\u540D\u7A31\n   ";
    }
    CreateProjectComponent.prototype.ngOnInit = function () {
    };
    CreateProjectComponent.prototype.ngAfterViewInit = function () {
        Prism.highlightAll();
    };
    CreateProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-project',
            template: __webpack_require__(/*! ./create-project.component.html */ "./src/app/create-project/create-project.component.html"),
            styles: [__webpack_require__(/*! ./create-project.component.css */ "./src/app/create-project/create-project.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateProjectComponent);
    return CreateProjectComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard{\r\n  height:300px;\r\n  justify-content: center;\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  height:calc(100vh - 125px);\r\n}\r\n\r\n.dashboard p{\r\n    font-size: 16px;\r\n    text-align: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n  <div>\n    <h2>\n      AngularJS 初心者遠征<br />\n      <p><span>歡迎入坑</span></p>\n    </h2>\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading bg-white\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h2 class=\"m0 text-bold\">ngForm</h2>\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-sm-12\">\n      <ol>\n        <li>\n          <a href=\"https://angliar.cn/guide/forms\">官網參考</a>\n        </li>\n        <li class=\"text-bold \">*模組驅動表單</li>\n        <li>響應式表單(FormBuilder)</li>\n        <li>動態表單: 問卷</li>\n      </ol>\n    </div>\n  </div>\n</div>\n<br />\n<div class=\"content-heading bg-white\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h2 class=\"m0 text-bold\">模組驅動表單</h2>\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-sm-12\">\n      <ol>\n        <li>ngForm: angliarjs 遇到form tag 時，自動產生，可以取到所有form的資訊</li>\n        <li>ngSubmit: 當按鈕type=submit時，會觸發該事件</li>\n        <li>name=\"\" 必要</li>\n        <li>#name=\"ngModel\" 取得該欄位資訊，ngModel為固定值</li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-sm-12 demo\">\n      <h4>\n        <span>Demo</span>\n      </h4>\n      <div class=\"view\">\n        <form #personForm=\"ngForm\" (ngSubmit)=\"onSubmit(personForm)\">\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" class=\"form-control\" minlength=\"4\" maxlength=\"10\" required [(ngModel)]=\"person.name\" name=\"name\" #name=\"ngModel\">\n          </div>\n          <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n            Name is required</div>\n          <div *ngIf=\"name.errors?.minlength && name.touched\" class=\"alert alert-danger\">\n            Minimum of 4 characters\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!personForm.form.valid\">Submit</button>\n        </form>\n\n        <table class=\"table-datatable table table-striped table-hover mv-lg\">\n          <thead>\n            <tr>\n              <th>id</th>\n              <th>name</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"gradeX\" *ngFor=\"let item of personsList\">\n              <td>{{item.id}}</td>\n              <td>{{item.name}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <app-code [code]='formCode' codeType='markup' title='form.component.html' dataLine='2,5-14'></app-code>\n      <app-code [code]='formTSCode' codeType='js' title='form.component.ts'></app-code>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_persons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/persons */ "./src/models/persons.ts");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../person.service */ "./src/app/person.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = /** @class */ (function () {
    function FormComponent(personService) {
        this.personService = personService;
        //#region
        this.formCode = " <form #personForm=\"ngForm\" (ngSubmit)=\"onSubmit(personForm)\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" class=\"form-control\" minlength = \"4\" maxlength = \"10\" required \n        [(ngModel)]=\"person.name\" name=\"name\" #name=\"ngModel\" />\n  </div>\n  <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n    Name is required</div>\n    <div *ngIf=\"name.errors?.minlength && name.touched\" class=\"alert alert-danger\">\n        Minimum of 4 characters\n    </div>\n  <button type=\"submit\" class=\"btn btn-success\" \n    [disabled]=\"!personForm.form.valid\">Submit</button>\n</form>\n\n<table  class=\"table-datatable table table-striped table-hover mv-lg\">\n  <thead>\n    <tr>\n      <th>id</th>\n      <th>name</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class=\"gradeX\" *ngFor=\"let item of personsList\">\n      <td>{{item.id}}</td>\n      <td>{{item.name}}</td>\n    </tr>\n  </tbody>\n</table>\n  ";
        this.formTSCode = "  import { Persons } from '../../models/persons';\n  import { PersonService } from '../person.service';\n\n  person: Persons = new Persons();\n  personsList : Array<Persons>=[];\n  constructor(private personService: PersonService) { }\n  ngOnInit() {\n    this.getPersons();\n  }\n  onSubmit(form){\n    this.personService.addPerson(this.person).subscribe(() => this.getPersons());\n  }\n\n  getPersons(){\n    this.personService.getPersons().subscribe(data => {\n      data.sort((a,b)=>{\n        if(a.id > b.id) return -1;\n        else return 1;\n      });\n      this.personsList = data;\n    });\n  }\n  ";
        //#endregion
        this.person = new _models_persons__WEBPACK_IMPORTED_MODULE_1__["Persons"]();
        this.personsList = [];
    }
    FormComponent.prototype.ngOnInit = function () {
        this.getPersons();
    };
    FormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.personService.addPerson(this.person).subscribe(function () { return _this.getPersons(); });
    };
    FormComponent.prototype.getPersons = function () {
        var _this = this;
        this.personService.getPersons().subscribe(function (data) {
            data.sort(function (a, b) {
                if (a.id > b.id)
                    return -1;
                else
                    return 1;
            });
            _this.personsList = data;
        });
    };
    FormComponent.prototype.ngAfterViewInit = function () {
        Prism.highlightAll();
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/head/head.component.css":
/*!*****************************************!*\
  !*** ./src/app/head/head.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/head/head.component.html":
/*!******************************************!*\
  !*** ./src/app/head/head.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <header class=\"header-container\">\n    <nav>\n      <ul class=\"visible-xs visible-sm\">\n        <li><a id=\"sidebar-toggler\" href=\"#\" class=\"menu-link menu-link-slide\"><span><em></em></span></a></li>\n      </ul>\n      <ul class=\"hidden-xs\">\n        <li><a id=\"offcanvas-toggler\" href=\"#\" class=\"menu-link menu-link-slide\"><span><em></em></span></a></li>\n      </ul>\n      <h2 class=\"header-title\">{{title}}</h2>\n    </nav>\n  </header>\n\n  "

/***/ }),

/***/ "./src/app/head/head.component.ts":
/*!****************************************!*\
  !*** ./src/app/head/head.component.ts ***!
  \****************************************/
/*! exports provided: HeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadComponent", function() { return HeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadComponent = /** @class */ (function () {
    function HeadComponent() {
    }
    HeadComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeadComponent.prototype, "title", void 0);
    HeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-head',
            template: __webpack_require__(/*! ./head.component.html */ "./src/app/head/head.component.html"),
            styles: [__webpack_require__(/*! ./head.component.css */ "./src/app/head/head.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeadComponent);
    return HeadComponent;
}());



/***/ }),

/***/ "./src/app/hello-world/hello-world.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hello-world/hello-world.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".code{\r\n    color:red;\r\n}"

/***/ }),

/***/ "./src/app/hello-world/hello-world.component.html":
/*!********************************************************!*\
  !*** ./src/app/hello-world/hello-world.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading bg-white\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h2 class=\"m0 text-bold\">Displaying Data</h2>\n    </div>\n  </div>\n  <app-code [code]='tsCode' codeType='js' title='hello-world.component.ts'></app-code>\n\n  <div class=\"row content\">\n    <div class=\"col-sm-12\">\n      <ol>\n        <li>\n          <div class=\"hightlight\">\n            <h4>\n              <span>interpolation(內嵌)</span>\n            </h4>\n          </div>\n          <div class=\"demo\">\n            <h4>\n              <span>Demo</span>\n            </h4>\n            <div class=\"view\">\n              <p>{{title}}</p>\n            </div>\n          </div>\n          <app-code [code]='interCode' codeType='markup' title='hello-world.component.html'></app-code>\n        </li>\n        <li>\n          <div class=\"hightlight\">\n            <h4>property binding</h4>\n          </div>\n          <div class=\"demo\">\n            <h4>\n              <span>Demo</span>\n            </h4>\n            <div class=\"view\">\n              <input type=\"text\" [value]=\"title\" />\n            </div>\n          </div>\n          <app-code [code]='propCode' codeType='markup' title='hello-world.component.html'></app-code>\n        </li>\n        <li>\n          <div class=\"hightlight\">\n            <h4>\n              <span>Event binding</span>\n            </h4>\n          </div>\n          <div class=\"demo\">\n            <h4>\n              <span>Demo</span>\n            </h4>\n            <div class=\"view\">\n              <button class=\"btn btn-primary\" (click)=\"showTitle($event)\">點我</button>\n            </div>\n          </div>\n\n          <app-code [code]='eventCode' codeType='markup' title='hello-world.component.html'></app-code>\n          <img src=\"assets/img/evnet.png\" />\n        </li>\n        <li>\n          <div class=\"hightlight\">\n            <h4>\n              <span>two way binding(雙向綁定)</span>\n            </h4>\n          </div>\n          <div class=\"demo\">\n            <h4>\n              <span>Demo</span>\n            </h4>\n            <div class=\"view\">\n              <input type=\"text\" [(ngModel)]=\"title2\" />\n              <span>{{title2}}</span>\n            </div>\n          </div>\n\n          <app-code [code]='twoWayBindingModule' codeType='js' title='app.module.ts'></app-code>\n          <app-code [code]='twoWayBindingCode' codeType='markup' title='hello-world.component.html'></app-code>\n        </li>\n\n      </ol>\n    </div>\n  </div>\n\n\n</div>\n<br />\n\n<div class=\"content-heading bg-white\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h2 class=\"m0 text-bold\">一點點進階</h2>\n    </div>\n    \n  </div>\n  <div class=\"row content\">\n    <div class=\"col-sm-12\">\n      <ol>\n        <li>\n          <div class=\"hightlight\">\n            <h4><span>pipe</span></h4>\n          </div>\n          <div>\n            <p>* 重複轉換，EX: 日期、轉換大小寫、多國語言(i18n)...等等</p>\n            <p>* 目的: 讓你把pipe當CSS一樣方便使用</p>\n            <p>* 自行定義pipe, EX: 性別 M/F=>男/女。參考:\n              <a href=\"https://angular.cn/guide/pipes#custom-pipes\">自定義pipe</a>\n            </p>\n            <p>* 更多\n              <a href=\"https://angular.cn/api?type=pipe\">pipe</a>\n            </p>\n            <div class=\"demo\">\n              <h4><span>Demo</span></h4>\n              <div class=\"view\">\n                  <p>{{ jsonToString | json }}</p>\n                  <p>No Pipe: {{ today }}</p>\n                  <p>Pipe:　{{ today | date:'fullDate' | uppercase}}</p>\n              </div>\n            </div>\n            <app-code [code]='pipeTsCode' codeType='js' title='hello-world.component.ts'></app-code>\n            <app-code [code]='pipeCode' codeType='markup' title='hello-world.component.html'></app-code>\n          </div>\n        </li>\n        <li>\n          <div class=\"hightlight\">\n            <h4><span>template binding(樣板)</span></h4>\n          </div>\n          <div>\n            <p>* 可以直接在html拿到dom</p>\n            <p>* 取代 id attribute</p>\n          </div>\n          <div class=\"demo\">\n            <h4><span>Demo</span></h4>\n            <div class=\"view\">\n                <input type=\"text\" #tempTitle [value]=\"title\" />{{tempTitle.value}}\n            </div>\n          </div>\n          <app-code [code]='templateCode' codeType='markup' title='hello-world.component.html'></app-code>\n          <app-code [code]='templateRefCode' codeType='markup' title='hello-world.component.html'></app-code>\n          <div class=\"hightlight\">\n            <h4>\n              <p>* 取代document.getElementbyId，利用<span>@viewchild</span></p>\n          </h4>\n          </div>\n          <div class=\"demo\">\n            <h4><span>Demo</span></h4>\n            <div class=\"view\">\n                <input type=\"text\" #tempTitle1 />{{tempTitle1.value}}\n                <button class=\"btn btn-primary\" (click)=\"tempChange(tempTitle1)\">Event 傳遞</button>\n                <button class=\"btn btn-primary\" (click)=\"tempChange2()\">viewchild 傳遞</button>\n            </div>\n          </div>\n          \n          <app-code [code]='templateCode1' codeType='markup' title='hello-world.component.html'></app-code>\n          <app-code [code]='templateTSCode1' codeType='js' title='hello-world.component.html' dataLine=\"2,4,10\"></app-code>\n\n        </li>\n      </ol>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/hello-world/hello-world.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hello-world/hello-world.component.ts ***!
  \******************************************************/
/*! exports provided: HelloWorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldComponent", function() { return HelloWorldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloWorldComponent = /** @class */ (function () {
    //#endregion
    function HelloWorldComponent() {
        //#region code sample
        this.tsCode = "  export class HelloWorldComponent implements OnInit {\n    constructor() { }\n    title = 'Hello World !';\n    title2 = 'Hello World2 !';\n  }\n  ";
        this.interCode = "<p>{{title}}</p>\n  ";
        this.propCode = "<input type=\"text\" [value]=\"title\" />\n  //<input type=\"text\" value=\"'{{title}}'\" />\n  ";
        this.eventCode = "<button (click)=\"showTitle($event)\">\u9EDE\u6211</button>\n  ";
        this.twoWayBindingModule = " import { FormsModule } from '@angular/forms';\n  @NgModule({\n    imports: [\n      FormsModule\n    ],\n  ";
        this.twoWayBindingCode = "  <input type=\"text\" [(ngModel)]=\"title2\" />\n  <p>{{title2}}</p>\n  ";
        this.pipeCode = "  <p>{{ jsonToString | json }}</p>\n  <p>{{ today }}</p>\n  <p>{{  today | date:'fullDate' | uppercase}}</p>\n  ";
        this.pipeTsCode = "  today: Date = new Date();\n  jsonToString = {name:'lala', sex:'F'};\n  ";
        this.templateCode = "  <input type=\"text\" [value]=\"title\" #tempTitle />\n  <p>{{tempTitle.value}}</p>\n  ";
        this.templateRefCode = "<input type=\"text\" [value]=\"title\" ref-tempTitle />\n  ";
        this.templateCode1 = "  <input type=\"text\" [value]=\"title\" #tempTitle1 />\n  <p>{{tempTitle.value}}</p>\n  <button (click)=\"tempChange(tempTitle1)\">Event \u50B3\u905E</button>\n  <button (click)=\"tempChange2()\">viewchild \u50B3\u905E</button>\n\n  ";
        this.templateTSCode1 = " import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';\n  constructor() { }\n  @ViewChild('tempTitle1') tempTitle1: ElementRef;\n\n  tempChange(tempTitle) {\n    tempTitle.value = 'hihi~';\n  }\n  tempChange2() {\n    this.tempTitle1.nativeElement.value = 'bye~';\n  }\n  ";
        this.today = new Date();
        this.title = 'Hello World !';
        this.title2 = 'Hello World2 !';
        this.jsonToString = { name: 'lala', sex: 'F' };
    }
    HelloWorldComponent.prototype.ngOnInit = function () {
    };
    HelloWorldComponent.prototype.showTitle = function (data) {
        console.log(data);
    };
    HelloWorldComponent.prototype.tempChange = function (tempTitle) {
        tempTitle.value = 'hihi~';
    };
    HelloWorldComponent.prototype.tempChange2 = function () {
        this.tempTitle1.nativeElement.value = 'bye~';
    };
    HelloWorldComponent.prototype.ngAfterViewInit = function () {
        Prism.highlightAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tempTitle1'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HelloWorldComponent.prototype, "tempTitle1", void 0);
    HelloWorldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hello-world',
            template: __webpack_require__(/*! ./hello-world.component.html */ "./src/app/hello-world/hello-world.component.html"),
            styles: [__webpack_require__(/*! ./hello-world.component.css */ "./src/app/hello-world/hello-world.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var persons = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return { persons: persons };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/introduction/introduction.component.css":
/*!*********************************************************!*\
  !*** ./src/app/introduction/introduction.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/introduction/introduction.component.html":
/*!**********************************************************!*\
  !*** ./src/app/introduction/introduction.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading bg-white\">\n  <div class=\"row\">\n    <div class=\"col-sm-9\">\n      <h2 class=\"m0 text-bold\">AngularJS</h2>\n    </div>\n    <div class=\"col-sm-3 text-right hidden-xs\">\n    </div>\n  </div>\n  <div class=\"row content\">\n    <table class=\"table-datatable table table-striped table-hover mv-lg\">\n      <thead>\n        <tr>\n          <th>差異</th>\n          <th>1.x</th>\n          <th>RC2</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"gradeX\">\n          <td>基底</td>\n          <td>AtScript</td>\n          <td>TypeScript</td>\n        </tr>\n        <tr class=\"gradeX\">\n          <td>架構</td>\n          <td>MVC</td>\n          <td>Component</td>\n        </tr>\n        <tr class=\"gradeX\">\n          <td>偵測變更</td>\n          <td>慢</td>\n          <td>快10倍</td>\n        </tr>\n        <tr class=\"gradeX\">\n          <td>喧染速度</td>\n          <td>慢</td>\n          <td>快5倍</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<br />\n<div class=\"content-heading bg-white\">\n  <div class=\"row\">\n    <div class=\"col-sm-9\">\n      <h2 class=\"m0 text-bold\">AngularJS 6</h2>\n    </div>\n    <div class=\"col-sm-3 text-right hidden-xs\">\n    </div>\n  </div>\n  <div class=\"row content\">\n    <ol>\n      <li>Google 打造的框架</li>\n      <li>TypeScript 為基底</li>\n      <li>可以開發App(Native Apps)、桌面程式(Electron)、網頁</li>\n      <li>ionic framework</li>\n      <li>目的:CRUD</li>\n      <li>關注點分離</li>\n      <li>以習慣取代配置</li>\n    </ol>\n  </div>\n</div>\n<br />\n<div class=\"content-heading bg-white\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h2 class=\"m0 text-bold\">Here are some links to help you start:</h2>\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-sm-9\">\n      <ul>\n        <li>\n          <a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a>\n        </li>\n        <li>\n          <a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a>\n        </li>\n        <li>\n          <a target=\"_blank\" rel=\"noopener\" href=\"https://blog.miniasp.com/post/2013/04/23/Front-end-Engineering-Fineart-An-Introduction-to-AngularJS.aspx\">前端工程的極致精品： AngularJS 開發框架介紹</a>\n        </li>\n        <li>\n          <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">ionic framework</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/introduction/introduction.component.ts":
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroductionComponent = /** @class */ (function () {
    function IntroductionComponent() {
    }
    IntroductionComponent.prototype.ngOnInit = function () {
    };
    IntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-introduction',
            template: __webpack_require__(/*! ./introduction.component.html */ "./src/app/introduction/introduction.component.html"),
            styles: [__webpack_require__(/*! ./introduction.component.css */ "./src/app/introduction/introduction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/app/person.service.ts":
/*!***********************************!*\
  !*** ./src/app/person.service.ts ***!
  \***********************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PersonService = /** @class */ (function () {
    function PersonService(http) {
        this.http = http;
        this.url = 'api/persons'; // URL to web api
    }
    /**
      GET:All persons data
     */
    PersonService.prototype.getPersons = function () {
        return this.http.get(this.url);
    };
    /** POST: add a new person to the server */
    PersonService.prototype.addPerson = function (person) {
        return this.http.post(this.url, person, httpOptions);
    };
    /** DELETE: delete the person from the server */
    PersonService.prototype.deletePerson = function (person) {
        var id = typeof person === 'number' ? person : person.id;
        var url = this.url + "/" + id;
        return this.http.delete(url, httpOptions);
    };
    /** PUT: update the person on the server */
    PersonService.prototype.updatePerson = function (person) {
        return this.http.put(this.url, person, httpOptions);
    };
    PersonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/app/route/route.component.css":
/*!*******************************************!*\
  !*** ./src/app/route/route.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/route/route.component.html":
/*!********************************************!*\
  !*** ./src/app/route/route.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading bg-white\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <h2 class=\"m0 text-bold\">路由</h2>\n      </div>\n    </div>\n    <div class=\"row content\">\n      <div class=\"col-sm-12\">\n        <ol>\n          <li>\n            <a href=\"https://angular.cn/guide/router#routing-x26-navigation\">官網參考</a>\n          </li>\n          <li>可模組化</li>\n          <li>Lazy load</li>\n          <li>Pre Load</li>\n          <li>守衛模式</li>\n        </ol>        \n      </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./src/app/route/route.component.ts":
/*!******************************************!*\
  !*** ./src/app/route/route.component.ts ***!
  \******************************************/
/*! exports provided: RouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponent", function() { return RouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouteComponent = /** @class */ (function () {
    function RouteComponent() {
    }
    RouteComponent.prototype.ngOnInit = function () {
    };
    RouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route',
            template: __webpack_require__(/*! ./route.component.html */ "./src/app/route/route.component.html"),
            styles: [__webpack_require__(/*! ./route.component.css */ "./src/app/route/route.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RouteComponent);
    return RouteComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.css":
/*!***********************************************!*\
  !*** ./src/app/service/service.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/service/service.component.html":
/*!************************************************!*\
  !*** ./src/app/service/service.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading bg-white\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h2 class=\"m0 text-bold\">與API互動</h2>\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-sm-12\">\n      <ol>\n        <li>\n          <a href=\"https://ithelp.ithome.com.tw/articles/10186104\">RxJS</a>\n        </li>\n        <li>\n          <a href=\"https://rxjs-cn.github.io/learn-rxjs-operators/\">RxJS 操作符</a>\n        </li>\n        <li>\n          <a href=\"http://rxmarbles.com\">RxJS 操作符圖解</a>\n        </li>\n        <li>\n          <a href=\"https://angular.cn/guide/dependency-injection-pattern\">依賴注入(Dependency injection,DI)</a>\n        </li>\n      </ol>\n    </div>\n  </div>\n</div>\n<br />\n<div class=\"content-heading bg-white\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h2 class=\"m0 text-bold\">RxJS 非同步</h2>\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-sm-12\">\n      <ol>\n        <li>由微軟開發的 LinQ 擴展出來的開源專案</li>\n        <li>DOM Events、XMLHttpRequest、WebSockets、Timer... 可以統一撰寫方式</li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-sm-12 hightlight\">\n      <h4 class=\"\">\n        <span>Observable 原理</span>\n      </h4>\n      <div>\n        <ol>\n          <li>Observable: 氣象台</li>\n          <li>Observer : 觀察員，他們的共用指令:\n            <ul class=\"margin-top-0\">\n              <li>next: 拿到資料要傳遞給氣象台</li>\n              <li>error: 拿不到資料，要跟氣象台回報錯誤</li>\n              <li>complete: 當整個觀察工作結束，就要跟氣象台說我拿完囉</li>\n            </ul>\n          </li>\n        </ol>\n      </div>\n      <app-code [code]='weatherServiceCode' codeType='js' title='service.component.ts' dataLine='2,8,11,14-22'></app-code>\n\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-sm-12 hightlight\">\n      <h4>\n        <span>訂閱資料</span>\n      </h4>\n      <ul>\n        <li>要訂閱才會執行</li>\n        <li>Observable.subscribe : 使用者訂閱這個氣象台，拿取資訊</li>\n        <li>\n          <p>Observable.subscribe.unsubscribe() : 取消訂閱，通常在ngOnDestroy時執行\n            <a href=\"https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/\">unsubscribe</a>\n          </p>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-sm-12 demo\">\n      <h4>\n        <span>Demo</span>\n      </h4>\n      <div class=\"view\">\n        <button class=\"btn btn-primary\" (click)=\"getWeather()\">取得氣候</button>\n        <br />\n        <p>{{weatherStation$ | async }}</p>\n      </div>\n      <app-code [code]='weatherTsCode' codeType='js' title='service.component.ts' dataLine='6-12'></app-code>\n      <app-code [code]='weatherCode' codeType='markup' title='service.component.html' dataLine=\"3\"></app-code>\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-sm-12 hightlight\">\n      <h4>\n        <span>介紹一點點操作符</span>\n      </h4>\n    </div>\n    <div class=\"col-sm-12\">\n      <ol>\n        <li class=\"text-bold\">\n          利用pipe進行擴充，別忘了要匯入rxjs operators\n        </li>\n        <li class=\"demo\">\n          <p>map: 資料重組</p>\n          <h4>\n            <span>Demo</span>\n          </h4>\n          <div class=\"view\">\n            <button class=\"btn btn-primary\" (click)=\"getWeatherWithMap()\">取得氣候(map)</button>\n          </div>\n          <app-code [code]='weatherMapTsCode' codeType='js' title='service.component.ts' dataLine='2,8-9'></app-code>\n        </li>\n        <li class=\"demo\">\n          <p>tap : 紀錄每筆資料log</p>\n          <h4>\n            <span>Demo</span>\n          </h4>\n          <div class=\"view\">\n            <button class=\"btn btn-primary\" (click)=\"getWeatherWithTap()\">取得氣候(tap)</button>\n          </div>\n          <app-code [code]='weatherTapTsCode' codeType='js' title='service.component.ts' dataLine='6'></app-code>\n        </li>\n        <li class=\"demo\">\n          <p>\n            catchError: 當server 拋出錯誤進行處理 of(...values, scheduler: Scheduler): Observable: 按順序輸出資料\n          </p>\n          <h4>\n            <span>Demo</span>\n          </h4>\n          <div class=\"view\">\n            <button class=\"btn btn-primary\" (click)=\"getWeatherWithCatchError()\">取得氣候(error)</button>\n          </div>\n          <app-code [code]='weatherErrTsCode' codeType='js' title='service.component.ts' dataLine='6-7'></app-code>\n        </li>\n      </ol>\n    </div>\n  </div>\n</div>\n<br />\n<div class=\"content-heading bg-white\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h2 class=\"m0 text-bold\">Services</h2>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 content\">\n      <ol>\n        <li>\n          ng g service Person\n        </li>\n        <li>\n          app.module.ts import HttpClientModule\n        </li>\n        <li>注入PersonService</li>\n        <li>內存API\n          <a href=\"https://angular.cn/tutorial/toh-pt6\">\n            HttpClientInMemoryWebApiModule</a>\n        </li>\n      </ol>\n    </div>\n  </div>\n  <app-code [code]='initServiceCode' codeType='js' title='app.component.ts' dataLine='2,5'></app-code>\n  <div class=\"row content\">\n    <div class=\"col-sm-12 hightlight\">\n      <h4>\n        <span>\n          service 注意事項\n        </span>\n      </h4>\n      <ol>\n        <li>@Injectable: 裝飾器，依賴注入的參與者</li>\n        <li>要記得注入HttpClient: Get、Post、Put、Delete，都會回傳Observable</li>\n      </ol>\n    </div>\n    <div class=\"row content\">\n      <div class=\"col-sm-12 demo\">\n        <h4>\n          <span>Demo</span>\n        </h4>\n        <div class=\"view\">\n          <button class=\"btn btn-primary\" (click)=\"getPersons()\">取得所有人員</button>\n          <button class=\"btn btn-primary\" (click)=\"addPerson()\">新增人員</button>\n          <button class=\"btn btn-primary\" (click)=\"deletePerson()\">刪除人員</button>\n          <button class=\"btn btn-primary\" (click)=\"updatePerson()\">更新人員</button>\n          <p>\n            <span *ngIf=\"personList.length > 0\">{{personList| json}}</span>\n          </p>\n          <div>\n            <p>\n              <label>id</label> <br />\n              <input type=\"number\" [(ngModel)]=\"person.id\" readOnly>\n            </p>\n            <p>\n              <label>name</label> <br />\n              <input type=\"text\" [(ngModel)]=\"person.name\">\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-code [code]='serviceCode' codeType='js' title='person.service.ts' dataLine='3, 5-7, 9-11, 18'></app-code>\n    <app-code [code]='serviceTSCode' codeType='js' title='service.component.ts' dataLine='6'></app-code>\n    <app-code [code]='serviceHtmlCode' codeType='markup' title='service.component.html'></app-code>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_persons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/persons */ "./src/models/persons.ts");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../person.service */ "./src/app/person.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServiceComponent = /** @class */ (function () {
    function ServiceComponent(personService) {
        this.personService = personService;
        //#region data
        this.weatherCode = "  <button (click)=\"getWeather()\">\u53D6\u5F97\u6C23\u5019</button>\n  {{weatherStation$ | async }}\n  ";
        this.weatherServiceCode = " import { Observable, Observer, of } from 'rxjs';\n  /**\n   * \u53D6\u5F97\u5929\u6C23\u8CC7\u6599\n   * @param needError \u662F\u5426\u8981\u62CB\u51FA\u932F\u8AA4\n   */\n getWeatherData(needError?: boolean):Observable<string>{\n   return Observable.create((observer: Observer<string>) => {\n     try {\n       // \u96F7\u9054\u56DE\u6CE2\n       observer.next('\u4ECA\u65E5\u4E0A\u5348\u5929\u6C23\u6674');\n\n       //\u5047\u8A2D\u4E0B\u5348\u53C8\u53D6\u8CC7\u6599\n       setTimeout(() => {\n         if(needError)\n           observer.error(\"Boooooooooom!\")\n         observer.next('\u4ECA\u65E5\u4E0B\u5348\u72C2\u98A8\u66B4\u96E8');\n         observer.complete();\n\n       }, 3000);\n     } catch (error) {\n       observer.error('\u96F7\u9054\u58DE\u4E86');\n     }\n   });\n }\n  ";
        this.weatherTsCode = " /**\n  * \u53D6\u5F97\u5929\u6C23\n  */\n  getWeather() {\n   this.weatherStation$ = this.getWeatherData();\n   this.weatherStation$.subscribe(\n     data => { },\n     err => { console.log(err);},\n     () => {\n       console.log('done');\n     });\n  }\n  \n\n    /*\n    this.weatherStation$.subscribe({\n      next(data) { console.log(data); },\n      error(err) { console.log(err); },\n      complete() { console.log('done'); }\n    });\n    */\n  }\n  ";
        this.weatherMapTsCode = "  import { catchError, map, tap } from 'rxjs/operators';\n\n  /**\n   *  weather map\n   */\n  getWeatherWithMap() {\n  const subWithMap = this.getWeatherData().pipe(\n     (map((data, index) => { console.log(index + 1. + data); }))\n   ).subscribe(data=>{}, err=>{}, ()=>{subWithMap.unsubscribe()});\n  }\n  ";
        this.weatherTapTsCode = "/**\n  * weather logger\n  */\n  getWeatherWithTap(){\n   const subWithTap = this.getWeatherData().pipe(tap(data=>console.log(data)))\n                                           .subscribe();\n                                            \n  };\n";
        this.weatherErrTsCode = "/**\n* weather catch error\n*/\ngetWeatherWithCatchError(){\n this.getWeatherData(true).pipe(tap(data => console.log(" + "`get data success:${data}`" + ")),\n   catchError(err => of(console.error(" + "`error:${err}`" + ")))).subscribe();\n}";
        this.initServiceCode = "import { HttpClientModule } from '@angular/common/http';\nimport { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';\nimport { InMemoryDataService } from './in-memory-data.service';\nimport { PersonService } from './person.service';\n\n@NgModule({\n  declarations: [\n    AppComponent,\n    ...],\n    imports: [\n      BrowserModule,\n      HttpClientModule,\n      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests\n      // and returns simulated server responses.\n      // Remove it when a real server is ready to receive requests.\n      HttpClientInMemoryWebApiModule.forRoot(\n      InMemoryDataService, { dataEncapsulation: false })\n    ],\n    providers: [PersonService],\n  })\n  export class AppModule { }\n";
        this.serviceCode = "import { Injectable } from '@angular/core';\nimport { HttpClient, HttpHeaders } from '@angular/common/http';\nimport { Observable, Observer } from 'rxjs';\nimport { Persons } from '../models/persons';\nconst httpOptions = {\n  headers: new HttpHeaders({ 'Content-Type': 'application/json' })\n};\n@Injectable({\n  providedIn: 'root'\n})\n\n\n\nexport class PersonService {\n  private url = 'api/persons';  // URL to web api\n\n  constructor(  private http: HttpClient) {\n  }\n  /**\n    GET:All persons data\n   */\n   getPersons(): Observable<Array<Persons>> {\n    return this.http.get<Array<Persons>>(this.url);\n  }\n \n  /** POST: add a new person to the server */\n  addPerson (person: Persons): Observable<Persons> {\n    return this.http.post<Persons>(this.url, person, httpOptions);\n  }\n \n  /** DELETE: delete the person from the server */\n  deletePerson (person: Persons | number): Observable<Persons> {\n    const id = typeof person === 'number' ? person : person.id;\n    const url = " + "`${this.url}/${id}`" + ";\n \n    return this.http.delete<Persons>(url, httpOptions);\n  }\n \n  /** PUT: update the person on the server */\n  updatePerson (person: Persons): Observable<any> {\n    return this.http.put(this.url, person, httpOptions);\n  }\n}\n";
        this.serviceTSCode = "import { PersonService } from '../person.service';\n\n  personList: Array<Persons> = [];\n  person: Persons = new Persons();\n  constructor(private personService: PersonService) {\n\n  }\n\n  /**\n   * \u53D6\u5F97\u6240\u6709\u4EBA\u54E1\n   */\n  getPersons() {\n    this.personService.getPersons().subscribe(data => { this.personList = data; });\n  }\n  /**\n   * \u65B0\u589E\u4EBA\u54E1\n   */\n  addPerson() {\n    this.personService.addPerson(this.person).subscribe((data) => { this.person = data; }, (error) => { console.log(error) }, () => { this.getPersons() });\n  }\n  /**\n   * \u522A\u9664\u4EBA\u54E1\n   */\n  deletePerson() {\n    this.personService.deletePerson(this.person).subscribe(() => { this.getPersons(); });\n  }\n  /**\n   * \u66F4\u65B0\u4EBA\u54E1\n   */\n  updatePerson() {\n    this.personService.updatePerson(this.person).subscribe((data) => { console.log(data); this.getPersons() });\n  }\n";
        this.serviceHtmlCode = "<button (click)=\"getPersons()\">\u53D6\u5F97\u6240\u6709\u4EBA\u54E1</button>\n<button (click)=\"addPerson()\">\u65B0\u589E\u4EBA\u54E1</button>\n<button (click)=\"deletePerson()\">\u522A\u9664\u4EBA\u54E1</button>\n<button (click)=\"updatePerson()\">\u66F4\u65B0\u4EBA\u54E1</button>\n<p>\n  <span *ngIf=\"personList.length > 0\">{{personList| json}}</span>\n</p>\n<div>\n  <p>\n    <label>id</label>\n    <input type=\"number\" [(ngModel)]=\"person.id\" readOnly>\n  </p>\n  <p>\n    <label>name</label>\n    <input type=\"text\" [(ngModel)]=\"person.name\">\n  </p>\n</div>\n";
        this.personList = [];
        this.person = new _models_persons__WEBPACK_IMPORTED_MODULE_2__["Persons"]();
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    /**
     * 取得天氣
     */
    ServiceComponent.prototype.getWeather = function () {
        this.weatherStation$ = this.getWeatherData();
        var sub = this.weatherStation$.subscribe(function (data) { console.log(data); }, function (err) { console.log(err); }, function () {
            console.log('done');
            sub.unsubscribe();
        });
    };
    /**
     * 取得天氣資料
     * @param needError 是否要拋出錯誤
     */
    ServiceComponent.prototype.getWeatherData = function (needError) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            try {
                // 雷達回波
                observer.next('今日上午天氣晴');
                //假設下午又取資料
                setTimeout(function () {
                    if (needError)
                        observer.error("Boooooooooom!");
                    observer.next('今日下午狂風暴雨');
                    observer.complete();
                }, 3000);
            }
            catch (error) {
                observer.error('雷達壞了');
            }
        });
    };
    /**
     *  weather map
     */
    ServiceComponent.prototype.getWeatherWithMap = function () {
        var subWithMap = this.getWeatherData().pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data, index) { console.log(index + 1 + ". " + data); }))).subscribe(function (data) { }, function (err) { }, function () { subWithMap.unsubscribe(); });
    };
    /**
     * weather logger
     */
    ServiceComponent.prototype.getWeatherWithTap = function () {
        var subWithTap = this.getWeatherData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log("Get Data:" + data); }))
            .subscribe(function (data) { }, function (err) { }, function () { subWithTap.unsubscribe(); });
    };
    /**
     * weather catch error
     */
    ServiceComponent.prototype.getWeatherWithCatchError = function () {
        this.getWeatherData(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log("get data success:" + data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(console.error("error:" + err)); })).subscribe();
    };
    /**
     * 取得所有人員
     */
    ServiceComponent.prototype.getPersons = function () {
        var _this = this;
        this.personService.getPersons().subscribe(function (data) { _this.personList = data; });
    };
    /**
     * 新增人員
     */
    ServiceComponent.prototype.addPerson = function () {
        var _this = this;
        this.personService.addPerson(this.person).subscribe(function (data) { _this.person = data; }, function (error) { console.log(error); }, function () { _this.getPersons(); });
    };
    /**
     * 刪除人員
     */
    ServiceComponent.prototype.deletePerson = function () {
        var _this = this;
        this.personService.deletePerson(this.person).subscribe(function () { _this.getPersons(); });
    };
    /**
     * 更新人員
     */
    ServiceComponent.prototype.updatePerson = function () {
        var _this = this;
        this.personService.updatePerson(this.person).subscribe(function (data) { console.log(data); _this.getPersons(); });
    };
    ServiceComponent.prototype.ngAfterViewInit = function () {
        Prism.highlightAll();
    };
    ServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.css */ "./src/app/service/service.component.css")]
        }),
        __metadata("design:paramtypes", [_person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"]])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/share/code/code.component.css":
/*!***********************************************!*\
  !*** ./src/app/share/code/code.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".code{\r\n    margin-top:10px;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    padding:5px;\r\n    background-color: #358ccb;\r\n    border: 1px solid #dfdfdf;\r\n    color:white;\r\n    font-size:18px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/share/code/code.component.html":
/*!************************************************!*\
  !*** ./src/app/share/code/code.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"code\" *ngIf=\"title\">{{title}}</div>\n<pre style=\"margin-top:0;\" class=\"line-numbers\" #preCode>\n  <code [class]=\"langType\"  style=\"border-left:0; box-shadow: none \">{{code}}</code></pre>\n"

/***/ }),

/***/ "./src/app/share/code/code.component.ts":
/*!**********************************************!*\
  !*** ./src/app/share/code/code.component.ts ***!
  \**********************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CodeComponent = /** @class */ (function () {
    function CodeComponent() {
        this.isHightlight = false;
        this.code = '';
        this.codeType = '';
        this.title = '';
        this.dataLine = 0;
        this.langType = '';
    }
    CodeComponent.prototype.ngOnInit = function () {
        switch (this.codeType) {
            case 'markup':
                this.langType = 'language-markup';
                break;
            case 'markdown':
                this.langType = 'language-markdown';
                break;
            case 'css':
                this.langType = 'language-css';
                break;
            case 'js':
                this.langType = 'language-javascript';
                break;
            case 'json':
                this.langType = 'language-json';
                break;
            case 'http':
                this.langType = 'language-http';
                break;
            case 'ts':
                this.langType = 'language-typescript';
                break;
        }
        if (this.dataLine) {
            this.preCode.nativeElement.setAttribute('data-line', this.dataLine);
        }
    };
    CodeComponent.prototype.ngAfterViewInit = function () {
        //   if (!this.isHightlight) {
        //     Prism.highlightAll();
        //   }
        //  this.isHightlight = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeComponent.prototype, "code", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeComponent.prototype, "codeType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeComponent.prototype, "dataLine", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('preCode'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CodeComponent.prototype, "preCode", void 0);
    CodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-code',
            template: __webpack_require__(/*! ./code.component.html */ "./src/app/share/code/code.component.html"),
            styles: [__webpack_require__(/*! ./code.component.css */ "./src/app/share/code/code.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CodeComponent);
    return CodeComponent;
}());



/***/ }),

/***/ "./src/app/share/share.module.ts":
/*!***************************************!*\
  !*** ./src/app/share/share.module.ts ***!
  \***************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code/code.component */ "./src/app/share/code/code.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    ShareModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _code_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]
            ],
            exports: [
                _code_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]
            ]
        })
    ], ShareModule);
    return ShareModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"sidebar-container\">\n  <div class=\"sidebar-header\">\n    <div class=\"pull-right pt-lg text-muted hidden\">\n      <em class=\"ion-close-round\"></em>\n    </div>\n    <a href=\"#\" class=\"sidebar-header-logo\">\n      <img src=\"assets/img/ng.png\" alt=\"Logo\" style=\"width:200px\">\n    </a>\n  </div>\n  <div class=\"sidebar-content\">\n\n    <nav class=\"sidebar-nav\">\n      <ul>\n        <li (click)=\"gotoPage('What is AngularJS')\">\n          <a routerLink=\"/introduction\" class=\"ripple\">\n            <span class=\"nav-icon\">\n              <i class=\"far fa-question-circle\"></i>\n            </span>\n            <span>What is AngularJS</span>\n          </a>\n        </li>\n\n        <li (click)=\"gotoPage('Create project')\">\n          <a routerLink=\"/create\" class=\"ripple\">\n            <span class=\"pull-right nav-label\"></span>\n            <span class=\"nav-icon\">\n              <i class=\"far fa-plus-square\"></i>\n            </span>\n            <span>Create project</span>\n          </a>\n        </li>\n        <li (click)=\"gotoPage('Displaying Data')\">\n          <a routerLink=\"/basic\" class=\"ripple\">\n            <span class=\"pull-right nav-label\"></span>\n            <span class=\"nav-icon\">\n              <i class=\"fab fa-first-order\"></i>\n            </span>\n            <span>Displaying Data</span>\n          </a>\n        </li>\n        <li (click)=\"gotoPage('Syntactic sugar')\">\n          <a routerLink=\"/sugar\" class=\"ripple\">\n            <span class=\"pull-right nav-label\"></span>\n            <span class=\"nav-icon\">\n              <i class=\"fab fa-reddit-alien\"></i>\n            </span>\n            <span>Syntactic sugar</span>\n          </a>\n        </li>\n        <li (click)=\"gotoPage('Master/Detail Component')\">\n          <a routerLink=\"/master\" class=\"ripple\">\n            <span class=\"pull-right nav-label\"></span>\n            <span class=\"nav-icon\">\n              <i class=\"far fa-object-group\"></i>\n            </span>\n            <span>Master/Detail Component</span>\n          </a>\n        </li>\n        <li (click)=\"gotoPage('Component Lifecycle')\">\n          <a routerLink=\"/lifecycle\" class=\"ripple\">\n            <span class=\"pull-right nav-label\"></span>\n            <span class=\"nav-icon\">\n              <i class=\"fas fa-clipboard-list\"></i>\n            </span>\n            <span>Component lifecycle</span>\n          </a>\n        </li>\n        <li>\n          <li (click)=\"gotoPage('Style')\">\n            <a routerLink=\"/style\" class=\"ripple\">\n              <span class=\"pull-right nav-label\"></span>\n              <span class=\"nav-icon\">\n                <i class=\"far fa-image\"></i>\n              </span>\n              <span>Style</span>\n            </a>\n          </li>\n          <li (click)=\"gotoPage('Service')\">\n            <a routerLink=\"/service\" class=\"ripple\">\n              <span class=\"pull-right nav-label\"></span>\n              <span class=\"nav-icon\">\n                <i class=\"fas fa-globe-asia \"></i>\n              </span>\n              <span>Service</span>\n            </a>\n          </li>\n          <li (click)=\"gotoPage('Route')\">\n            <a routerLink=\"/route\" class=\"ripple\">\n              <span class=\"pull-right nav-label\"></span>\n              <span class=\"nav-icon\">\n                <i class=\"fas fa-link\"></i>\n              </span>\n              <span>Route</span>\n            </a>\n          </li>\n          <li>\n            <li (click)=\"gotoPage('Form')\">\n              <a routerLink=\"/form\" class=\"ripple\">\n                <span class=\"pull-right nav-label\"></span>\n                <span class=\"nav-icon\">\n                  <i class=\"far fa-file-alt\"></i>\n                </span>\n                <span>Form</span>\n              </a>\n            </li>\n\n      </ul>\n    </nav>\n  </div>\n</aside>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.getTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.gotoPage = function (title) {
        this.getTitle.emit(title);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "getTitle", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sugar/sugar.component.css":
/*!*******************************************!*\
  !*** ./src/app/sugar/sugar.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sugar/sugar.component.html":
/*!********************************************!*\
  !*** ./src/app/sugar/sugar.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading bg-white\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h2 class=\"m0 text-bold\">結構型指令(Directive)</h2>\n    </div>\n  </div>\n  <div class=\"row content\">\n    <div class=\"col-sm-12\">\n      <ol>\n        <li>\n          <div class=\"hightlight\">\n            <h4>\n              <span>*ngIf</span>\n            </h4>\n            <ul>\n              <li>\n                <p> * 是語法糖</p>\n              </li>\n              <li>\n                <p>ngIf是模組語法</p>\n              </li>\n              <li>\n                <p>*ngIf=\"true | false\" => if(xxx)</p>\n              </li>\n              <li>\n                <p> name=\"123\"; if(name) === true</p>\n              </li>\n              <li>\n                <p> age=0; if(age) === false</p>\n              </li>\n              <li>\n                <p> persons=[]; if(persons) === true => if(persons.length > 0)=false</p>\n              </li>\n              <li>\n                <p>利用ng-template 可以做*ngIf=\"condition; then Ablock else Bblock\"</p>\n              </li>\n            </ul>\n          </div>\n          <div class=\"demo\">\n            <h4>\n              <span>Demo</span>\n            </h4>\n            <div class=\"view\">\n              <input type=\"number\" [(ngModel)]=\"name\">\n              <p *ngIf=\"name > 10\">大於10</p>\n              <p *ngIf=\"name <= 10\">太小囉</p>\n            </div>\n          </div>\n          <div>\n            <app-code [code]='ifTsCode' codeType='js' title='sugar.component.ts'></app-code>\n            <app-code [code]='ifCode' codeType='markup' title='sugar.component.html'></app-code>\n          </div>\n        </li>\n        <li>\n          <div class=\"hightlight\">\n            <h4>\n              <span>ngForOf</span>\n            </h4>\n            <p>1) *ngFor=\"let item of data;\" </p>\n            <p>2) 同一層不可以搭配*ngIf作使用</p>\n            <p>3) 提供五個變數</p>\n            <ul>\n              <li>\n                index:number, index\n              </li>\n              <li>\n                first:boolean, 是否為第一筆資料\n              </li>\n              <li>\n                last:boolean, 是否為最後一筆資料\n              </li>\n              <li>\n                even:boolean, 是否為奇數\n              </li>\n              <li>\n                odd:boolean, 是否為偶數\n              </li>\n            </ul>\n            <p>4)\n              <a href=\"https://angular.cn/guide/template-syntax#template-input-variables\">trackBy</a>\n              <span>: 避免大量資料異動時，導致畫面效能降低</span>\n            </p>\n          </div>\n          <div class=\"demo\">\n            <h4>\n              <span>Demo</span>\n            </h4>\n            <div class=\"view\">\n              <table id=\"datatable1\" class=\"table-datatable table table-striped table-hover mv-lg\">\n                <thead>\n                  <tr>\n                    <th>index</th>\n                    <th>name</th>\n                    <th>age</th>\n                    <th>first</th>\n                    <th>last</th>\n                    <th>even</th>\n                    <th>odd</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr class=\"gradeX\" *ngFor=\"let item of personsData;let i= index; first as first; last as last; even as isEven; odd as isOdd;\">\n                    <td>{{i+1}}</td>\n                    <td>{{item.name}}</td>\n                    <td>{{item.age}}</td>\n                    <td>\n                      <span *ngIf=\"first\">v</span>\n                    </td>\n                    <td>\n                      <span *ngIf=\"last\">v</span>\n                    </td>\n                    <td>\n                      <span *ngIf=\"isEven\">v</span>\n                    </td>\n                    <td>\n                      <span *ngIf=\"isOdd\">v</span>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n\n          <div>\n            <app-code [code]='forTsCode' codeType='js' title='sugar.component.ts'></app-code>\n            <app-code [code]='forCode' codeType='markup' title='sugar.component.html' dataLine=\"15\"></app-code>\n          </div>\n        </li>\n        <li>\n          <div class=\"hightlight\">\n            <h4>\n              <span>ngSwitch</span>\n            </h4>\n            <div class=\"demo\">\n              <h4>\n                <span>Demo</span>\n              </h4>\n              <div class=\"view\">\n                <input type=\"radio\" name=\"sex\" [(ngModel)]=\"sex\" value=\"M\">男\n                <input type=\"radio\" name=\"sex\" [(ngModel)]=\"sex\" value=\"F\">女\n                <input type=\"radio\" name=\"sex\" [(ngModel)]=\"sex\" value=\"UFO\">Other\n                <span [ngSwitch]=\"sex\">\n                  <p *ngSwitchCase=\"'M'\"> Hi boy~</p>\n                  <p *ngSwitchCase=\"'F'\">Hello girl~</p>\n                  <p *ngSwitchDefault>OMG!</p>\n                </span>\n              </div>\n            </div>\n          </div>\n          <app-code [code]='switchTSCode' codeType='js' title='sugar.component.ts'></app-code>\n          <app-code [code]='switchCode' codeType='markup' title='sugar.component.html' dataLine=\"5-8\"></app-code>\n        </li>\n      </ol>\n\n    </div>"

/***/ }),

/***/ "./src/app/sugar/sugar.component.ts":
/*!******************************************!*\
  !*** ./src/app/sugar/sugar.component.ts ***!
  \******************************************/
/*! exports provided: SugarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SugarComponent", function() { return SugarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SugarComponent = /** @class */ (function () {
    //#endregion
    function SugarComponent() {
        //#region
        this.ifCode = "  <input type=\"number\" [(ngModel)]=\"age\">\n  <p *ngIf=\"age > 10\">\u5927\u65BC10</p>\n  <p *ngIf=\"age <= 10\">\u592A\u5C0F\u56C9</p>\n  \n  //*\u865F\u53D6\u4EE3\u4E86template\uFF0C\u6240\u4EE5\u662F\u8A9E\u6CD5\u7CD6\n  <p template=\"ngIf:name > 10\">\u5927\u65BC10</p>\n  ";
        this.ifTsCode = "  constructor() { }\n  age = 1;\n  ngOnInit() {\n  }\n  ";
        this.forCode = "<table id=\"datatable1\" class=\"table-datatable table table-striped table-hover mv-lg\">\n  <thead>\n    <tr>\n      <th>index</th>\n      <th>name</th>\n      <th>age</th>\n      <th>first</th>\n      <th>last</th>\n      <th>even</th>\n      <th >odd</th>\n    </tr>\n  </thead>\n   <tbody>\n    <tr class=\"gradeX\" *ngFor=\"let item of personsData;let i= index; first as first; last as last; even as isEven; odd as isOdd;\">\n      <td>{{i+1}}</td>\n      <td>{{item.name}}</td>\n      <td>{{item.age}}</td>\n      <td><span *ngIf=\"first\">v</span></td>\n      <td><span *ngIf=\"last\">v</span></td>\n      <td><span *ngIf=\"isEven\">v</span></td>\n      <td><span *ngIf=\"isOdd\">v</span></td>\n    </tr>\n   </tbody>\n  </table>\n  ";
        this.forTsCode = "  constructor() { }\n  personsData = [\n    {name: 'kiki', age: 10},\n    {name: 'lala', age: 11},\n    {name: 'kaka', age: 12},\n    {name: 'lili', age: 13},\n  ]\n  ";
        this.switchCode = "  <input type=\"radio\" name=\"sex\" [(ngModel)]=\"sex\" value=\"M\">\u7537\n  <input type=\"radio\" name=\"sex\" [(ngModel)]=\"sex\" value=\"F\">\u5973\n  <input type=\"radio\" name=\"sex\" [(ngModel)]=\"sex\" value=\"UFO\">Other\n  <span [ngSwitch]=\"sex\">\n  <p *ngSwitchCase=\"'M'\"> Hi boy~</p>\n  <p *ngSwitchCase=\"'F'\">Hello girl~</p>\n  <p *ngSwitchDefault>OMG!</p>\n\n  ";
        this.switchTSCode = "  constructor() { }\n  sex = 'M';\n  ";
        this.age = 1;
        this.sex = 'M';
        this.name = 0;
        this.personsData = [
            { name: 'kiki', age: 10 },
            { name: 'lala', age: 11 },
            { name: 'kaka', age: 12 },
            { name: 'lili', age: 13 },
        ];
    }
    SugarComponent.prototype.ngOnInit = function () {
    };
    SugarComponent.prototype.ngAfterViewInit = function () {
        Prism.highlightAll();
    };
    SugarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sugar',
            template: __webpack_require__(/*! ./sugar.component.html */ "./src/app/sugar/sugar.component.html"),
            styles: [__webpack_require__(/*! ./sugar.component.css */ "./src/app/sugar/sugar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SugarComponent);
    return SugarComponent;
}());



/***/ }),

/***/ "./src/app/web-style/web-style.component.css":
/*!***************************************************!*\
  !*** ./src/app/web-style/web-style.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title.red{\r\n    color:red;\r\n}\r\n\r\n.title.blue{\r\n    color:blue;\r\n}"

/***/ }),

/***/ "./src/app/web-style/web-style.component.html":
/*!****************************************************!*\
  !*** ./src/app/web-style/web-style.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading bg-white\">\n  <div class=\"row\">\n    <div class=\"col-sm-9\">\n      <h2 class=\"m0 text-thin\">屬性型指令(Directive)</h2>\n    </div>\n  </div>\n  <div class=\"row content\">\n    <ol>\n      <li>\n        <p>\n          獨立的css: 每個頁面的css是獨立的，避免被複寫\n        </p>\n        <app-code codeType=\"css\" title=\"code.component.css\" [code]=\"codeStyle\"></app-code>\n        <app-code codeType=\"css\" title=\"app.component.css\" [code]=\"appStyle\"></app-code>\n        <div>\n          <img src=\"assets/img/images/css.png\" />\n        </div>\n      </li>\n      <li class=\"demo\">\n        <p>ngClass</p>\n        <p>動態載入css class , {{'{cssClass : true | false}'}}</p>\n        <h4>\n            <span>Demo</span>\n          </h4>\n        <div class=\"view\">\n          <p class=\"title\" [ngClass]=\"{'red': isRed, 'blue':!isRed}\">Title</p>\n          <button (click)=\"changeColor()\" class=\"btn btn-primary\">變顏色</button>\n        </div>\n        <app-code codeType=\"css\" title=\"web-style.component.css\" [code]=\"classCode\"></app-code>\n        <app-code codeType=\"markup\" title=\"web-style.component.html\" [code]=\"classHtmlCode\" dataLine=\"3\"></app-code>\n        <app-code codeType=\"js\" title=\"web-style.component.ts\" [code]=\"classTsCode\"></app-code>\n      </li>\n      <li class=\"demo\">\n        <p>ngStyle</p>\n        <p>動態載入style , {{'{\"style\" : string}'}}</p>\n        <h4>\n          <span>Demo</span>\n        </h4>\n        <div class=\"view\">\n            <p [ngStyle]=\"{'font-size': fontSize }\">large size</p>\n        </div>\n        <app-code codeType=\"js\" title=\"web-style.component.ts\" [code]=\"styleTsCode\"></app-code>\n        <app-code codeType=\"markup\" title=\"web-style.component.html\" [code]=\"styleHtmlCode\" dataLine=\"2\"></app-code>\n      </li>\n      <li class=\"demo\">\n        <p>Other</p>\n        <h4>\n            <span>Demo</span>\n        </h4>\n        <div class=\"view\">\n          <p [style.font-size.px]=\"'12'\" [style.background-color]=\"'yellow'\">small font</p>\n        </div>\n        <app-code codeType=\"markup\" title=\"web-style.component.html\" [code]=\"attrCode\"></app-code>\n\n      </li>\n    </ol>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/web-style/web-style.component.ts":
/*!**************************************************!*\
  !*** ./src/app/web-style/web-style.component.ts ***!
  \**************************************************/
/*! exports provided: WebStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebStyleComponent", function() { return WebStyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebStyleComponent = /** @class */ (function () {
    function WebStyleComponent() {
        this.isRed = false;
        this.fontSize = '30px';
        this.appStyle = ".code{\n    color:red;\n  }\n  ";
        this.codeStyle = " .code{\n    margin-top:10px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    padding:5px;\n    background-color: #358ccb;\n    border: 1px solid #dfdfdf;\n    color:white;\n  }\n  ";
        this.classCode = ".title.red{\n    color:red;\n}\n\n.title.blue{\n    color:blue;\n}\n  ";
        this.classHtmlCode = "<p class=\"title\" [ngClass]=\"{'red': isRed, 'blue':!isRed}\">Title</p>\n        <button (click)=\"changeColor()\">\u8B8A\u984F\u8272</button>\n  ";
        this.classTsCode = "isRed = false;\n  changeColor() {\n    this.isRed = !this.isRed;\n  }\n  ";
        this.styleHtmlCode = "<p [ngStyle]=\"{'font-size': fontSize }\">large size</p>";
        this.styleTsCode = "fontSize = '30px';";
        this.attrCode = "<p [style.font-size.px]=\"'12'\" [style.background-color]=\"'yellow'\">small font</p>";
    }
    WebStyleComponent.prototype.ngOnInit = function () {
    };
    WebStyleComponent.prototype.changeColor = function () {
        this.isRed = !this.isRed;
    };
    WebStyleComponent.prototype.ngAfterViewInit = function () {
        Prism.highlightAll();
    };
    WebStyleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-web-style',
            template: __webpack_require__(/*! ./web-style.component.html */ "./src/app/web-style/web-style.component.html"),
            styles: [__webpack_require__(/*! ./web-style.component.css */ "./src/app/web-style/web-style.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebStyleComponent);
    return WebStyleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/models/persons.ts":
/*!*******************************!*\
  !*** ./src/models/persons.ts ***!
  \*******************************/
/*! exports provided: Persons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Persons", function() { return Persons; });
var Persons = /** @class */ (function () {
    function Persons() {
    }
    return Persons;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\ng6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map