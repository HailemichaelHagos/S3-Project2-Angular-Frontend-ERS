import { TestBed } from '@angular/core/testing';

import { PendingHttpServiceService } from './pending-http-service.service';

describe('PendingHttpServiceService', () => {
  let service: PendingHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
