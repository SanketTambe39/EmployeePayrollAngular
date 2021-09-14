import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: "",component: HomePageComponent },
  { path: "add", component: AddEmployeeComponent},
  { path: "update/:id", component: AddEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
