import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAbreviacaoComponent } from './item-abreviacao.component';

describe('ItemAbreviacaoComponent', () => {
  let component: ItemAbreviacaoComponent;
  let fixture: ComponentFixture<ItemAbreviacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAbreviacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAbreviacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
