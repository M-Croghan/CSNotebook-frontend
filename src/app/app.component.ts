import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csnotebook-frontend';
  PUBLIC_TOPICS: any = [];

  grabTopics(){
    return this.PUBLIC_TOPICS;
  }

  setTopics(topics: any){
    this.PUBLIC_TOPICS = topics;
  }

}

