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
// The parameters are not dynamic, so they can be defined here
var STATUSPARAMETERS = [
    {
        parameterIdentifier: 'arcologyIntegrity',
        displayLabel: 'Integrity',
        displayValue: 120,
        commandLabel: 'Build Arcology',
        commandValue: 20,
        commandMinValue: 1,
        commandMaxValue: 200,
        commandType: 'buildarcology'
    },
    {
        parameterIdentifier: 'foodQuantity',
        displayLabel: 'Food Quantity',
        displayValue: 48,
        commandLabel: 'Import Food',
        commandValue: 50,
        commandMinValue: 1,
        commandMaxValue: 200,
        commandType: 'importfood'
    },
    {
        parameterIdentifier: 'foodCapacity',
        displayLabel: 'Food Capacity',
        displayValue: 48,
        commandLabel: 'Expand Food Capacity',
        commandValue: 50,
        commandMinValue: 1,
        commandMaxValue: 200,
        commandType: 'expandfoodcapacity'
    },
    {
        parameterIdentifier: 'population',
        displayLabel: 'Population',
        displayValue: 48,
        commandLabel: 'We are ready',
        commandValue: 50,
        commandMinValue: 1,
        commandMaxValue: 200,
        commandType: 'weareready'
    },
    {
        parameterIdentifier: 'populationCapacity',
        displayLabel: 'Population Capacity',
        displayValue: 60,
        commandLabel: 'Expand Population Capacity',
        commandValue: 50,
        commandMinValue: 1,
        commandMaxValue: 200,
        commandType: 'expandpopulationcapacity'
    },
    {
        parameterIdentifier: 'waste',
        displayLabel: 'Waste',
        displayValue: 20,
        commandLabel: 'Clean',
        commandValue: 50,
        commandMinValue: 1,
        commandMaxValue: 200,
        commandType: 'clean'
    },
    {
        parameterIdentifier: 'socialCapital',
        displayLabel: 'Social Capital',
        displayValue: 50,
        commandLabel: 'Propaganda',
        commandValue: 50,
        commandMinValue: 1,
        commandMaxValue: 200,
        commandType: 'propaganda'
    },
    {
        parameterIdentifier: 'production',
        displayLabel: 'Production',
        displayValue: 50,
        commandLabel: 'Produce',
        commandValue: 0,
        commandMinValue: 0,
        commandMaxValue: 0,
        commandType: 'produce'
    }
];
// The main component of the app
var AppComponent = (function () {
    function AppComponent(arcologyService) {
        this.arcologyService = arcologyService;
        this.title = 'Arcology Client';
        this.statusParameters = STATUSPARAMETERS;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        moduleId: module.id,
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [arcology_service_1.ArcologyService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map