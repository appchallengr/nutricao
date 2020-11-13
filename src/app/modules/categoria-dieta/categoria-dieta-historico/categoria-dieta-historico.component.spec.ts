import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDietaHistoricoComponent } from './categoria-dieta-historico.component';

describe('CategoriaDietaHistoricoComponent', () => {
  let component: CategoriaDietaHistoricoComponent;
  let fixture: ComponentFixture<CategoriaDietaHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaDietaHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaDietaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
