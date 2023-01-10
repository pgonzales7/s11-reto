import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameComponent } from './name/name.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NameComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NameComponent
  ]
})
export class ValueModule { }
