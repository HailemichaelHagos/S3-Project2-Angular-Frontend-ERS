import { TestBed } from '@angular/core/testing';

import { SolvedHttpServiceService } from './solved-http-service.service';

describe('SolvedHttpServiceService', () => {
  let service: SolvedHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolvedHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
