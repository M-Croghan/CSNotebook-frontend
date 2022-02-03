import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-custom-overview',
  templateUrl: './custom-overview.component.html',
  styleUrls: ['./custom-overview.component.css']
})
export class CustomOverviewComponent implements OnInit {
  topic: any;
  name: any = '';
  cards: any = [];
  description: string = '';
  cardIndex: number = 0;
  questionCheck: boolean = true;
  loggedIn = localStorage.getItem('token');

  constructor(private route: ActivatedRoute, private topicList: AppComponent) { }
  

  ngOnInit(): void {
    this.getCustomTopics();
  }



  getCustomTopics(){
    this.route.paramMap.subscribe(params => {
      this.name = params.get('customTopicName')
    });
    const topics = this.topicList.grabCustom();
    this.topic = topics.find((x: { name: any;}) => x.name === this.name);

    for (let i = 0; i < this.topic.cards.length; i++){
      this.cards.push(this.topic.cards[i]);
    }
    console.log(this.cards);
  }

  flipCard(){
    let cardFace = document.getElementsByClassName('card-face');
    if (this.questionCheck){
      cardFace[0].innerHTML = `Answer: ${this.cards[this.cardIndex].answer}`;
      this.questionCheck = false;
    }
    else{
      cardFace[0].innerHTML = `Question: ${this.cards[this.cardIndex].question}`
      this.questionCheck = true;
    }
    
  }

  nextCard(){
    let cardFace = document.getElementsByClassName('card-face');
    if (this.cardIndex < this.cards.length - 1){
      this.cardIndex++;
    }
    else{
      this.cardIndex = 0;
    }
    this.questionCheck = true;
    cardFace[0].innerHTML = `Question: ${this.cards[this.cardIndex].question}`
  }

  previousCard(){
    let cardFace = document.getElementsByClassName('card-face');
    if (this.cardIndex > 0){
      this.cardIndex--;
    }
    else{
      this.cardIndex = this.cards.length - 1;
    }
    this.questionCheck = true;
    cardFace[0].innerHTML = `Question: ${this.cards[this.cardIndex].question}`
  }




}
