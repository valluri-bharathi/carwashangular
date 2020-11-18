import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { ViewComponent } from './view/view.component';
import { ServiceComponent } from './service/service.component';
import { AddonComponent } from './addon/addon.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { HomeComponent } from './home/home.component';



const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'admin', component: AdminComponent},
  { path: 'login', component: LoginComponent},
  { path: 'addDetails', component: CarDetailsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'success', component: SuccessComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'view', component: ViewComponent},
  {path: 'service',component: ServiceComponent},
  {path: 'addon' , component: AddonComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'dashboard' , component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
