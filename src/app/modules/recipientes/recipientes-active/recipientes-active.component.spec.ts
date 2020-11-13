import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientesActiveComponent } from './recipientes-active.component';

describe('RecipientesActiveComponent', () => {
  let component: RecipientesActiveComponent;
  let fixture: ComponentFixture<RecipientesActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientesActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientesActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
