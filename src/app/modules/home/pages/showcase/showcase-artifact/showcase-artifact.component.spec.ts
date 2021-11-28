import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseArtifactComponent } from './showcase-artifact.component';

describe('ShowcaseArtifactComponent', () => {
  let component: ShowcaseArtifactComponent;
  let fixture: ComponentFixture<ShowcaseArtifactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseArtifactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseArtifactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
