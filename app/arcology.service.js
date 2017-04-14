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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var behaviorsubject_1 = require("rxjs/behaviorsubject");
require("rxjs/add/operator/toPromise");
var log_service_1 = require("./log.service");
var arcology_status_1 = require("./arcology-status");
var ArcologyService = (function () {
    function ArcologyService(http, logService) {
        this.http = http;
        this.logService = logService;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        this.login = 'grzegorz.palian@gmail.com';
        this.token = 'B69C1B682F38F9F41E881187F7768258';
        this.describeUrl = 'http://arcology.prime.future-processing.com/describe?login=' + this.login + '&token=' + this.token;
        this.commandUrl = 'http://arcology.prime.future-processing.com/execute';
        this.currentStatus = new arcology_status_1.ArcologyStatus();
        this.subject = new behaviorsubject_1.BehaviorSubject(this.currentStatus);
        this.refreshStatus();
    }
    ArcologyService.prototype.setStatus = function (status) {
        this.subject.next(status);
    };
    ArcologyService.prototype.restartSimulation = function () {
        var _this = this;
        this.currentStatus = new arcology_status_1.ArcologyStatus();
        this.setStatus(this.currentStatus);
        this.logService.resetLog();
        this.http
            .post(this.commandUrl, JSON.stringify({
            Command: 'restart',
            Login: this.login,
            Token: this.token
        }), { headers: this.headers })
            .toPromise()
            .then(function () { return _this.refreshStatus(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ArcologyService.prototype.executeCommand = function (commandType, value) {
        var _this = this;
        this.logService.addToLog(this.currentStatus, commandType, value);
        if (commandType.toLowerCase() == 'restart') {
            this.restartSimulation();
        }
        else {
            this.http
                .post(this.commandUrl, JSON.stringify({
                Command: commandType,
                Login: this.login,
                Token: this.token,
                Parameter: value.toString()
            }), { headers: this.headers })
                .toPromise()
                .then(function () { return _this.refreshStatus(); })
                .catch(function (error) { return _this.handleError(error); });
        }
    };
    ArcologyService.prototype.handleError = function (error) {
        console.error('An error occured when executing command: ', error);
        this.refreshStatus();
    };
    ArcologyService.prototype.refreshStatus = function () {
        var _this = this;
        this.http.get(this.describeUrl)
            .toPromise()
            .then(function (response) {
            _this.currentStatus = response.json();
            _this.setStatus(_this.currentStatus);
            if (response.json().isTerminated)
                _this.logService.addToLog(_this.currentStatus, 'none', 0);
        })
            .catch(function (error) { return console.error('An error occured', error); });
    };
    ArcologyService.prototype.getStatus = function () {
        return this.subject.asObservable();
    };
    return ArcologyService;
}());
ArcologyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, log_service_1.LogService])
], ArcologyService);
exports.ArcologyService = ArcologyService;
//# sourceMappingURL=arcology.service.js.map