import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../customerDetails';
import { UserLoginService } from '../user-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customerDetails: CustomerDetails= new CustomerDetails("","");
  message: any;
  public errorMsg;
  errorcontrol: boolean=false;
  constructor(private service:UserLoginService,public router:Router){}

  ngOnInit(): void {
  }

  public submitNow(){
    let response;
  console.log("abcd");
  
  console.log(this.customerDetails.password);
  this.service.register(this.customerDetails).subscribe(
    data =>{
    console.log(data);
    this.router.navigate(['/login']);
      },
      error =>{
        alert("user already exists");
        this.errorMsg = error.error.message;
        this.errorcontrol = true;
      }
  )
  }
}

