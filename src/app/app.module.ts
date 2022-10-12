import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnswersComponent } from './components/answers/answers.component';
import { QuestionComponent } from './components/question/question.component';


@NgModule({
  declarations: [AppComponent, AnswersComponent, QuestionComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
