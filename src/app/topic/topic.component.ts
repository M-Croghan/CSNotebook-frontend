import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CONNECTION } from 'src/connection';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topics: any;
  api = CONNECTION;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.getTopics();
    
    console.log(this.topics)
  }

  getTopics(){
    this.http.get<any>(`${this.api}/api/topics`)
      .subscribe((data) =>{
        console.log(data);
        this.topics = data;
      });
  }

  printStuff(){
    console.log(this.topics);
  }

}
