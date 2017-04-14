import { Component, OnInit } from '@angular/core';

import { ArcologyService } from './arcology.service';

@Component ({
  selector: 'runes-display',
  moduleId: module.id,
  templateUrl: './runes-display.component.html',
  host: {'class': 'status-element'}
})
export class RunesDisplayComponent implements OnInit {
  runes: string[] = [];

  constructor(private arcologyService: ArcologyService) { }

  ngOnInit(): void {
    this.arcologyService.getStatus().subscribe(status => {
      this.runes = status['nehoRunes'];
    });
  }

}
