import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalProducaoHistoricoComponent } from './local-producao-historico.component';

describe('LocalProducaoHistoricoComponent', () => {
  let component: LocalProducaoHistoricoComponent;
  let fixture: ComponentFixture<LocalProducaoHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalProducaoHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalProducaoHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
