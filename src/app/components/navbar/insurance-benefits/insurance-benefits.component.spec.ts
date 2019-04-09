import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceBenefitsComponent } from './insurance-benefits.component';

describe('InsuranceBenefitsComponent', () => {
  let component: InsuranceBenefitsComponent;
  let fixture: ComponentFixture<InsuranceBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
