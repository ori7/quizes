import { Component, OnInit } from '@angular/core';
import { QuizModel } from '../models/quiz.model';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  quiz: QuizModel;
  constructor(private quizService: QuizService) { 
    this.quiz = <QuizModel>{};
  }

  ngOnInit() {
  }

  addQuiz(){
    console.log(this.quiz);
    this.quizService.

  }

}
