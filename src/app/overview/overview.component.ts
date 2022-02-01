import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  topic: any;
  name: any = '';
  cards: any = [];
  description: string = '';

  constructor(private route: ActivatedRoute, private topicList: AppComponent, private http: HttpClient) { }

  ngOnInit(): void {
    
    this.getTopicInfo();
    
    
    
    console.log(this.topic);
  }

  getTopicInfo(){
    this.route.paramMap.subscribe(params => {
      this.name = params.get('topicName')
    });
    const topics = this.topicList.grabTopics();
    this.topic = topics.find((x: { name: any; }) => x.name === this.name);
    
    for (let i = 0; i < this.topic.cards.length; i++){
      this.cards.push(this.topic.cards[i]);
    }
    console.log(this.cards);
  }

}
