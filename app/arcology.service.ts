import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/behaviorsubject';

import 'rxjs/add/operator/toPromise';

import { LogService } from './log.service';
import { StatusParameter } from './status-parameter';
import { ArcologyStatus } from './arcology-status';

@Injectable()
export class ArcologyService {
  private subject: BehaviorSubject<ArcologyStatus>;
  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  public login = 'grzegorz.palian@gmail.com';
  public token = 'B69C1B682F38F9F41E881187F7768258';
  describeUrl = 'http://arcology.prime.future-processing.com/describe?login=' + this.login + '&token=' + this.token;
  commandUrl = 'http://arcology.prime.future-processing.com/execute';
  currentStatus: ArcologyStatus;

  constructor(private http: Http, private logService: LogService) {
    this.currentStatus = new ArcologyStatus();
    this.subject = new BehaviorSubject(this.currentStatus);

    this.refreshStatus();
  }

  private setStatus(status: ArcologyStatus): void {
    this.subject.next(status);
  }

  restartSimulation(): void {
    this.currentStatus = new ArcologyStatus();

    this.setStatus(this.currentStatus);

    this.logService.resetLog();

    this.http
      .post(this.commandUrl, JSON.stringify({
        Command: 'restart',
        Login: this.login,
        Token: this.token
      }), {headers: this.headers})
      .toPromise()
      .then(() => this.refreshStatus())
      .catch(error => this.handleError(error));
  }

  executeCommand(commandType: string, value: number): void {
    this.logService.addToLog(this.currentStatus, commandType, value);

    if(commandType.toLowerCase() == 'restart') {
      this.restartSimulation();
    } else {
      this.http
        .post(this.commandUrl, JSON.stringify({
          Command: commandType,
          Login: this.login,
          Token: this.token,
          Parameter: value.toString()
        }), {headers: this.headers})
        .toPromise()
        .then(() => this.refreshStatus())
        .catch(error => this.handleError(error));
    }
  }

  private handleError(error: any): void {
    console.error('An error occured when executing command: ', error);
    this.refreshStatus()
  }

  refreshStatus(): void {
    this.http.get(this.describeUrl)
      .toPromise()
      .then(response => {
        this.currentStatus = response.json();
        this.setStatus(this.currentStatus);

        if (response.json().isTerminated)
          this.logService.addToLog(this.currentStatus, 'none', 0);
      })
      .catch(error => console.error('An error occured', error));
  }

  getStatus(): Observable<any> {
    return this.subject.asObservable();
  }
}
