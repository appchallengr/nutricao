import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCodeSearchComponent } from './input-code-search.component';

describe('InputCodeSearchComponent', () => {
  let component: InputCodeSearchComponent;
  let fixture: ComponentFixture<InputCodeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCodeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCodeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
