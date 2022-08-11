import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styles: []
})
export class DepartmentListComponent implements OnInit {
  departments: {}[];
  constructor(
    private departsmentService: DepartmentsService,
    ) { }

  ngOnInit(): void {
    this.departments = this.departsmentService.getDepartments();
  }

  handleDepartmentRoute(departmentId: number): void {
    this.departsmentService.setDepartmentRoute(departmentId)
  }
}