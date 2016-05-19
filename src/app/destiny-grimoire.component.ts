import { Component } from '@angular/core';

import { AlertGroupComponent } from './alert-group/alert-group.component'
import { GrimoireService } from './grimoire.service'

@Component({
  moduleId: module.id,
  selector: 'destiny-grimoire-app',
  templateUrl: 'destiny-grimoire.component.html',
  styleUrls: ['destiny-grimoire.component.css'],
  directives: [AlertGroupComponent],
  providers: [GrimoireService]
})
export class DestinyGrimoireAppComponent {
  
  constructor(public grimoireService: GrimoireService) {}
}
