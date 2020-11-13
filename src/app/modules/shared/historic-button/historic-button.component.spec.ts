import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricButtonComponent } from './historic-button.component';

describe('HistoricButtonComponent', () => {
  let component: HistoricButtonComponent;
  let fixture: ComponentFixture<HistoricButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
