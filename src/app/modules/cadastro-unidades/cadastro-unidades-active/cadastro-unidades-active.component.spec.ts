import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUnidadesActiveComponent } from './cadastro-unidades-active.component';

describe('CadastroUnidadesActiveComponent', () => {
  let component: CadastroUnidadesActiveComponent;
  let fixture: ComponentFixture<CadastroUnidadesActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroUnidadesActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroUnidadesActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
