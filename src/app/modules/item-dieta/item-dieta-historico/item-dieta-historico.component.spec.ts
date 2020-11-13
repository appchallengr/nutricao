import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDietaHistoricoComponent } from './item-dieta-historico.component';

describe('ItemDietaHistoricoComponent', () => {
  let component: ItemDietaHistoricoComponent;
  let fixture: ComponentFixture<ItemDietaHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDietaHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDietaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
