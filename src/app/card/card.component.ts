import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../models/card'

import { CardImageComponent } from './card-image/card-image.component'

@Component({
  moduleId: module.id,
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
  directives: [CardImageComponent]
})
export class CardComponent implements OnInit {
  
  @Input() card: Card;

  constructor() {}

  ngOnInit() {
  }

}
