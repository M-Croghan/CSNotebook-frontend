import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
    document.querySelector('#execute')?.addEventListener('click', this.login);
  }



  login(){
    console.log('LOGIN');
  }

  register(){
    console.log('REGISTER');
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
