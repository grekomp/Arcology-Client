import { Component } from '@angular/core';

import { LogService } from './log.service';

@Component({
  selector: 'log-save',
  moduleId: module.id,
  templateUrl: './log-save.component.html'
})
export class LogSaveComponent {
    path: string = "arcologyLog.txt";

    constructor(private logService: LogService) { }

    save(): void {
      this.logService.saveLog(this.path);
    }
}
