import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificativaDietaFormComponent } from './justificativa-dieta-form.component';

describe('JustificativaDietaFormComponent', () => {
  let component: JustificativaDietaFormComponent;
  let fixture: ComponentFixture<JustificativaDietaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustificativaDietaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustificativaDietaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
