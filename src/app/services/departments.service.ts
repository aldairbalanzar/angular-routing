import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  private currentDepartmentId: number;
  private departmentDataSource = new BehaviorSubject<Department | null>(null);
  currentDepartmentData = this.departmentDataSource.asObservable();

  private departments: Department[] = [
    {id: 1, name: "Angular"},
    {id: 2, name: "React"},
    {id: 3, name: "Svelte"},
    {id: 4, name: "Vue"},
  ]

  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) { }
    
  getDepartments(): Department[] {
    return this.departments;
  }
  
  getAmountOfDepartments(): number {
    return this.departments.length;
  }
  
  getDepartmentDataById(departmentId: number): Department {
    return this.departments.find(dept => dept.id === departmentId);
  } 

  
  setCurrentDepartmentId(departmentId: number): void {
    this.currentDepartmentId = departmentId
  }

  setDepartmentRoute(departmentId: number): void {
    this.setCurrentDepartmentId(departmentId);
    this.router.navigate(["/departments", this.currentDepartmentId]);
  }

  setCurrentDepartmentData(): void {
    this.departmentDataSource.next(this.getDepartmentDataById(this.currentDepartmentId))
  }
}
