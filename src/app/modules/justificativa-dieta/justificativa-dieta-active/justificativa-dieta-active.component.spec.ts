import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificativaDietaActiveComponent } from './justificativa-dieta-active.component';

describe('JustificativaDietaActiveComponent', () => {
  let component: JustificativaDietaActiveComponent;
  let fixture: ComponentFixture<JustificativaDietaActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustificativaDietaActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustificativaDietaActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
