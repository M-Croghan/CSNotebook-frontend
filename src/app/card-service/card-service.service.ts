import { Injectable, Input } from '@angular/core';
import { CONNECTION } from 'src/connection';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
api = CONNECTION;
loggedIn = localStorage.getItem('token');

  constructor(private http: HttpClient, private route: Router) { }

  deleteCard(topicName: any, question: any){

    let header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.loggedIn}`
    );

    this.http.delete<any>(`${this.api}/api/topics/${topicName}/cards/${question}`, {headers: header}).subscribe(
      (res: any) => {
        console.log(res);
        alert(`Selected card in the ${topicName} category has been deleted!`)
        this.route.navigate(['/study/myTopics']);
      },
      (err :any) => {
        console.log(err);
        alert("Invalid card ID!")
      }
    )
  }

  addCard(topicName:any){
    let header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.loggedIn}`
    );

    let question = prompt("Enter a question for the card:");
    let answer = prompt("Enter an answer for the card:");
    let link = prompt("Enter a source link for the card:")

    const body = {
      question: question,
      answer: answer,
      link: link
    }

    this.http.post<any>(`${this.api}/api/topics/${topicName}/cards`, body, {headers: header}).subscribe(
      (res: any) => {
        console.log(res);
        alert(`New card created in ${topicName} category!`)
        this.route.navigate(['']);
      },
      (err :any) => {
        console.log(err);
        alert("That card has already been completed!")
      }

    )
  }

  update(topicName: any, q: any){
    let header = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.loggedIn}`
    );

    let question = prompt("Enter a question for the card:");
    let answer = prompt("Enter an answer for the card:");
    let link = prompt("Enter a source link for the card:")

    const body = {
      question: question,
      answer: answer,
      link: link
    }

    this.http.put<any>(`${this.api}/api/topics/${topicName}/cards/${q}`, body, {headers: header}).subscribe(
      (res: any) => {
        console.log(res);
        alert(`New card created in ${topicName} category!`)
        this.route.navigate(['/study/myTopics']);
      },
      (err :any) => {
        console.log(err);
        alert("That card has already been completed!")
      }

    )
  }

}

