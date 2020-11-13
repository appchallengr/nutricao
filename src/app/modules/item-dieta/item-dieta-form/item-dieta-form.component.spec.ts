import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDietaFormComponent } from './item-dieta-form.component';

describe('ItemDietaFormComponent', () => {
  let component: ItemDietaFormComponent;
  let fixture: ComponentFixture<ItemDietaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDietaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDietaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
