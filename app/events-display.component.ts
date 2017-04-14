import { Component } from '@angular/core';

import { ArcologyService } from './arcology.service';
import { LogService } from './log.service';

@Component({
  selector: 'events-display',
  moduleId: module.id,
  templateUrl: './events-display.component.html'
})
export class EventsDisplayComponent {
  events: string[];
  lastEvents: string[];

  filterResults: boolean = true;

  constructor(
    private arcologyService: ArcologyService,
    private logService: LogService
  ) { }

  ngOnInit(): void {
    this.arcologyService.getStatus()
      .subscribe(status => {
        this.lastEvents = this.events;
        this.events = status.events;
      });
  }

  eventIsImportant(event: string): boolean {
    return this.logService.eventIsImportant(event);
  }
}
