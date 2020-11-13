import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanBtnComponent } from './clean-btn.component';

describe('CleanBtnComponent', () => {
  let component: CleanBtnComponent;
  let fixture: ComponentFixture<CleanBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
