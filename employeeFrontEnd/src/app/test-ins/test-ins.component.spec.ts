import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInsComponent } from './test-ins.component';

describe('TestInsComponent', () => {
  let component: TestInsComponent;
  let fixture: ComponentFixture<TestInsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
