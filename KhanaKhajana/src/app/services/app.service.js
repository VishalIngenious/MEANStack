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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var JsonService = (function () {
    function JsonService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this._header = new http_1.Headers({ 'Content-Type': 'application/json' });
        this._requestOption = new http_1.RequestOptions({ headers: this._header });
    }
    JsonService.prototype.login = function (uName, passw) {
        var url = 'http://localhost:9090/user';
        var body = {
            userName: uName,
            password: passw
        };
        return this._http
            .post(url, body, this._requestOption)
            .map(function (response) { return response.json(); })
            .catch(this._handleError);
    };
    JsonService.prototype.registerUser = function (uname, passw, roleSelected) {
        var url = 'http://localhost:9090/userRegister';
        var body = {
            userName: uname,
            password: passw,
            role: roleSelected
        };
        return this._http.post(url, body, this._requestOption)
            .map(function (response) { return response.json(); })
            .catch(this._handleError);
    };
    JsonService.prototype._handleError = function (error) {
        return Observable_1.Observable.throw(error || 'Something went wrong! Please contact support team...');
    };
    return JsonService;
}());
JsonService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], JsonService);
exports.JsonService = JsonService;
;
//# sourceMappingURL=app.service.js.map