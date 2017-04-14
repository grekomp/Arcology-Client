import { Injectable, Inject } from '@angular/core';

import { ArcologyStatus } from './arcology-status';

// Node.js fs
var fs = require('fs');

@Injectable()
export class LogService {
  logString: string = '';
  lastStatus: ArcologyStatus = new ArcologyStatus;

  addToLog(status: ArcologyStatus, command: string, value: number ): void {

    this.logString += '==============================\n';
    this.logString += 'Month: ' + status.turn + "\n";
    this.logString += 'Command Used: ' + command + ", " + value + "\n";
    this.logString += 'Notable Events: \n';

    for(let i = this.lastStatus.events.length; i < status.events.length; i++) {
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

    for(let i = this.lastStatus.events.length; i < status.events.length; i++) {
      this.logString += '   - ' + status.events[i] + '\n';
    }

    this.logString += '\n\n';

    this.lastStatus = status;
  }

  // Saves the log to file using node fs
  saveLog(path: string): void {
    let me = this;

    fs.open(path, 'w', function(err: any, data: any) {
      if (err) {
        console.error("ERROR1 !! " + err);
      } else {
        fs.write(data, me.logString, function(err: any) {
          if (err)
            console.error("ERROR2 !! " + err);
          fs.close(data, function() {
            console.log('Log saved successfully');
          })
        });
      }
    });
  }

  resetLog(): void {
    this.logString = '';
  }

  // Returns false for all automated 'change' events
  eventIsImportant(event: string): boolean {
    switch(event){
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
  }
}
