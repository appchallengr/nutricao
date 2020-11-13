import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAbreviacaoHistoricoComponent } from './item-abreviacao-historico.component';

describe('ItemAbreviacaoHistoricoComponent', () => {
  let component: ItemAbreviacaoHistoricoComponent;
  let fixture: ComponentFixture<ItemAbreviacaoHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAbreviacaoHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAbreviacaoHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
