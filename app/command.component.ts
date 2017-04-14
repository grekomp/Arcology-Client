import { Component, Input, OnInit } from '@angular/core';

import { ArcologyService } from './arcology.service';

@Component ({
  selector: 'command',
  moduleId: module.id,
  templateUrl: './command.component.html'
})
export class CommandComponent implements OnInit {
  @Input() label: string = 'No label';
  @Input() commandType: string;
  @Input() value: number = 20;
  @Input() maxValue: number = 100;
  @Input() minValue: number = 0;

  showInput: boolean = true;
  isTerminated: boolean;

  constructor(private arcologyService: ArcologyService) { }

  ngOnInit(): void {
    // Gets current simulation status
    this.arcologyService.getStatus()
      .subscribe(status => this.isTerminated = status.isTerminated);

    // If the command doesn't support parameters, hide the input
    if (this.label == '' || this.maxValue == 0) this.showInput = false;
  }

  execute(): void {
    // Check if the simulation is running
    if(!this.isTerminated) {

      // Make sure the value is within bounds
      if (this.value > this.maxValue) this.value = this.maxValue;
      if (this.value < this.minValue) this.value = this.minValue;

      // Send command
      this.arcologyService.executeCommand(this.commandType, this.value);
    }
  }
}
