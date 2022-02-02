import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONNECTION } from 'src/connection';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = CONNECTION;
  private _registerUrl = `${this.api}/auth/users/register`
  private _loginUrl = `${this.api}/auth/users/login`

  constructor(private http: HttpClient) { }


  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

}
