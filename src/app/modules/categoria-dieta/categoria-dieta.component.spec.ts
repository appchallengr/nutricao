import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDietaComponent } from './categoria-dieta.component';

describe('CategoriaDietaComponent', () => {
  let component: CategoriaDietaComponent;
  let fixture: ComponentFixture<CategoriaDietaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaDietaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
