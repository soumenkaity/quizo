import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouHrComponent } from './thankyou-hr.component';

describe('ThankyouHrComponent', () => {
  let component: ThankyouHrComponent;
  let fixture: ComponentFixture<ThankyouHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
