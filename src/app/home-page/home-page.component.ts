import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeData } from '../EmployeeData';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  departments = ["HR", "Sales", "Finance", "Engineer", "Other"]

  employees: Observable<EmployeeData[]>;
  cnt: number;

  constructor(private empservice: EmployeeService, private router: Router) { }
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.empservice.getEmployeeData();

//    this.employees = this.empservice.getEmployeeData();
//    console.log("total emp", typeof (this.employees),"==", this.employees)
  }

  deleteEmployee(id: number) {
    this.empservice.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData()
        })
  }

  updateEmployee(id: number) {
    this.router.navigate(['update', id])
  }

}
