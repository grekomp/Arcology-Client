import { Component, OnInit } from '@angular/core';

import { ArcologyService } from './arcology.service';

@Component({
  selector: 'identifier-display',
  moduleId: module.id,
  templateUrl: './identifier-display.component.html',
})
export class IdentifierDisplayComponent implements OnInit {
  login: string;
  token: string;

  constructor(private arcologyService: ArcologyService) {  }

  ngOnInit() {
    this.login = this.arcologyService.login;
    this.token = this.arcologyService.token;
  }
}
