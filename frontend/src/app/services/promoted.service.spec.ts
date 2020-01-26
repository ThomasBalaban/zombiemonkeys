import { TestBed } from '@angular/core/testing';

import { PromotedService } from './promoted.service';

describe('PromotedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromotedService = TestBed.get(PromotedService);
    expect(service).toBeTruthy();
  });
});
