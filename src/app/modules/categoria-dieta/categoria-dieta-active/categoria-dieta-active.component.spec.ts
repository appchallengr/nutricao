import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDietaActiveComponent } from './categoria-dieta-active.component';

describe('CategoriaDietaActiveComponent', () => {
  let component: CategoriaDietaActiveComponent;
  let fixture: ComponentFixture<CategoriaDietaActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaDietaActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaDietaActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
