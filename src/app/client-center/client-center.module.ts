import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimsComponent } from './claims/claims.component';
import { QuestionsAndAnswersComponent } from './questions-and-answers/questions-and-answers.component';
import { UserServicesComponent } from './user-services/user-services.component';
import { ClientCenterRoutingModule } from './client-center-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ClaimsComponent,
    QuestionsAndAnswersComponent,
    UserServicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientCenterRoutingModule,
    MaterialModule
  ]
})
export class ClientCenterModule { }
