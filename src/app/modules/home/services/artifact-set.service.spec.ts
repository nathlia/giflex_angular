import { TestBed } from '@angular/core/testing';

import { ArtifactSetService } from './artifact-set.service';

describe('ArtifactSetService', () => {
  let service: ArtifactSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
