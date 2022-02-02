import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registeredUserInfo: any = {}

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    document.querySelector('#execute')?.addEventListener('click', this.login);
  }

  login(){
    
  }

  register(){
    // this._auth.registerUser(this.registeredUserInfo).subscribe(
    //   res => {
    //     console.log(res);
    //   }
    // )
    
    this._auth.testThis();
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

  
}
