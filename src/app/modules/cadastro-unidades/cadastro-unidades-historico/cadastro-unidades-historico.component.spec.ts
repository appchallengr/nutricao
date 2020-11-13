import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUnidadesHistoricoComponent } from './cadastro-unidades-historico.component';

describe('CadastroUnidadesHistoricoComponent', () => {
  let component: CadastroUnidadesHistoricoComponent;
  let fixture: ComponentFixture<CadastroUnidadesHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroUnidadesHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroUnidadesHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
