import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDietaActiveComponent } from './item-dieta-active.component';

describe('ItemDietaActiveComponent', () => {
  let component: ItemDietaActiveComponent;
  let fixture: ComponentFixture<ItemDietaActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDietaActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDietaActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
