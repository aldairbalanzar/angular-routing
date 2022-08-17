import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  private departmentDataSource = new BehaviorSubject<Department | null>(null);
  currentDepartmentData = this.departmentDataSource.asObservable();

  private departments: Department[] = [
    {id: 1, name: "Angular"},
    {id: 2, name: "React"},
    {id: 3, name: "Svelte"},
    {id: 4, name: "Vue"},
  ]

  
  constructor(
    route: ActivatedRoute,
  ) {}
    
  getDepartments(): Department[] {
    return this.departments;
  }
  
  getAmountOfDepartments(): number {
    return this.departments.length;
  }
  
  getDepartmentDataById(departmentId: number): Department {
    return this.departments.find(dept => dept.id === departmentId);
  } 
  
  setCurrentDepartmentData(departmentId: number): void {
    this.departmentDataSource.next(this.getDepartmentDataById(departmentId));
  }
}
