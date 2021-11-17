import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectImageShowcaseComponent } from './select-image-showcase.component';

describe('SelectImageShowcaseComponent', () => {
  let component: SelectImageShowcaseComponent;
  let fixture: ComponentFixture<SelectImageShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectImageShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectImageShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
