import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {

  public currentDepartmentId: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentDepartmentId = parseInt(this.route.snapshot.paramMap.get("id"));
  }

}
