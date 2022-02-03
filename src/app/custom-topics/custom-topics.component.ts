import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-custom-topics',
  templateUrl: './custom-topics.component.html',
  styleUrls: ['./custom-topics.component.css']
})
export class CustomTopicsComponent implements OnInit {
  topicList: any;
  public static numTopics: any = [];

  constructor(private topics: AppComponent) { }

  ngOnInit(): void {
    this.generateTopicList();
  }


  generateTopicList(){
    let allTopics = this.topics.grabCustom();
    this.topicList = allTopics;
    for(let i = 0; i < allTopics; i++){
      CustomTopicsComponent.numTopics.push(i);
    }
  }
}
