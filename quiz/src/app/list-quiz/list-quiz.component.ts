import { Component, OnInit } from '@angular/core';
import { QuizModel } from '../models/quiz.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent implements OnInit {

  quizzes: QuizModel;

  constructor( private httpClient: HttpClient ) {
    this.quizzes=<QuizModel>{};
   }

  ngOnInit() {
    this.httpClient.get.
  }



}
