import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';
import { CustomerDetails } from '../customerDetails';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customerDetails: CustomerDetails= new CustomerDetails("","");
  message: any;
  cuDetail: any;
  errorMsg: any;
  errorcontrol: boolean=false;
  // public redirectUrl: 'login/addDetails';
  
  constructor(private service:UserLoginService, public router:Router){}
  ngOnInit(): void {
  }

  public loginNow(){
    let response;
    

    this.service.login(this.customerDetails).subscribe(
      data =>{
        console.log("entered");
        this.cuDetail=data;
        localStorage.setItem('name',JSON.stringify(this.cuDetail.userName));
       console.log(JSON.parse(localStorage.getItem("name")));
        console.log(data);
        this.router.navigate(['/addDetails']);
      },
      error =>{
      alert("enter correct credentials");
        this.errorMsg = this.service;
        this.errorcontrol = true;
      }
    )
  }
}
