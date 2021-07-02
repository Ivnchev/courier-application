import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateQuestionComponent } from './create-question/create-question.component';



@NgModule({
  declarations: [
    NewsComponent,
    PanelComponent,
    CreateQuestionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
