import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeData } from '../EmployeeData';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = 'http://localhost:8082/employeepayroll/';

  constructor(private http: HttpClient) {
    console.log("Inside Service");
  }

  getEmployeeData(): Observable<EmployeeData[]> {
    return this.http.get<EmployeeData[]>(`http://localhost:8082/employeepayroll/employees`);
  }

  // addEmployeePayrollData(EmployeeData: Object): Observable<Object> {
  //   return this.http.post(`http://localhost:8082/employeepayroll/create`,EmployeeData)
  // }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`http://localhost:8082/employeepayroll/employee/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`http://localhost:8082/employeepayroll/create`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8082/employeepayroll/update/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8082/employeepayroll/delete/${id}`, { responseType: 'text' });
  }

}
