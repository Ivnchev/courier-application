import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsAndAnswersComponent } from './questions-and-answers/questions-and-answers.component';
import { ClientCenterRoutingModule } from './client-center-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { RegisterClaimComponent } from './register-claim/register-claim.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchClaimPipe } from './search-claim.pipe';
import { SearchQuestionPipe } from './search-question.pipe';
import { ClientServicesComponent } from './client-services/client-services.component';
import { ServicePricesComponent } from './service-prices/service-prices.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    QuestionsAndAnswersComponent,
    ClaimListComponent,
    RegisterClaimComponent,
    SearchClaimPipe,
    SearchQuestionPipe,
    ClientServicesComponent,
    ServicePricesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientCenterRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ClaimListComponent,
    RegisterClaimComponent
  ]
})
export class ClientCenterModule { }
