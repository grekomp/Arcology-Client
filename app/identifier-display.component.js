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
var arcology_service_1 = require("./arcology.service");
var IdentifierDisplayComponent = (function () {
    function IdentifierDisplayComponent(arcologyService) {
        this.arcologyService = arcologyService;
    }
    IdentifierDisplayComponent.prototype.ngOnInit = function () {
        this.login = this.arcologyService.login;
        this.token = this.arcologyService.token;
    };
    return IdentifierDisplayComponent;
}());
IdentifierDisplayComponent = __decorate([
    core_1.Component({
        selector: 'identifier-display',
        moduleId: module.id,
        templateUrl: './identifier-display.component.html',
    }),
    __metadata("design:paramtypes", [arcology_service_1.ArcologyService])
], IdentifierDisplayComponent);
exports.IdentifierDisplayComponent = IdentifierDisplayComponent;
//# sourceMappingURL=identifier-display.component.js.map