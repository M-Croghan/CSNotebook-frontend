import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONNECTION } from 'src/connection';
import { AppComponent } from '../app.component';
import { HttpHeaders } from '@angular/common/http';
import { CustomTopicsComponent } from '../custom-topics/custom-topics.component';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {
  static gatheredTopics: any;
  public static topics: any;
  api = CONNECTION;
  loggedIn = localStorage.getItem('token');
  public static customTopics: any;
  

  constructor(private http: HttpClient, private topicList: AppComponent) { }

  ngOnInit(): void {
    this.getAllTopics();
    StudyComponent.topics = this.topicList.grabTopics();
    StudyComponent.customTopics = this.topicList.grabCustom();
    if (localStorage != null){
      this.getCustomTopics();
    }
  }

  getAllTopics(){
    let check = this.topicList.grabTopics()
    if (check.length === 0){
      this.http.get<any>(`${this.api}/api/topics`)
      .subscribe((data) =>{
        console.log(data);
        this.topicList.setTopics(data);
      });
    }
  }

  getCustomTopics(){
    let check = this.topicList.grabCustom();
    if (check.length != CustomTopicsComponent.numTopics || check.length === 0){
      let header = new HttpHeaders().set(
        "Authorization",
        `Bearer ${this.loggedIn}`
      );

      this.http.get<any>(`${this.api}/api/topics/custom`, {headers: header})
      .subscribe((data) => {
        console.log(data);
        this.topicList.setCustom(data);
      })
    }
  }
}
