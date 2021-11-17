import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactSetShowComponent } from './artifact-set-show.component';

describe('ArtifactSetShowComponent', () => {
  let component: ArtifactSetShowComponent;
  let fixture: ComponentFixture<ArtifactSetShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtifactSetShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactSetShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
