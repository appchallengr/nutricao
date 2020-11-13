import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalProducaoFormComponent } from './local-producao-form.component';

describe('LocalProducaoFormComponent', () => {
  let component: LocalProducaoFormComponent;
  let fixture: ComponentFixture<LocalProducaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalProducaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalProducaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
