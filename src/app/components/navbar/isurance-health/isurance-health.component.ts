import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-isurance-health',
  templateUrl: './isurance-health.component.html',
  styleUrls: ['./isurance-health.component.sass']
})
export class IsuranceHealthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
// Move To Age-Group
moveToAgeGroup() {
  this.router.navigate(['age-group']);
}
// Move To Plan-Code
moveToPlanCode() {
  this.router.navigate(['plan-code']);
}

}
