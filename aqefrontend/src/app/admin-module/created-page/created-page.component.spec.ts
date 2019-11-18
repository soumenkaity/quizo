import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedPageComponent } from './created-page.component';

describe('CreatedPageComponent', () => {
  let component: CreatedPageComponent;
  let fixture: ComponentFixture<CreatedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
