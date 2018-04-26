"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_service_1 = require("./services/app.service");
var forms_1 = require("@angular/forms");
var LoginComponent = (function () {
    function LoginComponent(_router, _jsonService, _formBuilder) {
        this._router = _router;
        this._jsonService = _jsonService;
        this._formBuilder = _formBuilder;
        /* uName: string;
        password: any;
        role: string = 'Merchant'; */
        this.errorMessage = [];
        this.roleList = ['Admin', 'Merchant', 'Customer'];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userForm = this._formBuilder.group({
            uName: ['SnehalArthamwar', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(20)]],
            password: [],
            role: ['Merchant']
        });
    };
    LoginComponent.prototype.checkRole = function (role) {
        switch (role) {
            case 'Merchant': return '/dashboard';
            case 'Customer': return '/userDashboard';
            case 'Admin': return '/adminDashboard';
            default: return '';
        }
    };
    LoginComponent.prototype.checkCredentials = function () {
        var _this = this;
        this._jsonService.login(this.userForm.value.uName, this.userForm.value.password)
            .subscribe(function (userData) {
            if (userData.status === 'ok') {
                localStorage['isLogin'] = 'true';
                console.log('check ls', localStorage['isLogin']);
                _this._router.navigate([_this.checkRole(_this.userForm.value.role)]);
            }
            else {
                //localStorage['isLogin'] = 'false';
                alert('Wrong Credentials');
            }
        }, function (error) { _this.errorMessage.push(error); });
        /* if (this.uName === this.user.userName && this.password === this.user.password && this.user.role === this.role)
        {
            this._router.navigate([this.checkRole(this.role)]);
        }else {
            alert('Wrong Credentials');
        } */
    };
    LoginComponent.prototype.resetForm = function () {
        this.userForm.reset();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-page',
        // templateUrl: './Login.html',
        templateUrl: './LoginMDF.html',
        providers: [app_service_1.JsonService],
        styles: [
            "input.ng-invalid{border-left:5px solid red;}\n         input.ng-valid{border-left:5px solid green;}"
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router, app_service_1.JsonService, forms_1.FormBuilder])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=LoginComponent.js.map