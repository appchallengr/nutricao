import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientesHistoricoComponent } from './recipientes-historico.component';

describe('RecipientesHistoricoComponent', () => {
  let component: RecipientesHistoricoComponent;
  let fixture: ComponentFixture<RecipientesHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientesHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientesHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
