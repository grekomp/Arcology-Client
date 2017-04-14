import { Component, Input, OnInit } from '@angular/core';

import { ArcologyService } from './arcology.service';

@Component ({
  selector: 'status-display',
  moduleId: module.id,
  templateUrl: './status-display.component.html'
})
export class StatusDisplayComponent implements OnInit {
  @Input() identifier: string;
  @Input() label: string;

  value: number = -1;
  lastValueDifference: number = -1;

  constructor(private arcologyService: ArcologyService) { }

  ngOnInit(): void {
    this.arcologyService.getStatus().subscribe(status => {
      if (status.turn == -1) { // The service doesn't have real data yet
        this.lastValueDifference = -1;
        this.value = -1;
      } else {
        if (this.lastValueDifference == -1) { // This is the first time the component received data
          this.lastValueDifference = 0;
        } else {
          this.lastValueDifference = status[this.identifier] - this.value;
        }
        this.value = status[this.identifier];;
      }

    });
  }
}
