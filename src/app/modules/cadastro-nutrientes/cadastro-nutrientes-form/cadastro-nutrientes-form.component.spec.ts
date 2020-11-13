import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNutrientesFormComponent } from './cadastro-nutrientes-form.component';

describe('CadastroNutrientesFormComponent', () => {
  let component: CadastroNutrientesFormComponent;
  let fixture: ComponentFixture<CadastroNutrientesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroNutrientesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroNutrientesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
