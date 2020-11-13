import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAbreviacaoActiveComponent } from './item-abreviacao-active.component';

describe('ItemAbreviacaoActiveComponent', () => {
  let component: ItemAbreviacaoActiveComponent;
  let fixture: ComponentFixture<ItemAbreviacaoActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAbreviacaoActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAbreviacaoActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
