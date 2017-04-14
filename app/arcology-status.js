"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArcologyStatus = (function () {
    function ArcologyStatus() {
        this.turn = -1;
        this.shouldIRestartExperimentAndCry = '';
        this.isTerminated = false;
        this.eventScore = 0;
        this.experimentScore = 0;
        this.totalScore = 0;
        this.nehoRunes = [];
        this.foodQuantity = 0;
        this.waste = 0;
        this.socialCapital = 0;
        this.production = 0;
        this.foodCapacity = 0;
        this.arcologyIntegrity = 0;
        this.population = 0;
        this.populationCapacity = 0;
        this.events = [];
    }
    return ArcologyStatus;
}());
exports.ArcologyStatus = ArcologyStatus;
//# sourceMappingURL=arcology-status.js.map