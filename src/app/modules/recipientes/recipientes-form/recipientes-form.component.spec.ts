import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientesFormComponent } from './recipientes-form.component';

describe('RecipientesFormComponent', () => {
  let component: RecipientesFormComponent;
  let fixture: ComponentFixture<RecipientesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
