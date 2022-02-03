import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csnotebook-frontend';
  PUBLIC_TOPICS: any = [];
  loggedIn = localStorage.getItem('token');
  CUSTOM_TOPICS: any = []

  grabTopics(){
    return this.PUBLIC_TOPICS;
  }

  setTopics(topics: any){
    this.PUBLIC_TOPICS = topics;
  }

  grabCustom(){
    return this.CUSTOM_TOPICS;
  }

  setCustom(topics: any){
    this.CUSTOM_TOPICS = topics;
  }

}

