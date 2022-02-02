import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registeredUserInfo: any = {}

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    // document.querySelector('#execute')?.addEventListener('click', this.login);
  }

  login(){
    console.log('LOGIN');
  }

  




  
}
