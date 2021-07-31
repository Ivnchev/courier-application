import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { SharedModule } from '../shared/shared.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsSearchPipe } from './pipes/news-search.pipe';
import { SupportQuestionSearchPipe } from './pipes/support-question-search.pipe';
import { SupportQuestionListComponent } from './support-question-list/support-question-list.component';
import { CounterComponent } from './counter/counter.component';
import { EntryCountService } from '../shared/services/entry-count.service';
import { ControlPanelViewDirective } from './control-panel-view.directive';



@NgModule({
  declarations: [
    NewsComponent,
    PanelComponent,
    CreateQuestionComponent,
    NewsListComponent,
    NewsSearchPipe,
    SupportQuestionSearchPipe,
    SupportQuestionListComponent,
    CounterComponent,
    ControlPanelViewDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    SharedModule
  ],
  providers: [
    EntryCountService
  ],
  exports: [
    ControlPanelViewDirective,
  ]
})
export class AdminModule { }
