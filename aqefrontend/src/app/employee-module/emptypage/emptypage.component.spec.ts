import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptypageComponent } from './emptypage.component';

describe('EmptypageComponent', () => {
  let component: EmptypageComponent;
  let fixture: ComponentFixture<EmptypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
