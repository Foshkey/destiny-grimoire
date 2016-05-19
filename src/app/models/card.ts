import { ImageGroup } from './common';

export interface Card {
  cardId: number;
  cardName: string;
  cardIntro: string;
  cardDescription: string;
  unlockHowToText: string;
  rarity: number;
  unlockFlagHash: number;
  points: number;
  normalResolution: ImageGroup;
  highResolution: ImageGroup;
}