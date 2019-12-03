import { TestBed } from '@angular/core/testing';

import { PostemployeedetailsService } from './postemployeedetails.service';

describe('PostemployeedetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostemployeedetailsService = TestBed.get(PostemployeedetailsService);
    expect(service).toBeTruthy();
  });
});
