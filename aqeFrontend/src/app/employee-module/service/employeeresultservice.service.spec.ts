import { TestBed } from '@angular/core/testing';

import { EmployeeresultserviceService } from './employeeresultservice.service';

describe('EmployeeresultserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeresultserviceService = TestBed.get(EmployeeresultserviceService);
    expect(service).toBeTruthy();
  });
});
