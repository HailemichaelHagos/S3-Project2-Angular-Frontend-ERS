import { TestBed } from '@angular/core/testing';

import { ManagerHttpServiceService } from './manager-http-service.service';

describe('ManagerHttpServiceService', () => {
  let service: ManagerHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
