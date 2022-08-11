import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {

  public currentDepartmentId: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    // snapshot approach does not reinitialize component upon param change
    //this.currentDepartmentId = parseInt(this.route.snapshot.paramMap.get("id"));

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.currentDepartmentId = parseInt(params.get("id")); 
    })
}

  handlePrevDepartment(): void {
    let prevId = this.currentDepartmentId - 1
    if(prevId < 1) {
      prevId = deparments.length();
    }
  }

  handleNextDepartment() {

  }
}
