import { Component, OnInit } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

import { AlertGroupService } from './alert-group.service'

@Component({
  moduleId: module.id,
  selector: 'app-alert-group',
  templateUrl: 'alert-group.component.html',
  styleUrls: ['alert-group.component.css'],
  directives: [AlertComponent],
  providers: [AlertGroupService]
})
export class AlertGroupComponent {
  
  dismissTimeout = 5000 // ms

  constructor(public alertGroupService: AlertGroupService) {}
  
}
