import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TrimTextPipe } from './common-pipes/trim-text.pipe';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [  
    TrimTextPipe, 
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TrimTextPipe,
    LoaderComponent
  ]
})
export class SharedModule { }
