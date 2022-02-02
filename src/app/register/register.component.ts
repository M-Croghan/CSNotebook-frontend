import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  register(){
    if (this.email.trim().length === 0 || this.password.trim().length === 0){
      alert('Username or password may not be empty!')
      document.querySelector<any>('#box').value = '';
      document.querySelector<any>('#text').value = '';
    }
    else{
      const registeredUserInfo = {
        email: this.email,
        password: this.password
      }

      this._auth.registerUser(registeredUserInfo).subscribe(
        res => {console.log(res);
        localStorage.setItem('token', res.jwtToken);
        this.router.navigate(['/login']);
        alert("Your account has been created, please log in!")},
  
        error => {alert("This user already exists!"),
        console.log(error);
        document.querySelector<any>('#box').value = '';
        document.querySelector<any>('#text').value = '';
        });
    }
    
  }


}
