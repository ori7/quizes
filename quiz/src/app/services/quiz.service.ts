import { Injectable } from '@angular/core';
import { QuizModel } from '../models/quiz.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor( private httpClient: HttpClient ) { }

  addQuiz(quiz: QuizModel): Observable<object>{

  return this.httpClient.post<object>(environment.serverUrl + 'quiz', quiz);    
  }

  getQuizes(): Observable<QuizModel[]>{

    return this.httpClient.get<QuizModel[]>(environment.serverUrl + 'quiz');
  }

}
