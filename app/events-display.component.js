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
var log_service_1 = require("./log.service");
var EventsDisplayComponent = (function () {
    function EventsDisplayComponent(arcologyService, logService) {
        this.arcologyService = arcologyService;
        this.logService = logService;
        this.filterResults = true;
    }
    EventsDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.arcologyService.getStatus()
            .subscribe(function (status) {
            _this.lastEvents = _this.events;
            _this.events = status.events;
        });
    };
    EventsDisplayComponent.prototype.eventIsImportant = function (event) {
        return this.logService.eventIsImportant(event);
    };
    return EventsDisplayComponent;
}());
EventsDisplayComponent = __decorate([
    core_1.Component({
        selector: 'events-display',
        moduleId: module.id,
        templateUrl: './events-display.component.html'
    }),
    __metadata("design:paramtypes", [arcology_service_1.ArcologyService,
        log_service_1.LogService])
], EventsDisplayComponent);
exports.EventsDisplayComponent = EventsDisplayComponent;
//# sourceMappingURL=events-display.component.js.map