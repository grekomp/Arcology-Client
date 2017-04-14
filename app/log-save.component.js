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
var log_service_1 = require("./log.service");
var LogSaveComponent = (function () {
    function LogSaveComponent(logService) {
        this.logService = logService;
        this.path = "arcologyLog.txt";
    }
    LogSaveComponent.prototype.save = function () {
        this.logService.saveLog(this.path);
    };
    return LogSaveComponent;
}());
LogSaveComponent = __decorate([
    core_1.Component({
        selector: 'log-save',
        moduleId: module.id,
        templateUrl: './log-save.component.html'
    }),
    __metadata("design:paramtypes", [log_service_1.LogService])
], LogSaveComponent);
exports.LogSaveComponent = LogSaveComponent;
//# sourceMappingURL=log-save.component.js.map