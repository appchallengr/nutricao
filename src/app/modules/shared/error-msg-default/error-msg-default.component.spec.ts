import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMsgDefaultComponent } from './error-msg-default.component';

describe('ErrorMsgDefaultComponent', () => {
  let component: ErrorMsgDefaultComponent;
  let fixture: ComponentFixture<ErrorMsgDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMsgDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMsgDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
