import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TrimTextPipe } from './common-pipes/trim-text.pipe';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [  
    TrimTextPipe, 
    LoaderComponent, ModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TrimTextPipe,
    LoaderComponent
  ],
  entryComponents: [ModalComponent]
})
export class SharedModule { }
