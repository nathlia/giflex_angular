import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseSubstatsComponent } from './showcase-substats.component';

describe('ShowcaseSubstatsComponent', () => {
  let component: ShowcaseSubstatsComponent;
  let fixture: ComponentFixture<ShowcaseSubstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseSubstatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseSubstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
