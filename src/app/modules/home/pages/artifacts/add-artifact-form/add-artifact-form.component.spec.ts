import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtifactFormComponent } from './add-artifact-form.component';

describe('AddArtifactFormComponent', () => {
  let component: AddArtifactFormComponent;
  let fixture: ComponentFixture<AddArtifactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArtifactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArtifactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
