import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';
import { CustomerDetails } from '../customerDetails';
import { Router } from '@angular/router';
import { AdminDetails } from '../adminDetails';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customerDetails: CustomerDetails;
  message: any;
  cuDetail: any;
  errorMsg: any;
  errorcontrol: boolean=false;
  // public redirectUrl: 'login/addDetails';
  adminDetails:AdminDetails;
  loginForm: FormGroup;
 

  constructor(private service:UserLoginService, public router:Router,private formBuilder: FormBuilder){}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      role: ['', Validators.required]
  });
  
  }
  get f(){
    return this.loginForm.controls;
  }
submitted=false;
  public loginNow(form){
    this.submitted=true;

  if(this.loginForm.invalid){
        // alert( "error occured!");
      }
   else{
    
     
  let custDetails:CustomerDetails={
    userName:form.value.userName,
    password:form.value.password,
    role:form.value.role
    }
    let response;
    
    if(custDetails.role==="customer"){
     
      this.service.login(custDetails).subscribe(
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

    }else{
      this.service.admin(custDetails).subscribe(
        data =>{
          this.cuDetail=data;
          localStorage.setItem('name',JSON.stringify(this.cuDetail.userName));
         console.log(JSON.parse(localStorage.getItem("name")));
          console.log(data);
          this.router.navigate(['/dashboard']);
        },
        error =>{
        // alert("enter correct credentials");
          this.errorMsg = this.service;
          this.errorcontrol = true;
        }
      )

    }
    
  }
}
}
