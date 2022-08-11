import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  departments = [
    {id: 1, name: "Angular"},
    {id: 2, name: "React"},
    {id: 3, name: "Svelte"},
    {id: 4, name: "Vue"},
  ]
  currentDepartmentId: number;

  constructor(
    private router: Router,
  ) { }

  getDepartments(): {}[] {
    return this.departments;
  }

  getAmountOfDepartments(): number {
    return this.departments.length;
  }

  setNextDepartment(): void {
    if(this.getAmountOfDepartments() > 5) {
      this.currentDepartmentId = 1
    } else {
      this.currentDepartmentId += 1
    }
  }

  setPrevDepartment(): void {
    if(this.getDepartments().length < 1) {
      this.currentDepartmentId = this.getAmountOfDepartments();
    } else {
      this.currentDepartmentId -= 1
    }
  }

  setDepartmentRoute(departmentId: number): void {
    this.router.navigate(["/departments", departmentId]);
  }
}
