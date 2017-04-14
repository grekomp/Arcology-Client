import { Component, OnInit } from '@angular/core';

import { ArcologyService } from './arcology.service';

@Component({
  selector: 'score-display',
  moduleId: module.id,
  templateUrl: 'score-display.component.html',
})
export class ScoreDisplayComponent implements OnInit {
  constructor(private arcologyService: ArcologyService) { }

  totalScore: number;
  experimentScore: number;
  eventScore: number;

  isTerminated: boolean;

  ngOnInit() {
    this.arcologyService.getStatus()
      .subscribe(status => {
        this.totalScore = status.totalScore;
        this.experimentScore = status.experimentScore;
        this.eventScore = status.eventScore;
        this.isTerminated = status.isTerminated;
      });
  }
}
