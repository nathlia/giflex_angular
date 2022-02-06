import { TestBed } from '@angular/core/testing';

import { CharacterArtifactService } from './character-artifact.service';

describe('CharacterArtifactService', () => {
  let service: CharacterArtifactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterArtifactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
