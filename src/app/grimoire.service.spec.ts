import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { GrimoireService } from './grimoire.service';

describe('Grimoire Service', () => {
  beforeEachProviders(() => [GrimoireService]);

  it('should ...',
      inject([GrimoireService], (service: GrimoireService) => {
    expect(service).toBeTruthy();
  }));
});
