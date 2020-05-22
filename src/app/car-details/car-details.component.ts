import { Component, OnInit } from '@angular/core';
import { CustCarDetails } from '../custCarDetails';
import { UserLoginService } from '../user-login.service';
import { CustomerDetails } from '../customerDetails';
import { Router } from '@angular/router';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  message: any;
  enableButton: boolean=true;
  custDetails: CustomerDetails= new CustomerDetails("","");
  custName1: any;
  
  custCarDetails: CustCarDetails= new CustCarDetails("","","","","","");
 userName1: any;
  list: any;

  constructor(private service:UserLoginService,public router: Router) { }

  ngOnInit(): void {
    this.custName1=JSON.parse(localStorage.getItem("name"));
    // this.userName1=localStorage.getItem("username");
  }

  public saveDetails(){
    // console.log("bef"+this.custCarDetails.custName);
    this.custCarDetails.userName=this.custName1;
    console.log(this.custCarDetails.userName);
    console.log("data");
    this.service.addDetails(this.custCarDetails).subscribe(
      data =>{
        console.log(data);
        this.router.navigate(['/success']);
        
        
      },
      error =>{
      
        alert("Please fill All Details ");
      }
     
      
    )
  }
  public viewDetails(){
    this.custCarDetails.userName=this.custName1;
    // alert(this.custName1);
    this.list=[];
    this.service.view(this.custCarDetails).subscribe(
      data =>{
        
        this.list=data;
      }
      ,error =>{
        alert("no records found");
      }
    )
  }
  public delete(){
    alert('Select an id');
    this.router.navigate(['/delete']);
    
  }
 
  }
