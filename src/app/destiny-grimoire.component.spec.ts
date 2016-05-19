import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DestinyGrimoireAppComponent } from '../app/destiny-grimoire.component';

beforeEachProviders(() => [DestinyGrimoireAppComponent]);

describe('App: DestinyGrimoire', () => {
  it('should create the app',
      inject([DestinyGrimoireAppComponent], (app: DestinyGrimoireAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'destiny-grimoire works!\'',
      inject([DestinyGrimoireAppComponent], (app: DestinyGrimoireAppComponent) => {
    expect(app.title).toEqual('destiny-grimoire works!');
  }));
});
