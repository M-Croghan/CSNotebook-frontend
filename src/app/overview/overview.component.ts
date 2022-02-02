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
  cardIndex: number = 0;
  questionCheck: boolean = true;

  constructor(private route: ActivatedRoute, private topicList: AppComponent) { }

  ngOnInit(): void {
    
    this.getTopicInfo();
    
    let topicLogo: any | null = document.querySelector('.topic-logo');
    console.log(topicLogo.attributes[1].value)
    if (this.name === 'JavaScript'){
      topicLogo.attributes[1].value = "assets/img/card-logos/js.png"
    }
    else if (this.name.startsWith('C')){
      topicLogo.attributes[1].value = "assets/img/card-logos/cs.png"
    }
    else if (this.name.startsWith('D')){
      topicLogo.attributes[1].value = "assets/img/card-logos/pg.png"
    }
    else if (this.name.startsWith('H')){
      topicLogo.attributes[1].value = "assets/img/card-logos/webdev.png"
    }
    else if (this.name === 'Java'){
      topicLogo.attributes[1].value = "assets/img/card-logos/java.png"
    }
    else if (this.name.startsWith('S')){
      topicLogo.attributes[1].value = "assets/img/card-logos/spring.png"
    }
    else if (this.name.startsWith('G')){
      topicLogo.attributes[1].value = "assets/img/card-logos/git.png"
    }
    else if (this.name.startsWith('A')){
      topicLogo.attributes[1].value = "assets/img/card-logos/angular.png"
    }
    else{
      topicLogo.attributes[1].value = "assets/img/csn-logo.png"
    }
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
