import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBtnComponent } from './active-btn.component';

describe('ActiveBtnComponent', () => {
  let component: ActiveBtnComponent;
  let fixture: ComponentFixture<ActiveBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
