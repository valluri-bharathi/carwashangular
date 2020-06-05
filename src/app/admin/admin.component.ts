import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';
import { Router, RouterLink } from '@angular/router';
import { CustomerDetails } from '../customerDetails';
import { CustCarDetails } from '../custCarDetails';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  message: any;
  enableButton: boolean=true;
  custDetails: CustomerDetails= new CustomerDetails("","","");
  custName1: any;
  
  custCarDetails: CustCarDetails= new CustCarDetails("","","","","","");
  // userName1: any;
  list: any;
  url="";
  display: boolean=false;

  constructor(private service:UserLoginService,public router: Router)  {}
   

  ngOnInit(): void {
    // this.custName1=JSON.parse(localStorage.getItem("name"));

  }
  // public viewDetails(){
   
  //   this.list=[];
  //   this.service.viewToAdmin().subscribe(
  //     data =>{
  //       this.display=true;
        
  //       this.list=data;
  //     }
  //     ,error =>{
  //       alert("no records found");
  //     }
  //   )
  // }
  // public about(){
  //   <a [routerLink]="['/about']"></a>
  //   // this.router.navigate(['/about']);

  // }

}
