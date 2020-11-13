import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDietaComponent } from './item-dieta.component';

describe('ItemDietaComponent', () => {
  let component: ItemDietaComponent;
  let fixture: ComponentFixture<ItemDietaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDietaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
