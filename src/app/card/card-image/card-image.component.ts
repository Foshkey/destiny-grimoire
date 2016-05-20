import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../../models/card';

@Component({
  moduleId: module.id,
  selector: 'app-card-image',
  templateUrl: 'card-image.component.html',
  styleUrls: ['card-image.component.css']
})
export class CardImageComponent implements OnInit {

  @Input() card: Card;
  
  private bungiePath = "https://www.bungie.net/"

  constructor() {}

  ngOnInit() {
  }
  
  getSmallImagePath() {
    return this.bungiePath + this.card.highResolution.image.sheetPath;
  }

}
