import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupStepperComponent } from './user-group-stepper.component';

describe('UserGroupStepperComponent', () => {
  let component: UserGroupStepperComponent;
  let fixture: ComponentFixture<UserGroupStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGroupStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
