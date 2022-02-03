import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: string = '';
  password: string = '';
  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    
  }

  login(){
    if (this.email.trim().length === 0 || this.password.trim().length === 0){
      alert('Username or password may not be empty!')
      document.querySelector<any>('#box').value = '';
      document.querySelector<any>('#text').value = '';
    }
    else{
      const loginInfo =
         {
        email: this.email,
        password: this.password
      };

      this._auth.loginUser(loginInfo).subscribe(
        res => {console.log(res);
          localStorage.setItem('token', res.jwtToken);
          this.router.navigate(['/']);
          document.querySelector<any>("#login").textContent = "LOG OUT";
          document.querySelector<any>("#login-status").routerLink="null";
          document.querySelector<any>("#login-status").addEventListener('click', this.logout)
          alert("You're Logged In!")},
    
          error => {alert("Invalid Username or Password! Please try again!"),
          console.log(error);
          });
          document.querySelector<any>('#box').value = '';
          document.querySelector<any>('#text').value = '';
    }
  }

  swapLoginStatus(){
    let loggedIn = document.createElement("h1");
    loggedIn.textContent = "Logged In!"
    return loggedIn;
  }

  logout(){
    if (localStorage.getItem('token') != null){
      let input = confirm('Are you sure you want to log out?');
      if (input === true){
        document.querySelector<any>("#login").textContent = "LOGIN";
        localStorage.clear();
        console.log(document.querySelector<any>("#login-status"));
      }
      
    }
    
  }
}
