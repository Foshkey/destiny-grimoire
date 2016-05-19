import { Injectable } from '@angular/core';

export interface Alert {
  type: string;
  message: string;
  closable?: boolean;
}

@Injectable()
export class AlertGroupService {
  
  alerts: Array<Alert> = [];
  
  dismissAlert(index: number): void {
    this.alerts.splice(index, 1);
  }
  
  addAlert(alert: Alert): void {
    if (alert.closable == undefined || alert.closable == null) alert.closable = true;
    this.alerts.push(alert);
  }
  
  addError(): void {
    this.addAlert({
      type: 'danger',
      message: 'Unable to process request. Please try again later.'
    })
  }
}
