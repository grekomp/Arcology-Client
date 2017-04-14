import { Component } from '@angular/core';

import { StatusParameter } from './status-parameter';
import { ArcologyService } from './arcology.service';

import { LogSaveComponent } from './log-save.component';

// The parameters are not dynamic, so they can be defined here
const STATUSPARAMETERS: StatusParameter[] = [
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
@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: './app.component.html'
})
export class AppComponent  {
  title = 'Arcology Client';
  statusParameters = STATUSPARAMETERS;

  constructor(private arcologyService: ArcologyService) { }
}
