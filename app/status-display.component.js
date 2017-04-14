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
var StatusDisplayComponent = (function () {
    function StatusDisplayComponent(arcologyService) {
        this.arcologyService = arcologyService;
        this.value = -1;
        this.lastValueDifference = -1;
    }
    StatusDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.arcologyService.getStatus().subscribe(function (status) {
            if (status.turn == -1) {
                _this.lastValueDifference = -1;
                _this.value = -1;
            }
            else {
                if (_this.lastValueDifference == -1) {
                    _this.lastValueDifference = 0;
                }
                else {
                    _this.lastValueDifference = status[_this.identifier] - _this.value;
                }
                _this.value = status[_this.identifier];
                ;
            }
        });
    };
    return StatusDisplayComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StatusDisplayComponent.prototype, "identifier", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StatusDisplayComponent.prototype, "label", void 0);
StatusDisplayComponent = __decorate([
    core_1.Component({
        selector: 'status-display',
        moduleId: module.id,
        templateUrl: './status-display.component.html'
    }),
    __metadata("design:paramtypes", [arcology_service_1.ArcologyService])
], StatusDisplayComponent);
exports.StatusDisplayComponent = StatusDisplayComponent;
//# sourceMappingURL=status-display.component.js.map