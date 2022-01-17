import { TestBed } from '@angular/core/testing';

import { ArtifactSetTypeService } from './artifact-set-type.service';

describe('ArtifactSetTypeService', () => {
  let service: ArtifactSetTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactSetTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
