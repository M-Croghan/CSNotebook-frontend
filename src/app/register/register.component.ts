import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registeredUserInfo: any = {}
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  register(){
    if (this.registeredUserInfo === undefined){
      alert('Username or password may not be empty!')
    }
    else{
      this._auth.registerUser(this.registeredUserInfo).subscribe(
        res => {console.log(res);
        this.router.navigate(['/login']);
        alert("Your account has been created, please log in!")},
  
        error => {alert("This user already exists!"),
        console.log(error);
        document.querySelector<any>('#box').value = '';
        document.querySelector<any>('#text').value = ''
        });
    }
    
  }


}
