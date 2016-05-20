import { Component, OnInit } from '@angular/core';

import { Card } from './models/card'

import { GrimoireService } from './grimoire.service'

import { AlertGroupComponent } from './alert-group/alert-group.component'
import { CardComponent } from './card/card.component'

@Component({
  moduleId: module.id,
  selector: 'destiny-grimoire-app',
  templateUrl: 'destiny-grimoire.component.html',
  styleUrls: ['destiny-grimoire.component.css'],
  directives: [AlertGroupComponent, CardComponent],
  providers: [GrimoireService]
})
export class DestinyGrimoireAppComponent implements OnInit {
  
  testCard: Card;
  
  constructor(public grimoireService: GrimoireService) { }
  
  ngOnInit() {
    this.setTestCard();
  }
  
  setTestCard() {
    if (!this.grimoireService.grimoire) {
      setTimeout(() => this.setTestCard(), 200);
      return;
    }
    this.testCard = this.grimoireService.grimoire.themeCollection[0].pageCollection[0].cardCollection[0];
  }
}
