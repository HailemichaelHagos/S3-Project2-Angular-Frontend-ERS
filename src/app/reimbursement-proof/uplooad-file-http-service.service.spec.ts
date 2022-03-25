import { TestBed } from '@angular/core/testing';

import { UplooadFileHttpServiceService } from './uplooad-file-http-service.service';

describe('UplooadFileHttpServiceService', () => {
  let service: UplooadFileHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UplooadFileHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
