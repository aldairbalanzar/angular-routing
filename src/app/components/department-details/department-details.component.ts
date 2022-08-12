import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {
  departmentId: number;
  departmentData: Department;
  constructor(
    private departmentsService: DepartmentsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // snapshot approach does not reinitialize component upon param change
    //this.currentDepartmentId = parseInt(this.route.snapshot.paramMap.get("id"));

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentId = parseInt(params.get("id"));
    });

    this.departmentsService.currentDepartmentData.subscribe(dept => this.departmentData = dept);
    console.log(this.departmentData);
  }

  handlePrevDepartment() {
    let newId: number = this.departmentId - 1;
    if(newId < 1) {
      newId = this.departmentsService.getAmountOfDepartments()
    }

    this.departmentsService.setDepartmentRoute(newId);
    this.departmentsService.setCurrentDepartmentData()
  }

  handleNextDepartment(): void {
    let newId: number = this.departmentId + 1;
    if(newId > this.departmentsService.getAmountOfDepartments()) {
      newId = 1
    }

    this.departmentsService.setDepartmentRoute(newId);
    this.departmentsService.setCurrentDepartmentData()
  }
}
