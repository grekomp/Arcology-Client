import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ArcologyService } from './arcology.service';
import { LogService } from './log.service';
import { AppComponent }  from './app.component';
import { StatusDisplayComponent } from './status-display.component';
import { CommandComponent } from './command.component';
import { RunesDisplayComponent } from './runes-display.component';
import { EventsDisplayComponent } from './events-display.component';
import { TurnDisplayComponent } from './turn-display.component';
import { SimulationStatusComponent } from './simulation-status.component';
import { ScoreDisplayComponent } from './score-display.component';
import { LogSaveComponent } from './log-save.component';
import { IdentifierDisplayComponent } from './identifier-display.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    StatusDisplayComponent,
    CommandComponent,
    RunesDisplayComponent,
    EventsDisplayComponent,
    TurnDisplayComponent,
    SimulationStatusComponent,
    ScoreDisplayComponent,
    LogSaveComponent,
    IdentifierDisplayComponent
  ],
  providers: [
    ArcologyService,
    LogService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
