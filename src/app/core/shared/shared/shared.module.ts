import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { AboutComponent } from 'src/app/pages/about/about.component';


@NgModule({
  declarations: [
    SharedComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule {
  constructor() {
    console.log('Shared Module loaded.');
  }
 }
