import { Component, OnInit } from '@angular/core';
import { CONNECTION } from 'src/connection';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-topic',
  templateUrl: './update-topic.component.html',
  styleUrls: ['./update-topic.component.css']
})
export class UpdateTopicComponent implements OnInit {
  api = CONNECTION;
  topicName: string = '';
  topicDescrip: string = '';
  private _updateTopicUrl = `${this.api}/api/topics/`;
  token = localStorage.getItem("token");

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }


  updateTopic(){
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

      
      this.http.put<any>(`${this._updateTopicUrl}${this.topicName}`, body, {headers: header}).subscribe(
        (res: any) => { 
          console.log(res);
          alert(`The topic "${this.topicName} has been updated!`)
          this.router.navigate(['/study'])
        },
        (error: any) => 
          {alert("You have entered an invalid topic to update!"),
          console.log(error);
          }
      );
    }     
  }

}


