import { TestBed } from '@angular/core/testing';

import { BlockedServiceService } from './blocked-service.service';

describe('BlockedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockedServiceService = TestBed.get(BlockedServiceService);
    expect(service).toBeTruthy();
  });
});
