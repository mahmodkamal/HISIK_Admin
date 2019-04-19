import { TestBed } from '@angular/core/testing';

import { PrandService } from './prand.service';

describe('PrandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrandService = TestBed.get(PrandService);
    expect(service).toBeTruthy();
  });
});
