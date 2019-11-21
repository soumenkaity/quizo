import { TestBed } from '@angular/core/testing';

import { FetchTestService } from './fetch-test.service';

describe('FetchTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchTestService = TestBed.get(FetchTestService);
    expect(service).toBeTruthy();
  });
});
