"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var arcology_service_1 = require("./arcology.service");
var log_service_1 = require("./log.service");
var app_component_1 = require("./app.component");
var status_display_component_1 = require("./status-display.component");
var command_component_1 = require("./command.component");
var runes_display_component_1 = require("./runes-display.component");
var events_display_component_1 = require("./events-display.component");
var turn_display_component_1 = require("./turn-display.component");
var simulation_status_component_1 = require("./simulation-status.component");
var score_display_component_1 = require("./score-display.component");
var log_save_component_1 = require("./log-save.component");
var identifier_display_component_1 = require("./identifier-display.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            status_display_component_1.StatusDisplayComponent,
            command_component_1.CommandComponent,
            runes_display_component_1.RunesDisplayComponent,
            events_display_component_1.EventsDisplayComponent,
            turn_display_component_1.TurnDisplayComponent,
            simulation_status_component_1.SimulationStatusComponent,
            score_display_component_1.ScoreDisplayComponent,
            log_save_component_1.LogSaveComponent,
            identifier_display_component_1.IdentifierDisplayComponent
        ],
        providers: [
            arcology_service_1.ArcologyService,
            log_service_1.LogService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map