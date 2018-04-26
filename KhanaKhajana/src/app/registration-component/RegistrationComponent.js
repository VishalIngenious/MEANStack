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
var app_service_1 = require("./../services/app.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var RegistrationComponent = (function () {
    function RegistrationComponent(_router, _formBuilder, _jsonService) {
        this._router = _router;
        this._formBuilder = _formBuilder;
        this._jsonService = _jsonService;
        this.roleList = ['Admin', 'Merchant', 'Customer'];
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.registrationForm = this._formBuilder.group({
            userName: [],
            password: [],
            role: []
        });
    };
    RegistrationComponent.prototype.registerUser = function () {
        var _this = this;
        this._jsonService.registerUser(this.registrationForm.value.userName, this.registrationForm.value.password, this.registrationForm.value.role)
            .subscribe(function (response) {
            if (response === 'ok') {
                _this._router.navigate(['/login']);
                alert('User Registered Succesfully');
            }
            else {
                alert('User Registration Falied');
            }
        });
    };
    RegistrationComponent.prototype.cancel = function () {
        this._router.navigate(['']);
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    core_1.Component({
        selector: 'registration-page',
        templateUrl: './Registration.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, forms_1.FormBuilder, app_service_1.JsonService])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=RegistrationComponent.js.map