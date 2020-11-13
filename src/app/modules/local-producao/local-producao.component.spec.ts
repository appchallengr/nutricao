import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalProducaoComponent } from './local-producao.component';

describe('LocalProducaoComponent', () => {
  let component: LocalProducaoComponent;
  let fixture: ComponentFixture<LocalProducaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalProducaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
