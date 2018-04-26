"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms"); // mainly for banana in box two way data binding
var http_1 = require("@angular/http"); // along with import we are registering http service with angulars injector
// this auto work is done by HttpModule for us
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app-component/app.component");
var dashboardComponent_1 = require("./dashboard-component/dashboardComponent");
var LoginComponent_1 = require("./LoginComponent");
var homeComponent_1 = require("./home-component/homeComponent");
var RegistrationComponent_1 = require("./registration-component/RegistrationComponent");
var UserDashboardComponent_1 = require("./user-dashboard-component/UserDashboardComponent");
var child_component_component_1 = require("./child-component/child-component.component");
var routeConfig = [
    { path: '', component: homeComponent_1.HomeComponent },
    { path: 'dashboard', component: dashboardComponent_1.DashboardComponent /* , canActivate: [JsonService] */ },
    { path: 'login', component: LoginComponent_1.LoginComponent },
    { path: 'register', component: RegistrationComponent_1.RegistrationComponent },
    { path: 'userDashboard', component: UserDashboardComponent_1.UserDashboardComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            router_1.RouterModule.forRoot(routeConfig)
        ],
        declarations: [app_component_1.AppComponent, dashboardComponent_1.DashboardComponent, LoginComponent_1.LoginComponent, homeComponent_1.HomeComponent, RegistrationComponent_1.RegistrationComponent,
            UserDashboardComponent_1.UserDashboardComponent, child_component_component_1.ChildComponentComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map