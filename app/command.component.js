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
var CommandComponent = (function () {
    function CommandComponent(arcologyService) {
        this.arcologyService = arcologyService;
        this.label = 'No label';
        this.value = 20;
        this.maxValue = 100;
        this.minValue = 0;
        this.showInput = true;
    }
    CommandComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Gets current simulation status
        this.arcologyService.getStatus()
            .subscribe(function (status) { return _this.isTerminated = status.isTerminated; });
        // If the command doesn't support parameters, hide the input
        if (this.label == '' || this.maxValue == 0)
            this.showInput = false;
    };
    CommandComponent.prototype.execute = function () {
        // Check if the simulation is running
        if (!this.isTerminated) {
            // Make sure the value is within bounds
            if (this.value > this.maxValue)
                this.value = this.maxValue;
            if (this.value < this.minValue)
                this.value = this.minValue;
            // Send command
            this.arcologyService.executeCommand(this.commandType, this.value);
        }
    };
    return CommandComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CommandComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CommandComponent.prototype, "commandType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CommandComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CommandComponent.prototype, "maxValue", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CommandComponent.prototype, "minValue", void 0);
CommandComponent = __decorate([
    core_1.Component({
        selector: 'command',
        moduleId: module.id,
        templateUrl: './command.component.html'
    }),
    __metadata("design:paramtypes", [arcology_service_1.ArcologyService])
], CommandComponent);
exports.CommandComponent = CommandComponent;
//# sourceMappingURL=command.component.js.map