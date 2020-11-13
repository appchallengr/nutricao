import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNutrientesComponent } from './cadastro-nutrientes.component';

describe('CadastroNutrientesComponent', () => {
  let component: CadastroNutrientesComponent;
  let fixture: ComponentFixture<CadastroNutrientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroNutrientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroNutrientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
