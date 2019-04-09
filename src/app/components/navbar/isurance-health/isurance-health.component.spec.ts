import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsuranceHealthComponent } from './isurance-health.component';

describe('IsuranceHealthComponent', () => {
  let component: IsuranceHealthComponent;
  let fixture: ComponentFixture<IsuranceHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsuranceHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsuranceHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
