import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingMiniComponent } from './loading-mini.component';

describe('LoadingMiniComponent', () => {
  let component: LoadingMiniComponent;
  let fixture: ComponentFixture<LoadingMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
