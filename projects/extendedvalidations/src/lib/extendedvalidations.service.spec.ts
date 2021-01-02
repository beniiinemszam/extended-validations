import { TestBed } from '@angular/core/testing';

import { ExtendedvalidationsService } from './extendedvalidations.service';

describe('ExtendedvalidationsService', () => {
  let service: ExtendedvalidationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtendedvalidationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
