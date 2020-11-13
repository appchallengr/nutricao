import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAbreviacaoFormComponent } from './item-abreviacao-form.component';

describe('ItemAbreviacaoFormComponent', () => {
  let component: ItemAbreviacaoFormComponent;
  let fixture: ComponentFixture<ItemAbreviacaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAbreviacaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAbreviacaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
