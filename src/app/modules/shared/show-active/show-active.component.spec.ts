import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActiveComponent } from './show-active.component';

describe('ShowActiveComponent', () => {
  let component: ShowActiveComponent;
  let fixture: ComponentFixture<ShowActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
