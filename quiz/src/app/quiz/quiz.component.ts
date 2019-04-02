import { Component, OnInit, Input } from '@angular/core';
import { QuizModel } from '../models/quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @Input() quiz: QuizModel;

  constructor() { }

  ngOnInit() {
  }

}
