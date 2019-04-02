import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { QuizComponent } from './quiz/quiz.component';
import { ListQuizComponent } from './list-quiz/list-quiz.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'listQuiz', component: ListQuizComponent },
  { path: 'addQuiz', component: AddQuizComponent },
  { path: 'quiz/:id', component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
