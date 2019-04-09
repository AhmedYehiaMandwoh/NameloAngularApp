import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-age-group',
  templateUrl: './age-group.component.html',
  styleUrls: ['./age-group.component.sass']
})
export class AgeGroupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  // Move To Insurance-Helth
  moveToInsurance() {
    this.router.navigate(['insurance-health']);
  }
  // Move To Plan-Code
  moveToPlanCode() {
    this.router.navigate(['plan-code']);
  }
}
