import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.sass']
})
export class PlanDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  printPlan() {
    window.print();
    return false;
  }
}
