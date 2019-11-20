import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchTestComponent } from './fetch-test.component';

describe('FetchTestComponent', () => {
  let component: FetchTestComponent;
  let fixture: ComponentFixture<FetchTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
