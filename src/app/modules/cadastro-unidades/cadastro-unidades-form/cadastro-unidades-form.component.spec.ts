import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUnidadesFormComponent } from './cadastro-unidades-form.component';

describe('CadastroUnidadesFormComponent', () => {
  let component: CadastroUnidadesFormComponent;
  let fixture: ComponentFixture<CadastroUnidadesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroUnidadesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroUnidadesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
