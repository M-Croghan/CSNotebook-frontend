import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CONNECTION } from 'src/connection';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {
  static gatheredTopics: any;
  public static topics: any;
  api = CONNECTION;

  constructor(private http: HttpClient, private topicList: AppComponent) { }

  ngOnInit(): void {
    this.getAllTopics();
    StudyComponent.topics = this.topicList.grabTopics();
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
}
