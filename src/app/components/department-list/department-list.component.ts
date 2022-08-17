import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styles: []
})
export class DepartmentListComponent implements OnInit {
  departments: Department[];
  currentDepartmentId: number | null;

  constructor(
    private departmentService: DepartmentsService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.currentDepartmentId = parseInt(params.get("id"));
    });
  }

  handleSelectedDepartment(departmentId: number): void {
    this.departmentService.setCurrentDepartmentData(departmentId)
    this.router.navigate([departmentId], {relativeTo: this.route});
  }

  compareDepartmentsById(departmentId: number): boolean {
    if(this.currentDepartmentId === departmentId) {
      return true;
    }

    return false;
  }
}
