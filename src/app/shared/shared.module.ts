import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TrimTextPipe } from './common-pipes/trim-text.pipe';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { AuthGuard } from './guards/auth.guard';
import { HttpRequestHandlerProvider } from './http-request-handler.interceptor';

@NgModule({
  declarations: [  
    TrimTextPipe, 
    LoaderComponent, 
    ModalComponent, 
    AlertMessageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TrimTextPipe,
    LoaderComponent,
    AlertMessageComponent
  ],
  entryComponents: [ModalComponent],
  providers: [
    AuthGuard,
    HttpRequestHandlerProvider
  ]
})
export class SharedModule { }
