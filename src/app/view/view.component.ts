import { Component, OnInit } from '@angular/core';
import { CustCarDetails } from '../custCarDetails';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  custCarDetails: CustCarDetails= new CustCarDetails("","","","","","");
 userName1: any;
  list: any;
  url="";
  display: boolean=false;

  constructor(private service:UserLoginService) { }

  ngOnInit(): void {
  }

  public viewDetails(){
    // this.custCarDetails.userName=this.custName1;
    // alert(this.custName1);
    this.list=[];
    this.service.viewToAdmin().subscribe(
      data =>{
        this.display=true;
        
        this.list=data;
      }
      ,error =>{
        alert("no records found");
      }
    )
  }
  
}
