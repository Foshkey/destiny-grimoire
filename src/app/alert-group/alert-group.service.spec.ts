import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AlertGroupService } from './alert-group.service';

describe('Alert Group Service', () => {
  beforeEachProviders(() => [AlertGroupService]);

  it('should ...',
      inject([AlertGroupService], (service: AlertGroupService) => {
    expect(service).toBeTruthy();
  }));
});
