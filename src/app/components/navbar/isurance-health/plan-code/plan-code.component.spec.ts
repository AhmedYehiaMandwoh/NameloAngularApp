import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCodeComponent } from './plan-code.component';

describe('PlanCodeComponent', () => {
  let component: PlanCodeComponent;
  let fixture: ComponentFixture<PlanCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
