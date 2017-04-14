import { Component, OnInit } from '@angular/core';

import { ArcologyService } from './arcology.service';

@Component({
  selector: 'simulation-status',
  moduleId: module.id,
  templateUrl: 'simulation-status.component.html',
})
export class SimulationStatusComponent implements OnInit {
  constructor(private arcologyService: ArcologyService) { }
  isTerminated: boolean;


  ngOnInit(): void {
    this.arcologyService.getStatus()
      .subscribe(status => this.isTerminated = status.isTerminated);
  }
}
