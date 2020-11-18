import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../customerDetails';
import { UserLoginService } from '../user-login.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customerDetails: CustomerDetails= new CustomerDetails("","","");
  message: any;
  public errorMsg;
  errorcontrol: boolean=false;
  registerForm: FormGroup;


  constructor(private service:UserLoginService,public router:Router,private formBuilder: FormBuilder){}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]]
     
  });
  
  }
  get f(){
    return this.registerForm.controls;
  }
  submitted=false;

  public submitNow(form){
    // alert("shjkdnsk");
    this.submitted=true;
    let customerDetails:CustomerDetails={
      userName:form.value.userName,
      password:form.value.password,
      role:form.value.role
      }
    let response;
    // alert(form.value.userName);
  if(form.value.userName && form.value.password){
   
  this.service.register(customerDetails).subscribe(
    data =>{
    console.log(data);
    
    this.router.navigate(['/login']);
    alert("registered succesfully");
      },
      error =>{
         alert("user already exists");
        this.errorMsg = error.error.message;
        this.errorcontrol = true;
        window.location.reload();
      }
  )
 
  }
  else{
    // alert("please fill the fields");
  }
}

}

