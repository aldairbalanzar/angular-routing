import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styles: []
})
export class DepartmentListComponent implements OnInit {
  departments = [
    {id: 1, name: "Angular"},
    {id: 2, name: "React"},
    {id: 3, name: "Svelte"},
    {id: 4, name: "Vue"},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleDepartmentRoute(departmentId: number): void {
    console.log("handleDepartmentRoute: ", departmentId);
    this.router.navigate(["/departments", departmentId]);
  }

}
