import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { CONNECTION } from 'src/connection';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css']
})
export class AddtopicComponent implements OnInit {
  api = CONNECTION;
  topicName: string = '';
  topicDescrip: string = '';
  private _addTopicUrl = `${this.api}/api/topics`;
  token = localStorage.getItem("token");

  constructor(private router: Router, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
  }


  addTopic(){
    if (this.topicName.trim().length === 0 || this.topicDescrip.trim().length === 0){
      alert('The topic must have a name & description!')
      document.querySelector<any>('#topic-box').value = '';
      document.querySelector<any>('#des-box').value = '';
    }
    else{
      let body = {
        name: this.topicName,
        description: this.topicDescrip
      }
      let header = new HttpHeaders().set(
        "Authorization",
        `Bearer ${this.token}`
      );


      this.http.post<any>(this._addTopicUrl, body, {headers: header}).subscribe(
        (res: any) => {console.log(res);
          alert(`The topic "${this.topicName} has been created!`)
          this.route.navigateByUrl('/', {skipLocationChange: true}).then(() =>{
            this.route.navigate([`/study`]);
          });
        
          (error: any) => {alert("You must be logged in to add a topic!"),
          console.log(error);
          }}
      )
      
  }

}

}
