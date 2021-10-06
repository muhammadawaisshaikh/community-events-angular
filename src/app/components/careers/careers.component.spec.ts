import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersComponent } from './careers.component';

describe('CareersComponent', () => {
  let component: CareersComponent;
  let fixture: ComponentFixture<CareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
