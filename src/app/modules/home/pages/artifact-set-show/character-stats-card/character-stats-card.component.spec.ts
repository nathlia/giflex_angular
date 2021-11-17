import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterStatsCardComponent } from './character-stats-card.component';

describe('CharacterStatsCardComponent', () => {
  let component: CharacterStatsCardComponent;
  let fixture: ComponentFixture<CharacterStatsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterStatsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterStatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
