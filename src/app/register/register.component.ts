import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registeredUserInfo: any = {}
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }


  register(){
    // this._auth.registerUser(this.registeredUserInfo).subscribe(
    //   res => {
    //     console.log(res);
    //   }
    // )
    
    console.log('REGISTER')
    this._auth.testThis();
  }


}
