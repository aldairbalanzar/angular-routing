import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styles: []
})
export class DepartmentListComponent implements OnInit {
  departments: Department[];
  constructor(
    private departmentService: DepartmentsService,
    ) { }

  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments();
  }

  handleDepartmentRoute(departmentId: number): void {
    this.departmentService.setDepartmentRoute(departmentId)
    this.departmentService.setCurrentDepartmentData()
  }

  compareDepartmentsById(departmentId: number): boolean {
    if(this.departmentService.getCurrentDepartmentId() === departmentId) {
      return true;
    }

    return false;
  }
}
