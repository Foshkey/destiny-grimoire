import { ImageGroup } from './common';
import { Card } from './card';
import { CardBrief } from './card-brief';

export interface Page {
  pageId: string;
  pageName: string;
  normalResolution: ImageGroup;
  highResolution: ImageGroup;
  cardCollection: Array<Card>;
  cardBriefs: Array<CardBrief>;
}