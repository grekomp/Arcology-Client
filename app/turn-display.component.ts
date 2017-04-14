import { Component, OnInit } from '@angular/core';

import { ArcologyService } from './arcology.service';

@Component({
  selector: 'turn-display',
  moduleId: module.id,
  templateUrl: './turn-display.component.html'
})
export class TurnDisplayComponent implements OnInit {
  turn: number;

  constructor(private arcologyService: ArcologyService) { }

  ngOnInit(): void {
    this.arcologyService.getStatus()
      .subscribe(status => this.turn = status.turn);
  }
}
