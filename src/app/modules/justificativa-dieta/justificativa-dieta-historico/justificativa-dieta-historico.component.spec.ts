import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificativaDietaHistoricoComponent } from './justificativa-dieta-historico.component';

describe('JustificativaDietaHistoricoComponent', () => {
  let component: JustificativaDietaHistoricoComponent;
  let fixture: ComponentFixture<JustificativaDietaHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustificativaDietaHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustificativaDietaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
