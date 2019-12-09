import { TestBed } from '@angular/core/testing';

import { MessageserviceService } from './messageservice.service';

describe('MessageserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageserviceService = TestBed.get(MessageserviceService);
    expect(service).toBeTruthy();
  });
});
