import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CONNECTION } from 'src/connection';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topicList: any;
  public static numTopics: any = [];

  constructor(private topics: AppComponent) { }

  ngOnInit(): void {
    this.generateTopicList();
  }

  generateTopicList(){
    let allTopics = this.topics.grabTopics();
    this.topicList = allTopics;
    for(let i = 0; i < allTopics; i++){
      TopicComponent.numTopics.push(i);
    }
  }


  

}
