import { Component, OnInit } from '@angular/core';
import { QuizModel } from '../models/quiz.model';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent implements OnInit {

  quizzes: QuizModel[];

  constructor( private quizService: QuizService ) {
   }

  ngOnInit() {
    this.quizService.getQuizes().subscribe(res => {
      this.quizzes = res;
      console.log(res);
    })
  }

}
