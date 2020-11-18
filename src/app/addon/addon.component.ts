import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public submit(){
    alert("successfully added");
    window.location.reload();
  
}
// public saveDetails(){
//     // console.log("bef"+this.custCarDetails.custName);
//     this.custCarDetails.userName=this.custName1;
//     console.log(this.custCarDetails.userName);
//     console.log("data");
//     this.service.addDetails(this.custCarDetails).subscribe(
//       data =>{
//         console.log(data);
//         this.router.navigate(['/success']);
        
        
//       },
//       error =>{
      
//         alert("Please fill All Details ");
//       }
     
      
//     )
//   }
}
