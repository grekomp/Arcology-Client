"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var arcology_status_1 = require("./arcology-status");
// Node.js fs
var fs = require('fs');
var LogService = (function () {
    function LogService() {
        this.logString = '';
        this.lastStatus = new arcology_status_1.ArcologyStatus;
    }
    LogService.prototype.addToLog = function (status, command, value) {
        this.logString += '==============================\n';
        this.logString += 'Month: ' + status.turn + "\n";
        this.logString += 'Command Used: ' + command + ", " + value + "\n";
        this.logString += 'Notable Events: \n';
        for (var i = this.lastStatus.events.length; i < status.events.length; i++) {
            if (this.eventIsImportant(status.events[i])) {
                this.logString += '   - ' + status.events[i] + '\n';
            }
        }
        this.logString += 'Total Score: ' + status.totalScore + '\n';
        this.logString += 'Arcology Score: ' + status.experimentScore + '\n';
        this.logString += 'Event Score: ' + status.eventScore + '\n';
        if (status.nehoRunes !== null)
            this.logString += 'Runes: ' + status.nehoRunes.toString() + '\n';
        this.logString += 'Food Quantity: ' + status.foodQuantity + '\n';
        this.logString += 'Waste: ' + status.waste + '\n';
        this.logString += 'Social Capital: ' + status.socialCapital + '\n';
        this.logString += 'Production: ' + status.production + '\n';
        this.logString += 'Food Capacity: ' + status.foodCapacity + '\n';
        this.logString += 'Arcology Integrity: ' + status.arcologyIntegrity + '\n';
        this.logString += 'Population: ' + status.population + '\n';
        this.logString += 'Population Capacity: ' + status.populationCapacity + '\n';
        this.logString += 'Events: \n';
        for (var i = this.lastStatus.events.length; i < status.events.length; i++) {
            this.logString += '   - ' + status.events[i] + '\n';
        }
        this.logString += '\n\n';
        this.lastStatus = status;
    };
    // Saves the log to file using node fs
    LogService.prototype.saveLog = function (path) {
        var me = this;
        fs.open(path, 'w', function (err, data) {
            if (err) {
                console.error("ERROR1 !! " + err);
            }
            else {
                fs.write(data, me.logString, function (err) {
                    if (err)
                        console.error("ERROR2 !! " + err);
                    fs.close(data, function () {
                        console.log('Log saved successfully');
                    });
                });
            }
        });
    };
    LogService.prototype.resetLog = function () {
        this.logString = '';
    };
    // Returns false for all automated 'change' events
    LogService.prototype.eventIsImportant = function (event) {
        switch (event) {
            case 'ArcologyIntegrityChanged':
            case 'FoodQuantityChanged':
            case 'FoodCapacityChanged':
            case 'PopulationChanged':
            case 'PopulationCapacityChanged':
            case 'WasteChanged':
            case 'SocialCapitalChanged':
            case 'ProductionChanged':
                return false;
            default:
                return true;
        }
    };
    return LogService;
}());
LogService = __decorate([
    core_1.Injectable()
], LogService);
exports.LogService = LogService;
//# sourceMappingURL=log.service.js.map