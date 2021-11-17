import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersTrayComponent } from './characters-tray.component';

describe('CharactersTrayComponent', () => {
  let component: CharactersTrayComponent;
  let fixture: ComponentFixture<CharactersTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersTrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
