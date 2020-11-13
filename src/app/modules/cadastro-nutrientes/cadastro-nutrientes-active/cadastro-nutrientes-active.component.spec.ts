import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNutrientesActiveComponent } from './cadastro-nutrientes-active.component';

describe('CadastroNutrientesActiveComponent', () => {
  let component: CadastroNutrientesActiveComponent;
  let fixture: ComponentFixture<CadastroNutrientesActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroNutrientesActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroNutrientesActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
