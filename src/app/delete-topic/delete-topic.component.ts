import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONNECTION } from 'src/connection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-topic',
  templateUrl: './delete-topic.component.html',
  styleUrls: ['./delete-topic.component.css']
})
export class DeleteTopicComponent implements OnInit {
  api = CONNECTION;
  topicName: string = '';
  private _deleteTopicUrl = `${this.api}/api/topics`;
  token = localStorage.getItem("token");

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  

  deleteTopic(){
    if (this.topicName.trim().length === 0){
      alert('Enter the name of the topic you wish to delete!');
      document.querySelector<any>('#topic-box').value = '';
    }
    else{
      let header = new HttpHeaders().set(
        "Authorization",
        `Bearer ${this.token}`
      );
    
    let deleteUrl = `${this._deleteTopicUrl}/${this.topicName}`
    let checkDelete = confirm(`Do you wish to delete the topic: ${this.topicName}?`)
    if (checkDelete === true){
      this.http.delete(deleteUrl, {headers: header}).subscribe(
        (res: any) => {console.log(res);
          alert(`Topic ${this.topicName} has been deleted!`)
          this.router.navigate(['/study']);
        
          (error: any) => {alert("You must be logged in to delete! a topic!"),
          console.log(error);
          }}
      )
    }
  }
  }

}
