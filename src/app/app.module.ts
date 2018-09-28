import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

import { CategoriesComponent } from './categories/categories.component';
import { CategoriesResolver } from './categories/categories.resolver';
import { TrainerJobAdComponent }   from './categories/trainer-job-ad.component';
import { AdBannerComponent }    from './categories/ad-banner.component';
import { TrainerProfileComponent } from './categories/trainer-profile.component';
import { AdDirective }          from './categories/ad.directive';
import { AdService }            from './categories/ad.service';

import { CategoriesService } from './services/categories.service';

import { CategoryQuestionsResolver } from './category-questions/category-questions.resolver';
import { CategoryQuestionsComponent } from './category-questions/category-questions.component';
import { NewQuestionModalComponent } from './category-questions/new-question/new-question-modal.component';
import { DeleteQuestionModalComponent } from './category-questions/delete-question/delete-question-modal.component';
import { QuestionsService } from './services/questions.service';

import { NewAnswerModalComponent } from './question-answers/new-answer/new-answer-modal.component';
import { UpdateAnswerModalComponent } from './question-answers/update-answer/update-answer-modal.component';
import { DeleteAnswerModalComponent } from './question-answers/delete-answer/delete-answer-modal.component';
import { QuestionAnswersComponent } from './question-answers/question-answers.component';
import { QuestionAnswersResolver } from './question-answers/question-answers.resolver';
import { AnswersService } from './services/answers.service';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { QuestionApi } from '../../sdk';
import { AnswerApi } from '../../sdk';

import {SDKModels} from '../../sdk/services/custom';
import { LoopBackAuth } from '../../sdk/services/core/auth.service';
import { InternalStorage } from '../../sdk/storage/storage.swaps';
import { JSONSearchParams } from '../../sdk/services/core/search.params';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryQuestionsComponent,
    NewQuestionModalComponent,
    NewAnswerModalComponent,
    UpdateAnswerModalComponent,
    QuestionAnswersComponent,
    DeleteQuestionModalComponent,
    DeleteAnswerModalComponent,
    AdBannerComponent,
    TrainerJobAdComponent,
    TrainerProfileComponent,
    AdDirective
  ],
  imports: [
    RouterModule.forRoot(routes,
      { useHash: false }
    ),
    SharedModule,BrowserModule
  ],
  entryComponents: [
    DeleteQuestionModalComponent,
    DeleteAnswerModalComponent,
    NewQuestionModalComponent,
    NewAnswerModalComponent,
    UpdateAnswerModalComponent,
    TrainerJobAdComponent, TrainerProfileComponent
  ],
  providers: [
    AdService,
    CategoriesService,
    QuestionsService,
    QuestionApi,
    AnswerApi,
    SDKModels,
    LoopBackAuth,
    InternalStorage,
    JSONSearchParams,
    AnswersService,
    CategoryQuestionsResolver,
    CategoriesResolver,
    QuestionAnswersResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
