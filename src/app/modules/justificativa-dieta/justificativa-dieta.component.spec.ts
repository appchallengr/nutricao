import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificativaDietaComponent } from './justificativa-dieta.component';

describe('JustificativaDietaComponent', () => {
  let component: JustificativaDietaComponent;
  let fixture: ComponentFixture<JustificativaDietaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustificativaDietaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustificativaDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
