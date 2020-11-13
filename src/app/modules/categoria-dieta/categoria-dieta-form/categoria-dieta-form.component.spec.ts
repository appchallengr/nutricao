import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDietaFormComponent } from './categoria-dieta-form.component';

describe('CategoriaDietaFormComponent', () => {
  let component: CategoriaDietaFormComponent;
  let fixture: ComponentFixture<CategoriaDietaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaDietaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaDietaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
