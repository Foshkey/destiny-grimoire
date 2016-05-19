import { ImageGroup } from './common';
import { Page } from './page';

export interface Theme {
  themeId: string;
  themeName: string;
  normalResolution: ImageGroup;
  highResolution: ImageGroup;
  pageCollection: Array<Page>
}