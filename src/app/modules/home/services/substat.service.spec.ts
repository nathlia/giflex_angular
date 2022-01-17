import { TestBed } from '@angular/core/testing';

import { SubstatService } from './substat.service';

describe('SubstatService', () => {
  let service: SubstatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubstatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
