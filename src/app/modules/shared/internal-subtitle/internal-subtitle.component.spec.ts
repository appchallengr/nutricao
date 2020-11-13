import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalSubtitleComponent } from './internal-subtitle.component';

describe('InternalSubtitleComponent', () => {
  let component: InternalSubtitleComponent;
  let fixture: ComponentFixture<InternalSubtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalSubtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
