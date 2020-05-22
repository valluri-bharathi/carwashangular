import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { DeleteComponent } from './delete/delete.component';
// import { HomeComponent } from './home/home.component';



const routes: Routes = [
  
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
  { path: 'login', component: LoginComponent},
  { path: 'addDetails', component: CarDetailsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'success', component: SuccessComponent},
  { path: 'delete', component: DeleteComponent},
  // { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
