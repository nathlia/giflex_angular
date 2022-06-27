import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarArtifactSetTypesComponent } from './listar-artifact-set-types.component';

describe('ListarArtifactSetTypesComponent', () => {
  let component: ListarArtifactSetTypesComponent;
  let fixture: ComponentFixture<ListarArtifactSetTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarArtifactSetTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarArtifactSetTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
