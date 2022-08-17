import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {
  currentDepartmentId: number;
  departmentData: Department;
  constructor(
    private departmentsService: DepartmentsService,
    private route: ActivatedRoute,
    private router: Router, 
  ) { }

  ngOnInit(): void {
    // snapshot approach does not reinitialize component upon param change
    //this.currentDepartmentId = parseInt(this.route.snapshot.paramMap.get("id"));

    this.route.paramMap.subscribe((params: ParamMap) => {
      let departmentId = parseInt(params.get("id"))
      this.currentDepartmentId = departmentId;
      this.departmentsService.setCurrentDepartmentData(departmentId)
    });

    this.departmentsService.currentDepartmentData.subscribe(dept => this.departmentData = dept);
  }

  handlePrevDepartment() {
    this.currentDepartmentId = this.currentDepartmentId - 1;
    if(this.currentDepartmentId < 1) {
      this.currentDepartmentId = this.departmentsService.getAmountOfDepartments()
    }

    this.departmentsService.setCurrentDepartmentData(this.currentDepartmentId)
    this.router.navigate(["../departments", this.currentDepartmentId]);
  }

  handleNextDepartment(): void {
    this.currentDepartmentId = this.currentDepartmentId + 1;
    if(this.currentDepartmentId > this.departmentsService.getAmountOfDepartments()) {
      this.currentDepartmentId = 1
    }

    this.departmentsService.setCurrentDepartmentData(this.currentDepartmentId);
    this.router.navigate(["../departments", this.currentDepartmentId]);
  }

  handleBackClick(): void {
    this.router.navigate(["../", { id: this.currentDepartmentId }], {relativeTo: this.route});
  }
}
