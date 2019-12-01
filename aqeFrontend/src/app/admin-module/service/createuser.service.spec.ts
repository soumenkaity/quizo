import { TestBed } from '@angular/core/testing';

import { CreateuserService } from './createuser.service';

describe('CreateuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateuserService = TestBed.get(CreateuserService);
    expect(service).toBeTruthy();
  });
});
