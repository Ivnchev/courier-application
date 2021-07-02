import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TrimTextPipe } from './common-pipes/trim-text.pipe';



@NgModule({
  declarations: [  
    TrimTextPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TrimTextPipe
  ]
})
export class SharedModule { }
