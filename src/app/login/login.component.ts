import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONNECTION } from 'src/connection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  api = CONNECTION;
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    document.querySelector('#execute')?.addEventListener('click', this.login);
  }



  login(){
    console.log('LOGIN');

  }

  register(){
    console.log('REGISTER');
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );

    const body = JSON.stringify(
      {
        email: this.email,
        password: this.password
      }
    )
    
      this.post(body, headers);
    
  }


  swapLoginRegister(){
    let button = document.querySelector('#execute')
    let heading = document.querySelector('#login-lbl')
    let swapLabel = document.querySelector('#switch')

    if (heading?.textContent === 'LOGIN' && swapLabel?.textContent != null && button?.textContent != null){
      heading.textContent = 'REGISTER';
      swapLabel.textContent = "Already a User? Click Here."
      button.textContent = "REGISTER";
      button.removeEventListener('click', this.login);
      button.addEventListener('click', this.register);
      
    }
    else if (heading?.textContent === 'REGISTER' && swapLabel?.textContent != null && button?.textContent != null){
      heading.textContent = 'LOGIN';
      swapLabel.textContent = "New to CS Notebook? Register Here."
      button.textContent = "LOGIN";
      button.removeEventListener('click', this.register);
      button.addEventListener('click', this.login);
    }
    console.log(button);
  }

  post(b: any, h: any){
    return this.http.post<any>(`${this.api}/auth/users/register`, b,
    {
      headers: h
    })
    .subscribe((res) => console.log(res));
  }
  
}
