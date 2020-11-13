import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBtnComponent } from './block-btn.component';

describe('BlockBtnComponent', () => {
  let component: BlockBtnComponent;
  let fixture: ComponentFixture<BlockBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
