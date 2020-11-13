import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalProducaoActiveComponent } from './local-producao-active.component';

describe('LocalProducaoActiveComponent', () => {
  let component: LocalProducaoActiveComponent;
  let fixture: ComponentFixture<LocalProducaoActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalProducaoActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalProducaoActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
