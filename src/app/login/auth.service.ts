import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONNECTION } from 'src/connection';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = CONNECTION;
  private _registerUrl = 'http://localhost:9092/auth/users/register';
  // `${this.api}/auth/users/register`
  private _loginUrl = `${this.api}/auth/users/login`

  constructor(private http: HttpClient) {}


  registerUser(user: any){
    return this.http.post<any>(this._registerUrl, user);
  }


  testThis(){
    console.log("Am I Undefined?");
  }

}
  