import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {


  constructor(private http:HttpClient) { }

  public login(customerDetails){
    return this.http.post("http://localhost:8084/login/user",customerDetails);
  }

  public addDetails(custCarDetails){
    return this.http.post("http://localhost:8084/login/details",custCarDetails,{responseType:'text' as 'json'});
  }
  public register(customerDetails){
    return this.http.post("http://localhost:8084/login/register",customerDetails,{responseType:'text' as 'json'});
  }
}
