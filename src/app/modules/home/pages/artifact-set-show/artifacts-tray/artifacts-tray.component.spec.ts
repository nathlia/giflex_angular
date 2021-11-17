import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactsTrayComponent } from './artifacts-tray.component';

describe('ArtifactsTrayComponent', () => {
  let component: ArtifactsTrayComponent;
  let fixture: ComponentFixture<ArtifactsTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtifactsTrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactsTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
