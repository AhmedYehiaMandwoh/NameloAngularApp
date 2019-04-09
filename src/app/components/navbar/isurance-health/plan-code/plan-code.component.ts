import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-code',
  templateUrl: './plan-code.component.html',
  styleUrls: ['./plan-code.component.sass']
})
export class PlanCodeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
// Move To Insurance-Helth
moveToInsurance() {
  this.router.navigate(['insurance-health']);
}
// Move To Age-Group
moveToAgeGroup() {
  this.router.navigate(['age-group']);
}

}
