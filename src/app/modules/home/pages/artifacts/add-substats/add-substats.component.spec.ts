import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubstatsComponent } from './add-substats.component';

describe('AddSubstatsComponent', () => {
  let component: AddSubstatsComponent;
  let fixture: ComponentFixture<AddSubstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubstatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
