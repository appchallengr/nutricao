import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTableBackendComponent } from './search-table-backend.component';

describe('SearchTableBackendComponent', () => {
  let component: SearchTableBackendComponent;
  let fixture: ComponentFixture<SearchTableBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTableBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTableBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
