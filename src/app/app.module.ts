import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginService } from './user-login.service';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { ViewComponent } from './view/view.component';
import { ServiceComponent } from './service/service.component';
import { AddonComponent } from './addon/addon.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarDetailsComponent,
    RegisterComponent,
    SuccessComponent,
    AdminComponent,
    AboutComponent,
    ViewComponent,
    ServiceComponent,
    AddonComponent,
    DashboardComponent,
    HeaderComponent,
    ContactComponent
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
