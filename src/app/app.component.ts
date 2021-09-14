import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeData } from './EmployeeData';
import { EmployeeService } from './service/employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeePayroll';
  empData: EmployeeData[];
  
  constructor(private router: Router, private empService: EmployeeService) { }

  addEmployeePayrollData(): void {
    this.router.navigate(['update'])
      .then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      })
  }

  ngOnInit(): void {
  }
}
